/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function factory(e,n,r,t){function o(e){return new Promise(n=>r.exists(e,n))}function i(e){return new Promise((n,t)=>r.mkdir(e,r=>r&&"EEXIST"!==r.code?t(r):n(e)))}function s(e){return function(e){return new Promise((n,t)=>r.lstat(e,(e,r)=>e?t(e):n(r)))}(e).then(t=>t.isDirectory()&&!t.isSymbolicLink()?function(e){return new Promise((n,t)=>r.readdir(e,(e,r)=>e?t(e):n(r)))}(e).then(r=>Promise.all(r.map(r=>s(n.join(e,r))))).then(()=>(function(e){return new Promise((n,t)=>r.rmdir(e,e=>e?t(e):n(void 0)))})(e)):function(e){return new Promise((n,t)=>r.unlink(e,e=>e?t(e):n(void 0)))}(e),e=>{if("ENOENT"!==e.code)throw e})}function a(e){return i(e).then(null,r=>{if(r&&"ENOENT"===r.code){const r=n.dirname(e);if(r!==e)return a(r).then(()=>i(e))}throw r})}function u(e){return new Promise(function(n,t){r.readFile(e,"utf8",function(e,r){e?t(e):n(r)})})}function c(e,n){return new Promise(function(t,o){r.writeFile(e,n,"utf8",function(e){e?o(e):t()})})}function l(i,l,f,m){if("pseudo"===m)return Promise.resolve({
locale:m,availableLanguages:{},pseudo:!0});if(process.env.VSCODE_DEV)return Promise.resolve({locale:m,availableLanguages:{}});if(m&&("en"===m||"en-us"===m))return Promise.resolve({locale:m,availableLanguages:{}});const d=m;t.mark("nlsGeneration:start");const g=function(e){return t.mark("nlsGeneration:end"),Promise.resolve({locale:e,availableLanguages:{}})};try{if(!i)return g(d);const h=function(r){const t=n.join(r,"languagepacks.json");try{return e(t)}catch(e){}}(l);if(!h)return g(d);if(!(m=function(e,n){try{for(;n;){if(e[n])return n;{const e=n.lastIndexOf("-");if(!(e>0))return;n=n.substring(0,e)}}}catch(e){console.error("Resolving language pack configuration failed.",e)}}(h,m)))return g(d);const p=h[m];let v;return p&&"string"==typeof p.hash&&p.translations&&"string"==typeof(v=p.translations.vscode)?o(v).then(e=>{if(!e)return g(d);const h=p.hash+"."+m,y=n.join(l,"clp",h),P=n.join(y,i),w=n.join(y,"tcf.json"),k=n.join(y,"corrupted.info"),b={locale:d,availableLanguages:{"*":m},_languagePackId:h,
_translationsConfigFile:w,_cacheRoot:y,_resolvedLanguagePackCoreLocation:P,_corruptedFile:k};return o(k).then(e=>{let i;return(i=e?s(y):Promise.resolve(void 0)).then(()=>o(P).then(e=>e?(function(e){return new Promise((n,t)=>{const o=new Date;r.utimes(e,o,o,e=>e?t(e):n())})}(P).catch(()=>{}),t.mark("nlsGeneration:end"),b):a(P).then(()=>Promise.all([u(f),u(v)])).then(e=>{const r=JSON.parse(e[0]),t=JSON.parse(e[1]).contents,o=Object.keys(r.bundles),i=[];for(let e of o){const o=r.bundles[e],s=Object.create(null);for(let e of o){const n=r.keys[e],o=r.messages[e],i=t[e];let a;if(i){a=[];for(let e=0;e<n.length;e++){const r=n[e];let t=i["string"==typeof r?r:r.key];void 0===t&&(t=o[e]),a.push(t)}}else a=o;s[e]=a}i.push(c(n.join(P,e.replace(/\//g,"!")+".nls.json"),JSON.stringify(s)))}return i.push(c(w,JSON.stringify(p.translations))),Promise.all(i)}).then(()=>(t.mark("nlsGeneration:end"),b)).catch(e=>(console.error("Generating translation files failed.",e),g(m)))))})}):g(d)}catch(e){
return console.error("Generating translation files failed.",e),g(m)}}return{getNLSConfiguration:l}}if("function"==typeof define)define(["path","fs","vs/base/common/performance"],function(e,n,r){return factory(require.__$__nodeRequire,e,n,r)});else{if("object"!=typeof module||"object"!=typeof module.exports)throw new Error("Unknown context");{const e=require("path"),n=require("fs"),r=require("../common/performance");module.exports=factory(require,e,n,r)}}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/a622c65b2c713c890fcf4fbf07cf34049d5fe758/core/vs\base\node\languagePacks.js.map
