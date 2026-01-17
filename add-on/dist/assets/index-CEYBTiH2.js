import{b as v,R as T,j as r,I as U,r as j,l as ot,P as ht,W as pt,d as gt,e as mt,f as xt,h as yt,i as wt,k as Et,m as bt,n as At,o as St,T as Tt,p as Ct,s as jt,y as Nt,u as Lt,q as Rt,t as Se,L as kt,v as _t,B as Ot}from"./react-vendor-CSeSQEdy.js";import{D as z}from"./date-vendor-BDx6lZXm.js";import{f as Y}from"./vendor-ByaP0Dll.js";import{m as Dt,a as Re,b as vt,c as It,d as $t,e as Mt,f as Ie,g as Wt,h as Pt,i as Bt,j as Vt,k as Ft,l as Gt,n as zt,o as Ut,p as Yt,q as Ht,r as Kt,s as qt,t as Pe,u as Jt,v as Xt}from"./ui-vendor-CHQCwb4U.js";import{a as W,q as Qt}from"./utils-vendor-BNnJUM3Y.js";import{t as Zt}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=t(s);fetch(s.href,u)}})();const en=v.div`
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
`,le=({visible:e,children:n,onClick:t,onClose:o,fullsize:s=!1})=>{const u=o||t,c=h=>{h.stopPropagation(),h.preventDefault(),u()};return T.useEffect(()=>{if(e){const h=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${h}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,h)}}},[e]),e?r.jsxs(en,{onClick:t,children:[r.jsx("div",{className:"close",onClick:c,children:r.jsx(U,{path:Dt,size:2})}),r.jsx("div",{className:Y("content",{fullsize:s}),onClick:h=>h.stopPropagation(),children:n})]}):null};let rt=!0;const tn=e=>{rt=!!e};let me=!1,q=[],se=0;const ae=100,Be=50,ke=()=>{if(q.length===0||me)return;const e=q.shift(),n=Date.now();n-se>=ae?ie(e.level,e.message,e.metadata):(q.unshift(e),setTimeout(ke,ae-(n-se)))},ie=(e,n,t=null)=>{if(!rt)return;if(me){q.length<Be&&q.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const o=Date.now();if(o-se<ae){q.length<Be&&(q.push({level:e,message:n,metadata:t,timestamp:o}),q.length===1&&setTimeout(ke,ae-(o-se)));return}setTimeout(async()=>{me=!0,se=Date.now();try{const u=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,c={level:e,message:n,...t&&{metadata:t}};await W.create({timeout:2e3}).post(u,c)}catch{q.length>10&&(q=[])}finally{me=!1,q.length>0&&setTimeout(ke,ae)}},0)},ue=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},fe=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},L={log:(...e)=>{const n=ue(e),t=fe(e);n&&ie("INFO",n,t)},error:(...e)=>{console.error(...e);const n=ue(e),t=fe(e);n&&ie("ERROR",n,t)},warn:(...e)=>{const n=ue(e),t=fe(e);n&&ie("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=ue(e),t=fe(e);n&&ie("INFO",n,t)}},nn={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},on=!1,_e="hass-family-calendar-config",rn=()=>{const e=(n,t=void 0)=>{const o=nn[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},Te=()=>{try{if(typeof window>"u"||!window.localStorage)return null;const e=localStorage.getItem(_e);if(e){const n=JSON.parse(e);return L.debug("Loaded cached config from localStorage"),n}}catch(e){L.warn("Failed to load cached config from localStorage:",e);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(_e)}catch{}}return null},sn=e=>{try{return typeof window>"u"||!window.localStorage?!1:(localStorage.setItem(_e,JSON.stringify(e)),L.debug("Saved config to localStorage"),!0)}catch(n){return L.warn("Failed to save config to localStorage:",n),!1}},re=j.createContext(null),an=({children:e})=>{const[n,t]=j.useState(()=>Te()||rn()),[o,s]=j.useState(!0),[u,c]=j.useState(null),[h,E]=j.useState(()=>!!Te()),f=j.useRef(!0),p=j.useRef(n),A=j.useRef(!1),b=j.useRef(!1);j.useEffect(()=>{p.current=n},[n]);const S=j.useCallback(async(i=!1)=>{if(A.current&&!i||!i&&b.current)return!1;A.current=!0,i||(b.current=!0),L.debug("Starting config load",{isReload:i,hasInitialized:b.current});const g=typeof window<"u"&&window.location?`${window.location.pathname.replace(/\/$/,"")}/api/config`:"/api/config";try{const m=await W.get(g,{timeout:5e3});if(m.data&&typeof m.data=="object")if(typeof m.data=="object"&&!Array.isArray(m.data)){L.debug("Config loaded from API:",{hasCALENDARS:"CALENDARS"in m.data,CALENDARS:m.data.CALENDARS,CALENDARSCount:Array.isArray(m.data.CALENDARS)?m.data.CALENDARS.length:"not array",allKeys:Object.keys(m.data)});const d=p.current,x=JSON.stringify(m.data)!==JSON.stringify(d);L.debug("Updating config with new data from API:",{configChanged:x,CALENDARSCount:Array.isArray(m.data.CALENDARS)?m.data.CALENDARS.length:"not array",currentCALENDARSCount:Array.isArray(d?.CALENDARS)?d.CALENDARS.length:"not array",responseKeys:Object.keys(m.data).length,currentConfigKeys:Object.keys(d||{}).length}),x?(t(m.data),E(!1),c(null),on||sn(m.data)):(E(!1),c(null));const N=Object.keys(m.data).filter(C=>C.startsWith("ENABLE_")&&m.data[C]).map(C=>C.replace("ENABLE_",""));return L.info(`Configuration ${i?"reloaded":"loaded"} from API endpoint. Enabled features: ${N.length>0?N.join(", "):"none"}`,{enabledFeatures:N,totalConfigKeys:Object.keys(m.data).length}),i||s(!1),A.current=!1,!0}else throw new Error("Invalid config structure: expected object, got array");else throw new Error("Invalid config response: missing or invalid data")}catch(m){const d=m.response?.data?.detail||m.message||"Unknown error";if(i)return L.warn("Failed to reload config from API, keeping current config:",d),!1;{const x=Te();return x?(L.warn("Failed to load config from API, using cached config:",d),f.current&&(t(x),E(!0),c(d),s(!1)),!1):(f.current&&(c(d),s(!1)),!1)}}finally{A.current=!1}},[]),y=j.useRef(null),w=j.useCallback(async()=>{if(y.current)return y.current;const i=S(!0).finally(()=>{y.current=null});return y.current=i,i},[S]),l=j.useRef(!1);j.useEffect(()=>{if(!l.current)return l.current=!0,S(!1),()=>{f.current=!1}},[]),j.useEffect(()=>{const i=n.HASS_ACCESS_TOKEN||"";i&&typeof i=="string"&&i.trim()!==""&&i!=="undefined"&&i!=="null"?W.defaults.headers.common.Authorization=`Bearer ${i}`:delete W.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),j.useEffect(()=>{const i=n.ENABLE_LOGGING===!0;tn(i)},[n.ENABLE_LOGGING]);const a=j.useMemo(()=>({config:n,loading:o,configError:u,isUsingCachedConfig:h,reloadConfig:w}),[n,o,u,h,w]);return r.jsx(re.Provider,{value:a,children:e})},G=()=>{const e=j.useContext(re);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config},it=()=>{const e=j.useContext(re);if(!e)throw new Error("useConfigLoading must be used within ConfigProvider");return e.loading},st=()=>{const e=j.useContext(re);if(!e)throw new Error("useConfigError must be used within ConfigProvider");return e.configError},at=()=>{const e=j.useContext(re);if(!e)throw new Error("useIsUsingCachedConfig must be used within ConfigProvider");return e.isUsingCachedConfig},ct=()=>{const e=j.useContext(re);if(!e)throw new Error("useReloadConfig must be used within ConfigProvider");return e.reloadConfig};let oe=0,xe=0,Q=0;const ne=[],lt=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},cn=(e,n="")=>{const t=lt(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;Q++,oe++,ne.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ne.length>10&&ne.shift();const s=[];return n&&s.push(`[${n}]`),s.push("🔴 Axios API Error:"),s.push(`Message: ${t.message}`),t.url&&s.push(`URL: ${t.url}`),t.status&&s.push(`HTTP Status: ${t.status}`),t.code&&s.push(`Error Code: ${t.code}`),t.isNetworkError&&(s.push("Type: Network Error (no response received)"),t.readyState!==void 0&&s.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&s.push("Type: Timeout Error"),t.config&&(s.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),s.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&s.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&s.push("Response Data:",t.responseData),s.push(`Request Stats: ${xe} success, ${Q} errors (${oe} total)`),Q>3&&ne.length>0&&s.push("Recent errors pattern:",ne.slice(-5)),L.error(...s),t},ln=e=>{xe++,oe++,(oe%10===0||Q>0)&&L.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:oe,stats:`${xe} success, ${Q} errors`}),Q>0&&oe%10===0&&xe>Q&&(Q=0,ne.length=0)},H=e=>{const n=lt(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};let Oe=null;const Ve=e=>{Oe=e},dn=!1;W.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,L.debug("Axios Defaults State:",{baseURL:W.defaults.baseURL,timeout:W.defaults.timeout,hasAuthHeader:!!W.defaults.headers?.common?.Authorization,authHeaderLength:W.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(W.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||L.error("Axios Request Setup Error:",e),Promise.reject(e)));W.interceptors.response.use(e=>(e.config&&ln(e.config),e),e=>{const n=e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"),t=e.config?.metadata?.skipConnectionCheck===!0;if(!n){const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(cn(e,o),e.config?.metadata){const s=Date.now()-e.config.metadata.startTime;L.error("Request Duration:",`${s}ms`,"Request ID:",e.config.metadata.requestId)}!t&&Oe&&!e.response&&(e.code==="ERR_NETWORK"||e.code==="ECONNABORTED"||e.code==="ERR_CANCELED")&&Oe()}return Promise.reject(e)});const V=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;if(typeof window<"u"&&window.location){if(window.location.pathname.includes("/api/hassio_ingress/")){const s=window.location.pathname.match(/^(\/api\/hassio_ingress\/[^\/]+\/)/);if(s){const u=s[1],c=t.startsWith("/")?t.slice(1):t;return`${u}${c}`}}return t}return t},un=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},fn=(e={})=>{const n=un(e);if(!n)return"";const t=n.startsWith("https://")?"wss://":"ws://",o=n.replace(/^https?:\/\//,"");return`${t}${o}/api/websocket`},hn=()=>{const e=G(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[o,s]=T.useState(null),[u,c]=T.useState(!1),h=n&&t,E=t?V(`/api/states/${t}`,e):null;return T.useEffect(()=>{if(!h||!E)return;let f=!0;const p=new AbortController;return W(E,{signal:p.signal}).then(A=>{f&&(A.data.attributes.store!==void 0?s(A.data.attributes.store):s([]),c(!1))}).catch(A=>{f&&!p.signal.aborted&&(c(H(A)),s([]))}),()=>{f=!1,p.abort()}},[h,E,n,t]),[o,u]},pn=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=V(`/api/states/${t}`,n);W.post(o,{state:new Date,attributes:{store:e}}).catch(s=>{L.error("Failed to store everyday calendar data:",s)})},Fe=v.div` 

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
`,gn=({on:e,month:n,day:t})=>{const[o,s]=e,u=o.indexOf(`${n}-${t}`),c=u>-1,h=()=>{s(c?o.toSpliced(u,1):[...o,`${n}-${t}`])};return r.jsx("div",{className:Y("dot",{on:c}),onClick:()=>h()})},mn=()=>{const e=G();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let f=1;f<13;f++){const p=new Date(t,f,0).getDate();for(let A=1;A<=p;A++)o.push({month:f,day:A})}const s=Array.from({length:31},(f,p)=>p+1),u=Array.from({length:12},(f,p)=>p+1),c=T.useState(void 0),[h,E]=hn();return T.useEffect(()=>{h!==null&&c[1](h)},[h]),T.useEffect(()=>{c[0]!==void 0&&pn(c[0],e)},[c[0],e]),c[0]!==void 0?r.jsxs(Fe,{children:[r.jsx("h2",{children:"Jeden Tag ein bißchen"}),E!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:E instanceof Error?E.message:String(E)})]}),r.jsxs("div",{className:"calendar",children:[s.map((f,p)=>r.jsx("div",{style:{gridArea:`${f+1} / 1 / ${f+1} / 1`},children:f},p)),u.map((f,p)=>r.jsx("div",{style:{gridArea:`1 / ${f+1} / 1 / ${f+1}`},children:f},p)),o.map((f,p)=>r.jsx("div",{style:{gridArea:`${f.day+1} / ${f.month+1} / ${f.day+1} / ${f.month+1}`},children:r.jsx(gn,{on:c,month:f.month,day:f.day})},p))]})]}):r.jsx(Fe,{className:"loading",children:E!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:E instanceof Error?E.message:String(E)})]}):r.jsx(ot,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},xn=v.div`
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
  }`,yn=()=>{const[e,n]=T.useState(z.now()),[t,o]=T.useState(!1),s=j.useCallback(()=>o(!0),[]),u=j.useCallback(()=>o(!1),[]);return T.useEffect(()=>{const c=setInterval(()=>n(z.now()),1e3);return()=>clearInterval(c)},[]),r.jsxs(r.Fragment,{children:[r.jsxs(xn,{onClick:s,children:[e.toFormat("HH"),r.jsx("span",{children:":"}),e.toFormat("mm")]}),r.jsx(le,{visible:t,onClick:u,fullsize:!0,children:r.jsx(mn,{})})]})},wn=j.memo(yn),En=3e3,bn=3e4,An=5e3,Sn=()=>{const[e,n]=j.useState(!0),t=j.useRef(null),o=j.useRef(null),s=j.useRef(!1),u=j.useRef(Date.now()),c=j.useRef(!0);j.useEffect(()=>{c.current=e},[e]);const h=j.useCallback(async()=>{if(!s.current){s.current=!0,u.current=Date.now();try{const p=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`;await W.get(p,{timeout:An,metadata:{skipConnectionCheck:!0}}),c.current||L.info("Connection restored - backend is reachable"),n(!0),s.current=!1,o.current&&(clearInterval(o.current),o.current=null)}catch(f){!f.response&&(f.code==="ERR_NETWORK"||f.code==="ECONNABORTED")?(c.current&&L.warn("Connection lost - backend is not reachable"),n(!1),s.current=!1,o.current||(o.current=setInterval(()=>{h()},bn))):(c.current||L.info("Connection restored - backend responded (with error)"),n(!0),s.current=!1,o.current&&(clearInterval(o.current),o.current=null))}}},[]),E=j.useCallback(()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{h()},En)},[h]);return j.useEffect(()=>{const f=()=>{document.visibilityState==="visible"&&E()};return document.addEventListener("visibilitychange",f),()=>{document.removeEventListener("visibilitychange",f)}},[E]),j.useEffect(()=>{const f=setTimeout(()=>{h()},1e3);return()=>{clearTimeout(f)}},[h]),j.useEffect(()=>()=>{t.current&&clearTimeout(t.current),o.current&&clearInterval(o.current)},[]),{isConnected:e,triggerCheck:E}},dt=j.createContext(null),Tn=({children:e})=>{const n=Sn(),t=ct(),o=j.useRef(!1),s=j.useRef(null),u=j.useRef(!1);return j.useEffect(()=>(Ve(n.triggerCheck),()=>{Ve(null)}),[n.triggerCheck]),j.useEffect(()=>{const c=n.isConnected;if(!c){o.current=!0,s.current&&(clearTimeout(s.current),s.current=null);return}return o.current&&c&&!u.current&&(s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{u.current||(u.current=!0,t().then(()=>{o.current=!1}).catch(h=>{L.warn("Failed to reload config after connection restore:",h)}).finally(()=>{u.current=!1,s.current=null}))},2e3)),()=>{s.current&&(clearTimeout(s.current),s.current=null)}},[n.isConnected,t]),r.jsx(dt.Provider,{value:n,children:e})},Cn=()=>{const e=j.useContext(dt);if(!e)throw new Error("useConnectionStateContext must be used within ConnectionStateProvider");return e};function Ae({onReady:e,enabled:n=!0,checkBackendConnection:t=!0,reconnectStrategy:o="simple",maxReconnectAttempts:s=5,reconnectDelay:u=2e3,logPrefix:c="WebSocket",dependencies:h=[]}){const E=G(),f=Cn(),p=t?f?.isConnected:!0,[A,b]=T.useState(!1),[S,y]=T.useState(!1),w=T.useRef(null),l=T.useRef(null),a=T.useRef(!0),i=T.useRef(null),g=T.useRef(null),m=T.useRef(null),d=T.useRef(0),x=T.useRef(!1),N=T.useRef(!1),C=T.useRef(new Map),R=T.useCallback(()=>{const _=w.current;if(l.current,i.current&&(clearTimeout(i.current),i.current=null),g.current&&(clearTimeout(g.current),g.current=null),m.current&&(clearTimeout(m.current),m.current=null),_&&_.readyState===WebSocket.OPEN&&(C.current.forEach(($,D)=>{try{_.send(JSON.stringify({type:"unsubscribe_entity",entity_id:D}))}catch{}}),C.current.clear()),_){try{_.close()}catch{}w.current=null}l.current=null},[c]),k=T.useCallback(async()=>{if(!(!n||!a.current)&&!(t&&!p)&&!x.current){w.current&&R(),x.current=!0,y(!0);try{let _;if(!dn){if(_=fn(E),!_){const D=typeof window<"u"&&window.location.protocol==="https:"?"wss:":"ws:",O=typeof window<"u"&&window.location.host?window.location.host:"";_=`${D}//${O}/api/websocket`}}if(!_){L.error(`Failed to build WebSocket URL for ${c} - cannot connect`),a.current&&b("WebSocket URL konnte nicht erstellt werden."),x.current=!1,y(!1);return}L.debug(`${c} connecting to: ${_}`);const $=new WebSocket(_);w.current=$,$.onopen=()=>{if(!a.current){$.close();return}if(L.debug(`${c} connection opened`),d.current=0,N.current=!1,m.current&&(clearTimeout(m.current),m.current=null),a.current&&b(!1),x.current=!1,y(!1),e)try{const D=e($,C);l.current=D}catch(D){L.error(`Failed to subscribe for ${c}:`,D),a.current&&b(D instanceof Error?D.message:String(D))}},$.onmessage=D=>{try{const O=JSON.parse(D.data);if(O.type==="state_update"){const I=O.entity_id,P=C.current.get(I);P&&P(O)}else if(O.type==="state_response"){const I=O.entity_id,P=C.current.get(I);P&&P(O)}else O.type==="error"&&(L.error(`${c} received error:`,O.message),a.current&&b(O.message))}catch(O){L.error(`Error handling message for ${c}:`,O)}},$.onclose=D=>{if(a.current&&!x.current){L.debug(`${c} disconnected (code: ${D.code}, wasClean: ${D.wasClean})`),w.current=null,C.current.clear(),l.current=null,i.current&&(clearTimeout(i.current),i.current=null);const O=!D.wasClean&&(D.code===1006||d.current>0);if(O&&d.current>=5&&!N.current){L.warn(`Backend appears to be down for ${c} (${d.current} failed attempts), switching to periodic retry every 60s`),N.current=!0,a.current&&b("Backend nicht erreichbar. Wiederherstellungsversuche alle 60 Sekunden.");const I=()=>{m.current=setTimeout(()=>{a.current&&!x.current&&p&&N.current&&(L.debug(`Periodic retry attempt for ${c} (backend might be back up)`),d.current=0,k(),I())},6e4)};I();return}if(N.current)return;if(o==="exponential"&&d.current>=s){L.warn(`Max reconnection attempts (${s}) reached for ${c}, stopping reconnection`),a.current&&b("Verbindung verloren. Bitte Seite neu laden.");return}if(p)if(o==="exponential"){const I=O?u*10:u,P=Math.min(I*Math.pow(2,d.current),6e4);d.current++,i.current=setTimeout(()=>{a.current&&!x.current&&p&&(L.debug(`Attempting to reconnect ${c} (attempt ${d.current}/${s})`),k())},P)}else{const I=O?u*10:u;i.current=setTimeout(()=>{a.current&&!x.current&&p&&(L.debug(`Attempting to reconnect ${c}`),k())},I)}else L.debug(`Skipping reconnection for ${c} - waiting for backend connection`)}},$.onerror=D=>{L.error(`WebSocket error for ${c}:`,D),x.current=!1,y(!1),a.current&&b("WebSocket-Verbindungsfehler");const O=$.readyState===WebSocket.CONNECTING||$.readyState===WebSocket.CLOSED;if(!N.current)if(p)if(o==="exponential"&&d.current<s){const I=O?u*5:u,P=Math.min(I*Math.pow(2,d.current),6e4);d.current++,i.current=setTimeout(()=>{a.current&&!x.current&&p&&(L.debug(`Attempting to reconnect ${c} after error (attempt ${d.current}/${s})`),k())},P)}else if(o==="simple"){const I=O?u*5:u;i.current=setTimeout(()=>{a.current&&!x.current&&p&&(L.debug(`Attempting to reconnect ${c} after error`),k())},I)}else L.warn(`Max reconnection attempts (${s}) reached for ${c}, stopping reconnection`),a.current&&b("Verbindung fehlgeschlagen. Bitte Seite neu laden.");else L.debug(`Skipping reconnection for ${c} after error - waiting for backend connection`)}}catch(_){if(x.current=!1,y(!1),a.current&&(L.error(`Failed to setup ${c} connection:`,_),b(_ instanceof Error?_.message:String(_)),p))if(o==="exponential"&&d.current<s){const $=Math.min(u*Math.pow(2,d.current),3e4);d.current++,i.current=setTimeout(()=>{a.current&&!x.current&&p&&(L.debug(`Attempting to reconnect ${c} after error (attempt ${d.current}/${s})`),k())},$)}else o==="simple"?i.current=setTimeout(()=>{a.current&&!x.current&&p&&k()},u):(L.warn(`Max reconnection attempts (${s}) reached for ${c}, stopping reconnection`),a.current&&b("Verbindung fehlgeschlagen. Bitte Seite neu laden."))}}},[n,t,p,E,o,s,u,c,e,R]);return T.useEffect(()=>{n&&p&&!w.current&&!x.current&&k()},[n,p,k,...h]),T.useEffect(()=>{n&&p&&!w.current&&!x.current&&(g.current&&(clearTimeout(g.current),g.current=null),g.current=setTimeout(()=>{a.current&&p&&!w.current&&!x.current&&(N.current=!1,d.current=0,m.current&&(clearTimeout(m.current),m.current=null),k())},1e3))},[n,p,k,c]),T.useEffect(()=>()=>{a.current=!1,R()},[R]),{connection:w.current,error:A,isConnecting:S}}const jn=()=>{const e=G(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const[o,s]=T.useState("off"),[u,c]=T.useState(!1),h=n&&t,E=t?V(`/api/states/${t}`,e):null;T.useEffect(()=>{if(!h||!E)return;let A=!0;const b=new AbortController;return W(E,{signal:b.signal}).then(S=>{A&&(s(S.data.state),c(!1))}).catch(S=>{A&&!b.signal.aborted&&c(H(S))}),()=>{A=!1,b.abort()}},[h,E,n,t]);const{error:f}=Ae({enabled:h&&!!t,logPrefix:"doorbell",onReady:(A,b)=>{const S=y=>{y.state!==void 0&&s(y.state)};return b.current.set(t,S),A.readyState===WebSocket.OPEN&&(A.send(JSON.stringify({type:"subscribe_entity",entity_id:t})),L.debug("Subscribed to doorbell state changes")),()=>{b.current.delete(t),A.readyState===WebSocket.OPEN&&A.send(JSON.stringify({type:"unsubscribe_entity",entity_id:t}))}},dependencies:[h,t]});return[o,u||f||!1]},Nn=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&W.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to unlatch front door:",t)})},M={portrait:360/480,landscape:1920/1072,wide:770/216};function Ln(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function ut(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,s=Ln(e);return o===1?Rn(e[0],n,t):o===2?kn(s,e,n,t):o===3?_n(s,e,n,t):o===4?On(s,e,n,t):{videos:[],totalArea:0,efficiency:0}}function Rn(e,n,t){const o=M[e.orientation];let s,u;const c=n/t;return o>c?(s=n,u=n/o):(u=t,s=t*o),{videos:[{x:(n-s)/2,y:(t-u)/2,width:s,height:u,orientation:e.orientation}],totalArea:s*u,efficiency:s*u/(n*t)*100}}function kn(e,n,t,o){if(e.portrait>0)return $e(e,n,t,o);const s=[];e.landscape>0&&s.push("landscape"),e.wide>0&&s.push("wide");const u=s[0]||n[0].orientation,c=s[1]||n[1].orientation,h=M[u],E=M[c];if(e.landscape===1&&e.wide===1){const y=M.landscape,w=M.wide,l=t,a=l/y,i=l/w,g=a+i;let m,d,x;if(g<=o)m=a,d=i,x=l;else{const $=o/g;m=a*$,d=i*$,x=d*w}const N=(t-x)/2,R=X(n,[{x:N,y:0,width:x,height:d,orientation:"wide"},{x:N,y:d,width:x,height:m,orientation:"landscape"}]),k=x*m+x*d,_=k/(t*o)*100;return{videos:R,totalArea:k,efficiency:_}}if(e.wide===2){const y=M.wide,w=t,l=w/y,a=l*2;let i;a<=o?i=l:i=o/2;const m=X(n,[{x:0,y:0,width:w,height:i,orientation:"wide"},{x:0,y:i,width:w,height:i,orientation:"wide"}]),d=w*i*2,x=d/(t*o)*100;return{videos:m,totalArea:d,efficiency:x}}const f=[()=>{const y=t,w=y/2,l=y/2,a=w/h,i=l/E;return Math.max(a,i)<=o?{positions:[{x:0,y:(o-a)/2,width:w,height:a,orientation:u},{x:w,y:(o-i)/2,width:l,height:i,orientation:c}],totalArea:w*a+l*i}:null},()=>{const y=o,w=y/2,l=y/2,a=w*h,i=l*E;return Math.max(a,i)<=t?{positions:[{x:(t-a)/2,y:0,width:a,height:w,orientation:u},{x:(t-i)/2,y:w,width:i,height:l,orientation:c}],totalArea:a*w+i*l}:null}];let p=null,A=0;for(const y of f){const w=y();w&&w.totalArea>A&&(A=w.totalArea,p=w)}if(!p){const y=t/2,w=t/2,l=Math.min(y/h,o),a=Math.min(w/E,o);p={positions:[{x:0,y:(o-l)/2,width:y,height:l,orientation:u},{x:y,y:(o-a)/2,width:w,height:a,orientation:c}],totalArea:y*l+w*a}}const b=X(n,p.positions),S=p.totalArea/(t*o)*100;return{videos:b,totalArea:p.totalArea,efficiency:S}}function $e(e,n,t,o){const s=e.portrait,u=n.length-s;if((s===3||s===4)&&u===0){const S=M.portrait,y=t/s,w=y/S,l=w<o?(o-w)/2:0,a=Math.min(w,o),i=[];let g=0;for(let x=0;x<s;x++){const N=Math.min(y,a*S);i.push({x:x*y+(y-N)/2,y:l,width:N,height:a,orientation:"portrait"}),g+=N*a}const m=X(n,i),d=g/(t*o)*100;return{videos:m,totalArea:g,efficiency:d}}n.filter(S=>S.orientation==="portrait");const c=n.filter(S=>S.orientation!=="portrait"),h=s>0?Math.min(t*.4,t*.5):0,E=t-h,f=[];let p=0;if(s===2&&u===0){const S=M.portrait,y=t/2,w=y/S,l=o;let a,i;w<=l?(i=w,a=y):(i=l,a=l*S);const g=(o-i)/2;f.push({x:(y-a)/2,y:g,width:a,height:i,orientation:"portrait"}),f.push({x:y+(y-a)/2,y:g,width:a,height:i,orientation:"portrait"}),p=a*i*2}else if(s===1&&u===1){const S=M.portrait,y=c[0],w=M[y.orientation],l=S+w,a=t*(S/l),i=t*(w/l),g=a/S,m=i/w,d=Math.min(o,Math.min(g,m)),x=(o-d)/2;f.push({x:0,y:x,width:a,height:d,orientation:"portrait"}),f.push({x:a,y:x,width:i,height:d,orientation:y.orientation}),p=a*d+i*d}else if(s===1&&u===2&&e.landscape===1&&e.wide===1){const S=M.portrait,y=M.wide,w=M.landscape,l=o,a=o*S,i=o/(1/y+1/w),g=i/y,m=i/w,d=a+i;if(Math.abs(d-t)<.1)f.push({x:0,y:0,width:a,height:l,orientation:"portrait"}),p+=a*l,c.find(R=>R.orientation==="wide")&&(f.push({x:0+a,y:0,width:i,height:g,orientation:"wide"}),p+=i*g),c.find(R=>R.orientation==="landscape")&&(f.push({x:0+a,y:g,width:i,height:m,orientation:"landscape"}),p+=i*m);else{const x=t/d,N=a*x,C=N/S,R=i*x,k=o/C;let _=N*k,$=o,D=R*k,O=D/y,I=D/w,P=_+D;if(P>t){const K=t/P;_=_*K,$=_/S,D=D*K,O=D/y,I=D/w,P=_+D,P>t&&(D=t-_,O=D/y,I=D/w)}const F=_+D;if(F>t){const K=t/F;_=_*K,$=_/S,D=D*K,O=D/y,I=D/w}const B=0;f.push({x:B,y:0,width:_,height:$,orientation:"portrait"}),p+=_*$,c.find(K=>K.orientation==="wide")&&(f.push({x:B+_,y:0,width:D,height:O,orientation:"wide"}),p+=D*O),c.find(K=>K.orientation==="landscape")&&(f.push({x:B+_,y:O,width:D,height:I,orientation:"landscape"}),p+=D*I)}}else if(s===1&&u===3){const S=M.portrait,y=o,w=y*S,l=w,a=t-l;f.push({x:0,y:0,width:w,height:y,orientation:"portrait"}),p+=w*y;const i=o/3;for(let g=0;g<c.length;g++){const m=c[g],d=M[m.orientation],x=i,N=a;let C,R;N/d<=x?(C=N,R=C/d):(R=x,C=R*d);const k=g*i+(i-R)/2;f.push({x:l+(a-C)/2,y:k,width:C,height:R,orientation:m.orientation}),p+=C*R}}else if(s===2&&u===1){const S=M.portrait,y=c[0],w=M[y.orientation],l=o/2,a=l*S,i=t-a,g=o*w;let m,d;g<=i?(d=o,m=d*w):(m=i,d=m/w);const x=a,N=l,C=(o-d)/2,R=(o/2-N)/2,k=o/2+(o/2-N)/2;f.push({x:0,y:C,width:m,height:d,orientation:y.orientation}),p+=m*d,f.push({x:i,y:R,width:x,height:N,orientation:"portrait"}),p+=x*N,f.push({x:i,y:k,width:x,height:N,orientation:"portrait"}),p+=x*N}else if(s===1&&u===2){const S=M.portrait,y=o,w=y*S,l=w,a=t-l;f.push({x:0,y:0,width:w,height:y,orientation:"portrait"}),p+=w*y;const i=o/2;for(let g=0;g<c.length;g++){const m=c[g],d=M[m.orientation],x=i,N=a;let C,R;N/d<=x?(C=N,R=C/d):(R=x,C=R*d);const k=g*i+(i-R)/2;f.push({x:l+(a-C)/2,y:k,width:C,height:R,orientation:m.orientation}),p+=C*R}}else{const S=s;if(S>0){const y=o/S,w=M.portrait;for(let l=0;l<S;l++){const a=Math.min(y,h/w),i=a*w,g=l*y+(y-a)/2;f.push({x:(h-i)/2,y:g,width:i,height:a,orientation:"portrait"}),p+=i*a}}if(c.length>0){const y=o/c.length;for(let w=0;w<c.length;w++){const l=c[w],a=M[l.orientation],i=y,g=E;let m,d;g/a<=i?(m=g,d=m/a):(d=i,m=d*a);const x=w*y+(y-d)/2;f.push({x:h+(E-m)/2,y:x,width:m,height:d,orientation:l.orientation}),p+=m*d}}}const A=X(n,f),b=p/(t*o)*100;return{videos:A,totalArea:p,efficiency:b}}function X(e,n){const t=new Array(n.length),o=new Set,s=new Set;for(let h=0;h<n.length;h++){const E=n[h];for(let f=0;f<e.length;f++)if(!o.has(f)&&e[f].orientation===E.orientation){t[h]={...E,orientation:e[f].orientation},o.add(f),s.add(h);break}}const u=[];for(let h=0;h<n.length;h++)s.has(h)||u.push(h);let c=0;for(let h=0;h<e.length;h++)if(!o.has(h)&&c<u.length){const E=u[c];t[E]={...n[E],orientation:e[h].orientation},c++}return t}function _n(e,n,t,o){if(e.portrait>0)return $e(e,n,t,o);if(e.landscape===2&&e.wide===1){const l=M.landscape,a=M.wide,i=t,g=i/a,m=o-g,d=t/2,x=d/l;let N,C,R,k;if(g<=o&&x<=m)N=i,C=g,R=d,k=x;else{const F=o/(g+x),B=Math.min(1,F);C=g*B,N=C*a,k=x*B,R=k*l}const _=(t-N)/2,$=C+(m-k)/2,O=X(n,[{x:_,y:0,width:N,height:C,orientation:"wide"},{x:0,y:$,width:R,height:k,orientation:"landscape"},{x:R,y:$,width:R,height:k,orientation:"landscape"}]),I=N*C+R*k*2,P=I/(t*o)*100;return{videos:O,totalArea:I,efficiency:P}}if(e.landscape===1&&e.wide===2){const l=M.landscape,a=M.wide,i=t/2,g=i/a,d=o-g,x=d*l;let N,C,R,k;if(g<=o&&x<=t&&g+d<=o)N=i,C=g,R=x,k=d;else{const B=g+d,Z=o/B;N=i,C=g*Z,k=d*Z,R=k*l}const _=0,$=t/2,D=(t-R)/2,I=X(n,[{x:_,y:0,width:N,height:C,orientation:"wide"},{x:$,y:0,width:N,height:C,orientation:"wide"},{x:D,y:C,width:R,height:k,orientation:"landscape"}]),P=N*C*2+R*k,F=P/(t*o)*100;return{videos:I,totalArea:P,efficiency:F}}if(e.wide===3){const l=M.wide,a=t/2,i=a/l,m=o-i,d=m*l;let x,N,C,R;if(i<=o&&d<=t&&i+m<=o)x=a,N=i,C=d,R=m;else{const F=i+m,B=o/F;x=a,N=i*B,R=m*B,C=R*l,C>t&&(C=t,R=C/l)}const k=0,_=t/2,$=(t-C)/2,O=X(n,[{x:k,y:0,width:x,height:N,orientation:"wide"},{x:_,y:0,width:x,height:N,orientation:"wide"},{x:$,y:N,width:C,height:R,orientation:"wide"}]),I=x*N*2+C*R,P=I/(t*o)*100;return{videos:O,totalArea:I,efficiency:P}}if(e.landscape===3){const l=M.landscape,a=t/(l*1.5),i=Math.min(o,a),g=i/2,m=i,d=g*l,x=m*l,N=(o-i)/2,C=[{x:0,y:N,width:d,height:g,orientation:"landscape"},{x:0,y:N+g,width:d,height:g,orientation:"landscape"},{x:d,y:N,width:x,height:m,orientation:"landscape"}],R=X(n,C),k=d*i+x*i,_=k/(t*o)*100;return{videos:R,totalArea:k,efficiency:_}}const s=[];if(e.landscape>0)for(let l=0;l<e.landscape;l++)s.push("landscape");if(e.wide>0)for(let l=0;l<e.wide;l++)s.push("wide");const u=s[0]||n[0].orientation,c=s[1]||n[1].orientation,h=s[2]||n[2].orientation,E=M[u],f=M[c],p=M[h],A=[()=>{const l=t*.6,a=t*.4,i=l/E,g=a/f,m=a/p,d=g+m;return i<=o&&d<=o?{positions:[{x:0,y:(o-i)/2,width:l,height:i,orientation:u},{x:l,y:0,width:a,height:g,orientation:c},{x:l,y:g,width:a,height:m,orientation:h}],totalArea:l*i+a*g+a*m}:null},()=>{const l=o*.5,a=o*.5,i=l*E,g=l*f,m=a*p;return i+g<=t&&m<=t?{positions:[{x:0,y:0,width:i,height:l,orientation:u},{x:i,y:0,width:g,height:l,orientation:c},{x:(t-m)/2,y:l,width:m,height:a,orientation:h}],totalArea:i*l+g*l+m*a}:null},()=>{const l=t/3,a=l/E,i=l/f,g=l/p;return Math.max(a,i,g)<=o?{positions:[{x:0,y:(o-a)/2,width:l,height:a,orientation:u},{x:l,y:(o-i)/2,width:l,height:i,orientation:c},{x:l*2,y:(o-g)/2,width:l,height:g,orientation:h}],totalArea:l*a+l*i+l*g}:null}];let b=null,S=0;for(const l of A){const a=l();a&&a.totalArea>S&&(S=a.totalArea,b=a)}if(!b){const l=t/3,a=Math.min(l/E,o),i=Math.min(l/f,o),g=Math.min(l/p,o);b={positions:[{x:0,y:(o-a)/2,width:l,height:a,orientation:u},{x:l,y:(o-i)/2,width:l,height:i,orientation:c},{x:l*2,y:(o-g)/2,width:l,height:g,orientation:h}],totalArea:l*a+l*i+l*g}}const y=X(n,b.positions),w=b.totalArea/(t*o)*100;return{videos:y,totalArea:b.totalArea,efficiency:w}}function On(e,n,t,o){if(e.portrait>0)return $e(e,n,t,o);const s=[];if(e.landscape>0)for(let i=0;i<e.landscape;i++)s.push("landscape");if(e.wide>0)for(let i=0;i<e.wide;i++)s.push("wide");const u=s[0]||n[0].orientation,c=s[1]||n[1].orientation,h=s[2]||n[2].orientation,E=s[3]||n[3].orientation,f=M[u],p=M[c],A=M[h],b=M[E],S=[()=>{const i=t/2,g=o/2,m=Math.min(i,g*f),d=m/f,x=Math.min(i,g*p),N=x/p,C=Math.min(i,g*A),R=C/A,k=Math.min(i,g*b),_=k/b;return{positions:[{x:(i-m)/2,y:(g-d)/2,width:m,height:d,orientation:u},{x:i+(i-x)/2,y:(g-N)/2,width:x,height:N,orientation:c},{x:(i-C)/2,y:g+(g-R)/2,width:C,height:R,orientation:h},{x:i+(i-k)/2,y:g+(g-_)/2,width:k,height:_,orientation:E}],totalArea:m*d+x*N+C*R+k*_}},()=>{const i=t*.6,g=t*.4,m=i/f,d=o/3,x=Math.min(g,d*p),N=x/p,C=Math.min(g,d*A),R=C/A,k=Math.min(g,d*b),_=k/b;return m<=o?{positions:[{x:0,y:(o-m)/2,width:i,height:m,orientation:u},{x:i,y:0,width:x,height:N,orientation:c},{x:i,y:d,width:C,height:R,orientation:h},{x:i,y:d*2,width:k,height:_,orientation:E}],totalArea:i*m+x*N+C*R+k*_}:null},()=>{const i=t/4,g=i/f,m=i/p,d=i/A,x=i/b;return Math.max(g,m,d,x)<=o?{positions:[{x:0,y:(o-g)/2,width:i,height:g,orientation:u},{x:i,y:(o-m)/2,width:i,height:m,orientation:c},{x:i*2,y:(o-d)/2,width:i,height:d,orientation:h},{x:i*3,y:(o-x)/2,width:i,height:x,orientation:E}],totalArea:i*g+i*m+i*d+i*x}:null}];let y=null,w=0;for(const i of S){const g=i();g&&g.totalArea>w&&(w=g.totalArea,y=g)}if(!y){const i=t/2,g=o/2,m=Math.min(g,i/f),d=Math.min(g,i/p),x=Math.min(g,i/A),N=Math.min(g,i/b);y={positions:[{x:(i-i)/2,y:(g-m)/2,width:i,height:m,orientation:u},{x:i+(i-i)/2,y:(g-d)/2,width:i,height:d,orientation:c},{x:(i-i)/2,y:g+(g-x)/2,width:i,height:x,orientation:h},{x:i+(i-i)/2,y:g+(g-N)/2,width:i,height:N,orientation:E}],totalArea:i*m+i*d+i*x+i*N}}const l=X(n,y.positions),a=y.totalArea/(t*o)*100;return{videos:l,totalArea:y.totalArea,efficiency:a}}const Dn=async(e,n,t)=>{const o=V(`/api/states/${e}`,n),u=(await W(o,{timeout:2e3,signal:t.signal})).data?.attributes?.access_token||null;return{entityId:e,accessToken:u}},Ge=async(e,n)=>{if(!e||e.length===0)return{tokens:{},error:null};const t=new AbortController;try{const o=e.map(async h=>{let E=null;for(let f=0;f<2;f++)try{return await Dn(h,n,t)}catch(p){if(E=p,(p.code==="ECONNABORTED"||p.message?.includes("timeout"))&&f===0){L.debug(`Token fetch timeout for ${h}, retrying...`);continue}else return L.error(`Failed to fetch access token for ${h} (attempt ${f+1}):`,p),{entityId:h,accessToken:null}}return L.error(`Failed to fetch access token for ${h} after 2 attempts:`,E),{entityId:h,accessToken:null}}),s=await Promise.all(o),u={};let c=!1;return s.forEach(({entityId:h,accessToken:E})=>{E?u[h]=E:c=!0}),Object.keys(u).length===0&&c?{tokens:{},error:"Timeout: Kamera-Token konnten nicht geladen werden. Bitte erneut versuchen."}:{tokens:u,error:null}}catch(o){return t.signal.aborted?{tokens:{},error:null}:(L.error("Failed to fetch camera access tokens:",o),{tokens:{},error:H(o)})}},vn=(e,n=null,t={})=>{if(!e)return null;let o;const s=t.HASS_HOST||"";if(s&&s!=="undefined"&&s!=="null")o=s.replace(/\/$/,"");else if(typeof window<"u"&&window.location)o=window.location.origin;else return null;const u=`${o}/api/camera_proxy_stream/${e}`;if(n){const c=u.includes("?")?"&":"?";return`${u}${c}token=${encodeURIComponent(n)}`}return u},ze=45e3,In=v.div`
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

            .loading-spinner {
                animation: spin 1s infinite linear;
                margin: 1rem 0;
            }

            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(359deg);
                }
            }

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
`,$n=()=>{const e=G(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[],[o,s]=T.useState(!1),[u]=jn(),[c,h]=T.useState(void 0),[E,f]=T.useState(100),[p,A]=T.useState("0"),b=T.useMemo(()=>t.map(C=>C.entity_id).filter(Boolean),[t]),[S,y]=T.useState({}),[w,l]=T.useState(!1),[a,i]=T.useState(null);T.useEffect(()=>{o&&b.length>0?(l(!0),i(null),Ge(b,e).then(({tokens:C,error:R})=>{y(C),i(R),l(!1)}).catch(C=>{L.error("Failed to fetch camera tokens:",C),i(H(C)),l(!1)})):o||(y({}),i(null))},[o,b.join(","),e]);const g=T.useCallback(async()=>{if(b.length!==0){l(!0),i(null);try{const{tokens:C,error:R}=await Ge(b,e);y(C),i(R)}catch(C){L.error("Failed to refresh camera tokens:",C),i(H(C))}finally{l(!1)}}},[b,e]),m=T.useRef(new Map);T.useEffect(()=>{o||(m.current.forEach(C=>{C&&C.src&&(C.src="")}),m.current.clear())},[o]),T.useEffect(()=>{if(u==="off"&&o){const C=window.setTimeout(()=>{s(!1),h(void 0)},ze);return h(C),A(ze+"ms"),f(0),()=>{C&&window.clearTimeout(C)}}else u==="on"&&(A(0),f(100),s(!0))},[u,o]),T.useEffect(()=>{u==="on"&&c!==void 0&&(window.clearTimeout(c),A(0),f(100),h(void 0))},[c,u]);const[d,x]=T.useState(null),N=()=>{d===null?x("confirm"):d==="confirm"&&(x("opening"),Nn(e),setTimeout(()=>x(null),2e3))};return T.useEffect(()=>{if(d==="confirm"){const C=setTimeout(()=>{x(null)},3e3);return()=>{clearTimeout(C)}}},[d]),T.useEffect(()=>{o||x(null)},[o]),n?r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>s(C=>!C),children:"CCTV"}),r.jsx(le,{visible:o,onClick:N,onClose:()=>{s(!1),x(null)},fullsize:!0,children:r.jsxs(In,{onClick:N,children:[r.jsx(ht,{completed:E,height:10,bgColor:c===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:p,transitionTimingFunction:"linear"}),r.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const C=t.map(O=>({orientation:O.orientation||"landscape"})),R=window.innerWidth,k=window.innerHeight-10,_=ut(C,R,k),$={portrait:t.filter(O=>(O.orientation||"landscape")==="portrait"),landscape:t.filter(O=>(O.orientation||"landscape")==="landscape"),wide:t.filter(O=>O.orientation==="wide")},D={portrait:0,landscape:0,wide:0};return _.videos.map((O,I)=>{const P=O.orientation,F=D[P],B=$[P][F];if(!B)return null;D[P]++;const Z=S[B.entity_id]||null,de=!!Z,K=vn(B.entity_id,Z,e);return!K&&!de?r.jsx("div",{className:"video-container",style:{left:`${O.x}px`,top:`${O.y}px`,width:`${O.width}px`,height:`${O.height}px`},children:r.jsx("div",{className:"token-error",children:w?r.jsxs(r.Fragment,{children:[r.jsx(U,{path:Re,size:"48px",color:"#ffffff",className:"loading-spinner"}),r.jsx("div",{children:"Lade Token..."})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{children:a||"Kamera-Token nicht verfügbar"}),r.jsx("button",{onClick:()=>g(),children:"Token neu laden"})]})})},`${P}-${F}-${I}`):K?r.jsxs("div",{className:"video-container",style:{left:`${O.x}px`,top:`${O.y}px`,width:`${O.width}px`,height:`${O.height}px`},children:[de&&o&&r.jsx("img",{ref:We=>{We?m.current.set(`${B.entity_id}-${I}`,We):m.current.delete(`${B.entity_id}-${I}`)},src:K,className:P,alt:"Camera stream",crossOrigin:"anonymous"},`${B.entity_id}-${I}`),!de&&r.jsx("div",{className:"token-error",children:w?r.jsxs(r.Fragment,{children:[r.jsx(U,{path:Re,size:"48px",color:"#ffffff",className:"loading-spinner"}),r.jsx("div",{children:"Lade Token..."})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{children:a||"Kamera-Token nicht verfügbar"}),r.jsx("button",{onClick:()=>g(),children:"Token neu laden"})]})}),r.jsx("div",{className:"video-overlay",onClick:()=>N()})]},`${P}-${F}-${I}`):null})})()}),d==="confirm"&&r.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),d==="opening"&&r.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]}):null},Mn=v.div`
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

