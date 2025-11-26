import{d as v,j as t,I as Y,R as E,l as Be,r as O,P as ct,W as dt,b as ht,e as ft,f as ut,h as pt,i as mt,k as gt,m as xt,n as wt,o as yt,T as bt,p as jt,s as Et,y as At,q as St,t as Lt,u as ge,L as Tt,v as kt,B as Ct}from"./react-vendor-SoRfWBCf.js";import{D as M}from"./date-vendor-BDx6lZXm.js";import{n as $}from"./vendor-DXU8y-C2.js";import{m as vt,a as Dt,b as Ot,c as Rt,d as Nt,e as Wt,f as He,g as Mt,h as Pt,i as _t,j as It,k as Vt,l as $t,n as Te,o as Ft,p as zt}from"./ui-vendor-DhGbN51c.js";import{a as _,q as Bt,B as Ht,h as Gt}from"./utils-vendor-Cy1MG2Zy.js";import{c as Ge,a as Ue}from"./ha-vendor-CoU0AojH.js";import{t as Ut}from"./chart-vendor-ClWajKr-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const Yt=v.div`
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
  visibility: hidden;
  z-index: 10;
  
  &.visible {
    visibility: visible;
  }
  
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
    z-index: 1;
    background-color: rgba(0,0,0,.6);
    
    svg {
      color: white;
    }
  }
