import{d as k,R as _,j as o,I as G,r as C,l as Ue,P as Je,W as Qe,b as Ze,e as et,f as tt,h as ot,i as nt,k as it,m as rt,n as st,o as at,T as ct,p as lt,s as dt,y as ft,q as ut,t as ht,u as we,L as pt,v as mt,B as gt}from"./react-vendor-BitJRyew.js";import{D as B}from"./date-vendor-BDx6lZXm.js";import{f as Y}from"./vendor-CeaMKy47.js";import{m as xt,a as Et,b as yt,c as wt,d as At,e as bt,f as Le,g as Tt,h as St,i as _t,j as Lt,k as Rt,l as Nt,n as jt,o as Ct,p as Ot,q as kt,r as Dt,s as vt,t as Ce,u as It,v as Pt}from"./ui-vendor-C7t39j5V.js";import{a as I,q as Wt}from"./utils-vendor-Cs1iS-Fd.js";import{c as ae,a as ce}from"./ha-vendor-CoU0AojH.js";import{t as Mt}from"./chart-vendor-ClWajKr-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const g of u.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();const $t=k.div`
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
`,le=({visible:e,children:i,onClick:t,onClose:n,fullsize:a=!1})=>{const u=n||t,g=p=>{p.stopPropagation(),p.preventDefault(),u()};return _.useEffect(()=>{if(e){const p=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${p}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,p)}}},[e]),e?o.jsxs($t,{onClick:t,children:[o.jsx("div",{className:"close",onClick:g,children:o.jsx(G,{path:xt,size:2})}),o.jsx("div",{className:Y("content",{fullsize:a}),onClick:p=>p.stopPropagation(),children:i})]}):null},R={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},Vt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Bt=()=>{const e=(i,t=void 0)=>{const n=Vt[`VITE_${i}`];return n!==void 0?n:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),SUPERVISOR_TOKEN:e("SUPERVISOR_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_API_KEY:e("WEATHER_API_KEY",""),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),GEOFOX_SECRET:e("GEOFOX_SECRET",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const i=e("LAUNDRY_MACHINES","[]");try{return typeof i=="string"?JSON.parse(i):i}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const i=e("DOORBELL_CAMERAS","[]");try{return typeof i=="string"?JSON.parse(i):i}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const i=e("CALENDARS","[]");try{return typeof i=="string"?JSON.parse(i):i}catch{return[]}})()}},ze=C.createContext(null),Yt=({children:e})=>{const[i,t]=C.useState(Bt),[n,a]=C.useState(!0);return C.useEffect(()=>{(async()=>{try{const p=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`,b=await I.get(p,{timeout:5e3});b.data&&typeof b.data=="object"&&(t(b.data),R.info("Configuration loaded from API endpoint",{enabledFeatures:Object.keys(b.data).filter(l=>l.startsWith("ENABLE_")&&b.data[l]).map(l=>l.replace("ENABLE_",""))}))}catch(g){R.debug("Failed to load config from API, using defaults:",g.message)}finally{a(!1)}})()},[]),C.useEffect(()=>{const u=i.HASS_ACCESS_TOKEN||"";u&&typeof u=="string"&&u.trim()!==""&&u!=="undefined"&&u!=="null"?(I.defaults.headers.common.Authorization=`Bearer ${u}`,R.debug("Axios Authorization header set from config")):(delete I.defaults.headers.common.Authorization,R.debug("Axios Authorization header removed (add-on mode or no token)"))},[i.HASS_ACCESS_TOKEN]),o.jsx(ze.Provider,{value:{config:i,loading:n},children:e})},V=()=>{const e=C.useContext(ze);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config};let re=0,pe=0,Z=0;const ie=[],Ke=e=>{const i={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(i.status=e.response.status,i.responseData=e.response.data,i.url=e.config?.url||e.request?.responseURL||"Unknown URL",i.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(i.isNetworkError=!0,i.url=e.config?.url||"Unknown URL",i.message="Network error: No response received from server",e.request.readyState!==void 0&&(i.readyState=e.request.readyState),e.request.status!==void 0&&(i.requestStatus=e.request.status)):(i.message=e.message||"Request setup error",i.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(i.isTimeoutError=!0,i.message="Request timeout: The request took too long to complete"),e.config&&(i.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),i},Ht=(e,i="")=>{const t=Ke(e);Z++,re++,ie.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ie.length>10&&ie.shift();const n=[];return i&&n.push(`[${i}]`),n.push("🔴 Axios API Error:"),n.push(`Message: ${t.message}`),t.url&&n.push(`URL: ${t.url}`),t.status&&n.push(`HTTP Status: ${t.status}`),t.code&&n.push(`Error Code: ${t.code}`),t.isNetworkError&&(n.push("Type: Network Error (no response received)"),t.readyState!==void 0&&n.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&n.push("Type: Timeout Error"),t.config&&(n.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),n.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&n.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&n.push("Response Data:",t.responseData),n.push(`Request Stats: ${pe} success, ${Z} errors (${re} total)`),Z>3&&ie.length>0&&n.push("Recent errors pattern:",ie.slice(-5)),R.error(...n),t},Ft=e=>{pe++,re++,(re%10===0||Z>0)&&R.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:re,stats:`${pe} success, ${Z} errors`}),Z>0&&re%10===0&&pe>Z&&(R.debug("Request pattern: Errors cleared, connection appears healthy"),Z=0,ie.length=0)},z=e=>{const i=Ke(e);return i.isNetworkError?"":i.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":i.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":i.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":i.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":i.status>=500?"Serverfehler: Bitte später erneut versuchen":i.message||"Ein Fehler ist aufgetreten"},Re=!1,W=(e,i=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG&&window.APP_CONFIG[e]!==void 0){const t=window.APP_CONFIG[e];return t==="undefined"||t==="null"?i:t??i}return i};W("HASS_HOST","");W("HASS_ACCESS_TOKEN","");I.interceptors.request.use(e=>{const i=Date.now();return e.metadata={requestId:i,startTime:Date.now()},typeof window<"u"&&(i%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,R.debug("Axios Defaults State:",{baseURL:I.defaults.baseURL,timeout:I.defaults.timeout,hasAuthHeader:!!I.defaults.headers?.common?.Authorization,authHeaderLength:I.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(I.defaults.headers?.common||{})})),e},e=>(R.error("Axios Request Setup Error:",e),Promise.reject(e)));I.interceptors.response.use(e=>(e.config&&Ft(e.config),e),e=>{const i=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(Ht(e,i),e.config?.metadata){const t=Date.now()-e.config.metadata.startTime;R.error("Request Duration:",`${t}ms`,"Request ID:",e.config.metadata.requestId)}return typeof window<"u"&&window.location&&R.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href}),Promise.reject(e)});const Gt=W("WEATHER_API_KEY"),Ut=W("WEATHER_LATITUDE"),zt=W("WEATHER_LONGITUDE"),Kt=W("GEOFOX_SECRET"),qt=W("GEOFOX_USER"),Xt=W("ENTITY_GARAGE_DOOR"),Jt=W("ENTITY_DOORBELL"),Qt=W("ENTITY_DOORBELL_BUTTON"),Zt=W("ENTITY_EVERYDAY_CALENDAR"),eo=W("ENTITY_PRECLIMATE_STATUS");W("ENTITY_PRECLIMATE_START");W("ENTITY_PRECLIMATE_STOP");const to=W("ENTITY_CHARGING_STATE"),oo=W("ENTITY_STATE_OF_CHARGE");W("SUPERVISOR_TOKEN");const ee=W("INGRESS_URL");(()=>{const e=W("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})();const Oe=(()=>{const e=W("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})();(()=>{const e=W("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})();const te=(e,i)=>{try{const t=W(e,void 0);if(t!==void 0){const n=t;return typeof n=="boolean"?n:typeof n=="string"?n==="true"||n==="1"||n==="yes":!!n}return!1}catch(t){return R.debug(`Error getting feature flag ${e}:`,t),!1}},K=e=>e!=null&&e!==""&&e!=="undefined"&&e!=="null";te("ENABLE_WEATHER",K(Gt)||K(Ut)&&K(zt));te("ENABLE_HVV",K(qt)&&K(Kt));te("ENABLE_GARAGE",K(Xt));te("ENABLE_LAUNDRY",Array.isArray(Oe)&&Oe.length>0);te("ENABLE_DOORBELL",K(Jt)||K(Qt));te("ENABLE_EVERYDAY_CALENDAR",K(Zt));te("ENABLE_EV",K(eo)||K(to)||K(oo));const M=e=>{const i=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){if(ee&&typeof ee=="string"&&ee.trim()!==""){const n=i.startsWith("/")?i.slice(1):i;return`${window.location.origin}${ee}${n}`}const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}${i}`}return i}},de=()=>{if(typeof window<"u"&&window.location){if(ee&&typeof ee=="string"&&ee.trim()!=="")return`${window.location.origin}${ee.replace(/\/$/,"")}`;const e=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${e}`}return""},no=()=>{const e=V(),i=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[n,a]=_.useState(null),[u,g]=_.useState(!1),p=i&&t,b=t?M(`/api/states/${t}`):null;return _.useEffect(()=>{!p||!b||I(b).then(l=>{l.data.attributes.store!==void 0?a(l.data.attributes.store):a([]),g(!1)}).catch(l=>{g(z(l)),a([])})},[p,b,i,t]),[n,u]},io=(e,i)=>{const t=i?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const n=M(`/api/states/${t}`);I.post(n,{state:new Date,attributes:{store:e}}).catch(a=>{R.error("Failed to store everyday calendar data:",a)})},ke=k.div` 

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
`,ro=({on:e,month:i,day:t})=>{const[n,a]=e,u=n.indexOf(`${i}-${t}`),g=u>-1,p=()=>{a(g?n.toSpliced(u,1):[...n,`${i}-${t}`])};return o.jsx("div",{className:Y("dot",{on:g}),onClick:()=>p()})},so=()=>{const e=V();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),n=[];for(let l=1;l<13;l++){const f=new Date(t,l,0).getDate();for(let E=1;E<=f;E++)n.push({month:l,day:E})}const a=Array.from({length:31},(l,f)=>f+1),u=Array.from({length:12},(l,f)=>f+1),g=_.useState(void 0),[p,b]=no();return _.useEffect(()=>{p!==null&&g[1](p)},[p]),_.useEffect(()=>{g[0]!==void 0&&io(g[0],e)},[g[0],e]),g[0]!==void 0?o.jsxs(ke,{children:[o.jsx("h2",{children:"Jeden Tag ein bißchen"}),b!==!1&&o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:b instanceof Error?b.message:String(b)})]}),o.jsxs("div",{className:"calendar",children:[a.map((l,f)=>o.jsx("div",{style:{gridArea:`${l+1} / 1 / ${l+1} / 1`},children:l},f)),u.map((l,f)=>o.jsx("div",{style:{gridArea:`1 / ${l+1} / 1 / ${l+1}`},children:l},f)),n.map((l,f)=>o.jsx("div",{style:{gridArea:`${l.day+1} / ${l.month+1} / ${l.day+1} / ${l.month+1}`},children:o.jsx(ro,{on:g,month:l.month,day:l.day})},f))]})]}):o.jsx(ke,{className:"loading",children:b!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:b instanceof Error?b.message:String(b)})]}):o.jsx(Ue,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},ao=k.div`
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
  }`,co=()=>{const[e,i]=_.useState(B.now()),[t,n]=_.useState(!1),a=C.useCallback(()=>n(!0),[]),u=C.useCallback(()=>n(!1),[]);return _.useEffect(()=>{const g=setInterval(()=>i(B.now()),1e3);return()=>clearInterval(g)},[]),o.jsxs(o.Fragment,{children:[o.jsxs(ao,{onClick:a,children:[e.toFormat("HH"),o.jsx("span",{children:":"}),e.toFormat("mm")]}),o.jsx(le,{visible:t,onClick:u,fullsize:!0,children:o.jsx(so,{})})]})},lo=C.memo(co),fo=()=>{const e=V(),i=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const n=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[u,g]=_.useState("off"),[p,b]=_.useState(!1),l=i&&t,f=t?M(`/api/states/${t}`):null;return _.useEffect(()=>{!l||!f||I(f).then(E=>{g(E.data.state),b(!1)}).catch(E=>{b(z(E))})},[l,f,i,t]),_.useEffect(()=>{let E=null,T=null,y=!0,h=null,m=0,s=!1;async function d(){if(!l||!t||s)return;if(E){try{T&&(T(),T=null),E.close()}catch(c){R.debug("Error closing existing WebSocket connection:",c)}E=null}s=!0;const r=de(),x=a||n||"";if(!x){s=!1;return}let A;try{A=ae(r,x),y&&b(!1)}catch(c){y&&(R.error("Failed to create WebSocket auth:",c),b(c instanceof Error?c.message:String(c))),s=!1;return}try{E=await ce({auth:A}),E.addEventListener("ready",()=>{y&&(R.debug("WebSocket connection ready for doorbell"),m=0,b(!1))}),E.addEventListener("disconnected",()=>{if(y&&!s){R.debug("WebSocket disconnected for doorbell, will attempt to reconnect"),h&&clearTimeout(h),E=null,T=null;const w=Math.min(1e3*Math.pow(2,m),3e4);m++,h=setTimeout(()=>{y&&!s&&(R.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${m})`),d())},w)}});const c=w=>{if(y){const S=w.variables.trigger.to_state.state;g(S)}};T=await E.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),s=!1}catch(c){if(s=!1,y){R.error("Failed to setup WebSocket connection:",c),R.error("WebSocket error details:",{message:c instanceof Error?c.message:String(c),code:c.code,name:c.name,wsUrl:A?.wsUrl,host:r,tokenLength:x?x.length:0}),c.code===2&&R.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),b(c instanceof Error?c.message:String(c));const w=Math.min(1e3*Math.pow(2,m),3e4);m++,h=setTimeout(()=>{y&&(R.debug(`Attempting to reconnect WebSocket for doorbell after error (attempt ${m})`),d())},w)}}}return d(),()=>{y=!1,h&&clearTimeout(h),T&&T(),E&&E.close()}},[l]),[u,p]},uo=()=>{ENTITY_DOORBELL_BUTTON&&I.post(M("/api/services/button/press"),{entity_id:ENTITY_DOORBELL_BUTTON}).catch(e=>{R.error("Failed to unlatch front door:",e)})},D={portrait:360/480,landscape:1920/1072,wide:770/216};function ho(e){const i={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&i.hasOwnProperty(t.orientation)&&i[t.orientation]++}),i}function qe(e,i,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const n=e.length,a=ho(e);return n===1?po(e[0],i,t):n===2?mo(a,e,i,t):n===3?go(a,e,i,t):n===4?xo(a,e,i,t):{videos:[],totalArea:0,efficiency:0}}function po(e,i,t){const n=D[e.orientation];let a,u;const g=i/t;return n>g?(a=i,u=i/n):(u=t,a=t*n),{videos:[{x:(i-a)/2,y:(t-u)/2,width:a,height:u,orientation:e.orientation}],totalArea:a*u,efficiency:a*u/(i*t)*100}}function mo(e,i,t,n){if(e.portrait>0)return Ne(e,i,t,n);const a=[];e.landscape>0&&a.push("landscape"),e.wide>0&&a.push("wide");const u=a[0]||i[0].orientation,g=a[1]||i[1].orientation,p=D[u],b=D[g];if(e.landscape===1&&e.wide===1){const h=D.landscape,m=D.wide,s=t,d=s/h,r=s/m,x=d+r;let A,c,w;if(x<=n)A=d,c=r,w=s;else{const P=n/x;A=d*P,c=r*P,w=c*m}const S=(t-w)/2,L=J(i,[{x:S,y:0,width:w,height:c,orientation:"wide"},{x:S,y:c,width:w,height:A,orientation:"landscape"}]),j=w*A+w*c,O=j/(t*n)*100;return{videos:L,totalArea:j,efficiency:O}}if(e.wide===2){const h=D.wide,m=t,s=m/h,d=s*2;let r;d<=n?r=s:r=n/2;const A=J(i,[{x:0,y:0,width:m,height:r,orientation:"wide"},{x:0,y:r,width:m,height:r,orientation:"wide"}]),c=m*r*2,w=c/(t*n)*100;return{videos:A,totalArea:c,efficiency:w}}const l=[()=>{const h=t,m=h/2,s=h/2,d=m/p,r=s/b;return Math.max(d,r)<=n?{positions:[{x:0,y:(n-d)/2,width:m,height:d,orientation:u},{x:m,y:(n-r)/2,width:s,height:r,orientation:g}],totalArea:m*d+s*r}:null},()=>{const h=n,m=h/2,s=h/2,d=m*p,r=s*b;return Math.max(d,r)<=t?{positions:[{x:(t-d)/2,y:0,width:d,height:m,orientation:u},{x:(t-r)/2,y:m,width:r,height:s,orientation:g}],totalArea:d*m+r*s}:null}];let f=null,E=0;for(const h of l){const m=h();m&&m.totalArea>E&&(E=m.totalArea,f=m)}if(!f){const h=t/2,m=t/2,s=Math.min(h/p,n),d=Math.min(m/b,n);f={positions:[{x:0,y:(n-s)/2,width:h,height:s,orientation:u},{x:h,y:(n-d)/2,width:m,height:d,orientation:g}],totalArea:h*s+m*d}}const T=J(i,f.positions),y=f.totalArea/(t*n)*100;return{videos:T,totalArea:f.totalArea,efficiency:y}}function Ne(e,i,t,n){const a=e.portrait,u=i.length-a;if((a===3||a===4)&&u===0){const y=D.portrait,h=t/a,m=h/y,s=m<n?(n-m)/2:0,d=Math.min(m,n),r=[];let x=0;for(let w=0;w<a;w++){const S=Math.min(h,d*y);r.push({x:w*h+(h-S)/2,y:s,width:S,height:d,orientation:"portrait"}),x+=S*d}const A=J(i,r),c=x/(t*n)*100;return{videos:A,totalArea:x,efficiency:c}}i.filter(y=>y.orientation==="portrait");const g=i.filter(y=>y.orientation!=="portrait"),p=a>0?Math.min(t*.4,t*.5):0,b=t-p,l=[];let f=0;if(a===2&&u===0){const y=D.portrait,h=t/2,m=h/y,s=n;let d,r;m<=s?(r=m,d=h):(r=s,d=s*y);const x=(n-r)/2;l.push({x:(h-d)/2,y:x,width:d,height:r,orientation:"portrait"}),l.push({x:h+(h-d)/2,y:x,width:d,height:r,orientation:"portrait"}),f=d*r*2}else if(a===1&&u===1){const y=D.portrait,h=g[0],m=D[h.orientation],s=y+m,d=t*(y/s),r=t*(m/s),x=d/y,A=r/m,c=Math.min(n,Math.min(x,A)),w=(n-c)/2;l.push({x:0,y:w,width:d,height:c,orientation:"portrait"}),l.push({x:d,y:w,width:r,height:c,orientation:h.orientation}),f=d*c+r*c}else if(a===1&&u===2&&e.landscape===1&&e.wide===1){const y=D.portrait,h=D.wide,m=D.landscape,s=n,d=n*y,r=n/(1/h+1/m),x=r/h,A=r/m,c=d+r;if(Math.abs(c-t)<.1)l.push({x:0,y:0,width:d,height:s,orientation:"portrait"}),f+=d*s,g.find(L=>L.orientation==="wide")&&(l.push({x:0+d,y:0,width:r,height:x,orientation:"wide"}),f+=r*x),g.find(L=>L.orientation==="landscape")&&(l.push({x:0+d,y:x,width:r,height:A,orientation:"landscape"}),f+=r*A);else{const w=t/c,S=d*w,N=S/y,L=r*w,j=n/N;let O=S*j,P=n,v=L*j,H=v/h,$=v/m,F=O+v;if(F>t){const Q=t/F;O=O*Q,P=O/y,v=v*Q,H=v/h,$=v/m,F=O+v,F>t&&(v=t-O,H=v/h,$=v/m)}const U=O+v;if(U>t){const Q=t/U;O=O*Q,P=O/y,v=v*Q,H=v/h,$=v/m}const q=0;l.push({x:q,y:0,width:O,height:P,orientation:"portrait"}),f+=O*P,g.find(Q=>Q.orientation==="wide")&&(l.push({x:q+O,y:0,width:v,height:H,orientation:"wide"}),f+=v*H),g.find(Q=>Q.orientation==="landscape")&&(l.push({x:q+O,y:H,width:v,height:$,orientation:"landscape"}),f+=v*$)}}else if(a===1&&u===3){const y=D.portrait,h=n,m=h*y,s=m,d=t-s;l.push({x:0,y:0,width:m,height:h,orientation:"portrait"}),f+=m*h;const r=n/3;for(let x=0;x<g.length;x++){const A=g[x],c=D[A.orientation],w=r,S=d;let N,L;S/c<=w?(N=S,L=N/c):(L=w,N=L*c);const j=x*r+(r-L)/2;l.push({x:s+(d-N)/2,y:j,width:N,height:L,orientation:A.orientation}),f+=N*L}}else if(a===2&&u===1){const y=D.portrait,h=g[0],m=D[h.orientation],s=n/2,d=s*y,r=t-d,x=n*m;let A,c;x<=r?(c=n,A=c*m):(A=r,c=A/m);const w=d,S=s,N=(n-c)/2,L=(n/2-S)/2,j=n/2+(n/2-S)/2;l.push({x:0,y:N,width:A,height:c,orientation:h.orientation}),f+=A*c,l.push({x:r,y:L,width:w,height:S,orientation:"portrait"}),f+=w*S,l.push({x:r,y:j,width:w,height:S,orientation:"portrait"}),f+=w*S}else if(a===1&&u===2){const y=D.portrait,h=n,m=h*y,s=m,d=t-s;l.push({x:0,y:0,width:m,height:h,orientation:"portrait"}),f+=m*h;const r=n/2;for(let x=0;x<g.length;x++){const A=g[x],c=D[A.orientation],w=r,S=d;let N,L;S/c<=w?(N=S,L=N/c):(L=w,N=L*c);const j=x*r+(r-L)/2;l.push({x:s+(d-N)/2,y:j,width:N,height:L,orientation:A.orientation}),f+=N*L}}else{const y=a;if(y>0){const h=n/y,m=D.portrait;for(let s=0;s<y;s++){const d=Math.min(h,p/m),r=d*m,x=s*h+(h-d)/2;l.push({x:(p-r)/2,y:x,width:r,height:d,orientation:"portrait"}),f+=r*d}}if(g.length>0){const h=n/g.length;for(let m=0;m<g.length;m++){const s=g[m],d=D[s.orientation],r=h,x=b;let A,c;x/d<=r?(A=x,c=A/d):(c=r,A=c*d);const w=m*h+(h-c)/2;l.push({x:p+(b-A)/2,y:w,width:A,height:c,orientation:s.orientation}),f+=A*c}}}const E=J(i,l),T=f/(t*n)*100;return{videos:E,totalArea:f,efficiency:T}}function J(e,i){const t=new Array(i.length),n=new Set,a=new Set;for(let p=0;p<i.length;p++){const b=i[p];for(let l=0;l<e.length;l++)if(!n.has(l)&&e[l].orientation===b.orientation){t[p]={...b,orientation:e[l].orientation},n.add(l),a.add(p);break}}const u=[];for(let p=0;p<i.length;p++)a.has(p)||u.push(p);let g=0;for(let p=0;p<e.length;p++)if(!n.has(p)&&g<u.length){const b=u[g];t[b]={...i[b],orientation:e[p].orientation},g++}return t}function go(e,i,t,n){if(e.portrait>0)return Ne(e,i,t,n);if(e.landscape===2&&e.wide===1){const s=D.landscape,d=D.wide,r=t,x=r/d,A=n-x,c=t/2,w=c/s;let S,N,L,j;if(x<=n&&w<=A)S=r,N=x,L=c,j=w;else{const U=n/(x+w),q=Math.min(1,U);N=x*q,S=N*d,j=w*q,L=j*s}const O=(t-S)/2,P=N+(A-j)/2,H=J(i,[{x:O,y:0,width:S,height:N,orientation:"wide"},{x:0,y:P,width:L,height:j,orientation:"landscape"},{x:L,y:P,width:L,height:j,orientation:"landscape"}]),$=S*N+L*j*2,F=$/(t*n)*100;return{videos:H,totalArea:$,efficiency:F}}if(e.landscape===1&&e.wide===2){const s=D.landscape,d=D.wide,r=t/2,x=r/d,c=n-x,w=c*s;let S,N,L,j;if(x<=n&&w<=t&&x+c<=n)S=r,N=x,L=w,j=c;else{const q=x+c,ye=n/q;S=r,N=x*ye,j=c*ye,L=j*s}const O=0,P=t/2,v=(t-L)/2,$=J(i,[{x:O,y:0,width:S,height:N,orientation:"wide"},{x:P,y:0,width:S,height:N,orientation:"wide"},{x:v,y:N,width:L,height:j,orientation:"landscape"}]),F=S*N*2+L*j,U=F/(t*n)*100;return{videos:$,totalArea:F,efficiency:U}}if(e.wide===3){const s=D.wide,d=t/2,r=d/s,A=n-r,c=A*s;let w,S,N,L;if(r<=n&&c<=t&&r+A<=n)w=d,S=r,N=c,L=A;else{const U=r+A,q=n/U;w=d,S=r*q,L=A*q,N=L*s,N>t&&(N=t,L=N/s)}const j=0,O=t/2,P=(t-N)/2,H=J(i,[{x:j,y:0,width:w,height:S,orientation:"wide"},{x:O,y:0,width:w,height:S,orientation:"wide"},{x:P,y:S,width:N,height:L,orientation:"wide"}]),$=w*S*2+N*L,F=$/(t*n)*100;return{videos:H,totalArea:$,efficiency:F}}if(e.landscape===3){const s=D.landscape,d=t/(s*1.5),r=Math.min(n,d),x=r/2,A=r,c=x*s,w=A*s,S=(n-r)/2,N=[{x:0,y:S,width:c,height:x,orientation:"landscape"},{x:0,y:S+x,width:c,height:x,orientation:"landscape"},{x:c,y:S,width:w,height:A,orientation:"landscape"}],L=J(i,N),j=c*r+w*r,O=j/(t*n)*100;return{videos:L,totalArea:j,efficiency:O}}const a=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)a.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)a.push("wide");const u=a[0]||i[0].orientation,g=a[1]||i[1].orientation,p=a[2]||i[2].orientation,b=D[u],l=D[g],f=D[p],E=[()=>{const s=t*.6,d=t*.4,r=s/b,x=d/l,A=d/f,c=x+A;return r<=n&&c<=n?{positions:[{x:0,y:(n-r)/2,width:s,height:r,orientation:u},{x:s,y:0,width:d,height:x,orientation:g},{x:s,y:x,width:d,height:A,orientation:p}],totalArea:s*r+d*x+d*A}:null},()=>{const s=n*.5,d=n*.5,r=s*b,x=s*l,A=d*f;return r+x<=t&&A<=t?{positions:[{x:0,y:0,width:r,height:s,orientation:u},{x:r,y:0,width:x,height:s,orientation:g},{x:(t-A)/2,y:s,width:A,height:d,orientation:p}],totalArea:r*s+x*s+A*d}:null},()=>{const s=t/3,d=s/b,r=s/l,x=s/f;return Math.max(d,r,x)<=n?{positions:[{x:0,y:(n-d)/2,width:s,height:d,orientation:u},{x:s,y:(n-r)/2,width:s,height:r,orientation:g},{x:s*2,y:(n-x)/2,width:s,height:x,orientation:p}],totalArea:s*d+s*r+s*x}:null}];let T=null,y=0;for(const s of E){const d=s();d&&d.totalArea>y&&(y=d.totalArea,T=d)}if(!T){const s=t/3,d=Math.min(s/b,n),r=Math.min(s/l,n),x=Math.min(s/f,n);T={positions:[{x:0,y:(n-d)/2,width:s,height:d,orientation:u},{x:s,y:(n-r)/2,width:s,height:r,orientation:g},{x:s*2,y:(n-x)/2,width:s,height:x,orientation:p}],totalArea:s*d+s*r+s*x}}const h=J(i,T.positions),m=T.totalArea/(t*n)*100;return{videos:h,totalArea:T.totalArea,efficiency:m}}function xo(e,i,t,n){if(e.portrait>0)return Ne(e,i,t,n);const a=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)a.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)a.push("wide");const u=a[0]||i[0].orientation,g=a[1]||i[1].orientation,p=a[2]||i[2].orientation,b=a[3]||i[3].orientation,l=D[u],f=D[g],E=D[p],T=D[b],y=[()=>{const r=t/2,x=n/2,A=Math.min(r,x*l),c=A/l,w=Math.min(r,x*f),S=w/f,N=Math.min(r,x*E),L=N/E,j=Math.min(r,x*T),O=j/T;return{positions:[{x:(r-A)/2,y:(x-c)/2,width:A,height:c,orientation:u},{x:r+(r-w)/2,y:(x-S)/2,width:w,height:S,orientation:g},{x:(r-N)/2,y:x+(x-L)/2,width:N,height:L,orientation:p},{x:r+(r-j)/2,y:x+(x-O)/2,width:j,height:O,orientation:b}],totalArea:A*c+w*S+N*L+j*O}},()=>{const r=t*.6,x=t*.4,A=r/l,c=n/3,w=Math.min(x,c*f),S=w/f,N=Math.min(x,c*E),L=N/E,j=Math.min(x,c*T),O=j/T;return A<=n?{positions:[{x:0,y:(n-A)/2,width:r,height:A,orientation:u},{x:r,y:0,width:w,height:S,orientation:g},{x:r,y:c,width:N,height:L,orientation:p},{x:r,y:c*2,width:j,height:O,orientation:b}],totalArea:r*A+w*S+N*L+j*O}:null},()=>{const r=t/4,x=r/l,A=r/f,c=r/E,w=r/T;return Math.max(x,A,c,w)<=n?{positions:[{x:0,y:(n-x)/2,width:r,height:x,orientation:u},{x:r,y:(n-A)/2,width:r,height:A,orientation:g},{x:r*2,y:(n-c)/2,width:r,height:c,orientation:p},{x:r*3,y:(n-w)/2,width:r,height:w,orientation:b}],totalArea:r*x+r*A+r*c+r*w}:null}];let h=null,m=0;for(const r of y){const x=r();x&&x.totalArea>m&&(m=x.totalArea,h=x)}if(!h){const r=t/2,x=n/2,A=Math.min(x,r/l),c=Math.min(x,r/f),w=Math.min(x,r/E),S=Math.min(x,r/T);h={positions:[{x:(r-r)/2,y:(x-A)/2,width:r,height:A,orientation:u},{x:r+(r-r)/2,y:(x-c)/2,width:r,height:c,orientation:g},{x:(r-r)/2,y:x+(x-w)/2,width:r,height:w,orientation:p},{x:r+(r-r)/2,y:x+(x-S)/2,width:r,height:S,orientation:b}],totalArea:r*A+r*c+r*w+r*S}}const s=J(i,h.positions),d=h.totalArea/(t*n)*100;return{videos:s,totalArea:h.totalArea,efficiency:d}}const Eo=e=>{const i=V();i.HASS_HOST;const t=i.HASS_ACCESS_TOKEN||"",n=i.SUPERVISOR_TOKEN||"",[a,u]=_.useState({}),[g,p]=_.useState(!0),[b,l]=_.useState(null);return _.useEffect(()=>{if(!e||e.length===0){p(!1);return}let f=!0;async function E(){p(!0),l(null);try{const T=e.map(async h=>{try{const m=M(`/api/states/${h}`),d=(await I(m)).data?.attributes?.access_token||null;return{entityId:h,accessToken:d}}catch(m){return R.error(`Failed to fetch access token for ${h}:`,m),{entityId:h,accessToken:null}}}),y=await Promise.all(T);if(f){const h={};y.forEach(({entityId:m,accessToken:s})=>{s&&(h[m]=s)}),u(h),p(!1)}}catch(T){f&&(R.error("Failed to fetch camera access tokens:",T),l(z(T)),p(!1))}}return E(),()=>{f=!1}},[e?.length,e?.join(",")]),_.useEffect(()=>{if(!e||e.length===0)return;let f=!0,E=null;async function T(){if(f)try{const y=e.map(async m=>{try{const s=M(`/api/states/${m}`),r=(await I(s)).data?.attributes?.access_token||null;return{entityId:m,accessToken:r}}catch(s){return R.debug(`Failed to refresh access token for ${m}:`,s),null}}),h=await Promise.all(y);f&&u(m=>{const s={...m};return h.forEach(d=>{d&&d.accessToken&&(s[d.entityId]=d.accessToken)}),s})}catch(y){f&&R.debug("Failed to refresh camera access tokens:",y)}}return E=setInterval(T,300*1e3),()=>{f=!1,E&&clearInterval(E)}},[e?.length,e?.join(",")]),_.useEffect(()=>{if(!e||e.length===0)return;let f=null,E=[],T=!0,y=null,h=0,m=!1;async function s(){if(m)return;if(f){try{E.forEach(A=>{A&&A()}),E=[],f.close()}catch(A){R.debug("Error closing existing WebSocket connection:",A)}f=null}m=!0;const d=de(),r=n||t||"";if(R.debug("Camera tokens WebSocket auth:",{isDevelopment:Re,hasSupervisorToken:!!n,hasAccessToken:!!t}),!r){R.debug("Skipping WebSocket connection for camera tokens - no access token (using REST API only)"),m=!1;return}let x;try{x=ae(d,r),T&&l(!1)}catch(A){T&&(R.error("Failed to create WebSocket auth for camera tokens:",A),l(A instanceof Error?A.message:String(A))),m=!1;return}try{f=await ce({auth:x}),f.addEventListener("ready",()=>{T&&(R.debug("WebSocket connection ready for camera tokens"),h=0,l(!1))}),f.addEventListener("disconnected",()=>{if(T&&!m){R.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),y&&clearTimeout(y),f=null,E=[];const A=Math.min(1e3*Math.pow(2,h),3e4);h++,y=setTimeout(()=>{T&&!m&&(R.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${h})`),s())},A)}});for(const A of e){const c=S=>{if(T){const L=S.variables.trigger.to_state?.attributes?.access_token||null;u(j=>L?{...j,[A]:L}:j)}},w=await f.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:A}});E.push(w)}m=!1}catch(A){if(m=!1,T){R.error("Failed to setup WebSocket connection for camera tokens:",A),l(A instanceof Error?A.message:String(A));const c=Math.min(1e3*Math.pow(2,h),3e4);h++,y=setTimeout(()=>{T&&(R.debug(`Attempting to reconnect WebSocket for camera tokens after error (attempt ${h})`),s())},c)}}}return s(),()=>{T=!1,y&&clearTimeout(y),E.forEach(d=>{d&&d()}),f&&f.close()}},[e?.length,e?.join(",")]),[a,g,b]},yo=(e,i=null,t=null)=>{if(!e)return null;let n=t||"";if(!n&&!Re&&typeof window<"u"&&window.location){const u=window.location.protocol,g=window.location.hostname,p=window.location.port?`:${window.location.port}`:"";n=`${u}//${g}${p}`}if(!n)return R.warn("HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL"),null;const a=`${n}/api/camera_proxy_stream/${e}`;return i?`${a}?token=${encodeURIComponent(i)}`:a},De=45e3,wo=k.div`
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
`,Ao=()=>{const e=V(),i=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[];if(!i)return null;const[n,a]=_.useState(!1),[u]=fo(),[g,p]=_.useState(void 0),[b,l]=_.useState(100),[f,E]=_.useState("0"),T=_.useMemo(()=>t.map(d=>d.entity_id).filter(Boolean),[t]),[y]=Eo(T);_.useEffect(()=>{if(u==="off"&&n){const d=window.setTimeout(()=>{a(!1),p(void 0)},De);return p(d),E(De+"ms"),l(0),()=>{d&&window.clearTimeout(d)}}else u==="on"&&(E(0),l(100),a(!0))},[u,n]),_.useEffect(()=>{u==="on"&&g!==void 0&&(window.clearTimeout(g),E(0),l(100),p(void 0))},[g,u]);const[h,m]=_.useState(null),s=()=>{h===null?m("confirm"):h==="confirm"&&(m("opening"),uo(),setTimeout(()=>m(null),2e3))};return _.useEffect(()=>{if(h==="confirm"){const d=setTimeout(()=>{m(null)},3e3);return()=>{clearTimeout(d)}}},[h]),_.useEffect(()=>{n||m(null)},[n]),o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>a(d=>!d),children:"CCTV"}),o.jsx(le,{visible:n,onClick:s,onClose:()=>{a(!1),m(null)},fullsize:!0,children:o.jsxs(wo,{onClick:s,children:[o.jsx(Je,{completed:b,height:10,bgColor:g===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:f,transitionTimingFunction:"linear"}),o.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const d=t.map(S=>({orientation:S.orientation||"landscape"})),r=window.innerWidth,x=window.innerHeight-10,A=qe(d,r,x),c={portrait:t.filter(S=>(S.orientation||"landscape")==="portrait"),landscape:t.filter(S=>(S.orientation||"landscape")==="landscape"),wide:t.filter(S=>S.orientation==="wide")},w={portrait:0,landscape:0,wide:0};return A.videos.map((S,N)=>{const L=S.orientation,j=w[L],O=c[L][j];if(!O)return null;w[L]++;const P=y[O.entity_id]||null,v=yo(O.entity_id,P,e.HASS_HOST);return v?o.jsxs("div",{className:"video-container",style:{left:`${S.x}px`,top:`${S.y}px`,width:`${S.width}px`,height:`${S.height}px`},children:[o.jsx("img",{src:v,className:L,alt:"Camera stream",crossOrigin:"anonymous"},`${O.entity_id}-${N}`),o.jsx("div",{className:"video-overlay",onClick:()=>s()})]},`${L}-${j}-${N}`):null})})()}),h==="confirm"&&o.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),h==="opening"&&o.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},bo=k.div`
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

`,To=({nextWeek:e,previousWeek:i,startWeekWithToday:t})=>o.jsxs(bo,{children:[o.jsxs("div",{className:"buttons",children:[o.jsx(G,{path:Et,size:"32px",color:"#ffffff",onClick:i}),o.jsx(G,{path:yt,size:"32px",color:"#ffffff",onClick:e}),o.jsx("button",{onClick:t,children:"Today"}),o.jsx(Ao,{})]}),o.jsx(lo,{}),o.jsx(G,{path:wt,size:"32px",color:"#ffffff",className:Y("indicator")})]}),So=C.memo(To),_o=6e4,je=(e=_o,i=void 0)=>{const[t,n]=_.useState(!0);return _.useEffect(()=>{const a=setInterval(()=>{n(u=>!u)},e);return()=>{clearInterval(a)}},[e,i]),t},Lo={mdiDelete:bt,mdiCake:At},Ro=e=>{if(!e||typeof e!="string")return;const i=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Lo[i]||void 0},No=(e,i,t,n,a)=>I(a(e.name,{start:i.toISO(),end:t.toISO()}),{timeout:1e4}).then(u=>{!u.data||!Array.isArray(u.data)||u.data.forEach(g=>{const p="dateTime"in g.start?B.fromISO(g.start.dateTime):B.fromSQL(g.start.date);let b;"dateTime"in g.end?b=Math.floor(B.fromISO(g.end.dateTime).diff(i,"days").as("days")):b=Math.floor(B.fromSQL(g.end.date).diff(i,"days").as("days"))-1;const l=Math.floor(p.diff(i,"days").as("days"));b>=n.length&&(b=n.length-1);const f="dateTime"in g.start?"events":"allDay";if(l>=0&&l<n.length)for(let E=l;E<=b;E++)n[E][f]=[...n[E][f],{...g,icon:e.icon}]})}).catch(u=>{throw u}),ve=new Map,jo=300*1e3,Co=e=>e.toISODate(),Oo=(e,i,t,n,a,u,g,p)=>{const b=[0,1,2,3,4,5].map(y=>e.plus({days:y}).startOf("day"));b[6]=e.plus({days:6}).endOf("day");const l=Co(e),f=ve.get(l);if(f&&Date.now()-f.timestamp<jo){t(f.data);return}const E=b.map(y=>({date:y,allDay:[],events:[]}));if(!g||g.length===0){t(E),n(!1);return}const T=new AbortController;a.current&&a.current.abort(),a.current=T;try{n(!0);const y=g.map(h=>No(h,b[0],b[6],E,p));Promise.all(y).then(()=>{T.signal.aborted||(ve.set(l,{data:E,timestamp:Date.now()}),t(E),u(!1))}).catch(h=>{T.signal.aborted||u(z(h))}).finally(()=>{T.signal.aborted||n(!1)})}catch(y){T.signal.aborted||(u(z(y)),n(!1))}},Ie=[],ko=e=>{const t=V().CALENDARS||[],n=_.useMemo(()=>t.map(s=>({name:s.name,icon:Ro(s.icon)})),[t]),a=_.useCallback(s=>M(`/api/calendars/${s}`),[]),u=_.useCallback((s,d)=>`${a(s)}?${Wt.stringify(d)}`,[a]),[g,p]=_.useState(Ie),[b,l]=_.useState(!1),[f,E]=_.useState(!1),T=je(6e4,"Calendar"),[y,h]=_.useState(null),m=C.useRef(null);return _.useEffect(()=>(e!==void 0&&((y===null||!y.equals(e))&&(p(Ie),h(e)),Oo(e,g,p,l,m,E,n,u)),()=>{m.current&&m.current.abort()}),[e,T,n]),[g,f]};function se(e){const[i,t]=_.useState(!1);function n({key:u}){u===e&&t(!0)}const a=({key:u})=>{u===e&&t(!1)};return _.useEffect(()=>(window.addEventListener("keydown",n),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",a)}),[e]),i}const Do=()=>{let e=new Date,t=(e.getDay()+6)%7,n=new Date(e.setDate(e.getDate()-t));return B.fromJSDate(n)},vo=e=>{const i=()=>e(p=>p.plus({days:7})),t=se("ArrowRight");_.useEffect(()=>{t&&i()},[t]);const n=()=>e(p=>p.minus({days:7})),a=se("ArrowLeft");_.useEffect(()=>{a&&n()},[a]);const u=()=>e(Do()),g=se("t");return _.useEffect(()=>{g&&u()},[g]),{nextWeek:i,previousWeek:n,startWeekWithToday:u}},Io=e=>{const[i,t]=C.useState(0),[n,a]=C.useState(0),u=50;return{onTouchStart:l=>{a(0),t(l.targetTouches[0].clientX)},onTouchMove:l=>a(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!i||!n)return;const l=i-n,f=l>u,E=l<-u;f&&e.onSwipedLeft(),E&&e.onSwipedRight()}}},Pe=e=>B.fromISO(e).toLocaleString(B.TIME_24_SIMPLE),Ae=e=>e.toFormat("c")>=6,be=e=>e.hasSame(B.now(),"day"),Po=k.div`
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
`,Wo=()=>{const[e,i]=_.useState(void 0),[t,n]=ko(e),{nextWeek:a,previousWeek:u,startWeekWithToday:g}=vo(i);_.useEffect(()=>{g()},[]);const p=Io({onSwipedLeft:()=>a(),onSwipedRight:()=>u()}),b=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=C.useMemo(()=>t.slice(0,7),[t]);return o.jsxs(Po,{...p,children:[o.jsx(So,{nextWeek:a,previousWeek:u,startWeekWithToday:g}),o.jsxs("div",{className:"schedule",children:[l.map((f,E)=>o.jsx("div",{className:Y({weekend:Ae(f.date),today:be(f.date)},"caption"),children:o.jsx("h2",{children:f.date.toLocaleString(b)})},E)),l.map((f,E)=>o.jsx("div",{className:Y("allDayRow",{weekend:Ae(f.date),today:be(f.date)}),children:f.allDay.map((T,y)=>o.jsx("div",{className:"allDayEvent",children:T.summary},y))},E)),l.map((f,E)=>o.jsx("div",{className:Y("eventRow",{weekend:Ae(f.date),today:be(f.date)}),children:f.events.map((T,y)=>o.jsxs("div",{className:"event",children:[o.jsx("div",{children:T.summary}),o.jsxs("h3",{children:[T.icon&&o.jsx(G,{path:T.icon,size:"1rem",color:"#ffffff"}),Pe(T.start.dateTime)," - ",Pe(T.end.dateTime)]})]},y))},E))]}),t.length===0&&o.jsx("div",{className:"loading",children:n!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),o.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):o.jsx(Ue,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),n!==!1&&t.length>0&&o.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:o.jsxs("div",{children:["Warnung: ",n instanceof Error?n.message:String(n)]})})]})},xe={"clear-day":{icon:at,label:"Klar",color:"#eeeef5"},"clear-night":{icon:st,label:"Klar",color:"#eeeef5"},rain:{icon:rt,label:"Regen",color:"#80a5d6"},snow:{icon:it,label:"Schnee",color:"#8c82ce"},sleet:{icon:nt,label:"Graupel",color:"#aba4db"},wind:{icon:ot,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:tt,label:"Neblig",color:"#d5dae2"},cloudy:{icon:et,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:Ze,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:Qe,label:"Teils bewölkt",color:"#d5dae2"}},Mo=e=>{const[i,t]=_.useState([]),[n,a]=_.useState(!1),u=je(6e4*10,"Weather"),g=V(),p=g.ENABLE_WEATHER||!1,b=g.WEATHER_API_KEY||"",l=g.WEATHER_LATITUDE,f=g.WEATHER_LONGITUDE,E=p&&b&&l&&f,T=()=>`./forecast/${b}/${l},${f}?&units=si&exclude=minutely`;return _.useEffect(()=>{E&&I(T()).then(y=>{t(y.data),a(!1)}).catch(y=>{a(z(y))}).finally(()=>{})},[u,e,E,p,b,l,f]),[i,n]},$o=lt(dt),We=k.div`

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
`,Me=C.memo(({data:e,daily:i=!1})=>o.jsxs("div",{children:[o.jsxs("div",{children:[!i&&B.fromSeconds(e.time).toLocaleString(B.TIME_24_SIMPLE),i&&B.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),o.jsx("div",{children:o.jsx(Se,{icon:e.icon})}),o.jsx("div",{children:o.jsxs("strong",{children:[!i&&o.jsxs(o.Fragment,{children:[Math.round(e.temperature),"°"]}),i&&o.jsxs(o.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),o.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),o.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Vo=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(i=>({color:xe[i.icon]?.color||"#ffffff",text:xe[i.icon]?.label||"",annotation:`${Math.round(i.temperature)}°`,time:i.time})),Se=({icon:e})=>{const i=xe[e];return o.jsx(i.icon,{size:60,color:"#ffffff"})},Bo=()=>{if(!(V().ENABLE_WEATHER||!1))return null;const[t,n]=Mo(),[a,u]=_.useState(!1),g=se("w"),p=_.useRef(),b=C.useCallback(()=>u(y=>!y),[]),l=C.useCallback(()=>u(!0),[]),f=C.useMemo(()=>Vo(t),[t]),E=C.useMemo(()=>[3,6,9,12],[]),T=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return _.useEffect(()=>{if(!a||!p.current||!t||!t.hourly||f.length===0)return;const y={timezone:"Europe/Berlin"},h=document.createElement("div");return p.current.textContent="",p.current.appendChild(h),Mt(h,f,y),()=>{p.current&&(p.current.textContent="")}},[a,f]),_.useEffect(()=>{g&&b()},[g]),!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?n!==!1?o.jsx(We,{children:o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),o.jsx("div",{children:n instanceof Error?n.message:String(n)})]})}):"":o.jsxs(We,{children:[o.jsxs("div",{onClick:l,children:[o.jsxs("div",{className:"headline",children:[o.jsx(Se,{icon:t.currently.icon}),o.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),o.jsx("div",{className:"forecast",children:E.map((y,h)=>o.jsx(Me,{data:t.hourly.data[y]},h))})]}),o.jsx(le,{visible:a,onClick:b,children:o.jsxs("div",{className:"full-weather",children:[n!==!1&&o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:n instanceof Error?n.message:String(n)})]}),o.jsxs("div",{className:"detail-header",children:[o.jsx("div",{children:o.jsxs("div",{className:"headline",children:[o.jsx(Se,{icon:t.daily.data[0].icon}),o.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",o.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),o.jsx("h3",{children:xe[t.daily.data[0].icon].label})]}),o.jsx("div",{className:"values",children:o.jsxs("div",{className:"table",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"Regen:"})," ",t.daily.data[0].precipProbability*100," %"]}),o.jsxs("div",{children:[o.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),o.jsxs("div",{children:[o.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),o.jsx("h3",{children:"Die nächsten 24 Stunden"}),o.jsx("div",{ref:p}),o.jsx("h3",{children:"Die nächste Woche"}),o.jsx("div",{className:"forecast",children:T.map((y,h)=>o.jsx(Me,{data:t.daily.data[y],daily:!0},h))}),o.jsxs("div",{className:"info",children:["Aktualisiert ",o.jsx(ct,{date:B.fromSeconds(t.currently.time).toJSDate(),formatter:$o})]})]})})]})},Yo=C.memo(Bo),Ho="AK Wandsbek",Fo="Hamburg",Go="Master:62016",Uo="STATION",zo={x:10.091341,y:53.568702},Ko={name:Ho,city:Fo,id:Go,type:Uo,coordinate:zo},me={departureList:"departureList",checkName:"checkName"},qo=async(e,i)=>I({method:"post",url:`./gti/public/${e}`,data:i,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}),$e=(e,i)=>e.realtimeOffset-i.realtimeOffset,Xo=e=>{const i=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:i.filter(t=>t.directionId===1).slice(0,3).sort($e),to:i.filter(t=>t.directionId===6).slice(0,3).sort($e)}},Jo=e=>{const t=V().ENABLE_HVV||!1,[n,a]=_.useState([]),[u,g]=_.useState(!1),p=je(6e4),b=t;return _.useEffect(()=>{if(!b)return;if(!(e in me)){R.warn(e,"not supported by HVV connector");return}let l={version:51};switch(e){case me.checkName:l={...l,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case me.departureList:const f=B.now();l={...l,station:Ko,time:{date:f.toFormat("dd.MM.yyyy"),time:f.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:l=void 0}qo(e,l).then(f=>{a(Xo(f.data)),g(!1)}).catch(f=>{g(z(f))})},[e,p,b,t]),[n,u]},Qo=k.div`
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
`,Ve=C.memo(({line:e,direction:i,realtimeOffset:t})=>o.jsxs("div",{className:"departure",children:[o.jsx("div",{children:o.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),o.jsx("div",{children:t===0?"Jetzt":o.jsxs(o.Fragment,{children:["in ",t," '"]})})]})),Zo=()=>{if(!(V().ENABLE_HVV||!1))return null;const[t,n]=Jo(me.departureList);return o.jsx(Qo,{children:n!==!1?o.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[o.jsx("h3",{children:"Fehler!"}),o.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((a,u)=>o.jsx(Ve,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},u)),o.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((a,u)=>o.jsx(Ve,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},u))]})})},en=C.memo(Zo),tn=()=>{const e=V(),i=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const n=e.ENTITY_CHARGING_STATE||"",a=e.ENTITY_STATE_OF_CHARGE||"",u=e.HASS_ACCESS_TOKEN||"",g=e.SUPERVISOR_TOKEN||"",[p,b]=_.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[l,f]=_.useState(!1),E=i&&(t||n||a);return _.useEffect(()=>{if(!E)return;(async()=>{const y=[];t&&y.push(I(M(`/api/states/${t}`)).then(s=>({type:"preclimateStatus",value:s.data.state==="on"})).catch(s=>({type:"preclimateStatus",error:z(s)}))),n&&y.push(I(M(`/api/states/${n}`)).then(s=>({type:"chargingState",value:s.data.state==="on"})).catch(s=>({type:"chargingState",error:z(s)}))),a&&y.push(I(M(`/api/states/${a}`)).then(s=>({type:"stateOfCharge",value:parseFloat(s.data.state)||0})).catch(s=>({type:"stateOfCharge",error:z(s)})));const h=await Promise.all(y);let m=!1;h.forEach(s=>{s.error?m=s.error:b(d=>({...d,[s.type]:s.value}))}),f(m||!1)})()},[E,i,t,n,a]),_.useEffect(()=>{let T=null,y=[],h=!0,m=null,s=0,d=!1;async function r(){if(!E||d)return;if(T){try{y.forEach(w=>{w&&w()}),y=[],T.close()}catch(w){R.debug("Error closing existing WebSocket connection:",w)}T=null}d=!0;const x=de(),A=g||u||"";if(!A){R.debug("Skipping WebSocket connection - no access token (using REST API only)"),d=!1;return}let c;try{c=ae(x,A),h&&f(!1)}catch(w){h&&(R.error("Failed to create WebSocket auth:",w),f(w instanceof Error?w.message:String(w))),d=!1;return}try{T=await ce({auth:c}),T.addEventListener("ready",()=>{h&&(R.debug("WebSocket connection ready for EV entities"),s=0,f(!1))}),T.addEventListener("disconnected",()=>{if(h&&!d){R.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),m&&clearTimeout(m),T=null,y=[];const N=Math.min(1e3*Math.pow(2,s),3e4);s++,m=setTimeout(()=>{h&&!d&&(R.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${s})`),r())},N)}});const w=N=>{if(h){const L=N.variables.trigger.to_state.entity_id,j=N.variables.trigger.to_state.state;b(O=>{const P={...O};return L===t?P.preclimateStatus=j==="on":L===n?P.chargingState=j==="on":L===a&&(P.stateOfCharge=parseFloat(j)||0),P})}},S=[];t&&S.push(t),n&&S.push(n),a&&S.push(a);for(const N of S){const L=await T.subscribeMessage(w,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:N}});y.push(L)}d=!1}catch(w){if(d=!1,h){R.error("Failed to setup WebSocket connection:",w),f(w instanceof Error?w.message:String(w));const S=Math.min(1e3*Math.pow(2,s),3e4);s++,m=setTimeout(()=>{h&&(R.debug(`Attempting to reconnect WebSocket for EV entities after error (attempt ${s})`),r())},S)}}}return r(),()=>{h=!1,m&&clearTimeout(m),y.forEach(x=>{x&&x()}),T&&T.close()}},[E,i,t,n,a,u,g]),[p,l]},on=e=>{const i=e?.ENTITY_PRECLIMATE_START||"";i&&I.post(M("/api/services/button/press"),{entity_id:i}).catch(t=>{R.error("Failed to start preclimate:",t)})},nn=e=>{const i=e?.ENTITY_PRECLIMATE_STOP||"";i&&I.post(M("/api/services/button/press"),{entity_id:i}).catch(t=>{R.error("Failed to stop preclimate:",t)})},rn=k.div`
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
`,sn=(e,i)=>i?St:e>=80?_t:e>=50?Lt:e>=20?Rt:Nt,an=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",cn=()=>{const e=V();if(!(e.ENABLE_EV||!1))return null;const[t,n]=tn(),{preclimateStatus:a,chargingState:u,stateOfCharge:g}=t,[p,b]=C.useState(!1),[l,f]=C.useState(null),[E,T]=C.useState(!1),[y,h]=C.useState(!1),[m,s]=C.useState(0),d=C.useRef(null),r=C.useRef(null),x=C.useRef(a),A=C.useRef(null);C.useEffect(()=>{x.current!==a&&(p&&A.current!==null&&a===(l==="start")&&(s(l==="start"?360:0),h(!0),setTimeout(()=>{b(!1),f(null),h(!1),s(0),A.current=null,T(!1)},300),d.current&&(clearTimeout(d.current),d.current=null)),x.current=a)},[a,p,l]),C.useEffect(()=>{if(!p||y){r.current&&(cancelAnimationFrame(r.current),r.current=null);return}const P=A.current||Date.now(),v=1e4,H=l==="stop",$=()=>{const F=Date.now()-P,U=Math.min(F/v,1);s(H?360*(1-U):360*U),U<1&&!y&&(r.current=requestAnimationFrame($))};return r.current=requestAnimationFrame($),()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null)}},[p,y,l]),C.useEffect(()=>()=>{d.current&&clearTimeout(d.current),r.current&&cancelAnimationFrame(r.current)},[]);const c=C.useCallback(()=>{if(n!==!1||p)return;const P=!a,v=P?"start":"stop";b(!0),f(v),h(!1),T(!1),s(0),A.current=Date.now(),x.current=a,P?on(e):nn(e),d.current=setTimeout(()=>{p&&(T(!0),setTimeout(()=>{b(!1),f(null),h(!1),s(0),T(!1),A.current=null},500))},15e3)},[a,n,p]),w=sn(g||0,u),S=an(g||0),N=Math.round(g||0),L=p?l==="start":a,j=l==="start"?"#17e146":"#f85a5a",O=l==="start"?"clockwise":"counterclockwise";return o.jsxs(rn,{className:Y({disabled:n!==!1}),children:[o.jsxs("h2",{children:["Auto",n!==!1?o.jsxs("div",{className:"battery-info",children:[o.jsx(G,{path:Le,size:"1.2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsxs("div",{className:"battery-info",children:[o.jsxs("span",{className:"charge-percentage",children:[N,"%"]}),o.jsx(G,{path:w,size:"1.2rem",color:S})]})]}),n===!1&&o.jsxs("div",{className:"preclimate-button-wrapper",children:[p&&o.jsx("div",{className:Y("progress-ring",O,{complete:y}),style:{"--progress-color":j,"--progress-angle":`${m}deg`,"--progress-gradient":l==="stop"?`conic-gradient(from -90deg, ${j} 0deg, ${j} ${m}deg, transparent ${m}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${j} 0deg, ${j} ${m}deg, transparent ${m}deg, transparent 360deg)`}}),o.jsxs("button",{className:Y("preclimate-button",{spinning:L&&!p,shaking:E}),onClick:c,disabled:n!==!1||p,children:[o.jsx(G,{path:Tt,size:"2rem",color:L?"#ff9800":"#ffffff"}),o.jsx("span",{children:L?"Stop":"Start"})]})]})]})},ln=C.memo(cn),dn=()=>{const e=V(),i=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",n=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[u,g]=_.useState("closed"),[p,b]=_.useState(!1),l=i&&t,f=t?M(`/api/states/${t}`):null;return _.useEffect(()=>{!l||!f||I(f).then(E=>{g(E.data.state),b(!1)}).catch(E=>{b(z(E))})},[l,f,i,t]),_.useEffect(()=>{let E=null,T=null,y=!0,h=null,m=0,s=!1;async function d(){if(!l||!t||s)return;if(E){try{T&&(T(),T=null),E.close()}catch(c){R.debug("Error closing existing WebSocket connection:",c)}E=null}s=!0;const r=de(),x=a||n||"";if(!x){R.debug("Skipping WebSocket connection - no access token (using REST API only)"),s=!1;return}let A;try{A=ae(r,x),y&&b(!1)}catch(c){y&&(R.error("Failed to create WebSocket auth:",c),b(c instanceof Error?c.message:String(c))),s=!1;return}try{E=await ce({auth:A}),E.addEventListener("ready",()=>{y&&(R.debug("WebSocket connection ready for garage door"),m=0,b(!1))}),E.addEventListener("disconnected",()=>{if(y&&!s){R.debug("WebSocket disconnected for garage door, will attempt to reconnect"),h&&clearTimeout(h),E=null,T=null;const w=Math.min(1e3*Math.pow(2,m),3e4);m++,h=setTimeout(()=>{y&&!s&&(R.debug(`Attempting to reconnect WebSocket for garage door (attempt ${m})`),d())},w)}});const c=w=>{y&&g(w.variables.trigger.to_state.state)};T=await E.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),s=!1}catch(c){if(s=!1,y){R.error("Failed to setup WebSocket connection:",c),b(c instanceof Error?c.message:String(c));const w=Math.min(1e3*Math.pow(2,m),3e4);m++,h=setTimeout(()=>{y&&(R.debug(`Attempting to reconnect WebSocket for garage door after error (attempt ${m})`),d())},w)}}}return d(),()=>{y=!1,h&&clearTimeout(h),T&&T(),E&&E.close()}},[l]),[u,p]},fn=e=>{if(!ENTITY_GARAGE_DOOR)return;e(!0);const i=setTimeout(()=>e(!1),3e3);I.post(M("/api/services/cover/toggle"),{entity_id:ENTITY_GARAGE_DOOR}).catch(t=>{R.error("Failed to toggle garage door:",t)}).finally(()=>{clearTimeout(i),e(!1)})},un=e=>{if(!ENTITY_GARAGE_DOOR)return;e(!0);const i=setTimeout(()=>e(!1),3e3);I.post(M("/api/services/cover/open_cover"),{entity_id:ENTITY_GARAGE_DOOR}).catch(t=>{R.error("Failed to open garage door:",t)}).finally(()=>{clearTimeout(i),e(!1)})},hn=e=>{if(!ENTITY_GARAGE_DOOR)return;e(!0);const i=setTimeout(()=>e(!1),3e3);I.post(M("/api/services/cover/close_cover"),{entity_id:ENTITY_GARAGE_DOOR}).catch(t=>{R.error("Failed to close garage door:",t)}).finally(()=>{clearTimeout(i),e(!1)})},pn=k.div`
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
`,Xe=k.div`
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
`,_e=e=>{const i={unknown:{label:"In Bewegung oder halb-offen",icon:Dt},open:{label:"Offen",icon:kt},closed:{label:"Geschlossen",icon:Ot},opening:{label:"Öffnet",icon:Ct},closing:{label:"Schließt",icon:jt}};return i[e]||R.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),i[e]||{label:"Unavailable",icon:vt}},mn=({garageDoor:e,animate:i=!1})=>o.jsxs(Xe,{className:Y({animate:i}),children:[o.jsx(G,{path:_e(e).icon,size:"2rem",color:"#ffffff"}),o.jsx("span",{children:_e(e).label})]}),gn=e=>ft.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:i}){return _e(i).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),xn=()=>{if(!(V().ENABLE_GARAGE||!1))return null;const[t,n]=dn(),[a,u]=_.useState(void 0),[g,p]=_.useState(!1),[b,l]=_.useState(!1);_.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!a){const h=new Promise(m=>{u({resolve:m})});gn(h)}}else a&&(a.resolve(t),u(void 0))},[t]);const f=se("g");_.useEffect(()=>{f&&n===!1&&fn(p)},[f,n]);const E=C.useCallback(y=>{if(n===!1)switch(l(!1),y){case"open":un(p);break;case"close":hn(p);break}},[p,n]),T=C.useCallback(()=>{n===!1&&l(!0)},[n]);return o.jsxs(pn,{className:Y({disabled:n!==!1}),children:[o.jsx("h2",{children:"Garage"}),o.jsx("div",{className:"status",onClick:T,children:n!==!1?o.jsxs(Xe,{children:[o.jsx(G,{path:Le,size:"2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsx(mn,{garageDoor:t,animate:g})}),o.jsx(le,{visible:b&&n===!1,onClick:()=>l(!1),children:o.jsxs("div",{className:"controls",children:[o.jsx("h2",{children:"Garagentor"}),o.jsx("div",{onClick:()=>E("open"),children:"Öffnen"}),o.jsx("div",{onClick:()=>E("close"),children:"Schließen"})]})})]})},En=C.memo(xn),yn=e=>e?M(`/api/states/${e}`):null,X={done:{label:"Fertig",animate:!1,icon:Pt},off:{label:"Aus",animate:!1,icon:It},standby:{label:"Standby",animate:!1,icon:Ce},running:{label:"Läuft …",animate:!0,icon:Ce}},wn={off:0,standby:2,running:16,done:256},An=()=>{const e=V();e.ENABLE_LAUNDRY;const i=e.LAUNDRY_MACHINES||[];e.HASS_ACCESS_TOKEN,e.SUPERVISOR_TOKEN;const n=(Array.isArray(i)?i:[]).map((E,T)=>{const[y,h]=bn(E.entity_id);return{state:y,error:h,name:E.name}}),[a,u]=_.useState(X.off),[g,p]=_.useState(!1),b=n.map(E=>E.state),l=n.map(E=>E.error);_.useEffect(()=>{const E=l.some(T=>T!==!1);p(E&&l.find(T=>T!==!1)||!1)},[l]),_.useEffect(()=>{const E=b.reduce((T,y)=>T+(wn[y]||0),0);E===0?u(X.off):E<16?u(X.standby):E<256?u(X.running):E%256===0?u(X.done):E%256%16===0?u(X.running):E%256%2===0?u(X.done):u(X.running)},[b]);const f=n.map(E=>({label:E.name,state:E.state}));return[a,f,g]},bn=e=>{const[i,t]=_.useState("off"),[n,a]=_.useState(!1),u=ENABLE_LAUNDRY&&e,g=yn(e);return _.useEffect(()=>{!u||!g||I(g).then(p=>{t(p.data.state),a(!1)}).catch(p=>{a(z(p))})},[e,u,g]),_.useEffect(()=>{let p=null,b=null,l=!0,f=null,E=0,T=!1;async function y(){if(!u||!e||T)return;if(p){try{b&&(b(),b=null),p.close()}catch(s){R.debug(`Error closing existing WebSocket connection for ${e}:`,s)}p=null}T=!0;const h=de(),m=SUPERVISOR_TOKEN||HASS_ACCESS_TOKEN||"";if(!m){R.debug("Skipping WebSocket connection - no access token (using REST API only)"),T=!1;return}try{const s=ae(h,m);p=await ce({auth:s}),p.addEventListener("ready",()=>{l&&(R.debug(`WebSocket connection ready for ${e}`),E=0,a(!1))}),p.addEventListener("disconnected",()=>{if(l&&!T){R.debug(`WebSocket disconnected for ${e}, will attempt to reconnect`),f&&clearTimeout(f),p=null,b=null;const r=Math.min(1e3*Math.pow(2,E),3e4);E++,f=setTimeout(()=>{l&&!T&&(R.debug(`Attempting to reconnect WebSocket for ${e} (attempt ${E})`),y())},r)}});const d=r=>{l&&t(r.variables.trigger.to_state.state)};b=await p.subscribeMessage(d,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),T=!1}catch(s){if(T=!1,l){R.error(`Failed to setup WebSocket connection for ${e}:`,s),a(s instanceof Error?s.message:String(s));const d=Math.min(1e3*Math.pow(2,E),3e4);E++,f=setTimeout(()=>{l&&(R.debug(`Attempting to reconnect WebSocket for ${e} after error (attempt ${E})`),y())},d)}}}return y(),()=>{l=!1,f&&clearTimeout(f),b&&b(),p&&p.close()}},[e,u]),[i,n]},Tn=k.div`
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
`,Sn=()=>{if(!(V().ENABLE_LAUNDRY||!1))return null;const[t,n,a]=An(),[u,g]=_.useState(!1),p=C.useCallback(()=>{a===!1&&g(!0)},[a]),b=C.useCallback(()=>g(!1),[]);return o.jsxs(Tn,{className:Y({disabled:a!==!1}),children:[o.jsx("h2",{children:"Wäsche"}),o.jsx("div",{className:"status",onClick:p,children:a!==!1?o.jsxs(o.Fragment,{children:[o.jsx(G,{path:Le,size:"2rem",color:"#f85a5a"}),o.jsx("span",{children:"Fehler"})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:Y({animate:t.animate}),children:o.jsx(G,{path:t.icon,size:"2rem",color:"#ffffff"})}),o.jsx("span",{children:t.label})]})}),o.jsx(le,{visible:u&&a===!1,onClick:b,children:o.jsxs("div",{className:"states",children:[o.jsx("h2",{children:"Wäsche"}),n.map((l,f)=>o.jsxs("div",{children:[o.jsx("div",{className:"subtitle",children:l.label}),o.jsx("div",{className:Y({animate:X[l.state].animate}),children:o.jsx(G,{path:X[l.state].icon,size:2})}),o.jsx("div",{children:X[l.state].label})]},f))]})})]})},_n=C.memo(Sn),Ln=k.div`
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
`,Rn=()=>o.jsxs(Ln,{children:[o.jsxs("div",{className:"top-content",children:[o.jsx(Yo,{}),o.jsx(en,{}),o.jsx(ln,{})]}),o.jsxs("div",{className:"two-cols",children:[o.jsx(En,{}),o.jsx(_n,{})]})]}),Nn=C.memo(Rn),Be=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],jn=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],ge={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},Cn={landscape:"L",portrait:"P",wide:"W"},On=k.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,kn=k.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Dn=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,oe=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ne=k.label`
  font-size: 0.9rem;
  color: #cccccc;