`,Wn=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>r.jsxs(Mn,{children:[r.jsxs("div",{className:"buttons",children:[r.jsx(U,{path:vt,size:"32px",color:"#ffffff",onClick:n}),r.jsx(U,{path:It,size:"32px",color:"#ffffff",onClick:e}),r.jsx("button",{onClick:t,children:"Today"}),r.jsx($n,{})]}),r.jsx(wn,{}),r.jsx(U,{path:Re,size:"32px",color:"#ffffff",className:Y("indicator")})]}),Pn=j.memo(Wn),Bn=6e4,Me=(e=Bn,n=void 0)=>{const[t,o]=T.useState(!0);return T.useEffect(()=>{const s=setInterval(()=>{o(u=>!u)},e);return()=>{clearInterval(s)}},[e,n]),t},Vn={mdiDelete:Mt,mdiCake:$t},Fn=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Vn[n]||void 0},Gn=(e,n,t,o,s,u)=>W(s(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:65e3,signal:u}).then(c=>{!c.data||!Array.isArray(c.data)||c.data.forEach(h=>{const E="dateTime"in h.start?z.fromISO(h.start.dateTime):z.fromSQL(h.start.date);let f;"dateTime"in h.end?f=Math.floor(z.fromISO(h.end.dateTime).diff(n,"days").as("days")):f=Math.floor(z.fromSQL(h.end.date).diff(n,"days").as("days"))-1;const p=Math.floor(E.diff(n,"days").as("days"));f>=o.length&&(f=o.length-1);const A="dateTime"in h.start?"events":"allDay";if(p>=0&&p<o.length)for(let b=p;b<=f;b++)o[b][A]=[...o[b][A],{...h,icon:e.icon}]})}).catch(c=>{if(!(W.isCancel(c)||c.name==="AbortError"||c.code==="ERR_CANCELED"))throw c}),Ue=new Map,zn=300*1e3,Un=e=>e.toISODate(),Yn=(e,n,t,o,s,u,c,h,E)=>{const f=[0,1,2,3,4,5].map(y=>e.plus({days:y}).startOf("day"));f[6]=e.plus({days:6}).endOf("day");const p=Un(e),A=Ue.get(p);if(A&&Date.now()-A.timestamp<zn){E.current&&t(A.data);return}const b=f.map(y=>({date:y,allDay:[],events:[]}));if(!c||c.length===0){L.warn("loadAll: No calendars configured, skipping fetch",{calendars:c}),E.current&&(t(b),o(!1));return}L.debug("loadAll: Starting calendar fetch",{calendarsCount:c.length,calendars:c.map(y=>y.name),startDate:e.toISO(),endDate:f[6].toISO()});const S=new AbortController;s.current&&s.current.abort(),s.current=S;try{E.current&&o(!0);const y=c.map(w=>Gn(w,f[0],f[6],b,h,S.signal));Promise.all(y).then(()=>{E.current&&!S.signal.aborted&&(Ue.set(p,{data:b,timestamp:Date.now()}),t(b),u(!1))}).catch(w=>{E.current&&!S.signal.aborted&&u(H(w))}).finally(()=>{E.current&&!S.signal.aborted&&o(!1)})}catch(y){E.current&&!S.signal.aborted&&(u(H(y)),o(!1))}},Ye=[],Hn=e=>{const n=G(),t=n.CALENDARS||[];T.useEffect(()=>{L.debug("useCalendarData: config changed",{hasCALENDARS:"CALENDARS"in n,CALENDARS:n.CALENDARS,CALENDARSCount:Array.isArray(n.CALENDARS)?n.CALENDARS.length:"not array",configKeys:Object.keys(n)})},[n]);const o=T.useMemo(()=>{const l=t.map(a=>({name:a.name,icon:Fn(a.icon)}));return L.debug("Processing calendars from config (memo update):",{CALENDARS:t,count:t.length,processedCount:l.length,processed:l.map(a=>a.name)}),l},[t]);T.useEffect(()=>{L.debug("CALENDARS array changed:",{CALENDARS:t,count:t.length,calendarsMemoCount:o.length})},[t,o.length]);const s=T.useCallback(l=>V(`/api/calendars/${l}`,n),[n]),u=T.useCallback((l,a)=>`${s(l)}?${Qt.stringify(a)}`,[s]),[c,h]=T.useState(Ye),[E,f]=T.useState(!1),[p,A]=T.useState(!1),[b,S]=T.useState(null),y=j.useRef(null),w=j.useRef(!0);return Me(6e4,"Calendar"),T.useEffect(()=>(w.current=!0,L.debug("useCalendarData effect triggered:",{startDate:e?.toISO(),calendarsCount:o.length,calendars:o.map(l=>l.name),hasStartDate:e!==void 0,hasCalendars:o.length>0}),e!==void 0&&o.length>0?((b===null||!b.equals(e))&&(h(Ye),S(e)),L.debug("useCalendarData: Calling loadAll",{startDate:e.toISO(),calendarsCount:o.length}),Yn(e,c,h,f,y,A,o,u,w)):o.length,()=>{w.current=!1,y.current&&y.current.abort()}),[e,o,u]),[c,p]};function ce(e){const[n,t]=T.useState(!1);function o({key:u}){u===e&&t(!0)}const s=({key:u})=>{u===e&&t(!1)};return T.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",s)}),[e]),n}const Kn=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return z.fromJSDate(o)},qn=e=>{const n=()=>e(h=>h.plus({days:7})),t=ce("ArrowRight");T.useEffect(()=>{t&&n()},[t]);const o=()=>e(h=>h.minus({days:7})),s=ce("ArrowLeft");T.useEffect(()=>{s&&o()},[s]);const u=()=>e(Kn()),c=ce("t");return T.useEffect(()=>{c&&u()},[c]),{nextWeek:n,previousWeek:o,startWeekWithToday:u}},Jn=e=>{const[n,t]=j.useState(0),[o,s]=j.useState(0),u=50;return{onTouchStart:f=>{s(0),t(f.targetTouches[0].clientX)},onTouchMove:f=>s(f.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const f=n-o,p=f>u,A=f<-u;p&&e.onSwipedLeft(),A&&e.onSwipedRight()}}},He=e=>z.fromISO(e).toLocaleString(z.TIME_24_SIMPLE),Ce=e=>e.toFormat("c")>=6,je=e=>e.hasSame(z.now(),"day"),Xn=v.div`
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
`,Qn=()=>{const[e,n]=T.useState(void 0),[t,o]=Hn(e),{nextWeek:s,previousWeek:u,startWeekWithToday:c}=qn(n);T.useEffect(()=>{e===void 0&&c()},[]),T.useEffect(()=>{console.log("Week component - startDate:",e?.toISO(),"data length:",t.length,"error:",o)},[e,t.length,o]);const h=Jn({onSwipedLeft:()=>s(),onSwipedRight:()=>u()}),E=j.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),f=j.useMemo(()=>t.slice(0,7),[t]);return r.jsxs(Xn,{...h,children:[r.jsx(Pn,{nextWeek:s,previousWeek:u,startWeekWithToday:c}),r.jsxs("div",{className:"schedule",children:[f.map((p,A)=>r.jsx("div",{className:Y({weekend:Ce(p.date),today:je(p.date)},"caption"),children:r.jsx("h2",{children:p.date.toLocaleString(E)})},A)),f.map((p,A)=>r.jsx("div",{className:Y("allDayRow",{weekend:Ce(p.date),today:je(p.date)}),children:p.allDay.map((b,S)=>r.jsx("div",{className:"allDayEvent",children:b.summary},S))},A)),f.map((p,A)=>r.jsx("div",{className:Y("eventRow",{weekend:Ce(p.date),today:je(p.date)}),children:p.events.map((b,S)=>r.jsxs("div",{className:"event",children:[r.jsx("div",{children:b.summary}),r.jsxs("h3",{children:[b.icon&&r.jsx(U,{path:b.icon,size:"1rem",color:"#ffffff"}),He(b.start.dateTime)," - ",He(b.end.dateTime)]})]},S))},A))]}),t.length===0&&r.jsx("div",{className:"loading",children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsx(ot,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&r.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:r.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},Ee={"clear-day":{icon:St,label:"Klar",color:"#eeeef5"},"clear-night":{icon:At,label:"Klar",color:"#eeeef5"},rain:{icon:bt,label:"Regen",color:"#80a5d6"},snow:{icon:Et,label:"Schnee",color:"#8c82ce"},sleet:{icon:wt,label:"Graupel",color:"#aba4db"},wind:{icon:yt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:xt,label:"Neblig",color:"#d5dae2"},cloudy:{icon:mt,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:gt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:pt,label:"Teils bewölkt",color:"#d5dae2"}},Zn=e=>{const[n,t]=T.useState([]),[o,s]=T.useState(!1),u=Me(6e4*10,"Weather"),c=G(),h=c.ENABLE_WEATHER||!1,E=c.WEATHER_LATITUDE,f=c.WEATHER_LONGITUDE,p=h&&E&&f,A=()=>`.${`/forecast/${E},${f}?units=si&exclude=minutely`}`;return T.useEffect(()=>{if(!p)return;let b=!0;const S=new AbortController;return W(A(),{signal:S.signal}).then(y=>{b&&(t(y.data),s(!1))}).catch(y=>{b&&!S.signal.aborted&&s(H(y))}).finally(()=>{b&&e&&e(!1)}),()=>{b=!1,S.abort()}},[u,e,p,h,E,f]),[n,o]},eo=Ct(jt),Ke=v.div`

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
`,qe=j.memo(({data:e,daily:n=!1})=>r.jsxs("div",{children:[r.jsxs("div",{children:[!n&&z.fromSeconds(e.time).toLocaleString(z.TIME_24_SIMPLE),n&&z.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),r.jsx("div",{children:r.jsx(De,{icon:e.icon})}),r.jsx("div",{children:r.jsxs("strong",{children:[!n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),r.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),r.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),to=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:Ee[n.icon]?.color||"#ffffff",text:Ee[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),De=({icon:e})=>{const n=Ee[e];return r.jsx(n.icon,{size:60,color:"#ffffff"})},no=()=>{const n=G().ENABLE_WEATHER||!1,[t,o]=Zn(),[s,u]=T.useState(!1),c=ce("w"),h=T.useRef(),E=j.useCallback(()=>u(S=>!S),[]),f=j.useCallback(()=>u(!0),[]),p=j.useMemo(()=>to(t),[t]),A=j.useMemo(()=>[3,6,9,12],[]),b=j.useMemo(()=>[1,2,3,4,5,6,7],[]);return T.useEffect(()=>{if(!s||!h.current||!t||!t.hourly||p.length===0)return;const S={timezone:"Europe/Berlin"},y=document.createElement("div");return h.current.textContent="",h.current.appendChild(y),Zt(y,p,S),()=>{h.current&&(h.current.textContent="")}},[s,p]),T.useEffect(()=>{c&&E()},[c]),n?!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?r.jsx(Ke,{children:r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":r.jsxs(Ke,{children:[r.jsxs("div",{onClick:f,children:[r.jsxs("div",{className:"headline",children:[r.jsx(De,{icon:t.currently.icon}),r.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),r.jsx("div",{className:"forecast",children:A.map((S,y)=>r.jsx(qe,{data:t.hourly.data[S]},y))})]}),r.jsx(le,{visible:s,onClick:E,children:r.jsxs("div",{className:"full-weather",children:[o!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),r.jsxs("div",{className:"detail-header",children:[r.jsx("div",{children:r.jsxs("div",{className:"headline",children:[r.jsx(De,{icon:t.daily.data[0].icon}),r.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",r.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),r.jsx("h3",{children:Ee[t.daily.data[0].icon].label})]}),r.jsx("div",{className:"values",children:r.jsxs("div",{className:"table",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Regen:"})," ",Math.round(t.daily.data[0].precipProbability*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),r.jsx("h3",{children:"Die nächsten 24 Stunden"}),r.jsx("div",{ref:h}),r.jsx("h3",{children:"Die nächste Woche"}),r.jsx("div",{className:"forecast",children:b.map((S,y)=>r.jsx(qe,{data:t.daily.data[S],daily:!0},y))}),r.jsxs("div",{className:"info",children:["Aktualisiert ",r.jsx(Tt,{date:z.fromSeconds(t.currently.time).toJSDate(),formatter:eo})]})]})})]}):null},oo=j.memo(no),ro="AK Wandsbek",io="Hamburg",so="Master:62016",ao="STATION",co={x:10.091341,y:53.568702},lo={name:ro,city:io,id:so,type:ao,coordinate:co},ye={departureList:"departureList",checkName:"checkName"},uo=async(e,n,t,o)=>{const s={Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},u=o.HASS_ACCESS_TOKEN||"";u&&u.trim()!==""&&u!=="undefined"&&u!=="null"&&(s.Authorization=`Bearer ${u}`);const c=V(`/gti/public/${e}`,o);return W({method:"post",url:c,data:n,signal:t,headers:s})},Je=(e,n)=>e.realtimeOffset-n.realtimeOffset,fo=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(Je),to:n.filter(t=>t.directionId===6).slice(0,3).sort(Je)}},ho=e=>{const n=G(),t=n.ENABLE_HVV||!1,[o,s]=T.useState([]),[u,c]=T.useState(!1),h=Me(6e4),E=t;return T.useEffect(()=>{if(!E)return;if(!(e in ye)){L.warn(e,"not supported by HVV connector");return}let f=!0;const p=new AbortController;let A={version:51};switch(e){case ye.checkName:A={...A,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case ye.departureList:const b=z.now();A={...A,station:lo,time:{date:b.toFormat("dd.MM.yyyy"),time:b.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:A=void 0}return uo(e,A,p.signal,n).then(b=>{f&&(s(fo(b.data)),c(!1))}).catch(b=>{f&&!p.signal.aborted&&c(H(b))}),()=>{f=!1,p.abort()}},[e,h,E,t]),[o,u]},po=v.div`
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
`,Xe=j.memo(({line:e,direction:n,realtimeOffset:t})=>r.jsxs("div",{className:"departure",children:[r.jsx("div",{children:r.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),r.jsx("div",{children:t===0?"Jetzt":r.jsxs(r.Fragment,{children:["in ",t," '"]})})]})),go=()=>{const n=G().ENABLE_HVV||!1,[t,o]=ho(ye.departureList);return n?r.jsx(po,{children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((s,u)=>r.jsx(Xe,{line:s.line,direction:s.direction,realtimeOffset:s.realtimeOffset},u)),r.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((s,u)=>r.jsx(Xe,{line:s.line,direction:s.direction,realtimeOffset:s.realtimeOffset},u))]})}):null},mo=j.memo(go),xo=()=>{const e=G(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const o=e.ENTITY_CHARGING_STATE||"",s=e.ENTITY_STATE_OF_CHARGE||"",[u,c]=T.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[h,E]=T.useState(!1),f=n&&(t||o||s);T.useEffect(()=>{if(!f)return;(async()=>{const S=[];t&&S.push(W(V(`/api/states/${t}`,e)).then(l=>({type:"preclimateStatus",value:l.data.state==="on"})).catch(l=>({type:"preclimateStatus",error:H(l)}))),o&&S.push(W(V(`/api/states/${o}`,e)).then(l=>({type:"chargingState",value:l.data.state==="on"})).catch(l=>({type:"chargingState",error:H(l)}))),s&&S.push(W(V(`/api/states/${s}`,e)).then(l=>({type:"stateOfCharge",value:parseFloat(l.data.state)||0})).catch(l=>({type:"stateOfCharge",error:H(l)})));const y=await Promise.all(S);let w=!1;y.forEach(l=>{l.error?w=l.error:c(a=>({...a,[l.type]:l.value}))}),E(w||!1)})()},[f,n,t,o,s]);const{error:p}=Ae({enabled:f,checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3,logPrefix:"EV entities",onReady:(b,S)=>{const y=l=>{const a=l.entity_id,i=l.state;c(g=>{const m={...g};return a===t?m.preclimateStatus=i==="on":a===o?m.chargingState=i==="on":a===s&&(m.stateOfCharge=parseFloat(i)||0),m})},w=[];return t&&w.push(t),o&&w.push(o),s&&w.push(s),b.readyState===WebSocket.OPEN&&(w.forEach(l=>{S.current.set(l,y),b.send(JSON.stringify({type:"subscribe_entity",entity_id:l}))}),L.debug(`Subscribed to EV entity state changes: ${w.join(", ")}`)),()=>{w.forEach(l=>{S.current.delete(l),b.readyState===WebSocket.OPEN&&b.send(JSON.stringify({type:"unsubscribe_entity",entity_id:l}))})}},dependencies:[f,t,o,s]});return[u,h||p||!1]},yo=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&W.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to start preclimate:",t)})},wo=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&W.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to stop preclimate:",t)})},Eo=v.div`
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
`,bo=(e,n)=>n?Pt:e>=80?Bt:e>=50?Vt:e>=20?Ft:Gt,Ao=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",So=()=>{const e=G(),n=e.ENABLE_EV||!1,[t,o]=xo(),{preclimateStatus:s,chargingState:u,stateOfCharge:c}=t,[h,E]=j.useState(!1),[f,p]=j.useState(null),[A,b]=j.useState(!1),[S,y]=j.useState(!1),[w,l]=j.useState(0),a=j.useRef(null),i=j.useRef(null),g=j.useRef(s),m=j.useRef(null);j.useEffect(()=>{g.current!==s&&(h&&m.current!==null&&s===(f==="start")&&(l(f==="start"?360:0),y(!0),setTimeout(()=>{E(!1),p(null),y(!1),l(0),m.current=null,b(!1)},300),a.current&&(clearTimeout(a.current),a.current=null)),g.current=s)},[s,h,f]),j.useEffect(()=>{if(!h||S){i.current&&(cancelAnimationFrame(i.current),i.current=null);return}const $=m.current||Date.now(),D=1e4,O=f==="stop",I=()=>{const P=Date.now()-$,F=Math.min(P/D,1);l(O?360*(1-F):360*F),F<1&&!S&&(i.current=requestAnimationFrame(I))};return i.current=requestAnimationFrame(I),()=>{i.current&&(cancelAnimationFrame(i.current),i.current=null)}},[h,S,f]),j.useEffect(()=>()=>{a.current&&clearTimeout(a.current),i.current&&cancelAnimationFrame(i.current)},[]);const d=j.useCallback(()=>{if(o!==!1||h)return;const $=!s,D=$?"start":"stop";E(!0),p(D),y(!1),b(!1),l(0),m.current=Date.now(),g.current=s,$?yo(e):wo(e),a.current=setTimeout(()=>{h&&(b(!0),setTimeout(()=>{E(!1),p(null),y(!1),l(0),b(!1),m.current=null},500))},15e3)},[s,o,h]),x=bo(c||0,u),N=Ao(c||0),C=Math.round(c||0),R=h?f==="start":s,k=f==="start"?"#17e146":"#f85a5a",_=f==="start"?"clockwise":"counterclockwise";return n?r.jsxs(Eo,{className:Y({disabled:o!==!1}),children:[r.jsxs("h2",{children:["Auto",o!==!1?r.jsxs("div",{className:"battery-info",children:[r.jsx(U,{path:Ie,size:"1.2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs("div",{className:"battery-info",children:[r.jsxs("span",{className:"charge-percentage",children:[C,"%"]}),r.jsx(U,{path:x,size:"1.2rem",color:N})]})]}),o===!1&&r.jsxs("div",{className:"preclimate-button-wrapper",children:[h&&r.jsx("div",{className:Y("progress-ring",_,{complete:S}),style:{"--progress-color":k,"--progress-angle":`${w}deg`,"--progress-gradient":f==="stop"?`conic-gradient(from -90deg, ${k} 0deg, ${k} ${w}deg, transparent ${w}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${k} 0deg, ${k} ${w}deg, transparent ${w}deg, transparent 360deg)`}}),r.jsxs("button",{className:Y("preclimate-button",{spinning:R&&!h,shaking:A}),onClick:d,disabled:o!==!1||h,children:[r.jsx(U,{path:Wt,size:"2rem",color:R?"#ff9800":"#ffffff"}),r.jsx("span",{children:R?"Stop":"Start"})]})]})]}):null},To=j.memo(So),Co=()=>{const e=G(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",[o,s]=T.useState("closed"),[u,c]=T.useState(!1),h=n&&t,E=t?V(`/api/states/${t}`,e):null;T.useEffect(()=>{if(!h||!E)return;let A=!0;const b=new AbortController;return W(E,{signal:b.signal}).then(S=>{A&&(s(S.data.state),c(!1))}).catch(S=>{A&&!b.signal.aborted&&c(H(S))}),()=>{A=!1,b.abort()}},[h,E,n,t]);const{error:f}=Ae({enabled:h&&!!t,logPrefix:"garage door",onReady:(A,b)=>{const S=y=>{y.state!==void 0&&s(y.state)};return b.current.set(t,S),A.readyState===WebSocket.OPEN&&(A.send(JSON.stringify({type:"subscribe_entity",entity_id:t})),L.debug("Subscribed to garage door state changes")),()=>{b.current.delete(t),A.readyState===WebSocket.OPEN&&A.send(JSON.stringify({type:"unsubscribe_entity",entity_id:t}))}},dependencies:[h,t]});return[o,u||f||!1]},jo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(V("/api/services/cover/toggle",n),{entity_id:t}).catch(s=>{L.error("Failed to toggle garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},No=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(V("/api/services/cover/open_cover",n),{entity_id:t}).catch(s=>{L.error("Failed to open garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},Lo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(V("/api/services/cover/close_cover",n),{entity_id:t}).catch(s=>{L.error("Failed to close garage door:",s)}).finally(()=>{clearTimeout(o),e(!1)})},Ro=v.div`
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
`,ft=v.div`
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
`,ve=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:Kt},open:{label:"Offen",icon:Ht},closed:{label:"Geschlossen",icon:Yt},opening:{label:"Öffnet",icon:Ut},closing:{label:"Schließt",icon:zt}};return n[e]||L.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:qt}},ko=({garageDoor:e,animate:n=!1})=>r.jsxs(ft,{className:Y({animate:n}),children:[r.jsx(U,{path:ve(e).icon,size:"2rem",color:"#ffffff"}),r.jsx("span",{children:ve(e).label})]}),_o=e=>Nt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return ve(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),Oo=()=>{const e=G(),n=e.ENABLE_GARAGE||!1,[t,o]=Co(),[s,u]=T.useState(void 0),[c,h]=T.useState(!1),[E,f]=T.useState(!1);T.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!s){const y=new Promise(w=>{u({resolve:w})});_o(y)}}else s&&(s.resolve(t),u(void 0))},[t]);const p=ce("g");T.useEffect(()=>{p&&o===!1&&jo(h,e)},[p,o,e]);const A=j.useCallback(S=>{if(o===!1)switch(f(!1),S){case"open":No(h,e);break;case"close":Lo(h,e);break}},[h,o,e]),b=j.useCallback(()=>{o===!1&&f(!0)},[o]);return n?r.jsxs(Ro,{className:Y({disabled:o!==!1}),children:[r.jsx("h2",{children:"Garage"}),r.jsx("div",{className:"status",onClick:b,children:o!==!1?r.jsxs(ft,{children:[r.jsx(U,{path:Ie,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsx(ko,{garageDoor:t,animate:c})}),r.jsx(le,{visible:E&&o===!1,onClick:()=>f(!1),children:r.jsxs("div",{className:"controls",children:[r.jsx("h2",{children:"Garagentor"}),r.jsx("div",{onClick:()=>A("open"),children:"Öffnen"}),r.jsx("div",{onClick:()=>A("close"),children:"Schließen"})]})})]}):null},Do=j.memo(Oo),vo=(e,n)=>e?V(`/api/states/${e}`,n):null,J={done:{label:"Fertig",animate:!1,icon:Xt},off:{label:"Aus",animate:!1,icon:Jt},standby:{label:"Standby",animate:!1,icon:Pe},running:{label:"Läuft …",animate:!0,icon:Pe}},Io={off:0,standby:2,running:16,done:256},$o=()=>{const e=G(),n=e.ENABLE_LAUNDRY||!1,t=e.LAUNDRY_MACHINES||[],o=Array.isArray(t)?t:[],[s,u]=T.useState({}),[c,h]=T.useState({}),{error:E}=Ae({enabled:n&&o.length>0,logPrefix:"laundry",onReady:(a,i)=>(o.forEach(g=>{if(g.entity_id){const m=d=>{d.state!==void 0&&u(x=>({...x,[g.entity_id]:d.state}))};i.current.set(g.entity_id,m),a.readyState===WebSocket.OPEN&&(a.send(JSON.stringify({type:"subscribe_entity",entity_id:g.entity_id})),L.debug(`Subscribed to ${g.entity_id} state changes`))}}),()=>{o.forEach(g=>{g.entity_id&&(i.current.delete(g.entity_id),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"unsubscribe_entity",entity_id:g.entity_id})))})}),dependencies:[o.map(a=>a.entity_id).join(",")]});T.useEffect(()=>{if(!n||o.length===0)return;const a=new Map;return o.forEach(i=>{if(!i.entity_id)return;const g=vo(i.entity_id,e);if(!g)return;const m=new AbortController;a.set(i.entity_id,m),W(g,{signal:m.signal}).then(d=>{u(x=>({...x,[i.entity_id]:d.data.state})),h(x=>({...x,[i.entity_id]:!1}))}).catch(d=>{m.signal.aborted||h(x=>({...x,[i.entity_id]:H(d)}))})}),()=>{a.forEach(i=>i.abort())}},[n,o.map(a=>a.entity_id).join(","),e]);const f=o.map(a=>({state:s[a.entity_id]||"off",error:c[a.entity_id]||E||!1,name:a.name})),[p,A]=T.useState(J.off),[b,S]=T.useState(!1),y=f.map(a=>a.state),w=f.map(a=>a.error);T.useEffect(()=>{const a=w.some(i=>i!==!1);S(a&&w.find(i=>i!==!1)||!1)},[w]),T.useEffect(()=>{const a=y.reduce((i,g)=>i+(Io[g]||0),0);a===0?A(J.off):a<16?A(J.standby):a<256?A(J.running):a%256===0?A(J.done):a%256%16===0?A(J.running):a%256%2===0?A(J.done):A(J.running)},[y]);const l=f.map(a=>({label:a.name,state:a.state}));return[p,l,b]},Mo=v.div`
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
`,Wo=()=>{const n=G().ENABLE_LAUNDRY||!1,[t,o,s]=$o(),[u,c]=T.useState(!1),h=j.useCallback(()=>{s===!1&&c(!0)},[s]),E=j.useCallback(()=>c(!1),[]);return n?r.jsxs(Mo,{className:Y({disabled:s!==!1}),children:[r.jsx("h2",{children:"Wäsche"}),r.jsx("div",{className:"status",onClick:h,children:s!==!1?r.jsxs(r.Fragment,{children:[r.jsx(U,{path:Ie,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:Y({animate:t.animate}),children:r.jsx(U,{path:t.icon,size:"2rem",color:"#ffffff"})}),r.jsx("span",{children:t.label})]})}),r.jsx(le,{visible:u&&s===!1,onClick:E,children:r.jsxs("div",{className:"states",children:[r.jsx("h2",{children:"Wäsche"}),o.map((f,p)=>r.jsxs("div",{children:[r.jsx("div",{className:"subtitle",children:f.label}),r.jsx("div",{className:Y({animate:J[f.state].animate}),children:r.jsx(U,{path:J[f.state].icon,size:2})}),r.jsx("div",{children:J[f.state].label})]},p))]})})]}):null},Po=j.memo(Wo),Bo=v.div`
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
`,Vo=()=>r.jsxs(Bo,{children:[r.jsxs("div",{className:"top-content",children:[r.jsx(oo,{}),r.jsx(mo,{}),r.jsx(To,{})]}),r.jsxs("div",{className:"two-cols",children:[r.jsx(Do,{}),r.jsx(Po,{})]})]}),Fo=j.memo(Vo),Qe=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],Go=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],we={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},zo={landscape:"L",portrait:"P",wide:"W"},Uo=v.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Yo=v.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Ho=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,ee=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,te=v.label`
  font-size: 0.9rem;
  color: #cccccc;
