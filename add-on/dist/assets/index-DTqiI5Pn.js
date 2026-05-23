import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{_ as t,a as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _,v,x as y,y as b}from"./react-vendor-Bn4NJZ7P.js";import{C as x,D as S,E as C,O as w,S as T,T as E,_ as D,a as O,b as k,c as A,d as ee,f as te,h as ne,i as re,l as ie,m as ae,n as oe,o as se,p as ce,r as le,s as ue,t as de,u as fe,w as pe,x as me,y as he}from"./ui-vendor-fWGdQOQc.js";import{t as j}from"./date-vendor-B0DcZ4Zp.js";import{t as M}from"./vendor-CjueKrWZ.js";import{n as N,t as ge}from"./utils-vendor-DhpRsnx6.js";import{t as _e}from"./chart-vendor-CRmKh6W3.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var P=e(y(),1),ve=e(b(),1),ye=e(C(),1),F=[ye.default,ye.default?.default,ye.default?.Icon,ye.Icon,ye.Icon?.default].find(e=>typeof e==`function`||typeof e==`object`&&!!e&&e.$$typeof!=null);!F&&typeof console<`u`&&console.error(`mdi-icon: could not resolve a renderable Icon component from @mdi/react`);var I=s(),be=w.div`
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
`,xe=({visible:e,children:t,onClick:n,onClose:r,fullsize:i=!1})=>{let a=r||n;return P.useEffect(()=>{if(e){let e=window.scrollY;return document.body.style.position=`fixed`,document.body.style.top=`-${e}px`,document.body.style.width=`100%`,document.body.style.overflow=`hidden`,()=>{document.body.style.position=``,document.body.style.top=``,document.body.style.width=``,document.body.style.overflow=``,window.scrollTo(0,e)}}},[e]),e?(0,I.jsxs)(be,{onClick:n,children:[(0,I.jsx)(`div`,{className:`close`,onClick:e=>{e.stopPropagation(),e.preventDefault(),a()},children:(0,I.jsx)(F,{path:ne,size:2})}),(0,I.jsx)(`div`,{className:M(`content`,{fullsize:i}),onClick:e=>e.stopPropagation(),children:t})]}):null},Se=!0,Ce=e=>{Se=!!e},we=!1,L=[],R=0,Te=100,Ee=50,De=()=>{if(L.length===0||we)return;let e=L.shift(),t=Date.now();t-R>=Te?Oe(e.level,e.message,e.metadata):(L.unshift(e),setTimeout(De,Te-(t-R)))},Oe=(e,t,n=null)=>{if(!Se)return;if(we){L.length<Ee&&L.push({level:e,message:t,metadata:n,timestamp:Date.now()});return}let r=Date.now();if(r-R<Te){L.length<Ee&&(L.push({level:e,message:t,metadata:n,timestamp:r}),L.length===1&&setTimeout(De,Te-(r-R)));return}setTimeout(async()=>{we=!0,R=Date.now();try{let r=`${typeof window<`u`&&window.location?window.location.pathname.replace(/\/$/,``):``}/api/log`,i={level:e,message:t,...n&&{metadata:n}};await N.create({timeout:2e3}).post(r,i)}catch{L.length>10&&(L=[])}finally{we=!1,L.length>0&&setTimeout(De,Te)}},0)},ke=e=>{if(e.length===0)return``;if(e.length===1){let t=e[0];return typeof t==`string`?t:typeof t==`object`?JSON.stringify(t,null,2):String(t)}return e.map(e=>typeof e==`object`?JSON.stringify(e,null,2):String(e)).join(` `)},Ae=e=>{if(e.length<=1)return null;if(typeof e[0]==`string`&&e.length>1){let t={};return e.slice(1).forEach((e,n)=>{typeof e==`object`&&e?Object.assign(t,e):t[`arg${n}`]=e}),Object.keys(t).length>0?t:null}if(e.every(e=>typeof e==`object`&&!!e)){let t={};return e.forEach(e=>Object.assign(t,e)),t}return null},z={log:(...e)=>{let t=ke(e),n=Ae(e);t&&Oe(`INFO`,t,n)},error:(...e)=>{console.error(...e);let t=ke(e),n=Ae(e);t&&Oe(`ERROR`,t,n)},warn:(...e)=>{let t=ke(e),n=Ae(e);t&&Oe(`WARNING`,t,n)},debug:(...e)=>{},info:(...e)=>{let t=ke(e),n=Ae(e);t&&Oe(`INFO`,t,n)}},je=3e4,Me=1e4,Ne=6e4,Pe=1e3,Fe=5e3,Ie=2e3,Le=45e3,Re=3e4,ze=6e5,Be=1e4,Ve=15e3,He=3e3,Ue=`hass-family-calendar-config`,We=()=>{let e=(e,t=void 0)=>{let n={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1}[`VITE_${e}`];return n===void 0?t:n};return{HASS_HOST:e(`HASS_HOST`,``),HASS_ACCESS_TOKEN:e(`HASS_ACCESS_TOKEN`,``),INGRESS_URL:e(`INGRESS_URL`,``),ENABLE_WEATHER:e(`ENABLE_WEATHER`,!1),WEATHER_LATITUDE:e(`WEATHER_LATITUDE`),WEATHER_LONGITUDE:e(`WEATHER_LONGITUDE`),ENABLE_HVV:e(`ENABLE_HVV`,!1),GEOFOX_USER:e(`GEOFOX_USER`,``),ENABLE_GARAGE:e(`ENABLE_GARAGE`,!1),ENTITY_GARAGE_DOOR:e(`ENTITY_GARAGE_DOOR`,``),ENABLE_LAUNDRY:e(`ENABLE_LAUNDRY`,!1),LAUNDRY_MACHINES:(()=>{let t=e(`LAUNDRY_MACHINES`,`[]`);try{return typeof t==`string`?JSON.parse(t):t}catch{return[]}})(),ENABLE_DOORBELL:e(`ENABLE_DOORBELL`,!1),ENTITY_DOORBELL:e(`ENTITY_DOORBELL`,``),ENTITY_DOORBELL_BUTTON:e(`ENTITY_DOORBELL_BUTTON`,``),DOORBELL_CAMERAS:(()=>{let t=e(`DOORBELL_CAMERAS`,`[]`);try{return typeof t==`string`?JSON.parse(t):t}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e(`ENABLE_EVERYDAY_CALENDAR`,!1),ENTITY_EVERYDAY_CALENDAR:e(`ENTITY_EVERYDAY_CALENDAR`,``),ENABLE_EV:e(`ENABLE_EV`,!1),ENTITY_PRECLIMATE_STATUS:e(`ENTITY_PRECLIMATE_STATUS`,``),ENTITY_PRECLIMATE_START:e(`ENTITY_PRECLIMATE_START`,``),ENTITY_PRECLIMATE_STOP:e(`ENTITY_PRECLIMATE_STOP`,``),ENTITY_CHARGING_STATE:e(`ENTITY_CHARGING_STATE`,``),ENTITY_STATE_OF_CHARGE:e(`ENTITY_STATE_OF_CHARGE`,``),CALENDARS:(()=>{let t=e(`CALENDARS`,`[]`);try{return typeof t==`string`?JSON.parse(t):t}catch{return[]}})(),ENABLE_LOGGING:e(`ENABLE_LOGGING`,!1)}},Ge=()=>{try{if(typeof window>`u`||!window.localStorage)return null;let e=localStorage.getItem(Ue);if(e){let t=JSON.parse(e);return z.debug(`Loaded cached config from localStorage`),t}}catch(e){z.warn(`Failed to load cached config from localStorage:`,e);try{typeof window<`u`&&window.localStorage&&localStorage.removeItem(Ue)}catch{}}return null},Ke=e=>{try{return typeof window>`u`||!window.localStorage?!1:(localStorage.setItem(Ue,JSON.stringify(e)),z.debug(`Saved config to localStorage`),!0)}catch(e){return z.warn(`Failed to save config to localStorage:`,e),!1}},B=(0,P.createContext)(null),qe=({children:e})=>{let[t,n]=(0,P.useState)(()=>Ge()||We()),[r,i]=(0,P.useState)(!0),[a,o]=(0,P.useState)(null),[s,c]=(0,P.useState)(()=>!!Ge()),l=(0,P.useRef)(!0),u=(0,P.useRef)(t),d=(0,P.useRef)(!1),f=(0,P.useRef)(!1);(0,P.useEffect)(()=>{u.current=t},[t]);let p=(0,P.useCallback)(async(e=!1)=>{if(d.current&&!e)return z.debug(`Config load already in progress, skipping`),!1;if(!e&&f.current)return z.debug(`Config already initialized, skipping load`),!1;d.current=!0,e||(f.current=!0),z.debug(`Starting config load`,{isReload:e,hasInitialized:f.current});let t=typeof window<`u`&&window.location?`${window.location.pathname.replace(/\/$/,``)}/api/config`:`/api/config`;try{let r=await N.get(t,{timeout:Fe});if(r.data&&typeof r.data==`object`)if(typeof r.data==`object`&&!Array.isArray(r.data)){z.debug(`Config loaded from API:`,{hasCALENDARS:`CALENDARS`in r.data,CALENDARS:r.data.CALENDARS,CALENDARSCount:Array.isArray(r.data.CALENDARS)?r.data.CALENDARS.length:`not array`,allKeys:Object.keys(r.data)});let t=u.current,a=JSON.stringify(r.data)!==JSON.stringify(t);z.debug(`Updating config with new data from API:`,{configChanged:a,CALENDARSCount:Array.isArray(r.data.CALENDARS)?r.data.CALENDARS.length:`not array`,currentCALENDARSCount:Array.isArray(t?.CALENDARS)?t.CALENDARS.length:`not array`,responseKeys:Object.keys(r.data).length,currentConfigKeys:Object.keys(t||{}).length}),a?(n(r.data),c(!1),o(null),Ke(r.data)):(c(!1),o(null));let s=Object.keys(r.data).filter(e=>e.startsWith(`ENABLE_`)&&r.data[e]).map(e=>e.replace(`ENABLE_`,``));return z.info(`Configuration ${e?`reloaded`:`loaded`} from API endpoint. Enabled features: ${s.length>0?s.join(`, `):`none`}`,{enabledFeatures:s,totalConfigKeys:Object.keys(r.data).length}),e||i(!1),d.current=!1,!0}else throw Error(`Invalid config structure: expected object, got array`);else throw Error(`Invalid config response: missing or invalid data`)}catch(t){let r=t.response?.data?.detail||t.message||`Unknown error`;if(e)return z.warn(`Failed to reload config from API, keeping current config:`,r),!1;{let e=Ge();return e?(z.warn(`Failed to load config from API, using cached config:`,r),l.current&&(n(e),c(!0),o(r),i(!1)),!1):(z.debug(`Failed to load config from API, using defaults:`,r),l.current&&(o(r),i(!1)),!1)}}finally{d.current=!1}},[]),m=(0,P.useRef)(null),h=(0,P.useCallback)(async()=>{if(m.current)return z.debug(`Config reload already in progress, skipping`),m.current;z.debug(`Reloading config...`);let e=p(!0).finally(()=>{m.current=null});return m.current=e,e},[p]),g=(0,P.useRef)(!1);(0,P.useEffect)(()=>{if(g.current){z.debug(`Config already loaded, skipping initial load`);return}return g.current=!0,z.debug(`Initial config load starting`),p(!1),()=>{l.current=!1}},[]),(0,P.useEffect)(()=>{let e=t.HASS_ACCESS_TOKEN||``;e&&typeof e==`string`&&e.trim()!==``&&e!==`undefined`&&e!==`null`?(N.defaults.headers.common.Authorization=`Bearer ${e}`,z.debug(`Axios Authorization header set from config (local dev mode)`)):(delete N.defaults.headers.common.Authorization,z.debug(`Axios Authorization header removed (add-on mode or no token)`))},[t.HASS_ACCESS_TOKEN]),(0,P.useEffect)(()=>{Ce(t.ENABLE_LOGGING===!0)},[t.ENABLE_LOGGING]);let _=(0,P.useMemo)(()=>({config:t,loading:r,configError:a,isUsingCachedConfig:s,reloadConfig:h}),[t,r,a,s,h]);return(0,I.jsx)(B.Provider,{value:_,children:e})},V=()=>{let e=(0,P.useContext)(B);if(!e)throw Error(`useConfig must be used within ConfigProvider`);return e.config},Je=()=>{let e=(0,P.useContext)(B);if(!e)throw Error(`useConfigLoading must be used within ConfigProvider`);return e.loading},Ye=()=>{let e=(0,P.useContext)(B);if(!e)throw Error(`useConfigError must be used within ConfigProvider`);return e.configError},Xe=()=>{let e=(0,P.useContext)(B);if(!e)throw Error(`useIsUsingCachedConfig must be used within ConfigProvider`);return e.isUsingCachedConfig},Ze=()=>{let e=(0,P.useContext)(B);if(!e)throw Error(`useReloadConfig must be used within ConfigProvider`);return e.reloadConfig},H=0,Qe=0,U=0,W=[],$e=e=>{let t={message:e.message||`Unknown error occurred`,status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(t.status=e.response.status,t.responseData=e.response.data,t.url=e.config?.url||e.request?.responseURL||`Unknown URL`,t.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(t.isNetworkError=!0,t.url=e.config?.url||`Unknown URL`,t.message=`Network error: No response received from server`,e.request.readyState!==void 0&&(t.readyState=e.request.readyState),e.request.status!==void 0&&(t.requestStatus=e.request.status)):(t.message=e.message||`Request setup error`,t.url=e.config?.url||`Unknown URL`),(e.code===`ECONNABORTED`||e.message?.includes(`timeout`))&&(t.isTimeoutError=!0,t.message=`Request timeout: The request took too long to complete`),e.config&&(t.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?`[REDACTED]`:void 0},hasAuthHeader:!!e.config.headers?.Authorization}),t},et=(e,t=``)=>{let n=$e(e);if(n.url&&(n.url.includes(`/api/log`)||n.url.endsWith(`/api/log`)||e.config?.url?.includes(`/api/log`)||e.config?.url?.endsWith(`/api/log`)))return n;U++,H++,W.push({timestamp:new Date().toISOString(),url:n.url,status:n.status,code:n.code,message:n.message,isNetworkError:n.isNetworkError,isTimeoutError:n.isTimeoutError}),W.length>10&&W.shift();let r=[];return t&&r.push(`[${t}]`),r.push(`🔴 Axios API Error:`),r.push(`Message: ${n.message}`),n.url&&r.push(`URL: ${n.url}`),n.status&&r.push(`HTTP Status: ${n.status}`),n.code&&r.push(`Error Code: ${n.code}`),n.isNetworkError&&(r.push(`Type: Network Error (no response received)`),n.readyState!==void 0&&r.push(`ReadyState: ${n.readyState}`)),n.isTimeoutError&&r.push(`Type: Timeout Error`),n.config&&(r.push(`Method: ${n.config.method?.toUpperCase()||`UNKNOWN`}`),r.push(`Has Auth Header: ${n.config.hasAuthHeader}`),n.config.timeout&&r.push(`Timeout: ${n.config.timeout}ms`)),n.responseData&&r.push(`Response Data:`,n.responseData),r.push(`Request Stats: ${Qe} success, ${U} errors (${H} total)`),U>3&&W.length>0&&r.push(`Recent errors pattern:`,W.slice(-5)),z.error(...r),n},tt=e=>{Qe++,H++,(H%10==0||U>0)&&z.debug(`✅ Axios Request Success:`,{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:H,stats:`${Qe} success, ${U} errors`}),U>0&&H%10==0&&Qe>U&&(z.debug(`Request pattern: Errors cleared, connection appears healthy`),U=0,W.length=0)},G=e=>{let t=$e(e);return t.isNetworkError?`Netzwerkfehler: Server nicht erreichbar`:t.isTimeoutError?`Zeitüberschreitung: Die Anfrage dauerte zu lange`:t.status===401?`Authentifizierungsfehler: Bitte erneut anmelden`:t.status===403?`Berechtigungsfehler: Keine Berechtigung für diese Aktion`:t.status===404?`Nicht gefunden: Die angeforderte Ressource existiert nicht`:t.status>=500?`Serverfehler: Bitte später erneut versuchen`:t.message||`Ein Fehler ist aufgetreten`},nt=null,rt=e=>{nt=e};N.interceptors.request.use(e=>{let t=Date.now();return e.metadata={requestId:t,startTime:Date.now()},typeof window<`u`&&(t%50==0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,z.debug(`Axios Defaults State:`,{baseURL:N.defaults.baseURL,timeout:N.defaults.timeout,hasAuthHeader:!!N.defaults.headers?.common?.Authorization,authHeaderLength:N.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(N.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes(`/api/log`)||e.config?.url?.endsWith(`/api/log`)||z.error(`Axios Request Setup Error:`,e),Promise.reject(e))),N.interceptors.response.use(e=>(e.config&&tt(e.config),e),e=>{let t=e.config?.url?.includes(`/api/log`)||e.config?.url?.endsWith(`/api/log`),n=e.config?.metadata?.skipConnectionCheck===!0;if(!t){if(et(e,e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:`Axios Request`),e.config?.metadata){let t=Date.now()-e.config.metadata.startTime;z.error(`Request Duration:`,`${t}ms`,`Request ID:`,e.config.metadata.requestId)}!n&&nt&&!e.response&&(e.code===`ERR_NETWORK`||e.code===`ECONNABORTED`||e.code===`ERR_CANCELED`)&&(z.debug(`Network error detected - triggering connection check`),nt())}return Promise.reject(e)});var K=(e,t={})=>{let n=e.startsWith(`/`)?e:`/${e}`;if(typeof window<`u`&&window.location){if(window.location.pathname.includes(`/api/hassio_ingress/`)){let e=window.location.pathname.match(/^(\/api\/hassio_ingress\/[^\/]+\/)/);if(e)return`${e[1]}${n.startsWith(`/`)?n.slice(1):n}`}return n}return n},it=(e={})=>{if(typeof window<`u`&&window.location){let t=e.INGRESS_URL||``;if(t&&typeof t==`string`&&t.trim()!==``)return`${window.location.origin}${t.replace(/\/$/,``)}`;let n=window.location.pathname.replace(/\/$/,``);return`${window.location.origin}${n}`}return``},at=(e={})=>{let t=it(e);return t?`${t.startsWith(`https://`)?`wss://`:`ws://`}${t.replace(/^https?:\/\//,``)}/api/websocket`:``},ot=3e3,st=3e4,ct=5e3,lt=()=>{let[e,t]=(0,P.useState)(!0),n=(0,P.useRef)(null),r=(0,P.useRef)(null),i=(0,P.useRef)(!1),a=(0,P.useRef)(Date.now()),o=(0,P.useRef)(!0);(0,P.useEffect)(()=>{o.current=e},[e]);let s=(0,P.useCallback)(async()=>{if(!i.current){i.current=!0,a.current=Date.now();try{let e=`${typeof window<`u`&&window.location?window.location.pathname.replace(/\/$/,``):``}/api/config`;await N.get(e,{timeout:ct,metadata:{skipConnectionCheck:!0}}),o.current||z.info(`Connection restored - backend is reachable`),t(!0),i.current=!1,r.current&&=(clearInterval(r.current),null)}catch(e){!e.response&&(e.code===`ERR_NETWORK`||e.code===`ECONNABORTED`)?(o.current&&z.warn(`Connection lost - backend is not reachable`),t(!1),i.current=!1,r.current||=setInterval(()=>{s()},st)):(o.current||z.info(`Connection restored - backend responded (with error)`),t(!0),i.current=!1,r.current&&=(clearInterval(r.current),null))}}},[]),c=(0,P.useCallback)(()=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{s()},ot)},[s]);return(0,P.useEffect)(()=>{let e=()=>{document.visibilityState===`visible`&&(z.debug(`Page became visible - checking connection`),c())};return document.addEventListener(`visibilitychange`,e),()=>{document.removeEventListener(`visibilitychange`,e)}},[c]),(0,P.useEffect)(()=>{let e=setTimeout(()=>{s()},1e3);return()=>{clearTimeout(e)}},[s]),(0,P.useEffect)(()=>()=>{n.current&&clearTimeout(n.current),r.current&&clearInterval(r.current)},[]),{isConnected:e,triggerCheck:c}},ut=(0,P.createContext)(null),dt=({children:e})=>{let t=lt(),n=Ze(),r=(0,P.useRef)(!1),i=(0,P.useRef)(null),a=(0,P.useRef)(!1);return(0,P.useEffect)(()=>(rt(t.triggerCheck),()=>{rt(null)}),[t.triggerCheck]),(0,P.useEffect)(()=>{let e=t.isConnected;if(!e){r.current=!0,i.current&&=(clearTimeout(i.current),null);return}return r.current&&e&&!a.current&&(i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{a.current||(a.current=!0,z.debug(`Connection restored - triggering config reload`),n().then(()=>{r.current=!1}).catch(e=>{z.warn(`Failed to reload config after connection restore:`,e)}).finally(()=>{a.current=!1,i.current=null}))},Ie)),()=>{i.current&&=(clearTimeout(i.current),null)}},[t.isConnected,n]),(0,I.jsx)(ut.Provider,{value:t,children:e})},ft=()=>{let e=(0,P.useContext)(ut);if(!e)throw Error(`useConnectionStateContext must be used within ConnectionStateProvider`);return e},pt=3,mt=e=>e.code===`ECONNABORTED`||e.code===`ERR_NETWORK`||e.message?.includes(`timeout`),q=({entityId:e,enabled:t=!0,config:n,initialState:r=null,extractState:i=e=>e.data.state})=>{let[a,o]=P.useState(r),[s,c]=P.useState(!1),{isConnected:l}=ft(),u=P.useRef(!1),[d,f]=P.useState(0);P.useEffect(()=>{l?u.current&&(u.current=!1,f(e=>e+1)):u.current=!0},[l]);let p=t&&!!e,m=e?K(`/api/states/${e}`,n):null;return P.useEffect(()=>{if(!p||!m)return;let t=!0,n=new AbortController;return(async()=>{for(let r=0;r<pt;r++)try{let e=await N(m,{signal:n.signal});t&&(o(i(e)),c(!1));return}catch(i){if(n.signal.aborted)return;if(mt(i)&&r<pt-1){let t=1e3*2**r;z.debug(`Entity fetch failed for ${e} (attempt ${r+1}), retrying in ${t}ms`),await new Promise(e=>setTimeout(e,t));continue}t&&c(G(i));return}})(),()=>{t=!1,n.abort()}},[p,m,e,d]),[a,s,o]},ht=()=>{let e=V(),t=e.ENABLE_EVERYDAY_CALENDAR||!1,n=e.ENTITY_EVERYDAY_CALENDAR||``,[r,i]=q({entityId:n,enabled:t&&n,config:e,initialState:null,extractState:e=>{let t=e.data.attributes.store;return t===void 0?[]:t}});return[r,i]},gt=(e,t)=>{let n=t?.ENTITY_EVERYDAY_CALENDAR;if(!n)return;let r=K(`/api/states/${n}`,t);N.post(r,{state:new Date,attributes:{store:e}}).catch(e=>{z.error(`Failed to store everyday calendar data:`,e)})},_t=w.div` 

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
`,vt=({on:e,month:t,day:n})=>{let[r,i]=e,a=r.indexOf(`${t}-${n}`),o=a>-1,s=()=>{i(o?r.toSpliced(a,1):[...r,`${t}-${n}`])};return(0,I.jsx)(`div`,{className:M(`dot`,{on:o}),onClick:()=>s(e=>!e)})},yt=()=>{let e=V();if(!e.ENABLE_EVERYDAY_CALENDAR)return null;let t=new Date().getFullYear(),n=[];for(let e=1;e<13;e++){let r=new Date(t,e,0).getDate();for(let t=1;t<=r;t++)n.push({month:e,day:t})}let r=Array.from({length:31},(e,t)=>t+1),i=Array.from({length:12},(e,t)=>t+1),a=P.useState(void 0),[o,s]=ht();return P.useEffect(()=>{o!==null&&a[1](o)},[o]),P.useEffect(()=>{a[0]!==void 0&&gt(a[0],e)},[a[0],e]),a[0]===void 0?(0,I.jsx)(_t,{className:`loading`,children:s===!1?(0,I.jsx)(le,{visible:!0,height:`80`,width:`80`,color:`#c1c1c1`,radius:`9`,ariaLabel:`three-dots-loading`,wrapperStyle:{},wrapperClass:``}):(0,I.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`},children:[(0,I.jsx)(`h3`,{children:`Fehler!`}),(0,I.jsx)(`div`,{children:s instanceof Error?s.message:String(s)})]})}):(0,I.jsxs)(_t,{children:[(0,I.jsx)(`h2`,{children:`Jeden Tag ein bißchen`}),s!==!1&&(0,I.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`,marginBottom:`1rem`},children:[(0,I.jsx)(`h3`,{children:`Fehler!`}),(0,I.jsx)(`div`,{children:s instanceof Error?s.message:String(s)})]}),(0,I.jsxs)(`div`,{className:`calendar`,children:[r.map((e,t)=>(0,I.jsx)(`div`,{style:{gridArea:`${e+1} / 1 / ${e+1} / 1`},children:e},t)),i.map((e,t)=>(0,I.jsx)(`div`,{style:{gridArea:`1 / ${e+1} / 1 / ${e+1}`},children:e},t)),n.map((e,t)=>(0,I.jsx)(`div`,{style:{gridArea:`${e.day+1} / ${e.month+1} / ${e.day+1} / ${e.month+1}`},children:(0,I.jsx)(vt,{on:a,month:e.month,day:e.day})},t))]})]})},bt=w.div`
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
  }`,xt=(0,P.memo)(()=>{let[e,t]=P.useState(j.now()),[n,r]=P.useState(!1),i=(0,P.useCallback)(()=>r(!0),[]),a=(0,P.useCallback)(()=>r(!1),[]);return P.useEffect(()=>{let e=setInterval(()=>t(j.now()),1e3);return()=>clearInterval(e)},[]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(bt,{onClick:i,children:[e.toFormat(`HH`),(0,I.jsx)(`span`,{children:`:`}),e.toFormat(`mm`)]}),(0,I.jsx)(xe,{visible:n,onClick:a,fullsize:!0,children:(0,I.jsx)(yt,{})})]})});function St({onReady:e,enabled:t=!0,checkBackendConnection:n=!0,reconnectStrategy:r=`simple`,maxReconnectAttempts:i=5,reconnectDelay:a=2e3,logPrefix:o=`WebSocket`,dependencies:s=[]}){let c=V(),l=ft(),u=n?l?.isConnected:!0,[d,f]=P.useState(!1),[p,m]=P.useState(!1),h=P.useRef(null),g=P.useRef(null),_=P.useRef(!0),v=P.useRef(null),y=P.useRef(null),b=P.useRef(null),x=P.useRef(0),S=P.useRef(!1),C=P.useRef(!1),w=P.useRef(new Map),T=P.useRef(null),E=P.useRef(null),D=P.useRef(null),O=P.useRef(u);O.current=u;let k=P.useCallback(()=>{let e=h.current;if(g.current,v.current&&=(clearTimeout(v.current),null),y.current&&=(clearTimeout(y.current),null),b.current&&=(clearTimeout(b.current),null),T.current&&=(clearInterval(T.current),null),E.current&&=(clearTimeout(E.current),null),e&&e.readyState===WebSocket.OPEN&&(w.current.forEach((t,n)=>{try{e.send(JSON.stringify({type:`unsubscribe_entity`,entity_id:n}))}catch(e){z.debug(`Error unsubscribing from ${n} for ${o}:`,e)}}),w.current.clear()),e){try{e.close()}catch(e){z.debug(`Error closing connection for ${o}:`,e)}h.current=null}g.current=null},[o]),A=P.useCallback(async()=>{if(!(!t||!_.current)){if(n&&!O.current){z.debug(`Skipping ${o} connection - backend not connected`);return}if(!S.current){h.current&&k(),S.current=!0,m(!0);try{let t;if(t=at(c),t||=`${typeof window<`u`&&window.location.protocol===`https:`?`wss:`:`ws:`}//${typeof window<`u`&&window.location.host?window.location.host:``}/api/websocket`,!t){z.error(`Failed to build WebSocket URL for ${o} - cannot connect`),_.current&&f(`WebSocket URL konnte nicht erstellt werden.`),S.current=!1,m(!1);return}z.debug(`${o} connecting to: ${t}`);let n=new WebSocket(t);h.current=n,n.onopen=()=>{if(!_.current){n.close();return}if(z.debug(`${o} connection opened`),x.current=0,C.current=!1,b.current&&=(clearTimeout(b.current),null),_.current&&f(!1),S.current=!1,m(!1),e)try{g.current=e(n,w)}catch(e){z.error(`Failed to subscribe for ${o}:`,e),_.current&&f(e instanceof Error?e.message:String(e))}T.current&&clearInterval(T.current),T.current=setInterval(()=>{if(n.readyState===WebSocket.OPEN){try{n.send(JSON.stringify({type:`ping`}))}catch{return}E.current&&clearTimeout(E.current),E.current=setTimeout(()=>{z.warn(`${o} heartbeat timeout — closing stale connection`);try{n.close(4e3,`heartbeat timeout`)}catch{}},Me)}},je)},n.onmessage=e=>{try{let t=JSON.parse(e.data);if(t.type===`state_update`){let e=t.entity_id,n=w.current.get(e);n&&n(t)}else if(t.type===`state_response`){let e=t.entity_id,n=w.current.get(e);n&&n(t)}else t.type===`pong`?E.current&&=(clearTimeout(E.current),null):t.type===`error`&&(z.error(`${o} received error:`,t.message),_.current&&f(t.message))}catch(e){z.error(`Error handling message for ${o}:`,e)}},n.onclose=e=>{if(_.current&&!S.current){z.debug(`${o} disconnected (code: ${e.code}, wasClean: ${e.wasClean})`),h.current=null,w.current.clear(),g.current=null,v.current&&=(clearTimeout(v.current),null);let t=!e.wasClean&&(e.code===1006||x.current>0);if(t&&x.current>=5&&!C.current){z.warn(`Backend appears to be down for ${o} (${x.current} failed attempts), switching to periodic retry every ${Ne/1e3}s`),C.current=!0,_.current&&f(`Backend nicht erreichbar. Wiederherstellungsversuche alle 60 Sekunden.`);let e=()=>{b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{b.current=null,!(!_.current||S.current||!O.current||!C.current)&&(z.debug(`Periodic retry attempt for ${o} (backend might be back up)`),x.current=0,D.current(),!h.current&&C.current&&e())},Ne)};e();return}if(C.current)return;if(r===`exponential`&&x.current>=i){z.warn(`Max reconnection attempts (${i}) reached for ${o}, stopping reconnection`),_.current&&f(`Verbindung verloren. Bitte Seite neu laden.`);return}if(O.current)if(r===`exponential`){let e=t?a*10:a,n=Math.min(e*2**x.current,6e4);x.current++,v.current=setTimeout(()=>{_.current&&!S.current&&O.current&&(z.debug(`Attempting to reconnect ${o} (attempt ${x.current}/${i})`),D.current())},n)}else{let e=t?a*10:a;v.current=setTimeout(()=>{_.current&&!S.current&&O.current&&(z.debug(`Attempting to reconnect ${o}`),D.current())},e)}else z.debug(`Skipping reconnection for ${o} - waiting for backend connection`)}},n.onerror=e=>{z.error(`WebSocket error for ${o}:`,e),S.current=!1,m(!1),_.current&&f(`WebSocket-Verbindungsfehler`)}}catch(e){if(S.current=!1,m(!1),_.current)if(z.error(`Failed to setup ${o} connection:`,e),f(e instanceof Error?e.message:String(e)),O.current)if(r===`exponential`&&x.current<i){let e=Math.min(a*2**x.current,3e4);x.current++,v.current=setTimeout(()=>{_.current&&!S.current&&O.current&&(z.debug(`Attempting to reconnect ${o} after error (attempt ${x.current}/${i})`),D.current())},e)}else r===`simple`?v.current=setTimeout(()=>{_.current&&!S.current&&O.current&&(z.debug(`Attempting to reconnect ${o} after error`),D.current())},a):(z.warn(`Max reconnection attempts (${i}) reached for ${o}, stopping reconnection`),_.current&&f(`Verbindung fehlgeschlagen. Bitte Seite neu laden.`));else z.debug(`Skipping reconnection for ${o} after error - waiting for backend connection`)}}}},[t,n,c,r,i,a,o,e,k]);return D.current=A,P.useEffect(()=>{t&&u&&!h.current&&!S.current&&A()},[t,u,A,...s]),P.useEffect(()=>{t&&u&&!h.current&&!S.current&&(y.current&&=(clearTimeout(y.current),null),y.current=setTimeout(()=>{_.current&&O.current&&!h.current&&!S.current&&(z.debug(`Backend connection restored - reconnecting ${o}`),C.current=!1,x.current=0,b.current&&=(clearTimeout(b.current),null),A())},Pe))},[t,u,A,o]),P.useEffect(()=>(_.current=!0,()=>{_.current=!1,k()}),[k]),{connection:h.current,error:d,isConnecting:p}}var Ct=({entityId:e,enabled:t,onStateUpdate:n,logPrefix:r,wsOptions:i={}})=>{let{error:a}=St({enabled:t&&!!e,logPrefix:r,...i,onReady:(t,i)=>(i.current.set(e,e=>{e.state!==void 0&&n(e.state)}),t.readyState===WebSocket.OPEN&&(t.send(JSON.stringify({type:`subscribe_entity`,entity_id:e})),z.debug(`Subscribed to ${r} state changes`)),()=>{i.current.delete(e),t.readyState===WebSocket.OPEN&&t.send(JSON.stringify({type:`unsubscribe_entity`,entity_id:e}))}),dependencies:[t,e]});return{error:a}},wt=()=>{let e=V(),t=e.ENABLE_DOORBELL||!1,n=e.ENTITY_DOORBELL||``,r=t&&n,[i,a,o]=q({entityId:n,enabled:r,config:e,initialState:`off`}),{error:s}=Ct({entityId:n,enabled:r,onStateUpdate:o,logPrefix:`doorbell`});return[i,a||s||!1]},Tt=(e={})=>{let t=e.ENTITY_DOORBELL_BUTTON||``;t&&N.post(K(`/api/services/button/press`,e),{entity_id:t}).catch(e=>{z.error(`Failed to unlatch front door:`,e)})},Et=e(u(),1),Dt=async(e,t,n)=>{let r=K(`/api/states/${e}`,t);z.debug(`Fetching camera token for ${e} (aborted: ${n?.aborted})`);let i=await N(r,{timeout:1e4,signal:n}),a=i.data?.attributes?.access_token||null;if(!a){let t=i.data?.state||`unknown`,n=Object.keys(i.data?.attributes||{});z.warn(`Camera entity ${e} has no access_token attribute. State: ${t}, attributes: [${n.join(`, `)}]`)}return{entityId:e,accessToken:a,error:a?null:`Kein access_token für ${e}`}},Ot=(e,t)=>new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(n,e);t?.addEventListener(`abort`,()=>{clearTimeout(r),n()},{once:!0})}),kt=async(e,t,n)=>{if(!e||e.length===0)return{tokens:{},error:null};let r=n?null:new AbortController,i=n||r.signal;try{let n=e.map(async e=>{let n=null,r=null;for(let a=0;a<3;a++)try{return await Dt(e,t,i)}catch(t){if(n=t,i.aborted)return{entityId:e,accessToken:null,error:`Abgebrochen`};let o=t.response?.status,s=t.code===`ECONNABORTED`||t.code===`ERR_NETWORK`||t.message?.includes(`timeout`)||o>=500;if(r=o?`HTTP ${o}: ${t.response?.data?.detail||t.message}`:`${t.code||`Error`}: ${t.message}`,s&&a<2){let t=1e3*2**a;if(z.debug(`Token fetch failed for ${e} (attempt ${a+1}): ${r}, retrying in ${t}ms...`),await Ot(t,i),i.aborted)return{entityId:e,accessToken:null,error:`Abgebrochen`};continue}return z.error(`Failed to fetch access token for ${e} (attempt ${a+1}/3): ${r}`),{entityId:e,accessToken:null,error:r}}let a=n?r||n.message:`Unknown error`;return z.error(`Failed to fetch access token for ${e} after 3 attempts: ${a}`),{entityId:e,accessToken:null,error:a}}),r=await Promise.all(n),a={},o=[];if(r.forEach(({entityId:e,accessToken:t,error:n})=>{t?a[e]=t:o.push(`${e}: ${n||`Kein Token`}`)}),Object.keys(a).length===0&&o.length>0){let e=o.join(` | `);return z.error(`Camera token fetch failed for all cameras: ${e}`),{tokens:{},error:`Kamera-Token Fehler: ${e}`}}return{tokens:a,error:null}}catch(e){return i.aborted?{tokens:{},error:null}:(z.error(`Failed to fetch camera access tokens:`,e),{tokens:{},error:G(e)})}},At=(e,t=null,n={})=>{if(!e)return null;let r,i=n.HASS_HOST||``;if(i&&i!==`undefined`&&i!==`null`)r=i.replace(/\/$/,``);else if(typeof window<`u`&&window.location)r=window.location.origin;else return null;let a=`${r}/api/camera_proxy_stream/${e}`;return t?`${a}${a.includes(`?`)?`&`:`?`}token=${encodeURIComponent(t)}`:a},J={portrait:360/480,landscape:1920/1072,wide:770/216};function jt(e){let t={landscape:0,portrait:0,wide:0};return e.forEach(e=>{e.orientation&&t.hasOwnProperty(e.orientation)&&t[e.orientation]++}),t}function Mt(e,t,n){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};let r=e.length,i=jt(e);return r===1?Nt(e[0],t,n):r===2?Pt(i,e,t,n):r===3?It(i,e,t,n):r===4?Lt(i,e,t,n):{videos:[],totalArea:0,efficiency:0}}function Nt(e,t,n){let r=J[e.orientation],i,a;return r>t/n?(i=t,a=t/r):(a=n,i=n*r),{videos:[{x:(t-i)/2,y:(n-a)/2,width:i,height:a,orientation:e.orientation}],totalArea:i*a,efficiency:i*a/(t*n)*100}}function Pt(e,t,n,r){if(e.portrait>0)return Ft(e,t,n,r);let i=[];e.landscape>0&&i.push(`landscape`),e.wide>0&&i.push(`wide`);let a=i[0]||t[0].orientation,o=i[1]||t[1].orientation,s=J[a],c=J[o];if(e.landscape===1&&e.wide===1){let e=J.landscape,i=J.wide,a=n,o=a/e,s=a/i,c=o+s,l,u,d;if(c<=r)l=o,u=s,d=a;else{let e=r/c;l=o*e,u=s*e,d=u*i}let f=(n-d)/2,p=Y(t,[{x:f,y:0,width:d,height:u,orientation:`wide`},{x:f,y:u,width:d,height:l,orientation:`landscape`}]),m=d*l+d*u;return{videos:p,totalArea:m,efficiency:m/(n*r)*100}}if(e.wide===2){let e=J.wide,i=n,a=i/e,o=a*2,s;s=o<=r?a:r/2;let c=Y(t,[{x:0,y:0,width:i,height:s,orientation:`wide`},{x:0,y:s,width:i,height:s,orientation:`wide`}]),l=i*s*2;return{videos:c,totalArea:l,efficiency:l/(n*r)*100}}let l=[()=>{let e=n,t=e/2,i=e/2,l=t/s,u=i/c;return Math.max(l,u)<=r?{positions:[{x:0,y:(r-l)/2,width:t,height:l,orientation:a},{x:t,y:(r-u)/2,width:i,height:u,orientation:o}],totalArea:t*l+i*u}:null},()=>{let e=r,t=e/2,i=e/2,l=t*s,u=i*c;return Math.max(l,u)<=n?{positions:[{x:(n-l)/2,y:0,width:l,height:t,orientation:a},{x:(n-u)/2,y:t,width:u,height:i,orientation:o}],totalArea:l*t+u*i}:null}],u=null,d=0;for(let e of l){let t=e();t&&t.totalArea>d&&(d=t.totalArea,u=t)}if(!u){let e=n/2,t=n/2,i=Math.min(e/s,r),l=Math.min(t/c,r);u={positions:[{x:0,y:(r-i)/2,width:e,height:i,orientation:a},{x:e,y:(r-l)/2,width:t,height:l,orientation:o}],totalArea:e*i+t*l}}let f=Y(t,u.positions),p=u.totalArea/(n*r)*100;return{videos:f,totalArea:u.totalArea,efficiency:p}}function Ft(e,t,n,r){let i=e.portrait,a=t.length-i;if((i===3||i===4)&&a===0){let e=J.portrait,a=n/i,o=a/e,s=o<r?(r-o)/2:0,c=Math.min(o,r),l=[],u=0;for(let t=0;t<i;t++){let n=Math.min(a,c*e);l.push({x:t*a+(a-n)/2,y:s,width:n,height:c,orientation:`portrait`}),u+=n*c}let d=Y(t,l),f=u/(n*r)*100;return{videos:d,totalArea:u,efficiency:f}}t.filter(e=>e.orientation===`portrait`);let o=t.filter(e=>e.orientation!==`portrait`),s=i>0?Math.min(n*.4,n*.5):0,c=n-s,l=[],u=0;if(i===2&&a===0){let e=J.portrait,t=n/2,i=t/e,a=r,o,s;i<=a?(s=i,o=t):(s=a,o=a*e);let c=(r-s)/2;l.push({x:(t-o)/2,y:c,width:o,height:s,orientation:`portrait`}),l.push({x:t+(t-o)/2,y:c,width:o,height:s,orientation:`portrait`}),u=o*s*2}else if(i===1&&a===1){let e=J.portrait,t=o[0],i=J[t.orientation];n/(e+i);let a=e+i,s=e/a*n,c=i/a*n,d=s/e,f=c/i,p=Math.min(r,Math.min(d,f)),m=(r-p)/2;l.push({x:0,y:m,width:s,height:p,orientation:`portrait`}),l.push({x:s,y:m,width:c,height:p,orientation:t.orientation}),u=s*p+c*p}else if(i===1&&a===2&&e.landscape===1&&e.wide===1){let e=J.portrait,t=J.wide,i=J.landscape,a=r,s=r*e,c=r/(1/t+1/i),d=c/t,f=c/i,p=s+c;if(Math.abs(p-n)<.1)l.push({x:0,y:0,width:s,height:a,orientation:`portrait`}),u+=s*a,o.find(e=>e.orientation===`wide`)&&(l.push({x:0+s,y:0,width:c,height:d,orientation:`wide`}),u+=c*d),o.find(e=>e.orientation===`landscape`)&&(l.push({x:0+s,y:d,width:c,height:f,orientation:`landscape`}),u+=c*f);else{let a=n/p,d=s*a,f=d/e,m=c*a;m/t,m/i;let h=r/f,g=d*h,_=r,v=m*h,y=v/t,b=v/i,x=g+v;if(x>n){let r=n/x;g*=r,_=g/e,v*=r,y=v/t,b=v/i,x=g+v,x>n&&(v=n-g,y=v/t,b=v/i)}let S=g+v;if(S>n){let r=n/S;g*=r,_=g/e,v*=r,y=v/t,b=v/i}l.push({x:0,y:0,width:g,height:_,orientation:`portrait`}),u+=g*_,o.find(e=>e.orientation===`wide`)&&(l.push({x:0+g,y:0,width:v,height:y,orientation:`wide`}),u+=v*y),o.find(e=>e.orientation===`landscape`)&&(l.push({x:0+g,y,width:v,height:b,orientation:`landscape`}),u+=v*b)}}else if(i===1&&a===3){let e=J.portrait,t=r,i=t*e,a=i,s=n-a;l.push({x:0,y:0,width:i,height:t,orientation:`portrait`}),u+=i*t;let c=r/3;for(let e=0;e<o.length;e++){let t=o[e],n=J[t.orientation],r=c,i=s,d,f;i/n<=r?(d=i,f=d/n):(f=r,d=f*n);let p=e*c+(c-f)/2;l.push({x:a+(s-d)/2,y:p,width:d,height:f,orientation:t.orientation}),u+=d*f}}else if(i===2&&a===1){let e=J.portrait,t=o[0],i=J[t.orientation],a=r/2,s=a*e,c=n-s,d=r*i,f,p;d<=c?(p=r,f=p*i):(f=c,p=f/i);let m=s,h=a,g=(r-p)/2,_=(r/2-h)/2,v=r/2+(r/2-h)/2;l.push({x:0,y:g,width:f,height:p,orientation:t.orientation}),u+=f*p,l.push({x:c,y:_,width:m,height:h,orientation:`portrait`}),u+=m*h,l.push({x:c,y:v,width:m,height:h,orientation:`portrait`}),u+=m*h}else if(i===1&&a===2){let e=J.portrait,t=r,i=t*e,a=i,s=n-a;l.push({x:0,y:0,width:i,height:t,orientation:`portrait`}),u+=i*t;let c=r/2;for(let e=0;e<o.length;e++){let t=o[e],n=J[t.orientation],r=c,i=s,d,f;i/n<=r?(d=i,f=d/n):(f=r,d=f*n);let p=e*c+(c-f)/2;l.push({x:a+(s-d)/2,y:p,width:d,height:f,orientation:t.orientation}),u+=d*f}}else{let e=i;if(e>0){let t=r/e,n=J.portrait;for(let r=0;r<e;r++){let e=Math.min(t,s/n),i=e*n,a=r*t+(t-e)/2;l.push({x:(s-i)/2,y:a,width:i,height:e,orientation:`portrait`}),u+=i*e}}if(o.length>0){let e=r/o.length;for(let t=0;t<o.length;t++){let n=o[t],r=J[n.orientation],i=e,a=c,d,f;a/r<=i?(d=a,f=d/r):(f=i,d=f*r);let p=t*e+(e-f)/2;l.push({x:s+(c-d)/2,y:p,width:d,height:f,orientation:n.orientation}),u+=d*f}}}let d=Y(t,l),f=u/(n*r)*100;return{videos:d,totalArea:u,efficiency:f}}function Y(e,t){let n=Array(t.length),r=new Set,i=new Set;for(let a=0;a<t.length;a++){let o=t[a];for(let t=0;t<e.length;t++)if(!r.has(t)&&e[t].orientation===o.orientation){n[a]={...o,orientation:e[t].orientation},r.add(t),i.add(a);break}}let a=[];for(let e=0;e<t.length;e++)i.has(e)||a.push(e);let o=0;for(let i=0;i<e.length;i++)if(!r.has(i)&&o<a.length){let r=a[o];n[r]={...t[r],orientation:e[i].orientation},o++}return n}function It(e,t,n,r){if(e.portrait>0)return Ft(e,t,n,r);if(e.landscape===2&&e.wide===1){let e=J.landscape,i=J.wide,a=n,o=a/i,s=r-o;s*e;let c=n/2,l=c/e,u,d,f,p;if(o<=r&&l<=s)u=a,d=o,f=c,p=l;else{let t=r/(o+l),n=Math.min(1,t);d=o*n,u=d*i,p=l*n,f=p*e}let m=(n-u)/2,h=d+(s-p)/2,g=Y(t,[{x:m,y:0,width:u,height:d,orientation:`wide`},{x:0,y:h,width:f,height:p,orientation:`landscape`},{x:f,y:h,width:f,height:p,orientation:`landscape`}]),_=u*d+f*p*2;return{videos:g,totalArea:_,efficiency:_/(n*r)*100}}if(e.landscape===1&&e.wide===2){let e=J.landscape,i=J.wide,a=n/2,o=a/i,s=r-o,c=s*e,l,u,d,f;if(o<=r&&c<=n&&o+s<=r)l=a,u=o,d=c,f=s;else{let t=r/(o+s);l=a,u=o*t,f=s*t,d=f*e}let p=n/2,m=(n-d)/2,h=Y(t,[{x:0,y:0,width:l,height:u,orientation:`wide`},{x:p,y:0,width:l,height:u,orientation:`wide`},{x:m,y:u,width:d,height:f,orientation:`landscape`}]),g=l*u*2+d*f;return{videos:h,totalArea:g,efficiency:g/(n*r)*100}}if(e.wide===3){let e=J.wide,i=n/2,a=i/e,o=r-a,s=o*e,c,l,u,d;if(a<=r&&s<=n&&a+o<=r)c=i,l=a,u=s,d=o;else{let t=r/(a+o);c=i,l=a*t,d=o*t,u=d*e,u>n&&(u=n,d=u/e)}let f=n/2,p=(n-u)/2,m=Y(t,[{x:0,y:0,width:c,height:l,orientation:`wide`},{x:f,y:0,width:c,height:l,orientation:`wide`},{x:p,y:l,width:u,height:d,orientation:`wide`}]),h=c*l*2+u*d;return{videos:m,totalArea:h,efficiency:h/(n*r)*100}}if(e.landscape===3){let e=J.landscape,i=n/(e*1.5),a=Math.min(r,i),o=a/2,s=a,c=o*e,l=s*e,u=(r-a)/2,d=Y(t,[{x:0,y:u,width:c,height:o,orientation:`landscape`},{x:0,y:u+o,width:c,height:o,orientation:`landscape`},{x:c,y:u,width:l,height:s,orientation:`landscape`}]),f=c*a+l*a;return{videos:d,totalArea:f,efficiency:f/(n*r)*100}}let i=[];if(e.landscape>0)for(let t=0;t<e.landscape;t++)i.push(`landscape`);if(e.wide>0)for(let t=0;t<e.wide;t++)i.push(`wide`);let a=i[0]||t[0].orientation,o=i[1]||t[1].orientation,s=i[2]||t[2].orientation,c=J[a],l=J[o],u=J[s],d=[()=>{let e=n*.6,t=n*.4,i=e/c,d=t/l,f=t/u,p=d+f;return i<=r&&p<=r?{positions:[{x:0,y:(r-i)/2,width:e,height:i,orientation:a},{x:e,y:0,width:t,height:d,orientation:o},{x:e,y:d,width:t,height:f,orientation:s}],totalArea:e*i+t*d+t*f}:null},()=>{let e=r*.5,t=r*.5,i=e*c,d=e*l,f=t*u;return i+d<=n&&f<=n?{positions:[{x:0,y:0,width:i,height:e,orientation:a},{x:i,y:0,width:d,height:e,orientation:o},{x:(n-f)/2,y:e,width:f,height:t,orientation:s}],totalArea:i*e+d*e+f*t}:null},()=>{let e=n/3,t=e/c,i=e/l,d=e/u;return Math.max(t,i,d)<=r?{positions:[{x:0,y:(r-t)/2,width:e,height:t,orientation:a},{x:e,y:(r-i)/2,width:e,height:i,orientation:o},{x:e*2,y:(r-d)/2,width:e,height:d,orientation:s}],totalArea:e*t+e*i+e*d}:null}],f=null,p=0;for(let e of d){let t=e();t&&t.totalArea>p&&(p=t.totalArea,f=t)}if(!f){let e=n/3,t=Math.min(e/c,r),i=Math.min(e/l,r),d=Math.min(e/u,r);f={positions:[{x:0,y:(r-t)/2,width:e,height:t,orientation:a},{x:e,y:(r-i)/2,width:e,height:i,orientation:o},{x:e*2,y:(r-d)/2,width:e,height:d,orientation:s}],totalArea:e*t+e*i+e*d}}let m=Y(t,f.positions),h=f.totalArea/(n*r)*100;return{videos:m,totalArea:f.totalArea,efficiency:h}}function Lt(e,t,n,r){if(e.portrait>0)return Ft(e,t,n,r);let i=[];if(e.landscape>0)for(let t=0;t<e.landscape;t++)i.push(`landscape`);if(e.wide>0)for(let t=0;t<e.wide;t++)i.push(`wide`);let a=i[0]||t[0].orientation,o=i[1]||t[1].orientation,s=i[2]||t[2].orientation,c=i[3]||t[3].orientation,l=J[a],u=J[o],d=J[s],f=J[c],p=[()=>{let e=n/2,t=r/2,i=Math.min(e,t*l),p=i/l,m=Math.min(e,t*u),h=m/u,g=Math.min(e,t*d),_=g/d,v=Math.min(e,t*f),y=v/f;return{positions:[{x:(e-i)/2,y:(t-p)/2,width:i,height:p,orientation:a},{x:e+(e-m)/2,y:(t-h)/2,width:m,height:h,orientation:o},{x:(e-g)/2,y:t+(t-_)/2,width:g,height:_,orientation:s},{x:e+(e-v)/2,y:t+(t-y)/2,width:v,height:y,orientation:c}],totalArea:i*p+m*h+g*_+v*y}},()=>{let e=n*.6,t=n*.4,i=e/l,p=r/3,m=Math.min(t,p*u),h=m/u,g=Math.min(t,p*d),_=g/d,v=Math.min(t,p*f),y=v/f;return i<=r?{positions:[{x:0,y:(r-i)/2,width:e,height:i,orientation:a},{x:e,y:0,width:m,height:h,orientation:o},{x:e,y:p,width:g,height:_,orientation:s},{x:e,y:p*2,width:v,height:y,orientation:c}],totalArea:e*i+m*h+g*_+v*y}:null},()=>{let e=n/4,t=e/l,i=e/u,p=e/d,m=e/f;return Math.max(t,i,p,m)<=r?{positions:[{x:0,y:(r-t)/2,width:e,height:t,orientation:a},{x:e,y:(r-i)/2,width:e,height:i,orientation:o},{x:e*2,y:(r-p)/2,width:e,height:p,orientation:s},{x:e*3,y:(r-m)/2,width:e,height:m,orientation:c}],totalArea:e*t+e*i+e*p+e*m}:null}],m=null,h=0;for(let e of p){let t=e();t&&t.totalArea>h&&(h=t.totalArea,m=t)}if(!m){let e=n/2,t=r/2,i=Math.min(t,e/l),p=Math.min(t,e/u),h=Math.min(t,e/d),g=Math.min(t,e/f);m={positions:[{x:(e-e)/2,y:(t-i)/2,width:e,height:i,orientation:a},{x:e+(e-e)/2,y:(t-p)/2,width:e,height:p,orientation:o},{x:(e-e)/2,y:t+(t-h)/2,width:e,height:h,orientation:s},{x:e+(e-e)/2,y:t+(t-g)/2,width:e,height:g,orientation:c}],totalArea:e*i+e*p+e*h+e*g}}let g=Y(t,m.positions),_=m.totalArea/(n*r)*100;return{videos:g,totalArea:m.totalArea,efficiency:_}}var Rt=({tokensLoading:e,tokensError:t,refreshTokens:n})=>(0,I.jsx)(`div`,{className:`token-error`,children:e?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(F,{path:T,size:`48px`,color:`#ffffff`,className:`loading-spinner`}),(0,I.jsx)(`div`,{children:`Lade Token...`})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{children:t||`Kamera-Token nicht verfügbar`}),(0,I.jsx)(`button`,{onClick:e=>{e.stopPropagation(),n()},children:`Token neu laden`})]})}),zt=({cameras:e,accessTokens:t,tokensLoading:n,tokensError:r,refreshTokens:i,showDoorCams:a,cameraImgRefs:o,openDoor:s,config:c})=>{if(e.length===0)return null;let l=e.map(e=>({orientation:e.orientation||`landscape`})),u=window.innerWidth,d=Mt(l,u,window.innerHeight-10),f={portrait:e.filter(e=>(e.orientation||`landscape`)===`portrait`),landscape:e.filter(e=>(e.orientation||`landscape`)===`landscape`),wide:e.filter(e=>e.orientation===`wide`)},p={portrait:0,landscape:0,wide:0};return d.videos.map((e,l)=>{let u=e.orientation,d=p[u],m=f[u][d];if(!m)return null;p[u]++;let h=t[m.entity_id]||null,g=!!h,_=At(m.entity_id,h,c),v=`${u}-${d}-${l}`,y={left:`${e.x}px`,top:`${e.y}px`,width:`${e.width}px`,height:`${e.height}px`};return!_&&!g?(0,I.jsx)(`div`,{className:`video-container`,style:y,children:(0,I.jsx)(Rt,{tokensLoading:n,tokensError:r,refreshTokens:i})},v):_?(0,I.jsxs)(`div`,{className:`video-container`,style:y,children:[g&&a&&(0,I.jsx)(`img`,{ref:e=>{let t=`${m.entity_id}-${l}`;e?o.current.set(t,e):o.current.delete(t)},src:_,className:u,alt:`Camera stream`,crossOrigin:`anonymous`},`${m.entity_id}-${l}`),!g&&(0,I.jsx)(Rt,{tokensLoading:n,tokensError:r,refreshTokens:i}),(0,I.jsx)(`div`,{className:`video-overlay`,onClick:()=>s()})]},v):null})},Bt=w.div`
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
`,Vt=()=>{let e=V(),t=e.ENABLE_DOORBELL||!1,n=e.DOORBELL_CAMERAS||[],[r,i]=P.useState(!1),[a,o]=wt(),[s,c]=P.useState(void 0),[l,u]=P.useState(100),[d,f]=P.useState(`0`),p=P.useMemo(()=>n.map(e=>e.entity_id).filter(Boolean),[n]),[m,h]=P.useState({}),[g,_]=P.useState(!1),[v,y]=P.useState(null),b=P.useRef(e);P.useEffect(()=>{b.current=e},[e]);let x=P.useRef(null);P.useEffect(()=>{if(r&&p.length>0){let e=new AbortController;return _(!0),y(null),kt(p,b.current,e.signal).then(({tokens:t,error:n})=>{e.signal.aborted||(h(t),y(n),_(!1))}).catch(t=>{e.signal.aborted||(z.error(`Failed to fetch camera tokens:`,t),y(G(t)),_(!1))}),()=>{e.abort()}}else r||(h({}),y(null),x.current?.abort())},[r,p.join(`,`)]);let S=P.useCallback(async()=>{if(p.length===0)return;x.current?.abort();let e=new AbortController;x.current=e,_(!0),y(null);try{let{tokens:t,error:n}=await kt(p,b.current,e.signal);e.signal.aborted||(h(t),y(n))}catch(t){e.signal.aborted||(z.error(`Failed to refresh camera tokens:`,t),y(G(t)))}finally{e.signal.aborted||_(!1)}},[p]),{isConnected:C}=ft(),w=P.useRef(!1);P.useEffect(()=>{C?w.current&&(w.current=!1,r&&p.length>0&&(z.debug(`Connection restored while doorbell overlay open — refreshing camera tokens`),S())):w.current=!0},[C,r,p,S]),P.useEffect(()=>{if(!r||p.length===0)return;let e=setInterval(()=>{z.debug(`Periodic camera token refresh`),S()},ze);return()=>clearInterval(e)},[r,p,S]);let[T,E]=P.useState(null),D=P.useRef(new Map),O=P.useCallback(()=>{D.current.forEach(e=>{e&&(e.src=`data:,`)}),D.current.clear()},[]),k=P.useRef(0),A=P.useRef(!1),ee=P.useCallback(()=>{k.current=Date.now(),A.current=!0,O(),i(!1),E(null)},[O]);P.useEffect(()=>{if(a===`off`){if(A.current=!1,r){let e=window.setTimeout(()=>{O(),i(!1),c(void 0)},Le);return c(e),f(Le+`ms`),u(0),()=>{e&&window.clearTimeout(e)}}}else if(a===`on`){let e=Date.now()-k.current<Re;if(A.current||e)return;f(0),u(100),i(!0)}},[a,r]),P.useEffect(()=>{a===`on`&&s!==void 0&&(window.clearTimeout(s),f(0),u(100),c(void 0))},[s,a]);let te=()=>{T===null?E(`confirm`):T===`confirm`&&(E(`opening`),Tt(e),setTimeout(()=>E(null),2e3))};return P.useEffect(()=>{if(T===`confirm`){let e=setTimeout(()=>{E(null)},3e3);return()=>{clearTimeout(e)}}},[T]),P.useEffect(()=>{r||E(null)},[r]),t?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`button`,{onClick:()=>{r?ee():i(!0)},children:`CCTV`}),(0,I.jsx)(xe,{visible:r,onClick:te,onClose:ee,fullsize:!0,children:(0,I.jsxs)(Bt,{onClick:te,children:[(0,I.jsx)(Et.default,{completed:l,height:10,bgColor:s===void 0?`none`:`#c0bfbf`,isLabelVisible:!1,baseBgColor:``,transitionDuration:d,transitionTimingFunction:`linear`}),(0,I.jsx)(`div`,{className:`grid`,children:(0,I.jsx)(zt,{cameras:n,accessTokens:m,tokensLoading:g,tokensError:v,refreshTokens:S,showDoorCams:r,cameraImgRefs:D,openDoor:te,config:e})}),T===`confirm`&&(0,I.jsx)(`div`,{className:`open-door confirm`,children:`Haustür öffnen?`}),T===`opening`&&(0,I.jsx)(`div`,{className:`open-door opening`,children:`Öffne die Tür!`})]})})]}):null},Ht=w.div`
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

`,Ut=(0,P.memo)(({nextWeek:e,previousWeek:t,startWeekWithToday:n})=>(0,I.jsxs)(Ht,{children:[(0,I.jsxs)(`div`,{className:`buttons`,children:[(0,I.jsx)(F,{path:ce,size:`32px`,color:`#ffffff`,onClick:t}),(0,I.jsx)(F,{path:ae,size:`32px`,color:`#ffffff`,onClick:e}),(0,I.jsx)(`button`,{onClick:n,children:`Today`}),(0,I.jsx)(Vt,{})]}),(0,I.jsx)(xt,{}),(0,I.jsx)(F,{path:T,size:`32px`,color:`#ffffff`,className:M(`indicator`)})]})),Wt=5e3,X=class extends P.Component{constructor(e){super(e),this.state={hasError:!1},this.reloadTimerId=null}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){let n=e?.toString()||`Unknown error`,r=this.props.label;z.error(`ErrorBoundary caught an error${r?` (${r})`:``}: ${n}`,{boundaryLabel:r,errorName:e?.name,errorMessage:n,errorStack:e?.stack||``,componentStack:t?.componentStack||``});let i=this.props.autoReload===!0,a=i?`${r?`${r}: `:``}Ein Fehler ist aufgetreten — die App lädt sich gleich neu …`:`${r?`${r}: `:``}Bereich konnte nicht geladen werden`;oe.error(a,{duration:Wt}),i&&(this.reloadTimerId=window.setTimeout(()=>{window.location.reload()},Wt))}componentWillUnmount(){this.reloadTimerId&&=(window.clearTimeout(this.reloadTimerId),null)}render(){return this.state.hasError?null:this.props.children}},Gt=e(ge(),1),Kt=6e4,qt=(e=Kt,t=void 0)=>{let[n,r]=P.useState(!0);return P.useEffect(()=>{let t=setInterval(()=>{r(e=>!e)},e);return()=>{clearInterval(t)}},[e,t]),n},Jt={mdiDelete:D,mdiCake:te},Yt=e=>{if(!(!e||typeof e!=`string`))return Jt[e.startsWith(`mdi`)?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`]||void 0},Xt=(e,t,n,r,i,a)=>N(i(e.name,{start:t.toISO(),end:n.toISO()}),{timeout:65e3,signal:a}).then(n=>{!n.data||!Array.isArray(n.data)||n.data.forEach(n=>{let i=`dateTime`in n.start?j.fromISO(n.start.dateTime):j.fromSQL(n.start.date),a;a=`dateTime`in n.end?Math.floor(j.fromISO(n.end.dateTime).diff(t,`days`).as(`days`)):Math.floor(j.fromSQL(n.end.date).diff(t,`days`).as(`days`))-1;let o=Math.floor(i.diff(t,`days`).as(`days`));a>=r.length&&(a=r.length-1);let s=`dateTime`in n.start?`events`:`allDay`;if(o>=0&&o<r.length)for(let t=o;t<=a;t++)r[t][s]=[...r[t][s],{...n,icon:e.icon}]})}).catch(e=>{if(!(N.isCancel(e)||e.name===`AbortError`||e.code===`ERR_CANCELED`))throw e}),Zt=new Map,Qt=300*1e3,$t=e=>e.toISODate(),en=(e,t,n,r,i,a,o,s,c)=>{let l=[0,1,2,3,4,5].map(t=>e.plus({days:t}).startOf(`day`));l[6]=e.plus({days:6}).endOf(`day`);let u=$t(e),d=Zt.get(u);if(d&&Date.now()-d.timestamp<Qt){c.current&&n(d.data);return}let f=l.map(e=>({date:e,allDay:[],events:[]}));if(!o||o.length===0){z.warn(`loadAll: No calendars configured, skipping fetch`,{calendars:o}),c.current&&(n(f),r(!1));return}z.debug(`loadAll: Starting calendar fetch`,{calendarsCount:o.length,calendars:o.map(e=>e.name),startDate:e.toISO(),endDate:l[6].toISO()});let p=new AbortController;i.current&&i.current.abort(),i.current=p;try{c.current&&r(!0);let e=o.map(e=>Xt(e,l[0],l[6],f,s,p.signal));Promise.all(e).then(()=>{c.current&&!p.signal.aborted&&(Zt.set(u,{data:f,timestamp:Date.now()}),n(f),a(!1))}).catch(e=>{c.current&&!p.signal.aborted&&a(G(e))}).finally(()=>{c.current&&!p.signal.aborted&&r(!1)})}catch(e){c.current&&!p.signal.aborted&&(a(G(e)),r(!1))}},tn=[],nn=e=>{let t=V(),n=t.CALENDARS||[];P.useEffect(()=>{z.debug(`useCalendarData: config changed`,{hasCALENDARS:`CALENDARS`in t,CALENDARS:t.CALENDARS,CALENDARSCount:Array.isArray(t.CALENDARS)?t.CALENDARS.length:`not array`,configKeys:Object.keys(t)})},[t]);let r=P.useMemo(()=>{let e=n.map(e=>({name:e.name,icon:Yt(e.icon)}));return z.debug(`Processing calendars from config (memo update):`,{CALENDARS:n,count:n.length,processedCount:e.length,processed:e.map(e=>e.name)}),e},[n]);P.useEffect(()=>{z.debug(`CALENDARS array changed:`,{CALENDARS:n,count:n.length,calendarsMemoCount:r.length})},[n,r.length]);let i=P.useCallback(e=>{let n=K(`/api/calendars/${e}`,t);return z.debug(`Building calendar URL for ${e}:`,n),n},[t]),a=P.useCallback((e,t)=>{let n=`${i(e)}?${Gt.default.stringify(t)}`;return z.debug(`Full calendar URL for ${e}:`,n),n},[i]),[o,s]=P.useState(tn),[c,l]=P.useState(!1),[u,d]=P.useState(!1),[f,p]=P.useState(null),m=(0,P.useRef)(null),h=(0,P.useRef)(!0);return qt(6e4,`Calendar`),P.useEffect(()=>(h.current=!0,z.debug(`useCalendarData effect triggered:`,{startDate:e?.toISO(),calendarsCount:r.length,calendars:r.map(e=>e.name),hasStartDate:e!==void 0,hasCalendars:r.length>0}),e!==void 0&&r.length>0?((f===null||!f.equals(e))&&(s(tn),p(e)),z.debug(`useCalendarData: Calling loadAll`,{startDate:e.toISO(),calendarsCount:r.length}),en(e,o,s,l,m,d,r,a,h)):(e===void 0&&z.debug(`useCalendarData: startDate is undefined, skipping fetch`),r.length===0&&z.debug(`useCalendarData: No calendars configured yet, skipping fetch`)),()=>{h.current=!1,m.current&&m.current.abort()}),[e,r,a]),[o,u]};function rn(e){let[t,n]=P.useState(!1);function r({key:t}){t===e&&n(!0)}let i=({key:t})=>{t===e&&n(!1)};return P.useEffect(()=>(window.addEventListener(`keydown`,r),window.addEventListener(`keyup`,i),()=>{window.removeEventListener(`keydown`,r),window.removeEventListener(`keyup`,i)}),[e]),t}var an=()=>{let e=new Date,t=(e.getDay()+6)%7,n=new Date(e.setDate(e.getDate()-t));return j.fromJSDate(n)},on=e=>{let t=()=>e(e=>e.plus({days:7})),n=rn(`ArrowRight`);P.useEffect(()=>{n&&t()},[n]);let r=()=>e(e=>e.minus({days:7})),i=rn(`ArrowLeft`);P.useEffect(()=>{i&&r()},[i]);let a=()=>e(an()),o=rn(`t`);return P.useEffect(()=>{o&&a()},[o]),{nextWeek:t,previousWeek:r,startWeekWithToday:a}},sn=e=>{let[t,n]=(0,P.useState)(0),[r,i]=(0,P.useState)(0);return{onTouchStart:e=>{i(0),n(e.targetTouches[0].clientX)},onTouchMove:e=>i(e.targetTouches[0].clientX),onTouchEnd:()=>{if(!t||!r)return;let n=t-r,i=n>50,a=n<-50;i&&e.onSwipedLeft(),a&&e.onSwipedRight()}}},cn=e=>j.fromISO(e).toLocaleString(j.TIME_24_SIMPLE),ln=e=>e.toFormat(`c`)>=6,un=e=>e.hasSame(j.now(),`day`),dn=w.div`
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
`,fn=()=>{let[e,t]=P.useState(void 0),[n,r]=nn(e),{nextWeek:i,previousWeek:a,startWeekWithToday:o}=on(t);P.useEffect(()=>{e===void 0&&o()},[]);let s=sn({onSwipedLeft:()=>i(),onSwipedRight:()=>a()}),c=(0,P.useMemo)(()=>({weekday:`short`,month:`numeric`,day:`numeric`}),[]),l=(0,P.useMemo)(()=>n.slice(0,7),[n]);return(0,I.jsxs)(dn,{...s,children:[(0,I.jsx)(X,{label:`Header`,children:(0,I.jsx)(Ut,{nextWeek:i,previousWeek:a,startWeekWithToday:o})}),(0,I.jsxs)(`div`,{className:`schedule`,children:[l.map((e,t)=>(0,I.jsx)(`div`,{className:M({weekend:ln(e.date),today:un(e.date)},`caption`),children:(0,I.jsx)(`h2`,{children:e.date.toLocaleString(c)})},t)),l.map((e,t)=>(0,I.jsx)(`div`,{className:M(`allDayRow`,{weekend:ln(e.date),today:un(e.date)}),children:e.allDay.map((e,t)=>(0,I.jsx)(`div`,{className:`allDayEvent`,children:e.summary},t))},t)),l.map((e,t)=>(0,I.jsx)(`div`,{className:M(`eventRow`,{weekend:ln(e.date),today:un(e.date)}),children:e.events.map((e,t)=>(0,I.jsxs)(`div`,{className:`event`,children:[(0,I.jsx)(`div`,{children:e.summary}),(0,I.jsxs)(`h3`,{children:[e.icon&&(0,I.jsx)(F,{path:e.icon,size:`1rem`,color:`#ffffff`}),cn(e.start.dateTime),` - `,cn(e.end.dateTime)]})]},t))},t))]}),n.length===0&&(0,I.jsx)(`div`,{className:`loading`,children:r===!1?(0,I.jsx)(le,{visible:!0,height:`80`,width:`80`,color:`#c1c1c1`,radius:`9`,ariaLabel:`three-dots-loading`,wrapperStyle:{},wrapperClass:``}):(0,I.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`},children:[(0,I.jsx)(`h3`,{children:`Fehler beim Laden der Kalenderdaten`}),(0,I.jsx)(`div`,{children:r instanceof Error?r.message:String(r)})]})}),r!==!1&&n.length>0&&(0,I.jsx)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`,marginTop:`1rem`},children:(0,I.jsxs)(`div`,{children:[`Warnung: `,r instanceof Error?r.message:String(r)]})})]})},pn={"clear-day":{icon:f,label:`Klar`,color:`#eeeef5`},"clear-night":{icon:r,label:`Klar`,color:`#eeeef5`},rain:{icon:_,label:`Regen`,color:`#80a5d6`},snow:{icon:a,label:`Schnee`,color:`#8c82ce`},sleet:{icon:i,label:`Graupel`,color:`#aba4db`},wind:{icon:p,label:`Stürmisch`,color:`#9fb6d6`},fog:{icon:h,label:`Neblig`,color:`#d5dae2`},cloudy:{icon:c,label:`Bewölkt`,color:`#b6bfcb`},"partly-cloudy-day":{icon:n,label:`Teils bewölkt`,color:`#d5dae2`},"partly-cloudy-night":{icon:l,label:`Teils bewölkt`,color:`#d5dae2`}},mn=e=>{let[t,n]=P.useState([]),[r,i]=P.useState(!1),a=qt(6e4*10,`Weather`),o=V(),s=o.ENABLE_WEATHER||!1,c=o.WEATHER_LATITUDE,l=o.WEATHER_LONGITUDE,u=s&&c&&l,d=()=>`.${`/forecast/${c},${l}?units=si&exclude=minutely`}`;return P.useEffect(()=>{if(!u){e&&e(!1);return}let t=!0,r=new AbortController;return e&&e(!0),N(d(),{signal:r.signal}).then(e=>{t&&(n(e.data),i(!1))}).catch(e=>{t&&!r.signal.aborted&&i(G(e))}).finally(()=>{t&&e&&e(!1)}),()=>{t=!1,r.abort()}},[a,e,u,s,c,l]),[t,r]},hn=g(d),gn=w.div`

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
`,_n=(0,P.memo)(({data:e,daily:t=!1})=>(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{children:[!t&&j.fromSeconds(e.time).toLocaleString(j.TIME_24_SIMPLE),t&&j.fromSeconds(e.time).setLocale(`de`).toFormat(`ccc, d.M`)]}),(0,I.jsx)(`div`,{children:(0,I.jsx)(yn,{icon:e.icon})}),(0,I.jsx)(`div`,{children:(0,I.jsxs)(`strong`,{children:[!t&&(0,I.jsxs)(I.Fragment,{children:[Math.round(e.temperature),`°`]}),t&&(0,I.jsxs)(I.Fragment,{children:[Math.round(e.temperatureHigh),`° / `,Math.round(e.temperatureLow),`°`]})]})}),(0,I.jsxs)(`div`,{children:[Math.round(e.precipProbability*100),` %`]}),(0,I.jsxs)(`div`,{children:[(e.precipIntensity*100).toFixed(1),` mm`]})]})),vn=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(e=>({color:pn[e.icon]?.color||`#ffffff`,text:pn[e.icon]?.label||``,annotation:`${Math.round(e.temperature)}°`,time:e.time})),yn=({icon:e})=>{let t=pn[e];return(0,I.jsx)(t.icon,{size:60,color:`#ffffff`})},bn=(0,P.memo)(()=>{let e=V().ENABLE_WEATHER||!1,[t,n]=mn(),[r,i]=P.useState(!1),a=rn(`w`),o=P.useRef(),s=(0,P.useCallback)(()=>i(e=>!e),[]),c=(0,P.useCallback)(()=>i(!0),[]),l=(0,P.useMemo)(()=>vn(t),[t]),u=(0,P.useMemo)(()=>[3,6,9,12],[]),d=(0,P.useMemo)(()=>[1,2,3,4,5,6,7],[]);return P.useEffect(()=>{if(!r||!o.current||!t||!t.hourly||l.length===0)return;let e={timezone:`Europe/Berlin`},n=document.createElement(`div`);return o.current.textContent=``,o.current.appendChild(n),_e(n,l,e),()=>{o.current&&(o.current.textContent=``)}},[r,l]),P.useEffect(()=>{a&&s()},[a]),e?!t||!(`currently`in t)||!(`daily`in t)||!(`hourly`in t)?n===!1?``:(0,I.jsx)(gn,{children:(0,I.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`},children:[(0,I.jsx)(`h3`,{children:`Fehler beim Laden der Wetterdaten`}),(0,I.jsx)(`div`,{children:n instanceof Error?n.message:String(n)})]})}):(0,I.jsxs)(gn,{children:[(0,I.jsxs)(`div`,{onClick:c,children:[(0,I.jsxs)(`div`,{className:`headline`,children:[(0,I.jsx)(yn,{icon:t.currently.icon}),(0,I.jsxs)(`h2`,{children:[Math.round(t.currently.temperature),`°`]})]}),(0,I.jsx)(`div`,{className:`forecast`,children:u.map((e,n)=>(0,I.jsx)(_n,{data:t.hourly.data[e]},n))})]}),(0,I.jsx)(xe,{visible:r,onClick:s,children:(0,I.jsxs)(`div`,{className:`full-weather`,children:[n!==!1&&(0,I.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`,marginBottom:`1rem`},children:[(0,I.jsx)(`h3`,{children:`Fehler!`}),(0,I.jsx)(`div`,{children:n instanceof Error?n.message:String(n)})]}),(0,I.jsxs)(`div`,{className:`detail-header`,children:[(0,I.jsx)(`div`,{children:(0,I.jsxs)(`div`,{className:`headline`,children:[(0,I.jsx)(yn,{icon:t.daily.data[0].icon}),(0,I.jsxs)(`h2`,{children:[Math.round(t.daily.data[0].temperatureHigh),`° /`,(0,I.jsxs)(`span`,{children:[Math.round(t.daily.data[0].temperatureLow),`°`]})]})]})}),(0,I.jsx)(`h3`,{children:pn[t.daily.data[0].icon].label})]}),(0,I.jsx)(`div`,{className:`values`,children:(0,I.jsxs)(`div`,{className:`table`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{children:`Gefühlt:`}),` `,Math.round(t.daily.data[0].apparentTemperatureHigh),`° C`]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{children:`Luftfeuchtigkeit:`}),` `,Math.round(t.daily.data[0].humidity*100),` %`]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{children:`Wind:`}),` `,Math.round(t.daily.data[0].windSpeed),` km/h`]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{children:`Bewölkung:`}),` `,Math.round(t.daily.data[0].cloudCover*100),` %`]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{children:`Regen:`}),` `,Math.round(t.daily.data[0].precipProbability*100),` %`]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{children:`UV Index:`}),` `,t.daily.data[0].uvIndex]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{children:`Luftdruck:`}),` `,Math.round(t.daily.data[0].pressure)]})]})}),(0,I.jsx)(`h3`,{children:`Die nächsten 24 Stunden`}),(0,I.jsx)(`div`,{ref:o}),(0,I.jsx)(`h3`,{children:`Die nächste Woche`}),(0,I.jsx)(`div`,{className:`forecast`,children:d.map((e,n)=>(0,I.jsx)(_n,{data:t.daily.data[e],daily:!0},n))}),(0,I.jsxs)(`div`,{className:`info`,children:[`Aktualisiert `,(0,I.jsx)(m,{date:j.fromSeconds(t.currently.time).toJSDate(),formatter:hn})]})]})})]}):null}),xn={name:`AK Wandsbek`,city:`Hamburg`,id:`Master:62016`,type:`STATION`,coordinate:{x:10.091341,y:53.568702}},Sn={departureList:`departureList`,checkName:`checkName`},Cn=async(e,t,n,r)=>{let i={Accept:`application/json`,"Content-Type":`application/json;charset=UTF-8`},a=r.HASS_ACCESS_TOKEN||``;return a&&a.trim()!==``&&a!==`undefined`&&a!==`null`&&(i.Authorization=`Bearer ${a}`),N({method:`post`,url:K(`/gti/public/${e}`,r),data:t,signal:n,headers:i})},wn=(e,t)=>e.realtimeOffset-t.realtimeOffset,Tn=e=>{let t=(e?.departures??[]).map(e=>({line:e.line.name,direction:e.line.direction,timeOffset:e.timeOffset,delay:e.delay?e.delay:`0`,directionId:e.directionId,realtimeOffset:e.timeOffset+(e.delay?e.delay:0)/60}));return{from:t.filter(e=>e.directionId===1).slice(0,3).sort(wn),to:t.filter(e=>e.directionId===6).slice(0,3).sort(wn)}},En=e=>{let t=V(),n=t.ENABLE_HVV||!1,[r,i]=P.useState([]),[a,o]=P.useState(!1),s=qt(6e4),c=n;return P.useEffect(()=>{if(!c)return;if(!(e in Sn)){z.warn(e,`not supported by HVV connector`);return}let n=!0,r=new AbortController,a={version:51};switch(e){case Sn.checkName:a={...a,theName:{name:`AK Wandsbek`,type:`STATION`},maxList:1};break;case Sn.departureList:let e=j.now();a={...a,station:xn,time:{date:e.toFormat(`dd.MM.yyyy`),time:e.toFormat(`HH:mm`)},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:a=void 0}return Cn(e,a,r.signal,t).then(t=>{n&&(e===Sn.departureList?i(Tn(t.data)):i(t.data),o(!1))}).catch(e=>{n&&!r.signal.aborted&&o(G(e))}),()=>{n=!1,r.abort()}},[e,s,c,n]),[r,a]},Dn=w.div`
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
`,On=(0,P.memo)(({line:e,direction:t,realtimeOffset:n})=>(0,I.jsxs)(`div`,{className:`departure`,children:[(0,I.jsx)(`div`,{children:(0,I.jsx)(`img`,{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),(0,I.jsx)(`div`,{children:n===0?`Jetzt`:(0,I.jsxs)(I.Fragment,{children:[`in `,n,` '`]})})]})),kn=(0,P.memo)(()=>{let e=V().ENABLE_HVV||!1,[t,n]=En(Sn.departureList);return e?(0,I.jsx)(Dn,{children:n===!1?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`h3`,{children:`→\xA0Wandsbek`}),t.to?.map((e,t)=>(0,I.jsx)(On,{line:e.line,direction:e.direction,realtimeOffset:e.realtimeOffset},t)),(0,I.jsx)(`h3`,{children:`→\xA0Stadtauswärts`}),t.from?.map((e,t)=>(0,I.jsx)(On,{line:e.line,direction:e.direction,realtimeOffset:e.realtimeOffset},t))]}):(0,I.jsxs)(`div`,{style:{padding:`1rem`,color:`#f85a5a`,textAlign:`center`},children:[(0,I.jsx)(`h3`,{children:`Fehler!`}),(0,I.jsx)(`div`,{children:n instanceof Error?n.message:String(n)})]})}):null}),An=()=>{let e=V(),t=e.ENABLE_EV||!1,n=e.ENTITY_PRECLIMATE_STATUS||``,r=e.ENTITY_CHARGING_STATE||``,i=e.ENTITY_STATE_OF_CHARGE||``,a=t&&(n||r||i),[o,s,c]=q({entityId:n,enabled:a&&!!n,config:e,initialState:`off`}),{error:l}=Ct({entityId:n,enabled:a&&!!n,onStateUpdate:c,logPrefix:`EV preclimate`,wsOptions:{checkBackendConnection:!1,reconnectStrategy:`exponential`,maxReconnectAttempts:5,reconnectDelay:1e3}}),[u,d,f]=q({entityId:r,enabled:a&&!!r,config:e,initialState:`off`}),{error:p}=Ct({entityId:r,enabled:a&&!!r,onStateUpdate:f,logPrefix:`EV charging`,wsOptions:{checkBackendConnection:!1,reconnectStrategy:`exponential`,maxReconnectAttempts:5,reconnectDelay:1e3}}),[m,h,g]=q({entityId:i,enabled:a&&!!i,config:e,initialState:`0`}),{error:_}=Ct({entityId:i,enabled:a&&!!i,onStateUpdate:g,logPrefix:`EV SoC`,wsOptions:{checkBackendConnection:!1,reconnectStrategy:`exponential`,maxReconnectAttempts:5,reconnectDelay:1e3}});return[P.useMemo(()=>({preclimateStatus:o===`on`,chargingState:u===`on`,stateOfCharge:parseFloat(m)||0}),[o,u,m]),s||l||d||p||h||_||!1]},jn=e=>{let t=e?.ENTITY_PRECLIMATE_START||``;t&&N.post(K(`/api/services/button/press`,e),{entity_id:t}).catch(e=>{z.error(`Failed to start preclimate:`,e)})},Mn=e=>{let t=e?.ENTITY_PRECLIMATE_STOP||``;t&&N.post(K(`/api/services/button/press`,e),{entity_id:t}).catch(e=>{z.error(`Failed to stop preclimate:`,e)})},Nn=({preclimateStatus:e,error:t,onStart:n,onStop:r})=>{let[i,a]=(0,P.useState)(!1),[o,s]=(0,P.useState)(null),[c,l]=(0,P.useState)(!1),[u,d]=(0,P.useState)(!1),[f,p]=(0,P.useState)(0),m=(0,P.useRef)(null),h=(0,P.useRef)(null),g=(0,P.useRef)(e),_=(0,P.useRef)(null);return(0,P.useEffect)(()=>{g.current!==e&&(i&&_.current!==null&&e===(o===`start`)&&(p(o===`start`?360:0),d(!0),setTimeout(()=>{a(!1),s(null),d(!1),p(0),_.current=null,l(!1)},300),m.current&&=(clearTimeout(m.current),null)),g.current=e)},[e,i,o]),(0,P.useEffect)(()=>{if(!i||u){h.current&&=(cancelAnimationFrame(h.current),null);return}let e=_.current||Date.now(),t=o===`stop`,n=()=>{let r=Date.now()-e,i=Math.min(r/Be,1);p(t?360*(1-i):360*i),i<1&&!u&&(h.current=requestAnimationFrame(n))};return h.current=requestAnimationFrame(n),()=>{h.current&&=(cancelAnimationFrame(h.current),null)}},[i,u,o]),(0,P.useEffect)(()=>()=>{m.current&&clearTimeout(m.current),h.current&&cancelAnimationFrame(h.current)},[]),{isAnimating:i,animationDirection:o,shouldShake:c,isComplete:u,progressAngle:f,handleToggle:(0,P.useCallback)(()=>{if(t!==!1||i)return;let o=!e,c=o?`start`:`stop`;a(!0),s(c),d(!1),l(!1),p(0),_.current=Date.now(),g.current=e,o?n():r(),m.current=setTimeout(()=>{l(!0),setTimeout(()=>{a(!1),s(null),d(!1),p(0),l(!1),_.current=null},500)},Ve)},[e,t,i,n,r])}},Pn=w.div`
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
`,Fn=(e,t)=>t?ue:e>=80?A:e>=50?fe:e>=20?ie:ee,In=e=>e>=90?`#17e146`:e>=40?`#ff9800`:`#f85a5a`,Ln=(0,P.memo)(()=>{let e=V(),t=e.ENABLE_EV||!1,[n,r]=An(),{preclimateStatus:i,chargingState:a,stateOfCharge:o}=n,{isAnimating:s,animationDirection:c,shouldShake:l,isComplete:u,progressAngle:d,handleToggle:f}=Nn({preclimateStatus:i,error:r,onStart:(0,P.useCallback)(()=>jn(e),[e]),onStop:(0,P.useCallback)(()=>Mn(e),[e])}),p=Fn(o||0,a),m=In(o||0),h=Math.round(o||0),g=s?c===`start`:i,_=c===`start`?`#17e146`:`#f85a5a`,v=c===`start`?`clockwise`:`counterclockwise`;return t?(0,I.jsxs)(Pn,{className:M({disabled:r!==!1}),children:[(0,I.jsxs)(`h2`,{children:[`Auto`,r===!1?(0,I.jsxs)(`div`,{className:`battery-info`,children:[(0,I.jsxs)(`span`,{className:`charge-percentage`,children:[h,`%`]}),(0,I.jsx)(F,{path:p,size:`1.2rem`,color:m})]}):(0,I.jsxs)(`div`,{className:`battery-info`,children:[(0,I.jsx)(F,{path:re,size:`1.2rem`,color:`#f85a5a`}),(0,I.jsx)(`span`,{children:`Fehler`})]})]}),r===!1&&(0,I.jsxs)(`div`,{className:`preclimate-button-wrapper`,children:[s&&(0,I.jsx)(`div`,{className:M(`progress-ring`,v,{complete:u}),style:{"--progress-color":_,"--progress-angle":`${d}deg`,"--progress-gradient":`conic-gradient(from -90deg, ${_} 0deg, ${_} ${d}deg, transparent ${d}deg, transparent 360deg)`}}),(0,I.jsxs)(`button`,{className:M(`preclimate-button`,{spinning:g&&!s,shaking:l}),onClick:f,disabled:r!==!1||s,children:[(0,I.jsx)(F,{path:`M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z`,size:`2rem`,color:g?`#ff9800`:`#ffffff`}),(0,I.jsx)(`span`,{children:g?`Stop`:`Start`})]})]})]}):null}),Rn=()=>{let e=V(),t=e.ENABLE_GARAGE||!1,n=e.ENTITY_GARAGE_DOOR||``,r=t&&n,[i,a,o]=q({entityId:n,enabled:r,config:e,initialState:`closed`}),{error:s}=Ct({entityId:n,enabled:r,onStateUpdate:o,logPrefix:`garage door`});return[i,a||s||!1]},zn=(e,t={})=>{let n=t.ENTITY_GARAGE_DOOR||``;if(!n)return;e(!0);let r=setTimeout(()=>e(!1),He);N.post(K(`/api/services/cover/toggle`,t),{entity_id:n}).catch(e=>{z.error(`Failed to toggle garage door:`,e)}).finally(()=>{clearTimeout(r),e(!1)})},Bn=(e,t={})=>{let n=t.ENTITY_GARAGE_DOOR||``;if(!n)return;e(!0);let r=setTimeout(()=>e(!1),He);N.post(K(`/api/services/cover/open_cover`,t),{entity_id:n}).catch(e=>{z.error(`Failed to open garage door:`,e)}).finally(()=>{clearTimeout(r),e(!1)})},Vn=(e,t={})=>{let n=t.ENTITY_GARAGE_DOOR||``;if(!n)return;e(!0);let r=setTimeout(()=>e(!1),He);N.post(K(`/api/services/cover/close_cover`,t),{entity_id:n}).catch(e=>{z.error(`Failed to close garage door:`,e)}).finally(()=>{clearTimeout(r),e(!1)})},Hn=w.div`
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
`,Un=w.div`
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
`,Wn=e=>{let t={unknown:{label:`In Bewegung oder halb-offen`,icon:he},open:{label:`Offen`,icon:k},closed:{label:`Geschlossen`,icon:me},opening:{label:`Öffnet`,icon:se},closing:{label:`Schließt`,icon:O}};return t[e]||z.warn(`Garage door state is not recognized:`,e,`Available states: unknown, open, closed, opening, closing`),t[e]||{label:`Unavailable`,icon:`M21.86 12.5C21.1 11.63 20.15 11.13 19 11C19 9.05 18.32 7.4 16.96 6.04C15.6 4.68 13.95 4 12 4C10.42 4 9 4.47 7.75 5.43S5.67 7.62 5.25 9.15C4 9.43 2.96 10.08 2.17 11.1S1 13.28 1 14.58C1 16.09 1.54 17.38 2.61 18.43C3.69 19.5 5 20 6.5 20H18.5C19.75 20 20.81 19.56 21.69 18.69C22.56 17.81 23 16.75 23 15.5C23 14.35 22.62 13.35 21.86 12.5M20.27 17.27C19.79 17.76 19.2 18 18.5 18H6.5C5.53 18 4.71 17.66 4.03 17C3.34 16.29 3 15.47 3 14.5S3.34 12.71 4.03 12.03C4.71 11.34 5.53 11 6.5 11H7C7 9.62 7.5 8.44 8.46 7.46C9.44 6.5 10.62 6 12 6S14.56 6.5 15.54 7.46C16.5 8.44 17 9.62 17 11V13H18.5C19.2 13 19.79 13.24 20.27 13.73S21 14.8 21 15.5 20.76 16.79 20.27 17.27M11 15H13V17H11V15M14.43 8.68C14.97 9.13 15.24 9.75 15.24 10.5C15.24 11 15.09 11.41 14.8 11.82C14.5 12.21 14.13 12.5 13.67 12.75C13.41 12.91 13.24 13.07 13.15 13.26C13.06 13.45 13 13.69 13 14H11C11 13.45 11.11 13.08 11.3 12.82C11.5 12.56 11.85 12.25 12.37 11.91C12.63 11.75 12.84 11.56 13 11.32C13.15 11.09 13.23 10.81 13.23 10.5C13.23 10.18 13.14 9.94 12.96 9.76C12.78 9.56 12.5 9.47 12.2 9.47C11.93 9.47 11.71 9.55 11.5 9.7C11.35 9.85 11.25 10.08 11.25 10.39H9.28C9.23 9.64 9.5 9 10.06 8.59C10.6 8.2 11.31 8 12.2 8C13.14 8 13.89 8.23 14.43 8.68Z`}},Gn=({garageDoor:e,animate:t=!1})=>(0,I.jsxs)(Un,{className:M({animate:t}),children:[(0,I.jsx)(F,{path:Wn(e).icon,size:`2rem`,color:`#ffffff`}),(0,I.jsx)(`span`,{children:Wn(e).label})]}),Kn=3e4,qn=e=>oe.promise(e,{loading:`Garagentor ist in Bewegung …`,success:e=>Wn(e).label,error:`Nope`,duration:5e3}),Jn=(0,P.memo)(()=>{let e=V(),t=e.ENABLE_GARAGE||!1,[n,r]=Rn(),[i,a]=P.useState(void 0),[o,s]=P.useState(!1),[c,l]=P.useState(!1),u=P.useRef(n);P.useEffect(()=>{u.current=n},[n]),P.useEffect(()=>{if(n===`unknown`||n===`opening`||n===`closing`){if(!i){let e,t=new Promise(t=>{e=t}),n=window.setTimeout(()=>{e(u.current),a(void 0)},Kn);a({resolve:e,watchdogId:n}),qn(t)}}else i&&(window.clearTimeout(i.watchdogId),i.resolve(n),a(void 0))},[n]);let d=rn(`g`);P.useEffect(()=>{d&&r===!1&&zn(s,e)},[d,r,e]);let f=(0,P.useCallback)(t=>{if(r===!1)switch(l(!1),t){case`open`:Bn(s,e);break;case`close`:Vn(s,e);break;default:}},[s,r,e]),p=(0,P.useCallback)(()=>{r===!1&&l(!0)},[r]);return t?(0,I.jsxs)(Hn,{className:M({disabled:r!==!1}),children:[(0,I.jsx)(`h2`,{children:`Garage`}),(0,I.jsx)(`div`,{className:`status`,onClick:p,children:r===!1?(0,I.jsx)(Gn,{garageDoor:n,animate:o}):(0,I.jsxs)(Un,{children:[(0,I.jsx)(F,{path:re,size:`2rem`,color:`#f85a5a`}),(0,I.jsx)(`span`,{children:`Fehler`})]})}),(0,I.jsx)(xe,{visible:c&&r===!1,onClick:()=>l(!1),children:(0,I.jsxs)(`div`,{className:`controls`,children:[(0,I.jsx)(`h2`,{children:`Garagentor`}),(0,I.jsx)(`div`,{onClick:()=>f(`open`),children:`Öffnen`}),(0,I.jsx)(`div`,{onClick:()=>f(`close`),children:`Schließen`})]})})]}):null}),Yn=({entityIds:e,enabled:t,onStateUpdate:n,logPrefix:r,wsOptions:i={}})=>{let{error:a}=St({enabled:t&&e.length>0,logPrefix:r,...i,onReady:(t,i)=>(e.forEach(e=>{i.current.set(e,t=>{t.state!==void 0&&n(e,t.state)}),t.readyState===WebSocket.OPEN&&t.send(JSON.stringify({type:`subscribe_entity`,entity_id:e}))}),e.length>0&&z.debug(`Subscribed to ${r} state changes: ${e.join(`, `)}`),()=>{e.forEach(e=>{i.current.delete(e),t.readyState===WebSocket.OPEN&&t.send(JSON.stringify({type:`unsubscribe_entity`,entity_id:e}))})}),dependencies:[t,e.join(`,`)]});return{error:a}},Z={done:{label:`Fertig`,animate:!1,icon:pe},off:{label:`Aus`,animate:!1,icon:E},standby:{label:`Standby`,animate:!1,icon:x},running:{label:`Läuft …`,animate:!0,icon:x}},Xn={off:0,standby:2,running:16,done:256},Zn=()=>{let e=V(),t=e.ENABLE_LAUNDRY||!1,n=e.LAUNDRY_MACHINES||[],r=Array.isArray(n)?n:[],i=P.useMemo(()=>r.filter(e=>e.entity_id).map(e=>e.entity_id),[r.map(e=>e.entity_id).join(`,`)]),[a,o]=P.useState({}),[s,c]=P.useState({}),l=P.useCallback((e,t)=>{o(n=>({...n,[e]:t}))},[]),{error:u}=Yn({entityIds:i,enabled:t&&i.length>0,onStateUpdate:l,logPrefix:`laundry`});P.useEffect(()=>{if(!t||i.length===0)return;let n=new Map;return i.forEach(t=>{let r=K(`/api/states/${t}`,e);if(!r)return;let i=new AbortController;n.set(t,i),N(r,{signal:i.signal}).then(e=>{o(n=>({...n,[t]:e.data.state})),c(e=>({...e,[t]:!1}))}).catch(e=>{i.signal.aborted||c(n=>({...n,[t]:G(e)}))})}),()=>{n.forEach(e=>e.abort())}},[t,i.join(`,`),e]);let d=r.map(e=>({state:a[e.entity_id]||`off`,error:s[e.entity_id]||u||!1,name:e.name})),[f,p]=P.useState(Z.off),[m,h]=P.useState(!1),g=d.map(e=>e.state),_=d.map(e=>e.error);return P.useEffect(()=>{h(_.some(e=>e!==!1)&&_.find(e=>e!==!1)||!1)},[_]),P.useEffect(()=>{let e=g.reduce((e,t)=>e+(Xn[t]||0),0);e===0?p(Z.off):e<16?p(Z.standby):e<256?p(Z.running):e%256==0?p(Z.done):e%256%16==0?p(Z.running):e%256%2==0?p(Z.done):p(Z.running)},[g]),[f,d.map(e=>({label:e.name,state:e.state})),m]},Qn=w.div`
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
`,$n=(0,P.memo)(()=>{let e=V().ENABLE_LAUNDRY||!1,[t,n,r]=Zn(),[i,a]=P.useState(!1),o=(0,P.useCallback)(()=>{r===!1&&a(!0)},[r]),s=(0,P.useCallback)(()=>a(!1),[]);return e?(0,I.jsxs)(Qn,{className:M({disabled:r!==!1}),children:[(0,I.jsx)(`h2`,{children:`Wäsche`}),(0,I.jsx)(`div`,{className:`status`,onClick:o,children:r===!1?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:M({animate:t.animate}),children:(0,I.jsx)(F,{path:t.icon,size:`2rem`,color:`#ffffff`})}),(0,I.jsx)(`span`,{children:t.label})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(F,{path:re,size:`2rem`,color:`#f85a5a`}),(0,I.jsx)(`span`,{children:`Fehler`})]})}),(0,I.jsx)(xe,{visible:i&&r===!1,onClick:s,children:(0,I.jsxs)(`div`,{className:`states`,children:[(0,I.jsx)(`h2`,{children:`Wäsche`}),n.map((e,t)=>(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`subtitle`,children:e.label}),(0,I.jsx)(`div`,{className:M({animate:Z[e.state].animate}),children:(0,I.jsx)(F,{path:Z[e.state].icon,size:2})}),(0,I.jsx)(`div`,{children:Z[e.state].label})]},t))]})})]}):null}),er=w.div`
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
`,tr=(0,P.memo)(()=>(0,I.jsxs)(er,{children:[(0,I.jsxs)(`div`,{className:`top-content`,children:[(0,I.jsx)(X,{compact:!0,children:(0,I.jsx)(bn,{})}),(0,I.jsx)(X,{compact:!0,children:(0,I.jsx)(kn,{})}),(0,I.jsx)(X,{compact:!0,children:(0,I.jsx)(Ln,{})})]}),(0,I.jsxs)(`div`,{className:`two-cols`,children:[(0,I.jsx)(X,{compact:!0,children:(0,I.jsx)(Jn,{})}),(0,I.jsx)(X,{compact:!0,children:(0,I.jsx)($n,{})})]})]})),nr=[{name:`Full HD`,width:1920,height:1080},{name:`HD`,width:1366,height:768},{name:`QHD`,width:2560,height:1440},{name:`4K`,width:3840,height:2160},{name:`Amazon Fire HD 7"`,width:1280,height:800},{name:`Custom`,width:null,height:null}],rr=[{name:`1 Video - Landscape`,videos:[{orientation:`landscape`}]},{name:`1 Video - Portrait`,videos:[{orientation:`portrait`}]},{name:`1 Video - Wide`,videos:[{orientation:`wide`}]},{name:`2 Videos - LL`,videos:[{orientation:`landscape`},{orientation:`landscape`}]},{name:`2 Videos - LP`,videos:[{orientation:`landscape`},{orientation:`portrait`}]},{name:`2 Videos - LW`,videos:[{orientation:`landscape`},{orientation:`wide`}]},{name:`2 Videos - PP`,videos:[{orientation:`portrait`},{orientation:`portrait`}]},{name:`2 Videos - PW`,videos:[{orientation:`portrait`},{orientation:`wide`}]},{name:`2 Videos - WW`,videos:[{orientation:`wide`},{orientation:`wide`}]},{name:`3 Videos - LLL`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`landscape`}]},{name:`3 Videos - LLP`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`portrait`}]},{name:`3 Videos - LLW`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`wide`}]},{name:`3 Videos - LPW`,videos:[{orientation:`landscape`},{orientation:`portrait`},{orientation:`wide`}]},{name:`3 Videos - LPP`,videos:[{orientation:`landscape`},{orientation:`portrait`},{orientation:`portrait`}]},{name:`3 Videos - LWW`,videos:[{orientation:`landscape`},{orientation:`wide`},{orientation:`wide`}]},{name:`3 Videos - PPP`,videos:[{orientation:`portrait`},{orientation:`portrait`},{orientation:`portrait`}]},{name:`3 Videos - PWW`,videos:[{orientation:`portrait`},{orientation:`wide`},{orientation:`wide`}]},{name:`3 Videos - WWW`,videos:[{orientation:`wide`},{orientation:`wide`},{orientation:`wide`}]},{name:`4 Videos - LLLL`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`landscape`},{orientation:`landscape`}]},{name:`4 Videos - LLLP`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`landscape`},{orientation:`portrait`}]},{name:`4 Videos - LLPP`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`portrait`},{orientation:`portrait`}]},{name:`4 Videos - LPPP`,videos:[{orientation:`landscape`},{orientation:`portrait`},{orientation:`portrait`},{orientation:`portrait`}]},{name:`4 Videos - PPPP`,videos:[{orientation:`portrait`},{orientation:`portrait`},{orientation:`portrait`},{orientation:`portrait`}]},{name:`4 Videos - LLLW`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`landscape`},{orientation:`wide`}]},{name:`4 Videos - LLWW`,videos:[{orientation:`landscape`},{orientation:`landscape`},{orientation:`wide`},{orientation:`wide`}]},{name:`4 Videos - LWWW`,videos:[{orientation:`landscape`},{orientation:`wide`},{orientation:`wide`},{orientation:`wide`}]},{name:`4 Videos - WWWW`,videos:[{orientation:`wide`},{orientation:`wide`},{orientation:`wide`},{orientation:`wide`}]}],ir={landscape:`#4A90E2`,portrait:`#50C878`,wide:`#FF8C42`},ar={landscape:`L`,portrait:`P`,wide:`W`},or=w.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,sr=w.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,cr=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Q=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$=w.label`
  font-size: 0.9rem;
  color: #cccccc;
`,lr=w.select`
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
`,ur=w.input`
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
`,dr=w.button`
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
`,fr=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,pr=w.button`
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
`,mr=w.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,hr=w.div`
  position: absolute;
  background-color: ${e=>ir[e.orientation]||`#666`};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,gr=w.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,_r=w.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,vr=w.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,yr=w.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,br=w.div`
  font-size: 0.85rem;
  color: #cccccc;
`,xr=w.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Sr=w.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Cr=w.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,w.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;var wr=w.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?ir[e.orientation]:`#3a3a3a`};
  color: #ffffff;
  border: 1px solid ${e=>e.active?ir[e.orientation]:`#555`};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?ir[e.orientation]:`#4a4a4a`};
  }
