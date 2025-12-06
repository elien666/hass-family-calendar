import{d as O,R as _,j as o,I as G,r as C,l as Fe,P as Xe,W as Je,b as Qe,e as Ze,f as et,h as tt,i as ot,k as nt,m as it,n as rt,o as st,T as at,p as ct,s as lt,y as dt,q as ft,t as ut,u as ye,L as ht,v as pt,B as mt}from"./react-vendor-BitJRyew.js";import{D as B}from"./date-vendor-BDx6lZXm.js";import{f as Y}from"./vendor-CeaMKy47.js";import{m as gt,a as xt,b as Et,c as yt,d as wt,e as At,f as _e,g as bt,h as St,i as Tt,j as _t,k as Lt,l as Rt,n as jt,o as Nt,p as Ct,q as kt,r as Ot,s as Dt,t as je,u as vt,v as It}from"./ui-vendor-C7t39j5V.js";import{a as I,q as Wt}from"./utils-vendor-Cs1iS-Fd.js";import{c as se,a as ae}from"./ha-vendor-CoU0AojH.js";import{t as Mt}from"./chart-vendor-ClWajKr-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const g of u.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();const Pt=O.div`
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
`,ce=({visible:e,children:i,onClick:t,onClose:n,fullsize:a=!1})=>{const u=n||t,g=h=>{h.stopPropagation(),h.preventDefault(),u()};return _.useEffect(()=>{if(e){const h=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${h}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,h)}}},[e]),e?o.jsxs(Pt,{onClick:t,children:[o.jsx("div",{className:"close",onClick:g,children:o.jsx(G,{path:gt,size:2})}),o.jsx("div",{className:Y("content",{fullsize:a}),onClick:h=>h.stopPropagation(),children:i})]}):null},R={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},$t={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Vt=()=>{const e=(i,t=void 0)=>{const n=$t[`VITE_${i}`];return n!==void 0?n:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),SUPERVISOR_TOKEN:e("SUPERVISOR_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_API_KEY:e("WEATHER_API_KEY",""),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),GEOFOX_SECRET:e("GEOFOX_SECRET",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const i=e("LAUNDRY_MACHINES","[]");try{return typeof i=="string"?JSON.parse(i):i}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const i=e("DOORBELL_CAMERAS","[]");try{return typeof i=="string"?JSON.parse(i):i}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const i=e("CALENDARS","[]");try{return typeof i=="string"?JSON.parse(i):i}catch{return[]}})()}},Ge=C.createContext(null),Bt=({children:e})=>{const[i,t]=C.useState(Vt),[n,a]=C.useState(!0);return C.useEffect(()=>{(async()=>{try{const g=await I.get("/api/config",{timeout:5e3});g.data&&typeof g.data=="object"&&(t(g.data),R.info("Configuration loaded from API endpoint",{enabledFeatures:Object.keys(g.data).filter(h=>h.startsWith("ENABLE_")&&g.data[h]).map(h=>h.replace("ENABLE_",""))}))}catch(g){R.debug("Failed to load config from API, using defaults:",g.message)}finally{a(!1)}})()},[]),C.useEffect(()=>{const u=i.HASS_ACCESS_TOKEN||"";u&&typeof u=="string"&&u.trim()!==""&&u!=="undefined"&&u!=="null"?(I.defaults.headers.common.Authorization=`Bearer ${u}`,R.debug("Axios Authorization header set from config")):(delete I.defaults.headers.common.Authorization,R.debug("Axios Authorization header removed (add-on mode or no token)"))},[i.HASS_ACCESS_TOKEN]),o.jsx(Ge.Provider,{value:{config:i,loading:n},children:e})},V=()=>{const e=C.useContext(Ge);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config};let ie=0,he=0,Q=0;const ne=[],Ue=e=>{const i={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(i.status=e.response.status,i.responseData=e.response.data,i.url=e.config?.url||e.request?.responseURL||"Unknown URL",i.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(i.isNetworkError=!0,i.url=e.config?.url||"Unknown URL",i.message="Network error: No response received from server",e.request.readyState!==void 0&&(i.readyState=e.request.readyState),e.request.status!==void 0&&(i.requestStatus=e.request.status)):(i.message=e.message||"Request setup error",i.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(i.isTimeoutError=!0,i.message="Request timeout: The request took too long to complete"),e.config&&(i.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),i},Yt=(e,i="")=>{const t=Ue(e);Q++,ie++,ne.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ne.length>10&&ne.shift();const n=[];return i&&n.push(`[${i}]`),n.push("🔴 Axios API Error:"),n.push(`Message: ${t.message}`),t.url&&n.push(`URL: ${t.url}`),t.status&&n.push(`HTTP Status: ${t.status}`),t.code&&n.push(`Error Code: ${t.code}`),t.isNetworkError&&(n.push("Type: Network Error (no response received)"),t.readyState!==void 0&&n.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&n.push("Type: Timeout Error"),t.config&&(n.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),n.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&n.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&n.push("Response Data:",t.responseData),n.push(`Request Stats: ${he} success, ${Q} errors (${ie} total)`),Q>3&&ne.length>0&&n.push("Recent errors pattern:",ne.slice(-5)),R.error(...n),t},Ht=e=>{he++,ie++,(ie%10===0||Q>0)&&R.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:ie,stats:`${he} success, ${Q} errors`}),Q>0&&ie%10===0&&he>Q&&(R.debug("Request pattern: Errors cleared, connection appears healthy"),Q=0,ne.length=0)},z=e=>{const i=Ue(e);return i.isNetworkError?"":i.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":i.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":i.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":i.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":i.status>=500?"Serverfehler: Bitte später erneut versuchen":i.message||"Ein Fehler ist aufgetreten"},ze=!1,M=(e,i=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG&&window.APP_CONFIG[e]!==void 0){const t=window.APP_CONFIG[e];return t==="undefined"||t==="null"?i:t??i}return i};M("HASS_HOST","");M("HASS_ACCESS_TOKEN","");I.interceptors.request.use(e=>{const i=Date.now();return e.metadata={requestId:i,startTime:Date.now()},typeof window<"u"&&(i%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,R.debug("Axios Defaults State:",{baseURL:I.defaults.baseURL,timeout:I.defaults.timeout,hasAuthHeader:!!I.defaults.headers?.common?.Authorization,authHeaderLength:I.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(I.defaults.headers?.common||{})})),e},e=>(R.error("Axios Request Setup Error:",e),Promise.reject(e)));I.interceptors.response.use(e=>(e.config&&Ht(e.config),e),e=>{const i=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(Yt(e,i),e.config?.metadata){const t=Date.now()-e.config.metadata.startTime;R.error("Request Duration:",`${t}ms`,"Request ID:",e.config.metadata.requestId)}return typeof window<"u"&&window.location&&R.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href}),Promise.reject(e)});M("WEATHER_API_KEY");M("WEATHER_LATITUDE");M("WEATHER_LONGITUDE");M("GEOFOX_SECRET");M("GEOFOX_USER");M("ENTITY_GARAGE_DOOR");M("ENTITY_DOORBELL");M("ENTITY_DOORBELL_BUTTON");M("ENTITY_EVERYDAY_CALENDAR");M("ENTITY_PRECLIMATE_STATUS");M("ENTITY_PRECLIMATE_START");M("ENTITY_PRECLIMATE_STOP");M("ENTITY_CHARGING_STATE");M("ENTITY_STATE_OF_CHARGE");M("SUPERVISOR_TOKEN");const Z=M("INGRESS_URL");(()=>{const e=M("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})();const Ne=(()=>{const e=M("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})();(()=>{const e=M("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})();const ee=(e,i)=>{const t=M(e,void 0);if(t!==void 0){const n=t;return typeof n=="boolean"?n:typeof n=="string"?n==="true"||n==="1"||n==="yes":!!n}return!1};ee("ENABLE_WEATHER");ee("ENABLE_HVV");ee("ENABLE_GARAGE");ee("ENABLE_LAUNDRY",Array.isArray(Ne)&&Ne.length>0);ee("ENABLE_DOORBELL");ee("ENABLE_EVERYDAY_CALENDAR");ee("ENABLE_EV");const P=e=>{const i=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){if(Z&&typeof Z=="string"&&Z.trim()!==""){const n=i.startsWith("/")?i.slice(1):i;return`${window.location.origin}${Z}${n}`}const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}${i}`}return i}},le=()=>{if(typeof window<"u"&&window.location){if(Z&&typeof Z=="string"&&Z.trim()!=="")return`${window.location.origin}${Z.replace(/\/$/,"")}`;const e=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${e}`}return""},Ft=()=>{const e=V(),i=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[n,a]=_.useState(null),[u,g]=_.useState(!1),h=i&&t,b=t?P(`/api/states/${t}`):null;return _.useEffect(()=>{!h||!b||I(b).then(l=>{l.data.attributes.store!==void 0?a(l.data.attributes.store):a([]),g(!1)}).catch(l=>{g(z(l)),a([])})},[h,b,i,t]),[n,u]},Gt=(e,i)=>{const t=i?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const n=P(`/api/states/${t}`);I.post(n,{state:new Date,attributes:{store:e}}).catch(a=>{R.error("Failed to store everyday calendar data:",a)})},Ce=O.div` 

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
`,Ut=({on:e,month:i,day:t})=>{const[n,a]=e,u=n.indexOf(`${i}-${t}`),g=u>-1,h=()=>{a(g?n.toSpliced(u,1):[...n,`${i}-${t}`])};return o.jsx("div",{className:Y("dot",{on:g}),onClick:()=>h()})},zt=()=>{const e=V();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),n=[];for(let l=1;l<13;l++){const f=new Date(t,l,0).getDate();for(let E=1;E<=f;E++)n.push({month:l,day:E})}const a=Array.from({length:31},(l,f)=>f+1),u=Array.from({length:12},(l,f)=>f+1),g=_.useState(void 0),[h,b]=Ft();return _.useEffect(()=>{h!==null&&g[1](h)},[h]),_.useEffect(()=>{g[0]!==void 0&&Gt(g[0],e)},[g[0],e]),g[0]!==void 0?o.jsxs(Ce,{children:[o.jsx("h2",{children:"Jeden Tag ein bißchen"}),b!==!1&&o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:b instanceof Error?b.message:String(b)})]}),o.jsxs("div",{className:"calendar",children:[a.map((l,f)=>o.jsx("div",{style:{gridArea:`${l+1} / 1 / ${l+1} / 1`},children:l},f)),u.map((l,f)=>o.jsx("div",{style:{gridArea:`1 / ${l+1} / 1 / ${l+1}`},children:l},f)),n.map((l,f)=>o.jsx("div",{style:{gridArea:`${l.day+1} / ${l.month+1} / ${l.day+1} / ${l.month+1}`},children:o.jsx(Ut,{on:g,month:l.month,day:l.day})},f))]})]}):o.jsx(Ce,{className:"loading",children:b!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:b instanceof Error?b.message:String(b)})]}):o.jsx(Fe,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},Kt=O.div`
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
  }`,qt=()=>{const[e,i]=_.useState(B.now()),[t,n]=_.useState(!1),a=C.useCallback(()=>n(!0),[]),u=C.useCallback(()=>n(!1),[]);return _.useEffect(()=>{const g=setInterval(()=>i(B.now()),1e3);return()=>clearInterval(g)},[]),o.jsxs(o.Fragment,{children:[o.jsxs(Kt,{onClick:a,children:[e.toFormat("HH"),o.jsx("span",{children:":"}),e.toFormat("mm")]}),o.jsx(ce,{visible:t,onClick:u,fullsize:!0,children:o.jsx(zt,{})})]})},Xt=C.memo(qt),Jt=()=>{const e=V(),i=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const n=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[u,g]=_.useState("off"),[h,b]=_.useState(!1),l=i&&t,f=t?P(`/api/states/${t}`):null;return _.useEffect(()=>{!l||!f||I(f).then(E=>{g(E.data.state),b(!1)}).catch(E=>{b(z(E))})},[l,f,i,t]),_.useEffect(()=>{let E=null,S=null,y=!0,p=null,m=0,s=!1;async function d(){if(!l||!t||s)return;if(E){try{S&&(S(),S=null),E.close()}catch(c){R.debug("Error closing existing WebSocket connection:",c)}E=null}s=!0;const r=le(),x=a||n||"";if(!x){s=!1;return}let A;try{A=se(r,x),y&&b(!1)}catch(c){y&&(R.error("Failed to create WebSocket auth:",c),b(c instanceof Error?c.message:String(c))),s=!1;return}try{E=await ae({auth:A}),E.addEventListener("ready",()=>{y&&(R.debug("WebSocket connection ready for doorbell"),m=0,b(!1))}),E.addEventListener("disconnected",()=>{if(y&&!s){R.debug("WebSocket disconnected for doorbell, will attempt to reconnect"),p&&clearTimeout(p),E=null,S=null;const w=Math.min(1e3*Math.pow(2,m),3e4);m++,p=setTimeout(()=>{y&&!s&&(R.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${m})`),d())},w)}});const c=w=>{if(y){const T=w.variables.trigger.to_state.state;g(T)}};S=await E.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),s=!1}catch(c){if(s=!1,y){R.error("Failed to setup WebSocket connection:",c),R.error("WebSocket error details:",{message:c instanceof Error?c.message:String(c),code:c.code,name:c.name,wsUrl:A?.wsUrl,host:r,tokenLength:x?x.length:0}),c.code===2&&R.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),b(c instanceof Error?c.message:String(c));const w=Math.min(1e3*Math.pow(2,m),3e4);m++,p=setTimeout(()=>{y&&(R.debug(`Attempting to reconnect WebSocket for doorbell after error (attempt ${m})`),d())},w)}}}return d(),()=>{y=!1,p&&clearTimeout(p),S&&S(),E&&E.close()}},[l]),[u,h]},Qt=()=>{ENTITY_DOORBELL_BUTTON&&I.post(P("/api/services/button/press"),{entity_id:ENTITY_DOORBELL_BUTTON}).catch(e=>{R.error("Failed to unlatch front door:",e)})},D={portrait:360/480,landscape:1920/1072,wide:770/216};function Zt(e){const i={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&i.hasOwnProperty(t.orientation)&&i[t.orientation]++}),i}function Ke(e,i,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const n=e.length,a=Zt(e);return n===1?eo(e[0],i,t):n===2?to(a,e,i,t):n===3?oo(a,e,i,t):n===4?no(a,e,i,t):{videos:[],totalArea:0,efficiency:0}}function eo(e,i,t){const n=D[e.orientation];let a,u;const g=i/t;return n>g?(a=i,u=i/n):(u=t,a=t*n),{videos:[{x:(i-a)/2,y:(t-u)/2,width:a,height:u,orientation:e.orientation}],totalArea:a*u,efficiency:a*u/(i*t)*100}}function to(e,i,t,n){if(e.portrait>0)return Le(e,i,t,n);const a=[];e.landscape>0&&a.push("landscape"),e.wide>0&&a.push("wide");const u=a[0]||i[0].orientation,g=a[1]||i[1].orientation,h=D[u],b=D[g];if(e.landscape===1&&e.wide===1){const p=D.landscape,m=D.wide,s=t,d=s/p,r=s/m,x=d+r;let A,c,w;if(x<=n)A=d,c=r,w=s;else{const W=n/x;A=d*W,c=r*W,w=c*m}const T=(t-w)/2,L=X(i,[{x:T,y:0,width:w,height:c,orientation:"wide"},{x:T,y:c,width:w,height:A,orientation:"landscape"}]),N=w*A+w*c,k=N/(t*n)*100;return{videos:L,totalArea:N,efficiency:k}}if(e.wide===2){const p=D.wide,m=t,s=m/p,d=s*2;let r;d<=n?r=s:r=n/2;const A=X(i,[{x:0,y:0,width:m,height:r,orientation:"wide"},{x:0,y:r,width:m,height:r,orientation:"wide"}]),c=m*r*2,w=c/(t*n)*100;return{videos:A,totalArea:c,efficiency:w}}const l=[()=>{const p=t,m=p/2,s=p/2,d=m/h,r=s/b;return Math.max(d,r)<=n?{positions:[{x:0,y:(n-d)/2,width:m,height:d,orientation:u},{x:m,y:(n-r)/2,width:s,height:r,orientation:g}],totalArea:m*d+s*r}:null},()=>{const p=n,m=p/2,s=p/2,d=m*h,r=s*b;return Math.max(d,r)<=t?{positions:[{x:(t-d)/2,y:0,width:d,height:m,orientation:u},{x:(t-r)/2,y:m,width:r,height:s,orientation:g}],totalArea:d*m+r*s}:null}];let f=null,E=0;for(const p of l){const m=p();m&&m.totalArea>E&&(E=m.totalArea,f=m)}if(!f){const p=t/2,m=t/2,s=Math.min(p/h,n),d=Math.min(m/b,n);f={positions:[{x:0,y:(n-s)/2,width:p,height:s,orientation:u},{x:p,y:(n-d)/2,width:m,height:d,orientation:g}],totalArea:p*s+m*d}}const S=X(i,f.positions),y=f.totalArea/(t*n)*100;return{videos:S,totalArea:f.totalArea,efficiency:y}}function Le(e,i,t,n){const a=e.portrait,u=i.length-a;if((a===3||a===4)&&u===0){const y=D.portrait,p=t/a,m=p/y,s=m<n?(n-m)/2:0,d=Math.min(m,n),r=[];let x=0;for(let w=0;w<a;w++){const T=Math.min(p,d*y);r.push({x:w*p+(p-T)/2,y:s,width:T,height:d,orientation:"portrait"}),x+=T*d}const A=X(i,r),c=x/(t*n)*100;return{videos:A,totalArea:x,efficiency:c}}i.filter(y=>y.orientation==="portrait");const g=i.filter(y=>y.orientation!=="portrait"),h=a>0?Math.min(t*.4,t*.5):0,b=t-h,l=[];let f=0;if(a===2&&u===0){const y=D.portrait,p=t/2,m=p/y,s=n;let d,r;m<=s?(r=m,d=p):(r=s,d=s*y);const x=(n-r)/2;l.push({x:(p-d)/2,y:x,width:d,height:r,orientation:"portrait"}),l.push({x:p+(p-d)/2,y:x,width:d,height:r,orientation:"portrait"}),f=d*r*2}else if(a===1&&u===1){const y=D.portrait,p=g[0],m=D[p.orientation],s=y+m,d=t*(y/s),r=t*(m/s),x=d/y,A=r/m,c=Math.min(n,Math.min(x,A)),w=(n-c)/2;l.push({x:0,y:w,width:d,height:c,orientation:"portrait"}),l.push({x:d,y:w,width:r,height:c,orientation:p.orientation}),f=d*c+r*c}else if(a===1&&u===2&&e.landscape===1&&e.wide===1){const y=D.portrait,p=D.wide,m=D.landscape,s=n,d=n*y,r=n/(1/p+1/m),x=r/p,A=r/m,c=d+r;if(Math.abs(c-t)<.1)l.push({x:0,y:0,width:d,height:s,orientation:"portrait"}),f+=d*s,g.find(L=>L.orientation==="wide")&&(l.push({x:0+d,y:0,width:r,height:x,orientation:"wide"}),f+=r*x),g.find(L=>L.orientation==="landscape")&&(l.push({x:0+d,y:x,width:r,height:A,orientation:"landscape"}),f+=r*A);else{const w=t/c,T=d*w,j=T/y,L=r*w,N=n/j;let k=T*N,W=n,v=L*N,H=v/p,$=v/m,F=k+v;if(F>t){const J=t/F;k=k*J,W=k/y,v=v*J,H=v/p,$=v/m,F=k+v,F>t&&(v=t-k,H=v/p,$=v/m)}const U=k+v;if(U>t){const J=t/U;k=k*J,W=k/y,v=v*J,H=v/p,$=v/m}const K=0;l.push({x:K,y:0,width:k,height:W,orientation:"portrait"}),f+=k*W,g.find(J=>J.orientation==="wide")&&(l.push({x:K+k,y:0,width:v,height:H,orientation:"wide"}),f+=v*H),g.find(J=>J.orientation==="landscape")&&(l.push({x:K+k,y:H,width:v,height:$,orientation:"landscape"}),f+=v*$)}}else if(a===1&&u===3){const y=D.portrait,p=n,m=p*y,s=m,d=t-s;l.push({x:0,y:0,width:m,height:p,orientation:"portrait"}),f+=m*p;const r=n/3;for(let x=0;x<g.length;x++){const A=g[x],c=D[A.orientation],w=r,T=d;let j,L;T/c<=w?(j=T,L=j/c):(L=w,j=L*c);const N=x*r+(r-L)/2;l.push({x:s+(d-j)/2,y:N,width:j,height:L,orientation:A.orientation}),f+=j*L}}else if(a===2&&u===1){const y=D.portrait,p=g[0],m=D[p.orientation],s=n/2,d=s*y,r=t-d,x=n*m;let A,c;x<=r?(c=n,A=c*m):(A=r,c=A/m);const w=d,T=s,j=(n-c)/2,L=(n/2-T)/2,N=n/2+(n/2-T)/2;l.push({x:0,y:j,width:A,height:c,orientation:p.orientation}),f+=A*c,l.push({x:r,y:L,width:w,height:T,orientation:"portrait"}),f+=w*T,l.push({x:r,y:N,width:w,height:T,orientation:"portrait"}),f+=w*T}else if(a===1&&u===2){const y=D.portrait,p=n,m=p*y,s=m,d=t-s;l.push({x:0,y:0,width:m,height:p,orientation:"portrait"}),f+=m*p;const r=n/2;for(let x=0;x<g.length;x++){const A=g[x],c=D[A.orientation],w=r,T=d;let j,L;T/c<=w?(j=T,L=j/c):(L=w,j=L*c);const N=x*r+(r-L)/2;l.push({x:s+(d-j)/2,y:N,width:j,height:L,orientation:A.orientation}),f+=j*L}}else{const y=a;if(y>0){const p=n/y,m=D.portrait;for(let s=0;s<y;s++){const d=Math.min(p,h/m),r=d*m,x=s*p+(p-d)/2;l.push({x:(h-r)/2,y:x,width:r,height:d,orientation:"portrait"}),f+=r*d}}if(g.length>0){const p=n/g.length;for(let m=0;m<g.length;m++){const s=g[m],d=D[s.orientation],r=p,x=b;let A,c;x/d<=r?(A=x,c=A/d):(c=r,A=c*d);const w=m*p+(p-c)/2;l.push({x:h+(b-A)/2,y:w,width:A,height:c,orientation:s.orientation}),f+=A*c}}}const E=X(i,l),S=f/(t*n)*100;return{videos:E,totalArea:f,efficiency:S}}function X(e,i){const t=new Array(i.length),n=new Set,a=new Set;for(let h=0;h<i.length;h++){const b=i[h];for(let l=0;l<e.length;l++)if(!n.has(l)&&e[l].orientation===b.orientation){t[h]={...b,orientation:e[l].orientation},n.add(l),a.add(h);break}}const u=[];for(let h=0;h<i.length;h++)a.has(h)||u.push(h);let g=0;for(let h=0;h<e.length;h++)if(!n.has(h)&&g<u.length){const b=u[g];t[b]={...i[b],orientation:e[h].orientation},g++}return t}function oo(e,i,t,n){if(e.portrait>0)return Le(e,i,t,n);if(e.landscape===2&&e.wide===1){const s=D.landscape,d=D.wide,r=t,x=r/d,A=n-x,c=t/2,w=c/s;let T,j,L,N;if(x<=n&&w<=A)T=r,j=x,L=c,N=w;else{const U=n/(x+w),K=Math.min(1,U);j=x*K,T=j*d,N=w*K,L=N*s}const k=(t-T)/2,W=j+(A-N)/2,H=X(i,[{x:k,y:0,width:T,height:j,orientation:"wide"},{x:0,y:W,width:L,height:N,orientation:"landscape"},{x:L,y:W,width:L,height:N,orientation:"landscape"}]),$=T*j+L*N*2,F=$/(t*n)*100;return{videos:H,totalArea:$,efficiency:F}}if(e.landscape===1&&e.wide===2){const s=D.landscape,d=D.wide,r=t/2,x=r/d,c=n-x,w=c*s;let T,j,L,N;if(x<=n&&w<=t&&x+c<=n)T=r,j=x,L=w,N=c;else{const K=x+c,Ee=n/K;T=r,j=x*Ee,N=c*Ee,L=N*s}const k=0,W=t/2,v=(t-L)/2,$=X(i,[{x:k,y:0,width:T,height:j,orientation:"wide"},{x:W,y:0,width:T,height:j,orientation:"wide"},{x:v,y:j,width:L,height:N,orientation:"landscape"}]),F=T*j*2+L*N,U=F/(t*n)*100;return{videos:$,totalArea:F,efficiency:U}}if(e.wide===3){const s=D.wide,d=t/2,r=d/s,A=n-r,c=A*s;let w,T,j,L;if(r<=n&&c<=t&&r+A<=n)w=d,T=r,j=c,L=A;else{const U=r+A,K=n/U;w=d,T=r*K,L=A*K,j=L*s,j>t&&(j=t,L=j/s)}const N=0,k=t/2,W=(t-j)/2,H=X(i,[{x:N,y:0,width:w,height:T,orientation:"wide"},{x:k,y:0,width:w,height:T,orientation:"wide"},{x:W,y:T,width:j,height:L,orientation:"wide"}]),$=w*T*2+j*L,F=$/(t*n)*100;return{videos:H,totalArea:$,efficiency:F}}if(e.landscape===3){const s=D.landscape,d=t/(s*1.5),r=Math.min(n,d),x=r/2,A=r,c=x*s,w=A*s,T=(n-r)/2,j=[{x:0,y:T,width:c,height:x,orientation:"landscape"},{x:0,y:T+x,width:c,height:x,orientation:"landscape"},{x:c,y:T,width:w,height:A,orientation:"landscape"}],L=X(i,j),N=c*r+w*r,k=N/(t*n)*100;return{videos:L,totalArea:N,efficiency:k}}const a=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)a.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)a.push("wide");const u=a[0]||i[0].orientation,g=a[1]||i[1].orientation,h=a[2]||i[2].orientation,b=D[u],l=D[g],f=D[h],E=[()=>{const s=t*.6,d=t*.4,r=s/b,x=d/l,A=d/f,c=x+A;return r<=n&&c<=n?{positions:[{x:0,y:(n-r)/2,width:s,height:r,orientation:u},{x:s,y:0,width:d,height:x,orientation:g},{x:s,y:x,width:d,height:A,orientation:h}],totalArea:s*r+d*x+d*A}:null},()=>{const s=n*.5,d=n*.5,r=s*b,x=s*l,A=d*f;return r+x<=t&&A<=t?{positions:[{x:0,y:0,width:r,height:s,orientation:u},{x:r,y:0,width:x,height:s,orientation:g},{x:(t-A)/2,y:s,width:A,height:d,orientation:h}],totalArea:r*s+x*s+A*d}:null},()=>{const s=t/3,d=s/b,r=s/l,x=s/f;return Math.max(d,r,x)<=n?{positions:[{x:0,y:(n-d)/2,width:s,height:d,orientation:u},{x:s,y:(n-r)/2,width:s,height:r,orientation:g},{x:s*2,y:(n-x)/2,width:s,height:x,orientation:h}],totalArea:s*d+s*r+s*x}:null}];let S=null,y=0;for(const s of E){const d=s();d&&d.totalArea>y&&(y=d.totalArea,S=d)}if(!S){const s=t/3,d=Math.min(s/b,n),r=Math.min(s/l,n),x=Math.min(s/f,n);S={positions:[{x:0,y:(n-d)/2,width:s,height:d,orientation:u},{x:s,y:(n-r)/2,width:s,height:r,orientation:g},{x:s*2,y:(n-x)/2,width:s,height:x,orientation:h}],totalArea:s*d+s*r+s*x}}const p=X(i,S.positions),m=S.totalArea/(t*n)*100;return{videos:p,totalArea:S.totalArea,efficiency:m}}function no(e,i,t,n){if(e.portrait>0)return Le(e,i,t,n);const a=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)a.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)a.push("wide");const u=a[0]||i[0].orientation,g=a[1]||i[1].orientation,h=a[2]||i[2].orientation,b=a[3]||i[3].orientation,l=D[u],f=D[g],E=D[h],S=D[b],y=[()=>{const r=t/2,x=n/2,A=Math.min(r,x*l),c=A/l,w=Math.min(r,x*f),T=w/f,j=Math.min(r,x*E),L=j/E,N=Math.min(r,x*S),k=N/S;return{positions:[{x:(r-A)/2,y:(x-c)/2,width:A,height:c,orientation:u},{x:r+(r-w)/2,y:(x-T)/2,width:w,height:T,orientation:g},{x:(r-j)/2,y:x+(x-L)/2,width:j,height:L,orientation:h},{x:r+(r-N)/2,y:x+(x-k)/2,width:N,height:k,orientation:b}],totalArea:A*c+w*T+j*L+N*k}},()=>{const r=t*.6,x=t*.4,A=r/l,c=n/3,w=Math.min(x,c*f),T=w/f,j=Math.min(x,c*E),L=j/E,N=Math.min(x,c*S),k=N/S;return A<=n?{positions:[{x:0,y:(n-A)/2,width:r,height:A,orientation:u},{x:r,y:0,width:w,height:T,orientation:g},{x:r,y:c,width:j,height:L,orientation:h},{x:r,y:c*2,width:N,height:k,orientation:b}],totalArea:r*A+w*T+j*L+N*k}:null},()=>{const r=t/4,x=r/l,A=r/f,c=r/E,w=r/S;return Math.max(x,A,c,w)<=n?{positions:[{x:0,y:(n-x)/2,width:r,height:x,orientation:u},{x:r,y:(n-A)/2,width:r,height:A,orientation:g},{x:r*2,y:(n-c)/2,width:r,height:c,orientation:h},{x:r*3,y:(n-w)/2,width:r,height:w,orientation:b}],totalArea:r*x+r*A+r*c+r*w}:null}];let p=null,m=0;for(const r of y){const x=r();x&&x.totalArea>m&&(m=x.totalArea,p=x)}if(!p){const r=t/2,x=n/2,A=Math.min(x,r/l),c=Math.min(x,r/f),w=Math.min(x,r/E),T=Math.min(x,r/S);p={positions:[{x:(r-r)/2,y:(x-A)/2,width:r,height:A,orientation:u},{x:r+(r-r)/2,y:(x-c)/2,width:r,height:c,orientation:g},{x:(r-r)/2,y:x+(x-w)/2,width:r,height:w,orientation:h},{x:r+(r-r)/2,y:x+(x-T)/2,width:r,height:T,orientation:b}],totalArea:r*A+r*c+r*w+r*T}}const s=X(i,p.positions),d=p.totalArea/(t*n)*100;return{videos:s,totalArea:p.totalArea,efficiency:d}}const io=e=>{const i=V();i.HASS_HOST;const t=i.HASS_ACCESS_TOKEN||"",n=i.SUPERVISOR_TOKEN||"",[a,u]=_.useState({}),[g,h]=_.useState(!0),[b,l]=_.useState(null);return _.useEffect(()=>{if(!e||e.length===0){h(!1);return}let f=!0;async function E(){h(!0),l(null);try{const S=e.map(async p=>{try{const m=P(`/api/states/${p}`),d=(await I(m)).data?.attributes?.access_token||null;return{entityId:p,accessToken:d}}catch(m){return R.error(`Failed to fetch access token for ${p}:`,m),{entityId:p,accessToken:null}}}),y=await Promise.all(S);if(f){const p={};y.forEach(({entityId:m,accessToken:s})=>{s&&(p[m]=s)}),u(p),h(!1)}}catch(S){f&&(R.error("Failed to fetch camera access tokens:",S),l(z(S)),h(!1))}}return E(),()=>{f=!1}},[e?.length,e?.join(",")]),_.useEffect(()=>{if(!e||e.length===0)return;let f=!0,E=null;async function S(){if(f)try{const y=e.map(async m=>{try{const s=P(`/api/states/${m}`),r=(await I(s)).data?.attributes?.access_token||null;return{entityId:m,accessToken:r}}catch(s){return R.debug(`Failed to refresh access token for ${m}:`,s),null}}),p=await Promise.all(y);f&&u(m=>{const s={...m};return p.forEach(d=>{d&&d.accessToken&&(s[d.entityId]=d.accessToken)}),s})}catch(y){f&&R.debug("Failed to refresh camera access tokens:",y)}}return E=setInterval(S,300*1e3),()=>{f=!1,E&&clearInterval(E)}},[e?.length,e?.join(",")]),_.useEffect(()=>{if(!e||e.length===0)return;let f=null,E=[],S=!0,y=null,p=0,m=!1;async function s(){if(m)return;if(f){try{E.forEach(A=>{A&&A()}),E=[],f.close()}catch(A){R.debug("Error closing existing WebSocket connection:",A)}f=null}m=!0;const d=le(),r=n||t||"";if(R.debug("Camera tokens WebSocket auth:",{isDevelopment:ze,hasSupervisorToken:!!n,hasAccessToken:!!t}),!r){R.debug("Skipping WebSocket connection for camera tokens - no access token (using REST API only)"),m=!1;return}let x;try{x=se(d,r),S&&l(!1)}catch(A){S&&(R.error("Failed to create WebSocket auth for camera tokens:",A),l(A instanceof Error?A.message:String(A))),m=!1;return}try{f=await ae({auth:x}),f.addEventListener("ready",()=>{S&&(R.debug("WebSocket connection ready for camera tokens"),p=0,l(!1))}),f.addEventListener("disconnected",()=>{if(S&&!m){R.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),y&&clearTimeout(y),f=null,E=[];const A=Math.min(1e3*Math.pow(2,p),3e4);p++,y=setTimeout(()=>{S&&!m&&(R.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${p})`),s())},A)}});for(const A of e){const c=T=>{if(S){const L=T.variables.trigger.to_state?.attributes?.access_token||null;u(N=>L?{...N,[A]:L}:N)}},w=await f.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:A}});E.push(w)}m=!1}catch(A){if(m=!1,S){R.error("Failed to setup WebSocket connection for camera tokens:",A),l(A instanceof Error?A.message:String(A));const c=Math.min(1e3*Math.pow(2,p),3e4);p++,y=setTimeout(()=>{S&&(R.debug(`Attempting to reconnect WebSocket for camera tokens after error (attempt ${p})`),s())},c)}}}return s(),()=>{S=!1,y&&clearTimeout(y),E.forEach(d=>{d&&d()}),f&&f.close()}},[e?.length,e?.join(",")]),[a,g,b]},ro=(e,i=null,t=null)=>{if(!e)return null;let n=t||"";if(!n&&!ze&&typeof window<"u"&&window.location){const u=window.location.protocol,g=window.location.hostname,h=window.location.port?`:${window.location.port}`:"";n=`${u}//${g}${h}`}if(!n)return R.warn("HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL"),null;const a=`${n}/api/camera_proxy_stream/${e}`;return i?`${a}?token=${encodeURIComponent(i)}`:a},ke=45e3,so=O.div`
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
`,ao=()=>{const e=V(),i=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[];if(!i)return null;const[n,a]=_.useState(!1),[u]=Jt(),[g,h]=_.useState(void 0),[b,l]=_.useState(100),[f,E]=_.useState("0"),S=_.useMemo(()=>t.map(d=>d.entity_id).filter(Boolean),[t]),[y]=io(S);_.useEffect(()=>{if(u==="off"&&n){const d=window.setTimeout(()=>{a(!1),h(void 0)},ke);return h(d),E(ke+"ms"),l(0),()=>{d&&window.clearTimeout(d)}}else u==="on"&&(E(0),l(100),a(!0))},[u,n]),_.useEffect(()=>{u==="on"&&g!==void 0&&(window.clearTimeout(g),E(0),l(100),h(void 0))},[g,u]);const[p,m]=_.useState(null),s=()=>{p===null?m("confirm"):p==="confirm"&&(m("opening"),Qt(),setTimeout(()=>m(null),2e3))};return _.useEffect(()=>{if(p==="confirm"){const d=setTimeout(()=>{m(null)},3e3);return()=>{clearTimeout(d)}}},[p]),_.useEffect(()=>{n||m(null)},[n]),o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>a(d=>!d),children:"CCTV"}),o.jsx(ce,{visible:n,onClick:s,onClose:()=>{a(!1),m(null)},fullsize:!0,children:o.jsxs(so,{onClick:s,children:[o.jsx(Xe,{completed:b,height:10,bgColor:g===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:f,transitionTimingFunction:"linear"}),o.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const d=t.map(T=>({orientation:T.orientation||"landscape"})),r=window.innerWidth,x=window.innerHeight-10,A=Ke(d,r,x),c={portrait:t.filter(T=>(T.orientation||"landscape")==="portrait"),landscape:t.filter(T=>(T.orientation||"landscape")==="landscape"),wide:t.filter(T=>T.orientation==="wide")},w={portrait:0,landscape:0,wide:0};return A.videos.map((T,j)=>{const L=T.orientation,N=w[L],k=c[L][N];if(!k)return null;w[L]++;const W=y[k.entity_id]||null,v=ro(k.entity_id,W,e.HASS_HOST);return v?o.jsxs("div",{className:"video-container",style:{left:`${T.x}px`,top:`${T.y}px`,width:`${T.width}px`,height:`${T.height}px`},children:[o.jsx("img",{src:v,className:L,alt:"Camera stream",crossOrigin:"anonymous"},`${k.entity_id}-${j}`),o.jsx("div",{className:"video-overlay",onClick:()=>s()})]},`${L}-${N}-${j}`):null})})()}),p==="confirm"&&o.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),p==="opening"&&o.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},co=O.div`
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

`,lo=({nextWeek:e,previousWeek:i,startWeekWithToday:t})=>o.jsxs(co,{children:[o.jsxs("div",{className:"buttons",children:[o.jsx(G,{path:xt,size:"32px",color:"#ffffff",onClick:i}),o.jsx(G,{path:Et,size:"32px",color:"#ffffff",onClick:e}),o.jsx("button",{onClick:t,children:"Today"}),o.jsx(ao,{})]}),o.jsx(Xt,{}),o.jsx(G,{path:yt,size:"32px",color:"#ffffff",className:Y("indicator")})]}),fo=C.memo(lo),uo=6e4,Re=(e=uo,i=void 0)=>{const[t,n]=_.useState(!0);return _.useEffect(()=>{const a=setInterval(()=>{n(u=>!u)},e);return()=>{clearInterval(a)}},[e,i]),t},ho={mdiDelete:At,mdiCake:wt},po=e=>{if(!e||typeof e!="string")return;const i=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return ho[i]||void 0},mo=(e,i,t,n,a)=>I(a(e.name,{start:i.toISO(),end:t.toISO()}),{timeout:1e4}).then(u=>{!u.data||!Array.isArray(u.data)||u.data.forEach(g=>{const h="dateTime"in g.start?B.fromISO(g.start.dateTime):B.fromSQL(g.start.date);let b;"dateTime"in g.end?b=Math.floor(B.fromISO(g.end.dateTime).diff(i,"days").as("days")):b=Math.floor(B.fromSQL(g.end.date).diff(i,"days").as("days"))-1;const l=Math.floor(h.diff(i,"days").as("days"));b>=n.length&&(b=n.length-1);const f="dateTime"in g.start?"events":"allDay";if(l>=0&&l<n.length)for(let E=l;E<=b;E++)n[E][f]=[...n[E][f],{...g,icon:e.icon}]})}).catch(u=>{throw u}),Oe=new Map,go=300*1e3,xo=e=>e.toISODate(),Eo=(e,i,t,n,a,u,g,h)=>{const b=[0,1,2,3,4,5].map(y=>e.plus({days:y}).startOf("day"));b[6]=e.plus({days:6}).endOf("day");const l=xo(e),f=Oe.get(l);if(f&&Date.now()-f.timestamp<go){t(f.data);return}const E=b.map(y=>({date:y,allDay:[],events:[]}));if(!g||g.length===0){t(E),n(!1);return}const S=new AbortController;a.current&&a.current.abort(),a.current=S;try{n(!0);const y=g.map(p=>mo(p,b[0],b[6],E,h));Promise.all(y).then(()=>{S.signal.aborted||(Oe.set(l,{data:E,timestamp:Date.now()}),t(E),u(!1))}).catch(p=>{S.signal.aborted||u(z(p))}).finally(()=>{S.signal.aborted||n(!1)})}catch(y){S.signal.aborted||(u(z(y)),n(!1))}},De=[],yo=e=>{const t=V().CALENDARS||[],n=_.useMemo(()=>t.map(s=>({name:s.name,icon:po(s.icon)})),[t]),a=_.useCallback(s=>P(`/api/calendars/${s}`),[]),u=_.useCallback((s,d)=>`${a(s)}?${Wt.stringify(d)}`,[a]),[g,h]=_.useState(De),[b,l]=_.useState(!1),[f,E]=_.useState(!1),S=Re(6e4,"Calendar"),[y,p]=_.useState(null),m=C.useRef(null);return _.useEffect(()=>(e!==void 0&&((y===null||!y.equals(e))&&(h(De),p(e)),Eo(e,g,h,l,m,E,n,u)),()=>{m.current&&m.current.abort()}),[e,S,n]),[g,f]};function re(e){const[i,t]=_.useState(!1);function n({key:u}){u===e&&t(!0)}const a=({key:u})=>{u===e&&t(!1)};return _.useEffect(()=>(window.addEventListener("keydown",n),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",a)}),[e]),i}const wo=()=>{let e=new Date,t=(e.getDay()+6)%7,n=new Date(e.setDate(e.getDate()-t));return B.fromJSDate(n)},Ao=e=>{const i=()=>e(h=>h.plus({days:7})),t=re("ArrowRight");_.useEffect(()=>{t&&i()},[t]);const n=()=>e(h=>h.minus({days:7})),a=re("ArrowLeft");_.useEffect(()=>{a&&n()},[a]);const u=()=>e(wo()),g=re("t");return _.useEffect(()=>{g&&u()},[g]),{nextWeek:i,previousWeek:n,startWeekWithToday:u}},bo=e=>{const[i,t]=C.useState(0),[n,a]=C.useState(0),u=50;return{onTouchStart:l=>{a(0),t(l.targetTouches[0].clientX)},onTouchMove:l=>a(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!i||!n)return;const l=i-n,f=l>u,E=l<-u;f&&e.onSwipedLeft(),E&&e.onSwipedRight()}}},ve=e=>B.fromISO(e).toLocaleString(B.TIME_24_SIMPLE),we=e=>e.toFormat("c")>=6,Ae=e=>e.hasSame(B.now(),"day"),So=O.div`
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
`,To=()=>{const[e,i]=_.useState(void 0),[t,n]=yo(e),{nextWeek:a,previousWeek:u,startWeekWithToday:g}=Ao(i);_.useEffect(()=>{g()},[]);const h=bo({onSwipedLeft:()=>a(),onSwipedRight:()=>u()}),b=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=C.useMemo(()=>t.slice(0,7),[t]);return o.jsxs(So,{...h,children:[o.jsx(fo,{nextWeek:a,previousWeek:u,startWeekWithToday:g}),o.jsxs("div",{className:"schedule",children:[l.map((f,E)=>o.jsx("div",{className:Y({weekend:we(f.date),today:Ae(f.date)},"caption"),children:o.jsx("h2",{children:f.date.toLocaleString(b)})},E)),l.map((f,E)=>o.jsx("div",{className:Y("allDayRow",{weekend:we(f.date),today:Ae(f.date)}),children:f.allDay.map((S,y)=>o.jsx("div",{className:"allDayEvent",children:S.summary},y))},E)),l.map((f,E)=>o.jsx("div",{className:Y("eventRow",{weekend:we(f.date),today:Ae(f.date)}),children:f.events.map((S,y)=>o.jsxs("div",{className:"event",children:[o.jsx("div",{children:S.summary}),o.jsxs("h3",{children:[S.icon&&o.jsx(G,{path:S.icon,size:"1rem",color:"#ffffff"}),ve(S.start.dateTime)," - ",ve(S.end.dateTime)]})]},y))},E))]}),t.length===0&&o.jsx("div",{className:"loading",children:n!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),o.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):o.jsx(Fe,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),n!==!1&&t.length>0&&o.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:o.jsxs("div",{children:["Warnung: ",n instanceof Error?n.message:String(n)]})})]})},ge={"clear-day":{icon:st,label:"Klar",color:"#eeeef5"},"clear-night":{icon:rt,label:"Klar",color:"#eeeef5"},rain:{icon:it,label:"Regen",color:"#80a5d6"},snow:{icon:nt,label:"Schnee",color:"#8c82ce"},sleet:{icon:ot,label:"Graupel",color:"#aba4db"},wind:{icon:tt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:et,label:"Neblig",color:"#d5dae2"},cloudy:{icon:Ze,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:Qe,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:Je,label:"Teils bewölkt",color:"#d5dae2"}},_o=e=>{const[i,t]=_.useState([]),[n,a]=_.useState(!1),u=Re(6e4*10,"Weather"),g=V(),h=g.ENABLE_WEATHER||!1,b=g.WEATHER_API_KEY||"",l=g.WEATHER_LATITUDE,f=g.WEATHER_LONGITUDE,E=h&&b&&l&&f,S=()=>`./forecast/${b}/${l},${f}?&units=si&exclude=minutely`;return _.useEffect(()=>{E&&I(S()).then(y=>{t(y.data),a(!1)}).catch(y=>{a(z(y))}).finally(()=>{})},[u,e,E,h,b,l,f]),[i,n]},Lo=ct(lt),Ie=O.div`

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
`,We=C.memo(({data:e,daily:i=!1})=>o.jsxs("div",{children:[o.jsxs("div",{children:[!i&&B.fromSeconds(e.time).toLocaleString(B.TIME_24_SIMPLE),i&&B.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),o.jsx("div",{children:o.jsx(Se,{icon:e.icon})}),o.jsx("div",{children:o.jsxs("strong",{children:[!i&&o.jsxs(o.Fragment,{children:[Math.round(e.temperature),"°"]}),i&&o.jsxs(o.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),o.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),o.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Ro=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(i=>({color:ge[i.icon]?.color||"#ffffff",text:ge[i.icon]?.label||"",annotation:`${Math.round(i.temperature)}°`,time:i.time})),Se=({icon:e})=>{const i=ge[e];return o.jsx(i.icon,{size:60,color:"#ffffff"})},jo=()=>{if(!(V().ENABLE_WEATHER||!1))return null;const[t,n]=_o(),[a,u]=_.useState(!1),g=re("w"),h=_.useRef(),b=C.useCallback(()=>u(y=>!y),[]),l=C.useCallback(()=>u(!0),[]),f=C.useMemo(()=>Ro(t),[t]),E=C.useMemo(()=>[3,6,9,12],[]),S=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return _.useEffect(()=>{if(!a||!h.current||!t||!t.hourly||f.length===0)return;const y={timezone:"Europe/Berlin"},p=document.createElement("div");return h.current.textContent="",h.current.appendChild(p),Mt(p,f,y),()=>{h.current&&(h.current.textContent="")}},[a,f]),_.useEffect(()=>{g&&b()},[g]),!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?n!==!1?o.jsx(Ie,{children:o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),o.jsx("div",{children:n instanceof Error?n.message:String(n)})]})}):"":o.jsxs(Ie,{children:[o.jsxs("div",{onClick:l,children:[o.jsxs("div",{className:"headline",children:[o.jsx(Se,{icon:t.currently.icon}),o.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),o.jsx("div",{className:"forecast",children:E.map((y,p)=>o.jsx(We,{data:t.hourly.data[y]},p))})]}),o.jsx(ce,{visible:a,onClick:b,children:o.jsxs("div",{className:"full-weather",children:[n!==!1&&o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:n instanceof Error?n.message:String(n)})]}),o.jsxs("div",{className:"detail-header",children:[o.jsx("div",{children:o.jsxs("div",{className:"headline",children:[o.jsx(Se,{icon:t.daily.data[0].icon}),o.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",o.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),o.jsx("h3",{children:ge[t.daily.data[0].icon].label})]}),o.jsx("div",{className:"values",children:o.jsxs("div",{className:"table",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Regen:"})," ",t.daily.data[0].precipProbability*100," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),o.jsxs("div",{children:[o.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),o.jsx("h3",{children:"Die nächsten 24 Stunden"}),o.jsx("div",{ref:h}),o.jsx("h3",{children:"Die nächste Woche"}),o.jsx("div",{className:"forecast",children:S.map((y,p)=>o.jsx(We,{data:t.daily.data[y],daily:!0},p))}),o.jsxs("div",{className:"info",children:["Aktualisiert ",o.jsx(at,{date:B.fromSeconds(t.currently.time).toJSDate(),formatter:Lo})]})]})})]})},No=C.memo(jo),Co="AK Wandsbek",ko="Hamburg",Oo="Master:62016",Do="STATION",vo={x:10.091341,y:53.568702},Io={name:Co,city:ko,id:Oo,type:Do,coordinate:vo},pe={departureList:"departureList",checkName:"checkName"},Wo=async(e,i)=>I({method:"post",url:`./gti/public/${e}`,data:i,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}),Me=(e,i)=>e.realtimeOffset-i.realtimeOffset,Mo=e=>{const i=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:i.filter(t=>t.directionId===1).slice(0,3).sort(Me),to:i.filter(t=>t.directionId===6).slice(0,3).sort(Me)}},Po=e=>{const t=V().ENABLE_HVV||!1,[n,a]=_.useState([]),[u,g]=_.useState(!1),h=Re(6e4),b=t;return _.useEffect(()=>{if(!b)return;if(!(e in pe)){R.warn(e,"not supported by HVV connector");return}let l={version:51};switch(e){case pe.checkName:l={...l,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case pe.departureList:const f=B.now();l={...l,station:Io,time:{date:f.toFormat("dd.MM.yyyy"),time:f.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:l=void 0}Wo(e,l).then(f=>{a(Mo(f.data)),g(!1)}).catch(f=>{g(z(f))})},[e,h,b,t]),[n,u]},$o=O.div`
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
`,Pe=C.memo(({line:e,direction:i,realtimeOffset:t})=>o.jsxs("div",{className:"departure",children:[o.jsx("div",{children:o.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),o.jsx("div",{children:t===0?"Jetzt":o.jsxs(o.Fragment,{children:["in ",t," '"]})})]})),Vo=()=>{if(!(V().ENABLE_HVV||!1))return null;const[t,n]=Po(pe.departureList);return o.jsx($o,{children:n!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((a,u)=>o.jsx(Pe,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},u)),o.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((a,u)=>o.jsx(Pe,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},u))]})})},Bo=C.memo(Vo),Yo=()=>{const e=V(),i=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const n=e.ENTITY_CHARGING_STATE||"",a=e.ENTITY_STATE_OF_CHARGE||"",u=e.HASS_ACCESS_TOKEN||"",g=e.SUPERVISOR_TOKEN||"",[h,b]=_.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[l,f]=_.useState(!1),E=i&&(t||n||a);return _.useEffect(()=>{if(!E)return;(async()=>{const y=[];t&&y.push(I(P(`/api/states/${t}`)).then(s=>({type:"preclimateStatus",value:s.data.state==="on"})).catch(s=>({type:"preclimateStatus",error:z(s)}))),n&&y.push(I(P(`/api/states/${n}`)).then(s=>({type:"chargingState",value:s.data.state==="on"})).catch(s=>({type:"chargingState",error:z(s)}))),a&&y.push(I(P(`/api/states/${a}`)).then(s=>({type:"stateOfCharge",value:parseFloat(s.data.state)||0})).catch(s=>({type:"stateOfCharge",error:z(s)})));const p=await Promise.all(y);let m=!1;p.forEach(s=>{s.error?m=s.error:b(d=>({...d,[s.type]:s.value}))}),f(m||!1)})()},[E,i,t,n,a]),_.useEffect(()=>{let S=null,y=[],p=!0,m=null,s=0,d=!1;async function r(){if(!E||d)return;if(S){try{y.forEach(w=>{w&&w()}),y=[],S.close()}catch(w){R.debug("Error closing existing WebSocket connection:",w)}S=null}d=!0;const x=le(),A=g||u||"";if(!A){R.debug("Skipping WebSocket connection - no access token (using REST API only)"),d=!1;return}let c;try{c=se(x,A),p&&f(!1)}catch(w){p&&(R.error("Failed to create WebSocket auth:",w),f(w instanceof Error?w.message:String(w))),d=!1;return}try{S=await ae({auth:c}),S.addEventListener("ready",()=>{p&&(R.debug("WebSocket connection ready for EV entities"),s=0,f(!1))}),S.addEventListener("disconnected",()=>{if(p&&!d){R.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),m&&clearTimeout(m),S=null,y=[];const j=Math.min(1e3*Math.pow(2,s),3e4);s++,m=setTimeout(()=>{p&&!d&&(R.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${s})`),r())},j)}});const w=j=>{if(p){const L=j.variables.trigger.to_state.entity_id,N=j.variables.trigger.to_state.state;b(k=>{const W={...k};return L===t?W.preclimateStatus=N==="on":L===n?W.chargingState=N==="on":L===a&&(W.stateOfCharge=parseFloat(N)||0),W})}},T=[];t&&T.push(t),n&&T.push(n),a&&T.push(a);for(const j of T){const L=await S.subscribeMessage(w,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:j}});y.push(L)}d=!1}catch(w){if(d=!1,p){R.error("Failed to setup WebSocket connection:",w),f(w instanceof Error?w.message:String(w));const T=Math.min(1e3*Math.pow(2,s),3e4);s++,m=setTimeout(()=>{p&&(R.debug(`Attempting to reconnect WebSocket for EV entities after error (attempt ${s})`),r())},T)}}}return r(),()=>{p=!1,m&&clearTimeout(m),y.forEach(x=>{x&&x()}),S&&S.close()}},[E,i,t,n,a,u,g]),[h,l]},Ho=e=>{const i=e?.ENTITY_PRECLIMATE_START||"";i&&I.post(P("/api/services/button/press"),{entity_id:i}).catch(t=>{R.error("Failed to start preclimate:",t)})},Fo=e=>{const i=e?.ENTITY_PRECLIMATE_STOP||"";i&&I.post(P("/api/services/button/press"),{entity_id:i}).catch(t=>{R.error("Failed to stop preclimate:",t)})},Go=O.div`
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
`,Uo=(e,i)=>i?St:e>=80?Tt:e>=50?_t:e>=20?Lt:Rt,zo=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",Ko=()=>{const e=V();if(!(e.ENABLE_EV||!1))return null;const[t,n]=Yo(),{preclimateStatus:a,chargingState:u,stateOfCharge:g}=t,[h,b]=C.useState(!1),[l,f]=C.useState(null),[E,S]=C.useState(!1),[y,p]=C.useState(!1),[m,s]=C.useState(0),d=C.useRef(null),r=C.useRef(null),x=C.useRef(a),A=C.useRef(null);C.useEffect(()=>{x.current!==a&&(h&&A.current!==null&&a===(l==="start")&&(s(l==="start"?360:0),p(!0),setTimeout(()=>{b(!1),f(null),p(!1),s(0),A.current=null,S(!1)},300),d.current&&(clearTimeout(d.current),d.current=null)),x.current=a)},[a,h,l]),C.useEffect(()=>{if(!h||y){r.current&&(cancelAnimationFrame(r.current),r.current=null);return}const W=A.current||Date.now(),v=1e4,H=l==="stop",$=()=>{const F=Date.now()-W,U=Math.min(F/v,1);s(H?360*(1-U):360*U),U<1&&!y&&(r.current=requestAnimationFrame($))};return r.current=requestAnimationFrame($),()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null)}},[h,y,l]),C.useEffect(()=>()=>{d.current&&clearTimeout(d.current),r.current&&cancelAnimationFrame(r.current)},[]);const c=C.useCallback(()=>{if(n!==!1||h)return;const W=!a,v=W?"start":"stop";b(!0),f(v),p(!1),S(!1),s(0),A.current=Date.now(),x.current=a,W?Ho(e):Fo(e),d.current=setTimeout(()=>{h&&(S(!0),setTimeout(()=>{b(!1),f(null),p(!1),s(0),S(!1),A.current=null},500))},15e3)},[a,n,h]),w=Uo(g||0,u),T=zo(g||0),j=Math.round(g||0),L=h?l==="start":a,N=l==="start"?"#17e146":"#f85a5a",k=l==="start"?"clockwise":"counterclockwise";return o.jsxs(Go,{className:Y({disabled:n!==!1}),children:[o.jsxs("h2",{children:["Auto",n!==!1?o.jsxs("div",{className:"battery-info",children:[o.jsx(G,{path:_e,size:"1.2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsxs("div",{className:"battery-info",children:[o.jsxs("span",{className:"charge-percentage",children:[j,"%"]}),o.jsx(G,{path:w,size:"1.2rem",color:T})]})]}),n===!1&&o.jsxs("div",{className:"preclimate-button-wrapper",children:[h&&o.jsx("div",{className:Y("progress-ring",k,{complete:y}),style:{"--progress-color":N,"--progress-angle":`${m}deg`,"--progress-gradient":l==="stop"?`conic-gradient(from -90deg, ${N} 0deg, ${N} ${m}deg, transparent ${m}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${N} 0deg, ${N} ${m}deg, transparent ${m}deg, transparent 360deg)`}}),o.jsxs("button",{className:Y("preclimate-button",{spinning:L&&!h,shaking:E}),onClick:c,disabled:n!==!1||h,children:[o.jsx(G,{path:bt,size:"2rem",color:L?"#ff9800":"#ffffff"}),o.jsx("span",{children:L?"Stop":"Start"})]})]})]})},qo=C.memo(Ko),Xo=()=>{const e=V(),i=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",n=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[u,g]=_.useState("closed"),[h,b]=_.useState(!1),l=i&&t,f=t?P(`/api/states/${t}`):null;return _.useEffect(()=>{!l||!f||I(f).then(E=>{g(E.data.state),b(!1)}).catch(E=>{b(z(E))})},[l,f,i,t]),_.useEffect(()=>{let E=null,S=null,y=!0,p=null,m=0,s=!1;async function d(){if(!l||!t||s)return;if(E){try{S&&(S(),S=null),E.close()}catch(c){R.debug("Error closing existing WebSocket connection:",c)}E=null}s=!0;const r=le(),x=a||n||"";if(!x){R.debug("Skipping WebSocket connection - no access token (using REST API only)"),s=!1;return}let A;try{A=se(r,x),y&&b(!1)}catch(c){y&&(R.error("Failed to create WebSocket auth:",c),b(c instanceof Error?c.message:String(c))),s=!1;return}try{E=await ae({auth:A}),E.addEventListener("ready",()=>{y&&(R.debug("WebSocket connection ready for garage door"),m=0,b(!1))}),E.addEventListener("disconnected",()=>{if(y&&!s){R.debug("WebSocket disconnected for garage door, will attempt to reconnect"),p&&clearTimeout(p),E=null,S=null;const w=Math.min(1e3*Math.pow(2,m),3e4);m++,p=setTimeout(()=>{y&&!s&&(R.debug(`Attempting to reconnect WebSocket for garage door (attempt ${m})`),d())},w)}});const c=w=>{y&&g(w.variables.trigger.to_state.state)};S=await E.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),s=!1}catch(c){if(s=!1,y){R.error("Failed to setup WebSocket connection:",c),b(c instanceof Error?c.message:String(c));const w=Math.min(1e3*Math.pow(2,m),3e4);m++,p=setTimeout(()=>{y&&(R.debug(`Attempting to reconnect WebSocket for garage door after error (attempt ${m})`),d())},w)}}}return d(),()=>{y=!1,p&&clearTimeout(p),S&&S(),E&&E.close()}},[l]),[u,h]},Jo=e=>{if(!ENTITY_GARAGE_DOOR)return;e(!0);const i=setTimeout(()=>e(!1),3e3);I.post(P("/api/services/cover/toggle"),{entity_id:ENTITY_GARAGE_DOOR}).catch(t=>{R.error("Failed to toggle garage door:",t)}).finally(()=>{clearTimeout(i),e(!1)})},Qo=e=>{if(!ENTITY_GARAGE_DOOR)return;e(!0);const i=setTimeout(()=>e(!1),3e3);I.post(P("/api/services/cover/open_cover"),{entity_id:ENTITY_GARAGE_DOOR}).catch(t=>{R.error("Failed to open garage door:",t)}).finally(()=>{clearTimeout(i),e(!1)})},Zo=e=>{if(!ENTITY_GARAGE_DOOR)return;e(!0);const i=setTimeout(()=>e(!1),3e3);I.post(P("/api/services/cover/close_cover"),{entity_id:ENTITY_GARAGE_DOOR}).catch(t=>{R.error("Failed to close garage door:",t)}).finally(()=>{clearTimeout(i),e(!1)})},en=O.div`
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
`,qe=O.div`
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
`,Te=e=>{const i={unknown:{label:"In Bewegung oder halb-offen",icon:Ot},open:{label:"Offen",icon:kt},closed:{label:"Geschlossen",icon:Ct},opening:{label:"Öffnet",icon:Nt},closing:{label:"Schließt",icon:jt}};return i[e]||R.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),i[e]||{label:"Unavailable",icon:Dt}},tn=({garageDoor:e,animate:i=!1})=>o.jsxs(qe,{className:Y({animate:i}),children:[o.jsx(G,{path:Te(e).icon,size:"2rem",color:"#ffffff"}),o.jsx("span",{children:Te(e).label})]}),on=e=>dt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:i}){return Te(i).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),nn=()=>{if(!(V().ENABLE_GARAGE||!1))return null;const[t,n]=Xo(),[a,u]=_.useState(void 0),[g,h]=_.useState(!1),[b,l]=_.useState(!1);_.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!a){const p=new Promise(m=>{u({resolve:m})});on(p)}}else a&&(a.resolve(t),u(void 0))},[t]);const f=re("g");_.useEffect(()=>{f&&n===!1&&Jo(h)},[f,n]);const E=C.useCallback(y=>{if(n===!1)switch(l(!1),y){case"open":Qo(h);break;case"close":Zo(h);break}},[h,n]),S=C.useCallback(()=>{n===!1&&l(!0)},[n]);return o.jsxs(en,{className:Y({disabled:n!==!1}),children:[o.jsx("h2",{children:"Garage"}),o.jsx("div",{className:"status",onClick:S,children:n!==!1?o.jsxs(qe,{children:[o.jsx(G,{path:_e,size:"2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsx(tn,{garageDoor:t,animate:g})}),o.jsx(ce,{visible:b&&n===!1,onClick:()=>l(!1),children:o.jsxs("div",{className:"controls",children:[o.jsx("h2",{children:"Garagentor"}),o.jsx("div",{onClick:()=>E("open"),children:"Öffnen"}),o.jsx("div",{onClick:()=>E("close"),children:"Schließen"})]})})]})},rn=C.memo(nn),sn=e=>e?P(`/api/states/${e}`):null,q={done:{label:"Fertig",animate:!1,icon:It},off:{label:"Aus",animate:!1,icon:vt},standby:{label:"Standby",animate:!1,icon:je},running:{label:"Läuft …",animate:!0,icon:je}},an={off:0,standby:2,running:16,done:256},cn=()=>{const e=V();e.ENABLE_LAUNDRY;const i=e.LAUNDRY_MACHINES||[];e.HASS_ACCESS_TOKEN,e.SUPERVISOR_TOKEN;const n=(Array.isArray(i)?i:[]).map((E,S)=>{const[y,p]=ln(E.entity_id);return{state:y,error:p,name:E.name}}),[a,u]=_.useState(q.off),[g,h]=_.useState(!1),b=n.map(E=>E.state),l=n.map(E=>E.error);_.useEffect(()=>{const E=l.some(S=>S!==!1);h(E&&l.find(S=>S!==!1)||!1)},[l]),_.useEffect(()=>{const E=b.reduce((S,y)=>S+(an[y]||0),0);E===0?u(q.off):E<16?u(q.standby):E<256?u(q.running):E%256===0?u(q.done):E%256%16===0?u(q.running):E%256%2===0?u(q.done):u(q.running)},[b]);const f=n.map(E=>({label:E.name,state:E.state}));return[a,f,g]},ln=e=>{const[i,t]=_.useState("off"),[n,a]=_.useState(!1),u=ENABLE_LAUNDRY&&e,g=sn(e);return _.useEffect(()=>{!u||!g||I(g).then(h=>{t(h.data.state),a(!1)}).catch(h=>{a(z(h))})},[e,u,g]),_.useEffect(()=>{let h=null,b=null,l=!0,f=null,E=0,S=!1;async function y(){if(!u||!e||S)return;if(h){try{b&&(b(),b=null),h.close()}catch(s){R.debug(`Error closing existing WebSocket connection for ${e}:`,s)}h=null}S=!0;const p=le(),m=SUPERVISOR_TOKEN||HASS_ACCESS_TOKEN||"";if(!m){R.debug("Skipping WebSocket connection - no access token (using REST API only)"),S=!1;return}try{const s=se(p,m);h=await ae({auth:s}),h.addEventListener("ready",()=>{l&&(R.debug(`WebSocket connection ready for ${e}`),E=0,a(!1))}),h.addEventListener("disconnected",()=>{if(l&&!S){R.debug(`WebSocket disconnected for ${e}, will attempt to reconnect`),f&&clearTimeout(f),h=null,b=null;const r=Math.min(1e3*Math.pow(2,E),3e4);E++,f=setTimeout(()=>{l&&!S&&(R.debug(`Attempting to reconnect WebSocket for ${e} (attempt ${E})`),y())},r)}});const d=r=>{l&&t(r.variables.trigger.to_state.state)};b=await h.subscribeMessage(d,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),S=!1}catch(s){if(S=!1,l){R.error(`Failed to setup WebSocket connection for ${e}:`,s),a(s instanceof Error?s.message:String(s));const d=Math.min(1e3*Math.pow(2,E),3e4);E++,f=setTimeout(()=>{l&&(R.debug(`Attempting to reconnect WebSocket for ${e} after error (attempt ${E})`),y())},d)}}}return y(),()=>{l=!1,f&&clearTimeout(f),b&&b(),h&&h.close()}},[e,u]),[i,n]},dn=O.div`
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
`,fn=()=>{if(!(V().ENABLE_LAUNDRY||!1))return null;const[t,n,a]=cn(),[u,g]=_.useState(!1),h=C.useCallback(()=>{a===!1&&g(!0)},[a]),b=C.useCallback(()=>g(!1),[]);return o.jsxs(dn,{className:Y({disabled:a!==!1}),children:[o.jsx("h2",{children:"Wäsche"}),o.jsx("div",{className:"status",onClick:h,children:a!==!1?o.jsxs(o.Fragment,{children:[o.jsx(G,{path:_e,size:"2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:Y({animate:t.animate}),children:o.jsx(G,{path:t.icon,size:"2rem",color:"#ffffff"})}),o.jsx("span",{children:t.label})]})}),o.jsx(ce,{visible:u&&a===!1,onClick:b,children:o.jsxs("div",{className:"states",children:[o.jsx("h2",{children:"Wäsche"}),n.map((l,f)=>o.jsxs("div",{children:[o.jsx("div",{className:"subtitle",children:l.label}),o.jsx("div",{className:Y({animate:q[l.state].animate}),children:o.jsx(G,{path:q[l.state].icon,size:2})}),o.jsx("div",{children:q[l.state].label})]},f))]})})]})},un=C.memo(fn),hn=O.div`
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
    flex-shrink: 0;
    margin-top: 0;
    
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
`,pn=()=>o.jsxs(hn,{children:[o.jsxs("div",{className:"top-content",children:[o.jsx(No,{}),o.jsx(Bo,{}),o.jsx(qo,{})]}),o.jsxs("div",{className:"two-cols",children:[o.jsx(rn,{}),o.jsx(un,{})]})]}),mn=C.memo(pn),$e=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],gn=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],me={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},xn={landscape:"L",portrait:"P",wide:"W"},En=O.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,yn=O.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,wn=O.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,te=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,oe=O.label`
  font-size: 0.9rem;
  color: #cccccc;
