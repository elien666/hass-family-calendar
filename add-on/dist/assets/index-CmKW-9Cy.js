import{d as E,j as t,I as A,R as d,l as ce,r as p,P as De,W as ke,b as Ce,e as Le,f as Ne,h as _e,i as Re,k as Oe,m as Ie,n as Me,o as We,T as $e,p as Fe,s as Be,y as He,q as Pe,L as ze,t as Ge}from"./react-vendor-F7aLjgMw.js";import{D as y}from"./date-vendor-BDx6lZXm.js";import{f as w}from"./vendor-CTb7xO-V.js";import{m as Ue,a as Ve,b as Ye,c as Ke,d as qe,e as Je,f as le,g as Xe,h as Ze,i as Qe,j as et,k as tt,l as rt,n as K,o as nt,p as st}from"./ui-vendor-DhGbN51c.js";import{a as v,q as it,B as ot,h as at}from"./utils-vendor-DGVTXAQf.js";import{c as de,a as fe}from"./ha-vendor-CoU0AojH.js";import{t as ct}from"./chart-vendor-ClWajKr-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const lt=E.div`
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
      width: 90vw;
      max-height: calc(100vh - 1rem);
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
    background-color: rgba(255,255,255,.2);
  }
`,O=({visible:e,children:r,onClick:n,fullsize:s=!1})=>t.jsxs(lt,{className:w({visible:e}),onClick:n,children:[t.jsx("div",{className:"close",children:t.jsx(A,{path:Ue,size:2,onClick:n})}),t.jsx("div",{className:w("content",{fullsize:s}),onClick:o=>o.stopPropagation(),children:r})]}),b={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},ue=e=>{const r={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1};return e.response?(r.status=e.response.status,r.responseData=e.response.data,r.url=e.config?.url||e.request?.responseURL||"Unknown URL",r.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(r.isNetworkError=!0,r.url=e.config?.url||"Unknown URL",r.message="Network error: No response received from server"):(r.message=e.message||"Request setup error",r.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(r.isTimeoutError=!0,r.message="Request timeout: The request took too long to complete"),r},dt=(e,r="")=>{const n=ue(e),s=[];return r&&s.push(`[${r}]`),s.push("Axios API Error:"),s.push(n.message),n.url&&s.push(`URL: ${n.url}`),n.status&&s.push(`Status: ${n.status}`),n.responseData&&s.push("Response:",n.responseData),b.error(...s),n},k=e=>{const r=ue(e);return r.isNetworkError?"":r.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":r.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":r.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":r.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":r.status>=500?"Serverfehler: Bitte später erneut versuchen":r.message||"Ein Fehler ist aufgetreten"},ft={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},me=!1,g=(e,r=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[e]!==void 0){const s=window.APP_CONFIG[e];return s==="undefined"||s==="null"?r:s??r}return r}const n=ft[`VITE_${e}`];return e==="HASS_ACCESS_TOKEN"&&n!==void 0?r:n!==void 0?n:r},ut=(e,r=!1)=>{const n=g(e,r);return typeof n=="boolean"?n:typeof n=="string"?n==="true"||n==="1"||n==="yes":!!n},he=g("HASS_HOST",""),D=g("HASS_ACCESS_TOKEN",""),mt=D&&typeof D=="string"&&D.trim()!==""&&D!=="undefined"&&D!=="null";mt?v.defaults.headers.common.Authorization=`Bearer ${D}`:delete v.defaults.headers.common.Authorization;v.interceptors.response.use(e=>e,e=>{const r=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";return dt(e,r),Promise.reject(e)});const pe=g("WEATHER_API_KEY"),ge=g("WEATHER_LATITUDE"),xe=g("WEATHER_LONGITUDE"),G=g("GEOFOX_SECRET"),ye=g("GEOFOX_USER");g("TELEGRAM_BOT_TOKEN");g("TELEGRAM_CHAT_ID");const S=g("ENTITY_GARAGE_DOOR"),N=g("ENTITY_DOORBELL"),q=g("ENTITY_DOORBELL_BUTTON"),U=g("ENTITY_EVERYDAY_CALENDAR"),ht=(()=>{const e=g("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),$=(()=>{const e=g("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),pt=g("GO2RTC_BASE_URL","http://192.168.188.10:1984"),J=(()=>{const e=g("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),L=(e,r)=>g(e,void 0)!==void 0?ut(e,!1):!1,be=L("ENABLE_WEATHER"),ve=L("ENABLE_HVV");L("ENABLE_TELEGRAM");const Ee=L("ENABLE_GARAGE"),we=L("ENABLE_LAUNDRY",Array.isArray($)&&$.length>0),je=L("ENABLE_DOORBELL"),Se=L("ENABLE_EVERYDAY_CALENDAR"),T=e=>{const r=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const n=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${n}${r}`}return r}},_=U?T(`/api/states/${U}`):null,gt=()=>{const[e,r]=d.useState(null),[n,s]=d.useState(!1),o=Se&&U;return d.useEffect(()=>{!o||!_||v(_).then(i=>{i.data.attributes.store!==void 0?r(i.data.attributes.store):r([]),s(!1)}).catch(i=>{s(k(i)),r([])})},[o,_]),[e,n]},xt=e=>{_&&v.post(_,{state:new Date,attributes:{store:e}}).catch(r=>{b.error("Failed to store everyday calendar data:",r)})},X=E.div` 

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
`,yt=({on:e,month:r,day:n})=>{const[s,o]=e,i=s.indexOf(`${r}-${n}`),c=i>-1,a=()=>{o(c?s.toSpliced(i,1):[...s,`${r}-${n}`])};return t.jsx("div",{className:w("dot",{on:c}),onClick:()=>a()})},bt=()=>{if(!Se)return null;const e=new Date().getFullYear(),r=[];for(let a=1;a<13;a++){const u=new Date(e,a,0).getDate();for(let l=1;l<=u;l++)r.push({month:a,day:l})}const n=Array.from({length:31},(a,u)=>u+1),s=Array.from({length:12},(a,u)=>u+1),o=d.useState(void 0),[i,c]=gt();return d.useEffect(()=>{i!==null&&o[1](i)},[i]),d.useEffect(()=>{o[0]!==void 0&&xt(o[0])},[o[0]]),o[0]!==void 0?t.jsxs(X,{children:[t.jsx("h2",{children:"Jeden Tag ein bißchen"}),c!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:c instanceof Error?c.message:String(c)})]}),t.jsxs("div",{className:"calendar",children:[n.map((a,u)=>t.jsx("div",{style:{gridArea:`${a+1} / 1 / ${a+1} / 1`},children:a},u)),s.map((a,u)=>t.jsx("div",{style:{gridArea:`1 / ${a+1} / 1 / ${a+1}`},children:a},u)),r.map((a,u)=>t.jsx("div",{style:{gridArea:`${a.day+1} / ${a.month+1} / ${a.day+1} / ${a.month+1}`},children:t.jsx(yt,{on:o,month:a.month,day:a.day})},u))]})]}):t.jsx(X,{className:"loading",children:c!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:c instanceof Error?c.message:String(c)})]}):t.jsx(ce,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},vt=E.div`
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
  }`,Et=()=>{const[e,r]=d.useState(y.now()),[n,s]=d.useState(!1),o=p.useCallback(()=>s(!0),[]),i=p.useCallback(()=>s(!1),[]);return d.useEffect(()=>{const c=setInterval(()=>r(y.now()),1e3);return()=>clearInterval(c)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(vt,{onClick:o,children:[e.toFormat("HH"),t.jsx("span",{children:":"}),e.toFormat("mm")]}),t.jsx(O,{visible:n,onClick:i,fullsize:!0,children:t.jsx(bt,{})})]})},wt=p.memo(Et),H=N?T(`/api/states/${N}`):null,jt=()=>{const[e,r]=d.useState("off"),[n,s]=d.useState(!1),o=je&&N;return d.useEffect(()=>{!o||!H||v(H).then(i=>{r(i.data.state),s(!1)}).catch(i=>{s(k(i))})},[o,H]),d.useEffect(()=>{let i=null,c=!0;async function a(){if(!o||!N)return;let u;try{if(!me){b.debug("Skipping WebSocket connection in production mode (using REST API only)");return}const l=he||(typeof window<"u"?window.location.origin:""),f=D||"";if(!f){b.debug("Skipping WebSocket connection - no access token (using REST API only)");return}u=de(l,f),c&&s(!1)}catch(l){c&&(b.error("Failed to create WebSocket auth:",l),s(l instanceof Error?l.message:String(l)));return}try{i=await fe({auth:u});const l=f=>{c&&r(f.variables.trigger.to_state.state)};await i.subscribeMessage(l,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:N}})}catch(l){c&&(b.error("Failed to setup WebSocket connection:",l),s(l instanceof Error?l.message:String(l)))}}return a(),()=>{c=!1,i&&i.close()}},[o]),[e,n]},St=()=>{q&&v.post(T("/api/services/button/press"),{entity_id:q}).catch(e=>{b.error("Failed to unlatch front door:",e)})},At=e=>{if(!e)return"";if(!e.includes("/")&&!e.includes(":"))return e;const r=e.match(/\/([^\/]+?)(?:\/whep)?(?:\?|$)/);return r?r[1]:e.split("?")[0].split("/").filter(Boolean).pop()||e},Z=({src:e,show:r,orientation:n="landscape",...s})=>{const o=At(e),i=`${pt}/stream.html?src=${o}`;return r?t.jsx("iframe",{src:i,className:n,allow:"autoplay; fullscreen",...s}):null},Q=45e3,Tt=E.div`

    position: relative;

    h3 {
        margin-top: 6px;
    }

    .grid {
        display: flex;

        iframe {

            border: none;

            &.portrait {
                
            }

            &.landscape {
                width: 420px;
                height: 240px;
            }
        }

        > div {
            display: flex;
            flex-grow: 1;
            justify-content: center;
        }

        > div:last-child {
            flex-direction: column;
            align-items: center;
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
`,Dt=()=>{if(!je)return null;const[e,r]=d.useState(!1),[n,s]=jt(),[o,i]=d.useState(void 0),[c,a]=d.useState(100),[u,l]=d.useState("0");d.useEffect(()=>{if(n==="off"&&e){const x=window.setTimeout(()=>{r(!1),i(void 0)},Q);return i(x),l(Q+"ms"),a(0),()=>{x&&window.clearTimeout(x)}}else n==="on"&&(l(0),a(100),r(!0))},[n,e]),d.useEffect(()=>{n==="on"&&o!==void 0&&(window.clearTimeout(o),l(0),a(100),i(void 0))},[o,n]);const[f,m]=d.useState(!1),h=()=>{St(),m(!0)};return d.useEffect(()=>{if(f){const x=setTimeout(()=>m(!1),1e3);return()=>clearTimeout(x)}},[f]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>r(x=>!x),children:"CCTV"}),t.jsx(O,{visible:e,onClick:()=>r(!1),fullsize:!0,children:t.jsxs(Tt,{children:[t.jsx(De,{completed:c,height:10,bgColor:o===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:u,transitionTimingFunction:"linear"}),s!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:s instanceof Error?s.message:String(s)})]}),t.jsx("div",{className:"grid",style:{display:e?"flex":"none"},children:(()=>{const x=J.filter(C=>(C.orientation||"landscape")==="portrait"),B=J.filter(C=>(C.orientation||"landscape")==="landscape");return t.jsxs(t.Fragment,{children:[x.length>0&&t.jsx("div",{onClick:()=>h(),style:{flexDirection:"column"},children:x.map((C,I)=>t.jsx(Z,{src:C.name,show:e,orientation:"portrait",width:"360",height:"480"},I))}),B.length>0&&t.jsx("div",{onClick:()=>h(),children:B.map((C,I)=>t.jsx(Z,{src:C.name,show:e,orientation:"landscape",width:"100%",height:I===B.length-1?"240px":void 0},I))})]})})()}),f&&t.jsx("div",{className:"open-door",children:"Tür öffnet sich"})]})})]})},kt=E.div`
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

`,Ct=({nextWeek:e,previousWeek:r,startWeekWithToday:n})=>t.jsxs(kt,{children:[t.jsxs("div",{className:"buttons",children:[t.jsx(A,{path:Ve,size:"32px",color:"#ffffff",onClick:r}),t.jsx(A,{path:Ye,size:"32px",color:"#ffffff",onClick:e}),t.jsx("button",{onClick:n,children:"Today"}),t.jsx(Dt,{})]}),t.jsx(wt,{}),t.jsx(A,{path:Ke,size:"32px",color:"#ffffff",className:w("indicator")})]}),Lt=p.memo(Ct),Nt=6e4,Y=(e=Nt,r=void 0)=>{const[n,s]=d.useState(!0);return d.useEffect(()=>{const o=setInterval(()=>{s(i=>!i)},e);return()=>{clearInterval(o)}},[e,r]),n},_t=e=>T(`/api/calendars/${e}`),Rt=(e,r)=>`${_t(e)}?${it.stringify(r)}`,Ot={mdiDelete:Je,mdiCake:qe},It=e=>{if(!e||typeof e!="string")return;const r=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Ot[r]||void 0},Mt=ht.map(e=>({name:e.name,icon:It(e.icon)})),Wt=(e,r,n,s)=>v(Rt(e.name,{start:r.toISO(),end:n.toISO()}),{timeout:1e4}).then(o=>{!o.data||!Array.isArray(o.data)||o.data.forEach(i=>{const c="dateTime"in i.start?y.fromISO(i.start.dateTime):y.fromSQL(i.start.date);let a;"dateTime"in i.end?a=Math.floor(y.fromISO(i.end.dateTime).diff(r,"days").as("days")):a=Math.floor(y.fromSQL(i.end.date).diff(r,"days").as("days"))-1;const u=Math.floor(c.diff(r,"days").as("days"));a>=s.length&&(a=s.length-1);const l="dateTime"in i.start?"events":"allDay";if(u>=0&&u<s.length)for(let f=u;f<=a;f++)s[f][l]=[...s[f][l],{...i,icon:e.icon}]})}).catch(o=>{throw o}),ee=new Map,$t=300*1e3,Ft=e=>e.toISODate(),Bt=(e,r,n,s,o,i)=>{const c=[0,1,2,3,4,5].map(m=>e.plus({days:m}).startOf("day"));c[6]=e.plus({days:6}).endOf("day");const a=Ft(e),u=ee.get(a);if(u&&Date.now()-u.timestamp<$t){n(u.data);return}const l=c.map(m=>({date:m,allDay:[],events:[]})),f=new AbortController;o.current&&o.current.abort(),o.current=f;try{s(!0);const m=Mt.map(h=>Wt(h,c[0],c[6],l));Promise.all(m).then(()=>{f.signal.aborted||(ee.set(a,{data:l,timestamp:Date.now()}),n(l),i(!1))}).catch(h=>{f.signal.aborted||i(k(h))}).finally(()=>{f.signal.aborted||s(!1)})}catch(m){f.signal.aborted||(i(k(m)),s(!1))}},te=[],Ht=e=>{const[r,n]=d.useState(te),[s,o]=d.useState(!1),[i,c]=d.useState(!1),a=Y(6e4,"Calendar"),[u,l]=d.useState(null),f=p.useRef(null);return d.useEffect(()=>(e!==void 0&&((u===null||!u.equals(e))&&(n(te),l(e)),Bt(e,r,n,o,f,c)),()=>{f.current&&f.current.abort()}),[e,a]),[r,i]};function R(e){const[r,n]=d.useState(!1);function s({key:i}){i===e&&n(!0)}const o=({key:i})=>{i===e&&n(!1)};return d.useEffect(()=>(window.addEventListener("keydown",s),window.addEventListener("keyup",o),()=>{window.removeEventListener("keydown",s),window.removeEventListener("keyup",o)}),[e]),r}const Pt=()=>{let e=new Date,n=(e.getDay()+6)%7,s=new Date(e.setDate(e.getDate()-n));return y.fromJSDate(s)},zt=e=>{const r=()=>e(a=>a.plus({days:7})),n=R("ArrowRight");d.useEffect(()=>{n&&r()},[n]);const s=()=>e(a=>a.minus({days:7})),o=R("ArrowLeft");d.useEffect(()=>{o&&s()},[o]);const i=()=>e(Pt()),c=R("t");return d.useEffect(()=>{c&&i()},[c]),{nextWeek:r,previousWeek:s,startWeekWithToday:i}},Gt=e=>{const[r,n]=p.useState(0),[s,o]=p.useState(0),i=50;return{onTouchStart:l=>{o(0),n(l.targetTouches[0].clientX)},onTouchMove:l=>o(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!r||!s)return;const l=r-s,f=l>i,m=l<-i;f&&e.onSwipedLeft(),m&&e.onSwipedRight()}}},re=e=>y.fromISO(e).toLocaleString(y.TIME_24_SIMPLE),P=e=>e.toFormat("c")>=6,z=e=>e.hasSame(y.now(),"day"),Ut=E.div`

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
`,Vt=()=>{const[e,r]=d.useState(void 0),[n,s]=Ht(e),{nextWeek:o,previousWeek:i,startWeekWithToday:c}=zt(r);d.useEffect(()=>{c()},[]);const a=Gt({onSwipedLeft:()=>o(),onSwipedRight:()=>i()}),u=p.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),l=p.useMemo(()=>n.slice(0,7),[n]);return t.jsxs(Ut,{...a,children:[t.jsx(Lt,{nextWeek:o,previousWeek:i,startWeekWithToday:c}),t.jsxs("div",{className:"schedule",children:[l.map((f,m)=>t.jsx("div",{className:w({weekend:P(f.date),today:z(f.date)},"caption"),children:t.jsx("h2",{children:f.date.toLocaleString(u)})},m)),l.map((f,m)=>t.jsx("div",{className:w("allDayRow",{weekend:P(f.date),today:z(f.date)}),children:f.allDay.map((h,x)=>t.jsx("div",{className:"allDayEvent",children:h.summary},x))},m)),l.map((f,m)=>t.jsx("div",{className:w("eventRow",{weekend:P(f.date),today:z(f.date)}),children:f.events.map((h,x)=>t.jsxs("div",{className:"event",children:[t.jsx("div",{children:h.summary}),t.jsxs("h3",{children:[h.icon&&t.jsx(A,{path:h.icon,size:"1rem",color:"#ffffff"}),re(h.start.dateTime)," - ",re(h.end.dateTime)]})]},x))},m))]}),n.length===0&&t.jsx("div",{className:"loading",children:s!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),t.jsx("div",{children:s instanceof Error?s.message:String(s)})]}):t.jsx(ce,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),s!==!1&&n.length>0&&t.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:t.jsxs("div",{children:["Warnung: ",s instanceof Error?s.message:String(s)]})})]})},F={"clear-day":{icon:We,label:"Klar",color:"#eeeef5"},"clear-night":{icon:Me,label:"Klar",color:"#eeeef5"},rain:{icon:Ie,label:"Regen",color:"#80a5d6"},snow:{icon:Oe,label:"Schnee",color:"#8c82ce"},sleet:{icon:Re,label:"Graupel",color:"#aba4db"},wind:{icon:_e,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:Ne,label:"Neblig",color:"#d5dae2"},cloudy:{icon:Le,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:Ce,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:ke,label:"Teils bewölkt",color:"#d5dae2"}},Yt=()=>`./forecast/${pe}/${ge},${xe}?&units=si&exclude=minutely`,Kt=e=>{const[r,n]=d.useState([]),[s,o]=d.useState(!1),i=Y(6e4*10,"Weather"),c=be&&pe&&ge&&xe;return d.useEffect(()=>{c&&v(Yt()).then(a=>{n(a.data),o(!1)}).catch(a=>{o(k(a))}).finally(()=>{})},[i,e,c]),[r,s]},qt=Fe(Be),ne=E.div`

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
`,se=p.memo(({data:e,daily:r=!1})=>t.jsxs("div",{children:[t.jsxs("div",{children:[!r&&y.fromSeconds(e.time).toLocaleString(y.TIME_24_SIMPLE),r&&y.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),t.jsx("div",{children:t.jsx(V,{icon:e.icon})}),t.jsx("div",{children:t.jsxs("strong",{children:[!r&&t.jsxs(t.Fragment,{children:[Math.round(e.temperature),"°"]}),r&&t.jsxs(t.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),t.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),t.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Jt=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(r=>({color:F[r.icon]?.color||"#ffffff",text:F[r.icon]?.label||"",annotation:`${Math.round(r.temperature)}°`,time:r.time})),V=({icon:e})=>{const r=F[e];return t.jsx(r.icon,{size:60,color:"#ffffff"})},Xt=()=>{if(!be)return null;const[e,r]=Kt(),[n,s]=d.useState(!1),o=R("w"),i=d.useRef(),c=p.useCallback(()=>s(m=>!m),[]),a=p.useCallback(()=>s(!0),[]),u=p.useMemo(()=>Jt(e),[e]),l=p.useMemo(()=>[3,6,9,12],[]),f=p.useMemo(()=>[1,2,3,4,5,6,7],[]);return d.useEffect(()=>{if(!i.current||!e||!e.hourly||u.length===0)return;const m={timezone:"Europe/Berlin"},h=document.createElement("div");return i.current.textContent="",i.current.appendChild(h),ct(h,u,m),()=>{i.current&&(i.current.textContent="")}},[u]),d.useEffect(()=>{o&&c()},[o]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?r!==!1?t.jsx(ne,{children:t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),t.jsx("div",{children:r instanceof Error?r.message:String(r)})]})}):"":t.jsxs(ne,{children:[t.jsxs("div",{onClick:a,children:[t.jsxs("div",{className:"headline",children:[t.jsx(V,{icon:e.currently.icon}),t.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),t.jsx("div",{className:"forecast",children:l.map((m,h)=>t.jsx(se,{data:e.hourly.data[m]},h))})]}),t.jsx(O,{visible:n,onClick:c,children:t.jsxs("div",{className:"full-weather",children:[r!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:r instanceof Error?r.message:String(r)})]}),t.jsxs("div",{className:"detail-header",children:[t.jsx("div",{children:t.jsxs("div",{className:"headline",children:[t.jsx(V,{icon:e.daily.data[0].icon}),t.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",t.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),t.jsx("h3",{children:F[e.daily.data[0].icon].label})]}),t.jsx("div",{className:"values",children:t.jsxs("div",{className:"table",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]}),t.jsxs("div",{children:[t.jsx("span",{children:"Windgeschwindigkeit:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]})]})}),t.jsx("h3",{children:"Die nächsten 24 Stunden"}),t.jsx("div",{ref:i}),t.jsx("h3",{children:"Die nächste Woche"}),t.jsx("div",{className:"forecast",children:f.map((m,h)=>t.jsx(se,{data:e.daily.data[m],daily:!0},h))}),t.jsxs("div",{className:"info",children:["Aktualisiert ",t.jsx($e,{date:y.fromSeconds(e.currently.time).toJSDate(),formatter:qt})]})]})})]})},Zt=p.memo(Xt);async function Qt(e){if(!G)throw new Error("GEOFOX_SECRET is not configured");return ot.stringify(at(JSON.stringify(e),G))}const er="AK Wandsbek",tr="Hamburg",rr="Master:62016",nr="STATION",sr={x:10.091341,y:53.568702},ir={name:er,city:tr,id:rr,type:nr,coordinate:sr},M={departureList:"departureList",checkName:"checkName"},or=async(e,r)=>v({method:"post",url:`./gti/public/${e}`,data:r,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":ye,"geofox-auth-signature":await Qt(r),Authorization:void 0}}),ie=(e,r)=>e.realtimeOffset-r.realtimeOffset,ar=e=>{const r=e.departures.map(n=>({line:n.line.name,direction:n.line.direction,timeOffset:n.timeOffset,delay:n.delay?n.delay:"0",directionId:n.directionId,realtimeOffset:n.timeOffset+(n.delay?n.delay:0)/60}));return{from:r.filter(n=>n.directionId===1).slice(0,3).sort(ie),to:r.filter(n=>n.directionId===6).slice(0,3).sort(ie)}},cr=e=>{const[r,n]=d.useState([]),[s,o]=d.useState(!1),i=Y(6e4),c=ve&&ye&&G;return d.useEffect(()=>{if(!c||!(e in M))return;let a={version:51};switch(e){case M.checkName:a={...a,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case M.departureList:const u=y.now();a={...a,station:ir,time:{date:u.toFormat("dd.MM.yyyy"),time:u.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:a=void 0}or(e,a).then(u=>{n(ar(u.data)),o(!1)}).catch(u=>{o(k(u))})},[e,i,c]),[r,s]},lr=E.div`
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
`,oe=p.memo(({line:e,direction:r,realtimeOffset:n})=>t.jsxs("div",{className:"departure",children:[t.jsx("div",{children:t.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),t.jsx("div",{children:n===0?"Jetzt":t.jsxs(t.Fragment,{children:["in ",n," '"]})})]})),dr=()=>{if(!ve)return null;const[e,r]=cr(M.departureList);return t.jsxs(lr,{children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:t.jsxs("g",{transform:"translate(10368 -6294)",children:[t.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),t.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),r!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:r instanceof Error?r.message:String(r)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"→ Wandsbek"}),e.to?.map((n,s)=>t.jsx(oe,{line:n.line,direction:n.direction,realtimeOffset:n.realtimeOffset},s)),t.jsx("h3",{children:"→ Stadtauswärts"}),e.from?.map((n,s)=>t.jsx(oe,{line:n.line,direction:n.direction,realtimeOffset:n.realtimeOffset},s))]})]})},fr=p.memo(dr),ur=()=>{const[e,r]=d.useState("closed"),[n,s]=d.useState(!1),o=Ee&&S,i=S?T(`/api/states/${S}`):null;return d.useEffect(()=>{!o||!i||v(i).then(c=>{r(c.data.state),s(!1)}).catch(c=>{s(k(c))})},[o,i]),d.useEffect(()=>{let c=null,a=!0;async function u(){if(!o||!S)return;let l;try{if(!me){b.debug("Skipping WebSocket connection in production mode (using REST API only)");return}const f=he||(typeof window<"u"?window.location.origin:""),m=D||"";if(!m){b.debug("Skipping WebSocket connection - no access token (using REST API only)");return}l=de(f,m),a&&s(!1)}catch(f){a&&(b.error("Failed to create WebSocket auth:",f),s(f instanceof Error?f.message:String(f)));return}try{c=await fe({auth:l});const f=m=>{a&&r(m.variables.trigger.to_state.state)};await c.subscribeMessage(f,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:S}})}catch(f){a&&(b.error("Failed to setup WebSocket connection:",f),s(f instanceof Error?f.message:String(f)))}}return u(),()=>{a=!1,c&&c.close()}},[o]),[e,n]},mr=e=>{if(!S)return;e(!0);const r=setTimeout(()=>e(!1),3e3);v.post(T("/api/services/cover/toggle"),{entity_id:S}).catch(n=>{b.error("Failed to toggle garage door:",n)}).finally(()=>{clearTimeout(r),e(!1)})},hr=e=>{if(!S)return;e(!0);const r=setTimeout(()=>e(!1),3e3);v.post(T("/api/services/cover/open_cover"),{entity_id:S}).catch(n=>{b.error("Failed to open garage door:",n)}).finally(()=>{clearTimeout(r),e(!1)})},pr=e=>{if(!S)return;e(!0);const r=setTimeout(()=>e(!1),3e3);v.post(T("/api/services/cover/close_cover"),{entity_id:S}).catch(n=>{b.error("Failed to close garage door:",n)}).finally(()=>{clearTimeout(r),e(!1)})},gr=E.div`
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
`,Ae=E.div`
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
`,ae=e=>({unknown:{label:"In Bewegung oder halb-offen",icon:tt},open:{label:"Offen",icon:et},closed:{label:"Geschlossen",icon:Qe},opening:{label:"Öffnet",icon:Ze},closing:{label:"Schließt",icon:Xe}})[e]||{label:"Unavailable",icon:rt},Te=({garageDoor:e,animate:r=!1})=>t.jsxs(Ae,{className:w({animate:r}),children:[t.jsx(A,{path:ae(e).icon,size:"2rem",color:"#ffffff"}),t.jsx("span",{children:ae(e).label})]}),xr=(e,r)=>He.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return t.jsx(Te,{garageDoor:n})}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark"}),yr=()=>{if(!Ee)return null;const[e,r]=ur(),[n,s]=d.useState(void 0),[o,i]=d.useState(!1),[c,a]=d.useState(!1);d.useEffect(()=>{if(e==="unknown"||e==="opening"||e==="closing"){if(!n){const h=new Promise(x=>{s({resolve:x})});xr(h)}}else n&&(n.resolve(e),s(void 0))},[e]);const u=R("g");d.useEffect(()=>{u&&r===!1&&mr(i)},[u,r]);const l=p.useCallback(m=>{if(r===!1)switch(a(!1),m){case"open":hr(i);break;case"close":pr(i);break}},[i,r]),f=p.useCallback(()=>{r===!1&&a(!0)},[r]);return t.jsxs(gr,{className:w({disabled:r!==!1}),children:[t.jsx("h2",{children:"Garage"}),t.jsx("div",{className:"status",onClick:f,children:r!==!1?t.jsxs(Ae,{children:[t.jsx(A,{path:le,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsx(Te,{garageDoor:e,animate:o})}),t.jsx(O,{visible:c&&r===!1,onClick:()=>a(!1),children:t.jsxs("div",{className:"controls",children:[t.jsx("div",{onClick:()=>l("open"),children:"Öffnen"}),t.jsx("div",{onClick:()=>l("close"),children:"Schließen"})]})})]})},br=p.memo(yr),vr=e=>e?T(`/api/states/${e}`):null,j={done:{label:"Fertig",animate:!1,icon:st},off:{label:"Aus",animate:!1,icon:nt},standby:{label:"Standby",animate:!1,icon:K},running:{label:"Läuft …",animate:!0,icon:K}},Er={off:0,standby:2,running:16,done:256},wr=()=>{const r=(Array.isArray($)?$:[]).map((l,f)=>{const[m,h]=jr(l.entity_id);return{state:m,error:h,name:l.name}}),[n,s]=d.useState(j.off),[o,i]=d.useState(!1),c=r.map(l=>l.state),a=r.map(l=>l.error);d.useEffect(()=>{const l=a.some(f=>f!==!1);i(l&&a.find(f=>f!==!1)||!1)},[a]),d.useEffect(()=>{const l=c.reduce((f,m)=>f+(Er[m]||0),0);l===0?s(j.off):l<16?s(j.standby):l<256?s(j.running):l%256===0?s(j.done):l%256%16===0?s(j.running):l%256%2===0?s(j.done):s(j.running)},[c]);const u=r.map(l=>({label:l.name,state:l.state}));return[n,u,o]},jr=e=>{const[r,n]=d.useState("off"),[s,o]=d.useState(!1),i=we&&e,c=vr(e);return d.useEffect(()=>{!i||!c||v(c).then(a=>{n(a.data.state),o(!1)}).catch(a=>{o(k(a))})},[e,i,c]),d.useEffect(()=>{async function a(){}return a(),()=>{}},[e,i]),[r,s]},Sr=E.div`
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
`,Ar=()=>{if(!we)return null;const[e,r,n]=wr(),[s,o]=d.useState(!1),i=p.useCallback(()=>{n===!1&&o(!0)},[n]),c=p.useCallback(()=>o(!1),[]);return t.jsxs(Sr,{className:w({disabled:n!==!1}),children:[t.jsx("h2",{children:"Wäsche"}),t.jsx("div",{className:"status",onClick:i,children:n!==!1?t.jsxs(t.Fragment,{children:[t.jsx(A,{path:le,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:w({animate:e.animate}),children:t.jsx(A,{path:e.icon,size:"2rem",color:"#ffffff"})}),t.jsx("span",{children:e.label})]})}),t.jsx(O,{visible:s&&n===!1,onClick:c,children:t.jsx("div",{className:"states",children:r.map((a,u)=>t.jsxs("div",{children:[t.jsx("div",{className:w({animate:j[a.state].animate}),children:t.jsx(A,{path:j[a.state].icon,size:2})}),t.jsx("div",{children:j[a.state].label}),t.jsx("div",{className:"subtitle",children:a.label})]},u))})})]})},Tr=p.memo(Ar),Dr=E.div`
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
`,kr=()=>t.jsxs(Dr,{children:[t.jsx(Zt,{}),t.jsx(fr,{}),t.jsxs("div",{className:"two-cols",children:[t.jsx(br,{}),t.jsx(Tr,{})]})]}),Cr=p.memo(kr),Lr=()=>{function e(n,s){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(s))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[i,c]=s.split(":").map(Number),a=new Date;let u=new Date(a.getFullYear(),a.getMonth(),a.getDate());u.setHours(i,c,0,0),u<=a&&u.setDate(u.getDate()+1);const l=u.getTime()-a.getTime();return setTimeout(n,l)}const r=()=>{window.location.reload(!0)};d.useLayoutEffect(()=>{const n=[e(r,"00:00"),e(r,"03:00"),e(r,"06:00"),e(r,"09:00"),e(r,"12:00"),e(r,"15:00"),e(r,"18:00"),e(r,"21:00")];return()=>{n.forEach(s=>{s&&clearTimeout(s)})}},[])},Nr=E.div`
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
`;class W extends d.Component{constructor(r){super(r),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(r){return{hasError:!0}}componentDidCatch(r,n){this.setState({error:r,errorInfo:n}),b.error("ErrorBoundary caught an error:",r,n)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?t.jsxs(Nr,{children:[t.jsx("h2",{children:"Something went wrong"}),t.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,t.jsxs("div",{children:[t.jsx("button",{onClick:this.handleReset,children:"Try Again"}),t.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const _r=Pe`
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
`,Rr=E.div`
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
`;function Or(){return Lr(),t.jsx(W,{children:t.jsxs(Rr,{children:[t.jsx(_r,{}),t.jsxs("div",{className:"main",children:[t.jsx(W,{children:t.jsx(Vt,{})}),t.jsx(W,{children:t.jsx(Cr,{})})]}),t.jsx(ze,{})]})})}const Ir=Ge.createRoot(document.getElementById("root"));Ir.render(t.jsx(d.StrictMode,{children:t.jsx(W,{children:t.jsx(Or,{})})}));
