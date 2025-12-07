import{d as O,R as _,j as n,I as U,r as k,l as $e,P as Ge,W as ze,b as Ke,e as qe,f as Xe,h as Je,i as Qe,k as Ze,m as et,n as tt,o as nt,T as ot,p as it,s as rt,y as st,q as at,t as ct,u as ge,L as lt,v as dt,B as ft}from"./react-vendor-DpXkFr_3.js";import{D as $}from"./date-vendor-BDx6lZXm.js";import{n as B}from"./vendor-BB6m5FwF.js";import{m as ut,a as ht,b as pt,c as mt,d as gt,e as xt,f as be,g as Et,h as wt,i as yt,j as At,k as bt,l as Tt,n as St,o as _t,p as Lt,q as jt,r as Rt,s as Nt,t as _e,u as kt,v as Ct}from"./ui-vendor-C7t39j5V.js";import{a as v,q as Ot}from"./utils-vendor-CS7yL0aL.js";import{c as oe,a as ie}from"./ha-vendor-CoU0AojH.js";import{t as Dt}from"./chart-vendor-ClWajKr-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const E of u.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();const It=O.div`
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
`,re=({visible:e,children:i,onClick:t,onClose:o,fullsize:a=!1})=>{const u=o||t,E=g=>{g.stopPropagation(),g.preventDefault(),u()};return _.useEffect(()=>{if(e){const g=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${g}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,g)}}},[e]),e?n.jsxs(It,{onClick:t,children:[n.jsx("div",{className:"close",onClick:E,children:n.jsx(U,{path:ut,size:2})}),n.jsx("div",{className:B("content",{fullsize:a}),onClick:g=>g.stopPropagation(),children:i})]}):null},j={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},vt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BUTTONS_WS_URL:"ws://192.168.188.35:5678/",VITE_CALENDARS:'[{"name":"calendar.hamsischwan_s_kalender"},{"name":"calendar.biotonne","icon":"mdiDelete"},{"name":"calendar.gelber_sack","icon":"mdiDelete"},{"name":"calendar.blaue_tonne","icon":"mdiDelete"},{"name":"calendar.schwarze_tonne","icon":"mdiDelete"},{"name":"calendar.familiengeburtstage","icon":"mdiCake"}]',VITE_DOORBELL_CAMERAS:'[{"entity_id":"camera.tuerklingel","orientation":"portrait"},{"entity_id":"camera.eingang","orientation":"wide"},{"entity_id":"camera.weg","orientation":"landscape"}]',VITE_ENTITY_CHARGING_STATE:"binary_sensor.hh_gd_117_e_charging_active",VITE_ENTITY_DOORBELL:"binary_sensor.tuerklingel_person",VITE_ENTITY_DOORBELL_BUTTON:"button.haustur_unlatch_2",VITE_ENTITY_EVERYDAY_CALENDAR:"sensor.everyday_calendar",VITE_ENTITY_GARAGE_DOOR:"cover.garagentor",VITE_ENTITY_PRECLIMATE_START:"button.hh_gd_117_e_preclimate_start",VITE_ENTITY_PRECLIMATE_STATUS:"binary_sensor.hh_gd_117_e_preclimate_status",VITE_ENTITY_PRECLIMATE_STOP:"button.hh_gd_117_e_preclimate_stop",VITE_ENTITY_STATE_OF_CHARGE:"sensor.hh_gd_117_e_state_of_charge",VITE_GEOFOX_SECRET:"vKD)Lt6AtCKb",VITE_GEOFOX_USER:"BjoernGaworski-Dammann",VITE_HASS_ACCESS_TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmYWQ5MzhhMjJlNzc0MzBiYjM0MjdkNzU4ZjYxNWZkZiIsImlhdCI6MTY3MjYwNzAzOCwiZXhwIjoxOTg3OTY3MDM4fQ.7hhjhVp13IEhw3soIcwlcxS2Y94sh8GdH2_jVvlgNuM",VITE_HASS_HOST:"http://homeassistant.local:8123",VITE_LAUNDRY_MACHINES:'[{"name":"New Washer","entity_id":"input_select.wasching_machine_neu_status"},{"name":"Old Washer","entity_id":"input_select.washing_machine_alt_status"},{"name":"Dryer","entity_id":"input_select.dryer_status"}]',VITE_TELEGRAM_BOT_TOKEN:"370225026:AAGM5FD1JpvMnd1ShDkf9sx5Vr4g9rAF69Q",VITE_TELEGRAM_CHAT_ID:"195619890",VITE_WEATHER_API_KEY:"t34finKGz44m6qxPyUqfi2UnecLEa5QM3e9puJN3",VITE_WEATHER_LATITUDE:"53.570",VITE_WEATHER_LONGITUDE:"10.091"},Mt=()=>{const e=(i,t=void 0)=>{const o=vt[`VITE_${i}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),SUPERVISOR_TOKEN:e("SUPERVISOR_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_API_KEY:e("WEATHER_API_KEY",""),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),GEOFOX_SECRET:e("GEOFOX_SECRET",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const i=e("LAUNDRY_MACHINES","[]");try{return typeof i=="string"?JSON.parse(i):i}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const i=e("DOORBELL_CAMERAS","[]");try{return typeof i=="string"?JSON.parse(i):i}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const i=e("CALENDARS","[]");try{return typeof i=="string"?JSON.parse(i):i}catch{return[]}})()}},Be=k.createContext(null),Wt=({children:e})=>{const[i,t]=k.useState(Mt),[o,a]=k.useState(!0);return k.useEffect(()=>{(async()=>{try{const g=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`,b=await v.get(g,{timeout:5e3});b.data&&typeof b.data=="object"&&(t(b.data),j.info("Configuration loaded from API endpoint",{enabledFeatures:Object.keys(b.data).filter(l=>l.startsWith("ENABLE_")&&b.data[l]).map(l=>l.replace("ENABLE_",""))}))}catch(E){j.debug("Failed to load config from API, using defaults:",E.message)}finally{a(!1)}})()},[]),k.useEffect(()=>{const u=i.HASS_ACCESS_TOKEN||"";u&&typeof u=="string"&&u.trim()!==""&&u!=="undefined"&&u!=="null"?(v.defaults.headers.common.Authorization=`Bearer ${u}`,j.debug("Axios Authorization header set from config")):(delete v.defaults.headers.common.Authorization,j.debug("Axios Authorization header removed (add-on mode or no token)"))},[i.HASS_ACCESS_TOKEN]),n.jsx(Be.Provider,{value:{config:i,loading:o},children:e})},V=()=>{const e=k.useContext(Be);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config};let te=0,de=0,J=0;const ee=[],Ye=e=>{const i={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(i.status=e.response.status,i.responseData=e.response.data,i.url=e.config?.url||e.request?.responseURL||"Unknown URL",i.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(i.isNetworkError=!0,i.url=e.config?.url||"Unknown URL",i.message="Network error: No response received from server",e.request.readyState!==void 0&&(i.readyState=e.request.readyState),e.request.status!==void 0&&(i.requestStatus=e.request.status)):(i.message=e.message||"Request setup error",i.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(i.isTimeoutError=!0,i.message="Request timeout: The request took too long to complete"),e.config&&(i.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),i},Pt=(e,i="")=>{const t=Ye(e);J++,te++,ee.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ee.length>10&&ee.shift();const o=[];return i&&o.push(`[${i}]`),o.push("🔴 Axios API Error:"),o.push(`Message: ${t.message}`),t.url&&o.push(`URL: ${t.url}`),t.status&&o.push(`HTTP Status: ${t.status}`),t.code&&o.push(`Error Code: ${t.code}`),t.isNetworkError&&(o.push("Type: Network Error (no response received)"),t.readyState!==void 0&&o.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&o.push("Type: Timeout Error"),t.config&&(o.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),o.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&o.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&o.push("Response Data:",t.responseData),o.push(`Request Stats: ${de} success, ${J} errors (${te} total)`),J>3&&ee.length>0&&o.push("Recent errors pattern:",ee.slice(-5)),j.error(...o),t},Vt=e=>{de++,te++,(te%10===0||J>0)&&j.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:te,stats:`${de} success, ${J} errors`}),J>0&&te%10===0&&de>J&&(j.debug("Request pattern: Errors cleared, connection appears healthy"),J=0,ee.length=0)},G=e=>{const i=Ye(e);return i.isNetworkError?"":i.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":i.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":i.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":i.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":i.status>=500?"Serverfehler: Bitte später erneut versuchen":i.message||"Ein Fehler ist aufgetreten"},He=!1;v.interceptors.request.use(e=>{const i=Date.now();return e.metadata={requestId:i,startTime:Date.now()},typeof window<"u"&&(i%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,j.debug("Axios Defaults State:",{baseURL:v.defaults.baseURL,timeout:v.defaults.timeout,hasAuthHeader:!!v.defaults.headers?.common?.Authorization,authHeaderLength:v.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(v.defaults.headers?.common||{})})),e},e=>(j.error("Axios Request Setup Error:",e),Promise.reject(e)));v.interceptors.response.use(e=>(e.config&&Vt(e.config),e),e=>{const i=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(Pt(e,i),e.config?.metadata){const t=Date.now()-e.config.metadata.startTime;j.error("Request Duration:",`${t}ms`,"Request ID:",e.config.metadata.requestId)}return typeof window<"u"&&window.location&&j.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href}),Promise.reject(e)});const W=(e,i={})=>{const t=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const o=i.INGRESS_URL||"";if(o&&typeof o=="string"&&o.trim()!==""){const u=t.startsWith("/")?t.slice(1):t;return`${window.location.origin}${o}${u}`}const a=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${a}${t}`}return t}},se=(e={})=>{if(typeof window<"u"&&window.location){const i=e.INGRESS_URL||"";if(i&&typeof i=="string"&&i.trim()!=="")return`${window.location.origin}${i.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},$t=()=>{const e=V(),i=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[o,a]=_.useState(null),[u,E]=_.useState(!1),g=i&&t,b=t?W(`/api/states/${t}`,e):null;return _.useEffect(()=>{!g||!b||v(b).then(l=>{l.data.attributes.store!==void 0?a(l.data.attributes.store):a([]),E(!1)}).catch(l=>{E(G(l)),a([])})},[g,b,i,t]),[o,u]},Bt=(e,i)=>{const t=i?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=W(`/api/states/${t}`,i);v.post(o,{state:new Date,attributes:{store:e}}).catch(a=>{j.error("Failed to store everyday calendar data:",a)})},Le=O.div` 

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
`,Yt=({on:e,month:i,day:t})=>{const[o,a]=e,u=o.indexOf(`${i}-${t}`),E=u>-1,g=()=>{a(E?o.toSpliced(u,1):[...o,`${i}-${t}`])};return n.jsx("div",{className:B("dot",{on:E}),onClick:()=>g()})},Ht=()=>{const e=V();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let l=1;l<13;l++){const f=new Date(t,l,0).getDate();for(let y=1;y<=f;y++)o.push({month:l,day:y})}const a=Array.from({length:31},(l,f)=>f+1),u=Array.from({length:12},(l,f)=>f+1),E=_.useState(void 0),[g,b]=$t();return _.useEffect(()=>{g!==null&&E[1](g)},[g]),_.useEffect(()=>{E[0]!==void 0&&Bt(E[0],e)},[E[0],e]),E[0]!==void 0?n.jsxs(Le,{children:[n.jsx("h2",{children:"Jeden Tag ein bißchen"}),b!==!1&&n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[n.jsx("h3",{children:"Fehler!"}),n.jsx("div",{children:b instanceof Error?b.message:String(b)})]}),n.jsxs("div",{className:"calendar",children:[a.map((l,f)=>n.jsx("div",{style:{gridArea:`${l+1} / 1 / ${l+1} / 1`},children:l},f)),u.map((l,f)=>n.jsx("div",{style:{gridArea:`1 / ${l+1} / 1 / ${l+1}`},children:l},f)),o.map((l,f)=>n.jsx("div",{style:{gridArea:`${l.day+1} / ${l.month+1} / ${l.day+1} / ${l.month+1}`},children:n.jsx(Yt,{on:E,month:l.month,day:l.day})},f))]})]}):n.jsx(Le,{className:"loading",children:b!==!1?n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[n.jsx("h3",{children:"Fehler!"}),n.jsx("div",{children:b instanceof Error?b.message:String(b)})]}):n.jsx($e,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},Ut=O.div`
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
  }`,Ft=()=>{const[e,i]=_.useState($.now()),[t,o]=_.useState(!1),a=k.useCallback(()=>o(!0),[]),u=k.useCallback(()=>o(!1),[]);return _.useEffect(()=>{const E=setInterval(()=>i($.now()),1e3);return()=>clearInterval(E)},[]),n.jsxs(n.Fragment,{children:[n.jsxs(Ut,{onClick:a,children:[e.toFormat("HH"),n.jsx("span",{children:":"}),e.toFormat("mm")]}),n.jsx(re,{visible:t,onClick:u,fullsize:!0,children:n.jsx(Ht,{})})]})},Gt=k.memo(Ft),zt=()=>{const e=V(),i=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const o=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[u,E]=_.useState("off"),[g,b]=_.useState(!1),l=i&&t,f=t?W(`/api/states/${t}`,e):null;return _.useEffect(()=>{!l||!f||v(f).then(y=>{E(y.data.state),b(!1)}).catch(y=>{b(G(y))})},[l,f,i,t]),_.useEffect(()=>{let y=null,T=null,x=!0,h=null,p=0,s=!1;async function d(){if(!l||!t||s)return;if(y){try{T&&(T(),T=null),y.close()}catch(c){j.debug("Error closing existing WebSocket connection:",c)}y=null}s=!0;const r=se(e),m=a||o||"";if(!m){s=!1;return}let A;try{A=oe(r,m),x&&b(!1)}catch(c){x&&(j.error("Failed to create WebSocket auth:",c),b(c instanceof Error?c.message:String(c))),s=!1;return}try{y=await ie({auth:A}),y.addEventListener("ready",()=>{x&&(j.debug("WebSocket connection ready for doorbell"),p=0,b(!1))}),y.addEventListener("disconnected",()=>{if(x&&!s){j.debug("WebSocket disconnected for doorbell, will attempt to reconnect"),h&&clearTimeout(h),y=null,T=null;const w=Math.min(1e3*Math.pow(2,p),3e4);p++,h=setTimeout(()=>{x&&!s&&(j.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${p})`),d())},w)}});const c=w=>{if(x){const S=w.variables.trigger.to_state.state;E(S)}};T=await y.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),s=!1}catch(c){if(s=!1,x){j.error("Failed to setup WebSocket connection:",c),j.error("WebSocket error details:",{message:c instanceof Error?c.message:String(c),code:c.code,name:c.name,wsUrl:A?.wsUrl,host:r,tokenLength:m?m.length:0}),c.code===2&&j.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),b(c instanceof Error?c.message:String(c));const w=Math.min(1e3*Math.pow(2,p),3e4);p++,h=setTimeout(()=>{x&&(j.debug(`Attempting to reconnect WebSocket for doorbell after error (attempt ${p})`),d())},w)}}}return d(),()=>{x=!1,h&&clearTimeout(h),T&&T(),y&&y.close()}},[l]),[u,g]},Kt=(e={})=>{const i=e.ENTITY_DOORBELL_BUTTON||"";i&&v.post(W("/api/services/button/press",e),{entity_id:i}).catch(t=>{j.error("Failed to unlatch front door:",t)})},D={portrait:360/480,landscape:1920/1072,wide:770/216};function qt(e){const i={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&i.hasOwnProperty(t.orientation)&&i[t.orientation]++}),i}function Ue(e,i,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,a=qt(e);return o===1?Xt(e[0],i,t):o===2?Jt(a,e,i,t):o===3?Qt(a,e,i,t):o===4?Zt(a,e,i,t):{videos:[],totalArea:0,efficiency:0}}function Xt(e,i,t){const o=D[e.orientation];let a,u;const E=i/t;return o>E?(a=i,u=i/o):(u=t,a=t*o),{videos:[{x:(i-a)/2,y:(t-u)/2,width:a,height:u,orientation:e.orientation}],totalArea:a*u,efficiency:a*u/(i*t)*100}}function Jt(e,i,t,o){if(e.portrait>0)return Te(e,i,t,o);const a=[];e.landscape>0&&a.push("landscape"),e.wide>0&&a.push("wide");const u=a[0]||i[0].orientation,E=a[1]||i[1].orientation,g=D[u],b=D[E];if(e.landscape===1&&e.wide===1){const h=D.landscape,p=D.wide,s=t,d=s/h,r=s/p,m=d+r;let A,c,w;if(m<=o)A=d,c=r,w=s;else{const M=o/m;A=d*M,c=r*M,w=c*p}const S=(t-w)/2,L=q(i,[{x:S,y:0,width:w,height:c,orientation:"wide"},{x:S,y:c,width:w,height:A,orientation:"landscape"}]),N=w*A+w*c,C=N/(t*o)*100;return{videos:L,totalArea:N,efficiency:C}}if(e.wide===2){const h=D.wide,p=t,s=p/h,d=s*2;let r;d<=o?r=s:r=o/2;const A=q(i,[{x:0,y:0,width:p,height:r,orientation:"wide"},{x:0,y:r,width:p,height:r,orientation:"wide"}]),c=p*r*2,w=c/(t*o)*100;return{videos:A,totalArea:c,efficiency:w}}const l=[()=>{const h=t,p=h/2,s=h/2,d=p/g,r=s/b;return Math.max(d,r)<=o?{positions:[{x:0,y:(o-d)/2,width:p,height:d,orientation:u},{x:p,y:(o-r)/2,width:s,height:r,orientation:E}],totalArea:p*d+s*r}:null},()=>{const h=o,p=h/2,s=h/2,d=p*g,r=s*b;return Math.max(d,r)<=t?{positions:[{x:(t-d)/2,y:0,width:d,height:p,orientation:u},{x:(t-r)/2,y:p,width:r,height:s,orientation:E}],totalArea:d*p+r*s}:null}];let f=null,y=0;for(const h of l){const p=h();p&&p.totalArea>y&&(y=p.totalArea,f=p)}if(!f){const h=t/2,p=t/2,s=Math.min(h/g,o),d=Math.min(p/b,o);f={positions:[{x:0,y:(o-s)/2,width:h,height:s,orientation:u},{x:h,y:(o-d)/2,width:p,height:d,orientation:E}],totalArea:h*s+p*d}}const T=q(i,f.positions),x=f.totalArea/(t*o)*100;return{videos:T,totalArea:f.totalArea,efficiency:x}}function Te(e,i,t,o){const a=e.portrait,u=i.length-a;if((a===3||a===4)&&u===0){const x=D.portrait,h=t/a,p=h/x,s=p<o?(o-p)/2:0,d=Math.min(p,o),r=[];let m=0;for(let w=0;w<a;w++){const S=Math.min(h,d*x);r.push({x:w*h+(h-S)/2,y:s,width:S,height:d,orientation:"portrait"}),m+=S*d}const A=q(i,r),c=m/(t*o)*100;return{videos:A,totalArea:m,efficiency:c}}i.filter(x=>x.orientation==="portrait");const E=i.filter(x=>x.orientation!=="portrait"),g=a>0?Math.min(t*.4,t*.5):0,b=t-g,l=[];let f=0;if(a===2&&u===0){const x=D.portrait,h=t/2,p=h/x,s=o;let d,r;p<=s?(r=p,d=h):(r=s,d=s*x);const m=(o-r)/2;l.push({x:(h-d)/2,y:m,width:d,height:r,orientation:"portrait"}),l.push({x:h+(h-d)/2,y:m,width:d,height:r,orientation:"portrait"}),f=d*r*2}else if(a===1&&u===1){const x=D.portrait,h=E[0],p=D[h.orientation],s=x+p,d=t*(x/s),r=t*(p/s),m=d/x,A=r/p,c=Math.min(o,Math.min(m,A)),w=(o-c)/2;l.push({x:0,y:w,width:d,height:c,orientation:"portrait"}),l.push({x:d,y:w,width:r,height:c,orientation:h.orientation}),f=d*c+r*c}else if(a===1&&u===2&&e.landscape===1&&e.wide===1){const x=D.portrait,h=D.wide,p=D.landscape,s=o,d=o*x,r=o/(1/h+1/p),m=r/h,A=r/p,c=d+r;if(Math.abs(c-t)<.1)l.push({x:0,y:0,width:d,height:s,orientation:"portrait"}),f+=d*s,E.find(L=>L.orientation==="wide")&&(l.push({x:0+d,y:0,width:r,height:m,orientation:"wide"}),f+=r*m),E.find(L=>L.orientation==="landscape")&&(l.push({x:0+d,y:m,width:r,height:A,orientation:"landscape"}),f+=r*A);else{const w=t/c,S=d*w,R=S/x,L=r*w,N=o/R;let C=S*N,M=o,I=L*N,Y=I/h,P=I/p,H=C+I;if(H>t){const X=t/H;C=C*X,M=C/x,I=I*X,Y=I/h,P=I/p,H=C+I,H>t&&(I=t-C,Y=I/h,P=I/p)}const F=C+I;if(F>t){const X=t/F;C=C*X,M=C/x,I=I*X,Y=I/h,P=I/p}const z=0;l.push({x:z,y:0,width:C,height:M,orientation:"portrait"}),f+=C*M,E.find(X=>X.orientation==="wide")&&(l.push({x:z+C,y:0,width:I,height:Y,orientation:"wide"}),f+=I*Y),E.find(X=>X.orientation==="landscape")&&(l.push({x:z+C,y:Y,width:I,height:P,orientation:"landscape"}),f+=I*P)}}else if(a===1&&u===3){const x=D.portrait,h=o,p=h*x,s=p,d=t-s;l.push({x:0,y:0,width:p,height:h,orientation:"portrait"}),f+=p*h;const r=o/3;for(let m=0;m<E.length;m++){const A=E[m],c=D[A.orientation],w=r,S=d;let R,L;S/c<=w?(R=S,L=R/c):(L=w,R=L*c);const N=m*r+(r-L)/2;l.push({x:s+(d-R)/2,y:N,width:R,height:L,orientation:A.orientation}),f+=R*L}}else if(a===2&&u===1){const x=D.portrait,h=E[0],p=D[h.orientation],s=o/2,d=s*x,r=t-d,m=o*p;let A,c;m<=r?(c=o,A=c*p):(A=r,c=A/p);const w=d,S=s,R=(o-c)/2,L=(o/2-S)/2,N=o/2+(o/2-S)/2;l.push({x:0,y:R,width:A,height:c,orientation:h.orientation}),f+=A*c,l.push({x:r,y:L,width:w,height:S,orientation:"portrait"}),f+=w*S,l.push({x:r,y:N,width:w,height:S,orientation:"portrait"}),f+=w*S}else if(a===1&&u===2){const x=D.portrait,h=o,p=h*x,s=p,d=t-s;l.push({x:0,y:0,width:p,height:h,orientation:"portrait"}),f+=p*h;const r=o/2;for(let m=0;m<E.length;m++){const A=E[m],c=D[A.orientation],w=r,S=d;let R,L;S/c<=w?(R=S,L=R/c):(L=w,R=L*c);const N=m*r+(r-L)/2;l.push({x:s+(d-R)/2,y:N,width:R,height:L,orientation:A.orientation}),f+=R*L}}else{const x=a;if(x>0){const h=o/x,p=D.portrait;for(let s=0;s<x;s++){const d=Math.min(h,g/p),r=d*p,m=s*h+(h-d)/2;l.push({x:(g-r)/2,y:m,width:r,height:d,orientation:"portrait"}),f+=r*d}}if(E.length>0){const h=o/E.length;for(let p=0;p<E.length;p++){const s=E[p],d=D[s.orientation],r=h,m=b;let A,c;m/d<=r?(A=m,c=A/d):(c=r,A=c*d);const w=p*h+(h-c)/2;l.push({x:g+(b-A)/2,y:w,width:A,height:c,orientation:s.orientation}),f+=A*c}}}const y=q(i,l),T=f/(t*o)*100;return{videos:y,totalArea:f,efficiency:T}}function q(e,i){const t=new Array(i.length),o=new Set,a=new Set;for(let g=0;g<i.length;g++){const b=i[g];for(let l=0;l<e.length;l++)if(!o.has(l)&&e[l].orientation===b.orientation){t[g]={...b,orientation:e[l].orientation},o.add(l),a.add(g);break}}const u=[];for(let g=0;g<i.length;g++)a.has(g)||u.push(g);let E=0;for(let g=0;g<e.length;g++)if(!o.has(g)&&E<u.length){const b=u[E];t[b]={...i[b],orientation:e[g].orientation},E++}return t}function Qt(e,i,t,o){if(e.portrait>0)return Te(e,i,t,o);if(e.landscape===2&&e.wide===1){const s=D.landscape,d=D.wide,r=t,m=r/d,A=o-m,c=t/2,w=c/s;let S,R,L,N;if(m<=o&&w<=A)S=r,R=m,L=c,N=w;else{const F=o/(m+w),z=Math.min(1,F);R=m*z,S=R*d,N=w*z,L=N*s}const C=(t-S)/2,M=R+(A-N)/2,Y=q(i,[{x:C,y:0,width:S,height:R,orientation:"wide"},{x:0,y:M,width:L,height:N,orientation:"landscape"},{x:L,y:M,width:L,height:N,orientation:"landscape"}]),P=S*R+L*N*2,H=P/(t*o)*100;return{videos:Y,totalArea:P,efficiency:H}}if(e.landscape===1&&e.wide===2){const s=D.landscape,d=D.wide,r=t/2,m=r/d,c=o-m,w=c*s;let S,R,L,N;if(m<=o&&w<=t&&m+c<=o)S=r,R=m,L=w,N=c;else{const z=m+c,me=o/z;S=r,R=m*me,N=c*me,L=N*s}const C=0,M=t/2,I=(t-L)/2,P=q(i,[{x:C,y:0,width:S,height:R,orientation:"wide"},{x:M,y:0,width:S,height:R,orientation:"wide"},{x:I,y:R,width:L,height:N,orientation:"landscape"}]),H=S*R*2+L*N,F=H/(t*o)*100;return{videos:P,totalArea:H,efficiency:F}}if(e.wide===3){const s=D.wide,d=t/2,r=d/s,A=o-r,c=A*s;let w,S,R,L;if(r<=o&&c<=t&&r+A<=o)w=d,S=r,R=c,L=A;else{const F=r+A,z=o/F;w=d,S=r*z,L=A*z,R=L*s,R>t&&(R=t,L=R/s)}const N=0,C=t/2,M=(t-R)/2,Y=q(i,[{x:N,y:0,width:w,height:S,orientation:"wide"},{x:C,y:0,width:w,height:S,orientation:"wide"},{x:M,y:S,width:R,height:L,orientation:"wide"}]),P=w*S*2+R*L,H=P/(t*o)*100;return{videos:Y,totalArea:P,efficiency:H}}if(e.landscape===3){const s=D.landscape,d=t/(s*1.5),r=Math.min(o,d),m=r/2,A=r,c=m*s,w=A*s,S=(o-r)/2,R=[{x:0,y:S,width:c,height:m,orientation:"landscape"},{x:0,y:S+m,width:c,height:m,orientation:"landscape"},{x:c,y:S,width:w,height:A,orientation:"landscape"}],L=q(i,R),N=c*r+w*r,C=N/(t*o)*100;return{videos:L,totalArea:N,efficiency:C}}const a=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)a.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)a.push("wide");const u=a[0]||i[0].orientation,E=a[1]||i[1].orientation,g=a[2]||i[2].orientation,b=D[u],l=D[E],f=D[g],y=[()=>{const s=t*.6,d=t*.4,r=s/b,m=d/l,A=d/f,c=m+A;return r<=o&&c<=o?{positions:[{x:0,y:(o-r)/2,width:s,height:r,orientation:u},{x:s,y:0,width:d,height:m,orientation:E},{x:s,y:m,width:d,height:A,orientation:g}],totalArea:s*r+d*m+d*A}:null},()=>{const s=o*.5,d=o*.5,r=s*b,m=s*l,A=d*f;return r+m<=t&&A<=t?{positions:[{x:0,y:0,width:r,height:s,orientation:u},{x:r,y:0,width:m,height:s,orientation:E},{x:(t-A)/2,y:s,width:A,height:d,orientation:g}],totalArea:r*s+m*s+A*d}:null},()=>{const s=t/3,d=s/b,r=s/l,m=s/f;return Math.max(d,r,m)<=o?{positions:[{x:0,y:(o-d)/2,width:s,height:d,orientation:u},{x:s,y:(o-r)/2,width:s,height:r,orientation:E},{x:s*2,y:(o-m)/2,width:s,height:m,orientation:g}],totalArea:s*d+s*r+s*m}:null}];let T=null,x=0;for(const s of y){const d=s();d&&d.totalArea>x&&(x=d.totalArea,T=d)}if(!T){const s=t/3,d=Math.min(s/b,o),r=Math.min(s/l,o),m=Math.min(s/f,o);T={positions:[{x:0,y:(o-d)/2,width:s,height:d,orientation:u},{x:s,y:(o-r)/2,width:s,height:r,orientation:E},{x:s*2,y:(o-m)/2,width:s,height:m,orientation:g}],totalArea:s*d+s*r+s*m}}const h=q(i,T.positions),p=T.totalArea/(t*o)*100;return{videos:h,totalArea:T.totalArea,efficiency:p}}function Zt(e,i,t,o){if(e.portrait>0)return Te(e,i,t,o);const a=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)a.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)a.push("wide");const u=a[0]||i[0].orientation,E=a[1]||i[1].orientation,g=a[2]||i[2].orientation,b=a[3]||i[3].orientation,l=D[u],f=D[E],y=D[g],T=D[b],x=[()=>{const r=t/2,m=o/2,A=Math.min(r,m*l),c=A/l,w=Math.min(r,m*f),S=w/f,R=Math.min(r,m*y),L=R/y,N=Math.min(r,m*T),C=N/T;return{positions:[{x:(r-A)/2,y:(m-c)/2,width:A,height:c,orientation:u},{x:r+(r-w)/2,y:(m-S)/2,width:w,height:S,orientation:E},{x:(r-R)/2,y:m+(m-L)/2,width:R,height:L,orientation:g},{x:r+(r-N)/2,y:m+(m-C)/2,width:N,height:C,orientation:b}],totalArea:A*c+w*S+R*L+N*C}},()=>{const r=t*.6,m=t*.4,A=r/l,c=o/3,w=Math.min(m,c*f),S=w/f,R=Math.min(m,c*y),L=R/y,N=Math.min(m,c*T),C=N/T;return A<=o?{positions:[{x:0,y:(o-A)/2,width:r,height:A,orientation:u},{x:r,y:0,width:w,height:S,orientation:E},{x:r,y:c,width:R,height:L,orientation:g},{x:r,y:c*2,width:N,height:C,orientation:b}],totalArea:r*A+w*S+R*L+N*C}:null},()=>{const r=t/4,m=r/l,A=r/f,c=r/y,w=r/T;return Math.max(m,A,c,w)<=o?{positions:[{x:0,y:(o-m)/2,width:r,height:m,orientation:u},{x:r,y:(o-A)/2,width:r,height:A,orientation:E},{x:r*2,y:(o-c)/2,width:r,height:c,orientation:g},{x:r*3,y:(o-w)/2,width:r,height:w,orientation:b}],totalArea:r*m+r*A+r*c+r*w}:null}];let h=null,p=0;for(const r of x){const m=r();m&&m.totalArea>p&&(p=m.totalArea,h=m)}if(!h){const r=t/2,m=o/2,A=Math.min(m,r/l),c=Math.min(m,r/f),w=Math.min(m,r/y),S=Math.min(m,r/T);h={positions:[{x:(r-r)/2,y:(m-A)/2,width:r,height:A,orientation:u},{x:r+(r-r)/2,y:(m-c)/2,width:r,height:c,orientation:E},{x:(r-r)/2,y:m+(m-w)/2,width:r,height:w,orientation:g},{x:r+(r-r)/2,y:m+(m-S)/2,width:r,height:S,orientation:b}],totalArea:r*A+r*c+r*w+r*S}}const s=q(i,h.positions),d=h.totalArea/(t*o)*100;return{videos:s,totalArea:h.totalArea,efficiency:d}}const en=e=>{const i=V();i.HASS_HOST;const t=i.HASS_ACCESS_TOKEN||"",o=i.SUPERVISOR_TOKEN||"",[a,u]=_.useState({}),[E,g]=_.useState(!0),[b,l]=_.useState(null);return _.useEffect(()=>{if(!e||e.length===0){g(!1);return}let f=!0;async function y(){g(!0),l(null);try{const T=e.map(async h=>{try{const p=W(`/api/states/${h}`,i),d=(await v(p)).data?.attributes?.access_token||null;return{entityId:h,accessToken:d}}catch(p){return j.error(`Failed to fetch access token for ${h}:`,p),{entityId:h,accessToken:null}}}),x=await Promise.all(T);if(f){const h={};x.forEach(({entityId:p,accessToken:s})=>{s&&(h[p]=s)}),u(h),g(!1)}}catch(T){f&&(j.error("Failed to fetch camera access tokens:",T),l(G(T)),g(!1))}}return y(),()=>{f=!1}},[e?.length,e?.join(",")]),_.useEffect(()=>{if(!e||e.length===0)return;let f=!0,y=null;async function T(){if(f)try{const x=e.map(async p=>{try{const s=W(`/api/states/${p}`,i),r=(await v(s)).data?.attributes?.access_token||null;return{entityId:p,accessToken:r}}catch(s){return j.debug(`Failed to refresh access token for ${p}:`,s),null}}),h=await Promise.all(x);f&&u(p=>{const s={...p};return h.forEach(d=>{d&&d.accessToken&&(s[d.entityId]=d.accessToken)}),s})}catch(x){f&&j.debug("Failed to refresh camera access tokens:",x)}}return y=setInterval(T,300*1e3),()=>{f=!1,y&&clearInterval(y)}},[e?.length,e?.join(",")]),_.useEffect(()=>{if(!e||e.length===0)return;let f=null,y=[],T=!0,x=null,h=0,p=!1;async function s(){if(p)return;if(f){try{y.forEach(A=>{A&&A()}),y=[],f.close()}catch(A){j.debug("Error closing existing WebSocket connection:",A)}f=null}p=!0;const d=se(i),r=o||t||"";if(j.debug("Camera tokens WebSocket auth:",{isDevelopment:He,hasSupervisorToken:!!o,hasAccessToken:!!t}),!r){j.debug("Skipping WebSocket connection for camera tokens - no access token (using REST API only)"),p=!1;return}let m;try{m=oe(d,r),T&&l(!1)}catch(A){T&&(j.error("Failed to create WebSocket auth for camera tokens:",A),l(A instanceof Error?A.message:String(A))),p=!1;return}try{f=await ie({auth:m}),f.addEventListener("ready",()=>{T&&(j.debug("WebSocket connection ready for camera tokens"),h=0,l(!1))}),f.addEventListener("disconnected",()=>{if(T&&!p){j.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),x&&clearTimeout(x),f=null,y=[];const A=Math.min(1e3*Math.pow(2,h),3e4);h++,x=setTimeout(()=>{T&&!p&&(j.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${h})`),s())},A)}});for(const A of e){const c=S=>{if(T){const L=S.variables.trigger.to_state?.attributes?.access_token||null;u(N=>L?{...N,[A]:L}:N)}},w=await f.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:A}});y.push(w)}p=!1}catch(A){if(p=!1,T){j.error("Failed to setup WebSocket connection for camera tokens:",A),l(A instanceof Error?A.message:String(A));const c=Math.min(1e3*Math.pow(2,h),3e4);h++,x=setTimeout(()=>{T&&(j.debug(`Attempting to reconnect WebSocket for camera tokens after error (attempt ${h})`),s())},c)}}}return s(),()=>{T=!1,x&&clearTimeout(x),y.forEach(d=>{d&&d()}),f&&f.close()}},[e?.length,e?.join(",")]),[a,E,b]},tn=(e,i=null,t=null)=>{if(!e)return null;let o=t||"";if(!o&&!He&&typeof window<"u"&&window.location){const u=window.location.protocol,E=window.location.hostname,g=window.location.port?`:${window.location.port}`:"";o=`${u}//${E}${g}`}if(!o)return j.warn("HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL"),null;const a=`${o}/api/camera_proxy_stream/${e}`;return i?`${a}?token=${encodeURIComponent(i)}`:a},je=45e3,nn=O.div`
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
`,on=()=>{const e=V(),i=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[];if(!i)return null;const[o,a]=_.useState(!1),[u]=zt(),[E,g]=_.useState(void 0),[b,l]=_.useState(100),[f,y]=_.useState("0"),T=_.useMemo(()=>t.map(d=>d.entity_id).filter(Boolean),[t]),[x]=en(T);_.useEffect(()=>{if(u==="off"&&o){const d=window.setTimeout(()=>{a(!1),g(void 0)},je);return g(d),y(je+"ms"),l(0),()=>{d&&window.clearTimeout(d)}}else u==="on"&&(y(0),l(100),a(!0))},[u,o]),_.useEffect(()=>{u==="on"&&E!==void 0&&(window.clearTimeout(E),y(0),l(100),g(void 0))},[E,u]);const[h,p]=_.useState(null),s=()=>{h===null?p("confirm"):h==="confirm"&&(p("opening"),Kt(e),setTimeout(()=>p(null),2e3))};return _.useEffect(()=>{if(h==="confirm"){const d=setTimeout(()=>{p(null)},3e3);return()=>{clearTimeout(d)}}},[h]),_.useEffect(()=>{o||p(null)},[o]),n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>a(d=>!d),children:"CCTV"}),n.jsx(re,{visible:o,onClick:s,onClose:()=>{a(!1),p(null)},fullsize:!0,children:n.jsxs(nn,{onClick:s,children:[n.jsx(Ge,{completed:b,height:10,bgColor:E===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:f,transitionTimingFunction:"linear"}),n.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const d=t.map(S=>({orientation:S.orientation||"landscape"})),r=window.innerWidth,m=window.innerHeight-10,A=Ue(d,r,m),c={portrait:t.filter(S=>(S.orientation||"landscape")==="portrait"),landscape:t.filter(S=>(S.orientation||"landscape")==="landscape"),wide:t.filter(S=>S.orientation==="wide")},w={portrait:0,landscape:0,wide:0};return A.videos.map((S,R)=>{const L=S.orientation,N=w[L],C=c[L][N];if(!C)return null;w[L]++;const M=x[C.entity_id]||null,I=tn(C.entity_id,M,e.HASS_HOST);return I?n.jsxs("div",{className:"video-container",style:{left:`${S.x}px`,top:`${S.y}px`,width:`${S.width}px`,height:`${S.height}px`},children:[n.jsx("img",{src:I,className:L,alt:"Camera stream",crossOrigin:"anonymous"},`${C.entity_id}-${R}`),n.jsx("div",{className:"video-overlay",onClick:()=>s()})]},`${L}-${N}-${R}`):null})})()}),h==="confirm"&&n.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),h==="opening"&&n.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},rn=O.div`
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

`,sn=({nextWeek:e,previousWeek:i,startWeekWithToday:t})=>n.jsxs(rn,{children:[n.jsxs("div",{className:"buttons",children:[n.jsx(U,{path:ht,size:"32px",color:"#ffffff",onClick:i}),n.jsx(U,{path:pt,size:"32px",color:"#ffffff",onClick:e}),n.jsx("button",{onClick:t,children:"Today"}),n.jsx(on,{})]}),n.jsx(Gt,{}),n.jsx(U,{path:mt,size:"32px",color:"#ffffff",className:B("indicator")})]}),an=k.memo(sn),cn=6e4,Se=(e=cn,i=void 0)=>{const[t,o]=_.useState(!0);return _.useEffect(()=>{const a=setInterval(()=>{o(u=>!u)},e);return()=>{clearInterval(a)}},[e,i]),t},ln={mdiDelete:xt,mdiCake:gt},dn=e=>{if(!e||typeof e!="string")return;const i=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return ln[i]||void 0},fn=(e,i,t,o,a)=>v(a(e.name,{start:i.toISO(),end:t.toISO()}),{timeout:1e4}).then(u=>{!u.data||!Array.isArray(u.data)||u.data.forEach(E=>{const g="dateTime"in E.start?$.fromISO(E.start.dateTime):$.fromSQL(E.start.date);let b;"dateTime"in E.end?b=Math.floor($.fromISO(E.end.dateTime).diff(i,"days").as("days")):b=Math.floor($.fromSQL(E.end.date).diff(i,"days").as("days"))-1;const l=Math.floor(g.diff(i,"days").as("days"));b>=o.length&&(b=o.length-1);const f="dateTime"in E.start?"events":"allDay";if(l>=0&&l<o.length)for(let y=l;y<=b;y++)o[y][f]=[...o[y][f],{...E,icon:e.icon}]})}).catch(u=>{throw u}),Re=new Map,un=300*1e3,hn=e=>e.toISODate(),pn=(e,i,t,o,a,u,E,g)=>{const b=[0,1,2,3,4,5].map(x=>e.plus({days:x}).startOf("day"));b[6]=e.plus({days:6}).endOf("day");const l=hn(e),f=Re.get(l);if(f&&Date.now()-f.timestamp<un){t(f.data);return}const y=b.map(x=>({date:x,allDay:[],events:[]}));if(!E||E.length===0){t(y),o(!1);return}const T=new AbortController;a.current&&a.current.abort(),a.current=T;try{o(!0);const x=E.map(h=>fn(h,b[0],b[6],y,g));Promise.all(x).then(()=>{T.signal.aborted||(Re.set(l,{data:y,timestamp:Date.now()}),t(y),u(!1))}).catch(h=>{T.signal.aborted||u(G(h))}).finally(()=>{T.signal.aborted||o(!1)})}catch(x){T.signal.aborted||(u(G(x)),o(!1))}},Ne=[],mn=e=>{const i=V(),t=i.CALENDARS||[],o=_.useMemo(()=>t.map(s=>({name:s.name,icon:dn(s.icon)})),[t]),a=_.useCallback(s=>W(`/api/calendars/${s}`,i),[i]),u=_.useCallback((s,d)=>`${a(s)}?${Ot.stringify(d)}`,[a]),[E,g]=_.useState(Ne),[b,l]=_.useState(!1),[f,y]=_.useState(!1),T=Se(6e4,"Calendar"),[x,h]=_.useState(null),p=k.useRef(null);return _.useEffect(()=>(e!==void 0&&((x===null||!x.equals(e))&&(g(Ne),h(e)),pn(e,E,g,l,p,y,o,u)),()=>{p.current&&p.current.abort()}),[e,T,o]),[E,f]};function ne(e){const[i,t]=_.useState(!1);function o({key:u}){u===e&&t(!0)}const a=({key:u})=>{u===e&&t(!1)};return _.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",a)}),[e]),i}const gn=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return $.fromJSDate(o)},xn=e=>{const i=()=>e(g=>g.plus({days:7})),t=ne("ArrowRight");_.useEffect(()=>{t&&i()},[t]);const o=()=>e(g=>g.minus({days:7})),a=ne("ArrowLeft");_.useEffect(()=>{a&&o()},[a]);const u=()=>e(gn()),E=ne("t");return _.useEffect(()=>{E&&u()},[E]),{nextWeek:i,previousWeek:o,startWeekWithToday:u}},En=e=>{const[i,t]=k.useState(0),[o,a]=k.useState(0),u=50;return{onTouchStart:l=>{a(0),t(l.targetTouches[0].clientX)},onTouchMove:l=>a(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!i||!o)return;const l=i-o,f=l>u,y=l<-u;f&&e.onSwipedLeft(),y&&e.onSwipedRight()}}},ke=e=>$.fromISO(e).toLocaleString($.TIME_24_SIMPLE),xe=e=>e.toFormat("c")>=6,Ee=e=>e.hasSame($.now(),"day"),wn=O.div`
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
`,yn=()=>{const[e,i]=_.useState(void 0),[t,o]=mn(e),{nextWeek:a,previousWeek:u,startWeekWithToday:E}=xn(i);_.useEffect(()=>{E()},[]);const g=En({onSwipedLeft:()=>a(),onSwipedRight:()=>u()}),b=k.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=k.useMemo(()=>t.slice(0,7),[t]);return n.jsxs(wn,{...g,children:[n.jsx(an,{nextWeek:a,previousWeek:u,startWeekWithToday:E}),n.jsxs("div",{className:"schedule",children:[l.map((f,y)=>n.jsx("div",{className:B({weekend:xe(f.date),today:Ee(f.date)},"caption"),children:n.jsx("h2",{children:f.date.toLocaleString(b)})},y)),l.map((f,y)=>n.jsx("div",{className:B("allDayRow",{weekend:xe(f.date),today:Ee(f.date)}),children:f.allDay.map((T,x)=>n.jsx("div",{className:"allDayEvent",children:T.summary},x))},y)),l.map((f,y)=>n.jsx("div",{className:B("eventRow",{weekend:xe(f.date),today:Ee(f.date)}),children:f.events.map((T,x)=>n.jsxs("div",{className:"event",children:[n.jsx("div",{children:T.summary}),n.jsxs("h3",{children:[T.icon&&n.jsx(U,{path:T.icon,size:"1rem",color:"#ffffff"}),ke(T.start.dateTime)," - ",ke(T.end.dateTime)]})]},x))},y))]}),t.length===0&&n.jsx("div",{className:"loading",children:o!==!1?n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[n.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),n.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):n.jsx($e,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&n.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:n.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},he={"clear-day":{icon:nt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:tt,label:"Klar",color:"#eeeef5"},rain:{icon:et,label:"Regen",color:"#80a5d6"},snow:{icon:Ze,label:"Schnee",color:"#8c82ce"},sleet:{icon:Qe,label:"Graupel",color:"#aba4db"},wind:{icon:Je,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:Xe,label:"Neblig",color:"#d5dae2"},cloudy:{icon:qe,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:Ke,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:ze,label:"Teils bewölkt",color:"#d5dae2"}},An=e=>{const[i,t]=_.useState([]),[o,a]=_.useState(!1),u=Se(6e4*10,"Weather"),E=V(),g=E.ENABLE_WEATHER||!1,b=E.WEATHER_API_KEY||"",l=E.WEATHER_LATITUDE,f=E.WEATHER_LONGITUDE,y=g&&b&&l&&f,T=()=>`./forecast/${b}/${l},${f}?&units=si&exclude=minutely`;return _.useEffect(()=>{y&&v(T()).then(x=>{t(x.data),a(!1)}).catch(x=>{a(G(x))}).finally(()=>{})},[u,e,y,g,b,l,f]),[i,o]},bn=it(rt),Ce=O.div`

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
`,Oe=k.memo(({data:e,daily:i=!1})=>n.jsxs("div",{children:[n.jsxs("div",{children:[!i&&$.fromSeconds(e.time).toLocaleString($.TIME_24_SIMPLE),i&&$.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),n.jsx("div",{children:n.jsx(ye,{icon:e.icon})}),n.jsx("div",{children:n.jsxs("strong",{children:[!i&&n.jsxs(n.Fragment,{children:[Math.round(e.temperature),"°"]}),i&&n.jsxs(n.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),n.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),n.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Tn=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(i=>({color:he[i.icon]?.color||"#ffffff",text:he[i.icon]?.label||"",annotation:`${Math.round(i.temperature)}°`,time:i.time})),ye=({icon:e})=>{const i=he[e];return n.jsx(i.icon,{size:60,color:"#ffffff"})},Sn=()=>{if(!(V().ENABLE_WEATHER||!1))return null;const[t,o]=An(),[a,u]=_.useState(!1),E=ne("w"),g=_.useRef(),b=k.useCallback(()=>u(x=>!x),[]),l=k.useCallback(()=>u(!0),[]),f=k.useMemo(()=>Tn(t),[t]),y=k.useMemo(()=>[3,6,9,12],[]),T=k.useMemo(()=>[1,2,3,4,5,6,7],[]);return _.useEffect(()=>{if(!a||!g.current||!t||!t.hourly||f.length===0)return;const x={timezone:"Europe/Berlin"},h=document.createElement("div");return g.current.textContent="",g.current.appendChild(h),Dt(h,f,x),()=>{g.current&&(g.current.textContent="")}},[a,f]),_.useEffect(()=>{E&&b()},[E]),!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?n.jsx(Ce,{children:n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[n.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),n.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":n.jsxs(Ce,{children:[n.jsxs("div",{onClick:l,children:[n.jsxs("div",{className:"headline",children:[n.jsx(ye,{icon:t.currently.icon}),n.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),n.jsx("div",{className:"forecast",children:y.map((x,h)=>n.jsx(Oe,{data:t.hourly.data[x]},h))})]}),n.jsx(re,{visible:a,onClick:b,children:n.jsxs("div",{className:"full-weather",children:[o!==!1&&n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[n.jsx("h3",{children:"Fehler!"}),n.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),n.jsxs("div",{className:"detail-header",children:[n.jsx("div",{children:n.jsxs("div",{className:"headline",children:[n.jsx(ye,{icon:t.daily.data[0].icon}),n.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",n.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),n.jsx("h3",{children:he[t.daily.data[0].icon].label})]}),n.jsx("div",{className:"values",children:n.jsxs("div",{className:"table",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),n.jsxs("div",{children:[n.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),n.jsxs("div",{children:[n.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),n.jsxs("div",{children:[n.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),n.jsxs("div",{children:[n.jsx("span",{children:"Regen:"})," ",t.daily.data[0].precipProbability*100," %"]}),n.jsxs("div",{children:[n.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),n.jsxs("div",{children:[n.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),n.jsx("h3",{children:"Die nächsten 24 Stunden"}),n.jsx("div",{ref:g}),n.jsx("h3",{children:"Die nächste Woche"}),n.jsx("div",{className:"forecast",children:T.map((x,h)=>n.jsx(Oe,{data:t.daily.data[x],daily:!0},h))}),n.jsxs("div",{className:"info",children:["Aktualisiert ",n.jsx(ot,{date:$.fromSeconds(t.currently.time).toJSDate(),formatter:bn})]})]})})]})},_n=k.memo(Sn),Ln="AK Wandsbek",jn="Hamburg",Rn="Master:62016",Nn="STATION",kn={x:10.091341,y:53.568702},Cn={name:Ln,city:jn,id:Rn,type:Nn,coordinate:kn},fe={departureList:"departureList",checkName:"checkName"},On=async(e,i)=>v({method:"post",url:`./gti/public/${e}`,data:i,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}),De=(e,i)=>e.realtimeOffset-i.realtimeOffset,Dn=e=>{const i=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:i.filter(t=>t.directionId===1).slice(0,3).sort(De),to:i.filter(t=>t.directionId===6).slice(0,3).sort(De)}},In=e=>{const t=V().ENABLE_HVV||!1,[o,a]=_.useState([]),[u,E]=_.useState(!1),g=Se(6e4),b=t;return _.useEffect(()=>{if(!b)return;if(!(e in fe)){j.warn(e,"not supported by HVV connector");return}let l={version:51};switch(e){case fe.checkName:l={...l,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case fe.departureList:const f=$.now();l={...l,station:Cn,time:{date:f.toFormat("dd.MM.yyyy"),time:f.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:l=void 0}On(e,l).then(f=>{a(Dn(f.data)),E(!1)}).catch(f=>{E(G(f))})},[e,g,b,t]),[o,u]},vn=O.div`
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
`,Ie=k.memo(({line:e,direction:i,realtimeOffset:t})=>n.jsxs("div",{className:"departure",children:[n.jsx("div",{children:n.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),n.jsx("div",{children:t===0?"Jetzt":n.jsxs(n.Fragment,{children:["in ",t," '"]})})]})),Mn=()=>{if(!(V().ENABLE_HVV||!1))return null;const[t,o]=In(fe.departureList);return n.jsx(vn,{children:o!==!1?n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[n.jsx("h3",{children:"Fehler!"}),n.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((a,u)=>n.jsx(Ie,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},u)),n.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((a,u)=>n.jsx(Ie,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},u))]})})},Wn=k.memo(Mn),Pn=()=>{const e=V(),i=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const o=e.ENTITY_CHARGING_STATE||"",a=e.ENTITY_STATE_OF_CHARGE||"",u=e.HASS_ACCESS_TOKEN||"",E=e.SUPERVISOR_TOKEN||"",[g,b]=_.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[l,f]=_.useState(!1),y=i&&(t||o||a);return _.useEffect(()=>{if(!y)return;(async()=>{const x=[];t&&x.push(v(W(`/api/states/${t}`,e)).then(s=>({type:"preclimateStatus",value:s.data.state==="on"})).catch(s=>({type:"preclimateStatus",error:G(s)}))),o&&x.push(v(W(`/api/states/${o}`,e)).then(s=>({type:"chargingState",value:s.data.state==="on"})).catch(s=>({type:"chargingState",error:G(s)}))),a&&x.push(v(W(`/api/states/${a}`,e)).then(s=>({type:"stateOfCharge",value:parseFloat(s.data.state)||0})).catch(s=>({type:"stateOfCharge",error:G(s)})));const h=await Promise.all(x);let p=!1;h.forEach(s=>{s.error?p=s.error:b(d=>({...d,[s.type]:s.value}))}),f(p||!1)})()},[y,i,t,o,a]),_.useEffect(()=>{let T=null,x=[],h=!0,p=null,s=0,d=!1;async function r(){if(!y||d)return;if(T){try{x.forEach(w=>{w&&w()}),x=[],T.close()}catch(w){j.debug("Error closing existing WebSocket connection:",w)}T=null}d=!0;const m=se(e),A=E||u||"";if(!A){j.debug("Skipping WebSocket connection - no access token (using REST API only)"),d=!1;return}let c;try{c=oe(m,A),h&&f(!1)}catch(w){h&&(j.error("Failed to create WebSocket auth:",w),f(w instanceof Error?w.message:String(w))),d=!1;return}try{T=await ie({auth:c}),T.addEventListener("ready",()=>{h&&(j.debug("WebSocket connection ready for EV entities"),s=0,f(!1))}),T.addEventListener("disconnected",()=>{if(h&&!d){j.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),p&&clearTimeout(p),T=null,x=[];const R=Math.min(1e3*Math.pow(2,s),3e4);s++,p=setTimeout(()=>{h&&!d&&(j.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${s})`),r())},R)}});const w=R=>{if(h){const L=R.variables.trigger.to_state.entity_id,N=R.variables.trigger.to_state.state;b(C=>{const M={...C};return L===t?M.preclimateStatus=N==="on":L===o?M.chargingState=N==="on":L===a&&(M.stateOfCharge=parseFloat(N)||0),M})}},S=[];t&&S.push(t),o&&S.push(o),a&&S.push(a);for(const R of S){const L=await T.subscribeMessage(w,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:R}});x.push(L)}d=!1}catch(w){if(d=!1,h){j.error("Failed to setup WebSocket connection:",w),f(w instanceof Error?w.message:String(w));const S=Math.min(1e3*Math.pow(2,s),3e4);s++,p=setTimeout(()=>{h&&(j.debug(`Attempting to reconnect WebSocket for EV entities after error (attempt ${s})`),r())},S)}}}return r(),()=>{h=!1,p&&clearTimeout(p),x.forEach(m=>{m&&m()}),T&&T.close()}},[y,i,t,o,a,u,E]),[g,l]},Vn=e=>{const i=e?.ENTITY_PRECLIMATE_START||"";i&&v.post(W("/api/services/button/press",e),{entity_id:i}).catch(t=>{j.error("Failed to start preclimate:",t)})},$n=e=>{const i=e?.ENTITY_PRECLIMATE_STOP||"";i&&v.post(W("/api/services/button/press",e),{entity_id:i}).catch(t=>{j.error("Failed to stop preclimate:",t)})},Bn=O.div`
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
`,Yn=(e,i)=>i?wt:e>=80?yt:e>=50?At:e>=20?bt:Tt,Hn=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",Un=()=>{const e=V();if(!(e.ENABLE_EV||!1))return null;const[t,o]=Pn(),{preclimateStatus:a,chargingState:u,stateOfCharge:E}=t,[g,b]=k.useState(!1),[l,f]=k.useState(null),[y,T]=k.useState(!1),[x,h]=k.useState(!1),[p,s]=k.useState(0),d=k.useRef(null),r=k.useRef(null),m=k.useRef(a),A=k.useRef(null);k.useEffect(()=>{m.current!==a&&(g&&A.current!==null&&a===(l==="start")&&(s(l==="start"?360:0),h(!0),setTimeout(()=>{b(!1),f(null),h(!1),s(0),A.current=null,T(!1)},300),d.current&&(clearTimeout(d.current),d.current=null)),m.current=a)},[a,g,l]),k.useEffect(()=>{if(!g||x){r.current&&(cancelAnimationFrame(r.current),r.current=null);return}const M=A.current||Date.now(),I=1e4,Y=l==="stop",P=()=>{const H=Date.now()-M,F=Math.min(H/I,1);s(Y?360*(1-F):360*F),F<1&&!x&&(r.current=requestAnimationFrame(P))};return r.current=requestAnimationFrame(P),()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null)}},[g,x,l]),k.useEffect(()=>()=>{d.current&&clearTimeout(d.current),r.current&&cancelAnimationFrame(r.current)},[]);const c=k.useCallback(()=>{if(o!==!1||g)return;const M=!a,I=M?"start":"stop";b(!0),f(I),h(!1),T(!1),s(0),A.current=Date.now(),m.current=a,M?Vn(e):$n(e),d.current=setTimeout(()=>{g&&(T(!0),setTimeout(()=>{b(!1),f(null),h(!1),s(0),T(!1),A.current=null},500))},15e3)},[a,o,g]),w=Yn(E||0,u),S=Hn(E||0),R=Math.round(E||0),L=g?l==="start":a,N=l==="start"?"#17e146":"#f85a5a",C=l==="start"?"clockwise":"counterclockwise";return n.jsxs(Bn,{className:B({disabled:o!==!1}),children:[n.jsxs("h2",{children:["Auto",o!==!1?n.jsxs("div",{className:"battery-info",children:[n.jsx(U,{path:be,size:"1.2rem",color:"#f85a5a"}),n.jsx("span",{children:"Fehler"})]}):n.jsxs("div",{className:"battery-info",children:[n.jsxs("span",{className:"charge-percentage",children:[R,"%"]}),n.jsx(U,{path:w,size:"1.2rem",color:S})]})]}),o===!1&&n.jsxs("div",{className:"preclimate-button-wrapper",children:[g&&n.jsx("div",{className:B("progress-ring",C,{complete:x}),style:{"--progress-color":N,"--progress-angle":`${p}deg`,"--progress-gradient":l==="stop"?`conic-gradient(from -90deg, ${N} 0deg, ${N} ${p}deg, transparent ${p}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${N} 0deg, ${N} ${p}deg, transparent ${p}deg, transparent 360deg)`}}),n.jsxs("button",{className:B("preclimate-button",{spinning:L&&!g,shaking:y}),onClick:c,disabled:o!==!1||g,children:[n.jsx(U,{path:Et,size:"2rem",color:L?"#ff9800":"#ffffff"}),n.jsx("span",{children:L?"Stop":"Start"})]})]})]})},Fn=k.memo(Un),Gn=()=>{const e=V(),i=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",o=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[u,E]=_.useState("closed"),[g,b]=_.useState(!1),l=i&&t,f=t?W(`/api/states/${t}`,e):null;return _.useEffect(()=>{!l||!f||v(f).then(y=>{E(y.data.state),b(!1)}).catch(y=>{b(G(y))})},[l,f,i,t]),_.useEffect(()=>{let y=null,T=null,x=!0,h=null,p=0,s=!1;async function d(){if(!l||!t||s)return;if(y){try{T&&(T(),T=null),y.close()}catch(c){j.debug("Error closing existing WebSocket connection:",c)}y=null}s=!0;const r=se(e),m=a||o||"";if(!m){j.debug("Skipping WebSocket connection - no access token (using REST API only)"),s=!1;return}let A;try{A=oe(r,m),x&&b(!1)}catch(c){x&&(j.error("Failed to create WebSocket auth:",c),b(c instanceof Error?c.message:String(c))),s=!1;return}try{y=await ie({auth:A}),y.addEventListener("ready",()=>{x&&(j.debug("WebSocket connection ready for garage door"),p=0,b(!1))}),y.addEventListener("disconnected",()=>{if(x&&!s){j.debug("WebSocket disconnected for garage door, will attempt to reconnect"),h&&clearTimeout(h),y=null,T=null;const w=Math.min(1e3*Math.pow(2,p),3e4);p++,h=setTimeout(()=>{x&&!s&&(j.debug(`Attempting to reconnect WebSocket for garage door (attempt ${p})`),d())},w)}});const c=w=>{x&&E(w.variables.trigger.to_state.state)};T=await y.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),s=!1}catch(c){if(s=!1,x){j.error("Failed to setup WebSocket connection:",c),b(c instanceof Error?c.message:String(c));const w=Math.min(1e3*Math.pow(2,p),3e4);p++,h=setTimeout(()=>{x&&(j.debug(`Attempting to reconnect WebSocket for garage door after error (attempt ${p})`),d())},w)}}}return d(),()=>{x=!1,h&&clearTimeout(h),T&&T(),y&&y.close()}},[l]),[u,g]},zn=(e,i={})=>{const t=i.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);v.post(W("/api/services/cover/toggle",i),{entity_id:t}).catch(a=>{j.error("Failed to toggle garage door:",a)}).finally(()=>{clearTimeout(o),e(!1)})},Kn=(e,i={})=>{const t=i.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);v.post(W("/api/services/cover/open_cover",i),{entity_id:t}).catch(a=>{j.error("Failed to open garage door:",a)}).finally(()=>{clearTimeout(o),e(!1)})},qn=(e,i={})=>{const t=i.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);v.post(W("/api/services/cover/close_cover",i),{entity_id:t}).catch(a=>{j.error("Failed to close garage door:",a)}).finally(()=>{clearTimeout(o),e(!1)})},Xn=O.div`
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
`,Fe=O.div`
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
`,Ae=e=>{const i={unknown:{label:"In Bewegung oder halb-offen",icon:Rt},open:{label:"Offen",icon:jt},closed:{label:"Geschlossen",icon:Lt},opening:{label:"Öffnet",icon:_t},closing:{label:"Schließt",icon:St}};return i[e]||j.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),i[e]||{label:"Unavailable",icon:Nt}},Jn=({garageDoor:e,animate:i=!1})=>n.jsxs(Fe,{className:B({animate:i}),children:[n.jsx(U,{path:Ae(e).icon,size:"2rem",color:"#ffffff"}),n.jsx("span",{children:Ae(e).label})]}),Qn=e=>st.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:i}){return Ae(i).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),Zn=()=>{const e=V();if(!(e.ENABLE_GARAGE||!1))return null;const[t,o]=Gn(),[a,u]=_.useState(void 0),[E,g]=_.useState(!1),[b,l]=_.useState(!1);_.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!a){const h=new Promise(p=>{u({resolve:p})});Qn(h)}}else a&&(a.resolve(t),u(void 0))},[t]);const f=ne("g");_.useEffect(()=>{f&&o===!1&&zn(g,e)},[f,o,e]);const y=k.useCallback(x=>{if(o===!1)switch(l(!1),x){case"open":Kn(g,e);break;case"close":qn(g,e);break}},[g,o,e]),T=k.useCallback(()=>{o===!1&&l(!0)},[o]);return n.jsxs(Xn,{className:B({disabled:o!==!1}),children:[n.jsx("h2",{children:"Garage"}),n.jsx("div",{className:"status",onClick:T,children:o!==!1?n.jsxs(Fe,{children:[n.jsx(U,{path:be,size:"2rem",color:"#f85a5a"}),n.jsx("span",{children:"Fehler"})]}):n.jsx(Jn,{garageDoor:t,animate:E})}),n.jsx(re,{visible:b&&o===!1,onClick:()=>l(!1),children:n.jsxs("div",{className:"controls",children:[n.jsx("h2",{children:"Garagentor"}),n.jsx("div",{onClick:()=>y("open"),children:"Öffnen"}),n.jsx("div",{onClick:()=>y("close"),children:"Schließen"})]})})]})},eo=k.memo(Zn),to=(e,i)=>e?W(`/api/states/${e}`,i):null,K={done:{label:"Fertig",animate:!1,icon:Ct},off:{label:"Aus",animate:!1,icon:kt},standby:{label:"Standby",animate:!1,icon:_e},running:{label:"Läuft …",animate:!0,icon:_e}},no={off:0,standby:2,running:16,done:256},oo=()=>{const e=V();e.ENABLE_LAUNDRY;const i=e.LAUNDRY_MACHINES||[];e.HASS_ACCESS_TOKEN,e.SUPERVISOR_TOKEN;const o=(Array.isArray(i)?i:[]).map((y,T)=>{const[x,h]=io(y.entity_id,e);return{state:x,error:h,name:y.name}}),[a,u]=_.useState(K.off),[E,g]=_.useState(!1),b=o.map(y=>y.state),l=o.map(y=>y.error);_.useEffect(()=>{const y=l.some(T=>T!==!1);g(y&&l.find(T=>T!==!1)||!1)},[l]),_.useEffect(()=>{const y=b.reduce((T,x)=>T+(no[x]||0),0);y===0?u(K.off):y<16?u(K.standby):y<256?u(K.running):y%256===0?u(K.done):y%256%16===0?u(K.running):y%256%2===0?u(K.done):u(K.running)},[b]);const f=o.map(y=>({label:y.name,state:y.state}));return[a,f,E]},io=(e,i)=>{const[t,o]=_.useState("off"),[a,u]=_.useState(!1),g=(i.ENABLE_LAUNDRY||!1)&&e,b=to(e,i);return _.useEffect(()=>{!g||!b||v(b).then(l=>{o(l.data.state),u(!1)}).catch(l=>{u(G(l))})},[e,g,b]),_.useEffect(()=>{let l=null,f=null,y=!0,T=null,x=0,h=!1;async function p(){if(!g||!e||h)return;if(l){try{f&&(f(),f=null),l.close()}catch(A){j.debug(`Error closing existing WebSocket connection for ${e}:`,A)}l=null}h=!0;const s=se(i),d=i.HASS_ACCESS_TOKEN||"",m=i.SUPERVISOR_TOKEN||""||d||"";if(!m){j.debug("Skipping WebSocket connection - no access token (using REST API only)"),h=!1;return}try{const A=oe(s,m);l=await ie({auth:A}),l.addEventListener("ready",()=>{y&&(j.debug(`WebSocket connection ready for ${e}`),x=0,u(!1))}),l.addEventListener("disconnected",()=>{if(y&&!h){j.debug(`WebSocket disconnected for ${e}, will attempt to reconnect`),T&&clearTimeout(T),l=null,f=null;const w=Math.min(1e3*Math.pow(2,x),3e4);x++,T=setTimeout(()=>{y&&!h&&(j.debug(`Attempting to reconnect WebSocket for ${e} (attempt ${x})`),p())},w)}});const c=w=>{y&&o(w.variables.trigger.to_state.state)};f=await l.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),h=!1}catch(A){if(h=!1,y){j.error(`Failed to setup WebSocket connection for ${e}:`,A),u(A instanceof Error?A.message:String(A));const c=Math.min(1e3*Math.pow(2,x),3e4);x++,T=setTimeout(()=>{y&&(j.debug(`Attempting to reconnect WebSocket for ${e} after error (attempt ${x})`),p())},c)}}}return p(),()=>{y=!1,T&&clearTimeout(T),f&&f(),l&&l.close()}},[e,g]),[t,a]},ro=O.div`
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
`,so=()=>{if(!(V().ENABLE_LAUNDRY||!1))return null;const[t,o,a]=oo(),[u,E]=_.useState(!1),g=k.useCallback(()=>{a===!1&&E(!0)},[a]),b=k.useCallback(()=>E(!1),[]);return n.jsxs(ro,{className:B({disabled:a!==!1}),children:[n.jsx("h2",{children:"Wäsche"}),n.jsx("div",{className:"status",onClick:g,children:a!==!1?n.jsxs(n.Fragment,{children:[n.jsx(U,{path:be,size:"2rem",color:"#f85a5a"}),n.jsx("span",{children:"Fehler"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:B({animate:t.animate}),children:n.jsx(U,{path:t.icon,size:"2rem",color:"#ffffff"})}),n.jsx("span",{children:t.label})]})}),n.jsx(re,{visible:u&&a===!1,onClick:b,children:n.jsxs("div",{className:"states",children:[n.jsx("h2",{children:"Wäsche"}),o.map((l,f)=>n.jsxs("div",{children:[n.jsx("div",{className:"subtitle",children:l.label}),n.jsx("div",{className:B({animate:K[l.state].animate}),children:n.jsx(U,{path:K[l.state].icon,size:2})}),n.jsx("div",{children:K[l.state].label})]},f))]})})]})},ao=k.memo(so),co=O.div`
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
`,lo=()=>n.jsxs(co,{children:[n.jsxs("div",{className:"top-content",children:[n.jsx(_n,{}),n.jsx(Wn,{}),n.jsx(Fn,{})]}),n.jsxs("div",{className:"two-cols",children:[n.jsx(eo,{}),n.jsx(ao,{})]})]}),fo=k.memo(lo),ve=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],uo=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],ue={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},ho={landscape:"L",portrait:"P",wide:"W"},po=O.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,mo=O.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,go=O.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Q=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Z=O.label`
  font-size: 0.9rem;
  color: #cccccc;
