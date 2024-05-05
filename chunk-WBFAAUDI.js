import{B as Oe,Ba as H,E as Pe,Ha as $e,Jb as ne,K as Fe,M as je,Nb as $,Rb as Be,S as Ne,T as De,Ub as We,Va as ee,W as Me,Xa as te,Z as ke,_,_b as qe,a as I,aa as v,ab as Ve,b as L,da as d,f as P,fa as f,ga as y,ha as Ue,i as Te,ia as Se,j as C,k as Ie,m as xe,n as Ae,o as Q,oa as z,qa as Le,ra as Ce,s as T,sa as _e,xa as ze}from"./chunk-VF5V53OG.js";function re(e,t){let r=!t?.manualCleanup;r&&!t?.injector&&_e(re);let n=r?t?.injector?.get(H)??y(H):null,s;t?.requireSync?s=te({kind:0}):s=te({kind:1,value:t?.initialValue});let o=e.subscribe({next:i=>s.set({kind:1,value:i}),error:i=>{if(t?.rejectErrors)throw i;s.set({kind:2,error:i})}});return n?.onDestroy(o.unsubscribe.bind(o)),$(()=>{let i=s();switch(i.kind){case 1:return i.value;case 2:throw i.error;case 0:throw new _(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var ie={};function E(e,t){if(ie[e]=(ie[e]||0)+1,typeof t=="function")return se(e,(...n)=>L(I({},t(...n)),{type:e}));switch(t?t._as:"empty"){case"empty":return se(e,()=>({type:e}));case"props":return se(e,n=>L(I({},n),{type:e}));default:throw new Error("Unexpected config.")}}function w(){return{_as:"props",_p:void 0}}function se(e,t){return Object.defineProperty(t,"type",{value:e,writable:!1})}var it="@ngrx/store/init",F=(()=>{let t=class t extends C{constructor(){super({type:it})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Pt=[F],ct=new d("@ngrx/store Internal Root Guard"),Xe=new d("@ngrx/store Internal Initial State"),de=new d("@ngrx/store Initial State"),at=new d("@ngrx/store Reducer Factory"),Je=new d("@ngrx/store Internal Reducer Factory Provider"),ut=new d("@ngrx/store Initial Reducers"),oe=new d("@ngrx/store Internal Initial Reducers"),Yn=new d("@ngrx/store Store Features"),Ke=new d("@ngrx/store Internal Store Reducers"),Qn=new d("@ngrx/store Internal Feature Reducers"),Hn=new d("@ngrx/store Internal Feature Configs"),er=new d("@ngrx/store Internal Store Features"),tr=new d("@ngrx/store Internal Feature Reducers Token"),nr=new d("@ngrx/store Feature Reducers"),Ge=new d("@ngrx/store User Provided Meta Reducers"),V=new d("@ngrx/store Meta Reducers"),Ze=new d("@ngrx/store Internal Resolved Meta Reducers"),Ye=new d("@ngrx/store User Runtime Checks Config"),Qe=new d("@ngrx/store Internal User Runtime Checks Config"),D=new d("@ngrx/store Internal Runtime Checks"),lt=new d("@ngrx/store Check if Action types are unique"),He=new d("@ngrx/store Root Store Provider"),rr=new d("@ngrx/store Feature State Provider");function Ft(e,t={}){let r=Object.keys(e),n={};for(let o=0;o<r.length;o++){let i=r[o];typeof e[i]=="function"&&(n[i]=e[i])}let s=Object.keys(n);return function(i,c){i=i===void 0?t:i;let l=!1,a={};for(let u=0;u<s.length;u++){let m=s[u],g=n[m],b=i[m],N=g(b,c);a[m]=N,l=l||N!==b}return l?a:i}}function jt(e,t){return Object.keys(e).filter(r=>r!==t).reduce((r,n)=>Object.assign(r,{[n]:e[n]}),{})}function dt(...e){return function(t){if(e.length===0)return t;let r=e[e.length-1];return e.slice(0,-1).reduceRight((s,o)=>o(s),r(t))}}function ht(e,t){return Array.isArray(t)&&t.length>0&&(e=dt.apply(null,[...t,e])),(r,n)=>{let s=e(r);return(o,i)=>(o=o===void 0?n:o,s(o,i))}}function Nt(e){let t=Array.isArray(e)&&e.length>0?dt(...e):r=>r;return(r,n)=>(r=t(r),(s,o)=>(s=s===void 0?n:s,r(s,o)))}var M=class extends P{},B=class extends F{},Dt="@ngrx/store/update-reducers",ce=(()=>{let t=class t extends C{get currentReducers(){return this.reducers}constructor(n,s,o,i){super(i(o,s)),this.dispatcher=n,this.initialState=s,this.reducers=o,this.reducerFactory=i}addFeature(n){this.addFeatures([n])}addFeatures(n){let s=n.reduce((o,{reducers:i,reducerFactory:c,metaReducers:l,initialState:a,key:u})=>{let m=typeof i=="function"?Nt(l)(i,a):ht(c,l)(i,a);return o[u]=m,o},{});this.addReducers(s)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(s=>s.key))}addReducer(n,s){this.addReducers({[n]:s})}addReducers(n){this.reducers=I(I({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(s=>{this.reducers=jt(this.reducers,s)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Dt,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(s){return new(s||t)(f(B),f(de),f(ut),f(at))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Mt=[ce,{provide:M,useExisting:ce},{provide:B,useExisting:F}],he=(()=>{let t=class t extends Te{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(o){return(n||(n=ze(t)))(o||t)}})(),t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),kt=[he],W=class extends P{},et=(()=>{let t=class t extends C{constructor(n,s,o,i){super(i);let l=n.pipe(xe(Ie)).pipe(ke(s)),a={state:i},u=l.pipe(De(Ut,a));this.stateSubscription=u.subscribe(({state:m,action:g})=>{this.next(m),o.next(g)}),this.state=re(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=it,t.\u0275fac=function(s){return new(s||t)(f(F),f(M),f(he),f(de))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})();function Ut(e={state:void 0},[t,r]){let{state:n}=e;return{state:r(n,t),action:t}}var St=[et,{provide:W,useExisting:et}],fe=(()=>{let t=class t extends P{constructor(n,s,o){super(),this.actionsObserver=s,this.reducerManager=o,this.source=n,this.state=n.state}select(n,...s){return Ct.call(null,n,...s)(this)}selectSignal(n,s){return $(()=>n(this.state()),s)}lift(n){let s=new t(this,this.actionsObserver,this.reducerManager);return s.operator=n,s}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,s){this.reducerManager.addReducer(n,s)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(s){return new(s||t)(f(W),f(F),f(ce))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Lt=[fe];function Ct(e,t,...r){return function(s){let o;if(typeof e=="string"){let i=[t,...r].filter(Boolean);o=s.pipe(Ne(e,...i))}else if(typeof e=="function")o=s.pipe(T(i=>e(i,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe(Fe())}}var pe="https://ngrx.io/guide/store/configuration/runtime-checks";function tt(e){return e===void 0}function nt(e){return e===null}function ft(e){return Array.isArray(e)}function _t(e){return typeof e=="string"}function zt(e){return typeof e=="boolean"}function $t(e){return typeof e=="number"}function pt(e){return typeof e=="object"&&e!==null}function Vt(e){return pt(e)&&!ft(e)}function Bt(e){if(!Vt(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function ae(e){return typeof e=="function"}function Wt(e){return ae(e)&&e.hasOwnProperty("\u0275cmp")}function qt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Xt=!1;function Jt(){return Xt}function rt(e,t){return e===t}function Kt(e,t,r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!0;return!1}function yt(e,t=rt,r=rt){let n=null,s=null,o;function i(){n=null,s=null}function c(u=void 0){o={result:u}}function l(){o=void 0}function a(){if(o!==void 0)return o.result;if(!n)return s=e.apply(null,arguments),n=arguments,s;if(!Kt(arguments,n,t))return s;let u=e.apply(null,arguments);return n=arguments,r(s,u)?s:(s=u,u)}return{memoized:a,reset:i,setResult:c,clearResult:l}}function Gt(...e){return Yt(yt)(...e)}function Zt(e,t,r,n){if(r===void 0){let o=t.map(i=>i(e));return n.memoized.apply(null,o)}let s=t.map(o=>o(e,r));return n.memoized.apply(null,[...s,r])}function Yt(e,t={stateFn:Zt}){return function(...r){let n=r;if(Array.isArray(n[0])){let[u,...m]=n;n=[...u,...m]}else n.length===1&&Qt(n[0])&&(n=Ht(n[0]));let s=n.slice(0,n.length-1),o=n[n.length-1],i=s.filter(u=>u.release&&typeof u.release=="function"),c=e(function(...u){return o.apply(null,u)}),l=yt(function(u,m){return t.stateFn.apply(null,[u,s,m,c])});function a(){l.reset(),c.reset(),i.forEach(u=>u.release())}return Object.assign(l.memoized,{release:a,projector:c.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function sr(e){return Gt(t=>{let r=t[e];return!Jt()&&ne()&&!(e in t)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),r},t=>t)}function Qt(e){return!!e&&typeof e=="object"&&Object.values(e).every(t=>typeof t=="function")}function Ht(e){let t=Object.values(e),r=Object.keys(e),n=(...s)=>r.reduce((o,i,c)=>L(I({},o),{[i]:s[c]}),{});return[...t,n]}function en(e){return e instanceof d?y(e):e}function tn(e){return typeof e=="function"?e():e}function nn(e,t){return e.concat(t)}function rn(){if(y(fe,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function sn(e,t){return function(r,n){let s=t.action(n)?ue(n):n,o=e(r,s);return t.state()?ue(o):o}}function ue(e){Object.freeze(e);let t=ae(e);return Object.getOwnPropertyNames(e).forEach(r=>{if(!r.startsWith("\u0275")&&qt(e,r)&&(!t||r!=="caller"&&r!=="callee"&&r!=="arguments")){let n=e[r];(pt(n)||ae(n))&&!Object.isFrozen(n)&&ue(n)}}),e}function on(e,t){return function(r,n){if(t.action(n)){let o=le(n);st(o,"action")}let s=e(r,n);if(t.state()){let o=le(s);st(o,"state")}return s}}function le(e,t=[]){return(tt(e)||nt(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,s)=>{if(n)return n;let o=e[s];return Wt(o)?n:tt(o)||nt(o)||$t(o)||zt(o)||_t(o)||ft(o)?!1:Bt(o)?le(o,[...t,s]):{path:[...t,s],value:o}},!1)}function st(e,t){if(e===!1)return;let r=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${r}". ${pe}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=r,n}function cn(e,t){return function(r,n){if(t.action(n)&&!ee.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${pe}#strictactionwithinngzone`);return e(r,n)}}function an(e){return ne()?I({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function un({strictActionSerializability:e,strictStateSerializability:t}){return r=>e||t?on(r,{action:n=>e&&!ye(n),state:()=>t}):r}function ln({strictActionImmutability:e,strictStateImmutability:t}){return r=>e||t?sn(r,{action:n=>e&&!ye(n),state:()=>t}):r}function ye(e){return e.type.startsWith("@ngrx")}function dn({strictActionWithinNgZone:e}){return t=>e?cn(t,{action:r=>e&&!ye(r)}):t}function hn(e){return[{provide:Qe,useValue:e},{provide:Ye,useFactory:pn,deps:[Qe]},{provide:D,deps:[Ye],useFactory:an},{provide:V,multi:!0,deps:[D],useFactory:ln},{provide:V,multi:!0,deps:[D],useFactory:un},{provide:V,multi:!0,deps:[D],useFactory:dn}]}function fn(){return[{provide:lt,multi:!0,deps:[D],useFactory:yn}]}function pn(e){return e}function yn(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(ie).filter(([,r])=>r>1).map(([r])=>r);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(r=>`"${r}"`).join(", ")}. ${pe}#strictactiontypeuniqueness`)}function mn(e={},t={}){return[{provide:ct,useFactory:rn},{provide:Xe,useValue:t.initialState},{provide:de,useFactory:tn,deps:[Xe]},{provide:oe,useValue:e},{provide:Ke,useExisting:e instanceof d?e:oe},{provide:ut,deps:[oe,[new Ue(Ke)]],useFactory:en},{provide:Ge,useValue:t.metaReducers?t.metaReducers:[]},{provide:Ze,deps:[V,Ge],useFactory:nn},{provide:Je,useValue:t.reducerFactory?t.reducerFactory:Ft},{provide:at,deps:[Je,Ze],useFactory:ht},Pt,Mt,kt,St,Lt,hn(t.runtimeChecks),fn()]}function gn(){y(F),y(M),y(he),y(fe),y(ct,{optional:!0}),y(lt,{optional:!0})}var Rn=[{provide:He,useFactory:gn},{provide:Se,multi:!0,useFactory(){return()=>y(He)}}];function or(e,t){return z([...mn(e,t),Rn])}function ir(...e){let t=e.pop(),r=e.map(n=>n.type);return{reducer:t,types:r}}function cr(e,...t){let r=new Map;for(let n of t)for(let s of n.types){let o=r.get(s);if(o){let i=(c,l)=>n.reducer(o(c,l),l);r.set(s,i)}else r.set(s,n.reducer)}return function(n=e,s){let o=r.get(s.type);return o?o(n,s):n}}var dr=E("[Winners] Load Winners"),hr=E("[Winners] load winners success",w()),fr=E("[Winners] load winners fail",w()),pr=E("[Winners] set page",w()),yr=E("[Winners] set sort",w()),mr=E("[Winners] set order",w()),gr=E("[Winner] create winner",w()),Rr=E("[Winner] create winner success",w()),vr=E("[Winner] update winner",w()),Er=E("[Winner] update winner success",w()),br=E("[Winner] delete winner",w()),wr=E("[Winner] delete winner success");var U=class{},X=class{},A=class e{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(r=>{let n=r.indexOf(":");if(n>0){let s=r.slice(0,n),o=s.toLowerCase(),i=r.slice(n+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((r,n)=>{this.setHeaderEntries(n,r)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([r,n])=>{this.setHeaderEntries(r,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let r=this.headers.get(t.toLowerCase());return r&&r.length>0?r[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,r){return this.clone({name:t,value:r,op:"a"})}set(t,r){return this.clone({name:t,value:r,op:"s"})}delete(t,r){return this.clone({name:t,value:r,op:"d"})}maybeSetNormalizedName(t,r){this.normalizedNames.has(r)||this.normalizedNames.set(r,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(r=>{this.headers.set(r,t.headers.get(r)),this.normalizedNames.set(r,t.normalizedNames.get(r))})}clone(t){let r=new e;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([t]),r}applyUpdate(t){let r=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,r);let s=(t.op==="a"?this.headers.get(r):void 0)||[];s.push(...n),this.headers.set(r,s);break;case"d":let o=t.value;if(!o)this.headers.delete(r),this.normalizedNames.delete(r);else{let i=this.headers.get(r);if(!i)return;i=i.filter(c=>o.indexOf(c)===-1),i.length===0?(this.headers.delete(r),this.normalizedNames.delete(r)):this.headers.set(r,i)}break}}setHeaderEntries(t,r){let n=(Array.isArray(r)?r:[r]).map(o=>o.toString()),s=t.toLowerCase();this.headers.set(s,n),this.maybeSetNormalizedName(t,s)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(r=>t(this.normalizedNames.get(r),this.headers.get(r)))}};var ge=class{encodeKey(t){return mt(t)}encodeValue(t){return mt(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function vn(e,t){let r=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[i,c]=o==-1?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,o)),t.decodeValue(s.slice(o+1))],l=r.get(i)||[];l.push(c),r.set(i,l)}),r}var En=/%(\d[a-f0-9])/gi,bn={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function mt(e){return encodeURIComponent(e).replace(En,(t,r)=>bn[r]??t)}function q(e){return`${e}`}var x=class e{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new ge,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=vn(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(r=>{let n=t.fromObject[r],s=Array.isArray(n)?n.map(q):[q(n)];this.map.set(r,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let r=this.map.get(t);return r?r[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,r){return this.clone({param:t,value:r,op:"a"})}appendAll(t){let r=[];return Object.keys(t).forEach(n=>{let s=t[n];Array.isArray(s)?s.forEach(o=>{r.push({param:n,value:o,op:"a"})}):r.push({param:n,value:s,op:"a"})}),this.clone(r)}set(t,r){return this.clone({param:t,value:r,op:"s"})}delete(t,r){return this.clone({param:t,value:r,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let r=this.encoder.encodeKey(t);return this.map.get(t).map(n=>r+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let r=new e({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat(t),r}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let r=(t.op==="a"?this.map.get(t.param):void 0)||[];r.push(q(t.value)),this.map.set(t.param,r);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],s=n.indexOf(q(t.value));s!==-1&&n.splice(s,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Re=class{constructor(){this.map=new Map}set(t,r){return this.map.set(t,r),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function wn(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function gt(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Rt(e){return typeof Blob<"u"&&e instanceof Blob}function vt(e){return typeof FormData<"u"&&e instanceof FormData}function Tn(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var k=class e{constructor(t,r,n,s){this.url=r,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase();let o;if(wn(this.method)||s?(this.body=n!==void 0?n:null,o=s):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new A,this.context??=new Re,!this.params)this.params=new x,this.urlWithParams=r;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=r;else{let c=r.indexOf("?"),l=c===-1?"?":c<r.length-1?"&":"";this.urlWithParams=r+l+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||gt(this.body)||Rt(this.body)||vt(this.body)||Tn(this.body)?this.body:this.body instanceof x?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||vt(this.body)?null:Rt(this.body)?this.body.type||null:gt(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof x?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let r=t.method||this.method,n=t.url||this.url,s=t.responseType||this.responseType,o=t.transferCache??this.transferCache,i=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,l=t.reportProgress??this.reportProgress,a=t.headers||this.headers,u=t.params||this.params,m=t.context??this.context;return t.setHeaders!==void 0&&(a=Object.keys(t.setHeaders).reduce((g,b)=>g.set(b,t.setHeaders[b]),a)),t.setParams&&(u=Object.keys(t.setParams).reduce((g,b)=>g.set(b,t.setParams[b]),u)),new e(r,n,i,{params:u,headers:a,context:m,reportProgress:l,responseType:s,withCredentials:c,transferCache:o})}},j=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(j||{}),S=class{constructor(t,r=G.Ok,n="OK"){this.headers=t.headers||new A,this.status=t.status!==void 0?t.status:r,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},ve=class e extends S{constructor(t={}){super(t),this.type=j.ResponseHeader}clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},J=class e extends S{constructor(t={}){super(t),this.type=j.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},K=class extends S{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},G=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(G||{});function me(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Ee=(()=>{let t=class t{constructor(n){this.handler=n}request(n,s,o={}){let i;if(n instanceof k)i=n;else{let a;o.headers instanceof A?a=o.headers:a=new A(o.headers);let u;o.params&&(o.params instanceof x?u=o.params:u=new x({fromObject:o.params})),i=new k(n,s,o.body!==void 0?o.body:null,{headers:a,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let c=Q(i).pipe(Pe(a=>this.handler.handle(a)));if(n instanceof k||o.observe==="events")return c;let l=c.pipe(Oe(a=>a instanceof J));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return l.pipe(T(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return l.pipe(T(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return l.pipe(T(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return l.pipe(T(a=>a.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,s={}){return this.request("DELETE",n,s)}get(n,s={}){return this.request("GET",n,s)}head(n,s={}){return this.request("HEAD",n,s)}jsonp(n,s){return this.request("JSONP",n,{params:new x().append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,s={}){return this.request("OPTIONS",n,s)}patch(n,s,o={}){return this.request("PATCH",n,me(o,s))}post(n,s,o={}){return this.request("POST",n,me(o,s))}put(n,s,o={}){return this.request("PUT",n,me(o,s))}};t.\u0275fac=function(s){return new(s||t)(f(U))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})();function In(e,t){return t(e)}function xn(e,t,r){return(n,s)=>Ce(r,()=>t(n,o=>e(o,s)))}var wt=new d(""),An=new d(""),On=new d("");var Et=(()=>{let t=class t extends U{constructor(n,s){super(),this.backend=n,this.injector=s,this.chain=null,this.pendingTasks=y(Ve);let o=y(On,{optional:!0});this.backend=o??n}handle(n){if(this.chain===null){let o=Array.from(new Set([...this.injector.get(wt),...this.injector.get(An,[])]));this.chain=o.reduceRight((i,c)=>xn(i,c,this.injector),In)}let s=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe(je(()=>this.pendingTasks.remove(s)))}};t.\u0275fac=function(s){return new(s||t)(f(X),f(Le))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})();var Pn=/^\)\]\}',?\n/;function Fn(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var bt=(()=>{let t=class t{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new _(-2800,!1);let s=this.xhrFactory;return(s.\u0275loadImpl?Ae(s.\u0275loadImpl()):Q(null)).pipe(Me(()=>new P(i=>{let c=s.build();if(c.open(n.method,n.urlWithParams),n.withCredentials&&(c.withCredentials=!0),n.headers.forEach((h,p)=>c.setRequestHeader(h,p.join(","))),n.headers.has("Accept")||c.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let h=n.detectContentTypeHeader();h!==null&&c.setRequestHeader("Content-Type",h)}if(n.responseType){let h=n.responseType.toLowerCase();c.responseType=h!=="json"?h:"text"}let l=n.serializeBody(),a=null,u=()=>{if(a!==null)return a;let h=c.statusText||"OK",p=new A(c.getAllResponseHeaders()),O=Fn(c)||n.url;return a=new ve({headers:p,status:c.status,statusText:h,url:O}),a},m=()=>{let{headers:h,status:p,statusText:O,url:we}=u(),R=null;p!==G.NoContent&&(R=typeof c.response>"u"?c.responseText:c.response),p===0&&(p=R?G.Ok:0);let Y=p>=200&&p<300;if(n.responseType==="json"&&typeof R=="string"){let It=R;R=R.replace(Pn,"");try{R=R!==""?JSON.parse(R):null}catch(xt){R=It,Y&&(Y=!1,R={error:xt,text:R})}}Y?(i.next(new J({body:R,headers:h,status:p,statusText:O,url:we||void 0})),i.complete()):i.error(new K({error:R,headers:h,status:p,statusText:O,url:we||void 0}))},g=h=>{let{url:p}=u(),O=new K({error:h,status:c.status||0,statusText:c.statusText||"Unknown Error",url:p||void 0});i.error(O)},b=!1,N=h=>{b||(i.next(u()),b=!0);let p={type:j.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),n.responseType==="text"&&c.responseText&&(p.partialText=c.responseText),i.next(p)},be=h=>{let p={type:j.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),i.next(p)};return c.addEventListener("load",m),c.addEventListener("error",g),c.addEventListener("timeout",g),c.addEventListener("abort",g),n.reportProgress&&(c.addEventListener("progress",N),l!==null&&c.upload&&c.upload.addEventListener("progress",be)),c.send(l),i.next({type:j.Sent}),()=>{c.removeEventListener("error",g),c.removeEventListener("abort",g),c.removeEventListener("load",m),c.removeEventListener("timeout",g),n.reportProgress&&(c.removeEventListener("progress",N),l!==null&&c.upload&&c.upload.removeEventListener("progress",be)),c.readyState!==c.DONE&&c.abort()}})))}};t.\u0275fac=function(s){return new(s||t)(f(qe))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Tt=new d(""),jn="XSRF-TOKEN",Nn=new d("",{providedIn:"root",factory:()=>jn}),Dn="X-XSRF-TOKEN",Mn=new d("",{providedIn:"root",factory:()=>Dn}),Z=class{},kn=(()=>{let t=class t{constructor(n,s,o){this.doc=n,this.platform=s,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=We(n,this.cookieName),this.lastCookieString=n),this.lastToken}};t.\u0275fac=function(s){return new(s||t)(f(Be),f($e),f(Nn))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})();function Un(e,t){let r=e.url.toLowerCase();if(!y(Tt)||e.method==="GET"||e.method==="HEAD"||r.startsWith("http://")||r.startsWith("https://"))return t(e);let n=y(Z).getToken(),s=y(Mn);return n!=null&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,n)})),t(e)}function qr(...e){let t=[Ee,bt,Et,{provide:U,useExisting:Et},{provide:X,useExisting:bt},{provide:wt,useValue:Un,multi:!0},{provide:Tt,useValue:!0},{provide:Z,useClass:kn}];for(let r of e)t.push(...r.\u0275providers);return z(t)}var Kr=(()=>{let t=class t{constructor(n){this.http=n,this.baseUrl="http://127.0.0.1:3000"}getCars(n,s){let o=`${this.baseUrl}/garage?_page=${n}&_limit=${s}`;return this.http.get(o,{observe:"response"}).pipe(T(i=>{let c=i.headers.get("X-Total-Count");return{cars:i.body,totalCount:c||"0"}}))}getCarById(n){let s=`${this.baseUrl}/garage/${n}`;return this.http.get(s)}createCar(n){let s=`${this.baseUrl}/garage`;return this.http.post(s,n)}deleteCar(n){let s=`${this.baseUrl}/garage/${n}`;return this.http.delete(s)}updateCar(n,s){let o=`${this.baseUrl}/garage/${n}`;return this.http.put(o,s)}startStopEngine(n,s){let o=`${this.baseUrl}/engine?id=${n}&status=${s}`;return this.http.patch(o,{})}switchEngineToDriveMode(n){let s=`${this.baseUrl}/engine?id=${n}&status=drive`;return this.http.patch(s,{})}};t.\u0275fac=function(s){return new(s||t)(f(Ee))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{Ee as a,qr as b,E as c,w as d,He as e,rr as f,he as g,fe as h,Ct as i,Gt as j,sr as k,or as l,ir as m,cr as n,dr as o,hr as p,fr as q,pr as r,yr as s,mr as t,gr as u,Rr as v,vr as w,Er as x,br as y,wr as z,Kr as A};
