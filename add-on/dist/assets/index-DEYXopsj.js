import{d as C,R as A,j as t,I as F,l as Qe,r as O,P as ut,W as pt,b as mt,e as gt,f as xt,h as wt,i as yt,k as bt,m as jt,n as Et,o as St,T as At,p as Tt,s as kt,y as vt,q as Lt,t as Ct,u as Ee,L as Ot,v as Nt,B as _t}from"./react-vendor-SoRfWBCf.js";import{D as W}from"./date-vendor-BDx6lZXm.js";import{n as z}from"./vendor-DXU8y-C2.js";import{m as Dt,a as Rt,b as Pt,c as Mt,d as $t,e as Wt,f as Ne,g as It,h as Vt,i as Ft,j as zt,k as Bt,l as Ht,n as Gt,o as Ut,p as Yt,q as Kt,r as Xt,s as qt,t as Re,u as Jt,v as Qt}from"./ui-vendor-C7t39j5V.js";import{a as P,q as Zt,B as eo,h as to}from"./utils-vendor-Cy1MG2Zy.js";import{c as le,a as de}from"./ha-vendor-CoU0AojH.js";import{t as oo}from"./chart-vendor-ClWajKr-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();const no=C.div`
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
`,fe=({visible:e,children:o,onClick:n,onClose:i,fullsize:a=!1})=>{const c=i||n,d=s=>{s.stopPropagation(),s.preventDefault(),c()};return A.useEffect(()=>{if(e){const s=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${s}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,s)}}},[e]),e?t.jsxs(no,{onClick:n,children:[t.jsx("div",{className:"close",onClick:d,children:t.jsx(F,{path:Dt,size:2})}),t.jsx("div",{className:z("content",{fullsize:a}),onClick:s=>s.stopPropagation(),children:o})]}):null},D={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},Ze=e=>{const o={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1};return e.response?(o.status=e.response.status,o.responseData=e.response.data,o.url=e.config?.url||e.request?.responseURL||"Unknown URL",o.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(o.isNetworkError=!0,o.url=e.config?.url||"Unknown URL",o.message="Network error: No response received from server"):(o.message=e.message||"Request setup error",o.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(o.isTimeoutError=!0,o.message="Request timeout: The request took too long to complete"),o},io=(e,o="")=>{const n=Ze(e),i=[];return o&&i.push(`[${o}]`),i.push("Axios API Error:"),i.push(n.message),n.url&&i.push(`URL: ${n.url}`),n.status&&i.push(`Status: ${n.status}`),n.responseData&&i.push("Response:",n.responseData),D.error(...i),n},B=e=>{const o=Ze(e);return o.isNetworkError?"":o.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":o.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":o.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":o.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":o.status>=500?"Serverfehler: Bitte später erneut versuchen":o.message||"Ein Fehler ist aufgetreten"},ro={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},M=(e,o=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[e]!==void 0){const i=window.APP_CONFIG[e];return i==="undefined"||i==="null"?o:i??o}return o}const n=ro[`VITE_${e}`];return e==="HASS_ACCESS_TOKEN"&&n!==void 0?o:n!==void 0?n:o},so=(e,o=!1)=>{const n=M(e,o);return typeof n=="boolean"?n:typeof n=="string"?n==="true"||n==="1"||n==="yes":!!n};M("HASS_HOST","");const K=M("HASS_ACCESS_TOKEN",""),ao=K&&typeof K=="string"&&K.trim()!==""&&K!=="undefined"&&K!=="null";ao?P.defaults.headers.common.Authorization=`Bearer ${K}`:delete P.defaults.headers.common.Authorization;P.interceptors.response.use(e=>e,e=>{const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";return io(e,o),Promise.reject(e)});const et=M("WEATHER_API_KEY"),tt=M("WEATHER_LATITUDE"),ot=M("WEATHER_LONGITUDE"),ve=M("GEOFOX_SECRET"),nt=M("GEOFOX_USER"),X=M("ENTITY_GARAGE_DOOR"),se=M("ENTITY_DOORBELL"),Pe=M("ENTITY_DOORBELL_BUTTON"),Le=M("ENTITY_EVERYDAY_CALENDAR"),te=M("ENTITY_PRECLIMATE_STATUS"),Me=M("ENTITY_PRECLIMATE_START"),$e=M("ENTITY_PRECLIMATE_STOP"),oe=M("ENTITY_CHARGING_STATE"),ne=M("ENTITY_STATE_OF_CHARGE"),he=M("SUPERVISOR_TOKEN"),co=(()=>{const e=M("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),we=(()=>{const e=M("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),Z=(()=>{const e=M("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),ee=(e,o)=>M(e,void 0)!==void 0?so(e,!1):!1,it=ee("ENABLE_WEATHER"),rt=ee("ENABLE_HVV"),st=ee("ENABLE_GARAGE"),at=ee("ENABLE_LAUNDRY",Array.isArray(we)&&we.length>0),ct=ee("ENABLE_DOORBELL"),lt=ee("ENABLE_EVERYDAY_CALENDAR"),dt=ee("ENABLE_EV"),$=e=>{const o=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const n=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${n}${o}`}return o}},ae=Le?$(`/api/states/${Le}`):null,lo=()=>{const[e,o]=A.useState(null),[n,i]=A.useState(!1),a=lt&&Le;return A.useEffect(()=>{!a||!ae||P(ae).then(c=>{c.data.attributes.store!==void 0?o(c.data.attributes.store):o([]),i(!1)}).catch(c=>{i(B(c)),o([])})},[a,ae]),[e,n]},fo=e=>{ae&&P.post(ae,{state:new Date,attributes:{store:e}}).catch(o=>{D.error("Failed to store everyday calendar data:",o)})},We=C.div` 

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
`,ho=({on:e,month:o,day:n})=>{const[i,a]=e,c=i.indexOf(`${o}-${n}`),d=c>-1,s=()=>{a(d?i.toSpliced(c,1):[...i,`${o}-${n}`])};return t.jsx("div",{className:z("dot",{on:d}),onClick:()=>s()})},uo=()=>{if(!lt)return null;const e=new Date().getFullYear(),o=[];for(let s=1;s<13;s++){const g=new Date(e,s,0).getDate();for(let l=1;l<=g;l++)o.push({month:s,day:l})}const n=Array.from({length:31},(s,g)=>g+1),i=Array.from({length:12},(s,g)=>g+1),a=A.useState(void 0),[c,d]=lo();return A.useEffect(()=>{c!==null&&a[1](c)},[c]),A.useEffect(()=>{a[0]!==void 0&&fo(a[0])},[a[0]]),a[0]!==void 0?t.jsxs(We,{children:[t.jsx("h2",{children:"Jeden Tag ein bißchen"}),d!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:d instanceof Error?d.message:String(d)})]}),t.jsxs("div",{className:"calendar",children:[n.map((s,g)=>t.jsx("div",{style:{gridArea:`${s+1} / 1 / ${s+1} / 1`},children:s},g)),i.map((s,g)=>t.jsx("div",{style:{gridArea:`1 / ${s+1} / 1 / ${s+1}`},children:s},g)),o.map((s,g)=>t.jsx("div",{style:{gridArea:`${s.day+1} / ${s.month+1} / ${s.day+1} / ${s.month+1}`},children:t.jsx(ho,{on:a,month:s.month,day:s.day})},g))]})]}):t.jsx(We,{className:"loading",children:d!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:d instanceof Error?d.message:String(d)})]}):t.jsx(Qe,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},po=C.div`
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
  }`,mo=()=>{const[e,o]=A.useState(W.now()),[n,i]=A.useState(!1),a=O.useCallback(()=>i(!0),[]),c=O.useCallback(()=>i(!1),[]);return A.useEffect(()=>{const d=setInterval(()=>o(W.now()),1e3);return()=>clearInterval(d)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(po,{onClick:a,children:[e.toFormat("HH"),t.jsx("span",{children:":"}),e.toFormat("mm")]}),t.jsx(fe,{visible:n,onClick:c,fullsize:!0,children:t.jsx(uo,{})})]})},go=O.memo(mo),Se=se?$(`/api/states/${se}`):null,xo=()=>{const[e,o]=A.useState("off"),[n,i]=A.useState(!1),a=ct&&se;return A.useEffect(()=>{!a||!Se||P(Se).then(c=>{o(c.data.state),i(!1)}).catch(c=>{i(B(c))})},[a,Se]),A.useEffect(()=>{let c=null,d=!0;async function s(){if(!a||!se)return;let g;if(typeof window<"u"&&window.location){const p=window.location.pathname.replace(/\/$/,"");g=`${window.location.origin}${p}`}else g="";const l=he||K||"";if(!l)return;let m;try{m=le(g,l),d&&i(!1)}catch(p){d&&(D.error("Failed to create WebSocket auth:",p),i(p instanceof Error?p.message:String(p)));return}try{c=await de({auth:m});const p=j=>{if(d){const E=j.variables.trigger.to_state.state;o(E)}};await c.subscribeMessage(p,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:se}})}catch(p){d&&(D.error("Failed to setup WebSocket connection:",p),D.error("WebSocket error details:",{message:p instanceof Error?p.message:String(p),code:p.code,name:p.name,wsUrl:m?.wsUrl,host:g,tokenLength:l?l.length:0}),p.code===2&&D.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),i(p instanceof Error?p.message:String(p)))}}return s(),()=>{d=!1,c&&c.close()}},[a]),[e,n]},wo=()=>{Pe&&P.post($("/api/services/button/press"),{entity_id:Pe}).catch(e=>{D.error("Failed to unlatch front door:",e)})},N={portrait:360/480,landscape:1920/1072,wide:770/216};function yo(e){const o={landscape:0,portrait:0,wide:0};return e.forEach(n=>{n.orientation&&o.hasOwnProperty(n.orientation)&&o[n.orientation]++}),o}function ft(e,o,n){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const i=e.length,a=yo(e);return i===1?bo(e[0],o,n):i===2?jo(a,e,o,n):i===3?Eo(a,e,o,n):i===4?So(a,e,o,n):{videos:[],totalArea:0,efficiency:0}}function bo(e,o,n){const i=N[e.orientation];let a,c;const d=o/n;return i>d?(a=o,c=o/i):(c=n,a=n*i),{videos:[{x:(o-a)/2,y:(n-c)/2,width:a,height:c,orientation:e.orientation}],totalArea:a*c,efficiency:a*c/(o*n)*100}}function jo(e,o,n,i){if(e.portrait>0)return _e(e,o,n,i);const a=[];e.landscape>0&&a.push("landscape"),e.wide>0&&a.push("wide");const c=a[0]||o[0].orientation,d=a[1]||o[1].orientation,s=N[c],g=N[d];if(e.landscape===1&&e.wide===1){const y=N.landscape,S=N.wide,f=n,x=f/y,r=f/S,u=x+r;let b,h,w;if(u<=i)b=x,h=r,w=f;else{const I=i/u;b=x*I,h=r*I,w=h*S}const T=(n-w)/2,v=q(o,[{x:T,y:0,width:w,height:h,orientation:"wide"},{x:T,y:h,width:w,height:b,orientation:"landscape"}]),L=w*b+w*h,_=L/(n*i)*100;return{videos:v,totalArea:L,efficiency:_}}if(e.wide===2){const y=N.wide,S=n,f=S/y,x=f*2;let r;x<=i?r=f:r=i/2;const b=q(o,[{x:0,y:0,width:S,height:r,orientation:"wide"},{x:0,y:r,width:S,height:r,orientation:"wide"}]),h=S*r*2,w=h/(n*i)*100;return{videos:b,totalArea:h,efficiency:w}}const l=[()=>{const y=n,S=y/2,f=y/2,x=S/s,r=f/g;return Math.max(x,r)<=i?{positions:[{x:0,y:(i-x)/2,width:S,height:x,orientation:c},{x:S,y:(i-r)/2,width:f,height:r,orientation:d}],totalArea:S*x+f*r}:null},()=>{const y=i,S=y/2,f=y/2,x=S*s,r=f*g;return Math.max(x,r)<=n?{positions:[{x:(n-x)/2,y:0,width:x,height:S,orientation:c},{x:(n-r)/2,y:S,width:r,height:f,orientation:d}],totalArea:x*S+r*f}:null}];let m=null,p=0;for(const y of l){const S=y();S&&S.totalArea>p&&(p=S.totalArea,m=S)}if(!m){const y=n/2,S=n/2,f=Math.min(y/s,i),x=Math.min(S/g,i);m={positions:[{x:0,y:(i-f)/2,width:y,height:f,orientation:c},{x:y,y:(i-x)/2,width:S,height:x,orientation:d}],totalArea:y*f+S*x}}const j=q(o,m.positions),E=m.totalArea/(n*i)*100;return{videos:j,totalArea:m.totalArea,efficiency:E}}function _e(e,o,n,i){const a=e.portrait,c=o.length-a;if((a===3||a===4)&&c===0){const E=N.portrait,y=n/a,S=y/E,f=S<i?(i-S)/2:0,x=Math.min(S,i),r=[];let u=0;for(let w=0;w<a;w++){const T=Math.min(y,x*E);r.push({x:w*y+(y-T)/2,y:f,width:T,height:x,orientation:"portrait"}),u+=T*x}const b=q(o,r),h=u/(n*i)*100;return{videos:b,totalArea:u,efficiency:h}}o.filter(E=>E.orientation==="portrait");const d=o.filter(E=>E.orientation!=="portrait"),s=a>0?Math.min(n*.4,n*.5):0,g=n-s,l=[];let m=0;if(a===2&&c===0){const E=N.portrait,y=n/2,S=y/E,f=i;let x,r;S<=f?(r=S,x=y):(r=f,x=f*E);const u=(i-r)/2;l.push({x:(y-x)/2,y:u,width:x,height:r,orientation:"portrait"}),l.push({x:y+(y-x)/2,y:u,width:x,height:r,orientation:"portrait"}),m=x*r*2}else if(a===1&&c===1){const E=N.portrait,y=d[0],S=N[y.orientation],f=E+S,x=n*(E/f),r=n*(S/f),u=x/E,b=r/S,h=Math.min(i,Math.min(u,b)),w=(i-h)/2;l.push({x:0,y:w,width:x,height:h,orientation:"portrait"}),l.push({x,y:w,width:r,height:h,orientation:y.orientation}),m=x*h+r*h}else if(a===1&&c===2&&e.landscape===1&&e.wide===1){const E=N.portrait,y=N.wide,S=N.landscape,f=i,x=i*E,r=i/(1/y+1/S),u=r/y,b=r/S,h=x+r;if(Math.abs(h-n)<.1)l.push({x:0,y:0,width:x,height:f,orientation:"portrait"}),m+=x*f,d.find(v=>v.orientation==="wide")&&(l.push({x:0+x,y:0,width:r,height:u,orientation:"wide"}),m+=r*u),d.find(v=>v.orientation==="landscape")&&(l.push({x:0+x,y:u,width:r,height:b,orientation:"landscape"}),m+=r*b);else{const w=n/h,T=x*w,k=T/E,v=r*w,L=i/k;let _=T*L,I=i,R=v*L,H=R/y,V=R/S,G=_+R;if(G>n){const J=n/G;_=_*J,I=_/E,R=R*J,H=R/y,V=R/S,G=_+R,G>n&&(R=n-_,H=R/y,V=R/S)}const Q=_+R;if(Q>n){const J=n/Q;_=_*J,I=_/E,R=R*J,H=R/y,V=R/S}const U=0;l.push({x:U,y:0,width:_,height:I,orientation:"portrait"}),m+=_*I,d.find(J=>J.orientation==="wide")&&(l.push({x:U+_,y:0,width:R,height:H,orientation:"wide"}),m+=R*H),d.find(J=>J.orientation==="landscape")&&(l.push({x:U+_,y:H,width:R,height:V,orientation:"landscape"}),m+=R*V)}}else if(a===1&&c===3){const E=N.portrait,y=i,S=y*E,f=S,x=n-f;l.push({x:0,y:0,width:S,height:y,orientation:"portrait"}),m+=S*y;const r=i/3;for(let u=0;u<d.length;u++){const b=d[u],h=N[b.orientation],w=r,T=x;let k,v;T/h<=w?(k=T,v=k/h):(v=w,k=v*h);const L=u*r+(r-v)/2;l.push({x:f+(x-k)/2,y:L,width:k,height:v,orientation:b.orientation}),m+=k*v}}else if(a===2&&c===1){const E=N.portrait,y=d[0],S=N[y.orientation],f=i/2,x=f*E,r=n-x,u=i*S;let b,h;u<=r?(h=i,b=h*S):(b=r,h=b/S);const w=x,T=f,k=(i-h)/2,v=(i/2-T)/2,L=i/2+(i/2-T)/2;l.push({x:0,y:k,width:b,height:h,orientation:y.orientation}),m+=b*h,l.push({x:r,y:v,width:w,height:T,orientation:"portrait"}),m+=w*T,l.push({x:r,y:L,width:w,height:T,orientation:"portrait"}),m+=w*T}else if(a===1&&c===2){const E=N.portrait,y=i,S=y*E,f=S,x=n-f;l.push({x:0,y:0,width:S,height:y,orientation:"portrait"}),m+=S*y;const r=i/2;for(let u=0;u<d.length;u++){const b=d[u],h=N[b.orientation],w=r,T=x;let k,v;T/h<=w?(k=T,v=k/h):(v=w,k=v*h);const L=u*r+(r-v)/2;l.push({x:f+(x-k)/2,y:L,width:k,height:v,orientation:b.orientation}),m+=k*v}}else{const E=a;if(E>0){const y=i/E,S=N.portrait;for(let f=0;f<E;f++){const x=Math.min(y,s/S),r=x*S,u=f*y+(y-x)/2;l.push({x:(s-r)/2,y:u,width:r,height:x,orientation:"portrait"}),m+=r*x}}if(d.length>0){const y=i/d.length;for(let S=0;S<d.length;S++){const f=d[S],x=N[f.orientation],r=y,u=g;let b,h;u/x<=r?(b=u,h=b/x):(h=r,b=h*x);const w=S*y+(y-h)/2;l.push({x:s+(g-b)/2,y:w,width:b,height:h,orientation:f.orientation}),m+=b*h}}}const p=q(o,l),j=m/(n*i)*100;return{videos:p,totalArea:m,efficiency:j}}function q(e,o){const n=new Array(o.length),i=new Set,a=new Set;for(let s=0;s<o.length;s++){const g=o[s];for(let l=0;l<e.length;l++)if(!i.has(l)&&e[l].orientation===g.orientation){n[s]={...g,orientation:e[l].orientation},i.add(l),a.add(s);break}}const c=[];for(let s=0;s<o.length;s++)a.has(s)||c.push(s);let d=0;for(let s=0;s<e.length;s++)if(!i.has(s)&&d<c.length){const g=c[d];n[g]={...o[g],orientation:e[s].orientation},d++}return n}function Eo(e,o,n,i){if(e.portrait>0)return _e(e,o,n,i);if(e.landscape===2&&e.wide===1){const f=N.landscape,x=N.wide,r=n,u=r/x,b=i-u,h=n/2,w=h/f;let T,k,v,L;if(u<=i&&w<=b)T=r,k=u,v=h,L=w;else{const Q=i/(u+w),U=Math.min(1,Q);k=u*U,T=k*x,L=w*U,v=L*f}const _=(n-T)/2,I=k+(b-L)/2,H=q(o,[{x:_,y:0,width:T,height:k,orientation:"wide"},{x:0,y:I,width:v,height:L,orientation:"landscape"},{x:v,y:I,width:v,height:L,orientation:"landscape"}]),V=T*k+v*L*2,G=V/(n*i)*100;return{videos:H,totalArea:V,efficiency:G}}if(e.landscape===1&&e.wide===2){const f=N.landscape,x=N.wide,r=n/2,u=r/x,h=i-u,w=h*f;let T,k,v,L;if(u<=i&&w<=n&&u+h<=i)T=r,k=u,v=w,L=h;else{const U=u+h,je=i/U;T=r,k=u*je,L=h*je,v=L*f}const _=0,I=n/2,R=(n-v)/2,V=q(o,[{x:_,y:0,width:T,height:k,orientation:"wide"},{x:I,y:0,width:T,height:k,orientation:"wide"},{x:R,y:k,width:v,height:L,orientation:"landscape"}]),G=T*k*2+v*L,Q=G/(n*i)*100;return{videos:V,totalArea:G,efficiency:Q}}if(e.wide===3){const f=N.wide,x=n/2,r=x/f,b=i-r,h=b*f;let w,T,k,v;if(r<=i&&h<=n&&r+b<=i)w=x,T=r,k=h,v=b;else{const Q=r+b,U=i/Q;w=x,T=r*U,v=b*U,k=v*f,k>n&&(k=n,v=k/f)}const L=0,_=n/2,I=(n-k)/2,H=q(o,[{x:L,y:0,width:w,height:T,orientation:"wide"},{x:_,y:0,width:w,height:T,orientation:"wide"},{x:I,y:T,width:k,height:v,orientation:"wide"}]),V=w*T*2+k*v,G=V/(n*i)*100;return{videos:H,totalArea:V,efficiency:G}}if(e.landscape===3){const f=N.landscape,x=n/(f*1.5),r=Math.min(i,x),u=r/2,b=r,h=u*f,w=b*f,T=(i-r)/2,k=[{x:0,y:T,width:h,height:u,orientation:"landscape"},{x:0,y:T+u,width:h,height:u,orientation:"landscape"},{x:h,y:T,width:w,height:b,orientation:"landscape"}],v=q(o,k),L=h*r+w*r,_=L/(n*i)*100;return{videos:v,totalArea:L,efficiency:_}}const a=[];if(e.landscape>0)for(let f=0;f<e.landscape;f++)a.push("landscape");if(e.wide>0)for(let f=0;f<e.wide;f++)a.push("wide");const c=a[0]||o[0].orientation,d=a[1]||o[1].orientation,s=a[2]||o[2].orientation,g=N[c],l=N[d],m=N[s],p=[()=>{const f=n*.6,x=n*.4,r=f/g,u=x/l,b=x/m,h=u+b;return r<=i&&h<=i?{positions:[{x:0,y:(i-r)/2,width:f,height:r,orientation:c},{x:f,y:0,width:x,height:u,orientation:d},{x:f,y:u,width:x,height:b,orientation:s}],totalArea:f*r+x*u+x*b}:null},()=>{const f=i*.5,x=i*.5,r=f*g,u=f*l,b=x*m;return r+u<=n&&b<=n?{positions:[{x:0,y:0,width:r,height:f,orientation:c},{x:r,y:0,width:u,height:f,orientation:d},{x:(n-b)/2,y:f,width:b,height:x,orientation:s}],totalArea:r*f+u*f+b*x}:null},()=>{const f=n/3,x=f/g,r=f/l,u=f/m;return Math.max(x,r,u)<=i?{positions:[{x:0,y:(i-x)/2,width:f,height:x,orientation:c},{x:f,y:(i-r)/2,width:f,height:r,orientation:d},{x:f*2,y:(i-u)/2,width:f,height:u,orientation:s}],totalArea:f*x+f*r+f*u}:null}];let j=null,E=0;for(const f of p){const x=f();x&&x.totalArea>E&&(E=x.totalArea,j=x)}if(!j){const f=n/3,x=Math.min(f/g,i),r=Math.min(f/l,i),u=Math.min(f/m,i);j={positions:[{x:0,y:(i-x)/2,width:f,height:x,orientation:c},{x:f,y:(i-r)/2,width:f,height:r,orientation:d},{x:f*2,y:(i-u)/2,width:f,height:u,orientation:s}],totalArea:f*x+f*r+f*u}}const y=q(o,j.positions),S=j.totalArea/(n*i)*100;return{videos:y,totalArea:j.totalArea,efficiency:S}}function So(e,o,n,i){if(e.portrait>0)return _e(e,o,n,i);const a=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)a.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)a.push("wide");const c=a[0]||o[0].orientation,d=a[1]||o[1].orientation,s=a[2]||o[2].orientation,g=a[3]||o[3].orientation,l=N[c],m=N[d],p=N[s],j=N[g],E=[()=>{const r=n/2,u=i/2,b=Math.min(r,u*l),h=b/l,w=Math.min(r,u*m),T=w/m,k=Math.min(r,u*p),v=k/p,L=Math.min(r,u*j),_=L/j;return{positions:[{x:(r-b)/2,y:(u-h)/2,width:b,height:h,orientation:c},{x:r+(r-w)/2,y:(u-T)/2,width:w,height:T,orientation:d},{x:(r-k)/2,y:u+(u-v)/2,width:k,height:v,orientation:s},{x:r+(r-L)/2,y:u+(u-_)/2,width:L,height:_,orientation:g}],totalArea:b*h+w*T+k*v+L*_}},()=>{const r=n*.6,u=n*.4,b=r/l,h=i/3,w=Math.min(u,h*m),T=w/m,k=Math.min(u,h*p),v=k/p,L=Math.min(u,h*j),_=L/j;return b<=i?{positions:[{x:0,y:(i-b)/2,width:r,height:b,orientation:c},{x:r,y:0,width:w,height:T,orientation:d},{x:r,y:h,width:k,height:v,orientation:s},{x:r,y:h*2,width:L,height:_,orientation:g}],totalArea:r*b+w*T+k*v+L*_}:null},()=>{const r=n/4,u=r/l,b=r/m,h=r/p,w=r/j;return Math.max(u,b,h,w)<=i?{positions:[{x:0,y:(i-u)/2,width:r,height:u,orientation:c},{x:r,y:(i-b)/2,width:r,height:b,orientation:d},{x:r*2,y:(i-h)/2,width:r,height:h,orientation:s},{x:r*3,y:(i-w)/2,width:r,height:w,orientation:g}],totalArea:r*u+r*b+r*h+r*w}:null}];let y=null,S=0;for(const r of E){const u=r();u&&u.totalArea>S&&(S=u.totalArea,y=u)}if(!y){const r=n/2,u=i/2,b=Math.min(u,r/l),h=Math.min(u,r/m),w=Math.min(u,r/p),T=Math.min(u,r/j);y={positions:[{x:(r-r)/2,y:(u-b)/2,width:r,height:b,orientation:c},{x:r+(r-r)/2,y:(u-h)/2,width:r,height:h,orientation:d},{x:(r-r)/2,y:u+(u-w)/2,width:r,height:w,orientation:s},{x:r+(r-r)/2,y:u+(u-T)/2,width:r,height:T,orientation:g}],totalArea:r*b+r*h+r*w+r*T}}const f=q(o,y.positions),x=y.totalArea/(n*i)*100;return{videos:f,totalArea:y.totalArea,efficiency:x}}const Ao=e=>{const[o,n]=A.useState({}),[i,a]=A.useState(!0),[c,d]=A.useState(null);return A.useEffect(()=>{if(!e||e.length===0){a(!1);return}let s=!0;async function g(){a(!0),d(null);try{const l=e.map(async p=>{try{const j=$(`/api/states/${p}`),y=(await P(j)).data?.attributes?.access_token||null;return{entityId:p,accessToken:y}}catch(j){return D.error(`Failed to fetch access token for ${p}:`,j),{entityId:p,accessToken:null}}}),m=await Promise.all(l);if(s){const p={};m.forEach(({entityId:j,accessToken:E})=>{E&&(p[j]=E)}),n(p),a(!1)}}catch(l){s&&(D.error("Failed to fetch camera access tokens:",l),d(B(l)),a(!1))}}return g(),()=>{s=!1}},[e?.length,e?.join(",")]),A.useEffect(()=>{if(!e||e.length===0)return;let s=!0,g=null;async function l(){if(s)try{const m=e.map(async j=>{try{const E=$(`/api/states/${j}`),S=(await P(E)).data?.attributes?.access_token||null;return{entityId:j,accessToken:S}}catch(E){return D.debug(`Failed to refresh access token for ${j}:`,E),null}}),p=await Promise.all(m);s&&n(j=>{const E={...j};return p.forEach(y=>{y&&y.accessToken&&(E[y.entityId]=y.accessToken)}),E})}catch{}}return g=setInterval(l,300*1e3),()=>{s=!1,g&&clearInterval(g)}},[e?.length,e?.join(",")]),A.useEffect(()=>{if(!e||e.length===0)return;let s=null,g=[],l=!0,m=null,p=!1;async function j(){if(p)return;if(s){try{g.forEach(f=>{f&&f()}),g=[],s.close()}catch{}s=null}p=!0;let E;if(typeof window<"u"&&window.location){const f=window.location.pathname.replace(/\/$/,"");E=`${window.location.origin}${f}`}else E="";const y=he||K||"";if(!y){p=!1;return}let S;try{S=le(E,y),l&&d(!1)}catch(f){l&&(D.error("Failed to create WebSocket auth for camera tokens:",f),d(f instanceof Error?f.message:String(f))),p=!1;return}try{s=await de({auth:S}),s.addEventListener("ready",()=>{l&&D.debug("WebSocket connection ready for camera tokens")}),s.addEventListener("disconnected",()=>{l&&!p&&(D.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),m&&clearTimeout(m),s=null,g=[],m=setTimeout(()=>{l&&!p&&(D.debug("Attempting to reconnect WebSocket for camera tokens"),j())},5e3))});for(const f of e){const x=u=>{if(l){const h=u.variables.trigger.to_state?.attributes?.access_token||null;n(w=>h?{...w,[f]:h}:w)}},r=await s.subscribeMessage(x,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:f}});g.push(r)}p=!1}catch(f){p=!1,l&&(D.error("Failed to setup WebSocket connection for camera tokens:",f),d(f instanceof Error?f.message:String(f)),m=setTimeout(()=>{l&&j()},1e4))}}return j(),()=>{l=!1,m&&clearTimeout(m),g.forEach(E=>{E&&E()}),s&&s.close()}},[e?.length,e?.join(",")]),[o,i,c]},To=(e,o=null)=>{if(!e)return null;let n=`/api/camera_proxy_stream/${e}`;if(o&&(n=`${n}?token=${encodeURIComponent(o)}`),typeof window<"u"&&window.location){const i=window.location.protocol,a=window.location.host;return`${i}//${a}${n}`}return n},Ie=45e3,ko=C.div`
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
`,vo=()=>{if(!ct)return null;const[e,o]=A.useState(!1),[n]=xo(),[i,a]=A.useState(void 0),[c,d]=A.useState(100),[s,g]=A.useState("0"),l=A.useMemo(()=>Z.map(y=>y.entity_id).filter(Boolean),[Z]),[m]=Ao(l);A.useEffect(()=>{if(n==="off"&&e){const y=window.setTimeout(()=>{o(!1),a(void 0)},Ie);return a(y),g(Ie+"ms"),d(0),()=>{y&&window.clearTimeout(y)}}else n==="on"&&(g(0),d(100),o(!0))},[n,e]),A.useEffect(()=>{n==="on"&&i!==void 0&&(window.clearTimeout(i),g(0),d(100),a(void 0))},[i,n]);const[p,j]=A.useState(null),E=()=>{p===null?j("confirm"):p==="confirm"&&(j("opening"),wo(),setTimeout(()=>j(null),2e3))};return A.useEffect(()=>{if(p==="confirm"){const y=setTimeout(()=>{j(null)},3e3);return()=>{clearTimeout(y)}}},[p]),A.useEffect(()=>{e||j(null)},[e]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>o(y=>!y),children:"CCTV"}),t.jsx(fe,{visible:e,onClick:E,onClose:()=>{o(!1),j(null)},fullsize:!0,children:t.jsxs(ko,{onClick:E,children:[t.jsx(ut,{completed:c,height:10,bgColor:i===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:s,transitionTimingFunction:"linear"}),t.jsx("div",{className:"grid",children:(()=>{if(Z.length===0)return null;const y=Z.map(b=>({orientation:b.orientation||"landscape"})),S=window.innerWidth,f=window.innerHeight-10,x=ft(y,S,f),r={portrait:Z.filter(b=>(b.orientation||"landscape")==="portrait"),landscape:Z.filter(b=>(b.orientation||"landscape")==="landscape"),wide:Z.filter(b=>b.orientation==="wide")},u={portrait:0,landscape:0,wide:0};return x.videos.map((b,h)=>{const w=b.orientation,T=u[w],k=r[w][T];if(!k)return null;u[w]++;const v=m[k.entity_id]||null,L=To(k.entity_id,v);return L?t.jsxs("div",{className:"video-container",style:{left:`${b.x}px`,top:`${b.y}px`,width:`${b.width}px`,height:`${b.height}px`},children:[t.jsx("img",{src:L,className:w,alt:"Camera stream"}),t.jsx("div",{className:"video-overlay",onClick:()=>E()})]},`${w}-${T}-${h}`):null})})()}),p==="confirm"&&t.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),p==="opening"&&t.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},Lo=C.div`
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

`,Co=({nextWeek:e,previousWeek:o,startWeekWithToday:n})=>t.jsxs(Lo,{children:[t.jsxs("div",{className:"buttons",children:[t.jsx(F,{path:Rt,size:"32px",color:"#ffffff",onClick:o}),t.jsx(F,{path:Pt,size:"32px",color:"#ffffff",onClick:e}),t.jsx("button",{onClick:n,children:"Today"}),t.jsx(vo,{})]}),t.jsx(go,{}),t.jsx(F,{path:Mt,size:"32px",color:"#ffffff",className:z("indicator")})]}),Oo=O.memo(Co),No=6e4,De=(e=No,o=void 0)=>{const[n,i]=A.useState(!0);return A.useEffect(()=>{const a=setInterval(()=>{i(c=>!c)},e);return()=>{clearInterval(a)}},[e,o]),n},_o=e=>$(`/api/calendars/${e}`),Do=(e,o)=>`${_o(e)}?${Zt.stringify(o)}`,Ro={mdiDelete:Wt,mdiCake:$t},Po=e=>{if(!e||typeof e!="string")return;const o=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Ro[o]||void 0},Mo=co.map(e=>({name:e.name,icon:Po(e.icon)})),$o=(e,o,n,i)=>P(Do(e.name,{start:o.toISO(),end:n.toISO()}),{timeout:1e4}).then(a=>{!a.data||!Array.isArray(a.data)||a.data.forEach(c=>{const d="dateTime"in c.start?W.fromISO(c.start.dateTime):W.fromSQL(c.start.date);let s;"dateTime"in c.end?s=Math.floor(W.fromISO(c.end.dateTime).diff(o,"days").as("days")):s=Math.floor(W.fromSQL(c.end.date).diff(o,"days").as("days"))-1;const g=Math.floor(d.diff(o,"days").as("days"));s>=i.length&&(s=i.length-1);const l="dateTime"in c.start?"events":"allDay";if(g>=0&&g<i.length)for(let m=g;m<=s;m++)i[m][l]=[...i[m][l],{...c,icon:e.icon}]})}).catch(a=>{throw a}),Ve=new Map,Wo=300*1e3,Io=e=>e.toISODate(),Vo=(e,o,n,i,a,c)=>{const d=[0,1,2,3,4,5].map(p=>e.plus({days:p}).startOf("day"));d[6]=e.plus({days:6}).endOf("day");const s=Io(e),g=Ve.get(s);if(g&&Date.now()-g.timestamp<Wo){n(g.data);return}const l=d.map(p=>({date:p,allDay:[],events:[]})),m=new AbortController;a.current&&a.current.abort(),a.current=m;try{i(!0);const p=Mo.map(j=>$o(j,d[0],d[6],l));Promise.all(p).then(()=>{m.signal.aborted||(Ve.set(s,{data:l,timestamp:Date.now()}),n(l),c(!1))}).catch(j=>{m.signal.aborted||c(B(j))}).finally(()=>{m.signal.aborted||i(!1)})}catch(p){m.signal.aborted||(c(B(p)),i(!1))}},Fe=[],Fo=e=>{const[o,n]=A.useState(Fe),[i,a]=A.useState(!1),[c,d]=A.useState(!1),s=De(6e4,"Calendar"),[g,l]=A.useState(null),m=O.useRef(null);return A.useEffect(()=>(e!==void 0&&((g===null||!g.equals(e))&&(n(Fe),l(e)),Vo(e,o,n,a,m,d)),()=>{m.current&&m.current.abort()}),[e,s]),[o,c]};function ce(e){const[o,n]=A.useState(!1);function i({key:c}){c===e&&n(!0)}const a=({key:c})=>{c===e&&n(!1)};return A.useEffect(()=>(window.addEventListener("keydown",i),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",i),window.removeEventListener("keyup",a)}),[e]),o}const zo=()=>{let e=new Date,n=(e.getDay()+6)%7,i=new Date(e.setDate(e.getDate()-n));return W.fromJSDate(i)},Bo=e=>{const o=()=>e(s=>s.plus({days:7})),n=ce("ArrowRight");A.useEffect(()=>{n&&o()},[n]);const i=()=>e(s=>s.minus({days:7})),a=ce("ArrowLeft");A.useEffect(()=>{a&&i()},[a]);const c=()=>e(zo()),d=ce("t");return A.useEffect(()=>{d&&c()},[d]),{nextWeek:o,previousWeek:i,startWeekWithToday:c}},Ho=e=>{const[o,n]=O.useState(0),[i,a]=O.useState(0),c=50;return{onTouchStart:l=>{a(0),n(l.targetTouches[0].clientX)},onTouchMove:l=>a(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!o||!i)return;const l=o-i,m=l>c,p=l<-c;m&&e.onSwipedLeft(),p&&e.onSwipedRight()}}},ze=e=>W.fromISO(e).toLocaleString(W.TIME_24_SIMPLE),Ae=e=>e.toFormat("c")>=6,Te=e=>e.hasSame(W.now(),"day"),Go=C.div`
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
`,Uo=()=>{const[e,o]=A.useState(void 0),[n,i]=Fo(e),{nextWeek:a,previousWeek:c,startWeekWithToday:d}=Bo(o);A.useEffect(()=>{d()},[]);const s=Ho({onSwipedLeft:()=>a(),onSwipedRight:()=>c()}),g=O.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=O.useMemo(()=>n.slice(0,7),[n]);return t.jsxs(Go,{...s,children:[t.jsx(Oo,{nextWeek:a,previousWeek:c,startWeekWithToday:d}),t.jsxs("div",{className:"schedule",children:[l.map((m,p)=>t.jsx("div",{className:z({weekend:Ae(m.date),today:Te(m.date)},"caption"),children:t.jsx("h2",{children:m.date.toLocaleString(g)})},p)),l.map((m,p)=>t.jsx("div",{className:z("allDayRow",{weekend:Ae(m.date),today:Te(m.date)}),children:m.allDay.map((j,E)=>t.jsx("div",{className:"allDayEvent",children:j.summary},E))},p)),l.map((m,p)=>t.jsx("div",{className:z("eventRow",{weekend:Ae(m.date),today:Te(m.date)}),children:m.events.map((j,E)=>t.jsxs("div",{className:"event",children:[t.jsx("div",{children:j.summary}),t.jsxs("h3",{children:[j.icon&&t.jsx(F,{path:j.icon,size:"1rem",color:"#ffffff"}),ze(j.start.dateTime)," - ",ze(j.end.dateTime)]})]},E))},p))]}),n.length===0&&t.jsx("div",{className:"loading",children:i!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),t.jsx("div",{children:i instanceof Error?i.message:String(i)})]}):t.jsx(Qe,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),i!==!1&&n.length>0&&t.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:t.jsxs("div",{children:["Warnung: ",i instanceof Error?i.message:String(i)]})})]})},ye={"clear-day":{icon:St,label:"Klar",color:"#eeeef5"},"clear-night":{icon:Et,label:"Klar",color:"#eeeef5"},rain:{icon:jt,label:"Regen",color:"#80a5d6"},snow:{icon:bt,label:"Schnee",color:"#8c82ce"},sleet:{icon:yt,label:"Graupel",color:"#aba4db"},wind:{icon:wt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:xt,label:"Neblig",color:"#d5dae2"},cloudy:{icon:gt,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:mt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:pt,label:"Teils bewölkt",color:"#d5dae2"}},Yo=()=>`./forecast/${et}/${tt},${ot}?&units=si&exclude=minutely`,Ko=e=>{const[o,n]=A.useState([]),[i,a]=A.useState(!1),c=De(6e4*10,"Weather"),d=it&&et&&tt&&ot;return A.useEffect(()=>{d&&P(Yo()).then(s=>{n(s.data),a(!1)}).catch(s=>{a(B(s))}).finally(()=>{})},[c,e,d]),[o,i]},Xo=Tt(kt),Be=C.div`

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
`,He=O.memo(({data:e,daily:o=!1})=>t.jsxs("div",{children:[t.jsxs("div",{children:[!o&&W.fromSeconds(e.time).toLocaleString(W.TIME_24_SIMPLE),o&&W.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),t.jsx("div",{children:t.jsx(Ce,{icon:e.icon})}),t.jsx("div",{children:t.jsxs("strong",{children:[!o&&t.jsxs(t.Fragment,{children:[Math.round(e.temperature),"°"]}),o&&t.jsxs(t.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),t.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),t.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),qo=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(o=>({color:ye[o.icon]?.color||"#ffffff",text:ye[o.icon]?.label||"",annotation:`${Math.round(o.temperature)}°`,time:o.time})),Ce=({icon:e})=>{const o=ye[e];return t.jsx(o.icon,{size:60,color:"#ffffff"})},Jo=()=>{if(!it)return null;const[e,o]=Ko(),[n,i]=A.useState(!1),a=ce("w"),c=A.useRef(),d=O.useCallback(()=>i(p=>!p),[]),s=O.useCallback(()=>i(!0),[]),g=O.useMemo(()=>qo(e),[e]),l=O.useMemo(()=>[3,6,9,12],[]),m=O.useMemo(()=>[1,2,3,4,5,6,7],[]);return A.useEffect(()=>{if(!n||!c.current||!e||!e.hourly||g.length===0)return;const p={timezone:"Europe/Berlin"},j=document.createElement("div");return c.current.textContent="",c.current.appendChild(j),oo(j,g,p),()=>{c.current&&(c.current.textContent="")}},[n,g]),A.useEffect(()=>{a&&d()},[a]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?o!==!1?t.jsx(Be,{children:t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":t.jsxs(Be,{children:[t.jsxs("div",{onClick:s,children:[t.jsxs("div",{className:"headline",children:[t.jsx(Ce,{icon:e.currently.icon}),t.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),t.jsx("div",{className:"forecast",children:l.map((p,j)=>t.jsx(He,{data:e.hourly.data[p]},j))})]}),t.jsx(fe,{visible:n,onClick:d,children:t.jsxs("div",{className:"full-weather",children:[o!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),t.jsxs("div",{className:"detail-header",children:[t.jsx("div",{children:t.jsxs("div",{className:"headline",children:[t.jsx(Ce,{icon:e.daily.data[0].icon}),t.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",t.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),t.jsx("h3",{children:ye[e.daily.data[0].icon].label})]}),t.jsx("div",{className:"values",children:t.jsxs("div",{className:"table",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]})]})}),t.jsx("h3",{children:"Die nächsten 24 Stunden"}),t.jsx("div",{ref:c}),t.jsx("h3",{children:"Die nächste Woche"}),t.jsx("div",{className:"forecast",children:m.map((p,j)=>t.jsx(He,{data:e.daily.data[p],daily:!0},j))}),t.jsxs("div",{className:"info",children:["Aktualisiert ",t.jsx(At,{date:W.fromSeconds(e.currently.time).toJSDate(),formatter:Xo})]})]})})]})},Qo=O.memo(Jo);async function Zo(e){if(!ve)throw new Error("GEOFOX_SECRET is not configured");return eo.stringify(to(JSON.stringify(e),ve))}const en="AK Wandsbek",tn="Hamburg",on="Master:62016",nn="STATION",rn={x:10.091341,y:53.568702},sn={name:en,city:tn,id:on,type:nn,coordinate:rn},ge={departureList:"departureList",checkName:"checkName"},an=async(e,o)=>P({method:"post",url:`./gti/public/${e}`,data:o,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":nt,"geofox-auth-signature":await Zo(o),Authorization:void 0}}),Ge=(e,o)=>e.realtimeOffset-o.realtimeOffset,cn=e=>{const o=e.departures.map(n=>({line:n.line.name,direction:n.line.direction,timeOffset:n.timeOffset,delay:n.delay?n.delay:"0",directionId:n.directionId,realtimeOffset:n.timeOffset+(n.delay?n.delay:0)/60}));return{from:o.filter(n=>n.directionId===1).slice(0,3).sort(Ge),to:o.filter(n=>n.directionId===6).slice(0,3).sort(Ge)}},ln=e=>{const[o,n]=A.useState([]),[i,a]=A.useState(!1),c=De(6e4),d=rt&&nt&&ve;return A.useEffect(()=>{if(!d||!(e in ge))return;let s={version:51};switch(e){case ge.checkName:s={...s,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case ge.departureList:const g=W.now();s={...s,station:sn,time:{date:g.toFormat("dd.MM.yyyy"),time:g.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:s=void 0}an(e,s).then(g=>{n(cn(g.data)),a(!1)}).catch(g=>{a(B(g))})},[e,c,d]),[o,i]},dn=C.div`
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
`,Ue=O.memo(({line:e,direction:o,realtimeOffset:n})=>t.jsxs("div",{className:"departure",children:[t.jsx("div",{children:t.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),t.jsx("div",{children:n===0?"Jetzt":t.jsxs(t.Fragment,{children:["in ",n," '"]})})]})),fn=()=>{if(!rt)return null;const[e,o]=ln(ge.departureList);return t.jsxs(dn,{children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:t.jsxs("g",{transform:"translate(10368 -6294)",children:[t.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),t.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),o!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"→ Wandsbek"}),e.to?.map((n,i)=>t.jsx(Ue,{line:n.line,direction:n.direction,realtimeOffset:n.realtimeOffset},i)),t.jsx("h3",{children:"→ Stadtauswärts"}),e.from?.map((n,i)=>t.jsx(Ue,{line:n.line,direction:n.direction,realtimeOffset:n.realtimeOffset},i))]})]})},hn=O.memo(fn),un=()=>{const[e,o]=A.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[n,i]=A.useState(!1),a=dt&&(te||oe||ne);return A.useEffect(()=>{if(!a)return;(async()=>{const d=[];te&&d.push(P($(`/api/states/${te}`)).then(l=>({type:"preclimateStatus",value:l.data.state==="on"})).catch(l=>({type:"preclimateStatus",error:B(l)}))),oe&&d.push(P($(`/api/states/${oe}`)).then(l=>({type:"chargingState",value:l.data.state==="on"})).catch(l=>({type:"chargingState",error:B(l)}))),ne&&d.push(P($(`/api/states/${ne}`)).then(l=>({type:"stateOfCharge",value:parseFloat(l.data.state)||0})).catch(l=>({type:"stateOfCharge",error:B(l)})));const s=await Promise.all(d);let g=!1;s.forEach(l=>{l.error?g=l.error:o(m=>({...m,[l.type]:l.value}))}),i(g||!1)})()},[a]),A.useEffect(()=>{let c=null,d=!0;async function s(){if(!a)return;let g;if(typeof window<"u"&&window.location){const p=window.location.pathname.replace(/\/$/,"");g=`${window.location.origin}${p}`}else g="";const l=he||K||"";if(!l)return;let m;try{m=le(g,l),d&&i(!1)}catch(p){d&&(D.error("Failed to create WebSocket auth:",p),i(p instanceof Error?p.message:String(p)));return}try{c=await de({auth:m});const p=E=>{if(d){const y=E.variables.trigger.to_state.entity_id,S=E.variables.trigger.to_state.state;o(f=>{const x={...f};return y===te?x.preclimateStatus=S==="on":y===oe?x.chargingState=S==="on":y===ne&&(x.stateOfCharge=parseFloat(S)||0),x})}},j=[];te&&j.push(te),oe&&j.push(oe),ne&&j.push(ne);for(const E of j)await c.subscribeMessage(p,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:E}})}catch(p){d&&(D.error("Failed to setup WebSocket connection:",p),i(p instanceof Error?p.message:String(p)))}}return s(),()=>{d=!1,c&&c.close()}},[a]),[e,n]},pn=()=>{Me&&P.post($("/api/services/button/press"),{entity_id:Me}).catch(e=>{D.error("Failed to start preclimate:",e)})},mn=()=>{$e&&P.post($("/api/services/button/press"),{entity_id:$e}).catch(e=>{D.error("Failed to stop preclimate:",e)})},gn=C.div`
  padding-bottom: 12px;

  h2 {
    margin-top: 2rem;
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
    gap: 0.5rem;
  }

  .charge-percentage {
    font-size: 0.9rem;
    font-weight: 400;
    color: #ffffff;
  }

  .preclimate-button {
    margin-top: 1rem;
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

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`,xn=(e,o)=>o?Vt:e>=80?Ft:e>=50?zt:e>=20?Bt:Ht,wn=()=>{if(!dt)return null;const[e,o]=un(),{preclimateStatus:n,chargingState:i,stateOfCharge:a}=e,c=O.useCallback(()=>{o===!1&&(n?mn():pn())},[n,o]),d=xn(a||0,i),s=Math.round(a||0);return t.jsxs(gn,{className:z({disabled:o!==!1}),children:[t.jsx("h2",{children:"Auto"}),t.jsx("div",{className:"status",children:o!==!1?t.jsxs(t.Fragment,{children:[t.jsx(F,{path:Ne,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs("div",{className:"battery-info",children:[t.jsx(F,{path:d,size:"2rem",color:i?"#17e146":"#ffffff"}),t.jsxs("span",{className:"charge-percentage",children:[s,"%"]})]})}),o===!1&&t.jsxs("button",{className:z("preclimate-button",{spinning:n}),onClick:c,disabled:o!==!1,children:[t.jsx(F,{path:It,size:"2rem",color:n?"#ff9800":"#ffffff"}),t.jsx("span",{children:n?"Stop":"Start"})]})]})},yn=O.memo(wn),bn=()=>{const[e,o]=A.useState("closed"),[n,i]=A.useState(!1),a=st&&X,c=X?$(`/api/states/${X}`):null;return A.useEffect(()=>{!a||!c||P(c).then(d=>{o(d.data.state),i(!1)}).catch(d=>{i(B(d))})},[a,c]),A.useEffect(()=>{let d=null,s=!0;async function g(){if(!a||!X)return;let l;if(typeof window<"u"&&window.location){const j=window.location.pathname.replace(/\/$/,"");l=`${window.location.origin}${j}`}else l="";const m=he||K||"";if(!m)return;let p;try{p=le(l,m),s&&i(!1)}catch(j){s&&(D.error("Failed to create WebSocket auth:",j),i(j instanceof Error?j.message:String(j)));return}try{d=await de({auth:p});const j=E=>{s&&o(E.variables.trigger.to_state.state)};await d.subscribeMessage(j,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:X}})}catch(j){s&&(D.error("Failed to setup WebSocket connection:",j),i(j instanceof Error?j.message:String(j)))}}return g(),()=>{s=!1,d&&d.close()}},[a]),[e,n]},jn=e=>{if(!X)return;e(!0);const o=setTimeout(()=>e(!1),3e3);P.post($("/api/services/cover/toggle"),{entity_id:X}).catch(n=>{D.error("Failed to toggle garage door:",n)}).finally(()=>{clearTimeout(o),e(!1)})},En=e=>{if(!X)return;e(!0);const o=setTimeout(()=>e(!1),3e3);P.post($("/api/services/cover/open_cover"),{entity_id:X}).catch(n=>{D.error("Failed to open garage door:",n)}).finally(()=>{clearTimeout(o),e(!1)})},Sn=e=>{if(!X)return;e(!0);const o=setTimeout(()=>e(!1),3e3);P.post($("/api/services/cover/close_cover"),{entity_id:X}).catch(n=>{D.error("Failed to close garage door:",n)}).finally(()=>{clearTimeout(o),e(!1)})},An=C.div`
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
`,ht=C.div`
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
`,Oe=e=>({unknown:{label:"In Bewegung oder halb-offen",icon:Xt},open:{label:"Offen",icon:Kt},closed:{label:"Geschlossen",icon:Yt},opening:{label:"Öffnet",icon:Ut},closing:{label:"Schließt",icon:Gt}})[e]||{label:"Unavailable",icon:qt},Tn=({garageDoor:e,animate:o=!1})=>t.jsxs(ht,{className:z({animate:o}),children:[t.jsx(F,{path:Oe(e).icon,size:"2rem",color:"#ffffff"}),t.jsx("span",{children:Oe(e).label})]}),kn=e=>vt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:o}){return Oe(o).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),vn=()=>{if(!st)return null;const[e,o]=bn(),[n,i]=A.useState(void 0),[a,c]=A.useState(!1),[d,s]=A.useState(!1);A.useEffect(()=>{if(e==="unknown"||e==="opening"||e==="closing"){if(!n){const j=new Promise(E=>{i({resolve:E})});kn(j)}}else n&&(n.resolve(e),i(void 0))},[e]);const g=ce("g");A.useEffect(()=>{g&&o===!1&&jn(c)},[g,o]);const l=O.useCallback(p=>{if(o===!1)switch(s(!1),p){case"open":En(c);break;case"close":Sn(c);break}},[c,o]),m=O.useCallback(()=>{o===!1&&s(!0)},[o]);return t.jsxs(An,{className:z({disabled:o!==!1}),children:[t.jsx("h2",{children:"Garage"}),t.jsx("div",{className:"status",onClick:m,children:o!==!1?t.jsxs(ht,{children:[t.jsx(F,{path:Ne,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsx(Tn,{garageDoor:e,animate:a})}),t.jsx(fe,{visible:d&&o===!1,onClick:()=>s(!1),children:t.jsxs("div",{className:"controls",children:[t.jsx("h2",{children:"Garagentor"}),t.jsx("div",{onClick:()=>l("open"),children:"Öffnen"}),t.jsx("div",{onClick:()=>l("close"),children:"Schließen"})]})})]})},Ln=O.memo(vn),Cn=e=>e?$(`/api/states/${e}`):null,Y={done:{label:"Fertig",animate:!1,icon:Qt},off:{label:"Aus",animate:!1,icon:Jt},standby:{label:"Standby",animate:!1,icon:Re},running:{label:"Läuft …",animate:!0,icon:Re}},On={off:0,standby:2,running:16,done:256},Nn=()=>{const o=(Array.isArray(we)?we:[]).map((l,m)=>{const[p,j]=_n(l.entity_id);return{state:p,error:j,name:l.name}}),[n,i]=A.useState(Y.off),[a,c]=A.useState(!1),d=o.map(l=>l.state),s=o.map(l=>l.error);A.useEffect(()=>{const l=s.some(m=>m!==!1);c(l&&s.find(m=>m!==!1)||!1)},[s]),A.useEffect(()=>{const l=d.reduce((m,p)=>m+(On[p]||0),0);l===0?i(Y.off):l<16?i(Y.standby):l<256?i(Y.running):l%256===0?i(Y.done):l%256%16===0?i(Y.running):l%256%2===0?i(Y.done):i(Y.running)},[d]);const g=o.map(l=>({label:l.name,state:l.state}));return[n,g,a]},_n=e=>{const[o,n]=A.useState("off"),[i,a]=A.useState(!1),c=at&&e,d=Cn(e);return A.useEffect(()=>{!c||!d||P(d).then(s=>{n(s.data.state),a(!1)}).catch(s=>{a(B(s))})},[e,c,d]),A.useEffect(()=>{let s=null,g=null,l=!0;async function m(){if(!c||!e)return;let p;if(typeof window<"u"&&window.location){const E=window.location.pathname.replace(/\/$/,"");p=`${window.location.origin}${E}`}else p="";const j=he||K||"";if(j)try{const E=le(p,j);s=await de({auth:E});const y=S=>{l&&n(S.variables.trigger.to_state.state)};g=await s.subscribeMessage(y,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}})}catch(E){l&&(D.error(`Failed to setup WebSocket connection for ${e}:`,E),a(E instanceof Error?E.message:String(E)))}}return m(),()=>{l=!1,g&&g(),s&&s.close()}},[e,c]),[o,i]},Dn=C.div`
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
`,Rn=()=>{if(!at)return null;const[e,o,n]=Nn(),[i,a]=A.useState(!1),c=O.useCallback(()=>{n===!1&&a(!0)},[n]),d=O.useCallback(()=>a(!1),[]);return t.jsxs(Dn,{className:z({disabled:n!==!1}),children:[t.jsx("h2",{children:"Wäsche"}),t.jsx("div",{className:"status",onClick:c,children:n!==!1?t.jsxs(t.Fragment,{children:[t.jsx(F,{path:Ne,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:z({animate:e.animate}),children:t.jsx(F,{path:e.icon,size:"2rem",color:"#ffffff"})}),t.jsx("span",{children:e.label})]})}),t.jsx(fe,{visible:i&&n===!1,onClick:d,children:t.jsxs("div",{className:"states",children:[t.jsx("h2",{children:"Wäsche"}),o.map((s,g)=>t.jsxs("div",{children:[t.jsx("div",{className:"subtitle",children:s.label}),t.jsx("div",{className:z({animate:Y[s.state].animate}),children:t.jsx(F,{path:Y[s.state].icon,size:2})}),t.jsx("div",{children:Y[s.state].label})]},g))]})})]})},Pn=O.memo(Rn),Mn=C.div`
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
`,$n=()=>t.jsxs(Mn,{children:[t.jsxs("div",{className:"top-content",children:[t.jsx(Qo,{}),t.jsx(hn,{}),t.jsx(yn,{})]}),t.jsxs("div",{className:"two-cols",children:[t.jsx(Ln,{}),t.jsx(Pn,{})]})]}),Wn=O.memo($n),Ye=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],In=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],xe={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},Vn={landscape:"L",portrait:"P",wide:"W"},Fn=C.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,zn=C.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Bn=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,ie=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,re=C.label`
  font-size: 0.9rem;
  color: #cccccc;
`,Ke=C.select`
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
`,Xe=C.input`
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
`,Hn=C.button`
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
`,qe=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Gn=C.button`
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
`,Un=C.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Yn=C.div`
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
`,Kn=C.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Xn=C.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,qn=C.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,ue=C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pe=C.div`
  font-size: 0.85rem;
  color: #cccccc;
`,me=C.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Jn=C.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Qn=C.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;C.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;const ke=C.button`
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
`,Je=()=>{const[e,o]=O.useState(1920),[n,i]=O.useState(1080),[a,c]=O.useState("Full HD"),[d,s]=O.useState(""),[g,l]=O.useState(""),[m,p]=O.useState([{orientation:"landscape"}]),[j,E]=O.useState(null),y=O.useMemo(()=>ft(m,e,n),[m,e,n]),S=h=>{const w=Ye.find(T=>T.name===h);w&&w.width&&w.height?(o(w.width),i(w.height),c(h),s(""),l("")):h==="Custom"&&c("Custom")},f=()=>{const h=parseInt(d),w=parseInt(g);h>0&&w>0&&(o(h),i(w))},x=h=>{p(h.videos),E(h.name)},r=h=>{const w=[];for(let T=0;T<h;T++)w.push(m[T]||{orientation:"landscape"});p(w),E(null)},u=(h,w)=>{const T=[...m];T[h]={orientation:w},p(T),E(null)},b=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/n));return t.jsxs(Fn,{children:[t.jsx(zn,{children:"Video Tiling Algorithm Demo"}),t.jsxs(Bn,{children:[t.jsxs(ie,{children:[t.jsx(re,{children:"Screen Size Preset"}),t.jsx(Ke,{value:a,onChange:h=>S(h.target.value),children:Ye.map(h=>t.jsx("option",{value:h.name,children:h.name},h.name))})]}),a==="Custom"&&t.jsxs(t.Fragment,{children:[t.jsxs(ie,{children:[t.jsx(re,{children:"Custom Width"}),t.jsx(Xe,{type:"number",value:d,onChange:h=>s(h.target.value),placeholder:"Width",min:"100"})]}),t.jsxs(ie,{children:[t.jsx(re,{children:"Custom Height"}),t.jsx(Xe,{type:"number",value:g,onChange:h=>l(h.target.value),placeholder:"Height",min:"100"})]}),t.jsxs(ie,{children:[t.jsx(re,{children:" "}),t.jsx(Hn,{onClick:f,children:"Apply Custom Size"})]})]}),t.jsxs(ie,{children:[t.jsx(re,{children:"Number of Videos"}),t.jsxs(Ke,{value:m.length,onChange:h=>r(parseInt(h.target.value)),children:[t.jsx("option",{value:"1",children:"1 Video"}),t.jsx("option",{value:"2",children:"2 Videos"}),t.jsx("option",{value:"3",children:"3 Videos"}),t.jsx("option",{value:"4",children:"4 Videos"})]})]}),m.map((h,w)=>t.jsxs(ie,{children:[t.jsxs(re,{children:["Video ",w+1," Orientation"]}),t.jsxs(qe,{children:[t.jsx(ke,{active:h.orientation==="landscape",orientation:"landscape",onClick:()=>u(w,"landscape"),children:"Landscape"}),t.jsx(ke,{active:h.orientation==="portrait",orientation:"portrait",onClick:()=>u(w,"portrait"),children:"Portrait"}),t.jsx(ke,{active:h.orientation==="wide",orientation:"wide",onClick:()=>u(w,"wide"),children:"Wide"})]})]},w))]}),t.jsxs(Jn,{children:[t.jsx(Qn,{children:"Test Scenarios"}),t.jsx(qe,{children:In.map(h=>t.jsx(Gn,{active:j===h.name,onClick:()=>x(h),children:h.name},h.name))})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:t.jsx(Un,{style:{width:`${e*b}px`,height:`${n*b}px`},children:y.videos.map((h,w)=>t.jsxs(Yn,{orientation:h.orientation,style:{left:`${h.x*b}px`,top:`${h.y*b}px`,width:`${h.width*b}px`,height:`${h.height*b}px`},children:[t.jsxs(Kn,{children:[Vn[h.orientation]," ",w+1]}),t.jsxs(Xn,{children:[Math.round(h.width)," × ",Math.round(h.height)]})]},w))})}),t.jsxs(qn,{children:[t.jsxs(ue,{children:[t.jsx(pe,{children:"Canvas Size"}),t.jsxs(me,{children:[e," × ",n]})]}),t.jsxs(ue,{children:[t.jsx(pe,{children:"Total Area Used"}),t.jsxs(me,{children:[Math.round(y.totalArea).toLocaleString()," px²"]})]}),t.jsxs(ue,{children:[t.jsx(pe,{children:"Efficiency"}),t.jsxs(me,{children:[y.efficiency.toFixed(2),"%"]})]}),t.jsxs(ue,{children:[t.jsx(pe,{children:"Display Scale"}),t.jsxs(me,{children:[(b*100).toFixed(1),"%"]})]})]})]})},Zn=()=>{function e(n,i){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(i))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[c,d]=i.split(":").map(Number),s=new Date;let g=new Date(s.getFullYear(),s.getMonth(),s.getDate());g.setHours(c,d,0,0),g<=s&&g.setDate(g.getDate()+1);const l=g.getTime()-s.getTime();return setTimeout(n,l)}const o=()=>{window.location.reload(!0)};A.useLayoutEffect(()=>{const n=[e(o,"00:00"),e(o,"03:00"),e(o,"06:00"),e(o,"09:00"),e(o,"12:00"),e(o,"15:00"),e(o,"18:00"),e(o,"21:00")];return()=>{n.forEach(i=>{i&&clearTimeout(i)})}},[])},ei=C.div`
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
`;class be extends A.Component{constructor(o){super(o),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(o){return{hasError:!0}}componentDidCatch(o,n){this.setState({error:o,errorInfo:n}),D.error("ErrorBoundary caught an error:",o,n)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?t.jsxs(ei,{children:[t.jsx("h2",{children:"Something went wrong"}),t.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,t.jsxs("div",{children:[t.jsx("button",{onClick:this.handleReset,children:"Try Again"}),t.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const ti=Lt`
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
`,oi=C.div`
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
`;function ni(){return Zn(),t.jsxs(oi,{children:[t.jsx(ti,{}),t.jsxs("div",{className:"main",children:[t.jsx(be,{children:t.jsx(Uo,{})}),t.jsx(be,{children:t.jsx(Wn,{})})]}),t.jsx(Ot,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function ii(){return t.jsx(be,{children:t.jsxs(Ct,{children:[t.jsx(Ee,{path:"/demo",element:t.jsx(Je,{})}),t.jsx(Ee,{path:"/tiling-demo",element:t.jsx(Je,{})}),t.jsx(Ee,{path:"*",element:t.jsx(ni,{})})]})})}const ri=Nt.createRoot(document.getElementById("root"));ri.render(t.jsx(A.StrictMode,{children:t.jsx(be,{children:t.jsx(_t,{children:t.jsx(ii,{})})})}));
