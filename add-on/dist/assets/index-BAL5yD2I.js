import{b as D,R as A,j as r,I as z,r as T,l as at,P as wt,W as yt,d as bt,e as At,f as St,h as Tt,i as Ct,k as Rt,m as jt,n as Nt,o as Lt,T as kt,p as _t,s as Ot,y as Dt,q as vt,t as $t,u as Ce,L as It,v as Mt,B as Wt}from"./react-vendor-DZAsZpFh.js";import{D as F}from"./date-vendor-BDx6lZXm.js";import{f as Y}from"./vendor-D_ND1KRz.js";import{m as Pt,a as ct,b as Bt,c as Vt,d as Ut,e as Ft,f as $e,g as Gt,h as zt,i as Yt,j as Ht,k as Kt,l as qt,n as Jt,o as Xt,p as Qt,q as Zt,r as en,s as tn,t as Be,u as nn,v as on}from"./ui-vendor-CHQCwb4U.js";import{a as V,q as rn}from"./utils-vendor-OgzBtw9T.js";import{t as sn}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=t(i);fetch(i.href,c)}})();const an=D.div`
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
`,he=({visible:e,children:n,onClick:t,onClose:o,fullsize:i=!1})=>{const c=o||t,a=m=>{m.stopPropagation(),m.preventDefault(),c()};return A.useEffect(()=>{if(e){const m=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${m}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,m)}}},[e]),e?r.jsxs(an,{onClick:t,children:[r.jsx("div",{className:"close",onClick:a,children:r.jsx(z,{path:Pt,size:2})}),r.jsx("div",{className:Y("content",{fullsize:i}),onClick:m=>m.stopPropagation(),children:n})]}):null};let lt=!0;const cn=e=>{lt=!!e};let we=!1,K=[],le=0;const de=100,Ve=50,ke=()=>{if(K.length===0||we)return;const e=K.shift(),n=Date.now();n-le>=de?ce(e.level,e.message,e.metadata):(K.unshift(e),setTimeout(ke,de-(n-le)))},ce=(e,n,t=null)=>{if(!lt)return;if(we){K.length<Ve&&K.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const o=Date.now();if(o-le<de){K.length<Ve&&(K.push({level:e,message:n,metadata:t,timestamp:o}),K.length===1&&setTimeout(ke,de-(o-le)));return}setTimeout(async()=>{we=!0,le=Date.now();try{const c=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,a={level:e,message:n,...t&&{metadata:t}};await V.create({timeout:2e3}).post(c,a)}catch{K.length>10&&(K=[])}finally{we=!1,K.length>0&&setTimeout(ke,de)}},0)},pe=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},ge=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},L={log:(...e)=>{const n=pe(e),t=ge(e);n&&ce("INFO",n,t)},error:(...e)=>{console.error(...e);const n=pe(e),t=ge(e);n&&ce("ERROR",n,t)},warn:(...e)=>{const n=pe(e),t=ge(e);n&&ce("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=pe(e),t=ge(e);n&&ce("INFO",n,t)}},ln=3e4,dn=1e4,Ue=6e4,un=1e3,fn=5e3,hn=2e3,Fe=45e3,pn=6e5,gn=1e4,mn=15e3,Ie=3e3,xn={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},En=!1,_e="hass-family-calendar-config",wn=()=>{const e=(n,t=void 0)=>{const o=xn[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},Re=()=>{try{if(typeof window>"u"||!window.localStorage)return null;const e=localStorage.getItem(_e);if(e){const n=JSON.parse(e);return L.debug("Loaded cached config from localStorage"),n}}catch(e){L.warn("Failed to load cached config from localStorage:",e);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(_e)}catch{}}return null},yn=e=>{try{return typeof window>"u"||!window.localStorage?!1:(localStorage.setItem(_e,JSON.stringify(e)),L.debug("Saved config to localStorage"),!0)}catch(n){return L.warn("Failed to save config to localStorage:",n),!1}},ae=T.createContext(null),bn=({children:e})=>{const[n,t]=T.useState(()=>Re()||wn()),[o,i]=T.useState(!0),[c,a]=T.useState(null),[m,y]=T.useState(()=>!!Re()),u=T.useRef(!0),p=T.useRef(n),R=T.useRef(!1),b=T.useRef(!1);T.useEffect(()=>{p.current=n},[n]);const S=T.useCallback(async(s=!1)=>{if(R.current&&!s||!s&&b.current)return!1;R.current=!0,s||(b.current=!0),L.debug("Starting config load",{isReload:s,hasInitialized:b.current});const l=typeof window<"u"&&window.location?`${window.location.pathname.replace(/\/$/,"")}/api/config`:"/api/config";try{const g=await V.get(l,{timeout:fn});if(g.data&&typeof g.data=="object")if(typeof g.data=="object"&&!Array.isArray(g.data)){L.debug("Config loaded from API:",{hasCALENDARS:"CALENDARS"in g.data,CALENDARS:g.data.CALENDARS,CALENDARSCount:Array.isArray(g.data.CALENDARS)?g.data.CALENDARS.length:"not array",allKeys:Object.keys(g.data)});const d=p.current,w=JSON.stringify(g.data)!==JSON.stringify(d);L.debug("Updating config with new data from API:",{configChanged:w,CALENDARSCount:Array.isArray(g.data.CALENDARS)?g.data.CALENDARS.length:"not array",currentCALENDARSCount:Array.isArray(d?.CALENDARS)?d.CALENDARS.length:"not array",responseKeys:Object.keys(g.data).length,currentConfigKeys:Object.keys(d||{}).length}),w?(t(g.data),y(!1),a(null),En||yn(g.data)):(y(!1),a(null));const C=Object.keys(g.data).filter(j=>j.startsWith("ENABLE_")&&g.data[j]).map(j=>j.replace("ENABLE_",""));return L.info(`Configuration ${s?"reloaded":"loaded"} from API endpoint. Enabled features: ${C.length>0?C.join(", "):"none"}`,{enabledFeatures:C,totalConfigKeys:Object.keys(g.data).length}),s||i(!1),R.current=!1,!0}else throw new Error("Invalid config structure: expected object, got array");else throw new Error("Invalid config response: missing or invalid data")}catch(g){const d=g.response?.data?.detail||g.message||"Unknown error";if(s)return L.warn("Failed to reload config from API, keeping current config:",d),!1;{const w=Re();return w?(L.warn("Failed to load config from API, using cached config:",d),u.current&&(t(w),y(!0),a(d),i(!1)),!1):(u.current&&(a(d),i(!1)),!1)}}finally{R.current=!1}},[]),E=T.useRef(null),x=T.useCallback(async()=>{if(E.current)return E.current;const s=S(!0).finally(()=>{E.current=null});return E.current=s,s},[S]),f=T.useRef(!1);T.useEffect(()=>{if(!f.current)return f.current=!0,S(!1),()=>{u.current=!1}},[]),T.useEffect(()=>{const s=n.HASS_ACCESS_TOKEN||"";s&&typeof s=="string"&&s.trim()!==""&&s!=="undefined"&&s!=="null"?V.defaults.headers.common.Authorization=`Bearer ${s}`:delete V.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),T.useEffect(()=>{const s=n.ENABLE_LOGGING===!0;cn(s)},[n.ENABLE_LOGGING]);const h=T.useMemo(()=>({config:n,loading:o,configError:c,isUsingCachedConfig:m,reloadConfig:x}),[n,o,c,m,x]);return r.jsx(ae.Provider,{value:h,children:e})},U=()=>{const e=T.useContext(ae);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config},dt=()=>{const e=T.useContext(ae);if(!e)throw new Error("useConfigLoading must be used within ConfigProvider");return e.loading},ut=()=>{const e=T.useContext(ae);if(!e)throw new Error("useConfigError must be used within ConfigProvider");return e.configError},ft=()=>{const e=T.useContext(ae);if(!e)throw new Error("useIsUsingCachedConfig must be used within ConfigProvider");return e.isUsingCachedConfig},ht=()=>{const e=T.useContext(ae);if(!e)throw new Error("useReloadConfig must be used within ConfigProvider");return e.reloadConfig};let ie=0,ye=0,te=0;const re=[],pt=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},An=(e,n="")=>{const t=pt(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;te++,ie++,re.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),re.length>10&&re.shift();const i=[];return n&&i.push(`[${n}]`),i.push("🔴 Axios API Error:"),i.push(`Message: ${t.message}`),t.url&&i.push(`URL: ${t.url}`),t.status&&i.push(`HTTP Status: ${t.status}`),t.code&&i.push(`Error Code: ${t.code}`),t.isNetworkError&&(i.push("Type: Network Error (no response received)"),t.readyState!==void 0&&i.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&i.push("Type: Timeout Error"),t.config&&(i.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),i.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&i.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&i.push("Response Data:",t.responseData),i.push(`Request Stats: ${ye} success, ${te} errors (${ie} total)`),te>3&&re.length>0&&i.push("Recent errors pattern:",re.slice(-5)),L.error(...i),t},Sn=e=>{ye++,ie++,(ie%10===0||te>0)&&L.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:ie,stats:`${ye} success, ${te} errors`}),te>0&&ie%10===0&&ye>te&&(te=0,re.length=0)},Z=e=>{const n=pt(e);return n.isNetworkError?"Netzwerkfehler: Server nicht erreichbar":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};let Oe=null;const Ge=e=>{Oe=e},Tn=!1;V.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,L.debug("Axios Defaults State:",{baseURL:V.defaults.baseURL,timeout:V.defaults.timeout,hasAuthHeader:!!V.defaults.headers?.common?.Authorization,authHeaderLength:V.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(V.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||L.error("Axios Request Setup Error:",e),Promise.reject(e)));V.interceptors.response.use(e=>(e.config&&Sn(e.config),e),e=>{const n=e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"),t=e.config?.metadata?.skipConnectionCheck===!0;if(!n){const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(An(e,o),e.config?.metadata){const i=Date.now()-e.config.metadata.startTime;L.error("Request Duration:",`${i}ms`,"Request ID:",e.config.metadata.requestId)}!t&&Oe&&!e.response&&(e.code==="ERR_NETWORK"||e.code==="ECONNABORTED"||e.code==="ERR_CANCELED")&&Oe()}return Promise.reject(e)});const H=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;if(typeof window<"u"&&window.location){if(window.location.pathname.includes("/api/hassio_ingress/")){const i=window.location.pathname.match(/^(\/api\/hassio_ingress\/[^\/]+\/)/);if(i){const c=i[1],a=t.startsWith("/")?t.slice(1):t;return`${c}${a}`}}return t}return t},Cn=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},Rn=(e={})=>{const n=Cn(e);if(!n)return"";const t=n.startsWith("https://")?"wss://":"ws://",o=n.replace(/^https?:\/\//,"");return`${t}${o}/api/websocket`},jn=3e3,Nn=3e4,Ln=5e3,kn=()=>{const[e,n]=T.useState(!0),t=T.useRef(null),o=T.useRef(null),i=T.useRef(!1),c=T.useRef(Date.now()),a=T.useRef(!0);T.useEffect(()=>{a.current=e},[e]);const m=T.useCallback(async()=>{if(!i.current){i.current=!0,c.current=Date.now();try{const p=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`;await V.get(p,{timeout:Ln,metadata:{skipConnectionCheck:!0}}),a.current||L.info("Connection restored - backend is reachable"),n(!0),i.current=!1,o.current&&(clearInterval(o.current),o.current=null)}catch(u){!u.response&&(u.code==="ERR_NETWORK"||u.code==="ECONNABORTED")?(a.current&&L.warn("Connection lost - backend is not reachable"),n(!1),i.current=!1,o.current||(o.current=setInterval(()=>{m()},Nn))):(a.current||L.info("Connection restored - backend responded (with error)"),n(!0),i.current=!1,o.current&&(clearInterval(o.current),o.current=null))}}},[]),y=T.useCallback(()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{m()},jn)},[m]);return T.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&y()};return document.addEventListener("visibilitychange",u),()=>{document.removeEventListener("visibilitychange",u)}},[y]),T.useEffect(()=>{const u=setTimeout(()=>{m()},1e3);return()=>{clearTimeout(u)}},[m]),T.useEffect(()=>()=>{t.current&&clearTimeout(t.current),o.current&&clearInterval(o.current)},[]),{isConnected:e,triggerCheck:y}},gt=T.createContext(null),_n=({children:e})=>{const n=kn(),t=ht(),o=T.useRef(!1),i=T.useRef(null),c=T.useRef(!1);return T.useEffect(()=>(Ge(n.triggerCheck),()=>{Ge(null)}),[n.triggerCheck]),T.useEffect(()=>{const a=n.isConnected;if(!a){o.current=!0,i.current&&(clearTimeout(i.current),i.current=null);return}return o.current&&a&&!c.current&&(i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{c.current||(c.current=!0,t().then(()=>{o.current=!1}).catch(m=>{L.warn("Failed to reload config after connection restore:",m)}).finally(()=>{c.current=!1,i.current=null}))},hn)),()=>{i.current&&(clearTimeout(i.current),i.current=null)}},[n.isConnected,t]),r.jsx(gt.Provider,{value:n,children:e})},Me=()=>{const e=T.useContext(gt);if(!e)throw new Error("useConnectionStateContext must be used within ConnectionStateProvider");return e},ze=3,On=e=>e.code==="ECONNABORTED"||e.code==="ERR_NETWORK"||e.message?.includes("timeout"),se=({entityId:e,enabled:n=!0,config:t,initialState:o=null,extractState:i=c=>c.data.state})=>{const[c,a]=A.useState(o),[m,y]=A.useState(!1),{isConnected:u}=Me(),p=A.useRef(!1),[R,b]=A.useState(0);A.useEffect(()=>{u?p.current&&(p.current=!1,b(x=>x+1)):p.current=!0},[u]);const S=n&&!!e,E=e?H(`/api/states/${e}`,t):null;return A.useEffect(()=>{if(!S||!E)return;let x=!0;const f=new AbortController;return(async()=>{for(let s=0;s<ze;s++)try{const l=await V(E,{signal:f.signal});x&&(a(i(l)),y(!1));return}catch(l){if(f.signal.aborted)return;if(On(l)&&s<ze-1){const g=1e3*Math.pow(2,s);await new Promise(d=>setTimeout(d,g));continue}x&&y(Z(l));return}})(),()=>{x=!1,f.abort()}},[S,E,e,R]),[c,m,a]},Dn=()=>{const e=U(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",o=n&&t,[i,c]=se({entityId:t,enabled:o,config:e,initialState:null,extractState:a=>{const m=a.data.attributes.store;return m!==void 0?m:[]}});return[i,c]},vn=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=H(`/api/states/${t}`,n);V.post(o,{state:new Date,attributes:{store:e}}).catch(i=>{L.error("Failed to store everyday calendar data:",i)})},Ye=D.div` 

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
`,$n=({on:e,month:n,day:t})=>{const[o,i]=e,c=o.indexOf(`${n}-${t}`),a=c>-1,m=()=>{i(a?o.toSpliced(c,1):[...o,`${n}-${t}`])};return r.jsx("div",{className:Y("dot",{on:a}),onClick:()=>m()})},In=()=>{const e=U();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let u=1;u<13;u++){const p=new Date(t,u,0).getDate();for(let R=1;R<=p;R++)o.push({month:u,day:R})}const i=Array.from({length:31},(u,p)=>p+1),c=Array.from({length:12},(u,p)=>p+1),a=A.useState(void 0),[m,y]=Dn();return A.useEffect(()=>{m!==null&&a[1](m)},[m]),A.useEffect(()=>{a[0]!==void 0&&vn(a[0],e)},[a[0],e]),a[0]!==void 0?r.jsxs(Ye,{children:[r.jsx("h2",{children:"Jeden Tag ein bißchen"}),y!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:y instanceof Error?y.message:String(y)})]}),r.jsxs("div",{className:"calendar",children:[i.map((u,p)=>r.jsx("div",{style:{gridArea:`${u+1} / 1 / ${u+1} / 1`},children:u},p)),c.map((u,p)=>r.jsx("div",{style:{gridArea:`1 / ${u+1} / 1 / ${u+1}`},children:u},p)),o.map((u,p)=>r.jsx("div",{style:{gridArea:`${u.day+1} / ${u.month+1} / ${u.day+1} / ${u.month+1}`},children:r.jsx($n,{on:a,month:u.month,day:u.day})},p))]})]}):r.jsx(Ye,{className:"loading",children:y!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:y instanceof Error?y.message:String(y)})]}):r.jsx(at,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},Mn=D.div`
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
  }`,Wn=()=>{const[e,n]=A.useState(F.now()),[t,o]=A.useState(!1),i=T.useCallback(()=>o(!0),[]),c=T.useCallback(()=>o(!1),[]);return A.useEffect(()=>{const a=setInterval(()=>n(F.now()),1e3);return()=>clearInterval(a)},[]),r.jsxs(r.Fragment,{children:[r.jsxs(Mn,{onClick:i,children:[e.toFormat("HH"),r.jsx("span",{children:":"}),e.toFormat("mm")]}),r.jsx(he,{visible:t,onClick:c,fullsize:!0,children:r.jsx(In,{})})]})},Pn=T.memo(Wn);function mt({onReady:e,enabled:n=!0,checkBackendConnection:t=!0,reconnectStrategy:o="simple",maxReconnectAttempts:i=5,reconnectDelay:c=2e3,logPrefix:a="WebSocket",dependencies:m=[]}){const y=U(),u=Me(),p=t?u?.isConnected:!0,[R,b]=A.useState(!1),[S,E]=A.useState(!1),x=A.useRef(null),f=A.useRef(null),h=A.useRef(!0),s=A.useRef(null),l=A.useRef(null),g=A.useRef(null),d=A.useRef(0),w=A.useRef(!1),C=A.useRef(!1),j=A.useRef(new Map),N=A.useRef(null),k=A.useRef(null),O=A.useRef(null),M=A.useRef(p);M.current=p;const _=A.useCallback(()=>{const v=x.current;if(f.current,s.current&&(clearTimeout(s.current),s.current=null),l.current&&(clearTimeout(l.current),l.current=null),g.current&&(clearTimeout(g.current),g.current=null),N.current&&(clearInterval(N.current),N.current=null),k.current&&(clearTimeout(k.current),k.current=null),v&&v.readyState===WebSocket.OPEN&&(j.current.forEach((B,W)=>{try{v.send(JSON.stringify({type:"unsubscribe_entity",entity_id:W}))}catch{}}),j.current.clear()),v){try{v.close()}catch{}x.current=null}f.current=null},[a]),P=A.useCallback(async()=>{if(!(!n||!h.current)&&!(t&&!M.current)&&!w.current){x.current&&_(),w.current=!0,E(!0);try{let v;if(!Tn){if(v=Rn(y),!v){const W=typeof window<"u"&&window.location.protocol==="https:"?"wss:":"ws:",I=typeof window<"u"&&window.location.host?window.location.host:"";v=`${W}//${I}/api/websocket`}}if(!v){L.error(`Failed to build WebSocket URL for ${a} - cannot connect`),h.current&&b("WebSocket URL konnte nicht erstellt werden."),w.current=!1,E(!1);return}L.debug(`${a} connecting to: ${v}`);const B=new WebSocket(v);x.current=B,B.onopen=()=>{if(!h.current){B.close();return}if(L.debug(`${a} connection opened`),d.current=0,C.current=!1,g.current&&(clearTimeout(g.current),g.current=null),h.current&&b(!1),w.current=!1,E(!1),e)try{const W=e(B,j);f.current=W}catch(W){L.error(`Failed to subscribe for ${a}:`,W),h.current&&b(W instanceof Error?W.message:String(W))}N.current&&clearInterval(N.current),N.current=setInterval(()=>{if(B.readyState===WebSocket.OPEN){try{B.send(JSON.stringify({type:"ping"}))}catch{return}k.current=setTimeout(()=>{L.warn(`${a} heartbeat timeout — closing stale connection`);try{B.close(4e3,"heartbeat timeout")}catch{}},dn)}},ln)},B.onmessage=W=>{try{const I=JSON.parse(W.data);if(I.type==="state_update"){const G=I.entity_id,ee=j.current.get(G);ee&&ee(I)}else if(I.type==="state_response"){const G=I.entity_id,ee=j.current.get(G);ee&&ee(I)}else I.type==="pong"?k.current&&(clearTimeout(k.current),k.current=null):I.type==="error"&&(L.error(`${a} received error:`,I.message),h.current&&b(I.message))}catch(I){L.error(`Error handling message for ${a}:`,I)}},B.onclose=W=>{if(h.current&&!w.current){L.debug(`${a} disconnected (code: ${W.code}, wasClean: ${W.wasClean})`),x.current=null,j.current.clear(),f.current=null,s.current&&(clearTimeout(s.current),s.current=null);const I=!W.wasClean&&(W.code===1006||d.current>0);if(I&&d.current>=5&&!C.current){L.warn(`Backend appears to be down for ${a} (${d.current} failed attempts), switching to periodic retry every ${Ue/1e3}s`),C.current=!0,h.current&&b("Backend nicht erreichbar. Wiederherstellungsversuche alle 60 Sekunden.");const G=()=>{g.current=setTimeout(()=>{h.current&&!w.current&&M.current&&C.current&&(L.debug(`Periodic retry attempt for ${a} (backend might be back up)`),d.current=0,O.current(),G())},Ue)};G();return}if(C.current)return;if(o==="exponential"&&d.current>=i){L.warn(`Max reconnection attempts (${i}) reached for ${a}, stopping reconnection`),h.current&&b("Verbindung verloren. Bitte Seite neu laden.");return}if(M.current)if(o==="exponential"){const G=I?c*10:c,ee=Math.min(G*Math.pow(2,d.current),6e4);d.current++,s.current=setTimeout(()=>{h.current&&!w.current&&M.current&&(L.debug(`Attempting to reconnect ${a} (attempt ${d.current}/${i})`),O.current())},ee)}else{const G=I?c*10:c;s.current=setTimeout(()=>{h.current&&!w.current&&M.current&&(L.debug(`Attempting to reconnect ${a}`),O.current())},G)}else L.debug(`Skipping reconnection for ${a} - waiting for backend connection`)}},B.onerror=W=>{L.error(`WebSocket error for ${a}:`,W),w.current=!1,E(!1),h.current&&b("WebSocket-Verbindungsfehler")}}catch(v){if(w.current=!1,E(!1),h.current&&(L.error(`Failed to setup ${a} connection:`,v),b(v instanceof Error?v.message:String(v)),M.current))if(o==="exponential"&&d.current<i){const B=Math.min(c*Math.pow(2,d.current),3e4);d.current++,s.current=setTimeout(()=>{h.current&&!w.current&&M.current&&(L.debug(`Attempting to reconnect ${a} after error (attempt ${d.current}/${i})`),O.current())},B)}else o==="simple"?s.current=setTimeout(()=>{h.current&&!w.current&&M.current&&O.current()},c):(L.warn(`Max reconnection attempts (${i}) reached for ${a}, stopping reconnection`),h.current&&b("Verbindung fehlgeschlagen. Bitte Seite neu laden."))}}},[n,t,y,o,i,c,a,e,_]);return O.current=P,A.useEffect(()=>{n&&p&&!x.current&&!w.current&&P()},[n,p,P,...m]),A.useEffect(()=>{n&&p&&!x.current&&!w.current&&(l.current&&(clearTimeout(l.current),l.current=null),l.current=setTimeout(()=>{h.current&&M.current&&!x.current&&!w.current&&(C.current=!1,d.current=0,g.current&&(clearTimeout(g.current),g.current=null),P())},un))},[n,p,P,a]),A.useEffect(()=>()=>{h.current=!1,_()},[_]),{connection:x.current,error:R,isConnecting:S}}const ue=({entityId:e,enabled:n,onStateUpdate:t,logPrefix:o,wsOptions:i={}})=>{const{error:c}=mt({enabled:n&&!!e,logPrefix:o,...i,onReady:(a,m)=>{const y=u=>{u.state!==void 0&&t(u.state)};return m.current.set(e,y),a.readyState===WebSocket.OPEN&&(a.send(JSON.stringify({type:"subscribe_entity",entity_id:e})),L.debug(`Subscribed to ${o} state changes`)),()=>{m.current.delete(e),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"unsubscribe_entity",entity_id:e}))}},dependencies:[n,e]});return{error:c}},Bn=()=>{const e=U(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"",o=n&&t,[i,c,a]=se({entityId:t,enabled:o,config:e,initialState:"off"}),{error:m}=ue({entityId:t,enabled:o,onStateUpdate:a,logPrefix:"doorbell"});return[i,c||m||!1]},Vn=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&V.post(H("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to unlatch front door:",t)})},Un=async(e,n,t)=>{const o=H(`/api/states/${e}`,n);L.debug(`Fetching camera token for ${e} (aborted: ${t?.aborted})`);const i=await V(o,{timeout:1e4,signal:t}),c=i.data?.attributes?.access_token||null;if(!c){const a=i.data?.state||"unknown",m=Object.keys(i.data?.attributes||{});L.warn(`Camera entity ${e} has no access_token attribute. State: ${a}, attributes: [${m.join(", ")}]`)}return{entityId:e,accessToken:c,error:c?null:`Kein access_token für ${e}`}},Fn=(e,n)=>new Promise(t=>{if(n?.aborted){t();return}const o=setTimeout(t,e);n?.addEventListener("abort",()=>{clearTimeout(o),t()},{once:!0})}),He=async(e,n,t)=>{if(!e||e.length===0)return{tokens:{},error:null};const o=t?null:new AbortController,i=t||o.signal,c=3;try{const a=e.map(async p=>{let R=null,b=null;for(let E=0;E<c;E++)try{return await Un(p,n,i)}catch(x){if(R=x,i.aborted)return{entityId:p,accessToken:null,error:"Abgebrochen"};const f=x.response?.status,h=x.code==="ECONNABORTED"||x.code==="ERR_NETWORK"||x.message?.includes("timeout"),s=f>=500,l=h||s;if(b=f?`HTTP ${f}: ${x.response?.data?.detail||x.message}`:`${x.code||"Error"}: ${x.message}`,l&&E<c-1){const g=1e3*Math.pow(2,E);if(L.debug(`Token fetch failed for ${p} (attempt ${E+1}): ${b}, retrying in ${g}ms...`),await Fn(g,i),i.aborted)return{entityId:p,accessToken:null,error:"Abgebrochen"};continue}return L.error(`Failed to fetch access token for ${p} (attempt ${E+1}/${c}): ${b}`),{entityId:p,accessToken:null,error:b}}const S=R?b||R.message:"Unknown error";return L.error(`Failed to fetch access token for ${p} after ${c} attempts: ${S}`),{entityId:p,accessToken:null,error:S}}),m=await Promise.all(a),y={},u=[];if(m.forEach(({entityId:p,accessToken:R,error:b})=>{R?y[p]=R:u.push(`${p}: ${b||"Kein Token"}`)}),Object.keys(y).length===0&&u.length>0){const p=u.join(" | ");return L.error(`Camera token fetch failed for all cameras: ${p}`),{tokens:{},error:`Kamera-Token Fehler: ${p}`}}return{tokens:y,error:null}}catch(a){return i.aborted?{tokens:{},error:null}:(L.error("Failed to fetch camera access tokens:",a),{tokens:{},error:Z(a)})}},Gn=(e,n=null,t={})=>{if(!e)return null;let o;const i=t.HASS_HOST||"";if(i&&i!=="undefined"&&i!=="null")o=i.replace(/\/$/,"");else if(typeof window<"u"&&window.location)o=window.location.origin;else return null;const c=`${o}/api/camera_proxy_stream/${e}`;if(n){const a=c.includes("?")?"&":"?";return`${c}${a}token=${encodeURIComponent(n)}`}return c},$={portrait:360/480,landscape:1920/1072,wide:770/216};function zn(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function xt(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,i=zn(e);return o===1?Yn(e[0],n,t):o===2?Hn(i,e,n,t):o===3?Kn(i,e,n,t):o===4?qn(i,e,n,t):{videos:[],totalArea:0,efficiency:0}}function Yn(e,n,t){const o=$[e.orientation];let i,c;const a=n/t;return o>a?(i=n,c=n/o):(c=t,i=t*o),{videos:[{x:(n-i)/2,y:(t-c)/2,width:i,height:c,orientation:e.orientation}],totalArea:i*c,efficiency:i*c/(n*t)*100}}function Hn(e,n,t,o){if(e.portrait>0)return We(e,n,t,o);const i=[];e.landscape>0&&i.push("landscape"),e.wide>0&&i.push("wide");const c=i[0]||n[0].orientation,a=i[1]||n[1].orientation,m=$[c],y=$[a];if(e.landscape===1&&e.wide===1){const E=$.landscape,x=$.wide,f=t,h=f/E,s=f/x,l=h+s;let g,d,w;if(l<=o)g=h,d=s,w=f;else{const M=o/l;g=h*M,d=s*M,w=d*x}const C=(t-w)/2,N=J(n,[{x:C,y:0,width:w,height:d,orientation:"wide"},{x:C,y:d,width:w,height:g,orientation:"landscape"}]),k=w*g+w*d,O=k/(t*o)*100;return{videos:N,totalArea:k,efficiency:O}}if(e.wide===2){const E=$.wide,x=t,f=x/E,h=f*2;let s;h<=o?s=f:s=o/2;const g=J(n,[{x:0,y:0,width:x,height:s,orientation:"wide"},{x:0,y:s,width:x,height:s,orientation:"wide"}]),d=x*s*2,w=d/(t*o)*100;return{videos:g,totalArea:d,efficiency:w}}const u=[()=>{const E=t,x=E/2,f=E/2,h=x/m,s=f/y;return Math.max(h,s)<=o?{positions:[{x:0,y:(o-h)/2,width:x,height:h,orientation:c},{x,y:(o-s)/2,width:f,height:s,orientation:a}],totalArea:x*h+f*s}:null},()=>{const E=o,x=E/2,f=E/2,h=x*m,s=f*y;return Math.max(h,s)<=t?{positions:[{x:(t-h)/2,y:0,width:h,height:x,orientation:c},{x:(t-s)/2,y:x,width:s,height:f,orientation:a}],totalArea:h*x+s*f}:null}];let p=null,R=0;for(const E of u){const x=E();x&&x.totalArea>R&&(R=x.totalArea,p=x)}if(!p){const E=t/2,x=t/2,f=Math.min(E/m,o),h=Math.min(x/y,o);p={positions:[{x:0,y:(o-f)/2,width:E,height:f,orientation:c},{x:E,y:(o-h)/2,width:x,height:h,orientation:a}],totalArea:E*f+x*h}}const b=J(n,p.positions),S=p.totalArea/(t*o)*100;return{videos:b,totalArea:p.totalArea,efficiency:S}}function We(e,n,t,o){const i=e.portrait,c=n.length-i;if((i===3||i===4)&&c===0){const S=$.portrait,E=t/i,x=E/S,f=x<o?(o-x)/2:0,h=Math.min(x,o),s=[];let l=0;for(let w=0;w<i;w++){const C=Math.min(E,h*S);s.push({x:w*E+(E-C)/2,y:f,width:C,height:h,orientation:"portrait"}),l+=C*h}const g=J(n,s),d=l/(t*o)*100;return{videos:g,totalArea:l,efficiency:d}}n.filter(S=>S.orientation==="portrait");const a=n.filter(S=>S.orientation!=="portrait"),m=i>0?Math.min(t*.4,t*.5):0,y=t-m,u=[];let p=0;if(i===2&&c===0){const S=$.portrait,E=t/2,x=E/S,f=o;let h,s;x<=f?(s=x,h=E):(s=f,h=f*S);const l=(o-s)/2;u.push({x:(E-h)/2,y:l,width:h,height:s,orientation:"portrait"}),u.push({x:E+(E-h)/2,y:l,width:h,height:s,orientation:"portrait"}),p=h*s*2}else if(i===1&&c===1){const S=$.portrait,E=a[0],x=$[E.orientation],f=S+x,h=t*(S/f),s=t*(x/f),l=h/S,g=s/x,d=Math.min(o,Math.min(l,g)),w=(o-d)/2;u.push({x:0,y:w,width:h,height:d,orientation:"portrait"}),u.push({x:h,y:w,width:s,height:d,orientation:E.orientation}),p=h*d+s*d}else if(i===1&&c===2&&e.landscape===1&&e.wide===1){const S=$.portrait,E=$.wide,x=$.landscape,f=o,h=o*S,s=o/(1/E+1/x),l=s/E,g=s/x,d=h+s;if(Math.abs(d-t)<.1)u.push({x:0,y:0,width:h,height:f,orientation:"portrait"}),p+=h*f,a.find(N=>N.orientation==="wide")&&(u.push({x:0+h,y:0,width:s,height:l,orientation:"wide"}),p+=s*l),a.find(N=>N.orientation==="landscape")&&(u.push({x:0+h,y:l,width:s,height:g,orientation:"landscape"}),p+=s*g);else{const w=t/d,C=h*w,j=C/S,N=s*w,k=o/j;let O=C*k,M=o,_=N*k,P=_/E,v=_/x,B=O+_;if(B>t){const X=t/B;O=O*X,M=O/S,_=_*X,P=_/E,v=_/x,B=O+_,B>t&&(_=t-O,P=_/E,v=_/x)}const W=O+_;if(W>t){const X=t/W;O=O*X,M=O/S,_=_*X,P=_/E,v=_/x}const I=0;u.push({x:I,y:0,width:O,height:M,orientation:"portrait"}),p+=O*M,a.find(X=>X.orientation==="wide")&&(u.push({x:I+O,y:0,width:_,height:P,orientation:"wide"}),p+=_*P),a.find(X=>X.orientation==="landscape")&&(u.push({x:I+O,y:P,width:_,height:v,orientation:"landscape"}),p+=_*v)}}else if(i===1&&c===3){const S=$.portrait,E=o,x=E*S,f=x,h=t-f;u.push({x:0,y:0,width:x,height:E,orientation:"portrait"}),p+=x*E;const s=o/3;for(let l=0;l<a.length;l++){const g=a[l],d=$[g.orientation],w=s,C=h;let j,N;C/d<=w?(j=C,N=j/d):(N=w,j=N*d);const k=l*s+(s-N)/2;u.push({x:f+(h-j)/2,y:k,width:j,height:N,orientation:g.orientation}),p+=j*N}}else if(i===2&&c===1){const S=$.portrait,E=a[0],x=$[E.orientation],f=o/2,h=f*S,s=t-h,l=o*x;let g,d;l<=s?(d=o,g=d*x):(g=s,d=g/x);const w=h,C=f,j=(o-d)/2,N=(o/2-C)/2,k=o/2+(o/2-C)/2;u.push({x:0,y:j,width:g,height:d,orientation:E.orientation}),p+=g*d,u.push({x:s,y:N,width:w,height:C,orientation:"portrait"}),p+=w*C,u.push({x:s,y:k,width:w,height:C,orientation:"portrait"}),p+=w*C}else if(i===1&&c===2){const S=$.portrait,E=o,x=E*S,f=x,h=t-f;u.push({x:0,y:0,width:x,height:E,orientation:"portrait"}),p+=x*E;const s=o/2;for(let l=0;l<a.length;l++){const g=a[l],d=$[g.orientation],w=s,C=h;let j,N;C/d<=w?(j=C,N=j/d):(N=w,j=N*d);const k=l*s+(s-N)/2;u.push({x:f+(h-j)/2,y:k,width:j,height:N,orientation:g.orientation}),p+=j*N}}else{const S=i;if(S>0){const E=o/S,x=$.portrait;for(let f=0;f<S;f++){const h=Math.min(E,m/x),s=h*x,l=f*E+(E-h)/2;u.push({x:(m-s)/2,y:l,width:s,height:h,orientation:"portrait"}),p+=s*h}}if(a.length>0){const E=o/a.length;for(let x=0;x<a.length;x++){const f=a[x],h=$[f.orientation],s=E,l=y;let g,d;l/h<=s?(g=l,d=g/h):(d=s,g=d*h);const w=x*E+(E-d)/2;u.push({x:m+(y-g)/2,y:w,width:g,height:d,orientation:f.orientation}),p+=g*d}}}const R=J(n,u),b=p/(t*o)*100;return{videos:R,totalArea:p,efficiency:b}}function J(e,n){const t=new Array(n.length),o=new Set,i=new Set;for(let m=0;m<n.length;m++){const y=n[m];for(let u=0;u<e.length;u++)if(!o.has(u)&&e[u].orientation===y.orientation){t[m]={...y,orientation:e[u].orientation},o.add(u),i.add(m);break}}const c=[];for(let m=0;m<n.length;m++)i.has(m)||c.push(m);let a=0;for(let m=0;m<e.length;m++)if(!o.has(m)&&a<c.length){const y=c[a];t[y]={...n[y],orientation:e[m].orientation},a++}return t}function Kn(e,n,t,o){if(e.portrait>0)return We(e,n,t,o);if(e.landscape===2&&e.wide===1){const f=$.landscape,h=$.wide,s=t,l=s/h,g=o-l,d=t/2,w=d/f;let C,j,N,k;if(l<=o&&w<=g)C=s,j=l,N=d,k=w;else{const W=o/(l+w),I=Math.min(1,W);j=l*I,C=j*h,k=w*I,N=k*f}const O=(t-C)/2,M=j+(g-k)/2,P=J(n,[{x:O,y:0,width:C,height:j,orientation:"wide"},{x:0,y:M,width:N,height:k,orientation:"landscape"},{x:N,y:M,width:N,height:k,orientation:"landscape"}]),v=C*j+N*k*2,B=v/(t*o)*100;return{videos:P,totalArea:v,efficiency:B}}if(e.landscape===1&&e.wide===2){const f=$.landscape,h=$.wide,s=t/2,l=s/h,d=o-l,w=d*f;let C,j,N,k;if(l<=o&&w<=t&&l+d<=o)C=s,j=l,N=w,k=d;else{const I=l+d,G=o/I;C=s,j=l*G,k=d*G,N=k*f}const O=0,M=t/2,_=(t-N)/2,v=J(n,[{x:O,y:0,width:C,height:j,orientation:"wide"},{x:M,y:0,width:C,height:j,orientation:"wide"},{x:_,y:j,width:N,height:k,orientation:"landscape"}]),B=C*j*2+N*k,W=B/(t*o)*100;return{videos:v,totalArea:B,efficiency:W}}if(e.wide===3){const f=$.wide,h=t/2,s=h/f,g=o-s,d=g*f;let w,C,j,N;if(s<=o&&d<=t&&s+g<=o)w=h,C=s,j=d,N=g;else{const W=s+g,I=o/W;w=h,C=s*I,N=g*I,j=N*f,j>t&&(j=t,N=j/f)}const k=0,O=t/2,M=(t-j)/2,P=J(n,[{x:k,y:0,width:w,height:C,orientation:"wide"},{x:O,y:0,width:w,height:C,orientation:"wide"},{x:M,y:C,width:j,height:N,orientation:"wide"}]),v=w*C*2+j*N,B=v/(t*o)*100;return{videos:P,totalArea:v,efficiency:B}}if(e.landscape===3){const f=$.landscape,h=t/(f*1.5),s=Math.min(o,h),l=s/2,g=s,d=l*f,w=g*f,C=(o-s)/2,j=[{x:0,y:C,width:d,height:l,orientation:"landscape"},{x:0,y:C+l,width:d,height:l,orientation:"landscape"},{x:d,y:C,width:w,height:g,orientation:"landscape"}],N=J(n,j),k=d*s+w*s,O=k/(t*o)*100;return{videos:N,totalArea:k,efficiency:O}}const i=[];if(e.landscape>0)for(let f=0;f<e.landscape;f++)i.push("landscape");if(e.wide>0)for(let f=0;f<e.wide;f++)i.push("wide");const c=i[0]||n[0].orientation,a=i[1]||n[1].orientation,m=i[2]||n[2].orientation,y=$[c],u=$[a],p=$[m],R=[()=>{const f=t*.6,h=t*.4,s=f/y,l=h/u,g=h/p,d=l+g;return s<=o&&d<=o?{positions:[{x:0,y:(o-s)/2,width:f,height:s,orientation:c},{x:f,y:0,width:h,height:l,orientation:a},{x:f,y:l,width:h,height:g,orientation:m}],totalArea:f*s+h*l+h*g}:null},()=>{const f=o*.5,h=o*.5,s=f*y,l=f*u,g=h*p;return s+l<=t&&g<=t?{positions:[{x:0,y:0,width:s,height:f,orientation:c},{x:s,y:0,width:l,height:f,orientation:a},{x:(t-g)/2,y:f,width:g,height:h,orientation:m}],totalArea:s*f+l*f+g*h}:null},()=>{const f=t/3,h=f/y,s=f/u,l=f/p;return Math.max(h,s,l)<=o?{positions:[{x:0,y:(o-h)/2,width:f,height:h,orientation:c},{x:f,y:(o-s)/2,width:f,height:s,orientation:a},{x:f*2,y:(o-l)/2,width:f,height:l,orientation:m}],totalArea:f*h+f*s+f*l}:null}];let b=null,S=0;for(const f of R){const h=f();h&&h.totalArea>S&&(S=h.totalArea,b=h)}if(!b){const f=t/3,h=Math.min(f/y,o),s=Math.min(f/u,o),l=Math.min(f/p,o);b={positions:[{x:0,y:(o-h)/2,width:f,height:h,orientation:c},{x:f,y:(o-s)/2,width:f,height:s,orientation:a},{x:f*2,y:(o-l)/2,width:f,height:l,orientation:m}],totalArea:f*h+f*s+f*l}}const E=J(n,b.positions),x=b.totalArea/(t*o)*100;return{videos:E,totalArea:b.totalArea,efficiency:x}}function qn(e,n,t,o){if(e.portrait>0)return We(e,n,t,o);const i=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)i.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)i.push("wide");const c=i[0]||n[0].orientation,a=i[1]||n[1].orientation,m=i[2]||n[2].orientation,y=i[3]||n[3].orientation,u=$[c],p=$[a],R=$[m],b=$[y],S=[()=>{const s=t/2,l=o/2,g=Math.min(s,l*u),d=g/u,w=Math.min(s,l*p),C=w/p,j=Math.min(s,l*R),N=j/R,k=Math.min(s,l*b),O=k/b;return{positions:[{x:(s-g)/2,y:(l-d)/2,width:g,height:d,orientation:c},{x:s+(s-w)/2,y:(l-C)/2,width:w,height:C,orientation:a},{x:(s-j)/2,y:l+(l-N)/2,width:j,height:N,orientation:m},{x:s+(s-k)/2,y:l+(l-O)/2,width:k,height:O,orientation:y}],totalArea:g*d+w*C+j*N+k*O}},()=>{const s=t*.6,l=t*.4,g=s/u,d=o/3,w=Math.min(l,d*p),C=w/p,j=Math.min(l,d*R),N=j/R,k=Math.min(l,d*b),O=k/b;return g<=o?{positions:[{x:0,y:(o-g)/2,width:s,height:g,orientation:c},{x:s,y:0,width:w,height:C,orientation:a},{x:s,y:d,width:j,height:N,orientation:m},{x:s,y:d*2,width:k,height:O,orientation:y}],totalArea:s*g+w*C+j*N+k*O}:null},()=>{const s=t/4,l=s/u,g=s/p,d=s/R,w=s/b;return Math.max(l,g,d,w)<=o?{positions:[{x:0,y:(o-l)/2,width:s,height:l,orientation:c},{x:s,y:(o-g)/2,width:s,height:g,orientation:a},{x:s*2,y:(o-d)/2,width:s,height:d,orientation:m},{x:s*3,y:(o-w)/2,width:s,height:w,orientation:y}],totalArea:s*l+s*g+s*d+s*w}:null}];let E=null,x=0;for(const s of S){const l=s();l&&l.totalArea>x&&(x=l.totalArea,E=l)}if(!E){const s=t/2,l=o/2,g=Math.min(l,s/u),d=Math.min(l,s/p),w=Math.min(l,s/R),C=Math.min(l,s/b);E={positions:[{x:(s-s)/2,y:(l-g)/2,width:s,height:g,orientation:c},{x:s+(s-s)/2,y:(l-d)/2,width:s,height:d,orientation:a},{x:(s-s)/2,y:l+(l-w)/2,width:s,height:w,orientation:m},{x:s+(s-s)/2,y:l+(l-C)/2,width:s,height:C,orientation:y}],totalArea:s*g+s*d+s*w+s*C}}const f=J(n,E.positions),h=E.totalArea/(t*o)*100;return{videos:f,totalArea:E.totalArea,efficiency:h}}const Ke=({tokensLoading:e,tokensError:n,refreshTokens:t})=>r.jsx("div",{className:"token-error",children:e?r.jsxs(r.Fragment,{children:[r.jsx(z,{path:ct,size:"48px",color:"#ffffff",className:"loading-spinner"}),r.jsx("div",{children:"Lade Token..."})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{children:n||"Kamera-Token nicht verfügbar"}),r.jsx("button",{onClick:o=>{o.stopPropagation(),t()},children:"Token neu laden"})]})}),Jn=({cameras:e,accessTokens:n,tokensLoading:t,tokensError:o,refreshTokens:i,showDoorCams:c,cameraImgRefs:a,openDoor:m,config:y})=>{if(e.length===0)return null;const u=e.map(x=>({orientation:x.orientation||"landscape"})),p=window.innerWidth,R=window.innerHeight-10,b=xt(u,p,R),S={portrait:e.filter(x=>(x.orientation||"landscape")==="portrait"),landscape:e.filter(x=>(x.orientation||"landscape")==="landscape"),wide:e.filter(x=>x.orientation==="wide")},E={portrait:0,landscape:0,wide:0};return b.videos.map((x,f)=>{const h=x.orientation,s=E[h],l=S[h][s];if(!l)return null;E[h]++;const g=n[l.entity_id]||null,d=!!g,w=Gn(l.entity_id,g,y),C=`${h}-${s}-${f}`,j={left:`${x.x}px`,top:`${x.y}px`,width:`${x.width}px`,height:`${x.height}px`};return!w&&!d?r.jsx("div",{className:"video-container",style:j,children:r.jsx(Ke,{tokensLoading:t,tokensError:o,refreshTokens:i})},C):w?r.jsxs("div",{className:"video-container",style:j,children:[d&&c&&r.jsx("img",{ref:N=>{const k=`${l.entity_id}-${f}`;N?a.current.set(k,N):a.current.delete(k)},src:w,className:h,alt:"Camera stream",crossOrigin:"anonymous"},`${l.entity_id}-${f}`),!d&&r.jsx(Ke,{tokensLoading:t,tokensError:o,refreshTokens:i}),r.jsx("div",{className:"video-overlay",onClick:()=>m()})]},C):null})},Xn=D.div`
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
`,Qn=()=>{const e=U(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[],[o,i]=A.useState(!1),[c]=Bn(),[a,m]=A.useState(void 0),[y,u]=A.useState(100),[p,R]=A.useState("0"),b=A.useMemo(()=>t.map(_=>_.entity_id).filter(Boolean),[t]),[S,E]=A.useState({}),[x,f]=A.useState(!1),[h,s]=A.useState(null),l=A.useRef(e);A.useEffect(()=>{l.current=e},[e]);const g=A.useRef(null);A.useEffect(()=>{if(o&&b.length>0){const _=new AbortController;return f(!0),s(null),He(b,l.current,_.signal).then(({tokens:P,error:v})=>{_.signal.aborted||(E(P),s(v),f(!1))}).catch(P=>{_.signal.aborted||(L.error("Failed to fetch camera tokens:",P),s(Z(P)),f(!1))}),()=>{_.abort()}}else o||(E({}),s(null),g.current?.abort())},[o,b.join(",")]);const d=A.useCallback(async()=>{if(b.length===0)return;g.current?.abort();const _=new AbortController;g.current=_,f(!0),s(null);try{const{tokens:P,error:v}=await He(b,l.current,_.signal);_.signal.aborted||(E(P),s(v))}catch(P){_.signal.aborted||(L.error("Failed to refresh camera tokens:",P),s(Z(P)))}finally{_.signal.aborted||f(!1)}},[b]),{isConnected:w}=Me(),C=A.useRef(!1);A.useEffect(()=>{w?C.current&&(C.current=!1,o&&b.length>0&&d()):C.current=!0},[w,o,b,d]),A.useEffect(()=>{if(!o||b.length===0)return;const _=setInterval(()=>{d()},pn);return()=>clearInterval(_)},[o,b,d]);const j=A.useRef(new Map),N=A.useCallback(()=>{j.current.forEach(_=>{_&&(_.src="data:,")}),j.current.clear()},[]);A.useEffect(()=>{if(c==="off"&&o){const _=window.setTimeout(()=>{N(),i(!1),m(void 0)},Fe);return m(_),R(Fe+"ms"),u(0),()=>{_&&window.clearTimeout(_)}}else c==="on"&&(R(0),u(100),i(!0))},[c,o]),A.useEffect(()=>{c==="on"&&a!==void 0&&(window.clearTimeout(a),R(0),u(100),m(void 0))},[a,c]);const[k,O]=A.useState(null),M=()=>{k===null?O("confirm"):k==="confirm"&&(O("opening"),Vn(e),setTimeout(()=>O(null),2e3))};return A.useEffect(()=>{if(k==="confirm"){const _=setTimeout(()=>{O(null)},3e3);return()=>{clearTimeout(_)}}},[k]),A.useEffect(()=>{o||O(null)},[o]),n?r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>{o&&N(),i(_=>!_)},children:"CCTV"}),r.jsx(he,{visible:o,onClick:M,onClose:()=>{N(),i(!1),O(null)},fullsize:!0,children:r.jsxs(Xn,{onClick:M,children:[r.jsx(wt,{completed:y,height:10,bgColor:a===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:p,transitionTimingFunction:"linear"}),r.jsx("div",{className:"grid",children:r.jsx(Jn,{cameras:t,accessTokens:S,tokensLoading:x,tokensError:h,refreshTokens:d,showDoorCams:o,cameraImgRefs:j,openDoor:M,config:e})}),k==="confirm"&&r.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),k==="opening"&&r.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]}):null},Zn=D.div`
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

`,eo=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>r.jsxs(Zn,{children:[r.jsxs("div",{className:"buttons",children:[r.jsx(z,{path:Bt,size:"32px",color:"#ffffff",onClick:n}),r.jsx(z,{path:Vt,size:"32px",color:"#ffffff",onClick:e}),r.jsx("button",{onClick:t,children:"Today"}),r.jsx(Qn,{})]}),r.jsx(Pn,{}),r.jsx(z,{path:ct,size:"32px",color:"#ffffff",className:Y("indicator")})]}),to=T.memo(eo),no=6e4,Pe=(e=no,n=void 0)=>{const[t,o]=A.useState(!0);return A.useEffect(()=>{const i=setInterval(()=>{o(c=>!c)},e);return()=>{clearInterval(i)}},[e,n]),t},oo={mdiDelete:Ft,mdiCake:Ut},ro=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return oo[n]||void 0},io=(e,n,t,o,i,c)=>V(i(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:65e3,signal:c}).then(a=>{!a.data||!Array.isArray(a.data)||a.data.forEach(m=>{const y="dateTime"in m.start?F.fromISO(m.start.dateTime):F.fromSQL(m.start.date);let u;"dateTime"in m.end?u=Math.floor(F.fromISO(m.end.dateTime).diff(n,"days").as("days")):u=Math.floor(F.fromSQL(m.end.date).diff(n,"days").as("days"))-1;const p=Math.floor(y.diff(n,"days").as("days"));u>=o.length&&(u=o.length-1);const R="dateTime"in m.start?"events":"allDay";if(p>=0&&p<o.length)for(let b=p;b<=u;b++)o[b][R]=[...o[b][R],{...m,icon:e.icon}]})}).catch(a=>{if(!(V.isCancel(a)||a.name==="AbortError"||a.code==="ERR_CANCELED"))throw a}),qe=new Map,so=300*1e3,ao=e=>e.toISODate(),co=(e,n,t,o,i,c,a,m,y)=>{const u=[0,1,2,3,4,5].map(E=>e.plus({days:E}).startOf("day"));u[6]=e.plus({days:6}).endOf("day");const p=ao(e),R=qe.get(p);if(R&&Date.now()-R.timestamp<so){y.current&&t(R.data);return}const b=u.map(E=>({date:E,allDay:[],events:[]}));if(!a||a.length===0){L.warn("loadAll: No calendars configured, skipping fetch",{calendars:a}),y.current&&(t(b),o(!1));return}L.debug("loadAll: Starting calendar fetch",{calendarsCount:a.length,calendars:a.map(E=>E.name),startDate:e.toISO(),endDate:u[6].toISO()});const S=new AbortController;i.current&&i.current.abort(),i.current=S;try{y.current&&o(!0);const E=a.map(x=>io(x,u[0],u[6],b,m,S.signal));Promise.all(E).then(()=>{y.current&&!S.signal.aborted&&(qe.set(p,{data:b,timestamp:Date.now()}),t(b),c(!1))}).catch(x=>{y.current&&!S.signal.aborted&&c(Z(x))}).finally(()=>{y.current&&!S.signal.aborted&&o(!1)})}catch(E){y.current&&!S.signal.aborted&&(c(Z(E)),o(!1))}},Je=[],lo=e=>{const n=U(),t=n.CALENDARS||[];A.useEffect(()=>{L.debug("useCalendarData: config changed",{hasCALENDARS:"CALENDARS"in n,CALENDARS:n.CALENDARS,CALENDARSCount:Array.isArray(n.CALENDARS)?n.CALENDARS.length:"not array",configKeys:Object.keys(n)})},[n]);const o=A.useMemo(()=>{const f=t.map(h=>({name:h.name,icon:ro(h.icon)}));return L.debug("Processing calendars from config (memo update):",{CALENDARS:t,count:t.length,processedCount:f.length,processed:f.map(h=>h.name)}),f},[t]);A.useEffect(()=>{L.debug("CALENDARS array changed:",{CALENDARS:t,count:t.length,calendarsMemoCount:o.length})},[t,o.length]);const i=A.useCallback(f=>H(`/api/calendars/${f}`,n),[n]),c=A.useCallback((f,h)=>`${i(f)}?${rn.stringify(h)}`,[i]),[a,m]=A.useState(Je),[y,u]=A.useState(!1),[p,R]=A.useState(!1),[b,S]=A.useState(null),E=T.useRef(null),x=T.useRef(!0);return Pe(6e4,"Calendar"),A.useEffect(()=>(x.current=!0,L.debug("useCalendarData effect triggered:",{startDate:e?.toISO(),calendarsCount:o.length,calendars:o.map(f=>f.name),hasStartDate:e!==void 0,hasCalendars:o.length>0}),e!==void 0&&o.length>0?((b===null||!b.equals(e))&&(m(Je),S(e)),L.debug("useCalendarData: Calling loadAll",{startDate:e.toISO(),calendarsCount:o.length}),co(e,a,m,u,E,R,o,c,x)):o.length,()=>{x.current=!1,E.current&&E.current.abort()}),[e,o,c]),[a,p]};function fe(e){const[n,t]=A.useState(!1);function o({key:c}){c===e&&t(!0)}const i=({key:c})=>{c===e&&t(!1)};return A.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",i),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}),[e]),n}const uo=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return F.fromJSDate(o)},fo=e=>{const n=()=>e(m=>m.plus({days:7})),t=fe("ArrowRight");A.useEffect(()=>{t&&n()},[t]);const o=()=>e(m=>m.minus({days:7})),i=fe("ArrowLeft");A.useEffect(()=>{i&&o()},[i]);const c=()=>e(uo()),a=fe("t");return A.useEffect(()=>{a&&c()},[a]),{nextWeek:n,previousWeek:o,startWeekWithToday:c}},ho=e=>{const[n,t]=T.useState(0),[o,i]=T.useState(0),c=50;return{onTouchStart:u=>{i(0),t(u.targetTouches[0].clientX)},onTouchMove:u=>i(u.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const u=n-o,p=u>c,R=u<-c;p&&e.onSwipedLeft(),R&&e.onSwipedRight()}}},Xe=e=>F.fromISO(e).toLocaleString(F.TIME_24_SIMPLE),je=e=>e.toFormat("c")>=6,Ne=e=>e.hasSame(F.now(),"day"),po=D.div`
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
`,go=()=>{const[e,n]=A.useState(void 0),[t,o]=lo(e),{nextWeek:i,previousWeek:c,startWeekWithToday:a}=fo(n);A.useEffect(()=>{e===void 0&&a()},[]);const m=ho({onSwipedLeft:()=>i(),onSwipedRight:()=>c()}),y=T.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),u=T.useMemo(()=>t.slice(0,7),[t]);return r.jsxs(po,{...m,children:[r.jsx(to,{nextWeek:i,previousWeek:c,startWeekWithToday:a}),r.jsxs("div",{className:"schedule",children:[u.map((p,R)=>r.jsx("div",{className:Y({weekend:je(p.date),today:Ne(p.date)},"caption"),children:r.jsx("h2",{children:p.date.toLocaleString(y)})},R)),u.map((p,R)=>r.jsx("div",{className:Y("allDayRow",{weekend:je(p.date),today:Ne(p.date)}),children:p.allDay.map((b,S)=>r.jsx("div",{className:"allDayEvent",children:b.summary},S))},R)),u.map((p,R)=>r.jsx("div",{className:Y("eventRow",{weekend:je(p.date),today:Ne(p.date)}),children:p.events.map((b,S)=>r.jsxs("div",{className:"event",children:[r.jsx("div",{children:b.summary}),r.jsxs("h3",{children:[b.icon&&r.jsx(z,{path:b.icon,size:"1rem",color:"#ffffff"}),Xe(b.start.dateTime)," - ",Xe(b.end.dateTime)]})]},S))},R))]}),t.length===0&&r.jsx("div",{className:"loading",children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsx(at,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&r.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:r.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},mo=D.div`
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
`;class Q extends A.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",i=n?.stack||"",c=t?.componentStack||"";L.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:i,componentStack:c})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){if(this.state.hasError){const n=this.props.compact;return r.jsxs(mo,{$compact:n,children:[r.jsx("h2",{children:n?"Fehler":"Something went wrong"}),!n&&r.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,r.jsxs("div",{children:[r.jsx("button",{onClick:this.handleReset,children:"Try Again"}),r.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]})}return this.props.children}}const Te={"clear-day":{icon:Lt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:Nt,label:"Klar",color:"#eeeef5"},rain:{icon:jt,label:"Regen",color:"#80a5d6"},snow:{icon:Rt,label:"Schnee",color:"#8c82ce"},sleet:{icon:Ct,label:"Graupel",color:"#aba4db"},wind:{icon:Tt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:St,label:"Neblig",color:"#d5dae2"},cloudy:{icon:At,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:bt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:yt,label:"Teils bewölkt",color:"#d5dae2"}},xo=e=>{const[n,t]=A.useState([]),[o,i]=A.useState(!1),c=Pe(6e4*10,"Weather"),a=U(),m=a.ENABLE_WEATHER||!1,y=a.WEATHER_LATITUDE,u=a.WEATHER_LONGITUDE,p=m&&y&&u,R=()=>`.${`/forecast/${y},${u}?units=si&exclude=minutely`}`;return A.useEffect(()=>{if(!p)return;let b=!0;const S=new AbortController;return V(R(),{signal:S.signal}).then(E=>{b&&(t(E.data),i(!1))}).catch(E=>{b&&!S.signal.aborted&&i(Z(E))}).finally(()=>{b&&e&&e(!1)}),()=>{b=!1,S.abort()}},[c,e,p,m,y,u]),[n,o]},Eo=_t(Ot),Qe=D.div`

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
`,Ze=T.memo(({data:e,daily:n=!1})=>r.jsxs("div",{children:[r.jsxs("div",{children:[!n&&F.fromSeconds(e.time).toLocaleString(F.TIME_24_SIMPLE),n&&F.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),r.jsx("div",{children:r.jsx(De,{icon:e.icon})}),r.jsx("div",{children:r.jsxs("strong",{children:[!n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),r.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),r.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),wo=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:Te[n.icon]?.color||"#ffffff",text:Te[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),De=({icon:e})=>{const n=Te[e];return r.jsx(n.icon,{size:60,color:"#ffffff"})},yo=()=>{const n=U().ENABLE_WEATHER||!1,[t,o]=xo(),[i,c]=A.useState(!1),a=fe("w"),m=A.useRef(),y=T.useCallback(()=>c(S=>!S),[]),u=T.useCallback(()=>c(!0),[]),p=T.useMemo(()=>wo(t),[t]),R=T.useMemo(()=>[3,6,9,12],[]),b=T.useMemo(()=>[1,2,3,4,5,6,7],[]);return A.useEffect(()=>{if(!i||!m.current||!t||!t.hourly||p.length===0)return;const S={timezone:"Europe/Berlin"},E=document.createElement("div");return m.current.textContent="",m.current.appendChild(E),sn(E,p,S),()=>{m.current&&(m.current.textContent="")}},[i,p]),A.useEffect(()=>{a&&y()},[a]),n?!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?r.jsx(Qe,{children:r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":r.jsxs(Qe,{children:[r.jsxs("div",{onClick:u,children:[r.jsxs("div",{className:"headline",children:[r.jsx(De,{icon:t.currently.icon}),r.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),r.jsx("div",{className:"forecast",children:R.map((S,E)=>r.jsx(Ze,{data:t.hourly.data[S]},E))})]}),r.jsx(he,{visible:i,onClick:y,children:r.jsxs("div",{className:"full-weather",children:[o!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),r.jsxs("div",{className:"detail-header",children:[r.jsx("div",{children:r.jsxs("div",{className:"headline",children:[r.jsx(De,{icon:t.daily.data[0].icon}),r.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",r.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),r.jsx("h3",{children:Te[t.daily.data[0].icon].label})]}),r.jsx("div",{className:"values",children:r.jsxs("div",{className:"table",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Regen:"})," ",Math.round(t.daily.data[0].precipProbability*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),r.jsx("h3",{children:"Die nächsten 24 Stunden"}),r.jsx("div",{ref:m}),r.jsx("h3",{children:"Die nächste Woche"}),r.jsx("div",{className:"forecast",children:b.map((S,E)=>r.jsx(Ze,{data:t.daily.data[S],daily:!0},E))}),r.jsxs("div",{className:"info",children:["Aktualisiert ",r.jsx(kt,{date:F.fromSeconds(t.currently.time).toJSDate(),formatter:Eo})]})]})})]}):null},bo=T.memo(yo),Ao="AK Wandsbek",So="Hamburg",To="Master:62016",Co="STATION",Ro={x:10.091341,y:53.568702},jo={name:Ao,city:So,id:To,type:Co,coordinate:Ro},be={departureList:"departureList",checkName:"checkName"},No=async(e,n,t,o)=>{const i={Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},c=o.HASS_ACCESS_TOKEN||"";c&&c.trim()!==""&&c!=="undefined"&&c!=="null"&&(i.Authorization=`Bearer ${c}`);const a=H(`/gti/public/${e}`,o);return V({method:"post",url:a,data:n,signal:t,headers:i})},et=(e,n)=>e.realtimeOffset-n.realtimeOffset,Lo=e=>{const n=(e?.departures??[]).map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(et),to:n.filter(t=>t.directionId===6).slice(0,3).sort(et)}},ko=e=>{const n=U(),t=n.ENABLE_HVV||!1,[o,i]=A.useState([]),[c,a]=A.useState(!1),m=Pe(6e4),y=t;return A.useEffect(()=>{if(!y)return;if(!(e in be)){L.warn(e,"not supported by HVV connector");return}let u=!0;const p=new AbortController;let R={version:51};switch(e){case be.checkName:R={...R,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case be.departureList:const b=F.now();R={...R,station:jo,time:{date:b.toFormat("dd.MM.yyyy"),time:b.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:R=void 0}return No(e,R,p.signal,n).then(b=>{u&&(i(Lo(b.data)),a(!1))}).catch(b=>{u&&!p.signal.aborted&&a(Z(b))}),()=>{u=!1,p.abort()}},[e,m,y,t]),[o,c]},_o=D.div`
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
`,tt=T.memo(({line:e,direction:n,realtimeOffset:t})=>r.jsxs("div",{className:"departure",children:[r.jsx("div",{children:r.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),r.jsx("div",{children:t===0?"Jetzt":r.jsxs(r.Fragment,{children:["in ",t," '"]})})]})),Oo=()=>{const n=U().ENABLE_HVV||!1,[t,o]=ko(be.departureList);return n?r.jsx(_o,{children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((i,c)=>r.jsx(tt,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},c)),r.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((i,c)=>r.jsx(tt,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},c))]})}):null},Do=T.memo(Oo),vo=()=>{const e=U(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"",o=e.ENTITY_CHARGING_STATE||"",i=e.ENTITY_STATE_OF_CHARGE||"",c=n&&(t||o||i),[a,m,y]=se({entityId:t,enabled:c&&!!t,config:e,initialState:"off"}),{error:u}=ue({entityId:t,enabled:c&&!!t,onStateUpdate:y,logPrefix:"EV preclimate",wsOptions:{checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3}}),[p,R,b]=se({entityId:o,enabled:c&&!!o,config:e,initialState:"off"}),{error:S}=ue({entityId:o,enabled:c&&!!o,onStateUpdate:b,logPrefix:"EV charging",wsOptions:{checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3}}),[E,x,f]=se({entityId:i,enabled:c&&!!i,config:e,initialState:"0"}),{error:h}=ue({entityId:i,enabled:c&&!!i,onStateUpdate:f,logPrefix:"EV SoC",wsOptions:{checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3}});return[A.useMemo(()=>({preclimateStatus:a==="on",chargingState:p==="on",stateOfCharge:parseFloat(E)||0}),[a,p,E]),m||u||R||S||x||h||!1]},$o=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&V.post(H("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to start preclimate:",t)})},Io=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&V.post(H("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to stop preclimate:",t)})},Mo=({preclimateStatus:e,error:n,onStart:t,onStop:o})=>{const[i,c]=T.useState(!1),[a,m]=T.useState(null),[y,u]=T.useState(!1),[p,R]=T.useState(!1),[b,S]=T.useState(0),E=T.useRef(null),x=T.useRef(null),f=T.useRef(e),h=T.useRef(null);T.useEffect(()=>{f.current!==e&&(i&&h.current!==null&&e===(a==="start")&&(S(a==="start"?360:0),R(!0),setTimeout(()=>{c(!1),m(null),R(!1),S(0),h.current=null,u(!1)},300),E.current&&(clearTimeout(E.current),E.current=null)),f.current=e)},[e,i,a]),T.useEffect(()=>{if(!i||p){x.current&&(cancelAnimationFrame(x.current),x.current=null);return}const l=h.current||Date.now(),g=a==="stop",d=()=>{const w=Date.now()-l,C=Math.min(w/gn,1);S(g?360*(1-C):360*C),C<1&&!p&&(x.current=requestAnimationFrame(d))};return x.current=requestAnimationFrame(d),()=>{x.current&&(cancelAnimationFrame(x.current),x.current=null)}},[i,p,a]),T.useEffect(()=>()=>{E.current&&clearTimeout(E.current),x.current&&cancelAnimationFrame(x.current)},[]);const s=T.useCallback(()=>{if(n!==!1||i)return;const l=!e,g=l?"start":"stop";c(!0),m(g),R(!1),u(!1),S(0),h.current=Date.now(),f.current=e,l?t():o(),E.current=setTimeout(()=>{u(!0),setTimeout(()=>{c(!1),m(null),R(!1),S(0),u(!1),h.current=null},500)},mn)},[e,n,i,t,o]);return{isAnimating:i,animationDirection:a,shouldShake:y,isComplete:p,progressAngle:b,handleToggle:s}},Wo=D.div`
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
`,Po=(e,n)=>n?zt:e>=80?Yt:e>=50?Ht:e>=20?Kt:qt,Bo=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",Vo=()=>{const e=U(),n=e.ENABLE_EV||!1,[t,o]=vo(),{preclimateStatus:i,chargingState:c,stateOfCharge:a}=t,m=T.useCallback(()=>$o(e),[e]),y=T.useCallback(()=>Io(e),[e]),{isAnimating:u,animationDirection:p,shouldShake:R,isComplete:b,progressAngle:S,handleToggle:E}=Mo({preclimateStatus:i,error:o,onStart:m,onStop:y}),x=Po(a||0,c),f=Bo(a||0),h=Math.round(a||0),s=u?p==="start":i,l=p==="start"?"#17e146":"#f85a5a",g=p==="start"?"clockwise":"counterclockwise";return n?r.jsxs(Wo,{className:Y({disabled:o!==!1}),children:[r.jsxs("h2",{children:["Auto",o!==!1?r.jsxs("div",{className:"battery-info",children:[r.jsx(z,{path:$e,size:"1.2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs("div",{className:"battery-info",children:[r.jsxs("span",{className:"charge-percentage",children:[h,"%"]}),r.jsx(z,{path:x,size:"1.2rem",color:f})]})]}),o===!1&&r.jsxs("div",{className:"preclimate-button-wrapper",children:[u&&r.jsx("div",{className:Y("progress-ring",g,{complete:b}),style:{"--progress-color":l,"--progress-angle":`${S}deg`,"--progress-gradient":`conic-gradient(from -90deg, ${l} 0deg, ${l} ${S}deg, transparent ${S}deg, transparent 360deg)`}}),r.jsxs("button",{className:Y("preclimate-button",{spinning:s&&!u,shaking:R}),onClick:E,disabled:o!==!1||u,children:[r.jsx(z,{path:Gt,size:"2rem",color:s?"#ff9800":"#ffffff"}),r.jsx("span",{children:s?"Stop":"Start"})]})]})]}):null},Uo=T.memo(Vo),Fo=()=>{const e=U(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",o=n&&t,[i,c,a]=se({entityId:t,enabled:o,config:e,initialState:"closed"}),{error:m}=ue({entityId:t,enabled:o,onStateUpdate:a,logPrefix:"garage door"});return[i,c||m||!1]},Go=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),Ie);V.post(H("/api/services/cover/toggle",n),{entity_id:t}).catch(i=>{L.error("Failed to toggle garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},zo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),Ie);V.post(H("/api/services/cover/open_cover",n),{entity_id:t}).catch(i=>{L.error("Failed to open garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},Yo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),Ie);V.post(H("/api/services/cover/close_cover",n),{entity_id:t}).catch(i=>{L.error("Failed to close garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},Ho=D.div`
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
`,Et=D.div`
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
`,ve=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:en},open:{label:"Offen",icon:Zt},closed:{label:"Geschlossen",icon:Qt},opening:{label:"Öffnet",icon:Xt},closing:{label:"Schließt",icon:Jt}};return n[e]||L.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:tn}},Ko=({garageDoor:e,animate:n=!1})=>r.jsxs(Et,{className:Y({animate:n}),children:[r.jsx(z,{path:ve(e).icon,size:"2rem",color:"#ffffff"}),r.jsx("span",{children:ve(e).label})]}),qo=e=>Dt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return ve(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),Jo=()=>{const e=U(),n=e.ENABLE_GARAGE||!1,[t,o]=Fo(),[i,c]=A.useState(void 0),[a,m]=A.useState(!1),[y,u]=A.useState(!1);A.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!i){const E=new Promise(x=>{c({resolve:x})});qo(E)}}else i&&(i.resolve(t),c(void 0))},[t]);const p=fe("g");A.useEffect(()=>{p&&o===!1&&Go(m,e)},[p,o,e]);const R=T.useCallback(S=>{if(o===!1)switch(u(!1),S){case"open":zo(m,e);break;case"close":Yo(m,e);break}},[m,o,e]),b=T.useCallback(()=>{o===!1&&u(!0)},[o]);return n?r.jsxs(Ho,{className:Y({disabled:o!==!1}),children:[r.jsx("h2",{children:"Garage"}),r.jsx("div",{className:"status",onClick:b,children:o!==!1?r.jsxs(Et,{children:[r.jsx(z,{path:$e,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsx(Ko,{garageDoor:t,animate:a})}),r.jsx(he,{visible:y&&o===!1,onClick:()=>u(!1),children:r.jsxs("div",{className:"controls",children:[r.jsx("h2",{children:"Garagentor"}),r.jsx("div",{onClick:()=>R("open"),children:"Öffnen"}),r.jsx("div",{onClick:()=>R("close"),children:"Schließen"})]})})]}):null},Xo=T.memo(Jo),Qo=({entityIds:e,enabled:n,onStateUpdate:t,logPrefix:o,wsOptions:i={}})=>{const{error:c}=mt({enabled:n&&e.length>0,logPrefix:o,...i,onReady:(a,m)=>(e.forEach(y=>{const u=p=>{p.state!==void 0&&t(y,p.state)};m.current.set(y,u),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"subscribe_entity",entity_id:y}))}),e.length>0&&L.debug(`Subscribed to ${o} state changes: ${e.join(", ")}`),()=>{e.forEach(y=>{m.current.delete(y),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"unsubscribe_entity",entity_id:y}))})}),dependencies:[n,e.join(",")]});return{error:c}},q={done:{label:"Fertig",animate:!1,icon:on},off:{label:"Aus",animate:!1,icon:nn},standby:{label:"Standby",animate:!1,icon:Be},running:{label:"Läuft …",animate:!0,icon:Be}},Zo={off:0,standby:2,running:16,done:256},er=()=>{const e=U(),n=e.ENABLE_LAUNDRY||!1,t=e.LAUNDRY_MACHINES||[],o=Array.isArray(t)?t:[],i=A.useMemo(()=>o.filter(l=>l.entity_id).map(l=>l.entity_id),[o.map(l=>l.entity_id).join(",")]),[c,a]=A.useState({}),[m,y]=A.useState({}),u=A.useCallback((l,g)=>{a(d=>({...d,[l]:g}))},[]),{error:p}=Qo({entityIds:i,enabled:n&&i.length>0,onStateUpdate:u,logPrefix:"laundry"});A.useEffect(()=>{if(!n||i.length===0)return;const l=new Map;return i.forEach(g=>{const d=H(`/api/states/${g}`,e);if(!d)return;const w=new AbortController;l.set(g,w),V(d,{signal:w.signal}).then(C=>{a(j=>({...j,[g]:C.data.state})),y(j=>({...j,[g]:!1}))}).catch(C=>{w.signal.aborted||y(j=>({...j,[g]:Z(C)}))})}),()=>{l.forEach(g=>g.abort())}},[n,i.join(","),e]);const R=o.map(l=>({state:c[l.entity_id]||"off",error:m[l.entity_id]||p||!1,name:l.name})),[b,S]=A.useState(q.off),[E,x]=A.useState(!1),f=R.map(l=>l.state),h=R.map(l=>l.error);A.useEffect(()=>{const l=h.some(g=>g!==!1);x(l&&h.find(g=>g!==!1)||!1)},[h]),A.useEffect(()=>{const l=f.reduce((g,d)=>g+(Zo[d]||0),0);l===0?S(q.off):l<16?S(q.standby):l<256?S(q.running):l%256===0?S(q.done):l%256%16===0?S(q.running):l%256%2===0?S(q.done):S(q.running)},[f]);const s=R.map(l=>({label:l.name,state:l.state}));return[b,s,E]},tr=D.div`
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
`,nr=()=>{const n=U().ENABLE_LAUNDRY||!1,[t,o,i]=er(),[c,a]=A.useState(!1),m=T.useCallback(()=>{i===!1&&a(!0)},[i]),y=T.useCallback(()=>a(!1),[]);return n?r.jsxs(tr,{className:Y({disabled:i!==!1}),children:[r.jsx("h2",{children:"Wäsche"}),r.jsx("div",{className:"status",onClick:m,children:i!==!1?r.jsxs(r.Fragment,{children:[r.jsx(z,{path:$e,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:Y({animate:t.animate}),children:r.jsx(z,{path:t.icon,size:"2rem",color:"#ffffff"})}),r.jsx("span",{children:t.label})]})}),r.jsx(he,{visible:c&&i===!1,onClick:y,children:r.jsxs("div",{className:"states",children:[r.jsx("h2",{children:"Wäsche"}),o.map((u,p)=>r.jsxs("div",{children:[r.jsx("div",{className:"subtitle",children:u.label}),r.jsx("div",{className:Y({animate:q[u.state].animate}),children:r.jsx(z,{path:q[u.state].icon,size:2})}),r.jsx("div",{children:q[u.state].label})]},p))]})})]}):null},or=T.memo(nr),rr=D.div`
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
`,ir=()=>r.jsxs(rr,{children:[r.jsxs("div",{className:"top-content",children:[r.jsx(Q,{compact:!0,children:r.jsx(bo,{})}),r.jsx(Q,{compact:!0,children:r.jsx(Do,{})}),r.jsx(Q,{compact:!0,children:r.jsx(Uo,{})})]}),r.jsxs("div",{className:"two-cols",children:[r.jsx(Q,{compact:!0,children:r.jsx(Xo,{})}),r.jsx(Q,{compact:!0,children:r.jsx(or,{})})]})]}),sr=T.memo(ir),nt=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],ar=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],Ae={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},cr={landscape:"L",portrait:"P",wide:"W"},lr=D.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,dr=D.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,ur=D.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,ne=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,oe=D.label`
  font-size: 0.9rem;
  color: #cccccc;
`,ot=D.select`
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
`,rt=D.input`
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
`,fr=D.button`
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
`,it=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,hr=D.button`
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
`,pr=D.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,gr=D.div`
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
`,mr=D.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,xr=D.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Er=D.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,me=D.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,xe=D.div`
  font-size: 0.85rem;
  color: #cccccc;
`,Ee=D.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,wr=D.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,yr=D.h3`
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
`;const Le=D.button`
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
`,st=()=>{const[e,n]=T.useState(1920),[t,o]=T.useState(1080),[i,c]=T.useState("Full HD"),[a,m]=T.useState(""),[y,u]=T.useState(""),[p,R]=T.useState([{orientation:"landscape"}]),[b,S]=T.useState(null),E=T.useMemo(()=>xt(p,e,t),[p,e,t]),x=d=>{const w=nt.find(C=>C.name===d);w&&w.width&&w.height?(n(w.width),o(w.height),c(d),m(""),u("")):d==="Custom"&&c("Custom")},f=()=>{const d=parseInt(a),w=parseInt(y);d>0&&w>0&&(n(d),o(w))},h=d=>{R(d.videos),S(d.name)},s=d=>{const w=[];for(let C=0;C<d;C++)w.push(p[C]||{orientation:"landscape"});R(w),S(null)},l=(d,w)=>{const C=[...p];C[d]={orientation:w},R(C),S(null)},g=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return r.jsxs(lr,{children:[r.jsx(dr,{children:"Video Tiling Algorithm Demo"}),r.jsxs(ur,{children:[r.jsxs(ne,{children:[r.jsx(oe,{children:"Screen Size Preset"}),r.jsx(ot,{value:i,onChange:d=>x(d.target.value),children:nt.map(d=>r.jsx("option",{value:d.name,children:d.name},d.name))})]}),i==="Custom"&&r.jsxs(r.Fragment,{children:[r.jsxs(ne,{children:[r.jsx(oe,{children:"Custom Width"}),r.jsx(rt,{type:"number",value:a,onChange:d=>m(d.target.value),placeholder:"Width",min:"100"})]}),r.jsxs(ne,{children:[r.jsx(oe,{children:"Custom Height"}),r.jsx(rt,{type:"number",value:y,onChange:d=>u(d.target.value),placeholder:"Height",min:"100"})]}),r.jsxs(ne,{children:[r.jsx(oe,{children:" "}),r.jsx(fr,{onClick:f,children:"Apply Custom Size"})]})]}),r.jsxs(ne,{children:[r.jsx(oe,{children:"Number of Videos"}),r.jsxs(ot,{value:p.length,onChange:d=>s(parseInt(d.target.value)),children:[r.jsx("option",{value:"1",children:"1 Video"}),r.jsx("option",{value:"2",children:"2 Videos"}),r.jsx("option",{value:"3",children:"3 Videos"}),r.jsx("option",{value:"4",children:"4 Videos"})]})]}),p.map((d,w)=>r.jsxs(ne,{children:[r.jsxs(oe,{children:["Video ",w+1," Orientation"]}),r.jsxs(it,{children:[r.jsx(Le,{active:d.orientation==="landscape",orientation:"landscape",onClick:()=>l(w,"landscape"),children:"Landscape"}),r.jsx(Le,{active:d.orientation==="portrait",orientation:"portrait",onClick:()=>l(w,"portrait"),children:"Portrait"}),r.jsx(Le,{active:d.orientation==="wide",orientation:"wide",onClick:()=>l(w,"wide"),children:"Wide"})]})]},w))]}),r.jsxs(wr,{children:[r.jsx(yr,{children:"Test Scenarios"}),r.jsx(it,{children:ar.map(d=>r.jsx(hr,{active:b===d.name,onClick:()=>h(d),children:d.name},d.name))})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:r.jsx(pr,{style:{width:`${e*g}px`,height:`${t*g}px`},children:E.videos.map((d,w)=>r.jsxs(gr,{orientation:d.orientation,style:{left:`${d.x*g}px`,top:`${d.y*g}px`,width:`${d.width*g}px`,height:`${d.height*g}px`},children:[r.jsxs(mr,{children:[cr[d.orientation]," ",w+1]}),r.jsxs(xr,{children:[Math.round(d.width)," × ",Math.round(d.height)]})]},w))})}),r.jsxs(Er,{children:[r.jsxs(me,{children:[r.jsx(xe,{children:"Canvas Size"}),r.jsxs(Ee,{children:[e," × ",t]})]}),r.jsxs(me,{children:[r.jsx(xe,{children:"Total Area Used"}),r.jsxs(Ee,{children:[Math.round(E.totalArea).toLocaleString()," px²"]})]}),r.jsxs(me,{children:[r.jsx(xe,{children:"Efficiency"}),r.jsxs(Ee,{children:[E.efficiency.toFixed(2),"%"]})]}),r.jsxs(me,{children:[r.jsx(xe,{children:"Display Scale"}),r.jsxs(Ee,{children:[(g*100).toFixed(1),"%"]})]})]})]})},Se="hass-family-calendar-config-banner-dismissed",br=D.div`
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
`,Ar=()=>{const e=ut(),n=ft(),t=ht(),o=dt(),[i,c]=T.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(Se)==="true"}catch{}return!1}),[a,m]=T.useState(!1);if(T.useEffect(()=>{if(e&&i){c(!1);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(Se)}catch{}}},[e,i]),o||i||!e&&!n)return null;const y=async()=>{m(!0);try{await t()}catch{}finally{m(!1)}},u=()=>{c(!0);try{typeof window<"u"&&window.localStorage&&localStorage.setItem(Se,"true")}catch{}};let p="warning",R="";return e&&n?(p="warning",R=`Using cached configuration. Failed to load from server: ${e}`):e&&!n?(p="error",R=`Failed to load configuration: ${e}`):n&&(p="warning",R="Using cached configuration. Some features may be outdated."),r.jsxs(br,{severity:p,children:[r.jsx("div",{className:"message",children:R}),r.jsxs("div",{className:"actions",children:[e&&r.jsx("button",{onClick:y,disabled:a,children:a?"Retrying...":"Retry"}),r.jsx("button",{className:"dismiss",onClick:u,title:"Dismiss",children:"×"})]})]})},Sr=vt`
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
`,Tr=D.div`
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
`;function Cr(){const e=ut(),n=ft(),t=dt(),[o]=A.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(Se)==="true"}catch{}return!1}),i=!t&&!o&&(e||n);return r.jsxs(Tr,{$hasBanner:i,children:[r.jsx(Sr,{}),r.jsx(Ar,{}),r.jsxs("div",{className:"main",children:[r.jsx(Q,{children:r.jsx(go,{})}),r.jsx(Q,{children:r.jsx(sr,{})})]}),r.jsx(It,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Rr(){return r.jsx(Q,{children:r.jsxs($t,{children:[r.jsx(Ce,{path:"/demo",element:r.jsx(st,{})}),r.jsx(Ce,{path:"/tiling-demo",element:r.jsx(st,{})}),r.jsx(Ce,{path:"*",element:r.jsx(Cr,{})})]})})}const jr=Mt.createRoot(document.getElementById("root"));jr.render(r.jsx(A.StrictMode,{children:r.jsx(Q,{children:r.jsx(bn,{children:r.jsx(_n,{children:r.jsx(Wt,{children:r.jsx(Rr,{})})})})})}));
