import{b as O,R as S,j as r,I as G,r as C,l as rt,P as xt,W as Et,d as yt,e as wt,f as bt,h as At,i as St,k as Tt,m as Ct,n as Rt,o as jt,T as Lt,p as Nt,s as kt,y as _t,q as Ot,t as Dt,u as Te,L as vt,v as It,B as $t}from"./react-vendor-DZAsZpFh.js";import{D as F}from"./date-vendor-BDx6lZXm.js";import{f as z}from"./vendor-D_ND1KRz.js";import{m as Mt,a as it,b as Wt,c as Bt,d as Pt,e as Vt,f as ve,g as Ut,h as Ft,i as Gt,j as zt,k as Yt,l as Ht,n as Kt,o as qt,p as Jt,q as Xt,r as Qt,s as Zt,t as We,u as en,v as tn}from"./ui-vendor-CHQCwb4U.js";import{a as B,q as nn}from"./utils-vendor-OgzBtw9T.js";import{t as on}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=t(i);fetch(i.href,c)}})();const rn=O.div`
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
`,ue=({visible:e,children:n,onClick:t,onClose:o,fullsize:i=!1})=>{const c=o||t,a=m=>{m.stopPropagation(),m.preventDefault(),c()};return S.useEffect(()=>{if(e){const m=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${m}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,m)}}},[e]),e?r.jsxs(rn,{onClick:t,children:[r.jsx("div",{className:"close",onClick:a,children:r.jsx(G,{path:Mt,size:2})}),r.jsx("div",{className:z("content",{fullsize:i}),onClick:m=>m.stopPropagation(),children:n})]}):null};let st=!0;const sn=e=>{st=!!e};let xe=!1,H=[],ae=0;const ce=100,Be=50,Ne=()=>{if(H.length===0||xe)return;const e=H.shift(),n=Date.now();n-ae>=ce?se(e.level,e.message,e.metadata):(H.unshift(e),setTimeout(Ne,ce-(n-ae)))},se=(e,n,t=null)=>{if(!st)return;if(xe){H.length<Be&&H.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const o=Date.now();if(o-ae<ce){H.length<Be&&(H.push({level:e,message:n,metadata:t,timestamp:o}),H.length===1&&setTimeout(Ne,ce-(o-ae)));return}setTimeout(async()=>{xe=!0,ae=Date.now();try{const c=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,a={level:e,message:n,...t&&{metadata:t}};await B.create({timeout:2e3}).post(c,a)}catch{H.length>10&&(H=[])}finally{xe=!1,H.length>0&&setTimeout(Ne,ce)}},0)},fe=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},he=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},N={log:(...e)=>{const n=fe(e),t=he(e);n&&se("INFO",n,t)},error:(...e)=>{console.error(...e);const n=fe(e),t=he(e);n&&se("ERROR",n,t)},warn:(...e)=>{const n=fe(e),t=he(e);n&&se("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=fe(e),t=he(e);n&&se("INFO",n,t)}},an=3e4,cn=1e4,Pe=6e4,ln=1e3,dn=5e3,un=2e3,Ve=45e3,fn=1e4,hn=15e3,Ie=3e3,pn={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},gn=!1,ke="hass-family-calendar-config",mn=()=>{const e=(n,t=void 0)=>{const o=pn[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},Ce=()=>{try{if(typeof window>"u"||!window.localStorage)return null;const e=localStorage.getItem(ke);if(e){const n=JSON.parse(e);return N.debug("Loaded cached config from localStorage"),n}}catch(e){N.warn("Failed to load cached config from localStorage:",e);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(ke)}catch{}}return null},xn=e=>{try{return typeof window>"u"||!window.localStorage?!1:(localStorage.setItem(ke,JSON.stringify(e)),N.debug("Saved config to localStorage"),!0)}catch(n){return N.warn("Failed to save config to localStorage:",n),!1}},ie=C.createContext(null),En=({children:e})=>{const[n,t]=C.useState(()=>Ce()||mn()),[o,i]=C.useState(!0),[c,a]=C.useState(null),[m,w]=C.useState(()=>!!Ce()),u=C.useRef(!0),h=C.useRef(n),j=C.useRef(!1),T=C.useRef(!1);C.useEffect(()=>{h.current=n},[n]);const b=C.useCallback(async(s=!1)=>{if(j.current&&!s||!s&&T.current)return!1;j.current=!0,s||(T.current=!0),N.debug("Starting config load",{isReload:s,hasInitialized:T.current});const d=typeof window<"u"&&window.location?`${window.location.pathname.replace(/\/$/,"")}/api/config`:"/api/config";try{const g=await B.get(d,{timeout:dn});if(g.data&&typeof g.data=="object")if(typeof g.data=="object"&&!Array.isArray(g.data)){N.debug("Config loaded from API:",{hasCALENDARS:"CALENDARS"in g.data,CALENDARS:g.data.CALENDARS,CALENDARSCount:Array.isArray(g.data.CALENDARS)?g.data.CALENDARS.length:"not array",allKeys:Object.keys(g.data)});const l=h.current,y=JSON.stringify(g.data)!==JSON.stringify(l);N.debug("Updating config with new data from API:",{configChanged:y,CALENDARSCount:Array.isArray(g.data.CALENDARS)?g.data.CALENDARS.length:"not array",currentCALENDARSCount:Array.isArray(l?.CALENDARS)?l.CALENDARS.length:"not array",responseKeys:Object.keys(g.data).length,currentConfigKeys:Object.keys(l||{}).length}),y?(t(g.data),w(!1),a(null),gn||xn(g.data)):(w(!1),a(null));const R=Object.keys(g.data).filter(A=>A.startsWith("ENABLE_")&&g.data[A]).map(A=>A.replace("ENABLE_",""));return N.info(`Configuration ${s?"reloaded":"loaded"} from API endpoint. Enabled features: ${R.length>0?R.join(", "):"none"}`,{enabledFeatures:R,totalConfigKeys:Object.keys(g.data).length}),s||i(!1),j.current=!1,!0}else throw new Error("Invalid config structure: expected object, got array");else throw new Error("Invalid config response: missing or invalid data")}catch(g){const l=g.response?.data?.detail||g.message||"Unknown error";if(s)return N.warn("Failed to reload config from API, keeping current config:",l),!1;{const y=Ce();return y?(N.warn("Failed to load config from API, using cached config:",l),u.current&&(t(y),w(!0),a(l),i(!1)),!1):(u.current&&(a(l),i(!1)),!1)}}finally{j.current=!1}},[]),E=C.useRef(null),x=C.useCallback(async()=>{if(E.current)return E.current;const s=b(!0).finally(()=>{E.current=null});return E.current=s,s},[b]),p=C.useRef(!1);C.useEffect(()=>{if(!p.current)return p.current=!0,b(!1),()=>{u.current=!1}},[]),C.useEffect(()=>{const s=n.HASS_ACCESS_TOKEN||"";s&&typeof s=="string"&&s.trim()!==""&&s!=="undefined"&&s!=="null"?B.defaults.headers.common.Authorization=`Bearer ${s}`:delete B.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),C.useEffect(()=>{const s=n.ENABLE_LOGGING===!0;sn(s)},[n.ENABLE_LOGGING]);const f=C.useMemo(()=>({config:n,loading:o,configError:c,isUsingCachedConfig:m,reloadConfig:x}),[n,o,c,m,x]);return r.jsx(ie.Provider,{value:f,children:e})},U=()=>{const e=C.useContext(ie);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config},at=()=>{const e=C.useContext(ie);if(!e)throw new Error("useConfigLoading must be used within ConfigProvider");return e.loading},ct=()=>{const e=C.useContext(ie);if(!e)throw new Error("useConfigError must be used within ConfigProvider");return e.configError},lt=()=>{const e=C.useContext(ie);if(!e)throw new Error("useIsUsingCachedConfig must be used within ConfigProvider");return e.isUsingCachedConfig},dt=()=>{const e=C.useContext(ie);if(!e)throw new Error("useReloadConfig must be used within ConfigProvider");return e.reloadConfig};let oe=0,Ee=0,Z=0;const ne=[],ut=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},yn=(e,n="")=>{const t=ut(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;Z++,oe++,ne.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ne.length>10&&ne.shift();const i=[];return n&&i.push(`[${n}]`),i.push("🔴 Axios API Error:"),i.push(`Message: ${t.message}`),t.url&&i.push(`URL: ${t.url}`),t.status&&i.push(`HTTP Status: ${t.status}`),t.code&&i.push(`Error Code: ${t.code}`),t.isNetworkError&&(i.push("Type: Network Error (no response received)"),t.readyState!==void 0&&i.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&i.push("Type: Timeout Error"),t.config&&(i.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),i.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&i.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&i.push("Response Data:",t.responseData),i.push(`Request Stats: ${Ee} success, ${Z} errors (${oe} total)`),Z>3&&ne.length>0&&i.push("Recent errors pattern:",ne.slice(-5)),N.error(...i),t},wn=e=>{Ee++,oe++,(oe%10===0||Z>0)&&N.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:oe,stats:`${Ee} success, ${Z} errors`}),Z>0&&oe%10===0&&Ee>Z&&(Z=0,ne.length=0)},Q=e=>{const n=ut(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};let _e=null;const Ue=e=>{_e=e},bn=!1;B.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,N.debug("Axios Defaults State:",{baseURL:B.defaults.baseURL,timeout:B.defaults.timeout,hasAuthHeader:!!B.defaults.headers?.common?.Authorization,authHeaderLength:B.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(B.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||N.error("Axios Request Setup Error:",e),Promise.reject(e)));B.interceptors.response.use(e=>(e.config&&wn(e.config),e),e=>{const n=e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"),t=e.config?.metadata?.skipConnectionCheck===!0;if(!n){const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(yn(e,o),e.config?.metadata){const i=Date.now()-e.config.metadata.startTime;N.error("Request Duration:",`${i}ms`,"Request ID:",e.config.metadata.requestId)}!t&&_e&&!e.response&&(e.code==="ERR_NETWORK"||e.code==="ECONNABORTED"||e.code==="ERR_CANCELED")&&_e()}return Promise.reject(e)});const Y=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;if(typeof window<"u"&&window.location){if(window.location.pathname.includes("/api/hassio_ingress/")){const i=window.location.pathname.match(/^(\/api\/hassio_ingress\/[^\/]+\/)/);if(i){const c=i[1],a=t.startsWith("/")?t.slice(1):t;return`${c}${a}`}}return t}return t},An=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},Sn=(e={})=>{const n=An(e);if(!n)return"";const t=n.startsWith("https://")?"wss://":"ws://",o=n.replace(/^https?:\/\//,"");return`${t}${o}/api/websocket`},Tn=3e3,Cn=3e4,Rn=5e3,jn=()=>{const[e,n]=C.useState(!0),t=C.useRef(null),o=C.useRef(null),i=C.useRef(!1),c=C.useRef(Date.now()),a=C.useRef(!0);C.useEffect(()=>{a.current=e},[e]);const m=C.useCallback(async()=>{if(!i.current){i.current=!0,c.current=Date.now();try{const h=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`;await B.get(h,{timeout:Rn,metadata:{skipConnectionCheck:!0}}),a.current||N.info("Connection restored - backend is reachable"),n(!0),i.current=!1,o.current&&(clearInterval(o.current),o.current=null)}catch(u){!u.response&&(u.code==="ERR_NETWORK"||u.code==="ECONNABORTED")?(a.current&&N.warn("Connection lost - backend is not reachable"),n(!1),i.current=!1,o.current||(o.current=setInterval(()=>{m()},Cn))):(a.current||N.info("Connection restored - backend responded (with error)"),n(!0),i.current=!1,o.current&&(clearInterval(o.current),o.current=null))}}},[]),w=C.useCallback(()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{m()},Tn)},[m]);return C.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&w()};return document.addEventListener("visibilitychange",u),()=>{document.removeEventListener("visibilitychange",u)}},[w]),C.useEffect(()=>{const u=setTimeout(()=>{m()},1e3);return()=>{clearTimeout(u)}},[m]),C.useEffect(()=>()=>{t.current&&clearTimeout(t.current),o.current&&clearInterval(o.current)},[]),{isConnected:e,triggerCheck:w}},ft=C.createContext(null),Ln=({children:e})=>{const n=jn(),t=dt(),o=C.useRef(!1),i=C.useRef(null),c=C.useRef(!1);return C.useEffect(()=>(Ue(n.triggerCheck),()=>{Ue(null)}),[n.triggerCheck]),C.useEffect(()=>{const a=n.isConnected;if(!a){o.current=!0,i.current&&(clearTimeout(i.current),i.current=null);return}return o.current&&a&&!c.current&&(i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{c.current||(c.current=!0,t().then(()=>{o.current=!1}).catch(m=>{N.warn("Failed to reload config after connection restore:",m)}).finally(()=>{c.current=!1,i.current=null}))},un)),()=>{i.current&&(clearTimeout(i.current),i.current=null)}},[n.isConnected,t]),r.jsx(ft.Provider,{value:n,children:e})},ht=()=>{const e=C.useContext(ft);if(!e)throw new Error("useConnectionStateContext must be used within ConnectionStateProvider");return e},re=({entityId:e,enabled:n=!0,config:t,initialState:o=null,extractState:i=c=>c.data.state})=>{const[c,a]=S.useState(o),[m,w]=S.useState(!1),{isConnected:u}=ht(),h=S.useRef(!1),[j,T]=S.useState(0);S.useEffect(()=>{u?h.current&&(h.current=!1,T(x=>x+1)):h.current=!0},[u]);const b=n&&!!e,E=e?Y(`/api/states/${e}`,t):null;return S.useEffect(()=>{if(!b||!E)return;let x=!0;const p=new AbortController;return B(E,{signal:p.signal}).then(f=>{x&&(a(i(f)),w(!1))}).catch(f=>{x&&!p.signal.aborted&&w(Q(f))}),()=>{x=!1,p.abort()}},[b,E,e,j]),[c,m,a]},Nn=()=>{const e=U(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",o=n&&t,[i,c]=re({entityId:t,enabled:o,config:e,initialState:null,extractState:a=>{const m=a.data.attributes.store;return m!==void 0?m:[]}});return[i,c]},kn=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=Y(`/api/states/${t}`,n);B.post(o,{state:new Date,attributes:{store:e}}).catch(i=>{N.error("Failed to store everyday calendar data:",i)})},Fe=O.div` 

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
`,_n=({on:e,month:n,day:t})=>{const[o,i]=e,c=o.indexOf(`${n}-${t}`),a=c>-1,m=()=>{i(a?o.toSpliced(c,1):[...o,`${n}-${t}`])};return r.jsx("div",{className:z("dot",{on:a}),onClick:()=>m()})},On=()=>{const e=U();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let u=1;u<13;u++){const h=new Date(t,u,0).getDate();for(let j=1;j<=h;j++)o.push({month:u,day:j})}const i=Array.from({length:31},(u,h)=>h+1),c=Array.from({length:12},(u,h)=>h+1),a=S.useState(void 0),[m,w]=Nn();return S.useEffect(()=>{m!==null&&a[1](m)},[m]),S.useEffect(()=>{a[0]!==void 0&&kn(a[0],e)},[a[0],e]),a[0]!==void 0?r.jsxs(Fe,{children:[r.jsx("h2",{children:"Jeden Tag ein bißchen"}),w!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:w instanceof Error?w.message:String(w)})]}),r.jsxs("div",{className:"calendar",children:[i.map((u,h)=>r.jsx("div",{style:{gridArea:`${u+1} / 1 / ${u+1} / 1`},children:u},h)),c.map((u,h)=>r.jsx("div",{style:{gridArea:`1 / ${u+1} / 1 / ${u+1}`},children:u},h)),o.map((u,h)=>r.jsx("div",{style:{gridArea:`${u.day+1} / ${u.month+1} / ${u.day+1} / ${u.month+1}`},children:r.jsx(_n,{on:a,month:u.month,day:u.day})},h))]})]}):r.jsx(Fe,{className:"loading",children:w!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:w instanceof Error?w.message:String(w)})]}):r.jsx(rt,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},Dn=O.div`
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
  }`,vn=()=>{const[e,n]=S.useState(F.now()),[t,o]=S.useState(!1),i=C.useCallback(()=>o(!0),[]),c=C.useCallback(()=>o(!1),[]);return S.useEffect(()=>{const a=setInterval(()=>n(F.now()),1e3);return()=>clearInterval(a)},[]),r.jsxs(r.Fragment,{children:[r.jsxs(Dn,{onClick:i,children:[e.toFormat("HH"),r.jsx("span",{children:":"}),e.toFormat("mm")]}),r.jsx(ue,{visible:t,onClick:c,fullsize:!0,children:r.jsx(On,{})})]})},In=C.memo(vn);function pt({onReady:e,enabled:n=!0,checkBackendConnection:t=!0,reconnectStrategy:o="simple",maxReconnectAttempts:i=5,reconnectDelay:c=2e3,logPrefix:a="WebSocket",dependencies:m=[]}){const w=U(),u=ht(),h=t?u?.isConnected:!0,[j,T]=S.useState(!1),[b,E]=S.useState(!1),x=S.useRef(null),p=S.useRef(null),f=S.useRef(!0),s=S.useRef(null),d=S.useRef(null),g=S.useRef(null),l=S.useRef(0),y=S.useRef(!1),R=S.useRef(!1),A=S.useRef(new Map),L=S.useRef(null),k=S.useRef(null),D=S.useCallback(()=>{const _=x.current;if(p.current,s.current&&(clearTimeout(s.current),s.current=null),d.current&&(clearTimeout(d.current),d.current=null),g.current&&(clearTimeout(g.current),g.current=null),L.current&&(clearInterval(L.current),L.current=null),k.current&&(clearTimeout(k.current),k.current=null),_&&_.readyState===WebSocket.OPEN&&(A.current.forEach((M,$)=>{try{_.send(JSON.stringify({type:"unsubscribe_entity",entity_id:$}))}catch{}}),A.current.clear()),_){try{_.close()}catch{}x.current=null}p.current=null},[a]),W=S.useCallback(async()=>{if(!(!n||!f.current)&&!(t&&!h)&&!y.current){x.current&&D(),y.current=!0,E(!0);try{let _;if(!bn){if(_=Sn(w),!_){const $=typeof window<"u"&&window.location.protocol==="https:"?"wss:":"ws:",v=typeof window<"u"&&window.location.host?window.location.host:"";_=`${$}//${v}/api/websocket`}}if(!_){N.error(`Failed to build WebSocket URL for ${a} - cannot connect`),f.current&&T("WebSocket URL konnte nicht erstellt werden."),y.current=!1,E(!1);return}N.debug(`${a} connecting to: ${_}`);const M=new WebSocket(_);x.current=M,M.onopen=()=>{if(!f.current){M.close();return}if(N.debug(`${a} connection opened`),l.current=0,R.current=!1,g.current&&(clearTimeout(g.current),g.current=null),f.current&&T(!1),y.current=!1,E(!1),e)try{const $=e(M,A);p.current=$}catch($){N.error(`Failed to subscribe for ${a}:`,$),f.current&&T($ instanceof Error?$.message:String($))}L.current&&clearInterval(L.current),L.current=setInterval(()=>{if(M.readyState===WebSocket.OPEN){try{M.send(JSON.stringify({type:"ping"}))}catch{return}k.current=setTimeout(()=>{N.warn(`${a} heartbeat timeout — closing stale connection`);try{M.close(4e3,"heartbeat timeout")}catch{}},cn)}},an)},M.onmessage=$=>{try{const v=JSON.parse($.data);if(v.type==="state_update"){const P=v.entity_id,V=A.current.get(P);V&&V(v)}else if(v.type==="state_response"){const P=v.entity_id,V=A.current.get(P);V&&V(v)}else v.type==="pong"?k.current&&(clearTimeout(k.current),k.current=null):v.type==="error"&&(N.error(`${a} received error:`,v.message),f.current&&T(v.message))}catch(v){N.error(`Error handling message for ${a}:`,v)}},M.onclose=$=>{if(f.current&&!y.current){N.debug(`${a} disconnected (code: ${$.code}, wasClean: ${$.wasClean})`),x.current=null,A.current.clear(),p.current=null,s.current&&(clearTimeout(s.current),s.current=null);const v=!$.wasClean&&($.code===1006||l.current>0);if(v&&l.current>=5&&!R.current){N.warn(`Backend appears to be down for ${a} (${l.current} failed attempts), switching to periodic retry every ${Pe/1e3}s`),R.current=!0,f.current&&T("Backend nicht erreichbar. Wiederherstellungsversuche alle 60 Sekunden.");const P=()=>{g.current=setTimeout(()=>{f.current&&!y.current&&h&&R.current&&(N.debug(`Periodic retry attempt for ${a} (backend might be back up)`),l.current=0,W(),P())},Pe)};P();return}if(R.current)return;if(o==="exponential"&&l.current>=i){N.warn(`Max reconnection attempts (${i}) reached for ${a}, stopping reconnection`),f.current&&T("Verbindung verloren. Bitte Seite neu laden.");return}if(h)if(o==="exponential"){const P=v?c*10:c,V=Math.min(P*Math.pow(2,l.current),6e4);l.current++,s.current=setTimeout(()=>{f.current&&!y.current&&h&&(N.debug(`Attempting to reconnect ${a} (attempt ${l.current}/${i})`),W())},V)}else{const P=v?c*10:c;s.current=setTimeout(()=>{f.current&&!y.current&&h&&(N.debug(`Attempting to reconnect ${a}`),W())},P)}else N.debug(`Skipping reconnection for ${a} - waiting for backend connection`)}},M.onerror=$=>{N.error(`WebSocket error for ${a}:`,$),y.current=!1,E(!1),f.current&&T("WebSocket-Verbindungsfehler");const v=M.readyState===WebSocket.CONNECTING||M.readyState===WebSocket.CLOSED;if(!R.current)if(h)if(o==="exponential"&&l.current<i){const P=v?c*5:c,V=Math.min(P*Math.pow(2,l.current),6e4);l.current++,s.current=setTimeout(()=>{f.current&&!y.current&&h&&(N.debug(`Attempting to reconnect ${a} after error (attempt ${l.current}/${i})`),W())},V)}else if(o==="simple"){const P=v?c*5:c;s.current=setTimeout(()=>{f.current&&!y.current&&h&&(N.debug(`Attempting to reconnect ${a} after error`),W())},P)}else N.warn(`Max reconnection attempts (${i}) reached for ${a}, stopping reconnection`),f.current&&T("Verbindung fehlgeschlagen. Bitte Seite neu laden.");else N.debug(`Skipping reconnection for ${a} after error - waiting for backend connection`)}}catch(_){if(y.current=!1,E(!1),f.current&&(N.error(`Failed to setup ${a} connection:`,_),T(_ instanceof Error?_.message:String(_)),h))if(o==="exponential"&&l.current<i){const M=Math.min(c*Math.pow(2,l.current),3e4);l.current++,s.current=setTimeout(()=>{f.current&&!y.current&&h&&(N.debug(`Attempting to reconnect ${a} after error (attempt ${l.current}/${i})`),W())},M)}else o==="simple"?s.current=setTimeout(()=>{f.current&&!y.current&&h&&W()},c):(N.warn(`Max reconnection attempts (${i}) reached for ${a}, stopping reconnection`),f.current&&T("Verbindung fehlgeschlagen. Bitte Seite neu laden."))}}},[n,t,h,w,o,i,c,a,e,D]);return S.useEffect(()=>{n&&h&&!x.current&&!y.current&&W()},[n,h,W,...m]),S.useEffect(()=>{n&&h&&!x.current&&!y.current&&(d.current&&(clearTimeout(d.current),d.current=null),d.current=setTimeout(()=>{f.current&&h&&!x.current&&!y.current&&(R.current=!1,l.current=0,g.current&&(clearTimeout(g.current),g.current=null),W())},ln))},[n,h,W,a]),S.useEffect(()=>()=>{f.current=!1,D()},[D]),{connection:x.current,error:j,isConnecting:b}}const le=({entityId:e,enabled:n,onStateUpdate:t,logPrefix:o,wsOptions:i={}})=>{const{error:c}=pt({enabled:n&&!!e,logPrefix:o,...i,onReady:(a,m)=>{const w=u=>{u.state!==void 0&&t(u.state)};return m.current.set(e,w),a.readyState===WebSocket.OPEN&&(a.send(JSON.stringify({type:"subscribe_entity",entity_id:e})),N.debug(`Subscribed to ${o} state changes`)),()=>{m.current.delete(e),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"unsubscribe_entity",entity_id:e}))}},dependencies:[n,e]});return{error:c}},$n=()=>{const e=U(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"",o=n&&t,[i,c,a]=re({entityId:t,enabled:o,config:e,initialState:"off"}),{error:m}=le({entityId:t,enabled:o,onStateUpdate:a,logPrefix:"doorbell"});return[i,c||m||!1]},Mn=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&B.post(Y("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to unlatch front door:",t)})},Wn=async(e,n,t)=>{const o=Y(`/api/states/${e}`,n),c=(await B(o,{timeout:5e3,signal:t.signal})).data?.attributes?.access_token||null;return{entityId:e,accessToken:c}},Bn=e=>new Promise(n=>setTimeout(n,e)),Ge=async(e,n)=>{if(!e||e.length===0)return{tokens:{},error:null};const t=new AbortController,o=3;try{const i=e.map(async w=>{let u=null;for(let h=0;h<o;h++)try{return await Wn(w,n,t)}catch(j){if(u=j,(j.code==="ECONNABORTED"||j.code==="ERR_NETWORK"||j.message?.includes("timeout"))&&h<o-1){const b=1e3*Math.pow(2,h);N.debug(`Token fetch failed for ${w} (attempt ${h+1}), retrying in ${b}ms...`),await Bn(b);continue}return N.error(`Failed to fetch access token for ${w} (attempt ${h+1}/${o}):`,j),{entityId:w,accessToken:null}}return N.error(`Failed to fetch access token for ${w} after ${o} attempts:`,u),{entityId:w,accessToken:null}}),c=await Promise.all(i),a={};let m=!1;return c.forEach(({entityId:w,accessToken:u})=>{u?a[w]=u:m=!0}),Object.keys(a).length===0&&m?{tokens:{},error:"Timeout: Kamera-Token konnten nicht geladen werden. Bitte erneut versuchen."}:{tokens:a,error:null}}catch(i){return t.signal.aborted?{tokens:{},error:null}:(N.error("Failed to fetch camera access tokens:",i),{tokens:{},error:Q(i)})}},Pn=(e,n=null,t={})=>{if(!e)return null;let o;const i=t.HASS_HOST||"";if(i&&i!=="undefined"&&i!=="null")o=i.replace(/\/$/,"");else if(typeof window<"u"&&window.location)o=window.location.origin;else return null;const c=`${o}/api/camera_proxy_stream/${e}`;if(n){const a=c.includes("?")?"&":"?";return`${c}${a}token=${encodeURIComponent(n)}`}return c},I={portrait:360/480,landscape:1920/1072,wide:770/216};function Vn(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function gt(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,i=Vn(e);return o===1?Un(e[0],n,t):o===2?Fn(i,e,n,t):o===3?Gn(i,e,n,t):o===4?zn(i,e,n,t):{videos:[],totalArea:0,efficiency:0}}function Un(e,n,t){const o=I[e.orientation];let i,c;const a=n/t;return o>a?(i=n,c=n/o):(c=t,i=t*o),{videos:[{x:(n-i)/2,y:(t-c)/2,width:i,height:c,orientation:e.orientation}],totalArea:i*c,efficiency:i*c/(n*t)*100}}function Fn(e,n,t,o){if(e.portrait>0)return $e(e,n,t,o);const i=[];e.landscape>0&&i.push("landscape"),e.wide>0&&i.push("wide");const c=i[0]||n[0].orientation,a=i[1]||n[1].orientation,m=I[c],w=I[a];if(e.landscape===1&&e.wide===1){const E=I.landscape,x=I.wide,p=t,f=p/E,s=p/x,d=f+s;let g,l,y;if(d<=o)g=f,l=s,y=p;else{const W=o/d;g=f*W,l=s*W,y=l*x}const R=(t-y)/2,L=q(n,[{x:R,y:0,width:y,height:l,orientation:"wide"},{x:R,y:l,width:y,height:g,orientation:"landscape"}]),k=y*g+y*l,D=k/(t*o)*100;return{videos:L,totalArea:k,efficiency:D}}if(e.wide===2){const E=I.wide,x=t,p=x/E,f=p*2;let s;f<=o?s=p:s=o/2;const g=q(n,[{x:0,y:0,width:x,height:s,orientation:"wide"},{x:0,y:s,width:x,height:s,orientation:"wide"}]),l=x*s*2,y=l/(t*o)*100;return{videos:g,totalArea:l,efficiency:y}}const u=[()=>{const E=t,x=E/2,p=E/2,f=x/m,s=p/w;return Math.max(f,s)<=o?{positions:[{x:0,y:(o-f)/2,width:x,height:f,orientation:c},{x,y:(o-s)/2,width:p,height:s,orientation:a}],totalArea:x*f+p*s}:null},()=>{const E=o,x=E/2,p=E/2,f=x*m,s=p*w;return Math.max(f,s)<=t?{positions:[{x:(t-f)/2,y:0,width:f,height:x,orientation:c},{x:(t-s)/2,y:x,width:s,height:p,orientation:a}],totalArea:f*x+s*p}:null}];let h=null,j=0;for(const E of u){const x=E();x&&x.totalArea>j&&(j=x.totalArea,h=x)}if(!h){const E=t/2,x=t/2,p=Math.min(E/m,o),f=Math.min(x/w,o);h={positions:[{x:0,y:(o-p)/2,width:E,height:p,orientation:c},{x:E,y:(o-f)/2,width:x,height:f,orientation:a}],totalArea:E*p+x*f}}const T=q(n,h.positions),b=h.totalArea/(t*o)*100;return{videos:T,totalArea:h.totalArea,efficiency:b}}function $e(e,n,t,o){const i=e.portrait,c=n.length-i;if((i===3||i===4)&&c===0){const b=I.portrait,E=t/i,x=E/b,p=x<o?(o-x)/2:0,f=Math.min(x,o),s=[];let d=0;for(let y=0;y<i;y++){const R=Math.min(E,f*b);s.push({x:y*E+(E-R)/2,y:p,width:R,height:f,orientation:"portrait"}),d+=R*f}const g=q(n,s),l=d/(t*o)*100;return{videos:g,totalArea:d,efficiency:l}}n.filter(b=>b.orientation==="portrait");const a=n.filter(b=>b.orientation!=="portrait"),m=i>0?Math.min(t*.4,t*.5):0,w=t-m,u=[];let h=0;if(i===2&&c===0){const b=I.portrait,E=t/2,x=E/b,p=o;let f,s;x<=p?(s=x,f=E):(s=p,f=p*b);const d=(o-s)/2;u.push({x:(E-f)/2,y:d,width:f,height:s,orientation:"portrait"}),u.push({x:E+(E-f)/2,y:d,width:f,height:s,orientation:"portrait"}),h=f*s*2}else if(i===1&&c===1){const b=I.portrait,E=a[0],x=I[E.orientation],p=b+x,f=t*(b/p),s=t*(x/p),d=f/b,g=s/x,l=Math.min(o,Math.min(d,g)),y=(o-l)/2;u.push({x:0,y,width:f,height:l,orientation:"portrait"}),u.push({x:f,y,width:s,height:l,orientation:E.orientation}),h=f*l+s*l}else if(i===1&&c===2&&e.landscape===1&&e.wide===1){const b=I.portrait,E=I.wide,x=I.landscape,p=o,f=o*b,s=o/(1/E+1/x),d=s/E,g=s/x,l=f+s;if(Math.abs(l-t)<.1)u.push({x:0,y:0,width:f,height:p,orientation:"portrait"}),h+=f*p,a.find(L=>L.orientation==="wide")&&(u.push({x:0+f,y:0,width:s,height:d,orientation:"wide"}),h+=s*d),a.find(L=>L.orientation==="landscape")&&(u.push({x:0+f,y:d,width:s,height:g,orientation:"landscape"}),h+=s*g);else{const y=t/l,R=f*y,A=R/b,L=s*y,k=o/A;let D=R*k,W=o,_=L*k,M=_/E,$=_/x,v=D+_;if(v>t){const J=t/v;D=D*J,W=D/b,_=_*J,M=_/E,$=_/x,v=D+_,v>t&&(_=t-D,M=_/E,$=_/x)}const P=D+_;if(P>t){const J=t/P;D=D*J,W=D/b,_=_*J,M=_/E,$=_/x}const V=0;u.push({x:V,y:0,width:D,height:W,orientation:"portrait"}),h+=D*W,a.find(J=>J.orientation==="wide")&&(u.push({x:V+D,y:0,width:_,height:M,orientation:"wide"}),h+=_*M),a.find(J=>J.orientation==="landscape")&&(u.push({x:V+D,y:M,width:_,height:$,orientation:"landscape"}),h+=_*$)}}else if(i===1&&c===3){const b=I.portrait,E=o,x=E*b,p=x,f=t-p;u.push({x:0,y:0,width:x,height:E,orientation:"portrait"}),h+=x*E;const s=o/3;for(let d=0;d<a.length;d++){const g=a[d],l=I[g.orientation],y=s,R=f;let A,L;R/l<=y?(A=R,L=A/l):(L=y,A=L*l);const k=d*s+(s-L)/2;u.push({x:p+(f-A)/2,y:k,width:A,height:L,orientation:g.orientation}),h+=A*L}}else if(i===2&&c===1){const b=I.portrait,E=a[0],x=I[E.orientation],p=o/2,f=p*b,s=t-f,d=o*x;let g,l;d<=s?(l=o,g=l*x):(g=s,l=g/x);const y=f,R=p,A=(o-l)/2,L=(o/2-R)/2,k=o/2+(o/2-R)/2;u.push({x:0,y:A,width:g,height:l,orientation:E.orientation}),h+=g*l,u.push({x:s,y:L,width:y,height:R,orientation:"portrait"}),h+=y*R,u.push({x:s,y:k,width:y,height:R,orientation:"portrait"}),h+=y*R}else if(i===1&&c===2){const b=I.portrait,E=o,x=E*b,p=x,f=t-p;u.push({x:0,y:0,width:x,height:E,orientation:"portrait"}),h+=x*E;const s=o/2;for(let d=0;d<a.length;d++){const g=a[d],l=I[g.orientation],y=s,R=f;let A,L;R/l<=y?(A=R,L=A/l):(L=y,A=L*l);const k=d*s+(s-L)/2;u.push({x:p+(f-A)/2,y:k,width:A,height:L,orientation:g.orientation}),h+=A*L}}else{const b=i;if(b>0){const E=o/b,x=I.portrait;for(let p=0;p<b;p++){const f=Math.min(E,m/x),s=f*x,d=p*E+(E-f)/2;u.push({x:(m-s)/2,y:d,width:s,height:f,orientation:"portrait"}),h+=s*f}}if(a.length>0){const E=o/a.length;for(let x=0;x<a.length;x++){const p=a[x],f=I[p.orientation],s=E,d=w;let g,l;d/f<=s?(g=d,l=g/f):(l=s,g=l*f);const y=x*E+(E-l)/2;u.push({x:m+(w-g)/2,y,width:g,height:l,orientation:p.orientation}),h+=g*l}}}const j=q(n,u),T=h/(t*o)*100;return{videos:j,totalArea:h,efficiency:T}}function q(e,n){const t=new Array(n.length),o=new Set,i=new Set;for(let m=0;m<n.length;m++){const w=n[m];for(let u=0;u<e.length;u++)if(!o.has(u)&&e[u].orientation===w.orientation){t[m]={...w,orientation:e[u].orientation},o.add(u),i.add(m);break}}const c=[];for(let m=0;m<n.length;m++)i.has(m)||c.push(m);let a=0;for(let m=0;m<e.length;m++)if(!o.has(m)&&a<c.length){const w=c[a];t[w]={...n[w],orientation:e[m].orientation},a++}return t}function Gn(e,n,t,o){if(e.portrait>0)return $e(e,n,t,o);if(e.landscape===2&&e.wide===1){const p=I.landscape,f=I.wide,s=t,d=s/f,g=o-d,l=t/2,y=l/p;let R,A,L,k;if(d<=o&&y<=g)R=s,A=d,L=l,k=y;else{const P=o/(d+y),V=Math.min(1,P);A=d*V,R=A*f,k=y*V,L=k*p}const D=(t-R)/2,W=A+(g-k)/2,M=q(n,[{x:D,y:0,width:R,height:A,orientation:"wide"},{x:0,y:W,width:L,height:k,orientation:"landscape"},{x:L,y:W,width:L,height:k,orientation:"landscape"}]),$=R*A+L*k*2,v=$/(t*o)*100;return{videos:M,totalArea:$,efficiency:v}}if(e.landscape===1&&e.wide===2){const p=I.landscape,f=I.wide,s=t/2,d=s/f,l=o-d,y=l*p;let R,A,L,k;if(d<=o&&y<=t&&d+l<=o)R=s,A=d,L=y,k=l;else{const V=d+l,Se=o/V;R=s,A=d*Se,k=l*Se,L=k*p}const D=0,W=t/2,_=(t-L)/2,$=q(n,[{x:D,y:0,width:R,height:A,orientation:"wide"},{x:W,y:0,width:R,height:A,orientation:"wide"},{x:_,y:A,width:L,height:k,orientation:"landscape"}]),v=R*A*2+L*k,P=v/(t*o)*100;return{videos:$,totalArea:v,efficiency:P}}if(e.wide===3){const p=I.wide,f=t/2,s=f/p,g=o-s,l=g*p;let y,R,A,L;if(s<=o&&l<=t&&s+g<=o)y=f,R=s,A=l,L=g;else{const P=s+g,V=o/P;y=f,R=s*V,L=g*V,A=L*p,A>t&&(A=t,L=A/p)}const k=0,D=t/2,W=(t-A)/2,M=q(n,[{x:k,y:0,width:y,height:R,orientation:"wide"},{x:D,y:0,width:y,height:R,orientation:"wide"},{x:W,y:R,width:A,height:L,orientation:"wide"}]),$=y*R*2+A*L,v=$/(t*o)*100;return{videos:M,totalArea:$,efficiency:v}}if(e.landscape===3){const p=I.landscape,f=t/(p*1.5),s=Math.min(o,f),d=s/2,g=s,l=d*p,y=g*p,R=(o-s)/2,A=[{x:0,y:R,width:l,height:d,orientation:"landscape"},{x:0,y:R+d,width:l,height:d,orientation:"landscape"},{x:l,y:R,width:y,height:g,orientation:"landscape"}],L=q(n,A),k=l*s+y*s,D=k/(t*o)*100;return{videos:L,totalArea:k,efficiency:D}}const i=[];if(e.landscape>0)for(let p=0;p<e.landscape;p++)i.push("landscape");if(e.wide>0)for(let p=0;p<e.wide;p++)i.push("wide");const c=i[0]||n[0].orientation,a=i[1]||n[1].orientation,m=i[2]||n[2].orientation,w=I[c],u=I[a],h=I[m],j=[()=>{const p=t*.6,f=t*.4,s=p/w,d=f/u,g=f/h,l=d+g;return s<=o&&l<=o?{positions:[{x:0,y:(o-s)/2,width:p,height:s,orientation:c},{x:p,y:0,width:f,height:d,orientation:a},{x:p,y:d,width:f,height:g,orientation:m}],totalArea:p*s+f*d+f*g}:null},()=>{const p=o*.5,f=o*.5,s=p*w,d=p*u,g=f*h;return s+d<=t&&g<=t?{positions:[{x:0,y:0,width:s,height:p,orientation:c},{x:s,y:0,width:d,height:p,orientation:a},{x:(t-g)/2,y:p,width:g,height:f,orientation:m}],totalArea:s*p+d*p+g*f}:null},()=>{const p=t/3,f=p/w,s=p/u,d=p/h;return Math.max(f,s,d)<=o?{positions:[{x:0,y:(o-f)/2,width:p,height:f,orientation:c},{x:p,y:(o-s)/2,width:p,height:s,orientation:a},{x:p*2,y:(o-d)/2,width:p,height:d,orientation:m}],totalArea:p*f+p*s+p*d}:null}];let T=null,b=0;for(const p of j){const f=p();f&&f.totalArea>b&&(b=f.totalArea,T=f)}if(!T){const p=t/3,f=Math.min(p/w,o),s=Math.min(p/u,o),d=Math.min(p/h,o);T={positions:[{x:0,y:(o-f)/2,width:p,height:f,orientation:c},{x:p,y:(o-s)/2,width:p,height:s,orientation:a},{x:p*2,y:(o-d)/2,width:p,height:d,orientation:m}],totalArea:p*f+p*s+p*d}}const E=q(n,T.positions),x=T.totalArea/(t*o)*100;return{videos:E,totalArea:T.totalArea,efficiency:x}}function zn(e,n,t,o){if(e.portrait>0)return $e(e,n,t,o);const i=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)i.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)i.push("wide");const c=i[0]||n[0].orientation,a=i[1]||n[1].orientation,m=i[2]||n[2].orientation,w=i[3]||n[3].orientation,u=I[c],h=I[a],j=I[m],T=I[w],b=[()=>{const s=t/2,d=o/2,g=Math.min(s,d*u),l=g/u,y=Math.min(s,d*h),R=y/h,A=Math.min(s,d*j),L=A/j,k=Math.min(s,d*T),D=k/T;return{positions:[{x:(s-g)/2,y:(d-l)/2,width:g,height:l,orientation:c},{x:s+(s-y)/2,y:(d-R)/2,width:y,height:R,orientation:a},{x:(s-A)/2,y:d+(d-L)/2,width:A,height:L,orientation:m},{x:s+(s-k)/2,y:d+(d-D)/2,width:k,height:D,orientation:w}],totalArea:g*l+y*R+A*L+k*D}},()=>{const s=t*.6,d=t*.4,g=s/u,l=o/3,y=Math.min(d,l*h),R=y/h,A=Math.min(d,l*j),L=A/j,k=Math.min(d,l*T),D=k/T;return g<=o?{positions:[{x:0,y:(o-g)/2,width:s,height:g,orientation:c},{x:s,y:0,width:y,height:R,orientation:a},{x:s,y:l,width:A,height:L,orientation:m},{x:s,y:l*2,width:k,height:D,orientation:w}],totalArea:s*g+y*R+A*L+k*D}:null},()=>{const s=t/4,d=s/u,g=s/h,l=s/j,y=s/T;return Math.max(d,g,l,y)<=o?{positions:[{x:0,y:(o-d)/2,width:s,height:d,orientation:c},{x:s,y:(o-g)/2,width:s,height:g,orientation:a},{x:s*2,y:(o-l)/2,width:s,height:l,orientation:m},{x:s*3,y:(o-y)/2,width:s,height:y,orientation:w}],totalArea:s*d+s*g+s*l+s*y}:null}];let E=null,x=0;for(const s of b){const d=s();d&&d.totalArea>x&&(x=d.totalArea,E=d)}if(!E){const s=t/2,d=o/2,g=Math.min(d,s/u),l=Math.min(d,s/h),y=Math.min(d,s/j),R=Math.min(d,s/T);E={positions:[{x:(s-s)/2,y:(d-g)/2,width:s,height:g,orientation:c},{x:s+(s-s)/2,y:(d-l)/2,width:s,height:l,orientation:a},{x:(s-s)/2,y:d+(d-y)/2,width:s,height:y,orientation:m},{x:s+(s-s)/2,y:d+(d-R)/2,width:s,height:R,orientation:w}],totalArea:s*g+s*l+s*y+s*R}}const p=q(n,E.positions),f=E.totalArea/(t*o)*100;return{videos:p,totalArea:E.totalArea,efficiency:f}}const ze=({tokensLoading:e,tokensError:n,refreshTokens:t})=>r.jsx("div",{className:"token-error",children:e?r.jsxs(r.Fragment,{children:[r.jsx(G,{path:it,size:"48px",color:"#ffffff",className:"loading-spinner"}),r.jsx("div",{children:"Lade Token..."})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{children:n||"Kamera-Token nicht verfügbar"}),r.jsx("button",{onClick:t,children:"Token neu laden"})]})}),Yn=({cameras:e,accessTokens:n,tokensLoading:t,tokensError:o,refreshTokens:i,showDoorCams:c,cameraImgRefs:a,openDoor:m,config:w})=>{if(e.length===0)return null;const u=e.map(x=>({orientation:x.orientation||"landscape"})),h=window.innerWidth,j=window.innerHeight-10,T=gt(u,h,j),b={portrait:e.filter(x=>(x.orientation||"landscape")==="portrait"),landscape:e.filter(x=>(x.orientation||"landscape")==="landscape"),wide:e.filter(x=>x.orientation==="wide")},E={portrait:0,landscape:0,wide:0};return T.videos.map((x,p)=>{const f=x.orientation,s=E[f],d=b[f][s];if(!d)return null;E[f]++;const g=n[d.entity_id]||null,l=!!g,y=Pn(d.entity_id,g,w),R=`${f}-${s}-${p}`,A={left:`${x.x}px`,top:`${x.y}px`,width:`${x.width}px`,height:`${x.height}px`};return!y&&!l?r.jsx("div",{className:"video-container",style:A,children:r.jsx(ze,{tokensLoading:t,tokensError:o,refreshTokens:i})},R):y?r.jsxs("div",{className:"video-container",style:A,children:[l&&c&&r.jsx("img",{ref:L=>{const k=`${d.entity_id}-${p}`;L?a.current.set(k,L):a.current.delete(k)},src:y,className:f,alt:"Camera stream",crossOrigin:"anonymous"},`${d.entity_id}-${p}`),!l&&r.jsx(ze,{tokensLoading:t,tokensError:o,refreshTokens:i}),r.jsx("div",{className:"video-overlay",onClick:()=>m()})]},R):null})},Hn=O.div`
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
`,Kn=()=>{const e=U(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[],[o,i]=S.useState(!1),[c]=$n(),[a,m]=S.useState(void 0),[w,u]=S.useState(100),[h,j]=S.useState("0"),T=S.useMemo(()=>t.map(A=>A.entity_id).filter(Boolean),[t]),[b,E]=S.useState({}),[x,p]=S.useState(!1),[f,s]=S.useState(null);S.useEffect(()=>{o&&T.length>0?(p(!0),s(null),Ge(T,e).then(({tokens:A,error:L})=>{E(A),s(L),p(!1)}).catch(A=>{N.error("Failed to fetch camera tokens:",A),s(Q(A)),p(!1)})):o||(E({}),s(null))},[o,T.join(","),e]);const d=S.useCallback(async()=>{if(T.length!==0){p(!0),s(null);try{const{tokens:A,error:L}=await Ge(T,e);E(A),s(L)}catch(A){N.error("Failed to refresh camera tokens:",A),s(Q(A))}finally{p(!1)}}},[T,e]),g=S.useRef(new Map);S.useEffect(()=>{o||(g.current.forEach(A=>{A&&A.src&&(A.src="")}),g.current.clear())},[o]),S.useEffect(()=>{if(c==="off"&&o){const A=window.setTimeout(()=>{i(!1),m(void 0)},Ve);return m(A),j(Ve+"ms"),u(0),()=>{A&&window.clearTimeout(A)}}else c==="on"&&(j(0),u(100),i(!0))},[c,o]),S.useEffect(()=>{c==="on"&&a!==void 0&&(window.clearTimeout(a),j(0),u(100),m(void 0))},[a,c]);const[l,y]=S.useState(null),R=()=>{l===null?y("confirm"):l==="confirm"&&(y("opening"),Mn(e),setTimeout(()=>y(null),2e3))};return S.useEffect(()=>{if(l==="confirm"){const A=setTimeout(()=>{y(null)},3e3);return()=>{clearTimeout(A)}}},[l]),S.useEffect(()=>{o||y(null)},[o]),n?r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>i(A=>!A),children:"CCTV"}),r.jsx(ue,{visible:o,onClick:R,onClose:()=>{i(!1),y(null)},fullsize:!0,children:r.jsxs(Hn,{onClick:R,children:[r.jsx(xt,{completed:w,height:10,bgColor:a===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:h,transitionTimingFunction:"linear"}),r.jsx("div",{className:"grid",children:r.jsx(Yn,{cameras:t,accessTokens:b,tokensLoading:x,tokensError:f,refreshTokens:d,showDoorCams:o,cameraImgRefs:g,openDoor:R,config:e})}),l==="confirm"&&r.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),l==="opening"&&r.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]}):null},qn=O.div`
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

`,Jn=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>r.jsxs(qn,{children:[r.jsxs("div",{className:"buttons",children:[r.jsx(G,{path:Wt,size:"32px",color:"#ffffff",onClick:n}),r.jsx(G,{path:Bt,size:"32px",color:"#ffffff",onClick:e}),r.jsx("button",{onClick:t,children:"Today"}),r.jsx(Kn,{})]}),r.jsx(In,{}),r.jsx(G,{path:it,size:"32px",color:"#ffffff",className:z("indicator")})]}),Xn=C.memo(Jn),Qn=6e4,Me=(e=Qn,n=void 0)=>{const[t,o]=S.useState(!0);return S.useEffect(()=>{const i=setInterval(()=>{o(c=>!c)},e);return()=>{clearInterval(i)}},[e,n]),t},Zn={mdiDelete:Vt,mdiCake:Pt},eo=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Zn[n]||void 0},to=(e,n,t,o,i,c)=>B(i(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:65e3,signal:c}).then(a=>{!a.data||!Array.isArray(a.data)||a.data.forEach(m=>{const w="dateTime"in m.start?F.fromISO(m.start.dateTime):F.fromSQL(m.start.date);let u;"dateTime"in m.end?u=Math.floor(F.fromISO(m.end.dateTime).diff(n,"days").as("days")):u=Math.floor(F.fromSQL(m.end.date).diff(n,"days").as("days"))-1;const h=Math.floor(w.diff(n,"days").as("days"));u>=o.length&&(u=o.length-1);const j="dateTime"in m.start?"events":"allDay";if(h>=0&&h<o.length)for(let T=h;T<=u;T++)o[T][j]=[...o[T][j],{...m,icon:e.icon}]})}).catch(a=>{if(!(B.isCancel(a)||a.name==="AbortError"||a.code==="ERR_CANCELED"))throw a}),Ye=new Map,no=300*1e3,oo=e=>e.toISODate(),ro=(e,n,t,o,i,c,a,m,w)=>{const u=[0,1,2,3,4,5].map(E=>e.plus({days:E}).startOf("day"));u[6]=e.plus({days:6}).endOf("day");const h=oo(e),j=Ye.get(h);if(j&&Date.now()-j.timestamp<no){w.current&&t(j.data);return}const T=u.map(E=>({date:E,allDay:[],events:[]}));if(!a||a.length===0){N.warn("loadAll: No calendars configured, skipping fetch",{calendars:a}),w.current&&(t(T),o(!1));return}N.debug("loadAll: Starting calendar fetch",{calendarsCount:a.length,calendars:a.map(E=>E.name),startDate:e.toISO(),endDate:u[6].toISO()});const b=new AbortController;i.current&&i.current.abort(),i.current=b;try{w.current&&o(!0);const E=a.map(x=>to(x,u[0],u[6],T,m,b.signal));Promise.all(E).then(()=>{w.current&&!b.signal.aborted&&(Ye.set(h,{data:T,timestamp:Date.now()}),t(T),c(!1))}).catch(x=>{w.current&&!b.signal.aborted&&c(Q(x))}).finally(()=>{w.current&&!b.signal.aborted&&o(!1)})}catch(E){w.current&&!b.signal.aborted&&(c(Q(E)),o(!1))}},He=[],io=e=>{const n=U(),t=n.CALENDARS||[];S.useEffect(()=>{N.debug("useCalendarData: config changed",{hasCALENDARS:"CALENDARS"in n,CALENDARS:n.CALENDARS,CALENDARSCount:Array.isArray(n.CALENDARS)?n.CALENDARS.length:"not array",configKeys:Object.keys(n)})},[n]);const o=S.useMemo(()=>{const p=t.map(f=>({name:f.name,icon:eo(f.icon)}));return N.debug("Processing calendars from config (memo update):",{CALENDARS:t,count:t.length,processedCount:p.length,processed:p.map(f=>f.name)}),p},[t]);S.useEffect(()=>{N.debug("CALENDARS array changed:",{CALENDARS:t,count:t.length,calendarsMemoCount:o.length})},[t,o.length]);const i=S.useCallback(p=>Y(`/api/calendars/${p}`,n),[n]),c=S.useCallback((p,f)=>`${i(p)}?${nn.stringify(f)}`,[i]),[a,m]=S.useState(He),[w,u]=S.useState(!1),[h,j]=S.useState(!1),[T,b]=S.useState(null),E=C.useRef(null),x=C.useRef(!0);return Me(6e4,"Calendar"),S.useEffect(()=>(x.current=!0,N.debug("useCalendarData effect triggered:",{startDate:e?.toISO(),calendarsCount:o.length,calendars:o.map(p=>p.name),hasStartDate:e!==void 0,hasCalendars:o.length>0}),e!==void 0&&o.length>0?((T===null||!T.equals(e))&&(m(He),b(e)),N.debug("useCalendarData: Calling loadAll",{startDate:e.toISO(),calendarsCount:o.length}),ro(e,a,m,u,E,j,o,c,x)):o.length,()=>{x.current=!1,E.current&&E.current.abort()}),[e,o,c]),[a,h]};function de(e){const[n,t]=S.useState(!1);function o({key:c}){c===e&&t(!0)}const i=({key:c})=>{c===e&&t(!1)};return S.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",i),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}),[e]),n}const so=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return F.fromJSDate(o)},ao=e=>{const n=()=>e(m=>m.plus({days:7})),t=de("ArrowRight");S.useEffect(()=>{t&&n()},[t]);const o=()=>e(m=>m.minus({days:7})),i=de("ArrowLeft");S.useEffect(()=>{i&&o()},[i]);const c=()=>e(so()),a=de("t");return S.useEffect(()=>{a&&c()},[a]),{nextWeek:n,previousWeek:o,startWeekWithToday:c}},co=e=>{const[n,t]=C.useState(0),[o,i]=C.useState(0),c=50;return{onTouchStart:u=>{i(0),t(u.targetTouches[0].clientX)},onTouchMove:u=>i(u.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const u=n-o,h=u>c,j=u<-c;h&&e.onSwipedLeft(),j&&e.onSwipedRight()}}},Ke=e=>F.fromISO(e).toLocaleString(F.TIME_24_SIMPLE),Re=e=>e.toFormat("c")>=6,je=e=>e.hasSame(F.now(),"day"),lo=O.div`
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
`,uo=()=>{const[e,n]=S.useState(void 0),[t,o]=io(e),{nextWeek:i,previousWeek:c,startWeekWithToday:a}=ao(n);S.useEffect(()=>{e===void 0&&a()},[]);const m=co({onSwipedLeft:()=>i(),onSwipedRight:()=>c()}),w=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),u=C.useMemo(()=>t.slice(0,7),[t]);return r.jsxs(lo,{...m,children:[r.jsx(Xn,{nextWeek:i,previousWeek:c,startWeekWithToday:a}),r.jsxs("div",{className:"schedule",children:[u.map((h,j)=>r.jsx("div",{className:z({weekend:Re(h.date),today:je(h.date)},"caption"),children:r.jsx("h2",{children:h.date.toLocaleString(w)})},j)),u.map((h,j)=>r.jsx("div",{className:z("allDayRow",{weekend:Re(h.date),today:je(h.date)}),children:h.allDay.map((T,b)=>r.jsx("div",{className:"allDayEvent",children:T.summary},b))},j)),u.map((h,j)=>r.jsx("div",{className:z("eventRow",{weekend:Re(h.date),today:je(h.date)}),children:h.events.map((T,b)=>r.jsxs("div",{className:"event",children:[r.jsx("div",{children:T.summary}),r.jsxs("h3",{children:[T.icon&&r.jsx(G,{path:T.icon,size:"1rem",color:"#ffffff"}),Ke(T.start.dateTime)," - ",Ke(T.end.dateTime)]})]},b))},j))]}),t.length===0&&r.jsx("div",{className:"loading",children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsx(rt,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&r.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:r.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},fo=O.div`
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
`;class X extends S.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",i=n?.stack||"",c=t?.componentStack||"";N.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:i,componentStack:c})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){if(this.state.hasError){const n=this.props.compact;return r.jsxs(fo,{$compact:n,children:[r.jsx("h2",{children:n?"Fehler":"Something went wrong"}),!n&&r.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,r.jsxs("div",{children:[r.jsx("button",{onClick:this.handleReset,children:"Try Again"}),r.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]})}return this.props.children}}const Ae={"clear-day":{icon:jt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:Rt,label:"Klar",color:"#eeeef5"},rain:{icon:Ct,label:"Regen",color:"#80a5d6"},snow:{icon:Tt,label:"Schnee",color:"#8c82ce"},sleet:{icon:St,label:"Graupel",color:"#aba4db"},wind:{icon:At,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:bt,label:"Neblig",color:"#d5dae2"},cloudy:{icon:wt,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:yt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:Et,label:"Teils bewölkt",color:"#d5dae2"}},ho=e=>{const[n,t]=S.useState([]),[o,i]=S.useState(!1),c=Me(6e4*10,"Weather"),a=U(),m=a.ENABLE_WEATHER||!1,w=a.WEATHER_LATITUDE,u=a.WEATHER_LONGITUDE,h=m&&w&&u,j=()=>`.${`/forecast/${w},${u}?units=si&exclude=minutely`}`;return S.useEffect(()=>{if(!h)return;let T=!0;const b=new AbortController;return B(j(),{signal:b.signal}).then(E=>{T&&(t(E.data),i(!1))}).catch(E=>{T&&!b.signal.aborted&&i(Q(E))}).finally(()=>{T&&e&&e(!1)}),()=>{T=!1,b.abort()}},[c,e,h,m,w,u]),[n,o]},po=Nt(kt),qe=O.div`

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
`,Je=C.memo(({data:e,daily:n=!1})=>r.jsxs("div",{children:[r.jsxs("div",{children:[!n&&F.fromSeconds(e.time).toLocaleString(F.TIME_24_SIMPLE),n&&F.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),r.jsx("div",{children:r.jsx(Oe,{icon:e.icon})}),r.jsx("div",{children:r.jsxs("strong",{children:[!n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),r.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),r.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),go=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:Ae[n.icon]?.color||"#ffffff",text:Ae[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),Oe=({icon:e})=>{const n=Ae[e];return r.jsx(n.icon,{size:60,color:"#ffffff"})},mo=()=>{const n=U().ENABLE_WEATHER||!1,[t,o]=ho(),[i,c]=S.useState(!1),a=de("w"),m=S.useRef(),w=C.useCallback(()=>c(b=>!b),[]),u=C.useCallback(()=>c(!0),[]),h=C.useMemo(()=>go(t),[t]),j=C.useMemo(()=>[3,6,9,12],[]),T=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return S.useEffect(()=>{if(!i||!m.current||!t||!t.hourly||h.length===0)return;const b={timezone:"Europe/Berlin"},E=document.createElement("div");return m.current.textContent="",m.current.appendChild(E),on(E,h,b),()=>{m.current&&(m.current.textContent="")}},[i,h]),S.useEffect(()=>{a&&w()},[a]),n?!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?r.jsx(qe,{children:r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":r.jsxs(qe,{children:[r.jsxs("div",{onClick:u,children:[r.jsxs("div",{className:"headline",children:[r.jsx(Oe,{icon:t.currently.icon}),r.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),r.jsx("div",{className:"forecast",children:j.map((b,E)=>r.jsx(Je,{data:t.hourly.data[b]},E))})]}),r.jsx(ue,{visible:i,onClick:w,children:r.jsxs("div",{className:"full-weather",children:[o!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),r.jsxs("div",{className:"detail-header",children:[r.jsx("div",{children:r.jsxs("div",{className:"headline",children:[r.jsx(Oe,{icon:t.daily.data[0].icon}),r.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",r.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),r.jsx("h3",{children:Ae[t.daily.data[0].icon].label})]}),r.jsx("div",{className:"values",children:r.jsxs("div",{className:"table",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Regen:"})," ",Math.round(t.daily.data[0].precipProbability*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),r.jsx("h3",{children:"Die nächsten 24 Stunden"}),r.jsx("div",{ref:m}),r.jsx("h3",{children:"Die nächste Woche"}),r.jsx("div",{className:"forecast",children:T.map((b,E)=>r.jsx(Je,{data:t.daily.data[b],daily:!0},E))}),r.jsxs("div",{className:"info",children:["Aktualisiert ",r.jsx(Lt,{date:F.fromSeconds(t.currently.time).toJSDate(),formatter:po})]})]})})]}):null},xo=C.memo(mo),Eo="AK Wandsbek",yo="Hamburg",wo="Master:62016",bo="STATION",Ao={x:10.091341,y:53.568702},So={name:Eo,city:yo,id:wo,type:bo,coordinate:Ao},ye={departureList:"departureList",checkName:"checkName"},To=async(e,n,t,o)=>{const i={Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},c=o.HASS_ACCESS_TOKEN||"";c&&c.trim()!==""&&c!=="undefined"&&c!=="null"&&(i.Authorization=`Bearer ${c}`);const a=Y(`/gti/public/${e}`,o);return B({method:"post",url:a,data:n,signal:t,headers:i})},Xe=(e,n)=>e.realtimeOffset-n.realtimeOffset,Co=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(Xe),to:n.filter(t=>t.directionId===6).slice(0,3).sort(Xe)}},Ro=e=>{const n=U(),t=n.ENABLE_HVV||!1,[o,i]=S.useState([]),[c,a]=S.useState(!1),m=Me(6e4),w=t;return S.useEffect(()=>{if(!w)return;if(!(e in ye)){N.warn(e,"not supported by HVV connector");return}let u=!0;const h=new AbortController;let j={version:51};switch(e){case ye.checkName:j={...j,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case ye.departureList:const T=F.now();j={...j,station:So,time:{date:T.toFormat("dd.MM.yyyy"),time:T.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:j=void 0}return To(e,j,h.signal,n).then(T=>{u&&(i(Co(T.data)),a(!1))}).catch(T=>{u&&!h.signal.aborted&&a(Q(T))}),()=>{u=!1,h.abort()}},[e,m,w,t]),[o,c]},jo=O.div`
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
`,Qe=C.memo(({line:e,direction:n,realtimeOffset:t})=>r.jsxs("div",{className:"departure",children:[r.jsx("div",{children:r.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),r.jsx("div",{children:t===0?"Jetzt":r.jsxs(r.Fragment,{children:["in ",t," '"]})})]})),Lo=()=>{const n=U().ENABLE_HVV||!1,[t,o]=Ro(ye.departureList);return n?r.jsx(jo,{children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((i,c)=>r.jsx(Qe,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},c)),r.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((i,c)=>r.jsx(Qe,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},c))]})}):null},No=C.memo(Lo),ko=()=>{const e=U(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"",o=e.ENTITY_CHARGING_STATE||"",i=e.ENTITY_STATE_OF_CHARGE||"",c=n&&(t||o||i),[a,m,w]=re({entityId:t,enabled:c&&!!t,config:e,initialState:"off"}),{error:u}=le({entityId:t,enabled:c&&!!t,onStateUpdate:w,logPrefix:"EV preclimate",wsOptions:{checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3}}),[h,j,T]=re({entityId:o,enabled:c&&!!o,config:e,initialState:"off"}),{error:b}=le({entityId:o,enabled:c&&!!o,onStateUpdate:T,logPrefix:"EV charging",wsOptions:{checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3}}),[E,x,p]=re({entityId:i,enabled:c&&!!i,config:e,initialState:"0"}),{error:f}=le({entityId:i,enabled:c&&!!i,onStateUpdate:p,logPrefix:"EV SoC",wsOptions:{checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3}});return[S.useMemo(()=>({preclimateStatus:a==="on",chargingState:h==="on",stateOfCharge:parseFloat(E)||0}),[a,h,E]),m||u||j||b||x||f||!1]},_o=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&B.post(Y("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to start preclimate:",t)})},Oo=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&B.post(Y("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to stop preclimate:",t)})},Do=({preclimateStatus:e,error:n,onStart:t,onStop:o})=>{const[i,c]=C.useState(!1),[a,m]=C.useState(null),[w,u]=C.useState(!1),[h,j]=C.useState(!1),[T,b]=C.useState(0),E=C.useRef(null),x=C.useRef(null),p=C.useRef(e),f=C.useRef(null);C.useEffect(()=>{p.current!==e&&(i&&f.current!==null&&e===(a==="start")&&(b(a==="start"?360:0),j(!0),setTimeout(()=>{c(!1),m(null),j(!1),b(0),f.current=null,u(!1)},300),E.current&&(clearTimeout(E.current),E.current=null)),p.current=e)},[e,i,a]),C.useEffect(()=>{if(!i||h){x.current&&(cancelAnimationFrame(x.current),x.current=null);return}const d=f.current||Date.now(),g=a==="stop",l=()=>{const y=Date.now()-d,R=Math.min(y/fn,1);b(g?360*(1-R):360*R),R<1&&!h&&(x.current=requestAnimationFrame(l))};return x.current=requestAnimationFrame(l),()=>{x.current&&(cancelAnimationFrame(x.current),x.current=null)}},[i,h,a]),C.useEffect(()=>()=>{E.current&&clearTimeout(E.current),x.current&&cancelAnimationFrame(x.current)},[]);const s=C.useCallback(()=>{if(n!==!1||i)return;const d=!e,g=d?"start":"stop";c(!0),m(g),j(!1),u(!1),b(0),f.current=Date.now(),p.current=e,d?t():o(),E.current=setTimeout(()=>{u(!0),setTimeout(()=>{c(!1),m(null),j(!1),b(0),u(!1),f.current=null},500)},hn)},[e,n,i,t,o]);return{isAnimating:i,animationDirection:a,shouldShake:w,isComplete:h,progressAngle:T,handleToggle:s}},vo=O.div`
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
`,Io=(e,n)=>n?Ft:e>=80?Gt:e>=50?zt:e>=20?Yt:Ht,$o=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",Mo=()=>{const e=U(),n=e.ENABLE_EV||!1,[t,o]=ko(),{preclimateStatus:i,chargingState:c,stateOfCharge:a}=t,m=C.useCallback(()=>_o(e),[e]),w=C.useCallback(()=>Oo(e),[e]),{isAnimating:u,animationDirection:h,shouldShake:j,isComplete:T,progressAngle:b,handleToggle:E}=Do({preclimateStatus:i,error:o,onStart:m,onStop:w}),x=Io(a||0,c),p=$o(a||0),f=Math.round(a||0),s=u?h==="start":i,d=h==="start"?"#17e146":"#f85a5a",g=h==="start"?"clockwise":"counterclockwise";return n?r.jsxs(vo,{className:z({disabled:o!==!1}),children:[r.jsxs("h2",{children:["Auto",o!==!1?r.jsxs("div",{className:"battery-info",children:[r.jsx(G,{path:ve,size:"1.2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs("div",{className:"battery-info",children:[r.jsxs("span",{className:"charge-percentage",children:[f,"%"]}),r.jsx(G,{path:x,size:"1.2rem",color:p})]})]}),o===!1&&r.jsxs("div",{className:"preclimate-button-wrapper",children:[u&&r.jsx("div",{className:z("progress-ring",g,{complete:T}),style:{"--progress-color":d,"--progress-angle":`${b}deg`,"--progress-gradient":`conic-gradient(from -90deg, ${d} 0deg, ${d} ${b}deg, transparent ${b}deg, transparent 360deg)`}}),r.jsxs("button",{className:z("preclimate-button",{spinning:s&&!u,shaking:j}),onClick:E,disabled:o!==!1||u,children:[r.jsx(G,{path:Ut,size:"2rem",color:s?"#ff9800":"#ffffff"}),r.jsx("span",{children:s?"Stop":"Start"})]})]})]}):null},Wo=C.memo(Mo),Bo=()=>{const e=U(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",o=n&&t,[i,c,a]=re({entityId:t,enabled:o,config:e,initialState:"closed"}),{error:m}=le({entityId:t,enabled:o,onStateUpdate:a,logPrefix:"garage door"});return[i,c||m||!1]},Po=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),Ie);B.post(Y("/api/services/cover/toggle",n),{entity_id:t}).catch(i=>{N.error("Failed to toggle garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},Vo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),Ie);B.post(Y("/api/services/cover/open_cover",n),{entity_id:t}).catch(i=>{N.error("Failed to open garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},Uo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),Ie);B.post(Y("/api/services/cover/close_cover",n),{entity_id:t}).catch(i=>{N.error("Failed to close garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},Fo=O.div`
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
`,mt=O.div`
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
`,De=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:Qt},open:{label:"Offen",icon:Xt},closed:{label:"Geschlossen",icon:Jt},opening:{label:"Öffnet",icon:qt},closing:{label:"Schließt",icon:Kt}};return n[e]||N.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:Zt}},Go=({garageDoor:e,animate:n=!1})=>r.jsxs(mt,{className:z({animate:n}),children:[r.jsx(G,{path:De(e).icon,size:"2rem",color:"#ffffff"}),r.jsx("span",{children:De(e).label})]}),zo=e=>_t.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return De(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),Yo=()=>{const e=U(),n=e.ENABLE_GARAGE||!1,[t,o]=Bo(),[i,c]=S.useState(void 0),[a,m]=S.useState(!1),[w,u]=S.useState(!1);S.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!i){const E=new Promise(x=>{c({resolve:x})});zo(E)}}else i&&(i.resolve(t),c(void 0))},[t]);const h=de("g");S.useEffect(()=>{h&&o===!1&&Po(m,e)},[h,o,e]);const j=C.useCallback(b=>{if(o===!1)switch(u(!1),b){case"open":Vo(m,e);break;case"close":Uo(m,e);break}},[m,o,e]),T=C.useCallback(()=>{o===!1&&u(!0)},[o]);return n?r.jsxs(Fo,{className:z({disabled:o!==!1}),children:[r.jsx("h2",{children:"Garage"}),r.jsx("div",{className:"status",onClick:T,children:o!==!1?r.jsxs(mt,{children:[r.jsx(G,{path:ve,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsx(Go,{garageDoor:t,animate:a})}),r.jsx(ue,{visible:w&&o===!1,onClick:()=>u(!1),children:r.jsxs("div",{className:"controls",children:[r.jsx("h2",{children:"Garagentor"}),r.jsx("div",{onClick:()=>j("open"),children:"Öffnen"}),r.jsx("div",{onClick:()=>j("close"),children:"Schließen"})]})})]}):null},Ho=C.memo(Yo),Ko=({entityIds:e,enabled:n,onStateUpdate:t,logPrefix:o,wsOptions:i={}})=>{const{error:c}=pt({enabled:n&&e.length>0,logPrefix:o,...i,onReady:(a,m)=>(e.forEach(w=>{const u=h=>{h.state!==void 0&&t(w,h.state)};m.current.set(w,u),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"subscribe_entity",entity_id:w}))}),e.length>0&&N.debug(`Subscribed to ${o} state changes: ${e.join(", ")}`),()=>{e.forEach(w=>{m.current.delete(w),a.readyState===WebSocket.OPEN&&a.send(JSON.stringify({type:"unsubscribe_entity",entity_id:w}))})}),dependencies:[n,e.join(",")]});return{error:c}},K={done:{label:"Fertig",animate:!1,icon:tn},off:{label:"Aus",animate:!1,icon:en},standby:{label:"Standby",animate:!1,icon:We},running:{label:"Läuft …",animate:!0,icon:We}},qo={off:0,standby:2,running:16,done:256},Jo=()=>{const e=U(),n=e.ENABLE_LAUNDRY||!1,t=e.LAUNDRY_MACHINES||[],o=Array.isArray(t)?t:[],i=S.useMemo(()=>o.filter(d=>d.entity_id).map(d=>d.entity_id),[o.map(d=>d.entity_id).join(",")]),[c,a]=S.useState({}),[m,w]=S.useState({}),u=S.useCallback((d,g)=>{a(l=>({...l,[d]:g}))},[]),{error:h}=Ko({entityIds:i,enabled:n&&i.length>0,onStateUpdate:u,logPrefix:"laundry"});S.useEffect(()=>{if(!n||i.length===0)return;const d=new Map;return i.forEach(g=>{const l=Y(`/api/states/${g}`,e);if(!l)return;const y=new AbortController;d.set(g,y),B(l,{signal:y.signal}).then(R=>{a(A=>({...A,[g]:R.data.state})),w(A=>({...A,[g]:!1}))}).catch(R=>{y.signal.aborted||w(A=>({...A,[g]:Q(R)}))})}),()=>{d.forEach(g=>g.abort())}},[n,i.join(","),e]);const j=o.map(d=>({state:c[d.entity_id]||"off",error:m[d.entity_id]||h||!1,name:d.name})),[T,b]=S.useState(K.off),[E,x]=S.useState(!1),p=j.map(d=>d.state),f=j.map(d=>d.error);S.useEffect(()=>{const d=f.some(g=>g!==!1);x(d&&f.find(g=>g!==!1)||!1)},[f]),S.useEffect(()=>{const d=p.reduce((g,l)=>g+(qo[l]||0),0);d===0?b(K.off):d<16?b(K.standby):d<256?b(K.running):d%256===0?b(K.done):d%256%16===0?b(K.running):d%256%2===0?b(K.done):b(K.running)},[p]);const s=j.map(d=>({label:d.name,state:d.state}));return[T,s,E]},Xo=O.div`
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
`,Qo=()=>{const n=U().ENABLE_LAUNDRY||!1,[t,o,i]=Jo(),[c,a]=S.useState(!1),m=C.useCallback(()=>{i===!1&&a(!0)},[i]),w=C.useCallback(()=>a(!1),[]);return n?r.jsxs(Xo,{className:z({disabled:i!==!1}),children:[r.jsx("h2",{children:"Wäsche"}),r.jsx("div",{className:"status",onClick:m,children:i!==!1?r.jsxs(r.Fragment,{children:[r.jsx(G,{path:ve,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:z({animate:t.animate}),children:r.jsx(G,{path:t.icon,size:"2rem",color:"#ffffff"})}),r.jsx("span",{children:t.label})]})}),r.jsx(ue,{visible:c&&i===!1,onClick:w,children:r.jsxs("div",{className:"states",children:[r.jsx("h2",{children:"Wäsche"}),o.map((u,h)=>r.jsxs("div",{children:[r.jsx("div",{className:"subtitle",children:u.label}),r.jsx("div",{className:z({animate:K[u.state].animate}),children:r.jsx(G,{path:K[u.state].icon,size:2})}),r.jsx("div",{children:K[u.state].label})]},h))]})})]}):null},Zo=C.memo(Qo),er=O.div`
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
`,tr=()=>r.jsxs(er,{children:[r.jsxs("div",{className:"top-content",children:[r.jsx(X,{compact:!0,children:r.jsx(xo,{})}),r.jsx(X,{compact:!0,children:r.jsx(No,{})}),r.jsx(X,{compact:!0,children:r.jsx(Wo,{})})]}),r.jsxs("div",{className:"two-cols",children:[r.jsx(X,{compact:!0,children:r.jsx(Ho,{})}),r.jsx(X,{compact:!0,children:r.jsx(Zo,{})})]})]}),nr=C.memo(tr),Ze=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],or=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],we={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},rr={landscape:"L",portrait:"P",wide:"W"},ir=O.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,sr=O.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,ar=O.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,ee=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,te=O.label`
  font-size: 0.9rem;
  color: #cccccc;
`,et=O.select`
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
`,tt=O.input`
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
`,cr=O.button`
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
`,nt=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,lr=O.button`
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
`,dr=O.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,ur=O.div`
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
`,fr=O.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,hr=O.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,pr=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,pe=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ge=O.div`
  font-size: 0.85rem;
  color: #cccccc;
`,me=O.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,gr=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,mr=O.h3`
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
`,ot=()=>{const[e,n]=C.useState(1920),[t,o]=C.useState(1080),[i,c]=C.useState("Full HD"),[a,m]=C.useState(""),[w,u]=C.useState(""),[h,j]=C.useState([{orientation:"landscape"}]),[T,b]=C.useState(null),E=C.useMemo(()=>gt(h,e,t),[h,e,t]),x=l=>{const y=Ze.find(R=>R.name===l);y&&y.width&&y.height?(n(y.width),o(y.height),c(l),m(""),u("")):l==="Custom"&&c("Custom")},p=()=>{const l=parseInt(a),y=parseInt(w);l>0&&y>0&&(n(l),o(y))},f=l=>{j(l.videos),b(l.name)},s=l=>{const y=[];for(let R=0;R<l;R++)y.push(h[R]||{orientation:"landscape"});j(y),b(null)},d=(l,y)=>{const R=[...h];R[l]={orientation:y},j(R),b(null)},g=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return r.jsxs(ir,{children:[r.jsx(sr,{children:"Video Tiling Algorithm Demo"}),r.jsxs(ar,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:"Screen Size Preset"}),r.jsx(et,{value:i,onChange:l=>x(l.target.value),children:Ze.map(l=>r.jsx("option",{value:l.name,children:l.name},l.name))})]}),i==="Custom"&&r.jsxs(r.Fragment,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:"Custom Width"}),r.jsx(tt,{type:"number",value:a,onChange:l=>m(l.target.value),placeholder:"Width",min:"100"})]}),r.jsxs(ee,{children:[r.jsx(te,{children:"Custom Height"}),r.jsx(tt,{type:"number",value:w,onChange:l=>u(l.target.value),placeholder:"Height",min:"100"})]}),r.jsxs(ee,{children:[r.jsx(te,{children:" "}),r.jsx(cr,{onClick:p,children:"Apply Custom Size"})]})]}),r.jsxs(ee,{children:[r.jsx(te,{children:"Number of Videos"}),r.jsxs(et,{value:h.length,onChange:l=>s(parseInt(l.target.value)),children:[r.jsx("option",{value:"1",children:"1 Video"}),r.jsx("option",{value:"2",children:"2 Videos"}),r.jsx("option",{value:"3",children:"3 Videos"}),r.jsx("option",{value:"4",children:"4 Videos"})]})]}),h.map((l,y)=>r.jsxs(ee,{children:[r.jsxs(te,{children:["Video ",y+1," Orientation"]}),r.jsxs(nt,{children:[r.jsx(Le,{active:l.orientation==="landscape",orientation:"landscape",onClick:()=>d(y,"landscape"),children:"Landscape"}),r.jsx(Le,{active:l.orientation==="portrait",orientation:"portrait",onClick:()=>d(y,"portrait"),children:"Portrait"}),r.jsx(Le,{active:l.orientation==="wide",orientation:"wide",onClick:()=>d(y,"wide"),children:"Wide"})]})]},y))]}),r.jsxs(gr,{children:[r.jsx(mr,{children:"Test Scenarios"}),r.jsx(nt,{children:or.map(l=>r.jsx(lr,{active:T===l.name,onClick:()=>f(l),children:l.name},l.name))})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:r.jsx(dr,{style:{width:`${e*g}px`,height:`${t*g}px`},children:E.videos.map((l,y)=>r.jsxs(ur,{orientation:l.orientation,style:{left:`${l.x*g}px`,top:`${l.y*g}px`,width:`${l.width*g}px`,height:`${l.height*g}px`},children:[r.jsxs(fr,{children:[rr[l.orientation]," ",y+1]}),r.jsxs(hr,{children:[Math.round(l.width)," × ",Math.round(l.height)]})]},y))})}),r.jsxs(pr,{children:[r.jsxs(pe,{children:[r.jsx(ge,{children:"Canvas Size"}),r.jsxs(me,{children:[e," × ",t]})]}),r.jsxs(pe,{children:[r.jsx(ge,{children:"Total Area Used"}),r.jsxs(me,{children:[Math.round(E.totalArea).toLocaleString()," px²"]})]}),r.jsxs(pe,{children:[r.jsx(ge,{children:"Efficiency"}),r.jsxs(me,{children:[E.efficiency.toFixed(2),"%"]})]}),r.jsxs(pe,{children:[r.jsx(ge,{children:"Display Scale"}),r.jsxs(me,{children:[(g*100).toFixed(1),"%"]})]})]})]})},be="hass-family-calendar-config-banner-dismissed",xr=O.div`
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
`,Er=()=>{const e=ct(),n=lt(),t=dt(),o=at(),[i,c]=C.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(be)==="true"}catch{}return!1}),[a,m]=C.useState(!1);if(C.useEffect(()=>{if(e&&i){c(!1);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(be)}catch{}}},[e,i]),o||i||!e&&!n)return null;const w=async()=>{m(!0);try{await t()}catch{}finally{m(!1)}},u=()=>{c(!0);try{typeof window<"u"&&window.localStorage&&localStorage.setItem(be,"true")}catch{}};let h="warning",j="";return e&&n?(h="warning",j=`Using cached configuration. Failed to load from server: ${e}`):e&&!n?(h="error",j=`Failed to load configuration: ${e}`):n&&(h="warning",j="Using cached configuration. Some features may be outdated."),r.jsxs(xr,{severity:h,children:[r.jsx("div",{className:"message",children:j}),r.jsxs("div",{className:"actions",children:[e&&r.jsx("button",{onClick:w,disabled:a,children:a?"Retrying...":"Retry"}),r.jsx("button",{className:"dismiss",onClick:u,title:"Dismiss",children:"×"})]})]})},yr=Ot`
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
`,wr=O.div`
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
`;function br(){const e=ct(),n=lt(),t=at(),[o]=S.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(be)==="true"}catch{}return!1}),i=!t&&!o&&(e||n);return r.jsxs(wr,{$hasBanner:i,children:[r.jsx(yr,{}),r.jsx(Er,{}),r.jsxs("div",{className:"main",children:[r.jsx(X,{children:r.jsx(uo,{})}),r.jsx(X,{children:r.jsx(nr,{})})]}),r.jsx(vt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Ar(){return r.jsx(X,{children:r.jsxs(Dt,{children:[r.jsx(Te,{path:"/demo",element:r.jsx(ot,{})}),r.jsx(Te,{path:"/tiling-demo",element:r.jsx(ot,{})}),r.jsx(Te,{path:"*",element:r.jsx(br,{})})]})})}const Sr=It.createRoot(document.getElementById("root"));Sr.render(r.jsx(S.StrictMode,{children:r.jsx(X,{children:r.jsx(En,{children:r.jsx(Ln,{children:r.jsx($t,{children:r.jsx(Ar,{})})})})})}));
