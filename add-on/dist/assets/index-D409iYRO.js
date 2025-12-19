import{d as D,R as T,j as r,I as U,r as C,l as Ze,P as lt,W as dt,b as ut,e as ft,f as ht,h as pt,i as gt,k as mt,m as xt,n as yt,o as wt,T as Et,p as bt,s as At,y as St,q as Tt,t as Ct,u as Ae,L as jt,v as Lt,B as Nt}from"./react-vendor-BLiIHWQw.js";import{D as V}from"./date-vendor-BDx6lZXm.js";import{f as G}from"./vendor-BA3FN4ma.js";import{m as Rt,a as _t,b as kt,c as Ot,d as Dt,e as vt,f as De,g as It,h as $t,i as Mt,j as Pt,k as Wt,l as Bt,n as Vt,o as Gt,p as Ft,q as Ut,r as Yt,s as zt,t as $e,u as Ht,v as qt}from"./ui-vendor-C7t39j5V.js";import{a as $,q as Kt}from"./utils-vendor-B3_PMxZw.js";import{t as Jt}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const l of f.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(s){if(s.ep)return;s.ep=!0;const f=t(s);fetch(s.href,f)}})();const Xt=D.div`
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
`,ce=({visible:e,children:n,onClick:t,onClose:o,fullsize:s=!1})=>{const f=o||t,l=p=>{p.stopPropagation(),p.preventDefault(),f()};return T.useEffect(()=>{if(e){const p=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${p}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,p)}}},[e]),e?r.jsxs(Xt,{onClick:t,children:[r.jsx("div",{className:"close",onClick:l,children:r.jsx(U,{path:Rt,size:2})}),r.jsx("div",{className:G("content",{fullsize:s}),onClick:p=>p.stopPropagation(),children:n})]}):null};let et=!0;const Qt=e=>{et=!!e};let ge=!1,q=[],ie=0;const se=100,Me=50,Ne=()=>{if(q.length===0||ge)return;const e=q.shift(),n=Date.now();n-ie>=se?re(e.level,e.message,e.metadata):(q.unshift(e),setTimeout(Ne,se-(n-ie)))},re=(e,n,t=null)=>{if(!et)return;if(ge){q.length<Me&&q.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const o=Date.now();if(o-ie<se){q.length<Me&&(q.push({level:e,message:n,metadata:t,timestamp:o}),q.length===1&&setTimeout(Ne,se-(o-ie)));return}setTimeout(async()=>{ge=!0,ie=Date.now();try{const f=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,l={level:e,message:n,...t&&{metadata:t}};await $.create({timeout:2e3}).post(f,l)}catch{q.length>10&&(q=[])}finally{ge=!1,q.length>0&&setTimeout(Ne,se)}},0)},de=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},ue=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},R={log:(...e)=>{const n=de(e),t=ue(e);n&&re("INFO",n,t)},error:(...e)=>{console.error(...e);const n=de(e),t=ue(e);n&&re("ERROR",n,t)},warn:(...e)=>{const n=de(e),t=ue(e);n&&re("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=de(e),t=ue(e);n&&re("INFO",n,t)}},Zt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},en=!1,Re="hass-family-calendar-config",tn=()=>{const e=(n,t=void 0)=>{const o=Zt[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},Se=()=>{try{if(typeof window>"u"||!window.localStorage)return null;const e=localStorage.getItem(Re);if(e){const n=JSON.parse(e);return R.debug("Loaded cached config from localStorage"),n}}catch(e){R.warn("Failed to load cached config from localStorage:",e);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(Re)}catch{}}return null},nn=e=>{try{return typeof window>"u"||!window.localStorage?!1:(localStorage.setItem(Re,JSON.stringify(e)),R.debug("Saved config to localStorage"),!0)}catch(n){return R.warn("Failed to save config to localStorage:",n),!1}},oe=C.createContext(null),on=({children:e})=>{const[n,t]=C.useState(()=>Se()||tn()),[o,s]=C.useState(!0),[f,l]=C.useState(null),[p,S]=C.useState(()=>!!Se()),u=C.useRef(!0),h=C.useRef(n),A=C.useRef(!1),b=C.useRef(!1);C.useEffect(()=>{h.current=n},[n]);const E=C.useCallback(async(i=!1)=>{if(A.current&&!i||!i&&b.current)return!1;A.current=!0,i||(b.current=!0),R.debug("Starting config load",{isReload:i,hasInitialized:b.current});const g=typeof window<"u"&&window.location?`${window.location.pathname.replace(/\/$/,"")}/api/config`:"/api/config";try{const x=await $.get(g,{timeout:5e3});if(x.data&&typeof x.data=="object")if(typeof x.data=="object"&&!Array.isArray(x.data)){R.debug("Config loaded from API:",{hasCALENDARS:"CALENDARS"in x.data,CALENDARS:x.data.CALENDARS,CALENDARSCount:Array.isArray(x.data.CALENDARS)?x.data.CALENDARS.length:"not array",allKeys:Object.keys(x.data)});const d=h.current,w=JSON.stringify(x.data)!==JSON.stringify(d);R.debug("Updating config with new data from API:",{configChanged:w,CALENDARSCount:Array.isArray(x.data.CALENDARS)?x.data.CALENDARS.length:"not array",currentCALENDARSCount:Array.isArray(d?.CALENDARS)?d.CALENDARS.length:"not array",responseKeys:Object.keys(x.data).length,currentConfigKeys:Object.keys(d||{}).length}),w?(t(x.data),S(!1),l(null),en||nn(x.data)):(S(!1),l(null));const j=Object.keys(x.data).filter(N=>N.startsWith("ENABLE_")&&x.data[N]).map(N=>N.replace("ENABLE_",""));return R.info(`Configuration ${i?"reloaded":"loaded"} from API endpoint. Enabled features: ${j.length>0?j.join(", "):"none"}`,{enabledFeatures:j,totalConfigKeys:Object.keys(x.data).length}),i||s(!1),A.current=!1,!0}else throw new Error("Invalid config structure: expected object, got array");else throw new Error("Invalid config response: missing or invalid data")}catch(x){const d=x.response?.data?.detail||x.message||"Unknown error";if(i)return R.warn("Failed to reload config from API, keeping current config:",d),!1;{const w=Se();return w?(R.warn("Failed to load config from API, using cached config:",d),u.current&&(t(w),S(!0),l(d),s(!1)),!1):(u.current&&(l(d),s(!1)),!1)}}finally{A.current=!1}},[]),m=C.useRef(null),y=C.useCallback(async()=>{if(m.current)return m.current;const i=E(!0).finally(()=>{m.current=null});return m.current=i,i},[E]),c=C.useRef(!1);C.useEffect(()=>{if(!c.current)return c.current=!0,E(!1),()=>{u.current=!1}},[]),C.useEffect(()=>{const i=n.HASS_ACCESS_TOKEN||"";i&&typeof i=="string"&&i.trim()!==""&&i!=="undefined"&&i!=="null"?$.defaults.headers.common.Authorization=`Bearer ${i}`:delete $.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),C.useEffect(()=>{const i=n.ENABLE_LOGGING===!0;Qt(i)},[n.ENABLE_LOGGING]);const a=C.useMemo(()=>({config:n,loading:o,configError:f,isUsingCachedConfig:p,reloadConfig:y}),[n,o,f,p,y]);return r.jsx(oe.Provider,{value:a,children:e})},W=()=>{const e=C.useContext(oe);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config},tt=()=>{const e=C.useContext(oe);if(!e)throw new Error("useConfigLoading must be used within ConfigProvider");return e.loading},nt=()=>{const e=C.useContext(oe);if(!e)throw new Error("useConfigError must be used within ConfigProvider");return e.configError},ot=()=>{const e=C.useContext(oe);if(!e)throw new Error("useIsUsingCachedConfig must be used within ConfigProvider");return e.isUsingCachedConfig},rt=()=>{const e=C.useContext(oe);if(!e)throw new Error("useReloadConfig must be used within ConfigProvider");return e.reloadConfig};let ne=0,me=0,Q=0;const te=[],it=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},rn=(e,n="")=>{const t=it(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;Q++,ne++,te.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),te.length>10&&te.shift();const s=[];return n&&s.push(`[${n}]`),s.push("🔴 Axios API Error:"),s.push(`Message: ${t.message}`),t.url&&s.push(`URL: ${t.url}`),t.status&&s.push(`HTTP Status: ${t.status}`),t.code&&s.push(`Error Code: ${t.code}`),t.isNetworkError&&(s.push("Type: Network Error (no response received)"),t.readyState!==void 0&&s.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&s.push("Type: Timeout Error"),t.config&&(s.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),s.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&s.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&s.push("Response Data:",t.responseData),s.push(`Request Stats: ${me} success, ${Q} errors (${ne} total)`),Q>3&&te.length>0&&s.push("Recent errors pattern:",te.slice(-5)),R.error(...s),t},sn=e=>{me++,ne++,(ne%10===0||Q>0)&&R.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:ne,stats:`${me} success, ${Q} errors`}),Q>0&&ne%10===0&&me>Q&&(Q=0,te.length=0)},z=e=>{const n=it(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};let _e=null;const Pe=e=>{_e=e},an=!1;$.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,R.debug("Axios Defaults State:",{baseURL:$.defaults.baseURL,timeout:$.defaults.timeout,hasAuthHeader:!!$.defaults.headers?.common?.Authorization,authHeaderLength:$.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys($.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||R.error("Axios Request Setup Error:",e),Promise.reject(e)));$.interceptors.response.use(e=>(e.config&&sn(e.config),e),e=>{const n=e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"),t=e.config?.metadata?.skipConnectionCheck===!0;if(!n){const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(rn(e,o),e.config?.metadata){const s=Date.now()-e.config.metadata.startTime;R.error("Request Duration:",`${s}ms`,"Request ID:",e.config.metadata.requestId)}!t&&_e&&!e.response&&(e.code==="ERR_NETWORK"||e.code==="ECONNABORTED"||e.code==="ERR_CANCELED")&&_e()}return Promise.reject(e)});const P=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;if(typeof window<"u"&&window.location){if(window.location.pathname.includes("/api/hassio_ingress/")){const s=window.location.pathname.match(/^(\/api\/hassio_ingress\/[^\/]+\/)/);if(s){const f=s[1],l=t.startsWith("/")?t.slice(1):t;return`${f}${l}`}}return t}return t},cn=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},ln=(e={})=>{const n=cn(e);if(!n)return"";const t=n.startsWith("https://")?"wss://":"ws://",o=n.replace(/^https?:\/\//,"");return`${t}${o}/api/websocket`},dn=()=>{const e=W(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[o,s]=T.useState(null),[f,l]=T.useState(!1),p=n&&t,S=t?P(`/api/states/${t}`,e):null;return T.useEffect(()=>{if(!p||!S)return;let u=!0;const h=new AbortController;return $(S,{signal:h.signal}).then(A=>{u&&(A.data.attributes.store!==void 0?s(A.data.attributes.store):s([]),l(!1))}).catch(A=>{u&&!h.signal.aborted&&(l(z(A)),s([]))}),()=>{u=!1,h.abort()}},[p,S,n,t]),[o,f]},un=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=P(`/api/states/${t}`,n);$.post(o,{state:new Date,attributes:{store:e}}).catch(s=>{R.error("Failed to store everyday calendar data:",s)})},We=D.div` 

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
`,fn=({on:e,month:n,day:t})=>{const[o,s]=e,f=o.indexOf(`${n}-${t}`),l=f>-1,p=()=>{s(l?o.toSpliced(f,1):[...o,`${n}-${t}`])};return r.jsx("div",{className:G("dot",{on:l}),onClick:()=>p()})},hn=()=>{const e=W();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let u=1;u<13;u++){const h=new Date(t,u,0).getDate();for(let A=1;A<=h;A++)o.push({month:u,day:A})}const s=Array.from({length:31},(u,h)=>h+1),f=Array.from({length:12},(u,h)=>h+1),l=T.useState(void 0),[p,S]=dn();return T.useEffect(()=>{p!==null&&l[1](p)},[p]),T.useEffect(()=>{l[0]!==void 0&&un(l[0],e)},[l[0],e]),l[0]!==void 0?r.jsxs(We,{children:[r.jsx("h2",{children:"Jeden Tag ein bißchen"}),S!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:S instanceof Error?S.message:String(S)})]}),r.jsxs("div",{className:"calendar",children:[s.map((u,h)=>r.jsx("div",{style:{gridArea:`${u+1} / 1 / ${u+1} / 1`},children:u},h)),f.map((u,h)=>r.jsx("div",{style:{gridArea:`1 / ${u+1} / 1 / ${u+1}`},children:u},h)),o.map((u,h)=>r.jsx("div",{style:{gridArea:`${u.day+1} / ${u.month+1} / ${u.day+1} / ${u.month+1}`},children:r.jsx(fn,{on:l,month:u.month,day:u.day})},h))]})]}):r.jsx(We,{className:"loading",children:S!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:S instanceof Error?S.message:String(S)})]}):r.jsx(Ze,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},pn=D.div`
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
  }`,gn=()=>{const[e,n]=T.useState(V.now()),[t,o]=T.useState(!1),s=C.useCallback(()=>o(!0),[]),f=C.useCallback(()=>o(!1),[]);return T.useEffect(()=>{const l=setInterval(()=>n(V.now()),1e3);return()=>clearInterval(l)},[]),r.jsxs(r.Fragment,{children:[r.jsxs(pn,{onClick:s,children:[e.toFormat("HH"),r.jsx("span",{children:":"}),e.toFormat("mm")]}),r.jsx(ce,{visible:t,onClick:f,fullsize:!0,children:r.jsx(hn,{})})]})},mn=C.memo(gn),xn=3e3,yn=3e4,wn=5e3,En=()=>{const[e,n]=C.useState(!0),t=C.useRef(null),o=C.useRef(null),s=C.useRef(!1),f=C.useRef(Date.now()),l=C.useRef(!0);C.useEffect(()=>{l.current=e},[e]);const p=C.useCallback(async()=>{if(!s.current){s.current=!0,f.current=Date.now();try{const h=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`;await $.get(h,{timeout:wn,metadata:{skipConnectionCheck:!0}}),l.current||R.info("Connection restored - backend is reachable"),n(!0),s.current=!1,o.current&&(clearInterval(o.current),o.current=null)}catch(u){!u.response&&(u.code==="ERR_NETWORK"||u.code==="ECONNABORTED")?(l.current&&R.warn("Connection lost - backend is not reachable"),n(!1),s.current=!1,o.current||(o.current=setInterval(()=>{p()},yn))):(l.current||R.info("Connection restored - backend responded (with error)"),n(!0),s.current=!1,o.current&&(clearInterval(o.current),o.current=null))}}},[]),S=C.useCallback(()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{p()},xn)},[p]);return C.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&S()};return document.addEventListener("visibilitychange",u),()=>{document.removeEventListener("visibilitychange",u)}},[S]),C.useEffect(()=>{const u=setTimeout(()=>{p()},1e3);return()=>{clearTimeout(u)}},[p]),C.useEffect(()=>()=>{t.current&&clearTimeout(t.current),o.current&&clearInterval(o.current)},[]),{isConnected:e,triggerCheck:S}},st=C.createContext(null),bn=({children:e})=>{const n=En(),t=rt(),o=C.useRef(!1),s=C.useRef(null),f=C.useRef(!1);return C.useEffect(()=>(Pe(n.triggerCheck),()=>{Pe(null)}),[n.triggerCheck]),C.useEffect(()=>{const l=n.isConnected;if(!l){o.current=!0,s.current&&(clearTimeout(s.current),s.current=null);return}return o.current&&l&&!f.current&&(s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{f.current||(f.current=!0,t().then(()=>{o.current=!1}).catch(p=>{R.warn("Failed to reload config after connection restore:",p)}).finally(()=>{f.current=!1,s.current=null}))},2e3)),()=>{s.current&&(clearTimeout(s.current),s.current=null)}},[n.isConnected,t]),r.jsx(st.Provider,{value:n,children:e})},An=()=>{const e=C.useContext(st);if(!e)throw new Error("useConnectionStateContext must be used within ConnectionStateProvider");return e};function le({onReady:e,enabled:n=!0,checkBackendConnection:t=!0,reconnectStrategy:o="simple",maxReconnectAttempts:s=5,reconnectDelay:f=2e3,logPrefix:l="WebSocket",dependencies:p=[]}){const S=W(),u=An(),h=t?u?.isConnected:!0,[A,b]=T.useState(!1),[E,m]=T.useState(!1),y=T.useRef(null),c=T.useRef(null),a=T.useRef(!0),i=T.useRef(null),g=T.useRef(null),x=T.useRef(0),d=T.useRef(!1),w=T.useRef(new Map),j=T.useCallback(()=>{const L=y.current;if(c.current,i.current&&(clearTimeout(i.current),i.current=null),g.current&&(clearTimeout(g.current),g.current=null),L&&L.readyState===WebSocket.OPEN&&(w.current.forEach((_,k)=>{try{L.send(JSON.stringify({type:"unsubscribe_entity",entity_id:k}))}catch{}}),w.current.clear()),L){try{L.close()}catch{}y.current=null}c.current=null},[l]),N=T.useCallback(async()=>{if(!(!n||!a.current)&&!(t&&!h)&&!d.current){y.current&&j(),d.current=!0,m(!0);try{let L;if(!an){if(L=ln(S),!L){const k=typeof window<"u"&&window.location.protocol==="https:"?"wss:":"ws:",O=typeof window<"u"&&window.location.host?window.location.host:"";L=`${k}//${O}/api/websocket`}}if(!L){R.error(`Failed to build WebSocket URL for ${l} - cannot connect`),a.current&&b("WebSocket URL konnte nicht erstellt werden."),d.current=!1,m(!1);return}R.debug(`${l} connecting to: ${L}`);const _=new WebSocket(L);y.current=_,_.onopen=()=>{if(!a.current){_.close();return}if(R.debug(`${l} connection opened`),x.current=0,a.current&&b(!1),d.current=!1,m(!1),e)try{const k=e(_,w);c.current=k}catch(k){R.error(`Failed to subscribe for ${l}:`,k),a.current&&b(k instanceof Error?k.message:String(k))}},_.onmessage=k=>{try{const O=JSON.parse(k.data);if(O.type==="state_update"){const v=O.entity_id,M=w.current.get(v);M&&M(O)}else if(O.type==="state_response"){const v=O.entity_id,M=w.current.get(v);M&&M(O)}else O.type==="error"&&(R.error(`${l} received error:`,O.message),a.current&&b(O.message))}catch(O){R.error(`Error handling message for ${l}:`,O)}},_.onclose=()=>{if(a.current&&!d.current){if(R.debug(`${l} disconnected`),y.current=null,w.current.clear(),c.current=null,i.current&&(clearTimeout(i.current),i.current=null),o==="exponential"&&x.current>=s){R.warn(`Max reconnection attempts (${s}) reached for ${l}, stopping reconnection`),a.current&&b("Verbindung verloren. Bitte Seite neu laden.");return}if(h)if(o==="exponential"){const k=Math.min(f*Math.pow(2,x.current),3e4);x.current++,i.current=setTimeout(()=>{a.current&&!d.current&&h&&(R.debug(`Attempting to reconnect ${l} (attempt ${x.current}/${s})`),N())},k)}else i.current=setTimeout(()=>{a.current&&!d.current&&h&&(R.debug(`Attempting to reconnect ${l}`),N())},f);else R.debug(`Skipping reconnection for ${l} - waiting for backend connection`)}},_.onerror=k=>{if(R.error(`WebSocket error for ${l}:`,k),d.current=!1,m(!1),a.current&&b("WebSocket-Verbindungsfehler"),h)if(o==="exponential"&&x.current<s){const O=Math.min(f*Math.pow(2,x.current),3e4);x.current++,i.current=setTimeout(()=>{a.current&&!d.current&&h&&(R.debug(`Attempting to reconnect ${l} after error (attempt ${x.current}/${s})`),N())},O)}else o==="simple"?i.current=setTimeout(()=>{a.current&&!d.current&&h&&(R.debug(`Attempting to reconnect ${l} after error`),N())},f):(R.warn(`Max reconnection attempts (${s}) reached for ${l}, stopping reconnection`),a.current&&b("Verbindung fehlgeschlagen. Bitte Seite neu laden."));else R.debug(`Skipping reconnection for ${l} after error - waiting for backend connection`)}}catch(L){if(d.current=!1,m(!1),a.current&&(R.error(`Failed to setup ${l} connection:`,L),b(L instanceof Error?L.message:String(L)),h))if(o==="exponential"&&x.current<s){const _=Math.min(f*Math.pow(2,x.current),3e4);x.current++,i.current=setTimeout(()=>{a.current&&!d.current&&h&&(R.debug(`Attempting to reconnect ${l} after error (attempt ${x.current}/${s})`),N())},_)}else o==="simple"?i.current=setTimeout(()=>{a.current&&!d.current&&h&&N()},f):(R.warn(`Max reconnection attempts (${s}) reached for ${l}, stopping reconnection`),a.current&&b("Verbindung fehlgeschlagen. Bitte Seite neu laden."))}}},[n,t,h,S,o,s,f,l,e,j]);return T.useEffect(()=>{n&&h&&!y.current&&!d.current&&N()},[n,h,N,...p]),T.useEffect(()=>{n&&h&&!y.current&&!d.current&&(g.current&&(clearTimeout(g.current),g.current=null),g.current=setTimeout(()=>{a.current&&h&&!y.current&&!d.current&&N()},1e3))},[n,h,N,l]),T.useEffect(()=>()=>{a.current=!1,j()},[j]),{connection:y.current,error:A,isConnecting:E}}const Sn=()=>{const e=W(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const[o,s]=T.useState("off"),[f,l]=T.useState(!1),p=n&&t,S=t?P(`/api/states/${t}`,e):null;T.useEffect(()=>{if(!p||!S)return;let A=!0;const b=new AbortController;return $(S,{signal:b.signal}).then(E=>{A&&(s(E.data.state),l(!1))}).catch(E=>{A&&!b.signal.aborted&&l(z(E))}),()=>{A=!1,b.abort()}},[p,S,n,t]);const{error:u}=le({enabled:p&&!!t,logPrefix:"doorbell",onReady:(A,b)=>{const E=m=>{m.state!==void 0&&s(m.state)};return b.current.set(t,E),A.readyState===WebSocket.OPEN&&(A.send(JSON.stringify({type:"subscribe_entity",entity_id:t})),R.debug("Subscribed to doorbell state changes")),()=>{b.current.delete(t),A.readyState===WebSocket.OPEN&&A.send(JSON.stringify({type:"unsubscribe_entity",entity_id:t}))}},dependencies:[p,t]});return[o,f||u||!1]},Tn=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&$.post(P("/api/services/button/press",e),{entity_id:n}).catch(t=>{R.error("Failed to unlatch front door:",t)})},I={portrait:360/480,landscape:1920/1072,wide:770/216};function Cn(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function at(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,s=Cn(e);return o===1?jn(e[0],n,t):o===2?Ln(s,e,n,t):o===3?Nn(s,e,n,t):o===4?Rn(s,e,n,t):{videos:[],totalArea:0,efficiency:0}}function jn(e,n,t){const o=I[e.orientation];let s,f;const l=n/t;return o>l?(s=n,f=n/o):(f=t,s=t*o),{videos:[{x:(n-s)/2,y:(t-f)/2,width:s,height:f,orientation:e.orientation}],totalArea:s*f,efficiency:s*f/(n*t)*100}}function Ln(e,n,t,o){if(e.portrait>0)return ve(e,n,t,o);const s=[];e.landscape>0&&s.push("landscape"),e.wide>0&&s.push("wide");const f=s[0]||n[0].orientation,l=s[1]||n[1].orientation,p=I[f],S=I[l];if(e.landscape===1&&e.wide===1){const m=I.landscape,y=I.wide,c=t,a=c/m,i=c/y,g=a+i;let x,d,w;if(g<=o)x=a,d=i,w=c;else{const O=o/g;x=a*O,d=i*O,w=d*y}const j=(t-w)/2,L=J(n,[{x:j,y:0,width:w,height:d,orientation:"wide"},{x:j,y:d,width:w,height:x,orientation:"landscape"}]),_=w*x+w*d,k=_/(t*o)*100;return{videos:L,totalArea:_,efficiency:k}}if(e.wide===2){const m=I.wide,y=t,c=y/m,a=c*2;let i;a<=o?i=c:i=o/2;const x=J(n,[{x:0,y:0,width:y,height:i,orientation:"wide"},{x:0,y:i,width:y,height:i,orientation:"wide"}]),d=y*i*2,w=d/(t*o)*100;return{videos:x,totalArea:d,efficiency:w}}const u=[()=>{const m=t,y=m/2,c=m/2,a=y/p,i=c/S;return Math.max(a,i)<=o?{positions:[{x:0,y:(o-a)/2,width:y,height:a,orientation:f},{x:y,y:(o-i)/2,width:c,height:i,orientation:l}],totalArea:y*a+c*i}:null},()=>{const m=o,y=m/2,c=m/2,a=y*p,i=c*S;return Math.max(a,i)<=t?{positions:[{x:(t-a)/2,y:0,width:a,height:y,orientation:f},{x:(t-i)/2,y,width:i,height:c,orientation:l}],totalArea:a*y+i*c}:null}];let h=null,A=0;for(const m of u){const y=m();y&&y.totalArea>A&&(A=y.totalArea,h=y)}if(!h){const m=t/2,y=t/2,c=Math.min(m/p,o),a=Math.min(y/S,o);h={positions:[{x:0,y:(o-c)/2,width:m,height:c,orientation:f},{x:m,y:(o-a)/2,width:y,height:a,orientation:l}],totalArea:m*c+y*a}}const b=J(n,h.positions),E=h.totalArea/(t*o)*100;return{videos:b,totalArea:h.totalArea,efficiency:E}}function ve(e,n,t,o){const s=e.portrait,f=n.length-s;if((s===3||s===4)&&f===0){const E=I.portrait,m=t/s,y=m/E,c=y<o?(o-y)/2:0,a=Math.min(y,o),i=[];let g=0;for(let w=0;w<s;w++){const j=Math.min(m,a*E);i.push({x:w*m+(m-j)/2,y:c,width:j,height:a,orientation:"portrait"}),g+=j*a}const x=J(n,i),d=g/(t*o)*100;return{videos:x,totalArea:g,efficiency:d}}n.filter(E=>E.orientation==="portrait");const l=n.filter(E=>E.orientation!=="portrait"),p=s>0?Math.min(t*.4,t*.5):0,S=t-p,u=[];let h=0;if(s===2&&f===0){const E=I.portrait,m=t/2,y=m/E,c=o;let a,i;y<=c?(i=y,a=m):(i=c,a=c*E);const g=(o-i)/2;u.push({x:(m-a)/2,y:g,width:a,height:i,orientation:"portrait"}),u.push({x:m+(m-a)/2,y:g,width:a,height:i,orientation:"portrait"}),h=a*i*2}else if(s===1&&f===1){const E=I.portrait,m=l[0],y=I[m.orientation],c=E+y,a=t*(E/c),i=t*(y/c),g=a/E,x=i/y,d=Math.min(o,Math.min(g,x)),w=(o-d)/2;u.push({x:0,y:w,width:a,height:d,orientation:"portrait"}),u.push({x:a,y:w,width:i,height:d,orientation:m.orientation}),h=a*d+i*d}else if(s===1&&f===2&&e.landscape===1&&e.wide===1){const E=I.portrait,m=I.wide,y=I.landscape,c=o,a=o*E,i=o/(1/m+1/y),g=i/m,x=i/y,d=a+i;if(Math.abs(d-t)<.1)u.push({x:0,y:0,width:a,height:c,orientation:"portrait"}),h+=a*c,l.find(L=>L.orientation==="wide")&&(u.push({x:0+a,y:0,width:i,height:g,orientation:"wide"}),h+=i*g),l.find(L=>L.orientation==="landscape")&&(u.push({x:0+a,y:g,width:i,height:x,orientation:"landscape"}),h+=i*x);else{const w=t/d,j=a*w,N=j/E,L=i*w,_=o/N;let k=j*_,O=o,v=L*_,M=v/m,B=v/y,F=k+v;if(F>t){const X=t/F;k=k*X,O=k/E,v=v*X,M=v/m,B=v/y,F=k+v,F>t&&(v=t-k,M=v/m,B=v/y)}const Y=k+v;if(Y>t){const X=t/Y;k=k*X,O=k/E,v=v*X,M=v/m,B=v/y}const H=0;u.push({x:H,y:0,width:k,height:O,orientation:"portrait"}),h+=k*O,l.find(X=>X.orientation==="wide")&&(u.push({x:H+k,y:0,width:v,height:M,orientation:"wide"}),h+=v*M),l.find(X=>X.orientation==="landscape")&&(u.push({x:H+k,y:M,width:v,height:B,orientation:"landscape"}),h+=v*B)}}else if(s===1&&f===3){const E=I.portrait,m=o,y=m*E,c=y,a=t-c;u.push({x:0,y:0,width:y,height:m,orientation:"portrait"}),h+=y*m;const i=o/3;for(let g=0;g<l.length;g++){const x=l[g],d=I[x.orientation],w=i,j=a;let N,L;j/d<=w?(N=j,L=N/d):(L=w,N=L*d);const _=g*i+(i-L)/2;u.push({x:c+(a-N)/2,y:_,width:N,height:L,orientation:x.orientation}),h+=N*L}}else if(s===2&&f===1){const E=I.portrait,m=l[0],y=I[m.orientation],c=o/2,a=c*E,i=t-a,g=o*y;let x,d;g<=i?(d=o,x=d*y):(x=i,d=x/y);const w=a,j=c,N=(o-d)/2,L=(o/2-j)/2,_=o/2+(o/2-j)/2;u.push({x:0,y:N,width:x,height:d,orientation:m.orientation}),h+=x*d,u.push({x:i,y:L,width:w,height:j,orientation:"portrait"}),h+=w*j,u.push({x:i,y:_,width:w,height:j,orientation:"portrait"}),h+=w*j}else if(s===1&&f===2){const E=I.portrait,m=o,y=m*E,c=y,a=t-c;u.push({x:0,y:0,width:y,height:m,orientation:"portrait"}),h+=y*m;const i=o/2;for(let g=0;g<l.length;g++){const x=l[g],d=I[x.orientation],w=i,j=a;let N,L;j/d<=w?(N=j,L=N/d):(L=w,N=L*d);const _=g*i+(i-L)/2;u.push({x:c+(a-N)/2,y:_,width:N,height:L,orientation:x.orientation}),h+=N*L}}else{const E=s;if(E>0){const m=o/E,y=I.portrait;for(let c=0;c<E;c++){const a=Math.min(m,p/y),i=a*y,g=c*m+(m-a)/2;u.push({x:(p-i)/2,y:g,width:i,height:a,orientation:"portrait"}),h+=i*a}}if(l.length>0){const m=o/l.length;for(let y=0;y<l.length;y++){const c=l[y],a=I[c.orientation],i=m,g=S;let x,d;g/a<=i?(x=g,d=x/a):(d=i,x=d*a);const w=y*m+(m-d)/2;u.push({x:p+(S-x)/2,y:w,width:x,height:d,orientation:c.orientation}),h+=x*d}}}const A=J(n,u),b=h/(t*o)*100;return{videos:A,totalArea:h,efficiency:b}}function J(e,n){const t=new Array(n.length),o=new Set,s=new Set;for(let p=0;p<n.length;p++){const S=n[p];for(let u=0;u<e.length;u++)if(!o.has(u)&&e[u].orientation===S.orientation){t[p]={...S,orientation:e[u].orientation},o.add(u),s.add(p);break}}const f=[];for(let p=0;p<n.length;p++)s.has(p)||f.push(p);let l=0;for(let p=0;p<e.length;p++)if(!o.has(p)&&l<f.length){const S=f[l];t[S]={...n[S],orientation:e[p].orientation},l++}return t}function Nn(e,n,t,o){if(e.portrait>0)return ve(e,n,t,o);if(e.landscape===2&&e.wide===1){const c=I.landscape,a=I.wide,i=t,g=i/a,x=o-g,d=t/2,w=d/c;let j,N,L,_;if(g<=o&&w<=x)j=i,N=g,L=d,_=w;else{const Y=o/(g+w),H=Math.min(1,Y);N=g*H,j=N*a,_=w*H,L=_*c}const k=(t-j)/2,O=N+(x-_)/2,M=J(n,[{x:k,y:0,width:j,height:N,orientation:"wide"},{x:0,y:O,width:L,height:_,orientation:"landscape"},{x:L,y:O,width:L,height:_,orientation:"landscape"}]),B=j*N+L*_*2,F=B/(t*o)*100;return{videos:M,totalArea:B,efficiency:F}}if(e.landscape===1&&e.wide===2){const c=I.landscape,a=I.wide,i=t/2,g=i/a,d=o-g,w=d*c;let j,N,L,_;if(g<=o&&w<=t&&g+d<=o)j=i,N=g,L=w,_=d;else{const H=g+d,be=o/H;j=i,N=g*be,_=d*be,L=_*c}const k=0,O=t/2,v=(t-L)/2,B=J(n,[{x:k,y:0,width:j,height:N,orientation:"wide"},{x:O,y:0,width:j,height:N,orientation:"wide"},{x:v,y:N,width:L,height:_,orientation:"landscape"}]),F=j*N*2+L*_,Y=F/(t*o)*100;return{videos:B,totalArea:F,efficiency:Y}}if(e.wide===3){const c=I.wide,a=t/2,i=a/c,x=o-i,d=x*c;let w,j,N,L;if(i<=o&&d<=t&&i+x<=o)w=a,j=i,N=d,L=x;else{const Y=i+x,H=o/Y;w=a,j=i*H,L=x*H,N=L*c,N>t&&(N=t,L=N/c)}const _=0,k=t/2,O=(t-N)/2,M=J(n,[{x:_,y:0,width:w,height:j,orientation:"wide"},{x:k,y:0,width:w,height:j,orientation:"wide"},{x:O,y:j,width:N,height:L,orientation:"wide"}]),B=w*j*2+N*L,F=B/(t*o)*100;return{videos:M,totalArea:B,efficiency:F}}if(e.landscape===3){const c=I.landscape,a=t/(c*1.5),i=Math.min(o,a),g=i/2,x=i,d=g*c,w=x*c,j=(o-i)/2,N=[{x:0,y:j,width:d,height:g,orientation:"landscape"},{x:0,y:j+g,width:d,height:g,orientation:"landscape"},{x:d,y:j,width:w,height:x,orientation:"landscape"}],L=J(n,N),_=d*i+w*i,k=_/(t*o)*100;return{videos:L,totalArea:_,efficiency:k}}const s=[];if(e.landscape>0)for(let c=0;c<e.landscape;c++)s.push("landscape");if(e.wide>0)for(let c=0;c<e.wide;c++)s.push("wide");const f=s[0]||n[0].orientation,l=s[1]||n[1].orientation,p=s[2]||n[2].orientation,S=I[f],u=I[l],h=I[p],A=[()=>{const c=t*.6,a=t*.4,i=c/S,g=a/u,x=a/h,d=g+x;return i<=o&&d<=o?{positions:[{x:0,y:(o-i)/2,width:c,height:i,orientation:f},{x:c,y:0,width:a,height:g,orientation:l},{x:c,y:g,width:a,height:x,orientation:p}],totalArea:c*i+a*g+a*x}:null},()=>{const c=o*.5,a=o*.5,i=c*S,g=c*u,x=a*h;return i+g<=t&&x<=t?{positions:[{x:0,y:0,width:i,height:c,orientation:f},{x:i,y:0,width:g,height:c,orientation:l},{x:(t-x)/2,y:c,width:x,height:a,orientation:p}],totalArea:i*c+g*c+x*a}:null},()=>{const c=t/3,a=c/S,i=c/u,g=c/h;return Math.max(a,i,g)<=o?{positions:[{x:0,y:(o-a)/2,width:c,height:a,orientation:f},{x:c,y:(o-i)/2,width:c,height:i,orientation:l},{x:c*2,y:(o-g)/2,width:c,height:g,orientation:p}],totalArea:c*a+c*i+c*g}:null}];let b=null,E=0;for(const c of A){const a=c();a&&a.totalArea>E&&(E=a.totalArea,b=a)}if(!b){const c=t/3,a=Math.min(c/S,o),i=Math.min(c/u,o),g=Math.min(c/h,o);b={positions:[{x:0,y:(o-a)/2,width:c,height:a,orientation:f},{x:c,y:(o-i)/2,width:c,height:i,orientation:l},{x:c*2,y:(o-g)/2,width:c,height:g,orientation:p}],totalArea:c*a+c*i+c*g}}const m=J(n,b.positions),y=b.totalArea/(t*o)*100;return{videos:m,totalArea:b.totalArea,efficiency:y}}function Rn(e,n,t,o){if(e.portrait>0)return ve(e,n,t,o);const s=[];if(e.landscape>0)for(let i=0;i<e.landscape;i++)s.push("landscape");if(e.wide>0)for(let i=0;i<e.wide;i++)s.push("wide");const f=s[0]||n[0].orientation,l=s[1]||n[1].orientation,p=s[2]||n[2].orientation,S=s[3]||n[3].orientation,u=I[f],h=I[l],A=I[p],b=I[S],E=[()=>{const i=t/2,g=o/2,x=Math.min(i,g*u),d=x/u,w=Math.min(i,g*h),j=w/h,N=Math.min(i,g*A),L=N/A,_=Math.min(i,g*b),k=_/b;return{positions:[{x:(i-x)/2,y:(g-d)/2,width:x,height:d,orientation:f},{x:i+(i-w)/2,y:(g-j)/2,width:w,height:j,orientation:l},{x:(i-N)/2,y:g+(g-L)/2,width:N,height:L,orientation:p},{x:i+(i-_)/2,y:g+(g-k)/2,width:_,height:k,orientation:S}],totalArea:x*d+w*j+N*L+_*k}},()=>{const i=t*.6,g=t*.4,x=i/u,d=o/3,w=Math.min(g,d*h),j=w/h,N=Math.min(g,d*A),L=N/A,_=Math.min(g,d*b),k=_/b;return x<=o?{positions:[{x:0,y:(o-x)/2,width:i,height:x,orientation:f},{x:i,y:0,width:w,height:j,orientation:l},{x:i,y:d,width:N,height:L,orientation:p},{x:i,y:d*2,width:_,height:k,orientation:S}],totalArea:i*x+w*j+N*L+_*k}:null},()=>{const i=t/4,g=i/u,x=i/h,d=i/A,w=i/b;return Math.max(g,x,d,w)<=o?{positions:[{x:0,y:(o-g)/2,width:i,height:g,orientation:f},{x:i,y:(o-x)/2,width:i,height:x,orientation:l},{x:i*2,y:(o-d)/2,width:i,height:d,orientation:p},{x:i*3,y:(o-w)/2,width:i,height:w,orientation:S}],totalArea:i*g+i*x+i*d+i*w}:null}];let m=null,y=0;for(const i of E){const g=i();g&&g.totalArea>y&&(y=g.totalArea,m=g)}if(!m){const i=t/2,g=o/2,x=Math.min(g,i/u),d=Math.min(g,i/h),w=Math.min(g,i/A),j=Math.min(g,i/b);m={positions:[{x:(i-i)/2,y:(g-x)/2,width:i,height:x,orientation:f},{x:i+(i-i)/2,y:(g-d)/2,width:i,height:d,orientation:l},{x:(i-i)/2,y:g+(g-w)/2,width:i,height:w,orientation:p},{x:i+(i-i)/2,y:g+(g-j)/2,width:i,height:j,orientation:S}],totalArea:i*x+i*d+i*w+i*j}}const c=J(n,m.positions),a=m.totalArea/(t*o)*100;return{videos:c,totalArea:m.totalArea,efficiency:a}}const _n=e=>{const n=W();n.HASS_HOST;const[t,o]=T.useState({}),[s,f]=T.useState(!0),[l,p]=T.useState(null);T.useEffect(()=>{if(!e||e.length===0){f(!1);return}let h=!0;async function A(){f(!0),p(null);try{const b=e.map(async m=>{try{const y=P(`/api/states/${m}`,n),a=(await $(y)).data?.attributes?.access_token||null;return{entityId:m,accessToken:a}}catch(y){return R.error(`Failed to fetch access token for ${m}:`,y),{entityId:m,accessToken:null}}}),E=await Promise.all(b);if(h){const m={};E.forEach(({entityId:y,accessToken:c})=>{c&&(m[y]=c)}),o(m),f(!1)}}catch(b){h&&(R.error("Failed to fetch camera access tokens:",b),p(z(b)),f(!1))}}return A(),()=>{h=!1}},[e?.length,e?.join(",")]),T.useEffect(()=>{if(!e||e.length===0)return;let h=!0,A=null;async function b(){if(h)try{const E=e.map(async y=>{try{const c=P(`/api/states/${y}`,n),i=(await $(c)).data?.attributes?.access_token||null;return{entityId:y,accessToken:i}}catch(c){return R.debug(`Failed to refresh access token for ${y}:`,c),null}}),m=await Promise.all(E);h&&o(y=>{const c={...y};return m.forEach(a=>{a&&a.accessToken&&(c[a.entityId]=a.accessToken)}),c})}catch{}}return A=setInterval(b,300*1e3),()=>{h=!1,A&&clearInterval(A)}},[e?.length,e?.join(",")]);const{error:S}=le({enabled:!!(e&&e.length>0),checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3,logPrefix:"camera tokens",onReady:(h,A)=>{const b=E=>{const m=E.entity_id,c=(E.attributes||{}).access_token||null;o(a=>c?{...a,[m]:c}:a)};return h.readyState===WebSocket.OPEN&&(e.forEach(E=>{A.current.set(E,b),h.send(JSON.stringify({type:"subscribe_entity",entity_id:E}))}),R.debug(`Subscribed to camera entity state changes: ${e.join(", ")}`)),()=>{e.forEach(E=>{A.current.delete(E),h.readyState===WebSocket.OPEN&&h.send(JSON.stringify({type:"unsubscribe_entity",entity_id:E}))})}},dependencies:[e?.length,e?.join(",")]});return[t,s,l||S||null]},kn=(e,n=null,t={})=>{if(!e)return null;let o;if(o=`/api/camera_proxy_stream/${e}`,n){const s=o.includes("?")?"&":"?";o=`${o}${s}token=${encodeURIComponent(n)}`}return o},Be=45e3,On=D.div`
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
`,Dn=()=>{const e=W(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[],[o,s]=T.useState(!1),[f]=Sn(),[l,p]=T.useState(void 0),[S,u]=T.useState(100),[h,A]=T.useState("0"),b=T.useMemo(()=>t.map(a=>a.entity_id).filter(Boolean),[t]),[E]=_n(b);T.useEffect(()=>{if(f==="off"&&o){const a=window.setTimeout(()=>{s(!1),p(void 0)},Be);return p(a),A(Be+"ms"),u(0),()=>{a&&window.clearTimeout(a)}}else f==="on"&&(A(0),u(100),s(!0))},[f,o]),T.useEffect(()=>{f==="on"&&l!==void 0&&(window.clearTimeout(l),A(0),u(100),p(void 0))},[l,f]);const[m,y]=T.useState(null),c=()=>{m===null?y("confirm"):m==="confirm"&&(y("opening"),Tn(e),setTimeout(()=>y(null),2e3))};return T.useEffect(()=>{if(m==="confirm"){const a=setTimeout(()=>{y(null)},3e3);return()=>{clearTimeout(a)}}},[m]),T.useEffect(()=>{o||y(null)},[o]),n?r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>s(a=>!a),children:"CCTV"}),r.jsx(ce,{visible:o,onClick:c,onClose:()=>{s(!1),y(null)},fullsize:!0,children:r.jsxs(On,{onClick:c,children:[r.jsx(lt,{completed:S,height:10,bgColor:l===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:h,transitionTimingFunction:"linear"}),r.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const a=t.map(j=>({orientation:j.orientation||"landscape"})),i=window.innerWidth,g=window.innerHeight-10,x=at(a,i,g),d={portrait:t.filter(j=>(j.orientation||"landscape")==="portrait"),landscape:t.filter(j=>(j.orientation||"landscape")==="landscape"),wide:t.filter(j=>j.orientation==="wide")},w={portrait:0,landscape:0,wide:0};return x.videos.map((j,N)=>{const L=j.orientation,_=w[L],k=d[L][_];if(!k)return null;w[L]++;const O=E[k.entity_id]||null,v=kn(k.entity_id,O,e);return v?r.jsxs("div",{className:"video-container",style:{left:`${j.x}px`,top:`${j.y}px`,width:`${j.width}px`,height:`${j.height}px`},children:[r.jsx("img",{src:v,className:L,alt:"Camera stream",crossOrigin:"anonymous"},`${k.entity_id}-${N}`),r.jsx("div",{className:"video-overlay",onClick:()=>c()})]},`${L}-${_}-${N}`):null})})()}),m==="confirm"&&r.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),m==="opening"&&r.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]}):null},vn=D.div`
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

`,In=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>r.jsxs(vn,{children:[r.jsxs("div",{className:"buttons",children:[r.jsx(U,{path:_t,size:"32px",color:"#ffffff",onClick:n}),r.jsx(U,{path:kt,size:"32px",color:"#ffffff",onClick:e}),r.jsx("button",{onClick:t,children:"Today"}),r.jsx(Dn,{})]}),r.jsx(mn,{}),r.jsx(U,{path:Ot,size:"32px",color:"#ffffff",className:G("indicator")})]}),$n=C.memo(In),Mn=6e4,Ie=(e=Mn,n=void 0)=>{const[t,o]=T.useState(!0);return T.useEffect(()=>{const s=setInterval(()=>{o(f=>!f)},e);return()=>{clearInterval(s)}},[e,n]),t},Pn={mdiDelete:vt,mdiCake:Dt},Wn=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Pn[n]||void 0},Bn=(e,n,t,o,s,f)=>$(s(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:65e3,signal:f}).then(l=>{!l.data||!Array.isArray(l.data)||l.data.forEach(p=>{const S="dateTime"in p.start?V.fromISO(p.start.dateTime):V.fromSQL(p.start.date);let u;"dateTime"in p.end?u=Math.floor(V.fromISO(p.end.dateTime).diff(n,"days").as("days")):u=Math.floor(V.fromSQL(p.end.date).diff(n,"days").as("days"))-1;const h=Math.floor(S.diff(n,"days").as("days"));u>=o.length&&(u=o.length-1);const A="dateTime"in p.start?"events":"allDay";if(h>=0&&h<o.length)for(let b=h;b<=u;b++)o[b][A]=[...o[b][A],{...p,icon:e.icon}]})}).catch(l=>{if(!($.isCancel(l)||l.name==="AbortError"||l.code==="ERR_CANCELED"))throw l}),Ve=new Map,Vn=300*1e3,Gn=e=>e.toISODate(),Fn=(e,n,t,o,s,f,l,p,S)=>{const u=[0,1,2,3,4,5].map(m=>e.plus({days:m}).startOf("day"));u[6]=e.plus({days:6}).endOf("day");const h=Gn(e),A=Ve.get(h);if(A&&Date.now()-A.timestamp<Vn){S.current&&t(A.data);return}const b=u.map(m=>({date:m,allDay:[],events:[]}));if(!l||l.length===0){R.warn("loadAll: No calendars configured, skipping fetch",{calendars:l}),S.current&&(t(b),o(!1));return}R.debug("loadAll: Starting calendar fetch",{calendarsCount:l.length,calendars:l.map(m=>m.name),startDate:e.toISO(),endDate:u[6].toISO()});const E=new AbortController;s.current&&s.current.abort(),s.current=E;try{S.current&&o(!0);const m=l.map(y=>Bn(y,u[0],u[6],b,p,E.signal));Promise.all(m).then(()=>{S.current&&!E.signal.aborted&&(Ve.set(h,{data:b,timestamp:Date.now()}),t(b),f(!1))}).catch(y=>{S.current&&!E.signal.aborted&&f(z(y))}).finally(()=>{S.current&&!E.signal.aborted&&o(!1)})}catch(m){S.current&&!E.signal.aborted&&(f(z(m)),o(!1))}},Ge=[],Un=e=>{const n=W(),t=n.CALENDARS||[];T.useEffect(()=>{R.debug("useCalendarData: config changed",{hasCALENDARS:"CALENDARS"in n,CALENDARS:n.CALENDARS,CALENDARSCount:Array.isArray(n.CALENDARS)?n.CALENDARS.length:"not array",configKeys:Object.keys(n)})},[n]);const o=T.useMemo(()=>{const c=t.map(a=>({name:a.name,icon:Wn(a.icon)}));return R.debug("Processing calendars from config (memo update):",{CALENDARS:t,count:t.length,processedCount:c.length,processed:c.map(a=>a.name)}),c},[t]);T.useEffect(()=>{R.debug("CALENDARS array changed:",{CALENDARS:t,count:t.length,calendarsMemoCount:o.length})},[t,o.length]);const s=T.useCallback(c=>P(`/api/calendars/${c}`,n),[n]),f=T.useCallback((c,a)=>`${s(c)}?${Kt.stringify(a)}`,[s]),[l,p]=T.useState(Ge),[S,u]=T.useState(!1),[h,A]=T.useState(!1),[b,E]=T.useState(null),m=C.useRef(null),y=C.useRef(!0);return Ie(6e4,"Calendar"),T.useEffect(()=>(y.current=!0,R.debug("useCalendarData effect triggered:",{startDate:e?.toISO(),calendarsCount:o.length,calendars:o.map(c=>c.name),hasStartDate:e!==void 0,hasCalendars:o.length>0}),e!==void 0&&o.length>0?((b===null||!b.equals(e))&&(p(Ge),E(e)),R.debug("useCalendarData: Calling loadAll",{startDate:e.toISO(),calendarsCount:o.length}),Fn(e,l,p,u,m,A,o,f,y)):o.length,()=>{y.current=!1,m.current&&m.current.abort()}),[e,o,f]),[l,h]};function ae(e){const[n,t]=T.useState(!1);function o({key:f}){f===e&&t(!0)}const s=({key:f})=>{f===e&&t(!1)};return T.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",s)}),[e]),n}const Yn=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return V.fromJSDate(o)},zn=e=>{const n=()=>e(p=>p.plus({days:7})),t=ae("ArrowRight");T.useEffect(()=>{t&&n()},[t]);const o=()=>e(p=>p.minus({days:7})),s=ae("ArrowLeft");T.useEffect(()=>{s&&o()},[s]);const f=()=>e(Yn()),l=ae("t");return T.useEffect(()=>{l&&f()},[l]),{nextWeek:n,previousWeek:o,startWeekWithToday:f}},Hn=e=>{const[n,t]=C.useState(0),[o,s]=C.useState(0),f=50;return{onTouchStart:u=>{s(0),t(u.targetTouches[0].clientX)},onTouchMove:u=>s(u.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const u=n-o,h=u>f,A=u<-f;h&&e.onSwipedLeft(),A&&e.onSwipedRight()}}},Fe=e=>V.fromISO(e).toLocaleString(V.TIME_24_SIMPLE),Te=e=>e.toFormat("c")>=6,Ce=e=>e.hasSame(V.now(),"day"),qn=D.div`
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
`,Kn=()=>{const[e,n]=T.useState(void 0),[t,o]=Un(e),{nextWeek:s,previousWeek:f,startWeekWithToday:l}=zn(n);T.useEffect(()=>{e===void 0&&l()},[]),T.useEffect(()=>{console.log("Week component - startDate:",e?.toISO(),"data length:",t.length,"error:",o)},[e,t.length,o]);const p=Hn({onSwipedLeft:()=>s(),onSwipedRight:()=>f()}),S=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),u=C.useMemo(()=>t.slice(0,7),[t]);return r.jsxs(qn,{...p,children:[r.jsx($n,{nextWeek:s,previousWeek:f,startWeekWithToday:l}),r.jsxs("div",{className:"schedule",children:[u.map((h,A)=>r.jsx("div",{className:G({weekend:Te(h.date),today:Ce(h.date)},"caption"),children:r.jsx("h2",{children:h.date.toLocaleString(S)})},A)),u.map((h,A)=>r.jsx("div",{className:G("allDayRow",{weekend:Te(h.date),today:Ce(h.date)}),children:h.allDay.map((b,E)=>r.jsx("div",{className:"allDayEvent",children:b.summary},E))},A)),u.map((h,A)=>r.jsx("div",{className:G("eventRow",{weekend:Te(h.date),today:Ce(h.date)}),children:h.events.map((b,E)=>r.jsxs("div",{className:"event",children:[r.jsx("div",{children:b.summary}),r.jsxs("h3",{children:[b.icon&&r.jsx(U,{path:b.icon,size:"1rem",color:"#ffffff"}),Fe(b.start.dateTime)," - ",Fe(b.end.dateTime)]})]},E))},A))]}),t.length===0&&r.jsx("div",{className:"loading",children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsx(Ze,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&r.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:r.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},we={"clear-day":{icon:wt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:yt,label:"Klar",color:"#eeeef5"},rain:{icon:xt,label:"Regen",color:"#80a5d6"},snow:{icon:mt,label:"Schnee",color:"#8c82ce"},sleet:{icon:gt,label:"Graupel",color:"#aba4db"},wind:{icon:pt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:ht,label:"Neblig",color:"#d5dae2"},cloudy:{icon:ft,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:ut,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:dt,label:"Teils bewölkt",color:"#d5dae2"}},Jn=e=>{const[n,t]=T.useState([]),[o,s]=T.useState(!1),f=Ie(6e4*10,"Weather"),l=W(),p=l.ENABLE_WEATHER||!1,S=l.WEATHER_LATITUDE,u=l.WEATHER_LONGITUDE,h=p&&S&&u,A=()=>`./forecast/${S},${u}?&units=si&exclude=minutely`;return T.useEffect(()=>{if(!h)return;let b=!0;const E=new AbortController;return $(A(),{signal:E.signal}).then(m=>{b&&(t(m.data),s(!1))}).catch(m=>{b&&!E.signal.aborted&&s(z(m))}).finally(()=>{b&&e&&e(!1)}),()=>{b=!1,E.abort()}},[f,e,h,p,S,u]),[n,o]},Xn=bt(At),Ue=D.div`

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
`,Ye=C.memo(({data:e,daily:n=!1})=>r.jsxs("div",{children:[r.jsxs("div",{children:[!n&&V.fromSeconds(e.time).toLocaleString(V.TIME_24_SIMPLE),n&&V.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),r.jsx("div",{children:r.jsx(ke,{icon:e.icon})}),r.jsx("div",{children:r.jsxs("strong",{children:[!n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),r.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),r.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Qn=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:we[n.icon]?.color||"#ffffff",text:we[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),ke=({icon:e})=>{const n=we[e];return r.jsx(n.icon,{size:60,color:"#ffffff"})},Zn=()=>{const n=W().ENABLE_WEATHER||!1,[t,o]=Jn(),[s,f]=T.useState(!1),l=ae("w"),p=T.useRef(),S=C.useCallback(()=>f(E=>!E),[]),u=C.useCallback(()=>f(!0),[]),h=C.useMemo(()=>Qn(t),[t]),A=C.useMemo(()=>[3,6,9,12],[]),b=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return T.useEffect(()=>{if(!s||!p.current||!t||!t.hourly||h.length===0)return;const E={timezone:"Europe/Berlin"},m=document.createElement("div");return p.current.textContent="",p.current.appendChild(m),Jt(m,h,E),()=>{p.current&&(p.current.textContent="")}},[s,h]),T.useEffect(()=>{l&&S()},[l]),n?!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?r.jsx(Ue,{children:r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":r.jsxs(Ue,{children:[r.jsxs("div",{onClick:u,children:[r.jsxs("div",{className:"headline",children:[r.jsx(ke,{icon:t.currently.icon}),r.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),r.jsx("div",{className:"forecast",children:A.map((E,m)=>r.jsx(Ye,{data:t.hourly.data[E]},m))})]}),r.jsx(ce,{visible:s,onClick:S,children:r.jsxs("div",{className:"full-weather",children:[o!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),r.jsxs("div",{className:"detail-header",children:[r.jsx("div",{children:r.jsxs("div",{className:"headline",children:[r.jsx(ke,{icon:t.daily.data[0].icon}),r.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",r.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),r.jsx("h3",{children:we[t.daily.data[0].icon].label})]}),r.jsx("div",{className:"values",children:r.jsxs("div",{className:"table",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Regen:"})," ",Math.round(t.daily.data[0].precipProbability*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),r.jsx("h3",{children:"Die nächsten 24 Stunden"}),r.jsx("div",{ref:p}),r.jsx("h3",{children:"Die nächste Woche"}),r.jsx("div",{className:"forecast",children:b.map((E,m)=>r.jsx(Ye,{data:t.daily.data[E],daily:!0},m))}),r.jsxs("div",{className:"info",children:["Aktualisiert ",r.jsx(Et,{date:V.fromSeconds(t.currently.time).toJSDate(),formatter:Xn})]})]})})]}):null},eo=C.memo(Zn),to="AK Wandsbek",no="Hamburg",oo="Master:62016",ro="STATION",io={x:10.091341,y:53.568702},so={name:to,city:no,id:oo,type:ro,coordinate:io},xe={departureList:"departureList",checkName:"checkName"},ao=async(e,n,t,o)=>{const s={Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},f=o.HASS_ACCESS_TOKEN||"";f&&f.trim()!==""&&f!=="undefined"&&f!=="null"&&(s.Authorization=`Bearer ${f}`);const l=P(`/gti/public/${e}`,o);return $({method:"post",url:l,data:n,signal:t,headers:s})},ze=(e,n)=>e.realtimeOffset-n.realtimeOffset,co=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(ze),to:n.filter(t=>t.directionId===6).slice(0,3).sort(ze)}},lo=e=>{const n=W(),t=n.ENABLE_HVV||!1,[o,s]=T.useState([]),[f,l]=T.useState(!1),p=Ie(6e4),S=t;return T.useEffect(()=>{if(!S)return;if(!(e in xe)){R.warn(e,"not supported by HVV connector");return}let u=!0;const h=new AbortController;let A={version:51};switch(e){case xe.checkName:A={...A,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case xe.departureList:const b=V.now();A={...A,station:so,time:{date:b.toFormat("dd.MM.yyyy"),time:b.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:A=void 0}return ao(e,A,h.signal,n).then(b=>{u&&(s(co(b.data)),l(!1))}).catch(b=>{u&&!h.signal.aborted&&l(z(b))}),()=>{u=!1,h.abort()}},[e,p,S,t]),[o,f]},uo=D.div`
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
`,He=C.memo(({line:e,direction:n,realtimeOffset:t})=>r.jsxs("div",{className:"departure",children:[r.jsx("div",{children:r.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),r.jsx("div",{children:t===0?"Jetzt":r.jsxs(r.Fragment,{children:["in ",t," '"]})})]})),fo=()=>{const n=W().ENABLE_HVV||!1,[t,o]=lo(xe.departureList);return n?r.jsx(uo,{children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((s,f)=>r.jsx(He,{line:s.line,direction:s.direction,realtimeOffset:s.realtimeOffset},f)),r.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((s,f)=>r.jsx(He,{line:s.line,direction:s.direction,realtimeOffset:s.realtimeOffset},f))]})}):null},ho=C.memo(fo),po=()=>{const e=W(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const o=e.ENTITY_CHARGING_STATE||"",s=e.ENTITY_STATE_OF_CHARGE||"",[f,l]=T.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[p,S]=T.useState(!1),u=n&&(t||o||s);T.useEffect(()=>{if(!u)return;(async()=>{const E=[];t&&E.push($(P(`/api/states/${t}`,e)).then(c=>({type:"preclimateStatus",value:c.data.state==="on"})).catch(c=>({type:"preclimateStatus",error:z(c)}))),o&&E.push($(P(`/api/states/${o}`,e)).then(c=>({type:"chargingState",value:c.data.state==="on"})).catch(c=>({type:"chargingState",error:z(c)}))),s&&E.push($(P(`/api/states/${s}`,e)).then(c=>({type:"stateOfCharge",value:parseFloat(c.data.state)||0})).catch(c=>({type:"stateOfCharge",error:z(c)})));const m=await Promise.all(E);let y=!1;m.forEach(c=>{c.error?y=c.error:l(a=>({...a,[c.type]:c.value}))}),S(y||!1)})()},[u,n,t,o,s]);const{error:h}=le({enabled:u,checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3,logPrefix:"EV entities",onReady:(b,E)=>{const m=c=>{const a=c.entity_id,i=c.state;l(g=>{const x={...g};return a===t?x.preclimateStatus=i==="on":a===o?x.chargingState=i==="on":a===s&&(x.stateOfCharge=parseFloat(i)||0),x})},y=[];return t&&y.push(t),o&&y.push(o),s&&y.push(s),b.readyState===WebSocket.OPEN&&(y.forEach(c=>{E.current.set(c,m),b.send(JSON.stringify({type:"subscribe_entity",entity_id:c}))}),R.debug(`Subscribed to EV entity state changes: ${y.join(", ")}`)),()=>{y.forEach(c=>{E.current.delete(c),b.readyState===WebSocket.OPEN&&b.send(JSON.stringify({type:"unsubscribe_entity",entity_id:c}))})}},dependencies:[u,t,o,s]});return[f,p||h||!1]},go=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&$.post(P("/api/services/button/press",e),{entity_id:n}).catch(t=>{R.error("Failed to start preclimate:",t)})},mo=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&$.post(P("/api/services/button/press",e),{entity_id:n}).catch(t=>{R.error("Failed to stop preclimate:",t)})},xo=D.div`
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
`,yo=(e,n)=>n?$t:e>=80?Mt:e>=50?Pt:e>=20?Wt:Bt,wo=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",Eo=()=>{const e=W(),n=e.ENABLE_EV||!1,[t,o]=po(),{preclimateStatus:s,chargingState:f,stateOfCharge:l}=t,[p,S]=C.useState(!1),[u,h]=C.useState(null),[A,b]=C.useState(!1),[E,m]=C.useState(!1),[y,c]=C.useState(0),a=C.useRef(null),i=C.useRef(null),g=C.useRef(s),x=C.useRef(null);C.useEffect(()=>{g.current!==s&&(p&&x.current!==null&&s===(u==="start")&&(c(u==="start"?360:0),m(!0),setTimeout(()=>{S(!1),h(null),m(!1),c(0),x.current=null,b(!1)},300),a.current&&(clearTimeout(a.current),a.current=null)),g.current=s)},[s,p,u]),C.useEffect(()=>{if(!p||E){i.current&&(cancelAnimationFrame(i.current),i.current=null);return}const O=x.current||Date.now(),v=1e4,M=u==="stop",B=()=>{const F=Date.now()-O,Y=Math.min(F/v,1);c(M?360*(1-Y):360*Y),Y<1&&!E&&(i.current=requestAnimationFrame(B))};return i.current=requestAnimationFrame(B),()=>{i.current&&(cancelAnimationFrame(i.current),i.current=null)}},[p,E,u]),C.useEffect(()=>()=>{a.current&&clearTimeout(a.current),i.current&&cancelAnimationFrame(i.current)},[]);const d=C.useCallback(()=>{if(o!==!1||p)return;const O=!s,v=O?"start":"stop";S(!0),h(v),m(!1),b(!1),c(0),x.current=Date.now(),g.current=s,O?go(e):mo(e),a.current=setTimeout(()=>{p&&(b(!0),setTimeout(()=>{S(!1),h(null),m(!1),c(0),b(!1),x.current=null},500))},15e3)},[s,o,p]),w=yo(l||0,f),j=wo(l||0),N=Math.round(l||0),L=p?u==="start":s,_=u==="start"?"#17e146":"#f85a5a",k=u==="start"?"clockwise":"counterclockwise";return n?r.jsxs(xo,{className:G({disabled:o!==!1}),children:[r.jsxs("h2",{children:["Auto",o!==!1?r.jsxs("div",{className:"battery-info",children:[r.jsx(U,{path:De,size:"1.2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs("div",{className:"battery-info",children:[r.jsxs("span",{className:"charge-percentage",children:[N,"%"]}),r.jsx(U,{path:w,size:"1.2rem",color:j})]})]}),o===!1&&r.jsxs("div",{className:"preclimate-button-wrapper",children:[p&&r.jsx("div",{className:G("progress-ring",k,{complete:E}),style:{"--progress-color":_,"--progress-angle":`${y}deg`,"--progress-gradient":u==="stop"?`conic-gradient(from -90deg, ${_} 0deg, ${_} ${y}deg, transparent ${y}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${_} 0deg, ${_} ${y}deg, transparent ${y}deg, transparent 360deg)`}}),r.jsxs("button",{className:G("preclimate-button",{spinning:L&&!p,shaking:A}),onClick:d,disabled:o!==!1||p,children:[r.jsx(U,{path:It,size:"2rem",color:L?"#ff9800":"#ffffff"}),r.jsx("span",{children:L?"Stop":"Start"})]})]})]}):null},bo=C.memo(Eo),Ao=()=>{const e=W(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",[o,s]=T.useState("closed"),[f,l]=T.useState(!1),p=n&&t,S=t?P(`/api/states/${t}`,e):null;T.useEffect(()=>{if(!p||!S)return;let A=!0;const b=new AbortController;return $(S,{signal:b.signal}).then(E=>{A&&(s(E.data.state),l(!1))}).catch(E=>{A&&!b.signal.aborted&&l(z(E))}),()=>{A=!1,b.abort()}},[p,S,n,t]);const{error:u}=le({enabled:p&&!!t,logPrefix:"garage door",onReady:(A,b)=>{const E=m=>{m.state!==void 0&&s(m.state)};return b.current.set(t,E),A.readyState===WebSocket.OPEN&&(A.send(JSON.stringify({type:"subscribe_entity",entity_id:t})),R.debug("Subscribed to garage door state changes")),()=>{b.current.delete(t),A.readyState===WebSocket.OPEN&&A.send(JSON.stringify({type:"unsubscribe_entity",entity_id:t}))}},dependencies:[p,t]});return[o,f||u||!1]},So=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);$.post(P("/api/services/cover/toggle",n),{entity_id:t}).catch(s=>{R.error("Failed to toggle garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},To=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);$.post(P("/api/services/cover/open_cover",n),{entity_id:t}).catch(s=>{R.error("Failed to open garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},Co=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);$.post(P("/api/services/cover/close_cover",n),{entity_id:t}).catch(s=>{R.error("Failed to close garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},jo=D.div`
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
`,ct=D.div`
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
`,Oe=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:Yt},open:{label:"Offen",icon:Ut},closed:{label:"Geschlossen",icon:Ft},opening:{label:"Öffnet",icon:Gt},closing:{label:"Schließt",icon:Vt}};return n[e]||R.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:zt}},Lo=({garageDoor:e,animate:n=!1})=>r.jsxs(ct,{className:G({animate:n}),children:[r.jsx(U,{path:Oe(e).icon,size:"2rem",color:"#ffffff"}),r.jsx("span",{children:Oe(e).label})]}),No=e=>St.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return Oe(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),Ro=()=>{const e=W(),n=e.ENABLE_GARAGE||!1,[t,o]=Ao(),[s,f]=T.useState(void 0),[l,p]=T.useState(!1),[S,u]=T.useState(!1);T.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!s){const m=new Promise(y=>{f({resolve:y})});No(m)}}else s&&(s.resolve(t),f(void 0))},[t]);const h=ae("g");T.useEffect(()=>{h&&o===!1&&So(p,e)},[h,o,e]);const A=C.useCallback(E=>{if(o===!1)switch(u(!1),E){case"open":To(p,e);break;case"close":Co(p,e);break}},[p,o,e]),b=C.useCallback(()=>{o===!1&&u(!0)},[o]);return n?r.jsxs(jo,{className:G({disabled:o!==!1}),children:[r.jsx("h2",{children:"Garage"}),r.jsx("div",{className:"status",onClick:b,children:o!==!1?r.jsxs(ct,{children:[r.jsx(U,{path:De,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsx(Lo,{garageDoor:t,animate:l})}),r.jsx(ce,{visible:S&&o===!1,onClick:()=>u(!1),children:r.jsxs("div",{className:"controls",children:[r.jsx("h2",{children:"Garagentor"}),r.jsx("div",{onClick:()=>A("open"),children:"Öffnen"}),r.jsx("div",{onClick:()=>A("close"),children:"Schließen"})]})})]}):null},_o=C.memo(Ro),ko=(e,n)=>e?P(`/api/states/${e}`,n):null,K={done:{label:"Fertig",animate:!1,icon:qt},off:{label:"Aus",animate:!1,icon:Ht},standby:{label:"Standby",animate:!1,icon:$e},running:{label:"Läuft …",animate:!0,icon:$e}},Oo={off:0,standby:2,running:16,done:256},Do=()=>{const e=W(),n=e.ENABLE_LAUNDRY||!1,t=e.LAUNDRY_MACHINES||[],o=Array.isArray(t)?t:[],[s,f]=T.useState({}),[l,p]=T.useState({}),{error:S}=le({enabled:n&&o.length>0,logPrefix:"laundry",onReady:(a,i)=>(o.forEach(g=>{if(g.entity_id){const x=d=>{d.state!==void 0&&f(w=>({...w,[g.entity_id]:d.state}))};i.current.set(g.entity_id,x),a.readyState===WebSocket.OPEN&&(a.send(JSON.stringify({type:"subscribe_entity",entity_id:g.entity_id})),R.debug(`Subscribed to ${g.entity_id} state changes`))}}),()=>{o.forEach(g=>{g.entity_id&&(i.current.delete(g.entity_id),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"unsubscribe_entity",entity_id:g.entity_id})))})}),dependencies:[o.map(a=>a.entity_id).join(",")]});T.useEffect(()=>{if(!n||o.length===0)return;const a=new Map;return o.forEach(i=>{if(!i.entity_id)return;const g=ko(i.entity_id,e);if(!g)return;const x=new AbortController;a.set(i.entity_id,x),$(g,{signal:x.signal}).then(d=>{f(w=>({...w,[i.entity_id]:d.data.state})),p(w=>({...w,[i.entity_id]:!1}))}).catch(d=>{x.signal.aborted||p(w=>({...w,[i.entity_id]:z(d)}))})}),()=>{a.forEach(i=>i.abort())}},[n,o.map(a=>a.entity_id).join(","),e]);const u=o.map(a=>({state:s[a.entity_id]||"off",error:l[a.entity_id]||S||!1,name:a.name})),[h,A]=T.useState(K.off),[b,E]=T.useState(!1),m=u.map(a=>a.state),y=u.map(a=>a.error);T.useEffect(()=>{const a=y.some(i=>i!==!1);E(a&&y.find(i=>i!==!1)||!1)},[y]),T.useEffect(()=>{const a=m.reduce((i,g)=>i+(Oo[g]||0),0);a===0?A(K.off):a<16?A(K.standby):a<256?A(K.running):a%256===0?A(K.done):a%256%16===0?A(K.running):a%256%2===0?A(K.done):A(K.running)},[m]);const c=u.map(a=>({label:a.name,state:a.state}));return[h,c,b]},vo=D.div`
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
`,Io=()=>{const n=W().ENABLE_LAUNDRY||!1,[t,o,s]=Do(),[f,l]=T.useState(!1),p=C.useCallback(()=>{s===!1&&l(!0)},[s]),S=C.useCallback(()=>l(!1),[]);return n?r.jsxs(vo,{className:G({disabled:s!==!1}),children:[r.jsx("h2",{children:"Wäsche"}),r.jsx("div",{className:"status",onClick:p,children:s!==!1?r.jsxs(r.Fragment,{children:[r.jsx(U,{path:De,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:G({animate:t.animate}),children:r.jsx(U,{path:t.icon,size:"2rem",color:"#ffffff"})}),r.jsx("span",{children:t.label})]})}),r.jsx(ce,{visible:f&&s===!1,onClick:S,children:r.jsxs("div",{className:"states",children:[r.jsx("h2",{children:"Wäsche"}),o.map((u,h)=>r.jsxs("div",{children:[r.jsx("div",{className:"subtitle",children:u.label}),r.jsx("div",{className:G({animate:K[u.state].animate}),children:r.jsx(U,{path:K[u.state].icon,size:2})}),r.jsx("div",{children:K[u.state].label})]},h))]})})]}):null},$o=C.memo(Io),Mo=D.div`
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
`,Po=()=>r.jsxs(Mo,{children:[r.jsxs("div",{className:"top-content",children:[r.jsx(eo,{}),r.jsx(ho,{}),r.jsx(bo,{})]}),r.jsxs("div",{className:"two-cols",children:[r.jsx(_o,{}),r.jsx($o,{})]})]}),Wo=C.memo(Po),qe=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],Bo=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],ye={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},Vo={landscape:"L",portrait:"P",wide:"W"},Go=D.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Fo=D.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Uo=D.div`
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
`,Ke=D.select`
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
`,Je=D.input`
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
`,Yo=D.button`
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
`,Xe=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,zo=D.button`
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
`,Ho=D.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,qo=D.div`
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
`,Ko=D.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Jo=D.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Xo=D.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,fe=D.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,he=D.div`
  font-size: 0.85rem;
  color: #cccccc;
`,pe=D.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Qo=D.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Zo=D.h3`
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
`,Qe=()=>{const[e,n]=C.useState(1920),[t,o]=C.useState(1080),[s,f]=C.useState("Full HD"),[l,p]=C.useState(""),[S,u]=C.useState(""),[h,A]=C.useState([{orientation:"landscape"}]),[b,E]=C.useState(null),m=C.useMemo(()=>at(h,e,t),[h,e,t]),y=d=>{const w=qe.find(j=>j.name===d);w&&w.width&&w.height?(n(w.width),o(w.height),f(d),p(""),u("")):d==="Custom"&&f("Custom")},c=()=>{const d=parseInt(l),w=parseInt(S);d>0&&w>0&&(n(d),o(w))},a=d=>{A(d.videos),E(d.name)},i=d=>{const w=[];for(let j=0;j<d;j++)w.push(h[j]||{orientation:"landscape"});A(w),E(null)},g=(d,w)=>{const j=[...h];j[d]={orientation:w},A(j),E(null)},x=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return r.jsxs(Go,{children:[r.jsx(Fo,{children:"Video Tiling Algorithm Demo"}),r.jsxs(Uo,{children:[r.jsxs(Z,{children:[r.jsx(ee,{children:"Screen Size Preset"}),r.jsx(Ke,{value:s,onChange:d=>y(d.target.value),children:qe.map(d=>r.jsx("option",{value:d.name,children:d.name},d.name))})]}),s==="Custom"&&r.jsxs(r.Fragment,{children:[r.jsxs(Z,{children:[r.jsx(ee,{children:"Custom Width"}),r.jsx(Je,{type:"number",value:l,onChange:d=>p(d.target.value),placeholder:"Width",min:"100"})]}),r.jsxs(Z,{children:[r.jsx(ee,{children:"Custom Height"}),r.jsx(Je,{type:"number",value:S,onChange:d=>u(d.target.value),placeholder:"Height",min:"100"})]}),r.jsxs(Z,{children:[r.jsx(ee,{children:" "}),r.jsx(Yo,{onClick:c,children:"Apply Custom Size"})]})]}),r.jsxs(Z,{children:[r.jsx(ee,{children:"Number of Videos"}),r.jsxs(Ke,{value:h.length,onChange:d=>i(parseInt(d.target.value)),children:[r.jsx("option",{value:"1",children:"1 Video"}),r.jsx("option",{value:"2",children:"2 Videos"}),r.jsx("option",{value:"3",children:"3 Videos"}),r.jsx("option",{value:"4",children:"4 Videos"})]})]}),h.map((d,w)=>r.jsxs(Z,{children:[r.jsxs(ee,{children:["Video ",w+1," Orientation"]}),r.jsxs(Xe,{children:[r.jsx(je,{active:d.orientation==="landscape",orientation:"landscape",onClick:()=>g(w,"landscape"),children:"Landscape"}),r.jsx(je,{active:d.orientation==="portrait",orientation:"portrait",onClick:()=>g(w,"portrait"),children:"Portrait"}),r.jsx(je,{active:d.orientation==="wide",orientation:"wide",onClick:()=>g(w,"wide"),children:"Wide"})]})]},w))]}),r.jsxs(Qo,{children:[r.jsx(Zo,{children:"Test Scenarios"}),r.jsx(Xe,{children:Bo.map(d=>r.jsx(zo,{active:b===d.name,onClick:()=>a(d),children:d.name},d.name))})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:r.jsx(Ho,{style:{width:`${e*x}px`,height:`${t*x}px`},children:m.videos.map((d,w)=>r.jsxs(qo,{orientation:d.orientation,style:{left:`${d.x*x}px`,top:`${d.y*x}px`,width:`${d.width*x}px`,height:`${d.height*x}px`},children:[r.jsxs(Ko,{children:[Vo[d.orientation]," ",w+1]}),r.jsxs(Jo,{children:[Math.round(d.width)," × ",Math.round(d.height)]})]},w))})}),r.jsxs(Xo,{children:[r.jsxs(fe,{children:[r.jsx(he,{children:"Canvas Size"}),r.jsxs(pe,{children:[e," × ",t]})]}),r.jsxs(fe,{children:[r.jsx(he,{children:"Total Area Used"}),r.jsxs(pe,{children:[Math.round(m.totalArea).toLocaleString()," px²"]})]}),r.jsxs(fe,{children:[r.jsx(he,{children:"Efficiency"}),r.jsxs(pe,{children:[m.efficiency.toFixed(2),"%"]})]}),r.jsxs(fe,{children:[r.jsx(he,{children:"Display Scale"}),r.jsxs(pe,{children:[(x*100).toFixed(1),"%"]})]})]})]})},er=()=>{function e(t,o){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(o))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[f,l]=o.split(":").map(Number),p=new Date;let S=new Date(p.getFullYear(),p.getMonth(),p.getDate());S.setHours(f,l,0,0),S<=p&&S.setDate(S.getDate()+1);const u=S.getTime()-p.getTime();return R.log("Reloading page at",o,"in",Math.floor(u/1e3/60),"minutes"),setTimeout(t,u)}const n=()=>{R.log("Timeout reached! "),window.location.reload(!0)};T.useLayoutEffect(()=>{const t=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{t.forEach(o=>{o&&clearTimeout(o)})}},[])},tr=D.div`
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
`;class Ee extends T.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",s=n?.stack||"",f=t?.componentStack||"";R.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:s,componentStack:f})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?r.jsxs(tr,{children:[r.jsx("h2",{children:"Something went wrong"}),r.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,r.jsxs("div",{children:[r.jsx("button",{onClick:this.handleReset,children:"Try Again"}),r.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Le="hass-family-calendar-config-banner-dismissed",nr=D.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${e=>e.severity==="error"?"#d32f2f":"#ff9800"};
  color: white;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  
  .message {
    flex: 1;
    margin-right: 16px;
  }
  
  .actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  
  button {
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
  .dismiss {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 4px 8px;
    font-size: 18px;
    line-height: 1;
    opacity: 0.8;
    
    &:hover {
      opacity: 1;
    }
  }
`,or=()=>{const e=nt(),n=ot(),t=rt(),o=tt(),[s,f]=C.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(Le)==="true"}catch{}return!1}),[l,p]=C.useState(!1);if(C.useEffect(()=>{if(e&&s){f(!1);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(Le)}catch{}}},[e,s]),o||s||!e&&!n)return null;const S=async()=>{p(!0);try{await t()}catch{}finally{p(!1)}},u=()=>{f(!0);try{typeof window<"u"&&window.localStorage&&localStorage.setItem(Le,"true")}catch{}};let h="warning",A="";return e&&n?(h="warning",A=`Using cached configuration. Failed to load from server: ${e}`):e&&!n?(h="error",A=`Failed to load configuration: ${e}`):n&&(h="warning",A="Using cached configuration. Some features may be outdated."),r.jsxs(nr,{severity:h,children:[r.jsx("div",{className:"message",children:A}),r.jsxs("div",{className:"actions",children:[e&&r.jsx("button",{onClick:S,disabled:l,children:l?"Retrying...":"Retry"}),r.jsx("button",{className:"dismiss",onClick:u,title:"Dismiss",children:"×"})]})]})},rr=Tt`
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
`,ir=D.div`
  padding: 0 12px;
  min-width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: ${e=>e.$hasBanner?"48px":"0"};
  transition: padding-top 0.2s;

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
`;function sr(){er();const e=nt(),n=ot(),t=tt(),[o]=T.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return window.localStorage.getItem("hass-family-calendar-config-banner-dismissed")==="true"}catch{}return!1}),s=!t&&!o&&(e||n);return r.jsxs(ir,{$hasBanner:s,children:[r.jsx(rr,{}),r.jsx(or,{}),r.jsxs("div",{className:"main",children:[r.jsx(Ee,{children:r.jsx(Kn,{})}),r.jsx(Ee,{children:r.jsx(Wo,{})})]}),r.jsx(jt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function ar(){return r.jsx(Ee,{children:r.jsxs(Ct,{children:[r.jsx(Ae,{path:"/demo",element:r.jsx(Qe,{})}),r.jsx(Ae,{path:"/tiling-demo",element:r.jsx(Qe,{})}),r.jsx(Ae,{path:"*",element:r.jsx(sr,{})})]})})}const cr=Lt.createRoot(document.getElementById("root"));cr.render(r.jsx(T.StrictMode,{children:r.jsx(Ee,{children:r.jsx(on,{children:r.jsx(bn,{children:r.jsx(Nt,{children:r.jsx(ar,{})})})})})}));
