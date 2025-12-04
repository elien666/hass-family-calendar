import{d as R,R as A,j as t,I as B,l as Qe,r as L,P as ht,W as pt,b as mt,e as gt,f as xt,h as wt,i as yt,k as bt,m as Et,n as jt,o as St,T as At,p as Tt,s as kt,y as vt,q as Ct,t as Lt,u as je,L as Ot,v as Rt,B as Nt}from"./react-vendor-SoRfWBCf.js";import{D as F}from"./date-vendor-BDx6lZXm.js";import{n as V}from"./vendor-DXU8y-C2.js";import{m as Dt,a as _t,b as Mt,c as $t,d as Pt,e as Wt,f as Re,g as It,h as Ft,i as Vt,j as zt,k as Bt,l as Gt,n as Ht,o as Ut,p as Yt,q as Kt,r as Xt,s as qt,t as _e,u as Jt,v as Qt}from"./ui-vendor-C7t39j5V.js";import{a as M,q as Zt,B as en,h as tn}from"./utils-vendor-Cy1MG2Zy.js";import{c as le,a as de}from"./ha-vendor-CoU0AojH.js";import{t as nn}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const a of d)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function o(d){const a={};return d.integrity&&(a.integrity=d.integrity),d.referrerPolicy&&(a.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?a.credentials="include":d.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(d){if(d.ep)return;d.ep=!0;const a=o(d);fetch(d.href,a)}})();const on=R.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  
  .content {
    background-color: #1c1c1c;
    border-radius: 24px;
    width: 80vw;
    padding: 12px 24px;
    border: solid 12px rgba(255,255,255,.1);
    max-height: calc(90vh - 6rem);
    overflow-y: scroll;

    &.fullsize {
      width: 100vw;
      height: 100vh;
      max-height: 100vh;
      border-width: 2px;
      padding: 4px 6px;
    }
    
    h2 {
      margin: 0;
      padding: 0;
    }
  }
  .close {
    position: absolute;
    right: 2rem;
    top: 1rem;
    text-align: right;
    cursor: pointer;
    margin: 0 0 2rem 0;
    border-radius: 31px;
    width: 62px;
    height: 62px;
    display: grid;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: rgba(0,0,0,.6);
    
    svg {
      color: white;
    }
  }