`,Tr=()=>{let[e,t]=(0,P.useState)(1920),[n,r]=(0,P.useState)(1080),[i,a]=(0,P.useState)(`Full HD`),[o,s]=(0,P.useState)(``),[c,l]=(0,P.useState)(``),[u,d]=(0,P.useState)([{orientation:`landscape`}]),[f,p]=(0,P.useState)(null),m=(0,P.useMemo)(()=>Mt(u,e,n),[u,e,n]),h=e=>{let n=nr.find(t=>t.name===e);n&&n.width&&n.height?(t(n.width),r(n.height),a(e),s(``),l(``)):e===`Custom`&&a(`Custom`)},g=()=>{let e=parseInt(o),n=parseInt(c);e>0&&n>0&&(t(e),r(n))},_=e=>{d(e.videos),p(e.name)},v=e=>{let t=[];for(let n=0;n<e;n++)t.push(u[n]||{orientation:`landscape`});d(t),p(null)},y=(e,t)=>{let n=[...u];n[e]={orientation:t},d(n),p(null)},b=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/n));return(0,I.jsxs)(or,{children:[(0,I.jsx)(sr,{children:`Video Tiling Algorithm Demo`}),(0,I.jsxs)(cr,{children:[(0,I.jsxs)(Q,{children:[(0,I.jsx)($,{children:`Screen Size Preset`}),(0,I.jsx)(lr,{value:i,onChange:e=>h(e.target.value),children:nr.map(e=>(0,I.jsx)(`option`,{value:e.name,children:e.name},e.name))})]}),i===`Custom`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(Q,{children:[(0,I.jsx)($,{children:`Custom Width`}),(0,I.jsx)(ur,{type:`number`,value:o,onChange:e=>s(e.target.value),placeholder:`Width`,min:`100`})]}),(0,I.jsxs)(Q,{children:[(0,I.jsx)($,{children:`Custom Height`}),(0,I.jsx)(ur,{type:`number`,value:c,onChange:e=>l(e.target.value),placeholder:`Height`,min:`100`})]}),(0,I.jsxs)(Q,{children:[(0,I.jsx)($,{children:`\xA0`}),(0,I.jsx)(dr,{onClick:g,children:`Apply Custom Size`})]})]}),(0,I.jsxs)(Q,{children:[(0,I.jsx)($,{children:`Number of Videos`}),(0,I.jsxs)(lr,{value:u.length,onChange:e=>v(parseInt(e.target.value)),children:[(0,I.jsx)(`option`,{value:`1`,children:`1 Video`}),(0,I.jsx)(`option`,{value:`2`,children:`2 Videos`}),(0,I.jsx)(`option`,{value:`3`,children:`3 Videos`}),(0,I.jsx)(`option`,{value:`4`,children:`4 Videos`})]})]}),u.map((e,t)=>(0,I.jsxs)(Q,{children:[(0,I.jsxs)($,{children:[`Video `,t+1,` Orientation`]}),(0,I.jsxs)(fr,{children:[(0,I.jsx)(wr,{active:e.orientation===`landscape`,orientation:`landscape`,onClick:()=>y(t,`landscape`),children:`Landscape`}),(0,I.jsx)(wr,{active:e.orientation===`portrait`,orientation:`portrait`,onClick:()=>y(t,`portrait`),children:`Portrait`}),(0,I.jsx)(wr,{active:e.orientation===`wide`,orientation:`wide`,onClick:()=>y(t,`wide`),children:`Wide`})]})]},t))]}),(0,I.jsxs)(Sr,{children:[(0,I.jsx)(Cr,{children:`Test Scenarios`}),(0,I.jsx)(fr,{children:rr.map(e=>(0,I.jsx)(pr,{active:f===e.name,onClick:()=>_(e),children:e.name},e.name))})]}),(0,I.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginTop:`24px`},children:(0,I.jsx)(mr,{style:{width:`${e*b}px`,height:`${n*b}px`},children:m.videos.map((e,t)=>(0,I.jsxs)(hr,{orientation:e.orientation,style:{left:`${e.x*b}px`,top:`${e.y*b}px`,width:`${e.width*b}px`,height:`${e.height*b}px`},children:[(0,I.jsxs)(gr,{children:[ar[e.orientation],` `,t+1]}),(0,I.jsxs)(_r,{children:[Math.round(e.width),` × `,Math.round(e.height)]})]},t))})}),(0,I.jsxs)(vr,{children:[(0,I.jsxs)(yr,{children:[(0,I.jsx)(br,{children:`Canvas Size`}),(0,I.jsxs)(xr,{children:[e,` × `,n]})]}),(0,I.jsxs)(yr,{children:[(0,I.jsx)(br,{children:`Total Area Used`}),(0,I.jsxs)(xr,{children:[Math.round(m.totalArea).toLocaleString(),` px²`]})]}),(0,I.jsxs)(yr,{children:[(0,I.jsx)(br,{children:`Efficiency`}),(0,I.jsxs)(xr,{children:[m.efficiency.toFixed(2),`%`]})]}),(0,I.jsxs)(yr,{children:[(0,I.jsx)(br,{children:`Display Scale`}),(0,I.jsxs)(xr,{children:[(b*100).toFixed(1),`%`]})]})]})]})},Er=`hass-family-calendar-config-banner-dismissed`,Dr=w.div`
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
`,Or=()=>{let e=Ye(),t=Xe(),n=Ze(),r=Je(),[i,a]=(0,P.useState)(()=>{try{if(typeof window<`u`&&window.localStorage)return localStorage.getItem(Er)===`true`}catch{}return!1}),[o,s]=(0,P.useState)(!1);if((0,P.useEffect)(()=>{if(e&&i){a(!1);try{typeof window<`u`&&window.localStorage&&localStorage.removeItem(Er)}catch{}}},[e,i]),r||i||!e&&!t)return null;let c=async()=>{s(!0);try{await n()}catch{}finally{s(!1)}},l=()=>{a(!0);try{typeof window<`u`&&window.localStorage&&localStorage.setItem(Er,`true`)}catch{}},u=`warning`,d=``;return e&&t?(u=`warning`,d=`Using cached configuration. Failed to load from server: ${e}`):e&&!t?(u=`error`,d=`Failed to load configuration: ${e}`):t&&(u=`warning`,d=`Using cached configuration. Some features may be outdated.`),(0,I.jsxs)(Dr,{severity:u,children:[(0,I.jsx)(`div`,{className:`message`,children:d}),(0,I.jsxs)(`div`,{className:`actions`,children:[e&&(0,I.jsx)(`button`,{onClick:c,disabled:o,children:o?`Retrying...`:`Retry`}),(0,I.jsx)(`button`,{className:`dismiss`,onClick:l,title:`Dismiss`,children:`×`})]})]})},kr=()=>{function e(e,t){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(t))throw Error(`Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').`);let[n,r]=t.split(`:`).map(Number),i=new Date,a=new Date(i.getFullYear(),i.getMonth(),i.getDate());a.setHours(n,r,0,0),a<=i&&a.setDate(a.getDate()+1);let o=a.getTime()-i.getTime();return z.log(`Reloading page at`,t,`in`,Math.floor(o/1e3/60),`minutes`),setTimeout(e,o)}let t=()=>{z.log(`Timeout reached! `),window.location.reload(!0)};P.useLayoutEffect(()=>{let n=[e(t,`00:00`),e(t,`03:00`),e(t,`06:00`),e(t,`09:00`),e(t,`12:00`),e(t,`15:00`),e(t,`18:00`),e(t,`21:00`)];return()=>{n.forEach(e=>{e&&clearTimeout(e)})}},[])},Ar=S`
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
`,jr=w.div`
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
`;function Mr(){kr();let e=Ye(),t=Xe(),n=Je(),[r]=P.useState(()=>{try{if(typeof window<`u`&&window.localStorage)return localStorage.getItem(Er)===`true`}catch{}return!1});return(0,I.jsxs)(jr,{$hasBanner:!n&&!r&&(e||t),children:[(0,I.jsx)(Ar,{}),(0,I.jsx)(Or,{}),(0,I.jsxs)(`div`,{className:`main`,children:[(0,I.jsx)(X,{autoReload:!0,label:`Kalender`,children:(0,I.jsx)(fn,{})}),(0,I.jsx)(X,{autoReload:!0,label:`Sidebar`,children:(0,I.jsx)(tr,{})})]}),(0,I.jsx)(de,{position:`bottom-center`,theme:`dark`,duration:5e3,closeButton:!0})]})}function Nr(){return(0,I.jsx)(X,{autoReload:!0,label:`App`,children:(0,I.jsxs)(v,{children:[(0,I.jsx)(t,{path:`/demo`,element:(0,I.jsx)(Tr,{})}),(0,I.jsx)(t,{path:`/tiling-demo`,element:(0,I.jsx)(Tr,{})}),(0,I.jsx)(t,{path:`*`,element:(0,I.jsx)(Mr,{})})]})})}ve.createRoot(document.getElementById(`root`)).render((0,I.jsx)(P.StrictMode,{children:(0,I.jsx)(X,{autoReload:!0,label:`Root`,children:(0,I.jsx)(qe,{children:(0,I.jsx)(dt,{children:(0,I.jsx)(o,{children:(0,I.jsx)(Nr,{})})})})})}));