`,Me=O.select`
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
`,We=O.input`
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
`,xo=O.button`
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
`,Pe=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Eo=O.button`
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
`,wo=O.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,yo=O.div`
  position: absolute;
  background-color: ${e=>ue[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,Ao=O.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,bo=O.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,To=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,ae=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ce=O.div`
  font-size: 0.85rem;
  color: #cccccc;
`,le=O.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,So=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,_o=O.h3`
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
`;const we=O.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?ue[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?ue[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?ue[e.orientation]:"#4a4a4a"};
  }
`,Ve=()=>{const[e,i]=k.useState(1920),[t,o]=k.useState(1080),[a,u]=k.useState("Full HD"),[E,g]=k.useState(""),[b,l]=k.useState(""),[f,y]=k.useState([{orientation:"landscape"}]),[T,x]=k.useState(null),h=k.useMemo(()=>Ue(f,e,t),[f,e,t]),p=c=>{const w=ve.find(S=>S.name===c);w&&w.width&&w.height?(i(w.width),o(w.height),u(c),g(""),l("")):c==="Custom"&&u("Custom")},s=()=>{const c=parseInt(E),w=parseInt(b);c>0&&w>0&&(i(c),o(w))},d=c=>{y(c.videos),x(c.name)},r=c=>{const w=[];for(let S=0;S<c;S++)w.push(f[S]||{orientation:"landscape"});y(w),x(null)},m=(c,w)=>{const S=[...f];S[c]={orientation:w},y(S),x(null)},A=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return n.jsxs(po,{children:[n.jsx(mo,{children:"Video Tiling Algorithm Demo"}),n.jsxs(go,{children:[n.jsxs(Q,{children:[n.jsx(Z,{children:"Screen Size Preset"}),n.jsx(Me,{value:a,onChange:c=>p(c.target.value),children:ve.map(c=>n.jsx("option",{value:c.name,children:c.name},c.name))})]}),a==="Custom"&&n.jsxs(n.Fragment,{children:[n.jsxs(Q,{children:[n.jsx(Z,{children:"Custom Width"}),n.jsx(We,{type:"number",value:E,onChange:c=>g(c.target.value),placeholder:"Width",min:"100"})]}),n.jsxs(Q,{children:[n.jsx(Z,{children:"Custom Height"}),n.jsx(We,{type:"number",value:b,onChange:c=>l(c.target.value),placeholder:"Height",min:"100"})]}),n.jsxs(Q,{children:[n.jsx(Z,{children:" "}),n.jsx(xo,{onClick:s,children:"Apply Custom Size"})]})]}),n.jsxs(Q,{children:[n.jsx(Z,{children:"Number of Videos"}),n.jsxs(Me,{value:f.length,onChange:c=>r(parseInt(c.target.value)),children:[n.jsx("option",{value:"1",children:"1 Video"}),n.jsx("option",{value:"2",children:"2 Videos"}),n.jsx("option",{value:"3",children:"3 Videos"}),n.jsx("option",{value:"4",children:"4 Videos"})]})]}),f.map((c,w)=>n.jsxs(Q,{children:[n.jsxs(Z,{children:["Video ",w+1," Orientation"]}),n.jsxs(Pe,{children:[n.jsx(we,{active:c.orientation==="landscape",orientation:"landscape",onClick:()=>m(w,"landscape"),children:"Landscape"}),n.jsx(we,{active:c.orientation==="portrait",orientation:"portrait",onClick:()=>m(w,"portrait"),children:"Portrait"}),n.jsx(we,{active:c.orientation==="wide",orientation:"wide",onClick:()=>m(w,"wide"),children:"Wide"})]})]},w))]}),n.jsxs(So,{children:[n.jsx(_o,{children:"Test Scenarios"}),n.jsx(Pe,{children:uo.map(c=>n.jsx(Eo,{active:T===c.name,onClick:()=>d(c),children:c.name},c.name))})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:n.jsx(wo,{style:{width:`${e*A}px`,height:`${t*A}px`},children:h.videos.map((c,w)=>n.jsxs(yo,{orientation:c.orientation,style:{left:`${c.x*A}px`,top:`${c.y*A}px`,width:`${c.width*A}px`,height:`${c.height*A}px`},children:[n.jsxs(Ao,{children:[ho[c.orientation]," ",w+1]}),n.jsxs(bo,{children:[Math.round(c.width)," × ",Math.round(c.height)]})]},w))})}),n.jsxs(To,{children:[n.jsxs(ae,{children:[n.jsx(ce,{children:"Canvas Size"}),n.jsxs(le,{children:[e," × ",t]})]}),n.jsxs(ae,{children:[n.jsx(ce,{children:"Total Area Used"}),n.jsxs(le,{children:[Math.round(h.totalArea).toLocaleString()," px²"]})]}),n.jsxs(ae,{children:[n.jsx(ce,{children:"Efficiency"}),n.jsxs(le,{children:[h.efficiency.toFixed(2),"%"]})]}),n.jsxs(ae,{children:[n.jsx(ce,{children:"Display Scale"}),n.jsxs(le,{children:[(A*100).toFixed(1),"%"]})]})]})]})},Lo=()=>{function e(t,o){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(o))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[u,E]=o.split(":").map(Number),g=new Date;let b=new Date(g.getFullYear(),g.getMonth(),g.getDate());b.setHours(u,E,0,0),b<=g&&b.setDate(b.getDate()+1);const l=b.getTime()-g.getTime();return j.log("Reloading page at",o,"in",Math.floor(l/1e3/60),"minutes"),setTimeout(t,l)}const i=()=>{j.log("Timeout reached! "),window.location.reload(!0)};_.useLayoutEffect(()=>{const t=[e(i,"00:00"),e(i,"03:00"),e(i,"06:00"),e(i,"09:00"),e(i,"12:00"),e(i,"15:00"),e(i,"18:00"),e(i,"21:00")];return()=>{t.forEach(o=>{o&&clearTimeout(o)})}},[])},jo=O.div`
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
`;class pe extends _.Component{constructor(i){super(i),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,t){this.setState({error:i,errorInfo:t}),j.error("ErrorBoundary caught an error:",i,t)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?n.jsxs(jo,{children:[n.jsx("h2",{children:"Something went wrong"}),n.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,n.jsxs("div",{children:[n.jsx("button",{onClick:this.handleReset,children:"Try Again"}),n.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Ro=at`
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
`,No=O.div`
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
`;function ko(){return Lo(),n.jsxs(No,{children:[n.jsx(Ro,{}),n.jsxs("div",{className:"main",children:[n.jsx(pe,{children:n.jsx(yn,{})}),n.jsx(pe,{children:n.jsx(fo,{})})]}),n.jsx(lt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Co(){return n.jsx(pe,{children:n.jsxs(ct,{children:[n.jsx(ge,{path:"/demo",element:n.jsx(Ve,{})}),n.jsx(ge,{path:"/tiling-demo",element:n.jsx(Ve,{})}),n.jsx(ge,{path:"*",element:n.jsx(ko,{})})]})})}const Oo=dt.createRoot(document.getElementById("root"));Oo.render(n.jsx(_.StrictMode,{children:n.jsx(pe,{children:n.jsx(Wt,{children:n.jsx(ft,{children:n.jsx(Co,{})})})})}));
