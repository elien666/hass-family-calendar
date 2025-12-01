import{d as C,j as t,I as X,R as A,l as Ge,r as D,P as lt,W as ct,b as dt,e as ft,f as ht,h as ut,i as pt,k as mt,m as gt,n as xt,o as wt,T as yt,p as bt,s as jt,y as Et,q as St,t as At,u as ye,L as kt,v as Lt,B as Tt}from"./react-vendor-SoRfWBCf.js";import{D as P}from"./date-vendor-BDx6lZXm.js";import{n as G}from"./vendor-DXU8y-C2.js";import{m as vt,a as Ct,b as Ot,c as Dt,d as Rt,e as Nt,f as Ye,g as _t,h as Wt,i as Mt,j as Pt,k as $t,l as Vt,n as Ce,o as It,p as Ft}from"./ui-vendor-DhGbN51c.js";import{a as W,q as zt,B as Bt,h as Ht}from"./utils-vendor-Cy1MG2Zy.js";import{c as me,a as ge}from"./ha-vendor-CoU0AojH.js";import{t as Ut}from"./chart-vendor-ClWajKr-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const Gt=C.div`
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
`,se=({visible:e,children:o,onClick:n,onClose:i,fullsize:a=!1})=>{const l=i||n,h=s=>{s.stopPropagation(),s.preventDefault(),l()};return e?t.jsxs(Gt,{onClick:n,children:[t.jsx("div",{className:"close",onClick:h,children:t.jsx(X,{path:vt,size:2})}),t.jsx("div",{className:G("content",{fullsize:a}),onClick:s=>s.stopPropagation(),children:o})]}):null},_={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},Ke=e=>{const o={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1};return e.response?(o.status=e.response.status,o.responseData=e.response.data,o.url=e.config?.url||e.request?.responseURL||"Unknown URL",o.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(o.isNetworkError=!0,o.url=e.config?.url||"Unknown URL",o.message="Network error: No response received from server"):(o.message=e.message||"Request setup error",o.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(o.isTimeoutError=!0,o.message="Request timeout: The request took too long to complete"),o},Yt=(e,o="")=>{const n=Ke(e),i=[];return o&&i.push(`[${o}]`),i.push("Axios API Error:"),i.push(n.message),n.url&&i.push(`URL: ${n.url}`),n.status&&i.push(`Status: ${n.status}`),n.responseData&&i.push("Response:",n.responseData),_.error(...i),n},J=e=>{const o=Ke(e);return o.isNetworkError?"":o.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":o.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":o.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":o.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":o.status>=500?"Serverfehler: Bitte später erneut versuchen":o.message||"Ein Fehler ist aufgetreten"},Kt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},M=(e,o=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[e]!==void 0){const i=window.APP_CONFIG[e];return i==="undefined"||i==="null"?o:i??o}return o}const n=Kt[`VITE_${e}`];return e==="HASS_ACCESS_TOKEN"&&n!==void 0?o:n!==void 0?n:o},Xt=(e,o=!1)=>{const n=M(e,o);return typeof n=="boolean"?n:typeof n=="string"?n==="true"||n==="1"||n==="yes":!!n};M("HASS_HOST","");const K=M("HASS_ACCESS_TOKEN",""),qt=K&&typeof K=="string"&&K.trim()!==""&&K!=="undefined"&&K!=="null";qt?W.defaults.headers.common.Authorization=`Bearer ${K}`:delete W.defaults.headers.common.Authorization;W.interceptors.response.use(e=>e,e=>{const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";return Yt(e,o),Promise.reject(e)});const Xe=M("WEATHER_API_KEY"),qe=M("WEATHER_LATITUDE"),Je=M("WEATHER_LONGITUDE"),Ae=M("GEOFOX_SECRET"),Qe=M("GEOFOX_USER"),H=M("ENTITY_GARAGE_DOOR"),ne=M("ENTITY_DOORBELL"),Oe=M("ENTITY_DOORBELL_BUTTON"),ke=M("ENTITY_EVERYDAY_CALENDAR"),xe=M("SUPERVISOR_TOKEN"),Jt=(()=>{const e=M("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),he=(()=>{const e=M("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),Z=(()=>{const e=M("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),oe=(e,o)=>M(e,void 0)!==void 0?Xt(e,!1):!1,Ze=oe("ENABLE_WEATHER"),et=oe("ENABLE_HVV"),tt=oe("ENABLE_GARAGE"),ot=oe("ENABLE_LAUNDRY",Array.isArray(he)&&he.length>0),nt=oe("ENABLE_DOORBELL"),it=oe("ENABLE_EVERYDAY_CALENDAR"),Y=e=>{const o=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const n=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${n}${o}`}return o}},ie=ke?Y(`/api/states/${ke}`):null,Qt=()=>{const[e,o]=A.useState(null),[n,i]=A.useState(!1),a=it&&ke;return A.useEffect(()=>{!a||!ie||W(ie).then(l=>{l.data.attributes.store!==void 0?o(l.data.attributes.store):o([]),i(!1)}).catch(l=>{i(J(l)),o([])})},[a,ie]),[e,n]},Zt=e=>{ie&&W.post(ie,{state:new Date,attributes:{store:e}}).catch(o=>{_.error("Failed to store everyday calendar data:",o)})},De=C.div` 

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
`,eo=({on:e,month:o,day:n})=>{const[i,a]=e,l=i.indexOf(`${o}-${n}`),h=l>-1,s=()=>{a(h?i.toSpliced(l,1):[...i,`${o}-${n}`])};return t.jsx("div",{className:G("dot",{on:h}),onClick:()=>s()})},to=()=>{if(!it)return null;const e=new Date().getFullYear(),o=[];for(let s=1;s<13;s++){const g=new Date(e,s,0).getDate();for(let f=1;f<=g;f++)o.push({month:s,day:f})}const n=Array.from({length:31},(s,g)=>g+1),i=Array.from({length:12},(s,g)=>g+1),a=A.useState(void 0),[l,h]=Qt();return A.useEffect(()=>{l!==null&&a[1](l)},[l]),A.useEffect(()=>{a[0]!==void 0&&Zt(a[0])},[a[0]]),a[0]!==void 0?t.jsxs(De,{children:[t.jsx("h2",{children:"Jeden Tag ein bißchen"}),h!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:h instanceof Error?h.message:String(h)})]}),t.jsxs("div",{className:"calendar",children:[n.map((s,g)=>t.jsx("div",{style:{gridArea:`${s+1} / 1 / ${s+1} / 1`},children:s},g)),i.map((s,g)=>t.jsx("div",{style:{gridArea:`1 / ${s+1} / 1 / ${s+1}`},children:s},g)),o.map((s,g)=>t.jsx("div",{style:{gridArea:`${s.day+1} / ${s.month+1} / ${s.day+1} / ${s.month+1}`},children:t.jsx(eo,{on:a,month:s.month,day:s.day})},g))]})]}):t.jsx(De,{className:"loading",children:h!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:h instanceof Error?h.message:String(h)})]}):t.jsx(Ge,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},oo=C.div`
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
  }`,no=()=>{const[e,o]=A.useState(P.now()),[n,i]=A.useState(!1),a=D.useCallback(()=>i(!0),[]),l=D.useCallback(()=>i(!1),[]);return A.useEffect(()=>{const h=setInterval(()=>o(P.now()),1e3);return()=>clearInterval(h)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(oo,{onClick:a,children:[e.toFormat("HH"),t.jsx("span",{children:":"}),e.toFormat("mm")]}),t.jsx(se,{visible:n,onClick:l,fullsize:!0,children:t.jsx(to,{})})]})},io=D.memo(no),be=ne?Y(`/api/states/${ne}`):null,ro=()=>{const[e,o]=A.useState("off"),[n,i]=A.useState(!1),a=nt&&ne;return A.useEffect(()=>{!a||!be||W(be).then(l=>{o(l.data.state),i(!1)}).catch(l=>{i(J(l))})},[a,be]),A.useEffect(()=>{let l=null,h=!0;async function s(){if(!a||!ne)return;let g;if(typeof window<"u"&&window.location){const w=window.location.pathname.replace(/\/$/,"");g=`${window.location.origin}${w}`}else g="";const f=xe||K||"";if(!f)return;let p;try{p=me(g,f),h&&i(!1)}catch(w){h&&(_.error("Failed to create WebSocket auth:",w),i(w instanceof Error?w.message:String(w)));return}try{l=await ge({auth:p});const w=j=>{if(h){const E=j.variables.trigger.to_state.state;o(E)}};await l.subscribeMessage(w,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:ne}})}catch(w){h&&(_.error("Failed to setup WebSocket connection:",w),_.error("WebSocket error details:",{message:w instanceof Error?w.message:String(w),code:w.code,name:w.name,wsUrl:p?.wsUrl,host:g,tokenLength:f?f.length:0}),w.code===2&&_.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),i(w instanceof Error?w.message:String(w)))}}return s(),()=>{h=!1,l&&l.close()}},[a]),[e,n]},so=()=>{Oe&&W.post(Y("/api/services/button/press"),{entity_id:Oe}).catch(e=>{_.error("Failed to unlatch front door:",e)})},O={portrait:360/480,landscape:1920/1072,wide:770/216};function ao(e){const o={landscape:0,portrait:0,wide:0};return e.forEach(n=>{n.orientation&&o.hasOwnProperty(n.orientation)&&o[n.orientation]++}),o}function rt(e,o,n){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const i=e.length,a=ao(e);return i===1?lo(e[0],o,n):i===2?co(a,e,o,n):i===3?fo(a,e,o,n):i===4?ho(a,e,o,n):{videos:[],totalArea:0,efficiency:0}}function lo(e,o,n){const i=O[e.orientation];let a,l;const h=o/n;return i>h?(a=o,l=o/i):(l=n,a=n*i),{videos:[{x:(o-a)/2,y:(n-l)/2,width:a,height:l,orientation:e.orientation}],totalArea:a*l,efficiency:a*l/(o*n)*100}}function co(e,o,n,i){if(e.portrait>0)return Te(e,o,n,i);const a=[];e.landscape>0&&a.push("landscape"),e.wide>0&&a.push("wide");const l=a[0]||o[0].orientation,h=a[1]||o[1].orientation,s=O[l],g=O[h];if(e.landscape===1&&e.wide===1){const b=O.landscape,S=O.wide,c=n,m=c/b,r=c/S,u=m+r;let y,d,x;if(u<=i)y=m,d=r,x=c;else{const $=i/u;y=m*$,d=r*$,x=d*S}const k=(n-x)/2,T=U(o,[{x:k,y:0,width:x,height:d,orientation:"wide"},{x:k,y:d,width:x,height:y,orientation:"landscape"}]),v=x*y+x*d,R=v/(n*i)*100;return{videos:T,totalArea:v,efficiency:R}}if(e.wide===2){const b=O.wide,S=n,c=S/b,m=c*2;let r;m<=i?r=c:r=i/2;const y=U(o,[{x:0,y:0,width:S,height:r,orientation:"wide"},{x:0,y:r,width:S,height:r,orientation:"wide"}]),d=S*r*2,x=d/(n*i)*100;return{videos:y,totalArea:d,efficiency:x}}const f=[()=>{const b=n,S=b/2,c=b/2,m=S/s,r=c/g;return Math.max(m,r)<=i?{positions:[{x:0,y:(i-m)/2,width:S,height:m,orientation:l},{x:S,y:(i-r)/2,width:c,height:r,orientation:h}],totalArea:S*m+c*r}:null},()=>{const b=i,S=b/2,c=b/2,m=S*s,r=c*g;return Math.max(m,r)<=n?{positions:[{x:(n-m)/2,y:0,width:m,height:S,orientation:l},{x:(n-r)/2,y:S,width:r,height:c,orientation:h}],totalArea:m*S+r*c}:null}];let p=null,w=0;for(const b of f){const S=b();S&&S.totalArea>w&&(w=S.totalArea,p=S)}if(!p){const b=n/2,S=n/2,c=Math.min(b/s,i),m=Math.min(S/g,i);p={positions:[{x:0,y:(i-c)/2,width:b,height:c,orientation:l},{x:b,y:(i-m)/2,width:S,height:m,orientation:h}],totalArea:b*c+S*m}}const j=U(o,p.positions),E=p.totalArea/(n*i)*100;return{videos:j,totalArea:p.totalArea,efficiency:E}}function Te(e,o,n,i){const a=e.portrait,l=o.length-a;if((a===3||a===4)&&l===0){const E=O.portrait,b=n/a,S=b/E,c=S<i?(i-S)/2:0,m=Math.min(S,i),r=[];let u=0;for(let x=0;x<a;x++){const k=Math.min(b,m*E);r.push({x:x*b+(b-k)/2,y:c,width:k,height:m,orientation:"portrait"}),u+=k*m}const y=U(o,r),d=u/(n*i)*100;return{videos:y,totalArea:u,efficiency:d}}o.filter(E=>E.orientation==="portrait");const h=o.filter(E=>E.orientation!=="portrait"),s=a>0?Math.min(n*.4,n*.5):0,g=n-s,f=[];let p=0;if(a===2&&l===0){const E=O.portrait,b=n/2,S=b/E,c=i;let m,r;S<=c?(r=S,m=b):(r=c,m=c*E);const u=(i-r)/2;f.push({x:(b-m)/2,y:u,width:m,height:r,orientation:"portrait"}),f.push({x:b+(b-m)/2,y:u,width:m,height:r,orientation:"portrait"}),p=m*r*2}else if(a===1&&l===1){const E=O.portrait,b=h[0],S=O[b.orientation],c=E+S,m=n*(E/c),r=n*(S/c),u=m/E,y=r/S,d=Math.min(i,Math.min(u,y)),x=(i-d)/2;f.push({x:0,y:x,width:m,height:d,orientation:"portrait"}),f.push({x:m,y:x,width:r,height:d,orientation:b.orientation}),p=m*d+r*d}else if(a===1&&l===2&&e.landscape===1&&e.wide===1){const E=O.portrait,b=O.wide,S=O.landscape,c=i,m=i*E,r=i/(1/b+1/S),u=r/b,y=r/S,d=m+r;if(Math.abs(d-n)<.1)f.push({x:0,y:0,width:m,height:c,orientation:"portrait"}),p+=m*c,h.find(T=>T.orientation==="wide")&&(f.push({x:0+m,y:0,width:r,height:u,orientation:"wide"}),p+=r*u),h.find(T=>T.orientation==="landscape")&&(f.push({x:0+m,y:u,width:r,height:y,orientation:"landscape"}),p+=r*y);else{const x=n/d,k=m*x,L=k/E,T=r*x,v=i/L;let R=k*v,$=i,N=T*v,I=N/b,V=N/S,F=R+N;if(F>n){const q=n/F;R=R*q,$=R/E,N=N*q,I=N/b,V=N/S,F=R+N,F>n&&(N=n-R,I=N/b,V=N/S)}const Q=R+N;if(Q>n){const q=n/Q;R=R*q,$=R/E,N=N*q,I=N/b,V=N/S}const z=0;f.push({x:z,y:0,width:R,height:$,orientation:"portrait"}),p+=R*$,h.find(q=>q.orientation==="wide")&&(f.push({x:z+R,y:0,width:N,height:I,orientation:"wide"}),p+=N*I),h.find(q=>q.orientation==="landscape")&&(f.push({x:z+R,y:I,width:N,height:V,orientation:"landscape"}),p+=N*V)}}else if(a===1&&l===3){const E=O.portrait,b=i,S=b*E,c=S,m=n-c;f.push({x:0,y:0,width:S,height:b,orientation:"portrait"}),p+=S*b;const r=i/3;for(let u=0;u<h.length;u++){const y=h[u],d=O[y.orientation],x=r,k=m;let L,T;k/d<=x?(L=k,T=L/d):(T=x,L=T*d);const v=u*r+(r-T)/2;f.push({x:c+(m-L)/2,y:v,width:L,height:T,orientation:y.orientation}),p+=L*T}}else if(a===2&&l===1){const E=O.portrait,b=h[0],S=O[b.orientation],c=i/2,m=c*E,r=n-m,u=i*S;let y,d;u<=r?(d=i,y=d*S):(y=r,d=y/S);const x=m,k=c,L=(i-d)/2,T=(i/2-k)/2,v=i/2+(i/2-k)/2;f.push({x:0,y:L,width:y,height:d,orientation:b.orientation}),p+=y*d,f.push({x:r,y:T,width:x,height:k,orientation:"portrait"}),p+=x*k,f.push({x:r,y:v,width:x,height:k,orientation:"portrait"}),p+=x*k}else if(a===1&&l===2){const E=O.portrait,b=i,S=b*E,c=S,m=n-c;f.push({x:0,y:0,width:S,height:b,orientation:"portrait"}),p+=S*b;const r=i/2;for(let u=0;u<h.length;u++){const y=h[u],d=O[y.orientation],x=r,k=m;let L,T;k/d<=x?(L=k,T=L/d):(T=x,L=T*d);const v=u*r+(r-T)/2;f.push({x:c+(m-L)/2,y:v,width:L,height:T,orientation:y.orientation}),p+=L*T}}else{const E=a;if(E>0){const b=i/E,S=O.portrait;for(let c=0;c<E;c++){const m=Math.min(b,s/S),r=m*S,u=c*b+(b-m)/2;f.push({x:(s-r)/2,y:u,width:r,height:m,orientation:"portrait"}),p+=r*m}}if(h.length>0){const b=i/h.length;for(let S=0;S<h.length;S++){const c=h[S],m=O[c.orientation],r=b,u=g;let y,d;u/m<=r?(y=u,d=y/m):(d=r,y=d*m);const x=S*b+(b-d)/2;f.push({x:s+(g-y)/2,y:x,width:y,height:d,orientation:c.orientation}),p+=y*d}}}const w=U(o,f),j=p/(n*i)*100;return{videos:w,totalArea:p,efficiency:j}}function U(e,o){const n=new Array(o.length),i=new Set,a=new Set;for(let s=0;s<o.length;s++){const g=o[s];for(let f=0;f<e.length;f++)if(!i.has(f)&&e[f].orientation===g.orientation){n[s]={...g,orientation:e[f].orientation},i.add(f),a.add(s);break}}const l=[];for(let s=0;s<o.length;s++)a.has(s)||l.push(s);let h=0;for(let s=0;s<e.length;s++)if(!i.has(s)&&h<l.length){const g=l[h];n[g]={...o[g],orientation:e[s].orientation},h++}return n}function fo(e,o,n,i){if(e.portrait>0)return Te(e,o,n,i);if(e.landscape===2&&e.wide===1){const c=O.landscape,m=O.wide,r=n,u=r/m,y=i-u,d=n/2,x=d/c;let k,L,T,v;if(u<=i&&x<=y)k=r,L=u,T=d,v=x;else{const Q=i/(u+x),z=Math.min(1,Q);L=u*z,k=L*m,v=x*z,T=v*c}const R=(n-k)/2,$=L+(y-v)/2,I=U(o,[{x:R,y:0,width:k,height:L,orientation:"wide"},{x:0,y:$,width:T,height:v,orientation:"landscape"},{x:T,y:$,width:T,height:v,orientation:"landscape"}]),V=k*L+T*v*2,F=V/(n*i)*100;return{videos:I,totalArea:V,efficiency:F}}if(e.landscape===1&&e.wide===2){const c=O.landscape,m=O.wide,r=n/2,u=r/m,d=i-u,x=d*c;let k,L,T,v;if(u<=i&&x<=n&&u+d<=i)k=r,L=u,T=x,v=d;else{const z=u+d,we=i/z;k=r,L=u*we,v=d*we,T=v*c}const R=0,$=n/2,N=(n-T)/2,V=U(o,[{x:R,y:0,width:k,height:L,orientation:"wide"},{x:$,y:0,width:k,height:L,orientation:"wide"},{x:N,y:L,width:T,height:v,orientation:"landscape"}]),F=k*L*2+T*v,Q=F/(n*i)*100;return{videos:V,totalArea:F,efficiency:Q}}if(e.wide===3){const c=O.wide,m=n/2,r=m/c,y=i-r,d=y*c;let x,k,L,T;if(r<=i&&d<=n&&r+y<=i)x=m,k=r,L=d,T=y;else{const Q=r+y,z=i/Q;x=m,k=r*z,T=y*z,L=T*c,L>n&&(L=n,T=L/c)}const v=0,R=n/2,$=(n-L)/2,I=U(o,[{x:v,y:0,width:x,height:k,orientation:"wide"},{x:R,y:0,width:x,height:k,orientation:"wide"},{x:$,y:k,width:L,height:T,orientation:"wide"}]),V=x*k*2+L*T,F=V/(n*i)*100;return{videos:I,totalArea:V,efficiency:F}}if(e.landscape===3){const c=O.landscape,m=n/(c*1.5),r=Math.min(i,m),u=r/2,y=r,d=u*c,x=y*c,k=(i-r)/2,L=[{x:0,y:k,width:d,height:u,orientation:"landscape"},{x:0,y:k+u,width:d,height:u,orientation:"landscape"},{x:d,y:k,width:x,height:y,orientation:"landscape"}],T=U(o,L),v=d*r+x*r,R=v/(n*i)*100;return{videos:T,totalArea:v,efficiency:R}}const a=[];if(e.landscape>0)for(let c=0;c<e.landscape;c++)a.push("landscape");if(e.wide>0)for(let c=0;c<e.wide;c++)a.push("wide");const l=a[0]||o[0].orientation,h=a[1]||o[1].orientation,s=a[2]||o[2].orientation,g=O[l],f=O[h],p=O[s],w=[()=>{const c=n*.6,m=n*.4,r=c/g,u=m/f,y=m/p,d=u+y;return r<=i&&d<=i?{positions:[{x:0,y:(i-r)/2,width:c,height:r,orientation:l},{x:c,y:0,width:m,height:u,orientation:h},{x:c,y:u,width:m,height:y,orientation:s}],totalArea:c*r+m*u+m*y}:null},()=>{const c=i*.5,m=i*.5,r=c*g,u=c*f,y=m*p;return r+u<=n&&y<=n?{positions:[{x:0,y:0,width:r,height:c,orientation:l},{x:r,y:0,width:u,height:c,orientation:h},{x:(n-y)/2,y:c,width:y,height:m,orientation:s}],totalArea:r*c+u*c+y*m}:null},()=>{const c=n/3,m=c/g,r=c/f,u=c/p;return Math.max(m,r,u)<=i?{positions:[{x:0,y:(i-m)/2,width:c,height:m,orientation:l},{x:c,y:(i-r)/2,width:c,height:r,orientation:h},{x:c*2,y:(i-u)/2,width:c,height:u,orientation:s}],totalArea:c*m+c*r+c*u}:null}];let j=null,E=0;for(const c of w){const m=c();m&&m.totalArea>E&&(E=m.totalArea,j=m)}if(!j){const c=n/3,m=Math.min(c/g,i),r=Math.min(c/f,i),u=Math.min(c/p,i);j={positions:[{x:0,y:(i-m)/2,width:c,height:m,orientation:l},{x:c,y:(i-r)/2,width:c,height:r,orientation:h},{x:c*2,y:(i-u)/2,width:c,height:u,orientation:s}],totalArea:c*m+c*r+c*u}}const b=U(o,j.positions),S=j.totalArea/(n*i)*100;return{videos:b,totalArea:j.totalArea,efficiency:S}}function ho(e,o,n,i){if(e.portrait>0)return Te(e,o,n,i);const a=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)a.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)a.push("wide");const l=a[0]||o[0].orientation,h=a[1]||o[1].orientation,s=a[2]||o[2].orientation,g=a[3]||o[3].orientation,f=O[l],p=O[h],w=O[s],j=O[g],E=[()=>{const r=n/2,u=i/2,y=Math.min(r,u*f),d=y/f,x=Math.min(r,u*p),k=x/p,L=Math.min(r,u*w),T=L/w,v=Math.min(r,u*j),R=v/j;return{positions:[{x:(r-y)/2,y:(u-d)/2,width:y,height:d,orientation:l},{x:r+(r-x)/2,y:(u-k)/2,width:x,height:k,orientation:h},{x:(r-L)/2,y:u+(u-T)/2,width:L,height:T,orientation:s},{x:r+(r-v)/2,y:u+(u-R)/2,width:v,height:R,orientation:g}],totalArea:y*d+x*k+L*T+v*R}},()=>{const r=n*.6,u=n*.4,y=r/f,d=i/3,x=Math.min(u,d*p),k=x/p,L=Math.min(u,d*w),T=L/w,v=Math.min(u,d*j),R=v/j;return y<=i?{positions:[{x:0,y:(i-y)/2,width:r,height:y,orientation:l},{x:r,y:0,width:x,height:k,orientation:h},{x:r,y:d,width:L,height:T,orientation:s},{x:r,y:d*2,width:v,height:R,orientation:g}],totalArea:r*y+x*k+L*T+v*R}:null},()=>{const r=n/4,u=r/f,y=r/p,d=r/w,x=r/j;return Math.max(u,y,d,x)<=i?{positions:[{x:0,y:(i-u)/2,width:r,height:u,orientation:l},{x:r,y:(i-y)/2,width:r,height:y,orientation:h},{x:r*2,y:(i-d)/2,width:r,height:d,orientation:s},{x:r*3,y:(i-x)/2,width:r,height:x,orientation:g}],totalArea:r*u+r*y+r*d+r*x}:null}];let b=null,S=0;for(const r of E){const u=r();u&&u.totalArea>S&&(S=u.totalArea,b=u)}if(!b){const r=n/2,u=i/2,y=Math.min(u,r/f),d=Math.min(u,r/p),x=Math.min(u,r/w),k=Math.min(u,r/j);b={positions:[{x:(r-r)/2,y:(u-y)/2,width:r,height:y,orientation:l},{x:r+(r-r)/2,y:(u-d)/2,width:r,height:d,orientation:h},{x:(r-r)/2,y:u+(u-x)/2,width:r,height:x,orientation:s},{x:r+(r-r)/2,y:u+(u-k)/2,width:r,height:k,orientation:g}],totalArea:r*y+r*d+r*x+r*k}}const c=U(o,b.positions),m=b.totalArea/(n*i)*100;return{videos:c,totalArea:b.totalArea,efficiency:m}}const uo=e=>{const[o,n]=A.useState({}),[i,a]=A.useState(!0),[l,h]=A.useState(null);return A.useEffect(()=>{if(!e||e.length===0){a(!1);return}let s=!0;async function g(){a(!0),h(null);try{const f=e.map(async w=>{try{const j=Y(`/api/states/${w}`),b=(await W(j)).data?.attributes?.access_token||null;return{entityId:w,accessToken:b}}catch(j){return _.error(`Failed to fetch access token for ${w}:`,j),{entityId:w,accessToken:null}}}),p=await Promise.all(f);if(s){const w={};p.forEach(({entityId:j,accessToken:E})=>{E&&(w[j]=E)}),n(w),a(!1)}}catch(f){s&&(_.error("Failed to fetch camera access tokens:",f),h(J(f)),a(!1))}}return g(),()=>{s=!1}},[e?.length,e?.join(",")]),A.useEffect(()=>{if(!e||e.length===0)return;let s=!0,g=null;async function f(){if(s)try{const p=e.map(async j=>{try{const E=Y(`/api/states/${j}`),S=(await W(E)).data?.attributes?.access_token||null;return{entityId:j,accessToken:S}}catch(E){return _.debug(`Failed to refresh access token for ${j}:`,E),null}}),w=await Promise.all(p);s&&n(j=>{const E={...j};return w.forEach(b=>{b&&b.accessToken&&(E[b.entityId]=b.accessToken)}),E})}catch{}}return g=setInterval(f,300*1e3),()=>{s=!1,g&&clearInterval(g)}},[e?.length,e?.join(",")]),A.useEffect(()=>{if(!e||e.length===0)return;let s=null,g=[],f=!0,p=null,w=!1;async function j(){if(w)return;if(s){try{g.forEach(c=>{c&&c()}),g=[],s.close()}catch{}s=null}w=!0;let E;if(typeof window<"u"&&window.location){const c=window.location.pathname.replace(/\/$/,"");E=`${window.location.origin}${c}`}else E="";const b=xe||K||"";if(!b){w=!1;return}let S;try{S=me(E,b),f&&h(!1)}catch(c){f&&(_.error("Failed to create WebSocket auth for camera tokens:",c),h(c instanceof Error?c.message:String(c))),w=!1;return}try{s=await ge({auth:S}),s.addEventListener("ready",()=>{f&&_.debug("WebSocket connection ready for camera tokens")}),s.addEventListener("disconnected",()=>{f&&!w&&(_.debug("WebSocket disconnected for camera tokens, will attempt to reconnect"),p&&clearTimeout(p),s=null,g=[],p=setTimeout(()=>{f&&!w&&(_.debug("Attempting to reconnect WebSocket for camera tokens"),j())},5e3))});for(const c of e){const m=u=>{if(f){const d=u.variables.trigger.to_state?.attributes?.access_token||null;n(x=>d?{...x,[c]:d}:x)}},r=await s.subscribeMessage(m,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:c}});g.push(r)}w=!1}catch(c){w=!1,f&&(_.error("Failed to setup WebSocket connection for camera tokens:",c),h(c instanceof Error?c.message:String(c)),p=setTimeout(()=>{f&&j()},1e4))}}return j(),()=>{f=!1,p&&clearTimeout(p),g.forEach(E=>{E&&E()}),s&&s.close()}},[e?.length,e?.join(",")]),[o,i,l]},po=(e,o=null)=>{if(!e)return null;let n=`/api/camera_proxy_stream/${e}`;if(o&&(n=`${n}?token=${encodeURIComponent(o)}`),typeof window<"u"&&window.location){const i=window.location.protocol,a=window.location.host;return`${i}//${a}${n}`}return n},Re=45e3,mo=C.div`

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
    }
`,go=()=>{if(!nt)return null;const[e,o]=A.useState(!1),[n]=ro(),[i,a]=A.useState(void 0),[l,h]=A.useState(100),[s,g]=A.useState("0"),f=A.useMemo(()=>Z.map(b=>b.entity_id).filter(Boolean),[Z]),[p]=uo(f);A.useEffect(()=>{if(n==="off"&&e){const b=window.setTimeout(()=>{o(!1),a(void 0)},Re);return a(b),g(Re+"ms"),h(0),()=>{b&&window.clearTimeout(b)}}else n==="on"&&(g(0),h(100),o(!0))},[n,e]),A.useEffect(()=>{n==="on"&&i!==void 0&&(window.clearTimeout(i),g(0),h(100),a(void 0))},[i,n]);const[w,j]=A.useState(!1),E=()=>{so(),j(!0)};return A.useEffect(()=>{if(w){const b=setTimeout(()=>j(!1),1e3);return()=>clearTimeout(b)}},[w]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>o(b=>!b),children:"CCTV"}),t.jsx(se,{visible:e,onClick:E,onClose:()=>o(!1),fullsize:!0,children:t.jsxs(mo,{onClick:E,children:[t.jsx(lt,{completed:l,height:10,bgColor:i===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:s,transitionTimingFunction:"linear"}),t.jsx("div",{className:"grid",children:(()=>{if(Z.length===0)return null;const b=Z.map(y=>({orientation:y.orientation||"landscape"})),S=window.innerWidth,c=window.innerHeight-10,m=rt(b,S,c),r={portrait:Z.filter(y=>(y.orientation||"landscape")==="portrait"),landscape:Z.filter(y=>(y.orientation||"landscape")==="landscape"),wide:Z.filter(y=>y.orientation==="wide")},u={portrait:0,landscape:0,wide:0};return m.videos.map((y,d)=>{const x=y.orientation,k=u[x],L=r[x][k];if(!L)return null;u[x]++;const T=p[L.entity_id]||null,v=po(L.entity_id,T);return v?t.jsxs("div",{className:"video-container",style:{left:`${y.x}px`,top:`${y.y}px`,width:`${y.width}px`,height:`${y.height}px`},children:[t.jsx("img",{src:v,className:x,alt:"Camera stream"}),t.jsx("div",{className:"video-overlay",onClick:()=>E()})]},`${x}-${k}-${d}`):null})})()}),w&&t.jsx("div",{className:"open-door",children:"Tür öffnet sich"})]})})]})},xo=C.div`
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

`,wo=({nextWeek:e,previousWeek:o,startWeekWithToday:n})=>t.jsxs(xo,{children:[t.jsxs("div",{className:"buttons",children:[t.jsx(X,{path:Ct,size:"32px",color:"#ffffff",onClick:o}),t.jsx(X,{path:Ot,size:"32px",color:"#ffffff",onClick:e}),t.jsx("button",{onClick:n,children:"Today"}),t.jsx(go,{})]}),t.jsx(io,{}),t.jsx(X,{path:Dt,size:"32px",color:"#ffffff",className:G("indicator")})]}),yo=D.memo(wo),bo=6e4,ve=(e=bo,o=void 0)=>{const[n,i]=A.useState(!0);return A.useEffect(()=>{const a=setInterval(()=>{i(l=>!l)},e);return()=>{clearInterval(a)}},[e,o]),n},jo=e=>Y(`/api/calendars/${e}`),Eo=(e,o)=>`${jo(e)}?${zt.stringify(o)}`,So={mdiDelete:Nt,mdiCake:Rt},Ao=e=>{if(!e||typeof e!="string")return;const o=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return So[o]||void 0},ko=Jt.map(e=>({name:e.name,icon:Ao(e.icon)})),Lo=(e,o,n,i)=>W(Eo(e.name,{start:o.toISO(),end:n.toISO()}),{timeout:1e4}).then(a=>{!a.data||!Array.isArray(a.data)||a.data.forEach(l=>{const h="dateTime"in l.start?P.fromISO(l.start.dateTime):P.fromSQL(l.start.date);let s;"dateTime"in l.end?s=Math.floor(P.fromISO(l.end.dateTime).diff(o,"days").as("days")):s=Math.floor(P.fromSQL(l.end.date).diff(o,"days").as("days"))-1;const g=Math.floor(h.diff(o,"days").as("days"));s>=i.length&&(s=i.length-1);const f="dateTime"in l.start?"events":"allDay";if(g>=0&&g<i.length)for(let p=g;p<=s;p++)i[p][f]=[...i[p][f],{...l,icon:e.icon}]})}).catch(a=>{throw a}),Ne=new Map,To=300*1e3,vo=e=>e.toISODate(),Co=(e,o,n,i,a,l)=>{const h=[0,1,2,3,4,5].map(w=>e.plus({days:w}).startOf("day"));h[6]=e.plus({days:6}).endOf("day");const s=vo(e),g=Ne.get(s);if(g&&Date.now()-g.timestamp<To){n(g.data);return}const f=h.map(w=>({date:w,allDay:[],events:[]})),p=new AbortController;a.current&&a.current.abort(),a.current=p;try{i(!0);const w=ko.map(j=>Lo(j,h[0],h[6],f));Promise.all(w).then(()=>{p.signal.aborted||(Ne.set(s,{data:f,timestamp:Date.now()}),n(f),l(!1))}).catch(j=>{p.signal.aborted||l(J(j))}).finally(()=>{p.signal.aborted||i(!1)})}catch(w){p.signal.aborted||(l(J(w)),i(!1))}},_e=[],Oo=e=>{const[o,n]=A.useState(_e),[i,a]=A.useState(!1),[l,h]=A.useState(!1),s=ve(6e4,"Calendar"),[g,f]=A.useState(null),p=D.useRef(null);return A.useEffect(()=>(e!==void 0&&((g===null||!g.equals(e))&&(n(_e),f(e)),Co(e,o,n,a,p,h)),()=>{p.current&&p.current.abort()}),[e,s]),[o,l]};function re(e){const[o,n]=A.useState(!1);function i({key:l}){l===e&&n(!0)}const a=({key:l})=>{l===e&&n(!1)};return A.useEffect(()=>(window.addEventListener("keydown",i),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",i),window.removeEventListener("keyup",a)}),[e]),o}const Do=()=>{let e=new Date,n=(e.getDay()+6)%7,i=new Date(e.setDate(e.getDate()-n));return P.fromJSDate(i)},Ro=e=>{const o=()=>e(s=>s.plus({days:7})),n=re("ArrowRight");A.useEffect(()=>{n&&o()},[n]);const i=()=>e(s=>s.minus({days:7})),a=re("ArrowLeft");A.useEffect(()=>{a&&i()},[a]);const l=()=>e(Do()),h=re("t");return A.useEffect(()=>{h&&l()},[h]),{nextWeek:o,previousWeek:i,startWeekWithToday:l}},No=e=>{const[o,n]=D.useState(0),[i,a]=D.useState(0),l=50;return{onTouchStart:f=>{a(0),n(f.targetTouches[0].clientX)},onTouchMove:f=>a(f.targetTouches[0].clientX),onTouchEnd:()=>{if(!o||!i)return;const f=o-i,p=f>l,w=f<-l;p&&e.onSwipedLeft(),w&&e.onSwipedRight()}}},We=e=>P.fromISO(e).toLocaleString(P.TIME_24_SIMPLE),je=e=>e.toFormat("c")>=6,Ee=e=>e.hasSame(P.now(),"day"),_o=C.div`

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
`,Wo=()=>{const[e,o]=A.useState(void 0),[n,i]=Oo(e),{nextWeek:a,previousWeek:l,startWeekWithToday:h}=Ro(o);A.useEffect(()=>{h()},[]);const s=No({onSwipedLeft:()=>a(),onSwipedRight:()=>l()}),g=D.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),f=D.useMemo(()=>n.slice(0,7),[n]);return t.jsxs(_o,{...s,children:[t.jsx(yo,{nextWeek:a,previousWeek:l,startWeekWithToday:h}),t.jsxs("div",{className:"schedule",children:[f.map((p,w)=>t.jsx("div",{className:G({weekend:je(p.date),today:Ee(p.date)},"caption"),children:t.jsx("h2",{children:p.date.toLocaleString(g)})},w)),f.map((p,w)=>t.jsx("div",{className:G("allDayRow",{weekend:je(p.date),today:Ee(p.date)}),children:p.allDay.map((j,E)=>t.jsx("div",{className:"allDayEvent",children:j.summary},E))},w)),f.map((p,w)=>t.jsx("div",{className:G("eventRow",{weekend:je(p.date),today:Ee(p.date)}),children:p.events.map((j,E)=>t.jsxs("div",{className:"event",children:[t.jsx("div",{children:j.summary}),t.jsxs("h3",{children:[j.icon&&t.jsx(X,{path:j.icon,size:"1rem",color:"#ffffff"}),We(j.start.dateTime)," - ",We(j.end.dateTime)]})]},E))},w))]}),n.length===0&&t.jsx("div",{className:"loading",children:i!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),t.jsx("div",{children:i instanceof Error?i.message:String(i)})]}):t.jsx(Ge,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),i!==!1&&n.length>0&&t.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:t.jsxs("div",{children:["Warnung: ",i instanceof Error?i.message:String(i)]})})]})},ue={"clear-day":{icon:wt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:xt,label:"Klar",color:"#eeeef5"},rain:{icon:gt,label:"Regen",color:"#80a5d6"},snow:{icon:mt,label:"Schnee",color:"#8c82ce"},sleet:{icon:pt,label:"Graupel",color:"#aba4db"},wind:{icon:ut,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:ht,label:"Neblig",color:"#d5dae2"},cloudy:{icon:ft,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:dt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:ct,label:"Teils bewölkt",color:"#d5dae2"}},Mo=()=>`./forecast/${Xe}/${qe},${Je}?&units=si&exclude=minutely`,Po=e=>{const[o,n]=A.useState([]),[i,a]=A.useState(!1),l=ve(6e4*10,"Weather"),h=Ze&&Xe&&qe&&Je;return A.useEffect(()=>{h&&W(Mo()).then(s=>{n(s.data),a(!1)}).catch(s=>{a(J(s))}).finally(()=>{})},[l,e,h]),[o,i]},$o=bt(jt),Me=C.div`

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
`,Pe=D.memo(({data:e,daily:o=!1})=>t.jsxs("div",{children:[t.jsxs("div",{children:[!o&&P.fromSeconds(e.time).toLocaleString(P.TIME_24_SIMPLE),o&&P.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),t.jsx("div",{children:t.jsx(Le,{icon:e.icon})}),t.jsx("div",{children:t.jsxs("strong",{children:[!o&&t.jsxs(t.Fragment,{children:[Math.round(e.temperature),"°"]}),o&&t.jsxs(t.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),t.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),t.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Vo=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(o=>({color:ue[o.icon]?.color||"#ffffff",text:ue[o.icon]?.label||"",annotation:`${Math.round(o.temperature)}°`,time:o.time})),Le=({icon:e})=>{const o=ue[e];return t.jsx(o.icon,{size:60,color:"#ffffff"})},Io=()=>{if(!Ze)return null;const[e,o]=Po(),[n,i]=A.useState(!1),a=re("w"),l=A.useRef(),h=D.useCallback(()=>i(w=>!w),[]),s=D.useCallback(()=>i(!0),[]),g=D.useMemo(()=>Vo(e),[e]),f=D.useMemo(()=>[3,6,9,12],[]),p=D.useMemo(()=>[1,2,3,4,5,6,7],[]);return A.useEffect(()=>{if(!l.current||!e||!e.hourly||g.length===0)return;const w={timezone:"Europe/Berlin"},j=document.createElement("div");return l.current.textContent="",l.current.appendChild(j),Ut(j,g,w),()=>{l.current&&(l.current.textContent="")}},[g]),A.useEffect(()=>{a&&h()},[a]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?o!==!1?t.jsx(Me,{children:t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":t.jsxs(Me,{children:[t.jsxs("div",{onClick:s,children:[t.jsxs("div",{className:"headline",children:[t.jsx(Le,{icon:e.currently.icon}),t.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),t.jsx("div",{className:"forecast",children:f.map((w,j)=>t.jsx(Pe,{data:e.hourly.data[w]},j))})]}),t.jsx(se,{visible:n,onClick:h,children:t.jsxs("div",{className:"full-weather",children:[o!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),t.jsxs("div",{className:"detail-header",children:[t.jsx("div",{children:t.jsxs("div",{className:"headline",children:[t.jsx(Le,{icon:e.daily.data[0].icon}),t.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",t.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),t.jsx("h3",{children:ue[e.daily.data[0].icon].label})]}),t.jsx("div",{className:"values",children:t.jsxs("div",{className:"table",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]}),t.jsxs("div",{children:[t.jsx("span",{children:"Windgeschwindigkeit:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]})]})}),t.jsx("h3",{children:"Die nächsten 24 Stunden"}),t.jsx("div",{ref:l}),t.jsx("h3",{children:"Die nächste Woche"}),t.jsx("div",{className:"forecast",children:p.map((w,j)=>t.jsx(Pe,{data:e.daily.data[w],daily:!0},j))}),t.jsxs("div",{className:"info",children:["Aktualisiert ",t.jsx(yt,{date:P.fromSeconds(e.currently.time).toJSDate(),formatter:$o})]})]})})]})},Fo=D.memo(Io);async function zo(e){if(!Ae)throw new Error("GEOFOX_SECRET is not configured");return Bt.stringify(Ht(JSON.stringify(e),Ae))}const Bo="AK Wandsbek",Ho="Hamburg",Uo="Master:62016",Go="STATION",Yo={x:10.091341,y:53.568702},Ko={name:Bo,city:Ho,id:Uo,type:Go,coordinate:Yo},de={departureList:"departureList",checkName:"checkName"},Xo=async(e,o)=>W({method:"post",url:`./gti/public/${e}`,data:o,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":Qe,"geofox-auth-signature":await zo(o),Authorization:void 0}}),$e=(e,o)=>e.realtimeOffset-o.realtimeOffset,qo=e=>{const o=e.departures.map(n=>({line:n.line.name,direction:n.line.direction,timeOffset:n.timeOffset,delay:n.delay?n.delay:"0",directionId:n.directionId,realtimeOffset:n.timeOffset+(n.delay?n.delay:0)/60}));return{from:o.filter(n=>n.directionId===1).slice(0,3).sort($e),to:o.filter(n=>n.directionId===6).slice(0,3).sort($e)}},Jo=e=>{const[o,n]=A.useState([]),[i,a]=A.useState(!1),l=ve(6e4),h=et&&Qe&&Ae;return A.useEffect(()=>{if(!h||!(e in de))return;let s={version:51};switch(e){case de.checkName:s={...s,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case de.departureList:const g=P.now();s={...s,station:Ko,time:{date:g.toFormat("dd.MM.yyyy"),time:g.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:s=void 0}Xo(e,s).then(g=>{n(qo(g.data)),a(!1)}).catch(g=>{a(J(g))})},[e,l,h]),[o,i]},Qo=C.div`
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
`,Ve=D.memo(({line:e,direction:o,realtimeOffset:n})=>t.jsxs("div",{className:"departure",children:[t.jsx("div",{children:t.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),t.jsx("div",{children:n===0?"Jetzt":t.jsxs(t.Fragment,{children:["in ",n," '"]})})]})),Zo=()=>{if(!et)return null;const[e,o]=Jo(de.departureList);return t.jsxs(Qo,{children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:t.jsxs("g",{transform:"translate(10368 -6294)",children:[t.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),t.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),o!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"→ Wandsbek"}),e.to?.map((n,i)=>t.jsx(Ve,{line:n.line,direction:n.direction,realtimeOffset:n.realtimeOffset},i)),t.jsx("h3",{children:"→ Stadtauswärts"}),e.from?.map((n,i)=>t.jsx(Ve,{line:n.line,direction:n.direction,realtimeOffset:n.realtimeOffset},i))]})]})},en=D.memo(Zo),tn=()=>{const[e,o]=A.useState("closed"),[n,i]=A.useState(!1),a=tt&&H,l=H?Y(`/api/states/${H}`):null;return A.useEffect(()=>{!a||!l||W(l).then(h=>{o(h.data.state),i(!1)}).catch(h=>{i(J(h))})},[a,l]),A.useEffect(()=>{let h=null,s=!0;async function g(){if(!a||!H)return;let f;if(typeof window<"u"&&window.location){const j=window.location.pathname.replace(/\/$/,"");f=`${window.location.origin}${j}`}else f="";const p=xe||K||"";if(!p)return;let w;try{w=me(f,p),s&&i(!1)}catch(j){s&&(_.error("Failed to create WebSocket auth:",j),i(j instanceof Error?j.message:String(j)));return}try{h=await ge({auth:w});const j=E=>{s&&o(E.variables.trigger.to_state.state)};await h.subscribeMessage(j,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:H}})}catch(j){s&&(_.error("Failed to setup WebSocket connection:",j),i(j instanceof Error?j.message:String(j)))}}return g(),()=>{s=!1,h&&h.close()}},[a]),[e,n]},on=e=>{if(!H)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(Y("/api/services/cover/toggle"),{entity_id:H}).catch(n=>{_.error("Failed to toggle garage door:",n)}).finally(()=>{clearTimeout(o),e(!1)})},nn=e=>{if(!H)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(Y("/api/services/cover/open_cover"),{entity_id:H}).catch(n=>{_.error("Failed to open garage door:",n)}).finally(()=>{clearTimeout(o),e(!1)})},rn=e=>{if(!H)return;e(!0);const o=setTimeout(()=>e(!1),3e3);W.post(Y("/api/services/cover/close_cover"),{entity_id:H}).catch(n=>{_.error("Failed to close garage door:",n)}).finally(()=>{clearTimeout(o),e(!1)})},sn=C.div`
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
`,st=C.div`
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
`,Ie=e=>({unknown:{label:"In Bewegung oder halb-offen",icon:$t},open:{label:"Offen",icon:Pt},closed:{label:"Geschlossen",icon:Mt},opening:{label:"Öffnet",icon:Wt},closing:{label:"Schließt",icon:_t}})[e]||{label:"Unavailable",icon:Vt},at=({garageDoor:e,animate:o=!1})=>t.jsxs(st,{className:G({animate:o}),children:[t.jsx(X,{path:Ie(e).icon,size:"2rem",color:"#ffffff"}),t.jsx("span",{children:Ie(e).label})]}),an=(e,o)=>Et.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return t.jsx(at,{garageDoor:n})}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),ln=()=>{if(!tt)return null;const[e,o]=tn(),[n,i]=A.useState(void 0),[a,l]=A.useState(!1),[h,s]=A.useState(!1);A.useEffect(()=>{if(e==="unknown"||e==="opening"||e==="closing"){if(!n){const j=new Promise(E=>{i({resolve:E})});an(j)}}else n&&(n.resolve(e),i(void 0))},[e]);const g=re("g");A.useEffect(()=>{g&&o===!1&&on(l)},[g,o]);const f=D.useCallback(w=>{if(o===!1)switch(s(!1),w){case"open":nn(l);break;case"close":rn(l);break}},[l,o]),p=D.useCallback(()=>{o===!1&&s(!0)},[o]);return t.jsxs(sn,{className:G({disabled:o!==!1}),children:[t.jsx("h2",{children:"Garage"}),t.jsx("div",{className:"status",onClick:p,children:o!==!1?t.jsxs(st,{children:[t.jsx(X,{path:Ye,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsx(at,{garageDoor:e,animate:a})}),t.jsx(se,{visible:h&&o===!1,onClick:()=>s(!1),children:t.jsxs("div",{className:"controls",children:[t.jsx("div",{onClick:()=>f("open"),children:"Öffnen"}),t.jsx("div",{onClick:()=>f("close"),children:"Schließen"})]})})]})},cn=D.memo(ln),dn=e=>e?Y(`/api/states/${e}`):null,B={done:{label:"Fertig",animate:!1,icon:Ft},off:{label:"Aus",animate:!1,icon:It},standby:{label:"Standby",animate:!1,icon:Ce},running:{label:"Läuft …",animate:!0,icon:Ce}},fn={off:0,standby:2,running:16,done:256},hn=()=>{const o=(Array.isArray(he)?he:[]).map((f,p)=>{const[w,j]=un(f.entity_id);return{state:w,error:j,name:f.name}}),[n,i]=A.useState(B.off),[a,l]=A.useState(!1),h=o.map(f=>f.state),s=o.map(f=>f.error);A.useEffect(()=>{const f=s.some(p=>p!==!1);l(f&&s.find(p=>p!==!1)||!1)},[s]),A.useEffect(()=>{const f=h.reduce((p,w)=>p+(fn[w]||0),0);f===0?i(B.off):f<16?i(B.standby):f<256?i(B.running):f%256===0?i(B.done):f%256%16===0?i(B.running):f%256%2===0?i(B.done):i(B.running)},[h]);const g=o.map(f=>({label:f.name,state:f.state}));return[n,g,a]},un=e=>{const[o,n]=A.useState("off"),[i,a]=A.useState(!1),l=ot&&e,h=dn(e);return A.useEffect(()=>{!l||!h||W(h).then(s=>{n(s.data.state),a(!1)}).catch(s=>{a(J(s))})},[e,l,h]),A.useEffect(()=>{let s=null,g=null,f=!0;async function p(){if(!l||!e)return;let w;if(typeof window<"u"&&window.location){const E=window.location.pathname.replace(/\/$/,"");w=`${window.location.origin}${E}`}else w="";const j=xe||K||"";if(j)try{const E=me(w,j);s=await ge({auth:E});const b=S=>{f&&n(S.variables.trigger.to_state.state)};g=await s.subscribeMessage(b,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}})}catch(E){f&&(_.error(`Failed to setup WebSocket connection for ${e}:`,E),a(E instanceof Error?E.message:String(E)))}}return p(),()=>{f=!1,g&&g(),s&&s.close()}},[e,l]),[o,i]},pn=C.div`
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
`,mn=()=>{if(!ot)return null;const[e,o,n]=hn(),[i,a]=A.useState(!1),l=D.useCallback(()=>{n===!1&&a(!0)},[n]),h=D.useCallback(()=>a(!1),[]);return t.jsxs(pn,{className:G({disabled:n!==!1}),children:[t.jsx("h2",{children:"Wäsche"}),t.jsx("div",{className:"status",onClick:l,children:n!==!1?t.jsxs(t.Fragment,{children:[t.jsx(X,{path:Ye,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:G({animate:e.animate}),children:t.jsx(X,{path:e.icon,size:"2rem",color:"#ffffff"})}),t.jsx("span",{children:e.label})]})}),t.jsx(se,{visible:i&&n===!1,onClick:h,children:t.jsx("div",{className:"states",children:o.map((s,g)=>t.jsxs("div",{children:[t.jsx("div",{className:G({animate:B[s.state].animate}),children:t.jsx(X,{path:B[s.state].icon,size:2})}),t.jsx("div",{children:B[s.state].label}),t.jsx("div",{className:"subtitle",children:s.label})]},g))})})]})},gn=D.memo(mn),xn=C.div`
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
`,wn=()=>t.jsxs(xn,{children:[t.jsx(Fo,{}),t.jsx(en,{}),t.jsxs("div",{className:"two-cols",children:[t.jsx(cn,{}),t.jsx(gn,{})]})]}),yn=D.memo(wn),Fe=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],bn=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],fe={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},jn={landscape:"L",portrait:"P",wide:"W"},En=C.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,Sn=C.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,An=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,ee=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,te=C.label`
  font-size: 0.9rem;
  color: #cccccc;
`,ze=C.select`
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
`,Be=C.input`
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
`,kn=C.button`
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
`,He=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Ln=C.button`
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
`,Tn=C.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,vn=C.div`
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
`,Cn=C.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,On=C.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Dn=C.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`,ae=C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,le=C.div`
  font-size: 0.85rem;
  color: #cccccc;
`,ce=C.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`,Rn=C.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Nn=C.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`;C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;C.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;const Se=C.button`
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
`,Ue=()=>{const[e,o]=D.useState(1920),[n,i]=D.useState(1080),[a,l]=D.useState("Full HD"),[h,s]=D.useState(""),[g,f]=D.useState(""),[p,w]=D.useState([{orientation:"landscape"}]),[j,E]=D.useState(null),b=D.useMemo(()=>rt(p,e,n),[p,e,n]),S=d=>{const x=Fe.find(k=>k.name===d);x&&x.width&&x.height?(o(x.width),i(x.height),l(d),s(""),f("")):d==="Custom"&&l("Custom")},c=()=>{const d=parseInt(h),x=parseInt(g);d>0&&x>0&&(o(d),i(x))},m=d=>{w(d.videos),E(d.name)},r=d=>{const x=[];for(let k=0;k<d;k++)x.push(p[k]||{orientation:"landscape"});w(x),E(null)},u=(d,x)=>{const k=[...p];k[d]={orientation:x},w(k),E(null)},y=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/n));return t.jsxs(En,{children:[t.jsx(Sn,{children:"Video Tiling Algorithm Demo"}),t.jsxs(An,{children:[t.jsxs(ee,{children:[t.jsx(te,{children:"Screen Size Preset"}),t.jsx(ze,{value:a,onChange:d=>S(d.target.value),children:Fe.map(d=>t.jsx("option",{value:d.name,children:d.name},d.name))})]}),a==="Custom"&&t.jsxs(t.Fragment,{children:[t.jsxs(ee,{children:[t.jsx(te,{children:"Custom Width"}),t.jsx(Be,{type:"number",value:h,onChange:d=>s(d.target.value),placeholder:"Width",min:"100"})]}),t.jsxs(ee,{children:[t.jsx(te,{children:"Custom Height"}),t.jsx(Be,{type:"number",value:g,onChange:d=>f(d.target.value),placeholder:"Height",min:"100"})]}),t.jsxs(ee,{children:[t.jsx(te,{children:" "}),t.jsx(kn,{onClick:c,children:"Apply Custom Size"})]})]}),t.jsxs(ee,{children:[t.jsx(te,{children:"Number of Videos"}),t.jsxs(ze,{value:p.length,onChange:d=>r(parseInt(d.target.value)),children:[t.jsx("option",{value:"1",children:"1 Video"}),t.jsx("option",{value:"2",children:"2 Videos"}),t.jsx("option",{value:"3",children:"3 Videos"}),t.jsx("option",{value:"4",children:"4 Videos"})]})]}),p.map((d,x)=>t.jsxs(ee,{children:[t.jsxs(te,{children:["Video ",x+1," Orientation"]}),t.jsxs(He,{children:[t.jsx(Se,{active:d.orientation==="landscape",orientation:"landscape",onClick:()=>u(x,"landscape"),children:"Landscape"}),t.jsx(Se,{active:d.orientation==="portrait",orientation:"portrait",onClick:()=>u(x,"portrait"),children:"Portrait"}),t.jsx(Se,{active:d.orientation==="wide",orientation:"wide",onClick:()=>u(x,"wide"),children:"Wide"})]})]},x))]}),t.jsxs(Rn,{children:[t.jsx(Nn,{children:"Test Scenarios"}),t.jsx(He,{children:bn.map(d=>t.jsx(Ln,{active:j===d.name,onClick:()=>m(d),children:d.name},d.name))})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:t.jsx(Tn,{style:{width:`${e*y}px`,height:`${n*y}px`},children:b.videos.map((d,x)=>t.jsxs(vn,{orientation:d.orientation,style:{left:`${d.x*y}px`,top:`${d.y*y}px`,width:`${d.width*y}px`,height:`${d.height*y}px`},children:[t.jsxs(Cn,{children:[jn[d.orientation]," ",x+1]}),t.jsxs(On,{children:[Math.round(d.width)," × ",Math.round(d.height)]})]},x))})}),t.jsxs(Dn,{children:[t.jsxs(ae,{children:[t.jsx(le,{children:"Canvas Size"}),t.jsxs(ce,{children:[e," × ",n]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Total Area Used"}),t.jsxs(ce,{children:[Math.round(b.totalArea).toLocaleString()," px²"]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Efficiency"}),t.jsxs(ce,{children:[b.efficiency.toFixed(2),"%"]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Display Scale"}),t.jsxs(ce,{children:[(y*100).toFixed(1),"%"]})]})]})]})},_n=()=>{function e(n,i){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(i))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[l,h]=i.split(":").map(Number),s=new Date;let g=new Date(s.getFullYear(),s.getMonth(),s.getDate());g.setHours(l,h,0,0),g<=s&&g.setDate(g.getDate()+1);const f=g.getTime()-s.getTime();return setTimeout(n,f)}const o=()=>{window.location.reload(!0)};A.useLayoutEffect(()=>{const n=[e(o,"00:00"),e(o,"03:00"),e(o,"06:00"),e(o,"09:00"),e(o,"12:00"),e(o,"15:00"),e(o,"18:00"),e(o,"21:00")];return()=>{n.forEach(i=>{i&&clearTimeout(i)})}},[])},Wn=C.div`
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
`;class pe extends A.Component{constructor(o){super(o),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(o){return{hasError:!0}}componentDidCatch(o,n){this.setState({error:o,errorInfo:n}),_.error("ErrorBoundary caught an error:",o,n)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?t.jsxs(Wn,{children:[t.jsx("h2",{children:"Something went wrong"}),t.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,t.jsxs("div",{children:[t.jsx("button",{onClick:this.handleReset,children:"Try Again"}),t.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Mn=St`
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
`,Pn=C.div`
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
`;function $n(){return _n(),t.jsxs(Pn,{children:[t.jsx(Mn,{}),t.jsxs("div",{className:"main",children:[t.jsx(pe,{children:t.jsx(Wo,{})}),t.jsx(pe,{children:t.jsx(yn,{})})]}),t.jsx(kt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Vn(){return t.jsx(pe,{children:t.jsxs(At,{children:[t.jsx(ye,{path:"/demo",element:t.jsx(Ue,{})}),t.jsx(ye,{path:"/tiling-demo",element:t.jsx(Ue,{})}),t.jsx(ye,{path:"*",element:t.jsx($n,{})})]})})}const In=Lt.createRoot(document.getElementById("root"));In.render(t.jsx(A.StrictMode,{children:t.jsx(pe,{children:t.jsx(Tt,{children:t.jsx(Vn,{})})})}));
