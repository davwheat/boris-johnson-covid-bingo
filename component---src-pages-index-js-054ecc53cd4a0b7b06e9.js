(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+QRC":function(e,t,a){"use strict";var n=a("E9nw"),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,o,i,c,s,l,d=!1;t||(t={}),a=t.debug||!1;try{if(i=n(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=r[t.format]||r.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){a&&console.error("unable to copy using execCommand: ",u),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){a&&console.error("unable to copy using clipboardData: ",u),a&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return d}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("FdF9"),r=a("RD7I"),o=a("Y8Tw"),i=a("Bl7J"),c=a("9eSz"),s=a.n(c),l=a("Wbzz");function d(e){var t=Object(l.useStaticQuery)("3603146279").allFile.nodes,a=t[Math.floor(Math.random()*t.length)].childImageSharp.fixed;return n.default.createElement(s.a,Object.assign({fixed:a},e))}var u=a("sOrj"),f=a("wx14"),m=a("aXM8"),p=a("A+CX");function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(m.a)(),r=Object(p.a)({theme:a,name:"MuiUseMediaQuery",props:{}});var o="function"==typeof e?e(a):e;o=o.replace(/^@media( ?)/m,"");var i="undefined"!=typeof window&&void 0!==window.matchMedia,c=Object(f.a)({},r,t),s=c.defaultMatches,l=void 0!==s&&s,d=c.matchMedia,u=void 0===d?i?window.matchMedia:null:d,g=c.noSsr,h=void 0!==g&&g,b=c.ssrMatchMedia,y=void 0===b?null:b,v=n.useState((function(){return h&&i?u(o).matches:y?y(o).matches:l})),w=v[0],x=v[1];return n.useEffect((function(){var e=!0;if(i){var t=u(o),a=function(){e&&x(t.matches)};return a(),t.addListener(a),function(){e=!1,t.removeListener(a)}}}),[o,u,i]),w}var h=a("iuhU"),b=Object(r.a)({root:{width:"100%",padding:"12px 16px",background:u.b.dark,color:u.b.offWhite,fontSize:18},afterHeading:{marginTop:-6},title:{paddingBottom:4},padBottom:{marginBottom:16},alternateBackground:{background:u.b.primaryDark}});function y(e){var t=e.title,a=e.message,r=e.noPadding,i=e.afterHeading,c=e.alternateColor,s=e.innerClassName,l=b();return n.default.createElement("section",{className:Object(h.a)(l.root,!r&&l.padBottom,i&&l.afterHeading,c&&l.alternateBackground)},n.default.createElement("div",{className:s},n.default.createElement(o.a,{className:l.title,bold:!0},t),n.default.createElement(o.a,{noPadding:!0},a)))}function v(){return g(u.a.upTo.medium)?n.default.createElement(y,{title:"Warning",message:"Play BoJo Bingo in landscape or on a larger device for the best experience."}):null}var w=a("rxcZ"),x=["-- FREE SPACE --",'"Good evening"','"Alas"','"It is with a heavy heart"',"*cutting off another speaker/skipping them*",'"Will, unfortunately, die"','"Many loved ones"',"*stammering for over 2 seconds*",'"Hands, face, space"','"Could I have the next slide, please?"','"Long weeks ahead..."',"*calling someone by the wrong name*","*camera operator pans to wrong person*",'"I think we\'ve got about"','"Anything you want to add?"',"*deflecting question about universities*",'"We will be looking very carefully"','"A big sacrifice"',"A train analogy",'"I understand the frustration"','"JVT"','"Nightingale hospitals"','"Oven-ready"',"*contradicting something said earlier that same day*","*standing with crossed legs*","*not actually having a clue about the answer to a question*","*answering a question in the most confusing and long-winded way possible*",'"we will beat this"','"our amazing NHS"','"in this together"','"collective duty"','"to be absolutely clear"',"\"I've said it before, and I'll say it again...\"",'"We will always be guided by the science"','"In answer to your question..." *changes question*',"'collective duty'","'world-beating'","'rampant'","'It brings me great pain...'","'Well Laura...'","*strong look of defeat*","'soldier on'","'working tirelessly'","'Erm... erm... Professor?'","Any random Latin phrase","'no-one wants...'","'not what I wanted'","'unprecedented'","*double fist shake*","'out of control'","'the right thing to do'","'new normal'"],k=Object(r.a)({root:{padding:4,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#000",lineHeight:1.25,position:"relative",cursor:"pointer","&:active, &:focus":{outline:"2px orange solid"},"&[aria-pressed=true]":{background:u.b.toryPrimary,color:"#fff"}}});function E(e){var t=e.isCrossedOut,a=e.description,r=e.onClick,o=k();return n.default.createElement("button",{className:o.root,"aria-pressed":t||"-- FREE SPACE --"===a?"true":"false",onClick:r},a)}var C=a("+QRC"),O=a.n(C);function D(e){for(var t=[],a=0;a<(e||25);a++){var n=0;function r(){n=Math.floor(Math.random()*x.length)}for(r();t.includes(x[n]);)r();t.push(x[n])}return t}var j=a("KQm4");var R=Object.freeze({long:250,medium:200,short:125}),S=R.medium;function B(e,t,a){var n=Array.isArray(e),r=Array.isArray(t),o=Array.isArray(a);if(n){var i={transition:""};return e.forEach((function(e,n){var c,s=a||"ease-in-out";c=r?"number"==typeof t[n]?t[n]:R[t[n]]||R[a[a.length-1]]||S:"number"==typeof t?t:R[t]||S,o&&(s=a[n]||a[a.length-1]||"ease-in-out");var l=N(e,c,s);i.transition=i.transition+(""===i.transition?l:", "+l)})),i}var c,s=a||"ease-in-out";return c=r?"number"==typeof t[0]?t[0]:R[t[0]]||S:"number"==typeof t?t:R[t]||S,o&&(s=a[0]||"ease-in-out"),{transition:N(e,c,s)}}function N(e,t,a){return t<5&&console.warn("`createTransitionValue` called with duration < 5ms. Are you sure this was passed in milliseconds?"),e+" "+t+"ms "+a}var A=a("H+nd"),T=Object(r.a)({root:Object.assign({color:u.b.offWhite,textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"4px 16px",fontSize:20,borderTopLeftRadius:"24px 50%",borderBottomLeftRadius:"24px 50%",borderTopRightRadius:"24px 50%",borderBottomRightRadius:"24px 50%",border:"2px solid "+u.b.dark,background:u.b.dark,lineHeight:"1.6"},B("border-color","short","ease-out"),{"&:hover, &:focus, &:active":{outline:"none"}}),normalHoverColor:{"&:hover, &:focus, &:active":{borderColor:u.b.primary}},icon:{width:24,height:24,marginRight:8},iconOnly:{width:44,height:44,padding:10,marginRight:0}});function I(e){var t=e.onClick,a=e.children,r=e.icon,o=e.url,i=e.className,c=T();if(!t&&!o)throw SyntaxError("You must specify a URL or a button onClick handler when using the Button component.");var s="string"==typeof o&&o.startsWith("#");return"string"==typeof o?n.default.createElement("a",{className:Object(h.a)(c.root,!a&&c.circle,c.normalHoverColor,i),href:o,onClick:s?function(e){A.a.ID(o.substr(1)),e.preventDefault(),"function"==typeof t&&t()}:null},r&&n.default.createElement(r,{className:Object(h.a)(c.icon,!a&&c.iconOnly)})," ",a):n.default.createElement("button",{className:Object(h.a)(c.root,!a&&c.circle,c.normalHoverColor,i),onClick:t},r&&n.default.createElement(r,{className:Object(h.a)(c.icon,!a&&c.iconOnly)})," ",a)}I.defaultProps={hoverFocusColor:"normal"};var M=a("tPOc");function P(){return g(u.a.upTo.playingFieldScrollBarShown)?n.default.createElement(M.a,{bold:!0,center:!0},"To view more of the grid, swipe or scroll horizontally."):null}var L=Object(r.a)({gridContainer:{overflowX:"auto",maxWidth:"100%"},grid:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(5, 1fr)",gap:2,background:"#000",padding:2,"& > *":{background:"#fff"},minWidth:875},controls:{marginBottom:24},copyButton:{position:"relative",margin:"auto",marginBottom:16},copyButtonCopiedText:Object.assign({position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",background:u.b.dark,borderTopLeftRadius:"24px 50%",borderBottomLeftRadius:"24px 50%",borderTopRightRadius:"24px 50%",borderBottomRightRadius:"24px 50%",opacity:0},B("opacity"),{"&[data-shown]":{opacity:1}})});function W(){if("undefined"==typeof window)return D();var e=new URLSearchParams(window.location.search),t=e.get("items");if(!t)return D();try{return function(e){var t=atob(e).split(","),a=[];t.forEach((function(e){try{if(a.length>=25)return;var t=atob(e);if(t.length>256)return;a.push(t)}catch(n){}}));var n=25-a.length;if(n>0){var r=D(n);a=[].concat(Object(j.a)(a),Object(j.a)(r))}return a}(t)}catch(n){e.delete("items");var a=e.toString();return window.location.search=a?"?"+a:"",D()}}function F(e){var t=W().map((function(e){return{text:e,checked:!1}})),a=Object(n.useState)(t),r=a[0],o=a[1],i=Object(n.useReducer)((function(e){return e+1}),0)[1],c=L();return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:c.controls},n.default.createElement(I,{className:c.copyButton,onClick:function(e){var t=[];r.forEach((function(e){return t.push(e.text)})),O()(window.location.origin+window.location.pathname+function(e){var t=[];e.forEach((function(e){return t.push(btoa(e))}));var a=t.join(",");return"?items="+btoa(a)}(t));var a=e.currentTarget.lastChild;a.setAttribute("data-shown",""),setTimeout((function(){return a.removeAttribute("data-shown")}),1500)}},"Copy permalink to this bingo board",n.default.createElement("span",{className:c.copyButtonCopiedText},"Copied!")),n.default.createElement(P,null)),n.default.createElement("div",{className:c.gridContainer},n.default.createElement("section",{className:c.grid},r.map((function(e,t){return n.default.createElement(E,{description:e.text,isCrossedOut:e.checked,key:e.text+"__"+e.checked,onClick:function(){return e=t,o((function(t){var a=t;return"-- FREE SPACE --"===a[e].text?t:(a[e].checked=!a[e].checked,a)})),void i();var e}})})))))}var H=a("vrFN"),z=a("Ff2n"),U=a("H2TA"),J=a("NqtD"),q=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.color,i=void 0===o?"primary":o,c=e.disableShrink,s=void 0!==c&&c,l=e.size,d=void 0===l?40:l,u=e.style,m=e.thickness,p=void 0===m?3.6:m,g=e.value,b=void 0===g?0:g,y=e.variant,v=void 0===y?"indeterminate":y,w=Object(z.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),x={},k={},E={};if("determinate"===v||"static"===v){var C=2*Math.PI*((44-p)/2);x.strokeDasharray=C.toFixed(3),E["aria-valuenow"]=Math.round(b),x.strokeDashoffset="".concat(((100-b)/100*C).toFixed(3),"px"),k.transform="rotate(-90deg)"}return n.createElement("div",Object(f.a)({className:Object(h.a)(a.root,r,"inherit"!==i&&a["color".concat(Object(J.a)(i))],{determinate:a.determinate,indeterminate:a.indeterminate,static:a.static}[v]),style:Object(f.a)({width:d,height:d},k,u),ref:t,role:"progressbar"},E,w),n.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},n.createElement("circle",{className:Object(h.a)(a.circle,s&&a.circleDisableShrink,{determinate:a.circleDeterminate,indeterminate:a.circleIndeterminate,static:a.circleStatic}[v]),style:x,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})))})),Q=(Object(U.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(q),a("R/WZ"));Object(Q.a)({loading:{margin:"auto",padding:24}});var X="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;var Y,V,Z=function(e){var t=e.children,a=e.defer,r=void 0!==a&&a,o=e.fallback,i=void 0===o?null:o,c=n.useState(!1),s=c[0],l=c[1];return X((function(){r||l(!0)}),[r]),n.useEffect((function(){r&&l(!0)}),[r]),n.createElement(n.Fragment,null,s?t:i)},$=Object(r.a)({headerContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:16},heading:(Y={},Y["@media "+u.a.downTo.small]={marginLeft:24},Y),bojo:(V={transformOrigin:"center",transform:"scale(0.75)",marginLeft:-24},V["@media "+u.a.downTo.small]={transform:"none",marginLeft:0},V),wider:{maxWidth:1200}});t.default=function(){var e=$();return n.default.createElement(i.a,null,n.default.createElement(H.a,null),n.default.createElement("div",{className:e.headerContainer},n.default.createElement(d,{alt:"An extraordinarily obscene image of Boris Johnson",title:"An extraordinarily obscene image of Boris Johnson",className:e.bojo}),n.default.createElement(o.b,{noPadding:!0,className:e.heading},"BoJo Briefing Bingo")),n.default.createElement(w.a,null,n.default.createElement(o.a,null,"Do you find Boris Johnson's Coronavirus briefings ridiculously dull? If so, this is the website for you!"),n.default.createElement(o.a,null,"We'll generate a randomised Bingo board each time you refresh this page. If you hear the text or see the actions in any of the boxes, click or tap them to mark them off. You win if you get 5 in a row!"),n.default.createElement(v,null)),n.default.createElement(w.a,{innerClassName:e.wider,noSpacing:!0},n.default.createElement(Z,null,n.default.createElement(F,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-054ecc53cd4a0b7b06e9.js.map