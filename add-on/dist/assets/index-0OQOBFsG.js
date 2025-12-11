import{d as k,R as j,j as o,I as G,r as C,l as qe,P as tt,W as nt,b as ot,e as it,f as rt,h as st,i as at,k as lt,m as ct,n as dt,o as ft,T as ut,p as ht,s as pt,y as mt,q as gt,t as xt,u as Se,L as Et,v as yt,B as wt}from"./react-vendor-BitJRyew.js";import{D as B}from"./date-vendor-BDx6lZXm.js";import{f as H}from"./vendor-CeaMKy47.js";import{m as bt,a as At,b as St,c as Tt,d as Lt,e as _t,f as Ce,g as jt,h as Nt,i as Rt,j as Ct,k as vt,l as Ot,n as kt,o as Dt,p as It,q as Mt,r as $t,s as Pt,t as ke,u as Wt,v as Vt}from"./ui-vendor-C7t39j5V.js";import{a as M,q as Bt}from"./utils-vendor-Cs1iS-Fd.js";import{c as ae,a as le}from"./ha-vendor-CoU0AojH.js";import{t as Ht}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const p of a)if(p.type==="childList")for(const w of p.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&i(w)}).observe(document,{childList:!0,subtree:!0});function t(a){const p={};return a.integrity&&(p.integrity=a.integrity),a.referrerPolicy&&(p.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?p.credentials="include":a.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function i(a){if(a.ep)return;a.ep=!0;const p=t(a);fetch(a.href,p)}})();const Yt=k.div`
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
`,ce=({visible:e,children:n,onClick:t,onClose:i,fullsize:a=!1})=>{const p=i||t,w=E=>{E.stopPropagation(),E.preventDefault(),p()};return j.useEffect(()=>{if(e){const E=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${E}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,E)}}},[e]),e?o.jsxs(Yt,{onClick:t,children:[o.jsx("div",{className:"close",onClick:w,children:o.jsx(G,{path:bt,size:2})}),o.jsx("div",{className:H("content",{fullsize:a}),onClick:E=>E.stopPropagation(),children:n})]}):null};let Xe=!0;const Gt=e=>{Xe=!!e};let ge=!1,K=[],ie=0;const re=100,De=50,je=()=>{if(K.length===0||ge)return;const e=K.shift(),n=Date.now();n-ie>=re?oe(e.level,e.message,e.metadata):(K.unshift(e),setTimeout(je,re-(n-ie)))},oe=(e,n,t=null)=>{if(!Xe)return;if(ge){K.length<De&&K.push({level:e,message:n,metadata:t,timestamp:Date.now()});return}const i=Date.now();if(i-ie<re){K.length<De&&(K.push({level:e,message:n,metadata:t,timestamp:i}),K.length===1&&setTimeout(je,re-(i-ie)));return}setTimeout(async()=>{ge=!0,ie=Date.now();try{const p=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,w={level:e,message:n,...t&&{metadata:t}};await M.create({timeout:2e3}).post(p,w)}catch{K.length>10&&(K=[])}finally{ge=!1,K.length>0&&setTimeout(je,re)}},0)},fe=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},ue=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,i)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${i}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},N={log:(...e)=>{const n=fe(e),t=ue(e);n&&oe("INFO",n,t)},error:(...e)=>{console.error(...e);const n=fe(e),t=ue(e);n&&oe("ERROR",n,t)},warn:(...e)=>{const n=fe(e),t=ue(e);n&&oe("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=fe(e),t=ue(e);n&&oe("INFO",n,t)}},Ut={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Ft=()=>{const e=(n,t=void 0)=>{const i=Ut[`VITE_${n}`];return i!==void 0?i:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),SUPERVISOR_TOKEN:e("SUPERVISOR_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_API_KEY:e("WEATHER_API_KEY",""),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),GEOFOX_SECRET:e("GEOFOX_SECRET",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_LOGGING:e("ENABLE_LOGGING",!1)}},Je=C.createContext(null),zt=({children:e})=>{const[n,t]=C.useState(Ft),[i,a]=C.useState(!0);return C.useEffect(()=>{(async()=>{try{const E=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`,S=await M.get(E,{timeout:5e3});if(S.data&&typeof S.data=="object"){t(S.data);const c=Object.keys(S.data).filter(d=>d.startsWith("ENABLE_")&&S.data[d]).map(d=>d.replace("ENABLE_",""));N.info(`Configuration loaded from API endpoint. Enabled features: ${c.length>0?c.join(", "):"none"}`,{enabledFeatures:c,totalConfigKeys:Object.keys(S.data).length})}}catch(w){N.debug("Failed to load config from API, using defaults:",w.message)}finally{a(!1)}})()},[]),C.useEffect(()=>{const p=n.HASS_ACCESS_TOKEN||"";p&&typeof p=="string"&&p.trim()!==""&&p!=="undefined"&&p!=="null"?M.defaults.headers.common.Authorization=`Bearer ${p}`:delete M.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),C.useEffect(()=>{const p=n.ENABLE_LOGGING===!0;Gt(p)},[n.ENABLE_LOGGING]),o.jsx(Je.Provider,{value:{config:n,loading:i},children:e})},W=()=>{const e=C.useContext(Je);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config};let ne=0,xe=0,Q=0;const te=[],Qe=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},Kt=(e,n="")=>{const t=Qe(e);if(t.url&&(t.url.includes("/api/log")||t.url.endsWith("/api/log")||e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")))return t;Q++,ne++,te.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),te.length>10&&te.shift();const a=[];return n&&a.push(`[${n}]`),a.push("🔴 Axios API Error:"),a.push(`Message: ${t.message}`),t.url&&a.push(`URL: ${t.url}`),t.status&&a.push(`HTTP Status: ${t.status}`),t.code&&a.push(`Error Code: ${t.code}`),t.isNetworkError&&(a.push("Type: Network Error (no response received)"),t.readyState!==void 0&&a.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&a.push("Type: Timeout Error"),t.config&&(a.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),a.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&a.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&a.push("Response Data:",t.responseData),a.push(`Request Stats: ${xe} success, ${Q} errors (${ne} total)`),Q>3&&te.length>0&&a.push("Recent errors pattern:",te.slice(-5)),N.error(...a),t},qt=e=>{xe++,ne++,(ne%10===0||Q>0)&&N.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:ne,stats:`${xe} success, ${Q} errors`}),Q>0&&ne%10===0&&xe>Q&&(Q=0,te.length=0)},F=e=>{const n=Qe(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};M.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,N.debug("Axios Defaults State:",{baseURL:M.defaults.baseURL,timeout:M.defaults.timeout,hasAuthHeader:!!M.defaults.headers?.common?.Authorization,authHeaderLength:M.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(M.defaults.headers?.common||{})})),e},e=>(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log")||N.error("Axios Request Setup Error:",e),Promise.reject(e)));M.interceptors.response.use(e=>(e.config&&qt(e.config),e),e=>{if(!(e.config?.url?.includes("/api/log")||e.config?.url?.endsWith("/api/log"))){const t=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(Kt(e,t),e.config?.metadata){const i=Date.now()-e.config.metadata.startTime;N.error("Request Duration:",`${i}ms`,"Request ID:",e.config.metadata.requestId)}typeof window<"u"&&window.location&&N.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href})}return Promise.reject(e)});const P=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const i=n.INGRESS_URL||"";if(i&&typeof i=="string"&&i.trim()!==""){const p=t.startsWith("/")?t.slice(1):t;return`${window.location.origin}${i}${p}`}const a=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${a}${t}`}return t}},de=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},Xt=()=>{const e=W(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[i,a]=j.useState(null),[p,w]=j.useState(!1),E=n&&t,S=t?P(`/api/states/${t}`,e):null;return j.useEffect(()=>{if(!E||!S)return;let c=!0;const d=new AbortController;return M(S,{signal:d.signal}).then(h=>{c&&(h.data.attributes.store!==void 0?a(h.data.attributes.store):a([]),w(!1))}).catch(h=>{c&&!d.signal.aborted&&(w(F(h)),a([]))}),()=>{c=!1,d.abort()}},[E,S,n,t]),[i,p]},Jt=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const i=P(`/api/states/${t}`,n);M.post(i,{state:new Date,attributes:{store:e}}).catch(a=>{N.error("Failed to store everyday calendar data:",a)})},Ie=k.div` 

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
`,Qt=({on:e,month:n,day:t})=>{const[i,a]=e,p=i.indexOf(`${n}-${t}`),w=p>-1,E=()=>{a(w?i.toSpliced(p,1):[...i,`${n}-${t}`])};return o.jsx("div",{className:H("dot",{on:w}),onClick:()=>E()})},Zt=()=>{const e=W();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),i=[];for(let c=1;c<13;c++){const d=new Date(t,c,0).getDate();for(let h=1;h<=d;h++)i.push({month:c,day:h})}const a=Array.from({length:31},(c,d)=>d+1),p=Array.from({length:12},(c,d)=>d+1),w=j.useState(void 0),[E,S]=Xt();return j.useEffect(()=>{E!==null&&w[1](E)},[E]),j.useEffect(()=>{w[0]!==void 0&&Jt(w[0],e)},[w[0],e]),w[0]!==void 0?o.jsxs(Ie,{children:[o.jsx("h2",{children:"Jeden Tag ein bißchen"}),S!==!1&&o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:S instanceof Error?S.message:String(S)})]}),o.jsxs("div",{className:"calendar",children:[a.map((c,d)=>o.jsx("div",{style:{gridArea:`${c+1} / 1 / ${c+1} / 1`},children:c},d)),p.map((c,d)=>o.jsx("div",{style:{gridArea:`1 / ${c+1} / 1 / ${c+1}`},children:c},d)),i.map((c,d)=>o.jsx("div",{style:{gridArea:`${c.day+1} / ${c.month+1} / ${c.day+1} / ${c.month+1}`},children:o.jsx(Qt,{on:w,month:c.month,day:c.day})},d))]})]}):o.jsx(Ie,{className:"loading",children:S!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:S instanceof Error?S.message:String(S)})]}):o.jsx(qe,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},en=k.div`
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
  }`,tn=()=>{const[e,n]=j.useState(B.now()),[t,i]=j.useState(!1),a=C.useCallback(()=>i(!0),[]),p=C.useCallback(()=>i(!1),[]);return j.useEffect(()=>{const w=setInterval(()=>n(B.now()),1e3);return()=>clearInterval(w)},[]),o.jsxs(o.Fragment,{children:[o.jsxs(en,{onClick:a,children:[e.toFormat("HH"),o.jsx("span",{children:":"}),e.toFormat("mm")]}),o.jsx(ce,{visible:t,onClick:p,fullsize:!0,children:o.jsx(Zt,{})})]})},nn=C.memo(tn),on=()=>{const e=W(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const i=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[p,w]=j.useState("off"),[E,S]=j.useState(!1),c=n&&t,d=t?P(`/api/states/${t}`,e):null;return j.useEffect(()=>{if(!c||!d)return;let h=!0;const y=new AbortController;return M(d,{signal:y.signal}).then(g=>{h&&(w(g.data.state),S(!1))}).catch(g=>{h&&!y.signal.aborted&&S(F(g))}),()=>{h=!1,y.abort()}},[c,d,n,t]),j.useEffect(()=>{let h=null,y=null,g=!0,f=null,u=0;const s=5;let l=!1,r=null,m=null;async function T(){if(!c||!t||!g||l)return;if(h){try{r&&(h.removeEventListener("ready",r),r=null),m&&(h.removeEventListener("disconnected",m),m=null),y&&(y(),y=null),h.close()}catch{}h=null}l=!0;const x=de(e),A=a||i||"";if(!A){l=!1;return}let b;try{b=ae(x,A),g&&S(!1)}catch(L){g&&(N.error("Failed to create WebSocket auth:",L),S(L instanceof Error?L.message:String(L))),l=!1;return}try{h=await le({auth:b}),r=()=>{g&&(N.debug("WebSocket connection ready for doorbell"),u=0,S(!1))},h.addEventListener("ready",r),m=()=>{if(g&&!l){if(N.debug("WebSocket disconnected for doorbell, will attempt to reconnect"),f&&(clearTimeout(f),f=null),u>=s){N.warn(`Max reconnection attempts (${s}) reached for doorbell, stopping reconnection`),g&&S("Verbindung verloren. Bitte Seite neu laden.");return}h=null,y=null,r=null,m=null;const _=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!l&&u<=s&&(N.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${u}/${s})`),T())},_)}},h.addEventListener("disconnected",m);const L=_=>{if(g){const R=_.variables.trigger.to_state.state;w(R)}};y=await h.subscribeMessage(L,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),l=!1}catch(L){if(l=!1,g)if(N.error("Failed to setup WebSocket connection:",L),N.error("WebSocket error details:",{message:L instanceof Error?L.message:String(L),code:L.code,name:L.name,wsUrl:b?.wsUrl,host:x,tokenLength:A?A.length:0}),L.code===2&&N.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),S(L instanceof Error?L.message:String(L)),u<s){const _=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!l&&u<=s&&T()},_)}else N.warn(`Max reconnection attempts (${s}) reached for doorbell, stopping reconnection`),g&&S("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return T(),()=>{if(g=!1,l=!1,f&&(clearTimeout(f),f=null),h)try{r&&h.removeEventListener("ready",r),m&&h.removeEventListener("disconnected",m)}catch{}if(y){try{y()}catch{}y=null}if(h){try{h.close()}catch{}h=null}}},[c]),[p,E]},rn=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&M.post(P("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to unlatch front door:",t)})},D={portrait:360/480,landscape:1920/1072,wide:770/216};function sn(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function Ze(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const i=e.length,a=sn(e);return i===1?an(e[0],n,t):i===2?ln(a,e,n,t):i===3?cn(a,e,n,t):i===4?dn(a,e,n,t):{videos:[],totalArea:0,efficiency:0}}function an(e,n,t){const i=D[e.orientation];let a,p;const w=n/t;return i>w?(a=n,p=n/i):(p=t,a=t*i),{videos:[{x:(n-a)/2,y:(t-p)/2,width:a,height:p,orientation:e.orientation}],totalArea:a*p,efficiency:a*p/(n*t)*100}}function ln(e,n,t,i){if(e.portrait>0)return ve(e,n,t,i);const a=[];e.landscape>0&&a.push("landscape"),e.wide>0&&a.push("wide");const p=a[0]||n[0].orientation,w=a[1]||n[1].orientation,E=D[p],S=D[w];if(e.landscape===1&&e.wide===1){const f=D.landscape,u=D.wide,s=t,l=s/f,r=s/u,m=l+r;let T,x,A;if(m<=i)T=l,x=r,A=s;else{const I=i/m;T=l*I,x=r*I,A=x*u}const b=(t-A)/2,_=X(n,[{x:b,y:0,width:A,height:x,orientation:"wide"},{x:b,y:x,width:A,height:T,orientation:"landscape"}]),R=A*T+A*x,v=R/(t*i)*100;return{videos:_,totalArea:R,efficiency:v}}if(e.wide===2){const f=D.wide,u=t,s=u/f,l=s*2;let r;l<=i?r=s:r=i/2;const T=X(n,[{x:0,y:0,width:u,height:r,orientation:"wide"},{x:0,y:r,width:u,height:r,orientation:"wide"}]),x=u*r*2,A=x/(t*i)*100;return{videos:T,totalArea:x,efficiency:A}}const c=[()=>{const f=t,u=f/2,s=f/2,l=u/E,r=s/S;return Math.max(l,r)<=i?{positions:[{x:0,y:(i-l)/2,width:u,height:l,orientation:p},{x:u,y:(i-r)/2,width:s,height:r,orientation:w}],totalArea:u*l+s*r}:null},()=>{const f=i,u=f/2,s=f/2,l=u*E,r=s*S;return Math.max(l,r)<=t?{positions:[{x:(t-l)/2,y:0,width:l,height:u,orientation:p},{x:(t-r)/2,y:u,width:r,height:s,orientation:w}],totalArea:l*u+r*s}:null}];let d=null,h=0;for(const f of c){const u=f();u&&u.totalArea>h&&(h=u.totalArea,d=u)}if(!d){const f=t/2,u=t/2,s=Math.min(f/E,i),l=Math.min(u/S,i);d={positions:[{x:0,y:(i-s)/2,width:f,height:s,orientation:p},{x:f,y:(i-l)/2,width:u,height:l,orientation:w}],totalArea:f*s+u*l}}const y=X(n,d.positions),g=d.totalArea/(t*i)*100;return{videos:y,totalArea:d.totalArea,efficiency:g}}function ve(e,n,t,i){const a=e.portrait,p=n.length-a;if((a===3||a===4)&&p===0){const g=D.portrait,f=t/a,u=f/g,s=u<i?(i-u)/2:0,l=Math.min(u,i),r=[];let m=0;for(let A=0;A<a;A++){const b=Math.min(f,l*g);r.push({x:A*f+(f-b)/2,y:s,width:b,height:l,orientation:"portrait"}),m+=b*l}const T=X(n,r),x=m/(t*i)*100;return{videos:T,totalArea:m,efficiency:x}}n.filter(g=>g.orientation==="portrait");const w=n.filter(g=>g.orientation!=="portrait"),E=a>0?Math.min(t*.4,t*.5):0,S=t-E,c=[];let d=0;if(a===2&&p===0){const g=D.portrait,f=t/2,u=f/g,s=i;let l,r;u<=s?(r=u,l=f):(r=s,l=s*g);const m=(i-r)/2;c.push({x:(f-l)/2,y:m,width:l,height:r,orientation:"portrait"}),c.push({x:f+(f-l)/2,y:m,width:l,height:r,orientation:"portrait"}),d=l*r*2}else if(a===1&&p===1){const g=D.portrait,f=w[0],u=D[f.orientation],s=g+u,l=t*(g/s),r=t*(u/s),m=l/g,T=r/u,x=Math.min(i,Math.min(m,T)),A=(i-x)/2;c.push({x:0,y:A,width:l,height:x,orientation:"portrait"}),c.push({x:l,y:A,width:r,height:x,orientation:f.orientation}),d=l*x+r*x}else if(a===1&&p===2&&e.landscape===1&&e.wide===1){const g=D.portrait,f=D.wide,u=D.landscape,s=i,l=i*g,r=i/(1/f+1/u),m=r/f,T=r/u,x=l+r;if(Math.abs(x-t)<.1)c.push({x:0,y:0,width:l,height:s,orientation:"portrait"}),d+=l*s,w.find(_=>_.orientation==="wide")&&(c.push({x:0+l,y:0,width:r,height:m,orientation:"wide"}),d+=r*m),w.find(_=>_.orientation==="landscape")&&(c.push({x:0+l,y:m,width:r,height:T,orientation:"landscape"}),d+=r*T);else{const A=t/x,b=l*A,L=b/g,_=r*A,R=i/L;let v=b*R,I=i,O=_*R,V=O/f,$=O/u,Y=v+O;if(Y>t){const J=t/Y;v=v*J,I=v/g,O=O*J,V=O/f,$=O/u,Y=v+O,Y>t&&(O=t-v,V=O/f,$=O/u)}const U=v+O;if(U>t){const J=t/U;v=v*J,I=v/g,O=O*J,V=O/f,$=O/u}const z=0;c.push({x:z,y:0,width:v,height:I,orientation:"portrait"}),d+=v*I,w.find(J=>J.orientation==="wide")&&(c.push({x:z+v,y:0,width:O,height:V,orientation:"wide"}),d+=O*V),w.find(J=>J.orientation==="landscape")&&(c.push({x:z+v,y:V,width:O,height:$,orientation:"landscape"}),d+=O*$)}}else if(a===1&&p===3){const g=D.portrait,f=i,u=f*g,s=u,l=t-s;c.push({x:0,y:0,width:u,height:f,orientation:"portrait"}),d+=u*f;const r=i/3;for(let m=0;m<w.length;m++){const T=w[m],x=D[T.orientation],A=r,b=l;let L,_;b/x<=A?(L=b,_=L/x):(_=A,L=_*x);const R=m*r+(r-_)/2;c.push({x:s+(l-L)/2,y:R,width:L,height:_,orientation:T.orientation}),d+=L*_}}else if(a===2&&p===1){const g=D.portrait,f=w[0],u=D[f.orientation],s=i/2,l=s*g,r=t-l,m=i*u;let T,x;m<=r?(x=i,T=x*u):(T=r,x=T/u);const A=l,b=s,L=(i-x)/2,_=(i/2-b)/2,R=i/2+(i/2-b)/2;c.push({x:0,y:L,width:T,height:x,orientation:f.orientation}),d+=T*x,c.push({x:r,y:_,width:A,height:b,orientation:"portrait"}),d+=A*b,c.push({x:r,y:R,width:A,height:b,orientation:"portrait"}),d+=A*b}else if(a===1&&p===2){const g=D.portrait,f=i,u=f*g,s=u,l=t-s;c.push({x:0,y:0,width:u,height:f,orientation:"portrait"}),d+=u*f;const r=i/2;for(let m=0;m<w.length;m++){const T=w[m],x=D[T.orientation],A=r,b=l;let L,_;b/x<=A?(L=b,_=L/x):(_=A,L=_*x);const R=m*r+(r-_)/2;c.push({x:s+(l-L)/2,y:R,width:L,height:_,orientation:T.orientation}),d+=L*_}}else{const g=a;if(g>0){const f=i/g,u=D.portrait;for(let s=0;s<g;s++){const l=Math.min(f,E/u),r=l*u,m=s*f+(f-l)/2;c.push({x:(E-r)/2,y:m,width:r,height:l,orientation:"portrait"}),d+=r*l}}if(w.length>0){const f=i/w.length;for(let u=0;u<w.length;u++){const s=w[u],l=D[s.orientation],r=f,m=S;let T,x;m/l<=r?(T=m,x=T/l):(x=r,T=x*l);const A=u*f+(f-x)/2;c.push({x:E+(S-T)/2,y:A,width:T,height:x,orientation:s.orientation}),d+=T*x}}}const h=X(n,c),y=d/(t*i)*100;return{videos:h,totalArea:d,efficiency:y}}function X(e,n){const t=new Array(n.length),i=new Set,a=new Set;for(let E=0;E<n.length;E++){const S=n[E];for(let c=0;c<e.length;c++)if(!i.has(c)&&e[c].orientation===S.orientation){t[E]={...S,orientation:e[c].orientation},i.add(c),a.add(E);break}}const p=[];for(let E=0;E<n.length;E++)a.has(E)||p.push(E);let w=0;for(let E=0;E<e.length;E++)if(!i.has(E)&&w<p.length){const S=p[w];t[S]={...n[S],orientation:e[E].orientation},w++}return t}function cn(e,n,t,i){if(e.portrait>0)return ve(e,n,t,i);if(e.landscape===2&&e.wide===1){const s=D.landscape,l=D.wide,r=t,m=r/l,T=i-m,x=t/2,A=x/s;let b,L,_,R;if(m<=i&&A<=T)b=r,L=m,_=x,R=A;else{const U=i/(m+A),z=Math.min(1,U);L=m*z,b=L*l,R=A*z,_=R*s}const v=(t-b)/2,I=L+(T-R)/2,V=X(n,[{x:v,y:0,width:b,height:L,orientation:"wide"},{x:0,y:I,width:_,height:R,orientation:"landscape"},{x:_,y:I,width:_,height:R,orientation:"landscape"}]),$=b*L+_*R*2,Y=$/(t*i)*100;return{videos:V,totalArea:$,efficiency:Y}}if(e.landscape===1&&e.wide===2){const s=D.landscape,l=D.wide,r=t/2,m=r/l,x=i-m,A=x*s;let b,L,_,R;if(m<=i&&A<=t&&m+x<=i)b=r,L=m,_=A,R=x;else{const z=m+x,Ae=i/z;b=r,L=m*Ae,R=x*Ae,_=R*s}const v=0,I=t/2,O=(t-_)/2,$=X(n,[{x:v,y:0,width:b,height:L,orientation:"wide"},{x:I,y:0,width:b,height:L,orientation:"wide"},{x:O,y:L,width:_,height:R,orientation:"landscape"}]),Y=b*L*2+_*R,U=Y/(t*i)*100;return{videos:$,totalArea:Y,efficiency:U}}if(e.wide===3){const s=D.wide,l=t/2,r=l/s,T=i-r,x=T*s;let A,b,L,_;if(r<=i&&x<=t&&r+T<=i)A=l,b=r,L=x,_=T;else{const U=r+T,z=i/U;A=l,b=r*z,_=T*z,L=_*s,L>t&&(L=t,_=L/s)}const R=0,v=t/2,I=(t-L)/2,V=X(n,[{x:R,y:0,width:A,height:b,orientation:"wide"},{x:v,y:0,width:A,height:b,orientation:"wide"},{x:I,y:b,width:L,height:_,orientation:"wide"}]),$=A*b*2+L*_,Y=$/(t*i)*100;return{videos:V,totalArea:$,efficiency:Y}}if(e.landscape===3){const s=D.landscape,l=t/(s*1.5),r=Math.min(i,l),m=r/2,T=r,x=m*s,A=T*s,b=(i-r)/2,L=[{x:0,y:b,width:x,height:m,orientation:"landscape"},{x:0,y:b+m,width:x,height:m,orientation:"landscape"},{x,y:b,width:A,height:T,orientation:"landscape"}],_=X(n,L),R=x*r+A*r,v=R/(t*i)*100;return{videos:_,totalArea:R,efficiency:v}}const a=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)a.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)a.push("wide");const p=a[0]||n[0].orientation,w=a[1]||n[1].orientation,E=a[2]||n[2].orientation,S=D[p],c=D[w],d=D[E],h=[()=>{const s=t*.6,l=t*.4,r=s/S,m=l/c,T=l/d,x=m+T;return r<=i&&x<=i?{positions:[{x:0,y:(i-r)/2,width:s,height:r,orientation:p},{x:s,y:0,width:l,height:m,orientation:w},{x:s,y:m,width:l,height:T,orientation:E}],totalArea:s*r+l*m+l*T}:null},()=>{const s=i*.5,l=i*.5,r=s*S,m=s*c,T=l*d;return r+m<=t&&T<=t?{positions:[{x:0,y:0,width:r,height:s,orientation:p},{x:r,y:0,width:m,height:s,orientation:w},{x:(t-T)/2,y:s,width:T,height:l,orientation:E}],totalArea:r*s+m*s+T*l}:null},()=>{const s=t/3,l=s/S,r=s/c,m=s/d;return Math.max(l,r,m)<=i?{positions:[{x:0,y:(i-l)/2,width:s,height:l,orientation:p},{x:s,y:(i-r)/2,width:s,height:r,orientation:w},{x:s*2,y:(i-m)/2,width:s,height:m,orientation:E}],totalArea:s*l+s*r+s*m}:null}];let y=null,g=0;for(const s of h){const l=s();l&&l.totalArea>g&&(g=l.totalArea,y=l)}if(!y){const s=t/3,l=Math.min(s/S,i),r=Math.min(s/c,i),m=Math.min(s/d,i);y={positions:[{x:0,y:(i-l)/2,width:s,height:l,orientation:p},{x:s,y:(i-r)/2,width:s,height:r,orientation:w},{x:s*2,y:(i-m)/2,width:s,height:m,orientation:E}],totalArea:s*l+s*r+s*m}}const f=X(n,y.positions),u=y.totalArea/(t*i)*100;return{videos:f,totalArea:y.totalArea,efficiency:u}}function dn(e,n,t,i){if(e.portrait>0)return ve(e,n,t,i);const a=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)a.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)a.push("wide");const p=a[0]||n[0].orientation,w=a[1]||n[1].orientation,E=a[2]||n[2].orientation,S=a[3]||n[3].orientation,c=D[p],d=D[w],h=D[E],y=D[S],g=[()=>{const r=t/2,m=i/2,T=Math.min(r,m*c),x=T/c,A=Math.min(r,m*d),b=A/d,L=Math.min(r,m*h),_=L/h,R=Math.min(r,m*y),v=R/y;return{positions:[{x:(r-T)/2,y:(m-x)/2,width:T,height:x,orientation:p},{x:r+(r-A)/2,y:(m-b)/2,width:A,height:b,orientation:w},{x:(r-L)/2,y:m+(m-_)/2,width:L,height:_,orientation:E},{x:r+(r-R)/2,y:m+(m-v)/2,width:R,height:v,orientation:S}],totalArea:T*x+A*b+L*_+R*v}},()=>{const r=t*.6,m=t*.4,T=r/c,x=i/3,A=Math.min(m,x*d),b=A/d,L=Math.min(m,x*h),_=L/h,R=Math.min(m,x*y),v=R/y;return T<=i?{positions:[{x:0,y:(i-T)/2,width:r,height:T,orientation:p},{x:r,y:0,width:A,height:b,orientation:w},{x:r,y:x,width:L,height:_,orientation:E},{x:r,y:x*2,width:R,height:v,orientation:S}],totalArea:r*T+A*b+L*_+R*v}:null},()=>{const r=t/4,m=r/c,T=r/d,x=r/h,A=r/y;return Math.max(m,T,x,A)<=i?{positions:[{x:0,y:(i-m)/2,width:r,height:m,orientation:p},{x:r,y:(i-T)/2,width:r,height:T,orientation:w},{x:r*2,y:(i-x)/2,width:r,height:x,orientation:E},{x:r*3,y:(i-A)/2,width:r,height:A,orientation:S}],totalArea:r*m+r*T+r*x+r*A}:null}];let f=null,u=0;for(const r of g){const m=r();m&&m.totalArea>u&&(u=m.totalArea,f=m)}if(!f){const r=t/2,m=i/2,T=Math.min(m,r/c),x=Math.min(m,r/d),A=Math.min(m,r/h),b=Math.min(m,r/y);f={positions:[{x:(r-r)/2,y:(m-T)/2,width:r,height:T,orientation:p},{x:r+(r-r)/2,y:(m-x)/2,width:r,height:x,orientation:w},{x:(r-r)/2,y:m+(m-A)/2,width:r,height:A,orientation:E},{x:r+(r-r)/2,y:m+(m-b)/2,width:r,height:b,orientation:S}],totalArea:r*T+r*x+r*A+r*b}}const s=X(n,f.positions),l=f.totalArea/(t*i)*100;return{videos:s,totalArea:f.totalArea,efficiency:l}}const fn=e=>{const n=W();n.HASS_HOST;const t=n.HASS_ACCESS_TOKEN||"",i=n.SUPERVISOR_TOKEN||"",[a,p]=j.useState({}),[w,E]=j.useState(!0),[S,c]=j.useState(null);return j.useEffect(()=>{if(!e||e.length===0){E(!1);return}let d=!0;async function h(){E(!0),c(null);try{const y=e.map(async f=>{try{const u=P(`/api/states/${f}`,n),l=(await M(u)).data?.attributes?.access_token||null;return{entityId:f,accessToken:l}}catch(u){return N.error(`Failed to fetch access token for ${f}:`,u),{entityId:f,accessToken:null}}}),g=await Promise.all(y);if(d){const f={};g.forEach(({entityId:u,accessToken:s})=>{s&&(f[u]=s)}),p(f),E(!1)}}catch(y){d&&(N.error("Failed to fetch camera access tokens:",y),c(F(y)),E(!1))}}return h(),()=>{d=!1}},[e?.length,e?.join(",")]),j.useEffect(()=>{if(!e||e.length===0)return;let d=!0,h=null;async function y(){if(d)try{const g=e.map(async u=>{try{const s=P(`/api/states/${u}`,n),r=(await M(s)).data?.attributes?.access_token||null;return{entityId:u,accessToken:r}}catch(s){return N.debug(`Failed to refresh access token for ${u}:`,s),null}}),f=await Promise.all(g);d&&p(u=>{const s={...u};return f.forEach(l=>{l&&l.accessToken&&(s[l.entityId]=l.accessToken)}),s})}catch{}}return h=setInterval(y,300*1e3),()=>{d=!1,h&&clearInterval(h)}},[e?.length,e?.join(",")]),j.useEffect(()=>{if(!e||e.length===0)return;let d=null,h=[],y=!0,g=null,f=0;const u=5;let s=!1,l=null,r=null;async function m(){if(s||!y)return;if(d){try{l&&(d.removeEventListener("ready",l),l=null),r&&(d.removeEventListener("disconnected",r),r=null),h.forEach(b=>{b&&b()}),h=[],d.close()}catch{}d=null}s=!0;const T=de(n),x=i||t||"";if(!x){s=!1;return}let A;try{A=ae(T,x),y&&c(!1)}catch(b){y&&(N.error("Failed to create WebSocket auth for camera tokens:",b),c(b instanceof Error?b.message:String(b))),s=!1;return}try{d=await le({auth:A}),l=()=>{y&&(N.debug("WebSocket connection ready for camera tokens"),f=0,c(!1))},d.addEventListener("ready",l),r=()=>{if(y&&!s){if(N.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),g&&(clearTimeout(g),g=null),f>=u){N.warn(`Max reconnection attempts (${u}) reached for camera tokens, stopping reconnection`),y&&c("Verbindung verloren. Bitte Seite neu laden.");return}d=null,h=[],l=null,r=null;const b=Math.min(1e3*Math.pow(2,f),3e4);f++,g=setTimeout(()=>{y&&!s&&f<=u&&(N.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${f}/${u})`),m())},b)}},d.addEventListener("disconnected",r);for(const b of e){const L=R=>{if(y){const I=R.variables.trigger.to_state?.attributes?.access_token||null;p(O=>I?{...O,[b]:I}:O)}},_=await d.subscribeMessage(L,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:b}});h.push(_)}s=!1}catch(b){if(s=!1,y)if(N.error("Failed to setup WebSocket connection for camera tokens:",b),c(b instanceof Error?b.message:String(b)),f<u){const L=Math.min(1e3*Math.pow(2,f),3e4);f++,g=setTimeout(()=>{y&&!s&&f<=u&&m()},L)}else N.warn(`Max reconnection attempts (${u}) reached for camera tokens, stopping reconnection`),y&&c("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return m(),()=>{if(y=!1,s=!1,g&&(clearTimeout(g),g=null),d)try{l&&d.removeEventListener("ready",l),r&&d.removeEventListener("disconnected",r)}catch{}if(h.forEach(T=>{if(T)try{T()}catch{}}),h=[],d){try{d.close()}catch{}d=null}}},[e?.length,e?.join(",")]),[a,w,S]},un=(e,n=null,t=null)=>{if(!e)return null;let i=t||"";if(!i&&typeof window<"u"&&window.location){const p=window.location.protocol,w=window.location.hostname,E=window.location.port?`:${window.location.port}`:"";i=`${p}//${w}${E}`}if(!i)return N.warn("HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL"),null;const a=`${i}/api/camera_proxy_stream/${e}`;return n?`${a}?token=${encodeURIComponent(n)}`:a},Me=45e3,hn=k.div`
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
`,pn=()=>{const e=W(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[];if(!n)return null;const[i,a]=j.useState(!1),[p]=on(),[w,E]=j.useState(void 0),[S,c]=j.useState(100),[d,h]=j.useState("0"),y=j.useMemo(()=>t.map(l=>l.entity_id).filter(Boolean),[t]),[g]=fn(y);j.useEffect(()=>{if(p==="off"&&i){const l=window.setTimeout(()=>{a(!1),E(void 0)},Me);return E(l),h(Me+"ms"),c(0),()=>{l&&window.clearTimeout(l)}}else p==="on"&&(h(0),c(100),a(!0))},[p,i]),j.useEffect(()=>{p==="on"&&w!==void 0&&(window.clearTimeout(w),h(0),c(100),E(void 0))},[w,p]);const[f,u]=j.useState(null),s=()=>{f===null?u("confirm"):f==="confirm"&&(u("opening"),rn(e),setTimeout(()=>u(null),2e3))};return j.useEffect(()=>{if(f==="confirm"){const l=setTimeout(()=>{u(null)},3e3);return()=>{clearTimeout(l)}}},[f]),j.useEffect(()=>{i||u(null)},[i]),o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>a(l=>!l),children:"CCTV"}),o.jsx(ce,{visible:i,onClick:s,onClose:()=>{a(!1),u(null)},fullsize:!0,children:o.jsxs(hn,{onClick:s,children:[o.jsx(tt,{completed:S,height:10,bgColor:w===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:d,transitionTimingFunction:"linear"}),o.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const l=t.map(b=>({orientation:b.orientation||"landscape"})),r=window.innerWidth,m=window.innerHeight-10,T=Ze(l,r,m),x={portrait:t.filter(b=>(b.orientation||"landscape")==="portrait"),landscape:t.filter(b=>(b.orientation||"landscape")==="landscape"),wide:t.filter(b=>b.orientation==="wide")},A={portrait:0,landscape:0,wide:0};return T.videos.map((b,L)=>{const _=b.orientation,R=A[_],v=x[_][R];if(!v)return null;A[_]++;const I=g[v.entity_id]||null,O=un(v.entity_id,I,e.HASS_HOST);return O?o.jsxs("div",{className:"video-container",style:{left:`${b.x}px`,top:`${b.y}px`,width:`${b.width}px`,height:`${b.height}px`},children:[o.jsx("img",{src:O,className:_,alt:"Camera stream",crossOrigin:"anonymous"},`${v.entity_id}-${L}`),o.jsx("div",{className:"video-overlay",onClick:()=>s()})]},`${_}-${R}-${L}`):null})})()}),f==="confirm"&&o.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),f==="opening"&&o.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},mn=k.div`
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

`,gn=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>o.jsxs(mn,{children:[o.jsxs("div",{className:"buttons",children:[o.jsx(G,{path:At,size:"32px",color:"#ffffff",onClick:n}),o.jsx(G,{path:St,size:"32px",color:"#ffffff",onClick:e}),o.jsx("button",{onClick:t,children:"Today"}),o.jsx(pn,{})]}),o.jsx(nn,{}),o.jsx(G,{path:Tt,size:"32px",color:"#ffffff",className:H("indicator")})]}),xn=C.memo(gn),En=6e4,Oe=(e=En,n=void 0)=>{const[t,i]=j.useState(!0);return j.useEffect(()=>{const a=setInterval(()=>{i(p=>!p)},e);return()=>{clearInterval(a)}},[e,n]),t},yn={mdiDelete:_t,mdiCake:Lt},wn=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return yn[n]||void 0},bn=(e,n,t,i,a,p)=>M(a(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:1e4,signal:p}).then(w=>{!w.data||!Array.isArray(w.data)||w.data.forEach(E=>{const S="dateTime"in E.start?B.fromISO(E.start.dateTime):B.fromSQL(E.start.date);let c;"dateTime"in E.end?c=Math.floor(B.fromISO(E.end.dateTime).diff(n,"days").as("days")):c=Math.floor(B.fromSQL(E.end.date).diff(n,"days").as("days"))-1;const d=Math.floor(S.diff(n,"days").as("days"));c>=i.length&&(c=i.length-1);const h="dateTime"in E.start?"events":"allDay";if(d>=0&&d<i.length)for(let y=d;y<=c;y++)i[y][h]=[...i[y][h],{...E,icon:e.icon}]})}).catch(w=>{if(!(M.isCancel(w)||w.name==="AbortError"||w.code==="ERR_CANCELED"))throw w}),$e=new Map,An=300*1e3,Sn=e=>e.toISODate(),Tn=(e,n,t,i,a,p,w,E,S)=>{const c=[0,1,2,3,4,5].map(f=>e.plus({days:f}).startOf("day"));c[6]=e.plus({days:6}).endOf("day");const d=Sn(e),h=$e.get(d);if(h&&Date.now()-h.timestamp<An){S.current&&t(h.data);return}const y=c.map(f=>({date:f,allDay:[],events:[]}));if(!w||w.length===0){S.current&&(t(y),i(!1));return}const g=new AbortController;a.current&&a.current.abort(),a.current=g;try{S.current&&i(!0);const f=w.map(u=>bn(u,c[0],c[6],y,E,g.signal));Promise.all(f).then(()=>{S.current&&!g.signal.aborted&&($e.set(d,{data:y,timestamp:Date.now()}),t(y),p(!1))}).catch(u=>{S.current&&!g.signal.aborted&&p(F(u))}).finally(()=>{S.current&&!g.signal.aborted&&i(!1)})}catch(f){S.current&&!g.signal.aborted&&(p(F(f)),i(!1))}},Pe=[],Ln=e=>{const n=W(),t=n.CALENDARS||[],i=j.useMemo(()=>t.map(s=>({name:s.name,icon:wn(s.icon)})),[t]),a=j.useCallback(s=>P(`/api/calendars/${s}`,n),[n]),p=j.useCallback((s,l)=>`${a(s)}?${Bt.stringify(l)}`,[a]),[w,E]=j.useState(Pe),[S,c]=j.useState(!1),[d,h]=j.useState(!1),[y,g]=j.useState(null),f=C.useRef(null),u=C.useRef(!0);return Oe(6e4,"Calendar"),j.useEffect(()=>(u.current=!0,e!==void 0&&((y===null||!y.equals(e))&&(E(Pe),g(e)),Tn(e,w,E,c,f,h,i,p,u)),()=>{u.current=!1,f.current&&f.current.abort()}),[e,i]),[w,d]};function se(e){const[n,t]=j.useState(!1);function i({key:p}){p===e&&t(!0)}const a=({key:p})=>{p===e&&t(!1)};return j.useEffect(()=>(window.addEventListener("keydown",i),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",i),window.removeEventListener("keyup",a)}),[e]),n}const _n=()=>{let e=new Date,t=(e.getDay()+6)%7,i=new Date(e.setDate(e.getDate()-t));return B.fromJSDate(i)},jn=e=>{const n=()=>e(E=>E.plus({days:7})),t=se("ArrowRight");j.useEffect(()=>{t&&n()},[t]);const i=()=>e(E=>E.minus({days:7})),a=se("ArrowLeft");j.useEffect(()=>{a&&i()},[a]);const p=()=>e(_n()),w=se("t");return j.useEffect(()=>{w&&p()},[w]),{nextWeek:n,previousWeek:i,startWeekWithToday:p}},Nn=e=>{const[n,t]=C.useState(0),[i,a]=C.useState(0),p=50;return{onTouchStart:c=>{a(0),t(c.targetTouches[0].clientX)},onTouchMove:c=>a(c.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!i)return;const c=n-i,d=c>p,h=c<-p;d&&e.onSwipedLeft(),h&&e.onSwipedRight()}}},We=e=>B.fromISO(e).toLocaleString(B.TIME_24_SIMPLE),Te=e=>e.toFormat("c")>=6,Le=e=>e.hasSame(B.now(),"day"),Rn=k.div`
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
`,Cn=()=>{const[e,n]=j.useState(void 0),[t,i]=Ln(e),{nextWeek:a,previousWeek:p,startWeekWithToday:w}=jn(n);j.useEffect(()=>{w()},[]);const E=Nn({onSwipedLeft:()=>a(),onSwipedRight:()=>p()}),S=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),c=C.useMemo(()=>t.slice(0,7),[t]);return o.jsxs(Rn,{...E,children:[o.jsx(xn,{nextWeek:a,previousWeek:p,startWeekWithToday:w}),o.jsxs("div",{className:"schedule",children:[c.map((d,h)=>o.jsx("div",{className:H({weekend:Te(d.date),today:Le(d.date)},"caption"),children:o.jsx("h2",{children:d.date.toLocaleString(S)})},h)),c.map((d,h)=>o.jsx("div",{className:H("allDayRow",{weekend:Te(d.date),today:Le(d.date)}),children:d.allDay.map((y,g)=>o.jsx("div",{className:"allDayEvent",children:y.summary},g))},h)),c.map((d,h)=>o.jsx("div",{className:H("eventRow",{weekend:Te(d.date),today:Le(d.date)}),children:d.events.map((y,g)=>o.jsxs("div",{className:"event",children:[o.jsx("div",{children:y.summary}),o.jsxs("h3",{children:[y.icon&&o.jsx(G,{path:y.icon,size:"1rem",color:"#ffffff"}),We(y.start.dateTime)," - ",We(y.end.dateTime)]})]},g))},h))]}),t.length===0&&o.jsx("div",{className:"loading",children:i!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),o.jsx("div",{children:i instanceof Error?i.message:String(i)})]}):o.jsx(qe,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),i!==!1&&t.length>0&&o.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:o.jsxs("div",{children:["Warnung: ",i instanceof Error?i.message:String(i)]})})]})},we={"clear-day":{icon:ft,label:"Klar",color:"#eeeef5"},"clear-night":{icon:dt,label:"Klar",color:"#eeeef5"},rain:{icon:ct,label:"Regen",color:"#80a5d6"},snow:{icon:lt,label:"Schnee",color:"#8c82ce"},sleet:{icon:at,label:"Graupel",color:"#aba4db"},wind:{icon:st,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:rt,label:"Neblig",color:"#d5dae2"},cloudy:{icon:it,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:ot,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:nt,label:"Teils bewölkt",color:"#d5dae2"}},vn=e=>{const[n,t]=j.useState([]),[i,a]=j.useState(!1),p=Oe(6e4*10,"Weather"),w=W(),E=w.ENABLE_WEATHER||!1,S=w.WEATHER_API_KEY||"",c=w.WEATHER_LATITUDE,d=w.WEATHER_LONGITUDE,h=E&&S&&c&&d,y=()=>`./forecast/${S}/${c},${d}?&units=si&exclude=minutely`;return j.useEffect(()=>{if(!h)return;let g=!0;const f=new AbortController;return M(y(),{signal:f.signal}).then(u=>{g&&(t(u.data),a(!1))}).catch(u=>{g&&!f.signal.aborted&&a(F(u))}).finally(()=>{g&&e&&e(!1)}),()=>{g=!1,f.abort()}},[p,e,h,E,S,c,d]),[n,i]},On=ht(pt),Ve=k.div`

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
`,Be=C.memo(({data:e,daily:n=!1})=>o.jsxs("div",{children:[o.jsxs("div",{children:[!n&&B.fromSeconds(e.time).toLocaleString(B.TIME_24_SIMPLE),n&&B.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),o.jsx("div",{children:o.jsx(Ne,{icon:e.icon})}),o.jsx("div",{children:o.jsxs("strong",{children:[!n&&o.jsxs(o.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&o.jsxs(o.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),o.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),o.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),kn=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:we[n.icon]?.color||"#ffffff",text:we[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),Ne=({icon:e})=>{const n=we[e];return o.jsx(n.icon,{size:60,color:"#ffffff"})},Dn=()=>{if(!(W().ENABLE_WEATHER||!1))return null;const[t,i]=vn(),[a,p]=j.useState(!1),w=se("w"),E=j.useRef(),S=C.useCallback(()=>p(g=>!g),[]),c=C.useCallback(()=>p(!0),[]),d=C.useMemo(()=>kn(t),[t]),h=C.useMemo(()=>[3,6,9,12],[]),y=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return j.useEffect(()=>{if(!a||!E.current||!t||!t.hourly||d.length===0)return;const g={timezone:"Europe/Berlin"},f=document.createElement("div");return E.current.textContent="",E.current.appendChild(f),Ht(f,d,g),()=>{E.current&&(E.current.textContent="")}},[a,d]),j.useEffect(()=>{w&&S()},[w]),!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?i!==!1?o.jsx(Ve,{children:o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),o.jsx("div",{children:i instanceof Error?i.message:String(i)})]})}):"":o.jsxs(Ve,{children:[o.jsxs("div",{onClick:c,children:[o.jsxs("div",{className:"headline",children:[o.jsx(Ne,{icon:t.currently.icon}),o.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),o.jsx("div",{className:"forecast",children:h.map((g,f)=>o.jsx(Be,{data:t.hourly.data[g]},f))})]}),o.jsx(ce,{visible:a,onClick:S,children:o.jsxs("div",{className:"full-weather",children:[i!==!1&&o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:i instanceof Error?i.message:String(i)})]}),o.jsxs("div",{className:"detail-header",children:[o.jsx("div",{children:o.jsxs("div",{className:"headline",children:[o.jsx(Ne,{icon:t.daily.data[0].icon}),o.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",o.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),o.jsx("h3",{children:we[t.daily.data[0].icon].label})]}),o.jsx("div",{className:"values",children:o.jsxs("div",{className:"table",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Regen:"})," ",t.daily.data[0].precipProbability*100," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),o.jsxs("div",{children:[o.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),o.jsx("h3",{children:"Die nächsten 24 Stunden"}),o.jsx("div",{ref:E}),o.jsx("h3",{children:"Die nächste Woche"}),o.jsx("div",{className:"forecast",children:y.map((g,f)=>o.jsx(Be,{data:t.daily.data[g],daily:!0},f))}),o.jsxs("div",{className:"info",children:["Aktualisiert ",o.jsx(ut,{date:B.fromSeconds(t.currently.time).toJSDate(),formatter:On})]})]})})]})},In=C.memo(Dn),Mn="AK Wandsbek",$n="Hamburg",Pn="Master:62016",Wn="STATION",Vn={x:10.091341,y:53.568702},Bn={name:Mn,city:$n,id:Pn,type:Wn,coordinate:Vn},Ee={departureList:"departureList",checkName:"checkName"},Hn=async(e,n,t)=>M({method:"post",url:`./gti/public/${e}`,data:n,signal:t,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}),He=(e,n)=>e.realtimeOffset-n.realtimeOffset,Yn=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(He),to:n.filter(t=>t.directionId===6).slice(0,3).sort(He)}},Gn=e=>{const t=W().ENABLE_HVV||!1,[i,a]=j.useState([]),[p,w]=j.useState(!1),E=Oe(6e4),S=t;return j.useEffect(()=>{if(!S)return;if(!(e in Ee)){N.warn(e,"not supported by HVV connector");return}let c=!0;const d=new AbortController;let h={version:51};switch(e){case Ee.checkName:h={...h,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case Ee.departureList:const y=B.now();h={...h,station:Bn,time:{date:y.toFormat("dd.MM.yyyy"),time:y.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:h=void 0}return Hn(e,h,d.signal).then(y=>{c&&(a(Yn(y.data)),w(!1))}).catch(y=>{c&&!d.signal.aborted&&w(F(y))}),()=>{c=!1,d.abort()}},[e,E,S,t]),[i,p]},Un=k.div`
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
`,Ye=C.memo(({line:e,direction:n,realtimeOffset:t})=>o.jsxs("div",{className:"departure",children:[o.jsx("div",{children:o.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),o.jsx("div",{children:t===0?"Jetzt":o.jsxs(o.Fragment,{children:["in ",t," '"]})})]})),Fn=()=>{if(!(W().ENABLE_HVV||!1))return null;const[t,i]=Gn(Ee.departureList);return o.jsx(Un,{children:i!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:i instanceof Error?i.message:String(i)})]}):o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((a,p)=>o.jsx(Ye,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},p)),o.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((a,p)=>o.jsx(Ye,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},p))]})})},zn=C.memo(Fn),Kn=()=>{const e=W(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const i=e.ENTITY_CHARGING_STATE||"",a=e.ENTITY_STATE_OF_CHARGE||"",p=e.HASS_ACCESS_TOKEN||"",w=e.SUPERVISOR_TOKEN||"",[E,S]=j.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[c,d]=j.useState(!1),h=n&&(t||i||a);return j.useEffect(()=>{if(!h)return;(async()=>{const g=[];t&&g.push(M(P(`/api/states/${t}`,e)).then(s=>({type:"preclimateStatus",value:s.data.state==="on"})).catch(s=>({type:"preclimateStatus",error:F(s)}))),i&&g.push(M(P(`/api/states/${i}`,e)).then(s=>({type:"chargingState",value:s.data.state==="on"})).catch(s=>({type:"chargingState",error:F(s)}))),a&&g.push(M(P(`/api/states/${a}`,e)).then(s=>({type:"stateOfCharge",value:parseFloat(s.data.state)||0})).catch(s=>({type:"stateOfCharge",error:F(s)})));const f=await Promise.all(g);let u=!1;f.forEach(s=>{s.error?u=s.error:S(l=>({...l,[s.type]:s.value}))}),d(u||!1)})()},[h,n,t,i,a]),j.useEffect(()=>{let y=null,g=[],f=!0,u=null,s=0;const l=5;let r=!1,m=null,T=null;async function x(){if(!h||!f||r)return;if(y){try{m&&(y.removeEventListener("ready",m),m=null),T&&(y.removeEventListener("disconnected",T),T=null),g.forEach(_=>{_&&_()}),g=[],y.close()}catch{}y=null}r=!0;const A=de(e),b=w||p||"";if(!b){r=!1;return}let L;try{L=ae(A,b),f&&d(!1)}catch(_){f&&(N.error("Failed to create WebSocket auth:",_),d(_ instanceof Error?_.message:String(_))),r=!1;return}try{y=await le({auth:L}),m=()=>{f&&(N.debug("WebSocket connection ready for EV entities"),s=0,d(!1))},y.addEventListener("ready",m),T=()=>{if(f&&!r){if(N.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),u&&(clearTimeout(u),u=null),s>=l){N.warn(`Max reconnection attempts (${l}) reached for EV entities, stopping reconnection`),f&&d("Verbindung verloren. Bitte Seite neu laden.");return}y=null,g=[],m=null,T=null;const v=Math.min(1e3*Math.pow(2,s),3e4);s++,u=setTimeout(()=>{f&&!r&&s<=l&&(N.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${s}/${l})`),x())},v)}},y.addEventListener("disconnected",T);const _=v=>{if(f){const I=v.variables.trigger.to_state.entity_id,O=v.variables.trigger.to_state.state;S(V=>{const $={...V};return I===t?$.preclimateStatus=O==="on":I===i?$.chargingState=O==="on":I===a&&($.stateOfCharge=parseFloat(O)||0),$})}},R=[];t&&R.push(t),i&&R.push(i),a&&R.push(a);for(const v of R){const I=await y.subscribeMessage(_,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:v}});g.push(I)}r=!1}catch(_){if(r=!1,f)if(N.error("Failed to setup WebSocket connection:",_),d(_ instanceof Error?_.message:String(_)),s<l){const R=Math.min(1e3*Math.pow(2,s),3e4);s++,u=setTimeout(()=>{f&&!r&&s<=l&&x()},R)}else N.warn(`Max reconnection attempts (${l}) reached for EV entities, stopping reconnection`),f&&d("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return x(),()=>{if(f=!1,r=!1,u&&(clearTimeout(u),u=null),y)try{m&&y.removeEventListener("ready",m),T&&y.removeEventListener("disconnected",T)}catch{}if(g.forEach(A=>{if(A)try{A()}catch{}}),g=[],y){try{y.close()}catch{}y=null}}},[h,n,t,i,a,p,w]),[E,c]},qn=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&M.post(P("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to start preclimate:",t)})},Xn=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&M.post(P("/api/services/button/press",e),{entity_id:n}).catch(t=>{N.error("Failed to stop preclimate:",t)})},Jn=k.div`
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
`,Qn=(e,n)=>n?Nt:e>=80?Rt:e>=50?Ct:e>=20?vt:Ot,Zn=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",eo=()=>{const e=W();if(!(e.ENABLE_EV||!1))return null;const[t,i]=Kn(),{preclimateStatus:a,chargingState:p,stateOfCharge:w}=t,[E,S]=C.useState(!1),[c,d]=C.useState(null),[h,y]=C.useState(!1),[g,f]=C.useState(!1),[u,s]=C.useState(0),l=C.useRef(null),r=C.useRef(null),m=C.useRef(a),T=C.useRef(null);C.useEffect(()=>{m.current!==a&&(E&&T.current!==null&&a===(c==="start")&&(s(c==="start"?360:0),f(!0),setTimeout(()=>{S(!1),d(null),f(!1),s(0),T.current=null,y(!1)},300),l.current&&(clearTimeout(l.current),l.current=null)),m.current=a)},[a,E,c]),C.useEffect(()=>{if(!E||g){r.current&&(cancelAnimationFrame(r.current),r.current=null);return}const I=T.current||Date.now(),O=1e4,V=c==="stop",$=()=>{const Y=Date.now()-I,U=Math.min(Y/O,1);s(V?360*(1-U):360*U),U<1&&!g&&(r.current=requestAnimationFrame($))};return r.current=requestAnimationFrame($),()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null)}},[E,g,c]),C.useEffect(()=>()=>{l.current&&clearTimeout(l.current),r.current&&cancelAnimationFrame(r.current)},[]);const x=C.useCallback(()=>{if(i!==!1||E)return;const I=!a,O=I?"start":"stop";S(!0),d(O),f(!1),y(!1),s(0),T.current=Date.now(),m.current=a,I?qn(e):Xn(e),l.current=setTimeout(()=>{E&&(y(!0),setTimeout(()=>{S(!1),d(null),f(!1),s(0),y(!1),T.current=null},500))},15e3)},[a,i,E]),A=Qn(w||0,p),b=Zn(w||0),L=Math.round(w||0),_=E?c==="start":a,R=c==="start"?"#17e146":"#f85a5a",v=c==="start"?"clockwise":"counterclockwise";return o.jsxs(Jn,{className:H({disabled:i!==!1}),children:[o.jsxs("h2",{children:["Auto",i!==!1?o.jsxs("div",{className:"battery-info",children:[o.jsx(G,{path:Ce,size:"1.2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsxs("div",{className:"battery-info",children:[o.jsxs("span",{className:"charge-percentage",children:[L,"%"]}),o.jsx(G,{path:A,size:"1.2rem",color:b})]})]}),i===!1&&o.jsxs("div",{className:"preclimate-button-wrapper",children:[E&&o.jsx("div",{className:H("progress-ring",v,{complete:g}),style:{"--progress-color":R,"--progress-angle":`${u}deg`,"--progress-gradient":c==="stop"?`conic-gradient(from -90deg, ${R} 0deg, ${R} ${u}deg, transparent ${u}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${R} 0deg, ${R} ${u}deg, transparent ${u}deg, transparent 360deg)`}}),o.jsxs("button",{className:H("preclimate-button",{spinning:_&&!E,shaking:h}),onClick:x,disabled:i!==!1||E,children:[o.jsx(G,{path:jt,size:"2rem",color:_?"#ff9800":"#ffffff"}),o.jsx("span",{children:_?"Stop":"Start"})]})]})]})},to=C.memo(eo),no=()=>{const e=W(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",i=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[p,w]=j.useState("closed"),[E,S]=j.useState(!1),c=n&&t,d=t?P(`/api/states/${t}`,e):null;return j.useEffect(()=>{if(!c||!d)return;let h=!0;const y=new AbortController;return M(d,{signal:y.signal}).then(g=>{h&&(w(g.data.state),S(!1))}).catch(g=>{h&&!y.signal.aborted&&S(F(g))}),()=>{h=!1,y.abort()}},[c,d,n,t]),j.useEffect(()=>{let h=null,y=null,g=!0,f=null,u=0;const s=5;let l=!1,r=null,m=null;async function T(){if(!c||!t||!g||l)return;if(h){try{r&&(h.removeEventListener("ready",r),r=null),m&&(h.removeEventListener("disconnected",m),m=null),y&&(y(),y=null),h.close()}catch{}h=null}l=!0;const x=de(e),A=a||i||"";if(!A){l=!1;return}let b;try{b=ae(x,A),g&&S(!1)}catch(L){g&&(N.error("Failed to create WebSocket auth:",L),S(L instanceof Error?L.message:String(L))),l=!1;return}try{h=await le({auth:b}),r=()=>{g&&(N.debug("WebSocket connection ready for garage door"),u=0,S(!1))},h.addEventListener("ready",r),m=()=>{if(g&&!l){if(N.debug("WebSocket disconnected for garage door, will attempt to reconnect"),f&&(clearTimeout(f),f=null),u>=s){N.warn(`Max reconnection attempts (${s}) reached for garage door, stopping reconnection`),g&&S("Verbindung verloren. Bitte Seite neu laden.");return}h=null,y=null,r=null,m=null;const _=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!l&&u<=s&&(N.debug(`Attempting to reconnect WebSocket for garage door (attempt ${u}/${s})`),T())},_)}},h.addEventListener("disconnected",m);const L=_=>{g&&w(_.variables.trigger.to_state.state)};y=await h.subscribeMessage(L,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),l=!1}catch(L){if(l=!1,g)if(N.error("Failed to setup WebSocket connection:",L),S(L instanceof Error?L.message:String(L)),u<s){const _=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{g&&!l&&u<=s&&T()},_)}else N.warn(`Max reconnection attempts (${s}) reached for garage door, stopping reconnection`),g&&S("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return T(),()=>{if(g=!1,l=!1,f&&(clearTimeout(f),f=null),h)try{r&&h.removeEventListener("ready",r),m&&h.removeEventListener("disconnected",m)}catch{}if(y){try{y()}catch{}y=null}if(h){try{h.close()}catch{}h=null}}},[c]),[p,E]},oo=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const i=setTimeout(()=>e(!1),3e3);M.post(P("/api/services/cover/toggle",n),{entity_id:t}).catch(a=>{N.error("Failed to toggle garage door:",a)}).finally(()=>{clearTimeout(i),e(!1)})},io=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const i=setTimeout(()=>e(!1),3e3);M.post(P("/api/services/cover/open_cover",n),{entity_id:t}).catch(a=>{N.error("Failed to open garage door:",a)}).finally(()=>{clearTimeout(i),e(!1)})},ro=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const i=setTimeout(()=>e(!1),3e3);M.post(P("/api/services/cover/close_cover",n),{entity_id:t}).catch(a=>{N.error("Failed to close garage door:",a)}).finally(()=>{clearTimeout(i),e(!1)})},so=k.div`
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
`,et=k.div`
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
`,Re=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:$t},open:{label:"Offen",icon:Mt},closed:{label:"Geschlossen",icon:It},opening:{label:"Öffnet",icon:Dt},closing:{label:"Schließt",icon:kt}};return n[e]||N.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:Pt}},ao=({garageDoor:e,animate:n=!1})=>o.jsxs(et,{className:H({animate:n}),children:[o.jsx(G,{path:Re(e).icon,size:"2rem",color:"#ffffff"}),o.jsx("span",{children:Re(e).label})]}),lo=e=>mt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return Re(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),co=()=>{const e=W();if(!(e.ENABLE_GARAGE||!1))return null;const[t,i]=no(),[a,p]=j.useState(void 0),[w,E]=j.useState(!1),[S,c]=j.useState(!1);j.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!a){const f=new Promise(u=>{p({resolve:u})});lo(f)}}else a&&(a.resolve(t),p(void 0))},[t]);const d=se("g");j.useEffect(()=>{d&&i===!1&&oo(E,e)},[d,i,e]);const h=C.useCallback(g=>{if(i===!1)switch(c(!1),g){case"open":io(E,e);break;case"close":ro(E,e);break}},[E,i,e]),y=C.useCallback(()=>{i===!1&&c(!0)},[i]);return o.jsxs(so,{className:H({disabled:i!==!1}),children:[o.jsx("h2",{children:"Garage"}),o.jsx("div",{className:"status",onClick:y,children:i!==!1?o.jsxs(et,{children:[o.jsx(G,{path:Ce,size:"2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsx(ao,{garageDoor:t,animate:w})}),o.jsx(ce,{visible:S&&i===!1,onClick:()=>c(!1),children:o.jsxs("div",{className:"controls",children:[o.jsx("h2",{children:"Garagentor"}),o.jsx("div",{onClick:()=>h("open"),children:"Öffnen"}),o.jsx("div",{onClick:()=>h("close"),children:"Schließen"})]})})]})},fo=C.memo(co),uo=(e,n)=>e?P(`/api/states/${e}`,n):null,q={done:{label:"Fertig",animate:!1,icon:Vt},off:{label:"Aus",animate:!1,icon:Wt},standby:{label:"Standby",animate:!1,icon:ke},running:{label:"Läuft …",animate:!0,icon:ke}},ho={off:0,standby:2,running:16,done:256},po=()=>{const e=W();e.ENABLE_LAUNDRY;const n=e.LAUNDRY_MACHINES||[];e.HASS_ACCESS_TOKEN,e.SUPERVISOR_TOKEN;const i=(Array.isArray(n)?n:[]).map((h,y)=>{const[g,f]=mo(h.entity_id,e);return{state:g,error:f,name:h.name}}),[a,p]=j.useState(q.off),[w,E]=j.useState(!1),S=i.map(h=>h.state),c=i.map(h=>h.error);j.useEffect(()=>{const h=c.some(y=>y!==!1);E(h&&c.find(y=>y!==!1)||!1)},[c]),j.useEffect(()=>{const h=S.reduce((y,g)=>y+(ho[g]||0),0);h===0?p(q.off):h<16?p(q.standby):h<256?p(q.running):h%256===0?p(q.done):h%256%16===0?p(q.running):h%256%2===0?p(q.done):p(q.running)},[S]);const d=i.map(h=>({label:h.name,state:h.state}));return[a,d,w]},mo=(e,n)=>{const[t,i]=j.useState("off"),[a,p]=j.useState(!1),E=(n.ENABLE_LAUNDRY||!1)&&e,S=uo(e,n);return j.useEffect(()=>{if(!E||!S)return;let c=!0;const d=new AbortController;return M(S,{signal:d.signal}).then(h=>{c&&(i(h.data.state),p(!1))}).catch(h=>{c&&!d.signal.aborted&&p(F(h))}),()=>{c=!1,d.abort()}},[e,E,S]),j.useEffect(()=>{let c=null,d=null,h=!0,y=null,g=0;const f=5;let u=!1,s=null,l=null;async function r(){if(!E||!e||!h||u)return;if(c){try{s&&(c.removeEventListener("ready",s),s=null),l&&(c.removeEventListener("disconnected",l),l=null),d&&(d(),d=null),c.close()}catch{}c=null}u=!0;const m=de(n),T=n.HASS_ACCESS_TOKEN||"",A=n.SUPERVISOR_TOKEN||""||T||"";if(!A){u=!1;return}try{const b=ae(m,A);c=await le({auth:b}),s=()=>{h&&(N.debug(`WebSocket connection ready for ${e}`),g=0,p(!1))},c.addEventListener("ready",s),l=()=>{if(h&&!u){if(N.debug(`WebSocket disconnected for ${e}, will attempt to reconnect`),y&&(clearTimeout(y),y=null),g>=f){N.warn(`Max reconnection attempts (${f}) reached for ${e}, stopping reconnection`),h&&p("Verbindung verloren. Bitte Seite neu laden.");return}c=null,d=null,s=null,l=null;const _=Math.min(1e3*Math.pow(2,g),3e4);g++,y=setTimeout(()=>{h&&!u&&g<=f&&(N.debug(`Attempting to reconnect WebSocket for ${e} (attempt ${g}/${f})`),r())},_)}},c.addEventListener("disconnected",l);const L=_=>{h&&i(_.variables.trigger.to_state.state)};d=await c.subscribeMessage(L,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),u=!1}catch(b){if(u=!1,h)if(N.error(`Failed to setup WebSocket connection for ${e}:`,b),p(b instanceof Error?b.message:String(b)),g<f){const L=Math.min(1e3*Math.pow(2,g),3e4);g++,y=setTimeout(()=>{h&&!u&&g<=f&&r()},L)}else N.warn(`Max reconnection attempts (${f}) reached for ${e}, stopping reconnection`),h&&p("Verbindung fehlgeschlagen. Bitte Seite neu laden.")}}return r(),()=>{if(h=!1,u=!1,y&&(clearTimeout(y),y=null),c)try{s&&c.removeEventListener("ready",s),l&&c.removeEventListener("disconnected",l)}catch{}if(d){try{d()}catch{}d=null}if(c){try{c.close()}catch{}c=null}}},[e,E]),[t,a]},go=k.div`
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
`,xo=()=>{if(!(W().ENABLE_LAUNDRY||!1))return null;const[t,i,a]=po(),[p,w]=j.useState(!1),E=C.useCallback(()=>{a===!1&&w(!0)},[a]),S=C.useCallback(()=>w(!1),[]);return o.jsxs(go,{className:H({disabled:a!==!1}),children:[o.jsx("h2",{children:"Wäsche"}),o.jsx("div",{className:"status",onClick:E,children:a!==!1?o.jsxs(o.Fragment,{children:[o.jsx(G,{path:Ce,size:"2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:H({animate:t.animate}),children:o.jsx(G,{path:t.icon,size:"2rem",color:"#ffffff"})}),o.jsx("span",{children:t.label})]})}),o.jsx(ce,{visible:p&&a===!1,onClick:S,children:o.jsxs("div",{className:"states",children:[o.jsx("h2",{children:"Wäsche"}),i.map((c,d)=>o.jsxs("div",{children:[o.jsx("div",{className:"subtitle",children:c.label}),o.jsx("div",{className:H({animate:q[c.state].animate}),children:o.jsx(G,{path:q[c.state].icon,size:2})}),o.jsx("div",{children:q[c.state].label})]},d))]})})]})},Eo=C.memo(xo),yo=k.div`
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
`,wo=()=>o.jsxs(yo,{children:[o.jsxs("div",{className:"top-content",children:[o.jsx(In,{}),o.jsx(zn,{}),o.jsx(to,{})]}),o.jsxs("div",{className:"two-cols",children:[o.jsx(fo,{}),o.jsx(Eo,{})]})]}),bo=C.memo(wo),Ge=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],Ao=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],ye={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},So={landscape:"L",portrait:"P",wide:"W"},To=k.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Lo=k.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,_o=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Z=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ee=k.label`
  font-size: 0.9rem;
  color: #cccccc;
`,Ue=k.select`
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
`,Fe=k.input`
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
`,jo=k.button`
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
`,ze=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,No=k.button`
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
`,Ro=k.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Co=k.div`
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
`,vo=k.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Oo=k.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,ko=k.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,he=k.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pe=k.div`
  font-size: 0.85rem;
  color: #cccccc;
`,me=k.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Do=k.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Io=k.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;k.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;const _e=k.button`
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
`,Ke=()=>{const[e,n]=C.useState(1920),[t,i]=C.useState(1080),[a,p]=C.useState("Full HD"),[w,E]=C.useState(""),[S,c]=C.useState(""),[d,h]=C.useState([{orientation:"landscape"}]),[y,g]=C.useState(null),f=C.useMemo(()=>Ze(d,e,t),[d,e,t]),u=x=>{const A=Ge.find(b=>b.name===x);A&&A.width&&A.height?(n(A.width),i(A.height),p(x),E(""),c("")):x==="Custom"&&p("Custom")},s=()=>{const x=parseInt(w),A=parseInt(S);x>0&&A>0&&(n(x),i(A))},l=x=>{h(x.videos),g(x.name)},r=x=>{const A=[];for(let b=0;b<x;b++)A.push(d[b]||{orientation:"landscape"});h(A),g(null)},m=(x,A)=>{const b=[...d];b[x]={orientation:A},h(b),g(null)},T=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return o.jsxs(To,{children:[o.jsx(Lo,{children:"Video Tiling Algorithm Demo"}),o.jsxs(_o,{children:[o.jsxs(Z,{children:[o.jsx(ee,{children:"Screen Size Preset"}),o.jsx(Ue,{value:a,onChange:x=>u(x.target.value),children:Ge.map(x=>o.jsx("option",{value:x.name,children:x.name},x.name))})]}),a==="Custom"&&o.jsxs(o.Fragment,{children:[o.jsxs(Z,{children:[o.jsx(ee,{children:"Custom Width"}),o.jsx(Fe,{type:"number",value:w,onChange:x=>E(x.target.value),placeholder:"Width",min:"100"})]}),o.jsxs(Z,{children:[o.jsx(ee,{children:"Custom Height"}),o.jsx(Fe,{type:"number",value:S,onChange:x=>c(x.target.value),placeholder:"Height",min:"100"})]}),o.jsxs(Z,{children:[o.jsx(ee,{children:" "}),o.jsx(jo,{onClick:s,children:"Apply Custom Size"})]})]}),o.jsxs(Z,{children:[o.jsx(ee,{children:"Number of Videos"}),o.jsxs(Ue,{value:d.length,onChange:x=>r(parseInt(x.target.value)),children:[o.jsx("option",{value:"1",children:"1 Video"}),o.jsx("option",{value:"2",children:"2 Videos"}),o.jsx("option",{value:"3",children:"3 Videos"}),o.jsx("option",{value:"4",children:"4 Videos"})]})]}),d.map((x,A)=>o.jsxs(Z,{children:[o.jsxs(ee,{children:["Video ",A+1," Orientation"]}),o.jsxs(ze,{children:[o.jsx(_e,{active:x.orientation==="landscape",orientation:"landscape",onClick:()=>m(A,"landscape"),children:"Landscape"}),o.jsx(_e,{active:x.orientation==="portrait",orientation:"portrait",onClick:()=>m(A,"portrait"),children:"Portrait"}),o.jsx(_e,{active:x.orientation==="wide",orientation:"wide",onClick:()=>m(A,"wide"),children:"Wide"})]})]},A))]}),o.jsxs(Do,{children:[o.jsx(Io,{children:"Test Scenarios"}),o.jsx(ze,{children:Ao.map(x=>o.jsx(No,{active:y===x.name,onClick:()=>l(x),children:x.name},x.name))})]}),o.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:o.jsx(Ro,{style:{width:`${e*T}px`,height:`${t*T}px`},children:f.videos.map((x,A)=>o.jsxs(Co,{orientation:x.orientation,style:{left:`${x.x*T}px`,top:`${x.y*T}px`,width:`${x.width*T}px`,height:`${x.height*T}px`},children:[o.jsxs(vo,{children:[So[x.orientation]," ",A+1]}),o.jsxs(Oo,{children:[Math.round(x.width)," × ",Math.round(x.height)]})]},A))})}),o.jsxs(ko,{children:[o.jsxs(he,{children:[o.jsx(pe,{children:"Canvas Size"}),o.jsxs(me,{children:[e," × ",t]})]}),o.jsxs(he,{children:[o.jsx(pe,{children:"Total Area Used"}),o.jsxs(me,{children:[Math.round(f.totalArea).toLocaleString()," px²"]})]}),o.jsxs(he,{children:[o.jsx(pe,{children:"Efficiency"}),o.jsxs(me,{children:[f.efficiency.toFixed(2),"%"]})]}),o.jsxs(he,{children:[o.jsx(pe,{children:"Display Scale"}),o.jsxs(me,{children:[(T*100).toFixed(1),"%"]})]})]})]})},Mo=()=>{function e(t,i){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(i))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[p,w]=i.split(":").map(Number),E=new Date;let S=new Date(E.getFullYear(),E.getMonth(),E.getDate());S.setHours(p,w,0,0),S<=E&&S.setDate(S.getDate()+1);const c=S.getTime()-E.getTime();return N.log("Reloading page at",i,"in",Math.floor(c/1e3/60),"minutes"),setTimeout(t,c)}const n=()=>{N.log("Timeout reached! "),window.location.reload(!0)};j.useLayoutEffect(()=>{const t=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{t.forEach(i=>{i&&clearTimeout(i)})}},[])},$o=k.div`
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
`;class be extends j.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const i=n?.toString()||"Unknown error",a=n?.stack||"",p=t?.componentStack||"";N.error(`ErrorBoundary caught an error: ${i}`,{errorName:n?.name,errorMessage:i,errorStack:a,componentStack:p})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?o.jsxs($o,{children:[o.jsx("h2",{children:"Something went wrong"}),o.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,o.jsxs("div",{children:[o.jsx("button",{onClick:this.handleReset,children:"Try Again"}),o.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Po=gt`
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
`,Wo=k.div`
  padding: 0 12px;
  min-width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

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
`;function Vo(){return Mo(),o.jsxs(Wo,{children:[o.jsx(Po,{}),o.jsxs("div",{className:"main",children:[o.jsx(be,{children:o.jsx(Cn,{})}),o.jsx(be,{children:o.jsx(bo,{})})]}),o.jsx(Et,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Bo(){return o.jsx(be,{children:o.jsxs(xt,{children:[o.jsx(Se,{path:"/demo",element:o.jsx(Ke,{})}),o.jsx(Se,{path:"/tiling-demo",element:o.jsx(Ke,{})}),o.jsx(Se,{path:"*",element:o.jsx(Vo,{})})]})})}const Ho=yt.createRoot(document.getElementById("root"));Ho.render(o.jsx(j.StrictMode,{children:o.jsx(be,{children:o.jsx(zt,{children:o.jsx(wt,{children:o.jsx(Bo,{})})})})}));
