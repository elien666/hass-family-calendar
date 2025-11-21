import{d as y,j as r,I as S,R as d,l as de,r as m,P as Ee,W as ye,b as we,e as be,f as ve,h as Te,i as je,k as _e,m as Se,n as De,o as Ae,T as Ne,p as Ce,s as Ie,y as ke,q as Le,L as Oe,t as $e}from"./react-vendor-F7aLjgMw.js";import{D as E}from"./date-vendor-BDx6lZXm.js";import{f as j}from"./vendor-CTb7xO-V.js";import{m as Re,a as Me,b as We,c as He,d as O,e as Pe,f as Be,g as Ge,h as ze,i as Ye,j as Fe,k as Ue,l as Z,n as Ve,o as Ke}from"./ui-vendor-_Qg8MLA4.js";import{a as x,q as qe,B as Je,h as Qe}from"./utils-vendor-DGVTXAQf.js";import{c as K,a as q}from"./ha-vendor-CoU0AojH.js";import{t as Xe}from"./chart-vendor-ClWajKr-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const Ze=y.div`
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
`,L=({visible:n,children:e,onClick:i,fullsize:t=!1})=>r.jsxs(Ze,{className:j({visible:n}),onClick:i,children:[r.jsx("div",{className:"close",children:r.jsx(S,{path:Re,size:2,onClick:i})}),r.jsx("div",{className:j("content",{fullsize:t}),onClick:s=>s.stopPropagation(),children:e})]}),et={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BUTTONS_WS_URL:"ws://192.168.188.35:5678/",VITE_ENTITY_DOORBELL:"binary_sensor.tuerklingel_person",VITE_ENTITY_DOORBELL_BUTTON:"button.haustur_unlatch_2",VITE_ENTITY_DRYER:"input_select.dryer_status",VITE_ENTITY_EVERYDAY_CALENDAR:"sensor.everyday_calendar",VITE_ENTITY_GARAGE_DOOR:"cover.garagentor",VITE_ENTITY_WASHING_MACHINE_NEW:"input_select.wasching_machine_neu_status",VITE_ENTITY_WASHING_MACHINE_OLD:"input_select.washing_machine_alt_status",VITE_GEOFOX_SECRET:"vKD)Lt6AtCKb",VITE_GEOFOX_USER:"BjoernGaworski-Dammann",VITE_HASS_ACCESS_TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmYWQ5MzhhMjJlNzc0MzBiYjM0MjdkNzU4ZjYxNWZkZiIsImlhdCI6MTY3MjYwNzAzOCwiZXhwIjoxOTg3OTY3MDM4fQ.7hhjhVp13IEhw3soIcwlcxS2Y94sh8GdH2_jVvlgNuM",VITE_HASS_HOST:"https://mwguvexftj8hmg6h9babtacuts5ce6g7.ui.nabu.casa",VITE_TELEGRAM_BOT_TOKEN:"370225026:AAGM5FD1JpvMnd1ShDkf9sx5Vr4g9rAF69Q",VITE_TELEGRAM_CHAT_ID:"195619890",VITE_WEATHER_API_KEY:"t34finKGz44m6qxPyUqfi2UnecLEa5QM3e9puJN3",VITE_WEATHER_LATITUDE:"53.570",VITE_WEATHER_LONGITUDE:"10.091"},g=(n,e=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG&&window.APP_CONFIG[n]!==void 0){const t=window.APP_CONFIG[n];return t==="undefined"||t==="null"?e:t??e}const i=et[`VITE_${n}`];return i!==void 0?i:e},D=(n,e=!1)=>{const i=g(n,e);return typeof i=="boolean"?i:typeof i=="string"?i==="true"||i==="1"||i==="yes":!!i},N=g("HASS_HOST",""),w=g("HASS_ACCESS_TOKEN",""),tt=D("ENABLE_WEATHER",!1),nt=D("ENABLE_HVV",!1);D("ENABLE_TELEGRAM",!1);const st=D("ENABLE_GARAGE",!1),rt=D("ENABLE_LAUNDRY",!1),it=D("ENABLE_DOORBELL",!1),at=D("ENABLE_EVERYDAY_CALENDAR",!1);D("ENABLE_PHYSICAL_BUTTONS",!1);const J=g("WEATHER_API_KEY"),ue=g("WEATHER_LATITUDE"),fe=g("WEATHER_LONGITUDE"),M=g("GEOFOX_SECRET"),Q=g("GEOFOX_USER");g("TELEGRAM_BOT_TOKEN");g("TELEGRAM_CHAT_ID");g("BUTTONS_WS_URL");const v=g("ENTITY_GARAGE_DOOR"),he=g("ENTITY_WASHING_MACHINE_NEW"),pe=g("ENTITY_WASHING_MACHINE_OLD"),me=g("ENTITY_DRYER"),C=g("ENTITY_DOORBELL"),ee=g("ENTITY_DOORBELL_BUTTON"),W=g("ENTITY_EVERYDAY_CALENDAR"),_=n=>{const e=N==="undefined"||N==="null"?"":N;return e?`${e}${n.startsWith("/")?n:`/${n}`}`:n.startsWith("/")?n:`/${n}`},b={log:(...n)=>{},error:(...n)=>{console.error(...n)},warn:(...n)=>{},debug:(...n)=>{}};w&&(x.defaults.headers.common.Authorization=`Bearer ${w}`);const I=W?_(`/api/states/${W}`):null,ot=()=>{const[n,e]=d.useState(null),i=at&&W;return d.useEffect(()=>{!i||!I||x(I).then(t=>{t.data.attributes.store!==void 0?e(t.data.attributes.store):e([])}).catch(t=>{b.error("Failed to fetch everyday calendar state:",t),e([])})},[i,I]),n},ct=n=>{I&&x.post(I,{state:new Date,attributes:{store:n}})},te=y.div` 

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
`,lt=({on:n,month:e,day:i})=>{const[t,s]=n,a=t.indexOf(`${e}-${i}`),o=a>-1,c=()=>{s(o?t.toSpliced(a,1):[...t,`${e}-${i}`])};return r.jsx("div",{className:j("dot",{on:o}),onClick:()=>c()})},dt=()=>{if(!W)return null;const n=new Date().getFullYear(),e=[];for(let o=1;o<13;o++){const c=new Date(n,o,0).getDate();for(let u=1;u<=c;u++)e.push({month:o,day:u})}const i=Array.from({length:31},(o,c)=>c+1),t=Array.from({length:12},(o,c)=>c+1),s=d.useState(void 0),a=ot();return d.useEffect(()=>{a!==null&&s[1](a)},[a]),d.useEffect(()=>{s[0]!==void 0&&ct(s[0])},[s[0]]),s[0]!==void 0?r.jsxs(te,{children:[r.jsx("h2",{children:"Jeden Tag ein bißchen"}),r.jsxs("div",{className:"calendar",children:[i.map((o,c)=>r.jsx("div",{style:{gridArea:`${o+1} / 1 / ${o+1} / 1`},children:o},c)),t.map((o,c)=>r.jsx("div",{style:{gridArea:`1 / ${o+1} / 1 / ${o+1}`},children:o},c)),e.map((o,c)=>r.jsx("div",{style:{gridArea:`${o.day+1} / ${o.month+1} / ${o.day+1} / ${o.month+1}`},children:r.jsx(lt,{on:s,month:o.month,day:o.day})},c))]})]}):r.jsx(te,{className:"loading",children:r.jsx(de,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},ut=y.div`
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
  }`,ft=()=>{const[n,e]=d.useState(E.now()),[i,t]=d.useState(!1),s=m.useCallback(()=>t(!0),[]),a=m.useCallback(()=>t(!1),[]);return d.useEffect(()=>{const o=setInterval(()=>e(E.now()),1e3);return()=>clearInterval(o)},[]),r.jsxs(r.Fragment,{children:[r.jsxs(ut,{onClick:s,children:[n.toFormat("HH"),r.jsx("span",{children:":"}),n.toFormat("mm")]}),r.jsx(L,{visible:i,onClick:a,fullsize:!0,children:r.jsx(dt,{})})]})},ht=m.memo(ft);w&&(x.defaults.headers.common.Authorization=`Bearer ${w}`);const P=C?_(`/api/states/${C}`):null,pt=()=>{const[n,e]=d.useState("off"),[i,t]=d.useState(!1),s=it&&C;return d.useEffect(()=>{!s||!P||x(P).then(a=>{e(a.data.state)}).catch(a=>{b.error("Failed to fetch doorbell state:",a),t(a instanceof Error?a.message:String(a))})},[s,P]),d.useEffect(()=>{let a=null,o=!0;async function c(){if(!s||!C)return;let u;try{const l=N||(typeof window<"u"?window.location.origin:""),f=w||"";if(!f){b.debug("Skipping WebSocket connection - no access token (using REST API only)");return}u=K(l,f),o&&t(!1)}catch(l){o&&t(l instanceof Error?l.message:String(l));return}try{a=await q({auth:u});const l=f=>{o&&e(f.variables.trigger.to_state.state)};await a.subscribeMessage(l,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:C}})}catch(l){o&&t(l instanceof Error?l.message:String(l))}}return c(),()=>{o=!1,a&&a.close()}},[s]),[n,i]},mt=()=>{ee&&x.post(_("/api/services/button/press"),{entity_id:ee})};class A{constructor(e){this.retryPause=2e3,this.conf=e,this.state="getting_codecs",this.restartTimeout=null,this.pc=null,this.offerData=null,this.sessionUrl=null,this.queuedCandidates=[],this.#p()}close(){this.state="closed",this.pc!==null&&this.pc.close(),this.restartTimeout!==null&&clearTimeout(this.restartTimeout)}static#i(e,i){return new Promise(t=>{const s=new RTCPeerConnection({iceServers:[]}),a="audio";let o="";s.addTransceiver(a,{direction:"recvonly"}),s.createOffer().then(c=>{if(c.sdp===void 0)throw new Error("SDP not present");if(c.sdp.includes(` ${e}`))throw new Error("already present");const u=c.sdp.split(`m=${a}`),l=u.slice(1).map(h=>h.split(`\r
