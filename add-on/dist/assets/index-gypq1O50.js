import{d as v,j as t,I as Y,R as E,l as Ue,r as O,P as ht,W as ft,b as ut,e as pt,f as mt,h as gt,i as xt,k as wt,m as yt,n as bt,o as jt,T as Et,p as St,s as At,y as Lt,q as Tt,t as Ct,u as xe,L as kt,v as vt,B as Dt}from"./react-vendor-SoRfWBCf.js";import{D as W}from"./date-vendor-BDx6lZXm.js";import{n as $}from"./vendor-DXU8y-C2.js";import{m as Ot,a as Rt,b as Nt,c as _t,d as Pt,e as Wt,f as Ge,g as Mt,h as It,i as Vt,j as $t,k as Ft,l as zt,n as ke,o as Bt,p as Ht}from"./ui-vendor-DhGbN51c.js";import{a as P,q as Ut,B as Gt,h as Yt}from"./utils-vendor-Cy1MG2Zy.js";import{c as Ye,a as Ke}from"./ha-vendor-CoU0AojH.js";import{t as Kt}from"./chart-vendor-ClWajKr-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const Xt=v.div`
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
    z-index: 100;
    background-color: rgba(0,0,0,.6);
    
    svg {
      color: white;
    }
  }
`,ae=({visible:e,children:o,onClick:i,onClose:n,fullsize:s=!1})=>{const a=n||i,d=l=>{l.stopPropagation(),l.preventDefault(),a()};return t.jsxs(Xt,{className:$({visible:e}),onClick:i,children:[t.jsx("div",{className:"close",onClick:d,children:t.jsx(Y,{path:Ot,size:2})}),t.jsx("div",{className:$("content",{fullsize:s}),onClick:l=>l.stopPropagation(),children:o})]})},M={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},Xe=e=>{const o={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1};return e.response?(o.status=e.response.status,o.responseData=e.response.data,o.url=e.config?.url||e.request?.responseURL||"Unknown URL",o.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(o.isNetworkError=!0,o.url=e.config?.url||"Unknown URL",o.message="Network error: No response received from server"):(o.message=e.message||"Request setup error",o.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(o.isTimeoutError=!0,o.message="Request timeout: The request took too long to complete"),o},qt=(e,o="")=>{const i=Xe(e),n=[];return o&&n.push(`[${o}]`),n.push("Axios API Error:"),n.push(i.message),i.url&&n.push(`URL: ${i.url}`),i.status&&n.push(`Status: ${i.status}`),i.responseData&&n.push("Response:",i.responseData),M.error(...n),i},q=e=>{const o=Xe(e);return o.isNetworkError?"":o.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":o.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":o.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":o.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":o.status>=500?"Serverfehler: Bitte später erneut versuchen":o.message||"Ein Fehler ist aufgetreten"},Jt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},qe=!1,_=(e,o=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[e]!==void 0){const n=window.APP_CONFIG[e];return n==="undefined"||n==="null"?o:n??o}return o}const i=Jt[`VITE_${e}`];return e==="HASS_ACCESS_TOKEN"&&i!==void 0?o:i!==void 0?i:o},Qt=(e,o=!1)=>{const i=_(e,o);return typeof i=="boolean"?i:typeof i=="string"?i==="true"||i==="1"||i==="yes":!!i},Je=_("HASS_HOST",""),Q=_("HASS_ACCESS_TOKEN",""),Zt=Q&&typeof Q=="string"&&Q.trim()!==""&&Q!=="undefined"&&Q!=="null";Zt?P.defaults.headers.common.Authorization=`Bearer ${Q}`:delete P.defaults.headers.common.Authorization;P.interceptors.response.use(e=>e,e=>{const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";return qt(e,o),Promise.reject(e)});const Qe=_("WEATHER_API_KEY"),Ze=_("WEATHER_LATITUDE"),et=_("WEATHER_LONGITUDE"),Se=_("GEOFOX_SECRET"),tt=_("GEOFOX_USER"),U=_("ENTITY_GARAGE_DOOR"),te=_("ENTITY_DOORBELL"),ve=_("ENTITY_DOORBELL_BUTTON"),oe=_("ENTITY_DOORBELL_PERSON_OCCUPANCY"),Ae=_("ENTITY_EVERYDAY_CALENDAR"),eo=(()=>{const e=_("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),ue=(()=>{const e=_("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),to=_("GO2RTC_BASE_URL","http://192.168.188.10:1984"),ne=(()=>{const e=_("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),ie=(e,o)=>_(e,void 0)!==void 0?Qt(e,!1):!1,ot=ie("ENABLE_WEATHER"),it=ie("ENABLE_HVV"),nt=ie("ENABLE_GARAGE"),rt=ie("ENABLE_LAUNDRY",Array.isArray(ue)&&ue.length>0),st=ie("ENABLE_DOORBELL"),at=ie("ENABLE_EVERYDAY_CALENDAR"),K=e=>{const o=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const i=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${i}${o}`}return o}},re=Ae?K(`/api/states/${Ae}`):null,oo=()=>{const[e,o]=E.useState(null),[i,n]=E.useState(!1),s=at&&Ae;return E.useEffect(()=>{!s||!re||P(re).then(a=>{a.data.attributes.store!==void 0?o(a.data.attributes.store):o([]),n(!1)}).catch(a=>{n(q(a)),o([])})},[s,re]),[e,i]},io=e=>{re&&P.post(re,{state:new Date,attributes:{store:e}}).catch(o=>{M.error("Failed to store everyday calendar data:",o)})},De=v.div` 

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
`,no=({on:e,month:o,day:i})=>{const[n,s]=e,a=n.indexOf(`${o}-${i}`),d=a>-1,l=()=>{s(d?n.toSpliced(a,1):[...n,`${o}-${i}`])};return t.jsx("div",{className:$("dot",{on:d}),onClick:()=>l()})},ro=()=>{if(!at)return null;const e=new Date().getFullYear(),o=[];for(let l=1;l<13;l++){const g=new Date(e,l,0).getDate();for(let u=1;u<=g;u++)o.push({month:l,day:u})}const i=Array.from({length:31},(l,g)=>g+1),n=Array.from({length:12},(l,g)=>g+1),s=E.useState(void 0),[a,d]=oo();return E.useEffect(()=>{a!==null&&s[1](a)},[a]),E.useEffect(()=>{s[0]!==void 0&&io(s[0])},[s[0]]),s[0]!==void 0?t.jsxs(De,{children:[t.jsx("h2",{children:"Jeden Tag ein bißchen"}),d!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:d instanceof Error?d.message:String(d)})]}),t.jsxs("div",{className:"calendar",children:[i.map((l,g)=>t.jsx("div",{style:{gridArea:`${l+1} / 1 / ${l+1} / 1`},children:l},g)),n.map((l,g)=>t.jsx("div",{style:{gridArea:`1 / ${l+1} / 1 / ${l+1}`},children:l},g)),o.map((l,g)=>t.jsx("div",{style:{gridArea:`${l.day+1} / ${l.month+1} / ${l.day+1} / ${l.month+1}`},children:t.jsx(no,{on:s,month:l.month,day:l.day})},g))]})]}):t.jsx(De,{className:"loading",children:d!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:d instanceof Error?d.message:String(d)})]}):t.jsx(Ue,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},so=v.div`
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
  }`,ao=()=>{const[e,o]=E.useState(W.now()),[i,n]=E.useState(!1),s=O.useCallback(()=>n(!0),[]),a=O.useCallback(()=>n(!1),[]);return E.useEffect(()=>{const d=setInterval(()=>o(W.now()),1e3);return()=>clearInterval(d)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(so,{onClick:s,children:[e.toFormat("HH"),t.jsx("span",{children:":"}),e.toFormat("mm")]}),t.jsx(ae,{visible:i,onClick:a,fullsize:!0,children:t.jsx(ro,{})})]})},lo=O.memo(ao),we=te?K(`/api/states/${te}`):null,ye=oe?K(`/api/states/${oe}`):null,co=()=>{const[e,o]=E.useState("off"),[i,n]=E.useState("off"),[s,a]=E.useState(!1),d=st&&(te||oe),l=e==="on"||i==="on"?"on":"off";return E.useEffect(()=>{!d||!we||P(we).then(g=>{o(g.data.state),a(!1)}).catch(g=>{a(q(g))})},[d,we]),E.useEffect(()=>{!d||!ye||P(ye).then(g=>{n(g.data.state),a(!1)}).catch(g=>{a(q(g))})},[d,ye]),E.useEffect(()=>{let g=null,u=!0;async function p(){if(!d||!te&&!oe)return;let A;try{if(!qe){M.debug("Skipping WebSocket connection in production mode (using REST API only)");return}const j=Je||(typeof window<"u"?window.location.origin:""),L=Q||"";if(!L){M.debug("Skipping WebSocket connection - no access token (using REST API only)");return}A=Ye(j,L),u&&a(!1)}catch(j){u&&(M.error("Failed to create WebSocket auth:",j),a(j instanceof Error?j.message:String(j)));return}try{if(g=await Ke({auth:A}),te){const j=L=>{u&&o(L.variables.trigger.to_state.state)};await g.subscribeMessage(j,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:te}})}if(oe){const j=L=>{u&&n(L.variables.trigger.to_state.state)};await g.subscribeMessage(j,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:oe}})}}catch(j){u&&(M.error("Failed to setup WebSocket connection:",j),a(j instanceof Error?j.message:String(j)))}}return p(),()=>{u=!1,g&&g.close()}},[d]),[l,s]},ho=()=>{ve&&P.post(K("/api/services/button/press"),{entity_id:ve}).catch(e=>{M.error("Failed to unlatch front door:",e)})},fo=e=>{if(!e)return"";if(!e.includes("/")&&!e.includes(":"))return e;const o=e.match(/\/([^\/]+?)(?:\/whep)?(?:\?|$)/);return o?o[1]:e.split("?")[0].split("/").filter(Boolean).pop()||e},uo=({src:e,show:o,orientation:i="landscape",...n})=>{const s=fo(e),a=`${to}/stream.html?src=${s}`;return o?t.jsx("iframe",{src:a,className:i,allow:"autoplay; fullscreen",...n}):null},D={portrait:360/480,landscape:1920/1072,wide:770/216};function po(e){const o={landscape:0,portrait:0,wide:0};return e.forEach(i=>{i.orientation&&o.hasOwnProperty(i.orientation)&&o[i.orientation]++}),o}function lt(e,o,i){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const n=e.length,s=po(e);return n===1?mo(e[0],o,i):n===2?go(s,e,o,i):n===3?xo(s,e,o,i):n===4?wo(s,e,o,i):{videos:[],totalArea:0,efficiency:0}}function mo(e,o,i){const n=D[e.orientation];let s,a;const d=o/i;return n>d?(s=o,a=o/n):(a=i,s=i*n),{videos:[{x:(o-s)/2,y:(i-a)/2,width:s,height:a,orientation:e.orientation}],totalArea:s*a,efficiency:s*a/(o*i)*100}}function go(e,o,i,n){if(e.portrait>0)return Te(e,o,i,n);const s=[];e.landscape>0&&s.push("landscape"),e.wide>0&&s.push("wide");const a=s[0]||o[0].orientation,d=s[1]||o[1].orientation,l=D[a],g=D[d];if(e.landscape===1&&e.wide===1){const b=D.landscape,y=D.wide,f=i,m=f/b,r=f/y,h=m+r;let w,c,x;if(h<=n)w=m,c=r,x=f;else{const I=n/h;w=m*I,c=r*I,x=c*y}const S=(i-x)/2,C=G(o,[{x:S,y:0,width:x,height:c,orientation:"wide"},{x:S,y:c,width:x,height:w,orientation:"landscape"}]),k=x*w+x*c,R=k/(i*n)*100;return{videos:C,totalArea:k,efficiency:R}}if(e.wide===2){const b=D.wide,y=i,f=y/b,m=f*2;let r;m<=n?r=f:r=n/2;const w=G(o,[{x:0,y:0,width:y,height:r,orientation:"wide"},{x:0,y:r,width:y,height:r,orientation:"wide"}]),c=y*r*2,x=c/(i*n)*100;return{videos:w,totalArea:c,efficiency:x}}const u=[()=>{const b=i,y=b/2,f=b/2,m=y/l,r=f/g;return Math.max(m,r)<=n?{positions:[{x:0,y:(n-m)/2,width:y,height:m,orientation:a},{x:y,y:(n-r)/2,width:f,height:r,orientation:d}],totalArea:y*m+f*r}:null},()=>{const b=n,y=b/2,f=b/2,m=y*l,r=f*g;return Math.max(m,r)<=i?{positions:[{x:(i-m)/2,y:0,width:m,height:y,orientation:a},{x:(i-r)/2,y,width:r,height:f,orientation:d}],totalArea:m*y+r*f}:null}];let p=null,A=0;for(const b of u){const y=b();y&&y.totalArea>A&&(A=y.totalArea,p=y)}if(!p){const b=i/2,y=i/2,f=Math.min(b/l,n),m=Math.min(y/g,n);p={positions:[{x:0,y:(n-f)/2,width:b,height:f,orientation:a},{x:b,y:(n-m)/2,width:y,height:m,orientation:d}],totalArea:b*f+y*m}}const j=G(o,p.positions),L=p.totalArea/(i*n)*100;return{videos:j,totalArea:p.totalArea,efficiency:L}}function Te(e,o,i,n){const s=e.portrait,a=o.length-s;if((s===3||s===4)&&a===0){const L=D.portrait,b=i/s,y=b/L,f=y<n?(n-y)/2:0,m=Math.min(y,n),r=[];let h=0;for(let x=0;x<s;x++){const S=Math.min(b,m*L);r.push({x:x*b+(b-S)/2,y:f,width:S,height:m,orientation:"portrait"}),h+=S*m}const w=G(o,r),c=h/(i*n)*100;return{videos:w,totalArea:h,efficiency:c}}o.filter(L=>L.orientation==="portrait");const d=o.filter(L=>L.orientation!=="portrait"),l=s>0?Math.min(i*.4,i*.5):0,g=i-l,u=[];let p=0;if(s===2&&a===0){const L=D.portrait,b=i/2,y=b/L,f=n;let m,r;y<=f?(r=y,m=b):(r=f,m=f*L);const h=(n-r)/2;u.push({x:(b-m)/2,y:h,width:m,height:r,orientation:"portrait"}),u.push({x:b+(b-m)/2,y:h,width:m,height:r,orientation:"portrait"}),p=m*r*2}else if(s===1&&a===1){const L=D.portrait,b=d[0],y=D[b.orientation],f=L+y,m=i*(L/f),r=i*(y/f),h=m/L,w=r/y,c=Math.min(n,Math.min(h,w)),x=(n-c)/2;u.push({x:0,y:x,width:m,height:c,orientation:"portrait"}),u.push({x:m,y:x,width:r,height:c,orientation:b.orientation}),p=m*c+r*c}else if(s===1&&a===2&&e.landscape===1&&e.wide===1){const L=D.portrait,b=D.wide,y=D.landscape,f=n,m=n*L,r=n/(1/b+1/y),h=r/b,w=r/y,c=m+r;if(Math.abs(c-i)<.1)u.push({x:0,y:0,width:m,height:f,orientation:"portrait"}),p+=m*f,d.find(C=>C.orientation==="wide")&&(u.push({x:0+m,y:0,width:r,height:h,orientation:"wide"}),p+=r*h),d.find(C=>C.orientation==="landscape")&&(u.push({x:0+m,y:h,width:r,height:w,orientation:"landscape"}),p+=r*w);else{const x=i/c,S=m*x,T=S/L,C=r*x,k=n/T;let R=S*k,I=n,N=C*k,F=N/b,V=N/y,z=R+N;if(z>i){const X=i/z;R=R*X,I=R/L,N=N*X,F=N/b,V=N/y,z=R+N,z>i&&(N=i-R,F=N/b,V=N/y)}const J=R+N;if(J>i){const X=i/J;R=R*X,I=R/L,N=N*X,F=N/b,V=N/y}const B=0;u.push({x:B,y:0,width:R,height:I,orientation:"portrait"}),p+=R*I,d.find(X=>X.orientation==="wide")&&(u.push({x:B+R,y:0,width:N,height:F,orientation:"wide"}),p+=N*F),d.find(X=>X.orientation==="landscape")&&(u.push({x:B+R,y:F,width:N,height:V,orientation:"landscape"}),p+=N*V)}}else if(s===1&&a===3){const L=D.portrait,b=n,y=b*L,f=y,m=i-f;u.push({x:0,y:0,width:y,height:b,orientation:"portrait"}),p+=y*b;const r=n/3;for(let h=0;h<d.length;h++){const w=d[h],c=D[w.orientation],x=r,S=m;let T,C;S/c<=x?(T=S,C=T/c):(C=x,T=C*c);const k=h*r+(r-C)/2;u.push({x:f+(m-T)/2,y:k,width:T,height:C,orientation:w.orientation}),p+=T*C}}else if(s===2&&a===1){const L=D.portrait,b=d[0],y=D[b.orientation],f=n/2,m=f*L,r=i-m,h=n*y;let w,c;h<=r?(c=n,w=c*y):(w=r,c=w/y);const x=m,S=f,T=(n-c)/2,C=(n/2-S)/2,k=n/2+(n/2-S)/2;u.push({x:0,y:T,width:w,height:c,orientation:b.orientation}),p+=w*c,u.push({x:r,y:C,width:x,height:S,orientation:"portrait"}),p+=x*S,u.push({x:r,y:k,width:x,height:S,orientation:"portrait"}),p+=x*S}else if(s===1&&a===2){const L=D.portrait,b=n,y=b*L,f=y,m=i-f;u.push({x:0,y:0,width:y,height:b,orientation:"portrait"}),p+=y*b;const r=n/2;for(let h=0;h<d.length;h++){const w=d[h],c=D[w.orientation],x=r,S=m;let T,C;S/c<=x?(T=S,C=T/c):(C=x,T=C*c);const k=h*r+(r-C)/2;u.push({x:f+(m-T)/2,y:k,width:T,height:C,orientation:w.orientation}),p+=T*C}}else{const L=s;if(L>0){const b=n/L,y=D.portrait;for(let f=0;f<L;f++){const m=Math.min(b,l/y),r=m*y,h=f*b+(b-m)/2;u.push({x:(l-r)/2,y:h,width:r,height:m,orientation:"portrait"}),p+=r*m}}if(d.length>0){const b=n/d.length;for(let y=0;y<d.length;y++){const f=d[y],m=D[f.orientation],r=b,h=g;let w,c;h/m<=r?(w=h,c=w/m):(c=r,w=c*m);const x=y*b+(b-c)/2;u.push({x:l+(g-w)/2,y:x,width:w,height:c,orientation:f.orientation}),p+=w*c}}}const A=G(o,u),j=p/(i*n)*100;return{videos:A,totalArea:p,efficiency:j}}function G(e,o){const i=new Array(o.length),n=new Set,s=new Set;for(let l=0;l<o.length;l++){const g=o[l];for(let u=0;u<e.length;u++)if(!n.has(u)&&e[u].orientation===g.orientation){i[l]={...g,orientation:e[u].orientation},n.add(u),s.add(l);break}}const a=[];for(let l=0;l<o.length;l++)s.has(l)||a.push(l);let d=0;for(let l=0;l<e.length;l++)if(!n.has(l)&&d<a.length){const g=a[d];i[g]={...o[g],orientation:e[l].orientation},d++}return i}function xo(e,o,i,n){if(e.portrait>0)return Te(e,o,i,n);if(e.landscape===2&&e.wide===1){const f=D.landscape,m=D.wide,r=i,h=r/m,w=n-h,c=i/2,x=c/f;let S,T,C,k;if(h<=n&&x<=w)S=r,T=h,C=c,k=x;else{const J=n/(h+x),B=Math.min(1,J);T=h*B,S=T*m,k=x*B,C=k*f}const R=(i-S)/2,I=T+(w-k)/2,F=G(o,[{x:R,y:0,width:S,height:T,orientation:"wide"},{x:0,y:I,width:C,height:k,orientation:"landscape"},{x:C,y:I,width:C,height:k,orientation:"landscape"}]),V=S*T+C*k*2,z=V/(i*n)*100;return{videos:F,totalArea:V,efficiency:z}}if(e.landscape===1&&e.wide===2){const f=D.landscape,m=D.wide,r=i/2,h=r/m,c=n-h,x=c*f;let S,T,C,k;if(h<=n&&x<=i&&h+c<=n)S=r,T=h,C=x,k=c;else{const B=h+c,ge=n/B;S=r,T=h*ge,k=c*ge,C=k*f}const R=0,I=i/2,N=(i-C)/2,V=G(o,[{x:R,y:0,width:S,height:T,orientation:"wide"},{x:I,y:0,width:S,height:T,orientation:"wide"},{x:N,y:T,width:C,height:k,orientation:"landscape"}]),z=S*T*2+C*k,J=z/(i*n)*100;return{videos:V,totalArea:z,efficiency:J}}if(e.wide===3){const f=D.wide,m=i/2,r=m/f,w=n-r,c=w*f;let x,S,T,C;if(r<=n&&c<=i&&r+w<=n)x=m,S=r,T=c,C=w;else{const J=r+w,B=n/J;x=m,S=r*B,C=w*B,T=C*f,T>i&&(T=i,C=T/f)}const k=0,R=i/2,I=(i-T)/2,F=G(o,[{x:k,y:0,width:x,height:S,orientation:"wide"},{x:R,y:0,width:x,height:S,orientation:"wide"},{x:I,y:S,width:T,height:C,orientation:"wide"}]),V=x*S*2+T*C,z=V/(i*n)*100;return{videos:F,totalArea:V,efficiency:z}}if(e.landscape===3){const f=D.landscape,m=i/(f*1.5),r=Math.min(n,m),h=r/2,w=r,c=h*f,x=w*f,S=(n-r)/2,T=[{x:0,y:S,width:c,height:h,orientation:"landscape"},{x:0,y:S+h,width:c,height:h,orientation:"landscape"},{x:c,y:S,width:x,height:w,orientation:"landscape"}],C=G(o,T),k=c*r+x*r,R=k/(i*n)*100;return{videos:C,totalArea:k,efficiency:R}}const s=[];if(e.landscape>0)for(let f=0;f<e.landscape;f++)s.push("landscape");if(e.wide>0)for(let f=0;f<e.wide;f++)s.push("wide");const a=s[0]||o[0].orientation,d=s[1]||o[1].orientation,l=s[2]||o[2].orientation,g=D[a],u=D[d],p=D[l],A=[()=>{const f=i*.6,m=i*.4,r=f/g,h=m/u,w=m/p,c=h+w;return r<=n&&c<=n?{positions:[{x:0,y:(n-r)/2,width:f,height:r,orientation:a},{x:f,y:0,width:m,height:h,orientation:d},{x:f,y:h,width:m,height:w,orientation:l}],totalArea:f*r+m*h+m*w}:null},()=>{const f=n*.5,m=n*.5,r=f*g,h=f*u,w=m*p;return r+h<=i&&w<=i?{positions:[{x:0,y:0,width:r,height:f,orientation:a},{x:r,y:0,width:h,height:f,orientation:d},{x:(i-w)/2,y:f,width:w,height:m,orientation:l}],totalArea:r*f+h*f+w*m}:null},()=>{const f=i/3,m=f/g,r=f/u,h=f/p;return Math.max(m,r,h)<=n?{positions:[{x:0,y:(n-m)/2,width:f,height:m,orientation:a},{x:f,y:(n-r)/2,width:f,height:r,orientation:d},{x:f*2,y:(n-h)/2,width:f,height:h,orientation:l}],totalArea:f*m+f*r+f*h}:null}];let j=null,L=0;for(const f of A){const m=f();m&&m.totalArea>L&&(L=m.totalArea,j=m)}if(!j){const f=i/3,m=Math.min(f/g,n),r=Math.min(f/u,n),h=Math.min(f/p,n);j={positions:[{x:0,y:(n-m)/2,width:f,height:m,orientation:a},{x:f,y:(n-r)/2,width:f,height:r,orientation:d},{x:f*2,y:(n-h)/2,width:f,height:h,orientation:l}],totalArea:f*m+f*r+f*h}}const b=G(o,j.positions),y=j.totalArea/(i*n)*100;return{videos:b,totalArea:j.totalArea,efficiency:y}}function wo(e,o,i,n){if(e.portrait>0)return Te(e,o,i,n);const s=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)s.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)s.push("wide");const a=s[0]||o[0].orientation,d=s[1]||o[1].orientation,l=s[2]||o[2].orientation,g=s[3]||o[3].orientation,u=D[a],p=D[d],A=D[l],j=D[g],L=[()=>{const r=i/2,h=n/2,w=Math.min(r,h*u),c=w/u,x=Math.min(r,h*p),S=x/p,T=Math.min(r,h*A),C=T/A,k=Math.min(r,h*j),R=k/j;return{positions:[{x:(r-w)/2,y:(h-c)/2,width:w,height:c,orientation:a},{x:r+(r-x)/2,y:(h-S)/2,width:x,height:S,orientation:d},{x:(r-T)/2,y:h+(h-C)/2,width:T,height:C,orientation:l},{x:r+(r-k)/2,y:h+(h-R)/2,width:k,height:R,orientation:g}],totalArea:w*c+x*S+T*C+k*R}},()=>{const r=i*.6,h=i*.4,w=r/u,c=n/3,x=Math.min(h,c*p),S=x/p,T=Math.min(h,c*A),C=T/A,k=Math.min(h,c*j),R=k/j;return w<=n?{positions:[{x:0,y:(n-w)/2,width:r,height:w,orientation:a},{x:r,y:0,width:x,height:S,orientation:d},{x:r,y:c,width:T,height:C,orientation:l},{x:r,y:c*2,width:k,height:R,orientation:g}],totalArea:r*w+x*S+T*C+k*R}:null},()=>{const r=i/4,h=r/u,w=r/p,c=r/A,x=r/j;return Math.max(h,w,c,x)<=n?{positions:[{x:0,y:(n-h)/2,width:r,height:h,orientation:a},{x:r,y:(n-w)/2,width:r,height:w,orientation:d},{x:r*2,y:(n-c)/2,width:r,height:c,orientation:l},{x:r*3,y:(n-x)/2,width:r,height:x,orientation:g}],totalArea:r*h+r*w+r*c+r*x}:null}];let b=null,y=0;for(const r of L){const h=r();h&&h.totalArea>y&&(y=h.totalArea,b=h)}if(!b){const r=i/2,h=n/2,w=Math.min(h,r/u),c=Math.min(h,r/p),x=Math.min(h,r/A),S=Math.min(h,r/j);b={positions:[{x:(r-r)/2,y:(h-w)/2,width:r,height:w,orientation:a},{x:r+(r-r)/2,y:(h-c)/2,width:r,height:c,orientation:d},{x:(r-r)/2,y:h+(h-x)/2,width:r,height:x,orientation:l},{x:r+(r-r)/2,y:h+(h-S)/2,width:r,height:S,orientation:g}],totalArea:r*w+r*c+r*x+r*S}}const f=G(o,b.positions),m=b.totalArea/(i*n)*100;return{videos:f,totalArea:b.totalArea,efficiency:m}}const Oe=45e3,yo=v.div`

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
`,bo=()=>{if(!st)return null;const[e,o]=E.useState(!1),[i]=co(),[n,s]=E.useState(void 0),[a,d]=E.useState(100),[l,g]=E.useState("0");E.useEffect(()=>{if(i==="off"&&e){const j=window.setTimeout(()=>{o(!1),s(void 0)},Oe);return s(j),g(Oe+"ms"),d(0),()=>{j&&window.clearTimeout(j)}}else i==="on"&&(g(0),d(100),o(!0))},[i,e]),E.useEffect(()=>{i==="on"&&n!==void 0&&(window.clearTimeout(n),g(0),d(100),s(void 0))},[n,i]);const[u,p]=E.useState(!1),A=()=>{ho(),p(!0)};return E.useEffect(()=>{if(u){const j=setTimeout(()=>p(!1),1e3);return()=>clearTimeout(j)}},[u]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>o(j=>!j),children:"CCTV"}),t.jsx(ae,{visible:e,onClick:A,onClose:()=>o(!1),fullsize:!0,children:t.jsxs(yo,{onClick:A,children:[t.jsx(ht,{completed:a,height:10,bgColor:n===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:l,transitionTimingFunction:"linear"}),t.jsx("div",{className:"grid",style:{display:e?"block":"none"},children:(()=>{if(ne.length===0)return null;const j=ne.map(r=>({orientation:r.orientation||"landscape"})),L=window.innerWidth,b=window.innerHeight-10,y=lt(j,L,b),f={portrait:ne.filter(r=>(r.orientation||"landscape")==="portrait"),landscape:ne.filter(r=>(r.orientation||"landscape")==="landscape"),wide:ne.filter(r=>r.orientation==="wide")},m={portrait:0,landscape:0,wide:0};return y.videos.map((r,h)=>{const w=r.orientation,c=m[w],x=f[w][c];return x?(m[w]++,t.jsxs("div",{className:"video-container",style:{left:`${r.x}px`,top:`${r.y}px`,width:`${r.width}px`,height:`${r.height}px`},children:[t.jsx(uo,{src:x.name,show:e,orientation:w}),t.jsx("div",{className:"video-overlay",onClick:()=>A()})]},`${w}-${c}-${h}`)):null})})()}),u&&t.jsx("div",{className:"open-door",children:"Tür öffnet sich"})]})})]})},jo=v.div`
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

`,Eo=({nextWeek:e,previousWeek:o,startWeekWithToday:i})=>t.jsxs(jo,{children:[t.jsxs("div",{className:"buttons",children:[t.jsx(Y,{path:Rt,size:"32px",color:"#ffffff",onClick:o}),t.jsx(Y,{path:Nt,size:"32px",color:"#ffffff",onClick:e}),t.jsx("button",{onClick:i,children:"Today"}),t.jsx(bo,{})]}),t.jsx(lo,{}),t.jsx(Y,{path:_t,size:"32px",color:"#ffffff",className:$("indicator")})]}),So=O.memo(Eo),Ao=6e4,Ce=(e=Ao,o=void 0)=>{const[i,n]=E.useState(!0);return E.useEffect(()=>{const s=setInterval(()=>{n(a=>!a)},e);return()=>{clearInterval(s)}},[e,o]),i},Lo=e=>K(`/api/calendars/${e}`),To=(e,o)=>`${Lo(e)}?${Ut.stringify(o)}`,Co={mdiDelete:Wt,mdiCake:Pt},ko=e=>{if(!e||typeof e!="string")return;const o=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Co[o]||void 0},vo=eo.map(e=>({name:e.name,icon:ko(e.icon)})),Do=(e,o,i,n)=>P(To(e.name,{start:o.toISO(),end:i.toISO()}),{timeout:1e4}).then(s=>{!s.data||!Array.isArray(s.data)||s.data.forEach(a=>{const d="dateTime"in a.start?W.fromISO(a.start.dateTime):W.fromSQL(a.start.date);let l;"dateTime"in a.end?l=Math.floor(W.fromISO(a.end.dateTime).diff(o,"days").as("days")):l=Math.floor(W.fromSQL(a.end.date).diff(o,"days").as("days"))-1;const g=Math.floor(d.diff(o,"days").as("days"));l>=n.length&&(l=n.length-1);const u="dateTime"in a.start?"events":"allDay";if(g>=0&&g<n.length)for(let p=g;p<=l;p++)n[p][u]=[...n[p][u],{...a,icon:e.icon}]})}).catch(s=>{throw s}),Re=new Map,Oo=300*1e3,Ro=e=>e.toISODate(),No=(e,o,i,n,s,a)=>{const d=[0,1,2,3,4,5].map(A=>e.plus({days:A}).startOf("day"));d[6]=e.plus({days:6}).endOf("day");const l=Ro(e),g=Re.get(l);if(g&&Date.now()-g.timestamp<Oo){i(g.data);return}const u=d.map(A=>({date:A,allDay:[],events:[]})),p=new AbortController;s.current&&s.current.abort(),s.current=p;try{n(!0);const A=vo.map(j=>Do(j,d[0],d[6],u));Promise.all(A).then(()=>{p.signal.aborted||(Re.set(l,{data:u,timestamp:Date.now()}),i(u),a(!1))}).catch(j=>{p.signal.aborted||a(q(j))}).finally(()=>{p.signal.aborted||n(!1)})}catch(A){p.signal.aborted||(a(q(A)),n(!1))}},Ne=[],_o=e=>{const[o,i]=E.useState(Ne),[n,s]=E.useState(!1),[a,d]=E.useState(!1),l=Ce(6e4,"Calendar"),[g,u]=E.useState(null),p=O.useRef(null);return E.useEffect(()=>(e!==void 0&&((g===null||!g.equals(e))&&(i(Ne),u(e)),No(e,o,i,s,p,d)),()=>{p.current&&p.current.abort()}),[e,l]),[o,a]};function se(e){const[o,i]=E.useState(!1);function n({key:a}){a===e&&i(!0)}const s=({key:a})=>{a===e&&i(!1)};return E.useEffect(()=>(window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}),[e]),o}const Po=()=>{let e=new Date,i=(e.getDay()+6)%7,n=new Date(e.setDate(e.getDate()-i));return W.fromJSDate(n)},Wo=e=>{const o=()=>e(l=>l.plus({days:7})),i=se("ArrowRight");E.useEffect(()=>{i&&o()},[i]);const n=()=>e(l=>l.minus({days:7})),s=se("ArrowLeft");E.useEffect(()=>{s&&n()},[s]);const a=()=>e(Po()),d=se("t");return E.useEffect(()=>{d&&a()},[d]),{nextWeek:o,previousWeek:n,startWeekWithToday:a}},Mo=e=>{const[o,i]=O.useState(0),[n,s]=O.useState(0),a=50;return{onTouchStart:u=>{s(0),i(u.targetTouches[0].clientX)},onTouchMove:u=>s(u.targetTouches[0].clientX),onTouchEnd:()=>{if(!o||!n)return;const u=o-n,p=u>a,A=u<-a;p&&e.onSwipedLeft(),A&&e.onSwipedRight()}}},_e=e=>W.fromISO(e).toLocaleString(W.TIME_24_SIMPLE),be=e=>e.toFormat("c")>=6,je=e=>e.hasSame(W.now(),"day"),Io=v.div`

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
`,Vo=()=>{const[e,o]=E.useState(void 0),[i,n]=_o(e),{nextWeek:s,previousWeek:a,startWeekWithToday:d}=Wo(o);E.useEffect(()=>{d()},[]);const l=Mo({onSwipedLeft:()=>s(),onSwipedRight:()=>a()}),g=O.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),u=O.useMemo(()=>i.slice(0,7),[i]);return t.jsxs(Io,{...l,children:[t.jsx(So,{nextWeek:s,previousWeek:a,startWeekWithToday:d}),t.jsxs("div",{className:"schedule",children:[u.map((p,A)=>t.jsx("div",{className:$({weekend:be(p.date),today:je(p.date)},"caption"),children:t.jsx("h2",{children:p.date.toLocaleString(g)})},A)),u.map((p,A)=>t.jsx("div",{className:$("allDayRow",{weekend:be(p.date),today:je(p.date)}),children:p.allDay.map((j,L)=>t.jsx("div",{className:"allDayEvent",children:j.summary},L))},A)),u.map((p,A)=>t.jsx("div",{className:$("eventRow",{weekend:be(p.date),today:je(p.date)}),children:p.events.map((j,L)=>t.jsxs("div",{className:"event",children:[t.jsx("div",{children:j.summary}),t.jsxs("h3",{children:[j.icon&&t.jsx(Y,{path:j.icon,size:"1rem",color:"#ffffff"}),_e(j.start.dateTime)," - ",_e(j.end.dateTime)]})]},L))},A))]}),i.length===0&&t.jsx("div",{className:"loading",children:n!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),t.jsx("div",{children:n instanceof Error?n.message:String(n)})]}):t.jsx(Ue,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),n!==!1&&i.length>0&&t.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:t.jsxs("div",{children:["Warnung: ",n instanceof Error?n.message:String(n)]})})]})},pe={"clear-day":{icon:jt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:bt,label:"Klar",color:"#eeeef5"},rain:{icon:yt,label:"Regen",color:"#80a5d6"},snow:{icon:wt,label:"Schnee",color:"#8c82ce"},sleet:{icon:xt,label:"Graupel",color:"#aba4db"},wind:{icon:gt,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:mt,label:"Neblig",color:"#d5dae2"},cloudy:{icon:pt,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:ut,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:ft,label:"Teils bewölkt",color:"#d5dae2"}},$o=()=>`./forecast/${Qe}/${Ze},${et}?&units=si&exclude=minutely`,Fo=e=>{const[o,i]=E.useState([]),[n,s]=E.useState(!1),a=Ce(6e4*10,"Weather"),d=ot&&Qe&&Ze&&et;return E.useEffect(()=>{d&&P($o()).then(l=>{i(l.data),s(!1)}).catch(l=>{s(q(l))}).finally(()=>{})},[a,e,d]),[o,n]},zo=St(At),Pe=v.div`

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
`,We=O.memo(({data:e,daily:o=!1})=>t.jsxs("div",{children:[t.jsxs("div",{children:[!o&&W.fromSeconds(e.time).toLocaleString(W.TIME_24_SIMPLE),o&&W.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),t.jsx("div",{children:t.jsx(Le,{icon:e.icon})}),t.jsx("div",{children:t.jsxs("strong",{children:[!o&&t.jsxs(t.Fragment,{children:[Math.round(e.temperature),"°"]}),o&&t.jsxs(t.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),t.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),t.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Bo=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(o=>({color:pe[o.icon]?.color||"#ffffff",text:pe[o.icon]?.label||"",annotation:`${Math.round(o.temperature)}°`,time:o.time})),Le=({icon:e})=>{const o=pe[e];return t.jsx(o.icon,{size:60,color:"#ffffff"})},Ho=()=>{if(!ot)return null;const[e,o]=Fo(),[i,n]=E.useState(!1),s=se("w"),a=E.useRef(),d=O.useCallback(()=>n(A=>!A),[]),l=O.useCallback(()=>n(!0),[]),g=O.useMemo(()=>Bo(e),[e]),u=O.useMemo(()=>[3,6,9,12],[]),p=O.useMemo(()=>[1,2,3,4,5,6,7],[]);return E.useEffect(()=>{if(!a.current||!e||!e.hourly||g.length===0)return;const A={timezone:"Europe/Berlin"},j=document.createElement("div");return a.current.textContent="",a.current.appendChild(j),Kt(j,g,A),()=>{a.current&&(a.current.textContent="")}},[g]),E.useEffect(()=>{s&&d()},[s]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?o!==!1?t.jsx(Pe,{children:t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":t.jsxs(Pe,{children:[t.jsxs("div",{onClick:l,children:[t.jsxs("div",{className:"headline",children:[t.jsx(Le,{icon:e.currently.icon}),t.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),t.jsx("div",{className:"forecast",children:u.map((A,j)=>t.jsx(We,{data:e.hourly.data[A]},j))})]}),t.jsx(ae,{visible:i,onClick:d,children:t.jsxs("div",{className:"full-weather",children:[o!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),t.jsxs("div",{className:"detail-header",children:[t.jsx("div",{children:t.jsxs("div",{className:"headline",children:[t.jsx(Le,{icon:e.daily.data[0].icon}),t.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",t.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),t.jsx("h3",{children:pe[e.daily.data[0].icon].label})]}),t.jsx("div",{className:"values",children:t.jsxs("div",{className:"table",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]}),t.jsxs("div",{children:[t.jsx("span",{children:"Windgeschwindigkeit:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]})]})}),t.jsx("h3",{children:"Die nächsten 24 Stunden"}),t.jsx("div",{ref:a}),t.jsx("h3",{children:"Die nächste Woche"}),t.jsx("div",{className:"forecast",children:p.map((A,j)=>t.jsx(We,{data:e.daily.data[A],daily:!0},j))}),t.jsxs("div",{className:"info",children:["Aktualisiert ",t.jsx(Et,{date:W.fromSeconds(e.currently.time).toJSDate(),formatter:zo})]})]})})]})},Uo=O.memo(Ho);async function Go(e){if(!Se)throw new Error("GEOFOX_SECRET is not configured");return Gt.stringify(Yt(JSON.stringify(e),Se))}const Yo="AK Wandsbek",Ko="Hamburg",Xo="Master:62016",qo="STATION",Jo={x:10.091341,y:53.568702},Qo={name:Yo,city:Ko,id:Xo,type:qo,coordinate:Jo},he={departureList:"departureList",checkName:"checkName"},Zo=async(e,o)=>P({method:"post",url:`./gti/public/${e}`,data:o,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":tt,"geofox-auth-signature":await Go(o),Authorization:void 0}}),Me=(e,o)=>e.realtimeOffset-o.realtimeOffset,ei=e=>{const o=e.departures.map(i=>({line:i.line.name,direction:i.line.direction,timeOffset:i.timeOffset,delay:i.delay?i.delay:"0",directionId:i.directionId,realtimeOffset:i.timeOffset+(i.delay?i.delay:0)/60}));return{from:o.filter(i=>i.directionId===1).slice(0,3).sort(Me),to:o.filter(i=>i.directionId===6).slice(0,3).sort(Me)}},ti=e=>{const[o,i]=E.useState([]),[n,s]=E.useState(!1),a=Ce(6e4),d=it&&tt&&Se;return E.useEffect(()=>{if(!d||!(e in he))return;let l={version:51};switch(e){case he.checkName:l={...l,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case he.departureList:const g=W.now();l={...l,station:Qo,time:{date:g.toFormat("dd.MM.yyyy"),time:g.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:l=void 0}Zo(e,l).then(g=>{i(ei(g.data)),s(!1)}).catch(g=>{s(q(g))})},[e,a,d]),[o,n]},oi=v.div`
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
`,Ie=O.memo(({line:e,direction:o,realtimeOffset:i})=>t.jsxs("div",{className:"departure",children:[t.jsx("div",{children:t.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),t.jsx("div",{children:i===0?"Jetzt":t.jsxs(t.Fragment,{children:["in ",i," '"]})})]})),ii=()=>{if(!it)return null;const[e,o]=ti(he.departureList);return t.jsxs(oi,{children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:t.jsxs("g",{transform:"translate(10368 -6294)",children:[t.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),t.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),o!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"→ Wandsbek"}),e.to?.map((i,n)=>t.jsx(Ie,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},n)),t.jsx("h3",{children:"→ Stadtauswärts"}),e.from?.map((i,n)=>t.jsx(Ie,{line:i.line,direction:i.direction,realtimeOffset:i.realtimeOffset},n))]})]})},ni=O.memo(ii),ri=()=>{const[e,o]=E.useState("closed"),[i,n]=E.useState(!1),s=nt&&U,a=U?K(`/api/states/${U}`):null;return E.useEffect(()=>{!s||!a||P(a).then(d=>{o(d.data.state),n(!1)}).catch(d=>{n(q(d))})},[s,a]),E.useEffect(()=>{let d=null,l=!0;async function g(){if(!s||!U)return;let u;try{if(!qe){M.debug("Skipping WebSocket connection in production mode (using REST API only)");return}const p=Je||(typeof window<"u"?window.location.origin:""),A=Q||"";if(!A){M.debug("Skipping WebSocket connection - no access token (using REST API only)");return}u=Ye(p,A),l&&n(!1)}catch(p){l&&(M.error("Failed to create WebSocket auth:",p),n(p instanceof Error?p.message:String(p)));return}try{d=await Ke({auth:u});const p=A=>{l&&o(A.variables.trigger.to_state.state)};await d.subscribeMessage(p,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:U}})}catch(p){l&&(M.error("Failed to setup WebSocket connection:",p),n(p instanceof Error?p.message:String(p)))}}return g(),()=>{l=!1,d&&d.close()}},[s]),[e,i]},si=e=>{if(!U)return;e(!0);const o=setTimeout(()=>e(!1),3e3);P.post(K("/api/services/cover/toggle"),{entity_id:U}).catch(i=>{M.error("Failed to toggle garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},ai=e=>{if(!U)return;e(!0);const o=setTimeout(()=>e(!1),3e3);P.post(K("/api/services/cover/open_cover"),{entity_id:U}).catch(i=>{M.error("Failed to open garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},li=e=>{if(!U)return;e(!0);const o=setTimeout(()=>e(!1),3e3);P.post(K("/api/services/cover/close_cover"),{entity_id:U}).catch(i=>{M.error("Failed to close garage door:",i)}).finally(()=>{clearTimeout(o),e(!1)})},ci=v.div`
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
`,ct=v.div`
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
`,Ve=e=>({unknown:{label:"In Bewegung oder halb-offen",icon:Ft},open:{label:"Offen",icon:$t},closed:{label:"Geschlossen",icon:Vt},opening:{label:"Öffnet",icon:It},closing:{label:"Schließt",icon:Mt}})[e]||{label:"Unavailable",icon:zt},dt=({garageDoor:e,animate:o=!1})=>t.jsxs(ct,{className:$({animate:o}),children:[t.jsx(Y,{path:Ve(e).icon,size:"2rem",color:"#ffffff"}),t.jsx("span",{children:Ve(e).label})]}),di=(e,o)=>Lt.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:i}){return t.jsx(dt,{garageDoor:i})}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark"}),hi=()=>{if(!nt)return null;const[e,o]=ri(),[i,n]=E.useState(void 0),[s,a]=E.useState(!1),[d,l]=E.useState(!1);E.useEffect(()=>{if(e==="unknown"||e==="opening"||e==="closing"){if(!i){const j=new Promise(L=>{n({resolve:L})});di(j)}}else i&&(i.resolve(e),n(void 0))},[e]);const g=se("g");E.useEffect(()=>{g&&o===!1&&si(a)},[g,o]);const u=O.useCallback(A=>{if(o===!1)switch(l(!1),A){case"open":ai(a);break;case"close":li(a);break}},[a,o]),p=O.useCallback(()=>{o===!1&&l(!0)},[o]);return t.jsxs(ci,{className:$({disabled:o!==!1}),children:[t.jsx("h2",{children:"Garage"}),t.jsx("div",{className:"status",onClick:p,children:o!==!1?t.jsxs(ct,{children:[t.jsx(Y,{path:Ge,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsx(dt,{garageDoor:e,animate:s})}),t.jsx(ae,{visible:d&&o===!1,onClick:()=>l(!1),children:t.jsxs("div",{className:"controls",children:[t.jsx("div",{onClick:()=>u("open"),children:"Öffnen"}),t.jsx("div",{onClick:()=>u("close"),children:"Schließen"})]})})]})},fi=O.memo(hi),ui=e=>e?K(`/api/states/${e}`):null,H={done:{label:"Fertig",animate:!1,icon:Ht},off:{label:"Aus",animate:!1,icon:Bt},standby:{label:"Standby",animate:!1,icon:ke},running:{label:"Läuft …",animate:!0,icon:ke}},pi={off:0,standby:2,running:16,done:256},mi=()=>{const o=(Array.isArray(ue)?ue:[]).map((u,p)=>{const[A,j]=gi(u.entity_id);return{state:A,error:j,name:u.name}}),[i,n]=E.useState(H.off),[s,a]=E.useState(!1),d=o.map(u=>u.state),l=o.map(u=>u.error);E.useEffect(()=>{const u=l.some(p=>p!==!1);a(u&&l.find(p=>p!==!1)||!1)},[l]),E.useEffect(()=>{const u=d.reduce((p,A)=>p+(pi[A]||0),0);u===0?n(H.off):u<16?n(H.standby):u<256?n(H.running):u%256===0?n(H.done):u%256%16===0?n(H.running):u%256%2===0?n(H.done):n(H.running)},[d]);const g=o.map(u=>({label:u.name,state:u.state}));return[i,g,s]},gi=e=>{const[o,i]=E.useState("off"),[n,s]=E.useState(!1),a=rt&&e,d=ui(e);return E.useEffect(()=>{!a||!d||P(d).then(l=>{i(l.data.state),s(!1)}).catch(l=>{s(q(l))})},[e,a,d]),E.useEffect(()=>{async function l(){}return l(),()=>{}},[e,a]),[o,n]},xi=v.div`
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
`,wi=()=>{if(!rt)return null;const[e,o,i]=mi(),[n,s]=E.useState(!1),a=O.useCallback(()=>{i===!1&&s(!0)},[i]),d=O.useCallback(()=>s(!1),[]);return t.jsxs(xi,{className:$({disabled:i!==!1}),children:[t.jsx("h2",{children:"Wäsche"}),t.jsx("div",{className:"status",onClick:a,children:i!==!1?t.jsxs(t.Fragment,{children:[t.jsx(Y,{path:Ge,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:$({animate:e.animate}),children:t.jsx(Y,{path:e.icon,size:"2rem",color:"#ffffff"})}),t.jsx("span",{children:e.label})]})}),t.jsx(ae,{visible:n&&i===!1,onClick:d,children:t.jsx("div",{className:"states",children:o.map((l,g)=>t.jsxs("div",{children:[t.jsx("div",{className:$({animate:H[l.state].animate}),children:t.jsx(Y,{path:H[l.state].icon,size:2})}),t.jsx("div",{children:H[l.state].label}),t.jsx("div",{className:"subtitle",children:l.label})]},g))})})]})},yi=O.memo(wi),bi=v.div`
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
`,ji=()=>t.jsxs(bi,{children:[t.jsx(Uo,{}),t.jsx(ni,{}),t.jsxs("div",{className:"two-cols",children:[t.jsx(fi,{}),t.jsx(yi,{})]})]}),Ei=O.memo(ji),$e=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],Si=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],fe={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},Ai={landscape:"L",portrait:"P",wide:"W"},Li=v.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Ti=v.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Ci=v.div`
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
`,Fe=v.select`
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
`,ze=v.input`
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
`,ki=v.button`
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
`,vi=v.button`
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
`,Di=v.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Oi=v.div`
  position: absolute;
  background-color: ${e=>fe[e.orientation]||"#666"};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`,Ri=v.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,Ni=v.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,_i=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,le=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ce=v.div`
  font-size: 0.85rem;
  color: #cccccc;
`,de=v.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Pi=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Wi=v.h3`
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
`;const Ee=v.button`
  padding: 6px 12px;
  background-color: ${e=>e.active?fe[e.orientation]:"#3a3a3a"};
  color: #ffffff;
  border: 1px solid ${e=>e.active?fe[e.orientation]:"#555"};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${e=>e.active?fe[e.orientation]:"#4a4a4a"};
  }
`,He=()=>{const[e,o]=O.useState(1920),[i,n]=O.useState(1080),[s,a]=O.useState("Full HD"),[d,l]=O.useState(""),[g,u]=O.useState(""),[p,A]=O.useState([{orientation:"landscape"}]),[j,L]=O.useState(null),b=O.useMemo(()=>lt(p,e,i),[p,e,i]),y=c=>{const x=$e.find(S=>S.name===c);x&&x.width&&x.height?(o(x.width),n(x.height),a(c),l(""),u("")):c==="Custom"&&a("Custom")},f=()=>{const c=parseInt(d),x=parseInt(g);c>0&&x>0&&(o(c),n(x))},m=c=>{A(c.videos),L(c.name)},r=c=>{const x=[];for(let S=0;S<c;S++)x.push(p[S]||{orientation:"landscape"});A(x),L(null)},h=(c,x)=>{const S=[...p];S[c]={orientation:x},A(S),L(null)},w=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/i));return t.jsxs(Li,{children:[t.jsx(Ti,{children:"Video Tiling Algorithm Demo"}),t.jsxs(Ci,{children:[t.jsxs(Z,{children:[t.jsx(ee,{children:"Screen Size Preset"}),t.jsx(Fe,{value:s,onChange:c=>y(c.target.value),children:$e.map(c=>t.jsx("option",{value:c.name,children:c.name},c.name))})]}),s==="Custom"&&t.jsxs(t.Fragment,{children:[t.jsxs(Z,{children:[t.jsx(ee,{children:"Custom Width"}),t.jsx(ze,{type:"number",value:d,onChange:c=>l(c.target.value),placeholder:"Width",min:"100"})]}),t.jsxs(Z,{children:[t.jsx(ee,{children:"Custom Height"}),t.jsx(ze,{type:"number",value:g,onChange:c=>u(c.target.value),placeholder:"Height",min:"100"})]}),t.jsxs(Z,{children:[t.jsx(ee,{children:" "}),t.jsx(ki,{onClick:f,children:"Apply Custom Size"})]})]}),t.jsxs(Z,{children:[t.jsx(ee,{children:"Number of Videos"}),t.jsxs(Fe,{value:p.length,onChange:c=>r(parseInt(c.target.value)),children:[t.jsx("option",{value:"1",children:"1 Video"}),t.jsx("option",{value:"2",children:"2 Videos"}),t.jsx("option",{value:"3",children:"3 Videos"}),t.jsx("option",{value:"4",children:"4 Videos"})]})]}),p.map((c,x)=>t.jsxs(Z,{children:[t.jsxs(ee,{children:["Video ",x+1," Orientation"]}),t.jsxs(Be,{children:[t.jsx(Ee,{active:c.orientation==="landscape",orientation:"landscape",onClick:()=>h(x,"landscape"),children:"Landscape"}),t.jsx(Ee,{active:c.orientation==="portrait",orientation:"portrait",onClick:()=>h(x,"portrait"),children:"Portrait"}),t.jsx(Ee,{active:c.orientation==="wide",orientation:"wide",onClick:()=>h(x,"wide"),children:"Wide"})]})]},x))]}),t.jsxs(Pi,{children:[t.jsx(Wi,{children:"Test Scenarios"}),t.jsx(Be,{children:Si.map(c=>t.jsx(vi,{active:j===c.name,onClick:()=>m(c),children:c.name},c.name))})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:t.jsx(Di,{style:{width:`${e*w}px`,height:`${i*w}px`},children:b.videos.map((c,x)=>t.jsxs(Oi,{orientation:c.orientation,style:{left:`${c.x*w}px`,top:`${c.y*w}px`,width:`${c.width*w}px`,height:`${c.height*w}px`},children:[t.jsxs(Ri,{children:[Ai[c.orientation]," ",x+1]}),t.jsxs(Ni,{children:[Math.round(c.width)," × ",Math.round(c.height)]})]},x))})}),t.jsxs(_i,{children:[t.jsxs(le,{children:[t.jsx(ce,{children:"Canvas Size"}),t.jsxs(de,{children:[e," × ",i]})]}),t.jsxs(le,{children:[t.jsx(ce,{children:"Total Area Used"}),t.jsxs(de,{children:[Math.round(b.totalArea).toLocaleString()," px²"]})]}),t.jsxs(le,{children:[t.jsx(ce,{children:"Efficiency"}),t.jsxs(de,{children:[b.efficiency.toFixed(2),"%"]})]}),t.jsxs(le,{children:[t.jsx(ce,{children:"Display Scale"}),t.jsxs(de,{children:[(w*100).toFixed(1),"%"]})]})]})]})},Mi=()=>{function e(i,n){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(n))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[a,d]=n.split(":").map(Number),l=new Date;let g=new Date(l.getFullYear(),l.getMonth(),l.getDate());g.setHours(a,d,0,0),g<=l&&g.setDate(g.getDate()+1);const u=g.getTime()-l.getTime();return setTimeout(i,u)}const o=()=>{window.location.reload(!0)};E.useLayoutEffect(()=>{const i=[e(o,"00:00"),e(o,"03:00"),e(o,"06:00"),e(o,"09:00"),e(o,"12:00"),e(o,"15:00"),e(o,"18:00"),e(o,"21:00")];return()=>{i.forEach(n=>{n&&clearTimeout(n)})}},[])},Ii=v.div`
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
`;class me extends E.Component{constructor(o){super(o),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(o){return{hasError:!0}}componentDidCatch(o,i){this.setState({error:o,errorInfo:i}),M.error("ErrorBoundary caught an error:",o,i)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?t.jsxs(Ii,{children:[t.jsx("h2",{children:"Something went wrong"}),t.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,t.jsxs("div",{children:[t.jsx("button",{onClick:this.handleReset,children:"Try Again"}),t.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Vi=Tt`
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
`,$i=v.div`
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
`;function Fi(){return Mi(),t.jsxs($i,{children:[t.jsx(Vi,{}),t.jsxs("div",{className:"main",children:[t.jsx(me,{children:t.jsx(Vo,{})}),t.jsx(me,{children:t.jsx(Ei,{})})]}),t.jsx(kt,{})]})}function zi(){return t.jsx(me,{children:t.jsxs(Ct,{children:[t.jsx(xe,{path:"/demo",element:t.jsx(He,{})}),t.jsx(xe,{path:"/tiling-demo",element:t.jsx(He,{})}),t.jsx(xe,{path:"*",element:t.jsx(Fi,{})})]})})}const Bi=vt.createRoot(document.getElementById("root"));Bi.render(t.jsx(E.StrictMode,{children:t.jsx(me,{children:t.jsx(Dt,{children:t.jsx(zi,{})})})}));
