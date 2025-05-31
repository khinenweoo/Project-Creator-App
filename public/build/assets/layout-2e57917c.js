import{r as s,j as a,c as E,a as Y,L as Q,k as Ke,P as Z,D as A,O as M,Z as ne,b as W,l as ze,I as Ze,R as Ge,m as Je}from"./app-5858095f.js";import{R as ie,C as le,u as oe,a as ce,c as ee,T as xe,e as qe,f as Xe,E as Ye,h as se,b as re,d as je,P as We,B as be}from"./button.esm-0c1e1465.js";import{a as Qe,C as fe,T as et}from"./index.esm-b3326b5f.js";const ke=s.createContext({}),tt=({children:n})=>{const[t,e]=s.useState(""),i={activeMenu:t,setActiveMenu:e};return a.jsx(ke.Provider,{value:i,children:n})},Se=n=>{route().current();const t=window.location.pathname,e="",{activeMenu:i,setActiveMenu:r}=s.useContext(ke),l=n.item,c=n.parentKey?n.parentKey+"-"+n.index:String(n.index),f=l.to&&t===l.to,g=i===c||i.startsWith(c+"-"),j=h=>{l.to&&l.to===h&&r(c)};s.useEffect(()=>{j(t)},[t,e]);const x=h=>{if(l.disabled){h.preventDefault();return}l.command&&l.command({originalEvent:h,item:l}),l.items?r(g?n.parentKey:c):r(c)},k=l.items&&l.visible!==!1&&a.jsx(Qe,{timeout:{enter:1e3,exit:450},classNames:"layout-submenu",in:n.root?!0:g,children:a.jsx("ul",{children:l.items.map((h,o)=>a.jsx(Se,{item:h,index:o,className:h.badgeClass,parentKey:c},h.label))})},l.label);return a.jsxs("li",{className:E({"layout-root-menuitem":n.root,"active-menuitem":g}),children:[n.root&&l.visible!==!1&&a.jsx("div",{className:"layout-menuitem-root-text",children:l.label}),(!l.to||l.items)&&l.visible!==!1?a.jsxs("a",{href:l.url,onClick:h=>x(h),className:E(l.class,"p-ripple"),target:l.target,tabIndex:0,children:[a.jsx("i",{className:E("layout-menuitem-icon",l.icon)}),a.jsx("span",{className:"layout-menuitem-text",children:l.label}),l.items&&a.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),a.jsx(ie,{})]}):null,l.to&&!l.items&&l.visible!==!1?a.jsxs(Y,{href:l.to,replace:l.replaceUrl,target:l.target,onClick:h=>x(h),className:E(l.class,"p-ripple",{"active-route":f}),tabIndex:0,children:[a.jsx("i",{className:E("layout-menuitem-icon",l.icon)}),a.jsx("span",{className:"layout-menuitem-text",children:l.label}),l.items&&a.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),a.jsx(ie,{})]}):null,k]})},nt=()=>{s.useContext(Q);const n=[{label:"",items:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:route("dashboard")},{label:"Projects",icon:"pi pi-fw pi-briefcase",to:route("projects.index")},{label:"Tasks",icon:"pi pi-fw pi-check-square",to:route("task.index")},{label:"Members",icon:"pi pi-fw pi-users",to:route("user.index")}]}];return a.jsx(tt,{children:a.jsx("ul",{className:"layout-menu",children:n.map((t,e)=>t!=null&&t.seperator?a.jsx("li",{className:"menu-separator"}):a.jsx(Se,{item:t,root:!0,index:e},t.label))})})},rt=()=>a.jsx(nt,{}),Ce=s.forwardRef(({user:n},t)=>{const{layoutState:e,onMenuToggle:i,showProfileSidebar:r}=s.useContext(Q),{userState:l}=s.useContext(Ke),c=s.useRef(null),f=s.useRef(null),g=s.useRef(null);return s.useImperativeHandle(t,()=>({menubutton:c.current,topbarmenu:f.current,topbarmenubutton:g.current})),a.jsxs("div",{className:"layout-topbar",children:[a.jsxs(Y,{href:"/",className:"layout-topbar-logo hidden md:block",children:[a.jsx("img",{src:"/images/logo/logocolor.svg",width:"",height:"30px",alt:"logo"}),a.jsx("span",{className:"logo-text text-3xl font-bold ",children:"ProJix"})]}),a.jsx("button",{ref:c,type:"button",className:"p-link layout-menu-button layout-topbar-button sm:justify-content-start ml-0",onClick:i,children:a.jsx("i",{className:"pi pi-bars"})}),a.jsx("button",{ref:g,type:"button",className:"p-link layout-topbar-menu-button layout-topbar-button",onClick:r,children:l&&l.profile_image?a.jsx("div",{className:"user-avatar",children:a.jsx("img",{src:l.profile_image,alt:"",className:"border-circle border-1 border-gray-300 w-4rem h-4rem p-1 m-2 shadow-md"})}):a.jsx("i",{className:"pi pi-user"})}),a.jsxs("div",{className:"flex flex-column",children:[a.jsx("span",{className:"hidden md:block text-md font-medium text-gray-900 ml-3",children:l?l.username:""}),a.jsx("span",{className:"hidden md:block text-sm text-gray-900 ml-3",children:l.is_admin===1?"Admin Profile":"Member Profile"})]}),a.jsxs("div",{ref:f,className:E("layout-topbar-menu",{"layout-topbar-menu-mobile-active":e.profileSidebarVisible}),children:[a.jsxs(Y,{href:route("profile.edit"),className:"p-link layout-topbar-button",children:[a.jsx("i",{className:"pi pi-user"}),a.jsx("span",{children:"Profile"})]}),a.jsxs(Y,{href:route("logout"),method:"post",as:"button",className:"p-link layout-topbar-button",children:[a.jsx("i",{className:"pi pi-lock"}),a.jsx("span",{children:"Logout"})]})]})]})});Ce.displayName="AppTopbar";function V(){return V=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},V.apply(this,arguments)}function U(n){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(n)}function at(n,t){if(U(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t||"default");if(U(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function it(n){var t=at(n,"string");return U(t)==="symbol"?t:String(t)}function st(n,t,e){return t=it(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var lt={root:function(t){var e=t.props,i=t.checked;return E("p-inputswitch p-component",{"p-highlight":i,"p-disabled":e.disabled,"p-invalid":e.invalid})},input:"p-inputswitch-input",slider:"p-inputswitch-slider"},J=le.extend({defaultProps:{__TYPE:"InputSwitch",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,id:null,inputId:null,inputRef:null,invalid:!1,name:null,onBlur:null,onChange:null,onFocus:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,children:void 0},css:{classes:lt}});function ge(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function ot(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ge(Object(e),!0).forEach(function(i){st(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):ge(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var Pe=s.memo(s.forwardRef(function(n,t){var e=oe(),i=s.useContext(Z),r=J.getProps(n,i),l=J.setMetaData({props:r}),c=l.ptm,f=l.cx,g=l.isUnstyled;ce(J.css.styles,g,{name:"inputswitch"});var j=s.useRef(null),x=s.useRef(r.inputRef),k=r.checked===r.trueValue,h=function(d){if(r.onChange){var S=k?r.falseValue:r.trueValue;r.onChange({originalEvent:d,value:S,stopPropagation:function(){d==null||d.stopPropagation()},preventDefault:function(){d==null||d.preventDefault()},target:{name:r.name,id:r.id,value:S}})}},o=function(d){var S;r==null||(S=r.onFocus)===null||S===void 0||S.call(r,d)},P=function(d){var S;r==null||(S=r.onBlur)===null||S===void 0||S.call(r,d)};s.useImperativeHandle(t,function(){return{props:r,focus:function(){return A.focus(x.current)},getElement:function(){return j.current},getInput:function(){return x.current}}}),s.useEffect(function(){M.combinedRefs(x,r.inputRef)},[x,r.inputRef]),ee(function(){r.autoFocus&&A.focus(x.current,r.autoFocus)});var O=M.isNotEmpty(r.tooltip),I=J.getOtherProps(r),u=M.reduceKeys(I,A.ARIA_PROPS),p=e({className:E(r.className,f("root",{checked:k})),style:r.style,role:"checkbox","aria-checked":k,"data-p-highlight":k,"data-p-disabled":r.disabled},I,c("root")),w=e(ot({type:"checkbox",id:r.inputId,name:r.name,checked:k,onChange:h,onFocus:o,onBlur:P,disabled:r.disabled,role:"switch",tabIndex:r.tabIndex,"aria-checked":k,className:f("input")},u),c("input")),y=e({className:f("slider")},c("slider"));return s.createElement(s.Fragment,null,s.createElement("div",V({id:r.id,ref:j},p),s.createElement("input",V({ref:x},w)),s.createElement("span",y)),O&&s.createElement(xe,V({target:j,content:r.tooltip,pt:c("tooltip")},r.tooltipOptions)))}));Pe.displayName="InputSwitch";function H(){return H=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},H.apply(this,arguments)}function K(n){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(n)}function ct(n,t){if(K(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t||"default");if(K(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function ut(n){var t=ct(n,"string");return K(t)==="symbol"?t:String(t)}function dt(n,t,e){return t=ut(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var pt={root:function(t){var e=t.props,i=t.context;return E("p-radiobutton p-component",{"p-highlight":e.checked,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?e.variant==="filled":i&&i.inputStyle==="filled"})},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},q=le.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:pt}});function he(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function mt(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?he(Object(e),!0).forEach(function(i){dt(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):he(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var $=s.memo(s.forwardRef(function(n,t){var e=oe(),i=s.useContext(Z),r=q.getProps(n,i),l=s.useRef(null),c=s.useRef(r.inputRef),f=q.setMetaData({props:r}),g=f.ptm,j=f.cx,x=f.isUnstyled;ce(q.css.styles,x,{name:"radiobutton"});var k=function(m){h(m)},h=function(m){if(!(r.disabled||r.readonly)&&r.onChange){var d=r.checked,S=m.target instanceof HTMLDivElement,N=m.target===c.current,R=N&&m.target.checked!==d,D=S&&(A.hasClass(l.current,"p-radiobutton-checked")===d?!d:!1),_=!d,te={originalEvent:m,value:r.value,checked:_,stopPropagation:function(){m==null||m.stopPropagation()},preventDefault:function(){m==null||m.preventDefault()},target:{type:"radio",name:r.name,id:r.id,value:r.value,checked:_}};if(R||D){var T;if(r==null||(T=r.onChange)===null||T===void 0||T.call(r,te),m.defaultPrevented)return;D&&(c.current.checked=_)}A.focus(c.current)}},o=function(m){var d;r==null||(d=r.onFocus)===null||d===void 0||d.call(r,m)},P=function(m){var d;r==null||(d=r.onBlur)===null||d===void 0||d.call(r,m)};s.useImperativeHandle(t,function(){return{props:r,select:k,focus:function(){return A.focus(c.current)},getElement:function(){return l.current},getInput:function(){return c.current}}}),s.useEffect(function(){c.current&&(c.current.checked=r.checked)},[r.checked]),s.useEffect(function(){M.combinedRefs(c,r.inputRef)},[c,r.inputRef]),ee(function(){r.autoFocus&&A.focus(c.current,r.autoFocus)});var O=M.isNotEmpty(r.tooltip),I=q.getOtherProps(r),u=e({id:r.id,className:E(r.className,j("root",{context:i})),style:r.style,"data-p-checked":r.checked},I,g("root"));delete u.input,delete u.box,delete u.icon;var p=function(){var m=M.reduceKeys(I,A.ARIA_PROPS),d=e(mt({id:r.inputId,type:"radio",name:r.name,defaultChecked:r.checked,onFocus:o,onBlur:P,onChange:h,disabled:r.disabled,readOnly:r.readonly,required:r.required,tabIndex:r.tabIndex,className:j("input")},m),n.input,g("input"));return s.createElement("input",H({ref:c},d))},w=function(){var m=e({className:j("box")},n.box,g("box")),d=e({className:j("icon")},n.icon,g("icon"));return s.createElement("div",m,s.createElement("div",d))};return s.createElement(s.Fragment,null,s.createElement("div",H({ref:l},u),p(),w()),O&&s.createElement(xe,H({target:l,content:r.tooltip,pt:g("tooltip")},r.tooltipOptions)))}));$.displayName="RadioButton";function L(){return L=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},L.apply(this,arguments)}function z(n){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(n)}function bt(n,t){if(z(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t||"default");if(z(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function ft(n){var t=bt(n,"string");return z(t)==="symbol"?t:String(t)}function gt(n,t,e){return t=ft(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function ht(n){if(Array.isArray(n))return n}function vt(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var i,r,l,c,f=[],g=!0,j=!1;try{if(l=(e=e.call(n)).next,t===0){if(Object(e)!==e)return;g=!1}else for(;!(g=(i=l.call(e)).done)&&(f.push(i.value),f.length!==t);g=!0);}catch(x){j=!0,r=x}finally{try{if(!g&&e.return!=null&&(c=e.return(),Object(c)!==c))return}finally{if(j)throw r}}return f}}function ve(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function yt(n,t){if(n){if(typeof n=="string")return ve(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ve(n,t)}}function xt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(n,t){return ht(n)||vt(n,t)||yt(n,t)||xt()}var jt={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(t){var e=t.props,i=t.maskVisibleState,r=["left","right","top","bottom"],l=r.find(function(c){return c===e.position});return E("p-sidebar-mask",l&&!e.fullScreen?"p-sidebar-".concat(l):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-sidebar-mask-scrollblocker":e.blockScroll,"p-sidebar-visible":i,"p-sidebar-full":e.fullScreen},e.maskClassName)},header:function(t){var e=t.props;return E("p-sidebar-header",{"p-sidebar-custom-header":e.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(t){t.props;var e=t.context;return E("p-sidebar p-component",{"p-input-filled":e&&e.inputStyle==="filled"||W.inputStyle==="filled","p-ripple-disabled":e&&e.ripple===!1||W.ripple===!1})},transition:"p-sidebar"},kt=`
@layer primereact {
    .p-sidebar-mask {
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-sidebar-visible {
        display: flex;
    }
    
    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
    }
    
    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .p-sidebar-custom-header {
        justify-content: space-between;
    }
    
    .p-sidebar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        top: 0px;
        left: 0px;
    }
    
    /* Animation */
    /* Top, Bottom, Left and Right */
    .p-sidebar-top .p-sidebar-enter,
    .p-sidebar-top .p-sidebar-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-sidebar-bottom .p-sidebar-enter,
    .p-sidebar-bottom .p-sidebar-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-sidebar-left .p-sidebar-enter,
    .p-sidebar-left .p-sidebar-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-sidebar-right .p-sidebar-enter,
    .p-sidebar-right .p-sidebar-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-sidebar-top .p-sidebar-enter-active,
    .p-sidebar-bottom .p-sidebar-enter-active,
    .p-sidebar-left .p-sidebar-enter-active,
    .p-sidebar-right .p-sidebar-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s;
    }
    
    .p-sidebar-top .p-sidebar-enter-done,
    .p-sidebar-bottom .p-sidebar-enter-done,
    .p-sidebar-left .p-sidebar-enter-done,
    .p-sidebar-right .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-top .p-sidebar-exit-active,
    .p-sidebar-bottom .p-sidebar-exit-active,
    .p-sidebar-left .p-sidebar-exit-active,
    .p-sidebar-right .p-sidebar-exit-active {
        transition: all 0.3s;
    }
    
    /* Full */
    .p-sidebar-full .p-sidebar-enter {
        opacity: 0;
        transform: scale(0.5);
    }
    
    .p-sidebar-full .p-sidebar-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-sidebar-full .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-full .p-sidebar-exit-active {
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }
    
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }
    
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }
    
    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }
    
    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }
    
    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }
    
    .p-sidebar-left .p-sidebar-view,
    .p-sidebar-right .p-sidebar-view,
    .p-sidebar-top .p-sidebar-view,
    .p-sidebar-bottom .p-sidebar-view {
        width: 100%;
        height: 100%;
    }
    
    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }        
}
`,St={mask:function(t){var e=t.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"?"flex-start":e.position==="right"?"flex-end":"center",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"}}},X=le.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:jt,styles:kt,inlineStyles:St}});function ye(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function Ct(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?ye(Object(e),!0).forEach(function(i){gt(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):ye(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var Oe=s.forwardRef(function(n,t){var e=oe(),i=s.useContext(Z),r=X.getProps(n,i),l=s.useState(!1),c=ae(l,2),f=c[0],g=c[1],j=s.useState(!1),x=ae(j,2),k=x[0],h=x[1],o=X.setMetaData({props:r,state:{containerVisible:f}}),P=o.ptm,O=o.cx,I=o.sx,u=o.isUnstyled;ce(X.css.styles,u,{name:"sidebar"});var p=s.useRef(null),w=s.useRef(null),y=s.useRef(null),m=k&&r.closeOnEscape,d=qe("sidebar",m);Xe({callback:function(v){B(v)},when:m&&d,priority:[Ye.SIDEBAR,d]});var S=se({type:"click",listener:function(v){v.button===0&&_(v)&&B(v)}}),N=ae(S,2),R=N[0],D=N[1],_=function(v){return p&&p.current&&!p.current.contains(v.target)},te=function(){var v=document.activeElement,F=v&&p&&p.current.contains(v);!F&&r.showCloseIcon&&y.current&&y.current.focus()},T=function(v){r.dismissable&&r.modal&&w.current===v.target&&B(v)},B=function(v){r.onHide(),v.preventDefault()},we=function(){r.onShow&&r.onShow(),te(),Ie()},Ee=function(){r.modal&&!u()&&A.addClass(w.current,"p-component-overlay-leave")},Ne=function(){ne.clear(w.current),g(!1),ue()},Ie=function(){r.dismissable&&!r.modal&&R(),r.blockScroll&&A.blockBodyScroll()},ue=function(){D(),r.blockScroll&&A.unblockBodyScroll()};s.useImperativeHandle(t,function(){return{props:r,getElement:function(){return p.current},gteMask:function(){return w.current},getCloseIcon:function(){return y.current}}}),ee(function(){r.visible&&g(!0)}),re(function(){r.visible&&!f&&g(!0),r.visible!==k&&f&&h(r.visible)},[r.visible]),re(function(){f&&(ne.set("modal",w.current,i&&i.autoZIndex||W.autoZIndex,r.baseZIndex||i&&i.zIndex.modal||W.zIndex.modal),h(!0))},[f]),re(function(){k&&(D(),r.dismissable&&!r.modal&&R())},[r.dismissable,r.modal,k]),je(function(){ue(),w.current&&ne.clear(w.current)});var Ae=function(){var v=r.ariaCloseLabel||ze("close"),F=e({type:"button",ref:y,className:O("closeButton"),onClick:function(Ue){return B(Ue)},"aria-label":v},P("closeButton")),G=e({className:O("closeIcon")},P("closeIcon")),Ve=r.closeIcon||s.createElement(et,G),He=Ze.getJSXIcon(Ve,Ct({},G),{props:r});return r.showCloseIcon?s.createElement("button",F,He,s.createElement(ie,null)):null},Re=function(){return r.header?M.getJSXElement(r.header,r):null},Me=function(){return r.icons?M.getJSXElement(r.icons,r):null},de=e({ref:w,style:I("mask"),className:O("mask",{maskVisibleState:f}),onMouseDown:function(v){return T(v)}},P("mask")),pe=e({id:r.id,className:E(r.className,O("root",{context:i})),style:r.style,role:"complementary"},X.getOtherProps(r),P("root")),De=e({className:O("header")},P("header")),_e=e({className:O("content")},P("content")),Be=e({className:O("icons")},P("icons")),Le={enter:r.fullScreen?150:300,exit:r.fullScreen?150:300},me=e({classNames:O("transition"),in:k,timeout:Le,options:r.transitionOptions,unmountOnExit:!0,onEntered:we,onExiting:Ee,onExited:Ne},P("transition")),Te=function(){var v={closeIconRef:y,hide:B};return s.createElement("div",de,s.createElement(fe,L({nodeRef:p},me),s.createElement("div",L({ref:p},pe),M.getJSXElement(n.content,v))))},Fe=function(){var v=Ae(),F=Me(),G=Re();return s.createElement("div",de,s.createElement(fe,L({nodeRef:p},me),s.createElement("div",L({ref:p},pe),s.createElement("div",De,G,s.createElement("div",Be,F,v)),s.createElement("div",_e,r.children))))},$e=function(){var v=n!=null&&n.content?Te():Fe();return s.createElement(We,{element:v,appendTo:r.appendTo,visible:!0})};return f&&$e()});Oe.displayName="Sidebar";function b({onClick:n,img:t,imgAlt:e}){return a.jsx("div",{className:"col-3",children:a.jsx("button",{className:"p-link w-2rem h-2rem",onClick:n,children:a.jsx("img",{src:t,className:"w-2rem h-2rem",alt:e})})})}const Pt=n=>{const[t]=s.useState([12,13,14,15,16]),{layoutConfig:e,setLayoutConfig:i,layoutState:r,setLayoutState:l}=s.useContext(Q),{setRipple:c,changeTheme:f}=s.useContext(Z),g=()=>{l(u=>({...u,configSidebarVisible:!0}))},j=()=>{l(u=>({...u,configSidebarVisible:!1}))},x=u=>{i(p=>({...p,inputStyle:u.value}))},k=u=>{c(u.value),i(p=>({...p,ripple:u.value}))},h=u=>{i(p=>({...p,menuMode:u.value}))},o=(u,p)=>{f==null||f(e.theme,u,"theme-css",()=>{i(w=>({...w,theme:u,colorScheme:p}))})},P=()=>{i(u=>({...u,scale:u.scale-1}))},O=()=>{i(u=>({...u,scale:u.scale+1}))},I=()=>{document.documentElement.style.fontSize=e.scale+"px"};return s.useEffect(()=>{I()},[e.scale]),a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"layout-config-button config-link hidden",type:"button",onClick:g,children:a.jsx("i",{className:"pi pi-cog"})}),a.jsxs(Oe,{visible:r.configSidebarVisible,onHide:j,position:"right",className:"layout-config-sidebar w-20rem",children:[!n.simple&&a.jsxs(a.Fragment,{children:[a.jsx("h5",{children:"Scale"}),a.jsxs("div",{className:"flex align-items-center",children:[a.jsx(be,{icon:"pi pi-minus",type:"button",onClick:P,rounded:!0,text:!0,className:"w-2rem h-2rem mr-2",disabled:e.scale===t[0]}),a.jsx("div",{className:"flex gap-2 align-items-center",children:t.map(u=>a.jsx("i",{className:E("pi pi-circle-fill",{"text-primary-500":u===e.scale,"text-300":u!==e.scale})},u))}),a.jsx(be,{icon:"pi pi-plus",type:"button",onClick:O,rounded:!0,text:!0,className:"w-2rem h-2rem ml-2",disabled:e.scale===t[t.length-1]})]}),a.jsx("h5",{children:"Menu Type"}),a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"menuMode",value:"static",checked:e.menuMode==="static",onChange:u=>h(u),inputId:"mode1"}),a.jsx("label",{htmlFor:"mode1",children:"Static"})]}),a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"menuMode",value:"overlay",checked:e.menuMode==="overlay",onChange:u=>h(u),inputId:"mode2"}),a.jsx("label",{htmlFor:"mode2",children:"Overlay"})]})]}),a.jsx("h5",{children:"Input Style"}),a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"inputStyle",value:"outlined",checked:e.inputStyle==="outlined",onChange:u=>x(u),inputId:"outlined_input"}),a.jsx("label",{htmlFor:"outlined_input",children:"Outlined"})]}),a.jsxs("div",{className:"field-radiobutton flex-1",children:[a.jsx($,{name:"inputStyle",value:"filled",checked:e.inputStyle==="filled",onChange:u=>x(u),inputId:"filled_input"}),a.jsx("label",{htmlFor:"filled_input",children:"Filled"})]})]}),a.jsx("h5",{children:"Ripple Effect"}),a.jsx(Pe,{checked:e.ripple,onChange:u=>k(u)})]}),a.jsx("h5",{children:"Bootstrap"}),a.jsxs("div",{className:"grid",children:[a.jsx(b,{img:"/images/layout/themes/bootstrap4-light-blue.svg",imgAlt:"Bootstrap Light Blue",onClick:()=>o("bootstrap4-light-blue","light")}),a.jsx(b,{img:"/images/layout/themes/bootstrap4-light-purple.svg",imgAlt:"Bootstrap Light Purple",onClick:()=>o("bootstrap4-light-purple","light")}),a.jsx(b,{img:"/images/layout/themes/bootstrap4-dark-blue.svg",imgAlt:"Bootstrap Dark Blue",onClick:()=>o("bootstrap4-dark-blue","dark")}),a.jsx(b,{img:"/images/layout/themes/bootstrap4-dark-purple.svg",imgAlt:"Bootstrap Dark Purple",onClick:()=>o("bootstrap4-dark-purple","dark")})]}),a.jsx("h5",{children:"Material Design"}),a.jsxs("div",{className:"grid",children:[a.jsx(b,{img:"/images/layout/themes/md-light-indigo.svg",imgAlt:"Material Light Indigo",onClick:()=>o("md-light-indigo","light")}),a.jsx(b,{img:"/images/layout/themes/md-light-deeppurple.svg",imgAlt:"Material Light DeepPurple",onClick:()=>o("md-light-deeppurple","light")}),a.jsx(b,{img:"/images/layout/themes/md-dark-indigo.svg",imgAlt:"Material Dark Indigo",onClick:()=>o("md-dark-indigo","dark")}),a.jsx(b,{img:"/images/layout/themes/md-dark-deeppurple.svg",imgAlt:"Material Dark DeepPurple",onClick:()=>o("md-dark-deeppurple","dark")})]}),a.jsx("h5",{children:"Material Design Compact"}),a.jsxs("div",{className:"grid",children:[a.jsx(b,{img:"/images/layout/themes/md-light-indigo.svg",imgAlt:"Material Light Indigo",onClick:()=>o("mdc-light-indigo","light")}),a.jsx(b,{img:"/images/layout/themes/md-light-deeppurple.svg",imgAlt:"Material Light Deep Purple",onClick:()=>o("mdc-light-deeppurple","light")}),a.jsx(b,{img:"/images/layout/themes/md-dark-indigo.svg",imgAlt:"Material Dark Indigo",onClick:()=>o("mdc-dark-indigo","dark")}),a.jsx(b,{img:"/images/layout/themes/md-dark-deeppurple.svg",imgAlt:"Material Dark Deep Purple",onClick:()=>o("mdc-dark-deeppurple","dark")})]}),a.jsx("h5",{children:"Tailwind"}),a.jsx("div",{className:"grid",children:a.jsx(b,{img:"/images/layout/themes/tailwind-light.png",imgAlt:"Tailwind Light",onClick:()=>o("tailwind-light","light")})}),a.jsx("h5",{children:"Fluent UI"}),a.jsx("div",{className:"grid",children:a.jsx(b,{img:"/images/layout/themes/fluent-light.png",imgAlt:"Fluent Light",onClick:()=>o("fluent-light","light")})}),a.jsx("h5",{children:"PrimeOne Design - 2022"}),a.jsxs("div",{className:"grid",children:[a.jsx(b,{img:"/images/layout/themes/lara-light-indigo.png",imgAlt:"Lara Light Indigo",onClick:()=>o("lara-light-indigo","light")}),a.jsx(b,{img:"/images/layout/themes/lara-light-blue.png",imgAlt:"Lara Light Blue",onClick:()=>o("lara-light-blue","light")}),a.jsx(b,{img:"/images/layout/themes/lara-light-purple.png",imgAlt:"Lara Light Purple",onClick:()=>o("lara-light-purple","light")}),a.jsx(b,{img:"/images/layout/themes/lara-light-teal.png",imgAlt:"Lara Light Teal",onClick:()=>o("lara-light-teal","light")}),a.jsx(b,{img:"/images/layout/themes/lara-dark-indigo.png",imgAlt:"Lara Dark Indigo",onClick:()=>o("lara-dark-indigo","dark")}),a.jsx(b,{img:"/images/layout/themes/lara-dark-blue.png",imgAlt:"Lara Dark Blue",onClick:()=>o("lara-dark-blue","dark")}),a.jsx(b,{img:"/images/layout/themes/lara-dark-purple.png",imgAlt:"Lara Dark Purple",onClick:()=>o("lara-dark-purple","dark")}),a.jsx(b,{img:"/images/layout/themes/lara-dark-teal.png",imgAlt:"Lara Dark Teal",onClick:()=>o("lara-dark-teal","dark")})]}),a.jsx("h5",{children:"PrimeOne Design - 2021"}),a.jsxs("div",{className:"grid",children:[a.jsx(b,{img:"/images/layout/themes/saga-blue.png",imgAlt:"Saga Blue",onClick:()=>o("saga-blue","light")}),a.jsx(b,{img:"/images/layout/themes/saga-green.png",imgAlt:"Saga Green",onClick:()=>o("saga-green","light")}),a.jsx(b,{img:"/images/layout/themes/saga-orange.png",imgAlt:"Saga Orange",onClick:()=>o("saga-orange","dark")}),a.jsx(b,{img:"/images/layout/themes/saga-purple.png",imgAlt:"Saga Purple",onClick:()=>o("saga-purple","light")}),a.jsx(b,{img:"/images/layout/themes/vela-blue.png",imgAlt:"Vela Blue",onClick:()=>o("vela-blue","dark")}),a.jsx(b,{img:"/images/layout/themes/vela-green.png",imgAlt:"Vela Green",onClick:()=>o("vela-green","dark")}),a.jsx(b,{img:"/images/layout/themes/vela-orange.png",imgAlt:"Vela Orange",onClick:()=>o("vela-orange","dark")}),a.jsx(b,{img:"/images/layout/themes/vela-purple.png",imgAlt:"Vela Purple",onClick:()=>o("vela-purple","dark")}),a.jsx(b,{img:"/images/layout/themes/arya-blue.png",imgAlt:"Arya Blue",onClick:()=>o("arya-blue","dark")}),a.jsx(b,{img:"/images/layout/themes/arya-green.png",imgAlt:"Arya Green",onClick:()=>o("arya-green","dark")}),a.jsx(b,{img:"/images/layout/themes/arya-orange.png",imgAlt:"Arya Orange",onClick:()=>o("arya-orange","dark")}),a.jsx(b,{img:"/images/layout/themes/arya-purple.png",imgAlt:"Arya Purple",onClick:()=>o("arya-purple","dark")})]})]})]})},Ot=({children:n,user:t})=>{const{layoutConfig:e,layoutState:i,setLayoutState:r}=s.useContext(Q),{setRipple:l}=s.useContext(Z),c=s.useRef(null),f=s.useRef(null),[g,j]=se({type:"click",listener:p=>{var y,m,d,S,N,R;!((y=f.current)!=null&&y.isSameNode(p.target)||(m=f.current)!=null&&m.contains(p.target)||(S=(d=c.current)==null?void 0:d.menubutton)!=null&&S.isSameNode(p.target)||(R=(N=c.current)==null?void 0:N.menubutton)!=null&&R.contains(p.target))&&o()}}),x=route().current();s.useEffect(()=>{o(),P()},[x]);const[k,h]=se({type:"click",listener:p=>{var y,m,d,S,N,R,D,_;!((m=(y=c.current)==null?void 0:y.topbarmenu)!=null&&m.isSameNode(p.target)||(S=(d=c.current)==null?void 0:d.topbarmenu)!=null&&S.contains(p.target)||(R=(N=c.current)==null?void 0:N.topbarmenubutton)!=null&&R.isSameNode(p.target)||(_=(D=c.current)==null?void 0:D.topbarmenubutton)!=null&&_.contains(p.target))&&P()}}),o=()=>{r(p=>({...p,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),j(),I()},P=()=>{r(p=>({...p,profileSidebarVisible:!1})),h()},O=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},I=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(new RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};ee(()=>{l(e.ripple)}),s.useEffect(()=>{(i.overlayMenuActive||i.staticMenuMobileActive)&&g(),i.staticMenuMobileActive&&O()},[i.overlayMenuActive,i.staticMenuMobileActive]),s.useEffect(()=>{i.profileSidebarVisible&&k()},[i.profileSidebarVisible]),je(()=>{j(),h()});const u=E("layout-wrapper",{"layout-overlay":e.menuMode==="overlay","layout-static":e.menuMode==="static","layout-static-inactive":i.staticMenuDesktopInactive&&e.menuMode==="static","layout-overlay-active":i.overlayMenuActive,"layout-mobile-active":i.staticMenuMobileActive,"p-input-filled":e.inputStyle==="filled","p-ripple-disabled":!e.ripple});return a.jsx(Ge.Fragment,{children:a.jsxs("div",{className:u,children:[a.jsx(Je,{user:t,children:a.jsx(Ce,{ref:c})}),a.jsx("div",{ref:f,className:"layout-sidebar bg-violet-300",children:a.jsx(rt,{})}),a.jsx("div",{className:"layout-main-container",children:a.jsx("div",{className:"layout-main",children:n})}),a.jsx(Pt,{}),a.jsx("div",{className:"layout-mask"})]})})},At=Ot;export{At as L};
