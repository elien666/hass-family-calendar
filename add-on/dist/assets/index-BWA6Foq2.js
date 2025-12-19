import{d as $,R as T,j as r,I as Y,r as C,l as Ze,P as lt,W as dt,b as ut,e as ft,f as ht,h as pt,i as gt,k as mt,m as xt,n as yt,o as wt,T as Et,p as bt,s as At,y as St,q as Tt,t as Ct,u as Ae,L as jt,v as Nt,B as Rt}from"./react-vendor-BLiIHWQw.js";import{D as z}from"./date-vendor-BDx6lZXm.js";import{f as U}from"./vendor-BA3FN4ma.js";import{m as Lt,a as kt,b as _t,c as Ot,d as Dt,e as vt,f as De,g as $t,h as It,i as Mt,j as Wt,k as Pt,l as Bt,n as Vt,o as Gt,p as Ft,q as zt,r as Ut,s as Yt,t as Ie,u as Ht,v as Kt}from"./ui-vendor-C7t39j5V.js";import{a as W,q as qt}from"./utils-vendor-B3_PMxZw.js";import{t as Jt}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=t(s);fetch(s.href,u)}})();const Xt=$.div`
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
`,le=({visible:e,children:n,onClick:t,onClose:o,fullsize:s=!1})=>{const u=o||t,d=p=>{p.stopPropagation(),p.preventDefault(),u()};return T.useEffect(()=>{if(e){const p=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${p}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,p)}}},[e]),e?r.jsxs(Xt,{onClick:t,children:[r.jsx("div",{className:"close",onClick:d,children:r.jsx(Y,{path:Lt,size:2})}),r.jsx("div",{className:U("content",{fullsize:s}),onClick:p=>p.stopPropagation(),children:n})]}):null};let et=!0;const Qt=e=>{et=!!e};let me=!1,K=[],se=0;const ae=100,Me=50,Re=()=>{if(K.length===0||me)return;const e=K.shift(),n=Date.now();n-se>=ae?ie(e.level,e.message,e.metadata):(K.unshift(e),setTimeout(Re,ae-(n-se)))},ie=(e,n,t=null)=>{if(!et)return;if(me){K.length<Me&&K.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const o=Date.now();if(o-se<ae){K.length<Me&&(K.push({level:e,message:n,metadata:t,timestamp:o}),K.length===1&&setTimeout(Re,ae-(o-se)));return}setTimeout(async()=>{me=!0,se=Date.now();try{const u=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,d={level:e,message:n,...t&&{metadata:t}};await W.create({timeout:2e3}).post(u,d)}catch{K.length>10&&(K=[])}finally{me=!1,K.length>0&&setTimeout(Re,ae)}},0)},ue=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},fe=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},L={log:(...e)=>{const n=ue(e),t=fe(e);n&&ie("INFO",n,t)},error:(...e)=>{console.error(...e);const n=ue(e),t=fe(e);n&&ie("ERROR",n,t)},warn:(...e)=>{const n=ue(e),t=fe(e);n&&ie("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=ue(e),t=fe(e);n&&ie("INFO",n,t)}},Zt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},en=!1,Le="hass-family-calendar-config",tn=()=>{const e=(n,t=void 0)=>{const o=Zt[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},Se=()=>{try{if(typeof window>"u"||!window.localStorage)return null;const e=localStorage.getItem(Le);if(e){const n=JSON.parse(e);return L.debug("Loaded cached config from localStorage"),n}}catch(e){L.warn("Failed to load cached config from localStorage:",e);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(Le)}catch{}}return null},nn=e=>{try{return typeof window>"u"||!window.localStorage?!1:(localStorage.setItem(Le,JSON.stringify(e)),L.debug("Saved config to localStorage"),!0)}catch(n){return L.warn("Failed to save config to localStorage:",n),!1}},re=C.createContext(null),on=({children:e})=>{const[n,t]=C.useState(()=>Se()||tn()),[o,s]=C.useState(!0),[u,d]=C.useState(null),[p,A]=C.useState(()=>!!Se()),f=C.useRef(!0),g=C.useRef(n),S=C.useRef(!1),E=C.useRef(!1);C.useEffect(()=>{g.current=n},[n]);const b=C.useCallback(async(i=!1)=>{if(S.current&&!i||!i&&E.current)return!1;S.current=!0,i||(E.current=!0),L.debug("Starting config load",{isReload:i,hasInitialized:E.current});const h=typeof window<"u"&&window.location?`${window.location.pathname.replace(/\/$/,"")}/api/config`:"/api/config";try{const y=await W.get(h,{timeout:5e3});if(y.data&&typeof y.data=="object")if(typeof y.data=="object"&&!Array.isArray(y.data)){L.debug("Config loaded from API:",{hasCALENDARS:"CALENDARS"in y.data,CALENDARS:y.data.CALENDARS,CALENDARSCount:Array.isArray(y.data.CALENDARS)?y.data.CALENDARS.length:"not array",allKeys:Object.keys(y.data)});const l=g.current,w=JSON.stringify(y.data)!==JSON.stringify(l);L.debug("Updating config with new data from API:",{configChanged:w,CALENDARSCount:Array.isArray(y.data.CALENDARS)?y.data.CALENDARS.length:"not array",currentCALENDARSCount:Array.isArray(l?.CALENDARS)?l.CALENDARS.length:"not array",responseKeys:Object.keys(y.data).length,currentConfigKeys:Object.keys(l||{}).length}),w?(t(y.data),A(!1),d(null),en||nn(y.data)):(A(!1),d(null));const j=Object.keys(y.data).filter(N=>N.startsWith("ENABLE_")&&y.data[N]).map(N=>N.replace("ENABLE_",""));return L.info(`Configuration ${i?"reloaded":"loaded"} from API endpoint. Enabled features: ${j.length>0?j.join(", "):"none"}`,{enabledFeatures:j,totalConfigKeys:Object.keys(y.data).length}),i||s(!1),S.current=!1,!0}else throw new Error("Invalid config structure: expected object, got array");else throw new Error("Invalid config response: missing or invalid data")}catch(y){const l=y.response?.data?.detail||y.message||"Unknown error";if(i)return L.warn("Failed to reload config from API, keeping current config:",l),!1;{const w=Se();return w?(L.warn("Failed to load config from API, using cached config:",l),f.current&&(t(w),A(!0),d(l),s(!1)),!1):(f.current&&(d(l),s(!1)),!1)}}finally{S.current=!1}},[]),m=C.useRef(null),x=C.useCallback(async()=>{if(m.current)return m.current;const i=b(!0).finally(()=>{m.current=null});return m.current=i,i},[b]),c=C.useRef(!1);C.useEffect(()=>{if(!c.current)return c.current=!0,b(!1),()=>{f.current=!1}},[]),C.useEffect(()=>{const i=n.HASS_ACCESS_TOKEN||"";i&&typeof i=="string"&&i.trim()!==""&&i!=="undefined"&&i!=="null"?W.defaults.headers.common.Authorization=`Bearer ${i}`:delete W.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),C.useEffect(()=>{const i=n.ENABLE_LOGGING===!0;Qt(i)},[n.ENABLE_LOGGING]);const a=C.useMemo(()=>({config:n,loading:o,configError:u,isUsingCachedConfig:p,reloadConfig:x}),[n,o,u,p,x]);return r.jsx(re.Provider,{value:a,children:e})},V=()=>{const e=C.useContext(re);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config},tt=()=>{const e=C.useContext(re);if(!e)throw new Error("useConfigLoading must be used within ConfigProvider");return e.loading},nt=()=>{const e=C.useContext(re);if(!e)throw new Error("useConfigError must be used within ConfigProvider");return e.configError},ot=()=>{const e=C.useContext(re);if(!e)throw new Error("useIsUsingCachedConfig must be used within ConfigProvider");return e.isUsingCachedConfig},rt=()=>{const e=C.useContext(re);if(!e)throw new Error("useReloadConfig must be used within ConfigProvider");return e.reloadConfig};let oe=0,xe=0,Q=0;const ne=[],it=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},rn=(e,n="")=>{const t=it(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;Q++,oe++,ne.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ne.length>10&&ne.shift();const s=[];return n&&s.push(`[${n}]`),s.push("🔴 Axios API Error:"),s.push(`Message: ${t.message}`),t.url&&s.push(`URL: ${t.url}`),t.status&&s.push(`HTTP Status: ${t.status}`),t.code&&s.push(`Error Code: ${t.code}`),t.isNetworkError&&(s.push("Type: Network Error (no response received)"),t.readyState!==void 0&&s.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&s.push("Type: Timeout Error"),t.config&&(s.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),s.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&s.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&s.push("Response Data:",t.responseData),s.push(`Request Stats: ${xe} success, ${Q} errors (${oe} total)`),Q>3&&ne.length>0&&s.push("Recent errors pattern:",ne.slice(-5)),L.error(...s),t},sn=e=>{xe++,oe++,(oe%10===0||Q>0)&&L.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:oe,stats:`${xe} success, ${Q} errors`}),Q>0&&oe%10===0&&xe>Q&&(Q=0,ne.length=0)},H=e=>{const n=it(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};let ke=null;const We=e=>{ke=e},an=!1;W.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,L.debug("Axios Defaults State:",{baseURL:W.defaults.baseURL,timeout:W.defaults.timeout,hasAuthHeader:!!W.defaults.headers?.common?.Authorization,authHeaderLength:W.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(W.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||L.error("Axios Request Setup Error:",e),Promise.reject(e)));W.interceptors.response.use(e=>(e.config&&sn(e.config),e),e=>{const n=e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"),t=e.config?.metadata?.skipConnectionCheck===!0;if(!n){const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(rn(e,o),e.config?.metadata){const s=Date.now()-e.config.metadata.startTime;L.error("Request Duration:",`${s}ms`,"Request ID:",e.config.metadata.requestId)}!t&&ke&&!e.response&&(e.code==="ERR_NETWORK"||e.code==="ECONNABORTED"||e.code==="ERR_CANCELED")&&ke()}return Promise.reject(e)});const B=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;if(typeof window<"u"&&window.location){if(window.location.pathname.includes("/api/hassio_ingress/")){const s=window.location.pathname.match(/^(\/api\/hassio_ingress\/[^\/]+\/)/);if(s){const u=s[1],d=t.startsWith("/")?t.slice(1):t;return`${u}${d}`}}return t}return t},cn=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},ln=(e={})=>{const n=cn(e);if(!n)return"";const t=n.startsWith("https://")?"wss://":"ws://",o=n.replace(/^https?:\/\//,"");return`${t}${o}/api/websocket`},dn=()=>{const e=V(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[o,s]=T.useState(null),[u,d]=T.useState(!1),p=n&&t,A=t?B(`/api/states/${t}`,e):null;return T.useEffect(()=>{if(!p||!A)return;let f=!0;const g=new AbortController;return W(A,{signal:g.signal}).then(S=>{f&&(S.data.attributes.store!==void 0?s(S.data.attributes.store):s([]),d(!1))}).catch(S=>{f&&!g.signal.aborted&&(d(H(S)),s([]))}),()=>{f=!1,g.abort()}},[p,A,n,t]),[o,u]},un=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=B(`/api/states/${t}`,n);W.post(o,{state:new Date,attributes:{store:e}}).catch(s=>{L.error("Failed to store everyday calendar data:",s)})},Pe=$.div` 

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
`,fn=({on:e,month:n,day:t})=>{const[o,s]=e,u=o.indexOf(`${n}-${t}`),d=u>-1,p=()=>{s(d?o.toSpliced(u,1):[...o,`${n}-${t}`])};return r.jsx("div",{className:U("dot",{on:d}),onClick:()=>p()})},hn=()=>{const e=V();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let f=1;f<13;f++){const g=new Date(t,f,0).getDate();for(let S=1;S<=g;S++)o.push({month:f,day:S})}const s=Array.from({length:31},(f,g)=>g+1),u=Array.from({length:12},(f,g)=>g+1),d=T.useState(void 0),[p,A]=dn();return T.useEffect(()=>{p!==null&&d[1](p)},[p]),T.useEffect(()=>{d[0]!==void 0&&un(d[0],e)},[d[0],e]),d[0]!==void 0?r.jsxs(Pe,{children:[r.jsx("h2",{children:"Jeden Tag ein bißchen"}),A!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:A instanceof Error?A.message:String(A)})]}),r.jsxs("div",{className:"calendar",children:[s.map((f,g)=>r.jsx("div",{style:{gridArea:`${f+1} / 1 / ${f+1} / 1`},children:f},g)),u.map((f,g)=>r.jsx("div",{style:{gridArea:`1 / ${f+1} / 1 / ${f+1}`},children:f},g)),o.map((f,g)=>r.jsx("div",{style:{gridArea:`${f.day+1} / ${f.month+1} / ${f.day+1} / ${f.month+1}`},children:r.jsx(fn,{on:d,month:f.month,day:f.day})},g))]})]}):r.jsx(Pe,{className:"loading",children:A!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:A instanceof Error?A.message:String(A)})]}):r.jsx(Ze,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},pn=$.div`
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
  }`,gn=()=>{const[e,n]=T.useState(z.now()),[t,o]=T.useState(!1),s=C.useCallback(()=>o(!0),[]),u=C.useCallback(()=>o(!1),[]);return T.useEffect(()=>{const d=setInterval(()=>n(z.now()),1e3);return()=>clearInterval(d)},[]),r.jsxs(r.Fragment,{children:[r.jsxs(pn,{onClick:s,children:[e.toFormat("HH"),r.jsx("span",{children:":"}),e.toFormat("mm")]}),r.jsx(le,{visible:t,onClick:u,fullsize:!0,children:r.jsx(hn,{})})]})},mn=C.memo(gn),xn=3e3,yn=3e4,wn=5e3,En=()=>{const[e,n]=C.useState(!0),t=C.useRef(null),o=C.useRef(null),s=C.useRef(!1),u=C.useRef(Date.now()),d=C.useRef(!0);C.useEffect(()=>{d.current=e},[e]);const p=C.useCallback(async()=>{if(!s.current){s.current=!0,u.current=Date.now();try{const g=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`;await W.get(g,{timeout:wn,metadata:{skipConnectionCheck:!0}}),d.current||L.info("Connection restored - backend is reachable"),n(!0),s.current=!1,o.current&&(clearInterval(o.current),o.current=null)}catch(f){!f.response&&(f.code==="ERR_NETWORK"||f.code==="ECONNABORTED")?(d.current&&L.warn("Connection lost - backend is not reachable"),n(!1),s.current=!1,o.current||(o.current=setInterval(()=>{p()},yn))):(d.current||L.info("Connection restored - backend responded (with error)"),n(!0),s.current=!1,o.current&&(clearInterval(o.current),o.current=null))}}},[]),A=C.useCallback(()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{p()},xn)},[p]);return C.useEffect(()=>{const f=()=>{document.visibilityState==="visible"&&A()};return document.addEventListener("visibilitychange",f),()=>{document.removeEventListener("visibilitychange",f)}},[A]),C.useEffect(()=>{const f=setTimeout(()=>{p()},1e3);return()=>{clearTimeout(f)}},[p]),C.useEffect(()=>()=>{t.current&&clearTimeout(t.current),o.current&&clearInterval(o.current)},[]),{isConnected:e,triggerCheck:A}},st=C.createContext(null),bn=({children:e})=>{const n=En(),t=rt(),o=C.useRef(!1),s=C.useRef(null),u=C.useRef(!1);return C.useEffect(()=>(We(n.triggerCheck),()=>{We(null)}),[n.triggerCheck]),C.useEffect(()=>{const d=n.isConnected;if(!d){o.current=!0,s.current&&(clearTimeout(s.current),s.current=null);return}return o.current&&d&&!u.current&&(s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{u.current||(u.current=!0,t().then(()=>{o.current=!1}).catch(p=>{L.warn("Failed to reload config after connection restore:",p)}).finally(()=>{u.current=!1,s.current=null}))},2e3)),()=>{s.current&&(clearTimeout(s.current),s.current=null)}},[n.isConnected,t]),r.jsx(st.Provider,{value:n,children:e})},An=()=>{const e=C.useContext(st);if(!e)throw new Error("useConnectionStateContext must be used within ConnectionStateProvider");return e};function de({onReady:e,enabled:n=!0,checkBackendConnection:t=!0,reconnectStrategy:o="simple",maxReconnectAttempts:s=5,reconnectDelay:u=2e3,logPrefix:d="WebSocket",dependencies:p=[]}){const A=V(),f=An(),g=t?f?.isConnected:!0,[S,E]=T.useState(!1),[b,m]=T.useState(!1),x=T.useRef(null),c=T.useRef(null),a=T.useRef(!0),i=T.useRef(null),h=T.useRef(null),y=T.useRef(null),l=T.useRef(0),w=T.useRef(!1),j=T.useRef(!1),N=T.useRef(new Map),k=T.useCallback(()=>{const R=x.current;if(c.current,i.current&&(clearTimeout(i.current),i.current=null),h.current&&(clearTimeout(h.current),h.current=null),y.current&&(clearTimeout(y.current),y.current=null),R&&R.readyState===WebSocket.OPEN&&(N.current.forEach((D,O)=>{try{R.send(JSON.stringify({type:"unsubscribe_entity",entity_id:O}))}catch{}}),N.current.clear()),R){try{R.close()}catch{}x.current=null}c.current=null},[d]),_=T.useCallback(async()=>{if(!(!n||!a.current)&&!(t&&!g)&&!w.current){x.current&&k(),w.current=!0,m(!0);try{let R;if(!an){if(R=ln(A),!R){const O=typeof window<"u"&&window.location.protocol==="https:"?"wss:":"ws:",v=typeof window<"u"&&window.location.host?window.location.host:"";R=`${O}//${v}/api/websocket`}}if(!R){L.error(`Failed to build WebSocket URL for ${d} - cannot connect`),a.current&&E("WebSocket URL konnte nicht erstellt werden."),w.current=!1,m(!1);return}L.debug(`${d} connecting to: ${R}`);const D=new WebSocket(R);x.current=D,D.onopen=()=>{if(!a.current){D.close();return}if(L.debug(`${d} connection opened`),l.current=0,j.current=!1,y.current&&(clearTimeout(y.current),y.current=null),a.current&&E(!1),w.current=!1,m(!1),e)try{const O=e(D,N);c.current=O}catch(O){L.error(`Failed to subscribe for ${d}:`,O),a.current&&E(O instanceof Error?O.message:String(O))}},D.onmessage=O=>{try{const v=JSON.parse(O.data);if(v.type==="state_update"){const I=v.entity_id,P=N.current.get(I);P&&P(v)}else if(v.type==="state_response"){const I=v.entity_id,P=N.current.get(I);P&&P(v)}else v.type==="error"&&(L.error(`${d} received error:`,v.message),a.current&&E(v.message))}catch(v){L.error(`Error handling message for ${d}:`,v)}},D.onclose=O=>{if(a.current&&!w.current){L.debug(`${d} disconnected (code: ${O.code}, wasClean: ${O.wasClean})`),x.current=null,N.current.clear(),c.current=null,i.current&&(clearTimeout(i.current),i.current=null);const v=!O.wasClean&&(O.code===1006||l.current>0);if(v&&l.current>=5&&!j.current){L.warn(`Backend appears to be down for ${d} (${l.current} failed attempts), switching to periodic retry every 60s`),j.current=!0,a.current&&E("Backend nicht erreichbar. Wiederherstellungsversuche alle 60 Sekunden.");const I=()=>{y.current=setTimeout(()=>{a.current&&!w.current&&g&&j.current&&(L.debug(`Periodic retry attempt for ${d} (backend might be back up)`),l.current=0,_(),I())},6e4)};I();return}if(j.current)return;if(o==="exponential"&&l.current>=s){L.warn(`Max reconnection attempts (${s}) reached for ${d}, stopping reconnection`),a.current&&E("Verbindung verloren. Bitte Seite neu laden.");return}if(g)if(o==="exponential"){const I=v?u*10:u,P=Math.min(I*Math.pow(2,l.current),6e4);l.current++,i.current=setTimeout(()=>{a.current&&!w.current&&g&&(L.debug(`Attempting to reconnect ${d} (attempt ${l.current}/${s})`),_())},P)}else{const I=v?u*10:u;i.current=setTimeout(()=>{a.current&&!w.current&&g&&(L.debug(`Attempting to reconnect ${d}`),_())},I)}else L.debug(`Skipping reconnection for ${d} - waiting for backend connection`)}},D.onerror=O=>{L.error(`WebSocket error for ${d}:`,O),w.current=!1,m(!1),a.current&&E("WebSocket-Verbindungsfehler");const v=D.readyState===WebSocket.CONNECTING||D.readyState===WebSocket.CLOSED;if(!j.current)if(g)if(o==="exponential"&&l.current<s){const I=v?u*5:u,P=Math.min(I*Math.pow(2,l.current),6e4);l.current++,i.current=setTimeout(()=>{a.current&&!w.current&&g&&(L.debug(`Attempting to reconnect ${d} after error (attempt ${l.current}/${s})`),_())},P)}else if(o==="simple"){const I=v?u*5:u;i.current=setTimeout(()=>{a.current&&!w.current&&g&&(L.debug(`Attempting to reconnect ${d} after error`),_())},I)}else L.warn(`Max reconnection attempts (${s}) reached for ${d}, stopping reconnection`),a.current&&E("Verbindung fehlgeschlagen. Bitte Seite neu laden.");else L.debug(`Skipping reconnection for ${d} after error - waiting for backend connection`)}}catch(R){if(w.current=!1,m(!1),a.current&&(L.error(`Failed to setup ${d} connection:`,R),E(R instanceof Error?R.message:String(R)),g))if(o==="exponential"&&l.current<s){const D=Math.min(u*Math.pow(2,l.current),3e4);l.current++,i.current=setTimeout(()=>{a.current&&!w.current&&g&&(L.debug(`Attempting to reconnect ${d} after error (attempt ${l.current}/${s})`),_())},D)}else o==="simple"?i.current=setTimeout(()=>{a.current&&!w.current&&g&&_()},u):(L.warn(`Max reconnection attempts (${s}) reached for ${d}, stopping reconnection`),a.current&&E("Verbindung fehlgeschlagen. Bitte Seite neu laden."))}}},[n,t,g,A,o,s,u,d,e,k]);return T.useEffect(()=>{n&&g&&!x.current&&!w.current&&_()},[n,g,_,...p]),T.useEffect(()=>{n&&g&&!x.current&&!w.current&&(h.current&&(clearTimeout(h.current),h.current=null),h.current=setTimeout(()=>{a.current&&g&&!x.current&&!w.current&&(j.current=!1,l.current=0,y.current&&(clearTimeout(y.current),y.current=null),_())},1e3))},[n,g,_,d]),T.useEffect(()=>()=>{a.current=!1,k()},[k]),{connection:x.current,error:S,isConnecting:b}}const Sn=()=>{const e=V(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const[o,s]=T.useState("off"),[u,d]=T.useState(!1),p=n&&t,A=t?B(`/api/states/${t}`,e):null;T.useEffect(()=>{if(!p||!A)return;let S=!0;const E=new AbortController;return W(A,{signal:E.signal}).then(b=>{S&&(s(b.data.state),d(!1))}).catch(b=>{S&&!E.signal.aborted&&d(H(b))}),()=>{S=!1,E.abort()}},[p,A,n,t]);const{error:f}=de({enabled:p&&!!t,logPrefix:"doorbell",onReady:(S,E)=>{const b=m=>{m.state!==void 0&&s(m.state)};return E.current.set(t,b),S.readyState===WebSocket.OPEN&&(S.send(JSON.stringify({type:"subscribe_entity",entity_id:t})),L.debug("Subscribed to doorbell state changes")),()=>{E.current.delete(t),S.readyState===WebSocket.OPEN&&S.send(JSON.stringify({type:"unsubscribe_entity",entity_id:t}))}},dependencies:[p,t]});return[o,u||f||!1]},Tn=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&W.post(B("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to unlatch front door:",t)})},M={portrait:360/480,landscape:1920/1072,wide:770/216};function Cn(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function at(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,s=Cn(e);return o===1?jn(e[0],n,t):o===2?Nn(s,e,n,t):o===3?Rn(s,e,n,t):o===4?Ln(s,e,n,t):{videos:[],totalArea:0,efficiency:0}}function jn(e,n,t){const o=M[e.orientation];let s,u;const d=n/t;return o>d?(s=n,u=n/o):(u=t,s=t*o),{videos:[{x:(n-s)/2,y:(t-u)/2,width:s,height:u,orientation:e.orientation}],totalArea:s*u,efficiency:s*u/(n*t)*100}}function Nn(e,n,t,o){if(e.portrait>0)return ve(e,n,t,o);const s=[];e.landscape>0&&s.push("landscape"),e.wide>0&&s.push("wide");const u=s[0]||n[0].orientation,d=s[1]||n[1].orientation,p=M[u],A=M[d];if(e.landscape===1&&e.wide===1){const m=M.landscape,x=M.wide,c=t,a=c/m,i=c/x,h=a+i;let y,l,w;if(h<=o)y=a,l=i,w=c;else{const D=o/h;y=a*D,l=i*D,w=l*x}const j=(t-w)/2,k=J(n,[{x:j,y:0,width:w,height:l,orientation:"wide"},{x:j,y:l,width:w,height:y,orientation:"landscape"}]),_=w*y+w*l,R=_/(t*o)*100;return{videos:k,totalArea:_,efficiency:R}}if(e.wide===2){const m=M.wide,x=t,c=x/m,a=c*2;let i;a<=o?i=c:i=o/2;const y=J(n,[{x:0,y:0,width:x,height:i,orientation:"wide"},{x:0,y:i,width:x,height:i,orientation:"wide"}]),l=x*i*2,w=l/(t*o)*100;return{videos:y,totalArea:l,efficiency:w}}const f=[()=>{const m=t,x=m/2,c=m/2,a=x/p,i=c/A;return Math.max(a,i)<=o?{positions:[{x:0,y:(o-a)/2,width:x,height:a,orientation:u},{x,y:(o-i)/2,width:c,height:i,orientation:d}],totalArea:x*a+c*i}:null},()=>{const m=o,x=m/2,c=m/2,a=x*p,i=c*A;return Math.max(a,i)<=t?{positions:[{x:(t-a)/2,y:0,width:a,height:x,orientation:u},{x:(t-i)/2,y:x,width:i,height:c,orientation:d}],totalArea:a*x+i*c}:null}];let g=null,S=0;for(const m of f){const x=m();x&&x.totalArea>S&&(S=x.totalArea,g=x)}if(!g){const m=t/2,x=t/2,c=Math.min(m/p,o),a=Math.min(x/A,o);g={positions:[{x:0,y:(o-c)/2,width:m,height:c,orientation:u},{x:m,y:(o-a)/2,width:x,height:a,orientation:d}],totalArea:m*c+x*a}}const E=J(n,g.positions),b=g.totalArea/(t*o)*100;return{videos:E,totalArea:g.totalArea,efficiency:b}}function ve(e,n,t,o){const s=e.portrait,u=n.length-s;if((s===3||s===4)&&u===0){const b=M.portrait,m=t/s,x=m/b,c=x<o?(o-x)/2:0,a=Math.min(x,o),i=[];let h=0;for(let w=0;w<s;w++){const j=Math.min(m,a*b);i.push({x:w*m+(m-j)/2,y:c,width:j,height:a,orientation:"portrait"}),h+=j*a}const y=J(n,i),l=h/(t*o)*100;return{videos:y,totalArea:h,efficiency:l}}n.filter(b=>b.orientation==="portrait");const d=n.filter(b=>b.orientation!=="portrait"),p=s>0?Math.min(t*.4,t*.5):0,A=t-p,f=[];let g=0;if(s===2&&u===0){const b=M.portrait,m=t/2,x=m/b,c=o;let a,i;x<=c?(i=x,a=m):(i=c,a=c*b);const h=(o-i)/2;f.push({x:(m-a)/2,y:h,width:a,height:i,orientation:"portrait"}),f.push({x:m+(m-a)/2,y:h,width:a,height:i,orientation:"portrait"}),g=a*i*2}else if(s===1&&u===1){const b=M.portrait,m=d[0],x=M[m.orientation],c=b+x,a=t*(b/c),i=t*(x/c),h=a/b,y=i/x,l=Math.min(o,Math.min(h,y)),w=(o-l)/2;f.push({x:0,y:w,width:a,height:l,orientation:"portrait"}),f.push({x:a,y:w,width:i,height:l,orientation:m.orientation}),g=a*l+i*l}else if(s===1&&u===2&&e.landscape===1&&e.wide===1){const b=M.portrait,m=M.wide,x=M.landscape,c=o,a=o*b,i=o/(1/m+1/x),h=i/m,y=i/x,l=a+i;if(Math.abs(l-t)<.1)f.push({x:0,y:0,width:a,height:c,orientation:"portrait"}),g+=a*c,d.find(k=>k.orientation==="wide")&&(f.push({x:0+a,y:0,width:i,height:h,orientation:"wide"}),g+=i*h),d.find(k=>k.orientation==="landscape")&&(f.push({x:0+a,y:h,width:i,height:y,orientation:"landscape"}),g+=i*y);else{const w=t/l,j=a*w,N=j/b,k=i*w,_=o/N;let R=j*_,D=o,O=k*_,v=O/m,I=O/x,P=R+O;if(P>t){const X=t/P;R=R*X,D=R/b,O=O*X,v=O/m,I=O/x,P=R+O,P>t&&(O=t-R,v=O/m,I=O/x)}const G=R+O;if(G>t){const X=t/G;R=R*X,D=R/b,O=O*X,v=O/m,I=O/x}const F=0;f.push({x:F,y:0,width:R,height:D,orientation:"portrait"}),g+=R*D,d.find(X=>X.orientation==="wide")&&(f.push({x:F+R,y:0,width:O,height:v,orientation:"wide"}),g+=O*v),d.find(X=>X.orientation==="landscape")&&(f.push({x:F+R,y:v,width:O,height:I,orientation:"landscape"}),g+=O*I)}}else if(s===1&&u===3){const b=M.portrait,m=o,x=m*b,c=x,a=t-c;f.push({x:0,y:0,width:x,height:m,orientation:"portrait"}),g+=x*m;const i=o/3;for(let h=0;h<d.length;h++){const y=d[h],l=M[y.orientation],w=i,j=a;let N,k;j/l<=w?(N=j,k=N/l):(k=w,N=k*l);const _=h*i+(i-k)/2;f.push({x:c+(a-N)/2,y:_,width:N,height:k,orientation:y.orientation}),g+=N*k}}else if(s===2&&u===1){const b=M.portrait,m=d[0],x=M[m.orientation],c=o/2,a=c*b,i=t-a,h=o*x;let y,l;h<=i?(l=o,y=l*x):(y=i,l=y/x);const w=a,j=c,N=(o-l)/2,k=(o/2-j)/2,_=o/2+(o/2-j)/2;f.push({x:0,y:N,width:y,height:l,orientation:m.orientation}),g+=y*l,f.push({x:i,y:k,width:w,height:j,orientation:"portrait"}),g+=w*j,f.push({x:i,y:_,width:w,height:j,orientation:"portrait"}),g+=w*j}else if(s===1&&u===2){const b=M.portrait,m=o,x=m*b,c=x,a=t-c;f.push({x:0,y:0,width:x,height:m,orientation:"portrait"}),g+=x*m;const i=o/2;for(let h=0;h<d.length;h++){const y=d[h],l=M[y.orientation],w=i,j=a;let N,k;j/l<=w?(N=j,k=N/l):(k=w,N=k*l);const _=h*i+(i-k)/2;f.push({x:c+(a-N)/2,y:_,width:N,height:k,orientation:y.orientation}),g+=N*k}}else{const b=s;if(b>0){const m=o/b,x=M.portrait;for(let c=0;c<b;c++){const a=Math.min(m,p/x),i=a*x,h=c*m+(m-a)/2;f.push({x:(p-i)/2,y:h,width:i,height:a,orientation:"portrait"}),g+=i*a}}if(d.length>0){const m=o/d.length;for(let x=0;x<d.length;x++){const c=d[x],a=M[c.orientation],i=m,h=A;let y,l;h/a<=i?(y=h,l=y/a):(l=i,y=l*a);const w=x*m+(m-l)/2;f.push({x:p+(A-y)/2,y:w,width:y,height:l,orientation:c.orientation}),g+=y*l}}}const S=J(n,f),E=g/(t*o)*100;return{videos:S,totalArea:g,efficiency:E}}function J(e,n){const t=new Array(n.length),o=new Set,s=new Set;for(let p=0;p<n.length;p++){const A=n[p];for(let f=0;f<e.length;f++)if(!o.has(f)&&e[f].orientation===A.orientation){t[p]={...A,orientation:e[f].orientation},o.add(f),s.add(p);break}}const u=[];for(let p=0;p<n.length;p++)s.has(p)||u.push(p);let d=0;for(let p=0;p<e.length;p++)if(!o.has(p)&&d<u.length){const A=u[d];t[A]={...n[A],orientation:e[p].orientation},d++}return t}function Rn(e,n,t,o){if(e.portrait>0)return ve(e,n,t,o);if(e.landscape===2&&e.wide===1){const c=M.landscape,a=M.wide,i=t,h=i/a,y=o-h,l=t/2,w=l/c;let j,N,k,_;if(h<=o&&w<=y)j=i,N=h,k=l,_=w;else{const G=o/(h+w),F=Math.min(1,G);N=h*F,j=N*a,_=w*F,k=_*c}const R=(t-j)/2,D=N+(y-_)/2,v=J(n,[{x:R,y:0,width:j,height:N,orientation:"wide"},{x:0,y:D,width:k,height:_,orientation:"landscape"},{x:k,y:D,width:k,height:_,orientation:"landscape"}]),I=j*N+k*_*2,P=I/(t*o)*100;return{videos:v,totalArea:I,efficiency:P}}if(e.landscape===1&&e.wide===2){const c=M.landscape,a=M.wide,i=t/2,h=i/a,l=o-h,w=l*c;let j,N,k,_;if(h<=o&&w<=t&&h+l<=o)j=i,N=h,k=w,_=l;else{const F=h+l,Z=o/F;j=i,N=h*Z,_=l*Z,k=_*c}const R=0,D=t/2,O=(t-k)/2,I=J(n,[{x:R,y:0,width:j,height:N,orientation:"wide"},{x:D,y:0,width:j,height:N,orientation:"wide"},{x:O,y:N,width:k,height:_,orientation:"landscape"}]),P=j*N*2+k*_,G=P/(t*o)*100;return{videos:I,totalArea:P,efficiency:G}}if(e.wide===3){const c=M.wide,a=t/2,i=a/c,y=o-i,l=y*c;let w,j,N,k;if(i<=o&&l<=t&&i+y<=o)w=a,j=i,N=l,k=y;else{const G=i+y,F=o/G;w=a,j=i*F,k=y*F,N=k*c,N>t&&(N=t,k=N/c)}const _=0,R=t/2,D=(t-N)/2,v=J(n,[{x:_,y:0,width:w,height:j,orientation:"wide"},{x:R,y:0,width:w,height:j,orientation:"wide"},{x:D,y:j,width:N,height:k,orientation:"wide"}]),I=w*j*2+N*k,P=I/(t*o)*100;return{videos:v,totalArea:I,efficiency:P}}if(e.landscape===3){const c=M.landscape,a=t/(c*1.5),i=Math.min(o,a),h=i/2,y=i,l=h*c,w=y*c,j=(o-i)/2,N=[{x:0,y:j,width:l,height:h,orientation:"landscape"},{x:0,y:j+h,width:l,height:h,orientation:"landscape"},{x:l,y:j,width:w,height:y,orientation:"landscape"}],k=J(n,N),_=l*i+w*i,R=_/(t*o)*100;return{videos:k,totalArea:_,efficiency:R}}const s=[];if(e.landscape>0)for(let c=0;c<e.landscape;c++)s.push("landscape");if(e.wide>0)for(let c=0;c<e.wide;c++)s.push("wide");const u=s[0]||n[0].orientation,d=s[1]||n[1].orientation,p=s[2]||n[2].orientation,A=M[u],f=M[d],g=M[p],S=[()=>{const c=t*.6,a=t*.4,i=c/A,h=a/f,y=a/g,l=h+y;return i<=o&&l<=o?{positions:[{x:0,y:(o-i)/2,width:c,height:i,orientation:u},{x:c,y:0,width:a,height:h,orientation:d},{x:c,y:h,width:a,height:y,orientation:p}],totalArea:c*i+a*h+a*y}:null},()=>{const c=o*.5,a=o*.5,i=c*A,h=c*f,y=a*g;return i+h<=t&&y<=t?{positions:[{x:0,y:0,width:i,height:c,orientation:u},{x:i,y:0,width:h,height:c,orientation:d},{x:(t-y)/2,y:c,width:y,height:a,orientation:p}],totalArea:i*c+h*c+y*a}:null},()=>{const c=t/3,a=c/A,i=c/f,h=c/g;return Math.max(a,i,h)<=o?{positions:[{x:0,y:(o-a)/2,width:c,height:a,orientation:u},{x:c,y:(o-i)/2,width:c,height:i,orientation:d},{x:c*2,y:(o-h)/2,width:c,height:h,orientation:p}],totalArea:c*a+c*i+c*h}:null}];let E=null,b=0;for(const c of S){const a=c();a&&a.totalArea>b&&(b=a.totalArea,E=a)}if(!E){const c=t/3,a=Math.min(c/A,o),i=Math.min(c/f,o),h=Math.min(c/g,o);E={positions:[{x:0,y:(o-a)/2,width:c,height:a,orientation:u},{x:c,y:(o-i)/2,width:c,height:i,orientation:d},{x:c*2,y:(o-h)/2,width:c,height:h,orientation:p}],totalArea:c*a+c*i+c*h}}const m=J(n,E.positions),x=E.totalArea/(t*o)*100;return{videos:m,totalArea:E.totalArea,efficiency:x}}function Ln(e,n,t,o){if(e.portrait>0)return ve(e,n,t,o);const s=[];if(e.landscape>0)for(let i=0;i<e.landscape;i++)s.push("landscape");if(e.wide>0)for(let i=0;i<e.wide;i++)s.push("wide");const u=s[0]||n[0].orientation,d=s[1]||n[1].orientation,p=s[2]||n[2].orientation,A=s[3]||n[3].orientation,f=M[u],g=M[d],S=M[p],E=M[A],b=[()=>{const i=t/2,h=o/2,y=Math.min(i,h*f),l=y/f,w=Math.min(i,h*g),j=w/g,N=Math.min(i,h*S),k=N/S,_=Math.min(i,h*E),R=_/E;return{positions:[{x:(i-y)/2,y:(h-l)/2,width:y,height:l,orientation:u},{x:i+(i-w)/2,y:(h-j)/2,width:w,height:j,orientation:d},{x:(i-N)/2,y:h+(h-k)/2,width:N,height:k,orientation:p},{x:i+(i-_)/2,y:h+(h-R)/2,width:_,height:R,orientation:A}],totalArea:y*l+w*j+N*k+_*R}},()=>{const i=t*.6,h=t*.4,y=i/f,l=o/3,w=Math.min(h,l*g),j=w/g,N=Math.min(h,l*S),k=N/S,_=Math.min(h,l*E),R=_/E;return y<=o?{positions:[{x:0,y:(o-y)/2,width:i,height:y,orientation:u},{x:i,y:0,width:w,height:j,orientation:d},{x:i,y:l,width:N,height:k,orientation:p},{x:i,y:l*2,width:_,height:R,orientation:A}],totalArea:i*y+w*j+N*k+_*R}:null},()=>{const i=t/4,h=i/f,y=i/g,l=i/S,w=i/E;return Math.max(h,y,l,w)<=o?{positions:[{x:0,y:(o-h)/2,width:i,height:h,orientation:u},{x:i,y:(o-y)/2,width:i,height:y,orientation:d},{x:i*2,y:(o-l)/2,width:i,height:l,orientation:p},{x:i*3,y:(o-w)/2,width:i,height:w,orientation:A}],totalArea:i*h+i*y+i*l+i*w}:null}];let m=null,x=0;for(const i of b){const h=i();h&&h.totalArea>x&&(x=h.totalArea,m=h)}if(!m){const i=t/2,h=o/2,y=Math.min(h,i/f),l=Math.min(h,i/g),w=Math.min(h,i/S),j=Math.min(h,i/E);m={positions:[{x:(i-i)/2,y:(h-y)/2,width:i,height:y,orientation:u},{x:i+(i-i)/2,y:(h-l)/2,width:i,height:l,orientation:d},{x:(i-i)/2,y:h+(h-w)/2,width:i,height:w,orientation:p},{x:i+(i-i)/2,y:h+(h-j)/2,width:i,height:j,orientation:A}],totalArea:i*y+i*l+i*w+i*j}}const c=J(n,m.positions),a=m.totalArea/(t*o)*100;return{videos:c,totalArea:m.totalArea,efficiency:a}}const kn=e=>{const n=V();n.HASS_HOST;const[t,o]=T.useState({}),[s,u]=T.useState(!0),[d,p]=T.useState(null),A=T.useRef(!0);T.useEffect(()=>{if(!e||e.length===0){u(!1);return}A.current=!0;async function E(){u(!0),p(null);try{const b=e.map(async x=>{try{const c=B(`/api/states/${x}`,n),i=(await W(c)).data?.attributes?.access_token||null;return{entityId:x,accessToken:i}}catch(c){return L.error(`Failed to fetch access token for ${x}:`,c),{entityId:x,accessToken:null}}}),m=await Promise.all(b);if(A.current){const x={};m.forEach(({entityId:c,accessToken:a})=>{a&&(x[c]=a)}),o(x),u(!1)}}catch(b){A.current&&(L.error("Failed to fetch camera access tokens:",b),p(H(b)),u(!1))}}return E(),()=>{A.current=!1}},[e?.length,e?.join(",")]),T.useEffect(()=>{if(!e||e.length===0)return;let E=!0,b=null;async function m(){if(E)try{const x=e.map(async a=>{try{const i=B(`/api/states/${a}`,n),y=(await W(i)).data?.attributes?.access_token||null;return{entityId:a,accessToken:y}}catch(i){return L.debug(`Failed to refresh access token for ${a}:`,i),null}}),c=await Promise.all(x);E&&o(a=>{const i={...a};return c.forEach(h=>{h&&h.accessToken&&(i[h.entityId]=h.accessToken)}),i})}catch{}}return b=setInterval(m,300*1e3),()=>{E=!1,b&&clearInterval(b)}},[e?.length,e?.join(",")]);const{error:f}=de({enabled:!!(e&&e.length>0),checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3,logPrefix:"camera tokens",onReady:(E,b)=>{const m=x=>{const c=x.entity_id,i=(x.attributes||{}).access_token||null;o(h=>i?{...h,[c]:i}:h)};return E.readyState===WebSocket.OPEN&&(e.forEach(x=>{b.current.set(x,m),E.send(JSON.stringify({type:"subscribe_entity",entity_id:x}))}),L.debug(`Subscribed to camera entity state changes: ${e.join(", ")}`)),()=>{e.forEach(x=>{b.current.delete(x),E.readyState===WebSocket.OPEN&&E.send(JSON.stringify({type:"unsubscribe_entity",entity_id:x}))})}},dependencies:[e?.length,e?.join(",")]}),g=T.useCallback(async()=>{if(!(!e||e.length===0)){u(!0),p(null);try{const E=e.map(async m=>{try{const x=B(`/api/states/${m}`,n),a=(await W(x)).data?.attributes?.access_token||null;return{entityId:m,accessToken:a}}catch(x){return L.error(`Failed to refresh access token for ${m}:`,x),{entityId:m,accessToken:null}}}),b=await Promise.all(E);if(A.current){const m={};b.forEach(({entityId:x,accessToken:c})=>{c&&(m[x]=c)}),o(x=>({...x,...m})),u(!1)}}catch(E){A.current&&(L.error("Failed to refresh camera access tokens:",E),p(H(E)),u(!1))}}},[e,n]);return T.useEffect(()=>()=>{A.current=!1},[]),[t,s,d||f||null,g]},_n=(e,n=null,t={})=>{if(!e)return null;let o;if(o=`/api/camera_proxy_stream/${e}`,n){const s=o.includes("?")?"&":"?";o=`${o}${s}token=${encodeURIComponent(n)}`}return o},Be=45e3,On=$.div`
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

        .token-error {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            text-align: center;
            padding: 1rem;
            z-index: 2;

            button {
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                background-color: rgba(255, 255, 255, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 8px;
                color: white;
                cursor: pointer;
                font-size: 0.9rem;
                transition: background-color 0.2s;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.3);
                }

                &:active {
                    background-color: rgba(255, 255, 255, 0.4);
                }

                &:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
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
`,Dn=()=>{const e=V(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[],[o,s]=T.useState(!1),[u]=Sn(),[d,p]=T.useState(void 0),[A,f]=T.useState(100),[g,S]=T.useState("0"),E=T.useMemo(()=>t.map(l=>l.entity_id).filter(Boolean),[t]),[b,m,x,c]=kn(E),a=T.useRef(new Map);T.useEffect(()=>{o||(a.current.forEach(l=>{l&&l.src&&(l.src="")}),a.current.clear())},[o]),T.useEffect(()=>{if(u==="off"&&o){const l=window.setTimeout(()=>{s(!1),p(void 0)},Be);return p(l),S(Be+"ms"),f(0),()=>{l&&window.clearTimeout(l)}}else u==="on"&&(S(0),f(100),s(!0))},[u,o]),T.useEffect(()=>{u==="on"&&d!==void 0&&(window.clearTimeout(d),S(0),f(100),p(void 0))},[d,u]);const[i,h]=T.useState(null),y=()=>{i===null?h("confirm"):i==="confirm"&&(h("opening"),Tn(e),setTimeout(()=>h(null),2e3))};return T.useEffect(()=>{if(i==="confirm"){const l=setTimeout(()=>{h(null)},3e3);return()=>{clearTimeout(l)}}},[i]),T.useEffect(()=>{o||h(null)},[o]),n?r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>s(l=>!l),children:"CCTV"}),r.jsx(le,{visible:o,onClick:y,onClose:()=>{s(!1),h(null)},fullsize:!0,children:r.jsxs(On,{onClick:y,children:[r.jsx(lt,{completed:A,height:10,bgColor:d===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:g,transitionTimingFunction:"linear"}),r.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const l=t.map(R=>({orientation:R.orientation||"landscape"})),w=window.innerWidth,j=window.innerHeight-10,N=at(l,w,j),k={portrait:t.filter(R=>(R.orientation||"landscape")==="portrait"),landscape:t.filter(R=>(R.orientation||"landscape")==="landscape"),wide:t.filter(R=>R.orientation==="wide")},_={portrait:0,landscape:0,wide:0};return N.videos.map((R,D)=>{const O=R.orientation,v=_[O],I=k[O][v];if(!I)return null;_[O]++;const P=b[I.entity_id]||null,G=!!P,F=_n(I.entity_id,P,e);return!F&&!G?r.jsx("div",{className:"video-container",style:{left:`${R.x}px`,top:`${R.y}px`,width:`${R.width}px`,height:`${R.height}px`},children:r.jsxs("div",{className:"token-error",children:[r.jsx("div",{children:"Kamera-Token nicht verfügbar"}),r.jsx("button",{onClick:()=>c(),disabled:m,children:m?"Lade...":"Token neu laden"})]})},`${O}-${v}-${D}`):F?r.jsxs("div",{className:"video-container",style:{left:`${R.x}px`,top:`${R.y}px`,width:`${R.width}px`,height:`${R.height}px`},children:[G&&o&&r.jsx("img",{ref:Z=>{Z?a.current.set(`${I.entity_id}-${D}`,Z):a.current.delete(`${I.entity_id}-${D}`)},src:F,className:O,alt:"Camera stream",crossOrigin:"anonymous"},`${I.entity_id}-${D}`),!G&&r.jsxs("div",{className:"token-error",children:[r.jsx("div",{children:"Kamera-Token nicht verfügbar"}),r.jsx("button",{onClick:()=>c(),disabled:m,children:m?"Lade...":"Token neu laden"})]}),r.jsx("div",{className:"video-overlay",onClick:()=>y()})]},`${O}-${v}-${D}`):null})})()}),i==="confirm"&&r.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),i==="opening"&&r.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]}):null},vn=$.div`
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

`,$n=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>r.jsxs(vn,{children:[r.jsxs("div",{className:"buttons",children:[r.jsx(Y,{path:kt,size:"32px",color:"#ffffff",onClick:n}),r.jsx(Y,{path:_t,size:"32px",color:"#ffffff",onClick:e}),r.jsx("button",{onClick:t,children:"Today"}),r.jsx(Dn,{})]}),r.jsx(mn,{}),r.jsx(Y,{path:Ot,size:"32px",color:"#ffffff",className:U("indicator")})]}),In=C.memo($n),Mn=6e4,$e=(e=Mn,n=void 0)=>{const[t,o]=T.useState(!0);return T.useEffect(()=>{const s=setInterval(()=>{o(u=>!u)},e);return()=>{clearInterval(s)}},[e,n]),t},Wn={mdiDelete:vt,mdiCake:Dt},Pn=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Wn[n]||void 0},Bn=(e,n,t,o,s,u)=>W(s(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:65e3,signal:u}).then(d=>{!d.data||!Array.isArray(d.data)||d.data.forEach(p=>{const A="dateTime"in p.start?z.fromISO(p.start.dateTime):z.fromSQL(p.start.date);let f;"dateTime"in p.end?f=Math.floor(z.fromISO(p.end.dateTime).diff(n,"days").as("days")):f=Math.floor(z.fromSQL(p.end.date).diff(n,"days").as("days"))-1;const g=Math.floor(A.diff(n,"days").as("days"));f>=o.length&&(f=o.length-1);const S="dateTime"in p.start?"events":"allDay";if(g>=0&&g<o.length)for(let E=g;E<=f;E++)o[E][S]=[...o[E][S],{...p,icon:e.icon}]})}).catch(d=>{if(!(W.isCancel(d)||d.name==="AbortError"||d.code==="ERR_CANCELED"))throw d}),Ve=new Map,Vn=300*1e3,Gn=e=>e.toISODate(),Fn=(e,n,t,o,s,u,d,p,A)=>{const f=[0,1,2,3,4,5].map(m=>e.plus({days:m}).startOf("day"));f[6]=e.plus({days:6}).endOf("day");const g=Gn(e),S=Ve.get(g);if(S&&Date.now()-S.timestamp<Vn){A.current&&t(S.data);return}const E=f.map(m=>({date:m,allDay:[],events:[]}));if(!d||d.length===0){L.warn("loadAll: No calendars configured, skipping fetch",{calendars:d}),A.current&&(t(E),o(!1));return}L.debug("loadAll: Starting calendar fetch",{calendarsCount:d.length,calendars:d.map(m=>m.name),startDate:e.toISO(),endDate:f[6].toISO()});const b=new AbortController;s.current&&s.current.abort(),s.current=b;try{A.current&&o(!0);const m=d.map(x=>Bn(x,f[0],f[6],E,p,b.signal));Promise.all(m).then(()=>{A.current&&!b.signal.aborted&&(Ve.set(g,{data:E,timestamp:Date.now()}),t(E),u(!1))}).catch(x=>{A.current&&!b.signal.aborted&&u(H(x))}).finally(()=>{A.current&&!b.signal.aborted&&o(!1)})}catch(m){A.current&&!b.signal.aborted&&(u(H(m)),o(!1))}},Ge=[],zn=e=>{const n=V(),t=n.CALENDARS||[];T.useEffect(()=>{L.debug("useCalendarData: config changed",{hasCALENDARS:"CALENDARS"in n,CALENDARS:n.CALENDARS,CALENDARSCount:Array.isArray(n.CALENDARS)?n.CALENDARS.length:"not array",configKeys:Object.keys(n)})},[n]);const o=T.useMemo(()=>{const c=t.map(a=>({name:a.name,icon:Pn(a.icon)}));return L.debug("Processing calendars from config (memo update):",{CALENDARS:t,count:t.length,processedCount:c.length,processed:c.map(a=>a.name)}),c},[t]);T.useEffect(()=>{L.debug("CALENDARS array changed:",{CALENDARS:t,count:t.length,calendarsMemoCount:o.length})},[t,o.length]);const s=T.useCallback(c=>B(`/api/calendars/${c}`,n),[n]),u=T.useCallback((c,a)=>`${s(c)}?${qt.stringify(a)}`,[s]),[d,p]=T.useState(Ge),[A,f]=T.useState(!1),[g,S]=T.useState(!1),[E,b]=T.useState(null),m=C.useRef(null),x=C.useRef(!0);return $e(6e4,"Calendar"),T.useEffect(()=>(x.current=!0,L.debug("useCalendarData effect triggered:",{startDate:e?.toISO(),calendarsCount:o.length,calendars:o.map(c=>c.name),hasStartDate:e!==void 0,hasCalendars:o.length>0}),e!==void 0&&o.length>0?((E===null||!E.equals(e))&&(p(Ge),b(e)),L.debug("useCalendarData: Calling loadAll",{startDate:e.toISO(),calendarsCount:o.length}),Fn(e,d,p,f,m,S,o,u,x)):o.length,()=>{x.current=!1,m.current&&m.current.abort()}),[e,o,u]),[d,g]};function ce(e){const[n,t]=T.useState(!1);function o({key:u}){u===e&&t(!0)}const s=({key:u})=>{u===e&&t(!1)};return T.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",s)}),[e]),n}const Un=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return z.fromJSDate(o)},Yn=e=>{const n=()=>e(p=>p.plus({days:7})),t=ce("ArrowRight");T.useEffect(()=>{t&&n()},[t]);const o=()=>e(p=>p.minus({days:7})),s=ce("ArrowLeft");T.useEffect(()=>{s&&o()},[s]);const u=()=>e(Un()),d=ce("t");return T.useEffect(()=>{d&&u()},[d]),{nextWeek:n,previousWeek:o,startWeekWithToday:u}},Hn=e=>{const[n,t]=C.useState(0),[o,s]=C.useState(0),u=50;return{onTouchStart:f=>{s(0),t(f.targetTouches[0].clientX)},onTouchMove:f=>s(f.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const f=n-o,g=f>u,S=f<-u;g&&e.onSwipedLeft(),S&&e.onSwipedRight()}}},Fe=e=>z.fromISO(e).toLocaleString(z.TIME_24_SIMPLE),Te=e=>e.toFormat("c")>=6,Ce=e=>e.hasSame(z.now(),"day"),Kn=$.div`
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
`,qn=()=>{const[e,n]=T.useState(void 0),[t,o]=zn(e),{nextWeek:s,previousWeek:u,startWeekWithToday:d}=Yn(n);T.useEffect(()=>{e===void 0&&d()},[]),T.useEffect(()=>{console.log("Week component - startDate:",e?.toISO(),"data length:",t.length,"error:",o)},[e,t.length,o]);const p=Hn({onSwipedLeft:()=>s(),onSwipedRight:()=>u()}),A=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),f=C.useMemo(()=>t.slice(0,7),[t]);return r.jsxs(Kn,{...p,children:[r.jsx(In,{nextWeek:s,previousWeek:u,startWeekWithToday:d}),r.jsxs("div",{className:"schedule",children:[f.map((g,S)=>r.jsx("div",{className:U({weekend:Te(g.date),today:Ce(g.date)},"caption"),children:r.jsx("h2",{children:g.date.toLocaleString(A)})},S)),f.map((g,S)=>r.jsx("div",{className:U("allDayRow",{weekend:Te(g.date),today:Ce(g.date)}),children:g.allDay.map((E,b)=>r.jsx("div",{className:"allDayEvent",children:E.summary},b))},S)),f.map((g,S)=>r.jsx("div",{className:U("eventRow",{weekend:Te(g.date),today:Ce(g.date)}),children:g.events.map((E,b)=>r.jsxs("div",{className:"event",children:[r.jsx("div",{children:E.summary}),r.jsxs("h3",{children:[E.icon&&r.jsx(Y,{path:E.icon,size:"1rem",color:"#ffffff"}),Fe(E.start.dateTime)," - ",Fe(E.end.dateTime)]})]},b))},S))]}),t.length===0&&r.jsx("div",{className:"loading",children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsx(Ze,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&r.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:r.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},Ee={"clear-day":{icon:wt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:yt,label:"Klar",color:"#eeeef5"},rain:{icon:xt,label:"Regen",color:"#80a5d6"},snow:{icon:mt,label:"Schnee",color:"#8c82ce"},sleet:{icon:gt,label:"Graupel",color:"#aba4db"},wind:{icon:pt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:ht,label:"Neblig",color:"#d5dae2"},cloudy:{icon:ft,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:ut,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:dt,label:"Teils bewölkt",color:"#d5dae2"}},Jn=e=>{const[n,t]=T.useState([]),[o,s]=T.useState(!1),u=$e(6e4*10,"Weather"),d=V(),p=d.ENABLE_WEATHER||!1,A=d.WEATHER_LATITUDE,f=d.WEATHER_LONGITUDE,g=p&&A&&f,S=()=>`./forecast/${A},${f}?&units=si&exclude=minutely`;return T.useEffect(()=>{if(!g)return;let E=!0;const b=new AbortController;return W(S(),{signal:b.signal}).then(m=>{E&&(t(m.data),s(!1))}).catch(m=>{E&&!b.signal.aborted&&s(H(m))}).finally(()=>{E&&e&&e(!1)}),()=>{E=!1,b.abort()}},[u,e,g,p,A,f]),[n,o]},Xn=bt(At),ze=$.div`

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
`,Ue=C.memo(({data:e,daily:n=!1})=>r.jsxs("div",{children:[r.jsxs("div",{children:[!n&&z.fromSeconds(e.time).toLocaleString(z.TIME_24_SIMPLE),n&&z.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),r.jsx("div",{children:r.jsx(_e,{icon:e.icon})}),r.jsx("div",{children:r.jsxs("strong",{children:[!n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),r.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),r.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Qn=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:Ee[n.icon]?.color||"#ffffff",text:Ee[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),_e=({icon:e})=>{const n=Ee[e];return r.jsx(n.icon,{size:60,color:"#ffffff"})},Zn=()=>{const n=V().ENABLE_WEATHER||!1,[t,o]=Jn(),[s,u]=T.useState(!1),d=ce("w"),p=T.useRef(),A=C.useCallback(()=>u(b=>!b),[]),f=C.useCallback(()=>u(!0),[]),g=C.useMemo(()=>Qn(t),[t]),S=C.useMemo(()=>[3,6,9,12],[]),E=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return T.useEffect(()=>{if(!s||!p.current||!t||!t.hourly||g.length===0)return;const b={timezone:"Europe/Berlin"},m=document.createElement("div");return p.current.textContent="",p.current.appendChild(m),Jt(m,g,b),()=>{p.current&&(p.current.textContent="")}},[s,g]),T.useEffect(()=>{d&&A()},[d]),n?!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?r.jsx(ze,{children:r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":r.jsxs(ze,{children:[r.jsxs("div",{onClick:f,children:[r.jsxs("div",{className:"headline",children:[r.jsx(_e,{icon:t.currently.icon}),r.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),r.jsx("div",{className:"forecast",children:S.map((b,m)=>r.jsx(Ue,{data:t.hourly.data[b]},m))})]}),r.jsx(le,{visible:s,onClick:A,children:r.jsxs("div",{className:"full-weather",children:[o!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),r.jsxs("div",{className:"detail-header",children:[r.jsx("div",{children:r.jsxs("div",{className:"headline",children:[r.jsx(_e,{icon:t.daily.data[0].icon}),r.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",r.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),r.jsx("h3",{children:Ee[t.daily.data[0].icon].label})]}),r.jsx("div",{className:"values",children:r.jsxs("div",{className:"table",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Regen:"})," ",Math.round(t.daily.data[0].precipProbability*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),r.jsx("h3",{children:"Die nächsten 24 Stunden"}),r.jsx("div",{ref:p}),r.jsx("h3",{children:"Die nächste Woche"}),r.jsx("div",{className:"forecast",children:E.map((b,m)=>r.jsx(Ue,{data:t.daily.data[b],daily:!0},m))}),r.jsxs("div",{className:"info",children:["Aktualisiert ",r.jsx(Et,{date:z.fromSeconds(t.currently.time).toJSDate(),formatter:Xn})]})]})})]}):null},eo=C.memo(Zn),to="AK Wandsbek",no="Hamburg",oo="Master:62016",ro="STATION",io={x:10.091341,y:53.568702},so={name:to,city:no,id:oo,type:ro,coordinate:io},ye={departureList:"departureList",checkName:"checkName"},ao=async(e,n,t,o)=>{const s={Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},u=o.HASS_ACCESS_TOKEN||"";u&&u.trim()!==""&&u!=="undefined"&&u!=="null"&&(s.Authorization=`Bearer ${u}`);const d=B(`/gti/public/${e}`,o);return W({method:"post",url:d,data:n,signal:t,headers:s})},Ye=(e,n)=>e.realtimeOffset-n.realtimeOffset,co=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(Ye),to:n.filter(t=>t.directionId===6).slice(0,3).sort(Ye)}},lo=e=>{const n=V(),t=n.ENABLE_HVV||!1,[o,s]=T.useState([]),[u,d]=T.useState(!1),p=$e(6e4),A=t;return T.useEffect(()=>{if(!A)return;if(!(e in ye)){L.warn(e,"not supported by HVV connector");return}let f=!0;const g=new AbortController;let S={version:51};switch(e){case ye.checkName:S={...S,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case ye.departureList:const E=z.now();S={...S,station:so,time:{date:E.toFormat("dd.MM.yyyy"),time:E.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:S=void 0}return ao(e,S,g.signal,n).then(E=>{f&&(s(co(E.data)),d(!1))}).catch(E=>{f&&!g.signal.aborted&&d(H(E))}),()=>{f=!1,g.abort()}},[e,p,A,t]),[o,u]},uo=$.div`
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
`,He=C.memo(({line:e,direction:n,realtimeOffset:t})=>r.jsxs("div",{className:"departure",children:[r.jsx("div",{children:r.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),r.jsx("div",{children:t===0?"Jetzt":r.jsxs(r.Fragment,{children:["in ",t," '"]})})]})),fo=()=>{const n=V().ENABLE_HVV||!1,[t,o]=lo(ye.departureList);return n?r.jsx(uo,{children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((s,u)=>r.jsx(He,{line:s.line,direction:s.direction,realtimeOffset:s.realtimeOffset},u)),r.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((s,u)=>r.jsx(He,{line:s.line,direction:s.direction,realtimeOffset:s.realtimeOffset},u))]})}):null},ho=C.memo(fo),po=()=>{const e=V(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const o=e.ENTITY_CHARGING_STATE||"",s=e.ENTITY_STATE_OF_CHARGE||"",[u,d]=T.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[p,A]=T.useState(!1),f=n&&(t||o||s);T.useEffect(()=>{if(!f)return;(async()=>{const b=[];t&&b.push(W(B(`/api/states/${t}`,e)).then(c=>({type:"preclimateStatus",value:c.data.state==="on"})).catch(c=>({type:"preclimateStatus",error:H(c)}))),o&&b.push(W(B(`/api/states/${o}`,e)).then(c=>({type:"chargingState",value:c.data.state==="on"})).catch(c=>({type:"chargingState",error:H(c)}))),s&&b.push(W(B(`/api/states/${s}`,e)).then(c=>({type:"stateOfCharge",value:parseFloat(c.data.state)||0})).catch(c=>({type:"stateOfCharge",error:H(c)})));const m=await Promise.all(b);let x=!1;m.forEach(c=>{c.error?x=c.error:d(a=>({...a,[c.type]:c.value}))}),A(x||!1)})()},[f,n,t,o,s]);const{error:g}=de({enabled:f,checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3,logPrefix:"EV entities",onReady:(E,b)=>{const m=c=>{const a=c.entity_id,i=c.state;d(h=>{const y={...h};return a===t?y.preclimateStatus=i==="on":a===o?y.chargingState=i==="on":a===s&&(y.stateOfCharge=parseFloat(i)||0),y})},x=[];return t&&x.push(t),o&&x.push(o),s&&x.push(s),E.readyState===WebSocket.OPEN&&(x.forEach(c=>{b.current.set(c,m),E.send(JSON.stringify({type:"subscribe_entity",entity_id:c}))}),L.debug(`Subscribed to EV entity state changes: ${x.join(", ")}`)),()=>{x.forEach(c=>{b.current.delete(c),E.readyState===WebSocket.OPEN&&E.send(JSON.stringify({type:"unsubscribe_entity",entity_id:c}))})}},dependencies:[f,t,o,s]});return[u,p||g||!1]},go=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&W.post(B("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to start preclimate:",t)})},mo=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&W.post(B("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to stop preclimate:",t)})},xo=$.div`
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
`,yo=(e,n)=>n?It:e>=80?Mt:e>=50?Wt:e>=20?Pt:Bt,wo=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",Eo=()=>{const e=V(),n=e.ENABLE_EV||!1,[t,o]=po(),{preclimateStatus:s,chargingState:u,stateOfCharge:d}=t,[p,A]=C.useState(!1),[f,g]=C.useState(null),[S,E]=C.useState(!1),[b,m]=C.useState(!1),[x,c]=C.useState(0),a=C.useRef(null),i=C.useRef(null),h=C.useRef(s),y=C.useRef(null);C.useEffect(()=>{h.current!==s&&(p&&y.current!==null&&s===(f==="start")&&(c(f==="start"?360:0),m(!0),setTimeout(()=>{A(!1),g(null),m(!1),c(0),y.current=null,E(!1)},300),a.current&&(clearTimeout(a.current),a.current=null)),h.current=s)},[s,p,f]),C.useEffect(()=>{if(!p||b){i.current&&(cancelAnimationFrame(i.current),i.current=null);return}const D=y.current||Date.now(),O=1e4,v=f==="stop",I=()=>{const P=Date.now()-D,G=Math.min(P/O,1);c(v?360*(1-G):360*G),G<1&&!b&&(i.current=requestAnimationFrame(I))};return i.current=requestAnimationFrame(I),()=>{i.current&&(cancelAnimationFrame(i.current),i.current=null)}},[p,b,f]),C.useEffect(()=>()=>{a.current&&clearTimeout(a.current),i.current&&cancelAnimationFrame(i.current)},[]);const l=C.useCallback(()=>{if(o!==!1||p)return;const D=!s,O=D?"start":"stop";A(!0),g(O),m(!1),E(!1),c(0),y.current=Date.now(),h.current=s,D?go(e):mo(e),a.current=setTimeout(()=>{p&&(E(!0),setTimeout(()=>{A(!1),g(null),m(!1),c(0),E(!1),y.current=null},500))},15e3)},[s,o,p]),w=yo(d||0,u),j=wo(d||0),N=Math.round(d||0),k=p?f==="start":s,_=f==="start"?"#17e146":"#f85a5a",R=f==="start"?"clockwise":"counterclockwise";return n?r.jsxs(xo,{className:U({disabled:o!==!1}),children:[r.jsxs("h2",{children:["Auto",o!==!1?r.jsxs("div",{className:"battery-info",children:[r.jsx(Y,{path:De,size:"1.2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs("div",{className:"battery-info",children:[r.jsxs("span",{className:"charge-percentage",children:[N,"%"]}),r.jsx(Y,{path:w,size:"1.2rem",color:j})]})]}),o===!1&&r.jsxs("div",{className:"preclimate-button-wrapper",children:[p&&r.jsx("div",{className:U("progress-ring",R,{complete:b}),style:{"--progress-color":_,"--progress-angle":`${x}deg`,"--progress-gradient":f==="stop"?`conic-gradient(from -90deg, ${_} 0deg, ${_} ${x}deg, transparent ${x}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${_} 0deg, ${_} ${x}deg, transparent ${x}deg, transparent 360deg)`}}),r.jsxs("button",{className:U("preclimate-button",{spinning:k&&!p,shaking:S}),onClick:l,disabled:o!==!1||p,children:[r.jsx(Y,{path:$t,size:"2rem",color:k?"#ff9800":"#ffffff"}),r.jsx("span",{children:k?"Stop":"Start"})]})]})]}):null},bo=C.memo(Eo),Ao=()=>{const e=V(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",[o,s]=T.useState("closed"),[u,d]=T.useState(!1),p=n&&t,A=t?B(`/api/states/${t}`,e):null;T.useEffect(()=>{if(!p||!A)return;let S=!0;const E=new AbortController;return W(A,{signal:E.signal}).then(b=>{S&&(s(b.data.state),d(!1))}).catch(b=>{S&&!E.signal.aborted&&d(H(b))}),()=>{S=!1,E.abort()}},[p,A,n,t]);const{error:f}=de({enabled:p&&!!t,logPrefix:"garage door",onReady:(S,E)=>{const b=m=>{m.state!==void 0&&s(m.state)};return E.current.set(t,b),S.readyState===WebSocket.OPEN&&(S.send(JSON.stringify({type:"subscribe_entity",entity_id:t})),L.debug("Subscribed to garage door state changes")),()=>{E.current.delete(t),S.readyState===WebSocket.OPEN&&S.send(JSON.stringify({type:"unsubscribe_entity",entity_id:t}))}},dependencies:[p,t]});return[o,u||f||!1]},So=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(B("/api/services/cover/toggle",n),{entity_id:t}).catch(s=>{L.error("Failed to toggle garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},To=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(B("/api/services/cover/open_cover",n),{entity_id:t}).catch(s=>{L.error("Failed to open garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},Co=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(B("/api/services/cover/close_cover",n),{entity_id:t}).catch(s=>{L.error("Failed to close garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},jo=$.div`
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
`,ct=$.div`
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
`,Oe=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:Ut},open:{label:"Offen",icon:zt},closed:{label:"Geschlossen",icon:Ft},opening:{label:"Öffnet",icon:Gt},closing:{label:"Schließt",icon:Vt}};return n[e]||L.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:Yt}},No=({garageDoor:e,animate:n=!1})=>r.jsxs(ct,{className:U({animate:n}),children:[r.jsx(Y,{path:Oe(e).icon,size:"2rem",color:"#ffffff"}),r.jsx("span",{children:Oe(e).label})]}),Ro=e=>St.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return Oe(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),Lo=()=>{const e=V(),n=e.ENABLE_GARAGE||!1,[t,o]=Ao(),[s,u]=T.useState(void 0),[d,p]=T.useState(!1),[A,f]=T.useState(!1);T.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!s){const m=new Promise(x=>{u({resolve:x})});Ro(m)}}else s&&(s.resolve(t),u(void 0))},[t]);const g=ce("g");T.useEffect(()=>{g&&o===!1&&So(p,e)},[g,o,e]);const S=C.useCallback(b=>{if(o===!1)switch(f(!1),b){case"open":To(p,e);break;case"close":Co(p,e);break}},[p,o,e]),E=C.useCallback(()=>{o===!1&&f(!0)},[o]);return n?r.jsxs(jo,{className:U({disabled:o!==!1}),children:[r.jsx("h2",{children:"Garage"}),r.jsx("div",{className:"status",onClick:E,children:o!==!1?r.jsxs(ct,{children:[r.jsx(Y,{path:De,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsx(No,{garageDoor:t,animate:d})}),r.jsx(le,{visible:A&&o===!1,onClick:()=>f(!1),children:r.jsxs("div",{className:"controls",children:[r.jsx("h2",{children:"Garagentor"}),r.jsx("div",{onClick:()=>S("open"),children:"Öffnen"}),r.jsx("div",{onClick:()=>S("close"),children:"Schließen"})]})})]}):null},ko=C.memo(Lo),_o=(e,n)=>e?B(`/api/states/${e}`,n):null,q={done:{label:"Fertig",animate:!1,icon:Kt},off:{label:"Aus",animate:!1,icon:Ht},standby:{label:"Standby",animate:!1,icon:Ie},running:{label:"Läuft …",animate:!0,icon:Ie}},Oo={off:0,standby:2,running:16,done:256},Do=()=>{const e=V(),n=e.ENABLE_LAUNDRY||!1,t=e.LAUNDRY_MACHINES||[],o=Array.isArray(t)?t:[],[s,u]=T.useState({}),[d,p]=T.useState({}),{error:A}=de({enabled:n&&o.length>0,logPrefix:"laundry",onReady:(a,i)=>(o.forEach(h=>{if(h.entity_id){const y=l=>{l.state!==void 0&&u(w=>({...w,[h.entity_id]:l.state}))};i.current.set(h.entity_id,y),a.readyState===WebSocket.OPEN&&(a.send(JSON.stringify({type:"subscribe_entity",entity_id:h.entity_id})),L.debug(`Subscribed to ${h.entity_id} state changes`))}}),()=>{o.forEach(h=>{h.entity_id&&(i.current.delete(h.entity_id),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"unsubscribe_entity",entity_id:h.entity_id})))})}),dependencies:[o.map(a=>a.entity_id).join(",")]});T.useEffect(()=>{if(!n||o.length===0)return;const a=new Map;return o.forEach(i=>{if(!i.entity_id)return;const h=_o(i.entity_id,e);if(!h)return;const y=new AbortController;a.set(i.entity_id,y),W(h,{signal:y.signal}).then(l=>{u(w=>({...w,[i.entity_id]:l.data.state})),p(w=>({...w,[i.entity_id]:!1}))}).catch(l=>{y.signal.aborted||p(w=>({...w,[i.entity_id]:H(l)}))})}),()=>{a.forEach(i=>i.abort())}},[n,o.map(a=>a.entity_id).join(","),e]);const f=o.map(a=>({state:s[a.entity_id]||"off",error:d[a.entity_id]||A||!1,name:a.name})),[g,S]=T.useState(q.off),[E,b]=T.useState(!1),m=f.map(a=>a.state),x=f.map(a=>a.error);T.useEffect(()=>{const a=x.some(i=>i!==!1);b(a&&x.find(i=>i!==!1)||!1)},[x]),T.useEffect(()=>{const a=m.reduce((i,h)=>i+(Oo[h]||0),0);a===0?S(q.off):a<16?S(q.standby):a<256?S(q.running):a%256===0?S(q.done):a%256%16===0?S(q.running):a%256%2===0?S(q.done):S(q.running)},[m]);const c=f.map(a=>({label:a.name,state:a.state}));return[g,c,E]},vo=$.div`
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
`,$o=()=>{const n=V().ENABLE_LAUNDRY||!1,[t,o,s]=Do(),[u,d]=T.useState(!1),p=C.useCallback(()=>{s===!1&&d(!0)},[s]),A=C.useCallback(()=>d(!1),[]);return n?r.jsxs(vo,{className:U({disabled:s!==!1}),children:[r.jsx("h2",{children:"Wäsche"}),r.jsx("div",{className:"status",onClick:p,children:s!==!1?r.jsxs(r.Fragment,{children:[r.jsx(Y,{path:De,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:U({animate:t.animate}),children:r.jsx(Y,{path:t.icon,size:"2rem",color:"#ffffff"})}),r.jsx("span",{children:t.label})]})}),r.jsx(le,{visible:u&&s===!1,onClick:A,children:r.jsxs("div",{className:"states",children:[r.jsx("h2",{children:"Wäsche"}),o.map((f,g)=>r.jsxs("div",{children:[r.jsx("div",{className:"subtitle",children:f.label}),r.jsx("div",{className:U({animate:q[f.state].animate}),children:r.jsx(Y,{path:q[f.state].icon,size:2})}),r.jsx("div",{children:q[f.state].label})]},g))]})})]}):null},Io=C.memo($o),Mo=$.div`
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
`,Wo=()=>r.jsxs(Mo,{children:[r.jsxs("div",{className:"top-content",children:[r.jsx(eo,{}),r.jsx(ho,{}),r.jsx(bo,{})]}),r.jsxs("div",{className:"two-cols",children:[r.jsx(ko,{}),r.jsx(Io,{})]})]}),Po=C.memo(Wo),Ke=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],Bo=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],we={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},Vo={landscape:"L",portrait:"P",wide:"W"},Go=$.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Fo=$.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,zo=$.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,ee=$.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,te=$.label`
  font-size: 0.9rem;
  color: #cccccc;
`,qe=$.select`
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
`,Je=$.input`
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
`,Uo=$.button`
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
`,Xe=$.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Yo=$.button`
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
`,Ho=$.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Ko=$.div`
  position: absolute;
  background-color: ${e=>we[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,qo=$.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Jo=$.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Xo=$.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,he=$.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pe=$.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ge=$.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Qo=$.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Zo=$.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;$.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;$.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;const je=$.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?we[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?we[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?we[e.orientation]:"#4a4a4a"};
  }
`,Qe=()=>{const[e,n]=C.useState(1920),[t,o]=C.useState(1080),[s,u]=C.useState("Full HD"),[d,p]=C.useState(""),[A,f]=C.useState(""),[g,S]=C.useState([{orientation:"landscape"}]),[E,b]=C.useState(null),m=C.useMemo(()=>at(g,e,t),[g,e,t]),x=l=>{const w=Ke.find(j=>j.name===l);w&&w.width&&w.height?(n(w.width),o(w.height),u(l),p(""),f("")):l==="Custom"&&u("Custom")},c=()=>{const l=parseInt(d),w=parseInt(A);l>0&&w>0&&(n(l),o(w))},a=l=>{S(l.videos),b(l.name)},i=l=>{const w=[];for(let j=0;j<l;j++)w.push(g[j]||{orientation:"landscape"});S(w),b(null)},h=(l,w)=>{const j=[...g];j[l]={orientation:w},S(j),b(null)},y=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return r.jsxs(Go,{children:[r.jsx(Fo,{children:"Video Tiling Algorithm Demo"}),r.jsxs(zo,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:"Screen Size Preset"}),r.jsx(qe,{value:s,onChange:l=>x(l.target.value),children:Ke.map(l=>r.jsx("option",{value:l.name,children:l.name},l.name))})]}),s==="Custom"&&r.jsxs(r.Fragment,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:"Custom Width"}),r.jsx(Je,{type:"number",value:d,onChange:l=>p(l.target.value),placeholder:"Width",min:"100"})]}),r.jsxs(ee,{children:[r.jsx(te,{children:"Custom Height"}),r.jsx(Je,{type:"number",value:A,onChange:l=>f(l.target.value),placeholder:"Height",min:"100"})]}),r.jsxs(ee,{children:[r.jsx(te,{children:" "}),r.jsx(Uo,{onClick:c,children:"Apply Custom Size"})]})]}),r.jsxs(ee,{children:[r.jsx(te,{children:"Number of Videos"}),r.jsxs(qe,{value:g.length,onChange:l=>i(parseInt(l.target.value)),children:[r.jsx("option",{value:"1",children:"1 Video"}),r.jsx("option",{value:"2",children:"2 Videos"}),r.jsx("option",{value:"3",children:"3 Videos"}),r.jsx("option",{value:"4",children:"4 Videos"})]})]}),g.map((l,w)=>r.jsxs(ee,{children:[r.jsxs(te,{children:["Video ",w+1," Orientation"]}),r.jsxs(Xe,{children:[r.jsx(je,{active:l.orientation==="landscape",orientation:"landscape",onClick:()=>h(w,"landscape"),children:"Landscape"}),r.jsx(je,{active:l.orientation==="portrait",orientation:"portrait",onClick:()=>h(w,"portrait"),children:"Portrait"}),r.jsx(je,{active:l.orientation==="wide",orientation:"wide",onClick:()=>h(w,"wide"),children:"Wide"})]})]},w))]}),r.jsxs(Qo,{children:[r.jsx(Zo,{children:"Test Scenarios"}),r.jsx(Xe,{children:Bo.map(l=>r.jsx(Yo,{active:E===l.name,onClick:()=>a(l),children:l.name},l.name))})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:r.jsx(Ho,{style:{width:`${e*y}px`,height:`${t*y}px`},children:m.videos.map((l,w)=>r.jsxs(Ko,{orientation:l.orientation,style:{left:`${l.x*y}px`,top:`${l.y*y}px`,width:`${l.width*y}px`,height:`${l.height*y}px`},children:[r.jsxs(qo,{children:[Vo[l.orientation]," ",w+1]}),r.jsxs(Jo,{children:[Math.round(l.width)," × ",Math.round(l.height)]})]},w))})}),r.jsxs(Xo,{children:[r.jsxs(he,{children:[r.jsx(pe,{children:"Canvas Size"}),r.jsxs(ge,{children:[e," × ",t]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Total Area Used"}),r.jsxs(ge,{children:[Math.round(m.totalArea).toLocaleString()," px²"]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Efficiency"}),r.jsxs(ge,{children:[m.efficiency.toFixed(2),"%"]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Display Scale"}),r.jsxs(ge,{children:[(y*100).toFixed(1),"%"]})]})]})]})},er=()=>{function e(t,o){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(o))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[u,d]=o.split(":").map(Number),p=new Date;let A=new Date(p.getFullYear(),p.getMonth(),p.getDate());A.setHours(u,d,0,0),A<=p&&A.setDate(A.getDate()+1);const f=A.getTime()-p.getTime();return L.log("Reloading page at",o,"in",Math.floor(f/1e3/60),"minutes"),setTimeout(t,f)}const n=()=>{L.log("Timeout reached! "),window.location.reload(!0)};T.useLayoutEffect(()=>{const t=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{t.forEach(o=>{o&&clearTimeout(o)})}},[])},tr=$.div`
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
`;class be extends T.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",s=n?.stack||"",u=t?.componentStack||"";L.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:s,componentStack:u})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?r.jsxs(tr,{children:[r.jsx("h2",{children:"Something went wrong"}),r.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,r.jsxs("div",{children:[r.jsx("button",{onClick:this.handleReset,children:"Try Again"}),r.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Ne="hass-family-calendar-config-banner-dismissed",nr=$.div`
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
`,or=()=>{const e=nt(),n=ot(),t=rt(),o=tt(),[s,u]=C.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(Ne)==="true"}catch{}return!1}),[d,p]=C.useState(!1);if(C.useEffect(()=>{if(e&&s){u(!1);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(Ne)}catch{}}},[e,s]),o||s||!e&&!n)return null;const A=async()=>{p(!0);try{await t()}catch{}finally{p(!1)}},f=()=>{u(!0);try{typeof window<"u"&&window.localStorage&&localStorage.setItem(Ne,"true")}catch{}};let g="warning",S="";return e&&n?(g="warning",S=`Using cached configuration. Failed to load from server: ${e}`):e&&!n?(g="error",S=`Failed to load configuration: ${e}`):n&&(g="warning",S="Using cached configuration. Some features may be outdated."),r.jsxs(nr,{severity:g,children:[r.jsx("div",{className:"message",children:S}),r.jsxs("div",{className:"actions",children:[e&&r.jsx("button",{onClick:A,disabled:d,children:d?"Retrying...":"Retry"}),r.jsx("button",{className:"dismiss",onClick:f,title:"Dismiss",children:"×"})]})]})},rr=Tt`
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
`,ir=$.div`
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
`;function sr(){er();const e=nt(),n=ot(),t=tt(),[o]=T.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return window.localStorage.getItem("hass-family-calendar-config-banner-dismissed")==="true"}catch{}return!1}),s=!t&&!o&&(e||n);return r.jsxs(ir,{$hasBanner:s,children:[r.jsx(rr,{}),r.jsx(or,{}),r.jsxs("div",{className:"main",children:[r.jsx(be,{children:r.jsx(qn,{})}),r.jsx(be,{children:r.jsx(Po,{})})]}),r.jsx(jt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function ar(){return r.jsx(be,{children:r.jsxs(Ct,{children:[r.jsx(Ae,{path:"/demo",element:r.jsx(Qe,{})}),r.jsx(Ae,{path:"/tiling-demo",element:r.jsx(Qe,{})}),r.jsx(Ae,{path:"*",element:r.jsx(sr,{})})]})})}const cr=Nt.createRoot(document.getElementById("root"));cr.render(r.jsx(T.StrictMode,{children:r.jsx(be,{children:r.jsx(on,{children:r.jsx(bn,{children:r.jsx(Rt,{children:r.jsx(ar,{})})})})})}));
