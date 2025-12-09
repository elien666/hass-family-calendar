import{d as v,R as j,j as i,I as F,r as N,l as Ye,P as Ke,W as qe,b as Xe,e as Je,f as Qe,h as Ze,i as et,k as tt,m as nt,n as ot,o as it,T as rt,p as st,s as at,y as ct,q as lt,t as dt,u as ye,L as ft,v as ut,B as ht}from"./react-vendor-BitJRyew.js";import{D as B}from"./date-vendor-BDx6lZXm.js";import{f as H}from"./vendor-CeaMKy47.js";import{m as pt,a as mt,b as gt,c as xt,d as Et,e as yt,f as Le,g as wt,h as bt,i as At,j as St,k as Tt,l as Lt,n as jt,o as _t,p as Rt,q as Nt,r as Ct,s as kt,t as Re,u as vt,v as Ot}from"./ui-vendor-C7t39j5V.js";import{a as I,q as Dt}from"./utils-vendor-Cs1iS-Fd.js";import{c as oe,a as ie}from"./ha-vendor-CoU0AojH.js";import{t as It}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const h of a)if(h.type==="childList")for(const w of h.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&o(w)}).observe(document,{childList:!0,subtree:!0});function t(a){const h={};return a.integrity&&(h.integrity=a.integrity),a.referrerPolicy&&(h.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?h.credentials="include":a.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(a){if(a.ep)return;a.ep=!0;const h=t(a);fetch(a.href,h)}})();const Mt=v.div`
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
`,re=({visible:e,children:n,onClick:t,onClose:o,fullsize:a=!1})=>{const h=o||t,w=x=>{x.stopPropagation(),x.preventDefault(),h()};return j.useEffect(()=>{if(e){const x=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${x}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,x)}}},[e]),e?i.jsxs(Mt,{onClick:t,children:[i.jsx("div",{className:"close",onClick:w,children:i.jsx(F,{path:pt,size:2})}),i.jsx("div",{className:H("content",{fullsize:a}),onClick:x=>x.stopPropagation(),children:n})]}):null},ae=(e,n,t=null)=>{setTimeout(async()=>{try{const a=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,h={level:e,message:n,...t&&{metadata:t}};await I.post(a,h,{timeout:2e3})}catch{}},0)},ce=e=>{if(e.length===0)return"";if(e.length===1){const n=e[0];return typeof n=="string"?n:typeof n=="object"?JSON.stringify(n,null,2):String(n)}return e.map(n=>typeof n=="object"?JSON.stringify(n,null,2):String(n)).join(" ")},le=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const n={};return e.slice(1).forEach((t,o)=>{typeof t=="object"&&t!==null?Object.assign(n,t):n[`arg${o}`]=t}),Object.keys(n).length>0?n:null}if(e.every(n=>typeof n=="object"&&n!==null)){const n={};return e.forEach(t=>Object.assign(n,t)),n}return null},C={log:(...e)=>{const n=ce(e),t=le(e);n&&ae("INFO",n,t)},error:(...e)=>{console.error(...e);const n=ce(e),t=le(e);n&&ae("ERROR",n,t)},warn:(...e)=>{const n=ce(e),t=le(e);n&&ae("WARNING",n,t)},debug:(...e)=>{},info:(...e)=>{const n=ce(e),t=le(e);n&&ae("INFO",n,t)}},Pt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},$t=()=>{const e=(n,t=void 0)=>{const o=Pt[`VITE_${n}`];return o!==void 0?o:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),SUPERVISOR_TOKEN:e("SUPERVISOR_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_API_KEY:e("WEATHER_API_KEY",""),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),GEOFOX_SECRET:e("GEOFOX_SECRET",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const n=e("LAUNDRY_MACHINES","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const n=e("DOORBELL_CAMERAS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const n=e("CALENDARS","[]");try{return typeof n=="string"?JSON.parse(n):n}catch{return[]}})()}},Fe=N.createContext(null),Wt=({children:e})=>{const[n,t]=N.useState($t),[o,a]=N.useState(!0);return N.useEffect(()=>{(async()=>{try{const x=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`,S=await I.get(x,{timeout:5e3});if(S.data&&typeof S.data=="object"){t(S.data);const c=Object.keys(S.data).filter(d=>d.startsWith("ENABLE_")&&S.data[d]).map(d=>d.replace("ENABLE_",""));C.info(`Configuration loaded from API endpoint. Enabled features: ${c.length>0?c.join(", "):"none"}`,{enabledFeatures:c,totalConfigKeys:Object.keys(S.data).length})}}catch(w){C.debug("Failed to load config from API, using defaults:",w.message)}finally{a(!1)}})()},[]),N.useEffect(()=>{const h=n.HASS_ACCESS_TOKEN||"";h&&typeof h=="string"&&h.trim()!==""&&h!=="undefined"&&h!=="null"?I.defaults.headers.common.Authorization=`Bearer ${h}`:delete I.defaults.headers.common.Authorization},[n.HASS_ACCESS_TOKEN]),i.jsx(Fe.Provider,{value:{config:n,loading:o},children:e})},V=()=>{const e=N.useContext(Fe);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config};let te=0,he=0,J=0;const ee=[],Ue=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},Vt=(e,n="")=>{const t=Ue(e);J++,te++,ee.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ee.length>10&&ee.shift();const o=[];return n&&o.push(`[${n}]`),o.push("🔴 Axios API Error:"),o.push(`Message: ${t.message}`),t.url&&o.push(`URL: ${t.url}`),t.status&&o.push(`HTTP Status: ${t.status}`),t.code&&o.push(`Error Code: ${t.code}`),t.isNetworkError&&(o.push("Type: Network Error (no response received)"),t.readyState!==void 0&&o.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&o.push("Type: Timeout Error"),t.config&&(o.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),o.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&o.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&o.push("Response Data:",t.responseData),o.push(`Request Stats: ${he} success, ${J} errors (${te} total)`),J>3&&ee.length>0&&o.push("Recent errors pattern:",ee.slice(-5)),C.error(...o),t},Bt=e=>{he++,te++,(te%10===0||J>0)&&C.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:te,stats:`${he} success, ${J} errors`}),J>0&&te%10===0&&he>J&&(J=0,ee.length=0)},z=e=>{const n=Ue(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"};I.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,C.debug("Axios Defaults State:",{baseURL:I.defaults.baseURL,timeout:I.defaults.timeout,hasAuthHeader:!!I.defaults.headers?.common?.Authorization,authHeaderLength:I.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(I.defaults.headers?.common||{})})),e},e=>(C.error("Axios Request Setup Error:",e),Promise.reject(e)));I.interceptors.response.use(e=>(e.config&&Bt(e.config),e),e=>{const n=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(Vt(e,n),e.config?.metadata){const t=Date.now()-e.config.metadata.startTime;C.error("Request Duration:",`${t}ms`,"Request ID:",e.config.metadata.requestId)}return typeof window<"u"&&window.location&&C.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href}),Promise.reject(e)});const $=(e,n={})=>{const t=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const o=n.INGRESS_URL||"";if(o&&typeof o=="string"&&o.trim()!==""){const h=t.startsWith("/")?t.slice(1):t;return`${window.location.origin}${o}${h}`}const a=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${a}${t}`}return t}},se=(e={})=>{if(typeof window<"u"&&window.location){const n=e.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!=="")return`${window.location.origin}${n.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},Ht=()=>{const e=V(),n=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[o,a]=j.useState(null),[h,w]=j.useState(!1),x=n&&t,S=t?$(`/api/states/${t}`,e):null;return j.useEffect(()=>{if(!x||!S)return;let c=!0;const d=new AbortController;return I(S,{signal:d.signal}).then(m=>{c&&(m.data.attributes.store!==void 0?a(m.data.attributes.store):a([]),w(!1))}).catch(m=>{c&&!d.signal.aborted&&(w(z(m)),a([]))}),()=>{c=!1,d.abort()}},[x,S,n,t]),[o,h]},Yt=(e,n)=>{const t=n?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const o=$(`/api/states/${t}`,n);I.post(o,{state:new Date,attributes:{store:e}}).catch(a=>{C.error("Failed to store everyday calendar data:",a)})},Ne=v.div` 

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
`,Ft=({on:e,month:n,day:t})=>{const[o,a]=e,h=o.indexOf(`${n}-${t}`),w=h>-1,x=()=>{a(w?o.toSpliced(h,1):[...o,`${n}-${t}`])};return i.jsx("div",{className:H("dot",{on:w}),onClick:()=>x()})},Ut=()=>{const e=V();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),o=[];for(let c=1;c<13;c++){const d=new Date(t,c,0).getDate();for(let m=1;m<=d;m++)o.push({month:c,day:m})}const a=Array.from({length:31},(c,d)=>d+1),h=Array.from({length:12},(c,d)=>d+1),w=j.useState(void 0),[x,S]=Ht();return j.useEffect(()=>{x!==null&&w[1](x)},[x]),j.useEffect(()=>{w[0]!==void 0&&Yt(w[0],e)},[w[0],e]),w[0]!==void 0?i.jsxs(Ne,{children:[i.jsx("h2",{children:"Jeden Tag ein bißchen"}),S!==!1&&i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:S instanceof Error?S.message:String(S)})]}),i.jsxs("div",{className:"calendar",children:[a.map((c,d)=>i.jsx("div",{style:{gridArea:`${c+1} / 1 / ${c+1} / 1`},children:c},d)),h.map((c,d)=>i.jsx("div",{style:{gridArea:`1 / ${c+1} / 1 / ${c+1}`},children:c},d)),o.map((c,d)=>i.jsx("div",{style:{gridArea:`${c.day+1} / ${c.month+1} / ${c.day+1} / ${c.month+1}`},children:i.jsx(Ft,{on:w,month:c.month,day:c.day})},d))]})]}):i.jsx(Ne,{className:"loading",children:S!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:S instanceof Error?S.message:String(S)})]}):i.jsx(Ye,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},zt=v.div`
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
  }`,Gt=()=>{const[e,n]=j.useState(B.now()),[t,o]=j.useState(!1),a=N.useCallback(()=>o(!0),[]),h=N.useCallback(()=>o(!1),[]);return j.useEffect(()=>{const w=setInterval(()=>n(B.now()),1e3);return()=>clearInterval(w)},[]),i.jsxs(i.Fragment,{children:[i.jsxs(zt,{onClick:a,children:[e.toFormat("HH"),i.jsx("span",{children:":"}),e.toFormat("mm")]}),i.jsx(re,{visible:t,onClick:h,fullsize:!0,children:i.jsx(Ut,{})})]})},Kt=N.memo(Gt),qt=()=>{const e=V(),n=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const o=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[h,w]=j.useState("off"),[x,S]=j.useState(!1),c=n&&t,d=t?$(`/api/states/${t}`,e):null;return j.useEffect(()=>{!c||!d||I(d).then(m=>{w(m.data.state),S(!1)}).catch(m=>{S(z(m))})},[c,d,n,t]),j.useEffect(()=>{let m=null,A=null,y=!0,f=null,u=0,s=!1,l=null,r=null;async function g(){if(!c||!t||!y||s)return;if(m){try{l&&(m.removeEventListener("ready",l),l=null),r&&(m.removeEventListener("disconnected",r),r=null),A&&(A(),A=null),m.close()}catch{}m=null}s=!0;const T=se(e),p=a||o||"";if(!p){s=!1;return}let E;try{E=oe(T,p),y&&S(!1)}catch(b){y&&(C.error("Failed to create WebSocket auth:",b),S(b instanceof Error?b.message:String(b))),s=!1;return}try{m=await ie({auth:E}),l=()=>{y&&(C.debug("WebSocket connection ready for doorbell"),u=0,S(!1))},m.addEventListener("ready",l),r=()=>{if(y&&!s){C.debug("WebSocket disconnected for doorbell, will attempt to reconnect"),f&&(clearTimeout(f),f=null),m=null,A=null,l=null,r=null;const L=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{y&&!s&&(C.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${u})`),g())},L)}},m.addEventListener("disconnected",r);const b=L=>{if(y){const _=L.variables.trigger.to_state.state;w(_)}};A=await m.subscribeMessage(b,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),s=!1}catch(b){if(s=!1,y){C.error("Failed to setup WebSocket connection:",b),C.error("WebSocket error details:",{message:b instanceof Error?b.message:String(b),code:b.code,name:b.name,wsUrl:E?.wsUrl,host:T,tokenLength:p?p.length:0}),b.code===2&&C.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),S(b instanceof Error?b.message:String(b));const L=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{y&&g()},L)}}}return g(),()=>{if(y=!1,s=!1,f&&(clearTimeout(f),f=null),m)try{l&&m.removeEventListener("ready",l),r&&m.removeEventListener("disconnected",r)}catch{}if(A){try{A()}catch{}A=null}if(m){try{m.close()}catch{}m=null}}},[c]),[h,x]},Xt=(e={})=>{const n=e.ENTITY_DOORBELL_BUTTON||"";n&&I.post($("/api/services/button/press",e),{entity_id:n}).catch(t=>{C.error("Failed to unlatch front door:",t)})},D={portrait:360/480,landscape:1920/1072,wide:770/216};function Jt(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&n.hasOwnProperty(t.orientation)&&n[t.orientation]++}),n}function ze(e,n,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const o=e.length,a=Jt(e);return o===1?Qt(e[0],n,t):o===2?Zt(a,e,n,t):o===3?en(a,e,n,t):o===4?tn(a,e,n,t):{videos:[],totalArea:0,efficiency:0}}function Qt(e,n,t){const o=D[e.orientation];let a,h;const w=n/t;return o>w?(a=n,h=n/o):(h=t,a=t*o),{videos:[{x:(n-a)/2,y:(t-h)/2,width:a,height:h,orientation:e.orientation}],totalArea:a*h,efficiency:a*h/(n*t)*100}}function Zt(e,n,t,o){if(e.portrait>0)return je(e,n,t,o);const a=[];e.landscape>0&&a.push("landscape"),e.wide>0&&a.push("wide");const h=a[0]||n[0].orientation,w=a[1]||n[1].orientation,x=D[h],S=D[w];if(e.landscape===1&&e.wide===1){const f=D.landscape,u=D.wide,s=t,l=s/f,r=s/u,g=l+r;let T,p,E;if(g<=o)T=l,p=r,E=s;else{const M=o/g;T=l*M,p=r*M,E=p*u}const b=(t-E)/2,_=q(n,[{x:b,y:0,width:E,height:p,orientation:"wide"},{x:b,y:p,width:E,height:T,orientation:"landscape"}]),R=E*T+E*p,k=R/(t*o)*100;return{videos:_,totalArea:R,efficiency:k}}if(e.wide===2){const f=D.wide,u=t,s=u/f,l=s*2;let r;l<=o?r=s:r=o/2;const T=q(n,[{x:0,y:0,width:u,height:r,orientation:"wide"},{x:0,y:r,width:u,height:r,orientation:"wide"}]),p=u*r*2,E=p/(t*o)*100;return{videos:T,totalArea:p,efficiency:E}}const c=[()=>{const f=t,u=f/2,s=f/2,l=u/x,r=s/S;return Math.max(l,r)<=o?{positions:[{x:0,y:(o-l)/2,width:u,height:l,orientation:h},{x:u,y:(o-r)/2,width:s,height:r,orientation:w}],totalArea:u*l+s*r}:null},()=>{const f=o,u=f/2,s=f/2,l=u*x,r=s*S;return Math.max(l,r)<=t?{positions:[{x:(t-l)/2,y:0,width:l,height:u,orientation:h},{x:(t-r)/2,y:u,width:r,height:s,orientation:w}],totalArea:l*u+r*s}:null}];let d=null,m=0;for(const f of c){const u=f();u&&u.totalArea>m&&(m=u.totalArea,d=u)}if(!d){const f=t/2,u=t/2,s=Math.min(f/x,o),l=Math.min(u/S,o);d={positions:[{x:0,y:(o-s)/2,width:f,height:s,orientation:h},{x:f,y:(o-l)/2,width:u,height:l,orientation:w}],totalArea:f*s+u*l}}const A=q(n,d.positions),y=d.totalArea/(t*o)*100;return{videos:A,totalArea:d.totalArea,efficiency:y}}function je(e,n,t,o){const a=e.portrait,h=n.length-a;if((a===3||a===4)&&h===0){const y=D.portrait,f=t/a,u=f/y,s=u<o?(o-u)/2:0,l=Math.min(u,o),r=[];let g=0;for(let E=0;E<a;E++){const b=Math.min(f,l*y);r.push({x:E*f+(f-b)/2,y:s,width:b,height:l,orientation:"portrait"}),g+=b*l}const T=q(n,r),p=g/(t*o)*100;return{videos:T,totalArea:g,efficiency:p}}n.filter(y=>y.orientation==="portrait");const w=n.filter(y=>y.orientation!=="portrait"),x=a>0?Math.min(t*.4,t*.5):0,S=t-x,c=[];let d=0;if(a===2&&h===0){const y=D.portrait,f=t/2,u=f/y,s=o;let l,r;u<=s?(r=u,l=f):(r=s,l=s*y);const g=(o-r)/2;c.push({x:(f-l)/2,y:g,width:l,height:r,orientation:"portrait"}),c.push({x:f+(f-l)/2,y:g,width:l,height:r,orientation:"portrait"}),d=l*r*2}else if(a===1&&h===1){const y=D.portrait,f=w[0],u=D[f.orientation],s=y+u,l=t*(y/s),r=t*(u/s),g=l/y,T=r/u,p=Math.min(o,Math.min(g,T)),E=(o-p)/2;c.push({x:0,y:E,width:l,height:p,orientation:"portrait"}),c.push({x:l,y:E,width:r,height:p,orientation:f.orientation}),d=l*p+r*p}else if(a===1&&h===2&&e.landscape===1&&e.wide===1){const y=D.portrait,f=D.wide,u=D.landscape,s=o,l=o*y,r=o/(1/f+1/u),g=r/f,T=r/u,p=l+r;if(Math.abs(p-t)<.1)c.push({x:0,y:0,width:l,height:s,orientation:"portrait"}),d+=l*s,w.find(_=>_.orientation==="wide")&&(c.push({x:0+l,y:0,width:r,height:g,orientation:"wide"}),d+=r*g),w.find(_=>_.orientation==="landscape")&&(c.push({x:0+l,y:g,width:r,height:T,orientation:"landscape"}),d+=r*T);else{const E=t/p,b=l*E,L=b/y,_=r*E,R=o/L;let k=b*R,M=o,O=_*R,P=O/f,W=O/u,Y=k+O;if(Y>t){const X=t/Y;k=k*X,M=k/y,O=O*X,P=O/f,W=O/u,Y=k+O,Y>t&&(O=t-k,P=O/f,W=O/u)}const U=k+O;if(U>t){const X=t/U;k=k*X,M=k/y,O=O*X,P=O/f,W=O/u}const G=0;c.push({x:G,y:0,width:k,height:M,orientation:"portrait"}),d+=k*M,w.find(X=>X.orientation==="wide")&&(c.push({x:G+k,y:0,width:O,height:P,orientation:"wide"}),d+=O*P),w.find(X=>X.orientation==="landscape")&&(c.push({x:G+k,y:P,width:O,height:W,orientation:"landscape"}),d+=O*W)}}else if(a===1&&h===3){const y=D.portrait,f=o,u=f*y,s=u,l=t-s;c.push({x:0,y:0,width:u,height:f,orientation:"portrait"}),d+=u*f;const r=o/3;for(let g=0;g<w.length;g++){const T=w[g],p=D[T.orientation],E=r,b=l;let L,_;b/p<=E?(L=b,_=L/p):(_=E,L=_*p);const R=g*r+(r-_)/2;c.push({x:s+(l-L)/2,y:R,width:L,height:_,orientation:T.orientation}),d+=L*_}}else if(a===2&&h===1){const y=D.portrait,f=w[0],u=D[f.orientation],s=o/2,l=s*y,r=t-l,g=o*u;let T,p;g<=r?(p=o,T=p*u):(T=r,p=T/u);const E=l,b=s,L=(o-p)/2,_=(o/2-b)/2,R=o/2+(o/2-b)/2;c.push({x:0,y:L,width:T,height:p,orientation:f.orientation}),d+=T*p,c.push({x:r,y:_,width:E,height:b,orientation:"portrait"}),d+=E*b,c.push({x:r,y:R,width:E,height:b,orientation:"portrait"}),d+=E*b}else if(a===1&&h===2){const y=D.portrait,f=o,u=f*y,s=u,l=t-s;c.push({x:0,y:0,width:u,height:f,orientation:"portrait"}),d+=u*f;const r=o/2;for(let g=0;g<w.length;g++){const T=w[g],p=D[T.orientation],E=r,b=l;let L,_;b/p<=E?(L=b,_=L/p):(_=E,L=_*p);const R=g*r+(r-_)/2;c.push({x:s+(l-L)/2,y:R,width:L,height:_,orientation:T.orientation}),d+=L*_}}else{const y=a;if(y>0){const f=o/y,u=D.portrait;for(let s=0;s<y;s++){const l=Math.min(f,x/u),r=l*u,g=s*f+(f-l)/2;c.push({x:(x-r)/2,y:g,width:r,height:l,orientation:"portrait"}),d+=r*l}}if(w.length>0){const f=o/w.length;for(let u=0;u<w.length;u++){const s=w[u],l=D[s.orientation],r=f,g=S;let T,p;g/l<=r?(T=g,p=T/l):(p=r,T=p*l);const E=u*f+(f-p)/2;c.push({x:x+(S-T)/2,y:E,width:T,height:p,orientation:s.orientation}),d+=T*p}}}const m=q(n,c),A=d/(t*o)*100;return{videos:m,totalArea:d,efficiency:A}}function q(e,n){const t=new Array(n.length),o=new Set,a=new Set;for(let x=0;x<n.length;x++){const S=n[x];for(let c=0;c<e.length;c++)if(!o.has(c)&&e[c].orientation===S.orientation){t[x]={...S,orientation:e[c].orientation},o.add(c),a.add(x);break}}const h=[];for(let x=0;x<n.length;x++)a.has(x)||h.push(x);let w=0;for(let x=0;x<e.length;x++)if(!o.has(x)&&w<h.length){const S=h[w];t[S]={...n[S],orientation:e[x].orientation},w++}return t}function en(e,n,t,o){if(e.portrait>0)return je(e,n,t,o);if(e.landscape===2&&e.wide===1){const s=D.landscape,l=D.wide,r=t,g=r/l,T=o-g,p=t/2,E=p/s;let b,L,_,R;if(g<=o&&E<=T)b=r,L=g,_=p,R=E;else{const U=o/(g+E),G=Math.min(1,U);L=g*G,b=L*l,R=E*G,_=R*s}const k=(t-b)/2,M=L+(T-R)/2,P=q(n,[{x:k,y:0,width:b,height:L,orientation:"wide"},{x:0,y:M,width:_,height:R,orientation:"landscape"},{x:_,y:M,width:_,height:R,orientation:"landscape"}]),W=b*L+_*R*2,Y=W/(t*o)*100;return{videos:P,totalArea:W,efficiency:Y}}if(e.landscape===1&&e.wide===2){const s=D.landscape,l=D.wide,r=t/2,g=r/l,p=o-g,E=p*s;let b,L,_,R;if(g<=o&&E<=t&&g+p<=o)b=r,L=g,_=E,R=p;else{const G=g+p,Ee=o/G;b=r,L=g*Ee,R=p*Ee,_=R*s}const k=0,M=t/2,O=(t-_)/2,W=q(n,[{x:k,y:0,width:b,height:L,orientation:"wide"},{x:M,y:0,width:b,height:L,orientation:"wide"},{x:O,y:L,width:_,height:R,orientation:"landscape"}]),Y=b*L*2+_*R,U=Y/(t*o)*100;return{videos:W,totalArea:Y,efficiency:U}}if(e.wide===3){const s=D.wide,l=t/2,r=l/s,T=o-r,p=T*s;let E,b,L,_;if(r<=o&&p<=t&&r+T<=o)E=l,b=r,L=p,_=T;else{const U=r+T,G=o/U;E=l,b=r*G,_=T*G,L=_*s,L>t&&(L=t,_=L/s)}const R=0,k=t/2,M=(t-L)/2,P=q(n,[{x:R,y:0,width:E,height:b,orientation:"wide"},{x:k,y:0,width:E,height:b,orientation:"wide"},{x:M,y:b,width:L,height:_,orientation:"wide"}]),W=E*b*2+L*_,Y=W/(t*o)*100;return{videos:P,totalArea:W,efficiency:Y}}if(e.landscape===3){const s=D.landscape,l=t/(s*1.5),r=Math.min(o,l),g=r/2,T=r,p=g*s,E=T*s,b=(o-r)/2,L=[{x:0,y:b,width:p,height:g,orientation:"landscape"},{x:0,y:b+g,width:p,height:g,orientation:"landscape"},{x:p,y:b,width:E,height:T,orientation:"landscape"}],_=q(n,L),R=p*r+E*r,k=R/(t*o)*100;return{videos:_,totalArea:R,efficiency:k}}const a=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)a.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)a.push("wide");const h=a[0]||n[0].orientation,w=a[1]||n[1].orientation,x=a[2]||n[2].orientation,S=D[h],c=D[w],d=D[x],m=[()=>{const s=t*.6,l=t*.4,r=s/S,g=l/c,T=l/d,p=g+T;return r<=o&&p<=o?{positions:[{x:0,y:(o-r)/2,width:s,height:r,orientation:h},{x:s,y:0,width:l,height:g,orientation:w},{x:s,y:g,width:l,height:T,orientation:x}],totalArea:s*r+l*g+l*T}:null},()=>{const s=o*.5,l=o*.5,r=s*S,g=s*c,T=l*d;return r+g<=t&&T<=t?{positions:[{x:0,y:0,width:r,height:s,orientation:h},{x:r,y:0,width:g,height:s,orientation:w},{x:(t-T)/2,y:s,width:T,height:l,orientation:x}],totalArea:r*s+g*s+T*l}:null},()=>{const s=t/3,l=s/S,r=s/c,g=s/d;return Math.max(l,r,g)<=o?{positions:[{x:0,y:(o-l)/2,width:s,height:l,orientation:h},{x:s,y:(o-r)/2,width:s,height:r,orientation:w},{x:s*2,y:(o-g)/2,width:s,height:g,orientation:x}],totalArea:s*l+s*r+s*g}:null}];let A=null,y=0;for(const s of m){const l=s();l&&l.totalArea>y&&(y=l.totalArea,A=l)}if(!A){const s=t/3,l=Math.min(s/S,o),r=Math.min(s/c,o),g=Math.min(s/d,o);A={positions:[{x:0,y:(o-l)/2,width:s,height:l,orientation:h},{x:s,y:(o-r)/2,width:s,height:r,orientation:w},{x:s*2,y:(o-g)/2,width:s,height:g,orientation:x}],totalArea:s*l+s*r+s*g}}const f=q(n,A.positions),u=A.totalArea/(t*o)*100;return{videos:f,totalArea:A.totalArea,efficiency:u}}function tn(e,n,t,o){if(e.portrait>0)return je(e,n,t,o);const a=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)a.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)a.push("wide");const h=a[0]||n[0].orientation,w=a[1]||n[1].orientation,x=a[2]||n[2].orientation,S=a[3]||n[3].orientation,c=D[h],d=D[w],m=D[x],A=D[S],y=[()=>{const r=t/2,g=o/2,T=Math.min(r,g*c),p=T/c,E=Math.min(r,g*d),b=E/d,L=Math.min(r,g*m),_=L/m,R=Math.min(r,g*A),k=R/A;return{positions:[{x:(r-T)/2,y:(g-p)/2,width:T,height:p,orientation:h},{x:r+(r-E)/2,y:(g-b)/2,width:E,height:b,orientation:w},{x:(r-L)/2,y:g+(g-_)/2,width:L,height:_,orientation:x},{x:r+(r-R)/2,y:g+(g-k)/2,width:R,height:k,orientation:S}],totalArea:T*p+E*b+L*_+R*k}},()=>{const r=t*.6,g=t*.4,T=r/c,p=o/3,E=Math.min(g,p*d),b=E/d,L=Math.min(g,p*m),_=L/m,R=Math.min(g,p*A),k=R/A;return T<=o?{positions:[{x:0,y:(o-T)/2,width:r,height:T,orientation:h},{x:r,y:0,width:E,height:b,orientation:w},{x:r,y:p,width:L,height:_,orientation:x},{x:r,y:p*2,width:R,height:k,orientation:S}],totalArea:r*T+E*b+L*_+R*k}:null},()=>{const r=t/4,g=r/c,T=r/d,p=r/m,E=r/A;return Math.max(g,T,p,E)<=o?{positions:[{x:0,y:(o-g)/2,width:r,height:g,orientation:h},{x:r,y:(o-T)/2,width:r,height:T,orientation:w},{x:r*2,y:(o-p)/2,width:r,height:p,orientation:x},{x:r*3,y:(o-E)/2,width:r,height:E,orientation:S}],totalArea:r*g+r*T+r*p+r*E}:null}];let f=null,u=0;for(const r of y){const g=r();g&&g.totalArea>u&&(u=g.totalArea,f=g)}if(!f){const r=t/2,g=o/2,T=Math.min(g,r/c),p=Math.min(g,r/d),E=Math.min(g,r/m),b=Math.min(g,r/A);f={positions:[{x:(r-r)/2,y:(g-T)/2,width:r,height:T,orientation:h},{x:r+(r-r)/2,y:(g-p)/2,width:r,height:p,orientation:w},{x:(r-r)/2,y:g+(g-E)/2,width:r,height:E,orientation:x},{x:r+(r-r)/2,y:g+(g-b)/2,width:r,height:b,orientation:S}],totalArea:r*T+r*p+r*E+r*b}}const s=q(n,f.positions),l=f.totalArea/(t*o)*100;return{videos:s,totalArea:f.totalArea,efficiency:l}}const nn=e=>{const n=V();n.HASS_HOST;const t=n.HASS_ACCESS_TOKEN||"",o=n.SUPERVISOR_TOKEN||"",[a,h]=j.useState({}),[w,x]=j.useState(!0),[S,c]=j.useState(null);return j.useEffect(()=>{if(!e||e.length===0){x(!1);return}let d=!0;async function m(){x(!0),c(null);try{const A=e.map(async f=>{try{const u=$(`/api/states/${f}`,n),l=(await I(u)).data?.attributes?.access_token||null;return{entityId:f,accessToken:l}}catch(u){return C.error(`Failed to fetch access token for ${f}:`,u),{entityId:f,accessToken:null}}}),y=await Promise.all(A);if(d){const f={};y.forEach(({entityId:u,accessToken:s})=>{s&&(f[u]=s)}),h(f),x(!1)}}catch(A){d&&(C.error("Failed to fetch camera access tokens:",A),c(z(A)),x(!1))}}return m(),()=>{d=!1}},[e?.length,e?.join(",")]),j.useEffect(()=>{if(!e||e.length===0)return;let d=!0,m=null;async function A(){if(d)try{const y=e.map(async u=>{try{const s=$(`/api/states/${u}`,n),r=(await I(s)).data?.attributes?.access_token||null;return{entityId:u,accessToken:r}}catch(s){return C.debug(`Failed to refresh access token for ${u}:`,s),null}}),f=await Promise.all(y);d&&h(u=>{const s={...u};return f.forEach(l=>{l&&l.accessToken&&(s[l.entityId]=l.accessToken)}),s})}catch{}}return m=setInterval(A,300*1e3),()=>{d=!1,m&&clearInterval(m)}},[e?.length,e?.join(",")]),j.useEffect(()=>{if(!e||e.length===0)return;let d=null,m=[],A=!0,y=null,f=0,u=!1,s=null,l=null;async function r(){if(u||!A)return;if(d){try{s&&(d.removeEventListener("ready",s),s=null),l&&(d.removeEventListener("disconnected",l),l=null),m.forEach(E=>{E&&E()}),m=[],d.close()}catch{}d=null}u=!0;const g=se(n),T=o||t||"";if(!T){u=!1;return}let p;try{p=oe(g,T),A&&c(!1)}catch(E){A&&(C.error("Failed to create WebSocket auth for camera tokens:",E),c(E instanceof Error?E.message:String(E))),u=!1;return}try{d=await ie({auth:p}),s=()=>{A&&(C.debug("WebSocket connection ready for camera tokens"),f=0,c(!1))},d.addEventListener("ready",s),l=()=>{if(A&&!u){C.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),y&&(clearTimeout(y),y=null),d=null,m=[],s=null,l=null;const E=Math.min(1e3*Math.pow(2,f),3e4);f++,y=setTimeout(()=>{A&&!u&&(C.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${f})`),r())},E)}},d.addEventListener("disconnected",l);for(const E of e){const b=_=>{if(A){const k=_.variables.trigger.to_state?.attributes?.access_token||null;h(M=>k?{...M,[E]:k}:M)}},L=await d.subscribeMessage(b,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:E}});m.push(L)}u=!1}catch(E){if(u=!1,A){C.error("Failed to setup WebSocket connection for camera tokens:",E),c(E instanceof Error?E.message:String(E));const b=Math.min(1e3*Math.pow(2,f),3e4);f++,y=setTimeout(()=>{A&&r()},b)}}}return r(),()=>{if(A=!1,u=!1,y&&(clearTimeout(y),y=null),d)try{s&&d.removeEventListener("ready",s),l&&d.removeEventListener("disconnected",l)}catch{}if(m.forEach(g=>{if(g)try{g()}catch{}}),m=[],d){try{d.close()}catch{}d=null}}},[e?.length,e?.join(",")]),[a,w,S]},on=(e,n=null,t=null)=>{if(!e)return null;let o=t||"";if(!o&&typeof window<"u"&&window.location){const h=window.location.protocol,w=window.location.hostname,x=window.location.port?`:${window.location.port}`:"";o=`${h}//${w}${x}`}if(!o)return C.warn("HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL"),null;const a=`${o}/api/camera_proxy_stream/${e}`;return n?`${a}?token=${encodeURIComponent(n)}`:a},Ce=45e3,rn=v.div`
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
`,sn=()=>{const e=V(),n=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[];if(!n)return null;const[o,a]=j.useState(!1),[h]=qt(),[w,x]=j.useState(void 0),[S,c]=j.useState(100),[d,m]=j.useState("0"),A=j.useMemo(()=>t.map(l=>l.entity_id).filter(Boolean),[t]),[y]=nn(A);j.useEffect(()=>{if(h==="off"&&o){const l=window.setTimeout(()=>{a(!1),x(void 0)},Ce);return x(l),m(Ce+"ms"),c(0),()=>{l&&window.clearTimeout(l)}}else h==="on"&&(m(0),c(100),a(!0))},[h,o]),j.useEffect(()=>{h==="on"&&w!==void 0&&(window.clearTimeout(w),m(0),c(100),x(void 0))},[w,h]);const[f,u]=j.useState(null),s=()=>{f===null?u("confirm"):f==="confirm"&&(u("opening"),Xt(e),setTimeout(()=>u(null),2e3))};return j.useEffect(()=>{if(f==="confirm"){const l=setTimeout(()=>{u(null)},3e3);return()=>{clearTimeout(l)}}},[f]),j.useEffect(()=>{o||u(null)},[o]),i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:()=>a(l=>!l),children:"CCTV"}),i.jsx(re,{visible:o,onClick:s,onClose:()=>{a(!1),u(null)},fullsize:!0,children:i.jsxs(rn,{onClick:s,children:[i.jsx(Ke,{completed:S,height:10,bgColor:w===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:d,transitionTimingFunction:"linear"}),i.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const l=t.map(b=>({orientation:b.orientation||"landscape"})),r=window.innerWidth,g=window.innerHeight-10,T=ze(l,r,g),p={portrait:t.filter(b=>(b.orientation||"landscape")==="portrait"),landscape:t.filter(b=>(b.orientation||"landscape")==="landscape"),wide:t.filter(b=>b.orientation==="wide")},E={portrait:0,landscape:0,wide:0};return T.videos.map((b,L)=>{const _=b.orientation,R=E[_],k=p[_][R];if(!k)return null;E[_]++;const M=y[k.entity_id]||null,O=on(k.entity_id,M,e.HASS_HOST);return O?i.jsxs("div",{className:"video-container",style:{left:`${b.x}px`,top:`${b.y}px`,width:`${b.width}px`,height:`${b.height}px`},children:[i.jsx("img",{src:O,className:_,alt:"Camera stream",crossOrigin:"anonymous"},`${k.entity_id}-${L}`),i.jsx("div",{className:"video-overlay",onClick:()=>s()})]},`${_}-${R}-${L}`):null})})()}),f==="confirm"&&i.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),f==="opening"&&i.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},an=v.div`
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

`,cn=({nextWeek:e,previousWeek:n,startWeekWithToday:t})=>i.jsxs(an,{children:[i.jsxs("div",{className:"buttons",children:[i.jsx(F,{path:mt,size:"32px",color:"#ffffff",onClick:n}),i.jsx(F,{path:gt,size:"32px",color:"#ffffff",onClick:e}),i.jsx("button",{onClick:t,children:"Today"}),i.jsx(sn,{})]}),i.jsx(Kt,{}),i.jsx(F,{path:xt,size:"32px",color:"#ffffff",className:H("indicator")})]}),ln=N.memo(cn),dn=6e4,_e=(e=dn,n=void 0)=>{const[t,o]=j.useState(!0);return j.useEffect(()=>{const a=setInterval(()=>{o(h=>!h)},e);return()=>{clearInterval(a)}},[e,n]),t},fn={mdiDelete:yt,mdiCake:Et},un=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return fn[n]||void 0},hn=(e,n,t,o,a,h)=>I(a(e.name,{start:n.toISO(),end:t.toISO()}),{timeout:1e4,signal:h}).then(w=>{!w.data||!Array.isArray(w.data)||w.data.forEach(x=>{const S="dateTime"in x.start?B.fromISO(x.start.dateTime):B.fromSQL(x.start.date);let c;"dateTime"in x.end?c=Math.floor(B.fromISO(x.end.dateTime).diff(n,"days").as("days")):c=Math.floor(B.fromSQL(x.end.date).diff(n,"days").as("days"))-1;const d=Math.floor(S.diff(n,"days").as("days"));c>=o.length&&(c=o.length-1);const m="dateTime"in x.start?"events":"allDay";if(d>=0&&d<o.length)for(let A=d;A<=c;A++)o[A][m]=[...o[A][m],{...x,icon:e.icon}]})}).catch(w=>{if(!(I.isCancel(w)||w.name==="AbortError"||w.code==="ERR_CANCELED"))throw w}),ke=new Map,pn=300*1e3,mn=e=>e.toISODate(),gn=(e,n,t,o,a,h,w,x,S)=>{const c=[0,1,2,3,4,5].map(f=>e.plus({days:f}).startOf("day"));c[6]=e.plus({days:6}).endOf("day");const d=mn(e),m=ke.get(d);if(m&&Date.now()-m.timestamp<pn){S.current&&t(m.data);return}const A=c.map(f=>({date:f,allDay:[],events:[]}));if(!w||w.length===0){S.current&&(t(A),o(!1));return}const y=new AbortController;a.current&&a.current.abort(),a.current=y;try{S.current&&o(!0);const f=w.map(u=>hn(u,c[0],c[6],A,x,y.signal));Promise.all(f).then(()=>{S.current&&!y.signal.aborted&&(ke.set(d,{data:A,timestamp:Date.now()}),t(A),h(!1))}).catch(u=>{S.current&&!y.signal.aborted&&h(z(u))}).finally(()=>{S.current&&!y.signal.aborted&&o(!1)})}catch(f){S.current&&!y.signal.aborted&&(h(z(f)),o(!1))}},ve=[],xn=e=>{const n=V(),t=n.CALENDARS||[],o=j.useMemo(()=>t.map(s=>({name:s.name,icon:un(s.icon)})),[t]),a=j.useCallback(s=>$(`/api/calendars/${s}`,n),[n]),h=j.useCallback((s,l)=>`${a(s)}?${Dt.stringify(l)}`,[a]),[w,x]=j.useState(ve),[S,c]=j.useState(!1),[d,m]=j.useState(!1),[A,y]=j.useState(null),f=N.useRef(null),u=N.useRef(!0);return _e(6e4,"Calendar"),j.useEffect(()=>(u.current=!0,e!==void 0&&((A===null||!A.equals(e))&&(x(ve),y(e)),gn(e,w,x,c,f,m,o,h,u)),()=>{u.current=!1,f.current&&f.current.abort()}),[e,o]),[w,d]};function ne(e){const[n,t]=j.useState(!1);function o({key:h}){h===e&&t(!0)}const a=({key:h})=>{h===e&&t(!1)};return j.useEffect(()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",a)}),[e]),n}const En=()=>{let e=new Date,t=(e.getDay()+6)%7,o=new Date(e.setDate(e.getDate()-t));return B.fromJSDate(o)},yn=e=>{const n=()=>e(x=>x.plus({days:7})),t=ne("ArrowRight");j.useEffect(()=>{t&&n()},[t]);const o=()=>e(x=>x.minus({days:7})),a=ne("ArrowLeft");j.useEffect(()=>{a&&o()},[a]);const h=()=>e(En()),w=ne("t");return j.useEffect(()=>{w&&h()},[w]),{nextWeek:n,previousWeek:o,startWeekWithToday:h}},wn=e=>{const[n,t]=N.useState(0),[o,a]=N.useState(0),h=50;return{onTouchStart:c=>{a(0),t(c.targetTouches[0].clientX)},onTouchMove:c=>a(c.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!o)return;const c=n-o,d=c>h,m=c<-h;d&&e.onSwipedLeft(),m&&e.onSwipedRight()}}},Oe=e=>B.fromISO(e).toLocaleString(B.TIME_24_SIMPLE),we=e=>e.toFormat("c")>=6,be=e=>e.hasSame(B.now(),"day"),bn=v.div`
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
`,An=()=>{const[e,n]=j.useState(void 0),[t,o]=xn(e),{nextWeek:a,previousWeek:h,startWeekWithToday:w}=yn(n);j.useEffect(()=>{w()},[]);const x=wn({onSwipedLeft:()=>a(),onSwipedRight:()=>h()}),S=N.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),c=N.useMemo(()=>t.slice(0,7),[t]);return i.jsxs(bn,{...x,children:[i.jsx(ln,{nextWeek:a,previousWeek:h,startWeekWithToday:w}),i.jsxs("div",{className:"schedule",children:[c.map((d,m)=>i.jsx("div",{className:H({weekend:we(d.date),today:be(d.date)},"caption"),children:i.jsx("h2",{children:d.date.toLocaleString(S)})},m)),c.map((d,m)=>i.jsx("div",{className:H("allDayRow",{weekend:we(d.date),today:be(d.date)}),children:d.allDay.map((A,y)=>i.jsx("div",{className:"allDayEvent",children:A.summary},y))},m)),c.map((d,m)=>i.jsx("div",{className:H("eventRow",{weekend:we(d.date),today:be(d.date)}),children:d.events.map((A,y)=>i.jsxs("div",{className:"event",children:[i.jsx("div",{children:A.summary}),i.jsxs("h3",{children:[A.icon&&i.jsx(F,{path:A.icon,size:"1rem",color:"#ffffff"}),Oe(A.start.dateTime)," - ",Oe(A.end.dateTime)]})]},y))},m))]}),t.length===0&&i.jsx("div",{className:"loading",children:o!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):i.jsx(Ye,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),o!==!1&&t.length>0&&i.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:i.jsxs("div",{children:["Warnung: ",o instanceof Error?o.message:String(o)]})})]})},ge={"clear-day":{icon:it,label:"Klar",color:"#eeeef5"},"clear-night":{icon:ot,label:"Klar",color:"#eeeef5"},rain:{icon:nt,label:"Regen",color:"#80a5d6"},snow:{icon:tt,label:"Schnee",color:"#8c82ce"},sleet:{icon:et,label:"Graupel",color:"#aba4db"},wind:{icon:Ze,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:Qe,label:"Neblig",color:"#d5dae2"},cloudy:{icon:Je,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:Xe,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:qe,label:"Teils bewölkt",color:"#d5dae2"}},Sn=e=>{const[n,t]=j.useState([]),[o,a]=j.useState(!1),h=_e(6e4*10,"Weather"),w=V(),x=w.ENABLE_WEATHER||!1,S=w.WEATHER_API_KEY||"",c=w.WEATHER_LATITUDE,d=w.WEATHER_LONGITUDE,m=x&&S&&c&&d,A=()=>`./forecast/${S}/${c},${d}?&units=si&exclude=minutely`;return j.useEffect(()=>{m&&I(A()).then(y=>{t(y.data),a(!1)}).catch(y=>{a(z(y))}).finally(()=>{})},[h,e,m,x,S,c,d]),[n,o]},Tn=st(at),De=v.div`

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
`,Ie=N.memo(({data:e,daily:n=!1})=>i.jsxs("div",{children:[i.jsxs("div",{children:[!n&&B.fromSeconds(e.time).toLocaleString(B.TIME_24_SIMPLE),n&&B.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),i.jsx("div",{children:i.jsx(Se,{icon:e.icon})}),i.jsx("div",{children:i.jsxs("strong",{children:[!n&&i.jsxs(i.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&i.jsxs(i.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),i.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),i.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Ln=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:ge[n.icon]?.color||"#ffffff",text:ge[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),Se=({icon:e})=>{const n=ge[e];return i.jsx(n.icon,{size:60,color:"#ffffff"})},jn=()=>{if(!(V().ENABLE_WEATHER||!1))return null;const[t,o]=Sn(),[a,h]=j.useState(!1),w=ne("w"),x=j.useRef(),S=N.useCallback(()=>h(y=>!y),[]),c=N.useCallback(()=>h(!0),[]),d=N.useMemo(()=>Ln(t),[t]),m=N.useMemo(()=>[3,6,9,12],[]),A=N.useMemo(()=>[1,2,3,4,5,6,7],[]);return j.useEffect(()=>{if(!a||!x.current||!t||!t.hourly||d.length===0)return;const y={timezone:"Europe/Berlin"},f=document.createElement("div");return x.current.textContent="",x.current.appendChild(f),It(f,d,y),()=>{x.current&&(x.current.textContent="")}},[a,d]),j.useEffect(()=>{w&&S()},[w]),!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?o!==!1?i.jsx(De,{children:i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":i.jsxs(De,{children:[i.jsxs("div",{onClick:c,children:[i.jsxs("div",{className:"headline",children:[i.jsx(Se,{icon:t.currently.icon}),i.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),i.jsx("div",{className:"forecast",children:m.map((y,f)=>i.jsx(Ie,{data:t.hourly.data[y]},f))})]}),i.jsx(re,{visible:a,onClick:S,children:i.jsxs("div",{className:"full-weather",children:[o!==!1&&i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),i.jsxs("div",{className:"detail-header",children:[i.jsx("div",{children:i.jsxs("div",{className:"headline",children:[i.jsx(Se,{icon:t.daily.data[0].icon}),i.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",i.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),i.jsx("h3",{children:ge[t.daily.data[0].icon].label})]}),i.jsx("div",{className:"values",children:i.jsxs("div",{className:"table",children:[i.jsxs("div",{children:[i.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Regen:"})," ",t.daily.data[0].precipProbability*100," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),i.jsxs("div",{children:[i.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),i.jsx("h3",{children:"Die nächsten 24 Stunden"}),i.jsx("div",{ref:x}),i.jsx("h3",{children:"Die nächste Woche"}),i.jsx("div",{className:"forecast",children:A.map((y,f)=>i.jsx(Ie,{data:t.daily.data[y],daily:!0},f))}),i.jsxs("div",{className:"info",children:["Aktualisiert ",i.jsx(rt,{date:B.fromSeconds(t.currently.time).toJSDate(),formatter:Tn})]})]})})]})},_n=N.memo(jn),Rn="AK Wandsbek",Nn="Hamburg",Cn="Master:62016",kn="STATION",vn={x:10.091341,y:53.568702},On={name:Rn,city:Nn,id:Cn,type:kn,coordinate:vn},pe={departureList:"departureList",checkName:"checkName"},Dn=async(e,n)=>I({method:"post",url:`./gti/public/${e}`,data:n,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}),Me=(e,n)=>e.realtimeOffset-n.realtimeOffset,In=e=>{const n=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:n.filter(t=>t.directionId===1).slice(0,3).sort(Me),to:n.filter(t=>t.directionId===6).slice(0,3).sort(Me)}},Mn=e=>{const t=V().ENABLE_HVV||!1,[o,a]=j.useState([]),[h,w]=j.useState(!1),x=_e(6e4),S=t;return j.useEffect(()=>{if(!S)return;if(!(e in pe)){C.warn(e,"not supported by HVV connector");return}let c={version:51};switch(e){case pe.checkName:c={...c,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case pe.departureList:const d=B.now();c={...c,station:On,time:{date:d.toFormat("dd.MM.yyyy"),time:d.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:c=void 0}Dn(e,c).then(d=>{a(In(d.data)),w(!1)}).catch(d=>{w(z(d))})},[e,x,S,t]),[o,h]},Pn=v.div`
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
`,Pe=N.memo(({line:e,direction:n,realtimeOffset:t})=>i.jsxs("div",{className:"departure",children:[i.jsx("div",{children:i.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),i.jsx("div",{children:t===0?"Jetzt":i.jsxs(i.Fragment,{children:["in ",t," '"]})})]})),$n=()=>{if(!(V().ENABLE_HVV||!1))return null;const[t,o]=Mn(pe.departureList);return i.jsx(Pn,{children:o!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((a,h)=>i.jsx(Pe,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},h)),i.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((a,h)=>i.jsx(Pe,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},h))]})})},Wn=N.memo($n),Vn=()=>{const e=V(),n=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const o=e.ENTITY_CHARGING_STATE||"",a=e.ENTITY_STATE_OF_CHARGE||"",h=e.HASS_ACCESS_TOKEN||"",w=e.SUPERVISOR_TOKEN||"",[x,S]=j.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[c,d]=j.useState(!1),m=n&&(t||o||a);return j.useEffect(()=>{if(!m)return;(async()=>{const y=[];t&&y.push(I($(`/api/states/${t}`,e)).then(s=>({type:"preclimateStatus",value:s.data.state==="on"})).catch(s=>({type:"preclimateStatus",error:z(s)}))),o&&y.push(I($(`/api/states/${o}`,e)).then(s=>({type:"chargingState",value:s.data.state==="on"})).catch(s=>({type:"chargingState",error:z(s)}))),a&&y.push(I($(`/api/states/${a}`,e)).then(s=>({type:"stateOfCharge",value:parseFloat(s.data.state)||0})).catch(s=>({type:"stateOfCharge",error:z(s)})));const f=await Promise.all(y);let u=!1;f.forEach(s=>{s.error?u=s.error:S(l=>({...l,[s.type]:s.value}))}),d(u||!1)})()},[m,n,t,o,a]),j.useEffect(()=>{let A=null,y=[],f=!0,u=null,s=0,l=!1,r=null,g=null;async function T(){if(!m||!f||l)return;if(A){try{r&&(A.removeEventListener("ready",r),r=null),g&&(A.removeEventListener("disconnected",g),g=null),y.forEach(L=>{L&&L()}),y=[],A.close()}catch{}A=null}l=!0;const p=se(e),E=w||h||"";if(!E){l=!1;return}let b;try{b=oe(p,E),f&&d(!1)}catch(L){f&&(C.error("Failed to create WebSocket auth:",L),d(L instanceof Error?L.message:String(L))),l=!1;return}try{A=await ie({auth:b}),r=()=>{f&&(C.debug("WebSocket connection ready for EV entities"),s=0,d(!1))},A.addEventListener("ready",r),g=()=>{if(f&&!l){C.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),u&&(clearTimeout(u),u=null),A=null,y=[],r=null,g=null;const R=Math.min(1e3*Math.pow(2,s),3e4);s++,u=setTimeout(()=>{f&&!l&&(C.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${s})`),T())},R)}},A.addEventListener("disconnected",g);const L=R=>{if(f){const k=R.variables.trigger.to_state.entity_id,M=R.variables.trigger.to_state.state;S(O=>{const P={...O};return k===t?P.preclimateStatus=M==="on":k===o?P.chargingState=M==="on":k===a&&(P.stateOfCharge=parseFloat(M)||0),P})}},_=[];t&&_.push(t),o&&_.push(o),a&&_.push(a);for(const R of _){const k=await A.subscribeMessage(L,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:R}});y.push(k)}l=!1}catch(L){if(l=!1,f){C.error("Failed to setup WebSocket connection:",L),d(L instanceof Error?L.message:String(L));const _=Math.min(1e3*Math.pow(2,s),3e4);s++,u=setTimeout(()=>{f&&T()},_)}}}return T(),()=>{if(f=!1,l=!1,u&&(clearTimeout(u),u=null),A)try{r&&A.removeEventListener("ready",r),g&&A.removeEventListener("disconnected",g)}catch{}if(y.forEach(p=>{if(p)try{p()}catch{}}),y=[],A){try{A.close()}catch{}A=null}}},[m,n,t,o,a,h,w]),[x,c]},Bn=e=>{const n=e?.ENTITY_PRECLIMATE_START||"";n&&I.post($("/api/services/button/press",e),{entity_id:n}).catch(t=>{C.error("Failed to start preclimate:",t)})},Hn=e=>{const n=e?.ENTITY_PRECLIMATE_STOP||"";n&&I.post($("/api/services/button/press",e),{entity_id:n}).catch(t=>{C.error("Failed to stop preclimate:",t)})},Yn=v.div`
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
`,Fn=(e,n)=>n?bt:e>=80?At:e>=50?St:e>=20?Tt:Lt,Un=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",zn=()=>{const e=V();if(!(e.ENABLE_EV||!1))return null;const[t,o]=Vn(),{preclimateStatus:a,chargingState:h,stateOfCharge:w}=t,[x,S]=N.useState(!1),[c,d]=N.useState(null),[m,A]=N.useState(!1),[y,f]=N.useState(!1),[u,s]=N.useState(0),l=N.useRef(null),r=N.useRef(null),g=N.useRef(a),T=N.useRef(null);N.useEffect(()=>{g.current!==a&&(x&&T.current!==null&&a===(c==="start")&&(s(c==="start"?360:0),f(!0),setTimeout(()=>{S(!1),d(null),f(!1),s(0),T.current=null,A(!1)},300),l.current&&(clearTimeout(l.current),l.current=null)),g.current=a)},[a,x,c]),N.useEffect(()=>{if(!x||y){r.current&&(cancelAnimationFrame(r.current),r.current=null);return}const M=T.current||Date.now(),O=1e4,P=c==="stop",W=()=>{const Y=Date.now()-M,U=Math.min(Y/O,1);s(P?360*(1-U):360*U),U<1&&!y&&(r.current=requestAnimationFrame(W))};return r.current=requestAnimationFrame(W),()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null)}},[x,y,c]),N.useEffect(()=>()=>{l.current&&clearTimeout(l.current),r.current&&cancelAnimationFrame(r.current)},[]);const p=N.useCallback(()=>{if(o!==!1||x)return;const M=!a,O=M?"start":"stop";S(!0),d(O),f(!1),A(!1),s(0),T.current=Date.now(),g.current=a,M?Bn(e):Hn(e),l.current=setTimeout(()=>{x&&(A(!0),setTimeout(()=>{S(!1),d(null),f(!1),s(0),A(!1),T.current=null},500))},15e3)},[a,o,x]),E=Fn(w||0,h),b=Un(w||0),L=Math.round(w||0),_=x?c==="start":a,R=c==="start"?"#17e146":"#f85a5a",k=c==="start"?"clockwise":"counterclockwise";return i.jsxs(Yn,{className:H({disabled:o!==!1}),children:[i.jsxs("h2",{children:["Auto",o!==!1?i.jsxs("div",{className:"battery-info",children:[i.jsx(F,{path:Le,size:"1.2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsxs("div",{className:"battery-info",children:[i.jsxs("span",{className:"charge-percentage",children:[L,"%"]}),i.jsx(F,{path:E,size:"1.2rem",color:b})]})]}),o===!1&&i.jsxs("div",{className:"preclimate-button-wrapper",children:[x&&i.jsx("div",{className:H("progress-ring",k,{complete:y}),style:{"--progress-color":R,"--progress-angle":`${u}deg`,"--progress-gradient":c==="stop"?`conic-gradient(from -90deg, ${R} 0deg, ${R} ${u}deg, transparent ${u}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${R} 0deg, ${R} ${u}deg, transparent ${u}deg, transparent 360deg)`}}),i.jsxs("button",{className:H("preclimate-button",{spinning:_&&!x,shaking:m}),onClick:p,disabled:o!==!1||x,children:[i.jsx(F,{path:wt,size:"2rem",color:_?"#ff9800":"#ffffff"}),i.jsx("span",{children:_?"Stop":"Start"})]})]})]})},Gn=N.memo(zn),Kn=()=>{const e=V(),n=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",o=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[h,w]=j.useState("closed"),[x,S]=j.useState(!1),c=n&&t,d=t?$(`/api/states/${t}`,e):null;return j.useEffect(()=>{!c||!d||I(d).then(m=>{w(m.data.state),S(!1)}).catch(m=>{S(z(m))})},[c,d,n,t]),j.useEffect(()=>{let m=null,A=null,y=!0,f=null,u=0,s=!1,l=null,r=null;async function g(){if(!c||!t||!y||s)return;if(m){try{l&&(m.removeEventListener("ready",l),l=null),r&&(m.removeEventListener("disconnected",r),r=null),A&&(A(),A=null),m.close()}catch{}m=null}s=!0;const T=se(e),p=a||o||"";if(!p){s=!1;return}let E;try{E=oe(T,p),y&&S(!1)}catch(b){y&&(C.error("Failed to create WebSocket auth:",b),S(b instanceof Error?b.message:String(b))),s=!1;return}try{m=await ie({auth:E}),l=()=>{y&&(C.debug("WebSocket connection ready for garage door"),u=0,S(!1))},m.addEventListener("ready",l),r=()=>{if(y&&!s){C.debug("WebSocket disconnected for garage door, will attempt to reconnect"),f&&(clearTimeout(f),f=null),m=null,A=null,l=null,r=null;const L=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{y&&!s&&(C.debug(`Attempting to reconnect WebSocket for garage door (attempt ${u})`),g())},L)}},m.addEventListener("disconnected",r);const b=L=>{y&&w(L.variables.trigger.to_state.state)};A=await m.subscribeMessage(b,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),s=!1}catch(b){if(s=!1,y){C.error("Failed to setup WebSocket connection:",b),S(b instanceof Error?b.message:String(b));const L=Math.min(1e3*Math.pow(2,u),3e4);u++,f=setTimeout(()=>{y&&g()},L)}}}return g(),()=>{if(y=!1,s=!1,f&&(clearTimeout(f),f=null),m)try{l&&m.removeEventListener("ready",l),r&&m.removeEventListener("disconnected",r)}catch{}if(A){try{A()}catch{}A=null}if(m){try{m.close()}catch{}m=null}}},[c]),[h,x]},qn=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);I.post($("/api/services/cover/toggle",n),{entity_id:t}).catch(a=>{C.error("Failed to toggle garage door:",a)}).finally(()=>{clearTimeout(o),e(!1)})},Xn=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);I.post($("/api/services/cover/open_cover",n),{entity_id:t}).catch(a=>{C.error("Failed to open garage door:",a)}).finally(()=>{clearTimeout(o),e(!1)})},Jn=(e,n={})=>{const t=n.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const o=setTimeout(()=>e(!1),3e3);I.post($("/api/services/cover/close_cover",n),{entity_id:t}).catch(a=>{C.error("Failed to close garage door:",a)}).finally(()=>{clearTimeout(o),e(!1)})},Qn=v.div`
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
`,Ge=v.div`
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
`,Te=e=>{const n={unknown:{label:"In Bewegung oder halb-offen",icon:Ct},open:{label:"Offen",icon:Nt},closed:{label:"Geschlossen",icon:Rt},opening:{label:"Öffnet",icon:_t},closing:{label:"Schließt",icon:jt}};return n[e]||C.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),n[e]||{label:"Unavailable",icon:kt}},Zn=({garageDoor:e,animate:n=!1})=>i.jsxs(Ge,{className:H({animate:n}),children:[i.jsx(F,{path:Te(e).icon,size:"2rem",color:"#ffffff"}),i.jsx("span",{children:Te(e).label})]}),eo=e=>ct.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return Te(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),to=()=>{const e=V();if(!(e.ENABLE_GARAGE||!1))return null;const[t,o]=Kn(),[a,h]=j.useState(void 0),[w,x]=j.useState(!1),[S,c]=j.useState(!1);j.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!a){const f=new Promise(u=>{h({resolve:u})});eo(f)}}else a&&(a.resolve(t),h(void 0))},[t]);const d=ne("g");j.useEffect(()=>{d&&o===!1&&qn(x,e)},[d,o,e]);const m=N.useCallback(y=>{if(o===!1)switch(c(!1),y){case"open":Xn(x,e);break;case"close":Jn(x,e);break}},[x,o,e]),A=N.useCallback(()=>{o===!1&&c(!0)},[o]);return i.jsxs(Qn,{className:H({disabled:o!==!1}),children:[i.jsx("h2",{children:"Garage"}),i.jsx("div",{className:"status",onClick:A,children:o!==!1?i.jsxs(Ge,{children:[i.jsx(F,{path:Le,size:"2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsx(Zn,{garageDoor:t,animate:w})}),i.jsx(re,{visible:S&&o===!1,onClick:()=>c(!1),children:i.jsxs("div",{className:"controls",children:[i.jsx("h2",{children:"Garagentor"}),i.jsx("div",{onClick:()=>m("open"),children:"Öffnen"}),i.jsx("div",{onClick:()=>m("close"),children:"Schließen"})]})})]})},no=N.memo(to),oo=(e,n)=>e?$(`/api/states/${e}`,n):null,K={done:{label:"Fertig",animate:!1,icon:Ot},off:{label:"Aus",animate:!1,icon:vt},standby:{label:"Standby",animate:!1,icon:Re},running:{label:"Läuft …",animate:!0,icon:Re}},io={off:0,standby:2,running:16,done:256},ro=()=>{const e=V();e.ENABLE_LAUNDRY;const n=e.LAUNDRY_MACHINES||[];e.HASS_ACCESS_TOKEN,e.SUPERVISOR_TOKEN;const o=(Array.isArray(n)?n:[]).map((m,A)=>{const[y,f]=so(m.entity_id,e);return{state:y,error:f,name:m.name}}),[a,h]=j.useState(K.off),[w,x]=j.useState(!1),S=o.map(m=>m.state),c=o.map(m=>m.error);j.useEffect(()=>{const m=c.some(A=>A!==!1);x(m&&c.find(A=>A!==!1)||!1)},[c]),j.useEffect(()=>{const m=S.reduce((A,y)=>A+(io[y]||0),0);m===0?h(K.off):m<16?h(K.standby):m<256?h(K.running):m%256===0?h(K.done):m%256%16===0?h(K.running):m%256%2===0?h(K.done):h(K.running)},[S]);const d=o.map(m=>({label:m.name,state:m.state}));return[a,d,w]},so=(e,n)=>{const[t,o]=j.useState("off"),[a,h]=j.useState(!1),x=(n.ENABLE_LAUNDRY||!1)&&e,S=oo(e,n);return j.useEffect(()=>{!x||!S||I(S).then(c=>{o(c.data.state),h(!1)}).catch(c=>{h(z(c))})},[e,x,S]),j.useEffect(()=>{let c=null,d=null,m=!0,A=null,y=0,f=!1,u=null,s=null;async function l(){if(!x||!e||!m||f)return;if(c){try{u&&(c.removeEventListener("ready",u),u=null),s&&(c.removeEventListener("disconnected",s),s=null),d&&(d(),d=null),c.close()}catch{}c=null}f=!0;const r=se(n),g=n.HASS_ACCESS_TOKEN||"",p=n.SUPERVISOR_TOKEN||""||g||"";if(!p){f=!1;return}try{const E=oe(r,p);c=await ie({auth:E}),u=()=>{m&&(C.debug(`WebSocket connection ready for ${e}`),y=0,h(!1))},c.addEventListener("ready",u),s=()=>{if(m&&!f){C.debug(`WebSocket disconnected for ${e}, will attempt to reconnect`),A&&(clearTimeout(A),A=null),c=null,d=null,u=null,s=null;const L=Math.min(1e3*Math.pow(2,y),3e4);y++,A=setTimeout(()=>{m&&!f&&(C.debug(`Attempting to reconnect WebSocket for ${e} (attempt ${y})`),l())},L)}},c.addEventListener("disconnected",s);const b=L=>{m&&o(L.variables.trigger.to_state.state)};d=await c.subscribeMessage(b,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),f=!1}catch(E){if(f=!1,m){C.error(`Failed to setup WebSocket connection for ${e}:`,E),h(E instanceof Error?E.message:String(E));const b=Math.min(1e3*Math.pow(2,y),3e4);y++,A=setTimeout(()=>{m&&l()},b)}}}return l(),()=>{if(m=!1,f=!1,A&&(clearTimeout(A),A=null),c)try{u&&c.removeEventListener("ready",u),s&&c.removeEventListener("disconnected",s)}catch{}if(d){try{d()}catch{}d=null}if(c){try{c.close()}catch{}c=null}}},[e,x]),[t,a]},ao=v.div`
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
`,co=()=>{if(!(V().ENABLE_LAUNDRY||!1))return null;const[t,o,a]=ro(),[h,w]=j.useState(!1),x=N.useCallback(()=>{a===!1&&w(!0)},[a]),S=N.useCallback(()=>w(!1),[]);return i.jsxs(ao,{className:H({disabled:a!==!1}),children:[i.jsx("h2",{children:"Wäsche"}),i.jsx("div",{className:"status",onClick:x,children:a!==!1?i.jsxs(i.Fragment,{children:[i.jsx(F,{path:Le,size:"2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:H({animate:t.animate}),children:i.jsx(F,{path:t.icon,size:"2rem",color:"#ffffff"})}),i.jsx("span",{children:t.label})]})}),i.jsx(re,{visible:h&&a===!1,onClick:S,children:i.jsxs("div",{className:"states",children:[i.jsx("h2",{children:"Wäsche"}),o.map((c,d)=>i.jsxs("div",{children:[i.jsx("div",{className:"subtitle",children:c.label}),i.jsx("div",{className:H({animate:K[c.state].animate}),children:i.jsx(F,{path:K[c.state].icon,size:2})}),i.jsx("div",{children:K[c.state].label})]},d))]})})]})},lo=N.memo(co),fo=v.div`
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
`,uo=()=>i.jsxs(fo,{children:[i.jsxs("div",{className:"top-content",children:[i.jsx(_n,{}),i.jsx(Wn,{}),i.jsx(Gn,{})]}),i.jsxs("div",{className:"two-cols",children:[i.jsx(no,{}),i.jsx(lo,{})]})]}),ho=N.memo(uo),$e=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],po=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],me={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},mo={landscape:"L",portrait:"P",wide:"W"},go=v.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,xo=v.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Eo=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Q=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Z=v.label`
  font-size: 0.9rem;
  color: #cccccc;
