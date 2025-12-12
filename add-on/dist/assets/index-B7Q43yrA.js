import{d as D,R as _,j as i,I as G,r as j,l as Ze,P as st,W as at,b as ct,e as lt,f as dt,h as ft,i as ut,k as ht,m as pt,n as mt,o as gt,T as xt,p as Et,s as wt,y as yt,q as bt,t as St,u as Te,L as At,v as Tt,B as Lt}from"./react-vendor-B8bitAeB.js";import{D as H}from"./date-vendor-BDx6lZXm.js";import{f as F}from"./vendor-xcrt83Cp.js";import{m as Ct,a as _t,b as Rt,c as kt,d as jt,e as Nt,f as ve,g as vt,h as Ot,i as Dt,j as It,k as Wt,l as Pt,n as Mt,o as $t,p as Vt,q as Bt,r as Ut,s as Ht,t as We,u as Ft,v as Gt}from"./ui-vendor-C7t39j5V.js";import{a as W,q as Yt}from"./utils-vendor-BFpt2ztq.js";import{c as ce,a as le}from"./ha-vendor-CoU0AojH.js";import{t as zt}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const m of s)if(m.type==="childList")for(const E of m.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function t(s){const m={};return s.integrity&&(m.integrity=s.integrity),s.referrerPolicy&&(m.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?m.credentials="include":s.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(s){if(s.ep)return;s.ep=!0;const m=t(s);fetch(s.href,m)}})();const Kt=D.div`
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
`,de=({visible:e,children:n,onClick:t,onClose:o,fullsize:s=!1})=>{const m=o||t,E=x=>{x.stopPropagation(),x.preventDefault(),m()};return _.useEffect(()=>{if(e){const x=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${x}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,x)}}},[e]),e?i.jsxs(Kt,{onClick:t,children:[i.jsx("div",{className:"close",onClick:E,children:i.jsx(G,{path:Ct,size:2})}),i.jsx("div",{className:F("content",{fullsize:s}),onClick:x=>x.stopPropagation(),children:n})]}):null};let et=!0;const qt=e=>{et=!!e};let xe=!1,K=[],re=0;const se=100,Pe=50,Re=()=>{if(K.length===0||xe)return;const e=K.shift(),n=Date.now();n-re>=se?ie(e.level,e.message,e.metadata):(K.unshift(e),setTimeout(Re,se-(n-re)))},ie=(e,n,t=null)=>{if(!et)return;if(xe){K.length<Pe&&K.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const o=Date.now();if(o-re<se){K.length<Pe&&(K.push({level:e,message:n,metadata:t,timestamp:o}),K.length===1&&setTimeout(Re,se-(o-re)));return}setTimeout(async()=>{xe=!0,re=Date.now();try{const m=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,E={level:e,message:n,...t&&{metadata:t}};await W.create({timeout:2e3}).post(m,E)}catch{K.length>10&&(K=[])}finally{xe=!1,K.length>0&&setTimeout(Re,se)}},0)},ue=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},he=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},N={log:(...e)=>{const n=ue(e),t=he(e);n&&ie("INFO",n,t)},error:(...e)=>{console.error(...e);const n=ue(e),t=he(e);n&&ie("ERROR",n,t)},warn:(...e)=>{const n=ue(e),t=he(e);n&&ie("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=ue(e),t=he(e);n&&ie("INFO",n,t)}},Xt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Jt=()=>{const e=(n,t=void 0)=>{const o=Xt[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),SUPERVISOR_TOKEN:e("SUPERVISOR_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_API_KEY:e("WEATHER_API_KEY",""),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),GEOFOX_SECRET:e("GEOFOX_SECRET",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},tt=j.createContext(null),Qt=({children:e})=>{const[n,t]=j.useState(Jt),[o,s]=j.useState(!0);return j.useEffect(()=>{(async()=>{try{const x=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`,A=await W.get(x,{timeout:5e3});if(A.data&&typeof A.data=="object"){t(A.data);const f=Object.keys(A.data).filter(l=>l.startsWith("ENABLE_")&&A.data[l]).map(l=>l.replace("ENABLE_",""));N.info(`Configuration loaded from API endpoint. Enabled features: ${f.length>0?f.join(", "):"none"}`,{enabledFeatures:f,totalConfigKeys:Object.keys(A.data).length})}}catch(E){N.debug("Failed to load config from API, using defaults:",E.message)}finally{s(!1)}})()},[]),j.useEffect(()=>{const m=n.HASS_ACCESS_TOKEN||"";m&&typeof m=="string"&&m.trim()!==""&&m!=="undefined"&&m!=="null"?W.defaults.headers.common.Authorization=`Bearer ${m}`:delete W.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),j.useEffect(()=>{const m=n.ENABLE_LOGGING===!0;qt(m)},[n.ENABLE_LOGGING]),i.jsx(tt.Provider,{value:{config:n,loading:o},children:e})},B=()=>{const e=j.useContext(tt);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config};let ne=0,Ee=0,Q=0;const te=[],nt=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},Zt=(e,n="")=>{const t=nt(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;Q++,ne++,te.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),te.length>10&&te.shift();const s=[];return n&&s.push(`[${n}]`),s.push("🔴 Axios API Error:"),s.push(`Message: ${t.message}`),t.url&&s.push(`URL: ${t.url}`),t.status&&s.push(`HTTP Status: ${t.status}`),t.code&&s.push(`Error Code: ${t.code}`),t.isNetworkError&&(s.push("Type: Network Error (no response received)"),t.readyState!==void 0&&s.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&s.push("Type: Timeout Error"),t.config&&(s.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),s.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&s.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&s.push("Response Data:",t.responseData),s.push(`Request Stats: ${Ee} success, ${Q} errors (${ne} total)`),Q>3&&te.length>0&&s.push("Recent errors pattern:",te.slice(-5)),N.error(...s),t},en=e=>{Ee++,ne++,(ne%10===0||Q>0)&&N.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:ne,stats:`${Ee} success, ${Q} errors`}),Q>0&&ne%10===0&&Ee>Q&&(Q=0,te.length=0)},Y=e=>{const n=nt(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};let ke=null;const Me=e=>{ke=e};W.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,N.debug("Axios Defaults State:",{baseURL:W.defaults.baseURL,timeout:W.defaults.timeout,hasAuthHeader:!!W.defaults.headers?.common?.Authorization,authHeaderLength:W.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(W.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||N.error("Axios Request Setup Error:",e),Promise.reject(e)));W.interceptors.response.use(e=>(e.config&&en(e.config),e),e=>{const n=e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"),t=e.config?.metadata?.skipConnectionCheck===!0;if(!n){const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(Zt(e,o),e.config?.metadata){const s=Date.now()-e.config.metadata.startTime;N.error("Request Duration:",`${s}ms`,"Request ID:",e.config.metadata.requestId)}typeof window<"u"&&window.location&&N.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href}),!t&&ke&&!e.response&&(e.code==="ERR_NETWORK"||e.code==="ECONNABORTED"||e.code==="ERR_CANCELED")&&ke()}return Promise.reject(e)});const V=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const o=n.INGRESS_URL||"";if(o&&typeof o=="string"&&o.trim()!==""){const m=t.startsWith("/")?t.slice(1):t;return`${window.location.origin}${o}${m}`}const s=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${s}${t}`}return t}},oe=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},fe=(e={})=>{const n=oe(e);if(!n)return"";const t=n.startsWith("https://")?"wss://":"ws://",o=n.replace(/^https?:\/\//,"");return`${t}${o}/api/websocket`},tn=()=>{const e=B(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[o,s]=_.useState(null),[m,E]=_.useState(!1),x=n&&t,A=t?V(`/api/states/${t}`,e):null;return _.useEffect(()=>{if(!x||!A)return;let f=!0;const l=new AbortController;return W(A,{signal:l.signal}).then(y=>{f&&(y.data.attributes.store!==void 0?s(y.data.attributes.store):s([]),E(!1))}).catch(y=>{f&&!l.signal.aborted&&(E(Y(y)),s([]))}),()=>{f=!1,l.abort()}},[x,A,n,t]),[o,m]},nn=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=V(`/api/states/${t}`,n);W.post(o,{state:new Date,attributes:{store:e}}).catch(s=>{N.error("Failed to store everyday calendar data:",s)})},$e=D.div` 

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
`,on=({on:e,month:n,day:t})=>{const[o,s]=e,m=o.indexOf(`${n}-${t}`),E=m>-1,x=()=>{s(E?o.toSpliced(m,1):[...o,`${n}-${t}`])};return i.jsx("div",{className:F("dot",{on:E}),onClick:()=>x()})},rn=()=>{const e=B();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let f=1;f<13;f++){const l=new Date(t,f,0).getDate();for(let y=1;y<=l;y++)o.push({month:f,day:y})}const s=Array.from({length:31},(f,l)=>l+1),m=Array.from({length:12},(f,l)=>l+1),E=_.useState(void 0),[x,A]=tn();return _.useEffect(()=>{x!==null&&E[1](x)},[x]),_.useEffect(()=>{E[0]!==void 0&&nn(E[0],e)},[E[0],e]),E[0]!==void 0?i.jsxs($e,{children:[i.jsx("h2",{children:"Jeden Tag ein bißchen"}),A!==!1&&i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:A instanceof Error?A.message:String(A)})]}),i.jsxs("div",{className:"calendar",children:[s.map((f,l)=>i.jsx("div",{style:{gridArea:`${f+1} / 1 / ${f+1} / 1`},children:f},l)),m.map((f,l)=>i.jsx("div",{style:{gridArea:`1 / ${f+1} / 1 / ${f+1}`},children:f},l)),o.map((f,l)=>i.jsx("div",{style:{gridArea:`${f.day+1} / ${f.month+1} / ${f.day+1} / ${f.month+1}`},children:i.jsx(on,{on:E,month:f.month,day:f.day})},l))]})]}):i.jsx($e,{className:"loading",children:A!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:A instanceof Error?A.message:String(A)})]}):i.jsx(Ze,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},sn=D.div`
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
  }`,an=()=>{const[e,n]=_.useState(H.now()),[t,o]=_.useState(!1),s=j.useCallback(()=>o(!0),[]),m=j.useCallback(()=>o(!1),[]);return _.useEffect(()=>{const E=setInterval(()=>n(H.now()),1e3);return()=>clearInterval(E)},[]),i.jsxs(i.Fragment,{children:[i.jsxs(sn,{onClick:s,children:[e.toFormat("HH"),i.jsx("span",{children:":"}),e.toFormat("mm")]}),i.jsx(de,{visible:t,onClick:m,fullsize:!0,children:i.jsx(rn,{})})]})},cn=j.memo(an),ln=3e3,dn=3e4,fn=5e3,un=()=>{const[e,n]=j.useState(!0),t=j.useRef(null),o=j.useRef(null),s=j.useRef(!1),m=j.useRef(Date.now()),E=j.useRef(!0);j.useEffect(()=>{E.current=e},[e]);const x=j.useCallback(async()=>{if(!s.current){s.current=!0,m.current=Date.now();try{const l=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`;await W.get(l,{timeout:fn,metadata:{skipConnectionCheck:!0}}),E.current||N.info("Connection restored - backend is reachable"),n(!0),s.current=!1,o.current&&(clearInterval(o.current),o.current=null)}catch(f){!f.response&&(f.code==="ERR_NETWORK"||f.code==="ECONNABORTED")?(E.current&&N.warn("Connection lost - backend is not reachable"),n(!1),s.current=!1,o.current||(o.current=setInterval(()=>{x()},dn))):(E.current||N.info("Connection restored - backend responded (with error)"),n(!0),s.current=!1,o.current&&(clearInterval(o.current),o.current=null))}}},[]),A=j.useCallback(()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{x()},ln)},[x]);return j.useEffect(()=>{const f=()=>{document.visibilityState==="visible"&&A()};return document.addEventListener("visibilitychange",f),()=>{document.removeEventListener("visibilitychange",f)}},[A]),j.useEffect(()=>{const f=setTimeout(()=>{x()},1e3);return()=>{clearTimeout(f)}},[]),j.useEffect(()=>()=>{t.current&&clearTimeout(t.current),o.current&&clearInterval(o.current)},[]),{isConnected:e,triggerCheck:A}},ot=j.createContext(null),hn=({children:e})=>{const n=un();return j.useEffect(()=>(Me(n.triggerCheck),()=>{Me(null)}),[n.triggerCheck]),i.jsx(ot.Provider,{value:n,children:e})},Oe=()=>{const e=j.useContext(ot);if(!e)throw new Error("useConnectionStateContext must be used within ConnectionStateProvider");return e},pn=()=>{const e=B(),{isConnected:n}=Oe(),t=e.ENABLE_DOORBELL||!1,o=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const s=e.HASS_ACCESS_TOKEN||"",m=e.SUPERVISOR_TOKEN||"",[E,x]=_.useState("off"),[A,f]=_.useState(!1),l=t&&o,y=o?V(`/api/states/${o}`,e):null;return _.useEffect(()=>{if(!l||!y)return;let u=!0;const w=new AbortController;return W(y,{signal:w.signal}).then(c=>{u&&(x(c.data.state),f(!1))}).catch(c=>{u&&!w.signal.aborted&&f(Y(c))}),()=>{u=!1,w.abort()}},[l,y,t,o]),_.useEffect(()=>{let u=null,w=null,c=!0,h=null,a=null,d=!1,r=null,p=null;async function b(){if(!l||!o||!c||!n||d)return;if(u){try{r&&(u.removeEventListener("ready",r),r=null),p&&(u.removeEventListener("disconnected",p),p=null),w&&(w(),w=null),u.close()}catch{}u=null}d=!0;const g=oe(e),S=m||s||"";if(!S){d=!1;return}let T;try{T=ce(g,S),c&&f(!1)}catch(C){c&&(N.error("Failed to create WebSocket auth:",C),f(C instanceof Error?C.message:String(C))),d=!1;return}const k=fe(e);if(!k){N.error("Failed to build WebSocket URL - cannot connect"),c&&f("WebSocket URL konnte nicht erstellt werden."),d=!1;return}const L=()=>new Promise((C,R)=>{const O=new WebSocket(k);O.onopen=()=>C(O),O.onerror=v=>R(v)});try{u=await le({auth:T,createSocket:L}),r=()=>{c&&(N.debug("WebSocket connection ready for doorbell"),f(!1))},u.addEventListener("ready",r),p=()=>{c&&!d&&(N.debug("WebSocket disconnected for doorbell"),u=null,w=null,r=null,p=null,h&&(clearTimeout(h),h=null),n?h=setTimeout(()=>{c&&!d&&n&&(N.debug("Attempting to reconnect WebSocket for doorbell"),b())},2e3):N.debug("Skipping reconnection for doorbell - waiting for backend connection"))},u.addEventListener("disconnected",p);const C=R=>{if(c){const O=R.variables.trigger.to_state.state;x(O)}};w=await u.subscribeMessage(C,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:o}}),d=!1}catch(C){d=!1,c&&(N.error("Failed to setup WebSocket connection:",C),N.error("WebSocket error details:",{message:C instanceof Error?C.message:String(C),code:C.code,name:C.name,wsUrl:T?.wsUrl,host:g,tokenLength:S?S.length:0}),C.code===2&&N.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),f(C instanceof Error?C.message:String(C)),n&&(h=setTimeout(()=>{c&&!d&&n&&b()},2e3)))}}return n&&b(),n&&!u&&!d&&(a&&(clearTimeout(a),a=null),a=setTimeout(()=>{c&&n&&!u&&!d&&b()},1e3)),()=>{if(c=!1,d=!1,h&&(clearTimeout(h),h=null),a&&(clearTimeout(a),a=null),u)try{r&&u.removeEventListener("ready",r),p&&u.removeEventListener("disconnected",p)}catch{}if(w){try{w()}catch{}w=null}if(u){try{u.close()}catch{}u=null}}},[l,n]),[E,A]},mn=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&W.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to unlatch front door:",t)})},I={portrait:360/480,landscape:1920/1072,wide:770/216};function gn(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function it(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,s=gn(e);return o===1?xn(e[0],n,t):o===2?En(s,e,n,t):o===3?wn(s,e,n,t):o===4?yn(s,e,n,t):{videos:[],totalArea:0,efficiency:0}}function xn(e,n,t){const o=I[e.orientation];let s,m;const E=n/t;return o>E?(s=n,m=n/o):(m=t,s=t*o),{videos:[{x:(n-s)/2,y:(t-m)/2,width:s,height:m,orientation:e.orientation}],totalArea:s*m,efficiency:s*m/(n*t)*100}}function En(e,n,t,o){if(e.portrait>0)return De(e,n,t,o);const s=[];e.landscape>0&&s.push("landscape"),e.wide>0&&s.push("wide");const m=s[0]||n[0].orientation,E=s[1]||n[1].orientation,x=I[m],A=I[E];if(e.landscape===1&&e.wide===1){const c=I.landscape,h=I.wide,a=t,d=a/c,r=a/h,p=d+r;let b,g,S;if(p<=o)b=d,g=r,S=a;else{const O=o/p;b=d*O,g=r*O,S=g*h}const T=(t-S)/2,L=X(n,[{x:T,y:0,width:S,height:g,orientation:"wide"},{x:T,y:g,width:S,height:b,orientation:"landscape"}]),C=S*b+S*g,R=C/(t*o)*100;return{videos:L,totalArea:C,efficiency:R}}if(e.wide===2){const c=I.wide,h=t,a=h/c,d=a*2;let r;d<=o?r=a:r=o/2;const b=X(n,[{x:0,y:0,width:h,height:r,orientation:"wide"},{x:0,y:r,width:h,height:r,orientation:"wide"}]),g=h*r*2,S=g/(t*o)*100;return{videos:b,totalArea:g,efficiency:S}}const f=[()=>{const c=t,h=c/2,a=c/2,d=h/x,r=a/A;return Math.max(d,r)<=o?{positions:[{x:0,y:(o-d)/2,width:h,height:d,orientation:m},{x:h,y:(o-r)/2,width:a,height:r,orientation:E}],totalArea:h*d+a*r}:null},()=>{const c=o,h=c/2,a=c/2,d=h*x,r=a*A;return Math.max(d,r)<=t?{positions:[{x:(t-d)/2,y:0,width:d,height:h,orientation:m},{x:(t-r)/2,y:h,width:r,height:a,orientation:E}],totalArea:d*h+r*a}:null}];let l=null,y=0;for(const c of f){const h=c();h&&h.totalArea>y&&(y=h.totalArea,l=h)}if(!l){const c=t/2,h=t/2,a=Math.min(c/x,o),d=Math.min(h/A,o);l={positions:[{x:0,y:(o-a)/2,width:c,height:a,orientation:m},{x:c,y:(o-d)/2,width:h,height:d,orientation:E}],totalArea:c*a+h*d}}const u=X(n,l.positions),w=l.totalArea/(t*o)*100;return{videos:u,totalArea:l.totalArea,efficiency:w}}function De(e,n,t,o){const s=e.portrait,m=n.length-s;if((s===3||s===4)&&m===0){const w=I.portrait,c=t/s,h=c/w,a=h<o?(o-h)/2:0,d=Math.min(h,o),r=[];let p=0;for(let S=0;S<s;S++){const T=Math.min(c,d*w);r.push({x:S*c+(c-T)/2,y:a,width:T,height:d,orientation:"portrait"}),p+=T*d}const b=X(n,r),g=p/(t*o)*100;return{videos:b,totalArea:p,efficiency:g}}n.filter(w=>w.orientation==="portrait");const E=n.filter(w=>w.orientation!=="portrait"),x=s>0?Math.min(t*.4,t*.5):0,A=t-x,f=[];let l=0;if(s===2&&m===0){const w=I.portrait,c=t/2,h=c/w,a=o;let d,r;h<=a?(r=h,d=c):(r=a,d=a*w);const p=(o-r)/2;f.push({x:(c-d)/2,y:p,width:d,height:r,orientation:"portrait"}),f.push({x:c+(c-d)/2,y:p,width:d,height:r,orientation:"portrait"}),l=d*r*2}else if(s===1&&m===1){const w=I.portrait,c=E[0],h=I[c.orientation],a=w+h,d=t*(w/a),r=t*(h/a),p=d/w,b=r/h,g=Math.min(o,Math.min(p,b)),S=(o-g)/2;f.push({x:0,y:S,width:d,height:g,orientation:"portrait"}),f.push({x:d,y:S,width:r,height:g,orientation:c.orientation}),l=d*g+r*g}else if(s===1&&m===2&&e.landscape===1&&e.wide===1){const w=I.portrait,c=I.wide,h=I.landscape,a=o,d=o*w,r=o/(1/c+1/h),p=r/c,b=r/h,g=d+r;if(Math.abs(g-t)<.1)f.push({x:0,y:0,width:d,height:a,orientation:"portrait"}),l+=d*a,E.find(L=>L.orientation==="wide")&&(f.push({x:0+d,y:0,width:r,height:p,orientation:"wide"}),l+=r*p),E.find(L=>L.orientation==="landscape")&&(f.push({x:0+d,y:p,width:r,height:b,orientation:"landscape"}),l+=r*b);else{const S=t/g,T=d*S,k=T/w,L=r*S,C=o/k;let R=T*C,O=o,v=L*C,P=v/c,M=v/h,U=R+v;if(U>t){const J=t/U;R=R*J,O=R/w,v=v*J,P=v/c,M=v/h,U=R+v,U>t&&(v=t-R,P=v/c,M=v/h)}const $=R+v;if($>t){const J=t/$;R=R*J,O=R/w,v=v*J,P=v/c,M=v/h}const z=0;f.push({x:z,y:0,width:R,height:O,orientation:"portrait"}),l+=R*O,E.find(J=>J.orientation==="wide")&&(f.push({x:z+R,y:0,width:v,height:P,orientation:"wide"}),l+=v*P),E.find(J=>J.orientation==="landscape")&&(f.push({x:z+R,y:P,width:v,height:M,orientation:"landscape"}),l+=v*M)}}else if(s===1&&m===3){const w=I.portrait,c=o,h=c*w,a=h,d=t-a;f.push({x:0,y:0,width:h,height:c,orientation:"portrait"}),l+=h*c;const r=o/3;for(let p=0;p<E.length;p++){const b=E[p],g=I[b.orientation],S=r,T=d;let k,L;T/g<=S?(k=T,L=k/g):(L=S,k=L*g);const C=p*r+(r-L)/2;f.push({x:a+(d-k)/2,y:C,width:k,height:L,orientation:b.orientation}),l+=k*L}}else if(s===2&&m===1){const w=I.portrait,c=E[0],h=I[c.orientation],a=o/2,d=a*w,r=t-d,p=o*h;let b,g;p<=r?(g=o,b=g*h):(b=r,g=b/h);const S=d,T=a,k=(o-g)/2,L=(o/2-T)/2,C=o/2+(o/2-T)/2;f.push({x:0,y:k,width:b,height:g,orientation:c.orientation}),l+=b*g,f.push({x:r,y:L,width:S,height:T,orientation:"portrait"}),l+=S*T,f.push({x:r,y:C,width:S,height:T,orientation:"portrait"}),l+=S*T}else if(s===1&&m===2){const w=I.portrait,c=o,h=c*w,a=h,d=t-a;f.push({x:0,y:0,width:h,height:c,orientation:"portrait"}),l+=h*c;const r=o/2;for(let p=0;p<E.length;p++){const b=E[p],g=I[b.orientation],S=r,T=d;let k,L;T/g<=S?(k=T,L=k/g):(L=S,k=L*g);const C=p*r+(r-L)/2;f.push({x:a+(d-k)/2,y:C,width:k,height:L,orientation:b.orientation}),l+=k*L}}else{const w=s;if(w>0){const c=o/w,h=I.portrait;for(let a=0;a<w;a++){const d=Math.min(c,x/h),r=d*h,p=a*c+(c-d)/2;f.push({x:(x-r)/2,y:p,width:r,height:d,orientation:"portrait"}),l+=r*d}}if(E.length>0){const c=o/E.length;for(let h=0;h<E.length;h++){const a=E[h],d=I[a.orientation],r=c,p=A;let b,g;p/d<=r?(b=p,g=b/d):(g=r,b=g*d);const S=h*c+(c-g)/2;f.push({x:x+(A-b)/2,y:S,width:b,height:g,orientation:a.orientation}),l+=b*g}}}const y=X(n,f),u=l/(t*o)*100;return{videos:y,totalArea:l,efficiency:u}}function X(e,n){const t=new Array(n.length),o=new Set,s=new Set;for(let x=0;x<n.length;x++){const A=n[x];for(let f=0;f<e.length;f++)if(!o.has(f)&&e[f].orientation===A.orientation){t[x]={...A,orientation:e[f].orientation},o.add(f),s.add(x);break}}const m=[];for(let x=0;x<n.length;x++)s.has(x)||m.push(x);let E=0;for(let x=0;x<e.length;x++)if(!o.has(x)&&E<m.length){const A=m[E];t[A]={...n[A],orientation:e[x].orientation},E++}return t}function wn(e,n,t,o){if(e.portrait>0)return De(e,n,t,o);if(e.landscape===2&&e.wide===1){const a=I.landscape,d=I.wide,r=t,p=r/d,b=o-p,g=t/2,S=g/a;let T,k,L,C;if(p<=o&&S<=b)T=r,k=p,L=g,C=S;else{const $=o/(p+S),z=Math.min(1,$);k=p*z,T=k*d,C=S*z,L=C*a}const R=(t-T)/2,O=k+(b-C)/2,P=X(n,[{x:R,y:0,width:T,height:k,orientation:"wide"},{x:0,y:O,width:L,height:C,orientation:"landscape"},{x:L,y:O,width:L,height:C,orientation:"landscape"}]),M=T*k+L*C*2,U=M/(t*o)*100;return{videos:P,totalArea:M,efficiency:U}}if(e.landscape===1&&e.wide===2){const a=I.landscape,d=I.wide,r=t/2,p=r/d,g=o-p,S=g*a;let T,k,L,C;if(p<=o&&S<=t&&p+g<=o)T=r,k=p,L=S,C=g;else{const z=p+g,Ae=o/z;T=r,k=p*Ae,C=g*Ae,L=C*a}const R=0,O=t/2,v=(t-L)/2,M=X(n,[{x:R,y:0,width:T,height:k,orientation:"wide"},{x:O,y:0,width:T,height:k,orientation:"wide"},{x:v,y:k,width:L,height:C,orientation:"landscape"}]),U=T*k*2+L*C,$=U/(t*o)*100;return{videos:M,totalArea:U,efficiency:$}}if(e.wide===3){const a=I.wide,d=t/2,r=d/a,b=o-r,g=b*a;let S,T,k,L;if(r<=o&&g<=t&&r+b<=o)S=d,T=r,k=g,L=b;else{const $=r+b,z=o/$;S=d,T=r*z,L=b*z,k=L*a,k>t&&(k=t,L=k/a)}const C=0,R=t/2,O=(t-k)/2,P=X(n,[{x:C,y:0,width:S,height:T,orientation:"wide"},{x:R,y:0,width:S,height:T,orientation:"wide"},{x:O,y:T,width:k,height:L,orientation:"wide"}]),M=S*T*2+k*L,U=M/(t*o)*100;return{videos:P,totalArea:M,efficiency:U}}if(e.landscape===3){const a=I.landscape,d=t/(a*1.5),r=Math.min(o,d),p=r/2,b=r,g=p*a,S=b*a,T=(o-r)/2,k=[{x:0,y:T,width:g,height:p,orientation:"landscape"},{x:0,y:T+p,width:g,height:p,orientation:"landscape"},{x:g,y:T,width:S,height:b,orientation:"landscape"}],L=X(n,k),C=g*r+S*r,R=C/(t*o)*100;return{videos:L,totalArea:C,efficiency:R}}const s=[];if(e.landscape>0)for(let a=0;a<e.landscape;a++)s.push("landscape");if(e.wide>0)for(let a=0;a<e.wide;a++)s.push("wide");const m=s[0]||n[0].orientation,E=s[1]||n[1].orientation,x=s[2]||n[2].orientation,A=I[m],f=I[E],l=I[x],y=[()=>{const a=t*.6,d=t*.4,r=a/A,p=d/f,b=d/l,g=p+b;return r<=o&&g<=o?{positions:[{x:0,y:(o-r)/2,width:a,height:r,orientation:m},{x:a,y:0,width:d,height:p,orientation:E},{x:a,y:p,width:d,height:b,orientation:x}],totalArea:a*r+d*p+d*b}:null},()=>{const a=o*.5,d=o*.5,r=a*A,p=a*f,b=d*l;return r+p<=t&&b<=t?{positions:[{x:0,y:0,width:r,height:a,orientation:m},{x:r,y:0,width:p,height:a,orientation:E},{x:(t-b)/2,y:a,width:b,height:d,orientation:x}],totalArea:r*a+p*a+b*d}:null},()=>{const a=t/3,d=a/A,r=a/f,p=a/l;return Math.max(d,r,p)<=o?{positions:[{x:0,y:(o-d)/2,width:a,height:d,orientation:m},{x:a,y:(o-r)/2,width:a,height:r,orientation:E},{x:a*2,y:(o-p)/2,width:a,height:p,orientation:x}],totalArea:a*d+a*r+a*p}:null}];let u=null,w=0;for(const a of y){const d=a();d&&d.totalArea>w&&(w=d.totalArea,u=d)}if(!u){const a=t/3,d=Math.min(a/A,o),r=Math.min(a/f,o),p=Math.min(a/l,o);u={positions:[{x:0,y:(o-d)/2,width:a,height:d,orientation:m},{x:a,y:(o-r)/2,width:a,height:r,orientation:E},{x:a*2,y:(o-p)/2,width:a,height:p,orientation:x}],totalArea:a*d+a*r+a*p}}const c=X(n,u.positions),h=u.totalArea/(t*o)*100;return{videos:c,totalArea:u.totalArea,efficiency:h}}function yn(e,n,t,o){if(e.portrait>0)return De(e,n,t,o);const s=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)s.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)s.push("wide");const m=s[0]||n[0].orientation,E=s[1]||n[1].orientation,x=s[2]||n[2].orientation,A=s[3]||n[3].orientation,f=I[m],l=I[E],y=I[x],u=I[A],w=[()=>{const r=t/2,p=o/2,b=Math.min(r,p*f),g=b/f,S=Math.min(r,p*l),T=S/l,k=Math.min(r,p*y),L=k/y,C=Math.min(r,p*u),R=C/u;return{positions:[{x:(r-b)/2,y:(p-g)/2,width:b,height:g,orientation:m},{x:r+(r-S)/2,y:(p-T)/2,width:S,height:T,orientation:E},{x:(r-k)/2,y:p+(p-L)/2,width:k,height:L,orientation:x},{x:r+(r-C)/2,y:p+(p-R)/2,width:C,height:R,orientation:A}],totalArea:b*g+S*T+k*L+C*R}},()=>{const r=t*.6,p=t*.4,b=r/f,g=o/3,S=Math.min(p,g*l),T=S/l,k=Math.min(p,g*y),L=k/y,C=Math.min(p,g*u),R=C/u;return b<=o?{positions:[{x:0,y:(o-b)/2,width:r,height:b,orientation:m},{x:r,y:0,width:S,height:T,orientation:E},{x:r,y:g,width:k,height:L,orientation:x},{x:r,y:g*2,width:C,height:R,orientation:A}],totalArea:r*b+S*T+k*L+C*R}:null},()=>{const r=t/4,p=r/f,b=r/l,g=r/y,S=r/u;return Math.max(p,b,g,S)<=o?{positions:[{x:0,y:(o-p)/2,width:r,height:p,orientation:m},{x:r,y:(o-b)/2,width:r,height:b,orientation:E},{x:r*2,y:(o-g)/2,width:r,height:g,orientation:x},{x:r*3,y:(o-S)/2,width:r,height:S,orientation:A}],totalArea:r*p+r*b+r*g+r*S}:null}];let c=null,h=0;for(const r of w){const p=r();p&&p.totalArea>h&&(h=p.totalArea,c=p)}if(!c){const r=t/2,p=o/2,b=Math.min(p,r/f),g=Math.min(p,r/l),S=Math.min(p,r/y),T=Math.min(p,r/u);c={positions:[{x:(r-r)/2,y:(p-b)/2,width:r,height:b,orientation:m},{x:r+(r-r)/2,y:(p-g)/2,width:r,height:g,orientation:E},{x:(r-r)/2,y:p+(p-S)/2,width:r,height:S,orientation:x},{x:r+(r-r)/2,y:p+(p-T)/2,width:r,height:T,orientation:A}],totalArea:r*b+r*g+r*S+r*T}}const a=X(n,c.positions),d=c.totalArea/(t*o)*100;return{videos:a,totalArea:c.totalArea,efficiency:d}}const bn=e=>{const n=B();n.HASS_HOST;const t=n.HASS_ACCESS_TOKEN||"",o=n.SUPERVISOR_TOKEN||"",[s,m]=_.useState({}),[E,x]=_.useState(!0),[A,f]=_.useState(null);return _.useEffect(()=>{if(!e||e.length===0){x(!1);return}let l=!0;async function y(){x(!0),f(null);try{const u=e.map(async c=>{try{const h=V(`/api/states/${c}`,n),d=(await W(h)).data?.attributes?.access_token||null;return{entityId:c,accessToken:d}}catch(h){return N.error(`Failed to fetch access token for ${c}:`,h),{entityId:c,accessToken:null}}}),w=await Promise.all(u);if(l){const c={};w.forEach(({entityId:h,accessToken:a})=>{a&&(c[h]=a)}),m(c),x(!1)}}catch(u){l&&(N.error("Failed to fetch camera access tokens:",u),f(Y(u)),x(!1))}}return y(),()=>{l=!1}},[e?.length,e?.join(",")]),_.useEffect(()=>{if(!e||e.length===0)return;let l=!0,y=null;async function u(){if(l)try{const w=e.map(async h=>{try{const a=V(`/api/states/${h}`,n),r=(await W(a)).data?.attributes?.access_token||null;return{entityId:h,accessToken:r}}catch(a){return N.debug(`Failed to refresh access token for ${h}:`,a),null}}),c=await Promise.all(w);l&&m(h=>{const a={...h};return c.forEach(d=>{d&&d.accessToken&&(a[d.entityId]=d.accessToken)}),a})}catch{}}return y=setInterval(u,300*1e3),()=>{l=!1,y&&clearInterval(y)}},[e?.length,e?.join(",")]),_.useEffect(()=>{if(!e||e.length===0)return;let l=null,y=[],u=!0,w=null,c=0;const h=5;let a=!1,d=null,r=null;async function p(){if(a||!u)return;if(l){try{d&&(l.removeEventListener("ready",d),d=null),r&&(l.removeEventListener("disconnected",r),r=null),y.forEach(L=>{L&&L()}),y=[],l.close()}catch{}l=null}a=!0;const b=oe(n),g=o||t||"";if(!g){a=!1;return}let S;try{S=ce(b,g),u&&f(!1)}catch(L){u&&(N.error("Failed to create WebSocket auth for camera tokens:",L),f(L instanceof Error?L.message:String(L))),a=!1;return}const T=fe(n);if(!T){N.error("Failed to build WebSocket URL - cannot connect"),u&&f("WebSocket URL konnte nicht erstellt werden."),a=!1;return}const k=()=>new Promise((L,C)=>{const R=new WebSocket(T);R.onopen=()=>L(R),R.onerror=O=>C(O)});try{l=await le({auth:S,createSocket:k}),d=()=>{u&&(N.debug("WebSocket connection ready for camera tokens"),c=0,f(!1))},l.addEventListener("ready",d),r=()=>{if(u&&!a){if(N.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),w&&(clearTimeout(w),w=null),c>=h){N.warn(`Max reconnection attempts (${h}) reached for camera tokens, stopping reconnection`),u&&f("Verbindung verloren. Bitte Seite neu laden.");return}l=null,y=[],d=null,r=null;const L=Math.min(1e3*Math.pow(2,c),3e4);c++,w=setTimeout(()=>{u&&!a&&c<=h&&(N.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${c}/${h})`),p())},L)}},l.addEventListener("disconnected",r);for(const L of e){const C=O=>{if(u){const P=O.variables.trigger.to_state?.attributes?.access_token||null;m(M=>P?{...M,[L]:P}:M)}},R=await l.subscribeMessage(C,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:L}});y.push(R)}a=!1}catch(L){if(a=!1,u)if(N.error("Failed to setup WebSocket connection for camera tokens:",L),f(L instanceof Error?L.message:String(L)),c<h){const C=Math.min(1e3*Math.pow(2,c),3e4);c++,w=setTimeout(()=>{u&&!a&&c<=h&&p()},C)}else N.warn(`Max reconnection attempts (${h}) reached for camera tokens, stopping reconnection`),u&&f("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return p(),()=>{if(u=!1,a=!1,w&&(clearTimeout(w),w=null),l)try{d&&l.removeEventListener("ready",d),r&&l.removeEventListener("disconnected",r)}catch{}if(y.forEach(b=>{if(b)try{b()}catch{}}),y=[],l){try{l.close()}catch{}l=null}}},[e?.length,e?.join(",")]),[s,E,A]},Sn=(e,n=null,t=null)=>{if(!e)return null;let o=t||"";if(!o&&typeof window<"u"&&window.location){const m=window.location.protocol,E=window.location.hostname,x=window.location.port?`:${window.location.port}`:"";o=`${m}//${E}${x}`}if(!o)return N.warn("HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL"),null;const s=`${o}/api/camera_proxy_stream/${e}`;return n?`${s}?token=${encodeURIComponent(n)}`:s},Ve=45e3,An=D.div`
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
`,Tn=()=>{const e=B(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[];if(!n)return null;const[o,s]=_.useState(!1),[m]=pn(),[E,x]=_.useState(void 0),[A,f]=_.useState(100),[l,y]=_.useState("0"),u=_.useMemo(()=>t.map(d=>d.entity_id).filter(Boolean),[t]),[w]=bn(u);_.useEffect(()=>{if(m==="off"&&o){const d=window.setTimeout(()=>{s(!1),x(void 0)},Ve);return x(d),y(Ve+"ms"),f(0),()=>{d&&window.clearTimeout(d)}}else m==="on"&&(y(0),f(100),s(!0))},[m,o]),_.useEffect(()=>{m==="on"&&E!==void 0&&(window.clearTimeout(E),y(0),f(100),x(void 0))},[E,m]);const[c,h]=_.useState(null),a=()=>{c===null?h("confirm"):c==="confirm"&&(h("opening"),mn(e),setTimeout(()=>h(null),2e3))};return _.useEffect(()=>{if(c==="confirm"){const d=setTimeout(()=>{h(null)},3e3);return()=>{clearTimeout(d)}}},[c]),_.useEffect(()=>{o||h(null)},[o]),i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:()=>s(d=>!d),children:"CCTV"}),i.jsx(de,{visible:o,onClick:a,onClose:()=>{s(!1),h(null)},fullsize:!0,children:i.jsxs(An,{onClick:a,children:[i.jsx(st,{completed:A,height:10,bgColor:E===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:l,transitionTimingFunction:"linear"}),i.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const d=t.map(T=>({orientation:T.orientation||"landscape"})),r=window.innerWidth,p=window.innerHeight-10,b=it(d,r,p),g={portrait:t.filter(T=>(T.orientation||"landscape")==="portrait"),landscape:t.filter(T=>(T.orientation||"landscape")==="landscape"),wide:t.filter(T=>T.orientation==="wide")},S={portrait:0,landscape:0,wide:0};return b.videos.map((T,k)=>{const L=T.orientation,C=S[L],R=g[L][C];if(!R)return null;S[L]++;const O=w[R.entity_id]||null,v=Sn(R.entity_id,O,e.HASS_HOST);return v?i.jsxs("div",{className:"video-container",style:{left:`${T.x}px`,top:`${T.y}px`,width:`${T.width}px`,height:`${T.height}px`},children:[i.jsx("img",{src:v,className:L,alt:"Camera stream",crossOrigin:"anonymous"},`${R.entity_id}-${k}`),i.jsx("div",{className:"video-overlay",onClick:()=>a()})]},`${L}-${C}-${k}`):null})})()}),c==="confirm"&&i.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),c==="opening"&&i.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},Ln=D.div`
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

`,Cn=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>i.jsxs(Ln,{children:[i.jsxs("div",{className:"buttons",children:[i.jsx(G,{path:_t,size:"32px",color:"#ffffff",onClick:n}),i.jsx(G,{path:Rt,size:"32px",color:"#ffffff",onClick:e}),i.jsx("button",{onClick:t,children:"Today"}),i.jsx(Tn,{})]}),i.jsx(cn,{}),i.jsx(G,{path:kt,size:"32px",color:"#ffffff",className:F("indicator")})]}),_n=j.memo(Cn),Rn=6e4,Ie=(e=Rn,n=void 0)=>{const[t,o]=_.useState(!0);return _.useEffect(()=>{const s=setInterval(()=>{o(m=>!m)},e);return()=>{clearInterval(s)}},[e,n]),t},kn={mdiDelete:Nt,mdiCake:jt},jn=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return kn[n]||void 0},Nn=(e,n,t,o,s,m)=>W(s(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:1e4,signal:m}).then(E=>{!E.data||!Array.isArray(E.data)||E.data.forEach(x=>{const A="dateTime"in x.start?H.fromISO(x.start.dateTime):H.fromSQL(x.start.date);let f;"dateTime"in x.end?f=Math.floor(H.fromISO(x.end.dateTime).diff(n,"days").as("days")):f=Math.floor(H.fromSQL(x.end.date).diff(n,"days").as("days"))-1;const l=Math.floor(A.diff(n,"days").as("days"));f>=o.length&&(f=o.length-1);const y="dateTime"in x.start?"events":"allDay";if(l>=0&&l<o.length)for(let u=l;u<=f;u++)o[u][y]=[...o[u][y],{...x,icon:e.icon}]})}).catch(E=>{if(!(W.isCancel(E)||E.name==="AbortError"||E.code==="ERR_CANCELED"))throw E}),Be=new Map,vn=300*1e3,On=e=>e.toISODate(),Dn=(e,n,t,o,s,m,E,x,A)=>{const f=[0,1,2,3,4,5].map(c=>e.plus({days:c}).startOf("day"));f[6]=e.plus({days:6}).endOf("day");const l=On(e),y=Be.get(l);if(y&&Date.now()-y.timestamp<vn){A.current&&t(y.data);return}const u=f.map(c=>({date:c,allDay:[],events:[]}));if(!E||E.length===0){A.current&&(t(u),o(!1));return}const w=new AbortController;s.current&&s.current.abort(),s.current=w;try{A.current&&o(!0);const c=E.map(h=>Nn(h,f[0],f[6],u,x,w.signal));Promise.all(c).then(()=>{A.current&&!w.signal.aborted&&(Be.set(l,{data:u,timestamp:Date.now()}),t(u),m(!1))}).catch(h=>{A.current&&!w.signal.aborted&&m(Y(h))}).finally(()=>{A.current&&!w.signal.aborted&&o(!1)})}catch(c){A.current&&!w.signal.aborted&&(m(Y(c)),o(!1))}},Ue=[],In=e=>{const n=B(),t=n.CALENDARS||[],o=_.useMemo(()=>t.map(a=>({name:a.name,icon:jn(a.icon)})),[t]),s=_.useCallback(a=>V(`/api/calendars/${a}`,n),[n]),m=_.useCallback((a,d)=>`${s(a)}?${Yt.stringify(d)}`,[s]),[E,x]=_.useState(Ue),[A,f]=_.useState(!1),[l,y]=_.useState(!1),[u,w]=_.useState(null),c=j.useRef(null),h=j.useRef(!0);return Ie(6e4,"Calendar"),_.useEffect(()=>(h.current=!0,e!==void 0&&((u===null||!u.equals(e))&&(x(Ue),w(e)),Dn(e,E,x,f,c,y,o,m,h)),()=>{h.current=!1,c.current&&c.current.abort()}),[e,o]),[E,l]};function ae(e){const[n,t]=_.useState(!1);function o({key:m}){m===e&&t(!0)}const s=({key:m})=>{m===e&&t(!1)};return _.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",s)}),[e]),n}const Wn=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return H.fromJSDate(o)},Pn=e=>{const n=()=>e(x=>x.plus({days:7})),t=ae("ArrowRight");_.useEffect(()=>{t&&n()},[t]);const o=()=>e(x=>x.minus({days:7})),s=ae("ArrowLeft");_.useEffect(()=>{s&&o()},[s]);const m=()=>e(Wn()),E=ae("t");return _.useEffect(()=>{E&&m()},[E]),{nextWeek:n,previousWeek:o,startWeekWithToday:m}},Mn=e=>{const[n,t]=j.useState(0),[o,s]=j.useState(0),m=50;return{onTouchStart:f=>{s(0),t(f.targetTouches[0].clientX)},onTouchMove:f=>s(f.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const f=n-o,l=f>m,y=f<-m;l&&e.onSwipedLeft(),y&&e.onSwipedRight()}}},He=e=>H.fromISO(e).toLocaleString(H.TIME_24_SIMPLE),Le=e=>e.toFormat("c")>=6,Ce=e=>e.hasSame(H.now(),"day"),$n=D.div`
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
`,Vn=()=>{const[e,n]=_.useState(void 0),[t,o]=In(e),{nextWeek:s,previousWeek:m,startWeekWithToday:E}=Pn(n);_.useEffect(()=>{E()},[]);const x=Mn({onSwipedLeft:()=>s(),onSwipedRight:()=>m()}),A=j.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),f=j.useMemo(()=>t.slice(0,7),[t]);return i.jsxs($n,{...x,children:[i.jsx(_n,{nextWeek:s,previousWeek:m,startWeekWithToday:E}),i.jsxs("div",{className:"schedule",children:[f.map((l,y)=>i.jsx("div",{className:F({weekend:Le(l.date),today:Ce(l.date)},"caption"),children:i.jsx("h2",{children:l.date.toLocaleString(A)})},y)),f.map((l,y)=>i.jsx("div",{className:F("allDayRow",{weekend:Le(l.date),today:Ce(l.date)}),children:l.allDay.map((u,w)=>i.jsx("div",{className:"allDayEvent",children:u.summary},w))},y)),f.map((l,y)=>i.jsx("div",{className:F("eventRow",{weekend:Le(l.date),today:Ce(l.date)}),children:l.events.map((u,w)=>i.jsxs("div",{className:"event",children:[i.jsx("div",{children:u.summary}),i.jsxs("h3",{children:[u.icon&&i.jsx(G,{path:u.icon,size:"1rem",color:"#ffffff"}),He(u.start.dateTime)," - ",He(u.end.dateTime)]})]},w))},y))]}),t.length===0&&i.jsx("div",{className:"loading",children:o!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):i.jsx(Ze,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&i.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:i.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},be={"clear-day":{icon:gt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:mt,label:"Klar",color:"#eeeef5"},rain:{icon:pt,label:"Regen",color:"#80a5d6"},snow:{icon:ht,label:"Schnee",color:"#8c82ce"},sleet:{icon:ut,label:"Graupel",color:"#aba4db"},wind:{icon:ft,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:dt,label:"Neblig",color:"#d5dae2"},cloudy:{icon:lt,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:ct,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:at,label:"Teils bewölkt",color:"#d5dae2"}},Bn=e=>{const[n,t]=_.useState([]),[o,s]=_.useState(!1),m=Ie(6e4*10,"Weather"),E=B(),x=E.ENABLE_WEATHER||!1,A=E.WEATHER_API_KEY||"",f=E.WEATHER_LATITUDE,l=E.WEATHER_LONGITUDE,y=x&&A&&f&&l,u=()=>`./forecast/${A}/${f},${l}?&units=si&exclude=minutely`;return _.useEffect(()=>{if(!y)return;let w=!0;const c=new AbortController;return W(u(),{signal:c.signal}).then(h=>{w&&(t(h.data),s(!1))}).catch(h=>{w&&!c.signal.aborted&&s(Y(h))}).finally(()=>{w&&e&&e(!1)}),()=>{w=!1,c.abort()}},[m,e,y,x,A,f,l]),[n,o]},Un=Et(wt),Fe=D.div`

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
`,Ge=j.memo(({data:e,daily:n=!1})=>i.jsxs("div",{children:[i.jsxs("div",{children:[!n&&H.fromSeconds(e.time).toLocaleString(H.TIME_24_SIMPLE),n&&H.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),i.jsx("div",{children:i.jsx(je,{icon:e.icon})}),i.jsx("div",{children:i.jsxs("strong",{children:[!n&&i.jsxs(i.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&i.jsxs(i.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),i.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),i.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Hn=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:be[n.icon]?.color||"#ffffff",text:be[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),je=({icon:e})=>{const n=be[e];return i.jsx(n.icon,{size:60,color:"#ffffff"})},Fn=()=>{if(!(B().ENABLE_WEATHER||!1))return null;const[t,o]=Bn(),[s,m]=_.useState(!1),E=ae("w"),x=_.useRef(),A=j.useCallback(()=>m(w=>!w),[]),f=j.useCallback(()=>m(!0),[]),l=j.useMemo(()=>Hn(t),[t]),y=j.useMemo(()=>[3,6,9,12],[]),u=j.useMemo(()=>[1,2,3,4,5,6,7],[]);return _.useEffect(()=>{if(!s||!x.current||!t||!t.hourly||l.length===0)return;const w={timezone:"Europe/Berlin"},c=document.createElement("div");return x.current.textContent="",x.current.appendChild(c),zt(c,l,w),()=>{x.current&&(x.current.textContent="")}},[s,l]),_.useEffect(()=>{E&&A()},[E]),!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?i.jsx(Fe,{children:i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":i.jsxs(Fe,{children:[i.jsxs("div",{onClick:f,children:[i.jsxs("div",{className:"headline",children:[i.jsx(je,{icon:t.currently.icon}),i.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),i.jsx("div",{className:"forecast",children:y.map((w,c)=>i.jsx(Ge,{data:t.hourly.data[w]},c))})]}),i.jsx(de,{visible:s,onClick:A,children:i.jsxs("div",{className:"full-weather",children:[o!==!1&&i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),i.jsxs("div",{className:"detail-header",children:[i.jsx("div",{children:i.jsxs("div",{className:"headline",children:[i.jsx(je,{icon:t.daily.data[0].icon}),i.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",i.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),i.jsx("h3",{children:be[t.daily.data[0].icon].label})]}),i.jsx("div",{className:"values",children:i.jsxs("div",{className:"table",children:[i.jsxs("div",{children:[i.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Regen:"})," ",t.daily.data[0].precipProbability*100," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),i.jsxs("div",{children:[i.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),i.jsx("h3",{children:"Die nächsten 24 Stunden"}),i.jsx("div",{ref:x}),i.jsx("h3",{children:"Die nächste Woche"}),i.jsx("div",{className:"forecast",children:u.map((w,c)=>i.jsx(Ge,{data:t.daily.data[w],daily:!0},c))}),i.jsxs("div",{className:"info",children:["Aktualisiert ",i.jsx(xt,{date:H.fromSeconds(t.currently.time).toJSDate(),formatter:Un})]})]})})]})},Gn=j.memo(Fn),Yn="AK Wandsbek",zn="Hamburg",Kn="Master:62016",qn="STATION",Xn={x:10.091341,y:53.568702},Jn={name:Yn,city:zn,id:Kn,type:qn,coordinate:Xn},we={departureList:"departureList",checkName:"checkName"},Qn=async(e,n,t)=>W({method:"post",url:`./gti/public/${e}`,data:n,signal:t,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}),Ye=(e,n)=>e.realtimeOffset-n.realtimeOffset,Zn=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(Ye),to:n.filter(t=>t.directionId===6).slice(0,3).sort(Ye)}},eo=e=>{const t=B().ENABLE_HVV||!1,[o,s]=_.useState([]),[m,E]=_.useState(!1),x=Ie(6e4),A=t;return _.useEffect(()=>{if(!A)return;if(!(e in we)){N.warn(e,"not supported by HVV connector");return}let f=!0;const l=new AbortController;let y={version:51};switch(e){case we.checkName:y={...y,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case we.departureList:const u=H.now();y={...y,station:Jn,time:{date:u.toFormat("dd.MM.yyyy"),time:u.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:y=void 0}return Qn(e,y,l.signal).then(u=>{f&&(s(Zn(u.data)),E(!1))}).catch(u=>{f&&!l.signal.aborted&&E(Y(u))}),()=>{f=!1,l.abort()}},[e,x,A,t]),[o,m]},to=D.div`
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
`,ze=j.memo(({line:e,direction:n,realtimeOffset:t})=>i.jsxs("div",{className:"departure",children:[i.jsx("div",{children:i.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),i.jsx("div",{children:t===0?"Jetzt":i.jsxs(i.Fragment,{children:["in ",t," '"]})})]})),no=()=>{if(!(B().ENABLE_HVV||!1))return null;const[t,o]=eo(we.departureList);return i.jsx(to,{children:o!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((s,m)=>i.jsx(ze,{line:s.line,direction:s.direction,realtimeOffset:s.realtimeOffset},m)),i.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((s,m)=>i.jsx(ze,{line:s.line,direction:s.direction,realtimeOffset:s.realtimeOffset},m))]})})},oo=j.memo(no),io=()=>{const e=B(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const o=e.ENTITY_CHARGING_STATE||"",s=e.ENTITY_STATE_OF_CHARGE||"",m=e.HASS_ACCESS_TOKEN||"",E=e.SUPERVISOR_TOKEN||"",[x,A]=_.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[f,l]=_.useState(!1),y=n&&(t||o||s);return _.useEffect(()=>{if(!y)return;(async()=>{const w=[];t&&w.push(W(V(`/api/states/${t}`,e)).then(a=>({type:"preclimateStatus",value:a.data.state==="on"})).catch(a=>({type:"preclimateStatus",error:Y(a)}))),o&&w.push(W(V(`/api/states/${o}`,e)).then(a=>({type:"chargingState",value:a.data.state==="on"})).catch(a=>({type:"chargingState",error:Y(a)}))),s&&w.push(W(V(`/api/states/${s}`,e)).then(a=>({type:"stateOfCharge",value:parseFloat(a.data.state)||0})).catch(a=>({type:"stateOfCharge",error:Y(a)})));const c=await Promise.all(w);let h=!1;c.forEach(a=>{a.error?h=a.error:A(d=>({...d,[a.type]:a.value}))}),l(h||!1)})()},[y,n,t,o,s]),_.useEffect(()=>{let u=null,w=[],c=!0,h=null,a=0;const d=5;let r=!1,p=null,b=null;async function g(){if(!y||!c||r)return;if(u){try{p&&(u.removeEventListener("ready",p),p=null),b&&(u.removeEventListener("disconnected",b),b=null),w.forEach(R=>{R&&R()}),w=[],u.close()}catch{}u=null}r=!0;const S=oe(e),T=E||m||"";if(!T){r=!1;return}let k;try{k=ce(S,T),c&&l(!1)}catch(R){c&&(N.error("Failed to create WebSocket auth:",R),l(R instanceof Error?R.message:String(R))),r=!1;return}const L=fe(e);if(!L){N.error("Failed to build WebSocket URL - cannot connect"),c&&l("WebSocket URL konnte nicht erstellt werden."),r=!1;return}const C=()=>new Promise((R,O)=>{const v=new WebSocket(L);v.onopen=()=>R(v),v.onerror=P=>O(P)});try{u=await le({auth:k,createSocket:C}),p=()=>{c&&(N.debug("WebSocket connection ready for EV entities"),a=0,l(!1))},u.addEventListener("ready",p),b=()=>{if(c&&!r){if(N.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),h&&(clearTimeout(h),h=null),a>=d){N.warn(`Max reconnection attempts (${d}) reached for EV entities, stopping reconnection`),c&&l("Verbindung verloren. Bitte Seite neu laden.");return}u=null,w=[],p=null,b=null;const v=Math.min(1e3*Math.pow(2,a),3e4);a++,h=setTimeout(()=>{c&&!r&&a<=d&&(N.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${a}/${d})`),g())},v)}},u.addEventListener("disconnected",b);const R=v=>{if(c){const P=v.variables.trigger.to_state.entity_id,M=v.variables.trigger.to_state.state;A(U=>{const $={...U};return P===t?$.preclimateStatus=M==="on":P===o?$.chargingState=M==="on":P===s&&($.stateOfCharge=parseFloat(M)||0),$})}},O=[];t&&O.push(t),o&&O.push(o),s&&O.push(s);for(const v of O){const P=await u.subscribeMessage(R,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:v}});w.push(P)}r=!1}catch(R){if(r=!1,c)if(N.error("Failed to setup WebSocket connection:",R),l(R instanceof Error?R.message:String(R)),a<d){const O=Math.min(1e3*Math.pow(2,a),3e4);a++,h=setTimeout(()=>{c&&!r&&a<=d&&g()},O)}else N.warn(`Max reconnection attempts (${d}) reached for EV entities, stopping reconnection`),c&&l("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return g(),()=>{if(c=!1,r=!1,h&&(clearTimeout(h),h=null),u)try{p&&u.removeEventListener("ready",p),b&&u.removeEventListener("disconnected",b)}catch{}if(w.forEach(S=>{if(S)try{S()}catch{}}),w=[],u){try{u.close()}catch{}u=null}}},[y,n,t,o,s,m,E]),[x,f]},ro=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&W.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to start preclimate:",t)})},so=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&W.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to stop preclimate:",t)})},ao=D.div`
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
`,co=(e,n)=>n?Ot:e>=80?Dt:e>=50?It:e>=20?Wt:Pt,lo=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",fo=()=>{const e=B();if(!(e.ENABLE_EV||!1))return null;const[t,o]=io(),{preclimateStatus:s,chargingState:m,stateOfCharge:E}=t,[x,A]=j.useState(!1),[f,l]=j.useState(null),[y,u]=j.useState(!1),[w,c]=j.useState(!1),[h,a]=j.useState(0),d=j.useRef(null),r=j.useRef(null),p=j.useRef(s),b=j.useRef(null);j.useEffect(()=>{p.current!==s&&(x&&b.current!==null&&s===(f==="start")&&(a(f==="start"?360:0),c(!0),setTimeout(()=>{A(!1),l(null),c(!1),a(0),b.current=null,u(!1)},300),d.current&&(clearTimeout(d.current),d.current=null)),p.current=s)},[s,x,f]),j.useEffect(()=>{if(!x||w){r.current&&(cancelAnimationFrame(r.current),r.current=null);return}const O=b.current||Date.now(),v=1e4,P=f==="stop",M=()=>{const U=Date.now()-O,$=Math.min(U/v,1);a(P?360*(1-$):360*$),$<1&&!w&&(r.current=requestAnimationFrame(M))};return r.current=requestAnimationFrame(M),()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null)}},[x,w,f]),j.useEffect(()=>()=>{d.current&&clearTimeout(d.current),r.current&&cancelAnimationFrame(r.current)},[]);const g=j.useCallback(()=>{if(o!==!1||x)return;const O=!s,v=O?"start":"stop";A(!0),l(v),c(!1),u(!1),a(0),b.current=Date.now(),p.current=s,O?ro(e):so(e),d.current=setTimeout(()=>{x&&(u(!0),setTimeout(()=>{A(!1),l(null),c(!1),a(0),u(!1),b.current=null},500))},15e3)},[s,o,x]),S=co(E||0,m),T=lo(E||0),k=Math.round(E||0),L=x?f==="start":s,C=f==="start"?"#17e146":"#f85a5a",R=f==="start"?"clockwise":"counterclockwise";return i.jsxs(ao,{className:F({disabled:o!==!1}),children:[i.jsxs("h2",{children:["Auto",o!==!1?i.jsxs("div",{className:"battery-info",children:[i.jsx(G,{path:ve,size:"1.2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsxs("div",{className:"battery-info",children:[i.jsxs("span",{className:"charge-percentage",children:[k,"%"]}),i.jsx(G,{path:S,size:"1.2rem",color:T})]})]}),o===!1&&i.jsxs("div",{className:"preclimate-button-wrapper",children:[x&&i.jsx("div",{className:F("progress-ring",R,{complete:w}),style:{"--progress-color":C,"--progress-angle":`${h}deg`,"--progress-gradient":f==="stop"?`conic-gradient(from -90deg, ${C} 0deg, ${C} ${h}deg, transparent ${h}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${C} 0deg, ${C} ${h}deg, transparent ${h}deg, transparent 360deg)`}}),i.jsxs("button",{className:F("preclimate-button",{spinning:L&&!x,shaking:y}),onClick:g,disabled:o!==!1||x,children:[i.jsx(G,{path:vt,size:"2rem",color:L?"#ff9800":"#ffffff"}),i.jsx("span",{children:L?"Stop":"Start"})]})]})]})},uo=j.memo(fo),ho=()=>{const e=B(),{isConnected:n}=Oe(),t=e.ENABLE_GARAGE||!1,o=e.ENTITY_GARAGE_DOOR||"",s=e.HASS_ACCESS_TOKEN||"",m=e.SUPERVISOR_TOKEN||"",[E,x]=_.useState("closed"),[A,f]=_.useState(!1),l=t&&o,y=o?V(`/api/states/${o}`,e):null;return _.useEffect(()=>{if(!l||!y)return;let u=!0;const w=new AbortController;return W(y,{signal:w.signal}).then(c=>{u&&(x(c.data.state),f(!1))}).catch(c=>{u&&!w.signal.aborted&&f(Y(c))}),()=>{u=!1,w.abort()}},[l,y,t,o]),_.useEffect(()=>{let u=null,w=null,c=!0,h=null,a=null,d=!1,r=null,p=null;async function b(){if(!l||!o||!c||!n||d)return;if(u){try{r&&(u.removeEventListener("ready",r),r=null),p&&(u.removeEventListener("disconnected",p),p=null),w&&(w(),w=null),u.close()}catch{}u=null}d=!0;const g=oe(e),S=m||s||"";if(!S){d=!1;return}let T;try{T=ce(g,S),c&&f(!1)}catch(C){c&&(N.error("Failed to create WebSocket auth:",C),f(C instanceof Error?C.message:String(C))),d=!1;return}const k=fe(e);if(!k){N.error("Failed to build WebSocket URL - cannot connect"),c&&f("WebSocket URL konnte nicht erstellt werden."),d=!1;return}const L=()=>new Promise((C,R)=>{const O=new WebSocket(k);O.onopen=()=>C(O),O.onerror=v=>R(v)});try{u=await le({auth:T,createSocket:L}),r=()=>{c&&(N.debug("WebSocket connection ready for garage door"),f(!1))},u.addEventListener("ready",r),p=()=>{c&&!d&&(N.debug("WebSocket disconnected for garage door"),u=null,w=null,r=null,p=null,h&&(clearTimeout(h),h=null),n?h=setTimeout(()=>{c&&!d&&n&&(N.debug("Attempting to reconnect WebSocket for garage door"),b())},2e3):N.debug("Skipping reconnection for garage door - waiting for backend connection"))},u.addEventListener("disconnected",p);const C=R=>{c&&x(R.variables.trigger.to_state.state)};w=await u.subscribeMessage(C,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:o}}),d=!1}catch(C){d=!1,c&&(N.error("Failed to setup WebSocket connection:",C),f(C instanceof Error?C.message:String(C)),n&&(h=setTimeout(()=>{c&&!d&&n&&b()},2e3)))}}return n&&b(),n&&!u&&!d&&(a&&(clearTimeout(a),a=null),a=setTimeout(()=>{c&&n&&!u&&!d&&b()},1e3)),()=>{if(c=!1,d=!1,h&&(clearTimeout(h),h=null),a&&(clearTimeout(a),a=null),u)try{r&&u.removeEventListener("ready",r),p&&u.removeEventListener("disconnected",p)}catch{}if(w){try{w()}catch{}w=null}if(u){try{u.close()}catch{}u=null}}},[l,n]),[E,A]},po=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(V("/api/services/cover/toggle",n),{entity_id:t}).catch(s=>{N.error("Failed to toggle garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},mo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(V("/api/services/cover/open_cover",n),{entity_id:t}).catch(s=>{N.error("Failed to open garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},go=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(V("/api/services/cover/close_cover",n),{entity_id:t}).catch(s=>{N.error("Failed to close garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},xo=D.div`
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
`,rt=D.div`
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
`,Ne=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:Ut},open:{label:"Offen",icon:Bt},closed:{label:"Geschlossen",icon:Vt},opening:{label:"Öffnet",icon:$t},closing:{label:"Schließt",icon:Mt}};return n[e]||N.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:Ht}},Eo=({garageDoor:e,animate:n=!1})=>i.jsxs(rt,{className:F({animate:n}),children:[i.jsx(G,{path:Ne(e).icon,size:"2rem",color:"#ffffff"}),i.jsx("span",{children:Ne(e).label})]}),wo=e=>yt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return Ne(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),yo=()=>{const e=B();if(!(e.ENABLE_GARAGE||!1))return null;const[t,o]=ho(),[s,m]=_.useState(void 0),[E,x]=_.useState(!1),[A,f]=_.useState(!1);_.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!s){const c=new Promise(h=>{m({resolve:h})});wo(c)}}else s&&(s.resolve(t),m(void 0))},[t]);const l=ae("g");_.useEffect(()=>{l&&o===!1&&po(x,e)},[l,o,e]);const y=j.useCallback(w=>{if(o===!1)switch(f(!1),w){case"open":mo(x,e);break;case"close":go(x,e);break}},[x,o,e]),u=j.useCallback(()=>{o===!1&&f(!0)},[o]);return i.jsxs(xo,{className:F({disabled:o!==!1}),children:[i.jsx("h2",{children:"Garage"}),i.jsx("div",{className:"status",onClick:u,children:o!==!1?i.jsxs(rt,{children:[i.jsx(G,{path:ve,size:"2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsx(Eo,{garageDoor:t,animate:E})}),i.jsx(de,{visible:A&&o===!1,onClick:()=>f(!1),children:i.jsxs("div",{className:"controls",children:[i.jsx("h2",{children:"Garagentor"}),i.jsx("div",{onClick:()=>y("open"),children:"Öffnen"}),i.jsx("div",{onClick:()=>y("close"),children:"Schließen"})]})})]})},bo=j.memo(yo),So=(e,n)=>e?V(`/api/states/${e}`,n):null,q={done:{label:"Fertig",animate:!1,icon:Gt},off:{label:"Aus",animate:!1,icon:Ft},standby:{label:"Standby",animate:!1,icon:We},running:{label:"Läuft …",animate:!0,icon:We}},Ao={off:0,standby:2,running:16,done:256},To=()=>{const e=B();e.ENABLE_LAUNDRY;const n=e.LAUNDRY_MACHINES||[];e.HASS_ACCESS_TOKEN,e.SUPERVISOR_TOKEN;const o=(Array.isArray(n)?n:[]).map((y,u)=>{const[w,c]=Lo(y.entity_id,e);return{state:w,error:c,name:y.name}}),[s,m]=_.useState(q.off),[E,x]=_.useState(!1),A=o.map(y=>y.state),f=o.map(y=>y.error);_.useEffect(()=>{const y=f.some(u=>u!==!1);x(y&&f.find(u=>u!==!1)||!1)},[f]),_.useEffect(()=>{const y=A.reduce((u,w)=>u+(Ao[w]||0),0);y===0?m(q.off):y<16?m(q.standby):y<256?m(q.running):y%256===0?m(q.done):y%256%16===0?m(q.running):y%256%2===0?m(q.done):m(q.running)},[A]);const l=o.map(y=>({label:y.name,state:y.state}));return[s,l,E]},Lo=(e,n)=>{const{isConnected:t}=Oe(),[o,s]=_.useState("off"),[m,E]=_.useState(!1),A=(n.ENABLE_LAUNDRY||!1)&&e,f=So(e,n);return _.useEffect(()=>{if(!A||!f)return;let l=!0;const y=new AbortController;return W(f,{signal:y.signal}).then(u=>{l&&(s(u.data.state),E(!1))}).catch(u=>{l&&!y.signal.aborted&&E(Y(u))}),()=>{l=!1,y.abort()}},[e,A,f]),_.useEffect(()=>{let l=null,y=null,u=!0,w=null,c=null,h=!1,a=null,d=null;async function r(){if(!A||!e||!u||!t||h)return;if(l){try{a&&(l.removeEventListener("ready",a),a=null),d&&(l.removeEventListener("disconnected",d),d=null),y&&(y(),y=null),l.close()}catch{}l=null}h=!0;const p=oe(n),b=n.HASS_ACCESS_TOKEN||"",S=n.SUPERVISOR_TOKEN||""||b||"";if(!S){h=!1;return}const T=fe(n);if(!T){N.error("Failed to build WebSocket URL - cannot connect"),u&&E("WebSocket URL konnte nicht erstellt werden."),h=!1;return}const k=()=>new Promise((L,C)=>{const R=new WebSocket(T);R.onopen=()=>L(R),R.onerror=O=>C(O)});try{const L=ce(p,S);l=await le({auth:L,createSocket:k}),a=()=>{u&&(N.debug(`WebSocket connection ready for ${e}`),E(!1))},l.addEventListener("ready",a),d=()=>{u&&!h&&(N.debug(`WebSocket disconnected for ${e}`),l=null,y=null,a=null,d=null,w&&(clearTimeout(w),w=null),t?w=setTimeout(()=>{u&&!h&&t&&(N.debug(`Attempting to reconnect WebSocket for ${e}`),r())},2e3):N.debug(`Skipping reconnection for ${e} - waiting for backend connection`))},l.addEventListener("disconnected",d);const C=R=>{u&&s(R.variables.trigger.to_state.state)};y=await l.subscribeMessage(C,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),h=!1}catch(L){h=!1,u&&(N.error(`Failed to setup WebSocket connection for ${e}:`,L),E(L instanceof Error?L.message:String(L)),t&&(w=setTimeout(()=>{u&&!h&&t&&r()},2e3)))}}return t&&r(),t&&!l&&!h&&(c&&(clearTimeout(c),c=null),c=setTimeout(()=>{u&&t&&!l&&!h&&r()},1e3)),()=>{if(u=!1,h=!1,w&&(clearTimeout(w),w=null),c&&(clearTimeout(c),c=null),l)try{a&&l.removeEventListener("ready",a),d&&l.removeEventListener("disconnected",d)}catch{}if(y){try{y()}catch{}y=null}if(l){try{l.close()}catch{}l=null}}},[e,A,t]),[o,m]},Co=D.div`
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
`,_o=()=>{if(!(B().ENABLE_LAUNDRY||!1))return null;const[t,o,s]=To(),[m,E]=_.useState(!1),x=j.useCallback(()=>{s===!1&&E(!0)},[s]),A=j.useCallback(()=>E(!1),[]);return i.jsxs(Co,{className:F({disabled:s!==!1}),children:[i.jsx("h2",{children:"Wäsche"}),i.jsx("div",{className:"status",onClick:x,children:s!==!1?i.jsxs(i.Fragment,{children:[i.jsx(G,{path:ve,size:"2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:F({animate:t.animate}),children:i.jsx(G,{path:t.icon,size:"2rem",color:"#ffffff"})}),i.jsx("span",{children:t.label})]})}),i.jsx(de,{visible:m&&s===!1,onClick:A,children:i.jsxs("div",{className:"states",children:[i.jsx("h2",{children:"Wäsche"}),o.map((f,l)=>i.jsxs("div",{children:[i.jsx("div",{className:"subtitle",children:f.label}),i.jsx("div",{className:F({animate:q[f.state].animate}),children:i.jsx(G,{path:q[f.state].icon,size:2})}),i.jsx("div",{children:q[f.state].label})]},l))]})})]})},Ro=j.memo(_o),ko=D.div`
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
`,jo=()=>i.jsxs(ko,{children:[i.jsxs("div",{className:"top-content",children:[i.jsx(Gn,{}),i.jsx(oo,{}),i.jsx(uo,{})]}),i.jsxs("div",{className:"two-cols",children:[i.jsx(bo,{}),i.jsx(Ro,{})]})]}),No=j.memo(jo),Ke=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],vo=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],ye={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},Oo={landscape:"L",portrait:"P",wide:"W"},Do=D.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Io=D.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Wo=D.div`
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
`,qe=D.select`
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
`,Xe=D.input`
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
`,Po=D.button`
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
`,Je=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Mo=D.button`
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
`,$o=D.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Vo=D.div`
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
`,Bo=D.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Uo=D.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Ho=D.div`
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
`,Fo=D.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Go=D.h3`
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
`;const _e=D.button`
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
`,Qe=()=>{const[e,n]=j.useState(1920),[t,o]=j.useState(1080),[s,m]=j.useState("Full HD"),[E,x]=j.useState(""),[A,f]=j.useState(""),[l,y]=j.useState([{orientation:"landscape"}]),[u,w]=j.useState(null),c=j.useMemo(()=>it(l,e,t),[l,e,t]),h=g=>{const S=Ke.find(T=>T.name===g);S&&S.width&&S.height?(n(S.width),o(S.height),m(g),x(""),f("")):g==="Custom"&&m("Custom")},a=()=>{const g=parseInt(E),S=parseInt(A);g>0&&S>0&&(n(g),o(S))},d=g=>{y(g.videos),w(g.name)},r=g=>{const S=[];for(let T=0;T<g;T++)S.push(l[T]||{orientation:"landscape"});y(S),w(null)},p=(g,S)=>{const T=[...l];T[g]={orientation:S},y(T),w(null)},b=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return i.jsxs(Do,{children:[i.jsx(Io,{children:"Video Tiling Algorithm Demo"}),i.jsxs(Wo,{children:[i.jsxs(Z,{children:[i.jsx(ee,{children:"Screen Size Preset"}),i.jsx(qe,{value:s,onChange:g=>h(g.target.value),children:Ke.map(g=>i.jsx("option",{value:g.name,children:g.name},g.name))})]}),s==="Custom"&&i.jsxs(i.Fragment,{children:[i.jsxs(Z,{children:[i.jsx(ee,{children:"Custom Width"}),i.jsx(Xe,{type:"number",value:E,onChange:g=>x(g.target.value),placeholder:"Width",min:"100"})]}),i.jsxs(Z,{children:[i.jsx(ee,{children:"Custom Height"}),i.jsx(Xe,{type:"number",value:A,onChange:g=>f(g.target.value),placeholder:"Height",min:"100"})]}),i.jsxs(Z,{children:[i.jsx(ee,{children:" "}),i.jsx(Po,{onClick:a,children:"Apply Custom Size"})]})]}),i.jsxs(Z,{children:[i.jsx(ee,{children:"Number of Videos"}),i.jsxs(qe,{value:l.length,onChange:g=>r(parseInt(g.target.value)),children:[i.jsx("option",{value:"1",children:"1 Video"}),i.jsx("option",{value:"2",children:"2 Videos"}),i.jsx("option",{value:"3",children:"3 Videos"}),i.jsx("option",{value:"4",children:"4 Videos"})]})]}),l.map((g,S)=>i.jsxs(Z,{children:[i.jsxs(ee,{children:["Video ",S+1," Orientation"]}),i.jsxs(Je,{children:[i.jsx(_e,{active:g.orientation==="landscape",orientation:"landscape",onClick:()=>p(S,"landscape"),children:"Landscape"}),i.jsx(_e,{active:g.orientation==="portrait",orientation:"portrait",onClick:()=>p(S,"portrait"),children:"Portrait"}),i.jsx(_e,{active:g.orientation==="wide",orientation:"wide",onClick:()=>p(S,"wide"),children:"Wide"})]})]},S))]}),i.jsxs(Fo,{children:[i.jsx(Go,{children:"Test Scenarios"}),i.jsx(Je,{children:vo.map(g=>i.jsx(Mo,{active:u===g.name,onClick:()=>d(g),children:g.name},g.name))})]}),i.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:i.jsx($o,{style:{width:`${e*b}px`,height:`${t*b}px`},children:c.videos.map((g,S)=>i.jsxs(Vo,{orientation:g.orientation,style:{left:`${g.x*b}px`,top:`${g.y*b}px`,width:`${g.width*b}px`,height:`${g.height*b}px`},children:[i.jsxs(Bo,{children:[Oo[g.orientation]," ",S+1]}),i.jsxs(Uo,{children:[Math.round(g.width)," × ",Math.round(g.height)]})]},S))})}),i.jsxs(Ho,{children:[i.jsxs(pe,{children:[i.jsx(me,{children:"Canvas Size"}),i.jsxs(ge,{children:[e," × ",t]})]}),i.jsxs(pe,{children:[i.jsx(me,{children:"Total Area Used"}),i.jsxs(ge,{children:[Math.round(c.totalArea).toLocaleString()," px²"]})]}),i.jsxs(pe,{children:[i.jsx(me,{children:"Efficiency"}),i.jsxs(ge,{children:[c.efficiency.toFixed(2),"%"]})]}),i.jsxs(pe,{children:[i.jsx(me,{children:"Display Scale"}),i.jsxs(ge,{children:[(b*100).toFixed(1),"%"]})]})]})]})},Yo=()=>{function e(t,o){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(o))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[m,E]=o.split(":").map(Number),x=new Date;let A=new Date(x.getFullYear(),x.getMonth(),x.getDate());A.setHours(m,E,0,0),A<=x&&A.setDate(A.getDate()+1);const f=A.getTime()-x.getTime();return N.log("Reloading page at",o,"in",Math.floor(f/1e3/60),"minutes"),setTimeout(t,f)}const n=()=>{N.log("Timeout reached! "),window.location.reload(!0)};_.useLayoutEffect(()=>{const t=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{t.forEach(o=>{o&&clearTimeout(o)})}},[])},zo=D.div`
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
`;class Se extends _.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",s=n?.stack||"",m=t?.componentStack||"";N.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:s,componentStack:m})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?i.jsxs(zo,{children:[i.jsx("h2",{children:"Something went wrong"}),i.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,i.jsxs("div",{children:[i.jsx("button",{onClick:this.handleReset,children:"Try Again"}),i.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Ko=bt`
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
`,qo=D.div`
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
`;function Xo(){return Yo(),i.jsxs(qo,{children:[i.jsx(Ko,{}),i.jsxs("div",{className:"main",children:[i.jsx(Se,{children:i.jsx(Vn,{})}),i.jsx(Se,{children:i.jsx(No,{})})]}),i.jsx(At,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Jo(){return i.jsx(Se,{children:i.jsxs(St,{children:[i.jsx(Te,{path:"/demo",element:i.jsx(Qe,{})}),i.jsx(Te,{path:"/tiling-demo",element:i.jsx(Qe,{})}),i.jsx(Te,{path:"*",element:i.jsx(Xo,{})})]})})}const Qo=Tt.createRoot(document.getElementById("root"));Qo.render(i.jsx(_.StrictMode,{children:i.jsx(Se,{children:i.jsx(Qt,{children:i.jsx(hn,{children:i.jsx(Lt,{children:i.jsx(Jo,{})})})})})}));
