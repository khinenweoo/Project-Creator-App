import{j as g,r as i,O as Z,P as Ne,U as Ft,c as X,b as te,D as u,Z as de,R as _,d as Tt,I as ze,W as Nt}from"./app-5858095f.js";import{B as He,I as Me,C as Le,u as Ht,e as Mt,a as Lt,f as $t,h as le,c as $e,b as pe,d as Bt,E as Vt,P as At,i as Ut,R as _e}from"./button.esm-0c1e1465.js";import{I as Xt}from"./InputError-a243d388.js";import{I as Zt}from"./InputLabel-d2b9abb6.js";import{C as Yt,T as Gt}from"./index.esm-b3326b5f.js";import{I as Kt}from"./inputtext.esm-f681e55a.js";function je({className:n="",disabled:r,children:e,...o}){return g.jsx(He,{...o,className:`bg-red-600 border border-transparent rounded-md font-medium text-white capitalize tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${r&&"opacity-25"} `+n,disabled:r,children:e})}function Jt({type:n="button",className:r="",disabled:e,children:o,...t}){return g.jsx(He,{...t,type:n,className:`bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${e&&"opacity-25"} `+r,disabled:e,children:o})}function me(){return me=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},me.apply(this,arguments)}var Be=i.memo(i.forwardRef(function(n,r){var e=Me.getPTI(n);return i.createElement("svg",me({ref:r,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"}))}));Be.displayName="WindowMaximizeIcon";function ge(){return ge=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},ge.apply(this,arguments)}var Ve=i.memo(i.forwardRef(function(n,r){var e=Me.getPTI(n);return i.createElement("svg",ge({ref:r,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"}))}));Ve.displayName="WindowMinimizeIcon";function ve(){return ve=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},ve.apply(this,arguments)}function re(n){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},re(n)}function be(n,r){(r==null||r>n.length)&&(r=n.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=n[e];return o}function Wt(n){if(Array.isArray(n))return be(n)}function qt(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ae(n,r){if(n){if(typeof n=="string")return be(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return be(n,r)}}function Qt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function en(n){return Wt(n)||qt(n)||Ae(n)||Qt()}function tn(n,r){if(re(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,r||"default");if(re(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function nn(n){var r=tn(n,"string");return re(r)==="symbol"?r:String(r)}function ye(n,r,e){return r=nn(r),r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function rn(n){if(Array.isArray(n))return n}function an(n,r){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var o,t,S,v,I=[],f=!0,F=!1;try{if(S=(e=e.call(n)).next,r===0){if(Object(e)!==e)return;f=!1}else for(;!(f=(o=S.call(e)).done)&&(I.push(o.value),I.length!==r);f=!0);}catch(T){F=!0,t=T}finally{try{if(!f&&e.return!=null&&(v=e.return(),Object(v)!==v))return}finally{if(F)throw t}}return I}}function on(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(n,r){return rn(n)||an(n,r)||Ae(n,r)||on()}var ln="",ne=Le.extend({defaultProps:{__TYPE:"FocusTrap",children:void 0},css:{styles:ln},getProps:function(r){return Z.getMergedProps(r,ne.defaultProps)},getOtherProps:function(r){return Z.getDiffProps(r,ne.defaultProps)}});function ke(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);r&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,o)}return e}function sn(n){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?ke(Object(e),!0).forEach(function(o){ye(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):ke(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var cn=_.memo(_.forwardRef(function(n,r){var e=_.useRef(null),o=_.useRef(null),t=_.useRef(null),S=_.useContext(Ne),v=ne.getProps(n,S),I={props:v};Ut(ne.css.styles,{name:"focustrap"});var f=ne.setMetaData(sn({},I));f.ptm,_.useImperativeHandle(r,function(){return{props:v,getInk:function(){return o.current},getTarget:function(){return e.current}}}),$e(function(){v.disabled||(e.current=F(),T(e.current))});var F=function(){return o.current&&o.current.parentElement},T=function(b){var h=v||{},y=h.autoFocusSelector,w=y===void 0?"":y,E=h.firstFocusableSelector,c=E===void 0?"":E,R=h.autoFocus,B=R===void 0?!1:R,j="".concat(x(w)),G="[autofocus]".concat(j,", [data-pc-autofocus='true']").concat(j),V=u.getFirstFocusableElement(b,G);B&&!V&&(V=u.getFirstFocusableElement(b,x(c))),u.focus(V)},x=function(b){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(b??"")},N=function(b){var h,y=b.currentTarget,w=b.relatedTarget,E=w===y.$_pfocustrap_lasthiddenfocusableelement||!((h=e.current)!==null&&h!==void 0&&h.contains(w))?u.getFirstFocusableElement(y.parentElement,x(y.$_pfocustrap_focusableselector)):y.$_pfocustrap_lasthiddenfocusableelement;u.focus(E)},Y=function(b){var h,y=b.currentTarget,w=b.relatedTarget,E=w===y.$_pfocustrap_firsthiddenfocusableelement||!((h=e.current)!==null&&h!==void 0&&h.contains(w))?u.getLastFocusableElement(y.parentElement,x(y.$_pfocustrap_focusableselector)):y.$_pfocustrap_firsthiddenfocusableelement;u.focus(E)},H=function(){var b=v||{},h=b.tabIndex,y=h===void 0?0:h,w=function(B,j){return _.createElement("span",{ref:j==="firstfocusableelement"?o:t,className:"p-hidden-accessible p-hidden-focusable",tabIndex:y,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:B,"data-pc-section":j})},E=w(N,"firstfocusableelement"),c=w(Y,"lastfocusableelement");return E.ref.current&&c.ref.current&&(E.ref.current.$_pfocustrap_lasthiddenfocusableelement=c.ref.current,c.ref.current.$_pfocustrap_firsthiddenfocusableelement=E.ref.current),_.createElement(_.Fragment,null,E,v.children,c)};return H()})),un=cn;function Fe(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);r&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,o)}return e}function dn(n){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?Fe(Object(e),!0).forEach(function(o){ye(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Fe(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var pn={closeButtonIcon:"p-dialog-header-close-icon",closeButton:"p-dialog-header-icon p-dialog-header-close p-link",maximizableIcon:"p-dialog-header-maximize-icon",maximizableButton:"p-dialog-header-icon p-dialog-header-maximize p-link",header:function(r){var e=r.props;return X("p-dialog-header",e.headerClassName)},headerTitle:"p-dialog-title",headerIcons:"p-dialog-header-icons",content:function(r){var e=r.props;return X("p-dialog-content",e.contentClassName)},footer:function(r){var e=r.props;return X("p-dialog-footer",e.footerClassName)},mask:function(r){var e=r.props,o=r.maskVisibleState,t=["center","left","right","top","top-left","top-right","bottom","bottom-left","bottom-right"],S=t.find(function(v){return v===e.position||v.replace("-","")===e.position});return X("p-dialog-mask",S?"p-dialog-".concat(S):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-dialog-visible":o,"p-dialog-draggable":e.draggable,"p-dialog-resizable":e.resizable},e.maskClassName)},root:function(r){var e=r.props,o=r.maximized,t=r.context;return X("p-dialog p-component",{"p-dialog-rtl":e.rtl,"p-dialog-maximized":o,"p-dialog-default":!o,"p-input-filled":t&&t.inputStyle==="filled"||te.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||te.ripple===!1})},transition:"p-dialog"},fn=`
@layer primereact {
    .p-dialog-mask {
        background-color: transparent;
        transition-property: background-color;
    }

    .p-dialog-visible {
        display: flex;
    }

    .p-dialog-mask.p-component-overlay {
        pointer-events: auto;
    }

    .p-dialog {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        max-height: 90%;
        transform: scale(1);
        position: relative;
    }

    .p-dialog-content {
        overflow-y: auto;
        flex-grow: 1;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .p-dialog-footer {
        flex-shrink: 0;
    }

    .p-dialog .p-dialog-header-icons {
        display: flex;
        align-items: center;
        align-self: flex-start;
        flex-shrink: 0;
    }

    .p-dialog .p-dialog-header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .p-dialog .p-dialog-title {
        flex-grow: 1;
    }

    /* Fluid */
    .p-fluid .p-dialog-footer .p-button {
        width: auto;
    }

    /* Animation */
    /* Center */
    .p-dialog-enter {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-dialog-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-dialog-enter-done {
        transform: none;
    }

    .p-dialog-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Top, Bottom, Left, Right, Top* and Bottom* */
    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-top-left .p-dialog,
    .p-dialog-top-right .p-dialog,
    .p-dialog-bottom-left .p-dialog,
    .p-dialog-bottom-right .p-dialog {
        margin: 0.75em;
    }

    .p-dialog-top .p-dialog-enter,
    .p-dialog-top .p-dialog-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter,
    .p-dialog-bottom .p-dialog-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter,
    .p-dialog-left .p-dialog-exit-active,
    .p-dialog-top-left .p-dialog-enter,
    .p-dialog-top-left .p-dialog-exit-active,
    .p-dialog-bottom-left .p-dialog-enter,
    .p-dialog-bottom-left .p-dialog-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter,
    .p-dialog-right .p-dialog-exit-active,
    .p-dialog-top-right .p-dialog-enter,
    .p-dialog-top-right .p-dialog-exit-active,
    .p-dialog-bottom-right .p-dialog-enter,
    .p-dialog-bottom-right .p-dialog-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-top-left .p-dialog-enter-active,
    .p-dialog-bottom-left .p-dialog-enter-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-top-right .p-dialog-enter-active,
    .p-dialog-bottom-right .p-dialog-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-exit-active,
    .p-dialog-bottom .p-dialog-exit-active,
    .p-dialog-left .p-dialog-exit-active,
    .p-dialog-top-left .p-dialog-exit-active,
    .p-dialog-bottom-left .p-dialog-exit-active,
    .p-dialog-right .p-dialog-exit-active,
    .p-dialog-top-right .p-dialog-exit-active,
    .p-dialog-bottom-right .p-dialog-exit-active {
        transition: all 0.3s ease-out;
    }

    /* Maximize */
    .p-dialog-maximized {
        transition: none;
        transform: none;
        margin: 0;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-confirm-dialog .p-dialog-content {
        display: flex;
        align-items: center;
    }

    /* Resizable */
    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-draggable .p-dialog-header {
        cursor: move;
    }
}
`,mn={mask:function(r){var e=r.props;return dn({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"||e.position==="top-left"||e.position==="bottom-left"?"flex-start":e.position==="right"||e.position==="top-right"||e.position==="bottom-right"?"flex-end":"center",alignItems:e.position==="top"||e.position==="top-left"||e.position==="top-right"?"flex-start":e.position==="bottom"||e.position==="bottom-left"||e.position==="bottom-right"?"flex-end":"center",pointerEvents:!e.modal&&"none"},e.maskStyle)}},se=Le.extend({defaultProps:{__TYPE:"Dialog",__parentMetadata:null,appendTo:null,ariaCloseIconLabel:null,baseZIndex:0,blockScroll:!1,breakpoints:null,className:null,closable:!0,closeIcon:null,closeOnEscape:!0,content:null,contentClassName:null,contentStyle:null,dismissableMask:!1,draggable:!0,focusOnShow:!0,footer:null,footerClassName:null,header:null,headerClassName:null,headerStyle:null,icons:null,id:null,keepInViewport:!0,maskClassName:null,maskStyle:null,maximizable:!1,maximizeIcon:null,maximized:!1,minX:0,minY:0,minimizeIcon:null,modal:!0,onClick:null,onDrag:null,onDragEnd:null,onDragStart:null,onHide:null,onMaskClick:null,onMaximize:null,onResize:null,onResizeEnd:null,onResizeStart:null,onShow:null,position:"center",resizable:!0,rtl:!1,showHeader:!0,style:null,transitionOptions:null,visible:!1,children:void 0},css:{classes:pn,styles:fn,inlineStyles:mn}});function Te(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);r&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,o)}return e}function fe(n){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?Te(Object(e),!0).forEach(function(o){ye(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Te(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}var Ue=i.forwardRef(function(n,r){var e=Ht(),o=i.useContext(Ne),t=se.getProps(n,o),S=t.id?t.id:Ft(),v=i.useState(S),I=$(v,2),f=I[0];I[1];var F=i.useState(!1),T=$(F,2),x=T[0],N=T[1],Y=i.useState(!1),H=$(Y,2),C=H[0],b=H[1],h=i.useState(t.maximized),y=$(h,2),w=y[0],E=y[1],c=i.useRef(null),R=i.useRef(null),B=i.useRef(null),j=i.useRef(null),G=i.useRef(null),V=i.useRef(null),K=i.useRef(null),J=i.useRef(!1),ae=i.useRef(!1),A=i.useRef(null),U=i.useRef(null),W=i.useRef(null),he=i.useRef(S),ce=i.useRef(null),q=t.onMaximize?t.maximized:w,xe=C&&(t.blockScroll||t.maximizable&&q),Ce=t.closable&&t.closeOnEscape&&C,Ee=Mt("dialog",Ce),oe=se.setMetaData(fe(fe({props:t},t.__parentMetadata),{},{state:{id:f,maximized:q,containerVisible:x}})),D=oe.ptm,O=oe.cx,Xe=oe.sx,Se=oe.isUnstyled;Lt(se.css.styles,Se,{name:"dialog"}),$t({callback:function(a){ie(a)},when:Ce&&Ee,priority:[Vt.DIALOG,Ee]});var Ze=le({type:"mousemove",target:function(){return window.document},listener:function(a){return pt(a)}}),we=$(Ze,2),Ye=we[0],Ge=we[1],Ke=le({type:"mouseup",target:function(){return window.document},listener:function(a){return ft(a)}}),De=$(Ke,2),Je=De[0],We=De[1],qe=le({type:"mousemove",target:function(){return window.document},listener:function(a){return ct(a)}}),Oe=$(qe,2),Qe=Oe[0],et=Oe[1],tt=le({type:"mouseup",target:function(){return window.document},listener:function(a){return ut(a)}}),Re=$(tt,2),nt=Re[0],rt=Re[1],ie=function(a){t.onHide(),a.preventDefault()},at=function(){var a=document.activeElement,s=a&&c.current&&c.current.contains(a);!s&&t.closable&&t.showHeader&&K.current&&K.current.focus()},ot=function(a){B.current=a.target,t.onPointerDown&&t.onPointerDown(a)},it=function(a){t.dismissableMask&&t.modal&&R.current===a.target&&!B.current&&ie(a),t.onMaskClick&&t.onMaskClick(a),B.current=null},lt=function(a){t.onMaximize?t.onMaximize({originalEvent:a,maximized:!q}):E(function(s){return!s}),a.preventDefault()},st=function(a){u.hasClass(a.target,"p-dialog-header-icon")||u.hasClass(a.target.parentElement,"p-dialog-header-icon")||t.draggable&&(J.current=!0,A.current=a.pageX,U.current=a.pageY,c.current.style.margin="0",u.addClass(document.body,"p-unselectable-text"),t.onDragStart&&t.onDragStart(a))},ct=function(a){if(J.current){var s=u.getOuterWidth(c.current),d=u.getOuterHeight(c.current),p=a.pageX-A.current,k=a.pageY-U.current,P=c.current.getBoundingClientRect(),m=P.left+p,z=P.top+k,Q=u.getViewport(),ee=getComputedStyle(c.current),M=parseFloat(ee.marginLeft),L=parseFloat(ee.marginTop);c.current.style.position="fixed",t.keepInViewport?(m>=t.minX&&m+s<Q.width&&(A.current=a.pageX,c.current.style.left=m-M+"px"),z>=t.minY&&z+d<Q.height&&(U.current=a.pageY,c.current.style.top=z-L+"px")):(A.current=a.pageX,c.current.style.left=m-M+"px",U.current=a.pageY,c.current.style.top=z-L+"px"),t.onDrag&&t.onDrag(a)}},ut=function(a){J.current&&(J.current=!1,u.removeClass(document.body,"p-unselectable-text"),t.onDragEnd&&t.onDragEnd(a))},dt=function(a){t.resizable&&(ae.current=!0,A.current=a.pageX,U.current=a.pageY,u.addClass(document.body,"p-unselectable-text"),t.onResizeStart&&t.onResizeStart(a))},Ie=function(a,s,d){!d&&(d=u.getViewport());var p=parseInt(a);return/^(\d+|(\.\d+))(\.\d+)?%$/.test(a)?p*(d[s]/100):p},pt=function(a){if(ae.current){var s=a.pageX-A.current,d=a.pageY-U.current,p=u.getOuterWidth(c.current),k=u.getOuterHeight(c.current),P=c.current.getBoundingClientRect(),m=u.getViewport(),z=!parseInt(c.current.style.top)||!parseInt(c.current.style.left),Q=Ie(c.current.style.minWidth,"width",m),ee=Ie(c.current.style.minHeight,"height",m),M=p+s,L=k+d;z&&(M=M+s,L=L+d),(!Q||M>Q)&&P.left+M<m.width&&(c.current.style.width=M+"px"),(!ee||L>ee)&&P.top+L<m.height&&(c.current.style.height=L+"px"),A.current=a.pageX,U.current=a.pageY,t.onResize&&t.onResize(a)}},ft=function(a){ae.current&&(ae.current=!1,u.removeClass(document.body,"p-unselectable-text"),t.onResizeEnd&&t.onResizeEnd(a))},mt=function(){c.current.style.position="",c.current.style.left="",c.current.style.top="",c.current.style.margin=""},gt=function(){c.current.setAttribute(he.current,"")},vt=function(){t.onShow&&t.onShow(),t.focusOnShow&&at(),ht()},bt=function(){t.modal&&!Se()&&u.addClass(R.current,"p-component-overlay-leave")},yt=function(){J.current=!1,de.clear(R.current),N(!1),Pe(),u.focus(ce.current),ce.current=null},ht=function(){Ct()},Pe=function(){Et()},xt=function(){var a=document.primeDialogParams&&document.primeDialogParams.some(function(s){return s.hasBlockScroll});a?u.blockBodyScroll():u.unblockBodyScroll()},ue=function(a){if(a&&C){var s={id:f,hasBlockScroll:xe};document.primeDialogParams||(document.primeDialogParams=[]);var d=document.primeDialogParams.findIndex(function(p){return p.id===f});d===-1?document.primeDialogParams=[].concat(en(document.primeDialogParams),[s]):document.primeDialogParams=document.primeDialogParams.toSpliced(d,1,s)}else document.primeDialogParams=document.primeDialogParams&&document.primeDialogParams.filter(function(p){return p.id!==f});xt()},Ct=function(){t.draggable&&(Qe(),nt()),t.resizable&&(Ye(),Je())},Et=function(){et(),rt(),Ge(),We()},St=function(){W.current=u.createInlineStyle(o&&o.nonce||te.nonce,o&&o.styleContainer);var a="";for(var s in t.breakpoints)a=a+`
                @media screen and (max-width: `.concat(s,`) {
                     [data-pc-name="dialog"][`).concat(he.current,`] {
                        width: `).concat(t.breakpoints[s],` !important;
                    }
                }
            `);W.current.innerHTML=a},wt=function(){W.current=u.removeInlineStyle(W.current)};$e(function(){ue(!0),t.visible&&N(!0)}),i.useEffect(function(){return t.breakpoints&&St(),function(){wt()}},[t.breakpoints]),pe(function(){t.visible&&!x&&N(!0),t.visible!==C&&x&&b(t.visible),t.visible&&(ce.current=document.activeElement)},[t.visible,x]),pe(function(){x&&(de.set("modal",R.current,o&&o.autoZIndex||te.autoZIndex,t.baseZIndex||o&&o.zIndex.modal||te.zIndex.modal),b(!0))},[x]),pe(function(){ue(!0)},[xe,C]),Bt(function(){Pe(),ue(!1),u.removeInlineStyle(W.current),de.clear(R.current)}),i.useImperativeHandle(r,function(){return{props:t,resetPosition:mt,getElement:function(){return c.current},getMask:function(){return R.current},getContent:function(){return j.current},getHeader:function(){return G.current},getFooter:function(){return V.current},getCloseButton:function(){return K.current}}});var Dt=function(){if(t.closable){var a=t.ariaCloseIconLabel||Tt("close"),s=e({className:O("closeButtonIcon"),"aria-hidden":!0},D("closeButtonIcon")),d=t.closeIcon||i.createElement(Gt,s),p=ze.getJSXIcon(d,fe({},s),{props:t}),k=e({ref:K,type:"button",className:O("closeButton"),"aria-label":a,onClick:ie,onKeyDown:function(m){m.key!=="Escape"&&m.stopPropagation()}},D("closeButton"));return i.createElement("button",k,p,i.createElement(_e,null))}return null},Ot=function(){var a,s=e({className:O("maximizableIcon")},D("maximizableIcon"));q?a=t.minimizeIcon||i.createElement(Ve,s):a=t.maximizeIcon||i.createElement(Be,s);var d=ze.getJSXIcon(a,s,{props:t});if(t.maximizable){var p=e({type:"button",className:O("maximizableButton"),onClick:lt},D("maximizableButton"));return i.createElement("button",p,d,i.createElement(_e,null))}return null},Rt=function(){if(t.showHeader){var a=Dt(),s=Ot(),d=Z.getJSXElement(t.icons,t),p=Z.getJSXElement(t.header,t),k=f+"_header",P=e({ref:G,style:t.headerStyle,className:O("header"),onMouseDown:st},D("header")),m=e({id:k,className:O("headerTitle")},D("headerTitle")),z=e({className:O("headerIcons")},D("headerIcons"));return i.createElement("div",P,i.createElement("div",m,p),i.createElement("div",z,d,s,a))}return null},It=function(){var a=f+"_content",s=e({id:a,ref:j,style:t.contentStyle,className:O("content")},D("content"));return i.createElement("div",s,t.children)},Pt=function(){var a=Z.getJSXElement(t.footer,t),s=e({ref:V,className:O("footer")},D("footer"));return a&&i.createElement("div",s,a)},zt=function(){return t.resizable?i.createElement("span",{className:"p-resizable-handle",style:{zIndex:90},onMouseDown:dt}):null},_t=function(){var a,s={header:t.header,content:t.message,message:t==null||(a=t.children)===null||a===void 0||(a=a[1])===null||a===void 0||(a=a.props)===null||a===void 0?void 0:a.children},d={headerRef:G,contentRef:j,footerRef:V,closeRef:K,hide:ie,message:s};return Z.getJSXElement(n.content,d)},jt=function(){var a=Rt(),s=It(),d=Pt(),p=zt();return i.createElement(i.Fragment,null,a,s,d,p)},kt=function(){var a=f+"_header",s=f+"_content",d={enter:t.position==="center"?150:300,exit:t.position==="center"?150:300},p=e({ref:R,style:Xe("mask"),className:O("mask"),onPointerUp:it},D("mask")),k=e({ref:c,id:f,className:X(t.className,O("root",{props:t,maximized:q,context:o})),style:t.style,onClick:t.onClick,role:"dialog","aria-labelledby":a,"aria-describedby":s,"aria-modal":t.modal,onPointerDown:ot},se.getOtherProps(t),D("root")),P=e({classNames:O("transition"),timeout:d,in:C,options:t.transitionOptions,unmountOnExit:!0,onEnter:gt,onEntered:vt,onExiting:bt,onExited:yt},D("transition")),m=null;n!=null&&n.content?m=_t():m=jt();var z=i.createElement("div",p,i.createElement(Yt,ve({nodeRef:c},P),i.createElement("div",k,i.createElement(un,{autoFocus:t.focusOnShow},m))));return i.createElement(At,{element:z,appendTo:t.appendTo,visible:!0})};return x&&kt()});Ue.displayName="Dialog";function Cn({className:n=""}){const[r,e]=i.useState(!1),o=i.useRef(),{data:t,setData:S,delete:v,processing:I,reset:f,errors:F}=Nt({password:""}),T=()=>{e(!0)},x=H=>{H.preventDefault(),v(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>N(),onError:()=>o.current.focus(),onFinish:()=>f()})},N=()=>{e(!1),f()},Y=g.jsx("h2",{className:"text-lg font-medium text-gray-900 pl-4 pt-2 mb-0",children:"Are you sure you want to delete your account?"});return g.jsxs("section",{className:`space-y-6 ${n}`,children:[g.jsxs("header",{children:[g.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),g.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),g.jsx(je,{onClick:T,className:"mt-2",children:"Delete Account"}),g.jsx(Ue,{className:"px-6",header:Y,visible:r,style:{width:"50vw"},onHide:()=>e(!1),children:g.jsxs("form",{onSubmit:x,className:"px-4",children:[g.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),g.jsxs("div",{className:"mt-4",children:[g.jsx(Zt,{htmlFor:"password",value:"Password",className:"sr-only"}),g.jsx(Kt,{id:"password",type:"password",name:"password",ref:o,value:t.password,onChange:H=>S("password",H.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),g.jsx(Xt,{message:F.password,className:"mt-2"})]}),g.jsxs("div",{className:"mt-6 flex justify-end",children:[g.jsx(Jt,{onClick:N,children:"Cancel"}),g.jsx(je,{className:"ml-3",disabled:I,children:"Delete Account"})]})]})})]})}export{Cn as default};
