import{d as v,j as t,I as Y,R as S,l as Ge,r as O,P as lt,W as ct,b as dt,e as ht,f as ft,h as ut,i as pt,k as mt,m as gt,n as xt,o as wt,T as yt,p as bt,s as jt,y as Et,q as At,t as St,u as ge,L as Lt,v as kt,B as Ct}from"./react-vendor-SoRfWBCf.js";import{D as P}from"./date-vendor-BDx6lZXm.js";import{n as G}from"./vendor-DXU8y-C2.js";import{m as Tt,a as vt,b as Dt,c as Ot,d as Rt,e as Nt,f as Ye,g as Wt,h as _t,i as Pt,j as Mt,k as $t,l as It,n as ve,o as Vt,p as Ft}from"./ui-vendor-DhGbN51c.js";import{a as M,q as zt,B as Bt,h as Ut}from"./utils-vendor-Cy1MG2Zy.js";import{c as Se,a as Le}from"./ha-vendor-CoU0AojH.js";import{t as Ht}from"./chart-vendor-ClWajKr-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const Gt=v.div`
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
`,se=({visible:e,children:o,onClick:i,onClose:n,fullsize:s=!1})=>{const a=n||i,d=l=>{l.stopPropagation(),l.preventDefault(),a()};return e?t.jsxs(Gt,{onClick:i,children:[t.jsx("div",{className:"close",onClick:d,children:t.jsx(Y,{path:Tt,size:2})}),t.jsx("div",{className:G("content",{fullsize:s}),onClick:l=>l.stopPropagation(),children:o})]}):null},W={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},Ke=e=>{const o={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1};return e.response?(o.status=e.response.status,o.responseData=e.response.data,o.url=e.config?.url||e.request?.responseURL||"Unknown URL",o.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(o.isNetworkError=!0,o.url=e.config?.url||"Unknown URL",o.message="Network error: No response received from server"):(o.message=e.message||"Request setup error",o.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(o.isTimeoutError=!0,o.message="Request timeout: The request took too long to complete"),o},Yt=(e,o="")=>{const i=Ke(e),n=[];return o&&n.push(`[${o}]`),n.push("Axios API Error:"),n.push(i.message),i.url&&n.push(`URL: ${i.url}`),i.status&&n.push(`Status: ${i.status}`),i.responseData&&n.push("Response:",i.responseData),W.error(...n),i},Q=e=>{const o=Ke(e);return o.isNetworkError?"":o.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":o.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":o.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":o.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":o.status>=500?"Serverfehler: Bitte später erneut versuchen":o.message||"Ein Fehler ist aufgetreten"},Kt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},_=(e,o=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[e]!==void 0){const n=window.APP_CONFIG[e];return n==="undefined"||n==="null"?o:n??o}return o}const i=Kt[`VITE_${e}`];return e==="HASS_ACCESS_TOKEN"&&i!==void 0?o:i!==void 0?i:o},Xt=(e,o=!1)=>{const i=_(e,o);return typeof i=="boolean"?i:typeof i=="string"?i==="true"||i==="1"||i==="yes":!!i};_("HASS_HOST","");const X=_("HASS_ACCESS_TOKEN",""),qt=X&&typeof X=="string"&&X.trim()!==""&&X!=="undefined"&&X!=="null";qt?M.defaults.headers.common.Authorization=`Bearer ${X}`:delete M.defaults.headers.common.Authorization;M.interceptors.response.use(e=>e,e=>{const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";return Yt(e,o),Promise.reject(e)});const Xe=_("WEATHER_API_KEY"),qe=_("WEATHER_LATITUDE"),Je=_("WEATHER_LONGITUDE"),je=_("GEOFOX_SECRET"),Qe=_("GEOFOX_USER"),U=_("ENTITY_GARAGE_DOOR"),te=_("ENTITY_DOORBELL"),De=_("ENTITY_DOORBELL_BUTTON"),Ee=_("ENTITY_EVERYDAY_CALENDAR"),ke=_("SUPERVISOR_TOKEN"),Jt=(()=>{const e=_("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),fe=(()=>{const e=_("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),Qt=_("GO2RTC_BASE_URL","http://192.168.188.10:1984"),ie=(()=>{const e=_("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),oe=(e,o)=>_(e,void 0)!==void 0?Xt(e,!1):!1,Ze=oe("ENABLE_WEATHER"),et=oe("ENABLE_HVV"),tt=oe("ENABLE_GARAGE"),ot=oe("ENABLE_LAUNDRY",Array.isArray(fe)&&fe.length>0),it=oe("ENABLE_DOORBELL"),nt=oe("ENABLE_EVERYDAY_CALENDAR"),q=e=>{const o=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const i=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${i}${o}`}return o}},ne=Ee?q(`/api/states/${Ee}`):null,Zt=()=>{const[e,o]=S.useState(null),[i,n]=S.useState(!1),s=nt&&Ee;return S.useEffect(()=>{!s||!ne||M(ne).then(a=>{a.data.attributes.store!==void 0?o(a.data.attributes.store):o([]),n(!1)}).catch(a=>{n(Q(a)),o([])})},[s,ne]),[e,i]},eo=e=>{ne&&M.post(ne,{state:new Date,attributes:{store:e}}).catch(o=>{W.error("Failed to store everyday calendar data:",o)})},Oe=v.div` 

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
`,to=({on:e,month:o,day:i})=>{const[n,s]=e,a=n.indexOf(`${o}-${i}`),d=a>-1,l=()=>{s(d?n.toSpliced(a,1):[...n,`${o}-${i}`])};return t.jsx("div",{className:G("dot",{on:d}),onClick:()=>l()})},oo=()=>{if(!nt)return null;const e=new Date().getFullYear(),o=[];for(let l=1;l<13;l++){const x=new Date(e,l,0).getDate();for(let u=1;u<=x;u++)o.push({month:l,day:u})}const i=Array.from({length:31},(l,x)=>x+1),n=Array.from({length:12},(l,x)=>x+1),s=S.useState(void 0),[a,d]=Zt();return S.useEffect(()=>{a!==null&&s[1](a)},[a]),S.useEffect(()=>{s[0]!==void 0&&eo(s[0])},[s[0]]),s[0]!==void 0?t.jsxs(Oe,{children:[t.jsx("h2",{children:"Jeden Tag ein bißchen"}),d!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:d instanceof Error?d.message:String(d)})]}),t.jsxs("div",{className:"calendar",children:[i.map((l,x)=>t.jsx("div",{style:{gridArea:`${l+1} / 1 / ${l+1} / 1`},children:l},x)),n.map((l,x)=>t.jsx("div",{style:{gridArea:`1 / ${l+1} / 1 / ${l+1}`},children:l},x)),o.map((l,x)=>t.jsx("div",{style:{gridArea:`${l.day+1} / ${l.month+1} / ${l.day+1} / ${l.month+1}`},children:t.jsx(to,{on:s,month:l.month,day:l.day})},x))]})]}):t.jsx(Oe,{className:"loading",children:d!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:d instanceof Error?d.message:String(d)})]}):t.jsx(Ge,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},io=v.div`
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
  }`,no=()=>{const[e,o]=S.useState(P.now()),[i,n]=S.useState(!1),s=O.useCallback(()=>n(!0),[]),a=O.useCallback(()=>n(!1),[]);return S.useEffect(()=>{const d=setInterval(()=>o(P.now()),1e3);return()=>clearInterval(d)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(io,{onClick:s,children:[e.toFormat("HH"),t.jsx("span",{children:":"}),e.toFormat("mm")]}),t.jsx(se,{visible:i,onClick:a,fullsize:!0,children:t.jsx(oo,{})})]})},ro=O.memo(no),xe=te?q(`/api/states/${te}`):null,so=()=>{const[e,o]=S.useState("off"),[i,n]=S.useState(!1),s=it&&te;return S.useEffect(()=>{!s||!xe||M(xe).then(a=>{o(a.data.state),n(!1)}).catch(a=>{n(Q(a))})},[s,xe]),S.useEffect(()=>{let a=null,d=!0;async function l(){if(!s||!te)return;let x;if(typeof window<"u"&&window.location){const y=window.location.pathname.replace(/\/$/,"");x=`${window.location.origin}${y}`}else x="";const u=ke||X||"";if(!u)return;let m;try{W.debug(`Creating auth with host: ${x}, token length: ${u?u.length:0}`),m=Se(x,u),W.debug(`Auth created - wsUrl: ${m?.wsUrl}, accessToken present: ${!!m?.accessToken}`),d&&n(!1)}catch(y){d&&(W.error("Failed to create WebSocket auth:",y),n(y instanceof Error?y.message:String(y)));return}try{W.debug(`Creating WebSocket connection with auth - wsUrl: ${m.wsUrl}`),W.debug("About to call createConnection - this should trigger WebSocket upgrade request"),a=await Le({auth:m}),W.debug("WebSocket connection established successfully");const y=E=>{if(d){const L=E.variables.trigger.to_state.state;W.debug(`Doorbell state update via WebSocket: ${L}`),o(L)}};await a.subscribeMessage(y,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:te}}),W.debug(`Subscribed to doorbell entity: ${te}`)}catch(y){d&&(W.error("Failed to setup WebSocket connection:",y),W.error("WebSocket error details:",{message:y instanceof Error?y.message:String(y),code:y.code,name:y.name,wsUrl:m?.wsUrl,host:x,tokenLength:u?u.length:0}),y.code===2&&W.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),n(y instanceof Error?y.message:String(y)))}}return l(),()=>{d=!1,a&&a.close()}},[s]),[e,i]},ao=()=>{De&&M.post(q("/api/services/button/press"),{entity_id:De}).catch(e=>{W.error("Failed to unlatch front door:",e)})},D={portrait:360/480,landscape:1920/1072,wide:770/216};function lo(e){const o={landscape:0,portrait:0,wide:0};return e.forEach(i=>{i.orientation&&o.hasOwnProperty(i.orientation)&&o[i.orientation]++}),o}function rt(e,o,i){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const n=e.length,s=lo(e);return n===1?co(e[0],o,i):n===2?ho(s,e,o,i):n===3?fo(s,e,o,i):n===4?uo(s,e,o,i):{videos:[],totalArea:0,efficiency:0}}function co(e,o,i){const n=D[e.orientation];let s,a;const d=o/i;return n>d?(s=o,a=o/n):(a=i,s=i*n),{videos:[{x:(o-s)/2,y:(i-a)/2,width:s,height:a,orientation:e.orientation}],totalArea:s*a,efficiency:s*a/(o*i)*100}}function ho(e,o,i,n){if(e.portrait>0)return Ce(e,o,i,n);const s=[];e.landscape>0&&s.push("landscape"),e.wide>0&&s.push("wide");const a=s[0]||o[0].orientation,d=s[1]||o[1].orientation,l=D[a],x=D[d];if(e.landscape===1&&e.wide===1){const j=D.landscape,b=D.wide,f=i,p=f/j,r=f/b,h=p+r;let w,c,g;if(h<=n)w=p,c=r,g=f;else{const $=n/h;w=p*$,c=r*$,g=c*b}const A=(i-g)/2,C=H(o,[{x:A,y:0,width:g,height:c,orientation:"wide"},{x:A,y:c,width:g,height:w,orientation:"landscape"}]),T=g*w+g*c,R=T/(i*n)*100;return{videos:C,totalArea:T,efficiency:R}}if(e.wide===2){const j=D.wide,b=i,f=b/j,p=f*2;let r;p<=n?r=f:r=n/2;const w=H(o,[{x:0,y:0,width:b,height:r,orientation:"wide"},{x:0,y:r,width:b,height:r,orientation:"wide"}]),c=b*r*2,g=c/(i*n)*100;return{videos:w,totalArea:c,efficiency:g}}const u=[()=>{const j=i,b=j/2,f=j/2,p=b/l,r=f/x;return Math.max(p,r)<=n?{positions:[{x:0,y:(n-p)/2,width:b,height:p,orientation:a},{x:b,y:(n-r)/2,width:f,height:r,orientation:d}],totalArea:b*p+f*r}:null},()=>{const j=n,b=j/2,f=j/2,p=b*l,r=f*x;return Math.max(p,r)<=i?{positions:[{x:(i-p)/2,y:0,width:p,height:b,orientation:a},{x:(i-r)/2,y:b,width:r,height:f,orientation:d}],totalArea:p*b+r*f}:null}];let m=null,y=0;for(const j of u){const b=j();b&&b.totalArea>y&&(y=b.totalArea,m=b)}if(!m){const j=i/2,b=i/2,f=Math.min(j/l,n),p=Math.min(b/x,n);m={positions:[{x:0,y:(n-f)/2,width:j,height:f,orientation:a},{x:j,y:(n-p)/2,width:b,height:p,orientation:d}],totalArea:j*f+b*p}}const E=H(o,m.positions),L=m.totalArea/(i*n)*100;return{videos:E,totalArea:m.totalArea,efficiency:L}}function Ce(e,o,i,n){const s=e.portrait,a=o.length-s;if((s===3||s===4)&&a===0){const L=D.portrait,j=i/s,b=j/L,f=b<n?(n-b)/2:0,p=Math.min(b,n),r=[];let h=0;for(let g=0;g<s;g++){const A=Math.min(j,p*L);r.push({x:g*j+(j-A)/2,y:f,width:A,height:p,orientation:"portrait"}),h+=A*p}const w=H(o,r),c=h/(i*n)*100;return{videos:w,totalArea:h,efficiency:c}}o.filter(L=>L.orientation==="portrait");const d=o.filter(L=>L.orientation!=="portrait"),l=s>0?Math.min(i*.4,i*.5):0,x=i-l,u=[];let m=0;if(s===2&&a===0){const L=D.portrait,j=i/2,b=j/L,f=n;let p,r;b<=f?(r=b,p=j):(r=f,p=f*L);const h=(n-r)/2;u.push({x:(j-p)/2,y:h,width:p,height:r,orientation:"portrait"}),u.push({x:j+(j-p)/2,y:h,width:p,height:r,orientation:"portrait"}),m=p*r*2}else if(s===1&&a===1){const L=D.portrait,j=d[0],b=D[j.orientation],f=L+b,p=i*(L/f),r=i*(b/f),h=p/L,w=r/b,c=Math.min(n,Math.min(h,w)),g=(n-c)/2;u.push({x:0,y:g,width:p,height:c,orientation:"portrait"}),u.push({x:p,y:g,width:r,height:c,orientation:j.orientation}),m=p*c+r*c}else if(s===1&&a===2&&e.landscape===1&&e.wide===1){const L=D.portrait,j=D.wide,b=D.landscape,f=n,p=n*L,r=n/(1/j+1/b),h=r/j,w=r/b,c=p+r;if(Math.abs(c-i)<.1)u.push({x:0,y:0,width:p,height:f,orientation:"portrait"}),m+=p*f,d.find(C=>C.orientation==="wide")&&(u.push({x:0+p,y:0,width:r,height:h,orientation:"wide"}),m+=r*h),d.find(C=>C.orientation==="landscape")&&(u.push({x:0+p,y:h,width:r,height:w,orientation:"landscape"}),m+=r*w);else{const g=i/c,A=p*g,k=A/L,C=r*g,T=n/k;let R=A*T,$=n,N=C*T,V=N/j,I=N/b,F=R+N;if(F>i){const K=i/F;R=R*K,$=R/L,N=N*K,V=N/j,I=N/b,F=R+N,F>i&&(N=i-R,V=N/j,I=N/b)}const J=R+N;if(J>i){const K=i/J;R=R*K,$=R/L,N=N*K,V=N/j,I=N/b}const z=0;u.push({x:z,y:0,width:R,height:$,orientation:"portrait"}),m+=R*$,d.find(K=>K.orientation==="wide")&&(u.push({x:z+R,y:0,width:N,height:V,orientation:"wide"}),m+=N*V),d.find(K=>K.orientation==="landscape")&&(u.push({x:z+R,y:V,width:N,height:I,orientation:"landscape"}),m+=N*I)}}else if(s===1&&a===3){const L=D.portrait,j=n,b=j*L,f=b,p=i-f;u.push({x:0,y:0,width:b,height:j,orientation:"portrait"}),m+=b*j;const r=n/3;for(let h=0;h<d.length;h++){const w=d[h],c=D[w.orientation],g=r,A=p;let k,C;A/c<=g?(k=A,C=k/c):(C=g,k=C*c);const T=h*r+(r-C)/2;u.push({x:f+(p-k)/2,y:T,width:k,height:C,orientation:w.orientation}),m+=k*C}}else if(s===2&&a===1){const L=D.portrait,j=d[0],b=D[j.orientation],f=n/2,p=f*L,r=i-p,h=n*b;let w,c;h<=r?(c=n,w=c*b):(w=r,c=w/b);const g=p,A=f,k=(n-c)/2,C=(n/2-A)/2,T=n/2+(n/2-A)/2;u.push({x:0,y:k,width:w,height:c,orientation:j.orientation}),m+=w*c,u.push({x:r,y:C,width:g,height:A,orientation:"portrait"}),m+=g*A,u.push({x:r,y:T,width:g,height:A,orientation:"portrait"}),m+=g*A}else if(s===1&&a===2){const L=D.portrait,j=n,b=j*L,f=b,p=i-f;u.push({x:0,y:0,width:b,height:j,orientation:"portrait"}),m+=b*j;const r=n/2;for(let h=0;h<d.length;h++){const w=d[h],c=D[w.orientation],g=r,A=p;let k,C;A/c<=g?(k=A,C=k/c):(C=g,k=C*c);const T=h*r+(r-C)/2;u.push({x:f+(p-k)/2,y:T,width:k,height:C,orientation:w.orientation}),m+=k*C}}else{const L=s;if(L>0){const j=n/L,b=D.portrait;for(let f=0;f<L;f++){const p=Math.min(j,l/b),r=p*b,h=f*j+(j-p)/2;u.push({x:(l-r)/2,y:h,width:r,height:p,orientation:"portrait"}),m+=r*p}}if(d.length>0){const j=n/d.length;for(let b=0;b<d.length;b++){const f=d[b],p=D[f.orientation],r=j,h=x;let w,c;h/p<=r?(w=h,c=w/p):(c=r,w=c*p);const g=b*j+(j-c)/2;u.push({x:l+(x-w)/2,y:g,width:w,height:c,orientation:f.orientation}),m+=w*c}}}const y=H(o,u),E=m/(i*n)*100;return{videos:y,totalArea:m,efficiency:E}}function H(e,o){const i=new Array(o.length),n=new Set,s=new Set;for(let l=0;l<o.length;l++){const x=o[l];for(let u=0;u<e.length;u++)if(!n.has(u)&&e[u].orientation===x.orientation){i[l]={...x,orientation:e[u].orientation},n.add(u),s.add(l);break}}const a=[];for(let l=0;l<o.length;l++)s.has(l)||a.push(l);let d=0;for(let l=0;l<e.length;l++)if(!n.has(l)&&d<a.length){const x=a[d];i[x]={...o[x],orientation:e[l].orientation},d++}return i}function fo(e,o,i,n){if(e.portrait>0)return Ce(e,o,i,n);if(e.landscape===2&&e.wide===1){const f=D.landscape,p=D.wide,r=i,h=r/p,w=n-h,c=i/2,g=c/f;let A,k,C,T;if(h<=n&&g<=w)A=r,k=h,C=c,T=g;else{const J=n/(h+g),z=Math.min(1,J);k=h*z,A=k*p,T=g*z,C=T*f}const R=(i-A)/2,$=k+(w-T)/2,V=H(o,[{x:R,y:0,width:A,height:k,orientation:"wide"},{x:0,y:$,width:C,height:T,orientation:"landscape"},{x:C,y:$,width:C,height:T,orientation:"landscape"}]),I=A*k+C*T*2,F=I/(i*n)*100;return{videos:V,totalArea:I,efficiency:F}}if(e.landscape===1&&e.wide===2){const f=D.landscape,p=D.wide,r=i/2,h=r/p,c=n-h,g=c*f;let A,k,C,T;if(h<=n&&g<=i&&h+c<=n)A=r,k=h,C=g,T=c;else{const z=h+c,me=n/z;A=r,k=h*me,T=c*me,C=T*f}const R=0,$=i/2,N=(i-C)/2,I=H(o,[{x:R,y:0,width:A,height:k,orientation:"wide"},{x:$,y:0,width:A,height:k,orientation:"wide"},{x:N,y:k,width:C,height:T,orientation:"landscape"}]),F=A*k*2+C*T,J=F/(i*n)*100;return{videos:I,totalArea:F,efficiency:J}}if(e.wide===3){const f=D.wide,p=i/2,r=p/f,w=n-r,c=w*f;let g,A,k,C;if(r<=n&&c<=i&&r+w<=n)g=p,A=r,k=c,C=w;else{const J=r+w,z=n/J;g=p,A=r*z,C=w*z,k=C*f,k>i&&(k=i,C=k/f)}const T=0,R=i/2,$=(i-k)/2,V=H(o,[{x:T,y:0,width:g,height:A,orientation:"wide"},{x:R,y:0,width:g,height:A,orientation:"wide"},{x:$,y:A,width:k,height:C,orientation:"wide"}]),I=g*A*2+k*C,F=I/(i*n)*100;return{videos:V,totalArea:I,efficiency:F}}if(e.landscape===3){const f=D.landscape,p=i/(f*1.5),r=Math.min(n,p),h=r/2,w=r,c=h*f,g=w*f,A=(n-r)/2,k=[{x:0,y:A,width:c,height:h,orientation:"landscape"},{x:0,y:A+h,width:c,height:h,orientation:"landscape"},{x:c,y:A,width:g,height:w,orientation:"landscape"}],C=H(o,k),T=c*r+g*r,R=T/(i*n)*100;return{videos:C,totalArea:T,efficiency:R}}const s=[];if(e.landscape>0)for(let f=0;f<e.landscape;f++)s.push("landscape");if(e.wide>0)for(let f=0;f<e.wide;f++)s.push("wide");const a=s[0]||o[0].orientation,d=s[1]||o[1].orientation,l=s[2]||o[2].orientation,x=D[a],u=D[d],m=D[l],y=[()=>{const f=i*.6,p=i*.4,r=f/x,h=p/u,w=p/m,c=h+w;return r<=n&&c<=n?{positions:[{x:0,y:(n-r)/2,width:f,height:r,orientation:a},{x:f,y:0,width:p,height:h,orientation:d},{x:f,y:h,width:p,height:w,orientation:l}],totalArea:f*r+p*h+p*w}:null},()=>{const f=n*.5,p=n*.5,r=f*x,h=f*u,w=p*m;return r+h<=i&&w<=i?{positions:[{x:0,y:0,width:r,height:f,orientation:a},{x:r,y:0,width:h,height:f,orientation:d},{x:(i-w)/2,y:f,width:w,height:p,orientation:l}],totalArea:r*f+h*f+w*p}:null},()=>{const f=i/3,p=f/x,r=f/u,h=f/m;return Math.max(p,r,h)<=n?{positions:[{x:0,y:(n-p)/2,width:f,height:p,orientation:a},{x:f,y:(n-r)/2,width:f,height:r,orientation:d},{x:f*2,y:(n-h)/2,width:f,height:h,orientation:l}],totalArea:f*p+f*r+f*h}:null}];let E=null,L=0;for(const f of y){const p=f();p&&p.totalArea>L&&(L=p.totalArea,E=p)}if(!E){const f=i/3,p=Math.min(f/x,n),r=Math.min(f/u,n),h=Math.min(f/m,n);E={positions:[{x:0,y:(n-p)/2,width:f,height:p,orientation:a},{x:f,y:(n-r)/2,width:f,height:r,orientation:d},{x:f*2,y:(n-h)/2,width:f,height:h,orientation:l}],totalArea:f*p+f*r+f*h}}const j=H(o,E.positions),b=E.totalArea/(i*n)*100;return{videos:j,totalArea:E.totalArea,efficiency:b}}function uo(e,o,i,n){if(e.portrait>0)return Ce(e,o,i,n);const s=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)s.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)s.push("wide");const a=s[0]||o[0].orientation,d=s[1]||o[1].orientation,l=s[2]||o[2].orientation,x=s[3]||o[3].orientation,u=D[a],m=D[d],y=D[l],E=D[x],L=[()=>{const r=i/2,h=n/2,w=Math.min(r,h*u),c=w/u,g=Math.min(r,h*m),A=g/m,k=Math.min(r,h*y),C=k/y,T=Math.min(r,h*E),R=T/E;return{positions:[{x:(r-w)/2,y:(h-c)/2,width:w,height:c,orientation:a},{x:r+(r-g)/2,y:(h-A)/2,width:g,height:A,orientation:d},{x:(r-k)/2,y:h+(h-C)/2,width:k,height:C,orientation:l},{x:r+(r-T)/2,y:h+(h-R)/2,width:T,height:R,orientation:x}],totalArea:w*c+g*A+k*C+T*R}},()=>{const r=i*.6,h=i*.4,w=r/u,c=n/3,g=Math.min(h,c*m),A=g/m,k=Math.min(h,c*y),C=k/y,T=Math.min(h,c*E),R=T/E;return w<=n?{positions:[{x:0,y:(n-w)/2,width:r,height:w,orientation:a},{x:r,y:0,width:g,height:A,orientation:d},{x:r,y:c,width:k,height:C,orientation:l},{x:r,y:c*2,width:T,height:R,orientation:x}],totalArea:r*w+g*A+k*C+T*R}:null},()=>{const r=i/4,h=r/u,w=r/m,c=r/y,g=r/E;return Math.max(h,w,c,g)<=n?{positions:[{x:0,y:(n-h)/2,width:r,height:h,orientation:a},{x:r,y:(n-w)/2,width:r,height:w,orientation:d},{x:r*2,y:(n-c)/2,width:r,height:c,orientation:l},{x:r*3,y:(n-g)/2,width:r,height:g,orientation:x}],totalArea:r*h+r*w+r*c+r*g}:null}];let j=null,b=0;for(const r of L){const h=r();h&&h.totalArea>b&&(b=h.totalArea,j=h)}if(!j){const r=i/2,h=n/2,w=Math.min(h,r/u),c=Math.min(h,r/m),g=Math.min(h,r/y),A=Math.min(h,r/E);j={positions:[{x:(r-r)/2,y:(h-w)/2,width:r,height:w,orientation:a},{x:r+(r-r)/2,y:(h-c)/2,width:r,height:c,orientation:d},{x:(r-r)/2,y:h+(h-g)/2,width:r,height:g,orientation:l},{x:r+(r-r)/2,y:h+(h-A)/2,width:r,height:A,orientation:x}],totalArea:r*w+r*c+r*g+r*A}}const f=H(o,j.positions),p=j.totalArea/(i*n)*100;return{videos:f,totalArea:j.totalArea,efficiency:p}}const Re=45e3,po=e=>{if(!e)return"";if(!e.includes("/")&&!e.includes(":"))return e;const o=e.match(/\/([^\/]+?)(?:\/whep)?(?:\?|$)/);return o?o[1]:e.split("?")[0].split("/").filter(Boolean).pop()||e},mo=v.div`

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

        iframe {
            border: none;
            display: block;
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            pointer-events: none;

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
    }
`,go=()=>{if(!it)return null;const[e,o]=S.useState(!1),[i]=so(),[n,s]=S.useState(void 0),[a,d]=S.useState(100),[l,x]=S.useState("0");S.useEffect(()=>{if(i==="off"&&e){const E=window.setTimeout(()=>{o(!1),s(void 0)},Re);return s(E),x(Re+"ms"),d(0),()=>{E&&window.clearTimeout(E)}}else i==="on"&&(x(0),d(100),o(!0))},[i,e]),S.useEffect(()=>{i==="on"&&n!==void 0&&(window.clearTimeout(n),x(0),d(100),s(void 0))},[n,i]);const[u,m]=S.useState(!1),y=()=>{ao(),m(!0)};return S.useEffect(()=>{if(u){const E=setTimeout(()=>m(!1),1e3);return()=>clearTimeout(E)}},[u]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>o(E=>!E),children:"CCTV"}),t.jsx(se,{visible:e,onClick:y,onClose:()=>o(!1),fullsize:!0,children:t.jsxs(mo,{onClick:y,children:[t.jsx(lt,{completed:a,height:10,bgColor:n===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:l,transitionTimingFunction:"linear"}),t.jsx("div",{className:"grid",style:{display:e?"block":"none"},children:(()=>{if(ie.length===0)return null;const E=ie.map(r=>({orientation:r.orientation||"landscape"})),L=window.innerWidth,j=window.innerHeight-10,b=rt(E,L,j),f={portrait:ie.filter(r=>(r.orientation||"landscape")==="portrait"),landscape:ie.filter(r=>(r.orientation||"landscape")==="landscape"),wide:ie.filter(r=>r.orientation==="wide")},p={portrait:0,landscape:0,wide:0};return b.videos.map((r,h)=>{const w=r.orientation,c=p[w],g=f[w][c];if(!g)return null;p[w]++;const A=po(g.name),k=`${Qt}/stream.html?src=${A}`;return t.jsxs("div",{className:"video-container",style:{left:`${r.x}px`,top:`${r.y}px`,width:`${r.width}px`,height:`${r.height}px`},children:[e&&t.jsx("iframe",{src:k,className:w,allow:"autoplay; fullscreen"}),t.jsx("div",{className:"video-overlay",onClick:()=>y()})]},`${w}-${c}-${h}`)})})()}),u&&t.jsx("div",{className:"open-door",children:"Tür öffnet sich"})]})})]})},xo=v.div`
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

`,wo=({nextWeek:e,previousWeek:o,startWeekWithToday:i})=>t.jsxs(xo,{children:[t.jsxs("div",{className:"buttons",children:[t.jsx(Y,{path:vt,size:"32px",color:"#ffffff",onClick:o}),t.jsx(Y,{path:Dt,size:"32px",color:"#ffffff",onClick:e}),t.jsx("button",{onClick:i,children:"Today"}),t.jsx(go,{})]}),t.jsx(ro,{}),t.jsx(Y,{path:Ot,size:"32px",color:"#ffffff",className:G("indicator")})]}),yo=O.memo(wo),bo=6e4,Te=(e=bo,o=void 0)=>{const[i,n]=S.useState(!0);return S.useEffect(()=>{const s=setInterval(()=>{n(a=>!a)},e);return()=>{clearInterval(s)}},[e,o]),i},jo=e=>q(`/api/calendars/${e}`),Eo=(e,o)=>`${jo(e)}?${zt.stringify(o)}`,Ao={mdiDelete:Nt,mdiCake:Rt},So=e=>{if(!e||typeof e!="string")return;const o=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Ao[o]||void 0},Lo=Jt.map(e=>({name:e.name,icon:So(e.icon)})),ko=(e,o,i,n)=>M(Eo(e.name,{start:o.toISO(),end:i.toISO()}),{timeout:1e4}).then(s=>{!s.data||!Array.isArray(s.data)||s.data.forEach(a=>{const d="dateTime"in a.start?P.fromISO(a.start.dateTime):P.fromSQL(a.start.date);let l;"dateTime"in a.end?l=Math.floor(P.fromISO(a.end.dateTime).diff(o,"days").as("days")):l=Math.floor(P.fromSQL(a.end.date).diff(o,"days").as("days"))-1;const x=Math.floor(d.diff(o,"days").as("days"));l>=n.length&&(l=n.length-1);const u="dateTime"in a.start?"events":"allDay";if(x>=0&&x<n.length)for(let m=x;m<=l;m++)n[m][u]=[...n[m][u],{...a,icon:e.icon}]})}).catch(s=>{throw s}),Ne=new Map,Co=300*1e3,To=e=>e.toISODate(),vo=(e,o,i,n,s,a)=>{const d=[0,1,2,3,4,5].map(y=>e.plus({days:y}).startOf("day"));d[6]=e.plus({days:6}).endOf("day");const l=To(e),x=Ne.get(l);if(x&&Date.now()-x.timestamp<Co){i(x.data);return}const u=d.map(y=>({date:y,allDay:[],events:[]})),m=new AbortController;s.current&&s.current.abort(),s.current=m;try{n(!0);const y=Lo.map(E=>ko(E,d[0],d[6],u));Promise.all(y).then(()=>{m.signal.aborted||(Ne.set(l,{data:u,timestamp:Date.now()}),i(u),a(!1))}).catch(E=>{m.signal.aborted||a(Q(E))}).finally(()=>{m.signal.aborted||n(!1)})}catch(y){m.signal.aborted||(a(Q(y)),n(!1))}},We=[],Do=e=>{const[o,i]=S.useState(We),[n,s]=S.useState(!1),[a,d]=S.useState(!1),l=Te(6e4,"Calendar"),[x,u]=S.useState(null),m=O.useRef(null);return S.useEffect(()=>(e!==void 0&&((x===null||!x.equals(e))&&(i(We),u(e)),vo(e,o,i,s,m,d)),()=>{m.current&&m.current.abort()}),[e,l]),[o,a]};function re(e){const[o,i]=S.useState(!1);function n({key:a}){a===e&&i(!0)}const s=({key:a})=>{a===e&&i(!1)};return S.useEffect(()=>(window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}),[e]),o}const Oo=()=>{let e=new Date,i=(e.getDay()+6)%7,n=new Date(e.setDate(e.getDate()-i));return P.fromJSDate(n)},Ro=e=>{const o=()=>e(l=>l.plus({days:7})),i=re("ArrowRight");S.useEffect(()=>{i&&o()},[i]);const n=()=>e(l=>l.minus({days:7})),s=re("ArrowLeft");S.useEffect(()=>{s&&n()},[s]);const a=()=>e(Oo()),d=re("t");return S.useEffect(()=>{d&&a()},[d]),{nextWeek:o,previousWeek:n,startWeekWithToday:a}},No=e=>{const[o,i]=O.useState(0),[n,s]=O.useState(0),a=50;return{onTouchStart:u=>{s(0),i(u.targetTouches[0].clientX)},onTouchMove:u=>s(u.targetTouches[0].clientX),onTouchEnd:()=>{if(!o||!n)return;const u=o-n,m=u>a,y=u<-a;m&&e.onSwipedLeft(),y&&e.onSwipedRight()}}},_e=e=>P.fromISO(e).toLocaleString(P.TIME_24_SIMPLE),we=e=>e.toFormat("c")>=6,ye=e=>e.hasSame(P.now(),"day"),Wo=v.div`

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
`,_o=()=>{const[e,o]=S.useState(void 0),[i,n]=Do(e),{nextWeek:s,previousWeek:a,startWeekWithToday:d}=Ro(o);S.useEffect(()=>{d()},[]);const l=No({onSwipedLeft:()=>s(),onSwipedRight:()=>a()}),x=O.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),u=O.useMemo(()=>i.slice(0,7),[i]);return t.jsxs(Wo,{...l,children:[t.jsx(yo,{nextWeek:s,previousWeek:a,startWeekWithToday:d}),t.jsxs("div",{className:"schedule",children:[u.map((m,y)=>t.jsx("div",{className:G({weekend:we(m.date),today:ye(m.date)},"caption"),children:t.jsx("h2",{children:m.date.toLocaleString(x)})},y)),u.map((m,y)=>t.jsx("div",{className:G("allDayRow",{weekend:we(m.date),today:ye(m.date)}),children:m.allDay.map((E,L)=>t.jsx("div",{className:"allDayEvent",children:E.summary},L))},y)),u.map((m,y)=>t.jsx("div",{className:G("eventRow",{weekend:we(m.date),today:ye(m.date)}),children:m.events.map((E,L)=>t.jsxs("div",{className:"event",children:[t.jsx("div",{children:E.summary}),t.jsxs("h3",{children:[E.icon&&t.jsx(Y,{path:E.icon,size:"1rem",color:"#ffffff"}),_e(E.start.dateTime)," - ",_e(E.end.dateTime)]})]},L))},y))]}),i.length===0&&t.jsx("div",{className:"loading",children:n!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):t.jsx(Ge,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),n!==!1&&i.length>0&&t.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:t.jsxs("div",{children:["Warnung: ",n instanceof Error?n.message:String(n)]})})]})},ue={"clear-day":{icon:wt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:xt,label:"Klar",color:"#eeeef5"},rain:{icon:gt,label:"Regen",color:"#80a5d6"},snow:{icon:mt,label:"Schnee",color:"#8c82ce"},sleet:{icon:pt,label:"Graupel",color:"#aba4db"},wind:{icon:ut,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:ft,label:"Neblig",color:"#d5dae2"},cloudy:{icon:ht,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:dt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:ct,label:"Teils bewölkt",color:"#d5dae2"}},Po=()=>`./forecast/${Xe}/${qe},${Je}?&units=si&exclude=minutely`,Mo=e=>{const[o,i]=S.useState([]),[n,s]=S.useState(!1),a=Te(6e4*10,"Weather"),d=Ze&&Xe&&qe&&Je;return S.useEffect(()=>{d&&M(Po()).then(l=>{i(l.data),s(!1)}).catch(l=>{s(Q(l))}).finally(()=>{})},[a,e,d]),[o,n]},$o=bt(jt),Pe=v.div`

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
`,Me=O.memo(({data:e,daily:o=!1})=>t.jsxs("div",{children:[t.jsxs("div",{children:[!o&&P.fromSeconds(e.time).toLocaleString(P.TIME_24_SIMPLE),o&&P.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),t.jsx("div",{children:t.jsx(Ae,{icon:e.icon})}),t.jsx("div",{children:t.jsxs("strong",{children:[!o&&t.jsxs(t.Fragment,{children:[Math.round(e.temperature),"°"]}),o&&t.jsxs(t.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),t.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),t.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Io=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(o=>({color:ue[o.icon]?.color||"#ffffff",text:ue[o.icon]?.label||"",annotation:`${Math.round(o.temperature)}°`,time:o.time})),Ae=({icon:e})=>{const o=ue[e];return t.jsx(o.icon,{size:60,color:"#ffffff"})},Vo=()=>{if(!Ze)return null;const[e,o]=Mo(),[i,n]=S.useState(!1),s=re("w"),a=S.useRef(),d=O.useCallback(()=>n(y=>!y),[]),l=O.useCallback(()=>n(!0),[]),x=O.useMemo(()=>Io(e),[e]),u=O.useMemo(()=>[3,6,9,12],[]),m=O.useMemo(()=>[1,2,3,4,5,6,7],[]);return S.useEffect(()=>{if(!a.current||!e||!e.hourly||x.length===0)return;const y={timezone:"Europe/Berlin"},E=document.createElement("div");return a.current.textContent="",a.current.appendChild(E),Ht(E,x,y),()=>{a.current&&(a.current.textContent="")}},[x]),S.useEffect(()=>{s&&d()},[s]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?o!==!1?t.jsx(Pe,{children:t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":t.jsxs(Pe,{children:[t.jsxs("div",{onClick:l,children:[t.jsxs("div",{className:"headline",children:[t.jsx(Ae,{icon:e.currently.icon}),t.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),t.jsx("div",{className:"forecast",children:u.map((y,E)=>t.jsx(Me,{data:e.hourly.data[y]},E))})]}),t.jsx(se,{visible:i,onClick:d,children:t.jsxs("div",{className:"full-weather",children:[o!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),t.jsxs("div",{className:"detail-header",children:[t.jsx("div",{children:t.jsxs("div",{className:"headline",children:[t.jsx(Ae,{icon:e.daily.data[0].icon}),t.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",t.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),t.jsx("h3",{children:ue[e.daily.data[0].icon].label})]}),t.jsx("div",{className:"values",children:t.jsxs("div",{className:"table",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]}),t.jsxs("div",{children:[t.jsx("span",{children:"Windgeschwindigkeit:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]})]})}),t.jsx("h3",{children:"Die nächsten 24 Stunden"}),t.jsx("div",{ref:a}),t.jsx("h3",{children:"Die nächste Woche"}),t.jsx("div",{className:"forecast",children:m.map((y,E)=>t.jsx(Me,{data:e.daily.data[y],daily:!0},E))}),t.jsxs("div",{className:"info",children:["Aktualisiert ",t.jsx(yt,{date:P.fromSeconds(e.currently.time).toJSDate(),formatter:$o})]})]})})]})},Fo=O.memo(Vo);async function zo(e){if(!je)throw new Error("GEOFOX_SECRET is not configured");return Bt.stringify(Ut(JSON.stringify(e),je))}const Bo="AK Wandsbek",Uo="Hamburg",Ho="Master:62016",Go="STATION",Yo={x:10.091341,y:53.568702},Ko={name:Bo,city:Uo,id:Ho,type:Go,coordinate:Yo},de={departureList:"departureList",checkName:"checkName"},Xo=async(e,o)=>M({method:"post",url:`./gti/public/${e}`,data:o,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":Qe,"geofox-auth-signature":await zo(o),Authorization:void 0}}),$e=(e,o)=>e.realtimeOffset-o.realtimeOffset,qo=e=>{const o=e.departures.map(i=>({line:i.line.name,direction:i.line.direction,timeOffset:i.timeOffset,delay:i.delay?i.delay:"0",directionId:i.directionId,realtimeOffset:i.timeOffset+(i.delay?i.delay:0)/60}));return{from:o.filter(i=>i.directionId===1).slice(0,3).sort($e),to:o.filter(i=>i.directionId===6).slice(0,3).sort($e)}},Jo=e=>{const[o,i]=S.useState([]),[n,s]=S.useState(!1),a=Te(6e4),d=et&&Qe&&je;return S.useEffect(()=>{if(!d||!(e in de))return;let l={version:51};switch(e){case de.checkName:l={...l,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case de.departureList:const x=P.now();l={...l,station:Ko,time:{date:x.toFormat("dd.MM.yyyy"),time:x.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:l=void 0}Xo(e,l).then(x=>{i(qo(x.data)),s(!1)}).catch(x=>{s(Q(x))})},[e,a,d]),[o,n]},Qo=v.div`
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
`,Ie=O.memo(({line:e,direction:o,realtimeOffset:i})=>t.jsxs("div",{className:"departure",children:[t.jsx("div",{children:t.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),t.jsx("div",{children:i===0?"Jetzt":t.jsxs(t.Fragment,{children:["in ",i," '"]})})]})),Zo=()=>{if(!et)return null;const[e,o]=Jo(de.departureList);return t.jsxs(Qo,{children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:t.jsxs("g",{transform:"translate(10368 -6294)",children:[t.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),t.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),o!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"→ Wandsbek"}),e.to?.map((i,n)=>t.jsx(Ie,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},n)),t.jsx("h3",{children:"→ Stadtauswärts"}),e.from?.map((i,n)=>t.jsx(Ie,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},n))]})]})},ei=O.memo(Zo),ti=()=>{const[e,o]=S.useState("closed"),[i,n]=S.useState(!1),s=tt&&U,a=U?q(`/api/states/${U}`):null;return S.useEffect(()=>{!s||!a||M(a).then(d=>{o(d.data.state),n(!1)}).catch(d=>{n(Q(d))})},[s,a]),S.useEffect(()=>{let d=null,l=!0;async function x(){if(!s||!U)return;let u;if(typeof window<"u"&&window.location){const E=window.location.pathname.replace(/\/$/,"");u=`${window.location.origin}${E}`}else u="";const m=ke||X||"";if(!m)return;let y;try{y=Se(u,m),l&&n(!1)}catch(E){l&&(W.error("Failed to create WebSocket auth:",E),n(E instanceof Error?E.message:String(E)));return}try{d=await Le({auth:y});const E=L=>{l&&o(L.variables.trigger.to_state.state)};await d.subscribeMessage(E,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:U}})}catch(E){l&&(W.error("Failed to setup WebSocket connection:",E),n(E instanceof Error?E.message:String(E)))}}return x(),()=>{l=!1,d&&d.close()}},[s]),[e,i]},oi=e=>{if(!U)return;e(!0);const o=setTimeout(()=>e(!1),3e3);M.post(q("/api/services/cover/toggle"),{entity_id:U}).catch(i=>{W.error("Failed to toggle garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},ii=e=>{if(!U)return;e(!0);const o=setTimeout(()=>e(!1),3e3);M.post(q("/api/services/cover/open_cover"),{entity_id:U}).catch(i=>{W.error("Failed to open garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},ni=e=>{if(!U)return;e(!0);const o=setTimeout(()=>e(!1),3e3);M.post(q("/api/services/cover/close_cover"),{entity_id:U}).catch(i=>{W.error("Failed to close garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},ri=v.div`
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
`,st=v.div`
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
`,Ve=e=>({unknown:{label:"In Bewegung oder halb-offen",icon:$t},open:{label:"Offen",icon:Mt},closed:{label:"Geschlossen",icon:Pt},opening:{label:"Öffnet",icon:_t},closing:{label:"Schließt",icon:Wt}})[e]||{label:"Unavailable",icon:It},at=({garageDoor:e,animate:o=!1})=>t.jsxs(st,{className:G({animate:o}),children:[t.jsx(Y,{path:Ve(e).icon,size:"2rem",color:"#ffffff"}),t.jsx("span",{children:Ve(e).label})]}),si=(e,o)=>Et.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:i}){return t.jsx(at,{garageDoor:i})}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark"}),ai=()=>{if(!tt)return null;const[e,o]=ti(),[i,n]=S.useState(void 0),[s,a]=S.useState(!1),[d,l]=S.useState(!1);S.useEffect(()=>{if(e==="unknown"||e==="opening"||e==="closing"){if(!i){const E=new Promise(L=>{n({resolve:L})});si(E)}}else i&&(i.resolve(e),n(void 0))},[e]);const x=re("g");S.useEffect(()=>{x&&o===!1&&oi(a)},[x,o]);const u=O.useCallback(y=>{if(o===!1)switch(l(!1),y){case"open":ii(a);break;case"close":ni(a);break}},[a,o]),m=O.useCallback(()=>{o===!1&&l(!0)},[o]);return t.jsxs(ri,{className:G({disabled:o!==!1}),children:[t.jsx("h2",{children:"Garage"}),t.jsx("div",{className:"status",onClick:m,children:o!==!1?t.jsxs(st,{children:[t.jsx(Y,{path:Ye,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsx(at,{garageDoor:e,animate:s})}),t.jsx(se,{visible:d&&o===!1,onClick:()=>l(!1),children:t.jsxs("div",{className:"controls",children:[t.jsx("div",{onClick:()=>u("open"),children:"Öffnen"}),t.jsx("div",{onClick:()=>u("close"),children:"Schließen"})]})})]})},li=O.memo(ai),ci=e=>e?q(`/api/states/${e}`):null,B={done:{label:"Fertig",animate:!1,icon:Ft},off:{label:"Aus",animate:!1,icon:Vt},standby:{label:"Standby",animate:!1,icon:ve},running:{label:"Läuft …",animate:!0,icon:ve}},di={off:0,standby:2,running:16,done:256},hi=()=>{const o=(Array.isArray(fe)?fe:[]).map((u,m)=>{const[y,E]=fi(u.entity_id);return{state:y,error:E,name:u.name}}),[i,n]=S.useState(B.off),[s,a]=S.useState(!1),d=o.map(u=>u.state),l=o.map(u=>u.error);S.useEffect(()=>{const u=l.some(m=>m!==!1);a(u&&l.find(m=>m!==!1)||!1)},[l]),S.useEffect(()=>{const u=d.reduce((m,y)=>m+(di[y]||0),0);u===0?n(B.off):u<16?n(B.standby):u<256?n(B.running):u%256===0?n(B.done):u%256%16===0?n(B.running):u%256%2===0?n(B.done):n(B.running)},[d]);const x=o.map(u=>({label:u.name,state:u.state}));return[i,x,s]},fi=e=>{const[o,i]=S.useState("off"),[n,s]=S.useState(!1),a=ot&&e,d=ci(e);return S.useEffect(()=>{!a||!d||M(d).then(l=>{i(l.data.state),s(!1)}).catch(l=>{s(Q(l))})},[e,a,d]),S.useEffect(()=>{let l=null,x=null,u=!0;async function m(){if(!a||!e)return;let y;if(typeof window<"u"&&window.location){const L=window.location.pathname.replace(/\/$/,"");y=`${window.location.origin}${L}`}else y="";const E=ke||X||"";if(E)try{const L=Se(y,E);l=await Le({auth:L});const j=b=>{u&&i(b.variables.trigger.to_state.state)};x=await l.subscribeMessage(j,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}})}catch(L){u&&(W.error(`Failed to setup WebSocket connection for ${e}:`,L),s(L instanceof Error?L.message:String(L)))}}return m(),()=>{u=!1,x&&x(),l&&l.close()}},[e,a]),[o,n]},ui=v.div`
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
`,pi=()=>{if(!ot)return null;const[e,o,i]=hi(),[n,s]=S.useState(!1),a=O.useCallback(()=>{i===!1&&s(!0)},[i]),d=O.useCallback(()=>s(!1),[]);return t.jsxs(ui,{className:G({disabled:i!==!1}),children:[t.jsx("h2",{children:"Wäsche"}),t.jsx("div",{className:"status",onClick:a,children:i!==!1?t.jsxs(t.Fragment,{children:[t.jsx(Y,{path:Ye,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:G({animate:e.animate}),children:t.jsx(Y,{path:e.icon,size:"2rem",color:"#ffffff"})}),t.jsx("span",{children:e.label})]})}),t.jsx(se,{visible:n&&i===!1,onClick:d,children:t.jsx("div",{className:"states",children:o.map((l,x)=>t.jsxs("div",{children:[t.jsx("div",{className:G({animate:B[l.state].animate}),children:t.jsx(Y,{path:B[l.state].icon,size:2})}),t.jsx("div",{children:B[l.state].label}),t.jsx("div",{className:"subtitle",children:l.label})]},x))})})]})},mi=O.memo(pi),gi=v.div`
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
`,xi=()=>t.jsxs(gi,{children:[t.jsx(Fo,{}),t.jsx(ei,{}),t.jsxs("div",{className:"two-cols",children:[t.jsx(li,{}),t.jsx(mi,{})]})]}),wi=O.memo(xi),Fe=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],yi=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],he={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},bi={landscape:"L",portrait:"P",wide:"W"},ji=v.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Ei=v.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Ai=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Z=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ee=v.label`
  font-size: 0.9rem;
  color: #cccccc;
`,ze=v.select`
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
`,Be=v.input`
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
`,Si=v.button`
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
`,Ue=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Li=v.button`
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
`,ki=v.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Ci=v.div`
  position: absolute;
  background-color: ${e=>he[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,Ti=v.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,vi=v.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Di=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,ae=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,le=v.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ce=v.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Oi=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Ri=v.h3`
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
`;const be=v.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?he[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?he[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?he[e.orientation]:"#4a4a4a"};
  }
`,He=()=>{const[e,o]=O.useState(1920),[i,n]=O.useState(1080),[s,a]=O.useState("Full HD"),[d,l]=O.useState(""),[x,u]=O.useState(""),[m,y]=O.useState([{orientation:"landscape"}]),[E,L]=O.useState(null),j=O.useMemo(()=>rt(m,e,i),[m,e,i]),b=c=>{const g=Fe.find(A=>A.name===c);g&&g.width&&g.height?(o(g.width),n(g.height),a(c),l(""),u("")):c==="Custom"&&a("Custom")},f=()=>{const c=parseInt(d),g=parseInt(x);c>0&&g>0&&(o(c),n(g))},p=c=>{y(c.videos),L(c.name)},r=c=>{const g=[];for(let A=0;A<c;A++)g.push(m[A]||{orientation:"landscape"});y(g),L(null)},h=(c,g)=>{const A=[...m];A[c]={orientation:g},y(A),L(null)},w=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/i));return t.jsxs(ji,{children:[t.jsx(Ei,{children:"Video Tiling Algorithm Demo"}),t.jsxs(Ai,{children:[t.jsxs(Z,{children:[t.jsx(ee,{children:"Screen Size Preset"}),t.jsx(ze,{value:s,onChange:c=>b(c.target.value),children:Fe.map(c=>t.jsx("option",{value:c.name,children:c.name},c.name))})]}),s==="Custom"&&t.jsxs(t.Fragment,{children:[t.jsxs(Z,{children:[t.jsx(ee,{children:"Custom Width"}),t.jsx(Be,{type:"number",value:d,onChange:c=>l(c.target.value),placeholder:"Width",min:"100"})]}),t.jsxs(Z,{children:[t.jsx(ee,{children:"Custom Height"}),t.jsx(Be,{type:"number",value:x,onChange:c=>u(c.target.value),placeholder:"Height",min:"100"})]}),t.jsxs(Z,{children:[t.jsx(ee,{children:" "}),t.jsx(Si,{onClick:f,children:"Apply Custom Size"})]})]}),t.jsxs(Z,{children:[t.jsx(ee,{children:"Number of Videos"}),t.jsxs(ze,{value:m.length,onChange:c=>r(parseInt(c.target.value)),children:[t.jsx("option",{value:"1",children:"1 Video"}),t.jsx("option",{value:"2",children:"2 Videos"}),t.jsx("option",{value:"3",children:"3 Videos"}),t.jsx("option",{value:"4",children:"4 Videos"})]})]}),m.map((c,g)=>t.jsxs(Z,{children:[t.jsxs(ee,{children:["Video ",g+1," Orientation"]}),t.jsxs(Ue,{children:[t.jsx(be,{active:c.orientation==="landscape",orientation:"landscape",onClick:()=>h(g,"landscape"),children:"Landscape"}),t.jsx(be,{active:c.orientation==="portrait",orientation:"portrait",onClick:()=>h(g,"portrait"),children:"Portrait"}),t.jsx(be,{active:c.orientation==="wide",orientation:"wide",onClick:()=>h(g,"wide"),children:"Wide"})]})]},g))]}),t.jsxs(Oi,{children:[t.jsx(Ri,{children:"Test Scenarios"}),t.jsx(Ue,{children:yi.map(c=>t.jsx(Li,{active:E===c.name,onClick:()=>p(c),children:c.name},c.name))})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:t.jsx(ki,{style:{width:`${e*w}px`,height:`${i*w}px`},children:j.videos.map((c,g)=>t.jsxs(Ci,{orientation:c.orientation,style:{left:`${c.x*w}px`,top:`${c.y*w}px`,width:`${c.width*w}px`,height:`${c.height*w}px`},children:[t.jsxs(Ti,{children:[bi[c.orientation]," ",g+1]}),t.jsxs(vi,{children:[Math.round(c.width)," × ",Math.round(c.height)]})]},g))})}),t.jsxs(Di,{children:[t.jsxs(ae,{children:[t.jsx(le,{children:"Canvas Size"}),t.jsxs(ce,{children:[e," × ",i]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Total Area Used"}),t.jsxs(ce,{children:[Math.round(j.totalArea).toLocaleString()," px²"]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Efficiency"}),t.jsxs(ce,{children:[j.efficiency.toFixed(2),"%"]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Display Scale"}),t.jsxs(ce,{children:[(w*100).toFixed(1),"%"]})]})]})]})},Ni=()=>{function e(i,n){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(n))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[a,d]=n.split(":").map(Number),l=new Date;let x=new Date(l.getFullYear(),l.getMonth(),l.getDate());x.setHours(a,d,0,0),x<=l&&x.setDate(x.getDate()+1);const u=x.getTime()-l.getTime();return setTimeout(i,u)}const o=()=>{window.location.reload(!0)};S.useLayoutEffect(()=>{const i=[e(o,"00:00"),e(o,"03:00"),e(o,"06:00"),e(o,"09:00"),e(o,"12:00"),e(o,"15:00"),e(o,"18:00"),e(o,"21:00")];return()=>{i.forEach(n=>{n&&clearTimeout(n)})}},[])},Wi=v.div`
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
`;class pe extends S.Component{constructor(o){super(o),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(o){return{hasError:!0}}componentDidCatch(o,i){this.setState({error:o,errorInfo:i}),W.error("ErrorBoundary caught an error:",o,i)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?t.jsxs(Wi,{children:[t.jsx("h2",{children:"Something went wrong"}),t.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,t.jsxs("div",{children:[t.jsx("button",{onClick:this.handleReset,children:"Try Again"}),t.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const _i=At`
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
`,Pi=v.div`
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
`;function Mi(){return Ni(),t.jsxs(Pi,{children:[t.jsx(_i,{}),t.jsxs("div",{className:"main",children:[t.jsx(pe,{children:t.jsx(_o,{})}),t.jsx(pe,{children:t.jsx(wi,{})})]}),t.jsx(Lt,{})]})}function $i(){return t.jsx(pe,{children:t.jsxs(St,{children:[t.jsx(ge,{path:"/demo",element:t.jsx(He,{})}),t.jsx(ge,{path:"/tiling-demo",element:t.jsx(He,{})}),t.jsx(ge,{path:"*",element:t.jsx(Mi,{})})]})})}const Ii=kt.createRoot(document.getElementById("root"));Ii.render(t.jsx(S.StrictMode,{children:t.jsx(pe,{children:t.jsx(Ct,{children:t.jsx($i,{})})})}));