`,fe=({visible:e,children:n,onClick:o,onClose:i,fullsize:d=!1})=>{const a=i||o,f=r=>{r.stopPropagation(),r.preventDefault(),a()};return A.useEffect(()=>{if(e){const r=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${r}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,r)}}},[e]),e?t.jsxs(on,{onClick:o,children:[t.jsx("div",{className:"close",onClick:f,children:t.jsx(B,{path:Dt,size:2})}),t.jsx("div",{className:V("content",{fullsize:d}),onClick:r=>r.stopPropagation(),children:n})]}):null},O={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},Ze=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server"):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),n},rn=(e,n="")=>{const o=Ze(e),i=[];return n&&i.push(`[${n}]`),i.push("Axios API Error:"),i.push(o.message),o.url&&i.push(`URL: ${o.url}`),o.status&&i.push(`Status: ${o.status}`),o.responseData&&i.push("Response:",o.responseData),O.error(...i),o},G=e=>{const n=Ze(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"},sn={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},$=(e,n=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[e]!==void 0){const i=window.APP_CONFIG[e];return i==="undefined"||i==="null"?n:i??n}return n}const o=sn[`VITE_${e}`];return e==="HASS_ACCESS_TOKEN"&&o!==void 0?n:o!==void 0?o:n},an=(e,n=!1)=>{const o=$(e,n);return typeof o=="boolean"?o:typeof o=="string"?o==="true"||o==="1"||o==="yes":!!o};$("HASS_HOST","");const K=$("HASS_ACCESS_TOKEN",""),cn=K&&typeof K=="string"&&K.trim()!==""&&K!=="undefined"&&K!=="null";cn?M.defaults.headers.common.Authorization=`Bearer ${K}`:delete M.defaults.headers.common.Authorization;M.interceptors.response.use(e=>e,e=>{const n=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";return rn(e,n),Promise.reject(e)});const et=$("WEATHER_API_KEY"),tt=$("WEATHER_LATITUDE"),nt=$("WEATHER_LONGITUDE"),ve=$("GEOFOX_SECRET"),ot=$("GEOFOX_USER"),X=$("ENTITY_GARAGE_DOOR"),se=$("ENTITY_DOORBELL"),Me=$("ENTITY_DOORBELL_BUTTON"),Ce=$("ENTITY_EVERYDAY_CALENDAR"),te=$("ENTITY_PRECLIMATE_STATUS"),$e=$("ENTITY_PRECLIMATE_START"),Pe=$("ENTITY_PRECLIMATE_STOP"),ne=$("ENTITY_CHARGING_STATE"),oe=$("ENTITY_STATE_OF_CHARGE"),ue=$("SUPERVISOR_TOKEN"),ln=(()=>{const e=$("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),we=(()=>{const e=$("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),Z=(()=>{const e=$("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),ee=(e,n)=>$(e,void 0)!==void 0?an(e,!1):!1,it=ee("ENABLE_WEATHER"),rt=ee("ENABLE_HVV"),st=ee("ENABLE_GARAGE"),at=ee("ENABLE_LAUNDRY",Array.isArray(we)&&we.length>0),ct=ee("ENABLE_DOORBELL"),lt=ee("ENABLE_EVERYDAY_CALENDAR"),dt=ee("ENABLE_EV"),I=e=>{const n=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const o=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${o}${n}`}return n}},ae=Ce?I(`/api/states/${Ce}`):null,dn=()=>{const[e,n]=A.useState(null),[o,i]=A.useState(!1),d=lt&&Ce;return A.useEffect(()=>{!d||!ae||M(ae).then(a=>{a.data.attributes.store!==void 0?n(a.data.attributes.store):n([]),i(!1)}).catch(a=>{i(G(a)),n([])})},[d,ae]),[e,o]},fn=e=>{ae&&M.post(ae,{state:new Date,attributes:{store:e}}).catch(n=>{O.error("Failed to store everyday calendar data:",n)})},We=R.div` 

    h2 {
        text-align: center;
        margin-bottom: 12px !important;
    }

    .calendar {
        display: grid;
        grid-template-columns: repeat(13, 1fr);
        grid-template-rows: repeat(32 1fr);
        column-gap: 0;
        row-gap: 0;

        &.loading {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }

        > * {
            place-self: center;
            //height: 35px;
        }

        .dot {
            height: 18px;
            width: 18px;
            border-radius: 12px;
            background-color: #8e8c8c;
            margin: 5px 0;

            &.on {
                background-color: #00ff00;
            }
        }           
    }
`,un=({on:e,month:n,day:o})=>{const[i,d]=e,a=i.indexOf(`${n}-${o}`),f=a>-1,r=()=>{d(f?i.toSpliced(a,1):[...i,`${n}-${o}`])};return t.jsx("div",{className:V("dot",{on:f}),onClick:()=>r()})},hn=()=>{if(!lt)return null;const e=new Date().getFullYear(),n=[];for(let r=1;r<13;r++){const m=new Date(e,r,0).getDate();for(let l=1;l<=m;l++)n.push({month:r,day:l})}const o=Array.from({length:31},(r,m)=>m+1),i=Array.from({length:12},(r,m)=>m+1),d=A.useState(void 0),[a,f]=dn();return A.useEffect(()=>{a!==null&&d[1](a)},[a]),A.useEffect(()=>{d[0]!==void 0&&fn(d[0])},[d[0]]),d[0]!==void 0?t.jsxs(We,{children:[t.jsx("h2",{children:"Jeden Tag ein bißchen"}),f!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:f instanceof Error?f.message:String(f)})]}),t.jsxs("div",{className:"calendar",children:[o.map((r,m)=>t.jsx("div",{style:{gridArea:`${r+1} / 1 / ${r+1} / 1`},children:r},m)),i.map((r,m)=>t.jsx("div",{style:{gridArea:`1 / ${r+1} / 1 / ${r+1}`},children:r},m)),n.map((r,m)=>t.jsx("div",{style:{gridArea:`${r.day+1} / ${r.month+1} / ${r.day+1} / ${r.month+1}`},children:t.jsx(un,{on:d,month:r.month,day:r.day})},m))]})]}):t.jsx(We,{className:"loading",children:f!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:f instanceof Error?f.message:String(f)})]}):t.jsx(Qe,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},pn=R.div`
  font-family: "Digital Dismay";
  font-size: 76px;
  margin: 30px 0 10px 0;
  color: #fff;
  cursor: pointer;
  user-select: none;

  @media only screen and (max-width: 1200px) {
    font-size: 42px;
    margin: 0;
  }

  span {
    animation: blinking 2s steps(2, start) infinite;
  }

  @keyframes blinking {
    to {
      visibility: hidden;
    }
  }`,mn=()=>{const[e,n]=A.useState(F.now()),[o,i]=A.useState(!1),d=L.useCallback(()=>i(!0),[]),a=L.useCallback(()=>i(!1),[]);return A.useEffect(()=>{const f=setInterval(()=>n(F.now()),1e3);return()=>clearInterval(f)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(pn,{onClick:d,children:[e.toFormat("HH"),t.jsx("span",{children:":"}),e.toFormat("mm")]}),t.jsx(fe,{visible:o,onClick:a,fullsize:!0,children:t.jsx(hn,{})})]})},gn=L.memo(mn),Se=se?I(`/api/states/${se}`):null,xn=()=>{const[e,n]=A.useState("off"),[o,i]=A.useState(!1),d=ct&&se;return A.useEffect(()=>{!d||!Se||M(Se).then(a=>{n(a.data.state),i(!1)}).catch(a=>{i(G(a))})},[d,Se]),A.useEffect(()=>{let a=null,f=null,r=!0,m=null,l=0,h=!1;async function y(){if(!d||!se||h)return;if(a){try{f&&(f(),f=null),a.close()}catch{}a=null}h=!0;let j;if(typeof window<"u"&&window.location){const g=window.location.pathname.replace(/\/$/,"");j=`${window.location.origin}${g}`}else j="";const S=ue||K||"";if(!S){h=!1;return}let w;try{w=le(j,S),r&&i(!1)}catch(g){r&&(O.error("Failed to create WebSocket auth:",g),i(g instanceof Error?g.message:String(g))),h=!1;return}try{a=await de({auth:w}),a.addEventListener("ready",()=>{r&&(O.debug("WebSocket connection ready for doorbell"),l=0,i(!1))}),a.addEventListener("disconnected",()=>{if(r&&!h){O.debug("WebSocket disconnected for doorbell, will attempt to reconnect"),m&&clearTimeout(m),a=null,f=null;const c=Math.min(1e3*Math.pow(2,l),3e4);l++,m=setTimeout(()=>{r&&!h&&(O.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${l})`),y())},c)}});const g=c=>{if(r){const u=c.variables.trigger.to_state.state;n(u)}};f=await a.subscribeMessage(g,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:se}}),h=!1}catch(g){if(h=!1,r){O.error("Failed to setup WebSocket connection:",g),O.error("WebSocket error details:",{message:g instanceof Error?g.message:String(g),code:g.code,name:g.name,wsUrl:w?.wsUrl,host:j,tokenLength:S?S.length:0}),g.code===2&&O.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),i(g instanceof Error?g.message:String(g));const c=Math.min(1e3*Math.pow(2,l),3e4);l++,m=setTimeout(()=>{r&&y()},c)}}}return y(),()=>{r=!1,m&&clearTimeout(m),f&&f(),a&&a.close()}},[d]),[e,o]},wn=()=>{Me&&M.post(I("/api/services/button/press"),{entity_id:Me}).catch(e=>{O.error("Failed to unlatch front door:",e)})},D={portrait:360/480,landscape:1920/1072,wide:770/216};function yn(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(o=>{o.orientation&&n.hasOwnProperty(o.orientation)&&n[o.orientation]++}),n}function ft(e,n,o){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const i=e.length,d=yn(e);return i===1?bn(e[0],n,o):i===2?En(d,e,n,o):i===3?jn(d,e,n,o):i===4?Sn(d,e,n,o):{videos:[],totalArea:0,efficiency:0}}function bn(e,n,o){const i=D[e.orientation];let d,a;const f=n/o;return i>f?(d=n,a=n/i):(a=o,d=o*i),{videos:[{x:(n-d)/2,y:(o-a)/2,width:d,height:a,orientation:e.orientation}],totalArea:d*a,efficiency:d*a/(n*o)*100}}function En(e,n,o,i){if(e.portrait>0)return Ne(e,n,o,i);const d=[];e.landscape>0&&d.push("landscape"),e.wide>0&&d.push("wide");const a=d[0]||n[0].orientation,f=d[1]||n[1].orientation,r=D[a],m=D[f];if(e.landscape===1&&e.wide===1){const w=D.landscape,g=D.wide,c=o,u=c/w,s=c/g,x=u+s;let b,p,E;if(x<=i)b=u,p=s,E=c;else{const W=i/x;b=u*W,p=s*W,E=p*g}const T=(o-E)/2,v=q(n,[{x:T,y:0,width:E,height:p,orientation:"wide"},{x:T,y:p,width:E,height:b,orientation:"landscape"}]),C=E*b+E*p,N=C/(o*i)*100;return{videos:v,totalArea:C,efficiency:N}}if(e.wide===2){const w=D.wide,g=o,c=g/w,u=c*2;let s;u<=i?s=c:s=i/2;const b=q(n,[{x:0,y:0,width:g,height:s,orientation:"wide"},{x:0,y:s,width:g,height:s,orientation:"wide"}]),p=g*s*2,E=p/(o*i)*100;return{videos:b,totalArea:p,efficiency:E}}const l=[()=>{const w=o,g=w/2,c=w/2,u=g/r,s=c/m;return Math.max(u,s)<=i?{positions:[{x:0,y:(i-u)/2,width:g,height:u,orientation:a},{x:g,y:(i-s)/2,width:c,height:s,orientation:f}],totalArea:g*u+c*s}:null},()=>{const w=i,g=w/2,c=w/2,u=g*r,s=c*m;return Math.max(u,s)<=o?{positions:[{x:(o-u)/2,y:0,width:u,height:g,orientation:a},{x:(o-s)/2,y:g,width:s,height:c,orientation:f}],totalArea:u*g+s*c}:null}];let h=null,y=0;for(const w of l){const g=w();g&&g.totalArea>y&&(y=g.totalArea,h=g)}if(!h){const w=o/2,g=o/2,c=Math.min(w/r,i),u=Math.min(g/m,i);h={positions:[{x:0,y:(i-c)/2,width:w,height:c,orientation:a},{x:w,y:(i-u)/2,width:g,height:u,orientation:f}],totalArea:w*c+g*u}}const j=q(n,h.positions),S=h.totalArea/(o*i)*100;return{videos:j,totalArea:h.totalArea,efficiency:S}}function Ne(e,n,o,i){const d=e.portrait,a=n.length-d;if((d===3||d===4)&&a===0){const S=D.portrait,w=o/d,g=w/S,c=g<i?(i-g)/2:0,u=Math.min(g,i),s=[];let x=0;for(let E=0;E<d;E++){const T=Math.min(w,u*S);s.push({x:E*w+(w-T)/2,y:c,width:T,height:u,orientation:"portrait"}),x+=T*u}const b=q(n,s),p=x/(o*i)*100;return{videos:b,totalArea:x,efficiency:p}}n.filter(S=>S.orientation==="portrait");const f=n.filter(S=>S.orientation!=="portrait"),r=d>0?Math.min(o*.4,o*.5):0,m=o-r,l=[];let h=0;if(d===2&&a===0){const S=D.portrait,w=o/2,g=w/S,c=i;let u,s;g<=c?(s=g,u=w):(s=c,u=c*S);const x=(i-s)/2;l.push({x:(w-u)/2,y:x,width:u,height:s,orientation:"portrait"}),l.push({x:w+(w-u)/2,y:x,width:u,height:s,orientation:"portrait"}),h=u*s*2}else if(d===1&&a===1){const S=D.portrait,w=f[0],g=D[w.orientation],c=S+g,u=o*(S/c),s=o*(g/c),x=u/S,b=s/g,p=Math.min(i,Math.min(x,b)),E=(i-p)/2;l.push({x:0,y:E,width:u,height:p,orientation:"portrait"}),l.push({x:u,y:E,width:s,height:p,orientation:w.orientation}),h=u*p+s*p}else if(d===1&&a===2&&e.landscape===1&&e.wide===1){const S=D.portrait,w=D.wide,g=D.landscape,c=i,u=i*S,s=i/(1/w+1/g),x=s/w,b=s/g,p=u+s;if(Math.abs(p-o)<.1)l.push({x:0,y:0,width:u,height:c,orientation:"portrait"}),h+=u*c,f.find(v=>v.orientation==="wide")&&(l.push({x:0+u,y:0,width:s,height:x,orientation:"wide"}),h+=s*x),f.find(v=>v.orientation==="landscape")&&(l.push({x:0+u,y:x,width:s,height:b,orientation:"landscape"}),h+=s*b);else{const E=o/p,T=u*E,k=T/S,v=s*E,C=i/k;let N=T*C,W=i,_=v*C,z=_/w,P=_/g,H=N+_;if(H>o){const J=o/H;N=N*J,W=N/S,_=_*J,z=_/w,P=_/g,H=N+_,H>o&&(_=o-N,z=_/w,P=_/g)}const Q=N+_;if(Q>o){const J=o/Q;N=N*J,W=N/S,_=_*J,z=_/w,P=_/g}const U=0;l.push({x:U,y:0,width:N,height:W,orientation:"portrait"}),h+=N*W,f.find(J=>J.orientation==="wide")&&(l.push({x:U+N,y:0,width:_,height:z,orientation:"wide"}),h+=_*z),f.find(J=>J.orientation==="landscape")&&(l.push({x:U+N,y:z,width:_,height:P,orientation:"landscape"}),h+=_*P)}}else if(d===1&&a===3){const S=D.portrait,w=i,g=w*S,c=g,u=o-c;l.push({x:0,y:0,width:g,height:w,orientation:"portrait"}),h+=g*w;const s=i/3;for(let x=0;x<f.length;x++){const b=f[x],p=D[b.orientation],E=s,T=u;let k,v;T/p<=E?(k=T,v=k/p):(v=E,k=v*p);const C=x*s+(s-v)/2;l.push({x:c+(u-k)/2,y:C,width:k,height:v,orientation:b.orientation}),h+=k*v}}else if(d===2&&a===1){const S=D.portrait,w=f[0],g=D[w.orientation],c=i/2,u=c*S,s=o-u,x=i*g;let b,p;x<=s?(p=i,b=p*g):(b=s,p=b/g);const E=u,T=c,k=(i-p)/2,v=(i/2-T)/2,C=i/2+(i/2-T)/2;l.push({x:0,y:k,width:b,height:p,orientation:w.orientation}),h+=b*p,l.push({x:s,y:v,width:E,height:T,orientation:"portrait"}),h+=E*T,l.push({x:s,y:C,width:E,height:T,orientation:"portrait"}),h+=E*T}else if(d===1&&a===2){const S=D.portrait,w=i,g=w*S,c=g,u=o-c;l.push({x:0,y:0,width:g,height:w,orientation:"portrait"}),h+=g*w;const s=i/2;for(let x=0;x<f.length;x++){const b=f[x],p=D[b.orientation],E=s,T=u;let k,v;T/p<=E?(k=T,v=k/p):(v=E,k=v*p);const C=x*s+(s-v)/2;l.push({x:c+(u-k)/2,y:C,width:k,height:v,orientation:b.orientation}),h+=k*v}}else{const S=d;if(S>0){const w=i/S,g=D.portrait;for(let c=0;c<S;c++){const u=Math.min(w,r/g),s=u*g,x=c*w+(w-u)/2;l.push({x:(r-s)/2,y:x,width:s,height:u,orientation:"portrait"}),h+=s*u}}if(f.length>0){const w=i/f.length;for(let g=0;g<f.length;g++){const c=f[g],u=D[c.orientation],s=w,x=m;let b,p;x/u<=s?(b=x,p=b/u):(p=s,b=p*u);const E=g*w+(w-p)/2;l.push({x:r+(m-b)/2,y:E,width:b,height:p,orientation:c.orientation}),h+=b*p}}}const y=q(n,l),j=h/(o*i)*100;return{videos:y,totalArea:h,efficiency:j}}function q(e,n){const o=new Array(n.length),i=new Set,d=new Set;for(let r=0;r<n.length;r++){const m=n[r];for(let l=0;l<e.length;l++)if(!i.has(l)&&e[l].orientation===m.orientation){o[r]={...m,orientation:e[l].orientation},i.add(l),d.add(r);break}}const a=[];for(let r=0;r<n.length;r++)d.has(r)||a.push(r);let f=0;for(let r=0;r<e.length;r++)if(!i.has(r)&&f<a.length){const m=a[f];o[m]={...n[m],orientation:e[r].orientation},f++}return o}function jn(e,n,o,i){if(e.portrait>0)return Ne(e,n,o,i);if(e.landscape===2&&e.wide===1){const c=D.landscape,u=D.wide,s=o,x=s/u,b=i-x,p=o/2,E=p/c;let T,k,v,C;if(x<=i&&E<=b)T=s,k=x,v=p,C=E;else{const Q=i/(x+E),U=Math.min(1,Q);k=x*U,T=k*u,C=E*U,v=C*c}const N=(o-T)/2,W=k+(b-C)/2,z=q(n,[{x:N,y:0,width:T,height:k,orientation:"wide"},{x:0,y:W,width:v,height:C,orientation:"landscape"},{x:v,y:W,width:v,height:C,orientation:"landscape"}]),P=T*k+v*C*2,H=P/(o*i)*100;return{videos:z,totalArea:P,efficiency:H}}if(e.landscape===1&&e.wide===2){const c=D.landscape,u=D.wide,s=o/2,x=s/u,p=i-x,E=p*c;let T,k,v,C;if(x<=i&&E<=o&&x+p<=i)T=s,k=x,v=E,C=p;else{const U=x+p,Ee=i/U;T=s,k=x*Ee,C=p*Ee,v=C*c}const N=0,W=o/2,_=(o-v)/2,P=q(n,[{x:N,y:0,width:T,height:k,orientation:"wide"},{x:W,y:0,width:T,height:k,orientation:"wide"},{x:_,y:k,width:v,height:C,orientation:"landscape"}]),H=T*k*2+v*C,Q=H/(o*i)*100;return{videos:P,totalArea:H,efficiency:Q}}if(e.wide===3){const c=D.wide,u=o/2,s=u/c,b=i-s,p=b*c;let E,T,k,v;if(s<=i&&p<=o&&s+b<=i)E=u,T=s,k=p,v=b;else{const Q=s+b,U=i/Q;E=u,T=s*U,v=b*U,k=v*c,k>o&&(k=o,v=k/c)}const C=0,N=o/2,W=(o-k)/2,z=q(n,[{x:C,y:0,width:E,height:T,orientation:"wide"},{x:N,y:0,width:E,height:T,orientation:"wide"},{x:W,y:T,width:k,height:v,orientation:"wide"}]),P=E*T*2+k*v,H=P/(o*i)*100;return{videos:z,totalArea:P,efficiency:H}}if(e.landscape===3){const c=D.landscape,u=o/(c*1.5),s=Math.min(i,u),x=s/2,b=s,p=x*c,E=b*c,T=(i-s)/2,k=[{x:0,y:T,width:p,height:x,orientation:"landscape"},{x:0,y:T+x,width:p,height:x,orientation:"landscape"},{x:p,y:T,width:E,height:b,orientation:"landscape"}],v=q(n,k),C=p*s+E*s,N=C/(o*i)*100;return{videos:v,totalArea:C,efficiency:N}}const d=[];if(e.landscape>0)for(let c=0;c<e.landscape;c++)d.push("landscape");if(e.wide>0)for(let c=0;c<e.wide;c++)d.push("wide");const a=d[0]||n[0].orientation,f=d[1]||n[1].orientation,r=d[2]||n[2].orientation,m=D[a],l=D[f],h=D[r],y=[()=>{const c=o*.6,u=o*.4,s=c/m,x=u/l,b=u/h,p=x+b;return s<=i&&p<=i?{positions:[{x:0,y:(i-s)/2,width:c,height:s,orientation:a},{x:c,y:0,width:u,height:x,orientation:f},{x:c,y:x,width:u,height:b,orientation:r}],totalArea:c*s+u*x+u*b}:null},()=>{const c=i*.5,u=i*.5,s=c*m,x=c*l,b=u*h;return s+x<=o&&b<=o?{positions:[{x:0,y:0,width:s,height:c,orientation:a},{x:s,y:0,width:x,height:c,orientation:f},{x:(o-b)/2,y:c,width:b,height:u,orientation:r}],totalArea:s*c+x*c+b*u}:null},()=>{const c=o/3,u=c/m,s=c/l,x=c/h;return Math.max(u,s,x)<=i?{positions:[{x:0,y:(i-u)/2,width:c,height:u,orientation:a},{x:c,y:(i-s)/2,width:c,height:s,orientation:f},{x:c*2,y:(i-x)/2,width:c,height:x,orientation:r}],totalArea:c*u+c*s+c*x}:null}];let j=null,S=0;for(const c of y){const u=c();u&&u.totalArea>S&&(S=u.totalArea,j=u)}if(!j){const c=o/3,u=Math.min(c/m,i),s=Math.min(c/l,i),x=Math.min(c/h,i);j={positions:[{x:0,y:(i-u)/2,width:c,height:u,orientation:a},{x:c,y:(i-s)/2,width:c,height:s,orientation:f},{x:c*2,y:(i-x)/2,width:c,height:x,orientation:r}],totalArea:c*u+c*s+c*x}}const w=q(n,j.positions),g=j.totalArea/(o*i)*100;return{videos:w,totalArea:j.totalArea,efficiency:g}}function Sn(e,n,o,i){if(e.portrait>0)return Ne(e,n,o,i);const d=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)d.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)d.push("wide");const a=d[0]||n[0].orientation,f=d[1]||n[1].orientation,r=d[2]||n[2].orientation,m=d[3]||n[3].orientation,l=D[a],h=D[f],y=D[r],j=D[m],S=[()=>{const s=o/2,x=i/2,b=Math.min(s,x*l),p=b/l,E=Math.min(s,x*h),T=E/h,k=Math.min(s,x*y),v=k/y,C=Math.min(s,x*j),N=C/j;return{positions:[{x:(s-b)/2,y:(x-p)/2,width:b,height:p,orientation:a},{x:s+(s-E)/2,y:(x-T)/2,width:E,height:T,orientation:f},{x:(s-k)/2,y:x+(x-v)/2,width:k,height:v,orientation:r},{x:s+(s-C)/2,y:x+(x-N)/2,width:C,height:N,orientation:m}],totalArea:b*p+E*T+k*v+C*N}},()=>{const s=o*.6,x=o*.4,b=s/l,p=i/3,E=Math.min(x,p*h),T=E/h,k=Math.min(x,p*y),v=k/y,C=Math.min(x,p*j),N=C/j;return b<=i?{positions:[{x:0,y:(i-b)/2,width:s,height:b,orientation:a},{x:s,y:0,width:E,height:T,orientation:f},{x:s,y:p,width:k,height:v,orientation:r},{x:s,y:p*2,width:C,height:N,orientation:m}],totalArea:s*b+E*T+k*v+C*N}:null},()=>{const s=o/4,x=s/l,b=s/h,p=s/y,E=s/j;return Math.max(x,b,p,E)<=i?{positions:[{x:0,y:(i-x)/2,width:s,height:x,orientation:a},{x:s,y:(i-b)/2,width:s,height:b,orientation:f},{x:s*2,y:(i-p)/2,width:s,height:p,orientation:r},{x:s*3,y:(i-E)/2,width:s,height:E,orientation:m}],totalArea:s*x+s*b+s*p+s*E}:null}];let w=null,g=0;for(const s of S){const x=s();x&&x.totalArea>g&&(g=x.totalArea,w=x)}if(!w){const s=o/2,x=i/2,b=Math.min(x,s/l),p=Math.min(x,s/h),E=Math.min(x,s/y),T=Math.min(x,s/j);w={positions:[{x:(s-s)/2,y:(x-b)/2,width:s,height:b,orientation:a},{x:s+(s-s)/2,y:(x-p)/2,width:s,height:p,orientation:f},{x:(s-s)/2,y:x+(x-E)/2,width:s,height:E,orientation:r},{x:s+(s-s)/2,y:x+(x-T)/2,width:s,height:T,orientation:m}],totalArea:s*b+s*p+s*E+s*T}}const c=q(n,w.positions),u=w.totalArea/(o*i)*100;return{videos:c,totalArea:w.totalArea,efficiency:u}}const An=e=>{const[n,o]=A.useState({}),[i,d]=A.useState(!0),[a,f]=A.useState(null);return A.useEffect(()=>{if(!e||e.length===0){d(!1);return}let r=!0;async function m(){d(!0),f(null);try{const l=e.map(async y=>{try{const j=I(`/api/states/${y}`),w=(await M(j)).data?.attributes?.access_token||null;return{entityId:y,accessToken:w}}catch(j){return O.error(`Failed to fetch access token for ${y}:`,j),{entityId:y,accessToken:null}}}),h=await Promise.all(l);if(r){const y={};h.forEach(({entityId:j,accessToken:S})=>{S&&(y[j]=S)}),o(y),d(!1)}}catch(l){r&&(O.error("Failed to fetch camera access tokens:",l),f(G(l)),d(!1))}}return m(),()=>{r=!1}},[e?.length,e?.join(",")]),A.useEffect(()=>{if(!e||e.length===0)return;let r=!0,m=null;async function l(){if(r)try{const h=e.map(async j=>{try{const S=I(`/api/states/${j}`),g=(await M(S)).data?.attributes?.access_token||null;return{entityId:j,accessToken:g}}catch(S){return O.debug(`Failed to refresh access token for ${j}:`,S),null}}),y=await Promise.all(h);r&&o(j=>{const S={...j};return y.forEach(w=>{w&&w.accessToken&&(S[w.entityId]=w.accessToken)}),S})}catch{}}return m=setInterval(l,300*1e3),()=>{r=!1,m&&clearInterval(m)}},[e?.length,e?.join(",")]),A.useEffect(()=>{if(!e||e.length===0)return;let r=null,m=[],l=!0,h=null,y=0,j=!1;async function S(){if(j)return;if(r){try{m.forEach(u=>{u&&u()}),m=[],r.close()}catch{}r=null}j=!0;let w;if(typeof window<"u"&&window.location){const u=window.location.pathname.replace(/\/$/,"");w=`${window.location.origin}${u}`}else w="";const g=ue||K||"";if(!g){j=!1;return}let c;try{c=le(w,g),l&&f(!1)}catch(u){l&&(O.error("Failed to create WebSocket auth for camera tokens:",u),f(u instanceof Error?u.message:String(u))),j=!1;return}try{r=await de({auth:c}),r.addEventListener("ready",()=>{l&&(O.debug("WebSocket connection ready for camera tokens"),y=0,f(!1))}),r.addEventListener("disconnected",()=>{if(l&&!j){O.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),h&&clearTimeout(h),r=null,m=[];const u=Math.min(1e3*Math.pow(2,y),3e4);y++,h=setTimeout(()=>{l&&!j&&(O.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${y})`),S())},u)}});for(const u of e){const s=b=>{if(l){const E=b.variables.trigger.to_state?.attributes?.access_token||null;o(T=>E?{...T,[u]:E}:T)}},x=await r.subscribeMessage(s,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:u}});m.push(x)}j=!1}catch(u){if(j=!1,l){O.error("Failed to setup WebSocket connection for camera tokens:",u),f(u instanceof Error?u.message:String(u));const s=Math.min(1e3*Math.pow(2,y),3e4);y++,h=setTimeout(()=>{l&&S()},s)}}}return S(),()=>{l=!1,h&&clearTimeout(h),m.forEach(w=>{w&&w()}),r&&r.close()}},[e?.length,e?.join(",")]),[n,i,a]},Tn=(e,n=null)=>{if(!e)return null;let o=`/api/camera_proxy_stream/${e}`;if(n&&(o=`${o}?token=${encodeURIComponent(n)}`),typeof window<"u"&&window.location){const i=window.location.protocol,d=window.location.host;return`${i}//${d}${o}`}return o},Ie=45e3,kn=R.div`
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    h3 {
        margin-top: 6px;
    }

    .grid {
        position: relative;
        width: 100%;
        height: 100%;
        flex: 1;
        min-height: 0;
        overflow: hidden;
    }

    .video-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        video, img {
            border: none;
            display: block;
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            pointer-events: none;
            object-fit: cover;

            &.portrait {
                aspect-ratio: 360 / 480;
            }

            &.landscape {
                aspect-ratio: 1920 / 1072;
            }

            &.wide {
                aspect-ratio: 770 / 216;
            }
        }

        .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            cursor: pointer;
        }
    }

    .open-door {
        position: absolute;
        top: 38%;
        left: 38%;
        background-color: rgba(127, 32, 34, 0.5);
        width: 25%;
        height: 25%;
        display: grid;
        justify-content: center;
        align-content: center;
        border-radius: 24px;
        font-size: 24px;
        font-weight: bold;
        z-index: 10;
        text-align: center;
        opacity: 1;

        &.confirm {
            background-color: rgba(255, 165, 0, 0.8);
            color: #fff;
            animation: fadeOut 3s ease-out forwards;
        }

        &.opening {
            background-color: rgba(127, 32, 34, 0.8);
            color: #fff;
        }
    }
`,vn=()=>{if(!ct)return null;const[e,n]=A.useState(!1),[o]=xn(),[i,d]=A.useState(void 0),[a,f]=A.useState(100),[r,m]=A.useState("0"),l=A.useMemo(()=>Z.map(w=>w.entity_id).filter(Boolean),[Z]),[h]=An(l);A.useEffect(()=>{if(o==="off"&&e){const w=window.setTimeout(()=>{n(!1),d(void 0)},Ie);return d(w),m(Ie+"ms"),f(0),()=>{w&&window.clearTimeout(w)}}else o==="on"&&(m(0),f(100),n(!0))},[o,e]),A.useEffect(()=>{o==="on"&&i!==void 0&&(window.clearTimeout(i),m(0),f(100),d(void 0))},[i,o]);const[y,j]=A.useState(null),S=()=>{y===null?j("confirm"):y==="confirm"&&(j("opening"),wn(),setTimeout(()=>j(null),2e3))};return A.useEffect(()=>{if(y==="confirm"){const w=setTimeout(()=>{j(null)},3e3);return()=>{clearTimeout(w)}}},[y]),A.useEffect(()=>{e||j(null)},[e]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>n(w=>!w),children:"CCTV"}),t.jsx(fe,{visible:e,onClick:S,onClose:()=>{n(!1),j(null)},fullsize:!0,children:t.jsxs(kn,{onClick:S,children:[t.jsx(ht,{completed:a,height:10,bgColor:i===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:r,transitionTimingFunction:"linear"}),t.jsx("div",{className:"grid",children:(()=>{if(Z.length===0)return null;const w=Z.map(b=>({orientation:b.orientation||"landscape"})),g=window.innerWidth,c=window.innerHeight-10,u=ft(w,g,c),s={portrait:Z.filter(b=>(b.orientation||"landscape")==="portrait"),landscape:Z.filter(b=>(b.orientation||"landscape")==="landscape"),wide:Z.filter(b=>b.orientation==="wide")},x={portrait:0,landscape:0,wide:0};return u.videos.map((b,p)=>{const E=b.orientation,T=x[E],k=s[E][T];if(!k)return null;x[E]++;const v=h[k.entity_id]||null,C=Tn(k.entity_id,v);return C?t.jsxs("div",{className:"video-container",style:{left:`${b.x}px`,top:`${b.y}px`,width:`${b.width}px`,height:`${b.height}px`},children:[t.jsx("img",{src:C,className:E,alt:"Camera stream"}),t.jsx("div",{className:"video-overlay",onClick:()=>S()})]},`${E}-${T}-${p}`):null})})()}),y==="confirm"&&t.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),y==="opening"&&t.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},Cn=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  @media only screen and (max-width: 1200px) {
    height: auto;
  }
  
  svg.indicator {
    margin-left: 1rem;
    animation: spin 1s infinite linear;
    visibility: hidden;

    &.isLoading {
      visibility: visible;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    
    svg {
      cursor: pointer;
    }
    
    button {
      cursor: pointer;
      background-color: transparent;
      padding: 6px 12px;
      border-radius: 4px;
      color: #ffffff;
      border: solid 1px #a1a0a0;
      margin-left: 1rem;
    }
  }

`,Ln=({nextWeek:e,previousWeek:n,startWeekWithToday:o})=>t.jsxs(Cn,{children:[t.jsxs("div",{className:"buttons",children:[t.jsx(B,{path:_t,size:"32px",color:"#ffffff",onClick:n}),t.jsx(B,{path:Mt,size:"32px",color:"#ffffff",onClick:e}),t.jsx("button",{onClick:o,children:"Today"}),t.jsx(vn,{})]}),t.jsx(gn,{}),t.jsx(B,{path:$t,size:"32px",color:"#ffffff",className:V("indicator")})]}),On=L.memo(Ln),Rn=6e4,De=(e=Rn,n=void 0)=>{const[o,i]=A.useState(!0);return A.useEffect(()=>{const d=setInterval(()=>{i(a=>!a)},e);return()=>{clearInterval(d)}},[e,n]),o},Nn=e=>I(`/api/calendars/${e}`),Dn=(e,n)=>`${Nn(e)}?${Zt.stringify(n)}`,_n={mdiDelete:Wt,mdiCake:Pt},Mn=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return _n[n]||void 0},$n=ln.map(e=>({name:e.name,icon:Mn(e.icon)})),Pn=(e,n,o,i)=>M(Dn(e.name,{start:n.toISO(),end:o.toISO()}),{timeout:1e4}).then(d=>{!d.data||!Array.isArray(d.data)||d.data.forEach(a=>{const f="dateTime"in a.start?F.fromISO(a.start.dateTime):F.fromSQL(a.start.date);let r;"dateTime"in a.end?r=Math.floor(F.fromISO(a.end.dateTime).diff(n,"days").as("days")):r=Math.floor(F.fromSQL(a.end.date).diff(n,"days").as("days"))-1;const m=Math.floor(f.diff(n,"days").as("days"));r>=i.length&&(r=i.length-1);const l="dateTime"in a.start?"events":"allDay";if(m>=0&&m<i.length)for(let h=m;h<=r;h++)i[h][l]=[...i[h][l],{...a,icon:e.icon}]})}).catch(d=>{throw d}),Fe=new Map,Wn=300*1e3,In=e=>e.toISODate(),Fn=(e,n,o,i,d,a)=>{const f=[0,1,2,3,4,5].map(y=>e.plus({days:y}).startOf("day"));f[6]=e.plus({days:6}).endOf("day");const r=In(e),m=Fe.get(r);if(m&&Date.now()-m.timestamp<Wn){o(m.data);return}const l=f.map(y=>({date:y,allDay:[],events:[]})),h=new AbortController;d.current&&d.current.abort(),d.current=h;try{i(!0);const y=$n.map(j=>Pn(j,f[0],f[6],l));Promise.all(y).then(()=>{h.signal.aborted||(Fe.set(r,{data:l,timestamp:Date.now()}),o(l),a(!1))}).catch(j=>{h.signal.aborted||a(G(j))}).finally(()=>{h.signal.aborted||i(!1)})}catch(y){h.signal.aborted||(a(G(y)),i(!1))}},Ve=[],Vn=e=>{const[n,o]=A.useState(Ve),[i,d]=A.useState(!1),[a,f]=A.useState(!1),r=De(6e4,"Calendar"),[m,l]=A.useState(null),h=L.useRef(null);return A.useEffect(()=>(e!==void 0&&((m===null||!m.equals(e))&&(o(Ve),l(e)),Fn(e,n,o,d,h,f)),()=>{h.current&&h.current.abort()}),[e,r]),[n,a]};function ce(e){const[n,o]=A.useState(!1);function i({key:a}){a===e&&o(!0)}const d=({key:a})=>{a===e&&o(!1)};return A.useEffect(()=>(window.addEventListener("keydown",i),window.addEventListener("keyup",d),()=>{window.removeEventListener("keydown",i),window.removeEventListener("keyup",d)}),[e]),n}const zn=()=>{let e=new Date,o=(e.getDay()+6)%7,i=new Date(e.setDate(e.getDate()-o));return F.fromJSDate(i)},Bn=e=>{const n=()=>e(r=>r.plus({days:7})),o=ce("ArrowRight");A.useEffect(()=>{o&&n()},[o]);const i=()=>e(r=>r.minus({days:7})),d=ce("ArrowLeft");A.useEffect(()=>{d&&i()},[d]);const a=()=>e(zn()),f=ce("t");return A.useEffect(()=>{f&&a()},[f]),{nextWeek:n,previousWeek:i,startWeekWithToday:a}},Gn=e=>{const[n,o]=L.useState(0),[i,d]=L.useState(0),a=50;return{onTouchStart:l=>{d(0),o(l.targetTouches[0].clientX)},onTouchMove:l=>d(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!i)return;const l=n-i,h=l>a,y=l<-a;h&&e.onSwipedLeft(),y&&e.onSwipedRight()}}},ze=e=>F.fromISO(e).toLocaleString(F.TIME_24_SIMPLE),Ae=e=>e.toFormat("c")>=6,Te=e=>e.hasSame(F.now(),"day"),Hn=R.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  .schedule {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(2, max-content) 1fr;
    grid-column-gap: 12px;
    flex: 1;
    min-height: 0;
    overflow-y: auto;

    background-color: #2f2f2f;
    border-radius: 4px;

    h1, h2 {
      font-weight: 400;
    }

    h2 {
      font-size: 18px;
      text-align: center;
      margin-bottom: 0;
      padding-bottom: 12px;
    }

    .caption {
      border-bottom: solid 1px #a1a0a0;

      @media only screen and (max-width: 1200px) {
        h2 {
          font-size: 12px;
        }
      }
    }

    .event, .allDayEvent {
      padding: 6px 12px;
      border-radius: 4px;
      background-color: #356957;
      word-break: break-word;
      font-size: 0.9rem;

      h3 {
        margin: 6px 0 0 0;
        display: flex;
        align-items: flex-start;
        font-size: 0.8rem;
        font-weight: normal;
        color: #ffffff6b
      }

      @media only screen and (max-width: 1200px) {
        h3 {
          font-size: 12px;
        }
        font-size: 14px;
      }

      svg {
        margin-right: 6px;
        padding-top: 2px;
        min-width: 1rem;
      }

      & + .event {
        margin-top: 12px;
      }
    }

    .allDayEvent {
      display: flex;
      align-items: flex-start;
      background-color: #38576b;

      & + .allDayEvent {
        margin-top: 12px;
      }
    }

    .eventRow {
      padding: 12px 0;
    }

    .allDayRow {
      padding: 12px 0;
      border-bottom: solid 1px #a1a0a0;
    }

    .weekend {
      background-color: #363636;
    }

    .today h2 {
      color: #f85a5a;
      font-weight: 600;
    }
  }
  
  .loading {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #2f2f2f;
    justify-content: center;
  }
`,Un=()=>{const[e,n]=A.useState(void 0),[o,i]=Vn(e),{nextWeek:d,previousWeek:a,startWeekWithToday:f}=Bn(n);A.useEffect(()=>{f()},[]);const r=Gn({onSwipedLeft:()=>d(),onSwipedRight:()=>a()}),m=L.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=L.useMemo(()=>o.slice(0,7),[o]);return t.jsxs(Hn,{...r,children:[t.jsx(On,{nextWeek:d,previousWeek:a,startWeekWithToday:f}),t.jsxs("div",{className:"schedule",children:[l.map((h,y)=>t.jsx("div",{className:V({weekend:Ae(h.date),today:Te(h.date)},"caption"),children:t.jsx("h2",{children:h.date.toLocaleString(m)})},y)),l.map((h,y)=>t.jsx("div",{className:V("allDayRow",{weekend:Ae(h.date),today:Te(h.date)}),children:h.allDay.map((j,S)=>t.jsx("div",{className:"allDayEvent",children:j.summary},S))},y)),l.map((h,y)=>t.jsx("div",{className:V("eventRow",{weekend:Ae(h.date),today:Te(h.date)}),children:h.events.map((j,S)=>t.jsxs("div",{className:"event",children:[t.jsx("div",{children:j.summary}),t.jsxs("h3",{children:[j.icon&&t.jsx(B,{path:j.icon,size:"1rem",color:"#ffffff"}),ze(j.start.dateTime)," - ",ze(j.end.dateTime)]})]},S))},y))]}),o.length===0&&t.jsx("div",{className:"loading",children:i!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),t.jsx("div",{children:i instanceof Error?i.message:String(i)})]}):t.jsx(Qe,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),i!==!1&&o.length>0&&t.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:t.jsxs("div",{children:["Warnung: ",i instanceof Error?i.message:String(i)]})})]})},ye={"clear-day":{icon:St,label:"Klar",color:"#eeeef5"},"clear-night":{icon:jt,label:"Klar",color:"#eeeef5"},rain:{icon:Et,label:"Regen",color:"#80a5d6"},snow:{icon:bt,label:"Schnee",color:"#8c82ce"},sleet:{icon:yt,label:"Graupel",color:"#aba4db"},wind:{icon:wt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:xt,label:"Neblig",color:"#d5dae2"},cloudy:{icon:gt,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:mt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:pt,label:"Teils bewölkt",color:"#d5dae2"}},Yn=()=>`./forecast/${et}/${tt},${nt}?&units=si&exclude=minutely`,Kn=e=>{const[n,o]=A.useState([]),[i,d]=A.useState(!1),a=De(6e4*10,"Weather"),f=it&&et&&tt&&nt;return A.useEffect(()=>{f&&M(Yn()).then(r=>{o(r.data),d(!1)}).catch(r=>{d(G(r))}).finally(()=>{})},[a,e,f]),[n,i]},Xn=Tt(kt),Be=R.div`

  cursor: pointer;

  .headline {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100px;

    @media only screen and (max-width: 1200px) {
      height: auto;
     
      h2 {
        font-size: 42px;
      }
    }

    h2 {
      margin: 0;
      padding: 0;
      font-size: 50px;
      
      span {
        font-size: 36px;
        margin-left: 1rem;
      }
    }
  }

  .values {
    margin-top: 2rem;
    line-height: 1.5rem;

    span {
      font-weight: 100;
      color: #a1a0a0;
    }

    .table {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .forecast {
    display: flex;
    color: #a1a0a0;
    margin-top: 1.5rem;
    background-color: #2d2d2d;
    border-radius: 4px;
    padding: 12px 0;
    font-size: .85rem;

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 25%;

      > * + * {
        margin-top: .25rem;
      }
    }

    strong, svg {
      color: #ffffff;
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    .forecast {
      display: none;
    }
    
    /* Keep forecast visible in overlay */
    .full-weather .forecast {
      display: flex;
    }
  }
  
  .detail-header {
    display: flex;
    justify-content: space-between;
    
    > div:nth-child(1) {
      flex-grow: 1;
    }
    
    .headline {
      justify-content: flex-start;
    }
  }
  
  .info {
    margin-top: .5rem;
    font-size: .8rem;
  }
`,Ge=L.memo(({data:e,daily:n=!1})=>t.jsxs("div",{children:[t.jsxs("div",{children:[!n&&F.fromSeconds(e.time).toLocaleString(F.TIME_24_SIMPLE),n&&F.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),t.jsx("div",{children:t.jsx(Le,{icon:e.icon})}),t.jsx("div",{children:t.jsxs("strong",{children:[!n&&t.jsxs(t.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&t.jsxs(t.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),t.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),t.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),qn=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:ye[n.icon]?.color||"#ffffff",text:ye[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),Le=({icon:e})=>{const n=ye[e];return t.jsx(n.icon,{size:60,color:"#ffffff"})},Jn=()=>{if(!it)return null;const[e,n]=Kn(),[o,i]=A.useState(!1),d=ce("w"),a=A.useRef(),f=L.useCallback(()=>i(y=>!y),[]),r=L.useCallback(()=>i(!0),[]),m=L.useMemo(()=>qn(e),[e]),l=L.useMemo(()=>[3,6,9,12],[]),h=L.useMemo(()=>[1,2,3,4,5,6,7],[]);return A.useEffect(()=>{if(!o||!a.current||!e||!e.hourly||m.length===0)return;const y={timezone:"Europe/Berlin"},j=document.createElement("div");return a.current.textContent="",a.current.appendChild(j),nn(j,m,y),()=>{a.current&&(a.current.textContent="")}},[o,m]),A.useEffect(()=>{d&&f()},[d]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?n!==!1?t.jsx(Be,{children:t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]})}):"":t.jsxs(Be,{children:[t.jsxs("div",{onClick:r,children:[t.jsxs("div",{className:"headline",children:[t.jsx(Le,{icon:e.currently.icon}),t.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),t.jsx("div",{className:"forecast",children:l.map((y,j)=>t.jsx(Ge,{data:e.hourly.data[y]},j))})]}),t.jsx(fe,{visible:o,onClick:f,children:t.jsxs("div",{className:"full-weather",children:[n!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]}),t.jsxs("div",{className:"detail-header",children:[t.jsx("div",{children:t.jsxs("div",{className:"headline",children:[t.jsx(Le,{icon:e.daily.data[0].icon}),t.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",t.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),t.jsx("h3",{children:ye[e.daily.data[0].icon].label})]}),t.jsx("div",{className:"values",children:t.jsxs("div",{className:"table",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]})]})}),t.jsx("h3",{children:"Die nächsten 24 Stunden"}),t.jsx("div",{ref:a}),t.jsx("h3",{children:"Die nächste Woche"}),t.jsx("div",{className:"forecast",children:h.map((y,j)=>t.jsx(Ge,{data:e.daily.data[y],daily:!0},j))}),t.jsxs("div",{className:"info",children:["Aktualisiert ",t.jsx(At,{date:F.fromSeconds(e.currently.time).toJSDate(),formatter:Xn})]})]})})]})},Qn=L.memo(Jn);async function Zn(e){if(!ve)throw new Error("GEOFOX_SECRET is not configured");return en.stringify(tn(JSON.stringify(e),ve))}const eo="AK Wandsbek",to="Hamburg",no="Master:62016",oo="STATION",io={x:10.091341,y:53.568702},ro={name:eo,city:to,id:no,type:oo,coordinate:io},ge={departureList:"departureList",checkName:"checkName"},so=async(e,n)=>M({method:"post",url:`./gti/public/${e}`,data:n,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":ot,"geofox-auth-signature":await Zn(n),Authorization:void 0}}),He=(e,n)=>e.realtimeOffset-n.realtimeOffset,ao=e=>{const n=e.departures.map(o=>({line:o.line.name,direction:o.line.direction,timeOffset:o.timeOffset,delay:o.delay?o.delay:"0",directionId:o.directionId,realtimeOffset:o.timeOffset+(o.delay?o.delay:0)/60}));return{from:n.filter(o=>o.directionId===1).slice(0,3).sort(He),to:n.filter(o=>o.directionId===6).slice(0,3).sort(He)}},co=e=>{const[n,o]=A.useState([]),[i,d]=A.useState(!1),a=De(6e4),f=rt&&ot&&ve;return A.useEffect(()=>{if(!f||!(e in ge))return;let r={version:51};switch(e){case ge.checkName:r={...r,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case ge.departureList:const m=F.now();r={...r,station:ro,time:{date:m.toFormat("dd.MM.yyyy"),time:m.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:r=void 0}so(e,r).then(m=>{o(ao(m.data)),d(!1)}).catch(m=>{d(G(m))})},[e,a,f]),[n,i]},lo=R.div`
  margin-top: 2rem;

  h3 {
    margin: 1rem 0 .5rem 0;
    padding: 0;
    font-size: 1rem;
    color: #a1a0a0;
  }

  .departure {
    display: flex;
    align-items: flex-start;
    
    img {
      margin-top: 3px;
    }

    > *:nth-child(1) {
      height: 14px;
      width: 50px;
      align-items: center;
    }

    > *:nth-child(2) {
      flex-grow: 2;
    }

    > *:nth-child(3) {
      flex-grow: 1;
      text-align: right;

      span {
        color: #17e146;

        &.error {
          color: #ea0000;
        }
        
        &.invisible {
          opacity: 0;
        }
      }
    }
  }
`,Ue=L.memo(({line:e,direction:n,realtimeOffset:o})=>t.jsxs("div",{className:"departure",children:[t.jsx("div",{children:t.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),t.jsx("div",{children:o===0?"Jetzt":t.jsxs(t.Fragment,{children:["in ",o," '"]})})]})),fo=()=>{if(!rt)return null;const[e,n]=co(ge.departureList);return t.jsx(lo,{children:n!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"→ Wandsbek"}),e.to?.map((o,i)=>t.jsx(Ue,{line:o.line,direction:o.direction,realtimeOffset:o.realtimeOffset},i)),t.jsx("h3",{children:"→ Stadtauswärts"}),e.from?.map((o,i)=>t.jsx(Ue,{line:o.line,direction:o.direction,realtimeOffset:o.realtimeOffset},i))]})})},uo=L.memo(fo),ho=()=>{const[e,n]=A.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[o,i]=A.useState(!1),d=dt&&(te||ne||oe);return A.useEffect(()=>{if(!d)return;(async()=>{const f=[];te&&f.push(M(I(`/api/states/${te}`)).then(l=>({type:"preclimateStatus",value:l.data.state==="on"})).catch(l=>({type:"preclimateStatus",error:G(l)}))),ne&&f.push(M(I(`/api/states/${ne}`)).then(l=>({type:"chargingState",value:l.data.state==="on"})).catch(l=>({type:"chargingState",error:G(l)}))),oe&&f.push(M(I(`/api/states/${oe}`)).then(l=>({type:"stateOfCharge",value:parseFloat(l.data.state)||0})).catch(l=>({type:"stateOfCharge",error:G(l)})));const r=await Promise.all(f);let m=!1;r.forEach(l=>{l.error?m=l.error:n(h=>({...h,[l.type]:l.value}))}),i(m||!1)})()},[d]),A.useEffect(()=>{let a=null,f=[],r=!0,m=null,l=0,h=!1;async function y(){if(!d||h)return;if(a){try{f.forEach(g=>{g&&g()}),f=[],a.close()}catch{}a=null}h=!0;let j;if(typeof window<"u"&&window.location){const g=window.location.pathname.replace(/\/$/,"");j=`${window.location.origin}${g}`}else j="";const S=ue||K||"";if(!S){h=!1;return}let w;try{w=le(j,S),r&&i(!1)}catch(g){r&&(O.error("Failed to create WebSocket auth:",g),i(g instanceof Error?g.message:String(g))),h=!1;return}try{a=await de({auth:w}),a.addEventListener("ready",()=>{r&&(O.debug("WebSocket connection ready for EV entities"),l=0,i(!1))}),a.addEventListener("disconnected",()=>{if(r&&!h){O.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),m&&clearTimeout(m),a=null,f=[];const u=Math.min(1e3*Math.pow(2,l),3e4);l++,m=setTimeout(()=>{r&&!h&&(O.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${l})`),y())},u)}});const g=u=>{if(r){const s=u.variables.trigger.to_state.entity_id,x=u.variables.trigger.to_state.state;n(b=>{const p={...b};return s===te?p.preclimateStatus=x==="on":s===ne?p.chargingState=x==="on":s===oe&&(p.stateOfCharge=parseFloat(x)||0),p})}},c=[];te&&c.push(te),ne&&c.push(ne),oe&&c.push(oe);for(const u of c){const s=await a.subscribeMessage(g,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:u}});f.push(s)}h=!1}catch(g){if(h=!1,r){O.error("Failed to setup WebSocket connection:",g),i(g instanceof Error?g.message:String(g));const c=Math.min(1e3*Math.pow(2,l),3e4);l++,m=setTimeout(()=>{r&&y()},c)}}}return y(),()=>{r=!1,m&&clearTimeout(m),f.forEach(j=>{j&&j()}),a&&a.close()}},[d]),[e,o]},po=()=>{$e&&M.post(I("/api/services/button/press"),{entity_id:$e}).catch(e=>{O.error("Failed to start preclimate:",e)})},mo=()=>{Pe&&M.post(I("/api/services/button/press"),{entity_id:Pe}).catch(e=>{O.error("Failed to stop preclimate:",e)})},go=R.div`
  padding-bottom: 12px;

  h2 {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.1rem;
  }

  &.disabled {
    cursor: default;
    
    .status {
      cursor: default;
      opacity: 0.6;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;

    span {
      margin-left: 1rem;
    }
  }

  .battery-info {
    display: flex;
    align-items: center;
    gap: 0.1rem;
  }

  .charge-percentage {
    font-size: 0.9rem;
    font-weight: 400;
    color: #a1a0a0;
  }

  .preclimate-button-wrapper {
    margin-top: 1rem;
    margin: 1rem 3px 0 3px;
    position: relative;
    width: calc(100% - 6px);
  }

  .preclimate-button {
    width: 100%;
    padding: 0.75rem 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
    z-index: 1;

    &:hover:not(:disabled) {
      background-color: rgba(255, 255, 255, 0.2);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.spinning svg {
      animation: spin 2s linear infinite;
    }

    &.shaking {
      animation: shake 0.5s ease-in-out;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }
      10%, 30%, 50%, 70%, 90% {
        transform: translateX(-5px);
      }
      20%, 40%, 60%, 80% {
        transform: translateX(5px);
      }
    }
  }

  .progress-ring {
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 8px;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: var(--progress-gradient, conic-gradient(
        from -90deg,
        var(--progress-color, #17e146) 0deg,
        var(--progress-color, #17e146) var(--progress-angle, 0deg),
        transparent var(--progress-angle, 0deg),
        transparent 360deg
      ));
      mask: 
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask-composite: exclude;
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      padding: 3px;
      box-sizing: border-box;
      transition: background 0.1s linear;
    }
  }
`,xo=(e,n)=>n?Ft:e>=80?Vt:e>=50?zt:e>=20?Bt:Gt,wo=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",yo=()=>{if(!dt)return null;const[e,n]=ho(),{preclimateStatus:o,chargingState:i,stateOfCharge:d}=e,[a,f]=L.useState(!1),[r,m]=L.useState(null),[l,h]=L.useState(!1),[y,j]=L.useState(!1),[S,w]=L.useState(0),g=L.useRef(null),c=L.useRef(null),u=L.useRef(o),s=L.useRef(null);L.useEffect(()=>{u.current!==o&&(a&&s.current!==null&&o===(r==="start")&&(w(r==="start"?360:0),j(!0),setTimeout(()=>{f(!1),m(null),j(!1),w(0),s.current=null,h(!1)},300),g.current&&(clearTimeout(g.current),g.current=null)),u.current=o)},[o,a,r]),L.useEffect(()=>{if(!a||y){c.current&&(cancelAnimationFrame(c.current),c.current=null);return}const C=s.current||Date.now(),N=1e4,W=r==="stop",_=()=>{const z=Date.now()-C,P=Math.min(z/N,1);w(W?360*(1-P):360*P),P<1&&!y&&(c.current=requestAnimationFrame(_))};return c.current=requestAnimationFrame(_),()=>{c.current&&(cancelAnimationFrame(c.current),c.current=null)}},[a,y,r]),L.useEffect(()=>()=>{g.current&&clearTimeout(g.current),c.current&&cancelAnimationFrame(c.current)},[]);const x=L.useCallback(()=>{if(n!==!1||a)return;const C=!o,N=C?"start":"stop";f(!0),m(N),j(!1),h(!1),w(0),s.current=Date.now(),u.current=o,C?po():mo(),g.current=setTimeout(()=>{a&&(h(!0),setTimeout(()=>{f(!1),m(null),j(!1),w(0),h(!1),s.current=null},500))},15e3)},[o,n,a]),b=xo(d||0,i),p=wo(d||0),E=Math.round(d||0),T=a?r==="start":o,k=r==="start"?"#17e146":"#f85a5a",v=r==="start"?"clockwise":"counterclockwise";return t.jsxs(go,{className:V({disabled:n!==!1}),children:[t.jsxs("h2",{children:["Auto",n!==!1?t.jsxs("div",{className:"battery-info",children:[t.jsx(B,{path:Re,size:"1.2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs("div",{className:"battery-info",children:[t.jsxs("span",{className:"charge-percentage",children:[E,"%"]}),t.jsx(B,{path:b,size:"1.2rem",color:p})]})]}),n===!1&&t.jsxs("div",{className:"preclimate-button-wrapper",children:[a&&t.jsx("div",{className:V("progress-ring",v,{complete:y}),style:{"--progress-color":k,"--progress-angle":`${S}deg`,"--progress-gradient":r==="stop"?`conic-gradient(from -90deg, ${k} 0deg, ${k} ${S}deg, transparent ${S}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${k} 0deg, ${k} ${S}deg, transparent ${S}deg, transparent 360deg)`}}),t.jsxs("button",{className:V("preclimate-button",{spinning:T&&!a,shaking:l}),onClick:x,disabled:n!==!1||a,children:[t.jsx(B,{path:It,size:"2rem",color:T?"#ff9800":"#ffffff"}),t.jsx("span",{children:T?"Stop":"Start"})]})]})]})},bo=L.memo(yo),Eo=()=>{const[e,n]=A.useState("closed"),[o,i]=A.useState(!1),d=st&&X,a=X?I(`/api/states/${X}`):null;return A.useEffect(()=>{!d||!a||M(a).then(f=>{n(f.data.state),i(!1)}).catch(f=>{i(G(f))})},[d,a]),A.useEffect(()=>{let f=null,r=null,m=!0,l=null,h=0,y=!1;async function j(){if(!d||!X||y)return;if(f){try{r&&(r(),r=null),f.close()}catch{}f=null}y=!0;let S;if(typeof window<"u"&&window.location){const c=window.location.pathname.replace(/\/$/,"");S=`${window.location.origin}${c}`}else S="";const w=ue||K||"";if(!w){y=!1;return}let g;try{g=le(S,w),m&&i(!1)}catch(c){m&&(O.error("Failed to create WebSocket auth:",c),i(c instanceof Error?c.message:String(c))),y=!1;return}try{f=await de({auth:g}),f.addEventListener("ready",()=>{m&&(O.debug("WebSocket connection ready for garage door"),h=0,i(!1))}),f.addEventListener("disconnected",()=>{if(m&&!y){O.debug("WebSocket disconnected for garage door, will attempt to reconnect"),l&&clearTimeout(l),f=null,r=null;const u=Math.min(1e3*Math.pow(2,h),3e4);h++,l=setTimeout(()=>{m&&!y&&(O.debug(`Attempting to reconnect WebSocket for garage door (attempt ${h})`),j())},u)}});const c=u=>{m&&n(u.variables.trigger.to_state.state)};r=await f.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:X}}),y=!1}catch(c){if(y=!1,m){O.error("Failed to setup WebSocket connection:",c),i(c instanceof Error?c.message:String(c));const u=Math.min(1e3*Math.pow(2,h),3e4);h++,l=setTimeout(()=>{m&&j()},u)}}}return j(),()=>{m=!1,l&&clearTimeout(l),r&&r(),f&&f.close()}},[d]),[e,o]},jo=e=>{if(!X)return;e(!0);const n=setTimeout(()=>e(!1),3e3);M.post(I("/api/services/cover/toggle"),{entity_id:X}).catch(o=>{O.error("Failed to toggle garage door:",o)}).finally(()=>{clearTimeout(n),e(!1)})},So=e=>{if(!X)return;e(!0);const n=setTimeout(()=>e(!1),3e3);M.post(I("/api/services/cover/open_cover"),{entity_id:X}).catch(o=>{O.error("Failed to open garage door:",o)}).finally(()=>{clearTimeout(n),e(!1)})},Ao=e=>{if(!X)return;e(!0);const n=setTimeout(()=>e(!1),3e3);M.post(I("/api/services/cover/close_cover"),{entity_id:X}).catch(o=>{O.error("Failed to close garage door:",o)}).finally(()=>{clearTimeout(n),e(!1)})},To=R.div`
  padding-bottom: 12px;

  @media only screen and (max-width: 1200px) {
    h2 {
      display: none;
    }
  }

  &.disabled {
    cursor: default;
    
    .status {
      cursor: default;
      opacity: 0.6;
    }
  }

  .status {
    cursor: pointer;
  }

  .controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      
      h2 {
        grid-column: 1 / -1;
        text-align: center;
        margin: 0 0 1rem 0;
        padding: 1rem 0;
        font-size: 2rem;
        font-weight: 400;
        color: #ffffff;
        display: block;
        width: 100%;
      }
      
      > div { 
        display: flex;
        justify-content: center;
        align-items: center;
        justify-self: center;
        border: solid 3px rgba(255,255,255,.5);
        border-radius: 12px;
        width: 150px;
        height: 150px;
        font-size: 24px;
        background-color: rgba(255,255,255,.1);
        cursor: pointer;
      }
    }
`,ut=R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  span {
    margin-left: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    span {
      display: none;
    }
  }

  &.animate {
    &::after {
      content: '';
      width: 30px;
      height: 30px;
      border-radius: 100%;
      border: 6px solid #dcdcdc;
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 24px;
      transform: translate(-50%, -50%);
      animation: ring 1.5s infinite;
    }
  
    @keyframes ring {
      0% {
        width: 30px;
        height: 30px;
        opacity: 1;
      }
      100% {
        width: 300px;
        height: 300px;
        opacity: 0;
      }
    }
  }
`,Oe=e=>({unknown:{label:"In Bewegung oder halb-offen",icon:Xt},open:{label:"Offen",icon:Kt},closed:{label:"Geschlossen",icon:Yt},opening:{label:"Öffnet",icon:Ut},closing:{label:"Schließt",icon:Ht}})[e]||{label:"Unavailable",icon:qt},ko=({garageDoor:e,animate:n=!1})=>t.jsxs(ut,{className:V({animate:n}),children:[t.jsx(B,{path:Oe(e).icon,size:"2rem",color:"#ffffff"}),t.jsx("span",{children:Oe(e).label})]}),vo=e=>vt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return Oe(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),Co=()=>{if(!st)return null;const[e,n]=Eo(),[o,i]=A.useState(void 0),[d,a]=A.useState(!1),[f,r]=A.useState(!1);A.useEffect(()=>{if(e==="unknown"||e==="opening"||e==="closing"){if(!o){const j=new Promise(S=>{i({resolve:S})});vo(j)}}else o&&(o.resolve(e),i(void 0))},[e]);const m=ce("g");A.useEffect(()=>{m&&n===!1&&jo(a)},[m,n]);const l=L.useCallback(y=>{if(n===!1)switch(r(!1),y){case"open":So(a);break;case"close":Ao(a);break}},[a,n]),h=L.useCallback(()=>{n===!1&&r(!0)},[n]);return t.jsxs(To,{className:V({disabled:n!==!1}),children:[t.jsx("h2",{children:"Garage"}),t.jsx("div",{className:"status",onClick:h,children:n!==!1?t.jsxs(ut,{children:[t.jsx(B,{path:Re,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsx(ko,{garageDoor:e,animate:d})}),t.jsx(fe,{visible:f&&n===!1,onClick:()=>r(!1),children:t.jsxs("div",{className:"controls",children:[t.jsx("h2",{children:"Garagentor"}),t.jsx("div",{onClick:()=>l("open"),children:"Öffnen"}),t.jsx("div",{onClick:()=>l("close"),children:"Schließen"})]})})]})},Lo=L.memo(Co),Oo=e=>e?I(`/api/states/${e}`):null,Y={done:{label:"Fertig",animate:!1,icon:Qt},off:{label:"Aus",animate:!1,icon:Jt},standby:{label:"Standby",animate:!1,icon:_e},running:{label:"Läuft …",animate:!0,icon:_e}},Ro={off:0,standby:2,running:16,done:256},No=()=>{const n=(Array.isArray(we)?we:[]).map((l,h)=>{const[y,j]=Do(l.entity_id);return{state:y,error:j,name:l.name}}),[o,i]=A.useState(Y.off),[d,a]=A.useState(!1),f=n.map(l=>l.state),r=n.map(l=>l.error);A.useEffect(()=>{const l=r.some(h=>h!==!1);a(l&&r.find(h=>h!==!1)||!1)},[r]),A.useEffect(()=>{const l=f.reduce((h,y)=>h+(Ro[y]||0),0);l===0?i(Y.off):l<16?i(Y.standby):l<256?i(Y.running):l%256===0?i(Y.done):l%256%16===0?i(Y.running):l%256%2===0?i(Y.done):i(Y.running)},[f]);const m=n.map(l=>({label:l.name,state:l.state}));return[o,m,d]},Do=e=>{const[n,o]=A.useState("off"),[i,d]=A.useState(!1),a=at&&e,f=Oo(e);return A.useEffect(()=>{!a||!f||M(f).then(r=>{o(r.data.state),d(!1)}).catch(r=>{d(G(r))})},[e,a,f]),A.useEffect(()=>{let r=null,m=null,l=!0,h=null,y=0,j=!1;async function S(){if(!a||!e||j)return;if(r){try{m&&(m(),m=null),r.close()}catch{}r=null}j=!0;let w;if(typeof window<"u"&&window.location){const c=window.location.pathname.replace(/\/$/,"");w=`${window.location.origin}${c}`}else w="";const g=ue||K||"";if(!g){j=!1;return}try{const c=le(w,g);r=await de({auth:c}),r.addEventListener("ready",()=>{l&&(O.debug(`WebSocket connection ready for ${e}`),y=0,d(!1))}),r.addEventListener("disconnected",()=>{if(l&&!j){O.debug(`WebSocket disconnected for ${e}, will attempt to reconnect`),h&&clearTimeout(h),r=null,m=null;const s=Math.min(1e3*Math.pow(2,y),3e4);y++,h=setTimeout(()=>{l&&!j&&(O.debug(`Attempting to reconnect WebSocket for ${e} (attempt ${y})`),S())},s)}});const u=s=>{l&&o(s.variables.trigger.to_state.state)};m=await r.subscribeMessage(u,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),j=!1}catch(c){if(j=!1,l){O.error(`Failed to setup WebSocket connection for ${e}:`,c),d(c instanceof Error?c.message:String(c));const u=Math.min(1e3*Math.pow(2,y),3e4);y++,h=setTimeout(()=>{l&&S()},u)}}}return S(),()=>{l=!1,h&&clearTimeout(h),m&&m(),r&&r.close()}},[e,a]),[n,i]},_o=R.div`
  padding-bottom: 12px;

  @media only screen and (max-width: 1200px) {
    h2 {
      display: none;
    }
  }
  
  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    span {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 1200px) {
      span {
        display: none;
      }
    }
  }

  &.disabled {
    cursor: default;
    
    .status {
      cursor: default;
      opacity: 0.6;
    }
  }

  .animate {
    svg {
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      0% {
        rotate: 0;
      }
      100% {
        rotate: 360deg;
      }
    }
  }

  .states {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-content: space-between;
    column-gap: 2rem;
    
    h2 {
      grid-column: 1 / -1;
      text-align: center;
      margin: 0 0 1rem 0;
      padding: 1rem 0;
      font-size: 2rem;
      font-weight: 400;
      color: #ffffff;
      display: block;
      width: 100%;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: .4rem 1rem;
      border-radius: 12px;
    }
  }
  
  .subtitle {
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }
`,Mo=()=>{if(!at)return null;const[e,n,o]=No(),[i,d]=A.useState(!1),a=L.useCallback(()=>{o===!1&&d(!0)},[o]),f=L.useCallback(()=>d(!1),[]);return t.jsxs(_o,{className:V({disabled:o!==!1}),children:[t.jsx("h2",{children:"Wäsche"}),t.jsx("div",{className:"status",onClick:a,children:o!==!1?t.jsxs(t.Fragment,{children:[t.jsx(B,{path:Re,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:V({animate:e.animate}),children:t.jsx(B,{path:e.icon,size:"2rem",color:"#ffffff"})}),t.jsx("span",{children:e.label})]})}),t.jsx(fe,{visible:i&&o===!1,onClick:f,children:t.jsxs("div",{className:"states",children:[t.jsx("h2",{children:"Wäsche"}),n.map((r,m)=>t.jsxs("div",{children:[t.jsx("div",{className:"subtitle",children:r.label}),t.jsx("div",{className:V({animate:Y[r.state].animate}),children:t.jsx(B,{path:Y[r.state].icon,size:2})}),t.jsx("div",{children:Y[r.state].label})]},m))]})})]})},$o=L.memo(Mo),Po=R.div`
  padding: 0 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow-y: auto;

  .top-content {
    flex-shrink: 0;
  }

  .top-content > * + * {
    margin-top: 24px;
  }
  
  h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  
  .two-cols {
    display: flex;
    margin-top: auto;
    flex-shrink: 0;

    @media only screen and (max-width: 1200px) {
      margin-top: 3rem;
    }
    
    > * {
      width: 50%;
    }
    
    > *:nth-child(1) {
      padding-right: 6px;
    }

    > *:nth-child(2) {
      padding-left: 6px;
    }
  }
`,Wo=()=>t.jsxs(Po,{children:[t.jsxs("div",{className:"top-content",children:[t.jsx(Qn,{}),t.jsx(uo,{}),t.jsx(bo,{})]}),t.jsxs("div",{className:"two-cols",children:[t.jsx(Lo,{}),t.jsx($o,{})]})]}),Io=L.memo(Wo),Ye=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],Fo=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],xe={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},Vo={landscape:"L",portrait:"P",wide:"W"},zo=R.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Bo=R.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Go=R.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,ie=R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,re=R.label`
  font-size: 0.9rem;
  color: #cccccc;
`,Ke=R.select`
  padding: 8px 12px;
  background-color: #3a3a3a;
  color: #ffffff;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4A90E2;
  }
`,Xe=R.input`
  padding: 8px 12px;
  background-color: #3a3a3a;
  color: #ffffff;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4A90E2;
  }
`,Ho=R.button`
  padding: 10px 20px;
  background-color: #4A90E2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #357ABD;
  }
  
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`,qe=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Uo=R.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?"#4A90E2":"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?"#4A90E2":"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.active?"#357ABD":"#4a4a4a"};
  }
`,Yo=R.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Ko=R.div`
  position: absolute;
  background-color: ${e=>xe[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,Xo=R.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,qo=R.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Jo=R.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,he=R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pe=R.div`
  font-size: 0.85rem;
  color: #cccccc;
`,me=R.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Qo=R.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Zo=R.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;R.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;const ke=R.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?xe[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?xe[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?xe[e.orientation]:"#4a4a4a"};
  }
`,Je=()=>{const[e,n]=L.useState(1920),[o,i]=L.useState(1080),[d,a]=L.useState("Full HD"),[f,r]=L.useState(""),[m,l]=L.useState(""),[h,y]=L.useState([{orientation:"landscape"}]),[j,S]=L.useState(null),w=L.useMemo(()=>ft(h,e,o),[h,e,o]),g=p=>{const E=Ye.find(T=>T.name===p);E&&E.width&&E.height?(n(E.width),i(E.height),a(p),r(""),l("")):p==="Custom"&&a("Custom")},c=()=>{const p=parseInt(f),E=parseInt(m);p>0&&E>0&&(n(p),i(E))},u=p=>{y(p.videos),S(p.name)},s=p=>{const E=[];for(let T=0;T<p;T++)E.push(h[T]||{orientation:"landscape"});y(E),S(null)},x=(p,E)=>{const T=[...h];T[p]={orientation:E},y(T),S(null)},b=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/o));return t.jsxs(zo,{children:[t.jsx(Bo,{children:"Video Tiling Algorithm Demo"}),t.jsxs(Go,{children:[t.jsxs(ie,{children:[t.jsx(re,{children:"Screen Size Preset"}),t.jsx(Ke,{value:d,onChange:p=>g(p.target.value),children:Ye.map(p=>t.jsx("option",{value:p.name,children:p.name},p.name))})]}),d==="Custom"&&t.jsxs(t.Fragment,{children:[t.jsxs(ie,{children:[t.jsx(re,{children:"Custom Width"}),t.jsx(Xe,{type:"number",value:f,onChange:p=>r(p.target.value),placeholder:"Width",min:"100"})]}),t.jsxs(ie,{children:[t.jsx(re,{children:"Custom Height"}),t.jsx(Xe,{type:"number",value:m,onChange:p=>l(p.target.value),placeholder:"Height",min:"100"})]}),t.jsxs(ie,{children:[t.jsx(re,{children:" "}),t.jsx(Ho,{onClick:c,children:"Apply Custom Size"})]})]}),t.jsxs(ie,{children:[t.jsx(re,{children:"Number of Videos"}),t.jsxs(Ke,{value:h.length,onChange:p=>s(parseInt(p.target.value)),children:[t.jsx("option",{value:"1",children:"1 Video"}),t.jsx("option",{value:"2",children:"2 Videos"}),t.jsx("option",{value:"3",children:"3 Videos"}),t.jsx("option",{value:"4",children:"4 Videos"})]})]}),h.map((p,E)=>t.jsxs(ie,{children:[t.jsxs(re,{children:["Video ",E+1," Orientation"]}),t.jsxs(qe,{children:[t.jsx(ke,{active:p.orientation==="landscape",orientation:"landscape",onClick:()=>x(E,"landscape"),children:"Landscape"}),t.jsx(ke,{active:p.orientation==="portrait",orientation:"portrait",onClick:()=>x(E,"portrait"),children:"Portrait"}),t.jsx(ke,{active:p.orientation==="wide",orientation:"wide",onClick:()=>x(E,"wide"),children:"Wide"})]})]},E))]}),t.jsxs(Qo,{children:[t.jsx(Zo,{children:"Test Scenarios"}),t.jsx(qe,{children:Fo.map(p=>t.jsx(Uo,{active:j===p.name,onClick:()=>u(p),children:p.name},p.name))})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:t.jsx(Yo,{style:{width:`${e*b}px`,height:`${o*b}px`},children:w.videos.map((p,E)=>t.jsxs(Ko,{orientation:p.orientation,style:{left:`${p.x*b}px`,top:`${p.y*b}px`,width:`${p.width*b}px`,height:`${p.height*b}px`},children:[t.jsxs(Xo,{children:[Vo[p.orientation]," ",E+1]}),t.jsxs(qo,{children:[Math.round(p.width)," × ",Math.round(p.height)]})]},E))})}),t.jsxs(Jo,{children:[t.jsxs(he,{children:[t.jsx(pe,{children:"Canvas Size"}),t.jsxs(me,{children:[e," × ",o]})]}),t.jsxs(he,{children:[t.jsx(pe,{children:"Total Area Used"}),t.jsxs(me,{children:[Math.round(w.totalArea).toLocaleString()," px²"]})]}),t.jsxs(he,{children:[t.jsx(pe,{children:"Efficiency"}),t.jsxs(me,{children:[w.efficiency.toFixed(2),"%"]})]}),t.jsxs(he,{children:[t.jsx(pe,{children:"Display Scale"}),t.jsxs(me,{children:[(b*100).toFixed(1),"%"]})]})]})]})},ei=()=>{function e(o,i){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(i))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[a,f]=i.split(":").map(Number),r=new Date;let m=new Date(r.getFullYear(),r.getMonth(),r.getDate());m.setHours(a,f,0,0),m<=r&&m.setDate(m.getDate()+1);const l=m.getTime()-r.getTime();return setTimeout(o,l)}const n=()=>{window.location.reload(!0)};A.useLayoutEffect(()=>{const o=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{o.forEach(i=>{i&&clearTimeout(i)})}},[])},ti=R.div`
  padding: 2rem;
  text-align: center;
  color: #ffffff;
  background-color: #2f2f2f;
  border-radius: 4px;
  margin: 2rem;
  
  h2 {
    color: #f85a5a;
    margin-bottom: 1rem;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #356957;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    
    &:hover {
      background-color: #2d5547;
    }
  }
`;class be extends A.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,o){this.setState({error:n,errorInfo:o}),O.error("ErrorBoundary caught an error:",n,o)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?t.jsxs(ti,{children:[t.jsx("h2",{children:"Something went wrong"}),t.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,t.jsxs("div",{children:[t.jsx("button",{onClick:this.handleReset,children:"Try Again"}),t.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const ni=Ct`
  body {
    margin: 0;
    padding: 0;
    font-family: Lato, Helvetica, sans-serif;
    background-color: #1c1c1c;
    color: #ffffff;
  }

  #root {
    min-width: 100vw;
    box-sizing: border-box;
  }
`,oi=R.div`
  padding: 0 12px;
  min-width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .main {
    display: grid;
    grid-template-columns: 1fr 300px;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  @media only screen and (max-width: 1200px) {
    .main {
      grid-template-columns: 1fr 150px;
    }
  }
`;function ii(){return ei(),t.jsxs(oi,{children:[t.jsx(ni,{}),t.jsxs("div",{className:"main",children:[t.jsx(be,{children:t.jsx(Un,{})}),t.jsx(be,{children:t.jsx(Io,{})})]}),t.jsx(Ot,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function ri(){return t.jsx(be,{children:t.jsxs(Lt,{children:[t.jsx(je,{path:"/demo",element:t.jsx(Je,{})}),t.jsx(je,{path:"/tiling-demo",element:t.jsx(Je,{})}),t.jsx(je,{path:"*",element:t.jsx(ii,{})})]})})}const si=Rt.createRoot(document.getElementById("root"));si.render(t.jsx(A.StrictMode,{children:t.jsx(be,{children:t.jsx(Nt,{children:t.jsx(ri,{})})})}));
