(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),o=r(a("VbXa")),l=r(a("8OQS")),d=r(a("pVnL")),s=r(a("FdF9")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),g=function(e){var t=c(e),a=m(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},r&&s.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&s.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+s+o+l+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=s.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,l=s.default.createElement(z,(0,d.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?s.default.createElement("picture",null,i(r),l):l})),z=s.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},h,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=s.default.createRef(),a.placeholderRef=t.placeholderRef||s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,L=e.draggable,R=p||g;if(!R)return null;var V=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:V?1:0,transition:P?"opacity "+v+"ms":"none"},l),N="boolean"==typeof b?"lightgray":b,W={transitionDelay:v+"ms"},H=(0,d.default)({opacity:this.state.imgLoaded?0:1},P&&W,l,f),C={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:w},T=this.state.isHydrated?h(R):R[0];if(p)return s.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},s.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),N&&s.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&W)}),T.base64&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:C,imageVariants:R,generateSources:O}),T.tracedSVG&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:C,imageVariants:R,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,E(R),s.default.createElement(z,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:L})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:S},T,{imageVariants:R}))}}));if(g){var B=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete B.display,s.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},N&&s.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},P&&W)}),T.base64&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:C,imageVariants:R,generateSources:O}),T.tracedSVG&&s.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:C,imageVariants:R,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,E(R),s.default.createElement(z,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:L})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:S},T,{imageVariants:R}))}}))}return null},t}(s.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function N(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}V.propTypes={resolutions:P,sizes:k,fixed:N(u.default.oneOfType([P,u.default.arrayOf(P)])),fluid:N(u.default.oneOfType([k,u.default.arrayOf(k)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var W=V;t.default=W},Bl7J:function(e,t,a){"use strict";var r=a("FdF9"),i=a("dI71"),n=a("ucgz"),o=a("Y8Tw"),l=a("JB2W"),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={hasError:!1},a}return Object(i.a)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.render=function(){var e=this.props.classes;return this.state.hasError?r.default.createElement("main",{className:e.root},r.default.createElement(o.b,null,"Uh oh, something went wrong."),r.default.createElement(o.a,{bold:!0},"It's not you, it's us."),r.default.createElement(o.a,null,"Please try ",r.default.createElement(l.a,{onClick:function(){return window.location.reload()}},"refreshing the page"),"."),r.default.createElement(o.a,null,"Still having issues? Let me know ",r.default.createElement(l.a,{url:"https://twitter.com/davwheat_"},"on Twitter"),".")):this.props.children},t}(r.default.Component),s=Object(n.a)((function(){return{root:{padding:32,maxWidth:900,margin:"auto"}}}))(d),u=(a("o5L7"),a("jx6z"),a("qVaI"),a("PFoT"),a("Wbzz")),c=a("RD7I"),f=a("sOrj"),m=a("iuhU"),h=Object(c.a)({separator:{display:"inline-block",verticalAlign:"middle",transformOrigin:"50% 50%",transform:"scale(1.75)",marginLeft:8,marginRight:8,color:f.b.dark},light:{color:f.b.offWhite}});function p(e){var t=e.color,a=h();return r.default.createElement("span",{className:Object(m.a)(a.separator,"light"===t&&a.light)},"•")}var g=a("rxcZ"),b=a("kiQV");function v(){var e=Object(u.useStaticQuery)("1552981879").currentBuildDate.currentDate;return r.default.createElement(g.a,null,r.default.createElement(o.a,null,"Made with love by David Wheatley - © ",(new Date).getFullYear()," All Rights Reserved"),r.default.createElement(o.a,null,r.default.createElement(l.a,{target:"_blank",url:"https://github.com/davwheat"},"GitHub"),r.default.createElement(p,null),r.default.createElement(l.a,{target:"_blank",url:"https://twitter.com/davwheat_"},"Twitter"),r.default.createElement(p,null),r.default.createElement(l.a,{target:"_blank",url:"mailto:hi@davwheat.dev"},"Email")),r.default.createElement(o.c,null,"All names on this website are real. All identification with actual persons is intended or should be inferred."),r.default.createElement(o.c,null,"Version ",b.a," - last updated ",e))}t.a=function(e){var t=e.children;return r.default.createElement(s,null,r.default.createElement("main",null,t),r.default.createElement(v,null))}},"H+nd":function(e,t,a){"use strict";function r(e){window.scroll({top:e,behavior:"smooth"})}r.ID=function(e){if(!e)return!1;var t=document.getElementById(e);return!!t&&(r.Element(t),!0)},r.Element=function(e){if(!e)return!1;var t=e.getBoundingClientRect(),a=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return r(t.top+window.scrollY+t.height/2-a/2),!0},r.Ref=function(e){var t=e.current;return!!t&&(r.Element(t),!0)},t.a=r},JB2W:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("RD7I"),i=a("iuhU"),n=a("FdF9"),o=a("sOrj"),l=a("H+nd"),d=a("Wbzz"),s=Object(r.a)({link:{color:o.b.toryPrimary,display:"inline-block",borderBottom:"2px solid "+o.b.toryPrimary,lineHeight:1,cursor:"pointer",textDecoration:"none",fontWeight:600}});function u(e){var t=e.internal,a=e.url,r=e.title,o=e.onClick,u=e.className,c=e.id,f=e.children,m=e.textColor,h=e.borderColor,p=e.color,g=e.target,b=s(),v="string"==typeof a&&a.startsWith("#"),y={className:Object(i.a)(b.link,u),href:a,onClick:v?function(e){l.a.ID(a.substr(1)),e.preventDefault(),"function"==typeof o&&o()}:o,style:{color:m||p,borderBottomColor:h||p},rel:"noopener noreferrer",title:r,id:c,target:g};return t?n.default.createElement(d.Link,Object.assign({to:y.href},y),f):n.default.createElement("a",y,f)}},M8VL:function(e,t,a){e.exports={shout:"shout-module--shout--q7J1t"}},PFoT:function(e,t,a){},Y8Tw:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return m}));var r=a("RD7I"),i=a("iuhU"),n=a("FdF9"),o=Object(r.a)({root:{paddingBottom:12,lineHeight:1.4},noPad:{paddingBottom:0},bold:{fontWeight:600}});function l(e){var t=e.children,a=e.className,r=e.noPadding,l=e.inline,d=e.bold,s=o(),u={className:Object(i.a)(s.root,r&&s.noPad,d&&s.bold,a)};return l?n.default.createElement("span",u,t):n.default.createElement("p",u,t)}a("hVib"),Object(r.a)({noPad:{paddingBottom:0}});var d=a("M8VL"),s=a.n(d),u=Object(r.a)({noPad:{paddingBottom:0}});function c(e){var t=e.children,a=e.className,r=e.noPadding,o=u();return n.default.createElement("h1",{className:Object(i.a)(s.a.shout,r&&o.noPad,a)},t)}var f=Object(r.a)({root:{paddingBottom:6,lineHeight:1.2,fontSize:16},noPad:{paddingBottom:0}});function m(e){var t=e.children,a=e.className,r=e.noPadding,o=f();return n.default.createElement("p",{className:Object(i.a)(o.root,r&&o.noPad,a)},t)}},hVib:function(e,t,a){e.exports={megaphone:"megaphone-module--megaphone--2czE7"}},jx6z:function(e,t,a){},kiQV:function(e){e.exports=JSON.parse('{"a":"1.0.1"}')},o5L7:function(e,t,a){},qVaI:function(e,t,a){},rxcZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("zLVn"),i=a("RD7I"),n=a("iuhU"),o=a("FdF9"),l=Object(i.a)({root:{display:"flex",padding:"0 32px",alignItems:"center",flexDirection:"column"},space:{paddingTop:32,paddingBottom:32},inner:{maxWidth:900,width:"100%"},noMaxWidth:{maxWidth:"none"}});function d(e){var t=e.children,a=e.noSpacing,i=e.className,d=e.noMaxWidth,s=e.innerClassName,u=Object(r.a)(e,["children","noSpacing","className","noMaxWidth","innerClassName"]),c=l();return o.default.createElement("section",Object.assign({className:Object(n.a)(c.root,!a&&c.space,i)},u),o.default.createElement("div",{className:Object(n.a)(c.inner,d&&c.noMaxWidth,s)},t))}},sOrj:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var r=Object.freeze({toryPrimary:"#0087dc",dark:"#203647",offWhite:"#fff"}),i=Object.freeze({upTo:{large:"(max-width: 767px)",medium:"(max-width: 579px)"},downTo:{medium:"(min-width: 768px)",small:"(min-width: 580px)"}})},vrFN:function(e,t,a){"use strict";var r=a("FdF9"),i=a("1zJl");function n(e){var t=e.title;return"undefined"==typeof window?null:r.default.createElement(i.HeadProvider,null,r.default.createElement(i.Title,null,t?t+" | BoJo Briefing Bingo":"BoJo Briefing Bingo"))}n.defaultProps={meta:[],description:""},t.a=n},yLpj:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(r){"object"==typeof window&&(a=window)}e.exports=a}}]);
//# sourceMappingURL=commons-544df9b90214148d3a18.js.map