`,Ve=O.select`
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
`,Be=O.input`
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
`,An=O.button`
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
`,Ye=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,bn=O.button`
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
`,Sn=O.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Tn=O.div`
  position: absolute;
  background-color: ${e=>me[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,_n=O.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Ln=O.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Rn=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,de=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,fe=O.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ue=O.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,jn=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Nn=O.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;O.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;const be=O.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?me[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?me[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?me[e.orientation]:"#4a4a4a"};
  }
`,He=()=>{const[e,i]=C.useState(1920),[t,n]=C.useState(1080),[a,u]=C.useState("Full HD"),[g,h]=C.useState(""),[b,l]=C.useState(""),[f,E]=C.useState([{orientation:"landscape"}]),[S,y]=C.useState(null),p=C.useMemo(()=>Ke(f,e,t),[f,e,t]),m=c=>{const w=$e.find(T=>T.name===c);w&&w.width&&w.height?(i(w.width),n(w.height),u(c),h(""),l("")):c==="Custom"&&u("Custom")},s=()=>{const c=parseInt(g),w=parseInt(b);c>0&&w>0&&(i(c),n(w))},d=c=>{E(c.videos),y(c.name)},r=c=>{const w=[];for(let T=0;T<c;T++)w.push(f[T]||{orientation:"landscape"});E(w),y(null)},x=(c,w)=>{const T=[...f];T[c]={orientation:w},E(T),y(null)},A=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return o.jsxs(En,{children:[o.jsx(yn,{children:"Video Tiling Algorithm Demo"}),o.jsxs(wn,{children:[o.jsxs(te,{children:[o.jsx(oe,{children:"Screen Size Preset"}),o.jsx(Ve,{value:a,onChange:c=>m(c.target.value),children:$e.map(c=>o.jsx("option",{value:c.name,children:c.name},c.name))})]}),a==="Custom"&&o.jsxs(o.Fragment,{children:[o.jsxs(te,{children:[o.jsx(oe,{children:"Custom Width"}),o.jsx(Be,{type:"number",value:g,onChange:c=>h(c.target.value),placeholder:"Width",min:"100"})]}),o.jsxs(te,{children:[o.jsx(oe,{children:"Custom Height"}),o.jsx(Be,{type:"number",value:b,onChange:c=>l(c.target.value),placeholder:"Height",min:"100"})]}),o.jsxs(te,{children:[o.jsx(oe,{children:" "}),o.jsx(An,{onClick:s,children:"Apply Custom Size"})]})]}),o.jsxs(te,{children:[o.jsx(oe,{children:"Number of Videos"}),o.jsxs(Ve,{value:f.length,onChange:c=>r(parseInt(c.target.value)),children:[o.jsx("option",{value:"1",children:"1 Video"}),o.jsx("option",{value:"2",children:"2 Videos"}),o.jsx("option",{value:"3",children:"3 Videos"}),o.jsx("option",{value:"4",children:"4 Videos"})]})]}),f.map((c,w)=>o.jsxs(te,{children:[o.jsxs(oe,{children:["Video ",w+1," Orientation"]}),o.jsxs(Ye,{children:[o.jsx(be,{active:c.orientation==="landscape",orientation:"landscape",onClick:()=>x(w,"landscape"),children:"Landscape"}),o.jsx(be,{active:c.orientation==="portrait",orientation:"portrait",onClick:()=>x(w,"portrait"),children:"Portrait"}),o.jsx(be,{active:c.orientation==="wide",orientation:"wide",onClick:()=>x(w,"wide"),children:"Wide"})]})]},w))]}),o.jsxs(jn,{children:[o.jsx(Nn,{children:"Test Scenarios"}),o.jsx(Ye,{children:gn.map(c=>o.jsx(bn,{active:S===c.name,onClick:()=>d(c),children:c.name},c.name))})]}),o.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:o.jsx(Sn,{style:{width:`${e*A}px`,height:`${t*A}px`},children:p.videos.map((c,w)=>o.jsxs(Tn,{orientation:c.orientation,style:{left:`${c.x*A}px`,top:`${c.y*A}px`,width:`${c.width*A}px`,height:`${c.height*A}px`},children:[o.jsxs(_n,{children:[xn[c.orientation]," ",w+1]}),o.jsxs(Ln,{children:[Math.round(c.width)," × ",Math.round(c.height)]})]},w))})}),o.jsxs(Rn,{children:[o.jsxs(de,{children:[o.jsx(fe,{children:"Canvas Size"}),o.jsxs(ue,{children:[e," × ",t]})]}),o.jsxs(de,{children:[o.jsx(fe,{children:"Total Area Used"}),o.jsxs(ue,{children:[Math.round(p.totalArea).toLocaleString()," px²"]})]}),o.jsxs(de,{children:[o.jsx(fe,{children:"Efficiency"}),o.jsxs(ue,{children:[p.efficiency.toFixed(2),"%"]})]}),o.jsxs(de,{children:[o.jsx(fe,{children:"Display Scale"}),o.jsxs(ue,{children:[(A*100).toFixed(1),"%"]})]})]})]})},Cn=()=>{function e(t,n){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(n))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[u,g]=n.split(":").map(Number),h=new Date;let b=new Date(h.getFullYear(),h.getMonth(),h.getDate());b.setHours(u,g,0,0),b<=h&&b.setDate(b.getDate()+1);const l=b.getTime()-h.getTime();return R.log("Reloading page at",n,"in",Math.floor(l/1e3/60),"minutes"),setTimeout(t,l)}const i=()=>{R.log("Timeout reached! "),window.location.reload(!0)};_.useLayoutEffect(()=>{const t=[e(i,"00:00"),e(i,"03:00"),e(i,"06:00"),e(i,"09:00"),e(i,"12:00"),e(i,"15:00"),e(i,"18:00"),e(i,"21:00")];return()=>{t.forEach(n=>{n&&clearTimeout(n)})}},[])},kn=O.div`
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
`;class xe extends _.Component{constructor(i){super(i),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,t){this.setState({error:i,errorInfo:t}),R.error("ErrorBoundary caught an error:",i,t)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?o.jsxs(kn,{children:[o.jsx("h2",{children:"Something went wrong"}),o.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,o.jsxs("div",{children:[o.jsx("button",{onClick:this.handleReset,children:"Try Again"}),o.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const On=ft`
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
`,Dn=O.div`
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
`;function vn(){return Cn(),o.jsxs(Dn,{children:[o.jsx(On,{}),o.jsxs("div",{className:"main",children:[o.jsx(xe,{children:o.jsx(To,{})}),o.jsx(xe,{children:o.jsx(mn,{})})]}),o.jsx(ht,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function In(){return o.jsx(xe,{children:o.jsxs(ut,{children:[o.jsx(ye,{path:"/demo",element:o.jsx(He,{})}),o.jsx(ye,{path:"/tiling-demo",element:o.jsx(He,{})}),o.jsx(ye,{path:"*",element:o.jsx(vn,{})})]})})}const Wn=pt.createRoot(document.getElementById("root"));Wn.render(o.jsx(_.StrictMode,{children:o.jsx(xe,{children:o.jsx(Bt,{children:o.jsx(mt,{children:o.jsx(In,{})})})})}));
