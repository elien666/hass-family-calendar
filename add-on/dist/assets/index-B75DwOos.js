import{d as x,j as s,I as S,R as l,l as J,r as p,P as ne,W as se,b as re,e as ie,f as ae,h as oe,i as ce,k as le,m as de,n as fe,o as ue,T as he,p as pe,s as me,y as ge,q as xe,L as ye,t as we}from"./react-vendor-BESKrxAe.js";import{D as g}from"./date-vendor-BDx6lZXm.js";import{f as j}from"./vendor-CGf6VsZb.js";import{m as be,a as ve,b as je,c as Se,d as D,e as Ee,f as Te,g as ke,h as $e,i as De,j as Ce,k as Ne,l as H,n as _e,o as Le}from"./ui-vendor-_Qg8MLA4.js";import{a as y,q as Oe}from"./utils-vendor-CwjBAgTH.js";import{c as Q,a as Z}from"./ha-vendor-CoU0AojH.js";import{t as Ie}from"./chart-vendor-ClWajKr-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const Ae=x.div`
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
`,k=({visible:r,children:e,onClick:i,fullsize:t=!1})=>s.jsxs(Ae,{className:j({visible:r}),onClick:i,children:[s.jsx("div",{className:"close",children:s.jsx(S,{path:be,size:2,onClick:i})}),s.jsx("div",{className:j("content",{fullsize:t}),onClick:n=>n.stopPropagation(),children:e})]}),v=void 0,_=void 0,Me=void 0,We=void 0,Pe=void 0,Re=void 0,$=void 0,He=void 0,ze=void 0,Fe=void 0,X=void 0,Ge=void 0,Ue=void 0,b={log:(...r)=>{},error:(...r)=>{console.error(...r)},warn:(...r)=>{},debug:(...r)=>{}},ee=`${v}/api/states/${Ue}`,Be=()=>{const[r,e]=l.useState(null);return l.useEffect(()=>{y(ee).then(i=>{i.data.attributes.store!==void 0?e(i.data.attributes.store):e([])}).catch(i=>{b.error("Failed to fetch everyday calendar state:",i),e([])})},[]),r},Ve=r=>{y.post(ee,{state:new Date,attributes:{store:r}})},z=x.div` 

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
`,Ye=({on:r,month:e,day:i})=>{const[t,n]=r,a=t.indexOf(`${e}-${i}`),o=a>-1,c=()=>{n(o?t.toSpliced(a,1):[...t,`${e}-${i}`])};return s.jsx("div",{className:j("dot",{on:o}),onClick:()=>c()})},qe=()=>{const r=new Date().getFullYear(),e=[];for(let o=1;o<13;o++){const c=new Date(r,o,0).getDate();for(let d=1;d<=c;d++)e.push({month:o,day:d})}const i=Array.from({length:31},(o,c)=>c+1),t=Array.from({length:12},(o,c)=>c+1),n=l.useState(void 0),a=Be();return l.useEffect(()=>{a!==null&&n[1](a)},[a]),l.useEffect(()=>{n[0]!==void 0&&Ve(n[0])},[n[0]]),n[0]!==void 0?s.jsxs(z,{children:[s.jsx("h2",{children:"Jeden Tag ein bißchen"}),s.jsxs("div",{className:"calendar",children:[i.map((o,c)=>s.jsx("div",{style:{gridArea:`${o+1} / 1 / ${o+1} / 1`},children:o},c)),t.map((o,c)=>s.jsx("div",{style:{gridArea:`1 / ${o+1} / 1 / ${o+1}`},children:o},c)),e.map((o,c)=>s.jsx("div",{style:{gridArea:`${o.day+1} / ${o.month+1} / ${o.day+1} / ${o.month+1}`},children:s.jsx(Ye,{on:n,month:o.month,day:o.day})},c))]})]}):s.jsx(z,{className:"loading",children:s.jsx(J,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},Ke=x.div`
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
  }`,Je=()=>{const[r,e]=l.useState(g.now()),[i,t]=l.useState(!1),n=p.useCallback(()=>t(!0),[]),a=p.useCallback(()=>t(!1),[]);return l.useEffect(()=>{const o=setInterval(()=>e(g.now()),1e3);return()=>clearInterval(o)},[]),s.jsxs(s.Fragment,{children:[s.jsxs(Ke,{onClick:n,children:[r.toFormat("HH"),s.jsx("span",{children:":"}),r.toFormat("mm")]}),s.jsx(k,{visible:i,onClick:a,fullsize:!0,children:s.jsx(qe,{})})]})},Qe=p.memo(Je),Ze=`${v}/api/states/${X}`,Xe=()=>{const[r,e]=l.useState("off"),[i,t]=l.useState(!1);return l.useEffect(()=>{y(Ze).then(n=>{e(n.data.state)}).catch(n=>{b.error("Failed to fetch doorbell state:",n),t(n instanceof Error?n.message:String(n))})},[]),l.useEffect(()=>{let n=null,a=!0;async function o(){let c;try{if(!_)throw new Error("HASS_ACCESS_TOKEN is not configured");c=Q(v,_),a&&t(!1)}catch(d){a&&t(d instanceof Error?d.message:String(d));return}try{n=await Z({auth:c});const d=f=>{a&&e(f.variables.trigger.to_state.state)};await n.subscribeMessage(d,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:X}})}catch(d){a&&t(d instanceof Error?d.message:String(d))}}return o(),()=>{a=!1,n&&n.close()}},[]),[r,i]},et=()=>{y.post(`${v}/api/services/button/press`,{entity_id:Ge})};class E{constructor(e){this.retryPause=2e3,this.conf=e,this.state="getting_codecs",this.restartTimeout=null,this.pc=null,this.offerData=null,this.sessionUrl=null,this.queuedCandidates=[],this.#p()}close(){this.state="closed",this.pc!==null&&this.pc.close(),this.restartTimeout!==null&&clearTimeout(this.restartTimeout)}static#i(e,i){return new Promise(t=>{const n=new RTCPeerConnection({iceServers:[]}),a="audio";let o="";n.addTransceiver(a,{direction:"recvonly"}),n.createOffer().then(c=>{if(c.sdp===void 0)throw new Error("SDP not present");if(c.sdp.includes(` ${e}`))throw new Error("already present");const d=c.sdp.split(`m=${a}`),f=d.slice(1).map(h=>h.split(`\r