`,We=v.select`
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
`,Ve=v.input`
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
`,yo=v.button`
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
`,Be=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,wo=v.button`
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
`,bo=v.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Ao=v.div`
  position: absolute;
  background-color: ${e=>me[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,So=v.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,To=v.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Lo=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,de=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,fe=v.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ue=v.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,jo=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,_o=v.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;v.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;const Ae=v.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?me[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?me[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?me[e.orientation]:"#4a4a4a"};
  }
`,He=()=>{const[e,n]=N.useState(1920),[t,o]=N.useState(1080),[a,h]=N.useState("Full HD"),[w,x]=N.useState(""),[S,c]=N.useState(""),[d,m]=N.useState([{orientation:"landscape"}]),[A,y]=N.useState(null),f=N.useMemo(()=>ze(d,e,t),[d,e,t]),u=p=>{const E=$e.find(b=>b.name===p);E&&E.width&&E.height?(n(E.width),o(E.height),h(p),x(""),c("")):p==="Custom"&&h("Custom")},s=()=>{const p=parseInt(w),E=parseInt(S);p>0&&E>0&&(n(p),o(E))},l=p=>{m(p.videos),y(p.name)},r=p=>{const E=[];for(let b=0;b<p;b++)E.push(d[b]||{orientation:"landscape"});m(E),y(null)},g=(p,E)=>{const b=[...d];b[p]={orientation:E},m(b),y(null)},T=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return i.jsxs(go,{children:[i.jsx(xo,{children:"Video Tiling Algorithm Demo"}),i.jsxs(Eo,{children:[i.jsxs(Q,{children:[i.jsx(Z,{children:"Screen Size Preset"}),i.jsx(We,{value:a,onChange:p=>u(p.target.value),children:$e.map(p=>i.jsx("option",{value:p.name,children:p.name},p.name))})]}),a==="Custom"&&i.jsxs(i.Fragment,{children:[i.jsxs(Q,{children:[i.jsx(Z,{children:"Custom Width"}),i.jsx(Ve,{type:"number",value:w,onChange:p=>x(p.target.value),placeholder:"Width",min:"100"})]}),i.jsxs(Q,{children:[i.jsx(Z,{children:"Custom Height"}),i.jsx(Ve,{type:"number",value:S,onChange:p=>c(p.target.value),placeholder:"Height",min:"100"})]}),i.jsxs(Q,{children:[i.jsx(Z,{children:" "}),i.jsx(yo,{onClick:s,children:"Apply Custom Size"})]})]}),i.jsxs(Q,{children:[i.jsx(Z,{children:"Number of Videos"}),i.jsxs(We,{value:d.length,onChange:p=>r(parseInt(p.target.value)),children:[i.jsx("option",{value:"1",children:"1 Video"}),i.jsx("option",{value:"2",children:"2 Videos"}),i.jsx("option",{value:"3",children:"3 Videos"}),i.jsx("option",{value:"4",children:"4 Videos"})]})]}),d.map((p,E)=>i.jsxs(Q,{children:[i.jsxs(Z,{children:["Video ",E+1," Orientation"]}),i.jsxs(Be,{children:[i.jsx(Ae,{active:p.orientation==="landscape",orientation:"landscape",onClick:()=>g(E,"landscape"),children:"Landscape"}),i.jsx(Ae,{active:p.orientation==="portrait",orientation:"portrait",onClick:()=>g(E,"portrait"),children:"Portrait"}),i.jsx(Ae,{active:p.orientation==="wide",orientation:"wide",onClick:()=>g(E,"wide"),children:"Wide"})]})]},E))]}),i.jsxs(jo,{children:[i.jsx(_o,{children:"Test Scenarios"}),i.jsx(Be,{children:po.map(p=>i.jsx(wo,{active:A===p.name,onClick:()=>l(p),children:p.name},p.name))})]}),i.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:i.jsx(bo,{style:{width:`${e*T}px`,height:`${t*T}px`},children:f.videos.map((p,E)=>i.jsxs(Ao,{orientation:p.orientation,style:{left:`${p.x*T}px`,top:`${p.y*T}px`,width:`${p.width*T}px`,height:`${p.height*T}px`},children:[i.jsxs(So,{children:[mo[p.orientation]," ",E+1]}),i.jsxs(To,{children:[Math.round(p.width)," × ",Math.round(p.height)]})]},E))})}),i.jsxs(Lo,{children:[i.jsxs(de,{children:[i.jsx(fe,{children:"Canvas Size"}),i.jsxs(ue,{children:[e," × ",t]})]}),i.jsxs(de,{children:[i.jsx(fe,{children:"Total Area Used"}),i.jsxs(ue,{children:[Math.round(f.totalArea).toLocaleString()," px²"]})]}),i.jsxs(de,{children:[i.jsx(fe,{children:"Efficiency"}),i.jsxs(ue,{children:[f.efficiency.toFixed(2),"%"]})]}),i.jsxs(de,{children:[i.jsx(fe,{children:"Display Scale"}),i.jsxs(ue,{children:[(T*100).toFixed(1),"%"]})]})]})]})},Ro=()=>{function e(t,o){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(o))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[h,w]=o.split(":").map(Number),x=new Date;let S=new Date(x.getFullYear(),x.getMonth(),x.getDate());S.setHours(h,w,0,0),S<=x&&S.setDate(S.getDate()+1);const c=S.getTime()-x.getTime();return C.log("Reloading page at",o,"in",Math.floor(c/1e3/60),"minutes"),setTimeout(t,c)}const n=()=>{C.log("Timeout reached! "),window.location.reload(!0)};j.useLayoutEffect(()=>{const t=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{t.forEach(o=>{o&&clearTimeout(o)})}},[])},No=v.div`
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
`;class xe extends j.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,t){this.setState({error:n,errorInfo:t});const o=n?.toString()||"Unknown error",a=n?.stack||"",h=t?.componentStack||"";C.error(`ErrorBoundary caught an error: ${o}`,{errorName:n?.name,errorMessage:o,errorStack:a,componentStack:h})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?i.jsxs(No,{children:[i.jsx("h2",{children:"Something went wrong"}),i.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,i.jsxs("div",{children:[i.jsx("button",{onClick:this.handleReset,children:"Try Again"}),i.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Co=lt`
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
`,ko=v.div`
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
`;function vo(){return Ro(),i.jsxs(ko,{children:[i.jsx(Co,{}),i.jsxs("div",{className:"main",children:[i.jsx(xe,{children:i.jsx(An,{})}),i.jsx(xe,{children:i.jsx(ho,{})})]}),i.jsx(ft,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Oo(){return i.jsx(xe,{children:i.jsxs(dt,{children:[i.jsx(ye,{path:"/demo",element:i.jsx(He,{})}),i.jsx(ye,{path:"/tiling-demo",element:i.jsx(He,{})}),i.jsx(ye,{path:"*",element:i.jsx(vo,{})})]})})}const Do=ut.createRoot(document.getElementById("root"));Do.render(i.jsx(j.StrictMode,{children:i.jsx(xe,{children:i.jsx(Wt,{children:i.jsx(ht,{children:i.jsx(Oo,{})})})})}));
