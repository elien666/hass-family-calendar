import{d as O,R as T,j as r,I as z,r as R,l as nt,P as pt,W as gt,b as mt,e as xt,f as wt,h as Et,i as yt,k as bt,m as At,n as St,o as Tt,T as Ct,p as Rt,s as jt,y as Lt,q as Nt,t as _t,u as Se,L as kt,v as vt,B as Ot}from"./react-vendor-Dp8JcOQr.js";import{D as U}from"./date-vendor-BDx6lZXm.js";import{f as Y}from"./vendor-CTBBup_z.js";import{m as Dt,a as It,b as $t,c as Mt,d as Pt,e as Wt,f as De,g as Bt,h as Vt,i as Gt,j as Ht,k as Ut,l as Ft,n as Yt,o as zt,p as Kt,q as qt,r as Xt,s as Jt,t as Pe,u as Qt,v as Zt}from"./ui-vendor-C7t39j5V.js";import{a as I,q as en}from"./utils-vendor-B6VY1mja.js";import{c as tn,a as nn}from"./ha-vendor-CoU0AojH.js";import{t as on}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(i){if(i.ep)return;i.ep=!0;const u=t(i);fetch(i.href,u)}})();const rn=O.div`
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
`,le=({visible:e,children:n,onClick:t,onClose:o,fullsize:i=!1})=>{const u=o||t,c=f=>{f.stopPropagation(),f.preventDefault(),u()};return T.useEffect(()=>{if(e){const f=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${f}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,f)}}},[e]),e?r.jsxs(rn,{onClick:t,children:[r.jsx("div",{className:"close",onClick:c,children:r.jsx(z,{path:Dt,size:2})}),r.jsx("div",{className:Y("content",{fullsize:i}),onClick:f=>f.stopPropagation(),children:n})]}):null};let ot=!0;const sn=e=>{ot=!!e};let me=!1,X=[],se=0;const ae=100,We=50,Ne=()=>{if(X.length===0||me)return;const e=X.shift(),n=Date.now();n-se>=ae?ie(e.level,e.message,e.metadata):(X.unshift(e),setTimeout(Ne,ae-(n-se)))},ie=(e,n,t=null)=>{if(!ot)return;if(me){X.length<We&&X.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const o=Date.now();if(o-se<ae){X.length<We&&(X.push({level:e,message:n,metadata:t,timestamp:o}),X.length===1&&setTimeout(Ne,ae-(o-se)));return}setTimeout(async()=>{me=!0,se=Date.now();try{const u=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,c={level:e,message:n,...t&&{metadata:t}};await I.create({timeout:2e3}).post(u,c)}catch{X.length>10&&(X=[])}finally{me=!1,X.length>0&&setTimeout(Ne,ae)}},0)},ue=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},fe=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},_={log:(...e)=>{const n=ue(e),t=fe(e);n&&ie("INFO",n,t)},error:(...e)=>{console.error(...e);const n=ue(e),t=fe(e);n&&ie("ERROR",n,t)},warn:(...e)=>{const n=ue(e),t=fe(e);n&&ie("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=ue(e),t=fe(e);n&&ie("INFO",n,t)}},an={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},_e="hass-family-calendar-config",cn=()=>{const e=(n,t=void 0)=>{const o=an[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),SUPERVISOR_TOKEN:e("SUPERVISOR_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_API_KEY:e("WEATHER_API_KEY",""),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),GEOFOX_SECRET:e("GEOFOX_SECRET",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},Te=()=>{try{if(typeof window>"u"||!window.localStorage)return null;const e=localStorage.getItem(_e);if(e){const n=JSON.parse(e);return _.debug("Loaded cached config from localStorage"),n}}catch(e){_.warn("Failed to load cached config from localStorage:",e);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(_e)}catch{}}return null},ln=e=>{try{return typeof window>"u"||!window.localStorage?!1:(localStorage.setItem(_e,JSON.stringify(e)),_.debug("Saved config to localStorage"),!0)}catch(n){return _.warn("Failed to save config to localStorage:",n),!1}},re=R.createContext(null),dn=({children:e})=>{const[n,t]=R.useState(()=>Te()||cn()),[o,i]=R.useState(!0),[u,c]=R.useState(null),[f,y]=R.useState(()=>!!Te()),d=R.useRef(!0),p=R.useRef(n);R.useEffect(()=>{p.current=n},[n]);const w=R.useCallback(async(h=!1)=>{try{const l=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`,s=await I.get(l,{timeout:5e3});if(s.data&&typeof s.data=="object")if(typeof s.data=="object"&&!Array.isArray(s.data)){if(d.current){const x=p.current;JSON.stringify(s.data)!==JSON.stringify(x)?(t(s.data),y(!1),c(null),ln(s.data)):(y(!1),c(null));const g=Object.keys(s.data).filter(A=>A.startsWith("ENABLE_")&&s.data[A]).map(A=>A.replace("ENABLE_",""));_.info(`Configuration ${h?"reloaded":"loaded"} from API endpoint. Enabled features: ${g.length>0?g.join(", "):"none"}`,{enabledFeatures:g,totalConfigKeys:Object.keys(s.data).length})}return!0}else throw new Error("Invalid config structure: expected object");else throw new Error("Invalid config response: expected object")}catch(a){if(d.current){const l=a.response?`HTTP ${a.response.status}: ${a.response.statusText}`:a.message||"Unknown error";c(l),h?_.warn("Failed to reload config from API, keeping current config:",l):Te()?(_.warn("Failed to load config from API, using cached config:",l),y(!0)):y(!1)}return!1}finally{d.current&&!h&&i(!1)}},[]),E=R.useRef(null),b=R.useCallback(async()=>{if(E.current)return E.current;const h=w(!0).finally(()=>{E.current=null});return E.current=h,h},[w]);R.useEffect(()=>(w(!1),()=>{d.current=!1}),[]),R.useEffect(()=>{const h=n.HASS_ACCESS_TOKEN||"";h&&typeof h=="string"&&h.trim()!==""&&h!=="undefined"&&h!=="null"?I.defaults.headers.common.Authorization=`Bearer ${h}`:delete I.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),R.useEffect(()=>{const h=n.ENABLE_LOGGING===!0;sn(h)},[n.ENABLE_LOGGING]);const m=R.useMemo(()=>({config:n,loading:o,configError:u,isUsingCachedConfig:f,reloadConfig:b}),[n,o,u,f,b]);return r.jsx(re.Provider,{value:m,children:e})},G=()=>{const e=R.useContext(re);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config},rt=()=>{const e=R.useContext(re);if(!e)throw new Error("useConfigLoading must be used within ConfigProvider");return e.loading},it=()=>{const e=R.useContext(re);if(!e)throw new Error("useConfigError must be used within ConfigProvider");return e.configError},st=()=>{const e=R.useContext(re);if(!e)throw new Error("useIsUsingCachedConfig must be used within ConfigProvider");return e.isUsingCachedConfig},at=()=>{const e=R.useContext(re);if(!e)throw new Error("useReloadConfig must be used within ConfigProvider");return e.reloadConfig};let oe=0,xe=0,Z=0;const ne=[],ct=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},un=(e,n="")=>{const t=ct(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;Z++,oe++,ne.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ne.length>10&&ne.shift();const i=[];return n&&i.push(`[${n}]`),i.push("🔴 Axios API Error:"),i.push(`Message: ${t.message}`),t.url&&i.push(`URL: ${t.url}`),t.status&&i.push(`HTTP Status: ${t.status}`),t.code&&i.push(`Error Code: ${t.code}`),t.isNetworkError&&(i.push("Type: Network Error (no response received)"),t.readyState!==void 0&&i.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&i.push("Type: Timeout Error"),t.config&&(i.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),i.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&i.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&i.push("Response Data:",t.responseData),i.push(`Request Stats: ${xe} success, ${Z} errors (${oe} total)`),Z>3&&ne.length>0&&i.push("Recent errors pattern:",ne.slice(-5)),_.error(...i),t},fn=e=>{xe++,oe++,(oe%10===0||Z>0)&&_.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:oe,stats:`${xe} success, ${Z} errors`}),Z>0&&oe%10===0&&xe>Z&&(Z=0,ne.length=0)},K=e=>{const n=ct(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};let ke=null;const Be=e=>{ke=e},Ve=!1;I.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,_.debug("Axios Defaults State:",{baseURL:I.defaults.baseURL,timeout:I.defaults.timeout,hasAuthHeader:!!I.defaults.headers?.common?.Authorization,authHeaderLength:I.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(I.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||_.error("Axios Request Setup Error:",e),Promise.reject(e)));I.interceptors.response.use(e=>(e.config&&fn(e.config),e),e=>{const n=e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"),t=e.config?.metadata?.skipConnectionCheck===!0;if(!n){const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(un(e,o),e.config?.metadata){const i=Date.now()-e.config.metadata.startTime;_.error("Request Duration:",`${i}ms`,"Request ID:",e.config.metadata.requestId)}typeof window<"u"&&window.location&&_.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href}),!t&&ke&&!e.response&&(e.code==="ERR_NETWORK"||e.code==="ECONNABORTED"||e.code==="ERR_CANCELED")&&ke()}return Promise.reject(e)});const V=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const o=n.INGRESS_URL||"";if(o&&typeof o=="string"&&o.trim()!==""){const u=t.startsWith("/")?t.slice(1):t;return`${window.location.origin}${o}${u}`}const i=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${i}${t}`}return t}},lt=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},hn=(e={})=>{const n=lt(e);if(!n)return"";const t=n.startsWith("https://")?"wss://":"ws://",o=n.replace(/^https?:\/\//,"");return`${t}${o}/api/websocket`},pn=()=>{const e=G(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[o,i]=T.useState(null),[u,c]=T.useState(!1),f=n&&t,y=t?V(`/api/states/${t}`,e):null;return T.useEffect(()=>{if(!f||!y)return;let d=!0;const p=new AbortController;return I(y,{signal:p.signal}).then(w=>{d&&(w.data.attributes.store!==void 0?i(w.data.attributes.store):i([]),c(!1))}).catch(w=>{d&&!p.signal.aborted&&(c(K(w)),i([]))}),()=>{d=!1,p.abort()}},[f,y,n,t]),[o,u]},gn=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=V(`/api/states/${t}`,n);I.post(o,{state:new Date,attributes:{store:e}}).catch(i=>{_.error("Failed to store everyday calendar data:",i)})},Ge=O.div` 

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
`,mn=({on:e,month:n,day:t})=>{const[o,i]=e,u=o.indexOf(`${n}-${t}`),c=u>-1,f=()=>{i(c?o.toSpliced(u,1):[...o,`${n}-${t}`])};return r.jsx("div",{className:Y("dot",{on:c}),onClick:()=>f()})},xn=()=>{const e=G();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let d=1;d<13;d++){const p=new Date(t,d,0).getDate();for(let w=1;w<=p;w++)o.push({month:d,day:w})}const i=Array.from({length:31},(d,p)=>p+1),u=Array.from({length:12},(d,p)=>p+1),c=T.useState(void 0),[f,y]=pn();return T.useEffect(()=>{f!==null&&c[1](f)},[f]),T.useEffect(()=>{c[0]!==void 0&&gn(c[0],e)},[c[0],e]),c[0]!==void 0?r.jsxs(Ge,{children:[r.jsx("h2",{children:"Jeden Tag ein bißchen"}),y!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:y instanceof Error?y.message:String(y)})]}),r.jsxs("div",{className:"calendar",children:[i.map((d,p)=>r.jsx("div",{style:{gridArea:`${d+1} / 1 / ${d+1} / 1`},children:d},p)),u.map((d,p)=>r.jsx("div",{style:{gridArea:`1 / ${d+1} / 1 / ${d+1}`},children:d},p)),o.map((d,p)=>r.jsx("div",{style:{gridArea:`${d.day+1} / ${d.month+1} / ${d.day+1} / ${d.month+1}`},children:r.jsx(mn,{on:c,month:d.month,day:d.day})},p))]})]}):r.jsx(Ge,{className:"loading",children:y!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:y instanceof Error?y.message:String(y)})]}):r.jsx(nt,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},wn=O.div`
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
  }`,En=()=>{const[e,n]=T.useState(U.now()),[t,o]=T.useState(!1),i=R.useCallback(()=>o(!0),[]),u=R.useCallback(()=>o(!1),[]);return T.useEffect(()=>{const c=setInterval(()=>n(U.now()),1e3);return()=>clearInterval(c)},[]),r.jsxs(r.Fragment,{children:[r.jsxs(wn,{onClick:i,children:[e.toFormat("HH"),r.jsx("span",{children:":"}),e.toFormat("mm")]}),r.jsx(le,{visible:t,onClick:u,fullsize:!0,children:r.jsx(xn,{})})]})},yn=R.memo(En),bn=3e3,An=3e4,Sn=5e3,Tn=()=>{const[e,n]=R.useState(!0),t=R.useRef(null),o=R.useRef(null),i=R.useRef(!1),u=R.useRef(Date.now()),c=R.useRef(!0);R.useEffect(()=>{c.current=e},[e]);const f=R.useCallback(async()=>{if(!i.current){i.current=!0,u.current=Date.now();try{const p=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`;await I.get(p,{timeout:Sn,metadata:{skipConnectionCheck:!0}}),c.current||_.info("Connection restored - backend is reachable"),n(!0),i.current=!1,o.current&&(clearInterval(o.current),o.current=null)}catch(d){!d.response&&(d.code==="ERR_NETWORK"||d.code==="ECONNABORTED")?(c.current&&_.warn("Connection lost - backend is not reachable"),n(!1),i.current=!1,o.current||(o.current=setInterval(()=>{f()},An))):(c.current||_.info("Connection restored - backend responded (with error)"),n(!0),i.current=!1,o.current&&(clearInterval(o.current),o.current=null))}}},[]),y=R.useCallback(()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{f()},bn)},[f]);return R.useEffect(()=>{const d=()=>{document.visibilityState==="visible"&&y()};return document.addEventListener("visibilitychange",d),()=>{document.removeEventListener("visibilitychange",d)}},[y]),R.useEffect(()=>{const d=setTimeout(()=>{f()},1e3);return()=>{clearTimeout(d)}},[f]),R.useEffect(()=>()=>{t.current&&clearTimeout(t.current),o.current&&clearInterval(o.current)},[]),{isConnected:e,triggerCheck:y}},dt=R.createContext(null),Cn=({children:e})=>{const n=Tn(),t=at(),o=R.useRef(!1),i=R.useRef(null),u=R.useRef(!1);return R.useEffect(()=>(Be(n.triggerCheck),()=>{Be(null)}),[n.triggerCheck]),R.useEffect(()=>{const c=n.isConnected;if(!c){o.current=!0,i.current&&(clearTimeout(i.current),i.current=null);return}return o.current&&c&&!u.current&&(i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{u.current||(u.current=!0,t().then(()=>{o.current=!1}).catch(f=>{_.warn("Failed to reload config after connection restore:",f)}).finally(()=>{u.current=!1,i.current=null}))},2e3)),()=>{i.current&&(clearTimeout(i.current),i.current=null)}},[n.isConnected,t]),r.jsx(dt.Provider,{value:n,children:e})},Rn=()=>{const e=R.useContext(dt);if(!e)throw new Error("useConnectionStateContext must be used within ConnectionStateProvider");return e};function de({onReady:e,enabled:n=!0,checkBackendConnection:t=!0,reconnectStrategy:o="simple",maxReconnectAttempts:i=5,reconnectDelay:u=2e3,logPrefix:c="WebSocket",dependencies:f=[]}){const y=G(),d=Rn(),p=t?d?.isConnected:!0,[w,E]=T.useState(!1),[b,m]=T.useState(!1),h=T.useRef(null),a=T.useRef(null),l=T.useRef(!0),s=T.useRef(null),x=T.useRef(null),S=T.useRef(0),g=T.useRef(!1),A=T.useRef(null),C=T.useRef(null),L=T.useCallback(()=>{const N=h.current,k=A.current,$=C.current,v=a.current;if(s.current&&(clearTimeout(s.current),s.current=null),x.current&&(clearTimeout(x.current),x.current=null),N)try{k&&N.removeEventListener("ready",k),$&&N.removeEventListener("disconnected",$)}catch{}if(v){try{Array.isArray(v)?v.forEach(M=>{M&&M()}):typeof v=="function"&&v()}catch{}a.current=null}if(N){try{N.close()}catch{}h.current=null}A.current=null,C.current=null},[c]),j=T.useCallback(async()=>{if(!(!n||!l.current)&&!(t&&!p)&&!g.current){h.current&&L(),g.current=!0,m(!0);try{const N=lt(y),k=y.HASS_ACCESS_TOKEN||"",$=y.SUPERVISOR_TOKEN||"",v=Ve?k||"":$||k||"";if(!v){_.debug(`Skipping ${c} connection - no access token (using REST API only)`),g.current=!1,m(!1);return}if(!N){_.error(`Failed to build WebSocket host for ${c} - cannot create auth`),l.current&&E("WebSocket host konnte nicht erstellt werden."),g.current=!1,m(!1);return}let M;try{M=tn(N,v),l.current&&E(!1)}catch(P){l.current&&(_.error(`Failed to create WebSocket auth for ${c}:`,P),E(P instanceof Error?P.message:String(P))),g.current=!1,m(!1);return}let W={auth:M};if(!Ve){const P=hn(y);if(!P){_.error(`Failed to build WebSocket URL for ${c} - cannot connect`),l.current&&E("WebSocket URL konnte nicht erstellt werden."),g.current=!1,m(!1);return}W.createSocket=()=>new Promise((Me,q)=>{const Ae=new WebSocket(P);Ae.onopen=()=>Me(Ae),Ae.onerror=ht=>q(ht)})}const B=await nn(W);h.current=B;const H=async()=>{if(!l.current||!h.current){_.debug(`Skipping ready handler for ${c} - component unmounted or connection is null`);return}if(_.debug(`${c} connection ready`),S.current=0,E(!1),!h.current){_.warn(`Connection became null before subscription for ${c}`);return}try{const P=await e(h.current);a.current=P}catch(P){_.error(`Failed to subscribe for ${c}:`,P),l.current&&E(P instanceof Error?P.message:String(P))}};A.current=H,B.addEventListener("ready",H);const F=()=>{if(l.current&&!g.current){if(_.debug(`${c} disconnected`),h.current)try{A.current&&h.current.removeEventListener("ready",A.current),C.current&&h.current.removeEventListener("disconnected",C.current)}catch(P){_.debug(`Error removing event listeners on disconnect for ${c}:`,P)}if(h.current=null,a.current=null,A.current=null,C.current=null,s.current&&(clearTimeout(s.current),s.current=null),o==="exponential"&&S.current>=i){_.warn(`Max reconnection attempts (${i}) reached for ${c}, stopping reconnection`),l.current&&E("Verbindung verloren. Bitte Seite neu laden.");return}if(p)if(o==="exponential"){const P=Math.min(u*Math.pow(2,S.current),3e4);S.current++,s.current=setTimeout(()=>{l.current&&!g.current&&p&&(_.debug(`Attempting to reconnect ${c} (attempt ${S.current}/${i})`),j())},P)}else s.current=setTimeout(()=>{l.current&&!g.current&&p&&(_.debug(`Attempting to reconnect ${c}`),j())},u);else _.debug(`Skipping reconnection for ${c} - waiting for backend connection`)}};C.current=F,B.addEventListener("disconnected",F),B&&B.ready&&H(),g.current=!1,m(!1)}catch(N){if(g.current=!1,m(!1),l.current&&(_.error(`Failed to setup ${c} connection:`,N),E(N instanceof Error?N.message:String(N)),p))if(o==="exponential"&&S.current<i){const k=Math.min(u*Math.pow(2,S.current),3e4);S.current++,s.current=setTimeout(()=>{l.current&&!g.current&&p&&(_.debug(`Attempting to reconnect ${c} after error (attempt ${S.current}/${i})`),j())},k)}else o==="simple"?s.current=setTimeout(()=>{l.current&&!g.current&&p&&j()},u):(_.warn(`Max reconnection attempts (${i}) reached for ${c}, stopping reconnection`),l.current&&E("Verbindung fehlgeschlagen. Bitte Seite neu laden."))}}},[n,t,p,y,o,i,u,c,e,L]);return T.useEffect(()=>{n&&p&&j()},[n,p,j,...f]),T.useEffect(()=>{n&&p&&!h.current&&!g.current&&(x.current&&(clearTimeout(x.current),x.current=null),x.current=setTimeout(()=>{l.current&&p&&!h.current&&!g.current&&j()},1e3))},[n,p,j,c]),T.useEffect(()=>()=>{l.current=!1,L()},[L]),{connection:h.current,error:w,isConnecting:b}}const jn=()=>{const e=G(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const[o,i]=T.useState("off"),[u,c]=T.useState(!1),f=n&&t,y=t?V(`/api/states/${t}`,e):null;T.useEffect(()=>{if(!f||!y)return;let w=!0;const E=new AbortController;return I(y,{signal:E.signal}).then(b=>{w&&(i(b.data.state),c(!1))}).catch(b=>{w&&!E.signal.aborted&&c(K(b))}),()=>{w=!1,E.abort()}},[f,y,n,t]);const{error:d}=de({enabled:f&&!!t,logPrefix:"doorbell",onReady:async w=>{const E=m=>{const h=m.variables.trigger.to_state.state;i(h)},b=await w.subscribeMessage(E,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}});return _.debug("Subscribed to doorbell state changes"),b},dependencies:[f,t]});return[o,u||d||!1]},Ln=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&I.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{_.error("Failed to unlatch front door:",t)})},D={portrait:360/480,landscape:1920/1072,wide:770/216};function Nn(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function ut(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,i=Nn(e);return o===1?_n(e[0],n,t):o===2?kn(i,e,n,t):o===3?vn(i,e,n,t):o===4?On(i,e,n,t):{videos:[],totalArea:0,efficiency:0}}function _n(e,n,t){const o=D[e.orientation];let i,u;const c=n/t;return o>c?(i=n,u=n/o):(u=t,i=t*o),{videos:[{x:(n-i)/2,y:(t-u)/2,width:i,height:u,orientation:e.orientation}],totalArea:i*u,efficiency:i*u/(n*t)*100}}function kn(e,n,t,o){if(e.portrait>0)return Ie(e,n,t,o);const i=[];e.landscape>0&&i.push("landscape"),e.wide>0&&i.push("wide");const u=i[0]||n[0].orientation,c=i[1]||n[1].orientation,f=D[u],y=D[c];if(e.landscape===1&&e.wide===1){const m=D.landscape,h=D.wide,a=t,l=a/m,s=a/h,x=l+s;let S,g,A;if(x<=o)S=l,g=s,A=a;else{const $=o/x;S=l*$,g=s*$,A=g*h}const C=(t-A)/2,j=Q(n,[{x:C,y:0,width:A,height:g,orientation:"wide"},{x:C,y:g,width:A,height:S,orientation:"landscape"}]),N=A*S+A*g,k=N/(t*o)*100;return{videos:j,totalArea:N,efficiency:k}}if(e.wide===2){const m=D.wide,h=t,a=h/m,l=a*2;let s;l<=o?s=a:s=o/2;const S=Q(n,[{x:0,y:0,width:h,height:s,orientation:"wide"},{x:0,y:s,width:h,height:s,orientation:"wide"}]),g=h*s*2,A=g/(t*o)*100;return{videos:S,totalArea:g,efficiency:A}}const d=[()=>{const m=t,h=m/2,a=m/2,l=h/f,s=a/y;return Math.max(l,s)<=o?{positions:[{x:0,y:(o-l)/2,width:h,height:l,orientation:u},{x:h,y:(o-s)/2,width:a,height:s,orientation:c}],totalArea:h*l+a*s}:null},()=>{const m=o,h=m/2,a=m/2,l=h*f,s=a*y;return Math.max(l,s)<=t?{positions:[{x:(t-l)/2,y:0,width:l,height:h,orientation:u},{x:(t-s)/2,y:h,width:s,height:a,orientation:c}],totalArea:l*h+s*a}:null}];let p=null,w=0;for(const m of d){const h=m();h&&h.totalArea>w&&(w=h.totalArea,p=h)}if(!p){const m=t/2,h=t/2,a=Math.min(m/f,o),l=Math.min(h/y,o);p={positions:[{x:0,y:(o-a)/2,width:m,height:a,orientation:u},{x:m,y:(o-l)/2,width:h,height:l,orientation:c}],totalArea:m*a+h*l}}const E=Q(n,p.positions),b=p.totalArea/(t*o)*100;return{videos:E,totalArea:p.totalArea,efficiency:b}}function Ie(e,n,t,o){const i=e.portrait,u=n.length-i;if((i===3||i===4)&&u===0){const b=D.portrait,m=t/i,h=m/b,a=h<o?(o-h)/2:0,l=Math.min(h,o),s=[];let x=0;for(let A=0;A<i;A++){const C=Math.min(m,l*b);s.push({x:A*m+(m-C)/2,y:a,width:C,height:l,orientation:"portrait"}),x+=C*l}const S=Q(n,s),g=x/(t*o)*100;return{videos:S,totalArea:x,efficiency:g}}n.filter(b=>b.orientation==="portrait");const c=n.filter(b=>b.orientation!=="portrait"),f=i>0?Math.min(t*.4,t*.5):0,y=t-f,d=[];let p=0;if(i===2&&u===0){const b=D.portrait,m=t/2,h=m/b,a=o;let l,s;h<=a?(s=h,l=m):(s=a,l=a*b);const x=(o-s)/2;d.push({x:(m-l)/2,y:x,width:l,height:s,orientation:"portrait"}),d.push({x:m+(m-l)/2,y:x,width:l,height:s,orientation:"portrait"}),p=l*s*2}else if(i===1&&u===1){const b=D.portrait,m=c[0],h=D[m.orientation],a=b+h,l=t*(b/a),s=t*(h/a),x=l/b,S=s/h,g=Math.min(o,Math.min(x,S)),A=(o-g)/2;d.push({x:0,y:A,width:l,height:g,orientation:"portrait"}),d.push({x:l,y:A,width:s,height:g,orientation:m.orientation}),p=l*g+s*g}else if(i===1&&u===2&&e.landscape===1&&e.wide===1){const b=D.portrait,m=D.wide,h=D.landscape,a=o,l=o*b,s=o/(1/m+1/h),x=s/m,S=s/h,g=l+s;if(Math.abs(g-t)<.1)d.push({x:0,y:0,width:l,height:a,orientation:"portrait"}),p+=l*a,c.find(j=>j.orientation==="wide")&&(d.push({x:0+l,y:0,width:s,height:x,orientation:"wide"}),p+=s*x),c.find(j=>j.orientation==="landscape")&&(d.push({x:0+l,y:x,width:s,height:S,orientation:"landscape"}),p+=s*S);else{const A=t/g,C=l*A,L=C/b,j=s*A,N=o/L;let k=C*N,$=o,v=j*N,M=v/m,W=v/h,B=k+v;if(B>t){const q=t/B;k=k*q,$=k/b,v=v*q,M=v/m,W=v/h,B=k+v,B>t&&(v=t-k,M=v/m,W=v/h)}const H=k+v;if(H>t){const q=t/H;k=k*q,$=k/b,v=v*q,M=v/m,W=v/h}const F=0;d.push({x:F,y:0,width:k,height:$,orientation:"portrait"}),p+=k*$,c.find(q=>q.orientation==="wide")&&(d.push({x:F+k,y:0,width:v,height:M,orientation:"wide"}),p+=v*M),c.find(q=>q.orientation==="landscape")&&(d.push({x:F+k,y:M,width:v,height:W,orientation:"landscape"}),p+=v*W)}}else if(i===1&&u===3){const b=D.portrait,m=o,h=m*b,a=h,l=t-a;d.push({x:0,y:0,width:h,height:m,orientation:"portrait"}),p+=h*m;const s=o/3;for(let x=0;x<c.length;x++){const S=c[x],g=D[S.orientation],A=s,C=l;let L,j;C/g<=A?(L=C,j=L/g):(j=A,L=j*g);const N=x*s+(s-j)/2;d.push({x:a+(l-L)/2,y:N,width:L,height:j,orientation:S.orientation}),p+=L*j}}else if(i===2&&u===1){const b=D.portrait,m=c[0],h=D[m.orientation],a=o/2,l=a*b,s=t-l,x=o*h;let S,g;x<=s?(g=o,S=g*h):(S=s,g=S/h);const A=l,C=a,L=(o-g)/2,j=(o/2-C)/2,N=o/2+(o/2-C)/2;d.push({x:0,y:L,width:S,height:g,orientation:m.orientation}),p+=S*g,d.push({x:s,y:j,width:A,height:C,orientation:"portrait"}),p+=A*C,d.push({x:s,y:N,width:A,height:C,orientation:"portrait"}),p+=A*C}else if(i===1&&u===2){const b=D.portrait,m=o,h=m*b,a=h,l=t-a;d.push({x:0,y:0,width:h,height:m,orientation:"portrait"}),p+=h*m;const s=o/2;for(let x=0;x<c.length;x++){const S=c[x],g=D[S.orientation],A=s,C=l;let L,j;C/g<=A?(L=C,j=L/g):(j=A,L=j*g);const N=x*s+(s-j)/2;d.push({x:a+(l-L)/2,y:N,width:L,height:j,orientation:S.orientation}),p+=L*j}}else{const b=i;if(b>0){const m=o/b,h=D.portrait;for(let a=0;a<b;a++){const l=Math.min(m,f/h),s=l*h,x=a*m+(m-l)/2;d.push({x:(f-s)/2,y:x,width:s,height:l,orientation:"portrait"}),p+=s*l}}if(c.length>0){const m=o/c.length;for(let h=0;h<c.length;h++){const a=c[h],l=D[a.orientation],s=m,x=y;let S,g;x/l<=s?(S=x,g=S/l):(g=s,S=g*l);const A=h*m+(m-g)/2;d.push({x:f+(y-S)/2,y:A,width:S,height:g,orientation:a.orientation}),p+=S*g}}}const w=Q(n,d),E=p/(t*o)*100;return{videos:w,totalArea:p,efficiency:E}}function Q(e,n){const t=new Array(n.length),o=new Set,i=new Set;for(let f=0;f<n.length;f++){const y=n[f];for(let d=0;d<e.length;d++)if(!o.has(d)&&e[d].orientation===y.orientation){t[f]={...y,orientation:e[d].orientation},o.add(d),i.add(f);break}}const u=[];for(let f=0;f<n.length;f++)i.has(f)||u.push(f);let c=0;for(let f=0;f<e.length;f++)if(!o.has(f)&&c<u.length){const y=u[c];t[y]={...n[y],orientation:e[f].orientation},c++}return t}function vn(e,n,t,o){if(e.portrait>0)return Ie(e,n,t,o);if(e.landscape===2&&e.wide===1){const a=D.landscape,l=D.wide,s=t,x=s/l,S=o-x,g=t/2,A=g/a;let C,L,j,N;if(x<=o&&A<=S)C=s,L=x,j=g,N=A;else{const H=o/(x+A),F=Math.min(1,H);L=x*F,C=L*l,N=A*F,j=N*a}const k=(t-C)/2,$=L+(S-N)/2,M=Q(n,[{x:k,y:0,width:C,height:L,orientation:"wide"},{x:0,y:$,width:j,height:N,orientation:"landscape"},{x:j,y:$,width:j,height:N,orientation:"landscape"}]),W=C*L+j*N*2,B=W/(t*o)*100;return{videos:M,totalArea:W,efficiency:B}}if(e.landscape===1&&e.wide===2){const a=D.landscape,l=D.wide,s=t/2,x=s/l,g=o-x,A=g*a;let C,L,j,N;if(x<=o&&A<=t&&x+g<=o)C=s,L=x,j=A,N=g;else{const F=x+g,P=o/F;C=s,L=x*P,N=g*P,j=N*a}const k=0,$=t/2,v=(t-j)/2,W=Q(n,[{x:k,y:0,width:C,height:L,orientation:"wide"},{x:$,y:0,width:C,height:L,orientation:"wide"},{x:v,y:L,width:j,height:N,orientation:"landscape"}]),B=C*L*2+j*N,H=B/(t*o)*100;return{videos:W,totalArea:B,efficiency:H}}if(e.wide===3){const a=D.wide,l=t/2,s=l/a,S=o-s,g=S*a;let A,C,L,j;if(s<=o&&g<=t&&s+S<=o)A=l,C=s,L=g,j=S;else{const H=s+S,F=o/H;A=l,C=s*F,j=S*F,L=j*a,L>t&&(L=t,j=L/a)}const N=0,k=t/2,$=(t-L)/2,M=Q(n,[{x:N,y:0,width:A,height:C,orientation:"wide"},{x:k,y:0,width:A,height:C,orientation:"wide"},{x:$,y:C,width:L,height:j,orientation:"wide"}]),W=A*C*2+L*j,B=W/(t*o)*100;return{videos:M,totalArea:W,efficiency:B}}if(e.landscape===3){const a=D.landscape,l=t/(a*1.5),s=Math.min(o,l),x=s/2,S=s,g=x*a,A=S*a,C=(o-s)/2,L=[{x:0,y:C,width:g,height:x,orientation:"landscape"},{x:0,y:C+x,width:g,height:x,orientation:"landscape"},{x:g,y:C,width:A,height:S,orientation:"landscape"}],j=Q(n,L),N=g*s+A*s,k=N/(t*o)*100;return{videos:j,totalArea:N,efficiency:k}}const i=[];if(e.landscape>0)for(let a=0;a<e.landscape;a++)i.push("landscape");if(e.wide>0)for(let a=0;a<e.wide;a++)i.push("wide");const u=i[0]||n[0].orientation,c=i[1]||n[1].orientation,f=i[2]||n[2].orientation,y=D[u],d=D[c],p=D[f],w=[()=>{const a=t*.6,l=t*.4,s=a/y,x=l/d,S=l/p,g=x+S;return s<=o&&g<=o?{positions:[{x:0,y:(o-s)/2,width:a,height:s,orientation:u},{x:a,y:0,width:l,height:x,orientation:c},{x:a,y:x,width:l,height:S,orientation:f}],totalArea:a*s+l*x+l*S}:null},()=>{const a=o*.5,l=o*.5,s=a*y,x=a*d,S=l*p;return s+x<=t&&S<=t?{positions:[{x:0,y:0,width:s,height:a,orientation:u},{x:s,y:0,width:x,height:a,orientation:c},{x:(t-S)/2,y:a,width:S,height:l,orientation:f}],totalArea:s*a+x*a+S*l}:null},()=>{const a=t/3,l=a/y,s=a/d,x=a/p;return Math.max(l,s,x)<=o?{positions:[{x:0,y:(o-l)/2,width:a,height:l,orientation:u},{x:a,y:(o-s)/2,width:a,height:s,orientation:c},{x:a*2,y:(o-x)/2,width:a,height:x,orientation:f}],totalArea:a*l+a*s+a*x}:null}];let E=null,b=0;for(const a of w){const l=a();l&&l.totalArea>b&&(b=l.totalArea,E=l)}if(!E){const a=t/3,l=Math.min(a/y,o),s=Math.min(a/d,o),x=Math.min(a/p,o);E={positions:[{x:0,y:(o-l)/2,width:a,height:l,orientation:u},{x:a,y:(o-s)/2,width:a,height:s,orientation:c},{x:a*2,y:(o-x)/2,width:a,height:x,orientation:f}],totalArea:a*l+a*s+a*x}}const m=Q(n,E.positions),h=E.totalArea/(t*o)*100;return{videos:m,totalArea:E.totalArea,efficiency:h}}function On(e,n,t,o){if(e.portrait>0)return Ie(e,n,t,o);const i=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)i.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)i.push("wide");const u=i[0]||n[0].orientation,c=i[1]||n[1].orientation,f=i[2]||n[2].orientation,y=i[3]||n[3].orientation,d=D[u],p=D[c],w=D[f],E=D[y],b=[()=>{const s=t/2,x=o/2,S=Math.min(s,x*d),g=S/d,A=Math.min(s,x*p),C=A/p,L=Math.min(s,x*w),j=L/w,N=Math.min(s,x*E),k=N/E;return{positions:[{x:(s-S)/2,y:(x-g)/2,width:S,height:g,orientation:u},{x:s+(s-A)/2,y:(x-C)/2,width:A,height:C,orientation:c},{x:(s-L)/2,y:x+(x-j)/2,width:L,height:j,orientation:f},{x:s+(s-N)/2,y:x+(x-k)/2,width:N,height:k,orientation:y}],totalArea:S*g+A*C+L*j+N*k}},()=>{const s=t*.6,x=t*.4,S=s/d,g=o/3,A=Math.min(x,g*p),C=A/p,L=Math.min(x,g*w),j=L/w,N=Math.min(x,g*E),k=N/E;return S<=o?{positions:[{x:0,y:(o-S)/2,width:s,height:S,orientation:u},{x:s,y:0,width:A,height:C,orientation:c},{x:s,y:g,width:L,height:j,orientation:f},{x:s,y:g*2,width:N,height:k,orientation:y}],totalArea:s*S+A*C+L*j+N*k}:null},()=>{const s=t/4,x=s/d,S=s/p,g=s/w,A=s/E;return Math.max(x,S,g,A)<=o?{positions:[{x:0,y:(o-x)/2,width:s,height:x,orientation:u},{x:s,y:(o-S)/2,width:s,height:S,orientation:c},{x:s*2,y:(o-g)/2,width:s,height:g,orientation:f},{x:s*3,y:(o-A)/2,width:s,height:A,orientation:y}],totalArea:s*x+s*S+s*g+s*A}:null}];let m=null,h=0;for(const s of b){const x=s();x&&x.totalArea>h&&(h=x.totalArea,m=x)}if(!m){const s=t/2,x=o/2,S=Math.min(x,s/d),g=Math.min(x,s/p),A=Math.min(x,s/w),C=Math.min(x,s/E);m={positions:[{x:(s-s)/2,y:(x-S)/2,width:s,height:S,orientation:u},{x:s+(s-s)/2,y:(x-g)/2,width:s,height:g,orientation:c},{x:(s-s)/2,y:x+(x-A)/2,width:s,height:A,orientation:f},{x:s+(s-s)/2,y:x+(x-C)/2,width:s,height:C,orientation:y}],totalArea:s*S+s*g+s*A+s*C}}const a=Q(n,m.positions),l=m.totalArea/(t*o)*100;return{videos:a,totalArea:m.totalArea,efficiency:l}}const Dn=e=>{const n=G();n.HASS_HOST;const[t,o]=T.useState({}),[i,u]=T.useState(!0),[c,f]=T.useState(null);T.useEffect(()=>{if(!e||e.length===0){u(!1);return}let p=!0;async function w(){u(!0),setError(null);try{const E=e.map(async m=>{try{const h=V(`/api/states/${m}`,n),l=(await I(h)).data?.attributes?.access_token||null;return{entityId:m,accessToken:l}}catch(h){return _.error(`Failed to fetch access token for ${m}:`,h),{entityId:m,accessToken:null}}}),b=await Promise.all(E);if(p){const m={};b.forEach(({entityId:h,accessToken:a})=>{a&&(m[h]=a)}),o(m),u(!1)}}catch(E){p&&(_.error("Failed to fetch camera access tokens:",E),f(K(E)),u(!1))}}return w(),()=>{p=!1}},[e?.length,e?.join(",")]),T.useEffect(()=>{if(!e||e.length===0)return;let p=!0,w=null;async function E(){if(p)try{const b=e.map(async h=>{try{const a=V(`/api/states/${h}`,n),s=(await I(a)).data?.attributes?.access_token||null;return{entityId:h,accessToken:s}}catch(a){return _.debug(`Failed to refresh access token for ${h}:`,a),null}}),m=await Promise.all(b);p&&o(h=>{const a={...h};return m.forEach(l=>{l&&l.accessToken&&(a[l.entityId]=l.accessToken)}),a})}catch{}}return w=setInterval(E,300*1e3),()=>{p=!1,w&&clearInterval(w)}},[e?.length,e?.join(",")]);const{error:y}=de({enabled:!!(e&&e.length>0),checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3,logPrefix:"camera tokens",onReady:async p=>{const w=[];for(const E of e){const b=h=>{const l=h.variables.trigger.to_state?.attributes?.access_token||null;o(s=>l?{...s,[E]:l}:s)},m=await p.subscribeMessage(b,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:E}});w.push(m)}return _.debug(`Subscribed to camera entity state changes: ${e.join(", ")}`),w},dependencies:[e?.length,e?.join(",")]});return[t,i,c||y||null]},In=(e,n=null,t=null)=>{if(!e)return null;let o=t||"";if(!o&&!isDevelopment&&typeof window<"u"&&window.location){const u=window.location.protocol,c=window.location.hostname,f=window.location.port?`:${window.location.port}`:"";o=`${u}//${c}${f}`}if(!o)return _.warn("HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL"),null;const i=`${o}/api/camera_proxy_stream/${e}`;return n?`${i}?token=${encodeURIComponent(n)}`:i},He=45e3,$n=O.div`
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
`,Mn=()=>{const e=G(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[];if(!n)return null;const[o,i]=T.useState(!1),[u]=jn(),[c,f]=T.useState(void 0),[y,d]=T.useState(100),[p,w]=T.useState("0"),E=T.useMemo(()=>t.map(l=>l.entity_id).filter(Boolean),[t]),[b]=Dn(E);T.useEffect(()=>{if(u==="off"&&o){const l=window.setTimeout(()=>{i(!1),f(void 0)},He);return f(l),w(He+"ms"),d(0),()=>{l&&window.clearTimeout(l)}}else u==="on"&&(w(0),d(100),i(!0))},[u,o]),T.useEffect(()=>{u==="on"&&c!==void 0&&(window.clearTimeout(c),w(0),d(100),f(void 0))},[c,u]);const[m,h]=T.useState(null),a=()=>{m===null?h("confirm"):m==="confirm"&&(h("opening"),Ln(e),setTimeout(()=>h(null),2e3))};return T.useEffect(()=>{if(m==="confirm"){const l=setTimeout(()=>{h(null)},3e3);return()=>{clearTimeout(l)}}},[m]),T.useEffect(()=>{o||h(null)},[o]),r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>i(l=>!l),children:"CCTV"}),r.jsx(le,{visible:o,onClick:a,onClose:()=>{i(!1),h(null)},fullsize:!0,children:r.jsxs($n,{onClick:a,children:[r.jsx(pt,{completed:y,height:10,bgColor:c===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:p,transitionTimingFunction:"linear"}),r.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const l=t.map(C=>({orientation:C.orientation||"landscape"})),s=window.innerWidth,x=window.innerHeight-10,S=ut(l,s,x),g={portrait:t.filter(C=>(C.orientation||"landscape")==="portrait"),landscape:t.filter(C=>(C.orientation||"landscape")==="landscape"),wide:t.filter(C=>C.orientation==="wide")},A={portrait:0,landscape:0,wide:0};return S.videos.map((C,L)=>{const j=C.orientation,N=A[j],k=g[j][N];if(!k)return null;A[j]++;const $=b[k.entity_id]||null,v=In(k.entity_id,$,e.HASS_HOST);return v?r.jsxs("div",{className:"video-container",style:{left:`${C.x}px`,top:`${C.y}px`,width:`${C.width}px`,height:`${C.height}px`},children:[r.jsx("img",{src:v,className:j,alt:"Camera stream",crossOrigin:"anonymous"},`${k.entity_id}-${L}`),r.jsx("div",{className:"video-overlay",onClick:()=>a()})]},`${j}-${N}-${L}`):null})})()}),m==="confirm"&&r.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),m==="opening"&&r.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},Pn=O.div`
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

`,Wn=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>r.jsxs(Pn,{children:[r.jsxs("div",{className:"buttons",children:[r.jsx(z,{path:It,size:"32px",color:"#ffffff",onClick:n}),r.jsx(z,{path:$t,size:"32px",color:"#ffffff",onClick:e}),r.jsx("button",{onClick:t,children:"Today"}),r.jsx(Mn,{})]}),r.jsx(yn,{}),r.jsx(z,{path:Mt,size:"32px",color:"#ffffff",className:Y("indicator")})]}),Bn=R.memo(Wn),Vn=6e4,$e=(e=Vn,n=void 0)=>{const[t,o]=T.useState(!0);return T.useEffect(()=>{const i=setInterval(()=>{o(u=>!u)},e);return()=>{clearInterval(i)}},[e,n]),t},Gn={mdiDelete:Wt,mdiCake:Pt},Hn=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Gn[n]||void 0},Un=(e,n,t,o,i,u)=>I(i(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:1e4,signal:u}).then(c=>{!c.data||!Array.isArray(c.data)||c.data.forEach(f=>{const y="dateTime"in f.start?U.fromISO(f.start.dateTime):U.fromSQL(f.start.date);let d;"dateTime"in f.end?d=Math.floor(U.fromISO(f.end.dateTime).diff(n,"days").as("days")):d=Math.floor(U.fromSQL(f.end.date).diff(n,"days").as("days"))-1;const p=Math.floor(y.diff(n,"days").as("days"));d>=o.length&&(d=o.length-1);const w="dateTime"in f.start?"events":"allDay";if(p>=0&&p<o.length)for(let E=p;E<=d;E++)o[E][w]=[...o[E][w],{...f,icon:e.icon}]})}).catch(c=>{if(!(I.isCancel(c)||c.name==="AbortError"||c.code==="ERR_CANCELED"))throw c}),Ue=new Map,Fn=300*1e3,Yn=e=>e.toISODate(),zn=(e,n,t,o,i,u,c,f,y)=>{const d=[0,1,2,3,4,5].map(m=>e.plus({days:m}).startOf("day"));d[6]=e.plus({days:6}).endOf("day");const p=Yn(e),w=Ue.get(p);if(w&&Date.now()-w.timestamp<Fn){y.current&&t(w.data);return}const E=d.map(m=>({date:m,allDay:[],events:[]}));if(!c||c.length===0){y.current&&(t(E),o(!1));return}const b=new AbortController;i.current&&i.current.abort(),i.current=b;try{y.current&&o(!0);const m=c.map(h=>Un(h,d[0],d[6],E,f,b.signal));Promise.all(m).then(()=>{y.current&&!b.signal.aborted&&(Ue.set(p,{data:E,timestamp:Date.now()}),t(E),u(!1))}).catch(h=>{y.current&&!b.signal.aborted&&u(K(h))}).finally(()=>{y.current&&!b.signal.aborted&&o(!1)})}catch(m){y.current&&!b.signal.aborted&&(u(K(m)),o(!1))}},Fe=[],Kn=e=>{const n=G(),t=n.CALENDARS||[],o=T.useMemo(()=>t.map(a=>({name:a.name,icon:Hn(a.icon)})),[t]),i=T.useCallback(a=>V(`/api/calendars/${a}`,n),[n]),u=T.useCallback((a,l)=>`${i(a)}?${en.stringify(l)}`,[i]),[c,f]=T.useState(Fe),[y,d]=T.useState(!1),[p,w]=T.useState(!1),[E,b]=T.useState(null),m=R.useRef(null),h=R.useRef(!0);return $e(6e4,"Calendar"),T.useEffect(()=>(h.current=!0,e!==void 0&&((E===null||!E.equals(e))&&(f(Fe),b(e)),zn(e,c,f,d,m,w,o,u,h)),()=>{h.current=!1,m.current&&m.current.abort()}),[e,o]),[c,p]};function ce(e){const[n,t]=T.useState(!1);function o({key:u}){u===e&&t(!0)}const i=({key:u})=>{u===e&&t(!1)};return T.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",i),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}),[e]),n}const qn=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return U.fromJSDate(o)},Xn=e=>{const n=()=>e(f=>f.plus({days:7})),t=ce("ArrowRight");T.useEffect(()=>{t&&n()},[t]);const o=()=>e(f=>f.minus({days:7})),i=ce("ArrowLeft");T.useEffect(()=>{i&&o()},[i]);const u=()=>e(qn()),c=ce("t");return T.useEffect(()=>{c&&u()},[c]),{nextWeek:n,previousWeek:o,startWeekWithToday:u}},Jn=e=>{const[n,t]=R.useState(0),[o,i]=R.useState(0),u=50;return{onTouchStart:d=>{i(0),t(d.targetTouches[0].clientX)},onTouchMove:d=>i(d.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const d=n-o,p=d>u,w=d<-u;p&&e.onSwipedLeft(),w&&e.onSwipedRight()}}},Ye=e=>U.fromISO(e).toLocaleString(U.TIME_24_SIMPLE),Ce=e=>e.toFormat("c")>=6,Re=e=>e.hasSame(U.now(),"day"),Qn=O.div`
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
`,Zn=()=>{const[e,n]=T.useState(void 0),[t,o]=Kn(e),{nextWeek:i,previousWeek:u,startWeekWithToday:c}=Xn(n);T.useEffect(()=>{c()},[]);const f=Jn({onSwipedLeft:()=>i(),onSwipedRight:()=>u()}),y=R.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),d=R.useMemo(()=>t.slice(0,7),[t]);return r.jsxs(Qn,{...f,children:[r.jsx(Bn,{nextWeek:i,previousWeek:u,startWeekWithToday:c}),r.jsxs("div",{className:"schedule",children:[d.map((p,w)=>r.jsx("div",{className:Y({weekend:Ce(p.date),today:Re(p.date)},"caption"),children:r.jsx("h2",{children:p.date.toLocaleString(y)})},w)),d.map((p,w)=>r.jsx("div",{className:Y("allDayRow",{weekend:Ce(p.date),today:Re(p.date)}),children:p.allDay.map((E,b)=>r.jsx("div",{className:"allDayEvent",children:E.summary},b))},w)),d.map((p,w)=>r.jsx("div",{className:Y("eventRow",{weekend:Ce(p.date),today:Re(p.date)}),children:p.events.map((E,b)=>r.jsxs("div",{className:"event",children:[r.jsx("div",{children:E.summary}),r.jsxs("h3",{children:[E.icon&&r.jsx(z,{path:E.icon,size:"1rem",color:"#ffffff"}),Ye(E.start.dateTime)," - ",Ye(E.end.dateTime)]})]},b))},w))]}),t.length===0&&r.jsx("div",{className:"loading",children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsx(nt,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&r.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:r.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},ye={"clear-day":{icon:Tt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:St,label:"Klar",color:"#eeeef5"},rain:{icon:At,label:"Regen",color:"#80a5d6"},snow:{icon:bt,label:"Schnee",color:"#8c82ce"},sleet:{icon:yt,label:"Graupel",color:"#aba4db"},wind:{icon:Et,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:wt,label:"Neblig",color:"#d5dae2"},cloudy:{icon:xt,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:mt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:gt,label:"Teils bewölkt",color:"#d5dae2"}},eo=e=>{const[n,t]=T.useState([]),[o,i]=T.useState(!1),u=$e(6e4*10,"Weather"),c=G(),f=c.ENABLE_WEATHER||!1,y=c.WEATHER_API_KEY||"",d=c.WEATHER_LATITUDE,p=c.WEATHER_LONGITUDE,w=f&&y&&d&&p,E=()=>`./forecast/${y}/${d},${p}?&units=si&exclude=minutely`;return T.useEffect(()=>{if(!w)return;let b=!0;const m=new AbortController;return I(E(),{signal:m.signal}).then(h=>{b&&(t(h.data),i(!1))}).catch(h=>{b&&!m.signal.aborted&&i(K(h))}).finally(()=>{b&&e&&e(!1)}),()=>{b=!1,m.abort()}},[u,e,w,f,y,d,p]),[n,o]},to=Rt(jt),ze=O.div`

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
`,Ke=R.memo(({data:e,daily:n=!1})=>r.jsxs("div",{children:[r.jsxs("div",{children:[!n&&U.fromSeconds(e.time).toLocaleString(U.TIME_24_SIMPLE),n&&U.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),r.jsx("div",{children:r.jsx(ve,{icon:e.icon})}),r.jsx("div",{children:r.jsxs("strong",{children:[!n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&r.jsxs(r.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),r.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),r.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),no=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:ye[n.icon]?.color||"#ffffff",text:ye[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),ve=({icon:e})=>{const n=ye[e];return r.jsx(n.icon,{size:60,color:"#ffffff"})},oo=()=>{if(!(G().ENABLE_WEATHER||!1))return null;const[t,o]=eo(),[i,u]=T.useState(!1),c=ce("w"),f=T.useRef(),y=R.useCallback(()=>u(b=>!b),[]),d=R.useCallback(()=>u(!0),[]),p=R.useMemo(()=>no(t),[t]),w=R.useMemo(()=>[3,6,9,12],[]),E=R.useMemo(()=>[1,2,3,4,5,6,7],[]);return T.useEffect(()=>{if(!i||!f.current||!t||!t.hourly||p.length===0)return;const b={timezone:"Europe/Berlin"},m=document.createElement("div");return f.current.textContent="",f.current.appendChild(m),on(m,p,b),()=>{f.current&&(f.current.textContent="")}},[i,p]),T.useEffect(()=>{c&&y()},[c]),!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?r.jsx(ze,{children:r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":r.jsxs(ze,{children:[r.jsxs("div",{onClick:d,children:[r.jsxs("div",{className:"headline",children:[r.jsx(ve,{icon:t.currently.icon}),r.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),r.jsx("div",{className:"forecast",children:w.map((b,m)=>r.jsx(Ke,{data:t.hourly.data[b]},m))})]}),r.jsx(le,{visible:i,onClick:y,children:r.jsxs("div",{className:"full-weather",children:[o!==!1&&r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),r.jsxs("div",{className:"detail-header",children:[r.jsx("div",{children:r.jsxs("div",{className:"headline",children:[r.jsx(ve,{icon:t.daily.data[0].icon}),r.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",r.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),r.jsx("h3",{children:ye[t.daily.data[0].icon].label})]}),r.jsx("div",{className:"values",children:r.jsxs("div",{className:"table",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Regen:"})," ",t.daily.data[0].precipProbability*100," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),r.jsx("h3",{children:"Die nächsten 24 Stunden"}),r.jsx("div",{ref:f}),r.jsx("h3",{children:"Die nächste Woche"}),r.jsx("div",{className:"forecast",children:E.map((b,m)=>r.jsx(Ke,{data:t.daily.data[b],daily:!0},m))}),r.jsxs("div",{className:"info",children:["Aktualisiert ",r.jsx(Ct,{date:U.fromSeconds(t.currently.time).toJSDate(),formatter:to})]})]})})]})},ro=R.memo(oo),io="AK Wandsbek",so="Hamburg",ao="Master:62016",co="STATION",lo={x:10.091341,y:53.568702},uo={name:io,city:so,id:ao,type:co,coordinate:lo},we={departureList:"departureList",checkName:"checkName"},fo=async(e,n,t,o)=>{o.GEOFOX_USER,o.GEOFOX_SECRET;const i={Accept:"application/json","Content-Type":"application/json;charset=UTF-8"};return I({method:"post",url:`/gti/public/${e}`,data:n,signal:t,headers:i})},qe=(e,n)=>e.realtimeOffset-n.realtimeOffset,ho=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(qe),to:n.filter(t=>t.directionId===6).slice(0,3).sort(qe)}},po=e=>{const n=G(),t=n.ENABLE_HVV||!1,[o,i]=T.useState([]),[u,c]=T.useState(!1),f=$e(6e4),y=t;return T.useEffect(()=>{if(!y)return;if(!(e in we)){_.warn(e,"not supported by HVV connector");return}let d=!0;const p=new AbortController;let w={version:51};switch(e){case we.checkName:w={...w,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case we.departureList:const E=U.now();w={...w,station:uo,time:{date:E.toFormat("dd.MM.yyyy"),time:E.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:w=void 0}return fo(e,w,p.signal,n).then(E=>{d&&(i(ho(E.data)),c(!1))}).catch(E=>{d&&!p.signal.aborted&&c(K(E))}),()=>{d=!1,p.abort()}},[e,f,y,t]),[o,u]},go=O.div`
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
`,Xe=R.memo(({line:e,direction:n,realtimeOffset:t})=>r.jsxs("div",{className:"departure",children:[r.jsx("div",{children:r.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),r.jsx("div",{children:t===0?"Jetzt":r.jsxs(r.Fragment,{children:["in ",t," '"]})})]})),mo=()=>{if(!(G().ENABLE_HVV||!1))return null;const[t,o]=po(we.departureList);return r.jsx(go,{children:o!==!1?r.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((i,u)=>r.jsx(Xe,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},u)),r.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((i,u)=>r.jsx(Xe,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},u))]})})},xo=R.memo(mo),wo=()=>{const e=G(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const o=e.ENTITY_CHARGING_STATE||"",i=e.ENTITY_STATE_OF_CHARGE||"",[u,c]=T.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[f,y]=T.useState(!1),d=n&&(t||o||i);T.useEffect(()=>{if(!d)return;(async()=>{const b=[];t&&b.push(I(V(`/api/states/${t}`,e)).then(a=>({type:"preclimateStatus",value:a.data.state==="on"})).catch(a=>({type:"preclimateStatus",error:K(a)}))),o&&b.push(I(V(`/api/states/${o}`,e)).then(a=>({type:"chargingState",value:a.data.state==="on"})).catch(a=>({type:"chargingState",error:K(a)}))),i&&b.push(I(V(`/api/states/${i}`,e)).then(a=>({type:"stateOfCharge",value:parseFloat(a.data.state)||0})).catch(a=>({type:"stateOfCharge",error:K(a)})));const m=await Promise.all(b);let h=!1;m.forEach(a=>{a.error?h=a.error:c(l=>({...l,[a.type]:a.value}))}),y(h||!1)})()},[d,n,t,o,i]);const{error:p}=de({enabled:d,checkBackendConnection:!1,reconnectStrategy:"exponential",maxReconnectAttempts:5,reconnectDelay:1e3,logPrefix:"EV entities",onReady:async E=>{const b=a=>{const l=a.variables.trigger.to_state.entity_id,s=a.variables.trigger.to_state.state;c(x=>{const S={...x};return l===t?S.preclimateStatus=s==="on":l===o?S.chargingState=s==="on":l===i&&(S.stateOfCharge=parseFloat(s)||0),S})},m=[];t&&m.push(t),o&&m.push(o),i&&m.push(i);const h=[];for(const a of m){const l=await E.subscribeMessage(b,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:a}});h.push(l)}return _.debug(`Subscribed to EV entity state changes: ${m.join(", ")}`),h},dependencies:[d,t,o,i]});return[u,f||p||!1]},Eo=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&I.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{_.error("Failed to start preclimate:",t)})},yo=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&I.post(V("/api/services/button/press",e),{entity_id:n}).catch(t=>{_.error("Failed to stop preclimate:",t)})},bo=O.div`
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
`,Ao=(e,n)=>n?Vt:e>=80?Gt:e>=50?Ht:e>=20?Ut:Ft,So=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",To=()=>{const e=G();if(!(e.ENABLE_EV||!1))return null;const[t,o]=wo(),{preclimateStatus:i,chargingState:u,stateOfCharge:c}=t,[f,y]=R.useState(!1),[d,p]=R.useState(null),[w,E]=R.useState(!1),[b,m]=R.useState(!1),[h,a]=R.useState(0),l=R.useRef(null),s=R.useRef(null),x=R.useRef(i),S=R.useRef(null);R.useEffect(()=>{x.current!==i&&(f&&S.current!==null&&i===(d==="start")&&(a(d==="start"?360:0),m(!0),setTimeout(()=>{y(!1),p(null),m(!1),a(0),S.current=null,E(!1)},300),l.current&&(clearTimeout(l.current),l.current=null)),x.current=i)},[i,f,d]),R.useEffect(()=>{if(!f||b){s.current&&(cancelAnimationFrame(s.current),s.current=null);return}const $=S.current||Date.now(),v=1e4,M=d==="stop",W=()=>{const B=Date.now()-$,H=Math.min(B/v,1);a(M?360*(1-H):360*H),H<1&&!b&&(s.current=requestAnimationFrame(W))};return s.current=requestAnimationFrame(W),()=>{s.current&&(cancelAnimationFrame(s.current),s.current=null)}},[f,b,d]),R.useEffect(()=>()=>{l.current&&clearTimeout(l.current),s.current&&cancelAnimationFrame(s.current)},[]);const g=R.useCallback(()=>{if(o!==!1||f)return;const $=!i,v=$?"start":"stop";y(!0),p(v),m(!1),E(!1),a(0),S.current=Date.now(),x.current=i,$?Eo(e):yo(e),l.current=setTimeout(()=>{f&&(E(!0),setTimeout(()=>{y(!1),p(null),m(!1),a(0),E(!1),S.current=null},500))},15e3)},[i,o,f]),A=Ao(c||0,u),C=So(c||0),L=Math.round(c||0),j=f?d==="start":i,N=d==="start"?"#17e146":"#f85a5a",k=d==="start"?"clockwise":"counterclockwise";return r.jsxs(bo,{className:Y({disabled:o!==!1}),children:[r.jsxs("h2",{children:["Auto",o!==!1?r.jsxs("div",{className:"battery-info",children:[r.jsx(z,{path:De,size:"1.2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs("div",{className:"battery-info",children:[r.jsxs("span",{className:"charge-percentage",children:[L,"%"]}),r.jsx(z,{path:A,size:"1.2rem",color:C})]})]}),o===!1&&r.jsxs("div",{className:"preclimate-button-wrapper",children:[f&&r.jsx("div",{className:Y("progress-ring",k,{complete:b}),style:{"--progress-color":N,"--progress-angle":`${h}deg`,"--progress-gradient":d==="stop"?`conic-gradient(from -90deg, ${N} 0deg, ${N} ${h}deg, transparent ${h}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${N} 0deg, ${N} ${h}deg, transparent ${h}deg, transparent 360deg)`}}),r.jsxs("button",{className:Y("preclimate-button",{spinning:j&&!f,shaking:w}),onClick:g,disabled:o!==!1||f,children:[r.jsx(z,{path:Bt,size:"2rem",color:j?"#ff9800":"#ffffff"}),r.jsx("span",{children:j?"Stop":"Start"})]})]})]})},Co=R.memo(To),Ro=()=>{const e=G(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",[o,i]=T.useState("closed"),[u,c]=T.useState(!1),f=n&&t,y=t?V(`/api/states/${t}`,e):null;T.useEffect(()=>{if(!f||!y)return;let w=!0;const E=new AbortController;return I(y,{signal:E.signal}).then(b=>{w&&(i(b.data.state),c(!1))}).catch(b=>{w&&!E.signal.aborted&&c(K(b))}),()=>{w=!1,E.abort()}},[f,y,n,t]);const{error:d}=de({enabled:f&&!!t,logPrefix:"garage door",onReady:async w=>{const E=m=>{i(m.variables.trigger.to_state.state)},b=await w.subscribeMessage(E,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}});return _.debug("Subscribed to garage door state changes"),b},dependencies:[f,t]});return[o,u||d||!1]},jo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);I.post(V("/api/services/cover/toggle",n),{entity_id:t}).catch(i=>{_.error("Failed to toggle garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},Lo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);I.post(V("/api/services/cover/open_cover",n),{entity_id:t}).catch(i=>{_.error("Failed to open garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},No=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);I.post(V("/api/services/cover/close_cover",n),{entity_id:t}).catch(i=>{_.error("Failed to close garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},_o=O.div`
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
`,ft=O.div`
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
`,Oe=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:Xt},open:{label:"Offen",icon:qt},closed:{label:"Geschlossen",icon:Kt},opening:{label:"Öffnet",icon:zt},closing:{label:"Schließt",icon:Yt}};return n[e]||_.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:Jt}},ko=({garageDoor:e,animate:n=!1})=>r.jsxs(ft,{className:Y({animate:n}),children:[r.jsx(z,{path:Oe(e).icon,size:"2rem",color:"#ffffff"}),r.jsx("span",{children:Oe(e).label})]}),vo=e=>Lt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return Oe(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),Oo=()=>{const e=G();if(!(e.ENABLE_GARAGE||!1))return null;const[t,o]=Ro(),[i,u]=T.useState(void 0),[c,f]=T.useState(!1),[y,d]=T.useState(!1);T.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!i){const m=new Promise(h=>{u({resolve:h})});vo(m)}}else i&&(i.resolve(t),u(void 0))},[t]);const p=ce("g");T.useEffect(()=>{p&&o===!1&&jo(f,e)},[p,o,e]);const w=R.useCallback(b=>{if(o===!1)switch(d(!1),b){case"open":Lo(f,e);break;case"close":No(f,e);break}},[f,o,e]),E=R.useCallback(()=>{o===!1&&d(!0)},[o]);return r.jsxs(_o,{className:Y({disabled:o!==!1}),children:[r.jsx("h2",{children:"Garage"}),r.jsx("div",{className:"status",onClick:E,children:o!==!1?r.jsxs(ft,{children:[r.jsx(z,{path:De,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsx(ko,{garageDoor:t,animate:c})}),r.jsx(le,{visible:y&&o===!1,onClick:()=>d(!1),children:r.jsxs("div",{className:"controls",children:[r.jsx("h2",{children:"Garagentor"}),r.jsx("div",{onClick:()=>w("open"),children:"Öffnen"}),r.jsx("div",{onClick:()=>w("close"),children:"Schließen"})]})})]})},Do=R.memo(Oo),Io=(e,n)=>e?V(`/api/states/${e}`,n):null,J={done:{label:"Fertig",animate:!1,icon:Zt},off:{label:"Aus",animate:!1,icon:Qt},standby:{label:"Standby",animate:!1,icon:Pe},running:{label:"Läuft …",animate:!0,icon:Pe}},$o={off:0,standby:2,running:16,done:256},Mo=()=>{const e=G();e.ENABLE_LAUNDRY;const n=e.LAUNDRY_MACHINES||[],o=(Array.isArray(n)?n:[]).map((w,E)=>{const[b,m]=Po(w.entity_id,e);return{state:b,error:m,name:w.name}}),[i,u]=T.useState(J.off),[c,f]=T.useState(!1),y=o.map(w=>w.state),d=o.map(w=>w.error);T.useEffect(()=>{const w=d.some(E=>E!==!1);f(w&&d.find(E=>E!==!1)||!1)},[d]),T.useEffect(()=>{const w=y.reduce((E,b)=>E+($o[b]||0),0);w===0?u(J.off):w<16?u(J.standby):w<256?u(J.running):w%256===0?u(J.done):w%256%16===0?u(J.running):w%256%2===0?u(J.done):u(J.running)},[y]);const p=o.map(w=>({label:w.name,state:w.state}));return[i,p,c]},Po=(e,n)=>{const[t,o]=T.useState("off"),[i,u]=T.useState(!1),f=(n.ENABLE_LAUNDRY||!1)&&e,y=Io(e,n);T.useEffect(()=>{if(!f||!y)return;let w=!0;const E=new AbortController;return I(y,{signal:E.signal}).then(b=>{w&&(o(b.data.state),u(!1))}).catch(b=>{w&&!E.signal.aborted&&u(K(b))}),()=>{w=!1,E.abort()}},[e,f,y]);const{error:d}=de({enabled:f&&!!e,logPrefix:e,onReady:async w=>{const E=m=>{o(m.variables.trigger.to_state.state)},b=await w.subscribeMessage(E,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}});return _.debug(`Subscribed to ${e} state changes`),b},dependencies:[e,f]});return[t,i||d||!1]},Wo=O.div`
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
`,Bo=()=>{if(!(G().ENABLE_LAUNDRY||!1))return null;const[t,o,i]=Mo(),[u,c]=T.useState(!1),f=R.useCallback(()=>{i===!1&&c(!0)},[i]),y=R.useCallback(()=>c(!1),[]);return r.jsxs(Wo,{className:Y({disabled:i!==!1}),children:[r.jsx("h2",{children:"Wäsche"}),r.jsx("div",{className:"status",onClick:f,children:i!==!1?r.jsxs(r.Fragment,{children:[r.jsx(z,{path:De,size:"2rem",color:"#f85a5a"}),r.jsx("span",{children:"Fehler"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:Y({animate:t.animate}),children:r.jsx(z,{path:t.icon,size:"2rem",color:"#ffffff"})}),r.jsx("span",{children:t.label})]})}),r.jsx(le,{visible:u&&i===!1,onClick:y,children:r.jsxs("div",{className:"states",children:[r.jsx("h2",{children:"Wäsche"}),o.map((d,p)=>r.jsxs("div",{children:[r.jsx("div",{className:"subtitle",children:d.label}),r.jsx("div",{className:Y({animate:J[d.state].animate}),children:r.jsx(z,{path:J[d.state].icon,size:2})}),r.jsx("div",{children:J[d.state].label})]},p))]})})]})},Vo=R.memo(Bo),Go=O.div`
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
`,Ho=()=>r.jsxs(Go,{children:[r.jsxs("div",{className:"top-content",children:[r.jsx(ro,{}),r.jsx(xo,{}),r.jsx(Co,{})]}),r.jsxs("div",{className:"two-cols",children:[r.jsx(Do,{}),r.jsx(Vo,{})]})]}),Uo=R.memo(Ho),Je=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],Fo=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],Ee={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},Yo={landscape:"L",portrait:"P",wide:"W"},zo=O.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Ko=O.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,qo=O.div`
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
`,Qe=O.select`
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
`,Ze=O.input`
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
`,Xo=O.button`
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
`,et=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Jo=O.button`
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
`,Qo=O.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Zo=O.div`
  position: absolute;
  background-color: ${e=>Ee[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,er=O.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,tr=O.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,nr=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,he=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pe=O.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ge=O.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,or=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,rr=O.h3`
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
`;const je=O.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?Ee[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?Ee[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?Ee[e.orientation]:"#4a4a4a"};
  }
`,tt=()=>{const[e,n]=R.useState(1920),[t,o]=R.useState(1080),[i,u]=R.useState("Full HD"),[c,f]=R.useState(""),[y,d]=R.useState(""),[p,w]=R.useState([{orientation:"landscape"}]),[E,b]=R.useState(null),m=R.useMemo(()=>ut(p,e,t),[p,e,t]),h=g=>{const A=Je.find(C=>C.name===g);A&&A.width&&A.height?(n(A.width),o(A.height),u(g),f(""),d("")):g==="Custom"&&u("Custom")},a=()=>{const g=parseInt(c),A=parseInt(y);g>0&&A>0&&(n(g),o(A))},l=g=>{w(g.videos),b(g.name)},s=g=>{const A=[];for(let C=0;C<g;C++)A.push(p[C]||{orientation:"landscape"});w(A),b(null)},x=(g,A)=>{const C=[...p];C[g]={orientation:A},w(C),b(null)},S=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return r.jsxs(zo,{children:[r.jsx(Ko,{children:"Video Tiling Algorithm Demo"}),r.jsxs(qo,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:"Screen Size Preset"}),r.jsx(Qe,{value:i,onChange:g=>h(g.target.value),children:Je.map(g=>r.jsx("option",{value:g.name,children:g.name},g.name))})]}),i==="Custom"&&r.jsxs(r.Fragment,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:"Custom Width"}),r.jsx(Ze,{type:"number",value:c,onChange:g=>f(g.target.value),placeholder:"Width",min:"100"})]}),r.jsxs(ee,{children:[r.jsx(te,{children:"Custom Height"}),r.jsx(Ze,{type:"number",value:y,onChange:g=>d(g.target.value),placeholder:"Height",min:"100"})]}),r.jsxs(ee,{children:[r.jsx(te,{children:" "}),r.jsx(Xo,{onClick:a,children:"Apply Custom Size"})]})]}),r.jsxs(ee,{children:[r.jsx(te,{children:"Number of Videos"}),r.jsxs(Qe,{value:p.length,onChange:g=>s(parseInt(g.target.value)),children:[r.jsx("option",{value:"1",children:"1 Video"}),r.jsx("option",{value:"2",children:"2 Videos"}),r.jsx("option",{value:"3",children:"3 Videos"}),r.jsx("option",{value:"4",children:"4 Videos"})]})]}),p.map((g,A)=>r.jsxs(ee,{children:[r.jsxs(te,{children:["Video ",A+1," Orientation"]}),r.jsxs(et,{children:[r.jsx(je,{active:g.orientation==="landscape",orientation:"landscape",onClick:()=>x(A,"landscape"),children:"Landscape"}),r.jsx(je,{active:g.orientation==="portrait",orientation:"portrait",onClick:()=>x(A,"portrait"),children:"Portrait"}),r.jsx(je,{active:g.orientation==="wide",orientation:"wide",onClick:()=>x(A,"wide"),children:"Wide"})]})]},A))]}),r.jsxs(or,{children:[r.jsx(rr,{children:"Test Scenarios"}),r.jsx(et,{children:Fo.map(g=>r.jsx(Jo,{active:E===g.name,onClick:()=>l(g),children:g.name},g.name))})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:r.jsx(Qo,{style:{width:`${e*S}px`,height:`${t*S}px`},children:m.videos.map((g,A)=>r.jsxs(Zo,{orientation:g.orientation,style:{left:`${g.x*S}px`,top:`${g.y*S}px`,width:`${g.width*S}px`,height:`${g.height*S}px`},children:[r.jsxs(er,{children:[Yo[g.orientation]," ",A+1]}),r.jsxs(tr,{children:[Math.round(g.width)," × ",Math.round(g.height)]})]},A))})}),r.jsxs(nr,{children:[r.jsxs(he,{children:[r.jsx(pe,{children:"Canvas Size"}),r.jsxs(ge,{children:[e," × ",t]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Total Area Used"}),r.jsxs(ge,{children:[Math.round(m.totalArea).toLocaleString()," px²"]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Efficiency"}),r.jsxs(ge,{children:[m.efficiency.toFixed(2),"%"]})]}),r.jsxs(he,{children:[r.jsx(pe,{children:"Display Scale"}),r.jsxs(ge,{children:[(S*100).toFixed(1),"%"]})]})]})]})},ir=()=>{function e(t,o){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(o))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[u,c]=o.split(":").map(Number),f=new Date;let y=new Date(f.getFullYear(),f.getMonth(),f.getDate());y.setHours(u,c,0,0),y<=f&&y.setDate(y.getDate()+1);const d=y.getTime()-f.getTime();return _.log("Reloading page at",o,"in",Math.floor(d/1e3/60),"minutes"),setTimeout(t,d)}const n=()=>{_.log("Timeout reached! "),window.location.reload(!0)};T.useLayoutEffect(()=>{const t=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{t.forEach(o=>{o&&clearTimeout(o)})}},[])},sr=O.div`
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
`;class be extends T.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",i=n?.stack||"",u=t?.componentStack||"";_.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:i,componentStack:u})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?r.jsxs(sr,{children:[r.jsx("h2",{children:"Something went wrong"}),r.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,r.jsxs("div",{children:[r.jsx("button",{onClick:this.handleReset,children:"Try Again"}),r.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Le="hass-family-calendar-config-banner-dismissed",ar=O.div`
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
`,cr=()=>{const e=it(),n=st(),t=at(),o=rt(),[i,u]=R.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return localStorage.getItem(Le)==="true"}catch{}return!1}),[c,f]=R.useState(!1);if(R.useEffect(()=>{if(e&&i){u(!1);try{typeof window<"u"&&window.localStorage&&localStorage.removeItem(Le)}catch{}}},[e,i]),o||i||!e&&!n)return null;const y=async()=>{f(!0);try{await t()}catch{}finally{f(!1)}},d=()=>{u(!0);try{typeof window<"u"&&window.localStorage&&localStorage.setItem(Le,"true")}catch{}};let p="warning",w="";return e&&n?(p="warning",w=`Using cached configuration. Failed to load from server: ${e}`):e&&!n?(p="error",w=`Failed to load configuration: ${e}`):n&&(p="warning",w="Using cached configuration. Some features may be outdated."),r.jsxs(ar,{severity:p,children:[r.jsx("div",{className:"message",children:w}),r.jsxs("div",{className:"actions",children:[e&&r.jsx("button",{onClick:y,disabled:c,children:c?"Retrying...":"Retry"}),r.jsx("button",{className:"dismiss",onClick:d,title:"Dismiss",children:"×"})]})]})},lr=Nt`
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
`,dr=O.div`
  padding: 0 12px;
  min-width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: ${e=>e.hasBanner?"48px":"0"};
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
`;function ur(){ir();const e=it(),n=st(),t=rt(),[o]=T.useState(()=>{try{if(typeof window<"u"&&window.localStorage)return window.localStorage.getItem("hass-family-calendar-config-banner-dismissed")==="true"}catch{}return!1}),i=!t&&!o&&(e||n);return r.jsxs(dr,{hasBanner:i,children:[r.jsx(lr,{}),r.jsx(cr,{}),r.jsxs("div",{className:"main",children:[r.jsx(be,{children:r.jsx(Zn,{})}),r.jsx(be,{children:r.jsx(Uo,{})})]}),r.jsx(kt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function fr(){return r.jsx(be,{children:r.jsxs(_t,{children:[r.jsx(Se,{path:"/demo",element:r.jsx(tt,{})}),r.jsx(Se,{path:"/tiling-demo",element:r.jsx(tt,{})}),r.jsx(Se,{path:"*",element:r.jsx(ur,{})})]})})}const hr=vt.createRoot(document.getElementById("root"));hr.render(r.jsx(T.StrictMode,{children:r.jsx(be,{children:r.jsx(dn,{children:r.jsx(Cn,{children:r.jsx(Ot,{children:r.jsx(fr,{})})})})})}));
