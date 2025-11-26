import{d as b,j as t,I as k,R as d,l as le,r as p,P as De,W as Ce,b as Ne,e as Le,f as Re,h as _e,i as Oe,k as Ie,m as We,n as $e,o as Me,T as Fe,p as He,s as Be,y as Pe,q as ze,L as Ge,t as Ue}from"./react-vendor-F7aLjgMw.js";import{D as y}from"./date-vendor-BDx6lZXm.js";import{f as j}from"./vendor-CTb7xO-V.js";import{m as Ve,a as Ye,b as Ke,c as qe,d as Je,e as Xe,f as de,g as Ze,h as Qe,i as et,j as tt,k as nt,l as rt,n as X,o as st,p as it}from"./ui-vendor-DhGbN51c.js";import{a as w,q as at,B as ot,h as ct}from"./utils-vendor-DGVTXAQf.js";import{c as fe,a as ue}from"./ha-vendor-CoU0AojH.js";import{t as lt}from"./chart-vendor-ClWajKr-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const dt=b.div`
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
  visibility: hidden;
  z-index: 10;
  
  &.visible {
    visibility: visible;
  }
  
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
    z-index: 1;
    background-color: rgba(0,0,0,.6);
    
    svg {
      color: white;
    }
  }
`,I=({visible:e,children:n,onClick:r,fullsize:s=!1})=>t.jsxs(dt,{className:j({visible:e}),onClick:r,children:[t.jsx("div",{className:"close",children:t.jsx(k,{path:Ve,size:2,onClick:r})}),t.jsx("div",{className:j("content",{fullsize:s}),onClick:a=>a.stopPropagation(),children:n})]}),v={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},he=e=>{const n={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1};return e.response?(n.status=e.response.status,n.responseData=e.response.data,n.url=e.config?.url||e.request?.responseURL||"Unknown URL",n.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(n.isNetworkError=!0,n.url=e.config?.url||"Unknown URL",n.message="Network error: No response received from server"):(n.message=e.message||"Request setup error",n.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(n.isTimeoutError=!0,n.message="Request timeout: The request took too long to complete"),n},ft=(e,n="")=>{const r=he(e),s=[];return n&&s.push(`[${n}]`),s.push("Axios API Error:"),s.push(r.message),r.url&&s.push(`URL: ${r.url}`),r.status&&s.push(`Status: ${r.status}`),r.responseData&&s.push("Response:",r.responseData),v.error(...s),r},C=e=>{const n=he(e);return n.isNetworkError?"":n.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":n.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":n.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":n.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":n.status>=500?"Serverfehler: Bitte später erneut versuchen":n.message||"Ein Fehler ist aufgetreten"},ut={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},me=!1,g=(e,n=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[e]!==void 0){const s=window.APP_CONFIG[e];return s==="undefined"||s==="null"?n:s??n}return n}const r=ut[`VITE_${e}`];return e==="HASS_ACCESS_TOKEN"&&r!==void 0?n:r!==void 0?r:n},ht=(e,n=!1)=>{const r=g(e,n);return typeof r=="boolean"?r:typeof r=="string"?r==="true"||r==="1"||r==="yes":!!r},pe=g("HASS_HOST",""),D=g("HASS_ACCESS_TOKEN",""),mt=D&&typeof D=="string"&&D.trim()!==""&&D!=="undefined"&&D!=="null";mt?w.defaults.headers.common.Authorization=`Bearer ${D}`:delete w.defaults.headers.common.Authorization;w.interceptors.response.use(e=>e,e=>{const n=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";return ft(e,n),Promise.reject(e)});const ge=g("WEATHER_API_KEY"),xe=g("WEATHER_LATITUDE"),ye=g("WEATHER_LONGITUDE"),U=g("GEOFOX_SECRET"),ve=g("GEOFOX_USER"),A=g("ENTITY_GARAGE_DOOR"),R=g("ENTITY_DOORBELL"),Z=g("ENTITY_DOORBELL_BUTTON"),V=g("ENTITY_EVERYDAY_CALENDAR"),pt=(()=>{const e=g("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),M=(()=>{const e=g("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),gt=g("GO2RTC_BASE_URL","http://192.168.188.10:1984"),H=(()=>{const e=g("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),L=(e,n)=>g(e,void 0)!==void 0?ht(e,!1):!1,we=L("ENABLE_WEATHER"),be=L("ENABLE_HVV"),je=L("ENABLE_GARAGE"),Ee=L("ENABLE_LAUNDRY",Array.isArray(M)&&M.length>0),Se=L("ENABLE_DOORBELL"),Ae=L("ENABLE_EVERYDAY_CALENDAR"),T=e=>{const n=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const r=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${r}${n}`}return n}},_=V?T(`/api/states/${V}`):null,xt=()=>{const[e,n]=d.useState(null),[r,s]=d.useState(!1),a=Ae&&V;return d.useEffect(()=>{!a||!_||w(_).then(i=>{i.data.attributes.store!==void 0?n(i.data.attributes.store):n([]),s(!1)}).catch(i=>{s(C(i)),n([])})},[a,_]),[e,r]},yt=e=>{_&&w.post(_,{state:new Date,attributes:{store:e}}).catch(n=>{v.error("Failed to store everyday calendar data:",n)})},Q=b.div` 

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
`,vt=({on:e,month:n,day:r})=>{const[s,a]=e,i=s.indexOf(`${n}-${r}`),c=i>-1,o=()=>{a(c?s.toSpliced(i,1):[...s,`${n}-${r}`])};return t.jsx("div",{className:j("dot",{on:c}),onClick:()=>o()})},wt=()=>{if(!Ae)return null;const e=new Date().getFullYear(),n=[];for(let o=1;o<13;o++){const u=new Date(e,o,0).getDate();for(let l=1;l<=u;l++)n.push({month:o,day:l})}const r=Array.from({length:31},(o,u)=>u+1),s=Array.from({length:12},(o,u)=>u+1),a=d.useState(void 0),[i,c]=xt();return d.useEffect(()=>{i!==null&&a[1](i)},[i]),d.useEffect(()=>{a[0]!==void 0&&yt(a[0])},[a[0]]),a[0]!==void 0?t.jsxs(Q,{children:[t.jsx("h2",{children:"Jeden Tag ein bißchen"}),c!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:c instanceof Error?c.message:String(c)})]}),t.jsxs("div",{className:"calendar",children:[r.map((o,u)=>t.jsx("div",{style:{gridArea:`${o+1} / 1 / ${o+1} / 1`},children:o},u)),s.map((o,u)=>t.jsx("div",{style:{gridArea:`1 / ${o+1} / 1 / ${o+1}`},children:o},u)),n.map((o,u)=>t.jsx("div",{style:{gridArea:`${o.day+1} / ${o.month+1} / ${o.day+1} / ${o.month+1}`},children:t.jsx(vt,{on:a,month:o.month,day:o.day})},u))]})]}):t.jsx(Q,{className:"loading",children:c!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:c instanceof Error?c.message:String(c)})]}):t.jsx(le,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},bt=b.div`
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
  }`,jt=()=>{const[e,n]=d.useState(y.now()),[r,s]=d.useState(!1),a=p.useCallback(()=>s(!0),[]),i=p.useCallback(()=>s(!1),[]);return d.useEffect(()=>{const c=setInterval(()=>n(y.now()),1e3);return()=>clearInterval(c)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(bt,{onClick:a,children:[e.toFormat("HH"),t.jsx("span",{children:":"}),e.toFormat("mm")]}),t.jsx(I,{visible:r,onClick:i,fullsize:!0,children:t.jsx(wt,{})})]})},Et=p.memo(jt),B=R?T(`/api/states/${R}`):null,St=()=>{const[e,n]=d.useState("off"),[r,s]=d.useState(!1),a=Se&&R;return d.useEffect(()=>{!a||!B||w(B).then(i=>{n(i.data.state),s(!1)}).catch(i=>{s(C(i))})},[a,B]),d.useEffect(()=>{let i=null,c=!0;async function o(){if(!a||!R)return;let u;try{if(!me){v.debug("Skipping WebSocket connection in production mode (using REST API only)");return}const l=pe||(typeof window<"u"?window.location.origin:""),f=D||"";if(!f){v.debug("Skipping WebSocket connection - no access token (using REST API only)");return}u=fe(l,f),c&&s(!1)}catch(l){c&&(v.error("Failed to create WebSocket auth:",l),s(l instanceof Error?l.message:String(l)));return}try{i=await ue({auth:u});const l=f=>{c&&n(f.variables.trigger.to_state.state)};await i.subscribeMessage(l,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:R}})}catch(l){c&&(v.error("Failed to setup WebSocket connection:",l),s(l instanceof Error?l.message:String(l)))}}return o(),()=>{c=!1,i&&i.close()}},[a]),[e,r]},At=()=>{Z&&w.post(T("/api/services/button/press"),{entity_id:Z}).catch(e=>{v.error("Failed to unlatch front door:",e)})},kt=e=>{if(!e)return"";if(!e.includes("/")&&!e.includes(":"))return e;const n=e.match(/\/([^\/]+?)(?:\/whep)?(?:\?|$)/);return n?n[1]:e.split("?")[0].split("/").filter(Boolean).pop()||e},P=({src:e,show:n,orientation:r="landscape",...s})=>{const a=kt(e),i=`${gt}/stream.html?src=${a}`;return n?t.jsx("iframe",{src:i,className:r,allow:"autoplay; fullscreen",...s}):null},ee=45e3,Tt=b.div`

    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    h3 {
        margin-top: 6px;
    }

    .grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
        flex: 1;
        width: 100%;
        height: 100%;
        min-height: 0;
        overflow: hidden;

        .wide-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 12px;
            width: 100%;
            flex-shrink: 0;
        }

        .main-section {
            display: grid;
            grid-template-columns: auto auto;
            flex: 1;
            min-height: 0;
            gap: 12px;
            justify-content: center;
            align-content: stretch;
        }

        iframe {
            border: none;
            flex-shrink: 0;
            display: block;

            &.portrait {
                height: 100%;
                width: auto;
                max-width: 100%;
                max-height: 100%;
                aspect-ratio: 360 / 480;
            }

            &.landscape {
                height: 100%;
                width: auto;
                max-width: 100%;
                max-height: 100%;
                aspect-ratio: 420 / 240;
            }

            &.wide {
                width: 100%;
                max-width: 100%;
                height: auto;
                max-height: 100%;
                aspect-ratio: 770 / 216;
            }
        }

        .main-section > div {
            display: flex;
            justify-content: center;
            align-items: stretch;
            min-width: 0;
            min-height: 0;
            height: 100%;
            overflow: hidden;
        }

        .main-section > div:last-child {
            flex-direction: column;
        }

        .main-section > div:only-child {
            grid-column: 1 / -1;
        }

        .wide-section > * {
            flex: 1;
            min-width: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
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
    }
`,Dt=()=>{if(!Se)return null;const[e,n]=d.useState(!1),[r,s]=St(),[a,i]=d.useState(void 0),[c,o]=d.useState(100),[u,l]=d.useState("0");d.useEffect(()=>{if(r==="off"&&e){const x=window.setTimeout(()=>{n(!1),i(void 0)},ee);return i(x),l(ee+"ms"),o(0),()=>{x&&window.clearTimeout(x)}}else r==="on"&&(l(0),o(100),n(!0))},[r,e]),d.useEffect(()=>{r==="on"&&a!==void 0&&(window.clearTimeout(a),l(0),o(100),i(void 0))},[a,r]);const[f,h]=d.useState(!1),m=()=>{At(),h(!0)};return d.useEffect(()=>{if(f){const x=setTimeout(()=>h(!1),1e3);return()=>clearTimeout(x)}},[f]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>n(x=>!x),children:"CCTV"}),t.jsx(I,{visible:e,onClick:()=>n(!1),fullsize:!0,children:t.jsxs(Tt,{children:[t.jsx(De,{completed:c,height:10,bgColor:a===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:u,transitionTimingFunction:"linear"}),s!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:s instanceof Error?s.message:String(s)})]}),t.jsx("div",{className:"grid",style:{display:e?"flex":"none"},children:(()=>{const x=H.filter(E=>(E.orientation||"landscape")==="portrait"),q=H.filter(E=>(E.orientation||"landscape")==="landscape"),J=H.filter(E=>E.orientation==="wide");return t.jsxs(t.Fragment,{children:[J.length>0&&t.jsx("div",{className:"wide-section",onClick:()=>m(),children:J.map((E,N)=>t.jsx("div",{style:{flex:1,minWidth:0,display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(P,{src:E.name,show:e,orientation:"wide"})},N))}),t.jsxs("div",{className:"main-section",children:[x.length>0&&t.jsx("div",{onClick:()=>m(),style:{flexDirection:"column",gap:"12px",height:"100%"},children:x.map((E,N)=>t.jsx("div",{style:{flex:1,minHeight:0,display:"flex",justifyContent:"center",alignItems:"stretch",height:"100%"},children:t.jsx(P,{src:E.name,show:e,orientation:"portrait"})},N))}),q.length>0&&t.jsx("div",{onClick:()=>m(),style:{flexDirection:"column",gap:"12px",height:"100%"},children:q.map((E,N)=>t.jsx("div",{style:{flex:1,minHeight:0,display:"flex",justifyContent:"center",alignItems:"stretch",height:"100%"},children:t.jsx(P,{src:E.name,show:e,orientation:"landscape"})},N))})]})]})})()}),f&&t.jsx("div",{className:"open-door",children:"Tür öffnet sich"})]})})]})},Ct=b.div`
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

`,Nt=({nextWeek:e,previousWeek:n,startWeekWithToday:r})=>t.jsxs(Ct,{children:[t.jsxs("div",{className:"buttons",children:[t.jsx(k,{path:Ye,size:"32px",color:"#ffffff",onClick:n}),t.jsx(k,{path:Ke,size:"32px",color:"#ffffff",onClick:e}),t.jsx("button",{onClick:r,children:"Today"}),t.jsx(Dt,{})]}),t.jsx(Et,{}),t.jsx(k,{path:qe,size:"32px",color:"#ffffff",className:j("indicator")})]}),Lt=p.memo(Nt),Rt=6e4,K=(e=Rt,n=void 0)=>{const[r,s]=d.useState(!0);return d.useEffect(()=>{const a=setInterval(()=>{s(i=>!i)},e);return()=>{clearInterval(a)}},[e,n]),r},_t=e=>T(`/api/calendars/${e}`),Ot=(e,n)=>`${_t(e)}?${at.stringify(n)}`,It={mdiDelete:Xe,mdiCake:Je},Wt=e=>{if(!e||typeof e!="string")return;const n=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return It[n]||void 0},$t=pt.map(e=>({name:e.name,icon:Wt(e.icon)})),Mt=(e,n,r,s)=>w(Ot(e.name,{start:n.toISO(),end:r.toISO()}),{timeout:1e4}).then(a=>{!a.data||!Array.isArray(a.data)||a.data.forEach(i=>{const c="dateTime"in i.start?y.fromISO(i.start.dateTime):y.fromSQL(i.start.date);let o;"dateTime"in i.end?o=Math.floor(y.fromISO(i.end.dateTime).diff(n,"days").as("days")):o=Math.floor(y.fromSQL(i.end.date).diff(n,"days").as("days"))-1;const u=Math.floor(c.diff(n,"days").as("days"));o>=s.length&&(o=s.length-1);const l="dateTime"in i.start?"events":"allDay";if(u>=0&&u<s.length)for(let f=u;f<=o;f++)s[f][l]=[...s[f][l],{...i,icon:e.icon}]})}).catch(a=>{throw a}),te=new Map,Ft=300*1e3,Ht=e=>e.toISODate(),Bt=(e,n,r,s,a,i)=>{const c=[0,1,2,3,4,5].map(h=>e.plus({days:h}).startOf("day"));c[6]=e.plus({days:6}).endOf("day");const o=Ht(e),u=te.get(o);if(u&&Date.now()-u.timestamp<Ft){r(u.data);return}const l=c.map(h=>({date:h,allDay:[],events:[]})),f=new AbortController;a.current&&a.current.abort(),a.current=f;try{s(!0);const h=$t.map(m=>Mt(m,c[0],c[6],l));Promise.all(h).then(()=>{f.signal.aborted||(te.set(o,{data:l,timestamp:Date.now()}),r(l),i(!1))}).catch(m=>{f.signal.aborted||i(C(m))}).finally(()=>{f.signal.aborted||s(!1)})}catch(h){f.signal.aborted||(i(C(h)),s(!1))}},ne=[],Pt=e=>{const[n,r]=d.useState(ne),[s,a]=d.useState(!1),[i,c]=d.useState(!1),o=K(6e4,"Calendar"),[u,l]=d.useState(null),f=p.useRef(null);return d.useEffect(()=>(e!==void 0&&((u===null||!u.equals(e))&&(r(ne),l(e)),Bt(e,n,r,a,f,c)),()=>{f.current&&f.current.abort()}),[e,o]),[n,i]};function O(e){const[n,r]=d.useState(!1);function s({key:i}){i===e&&r(!0)}const a=({key:i})=>{i===e&&r(!1)};return d.useEffect(()=>(window.addEventListener("keydown",s),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",s),window.removeEventListener("keyup",a)}),[e]),n}const zt=()=>{let e=new Date,r=(e.getDay()+6)%7,s=new Date(e.setDate(e.getDate()-r));return y.fromJSDate(s)},Gt=e=>{const n=()=>e(o=>o.plus({days:7})),r=O("ArrowRight");d.useEffect(()=>{r&&n()},[r]);const s=()=>e(o=>o.minus({days:7})),a=O("ArrowLeft");d.useEffect(()=>{a&&s()},[a]);const i=()=>e(zt()),c=O("t");return d.useEffect(()=>{c&&i()},[c]),{nextWeek:n,previousWeek:s,startWeekWithToday:i}},Ut=e=>{const[n,r]=p.useState(0),[s,a]=p.useState(0),i=50;return{onTouchStart:l=>{a(0),r(l.targetTouches[0].clientX)},onTouchMove:l=>a(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!n||!s)return;const l=n-s,f=l>i,h=l<-i;f&&e.onSwipedLeft(),h&&e.onSwipedRight()}}},re=e=>y.fromISO(e).toLocaleString(y.TIME_24_SIMPLE),z=e=>e.toFormat("c")>=6,G=e=>e.hasSame(y.now(),"day"),Vt=b.div`

  display: flex;
  flex-direction: column;

  .schedule {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(2, max-content) 1fr;
    grid-column-gap: 12px;
    flex-grow: 1;

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
`,Yt=()=>{const[e,n]=d.useState(void 0),[r,s]=Pt(e),{nextWeek:a,previousWeek:i,startWeekWithToday:c}=Gt(n);d.useEffect(()=>{c()},[]);const o=Ut({onSwipedLeft:()=>a(),onSwipedRight:()=>i()}),u=p.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=p.useMemo(()=>r.slice(0,7),[r]);return t.jsxs(Vt,{...o,children:[t.jsx(Lt,{nextWeek:a,previousWeek:i,startWeekWithToday:c}),t.jsxs("div",{className:"schedule",children:[l.map((f,h)=>t.jsx("div",{className:j({weekend:z(f.date),today:G(f.date)},"caption"),children:t.jsx("h2",{children:f.date.toLocaleString(u)})},h)),l.map((f,h)=>t.jsx("div",{className:j("allDayRow",{weekend:z(f.date),today:G(f.date)}),children:f.allDay.map((m,x)=>t.jsx("div",{className:"allDayEvent",children:m.summary},x))},h)),l.map((f,h)=>t.jsx("div",{className:j("eventRow",{weekend:z(f.date),today:G(f.date)}),children:f.events.map((m,x)=>t.jsxs("div",{className:"event",children:[t.jsx("div",{children:m.summary}),t.jsxs("h3",{children:[m.icon&&t.jsx(k,{path:m.icon,size:"1rem",color:"#ffffff"}),re(m.start.dateTime)," - ",re(m.end.dateTime)]})]},x))},h))]}),r.length===0&&t.jsx("div",{className:"loading",children:s!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),t.jsx("div",{children:s instanceof Error?s.message:String(s)})]}):t.jsx(le,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),s!==!1&&r.length>0&&t.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:t.jsxs("div",{children:["Warnung: ",s instanceof Error?s.message:String(s)]})})]})},F={"clear-day":{icon:Me,label:"Klar",color:"#eeeef5"},"clear-night":{icon:$e,label:"Klar",color:"#eeeef5"},rain:{icon:We,label:"Regen",color:"#80a5d6"},snow:{icon:Ie,label:"Schnee",color:"#8c82ce"},sleet:{icon:Oe,label:"Graupel",color:"#aba4db"},wind:{icon:_e,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:Re,label:"Neblig",color:"#d5dae2"},cloudy:{icon:Le,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:Ne,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:Ce,label:"Teils bewölkt",color:"#d5dae2"}},Kt=()=>`./forecast/${ge}/${xe},${ye}?&units=si&exclude=minutely`,qt=e=>{const[n,r]=d.useState([]),[s,a]=d.useState(!1),i=K(6e4*10,"Weather"),c=we&&ge&&xe&&ye;return d.useEffect(()=>{c&&w(Kt()).then(o=>{r(o.data),a(!1)}).catch(o=>{a(C(o))}).finally(()=>{})},[i,e,c]),[n,s]},Jt=He(Be),se=b.div`

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
`,ie=p.memo(({data:e,daily:n=!1})=>t.jsxs("div",{children:[t.jsxs("div",{children:[!n&&y.fromSeconds(e.time).toLocaleString(y.TIME_24_SIMPLE),n&&y.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),t.jsx("div",{children:t.jsx(Y,{icon:e.icon})}),t.jsx("div",{children:t.jsxs("strong",{children:[!n&&t.jsxs(t.Fragment,{children:[Math.round(e.temperature),"°"]}),n&&t.jsxs(t.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),t.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),t.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Xt=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(n=>({color:F[n.icon]?.color||"#ffffff",text:F[n.icon]?.label||"",annotation:`${Math.round(n.temperature)}°`,time:n.time})),Y=({icon:e})=>{const n=F[e];return t.jsx(n.icon,{size:60,color:"#ffffff"})},Zt=()=>{if(!we)return null;const[e,n]=qt(),[r,s]=d.useState(!1),a=O("w"),i=d.useRef(),c=p.useCallback(()=>s(h=>!h),[]),o=p.useCallback(()=>s(!0),[]),u=p.useMemo(()=>Xt(e),[e]),l=p.useMemo(()=>[3,6,9,12],[]),f=p.useMemo(()=>[1,2,3,4,5,6,7],[]);return d.useEffect(()=>{if(!i.current||!e||!e.hourly||u.length===0)return;const h={timezone:"Europe/Berlin"},m=document.createElement("div");return i.current.textContent="",i.current.appendChild(m),lt(m,u,h),()=>{i.current&&(i.current.textContent="")}},[u]),d.useEffect(()=>{a&&c()},[a]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?n!==!1?t.jsx(se,{children:t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]})}):"":t.jsxs(se,{children:[t.jsxs("div",{onClick:o,children:[t.jsxs("div",{className:"headline",children:[t.jsx(Y,{icon:e.currently.icon}),t.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),t.jsx("div",{className:"forecast",children:l.map((h,m)=>t.jsx(ie,{data:e.hourly.data[h]},m))})]}),t.jsx(I,{visible:r,onClick:c,children:t.jsxs("div",{className:"full-weather",children:[n!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]}),t.jsxs("div",{className:"detail-header",children:[t.jsx("div",{children:t.jsxs("div",{className:"headline",children:[t.jsx(Y,{icon:e.daily.data[0].icon}),t.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",t.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),t.jsx("h3",{children:F[e.daily.data[0].icon].label})]}),t.jsx("div",{className:"values",children:t.jsxs("div",{className:"table",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]}),t.jsxs("div",{children:[t.jsx("span",{children:"Windgeschwindigkeit:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]})]})}),t.jsx("h3",{children:"Die nächsten 24 Stunden"}),t.jsx("div",{ref:i}),t.jsx("h3",{children:"Die nächste Woche"}),t.jsx("div",{className:"forecast",children:f.map((h,m)=>t.jsx(ie,{data:e.daily.data[h],daily:!0},m))}),t.jsxs("div",{className:"info",children:["Aktualisiert ",t.jsx(Fe,{date:y.fromSeconds(e.currently.time).toJSDate(),formatter:Jt})]})]})})]})},Qt=p.memo(Zt);async function en(e){if(!U)throw new Error("GEOFOX_SECRET is not configured");return ot.stringify(ct(JSON.stringify(e),U))}const tn="AK Wandsbek",nn="Hamburg",rn="Master:62016",sn="STATION",an={x:10.091341,y:53.568702},on={name:tn,city:nn,id:rn,type:sn,coordinate:an},W={departureList:"departureList",checkName:"checkName"},cn=async(e,n)=>w({method:"post",url:`./gti/public/${e}`,data:n,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":ve,"geofox-auth-signature":await en(n),Authorization:void 0}}),ae=(e,n)=>e.realtimeOffset-n.realtimeOffset,ln=e=>{const n=e.departures.map(r=>({line:r.line.name,direction:r.line.direction,timeOffset:r.timeOffset,delay:r.delay?r.delay:"0",directionId:r.directionId,realtimeOffset:r.timeOffset+(r.delay?r.delay:0)/60}));return{from:n.filter(r=>r.directionId===1).slice(0,3).sort(ae),to:n.filter(r=>r.directionId===6).slice(0,3).sort(ae)}},dn=e=>{const[n,r]=d.useState([]),[s,a]=d.useState(!1),i=K(6e4),c=be&&ve&&U;return d.useEffect(()=>{if(!c||!(e in W))return;let o={version:51};switch(e){case W.checkName:o={...o,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case W.departureList:const u=y.now();o={...o,station:on,time:{date:u.toFormat("dd.MM.yyyy"),time:u.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:o=void 0}cn(e,o).then(u=>{r(ln(u.data)),a(!1)}).catch(u=>{a(C(u))})},[e,i,c]),[n,s]},fn=b.div`
  margin-top: 2rem;

  svg {
    height: 16px;
    width: auto;
  }

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
`,oe=p.memo(({line:e,direction:n,realtimeOffset:r})=>t.jsxs("div",{className:"departure",children:[t.jsx("div",{children:t.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),t.jsx("div",{children:r===0?"Jetzt":t.jsxs(t.Fragment,{children:["in ",r," '"]})})]})),un=()=>{if(!be)return null;const[e,n]=dn(W.departureList);return t.jsxs(fn,{children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:t.jsxs("g",{transform:"translate(10368 -6294)",children:[t.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),t.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),n!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"→ Wandsbek"}),e.to?.map((r,s)=>t.jsx(oe,{line:r.line,direction:r.direction,realtimeOffset:r.realtimeOffset},s)),t.jsx("h3",{children:"→ Stadtauswärts"}),e.from?.map((r,s)=>t.jsx(oe,{line:r.line,direction:r.direction,realtimeOffset:r.realtimeOffset},s))]})]})},hn=p.memo(un),mn=()=>{const[e,n]=d.useState("closed"),[r,s]=d.useState(!1),a=je&&A,i=A?T(`/api/states/${A}`):null;return d.useEffect(()=>{!a||!i||w(i).then(c=>{n(c.data.state),s(!1)}).catch(c=>{s(C(c))})},[a,i]),d.useEffect(()=>{let c=null,o=!0;async function u(){if(!a||!A)return;let l;try{if(!me){v.debug("Skipping WebSocket connection in production mode (using REST API only)");return}const f=pe||(typeof window<"u"?window.location.origin:""),h=D||"";if(!h){v.debug("Skipping WebSocket connection - no access token (using REST API only)");return}l=fe(f,h),o&&s(!1)}catch(f){o&&(v.error("Failed to create WebSocket auth:",f),s(f instanceof Error?f.message:String(f)));return}try{c=await ue({auth:l});const f=h=>{o&&n(h.variables.trigger.to_state.state)};await c.subscribeMessage(f,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:A}})}catch(f){o&&(v.error("Failed to setup WebSocket connection:",f),s(f instanceof Error?f.message:String(f)))}}return u(),()=>{o=!1,c&&c.close()}},[a]),[e,r]},pn=e=>{if(!A)return;e(!0);const n=setTimeout(()=>e(!1),3e3);w.post(T("/api/services/cover/toggle"),{entity_id:A}).catch(r=>{v.error("Failed to toggle garage door:",r)}).finally(()=>{clearTimeout(n),e(!1)})},gn=e=>{if(!A)return;e(!0);const n=setTimeout(()=>e(!1),3e3);w.post(T("/api/services/cover/open_cover"),{entity_id:A}).catch(r=>{v.error("Failed to open garage door:",r)}).finally(()=>{clearTimeout(n),e(!1)})},xn=e=>{if(!A)return;e(!0);const n=setTimeout(()=>e(!1),3e3);w.post(T("/api/services/cover/close_cover"),{entity_id:A}).catch(r=>{v.error("Failed to close garage door:",r)}).finally(()=>{clearTimeout(n),e(!1)})},yn=b.div`
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
`,ke=b.div`
  display: flex;
  align-items: center;
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
`,ce=e=>({unknown:{label:"In Bewegung oder halb-offen",icon:nt},open:{label:"Offen",icon:tt},closed:{label:"Geschlossen",icon:et},opening:{label:"Öffnet",icon:Qe},closing:{label:"Schließt",icon:Ze}})[e]||{label:"Unavailable",icon:rt},Te=({garageDoor:e,animate:n=!1})=>t.jsxs(ke,{className:j({animate:n}),children:[t.jsx(k,{path:ce(e).icon,size:"2rem",color:"#ffffff"}),t.jsx("span",{children:ce(e).label})]}),vn=(e,n)=>Pe.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:r}){return t.jsx(Te,{garageDoor:r})}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark"}),wn=()=>{if(!je)return null;const[e,n]=mn(),[r,s]=d.useState(void 0),[a,i]=d.useState(!1),[c,o]=d.useState(!1);d.useEffect(()=>{if(e==="unknown"||e==="opening"||e==="closing"){if(!r){const m=new Promise(x=>{s({resolve:x})});vn(m)}}else r&&(r.resolve(e),s(void 0))},[e]);const u=O("g");d.useEffect(()=>{u&&n===!1&&pn(i)},[u,n]);const l=p.useCallback(h=>{if(n===!1)switch(o(!1),h){case"open":gn(i);break;case"close":xn(i);break}},[i,n]),f=p.useCallback(()=>{n===!1&&o(!0)},[n]);return t.jsxs(yn,{className:j({disabled:n!==!1}),children:[t.jsx("h2",{children:"Garage"}),t.jsx("div",{className:"status",onClick:f,children:n!==!1?t.jsxs(ke,{children:[t.jsx(k,{path:de,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsx(Te,{garageDoor:e,animate:a})}),t.jsx(I,{visible:c&&n===!1,onClick:()=>o(!1),children:t.jsxs("div",{className:"controls",children:[t.jsx("div",{onClick:()=>l("open"),children:"Öffnen"}),t.jsx("div",{onClick:()=>l("close"),children:"Schließen"})]})})]})},bn=p.memo(wn),jn=e=>e?T(`/api/states/${e}`):null,S={done:{label:"Fertig",animate:!1,icon:it},off:{label:"Aus",animate:!1,icon:st},standby:{label:"Standby",animate:!1,icon:X},running:{label:"Läuft …",animate:!0,icon:X}},En={off:0,standby:2,running:16,done:256},Sn=()=>{const n=(Array.isArray(M)?M:[]).map((l,f)=>{const[h,m]=An(l.entity_id);return{state:h,error:m,name:l.name}}),[r,s]=d.useState(S.off),[a,i]=d.useState(!1),c=n.map(l=>l.state),o=n.map(l=>l.error);d.useEffect(()=>{const l=o.some(f=>f!==!1);i(l&&o.find(f=>f!==!1)||!1)},[o]),d.useEffect(()=>{const l=c.reduce((f,h)=>f+(En[h]||0),0);l===0?s(S.off):l<16?s(S.standby):l<256?s(S.running):l%256===0?s(S.done):l%256%16===0?s(S.running):l%256%2===0?s(S.done):s(S.running)},[c]);const u=n.map(l=>({label:l.name,state:l.state}));return[r,u,a]},An=e=>{const[n,r]=d.useState("off"),[s,a]=d.useState(!1),i=Ee&&e,c=jn(e);return d.useEffect(()=>{!i||!c||w(c).then(o=>{r(o.data.state),a(!1)}).catch(o=>{a(C(o))})},[e,i,c]),d.useEffect(()=>{async function o(){}return o(),()=>{}},[e,i]),[n,s]},kn=b.div`
  padding-bottom: 12px;

  @media only screen and (max-width: 1200px) {
    h2 {
      display: none;
    }
  }
  
  .status {
    display: flex;
    align-items: center;
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

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: .4rem 1rem;
      background-color: #262626;
      border-radius: 12px;
    }
  }
  
  .subtitle {
    margin: 1rem 0 0 0;
    font-size: 1.2rem;
  }
`,Tn=()=>{if(!Ee)return null;const[e,n,r]=Sn(),[s,a]=d.useState(!1),i=p.useCallback(()=>{r===!1&&a(!0)},[r]),c=p.useCallback(()=>a(!1),[]);return t.jsxs(kn,{className:j({disabled:r!==!1}),children:[t.jsx("h2",{children:"Wäsche"}),t.jsx("div",{className:"status",onClick:i,children:r!==!1?t.jsxs(t.Fragment,{children:[t.jsx(k,{path:de,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:j({animate:e.animate}),children:t.jsx(k,{path:e.icon,size:"2rem",color:"#ffffff"})}),t.jsx("span",{children:e.label})]})}),t.jsx(I,{visible:s&&r===!1,onClick:c,children:t.jsx("div",{className:"states",children:n.map((o,u)=>t.jsxs("div",{children:[t.jsx("div",{className:j({animate:S[o.state].animate}),children:t.jsx(k,{path:S[o.state].icon,size:2})}),t.jsx("div",{children:S[o.state].label}),t.jsx("div",{className:"subtitle",children:o.label})]},u))})})]})},Dn=p.memo(Tn),Cn=b.div`
  padding: 0 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
  }
  
  > * + * {
    margin-top: 24px;
  }
  
  h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  
  .two-cols {
    display: flex;

    @media only screen and (max-width: 1200px) {
      margin-top: 3rem;
    }
    
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
`,Nn=()=>t.jsxs(Cn,{children:[t.jsx(Qt,{}),t.jsx(hn,{}),t.jsxs("div",{className:"two-cols",children:[t.jsx(bn,{}),t.jsx(Dn,{})]})]}),Ln=p.memo(Nn),Rn=()=>{function e(r,s){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(s))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[i,c]=s.split(":").map(Number),o=new Date;let u=new Date(o.getFullYear(),o.getMonth(),o.getDate());u.setHours(i,c,0,0),u<=o&&u.setDate(u.getDate()+1);const l=u.getTime()-o.getTime();return setTimeout(r,l)}const n=()=>{window.location.reload(!0)};d.useLayoutEffect(()=>{const r=[e(n,"00:00"),e(n,"03:00"),e(n,"06:00"),e(n,"09:00"),e(n,"12:00"),e(n,"15:00"),e(n,"18:00"),e(n,"21:00")];return()=>{r.forEach(s=>{s&&clearTimeout(s)})}},[])},_n=b.div`
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
`;class $ extends d.Component{constructor(n){super(n),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){this.setState({error:n,errorInfo:r}),v.error("ErrorBoundary caught an error:",n,r)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?t.jsxs(_n,{children:[t.jsx("h2",{children:"Something went wrong"}),t.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,t.jsxs("div",{children:[t.jsx("button",{onClick:this.handleReset,children:"Try Again"}),t.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const On=ze`
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
`,In=b.div`
  padding: 0 12px;
  overflow: scroll;
  min-width: 100vw;
  box-sizing: border-box;

  .main {
    display: grid;
    grid-template-columns: 1fr 300px;
  }

  @media only screen and (max-width: 1200px) {
    .main {
      grid-template-columns: 1fr 150px;
    }
  }
`;function Wn(){return Rn(),t.jsx($,{children:t.jsxs(In,{children:[t.jsx(On,{}),t.jsxs("div",{className:"main",children:[t.jsx($,{children:t.jsx(Yt,{})}),t.jsx($,{children:t.jsx(Ln,{})})]}),t.jsx(Ge,{})]})})}const $n=Ue.createRoot(document.getElementById("root"));$n.render(t.jsx(d.StrictMode,{children:t.jsx($,{children:t.jsx(Wn,{})})}));
