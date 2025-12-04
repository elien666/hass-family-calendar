import{d as D,R as A,j as t,I as B,l as it,r as C,P as wt,W as bt,b as Et,e as St,f as jt,h as At,i as Tt,k as kt,m as vt,n as Lt,o as Ct,T as Rt,p as Dt,s as Nt,y as Ot,q as _t,t as Mt,u as Le,L as $t,v as Wt,B as Pt}from"./react-vendor-BgPpcsO_.js";import{D as F}from"./date-vendor-BDx6lZXm.js";import{f as V}from"./vendor-DZVfbimd.js";import{m as It,a as Ft,b as Vt,c as zt,d as Bt,e as Ht,f as We,g as Ut,h as Gt,i as Yt,j as qt,k as Kt,l as Xt,n as Jt,o as Qt,p as Zt,q as eo,r as to,s as oo,t as Fe,u as no,v as io}from"./ui-vendor-C7t39j5V.js";import{a as _,q as ro,B as so,h as ao}from"./utils-vendor-B9ruUKej.js";import{c as he,a as pe}from"./ha-vendor-CoU0AojH.js";import{t as co}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const a of d)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function o(d){const a={};return d.integrity&&(a.integrity=d.integrity),d.referrerPolicy&&(a.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?a.credentials="include":d.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(d){if(d.ep)return;d.ep=!0;const a=o(d);fetch(d.href,a)}})();const lo=D.div`
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
`,me=({visible:e,children:n,onClick:o,onClose:i,fullsize:d=!1})=>{const a=i||o,f=r=>{r.stopPropagation(),r.preventDefault(),a()};return A.useEffect(()=>{if(e){const r=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${r}px`,document.body.style.width="100%",document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,r)}}},[e]),e?t.jsxs(lo,{onClick:o,children:[t.jsx("div",{className:"close",onClick:f,children:t.jsx(B,{path:It,size:2})}),t.jsx("div",{className:V("content",{fullsize:d}),onClick:r=>r.stopPropagation(),children:n})]}):null},R={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}};let le=0,Ee=0,Z=0;const ce=[],rt=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1,code:e.code||null,config:null};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server",e.request.readyState!==void 0&&(n.readyState=e.request.readyState),e.request.status!==void 0&&(n.requestStatus=e.request.status)):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),e.config&&(n.config={method:e.config.method,url:e.config.url,baseURL:e.config.baseURL,timeout:e.config.timeout,headers:{...e.config.headers,Authorization:e.config.headers?.Authorization?"[REDACTED]":void 0},hasAuthHeader:!!e.config.headers?.Authorization}),n},fo=(e,n="")=>{const o=rt(e);Z++,le++,ce.push({timestamp:new Date().toISOString(),url:o.url,status:o.status,code:o.code,message:o.message,isNetworkError:o.isNetworkError,isTimeoutError:o.isTimeoutError}),ce.length>10&&ce.shift();const i=[];return n&&i.push(`[${n}]`),i.push("🔴 Axios API Error:"),i.push(`Message: ${o.message}`),o.url&&i.push(`URL: ${o.url}`),o.status&&i.push(`HTTP Status: ${o.status}`),o.code&&i.push(`Error Code: ${o.code}`),o.isNetworkError&&(i.push("Type: Network Error (no response received)"),o.readyState!==void 0&&i.push(`ReadyState: ${o.readyState}`)),o.isTimeoutError&&i.push("Type: Timeout Error"),o.config&&(i.push(`Method: ${o.config.method?.toUpperCase()||"UNKNOWN"}`),i.push(`Has Auth Header: ${o.config.hasAuthHeader}`),o.config.timeout&&i.push(`Timeout: ${o.config.timeout}ms`)),o.responseData&&i.push("Response Data:",o.responseData),i.push(`Request Stats: ${Ee} success, ${Z} errors (${le} total)`),Z>3&&ce.length>0&&i.push("Recent errors pattern:",ce.slice(-5)),R.error(...i),o},uo=e=>{Ee++,le++,(le%10===0||Z>0)&&R.debug("✅ Axios Request Success:",{method:e.method?.toUpperCase(),url:e.url,hasAuthHeader:!!e.headers?.Authorization,requestNumber:le,stats:`${Ee} success, ${Z} errors`}),Z>0&&le%10===0&&Ee>Z&&(Z=0,ce.length=0)},H=e=>{const n=rt(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"},ho={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},$=(e,n=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[e]!==void 0){const i=window.APP_CONFIG[e];return i==="undefined"||i==="null"?n:i??n}return n}const o=ho[`VITE_${e}`];return e==="HASS_ACCESS_TOKEN"&&o!==void 0?n:o!==void 0?o:n},po=(e,n=!1)=>{const o=$(e,n);return typeof o=="boolean"?o:typeof o=="string"?o==="true"||o==="1"||o==="yes":!!o};$("HASS_HOST","");const q=$("HASS_ACCESS_TOKEN",""),mo=q&&typeof q=="string"&&q.trim()!==""&&q!=="undefined"&&q!=="null";mo?_.defaults.headers.common.Authorization=`Bearer ${q}`:delete _.defaults.headers.common.Authorization;_.interceptors.request.use(e=>{const n=Date.now();return e.metadata={requestId:n,startTime:Date.now()},typeof window<"u"&&(n%50===0||!window._axiosDefaultsLogged)&&(window._axiosDefaultsLogged=!0,R.debug("Axios Defaults State:",{baseURL:_.defaults.baseURL,timeout:_.defaults.timeout,hasAuthHeader:!!_.defaults.headers?.common?.Authorization,authHeaderLength:_.defaults.headers?.common?.Authorization?.length||0,headers:Object.keys(_.defaults.headers?.common||{})})),e},e=>(R.error("Axios Request Setup Error:",e),Promise.reject(e)));_.interceptors.response.use(e=>(e.config&&uo(e.config),e),e=>{const n=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";if(fo(e,n),e.config?.metadata){const o=Date.now()-e.config.metadata.startTime;R.error("Request Duration:",`${o}ms`,"Request ID:",e.config.metadata.requestId)}return typeof window<"u"&&window.location&&R.error("Window Location State:",{origin:window.location.origin,pathname:window.location.pathname,href:window.location.href}),Promise.reject(e)});const st=$("WEATHER_API_KEY"),at=$("WEATHER_LATITUDE"),ct=$("WEATHER_LONGITUDE"),Oe=$("GEOFOX_SECRET"),lt=$("GEOFOX_USER"),K=$("ENTITY_GARAGE_DOOR"),de=$("ENTITY_DOORBELL"),Ve=$("ENTITY_DOORBELL_BUTTON"),_e=$("ENTITY_EVERYDAY_CALENDAR"),ne=$("ENTITY_PRECLIMATE_STATUS"),ze=$("ENTITY_PRECLIMATE_START"),Be=$("ENTITY_PRECLIMATE_STOP"),ie=$("ENTITY_CHARGING_STATE"),re=$("ENTITY_STATE_OF_CHARGE"),ge=$("SUPERVISOR_TOKEN"),ee=$("INGRESS_URL"),go=(()=>{const e=$("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),Ae=(()=>{const e=$("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),te=(()=>{const e=$("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),oe=(e,n)=>$(e,void 0)!==void 0?po(e,!1):!1,dt=oe("ENABLE_WEATHER"),ft=oe("ENABLE_HVV"),ut=oe("ENABLE_GARAGE"),ht=oe("ENABLE_LAUNDRY",Array.isArray(Ae)&&Ae.length>0),pt=oe("ENABLE_DOORBELL"),mt=oe("ENABLE_EVERYDAY_CALENDAR"),gt=oe("ENABLE_EV"),I=e=>{const n=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){if(ee&&typeof ee=="string"&&ee.trim()!==""){const i=n.startsWith("/")?n.slice(1):n;return`${window.location.origin}${ee}${i}`}const o=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${o}${n}`}return n}},xe=()=>{if(typeof window<"u"&&window.location){if(ee&&typeof ee=="string"&&ee.trim()!=="")return`${window.location.origin}${ee.replace(/\/$/,"")}`;const e=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${e}`}return""},fe=_e?I(`/api/states/${_e}`):null,xo=()=>{const[e,n]=A.useState(null),[o,i]=A.useState(!1),d=mt&&_e;return A.useEffect(()=>{!d||!fe||_(fe).then(a=>{a.data.attributes.store!==void 0?n(a.data.attributes.store):n([]),i(!1)}).catch(a=>{i(H(a)),n([])})},[d,fe]),[e,o]},yo=e=>{fe&&_.post(fe,{state:new Date,attributes:{store:e}}).catch(n=>{R.error("Failed to store everyday calendar data:",n)})},He=D.div` 

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
`,wo=({on:e,month:n,day:o})=>{const[i,d]=e,a=i.indexOf(`${n}-${o}`),f=a>-1,r=()=>{d(f?i.toSpliced(a,1):[...i,`${n}-${o}`])};return t.jsx("div",{className:V("dot",{on:f}),onClick:()=>r()})},bo=()=>{if(!mt)return null;const e=new Date().getFullYear(),n=[];for(let r=1;r<13;r++){const m=new Date(e,r,0).getDate();for(let l=1;l<=m;l++)n.push({month:r,day:l})}const o=Array.from({length:31},(r,m)=>m+1),i=Array.from({length:12},(r,m)=>m+1),d=A.useState(void 0),[a,f]=xo();return A.useEffect(()=>{a!==null&&d[1](a)},[a]),A.useEffect(()=>{d[0]!==void 0&&yo(d[0])},[d[0]]),d[0]!==void 0?t.jsxs(He,{children:[t.jsx("h2",{children:"Jeden Tag ein bißchen"}),f!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:f instanceof Error?f.message:String(f)})]}),t.jsxs("div",{className:"calendar",children:[o.map((r,m)=>t.jsx("div",{style:{gridArea:`${r+1} / 1 / ${r+1} / 1`},children:r},m)),i.map((r,m)=>t.jsx("div",{style:{gridArea:`1 / ${r+1} / 1 / ${r+1}`},children:r},m)),n.map((r,m)=>t.jsx("div",{style:{gridArea:`${r.day+1} / ${r.month+1} / ${r.day+1} / ${r.month+1}`},children:t.jsx(wo,{on:d,month:r.month,day:r.day})},m))]})]}):t.jsx(He,{className:"loading",children:f!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:f instanceof Error?f.message:String(f)})]}):t.jsx(it,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},Eo=D.div`
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
  }`,So=()=>{const[e,n]=A.useState(F.now()),[o,i]=A.useState(!1),d=C.useCallback(()=>i(!0),[]),a=C.useCallback(()=>i(!1),[]);return A.useEffect(()=>{const f=setInterval(()=>n(F.now()),1e3);return()=>clearInterval(f)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(Eo,{onClick:d,children:[e.toFormat("HH"),t.jsx("span",{children:":"}),e.toFormat("mm")]}),t.jsx(me,{visible:o,onClick:a,fullsize:!0,children:t.jsx(bo,{})})]})},jo=C.memo(So),Ce=de?I(`/api/states/${de}`):null,Ao=()=>{const[e,n]=A.useState("off"),[o,i]=A.useState(!1),d=pt&&de;return A.useEffect(()=>{!d||!Ce||_(Ce).then(a=>{n(a.data.state),i(!1)}).catch(a=>{i(H(a))})},[d,Ce]),A.useEffect(()=>{let a=null,f=null,r=!0,m=null,l=0,h=!1;async function w(){if(!d||!de||h)return;if(a){try{f&&(f(),f=null),a.close()}catch{}a=null}h=!0;const S=xe(),j=ge||q||"";if(!j){h=!1;return}let y;try{y=he(S,j),r&&i(!1)}catch(g){r&&(R.error("Failed to create WebSocket auth:",g),i(g instanceof Error?g.message:String(g))),h=!1;return}try{a=await pe({auth:y}),a.addEventListener("ready",()=>{r&&(R.debug("WebSocket connection ready for doorbell"),l=0,i(!1))}),a.addEventListener("disconnected",()=>{if(r&&!h){R.debug("WebSocket disconnected for doorbell, will attempt to reconnect"),m&&clearTimeout(m),a=null,f=null;const c=Math.min(1e3*Math.pow(2,l),3e4);l++,m=setTimeout(()=>{r&&!h&&(R.debug(`Attempting to reconnect WebSocket for doorbell (attempt ${l})`),w())},c)}});const g=c=>{if(r){const u=c.variables.trigger.to_state.state;n(u)}};f=await a.subscribeMessage(g,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:de}}),h=!1}catch(g){if(h=!1,r){R.error("Failed to setup WebSocket connection:",g),R.error("WebSocket error details:",{message:g instanceof Error?g.message:String(g),code:g.code,name:g.name,wsUrl:y?.wsUrl,host:S,tokenLength:j?j.length:0}),g.code===2&&R.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),i(g instanceof Error?g.message:String(g));const c=Math.min(1e3*Math.pow(2,l),3e4);l++,m=setTimeout(()=>{r&&w()},c)}}}return w(),()=>{r=!1,m&&clearTimeout(m),f&&f(),a&&a.close()}},[d]),[e,o]},To=()=>{Ve&&_.post(I("/api/services/button/press"),{entity_id:Ve}).catch(e=>{R.error("Failed to unlatch front door:",e)})},O={portrait:360/480,landscape:1920/1072,wide:770/216};function ko(e){const n={landscape:0,portrait:0,wide:0};return e.forEach(o=>{o.orientation&&n.hasOwnProperty(o.orientation)&&n[o.orientation]++}),n}function xt(e,n,o){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const i=e.length,d=ko(e);return i===1?vo(e[0],n,o):i===2?Lo(d,e,n,o):i===3?Co(d,e,n,o):i===4?Ro(d,e,n,o):{videos:[],totalArea:0,efficiency:0}}function vo(e,n,o){const i=O[e.orientation];let d,a;const f=n/o;return i>f?(d=n,a=n/i):(a=o,d=o*i),{videos:[{x:(n-d)/2,y:(o-a)/2,width:d,height:a,orientation:e.orientation}],totalArea:d*a,efficiency:d*a/(n*o)*100}}function Lo(e,n,o,i){if(e.portrait>0)return Pe(e,n,o,i);const d=[];e.landscape>0&&d.push("landscape"),e.wide>0&&d.push("wide");const a=d[0]||n[0].orientation,f=d[1]||n[1].orientation,r=O[a],m=O[f];if(e.landscape===1&&e.wide===1){const y=O.landscape,g=O.wide,c=o,u=c/y,s=c/g,x=u+s;let b,p,E;if(x<=i)b=u,p=s,E=c;else{const P=i/x;b=u*P,p=s*P,E=p*g}const T=(o-E)/2,v=X(n,[{x:T,y:0,width:E,height:p,orientation:"wide"},{x:T,y:p,width:E,height:b,orientation:"landscape"}]),L=E*b+E*p,N=L/(o*i)*100;return{videos:v,totalArea:L,efficiency:N}}if(e.wide===2){const y=O.wide,g=o,c=g/y,u=c*2;let s;u<=i?s=c:s=i/2;const b=X(n,[{x:0,y:0,width:g,height:s,orientation:"wide"},{x:0,y:s,width:g,height:s,orientation:"wide"}]),p=g*s*2,E=p/(o*i)*100;return{videos:b,totalArea:p,efficiency:E}}const l=[()=>{const y=o,g=y/2,c=y/2,u=g/r,s=c/m;return Math.max(u,s)<=i?{positions:[{x:0,y:(i-u)/2,width:g,height:u,orientation:a},{x:g,y:(i-s)/2,width:c,height:s,orientation:f}],totalArea:g*u+c*s}:null},()=>{const y=i,g=y/2,c=y/2,u=g*r,s=c*m;return Math.max(u,s)<=o?{positions:[{x:(o-u)/2,y:0,width:u,height:g,orientation:a},{x:(o-s)/2,y:g,width:s,height:c,orientation:f}],totalArea:u*g+s*c}:null}];let h=null,w=0;for(const y of l){const g=y();g&&g.totalArea>w&&(w=g.totalArea,h=g)}if(!h){const y=o/2,g=o/2,c=Math.min(y/r,i),u=Math.min(g/m,i);h={positions:[{x:0,y:(i-c)/2,width:y,height:c,orientation:a},{x:y,y:(i-u)/2,width:g,height:u,orientation:f}],totalArea:y*c+g*u}}const S=X(n,h.positions),j=h.totalArea/(o*i)*100;return{videos:S,totalArea:h.totalArea,efficiency:j}}function Pe(e,n,o,i){const d=e.portrait,a=n.length-d;if((d===3||d===4)&&a===0){const j=O.portrait,y=o/d,g=y/j,c=g<i?(i-g)/2:0,u=Math.min(g,i),s=[];let x=0;for(let E=0;E<d;E++){const T=Math.min(y,u*j);s.push({x:E*y+(y-T)/2,y:c,width:T,height:u,orientation:"portrait"}),x+=T*u}const b=X(n,s),p=x/(o*i)*100;return{videos:b,totalArea:x,efficiency:p}}n.filter(j=>j.orientation==="portrait");const f=n.filter(j=>j.orientation!=="portrait"),r=d>0?Math.min(o*.4,o*.5):0,m=o-r,l=[];let h=0;if(d===2&&a===0){const j=O.portrait,y=o/2,g=y/j,c=i;let u,s;g<=c?(s=g,u=y):(s=c,u=c*j);const x=(i-s)/2;l.push({x:(y-u)/2,y:x,width:u,height:s,orientation:"portrait"}),l.push({x:y+(y-u)/2,y:x,width:u,height:s,orientation:"portrait"}),h=u*s*2}else if(d===1&&a===1){const j=O.portrait,y=f[0],g=O[y.orientation],c=j+g,u=o*(j/c),s=o*(g/c),x=u/j,b=s/g,p=Math.min(i,Math.min(x,b)),E=(i-p)/2;l.push({x:0,y:E,width:u,height:p,orientation:"portrait"}),l.push({x:u,y:E,width:s,height:p,orientation:y.orientation}),h=u*p+s*p}else if(d===1&&a===2&&e.landscape===1&&e.wide===1){const j=O.portrait,y=O.wide,g=O.landscape,c=i,u=i*j,s=i/(1/y+1/g),x=s/y,b=s/g,p=u+s;if(Math.abs(p-o)<.1)l.push({x:0,y:0,width:u,height:c,orientation:"portrait"}),h+=u*c,f.find(v=>v.orientation==="wide")&&(l.push({x:0+u,y:0,width:s,height:x,orientation:"wide"}),h+=s*x),f.find(v=>v.orientation==="landscape")&&(l.push({x:0+u,y:x,width:s,height:b,orientation:"landscape"}),h+=s*b);else{const E=o/p,T=u*E,k=T/j,v=s*E,L=i/k;let N=T*L,P=i,M=v*L,z=M/y,W=M/g,U=N+M;if(U>o){const J=o/U;N=N*J,P=N/j,M=M*J,z=M/y,W=M/g,U=N+M,U>o&&(M=o-N,z=M/y,W=M/g)}const Q=N+M;if(Q>o){const J=o/Q;N=N*J,P=N/j,M=M*J,z=M/y,W=M/g}const G=0;l.push({x:G,y:0,width:N,height:P,orientation:"portrait"}),h+=N*P,f.find(J=>J.orientation==="wide")&&(l.push({x:G+N,y:0,width:M,height:z,orientation:"wide"}),h+=M*z),f.find(J=>J.orientation==="landscape")&&(l.push({x:G+N,y:z,width:M,height:W,orientation:"landscape"}),h+=M*W)}}else if(d===1&&a===3){const j=O.portrait,y=i,g=y*j,c=g,u=o-c;l.push({x:0,y:0,width:g,height:y,orientation:"portrait"}),h+=g*y;const s=i/3;for(let x=0;x<f.length;x++){const b=f[x],p=O[b.orientation],E=s,T=u;let k,v;T/p<=E?(k=T,v=k/p):(v=E,k=v*p);const L=x*s+(s-v)/2;l.push({x:c+(u-k)/2,y:L,width:k,height:v,orientation:b.orientation}),h+=k*v}}else if(d===2&&a===1){const j=O.portrait,y=f[0],g=O[y.orientation],c=i/2,u=c*j,s=o-u,x=i*g;let b,p;x<=s?(p=i,b=p*g):(b=s,p=b/g);const E=u,T=c,k=(i-p)/2,v=(i/2-T)/2,L=i/2+(i/2-T)/2;l.push({x:0,y:k,width:b,height:p,orientation:y.orientation}),h+=b*p,l.push({x:s,y:v,width:E,height:T,orientation:"portrait"}),h+=E*T,l.push({x:s,y:L,width:E,height:T,orientation:"portrait"}),h+=E*T}else if(d===1&&a===2){const j=O.portrait,y=i,g=y*j,c=g,u=o-c;l.push({x:0,y:0,width:g,height:y,orientation:"portrait"}),h+=g*y;const s=i/2;for(let x=0;x<f.length;x++){const b=f[x],p=O[b.orientation],E=s,T=u;let k,v;T/p<=E?(k=T,v=k/p):(v=E,k=v*p);const L=x*s+(s-v)/2;l.push({x:c+(u-k)/2,y:L,width:k,height:v,orientation:b.orientation}),h+=k*v}}else{const j=d;if(j>0){const y=i/j,g=O.portrait;for(let c=0;c<j;c++){const u=Math.min(y,r/g),s=u*g,x=c*y+(y-u)/2;l.push({x:(r-s)/2,y:x,width:s,height:u,orientation:"portrait"}),h+=s*u}}if(f.length>0){const y=i/f.length;for(let g=0;g<f.length;g++){const c=f[g],u=O[c.orientation],s=y,x=m;let b,p;x/u<=s?(b=x,p=b/u):(p=s,b=p*u);const E=g*y+(y-p)/2;l.push({x:r+(m-b)/2,y:E,width:b,height:p,orientation:c.orientation}),h+=b*p}}}const w=X(n,l),S=h/(o*i)*100;return{videos:w,totalArea:h,efficiency:S}}function X(e,n){const o=new Array(n.length),i=new Set,d=new Set;for(let r=0;r<n.length;r++){const m=n[r];for(let l=0;l<e.length;l++)if(!i.has(l)&&e[l].orientation===m.orientation){o[r]={...m,orientation:e[l].orientation},i.add(l),d.add(r);break}}const a=[];for(let r=0;r<n.length;r++)d.has(r)||a.push(r);let f=0;for(let r=0;r<e.length;r++)if(!i.has(r)&&f<a.length){const m=a[f];o[m]={...n[m],orientation:e[r].orientation},f++}return o}function Co(e,n,o,i){if(e.portrait>0)return Pe(e,n,o,i);if(e.landscape===2&&e.wide===1){const c=O.landscape,u=O.wide,s=o,x=s/u,b=i-x,p=o/2,E=p/c;let T,k,v,L;if(x<=i&&E<=b)T=s,k=x,v=p,L=E;else{const Q=i/(x+E),G=Math.min(1,Q);k=x*G,T=k*u,L=E*G,v=L*c}const N=(o-T)/2,P=k+(b-L)/2,z=X(n,[{x:N,y:0,width:T,height:k,orientation:"wide"},{x:0,y:P,width:v,height:L,orientation:"landscape"},{x:v,y:P,width:v,height:L,orientation:"landscape"}]),W=T*k+v*L*2,U=W/(o*i)*100;return{videos:z,totalArea:W,efficiency:U}}if(e.landscape===1&&e.wide===2){const c=O.landscape,u=O.wide,s=o/2,x=s/u,p=i-x,E=p*c;let T,k,v,L;if(x<=i&&E<=o&&x+p<=i)T=s,k=x,v=E,L=p;else{const G=x+p,ve=i/G;T=s,k=x*ve,L=p*ve,v=L*c}const N=0,P=o/2,M=(o-v)/2,W=X(n,[{x:N,y:0,width:T,height:k,orientation:"wide"},{x:P,y:0,width:T,height:k,orientation:"wide"},{x:M,y:k,width:v,height:L,orientation:"landscape"}]),U=T*k*2+v*L,Q=U/(o*i)*100;return{videos:W,totalArea:U,efficiency:Q}}if(e.wide===3){const c=O.wide,u=o/2,s=u/c,b=i-s,p=b*c;let E,T,k,v;if(s<=i&&p<=o&&s+b<=i)E=u,T=s,k=p,v=b;else{const Q=s+b,G=i/Q;E=u,T=s*G,v=b*G,k=v*c,k>o&&(k=o,v=k/c)}const L=0,N=o/2,P=(o-k)/2,z=X(n,[{x:L,y:0,width:E,height:T,orientation:"wide"},{x:N,y:0,width:E,height:T,orientation:"wide"},{x:P,y:T,width:k,height:v,orientation:"wide"}]),W=E*T*2+k*v,U=W/(o*i)*100;return{videos:z,totalArea:W,efficiency:U}}if(e.landscape===3){const c=O.landscape,u=o/(c*1.5),s=Math.min(i,u),x=s/2,b=s,p=x*c,E=b*c,T=(i-s)/2,k=[{x:0,y:T,width:p,height:x,orientation:"landscape"},{x:0,y:T+x,width:p,height:x,orientation:"landscape"},{x:p,y:T,width:E,height:b,orientation:"landscape"}],v=X(n,k),L=p*s+E*s,N=L/(o*i)*100;return{videos:v,totalArea:L,efficiency:N}}const d=[];if(e.landscape>0)for(let c=0;c<e.landscape;c++)d.push("landscape");if(e.wide>0)for(let c=0;c<e.wide;c++)d.push("wide");const a=d[0]||n[0].orientation,f=d[1]||n[1].orientation,r=d[2]||n[2].orientation,m=O[a],l=O[f],h=O[r],w=[()=>{const c=o*.6,u=o*.4,s=c/m,x=u/l,b=u/h,p=x+b;return s<=i&&p<=i?{positions:[{x:0,y:(i-s)/2,width:c,height:s,orientation:a},{x:c,y:0,width:u,height:x,orientation:f},{x:c,y:x,width:u,height:b,orientation:r}],totalArea:c*s+u*x+u*b}:null},()=>{const c=i*.5,u=i*.5,s=c*m,x=c*l,b=u*h;return s+x<=o&&b<=o?{positions:[{x:0,y:0,width:s,height:c,orientation:a},{x:s,y:0,width:x,height:c,orientation:f},{x:(o-b)/2,y:c,width:b,height:u,orientation:r}],totalArea:s*c+x*c+b*u}:null},()=>{const c=o/3,u=c/m,s=c/l,x=c/h;return Math.max(u,s,x)<=i?{positions:[{x:0,y:(i-u)/2,width:c,height:u,orientation:a},{x:c,y:(i-s)/2,width:c,height:s,orientation:f},{x:c*2,y:(i-x)/2,width:c,height:x,orientation:r}],totalArea:c*u+c*s+c*x}:null}];let S=null,j=0;for(const c of w){const u=c();u&&u.totalArea>j&&(j=u.totalArea,S=u)}if(!S){const c=o/3,u=Math.min(c/m,i),s=Math.min(c/l,i),x=Math.min(c/h,i);S={positions:[{x:0,y:(i-u)/2,width:c,height:u,orientation:a},{x:c,y:(i-s)/2,width:c,height:s,orientation:f},{x:c*2,y:(i-x)/2,width:c,height:x,orientation:r}],totalArea:c*u+c*s+c*x}}const y=X(n,S.positions),g=S.totalArea/(o*i)*100;return{videos:y,totalArea:S.totalArea,efficiency:g}}function Ro(e,n,o,i){if(e.portrait>0)return Pe(e,n,o,i);const d=[];if(e.landscape>0)for(let s=0;s<e.landscape;s++)d.push("landscape");if(e.wide>0)for(let s=0;s<e.wide;s++)d.push("wide");const a=d[0]||n[0].orientation,f=d[1]||n[1].orientation,r=d[2]||n[2].orientation,m=d[3]||n[3].orientation,l=O[a],h=O[f],w=O[r],S=O[m],j=[()=>{const s=o/2,x=i/2,b=Math.min(s,x*l),p=b/l,E=Math.min(s,x*h),T=E/h,k=Math.min(s,x*w),v=k/w,L=Math.min(s,x*S),N=L/S;return{positions:[{x:(s-b)/2,y:(x-p)/2,width:b,height:p,orientation:a},{x:s+(s-E)/2,y:(x-T)/2,width:E,height:T,orientation:f},{x:(s-k)/2,y:x+(x-v)/2,width:k,height:v,orientation:r},{x:s+(s-L)/2,y:x+(x-N)/2,width:L,height:N,orientation:m}],totalArea:b*p+E*T+k*v+L*N}},()=>{const s=o*.6,x=o*.4,b=s/l,p=i/3,E=Math.min(x,p*h),T=E/h,k=Math.min(x,p*w),v=k/w,L=Math.min(x,p*S),N=L/S;return b<=i?{positions:[{x:0,y:(i-b)/2,width:s,height:b,orientation:a},{x:s,y:0,width:E,height:T,orientation:f},{x:s,y:p,width:k,height:v,orientation:r},{x:s,y:p*2,width:L,height:N,orientation:m}],totalArea:s*b+E*T+k*v+L*N}:null},()=>{const s=o/4,x=s/l,b=s/h,p=s/w,E=s/S;return Math.max(x,b,p,E)<=i?{positions:[{x:0,y:(i-x)/2,width:s,height:x,orientation:a},{x:s,y:(i-b)/2,width:s,height:b,orientation:f},{x:s*2,y:(i-p)/2,width:s,height:p,orientation:r},{x:s*3,y:(i-E)/2,width:s,height:E,orientation:m}],totalArea:s*x+s*b+s*p+s*E}:null}];let y=null,g=0;for(const s of j){const x=s();x&&x.totalArea>g&&(g=x.totalArea,y=x)}if(!y){const s=o/2,x=i/2,b=Math.min(x,s/l),p=Math.min(x,s/h),E=Math.min(x,s/w),T=Math.min(x,s/S);y={positions:[{x:(s-s)/2,y:(x-b)/2,width:s,height:b,orientation:a},{x:s+(s-s)/2,y:(x-p)/2,width:s,height:p,orientation:f},{x:(s-s)/2,y:x+(x-E)/2,width:s,height:E,orientation:r},{x:s+(s-s)/2,y:x+(x-T)/2,width:s,height:T,orientation:m}],totalArea:s*b+s*p+s*E+s*T}}const c=X(n,y.positions),u=y.totalArea/(o*i)*100;return{videos:c,totalArea:y.totalArea,efficiency:u}}const Do=e=>{const[n,o]=A.useState({}),[i,d]=A.useState(!0),[a,f]=A.useState(null);return A.useEffect(()=>{if(!e||e.length===0){d(!1);return}let r=!0;async function m(){d(!0),f(null);try{const l=e.map(async w=>{try{const S=I(`/api/states/${w}`),y=(await _(S)).data?.attributes?.access_token||null;return{entityId:w,accessToken:y}}catch(S){return R.error(`Failed to fetch access token for ${w}:`,S),{entityId:w,accessToken:null}}}),h=await Promise.all(l);if(r){const w={};h.forEach(({entityId:S,accessToken:j})=>{j&&(w[S]=j)}),o(w),d(!1)}}catch(l){r&&(R.error("Failed to fetch camera access tokens:",l),f(H(l)),d(!1))}}return m(),()=>{r=!1}},[e?.length,e?.join(",")]),A.useEffect(()=>{if(!e||e.length===0)return;let r=!0,m=null;async function l(){if(r)try{const h=e.map(async S=>{try{const j=I(`/api/states/${S}`),g=(await _(j)).data?.attributes?.access_token||null;return{entityId:S,accessToken:g}}catch(j){return R.debug(`Failed to refresh access token for ${S}:`,j),null}}),w=await Promise.all(h);r&&o(S=>{const j={...S};return w.forEach(y=>{y&&y.accessToken&&(j[y.entityId]=y.accessToken)}),j})}catch{}}return m=setInterval(l,300*1e3),()=>{r=!1,m&&clearInterval(m)}},[e?.length,e?.join(",")]),A.useEffect(()=>{if(!e||e.length===0)return;let r=null,m=[],l=!0,h=null,w=0,S=!1;async function j(){if(S)return;if(r){try{m.forEach(u=>{u&&u()}),m=[],r.close()}catch{}r=null}S=!0;const y=xe(),g=ge||q||"";if(!g){S=!1;return}let c;try{c=he(y,g),l&&f(!1)}catch(u){l&&(R.error("Failed to create WebSocket auth for camera tokens:",u),f(u instanceof Error?u.message:String(u))),S=!1;return}try{r=await pe({auth:c}),r.addEventListener("ready",()=>{l&&(R.debug("WebSocket connection ready for camera tokens"),w=0,f(!1))}),r.addEventListener("disconnected",()=>{if(l&&!S){R.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),h&&clearTimeout(h),r=null,m=[];const u=Math.min(1e3*Math.pow(2,w),3e4);w++,h=setTimeout(()=>{l&&!S&&(R.debug(`Attempting to reconnect WebSocket for camera tokens (attempt ${w})`),j())},u)}});for(const u of e){const s=b=>{if(l){const E=b.variables.trigger.to_state?.attributes?.access_token||null;o(T=>E?{...T,[u]:E}:T)}},x=await r.subscribeMessage(s,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:u}});m.push(x)}S=!1}catch(u){if(S=!1,l){R.error("Failed to setup WebSocket connection for camera tokens:",u),f(u instanceof Error?u.message:String(u));const s=Math.min(1e3*Math.pow(2,w),3e4);w++,h=setTimeout(()=>{l&&j()},s)}}}return j(),()=>{l=!1,h&&clearTimeout(h),m.forEach(y=>{y&&y()}),r&&r.close()}},[e?.length,e?.join(",")]),[n,i,a]},No=(e,n=null)=>{if(!e)return null;let o=`/api/camera_proxy_stream/${e}`;if(n&&(o=`${o}?token=${encodeURIComponent(n)}`),typeof window<"u"&&window.location){const i=window.location.protocol,d=window.location.host;return`${i}//${d}${o}`}return o},Ue=45e3,Oo=D.div`
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
`,_o=()=>{if(!pt)return null;const[e,n]=A.useState(!1),[o]=Ao(),[i,d]=A.useState(void 0),[a,f]=A.useState(100),[r,m]=A.useState("0"),l=A.useMemo(()=>te.map(y=>y.entity_id).filter(Boolean),[te]),[h]=Do(l);A.useEffect(()=>{if(o==="off"&&e){const y=window.setTimeout(()=>{n(!1),d(void 0)},Ue);return d(y),m(Ue+"ms"),f(0),()=>{y&&window.clearTimeout(y)}}else o==="on"&&(m(0),f(100),n(!0))},[o,e]),A.useEffect(()=>{o==="on"&&i!==void 0&&(window.clearTimeout(i),m(0),f(100),d(void 0))},[i,o]);const[w,S]=A.useState(null),j=()=>{w===null?S("confirm"):w==="confirm"&&(S("opening"),To(),setTimeout(()=>S(null),2e3))};return A.useEffect(()=>{if(w==="confirm"){const y=setTimeout(()=>{S(null)},3e3);return()=>{clearTimeout(y)}}},[w]),A.useEffect(()=>{e||S(null)},[e]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>n(y=>!y),children:"CCTV"}),t.jsx(me,{visible:e,onClick:j,onClose:()=>{n(!1),S(null)},fullsize:!0,children:t.jsxs(Oo,{onClick:j,children:[t.jsx(wt,{completed:a,height:10,bgColor:i===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:r,transitionTimingFunction:"linear"}),t.jsx("div",{className:"grid",children:(()=>{if(te.length===0)return null;const y=te.map(b=>({orientation:b.orientation||"landscape"})),g=window.innerWidth,c=window.innerHeight-10,u=xt(y,g,c),s={portrait:te.filter(b=>(b.orientation||"landscape")==="portrait"),landscape:te.filter(b=>(b.orientation||"landscape")==="landscape"),wide:te.filter(b=>b.orientation==="wide")},x={portrait:0,landscape:0,wide:0};return u.videos.map((b,p)=>{const E=b.orientation,T=x[E],k=s[E][T];if(!k)return null;x[E]++;const v=h[k.entity_id]||null,L=No(k.entity_id,v);return L?t.jsxs("div",{className:"video-container",style:{left:`${b.x}px`,top:`${b.y}px`,width:`${b.width}px`,height:`${b.height}px`},children:[t.jsx("img",{src:L,className:E,alt:"Camera stream"}),t.jsx("div",{className:"video-overlay",onClick:()=>j()})]},`${E}-${T}-${p}`):null})})()}),w==="confirm"&&t.jsx("div",{className:"open-door confirm",children:"Haustür öffnen?"}),w==="opening"&&t.jsx("div",{className:"open-door opening",children:"Öffne die Tür!"})]})})]})},Mo=D.div`
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

`,$o=({nextWeek:e,previousWeek:n,startWeekWithToday:o})=>t.jsxs(Mo,{children:[t.jsxs("div",{className:"buttons",children:[t.jsx(B,{path:Ft,size:"32px",color:"#ffffff",onClick:n}),t.jsx(B,{path:Vt,size:"32px",color:"#ffffff",onClick:e}),t.jsx("button",{onClick:o,children:"Today"}),t.jsx(_o,{})]}),t.jsx(jo,{}),t.jsx(B,{path:zt,size:"32px",color:"#ffffff",className:V("indicator")})]}),Wo=C.memo($o),Po=6e4,Ie=(e=Po,n=void 0)=>{const[o,i]=A.useState(!0);return A.useEffect(()=>{const d=setInterval(()=>{i(a=>!a)},e);return()=>{clearInterval(d)}},[e,n]),o},Io=e=>I(`/api/calendars/${e}`),Fo=(e,n)=>`${Io(e)}?${ro.stringify(n)}`,Vo={mdiDelete:Ht,mdiCake:Bt},zo=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Vo[n]||void 0},Bo=go.map(e=>({name:e.name,icon:zo(e.icon)})),Ho=(e,n,o,i)=>_(Fo(e.name,{start:n.toISO(),end:o.toISO()}),{timeout:1e4}).then(d=>{!d.data||!Array.isArray(d.data)||d.data.forEach(a=>{const f="dateTime"in a.start?F.fromISO(a.start.dateTime):F.fromSQL(a.start.date);let r;"dateTime"in a.end?r=Math.floor(F.fromISO(a.end.dateTime).diff(n,"days").as("days")):r=Math.floor(F.fromSQL(a.end.date).diff(n,"days").as("days"))-1;const m=Math.floor(f.diff(n,"days").as("days"));r>=i.length&&(r=i.length-1);const l="dateTime"in a.start?"events":"allDay";if(m>=0&&m<i.length)for(let h=m;h<=r;h++)i[h][l]=[...i[h][l],{...a,icon:e.icon}]})}).catch(d=>{throw d}),Ge=new Map,Uo=300*1e3,Go=e=>e.toISODate(),Yo=(e,n,o,i,d,a)=>{const f=[0,1,2,3,4,5].map(w=>e.plus({days:w}).startOf("day"));f[6]=e.plus({days:6}).endOf("day");const r=Go(e),m=Ge.get(r);if(m&&Date.now()-m.timestamp<Uo){o(m.data);return}const l=f.map(w=>({date:w,allDay:[],events:[]})),h=new AbortController;d.current&&d.current.abort(),d.current=h;try{i(!0);const w=Bo.map(S=>Ho(S,f[0],f[6],l));Promise.all(w).then(()=>{h.signal.aborted||(Ge.set(r,{data:l,timestamp:Date.now()}),o(l),a(!1))}).catch(S=>{h.signal.aborted||a(H(S))}).finally(()=>{h.signal.aborted||i(!1)})}catch(w){h.signal.aborted||(a(H(w)),i(!1))}},Ye=[],qo=e=>{const[n,o]=A.useState(Ye),[i,d]=A.useState(!1),[a,f]=A.useState(!1),r=Ie(6e4,"Calendar"),[m,l]=A.useState(null),h=C.useRef(null);return A.useEffect(()=>(e!==void 0&&((m===null||!m.equals(e))&&(o(Ye),l(e)),Yo(e,n,o,d,h,f)),()=>{h.current&&h.current.abort()}),[e,r]),[n,a]};function ue(e){const[n,o]=A.useState(!1);function i({key:a}){a===e&&o(!0)}const d=({key:a})=>{a===e&&o(!1)};return A.useEffect(()=>(window.addEventListener("keydown",i),window.addEventListener("keyup",d),()=>{window.removeEventListener("keydown",i),window.removeEventListener("keyup",d)}),[e]),n}const Ko=()=>{let e=new Date,o=(e.getDay()+6)%7,i=new Date(e.setDate(e.getDate()-o));return F.fromJSDate(i)},Xo=e=>{const n=()=>e(r=>r.plus({days:7})),o=ue("ArrowRight");A.useEffect(()=>{o&&n()},[o]);const i=()=>e(r=>r.minus({days:7})),d=ue("ArrowLeft");A.useEffect(()=>{d&&i()},[d]);const a=()=>e(Ko()),f=ue("t");return A.useEffect(()=>{f&&a()},[f]),{nextWeek:n,previousWeek:i,startWeekWithToday:a}},Jo=e=>{const[n,o]=C.useState(0),[i,d]=C.useState(0),a=50;return{onTouchStart:l=>{d(0),o(l.targetTouches[0].clientX)},onTouchMove:l=>d(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!i)return;const l=n-i,h=l>a,w=l<-a;h&&e.onSwipedLeft(),w&&e.onSwipedRight()}}},qe=e=>F.fromISO(e).toLocaleString(F.TIME_24_SIMPLE),Re=e=>e.toFormat("c")>=6,De=e=>e.hasSame(F.now(),"day"),Qo=D.div`
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
`,Zo=()=>{const[e,n]=A.useState(void 0),[o,i]=qo(e),{nextWeek:d,previousWeek:a,startWeekWithToday:f}=Xo(n);A.useEffect(()=>{f()},[]);const r=Jo({onSwipedLeft:()=>d(),onSwipedRight:()=>a()}),m=C.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=C.useMemo(()=>o.slice(0,7),[o]);return t.jsxs(Qo,{...r,children:[t.jsx(Wo,{nextWeek:d,previousWeek:a,startWeekWithToday:f}),t.jsxs("div",{className:"schedule",children:[l.map((h,w)=>t.jsx("div",{className:V({weekend:Re(h.date),today:De(h.date)},"caption"),children:t.jsx("h2",{children:h.date.toLocaleString(m)})},w)),l.map((h,w)=>t.jsx("div",{className:V("allDayRow",{weekend:Re(h.date),today:De(h.date)}),children:h.allDay.map((S,j)=>t.jsx("div",{className:"allDayEvent",children:S.summary},j))},w)),l.map((h,w)=>t.jsx("div",{className:V("eventRow",{weekend:Re(h.date),today:De(h.date)}),children:h.events.map((S,j)=>t.jsxs("div",{className:"event",children:[t.jsx("div",{children:S.summary}),t.jsxs("h3",{children:[S.icon&&t.jsx(B,{path:S.icon,size:"1rem",color:"#ffffff"}),qe(S.start.dateTime)," - ",qe(S.end.dateTime)]})]},j))},w))]}),o.length===0&&t.jsx("div",{className:"loading",children:i!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),t.jsx("div",{children:i instanceof Error?i.message:String(i)})]}):t.jsx(it,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),i!==!1&&o.length>0&&t.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:t.jsxs("div",{children:["Warnung: ",i instanceof Error?i.message:String(i)]})})]})},Te={"clear-day":{icon:Ct,label:"Klar",color:"#eeeef5"},"clear-night":{icon:Lt,label:"Klar",color:"#eeeef5"},rain:{icon:vt,label:"Regen",color:"#80a5d6"},snow:{icon:kt,label:"Schnee",color:"#8c82ce"},sleet:{icon:Tt,label:"Graupel",color:"#aba4db"},wind:{icon:At,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:jt,label:"Neblig",color:"#d5dae2"},cloudy:{icon:St,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:Et,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:bt,label:"Teils bewölkt",color:"#d5dae2"}},en=()=>`./forecast/${st}/${at},${ct}?&units=si&exclude=minutely`,tn=e=>{const[n,o]=A.useState([]),[i,d]=A.useState(!1),a=Ie(6e4*10,"Weather"),f=dt&&st&&at&&ct;return A.useEffect(()=>{f&&_(en()).then(r=>{o(r.data),d(!1)}).catch(r=>{d(H(r))}).finally(()=>{})},[a,e,f]),[n,i]},on=Dt(Nt),Ke=D.div`

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
`,Xe=C.memo(({data:e,daily:n=!1})=>t.jsxs("div",{children:[t.jsxs("div",{children:[!n&&F.fromSeconds(e.time).toLocaleString(F.TIME_24_SIMPLE),n&&F.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),t.jsx("div",{children:t.jsx(Me,{icon:e.icon})}),t.jsx("div",{children:t.jsxs("strong",{children:[!n&&t.jsxs(t.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&t.jsxs(t.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),t.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),t.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),nn=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:Te[n.icon]?.color||"#ffffff",text:Te[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),Me=({icon:e})=>{const n=Te[e];return t.jsx(n.icon,{size:60,color:"#ffffff"})},rn=()=>{if(!dt)return null;const[e,n]=tn(),[o,i]=A.useState(!1),d=ue("w"),a=A.useRef(),f=C.useCallback(()=>i(w=>!w),[]),r=C.useCallback(()=>i(!0),[]),m=C.useMemo(()=>nn(e),[e]),l=C.useMemo(()=>[3,6,9,12],[]),h=C.useMemo(()=>[1,2,3,4,5,6,7],[]);return A.useEffect(()=>{if(!o||!a.current||!e||!e.hourly||m.length===0)return;const w={timezone:"Europe/Berlin"},S=document.createElement("div");return a.current.textContent="",a.current.appendChild(S),co(S,m,w),()=>{a.current&&(a.current.textContent="")}},[o,m]),A.useEffect(()=>{d&&f()},[d]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?n!==!1?t.jsx(Ke,{children:t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]})}):"":t.jsxs(Ke,{children:[t.jsxs("div",{onClick:r,children:[t.jsxs("div",{className:"headline",children:[t.jsx(Me,{icon:e.currently.icon}),t.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),t.jsx("div",{className:"forecast",children:l.map((w,S)=>t.jsx(Xe,{data:e.hourly.data[w]},S))})]}),t.jsx(me,{visible:o,onClick:f,children:t.jsxs("div",{className:"full-weather",children:[n!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]}),t.jsxs("div",{className:"detail-header",children:[t.jsx("div",{children:t.jsxs("div",{className:"headline",children:[t.jsx(Me,{icon:e.daily.data[0].icon}),t.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",t.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),t.jsx("h3",{children:Te[e.daily.data[0].icon].label})]}),t.jsx("div",{className:"values",children:t.jsxs("div",{className:"table",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]})]})}),t.jsx("h3",{children:"Die nächsten 24 Stunden"}),t.jsx("div",{ref:a}),t.jsx("h3",{children:"Die nächste Woche"}),t.jsx("div",{className:"forecast",children:h.map((w,S)=>t.jsx(Xe,{data:e.daily.data[w],daily:!0},S))}),t.jsxs("div",{className:"info",children:["Aktualisiert ",t.jsx(Rt,{date:F.fromSeconds(e.currently.time).toJSDate(),formatter:on})]})]})})]})},sn=C.memo(rn);async function an(e){if(!Oe)throw new Error("GEOFOX_SECRET is not configured");return so.stringify(ao(JSON.stringify(e),Oe))}const cn="AK Wandsbek",ln="Hamburg",dn="Master:62016",fn="STATION",un={x:10.091341,y:53.568702},hn={name:cn,city:ln,id:dn,type:fn,coordinate:un},Se={departureList:"departureList",checkName:"checkName"},pn=async(e,n)=>_({method:"post",url:`./gti/public/${e}`,data:n,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":lt,"geofox-auth-signature":await an(n),Authorization:void 0}}),Je=(e,n)=>e.realtimeOffset-n.realtimeOffset,mn=e=>{const n=e.departures.map(o=>({line:o.line.name,direction:o.line.direction,timeOffset:o.timeOffset,delay:o.delay?o.delay:"0",directionId:o.directionId,realtimeOffset:o.timeOffset+(o.delay?o.delay:0)/60}));return{from:n.filter(o=>o.directionId===1).slice(0,3).sort(Je),to:n.filter(o=>o.directionId===6).slice(0,3).sort(Je)}},gn=e=>{const[n,o]=A.useState([]),[i,d]=A.useState(!1),a=Ie(6e4),f=ft&&lt&&Oe;return A.useEffect(()=>{if(!f||!(e in Se))return;let r={version:51};switch(e){case Se.checkName:r={...r,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case Se.departureList:const m=F.now();r={...r,station:hn,time:{date:m.toFormat("dd.MM.yyyy"),time:m.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:r=void 0}pn(e,r).then(m=>{o(mn(m.data)),d(!1)}).catch(m=>{d(H(m))})},[e,a,f]),[n,i]},xn=D.div`
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
`,Qe=C.memo(({line:e,direction:n,realtimeOffset:o})=>t.jsxs("div",{className:"departure",children:[t.jsx("div",{children:t.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),t.jsx("div",{children:o===0?"Jetzt":t.jsxs(t.Fragment,{children:["in ",o," '"]})})]})),yn=()=>{if(!ft)return null;const[e,n]=gn(Se.departureList);return t.jsx(xn,{children:n!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"→ Wandsbek"}),e.to?.map((o,i)=>t.jsx(Qe,{line:o.line,direction:o.direction,realtimeOffset:o.realtimeOffset},i)),t.jsx("h3",{children:"→ Stadtauswärts"}),e.from?.map((o,i)=>t.jsx(Qe,{line:o.line,direction:o.direction,realtimeOffset:o.realtimeOffset},i))]})})},wn=C.memo(yn),bn=()=>{const[e,n]=A.useState({preclimateStatus:!1,chargingState:!1,stateOfCharge:0}),[o,i]=A.useState(!1),d=gt&&(ne||ie||re);return A.useEffect(()=>{if(!d)return;(async()=>{const f=[];ne&&f.push(_(I(`/api/states/${ne}`)).then(l=>({type:"preclimateStatus",value:l.data.state==="on"})).catch(l=>({type:"preclimateStatus",error:H(l)}))),ie&&f.push(_(I(`/api/states/${ie}`)).then(l=>({type:"chargingState",value:l.data.state==="on"})).catch(l=>({type:"chargingState",error:H(l)}))),re&&f.push(_(I(`/api/states/${re}`)).then(l=>({type:"stateOfCharge",value:parseFloat(l.data.state)||0})).catch(l=>({type:"stateOfCharge",error:H(l)})));const r=await Promise.all(f);let m=!1;r.forEach(l=>{l.error?m=l.error:n(h=>({...h,[l.type]:l.value}))}),i(m||!1)})()},[d]),A.useEffect(()=>{let a=null,f=[],r=!0,m=null,l=0,h=!1;async function w(){if(!d||h)return;if(a){try{f.forEach(g=>{g&&g()}),f=[],a.close()}catch{}a=null}h=!0;const S=xe(),j=ge||q||"";if(!j){h=!1;return}let y;try{y=he(S,j),r&&i(!1)}catch(g){r&&(R.error("Failed to create WebSocket auth:",g),i(g instanceof Error?g.message:String(g))),h=!1;return}try{a=await pe({auth:y}),a.addEventListener("ready",()=>{r&&(R.debug("WebSocket connection ready for EV entities"),l=0,i(!1))}),a.addEventListener("disconnected",()=>{if(r&&!h){R.debug("WebSocket disconnected for EV entities, will attempt to reconnect"),m&&clearTimeout(m),a=null,f=[];const u=Math.min(1e3*Math.pow(2,l),3e4);l++,m=setTimeout(()=>{r&&!h&&(R.debug(`Attempting to reconnect WebSocket for EV entities (attempt ${l})`),w())},u)}});const g=u=>{if(r){const s=u.variables.trigger.to_state.entity_id,x=u.variables.trigger.to_state.state;n(b=>{const p={...b};return s===ne?p.preclimateStatus=x==="on":s===ie?p.chargingState=x==="on":s===re&&(p.stateOfCharge=parseFloat(x)||0),p})}},c=[];ne&&c.push(ne),ie&&c.push(ie),re&&c.push(re);for(const u of c){const s=await a.subscribeMessage(g,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:u}});f.push(s)}h=!1}catch(g){if(h=!1,r){R.error("Failed to setup WebSocket connection:",g),i(g instanceof Error?g.message:String(g));const c=Math.min(1e3*Math.pow(2,l),3e4);l++,m=setTimeout(()=>{r&&w()},c)}}}return w(),()=>{r=!1,m&&clearTimeout(m),f.forEach(S=>{S&&S()}),a&&a.close()}},[d]),[e,o]},En=()=>{ze&&_.post(I("/api/services/button/press"),{entity_id:ze}).catch(e=>{R.error("Failed to start preclimate:",e)})},Sn=()=>{Be&&_.post(I("/api/services/button/press"),{entity_id:Be}).catch(e=>{R.error("Failed to stop preclimate:",e)})},jn=D.div`
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
`,An=(e,n)=>n?Gt:e>=80?Yt:e>=50?qt:e>=20?Kt:Xt,Tn=e=>e>=90?"#17e146":e>=40?"#ff9800":"#f85a5a",kn=()=>{if(!gt)return null;const[e,n]=bn(),{preclimateStatus:o,chargingState:i,stateOfCharge:d}=e,[a,f]=C.useState(!1),[r,m]=C.useState(null),[l,h]=C.useState(!1),[w,S]=C.useState(!1),[j,y]=C.useState(0),g=C.useRef(null),c=C.useRef(null),u=C.useRef(o),s=C.useRef(null);C.useEffect(()=>{u.current!==o&&(a&&s.current!==null&&o===(r==="start")&&(y(r==="start"?360:0),S(!0),setTimeout(()=>{f(!1),m(null),S(!1),y(0),s.current=null,h(!1)},300),g.current&&(clearTimeout(g.current),g.current=null)),u.current=o)},[o,a,r]),C.useEffect(()=>{if(!a||w){c.current&&(cancelAnimationFrame(c.current),c.current=null);return}const L=s.current||Date.now(),N=1e4,P=r==="stop",M=()=>{const z=Date.now()-L,W=Math.min(z/N,1);y(P?360*(1-W):360*W),W<1&&!w&&(c.current=requestAnimationFrame(M))};return c.current=requestAnimationFrame(M),()=>{c.current&&(cancelAnimationFrame(c.current),c.current=null)}},[a,w,r]),C.useEffect(()=>()=>{g.current&&clearTimeout(g.current),c.current&&cancelAnimationFrame(c.current)},[]);const x=C.useCallback(()=>{if(n!==!1||a)return;const L=!o,N=L?"start":"stop";f(!0),m(N),S(!1),h(!1),y(0),s.current=Date.now(),u.current=o,L?En():Sn(),g.current=setTimeout(()=>{a&&(h(!0),setTimeout(()=>{f(!1),m(null),S(!1),y(0),h(!1),s.current=null},500))},15e3)},[o,n,a]),b=An(d||0,i),p=Tn(d||0),E=Math.round(d||0),T=a?r==="start":o,k=r==="start"?"#17e146":"#f85a5a",v=r==="start"?"clockwise":"counterclockwise";return t.jsxs(jn,{className:V({disabled:n!==!1}),children:[t.jsxs("h2",{children:["Auto",n!==!1?t.jsxs("div",{className:"battery-info",children:[t.jsx(B,{path:We,size:"1.2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs("div",{className:"battery-info",children:[t.jsxs("span",{className:"charge-percentage",children:[E,"%"]}),t.jsx(B,{path:b,size:"1.2rem",color:p})]})]}),n===!1&&t.jsxs("div",{className:"preclimate-button-wrapper",children:[a&&t.jsx("div",{className:V("progress-ring",v,{complete:w}),style:{"--progress-color":k,"--progress-angle":`${j}deg`,"--progress-gradient":r==="stop"?`conic-gradient(from -90deg, ${k} 0deg, ${k} ${j}deg, transparent ${j}deg, transparent 360deg)`:`conic-gradient(from -90deg, ${k} 0deg, ${k} ${j}deg, transparent ${j}deg, transparent 360deg)`}}),t.jsxs("button",{className:V("preclimate-button",{spinning:T&&!a,shaking:l}),onClick:x,disabled:n!==!1||a,children:[t.jsx(B,{path:Ut,size:"2rem",color:T?"#ff9800":"#ffffff"}),t.jsx("span",{children:T?"Stop":"Start"})]})]})]})},vn=C.memo(kn),Ln=()=>{const[e,n]=A.useState("closed"),[o,i]=A.useState(!1),d=ut&&K,a=K?I(`/api/states/${K}`):null;return A.useEffect(()=>{!d||!a||_(a).then(f=>{n(f.data.state),i(!1)}).catch(f=>{i(H(f))})},[d,a]),A.useEffect(()=>{let f=null,r=null,m=!0,l=null,h=0,w=!1;async function S(){if(!d||!K||w)return;if(f){try{r&&(r(),r=null),f.close()}catch{}f=null}w=!0;const j=xe(),y=ge||q||"";if(!y){w=!1;return}let g;try{g=he(j,y),m&&i(!1)}catch(c){m&&(R.error("Failed to create WebSocket auth:",c),i(c instanceof Error?c.message:String(c))),w=!1;return}try{f=await pe({auth:g}),f.addEventListener("ready",()=>{m&&(R.debug("WebSocket connection ready for garage door"),h=0,i(!1))}),f.addEventListener("disconnected",()=>{if(m&&!w){R.debug("WebSocket disconnected for garage door, will attempt to reconnect"),l&&clearTimeout(l),f=null,r=null;const u=Math.min(1e3*Math.pow(2,h),3e4);h++,l=setTimeout(()=>{m&&!w&&(R.debug(`Attempting to reconnect WebSocket for garage door (attempt ${h})`),S())},u)}});const c=u=>{m&&n(u.variables.trigger.to_state.state)};r=await f.subscribeMessage(c,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:K}}),w=!1}catch(c){if(w=!1,m){R.error("Failed to setup WebSocket connection:",c),i(c instanceof Error?c.message:String(c));const u=Math.min(1e3*Math.pow(2,h),3e4);h++,l=setTimeout(()=>{m&&S()},u)}}}return S(),()=>{m=!1,l&&clearTimeout(l),r&&r(),f&&f.close()}},[d]),[e,o]},Cn=e=>{if(!K)return;e(!0);const n=setTimeout(()=>e(!1),3e3);_.post(I("/api/services/cover/toggle"),{entity_id:K}).catch(o=>{R.error("Failed to toggle garage door:",o)}).finally(()=>{clearTimeout(n),e(!1)})},Rn=e=>{if(!K)return;e(!0);const n=setTimeout(()=>e(!1),3e3);_.post(I("/api/services/cover/open_cover"),{entity_id:K}).catch(o=>{R.error("Failed to open garage door:",o)}).finally(()=>{clearTimeout(n),e(!1)})},Dn=e=>{if(!K)return;e(!0);const n=setTimeout(()=>e(!1),3e3);_.post(I("/api/services/cover/close_cover"),{entity_id:K}).catch(o=>{R.error("Failed to close garage door:",o)}).finally(()=>{clearTimeout(n),e(!1)})},Nn=D.div`
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
`,yt=D.div`
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
`,$e=e=>({unknown:{label:"In Bewegung oder halb-offen",icon:to},open:{label:"Offen",icon:eo},closed:{label:"Geschlossen",icon:Zt},opening:{label:"Öffnet",icon:Qt},closing:{label:"Schließt",icon:Jt}})[e]||{label:"Unavailable",icon:oo},On=({garageDoor:e,animate:n=!1})=>t.jsxs(yt,{className:V({animate:n}),children:[t.jsx(B,{path:$e(e).icon,size:"2rem",color:"#ffffff"}),t.jsx("span",{children:$e(e).label})]}),_n=e=>Ot.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return $e(n).label}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),Mn=()=>{if(!ut)return null;const[e,n]=Ln(),[o,i]=A.useState(void 0),[d,a]=A.useState(!1),[f,r]=A.useState(!1);A.useEffect(()=>{if(e==="unknown"||e==="opening"||e==="closing"){if(!o){const S=new Promise(j=>{i({resolve:j})});_n(S)}}else o&&(o.resolve(e),i(void 0))},[e]);const m=ue("g");A.useEffect(()=>{m&&n===!1&&Cn(a)},[m,n]);const l=C.useCallback(w=>{if(n===!1)switch(r(!1),w){case"open":Rn(a);break;case"close":Dn(a);break}},[a,n]),h=C.useCallback(()=>{n===!1&&r(!0)},[n]);return t.jsxs(Nn,{className:V({disabled:n!==!1}),children:[t.jsx("h2",{children:"Garage"}),t.jsx("div",{className:"status",onClick:h,children:n!==!1?t.jsxs(yt,{children:[t.jsx(B,{path:We,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsx(On,{garageDoor:e,animate:d})}),t.jsx(me,{visible:f&&n===!1,onClick:()=>r(!1),children:t.jsxs("div",{className:"controls",children:[t.jsx("h2",{children:"Garagentor"}),t.jsx("div",{onClick:()=>l("open"),children:"Öffnen"}),t.jsx("div",{onClick:()=>l("close"),children:"Schließen"})]})})]})},$n=C.memo(Mn),Wn=e=>e?I(`/api/states/${e}`):null,Y={done:{label:"Fertig",animate:!1,icon:io},off:{label:"Aus",animate:!1,icon:no},standby:{label:"Standby",animate:!1,icon:Fe},running:{label:"Läuft …",animate:!0,icon:Fe}},Pn={off:0,standby:2,running:16,done:256},In=()=>{const n=(Array.isArray(Ae)?Ae:[]).map((l,h)=>{const[w,S]=Fn(l.entity_id);return{state:w,error:S,name:l.name}}),[o,i]=A.useState(Y.off),[d,a]=A.useState(!1),f=n.map(l=>l.state),r=n.map(l=>l.error);A.useEffect(()=>{const l=r.some(h=>h!==!1);a(l&&r.find(h=>h!==!1)||!1)},[r]),A.useEffect(()=>{const l=f.reduce((h,w)=>h+(Pn[w]||0),0);l===0?i(Y.off):l<16?i(Y.standby):l<256?i(Y.running):l%256===0?i(Y.done):l%256%16===0?i(Y.running):l%256%2===0?i(Y.done):i(Y.running)},[f]);const m=n.map(l=>({label:l.name,state:l.state}));return[o,m,d]},Fn=e=>{const[n,o]=A.useState("off"),[i,d]=A.useState(!1),a=ht&&e,f=Wn(e);return A.useEffect(()=>{!a||!f||_(f).then(r=>{o(r.data.state),d(!1)}).catch(r=>{d(H(r))})},[e,a,f]),A.useEffect(()=>{let r=null,m=null,l=!0,h=null,w=0,S=!1;async function j(){if(!a||!e||S)return;if(r){try{m&&(m(),m=null),r.close()}catch{}r=null}S=!0;const y=xe(),g=ge||q||"";if(!g){S=!1;return}try{const c=he(y,g);r=await pe({auth:c}),r.addEventListener("ready",()=>{l&&(R.debug(`WebSocket connection ready for ${e}`),w=0,d(!1))}),r.addEventListener("disconnected",()=>{if(l&&!S){R.debug(`WebSocket disconnected for ${e}, will attempt to reconnect`),h&&clearTimeout(h),r=null,m=null;const s=Math.min(1e3*Math.pow(2,w),3e4);w++,h=setTimeout(()=>{l&&!S&&(R.debug(`Attempting to reconnect WebSocket for ${e} (attempt ${w})`),j())},s)}});const u=s=>{l&&o(s.variables.trigger.to_state.state)};m=await r.subscribeMessage(u,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}}),S=!1}catch(c){if(S=!1,l){R.error(`Failed to setup WebSocket connection for ${e}:`,c),d(c instanceof Error?c.message:String(c));const u=Math.min(1e3*Math.pow(2,w),3e4);w++,h=setTimeout(()=>{l&&j()},u)}}}return j(),()=>{l=!1,h&&clearTimeout(h),m&&m(),r&&r.close()}},[e,a]),[n,i]},Vn=D.div`
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
`,zn=()=>{if(!ht)return null;const[e,n,o]=In(),[i,d]=A.useState(!1),a=C.useCallback(()=>{o===!1&&d(!0)},[o]),f=C.useCallback(()=>d(!1),[]);return t.jsxs(Vn,{className:V({disabled:o!==!1}),children:[t.jsx("h2",{children:"Wäsche"}),t.jsx("div",{className:"status",onClick:a,children:o!==!1?t.jsxs(t.Fragment,{children:[t.jsx(B,{path:We,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:V({animate:e.animate}),children:t.jsx(B,{path:e.icon,size:"2rem",color:"#ffffff"})}),t.jsx("span",{children:e.label})]})}),t.jsx(me,{visible:i&&o===!1,onClick:f,children:t.jsxs("div",{className:"states",children:[t.jsx("h2",{children:"Wäsche"}),n.map((r,m)=>t.jsxs("div",{children:[t.jsx("div",{className:"subtitle",children:r.label}),t.jsx("div",{className:V({animate:Y[r.state].animate}),children:t.jsx(B,{path:Y[r.state].icon,size:2})}),t.jsx("div",{children:Y[r.state].label})]},m))]})})]})},Bn=C.memo(zn),Hn=D.div`
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
`,Un=()=>t.jsxs(Hn,{children:[t.jsxs("div",{className:"top-content",children:[t.jsx(sn,{}),t.jsx(wn,{}),t.jsx(vn,{})]}),t.jsxs("div",{className:"two-cols",children:[t.jsx($n,{}),t.jsx(Bn,{})]})]}),Gn=C.memo(Un),Ze=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],Yn=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],je={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},qn={landscape:"L",portrait:"P",wide:"W"},Kn=D.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Xn=D.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Jn=D.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,se=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ae=D.label`
  font-size: 0.9rem;
  color: #cccccc;
`,et=D.select`
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
`,tt=D.input`
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
`,Qn=D.button`
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
`,ot=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Zn=D.button`
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
`,ei=D.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,ti=D.div`
  position: absolute;
  background-color: ${e=>je[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,oi=D.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,ni=D.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,ii=D.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,ye=D.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,we=D.div`
  font-size: 0.85rem;
  color: #cccccc;
`,be=D.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,ri=D.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,si=D.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;D.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;const Ne=D.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?je[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?je[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?je[e.orientation]:"#4a4a4a"};
  }
`,nt=()=>{const[e,n]=C.useState(1920),[o,i]=C.useState(1080),[d,a]=C.useState("Full HD"),[f,r]=C.useState(""),[m,l]=C.useState(""),[h,w]=C.useState([{orientation:"landscape"}]),[S,j]=C.useState(null),y=C.useMemo(()=>xt(h,e,o),[h,e,o]),g=p=>{const E=Ze.find(T=>T.name===p);E&&E.width&&E.height?(n(E.width),i(E.height),a(p),r(""),l("")):p==="Custom"&&a("Custom")},c=()=>{const p=parseInt(f),E=parseInt(m);p>0&&E>0&&(n(p),i(E))},u=p=>{w(p.videos),j(p.name)},s=p=>{const E=[];for(let T=0;T<p;T++)E.push(h[T]||{orientation:"landscape"});w(E),j(null)},x=(p,E)=>{const T=[...h];T[p]={orientation:E},w(T),j(null)},b=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/o));return t.jsxs(Kn,{children:[t.jsx(Xn,{children:"Video Tiling Algorithm Demo"}),t.jsxs(Jn,{children:[t.jsxs(se,{children:[t.jsx(ae,{children:"Screen Size Preset"}),t.jsx(et,{value:d,onChange:p=>g(p.target.value),children:Ze.map(p=>t.jsx("option",{value:p.name,children:p.name},p.name))})]}),d==="Custom"&&t.jsxs(t.Fragment,{children:[t.jsxs(se,{children:[t.jsx(ae,{children:"Custom Width"}),t.jsx(tt,{type:"number",value:f,onChange:p=>r(p.target.value),placeholder:"Width",min:"100"})]}),t.jsxs(se,{children:[t.jsx(ae,{children:"Custom Height"}),t.jsx(tt,{type:"number",value:m,onChange:p=>l(p.target.value),placeholder:"Height",min:"100"})]}),t.jsxs(se,{children:[t.jsx(ae,{children:" "}),t.jsx(Qn,{onClick:c,children:"Apply Custom Size"})]})]}),t.jsxs(se,{children:[t.jsx(ae,{children:"Number of Videos"}),t.jsxs(et,{value:h.length,onChange:p=>s(parseInt(p.target.value)),children:[t.jsx("option",{value:"1",children:"1 Video"}),t.jsx("option",{value:"2",children:"2 Videos"}),t.jsx("option",{value:"3",children:"3 Videos"}),t.jsx("option",{value:"4",children:"4 Videos"})]})]}),h.map((p,E)=>t.jsxs(se,{children:[t.jsxs(ae,{children:["Video ",E+1," Orientation"]}),t.jsxs(ot,{children:[t.jsx(Ne,{active:p.orientation==="landscape",orientation:"landscape",onClick:()=>x(E,"landscape"),children:"Landscape"}),t.jsx(Ne,{active:p.orientation==="portrait",orientation:"portrait",onClick:()=>x(E,"portrait"),children:"Portrait"}),t.jsx(Ne,{active:p.orientation==="wide",orientation:"wide",onClick:()=>x(E,"wide"),children:"Wide"})]})]},E))]}),t.jsxs(ri,{children:[t.jsx(si,{children:"Test Scenarios"}),t.jsx(ot,{children:Yn.map(p=>t.jsx(Zn,{active:S===p.name,onClick:()=>u(p),children:p.name},p.name))})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:t.jsx(ei,{style:{width:`${e*b}px`,height:`${o*b}px`},children:y.videos.map((p,E)=>t.jsxs(ti,{orientation:p.orientation,style:{left:`${p.x*b}px`,top:`${p.y*b}px`,width:`${p.width*b}px`,height:`${p.height*b}px`},children:[t.jsxs(oi,{children:[qn[p.orientation]," ",E+1]}),t.jsxs(ni,{children:[Math.round(p.width)," × ",Math.round(p.height)]})]},E))})}),t.jsxs(ii,{children:[t.jsxs(ye,{children:[t.jsx(we,{children:"Canvas Size"}),t.jsxs(be,{children:[e," × ",o]})]}),t.jsxs(ye,{children:[t.jsx(we,{children:"Total Area Used"}),t.jsxs(be,{children:[Math.round(y.totalArea).toLocaleString()," px²"]})]}),t.jsxs(ye,{children:[t.jsx(we,{children:"Efficiency"}),t.jsxs(be,{children:[y.efficiency.toFixed(2),"%"]})]}),t.jsxs(ye,{children:[t.jsx(we,{children:"Display Scale"}),t.jsxs(be,{children:[(b*100).toFixed(1),"%"]})]})]})]})},ai=()=>{function e(o,i){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(i))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[a,f]=i.split(":").map(Number),r=new Date;let m=new Date(r.getFullYear(),r.getMonth(),r.getDate());m.setHours(a,f,0,0),m<=r&&m.setDate(m.getDate()+1);const l=m.getTime()-r.getTime();return setTimeout(o,l)}const n=()=>{window.location.reload(!0)};A.useLayoutEffect(()=>{const o=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{o.forEach(i=>{i&&clearTimeout(i)})}},[])},ci=D.div`
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
`;class ke extends A.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,o){this.setState({error:n,errorInfo:o}),R.error("ErrorBoundary caught an error:",n,o)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?t.jsxs(ci,{children:[t.jsx("h2",{children:"Something went wrong"}),t.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,t.jsxs("div",{children:[t.jsx("button",{onClick:this.handleReset,children:"Try Again"}),t.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const li=_t`
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
`,di=D.div`
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
`;function fi(){return ai(),t.jsxs(di,{children:[t.jsx(li,{}),t.jsxs("div",{className:"main",children:[t.jsx(ke,{children:t.jsx(Zo,{})}),t.jsx(ke,{children:t.jsx(Gn,{})})]}),t.jsx($t,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function ui(){return t.jsx(ke,{children:t.jsxs(Mt,{children:[t.jsx(Le,{path:"/demo",element:t.jsx(nt,{})}),t.jsx(Le,{path:"/tiling-demo",element:t.jsx(nt,{})}),t.jsx(Le,{path:"*",element:t.jsx(fi,{})})]})})}const hi=Wt.createRoot(document.getElementById("root"));hi.render(t.jsx(A.StrictMode,{children:t.jsx(ke,{children:t.jsx(Pt,{children:t.jsx(ui,{})})})}));