`,Ye=k.select`
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
`,He=k.input`
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
`,vn=k.button`
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
`,Fe=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,In=k.button`
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
`,Pn=k.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Wn=k.div`
  position: absolute;
  background-color: ${e=>ge[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,Mn=k.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,$n=k.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Vn=k.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,fe=k.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ue=k.div`
  font-size: 0.85rem;
  color: #cccccc;
`,he=k.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Bn=k.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Yn=k.h3`
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
`;const Te=k.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?ge[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?ge[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?ge[e.orientation]:"#4a4a4a"};
  }
`,Ge=()=>{const[e,i]=C.useState(1920),[t,n]=C.useState(1080),[a,u]=C.useState("Full HD"),[g,p]=C.useState(""),[b,l]=C.useState(""),[f,E]=C.useState([{orientation:"landscape"}]),[T,y]=C.useState(null),h=C.useMemo(()=>qe(f,e,t),[f,e,t]),m=c=>{const w=Be.find(S=>S.name===c);w&&w.width&&w.height?(i(w.width),n(w.height),u(c),p(""),l("")):c==="Custom"&&u("Custom")},s=()=>{const c=parseInt(g),w=parseInt(b);c>0&&w>0&&(i(c),n(w))},d=c=>{E(c.videos),y(c.name)},r=c=>{const w=[];for(let S=0;S<c;S++)w.push(f[S]||{orientation:"landscape"});E(w),y(null)},x=(c,w)=>{const S=[...f];S[c]={orientation:w},E(S),y(null)},A=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return o.jsxs(On,{children:[o.jsx(kn,{children:"Video Tiling Algorithm Demo"}),o.jsxs(Dn,{children:[o.jsxs(oe,{children:[o.jsx(ne,{children:"Screen Size Preset"}),o.jsx(Ye,{value:a,onChange:c=>m(c.target.value),children:Be.map(c=>o.jsx("option",{value:c.name,children:c.name},c.name))})]}),a==="Custom"&&o.jsxs(o.Fragment,{children:[o.jsxs(oe,{children:[o.jsx(ne,{children:"Custom Width"}),o.jsx(He,{type:"number",value:g,onChange:c=>p(c.target.value),placeholder:"Width",min:"100"})]}),o.jsxs(oe,{children:[o.jsx(ne,{children:"Custom Height"}),o.jsx(He,{type:"number",value:b,onChange:c=>l(c.target.value),placeholder:"Height",min:"100"})]}),o.jsxs(oe,{children:[o.jsx(ne,{children:" "}),o.jsx(vn,{onClick:s,children:"Apply Custom Size"})]})]}),o.jsxs(oe,{children:[o.jsx(ne,{children:"Number of Videos"}),o.jsxs(Ye,{value:f.length,onChange:c=>r(parseInt(c.target.value)),children:[o.jsx("option",{value:"1",children:"1 Video"}),o.jsx("option",{value:"2",children:"2 Videos"}),o.jsx("option",{value:"3",children:"3 Videos"}),o.jsx("option",{value:"4",children:"4 Videos"})]})]}),f.map((c,w)=>o.jsxs(oe,{children:[o.jsxs(ne,{children:["Video ",w+1," Orientation"]}),o.jsxs(Fe,{children:[o.jsx(Te,{active:c.orientation==="landscape",orientation:"landscape",onClick:()=>x(w,"landscape"),children:"Landscape"}),o.jsx(Te,{active:c.orientation==="portrait",orientation:"portrait",onClick:()=>x(w,"portrait"),children:"Portrait"}),o.jsx(Te,{active:c.orientation==="wide",orientation:"wide",onClick:()=>x(w,"wide"),children:"Wide"})]})]},w))]}),o.jsxs(Bn,{children:[o.jsx(Yn,{children:"Test Scenarios"}),o.jsx(Fe,{children:jn.map(c=>o.jsx(In,{active:T===c.name,onClick:()=>d(c),children:c.name},c.name))})]}),o.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:o.jsx(Pn,{style:{width:`${e*A}px`,height:`${t*A}px`},children:h.videos.map((c,w)=>o.jsxs(Wn,{orientation:c.orientation,style:{left:`${c.x*A}px`,top:`${c.y*A}px`,width:`${c.width*A}px`,height:`${c.height*A}px`},children:[o.jsxs(Mn,{children:[Cn[c.orientation]," ",w+1]}),o.jsxs($n,{children:[Math.round(c.width)," × ",Math.round(c.height)]})]},w))})}),o.jsxs(Vn,{children:[o.jsxs(fe,{children:[o.jsx(ue,{children:"Canvas Size"}),o.jsxs(he,{children:[e," × ",t]})]}),o.jsxs(fe,{children:[o.jsx(ue,{children:"Total Area Used"}),o.jsxs(he,{children:[Math.round(h.totalArea).toLocaleString()," px²"]})]}),o.jsxs(fe,{children:[o.jsx(ue,{children:"Efficiency"}),o.jsxs(he,{children:[h.efficiency.toFixed(2),"%"]})]}),o.jsxs(fe,{children:[o.jsx(ue,{children:"Display Scale"}),o.jsxs(he,{children:[(A*100).toFixed(1),"%"]})]})]})]})},Hn=()=>{function e(t,n){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(n))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[u,g]=n.split(":").map(Number),p=new Date;let b=new Date(p.getFullYear(),p.getMonth(),p.getDate());b.setHours(u,g,0,0),b<=p&&b.setDate(b.getDate()+1);const l=b.getTime()-p.getTime();return R.log("Reloading page at",n,"in",Math.floor(l/1e3/60),"minutes"),setTimeout(t,l)}const i=()=>{R.log("Timeout reached! "),window.location.reload(!0)};_.useLayoutEffect(()=>{const t=[e(i,"00:00"),e(i,"03:00"),e(i,"06:00"),e(i,"09:00"),e(i,"12:00"),e(i,"15:00"),e(i,"18:00"),e(i,"21:00")];return()=>{t.forEach(n=>{n&&clearTimeout(n)})}},[])},Fn=k.div`
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
`;class Ee extends _.Component{constructor(i){super(i),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,t){this.setState({error:i,errorInfo:t}),R.error("ErrorBoundary caught an error:",i,t)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?o.jsxs(Fn,{children:[o.jsx("h2",{children:"Something went wrong"}),o.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,o.jsxs("div",{children:[o.jsx("button",{onClick:this.handleReset,children:"Try Again"}),o.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Gn=ut`
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
`,Un=k.div`
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
`;function zn(){return Hn(),o.jsxs(Un,{children:[o.jsx(Gn,{}),o.jsxs("div",{className:"main",children:[o.jsx(Ee,{children:o.jsx(Wo,{})}),o.jsx(Ee,{children:o.jsx(Nn,{})})]}),o.jsx(pt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Kn(){return o.jsx(Ee,{children:o.jsxs(ht,{children:[o.jsx(we,{path:"/demo",element:o.jsx(Ge,{})}),o.jsx(we,{path:"/tiling-demo",element:o.jsx(Ge,{})}),o.jsx(we,{path:"*",element:o.jsx(zn,{})})]})})}const qn=mt.createRoot(document.getElementById("root"));qn.render(o.jsx(_.StrictMode,{children:o.jsx(Ee,{children:o.jsx(Yt,{children:o.jsx(gt,{children:o.jsx(Kn,{})})})})}));
