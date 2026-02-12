import{l as $,R as A,j as r,I as z,r as C,b as rt,P as mt,W as xt,d as yt,e as wt,f as Et,h as bt,i as At,k as St,m as Tt,n as Ct,o as jt,T as Rt,p as Nt,s as Lt,y as kt,q as _t,t as Ot,u as Ae,L as vt,v as Dt,B as It}from"./react-vendor-CvSWEdl-.js";import{D as G}from"./date-vendor-BDx6lZXm.js";import{f as Y}from"./vendor-L-naSlx2.js";import{m as $t,a as Ne,b as Mt,c as Wt,d as Pt,e as Bt,f as De,g as Vt,h as Ft,i as Gt,j as zt,k as Ut,l as Yt,n as Ht,o as Kt,p as qt,q as Jt,r as Xt,s as Qt,t as Be,u as Zt,v as en}from"./ui-vendor-CHQCwb4U.js";import{a as B,q as tn}from"./utils-vendor-BNSBtfAD.js";import{t as nn}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(i){if(i.ep)return;i.ep=!0;const d=t(i);fetch(i.href,d)}})();const on=$.div`
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
`,le=({visible:e,children:n,onClick:t,onClose:o,fullsize:i=!1})=>{const d=o||t,c=p=>{p.stopPropagation(),p.preventDefault(),d()};return A.useEffect(()=>{if(e){const p=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${p}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,p)}}},[e]),e?r.jsxs(on,{onClick:t,children:[r.jsx("div",{className:"close",onClick:c,children:r.jsx(z,{path:$t,size:2})}),r.jsx("div",{className:Y("content",{fullsize:i}),onClick:p=>p.stopPropagation(),children:n})]}):null};let it=!0;const rn=e=>{it=!!e};let me=!1,q=[],se=0;const ae=100,Ve=50,Le=()=>{if(q.length===0||me)return;const e=q.shift(),n=Date.now();n-se>=ae?ie(e.level,e.message,e.metadata):(q.unshift(e),setTimeout(Le,ae-(n-se)))},ie=(e,n,t=null)=>{if(!it)return;if(me){q.length<Ve&&q.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const o=Date.now();if(o-se<ae){q.length<Ve&&(q.push({level:e,message:n,metadata:t,timestamp:o}),q.length===1&&setTimeout(Le,ae-(o-se)));return}setTimeout(async()=>{me=!0,se=Date.now();try{const d=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,c={level:e,message:n,...t&&{metadata:t}};await B.create({timeout:2e3}).post(d,c)}catch{q.length>10&&(q=[])}finally{me=!1,q.length>0&&setTimeout(Le,ae)}},0)},ue=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},fe=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},L={log:(...e)=>{const n=ue(e),t=fe(e);n&&ie("INFO",n,t)},error:(...e)=>{console.error(...e);const n=ue(e),t=fe(e);n&&ie("ERROR",n,t)},warn:(...e)=>{const n=ue(e),t=fe(e);n&&ie("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=ue(e),t=fe(e);n&&ie("INFO",n,t)}},sn={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},an=!1,ke="hass-family-calendar-config",cn=()=>{const e=(n,t=void 0)=>{const o=sn[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},Se=()=>{try{if(typeof window>"u"||!window.localStorage)return null;const e=localStorage.getItem(ke);if(e){const n=JSON.parse(e);return L.debug("Loaded cached config from localStorage"),n}}catch(e){L.warn("Failed to load cached config from localStorage:",e);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(ke)}catch{}}return null},ln=e=>{try{return typeof window>"u"||!window.localStorage?!1:(localStorage.setItem(ke,JSON.stringify(e)),L.debug("Saved config to localStorage"),!0)}catch(n){return L.warn("Failed to save config to localStorage:",n),!1}},re=C.createContext(null),dn=({children:e})=>{const[n,t]=C.useState(()=>Se()||cn()),[o,i]=C.useState(!0),[d,c]=C.useState(null),[p,E]=C.useState(()=>!!Se()),f=C.useRef(!0),g=C.useRef(n),j=C.useRef(!1),b=C.useRef(!1);C.useEffect(()=>{g.current=n},[n]);const S=C.useCallback(async(s=!1)=>{if(j.current&&!s||!s&&b.current)return!1;j.current=!0,s||(b.current=!0),L.debug("Starting config load",{isReload:s,hasInitialized:b.current});const h=typeof window<"u"&&window.location?`${window.location.pathname.replace(/\/$/,"")}/api/config`:"/api/config";try{const m=await B.get(h,{timeout:5e3});if(m.data&&typeof m.data=="object")if(typeof m.data=="object"&&!Array.isArray(m.data)){L.debug("Config loaded from API:",{hasCALENDARS:"CALENDARS"in m.data,CALENDARS:m.data.CALENDARS,CALENDARSCount:Array.isArray(m.data.CALENDARS)?m.data.CALENDARS.length:"not array",allKeys:Object.keys(m.data)});const u=g.current,x=JSON.stringify(m.data)!==JSON.stringify(u);L.debug("Updating config with new data from API:",{configChanged:x,CALENDARSCount:Array.isArray(m.data.CALENDARS)?m.data.CALENDARS.length:"not array",currentCALENDARSCount:Array.isArray(u?.CALENDARS)?u.CALENDARS.length:"not array",responseKeys:Object.keys(m.data).length,currentConfigKeys:Object.keys(u||{}).length}),x?(t(m.data),E(!1),c(null),an||ln(m.data)):(E(!1),c(null));const R=Object.keys(m.data).filter(T=>T.startsWith("ENABLE_")&&m.data[T]).map(T=>T.replace("ENABLE_",""));return L.info(`Configuration ${s?"reloaded":"loaded"} from API endpoint. Enabled features: ${R.length>0?R.join(", "):"none"}`,{enabledFeatures:R,totalConfigKeys:Object.keys(m.data).length}),s||i(!1),j.current=!1,!0}else throw new Error("Invalid config structure: expected object, got array");else throw new Error("Invalid config response: missing or invalid data")}catch(m){const u=m.response?.data?.detail||m.message||"Unknown error";if(s)return L.warn("Failed to reload config from API, keeping current config:",u),!1;{const x=Se();return x?(L.warn("Failed to load config from API, using cached config:",u),f.current&&(t(x),E(!0),c(u),i(!1)),!1):(f.current&&(c(u),i(!1)),!1)}}finally{j.current=!1}},[]),y=C.useRef(null),w=C.useCallback(async()=>{if(y.current)return y.current;const s=S(!0).finally(()=>{y.current=null});return y.current=s,s},[S]),l=C.useRef(!1);C.useEffect(()=>{if(!l.current)return l.current=!0,S(!1),()=>{f.current=!1}},[]),C.useEffect(()=>{const s=n.HASS_ACCESS_TOKEN||"";s&&typeof s=="string"&&s.trim()!==""&&s!=="undefined"&&s!=="null"?B.defaults.headers.common.Authorization=`Bearer ${s}`:delete B.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),C.useEffect(()=>{const s=n.ENABLE_LOGGING===!0;rn(s)},[n.ENABLE_LOGGING]);const a=C.useMemo(()=>({config:n,loading:o,configError:d,isUsingCachedConfig:p,reloadConfig:w}),[n,o,d,p,w]);return r.jsx(re.Provider,{value:a,children:e})},F=()=>{const e=C.useContext(re);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config},st=()=>{const e=C.useContext(re);if(!e)throw new Error("useConfigLoading must be used within ConfigProvider");return e.loading},at=()=>{const e=C.useContext(re);if(!e)throw new Error("useConfigError must be used within ConfigProvider");return e.configError},ct=()=>{const e=C.useContext(re);if(!e)throw new Error("useIsUsingCachedConfig must be used within ConfigProvider");return e.isUsingCachedConfig},lt=()=>{const e=C.useContext(re);if(!e)throw new Error("useReloadConfig must be used within ConfigProvider");return e.reloadConfig};let oe=0,xe=0,Q=0;const ne=[],dt=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},un=(e,n="")=>{const t=dt(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;Q++,oe++,ne.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ne.length>10&&ne.shift();const i=[];return n&&i.push(`[${n}]`),i.push("🔴 Axios API Error:"),i.push(`Message: ${t.message}`),t.url&&i.push(`URL: ${t.url}`),t.status&&i.push(`HTTP Status: ${t.status}`),t.code&&i.push(`Error Code: ${t.code}`),t.isNetworkError&&(i.push("Type: Network Error (no response received)"),t.readyState!==void 0&&i.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&i.push("Type: Timeout Error"),t.config&&(i.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),i.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&i.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&i.push("Response Data:",t.responseData),i.push(`Request Stats: ${xe} success, ${Q} errors (${oe} total)`),Q>3&&ne.length>0&&i.push("Recent errors pattern:",ne.slice(-5)),L.error(...i),t},fn=e=>{xe++,oe++,(oe%10===0||Q>0)&&L.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:oe,stats:`${xe} success, ${Q} errors`}),Q>0&&oe%10===0&&xe>Q&&(Q=0,ne.length=0)},K=e=>{const n=dt(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};let _e=null;const Fe=e=>{_e=e},hn=!1;B.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,L.debug("Axios Defaults State:",{baseURL:B.defaults.baseURL,timeout:B.defaults.timeout,hasAuthHeader:!!B.defaults.headers?.common?.Authorization,authHeaderLength:B.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(B.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||L.error("Axios Request Setup Error:",e),Promise.reject(e)));B.interceptors.response.use(e=>(e.config&&fn(e.config),e),e=>{const n=e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"),t=e.config?.metadata?.skipConnectionCheck===!0;if(!n){const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(un(e,o),e.config?.metadata){const i=Date.now()-e.config.metadata.startTime;L.error("Request Duration:",`${i}ms`,"Request ID:",e.config.metadata.requestId)}!t&&_e&&!e.response&&(e.code==="ERR_NETWORK"||e.code==="ECONNABORTED"||e.code==="ERR_CANCELED")&&_e()}return Promise.reject(e)});const U=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;if(typeof window<"u"&&window.location){if(window.location.pathname.includes("/api/hassio_ingress/")){const i=window.location.pathname.match(/^(\/api\/hassio_ingress\/[^\/]+\/)/);if(i){const d=i[1],c=t.startsWith("/")?t.slice(1):t;return`${d}${c}`}}return t}return t},pn=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},gn=(e={})=>{const n=pn(e);if(!n)return"";const t=n.startsWith("https://")?"wss://":"ws://",o=n.replace(/^https?:\/\//,"");return`${t}${o}/api/websocket`},mn=3e3,xn=3e4,yn=5e3,wn=()=>{const[e,n]=C.useState(!0),t=C.useRef(null),o=C.useRef(null),i=C.useRef(!1),d=C.useRef(Date.now()),c=C.useRef(!0);C.useEffect(()=>{c.current=e},[e]);const p=C.useCallback(async()=>{if(!i.current){i.current=!0,d.current=Date.now();try{const g=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`;await B.get(g,{timeout:yn,metadata:{skipConnectionCheck:!0}}),c.current||L.info("Connection restored - backend is reachable"),n(!0),i.current=!1,o.current&&(clearInterval(o.current),o.current=null)}catch(f){!f.response&&(f.code==="ERR_NETWORK"||f.code==="ECONNABORTED")?(c.current&&L.warn("Connection lost - backend is not reachable"),n(!1),i.current=!1,o.current||(o.current=setInterval(()=>{p()},xn))):(c.current||L.info("Connection restored - backend responded (with error)"),n(!0),i.current=!1,o.current&&(clearInterval(o.current),o.current=null))}}},[]),E=C.useCallback(()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{p()},mn)},[p]);return C.useEffect(()=>{const f=()=>{document.visibilityState==="visible"&&E()};return document.addEventListener("visibilitychange",f),()=>{document.removeEventListener("visibilitychange",f)}},[E]),C.useEffect(()=>{const f=setTimeout(()=>{p()},1e3);return()=>{clearTimeout(f)}},[p]),C.useEffect(()=>()=>{t.current&&clearTimeout(t.current),o.current&&clearInterval(o.current)},[]),{isConnected:e,triggerCheck:E}},ut=C.createContext(null),En=({children:e})=>{const n=wn(),t=lt(),o=C.useRef(!1),i=C.useRef(null),d=C.useRef(!1);return C.useEffect(()=>(Fe(n.triggerCheck),()=>{Fe(null)}),[n.triggerCheck]),C.useEffect(()=>{const c=n.isConnected;if(!c){o.current=!0,i.current&&(clearTimeout(i.current),i.current=null);return}return o.current&&c&&!d.current&&(i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{d.current||(d.current=!0,t().then(()=>{o.current=!1}).catch(p=>{L.warn("Failed to reload config after connection restore:",p)}).finally(()=>{d.current=!1,i.current=null}))},2e3)),()=>{i.current&&(clearTimeout(i.current),i.current=null)}},[n.isConnected,t]),r.jsx(ut.Provider,{value:n,children:e})},ft=()=>{const e=C.useContext(ut);if(!e)throw new Error("useConnectionStateContext must be used within ConnectionStateProvider");return e},Ie=({entityId:e,enabled:n=!0,config:t,initialState:o=null,extractState:i=d=>d.data.state})=>{const[d,c]=A.useState(o),[p,E]=A.useState(!1),{isConnected:f}=ft(),g=A.useRef(!1),[j,b]=A.useState(0);A.useEffect(()=>{f?g.current&&(g.current=!1,b(w=>w+1)):g.current=!0},[f]);const S=n&&!!e,y=e?U(`/api/states/${e}`,t):null;return A.useEffect(()=>{if(!S||!y)return;let w=!0;const l=new AbortController;return B(y,{signal:l.signal}).then(a=>{w&&(c(i(a)),E(!1))}).catch(a=>{w&&!l.signal.aborted&&E(K(a))}),()=>{w=!1,l.abort()}},[S,y,e,j]),[d,p,c]},bn=()=>{const e=F(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",o=n&&t,[i,d]=Ie({entityId:t,enabled:o,config:e,initialState:null,extractState:c=>{const p=c.data.attributes.store;return p!==void 0?p:[]}});return[i,d]},An=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=U(`/api/states/${t}`,n);B.post(o,{state:new Date,attributes:{store:e}}).catch(i=>{L.error("Failed to store everyday calendar data:",i)})},Ge=$.div` 

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
`,Sn=({on:e,month:n,day:t})=>{const[o,i]=e,d=o.indexOf(`${n}-${t}`),c=d>-1,p=()=>{i(c?o.toSpliced(d,1):[...o,`${n}-${t}`])};return r.jsx("div",{className:Y("dot",{on:c}),onClick:()=>p()})},Tn=()=>{const e=F();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let f=1;f<13;f++){const g=new Date(t,f,0).getDate();for(let j=1;j<=g;j++)o.push({month:f,day:j})}const i=Array.from({length:31},(f,g)=>g+1),d=Array.from({length:12},(f,g)=>g+1),c=A.useState(void 0),[p,E]=bn();return A.useEffect(()=>{p!==null&&c[1](p)},[p]),A.useEffect(()=>{c[0]!==void 0&&An(c[0],e)},[c[0],e]),c[0]!==void 0?r.jsxs(Ge,{children:[r.jsx("h2",{children:"Jeden Tag ein bißchen"}),E!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:E instanceof Error?E.message:String(E)})]}),r.jsxs("div",{className:"calendar",children:[i.map((f,g)=>r.jsx("div",{style:{gridArea:`${f+1} / 1 / ${f+1} / 1`},children:f},g)),d.map((f,g)=>r.jsx("div",{style:{gridArea:`1 / ${f+1} / 1 / ${f+1}`},children:f},g)),o.map((f,g)=>r.jsx("div",{style:{gridArea:`${f.day+1} / ${f.month+1} / ${f.day+1} / ${f.month+1}`},children:r.jsx(Sn,{on:c,month:f.month,day:f.day})},g))]})]}):r.jsx(Ge,{className:"loading",children:E!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:E instanceof Error?E.message:String(E)})]}):r.jsx(rt,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},Cn=$.div`
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
  }`,jn=()=>{const[e,n]=A.useState(G.now()),[t,o]=A.useState(!1),i=C.useCallback(()=>o(!0),[]),d=C.useCallback(()=>o(!1),[]);return A.useEffect(()=>{const c=setInterval(()=>n(G.now()),1e3);return()=>clearInterval(c)},[]),r.jsxs(r.Fragment,{children:[r.jsxs(Cn,{onClick:i,children:[e.toFormat("HH"),r.jsx("span",{children:":"}),e.toFormat("mm")]}),r.jsx(le,{visible:t,onClick:d,fullsize:!0,children:r.jsx(Tn,{})})]})},Rn=C.memo(jn);function $e({onReady:e,enabled:n=!0,checkBackendConnection:t=!0,reconnectStrategy:o="simple",maxReconnectAttempts:i=5,reconnectDelay:d=2e3,logPrefix:c="WebSocket",dependencies:p=[]}){const E=F(),f=ft(),g=t?f?.isConnected:!0,[j,b]=A.useState(!1),[S,y]=A.useState(!1),w=A.useRef(null),l=A.useRef(null),a=A.useRef(!0),s=A.useRef(null),h=A.useRef(null),m=A.useRef(null),u=A.useRef(0),x=A.useRef(!1),R=A.useRef(!1),T=A.useRef(new Map),N=A.useRef(null),k=A.useRef(null),I=A.useCallback(()=>{const _=w.current;if(l.current,s.current&&(clearTimeout(s.current),s.current=null),h.current&&(clearTimeout(h.current),h.current=null),m.current&&(clearTimeout(m.current),m.current=null),N.current&&(clearInterval(N.current),N.current=null),k.current&&(clearTimeout(k.current),k.current=null),_&&_.readyState===WebSocket.OPEN&&(T.current.forEach((O,v)=>{try{_.send(JSON.stringify({type:"unsubscribe_entity",entity_id:v}))}catch{}}),T.current.clear()),_){try{_.close()}catch{}w.current=null}l.current=null},[c]),M=A.useCallback(async()=>{if(!(!n||!a.current)&&!(t&&!g)&&!x.current){w.current&&I(),x.current=!0,y(!0);try{let _;if(!hn){if(_=gn(E),!_){const v=typeof window<"u"&&window.location.protocol==="https:"?"wss:":"ws:",D=typeof window<"u"&&window.location.host?window.location.host:"";_=`${v}//${D}/api/websocket`}}if(!_){L.error(`Failed to build WebSocket URL for ${c} - cannot connect`),a.current&&b("WebSocket URL konnte nicht erstellt werden."),x.current=!1,y(!1);return}L.debug(`${c} connecting to: ${_}`);const O=new WebSocket(_);w.current=O,O.onopen=()=>{if(!a.current){O.close();return}if(L.debug(`${c} connection opened`),u.current=0,R.current=!1,m.current&&(clearTimeout(m.current),m.current=null),a.current&&b(!1),x.current=!1,y(!1),e)try{const v=e(O,T);l.current=v}catch(v){L.error(`Failed to subscribe for ${c}:`,v),a.current&&b(v instanceof Error?v.message:String(v))}N.current&&clearInterval(N.current),N.current=setInterval(()=>{if(O.readyState===WebSocket.OPEN){try{O.send(JSON.stringify({type:"ping"}))}catch{return}k.current=setTimeout(()=>{L.warn(`${c} heartbeat timeout — closing stale connection`);try{O.close(4e3,"heartbeat timeout")}catch{}},1e4)}},3e4)},O.onmessage=v=>{try{const D=JSON.parse(v.data);if(D.type==="state_update"){const P=D.entity_id,V=T.current.get(P);V&&V(D)}else if(D.type==="state_response"){const P=D.entity_id,V=T.current.get(P);V&&V(D)}else D.type==="pong"?k.current&&(clearTimeout(k.current),k.current=null):D.type==="error"&&(L.error(`${c} received error:`,D.message),a.current&&b(D.message))}catch(D){L.error(`Error handling message for ${c}:`,D)}},O.onclose=v=>{if(a.current&&!x.current){L.debug(`${c} disconnected (code: ${v.code}, wasClean: ${v.wasClean})`),w.current=null,T.current.clear(),l.current=null,s.current&&(clearTimeout(s.current),s.current=null);const D=!v.wasClean&&(v.code===1006||u.current>0);if(D&&u.current>=5&&!R.current){L.warn(`Backend appears to be down for ${c} (${u.current} failed attempts), switching to periodic retry every 60s`),R.current=!0,a.current&&b("Backend nicht erreichbar. Wiederherstellungsversuche alle 60 Sekunden.");const P=()=>{m.current=setTimeout(()=>{a.current&&!x.current&&g&&R.current&&(L.debug(`Periodic retry attempt for ${c} (backend might be back up)`),u.current=0,M(),P())},6e4)};P();return}if(R.current)return;if(o==="exponential"&&u.current>=i){L.warn(`Max reconnection attempts (${i}) reached for ${c}, stopping reconnection`),a.current&&b("Verbindung verloren. Bitte Seite neu laden.");return}if(g)if(o==="exponential"){const P=D?d*10:d,V=Math.min(P*Math.pow(2,u.current),6e4);u.current++,s.current=setTimeout(()=>{a.current&&!x.current&&g&&(L.debug(`Attempting to reconnect ${c} (attempt ${u.current}/${i})`),M())},V)}else{const P=D?d*10:d;s.current=setTimeout(()=>{a.current&&!x.current&&g&&(L.debug(`Attempting to reconnect ${c}`),M())},P)}else L.debug(`Skipping reconnection for ${c} - waiting for backend connection`)}},O.onerror=v=>{L.error(`WebSocket error for ${c}:`,v),x.current=!1,y(!1),a.current&&b("WebSocket-Verbindungsfehler");const D=O.readyState===WebSocket.CONNECTING||O.readyState===WebSocket.CLOSED;if(!R.current)if(g)if(o==="exponential"&&u.current<i){const P=D?d*5:d,V=Math.min(P*Math.pow(2,u.current),6e4);u.current++,s.current=setTimeout(()=>{a.current&&!x.current&&g&&(L.debug(`Attempting to reconnect ${c} after error (attempt ${u.current}/${i})`),M())},V)}else if(o==="simple"){const P=D?d*5:d;s.current=setTimeout(()=>{a.current&&!x.current&&g&&(L.debug(`Attempting to reconnect ${c} after error`),M())},P)}else L.warn(`Max reconnection attempts (${i}) reached for ${c}, stopping reconnection`),a.current&&b("Verbindung fehlgeschlagen. Bitte Seite neu laden.");else L.debug(`Skipping reconnection for ${c} after error - waiting for backend connection`)}}catch(_){if(x.current=!1,y(!1),a.current&&(L.error(`Failed to setup ${c} connection:`,_),b(_ instanceof Error?_.message:String(_)),g))if(o==="exponential"&&u.current<i){const O=Math.min(d*Math.pow(2,u.current),3e4);u.current++,s.current=setTimeout(()=>{a.current&&!x.current&&g&&(L.debug(`Attempting to reconnect ${c} after error (attempt ${u.current}/${i})`),M())},O)}else o==="simple"?s.current=setTimeout(()=>{a.current&&!x.current&&g&&M()},d):(L.warn(`Max reconnection attempts (${i}) reached for ${c}, stopping reconnection`),a.current&&b("Verbindung fehlgeschlagen. Bitte Seite neu laden."))}}},[n,t,g,E,o,i,d,c,e,I]);return A.useEffect(()=>{n&&g&&!w.current&&!x.current&&M()},[n,g,M,...p]),A.useEffect(()=>{n&&g&&!w.current&&!x.current&&(h.current&&(clearTimeout(h.current),h.current=null),h.current=setTimeout(()=>{a.current&&g&&!w.current&&!x.current&&(R.current=!1,u.current=0,m.current&&(clearTimeout(m.current),m.current=null),M())},1e3))},[n,g,M,c]),A.useEffect(()=>()=>{a.current=!1,I()},[I]),{connection:w.current,error:j,isConnecting:S}}const ht=({entityId:e,enabled:n,onStateUpdate:t,logPrefix:o,wsOptions:i={}})=>{const{error:d}=$e({enabled:n&&!!e,logPrefix:o,...i,onReady:(c,p)=>{const E=f=>{f.state!==void 0&&t(f.state)};return p.current.set(e,E),c.readyState===WebSocket.OPEN&&(c.send(JSON.stringify({type:"subscribe_entity",entity_id:e})),L.debug(`Subscribed to ${o} state changes`)),()=>{p.current.delete(e),c.readyState===WebSocket.OPEN&&c.send(JSON.stringify({type:"unsubscribe_entity",entity_id:e}))}},dependencies:[n,e]});return{error:d}},Nn=()=>{const e=F(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"",o=n&&t,[i,d,c]=Ie({entityId:t,enabled:o,config:e,initialState:"off"}),{error:p}=ht({entityId:t,enabled:o,onStateUpdate:c,logPrefix:"doorbell"});return[i,d||p||!1]},Ln=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&B.post(U("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to unlatch front door:",t)})},W={portrait:360/480,landscape:1920/1072,wide:770/216};function kn(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function pt(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,i=kn(e);return o===1?_n(e[0],n,t):o===2?On(i,e,n,t):o===3?vn(i,e,n,t):o===4?Dn(i,e,n,t):{videos:[],totalArea:0,efficiency:0}}function _n(e,n,t){const o=W[e.orientation];let i,d;const c=n/t;return o>c?(i=n,d=n/o):(d=t,i=t*o),{videos:[{x:(n-i)/2,y:(t-d)/2,width:i,height:d,orientation:e.orientation}],totalArea:i*d,efficiency:i*d/(n*t)*100}}function On(e,n,t,o){if(e.portrait>0)return Me(e,n,t,o);const i=[];e.landscape>0&&i.push("landscape"),e.wide>0&&i.push("wide");const d=i[0]||n[0].orientation,c=i[1]||n[1].orientation,p=W[d],E=W[c];if(e.landscape===1&&e.wide===1){const y=W.landscape,w=W.wide,l=t,a=l/y,s=l/w,h=a+s;let m,u,x;if(h<=o)m=a,u=s,x=l;else{const M=o/h;m=a*M,u=s*M,x=u*w}const R=(t-x)/2,N=X(n,[{x:R,y:0,width:x,height:u,orientation:"wide"},{x:R,y:u,width:x,height:m,orientation:"landscape"}]),k=x*m+x*u,I=k/(t*o)*100;return{videos:N,totalArea:k,efficiency:I}}if(e.wide===2){const y=W.wide,w=t,l=w/y,a=l*2;let s;a<=o?s=l:s=o/2;const m=X(n,[{x:0,y:0,width:w,height:s,orientation:"wide"},{x:0,y:s,width:w,height:s,orientation:"wide"}]),u=w*s*2,x=u/(t*o)*100;return{videos:m,totalArea:u,efficiency:x}}const f=[()=>{const y=t,w=y/2,l=y/2,a=w/p,s=l/E;return Math.max(a,s)<=o?{positions:[{x:0,y:(o-a)/2,width:w,height:a,orientation:d},{x:w,y:(o-s)/2,width:l,height:s,orientation:c}],totalArea:w*a+l*s}:null},()=>{const y=o,w=y/2,l=y/2,a=w*p,s=l*E;return Math.max(a,s)<=t?{positions:[{x:(t-a)/2,y:0,width:a,height:w,orientation:d},{x:(t-s)/2,y:w,width:s,height:l,orientation:c}],totalArea:a*w+s*l}:null}];let g=null,j=0;for(const y of f){const w=y();w&&w.totalArea>j&&(j=w.totalArea,g=w)}if(!g){const y=t/2,w=t/2,l=Math.min(y/p,o),a=Math.min(w/E,o);g={positions:[{x:0,y:(o-l)/2,width:y,height:l,orientation:d},{x:y,y:(o-a)/2,width:w,height:a,orientation:c}],totalArea:y*l+w*a}}const b=X(n,g.positions),S=g.totalArea/(t*o)*100;return{videos:b,totalArea:g.totalArea,efficiency:S}}function Me(e,n,t,o){const i=e.portrait,d=n.length-i;if((i===3||i===4)&&d===0){const S=W.portrait,y=t/i,w=y/S,l=w<o?(o-w)/2:0,a=Math.min(w,o),s=[];let h=0;for(let x=0;x<i;x++){const R=Math.min(y,a*S);s.push({x:x*y+(y-R)/2,y:l,width:R,height:a,orientation:"portrait"}),h+=R*a}const m=X(n,s),u=h/(t*o)*100;return{videos:m,totalArea:h,efficiency:u}}n.filter(S=>S.orientation==="portrait");const c=n.filter(S=>S.orientation!=="portrait"),p=i>0?Math.min(t*.4,t*.5):0,E=t-p,f=[];let g=0;if(i===2&&d===0){const S=W.portrait,y=t/2,w=y/S,l=o;let a,s;w<=l?(s=w,a=y):(s=l,a=l*S);const h=(o-s)/2;f.push({x:(y-a)/2,y:h,width:a,height:s,orientation:"portrait"}),f.push({x:y+(y-a)/2,y:h,width:a,height:s,orientation:"portrait"}),g=a*s*2}else if(i===1&&d===1){const S=W.portrait,y=c[0],w=W[y.orientation],l=S+w,a=t*(S/l),s=t*(w/l),h=a/S,m=s/w,u=Math.min(o,Math.min(h,m)),x=(o-u)/2;f.push({x:0,y:x,width:a,height:u,orientation:"portrait"}),f.push({x:a,y:x,width:s,height:u,orientation:y.orientation}),g=a*u+s*u}else if(i===1&&d===2&&e.landscape===1&&e.wide===1){const S=W.portrait,y=W.wide,w=W.landscape,l=o,a=o*S,s=o/(1/y+1/w),h=s/y,m=s/w,u=a+s;if(Math.abs(u-t)<.1)f.push({x:0,y:0,width:a,height:l,orientation:"portrait"}),g+=a*l,c.find(N=>N.orientation==="wide")&&(f.push({x:0+a,y:0,width:s,height:h,orientation:"wide"}),g+=s*h),c.find(N=>N.orientation==="landscape")&&(f.push({x:0+a,y:h,width:s,height:m,orientation:"landscape"}),g+=s*m);else{const x=t/u,R=a*x,T=R/S,N=s*x,k=o/T;let I=R*k,M=o,_=N*k,O=_/y,v=_/w,D=I+_;if(D>t){const H=t/D;I=I*H,M=I/S,_=_*H,O=_/y,v=_/w,D=I+_,D>t&&(_=t-I,O=_/y,v=_/w)}const P=I+_;if(P>t){const H=t/P;I=I*H,M=I/S,_=_*H,O=_/y,v=_/w}const V=0;f.push({x:V,y:0,width:I,height:M,orientation:"portrait"}),g+=I*M,c.find(H=>H.orientation==="wide")&&(f.push({x:V+I,y:0,width:_,height:O,orientation:"wide"}),g+=_*O),c.find(H=>H.orientation==="landscape")&&(f.push({x:V+I,y:O,width:_,height:v,orientation:"landscape"}),g+=_*v)}}else if(i===1&&d===3){const S=W.portrait,y=o,w=y*S,l=w,a=t-l;f.push({x:0,y:0,width:w,height:y,orientation:"portrait"}),g+=w*y;const s=o/3;for(let h=0;h<c.length;h++){const m=c[h],u=W[m.orientation],x=s,R=a;let T,N;R/u<=x?(T=R,N=T/u):(N=x,T=N*u);const k=h*s+(s-N)/2;f.push({x:l+(a-T)/2,y:k,width:T,height:N,orientation:m.orientation}),g+=T*N}}else if(i===2&&d===1){const S=W.portrait,y=c[0],w=W[y.orientation],l=o/2,a=l*S,s=t-a,h=o*w;let m,u;h<=s?(u=o,m=u*w):(m=s,u=m/w);const x=a,R=l,T=(o-u)/2,N=(o/2-R)/2,k=o/2+(o/2-R)/2;f.push({x:0,y:T,width:m,height:u,orientation:y.orientation}),g+=m*u,f.push({x:s,y:N,width:x,height:R,orientation:"portrait"}),g+=x*R,f.push({x:s,y:k,width:x,height:R,orientation:"portrait"}),g+=x*R}else if(i===1&&d===2){const S=W.portrait,y=o,w=y*S,l=w,a=t-l;f.push({x:0,y:0,width:w,height:y,orientation:"portrait"}),g+=w*y;const s=o/2;for(let h=0;h<c.length;h++){const m=c[h],u=W[m.orientation],x=s,R=a;let T,N;R/u<=x?(T=R,N=T/u):(N=x,T=N*u);const k=h*s+(s-N)/2;f.push({x:l+(a-T)/2,y:k,width:T,height:N,orientation:m.orientation}),g+=T*N}}else{const S=i;if(S>0){const y=o/S,w=W.portrait;for(let l=0;l<S;l++){const a=Math.min(y,p/w),s=a*w,h=l*y+(y-a)/2;f.push({x:(p-s)/2,y:h,width:s,height:a,orientation:"portrait"}),g+=s*a}}if(c.length>0){const y=o/c.length;for(let w=0;w<c.length;w++){const l=c[w],a=W[l.orientation],s=y,h=E;let m,u;h/a<=s?(m=h,u=m/a):(u=s,m=u*a);const x=w*y+(y-u)/2;f.push({x:p+(E-m)/2,y:x,width:m,height:u,orientation:l.orientation}),g+=m*u}}}const j=X(n,f),b=g/(t*o)*100;return{videos:j,totalArea:g,efficiency:b}}function X(e,n){const t=new Array(n.length),o=new Set,i=new Set;for(let p=0;p<n.length;p++){const E=n[p];for(let f=0;f<e.length;f++)if(!o.has(f)&&e[f].orientation===E.orientation){t[p]={...E,orientation:e[f].orientation},o.add(f),i.add(p);break}}const d=[];for(let p=0;p<n.length;p++)i.has(p)||d.push(p);let c=0;for(let p=0;p<e.length;p++)if(!o.has(p)&&c<d.length){const E=d[c];t[E]={...n[E],orientation:e[p].orientation},c++}return t}function vn(e,n,t,o){if(e.portrait>0)return Me(e,n,t,o);if(e.landscape===2&&e.wide===1){const l=W.landscape,a=W.wide,s=t,h=s/a,m=o-h,u=t/2,x=u/l;let R,T,N,k;if(h<=o&&x<=m)R=s,T=h,N=u,k=x;else{const P=o/(h+x),V=Math.min(1,P);T=h*V,R=T*a,k=x*V,N=k*l}const I=(t-R)/2,M=T+(m-k)/2,O=X(n,[{x:I,y:0,width:R,height:T,orientation:"wide"},{x:0,y:M,width:N,height:k,orientation:"landscape"},{x:N,y:M,width:N,height:k,orientation:"landscape"}]),v=R*T+N*k*2,D=v/(t*o)*100;return{videos:O,totalArea:v,efficiency:D}}if(e.landscape===1&&e.wide===2){const l=W.landscape,a=W.wide,s=t/2,h=s/a,u=o-h,x=u*l;let R,T,N,k;if(h<=o&&x<=t&&h+u<=o)R=s,T=h,N=x,k=u;else{const V=h+u,Z=o/V;R=s,T=h*Z,k=u*Z,N=k*l}const I=0,M=t/2,_=(t-N)/2,v=X(n,[{x:I,y:0,width:R,height:T,orientation:"wide"},{x:M,y:0,width:R,height:T,orientation:"wide"},{x:_,y:T,width:N,height:k,orientation:"landscape"}]),D=R*T*2+N*k,P=D/(t*o)*100;return{videos:v,totalArea:D,efficiency:P}}if(e.wide===3){const l=W.wide,a=t/2,s=a/l,m=o-s,u=m*l;let x,R,T,N;if(s<=o&&u<=t&&s+m<=o)x=a,R=s,T=u,N=m;else{const P=s+m,V=o/P;x=a,R=s*V,N=m*V,T=N*l,T>t&&(T=t,N=T/l)}const k=0,I=t/2,M=(t-T)/2,O=X(n,[{x:k,y:0,width:x,height:R,orientation:"wide"},{x:I,y:0,width:x,height:R,orientation:"wide"},{x:M,y:R,width:T,height:N,orientation:"wide"}]),v=x*R*2+T*N,D=v/(t*o)*100;return{videos:O,totalArea:v,efficiency:D}}if(e.landscape===3){const l=W.landscape,a=t/(l*1.5),s=Math.min(o,a),h=s/2,m=s,u=h*l,x=m*l,R=(o-s)/2,T=[{x:0,y:R,width:u,height:h,orientation:"landscape"},{x:0,y:R+h,width:u,height:h,orientation:"landscape"},{x:u,y:R,width:x,height:m,orientation:"landscape"}],N=X(n,T),k=u*s+x*s,I=k/(t*o)*100;return{videos:N,totalArea:k,efficiency:I}}const i=[];if(e.landscape>0)for(let l=0;l<e.landscape;l++)i.push("landscape");if(e.wide>0)for(let l=0;l<e.wide;l++)i.push("wide");const d=i[0]||n[0].orientation,c=i[1]||n[1].orientation,p=i[2]||n[2].orientation,E=W[d],f=W[c],g=W[p],j=[()=>{const l=t*.6,a=t*.4,s=l/E,h=a/f,m=a/g,u=h+m;return s<=o&&u<=o?{positions:[{x:0,y:(o-s)/2,width:l,height:s,orientation:d},{x:l,y:0,width:a,height:h,orientation:c},{x:l,y:h,width:a,height:m,orientation:p}],totalArea:l*s+a*h+a*m}:null},()=>{const l=o*.5,a=o*.5,s=l*E,h=l*f,m=a*g;return s+h<=t&&m<=t?{positions:[{x:0,y:0,width:s,height:l,orientation:d},{x:s,y:0,width:h,height:l,orientation:c},{x:(t-m)/2,y:l,width:m,height:a,orientation:p}],totalArea:s*l+h*l+m*a}:null},()=>{const l=t/3,a=l/E,s=l/f,h=l/g;return Math.max(a,s,h)<=o?{positions:[{x:0,y:(o-a)/2,width:l,height:a,orientation:d},{x:l,y:(o-s)/2,width:l,height:s,orientation:c},{x:l*2,y:(o-h)/2,width:l,height:h,orientation:p}],totalArea:l*a+l*s+l*h}:null}];let b=null,S=0;for(const l of j){const a=l();a&&a.totalArea>S&&(S=a.totalArea,b=a)}if(!b){const l=t/3,a=Math.min(l/E,o),s=Math.min(l/f,o),h=Math.min(l/g,o);b={positions:[{x:0,y:(o-a)/2,width:l,height:a,orientation:d},{x:l,y:(o-s)/2,width:l,height:s,orientation:c},{x:l*2,y:(o-h)/2,width:l,height:h,orientation:p}],totalArea:l*a+l*s+l*h}}const y=X(n,b.positions),w=b.totalArea/(t*o)*100;return{videos:y,totalArea:b.totalArea,efficiency:w}}function Dn(e,n,t,o){if(e.portrait>0)return Me(e,n,t,o);const i=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)i.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)i.push("wide");const d=i[0]||n[0].orientation,c=i[1]||n[1].orientation,p=i[2]||n[2].orientation,E=i[3]||n[3].orientation,f=W[d],g=W[c],j=W[p],b=W[E],S=[()=>{const s=t/2,h=o/2,m=Math.min(s,h*f),u=m/f,x=Math.min(s,h*g),R=x/g,T=Math.min(s,h*j),N=T/j,k=Math.min(s,h*b),I=k/b;return{positions:[{x:(s-m)/2,y:(h-u)/2,width:m,height:u,orientation:d},{x:s+(s-x)/2,y:(h-R)/2,width:x,height:R,orientation:c},{x:(s-T)/2,y:h+(h-N)/2,width:T,height:N,orientation:p},{x:s+(s-k)/2,y:h+(h-I)/2,width:k,height:I,orientation:E}],totalArea:m*u+x*R+T*N+k*I}},()=>{const s=t*.6,h=t*.4,m=s/f,u=o/3,x=Math.min(h,u*g),R=x/g,T=Math.min(h,u*j),N=T/j,k=Math.min(h,u*b),I=k/b;return m<=o?{positions:[{x:0,y:(o-m)/2,width:s,height:m,orientation:d},{x:s,y:0,width:x,height:R,orientation:c},{x:s,y:u,width:T,height:N,orientation:p},{x:s,y:u*2,width:k,height:I,orientation:E}],totalArea:s*m+x*R+T*N+k*I}:null},()=>{const s=t/4,h=s/f,m=s/g,u=s/j,x=s/b;return Math.max(h,m,u,x)<=o?{positions:[{x:0,y:(o-h)/2,width:s,height:h,orientation:d},{x:s,y:(o-m)/2,width:s,height:m,orientation:c},{x:s*2,y:(o-u)/2,width:s,height:u,orientation:p},{x:s*3,y:(o-x)/2,width:s,height:x,orientation:E}],totalArea:s*h+s*m+s*u+s*x}:null}];let y=null,w=0;for(const s of S){const h=s();h&&h.totalArea>w&&(w=h.totalArea,y=h)}if(!y){const s=t/2,h=o/2,m=Math.min(h,s/f),u=Math.min(h,s/g),x=Math.min(h,s/j),R=Math.min(h,s/b);y={positions:[{x:(s-s)/2,y:(h-m)/2,width:s,height:m,orientation:d},{x:s+(s-s)/2,y:(h-u)/2,width:s,height:u,orientation:c},{x:(s-s)/2,y:h+(h-x)/2,width:s,height:x,orientation:p},{x:s+(s-s)/2,y:h+(h-R)/2,width:s,height:R,orientation:E}],totalArea:s*m+s*u+s*x+s*R}}const l=X(n,y.positions),a=y.totalArea/(t*o)*100;return{videos:l,totalArea:y.totalArea,efficiency:a}}const In=async(e,n,t)=>{const o=U(`/api/states/${e}`,n),d=(await B(o,{timeout:5e3,signal:t.signal})).data?.attributes?.access_token||null;return{entityId:e,accessToken:d}},$n=e=>new Promise(n=>setTimeout(n,e)),ze=async(e,n)=>{if(!e||e.length===0)return{tokens:{},error:null};const t=new AbortController,o=3;try{const i=e.map(async E=>{let f=null;for(let g=0;g<o;g++)try{return await In(E,n,t)}catch(j){if(f=j,(j.code==="ECONNABORTED"||j.code==="ERR_NETWORK"||j.message?.includes("timeout"))&&g<o-1){const S=1e3*Math.pow(2,g);L.debug(`Token fetch failed for ${E} (attempt ${g+1}), retrying in ${S}ms...`),await $n(S);continue}return L.error(`Failed to fetch access token for ${E} (attempt ${g+1}/${o}):`,j),{entityId:E,accessToken:null}}return L.error(`Failed to fetch access token for ${E} after ${o} attempts:`,f),{entityId:E,accessToken:null}}),d=await Promise.all(i),c={};let p=!1;return d.forEach(({entityId:E,accessToken:f})=>{f?c[E]=f:p=!0}),Object.keys(c).length===0&&p?{tokens:{},error:"Timeout: Kamera-Token konnten nicht geladen werden. Bitte erneut versuchen."}:{tokens:c,error:null}}catch(i){return t.signal.aborted?{tokens:{},error:null}:(L.error("Failed to fetch camera access tokens:",i),{tokens:{},error:K(i)})}},Mn=(e,n=null,t={})=>{if(!e)return null;let o;const i=t.HASS_HOST||"";if(i&&i!=="undefined"&&i!=="null")o=i.replace(/\/$/,"");else if(typeof window<"u"&&window.location)o=window.location.origin;else return null;const d=`${o}/api/camera_proxy_stream/${e}`;if(n){const c=d.includes("?")?"&":"?";return`${d}${c}token=${encodeURIComponent(n)}`}return d},Ue=45e3,Wn=$.div`
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
`,Pn=()=>{const e=F(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[],[o,i]=A.useState(!1),[d]=Nn(),[c,p]=A.useState(void 0),[E,f]=A.useState(100),[g,j]=A.useState("0"),b=A.useMemo(()=>t.map(T=>T.entity_id).filter(Boolean),[t]),[S,y]=A.useState({}),[w,l]=A.useState(!1),[a,s]=A.useState(null);A.useEffect(()=>{o&&b.length>0?(l(!0),s(null),ze(b,e).then(({tokens:T,error:N})=>{y(T),s(N),l(!1)}).catch(T=>{L.error("Failed to fetch camera tokens:",T),s(K(T)),l(!1)})):o||(y({}),s(null))},[o,b.join(","),e]);const h=A.useCallback(async()=>{if(b.length!==0){l(!0),s(null);try{const{tokens:T,error:N}=await ze(b,e);y(T),s(N)}catch(T){L.error("Failed to refresh camera tokens:",T),s(K(T))}finally{l(!1)}}},[b,e]),m=A.useRef(new Map);A.useEffect(()=>{o||(m.current.forEach(T=>{T&&T.src&&(T.src="")}),m.current.clear())},[o]),A.useEffect(()=>{if(d==="off"&&o){const T=window.setTimeout(()=>{i(!1),p(void 0)},Ue);return p(T),j(Ue+"ms"),f(0),()=>{T&&window.clearTimeout(T)}}else d==="on"&&(j(0),f(100),i(!0))},[d,o]),A.useEffect(()=>{d==="on"&&c!==void 0&&(window.clearTimeout(c),j(0),f(100),p(void 0))},[c,d]);const[u,x]=A.useState(null),R=()=>{u===null?x("confirm"):u==="confirm"&&(x("opening"),Ln(e),setTimeout(()=>x(null),2e3))};return A.useEffect(()=>{if(u==="confirm"){const T=setTimeout(()=>{x(null)},3e3);return()=>{clearTimeout(T)}}},[u]),A.useEffect(()=>{o||x(null)},[o]),n?r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>i(T=>!T),children:"CCTV"}),r.jsx(le,{visible:o,onClick:R,onClose:()=>{i(!1),x(null)},fullsize:!0,children:r.jsxs(Wn,{onClick:R,children:[r.jsx(mt,{completed:E,height:10,bgColor:c===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:g,transitionTimingFunction:"linear"}),r.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const T=t.map(O=>({orientation:O.orientation||"landscape"})),N=window.innerWidth,k=window.innerHeight-10,I=pt(T,N,k),M={portrait:t.filter(O=>(O.orientation||"landscape")==="portrait"),landscape:t.filter(O=>(O.orientation||"landscape")==="landscape"),wide:t.filter(O=>O.orientation==="wide")},_={portrait:0,landscape:0,wide:0};return I.videos.map((O,v)=>{const D=O.orientation,P=_[D],V=M[D][P];if(!V)return null;_[D]++;const Z=S[V.entity_id]||null,de=!!Z,H=Mn(V.entity_id,Z,e);return!H&&!de?r.jsx("div",{className:"video-container",style:{left:`${O.x}px`,top:`${O.y}px`,width:`${O.width}px`,height:`${O.height}px`},children:r.jsx("div",{className:"token-error",children:w?r.jsxs(r.Fragment,{children:[r.jsx(z,{path:Ne,size:"48px",color:"#ffffff",className:"loading-spinner"}),r.jsx("div",{children:"Lade Token..."})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{children:a||"Kamera-Token nicht verfügbar"}),r.jsx("button",{onClick:()=>h(),children:"Token neu laden"})]})})},`${D}-${P}-${v}`):H?r.jsxs("div",{className:"video-container",style:{left:`${O.x}px`,top:`${O.y}px`,width:`${O.width}px`,height:`${O.height}px`},children:[de&&o&&r.jsx("img",{ref:Pe=>{Pe?m.current.set(`${V.entity_id}-${v}`,Pe):m.current.delete(`${V.entity_id}-${v}`)},src:H,className:D,alt:"Camera stream",crossOrigin:"anonymous"},`${V.entity_id}-${v}`),!de&&r.jsx("div",{className:"token-error",children:w?r.jsxs(r.Fragment,{children:[r.jsx(z,{path:Ne,size:"48px",color:"#ffffff",className:"loading-spinner"}),r.jsx("div",{children:"Lade Token..."})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{children:a||"Kamera-Token nicht verfügbar"}),r.jsx("button",{onClick:()=>h(),children:"Token neu laden"})]})}),r.jsx("div",{className:"video-overlay",onClick:()=>R()})]},`${D}-${P}-${v}`):null})})()}),u==="confirm"&&r.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),u==="opening"&&r.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]}):null},Bn=$.div`
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

`,Vn=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>r.jsxs(Bn,{children:[r.jsxs("div",{className:"buttons",children:[r.jsx(z,{path:Mt,size:"32px",color:"#ffffff",onClick:n}),r.jsx(z,{path:Wt,size:"32px",color:"#ffffff",onClick:e}),r.jsx("button",{onClick:t,children:"Today"}),r.jsx(Pn,{})]}),r.jsx(Rn,{}),r.jsx(z,{path:Ne,size:"32px",color:"#ffffff",className:Y("indicator")})]}),Fn=C.memo(Vn),Gn=6e4,We=(e=Gn,n=void 0)=>{const[t,o]=A.useState(!0);return A.useEffect(()=>{const i=setInterval(()=>{o(d=>!d)},e);return()=>{clearInterval(i)}},[e,n]),t},zn={mdiDelete:Bt,mdiCake:Pt},Un=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return zn[n]||void 0},Yn=(e,n,t,o,i,d)=>B(i(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:65e3,signal:d}).then(c=>{!c.data||!Array.isArray(c.data)||c.data.forEach(p=>{const E="dateTime"in p.start?G.fromISO(p.start.dateTime):G.fromSQL(p.start.date);let f;"dateTime"in p.end?f=Math.floor(G.fromISO(p.end.dateTime).diff(n,"days").as("days")):f=Math.floor(G.fromSQL(p.end.date).diff(n,"days").as("days"))-1;const g=Math.floor(E.diff(n,"days").as("days"));f>=o.length&&(f=o.length-1);const j="dateTime"in p.start?"events":"allDay";if(g>=0&&g<o.length)for(let b=g;b<=f;b++)o[b][j]=[...o[b][j],{...p,icon:e.icon}]})}).catch(c=>{if(!(B.isCancel(c)||c.name==="AbortError"||c.code==="ERR_CANCELED"))throw c}),Ye=new Map,Hn=300*1e3,Kn=e=>e.toISODate(),qn=(e,n,t,o,i,d,c,p,E)=>{const f=[0,1,2,3,4,5].map(y=>e.plus({days:y}).startOf("day"));f[6]=e.plus({days:6}).endOf("day");const g=Kn(e),j=Ye.get(g);if(j&&Date.now()-j.timestamp<Hn){E.current&&t(j.data);return}const b=f.map(y=>({date:y,allDay:[],events:[]}));if(!c||c.length===0){L.warn("loadAll: No calendars configured, skipping fetch",{calendars:c}),E.current&&(t(b),o(!1));return}L.debug("loadAll: Starting calendar fetch",{calendarsCount:c.length,calendars:c.map(y=>y.name),startDate:e.toISO(),endDate:f[6].toISO()});const S=new AbortController;i.current&&i.current.abort(),i.current=S;try{E.current&&o(!0);const y=c.map(w=>Yn(w,f[0],f[6],b,p,S.signal));Promise.all(y).then(()=>{E.current&&!S.signal.aborted&&(Ye.set(g,{data:b,timestamp:Date.now()}),t(b),d(!1))}).catch(w=>{E.current&&!S.signal.aborted&&d(K(w))}).finally(()=>{E.current&&!S.signal.aborted&&o(!1)})}catch(y){E.current&&!S.signal.aborted&&(d(K(y)),o(!1))}},He=[],Jn=e=>{const n=F(),t=n.CALENDARS||[];A.useEffect(()=>{L.debug("useCalendarData: config changed",{hasCALENDARS:"CALENDARS"in n,CALENDARS:n.CALENDARS,CALENDARSCount:Array.isArray(n.CALENDARS)?n.CALENDARS.length:"not array",configKeys:Object.keys(n)})},[n]);const o=A.useMemo(()=>{const l=t.map(a=>({name:a.name,icon:Un(a.icon)}));return L.debug("Processing calendars from config (memo update):",{CALENDARS:t,count:t.length,processedCount:l.length,processed:l.map(a=>a.name)}),l},[t]);A.useEffect(()=>{L.debug("CALENDARS array changed:",{CALENDARS:t,count:t.length,calendarsMemoCount:o.length})},[t,o.length]);const i=A.useCallback(l=>U(`/api/calendars/${l}`,n),[n]),d=A.useCallback((l,a)=>`${i(l)}?${tn.stringify(a)}`,[i]),[c,p]=A.useState(He),[E,f]=A.useState(!1),[g,j]=A.useState(!1),[b,S]=A.useState(null),y=C.useRef(null),w=C.useRef(!0);return We(6e4,"Calendar"),A.useEffect(()=>(w.current=!0,L.debug("useCalendarData effect triggered:",{startDate:e?.toISO(),calendarsCount:o.length,calendars:o.map(l=>l.name),hasStartDate:e!==void 0,hasCalendars:o.length>0}),e!==void 0&&o.length>0?((b===null||!b.equals(e))&&(p(He),S(e)),L.debug("useCalendarData: Calling loadAll",{startDate:e.toISO(),calendarsCount:o.length}),qn(e,c,p,f,y,j,o,d,w)):o.length,()=>{w.current=!1,y.current&&y.current.abort()}),[e,o,d]),[c,g]};function ce(e){const[n,t]=A.useState(!1);function o({key:d}){d===e&&t(!0)}const i=({key:d})=>{d===e&&t(!1)};return A.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",i),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}),[e]),n}const Xn=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return G.fromJSDate(o)},Qn=e=>{const n=()=>e(p=>p.plus({days:7})),t=ce("ArrowRight");A.useEffect(()=>{t&&n()},[t]);const o=()=>e(p=>p.minus({days:7})),i=ce("ArrowLeft");A.useEffect(()=>{i&&o()},[i]);const d=()=>e(Xn()),c=ce("t");return A.useEffect(()=>{c&&d()},[c]),{nextWeek:n,previousWeek:o,startWeekWithToday:d}},Zn=e=>{const[n,t]=C.useState(0),[o,i]=C.useState(0),d=50;return{onTouchStart:f=>{i(0),t(f.targetTouches[0].clientX)},onTouchMove:f=>i(f.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const f=n-o,g=f>d,j=f<-d;g&&e.onSwipedLeft(),j&&e.onSwipedRight()}}},Ke=e=>G.fromISO(e).toLocaleString(G.TIME_24_SIMPLE),Te=e=>e.toFormat("c")>=6,Ce=e=>e.hasSame(G.now(),"day"),eo=$.div`
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
`,to=()=>{const[e,n]=A.useState(void 0),[t,o]=Jn(e),{nextWeek:i,previousWeek:d,startWeekWithToday:c}=Qn(n);A.useEffect(()=>{e===void 0&&c()},[]),A.useEffect(()=>{console.log("Week component - startDate:",e?.toISO(),"data length:",t.length,"error:",o)},[e,t.length,o]);const p=Zn({onSwipedLeft:()=>i(),onSwipedRight:()=>d()}),E=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),f=C.useMemo(()=>t.slice(0,7),[t]);return r.jsxs(eo,{...p,children:[r.jsx(Fn,{nextWeek:i,previousWeek:d,startWeekWithToday:c}),r.jsxs("div",{className:"schedule",children:[f.map((g,j)=>r.jsx("div",{className:Y({weekend:Te(g.date),today:Ce(g.date)},"caption"),children:r.jsx("h2",{children:g.date.toLocaleString(E)})},j)),f.map((g,j)=>r.jsx("div",{className:Y("allDayRow",{weekend:Te(g.date),today:Ce(g.date)}),children:g.allDay.map((b,S)=>r.jsx("div",{className:"allDayEvent",children:b.summary},S))},j)),f.map((g,j)=>r.jsx("div",{className:Y("eventRow",{weekend:Te(g.date),today:Ce(g.date)}),children:g.events.map((b,S)=>r.jsxs("div",{className:"event",children:[r.jsx("div",{children:b.summary}),r.jsxs("h3",{children:[b.icon&&r.jsx(z,{path:b.icon,size:"1rem",color:"#ffffff"}),Ke(b.start.dateTime)," - ",Ke(b.end.dateTime)]})]},S))},j))]}),t.length===0&&r.jsx("div",{className:"loading",children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsx(rt,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&r.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:r.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},Ee={"clear-day":{icon:jt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:Ct,label:"Klar",color:"#eeeef5"},rain:{icon:Tt,label:"Regen",color:"#80a5d6"},snow:{icon:St,label:"Schnee",color:"#8c82ce"},sleet:{icon:At,label:"Graupel",color:"#aba4db"},wind:{icon:bt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:Et,label:"Neblig",color:"#d5dae2"},cloudy:{icon:wt,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:yt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:xt,label:"Teils bewölkt",color:"#d5dae2"}},no=e=>{const[n,t]=A.useState([]),[o,i]=A.useState(!1),d=We(6e4*10,"Weather"),c=F(),p=c.ENABLE_WEATHER||!1,E=c.WEATHER_LATITUDE,f=c.WEATHER_LONGITUDE,g=p&&E&&f,j=()=>`.${`/forecast/${E},${f}?units=si&exclude=minutely`}`;return A.useEffect(()=>{if(!g)return;let b=!0;const S=new AbortController;return B(j(),{signal:S.signal}).then(y=>{b&&(t(y.data),i(!1))}).catch(y=>{b&&!S.signal.aborted&&i(K(y))}).finally(()=>{b&&e&&e(!1)}),()=>{b=!1,S.abort()}},[d,e,g,p,E,f]),[n,o]},oo=Nt(Lt),qe=$.div`

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
`,Je=C.memo(({data:e,daily:n=!1})=>r.jsxs("div",{children:[r.jsxs("div",{children:[!n&&G.fromSeconds(e.time).toLocaleString(G.TIME_24_SIMPLE),n&&G.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),r.jsx("div",{children:r.jsx(Oe,{icon:e.icon})}),r.jsx("div",{children:r.jsxs("strong",{children:[!n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),r.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),r.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),ro=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:Ee[n.icon]?.color||"#ffffff",text:Ee[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),Oe=({icon:e})=>{const n=Ee[e];return r.jsx(n.icon,{size:60,color:"#ffffff"})},io=()=>{const n=F().ENABLE_WEATHER||!1,[t,o]=no(),[i,d]=A.useState(!1),c=ce("w"),p=A.useRef(),E=C.useCallback(()=>d(S=>!S),[]),f=C.useCallback(()=>d(!0),[]),g=C.useMemo(()=>ro(t),[t]),j=C.useMemo(()=>[3,6,9,12],[]),b=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return A.useEffect(()=>{if(!i||!p.current||!t||!t.hourly||g.length===0)return;const S={timezone:"Europe/Berlin"},y=document.createElement("div");return p.current.textContent="",p.current.appendChild(y),nn(y,g,S),()=>{p.current&&(p.current.textContent="")}},[i,g]),A.useEffect(()=>{c&&E()},[c]),n?!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?r.jsx(qe,{children:r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":r.jsxs(qe,{children:[r.jsxs("div",{onClick:f,children:[r.jsxs("div",{className:"headline",children:[r.jsx(Oe,{icon:t.currently.icon}),r.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),r.jsx("div",{className:"forecast",children:j.map((S,y)=>r.jsx(Je,{data:t.hourly.data[S]},y))})]}),r.jsx(le,{visible:i,onClick:E,children:r.jsxs("div",{className:"full-weather",children:[o!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),r.jsxs("div",{className:"detail-header",children:[r.jsx("div",{children:r.jsxs("div",{className:"headline",children:[r.jsx(Oe,{icon:t.daily.data[0].icon}),r.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",r.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),r.jsx("h3",{children:Ee[t.daily.data[0].icon].label})]}),r.jsx("div",{className:"values",children:r.jsxs("div",{className:"table",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Regen:"})," ",Math.round(t.daily.data[0].precipProbability*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),r.jsx("h3",{children:"Die nächsten 24 Stunden"}),r.jsx("div",{ref:p}),r.jsx("h3",{children:"Die nächste Woche"}),r.jsx("div",{className:"forecast",children:b.map((S,y)=>r.jsx(Je,{data:t.daily.data[S],daily:!0},y))}),r.jsxs("div",{className:"info",children:["Aktualisiert ",r.jsx(Rt,{date:G.fromSeconds(t.currently.time).toJSDate(),formatter:oo})]})]})})]}):null},so=C.memo(io),ao="AK Wandsbek",co="Hamburg",lo="Master:62016",uo="STATION",fo={x:10.091341,y:53.568702},ho={name:ao,city:co,id:lo,type:uo,coordinate:fo},ye={departureList:"departureList",checkName:"checkName"},po=async(e,n,t,o)=>{const i={Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},d=o.HASS_ACCESS_TOKEN||"";d&&d.trim()!==""&&d!=="undefined"&&d!=="null"&&(i.Authorization=`Bearer ${d}`);const c=U(`/gti/public/${e}`,o);return B({method:"post",url:c,data:n,signal:t,headers:i})},Xe=(e,n)=>e.realtimeOffset-n.realtimeOffset,go=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(Xe),to:n.filter(t=>t.directionId===6).slice(0,3).sort(Xe)}},mo=e=>{const n=F(),t=n.ENABLE_HVV||!1,[o,i]=A.useState([]),[d,c]=A.useState(!1),p=We(6e4),E=t;return A.useEffect(()=>{if(!E)return;if(!(e in ye)){L.warn(e,"not supported by HVV connector");return}let f=!0;const g=new AbortController;let j={version:51};switch(e){case ye.checkName:j={...j,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case ye.departureList:const b=G.now();j={...j,station:ho,time:{date:b.toFormat("dd.MM.yyyy"),time:b.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:j=void 0}return po(e,j,g.signal,n).then(b=>{f&&(i(go(b.data)),c(!1))}).catch(b=>{f&&!g.signal.aborted&&c(K(b))}),()=>{f=!1,g.abort()}},[e,p,E,t]),[o,d]},xo=$.div`
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
`,Qe=C.memo(({line:e,direction:n,realtimeOffset:t})=>r.jsxs("div",{className:"departure",children:[r.jsx("div",{children:r.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),r.jsx("div",{children:t===0?"Jetzt":r.jsxs(r.Fragment,{children:["in ",t," '"]})})]})),yo=()=>{const n=F().ENABLE_HVV||!1,[t,o]=mo(ye.departureList);return n?r.jsx(xo,{children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((i,d)=>r.jsx(Qe,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},d)),r.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((i,d)=>r.jsx(Qe,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},d))]})}):null},wo=C.memo(yo),Eo=()=>{const e=F(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const o=e.ENTITY_CHARGING_STATE||"",i=e.ENTITY_STATE_OF_CHARGE||"",[d,c]=A.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[p,E]=A.useState(!1),f=n&&(t||o||i);A.useEffect(()=>{if(!f)return;(async()=>{const S=[];t&&S.push(B(U(`/api/states/${t}`,e)).then(l=>({type:"preclimateStatus",value:l.data.state==="on"})).catch(l=>({type:"preclimateStatus",error:K(l)}))),o&&S.push(B(U(`/api/states/${o}`,e)).then(l=>({type:"chargingState",value:l.data.state==="on"})).catch(l=>({type:"chargingState",error:K(l)}))),i&&S.push(B(U(`/api/states/${i}`,e)).then(l=>({type:"stateOfCharge",value:parseFloat(l.data.state)||0})).catch(l=>({type:"stateOfCharge",error:K(l)})));const y=await Promise.all(S);let w=!1;y.forEach(l=>{l.error?w=l.error:c(a=>({...a,[l.type]:l.value}))}),E(w||!1)})()},[f,n,t,o,i]);const{error:g}=$e({enabled:f,checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3,logPrefix:"EV entities",onReady:(b,S)=>{const y=l=>{const a=l.entity_id,s=l.state;c(h=>{const m={...h};return a===t?m.preclimateStatus=s==="on":a===o?m.chargingState=s==="on":a===i&&(m.stateOfCharge=parseFloat(s)||0),m})},w=[];return t&&w.push(t),o&&w.push(o),i&&w.push(i),b.readyState===WebSocket.OPEN&&(w.forEach(l=>{S.current.set(l,y),b.send(JSON.stringify({type:"subscribe_entity",entity_id:l}))}),L.debug(`Subscribed to EV entity state changes: ${w.join(", ")}`)),()=>{w.forEach(l=>{S.current.delete(l),b.readyState===WebSocket.OPEN&&b.send(JSON.stringify({type:"unsubscribe_entity",entity_id:l}))})}},dependencies:[f,t,o,i]});return[d,p||g||!1]},bo=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&B.post(U("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to start preclimate:",t)})},Ao=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&B.post(U("/api/services/button/press",e),{entity_id:n}).catch(t=>{L.error("Failed to stop preclimate:",t)})},So=$.div`
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
`,To=(e,n)=>n?Ft:e>=80?Gt:e>=50?zt:e>=20?Ut:Yt,Co=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",jo=()=>{const e=F(),n=e.ENABLE_EV||!1,[t,o]=Eo(),{preclimateStatus:i,chargingState:d,stateOfCharge:c}=t,[p,E]=C.useState(!1),[f,g]=C.useState(null),[j,b]=C.useState(!1),[S,y]=C.useState(!1),[w,l]=C.useState(0),a=C.useRef(null),s=C.useRef(null),h=C.useRef(i),m=C.useRef(null);C.useEffect(()=>{h.current!==i&&(p&&m.current!==null&&i===(f==="start")&&(l(f==="start"?360:0),y(!0),setTimeout(()=>{E(!1),g(null),y(!1),l(0),m.current=null,b(!1)},300),a.current&&(clearTimeout(a.current),a.current=null)),h.current=i)},[i,p,f]),C.useEffect(()=>{if(!p||S){s.current&&(cancelAnimationFrame(s.current),s.current=null);return}const M=m.current||Date.now(),_=1e4,O=f==="stop",v=()=>{const D=Date.now()-M,P=Math.min(D/_,1);l(O?360*(1-P):360*P),P<1&&!S&&(s.current=requestAnimationFrame(v))};return s.current=requestAnimationFrame(v),()=>{s.current&&(cancelAnimationFrame(s.current),s.current=null)}},[p,S,f]),C.useEffect(()=>()=>{a.current&&clearTimeout(a.current),s.current&&cancelAnimationFrame(s.current)},[]);const u=C.useCallback(()=>{if(o!==!1||p)return;const M=!i,_=M?"start":"stop";E(!0),g(_),y(!1),b(!1),l(0),m.current=Date.now(),h.current=i,M?bo(e):Ao(e),a.current=setTimeout(()=>{p&&(b(!0),setTimeout(()=>{E(!1),g(null),y(!1),l(0),b(!1),m.current=null},500))},15e3)},[i,o,p]),x=To(c||0,d),R=Co(c||0),T=Math.round(c||0),N=p?f==="start":i,k=f==="start"?"#17e146":"#f85a5a",I=f==="start"?"clockwise":"counterclockwise";return n?r.jsxs(So,{className:Y({disabled:o!==!1}),children:[r.jsxs("h2",{children:["Auto",o!==!1?r.jsxs("div",{className:"battery-info",children:[r.jsx(z,{path:De,size:"1.2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs("div",{className:"battery-info",children:[r.jsxs("span",{className:"charge-percentage",children:[T,"%"]}),r.jsx(z,{path:x,size:"1.2rem",color:R})]})]}),o===!1&&r.jsxs("div",{className:"preclimate-button-wrapper",children:[p&&r.jsx("div",{className:Y("progress-ring",I,{complete:S}),style:{"--progress-color":k,"--progress-angle":`${w}deg`,"--progress-gradient":f==="stop"?`conic-gradient(from -90deg, ${k} 0deg, ${k} ${w}deg, transparent ${w}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${k} 0deg, ${k} ${w}deg, transparent ${w}deg, transparent 360deg)`}}),r.jsxs("button",{className:Y("preclimate-button",{spinning:N&&!p,shaking:j}),onClick:u,disabled:o!==!1||p,children:[r.jsx(z,{path:Vt,size:"2rem",color:N?"#ff9800":"#ffffff"}),r.jsx("span",{children:N?"Stop":"Start"})]})]})]}):null},Ro=C.memo(jo),No=()=>{const e=F(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",o=n&&t,[i,d,c]=Ie({entityId:t,enabled:o,config:e,initialState:"closed"}),{error:p}=ht({entityId:t,enabled:o,onStateUpdate:c,logPrefix:"garage door"});return[i,d||p||!1]},Lo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);B.post(U("/api/services/cover/toggle",n),{entity_id:t}).catch(i=>{L.error("Failed to toggle garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},ko=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);B.post(U("/api/services/cover/open_cover",n),{entity_id:t}).catch(i=>{L.error("Failed to open garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},_o=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);B.post(U("/api/services/cover/close_cover",n),{entity_id:t}).catch(i=>{L.error("Failed to close garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},Oo=$.div`
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
`,gt=$.div`
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
`,ve=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:Xt},open:{label:"Offen",icon:Jt},closed:{label:"Geschlossen",icon:qt},opening:{label:"Öffnet",icon:Kt},closing:{label:"Schließt",icon:Ht}};return n[e]||L.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:Qt}},vo=({garageDoor:e,animate:n=!1})=>r.jsxs(gt,{className:Y({animate:n}),children:[r.jsx(z,{path:ve(e).icon,size:"2rem",color:"#ffffff"}),r.jsx("span",{children:ve(e).label})]}),Do=e=>kt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return ve(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),Io=()=>{const e=F(),n=e.ENABLE_GARAGE||!1,[t,o]=No(),[i,d]=A.useState(void 0),[c,p]=A.useState(!1),[E,f]=A.useState(!1);A.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!i){const y=new Promise(w=>{d({resolve:w})});Do(y)}}else i&&(i.resolve(t),d(void 0))},[t]);const g=ce("g");A.useEffect(()=>{g&&o===!1&&Lo(p,e)},[g,o,e]);const j=C.useCallback(S=>{if(o===!1)switch(f(!1),S){case"open":ko(p,e);break;case"close":_o(p,e);break}},[p,o,e]),b=C.useCallback(()=>{o===!1&&f(!0)},[o]);return n?r.jsxs(Oo,{className:Y({disabled:o!==!1}),children:[r.jsx("h2",{children:"Garage"}),r.jsx("div",{className:"status",onClick:b,children:o!==!1?r.jsxs(gt,{children:[r.jsx(z,{path:De,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsx(vo,{garageDoor:t,animate:c})}),r.jsx(le,{visible:E&&o===!1,onClick:()=>f(!1),children:r.jsxs("div",{className:"controls",children:[r.jsx("h2",{children:"Garagentor"}),r.jsx("div",{onClick:()=>j("open"),children:"Öffnen"}),r.jsx("div",{onClick:()=>j("close"),children:"Schließen"})]})})]}):null},$o=C.memo(Io),Mo=(e,n)=>e?U(`/api/states/${e}`,n):null,J={done:{label:"Fertig",animate:!1,icon:en},off:{label:"Aus",animate:!1,icon:Zt},standby:{label:"Standby",animate:!1,icon:Be},running:{label:"Läuft …",animate:!0,icon:Be}},Wo={off:0,standby:2,running:16,done:256},Po=()=>{const e=F(),n=e.ENABLE_LAUNDRY||!1,t=e.LAUNDRY_MACHINES||[],o=Array.isArray(t)?t:[],[i,d]=A.useState({}),[c,p]=A.useState({}),{error:E}=$e({enabled:n&&o.length>0,logPrefix:"laundry",onReady:(a,s)=>(o.forEach(h=>{if(h.entity_id){const m=u=>{u.state!==void 0&&d(x=>({...x,[h.entity_id]:u.state}))};s.current.set(h.entity_id,m),a.readyState===WebSocket.OPEN&&(a.send(JSON.stringify({type:"subscribe_entity",entity_id:h.entity_id})),L.debug(`Subscribed to ${h.entity_id} state changes`))}}),()=>{o.forEach(h=>{h.entity_id&&(s.current.delete(h.entity_id),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"unsubscribe_entity",entity_id:h.entity_id})))})}),dependencies:[o.map(a=>a.entity_id).join(",")]});A.useEffect(()=>{if(!n||o.length===0)return;const a=new Map;return o.forEach(s=>{if(!s.entity_id)return;const h=Mo(s.entity_id,e);if(!h)return;const m=new AbortController;a.set(s.entity_id,m),B(h,{signal:m.signal}).then(u=>{d(x=>({...x,[s.entity_id]:u.data.state})),p(x=>({...x,[s.entity_id]:!1}))}).catch(u=>{m.signal.aborted||p(x=>({...x,[s.entity_id]:K(u)}))})}),()=>{a.forEach(s=>s.abort())}},[n,o.map(a=>a.entity_id).join(","),e]);const f=o.map(a=>({state:i[a.entity_id]||"off",error:c[a.entity_id]||E||!1,name:a.name})),[g,j]=A.useState(J.off),[b,S]=A.useState(!1),y=f.map(a=>a.state),w=f.map(a=>a.error);A.useEffect(()=>{const a=w.some(s=>s!==!1);S(a&&w.find(s=>s!==!1)||!1)},[w]),A.useEffect(()=>{const a=y.reduce((s,h)=>s+(Wo[h]||0),0);a===0?j(J.off):a<16?j(J.standby):a<256?j(J.running):a%256===0?j(J.done):a%256%16===0?j(J.running):a%256%2===0?j(J.done):j(J.running)},[y]);const l=f.map(a=>({label:a.name,state:a.state}));return[g,l,b]},Bo=$.div`
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
`,Vo=()=>{const n=F().ENABLE_LAUNDRY||!1,[t,o,i]=Po(),[d,c]=A.useState(!1),p=C.useCallback(()=>{i===!1&&c(!0)},[i]),E=C.useCallback(()=>c(!1),[]);return n?r.jsxs(Bo,{className:Y({disabled:i!==!1}),children:[r.jsx("h2",{children:"Wäsche"}),r.jsx("div",{className:"status",onClick:p,children:i!==!1?r.jsxs(r.Fragment,{children:[r.jsx(z,{path:De,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:Y({animate:t.animate}),children:r.jsx(z,{path:t.icon,size:"2rem",color:"#ffffff"})}),r.jsx("span",{children:t.label})]})}),r.jsx(le,{visible:d&&i===!1,onClick:E,children:r.jsxs("div",{className:"states",children:[r.jsx("h2",{children:"Wäsche"}),o.map((f,g)=>r.jsxs("div",{children:[r.jsx("div",{className:"subtitle",children:f.label}),r.jsx("div",{className:Y({animate:J[f.state].animate}),children:r.jsx(z,{path:J[f.state].icon,size:2})}),r.jsx("div",{children:J[f.state].label})]},g))]})})]}):null},Fo=C.memo(Vo),Go=$.div`
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
`,zo=()=>r.jsxs(Go,{children:[r.jsxs("div",{className:"top-content",children:[r.jsx(so,{}),r.jsx(wo,{}),r.jsx(Ro,{})]}),r.jsxs("div",{className:"two-cols",children:[r.jsx($o,{}),r.jsx(Fo,{})]})]}),Uo=C.memo(zo),Ze=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],Yo=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],we={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},Ho={landscape:"L",portrait:"P",wide:"W"},Ko=$.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,qo=$.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Jo=$.div`
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
`,et=$.select`
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
`,tt=$.input`
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
`,Xo=$.button`
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
`,nt=$.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Qo=$.button`
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
`,Zo=$.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,er=$.div`
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
`,tr=$.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,nr=$.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,or=$.div`
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
`,rr=$.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,ir=$.h3`
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
`,ot=()=>{const[e,n]=C.useState(1920),[t,o]=C.useState(1080),[i,d]=C.useState("Full HD"),[c,p]=C.useState(""),[E,f]=C.useState(""),[g,j]=C.useState([{orientation:"landscape"}]),[b,S]=C.useState(null),y=C.useMemo(()=>pt(g,e,t),[g,e,t]),w=u=>{const x=Ze.find(R=>R.name===u);x&&x.width&&x.height?(n(x.width),o(x.height),d(u),p(""),f("")):u==="Custom"&&d("Custom")},l=()=>{const u=parseInt(c),x=parseInt(E);u>0&&x>0&&(n(u),o(x))},a=u=>{j(u.videos),S(u.name)},s=u=>{const x=[];for(let R=0;R<u;R++)x.push(g[R]||{orientation:"landscape"});j(x),S(null)},h=(u,x)=>{const R=[...g];R[u]={orientation:x},j(R),S(null)},m=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return r.jsxs(Ko,{children:[r.jsx(qo,{children:"Video Tiling Algorithm Demo"}),r.jsxs(Jo,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:"Screen Size Preset"}),r.jsx(et,{value:i,onChange:u=>w(u.target.value),children:Ze.map(u=>r.jsx("option",{value:u.name,children:u.name},u.name))})]}),i==="Custom"&&r.jsxs(r.Fragment,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:"Custom Width"}),r.jsx(tt,{type:"number",value:c,onChange:u=>p(u.target.value),placeholder:"Width",min:"100"})]}),r.jsxs(ee,{children:[r.jsx(te,{children:"Custom Height"}),r.jsx(tt,{type:"number",value:E,onChange:u=>f(u.target.value),placeholder:"Height",min:"100"})]}),r.jsxs(ee,{children:[r.jsx(te,{children:" "}),r.jsx(Xo,{onClick:l,children:"Apply Custom Size"})]})]}),r.jsxs(ee,{children:[r.jsx(te,{children:"Number of Videos"}),r.jsxs(et,{value:g.length,onChange:u=>s(parseInt(u.target.value)),children:[r.jsx("option",{value:"1",children:"1 Video"}),r.jsx("option",{value:"2",children:"2 Videos"}),r.jsx("option",{value:"3",children:"3 Videos"}),r.jsx("option",{value:"4",children:"4 Videos"})]})]}),g.map((u,x)=>r.jsxs(ee,{children:[r.jsxs(te,{children:["Video ",x+1," Orientation"]}),r.jsxs(nt,{children:[r.jsx(je,{active:u.orientation==="landscape",orientation:"landscape",onClick:()=>h(x,"landscape"),children:"Landscape"}),r.jsx(je,{active:u.orientation==="portrait",orientation:"portrait",onClick:()=>h(x,"portrait"),children:"Portrait"}),r.jsx(je,{active:u.orientation==="wide",orientation:"wide",onClick:()=>h(x,"wide"),children:"Wide"})]})]},x))]}),r.jsxs(rr,{children:[r.jsx(ir,{children:"Test Scenarios"}),r.jsx(nt,{children:Yo.map(u=>r.jsx(Qo,{active:b===u.name,onClick:()=>a(u),children:u.name},u.name))})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:r.jsx(Zo,{style:{width:`${e*m}px`,height:`${t*m}px`},children:y.videos.map((u,x)=>r.jsxs(er,{orientation:u.orientation,style:{left:`${u.x*m}px`,top:`${u.y*m}px`,width:`${u.width*m}px`,height:`${u.height*m}px`},children:[r.jsxs(tr,{children:[Ho[u.orientation]," ",x+1]}),r.jsxs(nr,{children:[Math.round(u.width)," × ",Math.round(u.height)]})]},x))})}),r.jsxs(or,{children:[r.jsxs(he,{children:[r.jsx(pe,{children:"Canvas Size"}),r.jsxs(ge,{children:[e," × ",t]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Total Area Used"}),r.jsxs(ge,{children:[Math.round(y.totalArea).toLocaleString()," px²"]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Efficiency"}),r.jsxs(ge,{children:[y.efficiency.toFixed(2),"%"]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Display Scale"}),r.jsxs(ge,{children:[(m*100).toFixed(1),"%"]})]})]})]})},sr=$.div`
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
`;class be extends A.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",i=n?.stack||"",d=t?.componentStack||"";L.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:i,componentStack:d})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?r.jsxs(sr,{children:[r.jsx("h2",{children:"Something went wrong"}),r.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,r.jsxs("div",{children:[r.jsx("button",{onClick:this.handleReset,children:"Try Again"}),r.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Re="hass-family-calendar-config-banner-dismissed",ar=$.div`
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
`,cr=()=>{const e=at(),n=ct(),t=lt(),o=st(),[i,d]=C.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(Re)==="true"}catch{}return!1}),[c,p]=C.useState(!1);if(C.useEffect(()=>{if(e&&i){d(!1);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(Re)}catch{}}},[e,i]),o||i||!e&&!n)return null;const E=async()=>{p(!0);try{await t()}catch{}finally{p(!1)}},f=()=>{d(!0);try{typeof window<"u"&&window.localStorage&&localStorage.setItem(Re,"true")}catch{}};let g="warning",j="";return e&&n?(g="warning",j=`Using cached configuration. Failed to load from server: ${e}`):e&&!n?(g="error",j=`Failed to load configuration: ${e}`):n&&(g="warning",j="Using cached configuration. Some features may be outdated."),r.jsxs(ar,{severity:g,children:[r.jsx("div",{className:"message",children:j}),r.jsxs("div",{className:"actions",children:[e&&r.jsx("button",{onClick:E,disabled:c,children:c?"Retrying...":"Retry"}),r.jsx("button",{className:"dismiss",onClick:f,title:"Dismiss",children:"×"})]})]})},lr=_t`
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
`,dr=$.div`
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
`;function ur(){const e=at(),n=ct(),t=st(),[o]=A.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return window.localStorage.getItem("hass-family-calendar-config-banner-dismissed")==="true"}catch{}return!1}),i=!t&&!o&&(e||n);return r.jsxs(dr,{$hasBanner:i,children:[r.jsx(lr,{}),r.jsx(cr,{}),r.jsxs("div",{className:"main",children:[r.jsx(be,{children:r.jsx(to,{})}),r.jsx(be,{children:r.jsx(Uo,{})})]}),r.jsx(vt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function fr(){return r.jsx(be,{children:r.jsxs(Ot,{children:[r.jsx(Ae,{path:"/demo",element:r.jsx(ot,{})}),r.jsx(Ae,{path:"/tiling-demo",element:r.jsx(ot,{})}),r.jsx(Ae,{path:"*",element:r.jsx(ur,{})})]})})}const hr=Dt.createRoot(document.getElementById("root"));hr.render(r.jsx(A.StrictMode,{children:r.jsx(be,{children:r.jsx(dn,{children:r.jsx(En,{children:r.jsx(It,{children:r.jsx(fr,{})})})})})}));