`,se=({visible:e,children:i,onClick:o,fullsize:n=!1})=>t.jsxs(Yt,{className:$({visible:e}),onClick:o,children:[t.jsx("div",{className:"close",children:t.jsx(Y,{path:vt,size:2,onClick:o})}),t.jsx("div",{className:$("content",{fullsize:n}),onClick:s=>s.stopPropagation(),children:i})]}),P={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},Ye=e=>{const i={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1};return e.response?(i.status=e.response.status,i.responseData=e.response.data,i.url=e.config?.url||e.request?.responseURL||"Unknown URL",i.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(i.isNetworkError=!0,i.url=e.config?.url||"Unknown URL",i.message="Network error: No response received from server"):(i.message=e.message||"Request setup error",i.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(i.isTimeoutError=!0,i.message="Request timeout: The request took too long to complete"),i},Kt=(e,i="")=>{const o=Ye(e),n=[];return i&&n.push(`[${i}]`),n.push("Axios API Error:"),n.push(o.message),o.url&&n.push(`URL: ${o.url}`),o.status&&n.push(`Status: ${o.status}`),o.responseData&&n.push("Response:",o.responseData),P.error(...n),o},Q=e=>{const i=Ye(e);return i.isNetworkError?"":i.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":i.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":i.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":i.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":i.status>=500?"Serverfehler: Bitte später erneut versuchen":i.message||"Ein Fehler ist aufgetreten"},Xt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Ke=!1,W=(e,i=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[e]!==void 0){const n=window.APP_CONFIG[e];return n==="undefined"||n==="null"?i:n??i}return i}const o=Xt[`VITE_${e}`];return e==="HASS_ACCESS_TOKEN"&&o!==void 0?i:o!==void 0?o:i},qt=(e,i=!1)=>{const o=W(e,i);return typeof o=="boolean"?o:typeof o=="string"?o==="true"||o==="1"||o==="yes":!!o},Xe=W("HASS_HOST",""),J=W("HASS_ACCESS_TOKEN",""),Jt=J&&typeof J=="string"&&J.trim()!==""&&J!=="undefined"&&J!=="null";Jt?_.defaults.headers.common.Authorization=`Bearer ${J}`:delete _.defaults.headers.common.Authorization;_.interceptors.response.use(e=>e,e=>{const i=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";return Kt(e,i),Promise.reject(e)});const qe=W("WEATHER_API_KEY"),Je=W("WEATHER_LATITUDE"),Qe=W("WEATHER_LONGITUDE"),je=W("GEOFOX_SECRET"),Ze=W("GEOFOX_USER"),G=W("ENTITY_GARAGE_DOOR"),oe=W("ENTITY_DOORBELL"),ke=W("ENTITY_DOORBELL_BUTTON"),Ee=W("ENTITY_EVERYDAY_CALENDAR"),Qt=(()=>{const e=W("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),fe=(()=>{const e=W("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),Zt=W("GO2RTC_BASE_URL","http://192.168.188.10:1984"),ie=(()=>{const e=W("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),te=(e,i)=>W(e,void 0)!==void 0?qt(e,!1):!1,et=te("ENABLE_WEATHER"),tt=te("ENABLE_HVV"),it=te("ENABLE_GARAGE"),ot=te("ENABLE_LAUNDRY",Array.isArray(fe)&&fe.length>0),nt=te("ENABLE_DOORBELL"),rt=te("ENABLE_EVERYDAY_CALENDAR"),X=e=>{const i=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const o=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${o}${i}`}return i}},ne=Ee?X(`/api/states/${Ee}`):null,ei=()=>{const[e,i]=E.useState(null),[o,n]=E.useState(!1),s=rt&&Ee;return E.useEffect(()=>{!s||!ne||_(ne).then(a=>{a.data.attributes.store!==void 0?i(a.data.attributes.store):i([]),n(!1)}).catch(a=>{n(Q(a)),i([])})},[s,ne]),[e,o]},ti=e=>{ne&&_.post(ne,{state:new Date,attributes:{store:e}}).catch(i=>{P.error("Failed to store everyday calendar data:",i)})},Ce=v.div` 

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
`,ii=({on:e,month:i,day:o})=>{const[n,s]=e,a=n.indexOf(`${i}-${o}`),d=a>-1,l=()=>{s(d?n.toSpliced(a,1):[...n,`${i}-${o}`])};return t.jsx("div",{className:$("dot",{on:d}),onClick:()=>l()})},oi=()=>{if(!rt)return null;const e=new Date().getFullYear(),i=[];for(let l=1;l<13;l++){const w=new Date(e,l,0).getDate();for(let f=1;f<=w;f++)i.push({month:l,day:f})}const o=Array.from({length:31},(l,w)=>w+1),n=Array.from({length:12},(l,w)=>w+1),s=E.useState(void 0),[a,d]=ei();return E.useEffect(()=>{a!==null&&s[1](a)},[a]),E.useEffect(()=>{s[0]!==void 0&&ti(s[0])},[s[0]]),s[0]!==void 0?t.jsxs(Ce,{children:[t.jsx("h2",{children:"Jeden Tag ein bißchen"}),d!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:d instanceof Error?d.message:String(d)})]}),t.jsxs("div",{className:"calendar",children:[o.map((l,w)=>t.jsx("div",{style:{gridArea:`${l+1} / 1 / ${l+1} / 1`},children:l},w)),n.map((l,w)=>t.jsx("div",{style:{gridArea:`1 / ${l+1} / 1 / ${l+1}`},children:l},w)),i.map((l,w)=>t.jsx("div",{style:{gridArea:`${l.day+1} / ${l.month+1} / ${l.day+1} / ${l.month+1}`},children:t.jsx(ii,{on:s,month:l.month,day:l.day})},w))]})]}):t.jsx(Ce,{className:"loading",children:d!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:d instanceof Error?d.message:String(d)})]}):t.jsx(Be,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},ni=v.div`
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
  }`,ri=()=>{const[e,i]=E.useState(M.now()),[o,n]=E.useState(!1),s=O.useCallback(()=>n(!0),[]),a=O.useCallback(()=>n(!1),[]);return E.useEffect(()=>{const d=setInterval(()=>i(M.now()),1e3);return()=>clearInterval(d)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(ni,{onClick:s,children:[e.toFormat("HH"),t.jsx("span",{children:":"}),e.toFormat("mm")]}),t.jsx(se,{visible:o,onClick:a,fullsize:!0,children:t.jsx(oi,{})})]})},si=O.memo(ri),xe=oe?X(`/api/states/${oe}`):null,ai=()=>{const[e,i]=E.useState("off"),[o,n]=E.useState(!1),s=nt&&oe;return E.useEffect(()=>{!s||!xe||_(xe).then(a=>{i(a.data.state),n(!1)}).catch(a=>{n(Q(a))})},[s,xe]),E.useEffect(()=>{let a=null,d=!0;async function l(){if(!s||!oe)return;let w;try{if(!Ke){P.debug("Skipping WebSocket connection in production mode (using REST API only)");return}const f=Xe||(typeof window<"u"?window.location.origin:""),p=J||"";if(!p){P.debug("Skipping WebSocket connection - no access token (using REST API only)");return}w=Ge(f,p),d&&n(!1)}catch(f){d&&(P.error("Failed to create WebSocket auth:",f),n(f instanceof Error?f.message:String(f)));return}try{a=await Ue({auth:w});const f=p=>{d&&i(p.variables.trigger.to_state.state)};await a.subscribeMessage(f,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:oe}})}catch(f){d&&(P.error("Failed to setup WebSocket connection:",f),n(f instanceof Error?f.message:String(f)))}}return l(),()=>{d=!1,a&&a.close()}},[s]),[e,o]},li=()=>{ke&&_.post(X("/api/services/button/press"),{entity_id:ke}).catch(e=>{P.error("Failed to unlatch front door:",e)})},ci=e=>{if(!e)return"";if(!e.includes("/")&&!e.includes(":"))return e;const i=e.match(/\/([^\/]+?)(?:\/whep)?(?:\?|$)/);return i?i[1]:e.split("?")[0].split("/").filter(Boolean).pop()||e},di=({src:e,show:i,orientation:o="landscape",...n})=>{const s=ci(e),a=`${Zt}/stream.html?src=${s}`;return i?t.jsx("iframe",{src:a,className:o,allow:"autoplay; fullscreen",...n}):null},D={portrait:360/480,landscape:1920/1072,wide:770/216};function hi(e){const i={landscape:0,portrait:0,wide:0};return e.forEach(o=>{o.orientation&&i.hasOwnProperty(o.orientation)&&i[o.orientation]++}),i}function st(e,i,o){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const n=e.length,s=hi(e);return n===1?fi(e[0],i,o):n===2?ui(s,e,i,o):n===3?pi(s,e,i,o):n===4?mi(s,e,i,o):{videos:[],totalArea:0,efficiency:0}}function fi(e,i,o){const n=D[e.orientation];let s,a;const d=i/o;return n>d?(s=i,a=i/n):(a=o,s=o*n),{videos:[{x:(i-s)/2,y:(o-a)/2,width:s,height:a,orientation:e.orientation}],totalArea:s*a,efficiency:s*a/(i*o)*100}}function ui(e,i,o,n){if(e.portrait>0)return Se(e,i,o,n);const s=[];e.landscape>0&&s.push("landscape"),e.wide>0&&s.push("wide");const a=s[0]||i[0].orientation,d=s[1]||i[1].orientation,l=D[a],w=D[d];if(e.landscape===1&&e.wide===1){const b=D.landscape,y=D.wide,u=o,m=u/b,r=u/y,h=m+r;let x,c,g;if(h<=n)x=m,c=r,g=u;else{const I=n/h;x=m*I,c=r*I,g=c*y}const j=(o-g)/2,T=U(i,[{x:j,y:0,width:g,height:c,orientation:"wide"},{x:j,y:c,width:g,height:x,orientation:"landscape"}]),C=g*x+g*c,R=C/(o*n)*100;return{videos:T,totalArea:C,efficiency:R}}if(e.wide===2){const b=D.wide,y=o,u=y/b,m=u*2;let r;m<=n?r=u:r=n/2;const x=U(i,[{x:0,y:0,width:y,height:r,orientation:"wide"},{x:0,y:r,width:y,height:r,orientation:"wide"}]),c=y*r*2,g=c/(o*n)*100;return{videos:x,totalArea:c,efficiency:g}}const f=[()=>{const b=o,y=b/2,u=b/2,m=y/l,r=u/w;return Math.max(m,r)<=n?{positions:[{x:0,y:(n-m)/2,width:y,height:m,orientation:a},{x:y,y:(n-r)/2,width:u,height:r,orientation:d}],totalArea:y*m+u*r}:null},()=>{const b=n,y=b/2,u=b/2,m=y*l,r=u*w;return Math.max(m,r)<=o?{positions:[{x:(o-m)/2,y:0,width:m,height:y,orientation:a},{x:(o-r)/2,y,width:r,height:u,orientation:d}],totalArea:m*y+r*u}:null}];let p=null,A=0;for(const b of f){const y=b();y&&y.totalArea>A&&(A=y.totalArea,p=y)}if(!p){const b=o/2,y=o/2,u=Math.min(b/l,n),m=Math.min(y/w,n);p={positions:[{x:0,y:(n-u)/2,width:b,height:u,orientation:a},{x:b,y:(n-m)/2,width:y,height:m,orientation:d}],totalArea:b*u+y*m}}const L=U(i,p.positions),k=p.totalArea/(o*n)*100;return{videos:L,totalArea:p.totalArea,efficiency:k}}function Se(e,i,o,n){const s=e.portrait,a=i.length-s;if((s===3||s===4)&&a===0){const k=D.portrait,b=o/s,y=b/k,u=y<n?(n-y)/2:0,m=Math.min(y,n),r=[];let h=0;for(let g=0;g<s;g++){const j=Math.min(b,m*k);r.push({x:g*b+(b-j)/2,y:u,width:j,height:m,orientation:"portrait"}),h+=j*m}const x=U(i,r),c=h/(o*n)*100;return{videos:x,totalArea:h,efficiency:c}}i.filter(k=>k.orientation==="portrait");const d=i.filter(k=>k.orientation!=="portrait"),l=s>0?Math.min(o*.4,o*.5):0,w=o-l,f=[];let p=0;if(s===2&&a===0){const k=D.portrait,b=o/2,y=b/k,u=n;let m,r;y<=u?(r=y,m=b):(r=u,m=u*k);const h=(n-r)/2;f.push({x:(b-m)/2,y:h,width:m,height:r,orientation:"portrait"}),f.push({x:b+(b-m)/2,y:h,width:m,height:r,orientation:"portrait"}),p=m*r*2}else if(s===1&&a===1){const k=D.portrait,b=d[0],y=D[b.orientation],u=k+y,m=o*(k/u),r=o*(y/u),h=m/k,x=r/y,c=Math.min(n,Math.min(h,x)),g=(n-c)/2;f.push({x:0,y:g,width:m,height:c,orientation:"portrait"}),f.push({x:m,y:g,width:r,height:c,orientation:b.orientation}),p=m*c+r*c}else if(s===1&&a===2&&e.landscape===1&&e.wide===1){const k=D.portrait,b=D.wide,y=D.landscape,u=n,m=n*k,r=n/(1/b+1/y),h=r/b,x=r/y,c=m+r;if(Math.abs(c-o)<.1)f.push({x:0,y:0,width:m,height:u,orientation:"portrait"}),p+=m*u,d.find(T=>T.orientation==="wide")&&(f.push({x:0+m,y:0,width:r,height:h,orientation:"wide"}),p+=r*h),d.find(T=>T.orientation==="landscape")&&(f.push({x:0+m,y:h,width:r,height:x,orientation:"landscape"}),p+=r*x);else{const g=o/c,j=m*g,S=j/k,T=r*g,C=n/S;let R=j*C,I=n,N=T*C,F=N/b,V=N/y,z=R+N;if(z>o){const K=o/z;R=R*K,I=R/k,N=N*K,F=N/b,V=N/y,z=R+N,z>o&&(N=o-R,F=N/b,V=N/y)}const q=R+N;if(q>o){const K=o/q;R=R*K,I=R/k,N=N*K,F=N/b,V=N/y}const B=0;f.push({x:B,y:0,width:R,height:I,orientation:"portrait"}),p+=R*I,d.find(K=>K.orientation==="wide")&&(f.push({x:B+R,y:0,width:N,height:F,orientation:"wide"}),p+=N*F),d.find(K=>K.orientation==="landscape")&&(f.push({x:B+R,y:F,width:N,height:V,orientation:"landscape"}),p+=N*V)}}else if(s===1&&a===3){const k=D.portrait,b=n,y=b*k,u=y,m=o-u;f.push({x:0,y:0,width:y,height:b,orientation:"portrait"}),p+=y*b;const r=n/3;for(let h=0;h<d.length;h++){const x=d[h],c=D[x.orientation],g=r,j=m;let S,T;j/c<=g?(S=j,T=S/c):(T=g,S=T*c);const C=h*r+(r-T)/2;f.push({x:u+(m-S)/2,y:C,width:S,height:T,orientation:x.orientation}),p+=S*T}}else if(s===2&&a===1){const k=D.portrait,b=d[0],y=D[b.orientation],u=n/2,m=u*k,r=o-m,h=n*y;let x,c;h<=r?(c=n,x=c*y):(x=r,c=x/y);const g=m,j=u,S=(n-c)/2,T=(n/2-j)/2,C=n/2+(n/2-j)/2;f.push({x:0,y:S,width:x,height:c,orientation:b.orientation}),p+=x*c,f.push({x:r,y:T,width:g,height:j,orientation:"portrait"}),p+=g*j,f.push({x:r,y:C,width:g,height:j,orientation:"portrait"}),p+=g*j}else if(s===1&&a===2){const k=D.portrait,b=n,y=b*k,u=y,m=o-u;f.push({x:0,y:0,width:y,height:b,orientation:"portrait"}),p+=y*b;const r=n/2;for(let h=0;h<d.length;h++){const x=d[h],c=D[x.orientation],g=r,j=m;let S,T;j/c<=g?(S=j,T=S/c):(T=g,S=T*c);const C=h*r+(r-T)/2;f.push({x:u+(m-S)/2,y:C,width:S,height:T,orientation:x.orientation}),p+=S*T}}else{const k=s;if(k>0){const b=n/k,y=D.portrait;for(let u=0;u<k;u++){const m=Math.min(b,l/y),r=m*y,h=u*b+(b-m)/2;f.push({x:(l-r)/2,y:h,width:r,height:m,orientation:"portrait"}),p+=r*m}}if(d.length>0){const b=n/d.length;for(let y=0;y<d.length;y++){const u=d[y],m=D[u.orientation],r=b,h=w;let x,c;h/m<=r?(x=h,c=x/m):(c=r,x=c*m);const g=y*b+(b-c)/2;f.push({x:l+(w-x)/2,y:g,width:x,height:c,orientation:u.orientation}),p+=x*c}}}const A=U(i,f),L=p/(o*n)*100;return{videos:A,totalArea:p,efficiency:L}}function U(e,i){const o=new Array(i.length),n=new Set,s=new Set;for(let l=0;l<i.length;l++){const w=i[l];for(let f=0;f<e.length;f++)if(!n.has(f)&&e[f].orientation===w.orientation){o[l]={...w,orientation:e[f].orientation},n.add(f),s.add(l);break}}const a=[];for(let l=0;l<i.length;l++)s.has(l)||a.push(l);let d=0;for(let l=0;l<e.length;l++)if(!n.has(l)&&d<a.length){const w=a[d];o[w]={...i[w],orientation:e[l].orientation},d++}return o}function pi(e,i,o,n){if(e.portrait>0)return Se(e,i,o,n);if(e.landscape===2&&e.wide===1){const u=D.landscape,m=D.wide,r=o,h=r/m,x=n-h,c=o/2,g=c/u;let j,S,T,C;if(h<=n&&g<=x)j=r,S=h,T=c,C=g;else{const q=n/(h+g),B=Math.min(1,q);S=h*B,j=S*m,C=g*B,T=C*u}const R=(o-j)/2,I=S+(x-C)/2,F=U(i,[{x:R,y:0,width:j,height:S,orientation:"wide"},{x:0,y:I,width:T,height:C,orientation:"landscape"},{x:T,y:I,width:T,height:C,orientation:"landscape"}]),V=j*S+T*C*2,z=V/(o*n)*100;return{videos:F,totalArea:V,efficiency:z}}if(e.landscape===1&&e.wide===2){const u=D.landscape,m=D.wide,r=o/2,h=r/m,c=n-h,g=c*u;let j,S,T,C;if(h<=n&&g<=o&&h+c<=n)j=r,S=h,T=g,C=c;else{const B=h+c,me=n/B;j=r,S=h*me,C=c*me,T=C*u}const R=0,I=o/2,N=(o-T)/2,V=U(i,[{x:R,y:0,width:j,height:S,orientation:"wide"},{x:I,y:0,width:j,height:S,orientation:"wide"},{x:N,y:S,width:T,height:C,orientation:"landscape"}]),z=j*S*2+T*C,q=z/(o*n)*100;return{videos:V,totalArea:z,efficiency:q}}if(e.wide===3){const u=D.wide,m=o/2,r=m/u,x=n-r,c=x*u;let g,j,S,T;if(r<=n&&c<=o&&r+x<=n)g=m,j=r,S=c,T=x;else{const q=r+x,B=n/q;g=m,j=r*B,T=x*B,S=T*u,S>o&&(S=o,T=S/u)}const C=0,R=o/2,I=(o-S)/2,F=U(i,[{x:C,y:0,width:g,height:j,orientation:"wide"},{x:R,y:0,width:g,height:j,orientation:"wide"},{x:I,y:j,width:S,height:T,orientation:"wide"}]),V=g*j*2+S*T,z=V/(o*n)*100;return{videos:F,totalArea:V,efficiency:z}}if(e.landscape===3){const u=D.landscape,m=o/(u*1.5),r=Math.min(n,m),h=r/2,x=r,c=h*u,g=x*u,j=(n-r)/2,S=[{x:0,y:j,width:c,height:h,orientation:"landscape"},{x:0,y:j+h,width:c,height:h,orientation:"landscape"},{x:c,y:j,width:g,height:x,orientation:"landscape"}],T=U(i,S),C=c*r+g*r,R=C/(o*n)*100;return{videos:T,totalArea:C,efficiency:R}}const s=[];if(e.landscape>0)for(let u=0;u<e.landscape;u++)s.push("landscape");if(e.wide>0)for(let u=0;u<e.wide;u++)s.push("wide");const a=s[0]||i[0].orientation,d=s[1]||i[1].orientation,l=s[2]||i[2].orientation,w=D[a],f=D[d],p=D[l],A=[()=>{const u=o*.6,m=o*.4,r=u/w,h=m/f,x=m/p,c=h+x;return r<=n&&c<=n?{positions:[{x:0,y:(n-r)/2,width:u,height:r,orientation:a},{x:u,y:0,width:m,height:h,orientation:d},{x:u,y:h,width:m,height:x,orientation:l}],totalArea:u*r+m*h+m*x}:null},()=>{const u=n*.5,m=n*.5,r=u*w,h=u*f,x=m*p;return r+h<=o&&x<=o?{positions:[{x:0,y:0,width:r,height:u,orientation:a},{x:r,y:0,width:h,height:u,orientation:d},{x:(o-x)/2,y:u,width:x,height:m,orientation:l}],totalArea:r*u+h*u+x*m}:null},()=>{const u=o/3,m=u/w,r=u/f,h=u/p;return Math.max(m,r,h)<=n?{positions:[{x:0,y:(n-m)/2,width:u,height:m,orientation:a},{x:u,y:(n-r)/2,width:u,height:r,orientation:d},{x:u*2,y:(n-h)/2,width:u,height:h,orientation:l}],totalArea:u*m+u*r+u*h}:null}];let L=null,k=0;for(const u of A){const m=u();m&&m.totalArea>k&&(k=m.totalArea,L=m)}if(!L){const u=o/3,m=Math.min(u/w,n),r=Math.min(u/f,n),h=Math.min(u/p,n);L={positions:[{x:0,y:(n-m)/2,width:u,height:m,orientation:a},{x:u,y:(n-r)/2,width:u,height:r,orientation:d},{x:u*2,y:(n-h)/2,width:u,height:h,orientation:l}],totalArea:u*m+u*r+u*h}}const b=U(i,L.positions),y=L.totalArea/(o*n)*100;return{videos:b,totalArea:L.totalArea,efficiency:y}}function mi(e,i,o,n){if(e.portrait>0)return Se(e,i,o,n);const s=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)s.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)s.push("wide");const a=s[0]||i[0].orientation,d=s[1]||i[1].orientation,l=s[2]||i[2].orientation,w=s[3]||i[3].orientation,f=D[a],p=D[d],A=D[l],L=D[w],k=[()=>{const r=o/2,h=n/2,x=Math.min(r,h*f),c=x/f,g=Math.min(r,h*p),j=g/p,S=Math.min(r,h*A),T=S/A,C=Math.min(r,h*L),R=C/L;return{positions:[{x:(r-x)/2,y:(h-c)/2,width:x,height:c,orientation:a},{x:r+(r-g)/2,y:(h-j)/2,width:g,height:j,orientation:d},{x:(r-S)/2,y:h+(h-T)/2,width:S,height:T,orientation:l},{x:r+(r-C)/2,y:h+(h-R)/2,width:C,height:R,orientation:w}],totalArea:x*c+g*j+S*T+C*R}},()=>{const r=o*.6,h=o*.4,x=r/f,c=n/3,g=Math.min(h,c*p),j=g/p,S=Math.min(h,c*A),T=S/A,C=Math.min(h,c*L),R=C/L;return x<=n?{positions:[{x:0,y:(n-x)/2,width:r,height:x,orientation:a},{x:r,y:0,width:g,height:j,orientation:d},{x:r,y:c,width:S,height:T,orientation:l},{x:r,y:c*2,width:C,height:R,orientation:w}],totalArea:r*x+g*j+S*T+C*R}:null},()=>{const r=o/4,h=r/f,x=r/p,c=r/A,g=r/L;return Math.max(h,x,c,g)<=n?{positions:[{x:0,y:(n-h)/2,width:r,height:h,orientation:a},{x:r,y:(n-x)/2,width:r,height:x,orientation:d},{x:r*2,y:(n-c)/2,width:r,height:c,orientation:l},{x:r*3,y:(n-g)/2,width:r,height:g,orientation:w}],totalArea:r*h+r*x+r*c+r*g}:null}];let b=null,y=0;for(const r of k){const h=r();h&&h.totalArea>y&&(y=h.totalArea,b=h)}if(!b){const r=o/2,h=n/2,x=Math.min(h,r/f),c=Math.min(h,r/p),g=Math.min(h,r/A),j=Math.min(h,r/L);b={positions:[{x:(r-r)/2,y:(h-x)/2,width:r,height:x,orientation:a},{x:r+(r-r)/2,y:(h-c)/2,width:r,height:c,orientation:d},{x:(r-r)/2,y:h+(h-g)/2,width:r,height:g,orientation:l},{x:r+(r-r)/2,y:h+(h-j)/2,width:r,height:j,orientation:w}],totalArea:r*x+r*c+r*g+r*j}}const u=U(i,b.positions),m=b.totalArea/(o*n)*100;return{videos:u,totalArea:b.totalArea,efficiency:m}}const ve=45e3,gi=v.div`

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

        iframe {
            border: none;
            display: block;
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;

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
    }
`,xi=()=>{if(!nt)return null;const[e,i]=E.useState(!1),[o]=ai(),[n,s]=E.useState(void 0),[a,d]=E.useState(100),[l,w]=E.useState("0");E.useEffect(()=>{if(o==="off"&&e){const L=window.setTimeout(()=>{i(!1),s(void 0)},ve);return s(L),w(ve+"ms"),d(0),()=>{L&&window.clearTimeout(L)}}else o==="on"&&(w(0),d(100),i(!0))},[o,e]),E.useEffect(()=>{o==="on"&&n!==void 0&&(window.clearTimeout(n),w(0),d(100),s(void 0))},[n,o]);const[f,p]=E.useState(!1),A=()=>{li(),p(!0)};return E.useEffect(()=>{if(f){const L=setTimeout(()=>p(!1),1e3);return()=>clearTimeout(L)}},[f]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>i(L=>!L),children:"CCTV"}),t.jsx(se,{visible:e,onClick:()=>i(!1),fullsize:!0,children:t.jsxs(gi,{children:[t.jsx(ct,{completed:a,height:10,bgColor:n===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:l,transitionTimingFunction:"linear"}),t.jsx("div",{className:"grid",style:{display:e?"block":"none"},children:(()=>{if(ie.length===0)return null;const L=ie.map(r=>({orientation:r.orientation||"landscape"})),k=window.innerWidth,b=window.innerHeight-10,y=st(L,k,b),u={portrait:ie.filter(r=>(r.orientation||"landscape")==="portrait"),landscape:ie.filter(r=>(r.orientation||"landscape")==="landscape"),wide:ie.filter(r=>r.orientation==="wide")},m={portrait:0,landscape:0,wide:0};return y.videos.map((r,h)=>{const x=r.orientation,c=m[x],g=u[x][c];return g?(m[x]++,t.jsx("div",{className:"video-container",onClick:()=>A(),style:{left:`${r.x}px`,top:`${r.y}px`,width:`${r.width}px`,height:`${r.height}px`},children:t.jsx(di,{src:g.name,show:e,orientation:x})},`${x}-${c}-${h}`)):null})})()}),f&&t.jsx("div",{className:"open-door",children:"Tür öffnet sich"})]})})]})},wi=v.div`
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

`,yi=({nextWeek:e,previousWeek:i,startWeekWithToday:o})=>t.jsxs(wi,{children:[t.jsxs("div",{className:"buttons",children:[t.jsx(Y,{path:Dt,size:"32px",color:"#ffffff",onClick:i}),t.jsx(Y,{path:Ot,size:"32px",color:"#ffffff",onClick:e}),t.jsx("button",{onClick:o,children:"Today"}),t.jsx(xi,{})]}),t.jsx(si,{}),t.jsx(Y,{path:Rt,size:"32px",color:"#ffffff",className:$("indicator")})]}),bi=O.memo(yi),ji=6e4,Le=(e=ji,i=void 0)=>{const[o,n]=E.useState(!0);return E.useEffect(()=>{const s=setInterval(()=>{n(a=>!a)},e);return()=>{clearInterval(s)}},[e,i]),o},Ei=e=>X(`/api/calendars/${e}`),Ai=(e,i)=>`${Ei(e)}?${Bt.stringify(i)}`,Si={mdiDelete:Wt,mdiCake:Nt},Li=e=>{if(!e||typeof e!="string")return;const i=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Si[i]||void 0},Ti=Qt.map(e=>({name:e.name,icon:Li(e.icon)})),ki=(e,i,o,n)=>_(Ai(e.name,{start:i.toISO(),end:o.toISO()}),{timeout:1e4}).then(s=>{!s.data||!Array.isArray(s.data)||s.data.forEach(a=>{const d="dateTime"in a.start?M.fromISO(a.start.dateTime):M.fromSQL(a.start.date);let l;"dateTime"in a.end?l=Math.floor(M.fromISO(a.end.dateTime).diff(i,"days").as("days")):l=Math.floor(M.fromSQL(a.end.date).diff(i,"days").as("days"))-1;const w=Math.floor(d.diff(i,"days").as("days"));l>=n.length&&(l=n.length-1);const f="dateTime"in a.start?"events":"allDay";if(w>=0&&w<n.length)for(let p=w;p<=l;p++)n[p][f]=[...n[p][f],{...a,icon:e.icon}]})}).catch(s=>{throw s}),De=new Map,Ci=300*1e3,vi=e=>e.toISODate(),Di=(e,i,o,n,s,a)=>{const d=[0,1,2,3,4,5].map(A=>e.plus({days:A}).startOf("day"));d[6]=e.plus({days:6}).endOf("day");const l=vi(e),w=De.get(l);if(w&&Date.now()-w.timestamp<Ci){o(w.data);return}const f=d.map(A=>({date:A,allDay:[],events:[]})),p=new AbortController;s.current&&s.current.abort(),s.current=p;try{n(!0);const A=Ti.map(L=>ki(L,d[0],d[6],f));Promise.all(A).then(()=>{p.signal.aborted||(De.set(l,{data:f,timestamp:Date.now()}),o(f),a(!1))}).catch(L=>{p.signal.aborted||a(Q(L))}).finally(()=>{p.signal.aborted||n(!1)})}catch(A){p.signal.aborted||(a(Q(A)),n(!1))}},Oe=[],Oi=e=>{const[i,o]=E.useState(Oe),[n,s]=E.useState(!1),[a,d]=E.useState(!1),l=Le(6e4,"Calendar"),[w,f]=E.useState(null),p=O.useRef(null);return E.useEffect(()=>(e!==void 0&&((w===null||!w.equals(e))&&(o(Oe),f(e)),Di(e,i,o,s,p,d)),()=>{p.current&&p.current.abort()}),[e,l]),[i,a]};function re(e){const[i,o]=E.useState(!1);function n({key:a}){a===e&&o(!0)}const s=({key:a})=>{a===e&&o(!1)};return E.useEffect(()=>(window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}),[e]),i}const Ri=()=>{let e=new Date,o=(e.getDay()+6)%7,n=new Date(e.setDate(e.getDate()-o));return M.fromJSDate(n)},Ni=e=>{const i=()=>e(l=>l.plus({days:7})),o=re("ArrowRight");E.useEffect(()=>{o&&i()},[o]);const n=()=>e(l=>l.minus({days:7})),s=re("ArrowLeft");E.useEffect(()=>{s&&n()},[s]);const a=()=>e(Ri()),d=re("t");return E.useEffect(()=>{d&&a()},[d]),{nextWeek:i,previousWeek:n,startWeekWithToday:a}},Wi=e=>{const[i,o]=O.useState(0),[n,s]=O.useState(0),a=50;return{onTouchStart:f=>{s(0),o(f.targetTouches[0].clientX)},onTouchMove:f=>s(f.targetTouches[0].clientX),onTouchEnd:()=>{if(!i||!n)return;const f=i-n,p=f>a,A=f<-a;p&&e.onSwipedLeft(),A&&e.onSwipedRight()}}},Re=e=>M.fromISO(e).toLocaleString(M.TIME_24_SIMPLE),we=e=>e.toFormat("c")>=6,ye=e=>e.hasSame(M.now(),"day"),Mi=v.div`

  display: flex;
  flex-direction: column;

  .schedule {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(2, max-content) 1fr;
    grid-column-gap: 12px;
    flex-grow: 1;

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
`,Pi=()=>{const[e,i]=E.useState(void 0),[o,n]=Oi(e),{nextWeek:s,previousWeek:a,startWeekWithToday:d}=Ni(i);E.useEffect(()=>{d()},[]);const l=Wi({onSwipedLeft:()=>s(),onSwipedRight:()=>a()}),w=O.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),f=O.useMemo(()=>o.slice(0,7),[o]);return t.jsxs(Mi,{...l,children:[t.jsx(bi,{nextWeek:s,previousWeek:a,startWeekWithToday:d}),t.jsxs("div",{className:"schedule",children:[f.map((p,A)=>t.jsx("div",{className:$({weekend:we(p.date),today:ye(p.date)},"caption"),children:t.jsx("h2",{children:p.date.toLocaleString(w)})},A)),f.map((p,A)=>t.jsx("div",{className:$("allDayRow",{weekend:we(p.date),today:ye(p.date)}),children:p.allDay.map((L,k)=>t.jsx("div",{className:"allDayEvent",children:L.summary},k))},A)),f.map((p,A)=>t.jsx("div",{className:$("eventRow",{weekend:we(p.date),today:ye(p.date)}),children:p.events.map((L,k)=>t.jsxs("div",{className:"event",children:[t.jsx("div",{children:L.summary}),t.jsxs("h3",{children:[L.icon&&t.jsx(Y,{path:L.icon,size:"1rem",color:"#ffffff"}),Re(L.start.dateTime)," - ",Re(L.end.dateTime)]})]},k))},A))]}),o.length===0&&t.jsx("div",{className:"loading",children:n!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):t.jsx(Be,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),n!==!1&&o.length>0&&t.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:t.jsxs("div",{children:["Warnung: ",n instanceof Error?n.message:String(n)]})})]})},ue={"clear-day":{icon:yt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:wt,label:"Klar",color:"#eeeef5"},rain:{icon:xt,label:"Regen",color:"#80a5d6"},snow:{icon:gt,label:"Schnee",color:"#8c82ce"},sleet:{icon:mt,label:"Graupel",color:"#aba4db"},wind:{icon:pt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:ut,label:"Neblig",color:"#d5dae2"},cloudy:{icon:ft,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:ht,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:dt,label:"Teils bewölkt",color:"#d5dae2"}},_i=()=>`./forecast/${qe}/${Je},${Qe}?&units=si&exclude=minutely`,Ii=e=>{const[i,o]=E.useState([]),[n,s]=E.useState(!1),a=Le(6e4*10,"Weather"),d=et&&qe&&Je&&Qe;return E.useEffect(()=>{d&&_(_i()).then(l=>{o(l.data),s(!1)}).catch(l=>{s(Q(l))}).finally(()=>{})},[a,e,d]),[i,n]},Vi=jt(Et),Ne=v.div`

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
`,We=O.memo(({data:e,daily:i=!1})=>t.jsxs("div",{children:[t.jsxs("div",{children:[!i&&M.fromSeconds(e.time).toLocaleString(M.TIME_24_SIMPLE),i&&M.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),t.jsx("div",{children:t.jsx(Ae,{icon:e.icon})}),t.jsx("div",{children:t.jsxs("strong",{children:[!i&&t.jsxs(t.Fragment,{children:[Math.round(e.temperature),"°"]}),i&&t.jsxs(t.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),t.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),t.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),$i=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(i=>({color:ue[i.icon]?.color||"#ffffff",text:ue[i.icon]?.label||"",annotation:`${Math.round(i.temperature)}°`,time:i.time})),Ae=({icon:e})=>{const i=ue[e];return t.jsx(i.icon,{size:60,color:"#ffffff"})},Fi=()=>{if(!et)return null;const[e,i]=Ii(),[o,n]=E.useState(!1),s=re("w"),a=E.useRef(),d=O.useCallback(()=>n(A=>!A),[]),l=O.useCallback(()=>n(!0),[]),w=O.useMemo(()=>$i(e),[e]),f=O.useMemo(()=>[3,6,9,12],[]),p=O.useMemo(()=>[1,2,3,4,5,6,7],[]);return E.useEffect(()=>{if(!a.current||!e||!e.hourly||w.length===0)return;const A={timezone:"Europe/Berlin"},L=document.createElement("div");return a.current.textContent="",a.current.appendChild(L),Ut(L,w,A),()=>{a.current&&(a.current.textContent="")}},[w]),E.useEffect(()=>{s&&d()},[s]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?i!==!1?t.jsx(Ne,{children:t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),t.jsx("div",{children:i instanceof Error?i.message:String(i)})]})}):"":t.jsxs(Ne,{children:[t.jsxs("div",{onClick:l,children:[t.jsxs("div",{className:"headline",children:[t.jsx(Ae,{icon:e.currently.icon}),t.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),t.jsx("div",{className:"forecast",children:f.map((A,L)=>t.jsx(We,{data:e.hourly.data[A]},L))})]}),t.jsx(se,{visible:o,onClick:d,children:t.jsxs("div",{className:"full-weather",children:[i!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:i instanceof Error?i.message:String(i)})]}),t.jsxs("div",{className:"detail-header",children:[t.jsx("div",{children:t.jsxs("div",{className:"headline",children:[t.jsx(Ae,{icon:e.daily.data[0].icon}),t.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",t.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),t.jsx("h3",{children:ue[e.daily.data[0].icon].label})]}),t.jsx("div",{className:"values",children:t.jsxs("div",{className:"table",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]}),t.jsxs("div",{children:[t.jsx("span",{children:"Windgeschwindigkeit:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]})]})}),t.jsx("h3",{children:"Die nächsten 24 Stunden"}),t.jsx("div",{ref:a}),t.jsx("h3",{children:"Die nächste Woche"}),t.jsx("div",{className:"forecast",children:p.map((A,L)=>t.jsx(We,{data:e.daily.data[A],daily:!0},L))}),t.jsxs("div",{className:"info",children:["Aktualisiert ",t.jsx(bt,{date:M.fromSeconds(e.currently.time).toJSDate(),formatter:Vi})]})]})})]})},zi=O.memo(Fi);async function Bi(e){if(!je)throw new Error("GEOFOX_SECRET is not configured");return Ht.stringify(Gt(JSON.stringify(e),je))}const Hi="AK Wandsbek",Gi="Hamburg",Ui="Master:62016",Yi="STATION",Ki={x:10.091341,y:53.568702},Xi={name:Hi,city:Gi,id:Ui,type:Yi,coordinate:Ki},de={departureList:"departureList",checkName:"checkName"},qi=async(e,i)=>_({method:"post",url:`./gti/public/${e}`,data:i,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":Ze,"geofox-auth-signature":await Bi(i),Authorization:void 0}}),Me=(e,i)=>e.realtimeOffset-i.realtimeOffset,Ji=e=>{const i=e.departures.map(o=>({line:o.line.name,direction:o.line.direction,timeOffset:o.timeOffset,delay:o.delay?o.delay:"0",directionId:o.directionId,realtimeOffset:o.timeOffset+(o.delay?o.delay:0)/60}));return{from:i.filter(o=>o.directionId===1).slice(0,3).sort(Me),to:i.filter(o=>o.directionId===6).slice(0,3).sort(Me)}},Qi=e=>{const[i,o]=E.useState([]),[n,s]=E.useState(!1),a=Le(6e4),d=tt&&Ze&&je;return E.useEffect(()=>{if(!d||!(e in de))return;let l={version:51};switch(e){case de.checkName:l={...l,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case de.departureList:const w=M.now();l={...l,station:Xi,time:{date:w.toFormat("dd.MM.yyyy"),time:w.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:l=void 0}qi(e,l).then(w=>{o(Ji(w.data)),s(!1)}).catch(w=>{s(Q(w))})},[e,a,d]),[i,n]},Zi=v.div`
  margin-top: 2rem;

  svg {
    height: 16px;
    width: auto;
  }

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
`,Pe=O.memo(({line:e,direction:i,realtimeOffset:o})=>t.jsxs("div",{className:"departure",children:[t.jsx("div",{children:t.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),t.jsx("div",{children:o===0?"Jetzt":t.jsxs(t.Fragment,{children:["in ",o," '"]})})]})),eo=()=>{if(!tt)return null;const[e,i]=Qi(de.departureList);return t.jsxs(Zi,{children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:t.jsxs("g",{transform:"translate(10368 -6294)",children:[t.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),t.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),i!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:i instanceof Error?i.message:String(i)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"→ Wandsbek"}),e.to?.map((o,n)=>t.jsx(Pe,{line:o.line,direction:o.direction,realtimeOffset:o.realtimeOffset},n)),t.jsx("h3",{children:"→ Stadtauswärts"}),e.from?.map((o,n)=>t.jsx(Pe,{line:o.line,direction:o.direction,realtimeOffset:o.realtimeOffset},n))]})]})},to=O.memo(eo),io=()=>{const[e,i]=E.useState("closed"),[o,n]=E.useState(!1),s=it&&G,a=G?X(`/api/states/${G}`):null;return E.useEffect(()=>{!s||!a||_(a).then(d=>{i(d.data.state),n(!1)}).catch(d=>{n(Q(d))})},[s,a]),E.useEffect(()=>{let d=null,l=!0;async function w(){if(!s||!G)return;let f;try{if(!Ke){P.debug("Skipping WebSocket connection in production mode (using REST API only)");return}const p=Xe||(typeof window<"u"?window.location.origin:""),A=J||"";if(!A){P.debug("Skipping WebSocket connection - no access token (using REST API only)");return}f=Ge(p,A),l&&n(!1)}catch(p){l&&(P.error("Failed to create WebSocket auth:",p),n(p instanceof Error?p.message:String(p)));return}try{d=await Ue({auth:f});const p=A=>{l&&i(A.variables.trigger.to_state.state)};await d.subscribeMessage(p,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:G}})}catch(p){l&&(P.error("Failed to setup WebSocket connection:",p),n(p instanceof Error?p.message:String(p)))}}return w(),()=>{l=!1,d&&d.close()}},[s]),[e,o]},oo=e=>{if(!G)return;e(!0);const i=setTimeout(()=>e(!1),3e3);_.post(X("/api/services/cover/toggle"),{entity_id:G}).catch(o=>{P.error("Failed to toggle garage door:",o)}).finally(()=>{clearTimeout(i),e(!1)})},no=e=>{if(!G)return;e(!0);const i=setTimeout(()=>e(!1),3e3);_.post(X("/api/services/cover/open_cover"),{entity_id:G}).catch(o=>{P.error("Failed to open garage door:",o)}).finally(()=>{clearTimeout(i),e(!1)})},ro=e=>{if(!G)return;e(!0);const i=setTimeout(()=>e(!1),3e3);_.post(X("/api/services/cover/close_cover"),{entity_id:G}).catch(o=>{P.error("Failed to close garage door:",o)}).finally(()=>{clearTimeout(i),e(!1)})},so=v.div`
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
`,at=v.div`
  display: flex;
  align-items: center;
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
`,_e=e=>({unknown:{label:"In Bewegung oder halb-offen",icon:Vt},open:{label:"Offen",icon:It},closed:{label:"Geschlossen",icon:_t},opening:{label:"Öffnet",icon:Pt},closing:{label:"Schließt",icon:Mt}})[e]||{label:"Unavailable",icon:$t},lt=({garageDoor:e,animate:i=!1})=>t.jsxs(at,{className:$({animate:i}),children:[t.jsx(Y,{path:_e(e).icon,size:"2rem",color:"#ffffff"}),t.jsx("span",{children:_e(e).label})]}),ao=(e,i)=>At.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:o}){return t.jsx(lt,{garageDoor:o})}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark"}),lo=()=>{if(!it)return null;const[e,i]=io(),[o,n]=E.useState(void 0),[s,a]=E.useState(!1),[d,l]=E.useState(!1);E.useEffect(()=>{if(e==="unknown"||e==="opening"||e==="closing"){if(!o){const L=new Promise(k=>{n({resolve:k})});ao(L)}}else o&&(o.resolve(e),n(void 0))},[e]);const w=re("g");E.useEffect(()=>{w&&i===!1&&oo(a)},[w,i]);const f=O.useCallback(A=>{if(i===!1)switch(l(!1),A){case"open":no(a);break;case"close":ro(a);break}},[a,i]),p=O.useCallback(()=>{i===!1&&l(!0)},[i]);return t.jsxs(so,{className:$({disabled:i!==!1}),children:[t.jsx("h2",{children:"Garage"}),t.jsx("div",{className:"status",onClick:p,children:i!==!1?t.jsxs(at,{children:[t.jsx(Y,{path:He,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsx(lt,{garageDoor:e,animate:s})}),t.jsx(se,{visible:d&&i===!1,onClick:()=>l(!1),children:t.jsxs("div",{className:"controls",children:[t.jsx("div",{onClick:()=>f("open"),children:"Öffnen"}),t.jsx("div",{onClick:()=>f("close"),children:"Schließen"})]})})]})},co=O.memo(lo),ho=e=>e?X(`/api/states/${e}`):null,H={done:{label:"Fertig",animate:!1,icon:zt},off:{label:"Aus",animate:!1,icon:Ft},standby:{label:"Standby",animate:!1,icon:Te},running:{label:"Läuft …",animate:!0,icon:Te}},fo={off:0,standby:2,running:16,done:256},uo=()=>{const i=(Array.isArray(fe)?fe:[]).map((f,p)=>{const[A,L]=po(f.entity_id);return{state:A,error:L,name:f.name}}),[o,n]=E.useState(H.off),[s,a]=E.useState(!1),d=i.map(f=>f.state),l=i.map(f=>f.error);E.useEffect(()=>{const f=l.some(p=>p!==!1);a(f&&l.find(p=>p!==!1)||!1)},[l]),E.useEffect(()=>{const f=d.reduce((p,A)=>p+(fo[A]||0),0);f===0?n(H.off):f<16?n(H.standby):f<256?n(H.running):f%256===0?n(H.done):f%256%16===0?n(H.running):f%256%2===0?n(H.done):n(H.running)},[d]);const w=i.map(f=>({label:f.name,state:f.state}));return[o,w,s]},po=e=>{const[i,o]=E.useState("off"),[n,s]=E.useState(!1),a=ot&&e,d=ho(e);return E.useEffect(()=>{!a||!d||_(d).then(l=>{o(l.data.state),s(!1)}).catch(l=>{s(Q(l))})},[e,a,d]),E.useEffect(()=>{async function l(){}return l(),()=>{}},[e,a]),[i,n]},mo=v.div`
  padding-bottom: 12px;

  @media only screen and (max-width: 1200px) {
    h2 {
      display: none;
    }
  }
  
  .status {
    display: flex;
    align-items: center;
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

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: .4rem 1rem;
      background-color: #262626;
      border-radius: 12px;
    }
  }
  
  .subtitle {
    margin: 1rem 0 0 0;
    font-size: 1.2rem;
  }
`,go=()=>{if(!ot)return null;const[e,i,o]=uo(),[n,s]=E.useState(!1),a=O.useCallback(()=>{o===!1&&s(!0)},[o]),d=O.useCallback(()=>s(!1),[]);return t.jsxs(mo,{className:$({disabled:o!==!1}),children:[t.jsx("h2",{children:"Wäsche"}),t.jsx("div",{className:"status",onClick:a,children:o!==!1?t.jsxs(t.Fragment,{children:[t.jsx(Y,{path:He,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:$({animate:e.animate}),children:t.jsx(Y,{path:e.icon,size:"2rem",color:"#ffffff"})}),t.jsx("span",{children:e.label})]})}),t.jsx(se,{visible:n&&o===!1,onClick:d,children:t.jsx("div",{className:"states",children:i.map((l,w)=>t.jsxs("div",{children:[t.jsx("div",{className:$({animate:H[l.state].animate}),children:t.jsx(Y,{path:H[l.state].icon,size:2})}),t.jsx("div",{children:H[l.state].label}),t.jsx("div",{className:"subtitle",children:l.label})]},w))})})]})},xo=O.memo(go),wo=v.div`
  padding: 0 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
  }
  
  > * + * {
    margin-top: 24px;
  }
  
  h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  
  .two-cols {
    display: flex;

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
`,yo=()=>t.jsxs(wo,{children:[t.jsx(zi,{}),t.jsx(to,{}),t.jsxs("div",{className:"two-cols",children:[t.jsx(co,{}),t.jsx(xo,{})]})]}),bo=O.memo(yo),Ie=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],jo=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],he={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},Eo={landscape:"L",portrait:"P",wide:"W"},Ao=v.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,So=v.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Lo=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Z=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ee=v.label`
  font-size: 0.9rem;
  color: #cccccc;
`,Ve=v.select`
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
`,$e=v.input`
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
`,To=v.button`
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
`,Fe=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,ko=v.button`
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
`,Co=v.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,vo=v.div`
  position: absolute;
  background-color: ${e=>he[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,Do=v.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Oo=v.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Ro=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,ae=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,le=v.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ce=v.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,No=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Wo=v.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;v.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;const be=v.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?he[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?he[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?he[e.orientation]:"#4a4a4a"};
  }
`,ze=()=>{const[e,i]=O.useState(1920),[o,n]=O.useState(1080),[s,a]=O.useState("Full HD"),[d,l]=O.useState(""),[w,f]=O.useState(""),[p,A]=O.useState([{orientation:"landscape"}]),[L,k]=O.useState(null),b=O.useMemo(()=>st(p,e,o),[p,e,o]),y=c=>{const g=Ie.find(j=>j.name===c);g&&g.width&&g.height?(i(g.width),n(g.height),a(c),l(""),f("")):c==="Custom"&&a("Custom")},u=()=>{const c=parseInt(d),g=parseInt(w);c>0&&g>0&&(i(c),n(g))},m=c=>{A(c.videos),k(c.name)},r=c=>{const g=[];for(let j=0;j<c;j++)g.push(p[j]||{orientation:"landscape"});A(g),k(null)},h=(c,g)=>{const j=[...p];j[c]={orientation:g},A(j),k(null)},x=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/o));return t.jsxs(Ao,{children:[t.jsx(So,{children:"Video Tiling Algorithm Demo"}),t.jsxs(Lo,{children:[t.jsxs(Z,{children:[t.jsx(ee,{children:"Screen Size Preset"}),t.jsx(Ve,{value:s,onChange:c=>y(c.target.value),children:Ie.map(c=>t.jsx("option",{value:c.name,children:c.name},c.name))})]}),s==="Custom"&&t.jsxs(t.Fragment,{children:[t.jsxs(Z,{children:[t.jsx(ee,{children:"Custom Width"}),t.jsx($e,{type:"number",value:d,onChange:c=>l(c.target.value),placeholder:"Width",min:"100"})]}),t.jsxs(Z,{children:[t.jsx(ee,{children:"Custom Height"}),t.jsx($e,{type:"number",value:w,onChange:c=>f(c.target.value),placeholder:"Height",min:"100"})]}),t.jsxs(Z,{children:[t.jsx(ee,{children:" "}),t.jsx(To,{onClick:u,children:"Apply Custom Size"})]})]}),t.jsxs(Z,{children:[t.jsx(ee,{children:"Number of Videos"}),t.jsxs(Ve,{value:p.length,onChange:c=>r(parseInt(c.target.value)),children:[t.jsx("option",{value:"1",children:"1 Video"}),t.jsx("option",{value:"2",children:"2 Videos"}),t.jsx("option",{value:"3",children:"3 Videos"}),t.jsx("option",{value:"4",children:"4 Videos"})]})]}),p.map((c,g)=>t.jsxs(Z,{children:[t.jsxs(ee,{children:["Video ",g+1," Orientation"]}),t.jsxs(Fe,{children:[t.jsx(be,{active:c.orientation==="landscape",orientation:"landscape",onClick:()=>h(g,"landscape"),children:"Landscape"}),t.jsx(be,{active:c.orientation==="portrait",orientation:"portrait",onClick:()=>h(g,"portrait"),children:"Portrait"}),t.jsx(be,{active:c.orientation==="wide",orientation:"wide",onClick:()=>h(g,"wide"),children:"Wide"})]})]},g))]}),t.jsxs(No,{children:[t.jsx(Wo,{children:"Test Scenarios"}),t.jsx(Fe,{children:jo.map(c=>t.jsx(ko,{active:L===c.name,onClick:()=>m(c),children:c.name},c.name))})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:t.jsx(Co,{style:{width:`${e*x}px`,height:`${o*x}px`},children:b.videos.map((c,g)=>t.jsxs(vo,{orientation:c.orientation,style:{left:`${c.x*x}px`,top:`${c.y*x}px`,width:`${c.width*x}px`,height:`${c.height*x}px`},children:[t.jsxs(Do,{children:[Eo[c.orientation]," ",g+1]}),t.jsxs(Oo,{children:[Math.round(c.width)," × ",Math.round(c.height)]})]},g))})}),t.jsxs(Ro,{children:[t.jsxs(ae,{children:[t.jsx(le,{children:"Canvas Size"}),t.jsxs(ce,{children:[e," × ",o]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Total Area Used"}),t.jsxs(ce,{children:[Math.round(b.totalArea).toLocaleString()," px²"]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Efficiency"}),t.jsxs(ce,{children:[b.efficiency.toFixed(2),"%"]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Display Scale"}),t.jsxs(ce,{children:[(x*100).toFixed(1),"%"]})]})]})]})},Mo=()=>{function e(o,n){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(n))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[a,d]=n.split(":").map(Number),l=new Date;let w=new Date(l.getFullYear(),l.getMonth(),l.getDate());w.setHours(a,d,0,0),w<=l&&w.setDate(w.getDate()+1);const f=w.getTime()-l.getTime();return setTimeout(o,f)}const i=()=>{window.location.reload(!0)};E.useLayoutEffect(()=>{const o=[e(i,"00:00"),e(i,"03:00"),e(i,"06:00"),e(i,"09:00"),e(i,"12:00"),e(i,"15:00"),e(i,"18:00"),e(i,"21:00")];return()=>{o.forEach(n=>{n&&clearTimeout(n)})}},[])},Po=v.div`
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
`;class pe extends E.Component{constructor(i){super(i),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,o){this.setState({error:i,errorInfo:o}),P.error("ErrorBoundary caught an error:",i,o)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?t.jsxs(Po,{children:[t.jsx("h2",{children:"Something went wrong"}),t.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,t.jsxs("div",{children:[t.jsx("button",{onClick:this.handleReset,children:"Try Again"}),t.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const _o=St`
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
`,Io=v.div`
  padding: 0 12px;
  overflow: scroll;
  min-width: 100vw;
  box-sizing: border-box;

  .main {
    display: grid;
    grid-template-columns: 1fr 300px;
  }

  @media only screen and (max-width: 1200px) {
    .main {
      grid-template-columns: 1fr 150px;
    }
  }
`;function Vo(){return Mo(),t.jsxs(Io,{children:[t.jsx(_o,{}),t.jsxs("div",{className:"main",children:[t.jsx(pe,{children:t.jsx(Pi,{})}),t.jsx(pe,{children:t.jsx(bo,{})})]}),t.jsx(Tt,{})]})}function $o(){return t.jsx(pe,{children:t.jsxs(Lt,{children:[t.jsx(ge,{path:"/demo",element:t.jsx(ze,{})}),t.jsx(ge,{path:"/tiling-demo",element:t.jsx(ze,{})}),t.jsx(ge,{path:"*",element:t.jsx(Vo,{})})]})})}const Fo=kt.createRoot(document.getElementById("root"));Fo.render(t.jsx(E.StrictMode,{children:t.jsx(pe,{children:t.jsx(Ct,{children:t.jsx($o,{})})})}));
