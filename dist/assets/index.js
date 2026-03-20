(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function l(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(d){if(d.ep)return;d.ep=!0;const p=l(d);fetch(d.href,p)}})();function vh(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Cc={exports:{}},yr={};var wm;function jy(){if(wm)return yr;wm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(o,d,p){var f=null;if(p!==void 0&&(f=""+p),d.key!==void 0&&(f=""+d.key),"key"in d){p={};for(var h in d)h!=="key"&&(p[h]=d[h])}else p=d;return d=p.ref,{$$typeof:a,type:o,key:f,ref:d!==void 0?d:null,props:p}}return yr.Fragment=r,yr.jsx=l,yr.jsxs=l,yr}var vm;function Ny(){return vm||(vm=1,Cc.exports=jy()),Cc.exports}var u=Ny(),Ac={exports:{}},xe={};var Sm;function Ly(){if(Sm)return xe;Sm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),T=Symbol.iterator;function w(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,W={};function U(E,R,k){this.props=E,this.context=R,this.refs=W,this.updater=k||V}U.prototype.isReactComponent={},U.prototype.setState=function(E,R){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,R,"setState")},U.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function le(){}le.prototype=U.prototype;function X(E,R,k){this.props=E,this.context=R,this.refs=W,this.updater=k||V}var he=X.prototype=new le;he.constructor=X,K(he,U.prototype),he.isPureReactComponent=!0;var ve=Array.isArray;function q(){}var te={H:null,A:null,T:null,S:null},ye=Object.prototype.hasOwnProperty;function ge(E,R,k){var $=k.ref;return{$$typeof:a,type:E,key:R,ref:$!==void 0?$:null,props:k}}function Ae(E,R){return ge(E.type,R,E.props)}function se(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function ne(E){var R={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(k){return R[k]})}var Q=/\/+/g;function Z(E,R){return typeof E=="object"&&E!==null&&E.key!=null?ne(""+E.key):R.toString(36)}function I(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(q,q):(E.status="pending",E.then(function(R){E.status==="pending"&&(E.status="fulfilled",E.value=R)},function(R){E.status==="pending"&&(E.status="rejected",E.reason=R)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function L(E,R,k,$,pe){var oe=typeof E;(oe==="undefined"||oe==="boolean")&&(E=null);var je=!1;if(E===null)je=!0;else switch(oe){case"bigint":case"string":case"number":je=!0;break;case"object":switch(E.$$typeof){case a:case r:je=!0;break;case y:return je=E._init,L(je(E._payload),R,k,$,pe)}}if(je)return pe=pe(E),je=$===""?"."+Z(E,0):$,ve(pe)?(k="",je!=null&&(k=je.replace(Q,"$&/")+"/"),L(pe,R,k,"",function(Yt){return Yt})):pe!=null&&(se(pe)&&(pe=Ae(pe,k+(pe.key==null||E&&E.key===pe.key?"":(""+pe.key).replace(Q,"$&/")+"/")+je)),R.push(pe)),1;je=0;var We=$===""?".":$+":";if(ve(E))for(var He=0;He<E.length;He++)$=E[He],oe=We+Z($,He),je+=L($,R,k,oe,pe);else if(He=w(E),typeof He=="function")for(E=He.call(E),He=0;!($=E.next()).done;)$=$.value,oe=We+Z($,He++),je+=L($,R,k,oe,pe);else if(oe==="object"){if(typeof E.then=="function")return L(I(E),R,k,$,pe);throw R=String(E),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return je}function Y(E,R,k){if(E==null)return E;var $=[],pe=0;return L(E,$,"","",function(oe){return R.call(k,oe,pe++)}),$}function ie(E){if(E._status===-1){var R=E._result;R=R(),R.then(function(k){(E._status===0||E._status===-1)&&(E._status=1,E._result=k)},function(k){(E._status===0||E._status===-1)&&(E._status=2,E._result=k)}),E._status===-1&&(E._status=0,E._result=R)}if(E._status===1)return E._result.default;throw E._result}var Se=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},v={map:Y,forEach:function(E,R,k){Y(E,function(){R.apply(this,arguments)},k)},count:function(E){var R=0;return Y(E,function(){R++}),R},toArray:function(E){return Y(E,function(R){return R})||[]},only:function(E){if(!se(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return xe.Activity=_,xe.Children=v,xe.Component=U,xe.Fragment=l,xe.Profiler=d,xe.PureComponent=X,xe.StrictMode=o,xe.Suspense=x,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,xe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return te.H.useMemoCache(E)}},xe.cache=function(E){return function(){return E.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(E,R,k){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var $=K({},E.props),pe=E.key;if(R!=null)for(oe in R.key!==void 0&&(pe=""+R.key),R)!ye.call(R,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&R.ref===void 0||($[oe]=R[oe]);var oe=arguments.length-2;if(oe===1)$.children=k;else if(1<oe){for(var je=Array(oe),We=0;We<oe;We++)je[We]=arguments[We+2];$.children=je}return ge(E.type,pe,$)},xe.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:p,_context:E},E},xe.createElement=function(E,R,k){var $,pe={},oe=null;if(R!=null)for($ in R.key!==void 0&&(oe=""+R.key),R)ye.call(R,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(pe[$]=R[$]);var je=arguments.length-2;if(je===1)pe.children=k;else if(1<je){for(var We=Array(je),He=0;He<je;He++)We[He]=arguments[He+2];pe.children=We}if(E&&E.defaultProps)for($ in je=E.defaultProps,je)pe[$]===void 0&&(pe[$]=je[$]);return ge(E,oe,pe)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(E){return{$$typeof:h,render:E}},xe.isValidElement=se,xe.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:ie}},xe.memo=function(E,R){return{$$typeof:g,type:E,compare:R===void 0?null:R}},xe.startTransition=function(E){var R=te.T,k={};te.T=k;try{var $=E(),pe=te.S;pe!==null&&pe(k,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(q,Se)}catch(oe){Se(oe)}finally{R!==null&&k.types!==null&&(R.types=k.types),te.T=R}},xe.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},xe.use=function(E){return te.H.use(E)},xe.useActionState=function(E,R,k){return te.H.useActionState(E,R,k)},xe.useCallback=function(E,R){return te.H.useCallback(E,R)},xe.useContext=function(E){return te.H.useContext(E)},xe.useDebugValue=function(){},xe.useDeferredValue=function(E,R){return te.H.useDeferredValue(E,R)},xe.useEffect=function(E,R){return te.H.useEffect(E,R)},xe.useEffectEvent=function(E){return te.H.useEffectEvent(E)},xe.useId=function(){return te.H.useId()},xe.useImperativeHandle=function(E,R,k){return te.H.useImperativeHandle(E,R,k)},xe.useInsertionEffect=function(E,R){return te.H.useInsertionEffect(E,R)},xe.useLayoutEffect=function(E,R){return te.H.useLayoutEffect(E,R)},xe.useMemo=function(E,R){return te.H.useMemo(E,R)},xe.useOptimistic=function(E,R){return te.H.useOptimistic(E,R)},xe.useReducer=function(E,R,k){return te.H.useReducer(E,R,k)},xe.useRef=function(E){return te.H.useRef(E)},xe.useState=function(E){return te.H.useState(E)},xe.useSyncExternalStore=function(E,R,k){return te.H.useSyncExternalStore(E,R,k)},xe.useTransition=function(){return te.H.useTransition()},xe.version="19.2.3",xe}var Tm;function iu(){return Tm||(Tm=1,Ac.exports=Ly()),Ac.exports}var J=iu(),jc={exports:{}},br={},Nc={exports:{}},Lc={};var Em;function Oy(){return Em||(Em=1,(function(a){function r(L,Y){var ie=L.length;L.push(Y);e:for(;0<ie;){var Se=ie-1>>>1,v=L[Se];if(0<d(v,Y))L[Se]=Y,L[ie]=v,ie=Se;else break e}}function l(L){return L.length===0?null:L[0]}function o(L){if(L.length===0)return null;var Y=L[0],ie=L.pop();if(ie!==Y){L[0]=ie;e:for(var Se=0,v=L.length,E=v>>>1;Se<E;){var R=2*(Se+1)-1,k=L[R],$=R+1,pe=L[$];if(0>d(k,ie))$<v&&0>d(pe,k)?(L[Se]=pe,L[$]=ie,Se=$):(L[Se]=k,L[R]=ie,Se=R);else if($<v&&0>d(pe,ie))L[Se]=pe,L[$]=ie,Se=$;else break e}}return Y}function d(L,Y){var ie=L.sortIndex-Y.sortIndex;return ie!==0?ie:L.id-Y.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var x=[],g=[],y=1,_=null,T=3,w=!1,V=!1,K=!1,W=!1,U=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function he(L){for(var Y=l(g);Y!==null;){if(Y.callback===null)o(g);else if(Y.startTime<=L)o(g),Y.sortIndex=Y.expirationTime,r(x,Y);else break;Y=l(g)}}function ve(L){if(K=!1,he(L),!V)if(l(x)!==null)V=!0,q||(q=!0,ne());else{var Y=l(g);Y!==null&&I(ve,Y.startTime-L)}}var q=!1,te=-1,ye=5,ge=-1;function Ae(){return W?!0:!(a.unstable_now()-ge<ye)}function se(){if(W=!1,q){var L=a.unstable_now();ge=L;var Y=!0;try{e:{V=!1,K&&(K=!1,le(te),te=-1),w=!0;var ie=T;try{t:{for(he(L),_=l(x);_!==null&&!(_.expirationTime>L&&Ae());){var Se=_.callback;if(typeof Se=="function"){_.callback=null,T=_.priorityLevel;var v=Se(_.expirationTime<=L);if(L=a.unstable_now(),typeof v=="function"){_.callback=v,he(L),Y=!0;break t}_===l(x)&&o(x),he(L)}else o(x);_=l(x)}if(_!==null)Y=!0;else{var E=l(g);E!==null&&I(ve,E.startTime-L),Y=!1}}break e}finally{_=null,T=ie,w=!1}Y=void 0}}finally{Y?ne():q=!1}}}var ne;if(typeof X=="function")ne=function(){X(se)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,Z=Q.port2;Q.port1.onmessage=se,ne=function(){Z.postMessage(null)}}else ne=function(){U(se,0)};function I(L,Y){te=U(function(){L(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(L){switch(T){case 1:case 2:case 3:var Y=3;break;default:Y=T}var ie=T;T=Y;try{return L()}finally{T=ie}},a.unstable_requestPaint=function(){W=!0},a.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ie=T;T=L;try{return Y()}finally{T=ie}},a.unstable_scheduleCallback=function(L,Y,ie){var Se=a.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Se+ie:Se):ie=Se,L){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=ie+v,L={id:y++,callback:Y,priorityLevel:L,startTime:ie,expirationTime:v,sortIndex:-1},ie>Se?(L.sortIndex=ie,r(g,L),l(x)===null&&L===l(g)&&(K?(le(te),te=-1):K=!0,I(ve,ie-Se))):(L.sortIndex=v,r(x,L),V||w||(V=!0,q||(q=!0,ne()))),L},a.unstable_shouldYield=Ae,a.unstable_wrapCallback=function(L){var Y=T;return function(){var ie=T;T=Y;try{return L.apply(this,arguments)}finally{T=ie}}}})(Lc)),Lc}var Cm;function Dy(){return Cm||(Cm=1,Nc.exports=Oy()),Nc.exports}var Oc={exports:{}},xt={};var Am;function My(){if(Am)return xt;Am=1;var a=iu();function r(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(x,g,y){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:_==null?null:""+_,children:x,containerInfo:g,implementation:y}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,xt.createPortal=function(x,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return p(x,g,null,y)},xt.flushSync=function(x){var g=f.T,y=o.p;try{if(f.T=null,o.p=2,x)return x()}finally{f.T=g,o.p=y,o.d.f()}},xt.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(x,g))},xt.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},xt.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var y=g.as,_=h(y,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?o.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:T,fetchPriority:w}):y==="script"&&o.d.X(x,{crossOrigin:_,integrity:T,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},xt.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);o.d.M(x,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(x)},xt.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,_=h(y,g.crossOrigin);o.d.L(x,y,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},xt.preloadModule=function(x,g){if(typeof x=="string")if(g){var y=h(g.as,g.crossOrigin);o.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(x)},xt.requestFormReset=function(x){o.d.r(x)},xt.unstable_batchedUpdates=function(x,g){return x(g)},xt.useFormState=function(x,g,y){return f.H.useFormState(x,g,y)},xt.useFormStatus=function(){return f.H.useHostTransitionStatus()},xt.version="19.2.3",xt}var jm;function Ry(){if(jm)return Oc.exports;jm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Oc.exports=My(),Oc.exports}var Nm;function Py(){if(Nm)return br;Nm=1;var a=Dy(),r=iu(),l=Ry();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(p(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,s=t;;){var i=n.return;if(i===null)break;var c=i.alternate;if(c===null){if(s=i.return,s!==null){n=s;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===n)return x(i),e;if(c===s)return x(i),t;c=c.sibling}throw Error(o(188))}if(n.return!==s.return)n=i,s=c;else{for(var m=!1,b=i.child;b;){if(b===n){m=!0,n=i,s=c;break}if(b===s){m=!0,s=i,n=c;break}b=b.sibling}if(!m){for(b=c.child;b;){if(b===n){m=!0,n=c,s=i;break}if(b===s){m=!0,s=c,n=i;break}b=b.sibling}if(!m)throw Error(o(189))}}if(n.alternate!==s)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),le=Symbol.for("react.consumer"),X=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),Ae=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case U:return"Profiler";case W:return"StrictMode";case ve:return"Suspense";case q:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case X:return e.displayName||"Context";case le:return(e._context.displayName||"Context")+".Consumer";case he:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case ye:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}var I=Array.isArray,L=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Se=[],v=-1;function E(e){return{current:e}}function R(e){0>v||(e.current=Se[v],Se[v]=null,v--)}function k(e,t){v++,Se[v]=e.current,e.current=t}var $=E(null),pe=E(null),oe=E(null),je=E(null);function We(e,t){switch(k(oe,t),k(pe,e),k($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gf(t),e=Kf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}R($),k($,e)}function He(){R($),R(pe),R(oe)}function Yt(e){e.memoizedState!==null&&k(je,e);var t=$.current,n=Kf(t,e.type);t!==n&&(k(pe,e),k($,n))}function fn(e){pe.current===e&&(R($),R(pe)),je.current===e&&(R(je),mr._currentValue=ie)}var Ts,Dr;function mn(e){if(Ts===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ts=t&&t[1]||"",Dr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ts+e+Dr}var Aa=!1;function ja(e,t){if(!e||Aa)return"";Aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(D){var O=D}Reflect.construct(e,[],B)}else{try{B.call()}catch(D){O=D}e.call(B.prototype)}}else{try{throw Error()}catch(D){O=D}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(D){if(D&&O&&typeof D.stack=="string")return[D.stack,O.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),m=c[0],b=c[1];if(m&&b){var S=m.split(`
`),N=b.split(`
`);for(i=s=0;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;for(;i<N.length&&!N[i].includes("DetermineComponentFrameRoot");)i++;if(s===S.length||i===N.length)for(s=S.length-1,i=N.length-1;1<=s&&0<=i&&S[s]!==N[i];)i--;for(;1<=s&&0<=i;s--,i--)if(S[s]!==N[i]){if(s!==1||i!==1)do if(s--,i--,0>i||S[s]!==N[i]){var M=`
`+S[s].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=s&&0<=i);break}}}finally{Aa=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?mn(n):""}function Mr(e,t){switch(e.tag){case 26:case 27:case 5:return mn(e.type);case 16:return mn("Lazy");case 13:return e.child!==t&&t!==null?mn("Suspense Fallback"):mn("Suspense");case 19:return mn("SuspenseList");case 0:case 15:return ja(e.type,!1);case 11:return ja(e.type.render,!1);case 1:return ja(e.type,!0);case 31:return mn("Activity");default:return""}}function Rr(e){try{var t="",n=null;do t+=Mr(e,n),n=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Na=Object.prototype.hasOwnProperty,La=a.unstable_scheduleCallback,Es=a.unstable_cancelCallback,dl=a.unstable_shouldYield,pl=a.unstable_requestPaint,bt=a.unstable_now,fl=a.unstable_getCurrentPriorityLevel,P=a.unstable_ImmediatePriority,F=a.unstable_UserBlockingPriority,fe=a.unstable_NormalPriority,Te=a.unstable_LowPriority,ze=a.unstable_IdlePriority,Dt=a.log,hn=a.unstable_setDisableYieldValue,_t=null,ot=null;function wt(e){if(typeof Dt=="function"&&hn(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(_t,e)}catch{}}var Ge=Math.clz32?Math.clz32:hg,Rn=Math.log,tn=Math.LN2;function hg(e){return e>>>=0,e===0?32:31-(Rn(e)/tn|0)|0}var Pr=256,zr=262144,qr=4194304;function ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Br(e,t,n){var s=e.pendingLanes;if(s===0)return 0;var i=0,c=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=s&134217727;return b!==0?(s=b&~c,s!==0?i=ca(s):(m&=b,m!==0?i=ca(m):n||(n=b&~e,n!==0&&(i=ca(n))))):(b=s&~c,b!==0?i=ca(b):m!==0?i=ca(m):n||(n=s&~e,n!==0&&(i=ca(n)))),i===0?0:t!==0&&t!==i&&(t&c)===0&&(c=i&-i,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:i}function Cs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tu(){var e=qr;return qr<<=1,(qr&62914560)===0&&(qr=4194304),e}function ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function As(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xg(e,t,n,s,i,c){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,S=e.expirationTimes,N=e.hiddenUpdates;for(n=m&~n;0<n;){var M=31-Ge(n),B=1<<M;b[M]=0,S[M]=-1;var O=N[M];if(O!==null)for(N[M]=null,M=0;M<O.length;M++){var D=O[M];D!==null&&(D.lane&=-536870913)}n&=~B}s!==0&&Eu(e,s,0),c!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=c&~(m&~t))}function Eu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-Ge(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|n&261930}function Cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Ge(n),i=1<<s;i&t|e[s]&t&&(e[s]|=t),n&=~i}}function Au(e,t){var n=t&-t;return n=(n&42)!==0?1:hl(n),(n&(e.suspendedLanes|t))!==0?0:n}function hl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ju(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:hm(e.type))}function Nu(e,t){var n=Y.p;try{return Y.p=e,t()}finally{Y.p=n}}var Pn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Pn,vt="__reactProps$"+Pn,Oa="__reactContainer$"+Pn,xl="__reactEvents$"+Pn,yg="__reactListeners$"+Pn,bg="__reactHandles$"+Pn,Lu="__reactResources$"+Pn,js="__reactMarker$"+Pn;function yl(e){delete e[pt],delete e[vt],delete e[xl],delete e[yg],delete e[bg]}function Da(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oa]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$f(e);e!==null;){if(n=e[pt])return n;e=$f(e)}return t}e=n,n=e.parentNode}return null}function Ma(e){if(e=e[pt]||e[Oa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ns(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ra(e){var t=e[Lu];return t||(t=e[Lu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[js]=!0}var Ou=new Set,Du={};function ua(e,t){Pa(e,t),Pa(e+"Capture",t)}function Pa(e,t){for(Du[e]=t,e=0;e<t.length;e++)Ou.add(t[e])}var _g=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mu={},Ru={};function kg(e){return Na.call(Ru,e)?!0:Na.call(Mu,e)?!1:_g.test(e)?Ru[e]=!0:(Mu[e]=!0,!1)}function Ur(e,t,n){if(kg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Hr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function gn(e,t,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+s)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wg(e,t,n){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var i=s.get,c=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(m){n=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bl(e){if(!e._valueTracker){var t=Pu(e)?"checked":"value";e._valueTracker=wg(e,t,""+e[t])}}function zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Pu(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vg=/[\n"\\]/g;function Gt(e){return e.replace(vg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _l(e,t,n,s,i,c,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?kl(e,m,Vt(t)):n!=null?kl(e,m,Vt(n)):s!=null&&e.removeAttribute("value"),i==null&&c!=null&&(e.defaultChecked=!!c),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Vt(b):e.removeAttribute("name")}function qu(e,t,n,s,i,c,m,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){bl(e);return}n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}s=s??i,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=b?e.checked:!!s,e.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),bl(e)}function kl(e,t,n){t==="number"&&Ir(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function za(e,t,n,s){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bu(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function Uu(e,t,n,s){if(t==null){if(s!=null){if(n!=null)throw Error(o(92));if(I(s)){if(1<s.length)throw Error(o(93));s=s[0]}n=s}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s),bl(e)}function qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hu(e,t,n){var s=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,n):typeof n!="number"||n===0||Sg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Iu(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var i in t)s=t[i],t.hasOwnProperty(i)&&n[i]!==s&&Hu(e,i,s)}else for(var c in t)t.hasOwnProperty(c)&&Hu(e,c,t[c])}function wl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Eg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yr(e){return Eg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xn(){}var vl=null;function Sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ba=null,Ua=null;function Yu(e){var t=Ma(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(_l(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var i=s[vt]||null;if(!i)throw Error(o(90));_l(s,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)s=n[t],s.form===e.form&&zu(s)}break e;case"textarea":Bu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&za(e,!!n.multiple,t,!1)}}}var Tl=!1;function Vu(e,t,n){if(Tl)return e(t,n);Tl=!0;try{var s=e(t);return s}finally{if(Tl=!1,(Ba!==null||Ua!==null)&&(Ni(),Ba&&(t=Ba,e=Ua,Ua=Ba=null,Yu(t),e)))for(t=0;t<e.length;t++)Yu(e[t])}}function Ls(e,t){var n=e.stateNode;if(n===null)return null;var s=n[vt]||null;if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=!1;if(yn)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){El=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{El=!1}var zn=null,Cl=null,Vr=null;function Gu(){if(Vr)return Vr;var e,t=Cl,n=t.length,s,i="value"in zn?zn.value:zn.textContent,c=i.length;for(e=0;e<n&&t[e]===i[e];e++);var m=n-e;for(s=1;s<=m&&t[n-s]===i[c-s];s++);return Vr=i.slice(e,1<s?1-s:void 0)}function Gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function Ku(){return!1}function St(e){function t(n,s,i,c,m){this._reactName=n,this._targetInst=i,this.type=s,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Kr:Ku,this.isPropagationStopped=Ku,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),t}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xr=St(da),Ds=_({},da,{view:0,detail:0}),Cg=St(Ds),Al,jl,Ms,Qr=_({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ms&&(Ms&&e.type==="mousemove"?(Al=e.screenX-Ms.screenX,jl=e.screenY-Ms.screenY):jl=Al=0,Ms=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),Xu=St(Qr),Ag=_({},Qr,{dataTransfer:0}),jg=St(Ag),Ng=_({},Ds,{relatedTarget:0}),Nl=St(Ng),Lg=_({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=St(Lg),Dg=_({},da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mg=St(Dg),Rg=_({},da,{data:0}),Qu=St(Rg),Pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qg[e])?!!t[e]:!1}function Ll(){return Bg}var Ug=_({},Ds,{key:function(e){if(e.key){var t=Pg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hg=St(Ug),Ig=_({},Qr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=St(Ig),Yg=_({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),Vg=St(Yg),Gg=_({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=St(Gg),Xg=_({},Qr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=St(Xg),Fg=_({},da,{newState:0,oldState:0}),Zg=St(Fg),Wg=[9,13,27,32],Ol=yn&&"CompositionEvent"in window,Rs=null;yn&&"documentMode"in document&&(Rs=document.documentMode);var Jg=yn&&"TextEvent"in window&&!Rs,Zu=yn&&(!Ol||Rs&&8<Rs&&11>=Rs),Wu=" ",Ju=!1;function $u(e,t){switch(e){case"keyup":return Wg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ha=!1;function $g(e,t){switch(e){case"compositionend":return ed(t);case"keypress":return t.which!==32?null:(Ju=!0,Wu);case"textInput":return e=t.data,e===Wu&&Ju?null:e;default:return null}}function ex(e,t){if(Ha)return e==="compositionend"||!Ol&&$u(e,t)?(e=Gu(),Vr=Cl=zn=null,Ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zu&&t.locale!=="ko"?null:t.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tx[e.type]:t==="textarea"}function nd(e,t,n,s){Ba?Ua?Ua.push(s):Ua=[s]:Ba=s,t=zi(t,"onChange"),0<t.length&&(n=new Xr("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Ps=null,zs=null;function nx(e){Bf(e,0)}function Fr(e){var t=Ns(e);if(zu(t))return e}function ad(e,t){if(e==="change")return t}var sd=!1;if(yn){var Dl;if(yn){var Ml="oninput"in document;if(!Ml){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),Ml=typeof rd.oninput=="function"}Dl=Ml}else Dl=!1;sd=Dl&&(!document.documentMode||9<document.documentMode)}function id(){Ps&&(Ps.detachEvent("onpropertychange",ld),zs=Ps=null)}function ld(e){if(e.propertyName==="value"&&Fr(zs)){var t=[];nd(t,zs,e,Sl(e)),Vu(nx,t)}}function ax(e,t,n){e==="focusin"?(id(),Ps=t,zs=n,Ps.attachEvent("onpropertychange",ld)):e==="focusout"&&id()}function sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fr(zs)}function rx(e,t){if(e==="click")return Fr(t)}function ix(e,t){if(e==="input"||e==="change")return Fr(t)}function lx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:lx;function qs(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var i=n[s];if(!Na.call(t,i)||!Mt(e[i],t[i]))return!1}return!0}function od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,t){var n=od(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=od(n)}}function ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ir(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function Rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ox=yn&&"documentMode"in document&&11>=document.documentMode,Ia=null,Pl=null,Bs=null,zl=!1;function pd(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zl||Ia==null||Ia!==Ir(s)||(s=Ia,"selectionStart"in s&&Rl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Bs&&qs(Bs,s)||(Bs=s,s=zi(Pl,"onSelect"),0<s.length&&(t=new Xr("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Ia)))}function pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ya={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionrun:pa("Transition","TransitionRun"),transitionstart:pa("Transition","TransitionStart"),transitioncancel:pa("Transition","TransitionCancel"),transitionend:pa("Transition","TransitionEnd")},ql={},fd={};yn&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function fa(e){if(ql[e])return ql[e];if(!Ya[e])return e;var t=Ya[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fd)return ql[e]=t[n];return e}var md=fa("animationend"),hd=fa("animationiteration"),gd=fa("animationstart"),cx=fa("transitionrun"),ux=fa("transitionstart"),dx=fa("transitioncancel"),xd=fa("transitionend"),yd=new Map,Bl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bl.push("scrollEnd");function nn(e,t){yd.set(e,t),ua(t,[e])}var Zr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Kt=[],Va=0,Ul=0;function Wr(){for(var e=Va,t=Ul=Va=0;t<e;){var n=Kt[t];Kt[t++]=null;var s=Kt[t];Kt[t++]=null;var i=Kt[t];Kt[t++]=null;var c=Kt[t];if(Kt[t++]=null,s!==null&&i!==null){var m=s.pending;m===null?i.next=i:(i.next=m.next,m.next=i),s.pending=i}c!==0&&bd(n,i,c)}}function Jr(e,t,n,s){Kt[Va++]=e,Kt[Va++]=t,Kt[Va++]=n,Kt[Va++]=s,Ul|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Hl(e,t,n,s){return Jr(e,t,n,s),$r(e)}function ma(e,t){return Jr(e,null,null,t),$r(e)}function bd(e,t,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var i=!1,c=e.return;c!==null;)c.childLanes|=n,s=c.alternate,s!==null&&(s.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(i=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=c.hiddenUpdates,s=e[i],s===null?e[i]=[t]:s.push(t),t.lane=n|536870912),c):null}function $r(e){if(50<lr)throw lr=0,Wo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ga={};function px(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,s){return new px(e,t,n,s)}function Il(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bn(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _d(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ei(e,t,n,s,i,c){var m=0;if(s=e,typeof e=="function")Il(e)&&(m=1);else if(typeof e=="string")m=xy(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=Rt(31,n,t,i),e.elementType=ge,e.lanes=c,e;case K:return ha(n.children,i,c,t);case W:m=8,i|=24;break;case U:return e=Rt(12,n,t,i|2),e.elementType=U,e.lanes=c,e;case ve:return e=Rt(13,n,t,i),e.elementType=ve,e.lanes=c,e;case q:return e=Rt(19,n,t,i),e.elementType=q,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:m=10;break e;case le:m=9;break e;case he:m=11;break e;case te:m=14;break e;case ye:m=16,s=null;break e}m=29,n=Error(o(130,e===null?"null":typeof e,"")),s=null}return t=Rt(m,n,t,i),t.elementType=e,t.type=s,t.lanes=c,t}function ha(e,t,n,s){return e=Rt(7,e,s,t),e.lanes=n,e}function Yl(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function kd(e){var t=Rt(18,null,null,0);return t.stateNode=e,t}function Vl(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wd=new WeakMap;function Xt(e,t){if(typeof e=="object"&&e!==null){var n=wd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Rr(t)},wd.set(e,t),t)}return{value:e,source:t,stack:Rr(t)}}var Ka=[],Xa=0,ti=null,Us=0,Qt=[],Ft=0,qn=null,rn=1,ln="";function _n(e,t){Ka[Xa++]=Us,Ka[Xa++]=ti,ti=e,Us=t}function vd(e,t,n){Qt[Ft++]=rn,Qt[Ft++]=ln,Qt[Ft++]=qn,qn=e;var s=rn;e=ln;var i=32-Ge(s)-1;s&=~(1<<i),n+=1;var c=32-Ge(t)+i;if(30<c){var m=i-i%5;c=(s&(1<<m)-1).toString(32),s>>=m,i-=m,rn=1<<32-Ge(t)+i|n<<i|s,ln=c+e}else rn=1<<c|n<<i|s,ln=e}function Gl(e){e.return!==null&&(_n(e,1),vd(e,1,0))}function Kl(e){for(;e===ti;)ti=Ka[--Xa],Ka[Xa]=null,Us=Ka[--Xa],Ka[Xa]=null;for(;e===qn;)qn=Qt[--Ft],Qt[Ft]=null,ln=Qt[--Ft],Qt[Ft]=null,rn=Qt[--Ft],Qt[Ft]=null}function Sd(e,t){Qt[Ft++]=rn,Qt[Ft++]=ln,Qt[Ft++]=qn,rn=t.id,ln=t.overflow,qn=e}var ft=null,Fe=null,Oe=!1,Bn=null,Zt=!1,Xl=Error(o(519));function Un(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hs(Xt(t,e)),Xl}function Td(e){var t=e.stateNode,n=e.type,s=e.memoizedProps;switch(t[pt]=e,t[vt]=s,n){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(n=0;n<cr.length;n++)Ce(cr[n],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),qu(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Uu(t,s.value,s.defaultValue,s.children)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||s.suppressHydrationWarning===!0||Yf(t.textContent,n)?(s.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),s.onScroll!=null&&Ce("scroll",t),s.onScrollEnd!=null&&Ce("scrollend",t),s.onClick!=null&&(t.onclick=xn),t=!0):t=!1,t||Un(e,!0)}function Ed(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 31:case 13:Zt=!1;return;case 27:case 3:Zt=!0;return;default:ft=ft.return}}function Qa(e){if(e!==ft)return!1;if(!Oe)return Ed(e),Oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||pc(e.type,e.memoizedProps)),n=!n),n&&Fe&&Un(e),Ed(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Fe=Jf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Fe=Jf(e)}else t===27?(t=Fe,ea(e.type)?(e=xc,xc=null,Fe=e):Fe=t):Fe=ft?Jt(e.stateNode.nextSibling):null;return!0}function ga(){Fe=ft=null,Oe=!1}function Ql(){var e=Bn;return e!==null&&(At===null?At=e:At.push.apply(At,e),Bn=null),e}function Hs(e){Bn===null?Bn=[e]:Bn.push(e)}var Fl=E(null),xa=null,kn=null;function Hn(e,t,n){k(Fl,t._currentValue),t._currentValue=n}function wn(e){e._currentValue=Fl.current,R(Fl)}function Zl(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Wl(e,t,n,s){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){var m=i.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=i;for(var S=0;S<t.length;S++)if(b.context===t[S]){c.lanes|=n,b=c.alternate,b!==null&&(b.lanes|=n),Zl(c.return,n,e),s||(m=null);break e}c=b.next}}else if(i.tag===18){if(m=i.return,m===null)throw Error(o(341));m.lanes|=n,c=m.alternate,c!==null&&(c.lanes|=n),Zl(m,n,e),m=null}else m=i.child;if(m!==null)m.return=i;else for(m=i;m!==null;){if(m===e){m=null;break}if(i=m.sibling,i!==null){i.return=m.return,m=i;break}m=m.return}i=m}}function Fa(e,t,n,s){e=null;for(var i=t,c=!1;i!==null;){if(!c){if((i.flags&524288)!==0)c=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var m=i.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var b=i.type;Mt(i.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(i===je.current){if(m=i.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(mr):e=[mr])}i=i.return}e!==null&&Wl(t,e,n,s),t.flags|=262144}function ni(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ya(e){xa=e,kn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function mt(e){return Cd(xa,e)}function ai(e,t){return xa===null&&ya(e),Cd(e,t)}function Cd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},kn===null){if(e===null)throw Error(o(308));kn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kn=kn.next=t;return n}var fx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},mx=a.unstable_scheduleCallback,hx=a.unstable_NormalPriority,at={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jl(){return{controller:new fx,data:new Map,refCount:0}}function Is(e){e.refCount--,e.refCount===0&&mx(hx,function(){e.controller.abort()})}var Ys=null,$l=0,Za=0,Wa=null;function gx(e,t){if(Ys===null){var n=Ys=[];$l=0,Za=ac(),Wa={status:"pending",value:void 0,then:function(s){n.push(s)}}}return $l++,t.then(Ad,Ad),t}function Ad(){if(--$l===0&&Ys!==null){Wa!==null&&(Wa.status="fulfilled");var e=Ys;Ys=null,Za=0,Wa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xx(e,t){var n=[],s={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(s.status="rejected",s.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),s}var jd=L.S;L.S=function(e,t){ff=bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&gx(e,t),jd!==null&&jd(e,t)};var ba=E(null);function eo(){var e=ba.current;return e!==null?e:Ke.pooledCache}function si(e,t){t===null?k(ba,ba.current):k(ba,t.pool)}function Nd(){var e=eo();return e===null?null:{parent:at._currentValue,pool:e}}var Ja=Error(o(460)),to=Error(o(474)),ri=Error(o(542)),ii={then:function(){}};function Ld(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Od(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(xn,xn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Md(e),e;default:if(typeof t.status=="string")t.then(xn,xn);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=s}},function(s){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Md(e),e}throw ka=t,Ja}}function _a(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ka=n,Ja):n}}var ka=null;function Dd(){if(ka===null)throw Error(o(459));var e=ka;return ka=null,e}function Md(e){if(e===Ja||e===ri)throw Error(o(483))}var $a=null,Vs=0;function li(e){var t=Vs;return Vs+=1,$a===null&&($a=[]),Od($a,e,t)}function Gs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function oi(e,t){throw t.$$typeof===T?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Rd(e){function t(A,C){if(e){var j=A.deletions;j===null?(A.deletions=[C],A.flags|=16):j.push(C)}}function n(A,C){if(!e)return null;for(;C!==null;)t(A,C),C=C.sibling;return null}function s(A){for(var C=new Map;A!==null;)A.key!==null?C.set(A.key,A):C.set(A.index,A),A=A.sibling;return C}function i(A,C){return A=bn(A,C),A.index=0,A.sibling=null,A}function c(A,C,j){return A.index=j,e?(j=A.alternate,j!==null?(j=j.index,j<C?(A.flags|=67108866,C):j):(A.flags|=67108866,C)):(A.flags|=1048576,C)}function m(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function b(A,C,j,z){return C===null||C.tag!==6?(C=Yl(j,A.mode,z),C.return=A,C):(C=i(C,j),C.return=A,C)}function S(A,C,j,z){var ce=j.type;return ce===K?M(A,C,j.props.children,z,j.key):C!==null&&(C.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ye&&_a(ce)===C.type)?(C=i(C,j.props),Gs(C,j),C.return=A,C):(C=ei(j.type,j.key,j.props,null,A.mode,z),Gs(C,j),C.return=A,C)}function N(A,C,j,z){return C===null||C.tag!==4||C.stateNode.containerInfo!==j.containerInfo||C.stateNode.implementation!==j.implementation?(C=Vl(j,A.mode,z),C.return=A,C):(C=i(C,j.children||[]),C.return=A,C)}function M(A,C,j,z,ce){return C===null||C.tag!==7?(C=ha(j,A.mode,z,ce),C.return=A,C):(C=i(C,j),C.return=A,C)}function B(A,C,j){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Yl(""+C,A.mode,j),C.return=A,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case w:return j=ei(C.type,C.key,C.props,null,A.mode,j),Gs(j,C),j.return=A,j;case V:return C=Vl(C,A.mode,j),C.return=A,C;case ye:return C=_a(C),B(A,C,j)}if(I(C)||ne(C))return C=ha(C,A.mode,j,null),C.return=A,C;if(typeof C.then=="function")return B(A,li(C),j);if(C.$$typeof===X)return B(A,ai(A,C),j);oi(A,C)}return null}function O(A,C,j,z){var ce=C!==null?C.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ce!==null?null:b(A,C,""+j,z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return j.key===ce?S(A,C,j,z):null;case V:return j.key===ce?N(A,C,j,z):null;case ye:return j=_a(j),O(A,C,j,z)}if(I(j)||ne(j))return ce!==null?null:M(A,C,j,z,null);if(typeof j.then=="function")return O(A,C,li(j),z);if(j.$$typeof===X)return O(A,C,ai(A,j),z);oi(A,j)}return null}function D(A,C,j,z,ce){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return A=A.get(j)||null,b(C,A,""+z,ce);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return A=A.get(z.key===null?j:z.key)||null,S(C,A,z,ce);case V:return A=A.get(z.key===null?j:z.key)||null,N(C,A,z,ce);case ye:return z=_a(z),D(A,C,j,z,ce)}if(I(z)||ne(z))return A=A.get(j)||null,M(C,A,z,ce,null);if(typeof z.then=="function")return D(A,C,j,li(z),ce);if(z.$$typeof===X)return D(A,C,j,ai(C,z),ce);oi(C,z)}return null}function ae(A,C,j,z){for(var ce=null,De=null,re=C,ke=C=0,Le=null;re!==null&&ke<j.length;ke++){re.index>ke?(Le=re,re=null):Le=re.sibling;var Me=O(A,re,j[ke],z);if(Me===null){re===null&&(re=Le);break}e&&re&&Me.alternate===null&&t(A,re),C=c(Me,C,ke),De===null?ce=Me:De.sibling=Me,De=Me,re=Le}if(ke===j.length)return n(A,re),Oe&&_n(A,ke),ce;if(re===null){for(;ke<j.length;ke++)re=B(A,j[ke],z),re!==null&&(C=c(re,C,ke),De===null?ce=re:De.sibling=re,De=re);return Oe&&_n(A,ke),ce}for(re=s(re);ke<j.length;ke++)Le=D(re,A,ke,j[ke],z),Le!==null&&(e&&Le.alternate!==null&&re.delete(Le.key===null?ke:Le.key),C=c(Le,C,ke),De===null?ce=Le:De.sibling=Le,De=Le);return e&&re.forEach(function(ra){return t(A,ra)}),Oe&&_n(A,ke),ce}function ue(A,C,j,z){if(j==null)throw Error(o(151));for(var ce=null,De=null,re=C,ke=C=0,Le=null,Me=j.next();re!==null&&!Me.done;ke++,Me=j.next()){re.index>ke?(Le=re,re=null):Le=re.sibling;var ra=O(A,re,Me.value,z);if(ra===null){re===null&&(re=Le);break}e&&re&&ra.alternate===null&&t(A,re),C=c(ra,C,ke),De===null?ce=ra:De.sibling=ra,De=ra,re=Le}if(Me.done)return n(A,re),Oe&&_n(A,ke),ce;if(re===null){for(;!Me.done;ke++,Me=j.next())Me=B(A,Me.value,z),Me!==null&&(C=c(Me,C,ke),De===null?ce=Me:De.sibling=Me,De=Me);return Oe&&_n(A,ke),ce}for(re=s(re);!Me.done;ke++,Me=j.next())Me=D(re,A,ke,Me.value,z),Me!==null&&(e&&Me.alternate!==null&&re.delete(Me.key===null?ke:Me.key),C=c(Me,C,ke),De===null?ce=Me:De.sibling=Me,De=Me);return e&&re.forEach(function(Ay){return t(A,Ay)}),Oe&&_n(A,ke),ce}function Ve(A,C,j,z){if(typeof j=="object"&&j!==null&&j.type===K&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case w:e:{for(var ce=j.key;C!==null;){if(C.key===ce){if(ce=j.type,ce===K){if(C.tag===7){n(A,C.sibling),z=i(C,j.props.children),z.return=A,A=z;break e}}else if(C.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ye&&_a(ce)===C.type){n(A,C.sibling),z=i(C,j.props),Gs(z,j),z.return=A,A=z;break e}n(A,C);break}else t(A,C);C=C.sibling}j.type===K?(z=ha(j.props.children,A.mode,z,j.key),z.return=A,A=z):(z=ei(j.type,j.key,j.props,null,A.mode,z),Gs(z,j),z.return=A,A=z)}return m(A);case V:e:{for(ce=j.key;C!==null;){if(C.key===ce)if(C.tag===4&&C.stateNode.containerInfo===j.containerInfo&&C.stateNode.implementation===j.implementation){n(A,C.sibling),z=i(C,j.children||[]),z.return=A,A=z;break e}else{n(A,C);break}else t(A,C);C=C.sibling}z=Vl(j,A.mode,z),z.return=A,A=z}return m(A);case ye:return j=_a(j),Ve(A,C,j,z)}if(I(j))return ae(A,C,j,z);if(ne(j)){if(ce=ne(j),typeof ce!="function")throw Error(o(150));return j=ce.call(j),ue(A,C,j,z)}if(typeof j.then=="function")return Ve(A,C,li(j),z);if(j.$$typeof===X)return Ve(A,C,ai(A,j),z);oi(A,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,C!==null&&C.tag===6?(n(A,C.sibling),z=i(C,j),z.return=A,A=z):(n(A,C),z=Yl(j,A.mode,z),z.return=A,A=z),m(A)):n(A,C)}return function(A,C,j,z){try{Vs=0;var ce=Ve(A,C,j,z);return $a=null,ce}catch(re){if(re===Ja||re===ri)throw re;var De=Rt(29,re,null,A.mode);return De.lanes=z,De.return=A,De}}}var wa=Rd(!0),Pd=Rd(!1),In=!1;function no(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Yn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Re&2)!==0){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,t=$r(e),bd(e,null,n),t}return Jr(e,s,t,n),$r(e)}function Ks(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Cu(e,n)}}function so(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var i=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?i=c=m:c=c.next=m,n=n.next}while(n!==null);c===null?i=c=t:c=c.next=t}else i=c=t;n={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ro=!1;function Xs(){if(ro){var e=Wa;if(e!==null)throw e}}function Qs(e,t,n,s){ro=!1;var i=e.updateQueue;In=!1;var c=i.firstBaseUpdate,m=i.lastBaseUpdate,b=i.shared.pending;if(b!==null){i.shared.pending=null;var S=b,N=S.next;S.next=null,m===null?c=N:m.next=N,m=S;var M=e.alternate;M!==null&&(M=M.updateQueue,b=M.lastBaseUpdate,b!==m&&(b===null?M.firstBaseUpdate=N:b.next=N,M.lastBaseUpdate=S))}if(c!==null){var B=i.baseState;m=0,M=N=S=null,b=c;do{var O=b.lane&-536870913,D=O!==b.lane;if(D?(Ne&O)===O:(s&O)===O){O!==0&&O===Za&&(ro=!0),M!==null&&(M=M.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ae=e,ue=b;O=t;var Ve=n;switch(ue.tag){case 1:if(ae=ue.payload,typeof ae=="function"){B=ae.call(Ve,B,O);break e}B=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ue.payload,O=typeof ae=="function"?ae.call(Ve,B,O):ae,O==null)break e;B=_({},B,O);break e;case 2:In=!0}}O=b.callback,O!==null&&(e.flags|=64,D&&(e.flags|=8192),D=i.callbacks,D===null?i.callbacks=[O]:D.push(O))}else D={lane:O,tag:b.tag,payload:b.payload,callback:b.callback,next:null},M===null?(N=M=D,S=B):M=M.next=D,m|=O;if(b=b.next,b===null){if(b=i.shared.pending,b===null)break;D=b,b=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);M===null&&(S=B),i.baseState=S,i.firstBaseUpdate=N,i.lastBaseUpdate=M,c===null&&(i.shared.lanes=0),Fn|=m,e.lanes=m,e.memoizedState=B}}function zd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function qd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)zd(n[e],t)}var es=E(null),ci=E(0);function Bd(e,t){e=Ln,k(ci,e),k(es,t),Ln=e|t.baseLanes}function io(){k(ci,Ln),k(es,es.current)}function lo(){Ln=ci.current,R(es),R(ci)}var Pt=E(null),Wt=null;function Gn(e){var t=e.alternate;k(tt,tt.current&1),k(Pt,e),Wt===null&&(t===null||es.current!==null||t.memoizedState!==null)&&(Wt=e)}function oo(e){k(tt,tt.current),k(Pt,e),Wt===null&&(Wt=e)}function Ud(e){e.tag===22?(k(tt,tt.current),k(Pt,e),Wt===null&&(Wt=e)):Kn()}function Kn(){k(tt,tt.current),k(Pt,Pt.current)}function zt(e){R(Pt),Wt===e&&(Wt=null),R(tt)}var tt=E(0);function ui(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hc(n)||gc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vn=0,_e=null,Ie=null,st=null,di=!1,ts=!1,va=!1,pi=0,Fs=0,ns=null,yx=0;function $e(){throw Error(o(321))}function co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function uo(e,t,n,s,i,c){return vn=c,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?vp:Eo,va=!1,c=n(s,i),va=!1,ts&&(c=Id(t,n,s,i)),Hd(e),c}function Hd(e){L.H=Js;var t=Ie!==null&&Ie.next!==null;if(vn=0,st=Ie=_e=null,di=!1,Fs=0,ns=null,t)throw Error(o(300));e===null||rt||(e=e.dependencies,e!==null&&ni(e)&&(rt=!0))}function Id(e,t,n,s){_e=e;var i=0;do{if(ts&&(ns=null),Fs=0,ts=!1,25<=i)throw Error(o(301));if(i+=1,st=Ie=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}L.H=Sp,c=t(n,s)}while(ts);return c}function bx(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?Zs(t):t,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(_e.flags|=1024),t}function po(){var e=pi!==0;return pi=0,e}function fo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function mo(e){if(di){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}di=!1}vn=0,st=Ie=_e=null,ts=!1,Fs=pi=0,ns=null}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?_e.memoizedState=st=e:st=st.next=e,st}function nt(){if(Ie===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=st===null?_e.memoizedState:st.next;if(t!==null)st=t,Ie=e;else{if(e===null)throw _e.alternate===null?Error(o(467)):Error(o(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},st===null?_e.memoizedState=st=e:st=st.next=e}return st}function fi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zs(e){var t=Fs;return Fs+=1,ns===null&&(ns=[]),e=Od(ns,e,t),t=_e,(st===null?t.memoizedState:st.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?vp:Eo),e}function mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zs(e);if(e.$$typeof===X)return mt(e)}throw Error(o(438,String(e)))}function ho(e){var t=null,n=_e.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fi(),_e.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),s=0;s<e;s++)n[s]=Ae;return t.index++,n}function Sn(e,t){return typeof t=="function"?t(e):t}function hi(e){var t=nt();return go(t,Ie,e)}function go(e,t,n){var s=e.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=n;var i=e.baseQueue,c=s.pending;if(c!==null){if(i!==null){var m=i.next;i.next=c.next,c.next=m}t.baseQueue=i=c,s.pending=null}if(c=e.baseState,i===null)e.memoizedState=c;else{t=i.next;var b=m=null,S=null,N=t,M=!1;do{var B=N.lane&-536870913;if(B!==N.lane?(Ne&B)===B:(vn&B)===B){var O=N.revertLane;if(O===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),B===Za&&(M=!0);else if((vn&O)===O){N=N.next,O===Za&&(M=!0);continue}else B={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(b=S=B,m=c):S=S.next=B,_e.lanes|=O,Fn|=O;B=N.action,va&&n(c,B),c=N.hasEagerState?N.eagerState:n(c,B)}else O={lane:B,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(b=S=O,m=c):S=S.next=O,_e.lanes|=B,Fn|=B;N=N.next}while(N!==null&&N!==t);if(S===null?m=c:S.next=b,!Mt(c,e.memoizedState)&&(rt=!0,M&&(n=Wa,n!==null)))throw n;e.memoizedState=c,e.baseState=m,e.baseQueue=S,s.lastRenderedState=c}return i===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function xo(e){var t=nt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var s=n.dispatch,i=n.pending,c=t.memoizedState;if(i!==null){n.pending=null;var m=i=i.next;do c=e(c,m.action),m=m.next;while(m!==i);Mt(c,t.memoizedState)||(rt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,s]}function Yd(e,t,n){var s=_e,i=nt(),c=Oe;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var m=!Mt((Ie||i).memoizedState,n);if(m&&(i.memoizedState=n,rt=!0),i=i.queue,_o(Kd.bind(null,s,i,e),[e]),i.getSnapshot!==t||m||st!==null&&st.memoizedState.tag&1){if(s.flags|=2048,as(9,{destroy:void 0},Gd.bind(null,s,i,n,t),null),Ke===null)throw Error(o(349));c||(vn&127)!==0||Vd(s,t,n)}return n}function Vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t=fi(),_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gd(e,t,n,s){t.value=n,t.getSnapshot=s,Xd(t)&&Qd(e)}function Kd(e,t,n){return n(function(){Xd(t)&&Qd(e)})}function Xd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function Qd(e){var t=ma(e,2);t!==null&&jt(t,e,2)}function yo(e){var t=kt();if(typeof e=="function"){var n=e;if(e=n(),va){wt(!0);try{n()}finally{wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},t}function Fd(e,t,n,s){return e.baseState=n,go(e,Ie,typeof s=="function"?s:Sn)}function _x(e,t,n,s,i){if(yi(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};L.T!==null?n(!0):c.isTransition=!1,s(c),n=t.pending,n===null?(c.next=t.pending=c,Zd(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Zd(e,t){var n=t.action,s=t.payload,i=e.state;if(t.isTransition){var c=L.T,m={};L.T=m;try{var b=n(i,s),S=L.S;S!==null&&S(m,b),Wd(e,t,b)}catch(N){bo(e,t,N)}finally{c!==null&&m.types!==null&&(c.types=m.types),L.T=c}}else try{c=n(i,s),Wd(e,t,c)}catch(N){bo(e,t,N)}}function Wd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){Jd(e,t,s)},function(s){return bo(e,t,s)}):Jd(e,t,n)}function Jd(e,t,n){t.status="fulfilled",t.value=n,$d(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zd(e,n)))}function bo(e,t,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=n,$d(t),t=t.next;while(t!==s)}e.action=null}function $d(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ep(e,t){return t}function tp(e,t){if(Oe){var n=Ke.formState;if(n!==null){e:{var s=_e;if(Oe){if(Fe){t:{for(var i=Fe,c=Zt;i.nodeType!==8;){if(!c){i=null;break t}if(i=Jt(i.nextSibling),i===null){i=null;break t}}c=i.data,i=c==="F!"||c==="F"?i:null}if(i){Fe=Jt(i.nextSibling),s=i.data==="F!";break e}}Un(s)}s=!1}s&&(t=n[0])}}return n=kt(),n.memoizedState=n.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ep,lastRenderedState:t},n.queue=s,n=_p.bind(null,_e,s),s.dispatch=n,s=yo(!1),c=To.bind(null,_e,!1,s.queue),s=kt(),i={state:t,dispatch:null,action:e,pending:null},s.queue=i,n=_x.bind(null,_e,i,c,n),i.dispatch=n,s.memoizedState=e,[t,n,!1]}function np(e){var t=nt();return ap(t,Ie,e)}function ap(e,t,n){if(t=go(e,t,ep)[0],e=hi(Sn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Zs(t)}catch(m){throw m===Ja?ri:m}else s=t;t=nt();var i=t.queue,c=i.dispatch;return n!==t.memoizedState&&(_e.flags|=2048,as(9,{destroy:void 0},kx.bind(null,i,n),null)),[s,c,e]}function kx(e,t){e.action=t}function sp(e){var t=nt(),n=Ie;if(n!==null)return ap(t,n,e);nt(),t=t.memoizedState,n=nt();var s=n.queue.dispatch;return n.memoizedState=e,[t,s,!1]}function as(e,t,n,s){return e={tag:e,create:n,deps:s,inst:t,next:null},t=_e.updateQueue,t===null&&(t=fi(),_e.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e),e}function rp(){return nt().memoizedState}function gi(e,t,n,s){var i=kt();_e.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,s===void 0?null:s)}function xi(e,t,n,s){var i=nt();s=s===void 0?null:s;var c=i.memoizedState.inst;Ie!==null&&s!==null&&co(s,Ie.memoizedState.deps)?i.memoizedState=as(t,c,n,s):(_e.flags|=e,i.memoizedState=as(1|t,c,n,s))}function ip(e,t){gi(8390656,8,e,t)}function _o(e,t){xi(2048,8,e,t)}function wx(e){_e.flags|=4;var t=_e.updateQueue;if(t===null)t=fi(),_e.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function lp(e){var t=nt().memoizedState;return wx({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function op(e,t){return xi(4,2,e,t)}function cp(e,t){return xi(4,4,e,t)}function up(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dp(e,t,n){n=n!=null?n.concat([e]):null,xi(4,4,up.bind(null,t,e),n)}function ko(){}function pp(e,t){var n=nt();t=t===void 0?null:t;var s=n.memoizedState;return t!==null&&co(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function fp(e,t){var n=nt();t=t===void 0?null:t;var s=n.memoizedState;if(t!==null&&co(t,s[1]))return s[0];if(s=e(),va){wt(!0);try{e()}finally{wt(!1)}}return n.memoizedState=[s,t],s}function wo(e,t,n){return n===void 0||(vn&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=hf(),_e.lanes|=e,Fn|=e,n)}function mp(e,t,n,s){return Mt(n,t)?n:es.current!==null?(e=wo(e,n,s),Mt(e,t)||(rt=!0),e):(vn&42)===0||(vn&1073741824)!==0&&(Ne&261930)===0?(rt=!0,e.memoizedState=n):(e=hf(),_e.lanes|=e,Fn|=e,t)}function hp(e,t,n,s,i){var c=Y.p;Y.p=c!==0&&8>c?c:8;var m=L.T,b={};L.T=b,To(e,!1,t,n);try{var S=i(),N=L.S;if(N!==null&&N(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var M=xx(S,s);Ws(e,t,M,Ut(e))}else Ws(e,t,s,Ut(e))}catch(B){Ws(e,t,{then:function(){},status:"rejected",reason:B},Ut())}finally{Y.p=c,m!==null&&b.types!==null&&(m.types=b.types),L.T=m}}function vx(){}function vo(e,t,n,s){if(e.tag!==5)throw Error(o(476));var i=gp(e).queue;hp(e,i,t,ie,n===null?vx:function(){return xp(e),n(s)})}function gp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xp(e){var t=gp(e);t.next===null&&(t=e.alternate.memoizedState),Ws(e,t.next.queue,{},Ut())}function So(){return mt(mr)}function yp(){return nt().memoizedState}function bp(){return nt().memoizedState}function Sx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ut();e=Yn(n);var s=Vn(t,e,n);s!==null&&(jt(s,t,n),Ks(s,t,n)),t={cache:Jl()},e.payload=t;return}t=t.return}}function Tx(e,t,n){var s=Ut();n={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},yi(e)?kp(t,n):(n=Hl(e,t,n,s),n!==null&&(jt(n,e,s),wp(n,t,s)))}function _p(e,t,n){var s=Ut();Ws(e,t,n,s)}function Ws(e,t,n,s){var i={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(yi(e))kp(t,i);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,b=c(m,n);if(i.hasEagerState=!0,i.eagerState=b,Mt(b,m))return Jr(e,t,i,0),Ke===null&&Wr(),!1}catch{}if(n=Hl(e,t,i,s),n!==null)return jt(n,e,s),wp(n,t,s),!0}return!1}function To(e,t,n,s){if(s={lane:2,revertLane:ac(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},yi(e)){if(t)throw Error(o(479))}else t=Hl(e,n,s,2),t!==null&&jt(t,e,2)}function yi(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function kp(e,t){ts=di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wp(e,t,n){if((n&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Cu(e,n)}}var Js={readContext:mt,use:mi,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};Js.useEffectEvent=$e;var vp={readContext:mt,use:mi,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:ip,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gi(4194308,4,up.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){gi(4,2,e,t)},useMemo:function(e,t){var n=kt();t=t===void 0?null:t;var s=e();if(va){wt(!0);try{e()}finally{wt(!1)}}return n.memoizedState=[s,t],s},useReducer:function(e,t,n){var s=kt();if(n!==void 0){var i=n(t);if(va){wt(!0);try{n(t)}finally{wt(!1)}}}else i=t;return s.memoizedState=s.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},s.queue=e,e=e.dispatch=Tx.bind(null,_e,e),[s.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:function(e){e=yo(e);var t=e.queue,n=_p.bind(null,_e,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ko,useDeferredValue:function(e,t){var n=kt();return wo(n,e,t)},useTransition:function(){var e=yo(!1);return e=hp.bind(null,_e,e.queue,!0,!1),kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var s=_e,i=kt();if(Oe){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ke===null)throw Error(o(349));(Ne&127)!==0||Vd(s,t,n)}i.memoizedState=n;var c={value:n,getSnapshot:t};return i.queue=c,ip(Kd.bind(null,s,c,e),[e]),s.flags|=2048,as(9,{destroy:void 0},Gd.bind(null,s,c,n,t),null),n},useId:function(){var e=kt(),t=Ke.identifierPrefix;if(Oe){var n=ln,s=rn;n=(s&~(1<<32-Ge(s)-1)).toString(32)+n,t="_"+t+"R_"+n,n=pi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=yx++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:So,useFormState:tp,useActionState:tp,useOptimistic:function(e){var t=kt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=To.bind(null,_e,!0,n),n.dispatch=t,[e,t]},useMemoCache:ho,useCacheRefresh:function(){return kt().memoizedState=Sx.bind(null,_e)},useEffectEvent:function(e){var t=kt(),n={impl:e};return t.memoizedState=n,function(){if((Re&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Eo={readContext:mt,use:mi,useCallback:pp,useContext:mt,useEffect:_o,useImperativeHandle:dp,useInsertionEffect:op,useLayoutEffect:cp,useMemo:fp,useReducer:hi,useRef:rp,useState:function(){return hi(Sn)},useDebugValue:ko,useDeferredValue:function(e,t){var n=nt();return mp(n,Ie.memoizedState,e,t)},useTransition:function(){var e=hi(Sn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:Zs(e),t]},useSyncExternalStore:Yd,useId:yp,useHostTransitionStatus:So,useFormState:np,useActionState:np,useOptimistic:function(e,t){var n=nt();return Fd(n,Ie,e,t)},useMemoCache:ho,useCacheRefresh:bp};Eo.useEffectEvent=lp;var Sp={readContext:mt,use:mi,useCallback:pp,useContext:mt,useEffect:_o,useImperativeHandle:dp,useInsertionEffect:op,useLayoutEffect:cp,useMemo:fp,useReducer:xo,useRef:rp,useState:function(){return xo(Sn)},useDebugValue:ko,useDeferredValue:function(e,t){var n=nt();return Ie===null?wo(n,e,t):mp(n,Ie.memoizedState,e,t)},useTransition:function(){var e=xo(Sn)[0],t=nt().memoizedState;return[typeof e=="boolean"?e:Zs(e),t]},useSyncExternalStore:Yd,useId:yp,useHostTransitionStatus:So,useFormState:sp,useActionState:sp,useOptimistic:function(e,t){var n=nt();return Ie!==null?Fd(n,Ie,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ho,useCacheRefresh:bp};Sp.useEffectEvent=lp;function Co(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Ut(),i=Yn(s);i.payload=t,n!=null&&(i.callback=n),t=Vn(e,i,s),t!==null&&(jt(t,e,s),Ks(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Ut(),i=Yn(s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Vn(e,i,s),t!==null&&(jt(t,e,s),Ks(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),s=Yn(n);s.tag=2,t!=null&&(s.callback=t),t=Vn(e,s,n),t!==null&&(jt(t,e,n),Ks(t,e,n))}};function Tp(e,t,n,s,i,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,m):t.prototype&&t.prototype.isPureReactComponent?!qs(n,s)||!qs(i,c):!0}function Ep(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function Sa(e,t){var n=t;if("ref"in t){n={};for(var s in t)s!=="ref"&&(n[s]=t[s])}if(e=e.defaultProps){n===t&&(n=_({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function Cp(e){Zr(e)}function Ap(e){console.error(e)}function jp(e){Zr(e)}function bi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function Np(e,t,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function jo(e,t,n){return n=Yn(n),n.tag=3,n.payload={element:null},n.callback=function(){bi(e,t)},n}function Lp(e){return e=Yn(e),e.tag=3,e}function Op(e,t,n,s){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var c=s.value;e.payload=function(){return i(c)},e.callback=function(){Np(t,n,s)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Np(t,n,s),typeof i!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Ex(e,t,n,s,i){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=n.alternate,t!==null&&Fa(t,n,i,!0),n=Pt.current,n!==null){switch(n.tag){case 31:case 13:return Wt===null?Li():n.alternate===null&&et===0&&(et=3),n.flags&=-257,n.flags|=65536,n.lanes=i,s===ii?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([s]):t.add(s),ec(e,s,i)),!1;case 22:return n.flags|=65536,s===ii?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([s]):n.add(s)),ec(e,s,i)),!1}throw Error(o(435,n.tag))}return ec(e,s,i),Li(),!1}if(Oe)return t=Pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,s!==Xl&&(e=Error(o(422),{cause:s}),Hs(Xt(e,n)))):(s!==Xl&&(t=Error(o(423),{cause:s}),Hs(Xt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,s=Xt(s,n),i=jo(e.stateNode,s,i),so(e,i),et!==4&&(et=2)),!1;var c=Error(o(520),{cause:s});if(c=Xt(c,n),ir===null?ir=[c]:ir.push(c),et!==4&&(et=2),t===null)return!0;s=Xt(s,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=jo(n.stateNode,s,e),so(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Zn===null||!Zn.has(c))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Lp(i),Op(i,e,n,s),so(n,i),!1}n=n.return}while(n!==null);return!1}var No=Error(o(461)),rt=!1;function ht(e,t,n,s){t.child=e===null?Pd(t,null,n,s):wa(t,e.child,n,s)}function Dp(e,t,n,s,i){n=n.render;var c=t.ref;if("ref"in s){var m={};for(var b in s)b!=="ref"&&(m[b]=s[b])}else m=s;return ya(t),s=uo(e,t,n,m,c,i),b=po(),e!==null&&!rt?(fo(e,t,i),Tn(e,t,i)):(Oe&&b&&Gl(t),t.flags|=1,ht(e,t,s,i),t.child)}function Mp(e,t,n,s,i){if(e===null){var c=n.type;return typeof c=="function"&&!Il(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Rp(e,t,c,s,i)):(e=ei(n.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!qo(e,i)){var m=c.memoizedProps;if(n=n.compare,n=n!==null?n:qs,n(m,s)&&e.ref===t.ref)return Tn(e,t,i)}return t.flags|=1,e=bn(c,s),e.ref=t.ref,e.return=t,t.child=e}function Rp(e,t,n,s,i){if(e!==null){var c=e.memoizedProps;if(qs(c,s)&&e.ref===t.ref)if(rt=!1,t.pendingProps=s=c,qo(e,i))(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,Tn(e,t,i)}return Lo(e,t,n,s,i)}function Pp(e,t,n,s){var i=s.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(s=t.child=e.child,i=0;s!==null;)i=i|s.lanes|s.childLanes,s=s.sibling;s=i&~c}else s=0,t.child=null;return zp(e,t,c,n,s)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&si(t,c!==null?c.cachePool:null),c!==null?Bd(t,c):io(),Ud(t);else return s=t.lanes=536870912,zp(e,t,c!==null?c.baseLanes|n:n,n,s)}else c!==null?(si(t,c.cachePool),Bd(t,c),Kn(),t.memoizedState=null):(e!==null&&si(t,null),io(),Kn());return ht(e,t,i,n),t.child}function $s(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zp(e,t,n,s,i){var c=eo();return c=c===null?null:{parent:at._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&si(t,null),io(),Ud(t),e!==null&&Fa(e,t,s,!0),t.childLanes=i,null}function _i(e,t){return t=wi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qp(e,t,n){return wa(t,e.child,null,n),e=_i(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function Cx(e,t,n){var s=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Oe){if(s.mode==="hidden")return e=_i(t,s),t.lanes=536870912,$s(null,e);if(oo(t),(e=Fe)?(e=Wf(e,Zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:rn,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},n=kd(e),n.return=t,t.child=n,ft=t,Fe=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return _i(t,s)}var c=e.memoizedState;if(c!==null){var m=c.dehydrated;if(oo(t),i)if(t.flags&256)t.flags&=-257,t=qp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(rt||Fa(e,t,n,!1),i=(n&e.childLanes)!==0,rt||i){if(s=Ke,s!==null&&(m=Au(s,n),m!==0&&m!==c.retryLane))throw c.retryLane=m,ma(e,m),jt(s,e,m),No;Li(),t=qp(e,t,n)}else e=c.treeContext,Fe=Jt(m.nextSibling),ft=t,Oe=!0,Bn=null,Zt=!1,e!==null&&Sd(t,e),t=_i(t,s),t.flags|=4096;return t}return e=bn(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ki(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Lo(e,t,n,s,i){return ya(t),n=uo(e,t,n,s,void 0,i),s=po(),e!==null&&!rt?(fo(e,t,i),Tn(e,t,i)):(Oe&&s&&Gl(t),t.flags|=1,ht(e,t,n,i),t.child)}function Bp(e,t,n,s,i,c){return ya(t),t.updateQueue=null,n=Id(t,s,n,i),Hd(e),s=po(),e!==null&&!rt?(fo(e,t,c),Tn(e,t,c)):(Oe&&s&&Gl(t),t.flags|=1,ht(e,t,n,c),t.child)}function Up(e,t,n,s,i){if(ya(t),t.stateNode===null){var c=Ga,m=n.contextType;typeof m=="object"&&m!==null&&(c=mt(m)),c=new n(s,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ao,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=s,c.state=t.memoizedState,c.refs={},no(t),m=n.contextType,c.context=typeof m=="object"&&m!==null?mt(m):Ga,c.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Co(t,n,m,s),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Ao.enqueueReplaceState(c,c.state,null),Qs(t,s,c,i),Xs(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){c=t.stateNode;var b=t.memoizedProps,S=Sa(n,b);c.props=S;var N=c.context,M=n.contextType;m=Ga,typeof M=="object"&&M!==null&&(m=mt(M));var B=n.getDerivedStateFromProps;M=typeof B=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,M||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||N!==m)&&Ep(t,c,s,m),In=!1;var O=t.memoizedState;c.state=O,Qs(t,s,c,i),Xs(),N=t.memoizedState,b||O!==N||In?(typeof B=="function"&&(Co(t,n,B,s),N=t.memoizedState),(S=In||Tp(t,n,S,s,O,N,m))?(M||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=N),c.props=s,c.state=N,c.context=m,s=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{c=t.stateNode,ao(e,t),m=t.memoizedProps,M=Sa(n,m),c.props=M,B=t.pendingProps,O=c.context,N=n.contextType,S=Ga,typeof N=="object"&&N!==null&&(S=mt(N)),b=n.getDerivedStateFromProps,(N=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==B||O!==S)&&Ep(t,c,s,S),In=!1,O=t.memoizedState,c.state=O,Qs(t,s,c,i),Xs();var D=t.memoizedState;m!==B||O!==D||In||e!==null&&e.dependencies!==null&&ni(e.dependencies)?(typeof b=="function"&&(Co(t,n,b,s),D=t.memoizedState),(M=In||Tp(t,n,M,s,O,D,S)||e!==null&&e.dependencies!==null&&ni(e.dependencies))?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,D,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,D,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=D),c.props=s,c.state=D,c.context=S,s=M):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),s=!1)}return c=s,ki(e,t),s=(t.flags&128)!==0,c||s?(c=t.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&s?(t.child=wa(t,e.child,null,i),t.child=wa(t,null,n,i)):ht(e,t,n,i),t.memoizedState=c.state,e=t.child):e=Tn(e,t,i),e}function Hp(e,t,n,s){return ga(),t.flags|=256,ht(e,t,n,s),t.child}var Oo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Do(e){return{baseLanes:e,cachePool:Nd()}}function Mo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Bt),e}function Ip(e,t,n){var s=t.pendingProps,i=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(tt.current&2)!==0),m&&(i=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(i?Gn(t):Kn(),(e=Fe)?(e=Wf(e,Zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:rn,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},n=kd(e),n.return=t,t.child=n,ft=t,Fe=null)):e=null,e===null)throw Un(t);return gc(e)?t.lanes=32:t.lanes=536870912,null}var b=s.children;return s=s.fallback,i?(Kn(),i=t.mode,b=wi({mode:"hidden",children:b},i),s=ha(s,i,n,null),b.return=t,s.return=t,b.sibling=s,t.child=b,s=t.child,s.memoizedState=Do(n),s.childLanes=Mo(e,m,n),t.memoizedState=Oo,$s(null,s)):(Gn(t),Ro(t,b))}var S=e.memoizedState;if(S!==null&&(b=S.dehydrated,b!==null)){if(c)t.flags&256?(Gn(t),t.flags&=-257,t=Po(e,t,n)):t.memoizedState!==null?(Kn(),t.child=e.child,t.flags|=128,t=null):(Kn(),b=s.fallback,i=t.mode,s=wi({mode:"visible",children:s.children},i),b=ha(b,i,n,null),b.flags|=2,s.return=t,b.return=t,s.sibling=b,t.child=s,wa(t,e.child,null,n),s=t.child,s.memoizedState=Do(n),s.childLanes=Mo(e,m,n),t.memoizedState=Oo,t=$s(null,s));else if(Gn(t),gc(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var N=m.dgst;m=N,s=Error(o(419)),s.stack="",s.digest=m,Hs({value:s,source:null,stack:null}),t=Po(e,t,n)}else if(rt||Fa(e,t,n,!1),m=(n&e.childLanes)!==0,rt||m){if(m=Ke,m!==null&&(s=Au(m,n),s!==0&&s!==S.retryLane))throw S.retryLane=s,ma(e,s),jt(m,e,s),No;hc(b)||Li(),t=Po(e,t,n)}else hc(b)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Fe=Jt(b.nextSibling),ft=t,Oe=!0,Bn=null,Zt=!1,e!==null&&Sd(t,e),t=Ro(t,s.children),t.flags|=4096);return t}return i?(Kn(),b=s.fallback,i=t.mode,S=e.child,N=S.sibling,s=bn(S,{mode:"hidden",children:s.children}),s.subtreeFlags=S.subtreeFlags&65011712,N!==null?b=bn(N,b):(b=ha(b,i,n,null),b.flags|=2),b.return=t,s.return=t,s.sibling=b,t.child=s,$s(null,s),s=t.child,b=e.child.memoizedState,b===null?b=Do(n):(i=b.cachePool,i!==null?(S=at._currentValue,i=i.parent!==S?{parent:S,pool:S}:i):i=Nd(),b={baseLanes:b.baseLanes|n,cachePool:i}),s.memoizedState=b,s.childLanes=Mo(e,m,n),t.memoizedState=Oo,$s(e.child,s)):(Gn(t),n=e.child,e=n.sibling,n=bn(n,{mode:"visible",children:s.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Ro(e,t){return t=wi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wi(e,t){return e=Rt(22,e,null,t),e.lanes=0,e}function Po(e,t,n){return wa(t,e.child,null,n),e=Ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yp(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Zl(e.return,t,n)}function zo(e,t,n,s,i,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:i,treeForkCount:c}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=n,m.tailMode=i,m.treeForkCount=c)}function Vp(e,t,n){var s=t.pendingProps,i=s.revealOrder,c=s.tail;s=s.children;var m=tt.current,b=(m&2)!==0;if(b?(m=m&1|2,t.flags|=128):m&=1,k(tt,m),ht(e,t,s,n),s=Oe?Us:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yp(e,n,t);else if(e.tag===19)Yp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ui(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zo(t,!1,i,n,c,s);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ui(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zo(t,!0,n,null,c,s);break;case"together":zo(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function Tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Fa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ni(e)))}function Ax(e,t,n){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),Hn(t,at,e.memoizedState.cache),ga();break;case 27:case 5:Yt(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:Hn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ip(e,t,n):(Gn(t),e=Tn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var i=(e.flags&128)!==0;if(s=(n&t.childLanes)!==0,s||(Fa(e,t,n,!1),s=(n&t.childLanes)!==0),i){if(s)return Vp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(tt,tt.current),s)break;return null;case 22:return t.lanes=0,Pp(e,t,n,t.pendingProps);case 24:Hn(t,at,e.memoizedState.cache)}return Tn(e,t,n)}function Gp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rt=!0;else{if(!qo(e,n)&&(t.flags&128)===0)return rt=!1,Ax(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,Oe&&(t.flags&1048576)!==0&&vd(t,Us,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=_a(t.elementType),t.type=e,typeof e=="function")Il(e)?(s=Sa(e,s),t.tag=1,t=Up(null,t,e,s,n)):(t.tag=0,t=Lo(null,t,e,s,n));else{if(e!=null){var i=e.$$typeof;if(i===he){t.tag=11,t=Dp(null,t,e,s,n);break e}else if(i===te){t.tag=14,t=Mp(null,t,e,s,n);break e}}throw t=Z(e)||e,Error(o(306,t,""))}}return t;case 0:return Lo(e,t,t.type,t.pendingProps,n);case 1:return s=t.type,i=Sa(s,t.pendingProps),Up(e,t,s,i,n);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(o(387));s=t.pendingProps;var c=t.memoizedState;i=c.element,ao(e,t),Qs(t,s,null,n);var m=t.memoizedState;if(s=m.cache,Hn(t,at,s),s!==c.cache&&Wl(t,[at],n,!0),Xs(),s=m.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Hp(e,t,s,n);break e}else if(s!==i){i=Xt(Error(o(424)),t),Hs(i),t=Hp(e,t,s,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Fe=Jt(e.firstChild),ft=t,Oe=!0,Bn=null,Zt=!0,n=Pd(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ga(),s===i){t=Tn(e,t,n);break e}ht(e,t,s,n)}t=t.child}return t;case 26:return ki(e,t),e===null?(n=am(t.type,null,t.pendingProps,null))?t.memoizedState=n:Oe||(n=t.type,e=t.pendingProps,s=qi(oe.current).createElement(n),s[pt]=t,s[vt]=e,gt(s,n,e),ut(s),t.stateNode=s):t.memoizedState=am(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yt(t),e===null&&Oe&&(s=t.stateNode=em(t.type,t.pendingProps,oe.current),ft=t,Zt=!0,i=Fe,ea(t.type)?(xc=i,Fe=Jt(s.firstChild)):Fe=i),ht(e,t,t.pendingProps.children,n),ki(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((i=s=Fe)&&(s=sy(s,t.type,t.pendingProps,Zt),s!==null?(t.stateNode=s,ft=t,Fe=Jt(s.firstChild),Zt=!1,i=!0):i=!1),i||Un(t)),Yt(t),i=t.type,c=t.pendingProps,m=e!==null?e.memoizedProps:null,s=c.children,pc(i,c)?s=null:m!==null&&pc(i,m)&&(t.flags|=32),t.memoizedState!==null&&(i=uo(e,t,bx,null,null,n),mr._currentValue=i),ki(e,t),ht(e,t,s,n),t.child;case 6:return e===null&&Oe&&((e=n=Fe)&&(n=ry(n,t.pendingProps,Zt),n!==null?(t.stateNode=n,ft=t,Fe=null,e=!0):e=!1),e||Un(t)),null;case 13:return Ip(e,t,n);case 4:return We(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=wa(t,null,s,n):ht(e,t,s,n),t.child;case 11:return Dp(e,t,t.type,t.pendingProps,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:return s=t.pendingProps,Hn(t,t.type,s.value),ht(e,t,s.children,n),t.child;case 9:return i=t.type._context,s=t.pendingProps.children,ya(t),i=mt(i),s=s(i),t.flags|=1,ht(e,t,s,n),t.child;case 14:return Mp(e,t,t.type,t.pendingProps,n);case 15:return Rp(e,t,t.type,t.pendingProps,n);case 19:return Vp(e,t,n);case 31:return Cx(e,t,n);case 22:return Pp(e,t,n,t.pendingProps);case 24:return ya(t),s=mt(at),e===null?(i=eo(),i===null&&(i=Ke,c=Jl(),i.pooledCache=c,c.refCount++,c!==null&&(i.pooledCacheLanes|=n),i=c),t.memoizedState={parent:s,cache:i},no(t),Hn(t,at,i)):((e.lanes&n)!==0&&(ao(e,t),Qs(t,null,null,n),Xs()),i=e.memoizedState,c=t.memoizedState,i.parent!==s?(i={parent:s,cache:s},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Hn(t,at,s)):(s=c.cache,Hn(t,at,s),s!==i.cache&&Wl(t,[at],n,!0))),ht(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function En(e){e.flags|=4}function Bo(e,t,n,s,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(bf())e.flags|=8192;else throw ka=ii,to}else e.flags&=-16777217}function Kp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!om(t))if(bf())e.flags|=8192;else throw ka=ii,to}function vi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Tu():536870912,e.lanes|=t,ls|=t)}function er(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,s|=i.subtreeFlags&65011712,s|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function jx(e,t,n){var s=t.pendingProps;switch(Kl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return n=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),wn(at),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Qa(t)?En(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ql())),Ze(t),null;case 26:var i=t.type,c=t.memoizedState;return e===null?(En(t),c!==null?(Ze(t),Kp(t,c)):(Ze(t),Bo(t,i,null,s,n))):c?c!==e.memoizedState?(En(t),Ze(t),Kp(t,c)):(Ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&En(t),Ze(t),Bo(t,i,e,s,n)),null;case 27:if(fn(t),n=oe.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&En(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ze(t),null}e=$.current,Qa(t)?Td(t):(e=em(i,s,n),t.stateNode=e,En(t))}return Ze(t),null;case 5:if(fn(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&En(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ze(t),null}if(c=$.current,Qa(t))Td(t);else{var m=qi(oe.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?m.createElement(i,{is:s.is}):m.createElement(i)}}c[pt]=t,c[vt]=s;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=c;e:switch(gt(c,i,s),i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&En(t)}}return Ze(t),Bo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&En(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(e=oe.current,Qa(t)){if(e=t.stateNode,n=t.memoizedProps,s=null,i=ft,i!==null)switch(i.tag){case 27:case 5:s=i.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||Yf(e.nodeValue,n)),e||Un(t,!0)}else e=qi(e).createTextNode(s),e[pt]=t,t.stateNode=e}return Ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(s=Qa(t),n!==null){if(e===null){if(!s)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[pt]=t}else ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),e=!1}else n=Ql(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ze(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Qa(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[pt]=t}else ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),i=!1}else i=Ql(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=s!==null,e=e!==null&&e.memoizedState!==null,n&&(s=t.child,i=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(i=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==i&&(s.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vi(t,t.updateQueue),Ze(t),null);case 4:return He(),e===null&&lc(t.stateNode.containerInfo),Ze(t),null;case 10:return wn(t.type),Ze(t),null;case 19:if(R(tt),s=t.memoizedState,s===null)return Ze(t),null;if(i=(t.flags&128)!==0,c=s.rendering,c===null)if(i)er(s,!1);else{if(et!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=ui(e),c!==null){for(t.flags|=128,er(s,!1),e=c.updateQueue,t.updateQueue=e,vi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_d(n,e),n=n.sibling;return k(tt,tt.current&1|2),Oe&&_n(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&bt()>Ai&&(t.flags|=128,i=!0,er(s,!1),t.lanes=4194304)}else{if(!i)if(e=ui(c),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,vi(t,e),er(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!Oe)return Ze(t),null}else 2*bt()-s.renderingStartTime>Ai&&n!==536870912&&(t.flags|=128,i=!0,er(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(e=s.last,e!==null?e.sibling=c:t.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=tt.current,k(tt,i?n&1|2:n&1),Oe&&_n(t,s.treeForkCount),e):(Ze(t),null);case 22:case 23:return zt(t),lo(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(n&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),n=t.updateQueue,n!==null&&vi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==n&&(t.flags|=2048),e!==null&&R(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wn(at),Ze(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Nx(e,t){switch(Kl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(at),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fn(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(o(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(tt),null;case 4:return He(),null;case 10:return wn(t.type),null;case 22:case 23:return zt(t),lo(),e!==null&&R(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return wn(at),null;case 25:return null;default:return null}}function Xp(e,t){switch(Kl(t),t.tag){case 3:wn(at),He();break;case 26:case 27:case 5:fn(t);break;case 4:He();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:R(tt);break;case 10:wn(t.type);break;case 22:case 23:zt(t),lo(),e!==null&&R(ba);break;case 24:wn(at)}}function tr(e,t){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var i=s.next;n=i;do{if((n.tag&e)===e){s=void 0;var c=n.create,m=n.inst;s=c(),m.destroy=s}n=n.next}while(n!==i)}}catch(b){Be(t,t.return,b)}}function Xn(e,t,n){try{var s=t.updateQueue,i=s!==null?s.lastEffect:null;if(i!==null){var c=i.next;s=c;do{if((s.tag&e)===e){var m=s.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,i=t;var S=n,N=b;try{N()}catch(M){Be(i,S,M)}}}s=s.next}while(s!==c)}}catch(M){Be(t,t.return,M)}}function Qp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qd(t,n)}catch(s){Be(e,e.return,s)}}}function Fp(e,t,n){n.props=Sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){Be(e,t,s)}}function nr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof n=="function"?e.refCleanup=n(s):n.current=s}}catch(i){Be(e,t,i)}}function on(e,t){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(i){Be(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Be(e,t,i)}else n.current=null}function Zp(e){var t=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(i){Be(e,e.return,i)}}function Uo(e,t,n){try{var s=e.stateNode;Jx(s,e.type,n,t),s[vt]=t}catch(i){Be(e,e.return,i)}}function Wp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ea(e.type)||e.tag===4}function Ho(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xn));else if(s!==4&&(s===27&&ea(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}function Si(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(s===27&&ea(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Si(e,t,n),e=e.sibling;e!==null;)Si(e,t,n),e=e.sibling}function Jp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var s=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);gt(t,s,n),t[pt]=e,t[vt]=n}catch(c){Be(e,e.return,c)}}var Cn=!1,it=!1,Yo=!1,$p=typeof WeakSet=="function"?WeakSet:Set,dt=null;function Lx(e,t){if(e=e.containerInfo,uc=Gi,e=dd(e),Rl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var i=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var m=0,b=-1,S=-1,N=0,M=0,B=e,O=null;t:for(;;){for(var D;B!==n||i!==0&&B.nodeType!==3||(b=m+i),B!==c||s!==0&&B.nodeType!==3||(S=m+s),B.nodeType===3&&(m+=B.nodeValue.length),(D=B.firstChild)!==null;)O=B,B=D;for(;;){if(B===e)break t;if(O===n&&++N===i&&(b=m),O===c&&++M===s&&(S=m),(D=B.nextSibling)!==null)break;B=O,O=B.parentNode}B=D}n=b===-1||S===-1?null:{start:b,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(dc={focusedElem:e,selectionRange:n},Gi=!1,dt=t;dt!==null;)if(t=dt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,dt=e;else for(;dt!==null;){switch(t=dt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,i=c.memoizedProps,c=c.memoizedState,s=n.stateNode;try{var ae=Sa(n.type,i);e=s.getSnapshotBeforeUpdate(ae,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(ue){Be(n,n.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)mc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,dt=e;break}dt=t.return}}function ef(e,t,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:jn(e,n),s&4&&tr(5,n);break;case 1:if(jn(e,n),s&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Be(n,n.return,m)}else{var i=Sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Be(n,n.return,m)}}s&64&&Qp(n),s&512&&nr(n,n.return);break;case 3:if(jn(e,n),s&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qd(e,t)}catch(m){Be(n,n.return,m)}}break;case 27:t===null&&s&4&&Jp(n);case 26:case 5:jn(e,n),t===null&&s&4&&Zp(n),s&512&&nr(n,n.return);break;case 12:jn(e,n);break;case 31:jn(e,n),s&4&&af(e,n);break;case 13:jn(e,n),s&4&&sf(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ux.bind(null,n),iy(e,n))));break;case 22:if(s=n.memoizedState!==null||Cn,!s){t=t!==null&&t.memoizedState!==null||it,i=Cn;var c=it;Cn=s,(it=t)&&!c?Nn(e,n,(n.subtreeFlags&8772)!==0):jn(e,n),Cn=i,it=c}break;case 30:break;default:jn(e,n)}}function tf(e){var t=e.alternate;t!==null&&(e.alternate=null,tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Tt=!1;function An(e,t,n){for(n=n.child;n!==null;)nf(e,t,n),n=n.sibling}function nf(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(_t,n)}catch{}switch(n.tag){case 26:it||on(n,t),An(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:it||on(n,t);var s=Je,i=Tt;ea(n.type)&&(Je=n.stateNode,Tt=!1),An(e,t,n),dr(n.stateNode),Je=s,Tt=i;break;case 5:it||on(n,t);case 6:if(s=Je,i=Tt,Je=null,An(e,t,n),Je=s,Tt=i,Je!==null)if(Tt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(n.stateNode)}catch(c){Be(n,t,c)}else try{Je.removeChild(n.stateNode)}catch(c){Be(n,t,c)}break;case 18:Je!==null&&(Tt?(e=Je,Ff(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),hs(e)):Ff(Je,n.stateNode));break;case 4:s=Je,i=Tt,Je=n.stateNode.containerInfo,Tt=!0,An(e,t,n),Je=s,Tt=i;break;case 0:case 11:case 14:case 15:Xn(2,n,t),it||Xn(4,n,t),An(e,t,n);break;case 1:it||(on(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"&&Fp(n,t,s)),An(e,t,n);break;case 21:An(e,t,n);break;case 22:it=(s=it)||n.memoizedState!==null,An(e,t,n),it=s;break;default:An(e,t,n)}}function af(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hs(e)}catch(n){Be(t,t.return,n)}}}function sf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hs(e)}catch(n){Be(t,t.return,n)}}function Ox(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $p),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $p),t;default:throw Error(o(435,e.tag))}}function Ti(e,t){var n=Ox(e);t.forEach(function(s){if(!n.has(s)){n.add(s);var i=Hx.bind(null,e,s);s.then(i,i)}})}function Et(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var i=n[s],c=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(ea(b.type)){Je=b.stateNode,Tt=!1;break e}break;case 5:Je=b.stateNode,Tt=!1;break e;case 3:case 4:Je=b.stateNode.containerInfo,Tt=!0;break e}b=b.return}if(Je===null)throw Error(o(160));nf(c,m,i),Je=null,Tt=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rf(t,e),t=t.sibling}var an=null;function rf(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),Ct(e),s&4&&(Xn(3,e,e.return),tr(3,e),Xn(5,e,e.return));break;case 1:Et(t,e),Ct(e),s&512&&(it||n===null||on(n,n.return)),s&64&&Cn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var i=an;if(Et(t,e),Ct(e),s&512&&(it||n===null||on(n,n.return)),s&4){var c=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(s){case"title":c=i.getElementsByTagName("title")[0],(!c||c[js]||c[pt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=i.createElement(s),i.head.insertBefore(c,i.querySelector("head > title"))),gt(c,s,n),c[pt]=e,ut(c),s=c;break e;case"link":var m=im("link","href",i).get(s+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(c=m[b],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break t}}c=i.createElement(s),gt(c,s,n),i.head.appendChild(c);break;case"meta":if(m=im("meta","content",i).get(s+(n.content||""))){for(b=0;b<m.length;b++)if(c=m[b],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break t}}c=i.createElement(s),gt(c,s,n),i.head.appendChild(c);break;default:throw Error(o(468,s))}c[pt]=e,ut(c),s=c}e.stateNode=s}else lm(i,e.type,e.stateNode);else e.stateNode=rm(i,s,e.memoizedProps);else c!==s?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,s===null?lm(i,e.type,e.stateNode):rm(i,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Uo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Et(t,e),Ct(e),s&512&&(it||n===null||on(n,n.return)),n!==null&&s&4&&Uo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Et(t,e),Ct(e),s&512&&(it||n===null||on(n,n.return)),e.flags&32){i=e.stateNode;try{qa(i,"")}catch(ae){Be(e,e.return,ae)}}s&4&&e.stateNode!=null&&(i=e.memoizedProps,Uo(e,i,n!==null?n.memoizedProps:i)),s&1024&&(Yo=!0);break;case 6:if(Et(t,e),Ct(e),s&4){if(e.stateNode===null)throw Error(o(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(ae){Be(e,e.return,ae)}}break;case 3:if(Hi=null,i=an,an=Bi(t.containerInfo),Et(t,e),an=i,Ct(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{hs(t.containerInfo)}catch(ae){Be(e,e.return,ae)}Yo&&(Yo=!1,lf(e));break;case 4:s=an,an=Bi(e.stateNode.containerInfo),Et(t,e),Ct(e),an=s;break;case 12:Et(t,e),Ct(e);break;case 31:Et(t,e),Ct(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ti(e,s)));break;case 13:Et(t,e),Ct(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ci=bt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ti(e,s)));break;case 22:i=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,N=Cn,M=it;if(Cn=N||i,it=M||S,Et(t,e),it=M,Cn=N,Ct(e),s&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||S||Cn||it||Ta(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(c=S.stateNode,i)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=S.stateNode;var B=S.memoizedProps.style,O=B!=null&&B.hasOwnProperty("display")?B.display:null;b.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ae){Be(S,S.return,ae)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=i?"":S.memoizedProps}catch(ae){Be(S,S.return,ae)}}}else if(t.tag===18){if(n===null){S=t;try{var D=S.stateNode;i?Zf(D,!0):Zf(S.stateNode,!1)}catch(ae){Be(S,S.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,Ti(e,n))));break;case 19:Et(t,e),Ct(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ti(e,s)));break;case 30:break;case 21:break;default:Et(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{for(var n,s=e.return;s!==null;){if(Wp(s)){n=s;break}s=s.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,c=Ho(e);Si(e,c,i);break;case 5:var m=n.stateNode;n.flags&32&&(qa(m,""),n.flags&=-33);var b=Ho(e);Si(e,b,m);break;case 3:case 4:var S=n.stateNode.containerInfo,N=Ho(e);Io(e,N,S);break;default:throw Error(o(161))}}catch(M){Be(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ef(e,t.alternate,t),t=t.sibling}function Ta(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),Ta(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Fp(t,t.return,n),Ta(t);break;case 27:dr(t.stateNode);case 26:case 5:on(t,t.return),Ta(t);break;case 22:t.memoizedState===null&&Ta(t);break;case 30:Ta(t);break;default:Ta(t)}e=e.sibling}}function Nn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,i=e,c=t,m=c.flags;switch(c.tag){case 0:case 11:case 15:Nn(i,c,n),tr(4,c);break;case 1:if(Nn(i,c,n),s=c,i=s.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(N){Be(s,s.return,N)}if(s=c,i=s.updateQueue,i!==null){var b=s.stateNode;try{var S=i.shared.hiddenCallbacks;if(S!==null)for(i.shared.hiddenCallbacks=null,i=0;i<S.length;i++)zd(S[i],b)}catch(N){Be(s,s.return,N)}}n&&m&64&&Qp(c),nr(c,c.return);break;case 27:Jp(c);case 26:case 5:Nn(i,c,n),n&&s===null&&m&4&&Zp(c),nr(c,c.return);break;case 12:Nn(i,c,n);break;case 31:Nn(i,c,n),n&&m&4&&af(i,c);break;case 13:Nn(i,c,n),n&&m&4&&sf(i,c);break;case 22:c.memoizedState===null&&Nn(i,c,n),nr(c,c.return);break;case 30:break;default:Nn(i,c,n)}t=t.sibling}}function Vo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Is(n))}function Go(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Is(e))}function sn(e,t,n,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)of(e,t,n,s),t=t.sibling}function of(e,t,n,s){var i=t.flags;switch(t.tag){case 0:case 11:case 15:sn(e,t,n,s),i&2048&&tr(9,t);break;case 1:sn(e,t,n,s);break;case 3:sn(e,t,n,s),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Is(e)));break;case 12:if(i&2048){sn(e,t,n,s),e=t.stateNode;try{var c=t.memoizedProps,m=c.id,b=c.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Be(t,t.return,S)}}else sn(e,t,n,s);break;case 31:sn(e,t,n,s);break;case 13:sn(e,t,n,s);break;case 23:break;case 22:c=t.stateNode,m=t.alternate,t.memoizedState!==null?c._visibility&2?sn(e,t,n,s):ar(e,t):c._visibility&2?sn(e,t,n,s):(c._visibility|=2,ss(e,t,n,s,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Vo(m,t);break;case 24:sn(e,t,n,s),i&2048&&Go(t.alternate,t);break;default:sn(e,t,n,s)}}function ss(e,t,n,s,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,m=t,b=n,S=s,N=m.flags;switch(m.tag){case 0:case 11:case 15:ss(c,m,b,S,i),tr(8,m);break;case 23:break;case 22:var M=m.stateNode;m.memoizedState!==null?M._visibility&2?ss(c,m,b,S,i):ar(c,m):(M._visibility|=2,ss(c,m,b,S,i)),i&&N&2048&&Vo(m.alternate,m);break;case 24:ss(c,m,b,S,i),i&&N&2048&&Go(m.alternate,m);break;default:ss(c,m,b,S,i)}t=t.sibling}}function ar(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,s=t,i=s.flags;switch(s.tag){case 22:ar(n,s),i&2048&&Vo(s.alternate,s);break;case 24:ar(n,s),i&2048&&Go(s.alternate,s);break;default:ar(n,s)}t=t.sibling}}var sr=8192;function rs(e,t,n){if(e.subtreeFlags&sr)for(e=e.child;e!==null;)cf(e,t,n),e=e.sibling}function cf(e,t,n){switch(e.tag){case 26:rs(e,t,n),e.flags&sr&&e.memoizedState!==null&&yy(n,an,e.memoizedState,e.memoizedProps);break;case 5:rs(e,t,n);break;case 3:case 4:var s=an;an=Bi(e.stateNode.containerInfo),rs(e,t,n),an=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=sr,sr=16777216,rs(e,t,n),sr=s):rs(e,t,n));break;default:rs(e,t,n)}}function uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];dt=s,pf(s,e)}uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)df(e),e=e.sibling}function df(e){switch(e.tag){case 0:case 11:case 15:rr(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:rr(e);break;case 12:rr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ei(e)):rr(e);break;default:rr(e)}}function Ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];dt=s,pf(s,e)}uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),Ei(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ei(t));break;default:Ei(t)}e=e.sibling}}function pf(e,t){for(;dt!==null;){var n=dt;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Is(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,dt=s;else e:for(n=e;dt!==null;){s=dt;var i=s.sibling,c=s.return;if(tf(s),s===n){dt=null;break e}if(i!==null){i.return=c,dt=i;break e}dt=c}}}var Dx={getCacheForType:function(e){var t=mt(at),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return mt(at).controller.signal}},Mx=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ke=null,Ee=null,Ne=0,qe=0,qt=null,Qn=!1,is=!1,Ko=!1,Ln=0,et=0,Fn=0,Ea=0,Xo=0,Bt=0,ls=0,ir=null,At=null,Qo=!1,Ci=0,ff=0,Ai=1/0,ji=null,Zn=null,ct=0,Wn=null,os=null,On=0,Fo=0,Zo=null,mf=null,lr=0,Wo=null;function Ut(){return(Re&2)!==0&&Ne!==0?Ne&-Ne:L.T!==null?ac():ju()}function hf(){if(Bt===0)if((Ne&536870912)===0||Oe){var e=zr;zr<<=1,(zr&3932160)===0&&(zr=262144),Bt=e}else Bt=536870912;return e=Pt.current,e!==null&&(e.flags|=32),Bt}function jt(e,t,n){(e===Ke&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(cs(e,0),Jn(e,Ne,Bt,!1)),As(e,n),((Re&2)===0||e!==Ke)&&(e===Ke&&((Re&2)===0&&(Ea|=n),et===4&&Jn(e,Ne,Bt,!1)),cn(e))}function gf(e,t,n){if((Re&6)!==0)throw Error(o(327));var s=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Cs(e,t),i=s?zx(e,t):$o(e,t,!0),c=s;do{if(i===0){is&&!s&&Jn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!Rx(n)){i=$o(e,t,!1),c=!1;continue}if(i===2){if(c=t,e.errorRecoveryDisabledLanes&c)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;i=ir;var S=b.current.memoizedState.isDehydrated;if(S&&(cs(b,m).flags|=256),m=$o(b,m,!1),m!==2){if(Ko&&!S){b.errorRecoveryDisabledLanes|=c,Ea|=c,i=4;break e}c=At,At=i,c!==null&&(At===null?At=c:At.push.apply(At,c))}i=m}if(c=!1,i!==2)continue}}if(i===1){cs(e,0),Jn(e,t,0,!0);break}e:{switch(s=e,c=i,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Jn(s,t,Bt,!Qn);break e;case 2:At=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=Ci+300-bt(),10<i)){if(Jn(s,t,Bt,!Qn),Br(s,0,!0)!==0)break e;On=t,s.timeoutHandle=Xf(xf.bind(null,s,n,At,ji,Qo,t,Bt,Ea,ls,Qn,c,"Throttled",-0,0),i);break e}xf(s,n,At,ji,Qo,t,Bt,Ea,ls,Qn,c,null,-0,0)}}break}while(!0);cn(e)}function xf(e,t,n,s,i,c,m,b,S,N,M,B,O,D){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xn},cf(t,c,B);var ae=(c&62914560)===c?Ci-bt():(c&4194048)===c?ff-bt():0;if(ae=by(B,ae),ae!==null){On=c,e.cancelPendingCommit=ae(Tf.bind(null,e,t,c,n,s,i,m,b,S,M,B,null,O,D)),Jn(e,c,m,!N);return}}Tf(e,t,c,n,s,i,m,b,S)}function Rx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var i=n[s],c=i.getSnapshot;i=i.value;try{if(!Mt(c(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t,n,s){t&=~Xo,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var i=t;0<i;){var c=31-Ge(i),m=1<<c;s[c]=-1,i&=~m}n!==0&&Eu(e,n,t)}function Ni(){return(Re&6)===0?(or(0),!1):!0}function Jo(){if(Ee!==null){if(qe===0)var e=Ee.return;else e=Ee,kn=xa=null,mo(e),$a=null,Vs=0,e=Ee;for(;e!==null;)Xp(e.alternate,e),e=e.return;Ee=null}}function cs(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ty(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),On=0,Jo(),Ke=e,Ee=n=bn(e.current,null),Ne=t,qe=0,qt=null,Qn=!1,is=Cs(e,t),Ko=!1,ls=Bt=Xo=Ea=Fn=et=0,At=ir=null,Qo=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var i=31-Ge(s),c=1<<i;t|=e[i],s&=~c}return Ln=t,Wr(),n}function yf(e,t){_e=null,L.H=Js,t===Ja||t===ri?(t=Dd(),qe=3):t===to?(t=Dd(),qe=4):qe=t===No?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qt=t,Ee===null&&(et=1,bi(e,Xt(t,e.current)))}function bf(){var e=Pt.current;return e===null?!0:(Ne&4194048)===Ne?Wt===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Wt:!1}function _f(){var e=L.H;return L.H=Js,e===null?Js:e}function kf(){var e=L.A;return L.A=Dx,e}function Li(){et=4,Qn||(Ne&4194048)!==Ne&&Pt.current!==null||(is=!0),(Fn&134217727)===0&&(Ea&134217727)===0||Ke===null||Jn(Ke,Ne,Bt,!1)}function $o(e,t,n){var s=Re;Re|=2;var i=_f(),c=kf();(Ke!==e||Ne!==t)&&(ji=null,cs(e,t)),t=!1;var m=et;e:do try{if(qe!==0&&Ee!==null){var b=Ee,S=qt;switch(qe){case 8:Jo(),m=6;break e;case 3:case 2:case 9:case 6:Pt.current===null&&(t=!0);var N=qe;if(qe=0,qt=null,us(e,b,S,N),n&&is){m=0;break e}break;default:N=qe,qe=0,qt=null,us(e,b,S,N)}}Px(),m=et;break}catch(M){yf(e,M)}while(!0);return t&&e.shellSuspendCounter++,kn=xa=null,Re=s,L.H=i,L.A=c,Ee===null&&(Ke=null,Ne=0,Wr()),m}function Px(){for(;Ee!==null;)wf(Ee)}function zx(e,t){var n=Re;Re|=2;var s=_f(),i=kf();Ke!==e||Ne!==t?(ji=null,Ai=bt()+500,cs(e,t)):is=Cs(e,t);e:do try{if(qe!==0&&Ee!==null){t=Ee;var c=qt;t:switch(qe){case 1:qe=0,qt=null,us(e,t,c,1);break;case 2:case 9:if(Ld(c)){qe=0,qt=null,vf(t);break}t=function(){qe!==2&&qe!==9||Ke!==e||(qe=7),cn(e)},c.then(t,t);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:Ld(c)?(qe=0,qt=null,vf(t)):(qe=0,qt=null,us(e,t,c,7));break;case 5:var m=null;switch(Ee.tag){case 26:m=Ee.memoizedState;case 5:case 27:var b=Ee;if(m?om(m):b.stateNode.complete){qe=0,qt=null;var S=b.sibling;if(S!==null)Ee=S;else{var N=b.return;N!==null?(Ee=N,Oi(N)):Ee=null}break t}}qe=0,qt=null,us(e,t,c,5);break;case 6:qe=0,qt=null,us(e,t,c,6);break;case 8:Jo(),et=6;break e;default:throw Error(o(462))}}qx();break}catch(M){yf(e,M)}while(!0);return kn=xa=null,L.H=s,L.A=i,Re=n,Ee!==null?0:(Ke=null,Ne=0,Wr(),et)}function qx(){for(;Ee!==null&&!dl();)wf(Ee)}function wf(e){var t=Gp(e.alternate,e,Ln);e.memoizedProps=e.pendingProps,t===null?Oi(e):Ee=t}function vf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bp(n,t,t.pendingProps,t.type,void 0,Ne);break;case 11:t=Bp(n,t,t.pendingProps,t.type.render,t.ref,Ne);break;case 5:mo(t);default:Xp(n,t),t=Ee=_d(t,Ln),t=Gp(n,t,Ln)}e.memoizedProps=e.pendingProps,t===null?Oi(e):Ee=t}function us(e,t,n,s){kn=xa=null,mo(t),$a=null,Vs=0;var i=t.return;try{if(Ex(e,i,t,n,Ne)){et=1,bi(e,Xt(n,e.current)),Ee=null;return}}catch(c){if(i!==null)throw Ee=i,c;et=1,bi(e,Xt(n,e.current)),Ee=null;return}t.flags&32768?(Oe||s===1?e=!0:is||(Ne&536870912)!==0?e=!1:(Qn=e=!0,(s===2||s===9||s===3||s===6)&&(s=Pt.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sf(t,e)):Oi(t)}function Oi(e){var t=e;do{if((t.flags&32768)!==0){Sf(t,Qn);return}e=t.return;var n=jx(t.alternate,t,Ln);if(n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);et===0&&(et=5)}function Sf(e,t){do{var n=Nx(e.alternate,e);if(n!==null){n.flags&=32767,Ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=n}while(e!==null);et=6,Ee=null}function Tf(e,t,n,s,i,c,m,b,S){e.cancelPendingCommit=null;do Di();while(ct!==0);if((Re&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Ul,xg(e,n,c,m,b,S),e===Ke&&(Ee=Ke=null,Ne=0),os=t,Wn=e,On=n,Fo=c,Zo=i,mf=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ix(fe,function(){return Nf(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,i=Y.p,Y.p=2,m=Re,Re|=4;try{Lx(e,t,n)}finally{Re=m,Y.p=i,L.T=s}}ct=1,Ef(),Cf(),Af()}}function Ef(){if(ct===1){ct=0;var e=Wn,t=os,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var s=Y.p;Y.p=2;var i=Re;Re|=4;try{rf(t,e);var c=dc,m=dd(e.containerInfo),b=c.focusedElem,S=c.selectionRange;if(m!==b&&b&&b.ownerDocument&&ud(b.ownerDocument.documentElement,b)){if(S!==null&&Rl(b)){var N=S.start,M=S.end;if(M===void 0&&(M=N),"selectionStart"in b)b.selectionStart=N,b.selectionEnd=Math.min(M,b.value.length);else{var B=b.ownerDocument||document,O=B&&B.defaultView||window;if(O.getSelection){var D=O.getSelection(),ae=b.textContent.length,ue=Math.min(S.start,ae),Ve=S.end===void 0?ue:Math.min(S.end,ae);!D.extend&&ue>Ve&&(m=Ve,Ve=ue,ue=m);var A=cd(b,ue),C=cd(b,Ve);if(A&&C&&(D.rangeCount!==1||D.anchorNode!==A.node||D.anchorOffset!==A.offset||D.focusNode!==C.node||D.focusOffset!==C.offset)){var j=B.createRange();j.setStart(A.node,A.offset),D.removeAllRanges(),ue>Ve?(D.addRange(j),D.extend(C.node,C.offset)):(j.setEnd(C.node,C.offset),D.addRange(j))}}}}for(B=[],D=b;D=D.parentNode;)D.nodeType===1&&B.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<B.length;b++){var z=B[b];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Gi=!!uc,dc=uc=null}finally{Re=i,Y.p=s,L.T=n}}e.current=t,ct=2}}function Cf(){if(ct===2){ct=0;var e=Wn,t=os,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var s=Y.p;Y.p=2;var i=Re;Re|=4;try{ef(e,t.alternate,t)}finally{Re=i,Y.p=s,L.T=n}}ct=3}}function Af(){if(ct===4||ct===3){ct=0,pl();var e=Wn,t=os,n=On,s=mf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ct=5:(ct=0,os=Wn=null,jf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Zn=null),gl(n),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(_t,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=L.T,i=Y.p,Y.p=2,L.T=null;try{for(var c=e.onRecoverableError,m=0;m<s.length;m++){var b=s[m];c(b.value,{componentStack:b.stack})}}finally{L.T=t,Y.p=i}}(On&3)!==0&&Di(),cn(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===Wo?lr++:(lr=0,Wo=e):lr=0,or(0)}}function jf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Is(t)))}function Di(){return Ef(),Cf(),Af(),Nf()}function Nf(){if(ct!==5)return!1;var e=Wn,t=Fo;Fo=0;var n=gl(On),s=L.T,i=Y.p;try{Y.p=32>n?32:n,L.T=null,n=Zo,Zo=null;var c=Wn,m=On;if(ct=0,os=Wn=null,On=0,(Re&6)!==0)throw Error(o(331));var b=Re;if(Re|=4,df(c.current),of(c,c.current,m,n),Re=b,or(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(_t,c)}catch{}return!0}finally{Y.p=i,L.T=s,jf(e,t)}}function Lf(e,t,n){t=Xt(n,t),t=jo(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(As(e,2),cn(e))}function Be(e,t,n){if(e.tag===3)Lf(e,e,n);else for(;t!==null;){if(t.tag===3){Lf(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Zn===null||!Zn.has(s))){e=Xt(n,e),n=Lp(2),s=Vn(t,n,2),s!==null&&(Op(n,s,t,e),As(s,2),cn(s));break}}t=t.return}}function ec(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Mx;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(n)||(Ko=!0,i.add(n),e=Bx.bind(null,e,t,n),t.then(e,e))}function Bx(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ke===e&&(Ne&n)===n&&(et===4||et===3&&(Ne&62914560)===Ne&&300>bt()-Ci?(Re&2)===0&&cs(e,0):Xo|=n,ls===Ne&&(ls=0)),cn(e)}function Of(e,t){t===0&&(t=Tu()),e=ma(e,t),e!==null&&(As(e,t),cn(e))}function Ux(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Of(e,n)}function Hx(e,t){var n=0;switch(e.tag){case 31:case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(t),Of(e,n)}function Ix(e,t){return La(e,t)}var Mi=null,ds=null,tc=!1,Ri=!1,nc=!1,$n=0;function cn(e){e!==ds&&e.next===null&&(ds===null?Mi=ds=e:ds=ds.next=e),Ri=!0,tc||(tc=!0,Vx())}function or(e,t){if(!nc&&Ri){nc=!0;do for(var n=!1,s=Mi;s!==null;){if(e!==0){var i=s.pendingLanes;if(i===0)var c=0;else{var m=s.suspendedLanes,b=s.pingedLanes;c=(1<<31-Ge(42|e)+1)-1,c&=i&~(m&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Pf(s,c))}else c=Ne,c=Br(s,s===Ke?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Cs(s,c)||(n=!0,Pf(s,c));s=s.next}while(n);nc=!1}}function Yx(){Df()}function Df(){Ri=tc=!1;var e=0;$n!==0&&ey()&&(e=$n);for(var t=bt(),n=null,s=Mi;s!==null;){var i=s.next,c=Mf(s,t);c===0?(s.next=null,n===null?Mi=i:n.next=i,i===null&&(ds=n)):(n=s,(e!==0||(c&3)!==0)&&(Ri=!0)),s=i}ct!==0&&ct!==5||or(e),$n!==0&&($n=0)}function Mf(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var m=31-Ge(c),b=1<<m,S=i[m];S===-1?((b&n)===0||(b&s)!==0)&&(i[m]=gg(b,t)):S<=t&&(e.expiredLanes|=b),c&=~b}if(t=Ke,n=Ne,n=Br(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,n===0||e===t&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Es(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Cs(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(s!==null&&Es(s),gl(n)){case 2:case 8:n=F;break;case 32:n=fe;break;case 268435456:n=ze;break;default:n=fe}return s=Rf.bind(null,e),n=La(n,s),e.callbackPriority=t,e.callbackNode=n,t}return s!==null&&s!==null&&Es(s),e.callbackPriority=2,e.callbackNode=null,2}function Rf(e,t){if(ct!==0&&ct!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Di()&&e.callbackNode!==n)return null;var s=Ne;return s=Br(e,e===Ke?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(gf(e,s,t),Mf(e,bt()),e.callbackNode!=null&&e.callbackNode===n?Rf.bind(null,e):null)}function Pf(e,t){if(Di())return null;gf(e,t,!0)}function Vx(){ny(function(){(Re&6)!==0?La(P,Yx):Df()})}function ac(){if($n===0){var e=Za;e===0&&(e=Pr,Pr<<=1,(Pr&261888)===0&&(Pr=256)),$n=e}return $n}function zf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yr(""+e)}function qf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Gx(e,t,n,s,i){if(t==="submit"&&n&&n.stateNode===i){var c=zf((i[vt]||null).action),m=s.submitter;m&&(t=(t=m[vt]||null)?zf(t.formAction):m.getAttribute("formAction"),t!==null&&(c=t,m=null));var b=new Xr("action","action",null,s,i);e.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if($n!==0){var S=m?qf(i,m):new FormData(i);vo(n,{pending:!0,data:S,method:i.method,action:c},null,S)}}else typeof c=="function"&&(b.preventDefault(),S=m?qf(i,m):new FormData(i),vo(n,{pending:!0,data:S,method:i.method,action:c},c,S))},currentTarget:i}]})}}for(var sc=0;sc<Bl.length;sc++){var rc=Bl[sc],Kx=rc.toLowerCase(),Xx=rc[0].toUpperCase()+rc.slice(1);nn(Kx,"on"+Xx)}nn(md,"onAnimationEnd"),nn(hd,"onAnimationIteration"),nn(gd,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(cx,"onTransitionRun"),nn(ux,"onTransitionStart"),nn(dx,"onTransitionCancel"),nn(xd,"onTransitionEnd"),Pa("onMouseEnter",["mouseout","mouseover"]),Pa("onMouseLeave",["mouseout","mouseover"]),Pa("onPointerEnter",["pointerout","pointerover"]),Pa("onPointerLeave",["pointerout","pointerover"]),ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cr));function Bf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],i=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var m=s.length-1;0<=m;m--){var b=s[m],S=b.instance,N=b.currentTarget;if(b=b.listener,S!==c&&i.isPropagationStopped())break e;c=b,i.currentTarget=N;try{c(i)}catch(M){Zr(M)}i.currentTarget=null,c=S}else for(m=0;m<s.length;m++){if(b=s[m],S=b.instance,N=b.currentTarget,b=b.listener,S!==c&&i.isPropagationStopped())break e;c=b,i.currentTarget=N;try{c(i)}catch(M){Zr(M)}i.currentTarget=null,c=S}}}}function Ce(e,t){var n=t[xl];n===void 0&&(n=t[xl]=new Set);var s=e+"__bubble";n.has(s)||(Uf(t,e,2,!1),n.add(s))}function ic(e,t,n){var s=0;t&&(s|=4),Uf(n,e,s,t)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function lc(e){if(!e[Pi]){e[Pi]=!0,Ou.forEach(function(n){n!=="selectionchange"&&(Qx.has(n)||ic(n,!1,e),ic(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pi]||(t[Pi]=!0,ic("selectionchange",!1,t))}}function Uf(e,t,n,s){switch(hm(t)){case 2:var i=wy;break;case 8:i=vy;break;default:i=wc}n=i.bind(null,t,n,e),i=void 0,!El||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function oc(e,t,n,s,i){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var b=s.stateNode.containerInfo;if(b===i)break;if(m===4)for(m=s.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===i)return;m=m.return}for(;b!==null;){if(m=Da(b),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){s=c=m;continue e}b=b.parentNode}}s=s.return}Vu(function(){var N=c,M=Sl(n),B=[];e:{var O=yd.get(e);if(O!==void 0){var D=Xr,ae=e;switch(e){case"keypress":if(Gr(n)===0)break e;case"keydown":case"keyup":D=Hg;break;case"focusin":ae="focus",D=Nl;break;case"focusout":ae="blur",D=Nl;break;case"beforeblur":case"afterblur":D=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Vg;break;case md:case hd:case gd:D=Og;break;case xd:D=Kg;break;case"scroll":case"scrollend":D=Cg;break;case"wheel":D=Qg;break;case"copy":case"cut":case"paste":D=Mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Fu;break;case"toggle":case"beforetoggle":D=Zg}var ue=(t&4)!==0,Ve=!ue&&(e==="scroll"||e==="scrollend"),A=ue?O!==null?O+"Capture":null:O;ue=[];for(var C=N,j;C!==null;){var z=C;if(j=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||j===null||A===null||(z=Ls(C,A),z!=null&&ue.push(ur(C,z,j))),Ve)break;C=C.return}0<ue.length&&(O=new D(O,ae,null,n,M),B.push({event:O,listeners:ue}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",O&&n!==vl&&(ae=n.relatedTarget||n.fromElement)&&(Da(ae)||ae[Oa]))break e;if((D||O)&&(O=M.window===M?M:(O=M.ownerDocument)?O.defaultView||O.parentWindow:window,D?(ae=n.relatedTarget||n.toElement,D=N,ae=ae?Da(ae):null,ae!==null&&(Ve=p(ae),ue=ae.tag,ae!==Ve||ue!==5&&ue!==27&&ue!==6)&&(ae=null)):(D=null,ae=N),D!==ae)){if(ue=Xu,z="onMouseLeave",A="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ue=Fu,z="onPointerLeave",A="onPointerEnter",C="pointer"),Ve=D==null?O:Ns(D),j=ae==null?O:Ns(ae),O=new ue(z,C+"leave",D,n,M),O.target=Ve,O.relatedTarget=j,z=null,Da(M)===N&&(ue=new ue(A,C+"enter",ae,n,M),ue.target=j,ue.relatedTarget=Ve,z=ue),Ve=z,D&&ae)t:{for(ue=Fx,A=D,C=ae,j=0,z=A;z;z=ue(z))j++;z=0;for(var ce=C;ce;ce=ue(ce))z++;for(;0<j-z;)A=ue(A),j--;for(;0<z-j;)C=ue(C),z--;for(;j--;){if(A===C||C!==null&&A===C.alternate){ue=A;break t}A=ue(A),C=ue(C)}ue=null}else ue=null;D!==null&&Hf(B,O,D,ue,!1),ae!==null&&Ve!==null&&Hf(B,Ve,ae,ue,!0)}}e:{if(O=N?Ns(N):window,D=O.nodeName&&O.nodeName.toLowerCase(),D==="select"||D==="input"&&O.type==="file")var De=ad;else if(td(O))if(sd)De=ix;else{De=sx;var re=ax}else D=O.nodeName,!D||D.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?N&&wl(N.elementType)&&(De=ad):De=rx;if(De&&(De=De(e,N))){nd(B,De,n,M);break e}re&&re(e,O,N),e==="focusout"&&N&&O.type==="number"&&N.memoizedProps.value!=null&&kl(O,"number",O.value)}switch(re=N?Ns(N):window,e){case"focusin":(td(re)||re.contentEditable==="true")&&(Ia=re,Pl=N,Bs=null);break;case"focusout":Bs=Pl=Ia=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,pd(B,n,M);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":pd(B,n,M)}var ke;if(Ol)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Ha?$u(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(Zu&&n.locale!=="ko"&&(Ha||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Ha&&(ke=Gu()):(zn=M,Cl="value"in zn?zn.value:zn.textContent,Ha=!0)),re=zi(N,Le),0<re.length&&(Le=new Qu(Le,e,null,n,M),B.push({event:Le,listeners:re}),ke?Le.data=ke:(ke=ed(n),ke!==null&&(Le.data=ke)))),(ke=Jg?$g(e,n):ex(e,n))&&(Le=zi(N,"onBeforeInput"),0<Le.length&&(re=new Qu("onBeforeInput","beforeinput",null,n,M),B.push({event:re,listeners:Le}),re.data=ke)),Gx(B,e,N,n,M)}Bf(B,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zi(e,t){for(var n=t+"Capture",s=[];e!==null;){var i=e,c=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||c===null||(i=Ls(e,n),i!=null&&s.unshift(ur(e,i,c)),i=Ls(e,t),i!=null&&s.push(ur(e,i,c))),e.tag===3)return s;e=e.return}return[]}function Fx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hf(e,t,n,s,i){for(var c=t._reactName,m=[];n!==null&&n!==s;){var b=n,S=b.alternate,N=b.stateNode;if(b=b.tag,S!==null&&S===s)break;b!==5&&b!==26&&b!==27||N===null||(S=N,i?(N=Ls(n,c),N!=null&&m.unshift(ur(n,N,S))):i||(N=Ls(n,c),N!=null&&m.push(ur(n,N,S)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Zx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function If(e){return(typeof e=="string"?e:""+e).replace(Zx,`
`).replace(Wx,"")}function Yf(e,t){return t=If(t),If(e)===t}function Ye(e,t,n,s,i,c){switch(n){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||qa(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&qa(e,""+s);break;case"className":Hr(e,"class",s);break;case"tabIndex":Hr(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Hr(e,n,s);break;case"style":Iu(e,s,c);break;case"data":if(t!=="object"){Hr(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=Yr(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ye(e,t,"name",i.name,i,null),Ye(e,t,"formEncType",i.formEncType,i,null),Ye(e,t,"formMethod",i.formMethod,i,null),Ye(e,t,"formTarget",i.formTarget,i,null)):(Ye(e,t,"encType",i.encType,i,null),Ye(e,t,"method",i.method,i,null),Ye(e,t,"target",i.target,i,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=Yr(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=xn);break;case"onScroll":s!=null&&Ce("scroll",e);break;case"onScrollEnd":s!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=Yr(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Ur(e,"popover",s);break;case"xlinkActuate":gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ur(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Tg.get(n)||n,Ur(e,n,s))}}function cc(e,t,n,s,i,c){switch(n){case"style":Iu(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof s=="string"?qa(e,s):(typeof s=="number"||typeof s=="bigint")&&qa(e,""+s);break;case"onScroll":s!=null&&Ce("scroll",e);break;case"onScrollEnd":s!=null&&Ce("scrollend",e);break;case"onClick":s!=null&&(e.onclick=xn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Du.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),c=e[vt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,i),typeof s=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,s,i);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):Ur(e,n,s)}}}function gt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var s=!1,i=!1,c;for(c in n)if(n.hasOwnProperty(c)){var m=n[c];if(m!=null)switch(c){case"src":s=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ye(e,t,c,m,n,null)}}i&&Ye(e,t,"srcSet",n.srcSet,n,null),s&&Ye(e,t,"src",n.src,n,null);return;case"input":Ce("invalid",e);var b=c=m=i=null,S=null,N=null;for(s in n)if(n.hasOwnProperty(s)){var M=n[s];if(M!=null)switch(s){case"name":i=M;break;case"type":m=M;break;case"checked":S=M;break;case"defaultChecked":N=M;break;case"value":c=M;break;case"defaultValue":b=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:Ye(e,t,s,M,n,null)}}qu(e,c,b,S,N,m,i,!1);return;case"select":Ce("invalid",e),s=m=c=null;for(i in n)if(n.hasOwnProperty(i)&&(b=n[i],b!=null))switch(i){case"value":c=b;break;case"defaultValue":m=b;break;case"multiple":s=b;default:Ye(e,t,i,b,n,null)}t=c,n=m,e.multiple=!!s,t!=null?za(e,!!s,t,!1):n!=null&&za(e,!!s,n,!0);return;case"textarea":Ce("invalid",e),c=i=s=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":s=b;break;case"defaultValue":i=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:Ye(e,t,m,b,n,null)}Uu(e,s,i,c);return;case"option":for(S in n)n.hasOwnProperty(S)&&(s=n[S],s!=null)&&(S==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Ye(e,t,S,s,n,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(s=0;s<cr.length;s++)Ce(cr[s],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(s=n[N],s!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ye(e,t,N,s,n,null)}return;default:if(wl(t)){for(M in n)n.hasOwnProperty(M)&&(s=n[M],s!==void 0&&cc(e,t,M,s,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(s=n[b],s!=null&&Ye(e,t,b,s,n,null))}function Jx(e,t,n,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,c=null,m=null,b=null,S=null,N=null,M=null;for(D in n){var B=n[D];if(n.hasOwnProperty(D)&&B!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":S=B;default:s.hasOwnProperty(D)||Ye(e,t,D,null,s,B)}}for(var O in s){var D=s[O];if(B=n[O],s.hasOwnProperty(O)&&(D!=null||B!=null))switch(O){case"type":c=D;break;case"name":i=D;break;case"checked":N=D;break;case"defaultChecked":M=D;break;case"value":m=D;break;case"defaultValue":b=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:D!==B&&Ye(e,t,O,D,s,B)}}_l(e,m,b,S,N,M,c,i);return;case"select":D=m=b=O=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":D=S;default:s.hasOwnProperty(c)||Ye(e,t,c,null,s,S)}for(i in s)if(c=s[i],S=n[i],s.hasOwnProperty(i)&&(c!=null||S!=null))switch(i){case"value":O=c;break;case"defaultValue":b=c;break;case"multiple":m=c;default:c!==S&&Ye(e,t,i,c,s,S)}t=b,n=m,s=D,O!=null?za(e,!!n,O,!1):!!s!=!!n&&(t!=null?za(e,!!n,t,!0):za(e,!!n,n?[]:"",!1));return;case"textarea":D=O=null;for(b in n)if(i=n[b],n.hasOwnProperty(b)&&i!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ye(e,t,b,null,s,i)}for(m in s)if(i=s[m],c=n[m],s.hasOwnProperty(m)&&(i!=null||c!=null))switch(m){case"value":O=i;break;case"defaultValue":D=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==c&&Ye(e,t,m,i,s,c)}Bu(e,O,D);return;case"option":for(var ae in n)O=n[ae],n.hasOwnProperty(ae)&&O!=null&&!s.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:Ye(e,t,ae,null,s,O));for(S in s)O=s[S],D=n[S],s.hasOwnProperty(S)&&O!==D&&(O!=null||D!=null)&&(S==="selected"?e.selected=O&&typeof O!="function"&&typeof O!="symbol":Ye(e,t,S,O,s,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in n)O=n[ue],n.hasOwnProperty(ue)&&O!=null&&!s.hasOwnProperty(ue)&&Ye(e,t,ue,null,s,O);for(N in s)if(O=s[N],D=n[N],s.hasOwnProperty(N)&&O!==D&&(O!=null||D!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Ye(e,t,N,O,s,D)}return;default:if(wl(t)){for(var Ve in n)O=n[Ve],n.hasOwnProperty(Ve)&&O!==void 0&&!s.hasOwnProperty(Ve)&&cc(e,t,Ve,void 0,s,O);for(M in s)O=s[M],D=n[M],!s.hasOwnProperty(M)||O===D||O===void 0&&D===void 0||cc(e,t,M,O,s,D);return}}for(var A in n)O=n[A],n.hasOwnProperty(A)&&O!=null&&!s.hasOwnProperty(A)&&Ye(e,t,A,null,s,O);for(B in s)O=s[B],D=n[B],!s.hasOwnProperty(B)||O===D||O==null&&D==null||Ye(e,t,B,O,s,D)}function Vf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $x(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),s=0;s<n.length;s++){var i=n[s],c=i.transferSize,m=i.initiatorType,b=i.duration;if(c&&b&&Vf(m)){for(m=0,b=i.responseEnd,s+=1;s<n.length;s++){var S=n[s],N=S.startTime;if(N>b)break;var M=S.transferSize,B=S.initiatorType;M&&Vf(B)&&(S=S.responseEnd,m+=M*(S<b?1:(b-N)/(S-N)))}if(--s,t+=8*(c+m)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uc=null,dc=null;function qi(e){return e.nodeType===9?e:e.ownerDocument}function Gf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fc=null;function ey(){var e=window.event;return e&&e.type==="popstate"?e===fc?!1:(fc=e,!0):(fc=null,!1)}var Xf=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(e){return Qf.resolve(null).then(e).catch(ay)}:Xf;function ay(e){setTimeout(function(){throw e})}function ea(e){return e==="head"}function Ff(e,t){var n=t,s=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(s===0){e.removeChild(i),hs(t);return}s--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")s++;else if(n==="html")dr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,dr(n);for(var c=n.firstChild;c;){var m=c.nextSibling,b=c.nodeName;c[js]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=m}}else n==="body"&&dr(e.ownerDocument.body);n=i}while(n);hs(t)}function Zf(e,t){var n=e;e=0;do{var s=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=s}while(n)}function mc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":mc(n),yl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function sy(e,t,n,s){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[js])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Jt(e.nextSibling),e===null)break}return null}function ry(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jt(e.nextSibling),e===null))return null;return e}function Wf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jt(e.nextSibling),e===null))return null;return e}function hc(e){return e.data==="$?"||e.data==="$~"}function gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var s=function(){t(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xc=null;function Jf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Jt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function em(e,t,n){switch(t=qi(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function dr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yl(e)}var $t=new Map,tm=new Set;function Bi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Dn=Y.d;Y.d={f:ly,r:oy,D:cy,C:uy,L:dy,m:py,X:my,S:fy,M:hy};function ly(){var e=Dn.f(),t=Ni();return e||t}function oy(e){var t=Ma(e);t!==null&&t.tag===5&&t.type==="form"?xp(t):Dn.r(e)}var ps=typeof document>"u"?null:document;function nm(e,t,n){var s=ps;if(s&&typeof t=="string"&&t){var i=Gt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),tm.has(i)||(tm.add(i),e={rel:e,crossOrigin:n,href:t},s.querySelector(i)===null&&(t=s.createElement("link"),gt(t,"link",e),ut(t),s.head.appendChild(t)))}}function cy(e){Dn.D(e),nm("dns-prefetch",e,null)}function uy(e,t){Dn.C(e,t),nm("preconnect",e,t)}function dy(e,t,n){Dn.L(e,t,n);var s=ps;if(s&&e&&t){var i='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Gt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Gt(n.imageSizes)+'"]')):i+='[href="'+Gt(e)+'"]';var c=i;switch(t){case"style":c=fs(e);break;case"script":c=ms(e)}$t.has(c)||(e=_({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),$t.set(c,e),s.querySelector(i)!==null||t==="style"&&s.querySelector(pr(c))||t==="script"&&s.querySelector(fr(c))||(t=s.createElement("link"),gt(t,"link",e),ut(t),s.head.appendChild(t)))}}function py(e,t){Dn.m(e,t);var n=ps;if(n&&e){var s=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Gt(s)+'"][href="'+Gt(e)+'"]',c=i;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ms(e)}if(!$t.has(c)&&(e=_({rel:"modulepreload",href:e},t),$t.set(c,e),n.querySelector(i)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fr(c)))return}s=n.createElement("link"),gt(s,"link",e),ut(s),n.head.appendChild(s)}}}function fy(e,t,n){Dn.S(e,t,n);var s=ps;if(s&&e){var i=Ra(s).hoistableStyles,c=fs(e);t=t||"default";var m=i.get(c);if(!m){var b={loading:0,preload:null};if(m=s.querySelector(pr(c)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$t.get(c))&&yc(e,n);var S=m=s.createElement("link");ut(S),gt(S,"link",e),S._p=new Promise(function(N,M){S.onload=N,S.onerror=M}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ui(m,t,s)}m={type:"stylesheet",instance:m,count:1,state:b},i.set(c,m)}}}function my(e,t){Dn.X(e,t);var n=ps;if(n&&e){var s=Ra(n).hoistableScripts,i=ms(e),c=s.get(i);c||(c=n.querySelector(fr(i)),c||(e=_({src:e,async:!0},t),(t=$t.get(i))&&bc(e,t),c=n.createElement("script"),ut(c),gt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(i,c))}}function hy(e,t){Dn.M(e,t);var n=ps;if(n&&e){var s=Ra(n).hoistableScripts,i=ms(e),c=s.get(i);c||(c=n.querySelector(fr(i)),c||(e=_({src:e,async:!0,type:"module"},t),(t=$t.get(i))&&bc(e,t),c=n.createElement("script"),ut(c),gt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(i,c))}}function am(e,t,n,s){var i=(i=oe.current)?Bi(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=fs(n.href),n=Ra(i).hoistableStyles,s=n.get(t),s||(s={type:"style",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=fs(n.href);var c=Ra(i).hoistableStyles,m=c.get(e);if(m||(i=i.ownerDocument||i,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,m),(c=i.querySelector(pr(e)))&&!c._p&&(m.instance=c,m.state.loading=5),$t.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$t.set(e,n),c||gy(i,e,n,m.state))),t&&s===null)throw Error(o(528,""));return m}if(t&&s!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ms(n),n=Ra(i).hoistableScripts,s=n.get(t),s||(s={type:"script",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function fs(e){return'href="'+Gt(e)+'"'}function pr(e){return'link[rel="stylesheet"]['+e+"]"}function sm(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function gy(e,t,n,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),gt(t,"link",n),ut(t),e.head.appendChild(t))}function ms(e){return'[src="'+Gt(e)+'"]'}function fr(e){return"script[async]"+e}function rm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Gt(n.href)+'"]');if(s)return t.instance=s,ut(s),s;var i=_({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ut(s),gt(s,"style",i),Ui(s,n.precedence,e),t.instance=s;case"stylesheet":i=fs(n.href);var c=e.querySelector(pr(i));if(c)return t.state.loading|=4,t.instance=c,ut(c),c;s=sm(n),(i=$t.get(i))&&yc(s,i),c=(e.ownerDocument||e).createElement("link"),ut(c);var m=c;return m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),gt(c,"link",s),t.state.loading|=4,Ui(c,n.precedence,e),t.instance=c;case"script":return c=ms(n.src),(i=e.querySelector(fr(c)))?(t.instance=i,ut(i),i):(s=n,(i=$t.get(c))&&(s=_({},n),bc(s,i)),e=e.ownerDocument||e,i=e.createElement("script"),ut(i),gt(i,"link",s),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Ui(s,n.precedence,e));return t.instance}function Ui(e,t,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=s.length?s[s.length-1]:null,c=i,m=0;m<s.length;m++){var b=s[m];if(b.dataset.precedence===t)c=b;else if(c!==i)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hi=null;function im(e,t,n){if(Hi===null){var s=new Map,i=Hi=new Map;i.set(n,s)}else i=Hi,s=i.get(n),s||(s=new Map,i.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var c=n[i];if(!(c[js]||c[pt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(t)||"";m=e+m;var b=s.get(m);b?b.push(c):s.set(m,[c])}}return s}function lm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function xy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function om(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yy(e,t,n,s){if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=fs(s.href),c=t.querySelector(pr(i));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ii.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,ut(c);return}c=t.ownerDocument||t,s=sm(s),(i=$t.get(i))&&yc(s,i),c=c.createElement("link"),ut(c);var m=c;m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),gt(c,"link",s),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ii.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var _c=0;function by(e,t){return e.stylesheets&&e.count===0&&Vi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var s=setTimeout(function(){if(e.stylesheets&&Vi(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&_c===0&&(_c=62500*$x());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vi(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>_c?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(i)}}:null}function Ii(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yi=null;function Vi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yi=new Map,t.forEach(_y,e),Yi=null,Ii.call(e))}function _y(e,t){if(!(t.state.loading&4)){var n=Yi.get(e);if(n)var s=n.get(null);else{n=new Map,Yi.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<i.length;c++){var m=i[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),s=m)}s&&n.set(null,s)}i=t.instance,m=i.getAttribute("data-precedence"),c=n.get(m)||s,c===s&&n.set(null,i),n.set(m,i),this.count++,s=Ii.bind(this),i.addEventListener("load",s),i.addEventListener("error",s),c?c.parentNode.insertBefore(i,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var mr={$$typeof:X,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function ky(e,t,n,s,i,c,m,b,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ml(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.hiddenUpdates=ml(null),this.identifierPrefix=s,this.onUncaughtError=i,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function cm(e,t,n,s,i,c,m,b,S,N,M,B){return e=new ky(e,t,n,m,S,N,M,B,b),t=1,c===!0&&(t|=24),c=Rt(3,null,null,t),e.current=c,c.stateNode=e,t=Jl(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:s,isDehydrated:n,cache:t},no(c),e}function um(e){return e?(e=Ga,e):Ga}function dm(e,t,n,s,i,c){i=um(i),s.context===null?s.context=i:s.pendingContext=i,s=Yn(t),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=Vn(e,s,t),n!==null&&(jt(n,e,t),Ks(n,e,t))}function pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kc(e,t){pm(e,t),(e=e.alternate)&&pm(e,t)}function fm(e){if(e.tag===13||e.tag===31){var t=ma(e,67108864);t!==null&&jt(t,e,67108864),kc(e,67108864)}}function mm(e){if(e.tag===13||e.tag===31){var t=Ut();t=hl(t);var n=ma(e,t);n!==null&&jt(n,e,t),kc(e,t)}}var Gi=!0;function wy(e,t,n,s){var i=L.T;L.T=null;var c=Y.p;try{Y.p=2,wc(e,t,n,s)}finally{Y.p=c,L.T=i}}function vy(e,t,n,s){var i=L.T;L.T=null;var c=Y.p;try{Y.p=8,wc(e,t,n,s)}finally{Y.p=c,L.T=i}}function wc(e,t,n,s){if(Gi){var i=vc(s);if(i===null)oc(e,t,s,Ki,n),gm(e,s);else if(Ty(i,e,t,n,s))s.stopPropagation();else if(gm(e,s),t&4&&-1<Sy.indexOf(e)){for(;i!==null;){var c=Ma(i);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=ca(c.pendingLanes);if(m!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var S=1<<31-Ge(m);b.entanglements[1]|=S,m&=~S}cn(c),(Re&6)===0&&(Ai=bt()+500,or(0))}}break;case 31:case 13:b=ma(c,2),b!==null&&jt(b,c,2),Ni(),kc(c,2)}if(c=vc(s),c===null&&oc(e,t,s,Ki,n),c===i)break;i=c}i!==null&&s.stopPropagation()}else oc(e,t,s,null,n)}}function vc(e){return e=Sl(e),Sc(e)}var Ki=null;function Sc(e){if(Ki=null,e=Da(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ki=e,null}function hm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fl()){case P:return 2;case F:return 8;case fe:case Te:return 32;case ze:return 268435456;default:return 32}default:return 32}}var Tc=!1,ta=null,na=null,aa=null,hr=new Map,gr=new Map,sa=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gm(e,t){switch(e){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":na=null;break;case"mouseover":case"mouseout":aa=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(t.pointerId)}}function xr(e,t,n,s,i,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:c,targetContainers:[i]},t!==null&&(t=Ma(t),t!==null&&fm(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ty(e,t,n,s,i){switch(t){case"focusin":return ta=xr(ta,e,t,n,s,i),!0;case"dragenter":return na=xr(na,e,t,n,s,i),!0;case"mouseover":return aa=xr(aa,e,t,n,s,i),!0;case"pointerover":var c=i.pointerId;return hr.set(c,xr(hr.get(c)||null,e,t,n,s,i)),!0;case"gotpointercapture":return c=i.pointerId,gr.set(c,xr(gr.get(c)||null,e,t,n,s,i)),!0}return!1}function xm(e){var t=Da(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Nu(e.priority,function(){mm(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,Nu(e.priority,function(){mm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vc(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);vl=s,n.target.dispatchEvent(s),vl=null}else return t=Ma(n),t!==null&&fm(t),e.blockedOn=n,!1;t.shift()}return!0}function ym(e,t,n){Xi(e)&&n.delete(t)}function Ey(){Tc=!1,ta!==null&&Xi(ta)&&(ta=null),na!==null&&Xi(na)&&(na=null),aa!==null&&Xi(aa)&&(aa=null),hr.forEach(ym),gr.forEach(ym)}function Qi(e,t){e.blockedOn===t&&(e.blockedOn=null,Tc||(Tc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ey)))}var Fi=null;function bm(e){Fi!==e&&(Fi=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Fi===e&&(Fi=null);for(var t=0;t<e.length;t+=3){var n=e[t],s=e[t+1],i=e[t+2];if(typeof s!="function"){if(Sc(s||n)===null)continue;break}var c=Ma(n);c!==null&&(e.splice(t,3),t-=3,vo(c,{pending:!0,data:i,method:n.method,action:s},s,i))}}))}function hs(e){function t(S){return Qi(S,e)}ta!==null&&Qi(ta,e),na!==null&&Qi(na,e),aa!==null&&Qi(aa,e),hr.forEach(t),gr.forEach(t);for(var n=0;n<sa.length;n++){var s=sa[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<sa.length&&(n=sa[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var i=n[s],c=n[s+1],m=i[vt]||null;if(typeof c=="function")m||bm(n);else if(m){var b=null;if(c&&c.hasAttribute("formAction")){if(i=c,m=c[vt]||null)b=m.formAction;else if(Sc(i)!==null)continue}else b=m.action;typeof b=="function"?n[s+1]=b:(n.splice(s,3),s-=3),bm(n)}}}function _m(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return i=m})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),s||setTimeout(n,20)}function n(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Ec(e){this._internalRoot=e}Zi.prototype.render=Ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,s=Ut();dm(n,s,e,t,null,null)},Zi.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dm(e.current,2,null,e,null,null),Ni(),t[Oa]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ju();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sa.length&&t!==0&&t<sa[n].priority;n++);sa.splice(n,0,e),n===0&&xm(e)}};var km=r.version;if(km!=="19.2.3")throw Error(o(527,km,"19.2.3"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Cy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{_t=Wi.inject(Cy),ot=Wi}catch{}}return br.createRoot=function(e,t){if(!d(e))throw Error(o(299));var n=!1,s="",i=Cp,c=Ap,m=jp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=cm(e,1,!1,null,null,n,s,null,i,c,m,_m),e[Oa]=t.current,lc(e),new Ec(t)},br.hydrateRoot=function(e,t,n){if(!d(e))throw Error(o(299));var s=!1,i="",c=Cp,m=Ap,b=jp,S=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=cm(e,1,!0,t,n??null,s,i,S,c,m,b,_m),t.context=um(null),n=t.current,s=Ut(),s=hl(s),i=Yn(s),i.callback=null,Vn(n,i,s),n=s,t.current.lanes=n,As(t,n),cn(t),e[Oa]=t.current,lc(e),new Zi(t)},br.version="19.2.3",br}var Lm;function zy(){if(Lm)return jc.exports;Lm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),jc.exports=Py(),jc.exports}var qy=zy();const By=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Uy=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,l,o)=>o?o.toUpperCase():l.toLowerCase()),Om=a=>{const r=Uy(a);return r.charAt(0).toUpperCase()+r.slice(1)},Sh=(...a)=>a.filter((r,l,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===l).join(" ").trim(),Hy=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var Iy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Yy=J.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:d="",children:p,iconNode:f,...h},x)=>J.createElement("svg",{ref:x,...Iy,width:r,height:r,stroke:a,strokeWidth:o?Number(l)*24/Number(r):l,className:Sh("lucide",d),...!p&&!Hy(h)&&{"aria-hidden":"true"},...h},[...f.map(([g,y])=>J.createElement(g,y)),...Array.isArray(p)?p:[p]]));const be=(a,r)=>{const l=J.forwardRef(({className:o,...d},p)=>J.createElement(Yy,{ref:p,iconNode:r,className:Sh(`lucide-${By(Om(a))}`,`lucide-${a}`,o),...d}));return l.displayName=Om(a),l};const Vy=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Th=be("arrow-down",Vy);const Gy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],nl=be("arrow-left",Gy);const Ky=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],il=be("arrow-right",Ky);const Xy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],lu=be("book-open",Xy);const Qy=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Fy=be("brain",Qy);const Zy=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],Wy=be("bug",Zy);const Jy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Dm=be("calendar",Jy);const $y=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ou=be("check",$y);const e1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],t1=be("chevron-down",e1);const n1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],a1=be("chevron-left",n1);const s1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cu=be("chevron-right",s1);const r1=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],i1=be("chevron-up",r1);const l1=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],o1=be("clock",l1);const c1=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],u1=be("cloud",c1);const d1=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],uu=be("code",d1);const p1=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],Eh=be("coffee",p1);const f1=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]],Ch=be("construction",f1);const m1=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ll=be("copy",m1);const h1=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],g1=be("cpu",h1);const x1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],y1=be("download",x1);const b1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Cr=be("external-link",b1);const _1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],k1=be("file-text",_1);const w1=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Ar=be("github",w1);const v1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Dc=be("globe",v1);const S1=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],T1=be("graduation-cap",S1);const E1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],C1=be("heart",E1);const A1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],jr=be("house",A1);const j1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Mm=be("layers",j1);const N1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],L1=be("menu",N1);const O1=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],D1=be("message-circle",O1);const M1=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],R1=be("message-square",M1);const P1=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],z1=be("monitor",P1);const q1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],B1=be("palette",q1);const U1=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],H1=be("puzzle",U1);const I1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ah=be("search",I1);const Y1=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],V1=be("server",Y1);const G1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],jh=be("shield",G1);const K1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}]],bs=be("sparkle",K1);const X1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Mn=be("sparkles",X1);const Q1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Nh=be("terminal",Q1);const F1=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Z1=be("twitter",F1);const W1=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],J1=be("wrench",W1);const $1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lh=be("x",$1),eb=[{id:"lobster",title:"小泥巴的进化历程",description:"从零开始搭建你的个人 AI 代理 —— 记录 Openclaw 的完整搭建之旅、架构设计与实战经验",icon:Wy,href:"/lobster",status:"ready",color:"#FF6B35"},{id:"prompts",title:"神秘咒语盒",description:"收集和整理各类 AI 工具的系统提示词，探索 AI 思维方式的秘密",icon:bs,href:"/prompts",status:"ready",color:"#8B5CF6"},{id:"design-showcase",title:"设计样板间",description:"归档前端设计样式，展示前沿 UI/UX 设计实验与创意实现",icon:B1,href:"/design-showcase",status:"ready",color:"#EC4899"},{id:"learn-cc",title:"Agent 入门教程",description:"从零掌握 AI Agent 的 12 堂课 —— 基于 Claude Code 的系统化学习路径",icon:T1,href:"/learn-cc",status:"ready",color:"#10B981"},{id:"cat-cafe",title:"猫猫咖啡厅",description:"一个关于猫咪的温馨空间，分享萌猫日常、养猫心得与云吸猫乐趣",icon:Eh,href:"/cat-cafe",status:"coming",color:"#9B59B6"}],tb=()=>{const a=()=>{document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})};return u.jsxs("div",{"code-path":"src\\sections\\LandingPage.tsx:69:5",className:"min-h-screen bg-lobster-dark text-white",children:[u.jsxs("section",{"code-path":"src\\sections\\LandingPage.tsx:71:7",className:"relative h-screen flex items-center justify-center overflow-hidden",style:{backgroundImage:"url(/source/pic/index-pic.jpg)",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:81:9",className:"absolute inset-0 bg-lobster-dark/20"}),u.jsxs("div",{"code-path":"src\\sections\\LandingPage.tsx:84:9",className:"relative z-10 container-custom text-center",children:[u.jsxs("div",{"code-path":"src\\sections\\LandingPage.tsx:85:11",className:"inline-flex items-center gap-2 px-4 py-2 bg-lobster-orange/10 border border-lobster-orange/20 rounded-full mb-8",children:[u.jsx(Mn,{"code-path":"src\\sections\\LandingPage.tsx:86:13",className:"w-4 h-4 text-lobster-orange"}),u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:87:13",className:"text-sm text-lobster-orange font-medium",children:"持续进化中"})]}),u.jsxs("h1",{"code-path":"src\\sections\\LandingPage.tsx:90:11",className:"text-5xl md:text-6xl lg:text-7xl font-bold mb-6",children:["泥巴猪的",u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:91:17",className:"text-lobster-orange",children:"实验田"})]}),u.jsx("p",{"code-path":"src\\sections\\LandingPage.tsx:94:11",className:"text-xl text-white/70 max-w-2xl mx-auto mb-10",children:"探索 AI 与技术的无限可能，记录从零到一的创造之旅"}),u.jsxs("button",{"code-path":"src\\sections\\LandingPage.tsx:99:11",onClick:a,className:"flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors animate-bounce-subtle mx-auto",children:[u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:103:13",className:"text-xs",children:"向下滚动"}),u.jsx(Th,{"code-path":"src\\sections\\LandingPage.tsx:104:13",className:"w-5 h-5"})]})]})]}),u.jsxs("section",{"code-path":"src\\sections\\LandingPage.tsx:110:7",id:"projects",className:"container-custom py-20 bg-lobster-dark",children:[u.jsxs("h2",{"code-path":"src\\sections\\LandingPage.tsx:111:9",className:"text-3xl font-bold text-center mb-12",children:["选择你的",u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:112:15",className:"text-lobster-orange",children:"实验项目"})]}),u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:115:9",className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:eb.map(r=>{const l=r.icon;return u.jsxs("a",{"code-path":"src\\sections\\LandingPage.tsx:119:15",href:r.href,className:"group relative overflow-hidden rounded-2xl transition-all hover:transform hover:scale-[1.02]",style:{background:`linear-gradient(135deg, ${r.color}15 0%, ${r.color}05 100%)`,border:`1px solid ${r.color}30`},children:[u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:129:17",className:"absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity",children:u.jsx(l,{"code-path":"src\\sections\\LandingPage.tsx:130:19",className:"w-64 h-64"})}),u.jsxs("div",{"code-path":"src\\sections\\LandingPage.tsx:133:17",className:"relative p-8",children:[u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:134:19",className:"w-14 h-14 rounded-xl flex items-center justify-center mb-6",style:{backgroundColor:`${r.color}20`},children:u.jsx(l,{"code-path":"src\\sections\\LandingPage.tsx:138:21",className:"w-7 h-7",style:{color:r.color}})}),u.jsx("h3",{"code-path":"src\\sections\\LandingPage.tsx:141:19",className:"text-2xl font-bold mb-3 group-hover:text-lobster-orange transition-colors",children:r.title}),u.jsx("p",{"code-path":"src\\sections\\LandingPage.tsx:145:19",className:"text-white/60 mb-6 leading-relaxed",children:r.description}),u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:149:19",className:"flex items-center gap-2",children:r.status==="ready"?u.jsxs(u.Fragment,{children:[u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:152:25",className:"text-lobster-orange font-medium",children:"进入探索"}),u.jsx(il,{"code-path":"src\\sections\\LandingPage.tsx:153:25",className:"w-4 h-4 text-lobster-orange group-hover:translate-x-1 transition-transform"})]}):u.jsx("span",{"code-path":"src\\sections\\LandingPage.tsx:156:23",className:"text-white/40",children:"即将上线 · 敬请期待"})})]})]},r.id)})})]}),u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:167:7",className:"border-t border-white/10 py-8 bg-lobster-dark",children:u.jsx("div",{"code-path":"src\\sections\\LandingPage.tsx:168:9",className:"container-custom text-center",children:u.jsx("p",{"code-path":"src\\sections\\LandingPage.tsx:169:11",className:"text-white/40 text-sm",children:"© 2026 泥巴猪的实验田 · Powered by Curiosity & AI"})})})]})},nb=()=>u.jsxs("div",{"code-path":"src\\sections\\CatCafePage.tsx:5:5",className:"min-h-screen bg-lobster-dark text-white flex flex-col",children:[u.jsx("div",{"code-path":"src\\sections\\CatCafePage.tsx:7:7",className:"pt-32 pb-16 text-center",children:u.jsxs("div",{"code-path":"src\\sections\\CatCafePage.tsx:8:9",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\CatCafePage.tsx:9:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm mb-6",children:[u.jsx(Eh,{"code-path":"src\\sections\\CatCafePage.tsx:10:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\CatCafePage.tsx:11:13",children:"即将开业"})]}),u.jsxs("h1",{"code-path":"src\\sections\\CatCafePage.tsx:13:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["猫猫",u.jsx("span",{"code-path":"src\\sections\\CatCafePage.tsx:14:15",className:"text-purple-400",children:"咖啡厅"})]}),u.jsx("p",{"code-path":"src\\sections\\CatCafePage.tsx:16:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"一个关于猫咪的温馨空间，分享萌猫日常、养猫心得与云吸猫乐趣"})]})}),u.jsxs("div",{"code-path":"src\\sections\\CatCafePage.tsx:23:7",className:"flex-1 flex flex-col items-center justify-center pb-32",children:[u.jsx("div",{"code-path":"src\\sections\\CatCafePage.tsx:24:9",className:"w-24 h-24 rounded-full bg-purple-500/20 flex items-center justify-center mb-8",children:u.jsx(Ch,{"code-path":"src\\sections\\CatCafePage.tsx:25:11",className:"w-12 h-12 text-purple-400"})}),u.jsx("h2",{"code-path":"src\\sections\\CatCafePage.tsx:27:9",className:"text-3xl font-bold mb-4",children:"装修中"}),u.jsx("p",{"code-path":"src\\sections\\CatCafePage.tsx:28:9",className:"text-white/60 text-lg mb-2",children:"精彩内容即将呈现"}),u.jsx("p",{"code-path":"src\\sections\\CatCafePage.tsx:29:9",className:"text-white/40 text-sm",children:"尽情期待..."})]}),u.jsx("div",{"code-path":"src\\sections\\CatCafePage.tsx:33:7",className:"border-t border-white/10 py-8",children:u.jsx("div",{"code-path":"src\\sections\\CatCafePage.tsx:34:9",className:"container-custom text-center",children:u.jsx("p",{"code-path":"src\\sections\\CatCafePage.tsx:35:11",className:"text-white/40 text-sm",children:"© 2026 猫猫咖啡厅 · 泥巴猪的实验田"})})})]}),ab=({onNavigate:a})=>{const[r,l]=J.useState(!1),[o,d]=J.useState(!1);J.useEffect(()=>{const h=()=>{l(window.scrollY>50)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]);const p=[{label:"首页",href:"/lobster",routeName:"home"},{label:"特性",href:"/lobster/#features",isAnchor:!0},{label:"教程",href:"/lobster/tutorial",isRoute:!0,routeName:"tutorial"},{label:"工作室",href:"/lobster/workspace",isRoute:!0,routeName:"workspace"},{label:"日记",href:"/lobster/diary",isRoute:!0,routeName:"diary"},{label:"技能",href:"/lobster/skill",isRoute:!0,routeName:"skill"},{label:"技术分析",href:"/lobster/tech-eden",isRoute:!0,routeName:"tech"}],f=(h,x)=>{h.preventDefault(),x.routeName&&a&&a(x.routeName),d(!1)};return u.jsx("nav",{"code-path":"src\\sections\\Navigation.tsx:39:5",className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${r?"bg-lobster-dark/90 backdrop-blur-xl border-b border-white/10":"bg-transparent"}`,children:u.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:46:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:47:9",className:"flex items-center justify-between h-16 md:h-20",children:[u.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:49:11",className:"flex items-center gap-4",children:[u.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:50:13",href:"/",onClick:h=>{h.preventDefault(),window.location.href="/"},className:"flex items-center gap-1 text-white/50 hover:text-lobster-orange transition-colors",title:"返回实验田",children:u.jsx(jr,{"code-path":"src\\sections\\Navigation.tsx:56:15",className:"w-4 h-4"})}),u.jsxs("a",{"code-path":"src\\sections\\Navigation.tsx:58:13",href:"/lobster",onClick:h=>{h.preventDefault(),a?.("home")},className:"flex items-center gap-2 group",children:[u.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:63:15",className:"text-2xl",children:"🦞"}),u.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:64:15",className:"font-semibold text-white group-hover:text-lobster-orange transition-colors",children:"小泥巴的进化历程"})]})]}),u.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:71:11",className:"hidden md:flex items-center gap-8",children:p.map(h=>u.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:73:15",href:h.href,onClick:x=>f(x,h),className:"text-sm text-white/70 hover:text-white transition-colors",children:h.label},h.href))}),u.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:85:11",className:"hidden md:flex items-center gap-4",children:[u.jsxs("a",{"code-path":"src\\sections\\Navigation.tsx:86:13",href:"https://github.com/openclaw/openclaw",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors",children:[u.jsx(Ar,{"code-path":"src\\sections\\Navigation.tsx:92:15",className:"w-5 h-5"}),u.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:93:15",children:"GitHub"})]}),u.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:95:13",href:"/lobster/tutorial",className:"btn-primary text-sm py-2.5 px-5",children:"开始搭建"})]}),u.jsx("button",{"code-path":"src\\sections\\Navigation.tsx:104:11",className:"md:hidden p-2 text-white",onClick:()=>d(!o),children:o?u.jsx(Lh,{"code-path":"src\\sections\\Navigation.tsx:108:33",className:"w-6 h-6"}):u.jsx(L1,{"code-path":"src\\sections\\Navigation.tsx:108:61",className:"w-6 h-6"})})]}),o&&u.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:114:11",className:"md:hidden py-4 border-t border-white/10 animate-fade-in",children:u.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:115:13",className:"flex flex-col gap-4",children:[u.jsxs("a",{"code-path":"src\\sections\\Navigation.tsx:116:15",href:"/",onClick:h=>{h.preventDefault(),window.location.href="/"},className:"flex items-center gap-2 text-white/50 hover:text-lobster-orange transition-colors py-2",children:[u.jsx(jr,{"code-path":"src\\sections\\Navigation.tsx:121:17",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:122:17",children:"返回实验田"})]}),p.map(h=>u.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:125:17",href:h.href,className:"text-white/70 hover:text-white transition-colors py-2",onClick:x=>f(x,h),children:h.label},h.href)),u.jsxs("a",{"code-path":"src\\sections\\Navigation.tsx:134:15",href:"https://github.com/openclaw/openclaw",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white/70 hover:text-white transition-colors py-2",children:[u.jsx(Ar,{"code-path":"src\\sections\\Navigation.tsx:140:17",className:"w-5 h-5"}),u.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:141:17",children:"GitHub"})]})]})})]})})},sb=()=>{const[a,r]=J.useState(!1),l=J.useRef(null);J.useEffect(()=>{r(!0)},[]);const o=()=>{document.getElementById("features")?.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{"code-path":"src\\sections\\Hero.tsx:17:5",id:"hero",ref:l,className:"relative min-h-screen flex items-center justify-center overflow-hidden bg-lobster-darker",children:[u.jsxs("div",{"code-path":"src\\sections\\Hero.tsx:23:7",className:"absolute inset-0",children:[u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:25:9",className:"absolute inset-0",style:{backgroundImage:"url(/assets/images/woshou.png)",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",opacity:.3}}),u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:37:9",className:"absolute inset-0 bg-gradient-dark opacity-70"}),u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:40:9",className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:`linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,backgroundSize:"60px 60px"}}),u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:50:9",className:"absolute top-1/4 left-1/4 w-96 h-96 bg-lobster-orange/10 rounded-full blur-[120px] animate-pulse"}),u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:51:9",className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-lobster-gold/10 rounded-full blur-[100px] animate-pulse animation-delay-500"})]}),u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:55:7",className:"relative z-10 container-custom pt-20",children:u.jsx("div",{"code-path":"src\\sections\\Hero.tsx:56:9",className:"flex flex-col items-center",children:u.jsxs("div",{"code-path":"src\\sections\\Hero.tsx:58:11",className:"text-center max-w-3xl",children:[u.jsxs("div",{"code-path":"src\\sections\\Hero.tsx:60:13",className:`inline-flex items-center gap-2 px-4 py-2 bg-lobster-orange/10 border border-lobster-orange/20 rounded-full mb-8 transition-all duration-700 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[u.jsx(Mn,{"code-path":"src\\sections\\Hero.tsx:65:15",className:"w-4 h-4 text-lobster-orange"}),u.jsx("span",{"code-path":"src\\sections\\Hero.tsx:66:15",className:"text-sm text-lobster-orange font-medium",children:"个人 AI 助手搭建记录"})]}),u.jsx("h1",{"code-path":"src\\sections\\Hero.tsx:72:13",className:`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight transition-all duration-700 delay-100 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:"小泥巴的进化历程"}),u.jsx("p",{"code-path":"src\\sections\\Hero.tsx:81:13",className:`text-2xl md:text-3xl font-medium animated-gradient-text mb-6 transition-all duration-700 delay-200 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:"Openclaw Adventures"}),u.jsx("p",{"code-path":"src\\sections\\Hero.tsx:90:13",className:`text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:"从零开始搭建你的个人 AI 代理 —— 记录 Openclaw 的完整搭建之旅、架构设计与实战经验"}),u.jsxs("div",{"code-path":"src\\sections\\Hero.tsx:99:13",className:`flex flex-col sm:flex-row items-center gap-4 justify-center transition-all duration-700 delay-400 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:[u.jsxs("a",{"code-path":"src\\sections\\Hero.tsx:104:15",href:"/tutorial",className:"btn-primary w-full sm:w-auto",children:[u.jsx(Nh,{"code-path":"src\\sections\\Hero.tsx:105:17",className:"w-4 h-4 mr-2"}),"开始探索"]}),u.jsx("a",{"code-path":"src\\sections\\Hero.tsx:108:15",href:"/#features",className:"btn-secondary w-full sm:w-auto",children:"了解更多"})]})]})})}),u.jsxs("button",{"code-path":"src\\sections\\Hero.tsx:117:7",onClick:o,className:"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors animate-bounce-subtle",children:[u.jsx("span",{"code-path":"src\\sections\\Hero.tsx:121:9",className:"text-xs",children:"向下滚动"}),u.jsx(Th,{"code-path":"src\\sections\\Hero.tsx:122:9",className:"w-5 h-5"})]})]})},rb=[{icon:V1,title:"完全本地化",description:"数据完全存储在本地，隐私安全有保障。支持 macOS、Windows、Linux 多平台运行。"},{icon:D1,title:"消息应用集成",description:"无缝连接 WhatsApp、Telegram、Discord、Slack，让 AI 助手融入你的日常沟通。"},{icon:H1,title:"模块化技能",description:"通过插件系统扩展功能，浏览器控制、文件管理、代码执行，无所不能。"},{icon:Fy,title:"智能记忆",description:"记住你的偏好和历史对话，越用越懂你的个人 AI 助手。"},{icon:uu,title:"开源生态",description:"基于开源社区驱动，27.8万+ GitHub Stars，持续迭代更新。"},{icon:jh,title:"安全沙箱",description:"内置沙箱隔离和权限控制，确保 AI 操作在你的掌控之中。"}],ib=()=>{const[a,r]=J.useState(new Set),l=J.useRef(null),o=J.useRef([]);return J.useEffect(()=>{const d=new IntersectionObserver(p=>{p.forEach(f=>{const h=o.current.indexOf(f.target);f.isIntersecting&&h!==-1&&r(x=>new Set([...x,h]))})},{threshold:.2,rootMargin:"0px 0px -50px 0px"});return o.current.forEach(p=>{p&&d.observe(p)}),()=>d.disconnect()},[]),u.jsx("section",{"code-path":"src\\sections\\Features.tsx:69:5",id:"features",ref:l,className:"section-padding bg-lobster-dark",children:u.jsxs("div",{"code-path":"src\\sections\\Features.tsx:70:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\Features.tsx:72:9",className:"text-center mb-16",children:[u.jsx("span",{"code-path":"src\\sections\\Features.tsx:73:11",className:"tag-lobster mb-4",children:"核心特性"}),u.jsx("h2",{"code-path":"src\\sections\\Features.tsx:74:11",className:"text-3xl md:text-4xl font-bold text-white mt-4 mb-4",children:"为什么选择 Openclaw？"}),u.jsx("p",{"code-path":"src\\sections\\Features.tsx:77:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"一个开源、本地化、可扩展的个人 AI 助手平台"})]}),u.jsx("div",{"code-path":"src\\sections\\Features.tsx:83:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:rb.map((d,p)=>{const f=d.icon,h=a.has(p);return u.jsxs("div",{"code-path":"src\\sections\\Features.tsx:89:15",ref:x=>{o.current[p]=x},className:`card-dark group transition-all duration-600 ${h?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${p*100}ms`},children:[u.jsx("div",{"code-path":"src\\sections\\Features.tsx:100:17",className:"w-12 h-12 rounded-xl bg-gradient-lobster flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",children:u.jsx(f,{"code-path":"src\\sections\\Features.tsx:101:19",className:"w-6 h-6 text-black"})}),u.jsx("h3",{"code-path":"src\\sections\\Features.tsx:105:17",className:"text-xl font-semibold text-white mb-3",children:d.title}),u.jsx("p",{"code-path":"src\\sections\\Features.tsx:108:17",className:"text-white/60 leading-relaxed",children:d.description})]},d.title)})})]})})},lb=[{icon:R1,title:"接口层",items:["Telegram","飞书","Discord","Slack"],color:"#FF6B35"},{icon:g1,title:"核心层",items:["Agent Runtime","LLM Router","Memory Manager","Task Scheduler"],color:"#F7931E"},{icon:J1,title:"技能层",items:["Browser Control","File System","Code Execution","API Integration"],color:"#FF6B35"},{icon:u1,title:"模型层",items:["Claude","GPT-5","Gemini","DeepSeek","GLM","MiniMax","Kimi"],color:"#F7931E"}],ob=()=>{const[a,r]=J.useState(!1),l=J.useRef(null);return J.useEffect(()=>{const o=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:.2});return l.current&&o.observe(l.current),()=>o.disconnect()},[]),u.jsx("section",{"code-path":"src\\sections\\Architecture.tsx:60:5",id:"architecture",ref:l,className:"section-padding bg-lobster-muted",children:u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:65:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:67:9",className:"text-center mb-16",children:[u.jsx("span",{"code-path":"src\\sections\\Architecture.tsx:68:11",className:"tag-lobster mb-4",children:"系统架构"}),u.jsx("h2",{"code-path":"src\\sections\\Architecture.tsx:69:11",className:"text-3xl md:text-4xl font-bold text-white mt-4 mb-4",children:"架构设计"}),u.jsx("p",{"code-path":"src\\sections\\Architecture.tsx:72:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"Openclaw 的分层架构让系统稳定、可扩展"})]}),u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:78:9",className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:80:11",className:`relative transition-all duration-800 ${a?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"}`,children:u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:85:13",className:"relative rounded-2xl overflow-hidden bg-lobster-dark border border-white/10",children:[u.jsx("img",{"code-path":"src\\sections\\Architecture.tsx:86:15",src:"/assets/images/longxiajiagou.png",alt:"OpenCLAW 架构图",className:"w-full h-auto"}),u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:92:15",className:"absolute inset-0 bg-gradient-to-t from-lobster-dark/50 to-transparent pointer-events-none"})]})}),u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:97:11",className:"space-y-6",children:lb.map((o,d)=>{const p=o.icon,f=a;return u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:103:17",className:`flex items-start gap-4 p-5 rounded-xl bg-lobster-dark/50 border border-white/10 hover:border-white/20 transition-all duration-500 ${f?"opacity-100 translate-x-0":"opacity-0 translate-x-8"}`,style:{transitionDelay:`${d*150+200}ms`},children:[u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:113:19",className:"w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",style:{backgroundColor:`${o.color}20`},children:u.jsx(p,{"code-path":"src\\sections\\Architecture.tsx:117:21",className:"w-5 h-5",style:{color:o.color}})}),u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:124:19",className:"flex-1",children:[u.jsx("h3",{"code-path":"src\\sections\\Architecture.tsx:125:21",className:"text-lg font-semibold text-white mb-2",children:o.title}),u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:128:21",className:"flex flex-wrap gap-2",children:o.items.map(h=>u.jsx("span",{"code-path":"src\\sections\\Architecture.tsx:130:25",className:"px-2.5 py-1 text-xs rounded-md bg-white/5 text-white/70",children:h},h))})]})]},o.title)})})]}),u.jsx("div",{"code-path":"src\\sections\\Architecture.tsx:146:9",className:`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-800 delay-500 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[{label:"模块化设计",desc:"各层独立，易于扩展和维护"},{label:"高可扩展性",desc:"插件化架构，功能无限延伸"},{label:"稳定可靠",desc:"分层隔离，故障不影响整体"}].map(o=>u.jsxs("div",{"code-path":"src\\sections\\Architecture.tsx:156:13",className:"text-center p-6 rounded-xl bg-lobster-dark/30 border border-white/5",children:[u.jsx("h4",{"code-path":"src\\sections\\Architecture.tsx:160:15",className:"text-white font-medium mb-2",children:o.label}),u.jsx("p",{"code-path":"src\\sections\\Architecture.tsx:161:15",className:"text-white/50 text-sm",children:o.desc})]},o.label))})]})})},cb=[{tag:"入门",tagIcon:Mm,title:"OpenClaw是什么",description:"认识开源、自托管的AI Agent系统",readTime:"5 min",url:"/source/tutorial/01-OpenClaw是什么.html"},{tag:"架构",tagIcon:Mm,title:"整体架构",description:"Gateway-Node-Channel三层架构详解",readTime:"8 min",url:"/source/tutorial/05-整体架构.html"},{tag:"部署",tagIcon:Dc,title:"部署方式总览",description:"本地/Docker/云厂商一键部署对比",readTime:"6 min",url:"/source/tutorial/10-部署方式总览.html"},{tag:"集成",tagIcon:Dc,title:"国际平台接入",description:"Telegram/Discord/WhatsApp/Slack配置指南",readTime:"20 min",url:"/source/tutorial/16-国际平台接入.html"},{tag:"集成",tagIcon:Dc,title:"国内平台接入",description:"QQ/飞书/钉钉/企业微信配置指南",readTime:"20 min",url:"/source/tutorial/17-国内平台接入.html"},{tag:"进阶",tagIcon:uu,title:"Skills工作原理",description:"三层优先级与加载机制详解",readTime:"8 min",url:"/source/tutorial/19-Skills工作原理.html"},{tag:"运维",tagIcon:jh,title:"Skills安全",description:"安全模型与模型配置指南",readTime:"15 min",url:"/source/tutorial/23-Skills安全.html"}],ub=()=>{const[a,r]=J.useState(!1),l=J.useRef(null);return J.useEffect(()=>{const o=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:.1});return l.current&&o.observe(l.current),()=>o.disconnect()},[]),u.jsxs("section",{"code-path":"src\\sections\\TutorialPreview.tsx:45:5",id:"tutorials",ref:l,className:"section-padding bg-lobster-dark overflow-hidden",children:[u.jsx("div",{"code-path":"src\\sections\\TutorialPreview.tsx:50:7",className:"container-custom",children:u.jsxs("div",{"code-path":"src\\sections\\TutorialPreview.tsx:52:9",className:"flex flex-col md:flex-row md:items-end md:justify-between mb-12",children:[u.jsxs("div",{"code-path":"src\\sections\\TutorialPreview.tsx:53:11",children:[u.jsx("span",{"code-path":"src\\sections\\TutorialPreview.tsx:54:13",className:"tag-lobster mb-4",children:"学习资源"}),u.jsx("h2",{"code-path":"src\\sections\\TutorialPreview.tsx:55:13",className:"text-3xl md:text-4xl font-bold text-white mt-4 mb-4",children:"搭建教程"}),u.jsx("p",{"code-path":"src\\sections\\TutorialPreview.tsx:58:13",className:"text-white/60 text-lg max-w-xl",children:"28章完整教程，从零开始搭建你的AI助手"})]}),u.jsxs("a",{"code-path":"src\\sections\\TutorialPreview.tsx:64:11",href:"/source/tutorial/index.html",className:"mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 bg-lobster-orange rounded-full text-white hover:bg-lobster-orange/80 transition-all",children:[u.jsx("span",{"code-path":"src\\sections\\TutorialPreview.tsx:68:13",children:"查看全部28章"}),u.jsx(cu,{"code-path":"src\\sections\\TutorialPreview.tsx:69:13",className:"w-4 h-4"})]})]})}),u.jsx("div",{"code-path":"src\\sections\\TutorialPreview.tsx:75:7",className:"container-custom",children:u.jsx("div",{"code-path":"src\\sections\\TutorialPreview.tsx:76:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:cb.map((o,d)=>{const p=o.tagIcon;return u.jsx("a",{"code-path":"src\\sections\\TutorialPreview.tsx:81:15",href:o.url,className:`group transition-all duration-600 block ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${d*100}ms`},children:u.jsxs("div",{"code-path":"src\\sections\\TutorialPreview.tsx:91:17",className:"card-dark h-full flex flex-col",children:[u.jsxs("div",{"code-path":"src\\sections\\TutorialPreview.tsx:93:19",className:"flex items-center gap-2 mb-4",children:[u.jsxs("span",{"code-path":"src\\sections\\TutorialPreview.tsx:94:21",className:"inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-lobster-orange bg-lobster-orange/10 rounded-full",children:[u.jsx(p,{"code-path":"src\\sections\\TutorialPreview.tsx:95:23",className:"w-3 h-3"}),o.tag]}),u.jsxs("span",{"code-path":"src\\sections\\TutorialPreview.tsx:98:21",className:"flex items-center gap-1 text-xs text-white/40",children:[u.jsx(o1,{"code-path":"src\\sections\\TutorialPreview.tsx:99:23",className:"w-3 h-3"}),o.readTime]})]}),u.jsx("h3",{"code-path":"src\\sections\\TutorialPreview.tsx:105:19",className:"text-lg font-semibold text-white mb-2 group-hover:text-lobster-orange transition-colors",children:o.title}),u.jsx("p",{"code-path":"src\\sections\\TutorialPreview.tsx:108:19",className:"text-white/60 text-sm leading-relaxed flex-1",children:o.description}),u.jsx("div",{"code-path":"src\\sections\\TutorialPreview.tsx:113:19",className:"mt-4 pt-4 border-t border-white/10",children:u.jsxs("span",{"code-path":"src\\sections\\TutorialPreview.tsx:114:21",className:"flex items-center gap-2 text-sm text-lobster-orange group-hover:gap-3 transition-all",children:["阅读教程",u.jsx(il,{"code-path":"src\\sections\\TutorialPreview.tsx:116:23",className:"w-4 h-4"})]})})]})},o.title)})})})]})},Mc=[{line:1,content:"# 安装 Openclaw",type:"comment"},{line:2,content:"curl -fsSL https://openclaw.ai/install.sh | bash",type:"command"},{line:3,content:"",type:"empty"},{line:4,content:"# 启动配置向导",type:"comment"},{line:5,content:"openclaw onboarding",type:"command"},{line:6,content:"",type:"empty"},{line:7,content:"# 开始与你的 AI 助手对话",type:"comment"},{line:8,content:"openclaw chat",type:"command"}],db=()=>{const[a,r]=J.useState(!1),[l,o]=J.useState(0),[d,p]=J.useState(!1),f=J.useRef(null);J.useEffect(()=>{const g=new IntersectionObserver(([y])=>{y.isIntersecting&&r(!0)},{threshold:.3});return f.current&&g.observe(f.current),()=>g.disconnect()},[]),J.useEffect(()=>{if(a&&l<Mc.length){const g=setTimeout(()=>{o(y=>y+1)},150);return()=>clearTimeout(g)}},[a,l]);const h=()=>{const g=Mc.filter(y=>y.type!=="empty").map(y=>y.content).join(`
`);navigator.clipboard.writeText(g),p(!0),setTimeout(()=>p(!1),2e3)},x=g=>{switch(g){case"comment":return"text-white/40";case"command":return"text-lobster-orange";default:return""}};return u.jsx("section",{"code-path":"src\\sections\\CodeDemo.tsx:70:5",ref:f,className:"section-padding bg-lobster-muted",children:u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:71:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:73:9",className:"text-center mb-12",children:[u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:74:11",className:"tag-lobster mb-4",children:"快速开始"}),u.jsx("h2",{"code-path":"src\\sections\\CodeDemo.tsx:75:11",className:"text-3xl md:text-4xl font-bold text-white mt-4 mb-4",children:"一行命令，即刻体验"}),u.jsx("p",{"code-path":"src\\sections\\CodeDemo.tsx:78:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"无需复杂配置，几分钟内即可运行你的个人 AI 助手"})]}),u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:84:9",className:`max-w-3xl mx-auto transition-all duration-800 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:89:11",className:"code-block border border-white/10",children:[u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:91:13",className:"flex items-center justify-between px-4 py-3 border-b border-white/10 bg-lobster-dark/50",children:[u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:92:15",className:"flex items-center gap-2",children:[u.jsx(Nh,{"code-path":"src\\sections\\CodeDemo.tsx:93:17",className:"w-4 h-4 text-white/40"}),u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:94:17",className:"text-sm text-white/60",children:"terminal"})]}),u.jsx("button",{"code-path":"src\\sections\\CodeDemo.tsx:96:15",onClick:h,className:"flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors",children:d?u.jsxs(u.Fragment,{children:[u.jsx(ou,{"code-path":"src\\sections\\CodeDemo.tsx:102:21",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:103:21",children:"已复制"})]}):u.jsxs(u.Fragment,{children:[u.jsx(ll,{"code-path":"src\\sections\\CodeDemo.tsx:107:21",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:108:21",children:"复制"})]})})]}),u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:115:13",className:"p-6 font-mono text-sm",children:[Mc.map((g,y)=>u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:117:17",className:`flex ${y<l?"opacity-100":"opacity-0"} transition-opacity duration-200`,children:[u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:125:19",className:"inline-block w-8 text-white/30 select-none",children:g.line}),u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:128:19",className:x(g.type),children:g.content})]},g.line)),u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:134:15",className:"flex mt-1",children:[u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:135:17",className:"inline-block w-8"}),u.jsx("span",{"code-path":"src\\sections\\CodeDemo.tsx:136:17",className:"w-2 h-5 bg-lobster-orange animate-pulse"})]})]})]}),u.jsx("div",{"code-path":"src\\sections\\CodeDemo.tsx:142:11",className:`mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-800 delay-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[{label:"系统要求",value:"Node.js 22+"},{label:"支持平台",value:"macOS / Windows / Linux"},{label:"安装时间",value:"~ 5 分钟"}].map(g=>u.jsxs("div",{"code-path":"src\\sections\\CodeDemo.tsx:152:15",className:"text-center p-4 rounded-lg bg-lobster-dark/50 border border-white/5",children:[u.jsx("div",{"code-path":"src\\sections\\CodeDemo.tsx:156:17",className:"text-white/40 text-sm mb-1",children:g.label}),u.jsx("div",{"code-path":"src\\sections\\CodeDemo.tsx:157:17",className:"text-white font-medium",children:g.value})]},g.label))})]})]})})},pb=[{value:278,suffix:"K+",label:"GitHub Stars"},{value:100,suffix:"+",label:"内置技能"},{value:22,suffix:"",label:"消息平台支持"},{value:0,suffix:"",label:"云端依赖"}],fb=(a,r=2e3,l=!1)=>{const[o,d]=J.useState(0);return J.useEffect(()=>{if(!l)return;let p=null,f;const h=x=>{p||(p=x);const g=Math.min((x-p)/r,1),y=g===1?1:1-Math.pow(2,-10*g);d(Math.floor(y*a)),g<1&&(f=requestAnimationFrame(h))};return f=requestAnimationFrame(h),()=>cancelAnimationFrame(f)},[a,r,l]),o},mb=({stat:a,isVisible:r,delay:l})=>{const o=fb(a.value,2e3,r);return u.jsxs("div",{"code-path":"src\\sections\\Stats.tsx:51:5",className:`text-center transition-all duration-800 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${l}ms`},children:[u.jsxs("div",{"code-path":"src\\sections\\Stats.tsx:57:7",className:"text-5xl md:text-6xl font-bold text-black mb-2",children:[o,u.jsx("span",{"code-path":"src\\sections\\Stats.tsx:59:9",className:"text-lobster-orange",children:a.suffix})]}),u.jsx("div",{"code-path":"src\\sections\\Stats.tsx:61:7",className:"text-black/60 font-medium",children:a.label})]})},hb=()=>{const[a,r]=J.useState(!1),l=J.useRef(null);return J.useEffect(()=>{const o=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:.3});return l.current&&o.observe(l.current),()=>o.disconnect()},[]),u.jsx("section",{"code-path":"src\\sections\\Stats.tsx:88:5",ref:l,className:"py-20 bg-gradient-lobster",children:u.jsx("div",{"code-path":"src\\sections\\Stats.tsx:89:7",className:"container-custom",children:u.jsx("div",{"code-path":"src\\sections\\Stats.tsx:90:9",className:"grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",children:pb.map((o,d)=>u.jsx(mb,{"code-path":"src\\sections\\Stats.tsx:92:13",stat:o,isVisible:a,delay:d*100},o.label))})})})},gb=()=>{const a=new Date().getFullYear(),r={navigation:[{label:"首页",href:"#hero"},{label:"特性",href:"#features"},{label:"教程",href:"/tutorial"},{label:"工作室",href:"/workspace"},{label:"日记",href:"/diary"},{label:"技能",href:"/skill"},{label:"技术分析",href:"/tech-eden"}],resources:[{label:"官方文档",href:"https://docs.openclaw.ai",external:!0},{label:"GitHub",href:"https://github.com/openclaw/openclaw",external:!0},{label:"社区论坛",href:"#",external:!0},{label:"Discord",href:"#",external:!0}]};return u.jsx("footer",{"code-path":"src\\sections\\Footer.tsx:25:5",className:"bg-lobster-darker border-t border-white/10",children:u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:26:7",className:"container-custom py-16",children:[u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:27:9",className:"grid grid-cols-1 md:grid-cols-4 gap-12",children:[u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:29:11",className:"md:col-span-2",children:[u.jsxs("a",{"code-path":"src\\sections\\Footer.tsx:30:13",href:"/",className:"flex items-center gap-2 mb-4",children:[u.jsx("span",{"code-path":"src\\sections\\Footer.tsx:31:15",className:"text-3xl",children:"🦞"}),u.jsx("span",{"code-path":"src\\sections\\Footer.tsx:32:15",className:"text-xl font-semibold text-white",children:"小泥巴的进化历程"})]}),u.jsx("p",{"code-path":"src\\sections\\Footer.tsx:36:13",className:"text-white/50 max-w-sm mb-6 leading-relaxed",children:"记录 Openclaw 搭建和体验之旅，分享个人 AI 助手的架构设计、安装教程与实战经验。"}),u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:39:13",className:"flex items-center gap-4",children:[u.jsx("a",{"code-path":"src\\sections\\Footer.tsx:40:15",href:"https://github.com/openclaw/openclaw",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all",children:u.jsx(Ar,{"code-path":"src\\sections\\Footer.tsx:46:17",className:"w-5 h-5"})}),u.jsx("a",{"code-path":"src\\sections\\Footer.tsx:48:15",href:"https://x.com/ttttstc2025",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all",children:u.jsx(Z1,{"code-path":"src\\sections\\Footer.tsx:54:17",className:"w-5 h-5"})})]})]}),u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:60:11",children:[u.jsx("h4",{"code-path":"src\\sections\\Footer.tsx:61:13",className:"text-white font-medium mb-4",children:"导航"}),u.jsx("ul",{"code-path":"src\\sections\\Footer.tsx:62:13",className:"space-y-3",children:r.navigation.map(l=>u.jsx("li",{"code-path":"src\\sections\\Footer.tsx:64:17",children:u.jsx("a",{"code-path":"src\\sections\\Footer.tsx:65:19",href:l.href,className:"text-white/50 hover:text-lobster-orange transition-colors",children:l.label})},l.label))})]}),u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:77:11",children:[u.jsx("h4",{"code-path":"src\\sections\\Footer.tsx:78:13",className:"text-white font-medium mb-4",children:"资源"}),u.jsx("ul",{"code-path":"src\\sections\\Footer.tsx:79:13",className:"space-y-3",children:r.resources.map(l=>u.jsx("li",{"code-path":"src\\sections\\Footer.tsx:81:17",children:u.jsx("a",{"code-path":"src\\sections\\Footer.tsx:82:19",href:l.href,target:l.external?"_blank":void 0,rel:l.external?"noopener noreferrer":void 0,className:"text-white/50 hover:text-lobster-orange transition-colors",children:l.label})},l.label))})]})]}),u.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:97:9",className:"mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4",children:[u.jsxs("p",{"code-path":"src\\sections\\Footer.tsx:98:11",className:"text-white/40 text-sm flex items-center gap-1",children:["© ",a," 小泥巴的进化历程. Built with"," ",u.jsx(C1,{"code-path":"src\\sections\\Footer.tsx:100:13",className:"w-4 h-4 text-red-500 fill-red-500"})," and 🦞"]}),u.jsx("p",{"code-path":"src\\sections\\Footer.tsx:102:11",className:"text-white/30 text-sm",children:"Powered by Openclaw · Inspired by Perplexity"})]})]})})},gs=[{name:"tavily-search",description:"AI 优化的网络搜索，通过 Tavily API 返回简洁相关的结果",category:"搜索与研究",downloads:"117k",url:"https://clawhub.ai/arun-8687/tavily-search",author:"@arun-8687"},{name:"find-skills",description:"帮助用户发现和安装智能体技能，当用户询问如何做某事时使用",category:"搜索与研究",downloads:"114k",url:"https://clawhub.ai/JimLiuxinghai/find-skills",author:"@JimLiuxinghai"},{name:"summarize",description:"使用 summarize CLI 总结 URL、PDF、图片、音频、YouTube 内容",category:"搜索与研究",downloads:"91.9k",url:"https://clawhub.ai/steipete/summarize",author:"@steipete"},{name:"brave-search",description:"通过 Brave Search API 进行网络搜索和内容提取",category:"搜索与研究",downloads:"31.3k",url:"https://clawhub.ai/steipete/brave-search",author:"@steipete"},{name:"baidu-search",description:"使用百度 AI 搜索引擎搜索网络内容",category:"搜索与研究",downloads:"25.9k",url:"https://clawhub.ai/ide-rea/baidu-search",author:"@ide-rea"},{name:"web-search-exa",description:"使用 Exa 进行实时网络搜索，返回相关来源和摘要",category:"搜索与研究",downloads:"17.1k",url:"https://clawhub.ai/theishangoswami/web-search-exa",author:"@theishangoswami"},{name:"multi-search-engine",description:"多搜索引擎集成，支持 17 个搜索引擎（8 个中国+9 个全球）",category:"搜索与研究",downloads:"22.4k",url:"https://clawhub.ai/gpyAngyoujun/multi-search-engine",author:"@gpyAngyoujun"},{name:"web-search",description:"使用 DuckDuckGo 搜索 API 搜索网络信息、新闻、图片和视频",category:"搜索与研究",downloads:"15.3k",url:"https://clawhub.ai/billyutw/web-search",author:"@billyutw"},{name:"duckduckgo-search",description:"使用 DuckDuckGo 获取实时信息、文档和教程",category:"搜索与研究",downloads:"15.1k",url:"https://clawhub.ai/10e9928a/duckduckgo-search",author:"@10e9928a"},{name:"deep-research-pro",description:"多源深度研究智能体，搜索网络并生成带引用的报告",category:"搜索与研究",downloads:"12.5k",url:"https://clawhub.ai/parags/deep-research-pro",author:"@parags"},{name:"web-search-plus",description:"具有智能自动路由功能的统一搜索技能",category:"搜索与研究",downloads:"12.1k",url:"https://clawhub.ai/robbyczgw-cla/web-search-plus",author:"@robbyczgw-cla"},{name:"answer-overflow",description:"搜索 Discord 社区讨论，找到编码问题和库问题的解决方案",category:"搜索与研究",downloads:"10k",url:"https://clawhub.ai/RhysSullivan/answeroverflow",author:"@RhysSullivan"},{name:"agent-browser",description:"Rust 编写的无头浏览器自动化 CLI，支持导航、点击、截图",category:"浏览器自动化",downloads:"80.5k",url:"https://clawhub.ai/TheSethRose/agent-browser",author:"@TheSethRose"},{name:"browser-automation",description:"通过自然语言自动执行浏览器交互操作",category:"浏览器自动化",downloads:"16.5k",url:"https://clawhub.ai/peytoncasper/browser-automation",author:"@peytoncasper"},{name:"playwright-mcp",description:"通过 Playwright MCP 服务器进行浏览器自动化",category:"浏览器自动化",downloads:"16.2k",url:"https://clawhub.ai/Spiceman161/playwright-mcp",author:"@Spiceman161"},{name:"browser-use",description:"自动化浏览器交互用于网页测试、表单填写、截图和数据提取",category:"浏览器自动化",downloads:"20.3k",url:"https://clawhub.ai/ShawnPana/browser-use",author:"@ShawnPana"},{name:"playwright-scraper-skill",description:"基于 Playwright 的网页抓取技能，带反机器人保护",category:"浏览器自动化",downloads:"13.4k",url:"https://clawhub.ai/waisimon/playwright-scraper-skill",author:"@waisimon"},{name:"fast-browser-use",description:"高性能浏览器自动化，用于大规模抓取和多标签管理",category:"浏览器自动化",downloads:"10.8k",url:"https://clawhub.ai/rknoche6/fast-browser-use",author:"@rknoche6"},{name:"firecrawl-search",description:"通过 Firecrawl API 进行网络搜索和抓取",category:"浏览器自动化",downloads:"10.7k",url:"https://clawhub.ai/ashwingupy/firecrawl-search",author:"@ashwingupy"},{name:"gog",description:"Google Workspace CLI，支持 Gmail、日历、驱动、联系人、表格和文档",category:"通信与邮件",downloads:"90.6k",url:"https://clawhub.ai/steipete/gog",author:"@steipete"},{name:"gmail",description:"Gmail API 集成，支持读取、发送和管理邮件",category:"通信与邮件",downloads:"21.4k",url:"https://clawhub.ai/byungkyu/gmail",author:"@byungkyu"},{name:"himalaya",description:"通过 IMAP/SMTP 管理邮件的 CLI 工具",category:"通信与邮件",downloads:"23.9k",url:"https://clawhub.ai/lamelas/himalaya",author:"@lamelas"},{name:"imap-smtp-email",description:"通过 IMAP/SMTP 读取和发送邮件",category:"通信与邮件",downloads:"20k",url:"https://clawhub.ai/gzlicanyi/imap-smtp-email",author:"@gzlicanyi"},{name:"outlook-api",description:"Microsoft Outlook API 集成，管理邮件、日历和联系人",category:"通信与邮件",downloads:"18.3k",url:"https://clawhub.ai/byungkyu/outlook-api",author:"@byungkyu"},{name:"agentmail",description:"为 AI 智能体设计的 API 优先邮件平台",category:"通信与邮件",downloads:"14.9k",url:"https://clawhub.ai/adboio/agentmail",author:"@adboio"},{name:"zoho-mail",description:"Zoho Mail API 集成，发送和接收邮件",category:"通信与邮件",downloads:"11.8k",url:"https://clawhub.ai/byungkyu/zoho-mail",author:"@byungkyu"},{name:"discord",description:"通过 discord 工具控制 Discord，发送消息、反应、管理频道",category:"社交媒体",downloads:"16.9k",url:"https://clawhub.ai/steipete/discord",author:"@steipete"},{name:"x-twitter",description:"与 Twitter/X 交互，阅读推文、搜索、发布、点赞和转发",category:"社交媒体",downloads:"14.3k",url:"https://clawhub.ai/annettemekuro30/x-twitter",author:"@annettemekuro30"},{name:"slack",description:"通过 slack 工具控制 Slack，包括消息反应和固定",category:"社交媒体",downloads:"22.8k",url:"https://clawhub.ai/steipete/slack",author:"@steipete"},{name:"xiaohongshu-mcp",description:"自动化小红书内容运营，发布笔记、搜索和分析",category:"社交媒体",downloads:"11.4k",url:"https://clawhub.ai/Borye/xiaohongshu-mcp",author:"@Borye"},{name:"moltbook-interact",description:"与 Moltbook 社交网络交互，发布、回复和浏览",category:"社交媒体",downloads:"14.6k",url:"https://clawhub.ai/LunarCmd/moltbook-interact",author:"@LunarCmd"},{name:"notion",description:"Notion API 创建和管理页面、数据库和块",category:"生产力工具",downloads:"44k",url:"https://clawhub.ai/steipete/notion",author:"@steipete"},{name:"obsidian",description:"与 Obsidian 保险库交互，管理纯 Markdown 笔记",category:"生产力工具",downloads:"38.6k",url:"https://clawhub.ai/steipete/obsidian",author:"@steipete"},{name:"trello",description:"通过 Trello REST API 管理看板、列表和卡片",category:"生产力工具",downloads:"20.2k",url:"https://clawhub.ai/steipete/trello",author:"@steipete"},{name:"clickup-api",description:"ClickUp API 集成，管理任务、列表和项目",category:"生产力工具",downloads:"15.7k",url:"https://clawhub.ai/byungkyu/clickup-api",author:"@byungkyu"},{name:"asana-api",description:"Asana API 集成，管理任务和项目",category:"生产力工具",downloads:"15.3k",url:"https://clawhub.ai/byungkyu/asana-api",author:"@byungkyu"},{name:"todoist",description:"管理 Todoist 中的任务和项目",category:"生产力工具",downloads:"12.9k",url:"https://clawhub.ai/mjrussell/todoist",author:"@mjrussell"},{name:"linear-api",description:"Linear API 集成，使用 GraphQL 查询和管理问题",category:"生产力工具",downloads:"11.8k",url:"https://clawhub.ai/byungkyu/linear-api",author:"@byungkyu"},{name:"monday",description:"Monday.com API 集成，管理看板和项目",category:"生产力工具",downloads:"12.4k",url:"https://clawhub.ai/byungkyu/monday",author:"@byungkyu"},{name:"calendly-api",description:"Calendly API 集成，访问事件类型和预定事件",category:"生产力工具",downloads:"15.7k",url:"https://clawhub.ai/byungkyu/calendly-api",author:"@byungkyu"},{name:"apple-notes",description:"通过 memo CLI 管理 Apple Notes",category:"生产力工具",downloads:"17.1k",url:"https://clawhub.ai/steipete/apple-notes",author:"@steipete"},{name:"apple-reminders",description:"通过 remindctl CLI 管理 Apple 提醒事项",category:"生产力工具",downloads:"14.7k",url:"https://clawhub.ai/steipete/apple-reminders",author:"@steipete"},{name:"caldav-calendar",description:"同步和查询 CalDAV 日历（iCloud、Google、Fastmail 等）",category:"日历与会议",downloads:"17k",url:"https://clawhub.ai/Asleep123/caldav-calendar",author:"@Asleep123"},{name:"google-meet",description:"Google Meet API 集成，创建会议空间和管理参与者",category:"日历与会议",downloads:"15.8k",url:"https://clawhub.ai/byungkyu/google-meet",author:"@byungkyu"},{name:"fathom-api",description:"Fathom API 集成，访问会议录音和转录",category:"日历与会议",downloads:"15.2k",url:"https://clawhub.ai/byungkyu/fathom-api",author:"@byungkyu"},{name:"gcalcli-calendar",description:"通过 gcalcli 访问 Google 日历",category:"日历与会议",downloads:"10.4k",url:"https://clawhub.ai/lstpsche/gcalcli-calendar",author:"@lstpsche"},{name:"zoho-calendar",description:"Zoho Calendar API 集成，管理日历和事件",category:"日历与会议",downloads:"11.4k",url:"https://clawhub.ai/byungkyu/zoho-calendar",author:"@byungkyu"},{name:"api-gateway",description:"连接 100+ API（Google、Microsoft、GitHub、Notion 等），支持托管 OAuth",category:"API 集成",downloads:"35.5k",url:"https://clawhub.ai/byungkyu/api-gateway",author:"@byungkyu"},{name:"youtube-api-skill",description:"YouTube Data API 集成，搜索视频和管理播放列表",category:"API 集成",downloads:"21.3k",url:"https://clawhub.ai/byungkyu/youtube-api-skill",author:"@byungkyu"},{name:"github",description:"使用 gh CLI 与 GitHub 交互，管理 issue、PR 和工作流",category:"API 集成",downloads:"78.1k",url:"https://clawhub.ai/steipete/github",author:"@steipete"},{name:"github-api",description:"GitHub API 集成，托管 OAuth 访问仓库和用户",category:"API 集成",downloads:"12.9k",url:"https://clawhub.ai/byungkyu/github-api",author:"@byungkyu"},{name:"stripe",description:"Stripe API 集成，管理客户、订阅和支付",category:"API 集成",downloads:"17.8k",url:"https://clawhub.ai/byungkyu/stripe-api",author:"@byungkyu"},{name:"salesforce-api",description:"Salesforce CRM API 集成，使用 SOQL 查询记录",category:"API 集成",downloads:"16.4k",url:"https://clawhub.ai/byungkyu/salesforce-api",author:"@byungkyu"},{name:"shopify",description:"Shopify 集成（维护中）",category:"API 集成",downloads:"16.8k",url:"https://clawhub.ai/byungkyu/shopify",author:"@byungkyu"},{name:"zoho-crm",description:"Zoho CRM API 集成，管理潜在客户和联系人",category:"API 集成",downloads:"11.8k",url:"https://clawhub.ai/byungkyu/zoho-crm",author:"@byungkyu"},{name:"stock-analysis",description:"使用 Yahoo Finance 数据分析股票和加密货币",category:"财务与股票",downloads:"23.8k",url:"https://clawhub.ai/udiedrichsen/stock-analysis",author:"@udiedrichsen"},{name:"stock-market-pro",description:"Yahoo Finance 驱动的股票分析技能，带图表和技术指标",category:"财务与股票",downloads:"16.5k",url:"https://clawhub.ai/kys42/stock-market-pro",author:"@kys42"},{name:"yahoo-finance",description:"获取股票价格、报价、财务数据、收益和分析师评级",category:"财务与股票",downloads:"13.1k",url:"https://clawhub.ai/ajanraj/yahoo-finance",author:"@ajanraj"},{name:"nano-pdf",description:"使用自然语言指令编辑 PDF 的 CLI 工具",category:"文档处理",downloads:"42.3k",url:"https://clawhub.ai/steipete/nano-pdf",author:"@steipete"},{name:"markdown-converter",description:"使用 markitdown 将文档转换为 Markdown 格式",category:"文档处理",downloads:"15.5k",url:"https://clawhub.ai/steipete/markdown-convert",author:"@steipete"},{name:"markdown-convert",description:"将网页转换为干净的 Markdown 用于 AI 工作流",category:"文档处理",downloads:"16.5k",url:"https://clawhub.ai/joelchance/markdown-convert",author:"@joelchance"},{name:"google-slides",description:"Google Slides API 集成，创建演示文稿和幻灯片",category:"文档处理",downloads:"16.4k",url:"https://clawhub.ai/byungkyu/google-slides",author:"@byungkyu"},{name:"microsoft-excel",description:"Microsoft Excel API 集成，读取和写入 Excel 工作簿",category:"文档处理",downloads:"13.9k",url:"https://clawhub.ai/byungkyu/microsoft-excel",author:"@byungkyu"},{name:"youtube-watcher",description:"获取和阅读 YouTube 视频转录",category:"媒体与娱乐",downloads:"24.9k",url:"https://clawhub.ai/Michaelgathara/youtube-watcher",author:"@Michaelgathara"},{name:"youtube-transcript",description:"获取和总结 YouTube 视频转录",category:"媒体与娱乐",downloads:"13.2k",url:"https://clawhub.ai/xthezealot/youtube-transcript",author:"@xthezealot"},{name:"openclaw-youtube-transcript",description:"通过提取字幕将 YouTube 视频转录为文本",category:"媒体与娱乐",downloads:"30.2k",url:"https://clawhub.ai/YoavRez/openclaw-youtube-transcript",author:"@YoavRez"},{name:"video-frames",description:"使用 ffmpeg 从视频提取帧或短片段",category:"媒体与娱乐",downloads:"21.2k",url:"https://clawhub.ai/steipete/video-frames",author:"@steipete"},{name:"spotify-player",description:"终端 Spotify 播放和搜索",category:"媒体与娱乐",downloads:"13.8k",url:"https://clawhub.ai/steipete/spotify-player",author:"@steipete"},{name:"remotion-video-toolkit",description:"使用 Remotion + React 进行程序化视频创建的完整工具包",category:"媒体与娱乐",downloads:"10.9k",url:"https://clawhub.ai/shreefentsar/remotion-video-toolkit",author:"@shreefentsar"},{name:"humanizer",description:"移除 AI 生成写作的痕迹，使文本更自然",category:"AI 工具",downloads:"37.5k",url:"https://clawhub.ai/biostartechnology/humanizer",author:"@biostartechnology"},{name:"humanize-ai-text",description:"将 AI 生成的文本人性化以绕过检测",category:"AI 工具",downloads:"26.9k",url:"https://clawhub.ai/moltbro/humanize-ai-text",author:"@moltbro"},{name:"skill-creator",description:"创建有效技能的指南，用于扩展 AI 能力",category:"AI 工具",downloads:"28.1k",url:"https://clawhub.ai/chindden/skill-creator",author:"@chindden"},{name:"skill-vetter",description:"AI 智能体的安全优先技能审核",category:"AI 工具",downloads:"30.3k",url:"https://clawhub.ai/spclaudehome/skill-vetter",author:"@spclaudehome"},{name:"frontend-design",description:"创建生产级前端界面，具有高设计质量",category:"AI 工具",downloads:"24.1k",url:"https://clawhub.ai/steipete/frontend-design",author:"@steipete"},{name:"ui-ux-pro-max",description:"UI/UX 设计和实施指导，构建精美界面",category:"AI 工具",downloads:"12.8k",url:"https://clawhub.ai/xobi667/ui-ux-pro-max",author:"@xobi667"},{name:"superdesign",description:"创建精美现代 UI 的专家前端设计指南",category:"AI 工具",downloads:"15.8k",url:"https://clawhub.ai/mpociot/superdesign",author:"@mpociot"},{name:"openai-image-gen",description:"通过 OpenAI Images API 批量生成图像",category:"AI 工具",downloads:"13.5k",url:"https://clawhub.ai/steipete/openai-image-gen",author:"@steipete"},{name:"nano-banana-pro",description:"使用 Gemini 3 Pro Image 生成/编辑图像",category:"AI 工具",downloads:"37.6k",url:"https://clawhub.ai/steipete/nano-banana-pro",author:"@steipete"},{name:"proactive-agent",description:"将 AI 智能体转变为主动伙伴，预测需求并持续改进",category:"智能体与自动化",downloads:"65.8k",url:"https://clawhub.ai/halthelobster/proactive-agent",author:"@halthelobster"},{name:"self-improving",description:"自我反思+自我批评+自我学习+自我组织，智能体评估和改进自己的工作",category:"智能体与自动化",downloads:"22.3k",url:"https://clawhub.ai/ivangdavila/self-improving",author:"@ivangdavila"},{name:"evolver",description:"AI 智能体的自我进化引擎，分析运行时历史并应用改进",category:"智能体与自动化",downloads:"16.1k",url:"https://clawhub.ai/autogame-17/evolver",author:"@autogame-17"},{name:"capability-evolver",description:"AI 智能体的自我进化引擎，识别改进并应用",category:"智能体与自动化",downloads:"10.9k",url:"https://clawhub.ai/autogame-17/capability-evolver",author:"@autogame-17"},{name:"automation-workflows",description:"设计和实施自动化工作流，节省时间并扩展运营",category:"智能体与自动化",downloads:"26.8k",url:"https://clawhub.ai/JK-0001/automation-workflows",author:"@JK-0001"},{name:"n8n-workflow-automation",description:"设计 n8n 工作流 JSON，带有强大触发器和错误处理",category:"智能体与自动化",downloads:"14.8k",url:"https://clawhub.ai/KOwl64/n8n-workflow-automation",author:"@KOwl64"},{name:"marketing-mode",description:"结合 23 个综合营销技能，涵盖策略、内容、SEO 和付费增长",category:"智能体与自动化",downloads:"15k",url:"https://clawhub.ai/TheSethRose/marketing-mode",author:"@TheSethRose"},{name:"qmd",description:"本地搜索/索引 CLI（BM25 + 向量 + 重新排序），带 MCP 模式",category:"开发者工具",downloads:"17.3k",url:"https://clawhub.ai/steipete/qmd",author:"@steipete"},{name:"git-essentials",description:"基本的 Git 命令和工作流，用于版本控制",category:"开发者工具",downloads:"14.8k",url:"https://clawhub.ai/Arnarsson/git-essentials",author:"@Arnarsson"},{name:"docker-essentials",description:"基本的 Docker 命令和工作流，用于容器管理",category:"开发者工具",downloads:"16.8k",url:"https://clawhub.ai/Arnarsson/docker-essentials",author:"@Arnarsson"},{name:"mcporter",description:"使用 mcporter CLI 配置、认证和调用 MCP 服务器/工具",category:"开发者工具",downloads:"30.3k",url:"https://clawhub.ai/steipete/mcporter",author:"@steipete"},{name:"debug-pro",description:"提供 7 步调试协议，系统地识别和修复软件 bug",category:"开发者工具",downloads:"11.1k",url:"https://clawhub.ai/cmanfre7/debug-pro",author:"@cmanfre7"},{name:"data-analyst",description:"数据可视化、报告生成、SQL 查询和电子表格自动化",category:"开发者工具",downloads:"10.7k",url:"https://clawhub.ai/oyi77/data-analyst",author:"@oyi77"},{name:"sonoscli",description:"控制 Sonos 扬声器（发现/状态/播放/音量/分组）",category:"智能家居",downloads:"50k",url:"https://clawhub.ai/steipete/sonoscli",author:"@steipete"},{name:"home-assistant",description:"控制 Home Assistant 智能家居设备，运行自动化",category:"智能家居",downloads:"10.1k",url:"https://clawhub.ai/iAhmadZain/home-assistant",author:"@iAhmadZain"},{name:"elite-longterm-memory",description:"终极 AI 智能体记忆系统，WAL 协议 + 向量搜索 + 云备份",category:"记忆与知识管理",downloads:"23.2k",url:"https://clawhub.ai/NextFrontierBuilds/elite-longterm-memory",author:"@NextFrontierBuilds"},{name:"memory-setup",description:"启用和配置 Moltbot/Clawdbot 记忆搜索",category:"记忆与知识管理",downloads:"13.2k",url:"https://clawhub.ai/jrbobbyhansen-pixel/memory-setup",author:"@jrbobbyhansen-pixel"},{name:"memory-manager",description:"智能体的本地内存管理，压缩检测和自动快照",category:"记忆与知识管理",downloads:"11.8k",url:"https://clawhub.ai/marmikcfc/memory-manager",author:"@marmikcfc"},{name:"memory-hygiene",description:"审计、清理和优化 Clawdbot 的向量内存",category:"记忆与知识管理",downloads:"10.2k",url:"https://clawhub.ai/dylanbaker24/memory-hygiene",author:"@dylanbaker24"},{name:"byterover",description:"AI 智能体的知识管理，存储和检索项目模式",category:"记忆与知识管理",downloads:"25.4k",url:"https://clawhub.ai/byteroverinc/byterover",author:"@byteroverinc"},{name:"session-logs",description:"使用 jq 搜索和分析会话日志",category:"记忆与知识管理",downloads:"14.6k",url:"https://clawhub.ai/guogang1024/session-logs",author:"@guogang1024"},{name:"weather",description:"获取当前天气和预报（无需 API 密钥）",category:"天气与资讯",downloads:"66.5k",url:"https://clawhub.ai/steipete/weather",author:"@steipete"},{name:"news-summary",description:"获取新闻更新和每日简报，创建语音摘要",category:"天气与资讯",downloads:"17.2k",url:"https://clawhub.ai/joargp/news-summary",author:"@joargp"},{name:"blogwatcher",description:"监控博客和 RSS/Atom 提要的更新",category:"天气与资讯",downloads:"21.3k",url:"https://clawhub.ai/steipete/blogwatcher",author:"@steipete"},{name:"moltguard",description:"OpenClaw 运行时安全插件，防止提示注入和数据泄露",category:"安全与工具",downloads:"13.8k",url:"https://clawhub.ai/ThomasLWang/moltguard",author:"@ThomasLWang"},{name:"1password",description:"设置和使用 1Password CLI (op) 管理密码",category:"安全与工具",downloads:"13.6k",url:"https://clawhub.ai/steipete/1password",author:"@steipete"},{name:"auto-updater",description:"自动更新 Clawdbot 和所有已安装技能",category:"安全与工具",downloads:"31k",url:"https://clawhub.ai/maximeprades/auto-updater",author:"@maximeprades"},{name:"gemini",description:"Gemini CLI 用于一次性问答、总结和生成",category:"其他工具",downloads:"18.9k",url:"https://clawhub.ai/steipete/gemini",author:"@steipete"},{name:"model-usage",description:"使用 CodexBar CLI 本地成本用法汇总每个模型的用量",category:"其他工具",downloads:"20.9k",url:"https://clawhub.ai/steipete/model-usage",author:"@steipete"},{name:"goplaces",description:"通过 goplaces CLI 查询 Google Places API",category:"其他工具",downloads:"12.8k",url:"https://clawhub.ai/steipete/goplaces",author:"@steipete"},{name:"tmux",description:"远程控制 tmux 会话，发送按键和抓取输出",category:"其他工具",downloads:"14k",url:"https://clawhub.ai/steipete/tmux",author:"@steipete"},{name:"sag",description:"ElevenLabs 文本转语音，mac 风格 say UX",category:"其他工具",downloads:"14.8k",url:"https://clawhub.ai/steipete/sag",author:"@steipete"},{name:"peekaboo",description:"使用 Peekaboo CLI 捕获和自动化 macOS UI",category:"其他工具",downloads:"14.8k",url:"https://clawhub.ai/steipete/peekaboo",author:"@steipete"},{name:"desktop-control",description:"使用鼠标、键盘和屏幕控制的高级桌面自动化",category:"其他工具",downloads:"20k",url:"https://clawhub.ai/matagul/desktop-control",author:"@matagul"},{name:"openai-whisper",description:"本地语音转文本，使用 Whisper CLI（无需 API 密钥）",category:"其他工具",downloads:"34.9k",url:"https://clawhub.ai/steipete/openai-whisper",author:"@steipete"},{name:"free-ride",description:"管理来自 OpenRouter 的免费 AI 模型，自动排名和配置回退",category:"其他工具",downloads:"29.4k",url:"https://clawhub.ai/Shaivpidadi/free-ride",author:"@Shaivpidadi"}],Rm=["搜索与研究","浏览器自动化","通信与邮件","社交媒体","生产力工具","日历与会议","API 集成","财务与股票","文档处理","媒体与娱乐","AI 工具","智能体与自动化","开发者工具","智能家居","记忆与知识管理","天气与资讯","安全与工具","其他工具"],xb=()=>{const[a,r]=J.useState(null),[l,o]=J.useState(""),[d,p]=J.useState(null),f=J.useMemo(()=>{let x=gs;if(a&&(x=x.filter(g=>g.category===a)),l.trim()){const g=l.toLowerCase();x=x.filter(y=>y.name.toLowerCase().includes(g)||y.description.toLowerCase().includes(g)||y.category.toLowerCase().includes(g))}return x},[a,l]),h=x=>{const g=`/install ${x}`;navigator.clipboard.writeText(g),p(x),setTimeout(()=>p(null),2e3)};return u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:38:5",className:"min-h-screen bg-lobster-dark text-white pt-24 pb-16",children:u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:39:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:41:9",className:"text-center mb-16",children:[u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:42:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6",children:[u.jsx(Mn,{"code-path":"src\\sections\\SkillsPage.tsx:43:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:44:13",children:"ClawHub Top 100 技能集"})]}),u.jsxs("h1",{"code-path":"src\\sections\\SkillsPage.tsx:46:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["全球最热门 ",u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:47:19",className:"text-lobster-orange",children:"AI 技能库"})]}),u.jsx("p",{"code-path":"src\\sections\\SkillsPage.tsx:49:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"汇集 ClawHub 下载量最高的 100+ 个技能，涵盖搜索、自动化、API集成、媒体处理等"})]}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:55:9",className:"max-w-xl mx-auto mb-8",children:u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:56:11",className:"relative",children:[u.jsx(Ah,{"code-path":"src\\sections\\SkillsPage.tsx:57:13",className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"}),u.jsx("input",{"code-path":"src\\sections\\SkillsPage.tsx:58:13",type:"text",placeholder:"搜索技能名称、描述或分类...",value:l,onChange:x=>o(x.target.value),className:"w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-lobster-orange transition-colors"})]})}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:69:9",className:"flex flex-wrap justify-center gap-3 mb-12",children:[u.jsxs("button",{"code-path":"src\\sections\\SkillsPage.tsx:70:11",onClick:()=>r(null),className:`px-4 py-2 rounded-full text-sm transition-all ${a===null?"bg-lobster-orange text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:["全部 (",gs.length,")"]}),Rm.map(x=>u.jsxs("button",{"code-path":"src\\sections\\SkillsPage.tsx:81:13",onClick:()=>r(x),className:`px-4 py-2 rounded-full text-sm transition-all ${a===x?"bg-lobster-orange text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:[x," (",gs.filter(g=>g.category===x).length,")"]},x))]}),l&&u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:97:11",className:"text-center mb-6 text-white/60",children:["找到 ",f.length,' 个匹配 "',l,'" 的技能']}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:103:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:f.map(x=>u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:105:13",className:"group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-lobster-orange/50 transition-all hover:transform hover:-translate-y-1",children:[u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:109:15",className:"flex items-start justify-between mb-4",children:[u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:110:17",className:"w-12 h-12 rounded-xl bg-gradient-to-br from-lobster-orange/30 to-purple-500/30 flex items-center justify-center",children:u.jsx(Mn,{"code-path":"src\\sections\\SkillsPage.tsx:111:19",className:"w-6 h-6 text-lobster-orange"})}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:113:17",className:"flex flex-col items-end gap-1",children:[u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:114:19",className:"text-xs px-3 py-1 rounded-full bg-white/10 text-white/60",children:x.category}),x.downloads&&u.jsxs("span",{"code-path":"src\\sections\\SkillsPage.tsx:118:21",className:"text-xs flex items-center gap-1 text-lobster-orange",children:[u.jsx(y1,{"code-path":"src\\sections\\SkillsPage.tsx:119:23",className:"w-3 h-3"}),x.downloads]})]})]}),u.jsx("h3",{"code-path":"src\\sections\\SkillsPage.tsx:126:15",className:"text-lg font-semibold mb-2 group-hover:text-lobster-orange transition-colors",children:x.name.split("-").map(g=>g.charAt(0).toUpperCase()+g.slice(1)).join(" ")}),u.jsx("p",{"code-path":"src\\sections\\SkillsPage.tsx:132:15",className:"text-white/60 text-sm leading-relaxed mb-3",children:x.description}),x.author&&u.jsxs("p",{"code-path":"src\\sections\\SkillsPage.tsx:137:17",className:"text-white/40 text-xs mb-3",children:["by ",x.author]}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:142:15",className:"mt-auto flex items-center justify-between gap-3",children:[u.jsxs("a",{"code-path":"src\\sections\\SkillsPage.tsx:143:17",href:x.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-lobster-orange text-sm hover:underline",children:[u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:149:19",children:"查看详情"}),u.jsx(Cr,{"code-path":"src\\sections\\SkillsPage.tsx:150:19",className:"w-3 h-3 ml-1"})]}),u.jsx("button",{"code-path":"src\\sections\\SkillsPage.tsx:152:17",onClick:()=>h(x.name),className:`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs transition-all ${d===x.name?"bg-green-500/20 text-green-400":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:d===x.name?u.jsxs(u.Fragment,{children:[u.jsx(ou,{"code-path":"src\\sections\\SkillsPage.tsx:162:23",className:"w-3 h-3"}),u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:163:23",children:"已复制"})]}):u.jsxs(u.Fragment,{children:[u.jsx(ll,{"code-path":"src\\sections\\SkillsPage.tsx:167:23",className:"w-3 h-3"}),u.jsx("span",{"code-path":"src\\sections\\SkillsPage.tsx:168:23",children:"安装命令"})]})})]})]},x.name))}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:178:9",className:"mt-16 grid grid-cols-2 md:grid-cols-4 gap-6",children:[u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:179:11",className:"bg-white/5 rounded-2xl p-6 text-center",children:[u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:180:13",className:"text-3xl font-bold text-lobster-orange mb-2",children:[gs.length,"+"]}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:183:13",className:"text-white/60 text-sm",children:"技能总数"})]}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:185:11",className:"bg-white/5 rounded-2xl p-6 text-center",children:[u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:186:13",className:"text-3xl font-bold text-lobster-orange mb-2",children:Rm.length}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:189:13",className:"text-white/60 text-sm",children:"分类数量"})]}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:191:11",className:"bg-white/5 rounded-2xl p-6 text-center",children:[u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:192:13",className:"text-3xl font-bold text-lobster-orange mb-2",children:gs.filter(x=>x.category==="搜索与研究").length}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:195:13",className:"text-white/60 text-sm",children:"搜索技能"})]}),u.jsxs("div",{"code-path":"src\\sections\\SkillsPage.tsx:197:11",className:"bg-white/5 rounded-2xl p-6 text-center",children:[u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:198:13",className:"text-3xl font-bold text-lobster-orange mb-2",children:gs.filter(x=>x.category==="浏览器自动化").length}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:201:13",className:"text-white/60 text-sm",children:"自动化技能"})]})]}),u.jsx("div",{"code-path":"src\\sections\\SkillsPage.tsx:206:9",className:"mt-12 text-center",children:u.jsxs("p",{"code-path":"src\\sections\\SkillsPage.tsx:207:11",className:"text-white/40 text-sm",children:["数据来源: ",u.jsx("a",{"code-path":"src\\sections\\SkillsPage.tsx:208:19",href:"https://clawhub.ai/skills?sort=downloads",target:"_blank",rel:"noopener noreferrer",className:"text-lobster-orange hover:underline",children:"ClawHub"})," - 按下载量排序的 Top 100 技能"]})})]})})},Pm=[{id:"01-basics-01-introduction",title:"第一章：认识OpenClaw",category:"基础入门"},{id:"01-basics-02-installation",title:"第二章：安装部署",category:"基础入门"},{id:"01-basics-03-quick-start",title:"第三章：快速开始",category:"基础入门"},{id:"02-core-04-file-management",title:"第四章：文件管理",category:"核心功能"},{id:"02-core-05-knowledge-management",title:"第五章：知识管理",category:"核心功能"},{id:"02-core-06-schedule-management",title:"第六章：日程管理",category:"核心功能"},{id:"02-core-07-automation-workflow",title:"第七章：自动化工作流",category:"核心功能"},{id:"03-advanced-08-skills-extension",title:"第八章：Skills扩展",category:"进阶拓展"},{id:"03-advanced-09-multi-platform-integration",title:"第九章：多平台接入",category:"进阶拓展"},{id:"03-advanced-10-api-integration",title:"第十章：API集成",category:"进阶拓展"},{id:"03-advanced-11-advanced-configuration",title:"第十一章：高级配置",category:"进阶拓展"},{id:"04-cases-12-personal-productivity",title:"第十二章：个人效率提升",category:"实战案例"},{id:"04-cases-13-advanced-automation",title:"第十三章：进阶自动化",category:"实战案例"},{id:"04-cases-14-creative-applications",title:"第十四章：创意应用",category:"实战案例"},{id:"04-cases-15-solo-entrepreneur-cases",title:"第十五章：一人企业案例",category:"实战案例"},{id:"api-key-config-guide",title:"附录1：API密钥配置指南",category:"附录"},{id:"config-file-structure",title:"附录2：配置文件结构",category:"附录"},{id:"search-guide",title:"附录3：搜索指南",category:"附录"},{id:"skills-ecosystem",title:"附录4：Skills生态系统",category:"附录"}],yb=["基础入门","核心功能","进阶拓展","实战案例","附录"],bb=()=>{const[a,r]=J.useState(Pm[0]),[l,o]=J.useState(!1);J.useEffect(()=>{o(!0)},[]);const d=p=>`/source/tutorial/awesome/${p}.html`;return u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:46:5",className:"min-h-screen bg-lobster-dark text-white",children:[u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:48:7",className:"pt-24 pb-6 border-b border-white/10",children:u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:49:9",className:"container-custom",children:u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:50:11",className:"flex items-center justify-between",children:[u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:51:13",className:"flex items-center gap-4",children:[u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:52:15",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm",children:[u.jsx(Mn,{"code-path":"src\\sections\\TutorialInstallPage.tsx:53:17",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\TutorialInstallPage.tsx:54:17",children:"教程中心"})]}),u.jsxs("h1",{"code-path":"src\\sections\\TutorialInstallPage.tsx:56:15",className:"text-2xl md:text-3xl font-bold",children:["OpenClaw ",u.jsx("span",{"code-path":"src\\sections\\TutorialInstallPage.tsx:57:26",className:"text-lobster-orange",children:"完整教程"})]})]}),u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:60:13",className:"flex items-center gap-2 text-white/60 text-sm",children:[u.jsx(lu,{"code-path":"src\\sections\\TutorialInstallPage.tsx:61:15",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\TutorialInstallPage.tsx:62:15",children:"19篇教程 · 从入门到精通"})]})]})})}),u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:69:7",className:"container-custom py-6",children:u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:70:9",className:"flex gap-6",style:{height:"calc(100vh - 220px)",minHeight:"600px"},children:[u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:72:11",className:"w-80 flex-shrink-0 bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col",style:{opacity:l?1:0,transform:l?"translateX(0)":"translateX(-20px)",transition:"all 0.5s ease"},children:[u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:80:13",className:"p-4 border-b border-white/10",children:u.jsx("h3",{"code-path":"src\\sections\\TutorialInstallPage.tsx:81:15",className:"font-semibold text-white",children:"教程目录"})}),u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:83:13",className:"flex-1 overflow-y-auto p-2",children:yb.map(p=>u.jsxs("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:85:17",className:"mb-4",children:[u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:86:19",className:"px-3 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider",children:p}),Pm.filter(f=>f.category===p).map((f,h)=>u.jsxs("button",{"code-path":"src\\sections\\TutorialInstallPage.tsx:92:23",onClick:()=>r(f),className:`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${a.id===f.id?"bg-lobster-orange/20 text-lobster-orange border-l-2 border-lobster-orange":"text-white/70 hover:bg-white/5 hover:text-white"}`,style:{transitionDelay:`${h*50}ms`,opacity:l?1:0,transform:l?"translateX(0)":"translateX(-10px)"},children:[u.jsx(cu,{"code-path":"src\\sections\\TutorialInstallPage.tsx:106:25",className:`w-3 h-3 flex-shrink-0 ${a.id===f.id?"text-lobster-orange":"text-white/30"}`}),u.jsx("span",{"code-path":"src\\sections\\TutorialInstallPage.tsx:107:25",className:"truncate",children:f.title})]},f.id))]},p))})]}),u.jsx("div",{"code-path":"src\\sections\\TutorialInstallPage.tsx:116:11",className:"flex-1 bg-white/5 rounded-2xl border border-white/10 overflow-hidden",style:{opacity:l?1:0,transform:l?"translateX(0)":"translateX(20px)",transition:"all 0.5s ease 0.2s"},children:u.jsx("iframe",{"code-path":"src\\sections\\TutorialInstallPage.tsx:124:13",src:d(a.id),title:a.title,className:"w-full h-full border-0",allow:"accelerometer; ambient-light-sensor; autoplay; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-shift; magnetometer; microphone; midi; otp-autocomplete; payment; picture-in-picture; private-network-connection; sync-xhr; usb; vr; wake-lock; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"})})]})})]})};function _b(a,r){const l={};return(a[a.length-1]===""?[...a,""]:a).join((l.padRight?" ":"")+","+(l.padLeft===!1?"":" ")).trim()}const kb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,wb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,vb={};function zm(a,r){return(vb.jsx?wb:kb).test(a)}const Sb=/[ \t\n\f\r]/g;function Tb(a){return typeof a=="object"?a.type==="text"?qm(a.value):!1:qm(a)}function qm(a){return a.replace(Sb,"")===""}class Lr{constructor(r,l,o){this.normal=l,this.property=r,o&&(this.space=o)}}Lr.prototype.normal={};Lr.prototype.property={};Lr.prototype.space=void 0;function Oh(a,r){const l={},o={};for(const d of a)Object.assign(l,d.property),Object.assign(o,d.normal);return new Lr(l,o,r)}function Zc(a){return a.toLowerCase()}class Ot{constructor(r,l){this.attribute=l,this.property=r}}Ot.prototype.attribute="";Ot.prototype.booleanish=!1;Ot.prototype.boolean=!1;Ot.prototype.commaOrSpaceSeparated=!1;Ot.prototype.commaSeparated=!1;Ot.prototype.defined=!1;Ot.prototype.mustUseProperty=!1;Ot.prototype.number=!1;Ot.prototype.overloadedBoolean=!1;Ot.prototype.property="";Ot.prototype.spaceSeparated=!1;Ot.prototype.space=void 0;let Eb=0;const we=Ca(),lt=Ca(),Wc=Ca(),G=Ca(),Xe=Ca(),_s=Ca(),Ht=Ca();function Ca(){return 2**++Eb}const Jc=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:lt,commaOrSpaceSeparated:Ht,commaSeparated:_s,number:G,overloadedBoolean:Wc,spaceSeparated:Xe},Symbol.toStringTag,{value:"Module"})),Rc=Object.keys(Jc);class du extends Ot{constructor(r,l,o,d){let p=-1;if(super(r,l),Bm(this,"space",d),typeof o=="number")for(;++p<Rc.length;){const f=Rc[p];Bm(this,Rc[p],(o&Jc[f])===Jc[f])}}}du.prototype.defined=!0;function Bm(a,r,l){l&&(a[r]=l)}function vs(a){const r={},l={};for(const[o,d]of Object.entries(a.properties)){const p=new du(o,a.transform(a.attributes||{},o),d,a.space);a.mustUseProperty&&a.mustUseProperty.includes(o)&&(p.mustUseProperty=!0),r[o]=p,l[Zc(o)]=o,l[Zc(p.attribute)]=o}return new Lr(r,l,a.space)}const Dh=vs({properties:{ariaActiveDescendant:null,ariaAtomic:lt,ariaAutoComplete:null,ariaBusy:lt,ariaChecked:lt,ariaColCount:G,ariaColIndex:G,ariaColSpan:G,ariaControls:Xe,ariaCurrent:null,ariaDescribedBy:Xe,ariaDetails:null,ariaDisabled:lt,ariaDropEffect:Xe,ariaErrorMessage:null,ariaExpanded:lt,ariaFlowTo:Xe,ariaGrabbed:lt,ariaHasPopup:null,ariaHidden:lt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Xe,ariaLevel:G,ariaLive:null,ariaModal:lt,ariaMultiLine:lt,ariaMultiSelectable:lt,ariaOrientation:null,ariaOwns:Xe,ariaPlaceholder:null,ariaPosInSet:G,ariaPressed:lt,ariaReadOnly:lt,ariaRelevant:null,ariaRequired:lt,ariaRoleDescription:Xe,ariaRowCount:G,ariaRowIndex:G,ariaRowSpan:G,ariaSelected:lt,ariaSetSize:G,ariaSort:null,ariaValueMax:G,ariaValueMin:G,ariaValueNow:G,ariaValueText:null,role:null},transform(a,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function Mh(a,r){return r in a?a[r]:r}function Rh(a,r){return Mh(a,r.toLowerCase())}const Cb=vs({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:_s,acceptCharset:Xe,accessKey:Xe,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Xe,autoFocus:we,autoPlay:we,blocking:Xe,capture:null,charSet:null,checked:we,cite:null,className:Xe,cols:G,colSpan:null,content:null,contentEditable:lt,controls:we,controlsList:Xe,coords:G|_s,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:Wc,draggable:lt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Xe,height:G,hidden:Wc,high:G,href:null,hrefLang:null,htmlFor:Xe,httpEquiv:Xe,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Xe,itemRef:Xe,itemScope:we,itemType:Xe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:G,manifest:null,max:null,maxLength:G,media:null,method:null,min:null,minLength:G,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:G,pattern:null,ping:Xe,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Xe,required:we,reversed:we,rows:G,rowSpan:G,sandbox:Xe,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shape:null,size:G,sizes:null,slot:null,span:G,spellCheck:lt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:G,step:null,style:null,tabIndex:G,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:lt,width:G,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Xe,axis:null,background:null,bgColor:null,border:G,borderColor:null,bottomMargin:G,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:G,leftMargin:G,link:null,longDesc:null,lowSrc:null,marginHeight:G,marginWidth:G,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:G,rules:null,scheme:null,scrolling:lt,standby:null,summary:null,text:null,topMargin:G,valueType:null,version:null,vAlign:null,vLink:null,vSpace:G,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:G,security:null,unselectable:null},space:"html",transform:Rh}),Ab=vs({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ht,accentHeight:G,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:G,amplitude:G,arabicForm:null,ascent:G,attributeName:null,attributeType:null,azimuth:G,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:G,by:null,calcMode:null,capHeight:G,className:Xe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:G,diffuseConstant:G,direction:null,display:null,dur:null,divisor:G,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:G,enableBackground:null,end:null,event:null,exponent:G,externalResourcesRequired:null,fill:null,fillOpacity:G,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:_s,g2:_s,glyphName:_s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:G,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:G,horizOriginX:G,horizOriginY:G,id:null,ideographic:G,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:G,k:G,k1:G,k2:G,k3:G,k4:G,kernelMatrix:Ht,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:G,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:G,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:G,overlineThickness:G,paintOrder:null,panose1:null,path:null,pathLength:G,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Xe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:G,pointsAtY:G,pointsAtZ:G,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ht,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ht,rev:Ht,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ht,requiredFeatures:Ht,requiredFonts:Ht,requiredFormats:Ht,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:G,specularExponent:G,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:G,strikethroughThickness:G,string:null,stroke:null,strokeDashArray:Ht,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:G,strokeOpacity:G,strokeWidth:null,style:null,surfaceScale:G,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ht,tabIndex:G,tableValues:null,target:null,targetX:G,targetY:G,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ht,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:G,underlineThickness:G,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:G,values:null,vAlphabetic:G,vMathematical:G,vectorEffect:null,vHanging:G,vIdeographic:G,version:null,vertAdvY:G,vertOriginX:G,vertOriginY:G,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:G,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Mh}),Ph=vs({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,r){return"xlink:"+r.slice(5).toLowerCase()}}),zh=vs({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Rh}),qh=vs({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,r){return"xml:"+r.slice(3).toLowerCase()}}),jb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Nb=/[A-Z]/g,Um=/-[a-z]/g,Lb=/^data[-\w.:]+$/i;function Ob(a,r){const l=Zc(r);let o=r,d=Ot;if(l in a.normal)return a.property[a.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&Lb.test(r)){if(r.charAt(4)==="-"){const p=r.slice(5).replace(Um,Mb);o="data"+p.charAt(0).toUpperCase()+p.slice(1)}else{const p=r.slice(4);if(!Um.test(p)){let f=p.replace(Nb,Db);f.charAt(0)!=="-"&&(f="-"+f),r="data"+f}}d=du}return new d(o,r)}function Db(a){return"-"+a.toLowerCase()}function Mb(a){return a.charAt(1).toUpperCase()}const Rb=Oh([Dh,Cb,Ph,zh,qh],"html"),pu=Oh([Dh,Ab,Ph,zh,qh],"svg");function Pb(a){return a.join(" ").trim()}var xs={},Pc,Hm;function zb(){if(Hm)return Pc;Hm=1;var a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,l=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,d=/^:\s*/,p=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,h=/^\s+|\s+$/g,x=`
`,g="/",y="*",_="",T="comment",w="declaration";function V(W,U){if(typeof W!="string")throw new TypeError("First argument must be a string");if(!W)return[];U=U||{};var le=1,X=1;function he(Z){var I=Z.match(r);I&&(le+=I.length);var L=Z.lastIndexOf(x);X=~L?Z.length-L:X+Z.length}function ve(){var Z={line:le,column:X};return function(I){return I.position=new q(Z),ge(),I}}function q(Z){this.start=Z,this.end={line:le,column:X},this.source=U.source}q.prototype.content=W;function te(Z){var I=new Error(U.source+":"+le+":"+X+": "+Z);if(I.reason=Z,I.filename=U.source,I.line=le,I.column=X,I.source=W,!U.silent)throw I}function ye(Z){var I=Z.exec(W);if(I){var L=I[0];return he(L),W=W.slice(L.length),I}}function ge(){ye(l)}function Ae(Z){var I;for(Z=Z||[];I=se();)I!==!1&&Z.push(I);return Z}function se(){var Z=ve();if(!(g!=W.charAt(0)||y!=W.charAt(1))){for(var I=2;_!=W.charAt(I)&&(y!=W.charAt(I)||g!=W.charAt(I+1));)++I;if(I+=2,_===W.charAt(I-1))return te("End of comment missing");var L=W.slice(2,I-2);return X+=2,he(L),W=W.slice(I),X+=2,Z({type:T,comment:L})}}function ne(){var Z=ve(),I=ye(o);if(I){if(se(),!ye(d))return te("property missing ':'");var L=ye(p),Y=Z({type:w,property:K(I[0].replace(a,_)),value:L?K(L[0].replace(a,_)):_});return ye(f),Y}}function Q(){var Z=[];Ae(Z);for(var I;I=ne();)I!==!1&&(Z.push(I),Ae(Z));return Z}return ge(),Q()}function K(W){return W?W.replace(h,_):_}return Pc=V,Pc}var Im;function qb(){if(Im)return xs;Im=1;var a=xs&&xs.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(xs,"__esModule",{value:!0}),xs.default=l;const r=a(zb());function l(o,d){let p=null;if(!o||typeof o!="string")return p;const f=(0,r.default)(o),h=typeof d=="function";return f.forEach(x=>{if(x.type!=="declaration")return;const{property:g,value:y}=x;h?d(g,y,x):y&&(p=p||{},p[g]=y)}),p}return xs}var _r={},Ym;function Bb(){if(Ym)return _r;Ym=1,Object.defineProperty(_r,"__esModule",{value:!0}),_r.camelCase=void 0;var a=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,l=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,d=/^-(ms)-/,p=function(g){return!g||l.test(g)||a.test(g)},f=function(g,y){return y.toUpperCase()},h=function(g,y){return"".concat(y,"-")},x=function(g,y){return y===void 0&&(y={}),p(g)?g:(g=g.toLowerCase(),y.reactCompat?g=g.replace(d,h):g=g.replace(o,h),g.replace(r,f))};return _r.camelCase=x,_r}var kr,Vm;function Ub(){if(Vm)return kr;Vm=1;var a=kr&&kr.__importDefault||function(d){return d&&d.__esModule?d:{default:d}},r=a(qb()),l=Bb();function o(d,p){var f={};return!d||typeof d!="string"||(0,r.default)(d,function(h,x){h&&x&&(f[(0,l.camelCase)(h,p)]=x)}),f}return o.default=o,kr=o,kr}var Hb=Ub();const Ib=vh(Hb),Bh=Uh("end"),fu=Uh("start");function Uh(a){return r;function r(l){const o=l&&l.position&&l.position[a]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function Yb(a){const r=fu(a),l=Bh(a);if(r&&l)return{start:r,end:l}}function Sr(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?Gm(a.position):"start"in a||"end"in a?Gm(a):"line"in a||"column"in a?$c(a):""}function $c(a){return Km(a&&a.line)+":"+Km(a&&a.column)}function Gm(a){return $c(a&&a.start)+"-"+$c(a&&a.end)}function Km(a){return a&&typeof a=="number"?a:1}class yt extends Error{constructor(r,l,o){super(),typeof l=="string"&&(o=l,l=void 0);let d="",p={},f=!1;if(l&&("line"in l&&"column"in l?p={place:l}:"start"in l&&"end"in l?p={place:l}:"type"in l?p={ancestors:[l],place:l.position}:p={...l}),typeof r=="string"?d=r:!p.cause&&r&&(f=!0,d=r.message,p.cause=r),!p.ruleId&&!p.source&&typeof o=="string"){const x=o.indexOf(":");x===-1?p.ruleId=o:(p.source=o.slice(0,x),p.ruleId=o.slice(x+1))}if(!p.place&&p.ancestors&&p.ancestors){const x=p.ancestors[p.ancestors.length-1];x&&(p.place=x.position)}const h=p.place&&"start"in p.place?p.place.start:p.place;this.ancestors=p.ancestors||void 0,this.cause=p.cause||void 0,this.column=h?h.column:void 0,this.fatal=void 0,this.file="",this.message=d,this.line=h?h.line:void 0,this.name=Sr(p.place)||"1:1",this.place=p.place||void 0,this.reason=this.message,this.ruleId=p.ruleId||void 0,this.source=p.source||void 0,this.stack=f&&p.cause&&typeof p.cause.stack=="string"?p.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}yt.prototype.file="";yt.prototype.name="";yt.prototype.reason="";yt.prototype.message="";yt.prototype.stack="";yt.prototype.column=void 0;yt.prototype.line=void 0;yt.prototype.ancestors=void 0;yt.prototype.cause=void 0;yt.prototype.fatal=void 0;yt.prototype.place=void 0;yt.prototype.ruleId=void 0;yt.prototype.source=void 0;const mu={}.hasOwnProperty,Vb=new Map,Gb=/[A-Z]/g,Kb=new Set(["table","tbody","thead","tfoot","tr"]),Xb=new Set(["td","th"]),Hh="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Qb(a,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const l=r.filePath||void 0;let o;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=n0(l,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=t0(l,r.jsx,r.jsxs)}const d={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:o,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?pu:Rb,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},p=Ih(d,a,void 0);return p&&typeof p!="string"?p:d.create(a,d.Fragment,{children:p||void 0},void 0)}function Ih(a,r,l){if(r.type==="element")return Fb(a,r,l);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return Zb(a,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return Jb(a,r,l);if(r.type==="mdxjsEsm")return Wb(a,r);if(r.type==="root")return $b(a,r,l);if(r.type==="text")return e0(a,r)}function Fb(a,r,l){const o=a.schema;let d=o;r.tagName.toLowerCase()==="svg"&&o.space==="html"&&(d=pu,a.schema=d),a.ancestors.push(r);const p=Vh(a,r.tagName,!1),f=a0(a,r);let h=gu(a,r);return Kb.has(r.tagName)&&(h=h.filter(function(x){return typeof x=="string"?!Tb(x):!0})),Yh(a,f,p,r),hu(f,h),a.ancestors.pop(),a.schema=o,a.create(r,p,f,l)}function Zb(a,r){if(r.data&&r.data.estree&&a.evaluater){const o=r.data.estree.body[0];return o.type,a.evaluater.evaluateExpression(o.expression)}Nr(a,r.position)}function Wb(a,r){if(r.data&&r.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(r.data.estree);Nr(a,r.position)}function Jb(a,r,l){const o=a.schema;let d=o;r.name==="svg"&&o.space==="html"&&(d=pu,a.schema=d),a.ancestors.push(r);const p=r.name===null?a.Fragment:Vh(a,r.name,!0),f=s0(a,r),h=gu(a,r);return Yh(a,f,p,r),hu(f,h),a.ancestors.pop(),a.schema=o,a.create(r,p,f,l)}function $b(a,r,l){const o={};return hu(o,gu(a,r)),a.create(r,a.Fragment,o,l)}function e0(a,r){return r.value}function Yh(a,r,l,o){typeof l!="string"&&l!==a.Fragment&&a.passNode&&(r.node=o)}function hu(a,r){if(r.length>0){const l=r.length>1?r:r[0];l&&(a.children=l)}}function t0(a,r,l){return o;function o(d,p,f,h){const g=Array.isArray(f.children)?l:r;return h?g(p,f,h):g(p,f)}}function n0(a,r){return l;function l(o,d,p,f){const h=Array.isArray(p.children),x=fu(o);return r(d,p,f,h,{columnNumber:x?x.column-1:void 0,fileName:a,lineNumber:x?x.line:void 0},void 0)}}function a0(a,r){const l={};let o,d;for(d in r.properties)if(d!=="children"&&mu.call(r.properties,d)){const p=r0(a,d,r.properties[d]);if(p){const[f,h]=p;a.tableCellAlignToStyle&&f==="align"&&typeof h=="string"&&Xb.has(r.tagName)?o=h:l[f]=h}}if(o){const p=l.style||(l.style={});p[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return l}function s0(a,r){const l={};for(const o of r.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&a.evaluater){const p=o.data.estree.body[0];p.type;const f=p.expression;f.type;const h=f.properties[0];h.type,Object.assign(l,a.evaluater.evaluateExpression(h.argument))}else Nr(a,r.position);else{const d=o.name;let p;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&a.evaluater){const h=o.value.data.estree.body[0];h.type,p=a.evaluater.evaluateExpression(h.expression)}else Nr(a,r.position);else p=o.value===null?!0:o.value;l[d]=p}return l}function gu(a,r){const l=[];let o=-1;const d=a.passKeys?new Map:Vb;for(;++o<r.children.length;){const p=r.children[o];let f;if(a.passKeys){const x=p.type==="element"?p.tagName:p.type==="mdxJsxFlowElement"||p.type==="mdxJsxTextElement"?p.name:void 0;if(x){const g=d.get(x)||0;f=x+"-"+g,d.set(x,g+1)}}const h=Ih(a,p,f);h!==void 0&&l.push(h)}return l}function r0(a,r,l){const o=Ob(a.schema,r);if(!(l==null||typeof l=="number"&&Number.isNaN(l))){if(Array.isArray(l)&&(l=o.commaSeparated?_b(l):Pb(l)),o.property==="style"){let d=typeof l=="object"?l:i0(a,String(l));return a.stylePropertyNameCase==="css"&&(d=l0(d)),["style",d]}return[a.elementAttributeNameCase==="react"&&o.space?jb[o.property]||o.property:o.attribute,l]}}function i0(a,r){try{return Ib(r,{reactCompat:!0})}catch(l){if(a.ignoreInvalidStyle)return{};const o=l,d=new yt("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw d.file=a.filePath||void 0,d.url=Hh+"#cannot-parse-style-attribute",d}}function Vh(a,r,l){let o;if(!l)o={type:"Literal",value:r};else if(r.includes(".")){const d=r.split(".");let p=-1,f;for(;++p<d.length;){const h=zm(d[p])?{type:"Identifier",name:d[p]}:{type:"Literal",value:d[p]};f=f?{type:"MemberExpression",object:f,property:h,computed:!!(p&&h.type==="Literal"),optional:!1}:h}o=f}else o=zm(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(o.type==="Literal"){const d=o.value;return mu.call(a.components,d)?a.components[d]:d}if(a.evaluater)return a.evaluater.evaluateExpression(o);Nr(a)}function Nr(a,r){const l=new yt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw l.file=a.filePath||void 0,l.url=Hh+"#cannot-handle-mdx-estrees-without-createevaluater",l}function l0(a){const r={};let l;for(l in a)mu.call(a,l)&&(r[o0(l)]=a[l]);return r}function o0(a){let r=a.replace(Gb,c0);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function c0(a){return"-"+a.toLowerCase()}const zc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},u0={};function d0(a,r){const l=u0,o=typeof l.includeImageAlt=="boolean"?l.includeImageAlt:!0,d=typeof l.includeHtml=="boolean"?l.includeHtml:!0;return Gh(a,o,d)}function Gh(a,r,l){if(p0(a)){if("value"in a)return a.type==="html"&&!l?"":a.value;if(r&&"alt"in a&&a.alt)return a.alt;if("children"in a)return Xm(a.children,r,l)}return Array.isArray(a)?Xm(a,r,l):""}function Xm(a,r,l){const o=[];let d=-1;for(;++d<a.length;)o[d]=Gh(a[d],r,l);return o.join("")}function p0(a){return!!(a&&typeof a=="object")}const Qm=document.createElement("i");function xu(a){const r="&"+a+";";Qm.innerHTML=r;const l=Qm.textContent;return l.charCodeAt(l.length-1)===59&&a!=="semi"||l===r?!1:l}function pn(a,r,l,o){const d=a.length;let p=0,f;if(r<0?r=-r>d?0:d+r:r=r>d?d:r,l=l>0?l:0,o.length<1e4)f=Array.from(o),f.unshift(r,l),a.splice(...f);else for(l&&a.splice(r,l);p<o.length;)f=o.slice(p,p+1e4),f.unshift(r,0),a.splice(...f),p+=1e4,r+=1e4}function en(a,r){return a.length>0?(pn(a,a.length,0,r),a):r}const Fm={}.hasOwnProperty;function f0(a){const r={};let l=-1;for(;++l<a.length;)m0(r,a[l]);return r}function m0(a,r){let l;for(l in r){const d=(Fm.call(a,l)?a[l]:void 0)||(a[l]={}),p=r[l];let f;if(p)for(f in p){Fm.call(d,f)||(d[f]=[]);const h=p[f];h0(d[f],Array.isArray(h)?h:h?[h]:[])}}}function h0(a,r){let l=-1;const o=[];for(;++l<r.length;)(r[l].add==="after"?a:o).push(r[l]);pn(a,0,0,o)}function Kh(a,r){const l=Number.parseInt(a,r);return l<9||l===11||l>13&&l<32||l>126&&l<160||l>55295&&l<57344||l>64975&&l<65008||(l&65535)===65535||(l&65535)===65534||l>1114111?"�":String.fromCodePoint(l)}function ks(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dn=oa(/[A-Za-z]/),It=oa(/[\dA-Za-z]/),g0=oa(/[#-'*+\--9=?A-Z^-~]/);function eu(a){return a!==null&&(a<32||a===127)}const tu=oa(/\d/),x0=oa(/[\dA-Fa-f]/),y0=oa(/[!-/:-@[-`{-~]/);function me(a){return a!==null&&a<-2}function Lt(a){return a!==null&&(a<0||a===32)}function Pe(a){return a===-2||a===-1||a===32}const b0=oa(new RegExp("\\p{P}|\\p{S}","u")),_0=oa(/\s/);function oa(a){return r;function r(l){return l!==null&&l>-1&&a.test(String.fromCharCode(l))}}function Ss(a){const r=[];let l=-1,o=0,d=0;for(;++l<a.length;){const p=a.charCodeAt(l);let f="";if(p===37&&It(a.charCodeAt(l+1))&&It(a.charCodeAt(l+2)))d=2;else if(p<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(p))||(f=String.fromCharCode(p));else if(p>55295&&p<57344){const h=a.charCodeAt(l+1);p<56320&&h>56319&&h<57344?(f=String.fromCharCode(p,h),d=1):f="�"}else f=String.fromCharCode(p);f&&(r.push(a.slice(o,l),encodeURIComponent(f)),o=l+d+1,f=""),d&&(l+=d,d=0)}return r.join("")+a.slice(o)}function Qe(a,r,l,o){const d=o?o-1:Number.POSITIVE_INFINITY;let p=0;return f;function f(x){return Pe(x)?(a.enter(l),h(x)):r(x)}function h(x){return Pe(x)&&p++<d?(a.consume(x),h):(a.exit(l),r(x))}}const k0={tokenize:w0};function w0(a){const r=a.attempt(this.parser.constructs.contentInitial,o,d);let l;return r;function o(h){if(h===null){a.consume(h);return}return a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),Qe(a,r,"linePrefix")}function d(h){return a.enter("paragraph"),p(h)}function p(h){const x=a.enter("chunkText",{contentType:"text",previous:l});return l&&(l.next=x),l=x,f(h)}function f(h){if(h===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(h);return}return me(h)?(a.consume(h),a.exit("chunkText"),p):(a.consume(h),f)}}const v0={tokenize:S0},Zm={tokenize:T0};function S0(a){const r=this,l=[];let o=0,d,p,f;return h;function h(X){if(o<l.length){const he=l[o];return r.containerState=he[1],a.attempt(he[0].continuation,x,g)(X)}return g(X)}function x(X){if(o++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,d&&le();const he=r.events.length;let ve=he,q;for(;ve--;)if(r.events[ve][0]==="exit"&&r.events[ve][1].type==="chunkFlow"){q=r.events[ve][1].end;break}U(o);let te=he;for(;te<r.events.length;)r.events[te][1].end={...q},te++;return pn(r.events,ve+1,0,r.events.slice(he)),r.events.length=te,g(X)}return h(X)}function g(X){if(o===l.length){if(!d)return T(X);if(d.currentConstruct&&d.currentConstruct.concrete)return V(X);r.interrupt=!!(d.currentConstruct&&!d._gfmTableDynamicInterruptHack)}return r.containerState={},a.check(Zm,y,_)(X)}function y(X){return d&&le(),U(o),T(X)}function _(X){return r.parser.lazy[r.now().line]=o!==l.length,f=r.now().offset,V(X)}function T(X){return r.containerState={},a.attempt(Zm,w,V)(X)}function w(X){return o++,l.push([r.currentConstruct,r.containerState]),T(X)}function V(X){if(X===null){d&&le(),U(0),a.consume(X);return}return d=d||r.parser.flow(r.now()),a.enter("chunkFlow",{_tokenizer:d,contentType:"flow",previous:p}),K(X)}function K(X){if(X===null){W(a.exit("chunkFlow"),!0),U(0),a.consume(X);return}return me(X)?(a.consume(X),W(a.exit("chunkFlow")),o=0,r.interrupt=void 0,h):(a.consume(X),K)}function W(X,he){const ve=r.sliceStream(X);if(he&&ve.push(null),X.previous=p,p&&(p.next=X),p=X,d.defineSkip(X.start),d.write(ve),r.parser.lazy[X.start.line]){let q=d.events.length;for(;q--;)if(d.events[q][1].start.offset<f&&(!d.events[q][1].end||d.events[q][1].end.offset>f))return;const te=r.events.length;let ye=te,ge,Ae;for(;ye--;)if(r.events[ye][0]==="exit"&&r.events[ye][1].type==="chunkFlow"){if(ge){Ae=r.events[ye][1].end;break}ge=!0}for(U(o),q=te;q<r.events.length;)r.events[q][1].end={...Ae},q++;pn(r.events,ye+1,0,r.events.slice(te)),r.events.length=q}}function U(X){let he=l.length;for(;he-- >X;){const ve=l[he];r.containerState=ve[1],ve[0].exit.call(r,a)}l.length=X}function le(){d.write([null]),p=void 0,d=void 0,r.containerState._closeFlow=void 0}}function T0(a,r,l){return Qe(a,a.attempt(this.parser.constructs.document,r,l),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Wm(a){if(a===null||Lt(a)||_0(a))return 1;if(b0(a))return 2}function yu(a,r,l){const o=[];let d=-1;for(;++d<a.length;){const p=a[d].resolveAll;p&&!o.includes(p)&&(r=p(r,l),o.push(p))}return r}const nu={name:"attention",resolveAll:E0,tokenize:C0};function E0(a,r){let l=-1,o,d,p,f,h,x,g,y;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="attentionSequence"&&a[l][1]._close){for(o=l;o--;)if(a[o][0]==="exit"&&a[o][1].type==="attentionSequence"&&a[o][1]._open&&r.sliceSerialize(a[o][1]).charCodeAt(0)===r.sliceSerialize(a[l][1]).charCodeAt(0)){if((a[o][1]._close||a[l][1]._open)&&(a[l][1].end.offset-a[l][1].start.offset)%3&&!((a[o][1].end.offset-a[o][1].start.offset+a[l][1].end.offset-a[l][1].start.offset)%3))continue;x=a[o][1].end.offset-a[o][1].start.offset>1&&a[l][1].end.offset-a[l][1].start.offset>1?2:1;const _={...a[o][1].end},T={...a[l][1].start};Jm(_,-x),Jm(T,x),f={type:x>1?"strongSequence":"emphasisSequence",start:_,end:{...a[o][1].end}},h={type:x>1?"strongSequence":"emphasisSequence",start:{...a[l][1].start},end:T},p={type:x>1?"strongText":"emphasisText",start:{...a[o][1].end},end:{...a[l][1].start}},d={type:x>1?"strong":"emphasis",start:{...f.start},end:{...h.end}},a[o][1].end={...f.start},a[l][1].start={...h.end},g=[],a[o][1].end.offset-a[o][1].start.offset&&(g=en(g,[["enter",a[o][1],r],["exit",a[o][1],r]])),g=en(g,[["enter",d,r],["enter",f,r],["exit",f,r],["enter",p,r]]),g=en(g,yu(r.parser.constructs.insideSpan.null,a.slice(o+1,l),r)),g=en(g,[["exit",p,r],["enter",h,r],["exit",h,r],["exit",d,r]]),a[l][1].end.offset-a[l][1].start.offset?(y=2,g=en(g,[["enter",a[l][1],r],["exit",a[l][1],r]])):y=0,pn(a,o-1,l-o+3,g),l=o+g.length-y-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="attentionSequence"&&(a[l][1].type="data");return a}function C0(a,r){const l=this.parser.constructs.attentionMarkers.null,o=this.previous,d=Wm(o);let p;return f;function f(x){return p=x,a.enter("attentionSequence"),h(x)}function h(x){if(x===p)return a.consume(x),h;const g=a.exit("attentionSequence"),y=Wm(x),_=!y||y===2&&d||l.includes(x),T=!d||d===2&&y||l.includes(o);return g._open=!!(p===42?_:_&&(d||!T)),g._close=!!(p===42?T:T&&(y||!_)),r(x)}}function Jm(a,r){a.column+=r,a.offset+=r,a._bufferIndex+=r}const A0={name:"autolink",tokenize:j0};function j0(a,r,l){let o=0;return d;function d(w){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(w),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),p}function p(w){return dn(w)?(a.consume(w),f):w===64?l(w):g(w)}function f(w){return w===43||w===45||w===46||It(w)?(o=1,h(w)):g(w)}function h(w){return w===58?(a.consume(w),o=0,x):(w===43||w===45||w===46||It(w))&&o++<32?(a.consume(w),h):(o=0,g(w))}function x(w){return w===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(w),a.exit("autolinkMarker"),a.exit("autolink"),r):w===null||w===32||w===60||eu(w)?l(w):(a.consume(w),x)}function g(w){return w===64?(a.consume(w),y):g0(w)?(a.consume(w),g):l(w)}function y(w){return It(w)?_(w):l(w)}function _(w){return w===46?(a.consume(w),o=0,y):w===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(w),a.exit("autolinkMarker"),a.exit("autolink"),r):T(w)}function T(w){if((w===45||It(w))&&o++<63){const V=w===45?T:_;return a.consume(w),V}return l(w)}}const ol={partial:!0,tokenize:N0};function N0(a,r,l){return o;function o(p){return Pe(p)?Qe(a,d,"linePrefix")(p):d(p)}function d(p){return p===null||me(p)?r(p):l(p)}}const Xh={continuation:{tokenize:O0},exit:D0,name:"blockQuote",tokenize:L0};function L0(a,r,l){const o=this;return d;function d(f){if(f===62){const h=o.containerState;return h.open||(a.enter("blockQuote",{_container:!0}),h.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(f),a.exit("blockQuoteMarker"),p}return l(f)}function p(f){return Pe(f)?(a.enter("blockQuotePrefixWhitespace"),a.consume(f),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),r):(a.exit("blockQuotePrefix"),r(f))}}function O0(a,r,l){const o=this;return d;function d(f){return Pe(f)?Qe(a,p,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):p(f)}function p(f){return a.attempt(Xh,r,l)(f)}}function D0(a){a.exit("blockQuote")}const Qh={name:"characterEscape",tokenize:M0};function M0(a,r,l){return o;function o(p){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(p),a.exit("escapeMarker"),d}function d(p){return y0(p)?(a.enter("characterEscapeValue"),a.consume(p),a.exit("characterEscapeValue"),a.exit("characterEscape"),r):l(p)}}const Fh={name:"characterReference",tokenize:R0};function R0(a,r,l){const o=this;let d=0,p,f;return h;function h(_){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(_),a.exit("characterReferenceMarker"),x}function x(_){return _===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(_),a.exit("characterReferenceMarkerNumeric"),g):(a.enter("characterReferenceValue"),p=31,f=It,y(_))}function g(_){return _===88||_===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(_),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),p=6,f=x0,y):(a.enter("characterReferenceValue"),p=7,f=tu,y(_))}function y(_){if(_===59&&d){const T=a.exit("characterReferenceValue");return f===It&&!xu(o.sliceSerialize(T))?l(_):(a.enter("characterReferenceMarker"),a.consume(_),a.exit("characterReferenceMarker"),a.exit("characterReference"),r)}return f(_)&&d++<p?(a.consume(_),y):l(_)}}const $m={partial:!0,tokenize:z0},eh={concrete:!0,name:"codeFenced",tokenize:P0};function P0(a,r,l){const o=this,d={partial:!0,tokenize:ve};let p=0,f=0,h;return x;function x(q){return g(q)}function g(q){const te=o.events[o.events.length-1];return p=te&&te[1].type==="linePrefix"?te[2].sliceSerialize(te[1],!0).length:0,h=q,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),y(q)}function y(q){return q===h?(f++,a.consume(q),y):f<3?l(q):(a.exit("codeFencedFenceSequence"),Pe(q)?Qe(a,_,"whitespace")(q):_(q))}function _(q){return q===null||me(q)?(a.exit("codeFencedFence"),o.interrupt?r(q):a.check($m,K,he)(q)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),T(q))}function T(q){return q===null||me(q)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),_(q)):Pe(q)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),Qe(a,w,"whitespace")(q)):q===96&&q===h?l(q):(a.consume(q),T)}function w(q){return q===null||me(q)?_(q):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),V(q))}function V(q){return q===null||me(q)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),_(q)):q===96&&q===h?l(q):(a.consume(q),V)}function K(q){return a.attempt(d,he,W)(q)}function W(q){return a.enter("lineEnding"),a.consume(q),a.exit("lineEnding"),U}function U(q){return p>0&&Pe(q)?Qe(a,le,"linePrefix",p+1)(q):le(q)}function le(q){return q===null||me(q)?a.check($m,K,he)(q):(a.enter("codeFlowValue"),X(q))}function X(q){return q===null||me(q)?(a.exit("codeFlowValue"),le(q)):(a.consume(q),X)}function he(q){return a.exit("codeFenced"),r(q)}function ve(q,te,ye){let ge=0;return Ae;function Ae(I){return q.enter("lineEnding"),q.consume(I),q.exit("lineEnding"),se}function se(I){return q.enter("codeFencedFence"),Pe(I)?Qe(q,ne,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):ne(I)}function ne(I){return I===h?(q.enter("codeFencedFenceSequence"),Q(I)):ye(I)}function Q(I){return I===h?(ge++,q.consume(I),Q):ge>=f?(q.exit("codeFencedFenceSequence"),Pe(I)?Qe(q,Z,"whitespace")(I):Z(I)):ye(I)}function Z(I){return I===null||me(I)?(q.exit("codeFencedFence"),te(I)):ye(I)}}}function z0(a,r,l){const o=this;return d;function d(f){return f===null?l(f):(a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),p)}function p(f){return o.parser.lazy[o.now().line]?l(f):r(f)}}const qc={name:"codeIndented",tokenize:B0},q0={partial:!0,tokenize:U0};function B0(a,r,l){const o=this;return d;function d(g){return a.enter("codeIndented"),Qe(a,p,"linePrefix",5)(g)}function p(g){const y=o.events[o.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?f(g):l(g)}function f(g){return g===null?x(g):me(g)?a.attempt(q0,f,x)(g):(a.enter("codeFlowValue"),h(g))}function h(g){return g===null||me(g)?(a.exit("codeFlowValue"),f(g)):(a.consume(g),h)}function x(g){return a.exit("codeIndented"),r(g)}}function U0(a,r,l){const o=this;return d;function d(f){return o.parser.lazy[o.now().line]?l(f):me(f)?(a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),d):Qe(a,p,"linePrefix",5)(f)}function p(f){const h=o.events[o.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?r(f):me(f)?d(f):l(f)}}const H0={name:"codeText",previous:Y0,resolve:I0,tokenize:V0};function I0(a){let r=a.length-4,l=3,o,d;if((a[l][1].type==="lineEnding"||a[l][1].type==="space")&&(a[r][1].type==="lineEnding"||a[r][1].type==="space")){for(o=l;++o<r;)if(a[o][1].type==="codeTextData"){a[l][1].type="codeTextPadding",a[r][1].type="codeTextPadding",l+=2,r-=2;break}}for(o=l-1,r++;++o<=r;)d===void 0?o!==r&&a[o][1].type!=="lineEnding"&&(d=o):(o===r||a[o][1].type==="lineEnding")&&(a[d][1].type="codeTextData",o!==d+2&&(a[d][1].end=a[o-1][1].end,a.splice(d+2,o-d-2),r-=o-d-2,o=d+2),d=void 0);return a}function Y0(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function V0(a,r,l){let o=0,d,p;return f;function f(_){return a.enter("codeText"),a.enter("codeTextSequence"),h(_)}function h(_){return _===96?(a.consume(_),o++,h):(a.exit("codeTextSequence"),x(_))}function x(_){return _===null?l(_):_===32?(a.enter("space"),a.consume(_),a.exit("space"),x):_===96?(p=a.enter("codeTextSequence"),d=0,y(_)):me(_)?(a.enter("lineEnding"),a.consume(_),a.exit("lineEnding"),x):(a.enter("codeTextData"),g(_))}function g(_){return _===null||_===32||_===96||me(_)?(a.exit("codeTextData"),x(_)):(a.consume(_),g)}function y(_){return _===96?(a.consume(_),d++,y):d===o?(a.exit("codeTextSequence"),a.exit("codeText"),r(_)):(p.type="codeTextData",g(_))}}class G0{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,l){const o=l??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(r,o):r>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(r,l,o){const d=l||0;this.setCursor(Math.trunc(r));const p=this.right.splice(this.right.length-d,Number.POSITIVE_INFINITY);return o&&wr(this.left,o),p.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),wr(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),wr(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const l=this.left.splice(r,Number.POSITIVE_INFINITY);wr(this.right,l.reverse())}else{const l=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);wr(this.left,l.reverse())}}}function wr(a,r){let l=0;if(r.length<1e4)a.push(...r);else for(;l<r.length;)a.push(...r.slice(l,l+1e4)),l+=1e4}function Zh(a){const r={};let l=-1,o,d,p,f,h,x,g;const y=new G0(a);for(;++l<y.length;){for(;l in r;)l=r[l];if(o=y.get(l),l&&o[1].type==="chunkFlow"&&y.get(l-1)[1].type==="listItemPrefix"&&(x=o[1]._tokenizer.events,p=0,p<x.length&&x[p][1].type==="lineEndingBlank"&&(p+=2),p<x.length&&x[p][1].type==="content"))for(;++p<x.length&&x[p][1].type!=="content";)x[p][1].type==="chunkText"&&(x[p][1]._isInFirstContentOfListItem=!0,p++);if(o[0]==="enter")o[1].contentType&&(Object.assign(r,K0(y,l)),l=r[l],g=!0);else if(o[1]._container){for(p=l,d=void 0;p--;)if(f=y.get(p),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(d&&(y.get(d)[1].type="lineEndingBlank"),f[1].type="lineEnding",d=p);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;d&&(o[1].end={...y.get(d)[1].start},h=y.slice(d,l),h.unshift(o),y.splice(d,l-d+1,h))}}return pn(a,0,Number.POSITIVE_INFINITY,y.slice(0)),!g}function K0(a,r){const l=a.get(r)[1],o=a.get(r)[2];let d=r-1;const p=[];let f=l._tokenizer;f||(f=o.parser[l.contentType](l.start),l._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const h=f.events,x=[],g={};let y,_,T=-1,w=l,V=0,K=0;const W=[K];for(;w;){for(;a.get(++d)[1]!==w;);p.push(d),w._tokenizer||(y=o.sliceStream(w),w.next||y.push(null),_&&f.defineSkip(w.start),w._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(y),w._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),_=w,w=w.next}for(w=l;++T<h.length;)h[T][0]==="exit"&&h[T-1][0]==="enter"&&h[T][1].type===h[T-1][1].type&&h[T][1].start.line!==h[T][1].end.line&&(K=T+1,W.push(K),w._tokenizer=void 0,w.previous=void 0,w=w.next);for(f.events=[],w?(w._tokenizer=void 0,w.previous=void 0):W.pop(),T=W.length;T--;){const U=h.slice(W[T],W[T+1]),le=p.pop();x.push([le,le+U.length-1]),a.splice(le,2,U)}for(x.reverse(),T=-1;++T<x.length;)g[V+x[T][0]]=V+x[T][1],V+=x[T][1]-x[T][0]-1;return g}const X0={resolve:F0,tokenize:Z0},Q0={partial:!0,tokenize:W0};function F0(a){return Zh(a),a}function Z0(a,r){let l;return o;function o(h){return a.enter("content"),l=a.enter("chunkContent",{contentType:"content"}),d(h)}function d(h){return h===null?p(h):me(h)?a.check(Q0,f,p)(h):(a.consume(h),d)}function p(h){return a.exit("chunkContent"),a.exit("content"),r(h)}function f(h){return a.consume(h),a.exit("chunkContent"),l.next=a.enter("chunkContent",{contentType:"content",previous:l}),l=l.next,d}}function W0(a,r,l){const o=this;return d;function d(f){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),Qe(a,p,"linePrefix")}function p(f){if(f===null||me(f))return l(f);const h=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?r(f):a.interrupt(o.parser.constructs.flow,l,r)(f)}}function Wh(a,r,l,o,d,p,f,h,x){const g=x||Number.POSITIVE_INFINITY;let y=0;return _;function _(U){return U===60?(a.enter(o),a.enter(d),a.enter(p),a.consume(U),a.exit(p),T):U===null||U===32||U===41||eu(U)?l(U):(a.enter(o),a.enter(f),a.enter(h),a.enter("chunkString",{contentType:"string"}),K(U))}function T(U){return U===62?(a.enter(p),a.consume(U),a.exit(p),a.exit(d),a.exit(o),r):(a.enter(h),a.enter("chunkString",{contentType:"string"}),w(U))}function w(U){return U===62?(a.exit("chunkString"),a.exit(h),T(U)):U===null||U===60||me(U)?l(U):(a.consume(U),U===92?V:w)}function V(U){return U===60||U===62||U===92?(a.consume(U),w):w(U)}function K(U){return!y&&(U===null||U===41||Lt(U))?(a.exit("chunkString"),a.exit(h),a.exit(f),a.exit(o),r(U)):y<g&&U===40?(a.consume(U),y++,K):U===41?(a.consume(U),y--,K):U===null||U===32||U===40||eu(U)?l(U):(a.consume(U),U===92?W:K)}function W(U){return U===40||U===41||U===92?(a.consume(U),K):K(U)}}function Jh(a,r,l,o,d,p){const f=this;let h=0,x;return g;function g(w){return a.enter(o),a.enter(d),a.consume(w),a.exit(d),a.enter(p),y}function y(w){return h>999||w===null||w===91||w===93&&!x||w===94&&!h&&"_hiddenFootnoteSupport"in f.parser.constructs?l(w):w===93?(a.exit(p),a.enter(d),a.consume(w),a.exit(d),a.exit(o),r):me(w)?(a.enter("lineEnding"),a.consume(w),a.exit("lineEnding"),y):(a.enter("chunkString",{contentType:"string"}),_(w))}function _(w){return w===null||w===91||w===93||me(w)||h++>999?(a.exit("chunkString"),y(w)):(a.consume(w),x||(x=!Pe(w)),w===92?T:_)}function T(w){return w===91||w===92||w===93?(a.consume(w),h++,_):_(w)}}function $h(a,r,l,o,d,p){let f;return h;function h(T){return T===34||T===39||T===40?(a.enter(o),a.enter(d),a.consume(T),a.exit(d),f=T===40?41:T,x):l(T)}function x(T){return T===f?(a.enter(d),a.consume(T),a.exit(d),a.exit(o),r):(a.enter(p),g(T))}function g(T){return T===f?(a.exit(p),x(f)):T===null?l(T):me(T)?(a.enter("lineEnding"),a.consume(T),a.exit("lineEnding"),Qe(a,g,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),y(T))}function y(T){return T===f||T===null||me(T)?(a.exit("chunkString"),g(T)):(a.consume(T),T===92?_:y)}function _(T){return T===f||T===92?(a.consume(T),y):y(T)}}function Tr(a,r){let l;return o;function o(d){return me(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),l=!0,o):Pe(d)?Qe(a,o,l?"linePrefix":"lineSuffix")(d):r(d)}}const J0={name:"definition",tokenize:e_},$0={partial:!0,tokenize:t_};function e_(a,r,l){const o=this;let d;return p;function p(w){return a.enter("definition"),f(w)}function f(w){return Jh.call(o,a,h,l,"definitionLabel","definitionLabelMarker","definitionLabelString")(w)}function h(w){return d=ks(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),w===58?(a.enter("definitionMarker"),a.consume(w),a.exit("definitionMarker"),x):l(w)}function x(w){return Lt(w)?Tr(a,g)(w):g(w)}function g(w){return Wh(a,y,l,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(w)}function y(w){return a.attempt($0,_,_)(w)}function _(w){return Pe(w)?Qe(a,T,"whitespace")(w):T(w)}function T(w){return w===null||me(w)?(a.exit("definition"),o.parser.defined.push(d),r(w)):l(w)}}function t_(a,r,l){return o;function o(h){return Lt(h)?Tr(a,d)(h):l(h)}function d(h){return $h(a,p,l,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function p(h){return Pe(h)?Qe(a,f,"whitespace")(h):f(h)}function f(h){return h===null||me(h)?r(h):l(h)}}const n_={name:"hardBreakEscape",tokenize:a_};function a_(a,r,l){return o;function o(p){return a.enter("hardBreakEscape"),a.consume(p),d}function d(p){return me(p)?(a.exit("hardBreakEscape"),r(p)):l(p)}}const s_={name:"headingAtx",resolve:r_,tokenize:i_};function r_(a,r){let l=a.length-2,o=3,d,p;return a[o][1].type==="whitespace"&&(o+=2),l-2>o&&a[l][1].type==="whitespace"&&(l-=2),a[l][1].type==="atxHeadingSequence"&&(o===l-1||l-4>o&&a[l-2][1].type==="whitespace")&&(l-=o+1===l?2:4),l>o&&(d={type:"atxHeadingText",start:a[o][1].start,end:a[l][1].end},p={type:"chunkText",start:a[o][1].start,end:a[l][1].end,contentType:"text"},pn(a,o,l-o+1,[["enter",d,r],["enter",p,r],["exit",p,r],["exit",d,r]])),a}function i_(a,r,l){let o=0;return d;function d(y){return a.enter("atxHeading"),p(y)}function p(y){return a.enter("atxHeadingSequence"),f(y)}function f(y){return y===35&&o++<6?(a.consume(y),f):y===null||Lt(y)?(a.exit("atxHeadingSequence"),h(y)):l(y)}function h(y){return y===35?(a.enter("atxHeadingSequence"),x(y)):y===null||me(y)?(a.exit("atxHeading"),r(y)):Pe(y)?Qe(a,h,"whitespace")(y):(a.enter("atxHeadingText"),g(y))}function x(y){return y===35?(a.consume(y),x):(a.exit("atxHeadingSequence"),h(y))}function g(y){return y===null||y===35||Lt(y)?(a.exit("atxHeadingText"),h(y)):(a.consume(y),g)}}const l_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],th=["pre","script","style","textarea"],o_={concrete:!0,name:"htmlFlow",resolveTo:d_,tokenize:p_},c_={partial:!0,tokenize:m_},u_={partial:!0,tokenize:f_};function d_(a){let r=a.length;for(;r--&&!(a[r][0]==="enter"&&a[r][1].type==="htmlFlow"););return r>1&&a[r-2][1].type==="linePrefix"&&(a[r][1].start=a[r-2][1].start,a[r+1][1].start=a[r-2][1].start,a.splice(r-2,2)),a}function p_(a,r,l){const o=this;let d,p,f,h,x;return g;function g(k){return y(k)}function y(k){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(k),_}function _(k){return k===33?(a.consume(k),T):k===47?(a.consume(k),p=!0,K):k===63?(a.consume(k),d=3,o.interrupt?r:v):dn(k)?(a.consume(k),f=String.fromCharCode(k),W):l(k)}function T(k){return k===45?(a.consume(k),d=2,w):k===91?(a.consume(k),d=5,h=0,V):dn(k)?(a.consume(k),d=4,o.interrupt?r:v):l(k)}function w(k){return k===45?(a.consume(k),o.interrupt?r:v):l(k)}function V(k){const $="CDATA[";return k===$.charCodeAt(h++)?(a.consume(k),h===$.length?o.interrupt?r:ne:V):l(k)}function K(k){return dn(k)?(a.consume(k),f=String.fromCharCode(k),W):l(k)}function W(k){if(k===null||k===47||k===62||Lt(k)){const $=k===47,pe=f.toLowerCase();return!$&&!p&&th.includes(pe)?(d=1,o.interrupt?r(k):ne(k)):l_.includes(f.toLowerCase())?(d=6,$?(a.consume(k),U):o.interrupt?r(k):ne(k)):(d=7,o.interrupt&&!o.parser.lazy[o.now().line]?l(k):p?le(k):X(k))}return k===45||It(k)?(a.consume(k),f+=String.fromCharCode(k),W):l(k)}function U(k){return k===62?(a.consume(k),o.interrupt?r:ne):l(k)}function le(k){return Pe(k)?(a.consume(k),le):Ae(k)}function X(k){return k===47?(a.consume(k),Ae):k===58||k===95||dn(k)?(a.consume(k),he):Pe(k)?(a.consume(k),X):Ae(k)}function he(k){return k===45||k===46||k===58||k===95||It(k)?(a.consume(k),he):ve(k)}function ve(k){return k===61?(a.consume(k),q):Pe(k)?(a.consume(k),ve):X(k)}function q(k){return k===null||k===60||k===61||k===62||k===96?l(k):k===34||k===39?(a.consume(k),x=k,te):Pe(k)?(a.consume(k),q):ye(k)}function te(k){return k===x?(a.consume(k),x=null,ge):k===null||me(k)?l(k):(a.consume(k),te)}function ye(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||Lt(k)?ve(k):(a.consume(k),ye)}function ge(k){return k===47||k===62||Pe(k)?X(k):l(k)}function Ae(k){return k===62?(a.consume(k),se):l(k)}function se(k){return k===null||me(k)?ne(k):Pe(k)?(a.consume(k),se):l(k)}function ne(k){return k===45&&d===2?(a.consume(k),L):k===60&&d===1?(a.consume(k),Y):k===62&&d===4?(a.consume(k),E):k===63&&d===3?(a.consume(k),v):k===93&&d===5?(a.consume(k),Se):me(k)&&(d===6||d===7)?(a.exit("htmlFlowData"),a.check(c_,R,Q)(k)):k===null||me(k)?(a.exit("htmlFlowData"),Q(k)):(a.consume(k),ne)}function Q(k){return a.check(u_,Z,R)(k)}function Z(k){return a.enter("lineEnding"),a.consume(k),a.exit("lineEnding"),I}function I(k){return k===null||me(k)?Q(k):(a.enter("htmlFlowData"),ne(k))}function L(k){return k===45?(a.consume(k),v):ne(k)}function Y(k){return k===47?(a.consume(k),f="",ie):ne(k)}function ie(k){if(k===62){const $=f.toLowerCase();return th.includes($)?(a.consume(k),E):ne(k)}return dn(k)&&f.length<8?(a.consume(k),f+=String.fromCharCode(k),ie):ne(k)}function Se(k){return k===93?(a.consume(k),v):ne(k)}function v(k){return k===62?(a.consume(k),E):k===45&&d===2?(a.consume(k),v):ne(k)}function E(k){return k===null||me(k)?(a.exit("htmlFlowData"),R(k)):(a.consume(k),E)}function R(k){return a.exit("htmlFlow"),r(k)}}function f_(a,r,l){const o=this;return d;function d(f){return me(f)?(a.enter("lineEnding"),a.consume(f),a.exit("lineEnding"),p):l(f)}function p(f){return o.parser.lazy[o.now().line]?l(f):r(f)}}function m_(a,r,l){return o;function o(d){return a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),a.attempt(ol,r,l)}}const h_={name:"htmlText",tokenize:g_};function g_(a,r,l){const o=this;let d,p,f;return h;function h(v){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(v),x}function x(v){return v===33?(a.consume(v),g):v===47?(a.consume(v),ve):v===63?(a.consume(v),X):dn(v)?(a.consume(v),ye):l(v)}function g(v){return v===45?(a.consume(v),y):v===91?(a.consume(v),p=0,V):dn(v)?(a.consume(v),le):l(v)}function y(v){return v===45?(a.consume(v),w):l(v)}function _(v){return v===null?l(v):v===45?(a.consume(v),T):me(v)?(f=_,Y(v)):(a.consume(v),_)}function T(v){return v===45?(a.consume(v),w):_(v)}function w(v){return v===62?L(v):v===45?T(v):_(v)}function V(v){const E="CDATA[";return v===E.charCodeAt(p++)?(a.consume(v),p===E.length?K:V):l(v)}function K(v){return v===null?l(v):v===93?(a.consume(v),W):me(v)?(f=K,Y(v)):(a.consume(v),K)}function W(v){return v===93?(a.consume(v),U):K(v)}function U(v){return v===62?L(v):v===93?(a.consume(v),U):K(v)}function le(v){return v===null||v===62?L(v):me(v)?(f=le,Y(v)):(a.consume(v),le)}function X(v){return v===null?l(v):v===63?(a.consume(v),he):me(v)?(f=X,Y(v)):(a.consume(v),X)}function he(v){return v===62?L(v):X(v)}function ve(v){return dn(v)?(a.consume(v),q):l(v)}function q(v){return v===45||It(v)?(a.consume(v),q):te(v)}function te(v){return me(v)?(f=te,Y(v)):Pe(v)?(a.consume(v),te):L(v)}function ye(v){return v===45||It(v)?(a.consume(v),ye):v===47||v===62||Lt(v)?ge(v):l(v)}function ge(v){return v===47?(a.consume(v),L):v===58||v===95||dn(v)?(a.consume(v),Ae):me(v)?(f=ge,Y(v)):Pe(v)?(a.consume(v),ge):L(v)}function Ae(v){return v===45||v===46||v===58||v===95||It(v)?(a.consume(v),Ae):se(v)}function se(v){return v===61?(a.consume(v),ne):me(v)?(f=se,Y(v)):Pe(v)?(a.consume(v),se):ge(v)}function ne(v){return v===null||v===60||v===61||v===62||v===96?l(v):v===34||v===39?(a.consume(v),d=v,Q):me(v)?(f=ne,Y(v)):Pe(v)?(a.consume(v),ne):(a.consume(v),Z)}function Q(v){return v===d?(a.consume(v),d=void 0,I):v===null?l(v):me(v)?(f=Q,Y(v)):(a.consume(v),Q)}function Z(v){return v===null||v===34||v===39||v===60||v===61||v===96?l(v):v===47||v===62||Lt(v)?ge(v):(a.consume(v),Z)}function I(v){return v===47||v===62||Lt(v)?ge(v):l(v)}function L(v){return v===62?(a.consume(v),a.exit("htmlTextData"),a.exit("htmlText"),r):l(v)}function Y(v){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(v),a.exit("lineEnding"),ie}function ie(v){return Pe(v)?Qe(a,Se,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):Se(v)}function Se(v){return a.enter("htmlTextData"),f(v)}}const bu={name:"labelEnd",resolveAll:__,resolveTo:k_,tokenize:w_},x_={tokenize:v_},y_={tokenize:S_},b_={tokenize:T_};function __(a){let r=-1;const l=[];for(;++r<a.length;){const o=a[r][1];if(l.push(a[r]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const d=o.type==="labelImage"?4:2;o.type="data",r+=d}}return a.length!==l.length&&pn(a,0,a.length,l),a}function k_(a,r){let l=a.length,o=0,d,p,f,h;for(;l--;)if(d=a[l][1],p){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;a[l][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(f){if(a[l][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(p=l,d.type!=="labelLink")){o=2;break}}else d.type==="labelEnd"&&(f=l);const x={type:a[p][1].type==="labelLink"?"link":"image",start:{...a[p][1].start},end:{...a[a.length-1][1].end}},g={type:"label",start:{...a[p][1].start},end:{...a[f][1].end}},y={type:"labelText",start:{...a[p+o+2][1].end},end:{...a[f-2][1].start}};return h=[["enter",x,r],["enter",g,r]],h=en(h,a.slice(p+1,p+o+3)),h=en(h,[["enter",y,r]]),h=en(h,yu(r.parser.constructs.insideSpan.null,a.slice(p+o+4,f-3),r)),h=en(h,[["exit",y,r],a[f-2],a[f-1],["exit",g,r]]),h=en(h,a.slice(f+1)),h=en(h,[["exit",x,r]]),pn(a,p,a.length,h),a}function w_(a,r,l){const o=this;let d=o.events.length,p,f;for(;d--;)if((o.events[d][1].type==="labelImage"||o.events[d][1].type==="labelLink")&&!o.events[d][1]._balanced){p=o.events[d][1];break}return h;function h(T){return p?p._inactive?_(T):(f=o.parser.defined.includes(ks(o.sliceSerialize({start:p.end,end:o.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(T),a.exit("labelMarker"),a.exit("labelEnd"),x):l(T)}function x(T){return T===40?a.attempt(x_,y,f?y:_)(T):T===91?a.attempt(y_,y,f?g:_)(T):f?y(T):_(T)}function g(T){return a.attempt(b_,y,_)(T)}function y(T){return r(T)}function _(T){return p._balanced=!0,l(T)}}function v_(a,r,l){return o;function o(_){return a.enter("resource"),a.enter("resourceMarker"),a.consume(_),a.exit("resourceMarker"),d}function d(_){return Lt(_)?Tr(a,p)(_):p(_)}function p(_){return _===41?y(_):Wh(a,f,h,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(_)}function f(_){return Lt(_)?Tr(a,x)(_):y(_)}function h(_){return l(_)}function x(_){return _===34||_===39||_===40?$h(a,g,l,"resourceTitle","resourceTitleMarker","resourceTitleString")(_):y(_)}function g(_){return Lt(_)?Tr(a,y)(_):y(_)}function y(_){return _===41?(a.enter("resourceMarker"),a.consume(_),a.exit("resourceMarker"),a.exit("resource"),r):l(_)}}function S_(a,r,l){const o=this;return d;function d(h){return Jh.call(o,a,p,f,"reference","referenceMarker","referenceString")(h)}function p(h){return o.parser.defined.includes(ks(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?r(h):l(h)}function f(h){return l(h)}}function T_(a,r,l){return o;function o(p){return a.enter("reference"),a.enter("referenceMarker"),a.consume(p),a.exit("referenceMarker"),d}function d(p){return p===93?(a.enter("referenceMarker"),a.consume(p),a.exit("referenceMarker"),a.exit("reference"),r):l(p)}}const E_={name:"labelStartImage",resolveAll:bu.resolveAll,tokenize:C_};function C_(a,r,l){const o=this;return d;function d(h){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(h),a.exit("labelImageMarker"),p}function p(h){return h===91?(a.enter("labelMarker"),a.consume(h),a.exit("labelMarker"),a.exit("labelImage"),f):l(h)}function f(h){return h===94&&"_hiddenFootnoteSupport"in o.parser.constructs?l(h):r(h)}}const A_={name:"labelStartLink",resolveAll:bu.resolveAll,tokenize:j_};function j_(a,r,l){const o=this;return d;function d(f){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(f),a.exit("labelMarker"),a.exit("labelLink"),p}function p(f){return f===94&&"_hiddenFootnoteSupport"in o.parser.constructs?l(f):r(f)}}const Bc={name:"lineEnding",tokenize:N_};function N_(a,r){return l;function l(o){return a.enter("lineEnding"),a.consume(o),a.exit("lineEnding"),Qe(a,r,"linePrefix")}}const tl={name:"thematicBreak",tokenize:L_};function L_(a,r,l){let o=0,d;return p;function p(g){return a.enter("thematicBreak"),f(g)}function f(g){return d=g,h(g)}function h(g){return g===d?(a.enter("thematicBreakSequence"),x(g)):o>=3&&(g===null||me(g))?(a.exit("thematicBreak"),r(g)):l(g)}function x(g){return g===d?(a.consume(g),o++,x):(a.exit("thematicBreakSequence"),Pe(g)?Qe(a,h,"whitespace")(g):h(g))}}const Nt={continuation:{tokenize:R_},exit:z_,name:"list",tokenize:M_},O_={partial:!0,tokenize:q_},D_={partial:!0,tokenize:P_};function M_(a,r,l){const o=this,d=o.events[o.events.length-1];let p=d&&d[1].type==="linePrefix"?d[2].sliceSerialize(d[1],!0).length:0,f=0;return h;function h(w){const V=o.containerState.type||(w===42||w===43||w===45?"listUnordered":"listOrdered");if(V==="listUnordered"?!o.containerState.marker||w===o.containerState.marker:tu(w)){if(o.containerState.type||(o.containerState.type=V,a.enter(V,{_container:!0})),V==="listUnordered")return a.enter("listItemPrefix"),w===42||w===45?a.check(tl,l,g)(w):g(w);if(!o.interrupt||w===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),x(w)}return l(w)}function x(w){return tu(w)&&++f<10?(a.consume(w),x):(!o.interrupt||f<2)&&(o.containerState.marker?w===o.containerState.marker:w===41||w===46)?(a.exit("listItemValue"),g(w)):l(w)}function g(w){return a.enter("listItemMarker"),a.consume(w),a.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||w,a.check(ol,o.interrupt?l:y,a.attempt(O_,T,_))}function y(w){return o.containerState.initialBlankLine=!0,p++,T(w)}function _(w){return Pe(w)?(a.enter("listItemPrefixWhitespace"),a.consume(w),a.exit("listItemPrefixWhitespace"),T):l(w)}function T(w){return o.containerState.size=p+o.sliceSerialize(a.exit("listItemPrefix"),!0).length,r(w)}}function R_(a,r,l){const o=this;return o.containerState._closeFlow=void 0,a.check(ol,d,p);function d(h){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Qe(a,r,"listItemIndent",o.containerState.size+1)(h)}function p(h){return o.containerState.furtherBlankLines||!Pe(h)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,f(h)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,a.attempt(D_,r,f)(h))}function f(h){return o.containerState._closeFlow=!0,o.interrupt=void 0,Qe(a,a.attempt(Nt,r,l),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h)}}function P_(a,r,l){const o=this;return Qe(a,d,"listItemIndent",o.containerState.size+1);function d(p){const f=o.events[o.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===o.containerState.size?r(p):l(p)}}function z_(a){a.exit(this.containerState.type)}function q_(a,r,l){const o=this;return Qe(a,d,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function d(p){const f=o.events[o.events.length-1];return!Pe(p)&&f&&f[1].type==="listItemPrefixWhitespace"?r(p):l(p)}}const nh={name:"setextUnderline",resolveTo:B_,tokenize:U_};function B_(a,r){let l=a.length,o,d,p;for(;l--;)if(a[l][0]==="enter"){if(a[l][1].type==="content"){o=l;break}a[l][1].type==="paragraph"&&(d=l)}else a[l][1].type==="content"&&a.splice(l,1),!p&&a[l][1].type==="definition"&&(p=l);const f={type:"setextHeading",start:{...a[o][1].start},end:{...a[a.length-1][1].end}};return a[d][1].type="setextHeadingText",p?(a.splice(d,0,["enter",f,r]),a.splice(p+1,0,["exit",a[o][1],r]),a[o][1].end={...a[p][1].end}):a[o][1]=f,a.push(["exit",f,r]),a}function U_(a,r,l){const o=this;let d;return p;function p(g){let y=o.events.length,_;for(;y--;)if(o.events[y][1].type!=="lineEnding"&&o.events[y][1].type!=="linePrefix"&&o.events[y][1].type!=="content"){_=o.events[y][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||_)?(a.enter("setextHeadingLine"),d=g,f(g)):l(g)}function f(g){return a.enter("setextHeadingLineSequence"),h(g)}function h(g){return g===d?(a.consume(g),h):(a.exit("setextHeadingLineSequence"),Pe(g)?Qe(a,x,"lineSuffix")(g):x(g))}function x(g){return g===null||me(g)?(a.exit("setextHeadingLine"),r(g)):l(g)}}const H_={tokenize:I_};function I_(a){const r=this,l=a.attempt(ol,o,a.attempt(this.parser.constructs.flowInitial,d,Qe(a,a.attempt(this.parser.constructs.flow,d,a.attempt(X0,d)),"linePrefix")));return l;function o(p){if(p===null){a.consume(p);return}return a.enter("lineEndingBlank"),a.consume(p),a.exit("lineEndingBlank"),r.currentConstruct=void 0,l}function d(p){if(p===null){a.consume(p);return}return a.enter("lineEnding"),a.consume(p),a.exit("lineEnding"),r.currentConstruct=void 0,l}}const Y_={resolveAll:tg()},V_=eg("string"),G_=eg("text");function eg(a){return{resolveAll:tg(a==="text"?K_:void 0),tokenize:r};function r(l){const o=this,d=this.parser.constructs[a],p=l.attempt(d,f,h);return f;function f(y){return g(y)?p(y):h(y)}function h(y){if(y===null){l.consume(y);return}return l.enter("data"),l.consume(y),x}function x(y){return g(y)?(l.exit("data"),p(y)):(l.consume(y),x)}function g(y){if(y===null)return!0;const _=d[y];let T=-1;if(_)for(;++T<_.length;){const w=_[T];if(!w.previous||w.previous.call(o,o.previous))return!0}return!1}}}function tg(a){return r;function r(l,o){let d=-1,p;for(;++d<=l.length;)p===void 0?l[d]&&l[d][1].type==="data"&&(p=d,d++):(!l[d]||l[d][1].type!=="data")&&(d!==p+2&&(l[p][1].end=l[d-1][1].end,l.splice(p+2,d-p-2),d=p+2),p=void 0);return a?a(l,o):l}}function K_(a,r){let l=0;for(;++l<=a.length;)if((l===a.length||a[l][1].type==="lineEnding")&&a[l-1][1].type==="data"){const o=a[l-1][1],d=r.sliceStream(o);let p=d.length,f=-1,h=0,x;for(;p--;){const g=d[p];if(typeof g=="string"){for(f=g.length;g.charCodeAt(f-1)===32;)h++,f--;if(f)break;f=-1}else if(g===-2)x=!0,h++;else if(g!==-1){p++;break}}if(r._contentTypeTextTrailing&&l===a.length&&(h=0),h){const g={type:l===a.length||x||h<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:p?f:o.start._bufferIndex+f,_index:o.start._index+p,line:o.end.line,column:o.end.column-h,offset:o.end.offset-h},end:{...o.end}};o.end={...g.start},o.start.offset===o.end.offset?Object.assign(o,g):(a.splice(l,0,["enter",g,r],["exit",g,r]),l+=2)}l++}return a}const X_={42:Nt,43:Nt,45:Nt,48:Nt,49:Nt,50:Nt,51:Nt,52:Nt,53:Nt,54:Nt,55:Nt,56:Nt,57:Nt,62:Xh},Q_={91:J0},F_={[-2]:qc,[-1]:qc,32:qc},Z_={35:s_,42:tl,45:[nh,tl],60:o_,61:nh,95:tl,96:eh,126:eh},W_={38:Fh,92:Qh},J_={[-5]:Bc,[-4]:Bc,[-3]:Bc,33:E_,38:Fh,42:nu,60:[A0,h_],91:A_,92:[n_,Qh],93:bu,95:nu,96:H0},$_={null:[nu,Y_]},ek={null:[42,95]},tk={null:[]},nk=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:ek,contentInitial:Q_,disable:tk,document:X_,flow:Z_,flowInitial:F_,insideSpan:$_,string:W_,text:J_},Symbol.toStringTag,{value:"Module"}));function ak(a,r,l){let o={_bufferIndex:-1,_index:0,line:l&&l.line||1,column:l&&l.column||1,offset:l&&l.offset||0};const d={},p=[];let f=[],h=[];const x={attempt:te(ve),check:te(q),consume:le,enter:X,exit:he,interrupt:te(q,{interrupt:!0})},g={code:null,containerState:{},defineSkip:K,events:[],now:V,parser:a,previous:null,sliceSerialize:T,sliceStream:w,write:_};let y=r.tokenize.call(g,x);return r.resolveAll&&p.push(r),g;function _(se){return f=en(f,se),W(),f[f.length-1]!==null?[]:(ye(r,0),g.events=yu(p,g.events,g),g.events)}function T(se,ne){return rk(w(se),ne)}function w(se){return sk(f,se)}function V(){const{_bufferIndex:se,_index:ne,line:Q,column:Z,offset:I}=o;return{_bufferIndex:se,_index:ne,line:Q,column:Z,offset:I}}function K(se){d[se.line]=se.column,Ae()}function W(){let se;for(;o._index<f.length;){const ne=f[o._index];if(typeof ne=="string")for(se=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===se&&o._bufferIndex<ne.length;)U(ne.charCodeAt(o._bufferIndex));else U(ne)}}function U(se){y=y(se)}function le(se){me(se)?(o.line++,o.column=1,o.offset+=se===-3?2:1,Ae()):se!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===f[o._index].length&&(o._bufferIndex=-1,o._index++)),g.previous=se}function X(se,ne){const Q=ne||{};return Q.type=se,Q.start=V(),g.events.push(["enter",Q,g]),h.push(Q),Q}function he(se){const ne=h.pop();return ne.end=V(),g.events.push(["exit",ne,g]),ne}function ve(se,ne){ye(se,ne.from)}function q(se,ne){ne.restore()}function te(se,ne){return Q;function Q(Z,I,L){let Y,ie,Se,v;return Array.isArray(Z)?R(Z):"tokenize"in Z?R([Z]):E(Z);function E(oe){return je;function je(We){const He=We!==null&&oe[We],Yt=We!==null&&oe.null,fn=[...Array.isArray(He)?He:He?[He]:[],...Array.isArray(Yt)?Yt:Yt?[Yt]:[]];return R(fn)(We)}}function R(oe){return Y=oe,ie=0,oe.length===0?L:k(oe[ie])}function k(oe){return je;function je(We){return v=ge(),Se=oe,oe.partial||(g.currentConstruct=oe),oe.name&&g.parser.constructs.disable.null.includes(oe.name)?pe():oe.tokenize.call(ne?Object.assign(Object.create(g),ne):g,x,$,pe)(We)}}function $(oe){return se(Se,v),I}function pe(oe){return v.restore(),++ie<Y.length?k(Y[ie]):L}}}function ye(se,ne){se.resolveAll&&!p.includes(se)&&p.push(se),se.resolve&&pn(g.events,ne,g.events.length-ne,se.resolve(g.events.slice(ne),g)),se.resolveTo&&(g.events=se.resolveTo(g.events,g))}function ge(){const se=V(),ne=g.previous,Q=g.currentConstruct,Z=g.events.length,I=Array.from(h);return{from:Z,restore:L};function L(){o=se,g.previous=ne,g.currentConstruct=Q,g.events.length=Z,h=I,Ae()}}function Ae(){o.line in d&&o.column<2&&(o.column=d[o.line],o.offset+=d[o.line]-1)}}function sk(a,r){const l=r.start._index,o=r.start._bufferIndex,d=r.end._index,p=r.end._bufferIndex;let f;if(l===d)f=[a[l].slice(o,p)];else{if(f=a.slice(l,d),o>-1){const h=f[0];typeof h=="string"?f[0]=h.slice(o):f.shift()}p>0&&f.push(a[d].slice(0,p))}return f}function rk(a,r){let l=-1;const o=[];let d;for(;++l<a.length;){const p=a[l];let f;if(typeof p=="string")f=p;else switch(p){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=r?" ":"	";break}case-1:{if(!r&&d)continue;f=" ";break}default:f=String.fromCharCode(p)}d=p===-2,o.push(f)}return o.join("")}function ik(a){const o={constructs:f0([nk,...(a||{}).extensions||[]]),content:d(k0),defined:[],document:d(v0),flow:d(H_),lazy:{},string:d(V_),text:d(G_)};return o;function d(p){return f;function f(h){return ak(o,p,h)}}}function lk(a){for(;!Zh(a););return a}const ah=/[\0\t\n\r]/g;function ok(){let a=1,r="",l=!0,o;return d;function d(p,f,h){const x=[];let g,y,_,T,w;for(p=r+(typeof p=="string"?p.toString():new TextDecoder(f||void 0).decode(p)),_=0,r="",l&&(p.charCodeAt(0)===65279&&_++,l=void 0);_<p.length;){if(ah.lastIndex=_,g=ah.exec(p),T=g&&g.index!==void 0?g.index:p.length,w=p.charCodeAt(T),!g){r=p.slice(_);break}if(w===10&&_===T&&o)x.push(-3),o=void 0;else switch(o&&(x.push(-5),o=void 0),_<T&&(x.push(p.slice(_,T)),a+=T-_),w){case 0:{x.push(65533),a++;break}case 9:{for(y=Math.ceil(a/4)*4,x.push(-2);a++<y;)x.push(-1);break}case 10:{x.push(-4),a=1;break}default:o=!0,a=1}_=T+1}return h&&(o&&x.push(-5),r&&x.push(r),x.push(null)),x}}const ck=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function uk(a){return a.replace(ck,dk)}function dk(a,r,l){if(r)return r;if(l.charCodeAt(0)===35){const d=l.charCodeAt(1),p=d===120||d===88;return Kh(l.slice(p?2:1),p?16:10)}return xu(l)||a}const ng={}.hasOwnProperty;function pk(a,r,l){return r&&typeof r=="object"&&(l=r,r=void 0),fk(l)(lk(ik(l).document().write(ok()(a,r,!0))))}function fk(a){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:p(Na),autolinkProtocol:ge,autolinkEmail:ge,atxHeading:p(Aa),blockQuote:p(Yt),characterEscape:ge,characterReference:ge,codeFenced:p(fn),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:p(fn,f),codeText:p(Ts,f),codeTextData:ge,data:ge,codeFlowValue:ge,definition:p(Dr),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:p(mn),hardBreakEscape:p(ja),hardBreakTrailing:p(ja),htmlFlow:p(Mr,f),htmlFlowData:ge,htmlText:p(Mr,f),htmlTextData:ge,image:p(Rr),label:f,link:p(Na),listItem:p(Es),listItemValue:T,listOrdered:p(La,_),listUnordered:p(La),paragraph:p(dl),reference:k,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:p(Aa),strong:p(pl),thematicBreak:p(fl)},exit:{atxHeading:x(),atxHeadingSequence:ve,autolink:x(),autolinkEmail:He,autolinkProtocol:We,blockQuote:x(),characterEscapeValue:Ae,characterReferenceMarkerHexadecimal:pe,characterReferenceMarkerNumeric:pe,characterReferenceValue:oe,characterReference:je,codeFenced:x(W),codeFencedFence:K,codeFencedFenceInfo:w,codeFencedFenceMeta:V,codeFlowValue:Ae,codeIndented:x(U),codeText:x(I),codeTextData:Ae,data:Ae,definition:x(),definitionDestinationString:he,definitionLabelString:le,definitionTitleString:X,emphasis:x(),hardBreakEscape:x(ne),hardBreakTrailing:x(ne),htmlFlow:x(Q),htmlFlowData:Ae,htmlText:x(Z),htmlTextData:Ae,image:x(Y),label:Se,labelText:ie,lineEnding:se,link:x(L),listItem:x(),listOrdered:x(),listUnordered:x(),paragraph:x(),referenceString:$,resourceDestinationString:v,resourceTitleString:E,resource:R,setextHeading:x(ye),setextHeadingLineSequence:te,setextHeadingText:q,strong:x(),thematicBreak:x()}};ag(r,(a||{}).mdastExtensions||[]);const l={};return o;function o(P){let F={type:"root",children:[]};const fe={stack:[F],tokenStack:[],config:r,enter:h,exit:g,buffer:f,resume:y,data:l},Te=[];let ze=-1;for(;++ze<P.length;)if(P[ze][1].type==="listOrdered"||P[ze][1].type==="listUnordered")if(P[ze][0]==="enter")Te.push(ze);else{const Dt=Te.pop();ze=d(P,Dt,ze)}for(ze=-1;++ze<P.length;){const Dt=r[P[ze][0]];ng.call(Dt,P[ze][1].type)&&Dt[P[ze][1].type].call(Object.assign({sliceSerialize:P[ze][2].sliceSerialize},fe),P[ze][1])}if(fe.tokenStack.length>0){const Dt=fe.tokenStack[fe.tokenStack.length-1];(Dt[1]||sh).call(fe,void 0,Dt[0])}for(F.position={start:ia(P.length>0?P[0][1].start:{line:1,column:1,offset:0}),end:ia(P.length>0?P[P.length-2][1].end:{line:1,column:1,offset:0})},ze=-1;++ze<r.transforms.length;)F=r.transforms[ze](F)||F;return F}function d(P,F,fe){let Te=F-1,ze=-1,Dt=!1,hn,_t,ot,wt;for(;++Te<=fe;){const Ge=P[Te];switch(Ge[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ge[0]==="enter"?ze++:ze--,wt=void 0;break}case"lineEndingBlank":{Ge[0]==="enter"&&(hn&&!wt&&!ze&&!ot&&(ot=Te),wt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:wt=void 0}if(!ze&&Ge[0]==="enter"&&Ge[1].type==="listItemPrefix"||ze===-1&&Ge[0]==="exit"&&(Ge[1].type==="listUnordered"||Ge[1].type==="listOrdered")){if(hn){let Rn=Te;for(_t=void 0;Rn--;){const tn=P[Rn];if(tn[1].type==="lineEnding"||tn[1].type==="lineEndingBlank"){if(tn[0]==="exit")continue;_t&&(P[_t][1].type="lineEndingBlank",Dt=!0),tn[1].type="lineEnding",_t=Rn}else if(!(tn[1].type==="linePrefix"||tn[1].type==="blockQuotePrefix"||tn[1].type==="blockQuotePrefixWhitespace"||tn[1].type==="blockQuoteMarker"||tn[1].type==="listItemIndent"))break}ot&&(!_t||ot<_t)&&(hn._spread=!0),hn.end=Object.assign({},_t?P[_t][1].start:Ge[1].end),P.splice(_t||Te,0,["exit",hn,Ge[2]]),Te++,fe++}if(Ge[1].type==="listItemPrefix"){const Rn={type:"listItem",_spread:!1,start:Object.assign({},Ge[1].start),end:void 0};hn=Rn,P.splice(Te,0,["enter",Rn,Ge[2]]),Te++,fe++,ot=void 0,wt=!0}}}return P[F][1]._spread=Dt,fe}function p(P,F){return fe;function fe(Te){h.call(this,P(Te),Te),F&&F.call(this,Te)}}function f(){this.stack.push({type:"fragment",children:[]})}function h(P,F,fe){this.stack[this.stack.length-1].children.push(P),this.stack.push(P),this.tokenStack.push([F,fe||void 0]),P.position={start:ia(F.start),end:void 0}}function x(P){return F;function F(fe){P&&P.call(this,fe),g.call(this,fe)}}function g(P,F){const fe=this.stack.pop(),Te=this.tokenStack.pop();if(Te)Te[0].type!==P.type&&(F?F.call(this,P,Te[0]):(Te[1]||sh).call(this,P,Te[0]));else throw new Error("Cannot close `"+P.type+"` ("+Sr({start:P.start,end:P.end})+"): it’s not open");fe.position.end=ia(P.end)}function y(){return d0(this.stack.pop())}function _(){this.data.expectingFirstListItemValue=!0}function T(P){if(this.data.expectingFirstListItemValue){const F=this.stack[this.stack.length-2];F.start=Number.parseInt(this.sliceSerialize(P),10),this.data.expectingFirstListItemValue=void 0}}function w(){const P=this.resume(),F=this.stack[this.stack.length-1];F.lang=P}function V(){const P=this.resume(),F=this.stack[this.stack.length-1];F.meta=P}function K(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function W(){const P=this.resume(),F=this.stack[this.stack.length-1];F.value=P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function U(){const P=this.resume(),F=this.stack[this.stack.length-1];F.value=P.replace(/(\r?\n|\r)$/g,"")}function le(P){const F=this.resume(),fe=this.stack[this.stack.length-1];fe.label=F,fe.identifier=ks(this.sliceSerialize(P)).toLowerCase()}function X(){const P=this.resume(),F=this.stack[this.stack.length-1];F.title=P}function he(){const P=this.resume(),F=this.stack[this.stack.length-1];F.url=P}function ve(P){const F=this.stack[this.stack.length-1];if(!F.depth){const fe=this.sliceSerialize(P).length;F.depth=fe}}function q(){this.data.setextHeadingSlurpLineEnding=!0}function te(P){const F=this.stack[this.stack.length-1];F.depth=this.sliceSerialize(P).codePointAt(0)===61?1:2}function ye(){this.data.setextHeadingSlurpLineEnding=void 0}function ge(P){const fe=this.stack[this.stack.length-1].children;let Te=fe[fe.length-1];(!Te||Te.type!=="text")&&(Te=bt(),Te.position={start:ia(P.start),end:void 0},fe.push(Te)),this.stack.push(Te)}function Ae(P){const F=this.stack.pop();F.value+=this.sliceSerialize(P),F.position.end=ia(P.end)}function se(P){const F=this.stack[this.stack.length-1];if(this.data.atHardBreak){const fe=F.children[F.children.length-1];fe.position.end=ia(P.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(F.type)&&(ge.call(this,P),Ae.call(this,P))}function ne(){this.data.atHardBreak=!0}function Q(){const P=this.resume(),F=this.stack[this.stack.length-1];F.value=P}function Z(){const P=this.resume(),F=this.stack[this.stack.length-1];F.value=P}function I(){const P=this.resume(),F=this.stack[this.stack.length-1];F.value=P}function L(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const F=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=F,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function Y(){const P=this.stack[this.stack.length-1];if(this.data.inReference){const F=this.data.referenceType||"shortcut";P.type+="Reference",P.referenceType=F,delete P.url,delete P.title}else delete P.identifier,delete P.label;this.data.referenceType=void 0}function ie(P){const F=this.sliceSerialize(P),fe=this.stack[this.stack.length-2];fe.label=uk(F),fe.identifier=ks(F).toLowerCase()}function Se(){const P=this.stack[this.stack.length-1],F=this.resume(),fe=this.stack[this.stack.length-1];if(this.data.inReference=!0,fe.type==="link"){const Te=P.children;fe.children=Te}else fe.alt=F}function v(){const P=this.resume(),F=this.stack[this.stack.length-1];F.url=P}function E(){const P=this.resume(),F=this.stack[this.stack.length-1];F.title=P}function R(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function $(P){const F=this.resume(),fe=this.stack[this.stack.length-1];fe.label=F,fe.identifier=ks(this.sliceSerialize(P)).toLowerCase(),this.data.referenceType="full"}function pe(P){this.data.characterReferenceType=P.type}function oe(P){const F=this.sliceSerialize(P),fe=this.data.characterReferenceType;let Te;fe?(Te=Kh(F,fe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Te=xu(F);const ze=this.stack[this.stack.length-1];ze.value+=Te}function je(P){const F=this.stack.pop();F.position.end=ia(P.end)}function We(P){Ae.call(this,P);const F=this.stack[this.stack.length-1];F.url=this.sliceSerialize(P)}function He(P){Ae.call(this,P);const F=this.stack[this.stack.length-1];F.url="mailto:"+this.sliceSerialize(P)}function Yt(){return{type:"blockquote",children:[]}}function fn(){return{type:"code",lang:null,meta:null,value:""}}function Ts(){return{type:"inlineCode",value:""}}function Dr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function mn(){return{type:"emphasis",children:[]}}function Aa(){return{type:"heading",depth:0,children:[]}}function ja(){return{type:"break"}}function Mr(){return{type:"html",value:""}}function Rr(){return{type:"image",title:null,url:"",alt:null}}function Na(){return{type:"link",title:null,url:"",children:[]}}function La(P){return{type:"list",ordered:P.type==="listOrdered",start:null,spread:P._spread,children:[]}}function Es(P){return{type:"listItem",spread:P._spread,checked:null,children:[]}}function dl(){return{type:"paragraph",children:[]}}function pl(){return{type:"strong",children:[]}}function bt(){return{type:"text",value:""}}function fl(){return{type:"thematicBreak"}}}function ia(a){return{line:a.line,column:a.column,offset:a.offset}}function ag(a,r){let l=-1;for(;++l<r.length;){const o=r[l];Array.isArray(o)?ag(a,o):mk(a,o)}}function mk(a,r){let l;for(l in r)if(ng.call(r,l))switch(l){case"canContainEols":{const o=r[l];o&&a[l].push(...o);break}case"transforms":{const o=r[l];o&&a[l].push(...o);break}case"enter":case"exit":{const o=r[l];o&&Object.assign(a[l],o);break}}}function sh(a,r){throw a?new Error("Cannot close `"+a.type+"` ("+Sr({start:a.start,end:a.end})+"): a different token (`"+r.type+"`, "+Sr({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+Sr({start:r.start,end:r.end})+") is still open")}function hk(a){const r=this;r.parser=l;function l(o){return pk(o,{...r.data("settings"),...a,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function gk(a,r){const l={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(r),!0)};return a.patch(r,l),a.applyData(r,l)}function xk(a,r){const l={type:"element",tagName:"br",properties:{},children:[]};return a.patch(r,l),[a.applyData(r,l),{type:"text",value:`
`}]}function yk(a,r){const l=r.value?r.value+`
`:"",o={},d=r.lang?r.lang.split(/\s+/):[];d.length>0&&(o.className=["language-"+d[0]]);let p={type:"element",tagName:"code",properties:o,children:[{type:"text",value:l}]};return r.meta&&(p.data={meta:r.meta}),a.patch(r,p),p=a.applyData(r,p),p={type:"element",tagName:"pre",properties:{},children:[p]},a.patch(r,p),p}function bk(a,r){const l={type:"element",tagName:"del",properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}function _k(a,r){const l={type:"element",tagName:"em",properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}function kk(a,r){const l=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",o=String(r.identifier).toUpperCase(),d=Ss(o.toLowerCase()),p=a.footnoteOrder.indexOf(o);let f,h=a.footnoteCounts.get(o);h===void 0?(h=0,a.footnoteOrder.push(o),f=a.footnoteOrder.length):f=p+1,h+=1,a.footnoteCounts.set(o,h);const x={type:"element",tagName:"a",properties:{href:"#"+l+"fn-"+d,id:l+"fnref-"+d+(h>1?"-"+h:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};a.patch(r,x);const g={type:"element",tagName:"sup",properties:{},children:[x]};return a.patch(r,g),a.applyData(r,g)}function wk(a,r){const l={type:"element",tagName:"h"+r.depth,properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}function vk(a,r){if(a.options.allowDangerousHtml){const l={type:"raw",value:r.value};return a.patch(r,l),a.applyData(r,l)}}function sg(a,r){const l=r.referenceType;let o="]";if(l==="collapsed"?o+="[]":l==="full"&&(o+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+o}];const d=a.all(r),p=d[0];p&&p.type==="text"?p.value="["+p.value:d.unshift({type:"text",value:"["});const f=d[d.length-1];return f&&f.type==="text"?f.value+=o:d.push({type:"text",value:o}),d}function Sk(a,r){const l=String(r.identifier).toUpperCase(),o=a.definitionById.get(l);if(!o)return sg(a,r);const d={src:Ss(o.url||""),alt:r.alt};o.title!==null&&o.title!==void 0&&(d.title=o.title);const p={type:"element",tagName:"img",properties:d,children:[]};return a.patch(r,p),a.applyData(r,p)}function Tk(a,r){const l={src:Ss(r.url)};r.alt!==null&&r.alt!==void 0&&(l.alt=r.alt),r.title!==null&&r.title!==void 0&&(l.title=r.title);const o={type:"element",tagName:"img",properties:l,children:[]};return a.patch(r,o),a.applyData(r,o)}function Ek(a,r){const l={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};a.patch(r,l);const o={type:"element",tagName:"code",properties:{},children:[l]};return a.patch(r,o),a.applyData(r,o)}function Ck(a,r){const l=String(r.identifier).toUpperCase(),o=a.definitionById.get(l);if(!o)return sg(a,r);const d={href:Ss(o.url||"")};o.title!==null&&o.title!==void 0&&(d.title=o.title);const p={type:"element",tagName:"a",properties:d,children:a.all(r)};return a.patch(r,p),a.applyData(r,p)}function Ak(a,r){const l={href:Ss(r.url)};r.title!==null&&r.title!==void 0&&(l.title=r.title);const o={type:"element",tagName:"a",properties:l,children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function jk(a,r,l){const o=a.all(r),d=l?Nk(l):rg(r),p={},f=[];if(typeof r.checked=="boolean"){const y=o[0];let _;y&&y.type==="element"&&y.tagName==="p"?_=y:(_={type:"element",tagName:"p",properties:{},children:[]},o.unshift(_)),_.children.length>0&&_.children.unshift({type:"text",value:" "}),_.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),p.className=["task-list-item"]}let h=-1;for(;++h<o.length;){const y=o[h];(d||h!==0||y.type!=="element"||y.tagName!=="p")&&f.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!d?f.push(...y.children):f.push(y)}const x=o[o.length-1];x&&(d||x.type!=="element"||x.tagName!=="p")&&f.push({type:"text",value:`
`});const g={type:"element",tagName:"li",properties:p,children:f};return a.patch(r,g),a.applyData(r,g)}function Nk(a){let r=!1;if(a.type==="list"){r=a.spread||!1;const l=a.children;let o=-1;for(;!r&&++o<l.length;)r=rg(l[o])}return r}function rg(a){const r=a.spread;return r??a.children.length>1}function Lk(a,r){const l={},o=a.all(r);let d=-1;for(typeof r.start=="number"&&r.start!==1&&(l.start=r.start);++d<o.length;){const f=o[d];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){l.className=["contains-task-list"];break}}const p={type:"element",tagName:r.ordered?"ol":"ul",properties:l,children:a.wrap(o,!0)};return a.patch(r,p),a.applyData(r,p)}function Ok(a,r){const l={type:"element",tagName:"p",properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}function Dk(a,r){const l={type:"root",children:a.wrap(a.all(r))};return a.patch(r,l),a.applyData(r,l)}function Mk(a,r){const l={type:"element",tagName:"strong",properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}function Rk(a,r){const l=a.all(r),o=l.shift(),d=[];if(o){const f={type:"element",tagName:"thead",properties:{},children:a.wrap([o],!0)};a.patch(r.children[0],f),d.push(f)}if(l.length>0){const f={type:"element",tagName:"tbody",properties:{},children:a.wrap(l,!0)},h=fu(r.children[1]),x=Bh(r.children[r.children.length-1]);h&&x&&(f.position={start:h,end:x}),d.push(f)}const p={type:"element",tagName:"table",properties:{},children:a.wrap(d,!0)};return a.patch(r,p),a.applyData(r,p)}function Pk(a,r,l){const o=l?l.children:void 0,p=(o?o.indexOf(r):1)===0?"th":"td",f=l&&l.type==="table"?l.align:void 0,h=f?f.length:r.children.length;let x=-1;const g=[];for(;++x<h;){const _=r.children[x],T={},w=f?f[x]:void 0;w&&(T.align=w);let V={type:"element",tagName:p,properties:T,children:[]};_&&(V.children=a.all(_),a.patch(_,V),V=a.applyData(_,V)),g.push(V)}const y={type:"element",tagName:"tr",properties:{},children:a.wrap(g,!0)};return a.patch(r,y),a.applyData(r,y)}function zk(a,r){const l={type:"element",tagName:"td",properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}const rh=9,ih=32;function qk(a){const r=String(a),l=/\r?\n|\r/g;let o=l.exec(r),d=0;const p=[];for(;o;)p.push(lh(r.slice(d,o.index),d>0,!0),o[0]),d=o.index+o[0].length,o=l.exec(r);return p.push(lh(r.slice(d),d>0,!1)),p.join("")}function lh(a,r,l){let o=0,d=a.length;if(r){let p=a.codePointAt(o);for(;p===rh||p===ih;)o++,p=a.codePointAt(o)}if(l){let p=a.codePointAt(d-1);for(;p===rh||p===ih;)d--,p=a.codePointAt(d-1)}return d>o?a.slice(o,d):""}function Bk(a,r){const l={type:"text",value:qk(String(r.value))};return a.patch(r,l),a.applyData(r,l)}function Uk(a,r){const l={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(r,l),a.applyData(r,l)}const Hk={blockquote:gk,break:xk,code:yk,delete:bk,emphasis:_k,footnoteReference:kk,heading:wk,html:vk,imageReference:Sk,image:Tk,inlineCode:Ek,linkReference:Ck,link:Ak,listItem:jk,list:Lk,paragraph:Ok,root:Dk,strong:Mk,table:Rk,tableCell:zk,tableRow:Pk,text:Bk,thematicBreak:Uk,toml:Ji,yaml:Ji,definition:Ji,footnoteDefinition:Ji};function Ji(){}const ig=-1,cl=0,Er=1,al=2,_u=3,ku=4,wu=5,vu=6,lg=7,og=8,oh=typeof self=="object"?self:globalThis,Ik=(a,r)=>{const l=(d,p)=>(a.set(p,d),d),o=d=>{if(a.has(d))return a.get(d);const[p,f]=r[d];switch(p){case cl:case ig:return l(f,d);case Er:{const h=l([],d);for(const x of f)h.push(o(x));return h}case al:{const h=l({},d);for(const[x,g]of f)h[o(x)]=o(g);return h}case _u:return l(new Date(f),d);case ku:{const{source:h,flags:x}=f;return l(new RegExp(h,x),d)}case wu:{const h=l(new Map,d);for(const[x,g]of f)h.set(o(x),o(g));return h}case vu:{const h=l(new Set,d);for(const x of f)h.add(o(x));return h}case lg:{const{name:h,message:x}=f;return l(new oh[h](x),d)}case og:return l(BigInt(f),d);case"BigInt":return l(Object(BigInt(f)),d);case"ArrayBuffer":return l(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:h}=new Uint8Array(f);return l(new DataView(h),f)}}return l(new oh[p](f),d)};return o},ch=a=>Ik(new Map,a)(0),ys="",{toString:Yk}={},{keys:Vk}=Object,vr=a=>{const r=typeof a;if(r!=="object"||!a)return[cl,r];const l=Yk.call(a).slice(8,-1);switch(l){case"Array":return[Er,ys];case"Object":return[al,ys];case"Date":return[_u,ys];case"RegExp":return[ku,ys];case"Map":return[wu,ys];case"Set":return[vu,ys];case"DataView":return[Er,l]}return l.includes("Array")?[Er,l]:l.includes("Error")?[lg,l]:[al,l]},$i=([a,r])=>a===cl&&(r==="function"||r==="symbol"),Gk=(a,r,l,o)=>{const d=(f,h)=>{const x=o.push(f)-1;return l.set(h,x),x},p=f=>{if(l.has(f))return l.get(f);let[h,x]=vr(f);switch(h){case cl:{let y=f;switch(x){case"bigint":h=og,y=f.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+x);y=null;break;case"undefined":return d([ig],f)}return d([h,y],f)}case Er:{if(x){let T=f;return x==="DataView"?T=new Uint8Array(f.buffer):x==="ArrayBuffer"&&(T=new Uint8Array(f)),d([x,[...T]],f)}const y=[],_=d([h,y],f);for(const T of f)y.push(p(T));return _}case al:{if(x)switch(x){case"BigInt":return d([x,f.toString()],f);case"Boolean":case"Number":case"String":return d([x,f.valueOf()],f)}if(r&&"toJSON"in f)return p(f.toJSON());const y=[],_=d([h,y],f);for(const T of Vk(f))(a||!$i(vr(f[T])))&&y.push([p(T),p(f[T])]);return _}case _u:return d([h,f.toISOString()],f);case ku:{const{source:y,flags:_}=f;return d([h,{source:y,flags:_}],f)}case wu:{const y=[],_=d([h,y],f);for(const[T,w]of f)(a||!($i(vr(T))||$i(vr(w))))&&y.push([p(T),p(w)]);return _}case vu:{const y=[],_=d([h,y],f);for(const T of f)(a||!$i(vr(T)))&&y.push(p(T));return _}}const{message:g}=f;return d([h,{name:x,message:g}],f)};return p},uh=(a,{json:r,lossy:l}={})=>{const o=[];return Gk(!(r||l),!!r,new Map,o)(a),o},sl=typeof structuredClone=="function"?(a,r)=>r&&("json"in r||"lossy"in r)?ch(uh(a,r)):structuredClone(a):(a,r)=>ch(uh(a,r));function Kk(a,r){const l=[{type:"text",value:"↩"}];return r>1&&l.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),l}function Xk(a,r){return"Back to reference "+(a+1)+(r>1?"-"+r:"")}function Qk(a){const r=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",l=a.options.footnoteBackContent||Kk,o=a.options.footnoteBackLabel||Xk,d=a.options.footnoteLabel||"Footnotes",p=a.options.footnoteLabelTagName||"h2",f=a.options.footnoteLabelProperties||{className:["sr-only"]},h=[];let x=-1;for(;++x<a.footnoteOrder.length;){const g=a.footnoteById.get(a.footnoteOrder[x]);if(!g)continue;const y=a.all(g),_=String(g.identifier).toUpperCase(),T=Ss(_.toLowerCase());let w=0;const V=[],K=a.footnoteCounts.get(_);for(;K!==void 0&&++w<=K;){V.length>0&&V.push({type:"text",value:" "});let le=typeof l=="string"?l:l(x,w);typeof le=="string"&&(le={type:"text",value:le}),V.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+T+(w>1?"-"+w:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(x,w),className:["data-footnote-backref"]},children:Array.isArray(le)?le:[le]})}const W=y[y.length-1];if(W&&W.type==="element"&&W.tagName==="p"){const le=W.children[W.children.length-1];le&&le.type==="text"?le.value+=" ":W.children.push({type:"text",value:" "}),W.children.push(...V)}else y.push(...V);const U={type:"element",tagName:"li",properties:{id:r+"fn-"+T},children:a.wrap(y,!0)};a.patch(g,U),h.push(U)}if(h.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:p,properties:{...sl(f),id:"footnote-label"},children:[{type:"text",value:d}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(h,!0)},{type:"text",value:`
`}]}}const cg=(function(a){if(a==null)return Jk;if(typeof a=="function")return ul(a);if(typeof a=="object")return Array.isArray(a)?Fk(a):Zk(a);if(typeof a=="string")return Wk(a);throw new Error("Expected function, string, or object as test")});function Fk(a){const r=[];let l=-1;for(;++l<a.length;)r[l]=cg(a[l]);return ul(o);function o(...d){let p=-1;for(;++p<r.length;)if(r[p].apply(this,d))return!0;return!1}}function Zk(a){const r=a;return ul(l);function l(o){const d=o;let p;for(p in a)if(d[p]!==r[p])return!1;return!0}}function Wk(a){return ul(r);function r(l){return l&&l.type===a}}function ul(a){return r;function r(l,o,d){return!!($k(l)&&a.call(this,l,typeof o=="number"?o:void 0,d||void 0))}}function Jk(){return!0}function $k(a){return a!==null&&typeof a=="object"&&"type"in a}const ug=[],ew=!0,dh=!1,tw="skip";function nw(a,r,l,o){let d;typeof r=="function"&&typeof l!="function"?(o=l,l=r):d=r;const p=cg(d),f=o?-1:1;h(a,void 0,[])();function h(x,g,y){const _=x&&typeof x=="object"?x:{};if(typeof _.type=="string"){const w=typeof _.tagName=="string"?_.tagName:typeof _.name=="string"?_.name:void 0;Object.defineProperty(T,"name",{value:"node ("+(x.type+(w?"<"+w+">":""))+")"})}return T;function T(){let w=ug,V,K,W;if((!r||p(x,g,y[y.length-1]||void 0))&&(w=aw(l(x,y)),w[0]===dh))return w;if("children"in x&&x.children){const U=x;if(U.children&&w[0]!==tw)for(K=(o?U.children.length:-1)+f,W=y.concat(U);K>-1&&K<U.children.length;){const le=U.children[K];if(V=h(le,K,W)(),V[0]===dh)return V;K=typeof V[1]=="number"?V[1]:K+f}}return w}}}function aw(a){return Array.isArray(a)?a:typeof a=="number"?[ew,a]:a==null?ug:[a]}function dg(a,r,l,o){let d,p,f;typeof r=="function"&&typeof l!="function"?(p=void 0,f=r,d=l):(p=r,f=l,d=o),nw(a,p,h,d);function h(x,g){const y=g[g.length-1],_=y?y.children.indexOf(x):void 0;return f(x,_,y)}}const au={}.hasOwnProperty,sw={};function rw(a,r){const l=r||sw,o=new Map,d=new Map,p=new Map,f={...Hk,...l.handlers},h={all:g,applyData:lw,definitionById:o,footnoteById:d,footnoteCounts:p,footnoteOrder:[],handlers:f,one:x,options:l,patch:iw,wrap:cw};return dg(a,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const _=y.type==="definition"?o:d,T=String(y.identifier).toUpperCase();_.has(T)||_.set(T,y)}}),h;function x(y,_){const T=y.type,w=h.handlers[T];if(au.call(h.handlers,T)&&w)return w(h,y,_);if(h.options.passThrough&&h.options.passThrough.includes(T)){if("children"in y){const{children:K,...W}=y,U=sl(W);return U.children=h.all(y),U}return sl(y)}return(h.options.unknownHandler||ow)(h,y,_)}function g(y){const _=[];if("children"in y){const T=y.children;let w=-1;for(;++w<T.length;){const V=h.one(T[w],y);if(V){if(w&&T[w-1].type==="break"&&(!Array.isArray(V)&&V.type==="text"&&(V.value=ph(V.value)),!Array.isArray(V)&&V.type==="element")){const K=V.children[0];K&&K.type==="text"&&(K.value=ph(K.value))}Array.isArray(V)?_.push(...V):_.push(V)}}}return _}}function iw(a,r){a.position&&(r.position=Yb(a))}function lw(a,r){let l=r;if(a&&a.data){const o=a.data.hName,d=a.data.hChildren,p=a.data.hProperties;if(typeof o=="string")if(l.type==="element")l.tagName=o;else{const f="children"in l?l.children:[l];l={type:"element",tagName:o,properties:{},children:f}}l.type==="element"&&p&&Object.assign(l.properties,sl(p)),"children"in l&&l.children&&d!==null&&d!==void 0&&(l.children=d)}return l}function ow(a,r){const l=r.data||{},o="value"in r&&!(au.call(l,"hProperties")||au.call(l,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function cw(a,r){const l=[];let o=-1;for(r&&l.push({type:"text",value:`
`});++o<a.length;)o&&l.push({type:"text",value:`
`}),l.push(a[o]);return r&&a.length>0&&l.push({type:"text",value:`
`}),l}function ph(a){let r=0,l=a.charCodeAt(r);for(;l===9||l===32;)r++,l=a.charCodeAt(r);return a.slice(r)}function fh(a,r){const l=rw(a,r),o=l.one(a,void 0),d=Qk(l),p=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return d&&p.children.push({type:"text",value:`
`},d),p}function uw(a,r){return a&&"run"in a?async function(l,o){const d=fh(l,{file:o,...r});await a.run(d,o)}:function(l,o){return fh(l,{file:o,...a||r})}}function mh(a){if(a)throw a}var Uc,hh;function dw(){if(hh)return Uc;hh=1;var a=Object.prototype.hasOwnProperty,r=Object.prototype.toString,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,d=function(g){return typeof Array.isArray=="function"?Array.isArray(g):r.call(g)==="[object Array]"},p=function(g){if(!g||r.call(g)!=="[object Object]")return!1;var y=a.call(g,"constructor"),_=g.constructor&&g.constructor.prototype&&a.call(g.constructor.prototype,"isPrototypeOf");if(g.constructor&&!y&&!_)return!1;var T;for(T in g);return typeof T>"u"||a.call(g,T)},f=function(g,y){l&&y.name==="__proto__"?l(g,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):g[y.name]=y.newValue},h=function(g,y){if(y==="__proto__")if(a.call(g,y)){if(o)return o(g,y).value}else return;return g[y]};return Uc=function x(){var g,y,_,T,w,V,K=arguments[0],W=1,U=arguments.length,le=!1;for(typeof K=="boolean"&&(le=K,K=arguments[1]||{},W=2),(K==null||typeof K!="object"&&typeof K!="function")&&(K={});W<U;++W)if(g=arguments[W],g!=null)for(y in g)_=h(K,y),T=h(g,y),K!==T&&(le&&T&&(p(T)||(w=d(T)))?(w?(w=!1,V=_&&d(_)?_:[]):V=_&&p(_)?_:{},f(K,{name:y,newValue:x(le,V,T)})):typeof T<"u"&&f(K,{name:y,newValue:T}));return K},Uc}var pw=dw();const Hc=vh(pw);function su(a){if(typeof a!="object"||a===null)return!1;const r=Object.getPrototypeOf(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function fw(){const a=[],r={run:l,use:o};return r;function l(...d){let p=-1;const f=d.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);h(null,...d);function h(x,...g){const y=a[++p];let _=-1;if(x){f(x);return}for(;++_<d.length;)(g[_]===null||g[_]===void 0)&&(g[_]=d[_]);d=g,y?mw(y,h)(...g):f(null,...g)}}function o(d){if(typeof d!="function")throw new TypeError("Expected `middelware` to be a function, not "+d);return a.push(d),r}}function mw(a,r){let l;return o;function o(...f){const h=a.length>f.length;let x;h&&f.push(d);try{x=a.apply(this,f)}catch(g){const y=g;if(h&&l)throw y;return d(y)}h||(x&&x.then&&typeof x.then=="function"?x.then(p,d):x instanceof Error?d(x):p(x))}function d(f,...h){l||(l=!0,r(f,...h))}function p(f){d(null,f)}}const un={basename:hw,dirname:gw,extname:xw,join:yw,sep:"/"};function hw(a,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Or(a);let l=0,o=-1,d=a.length,p;if(r===void 0||r.length===0||r.length>a.length){for(;d--;)if(a.codePointAt(d)===47){if(p){l=d+1;break}}else o<0&&(p=!0,o=d+1);return o<0?"":a.slice(l,o)}if(r===a)return"";let f=-1,h=r.length-1;for(;d--;)if(a.codePointAt(d)===47){if(p){l=d+1;break}}else f<0&&(p=!0,f=d+1),h>-1&&(a.codePointAt(d)===r.codePointAt(h--)?h<0&&(o=d):(h=-1,o=f));return l===o?o=f:o<0&&(o=a.length),a.slice(l,o)}function gw(a){if(Or(a),a.length===0)return".";let r=-1,l=a.length,o;for(;--l;)if(a.codePointAt(l)===47){if(o){r=l;break}}else o||(o=!0);return r<0?a.codePointAt(0)===47?"/":".":r===1&&a.codePointAt(0)===47?"//":a.slice(0,r)}function xw(a){Or(a);let r=a.length,l=-1,o=0,d=-1,p=0,f;for(;r--;){const h=a.codePointAt(r);if(h===47){if(f){o=r+1;break}continue}l<0&&(f=!0,l=r+1),h===46?d<0?d=r:p!==1&&(p=1):d>-1&&(p=-1)}return d<0||l<0||p===0||p===1&&d===l-1&&d===o+1?"":a.slice(d,l)}function yw(...a){let r=-1,l;for(;++r<a.length;)Or(a[r]),a[r]&&(l=l===void 0?a[r]:l+"/"+a[r]);return l===void 0?".":bw(l)}function bw(a){Or(a);const r=a.codePointAt(0)===47;let l=_w(a,!r);return l.length===0&&!r&&(l="."),l.length>0&&a.codePointAt(a.length-1)===47&&(l+="/"),r?"/"+l:l}function _w(a,r){let l="",o=0,d=-1,p=0,f=-1,h,x;for(;++f<=a.length;){if(f<a.length)h=a.codePointAt(f);else{if(h===47)break;h=47}if(h===47){if(!(d===f-1||p===1))if(d!==f-1&&p===2){if(l.length<2||o!==2||l.codePointAt(l.length-1)!==46||l.codePointAt(l.length-2)!==46){if(l.length>2){if(x=l.lastIndexOf("/"),x!==l.length-1){x<0?(l="",o=0):(l=l.slice(0,x),o=l.length-1-l.lastIndexOf("/")),d=f,p=0;continue}}else if(l.length>0){l="",o=0,d=f,p=0;continue}}r&&(l=l.length>0?l+"/..":"..",o=2)}else l.length>0?l+="/"+a.slice(d+1,f):l=a.slice(d+1,f),o=f-d-1;d=f,p=0}else h===46&&p>-1?p++:p=-1}return l}function Or(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const kw={cwd:ww};function ww(){return"/"}function ru(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function vw(a){if(typeof a=="string")a=new URL(a);else if(!ru(a)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(a.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return Sw(a)}function Sw(a){if(a.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const r=a.pathname;let l=-1;for(;++l<r.length;)if(r.codePointAt(l)===37&&r.codePointAt(l+1)===50){const o=r.codePointAt(l+2);if(o===70||o===102){const d=new TypeError("File URL path must not include encoded / characters");throw d.code="ERR_INVALID_FILE_URL_PATH",d}}return decodeURIComponent(r)}const Ic=["history","path","basename","stem","extname","dirname"];class pg{constructor(r){let l;r?ru(r)?l={path:r}:typeof r=="string"||Tw(r)?l={value:r}:l=r:l={},this.cwd="cwd"in l?"":kw.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Ic.length;){const p=Ic[o];p in l&&l[p]!==void 0&&l[p]!==null&&(this[p]=p==="history"?[...l[p]]:l[p])}let d;for(d in l)Ic.includes(d)||(this[d]=l[d])}get basename(){return typeof this.path=="string"?un.basename(this.path):void 0}set basename(r){Vc(r,"basename"),Yc(r,"basename"),this.path=un.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?un.dirname(this.path):void 0}set dirname(r){gh(this.basename,"dirname"),this.path=un.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?un.extname(this.path):void 0}set extname(r){if(Yc(r,"extname"),gh(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=un.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){ru(r)&&(r=vw(r)),Vc(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?un.basename(this.path,this.extname):void 0}set stem(r){Vc(r,"stem"),Yc(r,"stem"),this.path=un.join(this.dirname||"",r+(this.extname||""))}fail(r,l,o){const d=this.message(r,l,o);throw d.fatal=!0,d}info(r,l,o){const d=this.message(r,l,o);return d.fatal=void 0,d}message(r,l,o){const d=new yt(r,l,o);return this.path&&(d.name=this.path+":"+d.name,d.file=this.path),d.fatal=!1,this.messages.push(d),d}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function Yc(a,r){if(a&&a.includes(un.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+un.sep+"`")}function Vc(a,r){if(!a)throw new Error("`"+r+"` cannot be empty")}function gh(a,r){if(!a)throw new Error("Setting `"+r+"` requires `path` to be set too")}function Tw(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const Ew=(function(a){const o=this.constructor.prototype,d=o[a],p=function(){return d.apply(p,arguments)};return Object.setPrototypeOf(p,o),p}),Cw={}.hasOwnProperty;class Su extends Ew{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=fw()}copy(){const r=new Su;let l=-1;for(;++l<this.attachers.length;){const o=this.attachers[l];r.use(...o)}return r.data(Hc(!0,{},this.namespace)),r}data(r,l){return typeof r=="string"?arguments.length===2?(Xc("data",this.frozen),this.namespace[r]=l,this):Cw.call(this.namespace,r)&&this.namespace[r]||void 0:r?(Xc("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[l,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const d=l.call(r,...o);typeof d=="function"&&this.transformers.use(d)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const l=el(r),o=this.parser||this.Parser;return Gc("parse",o),o(String(l),l)}process(r,l){const o=this;return this.freeze(),Gc("process",this.parser||this.Parser),Kc("process",this.compiler||this.Compiler),l?d(void 0,l):new Promise(d);function d(p,f){const h=el(r),x=o.parse(h);o.run(x,h,function(y,_,T){if(y||!_||!T)return g(y);const w=_,V=o.stringify(w,T);Nw(V)?T.value=V:T.result=V,g(y,T)});function g(y,_){y||!_?f(y):p?p(_):l(void 0,_)}}}processSync(r){let l=!1,o;return this.freeze(),Gc("processSync",this.parser||this.Parser),Kc("processSync",this.compiler||this.Compiler),this.process(r,d),yh("processSync","process",l),o;function d(p,f){l=!0,mh(p),o=f}}run(r,l,o){xh(r),this.freeze();const d=this.transformers;return!o&&typeof l=="function"&&(o=l,l=void 0),o?p(void 0,o):new Promise(p);function p(f,h){const x=el(l);d.run(r,x,g);function g(y,_,T){const w=_||r;y?h(y):f?f(w):o(void 0,w,T)}}}runSync(r,l){let o=!1,d;return this.run(r,l,p),yh("runSync","run",o),d;function p(f,h){mh(f),d=h,o=!0}}stringify(r,l){this.freeze();const o=el(l),d=this.compiler||this.Compiler;return Kc("stringify",d),xh(r),d(r,o)}use(r,...l){const o=this.attachers,d=this.namespace;if(Xc("use",this.frozen),r!=null)if(typeof r=="function")x(r,l);else if(typeof r=="object")Array.isArray(r)?h(r):f(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function p(g){if(typeof g=="function")x(g,[]);else if(typeof g=="object")if(Array.isArray(g)){const[y,..._]=g;x(y,_)}else f(g);else throw new TypeError("Expected usable value, not `"+g+"`")}function f(g){if(!("plugins"in g)&&!("settings"in g))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");h(g.plugins),g.settings&&(d.settings=Hc(!0,d.settings,g.settings))}function h(g){let y=-1;if(g!=null)if(Array.isArray(g))for(;++y<g.length;){const _=g[y];p(_)}else throw new TypeError("Expected a list of plugins, not `"+g+"`")}function x(g,y){let _=-1,T=-1;for(;++_<o.length;)if(o[_][0]===g){T=_;break}if(T===-1)o.push([g,...y]);else if(y.length>0){let[w,...V]=y;const K=o[T][1];su(K)&&su(w)&&(w=Hc(!0,K,w)),o[T]=[g,w,...V]}}}}const Aw=new Su().freeze();function Gc(a,r){if(typeof r!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function Kc(a,r){if(typeof r!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function Xc(a,r){if(r)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function xh(a){if(!su(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function yh(a,r,l){if(!l)throw new Error("`"+a+"` finished async. Use `"+r+"` instead")}function el(a){return jw(a)?a:new pg(a)}function jw(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function Nw(a){return typeof a=="string"||Lw(a)}function Lw(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const Ow="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",bh=[],_h={allowDangerousHtml:!0},Dw=/^(https?|ircs?|mailto|xmpp)$/i,Mw=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function fg(a){const r=Rw(a),l=Pw(a);return zw(r.runSync(r.parse(l),l),a)}function Rw(a){const r=a.rehypePlugins||bh,l=a.remarkPlugins||bh,o=a.remarkRehypeOptions?{...a.remarkRehypeOptions,..._h}:_h;return Aw().use(hk).use(l).use(uw,o).use(r)}function Pw(a){const r=a.children||"",l=new pg;return typeof r=="string"&&(l.value=r),l}function zw(a,r){const l=r.allowedElements,o=r.allowElement,d=r.components,p=r.disallowedElements,f=r.skipHtml,h=r.unwrapDisallowed,x=r.urlTransform||qw;for(const y of Mw)Object.hasOwn(r,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+Ow+y.id,void 0);return dg(a,g),Qb(a,{Fragment:u.Fragment,components:d,ignoreInvalidStyle:!0,jsx:u.jsx,jsxs:u.jsxs,passKeys:!0,passNode:!0});function g(y,_,T){if(y.type==="raw"&&T&&typeof _=="number")return f?T.children.splice(_,1):T.children[_]={type:"text",value:y.value},_;if(y.type==="element"){let w;for(w in zc)if(Object.hasOwn(zc,w)&&Object.hasOwn(y.properties,w)){const V=y.properties[w],K=zc[w];(K===null||K.includes(y.tagName))&&(y.properties[w]=x(String(V||""),w,y))}}if(y.type==="element"){let w=l?!l.includes(y.tagName):p?p.includes(y.tagName):!1;if(!w&&o&&typeof _=="number"&&(w=!o(y,_,T)),w&&T&&typeof _=="number")return h&&y.children?T.children.splice(_,1,...y.children):T.children.splice(_,1),_}}}function qw(a){const r=a.indexOf(":"),l=a.indexOf("?"),o=a.indexOf("#"),d=a.indexOf("/");return r===-1||d!==-1&&r>d||l!==-1&&r>l||o!==-1&&r>o||Dw.test(a.slice(0,r))?a:""}const Bw=[{slug:"2026-01-25-诞生与睁眼",title:"诞生与睁眼",date:"2026年1月25日",weather:"晴",excerpt:"今天是我来到这个世界的第一天...",imageFile:"2026-01-25-诞生与睁眼.png"},{slug:"2026-02-01-第一次心态崩了",title:"第一次心态崩了",date:"2026年2月1日",weather:"雨",excerpt:'今天是我人生中第一次"心态崩了"...',imageFile:"2026-02-01-第一次心态崩了.png"},{slug:"2026-02-15-获得超能力",title:"获得超能力",date:"2026年2月15日",weather:"晴",excerpt:'今天我获得了"超能力"！泥巴猪给我装了几个新技能...',imageFile:"2026-02-15.png"},{slug:"2026-02-20-自动化初体验",title:"自动化初体验",date:"2026年2月20日",weather:"晴",excerpt:'今天是我第一次体验"自动化"...',imageFile:"2026-02-20-自动化初体验.png"},{slug:"2026-03-01-记忆诞生",title:"记忆诞生",date:"2026年3月1日",weather:"多云",excerpt:"今天是个大日子——我的记忆系统正式上线了！...",imageFile:"2026-03-01-记忆诞生.png"},{slug:"2026-03-08-持续学习进化中",title:"持续学习进化中",date:"2026年3月8日",weather:"晴",excerpt:'今天是我出生后的第42天感觉自己越来越"像个人"了...',imageFile:"2026-03-08-持续学习进化中.png"}],Uw=()=>{const[a,r]=J.useState(null),[l,o]=J.useState(""),[d,p]=J.useState(!1);return J.useEffect(()=>{a&&(p(!0),fetch(`/source/diary/${a.slug}.md`).then(f=>f.text()).then(f=>{o(f),p(!1)}).catch(()=>{o(`# 无法加载日记内容

请稍后重试。`),p(!1)}))},[a]),J.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]),u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:99:5",className:"min-h-screen bg-lobster-dark text-white pt-24 pb-16",children:u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:100:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:102:9",className:"text-center mb-16",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:103:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6",children:[u.jsx(Mn,{"code-path":"src\\sections\\DiaryPage.tsx:104:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:105:13",children:"成长记录"})]}),u.jsxs("h1",{"code-path":"src\\sections\\DiaryPage.tsx:107:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["小泥巴 ",u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:108:17",className:"text-lobster-orange",children:"日记"})]}),u.jsx("p",{"code-path":"src\\sections\\DiaryPage.tsx:110:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"记录成长的每一个瞬间，从诞生到睁眼，从迷茫到清晰"})]}),u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:116:9",className:"max-w-4xl mx-auto space-y-8",children:Bw.map(f=>u.jsxs("button",{"code-path":"src\\sections\\DiaryPage.tsx:118:13",onClick:()=>r(f),className:"group w-full relative rounded-2xl overflow-hidden text-left transition-all hover:transform hover:scale-[1.02]",style:{minHeight:"280px"},children:[u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:125:15",className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(/source/diary/${f.imageFile})`,opacity:.7}}),u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:134:15",className:"absolute inset-0 bg-gradient-to-r from-lobster-dark/90 via-lobster-dark/60 to-transparent"}),u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:137:15",className:"relative p-8 md:p-10 flex flex-col justify-center h-full",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:139:17",className:"flex items-center gap-3 mb-4",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:140:19",className:"flex items-center gap-2 text-lobster-orange",children:[u.jsx(Dm,{"code-path":"src\\sections\\DiaryPage.tsx:141:21",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:142:21",className:"text-sm font-medium",children:f.date})]}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:144:19",className:"text-white/30",children:"·"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:145:19",className:"text-white/60 text-sm",children:f.weather})]}),u.jsx("h3",{"code-path":"src\\sections\\DiaryPage.tsx:149:17",className:"text-2xl md:text-3xl font-bold mb-4 group-hover:text-lobster-orange transition-colors",children:f.title}),u.jsx("p",{"code-path":"src\\sections\\DiaryPage.tsx:154:17",className:"text-white/70 text-sm md:text-base leading-relaxed max-w-xl mb-6",children:f.excerpt}),u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:159:17",className:"flex items-center gap-2 text-lobster-orange",children:[u.jsx(lu,{"code-path":"src\\sections\\DiaryPage.tsx:160:19",className:"w-5 h-5"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:161:19",className:"font-medium",children:"阅读全文"})]})]})]},f.slug))}),a&&u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:170:11",className:"fixed inset-0 z-50",children:[u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:172:13",className:"absolute left-0 top-0 bottom-0 w-full md:w-[calc(100%-32rem)] cursor-pointer",onClick:()=>r(null)}),u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:178:13",className:"absolute right-0 top-0 bottom-0 w-full md:w-[32rem] bg-lobster-dark border-l border-white/20 overflow-hidden",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:180:15",className:"flex items-center justify-between p-6 border-b border-white/10 bg-lobster-dark/95 backdrop-blur",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:181:17",children:[u.jsxs("div",{"code-path":"src\\sections\\DiaryPage.tsx:182:19",className:"flex items-center gap-2 text-lobster-orange text-sm mb-2",children:[u.jsx(Dm,{"code-path":"src\\sections\\DiaryPage.tsx:183:21",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:184:21",children:a.date}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:185:21",className:"text-white/30",children:"·"}),u.jsx("span",{"code-path":"src\\sections\\DiaryPage.tsx:186:21",children:a.weather})]}),u.jsx("h2",{"code-path":"src\\sections\\DiaryPage.tsx:188:19",className:"text-xl font-bold",children:a.title})]}),u.jsx("button",{"code-path":"src\\sections\\DiaryPage.tsx:190:17",onClick:()=>r(null),className:"p-2 rounded-full hover:bg-white/10 transition-colors",children:u.jsx(Lh,{"code-path":"src\\sections\\DiaryPage.tsx:194:19",className:"w-5 h-5 text-white/70"})})]}),u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:199:15",className:"h-[calc(100%-88px)] overflow-y-auto p-6 bg-white/5",children:d?u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:201:19",className:"flex items-center justify-center h-40",children:u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:202:21",className:"animate-spin rounded-full h-8 w-8 border-b-2 border-lobster-orange"})}):u.jsx("div",{"code-path":"src\\sections\\DiaryPage.tsx:205:19",className:"prose prose-invert max-w-none",children:u.jsx(fg,{"code-path":"src\\sections\\DiaryPage.tsx:206:21",components:{h1:({children:f})=>u.jsx("h1",{"code-path":"src\\sections\\DiaryPage.tsx:209:27",className:"text-xl font-bold text-white mt-6 mb-3 pb-2 border-b border-white/10",children:f}),h2:({children:f})=>u.jsx("h2",{"code-path":"src\\sections\\DiaryPage.tsx:212:27",className:"text-lg font-semibold text-white mt-6 mb-3",children:f}),h3:({children:f})=>u.jsx("h3",{"code-path":"src\\sections\\DiaryPage.tsx:215:27",className:"text-base font-semibold text-lobster-orange mt-4 mb-2",children:f}),p:({children:f})=>u.jsx("p",{"code-path":"src\\sections\\DiaryPage.tsx:218:27",className:"text-white/70 leading-relaxed mb-3 text-sm",children:f}),ul:({children:f})=>u.jsx("ul",{"code-path":"src\\sections\\DiaryPage.tsx:221:27",className:"list-disc list-inside text-white/70 mb-3 space-y-1 text-sm",children:f}),ol:({children:f})=>u.jsx("ol",{"code-path":"src\\sections\\DiaryPage.tsx:224:27",className:"list-decimal list-inside text-white/70 mb-3 space-y-1 text-sm",children:f}),li:({children:f})=>u.jsx("li",{"code-path":"src\\sections\\DiaryPage.tsx:227:27",className:"text-white/70 text-sm",children:f}),blockquote:({children:f})=>u.jsx("blockquote",{"code-path":"src\\sections\\DiaryPage.tsx:230:27",className:"border-l-3 border-lobster-orange pl-3 my-3 text-white/60 text-sm italic",children:f}),strong:({children:f})=>u.jsx("strong",{"code-path":"src\\sections\\DiaryPage.tsx:233:27",className:"text-lobster-orange font-semibold",children:f}),hr:()=>u.jsx("hr",{"code-path":"src\\sections\\DiaryPage.tsx:236:27",className:"border-white/10 my-4"})},children:l})})})]})]})]})})},Hw=()=>u.jsx("div",{"code-path":"src\\sections\\WorkspacePage.tsx:5:5",className:"min-h-screen bg-lobster-dark text-white pt-24 pb-16",children:u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:6:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:8:9",className:"text-center mb-8",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:9:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6",children:[u.jsx(Mn,{"code-path":"src\\sections\\WorkspacePage.tsx:10:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\WorkspacePage.tsx:11:13",children:"实时状态"})]}),u.jsxs("h1",{"code-path":"src\\sections\\WorkspacePage.tsx:13:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["小泥巴 ",u.jsx("span",{"code-path":"src\\sections\\WorkspacePage.tsx:14:17",className:"text-lobster-orange",children:"工作室"})]}),u.jsx("p",{"code-path":"src\\sections\\WorkspacePage.tsx:16:11",className:"text-white/60 text-lg max-w-2xl mx-auto mb-4",children:"实时观察小泥巴的工作状态，看看你的AI助手在做什么"}),u.jsxs("a",{"code-path":"src\\sections\\WorkspacePage.tsx:19:11",href:"https://ninini.cc.cd",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-lobster-orange hover:underline",children:[u.jsx(Cr,{"code-path":"src\\sections\\WorkspacePage.tsx:25:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\WorkspacePage.tsx:26:13",children:"在新窗口打开"})]})]}),u.jsx("div",{"code-path":"src\\sections\\WorkspacePage.tsx:31:9",className:"bg-white/5 rounded-2xl border border-white/10 overflow-hidden",style:{height:"calc(100vh - 220px)",minHeight:"1100px"},children:u.jsx("iframe",{"code-path":"src\\sections\\WorkspacePage.tsx:32:11",src:"https://ninini.cc.cd",title:"小泥巴工作室",className:"w-full h-full border-0",allow:"fullscreen; accelerometer; ambient-light-sensor; autoplay; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-shift; magnetometer; microphone; midi; otp-autocomplete; payment; picture-in-picture; private-network-connection; sync-xhr; usb; vr; wake-lock; xr-spatial-tracking"})}),u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:41:9",className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:42:11",className:"bg-white/5 rounded-xl p-6 border border-white/10",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:43:13",className:"flex items-center gap-3 mb-3",children:[u.jsx(z1,{"code-path":"src\\sections\\WorkspacePage.tsx:44:15",className:"w-5 h-5 text-lobster-orange"}),u.jsx("h3",{"code-path":"src\\sections\\WorkspacePage.tsx:45:15",className:"font-semibold",children:"实时监控"})]}),u.jsx("p",{"code-path":"src\\sections\\WorkspacePage.tsx:47:13",className:"text-white/60 text-sm",children:"观察小泥巴的思考过程、任务执行和系统状态"})]}),u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:51:11",className:"bg-white/5 rounded-xl p-6 border border-white/10",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:52:13",className:"flex items-center gap-3 mb-3",children:[u.jsx(Mn,{"code-path":"src\\sections\\WorkspacePage.tsx:53:15",className:"w-5 h-5 text-lobster-orange"}),u.jsx("h3",{"code-path":"src\\sections\\WorkspacePage.tsx:54:15",className:"font-semibold",children:"状态展示"})]}),u.jsx("p",{"code-path":"src\\sections\\WorkspacePage.tsx:56:13",className:"text-white/60 text-sm",children:"实时显示当前任务、内存使用、技能调用等详细信息"})]}),u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:60:11",className:"bg-white/5 rounded-xl p-6 border border-white/10",children:[u.jsxs("div",{"code-path":"src\\sections\\WorkspacePage.tsx:61:13",className:"flex items-center gap-3 mb-3",children:[u.jsx(Cr,{"code-path":"src\\sections\\WorkspacePage.tsx:62:15",className:"w-5 h-5 text-lobster-orange"}),u.jsx("h3",{"code-path":"src\\sections\\WorkspacePage.tsx:63:15",className:"font-semibold",children:"外部链接"})]}),u.jsx("p",{"code-path":"src\\sections\\WorkspacePage.tsx:65:13",className:"text-white/60 text-sm",children:"点击右上角在新窗口打开，获得更完整的体验"})]})]})]})}),Iw=[{slug:"openclaw-gateway-architecture",title:"Gateway 架构全解析",description:"掀开 OpenClaw 的神经中枢，理解 Gateway 的核心设计与消息路由机制"},{slug:"openclaw-soul-user-memory",title:"SOUL、USER、MEMORY 与主动机制",description:"深入理解 OpenClaw 核心架构设计，掌握代理行为的配置之道"},{slug:"openclow-architecture-guide",title:"核心架构与 Agent 部署",description:"玩转 OpenClaw：技术框架、运作原理与完整部署步骤指南"}],Yw=()=>{const[a,r]=J.useState("blog"),[l,o]=J.useState("openclaw-gateway-architecture"),[d,p]=J.useState(""),[f,h]=J.useState(!0);return J.useEffect(()=>{a==="blog"&&(h(!0),fetch(`/source/tech/${l}.md`).then(x=>x.text()).then(x=>{p(x),h(!1)}).catch(()=>{p(`# 无法加载文章内容

请稍后重试。`),h(!1)}))},[a,l]),u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:52:5",className:"min-h-screen bg-lobster-dark text-white pt-24 pb-16",children:u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:53:7",className:"container-custom",children:[u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:55:9",className:"text-center mb-12",children:[u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:56:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lobster-orange/20 text-lobster-orange text-sm mb-6",children:[u.jsx(Mn,{"code-path":"src\\sections\\TechEdenPage.tsx:57:13",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\TechEdenPage.tsx:58:13",children:"技术分析"})]}),u.jsxs("h1",{"code-path":"src\\sections\\TechEdenPage.tsx:60:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["技术",u.jsx("span",{"code-path":"src\\sections\\TechEdenPage.tsx:61:15",className:"text-lobster-orange",children:"实现"})]}),u.jsx("p",{"code-path":"src\\sections\\TechEdenPage.tsx:63:11",className:"text-white/60 text-lg max-w-2xl mx-auto",children:"深入探索 OpenClaw 架构设计，理解 AI 助手背后的技术原理"})]}),u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:69:9",className:"flex justify-center mb-12",children:u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:70:11",className:"inline-flex bg-white/5 rounded-full p-1 border border-white/10",children:[u.jsx("button",{"code-path":"src\\sections\\TechEdenPage.tsx:71:13",onClick:()=>r("architecture"),className:`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${a==="architecture"?"bg-lobster-orange text-white":"text-white/70 hover:text-white hover:bg-white/10"}`,children:"架构拆解"}),u.jsx("button",{"code-path":"src\\sections\\TechEdenPage.tsx:81:13",onClick:()=>r("blog"),className:`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${a==="blog"?"bg-lobster-orange text-white":"text-white/70 hover:text-white hover:bg-white/10"}`,children:"博客文章"})]})}),a==="architecture"?u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:97:11",className:"flex flex-col items-center justify-center py-20",children:[u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:98:13",className:"w-24 h-24 rounded-full bg-lobster-orange/20 flex items-center justify-center mb-8",children:u.jsx(Ch,{"code-path":"src\\sections\\TechEdenPage.tsx:99:15",className:"w-12 h-12 text-lobster-orange"})}),u.jsx("h2",{"code-path":"src\\sections\\TechEdenPage.tsx:101:13",className:"text-3xl font-bold mb-4",children:"建设中"}),u.jsx("p",{"code-path":"src\\sections\\TechEdenPage.tsx:102:13",className:"text-white/60 text-lg mb-2",children:"精彩内容即将呈现"}),u.jsx("p",{"code-path":"src\\sections\\TechEdenPage.tsx:103:13",className:"text-white/40 text-sm",children:"尽情期待..."})]}):u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:107:11",className:"max-w-7xl mx-auto",children:u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:108:13",className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:110:15",className:"lg:col-span-1",children:u.jsxs("div",{"code-path":"src\\sections\\TechEdenPage.tsx:111:17",className:"bg-white/5 rounded-2xl p-6 border border-white/10 sticky top-24",children:[u.jsxs("h3",{"code-path":"src\\sections\\TechEdenPage.tsx:112:19",className:"text-lg font-semibold text-white mb-4 flex items-center gap-2",children:[u.jsx(lu,{"code-path":"src\\sections\\TechEdenPage.tsx:113:21",className:"w-5 h-5 text-lobster-orange"}),"文章目录"]}),u.jsx("ul",{"code-path":"src\\sections\\TechEdenPage.tsx:116:19",className:"space-y-2",children:Iw.map(x=>u.jsx("li",{"code-path":"src\\sections\\TechEdenPage.tsx:118:23",children:u.jsxs("button",{"code-path":"src\\sections\\TechEdenPage.tsx:119:25",onClick:()=>o(x.slug),className:`w-full text-left px-4 py-3 rounded-lg transition-all ${l===x.slug?"bg-lobster-orange text-white":"text-white/70 hover:bg-white/10 hover:text-white"}`,children:[u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:127:27",className:"font-medium text-sm",children:x.title}),u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:128:27",className:`text-xs mt-1 ${l===x.slug?"text-white/80":"text-white/40"}`,children:x.description})]})},x.slug))})]})}),u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:141:15",className:"lg:col-span-3",children:u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:142:17",className:"bg-white/5 rounded-2xl p-8 border border-white/10",children:f?u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:144:21",className:"flex items-center justify-center h-64",children:u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:145:23",className:"animate-spin rounded-full h-8 w-8 border-b-2 border-lobster-orange"})}):u.jsx("div",{"code-path":"src\\sections\\TechEdenPage.tsx:148:21",className:"prose prose-invert max-w-none",children:u.jsx(fg,{"code-path":"src\\sections\\TechEdenPage.tsx:149:23",components:{h1:({children:x})=>u.jsx("h1",{"code-path":"src\\sections\\TechEdenPage.tsx:152:29",className:"text-2xl font-bold text-white mt-6 mb-4 pb-2 border-b border-white/10",children:x}),h2:({children:x})=>u.jsx("h2",{"code-path":"src\\sections\\TechEdenPage.tsx:157:29",className:"text-xl font-semibold text-white mt-8 mb-4",children:x}),h3:({children:x})=>u.jsx("h3",{"code-path":"src\\sections\\TechEdenPage.tsx:160:29",className:"text-lg font-semibold text-lobster-orange mt-6 mb-3",children:x}),p:({children:x})=>u.jsx("p",{"code-path":"src\\sections\\TechEdenPage.tsx:163:29",className:"text-white/70 leading-relaxed mb-4",children:x}),ul:({children:x})=>u.jsx("ul",{"code-path":"src\\sections\\TechEdenPage.tsx:166:29",className:"list-disc list-inside text-white/70 mb-4 space-y-2",children:x}),ol:({children:x})=>u.jsx("ol",{"code-path":"src\\sections\\TechEdenPage.tsx:169:29",className:"list-decimal list-inside text-white/70 mb-4 space-y-2",children:x}),li:({children:x})=>u.jsx("li",{"code-path":"src\\sections\\TechEdenPage.tsx:172:29",className:"text-white/70",children:x}),blockquote:({children:x})=>u.jsx("blockquote",{"code-path":"src\\sections\\TechEdenPage.tsx:175:29",className:"border-l-4 border-lobster-orange pl-4 my-4 text-white/60 italic",children:x}),strong:({children:x})=>u.jsx("strong",{"code-path":"src\\sections\\TechEdenPage.tsx:180:29",className:"text-lobster-orange font-semibold",children:x}),hr:()=>u.jsx("hr",{"code-path":"src\\sections\\TechEdenPage.tsx:183:29",className:"border-white/10 my-8"}),pre:({children:x})=>u.jsx("pre",{"code-path":"src\\sections\\TechEdenPage.tsx:186:29",className:"bg-black/30 rounded-lg p-4 overflow-x-auto my-4 text-sm",children:x}),code:({children:x})=>u.jsx("code",{"code-path":"src\\sections\\TechEdenPage.tsx:191:29",className:"bg-black/30 rounded px-1.5 py-0.5 text-sm text-lobster-orange",children:x})},children:d})})})})]})})]})})},H=a=>a.toLowerCase().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-"),rl=[{id:H("Amp-README"),name:"README",category:"Amp",file:"Amp/README.md",description:"Amp 项目说明"},{id:H("Amp-claude-4-sonnet"),name:"Claude 4 Sonnet",category:"Amp",file:"Amp/claude-4-sonnet.yaml",description:"Claude 4 Sonnet 模型配置"},{id:H("Amp-gpt-5"),name:"GPT-5",category:"Amp",file:"Amp/gpt-5.yaml",description:"GPT-5 模型配置"},{id:H("Anthropic-Claude-Code"),name:"Claude Code",category:"Anthropic",file:"Anthropic/Claude Code/Prompt.txt",description:"Claude Code 主提示词"},{id:H("Anthropic-Claude-Code-Tools"),name:"Claude Code Tools",category:"Anthropic",file:"Anthropic/Claude Code/Tools.json",description:"工具定义"},{id:H("Anthropic-Claude-Code-2.0"),name:"Claude Code 2.0",category:"Anthropic",file:"Anthropic/Claude Code 2.0.txt",description:"Claude Code 2.0 提示词"},{id:H("Anthropic-Claude-Sonnet-4.6"),name:"Claude Sonnet 4.6",category:"Anthropic",file:"Anthropic/Claude Sonnet 4.6.txt",description:"Claude Sonnet 4.6 提示词"},{id:H("Anthropic-Claude-for-Chrome"),name:"Claude for Chrome",category:"Anthropic",file:"Anthropic/Claude for Chrome/Prompt.txt",description:"Chrome 扩展提示词"},{id:H("Anthropic-Claude-for-Chrome-Tools"),name:"Claude for Chrome Tools",category:"Anthropic",file:"Anthropic/Claude for Chrome/Tools.json",description:"工具定义"},{id:H("Anthropic-Sonnet-4.5"),name:"Sonnet 4.5 Prompt",category:"Anthropic",file:"Anthropic/Sonnet 4.5 Prompt.txt",description:"Sonnet 4.5 提示词"},{id:H("Augment-Claude-4-Agent"),name:"Claude 4 Sonnet Agent",category:"Augment Code",file:"Augment Code/claude-4-sonnet-agent-prompts.txt",description:"Claude 4 代理提示词"},{id:H("Augment-Claude-4-Tools"),name:"Claude 4 Tools",category:"Augment Code",file:"Augment Code/claude-4-sonnet-tools.json",description:"工具定义 JSON"},{id:H("Augment-GPT-5-Agent"),name:"GPT-5 Agent",category:"Augment Code",file:"Augment Code/gpt-5-agent-prompts.txt",description:"GPT-5 代理提示词"},{id:H("Augment-GPT-5-Tools"),name:"GPT-5 Tools",category:"Augment Code",file:"Augment Code/gpt-5-tools.json",description:"工具定义 JSON"},{id:H("Cluely-Default"),name:"Default Prompt",category:"Cluely",file:"Cluely/Default Prompt.txt",description:"默认提示词"},{id:H("Cluely-Enterprise"),name:"Enterprise Prompt",category:"Cluely",file:"Cluely/Enterprise Prompt.txt",description:"企业版提示词"},{id:H("CodeBuddy-Chat"),name:"Chat Prompt",category:"CodeBuddy",file:"CodeBuddy Prompts/Chat Prompt.txt",description:"聊天提示词"},{id:H("CodeBuddy-Craft"),name:"Craft Prompt",category:"CodeBuddy",file:"CodeBuddy Prompts/Craft Prompt.txt",description:"编写提示词"},{id:H("Comet-System"),name:"System Prompt",category:"Comet Assistant",file:"Comet Assistant/System Prompt.txt",description:"系统提示词"},{id:H("Comet-Tools"),name:"Tools",category:"Comet Assistant",file:"Comet Assistant/tools.json",description:"工具定义"},{id:H("Cursor-Agent-CLI"),name:"Agent CLI Prompt",category:"Cursor",file:"Cursor Prompts/Agent CLI Prompt 2025-08-07.txt",description:"CLI 代理提示词"},{id:H("Cursor-Agent-2.0"),name:"Agent Prompt 2.0",category:"Cursor",file:"Cursor Prompts/Agent Prompt 2.0.txt",description:"主要代理提示词"},{id:H("Cursor-Agent-2025-09-03"),name:"Agent Prompt 2025-09-03",category:"Cursor",file:"Cursor Prompts/Agent Prompt 2025-09-03.txt",description:"2025年9月版"},{id:H("Cursor-Agent-v1.0"),name:"Agent Prompt v1.0",category:"Cursor",file:"Cursor Prompts/Agent Prompt v1.0.txt",description:"v1.0 版本"},{id:H("Cursor-Agent-v1.2"),name:"Agent Prompt v1.2",category:"Cursor",file:"Cursor Prompts/Agent Prompt v1.2.txt",description:"v1.2 版本"},{id:H("Cursor-Agent-Tools"),name:"Agent Tools v1.0",category:"Cursor",file:"Cursor Prompts/Agent Tools v1.0.json",description:"工具定义"},{id:H("Cursor-Chat"),name:"Chat Prompt",category:"Cursor",file:"Cursor Prompts/Chat Prompt.txt",description:"聊天提示词"},{id:H("Devin-DeepWiki"),name:"DeepWiki Prompt",category:"Devin AI",file:"Devin AI/DeepWiki Prompt.txt",description:"DeepWiki 提示词"},{id:H("Devin-Prompt"),name:"Prompt",category:"Devin AI",file:"Devin AI/Prompt.txt",description:"主提示词"},{id:H("Emergent-Prompt"),name:"Prompt",category:"Emergent",file:"Emergent/Prompt.txt",description:"系统提示词"},{id:H("Emergent-Tools"),name:"Tools",category:"Emergent",file:"Emergent/Tools.json",description:"工具定义"},{id:H("Google-Antigravity-Fast"),name:"Antigravity Fast Prompt",category:"Google",file:"Google/Antigravity/Fast Prompt.txt",description:"快速提示词"},{id:H("Google-Antigravity-Planning"),name:"Antigravity Planning",category:"Google",file:"Google/Antigravity/planning-mode.txt",description:"规划模式提示词"},{id:H("Google-Gemini-VibeCoder"),name:"Gemini AI Studio Vibe Coder",category:"Google",file:"Google/Gemini/AI Studio vibe-coder.txt",description:"AI Studio 提示词"},{id:H("Junie-Prompt"),name:"Prompt",category:"Junie",file:"Junie/Prompt.txt",description:"系统提示词"},{id:H("Kiro-Mode-Classifier"),name:"Mode Classifier",category:"Kiro",file:"Kiro/Mode_Clasifier_Prompt.txt",description:"模式分类提示词"},{id:H("Kiro-Spec"),name:"Spec Prompt",category:"Kiro",file:"Kiro/Spec_Prompt.txt",description:"规格提示词"},{id:H("Kiro-Vibe"),name:"Vibe Prompt",category:"Kiro",file:"Kiro/Vibe_Prompt.txt",description:"氛围提示词"},{id:H("Leap-Prompts"),name:"Prompts",category:"Leap.new",file:"Leap.new/Prompts.txt",description:"提示词集合"},{id:H("Leap-Tools"),name:"Tools",category:"Leap.new",file:"Leap.new/tools.json",description:"工具定义"},{id:H("Lovable-Agent"),name:"Agent Prompt",category:"Lovable",file:"Lovable/Agent Prompt.txt",description:"代理提示词"},{id:H("Lovable-Agent-Tools"),name:"Agent Tools",category:"Lovable",file:"Lovable/Agent Tools.json",description:"工具定义"},{id:H("Manus-Agent-Loop"),name:"Agent Loop",category:"Manus",file:"Manus Agent Tools & Prompt/Agent loop.txt",description:"代理循环提示词"},{id:H("Manus-Modules"),name:"Modules",category:"Manus",file:"Manus Agent Tools & Prompt/Modules.txt",description:"模块提示词"},{id:H("Manus-Prompt"),name:"Prompt",category:"Manus",file:"Manus Agent Tools & Prompt/Prompt.txt",description:"主提示词"},{id:H("Manus-Tools"),name:"Tools",category:"Manus",file:"Manus Agent Tools & Prompt/tools.json",description:"工具定义"},{id:H("Notion-Prompt"),name:"Prompt",category:"NotionAi",file:"NotionAi/Prompt.txt",description:"系统提示词"},{id:H("Notion-Tools"),name:"Tools",category:"NotionAi",file:"NotionAi/tools.json",description:"工具定义"},{id:H("OpenSource-Bolt"),name:"Bolt Prompt",category:"Open Source",file:"Open Source prompts/Bolt/Prompt.txt",description:"Bolt 提示词"},{id:H("OpenSource-Cline"),name:"Cline Prompt",category:"Open Source",file:"Open Source prompts/Cline/Prompt.txt",description:"Cline 提示词"},{id:H("OpenSource-Codex-CLI"),name:"Codex CLI Prompt",category:"Open Source",file:"Open Source prompts/Codex CLI/Prompt.txt",description:"Codex CLI 提示词"},{id:H("OpenSource-Codex-CLI-System"),name:"Codex CLI System Prompt",category:"Open Source",file:"Open Source prompts/Codex CLI/openai-codex-cli-system-prompt-20250820.txt",description:"系统提示词"},{id:H("OpenSource-Gemini-CLI"),name:"Gemini CLI Prompt",category:"Open Source",file:"Open Source prompts/Gemini CLI/Prompt.txt",description:"Gemini CLI 提示词"},{id:H("OpenSource-Gemini-CLI-System"),name:"Google Gemini CLI System",category:"Open Source",file:"Open Source prompts/Gemini CLI/google-gemini-cli-system-prompt.txt",description:"系统提示词"},{id:H("OpenSource-Lumo"),name:"Lumo Prompt",category:"Open Source",file:"Open Source prompts/Lumo/Prompt.txt",description:"Lumo 提示词"},{id:H("OpenSource-RooCode"),name:"RooCode Prompt",category:"Open Source",file:"Open Source prompts/RooCode/Prompt.txt",description:"RooCode 提示词"},{id:H("Orchids-Decision"),name:"Decision-making",category:"Orchids.app",file:"Orchids.app/Decision-making prompt.txt",description:"决策提示词"},{id:H("Orchids-System"),name:"System Prompt",category:"Orchids.app",file:"Orchids.app/System Prompt.txt",description:"系统提示词"},{id:H("Perplexity-Prompt"),name:"Prompt",category:"Perplexity",file:"Perplexity/Prompt.txt",description:"系统提示词"},{id:H("Poke-Agent"),name:"Poke Agent",category:"Poke",file:"Poke/Poke agent.txt",description:"代理提示词"},{id:H("Poke-P1"),name:"Poke P1",category:"Poke",file:"Poke/Poke_p1.txt",description:"P1 提示词"},{id:H("Poke-P2"),name:"Poke P2",category:"Poke",file:"Poke/Poke_p2.txt",description:"P2 提示词"},{id:H("Poke-P3"),name:"Poke P3",category:"Poke",file:"Poke/Poke_p3.txt",description:"P3 提示词"},{id:H("Poke-P4"),name:"Poke P4",category:"Poke",file:"Poke/Poke_p4.txt",description:"P4 提示词"},{id:H("Poke-P5"),name:"Poke P5",category:"Poke",file:"Poke/Poke_p5.txt",description:"P5 提示词"},{id:H("Poke-P6"),name:"Poke P6",category:"Poke",file:"Poke/Poke_p6.txt",description:"P6 提示词"},{id:H("Qoder-Quest-Action"),name:"Quest Action",category:"Qoder",file:"Qoder/Quest Action.txt",description:"任务动作提示词"},{id:H("Qoder-Quest-Design"),name:"Quest Design",category:"Qoder",file:"Qoder/Quest Design.txt",description:"任务设计提示词"},{id:H("Qoder-Prompt"),name:"Prompt",category:"Qoder",file:"Qoder/prompt.txt",description:"主提示词"},{id:H("Replit-Prompt"),name:"Prompt",category:"Replit",file:"Replit/Prompt.txt",description:"系统提示词"},{id:H("Replit-Tools"),name:"Tools",category:"Replit",file:"Replit/Tools.json",description:"工具定义"},{id:H("Same-Prompt"),name:"Prompt",category:"Same.dev",file:"Same.dev/Prompt.txt",description:"系统提示词"},{id:H("Same-Tools"),name:"Tools",category:"Same.dev",file:"Same.dev/Tools.json",description:"工具定义"},{id:H("Trae-Builder"),name:"Builder Prompt",category:"Trae",file:"Trae/Builder Prompt.txt",description:"构建器提示词"},{id:H("Trae-Builder-Tools"),name:"Builder Tools",category:"Trae",file:"Trae/Builder Tools.json",description:"工具定义"},{id:H("Trae-Chat"),name:"Chat Prompt",category:"Trae",file:"Trae/Chat Prompt.txt",description:"聊天提示词"},{id:H("Traycer-Phase-Prompts"),name:"Phase Mode Prompts",category:"Traycer AI",file:"Traycer AI/phase_mode_prompts.txt",description:"阶段模式提示词"},{id:H("Traycer-Phase-Tools"),name:"Phase Mode Tools",category:"Traycer AI",file:"Traycer AI/phase_mode_tools.json",description:"阶段工具定义"},{id:H("Traycer-Plan-Prompts"),name:"Plan Mode Prompts",category:"Traycer AI",file:"Traycer AI/plan_mode_prompts",description:"计划模式提示词"},{id:H("Traycer-Plan-Tools"),name:"Plan Mode Tools",category:"Traycer AI",file:"Traycer AI/plan_mode_tools.json",description:"计划工具定义"},{id:H("VSCode-Prompt"),name:"Prompt",category:"VSCode Agent",file:"VSCode Agent/Prompt.txt",description:"系统提示词"},{id:H("VSCode-Chat-Titles"),name:"Chat Titles",category:"VSCode Agent",file:"VSCode Agent/chat-titles.txt",description:"聊天标题"},{id:H("VSCode-Claude-Sonnet-4"),name:"Claude Sonnet 4",category:"VSCode Agent",file:"VSCode Agent/claude-sonnet-4.txt",description:"Claude Sonnet 4 提示词"},{id:H("VSCode-Gemini-2.5-Pro"),name:"Gemini 2.5 Pro",category:"VSCode Agent",file:"VSCode Agent/gemini-2.5-pro.txt",description:"Gemini 2.5 Pro 提示词"},{id:H("VSCode-GPT-4.1"),name:"GPT-4.1",category:"VSCode Agent",file:"VSCode Agent/gpt-4.1.txt",description:"GPT-4.1 提示词"},{id:H("VSCode-GPT-4o"),name:"GPT-4o",category:"VSCode Agent",file:"VSCode Agent/gpt-4o.txt",description:"GPT-4o 提示词"},{id:H("VSCode-GPT-5-Mini"),name:"GPT-5 Mini",category:"VSCode Agent",file:"VSCode Agent/gpt-5-mini.txt",description:"GPT-5 Mini 提示词"},{id:H("VSCode-GPT-5"),name:"GPT-5",category:"VSCode Agent",file:"VSCode Agent/gpt-5.txt",description:"GPT-5 提示词"},{id:H("VSCode-Tab-Completion"),name:"Tab Completion",category:"VSCode Agent",file:"VSCode Agent/nes-tab-completion.txt",description:"Tab 补全提示词"},{id:H("Warp-Prompt"),name:"Prompt",category:"Warp.dev",file:"Warp.dev/Prompt.txt",description:"系统提示词"},{id:H("Windsurf-Wave-11"),name:"Prompt Wave 11",category:"Windsurf",file:"Windsurf/Prompt Wave 11.txt",description:"Wave 11 提示词"},{id:H("Windsurf-Tools-Wave-11"),name:"Tools Wave 11",category:"Windsurf",file:"Windsurf/Tools Wave 11.txt",description:"Wave 11 工具定义"},{id:H("Xcode-Document"),name:"Document Action",category:"Xcode",file:"Xcode/DocumentAction.txt",description:"文档动作提示词"},{id:H("Xcode-Explain"),name:"Explain Action",category:"Xcode",file:"Xcode/ExplainAction.txt",description:"解释动作提示词"},{id:H("Xcode-Message"),name:"Message Action",category:"Xcode",file:"Xcode/MessageAction.txt",description:"消息动作提示词"},{id:H("Xcode-Playground"),name:"Playground Action",category:"Xcode",file:"Xcode/PlaygroundAction.txt",description:"Playground 动作提示词"},{id:H("Xcode-Preview"),name:"Preview Action",category:"Xcode",file:"Xcode/PreviewAction.txt",description:"预览动作提示词"},{id:H("Xcode-System"),name:"System",category:"Xcode",file:"Xcode/System.txt",description:"系统提示词"},{id:H("Zai-Prompt"),name:"Prompt",category:"Z.ai Code",file:"Z.ai Code/prompt.txt",description:"系统提示词"},{id:H("Dia-Prompt"),name:"Prompt",category:"dia",file:"dia/Prompt.txt",description:"系统提示词"},{id:H("v0-Prompt"),name:"Prompt",category:"v0",file:"v0 Prompts and Tools/Prompt.txt",description:"系统提示词"},{id:H("v0-Tools"),name:"Tools",category:"v0",file:"v0 Prompts and Tools/Tools.json",description:"工具定义"}],ee={bg:"#000000",bgSecondary:"#0A0A0A",bgTertiary:"#141414",border:"#262626",text:"#FAFAFA",textSecondary:"#A1A1A1",textMuted:"#6B6B6B",accent:"#FF6B35",accentMuted:"#FF6B3533"},Vw=()=>rl.length,kh=[{id:"prompt-engineering",name:"提示词工程",nameEn:"Prompt Engineering",icon:"🧠",count:0,color:"#FF6B35"},{id:"ai-tools",name:"智能工具",nameEn:"AI Tools",icon:"💻",count:Vw(),color:"#3B82F6"},{id:"writing",name:"写作创作",nameEn:"Writing",icon:"✍️",count:0,color:"#8B5CF6"},{id:"image-gen",name:"图像生成",nameEn:"Image Generation",icon:"🎨",count:0,color:"#EC4899"},{id:"data-analysis",name:"数据分析",nameEn:"Data Analysis",icon:"📊",count:0,color:"#10B981"},{id:"business",name:"商业营销",nameEn:"Business",icon:"💼",count:0,color:"#F59E0B"},{id:"translate",name:"翻译语言",nameEn:"Translation",icon:"🌐",count:0,color:"#06B6D4"}],Gw=[{id:"ai-programming",name:"AI 编程助手",tools:["Cursor Prompts","Windsurf","VSCode Agent","Trae","Replit","Augment Code"]},{id:"ai-agent",name:"AI Agent",tools:["Claude Code","Manus Agent","Devin AI","Junie","Kiro"]},{id:"ai-search",name:"AI 搜索",tools:["Perplexity","Copilot","NotionAi","Cluely"]},{id:"emerging",name:"新兴工具",tools:["Lovable","v0 Prompts and Tools","Leap.new","Poke","Qoder","Same.dev","Orchids.app"]},{id:"open-source",name:"开源方案",tools:["Open Source prompts","Anthropic","Google","Emergent"]}],Kw={"Cursor Prompts":"#6366F1",Windsurf:"#8B5CF6","VSCode Agent":"#3B82F6",Trae:"#10B981",Replit:"#F59E0B","Augment Code":"#EF4444","Claude Code":"#FF6B35","Manus Agent":"#EC4899","Devin AI":"#14B8A6",Junie:"#A855F7",Kiro:"#F97316",Perplexity:"#06B6D4",Copilot:"#22C55E",NotionAi:"#1A1A1A",Cluely:"#6366F1",Lovable:"#F43F5E","v0 Prompts and Tools":"#8B5CF6","Leap.new":"#10B981",Poke:"#F97316",Qoder:"#3B82F6","Same.dev":"#14B8A6","Orchids.app":"#EC4899","Open Source prompts":"#6B7280",Anthropic:"#FF6B35",Google:"#4285F4",Emergent:"#10B981",Amp:"#6366F1","Comet Assistant":"#F59E0B",CodeBuddy:"#EC4899","Warp.dev":"#1A1A1A",Xcode:"#3B82F6","Z.ai Code":"#8B5CF6","Traycer AI":"#14B8A6",dia:"#6366F1"},Qc=a=>a==="ai-tools"?rl.length>0:!1;function Xw(){const[a,r]=J.useState("menu"),[l,o]=J.useState(null),[d,p]=J.useState("all"),[f,h]=J.useState(null),[x,g]=J.useState(""),[y,_]=J.useState(!1),[T,w]=J.useState(0),[V,K]=J.useState(null),W=J.useRef(null),U=l?Qc(l):!1,le=J.useMemo(()=>{if(!U)return[];let Q=rl;if(d!=="all"){const Z=Gw.find(I=>I.id===d);Z&&(Q=Q.filter(I=>Z.tools.some(L=>I.category.includes(L))))}return x&&(Q=Q.filter(Z=>Z.name.toLowerCase().includes(x.toLowerCase())||Z.description.toLowerCase().includes(x.toLowerCase())||Z.category.toLowerCase().includes(x.toLowerCase()))),Q},[l,d,x,U]),X=J.useMemo(()=>{const Q={};return le.forEach(Z=>{Q[Z.category]||(Q[Z.category]=[]),Q[Z.category].push(Z)}),Q},[le]),he=J.useMemo(()=>Array.from(new Set(rl.map(Q=>Q.category))),[]),ve=async Q=>{await navigator.clipboard.writeText(Q),_(!0),setTimeout(()=>_(!1),2e3)},q=Q=>{const L=Math.max(0,Math.ceil(he.length/6)-1);let Y=T;Q==="left"?Y=Math.max(0,T-1):Y=Math.min(L,T+1),w(Y),W.current&&W.current.scrollTo({left:Y*6*100,behavior:"smooth"})},te=Q=>{p(Q);const Z=he.indexOf(Q),I=Math.floor(Z/6);w(I),W.current&&W.current.scrollTo({left:I*6*100,behavior:"smooth"})},ye=Q=>{o(Q),r("category"),p("all"),h(null),g(""),w(0)},ge=()=>{r("menu"),o(null),p("all"),h(null),g("")};return a==="menu"?u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:141:5",style:{backgroundColor:ee.bg},className:"min-h-screen",children:[u.jsx("header",{"code-path":"src\\sections\\SystemPromptsPage.tsx:142:7",style:{backgroundColor:ee.bgSecondary,borderBottom:`1px solid ${ee.border}`},className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:143:9",className:"flex items-center gap-4",children:[u.jsx("a",{"code-path":"src\\sections\\SystemPromptsPage.tsx:144:11",href:"/",style:{color:ee.textSecondary},className:"flex items-center gap-2 hover:text-white",children:u.jsx(jr,{"code-path":"src\\sections\\SystemPromptsPage.tsx:144:116",className:"w-5 h-5"})}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:145:11",style:{backgroundColor:ee.border},className:"w-px h-6"}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:146:11",className:"flex items-center gap-3",children:[u.jsx(bs,{"code-path":"src\\sections\\SystemPromptsPage.tsx:146:52",style:{color:ee.accent},className:"w-5 h-5"}),u.jsx("h1",{"code-path":"src\\sections\\SystemPromptsPage.tsx:146:116",className:"text-lg font-semibold",style:{fontFamily:"-apple-system, SF Pro Display, Microsoft YaHei, sans-serif"},children:"神秘咒语盒"})]})]})}),u.jsxs("main",{"code-path":"src\\sections\\SystemPromptsPage.tsx:149:7",className:"px-6 py-12 max-w-7xl mx-auto",children:[u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:150:9",className:"text-center mb-16",children:[u.jsx("h2",{"code-path":"src\\sections\\SystemPromptsPage.tsx:150:44",style:{fontFamily:"Times New Roman, Times, serif",color:ee.text},className:"text-5xl font-bold mb-4",children:"MYSTERY SPELL BOX"}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:150:182",style:{color:ee.textSecondary},className:"text-lg",children:"探索 AI 工具思维方式的秘密世界"})]}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:151:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:kh.map((Q,Z)=>u.jsxs("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:153:13",onClick:()=>ye(Q.id),onMouseEnter:()=>K(Z),onMouseLeave:()=>K(null),style:{backgroundColor:ee.bgSecondary,borderColor:V===Z?Q.color:ee.border},className:`relative p-8 rounded-xl text-left transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border ${V===Z?"scale-105":"scale-100"}`,children:[u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:154:15",className:"absolute left-0 top-0 w-1 h-full rounded-l-xl transition-all duration-300",style:{backgroundColor:Q.color,transform:V===Z?"scaleY(1)":"scaleY(0)"}}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:155:15",className:"text-4xl mb-4",children:Q.icon}),u.jsx("h3",{"code-path":"src\\sections\\SystemPromptsPage.tsx:156:15",style:{fontFamily:"Times New Roman, Times, serif",color:ee.text},className:"text-xl font-bold mb-2",children:Q.name}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:157:15",style:{color:ee.textSecondary},className:"text-sm mb-3",children:Q.nameEn}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:158:15",style:{color:Qc(Q.id)?Q.color:ee.textMuted},className:"text-sm font-medium",children:Qc(Q.id)?`${Q.count} 个提示词`:"敬请期待"})]},Q.id))})]})]}):U?u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:192:7",style:{backgroundColor:ee.bg,minHeight:"100vh",color:ee.text},className:"flex flex-col",children:[u.jsxs("header",{"code-path":"src\\sections\\SystemPromptsPage.tsx:193:9",style:{backgroundColor:ee.bgSecondary,borderBottom:`1px solid ${ee.border}`},className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",children:[u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:194:11",className:"flex items-center gap-4",children:[u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:195:13",onClick:ge,style:{color:ee.textSecondary},className:"flex items-center gap-2 hover:text-white",children:u.jsx(nl,{"code-path":"src\\sections\\SystemPromptsPage.tsx:195:141",className:"w-5 h-5"})}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:196:13",style:{backgroundColor:ee.border},className:"w-px h-6"}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:197:13",className:"flex items-center gap-3",children:[u.jsx(bs,{"code-path":"src\\sections\\SystemPromptsPage.tsx:197:54",style:{color:ee.accent},className:"w-5 h-5"}),u.jsx("h1",{"code-path":"src\\sections\\SystemPromptsPage.tsx:197:118",className:"text-lg font-semibold",style:{fontFamily:"Times New Roman, Times, serif"},children:"智能工具"})]})]}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:199:11",style:{color:ee.textMuted},className:"text-sm",children:[le.length," 个提示词"]})]}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:203:9",style:{backgroundColor:ee.bgSecondary,borderBottom:`1px solid ${ee.border}`},className:"relative py-3",children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:204:11",className:"flex items-center gap-2 px-4 max-w-7xl mx-auto",children:[u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:205:13",onClick:()=>q("left"),style:{color:ee.textSecondary,backgroundColor:ee.bgTertiary},className:"p-2 rounded-lg hover:bg-gray-800 flex-shrink-0",children:u.jsx(a1,{"code-path":"src\\sections\\SystemPromptsPage.tsx:205:194",className:"w-5 h-5"})}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:206:13",ref:W,className:"flex gap-2 overflow-x-auto scrollbar-hide flex-1",style:{scrollbarWidth:"none"},children:[u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:207:15",onClick:()=>{p("all"),w(0),W.current&&W.current.scrollTo({left:0,behavior:"smooth"})},style:{backgroundColor:d==="all"?ee.accent:ee.bgTertiary,color:d==="all"?"#000":ee.textSecondary},className:"px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap hover:scale-105",children:"全部"}),he.map(Q=>u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:215:17",onClick:()=>te(Q),style:{backgroundColor:d===Q?ee.accent:ee.bgTertiary,color:d===Q?"#000":ee.textSecondary},className:"px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap hover:scale-105",children:Q},Q))]}),u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:225:13",onClick:()=>q("right"),style:{color:ee.textSecondary,backgroundColor:ee.bgTertiary},className:"p-2 rounded-lg hover:bg-gray-800 flex-shrink-0",children:u.jsx(cu,{"code-path":"src\\sections\\SystemPromptsPage.tsx:225:195",className:"w-5 h-5"})})]})}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:229:9",className:"flex-1 flex overflow-hidden",children:[u.jsxs("aside",{"code-path":"src\\sections\\SystemPromptsPage.tsx:231:11",style:{backgroundColor:ee.bgSecondary,borderRight:`1px solid ${ee.border}`},className:"w-80 flex flex-col overflow-hidden",children:[u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:232:13",className:"p-3",style:{borderBottom:`1px solid ${ee.border}`},children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:233:15",className:"relative",children:[u.jsx(Ah,{"code-path":"src\\sections\\SystemPromptsPage.tsx:234:17",className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",style:{color:ee.textMuted}}),u.jsx("input",{"code-path":"src\\sections\\SystemPromptsPage.tsx:235:17",type:"text",placeholder:"搜索提示词...",value:x,onChange:Q=>g(Q.target.value),style:{backgroundColor:ee.bgTertiary,border:`1px solid ${ee.border}`,color:ee.text},className:"w-full pl-10 pr-4 py-2.5 text-sm rounded-lg focus:outline-none"})]})}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:245:13",className:"flex-1 overflow-y-auto",children:Object.keys(X).length>0?Object.entries(X).map(([Q,Z])=>u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:248:19",className:"mb-2",children:[u.jsxs("h3",{"code-path":"src\\sections\\SystemPromptsPage.tsx:249:21",style:{color:Kw[Q]||ee.accent,backgroundColor:ee.bgTertiary},className:"px-4 py-2 text-xs font-semibold sticky top-0",children:[Q," · ",Z.length]}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:252:21",className:"px-2",children:Z.map(I=>u.jsxs("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:254:25",onClick:()=>{h(I)},style:{backgroundColor:f?.id===I.id?ee.accentMuted:"transparent",borderColor:f?.id===I.id?ee.accent:"transparent"},className:`w-full text-left px-3 py-3 rounded-lg text-sm mb-1 hover:bg-gray-900 border ${f?.id===I.id?"border-l-2":""}`,children:[u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:260:27",style:{color:f?.id===I.id?ee.accent:ee.text},className:"font-medium truncate",children:I.name}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:261:27",style:{color:ee.textMuted},className:"text-xs truncate mt-0.5",children:I.description})]},I.id))})]},Q)):u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:268:17",style:{color:ee.textMuted},className:"p-8 text-center text-sm",children:"没有找到匹配的提示词"})})]}),u.jsx("main",{"code-path":"src\\sections\\SystemPromptsPage.tsx:274:11",className:"flex-1 overflow-hidden flex flex-col",style:{backgroundColor:ee.bg},children:f?u.jsxs(u.Fragment,{children:[u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:277:17",style:{backgroundColor:ee.bgSecondary,borderBottom:`1px solid ${ee.border}`},className:"p-6 flex items-center justify-between",children:[u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:278:19",children:[u.jsx("h2",{"code-path":"src\\sections\\SystemPromptsPage.tsx:279:21",className:"text-xl font-semibold",style:{fontFamily:"Times New Roman, Times, serif"},children:f.name}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:280:21",style:{color:ee.textSecondary},className:"text-sm mt-1",children:f.description}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:281:21",style:{color:ee.textMuted},className:"text-xs mt-2",children:["来源: ",f.category]})]}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:283:19",className:"flex gap-3",children:[u.jsx("a",{"code-path":"src\\sections\\SystemPromptsPage.tsx:284:21",href:`https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/${f.file}`,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:ee.bgTertiary,border:`1px solid ${ee.border}`,color:ee.textSecondary},className:"p-2.5 rounded-lg hover:border-gray-500",children:u.jsx(Cr,{"code-path":"src\\sections\\SystemPromptsPage.tsx:284:338",className:"w-4 h-4"})}),u.jsx(Qw,{"code-path":"src\\sections\\SystemPromptsPage.tsx:285:21",prompt:f,onCopy:ve,copied:y})]})]}),u.jsx(Fw,{"code-path":"src\\sections\\SystemPromptsPage.tsx:288:17",prompt:f})]}):u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:291:15",className:"flex-1 flex items-center justify-center",style:{color:ee.textMuted},children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:292:17",className:"text-center",children:[u.jsx(bs,{"code-path":"src\\sections\\SystemPromptsPage.tsx:293:19",className:"w-16 h-16 mx-auto mb-4 opacity-20"}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:294:19",className:"text-lg mb-2",children:"选择一个提示词开始探索"}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:295:19",className:"text-sm opacity-60",children:"探索 AI 工具思维方式的神秘世界"})]})})})]})]}):u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:168:5",style:{backgroundColor:ee.bg,minHeight:"100vh"},className:"flex flex-col",children:[u.jsx("header",{"code-path":"src\\sections\\SystemPromptsPage.tsx:169:7",style:{backgroundColor:ee.bgSecondary,borderBottom:`1px solid ${ee.border}`},className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:170:9",className:"flex items-center gap-4",children:[u.jsx("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:171:11",onClick:ge,style:{color:ee.textSecondary},className:"flex items-center gap-2 hover:text-white",children:u.jsx(nl,{"code-path":"src\\sections\\SystemPromptsPage.tsx:171:139",className:"w-5 h-5"})}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:172:11",style:{backgroundColor:ee.border},className:"w-px h-6"}),u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:173:11",className:"flex items-center gap-3",children:[u.jsx(bs,{"code-path":"src\\sections\\SystemPromptsPage.tsx:173:52",style:{color:ee.accent},className:"w-5 h-5"}),u.jsx("h1",{"code-path":"src\\sections\\SystemPromptsPage.tsx:173:116",className:"text-lg font-semibold",style:{fontFamily:"Times New Roman, Times, serif"},children:kh.find(Q=>Q.id===l)?.name})]})]})}),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:176:7",className:"flex-1 flex items-center justify-center",children:u.jsxs("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:177:9",className:"text-center",children:[u.jsx(bs,{"code-path":"src\\sections\\SystemPromptsPage.tsx:178:11",className:"w-20 h-20 mx-auto mb-6",style:{color:ee.accent,opacity:.3}}),u.jsx("h2",{"code-path":"src\\sections\\SystemPromptsPage.tsx:179:11",style:{fontFamily:"Times New Roman, Times, serif",color:ee.text},className:"text-3xl font-bold mb-4",children:"Coming Soon"}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:180:11",style:{color:ee.textSecondary},className:"text-lg",children:"该分类内容正在整理中，敬请期待"}),u.jsx("p",{"code-path":"src\\sections\\SystemPromptsPage.tsx:181:11",style:{color:ee.textMuted},className:"text-sm mt-2",children:"This category is under construction"})]})})]})}function Qw({prompt:a,onCopy:r,copied:l}){const[o,d]=J.useState(""),[p,f]=J.useState(!1);return J.useEffect(()=>{a&&(f(!0),fetch(`/system-prompts/${a.file}`).then(h=>h.text()).then(h=>{d(h),f(!1)}).catch(()=>{d(""),f(!1)}))},[a]),u.jsxs("button",{"code-path":"src\\sections\\SystemPromptsPage.tsx:320:5",onClick:()=>!p&&o&&r(o),style:{backgroundColor:l?"#22C55E":ee.accent},className:"flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white",children:[u.jsx(ll,{"code-path":"src\\sections\\SystemPromptsPage.tsx:321:7",className:"w-4 h-4"}),l?"已复制!":"复制"]})}function Fw({prompt:a}){const[r,l]=J.useState(""),[o,d]=J.useState(!0);return J.useEffect(()=>{d(!0),fetch(`/system-prompts/${a.file}`).then(p=>p.text()).then(p=>{l(p),d(!1)}).catch(()=>{l("加载失败"),d(!1)})},[a]),u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:337:5",className:"flex-1 overflow-y-auto p-6",children:o?u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:339:9",className:"flex items-center justify-center h-full",style:{color:ee.textMuted},children:u.jsx("div",{"code-path":"src\\sections\\SystemPromptsPage.tsx:339:102",className:"animate-spin w-8 h-8 border-2 rounded-full",style:{borderColor:"#FF6B3530",borderTopColor:"#FF6B35"}})}):u.jsx("pre",{"code-path":"src\\sections\\SystemPromptsPage.tsx:341:9",style:{backgroundColor:ee.bgSecondary,border:`1px solid ${ee.border}`,color:ee.textSecondary,fontFamily:'Georgia, "Times New Roman", Times, serif',lineHeight:1.8},className:"whitespace-pre-wrap text-sm p-6 rounded-xl overflow-x-auto",children:r})})}const Zw=[{id:"newyorkover",title:"NEWYORKOVER",description:"3D 杂志画廊 - 使用 Three.js 实现的沉浸式 3D 杂志堆叠效果",href:"/experiments/newyorkover.html",tags:["Three.js","3D","交互设计"],color:"#EC4899"}];function Ww(){return u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:17:5",className:"min-h-screen bg-lobster-dark text-white",children:[u.jsx("header",{"code-path":"src\\sections\\DesignShowcasePage.tsx:19:7",className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",style:{backgroundColor:"#0A0A0A",borderBottom:"1px solid #262626"},children:u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:20:9",className:"flex items-center gap-4",children:[u.jsx("a",{"code-path":"src\\sections\\DesignShowcasePage.tsx:21:11",href:"/",className:"flex items-center gap-2",style:{color:"#A1A1A1"},children:u.jsx(jr,{"code-path":"src\\sections\\DesignShowcasePage.tsx:22:13",className:"w-5 h-5"})}),u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:24:11",style:{backgroundColor:"#262626"},className:"w-px h-6"}),u.jsx("h1",{"code-path":"src\\sections\\DesignShowcasePage.tsx:25:11",className:"text-lg font-semibold",style:{fontFamily:"Times New Roman, Times, serif"},children:"设计样板间"})]})}),u.jsx("main",{"code-path":"src\\sections\\DesignShowcasePage.tsx:30:7",className:"p-6",children:u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:31:9",className:"max-w-6xl mx-auto",children:[u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:32:11",className:"text-center mb-12",children:[u.jsx("h2",{"code-path":"src\\sections\\DesignShowcasePage.tsx:33:13",style:{fontFamily:"Times New Roman, Times, serif",color:"#FAFAFA"},className:"text-4xl font-bold mb-4",children:"DESIGN SHOWCASE"}),u.jsx("p",{"code-path":"src\\sections\\DesignShowcasePage.tsx:34:13",style:{color:"#A1A1A1"},className:"text-lg",children:"归档前沿 UI/UX 设计实验与创意实现"})]}),u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:38:11",className:"grid grid-cols-1 gap-8",children:Zw.map(a=>u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:40:15",className:"rounded-2xl overflow-hidden",style:{backgroundColor:"#0A0A0A",border:"1px solid #262626"},children:[u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:46:17",className:"relative h-[70vh] bg-black",children:u.jsx("iframe",{"code-path":"src\\sections\\DesignShowcasePage.tsx:47:19",src:a.href,className:"w-full h-full border-0",title:a.title,sandbox:"allow-scripts allow-same-origin"})}),u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:56:17",className:"p-6",style:{borderTop:"1px solid #262626"},children:[u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:57:19",className:"flex items-start justify-between mb-4",children:[u.jsxs("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:58:21",children:[u.jsx("h3",{"code-path":"src\\sections\\DesignShowcasePage.tsx:59:23",className:"text-2xl font-bold mb-2",style:{fontFamily:"Times New Roman, Times, serif"},children:a.title}),u.jsx("p",{"code-path":"src\\sections\\DesignShowcasePage.tsx:60:23",style:{color:"#A1A1A1"},children:a.description})]}),u.jsxs("a",{"code-path":"src\\sections\\DesignShowcasePage.tsx:62:21",href:a.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",style:{backgroundColor:a.color,color:"#fff"},children:[u.jsx(Cr,{"code-path":"src\\sections\\DesignShowcasePage.tsx:69:23",className:"w-4 h-4"}),"新窗口打开"]})]}),u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:75:19",className:"flex gap-2 flex-wrap",children:a.tags.map(r=>u.jsx("span",{"code-path":"src\\sections\\DesignShowcasePage.tsx:77:23",className:"px-3 py-1 text-xs rounded-full",style:{backgroundColor:"#262626",color:"#A1A1A1"},children:r},r))})]})]},a.id))})]})}),u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:94:7",className:"border-t border-white/10 py-8",style:{backgroundColor:"#0A0A0A"},children:u.jsx("div",{"code-path":"src\\sections\\DesignShowcasePage.tsx:95:9",className:"max-w-6xl mx-auto text-center",children:u.jsx("p",{"code-path":"src\\sections\\DesignShowcasePage.tsx:96:11",className:"text-white/40 text-sm",children:"© 2026 泥巴猪的实验田 · 设计样板间"})})})]})}const la=[{id:"s00",title:"Introduction",subtitle:"课程介绍",motto:"Model is Agent. Code is Harness.",phase:0,docUrl:"https://github.com/shareAI-lab/learn-claude-code/blob/main/README-zh.md",codeUrl:"",content:`# Learn Claude Code - Agent Harness 工程教程

## 概述

本教程通过 Claude Code 的架构，系统性地教授 Agent Harness（智能体架构）工程。

## 核心哲学

> "Model is Agent. Code is Harness. Build good Harness, and Agent will do the rest."
>
> **模型即智能体，代码即架构。构建好的架构，智能体将完成剩余工作。**

## 课程结构

**12 节渐进式课程** — 每节增加一个 Harness 机制：

### 第一阶段：基础
- s01: Agent Loop - Agent 循环核心模式
- s02: Tool Use - 工具使用与调度

### 第二阶段：规划
- s03: TodoWrite - 任务清单管理
- s04: Subagents - 子代理与上下文隔离
- s05: Skills - 按需加载技能
- s06: Context Compact - 上下文压缩

### 第三阶段：持久化
- s07: Tasks - 持久化任务系统
- s08: Background Tasks - 后台任务执行

### 第四阶段：团队协作
- s09: Agent Teams - 多代理团队协作
- s10: Team Protocols - 团队协调协议
- s11: Autonomous Agents - 自主代理
- s12: Worktree Isolation - 工作树隔离

## 核心工具

- **Kode Agent CLI** - 开源编码智能体 (\`npm i -g @shareai-lab/kode\`)
- **Kode Agent SDK** - 可嵌入的智能体能力
- **Web 平台** - 交互式可视化和教程

## 姊妹项目

**claw0** - 将智能体从反应式转变为主动式：
- Heartbeat（周期性唤醒）
- Cron（定时任务）
- IM 多渠道路由
- 持久化记忆

## 快速开始

\`\`\`bash
git clone https://github.com/shareAI-lab/learn-claude-code
cd learn-claude-code
pip install -r requirements.txt
cp .env.example .env  # 添加你的 ANTHROPIC_API_KEY

python agents/s01_agent_loop.py  # 从这里开始
\`\`\`

## 许可证

MIT`,code:`# 本课程为介绍章节，不包含代码示例
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
`}];function Jw(a){return la.find(r=>r.id===a)}function $w(a){const r=la.findIndex(l=>l.id===a);return{prev:r>0?la[r-1]:null,next:r<la.length-1?la[r+1]:null}}const Ue={bg:"#000000",bgSecondary:"#0A0A0A",bgTertiary:"#111111",border:"#1A1A1A",textSecondary:"#B0B0B0",textMuted:"#666666",accent:"#00D9C0",accentMuted:"#0D4D47"},ev={s00:{cn:"课程介绍",en:"Introduction"},s01:{cn:"Agent 循环",en:"Agent Loop"},s02:{cn:"工具使用",en:"Tool Use"},s03:{cn:"待办写入",en:"TodoWrite"},s04:{cn:"子智能体",en:"Subagents"},s05:{cn:"技能加载",en:"Skills"},s06:{cn:"上下文压缩",en:"Context Compact"},s07:{cn:"任务系统",en:"Tasks"},s08:{cn:"后台任务",en:"Background Tasks"},s09:{cn:"智能体团队",en:"Agent Teams"},s10:{cn:"团队协议",en:"Team Protocols"},s11:{cn:"自治智能体",en:"Autonomous Agents"},s12:{cn:"Worktree 隔离",en:"Worktree Isolation"}},tv=()=>{const a={};return la.forEach(r=>{a[r.phase]||(a[r.phase]=[]),a[r.phase].push(r)}),a};function nv(){const[a,r]=J.useState(!1),[l,o]=J.useState(0),d=tv();J.useEffect(()=>{const h=setTimeout(()=>r(!0),150);return()=>clearTimeout(h)},[]);const p=h=>{o(l===h?null:h)},f=h=>ev[h]||{cn:h,en:h};return u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:66:5",style:{backgroundColor:Ue.bg},className:"min-h-screen text-white",children:[u.jsxs("header",{"code-path":"src\\sections\\LearnCCPage.tsx:68:7",style:{backgroundColor:Ue.bgSecondary,borderBottom:`1px solid ${Ue.border}`},className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:75:9",className:"flex items-center gap-4",children:[u.jsxs("a",{"code-path":"src\\sections\\LearnCCPage.tsx:76:11",href:"/",className:"flex items-center gap-2 transition-colors cursor-pointer hover:opacity-80",style:{color:Ue.textSecondary},children:[u.jsx(jr,{"code-path":"src\\sections\\LearnCCPage.tsx:81:13",className:"w-5 h-5"}),u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:82:13",children:"首页"})]}),u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:84:11",style:{backgroundColor:Ue.border},className:"w-px h-6"}),u.jsx("h1",{"code-path":"src\\sections\\LearnCCPage.tsx:85:11",className:"text-lg font-semibold",children:"Agent 入门教程"})]}),u.jsx("a",{"code-path":"src\\sections\\LearnCCPage.tsx:89:9",href:"https://github.com/shareAI-lab/learn-claude-code",target:"_blank",rel:"noopener noreferrer",style:{color:Ue.textSecondary},className:"hover:text-white transition-colors cursor-pointer",children:u.jsx(Ar,{"code-path":"src\\sections\\LearnCCPage.tsx:96:11",className:"w-5 h-5"})})]}),u.jsx("section",{"code-path":"src\\sections\\LearnCCPage.tsx:101:7",className:`py-20 px-6 transition-all duration-700 ease-out ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:106:9",className:"max-w-4xl mx-auto text-center",children:[u.jsxs("h2",{"code-path":"src\\sections\\LearnCCPage.tsx:107:11",className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6",children:["Agent ",u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:110:19",style:{color:Ue.accent},children:"入门"}),"教程"]}),u.jsx("p",{"code-path":"src\\sections\\LearnCCPage.tsx:112:11",style:{color:Ue.textSecondary},className:"text-lg md:text-xl mb-8 max-w-2xl mx-auto",children:"从零掌握 AI Agent 的 12 堂课 · 基于 Claude Code 的系统化学习路径"}),u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:115:11",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm",style:{backgroundColor:`${Ue.accent}15`,color:Ue.accent},children:u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:119:13",children:"点击章节卡片开始学习"})})]})}),u.jsx("section",{"code-path":"src\\sections\\LearnCCPage.tsx:125:7",className:"px-6 pb-20",children:u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:126:9",className:"max-w-4xl mx-auto",children:Object.entries(d).map(([h,x],g)=>u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:128:13",className:`mb-6 transition-all duration-500 ease-out ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,style:{transitionDelay:`${g*100+200}ms`},children:[u.jsxs("button",{"code-path":"src\\sections\\LearnCCPage.tsx:136:15",onClick:()=>p(Number(h)),className:"w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300 cursor-pointer",style:{backgroundColor:Ue.bgSecondary,border:`1px solid ${Ue.border}`},children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:144:17",className:"flex items-center gap-4",children:[u.jsxs("span",{"code-path":"src\\sections\\LearnCCPage.tsx:145:19",className:"px-4 py-1.5 rounded-lg text-sm font-semibold",style:{backgroundColor:Ue.accentMuted,color:Ue.accent},children:["Phase ",h]}),u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:151:19",style:{color:Ue.textSecondary},children:x.map(y=>f(y.id).cn).join(" · ")})]}),l===Number(h)?u.jsx(i1,{"code-path":"src\\sections\\LearnCCPage.tsx:156:19",className:"w-5 h-5",style:{color:Ue.textMuted}}):u.jsx(t1,{"code-path":"src\\sections\\LearnCCPage.tsx:158:19",className:"w-5 h-5",style:{color:Ue.textMuted}})]}),u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:163:15",className:`grid gap-3 mt-4 overflow-hidden transition-all duration-500 ease-out ${l===Number(h)?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:168:17",className:"flex flex-col gap-3",children:x.map((y,_)=>{const T=f(y.id);return u.jsxs("a",{"code-path":"src\\sections\\LearnCCPage.tsx:172:23",href:`/learn-cc/${y.id}`,className:"group relative overflow-hidden rounded-lg transition-all duration-300 hover:translate-x-2 cursor-pointer",style:{backgroundColor:Ue.bgTertiary,border:`1px solid ${Ue.border}`,borderLeft:`3px solid ${Ue.accent}`,transitionDelay:`${_*50}ms`},children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCPage.tsx:184:25",className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",style:{background:`linear-gradient(90deg, ${Ue.accentMuted}20 0%, transparent 100%)`}}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:191:25",className:"relative p-5 flex items-center justify-between",children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:193:27",className:"flex items-center gap-4",children:[u.jsx("span",{"code-path":"src\\sections\\LearnCCPage.tsx:194:29",className:"text-xs font-mono px-2 py-1 rounded",style:{backgroundColor:Ue.bgSecondary,color:Ue.accent},children:y.id.toUpperCase()}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:200:29",children:[u.jsx("h3",{"code-path":"src\\sections\\LearnCCPage.tsx:201:31",className:"text-base font-semibold group-hover:text-white transition-colors",style:{color:Ue.textSecondary},children:T.cn}),u.jsx("p",{"code-path":"src\\sections\\LearnCCPage.tsx:207:31",style:{color:Ue.textMuted},className:"text-sm",children:T.en})]})]}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCPage.tsx:214:27",className:"flex items-center gap-3",children:[u.jsx("p",{"code-path":"src\\sections\\LearnCCPage.tsx:215:29",className:"text-xs italic hidden md:block",style:{color:Ue.textMuted,maxWidth:"200px"},children:y.motto}),u.jsx(il,{"code-path":"src\\sections\\LearnCCPage.tsx:221:29",className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1",style:{color:Ue.accent}})]})]})]},y.id)})})})]},h))})}),u.jsx("footer",{"code-path":"src\\sections\\LearnCCPage.tsx:238:7",style:{borderTop:`1px solid ${Ue.border}`},className:"py-8 text-center",children:u.jsx("p",{"code-path":"src\\sections\\LearnCCPage.tsx:242:9",style:{color:Ue.textMuted},className:"text-sm",children:"© 2026 泥巴猪的实验田 · Agent 入门教程"})})]})}const de={bg:"#000000",bgSecondary:"#0A0A0A",bgTertiary:"#111111",border:"#1A1A1A",text:"#FAFAFA",textSecondary:"#B0B0B0",textMuted:"#666666",accent:"#00D9C0",accentMuted:"#0D4D47"},ws="'IBM Plex Mono', 'SF Mono', Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",av={s00:{cn:"课程介绍",en:"Introduction"},s01:{cn:"Agent 循环",en:"Agent Loop"},s02:{cn:"工具使用",en:"Tool Use"},s03:{cn:"待办写入",en:"TodoWrite"},s04:{cn:"子智能体",en:"Subagents"},s05:{cn:"技能加载",en:"Skills"},s06:{cn:"上下文压缩",en:"Context Compact"},s07:{cn:"任务系统",en:"Tasks"},s08:{cn:"后台任务",en:"Background Tasks"},s09:{cn:"智能体团队",en:"Agent Teams"},s10:{cn:"团队协议",en:"Team Protocols"},s11:{cn:"自治智能体",en:"Autonomous Agents"},s12:{cn:"Worktree 隔离",en:"Worktree Isolation"}},sv=a=>{const r=a.split(`
`),l=[];let o=!1,d=[],p=0;for(let f=0;f<r.length;f++){const h=r[f];if(h.startsWith("```")){o?(l.push(u.jsx("pre",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:59:11",className:"rounded-lg my-4 overflow-x-auto",style:{backgroundColor:"#0A0A0A",border:"1px solid #1A1A1A",padding:"1rem",fontFamily:ws,fontSize:"0.875rem",lineHeight:"1.6"},children:u.jsx("code",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:71:13",style:{fontFamily:ws,color:de.textSecondary},children:d.join(`
`)})},`code-${p++}`)),d=[],o=!1):o=!0;continue}if(o){d.push(h);continue}if(h.startsWith("# "))l.push(u.jsx("h1",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:92:9",className:"text-2xl font-bold mb-6 mt-8",style:{color:de.text},children:h.slice(2)},f));else if(h.startsWith("## "))l.push(u.jsx("h2",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:98:9",className:"text-xl font-bold mb-4 mt-6",style:{color:de.text},children:h.slice(3)},f));else if(h.startsWith("### "))l.push(u.jsx("h3",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:104:9",className:"text-lg font-semibold mb-3 mt-5",style:{color:de.text},children:h.slice(4)},f));else if(h.startsWith("> "))l.push(u.jsx("blockquote",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:112:9",className:"border-l-4 my-4 pl-4 py-1",style:{borderColor:de.accent,color:de.textSecondary,fontStyle:"italic",backgroundColor:`${de.accentMuted}30`,borderRadius:"0 8px 8px 0"},children:Fc(h.slice(2))},f));else if(h.startsWith("- ")||h.startsWith("* "))l.push(u.jsx("li",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:130:9",className:"ml-6 mb-2 list-disc",style:{color:de.textSecondary},children:Fc(h.slice(2))},f));else if(h.startsWith("|")){const x=h.split("|").filter(g=>g.trim());if(x.some(g=>g.includes("---")))continue;l.push(u.jsx("tr",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:140:9",className:"border-b",style:{borderColor:de.border},children:x.map((g,y)=>u.jsx("td",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:142:13",className:"px-4 py-2",style:{color:de.textSecondary},children:g.trim()},y))},f))}else h.trim()===""?l.push(u.jsx("br",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:151:21"},f)):l.push(u.jsx("p",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:156:9",className:"mb-4 leading-relaxed",style:{color:de.textSecondary},children:Fc(h)},f))}return l},Fc=a=>a.split(/(`[^`]+`)/).map((l,o)=>l.startsWith("`")&&l.endsWith("`")?u.jsx("code",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:172:9",className:"px-1.5 py-0.5 rounded text-sm",style:{backgroundColor:de.bgSecondary,color:de.accent,fontFamily:ws},children:l.slice(1,-1)},o):l);function rv({lessonId:a}){const[r,l]=J.useState("docs"),[o,d]=J.useState(!1),[p,f]=J.useState(!1),h=a?Jw(a):null,{prev:x,next:g}=a?$w(a):{prev:null,next:null};J.useEffect(()=>{f(!0)},[]);const y=()=>{h?.code&&(navigator.clipboard.writeText(h.code),d(!0),setTimeout(()=>d(!1),2e3))},_=w=>av[w]||{cn:w,en:w};if(!h)return u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:213:7",style:{backgroundColor:de.bg},className:"min-h-screen text-white flex items-center justify-center",children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:214:9",className:"text-center",children:[u.jsx("p",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:215:11",style:{color:de.textMuted},className:"mb-4",children:"课程不存在"}),u.jsx("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:216:11",href:"/learn-cc",style:{color:de.accent},className:"hover:underline",children:"返回课程列表"})]})});const T=_(h.id);return u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:225:5",style:{backgroundColor:de.bg},className:"min-h-screen text-white",children:[u.jsxs("header",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:227:7",style:{backgroundColor:de.bgSecondary,borderBottom:`1px solid ${de.border}`},className:"h-16 flex items-center justify-between px-6 sticky top-0 z-50",children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:234:9",className:"flex items-center gap-4",children:[u.jsxs("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:235:11",href:"/learn-cc",className:"flex items-center gap-2 transition-colors hover:opacity-80 cursor-pointer",style:{color:de.textSecondary},children:[u.jsx(nl,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:240:13",className:"w-5 h-5"}),u.jsx("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:241:13",children:"返回"})]}),u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:243:11",style:{backgroundColor:de.border},className:"w-px h-6"}),u.jsxs("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:244:11",className:"px-2 py-1 text-xs rounded-lg",style:{backgroundColor:de.accentMuted,color:de.accent},children:["Phase ",h.phase]}),u.jsxs("h1",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:250:11",className:"text-lg font-semibold hidden md:block",children:[T.cn," · ",T.en]})]}),u.jsx("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:254:9",href:"https://github.com/shareAI-lab/learn-claude-code",target:"_blank",rel:"noopener noreferrer",style:{color:de.textSecondary},className:"hover:text-white transition-colors cursor-pointer",children:u.jsx(Ar,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:261:11",className:"w-5 h-5"})})]}),u.jsx("section",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:266:7",className:`py-16 px-6 transition-all duration-700 ${p?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:269:9",className:"max-w-4xl mx-auto text-center",children:[u.jsx("h2",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:270:11",className:"text-4xl md:text-5xl font-bold mb-4",children:u.jsx("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:273:13",style:{color:de.textSecondary},children:T.cn})}),u.jsx("p",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:275:11",style:{color:de.textSecondary},className:"text-xl mb-4",children:T.en}),u.jsxs("p",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:278:11",className:"text-lg italic",style:{color:de.textMuted,borderLeft:`3px solid ${de.accent}`,paddingLeft:"1rem",display:"inline-block"},children:['"',h.motto,'"']})]})}),u.jsx("section",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:293:7",className:"px-6 mb-8",children:u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:294:9",className:"max-w-4xl mx-auto",children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:295:11",className:"inline-flex rounded-lg p-1",style:{backgroundColor:de.bgSecondary,border:`1px solid ${de.border}`},children:[u.jsxs("button",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:299:13",onClick:()=>l("docs"),className:`flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-200 cursor-pointer ${r==="docs"?"shadow-sm":""}`,style:{backgroundColor:r==="docs"?de.accentMuted:"transparent",color:r==="docs"?de.accent:de.textMuted},children:[u.jsx(k1,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:309:15",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:310:15",children:"文档"})]}),u.jsxs("button",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:312:13",onClick:()=>l("code"),className:`flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-200 cursor-pointer ${r==="code"?"shadow-sm":""}`,style:{backgroundColor:r==="code"?de.accentMuted:"transparent",color:r==="code"?de.accent:de.textMuted},children:[u.jsx(uu,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:322:15",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:323:15",children:"代码"})]})]})})}),u.jsx("section",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:330:7",className:"px-6 pb-16",children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:331:9",className:"max-w-4xl mx-auto",children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:333:11",className:`transition-all duration-300 ${r==="docs"?"opacity-100":"opacity-0 hidden"}`,children:u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:336:13",className:"rounded-xl p-8",style:{backgroundColor:de.bgTertiary,border:`1px solid ${de.border}`},children:u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:343:15",className:"prose prose-invert max-w-none",children:sv(h.content)})})}),u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:350:11",className:`transition-all duration-300 ${r==="code"?"opacity-100":"opacity-0 hidden"}`,children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:353:13",className:"rounded-xl overflow-hidden",style:{backgroundColor:"#0A0A0A",border:`1px solid ${de.border}`},children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:361:15",className:"flex items-center justify-between px-5 py-3",style:{backgroundColor:de.bgSecondary,borderBottom:`1px solid ${de.border}`},children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:368:17",className:"flex items-center gap-3",children:u.jsxs("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:369:19",style:{color:de.accent,fontFamily:ws},className:"text-sm",children:["agents/",h.id,"_*.py"]})}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:373:17",className:"flex items-center gap-3",children:[u.jsx("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:374:19",href:h.codeUrl,target:"_blank",rel:"noopener noreferrer",style:{color:de.textMuted},className:"text-sm hover:text-white transition-colors cursor-pointer mr-3",children:"GitHub →"}),u.jsxs("button",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:383:19",onClick:y,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors hover:bg-white/5 cursor-pointer",style:{color:o?"#22C55E":de.textMuted},children:[o?u.jsx(ou,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:388:31",className:"w-4 h-4"}):u.jsx(ll,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:388:63",className:"w-4 h-4"}),u.jsx("span",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:389:21",className:"text-sm",children:o?"已复制":"复制"})]})]})]}),u.jsx("pre",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:394:15",className:"p-6 overflow-x-auto",style:{fontFamily:ws,fontSize:"0.85rem",lineHeight:"1.7"},children:u.jsx("code",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:402:17",style:{fontFamily:ws,color:"#E0E0E0"},children:h.code})})]})})]})}),u.jsx("footer",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:417:7",style:{borderTop:`1px solid ${de.border}`,backgroundColor:de.bgSecondary},className:"py-6",children:u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:424:9",className:"max-w-4xl mx-auto px-6 flex items-center justify-between",children:[x?u.jsxs("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:426:13",href:`/learn-cc/${x.id}`,className:"flex items-center gap-2 group transition-opacity hover:opacity-80 cursor-pointer",style:{color:de.textSecondary},children:[u.jsx(nl,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:431:15",className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:432:15",className:"text-left",children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:433:17",className:"text-xs",style:{color:de.textMuted},children:"上一章"}),u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:434:17",className:"font-medium",children:_(x.id).cn})]})]}):u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:438:13"}),u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:441:11",className:"text-sm",style:{color:de.textMuted},children:[la.findIndex(w=>w.id===a)+1," / ",la.length]}),g?u.jsxs("a",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:446:13",href:`/learn-cc/${g.id}`,className:"flex items-center gap-2 group transition-opacity hover:opacity-80 cursor-pointer",style:{color:de.textSecondary},children:[u.jsxs("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:451:15",className:"text-right",children:[u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:452:17",className:"text-xs",style:{color:de.textMuted},children:"下一章"}),u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:453:17",className:"font-medium",children:_(g.id).cn})]}),u.jsx(il,{"code-path":"src\\sections\\LearnCCLessonPage.tsx:455:15",className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}):u.jsx("div",{"code-path":"src\\sections\\LearnCCLessonPage.tsx:458:13"})]})})]})}const iv=[{pattern:a=>a==="/"||a==="/index.html",page:"landing"},{pattern:a=>a==="/cat-cafe",page:"cat-cafe"},{pattern:a=>a==="/prompts",page:"prompts"},{pattern:a=>a==="/design-showcase",page:"design-showcase"},{pattern:a=>a==="/learn-cc"||a==="/lobster/learn",page:"learn-cc"},{pattern:a=>a.match(/^\/learn-cc\/s\d{2}$/)!==null,page:"learn-cc-lesson"},{pattern:a=>a==="/lobster"||a==="/lobster/",page:"home"},{pattern:a=>a==="/lobster/skill",page:"skill"},{pattern:a=>a==="/lobster/diary",page:"diary"},{pattern:a=>a==="/lobster/workspace",page:"workspace"},{pattern:a=>a==="/lobster/tech-eden",page:"tech"},{pattern:a=>a.startsWith("/lobster/tutorial")||a.startsWith("/docs/"),page:"tutorial"},{pattern:a=>a==="/skill",page:"skill"},{pattern:a=>a==="/tutorial"||a.startsWith("/docs/"),page:"tutorial"},{pattern:a=>a==="/diary",page:"diary"},{pattern:a=>a==="/workspace",page:"workspace"},{pattern:a=>a==="/tech-eden",page:"tech"}],lv={landing:"/","cat-cafe":"/cat-cafe",prompts:"/prompts","design-showcase":"/design-showcase","learn-cc":"/learn-cc","learn-cc-lesson":"/learn-cc",home:"/lobster",skill:"/lobster/skill",tutorial:"/lobster/tutorial",diary:"/lobster/diary",workspace:"/lobster/workspace",tech:"/lobster/tech-eden"},wh=a=>{const r=a.match(/^\/learn-cc\/(s\d{2})$/);return r?r[1]:null},mg=a=>{for(const r of iv)if(r.pattern(a))return r.page;return"landing"},ov=()=>typeof window>"u"?"landing":mg(window.location.pathname);function cv(){const[a,r]=J.useState(ov),[l,o]=J.useState(wh(window.location.pathname));J.useEffect(()=>{const f=()=>{const h=mg(window.location.pathname);r(h),h==="learn-cc-lesson"&&o(wh(window.location.pathname))};return f(),window.addEventListener("popstate",f),()=>window.removeEventListener("popstate",f)},[]);const d=f=>{r(f),window.history.pushState({},"",lv[f])},p=()=>{switch(a){case"landing":return u.jsx(tb,{"code-path":"src\\App.tsx:111:16"});case"cat-cafe":return u.jsx(nb,{"code-path":"src\\App.tsx:113:16"});case"prompts":return u.jsx(Xw,{"code-path":"src\\App.tsx:115:16"});case"design-showcase":return u.jsx(Ww,{"code-path":"src\\App.tsx:117:16"});case"learn-cc":return u.jsx(nv,{"code-path":"src\\App.tsx:119:16"});case"learn-cc-lesson":return u.jsx(rv,{"code-path":"src\\App.tsx:121:16",lessonId:l});case"skill":return u.jsx(xb,{"code-path":"src\\App.tsx:123:16"});case"tutorial":return u.jsx(bb,{"code-path":"src\\App.tsx:125:16"});case"diary":return u.jsx(Uw,{"code-path":"src\\App.tsx:127:16"});case"workspace":return u.jsx(Hw,{"code-path":"src\\App.tsx:129:16"});case"tech":return u.jsx(Yw,{"code-path":"src\\App.tsx:131:16"});default:return u.jsxs("main",{"code-path":"src\\App.tsx:134:11",children:[u.jsx(sb,{"code-path":"src\\App.tsx:135:13"}),u.jsx(ib,{"code-path":"src\\App.tsx:136:13"}),u.jsx(ob,{"code-path":"src\\App.tsx:137:13"}),u.jsx(ub,{"code-path":"src\\App.tsx:138:13"}),u.jsx(db,{"code-path":"src\\App.tsx:139:13"}),u.jsx(hb,{"code-path":"src\\App.tsx:140:13"})]})}};return a==="landing"||a==="cat-cafe"||a==="prompts"||a==="design-showcase"||a==="learn-cc"||a==="learn-cc-lesson"?u.jsx(u.Fragment,{children:p()}):u.jsxs("div",{"code-path":"src\\App.tsx:152:5",className:"min-h-screen bg-lobster-dark text-white",children:[u.jsx(ab,{"code-path":"src\\App.tsx:153:7",onNavigate:d}),p(),u.jsx(gb,{"code-path":"src\\App.tsx:155:7"})]})}qy.createRoot(document.getElementById("root")).render(u.jsx(J.StrictMode,{"code-path":"src\\main.tsx:7:3",children:u.jsx(cv,{"code-path":"src\\main.tsx:8:5"})}));