`)[0].split(" ").slice(3)).reduce((h,m)=>[...h,...m],[]);o=this.#e(f);const u=d[1].split(`\r
`);return u[0]+=` ${o}`,u.splice(u.length-1,0,`a=rtpmap:${o} ${e}`),i!==void 0&&u.splice(u.length-1,0,`a=fmtp:${o} ${i}`),d[1]=u.join(`\r
`),c.sdp=d.join(`m=${a}`),n.setLocalDescription(c)}).then(()=>n.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:`v=0\r
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
`:"")}))).then(()=>{t(!0)}).catch(()=>{t(!1)}).finally(()=>{n.close()})})}static#n(e){return JSON.parse(`"${e}"`)}static#a(e){return e!==null?e.split(", ").map(i=>{const t=i.match(/^<(.+?)>; rel="ice-server"(; username="(.*?)"; credential="(.*?)"; credential-type="password")?/i),n={urls:[t[1]]};return t[3]!==void 0&&(n.username=this.#n(t[3]),n.credential=this.#n(t[4]),n.credentialType="password"),n}):[]}static#o(e){const i={iceUfrag:"",icePwd:"",medias:[]};for(const t of e.split(`\r
`))t.startsWith("m=")?i.medias.push(t.slice(2)):i.iceUfrag===""&&t.startsWith("a=ice-ufrag:")?i.iceUfrag=t.slice(12):i.icePwd===""&&t.startsWith("a=ice-pwd:")&&(i.icePwd=t.slice(10));return i}static#e(e){for(let i=30;i<=127;i++)if((i<=63||i>=96)&&!e.includes(i.toString())){const t=i.toString();return e.push(t),t}throw Error("unable to find a free payload type")}static#c(e,i){const t=i.split(`\r
`);let n=this.#e(e);return t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} PCMU/8000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),n=this.#e(e),t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} PCMA/8000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),t.join(`\r
`)}static#l(e,i){const t=i.split(`\r
`);let n=this.#e(e);return t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} multiopus/48000/3`),t.splice(t.length-1,0,`a=fmtp:${n} channel_mapping=0,2,1;num_streams=2;coupled_streams=1`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),n=this.#e(e),t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} multiopus/48000/4`),t.splice(t.length-1,0,`a=fmtp:${n} channel_mapping=0,1,2,3;num_streams=2;coupled_streams=2`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),n=this.#e(e),t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} multiopus/48000/5`),t.splice(t.length-1,0,`a=fmtp:${n} channel_mapping=0,4,1,2,3;num_streams=3;coupled_streams=2`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),n=this.#e(e),t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} multiopus/48000/6`),t.splice(t.length-1,0,`a=fmtp:${n} channel_mapping=0,4,1,2,3,5;num_streams=4;coupled_streams=2`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),n=this.#e(e),t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} multiopus/48000/7`),t.splice(t.length-1,0,`a=fmtp:${n} channel_mapping=0,4,1,2,3,5,6;num_streams=4;coupled_streams=4`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),n=this.#e(e),t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} multiopus/48000/8`),t.splice(t.length-1,0,`a=fmtp:${n} channel_mapping=0,6,1,4,5,2,3,7;num_streams=5;coupled_streams=4`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),t.join(`\r
`)}static#d(e,i){const t=i.split(`\r
`);let n=this.#e(e);return t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} L16/8000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),n=this.#e(e),t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} L16/16000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),n=this.#e(e),t[0]+=` ${n}`,t.splice(t.length-1,0,`a=rtpmap:${n} L16/48000/2`),t.splice(t.length-1,0,`a=rtcp-fb:${n} transport-cc`),t.join(`\r
`)}static#f(e){let i="";const t=e.split(`\r
`);for(let n=0;n<t.length;n++)if(t[n].startsWith("a=rtpmap:")&&t[n].toLowerCase().includes("opus/")){i=t[n].slice(9).split(" ")[0];break}if(i==="")return e;for(let n=0;n<t.length;n++)t[n].startsWith(`a=fmtp:${i} `)&&(t[n].includes("stereo")||(t[n]+=";stereo=1"),t[n].includes("sprop-stereo")||(t[n]+=";sprop-stereo=1"));return t.join(`\r
`)}static#u(e,i){const t=e.split("m="),n=t.slice(1).map(a=>a.split(`\r
`)[0].split(" ").slice(3)).reduce((a,o)=>[...a,...o],[]);for(let a=1;a<t.length;a++)if(t[a].startsWith("audio")){t[a]=this.#f(t[a]),i.includes("pcma/8000/2")&&(t[a]=this.#c(n,t[a])),i.includes("multiopus/48000/6")&&(t[a]=this.#l(n,t[a])),i.includes("L16/48000/2")&&(t[a]=this.#d(n,t[a]));break}return t.join("m=")}static#h(e,i){const t={};for(const o of i){const c=o.sdpMLineIndex;t[c]===void 0&&(t[c]=[]),t[c].push(o)}let n=`a=ice-ufrag:${e.iceUfrag}\r
a=ice-pwd:${e.icePwd}\r
`,a=0;for(const o of e.medias){if(t[a]!==void 0){n+=`m=${o}\r
a=mid:${a}\r
`;for(const c of t[a])n+=`a=${c.candidate}\r
`}a++}return n}#t(e){this.state==="running"?(this.pc!==null&&(this.pc.close(),this.pc=null),this.offerData=null,this.sessionUrl!==null&&(fetch(this.sessionUrl,{method:"DELETE"}),this.sessionUrl=null),this.queuedCandidates=[],this.state="restarting",this.restartTimeout=window.setTimeout(()=>{this.restartTimeout=null,this.state="running",this.#s()},this.retryPause),this.conf.onError!==void 0&&this.conf.onError(`${e}, retrying in some seconds`)):this.state==="getting_codecs"&&(this.state="failed",this.conf.onError!==void 0&&this.conf.onError(e))}#p(){Promise.all([["pcma/8000/2"],["multiopus/48000/6","channel_mapping=0,4,1,2,3,5;num_streams=4;coupled_streams=2"],["L16/48000/2"]].map(e=>E.#i(e[0],e[1]).then(i=>i?e[0]:!1))).then(e=>e.filter(i=>i!==!1)).then(e=>{if(this.state!=="getting_codecs")throw new Error("closed");this.nonAdvertisedCodecs=e,this.state="running",this.#s()}).catch(e=>{this.#t(e)})}#s(){this.#m().then(e=>this.#g(e)).then(e=>this.#x(e)).then(e=>this.#y(e)).catch(e=>{this.#t(e.toString())})}#m(){return fetch(this.conf.url,{method:"OPTIONS"}).then(e=>E.#a(e.headers.get("Link")))}#g(e){if(this.state!=="running")throw new Error("closed");this.pc=new RTCPeerConnection({iceServers:e,sdpSemantics:"unified-plan"});const i="recvonly";return this.pc.addTransceiver("video",{direction:i}),this.pc.addTransceiver("audio",{direction:i}),this.pc.onicecandidate=t=>this.#w(t),this.pc.onconnectionstatechange=()=>this.#b(),this.pc.ontrack=t=>this.#v(t),this.pc.createOffer().then(t=>(t.sdp=E.#u(t.sdp,this.nonAdvertisedCodecs),this.offerData=E.#o(t.sdp),this.pc.setLocalDescription(t).then(()=>t.sdp)))}#x(e){if(this.state!=="running")throw new Error("closed");return fetch(this.conf.url,{method:"POST",headers:{"Content-Type":"application/sdp"},body:e}).then(i=>{switch(i.status){case 201:break;case 404:throw new Error("stream not found");case 400:return i.json().then(t=>{throw new Error(t.error)});default:throw new Error(`bad status code ${i.status}`)}return this.sessionUrl=new URL(i.headers.get("location"),this.conf.url).toString(),i.text()})}#y(e){if(this.state!=="running")throw new Error("closed");return this.pc.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:e})).then(()=>{this.state==="running"&&this.queuedCandidates.length!==0&&(this.#r(this.queuedCandidates),this.queuedCandidates=[])})}#w(e){this.state==="running"&&e.candidate!==null&&(this.sessionUrl===null?this.queuedCandidates.push(e.candidate):this.#r([e.candidate]))}#r(e){fetch(this.sessionUrl,{method:"PATCH",headers:{"Content-Type":"application/trickle-ice-sdpfrag","If-Match":"*"},body:E.#h(this.offerData,e)}).then(i=>{switch(i.status){case 204:break;case 404:throw new Error("stream not found");default:throw new Error(`bad status code ${i.status}`)}}).catch(i=>{this.#t(i.toString())})}#b(){this.state==="running"&&(this.pc.connectionState==="failed"||this.pc.connectionState==="closed")&&this.#t("peer connection closed")}#v(e){this.conf.onTrack!==void 0&&this.conf.onTrack(e)}}const tt=(r,e,i)=>{const[t,n]=l.useState(void 0);l.useEffect(()=>{if(i&&i.current&&!t&&e){const a=new E({url:r,onError:o=>{b.error("Cannot load WHEP stream: ",r,o)},onTrack:o=>{i.current.srcObject=o.streams[0],n(a)}});return()=>{a&&a.close()}}},[r,e,t]),l.useEffect(()=>{!e&&t&&(t.close(),n(void 0))},[e,t])},O=({src:r,show:e,...i})=>{const t=l.useRef();return tt(r,e,t),s.jsx("video",{ref:t,...i})},F=45e3,nt=x.div`

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
`,st=()=>{const[r,e]=l.useState(!1),[i]=Xe(),[t,n]=l.useState(void 0),[a,o]=l.useState(100),[c,d]=l.useState("0");l.useEffect(()=>{if(i==="off"&&r){const m=window.setTimeout(()=>{e(!1),n(void 0)},F);return n(m),d(F+"ms"),o(0),()=>{m&&window.clearTimeout(m)}}else i==="on"&&(d(0),o(100),e(!0))},[i,r]),l.useEffect(()=>{i==="on"&&t!==void 0&&(window.clearTimeout(t),d(0),o(100),n(void 0))},[t,i]);const[f,u]=l.useState(!1),h=()=>{et(),u(!0)};return l.useEffect(()=>{if(f){const m=setTimeout(()=>u(!1),1e3);return()=>clearTimeout(m)}},[f]),s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>e(m=>!m),children:"CCTV"}),s.jsx(k,{visible:r,onClick:()=>e(!1),fullsize:!0,children:s.jsxs(nt,{children:[s.jsx(ne,{completed:a,height:10,bgColor:t===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:c,transitionTimingFunction:"linear"}),s.jsxs("div",{className:"grid",style:{display:r?"flex":"none"},children:[s.jsx("div",{onClick:()=>h(),children:s.jsx(O,{src:"http://192.168.188.10:8889/tuerklingel_sub/whep",show:r,muted:!0,controls:!1,autoPlay:!0,width:"360",height:"480"})}),s.jsxs("div",{onClick:()=>h(),children:[s.jsx(O,{src:"http://192.168.188.10:8889/eingang/whep",show:r,muted:!0,controls:!1,autoPlay:!0,width:"100%"}),s.jsx(O,{src:"http://192.168.188.10:8889/weg/whep",show:r,muted:!0,controls:!1,autoPlay:!0,width:"100%",height:"240px"})]})]}),f&&s.jsx("div",{className:"open-door",children:"Tür öffnet sich"})]})})]})},rt=x.div`
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

