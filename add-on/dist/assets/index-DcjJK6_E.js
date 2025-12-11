import{d as D,R as N,j as o,I as Y,r as C,l as Xe,P as nt,W as ot,b as it,e as rt,f as st,h as at,i as ct,k as lt,m as dt,n as ft,o as ut,T as ht,p as pt,s as mt,y as gt,q as xt,t as Et,u as Te,L as wt,v as yt,B as bt}from"./react-vendor-BitJRyew.js";import{D as H}from"./date-vendor-BDx6lZXm.js";import{f as F}from"./vendor-CeaMKy47.js";import{m as At,a as St,b as Tt,c as Lt,d as _t,e as jt,f as Ce,g as Nt,h as Rt,i as kt,j as Ct,k as vt,l as Ot,n as Dt,o as It,p as Mt,q as Wt,r as $t,s as Pt,t as De,u as Vt,v as Bt}from"./ui-vendor-C7t39j5V.js";import{a as M,q as Ut}from"./utils-vendor-Cs1iS-Fd.js";import{c as ce,a as le}from"./ha-vendor-CoU0AojH.js";import{t as Ht}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const p of a)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&i(y)}).observe(document,{childList:!0,subtree:!0});function t(a){const p={};return a.integrity&&(p.integrity=a.integrity),a.referrerPolicy&&(p.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?p.credentials="include":a.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function i(a){if(a.ep)return;a.ep=!0;const p=t(a);fetch(a.href,p)}})();const Ft=D.div`
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
`,de=({visible:e,children:n,onClick:t,onClose:i,fullsize:a=!1})=>{const p=i||t,y=E=>{E.stopPropagation(),E.preventDefault(),p()};return N.useEffect(()=>{if(e){const E=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${E}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,E)}}},[e]),e?o.jsxs(Ft,{onClick:t,children:[o.jsx("div",{className:"close",onClick:y,children:o.jsx(Y,{path:At,size:2})}),o.jsx("div",{className:F("content",{fullsize:a}),onClick:E=>E.stopPropagation(),children:n})]}):null};let Je=!0;const Yt=e=>{Je=!!e};let xe=!1,K=[],re=0;const se=100,Ie=50,Ne=()=>{if(K.length===0||xe)return;const e=K.shift(),n=Date.now();n-re>=se?ie(e.level,e.message,e.metadata):(K.unshift(e),setTimeout(Ne,se-(n-re)))},ie=(e,n,t=null)=>{if(!Je)return;if(xe){K.length<Ie&&K.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const i=Date.now();if(i-re<se){K.length<Ie&&(K.push({level:e,message:n,metadata:t,timestamp:i}),K.length===1&&setTimeout(Ne,se-(i-re)));return}setTimeout(async()=>{xe=!0,re=Date.now();try{const p=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,y={level:e,message:n,...t&&{metadata:t}};await M.create({timeout:2e3}).post(p,y)}catch{K.length>10&&(K=[])}finally{xe=!1,K.length>0&&setTimeout(Ne,se)}},0)},ue=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},he=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,i)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${i}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},k={log:(...e)=>{const n=ue(e),t=he(e);n&&ie("INFO",n,t)},error:(...e)=>{console.error(...e);const n=ue(e),t=he(e);n&&ie("ERROR",n,t)},warn:(...e)=>{const n=ue(e),t=he(e);n&&ie("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=ue(e),t=he(e);n&&ie("INFO",n,t)}},Gt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},zt=()=>{const e=(n,t=void 0)=>{const i=Gt[`VITE_${n}`];return i!==void 0?i:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),SUPERVISOR_TOKEN:e("SUPERVISOR_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_API_KEY:e("WEATHER_API_KEY",""),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),GEOFOX_SECRET:e("GEOFOX_SECRET",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},Qe=C.createContext(null),Kt=({children:e})=>{const[n,t]=C.useState(zt),[i,a]=C.useState(!0);return C.useEffect(()=>{(async()=>{try{const E=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`,b=await M.get(E,{timeout:5e3});if(b.data&&typeof b.data=="object"){t(b.data);const l=Object.keys(b.data).filter(d=>d.startsWith("ENABLE_")&&b.data[d]).map(d=>d.replace("ENABLE_",""));k.info(`Configuration loaded from API endpoint. Enabled features: ${l.length>0?l.join(", "):"none"}`,{enabledFeatures:l,totalConfigKeys:Object.keys(b.data).length})}}catch(y){k.debug("Failed to load config from API, using defaults:",y.message)}finally{a(!1)}})()},[]),C.useEffect(()=>{const p=n.HASS_ACCESS_TOKEN||"";p&&typeof p=="string"&&p.trim()!==""&&p!=="undefined"&&p!=="null"?M.defaults.headers.common.Authorization=`Bearer ${p}`:delete M.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),C.useEffect(()=>{const p=n.ENABLE_LOGGING===!0;Yt(p)},[n.ENABLE_LOGGING]),o.jsx(Qe.Provider,{value:{config:n,loading:i},children:e})},B=()=>{const e=C.useContext(Qe);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config};let ne=0,Ee=0,Q=0;const te=[],Ze=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},qt=(e,n="")=>{const t=Ze(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;Q++,ne++,te.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),te.length>10&&te.shift();const a=[];return n&&a.push(`[${n}]`),a.push("🔴 Axios API Error:"),a.push(`Message: ${t.message}`),t.url&&a.push(`URL: ${t.url}`),t.status&&a.push(`HTTP Status: ${t.status}`),t.code&&a.push(`Error Code: ${t.code}`),t.isNetworkError&&(a.push("Type: Network Error (no response received)"),t.readyState!==void 0&&a.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&a.push("Type: Timeout Error"),t.config&&(a.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),a.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&a.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&a.push("Response Data:",t.responseData),a.push(`Request Stats: ${Ee} success, ${Q} errors (${ne} total)`),Q>3&&te.length>0&&a.push("Recent errors pattern:",te.slice(-5)),k.error(...a),t},Xt=e=>{Ee++,ne++,(ne%10===0||Q>0)&&k.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:ne,stats:`${Ee} success, ${Q} errors`}),Q>0&&ne%10===0&&Ee>Q&&(Q=0,te.length=0)},G=e=>{const n=Ze(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};M.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,k.debug("Axios Defaults State:",{baseURL:M.defaults.baseURL,timeout:M.defaults.timeout,hasAuthHeader:!!M.defaults.headers?.common?.Authorization,authHeaderLength:M.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(M.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||k.error("Axios Request Setup Error:",e),Promise.reject(e)));M.interceptors.response.use(e=>(e.config&&Xt(e.config),e),e=>{if(!(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"))){const t=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(qt(e,t),e.config?.metadata){const i=Date.now()-e.config.metadata.startTime;k.error("Request Duration:",`${i}ms`,"Request ID:",e.config.metadata.requestId)}typeof window<"u"&&window.location&&k.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href})}return Promise.reject(e)});const V=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const i=n.INGRESS_URL||"";if(i&&typeof i=="string"&&i.trim()!==""){const p=t.startsWith("/")?t.slice(1):t;return`${window.location.origin}${i}${p}`}const a=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${a}${t}`}return t}},oe=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},fe=(e={})=>{const n=oe(e);if(!n)return"";const t=n.startsWith("https://")?"wss://":"ws://",i=n.replace(/^https?:\/\//,"");return`${t}${i}/api/websocket`},Jt=()=>{const e=B(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[i,a]=N.useState(null),[p,y]=N.useState(!1),E=n&&t,b=t?V(`/api/states/${t}`,e):null;return N.useEffect(()=>{if(!E||!b)return;let l=!0;const d=new AbortController;return M(b,{signal:d.signal}).then(h=>{l&&(h.data.attributes.store!==void 0?a(h.data.attributes.store):a([]),y(!1))}).catch(h=>{l&&!d.signal.aborted&&(y(G(h)),a([]))}),()=>{l=!1,d.abort()}},[E,b,n,t]),[i,p]},Qt=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const i=V(`/api/states/${t}`,n);M.post(i,{state:new Date,attributes:{store:e}}).catch(a=>{k.error("Failed to store everyday calendar data:",a)})},Me=D.div` 

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
`,Zt=({on:e,month:n,day:t})=>{const[i,a]=e,p=i.indexOf(`${n}-${t}`),y=p>-1,E=()=>{a(y?i.toSpliced(p,1):[...i,`${n}-${t}`])};return o.jsx("div",{className:F("dot",{on:y}),onClick:()=>E()})},en=()=>{const e=B();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),i=[];for(let l=1;l<13;l++){const d=new Date(t,l,0).getDate();for(let h=1;h<=d;h++)i.push({month:l,day:h})}const a=Array.from({length:31},(l,d)=>d+1),p=Array.from({length:12},(l,d)=>d+1),y=N.useState(void 0),[E,b]=Jt();return N.useEffect(()=>{E!==null&&y[1](E)},[E]),N.useEffect(()=>{y[0]!==void 0&&Qt(y[0],e)},[y[0],e]),y[0]!==void 0?o.jsxs(Me,{children:[o.jsx("h2",{children:"Jeden Tag ein bißchen"}),b!==!1&&o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:b instanceof Error?b.message:String(b)})]}),o.jsxs("div",{className:"calendar",children:[a.map((l,d)=>o.jsx("div",{style:{gridArea:`${l+1} / 1 / ${l+1} / 1`},children:l},d)),p.map((l,d)=>o.jsx("div",{style:{gridArea:`1 / ${l+1} / 1 / ${l+1}`},children:l},d)),i.map((l,d)=>o.jsx("div",{style:{gridArea:`${l.day+1} / ${l.month+1} / ${l.day+1} / ${l.month+1}`},children:o.jsx(Zt,{on:y,month:l.month,day:l.day})},d))]})]}):o.jsx(Me,{className:"loading",children:b!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:b instanceof Error?b.message:String(b)})]}):o.jsx(Xe,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},tn=D.div`
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
  }`,nn=()=>{const[e,n]=N.useState(H.now()),[t,i]=N.useState(!1),a=C.useCallback(()=>i(!0),[]),p=C.useCallback(()=>i(!1),[]);return N.useEffect(()=>{const y=setInterval(()=>n(H.now()),1e3);return()=>clearInterval(y)},[]),o.jsxs(o.Fragment,{children:[o.jsxs(tn,{onClick:a,children:[e.toFormat("HH"),o.jsx("span",{children:":"}),e.toFormat("mm")]}),o.jsx(de,{visible:t,onClick:p,fullsize:!0,children:o.jsx(en,{})})]})},on=C.memo(nn),rn=()=>{const e=B(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const i=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[p,y]=N.useState("off"),[E,b]=N.useState(!1),l=n&&t,d=t?V(`/api/states/${t}`,e):null;return N.useEffect(()=>{if(!l||!d)return;let h=!0;const w=new AbortController;return M(d,{signal:w.signal}).then(g=>{h&&(y(g.data.state),b(!1))}).catch(g=>{h&&!w.signal.aborted&&b(G(g))}),()=>{h=!1,w.abort()}},[l,d,n,t]),N.useEffect(()=>{let h=null,w=null,g=!0,f=null,u=0;const s=5;let c=!1,r=null,m=null;async function S(){if(!l||!t||!g||c)return;if(h){try{r&&(h.removeEventListener("ready",r),r=null),m&&(h.removeEventListener("disconnected",m),m=null),w&&(w(),w=null),h.close()}catch{}h=null}c=!0;const x=oe(e),A=a||i||"";if(!A){c=!1;return}let T;try{T=ce(x,A),g&&b(!1)}catch(_){g&&(k.error("Failed to create WebSocket auth:",_),b(_ instanceof Error?_.message:String(_))),c=!1;return}const R=fe(e);if(!R){k.error("Failed to build WebSocket URL - cannot connect"),g&&b("WebSocket URL konnte nicht erstellt werden."),c=!1;return}const L=()=>new Promise((_,j)=>{const O=new WebSocket(R);O.onopen=()=>_(O),O.onerror=v=>j(v)});try{h=await le({auth:T,createSocket:L}),r=()=>{g&&(k.debug("WebSocket connection ready for doorbell"),u=0,b(!1))},h.addEventListener("ready",r),m=()=>{if(g&&!c){if(k.debug("WebSocket disconnected for doorbell, will attempt to reconnect"),f&&(clearTimeout(f),f=null),u>=s){k.warn(`Max reconnection attempts (${s}) reached for doorbell, stopping reconnection`),g&&b("Verbindung verloren. Bitte Seite neu laden.");return}h=null,w=null,r=null,m=null;const j=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!c&&u<=s&&(k.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${u}/${s})`),S())},j)}},h.addEventListener("disconnected",m);const _=j=>{if(g){const O=j.variables.trigger.to_state.state;y(O)}};w=await h.subscribeMessage(_,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),c=!1}catch(_){if(c=!1,g)if(k.error("Failed to setup WebSocket connection:",_),k.error("WebSocket error details:",{message:_ instanceof Error?_.message:String(_),code:_.code,name:_.name,wsUrl:T?.wsUrl,host:x,tokenLength:A?A.length:0}),_.code===2&&k.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),b(_ instanceof Error?_.message:String(_)),u<s){const j=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!c&&u<=s&&S()},j)}else k.warn(`Max reconnection attempts (${s}) reached for doorbell, stopping reconnection`),g&&b("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return S(),()=>{if(g=!1,c=!1,f&&(clearTimeout(f),f=null),h)try{r&&h.removeEventListener("ready",r),m&&h.removeEventListener("disconnected",m)}catch{}if(w){try{w()}catch{}w=null}if(h){try{h.close()}catch{}h=null}}},[l]),[p,E]},sn=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&M.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{k.error("Failed to unlatch front door:",t)})},I={portrait:360/480,landscape:1920/1072,wide:770/216};function an(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function et(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const i=e.length,a=an(e);return i===1?cn(e[0],n,t):i===2?ln(a,e,n,t):i===3?dn(a,e,n,t):i===4?fn(a,e,n,t):{videos:[],totalArea:0,efficiency:0}}function cn(e,n,t){const i=I[e.orientation];let a,p;const y=n/t;return i>y?(a=n,p=n/i):(p=t,a=t*i),{videos:[{x:(n-a)/2,y:(t-p)/2,width:a,height:p,orientation:e.orientation}],totalArea:a*p,efficiency:a*p/(n*t)*100}}function ln(e,n,t,i){if(e.portrait>0)return ve(e,n,t,i);const a=[];e.landscape>0&&a.push("landscape"),e.wide>0&&a.push("wide");const p=a[0]||n[0].orientation,y=a[1]||n[1].orientation,E=I[p],b=I[y];if(e.landscape===1&&e.wide===1){const f=I.landscape,u=I.wide,s=t,c=s/f,r=s/u,m=c+r;let S,x,A;if(m<=i)S=c,x=r,A=s;else{const O=i/m;S=c*O,x=r*O,A=x*u}const T=(t-A)/2,L=X(n,[{x:T,y:0,width:A,height:x,orientation:"wide"},{x:T,y:x,width:A,height:S,orientation:"landscape"}]),_=A*S+A*x,j=_/(t*i)*100;return{videos:L,totalArea:_,efficiency:j}}if(e.wide===2){const f=I.wide,u=t,s=u/f,c=s*2;let r;c<=i?r=s:r=i/2;const S=X(n,[{x:0,y:0,width:u,height:r,orientation:"wide"},{x:0,y:r,width:u,height:r,orientation:"wide"}]),x=u*r*2,A=x/(t*i)*100;return{videos:S,totalArea:x,efficiency:A}}const l=[()=>{const f=t,u=f/2,s=f/2,c=u/E,r=s/b;return Math.max(c,r)<=i?{positions:[{x:0,y:(i-c)/2,width:u,height:c,orientation:p},{x:u,y:(i-r)/2,width:s,height:r,orientation:y}],totalArea:u*c+s*r}:null},()=>{const f=i,u=f/2,s=f/2,c=u*E,r=s*b;return Math.max(c,r)<=t?{positions:[{x:(t-c)/2,y:0,width:c,height:u,orientation:p},{x:(t-r)/2,y:u,width:r,height:s,orientation:y}],totalArea:c*u+r*s}:null}];let d=null,h=0;for(const f of l){const u=f();u&&u.totalArea>h&&(h=u.totalArea,d=u)}if(!d){const f=t/2,u=t/2,s=Math.min(f/E,i),c=Math.min(u/b,i);d={positions:[{x:0,y:(i-s)/2,width:f,height:s,orientation:p},{x:f,y:(i-c)/2,width:u,height:c,orientation:y}],totalArea:f*s+u*c}}const w=X(n,d.positions),g=d.totalArea/(t*i)*100;return{videos:w,totalArea:d.totalArea,efficiency:g}}function ve(e,n,t,i){const a=e.portrait,p=n.length-a;if((a===3||a===4)&&p===0){const g=I.portrait,f=t/a,u=f/g,s=u<i?(i-u)/2:0,c=Math.min(u,i),r=[];let m=0;for(let A=0;A<a;A++){const T=Math.min(f,c*g);r.push({x:A*f+(f-T)/2,y:s,width:T,height:c,orientation:"portrait"}),m+=T*c}const S=X(n,r),x=m/(t*i)*100;return{videos:S,totalArea:m,efficiency:x}}n.filter(g=>g.orientation==="portrait");const y=n.filter(g=>g.orientation!=="portrait"),E=a>0?Math.min(t*.4,t*.5):0,b=t-E,l=[];let d=0;if(a===2&&p===0){const g=I.portrait,f=t/2,u=f/g,s=i;let c,r;u<=s?(r=u,c=f):(r=s,c=s*g);const m=(i-r)/2;l.push({x:(f-c)/2,y:m,width:c,height:r,orientation:"portrait"}),l.push({x:f+(f-c)/2,y:m,width:c,height:r,orientation:"portrait"}),d=c*r*2}else if(a===1&&p===1){const g=I.portrait,f=y[0],u=I[f.orientation],s=g+u,c=t*(g/s),r=t*(u/s),m=c/g,S=r/u,x=Math.min(i,Math.min(m,S)),A=(i-x)/2;l.push({x:0,y:A,width:c,height:x,orientation:"portrait"}),l.push({x:c,y:A,width:r,height:x,orientation:f.orientation}),d=c*x+r*x}else if(a===1&&p===2&&e.landscape===1&&e.wide===1){const g=I.portrait,f=I.wide,u=I.landscape,s=i,c=i*g,r=i/(1/f+1/u),m=r/f,S=r/u,x=c+r;if(Math.abs(x-t)<.1)l.push({x:0,y:0,width:c,height:s,orientation:"portrait"}),d+=c*s,y.find(L=>L.orientation==="wide")&&(l.push({x:0+c,y:0,width:r,height:m,orientation:"wide"}),d+=r*m),y.find(L=>L.orientation==="landscape")&&(l.push({x:0+c,y:m,width:r,height:S,orientation:"landscape"}),d+=r*S);else{const A=t/x,T=c*A,R=T/g,L=r*A,_=i/R;let j=T*_,O=i,v=L*_,W=v/f,$=v/u,U=j+v;if(U>t){const J=t/U;j=j*J,O=j/g,v=v*J,W=v/f,$=v/u,U=j+v,U>t&&(v=t-j,W=v/f,$=v/u)}const P=j+v;if(P>t){const J=t/P;j=j*J,O=j/g,v=v*J,W=v/f,$=v/u}const z=0;l.push({x:z,y:0,width:j,height:O,orientation:"portrait"}),d+=j*O,y.find(J=>J.orientation==="wide")&&(l.push({x:z+j,y:0,width:v,height:W,orientation:"wide"}),d+=v*W),y.find(J=>J.orientation==="landscape")&&(l.push({x:z+j,y:W,width:v,height:$,orientation:"landscape"}),d+=v*$)}}else if(a===1&&p===3){const g=I.portrait,f=i,u=f*g,s=u,c=t-s;l.push({x:0,y:0,width:u,height:f,orientation:"portrait"}),d+=u*f;const r=i/3;for(let m=0;m<y.length;m++){const S=y[m],x=I[S.orientation],A=r,T=c;let R,L;T/x<=A?(R=T,L=R/x):(L=A,R=L*x);const _=m*r+(r-L)/2;l.push({x:s+(c-R)/2,y:_,width:R,height:L,orientation:S.orientation}),d+=R*L}}else if(a===2&&p===1){const g=I.portrait,f=y[0],u=I[f.orientation],s=i/2,c=s*g,r=t-c,m=i*u;let S,x;m<=r?(x=i,S=x*u):(S=r,x=S/u);const A=c,T=s,R=(i-x)/2,L=(i/2-T)/2,_=i/2+(i/2-T)/2;l.push({x:0,y:R,width:S,height:x,orientation:f.orientation}),d+=S*x,l.push({x:r,y:L,width:A,height:T,orientation:"portrait"}),d+=A*T,l.push({x:r,y:_,width:A,height:T,orientation:"portrait"}),d+=A*T}else if(a===1&&p===2){const g=I.portrait,f=i,u=f*g,s=u,c=t-s;l.push({x:0,y:0,width:u,height:f,orientation:"portrait"}),d+=u*f;const r=i/2;for(let m=0;m<y.length;m++){const S=y[m],x=I[S.orientation],A=r,T=c;let R,L;T/x<=A?(R=T,L=R/x):(L=A,R=L*x);const _=m*r+(r-L)/2;l.push({x:s+(c-R)/2,y:_,width:R,height:L,orientation:S.orientation}),d+=R*L}}else{const g=a;if(g>0){const f=i/g,u=I.portrait;for(let s=0;s<g;s++){const c=Math.min(f,E/u),r=c*u,m=s*f+(f-c)/2;l.push({x:(E-r)/2,y:m,width:r,height:c,orientation:"portrait"}),d+=r*c}}if(y.length>0){const f=i/y.length;for(let u=0;u<y.length;u++){const s=y[u],c=I[s.orientation],r=f,m=b;let S,x;m/c<=r?(S=m,x=S/c):(x=r,S=x*c);const A=u*f+(f-x)/2;l.push({x:E+(b-S)/2,y:A,width:S,height:x,orientation:s.orientation}),d+=S*x}}}const h=X(n,l),w=d/(t*i)*100;return{videos:h,totalArea:d,efficiency:w}}function X(e,n){const t=new Array(n.length),i=new Set,a=new Set;for(let E=0;E<n.length;E++){const b=n[E];for(let l=0;l<e.length;l++)if(!i.has(l)&&e[l].orientation===b.orientation){t[E]={...b,orientation:e[l].orientation},i.add(l),a.add(E);break}}const p=[];for(let E=0;E<n.length;E++)a.has(E)||p.push(E);let y=0;for(let E=0;E<e.length;E++)if(!i.has(E)&&y<p.length){const b=p[y];t[b]={...n[b],orientation:e[E].orientation},y++}return t}function dn(e,n,t,i){if(e.portrait>0)return ve(e,n,t,i);if(e.landscape===2&&e.wide===1){const s=I.landscape,c=I.wide,r=t,m=r/c,S=i-m,x=t/2,A=x/s;let T,R,L,_;if(m<=i&&A<=S)T=r,R=m,L=x,_=A;else{const P=i/(m+A),z=Math.min(1,P);R=m*z,T=R*c,_=A*z,L=_*s}const j=(t-T)/2,O=R+(S-_)/2,W=X(n,[{x:j,y:0,width:T,height:R,orientation:"wide"},{x:0,y:O,width:L,height:_,orientation:"landscape"},{x:L,y:O,width:L,height:_,orientation:"landscape"}]),$=T*R+L*_*2,U=$/(t*i)*100;return{videos:W,totalArea:$,efficiency:U}}if(e.landscape===1&&e.wide===2){const s=I.landscape,c=I.wide,r=t/2,m=r/c,x=i-m,A=x*s;let T,R,L,_;if(m<=i&&A<=t&&m+x<=i)T=r,R=m,L=A,_=x;else{const z=m+x,Se=i/z;T=r,R=m*Se,_=x*Se,L=_*s}const j=0,O=t/2,v=(t-L)/2,$=X(n,[{x:j,y:0,width:T,height:R,orientation:"wide"},{x:O,y:0,width:T,height:R,orientation:"wide"},{x:v,y:R,width:L,height:_,orientation:"landscape"}]),U=T*R*2+L*_,P=U/(t*i)*100;return{videos:$,totalArea:U,efficiency:P}}if(e.wide===3){const s=I.wide,c=t/2,r=c/s,S=i-r,x=S*s;let A,T,R,L;if(r<=i&&x<=t&&r+S<=i)A=c,T=r,R=x,L=S;else{const P=r+S,z=i/P;A=c,T=r*z,L=S*z,R=L*s,R>t&&(R=t,L=R/s)}const _=0,j=t/2,O=(t-R)/2,W=X(n,[{x:_,y:0,width:A,height:T,orientation:"wide"},{x:j,y:0,width:A,height:T,orientation:"wide"},{x:O,y:T,width:R,height:L,orientation:"wide"}]),$=A*T*2+R*L,U=$/(t*i)*100;return{videos:W,totalArea:$,efficiency:U}}if(e.landscape===3){const s=I.landscape,c=t/(s*1.5),r=Math.min(i,c),m=r/2,S=r,x=m*s,A=S*s,T=(i-r)/2,R=[{x:0,y:T,width:x,height:m,orientation:"landscape"},{x:0,y:T+m,width:x,height:m,orientation:"landscape"},{x,y:T,width:A,height:S,orientation:"landscape"}],L=X(n,R),_=x*r+A*r,j=_/(t*i)*100;return{videos:L,totalArea:_,efficiency:j}}const a=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)a.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)a.push("wide");const p=a[0]||n[0].orientation,y=a[1]||n[1].orientation,E=a[2]||n[2].orientation,b=I[p],l=I[y],d=I[E],h=[()=>{const s=t*.6,c=t*.4,r=s/b,m=c/l,S=c/d,x=m+S;return r<=i&&x<=i?{positions:[{x:0,y:(i-r)/2,width:s,height:r,orientation:p},{x:s,y:0,width:c,height:m,orientation:y},{x:s,y:m,width:c,height:S,orientation:E}],totalArea:s*r+c*m+c*S}:null},()=>{const s=i*.5,c=i*.5,r=s*b,m=s*l,S=c*d;return r+m<=t&&S<=t?{positions:[{x:0,y:0,width:r,height:s,orientation:p},{x:r,y:0,width:m,height:s,orientation:y},{x:(t-S)/2,y:s,width:S,height:c,orientation:E}],totalArea:r*s+m*s+S*c}:null},()=>{const s=t/3,c=s/b,r=s/l,m=s/d;return Math.max(c,r,m)<=i?{positions:[{x:0,y:(i-c)/2,width:s,height:c,orientation:p},{x:s,y:(i-r)/2,width:s,height:r,orientation:y},{x:s*2,y:(i-m)/2,width:s,height:m,orientation:E}],totalArea:s*c+s*r+s*m}:null}];let w=null,g=0;for(const s of h){const c=s();c&&c.totalArea>g&&(g=c.totalArea,w=c)}if(!w){const s=t/3,c=Math.min(s/b,i),r=Math.min(s/l,i),m=Math.min(s/d,i);w={positions:[{x:0,y:(i-c)/2,width:s,height:c,orientation:p},{x:s,y:(i-r)/2,width:s,height:r,orientation:y},{x:s*2,y:(i-m)/2,width:s,height:m,orientation:E}],totalArea:s*c+s*r+s*m}}const f=X(n,w.positions),u=w.totalArea/(t*i)*100;return{videos:f,totalArea:w.totalArea,efficiency:u}}function fn(e,n,t,i){if(e.portrait>0)return ve(e,n,t,i);const a=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)a.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)a.push("wide");const p=a[0]||n[0].orientation,y=a[1]||n[1].orientation,E=a[2]||n[2].orientation,b=a[3]||n[3].orientation,l=I[p],d=I[y],h=I[E],w=I[b],g=[()=>{const r=t/2,m=i/2,S=Math.min(r,m*l),x=S/l,A=Math.min(r,m*d),T=A/d,R=Math.min(r,m*h),L=R/h,_=Math.min(r,m*w),j=_/w;return{positions:[{x:(r-S)/2,y:(m-x)/2,width:S,height:x,orientation:p},{x:r+(r-A)/2,y:(m-T)/2,width:A,height:T,orientation:y},{x:(r-R)/2,y:m+(m-L)/2,width:R,height:L,orientation:E},{x:r+(r-_)/2,y:m+(m-j)/2,width:_,height:j,orientation:b}],totalArea:S*x+A*T+R*L+_*j}},()=>{const r=t*.6,m=t*.4,S=r/l,x=i/3,A=Math.min(m,x*d),T=A/d,R=Math.min(m,x*h),L=R/h,_=Math.min(m,x*w),j=_/w;return S<=i?{positions:[{x:0,y:(i-S)/2,width:r,height:S,orientation:p},{x:r,y:0,width:A,height:T,orientation:y},{x:r,y:x,width:R,height:L,orientation:E},{x:r,y:x*2,width:_,height:j,orientation:b}],totalArea:r*S+A*T+R*L+_*j}:null},()=>{const r=t/4,m=r/l,S=r/d,x=r/h,A=r/w;return Math.max(m,S,x,A)<=i?{positions:[{x:0,y:(i-m)/2,width:r,height:m,orientation:p},{x:r,y:(i-S)/2,width:r,height:S,orientation:y},{x:r*2,y:(i-x)/2,width:r,height:x,orientation:E},{x:r*3,y:(i-A)/2,width:r,height:A,orientation:b}],totalArea:r*m+r*S+r*x+r*A}:null}];let f=null,u=0;for(const r of g){const m=r();m&&m.totalArea>u&&(u=m.totalArea,f=m)}if(!f){const r=t/2,m=i/2,S=Math.min(m,r/l),x=Math.min(m,r/d),A=Math.min(m,r/h),T=Math.min(m,r/w);f={positions:[{x:(r-r)/2,y:(m-S)/2,width:r,height:S,orientation:p},{x:r+(r-r)/2,y:(m-x)/2,width:r,height:x,orientation:y},{x:(r-r)/2,y:m+(m-A)/2,width:r,height:A,orientation:E},{x:r+(r-r)/2,y:m+(m-T)/2,width:r,height:T,orientation:b}],totalArea:r*S+r*x+r*A+r*T}}const s=X(n,f.positions),c=f.totalArea/(t*i)*100;return{videos:s,totalArea:f.totalArea,efficiency:c}}const un=e=>{const n=B();n.HASS_HOST;const t=n.HASS_ACCESS_TOKEN||"",i=n.SUPERVISOR_TOKEN||"",[a,p]=N.useState({}),[y,E]=N.useState(!0),[b,l]=N.useState(null);return N.useEffect(()=>{if(!e||e.length===0){E(!1);return}let d=!0;async function h(){E(!0),l(null);try{const w=e.map(async f=>{try{const u=V(`/api/states/${f}`,n),c=(await M(u)).data?.attributes?.access_token||null;return{entityId:f,accessToken:c}}catch(u){return k.error(`Failed to fetch access token for ${f}:`,u),{entityId:f,accessToken:null}}}),g=await Promise.all(w);if(d){const f={};g.forEach(({entityId:u,accessToken:s})=>{s&&(f[u]=s)}),p(f),E(!1)}}catch(w){d&&(k.error("Failed to fetch camera access tokens:",w),l(G(w)),E(!1))}}return h(),()=>{d=!1}},[e?.length,e?.join(",")]),N.useEffect(()=>{if(!e||e.length===0)return;let d=!0,h=null;async function w(){if(d)try{const g=e.map(async u=>{try{const s=V(`/api/states/${u}`,n),r=(await M(s)).data?.attributes?.access_token||null;return{entityId:u,accessToken:r}}catch(s){return k.debug(`Failed to refresh access token for ${u}:`,s),null}}),f=await Promise.all(g);d&&p(u=>{const s={...u};return f.forEach(c=>{c&&c.accessToken&&(s[c.entityId]=c.accessToken)}),s})}catch{}}return h=setInterval(w,300*1e3),()=>{d=!1,h&&clearInterval(h)}},[e?.length,e?.join(",")]),N.useEffect(()=>{if(!e||e.length===0)return;let d=null,h=[],w=!0,g=null,f=0;const u=5;let s=!1,c=null,r=null;async function m(){if(s||!w)return;if(d){try{c&&(d.removeEventListener("ready",c),c=null),r&&(d.removeEventListener("disconnected",r),r=null),h.forEach(L=>{L&&L()}),h=[],d.close()}catch{}d=null}s=!0;const S=oe(n),x=i||t||"";if(!x){s=!1;return}let A;try{A=ce(S,x),w&&l(!1)}catch(L){w&&(k.error("Failed to create WebSocket auth for camera tokens:",L),l(L instanceof Error?L.message:String(L))),s=!1;return}const T=fe(n);if(!T){k.error("Failed to build WebSocket URL - cannot connect"),w&&l("WebSocket URL konnte nicht erstellt werden."),s=!1;return}const R=()=>new Promise((L,_)=>{const j=new WebSocket(T);j.onopen=()=>L(j),j.onerror=O=>_(O)});try{d=await le({auth:A,createSocket:R}),c=()=>{w&&(k.debug("WebSocket connection ready for camera tokens"),f=0,l(!1))},d.addEventListener("ready",c),r=()=>{if(w&&!s){if(k.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),g&&(clearTimeout(g),g=null),f>=u){k.warn(`Max reconnection attempts (${u}) reached for camera tokens, stopping reconnection`),w&&l("Verbindung verloren. Bitte Seite neu laden.");return}d=null,h=[],c=null,r=null;const L=Math.min(1e3*Math.pow(2,f),3e4);f++,g=setTimeout(()=>{w&&!s&&f<=u&&(k.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${f}/${u})`),m())},L)}},d.addEventListener("disconnected",r);for(const L of e){const _=O=>{if(w){const W=O.variables.trigger.to_state?.attributes?.access_token||null;p($=>W?{...$,[L]:W}:$)}},j=await d.subscribeMessage(_,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:L}});h.push(j)}s=!1}catch(L){if(s=!1,w)if(k.error("Failed to setup WebSocket connection for camera tokens:",L),l(L instanceof Error?L.message:String(L)),f<u){const _=Math.min(1e3*Math.pow(2,f),3e4);f++,g=setTimeout(()=>{w&&!s&&f<=u&&m()},_)}else k.warn(`Max reconnection attempts (${u}) reached for camera tokens, stopping reconnection`),w&&l("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return m(),()=>{if(w=!1,s=!1,g&&(clearTimeout(g),g=null),d)try{c&&d.removeEventListener("ready",c),r&&d.removeEventListener("disconnected",r)}catch{}if(h.forEach(S=>{if(S)try{S()}catch{}}),h=[],d){try{d.close()}catch{}d=null}}},[e?.length,e?.join(",")]),[a,y,b]},hn=(e,n=null,t=null)=>{if(!e)return null;let i=t||"";if(!i&&typeof window<"u"&&window.location){const p=window.location.protocol,y=window.location.hostname,E=window.location.port?`:${window.location.port}`:"";i=`${p}//${y}${E}`}if(!i)return k.warn("HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL"),null;const a=`${i}/api/camera_proxy_stream/${e}`;return n?`${a}?token=${encodeURIComponent(n)}`:a},We=45e3,pn=D.div`
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
`,mn=()=>{const e=B(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[];if(!n)return null;const[i,a]=N.useState(!1),[p]=rn(),[y,E]=N.useState(void 0),[b,l]=N.useState(100),[d,h]=N.useState("0"),w=N.useMemo(()=>t.map(c=>c.entity_id).filter(Boolean),[t]),[g]=un(w);N.useEffect(()=>{if(p==="off"&&i){const c=window.setTimeout(()=>{a(!1),E(void 0)},We);return E(c),h(We+"ms"),l(0),()=>{c&&window.clearTimeout(c)}}else p==="on"&&(h(0),l(100),a(!0))},[p,i]),N.useEffect(()=>{p==="on"&&y!==void 0&&(window.clearTimeout(y),h(0),l(100),E(void 0))},[y,p]);const[f,u]=N.useState(null),s=()=>{f===null?u("confirm"):f==="confirm"&&(u("opening"),sn(e),setTimeout(()=>u(null),2e3))};return N.useEffect(()=>{if(f==="confirm"){const c=setTimeout(()=>{u(null)},3e3);return()=>{clearTimeout(c)}}},[f]),N.useEffect(()=>{i||u(null)},[i]),o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>a(c=>!c),children:"CCTV"}),o.jsx(de,{visible:i,onClick:s,onClose:()=>{a(!1),u(null)},fullsize:!0,children:o.jsxs(pn,{onClick:s,children:[o.jsx(nt,{completed:b,height:10,bgColor:y===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:d,transitionTimingFunction:"linear"}),o.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const c=t.map(T=>({orientation:T.orientation||"landscape"})),r=window.innerWidth,m=window.innerHeight-10,S=et(c,r,m),x={portrait:t.filter(T=>(T.orientation||"landscape")==="portrait"),landscape:t.filter(T=>(T.orientation||"landscape")==="landscape"),wide:t.filter(T=>T.orientation==="wide")},A={portrait:0,landscape:0,wide:0};return S.videos.map((T,R)=>{const L=T.orientation,_=A[L],j=x[L][_];if(!j)return null;A[L]++;const O=g[j.entity_id]||null,v=hn(j.entity_id,O,e.HASS_HOST);return v?o.jsxs("div",{className:"video-container",style:{left:`${T.x}px`,top:`${T.y}px`,width:`${T.width}px`,height:`${T.height}px`},children:[o.jsx("img",{src:v,className:L,alt:"Camera stream",crossOrigin:"anonymous"},`${j.entity_id}-${R}`),o.jsx("div",{className:"video-overlay",onClick:()=>s()})]},`${L}-${_}-${R}`):null})})()}),f==="confirm"&&o.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),f==="opening"&&o.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},gn=D.div`
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

`,xn=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>o.jsxs(gn,{children:[o.jsxs("div",{className:"buttons",children:[o.jsx(Y,{path:St,size:"32px",color:"#ffffff",onClick:n}),o.jsx(Y,{path:Tt,size:"32px",color:"#ffffff",onClick:e}),o.jsx("button",{onClick:t,children:"Today"}),o.jsx(mn,{})]}),o.jsx(on,{}),o.jsx(Y,{path:Lt,size:"32px",color:"#ffffff",className:F("indicator")})]}),En=C.memo(xn),wn=6e4,Oe=(e=wn,n=void 0)=>{const[t,i]=N.useState(!0);return N.useEffect(()=>{const a=setInterval(()=>{i(p=>!p)},e);return()=>{clearInterval(a)}},[e,n]),t},yn={mdiDelete:jt,mdiCake:_t},bn=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return yn[n]||void 0},An=(e,n,t,i,a,p)=>M(a(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:1e4,signal:p}).then(y=>{!y.data||!Array.isArray(y.data)||y.data.forEach(E=>{const b="dateTime"in E.start?H.fromISO(E.start.dateTime):H.fromSQL(E.start.date);let l;"dateTime"in E.end?l=Math.floor(H.fromISO(E.end.dateTime).diff(n,"days").as("days")):l=Math.floor(H.fromSQL(E.end.date).diff(n,"days").as("days"))-1;const d=Math.floor(b.diff(n,"days").as("days"));l>=i.length&&(l=i.length-1);const h="dateTime"in E.start?"events":"allDay";if(d>=0&&d<i.length)for(let w=d;w<=l;w++)i[w][h]=[...i[w][h],{...E,icon:e.icon}]})}).catch(y=>{if(!(M.isCancel(y)||y.name==="AbortError"||y.code==="ERR_CANCELED"))throw y}),$e=new Map,Sn=300*1e3,Tn=e=>e.toISODate(),Ln=(e,n,t,i,a,p,y,E,b)=>{const l=[0,1,2,3,4,5].map(f=>e.plus({days:f}).startOf("day"));l[6]=e.plus({days:6}).endOf("day");const d=Tn(e),h=$e.get(d);if(h&&Date.now()-h.timestamp<Sn){b.current&&t(h.data);return}const w=l.map(f=>({date:f,allDay:[],events:[]}));if(!y||y.length===0){b.current&&(t(w),i(!1));return}const g=new AbortController;a.current&&a.current.abort(),a.current=g;try{b.current&&i(!0);const f=y.map(u=>An(u,l[0],l[6],w,E,g.signal));Promise.all(f).then(()=>{b.current&&!g.signal.aborted&&($e.set(d,{data:w,timestamp:Date.now()}),t(w),p(!1))}).catch(u=>{b.current&&!g.signal.aborted&&p(G(u))}).finally(()=>{b.current&&!g.signal.aborted&&i(!1)})}catch(f){b.current&&!g.signal.aborted&&(p(G(f)),i(!1))}},Pe=[],_n=e=>{const n=B(),t=n.CALENDARS||[],i=N.useMemo(()=>t.map(s=>({name:s.name,icon:bn(s.icon)})),[t]),a=N.useCallback(s=>V(`/api/calendars/${s}`,n),[n]),p=N.useCallback((s,c)=>`${a(s)}?${Ut.stringify(c)}`,[a]),[y,E]=N.useState(Pe),[b,l]=N.useState(!1),[d,h]=N.useState(!1),[w,g]=N.useState(null),f=C.useRef(null),u=C.useRef(!0);return Oe(6e4,"Calendar"),N.useEffect(()=>(u.current=!0,e!==void 0&&((w===null||!w.equals(e))&&(E(Pe),g(e)),Ln(e,y,E,l,f,h,i,p,u)),()=>{u.current=!1,f.current&&f.current.abort()}),[e,i]),[y,d]};function ae(e){const[n,t]=N.useState(!1);function i({key:p}){p===e&&t(!0)}const a=({key:p})=>{p===e&&t(!1)};return N.useEffect(()=>(window.addEventListener("keydown",i),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",i),window.removeEventListener("keyup",a)}),[e]),n}const jn=()=>{let e=new Date,t=(e.getDay()+6)%7,i=new Date(e.setDate(e.getDate()-t));return H.fromJSDate(i)},Nn=e=>{const n=()=>e(E=>E.plus({days:7})),t=ae("ArrowRight");N.useEffect(()=>{t&&n()},[t]);const i=()=>e(E=>E.minus({days:7})),a=ae("ArrowLeft");N.useEffect(()=>{a&&i()},[a]);const p=()=>e(jn()),y=ae("t");return N.useEffect(()=>{y&&p()},[y]),{nextWeek:n,previousWeek:i,startWeekWithToday:p}},Rn=e=>{const[n,t]=C.useState(0),[i,a]=C.useState(0),p=50;return{onTouchStart:l=>{a(0),t(l.targetTouches[0].clientX)},onTouchMove:l=>a(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!i)return;const l=n-i,d=l>p,h=l<-p;d&&e.onSwipedLeft(),h&&e.onSwipedRight()}}},Ve=e=>H.fromISO(e).toLocaleString(H.TIME_24_SIMPLE),Le=e=>e.toFormat("c")>=6,_e=e=>e.hasSame(H.now(),"day"),kn=D.div`
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
`,Cn=()=>{const[e,n]=N.useState(void 0),[t,i]=_n(e),{nextWeek:a,previousWeek:p,startWeekWithToday:y}=Nn(n);N.useEffect(()=>{y()},[]);const E=Rn({onSwipedLeft:()=>a(),onSwipedRight:()=>p()}),b=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=C.useMemo(()=>t.slice(0,7),[t]);return o.jsxs(kn,{...E,children:[o.jsx(En,{nextWeek:a,previousWeek:p,startWeekWithToday:y}),o.jsxs("div",{className:"schedule",children:[l.map((d,h)=>o.jsx("div",{className:F({weekend:Le(d.date),today:_e(d.date)},"caption"),children:o.jsx("h2",{children:d.date.toLocaleString(b)})},h)),l.map((d,h)=>o.jsx("div",{className:F("allDayRow",{weekend:Le(d.date),today:_e(d.date)}),children:d.allDay.map((w,g)=>o.jsx("div",{className:"allDayEvent",children:w.summary},g))},h)),l.map((d,h)=>o.jsx("div",{className:F("eventRow",{weekend:Le(d.date),today:_e(d.date)}),children:d.events.map((w,g)=>o.jsxs("div",{className:"event",children:[o.jsx("div",{children:w.summary}),o.jsxs("h3",{children:[w.icon&&o.jsx(Y,{path:w.icon,size:"1rem",color:"#ffffff"}),Ve(w.start.dateTime)," - ",Ve(w.end.dateTime)]})]},g))},h))]}),t.length===0&&o.jsx("div",{className:"loading",children:i!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),o.jsx("div",{children:i instanceof Error?i.message:String(i)})]}):o.jsx(Xe,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),i!==!1&&t.length>0&&o.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:o.jsxs("div",{children:["Warnung: ",i instanceof Error?i.message:String(i)]})})]})},be={"clear-day":{icon:ut,label:"Klar",color:"#eeeef5"},"clear-night":{icon:ft,label:"Klar",color:"#eeeef5"},rain:{icon:dt,label:"Regen",color:"#80a5d6"},snow:{icon:lt,label:"Schnee",color:"#8c82ce"},sleet:{icon:ct,label:"Graupel",color:"#aba4db"},wind:{icon:at,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:st,label:"Neblig",color:"#d5dae2"},cloudy:{icon:rt,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:it,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:ot,label:"Teils bewölkt",color:"#d5dae2"}},vn=e=>{const[n,t]=N.useState([]),[i,a]=N.useState(!1),p=Oe(6e4*10,"Weather"),y=B(),E=y.ENABLE_WEATHER||!1,b=y.WEATHER_API_KEY||"",l=y.WEATHER_LATITUDE,d=y.WEATHER_LONGITUDE,h=E&&b&&l&&d,w=()=>`./forecast/${b}/${l},${d}?&units=si&exclude=minutely`;return N.useEffect(()=>{if(!h)return;let g=!0;const f=new AbortController;return M(w(),{signal:f.signal}).then(u=>{g&&(t(u.data),a(!1))}).catch(u=>{g&&!f.signal.aborted&&a(G(u))}).finally(()=>{g&&e&&e(!1)}),()=>{g=!1,f.abort()}},[p,e,h,E,b,l,d]),[n,i]},On=pt(mt),Be=D.div`

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
`,Ue=C.memo(({data:e,daily:n=!1})=>o.jsxs("div",{children:[o.jsxs("div",{children:[!n&&H.fromSeconds(e.time).toLocaleString(H.TIME_24_SIMPLE),n&&H.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),o.jsx("div",{children:o.jsx(Re,{icon:e.icon})}),o.jsx("div",{children:o.jsxs("strong",{children:[!n&&o.jsxs(o.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&o.jsxs(o.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),o.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),o.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Dn=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:be[n.icon]?.color||"#ffffff",text:be[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),Re=({icon:e})=>{const n=be[e];return o.jsx(n.icon,{size:60,color:"#ffffff"})},In=()=>{if(!(B().ENABLE_WEATHER||!1))return null;const[t,i]=vn(),[a,p]=N.useState(!1),y=ae("w"),E=N.useRef(),b=C.useCallback(()=>p(g=>!g),[]),l=C.useCallback(()=>p(!0),[]),d=C.useMemo(()=>Dn(t),[t]),h=C.useMemo(()=>[3,6,9,12],[]),w=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return N.useEffect(()=>{if(!a||!E.current||!t||!t.hourly||d.length===0)return;const g={timezone:"Europe/Berlin"},f=document.createElement("div");return E.current.textContent="",E.current.appendChild(f),Ht(f,d,g),()=>{E.current&&(E.current.textContent="")}},[a,d]),N.useEffect(()=>{y&&b()},[y]),!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?i!==!1?o.jsx(Be,{children:o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),o.jsx("div",{children:i instanceof Error?i.message:String(i)})]})}):"":o.jsxs(Be,{children:[o.jsxs("div",{onClick:l,children:[o.jsxs("div",{className:"headline",children:[o.jsx(Re,{icon:t.currently.icon}),o.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),o.jsx("div",{className:"forecast",children:h.map((g,f)=>o.jsx(Ue,{data:t.hourly.data[g]},f))})]}),o.jsx(de,{visible:a,onClick:b,children:o.jsxs("div",{className:"full-weather",children:[i!==!1&&o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:i instanceof Error?i.message:String(i)})]}),o.jsxs("div",{className:"detail-header",children:[o.jsx("div",{children:o.jsxs("div",{className:"headline",children:[o.jsx(Re,{icon:t.daily.data[0].icon}),o.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",o.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),o.jsx("h3",{children:be[t.daily.data[0].icon].label})]}),o.jsx("div",{className:"values",children:o.jsxs("div",{className:"table",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Regen:"})," ",t.daily.data[0].precipProbability*100," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),o.jsxs("div",{children:[o.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),o.jsx("h3",{children:"Die nächsten 24 Stunden"}),o.jsx("div",{ref:E}),o.jsx("h3",{children:"Die nächste Woche"}),o.jsx("div",{className:"forecast",children:w.map((g,f)=>o.jsx(Ue,{data:t.daily.data[g],daily:!0},f))}),o.jsxs("div",{className:"info",children:["Aktualisiert ",o.jsx(ht,{date:H.fromSeconds(t.currently.time).toJSDate(),formatter:On})]})]})})]})},Mn=C.memo(In),Wn="AK Wandsbek",$n="Hamburg",Pn="Master:62016",Vn="STATION",Bn={x:10.091341,y:53.568702},Un={name:Wn,city:$n,id:Pn,type:Vn,coordinate:Bn},we={departureList:"departureList",checkName:"checkName"},Hn=async(e,n,t)=>M({method:"post",url:`./gti/public/${e}`,data:n,signal:t,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}),He=(e,n)=>e.realtimeOffset-n.realtimeOffset,Fn=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(He),to:n.filter(t=>t.directionId===6).slice(0,3).sort(He)}},Yn=e=>{const t=B().ENABLE_HVV||!1,[i,a]=N.useState([]),[p,y]=N.useState(!1),E=Oe(6e4),b=t;return N.useEffect(()=>{if(!b)return;if(!(e in we)){k.warn(e,"not supported by HVV connector");return}let l=!0;const d=new AbortController;let h={version:51};switch(e){case we.checkName:h={...h,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case we.departureList:const w=H.now();h={...h,station:Un,time:{date:w.toFormat("dd.MM.yyyy"),time:w.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:h=void 0}return Hn(e,h,d.signal).then(w=>{l&&(a(Fn(w.data)),y(!1))}).catch(w=>{l&&!d.signal.aborted&&y(G(w))}),()=>{l=!1,d.abort()}},[e,E,b,t]),[i,p]},Gn=D.div`
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
`,Fe=C.memo(({line:e,direction:n,realtimeOffset:t})=>o.jsxs("div",{className:"departure",children:[o.jsx("div",{children:o.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),o.jsx("div",{children:t===0?"Jetzt":o.jsxs(o.Fragment,{children:["in ",t," '"]})})]})),zn=()=>{if(!(B().ENABLE_HVV||!1))return null;const[t,i]=Yn(we.departureList);return o.jsx(Gn,{children:i!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:i instanceof Error?i.message:String(i)})]}):o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((a,p)=>o.jsx(Fe,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},p)),o.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((a,p)=>o.jsx(Fe,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},p))]})})},Kn=C.memo(zn),qn=()=>{const e=B(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const i=e.ENTITY_CHARGING_STATE||"",a=e.ENTITY_STATE_OF_CHARGE||"",p=e.HASS_ACCESS_TOKEN||"",y=e.SUPERVISOR_TOKEN||"",[E,b]=N.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[l,d]=N.useState(!1),h=n&&(t||i||a);return N.useEffect(()=>{if(!h)return;(async()=>{const g=[];t&&g.push(M(V(`/api/states/${t}`,e)).then(s=>({type:"preclimateStatus",value:s.data.state==="on"})).catch(s=>({type:"preclimateStatus",error:G(s)}))),i&&g.push(M(V(`/api/states/${i}`,e)).then(s=>({type:"chargingState",value:s.data.state==="on"})).catch(s=>({type:"chargingState",error:G(s)}))),a&&g.push(M(V(`/api/states/${a}`,e)).then(s=>({type:"stateOfCharge",value:parseFloat(s.data.state)||0})).catch(s=>({type:"stateOfCharge",error:G(s)})));const f=await Promise.all(g);let u=!1;f.forEach(s=>{s.error?u=s.error:b(c=>({...c,[s.type]:s.value}))}),d(u||!1)})()},[h,n,t,i,a]),N.useEffect(()=>{let w=null,g=[],f=!0,u=null,s=0;const c=5;let r=!1,m=null,S=null;async function x(){if(!h||!f||r)return;if(w){try{m&&(w.removeEventListener("ready",m),m=null),S&&(w.removeEventListener("disconnected",S),S=null),g.forEach(j=>{j&&j()}),g=[],w.close()}catch{}w=null}r=!0;const A=oe(e),T=y||p||"";if(!T){r=!1;return}let R;try{R=ce(A,T),f&&d(!1)}catch(j){f&&(k.error("Failed to create WebSocket auth:",j),d(j instanceof Error?j.message:String(j))),r=!1;return}const L=fe(e);if(!L){k.error("Failed to build WebSocket URL - cannot connect"),f&&d("WebSocket URL konnte nicht erstellt werden."),r=!1;return}const _=()=>new Promise((j,O)=>{const v=new WebSocket(L);v.onopen=()=>j(v),v.onerror=W=>O(W)});try{w=await le({auth:R,createSocket:_}),m=()=>{f&&(k.debug("WebSocket connection ready for EV entities"),s=0,d(!1))},w.addEventListener("ready",m),S=()=>{if(f&&!r){if(k.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),u&&(clearTimeout(u),u=null),s>=c){k.warn(`Max reconnection attempts (${c}) reached for EV entities, stopping reconnection`),f&&d("Verbindung verloren. Bitte Seite neu laden.");return}w=null,g=[],m=null,S=null;const v=Math.min(1e3*Math.pow(2,s),3e4);s++,u=setTimeout(()=>{f&&!r&&s<=c&&(k.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${s}/${c})`),x())},v)}},w.addEventListener("disconnected",S);const j=v=>{if(f){const W=v.variables.trigger.to_state.entity_id,$=v.variables.trigger.to_state.state;b(U=>{const P={...U};return W===t?P.preclimateStatus=$==="on":W===i?P.chargingState=$==="on":W===a&&(P.stateOfCharge=parseFloat($)||0),P})}},O=[];t&&O.push(t),i&&O.push(i),a&&O.push(a);for(const v of O){const W=await w.subscribeMessage(j,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:v}});g.push(W)}r=!1}catch(j){if(r=!1,f)if(k.error("Failed to setup WebSocket connection:",j),d(j instanceof Error?j.message:String(j)),s<c){const O=Math.min(1e3*Math.pow(2,s),3e4);s++,u=setTimeout(()=>{f&&!r&&s<=c&&x()},O)}else k.warn(`Max reconnection attempts (${c}) reached for EV entities, stopping reconnection`),f&&d("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return x(),()=>{if(f=!1,r=!1,u&&(clearTimeout(u),u=null),w)try{m&&w.removeEventListener("ready",m),S&&w.removeEventListener("disconnected",S)}catch{}if(g.forEach(A=>{if(A)try{A()}catch{}}),g=[],w){try{w.close()}catch{}w=null}}},[h,n,t,i,a,p,y]),[E,l]},Xn=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&M.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{k.error("Failed to start preclimate:",t)})},Jn=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&M.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{k.error("Failed to stop preclimate:",t)})},Qn=D.div`
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
`,Zn=(e,n)=>n?Rt:e>=80?kt:e>=50?Ct:e>=20?vt:Ot,eo=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",to=()=>{const e=B();if(!(e.ENABLE_EV||!1))return null;const[t,i]=qn(),{preclimateStatus:a,chargingState:p,stateOfCharge:y}=t,[E,b]=C.useState(!1),[l,d]=C.useState(null),[h,w]=C.useState(!1),[g,f]=C.useState(!1),[u,s]=C.useState(0),c=C.useRef(null),r=C.useRef(null),m=C.useRef(a),S=C.useRef(null);C.useEffect(()=>{m.current!==a&&(E&&S.current!==null&&a===(l==="start")&&(s(l==="start"?360:0),f(!0),setTimeout(()=>{b(!1),d(null),f(!1),s(0),S.current=null,w(!1)},300),c.current&&(clearTimeout(c.current),c.current=null)),m.current=a)},[a,E,l]),C.useEffect(()=>{if(!E||g){r.current&&(cancelAnimationFrame(r.current),r.current=null);return}const O=S.current||Date.now(),v=1e4,W=l==="stop",$=()=>{const U=Date.now()-O,P=Math.min(U/v,1);s(W?360*(1-P):360*P),P<1&&!g&&(r.current=requestAnimationFrame($))};return r.current=requestAnimationFrame($),()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null)}},[E,g,l]),C.useEffect(()=>()=>{c.current&&clearTimeout(c.current),r.current&&cancelAnimationFrame(r.current)},[]);const x=C.useCallback(()=>{if(i!==!1||E)return;const O=!a,v=O?"start":"stop";b(!0),d(v),f(!1),w(!1),s(0),S.current=Date.now(),m.current=a,O?Xn(e):Jn(e),c.current=setTimeout(()=>{E&&(w(!0),setTimeout(()=>{b(!1),d(null),f(!1),s(0),w(!1),S.current=null},500))},15e3)},[a,i,E]),A=Zn(y||0,p),T=eo(y||0),R=Math.round(y||0),L=E?l==="start":a,_=l==="start"?"#17e146":"#f85a5a",j=l==="start"?"clockwise":"counterclockwise";return o.jsxs(Qn,{className:F({disabled:i!==!1}),children:[o.jsxs("h2",{children:["Auto",i!==!1?o.jsxs("div",{className:"battery-info",children:[o.jsx(Y,{path:Ce,size:"1.2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsxs("div",{className:"battery-info",children:[o.jsxs("span",{className:"charge-percentage",children:[R,"%"]}),o.jsx(Y,{path:A,size:"1.2rem",color:T})]})]}),i===!1&&o.jsxs("div",{className:"preclimate-button-wrapper",children:[E&&o.jsx("div",{className:F("progress-ring",j,{complete:g}),style:{"--progress-color":_,"--progress-angle":`${u}deg`,"--progress-gradient":l==="stop"?`conic-gradient(from -90deg, ${_} 0deg, ${_} ${u}deg, transparent ${u}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${_} 0deg, ${_} ${u}deg, transparent ${u}deg, transparent 360deg)`}}),o.jsxs("button",{className:F("preclimate-button",{spinning:L&&!E,shaking:h}),onClick:x,disabled:i!==!1||E,children:[o.jsx(Y,{path:Nt,size:"2rem",color:L?"#ff9800":"#ffffff"}),o.jsx("span",{children:L?"Stop":"Start"})]})]})]})},no=C.memo(to),oo=()=>{const e=B(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",i=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[p,y]=N.useState("closed"),[E,b]=N.useState(!1),l=n&&t,d=t?V(`/api/states/${t}`,e):null;return N.useEffect(()=>{if(!l||!d)return;let h=!0;const w=new AbortController;return M(d,{signal:w.signal}).then(g=>{h&&(y(g.data.state),b(!1))}).catch(g=>{h&&!w.signal.aborted&&b(G(g))}),()=>{h=!1,w.abort()}},[l,d,n,t]),N.useEffect(()=>{let h=null,w=null,g=!0,f=null,u=0;const s=5;let c=!1,r=null,m=null;async function S(){if(!l||!t||!g||c)return;if(h){try{r&&(h.removeEventListener("ready",r),r=null),m&&(h.removeEventListener("disconnected",m),m=null),w&&(w(),w=null),h.close()}catch{}h=null}c=!0;const x=oe(e),A=a||i||"";if(!A){c=!1;return}let T;try{T=ce(x,A),g&&b(!1)}catch(_){g&&(k.error("Failed to create WebSocket auth:",_),b(_ instanceof Error?_.message:String(_))),c=!1;return}const R=fe(e);if(!R){k.error("Failed to build WebSocket URL - cannot connect"),g&&b("WebSocket URL konnte nicht erstellt werden."),c=!1;return}const L=()=>new Promise((_,j)=>{const O=new WebSocket(R);O.onopen=()=>_(O),O.onerror=v=>j(v)});try{h=await le({auth:T,createSocket:L}),r=()=>{g&&(k.debug("WebSocket connection ready for garage door"),u=0,b(!1))},h.addEventListener("ready",r),m=()=>{if(g&&!c){if(k.debug("WebSocket disconnected for garage door, will attempt to reconnect"),f&&(clearTimeout(f),f=null),u>=s){k.warn(`Max reconnection attempts (${s}) reached for garage door, stopping reconnection`),g&&b("Verbindung verloren. Bitte Seite neu laden.");return}h=null,w=null,r=null,m=null;const j=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!c&&u<=s&&(k.debug(`Attempting to reconnect WebSocket for garage door (attempt ${u}/${s})`),S())},j)}},h.addEventListener("disconnected",m);const _=j=>{g&&y(j.variables.trigger.to_state.state)};w=await h.subscribeMessage(_,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),c=!1}catch(_){if(c=!1,g)if(k.error("Failed to setup WebSocket connection:",_),b(_ instanceof Error?_.message:String(_)),u<s){const j=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!c&&u<=s&&S()},j)}else k.warn(`Max reconnection attempts (${s}) reached for garage door, stopping reconnection`),g&&b("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return S(),()=>{if(g=!1,c=!1,f&&(clearTimeout(f),f=null),h)try{r&&h.removeEventListener("ready",r),m&&h.removeEventListener("disconnected",m)}catch{}if(w){try{w()}catch{}w=null}if(h){try{h.close()}catch{}h=null}}},[l]),[p,E]},io=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const i=setTimeout(()=>e(!1),3e3);M.post(V("/api/services/cover/toggle",n),{entity_id:t}).catch(a=>{k.error("Failed to toggle garage door:",a)}).finally(()=>{clearTimeout(i),e(!1)})},ro=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const i=setTimeout(()=>e(!1),3e3);M.post(V("/api/services/cover/open_cover",n),{entity_id:t}).catch(a=>{k.error("Failed to open garage door:",a)}).finally(()=>{clearTimeout(i),e(!1)})},so=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const i=setTimeout(()=>e(!1),3e3);M.post(V("/api/services/cover/close_cover",n),{entity_id:t}).catch(a=>{k.error("Failed to close garage door:",a)}).finally(()=>{clearTimeout(i),e(!1)})},ao=D.div`
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
`,tt=D.div`
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
`,ke=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:$t},open:{label:"Offen",icon:Wt},closed:{label:"Geschlossen",icon:Mt},opening:{label:"Öffnet",icon:It},closing:{label:"Schließt",icon:Dt}};return n[e]||k.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:Pt}},co=({garageDoor:e,animate:n=!1})=>o.jsxs(tt,{className:F({animate:n}),children:[o.jsx(Y,{path:ke(e).icon,size:"2rem",color:"#ffffff"}),o.jsx("span",{children:ke(e).label})]}),lo=e=>gt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return ke(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),fo=()=>{const e=B();if(!(e.ENABLE_GARAGE||!1))return null;const[t,i]=oo(),[a,p]=N.useState(void 0),[y,E]=N.useState(!1),[b,l]=N.useState(!1);N.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!a){const f=new Promise(u=>{p({resolve:u})});lo(f)}}else a&&(a.resolve(t),p(void 0))},[t]);const d=ae("g");N.useEffect(()=>{d&&i===!1&&io(E,e)},[d,i,e]);const h=C.useCallback(g=>{if(i===!1)switch(l(!1),g){case"open":ro(E,e);break;case"close":so(E,e);break}},[E,i,e]),w=C.useCallback(()=>{i===!1&&l(!0)},[i]);return o.jsxs(ao,{className:F({disabled:i!==!1}),children:[o.jsx("h2",{children:"Garage"}),o.jsx("div",{className:"status",onClick:w,children:i!==!1?o.jsxs(tt,{children:[o.jsx(Y,{path:Ce,size:"2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsx(co,{garageDoor:t,animate:y})}),o.jsx(de,{visible:b&&i===!1,onClick:()=>l(!1),children:o.jsxs("div",{className:"controls",children:[o.jsx("h2",{children:"Garagentor"}),o.jsx("div",{onClick:()=>h("open"),children:"Öffnen"}),o.jsx("div",{onClick:()=>h("close"),children:"Schließen"})]})})]})},uo=C.memo(fo),ho=(e,n)=>e?V(`/api/states/${e}`,n):null,q={done:{label:"Fertig",animate:!1,icon:Bt},off:{label:"Aus",animate:!1,icon:Vt},standby:{label:"Standby",animate:!1,icon:De},running:{label:"Läuft …",animate:!0,icon:De}},po={off:0,standby:2,running:16,done:256},mo=()=>{const e=B();e.ENABLE_LAUNDRY;const n=e.LAUNDRY_MACHINES||[];e.HASS_ACCESS_TOKEN,e.SUPERVISOR_TOKEN;const i=(Array.isArray(n)?n:[]).map((h,w)=>{const[g,f]=go(h.entity_id,e);return{state:g,error:f,name:h.name}}),[a,p]=N.useState(q.off),[y,E]=N.useState(!1),b=i.map(h=>h.state),l=i.map(h=>h.error);N.useEffect(()=>{const h=l.some(w=>w!==!1);E(h&&l.find(w=>w!==!1)||!1)},[l]),N.useEffect(()=>{const h=b.reduce((w,g)=>w+(po[g]||0),0);h===0?p(q.off):h<16?p(q.standby):h<256?p(q.running):h%256===0?p(q.done):h%256%16===0?p(q.running):h%256%2===0?p(q.done):p(q.running)},[b]);const d=i.map(h=>({label:h.name,state:h.state}));return[a,d,y]},go=(e,n)=>{const[t,i]=N.useState("off"),[a,p]=N.useState(!1),E=(n.ENABLE_LAUNDRY||!1)&&e,b=ho(e,n);return N.useEffect(()=>{if(!E||!b)return;let l=!0;const d=new AbortController;return M(b,{signal:d.signal}).then(h=>{l&&(i(h.data.state),p(!1))}).catch(h=>{l&&!d.signal.aborted&&p(G(h))}),()=>{l=!1,d.abort()}},[e,E,b]),N.useEffect(()=>{let l=null,d=null,h=!0,w=null,g=0;const f=5;let u=!1,s=null,c=null;async function r(){if(!E||!e||!h||u)return;if(l){try{s&&(l.removeEventListener("ready",s),s=null),c&&(l.removeEventListener("disconnected",c),c=null),d&&(d(),d=null),l.close()}catch{}l=null}u=!0;const m=oe(n),S=n.HASS_ACCESS_TOKEN||"",A=n.SUPERVISOR_TOKEN||""||S||"";if(!A){u=!1;return}const T=fe(n);if(!T){k.error("Failed to build WebSocket URL - cannot connect"),h&&p("WebSocket URL konnte nicht erstellt werden."),u=!1;return}const R=()=>new Promise((L,_)=>{const j=new WebSocket(T);j.onopen=()=>L(j),j.onerror=O=>_(O)});try{const L=ce(m,A);l=await le({auth:L,createSocket:R}),s=()=>{h&&(k.debug(`WebSocket connection ready for ${e}`),g=0,p(!1))},l.addEventListener("ready",s),c=()=>{if(h&&!u){if(k.debug(`WebSocket disconnected for ${e}, will attempt to reconnect`),w&&(clearTimeout(w),w=null),g>=f){k.warn(`Max reconnection attempts (${f}) reached for ${e}, stopping reconnection`),h&&p("Verbindung verloren. Bitte Seite neu laden.");return}l=null,d=null,s=null,c=null;const j=Math.min(1e3*Math.pow(2,g),3e4);g++,w=setTimeout(()=>{h&&!u&&g<=f&&(k.debug(`Attempting to reconnect WebSocket for ${e} (attempt ${g}/${f})`),r())},j)}},l.addEventListener("disconnected",c);const _=j=>{h&&i(j.variables.trigger.to_state.state)};d=await l.subscribeMessage(_,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),u=!1}catch(L){if(u=!1,h)if(k.error(`Failed to setup WebSocket connection for ${e}:`,L),p(L instanceof Error?L.message:String(L)),g<f){const _=Math.min(1e3*Math.pow(2,g),3e4);g++,w=setTimeout(()=>{h&&!u&&g<=f&&r()},_)}else k.warn(`Max reconnection attempts (${f}) reached for ${e}, stopping reconnection`),h&&p("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return r(),()=>{if(h=!1,u=!1,w&&(clearTimeout(w),w=null),l)try{s&&l.removeEventListener("ready",s),c&&l.removeEventListener("disconnected",c)}catch{}if(d){try{d()}catch{}d=null}if(l){try{l.close()}catch{}l=null}}},[e,E]),[t,a]},xo=D.div`
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
`,Eo=()=>{if(!(B().ENABLE_LAUNDRY||!1))return null;const[t,i,a]=mo(),[p,y]=N.useState(!1),E=C.useCallback(()=>{a===!1&&y(!0)},[a]),b=C.useCallback(()=>y(!1),[]);return o.jsxs(xo,{className:F({disabled:a!==!1}),children:[o.jsx("h2",{children:"Wäsche"}),o.jsx("div",{className:"status",onClick:E,children:a!==!1?o.jsxs(o.Fragment,{children:[o.jsx(Y,{path:Ce,size:"2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:F({animate:t.animate}),children:o.jsx(Y,{path:t.icon,size:"2rem",color:"#ffffff"})}),o.jsx("span",{children:t.label})]})}),o.jsx(de,{visible:p&&a===!1,onClick:b,children:o.jsxs("div",{className:"states",children:[o.jsx("h2",{children:"Wäsche"}),i.map((l,d)=>o.jsxs("div",{children:[o.jsx("div",{className:"subtitle",children:l.label}),o.jsx("div",{className:F({animate:q[l.state].animate}),children:o.jsx(Y,{path:q[l.state].icon,size:2})}),o.jsx("div",{children:q[l.state].label})]},d))]})})]})},wo=C.memo(Eo),yo=D.div`
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
`,bo=()=>o.jsxs(yo,{children:[o.jsxs("div",{className:"top-content",children:[o.jsx(Mn,{}),o.jsx(Kn,{}),o.jsx(no,{})]}),o.jsxs("div",{className:"two-cols",children:[o.jsx(uo,{}),o.jsx(wo,{})]})]}),Ao=C.memo(bo),Ye=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],So=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],ye={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},To={landscape:"L",portrait:"P",wide:"W"},Lo=D.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,_o=D.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,jo=D.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Z=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ee=D.label`
  font-size: 0.9rem;
  color: #cccccc;
`,Ge=D.select`
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
`,ze=D.input`
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
`,No=D.button`
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
`,Ke=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Ro=D.button`
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
`,ko=D.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Co=D.div`
  position: absolute;
  background-color: ${e=>ye[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,vo=D.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Oo=D.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Do=D.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,pe=D.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,me=D.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ge=D.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Io=D.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Mo=D.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;D.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;const je=D.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?ye[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?ye[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?ye[e.orientation]:"#4a4a4a"};
  }
`,qe=()=>{const[e,n]=C.useState(1920),[t,i]=C.useState(1080),[a,p]=C.useState("Full HD"),[y,E]=C.useState(""),[b,l]=C.useState(""),[d,h]=C.useState([{orientation:"landscape"}]),[w,g]=C.useState(null),f=C.useMemo(()=>et(d,e,t),[d,e,t]),u=x=>{const A=Ye.find(T=>T.name===x);A&&A.width&&A.height?(n(A.width),i(A.height),p(x),E(""),l("")):x==="Custom"&&p("Custom")},s=()=>{const x=parseInt(y),A=parseInt(b);x>0&&A>0&&(n(x),i(A))},c=x=>{h(x.videos),g(x.name)},r=x=>{const A=[];for(let T=0;T<x;T++)A.push(d[T]||{orientation:"landscape"});h(A),g(null)},m=(x,A)=>{const T=[...d];T[x]={orientation:A},h(T),g(null)},S=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return o.jsxs(Lo,{children:[o.jsx(_o,{children:"Video Tiling Algorithm Demo"}),o.jsxs(jo,{children:[o.jsxs(Z,{children:[o.jsx(ee,{children:"Screen Size Preset"}),o.jsx(Ge,{value:a,onChange:x=>u(x.target.value),children:Ye.map(x=>o.jsx("option",{value:x.name,children:x.name},x.name))})]}),a==="Custom"&&o.jsxs(o.Fragment,{children:[o.jsxs(Z,{children:[o.jsx(ee,{children:"Custom Width"}),o.jsx(ze,{type:"number",value:y,onChange:x=>E(x.target.value),placeholder:"Width",min:"100"})]}),o.jsxs(Z,{children:[o.jsx(ee,{children:"Custom Height"}),o.jsx(ze,{type:"number",value:b,onChange:x=>l(x.target.value),placeholder:"Height",min:"100"})]}),o.jsxs(Z,{children:[o.jsx(ee,{children:" "}),o.jsx(No,{onClick:s,children:"Apply Custom Size"})]})]}),o.jsxs(Z,{children:[o.jsx(ee,{children:"Number of Videos"}),o.jsxs(Ge,{value:d.length,onChange:x=>r(parseInt(x.target.value)),children:[o.jsx("option",{value:"1",children:"1 Video"}),o.jsx("option",{value:"2",children:"2 Videos"}),o.jsx("option",{value:"3",children:"3 Videos"}),o.jsx("option",{value:"4",children:"4 Videos"})]})]}),d.map((x,A)=>o.jsxs(Z,{children:[o.jsxs(ee,{children:["Video ",A+1," Orientation"]}),o.jsxs(Ke,{children:[o.jsx(je,{active:x.orientation==="landscape",orientation:"landscape",onClick:()=>m(A,"landscape"),children:"Landscape"}),o.jsx(je,{active:x.orientation==="portrait",orientation:"portrait",onClick:()=>m(A,"portrait"),children:"Portrait"}),o.jsx(je,{active:x.orientation==="wide",orientation:"wide",onClick:()=>m(A,"wide"),children:"Wide"})]})]},A))]}),o.jsxs(Io,{children:[o.jsx(Mo,{children:"Test Scenarios"}),o.jsx(Ke,{children:So.map(x=>o.jsx(Ro,{active:w===x.name,onClick:()=>c(x),children:x.name},x.name))})]}),o.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:o.jsx(ko,{style:{width:`${e*S}px`,height:`${t*S}px`},children:f.videos.map((x,A)=>o.jsxs(Co,{orientation:x.orientation,style:{left:`${x.x*S}px`,top:`${x.y*S}px`,width:`${x.width*S}px`,height:`${x.height*S}px`},children:[o.jsxs(vo,{children:[To[x.orientation]," ",A+1]}),o.jsxs(Oo,{children:[Math.round(x.width)," × ",Math.round(x.height)]})]},A))})}),o.jsxs(Do,{children:[o.jsxs(pe,{children:[o.jsx(me,{children:"Canvas Size"}),o.jsxs(ge,{children:[e," × ",t]})]}),o.jsxs(pe,{children:[o.jsx(me,{children:"Total Area Used"}),o.jsxs(ge,{children:[Math.round(f.totalArea).toLocaleString()," px²"]})]}),o.jsxs(pe,{children:[o.jsx(me,{children:"Efficiency"}),o.jsxs(ge,{children:[f.efficiency.toFixed(2),"%"]})]}),o.jsxs(pe,{children:[o.jsx(me,{children:"Display Scale"}),o.jsxs(ge,{children:[(S*100).toFixed(1),"%"]})]})]})]})},Wo=()=>{function e(t,i){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(i))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[p,y]=i.split(":").map(Number),E=new Date;let b=new Date(E.getFullYear(),E.getMonth(),E.getDate());b.setHours(p,y,0,0),b<=E&&b.setDate(b.getDate()+1);const l=b.getTime()-E.getTime();return k.log("Reloading page at",i,"in",Math.floor(l/1e3/60),"minutes"),setTimeout(t,l)}const n=()=>{k.log("Timeout reached! "),window.location.reload(!0)};N.useLayoutEffect(()=>{const t=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{t.forEach(i=>{i&&clearTimeout(i)})}},[])},$o=D.div`
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
`;class Ae extends N.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const i=n?.toString()||"Unknown error",a=n?.stack||"",p=t?.componentStack||"";k.error(`ErrorBoundary caught an error: ${i}`,{errorName:n?.name,errorMessage:i,errorStack:a,componentStack:p})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?o.jsxs($o,{children:[o.jsx("h2",{children:"Something went wrong"}),o.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,o.jsxs("div",{children:[o.jsx("button",{onClick:this.handleReset,children:"Try Again"}),o.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Po=xt`
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
`,Vo=D.div`
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
`;function Bo(){return Wo(),o.jsxs(Vo,{children:[o.jsx(Po,{}),o.jsxs("div",{className:"main",children:[o.jsx(Ae,{children:o.jsx(Cn,{})}),o.jsx(Ae,{children:o.jsx(Ao,{})})]}),o.jsx(wt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Uo(){return o.jsx(Ae,{children:o.jsxs(Et,{children:[o.jsx(Te,{path:"/demo",element:o.jsx(qe,{})}),o.jsx(Te,{path:"/tiling-demo",element:o.jsx(qe,{})}),o.jsx(Te,{path:"*",element:o.jsx(Bo,{})})]})})}const Ho=yt.createRoot(document.getElementById("root"));Ho.render(o.jsx(N.StrictMode,{children:o.jsx(Ae,{children:o.jsx(Kt,{children:o.jsx(bt,{children:o.jsx(Uo,{})})})})}));
