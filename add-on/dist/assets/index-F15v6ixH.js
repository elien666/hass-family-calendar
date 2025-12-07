import{d as O,R as j,j as i,I as F,r as N,l as Ye,P as Ke,W as qe,b as Xe,e as Je,f as Qe,h as Ze,i as et,k as tt,m as ot,n as nt,o as it,T as rt,p as st,s as at,y as ct,q as lt,t as dt,u as we,L as ft,v as ut,B as ht}from"./react-vendor-BitJRyew.js";import{D as V}from"./date-vendor-BDx6lZXm.js";import{f as B}from"./vendor-CeaMKy47.js";import{m as pt,a as mt,b as gt,c as xt,d as Et,e as wt,f as je,g as yt,h as bt,i as At,j as St,k as Tt,l as jt,n as _t,o as Lt,p as Rt,q as Nt,r as Ct,s as kt,t as Re,u as Ot,v as vt}from"./ui-vendor-C7t39j5V.js";import{a as I,q as Dt}from"./utils-vendor-Cs1iS-Fd.js";import{c as ne,a as ie}from"./ha-vendor-CoU0AojH.js";import{t as It}from"./chart-vendor-ClWajKr-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const x of u.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&n(x)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();const Mt=O.div`
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
`,re=({visible:e,children:o,onClick:t,onClose:n,fullsize:a=!1})=>{const u=n||t,x=g=>{g.stopPropagation(),g.preventDefault(),u()};return j.useEffect(()=>{if(e){const g=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${g}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,g)}}},[e]),e?i.jsxs(Mt,{onClick:t,children:[i.jsx("div",{className:"close",onClick:x,children:i.jsx(F,{path:pt,size:2})}),i.jsx("div",{className:B("content",{fullsize:a}),onClick:g=>g.stopPropagation(),children:o})]}):null},ae=(e,o,t=null)=>{setTimeout(async()=>{try{const a=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/log`,u={level:e,message:o,...t&&{metadata:t}};await I.post(a,u,{timeout:2e3})}catch{}},0)},ce=e=>{if(e.length===0)return"";if(e.length===1){const o=e[0];return typeof o=="string"?o:typeof o=="object"?JSON.stringify(o,null,2):String(o)}return e.map(o=>typeof o=="object"?JSON.stringify(o,null,2):String(o)).join(" ")},le=e=>{if(e.length<=1)return null;if(typeof e[0]=="string"&&e.length>1){const o={};return e.slice(1).forEach((t,n)=>{typeof t=="object"&&t!==null?Object.assign(o,t):o[`arg${n}`]=t}),Object.keys(o).length>0?o:null}if(e.every(o=>typeof o=="object"&&o!==null)){const o={};return e.forEach(t=>Object.assign(o,t)),o}return null},C={log:(...e)=>{const o=ce(e),t=le(e);o&&ae("INFO",o,t)},error:(...e)=>{console.error(...e);const o=ce(e),t=le(e);o&&ae("ERROR",o,t)},warn:(...e)=>{const o=ce(e),t=le(e);o&&ae("WARNING",o,t)},debug:(...e)=>{},info:(...e)=>{const o=ce(e),t=le(e);o&&ae("INFO",o,t)}},Pt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},$t=()=>{const e=(o,t=void 0)=>{const n=Pt[`VITE_${o}`];return n!==void 0?n:t};return{HASS_HOST:e("HASS_HOST",""),HASS_ACCESS_TOKEN:e("HASS_ACCESS_TOKEN",""),SUPERVISOR_TOKEN:e("SUPERVISOR_TOKEN",""),INGRESS_URL:e("INGRESS_URL",""),ENABLE_WEATHER:e("ENABLE_WEATHER",!1),WEATHER_API_KEY:e("WEATHER_API_KEY",""),WEATHER_LATITUDE:e("WEATHER_LATITUDE"),WEATHER_LONGITUDE:e("WEATHER_LONGITUDE"),ENABLE_HVV:e("ENABLE_HVV",!1),GEOFOX_USER:e("GEOFOX_USER",""),GEOFOX_SECRET:e("GEOFOX_SECRET",""),ENABLE_GARAGE:e("ENABLE_GARAGE",!1),ENTITY_GARAGE_DOOR:e("ENTITY_GARAGE_DOOR",""),ENABLE_LAUNDRY:e("ENABLE_LAUNDRY",!1),LAUNDRY_MACHINES:(()=>{const o=e("LAUNDRY_MACHINES","[]");try{return typeof o=="string"?JSON.parse(o):o}catch{return[]}})(),ENABLE_DOORBELL:e("ENABLE_DOORBELL",!1),ENTITY_DOORBELL:e("ENTITY_DOORBELL",""),ENTITY_DOORBELL_BUTTON:e("ENTITY_DOORBELL_BUTTON",""),DOORBELL_CAMERAS:(()=>{const o=e("DOORBELL_CAMERAS","[]");try{return typeof o=="string"?JSON.parse(o):o}catch{return[]}})(),ENABLE_EVERYDAY_CALENDAR:e("ENABLE_EVERYDAY_CALENDAR",!1),ENTITY_EVERYDAY_CALENDAR:e("ENTITY_EVERYDAY_CALENDAR",""),ENABLE_EV:e("ENABLE_EV",!1),ENTITY_PRECLIMATE_STATUS:e("ENTITY_PRECLIMATE_STATUS",""),ENTITY_PRECLIMATE_START:e("ENTITY_PRECLIMATE_START",""),ENTITY_PRECLIMATE_STOP:e("ENTITY_PRECLIMATE_STOP",""),ENTITY_CHARGING_STATE:e("ENTITY_CHARGING_STATE",""),ENTITY_STATE_OF_CHARGE:e("ENTITY_STATE_OF_CHARGE",""),CALENDARS:(()=>{const o=e("CALENDARS","[]");try{return typeof o=="string"?JSON.parse(o):o}catch{return[]}})()}},Fe=N.createContext(null),Wt=({children:e})=>{const[o,t]=N.useState($t),[n,a]=N.useState(!0);return N.useEffect(()=>{(async()=>{try{const g=`${typeof window<"u"&&window.location?window.location.pathname.replace(/\/$/,""):""}/api/config`,A=await I.get(g,{timeout:5e3});if(A.data&&typeof A.data=="object"){t(A.data);const l=Object.keys(A.data).filter(d=>d.startsWith("ENABLE_")&&A.data[d]).map(d=>d.replace("ENABLE_",""));C.info(`Configuration loaded from API endpoint. Enabled features: ${l.length>0?l.join(", "):"none"}`,{enabledFeatures:l,totalConfigKeys:Object.keys(A.data).length})}}catch(x){C.debug("Failed to load config from API, using defaults:",x.message)}finally{a(!1)}})()},[]),N.useEffect(()=>{const u=o.HASS_ACCESS_TOKEN||"";u&&typeof u=="string"&&u.trim()!==""&&u!=="undefined"&&u!=="null"?I.defaults.headers.common.Authorization=`Bearer ${u}`:delete I.defaults.headers.common.Authorization},[o.HASS_ACCESS_TOKEN]),i.jsx(Fe.Provider,{value:{config:o,loading:n},children:e})},W=()=>{const e=N.useContext(Fe);if(!e)throw new Error("useConfig must be used within ConfigProvider");return e.config};let te=0,he=0,J=0;const ee=[],Ue=e=>{const o={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(o.status=e.response.status,o.responseData=e.response.data,o.url=e.config?.url||e.request?.responseURL||"Unknown URL",o.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(o.isNetworkError=!0,o.url=e.config?.url||"Unknown URL",o.message="Network error: No response received from server",e.request.readyState!==void 0&&(o.readyState=e.request.readyState),e.request.status!==void 0&&(o.requestStatus=e.request.status)):(o.message=e.message||"Request setup error",o.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(o.isTimeoutError=!0,o.message="Request timeout: The request took too long to complete"),e.config&&(o.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),o},Vt=(e,o="")=>{const t=Ue(e);J++,te++,ee.push({timestamp:new Date().toISOString(),url:t.url,status:t.status,code:t.code,message:t.message,isNetworkError:t.isNetworkError,isTimeoutError:t.isTimeoutError}),ee.length>10&&ee.shift();const n=[];return o&&n.push(`[${o}]`),n.push("🔴 Axios API Error:"),n.push(`Message: ${t.message}`),t.url&&n.push(`URL: ${t.url}`),t.status&&n.push(`HTTP Status: ${t.status}`),t.code&&n.push(`Error Code: ${t.code}`),t.isNetworkError&&(n.push("Type: Network Error (no response received)"),t.readyState!==void 0&&n.push(`ReadyState: ${t.readyState}`)),t.isTimeoutError&&n.push("Type: Timeout Error"),t.config&&(n.push(`Method: ${t.config.method?.toUpperCase()||"UNKNOWN"}`),n.push(`Has Auth Header: ${t.config.hasAuthHeader}`),t.config.timeout&&n.push(`Timeout: ${t.config.timeout}ms`)),t.responseData&&n.push("Response Data:",t.responseData),n.push(`Request Stats: ${he} success, ${J} errors (${te} total)`),J>3&&ee.length>0&&n.push("Recent errors pattern:",ee.slice(-5)),C.error(...n),t},Bt=e=>{he++,te++,(te%10===0||J>0)&&C.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:te,stats:`${he} success, ${J} errors`}),J>0&&te%10===0&&he>J&&(J=0,ee.length=0)},z=e=>{const o=Ue(e);return o.isNetworkError?"":o.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":o.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":o.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":o.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":o.status>=500?"Serverfehler: Bitte später erneut versuchen":o.message||"Ein Fehler ist aufgetreten"};I.interceptors.request.use(e=>{const o=Date.now();return e.metadata={requestId:o,startTime:Date.now()},typeof window<"u"&&(o%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,C.debug("Axios Defaults State:",{baseURL:I.defaults.baseURL,timeout:I.defaults.timeout,hasAuthHeader:!!I.defaults.headers?.common?.Authorization,authHeaderLength:I.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(I.defaults.headers?.common||{})})),e},e=>(C.error("Axios Request Setup Error:",e),Promise.reject(e)));I.interceptors.response.use(e=>(e.config&&Bt(e.config),e),e=>{const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(Vt(e,o),e.config?.metadata){const t=Date.now()-e.config.metadata.startTime;C.error("Request Duration:",`${t}ms`,"Request ID:",e.config.metadata.requestId)}return typeof window<"u"&&window.location&&C.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href}),Promise.reject(e)});const P=(e,o={})=>{const t=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const n=o.INGRESS_URL||"";if(n&&typeof n=="string"&&n.trim()!==""){const u=t.startsWith("/")?t.slice(1):t;return`${window.location.origin}${n}${u}`}const a=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${a}${t}`}return t}},se=(e={})=>{if(typeof window<"u"&&window.location){const o=e.INGRESS_URL||"";if(o&&typeof o=="string"&&o.trim()!=="")return`${window.location.origin}${o.replace(/\/$/,"")}`;const t=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${t}`}return""},Ht=()=>{const e=W(),o=e.ENABLE_EVERYDAY_CALENDAR||!1,t=e.ENTITY_EVERYDAY_CALENDAR||"",[n,a]=j.useState(null),[u,x]=j.useState(!1),g=o&&t,A=t?P(`/api/states/${t}`,e):null;return j.useEffect(()=>{!g||!A||I(A).then(l=>{l.data.attributes.store!==void 0?a(l.data.attributes.store):a([]),x(!1)}).catch(l=>{x(z(l)),a([])})},[g,A,o,t]),[n,u]},Yt=(e,o)=>{const t=o?.ENTITY_EVERYDAY_CALENDAR;if(!t)return;const n=P(`/api/states/${t}`,o);I.post(n,{state:new Date,attributes:{store:e}}).catch(a=>{C.error("Failed to store everyday calendar data:",a)})},Ne=O.div` 

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
`,Ft=({on:e,month:o,day:t})=>{const[n,a]=e,u=n.indexOf(`${o}-${t}`),x=u>-1,g=()=>{a(x?n.toSpliced(u,1):[...n,`${o}-${t}`])};return i.jsx("div",{className:B("dot",{on:x}),onClick:()=>g()})},Ut=()=>{const e=W();if(!(e.ENABLE_EVERYDAY_CALENDAR||!1))return null;const t=new Date().getFullYear(),n=[];for(let l=1;l<13;l++){const d=new Date(t,l,0).getDate();for(let y=1;y<=d;y++)n.push({month:l,day:y})}const a=Array.from({length:31},(l,d)=>d+1),u=Array.from({length:12},(l,d)=>d+1),x=j.useState(void 0),[g,A]=Ht();return j.useEffect(()=>{g!==null&&x[1](g)},[g]),j.useEffect(()=>{x[0]!==void 0&&Yt(x[0],e)},[x[0],e]),x[0]!==void 0?i.jsxs(Ne,{children:[i.jsx("h2",{children:"Jeden Tag ein bißchen"}),A!==!1&&i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:A instanceof Error?A.message:String(A)})]}),i.jsxs("div",{className:"calendar",children:[a.map((l,d)=>i.jsx("div",{style:{gridArea:`${l+1} / 1 / ${l+1} / 1`},children:l},d)),u.map((l,d)=>i.jsx("div",{style:{gridArea:`1 / ${l+1} / 1 / ${l+1}`},children:l},d)),n.map((l,d)=>i.jsx("div",{style:{gridArea:`${l.day+1} / ${l.month+1} / ${l.day+1} / ${l.month+1}`},children:i.jsx(Ft,{on:x,month:l.month,day:l.day})},d))]})]}):i.jsx(Ne,{className:"loading",children:A!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:A instanceof Error?A.message:String(A)})]}):i.jsx(Ye,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},zt=O.div`
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
  }`,Gt=()=>{const[e,o]=j.useState(V.now()),[t,n]=j.useState(!1),a=N.useCallback(()=>n(!0),[]),u=N.useCallback(()=>n(!1),[]);return j.useEffect(()=>{const x=setInterval(()=>o(V.now()),1e3);return()=>clearInterval(x)},[]),i.jsxs(i.Fragment,{children:[i.jsxs(zt,{onClick:a,children:[e.toFormat("HH"),i.jsx("span",{children:":"}),e.toFormat("mm")]}),i.jsx(re,{visible:t,onClick:u,fullsize:!0,children:i.jsx(Ut,{})})]})},Kt=N.memo(Gt),qt=()=>{const e=W(),o=e.ENABLE_DOORBELL||!1,t=e.ENTITY_DOORBELL||"";e.ENTITY_DOORBELL_BUTTON;const n=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[u,x]=j.useState("off"),[g,A]=j.useState(!1),l=o&&t,d=t?P(`/api/states/${t}`,e):null;return j.useEffect(()=>{!l||!d||I(d).then(y=>{x(y.data.state),A(!1)}).catch(y=>{A(z(y))})},[l,d,o,t]),j.useEffect(()=>{let y=null,S=null,E=!0,h=null,p=0,s=!1;async function f(){if(!l||!t||s)return;if(y){try{S&&(S(),S=null),y.close()}catch{}y=null}s=!0;const r=se(e),m=a||n||"";if(!m){s=!1;return}let b;try{b=ne(r,m),E&&A(!1)}catch(c){E&&(C.error("Failed to create WebSocket auth:",c),A(c instanceof Error?c.message:String(c))),s=!1;return}try{y=await ie({auth:b}),y.addEventListener("ready",()=>{E&&(C.debug("WebSocket connection ready for doorbell"),p=0,A(!1))}),y.addEventListener("disconnected",()=>{if(E&&!s){C.debug("WebSocket disconnected for doorbell, will attempt to reconnect"),h&&clearTimeout(h),y=null,S=null;const w=Math.min(1e3*Math.pow(2,p),3e4);p++,h=setTimeout(()=>{E&&!s&&(C.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${p})`),f())},w)}});const c=w=>{if(E){const T=w.variables.trigger.to_state.state;x(T)}};S=await y.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),s=!1}catch(c){if(s=!1,E){C.error("Failed to setup WebSocket connection:",c),C.error("WebSocket error details:",{message:c instanceof Error?c.message:String(c),code:c.code,name:c.name,wsUrl:b?.wsUrl,host:r,tokenLength:m?m.length:0}),c.code===2&&C.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),A(c instanceof Error?c.message:String(c));const w=Math.min(1e3*Math.pow(2,p),3e4);p++,h=setTimeout(()=>{E&&f()},w)}}}return f(),()=>{E=!1,h&&clearTimeout(h),S&&S(),y&&y.close()}},[l]),[u,g]},Xt=(e={})=>{const o=e.ENTITY_DOORBELL_BUTTON||"";o&&I.post(P("/api/services/button/press",e),{entity_id:o}).catch(t=>{C.error("Failed to unlatch front door:",t)})},v={portrait:360/480,landscape:1920/1072,wide:770/216};function Jt(e){const o={landscape:0,portrait:0,wide:0};return e.forEach(t=>{t.orientation&&o.hasOwnProperty(t.orientation)&&o[t.orientation]++}),o}function ze(e,o,t){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const n=e.length,a=Jt(e);return n===1?Qt(e[0],o,t):n===2?Zt(a,e,o,t):n===3?eo(a,e,o,t):n===4?to(a,e,o,t):{videos:[],totalArea:0,efficiency:0}}function Qt(e,o,t){const n=v[e.orientation];let a,u;const x=o/t;return n>x?(a=o,u=o/n):(u=t,a=t*n),{videos:[{x:(o-a)/2,y:(t-u)/2,width:a,height:u,orientation:e.orientation}],totalArea:a*u,efficiency:a*u/(o*t)*100}}function Zt(e,o,t,n){if(e.portrait>0)return _e(e,o,t,n);const a=[];e.landscape>0&&a.push("landscape"),e.wide>0&&a.push("wide");const u=a[0]||o[0].orientation,x=a[1]||o[1].orientation,g=v[u],A=v[x];if(e.landscape===1&&e.wide===1){const h=v.landscape,p=v.wide,s=t,f=s/h,r=s/p,m=f+r;let b,c,w;if(m<=n)b=f,c=r,w=s;else{const M=n/m;b=f*M,c=r*M,w=c*p}const T=(t-w)/2,_=q(o,[{x:T,y:0,width:w,height:c,orientation:"wide"},{x:T,y:c,width:w,height:b,orientation:"landscape"}]),R=w*b+w*c,k=R/(t*n)*100;return{videos:_,totalArea:R,efficiency:k}}if(e.wide===2){const h=v.wide,p=t,s=p/h,f=s*2;let r;f<=n?r=s:r=n/2;const b=q(o,[{x:0,y:0,width:p,height:r,orientation:"wide"},{x:0,y:r,width:p,height:r,orientation:"wide"}]),c=p*r*2,w=c/(t*n)*100;return{videos:b,totalArea:c,efficiency:w}}const l=[()=>{const h=t,p=h/2,s=h/2,f=p/g,r=s/A;return Math.max(f,r)<=n?{positions:[{x:0,y:(n-f)/2,width:p,height:f,orientation:u},{x:p,y:(n-r)/2,width:s,height:r,orientation:x}],totalArea:p*f+s*r}:null},()=>{const h=n,p=h/2,s=h/2,f=p*g,r=s*A;return Math.max(f,r)<=t?{positions:[{x:(t-f)/2,y:0,width:f,height:p,orientation:u},{x:(t-r)/2,y:p,width:r,height:s,orientation:x}],totalArea:f*p+r*s}:null}];let d=null,y=0;for(const h of l){const p=h();p&&p.totalArea>y&&(y=p.totalArea,d=p)}if(!d){const h=t/2,p=t/2,s=Math.min(h/g,n),f=Math.min(p/A,n);d={positions:[{x:0,y:(n-s)/2,width:h,height:s,orientation:u},{x:h,y:(n-f)/2,width:p,height:f,orientation:x}],totalArea:h*s+p*f}}const S=q(o,d.positions),E=d.totalArea/(t*n)*100;return{videos:S,totalArea:d.totalArea,efficiency:E}}function _e(e,o,t,n){const a=e.portrait,u=o.length-a;if((a===3||a===4)&&u===0){const E=v.portrait,h=t/a,p=h/E,s=p<n?(n-p)/2:0,f=Math.min(p,n),r=[];let m=0;for(let w=0;w<a;w++){const T=Math.min(h,f*E);r.push({x:w*h+(h-T)/2,y:s,width:T,height:f,orientation:"portrait"}),m+=T*f}const b=q(o,r),c=m/(t*n)*100;return{videos:b,totalArea:m,efficiency:c}}o.filter(E=>E.orientation==="portrait");const x=o.filter(E=>E.orientation!=="portrait"),g=a>0?Math.min(t*.4,t*.5):0,A=t-g,l=[];let d=0;if(a===2&&u===0){const E=v.portrait,h=t/2,p=h/E,s=n;let f,r;p<=s?(r=p,f=h):(r=s,f=s*E);const m=(n-r)/2;l.push({x:(h-f)/2,y:m,width:f,height:r,orientation:"portrait"}),l.push({x:h+(h-f)/2,y:m,width:f,height:r,orientation:"portrait"}),d=f*r*2}else if(a===1&&u===1){const E=v.portrait,h=x[0],p=v[h.orientation],s=E+p,f=t*(E/s),r=t*(p/s),m=f/E,b=r/p,c=Math.min(n,Math.min(m,b)),w=(n-c)/2;l.push({x:0,y:w,width:f,height:c,orientation:"portrait"}),l.push({x:f,y:w,width:r,height:c,orientation:h.orientation}),d=f*c+r*c}else if(a===1&&u===2&&e.landscape===1&&e.wide===1){const E=v.portrait,h=v.wide,p=v.landscape,s=n,f=n*E,r=n/(1/h+1/p),m=r/h,b=r/p,c=f+r;if(Math.abs(c-t)<.1)l.push({x:0,y:0,width:f,height:s,orientation:"portrait"}),d+=f*s,x.find(_=>_.orientation==="wide")&&(l.push({x:0+f,y:0,width:r,height:m,orientation:"wide"}),d+=r*m),x.find(_=>_.orientation==="landscape")&&(l.push({x:0+f,y:m,width:r,height:b,orientation:"landscape"}),d+=r*b);else{const w=t/c,T=f*w,L=T/E,_=r*w,R=n/L;let k=T*R,M=n,D=_*R,H=D/h,$=D/p,Y=k+D;if(Y>t){const X=t/Y;k=k*X,M=k/E,D=D*X,H=D/h,$=D/p,Y=k+D,Y>t&&(D=t-k,H=D/h,$=D/p)}const U=k+D;if(U>t){const X=t/U;k=k*X,M=k/E,D=D*X,H=D/h,$=D/p}const G=0;l.push({x:G,y:0,width:k,height:M,orientation:"portrait"}),d+=k*M,x.find(X=>X.orientation==="wide")&&(l.push({x:G+k,y:0,width:D,height:H,orientation:"wide"}),d+=D*H),x.find(X=>X.orientation==="landscape")&&(l.push({x:G+k,y:H,width:D,height:$,orientation:"landscape"}),d+=D*$)}}else if(a===1&&u===3){const E=v.portrait,h=n,p=h*E,s=p,f=t-s;l.push({x:0,y:0,width:p,height:h,orientation:"portrait"}),d+=p*h;const r=n/3;for(let m=0;m<x.length;m++){const b=x[m],c=v[b.orientation],w=r,T=f;let L,_;T/c<=w?(L=T,_=L/c):(_=w,L=_*c);const R=m*r+(r-_)/2;l.push({x:s+(f-L)/2,y:R,width:L,height:_,orientation:b.orientation}),d+=L*_}}else if(a===2&&u===1){const E=v.portrait,h=x[0],p=v[h.orientation],s=n/2,f=s*E,r=t-f,m=n*p;let b,c;m<=r?(c=n,b=c*p):(b=r,c=b/p);const w=f,T=s,L=(n-c)/2,_=(n/2-T)/2,R=n/2+(n/2-T)/2;l.push({x:0,y:L,width:b,height:c,orientation:h.orientation}),d+=b*c,l.push({x:r,y:_,width:w,height:T,orientation:"portrait"}),d+=w*T,l.push({x:r,y:R,width:w,height:T,orientation:"portrait"}),d+=w*T}else if(a===1&&u===2){const E=v.portrait,h=n,p=h*E,s=p,f=t-s;l.push({x:0,y:0,width:p,height:h,orientation:"portrait"}),d+=p*h;const r=n/2;for(let m=0;m<x.length;m++){const b=x[m],c=v[b.orientation],w=r,T=f;let L,_;T/c<=w?(L=T,_=L/c):(_=w,L=_*c);const R=m*r+(r-_)/2;l.push({x:s+(f-L)/2,y:R,width:L,height:_,orientation:b.orientation}),d+=L*_}}else{const E=a;if(E>0){const h=n/E,p=v.portrait;for(let s=0;s<E;s++){const f=Math.min(h,g/p),r=f*p,m=s*h+(h-f)/2;l.push({x:(g-r)/2,y:m,width:r,height:f,orientation:"portrait"}),d+=r*f}}if(x.length>0){const h=n/x.length;for(let p=0;p<x.length;p++){const s=x[p],f=v[s.orientation],r=h,m=A;let b,c;m/f<=r?(b=m,c=b/f):(c=r,b=c*f);const w=p*h+(h-c)/2;l.push({x:g+(A-b)/2,y:w,width:b,height:c,orientation:s.orientation}),d+=b*c}}}const y=q(o,l),S=d/(t*n)*100;return{videos:y,totalArea:d,efficiency:S}}function q(e,o){const t=new Array(o.length),n=new Set,a=new Set;for(let g=0;g<o.length;g++){const A=o[g];for(let l=0;l<e.length;l++)if(!n.has(l)&&e[l].orientation===A.orientation){t[g]={...A,orientation:e[l].orientation},n.add(l),a.add(g);break}}const u=[];for(let g=0;g<o.length;g++)a.has(g)||u.push(g);let x=0;for(let g=0;g<e.length;g++)if(!n.has(g)&&x<u.length){const A=u[x];t[A]={...o[A],orientation:e[g].orientation},x++}return t}function eo(e,o,t,n){if(e.portrait>0)return _e(e,o,t,n);if(e.landscape===2&&e.wide===1){const s=v.landscape,f=v.wide,r=t,m=r/f,b=n-m,c=t/2,w=c/s;let T,L,_,R;if(m<=n&&w<=b)T=r,L=m,_=c,R=w;else{const U=n/(m+w),G=Math.min(1,U);L=m*G,T=L*f,R=w*G,_=R*s}const k=(t-T)/2,M=L+(b-R)/2,H=q(o,[{x:k,y:0,width:T,height:L,orientation:"wide"},{x:0,y:M,width:_,height:R,orientation:"landscape"},{x:_,y:M,width:_,height:R,orientation:"landscape"}]),$=T*L+_*R*2,Y=$/(t*n)*100;return{videos:H,totalArea:$,efficiency:Y}}if(e.landscape===1&&e.wide===2){const s=v.landscape,f=v.wide,r=t/2,m=r/f,c=n-m,w=c*s;let T,L,_,R;if(m<=n&&w<=t&&m+c<=n)T=r,L=m,_=w,R=c;else{const G=m+c,Ee=n/G;T=r,L=m*Ee,R=c*Ee,_=R*s}const k=0,M=t/2,D=(t-_)/2,$=q(o,[{x:k,y:0,width:T,height:L,orientation:"wide"},{x:M,y:0,width:T,height:L,orientation:"wide"},{x:D,y:L,width:_,height:R,orientation:"landscape"}]),Y=T*L*2+_*R,U=Y/(t*n)*100;return{videos:$,totalArea:Y,efficiency:U}}if(e.wide===3){const s=v.wide,f=t/2,r=f/s,b=n-r,c=b*s;let w,T,L,_;if(r<=n&&c<=t&&r+b<=n)w=f,T=r,L=c,_=b;else{const U=r+b,G=n/U;w=f,T=r*G,_=b*G,L=_*s,L>t&&(L=t,_=L/s)}const R=0,k=t/2,M=(t-L)/2,H=q(o,[{x:R,y:0,width:w,height:T,orientation:"wide"},{x:k,y:0,width:w,height:T,orientation:"wide"},{x:M,y:T,width:L,height:_,orientation:"wide"}]),$=w*T*2+L*_,Y=$/(t*n)*100;return{videos:H,totalArea:$,efficiency:Y}}if(e.landscape===3){const s=v.landscape,f=t/(s*1.5),r=Math.min(n,f),m=r/2,b=r,c=m*s,w=b*s,T=(n-r)/2,L=[{x:0,y:T,width:c,height:m,orientation:"landscape"},{x:0,y:T+m,width:c,height:m,orientation:"landscape"},{x:c,y:T,width:w,height:b,orientation:"landscape"}],_=q(o,L),R=c*r+w*r,k=R/(t*n)*100;return{videos:_,totalArea:R,efficiency:k}}const a=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)a.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)a.push("wide");const u=a[0]||o[0].orientation,x=a[1]||o[1].orientation,g=a[2]||o[2].orientation,A=v[u],l=v[x],d=v[g],y=[()=>{const s=t*.6,f=t*.4,r=s/A,m=f/l,b=f/d,c=m+b;return r<=n&&c<=n?{positions:[{x:0,y:(n-r)/2,width:s,height:r,orientation:u},{x:s,y:0,width:f,height:m,orientation:x},{x:s,y:m,width:f,height:b,orientation:g}],totalArea:s*r+f*m+f*b}:null},()=>{const s=n*.5,f=n*.5,r=s*A,m=s*l,b=f*d;return r+m<=t&&b<=t?{positions:[{x:0,y:0,width:r,height:s,orientation:u},{x:r,y:0,width:m,height:s,orientation:x},{x:(t-b)/2,y:s,width:b,height:f,orientation:g}],totalArea:r*s+m*s+b*f}:null},()=>{const s=t/3,f=s/A,r=s/l,m=s/d;return Math.max(f,r,m)<=n?{positions:[{x:0,y:(n-f)/2,width:s,height:f,orientation:u},{x:s,y:(n-r)/2,width:s,height:r,orientation:x},{x:s*2,y:(n-m)/2,width:s,height:m,orientation:g}],totalArea:s*f+s*r+s*m}:null}];let S=null,E=0;for(const s of y){const f=s();f&&f.totalArea>E&&(E=f.totalArea,S=f)}if(!S){const s=t/3,f=Math.min(s/A,n),r=Math.min(s/l,n),m=Math.min(s/d,n);S={positions:[{x:0,y:(n-f)/2,width:s,height:f,orientation:u},{x:s,y:(n-r)/2,width:s,height:r,orientation:x},{x:s*2,y:(n-m)/2,width:s,height:m,orientation:g}],totalArea:s*f+s*r+s*m}}const h=q(o,S.positions),p=S.totalArea/(t*n)*100;return{videos:h,totalArea:S.totalArea,efficiency:p}}function to(e,o,t,n){if(e.portrait>0)return _e(e,o,t,n);const a=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)a.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)a.push("wide");const u=a[0]||o[0].orientation,x=a[1]||o[1].orientation,g=a[2]||o[2].orientation,A=a[3]||o[3].orientation,l=v[u],d=v[x],y=v[g],S=v[A],E=[()=>{const r=t/2,m=n/2,b=Math.min(r,m*l),c=b/l,w=Math.min(r,m*d),T=w/d,L=Math.min(r,m*y),_=L/y,R=Math.min(r,m*S),k=R/S;return{positions:[{x:(r-b)/2,y:(m-c)/2,width:b,height:c,orientation:u},{x:r+(r-w)/2,y:(m-T)/2,width:w,height:T,orientation:x},{x:(r-L)/2,y:m+(m-_)/2,width:L,height:_,orientation:g},{x:r+(r-R)/2,y:m+(m-k)/2,width:R,height:k,orientation:A}],totalArea:b*c+w*T+L*_+R*k}},()=>{const r=t*.6,m=t*.4,b=r/l,c=n/3,w=Math.min(m,c*d),T=w/d,L=Math.min(m,c*y),_=L/y,R=Math.min(m,c*S),k=R/S;return b<=n?{positions:[{x:0,y:(n-b)/2,width:r,height:b,orientation:u},{x:r,y:0,width:w,height:T,orientation:x},{x:r,y:c,width:L,height:_,orientation:g},{x:r,y:c*2,width:R,height:k,orientation:A}],totalArea:r*b+w*T+L*_+R*k}:null},()=>{const r=t/4,m=r/l,b=r/d,c=r/y,w=r/S;return Math.max(m,b,c,w)<=n?{positions:[{x:0,y:(n-m)/2,width:r,height:m,orientation:u},{x:r,y:(n-b)/2,width:r,height:b,orientation:x},{x:r*2,y:(n-c)/2,width:r,height:c,orientation:g},{x:r*3,y:(n-w)/2,width:r,height:w,orientation:A}],totalArea:r*m+r*b+r*c+r*w}:null}];let h=null,p=0;for(const r of E){const m=r();m&&m.totalArea>p&&(p=m.totalArea,h=m)}if(!h){const r=t/2,m=n/2,b=Math.min(m,r/l),c=Math.min(m,r/d),w=Math.min(m,r/y),T=Math.min(m,r/S);h={positions:[{x:(r-r)/2,y:(m-b)/2,width:r,height:b,orientation:u},{x:r+(r-r)/2,y:(m-c)/2,width:r,height:c,orientation:x},{x:(r-r)/2,y:m+(m-w)/2,width:r,height:w,orientation:g},{x:r+(r-r)/2,y:m+(m-T)/2,width:r,height:T,orientation:A}],totalArea:r*b+r*c+r*w+r*T}}const s=q(o,h.positions),f=h.totalArea/(t*n)*100;return{videos:s,totalArea:h.totalArea,efficiency:f}}const oo=e=>{const o=W();o.HASS_HOST;const t=o.HASS_ACCESS_TOKEN||"",n=o.SUPERVISOR_TOKEN||"",[a,u]=j.useState({}),[x,g]=j.useState(!0),[A,l]=j.useState(null);return j.useEffect(()=>{if(!e||e.length===0){g(!1);return}let d=!0;async function y(){g(!0),l(null);try{const S=e.map(async h=>{try{const p=P(`/api/states/${h}`,o),f=(await I(p)).data?.attributes?.access_token||null;return{entityId:h,accessToken:f}}catch(p){return C.error(`Failed to fetch access token for ${h}:`,p),{entityId:h,accessToken:null}}}),E=await Promise.all(S);if(d){const h={};E.forEach(({entityId:p,accessToken:s})=>{s&&(h[p]=s)}),u(h),g(!1)}}catch(S){d&&(C.error("Failed to fetch camera access tokens:",S),l(z(S)),g(!1))}}return y(),()=>{d=!1}},[e?.length,e?.join(",")]),j.useEffect(()=>{if(!e||e.length===0)return;let d=!0,y=null;async function S(){if(d)try{const E=e.map(async p=>{try{const s=P(`/api/states/${p}`,o),r=(await I(s)).data?.attributes?.access_token||null;return{entityId:p,accessToken:r}}catch(s){return C.debug(`Failed to refresh access token for ${p}:`,s),null}}),h=await Promise.all(E);d&&u(p=>{const s={...p};return h.forEach(f=>{f&&f.accessToken&&(s[f.entityId]=f.accessToken)}),s})}catch{}}return y=setInterval(S,300*1e3),()=>{d=!1,y&&clearInterval(y)}},[e?.length,e?.join(",")]),j.useEffect(()=>{if(!e||e.length===0)return;let d=null,y=[],S=!0,E=null,h=0,p=!1;async function s(){if(p)return;if(d){try{y.forEach(b=>{b&&b()}),y=[],d.close()}catch{}d=null}p=!0;const f=se(o),r=n||t||"";if(!r){p=!1;return}let m;try{m=ne(f,r),S&&l(!1)}catch(b){S&&(C.error("Failed to create WebSocket auth for camera tokens:",b),l(b instanceof Error?b.message:String(b))),p=!1;return}try{d=await ie({auth:m}),d.addEventListener("ready",()=>{S&&(C.debug("WebSocket connection ready for camera tokens"),h=0,l(!1))}),d.addEventListener("disconnected",()=>{if(S&&!p){C.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),E&&clearTimeout(E),d=null,y=[];const b=Math.min(1e3*Math.pow(2,h),3e4);h++,E=setTimeout(()=>{S&&!p&&(C.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${h})`),s())},b)}});for(const b of e){const c=T=>{if(S){const _=T.variables.trigger.to_state?.attributes?.access_token||null;u(R=>_?{...R,[b]:_}:R)}},w=await d.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:b}});y.push(w)}p=!1}catch(b){if(p=!1,S){C.error("Failed to setup WebSocket connection for camera tokens:",b),l(b instanceof Error?b.message:String(b));const c=Math.min(1e3*Math.pow(2,h),3e4);h++,E=setTimeout(()=>{S&&s()},c)}}}return s(),()=>{S=!1,E&&clearTimeout(E),y.forEach(f=>{f&&f()}),d&&d.close()}},[e?.length,e?.join(",")]),[a,x,A]},no=(e,o=null,t=null)=>{if(!e)return null;let n=t||"";if(!n&&typeof window<"u"&&window.location){const u=window.location.protocol,x=window.location.hostname,g=window.location.port?`:${window.location.port}`:"";n=`${u}//${x}${g}`}if(!n)return C.warn("HASS_HOST not configured and cannot derive from window.location, cannot build camera stream URL"),null;const a=`${n}/api/camera_proxy_stream/${e}`;return o?`${a}?token=${encodeURIComponent(o)}`:a},Ce=45e3,io=O.div`
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
`,ro=()=>{const e=W(),o=e.ENABLE_DOORBELL||!1,t=e.DOORBELL_CAMERAS||[];if(!o)return null;const[n,a]=j.useState(!1),[u]=qt(),[x,g]=j.useState(void 0),[A,l]=j.useState(100),[d,y]=j.useState("0"),S=j.useMemo(()=>t.map(f=>f.entity_id).filter(Boolean),[t]),[E]=oo(S);j.useEffect(()=>{if(u==="off"&&n){const f=window.setTimeout(()=>{a(!1),g(void 0)},Ce);return g(f),y(Ce+"ms"),l(0),()=>{f&&window.clearTimeout(f)}}else u==="on"&&(y(0),l(100),a(!0))},[u,n]),j.useEffect(()=>{u==="on"&&x!==void 0&&(window.clearTimeout(x),y(0),l(100),g(void 0))},[x,u]);const[h,p]=j.useState(null),s=()=>{h===null?p("confirm"):h==="confirm"&&(p("opening"),Xt(e),setTimeout(()=>p(null),2e3))};return j.useEffect(()=>{if(h==="confirm"){const f=setTimeout(()=>{p(null)},3e3);return()=>{clearTimeout(f)}}},[h]),j.useEffect(()=>{n||p(null)},[n]),i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:()=>a(f=>!f),children:"CCTV"}),i.jsx(re,{visible:n,onClick:s,onClose:()=>{a(!1),p(null)},fullsize:!0,children:i.jsxs(io,{onClick:s,children:[i.jsx(Ke,{completed:A,height:10,bgColor:x===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:d,transitionTimingFunction:"linear"}),i.jsx("div",{className:"grid",children:(()=>{if(t.length===0)return null;const f=t.map(T=>({orientation:T.orientation||"landscape"})),r=window.innerWidth,m=window.innerHeight-10,b=ze(f,r,m),c={portrait:t.filter(T=>(T.orientation||"landscape")==="portrait"),landscape:t.filter(T=>(T.orientation||"landscape")==="landscape"),wide:t.filter(T=>T.orientation==="wide")},w={portrait:0,landscape:0,wide:0};return b.videos.map((T,L)=>{const _=T.orientation,R=w[_],k=c[_][R];if(!k)return null;w[_]++;const M=E[k.entity_id]||null,D=no(k.entity_id,M,e.HASS_HOST);return D?i.jsxs("div",{className:"video-container",style:{left:`${T.x}px`,top:`${T.y}px`,width:`${T.width}px`,height:`${T.height}px`},children:[i.jsx("img",{src:D,className:_,alt:"Camera stream",crossOrigin:"anonymous"},`${k.entity_id}-${L}`),i.jsx("div",{className:"video-overlay",onClick:()=>s()})]},`${_}-${R}-${L}`):null})})()}),h==="confirm"&&i.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),h==="opening"&&i.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},so=O.div`
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

`,ao=({nextWeek:e,previousWeek:o,startWeekWithToday:t})=>i.jsxs(so,{children:[i.jsxs("div",{className:"buttons",children:[i.jsx(F,{path:mt,size:"32px",color:"#ffffff",onClick:o}),i.jsx(F,{path:gt,size:"32px",color:"#ffffff",onClick:e}),i.jsx("button",{onClick:t,children:"Today"}),i.jsx(ro,{})]}),i.jsx(Kt,{}),i.jsx(F,{path:xt,size:"32px",color:"#ffffff",className:B("indicator")})]}),co=N.memo(ao),lo=6e4,Le=(e=lo,o=void 0)=>{const[t,n]=j.useState(!0);return j.useEffect(()=>{const a=setInterval(()=>{n(u=>!u)},e);return()=>{clearInterval(a)}},[e,o]),t},fo={mdiDelete:wt,mdiCake:Et},uo=e=>{if(!e||typeof e!="string")return;const o=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return fo[o]||void 0},ho=(e,o,t,n,a)=>I(a(e.name,{start:o.toISO(),end:t.toISO()}),{timeout:1e4}).then(u=>{!u.data||!Array.isArray(u.data)||u.data.forEach(x=>{const g="dateTime"in x.start?V.fromISO(x.start.dateTime):V.fromSQL(x.start.date);let A;"dateTime"in x.end?A=Math.floor(V.fromISO(x.end.dateTime).diff(o,"days").as("days")):A=Math.floor(V.fromSQL(x.end.date).diff(o,"days").as("days"))-1;const l=Math.floor(g.diff(o,"days").as("days"));A>=n.length&&(A=n.length-1);const d="dateTime"in x.start?"events":"allDay";if(l>=0&&l<n.length)for(let y=l;y<=A;y++)n[y][d]=[...n[y][d],{...x,icon:e.icon}]})}).catch(u=>{throw u}),ke=new Map,po=300*1e3,mo=e=>e.toISODate(),go=(e,o,t,n,a,u,x,g)=>{const A=[0,1,2,3,4,5].map(E=>e.plus({days:E}).startOf("day"));A[6]=e.plus({days:6}).endOf("day");const l=mo(e),d=ke.get(l);if(d&&Date.now()-d.timestamp<po){t(d.data);return}const y=A.map(E=>({date:E,allDay:[],events:[]}));if(!x||x.length===0){t(y),n(!1);return}const S=new AbortController;a.current&&a.current.abort(),a.current=S;try{n(!0);const E=x.map(h=>ho(h,A[0],A[6],y,g));Promise.all(E).then(()=>{S.signal.aborted||(ke.set(l,{data:y,timestamp:Date.now()}),t(y),u(!1))}).catch(h=>{S.signal.aborted||u(z(h))}).finally(()=>{S.signal.aborted||n(!1)})}catch(E){S.signal.aborted||(u(z(E)),n(!1))}},Oe=[],xo=e=>{const o=W(),t=o.CALENDARS||[],n=j.useMemo(()=>t.map(s=>({name:s.name,icon:uo(s.icon)})),[t]),a=j.useCallback(s=>P(`/api/calendars/${s}`,o),[o]),u=j.useCallback((s,f)=>`${a(s)}?${Dt.stringify(f)}`,[a]),[x,g]=j.useState(Oe),[A,l]=j.useState(!1),[d,y]=j.useState(!1),S=Le(6e4,"Calendar"),[E,h]=j.useState(null),p=N.useRef(null);return j.useEffect(()=>(e!==void 0&&((E===null||!E.equals(e))&&(g(Oe),h(e)),go(e,x,g,l,p,y,n,u)),()=>{p.current&&p.current.abort()}),[e,S,n]),[x,d]};function oe(e){const[o,t]=j.useState(!1);function n({key:u}){u===e&&t(!0)}const a=({key:u})=>{u===e&&t(!1)};return j.useEffect(()=>(window.addEventListener("keydown",n),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",a)}),[e]),o}const Eo=()=>{let e=new Date,t=(e.getDay()+6)%7,n=new Date(e.setDate(e.getDate()-t));return V.fromJSDate(n)},wo=e=>{const o=()=>e(g=>g.plus({days:7})),t=oe("ArrowRight");j.useEffect(()=>{t&&o()},[t]);const n=()=>e(g=>g.minus({days:7})),a=oe("ArrowLeft");j.useEffect(()=>{a&&n()},[a]);const u=()=>e(Eo()),x=oe("t");return j.useEffect(()=>{x&&u()},[x]),{nextWeek:o,previousWeek:n,startWeekWithToday:u}},yo=e=>{const[o,t]=N.useState(0),[n,a]=N.useState(0),u=50;return{onTouchStart:l=>{a(0),t(l.targetTouches[0].clientX)},onTouchMove:l=>a(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!o||!n)return;const l=o-n,d=l>u,y=l<-u;d&&e.onSwipedLeft(),y&&e.onSwipedRight()}}},ve=e=>V.fromISO(e).toLocaleString(V.TIME_24_SIMPLE),ye=e=>e.toFormat("c")>=6,be=e=>e.hasSame(V.now(),"day"),bo=O.div`
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
`,Ao=()=>{const[e,o]=j.useState(void 0),[t,n]=xo(e),{nextWeek:a,previousWeek:u,startWeekWithToday:x}=wo(o);j.useEffect(()=>{x()},[]);const g=yo({onSwipedLeft:()=>a(),onSwipedRight:()=>u()}),A=N.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=N.useMemo(()=>t.slice(0,7),[t]);return i.jsxs(bo,{...g,children:[i.jsx(co,{nextWeek:a,previousWeek:u,startWeekWithToday:x}),i.jsxs("div",{className:"schedule",children:[l.map((d,y)=>i.jsx("div",{className:B({weekend:ye(d.date),today:be(d.date)},"caption"),children:i.jsx("h2",{children:d.date.toLocaleString(A)})},y)),l.map((d,y)=>i.jsx("div",{className:B("allDayRow",{weekend:ye(d.date),today:be(d.date)}),children:d.allDay.map((S,E)=>i.jsx("div",{className:"allDayEvent",children:S.summary},E))},y)),l.map((d,y)=>i.jsx("div",{className:B("eventRow",{weekend:ye(d.date),today:be(d.date)}),children:d.events.map((S,E)=>i.jsxs("div",{className:"event",children:[i.jsx("div",{children:S.summary}),i.jsxs("h3",{children:[S.icon&&i.jsx(F,{path:S.icon,size:"1rem",color:"#ffffff"}),ve(S.start.dateTime)," - ",ve(S.end.dateTime)]})]},E))},y))]}),t.length===0&&i.jsx("div",{className:"loading",children:n!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),i.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):i.jsx(Ye,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),n!==!1&&t.length>0&&i.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:i.jsxs("div",{children:["Warnung: ",n instanceof Error?n.message:String(n)]})})]})},ge={"clear-day":{icon:it,label:"Klar",color:"#eeeef5"},"clear-night":{icon:nt,label:"Klar",color:"#eeeef5"},rain:{icon:ot,label:"Regen",color:"#80a5d6"},snow:{icon:tt,label:"Schnee",color:"#8c82ce"},sleet:{icon:et,label:"Graupel",color:"#aba4db"},wind:{icon:Ze,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:Qe,label:"Neblig",color:"#d5dae2"},cloudy:{icon:Je,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:Xe,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:qe,label:"Teils bewölkt",color:"#d5dae2"}},So=e=>{const[o,t]=j.useState([]),[n,a]=j.useState(!1),u=Le(6e4*10,"Weather"),x=W(),g=x.ENABLE_WEATHER||!1,A=x.WEATHER_API_KEY||"",l=x.WEATHER_LATITUDE,d=x.WEATHER_LONGITUDE,y=g&&A&&l&&d,S=()=>`./forecast/${A}/${l},${d}?&units=si&exclude=minutely`;return j.useEffect(()=>{y&&I(S()).then(E=>{t(E.data),a(!1)}).catch(E=>{a(z(E))}).finally(()=>{})},[u,e,y,g,A,l,d]),[o,n]},To=st(at),De=O.div`

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
`,Ie=N.memo(({data:e,daily:o=!1})=>i.jsxs("div",{children:[i.jsxs("div",{children:[!o&&V.fromSeconds(e.time).toLocaleString(V.TIME_24_SIMPLE),o&&V.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),i.jsx("div",{children:i.jsx(Se,{icon:e.icon})}),i.jsx("div",{children:i.jsxs("strong",{children:[!o&&i.jsxs(i.Fragment,{children:[Math.round(e.temperature),"°"]}),o&&i.jsxs(i.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),i.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),i.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),jo=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(o=>({color:ge[o.icon]?.color||"#ffffff",text:ge[o.icon]?.label||"",annotation:`${Math.round(o.temperature)}°`,time:o.time})),Se=({icon:e})=>{const o=ge[e];return i.jsx(o.icon,{size:60,color:"#ffffff"})},_o=()=>{if(!(W().ENABLE_WEATHER||!1))return null;const[t,n]=So(),[a,u]=j.useState(!1),x=oe("w"),g=j.useRef(),A=N.useCallback(()=>u(E=>!E),[]),l=N.useCallback(()=>u(!0),[]),d=N.useMemo(()=>jo(t),[t]),y=N.useMemo(()=>[3,6,9,12],[]),S=N.useMemo(()=>[1,2,3,4,5,6,7],[]);return j.useEffect(()=>{if(!a||!g.current||!t||!t.hourly||d.length===0)return;const E={timezone:"Europe/Berlin"},h=document.createElement("div");return g.current.textContent="",g.current.appendChild(h),It(h,d,E),()=>{g.current&&(g.current.textContent="")}},[a,d]),j.useEffect(()=>{x&&A()},[x]),!t||!("currently"in t)||!("daily"in t)||!("hourly"in t)?n!==!1?i.jsx(De,{children:i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),i.jsx("div",{children:n instanceof Error?n.message:String(n)})]})}):"":i.jsxs(De,{children:[i.jsxs("div",{onClick:l,children:[i.jsxs("div",{className:"headline",children:[i.jsx(Se,{icon:t.currently.icon}),i.jsxs("h2",{children:[Math.round(t.currently.temperature),"°"]})]}),i.jsx("div",{className:"forecast",children:y.map((E,h)=>i.jsx(Ie,{data:t.hourly.data[E]},h))})]}),i.jsx(re,{visible:a,onClick:A,children:i.jsxs("div",{className:"full-weather",children:[n!==!1&&i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:n instanceof Error?n.message:String(n)})]}),i.jsxs("div",{className:"detail-header",children:[i.jsx("div",{children:i.jsxs("div",{className:"headline",children:[i.jsx(Se,{icon:t.daily.data[0].icon}),i.jsxs("h2",{children:[Math.round(t.daily.data[0].temperatureHigh),"° /",i.jsxs("span",{children:[Math.round(t.daily.data[0].temperatureLow),"°"]})]})]})}),i.jsx("h3",{children:ge[t.daily.data[0].icon].label})]}),i.jsx("div",{className:"values",children:i.jsxs("div",{className:"table",children:[i.jsxs("div",{children:[i.jsx("span",{children:"Gefühlt:"})," ",Math.round(t.daily.data[0].apparentTemperatureHigh),"° C"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(t.daily.data[0].humidity*100)," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Wind:"})," ",Math.round(t.daily.data[0].windSpeed)," km/h"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Bewölkung:"})," ",Math.round(t.daily.data[0].cloudCover*100)," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"Regen:"})," ",t.daily.data[0].precipProbability*100," %"]}),i.jsxs("div",{children:[i.jsx("span",{children:"UV Index:"})," ",t.daily.data[0].uvIndex]}),i.jsxs("div",{children:[i.jsx("span",{children:"Luftdruck:"})," ",Math.round(t.daily.data[0].pressure)]})]})}),i.jsx("h3",{children:"Die nächsten 24 Stunden"}),i.jsx("div",{ref:g}),i.jsx("h3",{children:"Die nächste Woche"}),i.jsx("div",{className:"forecast",children:S.map((E,h)=>i.jsx(Ie,{data:t.daily.data[E],daily:!0},h))}),i.jsxs("div",{className:"info",children:["Aktualisiert ",i.jsx(rt,{date:V.fromSeconds(t.currently.time).toJSDate(),formatter:To})]})]})})]})},Lo=N.memo(_o),Ro="AK Wandsbek",No="Hamburg",Co="Master:62016",ko="STATION",Oo={x:10.091341,y:53.568702},vo={name:Ro,city:No,id:Co,type:ko,coordinate:Oo},pe={departureList:"departureList",checkName:"checkName"},Do=async(e,o)=>I({method:"post",url:`./gti/public/${e}`,data:o,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}),Me=(e,o)=>e.realtimeOffset-o.realtimeOffset,Io=e=>{const o=e.departures.map(t=>({line:t.line.name,direction:t.line.direction,timeOffset:t.timeOffset,delay:t.delay?t.delay:"0",directionId:t.directionId,realtimeOffset:t.timeOffset+(t.delay?t.delay:0)/60}));return{from:o.filter(t=>t.directionId===1).slice(0,3).sort(Me),to:o.filter(t=>t.directionId===6).slice(0,3).sort(Me)}},Mo=e=>{const t=W().ENABLE_HVV||!1,[n,a]=j.useState([]),[u,x]=j.useState(!1),g=Le(6e4),A=t;return j.useEffect(()=>{if(!A)return;if(!(e in pe)){C.warn(e,"not supported by HVV connector");return}let l={version:51};switch(e){case pe.checkName:l={...l,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case pe.departureList:const d=V.now();l={...l,station:vo,time:{date:d.toFormat("dd.MM.yyyy"),time:d.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:l=void 0}Do(e,l).then(d=>{a(Io(d.data)),x(!1)}).catch(d=>{x(z(d))})},[e,g,A,t]),[n,u]},Po=O.div`
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
`,Pe=N.memo(({line:e,direction:o,realtimeOffset:t})=>i.jsxs("div",{className:"departure",children:[i.jsx("div",{children:i.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),i.jsx("div",{children:t===0?"Jetzt":i.jsxs(i.Fragment,{children:["in ",t," '"]})})]})),$o=()=>{if(!(W().ENABLE_HVV||!1))return null;const[t,n]=Mo(pe.departureList);return i.jsx(Po,{children:n!==!1?i.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[i.jsx("h3",{children:"Fehler!"}),i.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"→ Wandsbek"}),t.to?.map((a,u)=>i.jsx(Pe,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},u)),i.jsx("h3",{children:"→ Stadtauswärts"}),t.from?.map((a,u)=>i.jsx(Pe,{line:a.line,direction:a.direction,realtimeOffset:a.realtimeOffset},u))]})})},Wo=N.memo($o),Vo=()=>{const e=W(),o=e.ENABLE_EV||!1,t=e.ENTITY_PRECLIMATE_STATUS||"";e.ENTITY_PRECLIMATE_START,e.ENTITY_PRECLIMATE_STOP;const n=e.ENTITY_CHARGING_STATE||"",a=e.ENTITY_STATE_OF_CHARGE||"",u=e.HASS_ACCESS_TOKEN||"",x=e.SUPERVISOR_TOKEN||"",[g,A]=j.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[l,d]=j.useState(!1),y=o&&(t||n||a);return j.useEffect(()=>{if(!y)return;(async()=>{const E=[];t&&E.push(I(P(`/api/states/${t}`,e)).then(s=>({type:"preclimateStatus",value:s.data.state==="on"})).catch(s=>({type:"preclimateStatus",error:z(s)}))),n&&E.push(I(P(`/api/states/${n}`,e)).then(s=>({type:"chargingState",value:s.data.state==="on"})).catch(s=>({type:"chargingState",error:z(s)}))),a&&E.push(I(P(`/api/states/${a}`,e)).then(s=>({type:"stateOfCharge",value:parseFloat(s.data.state)||0})).catch(s=>({type:"stateOfCharge",error:z(s)})));const h=await Promise.all(E);let p=!1;h.forEach(s=>{s.error?p=s.error:A(f=>({...f,[s.type]:s.value}))}),d(p||!1)})()},[y,o,t,n,a]),j.useEffect(()=>{let S=null,E=[],h=!0,p=null,s=0,f=!1;async function r(){if(!y||f)return;if(S){try{E.forEach(w=>{w&&w()}),E=[],S.close()}catch{}S=null}f=!0;const m=se(e),b=x||u||"";if(!b){f=!1;return}let c;try{c=ne(m,b),h&&d(!1)}catch(w){h&&(C.error("Failed to create WebSocket auth:",w),d(w instanceof Error?w.message:String(w))),f=!1;return}try{S=await ie({auth:c}),S.addEventListener("ready",()=>{h&&(C.debug("WebSocket connection ready for EV entities"),s=0,d(!1))}),S.addEventListener("disconnected",()=>{if(h&&!f){C.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),p&&clearTimeout(p),S=null,E=[];const L=Math.min(1e3*Math.pow(2,s),3e4);s++,p=setTimeout(()=>{h&&!f&&(C.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${s})`),r())},L)}});const w=L=>{if(h){const _=L.variables.trigger.to_state.entity_id,R=L.variables.trigger.to_state.state;A(k=>{const M={...k};return _===t?M.preclimateStatus=R==="on":_===n?M.chargingState=R==="on":_===a&&(M.stateOfCharge=parseFloat(R)||0),M})}},T=[];t&&T.push(t),n&&T.push(n),a&&T.push(a);for(const L of T){const _=await S.subscribeMessage(w,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:L}});E.push(_)}f=!1}catch(w){if(f=!1,h){C.error("Failed to setup WebSocket connection:",w),d(w instanceof Error?w.message:String(w));const T=Math.min(1e3*Math.pow(2,s),3e4);s++,p=setTimeout(()=>{h&&r()},T)}}}return r(),()=>{h=!1,p&&clearTimeout(p),E.forEach(m=>{m&&m()}),S&&S.close()}},[y,o,t,n,a,u,x]),[g,l]},Bo=e=>{const o=e?.ENTITY_PRECLIMATE_START||"";o&&I.post(P("/api/services/button/press",e),{entity_id:o}).catch(t=>{C.error("Failed to start preclimate:",t)})},Ho=e=>{const o=e?.ENTITY_PRECLIMATE_STOP||"";o&&I.post(P("/api/services/button/press",e),{entity_id:o}).catch(t=>{C.error("Failed to stop preclimate:",t)})},Yo=O.div`
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
`,Fo=(e,o)=>o?bt:e>=80?At:e>=50?St:e>=20?Tt:jt,Uo=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",zo=()=>{const e=W();if(!(e.ENABLE_EV||!1))return null;const[t,n]=Vo(),{preclimateStatus:a,chargingState:u,stateOfCharge:x}=t,[g,A]=N.useState(!1),[l,d]=N.useState(null),[y,S]=N.useState(!1),[E,h]=N.useState(!1),[p,s]=N.useState(0),f=N.useRef(null),r=N.useRef(null),m=N.useRef(a),b=N.useRef(null);N.useEffect(()=>{m.current!==a&&(g&&b.current!==null&&a===(l==="start")&&(s(l==="start"?360:0),h(!0),setTimeout(()=>{A(!1),d(null),h(!1),s(0),b.current=null,S(!1)},300),f.current&&(clearTimeout(f.current),f.current=null)),m.current=a)},[a,g,l]),N.useEffect(()=>{if(!g||E){r.current&&(cancelAnimationFrame(r.current),r.current=null);return}const M=b.current||Date.now(),D=1e4,H=l==="stop",$=()=>{const Y=Date.now()-M,U=Math.min(Y/D,1);s(H?360*(1-U):360*U),U<1&&!E&&(r.current=requestAnimationFrame($))};return r.current=requestAnimationFrame($),()=>{r.current&&(cancelAnimationFrame(r.current),r.current=null)}},[g,E,l]),N.useEffect(()=>()=>{f.current&&clearTimeout(f.current),r.current&&cancelAnimationFrame(r.current)},[]);const c=N.useCallback(()=>{if(n!==!1||g)return;const M=!a,D=M?"start":"stop";A(!0),d(D),h(!1),S(!1),s(0),b.current=Date.now(),m.current=a,M?Bo(e):Ho(e),f.current=setTimeout(()=>{g&&(S(!0),setTimeout(()=>{A(!1),d(null),h(!1),s(0),S(!1),b.current=null},500))},15e3)},[a,n,g]),w=Fo(x||0,u),T=Uo(x||0),L=Math.round(x||0),_=g?l==="start":a,R=l==="start"?"#17e146":"#f85a5a",k=l==="start"?"clockwise":"counterclockwise";return i.jsxs(Yo,{className:B({disabled:n!==!1}),children:[i.jsxs("h2",{children:["Auto",n!==!1?i.jsxs("div",{className:"battery-info",children:[i.jsx(F,{path:je,size:"1.2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsxs("div",{className:"battery-info",children:[i.jsxs("span",{className:"charge-percentage",children:[L,"%"]}),i.jsx(F,{path:w,size:"1.2rem",color:T})]})]}),n===!1&&i.jsxs("div",{className:"preclimate-button-wrapper",children:[g&&i.jsx("div",{className:B("progress-ring",k,{complete:E}),style:{"--progress-color":R,"--progress-angle":`${p}deg`,"--progress-gradient":l==="stop"?`conic-gradient(from -90deg, ${R} 0deg, ${R} ${p}deg, transparent ${p}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${R} 0deg, ${R} ${p}deg, transparent ${p}deg, transparent 360deg)`}}),i.jsxs("button",{className:B("preclimate-button",{spinning:_&&!g,shaking:y}),onClick:c,disabled:n!==!1||g,children:[i.jsx(F,{path:yt,size:"2rem",color:_?"#ff9800":"#ffffff"}),i.jsx("span",{children:_?"Stop":"Start"})]})]})]})},Go=N.memo(zo),Ko=()=>{const e=W(),o=e.ENABLE_GARAGE||!1,t=e.ENTITY_GARAGE_DOOR||"",n=e.HASS_ACCESS_TOKEN||"",a=e.SUPERVISOR_TOKEN||"",[u,x]=j.useState("closed"),[g,A]=j.useState(!1),l=o&&t,d=t?P(`/api/states/${t}`,e):null;return j.useEffect(()=>{!l||!d||I(d).then(y=>{x(y.data.state),A(!1)}).catch(y=>{A(z(y))})},[l,d,o,t]),j.useEffect(()=>{let y=null,S=null,E=!0,h=null,p=0,s=!1;async function f(){if(!l||!t||s)return;if(y){try{S&&(S(),S=null),y.close()}catch{}y=null}s=!0;const r=se(e),m=a||n||"";if(!m){s=!1;return}let b;try{b=ne(r,m),E&&A(!1)}catch(c){E&&(C.error("Failed to create WebSocket auth:",c),A(c instanceof Error?c.message:String(c))),s=!1;return}try{y=await ie({auth:b}),y.addEventListener("ready",()=>{E&&(C.debug("WebSocket connection ready for garage door"),p=0,A(!1))}),y.addEventListener("disconnected",()=>{if(E&&!s){C.debug("WebSocket disconnected for garage door, will attempt to reconnect"),h&&clearTimeout(h),y=null,S=null;const w=Math.min(1e3*Math.pow(2,p),3e4);p++,h=setTimeout(()=>{E&&!s&&(C.debug(`Attempting to reconnect WebSocket for garage door (attempt ${p})`),f())},w)}});const c=w=>{E&&x(w.variables.trigger.to_state.state)};S=await y.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:t}}),s=!1}catch(c){if(s=!1,E){C.error("Failed to setup WebSocket connection:",c),A(c instanceof Error?c.message:String(c));const w=Math.min(1e3*Math.pow(2,p),3e4);p++,h=setTimeout(()=>{E&&f()},w)}}}return f(),()=>{E=!1,h&&clearTimeout(h),S&&S(),y&&y.close()}},[l]),[u,g]},qo=(e,o={})=>{const t=o.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const n=setTimeout(()=>e(!1),3e3);I.post(P("/api/services/cover/toggle",o),{entity_id:t}).catch(a=>{C.error("Failed to toggle garage door:",a)}).finally(()=>{clearTimeout(n),e(!1)})},Xo=(e,o={})=>{const t=o.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const n=setTimeout(()=>e(!1),3e3);I.post(P("/api/services/cover/open_cover",o),{entity_id:t}).catch(a=>{C.error("Failed to open garage door:",a)}).finally(()=>{clearTimeout(n),e(!1)})},Jo=(e,o={})=>{const t=o.ENTITY_GARAGE_DOOR||"";if(!t)return;e(!0);const n=setTimeout(()=>e(!1),3e3);I.post(P("/api/services/cover/close_cover",o),{entity_id:t}).catch(a=>{C.error("Failed to close garage door:",a)}).finally(()=>{clearTimeout(n),e(!1)})},Qo=O.div`
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
`,Ge=O.div`
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
`,Te=e=>{const o={unknown:{label:"In Bewegung oder halb-offen",icon:Ct},open:{label:"Offen",icon:Nt},closed:{label:"Geschlossen",icon:Rt},opening:{label:"Öffnet",icon:Lt},closing:{label:"Schließt",icon:_t}};return o[e]||C.warn("Garage door state is not recognized:",e,"Available states: unknown, open, closed, opening, closing"),o[e]||{label:"Unavailable",icon:kt}},Zo=({garageDoor:e,animate:o=!1})=>i.jsxs(Ge,{className:B({animate:o}),children:[i.jsx(F,{path:Te(e).icon,size:"2rem",color:"#ffffff"}),i.jsx("span",{children:Te(e).label})]}),en=e=>ct.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:o}){return Te(o).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),tn=()=>{const e=W();if(!(e.ENABLE_GARAGE||!1))return null;const[t,n]=Ko(),[a,u]=j.useState(void 0),[x,g]=j.useState(!1),[A,l]=j.useState(!1);j.useEffect(()=>{if(t==="unknown"||t==="opening"||t==="closing"){if(!a){const h=new Promise(p=>{u({resolve:p})});en(h)}}else a&&(a.resolve(t),u(void 0))},[t]);const d=oe("g");j.useEffect(()=>{d&&n===!1&&qo(g,e)},[d,n,e]);const y=N.useCallback(E=>{if(n===!1)switch(l(!1),E){case"open":Xo(g,e);break;case"close":Jo(g,e);break}},[g,n,e]),S=N.useCallback(()=>{n===!1&&l(!0)},[n]);return i.jsxs(Qo,{className:B({disabled:n!==!1}),children:[i.jsx("h2",{children:"Garage"}),i.jsx("div",{className:"status",onClick:S,children:n!==!1?i.jsxs(Ge,{children:[i.jsx(F,{path:je,size:"2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsx(Zo,{garageDoor:t,animate:x})}),i.jsx(re,{visible:A&&n===!1,onClick:()=>l(!1),children:i.jsxs("div",{className:"controls",children:[i.jsx("h2",{children:"Garagentor"}),i.jsx("div",{onClick:()=>y("open"),children:"Öffnen"}),i.jsx("div",{onClick:()=>y("close"),children:"Schließen"})]})})]})},on=N.memo(tn),nn=(e,o)=>e?P(`/api/states/${e}`,o):null,K={done:{label:"Fertig",animate:!1,icon:vt},off:{label:"Aus",animate:!1,icon:Ot},standby:{label:"Standby",animate:!1,icon:Re},running:{label:"Läuft …",animate:!0,icon:Re}},rn={off:0,standby:2,running:16,done:256},sn=()=>{const e=W();e.ENABLE_LAUNDRY;const o=e.LAUNDRY_MACHINES||[];e.HASS_ACCESS_TOKEN,e.SUPERVISOR_TOKEN;const n=(Array.isArray(o)?o:[]).map((y,S)=>{const[E,h]=an(y.entity_id,e);return{state:E,error:h,name:y.name}}),[a,u]=j.useState(K.off),[x,g]=j.useState(!1),A=n.map(y=>y.state),l=n.map(y=>y.error);j.useEffect(()=>{const y=l.some(S=>S!==!1);g(y&&l.find(S=>S!==!1)||!1)},[l]),j.useEffect(()=>{const y=A.reduce((S,E)=>S+(rn[E]||0),0);y===0?u(K.off):y<16?u(K.standby):y<256?u(K.running):y%256===0?u(K.done):y%256%16===0?u(K.running):y%256%2===0?u(K.done):u(K.running)},[A]);const d=n.map(y=>({label:y.name,state:y.state}));return[a,d,x]},an=(e,o)=>{const[t,n]=j.useState("off"),[a,u]=j.useState(!1),g=(o.ENABLE_LAUNDRY||!1)&&e,A=nn(e,o);return j.useEffect(()=>{!g||!A||I(A).then(l=>{n(l.data.state),u(!1)}).catch(l=>{u(z(l))})},[e,g,A]),j.useEffect(()=>{let l=null,d=null,y=!0,S=null,E=0,h=!1;async function p(){if(!g||!e||h)return;if(l){try{d&&(d(),d=null),l.close()}catch{}l=null}h=!0;const s=se(o),f=o.HASS_ACCESS_TOKEN||"",m=o.SUPERVISOR_TOKEN||""||f||"";if(!m){h=!1;return}try{const b=ne(s,m);l=await ie({auth:b}),l.addEventListener("ready",()=>{y&&(C.debug(`WebSocket connection ready for ${e}`),E=0,u(!1))}),l.addEventListener("disconnected",()=>{if(y&&!h){C.debug(`WebSocket disconnected for ${e}, will attempt to reconnect`),S&&clearTimeout(S),l=null,d=null;const w=Math.min(1e3*Math.pow(2,E),3e4);E++,S=setTimeout(()=>{y&&!h&&(C.debug(`Attempting to reconnect WebSocket for ${e} (attempt ${E})`),p())},w)}});const c=w=>{y&&n(w.variables.trigger.to_state.state)};d=await l.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),h=!1}catch(b){if(h=!1,y){C.error(`Failed to setup WebSocket connection for ${e}:`,b),u(b instanceof Error?b.message:String(b));const c=Math.min(1e3*Math.pow(2,E),3e4);E++,S=setTimeout(()=>{y&&p()},c)}}}return p(),()=>{y=!1,S&&clearTimeout(S),d&&d(),l&&l.close()}},[e,g]),[t,a]},cn=O.div`
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
`,ln=()=>{if(!(W().ENABLE_LAUNDRY||!1))return null;const[t,n,a]=sn(),[u,x]=j.useState(!1),g=N.useCallback(()=>{a===!1&&x(!0)},[a]),A=N.useCallback(()=>x(!1),[]);return i.jsxs(cn,{className:B({disabled:a!==!1}),children:[i.jsx("h2",{children:"Wäsche"}),i.jsx("div",{className:"status",onClick:g,children:a!==!1?i.jsxs(i.Fragment,{children:[i.jsx(F,{path:je,size:"2rem",color:"#f85a5a"}),i.jsx("span",{children:"Fehler"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:B({animate:t.animate}),children:i.jsx(F,{path:t.icon,size:"2rem",color:"#ffffff"})}),i.jsx("span",{children:t.label})]})}),i.jsx(re,{visible:u&&a===!1,onClick:A,children:i.jsxs("div",{className:"states",children:[i.jsx("h2",{children:"Wäsche"}),n.map((l,d)=>i.jsxs("div",{children:[i.jsx("div",{className:"subtitle",children:l.label}),i.jsx("div",{className:B({animate:K[l.state].animate}),children:i.jsx(F,{path:K[l.state].icon,size:2})}),i.jsx("div",{children:K[l.state].label})]},d))]})})]})},dn=N.memo(ln),fn=O.div`
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
`,un=()=>i.jsxs(fn,{children:[i.jsxs("div",{className:"top-content",children:[i.jsx(Lo,{}),i.jsx(Wo,{}),i.jsx(Go,{})]}),i.jsxs("div",{className:"two-cols",children:[i.jsx(on,{}),i.jsx(dn,{})]})]}),hn=N.memo(un),$e=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],pn=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],me={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},mn={landscape:"L",portrait:"P",wide:"W"},gn=O.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,xn=O.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,En=O.div`
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
`,We=O.select`
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
`,Ve=O.input`
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
`,wn=O.button`
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
`,Be=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,yn=O.button`
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
`,bn=O.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,An=O.div`
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
`,Sn=O.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Tn=O.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,jn=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,de=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,fe=O.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ue=O.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,_n=O.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Ln=O.h3`
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
`;const Ae=O.button`
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
`,He=()=>{const[e,o]=N.useState(1920),[t,n]=N.useState(1080),[a,u]=N.useState("Full HD"),[x,g]=N.useState(""),[A,l]=N.useState(""),[d,y]=N.useState([{orientation:"landscape"}]),[S,E]=N.useState(null),h=N.useMemo(()=>ze(d,e,t),[d,e,t]),p=c=>{const w=$e.find(T=>T.name===c);w&&w.width&&w.height?(o(w.width),n(w.height),u(c),g(""),l("")):c==="Custom"&&u("Custom")},s=()=>{const c=parseInt(x),w=parseInt(A);c>0&&w>0&&(o(c),n(w))},f=c=>{y(c.videos),E(c.name)},r=c=>{const w=[];for(let T=0;T<c;T++)w.push(d[T]||{orientation:"landscape"});y(w),E(null)},m=(c,w)=>{const T=[...d];T[c]={orientation:w},y(T),E(null)},b=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/t));return i.jsxs(gn,{children:[i.jsx(xn,{children:"Video Tiling Algorithm Demo"}),i.jsxs(En,{children:[i.jsxs(Q,{children:[i.jsx(Z,{children:"Screen Size Preset"}),i.jsx(We,{value:a,onChange:c=>p(c.target.value),children:$e.map(c=>i.jsx("option",{value:c.name,children:c.name},c.name))})]}),a==="Custom"&&i.jsxs(i.Fragment,{children:[i.jsxs(Q,{children:[i.jsx(Z,{children:"Custom Width"}),i.jsx(Ve,{type:"number",value:x,onChange:c=>g(c.target.value),placeholder:"Width",min:"100"})]}),i.jsxs(Q,{children:[i.jsx(Z,{children:"Custom Height"}),i.jsx(Ve,{type:"number",value:A,onChange:c=>l(c.target.value),placeholder:"Height",min:"100"})]}),i.jsxs(Q,{children:[i.jsx(Z,{children:" "}),i.jsx(wn,{onClick:s,children:"Apply Custom Size"})]})]}),i.jsxs(Q,{children:[i.jsx(Z,{children:"Number of Videos"}),i.jsxs(We,{value:d.length,onChange:c=>r(parseInt(c.target.value)),children:[i.jsx("option",{value:"1",children:"1 Video"}),i.jsx("option",{value:"2",children:"2 Videos"}),i.jsx("option",{value:"3",children:"3 Videos"}),i.jsx("option",{value:"4",children:"4 Videos"})]})]}),d.map((c,w)=>i.jsxs(Q,{children:[i.jsxs(Z,{children:["Video ",w+1," Orientation"]}),i.jsxs(Be,{children:[i.jsx(Ae,{active:c.orientation==="landscape",orientation:"landscape",onClick:()=>m(w,"landscape"),children:"Landscape"}),i.jsx(Ae,{active:c.orientation==="portrait",orientation:"portrait",onClick:()=>m(w,"portrait"),children:"Portrait"}),i.jsx(Ae,{active:c.orientation==="wide",orientation:"wide",onClick:()=>m(w,"wide"),children:"Wide"})]})]},w))]}),i.jsxs(_n,{children:[i.jsx(Ln,{children:"Test Scenarios"}),i.jsx(Be,{children:pn.map(c=>i.jsx(yn,{active:S===c.name,onClick:()=>f(c),children:c.name},c.name))})]}),i.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:i.jsx(bn,{style:{width:`${e*b}px`,height:`${t*b}px`},children:h.videos.map((c,w)=>i.jsxs(An,{orientation:c.orientation,style:{left:`${c.x*b}px`,top:`${c.y*b}px`,width:`${c.width*b}px`,height:`${c.height*b}px`},children:[i.jsxs(Sn,{children:[mn[c.orientation]," ",w+1]}),i.jsxs(Tn,{children:[Math.round(c.width)," × ",Math.round(c.height)]})]},w))})}),i.jsxs(jn,{children:[i.jsxs(de,{children:[i.jsx(fe,{children:"Canvas Size"}),i.jsxs(ue,{children:[e," × ",t]})]}),i.jsxs(de,{children:[i.jsx(fe,{children:"Total Area Used"}),i.jsxs(ue,{children:[Math.round(h.totalArea).toLocaleString()," px²"]})]}),i.jsxs(de,{children:[i.jsx(fe,{children:"Efficiency"}),i.jsxs(ue,{children:[h.efficiency.toFixed(2),"%"]})]}),i.jsxs(de,{children:[i.jsx(fe,{children:"Display Scale"}),i.jsxs(ue,{children:[(b*100).toFixed(1),"%"]})]})]})]})},Rn=()=>{function e(t,n){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(n))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[u,x]=n.split(":").map(Number),g=new Date;let A=new Date(g.getFullYear(),g.getMonth(),g.getDate());A.setHours(u,x,0,0),A<=g&&A.setDate(A.getDate()+1);const l=A.getTime()-g.getTime();return C.log("Reloading page at",n,"in",Math.floor(l/1e3/60),"minutes"),setTimeout(t,l)}const o=()=>{C.log("Timeout reached! "),window.location.reload(!0)};j.useLayoutEffect(()=>{const t=[e(o,"00:00"),e(o,"03:00"),e(o,"06:00"),e(o,"09:00"),e(o,"12:00"),e(o,"15:00"),e(o,"18:00"),e(o,"21:00")];return()=>{t.forEach(n=>{n&&clearTimeout(n)})}},[])},Nn=O.div`
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
`;class xe extends j.Component{constructor(o){super(o),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(o){return{hasError:!0}}componentDidCatch(o,t){this.setState({error:o,errorInfo:t});const n=o?.toString()||"Unknown error",a=o?.stack||"",u=t?.componentStack||"";C.error(`ErrorBoundary caught an error: ${n}`,{errorName:o?.name,errorMessage:n,errorStack:a,componentStack:u})}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?i.jsxs(Nn,{children:[i.jsx("h2",{children:"Something went wrong"}),i.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,i.jsxs("div",{children:[i.jsx("button",{onClick:this.handleReset,children:"Try Again"}),i.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Cn=lt`
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
`,kn=O.div`
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
`;function On(){return Rn(),i.jsxs(kn,{children:[i.jsx(Cn,{}),i.jsxs("div",{className:"main",children:[i.jsx(xe,{children:i.jsx(Ao,{})}),i.jsx(xe,{children:i.jsx(hn,{})})]}),i.jsx(ft,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function vn(){return i.jsx(xe,{children:i.jsxs(dt,{children:[i.jsx(we,{path:"/demo",element:i.jsx(He,{})}),i.jsx(we,{path:"/tiling-demo",element:i.jsx(He,{})}),i.jsx(we,{path:"*",element:i.jsx(On,{})})]})})}const Dn=ut.createRoot(document.getElementById("root"));Dn.render(i.jsx(j.StrictMode,{children:i.jsx(xe,{children:i.jsx(Wt,{children:i.jsx(ht,{children:i.jsx(vn,{})})})})}));