`)[0].split(" ").slice(3)).reduce((h,p)=>[...h,...p],[]);o=this.#e(l);const f=u[1].split(`\r
`);return f[0]+=` ${o}`,f.splice(f.length-1,0,`a=rtpmap:${o} ${e}`),i!==void 0&&f.splice(f.length-1,0,`a=fmtp:${o} ${i}`),u[1]=f.join(`\r
`),c.sdp=u.join(`m=${a}`),s.setLocalDescription(c)}).then(()=>s.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:`v=0\r
o=- 6539324223450680508 0 IN IP4 0.0.0.0\r
s=-\r
t=0 0\r
a=fingerprint:sha-256 0D:9F:78:15:42:B5:4B:E6:E2:94:3E:5B:37:78:E1:4B:54:59:A3:36:3A:E5:05:EB:27:EE:8F:D2:2D:41:29:25\r
m=${a} 9 UDP/TLS/RTP/SAVPF ${o}\r
c=IN IP4 0.0.0.0\r
a=ice-pwd:7c3bf4770007e7432ee4ea4d697db675\r
a=ice-ufrag:29e036dc\r
a=sendonly\r
a=rtcp-mux\r
a=rtpmap:${o} ${e}\r
`+(i!==void 0?`a=fmtp:${o} ${i}\r
`:"")}))).then(()=>{t(!0)}).catch(()=>{t(!1)}).finally(()=>{s.close()})})}static#n(e){return JSON.parse(`"${e}"`)}static#a(e){return e!==null?e.split(", ").map(i=>{const t=i.match(/^<(.+?)>; rel="ice-server"(; username="(.*?)"; credential="(.*?)"; credential-type="password")?/i),s={urls:[t[1]]};return t[3]!==void 0&&(s.username=this.#n(t[3]),s.credential=this.#n(t[4]),s.credentialType="password"),s}):[]}static#o(e){const i={iceUfrag:"",icePwd:"",medias:[]};for(const t of e.split(`\r
`))t.startsWith("m=")?i.medias.push(t.slice(2)):i.iceUfrag===""&&t.startsWith("a=ice-ufrag:")?i.iceUfrag=t.slice(12):i.icePwd===""&&t.startsWith("a=ice-pwd:")&&(i.icePwd=t.slice(10));return i}static#e(e){for(let i=30;i<=127;i++)if((i<=63||i>=96)&&!e.includes(i.toString())){const t=i.toString();return e.push(t),t}throw Error("unable to find a free payload type")}static#c(e,i){const t=i.split(`\r
`);let s=this.#e(e);return t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} PCMU/8000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),s=this.#e(e),t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} PCMA/8000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),t.join(`\r
`)}static#l(e,i){const t=i.split(`\r
`);let s=this.#e(e);return t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} multiopus/48000/3`),t.splice(t.length-1,0,`a=fmtp:${s} channel_mapping=0,2,1;num_streams=2;coupled_streams=1`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),s=this.#e(e),t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} multiopus/48000/4`),t.splice(t.length-1,0,`a=fmtp:${s} channel_mapping=0,1,2,3;num_streams=2;coupled_streams=2`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),s=this.#e(e),t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} multiopus/48000/5`),t.splice(t.length-1,0,`a=fmtp:${s} channel_mapping=0,4,1,2,3;num_streams=3;coupled_streams=2`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),s=this.#e(e),t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} multiopus/48000/6`),t.splice(t.length-1,0,`a=fmtp:${s} channel_mapping=0,4,1,2,3,5;num_streams=4;coupled_streams=2`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),s=this.#e(e),t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} multiopus/48000/7`),t.splice(t.length-1,0,`a=fmtp:${s} channel_mapping=0,4,1,2,3,5,6;num_streams=4;coupled_streams=4`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),s=this.#e(e),t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} multiopus/48000/8`),t.splice(t.length-1,0,`a=fmtp:${s} channel_mapping=0,6,1,4,5,2,3,7;num_streams=5;coupled_streams=4`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),t.join(`\r
`)}static#d(e,i){const t=i.split(`\r
`);let s=this.#e(e);return t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} L16/8000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),s=this.#e(e),t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} L16/16000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),s=this.#e(e),t[0]+=` ${s}`,t.splice(t.length-1,0,`a=rtpmap:${s} L16/48000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${s} transport-cc`),t.join(`\r
`)}static#u(e){let i="";const t=e.split(`\r
`);for(let s=0;s<t.length;s++)if(t[s].startsWith("a=rtpmap:")&&t[s].toLowerCase().includes("opus/")){i=t[s].slice(9).split(" ")[0];break}if(i==="")return e;for(let s=0;s<t.length;s++)t[s].startsWith(`a=fmtp:${i} `)&&(t[s].includes("stereo")||(t[s]+=";stereo=1"),t[s].includes("sprop-stereo")||(t[s]+=";sprop-stereo=1"));return t.join(`\r
`)}static#f(e,i){const t=e.split("m="),s=t.slice(1).map(a=>a.split(`\r
`)[0].split(" ").slice(3)).reduce((a,o)=>[...a,...o],[]);for(let a=1;a<t.length;a++)if(t[a].startsWith("audio")){t[a]=this.#u(t[a]),i.includes("pcma/8000/2")&&(t[a]=this.#c(s,t[a])),i.includes("multiopus/48000/6")&&(t[a]=this.#l(s,t[a])),i.includes("L16/48000/2")&&(t[a]=this.#d(s,t[a]));break}return t.join("m=")}static#h(e,i){const t={};for(const o of i){const c=o.sdpMLineIndex;t[c]===void 0&&(t[c]=[]),t[c].push(o)}let s=`a=ice-ufrag:${e.iceUfrag}\r
a=ice-pwd:${e.icePwd}\r
`,a=0;for(const o of e.medias){if(t[a]!==void 0){s+=`m=${o}\r
a=mid:${a}\r
`;for(const c of t[a])s+=`a=${c.candidate}\r
`}a++}return s}#t(e){this.state==="running"?(this.pc!==null&&(this.pc.close(),this.pc=null),this.offerData=null,this.sessionUrl!==null&&(fetch(this.sessionUrl,{method:"DELETE"}),this.sessionUrl=null),this.queuedCandidates=[],this.state="restarting",this.restartTimeout=window.setTimeout(()=>{this.restartTimeout=null,this.state="running",this.#s()},this.retryPause),this.conf.onError!==void 0&&this.conf.onError(`${e}, retrying in some seconds`)):this.state==="getting_codecs"&&(this.state="failed",this.conf.onError!==void 0&&this.conf.onError(e))}#p(){Promise.all([["pcma/8000/2"],["multiopus/48000/6","channel_mapping=0,4,1,2,3,5;num_streams=4;coupled_streams=2"],["L16/48000/2"]].map(e=>A.#i(e[0],e[1]).then(i=>i?e[0]:!1))).then(e=>e.filter(i=>i!==!1)).then(e=>{if(this.state!=="getting_codecs")throw new Error("closed");this.nonAdvertisedCodecs=e,this.state="running",this.#s()}).catch(e=>{this.#t(e)})}#s(){this.#m().then(e=>this.#g(e)).then(e=>this.#x(e)).then(e=>this.#E(e)).catch(e=>{this.#t(e.toString())})}#m(){return fetch(this.conf.url,{method:"OPTIONS"}).then(e=>A.#a(e.headers.get("Link")))}#g(e){if(this.state!=="running")throw new Error("closed");this.pc=new RTCPeerConnection({iceServers:e,sdpSemantics:"unified-plan"});const i="recvonly";return this.pc.addTransceiver("video",{direction:i}),this.pc.addTransceiver("audio",{direction:i}),this.pc.onicecandidate=t=>this.#y(t),this.pc.onconnectionstatechange=()=>this.#w(),this.pc.ontrack=t=>this.#b(t),this.pc.createOffer().then(t=>(t.sdp=A.#f(t.sdp,this.nonAdvertisedCodecs),this.offerData=A.#o(t.sdp),this.pc.setLocalDescription(t).then(()=>t.sdp)))}#x(e){if(this.state!=="running")throw new Error("closed");return fetch(this.conf.url,{method:"POST",headers:{"Content-Type":"application/sdp"},body:e}).then(i=>{switch(i.status){case 201:break;case 404:throw new Error("stream not found");case 400:return i.json().then(t=>{throw new Error(t.error)});default:throw new Error(`bad status code ${i.status}`)}return this.sessionUrl=new URL(i.headers.get("location"),this.conf.url).toString(),i.text()})}#E(e){if(this.state!=="running")throw new Error("closed");return this.pc.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:e})).then(()=>{this.state==="running"&&this.queuedCandidates.length!==0&&(this.#r(this.queuedCandidates),this.queuedCandidates=[])})}#y(e){this.state==="running"&&e.candidate!==null&&(this.sessionUrl===null?this.queuedCandidates.push(e.candidate):this.#r([e.candidate]))}#r(e){fetch(this.sessionUrl,{method:"PATCH",headers:{"Content-Type":"application/trickle-ice-sdpfrag","If-Match":"*"},body:A.#h(this.offerData,e)}).then(i=>{switch(i.status){case 204:break;case 404:throw new Error("stream not found");default:throw new Error(`bad status code ${i.status}`)}}).catch(i=>{this.#t(i.toString())})}#w(){this.state==="running"&&(this.pc.connectionState==="failed"||this.pc.connectionState==="closed")&&this.#t("peer connection closed")}#b(e){this.conf.onTrack!==void 0&&this.conf.onTrack(e)}}const gt=(n,e,i)=>{const[t,s]=d.useState(void 0);d.useEffect(()=>{if(i&&i.current&&!t&&e){const a=new A({url:n,onError:o=>{b.error("Cannot load WHEP stream: ",n,o)},onTrack:o=>{i.current.srcObject=o.streams[0],s(a)}});return()=>{a&&a.close()}}},[n,e,t]),d.useEffect(()=>{!e&&t&&(t.close(),s(void 0))},[e,t])},B=({src:n,show:e,...i})=>{const t=d.useRef();return gt(n,e,t),r.jsx("video",{ref:t,...i})},ne=45e3,xt=y.div`

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
`,Et=()=>{const[n,e]=d.useState(!1),[i]=pt(),[t,s]=d.useState(void 0),[a,o]=d.useState(100),[c,u]=d.useState("0");d.useEffect(()=>{if(i==="off"&&n){const p=window.setTimeout(()=>{e(!1),s(void 0)},ne);return s(p),u(ne+"ms"),o(0),()=>{p&&window.clearTimeout(p)}}else i==="on"&&(u(0),o(100),e(!0))},[i,n]),d.useEffect(()=>{i==="on"&&t!==void 0&&(window.clearTimeout(t),u(0),o(100),s(void 0))},[t,i]);const[l,f]=d.useState(!1),h=()=>{mt(),f(!0)};return d.useEffect(()=>{if(l){const p=setTimeout(()=>f(!1),1e3);return()=>clearTimeout(p)}},[l]),r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>e(p=>!p),children:"CCTV"}),r.jsx(L,{visible:n,onClick:()=>e(!1),fullsize:!0,children:r.jsxs(xt,{children:[r.jsx(Ee,{completed:a,height:10,bgColor:t===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:c,transitionTimingFunction:"linear"}),r.jsxs("div",{className:"grid",style:{display:n?"flex":"none"},children:[r.jsx("div",{onClick:()=>h(),children:r.jsx(B,{src:"http://192.168.188.10:8889/tuerklingel_sub/whep",show:n,muted:!0,controls:!1,autoPlay:!0,width:"360",height:"480"})}),r.jsxs("div",{onClick:()=>h(),children:[r.jsx(B,{src:"http://192.168.188.10:8889/eingang/whep",show:n,muted:!0,controls:!1,autoPlay:!0,width:"100%"}),r.jsx(B,{src:"http://192.168.188.10:8889/weg/whep",show:n,muted:!0,controls:!1,autoPlay:!0,width:"100%",height:"240px"})]})]}),l&&r.jsx("div",{className:"open-door",children:"Tür öffnet sich"})]})})]})},yt=y.div`
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

