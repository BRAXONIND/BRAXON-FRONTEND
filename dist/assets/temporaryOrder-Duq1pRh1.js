import{c as a}from"./index-q7rqHXnA.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],c=a("credit-card",n),r="braxon-temporary-order";function i(){const t=new Date().toISOString().slice(2,10).replace(/-/g,""),o=Math.random().toString(36).slice(2,8).toUpperCase();return`BRX-${t}-${o}`}function d(e){sessionStorage.setItem(r,JSON.stringify(e))}function m(){const e=sessionStorage.getItem(r);if(!e)return null;try{return JSON.parse(e)}catch{return sessionStorage.removeItem(r),null}}function y(){sessionStorage.removeItem(r)}export{c as C,y as a,i as c,m as g,d as s};
