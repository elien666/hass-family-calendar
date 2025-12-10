import{d as O,R as _,j as i,I as F,r as C,l as Ye,P as Ke,W as qe,b as Xe,e as Je,f as Qe,h as Ze,i as et,k as tt,m as nt,n as ot,o as it,T as rt,p as st,s as at,y as ct,q as lt,t as dt,u as ye,L as ft,v as ut,B as ht}from"./react-vendor-BitJRyew.js";import{D as B}from"./date-vendor-BDx6lZXm.js";import{f as H}from"./vendor-CeaMKy47.js";import{m as pt,a as mt,b as gt,c as xt,d as Et,e as yt,f as Le,g as wt,h as bt,i as At,j as St,k as Tt,l as Lt,n as jt,o as _t,p as Nt,q as Rt,r as Ct,s as vt,t as Ne,u as kt,v as Ot}from"./ui-vendor-C7t39j5V.js";import{a as I,q as Dt}from"./utils-vendor-Cs1iS-Fd.js";import{c as oe,a as ie}from"./ha-vendor-CoU0AojH.js";import{t as Mt}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const m of a)if(m.type==="childList")for(const w of m.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&o(w)}).observe(document,{childList:!0,subtree:!0});function t(a){const m={};return a.integrity&&(m.integrity=a.integrity),a.referrerPolicy&&(m.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?m.credentials="include":a.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(a){if(a.ep)return;a.ep=!0;const m=t(a);fetch(a.href,m)}})();const It=O.div`
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
`,re=({visible:e,children:n,onClick:t,onClose:o,fullsize:a=!1})=>{const m=o||t,w=E=>{E.stopPropagation(),E.preventDefault(),m()};return _.useEffect(()=>{if(e){const E=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${E}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,E)}}},[e]),e?i.jsxs(It,{onClick:t,children:[i.jsx("div",{className:"close",onClick:w,children:i.jsx(F,{path:pt,size:2})}),i.jsx("div",{className:H("content",{fullsize:a}),onClick:E=>E.stopPropagation(),children:n})]}):null},ae=(e,n,t=null)=>{setTimeout(async()=>{try{const a=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,m={level:e,message:n,...t&&{metadata:t}};await I.post(a,m,{timeout:2e3})}catch{}},0)},ce=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},le=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},N={log:(...e)=>{const n=ce(e),t=le(e);n&&ae("INFO",n,t)},error:(...e)=>{console.error(...e);const n=ce(e),t=le(e);n&&ae("ERROR",n,t)},warn:(...e)=>{const n=ce(e),t=le(e);n&&ae("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=ce(e),t=le(e);n&&ae("INFO",n,t)}},$t={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Pt=()=>{const e=(n,t=void 0)=>{const o=$t[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),SUPERVISOR_TOKEN:e("SUPERVISOR_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_API_KEY:e("WEATHER_API_KEY",""),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),GEOFOX_SECRET:e("GEOFOX_SECRET",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})()}},Fe=C.createContext(null),Wt=({children:e})=>{const[n,t]=C.useState(Pt),[o,a]=C.useState(!0);return C.useEffect(()=>{(async()=>{try{const E=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`,S=await I.get(E,{timeout:5e3});if(S.data&&typeof S.data=="object"){t(S.data);const l=Object.keys(S.data).filter(d=>d.startsWith("ENABLE_")&&S.data[d]).map(d=>d.replace("ENABLE_",""));N.info(`Configuration loaded from API endpoint. Enabled features: ${l.length>0?l.join(", "):"none"}`,{enabledFeatures:l,totalConfigKeys:Object.keys(S.data).length})}}catch(w){N.debug("Failed to load config from API, using defaults:",w.message)}finally{a(!1)}})()},[]),C.useEffect(()=>{const m=n.HASS_ACCESS_TOKEN||"";m&&typeof m=="string"&&m.trim()!==""&&m!=="undefined"&&m!=="null"?I.defaults.headers.common.Authorization=`Bearer ${m}`:delete I.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),i.jsx(Fe.Provider,{value:{config:n,loading:o},children:e})},W=()=>{const e=C.useContext(Fe);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config};let te=0,he=0,J=0;const ee=[],Ue=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},Vt=(e,n="")=>{const t=Ue(e);J++,te++,ee.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ee.length>10&&ee.shift();const o=[];return n&&o.push(`[${n}]`),o.push("🔴 Axios API Error:"),o.push(`Message: ${t.message}`),t.url&&o.push(`URL: ${t.url}`),t.status&&o.push(`HTTP Status: ${t.status}`),t.code&&o.push(`Error Code: ${t.code}`),t.isNetworkError&&(o.push("Type: Network Error (no response received)"),t.readyState!==void 0&&o.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&o.push("Type: Timeout Error"),t.config&&(o.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),o.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&o.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&o.push("Response Data:",t.responseData),o.push(`Request Stats: ${he} success, ${J} errors (${te} total)`),J>3&&ee.length>0&&o.push("Recent errors pattern:",ee.slice(-5)),N.error(...o),t},Bt=e=>{he++,te++,(te%10===0||J>0)&&N.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:te,stats:`${he} success, ${J} errors`}),J>0&&te%10===0&&he>J&&(J=0,ee.length=0)},z=e=>{const n=Ue(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};I.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,N.debug("Axios Defaults State:",{baseURL:I.defaults.baseURL,timeout:I.defaults.timeout,hasAuthHeader:!!I.defaults.headers?.common?.Authorization,authHeaderLength:I.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(I.defaults.headers?.common||{})})),e},e=>(N.error("Axios Request Setup Error:",e),Promise.reject(e)));I.interceptors.response.use(e=>(e.config&&Bt(e.config),e),e=>{const n=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(Vt(e,n),e.config?.metadata){const t=Date.now()-e.config.metadata.startTime;N.error("Request Duration:",`${t}ms`,"Request ID:",e.config.metadata.requestId)}return typeof window<"u"&&window.location&&N.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href}),Promise.reject(e)});const P=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const o=n.INGRESS_URL||"";if(o&&typeof o=="string"&&o.trim()!==""){const m=t.startsWith("/")?t.slice(1):t;return`${window.location.origin}${o}${m}`}const a=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${a}${t}`}return t}},se=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},Ht=()=>{const e=W(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[o,a]=_.useState(null),[m,w]=_.useState(!1),E=n&&t,S=t?P(`/api/states/${t}`,e):null;return _.useEffect(()=>{if(!E||!S)return;let l=!0;const d=new AbortController;return I(S,{signal:d.signal}).then(h=>{l&&(h.data.attributes.store!==void 0?a(h.data.attributes.store):a([]),w(!1))}).catch(h=>{l&&!d.signal.aborted&&(w(z(h)),a([]))}),()=>{l=!1,d.abort()}},[E,S,n,t]),[o,m]},Yt=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=P(`/api/states/${t}`,n);I.post(o,{state:new Date,attributes:{store:e}}).catch(a=>{N.error("Failed to store everyday calendar data:",a)})},Re=O.div` 

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
`,Ft=({on:e,month:n,day:t})=>{const[o,a]=e,m=o.indexOf(`${n}-${t}`),w=m>-1,E=()=>{a(w?o.toSpliced(m,1):[...o,`${n}-${t}`])};return i.jsx("div",{className:H("dot",{on:w}),onClick:()=>E()})},Ut=()=>{const e=W();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let l=1;l<13;l++){const d=new Date(t,l,0).getDate();for(let h=1;h<=d;h++)o.push({month:l,day:h})}const a=Array.from({length:31},(l,d)=>d+1),m=Array.from({length:12},(l,d)=>d+1),w=_.useState(void 0),[E,S]=Ht();return _.useEffect(()=>{E!==null&&w[1](E)},[E]),_.useEffect(()=>{w[0]!==void 0&&Yt(w[0],e)},[w[0],e]),w[0]!==void 0?i.jsxs(Re,{children:[i.jsx("h2",{children:"Jeden Tag ein bißchen"}),S!==!1&&i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:S instanceof Error?S.message:String(S)})]}),i.jsxs("div",{className:"calendar",children:[a.map((l,d)=>i.jsx("div",{style:{gridArea:`${l+1} / 1 / ${l+1} / 1`},children:l},d)),m.map((l,d)=>i.jsx("div",{style:{gridArea:`1 / ${l+1} / 1 / ${l+1}`},children:l},d)),o.map((l,d)=>i.jsx("div",{style:{gridArea:`${l.day+1} / ${l.month+1} / ${l.day+1} / ${l.month+1}`},children:i.jsx(Ft,{on:w,month:l.month,day:l.day})},d))]})]}):i.jsx(Re,{className:"loading",children:S!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:S instanceof Error?S.message:String(S)})]}):i.jsx(Ye,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},zt=O.div`
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
  }`,Gt=()=>{const[e,n]=_.useState(B.now()),[t,o]=_.useState(!1),a=C.useCallback(()=>o(!0),[]),m=C.useCallback(()=>o(!1),[]);return _.useEffect(()=>{const w=setInterval(()=>n(B.now()),1e3);return()=>clearInterval(w)},[]),i.jsxs(i.Fragment,{children:[i.jsxs(zt,{onClick:a,children:[e.toFormat("HH"),i.jsx("span",{children:":"}),e.toFormat("mm")]}),i.jsx(re,{visible:t,onClick:m,fullsize:!0,children:i.jsx(Ut,{})})]})},Kt=C.memo(Gt),qt=()=>{const e=W(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const o=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[m,w]=_.useState("off"),[E,S]=_.useState(!1),l=n&&t,d=t?P(`/api/states/${t}`,e):null;return _.useEffect(()=>{if(!l||!d)return;let h=!0;const y=new AbortController;return I(d,{signal:y.signal}).then(g=>{h&&(w(g.data.state),S(!1))}).catch(g=>{h&&!y.signal.aborted&&S(z(g))}),()=>{h=!1,y.abort()}},[l,d,n,t]),_.useEffect(()=>{let h=null,y=null,g=!0,f=null,u=0;const s=5;let c=!1,r=null,p=null;async function T(){if(!l||!t||!g||c)return;if(h){try{r&&(h.removeEventListener("ready",r),r=null),p&&(h.removeEventListener("disconnected",p),p=null),y&&(y(),y=null),h.close()}catch{}h=null}c=!0;const x=se(e),A=a||o||"";if(!A){c=!1;return}let b;try{b=oe(x,A),g&&S(!1)}catch(L){g&&(N.error("Failed to create WebSocket auth:",L),S(L instanceof Error?L.message:String(L))),c=!1;return}try{h=await ie({auth:b}),r=()=>{g&&(N.debug("WebSocket connection ready for doorbell"),u=0,S(!1))},h.addEventListener("ready",r),p=()=>{if(g&&!c){if(N.debug("WebSocket disconnected for doorbell, will attempt to reconnect"),f&&(clearTimeout(f),f=null),u>=s){N.warn(`Max reconnection attempts (${s}) reached for doorbell, stopping reconnection`),g&&S("Verbindung verloren. Bitte Seite neu laden.");return}h=null,y=null,r=null,p=null;const j=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!c&&u<=s&&(N.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${u}/${s})`),T())},j)}},h.addEventListener("disconnected",p);const L=j=>{if(g){const R=j.variables.trigger.to_state.state;w(R)}};y=await h.subscribeMessage(L,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),c=!1}catch(L){if(c=!1,g)if(N.error("Failed to setup WebSocket connection:",L),N.error("WebSocket error details:",{message:L instanceof Error?L.message:String(L),code:L.code,name:L.name,wsUrl:b?.wsUrl,host:x,tokenLength:A?A.length:0}),L.code===2&&N.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),S(L instanceof Error?L.message:String(L)),u<s){const j=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!c&&u<=s&&T()},j)}else N.warn(`Max reconnection attempts (${s}) reached for doorbell, stopping reconnection`),g&&S("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return T(),()=>{if(g=!1,c=!1,f&&(clearTimeout(f),f=null),h)try{r&&h.removeEventListener("ready",r),p&&h.removeEventListener("disconnected",p)}catch{}if(y){try{y()}catch{}y=null}if(h){try{h.close()}catch{}h=null}}},[l]),[m,E]},Xt=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&I.post(P("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to unlatch front door:",t)})},D={portrait:360/480,landscape:1920/1072,wide:770/216};function Jt(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function ze(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,a=Jt(e);return o===1?Qt(e[0],n,t):o===2?Zt(a,e,n,t):o===3?en(a,e,n,t):o===4?tn(a,e,n,t):{videos:[],totalArea:0,efficiency:0}}function Qt(e,n,t){const o=D[e.orientation];let a,m;const w=n/t;return o>w?(a=n,m=n/o):(m=t,a=t*o),{videos:[{x:(n-a)/2,y:(t-m)/2,width:a,height:m,orientation:e.orientation}],totalArea:a*m,efficiency:a*m/(n*t)*100}}function Zt(e,n,t,o){if(e.portrait>0)return je(e,n,t,o);const a=[];e.landscape>0&&a.push("landscape"),e.wide>0&&a.push("wide");const m=a[0]||n[0].orientation,w=a[1]||n[1].orientation,E=D[m],S=D[w];if(e.landscape===1&&e.wide===1){const f=D.landscape,u=D.wide,s=t,c=s/f,r=s/u,p=c+r;let T,x,A;if(p<=o)T=c,x=r,A=s;else{const M=o/p;T=c*M,x=r*M,A=x*u}const b=(t-A)/2,j=q(n,[{x:b,y:0,width:A,height:x,orientation:"wide"},{x:b,y:x,width:A,height:T,orientation:"landscape"}]),R=A*T+A*x,v=R/(t*o)*100;return{videos:j,totalArea:R,efficiency:v}}if(e.wide===2){const f=D.wide,u=t,s=u/f,c=s*2;let r;c<=o?r=s:r=o/2;const T=q(n,[{x:0,y:0,width:u,height:r,orientation:"wide"},{x:0,y:r,width:u,height:r,orientation:"wide"}]),x=u*r*2,A=x/(t*o)*100;return{videos:T,totalArea:x,efficiency:A}}const l=[()=>{const f=t,u=f/2,s=f/2,c=u/E,r=s/S;return Math.max(c,r)<=o?{positions:[{x:0,y:(o-c)/2,width:u,height:c,orientation:m},{x:u,y:(o-r)/2,width:s,height:r,orientation:w}],totalArea:u*c+s*r}:null},()=>{const f=o,u=f/2,s=f/2,c=u*E,r=s*S;return Math.max(c,r)<=t?{positions:[{x:(t-c)/2,y:0,width:c,height:u,orientation:m},{x:(t-r)/2,y:u,width:r,height:s,orientation:w}],totalArea:c*u+r*s}:null}];let d=null,h=0;for(const f of l){const u=f();u&&u.totalArea>h&&(h=u.totalArea,d=u)}if(!d){const f=t/2,u=t/2,s=Math.min(f/E,o),c=Math.min(u/S,o);d={positions:[{x:0,y:(o-s)/2,width:f,height:s,orientation:m},{x:f,y:(o-c)/2,width:u,height:c,orientation:w}],totalArea:f*s+u*c}}const y=q(n,d.positions),g=d.totalArea/(t*o)*100;return{videos:y,totalArea:d.totalArea,efficiency:g}}function je(e,n,t,o){const a=e.portrait,m=n.length-a;if((a===3||a===4)&&m===0){const g=D.portrait,f=t/a,u=f/g,s=u<o?(o-u)/2:0,c=Math.min(u,o),r=[];let p=0;for(let A=0;A<a;A++){const b=Math.min(f,c*g);r.push({x:A*f+(f-b)/2,y:s,width:b,height:c,orientation:"portrait"}),p+=b*c}const T=q(n,r),x=p/(t*o)*100;return{videos:T,totalArea:p,efficiency:x}}n.filter(g=>g.orientation==="portrait");const w=n.filter(g=>g.orientation!=="portrait"),E=a>0?Math.min(t*.4,t*.5):0,S=t-E,l=[];let d=0;if(a===2&&m===0){const g=D.portrait,f=t/2,u=f/g,s=o;let c,r;u<=s?(r=u,c=f):(r=s,c=s*g);const p=(o-r)/2;l.push({x:(f-c)/2,y:p,width:c,height:r,orientation:"portrait"}),l.push({x:f+(f-c)/2,y:p,width:c,height:r,orientation:"portrait"}),d=c*r*2}else if(a===1&&m===1){const g=D.portrait,f=w[0],u=D[f.orientation],s=g+u,c=t*(g/s),r=t*(u/s),p=c/g,T=r/u,x=Math.min(o,Math.min(p,T)),A=(o-x)/2;l.push({x:0,y:A,width:c,height:x,orientation:"portrait"}),l.push({x:c,y:A,width:r,height:x,orientation:f.orientation}),d=c*x+r*x}else if(a===1&&m===2&&e.landscape===1&&e.wide===1){const g=D.portrait,f=D.wide,u=D.landscape,s=o,c=o*g,r=o/(1/f+1/u),p=r/f,T=r/u,x=c+r;if(Math.abs(x-t)<.1)l.push({x:0,y:0,width:c,height:s,orientation:"portrait"}),d+=c*s,w.find(j=>j.orientation==="wide")&&(l.push({x:0+c,y:0,width:r,height:p,orientation:"wide"}),d+=r*p),w.find(j=>j.orientation==="landscape")&&(l.push({x:0+c,y:p,width:r,height:T,orientation:"landscape"}),d+=r*T);else{const A=t/x,b=c*A,L=b/g,j=r*A,R=o/L;let v=b*R,M=o,k=j*R,V=k/f,$=k/u,Y=v+k;if(Y>t){const X=t/Y;v=v*X,M=v/g,k=k*X,V=k/f,$=k/u,Y=v+k,Y>t&&(k=t-v,V=k/f,$=k/u)}const U=v+k;if(U>t){const X=t/U;v=v*X,M=v/g,k=k*X,V=k/f,$=k/u}const G=0;l.push({x:G,y:0,width:v,height:M,orientation:"portrait"}),d+=v*M,w.find(X=>X.orientation==="wide")&&(l.push({x:G+v,y:0,width:k,height:V,orientation:"wide"}),d+=k*V),w.find(X=>X.orientation==="landscape")&&(l.push({x:G+v,y:V,width:k,height:$,orientation:"landscape"}),d+=k*$)}}else if(a===1&&m===3){const g=D.portrait,f=o,u=f*g,s=u,c=t-s;l.push({x:0,y:0,width:u,height:f,orientation:"portrait"}),d+=u*f;const r=o/3;for(let p=0;p<w.length;p++){const T=w[p],x=D[T.orientation],A=r,b=c;let L,j;b/x<=A?(L=b,j=L/x):(j=A,L=j*x);const R=p*r+(r-j)/2;l.push({x:s+(c-L)/2,y:R,width:L,height:j,orientation:T.orientation}),d+=L*j}}else if(a===2&&m===1){const g=D.portrait,f=w[0],u=D[f.orientation],s=o/2,c=s*g,r=t-c,p=o*u;let T,x;p<=r?(x=o,T=x*u):(T=r,x=T/u);const A=c,b=s,L=(o-x)/2,j=(o/2-b)/2,R=o/2+(o/2-b)/2;l.push({x:0,y:L,width:T,height:x,orientation:f.orientation}),d+=T*x,l.push({x:r,y:j,width:A,height:b,orientation:"portrait"}),d+=A*b,l.push({x:r,y:R,width:A,height:b,orientation:"portrait"}),d+=A*b}else if(a===1&&m===2){const g=D.portrait,f=o,u=f*g,s=u,c=t-s;l.push({x:0,y:0,width:u,height:f,orientation:"portrait"}),d+=u*f;const r=o/2;for(let p=0;p<w.length;p++){const T=w[p],x=D[T.orientation],A=r,b=c;let L,j;b/x<=A?(L=b,j=L/x):(j=A,L=j*x);const R=p*r+(r-j)/2;l.push({x:s+(c-L)/2,y:R,width:L,height:j,orientation:T.orientation}),d+=L*j}}else{const g=a;if(g>0){const f=o/g,u=D.portrait;for(let s=0;s<g;s++){const c=Math.min(f,E/u),r=c*u,p=s*f+(f-c)/2;l.push({x:(E-r)/2,y:p,width:r,height:c,orientation:"portrait"}),d+=r*c}}if(w.length>0){const f=o/w.length;for(let u=0;u<w.length;u++){const s=w[u],c=D[s.orientation],r=f,p=S;let T,x;p/c<=r?(T=p,x=T/c):(x=r,T=x*c);const A=u*f+(f-x)/2;l.push({x:E+(S-T)/2,y:A,width:T,height:x,orientation:s.orientation}),d+=T*x}}}const h=q(n,l),y=d/(t*o)*100;return{videos:h,totalArea:d,efficiency:y}}function q(e,n){const t=new Array(n.length),o=new Set,a=new Set;for(let E=0;E<n.length;E++){const S=n[E];for(let l=0;l<e.length;l++)if(!o.has(l)&&e[l].orientation===S.orientation){t[E]={...S,orientation:e[l].orientation},o.add(l),a.add(E);break}}const m=[];for(let E=0;E<n.length;E++)a.has(E)||m.push(E);let w=0;for(let E=0;E<e.length;E++)if(!o.has(E)&&w<m.length){const S=m[w];t[S]={...n[S],orientation:e[E].orientation},w++}return t}function en(e,n,t,o){if(e.portrait>0)return je(e,n,t,o);if(e.landscape===2&&e.wide===1){const s=D.landscape,c=D.wide,r=t,p=r/c,T=o-p,x=t/2,A=x/s;let b,L,j,R;if(p<=o&&A<=T)b=r,L=p,j=x,R=A;else{const U=o/(p+A),G=Math.min(1,U);L=p*G,b=L*c,R=A*G,j=R*s}const v=(t-b)/2,M=L+(T-R)/2,V=q(n,[{x:v,y:0,width:b,height:L,orientation:"wide"},{x:0,y:M,width:j,height:R,orientation:"landscape"},{x:j,y:M,width:j,height:R,orientation:"landscape"}]),$=b*L+j*R*2,Y=$/(t*o)*100;return{videos:V,totalArea:$,efficiency:Y}}if(e.landscape===1&&e.wide===2){const s=D.landscape,c=D.wide,r=t/2,p=r/c,x=o-p,A=x*s;let b,L,j,R;if(p<=o&&A<=t&&p+x<=o)b=r,L=p,j=A,R=x;else{const G=p+x,Ee=o/G;b=r,L=p*Ee,R=x*Ee,j=R*s}const v=0,M=t/2,k=(t-j)/2,$=q(n,[{x:v,y:0,width:b,height:L,orientation:"wide"},{x:M,y:0,width:b,height:L,orientation:"wide"},{x:k,y:L,width:j,height:R,orientation:"landscape"}]),Y=b*L*2+j*R,U=Y/(t*o)*100;return{videos:$,totalArea:Y,efficiency:U}}if(e.wide===3){const s=D.wide,c=t/2,r=c/s,T=o-r,x=T*s;let A,b,L,j;if(r<=o&&x<=t&&r+T<=o)A=c,b=r,L=x,j=T;else{const U=r+T,G=o/U;A=c,b=r*G,j=T*G,L=j*s,L>t&&(L=t,j=L/s)}const R=0,v=t/2,M=(t-L)/2,V=q(n,[{x:R,y:0,width:A,height:b,orientation:"wide"},{x:v,y:0,width:A,height:b,orientation:"wide"},{x:M,y:b,width:L,height:j,orientation:"wide"}]),$=A*b*2+L*j,Y=$/(t*o)*100;return{videos:V,totalArea:$,efficiency:Y}}if(e.landscape===3){const s=D.landscape,c=t/(s*1.5),r=Math.min(o,c),p=r/2,T=r,x=p*s,A=T*s,b=(o-r)/2,L=[{x:0,y:b,width:x,height:p,orientation:"landscape"},{x:0,y:b+p,width:x,height:p,orientation:"landscape"},{x,y:b,width:A,height:T,orientation:"landscape"}],j=q(n,L),R=x*r+A*r,v=R/(t*o)*100;return{videos:j,totalArea:R,efficiency:v}}const a=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)a.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)a.push("wide");const m=a[0]||n[0].orientation,w=a[1]||n[1].orientation,E=a[2]||n[2].orientation,S=D[m],l=D[w],d=D[E],h=[()=>{const s=t*.6,c=t*.4,r=s/S,p=c/l,T=c/d,x=p+T;return r<=o&&x<=o?{positions:[{x:0,y:(o-r)/2,width:s,height:r,orientation:m},{x:s,y:0,width:c,height:p,orientation:w},{x:s,y:p,width:c,height:T,orientation:E}],totalArea:s*r+c*p+c*T}:null},()=>{const s=o*.5,c=o*.5,r=s*S,p=s*l,T=c*d;return r+p<=t&&T<=t?{positions:[{x:0,y:0,width:r,height:s,orientation:m},{x:r,y:0,width:p,height:s,orientation:w},{x:(t-T)/2,y:s,width:T,height:c,orientation:E}],totalArea:r*s+p*s+T*c}:null},()=>{const s=t/3,c=s/S,r=s/l,p=s/d;return Math.max(c,r,p)<=o?{positions:[{x:0,y:(o-c)/2,width:s,height:c,orientation:m},{x:s,y:(o-r)/2,width:s,height:r,orientation:w},{x:s*2,y:(o-p)/2,width:s,height:p,orientation:E}],totalArea:s*c+s*r+s*p}:null}];let y=null,g=0;for(const s of h){const c=s();c&&c.totalArea>g&&(g=c.totalArea,y=c)}if(!y){const s=t/3,c=Math.min(s/S,o),r=Math.min(s/l,o),p=Math.min(s/d,o);y={positions:[{x:0,y:(o-c)/2,width:s,height:c,orientation:m},{x:s,y:(o-r)/2,width:s,height:r,orientation:w},{x:s*2,y:(o-p)/2,width:s,height:p,orientation:E}],totalArea:s*c+s*r+s*p}}const f=q(n,y.positions),u=y.totalArea/(t*o)*100;return{videos:f,totalArea:y.totalArea,efficiency:u}}function tn(e,n,t,o){if(e.portrait>0)return je(e,n,t,o);const a=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)a.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)a.push("wide");const m=a[0]||n[0].orientation,w=a[1]||n[1].orientation,E=a[2]||n[2].orientation,S=a[3]||n[3].orientation,l=D[m],d=D[w],h=D[E],y=D[S],g=[()=>{const r=t/2,p=o/2,T=Math.min(r,p*l),x=T/l,A=Math.min(r,p*d),b=A/d,L=Math.min(r,p*h),j=L/h,R=Math.min(r,p*y),v=R/y;return{positions:[{x:(r-T)/2,y:(p-x)/2,width:T,height:x,orientation:m},{x:r+(r-A)/2,y:(p-b)/2,width:A,height:b,orientation:w},{x:(r-L)/2,y:p+(p-j)/2,width:L,height:j,orientation:E},{x:r+(r-R)/2,y:p+(p-v)/2,width:R,height:v,orientation:S}],totalArea:T*x+A*b+L*j+R*v}},()=>{const r=t*.6,p=t*.4,T=r/l,x=o/3,A=Math.min(p,x*d),b=A/d,L=Math.min(p,x*h),j=L/h,R=Math.min(p,x*y),v=R/y;return T<=o?{positions:[{x:0,y:(o-T)/2,width:r,height:T,orientation:m},{x:r,y:0,width:A,height:b,orientation:w},{x:r,y:x,width:L,height:j,orientation:E},{x:r,y:x*2,width:R,height:v,orientation:S}],totalArea:r*T+A*b+L*j+R*v}:null},()=>{const r=t/4,p=r/l,T=r/d,x=r/h,A=r/y;return Math.max(p,T,x,A)<=o?{positions:[{x:0,y:(o-p)/2,width:r,height:p,orientation:m},{x:r,y:(o-T)/2,width:r,height:T,orientation:w},{x:r*2,y:(o-x)/2,width:r,height:x,orientation:E},{x:r*3,y:(o-A)/2,width:r,height:A,orientation:S}],totalArea:r*p+r*T+r*x+r*A}:null}];let f=null,u=0;for(const r of g){const p=r();p&&p.totalArea>u&&(u=p.totalArea,f=p)}if(!f){const r=t/2,p=o/2,T=Math.min(p,r/l),x=Math.min(p,r/d),A=Math.min(p,r/h),b=Math.min(p,r/y);f={positions:[{x:(r-r)/2,y:(p-T)/2,width:r,height:T,orientation:m},{x:r+(r-r)/2,y:(p-x)/2,width:r,height:x,orientation:w},{x:(r-r)/2,y:p+(p-A)/2,width:r,height:A,orientation:E},{x:r+(r-r)/2,y:p+(p-b)/2,width:r,height:b,orientation:S}],totalArea:r*T+r*x+r*A+r*b}}const s=q(n,f.positions),c=f.totalArea/(t*o)*100;return{videos:s,totalArea:f.totalArea,efficiency:c}}const nn=e=>{const n=W();n.HASS_HOST;const t=n.HASS_ACCESS_TOKEN||"",o=n.SUPERVISOR_TOKEN||"",[a,m]=_.useState({}),[w,E]=_.useState(!0),[S,l]=_.useState(null);return _.useEffect(()=>{if(!e||e.length===0){E(!1);return}let d=!0;async function h(){E(!0),l(null);try{const y=e.map(async f=>{try{const u=P(`/api/states/${f}`,n),c=(await I(u)).data?.attributes?.access_token||null;return{entityId:f,accessToken:c}}catch(u){return N.error(`Failed to fetch access token for ${f}:`,u),{entityId:f,accessToken:null}}}),g=await Promise.all(y);if(d){const f={};g.forEach(({entityId:u,accessToken:s})=>{s&&(f[u]=s)}),m(f),E(!1)}}catch(y){d&&(N.error("Failed to fetch camera access tokens:",y),l(z(y)),E(!1))}}return h(),()=>{d=!1}},[e?.length,e?.join(",")]),_.useEffect(()=>{if(!e||e.length===0)return;let d=!0,h=null;async function y(){if(d)try{const g=e.map(async u=>{try{const s=P(`/api/states/${u}`,n),r=(await I(s)).data?.attributes?.access_token||null;return{entityId:u,accessToken:r}}catch(s){return N.debug(`Failed to refresh access token for ${u}:`,s),null}}),f=await Promise.all(g);d&&m(u=>{const s={...u};return f.forEach(c=>{c&&c.accessToken&&(s[c.entityId]=c.accessToken)}),s})}catch{}}return h=setInterval(y,300*1e3),()=>{d=!1,h&&clearInterval(h)}},[e?.length,e?.join(",")]),_.useEffect(()=>{if(!e||e.length===0)return;let d=null,h=[],y=!0,g=null,f=0;const u=5;let s=!1,c=null,r=null;async function p(){if(s||!y)return;if(d){try{c&&(d.removeEventListener("ready",c),c=null),r&&(d.removeEventListener("disconnected",r),r=null),h.forEach(b=>{b&&b()}),h=[],d.close()}catch{}d=null}s=!0;const T=se(n),x=o||t||"";if(!x){s=!1;return}let A;try{A=oe(T,x),y&&l(!1)}catch(b){y&&(N.error("Failed to create WebSocket auth for camera tokens:",b),l(b instanceof Error?b.message:String(b))),s=!1;return}try{d=await ie({auth:A}),c=()=>{y&&(N.debug("WebSocket connection ready for camera tokens"),f=0,l(!1))},d.addEventListener("ready",c),r=()=>{if(y&&!s){if(N.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),g&&(clearTimeout(g),g=null),f>=u){N.warn(`Max reconnection attempts (${u}) reached for camera tokens, stopping reconnection`),y&&l("Verbindung verloren. Bitte Seite neu laden.");return}d=null,h=[],c=null,r=null;const b=Math.min(1e3*Math.pow(2,f),3e4);f++,g=setTimeout(()=>{y&&!s&&f<=u&&(N.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${f}/${u})`),p())},b)}},d.addEventListener("disconnected",r);for(const b of e){const L=R=>{if(y){const M=R.variables.trigger.to_state?.attributes?.access_token||null;m(k=>M?{...k,[b]:M}:k)}},j=await d.subscribeMessage(L,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:b}});h.push(j)}s=!1}catch(b){if(s=!1,y)if(N.error("Failed to setup WebSocket connection for camera tokens:",b),l(b instanceof Error?b.message:String(b)),f<u){const L=Math.min(1e3*Math.pow(2,f),3e4);f++,g=setTimeout(()=>{y&&!s&&f<=u&&p()},L)}else N.warn(`Max reconnection attempts (${u}) reached for camera tokens, stopping reconnection`),y&&l("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return p(),()=>{if(y=!1,s=!1,g&&(clearTimeout(g),g=null),d)try{c&&d.removeEventListener("ready",c),r&&d.removeEventListener("disconnected",r)}catch{}if(h.forEach(T=>{if(T)try{T()}catch{}}),h=[],d){try{d.close()}catch{}d=null}}},[e?.length,e?.join(",")]),[a,w,S]},on=(e,n=null,t=null)=>{if(!e)return null;let o=t||"";if(!o&&typeof window<"u"&&window.location){const m=window.location.protocol,w=window.location.hostname,E=window.location.port?`:${window.location.port}`:"";o=`${m}//${w}${E}`}if(!o)return N.warn("HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL"),null;const a=`${o}/api/camera_proxy_stream/${e}`;return n?`${a}?token=${encodeURIComponent(n)}`:a},Ce=45e3,rn=O.div`
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
`,sn=()=>{const e=W(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[];if(!n)return null;const[o,a]=_.useState(!1),[m]=qt(),[w,E]=_.useState(void 0),[S,l]=_.useState(100),[d,h]=_.useState("0"),y=_.useMemo(()=>t.map(c=>c.entity_id).filter(Boolean),[t]),[g]=nn(y);_.useEffect(()=>{if(m==="off"&&o){const c=window.setTimeout(()=>{a(!1),E(void 0)},Ce);return E(c),h(Ce+"ms"),l(0),()=>{c&&window.clearTimeout(c)}}else m==="on"&&(h(0),l(100),a(!0))},[m,o]),_.useEffect(()=>{m==="on"&&w!==void 0&&(window.clearTimeout(w),h(0),l(100),E(void 0))},[w,m]);const[f,u]=_.useState(null),s=()=>{f===null?u("confirm"):f==="confirm"&&(u("opening"),Xt(e),setTimeout(()=>u(null),2e3))};return _.useEffect(()=>{if(f==="confirm"){const c=setTimeout(()=>{u(null)},3e3);return()=>{clearTimeout(c)}}},[f]),_.useEffect(()=>{o||u(null)},[o]),i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:()=>a(c=>!c),children:"CCTV"}),i.jsx(re,{visible:o,onClick:s,onClose:()=>{a(!1),u(null)},fullsize:!0,children:i.jsxs(rn,{onClick:s,children:[i.jsx(Ke,{completed:S,height:10,bgColor:w===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:d,transitionTimingFunction:"linear"}),i.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const c=t.map(b=>({orientation:b.orientation||"landscape"})),r=window.innerWidth,p=window.innerHeight-10,T=ze(c,r,p),x={portrait:t.filter(b=>(b.orientation||"landscape")==="portrait"),landscape:t.filter(b=>(b.orientation||"landscape")==="landscape"),wide:t.filter(b=>b.orientation==="wide")},A={portrait:0,landscape:0,wide:0};return T.videos.map((b,L)=>{const j=b.orientation,R=A[j],v=x[j][R];if(!v)return null;A[j]++;const M=g[v.entity_id]||null,k=on(v.entity_id,M,e.HASS_HOST);return k?i.jsxs("div",{className:"video-container",style:{left:`${b.x}px`,top:`${b.y}px`,width:`${b.width}px`,height:`${b.height}px`},children:[i.jsx("img",{src:k,className:j,alt:"Camera stream",crossOrigin:"anonymous"},`${v.entity_id}-${L}`),i.jsx("div",{className:"video-overlay",onClick:()=>s()})]},`${j}-${R}-${L}`):null})})()}),f==="confirm"&&i.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),f==="opening"&&i.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},an=O.div`
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

`,cn=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>i.jsxs(an,{children:[i.jsxs("div",{className:"buttons",children:[i.jsx(F,{path:mt,size:"32px",color:"#ffffff",onClick:n}),i.jsx(F,{path:gt,size:"32px",color:"#ffffff",onClick:e}),i.jsx("button",{onClick:t,children:"Today"}),i.jsx(sn,{})]}),i.jsx(Kt,{}),i.jsx(F,{path:xt,size:"32px",color:"#ffffff",className:H("indicator")})]}),ln=C.memo(cn),dn=6e4,_e=(e=dn,n=void 0)=>{const[t,o]=_.useState(!0);return _.useEffect(()=>{const a=setInterval(()=>{o(m=>!m)},e);return()=>{clearInterval(a)}},[e,n]),t},fn={mdiDelete:yt,mdiCake:Et},un=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return fn[n]||void 0},hn=(e,n,t,o,a,m)=>I(a(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:1e4,signal:m}).then(w=>{!w.data||!Array.isArray(w.data)||w.data.forEach(E=>{const S="dateTime"in E.start?B.fromISO(E.start.dateTime):B.fromSQL(E.start.date);let l;"dateTime"in E.end?l=Math.floor(B.fromISO(E.end.dateTime).diff(n,"days").as("days")):l=Math.floor(B.fromSQL(E.end.date).diff(n,"days").as("days"))-1;const d=Math.floor(S.diff(n,"days").as("days"));l>=o.length&&(l=o.length-1);const h="dateTime"in E.start?"events":"allDay";if(d>=0&&d<o.length)for(let y=d;y<=l;y++)o[y][h]=[...o[y][h],{...E,icon:e.icon}]})}).catch(w=>{if(!(I.isCancel(w)||w.name==="AbortError"||w.code==="ERR_CANCELED"))throw w}),ve=new Map,pn=300*1e3,mn=e=>e.toISODate(),gn=(e,n,t,o,a,m,w,E,S)=>{const l=[0,1,2,3,4,5].map(f=>e.plus({days:f}).startOf("day"));l[6]=e.plus({days:6}).endOf("day");const d=mn(e),h=ve.get(d);if(h&&Date.now()-h.timestamp<pn){S.current&&t(h.data);return}const y=l.map(f=>({date:f,allDay:[],events:[]}));if(!w||w.length===0){S.current&&(t(y),o(!1));return}const g=new AbortController;a.current&&a.current.abort(),a.current=g;try{S.current&&o(!0);const f=w.map(u=>hn(u,l[0],l[6],y,E,g.signal));Promise.all(f).then(()=>{S.current&&!g.signal.aborted&&(ve.set(d,{data:y,timestamp:Date.now()}),t(y),m(!1))}).catch(u=>{S.current&&!g.signal.aborted&&m(z(u))}).finally(()=>{S.current&&!g.signal.aborted&&o(!1)})}catch(f){S.current&&!g.signal.aborted&&(m(z(f)),o(!1))}},ke=[],xn=e=>{const n=W(),t=n.CALENDARS||[],o=_.useMemo(()=>t.map(s=>({name:s.name,icon:un(s.icon)})),[t]),a=_.useCallback(s=>P(`/api/calendars/${s}`,n),[n]),m=_.useCallback((s,c)=>`${a(s)}?${Dt.stringify(c)}`,[a]),[w,E]=_.useState(ke),[S,l]=_.useState(!1),[d,h]=_.useState(!1),[y,g]=_.useState(null),f=C.useRef(null),u=C.useRef(!0);return _e(6e4,"Calendar"),_.useEffect(()=>(u.current=!0,e!==void 0&&((y===null||!y.equals(e))&&(E(ke),g(e)),gn(e,w,E,l,f,h,o,m,u)),()=>{u.current=!1,f.current&&f.current.abort()}),[e,o]),[w,d]};function ne(e){const[n,t]=_.useState(!1);function o({key:m}){m===e&&t(!0)}const a=({key:m})=>{m===e&&t(!1)};return _.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",a)}),[e]),n}const En=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return B.fromJSDate(o)},yn=e=>{const n=()=>e(E=>E.plus({days:7})),t=ne("ArrowRight");_.useEffect(()=>{t&&n()},[t]);const o=()=>e(E=>E.minus({days:7})),a=ne("ArrowLeft");_.useEffect(()=>{a&&o()},[a]);const m=()=>e(En()),w=ne("t");return _.useEffect(()=>{w&&m()},[w]),{nextWeek:n,previousWeek:o,startWeekWithToday:m}},wn=e=>{const[n,t]=C.useState(0),[o,a]=C.useState(0),m=50;return{onTouchStart:l=>{a(0),t(l.targetTouches[0].clientX)},onTouchMove:l=>a(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const l=n-o,d=l>m,h=l<-m;d&&e.onSwipedLeft(),h&&e.onSwipedRight()}}},Oe=e=>B.fromISO(e).toLocaleString(B.TIME_24_SIMPLE),we=e=>e.toFormat("c")>=6,be=e=>e.hasSame(B.now(),"day"),bn=O.div`
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
`,An=()=>{const[e,n]=_.useState(void 0),[t,o]=xn(e),{nextWeek:a,previousWeek:m,startWeekWithToday:w}=yn(n);_.useEffect(()=>{w()},[]);const E=wn({onSwipedLeft:()=>a(),onSwipedRight:()=>m()}),S=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=C.useMemo(()=>t.slice(0,7),[t]);return i.jsxs(bn,{...E,children:[i.jsx(ln,{nextWeek:a,previousWeek:m,startWeekWithToday:w}),i.jsxs("div",{className:"schedule",children:[l.map((d,h)=>i.jsx("div",{className:H({weekend:we(d.date),today:be(d.date)},"caption"),children:i.jsx("h2",{children:d.date.toLocaleString(S)})},h)),l.map((d,h)=>i.jsx("div",{className:H("allDayRow",{weekend:we(d.date),today:be(d.date)}),children:d.allDay.map((y,g)=>i.jsx("div",{className:"allDayEvent",children:y.summary},g))},h)),l.map((d,h)=>i.jsx("div",{className:H("eventRow",{weekend:we(d.date),today:be(d.date)}),children:d.events.map((y,g)=>i.jsxs("div",{className:"event",children:[i.jsx("div",{children:y.summary}),i.jsxs("h3",{children:[y.icon&&i.jsx(F,{path:y.icon,size:"1rem",color:"#ffffff"}),Oe(y.start.dateTime)," - ",Oe(y.end.dateTime)]})]},g))},h))]}),t.length===0&&i.jsx("div",{className:"loading",children:o!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):i.jsx(Ye,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&i.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:i.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},ge={"clear-day":{icon:it,label:"Klar",color:"#eeeef5"},"clear-night":{icon:ot,label:"Klar",color:"#eeeef5"},rain:{icon:nt,label:"Regen",color:"#80a5d6"},snow:{icon:tt,label:"Schnee",color:"#8c82ce"},sleet:{icon:et,label:"Graupel",color:"#aba4db"},wind:{icon:Ze,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:Qe,label:"Neblig",color:"#d5dae2"},cloudy:{icon:Je,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:Xe,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:qe,label:"Teils bewölkt",color:"#d5dae2"}},Sn=e=>{const[n,t]=_.useState([]),[o,a]=_.useState(!1),m=_e(6e4*10,"Weather"),w=W(),E=w.ENABLE_WEATHER||!1,S=w.WEATHER_API_KEY||"",l=w.WEATHER_LATITUDE,d=w.WEATHER_LONGITUDE,h=E&&S&&l&&d,y=()=>`./forecast/${S}/${l},${d}?&units=si&exclude=minutely`;return _.useEffect(()=>{if(!h)return;let g=!0;const f=new AbortController;return I(y(),{signal:f.signal}).then(u=>{g&&(t(u.data),a(!1))}).catch(u=>{g&&!f.signal.aborted&&a(z(u))}).finally(()=>{g&&e&&e(!1)}),()=>{g=!1,f.abort()}},[m,e,h,E,S,l,d]),[n,o]},Tn=st(at),De=O.div`

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
`,Me=C.memo(({data:e,daily:n=!1})=>i.jsxs("div",{children:[i.jsxs("div",{children:[!n&&B.fromSeconds(e.time).toLocaleString(B.TIME_24_SIMPLE),n&&B.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),i.jsx("div",{children:i.jsx(Se,{icon:e.icon})}),i.jsx("div",{children:i.jsxs("strong",{children:[!n&&i.jsxs(i.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&i.jsxs(i.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),i.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),i.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Ln=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:ge[n.icon]?.color||"#ffffff",text:ge[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),Se=({icon:e})=>{const n=ge[e];return i.jsx(n.icon,{size:60,color:"#ffffff"})},jn=()=>{if(!(W().ENABLE_WEATHER||!1))return null;const[t,o]=Sn(),[a,m]=_.useState(!1),w=ne("w"),E=_.useRef(),S=C.useCallback(()=>m(g=>!g),[]),l=C.useCallback(()=>m(!0),[]),d=C.useMemo(()=>Ln(t),[t]),h=C.useMemo(()=>[3,6,9,12],[]),y=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return _.useEffect(()=>{if(!a||!E.current||!t||!t.hourly||d.length===0)return;const g={timezone:"Europe/Berlin"},f=document.createElement("div");return E.current.textContent="",E.current.appendChild(f),Mt(f,d,g),()=>{E.current&&(E.current.textContent="")}},[a,d]),_.useEffect(()=>{w&&S()},[w]),!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?i.jsx(De,{children:i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":i.jsxs(De,{children:[i.jsxs("div",{onClick:l,children:[i.jsxs("div",{className:"headline",children:[i.jsx(Se,{icon:t.currently.icon}),i.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),i.jsx("div",{className:"forecast",children:h.map((g,f)=>i.jsx(Me,{data:t.hourly.data[g]},f))})]}),i.jsx(re,{visible:a,onClick:S,children:i.jsxs("div",{className:"full-weather",children:[o!==!1&&i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),i.jsxs("div",{className:"detail-header",children:[i.jsx("div",{children:i.jsxs("div",{className:"headline",children:[i.jsx(Se,{icon:t.daily.data[0].icon}),i.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",i.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),i.jsx("h3",{children:ge[t.daily.data[0].icon].label})]}),i.jsx("div",{className:"values",children:i.jsxs("div",{className:"table",children:[i.jsxs("div",{children:[i.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Regen:"})," ",t.daily.data[0].precipProbability*100," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),i.jsxs("div",{children:[i.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),i.jsx("h3",{children:"Die nächsten 24 Stunden"}),i.jsx("div",{ref:E}),i.jsx("h3",{children:"Die nächste Woche"}),i.jsx("div",{className:"forecast",children:y.map((g,f)=>i.jsx(Me,{data:t.daily.data[g],daily:!0},f))}),i.jsxs("div",{className:"info",children:["Aktualisiert ",i.jsx(rt,{date:B.fromSeconds(t.currently.time).toJSDate(),formatter:Tn})]})]})})]})},_n=C.memo(jn),Nn="AK Wandsbek",Rn="Hamburg",Cn="Master:62016",vn="STATION",kn={x:10.091341,y:53.568702},On={name:Nn,city:Rn,id:Cn,type:vn,coordinate:kn},pe={departureList:"departureList",checkName:"checkName"},Dn=async(e,n,t)=>I({method:"post",url:`./gti/public/${e}`,data:n,signal:t,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}),Ie=(e,n)=>e.realtimeOffset-n.realtimeOffset,Mn=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(Ie),to:n.filter(t=>t.directionId===6).slice(0,3).sort(Ie)}},In=e=>{const t=W().ENABLE_HVV||!1,[o,a]=_.useState([]),[m,w]=_.useState(!1),E=_e(6e4),S=t;return _.useEffect(()=>{if(!S)return;if(!(e in pe)){N.warn(e,"not supported by HVV connector");return}let l=!0;const d=new AbortController;let h={version:51};switch(e){case pe.checkName:h={...h,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case pe.departureList:const y=B.now();h={...h,station:On,time:{date:y.toFormat("dd.MM.yyyy"),time:y.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:h=void 0}return Dn(e,h,d.signal).then(y=>{l&&(a(Mn(y.data)),w(!1))}).catch(y=>{l&&!d.signal.aborted&&w(z(y))}),()=>{l=!1,d.abort()}},[e,E,S,t]),[o,m]},$n=O.div`
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
`,$e=C.memo(({line:e,direction:n,realtimeOffset:t})=>i.jsxs("div",{className:"departure",children:[i.jsx("div",{children:i.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),i.jsx("div",{children:t===0?"Jetzt":i.jsxs(i.Fragment,{children:["in ",t," '"]})})]})),Pn=()=>{if(!(W().ENABLE_HVV||!1))return null;const[t,o]=In(pe.departureList);return i.jsx($n,{children:o!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((a,m)=>i.jsx($e,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},m)),i.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((a,m)=>i.jsx($e,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},m))]})})},Wn=C.memo(Pn),Vn=()=>{const e=W(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const o=e.ENTITY_CHARGING_STATE||"",a=e.ENTITY_STATE_OF_CHARGE||"",m=e.HASS_ACCESS_TOKEN||"",w=e.SUPERVISOR_TOKEN||"",[E,S]=_.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[l,d]=_.useState(!1),h=n&&(t||o||a);return _.useEffect(()=>{if(!h)return;(async()=>{const g=[];t&&g.push(I(P(`/api/states/${t}`,e)).then(s=>({type:"preclimateStatus",value:s.data.state==="on"})).catch(s=>({type:"preclimateStatus",error:z(s)}))),o&&g.push(I(P(`/api/states/${o}`,e)).then(s=>({type:"chargingState",value:s.data.state==="on"})).catch(s=>({type:"chargingState",error:z(s)}))),a&&g.push(I(P(`/api/states/${a}`,e)).then(s=>({type:"stateOfCharge",value:parseFloat(s.data.state)||0})).catch(s=>({type:"stateOfCharge",error:z(s)})));const f=await Promise.all(g);let u=!1;f.forEach(s=>{s.error?u=s.error:S(c=>({...c,[s.type]:s.value}))}),d(u||!1)})()},[h,n,t,o,a]),_.useEffect(()=>{let y=null,g=[],f=!0,u=null,s=0;const c=5;let r=!1,p=null,T=null;async function x(){if(!h||!f||r)return;if(y){try{p&&(y.removeEventListener("ready",p),p=null),T&&(y.removeEventListener("disconnected",T),T=null),g.forEach(j=>{j&&j()}),g=[],y.close()}catch{}y=null}r=!0;const A=se(e),b=w||m||"";if(!b){r=!1;return}let L;try{L=oe(A,b),f&&d(!1)}catch(j){f&&(N.error("Failed to create WebSocket auth:",j),d(j instanceof Error?j.message:String(j))),r=!1;return}try{y=await ie({auth:L}),p=()=>{f&&(N.debug("WebSocket connection ready for EV entities"),s=0,d(!1))},y.addEventListener("ready",p),T=()=>{if(f&&!r){if(N.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),u&&(clearTimeout(u),u=null),s>=c){N.warn(`Max reconnection attempts (${c}) reached for EV entities, stopping reconnection`),f&&d("Verbindung verloren. Bitte Seite neu laden.");return}y=null,g=[],p=null,T=null;const v=Math.min(1e3*Math.pow(2,s),3e4);s++,u=setTimeout(()=>{f&&!r&&s<=c&&(N.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${s}/${c})`),x())},v)}},y.addEventListener("disconnected",T);const j=v=>{if(f){const M=v.variables.trigger.to_state.entity_id,k=v.variables.trigger.to_state.state;S(V=>{const $={...V};return M===t?$.preclimateStatus=k==="on":M===o?$.chargingState=k==="on":M===a&&($.stateOfCharge=parseFloat(k)||0),$})}},R=[];t&&R.push(t),o&&R.push(o),a&&R.push(a);for(const v of R){const M=await y.subscribeMessage(j,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:v}});g.push(M)}r=!1}catch(j){if(r=!1,f)if(N.error("Failed to setup WebSocket connection:",j),d(j instanceof Error?j.message:String(j)),s<c){const R=Math.min(1e3*Math.pow(2,s),3e4);s++,u=setTimeout(()=>{f&&!r&&s<=c&&x()},R)}else N.warn(`Max reconnection attempts (${c}) reached for EV entities, stopping reconnection`),f&&d("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return x(),()=>{if(f=!1,r=!1,u&&(clearTimeout(u),u=null),y)try{p&&y.removeEventListener("ready",p),T&&y.removeEventListener("disconnected",T)}catch{}if(g.forEach(A=>{if(A)try{A()}catch{}}),g=[],y){try{y.close()}catch{}y=null}}},[h,n,t,o,a,m,w]),[E,l]},Bn=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&I.post(P("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to start preclimate:",t)})},Hn=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&I.post(P("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to stop preclimate:",t)})},Yn=O.div`
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
`,Fn=(e,n)=>n?bt:e>=80?At:e>=50?St:e>=20?Tt:Lt,Un=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",zn=()=>{const e=W();if(!(e.ENABLE_EV||!1))return null;const[t,o]=Vn(),{preclimateStatus:a,chargingState:m,stateOfCharge:w}=t,[E,S]=C.useState(!1),[l,d]=C.useState(null),[h,y]=C.useState(!1),[g,f]=C.useState(!1),[u,s]=C.useState(0),c=C.useRef(null),r=C.useRef(null),p=C.useRef(a),T=C.useRef(null);C.useEffect(()=>{p.current!==a&&(E&&T.current!==null&&a===(l==="start")&&(s(l==="start"?360:0),f(!0),setTimeout(()=>{S(!1),d(null),f(!1),s(0),T.current=null,y(!1)},300),c.current&&(clearTimeout(c.current),c.current=null)),p.current=a)},[a,E,l]),C.useEffect(()=>{if(!E||g){r.current&&(cancelAnimationFrame(r.current),r.current=null);return}const M=T.current||Date.now(),k=1e4,V=l==="stop",$=()=>{const Y=Date.now()-M,U=Math.min(Y/k,1);s(V?360*(1-U):360*U),U<1&&!g&&(r.current=requestAnimationFrame($))};return r.current=requestAnimationFrame($),()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null)}},[E,g,l]),C.useEffect(()=>()=>{c.current&&clearTimeout(c.current),r.current&&cancelAnimationFrame(r.current)},[]);const x=C.useCallback(()=>{if(o!==!1||E)return;const M=!a,k=M?"start":"stop";S(!0),d(k),f(!1),y(!1),s(0),T.current=Date.now(),p.current=a,M?Bn(e):Hn(e),c.current=setTimeout(()=>{E&&(y(!0),setTimeout(()=>{S(!1),d(null),f(!1),s(0),y(!1),T.current=null},500))},15e3)},[a,o,E]),A=Fn(w||0,m),b=Un(w||0),L=Math.round(w||0),j=E?l==="start":a,R=l==="start"?"#17e146":"#f85a5a",v=l==="start"?"clockwise":"counterclockwise";return i.jsxs(Yn,{className:H({disabled:o!==!1}),children:[i.jsxs("h2",{children:["Auto",o!==!1?i.jsxs("div",{className:"battery-info",children:[i.jsx(F,{path:Le,size:"1.2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsxs("div",{className:"battery-info",children:[i.jsxs("span",{className:"charge-percentage",children:[L,"%"]}),i.jsx(F,{path:A,size:"1.2rem",color:b})]})]}),o===!1&&i.jsxs("div",{className:"preclimate-button-wrapper",children:[E&&i.jsx("div",{className:H("progress-ring",v,{complete:g}),style:{"--progress-color":R,"--progress-angle":`${u}deg`,"--progress-gradient":l==="stop"?`conic-gradient(from -90deg, ${R} 0deg, ${R} ${u}deg, transparent ${u}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${R} 0deg, ${R} ${u}deg, transparent ${u}deg, transparent 360deg)`}}),i.jsxs("button",{className:H("preclimate-button",{spinning:j&&!E,shaking:h}),onClick:x,disabled:o!==!1||E,children:[i.jsx(F,{path:wt,size:"2rem",color:j?"#ff9800":"#ffffff"}),i.jsx("span",{children:j?"Stop":"Start"})]})]})]})},Gn=C.memo(zn),Kn=()=>{const e=W(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",o=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[m,w]=_.useState("closed"),[E,S]=_.useState(!1),l=n&&t,d=t?P(`/api/states/${t}`,e):null;return _.useEffect(()=>{if(!l||!d)return;let h=!0;const y=new AbortController;return I(d,{signal:y.signal}).then(g=>{h&&(w(g.data.state),S(!1))}).catch(g=>{h&&!y.signal.aborted&&S(z(g))}),()=>{h=!1,y.abort()}},[l,d,n,t]),_.useEffect(()=>{let h=null,y=null,g=!0,f=null,u=0;const s=5;let c=!1,r=null,p=null;async function T(){if(!l||!t||!g||c)return;if(h){try{r&&(h.removeEventListener("ready",r),r=null),p&&(h.removeEventListener("disconnected",p),p=null),y&&(y(),y=null),h.close()}catch{}h=null}c=!0;const x=se(e),A=a||o||"";if(!A){c=!1;return}let b;try{b=oe(x,A),g&&S(!1)}catch(L){g&&(N.error("Failed to create WebSocket auth:",L),S(L instanceof Error?L.message:String(L))),c=!1;return}try{h=await ie({auth:b}),r=()=>{g&&(N.debug("WebSocket connection ready for garage door"),u=0,S(!1))},h.addEventListener("ready",r),p=()=>{if(g&&!c){if(N.debug("WebSocket disconnected for garage door, will attempt to reconnect"),f&&(clearTimeout(f),f=null),u>=s){N.warn(`Max reconnection attempts (${s}) reached for garage door, stopping reconnection`),g&&S("Verbindung verloren. Bitte Seite neu laden.");return}h=null,y=null,r=null,p=null;const j=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!c&&u<=s&&(N.debug(`Attempting to reconnect WebSocket for garage door (attempt ${u}/${s})`),T())},j)}},h.addEventListener("disconnected",p);const L=j=>{g&&w(j.variables.trigger.to_state.state)};y=await h.subscribeMessage(L,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),c=!1}catch(L){if(c=!1,g)if(N.error("Failed to setup WebSocket connection:",L),S(L instanceof Error?L.message:String(L)),u<s){const j=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!c&&u<=s&&T()},j)}else N.warn(`Max reconnection attempts (${s}) reached for garage door, stopping reconnection`),g&&S("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return T(),()=>{if(g=!1,c=!1,f&&(clearTimeout(f),f=null),h)try{r&&h.removeEventListener("ready",r),p&&h.removeEventListener("disconnected",p)}catch{}if(y){try{y()}catch{}y=null}if(h){try{h.close()}catch{}h=null}}},[l]),[m,E]},qn=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);I.post(P("/api/services/cover/toggle",n),{entity_id:t}).catch(a=>{N.error("Failed to toggle garage door:",a)}).finally(()=>{clearTimeout(o),e(!1)})},Xn=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);I.post(P("/api/services/cover/open_cover",n),{entity_id:t}).catch(a=>{N.error("Failed to open garage door:",a)}).finally(()=>{clearTimeout(o),e(!1)})},Jn=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);I.post(P("/api/services/cover/close_cover",n),{entity_id:t}).catch(a=>{N.error("Failed to close garage door:",a)}).finally(()=>{clearTimeout(o),e(!1)})},Qn=O.div`
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
`,Ge=O.div`
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
`,Te=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:Ct},open:{label:"Offen",icon:Rt},closed:{label:"Geschlossen",icon:Nt},opening:{label:"Öffnet",icon:_t},closing:{label:"Schließt",icon:jt}};return n[e]||N.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:vt}},Zn=({garageDoor:e,animate:n=!1})=>i.jsxs(Ge,{className:H({animate:n}),children:[i.jsx(F,{path:Te(e).icon,size:"2rem",color:"#ffffff"}),i.jsx("span",{children:Te(e).label})]}),eo=e=>ct.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return Te(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),to=()=>{const e=W();if(!(e.ENABLE_GARAGE||!1))return null;const[t,o]=Kn(),[a,m]=_.useState(void 0),[w,E]=_.useState(!1),[S,l]=_.useState(!1);_.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!a){const f=new Promise(u=>{m({resolve:u})});eo(f)}}else a&&(a.resolve(t),m(void 0))},[t]);const d=ne("g");_.useEffect(()=>{d&&o===!1&&qn(E,e)},[d,o,e]);const h=C.useCallback(g=>{if(o===!1)switch(l(!1),g){case"open":Xn(E,e);break;case"close":Jn(E,e);break}},[E,o,e]),y=C.useCallback(()=>{o===!1&&l(!0)},[o]);return i.jsxs(Qn,{className:H({disabled:o!==!1}),children:[i.jsx("h2",{children:"Garage"}),i.jsx("div",{className:"status",onClick:y,children:o!==!1?i.jsxs(Ge,{children:[i.jsx(F,{path:Le,size:"2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsx(Zn,{garageDoor:t,animate:w})}),i.jsx(re,{visible:S&&o===!1,onClick:()=>l(!1),children:i.jsxs("div",{className:"controls",children:[i.jsx("h2",{children:"Garagentor"}),i.jsx("div",{onClick:()=>h("open"),children:"Öffnen"}),i.jsx("div",{onClick:()=>h("close"),children:"Schließen"})]})})]})},no=C.memo(to),oo=(e,n)=>e?P(`/api/states/${e}`,n):null,K={done:{label:"Fertig",animate:!1,icon:Ot},off:{label:"Aus",animate:!1,icon:kt},standby:{label:"Standby",animate:!1,icon:Ne},running:{label:"Läuft …",animate:!0,icon:Ne}},io={off:0,standby:2,running:16,done:256},ro=()=>{const e=W();e.ENABLE_LAUNDRY;const n=e.LAUNDRY_MACHINES||[];e.HASS_ACCESS_TOKEN,e.SUPERVISOR_TOKEN;const o=(Array.isArray(n)?n:[]).map((h,y)=>{const[g,f]=so(h.entity_id,e);return{state:g,error:f,name:h.name}}),[a,m]=_.useState(K.off),[w,E]=_.useState(!1),S=o.map(h=>h.state),l=o.map(h=>h.error);_.useEffect(()=>{const h=l.some(y=>y!==!1);E(h&&l.find(y=>y!==!1)||!1)},[l]),_.useEffect(()=>{const h=S.reduce((y,g)=>y+(io[g]||0),0);h===0?m(K.off):h<16?m(K.standby):h<256?m(K.running):h%256===0?m(K.done):h%256%16===0?m(K.running):h%256%2===0?m(K.done):m(K.running)},[S]);const d=o.map(h=>({label:h.name,state:h.state}));return[a,d,w]},so=(e,n)=>{const[t,o]=_.useState("off"),[a,m]=_.useState(!1),E=(n.ENABLE_LAUNDRY||!1)&&e,S=oo(e,n);return _.useEffect(()=>{if(!E||!S)return;let l=!0;const d=new AbortController;return I(S,{signal:d.signal}).then(h=>{l&&(o(h.data.state),m(!1))}).catch(h=>{l&&!d.signal.aborted&&m(z(h))}),()=>{l=!1,d.abort()}},[e,E,S]),_.useEffect(()=>{let l=null,d=null,h=!0,y=null,g=0;const f=5;let u=!1,s=null,c=null;async function r(){if(!E||!e||!h||u)return;if(l){try{s&&(l.removeEventListener("ready",s),s=null),c&&(l.removeEventListener("disconnected",c),c=null),d&&(d(),d=null),l.close()}catch{}l=null}u=!0;const p=se(n),T=n.HASS_ACCESS_TOKEN||"",A=n.SUPERVISOR_TOKEN||""||T||"";if(!A){u=!1;return}try{const b=oe(p,A);l=await ie({auth:b}),s=()=>{h&&(N.debug(`WebSocket connection ready for ${e}`),g=0,m(!1))},l.addEventListener("ready",s),c=()=>{if(h&&!u){if(N.debug(`WebSocket disconnected for ${e}, will attempt to reconnect`),y&&(clearTimeout(y),y=null),g>=f){N.warn(`Max reconnection attempts (${f}) reached for ${e}, stopping reconnection`),h&&m("Verbindung verloren. Bitte Seite neu laden.");return}l=null,d=null,s=null,c=null;const j=Math.min(1e3*Math.pow(2,g),3e4);g++,y=setTimeout(()=>{h&&!u&&g<=f&&(N.debug(`Attempting to reconnect WebSocket for ${e} (attempt ${g}/${f})`),r())},j)}},l.addEventListener("disconnected",c);const L=j=>{h&&o(j.variables.trigger.to_state.state)};d=await l.subscribeMessage(L,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),u=!1}catch(b){if(u=!1,h)if(N.error(`Failed to setup WebSocket connection for ${e}:`,b),m(b instanceof Error?b.message:String(b)),g<f){const L=Math.min(1e3*Math.pow(2,g),3e4);g++,y=setTimeout(()=>{h&&!u&&g<=f&&r()},L)}else N.warn(`Max reconnection attempts (${f}) reached for ${e}, stopping reconnection`),h&&m("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return r(),()=>{if(h=!1,u=!1,y&&(clearTimeout(y),y=null),l)try{s&&l.removeEventListener("ready",s),c&&l.removeEventListener("disconnected",c)}catch{}if(d){try{d()}catch{}d=null}if(l){try{l.close()}catch{}l=null}}},[e,E]),[t,a]},ao=O.div`
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
`,co=()=>{if(!(W().ENABLE_LAUNDRY||!1))return null;const[t,o,a]=ro(),[m,w]=_.useState(!1),E=C.useCallback(()=>{a===!1&&w(!0)},[a]),S=C.useCallback(()=>w(!1),[]);return i.jsxs(ao,{className:H({disabled:a!==!1}),children:[i.jsx("h2",{children:"Wäsche"}),i.jsx("div",{className:"status",onClick:E,children:a!==!1?i.jsxs(i.Fragment,{children:[i.jsx(F,{path:Le,size:"2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:H({animate:t.animate}),children:i.jsx(F,{path:t.icon,size:"2rem",color:"#ffffff"})}),i.jsx("span",{children:t.label})]})}),i.jsx(re,{visible:m&&a===!1,onClick:S,children:i.jsxs("div",{className:"states",children:[i.jsx("h2",{children:"Wäsche"}),o.map((l,d)=>i.jsxs("div",{children:[i.jsx("div",{className:"subtitle",children:l.label}),i.jsx("div",{className:H({animate:K[l.state].animate}),children:i.jsx(F,{path:K[l.state].icon,size:2})}),i.jsx("div",{children:K[l.state].label})]},d))]})})]})},lo=C.memo(co),fo=O.div`
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
`,uo=()=>i.jsxs(fo,{children:[i.jsxs("div",{className:"top-content",children:[i.jsx(_n,{}),i.jsx(Wn,{}),i.jsx(Gn,{})]}),i.jsxs("div",{className:"two-cols",children:[i.jsx(no,{}),i.jsx(lo,{})]})]}),ho=C.memo(uo),Pe=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],po=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],me={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},mo={landscape:"L",portrait:"P",wide:"W"},go=O.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,xo=O.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Eo=O.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Q=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Z=O.label`
  font-size: 0.9rem;
  color: #cccccc;
`,We=O.select`
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
`,Ve=O.input`
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
`,yo=O.button`
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
`,Be=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,wo=O.button`
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
`,bo=O.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Ao=O.div`
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
`,So=O.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,To=O.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Lo=O.div`
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
`,jo=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,_o=O.h3`
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
`;const Ae=O.button`
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
`,He=()=>{const[e,n]=C.useState(1920),[t,o]=C.useState(1080),[a,m]=C.useState("Full HD"),[w,E]=C.useState(""),[S,l]=C.useState(""),[d,h]=C.useState([{orientation:"landscape"}]),[y,g]=C.useState(null),f=C.useMemo(()=>ze(d,e,t),[d,e,t]),u=x=>{const A=Pe.find(b=>b.name===x);A&&A.width&&A.height?(n(A.width),o(A.height),m(x),E(""),l("")):x==="Custom"&&m("Custom")},s=()=>{const x=parseInt(w),A=parseInt(S);x>0&&A>0&&(n(x),o(A))},c=x=>{h(x.videos),g(x.name)},r=x=>{const A=[];for(let b=0;b<x;b++)A.push(d[b]||{orientation:"landscape"});h(A),g(null)},p=(x,A)=>{const b=[...d];b[x]={orientation:A},h(b),g(null)},T=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return i.jsxs(go,{children:[i.jsx(xo,{children:"Video Tiling Algorithm Demo"}),i.jsxs(Eo,{children:[i.jsxs(Q,{children:[i.jsx(Z,{children:"Screen Size Preset"}),i.jsx(We,{value:a,onChange:x=>u(x.target.value),children:Pe.map(x=>i.jsx("option",{value:x.name,children:x.name},x.name))})]}),a==="Custom"&&i.jsxs(i.Fragment,{children:[i.jsxs(Q,{children:[i.jsx(Z,{children:"Custom Width"}),i.jsx(Ve,{type:"number",value:w,onChange:x=>E(x.target.value),placeholder:"Width",min:"100"})]}),i.jsxs(Q,{children:[i.jsx(Z,{children:"Custom Height"}),i.jsx(Ve,{type:"number",value:S,onChange:x=>l(x.target.value),placeholder:"Height",min:"100"})]}),i.jsxs(Q,{children:[i.jsx(Z,{children:" "}),i.jsx(yo,{onClick:s,children:"Apply Custom Size"})]})]}),i.jsxs(Q,{children:[i.jsx(Z,{children:"Number of Videos"}),i.jsxs(We,{value:d.length,onChange:x=>r(parseInt(x.target.value)),children:[i.jsx("option",{value:"1",children:"1 Video"}),i.jsx("option",{value:"2",children:"2 Videos"}),i.jsx("option",{value:"3",children:"3 Videos"}),i.jsx("option",{value:"4",children:"4 Videos"})]})]}),d.map((x,A)=>i.jsxs(Q,{children:[i.jsxs(Z,{children:["Video ",A+1," Orientation"]}),i.jsxs(Be,{children:[i.jsx(Ae,{active:x.orientation==="landscape",orientation:"landscape",onClick:()=>p(A,"landscape"),children:"Landscape"}),i.jsx(Ae,{active:x.orientation==="portrait",orientation:"portrait",onClick:()=>p(A,"portrait"),children:"Portrait"}),i.jsx(Ae,{active:x.orientation==="wide",orientation:"wide",onClick:()=>p(A,"wide"),children:"Wide"})]})]},A))]}),i.jsxs(jo,{children:[i.jsx(_o,{children:"Test Scenarios"}),i.jsx(Be,{children:po.map(x=>i.jsx(wo,{active:y===x.name,onClick:()=>c(x),children:x.name},x.name))})]}),i.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:i.jsx(bo,{style:{width:`${e*T}px`,height:`${t*T}px`},children:f.videos.map((x,A)=>i.jsxs(Ao,{orientation:x.orientation,style:{left:`${x.x*T}px`,top:`${x.y*T}px`,width:`${x.width*T}px`,height:`${x.height*T}px`},children:[i.jsxs(So,{children:[mo[x.orientation]," ",A+1]}),i.jsxs(To,{children:[Math.round(x.width)," × ",Math.round(x.height)]})]},A))})}),i.jsxs(Lo,{children:[i.jsxs(de,{children:[i.jsx(fe,{children:"Canvas Size"}),i.jsxs(ue,{children:[e," × ",t]})]}),i.jsxs(de,{children:[i.jsx(fe,{children:"Total Area Used"}),i.jsxs(ue,{children:[Math.round(f.totalArea).toLocaleString()," px²"]})]}),i.jsxs(de,{children:[i.jsx(fe,{children:"Efficiency"}),i.jsxs(ue,{children:[f.efficiency.toFixed(2),"%"]})]}),i.jsxs(de,{children:[i.jsx(fe,{children:"Display Scale"}),i.jsxs(ue,{children:[(T*100).toFixed(1),"%"]})]})]})]})},No=()=>{function e(t,o){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(o))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[m,w]=o.split(":").map(Number),E=new Date;let S=new Date(E.getFullYear(),E.getMonth(),E.getDate());S.setHours(m,w,0,0),S<=E&&S.setDate(S.getDate()+1);const l=S.getTime()-E.getTime();return N.log("Reloading page at",o,"in",Math.floor(l/1e3/60),"minutes"),setTimeout(t,l)}const n=()=>{N.log("Timeout reached! "),window.location.reload(!0)};_.useLayoutEffect(()=>{const t=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{t.forEach(o=>{o&&clearTimeout(o)})}},[])},Ro=O.div`
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
`;class xe extends _.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",a=n?.stack||"",m=t?.componentStack||"";N.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:a,componentStack:m})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?i.jsxs(Ro,{children:[i.jsx("h2",{children:"Something went wrong"}),i.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,i.jsxs("div",{children:[i.jsx("button",{onClick:this.handleReset,children:"Try Again"}),i.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Co=lt`
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
`,vo=O.div`
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
`;function ko(){return No(),i.jsxs(vo,{children:[i.jsx(Co,{}),i.jsxs("div",{className:"main",children:[i.jsx(xe,{children:i.jsx(An,{})}),i.jsx(xe,{children:i.jsx(ho,{})})]}),i.jsx(ft,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Oo(){return i.jsx(xe,{children:i.jsxs(dt,{children:[i.jsx(ye,{path:"/demo",element:i.jsx(He,{})}),i.jsx(ye,{path:"/tiling-demo",element:i.jsx(He,{})}),i.jsx(ye,{path:"*",element:i.jsx(ko,{})})]})})}const Do=ut.createRoot(document.getElementById("root"));Do.render(i.jsx(_.StrictMode,{children:i.jsx(xe,{children:i.jsx(Wt,{children:i.jsx(ht,{children:i.jsx(Oo,{})})})})}));