`,wt=({nextWeek:n,previousWeek:e,startWeekWithToday:i})=>r.jsxs(yt,{children:[r.jsxs("div",{className:"buttons",children:[r.jsx(S,{path:Me,size:"32px",color:"#ffffff",onClick:e}),r.jsx(S,{path:We,size:"32px",color:"#ffffff",onClick:n}),r.jsx("button",{onClick:i,children:"Today"}),r.jsx(Et,{})]}),r.jsx(ht,{}),r.jsx(S,{path:He,size:"32px",color:"#ffffff",className:j("indicator")})]}),bt=m.memo(wt),vt=6e4,X=(n=vt,e=void 0)=>{const[i,t]=d.useState(!0);return d.useEffect(()=>{const s=setInterval(()=>{t(a=>!a)},n);return()=>{clearInterval(s)}},[n,e]),i};w&&(x.defaults.headers.common.Authorization=`Bearer ${w}`);const Tt=n=>_(`/api/calendars/${n}`),jt=(n,e)=>`${Tt(n)}?${qe.stringify(e)}`,_t=[{name:"calendar.hamsischwan_s_kalender",icon:void 0},{name:"calendar.biotonne",icon:O},{name:"calendar.gelber_sack",icon:O},{name:"calendar.blaue_tonne",icon:O},{name:"calendar.schwarze_tonne",icon:O},{name:"calendar.familiengeburtstage",icon:Pe}],St=(n,e,i,t)=>x(jt(n.name,{start:e.toISO(),end:i.toISO()}),{timeout:1e4}).then(s=>{!s.data||!Array.isArray(s.data)||s.data.forEach(a=>{const o="dateTime"in a.start?E.fromISO(a.start.dateTime):E.fromSQL(a.start.date);let c;"dateTime"in a.end?c=Math.floor(E.fromISO(a.end.dateTime).diff(e,"days").as("days")):c=Math.floor(E.fromSQL(a.end.date).diff(e,"days").as("days"))-1;const u=Math.floor(o.diff(e,"days").as("days"));c>=t.length&&(c=t.length-1);const l="dateTime"in a.start?"events":"allDay";if(u>=0&&u<t.length)for(let f=u;f<=c;f++)t[f][l]=[...t[f][l],{...a,icon:n.icon}]})}),se=new Map,Dt=300*1e3,At=n=>n.toISODate(),Nt=(n,e,i,t,s)=>{const a=[0,1,2,3,4,5].map(f=>n.plus({days:f}).startOf("day"));a[6]=n.plus({days:6}).endOf("day");const o=At(n),c=se.get(o);if(c&&Date.now()-c.timestamp<Dt){i(c.data);return}const u=a.map(f=>({date:f,allDay:[],events:[]})),l=new AbortController;s.current&&s.current.abort(),s.current=l;try{t(!0);const f=_t.map(h=>St(h,a[0],a[6],u));Promise.all(f).then(()=>{l.signal.aborted||(se.set(o,{data:u,timestamp:Date.now()}),i(u))}).catch(h=>{l.signal.aborted||b.error("Could not load calendar",h)}).finally(()=>{l.signal.aborted||t(!1)})}catch(f){l.signal.aborted||(b.error("Error loading calendar data:",f),t(!1))}},re=[],Ct=n=>{const[e,i]=d.useState(re),[t,s]=d.useState(!1),a=X(6e4,"Calendar"),[o,c]=d.useState(null),u=m.useRef(null);return d.useEffect(()=>(n!==void 0&&((o===null||!o.equals(n))&&(i(re),c(n)),Nt(n,e,i,s,u)),()=>{u.current&&u.current.abort()}),[n,a]),e};function k(n){const[e,i]=d.useState(!1);function t({key:a}){a===n&&i(!0)}const s=({key:a})=>{a===n&&i(!1)};return d.useEffect(()=>(window.addEventListener("keydown",t),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",s)}),[n]),e}const It=()=>{let n=new Date,i=(n.getDay()+6)%7,t=new Date(n.setDate(n.getDate()-i));return E.fromJSDate(t)},kt=n=>{const e=()=>n(c=>c.plus({days:7})),i=k("ArrowRight");d.useEffect(()=>{i&&e()},[i]);const t=()=>n(c=>c.minus({days:7})),s=k("ArrowLeft");d.useEffect(()=>{s&&t()},[s]);const a=()=>n(It()),o=k("t");return d.useEffect(()=>{o&&a()},[o]),{nextWeek:e,previousWeek:t,startWeekWithToday:a}},Lt=n=>{const[e,i]=m.useState(0),[t,s]=m.useState(0),a=50;return{onTouchStart:l=>{s(0),i(l.targetTouches[0].clientX)},onTouchMove:l=>s(l.targetTouches[0].clientX),onTouchEnd:()=>{if(!e||!t)return;const l=e-t,f=l>a,h=l<-a;f&&n.onSwipedLeft(),h&&n.onSwipedRight()}}},ie=n=>E.fromISO(n).toLocaleString(E.TIME_24_SIMPLE),G=n=>n.toFormat("c")>=6,z=n=>n.hasSame(E.now(),"day"),Ot=y.div`

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
`,$t=()=>{const[n,e]=d.useState(void 0),i=Ct(n),{nextWeek:t,previousWeek:s,startWeekWithToday:a}=kt(e);d.useEffect(()=>{a()},[]);const o=Lt({onSwipedLeft:()=>t(),onSwipedRight:()=>s()}),c=m.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),u=m.useMemo(()=>i.slice(0,7),[i]);return r.jsxs(Ot,{...o,children:[r.jsx(bt,{nextWeek:t,previousWeek:s,startWeekWithToday:a}),r.jsxs("div",{className:"schedule",children:[u.map((l,f)=>r.jsx("div",{className:j({weekend:G(l.date),today:z(l.date)},"caption"),children:r.jsx("h2",{children:l.date.toLocaleString(c)})},f)),u.map((l,f)=>r.jsx("div",{className:j("allDayRow",{weekend:G(l.date),today:z(l.date)}),children:l.allDay.map((h,p)=>r.jsx("div",{className:"allDayEvent",children:h.summary},p))},f)),u.map((l,f)=>r.jsx("div",{className:j("eventRow",{weekend:G(l.date),today:z(l.date)}),children:l.events.map((h,p)=>r.jsxs("div",{className:"event",children:[r.jsx("div",{children:h.summary}),r.jsxs("h3",{children:[h.icon&&r.jsx(S,{path:h.icon,size:"1rem",color:"#ffffff"}),ie(h.start.dateTime)," - ",ie(h.end.dateTime)]})]},p))},f))]}),i.length===0&&r.jsx("div",{className:"loading",children:r.jsx(de,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})]})},H={"clear-day":{icon:Ae,label:"Klar",color:"#eeeef5"},"clear-night":{icon:De,label:"Klar",color:"#eeeef5"},rain:{icon:Se,label:"Regen",color:"#80a5d6"},snow:{icon:_e,label:"Schnee",color:"#8c82ce"},sleet:{icon:je,label:"Graupel",color:"#aba4db"},wind:{icon:Te,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:ve,label:"Neblig",color:"#d5dae2"},cloudy:{icon:be,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:we,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:ye,label:"Teils bewölkt",color:"#d5dae2"}},Rt=()=>`./forecast/${J}/${ue},${fe}?&units=si&exclude=minutely`,Mt=n=>{const[e,i]=d.useState([]),t=X(6e4*10,"Weather"),s=tt&&J&&ue&&fe;return d.useEffect(()=>{s&&x(Rt()).then(a=>{i(a.data)}).catch(a=>{b.error("Could not load weather data",a)}).finally(()=>{})},[t,n,s]),e},Wt=Ce(Ie),Ht=y.div`

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
`,ae=m.memo(({data:n,daily:e=!1})=>r.jsxs("div",{children:[r.jsxs("div",{children:[!e&&E.fromSeconds(n.time).toLocaleString(E.TIME_24_SIMPLE),e&&E.fromSeconds(n.time).setLocale("de").toFormat("ccc, d.M")]}),r.jsx("div",{children:r.jsx(V,{icon:n.icon})}),r.jsx("div",{children:r.jsxs("strong",{children:[!e&&r.jsxs(r.Fragment,{children:[Math.round(n.temperature),"°"]}),e&&r.jsxs(r.Fragment,{children:[Math.round(n.temperatureHigh),"° / ",Math.round(n.temperatureLow),"°"]})]})}),r.jsxs("div",{children:[Math.round(n.precipProbability*100)," %"]}),r.jsxs("div",{children:[(n.precipIntensity*100).toFixed(1)," mm"]})]})),Pt=n=>!n||!n.hourly||!n.hourly.data?[]:n.hourly.data.slice(0,24).map(e=>({color:H[e.icon]?.color||"#ffffff",text:H[e.icon]?.label||"",annotation:`${Math.round(e.temperature)}°`,time:e.time})),V=({icon:n})=>{const e=H[n];return r.jsx(e.icon,{size:60,color:"#ffffff"})},Bt=({pin:n})=>{if(!J)return null;const e=Mt(),[i,t]=d.useState(!1),s=k("w"),a=d.useRef(),o=m.useCallback(()=>t(h=>!h),[]),c=m.useCallback(()=>t(!0),[]),u=m.useMemo(()=>Pt(e),[e]),l=m.useMemo(()=>[3,6,9,12],[]),f=m.useMemo(()=>[1,2,3,4,5,6,7],[]);return d.useEffect(()=>{if(!a.current||!e||!e.hourly||u.length===0)return;const h={timezone:"Europe/Berlin"},p=document.createElement("div");return a.current.textContent="",a.current.appendChild(p),Xe(p,u,h),()=>{a.current&&(a.current.textContent="")}},[u]),d.useEffect(()=>{(s||n===17)&&o()},[s,n]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?"":r.jsxs(Ht,{children:[r.jsxs("div",{onClick:c,children:[r.jsxs("div",{className:"headline",children:[r.jsx(V,{icon:e.currently.icon}),r.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),r.jsx("div",{className:"forecast",children:l.map((h,p)=>r.jsx(ae,{data:e.hourly.data[h]},p))})]}),r.jsx(L,{visible:i,onClick:o,children:r.jsxs("div",{className:"full-weather",children:[r.jsxs("div",{className:"detail-header",children:[r.jsx("div",{children:r.jsxs("div",{className:"headline",children:[r.jsx(V,{icon:e.daily.data[0].icon}),r.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",r.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),r.jsx("h3",{children:H[e.daily.data[0].icon].label})]}),r.jsx("div",{className:"values",children:r.jsxs("div",{className:"table",children:[r.jsxs("div",{children:[r.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),r.jsxs("div",{children:[r.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),r.jsxs("div",{children:[r.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]}),r.jsxs("div",{children:[r.jsx("span",{children:"Windgeschwindigkeit:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]})]})}),r.jsx("h3",{children:"Die nächsten 24 Stunden"}),r.jsx("div",{ref:a}),r.jsx("h3",{children:"Die nächste Woche"}),r.jsx("div",{className:"forecast",children:f.map((h,p)=>r.jsx(ae,{data:e.daily.data[h],daily:!0},p))}),r.jsxs("div",{className:"info",children:["Aktualisiert ",r.jsx(Ne,{date:E.fromSeconds(e.currently.time).toJSDate(),formatter:Wt})]})]})})]})},Gt=m.memo(Bt);async function zt(n){if(!M)throw new Error("GEOFOX_SECRET is not configured");return Je.stringify(Qe(JSON.stringify(n),M))}const Yt="AK Wandsbek",Ft="Hamburg",Ut="Master:62016",Vt="STATION",Kt={x:10.091341,y:53.568702},qt={name:Yt,city:Ft,id:Ut,type:Vt,coordinate:Kt},$={departureList:"departureList",checkName:"checkName"},Jt=async(n,e)=>x({method:"post",url:`./gti/public/${n}`,data:e,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":Q,"geofox-auth-signature":await zt(e),Authorization:void 0}}),oe=(n,e)=>n.realtimeOffset-e.realtimeOffset,Qt=n=>{const e=n.departures.map(i=>({line:i.line.name,direction:i.line.direction,timeOffset:i.timeOffset,delay:i.delay?i.delay:"0",directionId:i.directionId,realtimeOffset:i.timeOffset+(i.delay?i.delay:0)/60}));return{from:e.filter(i=>i.directionId===1).slice(0,3).sort(oe),to:e.filter(i=>i.directionId===6).slice(0,3).sort(oe)}},Xt=n=>{const[e,i]=d.useState([]),t=X(6e4),s=nt&&Q&&M;return d.useEffect(()=>{if(!s||!(n in $))return;let a={version:51};switch(n){case $.checkName:a={...a,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case $.departureList:const o=E.now();a={...a,station:qt,time:{date:o.toFormat("dd.MM.yyyy"),time:o.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:a=void 0}Jt(n,a).then(o=>{i(Qt(o.data))}).catch(o=>{b.error("Error calling Geofox API",o)})},[n,t,s]),e},Zt=y.div`
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
`,ce=m.memo(({line:n,direction:e,realtimeOffset:i})=>r.jsxs("div",{className:"departure",children:[r.jsx("div",{children:r.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${n}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${n}`})}),r.jsx("div",{children:i===0?"Jetzt":r.jsxs(r.Fragment,{children:["in ",i," '"]})})]})),en=()=>{if(!Q||!M)return null;const n=Xt($.departureList);return r.jsxs(Zt,{children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:r.jsxs("g",{transform:"translate(10368 -6294)",children:[r.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),r.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),r.jsx("h3",{children:"→ Wandsbek"}),n.to?.map((e,i)=>r.jsx(ce,{line:e.line,direction:e.direction,realtimeOffset:e.realtimeOffset},i)),r.jsx("h3",{children:"→ Stadtauswärts"}),n.from?.map((e,i)=>r.jsx(ce,{line:e.line,direction:e.direction,realtimeOffset:e.realtimeOffset},i))]})},tn=m.memo(en);w&&(x.defaults.headers.common.Authorization=`Bearer ${w}`);const Y=v?_(`/api/states/${v}`):null,nn=()=>{const[n,e]=d.useState("closed"),[i,t]=d.useState(!1),s=st&&v;return d.useEffect(()=>{!s||!Y||x(Y).then(a=>{e(a.data.state)}).catch(a=>{b.error("Failed to fetch garage door state:",a),t(a instanceof Error?a.message:String(a))})},[s,Y]),d.useEffect(()=>{let a=null,o=!0;async function c(){if(!s||!v)return;let u;try{const l=N||(typeof window<"u"?window.location.origin:""),f=w||"";if(!f){b.debug("Skipping WebSocket connection - no access token (using REST API only)");return}u=K(l,f),o&&t(!1)}catch(l){o&&t(l instanceof Error?l.message:String(l));return}try{a=await q({auth:u});const l=f=>{o&&e(f.variables.trigger.to_state.state)};await a.subscribeMessage(l,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:v}})}catch(l){o&&t(l instanceof Error?l.message:String(l))}}return c(),()=>{o=!1,a&&a.close()}},[s]),[n,i]},sn=n=>{if(!v)return;n(!0);const e=setTimeout(()=>n(!1),3e3);x.post(_("/api/services/cover/toggle"),{entity_id:v}).finally(()=>{clearTimeout(e),n(!1)})},rn=n=>{if(!v)return;n(!0);const e=setTimeout(()=>n(!1),3e3);x.post(_("/api/services/cover/open_cover"),{entity_id:v}).finally(()=>{clearTimeout(e),n(!1)})},an=n=>{if(!v)return;n(!0);const e=setTimeout(()=>n(!1),3e3);x.post(_("/api/services/cover/close_cover"),{entity_id:v}).finally(()=>{clearTimeout(e),n(!1)})},on=y.div`
  padding-bottom: 12px;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    h2 {
      display: none;
    }
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
`,cn=y.div`
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
`,le=n=>({unknown:{label:"In Bewegung oder halb-offen",icon:Fe},open:{label:"Offen",icon:Ye},closed:{label:"Geschlossen",icon:ze},opening:{label:"Öffnet",icon:Ge},closing:{label:"Schließt",icon:Be}})[n]||{label:"Unavailable",icon:Ue},ge=({garageDoor:n,animate:e=!1})=>r.jsxs(cn,{className:j({animate:e}),children:[r.jsx(S,{path:le(n).icon,size:"2rem",color:"#ffffff"}),r.jsx("span",{children:le(n).label})]}),ln=(n,e)=>ke.promise(n,{pending:"Garagentor ist in Bewegung …",success:{render({data:i}){return r.jsx(ge,{garageDoor:i})}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark"}),dn=()=>{if(!v)return null;const[n,e]=nn(),[i,t]=d.useState(void 0),[s,a]=d.useState(!1),[o,c]=d.useState(!1);d.useEffect(()=>{if(n==="unknown"||n==="opening"||n==="closing"){if(!i){const h=new Promise(p=>{t({resolve:p})});ln(h)}}else i&&(i.resolve(n),t(void 0))},[n]);const u=k("g");d.useEffect(()=>{u&&sn(a)},[u]);const l=m.useCallback(f=>{switch(c(!1),f){case"open":rn(a);break;case"close":an(a);break}},[a]);return d.useEffect(()=>{e!==!1&&c(!0)},[e]),r.jsxs(on,{children:[r.jsx("h2",{children:"Garage"}),r.jsx("div",{onClick:()=>c(!0),children:r.jsx(ge,{garageDoor:n,animate:s})}),r.jsx(L,{visible:o,onClick:()=>c(!1),children:r.jsxs("div",{className:"controls",children:[e!==!1&&r.jsxs("div",{children:[r.jsx("h3",{children:"Fehler!"}),r.jsx("div",{children:e instanceof Error?e.message:String(e)})]}),r.jsx("div",{onClick:()=>l("open"),children:"Öffnen"}),r.jsx("div",{onClick:()=>l("close"),children:"Schließen"})]})})]})},un=m.memo(dn);w&&(x.defaults.headers.common.Authorization=`Bearer ${w}`);const fn=n=>n?_(`/api/states/${n}`):null,T={done:{label:"Fertig",animate:!1,icon:Ke},off:{label:"Aus",animate:!1,icon:Ve},standby:{label:"Standby",animate:!1,icon:Z},running:{label:"Läuft …",animate:!0,icon:Z}},F={off:0,standby:2,running:16,done:256},hn=()=>{const n=U(he),e=U(pe),i=U(me),[t,s]=d.useState(T.off);return d.useEffect(()=>{const a=F[n]+F[e]+F[i];a===0?s(T.off):a<16?s(T.standby):a<256?s(T.running):a%256===0?s(T.done):a%256%16===0?s(T.running):a%256%2===0?s(T.done):s(T.running)},[e,n,i]),[t,[{label:"Neue Waschmaschine",state:n},{label:"Alte Waschmaschine",state:e},{label:"Trockner",state:i}]]},U=n=>{const[e,i]=d.useState("off"),t=rt&&n,s=fn(n);return d.useEffect(()=>{!t||!s||x(s).then(a=>{i(a.data.state)}).catch(a=>{b.error(`Failed to fetch state for ${n}:`,a)})},[n,t,s]),d.useEffect(()=>{let a=null,o=null,c=!0;async function u(){if(!t||!n)return;const l=N||(typeof window<"u"?window.location.origin:""),f=w||"";if(f)try{const h=K(l,f);a=await q({auth:h});const p=xe=>{c&&i(xe.variables.trigger.to_state.state)};o=await a.subscribeMessage(p,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:n}})}catch(h){b.error(`Failed to setup connection for ${n}:`,h)}}return u(),()=>{c=!1,o&&o(),a&&a.close()}},[n,t]),e},pn=y.div`
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
`,mn=()=>{if(!he&&!pe&&!me)return null;const[n,e]=hn(),[i,t]=d.useState(!1),s=m.useCallback(()=>t(!0),[]),a=m.useCallback(()=>t(!1),[]);return r.jsxs(pn,{children:[r.jsx("h2",{children:"Wäsche"}),r.jsxs("div",{className:"status",onClick:s,children:[r.jsx("div",{className:j({animate:n.animate}),children:r.jsx(S,{path:n.icon,size:"2rem",color:"#ffffff"})}),r.jsx("span",{children:n.label})]}),r.jsx(L,{visible:i,onClick:a,children:r.jsx("div",{className:"states",children:e.map((o,c)=>r.jsxs("div",{children:[r.jsx("div",{className:j({animate:T[o.state].animate}),children:r.jsx(S,{path:T[o.state].icon,size:2})}),r.jsx("div",{children:T[o.state].label}),r.jsx("div",{className:"subtitle",children:o.label})]},c))})})]})},gn=m.memo(mn),xn=y.div`
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
`,En=({pin:n})=>r.jsxs(xn,{children:[r.jsx(Gt,{pin:n}),r.jsx(tn,{}),r.jsxs("div",{className:"two-cols",children:[r.jsx(un,{}),r.jsx(gn,{})]})]}),yn=m.memo(En),wn=()=>{function n(i,t){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(t))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[a,o]=t.split(":").map(Number),c=new Date;let u=new Date(c.getFullYear(),c.getMonth(),c.getDate());u.setHours(a,o,0,0),u<=c&&u.setDate(u.getDate()+1);const l=u.getTime()-c.getTime();return setTimeout(i,l)}const e=()=>{window.location.reload(!0)};d.useLayoutEffect(()=>{const i=[n(e,"00:00"),n(e,"03:00"),n(e,"06:00"),n(e,"09:00"),n(e,"12:00"),n(e,"15:00"),n(e,"18:00"),n(e,"21:00")];return()=>{i.forEach(t=>{t&&clearTimeout(t)})}},[])},bn=y.div`
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
`;class R extends d.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,i){this.setState({error:e,errorInfo:i}),b.error("ErrorBoundary caught an error:",e,i)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?r.jsxs(bn,{children:[r.jsx("h2",{children:"Something went wrong"}),r.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,r.jsxs("div",{children:[r.jsx("button",{onClick:this.handleReset,children:"Try Again"}),r.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const vn=Le`
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
`,Tn=y.div`
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
`;function jn(){return wn(),r.jsx(R,{children:r.jsxs(Tn,{children:[r.jsx(vn,{}),r.jsxs("div",{className:"main",children:[r.jsx(R,{children:r.jsx($t,{})}),r.jsx(R,{children:r.jsx(yn,{pin:void 0})})]}),r.jsx(Oe,{})]})})}const _n=$e.createRoot(document.getElementById("root"));_n.render(r.jsx(d.StrictMode,{children:r.jsx(R,{children:r.jsx(jn,{})})}));
