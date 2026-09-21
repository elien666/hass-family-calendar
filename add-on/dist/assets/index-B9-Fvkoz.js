import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t,a as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _,v,x as y,y as b}from"./react-vendor-CE9i95c5.js";import{C as x,D as S,E as C,O as w,S as T,T as E,a as D,b as O,c as k,d as A,f as ee,g as te,h as ne,i as re,k as j,l as ie,m as ae,n as oe,o as se,p as ce,r as le,s as ue,t as de,u as fe,v as pe,w as me,x as he}from"./ui-vendor-JfVftHYB.js";import{t as M}from"./date-vendor-DQkFTIUF.js";import{t as N}from"./vendor-DB0hHKMi.js";import{n as P,t as ge}from"./utils-vendor-BtZU74Gj.js";import{t as _e}from"./chart-vendor-CRmKh6W3.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var F=e(y(),1),ve=e(b(),1),ye=e(S(),1),be=e=>typeof e==`function`||typeof e==`string`||typeof e==`object`&&!!e&&e.$$typeof!=null,xe=(e,t)=>[e,e?.default,e?.default?.default,t,t?.default].find(be),I=xe(ye.default,ye.Icon);!I&&typeof console<`u`&&console.error(`mdi-icon: could not resolve a renderable Icon component from @mdi/react`);var L=s(),Se=j.div`
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

    /* Für Textinhalte: 80vw sind auf Lesetext angewandt viel zu breit. */
    &.compact {
      width: min(620px, 92vw);
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
`,R=({visible:e,children:t,onClick:n,onClose:r,fullsize:i=!1,compact:a=!1})=>{let o=r||n;return F.useEffect(()=>{if(e){let e=window.scrollY;return document.body.style.position=`fixed`,document.body.style.top=`-${e}px`,document.body.style.width=`100%`,document.body.style.overflow=`hidden`,()=>{document.body.style.position=``,document.body.style.top=``,document.body.style.width=``,document.body.style.overflow=``,window.scrollTo(0,e)}}},[e]),e?(0,L.jsxs)(Se,{onClick:n,children:[(0,L.jsx)(`div`,{className:`close`,onClick:e=>{e.stopPropagation(),e.preventDefault(),o()},children:(0,L.jsx)(I,{path:te,size:2})}),(0,L.jsx)(`div`,{className:N(`content`,{fullsize:i,compact:a}),onClick:e=>e.stopPropagation(),children:t})]}):null},Ce=!0,we=e=>{Ce=!!e},Te=!1,z=[],Ee=0,De=100,Oe=50,ke=()=>{if(z.length===0||Te)return;let e=z.shift(),t=Date.now();t-Ee>=De?Ae(e.level,e.message,e.metadata):(z.unshift(e),setTimeout(ke,De-(t-Ee)))},Ae=(e,t,n=null)=>{if(!Ce)return;if(Te){z.length<Oe&&z.push({level:e,message:t,metadata:n,timestamp:Date.now()});return}let r=Date.now();if(r-Ee<De){z.length<Oe&&(z.push({level:e,message:t,metadata:n,timestamp:r}),z.length===1&&setTimeout(ke,De-(r-Ee)));return}setTimeout(async()=>{Te=!0,Ee=Date.now();try{let r=`${typeof window<`u`&&window.location?window.location.pathname.replace(/\/$/,``):``}/api/log`,i={level:e,message:t,...n&&{metadata:n}};await P.create({timeout:2e3}).post(r,i)}catch{z.length>10&&(z=[])}finally{Te=!1,z.length>0&&setTimeout(ke,De)}},0)},je=e=>{if(e.length===0)return``;if(e.length===1){let t=e[0];return typeof t==`string`?t:typeof t==`object`?JSON.stringify(t,null,2):String(t)}return e.map(e=>typeof e==`object`?JSON.stringify(e,null,2):String(e)).join(` `)},Me=e=>{if(e.length<=1)return null;if(typeof e[0]==`string`&&e.length>1){let t={};return e.slice(1).forEach((e,n)=>{typeof e==`object`&&e?Object.assign(t,e):t[`arg${n}`]=e}),Object.keys(t).length>0?t:null}if(e.every(e=>typeof e==`object`&&!!e)){let t={};return e.forEach(e=>Object.assign(t,e)),t}return null},B={log:(...e)=>{let t=je(e),n=Me(e);t&&Ae(`INFO`,t,n)},error:(...e)=>{console.error(...e);let t=je(e),n=Me(e);t&&Ae(`ERROR`,t,n)},warn:(...e)=>{let t=je(e),n=Me(e);t&&Ae(`WARNING`,t,n)},debug:(...e)=>{},info:(...e)=>{let t=je(e),n=Me(e);t&&Ae(`INFO`,t,n)}},Ne=3e4,Pe=1e4,Fe=6e4,Ie=1e3,Le=5e3,Re=2e3,ze=45e3,Be=3e4,Ve=6e5,He=8e3,Ue=8e3,We=1500,Ge=5e3,Ke=1e4,qe=15e3,Je=3e3,Ye=12e4,Xe=3e4,Ze=`hass-family-calendar-config`,Qe=()=>{let e=(e,t=void 0)=>{let n={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1}[`VITE_${e}`];return n===void 0?t:n};return{HASS_HOST:e(`HASS_HOST`,``),HASS_ACCESS_TOKEN:e(`HASS_ACCESS_TOKEN`,``),INGRESS_URL:e(`INGRESS_URL`,``),ENABLE_WEATHER:e(`ENABLE_WEATHER`,!1),WEATHER_LATITUDE:e(`WEATHER_LATITUDE`),WEATHER_LONGITUDE:e(`WEATHER_LONGITUDE`),ENABLE_HVV:e(`ENABLE_HVV`,!1),GEOFOX_USER:e(`GEOFOX_USER`,``),ENABLE_GARAGE:e(`ENABLE_GARAGE`,!1),ENTITY_GARAGE_DOOR:e(`ENTITY_GARAGE_DOOR`,``),ENABLE_LAUNDRY:e(`ENABLE_LAUNDRY`,!1),LAUNDRY_MACHINES:(()=>{let t=e(`LAUNDRY_MACHINES`,`[]`);try{return typeof t==`string`?JSON.parse(t):t}catch{return[]}})(),ENABLE_DOORBELL:e(`ENABLE_DOORBELL`,!1),ENTITY_DOORBELL:e(`ENTITY_DOORBELL`,``),ENTITY_DOORBELL_BUTTON:e(`ENTITY_DOORBELL_BUTTON`,``),DOORBELL_CAMERAS:(()=>{let t=e(`DOORBELL_CAMERAS`,`[]`);try{return typeof t==`string`?JSON.parse(t):t}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e(`ENABLE_EVERYDAY_CALENDAR`,!1),ENTITY_EVERYDAY_CALENDAR:e(`ENTITY_EVERYDAY_CALENDAR`,``),ENABLE_EV:e(`ENABLE_EV`,!1),ENTITY_PRECLIMATE_STATUS:e(`ENTITY_PRECLIMATE_STATUS`,``),ENTITY_PRECLIMATE_START:e(`ENTITY_PRECLIMATE_START`,``),ENTITY_PRECLIMATE_STOP:e(`ENTITY_PRECLIMATE_STOP`,``),ENTITY_CHARGING_STATE:e(`ENTITY_CHARGING_STATE`,``),ENTITY_STATE_OF_CHARGE:e(`ENTITY_STATE_OF_CHARGE`,``),CALENDARS:(()=>{let t=e(`CALENDARS`,`[]`);try{return typeof t==`string`?JSON.parse(t):t}catch{return[]}})(),ENABLE_LOGGING:e(`ENABLE_LOGGING`,!1)}},$e=()=>{try{if(typeof window>`u`||!window.localStorage)return null;let e=localStorage.getItem(Ze);if(e){let t=JSON.parse(e);return B.debug(`Loaded cached config from localStorage`),t}}catch(e){B.warn(`Failed to load cached config from localStorage:`,e);try{typeof window<`u`&&window.localStorage&&localStorage.removeItem(Ze)}catch{}}return null},et=e=>{try{return typeof window>`u`||!window.localStorage?!1:(localStorage.setItem(Ze,JSON.stringify(e)),B.debug(`Saved config to localStorage`),!0)}catch(e){return B.warn(`Failed to save config to localStorage:`,e),!1}},tt=(0,F.createContext)(null),nt=({children:e})=>{let[t,n]=(0,F.useState)(()=>$e()||Qe()),[r,i]=(0,F.useState)(!0),[a,o]=(0,F.useState)(null),[s,c]=(0,F.useState)(()=>!!$e()),l=(0,F.useRef)(!0),u=(0,F.useRef)(t),d=(0,F.useRef)(!1),f=(0,F.useRef)(!1);(0,F.useEffect)(()=>{u.current=t},[t]);let p=(0,F.useCallback)(async(e=!1)=>{if(d.current&&!e)return B.debug(`Config load already in progress, skipping`),!1;if(!e&&f.current)return B.debug(`Config already initialized, skipping load`),!1;d.current=!0,e||(f.current=!0),B.debug(`Starting config load`,{isReload:e,hasInitialized:f.current});let t=typeof window<`u`&&window.location?`${window.location.pathname.replace(/\/$/,``)}/api/config`:`/api/config`;try{let r=await P.get(t,{timeout:Le});if(r.data&&typeof r.data==`object`){if(typeof r.data==`object`&&!Array.isArray(r.data)){B.debug(`Config loaded from API:`,{hasCALENDARS:`CALENDARS`in r.data,CALENDARS:r.data.CALENDARS,CALENDARSCount:Array.isArray(r.data.CALENDARS)?r.data.CALENDARS.length:`not array`,allKeys:Object.keys(r.data)});let t=u.current,a=JSON.stringify(r.data)!==JSON.stringify(t);B.debug(`Updating config with new data from API:`,{configChanged:a,CALENDARSCount:Array.isArray(r.data.CALENDARS)?r.data.CALENDARS.length:`not array`,currentCALENDARSCount:Array.isArray(t?.CALENDARS)?t.CALENDARS.length:`not array`,responseKeys:Object.keys(r.data).length,currentConfigKeys:Object.keys(t||{}).length}),a?(n(r.data),c(!1),o(null),et(r.data)):(c(!1),o(null));let s=Object.keys(r.data).filter(e=>e.startsWith(`ENABLE_`)&&r.data[e]).map(e=>e.replace(`ENABLE_`,``));return B.info(`Configuration ${e?`reloaded`:`loaded`} from API endpoint. Enabled features: ${s.length>0?s.join(`, `):`none`}`,{enabledFeatures:s,totalConfigKeys:Object.keys(r.data).length}),e||i(!1),d.current=!1,!0}throw Error(`Invalid config structure: expected object, got array`)}throw Error(`Invalid config response: missing or invalid data`)}catch(t){let r=t.response?.data?.detail||t.message||`Unknown error`;if(e)return B.warn(`Failed to reload config from API, keeping current config:`,r),!1;{let e=$e();return e?(B.warn(`Failed to load config from API, using cached config:`,r),l.current&&(n(e),c(!0),o(r),i(!1)),!1):(B.debug(`Failed to load config from API, using defaults:`,r),l.current&&(o(r),i(!1)),!1)}}finally{d.current=!1}},[]),m=(0,F.useRef)(null),h=(0,F.useCallback)(async()=>{if(m.current)return B.debug(`Config reload already in progress, skipping`),m.current;B.debug(`Reloading config...`);let e=p(!0).finally(()=>{m.current=null});return m.current=e,e},[p]),g=(0,F.useRef)(!1);(0,F.useEffect)(()=>{if(g.current){B.debug(`Config already loaded, skipping initial load`);return}return g.current=!0,B.debug(`Initial config load starting`),p(!1),()=>{l.current=!1}},[]),(0,F.useEffect)(()=>{let e=t.HASS_ACCESS_TOKEN||``;e&&typeof e==`string`&&e.trim()!==``&&e!==`undefined`&&e!==`null`?(P.defaults.headers.common.Authorization=`Bearer ${e}`,B.debug(`Axios Authorization header set from config (local dev mode)`)):(delete P.defaults.headers.common.Authorization,B.debug(`Axios Authorization header removed (add-on mode or no token)`))},[t.HASS_ACCESS_TOKEN]),(0,F.useEffect)(()=>{we(t.ENABLE_LOGGING===!0)},[t.ENABLE_LOGGING]);let _=(0,F.useMemo)(()=>({config:t,loading:r,configError:a,isUsingCachedConfig:s,reloadConfig:h}),[t,r,a,s,h]);return(0,L.jsx)(tt.Provider,{value:_,children:e})},V=()=>{let e=(0,F.useContext)(tt);if(!e)throw Error(`useConfig must be used within ConfigProvider`);return e.config},rt=()=>{let e=(0,F.useContext)(tt);if(!e)throw Error(`useConfigLoading must be used within ConfigProvider`);return e.loading},it=()=>{let e=(0,F.useContext)(tt);if(!e)throw Error(`useConfigError must be used within ConfigProvider`);return e.configError},at=()=>{let e=(0,F.useContext)(tt);if(!e)throw Error(`useIsUsingCachedConfig must be used within ConfigProvider`);return e.isUsingCachedConfig},ot=()=>{let e=(0,F.useContext)(tt);if(!e)throw Error(`useReloadConfig must be used within ConfigProvider`);return e.reloadConfig},H=0,st=0,U=0,W=[],ct=e=>{let t={message:e.message||`Unknown error occurred`,status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(t.status=e.response.status,t.responseData=e.response.data,t.url=e.config?.url||e.request?.responseURL||`Unknown URL`,t.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(t.isNetworkError=!0,t.url=e.config?.url||`Unknown URL`,t.message=`Network error: No response received from server`,e.request.readyState!==void 0&&(t.readyState=e.request.readyState),e.request.status!==void 0&&(t.requestStatus=e.request.status)):(t.message=e.message||`Request setup error`,t.url=e.config?.url||`Unknown URL`),(e.code===`ECONNABORTED`||e.message?.includes(`timeout`))&&(t.isTimeoutError=!0,t.message=`Request timeout: The request took too long to complete`),e.config&&(t.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?`[REDACTED]`:void 0},hasAuthHeader:!!e.config.headers?.Authorization}),t},lt=(e,t=``)=>{let n=ct(e);if(n.url&&(n.url.includes(`/api/log`)||n.url.endsWith(`/api/log`)||e.config?.url?.includes(`/api/log`)||e.config?.url?.endsWith(`/api/log`)))return n;U++,H++,W.push({timestamp:new Date().toISOString(),url:n.url,status:n.status,code:n.code,message:n.message,isNetworkError:n.isNetworkError,isTimeoutError:n.isTimeoutError}),W.length>10&&W.shift();let r=[];return t&&r.push(`[${t}]`),r.push(`🔴 Axios API Error:`),r.push(`Message: ${n.message}`),n.url&&r.push(`URL: ${n.url}`),n.status&&r.push(`HTTP Status: ${n.status}`),n.code&&r.push(`Error Code: ${n.code}`),n.isNetworkError&&(r.push(`Type: Network Error (no response received)`),n.readyState!==void 0&&r.push(`ReadyState: ${n.readyState}`)),n.isTimeoutError&&r.push(`Type: Timeout Error`),n.config&&(r.push(`Method: ${n.config.method?.toUpperCase()||`UNKNOWN`}`),r.push(`Has Auth Header: ${n.config.hasAuthHeader}`),n.config.timeout&&r.push(`Timeout: ${n.config.timeout}ms`)),n.responseData&&r.push(`Response Data:`,n.responseData),r.push(`Request Stats: ${st} success, ${U} errors (${H} total)`),U>3&&W.length>0&&r.push(`Recent errors pattern:`,W.slice(-5)),B.error(...r),n},ut=e=>{st++,H++,(H%10==0||U>0)&&B.debug(`✅ Axios Request Success:`,{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:H,stats:`${st} success, ${U} errors`}),U>0&&H%10==0&&st>U&&(B.debug(`Request pattern: Errors cleared, connection appears healthy`),U=0,W.length=0)},G=e=>{let t=ct(e);return t.isNetworkError?`Netzwerkfehler: Server nicht erreichbar`:t.isTimeoutError?`Zeitüberschreitung: Die Anfrage dauerte zu lange`:t.status===401?`Authentifizierungsfehler: Bitte erneut anmelden`:t.status===403?`Berechtigungsfehler: Keine Berechtigung für diese Aktion`:t.status===404?`Nicht gefunden: Die angeforderte Ressource existiert nicht`:t.status>=500?`Serverfehler: Bitte später erneut versuchen`:t.message||`Ein Fehler ist aufgetreten`},dt=null,ft=e=>{dt=e};P.interceptors.request.use(e=>{let t=Date.now();return e.metadata={requestId:t,startTime:Date.now()},typeof window<`u`&&(t%50==0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,B.debug(`Axios Defaults State:`,{baseURL:P.defaults.baseURL,timeout:P.defaults.timeout,hasAuthHeader:!!P.defaults.headers?.common?.Authorization,authHeaderLength:P.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(P.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes(`/api/log`)||e.config?.url?.endsWith(`/api/log`)||B.error(`Axios Request Setup Error:`,e),Promise.reject(e))),P.interceptors.response.use(e=>(e.config&&ut(e.config),e),e=>{let t=e.config?.url?.includes(`/api/log`)||e.config?.url?.endsWith(`/api/log`),n=e.config?.metadata?.skipConnectionCheck===!0;if(!t){if(lt(e,e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:`Axios Request`),e.config?.metadata){let t=Date.now()-e.config.metadata.startTime;B.error(`Request Duration:`,`${t}ms`,`Request ID:`,e.config.metadata.requestId)}!n&&dt&&!e.response&&(e.code===`ERR_NETWORK`||e.code===`ECONNABORTED`||e.code===`ERR_CANCELED`)&&(B.debug(`Network error detected - triggering connection check`),dt())}return Promise.reject(e)});var K=(e,t={})=>{let n=e.startsWith(`/`)?e:`/${e}`;if(typeof window<`u`&&window.location){if(window.location.pathname.includes(`/api/hassio_ingress/`)){let e=window.location.pathname.match(/^(\/api\/hassio_ingress\/[^\/]+\/)/);if(e)return`${e[1]}${n.startsWith(`/`)?n.slice(1):n}`}return n}return n},pt=(e={})=>{if(typeof window<`u`&&window.location){let t=e.INGRESS_URL||``;if(t&&typeof t==`string`&&t.trim()!==``)return`${window.location.origin}${t.replace(/\/$/,``)}`;let n=window.location.pathname.replace(/\/$/,``);return`${window.location.origin}${n}`}return``},mt=(e={})=>{let t=pt(e);return t?`${t.startsWith(`https://`)?`wss://`:`ws://`}${t.replace(/^https?:\/\//,``)}/api/websocket`:``},ht=3e3,gt=3e4,_t=5e3,vt=()=>{let[e,t]=(0,F.useState)(!0),n=(0,F.useRef)(null),r=(0,F.useRef)(null),i=(0,F.useRef)(!1),a=(0,F.useRef)(Date.now()),o=(0,F.useRef)(!0);(0,F.useEffect)(()=>{o.current=e},[e]);let s=(0,F.useCallback)(async()=>{if(!i.current){i.current=!0,a.current=Date.now();try{let e=`${typeof window<`u`&&window.location?window.location.pathname.replace(/\/$/,``):``}/api/config`;await P.get(e,{timeout:_t,metadata:{skipConnectionCheck:!0}}),o.current||B.info(`Connection restored - backend is reachable`),t(!0),i.current=!1,r.current&&=(clearInterval(r.current),null)}catch(e){!e.response&&(e.code===`ERR_NETWORK`||e.code===`ECONNABORTED`)?(o.current&&B.warn(`Connection lost - backend is not reachable`),t(!1),i.current=!1,r.current||=setInterval(()=>{s()},gt)):(o.current||B.info(`Connection restored - backend responded (with error)`),t(!0),i.current=!1,r.current&&=(clearInterval(r.current),null))}}},[]),c=(0,F.useCallback)(()=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{s()},ht)},[s]);return(0,F.useEffect)(()=>{let e=()=>{document.visibilityState===`visible`&&(B.debug(`Page became visible - checking connection`),c())};return document.addEventListener(`visibilitychange`,e),()=>{document.removeEventListener(`visibilitychange`,e)}},[c]),(0,F.useEffect)(()=>{let e=setTimeout(()=>{s()},1e3);return()=>{clearTimeout(e)}},[s]),(0,F.useEffect)(()=>()=>{n.current&&clearTimeout(n.current),r.current&&clearInterval(r.current)},[]),{isConnected:e,triggerCheck:c}},yt=(0,F.createContext)(null),bt=({children:e})=>{let t=vt(),n=ot(),r=(0,F.useRef)(!1),i=(0,F.useRef)(null),a=(0,F.useRef)(!1);return(0,F.useEffect)(()=>(ft(t.triggerCheck),()=>{ft(null)}),[t.triggerCheck]),(0,F.useEffect)(()=>{let e=t.isConnected;if(!e){r.current=!0,i.current&&=(clearTimeout(i.current),null);return}return r.current&&e&&!a.current&&(i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{a.current||(a.current=!0,B.debug(`Connection restored - triggering config reload`),n().then(()=>{r.current=!1}).catch(e=>{B.warn(`Failed to reload config after connection restore:`,e)}).finally(()=>{a.current=!1,i.current=null}))},Re)),()=>{i.current&&=(clearTimeout(i.current),null)}},[t.isConnected,n]),(0,L.jsx)(yt.Provider,{value:t,children:e})},xt=()=>{let e=(0,F.useContext)(yt);if(!e)throw Error(`useConnectionStateContext must be used within ConnectionStateProvider`);return e},St=3,Ct=e=>e.code===`ECONNABORTED`||e.code===`ERR_NETWORK`||e.message?.includes(`timeout`),wt=({entityId:e,enabled:t=!0,config:n,initialState:r=null,extractState:i=e=>e.data.state})=>{let[a,o]=F.useState(r),[s,c]=F.useState(!1),{isConnected:l}=xt(),u=F.useRef(!1),[d,f]=F.useState(0);F.useEffect(()=>{l?u.current&&(u.current=!1,f(e=>e+1)):u.current=!0},[l]);let p=t&&!!e,m=e?K(`/api/states/${e}`,n):null;return F.useEffect(()=>{if(!p||!m)return;let t=!0,n=new AbortController;return(async()=>{for(let r=0;r<St;r++)try{let e=await P(m,{signal:n.signal});t&&(o(i(e)),c(!1));return}catch(i){if(n.signal.aborted)return;if(Ct(i)&&r<2){let t=1e3*2**r;B.debug(`Entity fetch failed for ${e} (attempt ${r+1}), retrying in ${t}ms`),await new Promise(e=>setTimeout(e,t));continue}t&&c(G(i));return}})(),()=>{t=!1,n.abort()}},[p,m,e,d]),[a,s,o]},Tt=()=>{let e=V(),t=e.ENABLE_EVERYDAY_CALENDAR||!1,n=e.ENTITY_EVERYDAY_CALENDAR||``,[r,i]=wt({entityId:n,enabled:t&&n,config:e,initialState:null,extractState:e=>{let t=e.data.attributes.store;return t===void 0?[]:t}});return[r,i]},Et=(e,t)=>{let n=t?.ENTITY_EVERYDAY_CALENDAR;if(!n)return;let r=K(`/api/states/${n}`,t);P.post(r,{state:new Date,attributes:{store:e}}).catch(e=>{B.error(`Failed to store everyday calendar data:`,e)})},Dt=j.div`
    /* Das Overlay gibt volle Bildschirmhöhe vor; der Inhalt teilt sie in
       Überschrift und Raster auf, statt darüber hinauszuwachsen. */
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;

    /* Das Schließkreuz des Overlays schwebt oben rechts über dem Inhalt und
       verdeckte sonst die Dezember-Spalte. */
    padding-right: 56px;

    h2 {
        text-align: center;
        margin-bottom: 12px !important;
        flex: none;
    }

    /* Ladeanzeige und Fehlermeldung mittig, statt oben zu kleben.
       Die Klasse saß bisher auf diesem Div, die Regel zielte aber auf das
       Raster darin — sie lief also ins Leere. */
    &.loading {
        align-items: center;
        justify-content: center;
    }

    .everydayGrid {
        display: grid;
        /* Erste Spalte trägt die Tageszahlen, dann zwölf Monate; erste
           Zeile die Monatszahlen, darunter 31 Tage.
           Das fehlende Komma in repeat(32 1fr) machte die Zeilenangabe
           ungültig — CSS verwarf sie still, alle gridArea-Angaben liefen
           ins Leere und das Raster wurde zur 11.000 px langen Kolonne. */
        grid-template-columns: repeat(13, 1fr);
        grid-template-rows: repeat(32, 1fr);
        column-gap: 0;
        row-gap: 0;
        flex: 1;
        min-height: 0;

        > * {
            place-self: center;
            min-height: 0;
        }

        .dot {
            /* Punktgröße folgt der Zeilenhöhe, damit das Jahr auf jedem
               Display in eine Bildschirmhöhe passt. */
            height: min(18px, 2.2vh);
            width: min(18px, 2.2vh);
            aspect-ratio: 1;
            border-radius: 50%;
            background-color: #8e8c8c;

            &.on {
                background-color: #00ff00;
            }
        }
    }
`,Ot=({on:e,month:t,day:n})=>{let[r,i]=e,a=r.indexOf(`${t}-${n}`),o=a>-1,s=()=>{i(o?r.toSpliced(a,1):[...r,`${t}-${n}`])};return(0,L.jsx)(`div`,{className:N(`dot`,{on:o}),onClick:()=>s(e=>!e)})},kt=()=>{let e=V();if(!e.ENABLE_EVERYDAY_CALENDAR)return null;let t=new Date().getFullYear(),n=[];for(let e=1;e<13;e++){let r=new Date(t,e,0).getDate();for(let t=1;t<=r;t++)n.push({month:e,day:t})}let r=Array.from({length:31},(e,t)=>t+1),i=Array.from({length:12},(e,t)=>t+1),a=F.useState(void 0),[o,s]=Tt();return F.useEffect(()=>{o!==null&&a[1](o)},[o]),F.useEffect(()=>{a[0]!==void 0&&Et(a[0],e)},[a[0],e]),a[0]===void 0?(0,L.jsx)(Dt,{className:`loading`,children:s===!1?(0,L.jsx)(le,{visible:!0,height:`80`,width:`80`,color:`#c1c1c1`,radius:`9`,ariaLabel:`three-dots-loading`,wrapperStyle:{},wrapperClass:``}):(0,L.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`},children:[(0,L.jsx)(`h3`,{children:`Fehler!`}),(0,L.jsx)(`div`,{children:s instanceof Error?s.message:String(s)})]})}):(0,L.jsxs)(Dt,{children:[(0,L.jsx)(`h2`,{children:`Jeden Tag ein bißchen`}),s!==!1&&(0,L.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`,marginBottom:`1rem`},children:[(0,L.jsx)(`h3`,{children:`Fehler!`}),(0,L.jsx)(`div`,{children:s instanceof Error?s.message:String(s)})]}),(0,L.jsxs)(`div`,{className:`everydayGrid`,children:[r.map((e,t)=>(0,L.jsx)(`div`,{style:{gridArea:`${e+1} / 1 / ${e+1} / 1`},children:e},t)),i.map((e,t)=>(0,L.jsx)(`div`,{style:{gridArea:`1 / ${e+1} / 1 / ${e+1}`},children:e},t)),n.map((e,t)=>(0,L.jsx)(`div`,{style:{gridArea:`${e.day+1} / ${e.month+1} / ${e.day+1} / ${e.month+1}`},children:(0,L.jsx)(Ot,{on:a,month:e.month,day:e.day})},t))]})]})},At=j.div`
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
  }`,jt=(0,F.memo)(()=>{let[e,t]=F.useState(M.now()),[n,r]=F.useState(!1),i=(0,F.useCallback)(()=>r(!0),[]),a=(0,F.useCallback)(()=>r(!1),[]);return F.useEffect(()=>{let e=setInterval(()=>t(M.now()),1e3);return()=>clearInterval(e)},[]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(At,{onClick:i,children:[e.toFormat(`HH`),(0,L.jsx)(`span`,{children:`:`}),e.toFormat(`mm`)]}),(0,L.jsx)(R,{visible:n,onClick:a,fullsize:!0,children:(0,L.jsx)(kt,{})})]})}),Mt=(e={})=>mt(e)||(typeof window<`u`&&window.location?`${window.location.protocol===`https:`?`wss:`:`ws:`}//${window.location.host}/api/websocket`:``);function Nt({onReady:e,enabled:t=!0,checkBackendConnection:n=!0,reconnectStrategy:r=`simple`,maxReconnectAttempts:i=5,reconnectDelay:a=2e3,logPrefix:o=`WebSocket`,dependencies:s=[]}){let c=V(),l=xt(),u=!n||l?.isConnected,[d,f]=F.useState(!1),[p,m]=F.useState(!1),h=F.useRef(null),g=F.useRef(null),_=F.useRef(!0),v=F.useRef(null),y=F.useRef(null),b=F.useRef(null),x=F.useRef(0),S=F.useRef(!1),C=F.useRef(!1),w=F.useRef(new Map),T=F.useRef(null),E=F.useRef(null),D=F.useRef(null),O=F.useRef(u);O.current=u;let k=F.useCallback(()=>{let e=h.current;if(g.current,v.current&&=(clearTimeout(v.current),null),y.current&&=(clearTimeout(y.current),null),b.current&&=(clearTimeout(b.current),null),T.current&&=(clearInterval(T.current),null),E.current&&=(clearTimeout(E.current),null),e&&e.readyState===WebSocket.OPEN&&(w.current.forEach((t,n)=>{try{e.send(JSON.stringify({type:`unsubscribe_entity`,entity_id:n}))}catch(e){B.debug(`Error unsubscribing from ${n} for ${o}:`,e)}}),w.current.clear()),e){try{e.close()}catch(e){B.debug(`Error closing connection for ${o}:`,e)}h.current=null}g.current=null},[o]),A=F.useCallback(async()=>{if(t&&_.current){if(n&&!O.current){B.debug(`Skipping ${o} connection - backend not connected`);return}if(!S.current){h.current&&k(),S.current=!0,m(!0);try{let t=Mt(c);if(!t){B.error(`Failed to build WebSocket URL for ${o} - cannot connect`),_.current&&f(`WebSocket URL konnte nicht erstellt werden.`),S.current=!1,m(!1);return}B.debug(`${o} connecting to: ${t}`);let n=new WebSocket(t);h.current=n,n.onopen=()=>{if(!_.current){n.close();return}if(B.debug(`${o} connection opened`),x.current=0,C.current=!1,b.current&&=(clearTimeout(b.current),null),_.current&&f(!1),S.current=!1,m(!1),e)try{let t=e(n,w);g.current=t}catch(e){B.error(`Failed to subscribe for ${o}:`,e),_.current&&f(e instanceof Error?e.message:String(e))}T.current&&clearInterval(T.current),T.current=setInterval(()=>{if(n.readyState===WebSocket.OPEN){try{n.send(JSON.stringify({type:`ping`}))}catch{return}E.current&&clearTimeout(E.current),E.current=setTimeout(()=>{B.warn(`${o} heartbeat timeout — closing stale connection`);try{n.close(4e3,`heartbeat timeout`)}catch{}},Pe)}},Ne)},n.onmessage=e=>{try{let t=JSON.parse(e.data);if(t.type===`state_update`){let e=t.entity_id,n=w.current.get(e);n&&n(t)}else if(t.type===`state_response`){let e=t.entity_id,n=w.current.get(e);n&&n(t)}else t.type===`pong`?E.current&&=(clearTimeout(E.current),null):t.type===`error`&&(B.error(`${o} received error:`,t.message),_.current&&f(t.message))}catch(e){B.error(`Error handling message for ${o}:`,e)}},n.onclose=e=>{if(_.current&&!S.current){B.debug(`${o} disconnected (code: ${e.code}, wasClean: ${e.wasClean})`),h.current=null,w.current.clear(),g.current=null,v.current&&=(clearTimeout(v.current),null);let t=!e.wasClean&&(e.code===1006||x.current>0);if(t&&x.current>=5&&!C.current){B.warn(`Backend appears to be down for ${o} (${x.current} failed attempts), switching to periodic retry every ${Fe/1e3}s`),C.current=!0,_.current&&f(`Backend nicht erreichbar. Wiederherstellungsversuche alle 60 Sekunden.`);let e=()=>{b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{b.current=null,_.current&&!S.current&&O.current&&C.current&&(B.debug(`Periodic retry attempt for ${o} (backend might be back up)`),x.current=0,D.current(),!h.current&&C.current&&e())},Fe)};e();return}if(C.current)return;if(r===`exponential`&&x.current>=i){B.warn(`Max reconnection attempts (${i}) reached for ${o}, stopping reconnection`),_.current&&f(`Verbindung verloren. Bitte Seite neu laden.`);return}if(O.current){if(r===`exponential`){let e=t?a*10:a,n=Math.min(e*2**x.current,6e4);x.current++,v.current=setTimeout(()=>{_.current&&!S.current&&O.current&&(B.debug(`Attempting to reconnect ${o} (attempt ${x.current}/${i})`),D.current())},n)}else{let e=t?a*10:a;v.current=setTimeout(()=>{_.current&&!S.current&&O.current&&(B.debug(`Attempting to reconnect ${o}`),D.current())},e)}}else B.debug(`Skipping reconnection for ${o} - waiting for backend connection`)}},n.onerror=e=>{B.error(`WebSocket error for ${o}:`,e),S.current=!1,m(!1),_.current&&f(`WebSocket-Verbindungsfehler`)}}catch(e){if(S.current=!1,m(!1),_.current){if(B.error(`Failed to setup ${o} connection:`,e),f(e instanceof Error?e.message:String(e)),O.current){if(r===`exponential`&&x.current<i){let e=Math.min(a*2**x.current,3e4);x.current++,v.current=setTimeout(()=>{_.current&&!S.current&&O.current&&(B.debug(`Attempting to reconnect ${o} after error (attempt ${x.current}/${i})`),D.current())},e)}else r===`simple`?v.current=setTimeout(()=>{_.current&&!S.current&&O.current&&(B.debug(`Attempting to reconnect ${o} after error`),D.current())},a):(B.warn(`Max reconnection attempts (${i}) reached for ${o}, stopping reconnection`),_.current&&f(`Verbindung fehlgeschlagen. Bitte Seite neu laden.`))}else B.debug(`Skipping reconnection for ${o} after error - waiting for backend connection`)}}}}},[t,n,c,r,i,a,o,e,k]);return D.current=A,F.useEffect(()=>{t&&u&&!h.current&&!S.current&&A()},[t,u,A,...s]),F.useEffect(()=>{t&&u&&!h.current&&!S.current&&(y.current&&=(clearTimeout(y.current),null),y.current=setTimeout(()=>{_.current&&O.current&&!h.current&&!S.current&&(B.debug(`Backend connection restored - reconnecting ${o}`),C.current=!1,x.current=0,b.current&&=(clearTimeout(b.current),null),A())},Ie))},[t,u,A,o]),F.useEffect(()=>(_.current=!0,()=>{_.current=!1,k()}),[k]),{connection:h.current,error:d,isConnecting:p}}var Pt=({entityId:e,enabled:t,onStateUpdate:n,logPrefix:r,wsOptions:i={}})=>{let{error:a}=Nt({enabled:t&&!!e,logPrefix:r,...i,onReady:(t,i)=>(i.current.set(e,e=>{e.state!==void 0&&n(e.state)}),t.readyState===WebSocket.OPEN&&(t.send(JSON.stringify({type:`subscribe_entity`,entity_id:e})),B.debug(`Subscribed to ${r} state changes`)),()=>{i.current.delete(e),t.readyState===WebSocket.OPEN&&t.send(JSON.stringify({type:`unsubscribe_entity`,entity_id:e}))}),dependencies:[t,e]});return{error:a}},Ft=()=>{let e=V(),t=e.ENABLE_DOORBELL||!1,n=e.ENTITY_DOORBELL||``,r=t&&n,[i,a,o]=wt({entityId:n,enabled:r,config:e,initialState:`off`}),{error:s}=Pt({entityId:n,enabled:r,onStateUpdate:o,logPrefix:`doorbell`});return[i,a||s||!1]},It=(e={})=>{let t=e.ENTITY_DOORBELL_BUTTON||``;t&&P.post(K(`/api/services/button/press`,e),{entity_id:t}).catch(e=>{B.error(`Failed to unlatch front door:`,e)})},Lt=e(u(),1),Rt=async(e,t,n)=>{let r=K(`/api/states/${e}`,t);B.debug(`Fetching camera token for ${e} (aborted: ${n?.aborted})`);let i=await P(r,{timeout:1e4,signal:n}),a=i.data?.attributes?.access_token||null;if(!a){let t=i.data?.state||`unknown`,n=Object.keys(i.data?.attributes||{});B.warn(`Camera entity ${e} has no access_token attribute. State: ${t}, attributes: [${n.join(`, `)}]`)}return{entityId:e,accessToken:a,error:a?null:`Kein access_token für ${e}`}},zt=(e,t)=>new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(n,e);t?.addEventListener(`abort`,()=>{clearTimeout(r),n()},{once:!0})}),Bt=async(e,t,n)=>{if(!e||e.length===0)return{tokens:{},error:null};let r=n?null:new AbortController,i=n||r.signal;try{let n=e.map(async e=>{let n=null,r=null;for(let a=0;a<3;a++)try{return await Rt(e,t,i)}catch(t){if(n=t,i.aborted)return{entityId:e,accessToken:null,error:`Abgebrochen`};let o=t.response?.status,s=t.code===`ECONNABORTED`||t.code===`ERR_NETWORK`||t.message?.includes(`timeout`)||o>=500;if(r=o?`HTTP ${o}: ${t.response?.data?.detail||t.message}`:`${t.code||`Error`}: ${t.message}`,s&&a<2){let t=1e3*2**a;if(B.debug(`Token fetch failed for ${e} (attempt ${a+1}): ${r}, retrying in ${t}ms...`),await zt(t,i),i.aborted)return{entityId:e,accessToken:null,error:`Abgebrochen`};continue}return B.error(`Failed to fetch access token for ${e} (attempt ${a+1}/3): ${r}`),{entityId:e,accessToken:null,error:r}}let a=n?r||n.message:`Unknown error`;return B.error(`Failed to fetch access token for ${e} after 3 attempts: ${a}`),{entityId:e,accessToken:null,error:a}}),r=await Promise.all(n),a={},o=[];if(r.forEach(({entityId:e,accessToken:t,error:n})=>{t?a[e]=t:o.push(`${e}: ${n||`Kein Token`}`)}),Object.keys(a).length===0&&o.length>0){let e=o.join(` | `);return B.error(`Camera token fetch failed for all cameras: ${e}`),{tokens:{},error:`Kamera-Token Fehler: ${e}`}}return{tokens:a,error:null}}catch(e){return i.aborted?{tokens:{},error:null}:(B.error(`Failed to fetch camera access tokens:`,e),{tokens:{},error:G(e)})}},Vt=(e,t=null,n={})=>{if(!e)return null;let r,i=n.HASS_HOST||``;if(i&&i!==`undefined`&&i!==`null`)r=i.replace(/\/$/,``);else if(typeof window<`u`&&window.location)r=window.location.origin;else return null;let a=`${r}/api/camera_proxy_stream/${e}`;return t?`${a}${a.includes(`?`)?`&`:`?`}token=${encodeURIComponent(t)}`:a},q={portrait:360/480,landscape:1920/1072,wide:770/216};function Ht(e){let t={landscape:0,portrait:0,wide:0};return e.forEach(e=>{e.orientation&&t.hasOwnProperty(e.orientation)&&t[e.orientation]++}),t}function Ut(e,t,n){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};let r=e.length,i=Ht(e);return r===1?Wt(e[0],t,n):r===2?Gt(i,e,t,n):r===3?qt(i,e,t,n):r===4?Jt(i,e,t,n):{videos:[],totalArea:0,efficiency:0}}function Wt(e,t,n){let r=q[e.orientation],i,a;return r>t/n?(i=t,a=t/r):(a=n,i=n*r),{videos:[{x:(t-i)/2,y:(n-a)/2,width:i,height:a,orientation:e.orientation}],totalArea:i*a,efficiency:i*a/(t*n)*100}}function Gt(e,t,n,r){if(e.portrait>0)return Kt(e,t,n,r);let i=[];e.landscape>0&&i.push(`landscape`),e.wide>0&&i.push(`wide`);let a=i[0]||t[0].orientation,o=i[1]||t[1].orientation,s=q[a],c=q[o];if(e.landscape===1&&e.wide===1){let e=q.landscape,i=q.wide,a=n,o=a/e,s=a/i,c=o+s,l,u,d;if(c<=r)l=o,u=s,d=a;else{let e=r/c;l=o*e,u=s*e,d=u*i}let f=(n-d)/2,p=J(t,[{x:f,y:0,width:d,height:u,orientation:`wide`},{x:f,y:u,width:d,height:l,orientation:`landscape`}]),m=d*l+d*u;return{videos:p,totalArea:m,efficiency:m/(n*r)*100}}if(e.wide===2){let e=q.wide,i=n,a=i/e,o=a*2,s;s=o<=r?a:r/2;let c=J(t,[{x:0,y:0,width:i,height:s,orientation:`wide`},{x:0,y:s,width:i,height:s,orientation:`wide`}]),l=i*s*2;return{videos:c,totalArea:l,efficiency:l/(n*r)*100}}let l=[()=>{let e=n,t=e/2,i=e/2,l=t/s,u=i/c;return Math.max(l,u)<=r?{positions:[{x:0,y:(r-l)/2,width:t,height:l,orientation:a},{x:t,y:(r-u)/2,width:i,height:u,orientation:o}],totalArea:t*l+i*u}:null},()=>{let e=r,t=e/2,i=e/2,l=t*s,u=i*c;return Math.max(l,u)<=n?{positions:[{x:(n-l)/2,y:0,width:l,height:t,orientation:a},{x:(n-u)/2,y:t,width:u,height:i,orientation:o}],totalArea:l*t+u*i}:null}],u=null,d=0;for(let e of l){let t=e();t&&t.totalArea>d&&(d=t.totalArea,u=t)}if(!u){let e=n/2,t=n/2,i=Math.min(e/s,r),l=Math.min(t/c,r);u={positions:[{x:0,y:(r-i)/2,width:e,height:i,orientation:a},{x:e,y:(r-l)/2,width:t,height:l,orientation:o}],totalArea:e*i+t*l}}let f=J(t,u.positions),p=u.totalArea/(n*r)*100;return{videos:f,totalArea:u.totalArea,efficiency:p}}function Kt(e,t,n,r){let i=e.portrait,a=t.length-i;if((i===3||i===4)&&a===0){let e=q.portrait,a=n/i,o=a/e,s=o<r?(r-o)/2:0,c=Math.min(o,r),l=[],u=0;for(let t=0;t<i;t++){let n=Math.min(a,c*e);l.push({x:t*a+(a-n)/2,y:s,width:n,height:c,orientation:`portrait`}),u+=n*c}let d=J(t,l),f=u/(n*r)*100;return{videos:d,totalArea:u,efficiency:f}}t.filter(e=>e.orientation===`portrait`);let o=t.filter(e=>e.orientation!==`portrait`),s=i>0?Math.min(n*.4,n*.5):0,c=n-s,l=[],u=0;if(i===2&&a===0){let e=q.portrait,t=n/2,i=t/e,a=r,o,s;i<=a?(s=i,o=t):(s=a,o=a*e);let c=(r-s)/2;l.push({x:(t-o)/2,y:c,width:o,height:s,orientation:`portrait`}),l.push({x:t+(t-o)/2,y:c,width:o,height:s,orientation:`portrait`}),u=o*s*2}else if(i===1&&a===1){let e=q.portrait,t=o[0],i=q[t.orientation];n/(e+i);let a=e+i,s=e/a*n,c=i/a*n,d=s/e,f=c/i,p=Math.min(r,Math.min(d,f)),m=(r-p)/2;l.push({x:0,y:m,width:s,height:p,orientation:`portrait`}),l.push({x:s,y:m,width:c,height:p,orientation:t.orientation}),u=s*p+c*p}else if(i===1&&a===2&&e.landscape===1&&e.wide===1){let e=q.portrait,t=q.wide,i=q.landscape,a=r,s=r*e,c=r/(1/t+1/i),d=c/t,f=c/i,p=s+c;if(Math.abs(p-n)<.1)l.push({x:0,y:0,width:s,height:a,orientation:`portrait`}),u+=s*a,o.find(e=>e.orientation===`wide`)&&(l.push({x:0+s,y:0,width:c,height:d,orientation:`wide`}),u+=c*d),o.find(e=>e.orientation===`landscape`)&&(l.push({x:0+s,y:d,width:c,height:f,orientation:`landscape`}),u+=c*f);else{let a=n/p,d=s*a,f=d/e,m=c*a;m/t,m/i;let h=r/f,g=d*h,_=r,v=m*h,y=v/t,b=v/i,x=g+v;if(x>n){let r=n/x;g*=r,_=g/e,v*=r,y=v/t,b=v/i,x=g+v,x>n&&(v=n-g,y=v/t,b=v/i)}let S=g+v;if(S>n){let r=n/S;g*=r,_=g/e,v*=r,y=v/t,b=v/i}l.push({x:0,y:0,width:g,height:_,orientation:`portrait`}),u+=g*_,o.find(e=>e.orientation===`wide`)&&(l.push({x:0+g,y:0,width:v,height:y,orientation:`wide`}),u+=v*y),o.find(e=>e.orientation===`landscape`)&&(l.push({x:0+g,y,width:v,height:b,orientation:`landscape`}),u+=v*b)}}else if(i===1&&a===3){let e=q.portrait,t=r,i=t*e,a=i,s=n-a;l.push({x:0,y:0,width:i,height:t,orientation:`portrait`}),u+=i*t;let c=r/3;for(let e=0;e<o.length;e++){let t=o[e],n=q[t.orientation],r=c,i=s,d,f;i/n<=r?(d=i,f=d/n):(f=r,d=f*n);let p=e*c+(c-f)/2;l.push({x:a+(s-d)/2,y:p,width:d,height:f,orientation:t.orientation}),u+=d*f}}else if(i===2&&a===1){let e=q.portrait,t=o[0],i=q[t.orientation],a=r/2,s=a*e,c=n-s,d=r*i,f,p;d<=c?(p=r,f=p*i):(f=c,p=f/i);let m=s,h=a,g=(r-p)/2,_=(r/2-h)/2,v=r/2+(r/2-h)/2;l.push({x:0,y:g,width:f,height:p,orientation:t.orientation}),u+=f*p,l.push({x:c,y:_,width:m,height:h,orientation:`portrait`}),u+=m*h,l.push({x:c,y:v,width:m,height:h,orientation:`portrait`}),u+=m*h}else if(i===1&&a===2){let e=q.portrait,t=r,i=t*e,a=i,s=n-a;l.push({x:0,y:0,width:i,height:t,orientation:`portrait`}),u+=i*t;let c=r/2;for(let e=0;e<o.length;e++){let t=o[e],n=q[t.orientation],r=c,i=s,d,f;i/n<=r?(d=i,f=d/n):(f=r,d=f*n);let p=e*c+(c-f)/2;l.push({x:a+(s-d)/2,y:p,width:d,height:f,orientation:t.orientation}),u+=d*f}}else{let e=i;if(e>0){let t=r/e,n=q.portrait;for(let r=0;r<e;r++){let e=Math.min(t,s/n),i=e*n,a=r*t+(t-e)/2;l.push({x:(s-i)/2,y:a,width:i,height:e,orientation:`portrait`}),u+=i*e}}if(o.length>0){let e=r/o.length;for(let t=0;t<o.length;t++){let n=o[t],r=q[n.orientation],i=e,a=c,d,f;a/r<=i?(d=a,f=d/r):(f=i,d=f*r);let p=t*e+(e-f)/2;l.push({x:s+(c-d)/2,y:p,width:d,height:f,orientation:n.orientation}),u+=d*f}}}let d=J(t,l),f=u/(n*r)*100;return{videos:d,totalArea:u,efficiency:f}}function J(e,t){let n=Array(t.length),r=new Set,i=new Set;for(let a=0;a<t.length;a++){let o=t[a];for(let t=0;t<e.length;t++)if(!r.has(t)&&e[t].orientation===o.orientation){n[a]={...o,orientation:e[t].orientation},r.add(t),i.add(a);break}}let a=[];for(let e=0;e<t.length;e++)i.has(e)||a.push(e);let o=0;for(let i=0;i<e.length;i++)if(!r.has(i)&&o<a.length){let r=a[o];n[r]={...t[r],orientation:e[i].orientation},o++}return n}function qt(e,t,n,r){if(e.portrait>0)return Kt(e,t,n,r);if(e.landscape===2&&e.wide===1){let e=q.landscape,i=q.wide,a=n,o=a/i,s=r-o;s*e;let c=n/2,l=c/e,u,d,f,p;if(o<=r&&l<=s)u=a,d=o,f=c,p=l;else{let t=r/(o+l),n=Math.min(1,t);d=o*n,u=d*i,p=l*n,f=p*e}let m=(n-u)/2,h=d+(s-p)/2,g=J(t,[{x:m,y:0,width:u,height:d,orientation:`wide`},{x:0,y:h,width:f,height:p,orientation:`landscape`},{x:f,y:h,width:f,height:p,orientation:`landscape`}]),_=u*d+f*p*2;return{videos:g,totalArea:_,efficiency:_/(n*r)*100}}if(e.landscape===1&&e.wide===2){let e=q.landscape,i=q.wide,a=n/2,o=a/i,s=r-o,c=s*e,l,u,d,f;if(o<=r&&c<=n&&o+s<=r)l=a,u=o,d=c,f=s;else{let t=r/(o+s);l=a,u=o*t,f=s*t,d=f*e}let p=n/2,m=(n-d)/2,h=J(t,[{x:0,y:0,width:l,height:u,orientation:`wide`},{x:p,y:0,width:l,height:u,orientation:`wide`},{x:m,y:u,width:d,height:f,orientation:`landscape`}]),g=l*u*2+d*f;return{videos:h,totalArea:g,efficiency:g/(n*r)*100}}if(e.wide===3){let e=q.wide,i=n/2,a=i/e,o=r-a,s=o*e,c,l,u,d;if(a<=r&&s<=n&&a+o<=r)c=i,l=a,u=s,d=o;else{let t=r/(a+o);c=i,l=a*t,d=o*t,u=d*e,u>n&&(u=n,d=u/e)}let f=n/2,p=(n-u)/2,m=J(t,[{x:0,y:0,width:c,height:l,orientation:`wide`},{x:f,y:0,width:c,height:l,orientation:`wide`},{x:p,y:l,width:u,height:d,orientation:`wide`}]),h=c*l*2+u*d;return{videos:m,totalArea:h,efficiency:h/(n*r)*100}}if(e.landscape===3){let e=q.landscape,i=n/(e*1.5),a=Math.min(r,i),o=a/2,s=a,c=o*e,l=s*e,u=(r-a)/2,d=J(t,[{x:0,y:u,width:c,height:o,orientation:`landscape`},{x:0,y:u+o,width:c,height:o,orientation:`landscape`},{x:c,y:u,width:l,height:s,orientation:`landscape`}]),f=c*a+l*a;return{videos:d,totalArea:f,efficiency:f/(n*r)*100}}let i=[];if(e.landscape>0)for(let t=0;t<e.landscape;t++)i.push(`landscape`);if(e.wide>0)for(let t=0;t<e.wide;t++)i.push(`wide`);let a=i[0]||t[0].orientation,o=i[1]||t[1].orientation,s=i[2]||t[2].orientation,c=q[a],l=q[o],u=q[s],d=[()=>{let e=n*.6,t=n*.4,i=e/c,d=t/l,f=t/u,p=d+f;return i<=r&&p<=r?{positions:[{x:0,y:(r-i)/2,width:e,height:i,orientation:a},{x:e,y:0,width:t,height:d,orientation:o},{x:e,y:d,width:t,height:f,orientation:s}],totalArea:e*i+t*d+t*f}:null},()=>{let e=r*.5,t=r*.5,i=e*c,d=e*l,f=t*u;return i+d<=n&&f<=n?{positions:[{x:0,y:0,width:i,height:e,orientation:a},{x:i,y:0,width:d,height:e,orientation:o},{x:(n-f)/2,y:e,width:f,height:t,orientation:s}],totalArea:i*e+d*e+f*t}:null},()=>{let e=n/3,t=e/c,i=e/l,d=e/u;return Math.max(t,i,d)<=r?{positions:[{x:0,y:(r-t)/2,width:e,height:t,orientation:a},{x:e,y:(r-i)/2,width:e,height:i,orientation:o},{x:e*2,y:(r-d)/2,width:e,height:d,orientation:s}],totalArea:e*t+e*i+e*d}:null}],f=null,p=0;for(let e of d){let t=e();t&&t.totalArea>p&&(p=t.totalArea,f=t)}if(!f){let e=n/3,t=Math.min(e/c,r),i=Math.min(e/l,r),d=Math.min(e/u,r);f={positions:[{x:0,y:(r-t)/2,width:e,height:t,orientation:a},{x:e,y:(r-i)/2,width:e,height:i,orientation:o},{x:e*2,y:(r-d)/2,width:e,height:d,orientation:s}],totalArea:e*t+e*i+e*d}}let m=J(t,f.positions),h=f.totalArea/(n*r)*100;return{videos:m,totalArea:f.totalArea,efficiency:h}}function Jt(e,t,n,r){if(e.portrait>0)return Kt(e,t,n,r);let i=[];if(e.landscape>0)for(let t=0;t<e.landscape;t++)i.push(`landscape`);if(e.wide>0)for(let t=0;t<e.wide;t++)i.push(`wide`);let a=i[0]||t[0].orientation,o=i[1]||t[1].orientation,s=i[2]||t[2].orientation,c=i[3]||t[3].orientation,l=q[a],u=q[o],d=q[s],f=q[c],p=[()=>{let e=n/2,t=r/2,i=Math.min(e,t*l),p=i/l,m=Math.min(e,t*u),h=m/u,g=Math.min(e,t*d),_=g/d,v=Math.min(e,t*f),y=v/f;return{positions:[{x:(e-i)/2,y:(t-p)/2,width:i,height:p,orientation:a},{x:e+(e-m)/2,y:(t-h)/2,width:m,height:h,orientation:o},{x:(e-g)/2,y:t+(t-_)/2,width:g,height:_,orientation:s},{x:e+(e-v)/2,y:t+(t-y)/2,width:v,height:y,orientation:c}],totalArea:i*p+m*h+g*_+v*y}},()=>{let e=n*.6,t=n*.4,i=e/l,p=r/3,m=Math.min(t,p*u),h=m/u,g=Math.min(t,p*d),_=g/d,v=Math.min(t,p*f),y=v/f;return i<=r?{positions:[{x:0,y:(r-i)/2,width:e,height:i,orientation:a},{x:e,y:0,width:m,height:h,orientation:o},{x:e,y:p,width:g,height:_,orientation:s},{x:e,y:p*2,width:v,height:y,orientation:c}],totalArea:e*i+m*h+g*_+v*y}:null},()=>{let e=n/4,t=e/l,i=e/u,p=e/d,m=e/f;return Math.max(t,i,p,m)<=r?{positions:[{x:0,y:(r-t)/2,width:e,height:t,orientation:a},{x:e,y:(r-i)/2,width:e,height:i,orientation:o},{x:e*2,y:(r-p)/2,width:e,height:p,orientation:s},{x:e*3,y:(r-m)/2,width:e,height:m,orientation:c}],totalArea:e*t+e*i+e*p+e*m}:null}],m=null,h=0;for(let e of p){let t=e();t&&t.totalArea>h&&(h=t.totalArea,m=t)}if(!m){let e=n/2,t=r/2,i=Math.min(t,e/l),p=Math.min(t,e/u),h=Math.min(t,e/d),g=Math.min(t,e/f);m={positions:[{x:(e-e)/2,y:(t-i)/2,width:e,height:i,orientation:a},{x:e+(e-e)/2,y:(t-p)/2,width:e,height:p,orientation:o},{x:(e-e)/2,y:t+(t-h)/2,width:e,height:h,orientation:s},{x:e+(e-e)/2,y:t+(t-g)/2,width:e,height:g,orientation:c}],totalArea:e*i+e*p+e*h+e*g}}let g=J(t,m.positions),_=m.totalArea/(n*r)*100;return{videos:g,totalArea:m.totalArea,efficiency:_}}var Yt=(e,t)=>new Promise(n=>{if(e.iceGatheringState===`complete`){n();return}let r=!1,i=()=>{r||(r=!0,clearTimeout(o),e.removeEventListener(`icegatheringstatechange`,a),n())},a=()=>{e.iceGatheringState===`complete`&&i()},o=setTimeout(i,t);e.addEventListener(`icegatheringstatechange`,a)}),Xt=()=>typeof window<`u`&&typeof window.RTCPeerConnection==`function`,Zt=e=>/^a=candidate:\S+ \d+ udp /i.test(e.trim()),Qt=e=>e.split(`
`).filter(e=>!Zt(e)).join(`
`),$t=e=>typeof e?.candidate==`string`&&/ udp /i.test(e.candidate),en=e=>e===`tcp`?[`tcp`]:e===`udp`?[`udp`]:[`udp`,`tcp`],tn=async e=>{if(typeof e.getStats!=`function`)return null;let t=await e.getStats(),n=null;return t.forEach(e=>{e.type===`inbound-rtp`&&(e.kind===`video`||e.mediaType===`video`)&&(n=e)}),n},nn=({entityId:e,enabled:t,signaling:n,transport:r=`auto`})=>{let[i,a]=F.useState(null),[o,s]=F.useState(`idle`),[c,l]=F.useState(null),[u,d]=F.useState(null);return F.useEffect(()=>{if(!t||!e||!n){a(null),s(`idle`),l(null),d(null);return}if(!Xt()){s(`failed`),l(`WebRTC wird von diesem Browser nicht unterstützt`);return}let i=!1,o=`WebRTC[${e}]`,c=en(r),u=null,f=t=>new Promise(r=>{let i=null,c=null,l=null,f=null,p=null,m=!1,h=!1,g=[],_=n.createRequestId(),v=t===`tcp`,y=()=>{if(c&&clearTimeout(c),l&&clearTimeout(l),f&&clearInterval(f),c=l=f=null,n.closeSession(_),i){try{i.ontrack=null,i.onicecandidate=null,i.onconnectionstatechange=null,i.close()}catch{}i=null}},b=e=>{h||(h=!0,e!==null&&y(),r(e))};u={teardown:()=>{h=!0,y()}};let x=()=>{if(p)for(;g.length>0;)n.sendCandidate(e,_,p,g.shift())},S=()=>{let e=async()=>{if(!h&&i)try{let e=await tn(i);e&&e.framesDecoded>0&&(l&&clearTimeout(l),f&&clearInterval(f),l=f=null,B.debug(`${o} decoding frames via ${t}`),d(t),s(`playing`),b(null))}catch(e){B.debug(`${o} getStats failed: ${e.message}`)}};f=setInterval(e,500),l=setTimeout(async()=>{if(h||!i)return;let e=await tn(i).catch(()=>null),n=e?.packetsLost??`?`,r=e?.packetsReceived??`?`;b(`Verbunden über ${t}, aber kein Bild dekodiert (Pakete: ${r} empfangen, ${n} verloren)`)},Ge),e()},C=async e=>{if(!h&&i)switch(e.type){case`session`:p=e.session_id,x();break;case`answer`:try{let n=v?Qt(e.answer):e.answer;await i.setRemoteDescription({type:`answer`,sdp:n}),B.debug(`${o} remote description set (${t})`)}catch(e){b(`Antwort konnte nicht verarbeitet werden: ${e.message}`)}break;case`candidate`:if(e.candidate&&!(v&&$t(e.candidate)))try{await i.addIceCandidate(e.candidate)}catch(e){B.debug(`${o} ignoring remote candidate: ${e.message}`)}break;case`error`:b(e.message||e.code||`Unbekannter WebRTC-Fehler`)}};(async()=>{let r={};try{let t=await n.getClientConfig(e);r=t.configuration||{},m=t.getCandidatesUpfront}catch(e){B.debug(`${o} no client config, using defaults: ${e.message}`)}if(!h){try{i=new RTCPeerConnection(r)}catch(e){b(`RTCPeerConnection konnte nicht erstellt werden: ${e.message}`);return}i.addTransceiver(`video`,{direction:`recvonly`}),i.addTransceiver(`audio`,{direction:`recvonly`}),i.ontrack=e=>{if(h)return;let t=e.streams&&e.streams[0];a(t||(t=>{let n=t||new MediaStream;return n.addTrack(e.track),n}))},i.onicecandidate=e=>{if(h||m||!e.candidate)return;let t=e.candidate.toJSON?e.candidate.toJSON():e.candidate;g.push(t),x()},i.onconnectionstatechange=()=>{if(h||!i)return;let e=i.connectionState;B.debug(`${o} connection state (${t}): ${e}`),e===`connected`?(c&&=(clearTimeout(c),null),S()):(e===`failed`||e===`closed`)&&b(`Verbindung über ${t} fehlgeschlagen`)},c=setTimeout(()=>{b(`Zeitüberschreitung beim Verbindungsaufbau (${t})`)},Ue);try{let r=await i.createOffer();if(await i.setLocalDescription(r),await Yt(i,We),h||!i)return;await n.sendOffer(e,_,i.localDescription.sdp,C),B.debug(`${o} offer sent (${t})`)}catch(e){b(`Angebot konnte nicht gesendet werden: ${e.message}`)}}})()});return(async()=>{s(`connecting`),l(null),a(null),d(null);let e=null;for(let t of c){if(i)return;a(null);let n=await f(t);if(i||n===null)return;e=n,B.warn(`${o} attempt via ${t} failed: ${n}`)}l(e||`WebRTC nicht verfügbar`),s(`failed`)})(),()=>{i=!0,u&&u.teardown()}},[e,t,n,r]),{stream:i,status:o,error:c,transport:u}},rn=({tokensLoading:e,tokensError:t,refreshTokens:n})=>(0,L.jsx)(`div`,{className:`token-error`,children:e?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(I,{path:x,size:`48px`,color:`#ffffff`,className:`loading-spinner`}),(0,L.jsx)(`div`,{children:`Lade Token...`})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{children:t||`Kamera-Token nicht verfügbar`}),(0,L.jsx)(`button`,{onClick:e=>{e.stopPropagation(),n()},children:`Token neu laden`})]})}),an=({camera:e,orientation:t,index:n,accessToken:r,tokensLoading:i,tokensError:a,refreshTokens:o,showDoorCams:s,cameraImgRefs:c,config:l})=>{let u=!!r,d=Vt(e.entity_id,r,l);return!u||!d?(0,L.jsx)(rn,{tokensLoading:i,tokensError:a,refreshTokens:o}):s?(0,L.jsx)(`img`,{ref:t=>{let r=`${e.entity_id}-${n}`;t?c.current.set(r,t):c.current.delete(r)},src:d,className:t,alt:`Camera stream`,crossOrigin:`anonymous`},`${e.entity_id}-${n}`):null},on=({stream:e,orientation:t})=>{let n=F.useRef(null);return F.useEffect(()=>{let t=n.current;if(t){if(t.srcObject=e||null,e){let e=t.play();e&&typeof e.catch==`function`&&e.catch(()=>{})}return()=>{t.srcObject=null}}},[e]),(0,L.jsx)(`video`,{ref:n,className:t,autoPlay:!0,muted:!0,playsInline:!0,disablePictureInPicture:!0})},sn=({camera:e,orientation:t,index:n,style:r,streamMode:i,webrtcTransport:a,signaling:o,showDoorCams:s,openDoor:c,...l})=>{let u=i!==`mjpeg`&&!!o,{stream:d,status:f,error:p,transport:m}=nn({entityId:e.entity_id,enabled:u&&s,signaling:o,transport:a}),h=u&&(f===`connecting`||f===`playing`);return(0,L.jsxs)(`div`,{className:`video-container`,style:r,"data-stream":h?`webrtc`:`mjpeg`,children:[h&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(on,{stream:d,orientation:t}),f===`connecting`&&(0,L.jsxs)(`div`,{className:`stream-status`,children:[(0,L.jsx)(I,{path:`M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z`,size:`40px`,color:`#ffffff`,className:`loading-spinner`}),(0,L.jsx)(`div`,{children:`Verbinde…`})]})]}),(!u||f===`failed`)&&(0,L.jsx)(an,{camera:e,orientation:t,index:n,showDoorCams:s,...l}),(0,L.jsx)(`div`,{className:`stream-badge`,title:p||void 0,children:h?m?`WebRTC (${m.toUpperCase()})`:`WebRTC`:u?`MJPEG (Fallback)`:`MJPEG`}),(0,L.jsx)(`div`,{className:`video-overlay`,onClick:()=>c()})]})},cn=({cameras:e,accessTokens:t,tokensLoading:n,tokensError:r,refreshTokens:i,showDoorCams:a,cameraImgRefs:o,openDoor:s,config:c,signaling:l=null,streamMode:u=`webrtc`,webrtcTransport:d=`auto`})=>{if(e.length===0)return null;let f=e.map(e=>({orientation:e.orientation||`landscape`})),p=window.innerWidth,m=Ut(f,p,window.innerHeight-10),h={portrait:e.filter(e=>(e.orientation||`landscape`)===`portrait`),landscape:e.filter(e=>(e.orientation||`landscape`)===`landscape`),wide:e.filter(e=>e.orientation===`wide`)},g={portrait:0,landscape:0,wide:0};return m.videos.map((e,f)=>{let p=e.orientation,m=g[p],_=h[p][m];if(!_)return null;g[p]++;let v={left:`${e.x}px`,top:`${e.y}px`,width:`${e.width}px`,height:`${e.height}px`};return(0,L.jsx)(sn,{camera:_,orientation:p,index:f,style:v,streamMode:u,webrtcTransport:d,signaling:l,showDoorCams:a,openDoor:s,accessToken:t[_.entity_id]||null,tokensLoading:n,tokensError:r,refreshTokens:i,cameraImgRefs:o,config:c},`${_.entity_id}-${p}-${m}-${f}`)})},ln=class{constructor(e={}){this.url=Mt(e),this.socket=null,this.openPromise=null,this.closed=!1,this.nextRequestId=1,this.pendingConfigs=new Map,this.eventHandlers=new Map}createRequestId(){return`cam-${Date.now().toString(36)}-${this.nextRequestId++}`}connect(){return this.closed?Promise.reject(Error(`Signaling client is closed`)):this.openPromise?this.openPromise:this.url?(this.openPromise=new Promise((e,t)=>{let n=!1,r;try{r=new WebSocket(this.url)}catch(e){this.openPromise=null,t(e);return}this.socket=r;let i=setTimeout(()=>{if(!n){n=!0;try{r.close()}catch{}this.openPromise=null,t(Error(`Signaling connection timed out`))}},He);r.onopen=()=>{n||(n=!0,clearTimeout(i),B.debug(`WebRTC signaling connected`),e(r))},r.onerror=e=>{B.debug(`WebRTC signaling socket error`,e)},r.onclose=e=>{B.debug(`WebRTC signaling closed (code: ${e.code})`),n||(n=!0,clearTimeout(i),this.openPromise=null,t(Error(`Signaling connection closed before it opened`))),this._failAll(Error(`Signaling connection closed`)),this.socket===r&&(this.socket=null,this.openPromise=null)},r.onmessage=e=>this._handleMessage(e)}),this.openPromise):Promise.reject(Error(`Backend WebSocket URL is not available`))}_handleMessage(e){let t;try{t=JSON.parse(e.data)}catch{return}let n=t.request_id;if(t.type===`webrtc_client_config`){let e=this.pendingConfigs.get(n);e&&(clearTimeout(e.timer),this.pendingConfigs.delete(n),e.resolve({configuration:t.configuration||{},getCandidatesUpfront:!!t.get_candidates_upfront}))}else if(t.type===`webrtc_event`){let e=this.eventHandlers.get(n);e&&e(t.event||{})}else if(t.type===`webrtc_error`){let e=this.pendingConfigs.get(n);if(e){clearTimeout(e.timer),this.pendingConfigs.delete(n),e.reject(Error(t.message||t.code||`WebRTC error`));return}let r=this.eventHandlers.get(n);r&&r({type:`error`,code:t.code,message:t.message})}else t.type===`error`&&B.warn(`WebRTC signaling protocol error:`,t.message)}async _send(e){let t=await this.connect();if(t.readyState!==WebSocket.OPEN)throw Error(`Signaling socket is not open`);t.send(JSON.stringify(e))}getClientConfig(e){let t=this.createRequestId();return new Promise((n,r)=>{let i=setTimeout(()=>{this.pendingConfigs.delete(t),r(Error(`Timed out waiting for WebRTC client config`))},He);this.pendingConfigs.set(t,{resolve:n,reject:r,timer:i}),this._send({type:`webrtc_client_config`,entity_id:e,request_id:t}).catch(e=>{clearTimeout(i),this.pendingConfigs.delete(t),r(e)})})}async sendOffer(e,t,n,r){this.eventHandlers.set(t,r);try{await this._send({type:`webrtc_offer`,entity_id:e,request_id:t,offer:n})}catch(e){throw this.eventHandlers.delete(t),e}}sendCandidate(e,t,n,r){return this._send({type:`webrtc_candidate`,entity_id:e,request_id:t,session_id:n,candidate:r}).catch(e=>B.debug(`Failed to send ICE candidate:`,e))}closeSession(e){this.eventHandlers.delete(e);let t=this.socket;if(t&&t.readyState===WebSocket.OPEN)try{t.send(JSON.stringify({type:`webrtc_close`,request_id:e}))}catch{}}_failAll(e){this.pendingConfigs.forEach(({reject:t,timer:n})=>{clearTimeout(n),t(e)}),this.pendingConfigs.clear(),this.eventHandlers.forEach(t=>{try{t({type:`error`,code:`signaling_closed`,message:e.message})}catch{}}),this.eventHandlers.clear()}close(){this.closed=!0;let e=this.socket;if(this.socket=null,this.openPromise=null,this._failAll(Error(`Signaling client closed`)),e)try{e.close()}catch{}}},un=xe(Lt.default),dn=j.div`
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

        video {
            background-color: #000;
        }

        /* Spinner while the WebRTC connection is being negotiated */
        .stream-status {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            color: white;
            background-color: rgba(0, 0, 0, 0.35);
            pointer-events: none;

            .loading-spinner {
                animation: spin 1s infinite linear;
            }
        }

        /* Small badge telling which transport is active (WebRTC vs. MJPEG fallback) */
        .stream-badge {
            position: absolute;
            left: 8px;
            bottom: 8px;
            padding: 2px 8px;
            border-radius: 8px;
            font-size: 11px;
            letter-spacing: 0.02em;
            color: rgba(255, 255, 255, 0.85);
            background-color: rgba(0, 0, 0, 0.45);
            pointer-events: none;
            z-index: 2;
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
`,fn=()=>{let e=V(),t=e.ENABLE_DOORBELL||!1,n=e.DOORBELL_CAMERAS||[],r=e.DOORBELL_STREAM_MODE===`mjpeg`?`mjpeg`:`webrtc`,i=[`udp`,`tcp`].includes(e.DOORBELL_WEBRTC_TRANSPORT)?e.DOORBELL_WEBRTC_TRANSPORT:`auto`,[a,o]=F.useState(!1),[s,c]=Ft(),[l,u]=F.useState(void 0),[d,f]=F.useState(100),[p,m]=F.useState(`0`),h=F.useMemo(()=>n.map(e=>e.entity_id).filter(Boolean),[n]),[g,_]=F.useState({}),[v,y]=F.useState(!1),[b,x]=F.useState(null),S=F.useRef(e);F.useEffect(()=>{S.current=e},[e]);let C=F.useRef(null);F.useEffect(()=>{if(a&&h.length>0){let e=new AbortController;return y(!0),x(null),Bt(h,S.current,e.signal).then(({tokens:t,error:n})=>{e.signal.aborted||(_(t),x(n),y(!1))}).catch(t=>{e.signal.aborted||(B.error(`Failed to fetch camera tokens:`,t),x(G(t)),y(!1))}),()=>{e.abort()}}a||(_({}),x(null),C.current?.abort())},[a,h.join(`,`)]);let[w,T]=F.useState(null);F.useEffect(()=>{if(!a||r!==`webrtc`||h.length===0)return;let e=new ln(S.current);return T(e),()=>{e.close(),T(null)}},[a,r,h.join(`,`)]);let E=F.useCallback(async()=>{if(h.length===0)return;C.current?.abort();let e=new AbortController;C.current=e,y(!0),x(null);try{let{tokens:t,error:n}=await Bt(h,S.current,e.signal);e.signal.aborted||(_(t),x(n))}catch(t){e.signal.aborted||(B.error(`Failed to refresh camera tokens:`,t),x(G(t)))}finally{e.signal.aborted||y(!1)}},[h]),{isConnected:D}=xt(),O=F.useRef(!1);F.useEffect(()=>{D?O.current&&(O.current=!1,a&&h.length>0&&(B.debug(`Connection restored while doorbell overlay open — refreshing camera tokens`),E())):O.current=!0},[D,a,h,E]),F.useEffect(()=>{if(!a||h.length===0)return;let e=setInterval(()=>{B.debug(`Periodic camera token refresh`),E()},Ve);return()=>clearInterval(e)},[a,h,E]);let[k,A]=F.useState(null),ee=F.useRef(new Map),te=F.useCallback(()=>{ee.current.forEach(e=>{e&&(e.src=`data:,`)}),ee.current.clear()},[]),ne=F.useRef(0),re=F.useRef(!1),j=F.useCallback(()=>{ne.current=Date.now(),re.current=!0,te(),o(!1),A(null)},[te]);F.useEffect(()=>{if(s===`off`){if(re.current=!1,a){let e=window.setTimeout(()=>{te(),o(!1),u(void 0)},ze);return u(e),m(ze+`ms`),f(0),()=>{e&&window.clearTimeout(e)}}}else if(s===`on`){let e=Date.now()-ne.current<Be;if(re.current||e)return;m(0),f(100),o(!0)}},[s,a]),F.useEffect(()=>{s===`on`&&l!==void 0&&(window.clearTimeout(l),m(0),f(100),u(void 0))},[l,s]);let ie=()=>{k===null?A(`confirm`):k===`confirm`&&(A(`opening`),It(e),setTimeout(()=>A(null),2e3))};return F.useEffect(()=>{if(k===`confirm`){let e=setTimeout(()=>{A(null)},3e3);return()=>{clearTimeout(e)}}},[k]),F.useEffect(()=>{a||A(null)},[a]),t?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`button`,{onClick:()=>{a?j():o(!0)},children:`CCTV`}),(0,L.jsx)(R,{visible:a,onClick:ie,onClose:j,fullsize:!0,children:(0,L.jsxs)(dn,{onClick:ie,children:[(0,L.jsx)(un,{completed:d,height:10,bgColor:l===void 0?`none`:`#c0bfbf`,isLabelVisible:!1,baseBgColor:``,transitionDuration:p,transitionTimingFunction:`linear`}),(0,L.jsx)(`div`,{className:`grid`,children:(0,L.jsx)(cn,{cameras:n,accessTokens:g,tokensLoading:v,tokensError:b,refreshTokens:E,showDoorCams:a,cameraImgRefs:ee,openDoor:ie,config:e,signaling:w,streamMode:r,webrtcTransport:i})}),k===`confirm`&&(0,L.jsx)(`div`,{className:`open-door confirm`,children:`Haustür öffnen?`}),k===`opening`&&(0,L.jsx)(`div`,{className:`open-door opening`,children:`Öffne die Tür!`})]})})]}):null},pn=j.div`
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

    .monthButton {
      margin-left: 10px;
      padding: 4px;
      border-radius: 6px;
      touch-action: manipulation;

      &:active { background-color: #3a3a44; }
      &:focus-visible { outline: solid 2px #ffffff; outline-offset: 2px; }
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

`,mn=(0,F.memo)(({nextWeek:e,previousWeek:t,startWeekWithToday:n,onOpenMonth:r})=>(0,L.jsxs)(pn,{children:[(0,L.jsxs)(`div`,{className:`buttons`,children:[(0,L.jsx)(I,{path:ae,size:`32px`,color:`#ffffff`,onClick:t}),(0,L.jsx)(I,{path:ne,size:`32px`,color:`#ffffff`,onClick:e}),(0,L.jsx)(`button`,{onClick:n,children:`Today`}),(0,L.jsx)(I,{path:ce,size:`30px`,color:`#ffffff`,className:`monthButton`,role:`button`,tabIndex:0,"aria-label":`Monatsübersicht`,onClick:r,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r?.())}}),(0,L.jsx)(fn,{})]}),(0,L.jsx)(jt,{}),(0,L.jsx)(I,{path:x,size:`32px`,color:`#ffffff`,className:N(`indicator`)})]})),hn=5e3,Y=class extends F.Component{constructor(e){super(e),this.state={hasError:!1},this.reloadTimerId=null}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){let n=e?.toString()||`Unknown error`,r=this.props.label;B.error(`ErrorBoundary caught an error${r?` (${r})`:``}: ${n}`,{boundaryLabel:r,errorName:e?.name,errorMessage:n,errorStack:e?.stack||``,componentStack:t?.componentStack||``});let i=this.props.autoReload===!0,a=i?`${r?`${r}: `:``}Ein Fehler ist aufgetreten — die App lädt sich gleich neu …`:`${r?`${r}: `:``}Bereich konnte nicht geladen werden`;oe.error(a,{duration:hn}),i&&(this.reloadTimerId=window.setTimeout(()=>{window.location.reload()},hn))}componentWillUnmount(){this.reloadTimerId&&=(window.clearTimeout(this.reloadTimerId),null)}render(){return this.state.hasError?null:this.props.children}},gn=e(ge(),1),_n=6e4,vn=(e=_n,t=void 0)=>{let[n,r]=F.useState(!0);return F.useEffect(()=>{let t=setInterval(()=>{r(e=>!e)},e);return()=>{clearInterval(t)}},[e,t]),n},yn={mdiDelete:pe,mdiCake:ee},bn=e=>!e||typeof e!=`string`?void 0:yn[e.startsWith(`mdi`)?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`]||void 0,xn=[1,-1,2,3],Sn=(e,t,n,r,i,a)=>P(i(e.name,{start:t.toISO(),end:n.toISO()}),{timeout:65e3,signal:a}).then(n=>{n.data&&Array.isArray(n.data)&&n.data.forEach(n=>{let i=`dateTime`in n.start?M.fromISO(n.start.dateTime):M.fromSQL(n.start.date),a;a=`dateTime`in n.end?Math.floor(M.fromISO(n.end.dateTime).diff(t,`days`).as(`days`)):Math.floor(M.fromSQL(n.end.date).diff(t,`days`).as(`days`))-1;let o=Math.floor(i.diff(t,`days`).as(`days`));a>=r.length&&(a=r.length-1);let s=`dateTime`in n.start?`events`:`allDay`;if(o>=0&&o<r.length)for(let t=o;t<=a;t++)r[t][s]=[...r[t][s],{...n,icon:e.icon}]})}).catch(e=>{if(!(P.isCancel(e)||e.name===`AbortError`||e.code===`ERR_CANCELED`))throw e}),Cn=new Map,wn=3e5,Tn=new Map,En=e=>e.toISODate(),Dn=e=>{let t=[0,1,2,3,4,5].map(t=>e.plus({days:t}).startOf(`day`));return t[6]=e.plus({days:6}).endOf(`day`),t},On=e=>{let t=Cn.get(En(e));if(t&&Date.now()-t.timestamp<wn)return t.data},kn=e=>{Cn.delete(En(e))},An=(e,t,n)=>{let r=En(e),i=Tn.get(r);if(i)return i;let a=Dn(e),o=a.map(e=>({date:e,allDay:[],events:[]})),s=Promise.all(t.map(e=>Sn(e,a[0],a[6],o,n,void 0))).then(()=>(Cn.set(r,{data:o,timestamp:Date.now()}),o)).finally(()=>{Tn.delete(r)});return Tn.set(r,s),s},jn=0,Mn=(e,t,n)=>{let r=++jn;(async()=>{for(let i of xn){if(r!==jn)return;let a=e.plus({days:i*7});if(!On(a))try{await An(a,t,n)}catch{}}})()},Nn=(e,t,n,r,i,a,o,s)=>{let c=()=>!s.current||r.current!==En(e);if(!a||a.length===0){B.warn(`loadAll: No calendars configured, skipping fetch`,{calendars:a}),s.current&&(t(Dn(e).map(e=>({date:e,allDay:[],events:[]}))),n(!1));return}let l=On(e);if(l){s.current&&(t(l),i(!1)),Mn(e,a,o);return}B.debug(`loadAll: Starting calendar fetch`,{calendarsCount:a.length,calendars:a.map(e=>e.name),startDate:e.toISO()});try{s.current&&n(!0),An(e,a,o).then(n=>{c()||(t(n),i(!1)),Mn(e,a,o)}).catch(e=>{c()||i(G(e))}).finally(()=>{c()||n(!1)})}catch(e){c()||(i(G(e)),n(!1))}},Pn=[],Fn=e=>{let t=V(),n=t.CALENDARS||[];F.useEffect(()=>{B.debug(`useCalendarData: config changed`,{hasCALENDARS:`CALENDARS`in t,CALENDARS:t.CALENDARS,CALENDARSCount:Array.isArray(t.CALENDARS)?t.CALENDARS.length:`not array`,configKeys:Object.keys(t)})},[t]);let r=F.useMemo(()=>{let e=n.map(e=>({name:e.name,icon:bn(e.icon)}));return B.debug(`Processing calendars from config (memo update):`,{CALENDARS:n,count:n.length,processedCount:e.length,processed:e.map(e=>e.name)}),e},[n]);F.useEffect(()=>{B.debug(`CALENDARS array changed:`,{CALENDARS:n,count:n.length,calendarsMemoCount:r.length})},[n,r.length]);let i=F.useCallback(e=>{let n=K(`/api/calendars/${e}`,t);return B.debug(`Building calendar URL for ${e}:`,n),n},[t]),a=F.useCallback((e,t)=>{let n=`${i(e)}?${gn.default.stringify(t)}`;return B.debug(`Full calendar URL for ${e}:`,n),n},[i]),[o,s]=F.useState(Pn),[,c]=F.useState(!1),[l,u]=F.useState(!1),[d,f]=F.useState(null),p=(0,F.useRef)(null),m=(0,F.useRef)(!0);F.useEffect(()=>(m.current=!0,()=>{m.current=!1}),[]);let h=vn(6e4,`Calendar`),g=(0,F.useRef)(h);return F.useEffect(()=>{if(B.debug(`useCalendarData effect triggered:`,{startDate:e?.toISO(),calendarsCount:r.length,calendars:r.map(e=>e.name),hasStartDate:e!==void 0,hasCalendars:r.length>0}),e!==void 0&&r.length>0){let t=d===null||!d.equals(e),n=g.current!==h;g.current=h,p.current=En(e),t?(s(On(e)||Pn),f(e)):n&&kn(e),B.debug(`useCalendarData: Calling loadAll`,{startDate:e.toISO(),calendarsCount:r.length,isRefresh:n}),Nn(e,s,c,p,u,r,a,m)}else e===void 0&&B.debug(`useCalendarData: startDate is undefined, skipping fetch`),r.length===0&&B.debug(`useCalendarData: No calendars configured yet, skipping fetch`)},[e,r,a,h]),[o,l]};function In(e){let[t,n]=F.useState(!1);function r({key:t}){t===e&&n(!0)}let i=({key:t})=>{t===e&&n(!1)};return F.useEffect(()=>(window.addEventListener(`keydown`,r),window.addEventListener(`keyup`,i),()=>{window.removeEventListener(`keydown`,r),window.removeEventListener(`keyup`,i)}),[e]),t}var Ln=()=>{let e=new Date,t=(e.getDay()+6)%7,n=new Date(e.setDate(e.getDate()-t));return M.fromJSDate(n)},Rn=e=>{let t=()=>e(e=>e.plus({days:7})),n=In(`ArrowRight`);F.useEffect(()=>{n&&t()},[n]);let r=()=>e(e=>e.minus({days:7})),i=In(`ArrowLeft`);F.useEffect(()=>{i&&r()},[i]);let a=()=>e(Ln()),o=In(`t`);return F.useEffect(()=>{o&&a()},[o]),{nextWeek:t,previousWeek:r,startWeekWithToday:a}},zn=50,Bn=e=>{let t=(0,F.useRef)(null),n=(0,F.useRef)(null);return{onTouchStart:e=>{let r=e.targetTouches[0];t.current={x:r.clientX,y:r.clientY},n.current=null},onTouchMove:e=>{let t=e.targetTouches[0];n.current={x:t.clientX,y:t.clientY}},onTouchEnd:()=>{if(!t.current||!n.current)return;let r=t.current.x-n.current.x,i=t.current.y-n.current.y;t.current=null,n.current=null,!(Math.abs(r)<=Math.abs(i))&&(r>zn?e.onSwipedLeft():r<-50&&e.onSwipedRight())}}},Vn=(e,t=Ye)=>{let[n,r]=(0,F.useState)(null),i=(0,F.useRef)(null),a=(0,F.useCallback)(e=>{i.current=e,r(e)},[]),[o,s]=(0,F.useState)(!0),c=(0,F.useRef)(null),l=()=>{c.current&&=(clearTimeout(c.current),null)},u=(0,F.useCallback)(()=>{l(),s(!0)},[]),d=(0,F.useCallback)(()=>{s(!1),l(),c.current=setTimeout(()=>s(!0),t)},[t]);return(0,F.useEffect)(()=>{if(!n)return;let e=()=>d();return n.addEventListener(`wheel`,e,{passive:!0}),n.addEventListener(`touchstart`,e,{passive:!0}),n.addEventListener(`pointerdown`,e,{passive:!0}),()=>{n.removeEventListener(`wheel`,e),n.removeEventListener(`touchstart`,e),n.removeEventListener(`pointerdown`,e)}},[n,d]),(0,F.useEffect)(()=>{if(!n||!o||e==null)return;let t=Math.max(0,e-n.clientHeight/2);Math.abs(n.scrollTop-t)<2||n.scrollTo({top:t,behavior:window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`})},[n,o,e]),(0,F.useEffect)(()=>l,[]),{ref:a,auto:o,resume:u}},X={bjoern:{label:`Björn`,color:`#3f8a6e`,tile:`#2b4f43`,text:`#6fc7a3`},swantje:{label:`Swantje`,color:`#7d6bb0`,tile:`#413761`,text:`#b3a2e0`},norell:{label:`Norell`,color:`#4a90b8`,tile:`#31485a`,text:`#79bde2`},hayo:{label:`Hayo`,color:`#d98c3f`,tile:`#56412a`,text:`#eeab63`},family:{label:`Familie`,color:`#5a5a62`,tile:`#3a3a44`,text:`#a9a7b0`}},Z={color:`#c9553d`,tile:`#4a2b25`,text:`#f0b4a6`},Hn=[[`bjoern`,/Bj(?:ö|o|oe)rn/i],[`swantje`,/Swantje/i],[`norell`,/Norell/i],[`hayo`,/Hayo/i]],Un=/^\s*(Bj(?:ö|o|oe)rn|Swantje|Norell|Hayo)\s+(in|bei|@)\s+\S/i,Wn=/Sync aus Hockey Norell/i,Gn=[{key:`hockey`,pattern:/🏑|WU10|MTHC|hockey/i,icon:`🏑`,label:`Hockey`},{key:`schwimmen`,pattern:/schwimm/i,icon:`🏊`,label:`Schwimmen`},{key:`geburtstag`,pattern:/geburtstag|🎂/i,icon:`🎂`,label:`Geburtstag`},{key:`schule`,pattern:/🏫|schul|klasse\s*\d|elternabend|elternnachmittag|GBS/i,icon:`🎒`,label:`Schule`},{key:`kita`,pattern:/kita|vorschul/i,icon:`🧸`,label:`Kita`},{key:`arzt`,pattern:/arzt|hausarzt|physio|blutabnahme|impf|zahn/i,icon:`🩺`,label:`Arzt`},{key:`musik`,pattern:/klavier|musikschule/i,icon:`🎹`,label:`Musik`},{key:`haushalt`,pattern:/^Irma/i,icon:`🧹`,label:`Haushalt`},{key:`betreuung`,pattern:/Oma-Tag|Opa-Tag/i,icon:`👵`,label:`Betreuung`}],Kn=[{pattern:/gelbe?\s+(wertstoff|sack)/i,label:`Gelber Sack`,color:`#c9a227`},{pattern:/bio/i,label:`Garten`,color:`#5c8a3a`},{pattern:/papier|blaue/i,label:`Papier`,color:`#3f74b0`},{pattern:/restmüll|schwarze/i,label:`Restmüll`,color:`#6e6e78`}],qn=e=>{let t=(e||``).trim();if(!/^Abfuhr/i.test(t))return t.replace(/^(?:\p{Extended_Pictographic}️?\s*)+/u,``).trim()||t;let n=Kn.find(({pattern:e})=>e.test(t));return n?n.label:t.replace(/^Abfuhr\s+/i,``)},Jn=e=>{let t=(e||``).trim();if(!/^Abfuhr/i.test(t))return null;let n=Kn.find(({pattern:e})=>e.test(t));return n?n.color:null},Q=e=>{let t=e&&e.summary||``,n=e&&e.description||``,r=Gn.find(({pattern:e})=>e.test(t))||null,i=Hn.filter(([,e])=>e.test(t)).map(([e])=>e),a=r&&r.key===`hockey`;(Wn.test(n)||a)&&!i.includes(`norell`)&&i.push(`norell`);let o=t.match(Un),s=o?/^bj/i.test(o[1])?`bjoern`:o[1].toLowerCase():null;return{persons:i,primary:i[0]||`family`,away:s,activity:r?r.key:s?`abwesend`:null,icon:s?`✈️`:r?r.icon:null,title:qn(t),wasteColor:Jn(t)}},Yn=26,Xn=e=>{let t=M.fromISO(e);return t.isValid?t.hour+t.minute/60+t.second/3600:null},Zn=e=>(e-6)*62,Qn=()=>1054,$n=e=>{let t=(e||[]).map(e=>{let t=Xn(e?.start?.dateTime),n=Xn(e?.end?.dateTime);return t===null?null:{event:e,startHour:t,endHour:n===null||n<t?23:n}}).filter(Boolean).sort((e,t)=>e.startHour-t.startHour||t.endHour-e.endHour),n=[],r=t.map(e=>{let t=n.findIndex(t=>t<=e.startHour+1e-6);t===-1&&(t=n.length,n.push(0)),n[t]=e.endHour;let r=Math.max(e.startHour,6),i=Math.min(e.endHour,23),a=Zn(r),o=Math.max(Zn(i)-a,Yn);return{event:e.event,top:a,height:o,lane:t}}),i=n.length||1;return r.map(e=>({...e,lanes:i}))},er=2,tr=(e,t)=>{if(!t||t<2)return{left:`3px`,width:`calc(100% - 6px)`};if(t<=er){let n=100/t;return{left:`calc(${e*n}% + 3px)`,width:`calc(${n}% - 6px)`}}let n=100/t,r=e*n,i=Math.min(n*1.25,100-r);return{left:`calc(${r}% + 3px)`,width:`calc(${i}% - 6px)`}},nr=(e,t)=>{let n=new Map;return(e||[]).forEach((e,r)=>{(e?.allDay||[]).forEach(e=>{if(t&&!t(e))return;let i=e.uid||e.summary,a=n.get(i);a?a.span=r-a.startIndex+1:n.set(i,{event:e,startIndex:r,span:1})})}),[...n.values()]},rr=(e=M.now())=>{let t=e.hour+e.minute/60;return t<6||t>23?null:Zn(t)},ir=`"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`,ar=(e,t)=>{let n=e.replace(`#`,``);return`rgba(${parseInt(n.slice(0,2),16)}, ${parseInt(n.slice(2,4),16)}, ${parseInt(n.slice(4,6),16)}, ${t})`},or=j.div`
  --accent: ${X.family.color};

  position: relative;
  min-width: 0;
  padding: 26px 30px 28px 34px;
  /* Der negative Rand hebt das Panel-Padding auf, damit der Farbstreifen
     bündig an der Panelkante sitzt. Die Lesebreite setzt das Overlay
     selbst über die compact-Variante. */
  margin: -12px -24px;

  /* Der Farbstreifen sitzt am Panelrand, nicht am Inhalt. */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    border-radius: 3px;
    background: var(--accent);
  }

  .heading {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .iconWrap {
    width: 62px;
    height: 62px;
    border-radius: 18px;
    flex: none;
    display: grid;
    place-items: center;
    /* Hintergrund und Rahmen setzt die Komponente inline, weil die Farbe
       erst zur Laufzeit aus dem Termin folgt. */
  }

  .icon {
    font-size: 32px;
    line-height: 1;
    font-family: ${ir};
  }

  .titleBlock { min-width: 0; }

  h2 {
    font-size: 27px;
    font-weight: 600;
    margin: 0;
    line-height: 1.22;
    letter-spacing: -0.01em;
    overflow-wrap: anywhere;
    text-wrap: balance;
  }

  .who {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 9px;
  }

  .badge {
    font-size: 12.5px;
    font-weight: 600;
    padding: 3px 12px;
    border-radius: 20px;
    white-space: nowrap;
  }

  /* Die Zeitangabe ist die häufigste Frage — sie steht groß und allein,
     nicht als eine Zeile unter anderen. */
  .when {
    margin-top: 22px;
    padding: 14px 18px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.045);
    display: flex;
    align-items: baseline;
    gap: 14px;
    flex-wrap: wrap;
  }

  .clock {
    font-size: 27px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  .whenMeta {
    font-size: 14.5px;
    color: #b4b2ad;
    line-height: 1.4;
  }

  .duration {
    font-size: 13px;
    color: #8d8a84;
    font-variant-numeric: tabular-nums;
  }

  .facts {
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .fact {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 15.5px;
    line-height: 1.5;
  }

  .factIcon {
    font-size: 15px;
    line-height: 1.5;
    flex: none;
    opacity: 0.75;
    font-family: ${ir};
  }

  .factBody {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .note {
    white-space: pre-wrap;
    /* Lange Notizen (bis ~2500 Zeichen im Bestand) scrollen in sich selbst,
       damit Titel und Uhrzeit stehen bleiben. */
    max-height: 38vh;
    overflow-y: auto;
    padding-right: 10px;
    scrollbar-width: thin;
  }

  @media only screen and (max-width: 1200px) {
    padding: 20px 22px 22px 26px;
    h2 { font-size: 22px; }
    .clock { font-size: 22px; }
    .iconWrap { width: 52px; height: 52px; border-radius: 15px; }
    .icon { font-size: 26px; }
  }
`,sr=e=>e.toLocaleString({weekday:`long`,day:`numeric`,month:`long`}),cr=e=>M.fromISO(e).toLocaleString(M.TIME_24_SIMPLE),lr=(e,t)=>{let n=M.fromISO(e),r=M.fromISO(t);if(!n.isValid||!r.isValid)return null;let i=Math.round(r.diff(n,`minutes`).minutes);if(i<=0)return null;if(i<60)return`${i} min`;let a=Math.floor(i/60),o=i%60;return o===0?`${a} Std.`:`${a}:${String(o).padStart(2,`0`)} Std.`},ur=e=>e&&e.split(`
`).filter(e=>!/^\s*(Source-UID:|\(Sync aus )/i.test(e)).join(`
`).replace(/\n{3,}/g,`

`).trim()||null,dr=e=>e?/FREQ=DAILY/i.test(e)?`Jeden Tag`:/FREQ=WEEKLY/i.test(e)?`Jede Woche`:/FREQ=MONTHLY/i.test(e)?`Jeden Monat`:/FREQ=YEARLY/i.test(e)?`Jedes Jahr`:`Wiederkehrend`:null,fr=(e,t=M.now())=>{if(!e)return null;let n=e.startOf(`day`).diff(t.startOf(`day`),`days`).days;return n===0?`heute`:n===1?`morgen`:n===-1?`gestern`:null},pr=({event:e,day:t,onClose:n})=>{if(!e)return null;let{title:r,icon:i,persons:a,away:o}=Q(e),s=!e.start?.dateTime,c=s?null:lr(e.start.dateTime,e.end?.dateTime),l=dr(e.rrule),u=ur(e.description),d=fr(t),f=o?Z.color:X[a[0]||`family`].color,p=(e,t)=>({color:t,background:ar(e,.18),border:`solid 1px ${ar(e,.5)}`});return(0,L.jsx)(R,{visible:!0,onClick:n,compact:!0,children:(0,L.jsxs)(or,{style:{"--accent":f},children:[(0,L.jsxs)(`div`,{className:`heading`,children:[i&&(0,L.jsx)(`div`,{className:`iconWrap`,style:{background:ar(f,.26),border:`solid 1px ${ar(f,.45)}`},children:(0,L.jsx)(`span`,{className:`icon`,children:i})}),(0,L.jsxs)(`div`,{className:`titleBlock`,children:[(0,L.jsx)(`h2`,{children:r}),(0,L.jsxs)(`div`,{className:`who`,children:[o&&(0,L.jsxs)(`span`,{className:`badge`,style:p(Z.color,Z.text),children:[X[o].label,` ist außer Haus`]}),a.map(e=>(0,L.jsx)(`span`,{className:`badge`,style:p(X[e].color,X[e].text),children:X[e].label},e)),a.length===0&&!o&&(0,L.jsx)(`span`,{className:`badge`,style:p(X.family.color,X.family.text),children:`Ganze Familie`})]})]})]}),t&&(0,L.jsxs)(`div`,{className:`when`,children:[(0,L.jsx)(`span`,{className:`clock`,children:s?`Ganzer Tag`:`${cr(e.start.dateTime)}${e.end?.dateTime?`–${cr(e.end.dateTime)}`:``}`}),(0,L.jsx)(`span`,{className:`whenMeta`,children:d?`${d}, ${t.toLocaleString({day:`numeric`,month:`long`})}`:sr(t)}),c&&(0,L.jsx)(`span`,{className:`duration`,children:c})]}),(e.location||u||l)&&(0,L.jsxs)(`div`,{className:`facts`,children:[e.location&&(0,L.jsxs)(`div`,{className:`fact`,children:[(0,L.jsx)(`span`,{className:`factIcon`,children:`📍`}),(0,L.jsx)(`span`,{className:`factBody`,children:e.location})]}),u&&(0,L.jsxs)(`div`,{className:`fact`,children:[(0,L.jsx)(`span`,{className:`factIcon`,children:`📝`}),(0,L.jsx)(`span`,{className:`factBody note`,children:u})]}),l&&(0,L.jsxs)(`div`,{className:`fact`,children:[(0,L.jsx)(`span`,{className:`factIcon`,children:`🔁`}),(0,L.jsx)(`span`,{className:`factBody`,children:l})]})]})]})})},mr=3e5,hr=new Map,gr=e=>{let t=e.startOf(`month`);return t.minus({days:t.weekday-1}).startOf(`day`)},_r=e=>{let t=gr(e);return Array.from({length:42},(e,n)=>{let r=t.plus({days:n});return n===41?r.endOf(`day`):r.startOf(`day`)})},vr=e=>e.toFormat(`yyyy-MM`),yr=(e,t=!0)=>{let n=V(),r=n.CALENDARS||[],i=JSON.stringify(r),a=F.useMemo(()=>(JSON.parse(i)||[]).map(e=>({name:e.name,icon:bn(e.icon)})),[i]),o=F.useRef(n);o.current=n;let s=F.useCallback((e,t)=>`${K(`/api/calendars/${e}`,o.current)}?${gn.default.stringify(t)}`,[]),[c,l]=F.useState(null),[u,d]=F.useState(!1),[f,p]=F.useState(!1),m=e?vr(e):null,h=F.useRef(e);return h.current=e,F.useEffect(()=>{let e=h.current;if(!t||!e||a.length===0)return;let n=hr.get(m);if(n&&Date.now()-n.timestamp<mr){l(n.data),d(!1);return}let r=!1,i=new AbortController,o=_r(e),c=o.map(e=>({date:e,allDay:[],events:[]}));return p(!0),Promise.all(a.map(e=>Sn(e,o[0],o[41],c,s,i.signal))).then(()=>{hr.set(m,{data:c,timestamp:Date.now()}),r||(l(c),d(!1))}).catch(e=>{B.error(`Monatsdaten konnten nicht geladen werden`,e),r||d(G(e))}).finally(()=>{r||p(!1)}),()=>{r=!0,i.abort()}},[m,t,i,s]),[c,u,f]},br=e=>Q(e).away!==null,xr=e=>{let t=new Map;(e||[]).forEach((e,n)=>{[...e?.allDay||[],...e?.events||[]].forEach(e=>{let r=Q(e);if(!r.away)return;let i=`${e.uid||r.title}|${r.away}`;t.has(i)||t.set(i,{info:r,event:e,indices:[]}),t.get(i).indices.push(n)})});let n=[];return t.forEach(({info:e,event:t,indices:r})=>{let i=[...new Set(r)].sort((e,t)=>e-t),a=[i[0]],o=()=>n.push({title:e.title,who:e.away,fromIndex:a[0],toIndex:a[a.length-1],days:a.length,event:t});for(let e=1;e<i.length;e+=1)i[e]===i[e-1]+1?a.push(i[e]):(o(),a=[i[e]]);o()}),n.sort((e,t)=>e.fromIndex-t.fromIndex||t.days-e.days)},Sr=(e,t)=>{let n=t*7,r=n+6;return e.toIndex<n||e.fromIndex>r?null:{lane:Math.max(e.fromIndex,n)-n,span:Math.min(e.toIndex,r)-Math.max(e.fromIndex,n)+1,continuesLeft:e.fromIndex<n,continuesRight:e.toIndex>r}},Cr=e=>{let t=new Set;return(e||[]).forEach(e=>{for(let n=e.fromIndex;n<=e.toIndex;n+=1)t.add(n)}),t},wr=e=>{if(!e)return[];let t=(e.allDay||[]).filter(e=>!br(e)),n=(e.events||[]).filter(e=>!br(e)).sort((e,t)=>(e.start?.dateTime||``).localeCompare(t.start?.dateTime||``));return[...t,...n]},Tr=20.5,Er=9,Dr=20,Or=15,kr=(e,t=0)=>{let n=e-Er-Dr-Or-t*21;return Math.max(0,Math.floor(n/Tr))},Ar=(e,t=M.now())=>!!e&&e.date.hasSame(t,`day`),jr=`"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`,Mr=[1,2,3,4,5,6,7],Nr=j.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  /* Eigener Stapelkontext, damit die Balkenspur nicht mit dem Schließkreuz
     des Overlays konkurriert. */
  isolation: isolate;
  margin: -4px -6px;

  .mhead {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 4px 68px 12px 4px;
    flex: none;
  }

  .nav { display: flex; gap: 6px; }

  .navbtn {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    border: solid 1px #3a3a40;
    background: transparent;
    color: #f2f2f4;
    font-size: 19px;
    cursor: pointer;
    display: grid;
    place-items: center;
    font-family: inherit;

    &:active { background-color: #2e2e34; }
    &:focus-visible { outline: solid 2px #f2f2f4; outline-offset: 2px; }
  }

  h2 {
    font-size: 23px;
    font-weight: 600;
    margin: 0;
    letter-spacing: -0.01em;
    font-variant-numeric: tabular-nums;
  }

  .today {
    margin-left: auto;
    font-size: 13px;
    padding: 7px 14px;
    border-radius: 6px;
    border: solid 1px #3a3a40;
    background: transparent;
    color: #9a9aa4;
    cursor: pointer;
    font-family: inherit;

    &:focus-visible { outline: solid 2px #f2f2f4; outline-offset: 2px; }
  }

  .wdays {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    border-bottom: solid 1px #3a3a40;
    flex: none;
    background-color: #252528;

    div {
      padding: 7px 8px;
      text-align: center;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: #6e6e78;
      border-left: solid 1px #2f2f35;
    }

    div:first-child { border-left: 0; }
    div.weekend { color: #85838c; }
  }

  /* Eine Zeile je Woche, damit ein Balken über mehrere Tage laufen kann. */
  .grid {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    background-color: #2f2f35;
    gap: 1px;
  }

  .week {
    position: relative;
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 1px;
    background-color: #2f2f35;
  }

  .cell {
    background-color: #212126;
    padding: 4px 5px 5px;
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow: hidden;
    cursor: pointer;
    touch-action: manipulation;

    &.weekend { background-color: #1d1d21; }
    &.outside { background-color: #191a1d; }
    &.outside .dnum { color: #4a4a52; }
    &.outside .ev { opacity: 0.42; }
    /* Tage mit Abwesenheit bekommen einen warmen Grundton, damit die
       Information über die ganze Zelle wirkt und nicht nur im Balken. */
    &.awayday { background-color: #2a2022; }
    &.awayday.weekend { background-color: #261d1f; }
    &.isToday { background-color: #33292c; box-shadow: inset 0 0 0 2px #f85a5a; }
    &.awayday.isToday { background-color: #3a2a2c; }
    &:active { filter: brightness(1.2); }
    &:focus-visible { outline: solid 2px #f2f2f4; outline-offset: -2px; }
  }

  .dnum {
    font-size: 13.5px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: #9a9aa4;
    flex: none;
    line-height: 1.3;
    padding: 1px 2px;
  }

  .cell.isToday .dnum {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: #f85a5a;
    color: #1c1c1c;
    font-weight: 700;
    padding: 0 5px;
  }

  .awaylane {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 5;
    pointer-events: none;
  }

  .awaybar {
    position: absolute;
    height: 19px;
    border-radius: 10px;
    background-color: ${Z.tile};
    border: solid 1px ${Z.color};
    color: ${Z.text};
    font-size: 11.5px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 9px;
    white-space: nowrap;
    overflow: hidden;
    pointer-events: auto;
    cursor: pointer;
    touch-action: manipulation;

    .ic { font-family: ${jr}; font-size: 11px; flex: none; }
    .lbl { overflow: hidden; text-overflow: ellipsis; }
    .dur { opacity: 0.75; font-weight: 600; flex: none; }

    /* Läuft der Zeitraum über die Zeilenkante hinaus, zeigt die gestrichelte
       Kante die Fortsetzung in der nächsten Woche. */
    &.contL {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border-left-style: dashed;
    }
    &.contR {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border-right-style: dashed;
    }
  }

  .ev {
    font-size: 11px;
    line-height: 1.3;
    padding: 2px 5px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    overflow: hidden;
    background-color: #34343c;
    border-left: solid 3px #5a5a62;
    flex: none;

    .ic { flex: none; font-family: ${jr}; font-size: 10.5px; }
    .tx { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }
    .tm { color: #ffffff9c; font-variant-numeric: tabular-nums; flex: none; font-size: 10px; }
  }

  .more {
    font-size: 10.5px;
    color: #6e6e78;
    padding: 1px 6px;
    font-weight: 600;
    flex: none;
  }

  .state {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6e6e78;
  }

  @media only screen and (max-width: 1200px) {
    h2 { font-size: 19px; }
    .ev .tm { display: none; }
  }
`,Pr=e=>M.fromISO(e).toLocaleString(M.TIME_24_SIMPLE),Fr=({visible:e,onClose:t})=>{let[n,r]=F.useState(()=>M.now().startOf(`month`)),[i,a,o]=yr(n,e),[s,c]=F.useState(null),[l,u]=F.useState(null),d=F.useRef(null),[f,p]=F.useState(110);F.useLayoutEffect(()=>{if(!e||!d.current)return;let t=()=>{let e=d.current?.querySelector(`.week`);e&&p(e.getBoundingClientRect().height)};return t(),window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[e,i]),F.useEffect(()=>{e&&(r(M.now().startOf(`month`)),c(null))},[e]);let m=F.useMemo(()=>xr(i),[i]),h=F.useMemo(()=>Cr(m),[m]);return e?(0,L.jsxs)(R,{visible:!0,onClick:t,fullsize:!0,children:[(0,L.jsxs)(Nr,{children:[(0,L.jsxs)(`div`,{className:`mhead`,children:[(0,L.jsxs)(`div`,{className:`nav`,children:[(0,L.jsx)(`button`,{className:`navbtn`,onClick:()=>r(e=>e.minus({months:1})),"aria-label":`Vorheriger Monat`,children:`‹`}),(0,L.jsx)(`button`,{className:`navbtn`,onClick:()=>r(e=>e.plus({months:1})),"aria-label":`Nächster Monat`,children:`›`})]}),(0,L.jsx)(`h2`,{children:n.toLocaleString({month:`long`,year:`numeric`})}),(0,L.jsx)(`button`,{className:`today`,onClick:()=>r(M.now().startOf(`month`)),children:`Heute`})]}),(0,L.jsx)(`div`,{className:`wdays`,children:Mr.map(e=>(0,L.jsx)(`div`,{className:N({weekend:e>=6}),children:M.fromObject({weekday:e}).toLocaleString({weekday:`short`})},e))}),a!==!1&&!i&&(0,L.jsx)(`div`,{className:`state`,style:{color:`#f85a5a`,textAlign:`center`,padding:`1rem`},children:(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h3`,{children:`Fehler beim Laden`}),(0,L.jsx)(`div`,{children:a instanceof Error?a.message:String(a)})]})}),!i&&a===!1&&(0,L.jsx)(`div`,{className:`state`,children:(0,L.jsx)(le,{visible:!0,height:`70`,width:`70`,color:`#c1c1c1`,radius:`9`,ariaLabel:`Monat wird geladen`})}),i&&(0,L.jsx)(`div`,{className:`grid`,ref:d,children:[0,1,2,3,4,5].map(e=>{let t=m.map(t=>({span:t,clip:Sr(t,e)})).filter(e=>e.clip),r=kr(f,t.length);return(0,L.jsxs)(`div`,{className:`week`,children:[Mr.map((a,o)=>{let s=e*7+o,l=i?.[s];if(!l)return(0,L.jsx)(`div`,{className:`cell`},o);let u=wr(l),d=u.slice(0,r),f=u.length-d.length,p=!l.date.hasSame(n,`month`);return(0,L.jsxs)(`div`,{className:N(`cell`,{weekend:l.date.weekday>=6,outside:p,awayday:h.has(s),isToday:Ar(l)}),role:`button`,tabIndex:0,onClick:()=>c(s),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),c(s))},children:[(0,L.jsx)(`div`,{className:`dnum`,children:l.date.day}),t.length>0&&(0,L.jsx)(`div`,{style:{height:t.length*21,flex:`none`}}),d.map((e,t)=>{let{title:n,icon:r,primary:i}=Q(e),a=X[i];return(0,L.jsxs)(`div`,{className:`ev`,style:{backgroundColor:a.tile,borderLeftColor:a.color},children:[r&&(0,L.jsx)(`span`,{className:`ic`,children:r}),(0,L.jsx)(`span`,{className:`tx`,children:n}),e.start?.dateTime&&(0,L.jsx)(`span`,{className:`tm`,children:Pr(e.start.dateTime)})]},t)}),f>0&&(0,L.jsxs)(`div`,{className:`more`,children:[`+`,f,` weitere`]})]},o)}),(0,L.jsx)(`div`,{className:`awaylane`,style:{top:26},children:t.map(({span:e,clip:t},n)=>(0,L.jsxs)(`div`,{className:N(`awaybar`,{contL:t.continuesLeft,contR:t.continuesRight}),role:`button`,tabIndex:0,onClick:t=>{t.stopPropagation(),u({event:e.event,day:i?.[e.fromIndex]?.date})},onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),t.stopPropagation(),u({event:e.event,day:i?.[e.fromIndex]?.date}))},style:{left:`calc(${t.lane/7*100}% + 3px)`,width:`calc(${t.span/7*100}% - 6px)`,top:n*21},children:[(0,L.jsx)(`span`,{className:`ic`,children:`✈️`}),(0,L.jsx)(`span`,{className:`lbl`,children:e.title}),e.days>1&&(0,L.jsxs)(`span`,{className:`dur`,children:[`· `,e.days,` Tage`]})]},n))})]},e)})})]}),s!==null&&i?.[s]&&(0,L.jsx)(Lr,{day:i[s],spans:m.filter(e=>e.fromIndex<=s&&e.toIndex>=s),onPick:e=>{u({event:e,day:i[s].date}),c(null)},onClose:()=>c(null)}),l&&(0,L.jsx)(pr,{event:l.event,day:l.day,onClose:()=>u(null)})]}):null},Ir=j.div`
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 12, 0.82);
  backdrop-filter: blur(6px);
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;

  .card {
    background-color: #1c1c1c;
    border: solid 1px #3a3a40;
    border-radius: 14px;
    width: min(560px, 92%);
    max-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
  }

  .head {
    padding: 16px 20px 14px;
    border-bottom: solid 1px #3a3a40;
    display: flex;
    align-items: baseline;
    gap: 12px;
    flex-wrap: wrap;

    .dt { font-size: 20px; font-weight: 600; }
    .cnt { font-size: 12.5px; color: #6e6e78; margin-left: auto; }
  }

  .list {
    padding: 14px 20px 18px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .row {
    display: flex;
    gap: 11px;
    align-items: flex-start;
    font-size: 14px;
    line-height: 1.4;
    cursor: pointer;

    .t {
      font-variant-numeric: tabular-nums;
      color: #9a9aa4;
      flex: none;
      width: 82px;
      font-size: 12.5px;
      padding-top: 2px;
    }

    .bar { width: 4px; border-radius: 2px; align-self: stretch; flex: none; min-height: 19px; }
    .nm { min-width: 0; overflow-wrap: anywhere; }
    .ic { font-family: ${jr}; margin-right: 4px; }
    &:active { filter: brightness(1.25); }
  }

  .awayrow {
    background-color: ${Z.tile};
    border: solid 1px ${Z.color};
    color: ${Z.text};
    border-radius: 9px;
    padding: 8px 11px;
    font-weight: 600;
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .empty { color: #6e6e78; font-size: 13.5px; font-style: italic; }
`,Lr=({day:e,spans:t,onPick:n,onClose:r})=>{let i=wr(e),a=i.length+t.length;return(0,L.jsx)(Ir,{onClick:r,children:(0,L.jsxs)(`div`,{className:`card`,onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(`div`,{className:`head`,children:[(0,L.jsx)(`span`,{className:`dt`,children:e.date.toLocaleString({weekday:`long`,day:`numeric`,month:`long`})}),(0,L.jsx)(`span`,{className:`cnt`,children:a===0?`nichts eingetragen`:`${a} ${a===1?`Eintrag`:`Einträge`}`})]}),(0,L.jsxs)(`div`,{className:`list`,children:[t.map((e,t)=>(0,L.jsxs)(`div`,{className:`awayrow`,children:[(0,L.jsx)(`span`,{className:`ic`,children:`✈️`}),e.title,e.days>1?` · ${e.days} Tage`:``]},`a${t}`)),i.map((e,t)=>{let{title:r,icon:i,primary:a}=Q(e);return(0,L.jsxs)(`div`,{className:`row`,onClick:()=>n(e),children:[(0,L.jsx)(`span`,{className:`t`,children:e.start?.dateTime?Pr(e.start.dateTime):`ganztägig`}),(0,L.jsx)(`span`,{className:`bar`,style:{backgroundColor:X[a].color}}),(0,L.jsxs)(`span`,{className:`nm`,children:[i&&(0,L.jsx)(`span`,{className:`ic`,children:i}),r]})]},t)}),a===0&&(0,L.jsx)(`div`,{className:`empty`,children:`Keine Termine an diesem Tag.`})]})]})})},Rr=e=>M.fromISO(e).toLocaleString(M.TIME_24_SIMPLE),zr=e=>e.toFormat(`c`)>=6,Br=e=>e.hasSame(M.now(),`day`),Vr=Array.from({length:17},(e,t)=>6+t),Hr=`56px repeat(7, minmax(0, 1fr))`,Ur=`"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`,Wr=j.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  .weekGrid {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    /* Eigener Stapelkontext: Die z-index-Werte für Terminstapel und
       Jetzt-Linie bleiben dadurch im Kalender eingeschlossen und können
       die Overlays (CCTV, Wäsche, Garage, Wetter, Türklingel) nicht
       überdecken, die im selben Elternkontext liegen. */
    isolation: isolate;
    background-color: #252528;
    border-radius: 4px;
    overflow: hidden;
  }

  .headRow, .awayRow, .allDayRow {
    display: grid;
    grid-template-columns: ${Hr};
    flex: none;
  }

  .rowLabel {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6e6e78;
    align-self: center;
    text-align: right;
    padding: 4px 6px;
    line-height: 1.2;
  }

  .headRow {
    border-bottom: solid 1px #3a3a40;

    .caption {
      text-align: center;
      padding: 7px 4px;
      border-left: solid 1px #2f2f35;
      min-width: 0;

      &:first-child { border-left: 0; }

      .weekday {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #6e6e78;
      }

      .dayNumber {
        font-size: 22px;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        line-height: 1.2;
      }
    }

    .caption.today {
      background-color: #33292c;
      box-shadow: inset 0 -3px 0 #f85a5a;

      .weekday { color: #f85a5a; }

      .dayNumber {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: #f85a5a;
        color: #1c1c1c;
        font-weight: 700;
      }
    }
  }

  /* Abwesenheiten stehen über allem: Für die Kinder ist das die wichtigste
     Information des Tages. Die Zeile entfällt, wenn niemand unterwegs ist. */
  .awayRow {
    background-color: #201d1e;
    border-bottom: solid 1px #3a3a40;

    .awayTrack {
      grid-column: 2 / -1;
      position: relative;
      padding: 4px 0;
    }

    .awayLane {
      position: relative;
      height: 26px;

      & + .awayLane { margin-top: 3px; }
    }

    .awayBar {
      position: absolute;
      height: 26px;
      border-radius: 13px;
      background-color: ${Z.tile};
      border: solid 1px ${Z.color};
      color: ${Z.text};
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 11px;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      cursor: pointer;
      touch-action: manipulation;

      &:active { filter: brightness(1.25); }

      &:focus-visible {
        outline: solid 2px #f2f2f4;
        outline-offset: -2px;
      }

      .awayIcon { font-family: ${Ur}; }

      .awayLabel {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .allDayRow {
    background-color: #212126;
    border-bottom: solid 1px #3a3a40;

    .allDayCell {
      border-left: solid 1px #2f2f35;
      padding: 4px;
      min-height: 30px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      min-width: 0;
    }

    .allDayCell.today { background-color: #33292c; }
    .allDayCell.weekend { background-color: #232326; }
  }

  .chip {
    font-size: 12.5px;
    padding: 4px 7px;
    border-radius: 5px;
    background-color: #3a3a44;
    border-left: solid 4px #5a5a62;
    display: flex;
    align-items: center;
    gap: 5px;
    overflow: hidden;
    cursor: pointer;
    touch-action: manipulation;

    &:active { filter: brightness(1.25); }

    &:focus-visible {
      outline: solid 2px #f2f2f4;
      outline-offset: -2px;
    }

    .chipLabel {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    .chipIcon {
      flex: none;
      font-size: 13px;
      font-family: ${Ur};
    }

    .wasteDot {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      flex: none;
      border: solid 1px rgba(0, 0, 0, 0.4);
    }
  }

  .scrollBody {
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;

    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  .timeGrid {
    display: grid;
    grid-template-columns: ${Hr};
    position: relative;
  }

  .axis {
    position: relative;

    .hourLabel {
      position: absolute;
      top: -7px;
      right: 7px;
      font-size: 11px;
      color: #6e6e78;
      font-variant-numeric: tabular-nums;
    }
  }

  .hourLine {
    height: ${62}px;
    border-top: solid 1px #2f2f35;
  }

  .axis .hourLine { border-top: 0; }

  .dayColumn {
    position: relative;
    border-left: solid 1px #2f2f35;
    min-width: 0;
  }

  .dayColumn.weekend { background-color: #232326; }
  .dayColumn.today { background-color: #33292c; }

  .event {
    position: absolute;
    border-radius: 7px;
    padding: 5px 8px;
    overflow: hidden;
    background-color: #3a3a44;
    border-left: solid 5px #5a5a62;
    font-size: 13.5px;
    line-height: 1.28;
    box-shadow: -1px 0 0 rgba(0, 0, 0, 0.35);
    cursor: pointer;
    /* Der Browser soll die Geste nicht als Doppeltipp-Zoom deuten. */
    touch-action: manipulation;

    &:active { filter: brightness(1.25); }

    &:focus-visible {
      outline: solid 2px #f2f2f4;
      outline-offset: -2px;
    }

    .eventTitle {
      font-weight: 600;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .eventTime {
      font-size: 11.5px;
      color: #ffffffb0;
      font-variant-numeric: tabular-nums;
      margin-top: 1px;
    }

    .eventIcon {
      margin-right: 3px;
      font-family: ${Ur};
    }
  }

  .nowLine {
    position: absolute;
    left: 56px;
    right: 0;
    height: 0;
    border-top: solid 2px #f85a5a;
    z-index: 20;
    pointer-events: none;

    &::before {
      content: '';
      position: absolute;
      left: -5px;
      top: -5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #f85a5a;
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

  @media only screen and (max-width: 1200px) {
    .headRow .caption .dayNumber { font-size: 18px; }
    .event { font-size: 12px; }
    .chip { font-size: 11px; }
  }
`,Gr=e=>Q(e).away!==null,Kr=()=>{let[e,t]=F.useState(void 0),[n,r]=Fn(e),{nextWeek:i,previousWeek:a,startWeekWithToday:o}=Rn(t);F.useEffect(()=>{e===void 0&&o()},[]);let s=Bn({onSwipedLeft:()=>i(),onSwipedRight:()=>a()}),[c,l]=F.useState(!1),[u,d]=F.useState(null),f=F.useCallback(()=>d(null),[]),p=vn(Xe,`calendar-now`),m=(0,F.useMemo)(()=>M.now(),[p]),h=(0,F.useMemo)(()=>n.slice(0,7),[n]),g=(0,F.useMemo)(()=>h.some(e=>Br(e.date)),[h]),_=(0,F.useMemo)(()=>g?rr(m):null,[g,m]),{ref:v}=Vn(_),y=(0,F.useMemo)(()=>nr(h,Gr),[h]),b=(0,F.useMemo)(()=>h.map(e=>$n(e.events)),[h]);return(0,L.jsxs)(Wr,{...s,children:[(0,L.jsx)(Y,{label:`Header`,children:(0,L.jsx)(mn,{nextWeek:i,previousWeek:a,startWeekWithToday:o,onOpenMonth:()=>l(!0)})}),(0,L.jsxs)(`div`,{className:`weekGrid`,children:[(0,L.jsxs)(`div`,{className:`headRow`,children:[(0,L.jsx)(`div`,{}),h.map((e,t)=>(0,L.jsxs)(`div`,{className:N(`caption`,{weekend:zr(e.date),today:Br(e.date)}),children:[(0,L.jsx)(`div`,{className:`weekday`,children:e.date.toLocaleString({weekday:`short`})}),(0,L.jsx)(`div`,{className:`dayNumber`,children:Br(e.date)?e.date.day:e.date.toLocaleString({day:`numeric`,month:`numeric`})})]},t))]}),y.length>0&&(0,L.jsxs)(`div`,{className:`awayRow`,children:[(0,L.jsxs)(`div`,{className:`rowLabel`,children:[`außer`,(0,L.jsx)(`br`,{}),`Haus`]}),(0,L.jsx)(`div`,{className:`awayTrack`,children:y.map(({event:e,startIndex:t,span:n},r)=>{let{title:i}=Q(e);return(0,L.jsx)(`div`,{className:`awayLane`,children:(0,L.jsxs)(`div`,{className:`awayBar`,role:`button`,tabIndex:0,onClick:()=>d({event:e,day:h[t]?.date}),onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),d({event:e,day:h[t]?.date}))},style:{left:`${t/7*100}%`,width:`calc(${n/7*100}% - 6px)`,marginLeft:`3px`},children:[(0,L.jsx)(`span`,{className:`awayIcon`,children:`✈️`}),(0,L.jsx)(`span`,{className:`awayLabel`,children:i}),n>1&&(0,L.jsxs)(`span`,{children:[`· `,n,` Tage`]})]})},r)})})]}),(0,L.jsxs)(`div`,{className:`allDayRow`,children:[(0,L.jsxs)(`div`,{className:`rowLabel`,children:[`ganz`,(0,L.jsx)(`br`,{}),`tags`]}),h.map((e,t)=>(0,L.jsx)(`div`,{className:N(`allDayCell`,{weekend:zr(e.date),today:Br(e.date)}),children:e.allDay.filter(e=>!Gr(e)).map((t,n)=>{let{title:r,icon:i,primary:a,wasteColor:o}=Q(t);return(0,L.jsxs)(`div`,{className:`chip`,role:`button`,tabIndex:0,onClick:()=>d({event:t,day:e.date}),onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),d({event:t,day:e.date}))},style:{borderLeftColor:X[a].color},children:[o?(0,L.jsx)(`span`,{className:`wasteDot`,style:{backgroundColor:o}}):i&&(0,L.jsx)(`span`,{className:`chipIcon`,children:i}),(0,L.jsx)(`span`,{className:`chipLabel`,children:r})]},n)})},t))]}),(0,L.jsxs)(`div`,{className:`scrollBody`,ref:v,children:[(0,L.jsxs)(`div`,{className:`timeGrid`,children:[(0,L.jsx)(`div`,{className:`axis`,style:{height:Qn()},children:Vr.map(e=>(0,L.jsx)(`div`,{className:`hourLine`,children:(0,L.jsxs)(`span`,{className:`hourLabel`,children:[String(e).padStart(2,`0`),`:00`]})},e))}),h.map((e,t)=>(0,L.jsxs)(`div`,{className:N(`dayColumn`,{weekend:zr(e.date),today:Br(e.date)}),style:{height:Qn()},children:[Vr.map(e=>(0,L.jsx)(`div`,{className:`hourLine`},e)),b[t]?.map(({event:t,top:n,height:r,lane:i,lanes:a},o)=>{let{title:s,icon:c,primary:l}=Q(t),u=X[l],{left:f,width:p}=tr(i,a);return(0,L.jsxs)(`div`,{className:`event`,role:`button`,tabIndex:0,onClick:()=>d({event:t,day:e.date}),onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),d({event:t,day:e.date}))},style:{top:n,height:r,left:f,width:p,zIndex:10+i,backgroundColor:u.tile,borderLeftColor:u.color},children:[(0,L.jsxs)(`div`,{className:`eventTitle`,children:[c&&(0,L.jsx)(`span`,{className:`eventIcon`,children:c}),s]}),(0,L.jsxs)(`div`,{className:`eventTime`,children:[Rr(t.start.dateTime),` – `,Rr(t.end.dateTime)]})]},o)})]},t))]}),_!==null&&(0,L.jsx)(`div`,{className:`nowLine`,style:{top:_}})]})]}),n.length===0&&(0,L.jsx)(`div`,{className:`loading`,children:r===!1?(0,L.jsx)(le,{visible:!0,height:`80`,width:`80`,color:`#c1c1c1`,radius:`9`,ariaLabel:`three-dots-loading`,wrapperStyle:{},wrapperClass:``}):(0,L.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`},children:[(0,L.jsx)(`h3`,{children:`Fehler beim Laden der Kalenderdaten`}),(0,L.jsx)(`div`,{children:r instanceof Error?r.message:String(r)})]})}),r!==!1&&n.length>0&&(0,L.jsx)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`,marginTop:`1rem`},children:(0,L.jsxs)(`div`,{children:[`Warnung: `,r instanceof Error?r.message:String(r)]})}),u&&(0,L.jsx)(Y,{label:`Termindetails`,children:(0,L.jsx)(pr,{event:u.event,day:u.day,onClose:f})}),(0,L.jsx)(Y,{label:`Monatsübersicht`,children:(0,L.jsx)(Fr,{visible:c,onClose:()=>l(!1)})})]})},qr={"clear-day":{icon:f,label:`Klar`,color:`#eeeef5`},"clear-night":{icon:r,label:`Klar`,color:`#eeeef5`},rain:{icon:_,label:`Regen`,color:`#80a5d6`},snow:{icon:a,label:`Schnee`,color:`#8c82ce`},sleet:{icon:i,label:`Graupel`,color:`#aba4db`},wind:{icon:p,label:`Stürmisch`,color:`#9fb6d6`},fog:{icon:h,label:`Neblig`,color:`#d5dae2`},cloudy:{icon:c,label:`Bewölkt`,color:`#b6bfcb`},"partly-cloudy-day":{icon:n,label:`Teils bewölkt`,color:`#d5dae2`},"partly-cloudy-night":{icon:l,label:`Teils bewölkt`,color:`#d5dae2`}},Jr=e=>{let[t,n]=F.useState([]),[r,i]=F.useState(!1),a=vn(6e5,`Weather`),o=V(),s=o.ENABLE_WEATHER||!1,c=o.WEATHER_LATITUDE,l=o.WEATHER_LONGITUDE,u=s&&c&&l,d=()=>`.${`/forecast/${c},${l}?units=si&exclude=minutely`}`;return F.useEffect(()=>{if(!u){e&&e(!1);return}let t=!0,r=new AbortController;return e&&e(!0),P(d(),{signal:r.signal}).then(e=>{t&&(n(e.data),i(!1))}).catch(e=>{t&&!r.signal.aborted&&i(G(e))}).finally(()=>{t&&e&&e(!1)}),()=>{t=!1,r.abort()}},[a,e,u,s,c,l]),[t,r]},Yr=g(d),Xr=j.div`

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
`,Zr=(0,F.memo)(({data:e,daily:t=!1})=>(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`div`,{children:[!t&&M.fromSeconds(e.time).toLocaleString(M.TIME_24_SIMPLE),t&&M.fromSeconds(e.time).setLocale(`de`).toFormat(`ccc, d.M`)]}),(0,L.jsx)(`div`,{children:(0,L.jsx)($r,{icon:e.icon})}),(0,L.jsx)(`div`,{children:(0,L.jsxs)(`strong`,{children:[!t&&(0,L.jsxs)(L.Fragment,{children:[Math.round(e.temperature),`°`]}),t&&(0,L.jsxs)(L.Fragment,{children:[Math.round(e.temperatureHigh),`° / `,Math.round(e.temperatureLow),`°`]})]})}),(0,L.jsxs)(`div`,{children:[Math.round(e.precipProbability*100),` %`]}),(0,L.jsxs)(`div`,{children:[(e.precipIntensity*100).toFixed(1),` mm`]})]})),Qr=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(e=>({color:qr[e.icon]?.color||`#ffffff`,text:qr[e.icon]?.label||``,annotation:`${Math.round(e.temperature)}°`,time:e.time})),$r=({icon:e})=>{let t=qr[e];return(0,L.jsx)(t.icon,{size:60,color:`#ffffff`})},ei=(0,F.memo)(()=>{let e=V().ENABLE_WEATHER||!1,[t,n]=Jr(),[r,i]=F.useState(!1),a=In(`w`),o=F.useRef(),s=(0,F.useCallback)(()=>i(e=>!e),[]),c=(0,F.useCallback)(()=>i(!0),[]),l=(0,F.useMemo)(()=>Qr(t),[t]),u=(0,F.useMemo)(()=>[3,6,9,12],[]),d=(0,F.useMemo)(()=>[1,2,3,4,5,6,7],[]);return F.useEffect(()=>{if(!r||!o.current||!t||!t.hourly||l.length===0)return;let e={timezone:`Europe/Berlin`},n=document.createElement(`div`);return o.current.textContent=``,o.current.appendChild(n),_e(n,l,e),()=>{o.current&&(o.current.textContent=``)}},[r,l]),F.useEffect(()=>{a&&s()},[a]),e?!t||!(`currently`in t)||!(`daily`in t)||!(`hourly`in t)?n===!1?``:(0,L.jsx)(Xr,{children:(0,L.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`},children:[(0,L.jsx)(`h3`,{children:`Fehler beim Laden der Wetterdaten`}),(0,L.jsx)(`div`,{children:n instanceof Error?n.message:String(n)})]})}):(0,L.jsxs)(Xr,{children:[(0,L.jsxs)(`div`,{onClick:c,children:[(0,L.jsxs)(`div`,{className:`headline`,children:[(0,L.jsx)($r,{icon:t.currently.icon}),(0,L.jsxs)(`h2`,{children:[Math.round(t.currently.temperature),`°`]})]}),(0,L.jsx)(`div`,{className:`forecast`,children:u.map((e,n)=>(0,L.jsx)(Zr,{data:t.hourly.data[e]},n))})]}),(0,L.jsx)(R,{visible:r,onClick:s,children:(0,L.jsxs)(`div`,{className:`full-weather`,children:[n!==!1&&(0,L.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`,marginBottom:`1rem`},children:[(0,L.jsx)(`h3`,{children:`Fehler!`}),(0,L.jsx)(`div`,{children:n instanceof Error?n.message:String(n)})]}),(0,L.jsxs)(`div`,{className:`detail-header`,children:[(0,L.jsx)(`div`,{children:(0,L.jsxs)(`div`,{className:`headline`,children:[(0,L.jsx)($r,{icon:t.daily.data[0].icon}),(0,L.jsxs)(`h2`,{children:[Math.round(t.daily.data[0].temperatureHigh),`° /`,(0,L.jsxs)(`span`,{children:[Math.round(t.daily.data[0].temperatureLow),`°`]})]})]})}),(0,L.jsx)(`h3`,{children:qr[t.daily.data[0].icon].label})]}),(0,L.jsx)(`div`,{className:`values`,children:(0,L.jsxs)(`div`,{className:`table`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{children:`Gefühlt:`}),` `,Math.round(t.daily.data[0].apparentTemperatureHigh),`° C`]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{children:`Luftfeuchtigkeit:`}),` `,Math.round(t.daily.data[0].humidity*100),` %`]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{children:`Wind:`}),` `,Math.round(t.daily.data[0].windSpeed),` km/h`]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{children:`Bewölkung:`}),` `,Math.round(t.daily.data[0].cloudCover*100),` %`]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{children:`Regen:`}),` `,Math.round(t.daily.data[0].precipProbability*100),` %`]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{children:`UV Index:`}),` `,t.daily.data[0].uvIndex]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`span`,{children:`Luftdruck:`}),` `,Math.round(t.daily.data[0].pressure)]})]})}),(0,L.jsx)(`h3`,{children:`Die nächsten 24 Stunden`}),(0,L.jsx)(`div`,{ref:o}),(0,L.jsx)(`h3`,{children:`Die nächste Woche`}),(0,L.jsx)(`div`,{className:`forecast`,children:d.map((e,n)=>(0,L.jsx)(Zr,{data:t.daily.data[e],daily:!0},n))}),(0,L.jsxs)(`div`,{className:`info`,children:[`Aktualisiert `,(0,L.jsx)(m,{date:M.fromSeconds(t.currently.time).toJSDate(),formatter:Yr})]})]})})]}):null}),ti={name:`AK Wandsbek`,city:`Hamburg`,id:`Master:62016`,type:`STATION`,coordinate:{x:10.091341,y:53.568702}},ni={departureList:`departureList`,checkName:`checkName`},ri=async(e,t,n,r)=>{let i={Accept:`application/json`,"Content-Type":`application/json;charset=UTF-8`},a=r.HASS_ACCESS_TOKEN||``;a&&a.trim()!==``&&a!==`undefined`&&a!==`null`&&(i.Authorization=`Bearer ${a}`);let o=K(`/gti/public/${e}`,r);return P({method:`post`,url:o,data:t,signal:n,headers:i})},ii=(e,t)=>e.realtimeOffset-t.realtimeOffset,ai=e=>{let t=(e?.departures??[]).map(e=>({line:e.line.name,direction:e.line.direction,timeOffset:e.timeOffset,delay:e.delay?e.delay:`0`,directionId:e.directionId,realtimeOffset:e.timeOffset+(e.delay?e.delay:0)/60}));return{from:t.filter(e=>e.directionId===1).slice(0,3).sort(ii),to:t.filter(e=>e.directionId===6).slice(0,3).sort(ii)}},oi=e=>{let t=V(),n=t.ENABLE_HVV||!1,[r,i]=F.useState([]),[a,o]=F.useState(!1),s=vn(6e4),c=n;return F.useEffect(()=>{if(!c)return;if(!(e in ni)){B.warn(e,`not supported by HVV connector`);return}let n=!0,r=new AbortController,a={version:51};switch(e){case ni.checkName:a={...a,theName:{name:`AK Wandsbek`,type:`STATION`},maxList:1};break;case ni.departureList:let e=M.now();a={...a,station:ti,time:{date:e.toFormat(`dd.MM.yyyy`),time:e.toFormat(`HH:mm`)},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:a=void 0}return ri(e,a,r.signal,t).then(t=>{n&&(e===ni.departureList?i(ai(t.data)):i(t.data),o(!1))}).catch(e=>{n&&!r.signal.aborted&&o(G(e))}),()=>{n=!1,r.abort()}},[e,s,c,n]),[r,a]},si=j.div`
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
`,ci=(0,F.memo)(({line:e,direction:t,realtimeOffset:n})=>(0,L.jsxs)(`div`,{className:`departure`,children:[(0,L.jsx)(`div`,{children:(0,L.jsx)(`img`,{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),(0,L.jsx)(`div`,{children:n===0?`Jetzt`:(0,L.jsxs)(L.Fragment,{children:[`in `,n,` '`]})})]})),li=(0,F.memo)(()=>{let e=V().ENABLE_HVV||!1,[t,n]=oi(ni.departureList);return e?(0,L.jsx)(si,{children:n===!1?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`h3`,{children:`→\xA0Wandsbek`}),t.to?.map((e,t)=>(0,L.jsx)(ci,{line:e.line,direction:e.direction,realtimeOffset:e.realtimeOffset},t)),(0,L.jsx)(`h3`,{children:`→\xA0Stadtauswärts`}),t.from?.map((e,t)=>(0,L.jsx)(ci,{line:e.line,direction:e.direction,realtimeOffset:e.realtimeOffset},t))]}):(0,L.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`},children:[(0,L.jsx)(`h3`,{children:`Fehler!`}),(0,L.jsx)(`div`,{children:n instanceof Error?n.message:String(n)})]})}):null}),ui=()=>{let e=V(),t=e.ENABLE_EV||!1,n=e.ENTITY_PRECLIMATE_STATUS||``,r=e.ENTITY_CHARGING_STATE||``,i=e.ENTITY_STATE_OF_CHARGE||``,a=t&&(n||r||i),[o,s,c]=wt({entityId:n,enabled:a&&!!n,config:e,initialState:`off`}),{error:l}=Pt({entityId:n,enabled:a&&!!n,onStateUpdate:c,logPrefix:`EV preclimate`,wsOptions:{checkBackendConnection:!1,reconnectStrategy:`exponential`,maxReconnectAttempts:5,reconnectDelay:1e3}}),[u,d,f]=wt({entityId:r,enabled:a&&!!r,config:e,initialState:`off`}),{error:p}=Pt({entityId:r,enabled:a&&!!r,onStateUpdate:f,logPrefix:`EV charging`,wsOptions:{checkBackendConnection:!1,reconnectStrategy:`exponential`,maxReconnectAttempts:5,reconnectDelay:1e3}}),[m,h,g]=wt({entityId:i,enabled:a&&!!i,config:e,initialState:`0`}),{error:_}=Pt({entityId:i,enabled:a&&!!i,onStateUpdate:g,logPrefix:`EV SoC`,wsOptions:{checkBackendConnection:!1,reconnectStrategy:`exponential`,maxReconnectAttempts:5,reconnectDelay:1e3}});return[F.useMemo(()=>({preclimateStatus:o===`on`,chargingState:u===`on`,stateOfCharge:parseFloat(m)||0}),[o,u,m]),s||l||d||p||h||_||!1]},di=e=>{let t=e?.ENTITY_PRECLIMATE_START||``;t&&P.post(K(`/api/services/button/press`,e),{entity_id:t}).catch(e=>{B.error(`Failed to start preclimate:`,e)})},fi=e=>{let t=e?.ENTITY_PRECLIMATE_STOP||``;t&&P.post(K(`/api/services/button/press`,e),{entity_id:t}).catch(e=>{B.error(`Failed to stop preclimate:`,e)})},pi=({preclimateStatus:e,error:t,onStart:n,onStop:r})=>{let[i,a]=(0,F.useState)(!1),[o,s]=(0,F.useState)(null),[c,l]=(0,F.useState)(!1),[u,d]=(0,F.useState)(!1),[f,p]=(0,F.useState)(0),m=(0,F.useRef)(null),h=(0,F.useRef)(null),g=(0,F.useRef)(e),_=(0,F.useRef)(null);return(0,F.useEffect)(()=>{g.current!==e&&(i&&_.current!==null&&e===(o===`start`)&&(p(o===`start`?360:0),d(!0),setTimeout(()=>{a(!1),s(null),d(!1),p(0),_.current=null,l(!1)},300),m.current&&=(clearTimeout(m.current),null)),g.current=e)},[e,i,o]),(0,F.useEffect)(()=>{if(!i||u){h.current&&=(cancelAnimationFrame(h.current),null);return}let e=_.current||Date.now(),t=o===`stop`,n=()=>{let r=Date.now()-e,i=Math.min(r/Ke,1);p(t?360*(1-i):360*i),i<1&&!u&&(h.current=requestAnimationFrame(n))};return h.current=requestAnimationFrame(n),()=>{h.current&&=(cancelAnimationFrame(h.current),null)}},[i,u,o]),(0,F.useEffect)(()=>()=>{m.current&&clearTimeout(m.current),h.current&&cancelAnimationFrame(h.current)},[]),{isAnimating:i,animationDirection:o,shouldShake:c,isComplete:u,progressAngle:f,handleToggle:(0,F.useCallback)(()=>{if(t!==!1||i)return;let o=!e,c=o?`start`:`stop`;a(!0),s(c),d(!1),l(!1),p(0),_.current=Date.now(),g.current=e,o?n():r(),m.current=setTimeout(()=>{l(!0),setTimeout(()=>{a(!1),s(null),d(!1),p(0),l(!1),_.current=null},500)},qe)},[e,t,i,n,r])}},mi=j.div`
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
`,hi=(e,t)=>t?ue:e>=80?k:e>=50?fe:e>=20?ie:A,gi=e=>e>=90?`#17e146`:e>=40?`#ff9800`:`#f85a5a`,_i=(0,F.memo)(()=>{let e=V(),t=e.ENABLE_EV||!1,[n,r]=ui(),{preclimateStatus:i,chargingState:a,stateOfCharge:o}=n,{isAnimating:s,animationDirection:c,shouldShake:l,isComplete:u,progressAngle:d,handleToggle:f}=pi({preclimateStatus:i,error:r,onStart:(0,F.useCallback)(()=>di(e),[e]),onStop:(0,F.useCallback)(()=>fi(e),[e])}),p=hi(o||0,a),m=gi(o||0),h=Math.round(o||0),g=s?c===`start`:i,_=c===`start`?`#17e146`:`#f85a5a`,v=c===`start`?`clockwise`:`counterclockwise`;return t?(0,L.jsxs)(mi,{className:N({disabled:r!==!1}),children:[(0,L.jsxs)(`h2`,{children:[`Auto`,r===!1?(0,L.jsxs)(`div`,{className:`battery-info`,children:[(0,L.jsxs)(`span`,{className:`charge-percentage`,children:[h,`%`]}),(0,L.jsx)(I,{path:p,size:`1.2rem`,color:m})]}):(0,L.jsxs)(`div`,{className:`battery-info`,children:[(0,L.jsx)(I,{path:re,size:`1.2rem`,color:`#f85a5a`}),(0,L.jsx)(`span`,{children:`Fehler`})]})]}),r===!1&&(0,L.jsxs)(`div`,{className:`preclimate-button-wrapper`,children:[s&&(0,L.jsx)(`div`,{className:N(`progress-ring`,v,{complete:u}),style:{"--progress-color":_,"--progress-angle":`${d}deg`,"--progress-gradient":`conic-gradient(from -90deg, ${_} 0deg, ${_} ${d}deg, transparent ${d}deg, transparent 360deg)`}}),(0,L.jsxs)(`button`,{className:N(`preclimate-button`,{spinning:g&&!s,shaking:l}),onClick:f,disabled:r!==!1||s,children:[(0,L.jsx)(I,{path:`M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z`,size:`2rem`,color:g?`#ff9800`:`#ffffff`}),(0,L.jsx)(`span`,{children:g?`Stop`:`Start`})]})]})]}):null}),vi=()=>{let e=V(),t=e.ENABLE_GARAGE||!1,n=e.ENTITY_GARAGE_DOOR||``,r=t&&n,[i,a,o]=wt({entityId:n,enabled:r,config:e,initialState:`closed`}),{error:s}=Pt({entityId:n,enabled:r,onStateUpdate:o,logPrefix:`garage door`});return[i,a||s||!1]},yi=(e,t={})=>{let n=t.ENTITY_GARAGE_DOOR||``;if(!n)return;e(!0);let r=setTimeout(()=>e(!1),Je);P.post(K(`/api/services/cover/toggle`,t),{entity_id:n}).catch(e=>{B.error(`Failed to toggle garage door:`,e)}).finally(()=>{clearTimeout(r),e(!1)})},bi=(e,t={})=>{let n=t.ENTITY_GARAGE_DOOR||``;if(!n)return;e(!0);let r=setTimeout(()=>e(!1),Je);P.post(K(`/api/services/cover/open_cover`,t),{entity_id:n}).catch(e=>{B.error(`Failed to open garage door:`,e)}).finally(()=>{clearTimeout(r),e(!1)})},xi=(e,t={})=>{let n=t.ENTITY_GARAGE_DOOR||``;if(!n)return;e(!0);let r=setTimeout(()=>e(!1),Je);P.post(K(`/api/services/cover/close_cover`,t),{entity_id:n}).catch(e=>{B.error(`Failed to close garage door:`,e)}).finally(()=>{clearTimeout(r),e(!1)})},Si=j.div`
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
`,Ci=j.div`
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
`,wi=e=>{let t={unknown:{label:`In Bewegung oder halb-offen`,icon:O},open:{label:`Offen`,icon:he},closed:{label:`Geschlossen`,icon:T},opening:{label:`Öffnet`,icon:se},closing:{label:`Schließt`,icon:D}};return t[e]||B.warn(`Garage door state is not recognized:`,e,`Available states: unknown, open, closed, opening, closing`),t[e]||{label:`Unavailable`,icon:`M21.86 12.5C21.1 11.63 20.15 11.13 19 11C19 9.05 18.32 7.4 16.96 6.04C15.6 4.68 13.95 4 12 4C10.42 4 9 4.47 7.75 5.43S5.67 7.62 5.25 9.15C4 9.43 2.96 10.08 2.17 11.1S1 13.28 1 14.58C1 16.09 1.54 17.38 2.61 18.43C3.69 19.5 5 20 6.5 20H18.5C19.75 20 20.81 19.56 21.69 18.69C22.56 17.81 23 16.75 23 15.5C23 14.35 22.62 13.35 21.86 12.5M20.27 17.27C19.79 17.76 19.2 18 18.5 18H6.5C5.53 18 4.71 17.66 4.03 17C3.34 16.29 3 15.47 3 14.5S3.34 12.71 4.03 12.03C4.71 11.34 5.53 11 6.5 11H7C7 9.62 7.5 8.44 8.46 7.46C9.44 6.5 10.62 6 12 6S14.56 6.5 15.54 7.46C16.5 8.44 17 9.62 17 11V13H18.5C19.2 13 19.79 13.24 20.27 13.73S21 14.8 21 15.5 20.76 16.79 20.27 17.27M11 15H13V17H11V15M14.43 8.68C14.97 9.13 15.24 9.75 15.24 10.5C15.24 11 15.09 11.41 14.8 11.82C14.5 12.21 14.13 12.5 13.67 12.75C13.41 12.91 13.24 13.07 13.15 13.26C13.06 13.45 13 13.69 13 14H11C11 13.45 11.11 13.08 11.3 12.82C11.5 12.56 11.85 12.25 12.37 11.91C12.63 11.75 12.84 11.56 13 11.32C13.15 11.09 13.23 10.81 13.23 10.5C13.23 10.18 13.14 9.94 12.96 9.76C12.78 9.56 12.5 9.47 12.2 9.47C11.93 9.47 11.71 9.55 11.5 9.7C11.35 9.85 11.25 10.08 11.25 10.39H9.28C9.23 9.64 9.5 9 10.06 8.59C10.6 8.2 11.31 8 12.2 8C13.14 8 13.89 8.23 14.43 8.68Z`}},Ti=({garageDoor:e,animate:t=!1})=>(0,L.jsxs)(Ci,{className:N({animate:t}),children:[(0,L.jsx)(I,{path:wi(e).icon,size:`2rem`,color:`#ffffff`}),(0,L.jsx)(`span`,{children:wi(e).label})]}),Ei=3e4,Di=e=>oe.promise(e,{loading:`Garagentor ist in Bewegung …`,success:e=>wi(e).label,error:`Nope`,duration:5e3}),Oi=(0,F.memo)(()=>{let e=V(),t=e.ENABLE_GARAGE||!1,[n,r]=vi(),[i,a]=F.useState(void 0),[o,s]=F.useState(!1),[c,l]=F.useState(!1),u=F.useRef(n);F.useEffect(()=>{u.current=n},[n]),F.useEffect(()=>{if(n===`unknown`||n===`opening`||n===`closing`){if(!i){let e,t=new Promise(t=>{e=t}),n=window.setTimeout(()=>{e(u.current),a(void 0)},Ei);a({resolve:e,watchdogId:n}),Di(t)}}else i&&(window.clearTimeout(i.watchdogId),i.resolve(n),a(void 0))},[n]);let d=In(`g`);F.useEffect(()=>{d&&r===!1&&yi(s,e)},[d,r,e]);let f=(0,F.useCallback)(t=>{if(r===!1)switch(l(!1),t){case`open`:bi(s,e);break;case`close`:xi(s,e)}},[s,r,e]),p=(0,F.useCallback)(()=>{r===!1&&l(!0)},[r]);return t?(0,L.jsxs)(Si,{className:N({disabled:r!==!1}),children:[(0,L.jsx)(`h2`,{children:`Garage`}),(0,L.jsx)(`div`,{className:`status`,onClick:p,children:r===!1?(0,L.jsx)(Ti,{garageDoor:n,animate:o}):(0,L.jsxs)(Ci,{children:[(0,L.jsx)(I,{path:re,size:`2rem`,color:`#f85a5a`}),(0,L.jsx)(`span`,{children:`Fehler`})]})}),(0,L.jsx)(R,{visible:c&&r===!1,onClick:()=>l(!1),children:(0,L.jsxs)(`div`,{className:`controls`,children:[(0,L.jsx)(`h2`,{children:`Garagentor`}),(0,L.jsx)(`div`,{onClick:()=>f(`open`),children:`Öffnen`}),(0,L.jsx)(`div`,{onClick:()=>f(`close`),children:`Schließen`})]})})]}):null}),ki=({entityIds:e,enabled:t,onStateUpdate:n,logPrefix:r,wsOptions:i={}})=>{let{error:a}=Nt({enabled:t&&e.length>0,logPrefix:r,...i,onReady:(t,i)=>(e.forEach(e=>{i.current.set(e,t=>{t.state!==void 0&&n(e,t.state)}),t.readyState===WebSocket.OPEN&&t.send(JSON.stringify({type:`subscribe_entity`,entity_id:e}))}),e.length>0&&B.debug(`Subscribed to ${r} state changes: ${e.join(`, `)}`),()=>{e.forEach(e=>{i.current.delete(e),t.readyState===WebSocket.OPEN&&t.send(JSON.stringify({type:`unsubscribe_entity`,entity_id:e}))})}),dependencies:[t,e.join(`,`)]});return{error:a}},$={done:{label:`Fertig`,animate:!1,icon:E},off:{label:`Aus`,animate:!1,icon:C},standby:{label:`Standby`,animate:!1,icon:me},running:{label:`Läuft …`,animate:!0,icon:me}},Ai={off:0,standby:2,running:16,done:256},ji=()=>{let e=V(),t=e.ENABLE_LAUNDRY||!1,n=e.LAUNDRY_MACHINES||[],r=Array.isArray(n)?n:[],i=F.useMemo(()=>r.filter(e=>e.entity_id).map(e=>e.entity_id),[r.map(e=>e.entity_id).join(`,`)]),[a,o]=F.useState({}),[s,c]=F.useState({}),l=F.useCallback((e,t)=>{o(n=>({...n,[e]:t}))},[]),{error:u}=ki({entityIds:i,enabled:t&&i.length>0,onStateUpdate:l,logPrefix:`laundry`});F.useEffect(()=>{if(!t||i.length===0)return;let n=new Map;return i.forEach(t=>{let r=K(`/api/states/${t}`,e);if(!r)return;let i=new AbortController;n.set(t,i),P(r,{signal:i.signal}).then(e=>{o(n=>({...n,[t]:e.data.state})),c(e=>({...e,[t]:!1}))}).catch(e=>{i.signal.aborted||c(n=>({...n,[t]:G(e)}))})}),()=>{n.forEach(e=>e.abort())}},[t,i.join(`,`),e]);let d=r.map(e=>({state:a[e.entity_id]||`off`,error:s[e.entity_id]||u||!1,name:e.name})),[f,p]=F.useState($.off),[m,h]=F.useState(!1),g=d.map(e=>e.state),_=d.map(e=>e.error);return F.useEffect(()=>{let e=_.some(e=>e!==!1);h(e&&_.find(e=>e!==!1)||!1)},[_]),F.useEffect(()=>{let e=g.reduce((e,t)=>e+(Ai[t]||0),0);e===0?p($.off):e<16?p($.standby):e<256?p($.running):e%256==0?p($.done):e%256%16==0?p($.running):e%256%2==0?p($.done):p($.running)},[g]),[f,d.map(e=>({label:e.name,state:e.state})),m]},Mi=j.div`
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
`,Ni=(0,F.memo)(()=>{let e=V().ENABLE_LAUNDRY||!1,[t,n,r]=ji(),[i,a]=F.useState(!1),o=(0,F.useCallback)(()=>{r===!1&&a(!0)},[r]),s=(0,F.useCallback)(()=>a(!1),[]);return e?(0,L.jsxs)(Mi,{className:N({disabled:r!==!1}),children:[(0,L.jsx)(`h2`,{children:`Wäsche`}),(0,L.jsx)(`div`,{className:`status`,onClick:o,children:r===!1?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`div`,{className:N({animate:t.animate}),children:(0,L.jsx)(I,{path:t.icon,size:`2rem`,color:`#ffffff`})}),(0,L.jsx)(`span`,{children:t.label})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(I,{path:re,size:`2rem`,color:`#f85a5a`}),(0,L.jsx)(`span`,{children:`Fehler`})]})}),(0,L.jsx)(R,{visible:i&&r===!1,onClick:s,children:(0,L.jsxs)(`div`,{className:`states`,children:[(0,L.jsx)(`h2`,{children:`Wäsche`}),n.map((e,t)=>(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{className:`subtitle`,children:e.label}),(0,L.jsx)(`div`,{className:N({animate:$[e.state].animate}),children:(0,L.jsx)(I,{path:$[e.state].icon,size:2})}),(0,L.jsx)(`div`,{children:$[e.state].label})]},t))]})})]}):null}),Pi=j.div`
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
`,Fi=(0,F.memo)(()=>(0,L.jsxs)(Pi,{children:[(0,L.jsxs)(`div`,{className:`top-content`,children:[(0,L.jsx)(Y,{compact:!0,children:(0,L.jsx)(ei,{})}),(0,L.jsx)(Y,{compact:!0,children:(0,L.jsx)(li,{})}),(0,L.jsx)(Y,{compact:!0,children:(0,L.jsx)(_i,{})})]}),(0,L.jsxs)(`div`,{className:`two-cols`,children:[(0,L.jsx)(Y,{compact:!0,children:(0,L.jsx)(Oi,{})}),(0,L.jsx)(Y,{compact:!0,children:(0,L.jsx)(Ni,{})})]})]})),Ii=[{name:`Full HD`,width:1920,height:1080},{name:`HD`,width:1366,height:768},{name:`QHD`,width:2560,height:1440},{name:`4K`,width:3840,height:2160},{name:`Amazon Fire HD 7"`,width:1280,height:800},{name:`Custom`,width:null,height:null}],Li=[{name:`1 Video - Landscape`,videos:[{orientation:`landscape`}]},{name:`1 Video - Portrait`,videos:[{orientation:`portrait`}]},{name:`1 Video - Wide`,videos:[{orientation:`wide`}]},{name:`2 Videos - LL`,videos:[{orientation:`landscape`},{orientation:`landscape`}]},{name:`2 Videos - LP`,videos:[{orientation:`landscape`},{orientation:`portrait`}]},{name:`2 Videos - LW`,videos:[{orientation:`landscape`},{orientation:`wide`}]},{name:`2 Videos - PP`,videos:[{orientation:`portrait`},{orientation:`portrait`}]},{name:`2 Videos - PW`,videos:[{orientation:`portrait`},{orientation:`wide`}]},{name:`2 Videos - WW`,videos:[{orientation:`wide`},{orientation:`wide`}]},{name:`3 Videos - LLL`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`landscape`}]},{name:`3 Videos - LLP`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`portrait`}]},{name:`3 Videos - LLW`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`wide`}]},{name:`3 Videos - LPW`,videos:[{orientation:`landscape`},{orientation:`portrait`},{orientation:`wide`}]},{name:`3 Videos - LPP`,videos:[{orientation:`landscape`},{orientation:`portrait`},{orientation:`portrait`}]},{name:`3 Videos - LWW`,videos:[{orientation:`landscape`},{orientation:`wide`},{orientation:`wide`}]},{name:`3 Videos - PPP`,videos:[{orientation:`portrait`},{orientation:`portrait`},{orientation:`portrait`}]},{name:`3 Videos - PWW`,videos:[{orientation:`portrait`},{orientation:`wide`},{orientation:`wide`}]},{name:`3 Videos - WWW`,videos:[{orientation:`wide`},{orientation:`wide`},{orientation:`wide`}]},{name:`4 Videos - LLLL`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`landscape`},{orientation:`landscape`}]},{name:`4 Videos - LLLP`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`landscape`},{orientation:`portrait`}]},{name:`4 Videos - LLPP`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`portrait`},{orientation:`portrait`}]},{name:`4 Videos - LPPP`,videos:[{orientation:`landscape`},{orientation:`portrait`},{orientation:`portrait`},{orientation:`portrait`}]},{name:`4 Videos - PPPP`,videos:[{orientation:`portrait`},{orientation:`portrait`},{orientation:`portrait`},{orientation:`portrait`}]},{name:`4 Videos - LLLW`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`landscape`},{orientation:`wide`}]},{name:`4 Videos - LLWW`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`wide`},{orientation:`wide`}]},{name:`4 Videos - LWWW`,videos:[{orientation:`landscape`},{orientation:`wide`},{orientation:`wide`},{orientation:`wide`}]},{name:`4 Videos - WWWW`,videos:[{orientation:`wide`},{orientation:`wide`},{orientation:`wide`},{orientation:`wide`}]}],Ri={landscape:`#4A90E2`,portrait:`#50C878`,wide:`#FF8C42`},zi={landscape:`L`,portrait:`P`,wide:`W`},Bi=j.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Vi=j.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Hi=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Ui=j.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Wi=j.label`
  font-size: 0.9rem;
  color: #cccccc;
`,Gi=j.select`
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
`,Ki=j.input`
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
`,qi=j.button`
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
`,Ji=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Yi=j.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?`#4A90E2`:`#3a3a3a`};
  color: #ffffff;
  border: 1px solid ${e=>e.active?`#4A90E2`:`#555`};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.active?`#357ABD`:`#4a4a4a`};
  }
`,Xi=j.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Zi=j.div`
  position: absolute;
  background-color: ${e=>Ri[e.orientation]||`#666`};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,Qi=j.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,$i=j.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,ea=j.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,ta=j.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,na=j.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ra=j.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,ia=j.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,aa=j.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;j.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,j.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;var oa=j.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?Ri[e.orientation]:`#3a3a3a`};
  color: #ffffff;
  border: 1px solid ${e=>e.active?Ri[e.orientation]:`#555`};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?Ri[e.orientation]:`#4a4a4a`};
  }
`,sa=()=>{let[e,t]=(0,F.useState)(1920),[n,r]=(0,F.useState)(1080),[i,a]=(0,F.useState)(`Full HD`),[o,s]=(0,F.useState)(``),[c,l]=(0,F.useState)(``),[u,d]=(0,F.useState)([{orientation:`landscape`}]),[f,p]=(0,F.useState)(null),m=(0,F.useMemo)(()=>Ut(u,e,n),[u,e,n]),h=e=>{let n=Ii.find(t=>t.name===e);n&&n.width&&n.height?(t(n.width),r(n.height),a(e),s(``),l(``)):e===`Custom`&&a(`Custom`)},g=()=>{let e=parseInt(o),n=parseInt(c);e>0&&n>0&&(t(e),r(n))},_=e=>{d(e.videos),p(e.name)},v=e=>{let t=[];for(let n=0;n<e;n++)t.push(u[n]||{orientation:`landscape`});d(t),p(null)},y=(e,t)=>{let n=[...u];n[e]={orientation:t},d(n),p(null)},b=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/n));return(0,L.jsxs)(Bi,{children:[(0,L.jsx)(Vi,{children:`Video Tiling Algorithm Demo`}),(0,L.jsxs)(Hi,{children:[(0,L.jsxs)(Ui,{children:[(0,L.jsx)(Wi,{children:`Screen Size Preset`}),(0,L.jsx)(Gi,{value:i,onChange:e=>h(e.target.value),children:Ii.map(e=>(0,L.jsx)(`option`,{value:e.name,children:e.name},e.name))})]}),i===`Custom`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Ui,{children:[(0,L.jsx)(Wi,{children:`Custom Width`}),(0,L.jsx)(Ki,{type:`number`,value:o,onChange:e=>s(e.target.value),placeholder:`Width`,min:`100`})]}),(0,L.jsxs)(Ui,{children:[(0,L.jsx)(Wi,{children:`Custom Height`}),(0,L.jsx)(Ki,{type:`number`,value:c,onChange:e=>l(e.target.value),placeholder:`Height`,min:`100`})]}),(0,L.jsxs)(Ui,{children:[(0,L.jsx)(Wi,{children:`\xA0`}),(0,L.jsx)(qi,{onClick:g,children:`Apply Custom Size`})]})]}),(0,L.jsxs)(Ui,{children:[(0,L.jsx)(Wi,{children:`Number of Videos`}),(0,L.jsxs)(Gi,{value:u.length,onChange:e=>v(parseInt(e.target.value)),children:[(0,L.jsx)(`option`,{value:`1`,children:`1 Video`}),(0,L.jsx)(`option`,{value:`2`,children:`2 Videos`}),(0,L.jsx)(`option`,{value:`3`,children:`3 Videos`}),(0,L.jsx)(`option`,{value:`4`,children:`4 Videos`})]})]}),u.map((e,t)=>(0,L.jsxs)(Ui,{children:[(0,L.jsxs)(Wi,{children:[`Video `,t+1,` Orientation`]}),(0,L.jsxs)(Ji,{children:[(0,L.jsx)(oa,{active:e.orientation===`landscape`,orientation:`landscape`,onClick:()=>y(t,`landscape`),children:`Landscape`}),(0,L.jsx)(oa,{active:e.orientation===`portrait`,orientation:`portrait`,onClick:()=>y(t,`portrait`),children:`Portrait`}),(0,L.jsx)(oa,{active:e.orientation===`wide`,orientation:`wide`,onClick:()=>y(t,`wide`),children:`Wide`})]})]},t))]}),(0,L.jsxs)(ia,{children:[(0,L.jsx)(aa,{children:`Test Scenarios`}),(0,L.jsx)(Ji,{children:Li.map(e=>(0,L.jsx)(Yi,{active:f===e.name,onClick:()=>_(e),children:e.name},e.name))})]}),(0,L.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginTop:`24px`},children:(0,L.jsx)(Xi,{style:{width:`${e*b}px`,height:`${n*b}px`},children:m.videos.map((e,t)=>(0,L.jsxs)(Zi,{orientation:e.orientation,style:{left:`${e.x*b}px`,top:`${e.y*b}px`,width:`${e.width*b}px`,height:`${e.height*b}px`},children:[(0,L.jsxs)(Qi,{children:[zi[e.orientation],` `,t+1]}),(0,L.jsxs)($i,{children:[Math.round(e.width),` × `,Math.round(e.height)]})]},t))})}),(0,L.jsxs)(ea,{children:[(0,L.jsxs)(ta,{children:[(0,L.jsx)(na,{children:`Canvas Size`}),(0,L.jsxs)(ra,{children:[e,` × `,n]})]}),(0,L.jsxs)(ta,{children:[(0,L.jsx)(na,{children:`Total Area Used`}),(0,L.jsxs)(ra,{children:[Math.round(m.totalArea).toLocaleString(),` px²`]})]}),(0,L.jsxs)(ta,{children:[(0,L.jsx)(na,{children:`Efficiency`}),(0,L.jsxs)(ra,{children:[m.efficiency.toFixed(2),`%`]})]}),(0,L.jsxs)(ta,{children:[(0,L.jsx)(na,{children:`Display Scale`}),(0,L.jsxs)(ra,{children:[(b*100).toFixed(1),`%`]})]})]})]})},ca=`hass-family-calendar-config-banner-dismissed`,la=j.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${e=>e.severity===`error`?`#d32f2f`:`#ff9800`};
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
`,ua=()=>{let e=it(),t=at(),n=ot(),r=rt(),[i,a]=(0,F.useState)(()=>{try{if(typeof window<`u`&&window.localStorage)return localStorage.getItem(ca)===`true`}catch{}return!1}),[o,s]=(0,F.useState)(!1);if((0,F.useEffect)(()=>{if(e&&i){a(!1);try{typeof window<`u`&&window.localStorage&&localStorage.removeItem(ca)}catch{}}},[e,i]),r||i||!e&&!t)return null;let c=async()=>{s(!0);try{await n()}catch{}finally{s(!1)}},l=()=>{a(!0);try{typeof window<`u`&&window.localStorage&&localStorage.setItem(ca,`true`)}catch{}},u=`warning`,d=``;return e&&t?(u=`warning`,d=`Using cached configuration. Failed to load from server: ${e}`):e&&!t?(u=`error`,d=`Failed to load configuration: ${e}`):t&&(u=`warning`,d=`Using cached configuration. Some features may be outdated.`),(0,L.jsxs)(la,{severity:u,children:[(0,L.jsx)(`div`,{className:`message`,children:d}),(0,L.jsxs)(`div`,{className:`actions`,children:[e&&(0,L.jsx)(`button`,{onClick:c,disabled:o,children:o?`Retrying...`:`Retry`}),(0,L.jsx)(`button`,{className:`dismiss`,onClick:l,title:`Dismiss`,children:`×`})]})]})},da=()=>{function e(e,t){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(t))throw Error(`Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').`);let[n,r]=t.split(`:`).map(Number),i=new Date,a=new Date(i.getFullYear(),i.getMonth(),i.getDate());a.setHours(n,r,0,0),a<=i&&a.setDate(a.getDate()+1);let o=a.getTime()-i.getTime();return B.log(`Reloading page at`,t,`in`,Math.floor(o/1e3/60),`minutes`),setTimeout(e,o)}let t=()=>{B.log(`Timeout reached! `),window.location.reload(!0)};F.useLayoutEffect(()=>{let n=[e(t,`00:00`),e(t,`03:00`),e(t,`06:00`),e(t,`09:00`),e(t,`12:00`),e(t,`15:00`),e(t,`18:00`),e(t,`21:00`)];return()=>{n.forEach(e=>{e&&clearTimeout(e)})}},[])},fa=w`
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
`,pa=j.div`
  padding: 0 12px;
  min-width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: ${e=>e.$hasBanner?`48px`:`0`};
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
`;function ma(){da();let e=it(),t=at(),n=rt(),[r]=F.useState(()=>{try{if(typeof window<`u`&&window.localStorage)return localStorage.getItem(ca)===`true`}catch{}return!1});return(0,L.jsxs)(pa,{$hasBanner:!n&&!r&&(e||t),children:[(0,L.jsx)(fa,{}),(0,L.jsx)(ua,{}),(0,L.jsxs)(`div`,{className:`main`,children:[(0,L.jsx)(Y,{autoReload:!0,label:`Kalender`,children:(0,L.jsx)(Kr,{})}),(0,L.jsx)(Y,{autoReload:!0,label:`Sidebar`,children:(0,L.jsx)(Fi,{})})]}),(0,L.jsx)(de,{position:`bottom-center`,theme:`dark`,duration:5e3,closeButton:!0})]})}function ha(){return(0,L.jsx)(Y,{autoReload:!0,label:`App`,children:(0,L.jsxs)(v,{children:[(0,L.jsx)(t,{path:`/demo`,element:(0,L.jsx)(sa,{})}),(0,L.jsx)(t,{path:`/tiling-demo`,element:(0,L.jsx)(sa,{})}),(0,L.jsx)(t,{path:`*`,element:(0,L.jsx)(ma,{})})]})})}ve.createRoot(document.getElementById(`root`)).render((0,L.jsx)(F.StrictMode,{children:(0,L.jsx)(Y,{autoReload:!0,label:`Root`,children:(0,L.jsx)(nt,{children:(0,L.jsx)(bt,{children:(0,L.jsx)(o,{children:(0,L.jsx)(ha,{})})})})})}));