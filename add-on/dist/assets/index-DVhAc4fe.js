import{b as O,R as A,j as r,I as z,r as C,l as at,P as yt,W as wt,d as bt,e as At,f as St,h as Tt,i as Ct,k as Rt,m as jt,n as Nt,o as Lt,T as kt,p as _t,s as Ot,y as Dt,q as vt,t as It,u as Ce,L as $t,v as Mt,B as Wt}from"./react-vendor-DZAsZpFh.js";import{D as F}from"./date-vendor-BDx6lZXm.js";import{f as Y}from"./vendor-D_ND1KRz.js";import{m as Bt,a as ct,b as Pt,c as Vt,d as Ut,e as Ft,f as Ie,g as Gt,h as zt,i as Yt,j as Ht,k as Kt,l as qt,n as Jt,o as Xt,p as Qt,q as Zt,r as en,s as tn,t as Pe,u as nn,v as on}from"./ui-vendor-CHQCwb4U.js";import{a as B,q as rn}from"./utils-vendor-OgzBtw9T.js";import{t as sn}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const an=O.div`
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
`,he=({visible:e,children:n,onClick:t,onClose:o,fullsize:i=!1})=>{const l=o||t,a=m=>{m.stopPropagation(),m.preventDefault(),l()};return A.useEffect(()=>{if(e){const m=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${m}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,m)}}},[e]),e?r.jsxs(an,{onClick:t,children:[r.jsx("div",{className:"close",onClick:a,children:r.jsx(z,{path:Bt,size:2})}),r.jsx("div",{className:Y("content",{fullsize:i}),onClick:m=>m.stopPropagation(),children:n})]}):null};let lt=!0;const cn=e=>{lt=!!e};let ye=!1,K=[],le=0;const de=100,Ve=50,ke=()=>{if(K.length===0||ye)return;const e=K.shift(),n=Date.now();n-le>=de?ce(e.level,e.message,e.metadata):(K.unshift(e),setTimeout(ke,de-(n-le)))},ce=(e,n,t=null)=>{if(!lt)return;if(ye){K.length<Ve&&K.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const o=Date.now();if(o-le<de){K.length<Ve&&(K.push({level:e,message:n,metadata:t,timestamp:o}),K.length===1&&setTimeout(ke,de-(o-le)));return}setTimeout(async()=>{ye=!0,le=Date.now();try{const l=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,a={level:e,message:n,...t&&{metadata:t}};await B.create({timeout:2e3}).post(l,a)}catch{K.length>10&&(K=[])}finally{ye=!1,K.length>0&&setTimeout(ke,de)}},0)},pe=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},ge=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},k={log:(...e)=>{const n=pe(e),t=ge(e);n&&ce("INFO",n,t)},error:(...e)=>{console.error(...e);const n=pe(e),t=ge(e);n&&ce("ERROR",n,t)},warn:(...e)=>{const n=pe(e),t=ge(e);n&&ce("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=pe(e),t=ge(e);n&&ce("INFO",n,t)}},ln=3e4,dn=1e4,Ue=6e4,un=1e3,fn=5e3,hn=2e3,Fe=45e3,pn=1e4,gn=15e3,$e=3e3,mn={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},xn=!1,_e="hass-family-calendar-config",En=()=>{const e=(n,t=void 0)=>{const o=mn[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},Re=()=>{try{if(typeof window>"u"||!window.localStorage)return null;const e=localStorage.getItem(_e);if(e){const n=JSON.parse(e);return k.debug("Loaded cached config from localStorage"),n}}catch(e){k.warn("Failed to load cached config from localStorage:",e);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(_e)}catch{}}return null},yn=e=>{try{return typeof window>"u"||!window.localStorage?!1:(localStorage.setItem(_e,JSON.stringify(e)),k.debug("Saved config to localStorage"),!0)}catch(n){return k.warn("Failed to save config to localStorage:",n),!1}},ae=C.createContext(null),wn=({children:e})=>{const[n,t]=C.useState(()=>Re()||En()),[o,i]=C.useState(!0),[l,a]=C.useState(null),[m,w]=C.useState(()=>!!Re()),u=C.useRef(!0),p=C.useRef(n),R=C.useRef(!1),S=C.useRef(!1);C.useEffect(()=>{p.current=n},[n]);const b=C.useCallback(async(s=!1)=>{if(R.current&&!s||!s&&S.current)return!1;R.current=!0,s||(S.current=!0),k.debug("Starting config load",{isReload:s,hasInitialized:S.current});const c=typeof window<"u"&&window.location?`${window.location.pathname.replace(/\/$/,"")}/api/config`:"/api/config";try{const g=await B.get(c,{timeout:fn});if(g.data&&typeof g.data=="object")if(typeof g.data=="object"&&!Array.isArray(g.data)){k.debug("Config loaded from API:",{hasCALENDARS:"CALENDARS"in g.data,CALENDARS:g.data.CALENDARS,CALENDARSCount:Array.isArray(g.data.CALENDARS)?g.data.CALENDARS.length:"not array",allKeys:Object.keys(g.data)});const d=p.current,y=JSON.stringify(g.data)!==JSON.stringify(d);k.debug("Updating config with new data from API:",{configChanged:y,CALENDARSCount:Array.isArray(g.data.CALENDARS)?g.data.CALENDARS.length:"not array",currentCALENDARSCount:Array.isArray(d?.CALENDARS)?d.CALENDARS.length:"not array",responseKeys:Object.keys(g.data).length,currentConfigKeys:Object.keys(d||{}).length}),y?(t(g.data),w(!1),a(null),xn||yn(g.data)):(w(!1),a(null));const T=Object.keys(g.data).filter(j=>j.startsWith("ENABLE_")&&g.data[j]).map(j=>j.replace("ENABLE_",""));return k.info(`Configuration ${s?"reloaded":"loaded"} from API endpoint. Enabled features: ${T.length>0?T.join(", "):"none"}`,{enabledFeatures:T,totalConfigKeys:Object.keys(g.data).length}),s||i(!1),R.current=!1,!0}else throw new Error("Invalid config structure: expected object, got array");else throw new Error("Invalid config response: missing or invalid data")}catch(g){const d=g.response?.data?.detail||g.message||"Unknown error";if(s)return k.warn("Failed to reload config from API, keeping current config:",d),!1;{const y=Re();return y?(k.warn("Failed to load config from API, using cached config:",d),u.current&&(t(y),w(!0),a(d),i(!1)),!1):(u.current&&(a(d),i(!1)),!1)}}finally{R.current=!1}},[]),E=C.useRef(null),x=C.useCallback(async()=>{if(E.current)return E.current;const s=b(!0).finally(()=>{E.current=null});return E.current=s,s},[b]),f=C.useRef(!1);C.useEffect(()=>{if(!f.current)return f.current=!0,b(!1),()=>{u.current=!1}},[]),C.useEffect(()=>{const s=n.HASS_ACCESS_TOKEN||"";s&&typeof s=="string"&&s.trim()!==""&&s!=="undefined"&&s!=="null"?B.defaults.headers.common.Authorization=`Bearer ${s}`:delete B.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),C.useEffect(()=>{const s=n.ENABLE_LOGGING===!0;cn(s)},[n.ENABLE_LOGGING]);const h=C.useMemo(()=>({config:n,loading:o,configError:l,isUsingCachedConfig:m,reloadConfig:x}),[n,o,l,m,x]);return r.jsx(ae.Provider,{value:h,children:e})},U=()=>{const e=C.useContext(ae);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config},dt=()=>{const e=C.useContext(ae);if(!e)throw new Error("useConfigLoading must be used within ConfigProvider");return e.loading},ut=()=>{const e=C.useContext(ae);if(!e)throw new Error("useConfigError must be used within ConfigProvider");return e.configError},ft=()=>{const e=C.useContext(ae);if(!e)throw new Error("useIsUsingCachedConfig must be used within ConfigProvider");return e.isUsingCachedConfig},ht=()=>{const e=C.useContext(ae);if(!e)throw new Error("useReloadConfig must be used within ConfigProvider");return e.reloadConfig};let ie=0,we=0,te=0;const re=[],pt=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},bn=(e,n="")=>{const t=pt(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;te++,ie++,re.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),re.length>10&&re.shift();const i=[];return n&&i.push(`[${n}]`),i.push("🔴 Axios API Error:"),i.push(`Message: ${t.message}`),t.url&&i.push(`URL: ${t.url}`),t.status&&i.push(`HTTP Status: ${t.status}`),t.code&&i.push(`Error Code: ${t.code}`),t.isNetworkError&&(i.push("Type: Network Error (no response received)"),t.readyState!==void 0&&i.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&i.push("Type: Timeout Error"),t.config&&(i.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),i.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&i.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&i.push("Response Data:",t.responseData),i.push(`Request Stats: ${we} success, ${te} errors (${ie} total)`),te>3&&re.length>0&&i.push("Recent errors pattern:",re.slice(-5)),k.error(...i),t},An=e=>{we++,ie++,(ie%10===0||te>0)&&k.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:ie,stats:`${we} success, ${te} errors`}),te>0&&ie%10===0&&we>te&&(te=0,re.length=0)},Z=e=>{const n=pt(e);return n.isNetworkError?"Netzwerkfehler: Server nicht erreichbar":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};let Oe=null;const Ge=e=>{Oe=e},Sn=!1;B.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,k.debug("Axios Defaults State:",{baseURL:B.defaults.baseURL,timeout:B.defaults.timeout,hasAuthHeader:!!B.defaults.headers?.common?.Authorization,authHeaderLength:B.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(B.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||k.error("Axios Request Setup Error:",e),Promise.reject(e)));B.interceptors.response.use(e=>(e.config&&An(e.config),e),e=>{const n=e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"),t=e.config?.metadata?.skipConnectionCheck===!0;if(!n){const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(bn(e,o),e.config?.metadata){const i=Date.now()-e.config.metadata.startTime;k.error("Request Duration:",`${i}ms`,"Request ID:",e.config.metadata.requestId)}!t&&Oe&&!e.response&&(e.code==="ERR_NETWORK"||e.code==="ECONNABORTED"||e.code==="ERR_CANCELED")&&Oe()}return Promise.reject(e)});const H=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;if(typeof window<"u"&&window.location){if(window.location.pathname.includes("/api/hassio_ingress/")){const i=window.location.pathname.match(/^(\/api\/hassio_ingress\/[^\/]+\/)/);if(i){const l=i[1],a=t.startsWith("/")?t.slice(1):t;return`${l}${a}`}}return t}return t},Tn=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},Cn=(e={})=>{const n=Tn(e);if(!n)return"";const t=n.startsWith("https://")?"wss://":"ws://",o=n.replace(/^https?:\/\//,"");return`${t}${o}/api/websocket`},Rn=3e3,jn=3e4,Nn=5e3,Ln=()=>{const[e,n]=C.useState(!0),t=C.useRef(null),o=C.useRef(null),i=C.useRef(!1),l=C.useRef(Date.now()),a=C.useRef(!0);C.useEffect(()=>{a.current=e},[e]);const m=C.useCallback(async()=>{if(!i.current){i.current=!0,l.current=Date.now();try{const p=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`;await B.get(p,{timeout:Nn,metadata:{skipConnectionCheck:!0}}),a.current||k.info("Connection restored - backend is reachable"),n(!0),i.current=!1,o.current&&(clearInterval(o.current),o.current=null)}catch(u){!u.response&&(u.code==="ERR_NETWORK"||u.code==="ECONNABORTED")?(a.current&&k.warn("Connection lost - backend is not reachable"),n(!1),i.current=!1,o.current||(o.current=setInterval(()=>{m()},jn))):(a.current||k.info("Connection restored - backend responded (with error)"),n(!0),i.current=!1,o.current&&(clearInterval(o.current),o.current=null))}}},[]),w=C.useCallback(()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{m()},Rn)},[m]);return C.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&w()};return document.addEventListener("visibilitychange",u),()=>{document.removeEventListener("visibilitychange",u)}},[w]),C.useEffect(()=>{const u=setTimeout(()=>{m()},1e3);return()=>{clearTimeout(u)}},[m]),C.useEffect(()=>()=>{t.current&&clearTimeout(t.current),o.current&&clearInterval(o.current)},[]),{isConnected:e,triggerCheck:w}},gt=C.createContext(null),kn=({children:e})=>{const n=Ln(),t=ht(),o=C.useRef(!1),i=C.useRef(null),l=C.useRef(!1);return C.useEffect(()=>(Ge(n.triggerCheck),()=>{Ge(null)}),[n.triggerCheck]),C.useEffect(()=>{const a=n.isConnected;if(!a){o.current=!0,i.current&&(clearTimeout(i.current),i.current=null);return}return o.current&&a&&!l.current&&(i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{l.current||(l.current=!0,t().then(()=>{o.current=!1}).catch(m=>{k.warn("Failed to reload config after connection restore:",m)}).finally(()=>{l.current=!1,i.current=null}))},hn)),()=>{i.current&&(clearTimeout(i.current),i.current=null)}},[n.isConnected,t]),r.jsx(gt.Provider,{value:n,children:e})},Me=()=>{const e=C.useContext(gt);if(!e)throw new Error("useConnectionStateContext must be used within ConnectionStateProvider");return e},ze=3,_n=e=>e.code==="ECONNABORTED"||e.code==="ERR_NETWORK"||e.message?.includes("timeout"),se=({entityId:e,enabled:n=!0,config:t,initialState:o=null,extractState:i=l=>l.data.state})=>{const[l,a]=A.useState(o),[m,w]=A.useState(!1),{isConnected:u}=Me(),p=A.useRef(!1),[R,S]=A.useState(0);A.useEffect(()=>{u?p.current&&(p.current=!1,S(x=>x+1)):p.current=!0},[u]);const b=n&&!!e,E=e?H(`/api/states/${e}`,t):null;return A.useEffect(()=>{if(!b||!E)return;let x=!0;const f=new AbortController;return(async()=>{for(let s=0;s<ze;s++)try{const c=await B(E,{signal:f.signal});x&&(a(i(c)),w(!1));return}catch(c){if(f.signal.aborted)return;if(_n(c)&&s<ze-1){const g=1e3*Math.pow(2,s);await new Promise(d=>setTimeout(d,g));continue}x&&w(Z(c));return}})(),()=>{x=!1,f.abort()}},[b,E,e,R]),[l,m,a]},On=()=>{const e=U(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",o=n&&t,[i,l]=se({entityId:t,enabled:o,config:e,initialState:null,extractState:a=>{const m=a.data.attributes.store;return m!==void 0?m:[]}});return[i,l]},Dn=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=H(`/api/states/${t}`,n);B.post(o,{state:new Date,attributes:{store:e}}).catch(i=>{k.error("Failed to store everyday calendar data:",i)})},Ye=O.div` 

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
`,vn=({on:e,month:n,day:t})=>{const[o,i]=e,l=o.indexOf(`${n}-${t}`),a=l>-1,m=()=>{i(a?o.toSpliced(l,1):[...o,`${n}-${t}`])};return r.jsx("div",{className:Y("dot",{on:a}),onClick:()=>m()})},In=()=>{const e=U();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let u=1;u<13;u++){const p=new Date(t,u,0).getDate();for(let R=1;R<=p;R++)o.push({month:u,day:R})}const i=Array.from({length:31},(u,p)=>p+1),l=Array.from({length:12},(u,p)=>p+1),a=A.useState(void 0),[m,w]=On();return A.useEffect(()=>{m!==null&&a[1](m)},[m]),A.useEffect(()=>{a[0]!==void 0&&Dn(a[0],e)},[a[0],e]),a[0]!==void 0?r.jsxs(Ye,{children:[r.jsx("h2",{children:"Jeden Tag ein bißchen"}),w!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:w instanceof Error?w.message:String(w)})]}),r.jsxs("div",{className:"calendar",children:[i.map((u,p)=>r.jsx("div",{style:{gridArea:`${u+1} / 1 / ${u+1} / 1`},children:u},p)),l.map((u,p)=>r.jsx("div",{style:{gridArea:`1 / ${u+1} / 1 / ${u+1}`},children:u},p)),o.map((u,p)=>r.jsx("div",{style:{gridArea:`${u.day+1} / ${u.month+1} / ${u.day+1} / ${u.month+1}`},children:r.jsx(vn,{on:a,month:u.month,day:u.day})},p))]})]}):r.jsx(Ye,{className:"loading",children:w!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:w instanceof Error?w.message:String(w)})]}):r.jsx(at,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},$n=O.div`
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
  }`,Mn=()=>{const[e,n]=A.useState(F.now()),[t,o]=A.useState(!1),i=C.useCallback(()=>o(!0),[]),l=C.useCallback(()=>o(!1),[]);return A.useEffect(()=>{const a=setInterval(()=>n(F.now()),1e3);return()=>clearInterval(a)},[]),r.jsxs(r.Fragment,{children:[r.jsxs($n,{onClick:i,children:[e.toFormat("HH"),r.jsx("span",{children:":"}),e.toFormat("mm")]}),r.jsx(he,{visible:t,onClick:l,fullsize:!0,children:r.jsx(In,{})})]})},Wn=C.memo(Mn);function mt({onReady:e,enabled:n=!0,checkBackendConnection:t=!0,reconnectStrategy:o="simple",maxReconnectAttempts:i=5,reconnectDelay:l=2e3,logPrefix:a="WebSocket",dependencies:m=[]}){const w=U(),u=Me(),p=t?u?.isConnected:!0,[R,S]=A.useState(!1),[b,E]=A.useState(!1),x=A.useRef(null),f=A.useRef(null),h=A.useRef(!0),s=A.useRef(null),c=A.useRef(null),g=A.useRef(null),d=A.useRef(0),y=A.useRef(!1),T=A.useRef(!1),j=A.useRef(new Map),L=A.useRef(null),N=A.useRef(null),_=A.useRef(null),P=A.useRef(p);P.current=p;const $=A.useCallback(()=>{const v=x.current;if(f.current,s.current&&(clearTimeout(s.current),s.current=null),c.current&&(clearTimeout(c.current),c.current=null),g.current&&(clearTimeout(g.current),g.current=null),L.current&&(clearInterval(L.current),L.current=null),N.current&&(clearTimeout(N.current),N.current=null),v&&v.readyState===WebSocket.OPEN&&(j.current.forEach((W,M)=>{try{v.send(JSON.stringify({type:"unsubscribe_entity",entity_id:M}))}catch{}}),j.current.clear()),v){try{v.close()}catch{}x.current=null}f.current=null},[a]),V=A.useCallback(async()=>{if(!(!n||!h.current)&&!(t&&!P.current)&&!y.current){x.current&&$(),y.current=!0,E(!0);try{let v;if(!Sn){if(v=Cn(w),!v){const M=typeof window<"u"&&window.location.protocol==="https:"?"wss:":"ws:",I=typeof window<"u"&&window.location.host?window.location.host:"";v=`${M}//${I}/api/websocket`}}if(!v){k.error(`Failed to build WebSocket URL for ${a} - cannot connect`),h.current&&S("WebSocket URL konnte nicht erstellt werden."),y.current=!1,E(!1);return}k.debug(`${a} connecting to: ${v}`);const W=new WebSocket(v);x.current=W,W.onopen=()=>{if(!h.current){W.close();return}if(k.debug(`${a} connection opened`),d.current=0,T.current=!1,g.current&&(clearTimeout(g.current),g.current=null),h.current&&S(!1),y.current=!1,E(!1),e)try{const M=e(W,j);f.current=M}catch(M){k.error(`Failed to subscribe for ${a}:`,M),h.current&&S(M instanceof Error?M.message:String(M))}L.current&&clearInterval(L.current),L.current=setInterval(()=>{if(W.readyState===WebSocket.OPEN){try{W.send(JSON.stringify({type:"ping"}))}catch{return}N.current=setTimeout(()=>{k.warn(`${a} heartbeat timeout — closing stale connection`);try{W.close(4e3,"heartbeat timeout")}catch{}},dn)}},ln)},W.onmessage=M=>{try{const I=JSON.parse(M.data);if(I.type==="state_update"){const G=I.entity_id,ee=j.current.get(G);ee&&ee(I)}else if(I.type==="state_response"){const G=I.entity_id,ee=j.current.get(G);ee&&ee(I)}else I.type==="pong"?N.current&&(clearTimeout(N.current),N.current=null):I.type==="error"&&(k.error(`${a} received error:`,I.message),h.current&&S(I.message))}catch(I){k.error(`Error handling message for ${a}:`,I)}},W.onclose=M=>{if(h.current&&!y.current){k.debug(`${a} disconnected (code: ${M.code}, wasClean: ${M.wasClean})`),x.current=null,j.current.clear(),f.current=null,s.current&&(clearTimeout(s.current),s.current=null);const I=!M.wasClean&&(M.code===1006||d.current>0);if(I&&d.current>=5&&!T.current){k.warn(`Backend appears to be down for ${a} (${d.current} failed attempts), switching to periodic retry every ${Ue/1e3}s`),T.current=!0,h.current&&S("Backend nicht erreichbar. Wiederherstellungsversuche alle 60 Sekunden.");const G=()=>{g.current=setTimeout(()=>{h.current&&!y.current&&P.current&&T.current&&(k.debug(`Periodic retry attempt for ${a} (backend might be back up)`),d.current=0,_.current(),G())},Ue)};G();return}if(T.current)return;if(o==="exponential"&&d.current>=i){k.warn(`Max reconnection attempts (${i}) reached for ${a}, stopping reconnection`),h.current&&S("Verbindung verloren. Bitte Seite neu laden.");return}if(P.current)if(o==="exponential"){const G=I?l*10:l,ee=Math.min(G*Math.pow(2,d.current),6e4);d.current++,s.current=setTimeout(()=>{h.current&&!y.current&&P.current&&(k.debug(`Attempting to reconnect ${a} (attempt ${d.current}/${i})`),_.current())},ee)}else{const G=I?l*10:l;s.current=setTimeout(()=>{h.current&&!y.current&&P.current&&(k.debug(`Attempting to reconnect ${a}`),_.current())},G)}else k.debug(`Skipping reconnection for ${a} - waiting for backend connection`)}},W.onerror=M=>{k.error(`WebSocket error for ${a}:`,M),y.current=!1,E(!1),h.current&&S("WebSocket-Verbindungsfehler")}}catch(v){if(y.current=!1,E(!1),h.current&&(k.error(`Failed to setup ${a} connection:`,v),S(v instanceof Error?v.message:String(v)),P.current))if(o==="exponential"&&d.current<i){const W=Math.min(l*Math.pow(2,d.current),3e4);d.current++,s.current=setTimeout(()=>{h.current&&!y.current&&P.current&&(k.debug(`Attempting to reconnect ${a} after error (attempt ${d.current}/${i})`),_.current())},W)}else o==="simple"?s.current=setTimeout(()=>{h.current&&!y.current&&P.current&&_.current()},l):(k.warn(`Max reconnection attempts (${i}) reached for ${a}, stopping reconnection`),h.current&&S("Verbindung fehlgeschlagen. Bitte Seite neu laden."))}}},[n,t,w,o,i,l,a,e,$]);return _.current=V,A.useEffect(()=>{n&&p&&!x.current&&!y.current&&V()},[n,p,V,...m]),A.useEffect(()=>{n&&p&&!x.current&&!y.current&&(c.current&&(clearTimeout(c.current),c.current=null),c.current=setTimeout(()=>{h.current&&P.current&&!x.current&&!y.current&&(T.current=!1,d.current=0,g.current&&(clearTimeout(g.current),g.current=null),V())},un))},[n,p,V,a]),A.useEffect(()=>()=>{h.current=!1,$()},[$]),{connection:x.current,error:R,isConnecting:b}}const ue=({entityId:e,enabled:n,onStateUpdate:t,logPrefix:o,wsOptions:i={}})=>{const{error:l}=mt({enabled:n&&!!e,logPrefix:o,...i,onReady:(a,m)=>{const w=u=>{u.state!==void 0&&t(u.state)};return m.current.set(e,w),a.readyState===WebSocket.OPEN&&(a.send(JSON.stringify({type:"subscribe_entity",entity_id:e})),k.debug(`Subscribed to ${o} state changes`)),()=>{m.current.delete(e),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"unsubscribe_entity",entity_id:e}))}},dependencies:[n,e]});return{error:l}},Bn=()=>{const e=U(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"",o=n&&t,[i,l,a]=se({entityId:t,enabled:o,config:e,initialState:"off"}),{error:m}=ue({entityId:t,enabled:o,onStateUpdate:a,logPrefix:"doorbell"});return[i,l||m||!1]},Pn=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&B.post(H("/api/services/button/press",e),{entity_id:n}).catch(t=>{k.error("Failed to unlatch front door:",t)})},Vn=async(e,n,t)=>{const o=H(`/api/states/${e}`,n),l=(await B(o,{timeout:5e3,signal:t.signal})).data?.attributes?.access_token||null;return{entityId:e,accessToken:l}},Un=e=>new Promise(n=>setTimeout(n,e)),He=async(e,n)=>{if(!e||e.length===0)return{tokens:{},error:null};const t=new AbortController,o=3;try{const i=e.map(async w=>{let u=null;for(let p=0;p<o;p++)try{return await Vn(w,n,t)}catch(R){if(u=R,(R.code==="ECONNABORTED"||R.code==="ERR_NETWORK"||R.message?.includes("timeout"))&&p<o-1){const b=1e3*Math.pow(2,p);k.debug(`Token fetch failed for ${w} (attempt ${p+1}), retrying in ${b}ms...`),await Un(b);continue}return k.error(`Failed to fetch access token for ${w} (attempt ${p+1}/${o}):`,R),{entityId:w,accessToken:null}}return k.error(`Failed to fetch access token for ${w} after ${o} attempts:`,u),{entityId:w,accessToken:null}}),l=await Promise.all(i),a={};let m=!1;return l.forEach(({entityId:w,accessToken:u})=>{u?a[w]=u:m=!0}),Object.keys(a).length===0&&m?{tokens:{},error:"Timeout: Kamera-Token konnten nicht geladen werden. Bitte erneut versuchen."}:{tokens:a,error:null}}catch(i){return t.signal.aborted?{tokens:{},error:null}:(k.error("Failed to fetch camera access tokens:",i),{tokens:{},error:Z(i)})}},Fn=(e,n=null,t={})=>{if(!e)return null;let o;const i=t.HASS_HOST||"";if(i&&i!=="undefined"&&i!=="null")o=i.replace(/\/$/,"");else if(typeof window<"u"&&window.location)o=window.location.origin;else return null;const l=`${o}/api/camera_proxy_stream/${e}`;if(n){const a=l.includes("?")?"&":"?";return`${l}${a}token=${encodeURIComponent(n)}`}return l},D={portrait:360/480,landscape:1920/1072,wide:770/216};function Gn(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function xt(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,i=Gn(e);return o===1?zn(e[0],n,t):o===2?Yn(i,e,n,t):o===3?Hn(i,e,n,t):o===4?Kn(i,e,n,t):{videos:[],totalArea:0,efficiency:0}}function zn(e,n,t){const o=D[e.orientation];let i,l;const a=n/t;return o>a?(i=n,l=n/o):(l=t,i=t*o),{videos:[{x:(n-i)/2,y:(t-l)/2,width:i,height:l,orientation:e.orientation}],totalArea:i*l,efficiency:i*l/(n*t)*100}}function Yn(e,n,t,o){if(e.portrait>0)return We(e,n,t,o);const i=[];e.landscape>0&&i.push("landscape"),e.wide>0&&i.push("wide");const l=i[0]||n[0].orientation,a=i[1]||n[1].orientation,m=D[l],w=D[a];if(e.landscape===1&&e.wide===1){const E=D.landscape,x=D.wide,f=t,h=f/E,s=f/x,c=h+s;let g,d,y;if(c<=o)g=h,d=s,y=f;else{const P=o/c;g=h*P,d=s*P,y=d*x}const T=(t-y)/2,L=J(n,[{x:T,y:0,width:y,height:d,orientation:"wide"},{x:T,y:d,width:y,height:g,orientation:"landscape"}]),N=y*g+y*d,_=N/(t*o)*100;return{videos:L,totalArea:N,efficiency:_}}if(e.wide===2){const E=D.wide,x=t,f=x/E,h=f*2;let s;h<=o?s=f:s=o/2;const g=J(n,[{x:0,y:0,width:x,height:s,orientation:"wide"},{x:0,y:s,width:x,height:s,orientation:"wide"}]),d=x*s*2,y=d/(t*o)*100;return{videos:g,totalArea:d,efficiency:y}}const u=[()=>{const E=t,x=E/2,f=E/2,h=x/m,s=f/w;return Math.max(h,s)<=o?{positions:[{x:0,y:(o-h)/2,width:x,height:h,orientation:l},{x,y:(o-s)/2,width:f,height:s,orientation:a}],totalArea:x*h+f*s}:null},()=>{const E=o,x=E/2,f=E/2,h=x*m,s=f*w;return Math.max(h,s)<=t?{positions:[{x:(t-h)/2,y:0,width:h,height:x,orientation:l},{x:(t-s)/2,y:x,width:s,height:f,orientation:a}],totalArea:h*x+s*f}:null}];let p=null,R=0;for(const E of u){const x=E();x&&x.totalArea>R&&(R=x.totalArea,p=x)}if(!p){const E=t/2,x=t/2,f=Math.min(E/m,o),h=Math.min(x/w,o);p={positions:[{x:0,y:(o-f)/2,width:E,height:f,orientation:l},{x:E,y:(o-h)/2,width:x,height:h,orientation:a}],totalArea:E*f+x*h}}const S=J(n,p.positions),b=p.totalArea/(t*o)*100;return{videos:S,totalArea:p.totalArea,efficiency:b}}function We(e,n,t,o){const i=e.portrait,l=n.length-i;if((i===3||i===4)&&l===0){const b=D.portrait,E=t/i,x=E/b,f=x<o?(o-x)/2:0,h=Math.min(x,o),s=[];let c=0;for(let y=0;y<i;y++){const T=Math.min(E,h*b);s.push({x:y*E+(E-T)/2,y:f,width:T,height:h,orientation:"portrait"}),c+=T*h}const g=J(n,s),d=c/(t*o)*100;return{videos:g,totalArea:c,efficiency:d}}n.filter(b=>b.orientation==="portrait");const a=n.filter(b=>b.orientation!=="portrait"),m=i>0?Math.min(t*.4,t*.5):0,w=t-m,u=[];let p=0;if(i===2&&l===0){const b=D.portrait,E=t/2,x=E/b,f=o;let h,s;x<=f?(s=x,h=E):(s=f,h=f*b);const c=(o-s)/2;u.push({x:(E-h)/2,y:c,width:h,height:s,orientation:"portrait"}),u.push({x:E+(E-h)/2,y:c,width:h,height:s,orientation:"portrait"}),p=h*s*2}else if(i===1&&l===1){const b=D.portrait,E=a[0],x=D[E.orientation],f=b+x,h=t*(b/f),s=t*(x/f),c=h/b,g=s/x,d=Math.min(o,Math.min(c,g)),y=(o-d)/2;u.push({x:0,y,width:h,height:d,orientation:"portrait"}),u.push({x:h,y,width:s,height:d,orientation:E.orientation}),p=h*d+s*d}else if(i===1&&l===2&&e.landscape===1&&e.wide===1){const b=D.portrait,E=D.wide,x=D.landscape,f=o,h=o*b,s=o/(1/E+1/x),c=s/E,g=s/x,d=h+s;if(Math.abs(d-t)<.1)u.push({x:0,y:0,width:h,height:f,orientation:"portrait"}),p+=h*f,a.find(L=>L.orientation==="wide")&&(u.push({x:0+h,y:0,width:s,height:c,orientation:"wide"}),p+=s*c),a.find(L=>L.orientation==="landscape")&&(u.push({x:0+h,y:c,width:s,height:g,orientation:"landscape"}),p+=s*g);else{const y=t/d,T=h*y,j=T/b,L=s*y,N=o/j;let _=T*N,P=o,$=L*N,V=$/E,v=$/x,W=_+$;if(W>t){const X=t/W;_=_*X,P=_/b,$=$*X,V=$/E,v=$/x,W=_+$,W>t&&($=t-_,V=$/E,v=$/x)}const M=_+$;if(M>t){const X=t/M;_=_*X,P=_/b,$=$*X,V=$/E,v=$/x}const I=0;u.push({x:I,y:0,width:_,height:P,orientation:"portrait"}),p+=_*P,a.find(X=>X.orientation==="wide")&&(u.push({x:I+_,y:0,width:$,height:V,orientation:"wide"}),p+=$*V),a.find(X=>X.orientation==="landscape")&&(u.push({x:I+_,y:V,width:$,height:v,orientation:"landscape"}),p+=$*v)}}else if(i===1&&l===3){const b=D.portrait,E=o,x=E*b,f=x,h=t-f;u.push({x:0,y:0,width:x,height:E,orientation:"portrait"}),p+=x*E;const s=o/3;for(let c=0;c<a.length;c++){const g=a[c],d=D[g.orientation],y=s,T=h;let j,L;T/d<=y?(j=T,L=j/d):(L=y,j=L*d);const N=c*s+(s-L)/2;u.push({x:f+(h-j)/2,y:N,width:j,height:L,orientation:g.orientation}),p+=j*L}}else if(i===2&&l===1){const b=D.portrait,E=a[0],x=D[E.orientation],f=o/2,h=f*b,s=t-h,c=o*x;let g,d;c<=s?(d=o,g=d*x):(g=s,d=g/x);const y=h,T=f,j=(o-d)/2,L=(o/2-T)/2,N=o/2+(o/2-T)/2;u.push({x:0,y:j,width:g,height:d,orientation:E.orientation}),p+=g*d,u.push({x:s,y:L,width:y,height:T,orientation:"portrait"}),p+=y*T,u.push({x:s,y:N,width:y,height:T,orientation:"portrait"}),p+=y*T}else if(i===1&&l===2){const b=D.portrait,E=o,x=E*b,f=x,h=t-f;u.push({x:0,y:0,width:x,height:E,orientation:"portrait"}),p+=x*E;const s=o/2;for(let c=0;c<a.length;c++){const g=a[c],d=D[g.orientation],y=s,T=h;let j,L;T/d<=y?(j=T,L=j/d):(L=y,j=L*d);const N=c*s+(s-L)/2;u.push({x:f+(h-j)/2,y:N,width:j,height:L,orientation:g.orientation}),p+=j*L}}else{const b=i;if(b>0){const E=o/b,x=D.portrait;for(let f=0;f<b;f++){const h=Math.min(E,m/x),s=h*x,c=f*E+(E-h)/2;u.push({x:(m-s)/2,y:c,width:s,height:h,orientation:"portrait"}),p+=s*h}}if(a.length>0){const E=o/a.length;for(let x=0;x<a.length;x++){const f=a[x],h=D[f.orientation],s=E,c=w;let g,d;c/h<=s?(g=c,d=g/h):(d=s,g=d*h);const y=x*E+(E-d)/2;u.push({x:m+(w-g)/2,y,width:g,height:d,orientation:f.orientation}),p+=g*d}}}const R=J(n,u),S=p/(t*o)*100;return{videos:R,totalArea:p,efficiency:S}}function J(e,n){const t=new Array(n.length),o=new Set,i=new Set;for(let m=0;m<n.length;m++){const w=n[m];for(let u=0;u<e.length;u++)if(!o.has(u)&&e[u].orientation===w.orientation){t[m]={...w,orientation:e[u].orientation},o.add(u),i.add(m);break}}const l=[];for(let m=0;m<n.length;m++)i.has(m)||l.push(m);let a=0;for(let m=0;m<e.length;m++)if(!o.has(m)&&a<l.length){const w=l[a];t[w]={...n[w],orientation:e[m].orientation},a++}return t}function Hn(e,n,t,o){if(e.portrait>0)return We(e,n,t,o);if(e.landscape===2&&e.wide===1){const f=D.landscape,h=D.wide,s=t,c=s/h,g=o-c,d=t/2,y=d/f;let T,j,L,N;if(c<=o&&y<=g)T=s,j=c,L=d,N=y;else{const M=o/(c+y),I=Math.min(1,M);j=c*I,T=j*h,N=y*I,L=N*f}const _=(t-T)/2,P=j+(g-N)/2,V=J(n,[{x:_,y:0,width:T,height:j,orientation:"wide"},{x:0,y:P,width:L,height:N,orientation:"landscape"},{x:L,y:P,width:L,height:N,orientation:"landscape"}]),v=T*j+L*N*2,W=v/(t*o)*100;return{videos:V,totalArea:v,efficiency:W}}if(e.landscape===1&&e.wide===2){const f=D.landscape,h=D.wide,s=t/2,c=s/h,d=o-c,y=d*f;let T,j,L,N;if(c<=o&&y<=t&&c+d<=o)T=s,j=c,L=y,N=d;else{const I=c+d,G=o/I;T=s,j=c*G,N=d*G,L=N*f}const _=0,P=t/2,$=(t-L)/2,v=J(n,[{x:_,y:0,width:T,height:j,orientation:"wide"},{x:P,y:0,width:T,height:j,orientation:"wide"},{x:$,y:j,width:L,height:N,orientation:"landscape"}]),W=T*j*2+L*N,M=W/(t*o)*100;return{videos:v,totalArea:W,efficiency:M}}if(e.wide===3){const f=D.wide,h=t/2,s=h/f,g=o-s,d=g*f;let y,T,j,L;if(s<=o&&d<=t&&s+g<=o)y=h,T=s,j=d,L=g;else{const M=s+g,I=o/M;y=h,T=s*I,L=g*I,j=L*f,j>t&&(j=t,L=j/f)}const N=0,_=t/2,P=(t-j)/2,V=J(n,[{x:N,y:0,width:y,height:T,orientation:"wide"},{x:_,y:0,width:y,height:T,orientation:"wide"},{x:P,y:T,width:j,height:L,orientation:"wide"}]),v=y*T*2+j*L,W=v/(t*o)*100;return{videos:V,totalArea:v,efficiency:W}}if(e.landscape===3){const f=D.landscape,h=t/(f*1.5),s=Math.min(o,h),c=s/2,g=s,d=c*f,y=g*f,T=(o-s)/2,j=[{x:0,y:T,width:d,height:c,orientation:"landscape"},{x:0,y:T+c,width:d,height:c,orientation:"landscape"},{x:d,y:T,width:y,height:g,orientation:"landscape"}],L=J(n,j),N=d*s+y*s,_=N/(t*o)*100;return{videos:L,totalArea:N,efficiency:_}}const i=[];if(e.landscape>0)for(let f=0;f<e.landscape;f++)i.push("landscape");if(e.wide>0)for(let f=0;f<e.wide;f++)i.push("wide");const l=i[0]||n[0].orientation,a=i[1]||n[1].orientation,m=i[2]||n[2].orientation,w=D[l],u=D[a],p=D[m],R=[()=>{const f=t*.6,h=t*.4,s=f/w,c=h/u,g=h/p,d=c+g;return s<=o&&d<=o?{positions:[{x:0,y:(o-s)/2,width:f,height:s,orientation:l},{x:f,y:0,width:h,height:c,orientation:a},{x:f,y:c,width:h,height:g,orientation:m}],totalArea:f*s+h*c+h*g}:null},()=>{const f=o*.5,h=o*.5,s=f*w,c=f*u,g=h*p;return s+c<=t&&g<=t?{positions:[{x:0,y:0,width:s,height:f,orientation:l},{x:s,y:0,width:c,height:f,orientation:a},{x:(t-g)/2,y:f,width:g,height:h,orientation:m}],totalArea:s*f+c*f+g*h}:null},()=>{const f=t/3,h=f/w,s=f/u,c=f/p;return Math.max(h,s,c)<=o?{positions:[{x:0,y:(o-h)/2,width:f,height:h,orientation:l},{x:f,y:(o-s)/2,width:f,height:s,orientation:a},{x:f*2,y:(o-c)/2,width:f,height:c,orientation:m}],totalArea:f*h+f*s+f*c}:null}];let S=null,b=0;for(const f of R){const h=f();h&&h.totalArea>b&&(b=h.totalArea,S=h)}if(!S){const f=t/3,h=Math.min(f/w,o),s=Math.min(f/u,o),c=Math.min(f/p,o);S={positions:[{x:0,y:(o-h)/2,width:f,height:h,orientation:l},{x:f,y:(o-s)/2,width:f,height:s,orientation:a},{x:f*2,y:(o-c)/2,width:f,height:c,orientation:m}],totalArea:f*h+f*s+f*c}}const E=J(n,S.positions),x=S.totalArea/(t*o)*100;return{videos:E,totalArea:S.totalArea,efficiency:x}}function Kn(e,n,t,o){if(e.portrait>0)return We(e,n,t,o);const i=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)i.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)i.push("wide");const l=i[0]||n[0].orientation,a=i[1]||n[1].orientation,m=i[2]||n[2].orientation,w=i[3]||n[3].orientation,u=D[l],p=D[a],R=D[m],S=D[w],b=[()=>{const s=t/2,c=o/2,g=Math.min(s,c*u),d=g/u,y=Math.min(s,c*p),T=y/p,j=Math.min(s,c*R),L=j/R,N=Math.min(s,c*S),_=N/S;return{positions:[{x:(s-g)/2,y:(c-d)/2,width:g,height:d,orientation:l},{x:s+(s-y)/2,y:(c-T)/2,width:y,height:T,orientation:a},{x:(s-j)/2,y:c+(c-L)/2,width:j,height:L,orientation:m},{x:s+(s-N)/2,y:c+(c-_)/2,width:N,height:_,orientation:w}],totalArea:g*d+y*T+j*L+N*_}},()=>{const s=t*.6,c=t*.4,g=s/u,d=o/3,y=Math.min(c,d*p),T=y/p,j=Math.min(c,d*R),L=j/R,N=Math.min(c,d*S),_=N/S;return g<=o?{positions:[{x:0,y:(o-g)/2,width:s,height:g,orientation:l},{x:s,y:0,width:y,height:T,orientation:a},{x:s,y:d,width:j,height:L,orientation:m},{x:s,y:d*2,width:N,height:_,orientation:w}],totalArea:s*g+y*T+j*L+N*_}:null},()=>{const s=t/4,c=s/u,g=s/p,d=s/R,y=s/S;return Math.max(c,g,d,y)<=o?{positions:[{x:0,y:(o-c)/2,width:s,height:c,orientation:l},{x:s,y:(o-g)/2,width:s,height:g,orientation:a},{x:s*2,y:(o-d)/2,width:s,height:d,orientation:m},{x:s*3,y:(o-y)/2,width:s,height:y,orientation:w}],totalArea:s*c+s*g+s*d+s*y}:null}];let E=null,x=0;for(const s of b){const c=s();c&&c.totalArea>x&&(x=c.totalArea,E=c)}if(!E){const s=t/2,c=o/2,g=Math.min(c,s/u),d=Math.min(c,s/p),y=Math.min(c,s/R),T=Math.min(c,s/S);E={positions:[{x:(s-s)/2,y:(c-g)/2,width:s,height:g,orientation:l},{x:s+(s-s)/2,y:(c-d)/2,width:s,height:d,orientation:a},{x:(s-s)/2,y:c+(c-y)/2,width:s,height:y,orientation:m},{x:s+(s-s)/2,y:c+(c-T)/2,width:s,height:T,orientation:w}],totalArea:s*g+s*d+s*y+s*T}}const f=J(n,E.positions),h=E.totalArea/(t*o)*100;return{videos:f,totalArea:E.totalArea,efficiency:h}}const Ke=({tokensLoading:e,tokensError:n,refreshTokens:t})=>r.jsx("div",{className:"token-error",children:e?r.jsxs(r.Fragment,{children:[r.jsx(z,{path:ct,size:"48px",color:"#ffffff",className:"loading-spinner"}),r.jsx("div",{children:"Lade Token..."})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{children:n||"Kamera-Token nicht verfügbar"}),r.jsx("button",{onClick:t,children:"Token neu laden"})]})}),qn=({cameras:e,accessTokens:n,tokensLoading:t,tokensError:o,refreshTokens:i,showDoorCams:l,cameraImgRefs:a,openDoor:m,config:w})=>{if(e.length===0)return null;const u=e.map(x=>({orientation:x.orientation||"landscape"})),p=window.innerWidth,R=window.innerHeight-10,S=xt(u,p,R),b={portrait:e.filter(x=>(x.orientation||"landscape")==="portrait"),landscape:e.filter(x=>(x.orientation||"landscape")==="landscape"),wide:e.filter(x=>x.orientation==="wide")},E={portrait:0,landscape:0,wide:0};return S.videos.map((x,f)=>{const h=x.orientation,s=E[h],c=b[h][s];if(!c)return null;E[h]++;const g=n[c.entity_id]||null,d=!!g,y=Fn(c.entity_id,g,w),T=`${h}-${s}-${f}`,j={left:`${x.x}px`,top:`${x.y}px`,width:`${x.width}px`,height:`${x.height}px`};return!y&&!d?r.jsx("div",{className:"video-container",style:j,children:r.jsx(Ke,{tokensLoading:t,tokensError:o,refreshTokens:i})},T):y?r.jsxs("div",{className:"video-container",style:j,children:[d&&l&&r.jsx("img",{ref:L=>{const N=`${c.entity_id}-${f}`;L?a.current.set(N,L):a.current.delete(N)},src:y,className:h,alt:"Camera stream",crossOrigin:"anonymous"},`${c.entity_id}-${f}`),!d&&r.jsx(Ke,{tokensLoading:t,tokensError:o,refreshTokens:i}),r.jsx("div",{className:"video-overlay",onClick:()=>m()})]},T):null})},Jn=O.div`
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
`,Xn=()=>{const e=U(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[],[o,i]=A.useState(!1),[l]=Bn(),[a,m]=A.useState(void 0),[w,u]=A.useState(100),[p,R]=A.useState("0"),S=A.useMemo(()=>t.map(N=>N.entity_id).filter(Boolean),[t]),[b,E]=A.useState({}),[x,f]=A.useState(!1),[h,s]=A.useState(null);A.useEffect(()=>{o&&S.length>0?(f(!0),s(null),He(S,e).then(({tokens:N,error:_})=>{E(N),s(_),f(!1)}).catch(N=>{k.error("Failed to fetch camera tokens:",N),s(Z(N)),f(!1)})):o||(E({}),s(null))},[o,S.join(","),e]);const c=A.useCallback(async()=>{if(S.length!==0){f(!0),s(null);try{const{tokens:N,error:_}=await He(S,e);E(N),s(_)}catch(N){k.error("Failed to refresh camera tokens:",N),s(Z(N))}finally{f(!1)}}},[S,e]),{isConnected:g}=Me(),d=A.useRef(!1);A.useEffect(()=>{g?d.current&&(d.current=!1,o&&S.length>0&&c()):d.current=!0},[g,o,S,c]);const y=A.useRef(new Map);A.useEffect(()=>{o||(y.current.forEach(N=>{N&&N.src&&(N.src="")}),y.current.clear())},[o]),A.useEffect(()=>{if(l==="off"&&o){const N=window.setTimeout(()=>{i(!1),m(void 0)},Fe);return m(N),R(Fe+"ms"),u(0),()=>{N&&window.clearTimeout(N)}}else l==="on"&&(R(0),u(100),i(!0))},[l,o]),A.useEffect(()=>{l==="on"&&a!==void 0&&(window.clearTimeout(a),R(0),u(100),m(void 0))},[a,l]);const[T,j]=A.useState(null),L=()=>{T===null?j("confirm"):T==="confirm"&&(j("opening"),Pn(e),setTimeout(()=>j(null),2e3))};return A.useEffect(()=>{if(T==="confirm"){const N=setTimeout(()=>{j(null)},3e3);return()=>{clearTimeout(N)}}},[T]),A.useEffect(()=>{o||j(null)},[o]),n?r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>i(N=>!N),children:"CCTV"}),r.jsx(he,{visible:o,onClick:L,onClose:()=>{i(!1),j(null)},fullsize:!0,children:r.jsxs(Jn,{onClick:L,children:[r.jsx(yt,{completed:w,height:10,bgColor:a===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:p,transitionTimingFunction:"linear"}),r.jsx("div",{className:"grid",children:r.jsx(qn,{cameras:t,accessTokens:b,tokensLoading:x,tokensError:h,refreshTokens:c,showDoorCams:o,cameraImgRefs:y,openDoor:L,config:e})}),T==="confirm"&&r.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),T==="opening"&&r.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]}):null},Qn=O.div`
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

`,Zn=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>r.jsxs(Qn,{children:[r.jsxs("div",{className:"buttons",children:[r.jsx(z,{path:Pt,size:"32px",color:"#ffffff",onClick:n}),r.jsx(z,{path:Vt,size:"32px",color:"#ffffff",onClick:e}),r.jsx("button",{onClick:t,children:"Today"}),r.jsx(Xn,{})]}),r.jsx(Wn,{}),r.jsx(z,{path:ct,size:"32px",color:"#ffffff",className:Y("indicator")})]}),eo=C.memo(Zn),to=6e4,Be=(e=to,n=void 0)=>{const[t,o]=A.useState(!0);return A.useEffect(()=>{const i=setInterval(()=>{o(l=>!l)},e);return()=>{clearInterval(i)}},[e,n]),t},no={mdiDelete:Ft,mdiCake:Ut},oo=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return no[n]||void 0},ro=(e,n,t,o,i,l)=>B(i(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:65e3,signal:l}).then(a=>{!a.data||!Array.isArray(a.data)||a.data.forEach(m=>{const w="dateTime"in m.start?F.fromISO(m.start.dateTime):F.fromSQL(m.start.date);let u;"dateTime"in m.end?u=Math.floor(F.fromISO(m.end.dateTime).diff(n,"days").as("days")):u=Math.floor(F.fromSQL(m.end.date).diff(n,"days").as("days"))-1;const p=Math.floor(w.diff(n,"days").as("days"));u>=o.length&&(u=o.length-1);const R="dateTime"in m.start?"events":"allDay";if(p>=0&&p<o.length)for(let S=p;S<=u;S++)o[S][R]=[...o[S][R],{...m,icon:e.icon}]})}).catch(a=>{if(!(B.isCancel(a)||a.name==="AbortError"||a.code==="ERR_CANCELED"))throw a}),qe=new Map,io=300*1e3,so=e=>e.toISODate(),ao=(e,n,t,o,i,l,a,m,w)=>{const u=[0,1,2,3,4,5].map(E=>e.plus({days:E}).startOf("day"));u[6]=e.plus({days:6}).endOf("day");const p=so(e),R=qe.get(p);if(R&&Date.now()-R.timestamp<io){w.current&&t(R.data);return}const S=u.map(E=>({date:E,allDay:[],events:[]}));if(!a||a.length===0){k.warn("loadAll: No calendars configured, skipping fetch",{calendars:a}),w.current&&(t(S),o(!1));return}k.debug("loadAll: Starting calendar fetch",{calendarsCount:a.length,calendars:a.map(E=>E.name),startDate:e.toISO(),endDate:u[6].toISO()});const b=new AbortController;i.current&&i.current.abort(),i.current=b;try{w.current&&o(!0);const E=a.map(x=>ro(x,u[0],u[6],S,m,b.signal));Promise.all(E).then(()=>{w.current&&!b.signal.aborted&&(qe.set(p,{data:S,timestamp:Date.now()}),t(S),l(!1))}).catch(x=>{w.current&&!b.signal.aborted&&l(Z(x))}).finally(()=>{w.current&&!b.signal.aborted&&o(!1)})}catch(E){w.current&&!b.signal.aborted&&(l(Z(E)),o(!1))}},Je=[],co=e=>{const n=U(),t=n.CALENDARS||[];A.useEffect(()=>{k.debug("useCalendarData: config changed",{hasCALENDARS:"CALENDARS"in n,CALENDARS:n.CALENDARS,CALENDARSCount:Array.isArray(n.CALENDARS)?n.CALENDARS.length:"not array",configKeys:Object.keys(n)})},[n]);const o=A.useMemo(()=>{const f=t.map(h=>({name:h.name,icon:oo(h.icon)}));return k.debug("Processing calendars from config (memo update):",{CALENDARS:t,count:t.length,processedCount:f.length,processed:f.map(h=>h.name)}),f},[t]);A.useEffect(()=>{k.debug("CALENDARS array changed:",{CALENDARS:t,count:t.length,calendarsMemoCount:o.length})},[t,o.length]);const i=A.useCallback(f=>H(`/api/calendars/${f}`,n),[n]),l=A.useCallback((f,h)=>`${i(f)}?${rn.stringify(h)}`,[i]),[a,m]=A.useState(Je),[w,u]=A.useState(!1),[p,R]=A.useState(!1),[S,b]=A.useState(null),E=C.useRef(null),x=C.useRef(!0);return Be(6e4,"Calendar"),A.useEffect(()=>(x.current=!0,k.debug("useCalendarData effect triggered:",{startDate:e?.toISO(),calendarsCount:o.length,calendars:o.map(f=>f.name),hasStartDate:e!==void 0,hasCalendars:o.length>0}),e!==void 0&&o.length>0?((S===null||!S.equals(e))&&(m(Je),b(e)),k.debug("useCalendarData: Calling loadAll",{startDate:e.toISO(),calendarsCount:o.length}),ao(e,a,m,u,E,R,o,l,x)):o.length,()=>{x.current=!1,E.current&&E.current.abort()}),[e,o,l]),[a,p]};function fe(e){const[n,t]=A.useState(!1);function o({key:l}){l===e&&t(!0)}const i=({key:l})=>{l===e&&t(!1)};return A.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",i),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}),[e]),n}const lo=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return F.fromJSDate(o)},uo=e=>{const n=()=>e(m=>m.plus({days:7})),t=fe("ArrowRight");A.useEffect(()=>{t&&n()},[t]);const o=()=>e(m=>m.minus({days:7})),i=fe("ArrowLeft");A.useEffect(()=>{i&&o()},[i]);const l=()=>e(lo()),a=fe("t");return A.useEffect(()=>{a&&l()},[a]),{nextWeek:n,previousWeek:o,startWeekWithToday:l}},fo=e=>{const[n,t]=C.useState(0),[o,i]=C.useState(0),l=50;return{onTouchStart:u=>{i(0),t(u.targetTouches[0].clientX)},onTouchMove:u=>i(u.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const u=n-o,p=u>l,R=u<-l;p&&e.onSwipedLeft(),R&&e.onSwipedRight()}}},Xe=e=>F.fromISO(e).toLocaleString(F.TIME_24_SIMPLE),je=e=>e.toFormat("c")>=6,Ne=e=>e.hasSame(F.now(),"day"),ho=O.div`
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
`,po=()=>{const[e,n]=A.useState(void 0),[t,o]=co(e),{nextWeek:i,previousWeek:l,startWeekWithToday:a}=uo(n);A.useEffect(()=>{e===void 0&&a()},[]);const m=fo({onSwipedLeft:()=>i(),onSwipedRight:()=>l()}),w=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),u=C.useMemo(()=>t.slice(0,7),[t]);return r.jsxs(ho,{...m,children:[r.jsx(eo,{nextWeek:i,previousWeek:l,startWeekWithToday:a}),r.jsxs("div",{className:"schedule",children:[u.map((p,R)=>r.jsx("div",{className:Y({weekend:je(p.date),today:Ne(p.date)},"caption"),children:r.jsx("h2",{children:p.date.toLocaleString(w)})},R)),u.map((p,R)=>r.jsx("div",{className:Y("allDayRow",{weekend:je(p.date),today:Ne(p.date)}),children:p.allDay.map((S,b)=>r.jsx("div",{className:"allDayEvent",children:S.summary},b))},R)),u.map((p,R)=>r.jsx("div",{className:Y("eventRow",{weekend:je(p.date),today:Ne(p.date)}),children:p.events.map((S,b)=>r.jsxs("div",{className:"event",children:[r.jsx("div",{children:S.summary}),r.jsxs("h3",{children:[S.icon&&r.jsx(z,{path:S.icon,size:"1rem",color:"#ffffff"}),Xe(S.start.dateTime)," - ",Xe(S.end.dateTime)]})]},b))},R))]}),t.length===0&&r.jsx("div",{className:"loading",children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsx(at,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&r.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:r.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},go=O.div`
  padding: ${e=>e.$compact?"0.75rem":"2rem"};
  text-align: center;
  color: #ffffff;
  background-color: #2f2f2f;
  border-radius: 4px;
  margin: ${e=>e.$compact?"0":"2rem"};

  h2 {
    color: #f85a5a;
    margin-bottom: ${e=>e.$compact?"0.5rem":"1rem"};
    font-size: ${e=>e.$compact?"1rem":void 0};
  }

  button {
    margin-top: ${e=>e.$compact?"0.5rem":"1rem"};
    padding: ${e=>e.$compact?"0.3rem 0.6rem":"0.5rem 1rem"};
    background-color: #356957;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${e=>e.$compact?"0.85rem":"1rem"};

    &:hover {
      background-color: #2d5547;
    }
  }
`;class Q extends A.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",i=n?.stack||"",l=t?.componentStack||"";k.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:i,componentStack:l})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){if(this.state.hasError){const n=this.props.compact;return r.jsxs(go,{$compact:n,children:[r.jsx("h2",{children:n?"Fehler":"Something went wrong"}),!n&&r.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,r.jsxs("div",{children:[r.jsx("button",{onClick:this.handleReset,children:"Try Again"}),r.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]})}return this.props.children}}const Te={"clear-day":{icon:Lt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:Nt,label:"Klar",color:"#eeeef5"},rain:{icon:jt,label:"Regen",color:"#80a5d6"},snow:{icon:Rt,label:"Schnee",color:"#8c82ce"},sleet:{icon:Ct,label:"Graupel",color:"#aba4db"},wind:{icon:Tt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:St,label:"Neblig",color:"#d5dae2"},cloudy:{icon:At,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:bt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:wt,label:"Teils bewölkt",color:"#d5dae2"}},mo=e=>{const[n,t]=A.useState([]),[o,i]=A.useState(!1),l=Be(6e4*10,"Weather"),a=U(),m=a.ENABLE_WEATHER||!1,w=a.WEATHER_LATITUDE,u=a.WEATHER_LONGITUDE,p=m&&w&&u,R=()=>`.${`/forecast/${w},${u}?units=si&exclude=minutely`}`;return A.useEffect(()=>{if(!p)return;let S=!0;const b=new AbortController;return B(R(),{signal:b.signal}).then(E=>{S&&(t(E.data),i(!1))}).catch(E=>{S&&!b.signal.aborted&&i(Z(E))}).finally(()=>{S&&e&&e(!1)}),()=>{S=!1,b.abort()}},[l,e,p,m,w,u]),[n,o]},xo=_t(Ot),Qe=O.div`

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
`,Ze=C.memo(({data:e,daily:n=!1})=>r.jsxs("div",{children:[r.jsxs("div",{children:[!n&&F.fromSeconds(e.time).toLocaleString(F.TIME_24_SIMPLE),n&&F.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),r.jsx("div",{children:r.jsx(De,{icon:e.icon})}),r.jsx("div",{children:r.jsxs("strong",{children:[!n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),r.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),r.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Eo=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:Te[n.icon]?.color||"#ffffff",text:Te[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),De=({icon:e})=>{const n=Te[e];return r.jsx(n.icon,{size:60,color:"#ffffff"})},yo=()=>{const n=U().ENABLE_WEATHER||!1,[t,o]=mo(),[i,l]=A.useState(!1),a=fe("w"),m=A.useRef(),w=C.useCallback(()=>l(b=>!b),[]),u=C.useCallback(()=>l(!0),[]),p=C.useMemo(()=>Eo(t),[t]),R=C.useMemo(()=>[3,6,9,12],[]),S=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return A.useEffect(()=>{if(!i||!m.current||!t||!t.hourly||p.length===0)return;const b={timezone:"Europe/Berlin"},E=document.createElement("div");return m.current.textContent="",m.current.appendChild(E),sn(E,p,b),()=>{m.current&&(m.current.textContent="")}},[i,p]),A.useEffect(()=>{a&&w()},[a]),n?!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?r.jsx(Qe,{children:r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":r.jsxs(Qe,{children:[r.jsxs("div",{onClick:u,children:[r.jsxs("div",{className:"headline",children:[r.jsx(De,{icon:t.currently.icon}),r.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),r.jsx("div",{className:"forecast",children:R.map((b,E)=>r.jsx(Ze,{data:t.hourly.data[b]},E))})]}),r.jsx(he,{visible:i,onClick:w,children:r.jsxs("div",{className:"full-weather",children:[o!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),r.jsxs("div",{className:"detail-header",children:[r.jsx("div",{children:r.jsxs("div",{className:"headline",children:[r.jsx(De,{icon:t.daily.data[0].icon}),r.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",r.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),r.jsx("h3",{children:Te[t.daily.data[0].icon].label})]}),r.jsx("div",{className:"values",children:r.jsxs("div",{className:"table",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Regen:"})," ",Math.round(t.daily.data[0].precipProbability*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),r.jsx("h3",{children:"Die nächsten 24 Stunden"}),r.jsx("div",{ref:m}),r.jsx("h3",{children:"Die nächste Woche"}),r.jsx("div",{className:"forecast",children:S.map((b,E)=>r.jsx(Ze,{data:t.daily.data[b],daily:!0},E))}),r.jsxs("div",{className:"info",children:["Aktualisiert ",r.jsx(kt,{date:F.fromSeconds(t.currently.time).toJSDate(),formatter:xo})]})]})})]}):null},wo=C.memo(yo),bo="AK Wandsbek",Ao="Hamburg",So="Master:62016",To="STATION",Co={x:10.091341,y:53.568702},Ro={name:bo,city:Ao,id:So,type:To,coordinate:Co},be={departureList:"departureList",checkName:"checkName"},jo=async(e,n,t,o)=>{const i={Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},l=o.HASS_ACCESS_TOKEN||"";l&&l.trim()!==""&&l!=="undefined"&&l!=="null"&&(i.Authorization=`Bearer ${l}`);const a=H(`/gti/public/${e}`,o);return B({method:"post",url:a,data:n,signal:t,headers:i})},et=(e,n)=>e.realtimeOffset-n.realtimeOffset,No=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(et),to:n.filter(t=>t.directionId===6).slice(0,3).sort(et)}},Lo=e=>{const n=U(),t=n.ENABLE_HVV||!1,[o,i]=A.useState([]),[l,a]=A.useState(!1),m=Be(6e4),w=t;return A.useEffect(()=>{if(!w)return;if(!(e in be)){k.warn(e,"not supported by HVV connector");return}let u=!0;const p=new AbortController;let R={version:51};switch(e){case be.checkName:R={...R,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case be.departureList:const S=F.now();R={...R,station:Ro,time:{date:S.toFormat("dd.MM.yyyy"),time:S.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:R=void 0}return jo(e,R,p.signal,n).then(S=>{u&&(i(No(S.data)),a(!1))}).catch(S=>{u&&!p.signal.aborted&&a(Z(S))}),()=>{u=!1,p.abort()}},[e,m,w,t]),[o,l]},ko=O.div`
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
`,tt=C.memo(({line:e,direction:n,realtimeOffset:t})=>r.jsxs("div",{className:"departure",children:[r.jsx("div",{children:r.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),r.jsx("div",{children:t===0?"Jetzt":r.jsxs(r.Fragment,{children:["in ",t," '"]})})]})),_o=()=>{const n=U().ENABLE_HVV||!1,[t,o]=Lo(be.departureList);return n?r.jsx(ko,{children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((i,l)=>r.jsx(tt,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},l)),r.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((i,l)=>r.jsx(tt,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},l))]})}):null},Oo=C.memo(_o),Do=()=>{const e=U(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"",o=e.ENTITY_CHARGING_STATE||"",i=e.ENTITY_STATE_OF_CHARGE||"",l=n&&(t||o||i),[a,m,w]=se({entityId:t,enabled:l&&!!t,config:e,initialState:"off"}),{error:u}=ue({entityId:t,enabled:l&&!!t,onStateUpdate:w,logPrefix:"EV preclimate",wsOptions:{checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3}}),[p,R,S]=se({entityId:o,enabled:l&&!!o,config:e,initialState:"off"}),{error:b}=ue({entityId:o,enabled:l&&!!o,onStateUpdate:S,logPrefix:"EV charging",wsOptions:{checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3}}),[E,x,f]=se({entityId:i,enabled:l&&!!i,config:e,initialState:"0"}),{error:h}=ue({entityId:i,enabled:l&&!!i,onStateUpdate:f,logPrefix:"EV SoC",wsOptions:{checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3}});return[A.useMemo(()=>({preclimateStatus:a==="on",chargingState:p==="on",stateOfCharge:parseFloat(E)||0}),[a,p,E]),m||u||R||b||x||h||!1]},vo=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&B.post(H("/api/services/button/press",e),{entity_id:n}).catch(t=>{k.error("Failed to start preclimate:",t)})},Io=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&B.post(H("/api/services/button/press",e),{entity_id:n}).catch(t=>{k.error("Failed to stop preclimate:",t)})},$o=({preclimateStatus:e,error:n,onStart:t,onStop:o})=>{const[i,l]=C.useState(!1),[a,m]=C.useState(null),[w,u]=C.useState(!1),[p,R]=C.useState(!1),[S,b]=C.useState(0),E=C.useRef(null),x=C.useRef(null),f=C.useRef(e),h=C.useRef(null);C.useEffect(()=>{f.current!==e&&(i&&h.current!==null&&e===(a==="start")&&(b(a==="start"?360:0),R(!0),setTimeout(()=>{l(!1),m(null),R(!1),b(0),h.current=null,u(!1)},300),E.current&&(clearTimeout(E.current),E.current=null)),f.current=e)},[e,i,a]),C.useEffect(()=>{if(!i||p){x.current&&(cancelAnimationFrame(x.current),x.current=null);return}const c=h.current||Date.now(),g=a==="stop",d=()=>{const y=Date.now()-c,T=Math.min(y/pn,1);b(g?360*(1-T):360*T),T<1&&!p&&(x.current=requestAnimationFrame(d))};return x.current=requestAnimationFrame(d),()=>{x.current&&(cancelAnimationFrame(x.current),x.current=null)}},[i,p,a]),C.useEffect(()=>()=>{E.current&&clearTimeout(E.current),x.current&&cancelAnimationFrame(x.current)},[]);const s=C.useCallback(()=>{if(n!==!1||i)return;const c=!e,g=c?"start":"stop";l(!0),m(g),R(!1),u(!1),b(0),h.current=Date.now(),f.current=e,c?t():o(),E.current=setTimeout(()=>{u(!0),setTimeout(()=>{l(!1),m(null),R(!1),b(0),u(!1),h.current=null},500)},gn)},[e,n,i,t,o]);return{isAnimating:i,animationDirection:a,shouldShake:w,isComplete:p,progressAngle:S,handleToggle:s}},Mo=O.div`
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
`,Wo=(e,n)=>n?zt:e>=80?Yt:e>=50?Ht:e>=20?Kt:qt,Bo=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",Po=()=>{const e=U(),n=e.ENABLE_EV||!1,[t,o]=Do(),{preclimateStatus:i,chargingState:l,stateOfCharge:a}=t,m=C.useCallback(()=>vo(e),[e]),w=C.useCallback(()=>Io(e),[e]),{isAnimating:u,animationDirection:p,shouldShake:R,isComplete:S,progressAngle:b,handleToggle:E}=$o({preclimateStatus:i,error:o,onStart:m,onStop:w}),x=Wo(a||0,l),f=Bo(a||0),h=Math.round(a||0),s=u?p==="start":i,c=p==="start"?"#17e146":"#f85a5a",g=p==="start"?"clockwise":"counterclockwise";return n?r.jsxs(Mo,{className:Y({disabled:o!==!1}),children:[r.jsxs("h2",{children:["Auto",o!==!1?r.jsxs("div",{className:"battery-info",children:[r.jsx(z,{path:Ie,size:"1.2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs("div",{className:"battery-info",children:[r.jsxs("span",{className:"charge-percentage",children:[h,"%"]}),r.jsx(z,{path:x,size:"1.2rem",color:f})]})]}),o===!1&&r.jsxs("div",{className:"preclimate-button-wrapper",children:[u&&r.jsx("div",{className:Y("progress-ring",g,{complete:S}),style:{"--progress-color":c,"--progress-angle":`${b}deg`,"--progress-gradient":`conic-gradient(from -90deg, ${c} 0deg, ${c} ${b}deg, transparent ${b}deg, transparent 360deg)`}}),r.jsxs("button",{className:Y("preclimate-button",{spinning:s&&!u,shaking:R}),onClick:E,disabled:o!==!1||u,children:[r.jsx(z,{path:Gt,size:"2rem",color:s?"#ff9800":"#ffffff"}),r.jsx("span",{children:s?"Stop":"Start"})]})]})]}):null},Vo=C.memo(Po),Uo=()=>{const e=U(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",o=n&&t,[i,l,a]=se({entityId:t,enabled:o,config:e,initialState:"closed"}),{error:m}=ue({entityId:t,enabled:o,onStateUpdate:a,logPrefix:"garage door"});return[i,l||m||!1]},Fo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),$e);B.post(H("/api/services/cover/toggle",n),{entity_id:t}).catch(i=>{k.error("Failed to toggle garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},Go=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),$e);B.post(H("/api/services/cover/open_cover",n),{entity_id:t}).catch(i=>{k.error("Failed to open garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},zo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),$e);B.post(H("/api/services/cover/close_cover",n),{entity_id:t}).catch(i=>{k.error("Failed to close garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},Yo=O.div`
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
`,Et=O.div`
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
`,ve=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:en},open:{label:"Offen",icon:Zt},closed:{label:"Geschlossen",icon:Qt},opening:{label:"Öffnet",icon:Xt},closing:{label:"Schließt",icon:Jt}};return n[e]||k.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:tn}},Ho=({garageDoor:e,animate:n=!1})=>r.jsxs(Et,{className:Y({animate:n}),children:[r.jsx(z,{path:ve(e).icon,size:"2rem",color:"#ffffff"}),r.jsx("span",{children:ve(e).label})]}),Ko=e=>Dt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return ve(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),qo=()=>{const e=U(),n=e.ENABLE_GARAGE||!1,[t,o]=Uo(),[i,l]=A.useState(void 0),[a,m]=A.useState(!1),[w,u]=A.useState(!1);A.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!i){const E=new Promise(x=>{l({resolve:x})});Ko(E)}}else i&&(i.resolve(t),l(void 0))},[t]);const p=fe("g");A.useEffect(()=>{p&&o===!1&&Fo(m,e)},[p,o,e]);const R=C.useCallback(b=>{if(o===!1)switch(u(!1),b){case"open":Go(m,e);break;case"close":zo(m,e);break}},[m,o,e]),S=C.useCallback(()=>{o===!1&&u(!0)},[o]);return n?r.jsxs(Yo,{className:Y({disabled:o!==!1}),children:[r.jsx("h2",{children:"Garage"}),r.jsx("div",{className:"status",onClick:S,children:o!==!1?r.jsxs(Et,{children:[r.jsx(z,{path:Ie,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsx(Ho,{garageDoor:t,animate:a})}),r.jsx(he,{visible:w&&o===!1,onClick:()=>u(!1),children:r.jsxs("div",{className:"controls",children:[r.jsx("h2",{children:"Garagentor"}),r.jsx("div",{onClick:()=>R("open"),children:"Öffnen"}),r.jsx("div",{onClick:()=>R("close"),children:"Schließen"})]})})]}):null},Jo=C.memo(qo),Xo=({entityIds:e,enabled:n,onStateUpdate:t,logPrefix:o,wsOptions:i={}})=>{const{error:l}=mt({enabled:n&&e.length>0,logPrefix:o,...i,onReady:(a,m)=>(e.forEach(w=>{const u=p=>{p.state!==void 0&&t(w,p.state)};m.current.set(w,u),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"subscribe_entity",entity_id:w}))}),e.length>0&&k.debug(`Subscribed to ${o} state changes: ${e.join(", ")}`),()=>{e.forEach(w=>{m.current.delete(w),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"unsubscribe_entity",entity_id:w}))})}),dependencies:[n,e.join(",")]});return{error:l}},q={done:{label:"Fertig",animate:!1,icon:on},off:{label:"Aus",animate:!1,icon:nn},standby:{label:"Standby",animate:!1,icon:Pe},running:{label:"Läuft …",animate:!0,icon:Pe}},Qo={off:0,standby:2,running:16,done:256},Zo=()=>{const e=U(),n=e.ENABLE_LAUNDRY||!1,t=e.LAUNDRY_MACHINES||[],o=Array.isArray(t)?t:[],i=A.useMemo(()=>o.filter(c=>c.entity_id).map(c=>c.entity_id),[o.map(c=>c.entity_id).join(",")]),[l,a]=A.useState({}),[m,w]=A.useState({}),u=A.useCallback((c,g)=>{a(d=>({...d,[c]:g}))},[]),{error:p}=Xo({entityIds:i,enabled:n&&i.length>0,onStateUpdate:u,logPrefix:"laundry"});A.useEffect(()=>{if(!n||i.length===0)return;const c=new Map;return i.forEach(g=>{const d=H(`/api/states/${g}`,e);if(!d)return;const y=new AbortController;c.set(g,y),B(d,{signal:y.signal}).then(T=>{a(j=>({...j,[g]:T.data.state})),w(j=>({...j,[g]:!1}))}).catch(T=>{y.signal.aborted||w(j=>({...j,[g]:Z(T)}))})}),()=>{c.forEach(g=>g.abort())}},[n,i.join(","),e]);const R=o.map(c=>({state:l[c.entity_id]||"off",error:m[c.entity_id]||p||!1,name:c.name})),[S,b]=A.useState(q.off),[E,x]=A.useState(!1),f=R.map(c=>c.state),h=R.map(c=>c.error);A.useEffect(()=>{const c=h.some(g=>g!==!1);x(c&&h.find(g=>g!==!1)||!1)},[h]),A.useEffect(()=>{const c=f.reduce((g,d)=>g+(Qo[d]||0),0);c===0?b(q.off):c<16?b(q.standby):c<256?b(q.running):c%256===0?b(q.done):c%256%16===0?b(q.running):c%256%2===0?b(q.done):b(q.running)},[f]);const s=R.map(c=>({label:c.name,state:c.state}));return[S,s,E]},er=O.div`
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
`,tr=()=>{const n=U().ENABLE_LAUNDRY||!1,[t,o,i]=Zo(),[l,a]=A.useState(!1),m=C.useCallback(()=>{i===!1&&a(!0)},[i]),w=C.useCallback(()=>a(!1),[]);return n?r.jsxs(er,{className:Y({disabled:i!==!1}),children:[r.jsx("h2",{children:"Wäsche"}),r.jsx("div",{className:"status",onClick:m,children:i!==!1?r.jsxs(r.Fragment,{children:[r.jsx(z,{path:Ie,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:Y({animate:t.animate}),children:r.jsx(z,{path:t.icon,size:"2rem",color:"#ffffff"})}),r.jsx("span",{children:t.label})]})}),r.jsx(he,{visible:l&&i===!1,onClick:w,children:r.jsxs("div",{className:"states",children:[r.jsx("h2",{children:"Wäsche"}),o.map((u,p)=>r.jsxs("div",{children:[r.jsx("div",{className:"subtitle",children:u.label}),r.jsx("div",{className:Y({animate:q[u.state].animate}),children:r.jsx(z,{path:q[u.state].icon,size:2})}),r.jsx("div",{children:q[u.state].label})]},p))]})})]}):null},nr=C.memo(tr),or=O.div`
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
`,rr=()=>r.jsxs(or,{children:[r.jsxs("div",{className:"top-content",children:[r.jsx(Q,{compact:!0,children:r.jsx(wo,{})}),r.jsx(Q,{compact:!0,children:r.jsx(Oo,{})}),r.jsx(Q,{compact:!0,children:r.jsx(Vo,{})})]}),r.jsxs("div",{className:"two-cols",children:[r.jsx(Q,{compact:!0,children:r.jsx(Jo,{})}),r.jsx(Q,{compact:!0,children:r.jsx(nr,{})})]})]}),ir=C.memo(rr),nt=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],sr=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],Ae={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},ar={landscape:"L",portrait:"P",wide:"W"},cr=O.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,lr=O.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,dr=O.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,ne=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,oe=O.label`
  font-size: 0.9rem;
  color: #cccccc;
`,ot=O.select`
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
`,rt=O.input`
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
`,ur=O.button`
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
`,it=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,fr=O.button`
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
`,hr=O.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,pr=O.div`
  position: absolute;
  background-color: ${e=>Ae[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,gr=O.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,mr=O.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,xr=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,me=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,xe=O.div`
  font-size: 0.85rem;
  color: #cccccc;
`,Ee=O.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Er=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,yr=O.h3`
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
`;const Le=O.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?Ae[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?Ae[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?Ae[e.orientation]:"#4a4a4a"};
  }
`,st=()=>{const[e,n]=C.useState(1920),[t,o]=C.useState(1080),[i,l]=C.useState("Full HD"),[a,m]=C.useState(""),[w,u]=C.useState(""),[p,R]=C.useState([{orientation:"landscape"}]),[S,b]=C.useState(null),E=C.useMemo(()=>xt(p,e,t),[p,e,t]),x=d=>{const y=nt.find(T=>T.name===d);y&&y.width&&y.height?(n(y.width),o(y.height),l(d),m(""),u("")):d==="Custom"&&l("Custom")},f=()=>{const d=parseInt(a),y=parseInt(w);d>0&&y>0&&(n(d),o(y))},h=d=>{R(d.videos),b(d.name)},s=d=>{const y=[];for(let T=0;T<d;T++)y.push(p[T]||{orientation:"landscape"});R(y),b(null)},c=(d,y)=>{const T=[...p];T[d]={orientation:y},R(T),b(null)},g=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return r.jsxs(cr,{children:[r.jsx(lr,{children:"Video Tiling Algorithm Demo"}),r.jsxs(dr,{children:[r.jsxs(ne,{children:[r.jsx(oe,{children:"Screen Size Preset"}),r.jsx(ot,{value:i,onChange:d=>x(d.target.value),children:nt.map(d=>r.jsx("option",{value:d.name,children:d.name},d.name))})]}),i==="Custom"&&r.jsxs(r.Fragment,{children:[r.jsxs(ne,{children:[r.jsx(oe,{children:"Custom Width"}),r.jsx(rt,{type:"number",value:a,onChange:d=>m(d.target.value),placeholder:"Width",min:"100"})]}),r.jsxs(ne,{children:[r.jsx(oe,{children:"Custom Height"}),r.jsx(rt,{type:"number",value:w,onChange:d=>u(d.target.value),placeholder:"Height",min:"100"})]}),r.jsxs(ne,{children:[r.jsx(oe,{children:" "}),r.jsx(ur,{onClick:f,children:"Apply Custom Size"})]})]}),r.jsxs(ne,{children:[r.jsx(oe,{children:"Number of Videos"}),r.jsxs(ot,{value:p.length,onChange:d=>s(parseInt(d.target.value)),children:[r.jsx("option",{value:"1",children:"1 Video"}),r.jsx("option",{value:"2",children:"2 Videos"}),r.jsx("option",{value:"3",children:"3 Videos"}),r.jsx("option",{value:"4",children:"4 Videos"})]})]}),p.map((d,y)=>r.jsxs(ne,{children:[r.jsxs(oe,{children:["Video ",y+1," Orientation"]}),r.jsxs(it,{children:[r.jsx(Le,{active:d.orientation==="landscape",orientation:"landscape",onClick:()=>c(y,"landscape"),children:"Landscape"}),r.jsx(Le,{active:d.orientation==="portrait",orientation:"portrait",onClick:()=>c(y,"portrait"),children:"Portrait"}),r.jsx(Le,{active:d.orientation==="wide",orientation:"wide",onClick:()=>c(y,"wide"),children:"Wide"})]})]},y))]}),r.jsxs(Er,{children:[r.jsx(yr,{children:"Test Scenarios"}),r.jsx(it,{children:sr.map(d=>r.jsx(fr,{active:S===d.name,onClick:()=>h(d),children:d.name},d.name))})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:r.jsx(hr,{style:{width:`${e*g}px`,height:`${t*g}px`},children:E.videos.map((d,y)=>r.jsxs(pr,{orientation:d.orientation,style:{left:`${d.x*g}px`,top:`${d.y*g}px`,width:`${d.width*g}px`,height:`${d.height*g}px`},children:[r.jsxs(gr,{children:[ar[d.orientation]," ",y+1]}),r.jsxs(mr,{children:[Math.round(d.width)," × ",Math.round(d.height)]})]},y))})}),r.jsxs(xr,{children:[r.jsxs(me,{children:[r.jsx(xe,{children:"Canvas Size"}),r.jsxs(Ee,{children:[e," × ",t]})]}),r.jsxs(me,{children:[r.jsx(xe,{children:"Total Area Used"}),r.jsxs(Ee,{children:[Math.round(E.totalArea).toLocaleString()," px²"]})]}),r.jsxs(me,{children:[r.jsx(xe,{children:"Efficiency"}),r.jsxs(Ee,{children:[E.efficiency.toFixed(2),"%"]})]}),r.jsxs(me,{children:[r.jsx(xe,{children:"Display Scale"}),r.jsxs(Ee,{children:[(g*100).toFixed(1),"%"]})]})]})]})},Se="hass-family-calendar-config-banner-dismissed",wr=O.div`
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
`,br=()=>{const e=ut(),n=ft(),t=ht(),o=dt(),[i,l]=C.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(Se)==="true"}catch{}return!1}),[a,m]=C.useState(!1);if(C.useEffect(()=>{if(e&&i){l(!1);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(Se)}catch{}}},[e,i]),o||i||!e&&!n)return null;const w=async()=>{m(!0);try{await t()}catch{}finally{m(!1)}},u=()=>{l(!0);try{typeof window<"u"&&window.localStorage&&localStorage.setItem(Se,"true")}catch{}};let p="warning",R="";return e&&n?(p="warning",R=`Using cached configuration. Failed to load from server: ${e}`):e&&!n?(p="error",R=`Failed to load configuration: ${e}`):n&&(p="warning",R="Using cached configuration. Some features may be outdated."),r.jsxs(wr,{severity:p,children:[r.jsx("div",{className:"message",children:R}),r.jsxs("div",{className:"actions",children:[e&&r.jsx("button",{onClick:w,disabled:a,children:a?"Retrying...":"Retry"}),r.jsx("button",{className:"dismiss",onClick:u,title:"Dismiss",children:"×"})]})]})},Ar=vt`
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
`,Sr=O.div`
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
`;function Tr(){const e=ut(),n=ft(),t=dt(),[o]=A.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(Se)==="true"}catch{}return!1}),i=!t&&!o&&(e||n);return r.jsxs(Sr,{$hasBanner:i,children:[r.jsx(Ar,{}),r.jsx(br,{}),r.jsxs("div",{className:"main",children:[r.jsx(Q,{children:r.jsx(po,{})}),r.jsx(Q,{children:r.jsx(ir,{})})]}),r.jsx($t,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Cr(){return r.jsx(Q,{children:r.jsxs(It,{children:[r.jsx(Ce,{path:"/demo",element:r.jsx(st,{})}),r.jsx(Ce,{path:"/tiling-demo",element:r.jsx(st,{})}),r.jsx(Ce,{path:"*",element:r.jsx(Tr,{})})]})})}const Rr=Mt.createRoot(document.getElementById("root"));Rr.render(r.jsx(A.StrictMode,{children:r.jsx(Q,{children:r.jsx(wn,{children:r.jsx(kn,{children:r.jsx(Wt,{children:r.jsx(Cr,{})})})})})}));
