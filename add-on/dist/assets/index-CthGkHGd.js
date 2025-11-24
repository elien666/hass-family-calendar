import{d as b,j as n,I as S,R as d,l as ae,r as m,P as Se,W as _e,b as Ae,e as De,f as Ne,h as ke,i as Ce,k as Ie,m as Le,n as Oe,o as $e,T as Re,p as We,s as Me,y as Pe,q as He,L as Fe,t as Be}from"./react-vendor-F7aLjgMw.js";import{D as y}from"./date-vendor-BDx6lZXm.js";import{f as v}from"./vendor-CTb7xO-V.js";import{m as Ue,a as Ge,b as ze,c as Ve,d as Ye,e as Ke,f as oe,g as qe,h as Je,i as Ze,j as Xe,k as Qe,l as et,n as K,o as tt,p as st}from"./ui-vendor-DhGbN51c.js";import{a as w,q as nt,B as rt,h as it}from"./utils-vendor-DGVTXAQf.js";import{c as ce,a as le}from"./ha-vendor-CoU0AojH.js";import{t as at}from"./chart-vendor-ClWajKr-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const ot=b.div`
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
`,O=({visible:s,children:e,onClick:r,fullsize:t=!1})=>n.jsxs(ot,{className:v({visible:s}),onClick:r,children:[n.jsx("div",{className:"close",children:n.jsx(S,{path:Ue,size:2,onClick:r})}),n.jsx("div",{className:v("content",{fullsize:t}),onClick:i=>i.stopPropagation(),children:e})]}),E={log:(...s)=>{},error:(...s)=>{console.error(...s)},warn:(...s)=>{},debug:(...s)=>{}},de=s=>{const e={message:s.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1};return s.response?(e.status=s.response.status,e.responseData=s.response.data,e.url=s.config?.url||s.request?.responseURL||"Unknown URL",e.message=s.response.data?.message||s.response.statusText||`HTTP ${s.response.status} error`):s.request?(e.isNetworkError=!0,e.url=s.config?.url||"Unknown URL",e.message="Network error: No response received from server"):(e.message=s.message||"Request setup error",e.url=s.config?.url||"Unknown URL"),(s.code==="ECONNABORTED"||s.message?.includes("timeout"))&&(e.isTimeoutError=!0,e.message="Request timeout: The request took too long to complete"),e},ct=(s,e="")=>{const r=de(s),t=[];return e&&t.push(`[${e}]`),t.push("Axios API Error:"),t.push(r.message),r.url&&t.push(`URL: ${r.url}`),r.status&&t.push(`Status: ${r.status}`),r.responseData&&t.push("Response:",r.responseData),E.error(...t),r},D=s=>{const e=de(s);return e.isNetworkError?"":e.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":e.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":e.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":e.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":e.status>=500?"Serverfehler: Bitte später erneut versuchen":e.message||"Ein Fehler ist aufgetreten"},lt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BUTTONS_WS_URL:"ws://192.168.188.35:5678/",VITE_CALENDARS:'[{"name":"calendar.test"}]',VITE_ENTITY_DOORBELL:"binary_sensor.tuerklingel_person",VITE_ENTITY_DOORBELL_BUTTON:"button.haustur_unlatch_2",VITE_ENTITY_DRYER:"input_select.dryer_status",VITE_ENTITY_EVERYDAY_CALENDAR:"sensor.everyday_calendar",VITE_ENTITY_GARAGE_DOOR:"cover.garagentor",VITE_ENTITY_WASHING_MACHINE_NEW:"input_select.wasching_machine_neu_status",VITE_ENTITY_WASHING_MACHINE_OLD:"input_select.washing_machine_alt_status",VITE_GEOFOX_SECRET:"vKD)Lt6AtCKb",VITE_GEOFOX_USER:"BjoernGaworski-Dammann",VITE_HASS_ACCESS_TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3Zjg4NGYyZmM0OTU0ZGU5OGE3MDlmNzMwYWJkMzg1MCIsImlhdCI6MTc2Mzk3MDc3NiwiZXhwIjoyMDc5MzMwNzc2fQ.VlPVhfHUdRmLAzptk_3-E9eT7ygrSv-9qKeFZ-z_j1o",VITE_HASS_HOST:"http://localhost:7123",VITE_TELEGRAM_BOT_TOKEN:"370225026:AAGM5FD1JpvMnd1ShDkf9sx5Vr4g9rAF69Q",VITE_TELEGRAM_CHAT_ID:"195619890",VITE_WEATHER_API_KEY:"t34finKGz44m6qxPyUqfi2UnecLEa5QM3e9puJN3",VITE_WEATHER_LATITUDE:"53.570",VITE_WEATHER_LONGITUDE:"10.091"},ue=!1,x=(s,e=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[s]!==void 0){const t=window.APP_CONFIG[s];return t==="undefined"||t==="null"?e:t??e}return e}const r=lt[`VITE_${s}`];return s==="HASS_ACCESS_TOKEN"&&r!==void 0?e:r!==void 0?r:e},dt=(s,e=!1)=>{const r=x(s,e);return typeof r=="boolean"?r:typeof r=="string"?r==="true"||r==="1"||r==="yes":!!r},fe=x("HASS_HOST",""),A=x("HASS_ACCESS_TOKEN",""),ut=A&&typeof A=="string"&&A.trim()!==""&&A!=="undefined"&&A!=="null";ut?w.defaults.headers.common.Authorization=`Bearer ${A}`:delete w.defaults.headers.common.Authorization;w.interceptors.response.use(s=>s,s=>{const e=s.config?.url?`API Call: ${s.config.method?.toUpperCase()} ${s.config.url}`:"Axios Request";return ct(s,e),Promise.reject(s)});const he=x("WEATHER_API_KEY"),pe=x("WEATHER_LATITUDE"),me=x("WEATHER_LONGITUDE"),G=x("GEOFOX_SECRET"),ge=x("GEOFOX_USER");x("TELEGRAM_BOT_TOKEN");x("TELEGRAM_CHAT_ID");x("BUTTONS_WS_URL");const T=x("ENTITY_GARAGE_DOOR"),ft=x("ENTITY_WASHING_MACHINE_NEW"),ht=x("ENTITY_WASHING_MACHINE_OLD"),pt=x("ENTITY_DRYER"),C=x("ENTITY_DOORBELL"),q=x("ENTITY_DOORBELL_BUTTON"),z=x("ENTITY_EVERYDAY_CALENDAR"),mt=(()=>{const s=x("CALENDARS","[]");if(typeof s=="string")try{return JSON.parse(s)}catch{return[]}return Array.isArray(s)?s:[]})(),N=(s,e)=>x(s,void 0)!==void 0?dt(s,!1):!1,xe=N("ENABLE_WEATHER"),Ee=N("ENABLE_HVV");N("ENABLE_TELEGRAM");const ye=N("ENABLE_GARAGE"),we=N("ENABLE_LAUNDRY"),be=N("ENABLE_DOORBELL"),ve=N("ENABLE_EVERYDAY_CALENDAR");N("ENABLE_PHYSICAL_BUTTONS");const _=s=>{const e=s.startsWith("/")?s:`/${s}`;{if(typeof window<"u"&&window.location){const r=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${r}${e}`}return e}},I=z?_(`/api/states/${z}`):null,gt=()=>{const[s,e]=d.useState(null),[r,t]=d.useState(!1),i=ve&&z;return d.useEffect(()=>{!i||!I||w(I).then(a=>{a.data.attributes.store!==void 0?e(a.data.attributes.store):e([]),t(!1)}).catch(a=>{t(D(a)),e([])})},[i,I]),[s,r]},xt=s=>{I&&w.post(I,{state:new Date,attributes:{store:s}}).catch(e=>{E.error("Failed to store everyday calendar data:",e)})},J=b.div` 

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
`,Et=({on:s,month:e,day:r})=>{const[t,i]=s,a=t.indexOf(`${e}-${r}`),c=a>-1,o=()=>{i(c?t.toSpliced(a,1):[...t,`${e}-${r}`])};return n.jsx("div",{className:v("dot",{on:c}),onClick:()=>o()})},yt=()=>{if(!ve)return null;const s=new Date().getFullYear(),e=[];for(let o=1;o<13;o++){const u=new Date(s,o,0).getDate();for(let f=1;f<=u;f++)e.push({month:o,day:f})}const r=Array.from({length:31},(o,u)=>u+1),t=Array.from({length:12},(o,u)=>u+1),i=d.useState(void 0),[a,c]=gt();return d.useEffect(()=>{a!==null&&i[1](a)},[a]),d.useEffect(()=>{i[0]!==void 0&&xt(i[0])},[i[0]]),i[0]!==void 0?n.jsxs(J,{children:[n.jsx("h2",{children:"Jeden Tag ein bißchen"}),c!==!1&&n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[n.jsx("h3",{children:"Fehler!"}),n.jsx("div",{children:c instanceof Error?c.message:String(c)})]}),n.jsxs("div",{className:"calendar",children:[r.map((o,u)=>n.jsx("div",{style:{gridArea:`${o+1} / 1 / ${o+1} / 1`},children:o},u)),t.map((o,u)=>n.jsx("div",{style:{gridArea:`1 / ${o+1} / 1 / ${o+1}`},children:o},u)),e.map((o,u)=>n.jsx("div",{style:{gridArea:`${o.day+1} / ${o.month+1} / ${o.day+1} / ${o.month+1}`},children:n.jsx(Et,{on:i,month:o.month,day:o.day})},u))]})]}):n.jsx(J,{className:"loading",children:c!==!1?n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[n.jsx("h3",{children:"Fehler!"}),n.jsx("div",{children:c instanceof Error?c.message:String(c)})]}):n.jsx(ae,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},wt=b.div`
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
  }`,bt=()=>{const[s,e]=d.useState(y.now()),[r,t]=d.useState(!1),i=m.useCallback(()=>t(!0),[]),a=m.useCallback(()=>t(!1),[]);return d.useEffect(()=>{const c=setInterval(()=>e(y.now()),1e3);return()=>clearInterval(c)},[]),n.jsxs(n.Fragment,{children:[n.jsxs(wt,{onClick:i,children:[s.toFormat("HH"),n.jsx("span",{children:":"}),s.toFormat("mm")]}),n.jsx(O,{visible:r,onClick:a,fullsize:!0,children:n.jsx(yt,{})})]})},vt=m.memo(bt),M=C?_(`/api/states/${C}`):null,jt=()=>{const[s,e]=d.useState("off"),[r,t]=d.useState(!1),i=be&&C;return d.useEffect(()=>{!i||!M||w(M).then(a=>{e(a.data.state),t(!1)}).catch(a=>{t(D(a))})},[i,M]),d.useEffect(()=>{let a=null,c=!0;async function o(){if(!i||!C)return;let u;try{if(!ue){E.debug("Skipping WebSocket connection in production mode (using REST API only)");return}const f=fe||(typeof window<"u"?window.location.origin:""),l=A||"";if(!l){E.debug("Skipping WebSocket connection - no access token (using REST API only)");return}u=ce(f,l),c&&t(!1)}catch(f){c&&(E.error("Failed to create WebSocket auth:",f),t(f instanceof Error?f.message:String(f)));return}try{a=await le({auth:u});const f=l=>{c&&e(l.variables.trigger.to_state.state)};await a.subscribeMessage(f,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:C}})}catch(f){c&&(E.error("Failed to setup WebSocket connection:",f),t(f instanceof Error?f.message:String(f)))}}return o(),()=>{c=!1,a&&a.close()}},[i]),[s,r]},Tt=()=>{q&&w.post(_("/api/services/button/press"),{entity_id:q}).catch(s=>{E.error("Failed to unlatch front door:",s)})};class k{constructor(e){this.retryPause=2e3,this.conf=e,this.state="getting_codecs",this.restartTimeout=null,this.pc=null,this.offerData=null,this.sessionUrl=null,this.queuedCandidates=[],this.#p()}close(){this.state="closed",this.pc!==null&&this.pc.close(),this.restartTimeout!==null&&clearTimeout(this.restartTimeout)}static#i(e,r){return new Promise(t=>{const i=new RTCPeerConnection({iceServers:[]}),a="audio";let c="";i.addTransceiver(a,{direction:"recvonly"}),i.createOffer().then(o=>{if(o.sdp===void 0)throw new Error("SDP not present");if(o.sdp.includes(` ${e}`))throw new Error("already present");const u=o.sdp.split(`m=${a}`),f=u.slice(1).map(h=>h.split(`\r
`)[0].split(" ").slice(3)).reduce((h,p)=>[...h,...p],[]);c=this.#e(f);const l=u[1].split(`\r
`);return l[0]+=` ${c}`,l.splice(l.length-1,0,`a=rtpmap:${c} ${e}`),r!==void 0&&l.splice(l.length-1,0,`a=fmtp:${c} ${r}`),u[1]=l.join(`\r
`),o.sdp=u.join(`m=${a}`),i.setLocalDescription(o)}).then(()=>i.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:`v=0\r
o=- 6539324223450680508 0 IN IP4 0.0.0.0\r
s=-\r
t=0 0\r
a=fingerprint:sha-256 0D:9F:78:15:42:B5:4B:E6:E2:94:3E:5B:37:78:E1:4B:54:59:A3:36:3A:E5:05:EB:27:EE:8F:D2:2D:41:29:25\r
m=${a} 9 UDP/TLS/RTP/SAVPF ${c}\r
c=IN IP4 0.0.0.0\r
a=ice-pwd:7c3bf4770007e7432ee4ea4d697db675\r
a=ice-ufrag:29e036dc\r
a=sendonly\r
a=rtcp-mux\r
a=rtpmap:${c} ${e}\r
`+(r!==void 0?`a=fmtp:${c} ${r}\r
`:"")}))).then(()=>{t(!0)}).catch(()=>{t(!1)}).finally(()=>{i.close()})})}static#s(e){return JSON.parse(`"${e}"`)}static#a(e){return e!==null?e.split(", ").map(r=>{const t=r.match(/^<(.+?)>; rel="ice-server"(; username="(.*?)"; credential="(.*?)"; credential-type="password")?/i),i={urls:[t[1]]};return t[3]!==void 0&&(i.username=this.#s(t[3]),i.credential=this.#s(t[4]),i.credentialType="password"),i}):[]}static#o(e){const r={iceUfrag:"",icePwd:"",medias:[]};for(const t of e.split(`\r
`))t.startsWith("m=")?r.medias.push(t.slice(2)):r.iceUfrag===""&&t.startsWith("a=ice-ufrag:")?r.iceUfrag=t.slice(12):r.icePwd===""&&t.startsWith("a=ice-pwd:")&&(r.icePwd=t.slice(10));return r}static#e(e){for(let r=30;r<=127;r++)if((r<=63||r>=96)&&!e.includes(r.toString())){const t=r.toString();return e.push(t),t}throw Error("unable to find a free payload type")}static#c(e,r){const t=r.split(`\r
`);let i=this.#e(e);return t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} PCMU/8000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),i=this.#e(e),t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} PCMA/8000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),t.join(`\r
`)}static#l(e,r){const t=r.split(`\r
`);let i=this.#e(e);return t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} multiopus/48000/3`),t.splice(t.length-1,0,`a=fmtp:${i} channel_mapping=0,2,1;num_streams=2;coupled_streams=1`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),i=this.#e(e),t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} multiopus/48000/4`),t.splice(t.length-1,0,`a=fmtp:${i} channel_mapping=0,1,2,3;num_streams=2;coupled_streams=2`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),i=this.#e(e),t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} multiopus/48000/5`),t.splice(t.length-1,0,`a=fmtp:${i} channel_mapping=0,4,1,2,3;num_streams=3;coupled_streams=2`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),i=this.#e(e),t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} multiopus/48000/6`),t.splice(t.length-1,0,`a=fmtp:${i} channel_mapping=0,4,1,2,3,5;num_streams=4;coupled_streams=2`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),i=this.#e(e),t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} multiopus/48000/7`),t.splice(t.length-1,0,`a=fmtp:${i} channel_mapping=0,4,1,2,3,5,6;num_streams=4;coupled_streams=4`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),i=this.#e(e),t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} multiopus/48000/8`),t.splice(t.length-1,0,`a=fmtp:${i} channel_mapping=0,6,1,4,5,2,3,7;num_streams=5;coupled_streams=4`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),t.join(`\r
`)}static#d(e,r){const t=r.split(`\r
`);let i=this.#e(e);return t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} L16/8000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),i=this.#e(e),t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} L16/16000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),i=this.#e(e),t[0]+=` ${i}`,t.splice(t.length-1,0,`a=rtpmap:${i} L16/48000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${i} transport-cc`),t.join(`\r
`)}static#u(e){let r="";const t=e.split(`\r
`);for(let i=0;i<t.length;i++)if(t[i].startsWith("a=rtpmap:")&&t[i].toLowerCase().includes("opus/")){r=t[i].slice(9).split(" ")[0];break}if(r==="")return e;for(let i=0;i<t.length;i++)t[i].startsWith(`a=fmtp:${r} `)&&(t[i].includes("stereo")||(t[i]+=";stereo=1"),t[i].includes("sprop-stereo")||(t[i]+=";sprop-stereo=1"));return t.join(`\r
`)}static#f(e,r){const t=e.split("m="),i=t.slice(1).map(a=>a.split(`\r
`)[0].split(" ").slice(3)).reduce((a,c)=>[...a,...c],[]);for(let a=1;a<t.length;a++)if(t[a].startsWith("audio")){t[a]=this.#u(t[a]),r.includes("pcma/8000/2")&&(t[a]=this.#c(i,t[a])),r.includes("multiopus/48000/6")&&(t[a]=this.#l(i,t[a])),r.includes("L16/48000/2")&&(t[a]=this.#d(i,t[a]));break}return t.join("m=")}static#h(e,r){const t={};for(const c of r){const o=c.sdpMLineIndex;t[o]===void 0&&(t[o]=[]),t[o].push(c)}let i=`a=ice-ufrag:${e.iceUfrag}\r
a=ice-pwd:${e.icePwd}\r
`,a=0;for(const c of e.medias){if(t[a]!==void 0){i+=`m=${c}\r
a=mid:${a}\r
`;for(const o of t[a])i+=`a=${o.candidate}\r
`}a++}return i}#t(e){this.state==="running"?(this.pc!==null&&(this.pc.close(),this.pc=null),this.offerData=null,this.sessionUrl!==null&&(fetch(this.sessionUrl,{method:"DELETE"}),this.sessionUrl=null),this.queuedCandidates=[],this.state="restarting",this.restartTimeout=window.setTimeout(()=>{this.restartTimeout=null,this.state="running",this.#n()},this.retryPause),this.conf.onError!==void 0&&this.conf.onError(`${e}, retrying in some seconds`)):this.state==="getting_codecs"&&(this.state="failed",this.conf.onError!==void 0&&this.conf.onError(e))}#p(){Promise.all([["pcma/8000/2"],["multiopus/48000/6","channel_mapping=0,4,1,2,3,5;num_streams=4;coupled_streams=2"],["L16/48000/2"]].map(e=>k.#i(e[0],e[1]).then(r=>r?e[0]:!1))).then(e=>e.filter(r=>r!==!1)).then(e=>{if(this.state!=="getting_codecs")throw new Error("closed");this.nonAdvertisedCodecs=e,this.state="running",this.#n()}).catch(e=>{this.#t(e)})}#n(){this.#m().then(e=>this.#g(e)).then(e=>this.#x(e)).then(e=>this.#E(e)).catch(e=>{this.#t(e.toString())})}#m(){return fetch(this.conf.url,{method:"OPTIONS"}).then(e=>k.#a(e.headers.get("Link")))}#g(e){if(this.state!=="running")throw new Error("closed");this.pc=new RTCPeerConnection({iceServers:e,sdpSemantics:"unified-plan"});const r="recvonly";return this.pc.addTransceiver("video",{direction:r}),this.pc.addTransceiver("audio",{direction:r}),this.pc.onicecandidate=t=>this.#y(t),this.pc.onconnectionstatechange=()=>this.#w(),this.pc.ontrack=t=>this.#b(t),this.pc.createOffer().then(t=>(t.sdp=k.#f(t.sdp,this.nonAdvertisedCodecs),this.offerData=k.#o(t.sdp),this.pc.setLocalDescription(t).then(()=>t.sdp)))}#x(e){if(this.state!=="running")throw new Error("closed");return fetch(this.conf.url,{method:"POST",headers:{"Content-Type":"application/sdp"},body:e}).then(r=>{switch(r.status){case 201:break;case 404:throw new Error("stream not found");case 400:return r.json().then(t=>{throw new Error(t.error)});default:throw new Error(`bad status code ${r.status}`)}return this.sessionUrl=new URL(r.headers.get("location"),this.conf.url).toString(),r.text()})}#E(e){if(this.state!=="running")throw new Error("closed");return this.pc.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:e})).then(()=>{this.state==="running"&&this.queuedCandidates.length!==0&&(this.#r(this.queuedCandidates),this.queuedCandidates=[])})}#y(e){this.state==="running"&&e.candidate!==null&&(this.sessionUrl===null?this.queuedCandidates.push(e.candidate):this.#r([e.candidate]))}#r(e){fetch(this.sessionUrl,{method:"PATCH",headers:{"Content-Type":"application/trickle-ice-sdpfrag","If-Match":"*"},body:k.#h(this.offerData,e)}).then(r=>{switch(r.status){case 204:break;case 404:throw new Error("stream not found");default:throw new Error(`bad status code ${r.status}`)}}).catch(r=>{this.#t(r.toString())})}#w(){this.state==="running"&&(this.pc.connectionState==="failed"||this.pc.connectionState==="closed")&&this.#t("peer connection closed")}#b(e){this.conf.onTrack!==void 0&&this.conf.onTrack(e)}}const St=(s,e,r)=>{const[t,i]=d.useState(void 0);d.useEffect(()=>{if(r&&r.current&&!t&&e){const a=new k({url:s,onError:c=>{E.error("Cannot load WHEP stream: ",s,c)},onTrack:c=>{r.current.srcObject=c.streams[0],i(a)}});return()=>{a&&a.close()}}},[s,e,t]),d.useEffect(()=>{!e&&t&&(t.close(),i(void 0))},[e,t])},P=({src:s,show:e,...r})=>{const t=d.useRef();return St(s,e,t),n.jsx("video",{ref:t,...r})},Z=45e3,_t=b.div`

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
`,At=()=>{if(!be)return null;const[s,e]=d.useState(!1),[r,t]=jt(),[i,a]=d.useState(void 0),[c,o]=d.useState(100),[u,f]=d.useState("0");d.useEffect(()=>{if(r==="off"&&s){const g=window.setTimeout(()=>{e(!1),a(void 0)},Z);return a(g),f(Z+"ms"),o(0),()=>{g&&window.clearTimeout(g)}}else r==="on"&&(f(0),o(100),e(!0))},[r,s]),d.useEffect(()=>{r==="on"&&i!==void 0&&(window.clearTimeout(i),f(0),o(100),a(void 0))},[i,r]);const[l,h]=d.useState(!1),p=()=>{Tt(),h(!0)};return d.useEffect(()=>{if(l){const g=setTimeout(()=>h(!1),1e3);return()=>clearTimeout(g)}},[l]),n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>e(g=>!g),children:"CCTV"}),n.jsx(O,{visible:s,onClick:()=>e(!1),fullsize:!0,children:n.jsxs(_t,{children:[n.jsx(Se,{completed:c,height:10,bgColor:i===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:u,transitionTimingFunction:"linear"}),t!==!1&&n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[n.jsx("h3",{children:"Fehler!"}),n.jsx("div",{children:t instanceof Error?t.message:String(t)})]}),n.jsxs("div",{className:"grid",style:{display:s?"flex":"none"},children:[n.jsx("div",{onClick:()=>p(),children:n.jsx(P,{src:"http://192.168.188.10:8889/tuerklingel_sub/whep",show:s,muted:!0,controls:!1,autoPlay:!0,width:"360",height:"480"})}),n.jsxs("div",{onClick:()=>p(),children:[n.jsx(P,{src:"http://192.168.188.10:8889/eingang/whep",show:s,muted:!0,controls:!1,autoPlay:!0,width:"100%"}),n.jsx(P,{src:"http://192.168.188.10:8889/weg/whep",show:s,muted:!0,controls:!1,autoPlay:!0,width:"100%",height:"240px"})]})]}),l&&n.jsx("div",{className:"open-door",children:"Tür öffnet sich"})]})})]})},Dt=b.div`
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

`,Nt=({nextWeek:s,previousWeek:e,startWeekWithToday:r})=>n.jsxs(Dt,{children:[n.jsxs("div",{className:"buttons",children:[n.jsx(S,{path:Ge,size:"32px",color:"#ffffff",onClick:e}),n.jsx(S,{path:ze,size:"32px",color:"#ffffff",onClick:s}),n.jsx("button",{onClick:r,children:"Today"}),n.jsx(At,{})]}),n.jsx(vt,{}),n.jsx(S,{path:Ve,size:"32px",color:"#ffffff",className:v("indicator")})]}),kt=m.memo(Nt),Ct=6e4,Y=(s=Ct,e=void 0)=>{const[r,t]=d.useState(!0);return d.useEffect(()=>{const i=setInterval(()=>{t(a=>!a)},s);return()=>{clearInterval(i)}},[s,e]),r},It=s=>_(`/api/calendars/${s}`),Lt=(s,e)=>`${It(s)}?${nt.stringify(e)}`,Ot={mdiDelete:Ke,mdiCake:Ye},$t=s=>{if(!s||typeof s!="string")return;const e=s.startsWith("mdi")?s:`mdi${s.charAt(0).toUpperCase()+s.slice(1)}`;return Ot[e]||void 0},Rt=mt.map(s=>({name:s.name,icon:$t(s.icon)})),Wt=(s,e,r,t)=>w(Lt(s.name,{start:e.toISO(),end:r.toISO()}),{timeout:1e4}).then(i=>{!i.data||!Array.isArray(i.data)||i.data.forEach(a=>{const c="dateTime"in a.start?y.fromISO(a.start.dateTime):y.fromSQL(a.start.date);let o;"dateTime"in a.end?o=Math.floor(y.fromISO(a.end.dateTime).diff(e,"days").as("days")):o=Math.floor(y.fromSQL(a.end.date).diff(e,"days").as("days"))-1;const u=Math.floor(c.diff(e,"days").as("days"));o>=t.length&&(o=t.length-1);const f="dateTime"in a.start?"events":"allDay";if(u>=0&&u<t.length)for(let l=u;l<=o;l++)t[l][f]=[...t[l][f],{...a,icon:s.icon}]})}).catch(i=>{throw i}),X=new Map,Mt=300*1e3,Pt=s=>s.toISODate(),Ht=(s,e,r,t,i,a)=>{const c=[0,1,2,3,4,5].map(h=>s.plus({days:h}).startOf("day"));c[6]=s.plus({days:6}).endOf("day");const o=Pt(s),u=X.get(o);if(u&&Date.now()-u.timestamp<Mt){r(u.data);return}const f=c.map(h=>({date:h,allDay:[],events:[]})),l=new AbortController;i.current&&i.current.abort(),i.current=l;try{t(!0);const h=Rt.map(p=>Wt(p,c[0],c[6],f));Promise.all(h).then(()=>{l.signal.aborted||(X.set(o,{data:f,timestamp:Date.now()}),r(f),a(!1))}).catch(p=>{l.signal.aborted||a(D(p))}).finally(()=>{l.signal.aborted||t(!1)})}catch(h){l.signal.aborted||(a(D(h)),t(!1))}},Q=[],Ft=s=>{const[e,r]=d.useState(Q),[t,i]=d.useState(!1),[a,c]=d.useState(!1),o=Y(6e4,"Calendar"),[u,f]=d.useState(null),l=m.useRef(null);return d.useEffect(()=>(s!==void 0&&((u===null||!u.equals(s))&&(r(Q),f(s)),Ht(s,e,r,i,l,c)),()=>{l.current&&l.current.abort()}),[s,o]),[e,a]};function L(s){const[e,r]=d.useState(!1);function t({key:a}){a===s&&r(!0)}const i=({key:a})=>{a===s&&r(!1)};return d.useEffect(()=>(window.addEventListener("keydown",t),window.addEventListener("keyup",i),()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",i)}),[s]),e}const Bt=()=>{let s=new Date,r=(s.getDay()+6)%7,t=new Date(s.setDate(s.getDate()-r));return y.fromJSDate(t)},Ut=s=>{const e=()=>s(o=>o.plus({days:7})),r=L("ArrowRight");d.useEffect(()=>{r&&e()},[r]);const t=()=>s(o=>o.minus({days:7})),i=L("ArrowLeft");d.useEffect(()=>{i&&t()},[i]);const a=()=>s(Bt()),c=L("t");return d.useEffect(()=>{c&&a()},[c]),{nextWeek:e,previousWeek:t,startWeekWithToday:a}},Gt=s=>{const[e,r]=m.useState(0),[t,i]=m.useState(0),a=50;return{onTouchStart:f=>{i(0),r(f.targetTouches[0].clientX)},onTouchMove:f=>i(f.targetTouches[0].clientX),onTouchEnd:()=>{if(!e||!t)return;const f=e-t,l=f>a,h=f<-a;l&&s.onSwipedLeft(),h&&s.onSwipedRight()}}},ee=s=>y.fromISO(s).toLocaleString(y.TIME_24_SIMPLE),H=s=>s.toFormat("c")>=6,F=s=>s.hasSame(y.now(),"day"),zt=b.div`

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
`,Vt=()=>{const[s,e]=d.useState(void 0),[r,t]=Ft(s),{nextWeek:i,previousWeek:a,startWeekWithToday:c}=Ut(e);d.useEffect(()=>{c()},[]);const o=Gt({onSwipedLeft:()=>i(),onSwipedRight:()=>a()}),u=m.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),f=m.useMemo(()=>r.slice(0,7),[r]);return n.jsxs(zt,{...o,children:[n.jsx(kt,{nextWeek:i,previousWeek:a,startWeekWithToday:c}),n.jsxs("div",{className:"schedule",children:[f.map((l,h)=>n.jsx("div",{className:v({weekend:H(l.date),today:F(l.date)},"caption"),children:n.jsx("h2",{children:l.date.toLocaleString(u)})},h)),f.map((l,h)=>n.jsx("div",{className:v("allDayRow",{weekend:H(l.date),today:F(l.date)}),children:l.allDay.map((p,g)=>n.jsx("div",{className:"allDayEvent",children:p.summary},g))},h)),f.map((l,h)=>n.jsx("div",{className:v("eventRow",{weekend:H(l.date),today:F(l.date)}),children:l.events.map((p,g)=>n.jsxs("div",{className:"event",children:[n.jsx("div",{children:p.summary}),n.jsxs("h3",{children:[p.icon&&n.jsx(S,{path:p.icon,size:"1rem",color:"#ffffff"}),ee(p.start.dateTime)," - ",ee(p.end.dateTime)]})]},g))},h))]}),r.length===0&&n.jsx("div",{className:"loading",children:t!==!1?n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[n.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),n.jsx("div",{children:t instanceof Error?t.message:String(t)})]}):n.jsx(ae,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),t!==!1&&r.length>0&&n.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:n.jsxs("div",{children:["Warnung: ",t instanceof Error?t.message:String(t)]})})]})},W={"clear-day":{icon:$e,label:"Klar",color:"#eeeef5"},"clear-night":{icon:Oe,label:"Klar",color:"#eeeef5"},rain:{icon:Le,label:"Regen",color:"#80a5d6"},snow:{icon:Ie,label:"Schnee",color:"#8c82ce"},sleet:{icon:Ce,label:"Graupel",color:"#aba4db"},wind:{icon:ke,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:Ne,label:"Neblig",color:"#d5dae2"},cloudy:{icon:De,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:Ae,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:_e,label:"Teils bewölkt",color:"#d5dae2"}},Yt=()=>`./forecast/${he}/${pe},${me}?&units=si&exclude=minutely`,Kt=s=>{const[e,r]=d.useState([]),[t,i]=d.useState(!1),a=Y(6e4*10,"Weather"),c=xe&&he&&pe&&me;return d.useEffect(()=>{c&&w(Yt()).then(o=>{r(o.data),i(!1)}).catch(o=>{i(D(o))}).finally(()=>{})},[a,s,c]),[e,t]},qt=We(Me),te=b.div`

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
`,se=m.memo(({data:s,daily:e=!1})=>n.jsxs("div",{children:[n.jsxs("div",{children:[!e&&y.fromSeconds(s.time).toLocaleString(y.TIME_24_SIMPLE),e&&y.fromSeconds(s.time).setLocale("de").toFormat("ccc, d.M")]}),n.jsx("div",{children:n.jsx(V,{icon:s.icon})}),n.jsx("div",{children:n.jsxs("strong",{children:[!e&&n.jsxs(n.Fragment,{children:[Math.round(s.temperature),"°"]}),e&&n.jsxs(n.Fragment,{children:[Math.round(s.temperatureHigh),"° / ",Math.round(s.temperatureLow),"°"]})]})}),n.jsxs("div",{children:[Math.round(s.precipProbability*100)," %"]}),n.jsxs("div",{children:[(s.precipIntensity*100).toFixed(1)," mm"]})]})),Jt=s=>!s||!s.hourly||!s.hourly.data?[]:s.hourly.data.slice(0,24).map(e=>({color:W[e.icon]?.color||"#ffffff",text:W[e.icon]?.label||"",annotation:`${Math.round(e.temperature)}°`,time:e.time})),V=({icon:s})=>{const e=W[s];return n.jsx(e.icon,{size:60,color:"#ffffff"})},Zt=({pin:s})=>{if(!xe)return null;const[e,r]=Kt(),[t,i]=d.useState(!1),a=L("w"),c=d.useRef(),o=m.useCallback(()=>i(p=>!p),[]),u=m.useCallback(()=>i(!0),[]),f=m.useMemo(()=>Jt(e),[e]),l=m.useMemo(()=>[3,6,9,12],[]),h=m.useMemo(()=>[1,2,3,4,5,6,7],[]);return d.useEffect(()=>{if(!c.current||!e||!e.hourly||f.length===0)return;const p={timezone:"Europe/Berlin"},g=document.createElement("div");return c.current.textContent="",c.current.appendChild(g),at(g,f,p),()=>{c.current&&(c.current.textContent="")}},[f]),d.useEffect(()=>{(a||s===17)&&o()},[a,s]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?r!==!1?n.jsx(te,{children:n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[n.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),n.jsx("div",{children:r instanceof Error?r.message:String(r)})]})}):"":n.jsxs(te,{children:[n.jsxs("div",{onClick:u,children:[n.jsxs("div",{className:"headline",children:[n.jsx(V,{icon:e.currently.icon}),n.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),n.jsx("div",{className:"forecast",children:l.map((p,g)=>n.jsx(se,{data:e.hourly.data[p]},g))})]}),n.jsx(O,{visible:t,onClick:o,children:n.jsxs("div",{className:"full-weather",children:[r!==!1&&n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[n.jsx("h3",{children:"Fehler!"}),n.jsx("div",{children:r instanceof Error?r.message:String(r)})]}),n.jsxs("div",{className:"detail-header",children:[n.jsx("div",{children:n.jsxs("div",{className:"headline",children:[n.jsx(V,{icon:e.daily.data[0].icon}),n.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",n.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),n.jsx("h3",{children:W[e.daily.data[0].icon].label})]}),n.jsx("div",{className:"values",children:n.jsxs("div",{className:"table",children:[n.jsxs("div",{children:[n.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),n.jsxs("div",{children:[n.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),n.jsxs("div",{children:[n.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),n.jsxs("div",{children:[n.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),n.jsxs("div",{children:[n.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),n.jsxs("div",{children:[n.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),n.jsxs("div",{children:[n.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]}),n.jsxs("div",{children:[n.jsx("span",{children:"Windgeschwindigkeit:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]})]})}),n.jsx("h3",{children:"Die nächsten 24 Stunden"}),n.jsx("div",{ref:c}),n.jsx("h3",{children:"Die nächste Woche"}),n.jsx("div",{className:"forecast",children:h.map((p,g)=>n.jsx(se,{data:e.daily.data[p],daily:!0},g))}),n.jsxs("div",{className:"info",children:["Aktualisiert ",n.jsx(Re,{date:y.fromSeconds(e.currently.time).toJSDate(),formatter:qt})]})]})})]})},Xt=m.memo(Zt);async function Qt(s){if(!G)throw new Error("GEOFOX_SECRET is not configured");return rt.stringify(it(JSON.stringify(s),G))}const es="AK Wandsbek",ts="Hamburg",ss="Master:62016",ns="STATION",rs={x:10.091341,y:53.568702},is={name:es,city:ts,id:ss,type:ns,coordinate:rs},$={departureList:"departureList",checkName:"checkName"},as=async(s,e)=>w({method:"post",url:`./gti/public/${s}`,data:e,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":ge,"geofox-auth-signature":await Qt(e),Authorization:void 0}}),ne=(s,e)=>s.realtimeOffset-e.realtimeOffset,os=s=>{const e=s.departures.map(r=>({line:r.line.name,direction:r.line.direction,timeOffset:r.timeOffset,delay:r.delay?r.delay:"0",directionId:r.directionId,realtimeOffset:r.timeOffset+(r.delay?r.delay:0)/60}));return{from:e.filter(r=>r.directionId===1).slice(0,3).sort(ne),to:e.filter(r=>r.directionId===6).slice(0,3).sort(ne)}},cs=s=>{const[e,r]=d.useState([]),[t,i]=d.useState(!1),a=Y(6e4),c=Ee&&ge&&G;return d.useEffect(()=>{if(!c||!(s in $))return;let o={version:51};switch(s){case $.checkName:o={...o,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case $.departureList:const u=y.now();o={...o,station:is,time:{date:u.toFormat("dd.MM.yyyy"),time:u.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:o=void 0}as(s,o).then(u=>{r(os(u.data)),i(!1)}).catch(u=>{i(D(u))})},[s,a,c]),[e,t]},ls=b.div`
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
`,re=m.memo(({line:s,direction:e,realtimeOffset:r})=>n.jsxs("div",{className:"departure",children:[n.jsx("div",{children:n.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${s}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${s}`})}),n.jsx("div",{children:r===0?"Jetzt":n.jsxs(n.Fragment,{children:["in ",r," '"]})})]})),ds=()=>{if(!Ee)return null;const[s,e]=cs($.departureList);return n.jsxs(ls,{children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:n.jsxs("g",{transform:"translate(10368 -6294)",children:[n.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),n.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),e!==!1?n.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[n.jsx("h3",{children:"Fehler!"}),n.jsx("div",{children:e instanceof Error?e.message:String(e)})]}):n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:"→ Wandsbek"}),s.to?.map((r,t)=>n.jsx(re,{line:r.line,direction:r.direction,realtimeOffset:r.realtimeOffset},t)),n.jsx("h3",{children:"→ Stadtauswärts"}),s.from?.map((r,t)=>n.jsx(re,{line:r.line,direction:r.direction,realtimeOffset:r.realtimeOffset},t))]})]})},us=m.memo(ds),fs=()=>{const[s,e]=d.useState("closed"),[r,t]=d.useState(!1),i=ye&&T,a=T?_(`/api/states/${T}`):null;return d.useEffect(()=>{!i||!a||w(a).then(c=>{e(c.data.state),t(!1)}).catch(c=>{t(D(c))})},[i,a]),d.useEffect(()=>{let c=null,o=!0;async function u(){if(!i||!T)return;let f;try{if(!ue){E.debug("Skipping WebSocket connection in production mode (using REST API only)");return}const l=fe||(typeof window<"u"?window.location.origin:""),h=A||"";if(!h){E.debug("Skipping WebSocket connection - no access token (using REST API only)");return}f=ce(l,h),o&&t(!1)}catch(l){o&&(E.error("Failed to create WebSocket auth:",l),t(l instanceof Error?l.message:String(l)));return}try{c=await le({auth:f});const l=h=>{o&&e(h.variables.trigger.to_state.state)};await c.subscribeMessage(l,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:T}})}catch(l){o&&(E.error("Failed to setup WebSocket connection:",l),t(l instanceof Error?l.message:String(l)))}}return u(),()=>{o=!1,c&&c.close()}},[i]),[s,r]},hs=s=>{if(!T)return;s(!0);const e=setTimeout(()=>s(!1),3e3);w.post(_("/api/services/cover/toggle"),{entity_id:T}).catch(r=>{E.error("Failed to toggle garage door:",r)}).finally(()=>{clearTimeout(e),s(!1)})},ps=s=>{if(!T)return;s(!0);const e=setTimeout(()=>s(!1),3e3);w.post(_("/api/services/cover/open_cover"),{entity_id:T}).catch(r=>{E.error("Failed to open garage door:",r)}).finally(()=>{clearTimeout(e),s(!1)})},ms=s=>{if(!T)return;s(!0);const e=setTimeout(()=>s(!1),3e3);w.post(_("/api/services/cover/close_cover"),{entity_id:T}).catch(r=>{E.error("Failed to close garage door:",r)}).finally(()=>{clearTimeout(e),s(!1)})},gs=b.div`
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
`,je=b.div`
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
`,ie=s=>({unknown:{label:"In Bewegung oder halb-offen",icon:Qe},open:{label:"Offen",icon:Xe},closed:{label:"Geschlossen",icon:Ze},opening:{label:"Öffnet",icon:Je},closing:{label:"Schließt",icon:qe}})[s]||{label:"Unavailable",icon:et},Te=({garageDoor:s,animate:e=!1})=>n.jsxs(je,{className:v({animate:e}),children:[n.jsx(S,{path:ie(s).icon,size:"2rem",color:"#ffffff"}),n.jsx("span",{children:ie(s).label})]}),xs=(s,e)=>Pe.promise(s,{pending:"Garagentor ist in Bewegung …",success:{render({data:r}){return n.jsx(Te,{garageDoor:r})}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark"}),Es=()=>{if(!ye)return null;const[s,e]=fs(),[r,t]=d.useState(void 0),[i,a]=d.useState(!1),[c,o]=d.useState(!1);d.useEffect(()=>{if(s==="unknown"||s==="opening"||s==="closing"){if(!r){const p=new Promise(g=>{t({resolve:g})});xs(p)}}else r&&(r.resolve(s),t(void 0))},[s]);const u=L("g");d.useEffect(()=>{u&&e===!1&&hs(a)},[u,e]);const f=m.useCallback(h=>{if(e===!1)switch(o(!1),h){case"open":ps(a);break;case"close":ms(a);break}},[a,e]),l=m.useCallback(()=>{e===!1&&o(!0)},[e]);return n.jsxs(gs,{className:v({disabled:e!==!1}),children:[n.jsx("h2",{children:"Garage"}),n.jsx("div",{className:"status",onClick:l,children:e!==!1?n.jsxs(je,{children:[n.jsx(S,{path:oe,size:"2rem",color:"#f85a5a"}),n.jsx("span",{children:"Fehler"})]}):n.jsx(Te,{garageDoor:s,animate:i})}),n.jsx(O,{visible:c&&e===!1,onClick:()=>o(!1),children:n.jsxs("div",{className:"controls",children:[n.jsx("div",{onClick:()=>f("open"),children:"Öffnen"}),n.jsx("div",{onClick:()=>f("close"),children:"Schließen"})]})})]})},ys=m.memo(Es),ws=s=>s?_(`/api/states/${s}`):null,j={done:{label:"Fertig",animate:!1,icon:st},off:{label:"Aus",animate:!1,icon:tt},standby:{label:"Standby",animate:!1,icon:K},running:{label:"Läuft …",animate:!0,icon:K}},B={off:0,standby:2,running:16,done:256},bs=()=>{const[s,e]=U(ft),[r,t]=U(ht),[i,a]=U(pt),[c,o]=d.useState(j.off),[u,f]=d.useState(!1);return d.useEffect(()=>{f(e!==!1||t!==!1||a!==!1?e||t||a:!1)},[e,t,a]),d.useEffect(()=>{const l=B[s]+B[r]+B[i];l===0?o(j.off):l<16?o(j.standby):l<256?o(j.running):l%256===0?o(j.done):l%256%16===0?o(j.running):l%256%2===0?o(j.done):o(j.running)},[r,s,i]),[c,[{label:"Neue Waschmaschine",state:s},{label:"Alte Waschmaschine",state:r},{label:"Trockner",state:i}],u]},U=s=>{const[e,r]=d.useState("off"),[t,i]=d.useState(!1),a=we&&s,c=ws(s);return d.useEffect(()=>{!a||!c||w(c).then(o=>{r(o.data.state),i(!1)}).catch(o=>{i(D(o))})},[s,a,c]),d.useEffect(()=>{async function o(){}return o(),()=>{}},[s,a]),[e,t]},vs=b.div`
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
    grid-template-columns: repeat(3, 1fr);
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
`,js=()=>{if(!we)return null;const[s,e,r]=bs(),[t,i]=d.useState(!1),a=m.useCallback(()=>{r===!1&&i(!0)},[r]),c=m.useCallback(()=>i(!1),[]);return n.jsxs(vs,{className:v({disabled:r!==!1}),children:[n.jsx("h2",{children:"Wäsche"}),n.jsx("div",{className:"status",onClick:a,children:r!==!1?n.jsxs(n.Fragment,{children:[n.jsx(S,{path:oe,size:"2rem",color:"#f85a5a"}),n.jsx("span",{children:"Fehler"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:v({animate:s.animate}),children:n.jsx(S,{path:s.icon,size:"2rem",color:"#ffffff"})}),n.jsx("span",{children:s.label})]})}),n.jsx(O,{visible:t&&r===!1,onClick:c,children:n.jsx("div",{className:"states",children:e.map((o,u)=>n.jsxs("div",{children:[n.jsx("div",{className:v({animate:j[o.state].animate}),children:n.jsx(S,{path:j[o.state].icon,size:2})}),n.jsx("div",{children:j[o.state].label}),n.jsx("div",{className:"subtitle",children:o.label})]},u))})})]})},Ts=m.memo(js),Ss=b.div`
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
`,_s=({pin:s})=>n.jsxs(Ss,{children:[n.jsx(Xt,{pin:s}),n.jsx(us,{}),n.jsxs("div",{className:"two-cols",children:[n.jsx(ys,{}),n.jsx(Ts,{})]})]}),As=m.memo(_s),Ds=()=>{function s(r,t){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(t))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[a,c]=t.split(":").map(Number),o=new Date;let u=new Date(o.getFullYear(),o.getMonth(),o.getDate());u.setHours(a,c,0,0),u<=o&&u.setDate(u.getDate()+1);const f=u.getTime()-o.getTime();return setTimeout(r,f)}const e=()=>{window.location.reload(!0)};d.useLayoutEffect(()=>{const r=[s(e,"00:00"),s(e,"03:00"),s(e,"06:00"),s(e,"09:00"),s(e,"12:00"),s(e,"15:00"),s(e,"18:00"),s(e,"21:00")];return()=>{r.forEach(t=>{t&&clearTimeout(t)})}},[])},Ns=b.div`
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
`;class R extends d.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,r){this.setState({error:e,errorInfo:r}),E.error("ErrorBoundary caught an error:",e,r)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?n.jsxs(Ns,{children:[n.jsx("h2",{children:"Something went wrong"}),n.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,n.jsxs("div",{children:[n.jsx("button",{onClick:this.handleReset,children:"Try Again"}),n.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const ks=He`
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
`,Cs=b.div`
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
`;function Is(){return Ds(),n.jsx(R,{children:n.jsxs(Cs,{children:[n.jsx(ks,{}),n.jsxs("div",{className:"main",children:[n.jsx(R,{children:n.jsx(Vt,{})}),n.jsx(R,{children:n.jsx(As,{pin:void 0})})]}),n.jsx(Fe,{})]})})}const Ls=Be.createRoot(document.getElementById("root"));Ls.render(n.jsx(d.StrictMode,{children:n.jsx(R,{children:n.jsx(Is,{})})}));