`,Ze=v.select`
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
`,et=v.input`
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
`,Ko=v.button`
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
`,tt=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,qo=v.button`
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
`,Jo=v.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Xo=v.div`
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
`,Qo=v.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Zo=v.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,er=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,he=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pe=v.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ge=v.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,tr=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,nr=v.h3`
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
`;const Ne=v.button`
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
`,nt=()=>{const[e,n]=j.useState(1920),[t,o]=j.useState(1080),[s,u]=j.useState("Full HD"),[c,h]=j.useState(""),[E,f]=j.useState(""),[p,A]=j.useState([{orientation:"landscape"}]),[b,S]=j.useState(null),y=j.useMemo(()=>ut(p,e,t),[p,e,t]),w=d=>{const x=Qe.find(N=>N.name===d);x&&x.width&&x.height?(n(x.width),o(x.height),u(d),h(""),f("")):d==="Custom"&&u("Custom")},l=()=>{const d=parseInt(c),x=parseInt(E);d>0&&x>0&&(n(d),o(x))},a=d=>{A(d.videos),S(d.name)},i=d=>{const x=[];for(let N=0;N<d;N++)x.push(p[N]||{orientation:"landscape"});A(x),S(null)},g=(d,x)=>{const N=[...p];N[d]={orientation:x},A(N),S(null)},m=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return r.jsxs(Uo,{children:[r.jsx(Yo,{children:"Video Tiling Algorithm Demo"}),r.jsxs(Ho,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:"Screen Size Preset"}),r.jsx(Ze,{value:s,onChange:d=>w(d.target.value),children:Qe.map(d=>r.jsx("option",{value:d.name,children:d.name},d.name))})]}),s==="Custom"&&r.jsxs(r.Fragment,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:"Custom Width"}),r.jsx(et,{type:"number",value:c,onChange:d=>h(d.target.value),placeholder:"Width",min:"100"})]}),r.jsxs(ee,{children:[r.jsx(te,{children:"Custom Height"}),r.jsx(et,{type:"number",value:E,onChange:d=>f(d.target.value),placeholder:"Height",min:"100"})]}),r.jsxs(ee,{children:[r.jsx(te,{children:" "}),r.jsx(Ko,{onClick:l,children:"Apply Custom Size"})]})]}),r.jsxs(ee,{children:[r.jsx(te,{children:"Number of Videos"}),r.jsxs(Ze,{value:p.length,onChange:d=>i(parseInt(d.target.value)),children:[r.jsx("option",{value:"1",children:"1 Video"}),r.jsx("option",{value:"2",children:"2 Videos"}),r.jsx("option",{value:"3",children:"3 Videos"}),r.jsx("option",{value:"4",children:"4 Videos"})]})]}),p.map((d,x)=>r.jsxs(ee,{children:[r.jsxs(te,{children:["Video ",x+1," Orientation"]}),r.jsxs(tt,{children:[r.jsx(Ne,{active:d.orientation==="landscape",orientation:"landscape",onClick:()=>g(x,"landscape"),children:"Landscape"}),r.jsx(Ne,{active:d.orientation==="portrait",orientation:"portrait",onClick:()=>g(x,"portrait"),children:"Portrait"}),r.jsx(Ne,{active:d.orientation==="wide",orientation:"wide",onClick:()=>g(x,"wide"),children:"Wide"})]})]},x))]}),r.jsxs(tr,{children:[r.jsx(nr,{children:"Test Scenarios"}),r.jsx(tt,{children:Go.map(d=>r.jsx(qo,{active:b===d.name,onClick:()=>a(d),children:d.name},d.name))})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:r.jsx(Jo,{style:{width:`${e*m}px`,height:`${t*m}px`},children:y.videos.map((d,x)=>r.jsxs(Xo,{orientation:d.orientation,style:{left:`${d.x*m}px`,top:`${d.y*m}px`,width:`${d.width*m}px`,height:`${d.height*m}px`},children:[r.jsxs(Qo,{children:[zo[d.orientation]," ",x+1]}),r.jsxs(Zo,{children:[Math.round(d.width)," × ",Math.round(d.height)]})]},x))})}),r.jsxs(er,{children:[r.jsxs(he,{children:[r.jsx(pe,{children:"Canvas Size"}),r.jsxs(ge,{children:[e," × ",t]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Total Area Used"}),r.jsxs(ge,{children:[Math.round(y.totalArea).toLocaleString()," px²"]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Efficiency"}),r.jsxs(ge,{children:[y.efficiency.toFixed(2),"%"]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Display Scale"}),r.jsxs(ge,{children:[(m*100).toFixed(1),"%"]})]})]})]})},or=()=>{function e(t,o){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(o))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[u,c]=o.split(":").map(Number),h=new Date;let E=new Date(h.getFullYear(),h.getMonth(),h.getDate());E.setHours(u,c,0,0),E<=h&&E.setDate(E.getDate()+1);const f=E.getTime()-h.getTime();return L.log("Reloading page at",o,"in",Math.floor(f/1e3/60),"minutes"),setTimeout(t,f)}const n=()=>{L.log("Timeout reached! "),window.location.reload(!0)};T.useLayoutEffect(()=>{const t=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{t.forEach(o=>{o&&clearTimeout(o)})}},[])},rr=v.div`
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
`;class be extends T.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",s=n?.stack||"",u=t?.componentStack||"";L.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:s,componentStack:u})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?r.jsxs(rr,{children:[r.jsx("h2",{children:"Something went wrong"}),r.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,r.jsxs("div",{children:[r.jsx("button",{onClick:this.handleReset,children:"Try Again"}),r.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Le="hass-family-calendar-config-banner-dismissed",ir=v.div`
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
`,sr=()=>{const e=st(),n=at(),t=ct(),o=it(),[s,u]=j.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(Le)==="true"}catch{}return!1}),[c,h]=j.useState(!1);if(j.useEffect(()=>{if(e&&s){u(!1);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(Le)}catch{}}},[e,s]),o||s||!e&&!n)return null;const E=async()=>{h(!0);try{await t()}catch{}finally{h(!1)}},f=()=>{u(!0);try{typeof window<"u"&&window.localStorage&&localStorage.setItem(Le,"true")}catch{}};let p="warning",A="";return e&&n?(p="warning",A=`Using cached configuration. Failed to load from server: ${e}`):e&&!n?(p="error",A=`Failed to load configuration: ${e}`):n&&(p="warning",A="Using cached configuration. Some features may be outdated."),r.jsxs(ir,{severity:p,children:[r.jsx("div",{className:"message",children:A}),r.jsxs("div",{className:"actions",children:[e&&r.jsx("button",{onClick:E,disabled:c,children:c?"Retrying...":"Retry"}),r.jsx("button",{className:"dismiss",onClick:f,title:"Dismiss",children:"×"})]})]})},ar=Lt`
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
`,cr=v.div`
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
`;function lr(){or();const e=st(),n=at(),t=it(),[o]=T.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return window.localStorage.getItem("hass-family-calendar-config-banner-dismissed")==="true"}catch{}return!1}),s=!t&&!o&&(e||n);return r.jsxs(cr,{$hasBanner:s,children:[r.jsx(ar,{}),r.jsx(sr,{}),r.jsxs("div",{className:"main",children:[r.jsx(be,{children:r.jsx(Qn,{})}),r.jsx(be,{children:r.jsx(Fo,{})})]}),r.jsx(kt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function dr(){return r.jsx(be,{children:r.jsxs(Rt,{children:[r.jsx(Se,{path:"/demo",element:r.jsx(nt,{})}),r.jsx(Se,{path:"/tiling-demo",element:r.jsx(nt,{})}),r.jsx(Se,{path:"*",element:r.jsx(lr,{})})]})})}const ur=_t.createRoot(document.getElementById("root"));ur.render(r.jsx(T.StrictMode,{children:r.jsx(be,{children:r.jsx(an,{children:r.jsx(Tn,{children:r.jsx(Ot,{children:r.jsx(dr,{})})})})})}));
