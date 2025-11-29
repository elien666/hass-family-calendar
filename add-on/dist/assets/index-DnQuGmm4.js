import{d as v,j as t,I as K,R as E,l as Ge,r as D,P as lt,W as ct,b as dt,e as ht,f as ft,h as ut,i as pt,k as mt,m as gt,n as xt,o as wt,T as yt,p as bt,s as jt,y as Et,q as At,t as St,u as ge,L as Lt,v as kt,B as Ct}from"./react-vendor-SoRfWBCf.js";import{D as W}from"./date-vendor-BDx6lZXm.js";import{n as G}from"./vendor-DXU8y-C2.js";import{m as Tt,a as vt,b as Ot,c as Dt,d as Rt,e as Nt,f as Ye,g as _t,h as Mt,i as Pt,j as Wt,k as $t,l as Vt,n as ve,o as It,p as Ft}from"./ui-vendor-DhGbN51c.js";import{a as P,q as zt,B as Bt,h as Ht}from"./utils-vendor-Cy1MG2Zy.js";import{c as Se,a as Le}from"./ha-vendor-CoU0AojH.js";import{t as Ut}from"./chart-vendor-ClWajKr-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const Gt=v.div`
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
`,se=({visible:e,children:o,onClick:n,onClose:i,fullsize:s=!1})=>{const l=i||n,d=a=>{a.stopPropagation(),a.preventDefault(),l()};return e?t.jsxs(Gt,{onClick:n,children:[t.jsx("div",{className:"close",onClick:d,children:t.jsx(K,{path:Tt,size:2})}),t.jsx("div",{className:G("content",{fullsize:s}),onClick:a=>a.stopPropagation(),children:o})]}):null},M={log:(...e)=>{},error:(...e)=>{console.error(...e)},warn:(...e)=>{},debug:(...e)=>{}},Ke=e=>{const o={message:e.message||"Unknown error occurred",status:null,responseData:null,url:null,isNetworkError:!1,isTimeoutError:!1};return e.response?(o.status=e.response.status,o.responseData=e.response.data,o.url=e.config?.url||e.request?.responseURL||"Unknown URL",o.message=e.response.data?.message||e.response.statusText||`HTTP ${e.response.status} error`):e.request?(o.isNetworkError=!0,o.url=e.config?.url||"Unknown URL",o.message="Network error: No response received from server"):(o.message=e.message||"Request setup error",o.url=e.config?.url||"Unknown URL"),(e.code==="ECONNABORTED"||e.message?.includes("timeout"))&&(o.isTimeoutError=!0,o.message="Request timeout: The request took too long to complete"),o},Yt=(e,o="")=>{const n=Ke(e),i=[];return o&&i.push(`[${o}]`),i.push("Axios API Error:"),i.push(n.message),n.url&&i.push(`URL: ${n.url}`),n.status&&i.push(`Status: ${n.status}`),n.responseData&&i.push("Response:",n.responseData),M.error(...i),n},J=e=>{const o=Ke(e);return o.isNetworkError?"":o.isTimeoutError?"Zeitüberschreitung: Die Anfrage dauerte zu lange":o.status===401?"Authentifizierungsfehler: Bitte erneut anmelden":o.status===403?"Berechtigungsfehler: Keine Berechtigung für diese Aktion":o.status===404?"Nicht gefunden: Die angeforderte Ressource existiert nicht":o.status>=500?"Serverfehler: Bitte später erneut versuchen":o.message||"Ein Fehler ist aufgetreten"},Kt={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},_=(e,o=void 0)=>{if(typeof window<"u"&&window.APP_CONFIG){if(window.APP_CONFIG[e]!==void 0){const i=window.APP_CONFIG[e];return i==="undefined"||i==="null"?o:i??o}return o}const n=Kt[`VITE_${e}`];return e==="HASS_ACCESS_TOKEN"&&n!==void 0?o:n!==void 0?n:o},Xt=(e,o=!1)=>{const n=_(e,o);return typeof n=="boolean"?n:typeof n=="string"?n==="true"||n==="1"||n==="yes":!!n};_("HASS_HOST","");const q=_("HASS_ACCESS_TOKEN",""),qt=q&&typeof q=="string"&&q.trim()!==""&&q!=="undefined"&&q!=="null";qt?P.defaults.headers.common.Authorization=`Bearer ${q}`:delete P.defaults.headers.common.Authorization;P.interceptors.response.use(e=>e,e=>{const o=e.config?.url?`API Call: ${e.config.method?.toUpperCase()} ${e.config.url}`:"Axios Request";return Yt(e,o),Promise.reject(e)});const Xe=_("WEATHER_API_KEY"),qe=_("WEATHER_LATITUDE"),Je=_("WEATHER_LONGITUDE"),je=_("GEOFOX_SECRET"),Qe=_("GEOFOX_USER"),H=_("ENTITY_GARAGE_DOOR"),ne=_("ENTITY_DOORBELL"),Oe=_("ENTITY_DOORBELL_BUTTON"),Ee=_("ENTITY_EVERYDAY_CALENDAR"),ke=_("SUPERVISOR_TOKEN"),Jt=(()=>{const e=_("CALENDARS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),fe=(()=>{const e=_("LAUNDRY_MACHINES","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),Z=(()=>{const e=_("DOORBELL_CAMERAS","[]");if(typeof e=="string")try{return JSON.parse(e)}catch{return[]}return Array.isArray(e)?e:[]})(),oe=(e,o)=>_(e,void 0)!==void 0?Xt(e,!1):!1,Ze=oe("ENABLE_WEATHER"),et=oe("ENABLE_HVV"),tt=oe("ENABLE_GARAGE"),ot=oe("ENABLE_LAUNDRY",Array.isArray(fe)&&fe.length>0),nt=oe("ENABLE_DOORBELL"),it=oe("ENABLE_EVERYDAY_CALENDAR"),Y=e=>{const o=e.startsWith("/")?e:`/${e}`;{if(typeof window<"u"&&window.location){const n=window.location.pathname.replace(/\/$/,"");return`${window.location.origin}${n}${o}`}return o}},Qt=(e,o=null)=>{if(!e)return null;let n=`/api/camera_proxy_stream/${e}`;return o&&(n=`${n}?token=${encodeURIComponent(o)}`),Y(n)},ie=Ee?Y(`/api/states/${Ee}`):null,Zt=()=>{const[e,o]=E.useState(null),[n,i]=E.useState(!1),s=it&&Ee;return E.useEffect(()=>{!s||!ie||P(ie).then(l=>{l.data.attributes.store!==void 0?o(l.data.attributes.store):o([]),i(!1)}).catch(l=>{i(J(l)),o([])})},[s,ie]),[e,n]},eo=e=>{ie&&P.post(ie,{state:new Date,attributes:{store:e}}).catch(o=>{M.error("Failed to store everyday calendar data:",o)})},De=v.div` 

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
`,to=({on:e,month:o,day:n})=>{const[i,s]=e,l=i.indexOf(`${o}-${n}`),d=l>-1,a=()=>{s(d?i.toSpliced(l,1):[...i,`${o}-${n}`])};return t.jsx("div",{className:G("dot",{on:d}),onClick:()=>a()})},oo=()=>{if(!it)return null;const e=new Date().getFullYear(),o=[];for(let a=1;a<13;a++){const w=new Date(e,a,0).getDate();for(let f=1;f<=w;f++)o.push({month:a,day:f})}const n=Array.from({length:31},(a,w)=>w+1),i=Array.from({length:12},(a,w)=>w+1),s=E.useState(void 0),[l,d]=Zt();return E.useEffect(()=>{l!==null&&s[1](l)},[l]),E.useEffect(()=>{s[0]!==void 0&&eo(s[0])},[s[0]]),s[0]!==void 0?t.jsxs(De,{children:[t.jsx("h2",{children:"Jeden Tag ein bißchen"}),d!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:d instanceof Error?d.message:String(d)})]}),t.jsxs("div",{className:"calendar",children:[n.map((a,w)=>t.jsx("div",{style:{gridArea:`${a+1} / 1 / ${a+1} / 1`},children:a},w)),i.map((a,w)=>t.jsx("div",{style:{gridArea:`1 / ${a+1} / 1 / ${a+1}`},children:a},w)),o.map((a,w)=>t.jsx("div",{style:{gridArea:`${a.day+1} / ${a.month+1} / ${a.day+1} / ${a.month+1}`},children:t.jsx(to,{on:s,month:a.month,day:a.day})},w))]})]}):t.jsx(De,{className:"loading",children:d!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:d instanceof Error?d.message:String(d)})]}):t.jsx(Ge,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})},no=v.div`
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
  }`,io=()=>{const[e,o]=E.useState(W.now()),[n,i]=E.useState(!1),s=D.useCallback(()=>i(!0),[]),l=D.useCallback(()=>i(!1),[]);return E.useEffect(()=>{const d=setInterval(()=>o(W.now()),1e3);return()=>clearInterval(d)},[]),t.jsxs(t.Fragment,{children:[t.jsxs(no,{onClick:s,children:[e.toFormat("HH"),t.jsx("span",{children:":"}),e.toFormat("mm")]}),t.jsx(se,{visible:n,onClick:l,fullsize:!0,children:t.jsx(oo,{})})]})},ro=D.memo(io),xe=ne?Y(`/api/states/${ne}`):null,so=()=>{const[e,o]=E.useState("off"),[n,i]=E.useState(!1),s=nt&&ne;return E.useEffect(()=>{!s||!xe||P(xe).then(l=>{o(l.data.state),i(!1)}).catch(l=>{i(J(l))})},[s,xe]),E.useEffect(()=>{let l=null,d=!0;async function a(){if(!s||!ne)return;let w;if(typeof window<"u"&&window.location){const y=window.location.pathname.replace(/\/$/,"");w=`${window.location.origin}${y}`}else w="";const f=ke||q||"";if(!f)return;let m;try{m=Se(w,f),d&&i(!1)}catch(y){d&&(M.error("Failed to create WebSocket auth:",y),i(y instanceof Error?y.message:String(y)));return}try{l=await Le({auth:m});const y=A=>{if(d){const L=A.variables.trigger.to_state.state;o(L)}};await l.subscribeMessage(y,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:ne}})}catch(y){d&&(M.error("Failed to setup WebSocket connection:",y),M.error("WebSocket error details:",{message:y instanceof Error?y.message:String(y),code:y.code,name:y.name,wsUrl:m?.wsUrl,host:w,tokenLength:f?f.length:0}),y.code===2&&M.error("Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted"),i(y instanceof Error?y.message:String(y)))}}return a(),()=>{d=!1,l&&l.close()}},[s]),[e,n]},ao=()=>{Oe&&P.post(Y("/api/services/button/press"),{entity_id:Oe}).catch(e=>{M.error("Failed to unlatch front door:",e)})},O={portrait:360/480,landscape:1920/1072,wide:770/216};function lo(e){const o={landscape:0,portrait:0,wide:0};return e.forEach(n=>{n.orientation&&o.hasOwnProperty(n.orientation)&&o[n.orientation]++}),o}function rt(e,o,n){if(!e||e.length===0)return{videos:[],totalArea:0,efficiency:0};const i=e.length,s=lo(e);return i===1?co(e[0],o,n):i===2?ho(s,e,o,n):i===3?fo(s,e,o,n):i===4?uo(s,e,o,n):{videos:[],totalArea:0,efficiency:0}}function co(e,o,n){const i=O[e.orientation];let s,l;const d=o/n;return i>d?(s=o,l=o/i):(l=n,s=n*i),{videos:[{x:(o-s)/2,y:(n-l)/2,width:s,height:l,orientation:e.orientation}],totalArea:s*l,efficiency:s*l/(o*n)*100}}function ho(e,o,n,i){if(e.portrait>0)return Ce(e,o,n,i);const s=[];e.landscape>0&&s.push("landscape"),e.wide>0&&s.push("wide");const l=s[0]||o[0].orientation,d=s[1]||o[1].orientation,a=O[l],w=O[d];if(e.landscape===1&&e.wide===1){const b=O.landscape,j=O.wide,u=n,p=u/b,r=u/j,h=p+r;let x,c,g;if(h<=i)x=p,c=r,g=u;else{const $=i/h;x=p*$,c=r*$,g=c*j}const S=(n-g)/2,C=U(o,[{x:S,y:0,width:g,height:c,orientation:"wide"},{x:S,y:c,width:g,height:x,orientation:"landscape"}]),T=g*x+g*c,R=T/(n*i)*100;return{videos:C,totalArea:T,efficiency:R}}if(e.wide===2){const b=O.wide,j=n,u=j/b,p=u*2;let r;p<=i?r=u:r=i/2;const x=U(o,[{x:0,y:0,width:j,height:r,orientation:"wide"},{x:0,y:r,width:j,height:r,orientation:"wide"}]),c=j*r*2,g=c/(n*i)*100;return{videos:x,totalArea:c,efficiency:g}}const f=[()=>{const b=n,j=b/2,u=b/2,p=j/a,r=u/w;return Math.max(p,r)<=i?{positions:[{x:0,y:(i-p)/2,width:j,height:p,orientation:l},{x:j,y:(i-r)/2,width:u,height:r,orientation:d}],totalArea:j*p+u*r}:null},()=>{const b=i,j=b/2,u=b/2,p=j*a,r=u*w;return Math.max(p,r)<=n?{positions:[{x:(n-p)/2,y:0,width:p,height:j,orientation:l},{x:(n-r)/2,y:j,width:r,height:u,orientation:d}],totalArea:p*j+r*u}:null}];let m=null,y=0;for(const b of f){const j=b();j&&j.totalArea>y&&(y=j.totalArea,m=j)}if(!m){const b=n/2,j=n/2,u=Math.min(b/a,i),p=Math.min(j/w,i);m={positions:[{x:0,y:(i-u)/2,width:b,height:u,orientation:l},{x:b,y:(i-p)/2,width:j,height:p,orientation:d}],totalArea:b*u+j*p}}const A=U(o,m.positions),L=m.totalArea/(n*i)*100;return{videos:A,totalArea:m.totalArea,efficiency:L}}function Ce(e,o,n,i){const s=e.portrait,l=o.length-s;if((s===3||s===4)&&l===0){const L=O.portrait,b=n/s,j=b/L,u=j<i?(i-j)/2:0,p=Math.min(j,i),r=[];let h=0;for(let g=0;g<s;g++){const S=Math.min(b,p*L);r.push({x:g*b+(b-S)/2,y:u,width:S,height:p,orientation:"portrait"}),h+=S*p}const x=U(o,r),c=h/(n*i)*100;return{videos:x,totalArea:h,efficiency:c}}o.filter(L=>L.orientation==="portrait");const d=o.filter(L=>L.orientation!=="portrait"),a=s>0?Math.min(n*.4,n*.5):0,w=n-a,f=[];let m=0;if(s===2&&l===0){const L=O.portrait,b=n/2,j=b/L,u=i;let p,r;j<=u?(r=j,p=b):(r=u,p=u*L);const h=(i-r)/2;f.push({x:(b-p)/2,y:h,width:p,height:r,orientation:"portrait"}),f.push({x:b+(b-p)/2,y:h,width:p,height:r,orientation:"portrait"}),m=p*r*2}else if(s===1&&l===1){const L=O.portrait,b=d[0],j=O[b.orientation],u=L+j,p=n*(L/u),r=n*(j/u),h=p/L,x=r/j,c=Math.min(i,Math.min(h,x)),g=(i-c)/2;f.push({x:0,y:g,width:p,height:c,orientation:"portrait"}),f.push({x:p,y:g,width:r,height:c,orientation:b.orientation}),m=p*c+r*c}else if(s===1&&l===2&&e.landscape===1&&e.wide===1){const L=O.portrait,b=O.wide,j=O.landscape,u=i,p=i*L,r=i/(1/b+1/j),h=r/b,x=r/j,c=p+r;if(Math.abs(c-n)<.1)f.push({x:0,y:0,width:p,height:u,orientation:"portrait"}),m+=p*u,d.find(C=>C.orientation==="wide")&&(f.push({x:0+p,y:0,width:r,height:h,orientation:"wide"}),m+=r*h),d.find(C=>C.orientation==="landscape")&&(f.push({x:0+p,y:h,width:r,height:x,orientation:"landscape"}),m+=r*x);else{const g=n/c,S=p*g,k=S/L,C=r*g,T=i/k;let R=S*T,$=i,N=C*T,I=N/b,V=N/j,F=R+N;if(F>n){const X=n/F;R=R*X,$=R/L,N=N*X,I=N/b,V=N/j,F=R+N,F>n&&(N=n-R,I=N/b,V=N/j)}const Q=R+N;if(Q>n){const X=n/Q;R=R*X,$=R/L,N=N*X,I=N/b,V=N/j}const z=0;f.push({x:z,y:0,width:R,height:$,orientation:"portrait"}),m+=R*$,d.find(X=>X.orientation==="wide")&&(f.push({x:z+R,y:0,width:N,height:I,orientation:"wide"}),m+=N*I),d.find(X=>X.orientation==="landscape")&&(f.push({x:z+R,y:I,width:N,height:V,orientation:"landscape"}),m+=N*V)}}else if(s===1&&l===3){const L=O.portrait,b=i,j=b*L,u=j,p=n-u;f.push({x:0,y:0,width:j,height:b,orientation:"portrait"}),m+=j*b;const r=i/3;for(let h=0;h<d.length;h++){const x=d[h],c=O[x.orientation],g=r,S=p;let k,C;S/c<=g?(k=S,C=k/c):(C=g,k=C*c);const T=h*r+(r-C)/2;f.push({x:u+(p-k)/2,y:T,width:k,height:C,orientation:x.orientation}),m+=k*C}}else if(s===2&&l===1){const L=O.portrait,b=d[0],j=O[b.orientation],u=i/2,p=u*L,r=n-p,h=i*j;let x,c;h<=r?(c=i,x=c*j):(x=r,c=x/j);const g=p,S=u,k=(i-c)/2,C=(i/2-S)/2,T=i/2+(i/2-S)/2;f.push({x:0,y:k,width:x,height:c,orientation:b.orientation}),m+=x*c,f.push({x:r,y:C,width:g,height:S,orientation:"portrait"}),m+=g*S,f.push({x:r,y:T,width:g,height:S,orientation:"portrait"}),m+=g*S}else if(s===1&&l===2){const L=O.portrait,b=i,j=b*L,u=j,p=n-u;f.push({x:0,y:0,width:j,height:b,orientation:"portrait"}),m+=j*b;const r=i/2;for(let h=0;h<d.length;h++){const x=d[h],c=O[x.orientation],g=r,S=p;let k,C;S/c<=g?(k=S,C=k/c):(C=g,k=C*c);const T=h*r+(r-C)/2;f.push({x:u+(p-k)/2,y:T,width:k,height:C,orientation:x.orientation}),m+=k*C}}else{const L=s;if(L>0){const b=i/L,j=O.portrait;for(let u=0;u<L;u++){const p=Math.min(b,a/j),r=p*j,h=u*b+(b-p)/2;f.push({x:(a-r)/2,y:h,width:r,height:p,orientation:"portrait"}),m+=r*p}}if(d.length>0){const b=i/d.length;for(let j=0;j<d.length;j++){const u=d[j],p=O[u.orientation],r=b,h=w;let x,c;h/p<=r?(x=h,c=x/p):(c=r,x=c*p);const g=j*b+(b-c)/2;f.push({x:a+(w-x)/2,y:g,width:x,height:c,orientation:u.orientation}),m+=x*c}}}const y=U(o,f),A=m/(n*i)*100;return{videos:y,totalArea:m,efficiency:A}}function U(e,o){const n=new Array(o.length),i=new Set,s=new Set;for(let a=0;a<o.length;a++){const w=o[a];for(let f=0;f<e.length;f++)if(!i.has(f)&&e[f].orientation===w.orientation){n[a]={...w,orientation:e[f].orientation},i.add(f),s.add(a);break}}const l=[];for(let a=0;a<o.length;a++)s.has(a)||l.push(a);let d=0;for(let a=0;a<e.length;a++)if(!i.has(a)&&d<l.length){const w=l[d];n[w]={...o[w],orientation:e[a].orientation},d++}return n}function fo(e,o,n,i){if(e.portrait>0)return Ce(e,o,n,i);if(e.landscape===2&&e.wide===1){const u=O.landscape,p=O.wide,r=n,h=r/p,x=i-h,c=n/2,g=c/u;let S,k,C,T;if(h<=i&&g<=x)S=r,k=h,C=c,T=g;else{const Q=i/(h+g),z=Math.min(1,Q);k=h*z,S=k*p,T=g*z,C=T*u}const R=(n-S)/2,$=k+(x-T)/2,I=U(o,[{x:R,y:0,width:S,height:k,orientation:"wide"},{x:0,y:$,width:C,height:T,orientation:"landscape"},{x:C,y:$,width:C,height:T,orientation:"landscape"}]),V=S*k+C*T*2,F=V/(n*i)*100;return{videos:I,totalArea:V,efficiency:F}}if(e.landscape===1&&e.wide===2){const u=O.landscape,p=O.wide,r=n/2,h=r/p,c=i-h,g=c*u;let S,k,C,T;if(h<=i&&g<=n&&h+c<=i)S=r,k=h,C=g,T=c;else{const z=h+c,me=i/z;S=r,k=h*me,T=c*me,C=T*u}const R=0,$=n/2,N=(n-C)/2,V=U(o,[{x:R,y:0,width:S,height:k,orientation:"wide"},{x:$,y:0,width:S,height:k,orientation:"wide"},{x:N,y:k,width:C,height:T,orientation:"landscape"}]),F=S*k*2+C*T,Q=F/(n*i)*100;return{videos:V,totalArea:F,efficiency:Q}}if(e.wide===3){const u=O.wide,p=n/2,r=p/u,x=i-r,c=x*u;let g,S,k,C;if(r<=i&&c<=n&&r+x<=i)g=p,S=r,k=c,C=x;else{const Q=r+x,z=i/Q;g=p,S=r*z,C=x*z,k=C*u,k>n&&(k=n,C=k/u)}const T=0,R=n/2,$=(n-k)/2,I=U(o,[{x:T,y:0,width:g,height:S,orientation:"wide"},{x:R,y:0,width:g,height:S,orientation:"wide"},{x:$,y:S,width:k,height:C,orientation:"wide"}]),V=g*S*2+k*C,F=V/(n*i)*100;return{videos:I,totalArea:V,efficiency:F}}if(e.landscape===3){const u=O.landscape,p=n/(u*1.5),r=Math.min(i,p),h=r/2,x=r,c=h*u,g=x*u,S=(i-r)/2,k=[{x:0,y:S,width:c,height:h,orientation:"landscape"},{x:0,y:S+h,width:c,height:h,orientation:"landscape"},{x:c,y:S,width:g,height:x,orientation:"landscape"}],C=U(o,k),T=c*r+g*r,R=T/(n*i)*100;return{videos:C,totalArea:T,efficiency:R}}const s=[];if(e.landscape>0)for(let u=0;u<e.landscape;u++)s.push("landscape");if(e.wide>0)for(let u=0;u<e.wide;u++)s.push("wide");const l=s[0]||o[0].orientation,d=s[1]||o[1].orientation,a=s[2]||o[2].orientation,w=O[l],f=O[d],m=O[a],y=[()=>{const u=n*.6,p=n*.4,r=u/w,h=p/f,x=p/m,c=h+x;return r<=i&&c<=i?{positions:[{x:0,y:(i-r)/2,width:u,height:r,orientation:l},{x:u,y:0,width:p,height:h,orientation:d},{x:u,y:h,width:p,height:x,orientation:a}],totalArea:u*r+p*h+p*x}:null},()=>{const u=i*.5,p=i*.5,r=u*w,h=u*f,x=p*m;return r+h<=n&&x<=n?{positions:[{x:0,y:0,width:r,height:u,orientation:l},{x:r,y:0,width:h,height:u,orientation:d},{x:(n-x)/2,y:u,width:x,height:p,orientation:a}],totalArea:r*u+h*u+x*p}:null},()=>{const u=n/3,p=u/w,r=u/f,h=u/m;return Math.max(p,r,h)<=i?{positions:[{x:0,y:(i-p)/2,width:u,height:p,orientation:l},{x:u,y:(i-r)/2,width:u,height:r,orientation:d},{x:u*2,y:(i-h)/2,width:u,height:h,orientation:a}],totalArea:u*p+u*r+u*h}:null}];let A=null,L=0;for(const u of y){const p=u();p&&p.totalArea>L&&(L=p.totalArea,A=p)}if(!A){const u=n/3,p=Math.min(u/w,i),r=Math.min(u/f,i),h=Math.min(u/m,i);A={positions:[{x:0,y:(i-p)/2,width:u,height:p,orientation:l},{x:u,y:(i-r)/2,width:u,height:r,orientation:d},{x:u*2,y:(i-h)/2,width:u,height:h,orientation:a}],totalArea:u*p+u*r+u*h}}const b=U(o,A.positions),j=A.totalArea/(n*i)*100;return{videos:b,totalArea:A.totalArea,efficiency:j}}function uo(e,o,n,i){if(e.portrait>0)return Ce(e,o,n,i);const s=[];if(e.landscape>0)for(let r=0;r<e.landscape;r++)s.push("landscape");if(e.wide>0)for(let r=0;r<e.wide;r++)s.push("wide");const l=s[0]||o[0].orientation,d=s[1]||o[1].orientation,a=s[2]||o[2].orientation,w=s[3]||o[3].orientation,f=O[l],m=O[d],y=O[a],A=O[w],L=[()=>{const r=n/2,h=i/2,x=Math.min(r,h*f),c=x/f,g=Math.min(r,h*m),S=g/m,k=Math.min(r,h*y),C=k/y,T=Math.min(r,h*A),R=T/A;return{positions:[{x:(r-x)/2,y:(h-c)/2,width:x,height:c,orientation:l},{x:r+(r-g)/2,y:(h-S)/2,width:g,height:S,orientation:d},{x:(r-k)/2,y:h+(h-C)/2,width:k,height:C,orientation:a},{x:r+(r-T)/2,y:h+(h-R)/2,width:T,height:R,orientation:w}],totalArea:x*c+g*S+k*C+T*R}},()=>{const r=n*.6,h=n*.4,x=r/f,c=i/3,g=Math.min(h,c*m),S=g/m,k=Math.min(h,c*y),C=k/y,T=Math.min(h,c*A),R=T/A;return x<=i?{positions:[{x:0,y:(i-x)/2,width:r,height:x,orientation:l},{x:r,y:0,width:g,height:S,orientation:d},{x:r,y:c,width:k,height:C,orientation:a},{x:r,y:c*2,width:T,height:R,orientation:w}],totalArea:r*x+g*S+k*C+T*R}:null},()=>{const r=n/4,h=r/f,x=r/m,c=r/y,g=r/A;return Math.max(h,x,c,g)<=i?{positions:[{x:0,y:(i-h)/2,width:r,height:h,orientation:l},{x:r,y:(i-x)/2,width:r,height:x,orientation:d},{x:r*2,y:(i-c)/2,width:r,height:c,orientation:a},{x:r*3,y:(i-g)/2,width:r,height:g,orientation:w}],totalArea:r*h+r*x+r*c+r*g}:null}];let b=null,j=0;for(const r of L){const h=r();h&&h.totalArea>j&&(j=h.totalArea,b=h)}if(!b){const r=n/2,h=i/2,x=Math.min(h,r/f),c=Math.min(h,r/m),g=Math.min(h,r/y),S=Math.min(h,r/A);b={positions:[{x:(r-r)/2,y:(h-x)/2,width:r,height:x,orientation:l},{x:r+(r-r)/2,y:(h-c)/2,width:r,height:c,orientation:d},{x:(r-r)/2,y:h+(h-g)/2,width:r,height:g,orientation:a},{x:r+(r-r)/2,y:h+(h-S)/2,width:r,height:S,orientation:w}],totalArea:r*x+r*c+r*g+r*S}}const u=U(o,b.positions),p=b.totalArea/(n*i)*100;return{videos:u,totalArea:b.totalArea,efficiency:p}}const po=e=>{const[o,n]=E.useState({}),[i,s]=E.useState(!0),[l,d]=E.useState(null);return E.useEffect(()=>{if(!e||e.length===0){s(!1);return}let a=!0;async function w(){s(!0),d(null);try{const f=e.map(async y=>{try{const A=Y(`/api/states/${y}`),b=(await P(A)).data?.attributes?.access_token||null;return{entityId:y,accessToken:b}}catch(A){return M.error(`Failed to fetch access token for ${y}:`,A),{entityId:y,accessToken:null}}}),m=await Promise.all(f);if(a){const y={};m.forEach(({entityId:A,accessToken:L})=>{L&&(y[A]=L)}),n(y),s(!1)}}catch(f){a&&(M.error("Failed to fetch camera access tokens:",f),d(J(f)),s(!1))}}return w(),()=>{a=!1}},[e?.length,e?.join(",")]),[o,i,l]},Re=45e3,mo=v.div`

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
`,go=()=>{if(!nt)return null;const[e,o]=E.useState(!1),[n]=so(),[i,s]=E.useState(void 0),[l,d]=E.useState(100),[a,w]=E.useState("0"),f=E.useMemo(()=>Z.map(b=>b.entity_id).filter(Boolean),[Z]),[m]=po(f);E.useEffect(()=>{if(n==="off"&&e){const b=window.setTimeout(()=>{o(!1),s(void 0)},Re);return s(b),w(Re+"ms"),d(0),()=>{b&&window.clearTimeout(b)}}else n==="on"&&(w(0),d(100),o(!0))},[n,e]),E.useEffect(()=>{n==="on"&&i!==void 0&&(window.clearTimeout(i),w(0),d(100),s(void 0))},[i,n]);const[y,A]=E.useState(!1),L=()=>{ao(),A(!0)};return E.useEffect(()=>{if(y){const b=setTimeout(()=>A(!1),1e3);return()=>clearTimeout(b)}},[y]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>o(b=>!b),children:"CCTV"}),t.jsx(se,{visible:e,onClick:L,onClose:()=>o(!1),fullsize:!0,children:t.jsxs(mo,{onClick:L,children:[t.jsx(lt,{completed:l,height:10,bgColor:i===void 0?"none":"#c0bfbf",isLabelVisible:!1,baseBgColor:"",transitionDuration:a,transitionTimingFunction:"linear"}),t.jsx("div",{className:"grid",style:{display:e?"block":"none"},children:(()=>{if(Z.length===0)return null;const b=Z.map(x=>({orientation:x.orientation||"landscape"})),j=window.innerWidth,u=window.innerHeight-10,p=rt(b,j,u),r={portrait:Z.filter(x=>(x.orientation||"landscape")==="portrait"),landscape:Z.filter(x=>(x.orientation||"landscape")==="landscape"),wide:Z.filter(x=>x.orientation==="wide")},h={portrait:0,landscape:0,wide:0};return p.videos.map((x,c)=>{const g=x.orientation,S=h[g],k=r[g][S];if(!k)return null;h[g]++;const C=m[k.entity_id]||null,T=Qt(k.entity_id,C);return T?t.jsxs("div",{className:"video-container",style:{left:`${x.x}px`,top:`${x.y}px`,width:`${x.width}px`,height:`${x.height}px`},children:[e&&t.jsx("img",{src:T,className:g,alt:"Camera stream"}),t.jsx("div",{className:"video-overlay",onClick:()=>L()})]},`${g}-${S}-${c}`):null})})()}),y&&t.jsx("div",{className:"open-door",children:"Tür öffnet sich"})]})})]})},xo=v.div`
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