`,it=({nextWeek:r,previousWeek:e,startWeekWithToday:i})=>s.jsxs(rt,{children:[s.jsxs("div",{className:"buttons",children:[s.jsx(S,{path:ve,size:"32px",color:"#ffffff",onClick:e}),s.jsx(S,{path:je,size:"32px",color:"#ffffff",onClick:r}),s.jsx("button",{onClick:i,children:"Today"}),s.jsx(st,{})]}),s.jsx(Qe,{}),s.jsx(S,{path:Se,size:"32px",color:"#ffffff",className:j("indicator")})]}),at=p.memo(it),ot=6e4,R=(r=ot,e=void 0)=>{const[i,t]=l.useState(!0);return l.useEffect(()=>{const n=setInterval(()=>{t(a=>!a)},r);return()=>{clearInterval(n)}},[r,e]),i},ct=r=>`${v}/api/calendars/${r}`,lt=(r,e)=>`${ct(r)}?${Oe.stringify(e)}`,dt=[{name:"calendar.hamsischwan_s_kalender",icon:void 0},{name:"calendar.biotonne",icon:D},{name:"calendar.gelber_sack",icon:D},{name:"calendar.blaue_tonne",icon:D},{name:"calendar.schwarze_tonne",icon:D},{name:"calendar.familiengeburtstage",icon:Ee}],ft=(r,e,i,t)=>y(lt(r.name,{start:e.toISO(),end:i.toISO()}),{timeout:1e4}).then(n=>{!n.data||!Array.isArray(n.data)||n.data.forEach(a=>{const o="dateTime"in a.start?g.fromISO(a.start.dateTime):g.fromSQL(a.start.date);let c;"dateTime"in a.end?c=Math.floor(g.fromISO(a.end.dateTime).diff(e,"days").as("days")):c=Math.floor(g.fromSQL(a.end.date).diff(e,"days").as("days"))-1;const d=Math.floor(o.diff(e,"days").as("days"));c>=t.length&&(c=t.length-1);const f="dateTime"in a.start?"events":"allDay";if(d>=0&&d<t.length)for(let u=d;u<=c;u++)t[u][f]=[...t[u][f],{...a,icon:r.icon}]})}),G=new Map,ut=300*1e3,ht=r=>r.toISODate(),pt=(r,e,i,t,n)=>{const a=[0,1,2,3,4,5].map(u=>r.plus({days:u}).startOf("day"));a[6]=r.plus({days:6}).endOf("day");const o=ht(r),c=G.get(o);if(c&&Date.now()-c.timestamp<ut){i(c.data);return}const d=a.map(u=>({date:u,allDay:[],events:[]})),f=new AbortController;n.current&&n.current.abort(),n.current=f;try{t(!0);const u=dt.map(h=>ft(h,a[0],a[6],d));Promise.all(u).then(()=>{f.signal.aborted||(G.set(o,{data:d,timestamp:Date.now()}),i(d))}).catch(h=>{f.signal.aborted||b.error("Could not load calendar",h)}).finally(()=>{f.signal.aborted||t(!1)})}catch(u){f.signal.aborted||(b.error("Error loading calendar data:",u),t(!1))}},U=[],mt=r=>{const[e,i]=l.useState(U),[t,n]=l.useState(!1),a=R(6e4,"Calendar"),[o,c]=l.useState(null),d=p.useRef(null);return l.useEffect(()=>(r!==void 0&&((o===null||!o.equals(r))&&(i(U),c(r)),pt(r,e,i,n,d)),()=>{d.current&&d.current.abort()}),[r,a]),e};function T(r){const[e,i]=l.useState(!1);function t({key:a}){a===r&&i(!0)}const n=({key:a})=>{a===r&&i(!1)};return l.useEffect(()=>(window.addEventListener("keydown",t),window.addEventListener("keyup",n),()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}),[r]),e}const gt=()=>{let r=new Date,i=(r.getDay()+6)%7,t=new Date(r.setDate(r.getDate()-i));return g.fromJSDate(t)},xt=r=>{const e=()=>r(c=>c.plus({days:7})),i=T("ArrowRight");l.useEffect(()=>{i&&e()},[i]);const t=()=>r(c=>c.minus({days:7})),n=T("ArrowLeft");l.useEffect(()=>{n&&t()},[n]);const a=()=>r(gt()),o=T("t");return l.useEffect(()=>{o&&a()},[o]),{nextWeek:e,previousWeek:t,startWeekWithToday:a}},yt=r=>{const[e,i]=p.useState(0),[t,n]=p.useState(0),a=50;return{onTouchStart:f=>{n(0),i(f.targetTouches[0].clientX)},onTouchMove:f=>n(f.targetTouches[0].clientX),onTouchEnd:()=>{if(!e||!t)return;const f=e-t,u=f>a,h=f<-a;u&&r.onSwipedLeft(),h&&r.onSwipedRight()}}},B=r=>g.fromISO(r).toLocaleString(g.TIME_24_SIMPLE),I=r=>r.toFormat("c")>=6,A=r=>r.hasSame(g.now(),"day"),wt=x.div`

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
`,bt=()=>{const[r,e]=l.useState(void 0),i=mt(r),{nextWeek:t,previousWeek:n,startWeekWithToday:a}=xt(e);l.useEffect(()=>{a()},[]);const o=yt({onSwipedLeft:()=>t(),onSwipedRight:()=>n()}),c=p.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),d=p.useMemo(()=>i.slice(0,7),[i]);return s.jsxs(wt,{...o,children:[s.jsx(at,{nextWeek:t,previousWeek:n,startWeekWithToday:a}),s.jsxs("div",{className:"schedule",children:[d.map((f,u)=>s.jsx("div",{className:j({weekend:I(f.date),today:A(f.date)},"caption"),children:s.jsx("h2",{children:f.date.toLocaleString(c)})},u)),d.map((f,u)=>s.jsx("div",{className:j("allDayRow",{weekend:I(f.date),today:A(f.date)}),children:f.allDay.map((h,m)=>s.jsx("div",{className:"allDayEvent",children:h.summary},m))},u)),d.map((f,u)=>s.jsx("div",{className:j("eventRow",{weekend:I(f.date),today:A(f.date)}),children:f.events.map((h,m)=>s.jsxs("div",{className:"event",children:[s.jsx("div",{children:h.summary}),s.jsxs("h3",{children:[h.icon&&s.jsx(S,{path:h.icon,size:"1rem",color:"#ffffff"}),B(h.start.dateTime)," - ",B(h.end.dateTime)]})]},m))},u))]}),i.length===0&&s.jsx("div",{className:"loading",children:s.jsx(J,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})]})},L={"clear-day":{icon:ue,label:"Klar",color:"#eeeef5"},"clear-night":{icon:fe,label:"Klar",color:"#eeeef5"},rain:{icon:de,label:"Regen",color:"#80a5d6"},snow:{icon:le,label:"Schnee",color:"#8c82ce"},sleet:{icon:ce,label:"Graupel",color:"#aba4db"},wind:{icon:oe,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:ae,label:"Neblig",color:"#d5dae2"},cloudy:{icon:ie,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:re,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:se,label:"Teils bewölkt",color:"#d5dae2"}},vt=()=>`./forecast/${Me}/${We},${Pe}?&units=si&exclude=minutely`,jt=r=>{const[e,i]=l.useState([]),t=R(6e4*10,"Weather");return l.useEffect(()=>{y(vt()).then(n=>{i(n.data)}).catch(n=>{b.error("Could not load weather data",n)}).finally(()=>{})},[t,r]),e},St=pe(me),Et=x.div`

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
`,V=p.memo(({data:r,daily:e=!1})=>s.jsxs("div",{children:[s.jsxs("div",{children:[!e&&g.fromSeconds(r.time).toLocaleString(g.TIME_24_SIMPLE),e&&g.fromSeconds(r.time).setLocale("de").toFormat("ccc, d.M")]}),s.jsx("div",{children:s.jsx(P,{icon:r.icon})}),s.jsx("div",{children:s.jsxs("strong",{children:[!e&&s.jsxs(s.Fragment,{children:[Math.round(r.temperature),"°"]}),e&&s.jsxs(s.Fragment,{children:[Math.round(r.temperatureHigh),"° / ",Math.round(r.temperatureLow),"°"]})]})}),s.jsxs("div",{children:[Math.round(r.precipProbability*100)," %"]}),s.jsxs("div",{children:[(r.precipIntensity*100).toFixed(1)," mm"]})]})),Tt=r=>!r||!r.hourly||!r.hourly.data?[]:r.hourly.data.slice(0,24).map(e=>({color:L[e.icon]?.color||"#ffffff",text:L[e.icon]?.label||"",annotation:`${Math.round(e.temperature)}°`,time:e.time})),P=({icon:r})=>{const e=L[r];return s.jsx(e.icon,{size:60,color:"#ffffff"})},kt=({pin:r})=>{const e=jt(),[i,t]=l.useState(!1),n=T("w"),a=l.useRef(),o=p.useCallback(()=>t(h=>!h),[]),c=p.useCallback(()=>t(!0),[]),d=p.useMemo(()=>Tt(e),[e]),f=p.useMemo(()=>[3,6,9,12],[]),u=p.useMemo(()=>[1,2,3,4,5,6,7],[]);return l.useEffect(()=>{if(!a.current||!e||!e.hourly||d.length===0)return;const h={timezone:"Europe/Berlin"},m=document.createElement("div");return a.current.textContent="",a.current.appendChild(m),Ie(m,d,h),()=>{a.current&&(a.current.textContent="")}},[d]),l.useEffect(()=>{(n||r===17)&&o()},[n,r]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?"":s.jsxs(Et,{children:[s.jsxs("div",{onClick:c,children:[s.jsxs("div",{className:"headline",children:[s.jsx(P,{icon:e.currently.icon}),s.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),s.jsx("div",{className:"forecast",children:f.map((h,m)=>s.jsx(V,{data:e.hourly.data[h]},m))})]}),s.jsx(k,{visible:i,onClick:o,children:s.jsxs("div",{className:"full-weather",children:[s.jsxs("div",{className:"detail-header",children:[s.jsx("div",{children:s.jsxs("div",{className:"headline",children:[s.jsx(P,{icon:e.daily.data[0].icon}),s.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",s.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),s.jsx("h3",{children:L[e.daily.data[0].icon].label})]}),s.jsx("div",{className:"values",children:s.jsxs("div",{className:"table",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),s.jsxs("div",{children:[s.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),s.jsxs("div",{children:[s.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),s.jsxs("div",{children:[s.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),s.jsxs("div",{children:[s.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),s.jsxs("div",{children:[s.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),s.jsxs("div",{children:[s.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]}),s.jsxs("div",{children:[s.jsx("span",{children:"Windgeschwindigkeit:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]})]})}),s.jsx("h3",{children:"Die nächsten 24 Stunden"}),s.jsx("div",{ref:a}),s.jsx("h3",{children:"Die nächste Woche"}),s.jsx("div",{className:"forecast",children:u.map((h,m)=>s.jsx(V,{data:e.daily.data[h],daily:!0},m))}),s.jsxs("div",{className:"info",children:["Aktualisiert ",s.jsx(he,{date:g.fromSeconds(e.currently.time).toJSDate(),formatter:St})]})]})})]})},$t=p.memo(kt);async function Dt(r){throw new Error("GEOFOX_SECRET is not configured")}const Ct="AK Wandsbek",Nt="Hamburg",_t="Master:62016",Lt="STATION",Ot={x:10.091341,y:53.568702},It={name:Ct,city:Nt,id:_t,type:Lt,coordinate:Ot},C={departureList:"departureList",checkName:"checkName"},At=async(r,e)=>y({method:"post",url:`./gti/public/${r}`,data:e,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":Re,"geofox-auth-signature":await Dt(),Authorization:void 0}}),Y=(r,e)=>r.realtimeOffset-e.realtimeOffset,Mt=r=>{const e=r.departures.map(i=>({line:i.line.name,direction:i.line.direction,timeOffset:i.timeOffset,delay:i.delay?i.delay:"0",directionId:i.directionId,realtimeOffset:i.timeOffset+(i.delay?i.delay:0)/60}));return{from:e.filter(i=>i.directionId===1).slice(0,3).sort(Y),to:e.filter(i=>i.directionId===6).slice(0,3).sort(Y)}},Wt=r=>{const[e,i]=l.useState([]),t=R(6e4);return l.useEffect(()=>{if(!(r in C))return;let n={version:51};switch(r){case C.checkName:n={...n,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case C.departureList:const a=g.now();n={...n,station:It,time:{date:a.toFormat("dd.MM.yyyy"),time:a.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:n=void 0}At(r,n).then(a=>{i(Mt(a.data))}).catch(a=>{b.error("Error calling Geofox API",a)})},[r,t]),e},Pt=x.div`
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
`,q=p.memo(({line:r,direction:e,realtimeOffset:i})=>s.jsxs("div",{className:"departure",children:[s.jsx("div",{children:s.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${r}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${r}`})}),s.jsx("div",{children:i===0?"Jetzt":s.jsxs(s.Fragment,{children:["in ",i," '"]})})]})),Rt=()=>{const r=Wt(C.departureList);return s.jsxs(Pt,{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:s.jsxs("g",{transform:"translate(10368 -6294)",children:[s.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),s.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),s.jsx("h3",{children:"→ Wandsbek"}),r.to?.map((e,i)=>s.jsx(q,{line:e.line,direction:e.direction,realtimeOffset:e.realtimeOffset},i)),s.jsx("h3",{children:"→ Stadtauswärts"}),r.from?.map((e,i)=>s.jsx(q,{line:e.line,direction:e.direction,realtimeOffset:e.realtimeOffset},i))]})},Ht=p.memo(Rt),zt=`${v}/api/states/${$}`,Ft=()=>{const[r,e]=l.useState("closed"),[i,t]=l.useState(!1);return l.useEffect(()=>{y(zt).then(n=>{e(n.data.state)}).catch(n=>{b.error("Failed to fetch garage door state:",n),t(n instanceof Error?n.message:String(n))})},[]),l.useEffect(()=>{let n=null,a=!0;async function o(){let c;try{if(!_)throw new Error("HASS_ACCESS_TOKEN is not configured");c=Q(v,_),a&&t(!1)}catch(d){a&&t(d instanceof Error?d.message:String(d));return}try{n=await Z({auth:c});const d=f=>{a&&e(f.variables.trigger.to_state.state)};await n.subscribeMessage(d,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:$}})}catch(d){a&&t(d instanceof Error?d.message:String(d))}}return o(),()=>{a=!1,n&&n.close()}},[]),[r,i]},Gt=r=>{r(!0);const e=setTimeout(()=>r(!1),3e3);y.post(`${v}/api/services/cover/toggle`,{entity_id:$}).finally(()=>{clearTimeout(e),r(!1)})},Ut=r=>{r(!0);const e=setTimeout(()=>r(!1),3e3);y.post(`${v}/api/services/cover/open_cover`,{entity_id:$}).finally(()=>{clearTimeout(e),r(!1)})},Bt=r=>{r(!0);const e=setTimeout(()=>r(!1),3e3);y.post(`${v}/api/services/cover/close_cover`,{entity_id:$}).finally(()=>{clearTimeout(e),r(!1)})},Vt=x.div`
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
`,Yt=x.div`
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
`,K=r=>({unknown:{label:"In Bewegung oder halb-offen",icon:Ce},open:{label:"Offen",icon:De},closed:{label:"Geschlossen",icon:$e},opening:{label:"Öffnet",icon:ke},closing:{label:"Schließt",icon:Te}})[r]||{label:"Unavailable",icon:Ne},te=({garageDoor:r,animate:e=!1})=>s.jsxs(Yt,{className:j({animate:e}),children:[s.jsx(S,{path:K(r).icon,size:"2rem",color:"#ffffff"}),s.jsx("span",{children:K(r).label})]}),qt=(r,e)=>ge.promise(r,{pending:"Garagentor ist in Bewegung …",success:{render({data:i}){return s.jsx(te,{garageDoor:i})}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark"}),Kt=()=>{const[r,e]=Ft(),[i,t]=l.useState(void 0),[n,a]=l.useState(!1),[o,c]=l.useState(!1);l.useEffect(()=>{if(r==="unknown"||r==="opening"||r==="closing"){if(!i){const h=new Promise(m=>{t({resolve:m})});qt(h)}}else i&&(i.resolve(r),t(void 0))},[r]);const d=T("g");l.useEffect(()=>{d&&Gt(a)},[d]);const f=p.useCallback(u=>{switch(c(!1),u){case"open":Ut(a);break;case"close":Bt(a);break}},[a]);return l.useEffect(()=>{e!==!1&&c(!0)},[e]),s.jsxs(Vt,{children:[s.jsx("h2",{children:"Garage"}),s.jsx("div",{onClick:()=>c(!0),children:s.jsx(te,{garageDoor:r,animate:n})}),s.jsx(k,{visible:o,onClick:()=>c(!1),children:s.jsxs("div",{className:"controls",children:[e!==!1&&s.jsxs("div",{children:[s.jsx("h3",{children:"Fehler!"}),s.jsx("div",{children:e instanceof Error?e.message:String(e)})]}),s.jsx("div",{onClick:()=>f("open"),children:"Öffnen"}),s.jsx("div",{onClick:()=>f("close"),children:"Schließen"})]})})]})},Jt=p.memo(Kt),Qt=r=>`${v}/api/states/${r}`,w={done:{label:"Fertig",animate:!1,icon:Le},off:{label:"Aus",animate:!1,icon:_e},standby:{label:"Standby",animate:!1,icon:H},running:{label:"Läuft …",animate:!0,icon:H}},M={off:0,standby:2,running:16,done:256},Zt=()=>{const r=W(He),e=W(ze),i=W(Fe),[t,n]=l.useState(w.off);return l.useEffect(()=>{const a=M[r]+M[e]+M[i];a===0?n(w.off):a<16?n(w.standby):a<256?n(w.running):a%256===0?n(w.done):a%256%16===0?n(w.running):a%256%2===0?n(w.done):n(w.running)},[e,r,i]),[t,[{label:"Neue Waschmaschine",state:r},{label:"Alte Waschmaschine",state:e},{label:"Trockner",state:i}]]},W=r=>{const[e,i]=l.useState("off");return l.useEffect(()=>{y(Qt(r)).then(t=>{i(t.data.state)}).catch(t=>{b.error(`Failed to fetch state for ${r}:`,t)})},[r]),l.useEffect(()=>{async function t(){{b.error("HASS_ACCESS_TOKEN is not configured");return}}return t(),()=>{}},[r]),e},Xt=x.div`
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
  }
  .subtitle {
    margin: 1rem 0 0 0;
    font-size: 1.2rem;
  }
`,en=()=>{const[r,e]=Zt(),[i,t]=l.useState(!1),n=p.useCallback(()=>t(!0),[]),a=p.useCallback(()=>t(!1),[]);return s.jsxs(Xt,{children:[s.jsx("h2",{children:"Wäsche"}),s.jsxs("div",{className:"status",onClick:n,children:[s.jsx("div",{className:j({animate:r.animate}),children:s.jsx(S,{path:r.icon,size:"2rem",color:"#ffffff"})}),s.jsx("span",{children:r.label})]}),s.jsx(k,{visible:i,onClick:a,children:s.jsx("div",{className:"states",children:e.map((o,c)=>s.jsxs("div",{children:[s.jsx("div",{className:j({animate:w[o.state].animate}),children:s.jsx(S,{path:w[o.state].icon,size:2})}),s.jsx("div",{children:w[o.state].label}),s.jsx("div",{className:"subtitle",children:o.label})]},c))})})]})},tn=p.memo(en),nn=x.div`
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
`,sn=({pin:r})=>s.jsxs(nn,{children:[s.jsx($t,{pin:r}),s.jsx(Ht,{}),s.jsxs("div",{className:"two-cols",children:[s.jsx(Jt,{}),s.jsx(tn,{})]})]}),rn=p.memo(sn),an=()=>{function r(i,t){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(t))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[a,o]=t.split(":").map(Number),c=new Date;let d=new Date(c.getFullYear(),c.getMonth(),c.getDate());d.setHours(a,o,0,0),d<=c&&d.setDate(d.getDate()+1);const f=d.getTime()-c.getTime();return setTimeout(i,f)}const e=()=>{window.location.reload(!0)};l.useLayoutEffect(()=>{const i=[r(e,"00:00"),r(e,"03:00"),r(e,"06:00"),r(e,"09:00"),r(e,"12:00"),r(e,"15:00"),r(e,"18:00"),r(e,"21:00")];return()=>{i.forEach(t=>{t&&clearTimeout(t)})}},[])},on=x.div`
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
`;class N extends l.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,i){this.setState({error:e,errorInfo:i}),b.error("ErrorBoundary caught an error:",e,i)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?s.jsxs(on,{children:[s.jsx("h2",{children:"Something went wrong"}),s.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,s.jsxs("div",{children:[s.jsx("button",{onClick:this.handleReset,children:"Try Again"}),s.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const cn=xe`
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
`,ln=x.div`
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
`;function dn(){return an(),s.jsx(N,{children:s.jsxs(ln,{children:[s.jsx(cn,{}),s.jsxs("div",{className:"main",children:[s.jsx(N,{children:s.jsx(bt,{})}),s.jsx(N,{children:s.jsx(rn,{pin:void 0})})]}),s.jsx(ye,{})]})})}const fn=we.createRoot(document.getElementById("root"));fn.render(s.jsx(l.StrictMode,{children:s.jsx(N,{children:s.jsx(dn,{})})}));
