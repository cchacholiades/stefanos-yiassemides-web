const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DfwHOEwG.js","./BAokpcQT.js","./C4DQP_8P.js","./pages.loQe4yBO.css","./60MFaP1l.js","./error-404.DpKY_dMl.css","./GdDYzGZg.js","./error-500.CmR4p1fc.css"])))=>i.map(i=>d[i]);
import{$ as e,$t as t,A as n,At as r,B as i,D as a,Dt as o,E as s,Et as c,F as l,G as u,Ht as d,I as f,J as p,K as m,L as h,M as g,Ot as _,Q as v,Qt as y,R as b,S as x,St as S,T as C,Tt as w,X as T,Y as ee,Zt as te,_ as ne,a as re,at as E,b as ie,c as ae,ct as D,d as oe,en as se,f as ce,ft as le,g as O,gt as ue,h as de,i as fe,it as pe,j as me,l as he,m as ge,o as _e,p as ve,pt as ye,q as k,qt as be,rt as xe,s as Se,st as A,t as Ce,tt as we,u as Te,v as j,vt as Ee,wt as De,xt as Oe,y as ke,z as Ae}from"./BAokpcQT.js";import{$ as je,A as Me,At as Ne,B as Pe,C as Fe,Ct as Ie,D as Le,Dt as Re,E as ze,F as Be,Ft as Ve,G as He,H as M,I as Ue,It as We,J as Ge,K as Ke,L as qe,Lt as Je,M as Ye,Mt as Xe,N as Ze,Nt as Qe,O as $e,Ot as et,P as tt,Pt as nt,Q as rt,R as N,S as it,St as at,T as ot,Tt as st,U as ct,V as lt,W as ut,X as dt,Y as ft,Z as pt,_ as mt,_t as ht,a as gt,at as _t,b as vt,bt as yt,c as bt,ct as xt,d as St,dt as Ct,et as wt,f as Tt,ft as Et,g as Dt,gt as Ot,h as kt,ht as At,i as jt,it as Mt,j as Nt,jt as Pt,k as Ft,l as P,lt as It,m as Lt,mt as Rt,n as zt,nt as Bt,o as Vt,ot as Ht,p as Ut,pt as Wt,q as Gt,r as Kt,rt as qt,st as F,t as Jt,tt as Yt,u as Xt,ut as Zt,v as Qt,w as $t,wt as en,x as tn,xt as nn,y as rn,z as an}from"./C4DQP_8P.js";var on=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,sn=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,cn=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function ln(e,t){if(e===`__proto__`||e===`constructor`&&t&&typeof t==`object`&&`prototype`in t)un(e);else return t}function un(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function dn(e,t={}){if(typeof e!=`string`)return e;if(e[0]===`"`&&e[e.length-1]===`"`&&e.indexOf(`\\`)===-1)return e.slice(1,-1);let n=e.trim();if(n.length<=9)switch(n.toLowerCase()){case`true`:return!0;case`false`:return!1;case`undefined`:return;case`null`:return null;case`nan`:return NaN;case`infinity`:return 1/0;case`-infinity`:return-1/0}if(!cn.test(e)){if(t.strict)throw SyntaxError(`[destr] Invalid JSON`);return e}try{if(on.test(e)||sn.test(e)){if(t.strict)throw Error(`[destr] Possible prototype pollution`);return JSON.parse(e,ln)}return JSON.parse(e)}catch(n){if(t.strict)throw n;return e}}var fn=class extends Error{constructor(e,t){super(e,t),this.name=`FetchError`,t?.cause&&!this.cause&&(this.cause=t.cause)}};function pn(e){let t=e.error?.message||e.error?.toString()||``,n=e.request?.method||e.options?.method||`GET`,r=e.request?.url||String(e.request)||`/`,i=new fn(`${`[${n}] ${JSON.stringify(r)}`}: ${e.response?`${e.response.status} ${e.response.statusText}`:`<no response>`}${t?` ${t}`:``}`,e.error?{cause:e.error}:void 0);for(let t of[`request`,`options`,`response`])Object.defineProperty(i,t,{get(){return e[t]}});for(let[t,n]of[[`data`,`_data`],[`status`,`status`],[`statusCode`,`status`],[`statusText`,`statusText`],[`statusMessage`,`statusText`]])Object.defineProperty(i,t,{get(){return e.response&&e.response[n]}});return i}var mn=new Set(Object.freeze([`PATCH`,`POST`,`PUT`,`DELETE`]));function hn(e=`GET`){return mn.has(e.toUpperCase())}function gn(e){if(e===void 0)return!1;let t=typeof e;return t===`string`||t===`number`||t===`boolean`||t===null?!0:t===`object`?Array.isArray(e)?!0:e.buffer||e instanceof FormData||e instanceof URLSearchParams?!1:e.constructor&&e.constructor.name===`Object`||typeof e.toJSON==`function`:!1}var _n=new Set([`image/svg`,`application/xml`,`application/xhtml`,`application/html`]),vn=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function yn(e=``){if(!e)return`json`;let t=e.split(`;`).shift()||``;return vn.test(t)?`json`:t===`text/event-stream`?`stream`:_n.has(t)||t.startsWith(`text/`)?`text`:`blob`}function bn(e,t,n,r){let i=xn(t?.headers??e?.headers,n?.headers,r),a;return(n?.query||n?.params||t?.params||t?.query)&&(a={...n?.params,...n?.query,...t?.params,...t?.query}),{...n,...t,query:a,params:a,headers:i}}function xn(e,t,n){if(!t)return new n(e);let r=new n(t);if(e)for(let[t,i]of Symbol.iterator in e||Array.isArray(e)?e:new n(e))r.set(t,i);return r}async function Sn(e,t){if(t){if(Array.isArray(t))for(let n of t)await n(e);else await t(e)}}var Cn=new Set([408,409,425,429,500,502,503,504]),wn=new Set([101,204,205,304]);function Tn(e={}){let{fetch:t=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=e;async function i(e){let t=e.error&&e.error.name===`AbortError`&&!e.options.timeout||!1;if(e.options.retry!==!1&&!t){let t;t=typeof e.options.retry==`number`?e.options.retry:+!hn(e.options.method);let n=e.response&&e.response.status||500;if(t>0&&(Array.isArray(e.options.retryStatusCodes)?e.options.retryStatusCodes.includes(n):Cn.has(n))){let n=typeof e.options.retryDelay==`function`?e.options.retryDelay(e):e.options.retryDelay||0;return n>0&&await new Promise(e=>setTimeout(e,n)),a(e.request,{...e.options,retry:t-1})}}let n=pn(e);throw Error.captureStackTrace&&Error.captureStackTrace(n,a),n}let a=async function(a,o={}){let s={request:a,options:bn(a,o,e.defaults,n),response:void 0,error:void 0};if(s.options.method&&(s.options.method=s.options.method.toUpperCase()),s.options.onRequest&&(await Sn(s,s.options.onRequest),s.options.headers instanceof n||(s.options.headers=new n(s.options.headers||{}))),typeof s.request==`string`&&(s.options.baseURL&&(s.request=Re(s.request,s.options.baseURL)),s.options.query&&(s.request=Ne(s.request,s.options.query),delete s.options.query),`query`in s.options&&delete s.options.query,`params`in s.options&&delete s.options.params),s.options.body&&hn(s.options.method)){if(gn(s.options.body)){let e=s.options.headers.get(`content-type`);typeof s.options.body!=`string`&&(s.options.body=e===`application/x-www-form-urlencoded`?new URLSearchParams(s.options.body).toString():JSON.stringify(s.options.body)),e||s.options.headers.set(`content-type`,`application/json`),s.options.headers.has(`accept`)||s.options.headers.set(`accept`,`application/json`)}else(`pipeTo`in s.options.body&&typeof s.options.body.pipeTo==`function`||typeof s.options.body.pipe==`function`)&&(`duplex`in s.options||(s.options.duplex=`half`))}let c;if(!s.options.signal&&s.options.timeout){let e=new r;c=setTimeout(()=>{let t=Error(`[TimeoutError]: The operation was aborted due to timeout`);t.name=`TimeoutError`,t.code=23,e.abort(t)},s.options.timeout),s.options.signal=e.signal}try{s.response=await t(s.request,s.options)}catch(e){return s.error=e,s.options.onRequestError&&await Sn(s,s.options.onRequestError),await i(s)}finally{c&&clearTimeout(c)}if((s.response.body||s.response._bodyInit)&&!wn.has(s.response.status)&&s.options.method!==`HEAD`){let e=(s.options.parseResponse?`json`:s.options.responseType)||yn(s.response.headers.get(`content-type`)||``);switch(e){case`json`:{let e=await s.response.text(),t=s.options.parseResponse||dn;s.response._data=t(e);break}case`stream`:s.response._data=s.response.body||s.response._bodyInit;break;default:s.response._data=await s.response[e]()}}return s.options.onResponse&&await Sn(s,s.options.onResponse),!s.options.ignoreResponseError&&s.response.status>=400&&s.response.status<600?(s.options.onResponseError&&await Sn(s,s.options.onResponseError),await i(s)):s.response},o=async function(e,t){return(await a(e,t))._data};return o.raw=a,o.native=(...e)=>t(...e),o.create=(t={},n={})=>Tn({...e,...n,defaults:{...e.defaults,...n.defaults,...t}}),o}var En=(function(){if(typeof globalThis<`u`)return globalThis;if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`unable to locate global object`)})(),Dn=En.fetch?(...e)=>En.fetch(...e):()=>Promise.reject(Error(`[ofetch] global.fetch is not supported!`)),On=En.Headers,kn=En.AbortController,An=Tn({fetch:Dn,Headers:On,AbortController:kn}),jn=()=>window?.__NUXT__?.config||window?.useNuxtApp?.().payload?.config,Mn=()=>jn().app,Nn=()=>Mn().baseURL,Pn=()=>Mn().buildAssetsDir,Fn=(...e)=>Ie(In(),Pn(),...e),In=(...e)=>{let t=Mn(),n=t.cdnURL||t.baseURL;return e.length?Ie(n,...e):n};globalThis.__buildAssetsURL=Fn,globalThis.__publicAssetsURL=In,globalThis.$fetch||(globalThis.$fetch=An.create({baseURL:Nn()}));var Ln=globalThis.$fetch;`global`in globalThis||(globalThis.global=globalThis);function Rn(e=p()){let t=e;t&&!t.sp&&(t.sp=[])}function zn(e,t){return t&&typeof e==`function`&&(e.key=t),e}var Bn=/\\/g,Vn=/</g,Hn=/"/g,Un=/%\w+(?:\.\w+)?/g,Wn=`%separator`;function Gn(e,t,n=!1){let r;if(t===`s`||t===`pageTitle`)r=e.pageTitle;else if(t.includes(`.`)){let n=t.indexOf(`.`);r=e[t.substring(0,n)]?.[t.substring(n+1)]}else r=e[t];if(r!==void 0){let e=String(typeof r==`number`?r:r||``);return n?e.replace(Bn,`\\\\`).replace(Vn,`\\u003C`).replace(Hn,`\\"`):e}}function Kn(e,t,n,r=!1){if(typeof e!=`string`||!e.includes(`%`))return e;let i=e;try{i=decodeURI(e)}catch{}let a=i.match(Un);if(!a)return e;let o=e.includes(Wn);return e=e.replace(Un,e=>{if(e===Wn||!a.includes(e))return e;let n=Gn(t,e.slice(1),r);return n===void 0?e:n}).trim(),o&&(e=e.split(Wn).map(e=>e.trim()).filter(e=>e!==``).join(n?` ${n} `:` `)),e}var qn=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,Jn=e=>e.includes(`:key`)?e:e.split(`:`).join(`:key:`),Yn=zn({key:`aliasSorting`,hooks:{"tags:resolve":e=>{let t=!1;for(let n of e.tags){let r=n.tagPriority;if(!r)continue;let i=String(r);if(i.startsWith(`before:`)){let r=Jn(i.slice(7)),a=e.tagMap.get(r);a&&(typeof a.tagPriority==`number`&&(n.tagPriority=a.tagPriority),n._p=a._p-1,t=!0)}else if(i.startsWith(`after:`)){let r=Jn(i.slice(6)),a=e.tagMap.get(r);a&&(typeof a.tagPriority==`number`&&(n.tagPriority=a.tagPriority),n._p=a._p+1,t=!0)}}t&&(e.tags=e.tags.sort(qn))}}}),Xn=zn({key:`deprecations`,hooks:{"entries:normalize":({tags:e})=>{for(let t of e)t.props.children&&(t.innerHTML=t.props.children,delete t.props.children),t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),`body`in t.props&&(t.props.body&&(t.tagPosition=`bodyClose`),delete t.props.body),t.props.renderPriority!=null&&(t.tagPriority=t.props.renderPriority,delete t.props.renderPriority)}}});function Zn(e){return typeof e?.then==`function`}var Qn=256;function $n(e,t){if(t===e.length)return;if(t===Qn){let n=Array(e.length),r=!1;for(;t<e.length;t++){let i=tr(e[t]);n[t]=i,r||=Zn(i)}return r?n:void 0}let n=tr(e[t]);if(Zn(n)){let r=Array(e.length);r[t]=n;for(let n=t+1;n<e.length;n++)r[n]=tr(e[n]);return r}let r=$n(e,t+1);return r&&(r[t]=n),r}function er(e,t,n){if(n===t.length)return;if(n===Qn){let r=Array(t.length),i=!1;for(;n<t.length;n++){let a=tr(e[t[n]]);r[n]=a,i||=Zn(a)}return i?r:void 0}let r=tr(e[t[n]]);if(Zn(r)){let i=Array(t.length);i[n]=r;for(let r=n+1;r<t.length;r++)i[r]=tr(e[t[r]]);return i}let i=er(e,t,n+1);return i&&(i[n]=r),i}function tr(e){if(typeof e==`function`)return e;if(Zn(e))return Promise.resolve(e).then(tr);if(Array.isArray(e)){let t=$n(e,0);return t?Promise.all(t):e}if(e?.constructor===Object){let t=Object.keys(e),n=er(e,t,0);if(n)return Promise.all(n).then(e=>Object.fromEntries(t.map((t,n)=>[t,e[n]])))}return e}var nr=zn(e=>{let t=new WeakMap;return{key:`promises`,hooks:{"entries:resolve":n=>{for(let r=n.entries.length-1;r>=0;r--){let i=n.entries[r],a=i.input;if(t.get(i)===a){n.entries.splice(r,1);continue}let o=tr(a);Zn(o)?(t.set(i,a),n.entries.splice(r,1),Promise.resolve(o).then(n=>{t.get(i)===a&&(t.delete(i),i.input=n,delete i._tags,e.invalidate?.())},()=>{t.get(i)===a&&t.delete(i)})):t.delete(i)}}}}},`promises`),rr={meta:`content`,link:`href`,htmlAttrs:`lang`},ir=[`innerHTML`,`textContent`];function ar(e,t,n,r=!1){return typeof e==`string`&&e.includes(`%`)?Kn(e,t,n,r):e}var or=zn(e=>({key:`template-params`,hooks:{"tags:resolve":({tagMap:t,tags:n})=>{let r=t.get(`templateParams`)?.props||{},i=r.separator||`|`;delete r.separator,r.pageTitle=ar(r.pageTitle||e._title||``,r,i);for(let e of n){if(e.processTemplateParams===!1)continue;let t=rr[e.tag];if(t&&typeof e.props[t]==`string`)e.props[t]=ar(e.props[t],r,i);else if(e.processTemplateParams||e.tag===`titleTemplate`||e.tag===`title`)for(let t of ir)typeof e[t]==`string`&&(e[t]=ar(e[t],r,i,e.tag===`script`&&typeof e.props.type==`string`&&e.props.type.endsWith(`json`)))}e._templateParams=r,e._separator=i},"tags:afterResolve":({tagMap:t})=>{let n=t.get(`title`);n?.textContent&&n.processTemplateParams!==!1&&(n.textContent=ar(n.textContent,e._templateParams,e._separator))}}}),`template-params`);function sr(e,t){if(typeof t==`function`&&t.key&&e.plugins.has(t.key))return;let n=typeof t==`function`?t(e):t,r=n.key||String(e.plugins.size+1);if(!e.plugins.get(r)){e.plugins.set(r,n);for(let t in n.hooks||{})e.hooks?.hook(t,n.hooks[t])}}function cr(e,t={}){let n=!t.document,r=new Map,i={_entryCount:1,_h:0,plugins:new Map,resolvedOptions:t,ssr:n,entries:r,hooks:void 0,render:()=>e(i),use:e=>sr(i,e),push(e,t){let a=t?._index??i._entryCount++,o=t?{...t}:{};delete o.head,delete o.onRendered,delete o._index;let s={_i:a,input:e,options:o};return r.set(a,s),{_i:a,dispose(){r.delete(a)},patch(e){n?(s.input=e,delete s._tags):s._pending=e,r.has(a)||r.set(a,s)}}}};return t.init?.forEach(e=>e&&i.push(e)),i}var lr=se({docsBase:y,reporters:t}),ur=se({docsBase:y,reporters:t}),dr=(()=>{let e={},t=/^(?<__rou3_unnamed_0>[^/]*)\.webp$/,n=/^(?<__rou3_unnamed_0>[^/]*)\.png$/,r=/^(?<__rou3_unnamed_0>[^/]*)\.jpg$/,i=/^(?<__rou3_unnamed_0>[^/]*)\.jpeg$/,a=/^(?<__rou3_unnamed_0>[^/]*)\.svg$/;return(o,s)=>{let c=[];s.charCodeAt(s.length-1)===47&&(s=s.slice(0,-1)),(s===`/sw.js`||s===`/sitemap.xml`||s.charCodeAt(s.length-1)===47&&(s===`/sw.js/`||s===`/sitemap.xml/`))&&c.push({data:e});let l=s.split(`/`);l.length>1&&l[l.length-1]===``&&(l.pop(),s=s.slice(0,-1));let u=l.length,d;return u>1&&(l[1]===`works`?c.push({data:e,params:{_:s.slice(7)}}):l[1]===`css`?c.push({data:e,params:{_:s.slice(5)}}):(l[1]===`icons`||l[1]===`fonts`)&&c.push({data:e,params:{_:s.slice(7)}})),u===2&&((d=a.exec(l[1]))!==null&&c.push({data:e,params:{0:d.groups.__rou3_unnamed_0}}),(d=i.exec(l[1]))!==null&&c.push({data:e,params:{0:d.groups.__rou3_unnamed_0}}),(d=r.exec(l[1]))!==null&&c.push({data:e,params:{0:d.groups.__rou3_unnamed_0}}),(d=n.exec(l[1]))!==null&&c.push({data:e,params:{0:d.groups.__rou3_unnamed_0}}),(d=t.exec(l[1]))!==null&&c.push({data:e,params:{0:d.groups.__rou3_unnamed_0}})),c.reverse()}})(),fr=function(e){if(!e.includes(`%`))return e;let t=e.indexOf(`?`),n=t===-1?e:e.slice(0,t);try{return t===-1?decodeURI(n):decodeURI(n)+e.slice(t)}catch{return e}},pr=(e,t)=>{if(typeof e!=`string`)return e;let n=fr(e);return t?n.toLowerCase():n},mr=e=>ht({},...dr(``,pr(e,!0)).map(e=>e.data).reverse()),hr=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),gr=function(e,t){return new URL(e,t).href},_r={},vr=function(e){return e.pathname.endsWith(`.css`)},yr=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},br=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=gr(t,n);let r=s(t),i=vr(r);return yr(_r,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:hr,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},xr=Ln;function Sr(e){return mr(e)}var Cr;function wr(){let e;return e=xr(Fn(`builds/meta/${ke().app.buildId}.json`),{responseType:`json`}).then(e=>{if(!e||typeof e!=`object`||!Array.isArray(e.prerendered))throw ur.NUXT_E5004();return e}),Cr=e,e.catch(t=>{Cr===e&&(Cr=void 0),ur.NUXT_E5002({cause:t})}),e}function Tr(){return Cr||wr()}function Er(e){let t=typeof e==`string`?e:e.path;try{return Sr(t)}catch(e){return ur.NUXT_E5003({path:t,cause:e}),{}}}var Dr=2**32-1,Or=Dr-1;function kr(e){return!(!Number.isInteger(e)||e<0||e>Or)}function Ar(e){return!(!Number.isInteger(e)||e<0||e>Dr)}function jr(e){return Uint8Array.fromBase64(e).buffer}function Mr(e){return Uint8Array.from(Buffer.from(e,`base64`)).buffer}function Nr(e){let t=atob(e),n=t.length,r=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=t.charCodeAt(e);return r.buffer}var Pr=typeof Uint8Array.fromBase64==`function`,Fr=typeof process==`object`&&process.versions?.node!==void 0,Ir=Pr?jr:Fr?Mr:Nr;function Lr(e,t){if(!t)return e;let n={};for(let r of Object.keys(e))n[r]=t[r]??e[r];return n}var Rr=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,`byteLength`)?.get,zr=typeof SharedArrayBuffer>`u`?void 0:Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype,`byteLength`)?.get,Br=Object.freeze({fromPrimitive:e=>e,fromISOString:e=>new Date(e),fromStringValue:(e,t)=>e===`URL`?new URL(t):e===`URLSearchParams`?new URLSearchParams(t):Temporal[e.slice(9)].from(t),fromArrayBuffer:e=>e,fromRegExpInfo:(e,t)=>new RegExp(e,t),fromViewInfo:(e,t,n,r)=>{try{Rr.call(t)}catch(e){if(!zr)throw e;zr.call(t)}let i=globalThis[e];return n===void 0?new i(t):new i(t,n,r)},box:e=>Object(e),createArray:e=>Array(e),createSparseArray:e=>{let t=[];return t[Or]=void 0,delete t[Or],t.length=e,t},createObject:()=>({}),createNullPrototypeObject:()=>Object.create(null),createSet:()=>new Set,createMap:()=>new Map,set:(e,t,n)=>{e[t]=n},addValue:(e,t)=>{e.add(t)},addEntry:(e,t,n)=>{e.set(t,n)}});function Vr(){throw Error(`Invalid input`)}function Hr(e,t,n){return Ur(JSON.parse(e),t,n)}function Ur(e,t,n){let r=Lr(Br,n?.operations);if(typeof e==`number`)return c(e,!0);Array.isArray(e)&&e.length!==0||Vr();let i=e,a=Array(i.length),o=null;function s(e){return(!kr(e)||e>=i.length)&&Vr(),i[e]}function c(e,n=!1){if(e===-1)return r.fromPrimitive(void 0);if(e===-3)return r.fromPrimitive(NaN);if(e===-4)return r.fromPrimitive(1/0);if(e===-5)return r.fromPrimitive(-1/0);if(e===-6)return r.fromPrimitive(-0);if((n||typeof e!=`number`)&&Vr(),e in a)return a[e];e>=i.length&&Vr();let l=i[e];if(!l||typeof l!=`object`)a[e]=r.fromPrimitive(l);else if(Array.isArray(l)){if(typeof l[0]==`string`){let n=l[0],u=t&&Object.hasOwn(t,n)?t[n]:void 0;if(u){let t=l[1];if(typeof t!=`number`&&(t=i.push(l[1])-1),Object.hasOwn(a,t))return a[e]=u(a[t]);if(o??=new Set,o.has(t))throw Error(`Invalid circular reference`);return o.add(t),a[e]=u(c(t)),o.delete(t),a[e]}switch(n){case`Date`:a[e]=r.fromISOString(l[1]);break;case`Set`:let t=r.createSet();a[e]=t;for(let e=1;e<l.length;e+=1)r.addValue(t,c(l[e]));break;case`Map`:let i=r.createMap();a[e]=i;for(let e=1;e<l.length;e+=2)r.addEntry(i,c(l[e]),c(l[e+1]));break;case`RegExp`:a[e]=r.fromRegExpInfo(l[1],l[2]);break;case`Object`:{let t=l[1];if(t!==-3&&t!==-4&&t!==-5&&t!==-6){let e=s(t),n=Array.isArray(e)&&e[0]===`BigInt`;e!==void 0&&typeof e!=`object`||n||Vr()}a[e]=r.box(c(t));break}case`BigInt`:a[e]=r.fromPrimitive(BigInt(l[1]));break;case`null`:let o=r.createNullPrototypeObject();a[e]=o;for(let e=1;e<l.length;e+=2){let t=l[e];if(typeof t!=`string`)throw Error(`Cannot parse an object with a non-string key`);if(t===`__proto__`)throw Error("Cannot parse an object with a `__proto__` property");r.set(o,t,c(l[e+1]))}break;case`Int8Array`:case`Uint8Array`:case`Uint8ClampedArray`:case`Int16Array`:case`Uint16Array`:case`Float16Array`:case`Int32Array`:case`Uint32Array`:case`Float32Array`:case`Float64Array`:case`BigInt64Array`:case`BigUint64Array`:case`DataView`:{let t=l[1],i=s(t);Array.isArray(i)&&i[0]===`ArrayBuffer`||Vr();let o=c(t);a[e]=r.fromViewInfo(n,o,l[2],l[3]);break}case`ArrayBuffer`:{let t=l[1];if(typeof t!=`string`)throw Error(`Invalid ArrayBuffer encoding`);a[e]=r.fromArrayBuffer(Ir(t));break}case`URL`:case`URLSearchParams`:case`Temporal.Duration`:case`Temporal.Instant`:case`Temporal.PlainDate`:case`Temporal.PlainTime`:case`Temporal.PlainDateTime`:case`Temporal.PlainMonthDay`:case`Temporal.PlainYearMonth`:case`Temporal.ZonedDateTime`:a[e]=r.fromStringValue(n,l[1]);break;default:throw Error(`Unknown type ${n}`)}}else if(l[0]===-7){let t=l[1];Ar(t)||Vr();let n=r.createSparseArray(t);a[e]=n;for(let e=2;e<l.length;e+=2){let i=l[e];(!kr(i)||i>=t)&&Vr(),r.set(n,i,c(l[e+1]))}}else{let t=r.createArray(l.length);a[e]=t;for(let e=0;e<l.length;e+=1){let n=l[e];n!==-2&&r.set(t,e,c(n))}}}else{let t=r.createObject();a[e]=t;for(let e of Object.keys(l)){if(e===`__proto__`)throw Error("Cannot parse an object with a `__proto__` property");r.set(t,e,c(l[e]))}}return a[e]}return c(0)}async function Wr(e,t={}){if(await ti(e)){let n=await Yr(e,t),r=$r(e)?`default`:`force-cache`;return t.fresh?await Xr(n,r,t.signal,t.promoted)||null:await Kr(n,r,t.signal,t.promoted)||null}return null}var Gr=new Map;function Kr(e,t,n,r){let i=Gr.get(e);if(i)return i.then(i=>i.aborted&&!n?.aborted?Kr(e,t,n,r):i.payload);let a=Xr(e,t,n,r).then(e=>({payload:e,aborted:!e&&!!n?.aborted}));return a.finally(()=>{Gr.get(e)===a&&Gr.delete(e)}),Gr.set(e,a),a.then(e=>e.payload)}var qr=`_payload.json`,Jr=`_b`;async function Yr(e,t={}){let n=new URL(e,`http://localhost`);if(n.host!==`localhost`||yt(n.pathname,{acceptRelative:!0}))throw lr.NUXT_E7001({url:e});let r=ke(),i=t.hash||(t.fresh?Date.now():r.app.buildId),a=r.app.cdnURL,o=a&&await ni(e)?a:r.app.baseURL,s=en(o,n.pathname,qr);return $r(e)||(n.search=``),i&&n.searchParams.set(Jr,String(i)),s+n.search}async function Xr(e,t,n,r){let i=r?`high`:void 0;try{{let r=await fetch(e,{cache:t,signal:n,priority:i});return r.ok?await ai(await r.text()):null}}catch(t){n?.aborted||lr.NUXT_E7002({url:e,cause:t})}return null}function Zr(e){if(e.redirect)return!1;if(e.prerender)return!0}function Qr(e){return new URL(e,`http://localhost`).pathname}function $r(e){return!!Er({path:Qr(e)}).payload}async function ei(e){e=Qr(e),e=e===`/`?e:e.replace(/\/$/,``);try{return(await Tr()).prerendered.includes(e)}catch{return!1}}async function ti(e=Ht().path){let t=Er({path:Qr(e)});if(t.ssr===!1)return!1;let n=Zr(t);return n===void 0?t.payload?!0:await ei(e):n}async function ni(e=Ht().path){let t=Zr(Er({path:Qr(e)}));return t===void 0?await ei(e):t}var ri=null;async function ii(){if(ri)return ri;let e=document.getElementById(`__NUXT_DATA__`);if(!e)return{};let t=await ai(e.textContent||``),n=e.dataset.src?await Xr(e.dataset.src,t.prerenderedAt?`force-cache`:`no-cache`):void 0;return ri={...t,...n,...window.__NUXT__},ri.config?.public&&(ri.config.public=De(ri.config.public)),ri}async function ai(e){return await Hr(e,j()._payloadRevivers)}function oi(e,t){j()._payloadRevivers[e]=t}var si=globalThis.requestIdleCallback||(e=>{let t=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(n)},1)}),ci=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),li=/2g/;function ui(){let e=navigator.connection;return!e||!e.saveData&&!li.test(e.effectiveType||``)}function di(e){let{pathname:t,search:n}=new URL(e,window.location.href);return t+n}var fi=[`route`,`payload`,`island`,`hint`],pi=12,mi={route:8,payload:8,island:4,hint:8};function hi(e={}){let t={...mi,...e.concurrency},n=e.total??pi,r=e.canPrefetch,i=e.defer,a={route:[],payload:[],island:[],hint:[]},o=fi.map(e=>a[e]),s=new WeakSet,c=new Map,l={route:0,payload:0,island:0,hint:0},u=0,d=new Map,f=new AbortController,p=new AbortController;p.abort();function m(e){c.get(e.key)===e&&c.delete(e.key)}function h(e){m(e),Promise.resolve().then(()=>e.run(p.signal,!1)).catch(()=>{})}function g(){if(!r||r())for(;u<n;){let e=fi.find(e=>a[e].length&&l[e]<t[e]);if(!e)return;let n=a[e].shift();_(n,s.delete(n))}}function _(e,t){let n=e.scope===`app`?f:new AbortController;e.scope===`navigation`&&d.set(e,n),l[e.priority]++,u++;let r=!1,a=()=>{r||(r=!0,l[e.priority]--,u--,d.delete(e),m(e),g())};n.signal.addEventListener(`abort`,a,{once:!0});let o=()=>Promise.resolve().then(()=>e.run(n.signal,t)).then(a,a);i?i(o,t,e.priority):o()}let v=(e,t)=>t!==void 0&&e.group===t&&e.priority!==`hint`;return{schedule(e){let t=[];for(let n of Array.isArray(e)?e:[e])c.has(n.key)?h(n):(c.set(n.key,n),t.push(n));for(let e=t.length-1;e>=0;e--)a[t[e].priority].unshift(t[e]);g()},promote(e){for(let t of o){let n=[],r=[];for(let i of t)i.group===e&&s.add(i),(i.group===e?n:r).push(i);t.length=0,t.push(...n,...r)}g()},reset(e){for(let t of o)for(let n=t.length-1;n>=0;n--){let r=t[n];r.scope===`navigation`&&!v(r,e)&&(t.splice(n,1),h(r))}for(let[t,n]of[...d])v(t,e)||n.abort();g()},resume:g}}var gi=1e3;function _i(e,t,n){if(t||n===`route`)return e();let r=globalThis.scheduler;r?.postTask?r.postTask(e,{priority:`background`}).catch(()=>{}):si(e,{timeout:gi})}function vi(e=j()){if(e._prefetch)return e._prefetch;let t=!1,n=hi({canPrefetch:()=>ui()&&!t&&document.visibilityState!==`hidden`,defer:_i});e._prefetch=n,navigator.connection?.addEventListener?.(`change`,()=>n.resume()),document.addEventListener(`visibilitychange`,()=>n.resume());let r=e.$router;return r.beforeEach(()=>{t=!0}),r.afterEach(e=>{t=!1,n.reset(di(e.fullPath))}),r.onError(()=>{t=!1,n.resume()}),n}function yi(e){try{return JSON.parse(e)}catch{return e}}var bi=[[`NuxtError`,e=>At(e)],[`EmptyShallowRef`,e=>o(e===`_`?void 0:e===`0n`?BigInt(0):yi(e))],[`EmptyRef`,e=>w(e===`_`?void 0:e===`0n`?BigInt(0):yi(e))],[`ShallowRef`,e=>o(e)],[`ShallowReactive`,e=>c(e)],[`Ref`,e=>w(e)],[`Reactive`,e=>De(e)]],xi=O({name:`nuxt:revive-payload:client`,order:-30,async setup(e){for(let[e,t]of bi)oi(e,t);Object.assign(e.payload,await e.runWithContext(ii)),delete window.__NUXT__}}),Si=`0123456789abcdef`;Array.from({length:256},(e,t)=>Si.charAt(t>>4)+Si.charAt(t&15));var Ci=e=>{let t=j();t.isHydrating?t.hooks.hookOnce(`app:suspense:resolve`,()=>{si(()=>e())}):si(()=>e())};k({name:`ServerPlaceholder`,render(){return i(`div`)}});var wi=()=>location.protocol+`//`+location.host;function Ti(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),tt(n,``)}return tt(n,e)+r+i}function Ei(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Ti(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){let{history:e}=window;e.state&&e.replaceState(N({},e.state,{scroll:Xt()}),``)}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),{pauseListeners:c,listen:l,destroy:d}}function Di(e,t,n,r=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:null}}function Oi(e){let{history:t,location:n}=window,r={value:Ti(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:wi()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){let o=N({},t.state,Di(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});a(e,o,!0),vt(o.position,!0),r.value=e}function s(e,n){let o=N({},i.value,t.state,{forward:e,scroll:Xt()});a(o.current,o,!0),a(e,N({},Di(r.value,e,null),{position:o.position+1},n),!1),vt(o.position),r.value=e}return{location:r,state:i,push:s,replace:o}}function ki(e){e=ze(e);let t=Oi(e),n=Ei(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=N({location:``,base:e,go:r,createHref:St.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var Ai={type:0,value:``},ji=/[a-zA-Z0-9_]/;function Mi(e){if(!e)return[[]];if(e===`/`)return[[Ai]];if(!Pe(e))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:ji.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Ni=`[^/]+?`,Pi={sensitive:!1,strict:!1,start:!0,end:!0},Fi=/[.+*?^${}()[\]/\\]/g;function Ii(e,t){let n=N({},Pi,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(Fi,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Ni;if(u!==Ni){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){r&&n.endsWith(`/`)||(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(lt(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=lt(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Li(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ri(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Li(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(zi(r))return 1;if(zi(i))return-1}return i.length-r.length}function zi(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Bi={strict:!1,end:!0,sensitive:!1};function Vi(e,t,n){let r=Ii(Mi(e.path),n),i=N(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Hi(e,t){let n=[],r=new Map;t=ut(Bi,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Wi(e);s.aliasOf=r&&r.record;let l=ut(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Wi(N({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&!Pe(u)){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Vi(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Ki(d)&&o(e.name)),Xi(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:He}function o(e){if(it(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Ji(e,n);n.splice(t,0,e),e.record.name&&!Ki(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw an(1,{location:e});s=i.record.name,a=N(Ui(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Ui(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw an(1,{location:e,currentLocation:t});s=i.record.name,a=N({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:qi(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Ui(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Wi(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Gi(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Gi(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Ki(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qi(e){return e.reduce((e,t)=>N(e,t.meta),{})}function Ji(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Ri(e,t[i])<0?r=i:n=i+1}let i=Yi(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Yi(e){let t=e;for(;t=t.parent;)if(Xi(t)&&Ri(e,t)===0)return t}function Xi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Zi(e){let t=v(Gt),n=v(Ke),i=f(()=>{let n=r(e.to);return t.resolve(n)}),a=f(()=>{let{matched:e}=i.value,{length:t}=e,r=e[t-1],a=n.matched;if(!r||!a.length)return-1;let o=a.findIndex(ot.bind(null,r));if(o>-1)return o;let s=na(e[t-2]);return t>1&&na(r)===s&&a[a.length-1].path!==s?a.findIndex(ot.bind(null,e[t-2])):o}),o=f(()=>a.value>-1&&ta(n.params,i.value.params)),s=f(()=>a.value>-1&&a.value===n.matched.length-1&&$t(n.params,i.value.params));function c(n={}){if(ea(n)){let n=t[r(e.replace)?`replace`:`push`](r(e.to)).catch(He);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:i,href:f(()=>i.value.href),isActive:o,isExactActive:s,navigate:c}}function Qi(e){return e.length===1?e[0]:e}var $i=k({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Zi,setup(e,{slots:t}){let n=De(Zi(e)),{options:r}=v(Gt),i=f(()=>({[ra(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[ra(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Qi(t.default(n));return e.custom?r:T(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function ea(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ta(e,t){for(let n in t){let r=t[n],i=e[n];if(lt(r)){if(!lt(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}else if(r!==i)return!1}return!0}function na(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var ra=(e,t,n)=>e??t??n,ia=k({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let i=v(Ge),a=f(()=>e.route||i.value),o=v(dt,0),s=f(()=>{let e=r(o),{matched:t}=a.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),c=f(()=>a.value.matched[s.value]);D(dt,f(()=>s.value+1)),D(ct,c),D(Ge,a);let l=new Set;D(ft,l);let u=w(),d=P,{app:m}=p().appContext;return ue(()=>[u.value,c.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&ot(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=a.value,i=e.name,o=c.value,s=o&&o.components[i];if(!s)return aa(n.default,{Component:s,route:r});let f=o.props[i],p=f?f===!0?r.params:typeof f==`function`?f(r):f:null,h=e=>{e.component.isUnmounted&&(o.instances[i]=null)},g=e=>we(()=>{if(d===r||a.value!==r||e.el.getRootNode()!==m._container.getRootNode())return;let t=d;d=r;for(let e of l)e(r,t)}),_=T(s,N({},p,t,{onVnodeUnmounted:h,onVnodeMounted:g,onVnodeUpdated:g,ref:u}));return aa(n.default,{Component:_,route:r})||_}}});function aa(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var oa=ia;function sa(e){let t=e.matcher||Hi(e.routes,e),n=e.parseQuery||$e,i=e.stringifyQuery||Ye,a=e.history,s=Be(),l=Be(),u=Be(),d=o(P),f=o(0),p=P;tn&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let m=qe.bind(null,e=>``+e),h=qe.bind(null,Lt),g=qe.bind(null,Tt);function _(e,n){let r,i;it(e)?(r=t.getRecordMatcher(e),i=n):i=e;let a=t.addRoute(i,r);return f.value++,()=>{a(),f.value++}}function v(e){let n=t.getRecordMatcher(e);n&&(t.removeRoute(n),f.value++)}function y(){t.clearRoutes(),f.value++}function b(){return t.getRoutes().map(e=>e.record)}function x(e){return!!t.getRecordMatcher(e)}function S(e,r){if(f.value,typeof e==`string`){r||=e.startsWith(`/`)?P:d.value;let i=Ft(n,e,r.path),o=t.resolve({path:i.path},r),s=a.createHref(i.fullPath);return N(i,o,{params:g(o.params),redirectedFrom:void 0,href:s})}r=N({},r||(e.path!=null&&e.path.startsWith(`/`)&&!(`name`in e&&e.name)?P:d.value));let o;if(e.path!=null)o=N({},e,{path:Ft(n,e.path,r.path).path});else{let t=N({},e.params);for(let e in t)t[e]??delete t[e];o=N({},e,{params:h(t)}),r.params=h(r.params)}let s=t.resolve(o,r),c=e.hash||``;s.params=m(g(s.params));let l=Ze(i,N({},e,{hash:Ut(c),path:s.path})),u=a.createHref(l);return N({fullPath:l,hash:c,query:i===Ye?Le(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function C(e){return typeof e==`string`?Ft(n,e,d.value.path):N({},e)}function w(e,t){if(p!==e)return an(8,{from:t,to:e})}function T(e){return ne(e)}function ee(e){return T(N(C(e),{replace:!0}))}function te(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=C(i):{path:i},i.params={}),N({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function ne(e,t){let n=p=S(e),r=d.value,a=e.state,o=e.force,s=e.replace===!0,c=te(n,r);if(c)return ne(N(C(c),{state:typeof c==`object`?N({},a,c.state):a,force:o,replace:s}),t||n);let l=n;l.redirectedFrom=t;let u;return!o&&Fe(i,r,n)&&(u=an(16,{to:l,from:r}),pe(r,r,!0,!1)),(u?Promise.resolve(u):ie(l,r)).catch(e=>M(e)?M(e,2)?e:fe(e):ue(e,l,r)).then(e=>{if(e){if(M(e,2))return ne(N({replace:s},C(e.to),{state:typeof e.to==`object`?N({},a,e.to.state):a,force:o}),t||l)}else e=D(l,r,!0,s,a);return ae(l,r,e),e})}function re(e,t){let n=w(e,t);return n?Promise.reject(n):Promise.resolve()}function E(e){let t=ge.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ie(e,t){let n,[r,i,a]=kt(e,t);n=Dt(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(rn(r,e,t))});let o=re.bind(null,e,t);return n.push(o),ve(n).then(()=>{n=[];for(let r of s.list())n.push(rn(r,e,t));return n.push(o),ve(n)}).then(()=>{n=Dt(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(rn(r,e,t))});return n.push(o),ve(n)}).then(()=>{n=[];for(let r of a)if(r.beforeEnter){if(lt(r.beforeEnter))for(let i of r.beforeEnter)n.push(rn(i,e,t));else n.push(rn(r.beforeEnter,e,t))}return n.push(o),ve(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Dt(a,`beforeRouteEnter`,e,t,E),n.push(o),ve(n))).then(()=>{n=[];for(let r of l.list())n.push(rn(r,e,t));return n.push(o),ve(n)}).catch(e=>M(e,8)?e:Promise.reject(e))}function ae(e,t,n){u.list().forEach(r=>E(()=>r(e,t,n)))}function D(e,t,n,r,i){let o=w(e,t);if(o)return o;let s=t===P,c=tn?history.state:{};n&&(r||s?a.replace(e.fullPath,N({scroll:s&&c&&c.scroll},i)):a.push(e.fullPath,i)),d.value=e,pe(e,t,n,s),fe()}let oe;function se(){oe||=a.listen((e,t,n)=>{if(!_e.listening)return;let r=S(e),i=te(r,_e.currentRoute.value);if(i){ne(N(i,{replace:!0,force:!0}),r).catch(He);return}p=r;let o=d.value;tn&&n.delta&&Me(Qt(o.fullPath,n.delta)),ie(r,o).catch(e=>M(e,12)?e:M(e,2)?(ne(N(C(e.to),{force:!0}),r).then(e=>{M(e,20)&&!n.delta&&n.type===`pop`&&a.go(-1,!1)}).catch(He),Promise.reject()):(n.delta&&a.go(-n.delta,!1),ue(e,r,o))).then(e=>{e||=D(r,o,!1),e&&(n.delta&&!M(e,8)?a.go(-n.delta,!1):n.type===`pop`&&M(e,20)&&a.go(-1,!1)),ae(r,o,e)}).catch(He)})}let ce=Be(),le=Be(),O;function ue(e,t,n){fe(e);let r=le.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function de(){return O&&d.value!==P?Promise.resolve():new Promise((e,t)=>{ce.add([e,t])})}function fe(e){return O||(O=!e,se(),ce.list().forEach(([t,n])=>e?n(e):t()),ce.reset()),e}function pe(t,n,r,i){let{scrollBehavior:a}=e;if(!tn||!a)return Promise.resolve();let o=!r&&mt(Qt(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return we().then(()=>a(t,n,o)).then(e=>t===d.value&&e&&Nt(e)).catch(e=>t===d.value&&ue(e,t,n))}let me=e=>a.go(e),he,ge=new Set,_e={currentRoute:d,listening:!0,addRoute:_,removeRoute:v,clearRoutes:y,hasRoute:x,getRoutes:b,resolve:S,options:e,push:T,replace:ee,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:s.add,beforeResolve:l.add,afterEach:u.add,onError:le.add,isReady:de,install(e){e.component(`RouterLink`,$i),e.component(`RouterView`,oa),e.config.globalProperties.$router=_e,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>r(d)}),tn&&!he&&d.value===P&&(he=!0,T(a.location).catch(e=>{}));let t={};for(let e in P)Object.defineProperty(t,e,{get:()=>d.value[e],enumerable:!0});e.provide(Gt,_e),e.provide(Ke,c(t)),e.provide(Ge,d);let n=e.unmount;ge.add(e),e.unmount=function(){ge.delete(e),ge.size<1&&(p=P,oe&&oe(),oe=null,d.value=P,he=!1,O=!1),n()}}};function ve(e){return e.reduce((e,t)=>e.then(()=>E(t)),Promise.resolve())}return _e}var ca=Symbol.for(`nuxt:client-only`),la=`<div></div>`;function ua(e){return e.nodeName===`#comment`&&e.nodeValue===`placeholder`}function da(e){return e&&!ua(e)?gt(e,la):T(`div`)}var fa=k({name:`ClientOnly`,inheritAttrs:!1,props:[`fallback`,`placeholder`,`placeholderTag`,`fallbackTag`],setup(e,{slots:t,attrs:n}){let r=o(!1);E(()=>{r.value=!0});let a=p();return a&&(a._nuxtClientOnly=!0),D(ca,!0),()=>{if(r.value){let e=t.default?.();return e&&e.length===1?[l(e[0],n)]:e}let a=t.fallback||t.placeholder;if(a)return T(a);let o=e.fallback||e.placeholder||``,s=bt(e.fallbackTag||e.placeholderTag,`span`);return i(s,n,o)}}}),pa=new WeakMap;function ma(e){if(pa.has(e))return pa.get(e);let t={...e};return t.render?t.render=(t,n,r,i,a,o)=>{if(i.mounted$??t.mounted$){let s=e.render?.bind(t)(t,n,r,i,a,o);return s.children===null||typeof s.children==`string`?l(s):T(s)}return da(t._.vnode.el)}:t.template&&=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `,t.setup=(n,r)=>{let i=j(),a=o(i.isHydrating===!1),s=p();if(i.isHydrating){let e={...s.attrs},t=ha(s);for(let t in e)delete s.attrs[t];E(()=>{Object.assign(s.attrs,e),s.vnode.dirs=t})}E(()=>{a.value=!0});let c=e.setup?.(n,r)||{};return d(c)?Promise.resolve(c).then(e=>typeof e==`function`?(...t)=>{if(a.value||!i.isHydrating){let n=e(...t);return n.children===null||typeof n.children==`string`?l(n):T(n)}return da(s?.vnode.el)}:(e||={},e.mounted$=a,e)):typeof c==`function`?(...e)=>{if(a.value){let n=c(...e),i=t.inheritAttrs===!1?void 0:r.attrs;return n.children===null||typeof n.children==`string`?l(n,i):T(n,i)}return da(s?.vnode.el)}:Object.assign(c,{mounted$:a})},pa.set(e,t),t}function ha(e){if(!e||!e.vnode.dirs)return null;let t=e.vnode.dirs;return e.vnode.dirs=null,t}var ga=`$s`;function _a(...e){let t=typeof e[e.length-1]==`string`?e.pop():void 0;typeof e[0]!=`string`&&e.unshift(t);let[n,r]=e;if(!n||typeof n!=`string`)throw lr.NUXT_E7009({key:n});if(r!==void 0&&typeof r!=`function`)throw lr.NUXT_E7007({type:typeof r});let i=ga+n,a=j(),o=_(a.payload.state,i);if(r&&(a._state[i]??={_default:r}),o.value===void 0&&r){let e=r();if(S(e))return a.payload.state[i]=e,o;o.value=e}return o}globalThis.cookieStore;function va(e){if(e?.__asyncLoader&&!e.__asyncResolved)return e.__asyncLoader()}function ya(e){return Promise.all(e.map(e=>{let t=e.components?.default;return typeof t==`function`?Promise.resolve(t()).catch(()=>{}):void 0}))}function ba(e,t){let{fullPath:n,path:r,matched:i}=t.resolve(e);if(!i.length)return;let a=ne()?._prefetch;a?a.schedule({key:`route:${r}`,priority:`route`,scope:`navigation`,group:di(n),run:e=>e.aborted?void 0:ya(i)}):ya(i)}function xa(e={}){let t=e.path||window.location.pathname,n=new URL(t,window.location.href);if(n.host!==window.location.host)throw xt.NUXT_E2010({path:t});if(n.protocol&&at(n.protocol))throw xt.NUXT_E2002({toPath:t,protocol:n.protocol});let r={};try{r=JSON.parse(sessionStorage.getItem(`nuxt:reload`)||`{}`)}catch{}if(e.force||r?.path!==t||r?.expires<Date.now()){try{sessionStorage.setItem(`nuxt:reload`,JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem(`nuxt:reload:state`,JSON.stringify({state:j().payload.state}))}catch{}window.location.pathname===t?window.location.reload():window.location.href=t}}var Sa={scrollBehavior(e,t,n){let r=j(),i=F(),a=i.options?.scrollBehaviorType??`auto`;return e.path.replace(/\/$/,``)===t.path.replace(/\/$/,``)?t.hash&&!e.hash?n??{left:0,top:0}:e.hash?{el:e.hash,top:Ca(e.hash),behavior:a}:!1:(typeof e.meta.scrollToTop==`function`?e.meta.scrollToTop(e,t):e.meta.scrollToTop)===!1?!1:t===P?wa(e,t,n,a):new Promise(o=>{let s=()=>{requestAnimationFrame(()=>{i.currentRoute.value.fullPath===e.fullPath?o(wa(e,t,n,a)):o(!1)})};r.hooks.hookOnce(`page:loading:end`,()=>{let e=r[`~transitionPromise`];e?e.then(s):s()})})}};function Ca(e){let t=document.getElementById(e.slice(1));return t?(Number.parseFloat(getComputedStyle(t).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0):0}function wa(e,t,n,r){return n||(e.hash?{el:e.hash,top:Ca(e.hash),behavior:Vt(e,t)?r:`instant`}:{left:0,top:0})}var Ta={hashMode:!1,scrollBehaviorType:`auto`,sensitive:!1,...Sa},Ea=(...e)=>e.find(e=>e!==void 0);function Da(e){let t=e.componentName||`NuxtLink`;function n(e){return typeof e==`string`&&e.startsWith(`#`)}function i(t,n,r){let i=r??e.trailingSlash;if(!t||i!==`append`&&i!==`remove`)return t;if(typeof t==`string`)return ka(t,i);let a=`path`in t&&t.path!==void 0?t.path:n(t).path;return{...t,name:void 0,path:ka(a,i)}}function a(t){let a=F(),o=ke(),s=a.options?.history?.createHref??(e=>en(o.app.baseURL,e)),c=f(()=>!!r(t.target)&&r(t.target)!==`_self`),l=f(()=>{let e=r(t.to)||r(t.href)||``;return typeof e==`string`&&Ct(e)}),u=f(()=>{if(r(t.external))return!0;let e=r(t.to)||r(t.href)||``;return typeof e==`object`?!1:e===``||l.value}),d=f(()=>{let e=r(t.to)||r(t.href)||``;return u.value?e:i(e,a.resolve,r(t.trailingSlash))}),p=f(()=>{let i=r(t.trailingSlash)??e.trailingSlash;if(!d.value||l.value||n(d.value)){let e=d.value;return typeof e==`string`?Rt(e):e}if(u.value){let e=typeof d.value==`object`&&`path`in d.value?_t(d.value):d.value,t=typeof e==`object`?a.resolve(e).href:e,n=typeof t==`string`?Rt(t):t;return n===null?null:ka(n,i)}return typeof d.value==`object`?a.resolve(d.value)?.href??null:ka(Wt(d.value)?s(d.value):a.resolve(d.value).href,i)});return{to:d,hasTarget:c,isAbsoluteUrl:l,isExternal:u,href:p,async navigate(e){p.value!==null&&await Mt(p.value,{replace:r(t.replace),external:u.value||c.value})}}}function s(e){let t=F(),n=a(e),i=le(`RouterLink`),o=i&&typeof i!=`string`?i.useLink:void 0,s=n.isExternal.value?void 0:o?.({...e,to:n.to,viewTransition:r(e.viewTransition)});return{...n,isActive:s?.isActive??f(()=>n.to.value===t.currentRoute.value.path),isExactActive:s?.isExactActive??f(()=>n.to.value===t.currentRoute.value.path),route:s?.route??f(()=>t.resolve(n.to.value))}}return k({name:t,props:{to:{type:[String,Object],required:!1},href:{type:[String,Object],required:!1},target:{type:String,required:!1},rel:{type:String,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,required:!1},exactActiveClass:{type:String,required:!1},prefetchedClass:{type:String,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1},trailingSlash:{type:String,required:!1}},useLink:s,setup(t,{slots:r}){let i=F(),s=le(`RouterLink`),{to:c,href:l,navigate:u,isExternal:d,hasTarget:f,isAbsoluteUrl:p}=a(t),m=o(!1),h=w(null),g=e=>{h.value=t.custom?e?.$el?.nextElementSibling:e?.$el};function _(n){return typeof t.prefetchOn==`string`?t.prefetchOn===n:t.prefetchOn?.[n]??e.prefetchOn?.[n]}function v(){return!!((t.prefetch??e.prefetch)!==!1&&t.noPrefetch!==!0&&t.target!==`_blank`&&ui())}function y(e){return!!(!m.value&&_(e)&&v())}function b(){let e=typeof c.value==`string`?c.value:d.value?_t(c.value):i.resolve(c.value).fullPath;return d.value?new URL(e,window.location.href).href:e}function x(){m.value?d.value||j()._prefetch?.promote(di(b())):_(`interaction`)&&S()}async function S(e=j()){if(m.value||l.value===null)return;m.value=!0;let t=b();await Promise.all([e.hooks.callHook(`link:prefetch`,t)?.catch(()=>{}),!d.value&&!f.value&&ba(c.value,i)])}if(!t.custom&&y(`visibility`)){let e=j(),t,n=null;E(()=>{let r=Aa();Ci(()=>{t=si(()=>{h?.value?.tagName&&(n=r.observe(h.value,async()=>{n?.(),n=null,await S(e)}))})})}),xe(()=>{t&&ci(t),n?.(),n=null})}return()=>{let a=t.target||null,o=Ea(t.noRel?``:t.rel,e.externalRelAttribute,p.value||f.value?`noopener noreferrer`:``)||null,b=e=>({navigate:u,get route(){if(!l.value)return;let e=new URL(l.value,window.location.href);return{path:e.pathname,fullPath:e.pathname,get query(){return st(e.search)},hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l.value}},rel:o,target:a,isExternal:d.value||f.value,isActive:!1,isExactActive:!1,...e,href:typeof e?.href==`string`?Rt(e.href):l.value,prefetch:S,prefetched:m.value,shouldPrefetch:y});if(!d.value&&!f.value&&!n(c.value)){let n={ref:g,to:c.value,activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom};return t.custom||((_(`interaction`)||m.value)&&v()&&(n.onPointerenter=x,n.onFocus=x,n.onPointerdown=x),m.value&&(n.class=t.prefetchedClass||e.prefetchedClass),n.rel=t.rel||void 0),T(s,n,t.custom&&r.default?{default:e=>r.default(b(e))}:r.default)}return t.custom?r.default?r.default(b()):null:T(`a`,{ref:h,href:l.value||null,rel:o,target:a,onClick:async e=>{if(!(d.value||f.value)){e.preventDefault();try{let e=qt(l.value??``);return await(t.replace?i.replace(e):i.push(e))}finally{if(n(c.value)){let e=c.value.slice(1),t=e;try{t=decodeURIComponent(e)}catch{}document.getElementById(t)?.focus()}}}}},r.default?.())}}})}var Oa=Da(C);function ka(e,t){if(t!==`append`&&t!==`remove`)return e;let n=t===`append`?Pt:nt;return yt(e)&&!e.startsWith(`http`)?e:n(e,!0)}function Aa(){let e=j();if(e._observer)return e._observer;let t=null,n=new Map;return e._observer={observe:(e,r)=>(t||=new IntersectionObserver(e=>{for(let t of e){let e=n.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&e&&e()}}),n.set(e,r),t.observe(e),()=>{n.delete(e),t?.unobserve(e),n.size===0&&(t?.disconnect(),t=null)})}}function ja(e){return typeof e==`function`?e():e&&e.__v_isRef===!0?e.value:e}function Ma(e){if(Array.isArray(e))return e.map(Ma);if(!e||typeof e!=`object`||e.__v_isRef||e.__v_isReactive)return e;let t=Object.getPrototypeOf(e);if(t!==Object.prototype&&t!==null)return e;let n={};for(let t in e)n[t]=Ma(e[t]);return n}function Na(e){e.indexable===void 0?e.env!==void 0&&(e.indexable=e.env===`production`):e.indexable=String(e.indexable)!==`false`,e.trailingSlash!==void 0&&(e.trailingSlash=String(e.trailingSlash)!==`false`),e.url&&!yt(String(e.url),{acceptRelative:!0,strict:!1})&&(e.url=et(String(e.url)));let t=Object.keys(e).sort((e,t)=>e.localeCompare(t)),n={};for(let r of t)n[r]=e[r];return n}function Pa(e){let t=e?.debug||!1,n=[];function r(e){if(!e||typeof e!=`object`||Object.keys(e).length===0)return()=>{};let r={};for(let t in e){let n=e[t];n!==void 0&&n!==``&&(r[t]=Ma(n))}if(!Object.keys(r).some(e=>!e.startsWith(`_`)))return()=>{};if(!r._context&&t){let e=Error(`tmp`).stack?.split(`
`)[2]?.split(` `)[5];e?.includes(`/`)&&(e=`anonymous`),r._context=e}return n.push(r),()=>{let e=n.indexOf(r);e!==-1&&n.splice(e,1)}}function i(e){let t={};e?.debug&&(t._context={}),t._priority={};for(let r in n.sort((e,t)=>(e._priority||0)-(t._priority||0)))for(let i in n[r]){let a=i,o=e?.resolveRefs?ja(n[r][i]):n[r][i];!i.startsWith(`_`)&&o!==void 0&&o!==``&&(t[i]=o,n[r]._priority!==void 0&&n[r]._priority!==-1&&(t._priority[a]=n[r]._priority),e?.debug&&(t._context[a]=n[r]._context?.[a]||n[r]._context||`anonymous`))}return e?.skipNormalize?t:Na(t)}return{stack:n,push:r,get:i}}var Fa=O({name:`nuxt-site-config:init`,enforce:`pre`,async setup(e){let t=Pa(),n=_a(`site-config`);{let e=n.value||window.__NUXT_SITE_CONFIG__||{};for(let n in e)n[0]!==`_`&&t.push({[n]:e[n],_priority:e._priority?.[n]||-1})}return{provide:{nuxtSiteConfig:t}}}});function Ia(e,t){t.push(ie),e.vueApp.use(t);let n=!0,r=()=>{n=!1,t.render()};t.hooks?.hook(`dom:beforeRender`,e=>{e.shouldRender=!n}),e.hooks.hook(`page:start`,()=>{n=!0}),e.hooks.hook(`page:finish`,()=>{e.isHydrating||r()}),e.hooks.hook(`app:error`,r),e.hooks.hook(`app:suspense:resolve`,r);let i=t.push.bind(t);t.push=((t,n)=>{let r=i(t,n),a=r.dispose.bind(r);return r.dispose=()=>{let t=e[`~transitionPromise`];t?t.finally(a):a()},r})}function La(e,t,n){let r=e.push,i=e;i.ssr=!1,i.hooks=t,i.dirty=!!i.dirty,i.use=e=>sr(i,e),i.render=()=>n(i);function a(){t.callHook(`entries:updated`,i),i._b||i.render()}return i.invalidate=()=>{for(let e of i.entries.values())delete e._tags;i.dirty=!0,a()},i.push=(n,o)=>{let s=o?.onRendered?t.hook(`dom:rendered`,o.onRendered):void 0,c=r(n,o),l=e.entries.get(c._i);return l&&(l._o=n),i.dirty=!0,a(),{_i:c._i,patch(e){c.patch(e),i.dirty=!0,a()},dispose(){s?.(),e.entries.has(c._i)&&(c.dispose(),i.invalidate())}}},i}var Ra=/\s+/;function za(e={}){return t=>Ha(t,e)}function Ba(e){for(let t of e.entries.values())if(t._pending!==void 0)return!0;return!1}function Va(e,t){let n={_d:t,_t:t.title,_e:new Map([[`htmlAttrs`,t.documentElement],[`bodyAttrs`,t.body]]),_p:{},_s:{},_l:new Map};for(let t of e.entries.values())if(t._o!==void 0){let e=t._o;for(let t of[`bodyAttrs`,`htmlAttrs`]){let r=e[t]?.class;if(typeof r==`string`){let e=n._e.get(t);for(let i of r.split(Ra))i&&(n._p[`${t}:attr:class:${i}`]=()=>e.classList.remove(i))}}}return n}function Ha(e,t={}){let n=t.document||e.resolvedOptions.document,r=e._dom;if(!n||e._du||r&&r._d===n&&!e.dirty&&!Ba(e))return!1;let i=n.defaultView;e._du=!0;let a=!1;try{let o=function(e,t,n){d._s[e]=!n&&f[e]||t,delete f[e]},s=function(e,t,n,r,i,a){let s=`${e}:event:${t}`,c=d._l.get(s);if(c&&c[0]===a&&c[1]===n&&c[2]===r){o(s,c[4]);return}c?.[4]();let l=`data-${t}`,u=(e=>r.call(i,e)),f=()=>{a.removeEventListener(n,u),i.getAttribute(l)===``&&i.removeAttribute(l),d._l.get(s)?.[3]===u&&d._l.delete(s)};a.addEventListener(n,u),d._l.set(s,[a,n,r,u,f]),i.setAttribute(l,``),o(s,f,!0)},c=function({id:e,$el:t,tag:n}){if(d._e.set(e,t),!n.tag.endsWith(`Attrs`)){let r=n.textContent;r!=null&&r!==``&&(r!==t.textContent&&(t.textContent=r),o(`${e}:text`,()=>{t.textContent===r&&(t.textContent=``)},!0));let i=n.innerHTML;i!=null&&i!==``&&(i!==t.innerHTML&&(t.innerHTML=i),o(`${e}:html`,()=>{t.innerHTML===i&&(t.innerHTML=``)},!0));let a=`${e}:el`;o(a,f[a]||(()=>{t?.remove(),d._e.delete(e)}))}for(let r in n.props){let a=n.props[r];if(r[0]===`o`&&r[1]===`n`&&typeof a==`function`){let o=r.slice(2);t?.dataset?.[`${r}fired`]&&a.call(t,new((i?.Event)||Event)(o)),s(e,r,o,a,t,n.tag===`bodyAttrs`&&i?i:t);continue}let c=`${e}:attr:${r}`;if(r===`class`&&a)for(let e of a){let n=`${c}:${e}`;o(n,f[n]||(()=>t.classList.remove(e))),t.classList.contains(e)||t.classList.add(e)}else if(r===`style`&&a)for(let[e,n]of a){let r=`${c}:${e}`;o(r,f[r]||(()=>t.style.removeProperty(e))),t.style.setProperty(e,n)}else a!==!1&&a!==null&&(t.getAttribute(r)!==a&&t.setAttribute(r,a===!0?``:String(a)),o(c,f[c]||(()=>t.removeAttribute(r))))}},l={shouldRender:!0,tags:[]};if(Te(e,`dom:beforeRender`,l),!l.shouldRender)return!1;let u=r;if(u?._d!==n){if(u){for(let e in u._s)u._s[e]();for(let e in u._p)u._p[e]();u._s=u._p={},u._e.clear(),u._l.clear()}u=void 0}u?u._p=u._s:u=Va(e,n),u._s={};let d=u,f=d._p,p=[],m={};e.dirty=!1;let h=he(e,t.tagWeight?{tagWeight:t.tagWeight}:void 0),g=[],_={};for(let e of h){let t=_[e._d]||0,r=(t?`${e._d}:${t}`:e._d)||e._h,i={tag:e,id:r,shouldRender:!0};e.tag===`meta`&&e._d&&Se(e._d)&&(_[e._d]=t+1),g.push(i),e.tag===`title`?(n.title=e.textContent,o(`title:`,()=>n.title=d._t)):(i.$el=d._e.get(r),i.$el?c(i):ce.has(e.tag)&&p.push(i))}if(p.length){let e=new Set(d._e.values());for(let t of[...n.body.children,...n.head.children]){let n=t.tagName.toLowerCase();if(!ce.has(n)||e.has(t))continue;let r={innerHTML:t.innerHTML};for(let e of t.getAttributeNames())r[e]=t.getAttribute(e);let i=ae({tag:n,props:{}},r);i.key=t.getAttribute(`data-hid`)||void 0;let a=re(i)||_e(i),o=a,s=1;for(;d._e.has(o);)o=`${a}:${s++}`;d._e.set(o,t)}}for(let e of p){let t=d._e.get(e.id);e.$el=t||n.createElement(e.tag.tag),c(e),t||(m[e.tag.tagPosition||`head`]??=n.createDocumentFragment()).appendChild(e.$el)}m.head&&n.head.appendChild(m.head),m.bodyOpen&&n.body.insertBefore(m.bodyOpen,n.body.firstChild),m.bodyClose&&n.body.appendChild(m.bodyClose);for(let e in f)f[e]();e._dom=d,a=!0,Te(e,`dom:rendered`,{renders:g})}catch(t){throw e.dirty=!0,t}finally{e._du=!1}return a&&(e.dirty||Ba(e))&&Ha(e,t),a}var Ua=e=>typeof e.tagPriority==`number`?e.tagPriority:100+(ve[e.tagPriority]||0);function Wa(e={}){e.document=e.document||(typeof window<`u`?document:void 0);let t=e.render||za({document:e.document}),n=La(cr(t,{document:e.document,propResolvers:e.propResolvers,_tagWeight:Ua,init:[]}),oe(e.hooks),t);return e.plugins?.forEach(e=>n.use(e)),e.init?.forEach(e=>e&&n.push(e)),n}function Ga(e={}){let t=za(),n,r=0;return n=Wa({render:()=>{let e=++r;setTimeout(()=>{e===r&&t(n)},0)},...e}),n.install=fe(n),n}var Ka={disableDefaults:!0,plugins:[Xn,nr,or,Yn]},qa=O({name:`nuxt:head`,enforce:`pre`,setup(e){Ia(e,Ga(Ka))}}),Ja=/(:\w+)\([^)]+\)/g,Ya=/(:\w+)[?+*]/g,Xa=/:\w+/g,Za=(e,t)=>t.path.replace(Ja,`$1`).replace(Ya,`$1`).replace(Xa,t=>e.params[t.slice(1)]?.toString()||``),Qa=(e,t)=>{let n=e.route.matched.find(t=>t.components?.default===e.Component.type),r=t??n?.meta.key??(n&&Za(e.route,n));return typeof r==`function`?r(e.route):r},$a=(e,t)=>({default:()=>e?T(me,e===!0?{}:e,t):t});function eo(e){return Array.isArray(e)?e:[e]}var to=[Bt(async e=>{if(!e.meta?.validate)return;let t=await Promise.resolve(e.meta.validate(e));if(t!==!0)return At({fatal:!0,status:t&&(t.status||t.statusCode)||404,statusText:t&&(t.statusText||t.statusMessage)||`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}})}),Bt(e=>{let t=Er({path:e.path});if(t.redirect){let n=t.redirect.includes(`#`)?t.redirect:t.redirect+e.hash;return Ct(n)?(window.location.href=n,!1):n}})],no={},ro=[{name:`index`,path:`/`,component:()=>br(()=>import(`./DfwHOEwG.js`),__vite__mapDeps([0,1,2,3]),import.meta.url)}],io=/\/(?=$|[?#])/;function ao(e,t,n){let{pathname:r,search:i,hash:a}=t,o=e.indexOf(`#`);if(o>-1){let t=a.includes(e.slice(o))?e.slice(o).length:1,n=a.slice(t);return n[0]!==`/`&&(n=`/`+n),Xe(n,``)}let s=Xe(r,e),c=!n||nn(s,n)?s:n;return c+(c.includes(`?`)?``:i)+a}var oo=O({name:`nuxt:router`,enforce:`pre`,async setup(e){let t=ke().app.baseURL,n=Ta.history?.(t)??ki(t),r=Ta.routes?await Ta.routes(ro)??ro:ro,i,a=sa({...Ta,scrollBehavior:(e,t,n)=>{if(t===P)i=n;else if(Ta.scrollBehavior){if(a.options.scrollBehavior=Ta.scrollBehavior,`scrollRestoration`in window.history){let e=a.beforeEach(()=>{e(),window.history.scrollRestoration=`manual`})}return Ta.scrollBehavior(e,P,i||n)}},history:n,routes:r});`scrollRestoration`in window.history&&(window.history.scrollRestoration=`auto`),e.vueApp.use(a);let s=o(a.currentRoute.value);a.afterEach((e,t)=>{s.value=t}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>s.value});let l=ao(t,window.location,e.payload.path),u=Xe(window.location.pathname,t),d=o(a.currentRoute.value),f=()=>{d.value=a.currentRoute.value};a.afterEach((e,t)=>{let n=e.matched.at(-1)?.components?.default,r=t.matched.at(-1)?.components?.default;n===r?Qa({route:e,Component:{type:n}})===Qa({route:t,Component:{type:r}})&&f():e.matched.length<t.matched.length&&e.matched.every((e,n)=>e.components?.default===t.matched[n]?.components?.default)&&f()});let p={sync:f};for(let e in d.value)Object.defineProperty(p,e,{get:()=>d.value[e],enumerable:!0});e._route=c(p),e._middleware||={global:[],named:{}};let m=Yt();a.afterEach(async(t,n,r)=>{delete e._processingMiddleware,!e.isHydrating&&m.value&&!M(r,Ue.aborted|Ue.cancelled)&&await e.runWithContext(je),r&&await e.callHook(`page:loading:end`)}),a.onError(async()=>{delete e._processingMiddleware,await e.callHook(`page:loading:end`)});try{await a.isReady()}catch(t){await rt(e,t)}let h=l===a.currentRoute.value.fullPath?a.currentRoute.value:a.resolve(l),g=a.currentRoute.value.fullPath,_=e.isHydrating&&e.payload.prerenderedAt&&e.payload.path&&l.replace(io,``)!==e.payload.path.replace(io,``)&&nn(a.currentRoute.value.path,e.payload.path);f();function v(r){!e.isHydrating&&r.fullPath!==ao(t,window.location)&&n.push(r.fullPath)}a.beforeEach(t=>{if(!e.isHydrating&&mr(t.path).noScripts)return window.location.assign(a.resolve(t.fullPath).href),!1}),a.beforeResolve(e=>{if(e.matched.length||nn(e.path,u))return;let n=new URL(Re(e.fullPath,t),window.location.href);if(n.origin===window.location.origin)return window.location.assign(n),!1});let y=e.payload.state._layout;return a.beforeEach(async(t,n)=>{await e.callHook(`page:loading:start`),t.meta=De(t.meta),e.isHydrating&&y&&!Oe(t.meta.layout)&&(t.meta.layout=y),e._processingMiddleware=!0;{let r=new Set([...to,...e._middleware.global]);for(let e of t.matched){let t=e.meta.middleware;if(t)for(let e of eo(t))r.add(e)}let i=Er({path:t.path});if(i.appMiddleware)for(let e in i.appMiddleware)i.appMiddleware[e]?r.add(e):r.delete(e);for(let i of r){let r=typeof i==`string`?e._middleware.named[i]||await no[i]?.().then(e=>e.default||e):i;if(!r)throw xt.NUXT_E2004({entry:String(i),validMiddleware:void 0});try{let i=await e.runWithContext(()=>r(t,n));if(!e.payload.serverRendered&&e.isHydrating&&(i===!1||i instanceof Error)){let t=i||At({status:404,statusText:`Page Not Found: ${l}`});return await e.runWithContext(()=>wt(t)),!1}if(i===!0)continue;if(i===!1)return i;if(i)return Ot(i)&&i.fatal&&(await e.runWithContext(()=>wt(i)),v(t)),i}catch(n){let r=At(n);return r.fatal&&(await e.runWithContext(()=>wt(r)),v(t)),r}}}}),a.afterEach((t,n,r)=>{if(t.matched.length===0&&!m.value&&!M(r,Ue.aborted|Ue.cancelled))return e.runWithContext(()=>wt(At({status:404,fatal:!1,statusText:`Page not found: ${t.fullPath}`,data:{path:t.fullPath}})))}),e.hooks.hookOnce(`app:created`,async()=>{try{if(`name`in h&&(h.name=void 0),a.currentRoute.value.fullPath===g){if(_){let t=a.resolve(e.payload.path);`name`in t&&(t.name=void 0),await a.replace({...t,force:!0});let n=()=>{if(!e[`~restoreDeferredRoute`])return;e[`~restoreDeferredRoute`]=void 0;let t=a.currentRoute,n=a.resolve(l);n.matched.at(-1)===t.value.matched.at(-1)&&(n.meta=t.value.meta),t.value=n,f(),a.replace({...h,force:!0}).catch(()=>{})};e[`~restoreDeferredRoute`]=n,e.hooks.hookOnce(`app:suspense:resolve`,n)}else await a.replace({...h,force:!0})}a.options.scrollBehavior=Ta.scrollBehavior}catch(t){await rt(e,t)}}),{provide:{router:a}}}}),so=O({name:`nuxt:payload`,setup(e){let t=new Set,n=F(),{schedule:r}=vi(e);n.beforeResolve(async(n,r)=>{let i=$r(n.path),a=i?Qe(n.fullPath):n.path;if(a===(i?Qe(r.fullPath):r.path))return;let o=await Wr(a);if(o){for(let n of t)delete e.static.data[n];for(let n in o.data)n in e.static.data||t.add(n),e.static.data[n]=o.data[n]}}),e.hooks.hook(`link:prefetch`,e=>{Ci(()=>{let{hostname:t}=new URL(e,window.location.href);if(t!==window.location.hostname)return;let n=di(e);r({key:`payload:${e}`,priority:`payload`,scope:`navigation`,group:n,run:async(t,n)=>{t.aborted||(await Wr(e,{signal:t,promoted:n}).catch(()=>{lr.NUXT_E7003({url:e})}),t.aborted)}})})}),Ci(()=>{ui()&&setTimeout(Tr,1e3)})}}),co=O(()=>{let e=F();Ci(()=>{e.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),lo=O(e=>{let t;async function n(){let r;try{r=await Tr()}catch(e){let t=e;if(!(`status`in t&&(t.status===404||t.status===403)))throw t}t&&clearTimeout(t),t=setTimeout(n,s);try{let n=await Ln(Fn(`builds/latest.json`)+`?${Date.now()}`);n.id!==r?.id&&(e.hooks.callHook(`app:manifest:update`,n),t&&clearTimeout(t))}catch{}}Ci(()=>{t=setTimeout(n,s)})}),uo=O({name:`nuxt:chunk-reload-crawler`,setup(e){let t=!0;e.hooks.hookOnce(`app:suspense:resolve`,()=>{t=!1}),e.hook(`app:chunkError`,()=>{t&&Et(navigator.userAgent)&&xa()})}}),fo=O({name:`nuxt:chunk-reload`,setup(e){let t=F(),n=ke(),r=new Set;t.beforeEach(()=>{r.clear()}),e.hook(`app:chunkError`,({error:e})=>{r.add(e)});function i(e){xa({path:en(n.app.baseURL,e.fullPath),persistState:!0})}e.hook(`app:manifest:update`,()=>{t.beforeResolve(i)}),t.onError((e,t)=>{r.has(e)&&i(t)})}}),po=O({name:`nuxt:island-link-navigation`,setup(e){}}),mo=O({name:`nuxt:global-components`}),ho={},go=O({name:`nuxt:prefetch`,setup(e){let t=F();e.hooks.hook(`app:mounted`,()=>{t.beforeEach(async e=>{let t=e?.meta?.layout;typeof t==`string`&&t in ho&&await va(ho[t])})});let{schedule:n}=vi(e);e.hooks.hook(`link:prefetch`,async e=>{if(yt(e))return;let r=t.resolve(e);if(!r)return;let i=r.meta.layout,a=eo(r.meta.middleware).filter(e=>typeof e==`string`);n({key:`route:chunks:${e}`,priority:`route`,scope:`navigation`,group:di(e),run:e=>{if(e.aborted)return;let t=[];for(let e of a){let n=no[e];typeof n==`function`&&t.push(n())}return typeof i==`string`&&i in ho&&t.push(va(ho[i])),Promise.all(t).catch(()=>{})}})})}}),_o=O(()=>({provide:{pwaIcons:{transparent:{},maskable:{},favicon:{},apple:{},appleSplashScreen:{}}}}));function vo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function yo(e){if(Array.isArray(e))return e}function bo(e){if(Array.isArray(e))return vo(e)}function xo(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function So(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Mo(r.key),r)}}function Co(e,t,n){return t&&So(e.prototype,t),n&&So(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wo(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Po(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function I(e,t,n){return(t=Mo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function To(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Eo(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Do(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oo(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ko(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ko(Object(n),!0).forEach(function(t){I(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ko(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ao(e,t){return yo(e)||Eo(e,t)||Po(e,t)||Do()}function R(e){return bo(e)||To(e)||Po(e)||Oo()}function jo(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Mo(e){var t=jo(e,`string`);return typeof t==`symbol`?t:t+``}function No(e){"@babel/helpers - typeof";return No=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},No(e)}function Po(e,t){if(e){if(typeof e==`string`)return vo(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vo(e,t):void 0}}var Fo=function(){},Io={},Lo={},Ro=null,zo={mark:Fo,measure:Fo};try{typeof window<`u`&&(Io=window),typeof document<`u`&&(Lo=document),typeof MutationObserver<`u`&&(Ro=MutationObserver),typeof performance<`u`&&(zo=performance)}catch{}var Bo=(Io.navigator||{}).userAgent,Vo=Bo===void 0?``:Bo,z=Io,B=Lo,Ho=Ro,Uo=zo;z.document;var V=!!B.documentElement&&!!B.head&&typeof B.addEventListener==`function`&&typeof B.createElement==`function`,Wo=~Vo.indexOf(`MSIE`)||~Vo.indexOf(`Trident/`),Go,Ko=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,qo=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Jo={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Yo={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Xo=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],H=`classic`,Zo=`duotone`,Qo=`sharp`,$o=`sharp-duotone`,es=`chisel`,ts=`etch`,ns=`graphite`,rs=`jelly`,is=`jelly-duo`,as=`jelly-fill`,os=`mosaic`,ss=`notdog`,cs=`notdog-duo`,ls=`pixel`,us=`slab`,ds=`slab-duo`,fs=`slab-press`,ps=`slab-press-duo`,ms=`thumbprint`,hs=`utility`,gs=`utility-duo`,_s=`utility-fill`,vs=`vellum`,ys=`whiteboard`,bs=`Classic`,xs=`Duotone`,Ss=`Sharp`,Cs=`Sharp Duotone`,ws=`Chisel`,Ts=`Etch`,Es=`Graphite`,Ds=`Jelly`,Os=`Jelly Duo`,ks=`Jelly Fill`,As=`Mosaic`,js=`Notdog`,Ms=`Notdog Duo`,Ns=`Pixel`,Ps=`Slab`,Fs=`Slab Duo`,Is=`Slab Press`,Ls=`Slab Press Duo`,Rs=`Thumbprint`,zs=`Utility`,Bs=`Utility Duo`,Vs=`Utility Fill`,Hs=`Vellum`,Us=`Whiteboard`,Ws=[H,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys];Go={},I(I(I(I(I(I(I(I(I(I(Go,H,bs),Zo,xs),Qo,Ss),$o,Cs),es,ws),ts,Ts),ns,Es),rs,Ds),is,Os),as,ks),I(I(I(I(I(I(I(I(I(I(Go,os,As),ss,js),cs,Ms),ls,Ns),us,Ps),ds,Fs),fs,Is),ps,Ls),ms,Rs),hs,zs),I(I(I(I(Go,gs,Bs),_s,Vs),vs,Hs),ys,Us);var Gs={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Ks={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},qs=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Js={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Ys=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Xs={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Zs=[`kit`];I(I({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Qs={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},$s={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},ec={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},tc={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},nc,rc={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ic=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];nc={},I(I(I(I(I(I(I(I(I(I(nc,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),I(I(I(I(I(I(I(I(I(I(nc,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),I(I(I(I(nc,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),I(I({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ac={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},oc={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},sc={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},cc=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(ic,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),lc=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],uc=[1,2,3,4,5,6,7,8,9,10],dc=uc.concat([11,12,13,14,15,16,17,18,19,20]),fc=[].concat(R(Object.keys(oc)),lc,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,rc.GROUP,rc.SWAP_OPACITY,rc.PRIMARY,rc.SECONDARY],uc.map(function(e){return`${e}x`}),dc.map(function(e){return`w-${e}`})),pc={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},U=`___FONT_AWESOME___`,mc=16,hc=`fa`,gc=`svg-inline--fa`,_c=`data-fa-i2svg`,vc=`data-fa-pseudo-element`,yc=`data-fa-pseudo-element-pending`,bc=`data-prefix`,xc=`data-icon`,Sc=`fontawesome-i2svg`,Cc=`async`,wc=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Tc=[`::before`,`::after`,`:before`,`:after`],Ec=function(){try{return!0}catch{return!1}}();function Dc(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[H]}})}var Oc=L({},Jo);Oc[H]=L(L(L(L({},{"fa-duotone":`duotone`}),Jo[H]),Xs.kit),Xs[`kit-duotone`]);var kc=Dc(Oc),Ac=L({},Js);Ac[H]=L(L(L(L({},{duotone:`fad`}),Ac[H]),tc.kit),tc[`kit-duotone`]);var jc=Dc(Ac),Mc=L({},sc);Mc[H]=L(L({},Mc[H]),ec.kit);var Nc=Dc(Mc),Pc=L({},ac);Pc[H]=L(L({},Pc[H]),Qs.kit),Dc(Pc);var Fc=Ko,Ic=`fa-layers-text`,Lc=qo;Dc(L({},Gs));var Rc=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],zc=Yo,Bc=[].concat(R(Zs),R(fc)),Vc=z.FontAwesomeConfig||{};function Hc(e){var t=B.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Uc(e){return e===``?!0:e===`false`?!1:e===`true`||e}B&&typeof B.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Ao(e,2),n=t[0],r=t[1],i=Uc(Hc(n));i!=null&&(Vc[r]=i)});var Wc={styleDefault:`solid`,familyDefault:H,cssPrefix:hc,replacementClass:gc,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vc.familyPrefix&&(Vc.cssPrefix=Vc.familyPrefix);var Gc=L(L({},Wc),Vc);Gc.autoReplaceSvg||(Gc.observeMutations=!1);var W={};Object.keys(Wc).forEach(function(e){Object.defineProperty(W,e,{enumerable:!0,set:function(t){Gc[e]=t,Kc.forEach(function(e){return e(W)})},get:function(){return Gc[e]}})}),Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){Gc.cssPrefix=e,Kc.forEach(function(e){return e(W)})},get:function(){return Gc.cssPrefix}}),z.FontAwesomeConfig=W;var Kc=[];function qc(e){return Kc.push(e),function(){Kc.splice(Kc.indexOf(e),1)}}var G=mc,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Jc(e){if(e&&V){var t=B.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=B.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return B.head.insertBefore(t,r),e}}var Yc=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Xc(){for(var e=12,t=``;e-->0;)t+=Yc[Math.random()*62|0];return t}function Zc(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qc(e){return e.classList?Zc(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function $c(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function el(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${$c(e[n])}" `},``).trim()}function tl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function nl(e){return e.size!==K.size||e.x!==K.x||e.y!==K.y||e.rotate!==K.rotate||e.flipX||e.flipY}function rl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function il(e){var t=e.transform,n=e.width,r=n===void 0?mc:n,i=e.height,a=i===void 0?mc:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&Wo?`translate(${t.x/G-r/2}em, ${t.y/G-a/2}em) `:s?`translate(calc(-50% + ${t.x/G}em), calc(-50% + ${t.y/G}em)) `:`translate(${t.x/G}em, ${t.y/G}em) `,c+=`scale(${t.size/G*(t.flipX?-1:1)}, ${t.size/G*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var al=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ol(){var e=hc,t=gc,n=W.cssPrefix,r=W.replacementClass,i=al;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var sl=!1;function cl(){W.autoAddCss&&!sl&&(Jc(ol()),sl=!0)}var ll={mixout:function(){return{dom:{css:ol,insertCss:cl}}},hooks:function(){return{beforeDOMElementCreation:function(){cl()},beforeI2svg:function(){cl()}}}},q=z||{};q[U]||(q[U]={}),q[U].styles||(q[U].styles={}),q[U].hooks||(q[U].hooks={}),q[U].shims||(q[U].shims=[]);var J=q[U],ul=[],dl=function(){B.removeEventListener(`DOMContentLoaded`,dl),fl=1,ul.map(function(e){return e()})},fl=!1;V&&(fl=(B.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(B.readyState),fl||B.addEventListener(`DOMContentLoaded`,dl));function pl(e){V&&(fl?setTimeout(e,0):ul.push(e))}function ml(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?$c(e):`<${t} ${el(r)}>${a.map(ml).join(``)}</${t}>`}function hl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gl=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},_l=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:gl(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function vl(e){return R(e).length===1?e.codePointAt(0).toString(16):null}function yl(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function bl(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=yl(t);typeof J.hooks.addPack==`function`&&!r?J.hooks.addPack(e,yl(t)):J.styles[e]=L(L({},J.styles[e]||{}),i),e===`fas`&&bl(`fa`,t)}var xl=J.styles,Sl=J.shims,Cl=Object.keys(Nc),wl=Cl.reduce(function(e,t){return e[t]=Object.keys(Nc[t]),e},{}),Tl=null,El={},Dl={},Ol={},kl={},Al={};function jl(e){return~Bc.indexOf(e)}function Ml(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!jl(i)?i:null}var Nl=function(){var e=function(e){return _l(xl,function(t,n,r){return t[r]=_l(n,e,{}),t},{})};El=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Dl=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Al=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in xl||W.autoFetchSvg,n=_l(Sl,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Ol=n.names,kl=n.unicodes,Tl=Vl(W.styleDefault,{family:W.familyDefault})};qc(function(e){Tl=Vl(e.styleDefault,{family:W.familyDefault})}),Nl();function Pl(e,t){return(El[e]||{})[t]}function Fl(e,t){return(Dl[e]||{})[t]}function Il(e,t){return(Al[e]||{})[t]}function Ll(e){return Ol[e]||{prefix:null,iconName:null}}function Rl(e){var t=kl[e],n=Pl(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return Tl}var zl=function(){return{prefix:null,iconName:null,rest:[]}};function Bl(e){var t=H,n=Cl.reduce(function(e,t){return e[t]=`${W.cssPrefix}-${t}`,e},{});return Ws.forEach(function(r){(e.includes(n[r])||e.some(function(e){return wl[r].includes(e)}))&&(t=r)}),t}function Vl(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?H:t,r=kc[n][e];if(n===Zo&&!e)return`fad`;var i=jc[n][e]||jc[n][r],a=e in J.styles?e:null;return i||a||null}function Hl(e){var t=[],n=null;return e.forEach(function(e){var r=Ml(W.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Ul(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Wl=cc.concat(Ys);function Gl(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=Ul(e.filter(function(e){return Wl.includes(e)})),a=Ul(e.filter(function(e){return!Wl.includes(e)})),o=Ao(i.filter(function(e){return r=e,!Xo.includes(e)}),1)[0],s=o===void 0?null:o,c=Bl(i),l=L(L({},Hl(a)),{},{prefix:Vl(s,{family:c})});return L(L(L({},l),Yl({values:e,family:c,styles:xl,config:W,canonical:l,givenPrefix:r})),Kl(n,r,l))}function Kl(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Ll(i):{},o=Il(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!xl.far&&xl.fas&&!W.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var ql=Ws.filter(function(e){return e!==H||e!==Zo}),Jl=Object.keys(sc).filter(function(e){return e!==H}).map(function(e){return Object.keys(sc[e])}).flat();function Yl(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Zo,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&ql.includes(n)&&(Object.keys(s).find(function(e){return Jl.includes(e)})||l.autoFetchSvg)&&(r.prefix=qs.get(n).defaultShortPrefixId,r.iconName=Il(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Y()||`fas`),r}var Xl=function(){function e(){xo(this,e),this.definitions={}}return Co(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=L(L({},e.definitions[n]||{}),t[n]),bl(n,t[n]);var r=Nc[H][n];r&&bl(r,t[n]),Nl()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Zl=[],Ql={},$l={},eu=Object.keys($l);function tu(e,t){var n=t.mixoutsTo;return Zl=e,Ql={},Object.keys($l).forEach(function(e){eu.indexOf(e)===-1&&delete $l[e]}),Zl.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),No(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Ql[e]||(Ql[e]=[]),Ql[e].push(r[e])})}e.provides&&e.provides($l)}),n}function nu(e,t){var n=[...arguments].slice(2);return(Ql[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function ru(e){var t=[...arguments].slice(1);(Ql[e]||[]).forEach(function(e){e.apply(null,t)})}function X(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $l[e]?$l[e].apply(null,t):void 0}function iu(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Y();if(t)return t=Il(n,t)||t,hl(au.definitions,n,t)||hl(J.styles,n,t)}var au=new Xl,Z={noAuto:function(){W.autoReplaceSvg=!1,W.observeMutations=!1,ru(`noAuto`)},config:W,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(ru(`beforeI2svg`,e),X(`pseudoElements2svg`,e),X(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,pl(function(){ou({autoReplaceSvgRoot:t}),ru(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(No(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Il(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Vl(e[0]);return{prefix:n,iconName:Il(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${W.cssPrefix}-`)>-1||e.match(Fc))){var r=Gl(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:Il(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Y();return{prefix:i,iconName:Il(i,e)||e}}}},library:au,findIconDefinition:iu,toHtml:ml},ou=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?B:e;(Object.keys(J.styles).length>0||W.autoFetchSvg)&&V&&W.autoReplaceSvg&&Z.dom.i2svg({node:t})};function su(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return ml(e)})}}),Object.defineProperty(e,"node",{get:function(){if(V){var t=B.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function cu(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(nl(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=tl(L(L({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function lu(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${W.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:L(L({},i),{},{id:o}),children:r}]}]}function uu(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function du(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[W.replacementClass,a?`${W.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:L(L({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!uu(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[_c]=``);var _=L(L({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:L({},l.styles)}),v=r.found&&n.found?X(`generateAbstractMask`,_)||{children:[],attributes:{}}:X(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?lu(_):cu(_)}function fu(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=L(L({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[_c]=``);var l=L({},a.styles);nl(i)&&(l.transform=il({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=tl(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function pu(e){var t=e.content,n=e.extra,r=L(L({},n.attributes),{},{class:n.classes.join(` `)}),i=tl(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var mu=J.styles;function hu(e){var t=e[0],n=e[1],r=Ao(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${W.cssPrefix}-${zc.GROUP}`},children:[{tag:`path`,attributes:{class:`${W.cssPrefix}-${zc.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${W.cssPrefix}-${zc.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var gu={found:!1,width:512,height:512};function _u(e,t){!Ec&&!W.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function vu(e,t){var n=t;return t===`fa`&&W.styleDefault!==null&&(t=Y()),new Promise(function(r,i){if(n===`fa`){var a=Ll(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&mu[t]&&mu[t][e]){var o=mu[t][e];return r(hu(o))}_u(e,t),r(L(L({},gu),{},{icon:W.showMissingIcons&&e&&X(`missingIconAbstract`)||{}}))})}var yu=function(){},bu=W.measurePerformance&&Uo&&Uo.mark&&Uo.measure?Uo:{mark:yu,measure:yu},xu=`FA "7.3.1"`,Su=function(e){return bu.mark(`${xu} ${e} begins`),function(){return Cu(e)}},Cu=function(e){bu.mark(`${xu} ${e} ends`),bu.measure(`${xu} ${e}`,`${xu} ${e} begins`,`${xu} ${e} ends`)},wu={begin:Su,end:Cu},Tu=function(){};function Eu(e){return typeof(e.getAttribute?e.getAttribute(_c):null)==`string`}function Du(e){var t=e.getAttribute?e.getAttribute(bc):null,n=e.getAttribute?e.getAttribute(xc):null;return t&&n}function Ou(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(W.replacementClass)}function ku(){return W.autoReplaceSvg===!0?Pu.replace:Pu[W.autoReplaceSvg]||Pu.replace}function Au(e){return B.createElementNS(`http://www.w3.org/2000/svg`,e)}function ju(e){return B.createElement(e)}function Mu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Au:ju:t;if(typeof e==`string`)return B.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Mu(e,{ceFn:n}))}),r}function Nu(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Pu={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(Mu(e),t)}),t.getAttribute(_c)===null&&W.keepOriginalSource){var n=B.createComment(Nu(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~Qc(t).indexOf(W.replacementClass))return Pu.replace(e);var r=RegExp(`${W.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===W.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return ml(e)}).join(`
`);t.setAttribute(_c,``),t.innerHTML=a}};function Fu(e){e()}function Iu(e,t){var n=typeof t==`function`?t:Tu;if(e.length===0)n();else{var r=Fu;W.mutateApproach===Cc&&(r=z.requestAnimationFrame||Fu),r(function(){var t=ku(),r=wu.begin(`mutate`);e.map(t),r(),n()})}}var Lu=!1;function Ru(){Lu=!0}function zu(){Lu=!1}var Bu=null;function Vu(e){if(Ho&&W.observeMutations){var t=e.treeCallback,n=t===void 0?Tu:t,r=e.nodeCallback,i=r===void 0?Tu:r,a=e.pseudoElementsCallback,o=a===void 0?Tu:a,s=e.observeMutationsRoot,c=s===void 0?B:s;Bu=new Ho(function(e){if(!Lu){var t=Y();Zc(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Eu(e.addedNodes[0])&&(W.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&W.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Eu(e.target)&&~Rc.indexOf(e.attributeName)){if(e.attributeName===`class`&&Du(e.target)){var r=Gl(Qc(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(bc,a||t),s&&e.target.setAttribute(xc,s)}else Ou(e.target)&&i(e.target)}})}}),V&&Bu.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hu(){Bu&&Bu.disconnect()}function Uu(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Wu(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Gl(Qc(e));return i.prefix||=Y(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Fl(i.prefix,e.innerText)||Pl(i.prefix,vl(e.innerText))),!i.iconName&&W.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Gu(e){return Zc(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Ku(){return{iconName:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wu(e),r=n.iconName,i=n.prefix,a=n.rest,o=Gu(e),s=nu(`parseNodeAttributes`,{},e);return L({iconName:r,prefix:i,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Uu(e):[],attributes:o}},s)}var Ju=J.styles;function Yu(e){var t=W.autoReplaceSvg===`nest`?qu(e,{styleParser:!1}):qu(e);return~t.extra.classes.indexOf(Ic)?X(`generateLayersText`,e,t):X(`generateSvgReplacementMutation`,e,t)}function Xu(){return[].concat(R(Ys),R(cc))}function Zu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();var n=B.documentElement.classList,r=function(e){return n.add(`${Sc}-${e}`)},i=function(e){return n.remove(`${Sc}-${e}`)},a=W.autoFetchSvg?Xu():Xo.concat(Object.keys(Ju));a.includes(`fa`)||a.push(`fa`);var o=[`.${Ic}:not([${_c}])`].concat(a.map(function(e){return`.${e}:not([${_c}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=Zc(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=wu.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Yu(t);n&&e.push(n)}catch(e){Ec||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Iu(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Qu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yu(e).then(function(e){e&&Iu([e],t)})}function $u(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:iu(t||{}),i=n.mask;return i&&=(i||{}).icon?i:iu(i||{}),e(r,L(L({},n),{},{mask:i}))}}var ed=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?K:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return su(L({type:`icon`},e),function(){return ru(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),du({icons:{main:hu(v),mask:s?hu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:L(L({},K),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},td={mixout:function(){return{icon:$u(ed)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Zu,e.nodeCallback=Qu,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?B:t,r=e.callback;return Zu(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([vu(n,r),o.iconName?vu(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Ao(o,2),u=l[0],d=l[1];t([e,du({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=tl(a);o.length>0&&(n.style=o);var s;return nl(i)&&(s=X(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},nd={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return su({type:`layer`},function(){ru(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${W.cssPrefix}-layers`].concat(R(r)).join(` `)},children:n}]})}}}},rd={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return su({type:`counter`,content:e},function(){return ru(`beforeDOMElementCreation`,{content:e,params:t}),pu({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${W.cssPrefix}-layers-counter`].concat(R(a))}})})}}}},id={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?K:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return su({type:`text`,content:e},function(){return ru(`beforeDOMElementCreation`,{content:e,params:t}),fu({content:e,transform:L(L({},K),r),extra:{attributes:s,styles:l,classes:[`${W.cssPrefix}-layers-text`].concat(R(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Wo){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,fu({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},ad=RegExp(`"`,`ug`),od=[1105920,1112319],sd=L(L(L(L({},{FontAwesome:{normal:`fas`,400:`fas`}}),Ks),pc),$s),cd=Object.keys(sd).reduce(function(e,t){return e[t.toLowerCase()]=sd[t],e},{}),ld=Object.keys(cd).reduce(function(e,t){var n=cd[t];return e[t]=n[900]||R(Object.entries(n))[0][1],e},{});function ud(e){return vl(R(e.replace(ad,``))[0]||``)}function dd(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(ad,``),r=n.codePointAt(0),i=r>=od[0]&&r<=od[1],a=n.length===2&&n[0]===n[1];return i||a||t}function fd(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(cd[n]||{})[i]||ld[n]}function pd(e,t){var n=`${yc}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Zc(e.children).filter(function(e){return e.getAttribute(vc)===t})[0],o=z.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Lc),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=fd(s,l),p=ud(d),m=c[0].startsWith(`FontAwesome`),h=dd(o),g=Pl(f,p),_=g;if(m){var v=Rl(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(bc)!==f||a.getAttribute(xc)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Ku(),b=y.extra;b.attributes[vc]=t,vu(g,f).then(function(i){var a=du(L(L({},y),{},{icons:{main:i,mask:zl()},prefix:f,iconName:_,extra:b,watchable:!0})),o=B.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return ml(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function md(e){return Promise.all([pd(e,`::before`),pd(e,`::after`)])}function hd(e){return e.parentNode!==document.head&&!~wc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vc)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var gd=function(e){return!!e&&Tc.some(function(t){return e.includes(t)})},_d=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=wo(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(gd(a)){var o=Tc.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function vd(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(V){var n;if(t)n=e;else if(W.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=wo(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=wo(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=wo(_d(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){W.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=Zc(n).filter(hd).map(md),i=wu.begin(`searchPseudoElements`);Ru(),Promise.all(r).then(function(){i(),zu(),e()}).catch(function(){i(),zu(),t()})})}}var yd={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=vd,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?B:t;W.searchPseudoElements&&vd(n)}}},bd=!1,xd={mixout:function(){return{dom:{unwatch:function(){Ru(),bd=!0}}}},hooks:function(){return{bootstrap:function(){Vu(nu(`mutationObserverCallbacks`,{}))},noAuto:function(){Hu()},watch:function(e){var t=e.observeMutationsRoot;bd?zu():Vu(nu(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Sd=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Cd={mixout:function(){return{parse:{transform:function(e){return Sd(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Sd(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:L({},a.outer),children:[{tag:`g`,attributes:L({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:L(L({},t.icon.attributes),a.path)}]}]}}}},wd={x:0,y:0,width:`100%`,height:`100%`};function Td(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ed(e){return e.tag===`g`?e.children:[e]}tu([ll,td,nd,rd,id,yd,xd,Cd,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Gl(n.split(` `).map(function(e){return e.trim()})):zl();return r.prefix||=Y(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=rl({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:L(L({},wd),{},{fill:`white`})},p=c.children?{children:c.children.map(Td)}:{},m={tag:`g`,attributes:L({},d.inner),children:[Td(L({tag:c.tag,attributes:L(L({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:L({},d.outer),children:[m]},g=`mask-${a||Xc()}`,_=`clip-${a||Xc()}`,v={tag:`mask`,attributes:L(L({},wd),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ed(u)},v]};return t.push(y,{tag:`rect`,attributes:L({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},wd)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;z.matchMedia&&(t=z.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:L(L({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=L(L({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:L(L({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:L(L({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:L(L({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:L(L({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:L(L({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:L(L({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:L(L({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Z}),Z.noAuto;var Dd=Z.config,Od=Z.library;Z.dom;var kd=Z.parse;Z.findIconDefinition,Z.toHtml;var Ad=Z.icon;Z.layer;var jd=Z.text;Z.counter;function Md(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Nd(e){if(Array.isArray(e))return Md(e)}function Q(e,t,n){return(t=Vd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pd(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Fd(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Id(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Id(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Id(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ld(e,t){if(e==null)return{};var n,r,i=Rd(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Rd(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function zd(e){return Nd(e)||Pd(e)||Ud(e)||Fd()}function Bd(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Vd(e){var t=Bd(e,`string`);return typeof t==`symbol`?t:t+``}function Hd(e){"@babel/helpers - typeof";return Hd=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Hd(e)}function Ud(e,t){if(e){if(typeof e==`string`)return Md(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Md(e,t):void 0}}function Wd(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}function Gd(e){var t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},n=(Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-canvas-square`,e.canvasSquare),`fa-canvas-roomy`,e.canvasRoomy),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),Q(Q(Q(Q(Q(t,`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var Kd=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},qd={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(Kd)})(qd);var Jd=qd.exports,Yd=[`gradientFill`],Xd=[`class`,`style`],Zd=[`type`,`stops`,`id`];function Qd(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=Jd.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function $d(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function ef(e,t){return T(`stop`,$({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function tf(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(tf);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?$($({},e),{},{attributes:$($({},e.attributes),{},{fill:void 0}),children:t}):$($({},e),{},{children:t})}function nf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=Ld(t,Yd),o=i||`fill`in n?tf(e):e,s=(o.children||[]).map(function(e){return nf(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=$d(n);break;case`style`:e.style=Qd(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=Ld(n,Xd);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var f=i.type,p=i.stops,m=p===void 0?[]:p,h=i.id,g=Ld(i,Zd),_=T(f===`linear`?`linearGradient`:`radialGradient`,$($({},g),{},{id:h}),m.map(ef));return T(o.tag,$($($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),{},{fill:`url(#${h})`}),[_].concat(zd(s)))}return T(e.tag,$($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),s)}var rf=!1;try{rf=!0}catch{}function af(){if(!rf&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function of(e){if(e&&Hd(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(kd.icon)return kd.icon(e);if(e===null)return null;if(Hd(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var sf=k({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},canvasSquare:{type:Boolean,default:!1},canvasRoomy:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=f(function(){return of(e.icon)}),i=f(function(){return Wd(`classes`,Gd(e))}),a=f(function(){return Wd(`transform`,typeof e.transform==`string`?kd.transform(e.transform):e.transform)}),o=f(function(){return Wd(`mask`,of(e.mask))}),s=f(function(){var t=$($($($({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,Ad(r.value,t)});ue(s,function(e){if(!e)return af(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0}),e.gradientFill&&e.symbol&&af(`gradientFill is not supported when symbol is true and will be ignored`);var c=f(function(){return s.value?nf(s.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return c.value}}});k({name:`FontAwesomeLayers`,props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=Dd.familyPrefix,i=f(function(){return[`${r}-layers`].concat(zd(e.fixedWidth?[`${r}-fw`]:[]))});return function(){return T(`div`,{class:i.value},n.default?n.default():[])}}}),k({name:`FontAwesomeLayersText`,props:{value:{type:[String,Number],default:``},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return[`bottom-left`,`bottom-right`,`top-left`,`top-right`].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=Dd.familyPrefix,i=f(function(){return Wd(`classes`,[].concat(zd(e.counter?[`${r}-layers-counter`]:[]),zd(e.position?[`${r}-layers-${e.position}`]:[])))}),a=f(function(){return Wd(`transform`,typeof e.transform==`string`?kd.transform(e.transform):e.transform)}),o=f(function(){var t=jd(e.value.toString(),$($({},a.value),i.value)).abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace(`fa-layers-text`,``)),t[0]}),s=f(function(){return nf(o.value,{},n)});return function(){return s.value}}}),Od.add({prefix:`fab`,iconName:`soundcloud`,icon:[640,512,[],`f1be`,`M640.2 298.6c-1.3 23.1-11.5 44.8-28.4 60.5s-39.2 24.4-62.3 24.1l-218 0c-4.8 0-9.4-2-12.8-5.4s-5.3-8-5.3-12.8l0-234.8c-.2-4 .9-8 3.1-11.4s5.3-6.1 9-7.7c0 0 20.1-13.9 62.3-13.9 25.8 0 51.1 6.9 73.3 20.1 17.3 10.2 32.3 23.8 44.1 40.1s20 34.8 24.2 54.4c7.5-2.1 15.3-3.2 23.1-3.2 11.7-.1 23.3 2.2 34.2 6.7s20.5 11.3 28.7 19.7 14.6 18.3 18.9 29.3 6.3 22.6 5.9 34.3zm-354-153.5c.1-1 0-2-.3-2.9s-.8-1.8-1.5-2.6-1.5-1.3-2.4-1.7c-1.8-.8-4-.8-5.8 0-.9 .4-1.7 1-2.4 1.7s-1.2 1.6-1.5 2.6-.4 1.9-.3 2.9c-6 78.9-10.6 152.9 0 231.6 .2 1.7 1 3.3 2.3 4.5 2.6 2.4 6.8 2.4 9.4 0 1.3-1.2 2.1-2.8 2.3-4.5 11.3-79.4 6.6-152 0-231.6l.2 0zm-44 27.3c-.2-1.8-1.1-3.5-2.4-4.7s-3.1-1.9-5-1.9-3.6 .7-5 1.9-2.2 2.9-2.4 4.7c-7.9 67.9-7.9 136.5 0 204.4 .3 1.8 1.2 3.4 2.5 4.5s3.1 1.8 4.8 1.8 3.5-.6 4.8-1.8 2.2-2.8 2.5-4.5c8.8-67.8 8.8-136.5 .1-204.4l.1 0zm-44.3-6.9c-.2-1.8-1-3.4-2.3-4.6s-3-1.8-4.8-1.8-3.5 .7-4.8 1.8-2.1 2.8-2.3 4.6c-6.7 72-10.2 139.3 0 211.1 0 1.9 .7 3.7 2.1 5s3.1 2.1 5 2.1 3.7-.7 5-2.1 2.1-3.1 2.1-5c10.5-72.8 7.3-138.2 .1-211.1l-.1 0zm-44 20.6c0-1.9-.8-3.8-2.1-5.2s-3.2-2.1-5.2-2.1-3.8 .8-5.2 2.1-2.1 3.2-2.1 5.2c-8.1 63.3-8.1 127.5 0 190.8 .2 1.8 1 3.4 2.4 4.6s3.1 1.9 4.8 1.9 3.5-.7 4.8-1.9 2.2-2.8 2.4-4.6c8.8-63.3 8.9-127.5 .3-190.8l-.1 0zm-44.5 47.6c0-1.9-.8-3.8-2.1-5.1s-3.2-2.1-5.1-2.1-3.8 .8-5.1 2.1-2.1 3.2-2.1 5.1c-10.5 49.2-5.5 93.9 .4 143.6 .3 1.6 1.1 3.1 2.3 4.2s2.8 1.7 4.5 1.7 3.2-.6 4.5-1.7 2.1-2.5 2.3-4.2c6.6-50.4 11.6-94.1 .4-143.6zm-44.1-7.5c-.2-1.8-1.1-3.5-2.4-4.8s-3.2-1.9-5-1.9-3.6 .7-5 1.9-2.2 2.9-2.4 4.8c-9.3 50.2-6.2 94.4 .3 144.5 .7 7.6 13.6 7.5 14.4 0 7.2-50.9 10.5-93.8 .3-144.5l-.2 0zM20.7 250.8c-.2-1.8-1.1-3.5-2.4-4.8s-3.2-1.9-5-1.9-3.6 .7-5 1.9-2.3 2.9-2.4 4.8c-8.5 33.7-5.9 61.6 .6 95.4 .2 1.7 1 3.3 2.3 4.4s2.9 1.8 4.7 1.8 3.4-.6 4.7-1.8 2.1-2.7 2.3-4.4c7.5-34.5 11.2-61.8 .4-95.4l-.2 0z`]},{prefix:`fab`,iconName:`linkedin`,icon:[448,512,[],`f08c`,`M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z`]},{prefix:`fab`,iconName:`twitter`,icon:[512,512,[],`f099`,`M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z`]},{prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},{prefix:`fab`,iconName:`imdb`,icon:[448,512,[],`f2d8`,`M89.5 323.6l-35.6 0 0-137.4 35.6 0 0 137.4zm66.6-73.1l9.1-64.3 46.3 0 0 137.4-31 0 0-92.7-13.4 92.7-21.3 0-13-90.7-.1 90.7-31.2 0 0-137.4 46.1 0c.5 8.3 2.8 18.1 4.3 29.4l4.2 34.9zm67.6 73.1l0-137.4 26.6 0c17 0 27 .9 33 2.4 6.1 1.7 10.7 4.2 13.9 7.9 3.1 3.3 5.1 6.6 5.8 12 .9 4.4 1.4 13.1 1.4 26.2l0 48.2c0 12.3-.7 20.5-1.9 24.7-1.1 4.1-3.1 7.4-6 9.7-2.8 2.4-6.4 4.1-10.7 5-4.2 .8-10.6 1.3-19.1 1.3l-43 0zm35.5-113.9l0 89.4c5.1 0 8.3-1 9.4-2.3 1.1-2 1.8-7.6 1.8-16.7l0-53.3c0-6.2-.1-10.2-.7-12-.3-1.8-1.2-3-2.6-4.7-1.4 0-4.1-.4-7.9-.4zm57.3 113.9l0-137.4 34.1 0 0 43.9c2.9-2.4 6.1-4.9 9.5-6.6 3.6-1.5 8.8-2.4 12.8-2.4 4.8 0 8.9 .8 12.3 2.2 3.4 1.5 6 3.5 8 6.2 1.7 2.6 2.7 5.3 3.1 7.8 .4 2.6-.2 8-.2 16.2l0 38.6c0 8.2 .2 14.3-.8 18.4-1.1 4-3.8 7.6-7.8 9.6-4.1 3.9-8.9 5.3-14.6 5.3-4 0-9.2-.9-12.7-2.5-3.5-1.8-6.7-4.5-9.6-8l-2.1 8.7-32 0zm45.1-20.7c.7-1.8 1-6 1-12.5l0-35.4c0-5.6-.3-9.5-1.1-11.2-.7-1.9-3.7-2.7-5.8-2.7-2 0-3.4 .8-4.1 2.3-.6 1.5-1 5.4-1 11.6l0 36.4c0 6.1 .4 10 1.2 11.6 .6 1.7 2.1 2.5 4.1 2.5 2.2 0 4.2-.8 5.7-2.6zM418.4 32c15.7 1.2 28.7 15.2 28.7 31.9l0 384.2c0 16.4-11.9 30.4-28.2 31-.3 0-.5 .9-.8 .9L29.9 480c-.3 0-.6-.9-.8-.1-15.7-1.4-27.9-13.8-29-30.2L0 61.8C1.1 45.9 13.8 33.1 30.3 31.1l387.4 0c.2 0 .5 .9 .7 .9zM30.3 41.3C19 42 10 51 9.3 62.4l0 387.3c.4 5.4 2.7 10.5 6.4 14.3 3.8 3.9 8.8 6.3 14.2 6.7l388.2 0c11.5-1 20.6-11.6 20.6-22.6l0-384.2c0-5.7-2.1-11.3-6-15.5s-9.3-6.8-15-7.2l-387.4 0z`]},{prefix:`fab`,iconName:`playstation`,icon:[576,512,[],`f3df`,`M571 372.3c-11.3 14.2-38.8 24.3-38.8 24.3l-205.1 73.6 0-54.3 150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9l-100.5 35.5 0-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9 .6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zM346.6 279.8l0-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4l0 347.9-93.8-29.8 0-414.7c39.9 7.4 98 24.9 129.2 35.4 79.5 27.3 106.4 61.3 106.4 137.8 0 74.5-46 102.8-104.5 74.6zM43.3 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8 0 54.5-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4s39.1 3.3 56.2-2.9l46.4-16.9 0 48.8c-51.6 9.3-101.4 7.3-153.9-10z`]},{prefix:`fab`,iconName:`steam`,icon:[512,512,[],`f1b6`,`M504 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5l0 1.2-59.2 85.7c-15.5-.9-30.7 3.4-43.5 12.1L8 236.1C18.2 108.4 125.1 8 255.6 8 392.8 8 504 119 504 256zM163.7 384.3l-30.5-12.6c5.6 11.6 15.3 20.8 27.2 25.8 26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3S214 305.6 201 300.2c-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zM337.5 129.8a62.3 62.3 0 1 1 0 124.6 62.3 62.3 0 1 1 0-124.6zm.1 109a46.8 46.8 0 1 0 0-93.6 46.8 46.8 0 1 0 0 93.6z`]},{prefix:`fab`,iconName:`windows`,icon:[448,512,[],`f17a`,`M0 93.7l183.6-25.3 0 177.4-183.6 0 0-152.1zM0 418.3l183.6 25.3 0-175.2-183.6 0 0 149.9zm203.8 28l244.2 33.7 0-211.6-244.2 0 0 177.9zm0-380.6l0 180.1 244.2 0 0-213.8-244.2 33.7z`]},{prefix:`fab`,iconName:`xbox`,icon:[512,512,[],`f412`,`M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39-27.9-18.2-34.2-25.7-34.2-40.6 0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5c-16.9-80-67.5-130.3-74.6-130.3-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8 42.4 53.3 102.2 139.4 122.9 202.3 6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43c47.7-2.5 109.7 34.5 114.3 35.4 .7 .1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z`]},{prefix:`fab`,iconName:`youtube`,icon:[576,512,[61802],`f167`,`M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z`]},{prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},{prefix:`fas`,iconName:`bars`,icon:[448,512,[`navicon`],`f0c9`,`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`]},{prefix:`fas`,iconName:`chevron-down`,icon:[448,512,[],`f078`,`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`]},{prefix:`fas`,iconName:`chevron-left`,icon:[320,512,[9001],`f053`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`]},{prefix:`fas`,iconName:`chevron-right`,icon:[320,512,[9002],`f054`,`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`]},{prefix:`fas`,iconName:`play`,icon:[448,512,[9654],`f04b`,`M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z`]},{prefix:`fas`,iconName:`pause`,icon:[384,512,[9208],`f04c`,`M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z`]},{prefix:`fas`,iconName:`backward`,icon:[576,512,[9194],`f04a`,`M204.3 43.1C215.9 32 233 28.9 247.7 35.2S272 56 272 72l0 136.3 172.3-165.1C455.9 32 473 28.9 487.7 35.2S512 56 512 72l0 368c0 16-9.6 30.5-24.3 36.8s-31.8 3.2-43.4-7.9L272 303.7 272 440c0 16-9.6 30.5-24.3 36.8s-31.8 3.2-43.4-7.9l-192-184C4.5 277.3 0 266.9 0 256s4.5-21.3 12.3-28.9l192-184z`]},{prefix:`fas`,iconName:`table-cells`,icon:[448,512,[`th`],`f00a`,`M384 96l0 64-64 0 0-64 64 0zm0 128l0 64-64 0 0-64 64 0zm0 128l0 64-64 0 0-64 64 0zM256 288l-64 0 0-64 64 0 0 64zm-64 64l64 0 0 64-64 0 0-64zm-64-64l-64 0 0-64 64 0 0 64zM64 352l64 0 0 64-64 0 0-64zm0-192l0-64 64 0 0 64-64 0zm128 0l0-64 64 0 0 64-64 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z`]}),Dd.autoAddCss=!1;var cf=O(e=>{e.vueApp.component(`FontAwesomeIcon`,sf)}),lf=`GTM-TS9GHDL`;function uf(...e){window.dataLayer?.push(arguments)}var df=O(()=>{window.dataLayer=window.dataLayer||[];let e=localStorage.getItem(`cookie-consent`);uf(`consent`,`default`,{analytics_storage:e??`denied`,ad_storage:e??`denied`,functionality_storage:e??`denied`,personalization_storage:e??`denied`,security_storage:`granted`,...!e&&{wait_for_update:500}}),window.dataLayer.push({"gtm.start":Date.now(),event:`gtm.js`});let t=document.createElement(`script`);t.id=`gtm-script`,t.async=!0,t.defer=!0,t.src=`https://www.googletagmanager.com/gtm.js?id=${lf}`,t.crossOrigin=`anonymous`,document.head.appendChild(t);let n=document.createElement(`noscript`);n.id=`gtm-noscript`;let r=document.createElement(`iframe`);r.src=`https://www.googletagmanager.com/ns.html?id=${lf}`,r.height=`0`,r.width=`0`,r.style.display=`none`,r.style.visibility=`hidden`,n.appendChild(r),document.body.prepend(n),F().afterEach(e=>{window.dataLayer?.push({event:`nuxtRoute`,pageType:`PageView`,pageUrl:e.fullPath,routeName:e.name})})}),ff=`standalone`,pf=`true`,mf=`false`,hf=pf===`true`,gf=mf===`true`;function _f(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,hf||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await br(async()=>{let{Workbox:e}=await import(`./Bd17z0YL.js`);return{Workbox:e}},[],import.meta.url).then(({Workbox:e})=>new e(`/sw.js`,{scope:`/`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!gf){if(hf)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`/sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}function vf(e={}){let{immediate:t=!0,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c=w(!1),l=w(!1);return{updateServiceWorker:_f({immediate:t,onNeedReload:n,onNeedRefresh(){c.value=!0,r?.()},onOfflineReady(){l.value=!0,i?.()},onRegistered:a,onRegisteredSW:o,onRegisterError:s}),offlineReady:l,needRefresh:c}}var yf=[xi,Fa,qa,oo,so,co,lo,uo,fo,po,mo,go,_o,cf,df,O({name:`vite-pwa:nuxt:client:plugin`,enforce:`post`,parallel:!0,setup(e){let t=w(!1),n=w(!1),r=w(!1),i=w(!0),a=navigator.userAgent,o=a.match(/iPhone|iPad|iPod/),s=`${ff}`,c=window.matchMedia(`(display-mode: ${s})`).matches,l=w(!!(c||o&&!a.match(/Safari/))),u=w(l.value);window.matchMedia(`(display-mode: ${s})`).addEventListener(`change`,e=>{!u.value&&e.matches&&(u.value=!0)});let d,f=()=>d,{offlineReady:p,needRefresh:m,updateServiceWorker:h}=vf({immediate:!0,onRegisterError(n){e.hooks.callHook(`service-worker:registration-failed`,{error:n}),t.value=!0},onRegisteredSW(t,r){d=r,e.hooks.callHook(`service-worker:registered`,{url:t,registration:r}),r?.active?.state===`activated`?(n.value=!0,e.hooks.callHook(`service-worker:activated`,{url:t,registration:r})):r?.installing&&r.installing.addEventListener(`statechange`,i=>{let a=i.target;n.value=a.state===`activated`,n.value&&e.hooks.callHook(`service-worker:activated`,{url:t,registration:r})})}}),g=async()=>{p.value=!1,m.value=!1},_=()=>Promise.resolve(void 0),v=()=>{};if(!i.value){let e,t=t=>{t.preventDefault(),e=t,r.value=!0};window.addEventListener(`beforeinstallprompt`,t),window.addEventListener(`appinstalled`,()=>{e=void 0,r.value=!1}),v=()=>{e=void 0,r.value=!1,window.removeEventListener(`beforeinstallprompt`,t),i.value=!0,localStorage.setItem(void 0,`true`)},_=async()=>{if(!r.value||!e)r.value=!1;else return r.value=!1,await we(),e.prompt(),await e.userChoice}}return{provide:{pwa:De({isInstalled:l,isPWAInstalled:u,showInstallPrompt:r,cancelInstall:v,install:_,swActivated:n,registrationError:t,offlineReady:p,needRefresh:m,updateServiceWorker:h,cancelPrompt:g,getSWRegistration:f})}}}})],bf=(e=`RouteProvider`)=>k({name:e,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean,routeRecord:Object},setup(e){let t=e.renderKey,n=e.route,r={};for(let i in e.route)Object.defineProperty(r,i,{get:()=>t===e.renderKey?e.route[i]:n[i],enumerable:!0});return D(Zt,c(r)),()=>e.vnode?T(e.vnode,{ref:e.vnodeRef}):e.vnode}}),xf=bf(),Sf=new WeakMap,Cf=k({name:`NuxtPage`,inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t,slots:n,expose:r}){let i=j(),a=w(),o=v(Zt,null),s=new Set,c;r({pageRef:a});let l=v(It,null),u,d=i.deferHydration(),f=!1,p=!1,m,h=0;if(i.isHydrating){let e=i.hooks.hookOnce(`app:error`,d),t=F().beforeEach(()=>{e(),t()})}e.pageKey&&ue(()=>e.pageKey,(e,t)=>{e!==t&&i.callHook(`page:loading:start`)});let _=!1;{let e=F().beforeResolve(()=>{_=!1});xe(()=>{e(),d()})}return()=>T(oa,{name:e.name,route:e.route,...t},{default:Ef(t=>{let r=wf(o,t.route,t.Component),v=o&&o.matched.length===t.route.matched.length;if(!t.Component)return u&&!v&&!Of(u)?u:(d(),e.transition??t.route.meta.pageTransition??!1?jt(zt([e.transition,t.route.meta.pageTransition,!1]),null).default():void 0);if(u&&l&&!Of(u)&&!l.isCurrent(t.route))return u;if(r&&o&&(!l||l?.isCurrent(o)))return(v||u)&&!Of(u)?u:null;let y=Qa(t,e.pageKey),b=Tf(o,t.route,t.Component);!i.isHydrating&&c===y&&!b&&we(()=>{_||(_=!0,i.callHook(`page:loading:end`))}),f&&c!==y&&p&&h++,c=y;let x=!!(e.transition??t.route.meta.pageTransition??!1),S=x&&zt([e.transition,t.route.meta.pageTransition,!1,{onAfterLeave(){Jt(i),i.callHook(`page:transition:finish`,t.Component)}}]),C=e.keepalive??t.route.meta.keepalive??!1,w=t.Component.type,ee=w.name||w.__name;t.route.meta.keepalive&&ee&&s.add(ee);let te;if(s.size>0&&e.keepalive==null&&(!C||typeof C==`object`&&C&&C.include)){let e=typeof C==`object`&&C?{...C}:{},t=e.include?Array.isArray(e.include)?e.include:[e.include]:[];te={...e,include:Array.from(new Set([...t,...s]))}}else te=C;return u=jt(x&&S,$a(te,T(g,{key:h,suspensible:!0,onPending:()=>{f=!0,x&&p&&Kt(i),m=i.callHook(`page:start`,t.Component)},onResolve:async()=>{f=!1,p=!0,i.isHydrating&&i[`~restoreDeferredRoute`]?.();try{await we(),i._route.sync?.(),await m,await i.callHook(`page:finish`,t.Component),!_&&!b&&(_=!0,await i.callHook(`page:loading:end`))}finally{d()}}},{default:()=>{let e={key:y||void 0,vnode:n.default?Df(n.default,t):t.Component,route:t.route,renderKey:y||void 0,trackRootNodes:x,vnodeRef:a,routeRecord:void 0};if(!te)return T(xf,e);let r=w,i=Sf.get(r);return i||(i=bf(ee),Sf.set(r,i)),T(i,e)}}))).default(),u})})}});function wf(e,t,n){if(!e)return!1;let r=t.matched.findIndex(e=>e.components?.default===n?.type);if(r===-1)return!1;let i=t.matched.slice(0,r).filter(e=>e.components?.default);if(!i.length)return!1;let a=e.matched.filter(e=>e.components?.default);return i.some((e,t)=>e.components?.default!==a[t]?.components?.default)||n&&Qa({route:t,Component:n})!==Qa({route:e,Component:n})}function Tf(e,t,n){return e?t.matched.findIndex(e=>e.components?.default===n?.type)<t.matched.length-1:!1}function Ef(t){let n=(n=>{let r=t(n);return Array.isArray(r)?r:r==null||!e(r)?[Ae()]:[r]});return n._n=!0,n}function Df(e,t){let r=e(t);return r.length===1?T(r[0]):T(n,void 0,r)}function Of(e){return!!e&&(!!e.suspense?.isUnmounted||!!e.component?.isUnmounted)}var kf=`cookie-consent`,Af=w(null);function jf(...e){window.dataLayer?.push(arguments)}function Mf(e){window.dataLayer?.push({event:`consent_update`}),jf(`consent`,`update`,{analytics_storage:e,ad_storage:e,functionality_storage:e,personalization_storage:e,security_storage:`granted`})}function Nf(){E(()=>{Af.value=localStorage.getItem(kf)});function e(){Af.value=`granted`,localStorage.setItem(kf,`granted`),Mf(`granted`)}function t(){Af.value=`denied`,localStorage.setItem(kf,`denied`),Mf(`denied`)}return{consentStatus:Af,accept:e,decline:t}}var Pf={key:0,class:`cookie-banner`,role:`dialog`,"aria-label":`Cookie consent`,"aria-live":`polite`},Ff={class:`cookie-banner__inner`},If={class:`cookie-banner__actions`},Lf=Object.assign(Ce(k({__name:`CookieBanner`,setup(e){let{consentStatus:t,accept:n,decline:a}=Nf();return(e,o)=>(A(),b(Ve,{name:`banner`},{default:Ee(()=>[r(t)===null?(A(),i(`div`,Pf,[h(`div`,Ff,[o[2]||=h(`p`,{class:`cookie-banner__text`},` This site uses analytics cookies to understand how visitors use the site. `,-1),h(`div`,If,[h(`button`,{type:`button`,class:`cookie-banner__btn cookie-banner__btn--decline`,onClick:o[0]||=(...e)=>r(a)&&r(a)(...e)},` Decline `),h(`button`,{type:`button`,class:`cookie-banner__btn cookie-banner__btn--accept`,onClick:o[1]||=(...e)=>r(n)&&r(n)(...e)},` Accept `)])])])):Ae(``,!0)]),_:1}))}}),[[`__scopeId`,`data-v-0b8fd63b`]]),{__name:`CookieBanner`}),Rf={};function zf(e,t){let r=Cf,a=Lf,o=fa;return A(),i(n,null,[u(r),u(o,null,{default:Ee(()=>[u(a)]),_:1})],64)}var Bf=Ce(Rf,[[`render`,zf]]),Vf={__name:`nuxt-error-page`,props:{error:Object},setup(e){let t=e.error,n=Number(t.statusCode||500),i=n===404,a=t.statusMessage??(i?`Page Not Found`:`Internal Server Error`),o=t.message||t.toString(),s=m(()=>br(()=>import(`./60MFaP1l.js`),__vite__mapDeps([4,1,5]),import.meta.url)),c=m(()=>br(()=>import(`./GdDYzGZg.js`),__vite__mapDeps([6,1,7]),import.meta.url)),l=i?s:c;return(e,t)=>(A(),b(r(l),be(ee({status:r(n),statusText:r(a),statusCode:r(n),statusMessage:r(a),description:r(o),stack:r(void 0)})),null,16))}},Hf=()=>null,Uf={key:0},Wf={__name:`nuxt-root`,setup(e){let t=j(),n=t.deferHydration();if(t.isHydrating){let e=t.hooks.hookOnce(`app:error`,n),r=F().beforeEach(()=>{e(),r()})}window.location.pathname,D(Zt,Ht()),t.hooks.callHookWith(e=>e.map(e=>e()),`vue:setup`,[]);let a=Yt();function o(e,n,r){let i=t.vueApp.config.errorHandler;if(i&&!i.__nuxt_default)try{i(e,n,r)}catch(e){console.error("[nuxt] Error in `app.config.errorHandler`",e)}}return pe((e,n,r)=>{if(t.hooks.callHook(`vue:error`,e,n,r)?.catch(e=>console.error("[nuxt] Error in `vue:error` hook",e)),Et(navigator.userAgent))return pt(t,e),!1;if(Ot(e)&&(e.fatal||e.unhandled))return t.runWithContext(()=>wt(e)),Rn(),o(e,n,r),!1}),(e,t)=>(A(),b(g,{onResolve:r(n)},{default:Ee(()=>[r(!1)?(A(),i(`div`,Uf)):r(a)?(A(),b(r(Vf),{key:1,error:r(a)},null,8,[`error`])):r(!1)?(A(),b(r(Hf),{key:2,context:r(!1)},null,8,[`context`])):r(!1)?(A(),b(ye(r(!1)),{key:3})):(A(),b(r(Bf),{key:4}))]),_:1},8,[`onResolve`]))}},Gf;{let e;Gf=async function(){if(e)return e;let t=!!(window.__NUXT__?.serverRendered??document.getElementById(`__NUXT_DATA__`)?.dataset.ssr===`true`),n=t?Je(Wf):We(Wf),r=de({vueApp:n});async function i(e){await r.callHook(`app:error`,e),r.payload.error||=At(e)}i.__nuxt_default=!0,n.config.errorHandler=i,r.hook(`app:suspense:resolve`,()=>{n.config.errorHandler===i&&(n.config.errorHandler=void 0)}),!t&&x.id&&r.hook(`app:suspense:resolve`,()=>{document.getElementById(x.id)?.remove()});try{await ge(r,yf)}catch(e){i(e)}try{await r.hooks.callHook(`app:created`,n),await r.hooks.callHook(`app:beforeMount`,n),n.mount(a),await r.hooks.callHook(`app:mounted`,n),await we()}catch(e){i(e)}return n},e=Gf().catch(e=>{throw te.NUXT_E1009({cause:e}),e})}export{ma as n,Ln as r,Oa as t};