`,wo=({nextWeek:e,previousWeek:o,startWeekWithToday:n})=>t.jsxs(xo,{children:[t.jsxs("div",{className:"buttons",children:[t.jsx(K,{path:vt,size:"32px",color:"#ffffff",onClick:o}),t.jsx(K,{path:Ot,size:"32px",color:"#ffffff",onClick:e}),t.jsx("button",{onClick:n,children:"Today"}),t.jsx(go,{})]}),t.jsx(ro,{}),t.jsx(K,{path:Dt,size:"32px",color:"#ffffff",className:G("indicator")})]}),yo=D.memo(wo),bo=6e4,Te=(e=bo,o=void 0)=>{const[n,i]=E.useState(!0);return E.useEffect(()=>{const s=setInterval(()=>{i(l=>!l)},e);return()=>{clearInterval(s)}},[e,o]),n},jo=e=>Y(`/api/calendars/${e}`),Eo=(e,o)=>`${jo(e)}?${zt.stringify(o)}`,Ao={mdiDelete:Nt,mdiCake:Rt},So=e=>{if(!e||typeof e!="string")return;const o=e.startsWith("mdi")?e:`mdi${e.charAt(0).toUpperCase()+e.slice(1)}`;return Ao[o]||void 0},Lo=Jt.map(e=>({name:e.name,icon:So(e.icon)})),ko=(e,o,n,i)=>P(Eo(e.name,{start:o.toISO(),end:n.toISO()}),{timeout:1e4}).then(s=>{!s.data||!Array.isArray(s.data)||s.data.forEach(l=>{const d="dateTime"in l.start?W.fromISO(l.start.dateTime):W.fromSQL(l.start.date);let a;"dateTime"in l.end?a=Math.floor(W.fromISO(l.end.dateTime).diff(o,"days").as("days")):a=Math.floor(W.fromSQL(l.end.date).diff(o,"days").as("days"))-1;const w=Math.floor(d.diff(o,"days").as("days"));a>=i.length&&(a=i.length-1);const f="dateTime"in l.start?"events":"allDay";if(w>=0&&w<i.length)for(let m=w;m<=a;m++)i[m][f]=[...i[m][f],{...l,icon:e.icon}]})}).catch(s=>{throw s}),Ne=new Map,Co=300*1e3,To=e=>e.toISODate(),vo=(e,o,n,i,s,l)=>{const d=[0,1,2,3,4,5].map(y=>e.plus({days:y}).startOf("day"));d[6]=e.plus({days:6}).endOf("day");const a=To(e),w=Ne.get(a);if(w&&Date.now()-w.timestamp<Co){n(w.data);return}const f=d.map(y=>({date:y,allDay:[],events:[]})),m=new AbortController;s.current&&s.current.abort(),s.current=m;try{i(!0);const y=Lo.map(A=>ko(A,d[0],d[6],f));Promise.all(y).then(()=>{m.signal.aborted||(Ne.set(a,{data:f,timestamp:Date.now()}),n(f),l(!1))}).catch(A=>{m.signal.aborted||l(J(A))}).finally(()=>{m.signal.aborted||i(!1)})}catch(y){m.signal.aborted||(l(J(y)),i(!1))}},_e=[],Oo=e=>{const[o,n]=E.useState(_e),[i,s]=E.useState(!1),[l,d]=E.useState(!1),a=Te(6e4,"Calendar"),[w,f]=E.useState(null),m=D.useRef(null);return E.useEffect(()=>(e!==void 0&&((w===null||!w.equals(e))&&(n(_e),f(e)),vo(e,o,n,s,m,d)),()=>{m.current&&m.current.abort()}),[e,a]),[o,l]};function re(e){const[o,n]=E.useState(!1);function i({key:l}){l===e&&n(!0)}const s=({key:l})=>{l===e&&n(!1)};return E.useEffect(()=>(window.addEventListener("keydown",i),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",i),window.removeEventListener("keyup",s)}),[e]),o}const Do=()=>{let e=new Date,n=(e.getDay()+6)%7,i=new Date(e.setDate(e.getDate()-n));return W.fromJSDate(i)},Ro=e=>{const o=()=>e(a=>a.plus({days:7})),n=re("ArrowRight");E.useEffect(()=>{n&&o()},[n]);const i=()=>e(a=>a.minus({days:7})),s=re("ArrowLeft");E.useEffect(()=>{s&&i()},[s]);const l=()=>e(Do()),d=re("t");return E.useEffect(()=>{d&&l()},[d]),{nextWeek:o,previousWeek:i,startWeekWithToday:l}},No=e=>{const[o,n]=D.useState(0),[i,s]=D.useState(0),l=50;return{onTouchStart:f=>{s(0),n(f.targetTouches[0].clientX)},onTouchMove:f=>s(f.targetTouches[0].clientX),onTouchEnd:()=>{if(!o||!i)return;const f=o-i,m=f>l,y=f<-l;m&&e.onSwipedLeft(),y&&e.onSwipedRight()}}},Me=e=>W.fromISO(e).toLocaleString(W.TIME_24_SIMPLE),we=e=>e.toFormat("c")>=6,ye=e=>e.hasSame(W.now(),"day"),_o=v.div`

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
`,Mo=()=>{const[e,o]=E.useState(void 0),[n,i]=Oo(e),{nextWeek:s,previousWeek:l,startWeekWithToday:d}=Ro(o);E.useEffect(()=>{d()},[]);const a=No({onSwipedLeft:()=>s(),onSwipedRight:()=>l()}),w=D.useMemo(()=>({weekday:"short",month:"numeric",day:"numeric"}),[]),f=D.useMemo(()=>n.slice(0,7),[n]);return t.jsxs(_o,{...a,children:[t.jsx(yo,{nextWeek:s,previousWeek:l,startWeekWithToday:d}),t.jsxs("div",{className:"schedule",children:[f.map((m,y)=>t.jsx("div",{className:G({weekend:we(m.date),today:ye(m.date)},"caption"),children:t.jsx("h2",{children:m.date.toLocaleString(w)})},y)),f.map((m,y)=>t.jsx("div",{className:G("allDayRow",{weekend:we(m.date),today:ye(m.date)}),children:m.allDay.map((A,L)=>t.jsx("div",{className:"allDayEvent",children:A.summary},L))},y)),f.map((m,y)=>t.jsx("div",{className:G("eventRow",{weekend:we(m.date),today:ye(m.date)}),children:m.events.map((A,L)=>t.jsxs("div",{className:"event",children:[t.jsx("div",{children:A.summary}),t.jsxs("h3",{children:[A.icon&&t.jsx(K,{path:A.icon,size:"1rem",color:"#ffffff"}),Me(A.start.dateTime)," - ",Me(A.end.dateTime)]})]},L))},y))]}),n.length===0&&t.jsx("div",{className:"loading",children:i!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Kalenderdaten"}),t.jsx("div",{children:i instanceof Error?i.message:String(i)})]}):t.jsx(Ge,{visible:!0,height:"80",width:"80",color:"#c1c1c1",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}),i!==!1&&n.length>0&&t.jsx("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginTop:"1rem"},children:t.jsxs("div",{children:["Warnung: ",i instanceof Error?i.message:String(i)]})})]})},ue={"clear-day":{icon:wt,label:"Klar",color:"#eeeef5"},"clear-night":{icon:xt,label:"Klar",color:"#eeeef5"},rain:{icon:gt,label:"Regen",color:"#80a5d6"},snow:{icon:mt,label:"Schnee",color:"#8c82ce"},sleet:{icon:pt,label:"Graupel",color:"#aba4db"},wind:{icon:ut,label:"Stürmisch",color:"#9fb6d6"},fog:{icon:ft,label:"Neblig",color:"#d5dae2"},cloudy:{icon:ht,label:"Bewölkt",color:"#b6bfcb"},"partly-cloudy-day":{icon:dt,label:"Teils bewölkt",color:"#d5dae2"},"partly-cloudy-night":{icon:ct,label:"Teils bewölkt",color:"#d5dae2"}},Po=()=>`./forecast/${Xe}/${qe},${Je}?&units=si&exclude=minutely`,Wo=e=>{const[o,n]=E.useState([]),[i,s]=E.useState(!1),l=Te(6e4*10,"Weather"),d=Ze&&Xe&&qe&&Je;return E.useEffect(()=>{d&&P(Po()).then(a=>{n(a.data),s(!1)}).catch(a=>{s(J(a))}).finally(()=>{})},[l,e,d]),[o,i]},$o=bt(jt),Pe=v.div`

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
`,We=D.memo(({data:e,daily:o=!1})=>t.jsxs("div",{children:[t.jsxs("div",{children:[!o&&W.fromSeconds(e.time).toLocaleString(W.TIME_24_SIMPLE),o&&W.fromSeconds(e.time).setLocale("de").toFormat("ccc, d.M")]}),t.jsx("div",{children:t.jsx(Ae,{icon:e.icon})}),t.jsx("div",{children:t.jsxs("strong",{children:[!o&&t.jsxs(t.Fragment,{children:[Math.round(e.temperature),"°"]}),o&&t.jsxs(t.Fragment,{children:[Math.round(e.temperatureHigh),"° / ",Math.round(e.temperatureLow),"°"]})]})}),t.jsxs("div",{children:[Math.round(e.precipProbability*100)," %"]}),t.jsxs("div",{children:[(e.precipIntensity*100).toFixed(1)," mm"]})]})),Vo=e=>!e||!e.hourly||!e.hourly.data?[]:e.hourly.data.slice(0,24).map(o=>({color:ue[o.icon]?.color||"#ffffff",text:ue[o.icon]?.label||"",annotation:`${Math.round(o.temperature)}°`,time:o.time})),Ae=({icon:e})=>{const o=ue[e];return t.jsx(o.icon,{size:60,color:"#ffffff"})},Io=()=>{if(!Ze)return null;const[e,o]=Wo(),[n,i]=E.useState(!1),s=re("w"),l=E.useRef(),d=D.useCallback(()=>i(y=>!y),[]),a=D.useCallback(()=>i(!0),[]),w=D.useMemo(()=>Vo(e),[e]),f=D.useMemo(()=>[3,6,9,12],[]),m=D.useMemo(()=>[1,2,3,4,5,6,7],[]);return E.useEffect(()=>{if(!l.current||!e||!e.hourly||w.length===0)return;const y={timezone:"Europe/Berlin"},A=document.createElement("div");return l.current.textContent="",l.current.appendChild(A),Ut(A,w,y),()=>{l.current&&(l.current.textContent="")}},[w]),E.useEffect(()=>{s&&d()},[s]),!e||!("currently"in e)||!("daily"in e)||!("hourly"in e)?o!==!1?t.jsx(Pe,{children:t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler beim Laden der Wetterdaten"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]})}):"":t.jsxs(Pe,{children:[t.jsxs("div",{onClick:a,children:[t.jsxs("div",{className:"headline",children:[t.jsx(Ae,{icon:e.currently.icon}),t.jsxs("h2",{children:[Math.round(e.currently.temperature),"°"]})]}),t.jsx("div",{className:"forecast",children:f.map((y,A)=>t.jsx(We,{data:e.hourly.data[y]},A))})]}),t.jsx(se,{visible:n,onClick:d,children:t.jsxs("div",{className:"full-weather",children:[o!==!1&&t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center",marginBottom:"1rem"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]}),t.jsxs("div",{className:"detail-header",children:[t.jsx("div",{children:t.jsxs("div",{className:"headline",children:[t.jsx(Ae,{icon:e.daily.data[0].icon}),t.jsxs("h2",{children:[Math.round(e.daily.data[0].temperatureHigh),"° /",t.jsxs("span",{children:[Math.round(e.daily.data[0].temperatureLow),"°"]})]})]})}),t.jsx("h3",{children:ue[e.daily.data[0].icon].label})]}),t.jsx("div",{className:"values",children:t.jsxs("div",{className:"table",children:[t.jsxs("div",{children:[t.jsx("span",{children:"Gefühlt:"})," ",Math.round(e.daily.data[0].apparentTemperatureHigh),"° C"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftfeuchtigkeit:"})," ",Math.round(e.daily.data[0].humidity*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Wind:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Bewölkung:"})," ",Math.round(e.daily.data[0].cloudCover*100)," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"Regen:"})," ",e.daily.data[0].precipProbability*100," %"]}),t.jsxs("div",{children:[t.jsx("span",{children:"UV Index:"})," ",e.daily.data[0].uvIndex]}),t.jsxs("div",{children:[t.jsx("span",{children:"Luftdruck:"})," ",Math.round(e.daily.data[0].pressure)]}),t.jsxs("div",{children:[t.jsx("span",{children:"Windgeschwindigkeit:"})," ",Math.round(e.daily.data[0].windSpeed)," km/h"]})]})}),t.jsx("h3",{children:"Die nächsten 24 Stunden"}),t.jsx("div",{ref:l}),t.jsx("h3",{children:"Die nächste Woche"}),t.jsx("div",{className:"forecast",children:m.map((y,A)=>t.jsx(We,{data:e.daily.data[y],daily:!0},A))}),t.jsxs("div",{className:"info",children:["Aktualisiert ",t.jsx(yt,{date:W.fromSeconds(e.currently.time).toJSDate(),formatter:$o})]})]})})]})},Fo=D.memo(Io);async function zo(e){if(!je)throw new Error("GEOFOX_SECRET is not configured");return Bt.stringify(Ht(JSON.stringify(e),je))}const Bo="AK Wandsbek",Ho="Hamburg",Uo="Master:62016",Go="STATION",Yo={x:10.091341,y:53.568702},Ko={name:Bo,city:Ho,id:Uo,type:Go,coordinate:Yo},de={departureList:"departureList",checkName:"checkName"},Xo=async(e,o)=>P({method:"post",url:`./gti/public/${e}`,data:o,headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8","geofox-auth-user":Qe,"geofox-auth-signature":await zo(o),Authorization:void 0}}),$e=(e,o)=>e.realtimeOffset-o.realtimeOffset,qo=e=>{const o=e.departures.map(n=>({line:n.line.name,direction:n.line.direction,timeOffset:n.timeOffset,delay:n.delay?n.delay:"0",directionId:n.directionId,realtimeOffset:n.timeOffset+(n.delay?n.delay:0)/60}));return{from:o.filter(n=>n.directionId===1).slice(0,3).sort($e),to:o.filter(n=>n.directionId===6).slice(0,3).sort($e)}},Jo=e=>{const[o,n]=E.useState([]),[i,s]=E.useState(!1),l=Te(6e4),d=et&&Qe&&je;return E.useEffect(()=>{if(!d||!(e in de))return;let a={version:51};switch(e){case de.checkName:a={...a,theName:{name:"AK Wandsbek",type:"STATION"},maxList:1};break;case de.departureList:const w=W.now();a={...a,station:Ko,time:{date:w.toFormat("dd.MM.yyyy"),time:w.toFormat("HH:mm")},maxList:20,maxTimeOffset:200,useRealtime:!0};break;default:a=void 0}Xo(e,a).then(w=>{n(qo(w.data)),s(!1)}).catch(w=>{s(J(w))})},[e,l,d]),[o,i]},Qo=v.div`
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
`,Ve=D.memo(({line:e,direction:o,realtimeOffset:n})=>t.jsxs("div",{className:"departure",children:[t.jsx("div",{children:t.jsx("img",{src:`https://cloud.geofox.de/icon/linename?name=${e}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`,alt:`Linie ${e}`})}),t.jsx("div",{children:n===0?"Jetzt":t.jsxs(t.Fragment,{children:["in ",n," '"]})})]})),Zo=()=>{if(!et)return null;const[e,o]=Jo(de.departureList);return t.jsxs(Qo,{children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"226.2",height:"68.3",viewBox:"0 0 226.2 68.3",children:t.jsxs("g",{transform:"translate(10368 -6294)",children:[t.jsx("path",{d:"M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1",transform:"translate(-10368 6294)",fill:"#fa1e41"}),t.jsx("path",{d:"M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z",transform:"translate(-10368 6294)",fill:"#00ff00"})]})}),o!==!1?t.jsxs("div",{style:{padding:"1rem",color:"#f85a5a",textAlign:"center"},children:[t.jsx("h3",{children:"Fehler!"}),t.jsx("div",{children:o instanceof Error?o.message:String(o)})]}):t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"→ Wandsbek"}),e.to?.map((n,i)=>t.jsx(Ve,{line:n.line,direction:n.direction,realtimeOffset:n.realtimeOffset},i)),t.jsx("h3",{children:"→ Stadtauswärts"}),e.from?.map((n,i)=>t.jsx(Ve,{line:n.line,direction:n.direction,realtimeOffset:n.realtimeOffset},i))]})]})},en=D.memo(Zo),tn=()=>{const[e,o]=E.useState("closed"),[n,i]=E.useState(!1),s=tt&&H,l=H?Y(`/api/states/${H}`):null;return E.useEffect(()=>{!s||!l||P(l).then(d=>{o(d.data.state),i(!1)}).catch(d=>{i(J(d))})},[s,l]),E.useEffect(()=>{let d=null,a=!0;async function w(){if(!s||!H)return;let f;if(typeof window<"u"&&window.location){const A=window.location.pathname.replace(/\/$/,"");f=`${window.location.origin}${A}`}else f="";const m=ke||q||"";if(!m)return;let y;try{y=Se(f,m),a&&i(!1)}catch(A){a&&(M.error("Failed to create WebSocket auth:",A),i(A instanceof Error?A.message:String(A)));return}try{d=await Le({auth:y});const A=L=>{a&&o(L.variables.trigger.to_state.state)};await d.subscribeMessage(A,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:H}})}catch(A){a&&(M.error("Failed to setup WebSocket connection:",A),i(A instanceof Error?A.message:String(A)))}}return w(),()=>{a=!1,d&&d.close()}},[s]),[e,n]},on=e=>{if(!H)return;e(!0);const o=setTimeout(()=>e(!1),3e3);P.post(Y("/api/services/cover/toggle"),{entity_id:H}).catch(n=>{M.error("Failed to toggle garage door:",n)}).finally(()=>{clearTimeout(o),e(!1)})},nn=e=>{if(!H)return;e(!0);const o=setTimeout(()=>e(!1),3e3);P.post(Y("/api/services/cover/open_cover"),{entity_id:H}).catch(n=>{M.error("Failed to open garage door:",n)}).finally(()=>{clearTimeout(o),e(!1)})},rn=e=>{if(!H)return;e(!0);const o=setTimeout(()=>e(!1),3e3);P.post(Y("/api/services/cover/close_cover"),{entity_id:H}).catch(n=>{M.error("Failed to close garage door:",n)}).finally(()=>{clearTimeout(o),e(!1)})},sn=v.div`
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
`,Ie=e=>({unknown:{label:"In Bewegung oder halb-offen",icon:$t},open:{label:"Offen",icon:Wt},closed:{label:"Geschlossen",icon:Pt},opening:{label:"Öffnet",icon:Mt},closing:{label:"Schließt",icon:_t}})[e]||{label:"Unavailable",icon:Vt},at=({garageDoor:e,animate:o=!1})=>t.jsxs(st,{className:G({animate:o}),children:[t.jsx(K,{path:Ie(e).icon,size:"2rem",color:"#ffffff"}),t.jsx("span",{children:Ie(e).label})]}),an=(e,o)=>Et.promise(e,{pending:"Garagentor ist in Bewegung …",success:{render({data:n}){return t.jsx(at,{garageDoor:n})}},error:"Nope"},{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:void 0}),ln=()=>{if(!tt)return null;const[e,o]=tn(),[n,i]=E.useState(void 0),[s,l]=E.useState(!1),[d,a]=E.useState(!1);E.useEffect(()=>{if(e==="unknown"||e==="opening"||e==="closing"){if(!n){const A=new Promise(L=>{i({resolve:L})});an(A)}}else n&&(n.resolve(e),i(void 0))},[e]);const w=re("g");E.useEffect(()=>{w&&o===!1&&on(l)},[w,o]);const f=D.useCallback(y=>{if(o===!1)switch(a(!1),y){case"open":nn(l);break;case"close":rn(l);break}},[l,o]),m=D.useCallback(()=>{o===!1&&a(!0)},[o]);return t.jsxs(sn,{className:G({disabled:o!==!1}),children:[t.jsx("h2",{children:"Garage"}),t.jsx("div",{className:"status",onClick:m,children:o!==!1?t.jsxs(st,{children:[t.jsx(K,{path:Ye,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsx(at,{garageDoor:e,animate:s})}),t.jsx(se,{visible:d&&o===!1,onClick:()=>a(!1),children:t.jsxs("div",{className:"controls",children:[t.jsx("div",{onClick:()=>f("open"),children:"Öffnen"}),t.jsx("div",{onClick:()=>f("close"),children:"Schließen"})]})})]})},cn=D.memo(ln),dn=e=>e?Y(`/api/states/${e}`):null,B={done:{label:"Fertig",animate:!1,icon:Ft},off:{label:"Aus",animate:!1,icon:It},standby:{label:"Standby",animate:!1,icon:ve},running:{label:"Läuft …",animate:!0,icon:ve}},hn={off:0,standby:2,running:16,done:256},fn=()=>{const o=(Array.isArray(fe)?fe:[]).map((f,m)=>{const[y,A]=un(f.entity_id);return{state:y,error:A,name:f.name}}),[n,i]=E.useState(B.off),[s,l]=E.useState(!1),d=o.map(f=>f.state),a=o.map(f=>f.error);E.useEffect(()=>{const f=a.some(m=>m!==!1);l(f&&a.find(m=>m!==!1)||!1)},[a]),E.useEffect(()=>{const f=d.reduce((m,y)=>m+(hn[y]||0),0);f===0?i(B.off):f<16?i(B.standby):f<256?i(B.running):f%256===0?i(B.done):f%256%16===0?i(B.running):f%256%2===0?i(B.done):i(B.running)},[d]);const w=o.map(f=>({label:f.name,state:f.state}));return[n,w,s]},un=e=>{const[o,n]=E.useState("off"),[i,s]=E.useState(!1),l=ot&&e,d=dn(e);return E.useEffect(()=>{!l||!d||P(d).then(a=>{n(a.data.state),s(!1)}).catch(a=>{s(J(a))})},[e,l,d]),E.useEffect(()=>{let a=null,w=null,f=!0;async function m(){if(!l||!e)return;let y;if(typeof window<"u"&&window.location){const L=window.location.pathname.replace(/\/$/,"");y=`${window.location.origin}${L}`}else y="";const A=ke||q||"";if(A)try{const L=Se(y,A);a=await Le({auth:L});const b=j=>{f&&n(j.variables.trigger.to_state.state)};w=await a.subscribeMessage(b,{type:"subscribe_trigger",trigger:{platform:"state",entity_id:e}})}catch(L){f&&(M.error(`Failed to setup WebSocket connection for ${e}:`,L),s(L instanceof Error?L.message:String(L)))}}return m(),()=>{f=!1,w&&w(),a&&a.close()}},[e,l]),[o,i]},pn=v.div`
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
`,mn=()=>{if(!ot)return null;const[e,o,n]=fn(),[i,s]=E.useState(!1),l=D.useCallback(()=>{n===!1&&s(!0)},[n]),d=D.useCallback(()=>s(!1),[]);return t.jsxs(pn,{className:G({disabled:n!==!1}),children:[t.jsx("h2",{children:"Wäsche"}),t.jsx("div",{className:"status",onClick:l,children:n!==!1?t.jsxs(t.Fragment,{children:[t.jsx(K,{path:Ye,size:"2rem",color:"#f85a5a"}),t.jsx("span",{children:"Fehler"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:G({animate:e.animate}),children:t.jsx(K,{path:e.icon,size:"2rem",color:"#ffffff"})}),t.jsx("span",{children:e.label})]})}),t.jsx(se,{visible:i&&n===!1,onClick:d,children:t.jsx("div",{className:"states",children:o.map((a,w)=>t.jsxs("div",{children:[t.jsx("div",{className:G({animate:B[a.state].animate}),children:t.jsx(K,{path:B[a.state].icon,size:2})}),t.jsx("div",{children:B[a.state].label}),t.jsx("div",{className:"subtitle",children:a.label})]},w))})})]})},gn=D.memo(mn),xn=v.div`
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
`,wn=()=>t.jsxs(xn,{children:[t.jsx(Fo,{}),t.jsx(en,{}),t.jsxs("div",{className:"two-cols",children:[t.jsx(cn,{}),t.jsx(gn,{})]})]}),yn=D.memo(wn),Fe=[{name:"Full HD",width:1920,height:1080},{name:"HD",width:1366,height:768},{name:"QHD",width:2560,height:1440},{name:"4K",width:3840,height:2160},{name:'Amazon Fire HD 7"',width:1280,height:800},{name:"Custom",width:null,height:null}],bn=[{name:"1 Video - Landscape",videos:[{orientation:"landscape"}]},{name:"1 Video - Portrait",videos:[{orientation:"portrait"}]},{name:"1 Video - Wide",videos:[{orientation:"wide"}]},{name:"2 Videos - LL",videos:[{orientation:"landscape"},{orientation:"landscape"}]},{name:"2 Videos - LP",videos:[{orientation:"landscape"},{orientation:"portrait"}]},{name:"2 Videos - LW",videos:[{orientation:"landscape"},{orientation:"wide"}]},{name:"2 Videos - PP",videos:[{orientation:"portrait"},{orientation:"portrait"}]},{name:"2 Videos - PW",videos:[{orientation:"portrait"},{orientation:"wide"}]},{name:"2 Videos - WW",videos:[{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - LLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"3 Videos - LLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"3 Videos - LLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"3 Videos - LPW",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"wide"}]},{name:"3 Videos - LPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - LWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - PPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"3 Videos - PWW",videos:[{orientation:"portrait"},{orientation:"wide"},{orientation:"wide"}]},{name:"3 Videos - WWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LLLL",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"}]},{name:"4 Videos - LLLP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"}]},{name:"4 Videos - LLPP",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LPPP",videos:[{orientation:"landscape"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - PPPP",videos:[{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"},{orientation:"portrait"}]},{name:"4 Videos - LLLW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"}]},{name:"4 Videos - LLWW",videos:[{orientation:"landscape"},{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - LWWW",videos:[{orientation:"landscape"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]},{name:"4 Videos - WWWW",videos:[{orientation:"wide"},{orientation:"wide"},{orientation:"wide"},{orientation:"wide"}]}],he={landscape:"#4A90E2",portrait:"#50C878",wide:"#FF8C42"},jn={landscape:"L",portrait:"P",wide:"W"},En=v.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`,An=v.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`,Sn=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,ee=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,te=v.label`
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
`,Ln=v.button`
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
`,He=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,kn=v.button`
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
`,Cn=v.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`,Tn=v.div`
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
`,vn=v.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`,On=v.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`,Dn=v.div`
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
`,Rn=v.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`,Nn=v.h3`
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
`,Ue=()=>{const[e,o]=D.useState(1920),[n,i]=D.useState(1080),[s,l]=D.useState("Full HD"),[d,a]=D.useState(""),[w,f]=D.useState(""),[m,y]=D.useState([{orientation:"landscape"}]),[A,L]=D.useState(null),b=D.useMemo(()=>rt(m,e,n),[m,e,n]),j=c=>{const g=Fe.find(S=>S.name===c);g&&g.width&&g.height?(o(g.width),i(g.height),l(c),a(""),f("")):c==="Custom"&&l("Custom")},u=()=>{const c=parseInt(d),g=parseInt(w);c>0&&g>0&&(o(c),i(g))},p=c=>{y(c.videos),L(c.name)},r=c=>{const g=[];for(let S=0;S<c;S++)g.push(m[S]||{orientation:"landscape"});y(g),L(null)},h=(c,g)=>{const S=[...m];S[c]={orientation:g},y(S),L(null)},x=Math.min(1,Math.min(window.innerWidth*.9/e,(window.innerHeight-400)/n));return t.jsxs(En,{children:[t.jsx(An,{children:"Video Tiling Algorithm Demo"}),t.jsxs(Sn,{children:[t.jsxs(ee,{children:[t.jsx(te,{children:"Screen Size Preset"}),t.jsx(ze,{value:s,onChange:c=>j(c.target.value),children:Fe.map(c=>t.jsx("option",{value:c.name,children:c.name},c.name))})]}),s==="Custom"&&t.jsxs(t.Fragment,{children:[t.jsxs(ee,{children:[t.jsx(te,{children:"Custom Width"}),t.jsx(Be,{type:"number",value:d,onChange:c=>a(c.target.value),placeholder:"Width",min:"100"})]}),t.jsxs(ee,{children:[t.jsx(te,{children:"Custom Height"}),t.jsx(Be,{type:"number",value:w,onChange:c=>f(c.target.value),placeholder:"Height",min:"100"})]}),t.jsxs(ee,{children:[t.jsx(te,{children:" "}),t.jsx(Ln,{onClick:u,children:"Apply Custom Size"})]})]}),t.jsxs(ee,{children:[t.jsx(te,{children:"Number of Videos"}),t.jsxs(ze,{value:m.length,onChange:c=>r(parseInt(c.target.value)),children:[t.jsx("option",{value:"1",children:"1 Video"}),t.jsx("option",{value:"2",children:"2 Videos"}),t.jsx("option",{value:"3",children:"3 Videos"}),t.jsx("option",{value:"4",children:"4 Videos"})]})]}),m.map((c,g)=>t.jsxs(ee,{children:[t.jsxs(te,{children:["Video ",g+1," Orientation"]}),t.jsxs(He,{children:[t.jsx(be,{active:c.orientation==="landscape",orientation:"landscape",onClick:()=>h(g,"landscape"),children:"Landscape"}),t.jsx(be,{active:c.orientation==="portrait",orientation:"portrait",onClick:()=>h(g,"portrait"),children:"Portrait"}),t.jsx(be,{active:c.orientation==="wide",orientation:"wide",onClick:()=>h(g,"wide"),children:"Wide"})]})]},g))]}),t.jsxs(Rn,{children:[t.jsx(Nn,{children:"Test Scenarios"}),t.jsx(He,{children:bn.map(c=>t.jsx(kn,{active:A===c.name,onClick:()=>p(c),children:c.name},c.name))})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"24px"},children:t.jsx(Cn,{style:{width:`${e*x}px`,height:`${n*x}px`},children:b.videos.map((c,g)=>t.jsxs(Tn,{orientation:c.orientation,style:{left:`${c.x*x}px`,top:`${c.y*x}px`,width:`${c.width*x}px`,height:`${c.height*x}px`},children:[t.jsxs(vn,{children:[jn[c.orientation]," ",g+1]}),t.jsxs(On,{children:[Math.round(c.width)," × ",Math.round(c.height)]})]},g))})}),t.jsxs(Dn,{children:[t.jsxs(ae,{children:[t.jsx(le,{children:"Canvas Size"}),t.jsxs(ce,{children:[e," × ",n]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Total Area Used"}),t.jsxs(ce,{children:[Math.round(b.totalArea).toLocaleString()," px²"]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Efficiency"}),t.jsxs(ce,{children:[b.efficiency.toFixed(2),"%"]})]}),t.jsxs(ae,{children:[t.jsx(le,{children:"Display Scale"}),t.jsxs(ce,{children:[(x*100).toFixed(1),"%"]})]})]})]})},_n=()=>{function e(n,i){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(i))throw new Error("Invalid timeOfDay format.  Must be in HH:MM format (e.g., '08:30').");const[l,d]=i.split(":").map(Number),a=new Date;let w=new Date(a.getFullYear(),a.getMonth(),a.getDate());w.setHours(l,d,0,0),w<=a&&w.setDate(w.getDate()+1);const f=w.getTime()-a.getTime();return setTimeout(n,f)}const o=()=>{window.location.reload(!0)};E.useLayoutEffect(()=>{const n=[e(o,"00:00"),e(o,"03:00"),e(o,"06:00"),e(o,"09:00"),e(o,"12:00"),e(o,"15:00"),e(o,"18:00"),e(o,"21:00")];return()=>{n.forEach(i=>{i&&clearTimeout(i)})}},[])},Mn=v.div`
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
`;class pe extends E.Component{constructor(o){super(o),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(o){return{hasError:!0}}componentDidCatch(o,n){this.setState({error:o,errorInfo:n}),M.error("ErrorBoundary caught an error:",o,n)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleReload=()=>{window.location.reload()};render(){return this.state.hasError?t.jsxs(Mn,{children:[t.jsx("h2",{children:"Something went wrong"}),t.jsx("p",{children:"The application encountered an error. Please try reloading the page."}),!1,t.jsxs("div",{children:[t.jsx("button",{onClick:this.handleReset,children:"Try Again"}),t.jsx("button",{onClick:this.handleReload,style:{marginLeft:"0.5rem"},children:"Reload Page"})]})]}):this.props.children}}const Pn=At`
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
`,Wn=v.div`
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
`;function $n(){return _n(),t.jsxs(Wn,{children:[t.jsx(Pn,{}),t.jsxs("div",{className:"main",children:[t.jsx(pe,{children:t.jsx(Mo,{})}),t.jsx(pe,{children:t.jsx(yn,{})})]}),t.jsx(Lt,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!1,theme:"dark"})]})}function Vn(){return t.jsx(pe,{children:t.jsxs(St,{children:[t.jsx(ge,{path:"/demo",element:t.jsx(Ue,{})}),t.jsx(ge,{path:"/tiling-demo",element:t.jsx(Ue,{})}),t.jsx(ge,{path:"*",element:t.jsx($n,{})})]})})}const In=kt.createRoot(document.getElementById("root"));In.render(t.jsx(E.StrictMode,{children:t.jsx(pe,{children:t.jsx(Ct,{children:t.jsx(Vn,{})})})}));
