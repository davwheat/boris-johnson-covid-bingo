(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+QRC":function(e,t,a){"use strict";var n=a("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,r,i,c,l,s,u=!1;t||(t={}),a=t.debug||!1;try{if(i=n(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){a&&console.error("unable to copy using execCommand: ",d),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){a&&console.error("unable to copy using clipboardData: ",d),a&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("FdF9"),o=a("RD7I"),r=a("Y8Tw"),i=a("Bl7J"),c=a("9eSz"),l=a.n(c),s=a("Wbzz");function u(e){var t=Object(s.useStaticQuery)("3603146279").allFile.nodes,a=t[Math.floor(Math.random()*t.length)].childImageSharp.fixed;return n.default.createElement(l.a,Object.assign({fixed:a},e))}var d=a("sOrj"),f=a("wx14"),m=a("aXM8"),p=a("A+CX");var g=a("iuhU"),h=Object(o.a)({root:{width:"100%",padding:"12px 16px",background:d.b.dark,color:d.b.offWhite,fontSize:18},afterHeading:{marginTop:-6},title:{paddingBottom:4},padBottom:{marginBottom:16},alternateBackground:{background:d.b.primaryDark}});function b(e){var t=e.title,a=e.message,o=e.noPadding,i=e.afterHeading,c=e.alternateColor,l=e.innerClassName,s=h();return n.default.createElement("section",{className:Object(g.a)(s.root,!o&&s.padBottom,i&&s.afterHeading,c&&s.alternateBackground)},n.default.createElement("div",{className:l},n.default.createElement(r.a,{className:s.title,bold:!0},t),n.default.createElement(r.a,{noPadding:!0},a)))}function y(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(m.a)(),o=Object(p.a)({theme:a,name:"MuiUseMediaQuery",props:{}}),r="function"==typeof e?e(a):e;r=r.replace(/^@media( ?)/m,"");var i="undefined"!=typeof window&&void 0!==window.matchMedia,c=Object(f.a)({},o,t),l=c.defaultMatches,s=void 0!==l&&l,u=c.matchMedia,d=void 0===u?i?window.matchMedia:null:u,g=c.noSsr,h=void 0!==g&&g,b=c.ssrMatchMedia,y=void 0===b?null:b,v=n.useState((function(){return h&&i?d(r).matches:y?y(r).matches:s})),w=v[0],x=v[1];return n.useEffect((function(){var e=!0;if(i){var t=d(r),a=function(){e&&x(t.matches)};return a(),t.addListener(a),function(){e=!1,t.removeListener(a)}}}),[r,d,i]),w}(d.a.upTo.medium)?n.default.createElement(b,{title:"Warning",message:"Play BoJo Bingo in landscape or on a larger device for the best experience."}):null}var v=a("rxcZ"),w=Object(o.a)({root:{padding:4,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#000",lineHeight:1.25,position:"relative",cursor:"pointer","&:active, &:focus":{outline:"2px orange solid"},"&[aria-pressed=true]":{background:d.b.toryPrimary,color:"#fff"}}}),x=n.default.memo((function(e){var t=e.isCrossedOut,a=e.description,o=e.onClick,r=w();return n.default.createElement("button",{className:r.root,"aria-pressed":t?"true":"false",onClick:o},a)})),C=a("+QRC"),E=a.n(C);var k=['"Good evening"','"Alas"','"It is with a heavy heart"',"*cutting off another speaker/skipping them*",'"Will, unfortunately, die"','"Many loved ones"',"*stammering for over 2 seconds*",'"Hands, face, space"','"Could I have the next slide, please?"','"Long weeks ahead..."',"*calling someone by the wrong name*","*camera operator pans to wrong person*",'"I think we\'ve got about"','"Anything you want to add?"',"*deflecting question about universities*",'"We will be looking very carefully"','"A big sacrifice"',"A train analogy",'"I understand the frustration"','"JVT"','"Nightingale hospitals"','"Oven-ready"',"*contradicting something said earlier that same day*","*standing with crossed legs*","*not actually having a clue about the answer to a question*","*answering a question in the most confusing and long-winded way possible*",'"we will beat this"','"our amazing NHS"','"in this together"','"collective duty"','"to be absolutely clear"','"Well Laura..."',"\"I've said it before, and I'll say it again...\"",'"We will always be guided by the science"','"In answer to your question..." *changes question*'];function j(e){for(var t=[],a=0;a<(e||25);a++){var n=function(){o=Math.floor(Math.random()*k.length)},o=0;for(n();t.includes(k[o]);)n();t.push(k[o])}return t}var O=a("KQm4");var R=Object.freeze({long:250,medium:200,short:125}),B=R.medium;function A(e,t,a){var n=Array.isArray(e),o=Array.isArray(t),r=Array.isArray(a);if(n){var i={transition:""};return e.forEach((function(e,n){var c,l=a||"ease-in-out";c=o?"number"==typeof t[n]?t[n]:R[t[n]]||R[a[a.length-1]]||B:"number"==typeof t?t:R[t]||B,r&&(l=a[n]||a[a.length-1]||"ease-in-out");var s=D(e,c,l);i.transition=i.transition+(""===i.transition?s:", "+s)})),i}var c,l=a||"ease-in-out";return c=o?"number"==typeof t[0]?t[0]:R[t[0]]||B:"number"==typeof t?t:R[t]||B,r&&(l=a[0]||"ease-in-out"),{transition:D(e,c,l)}}function D(e,t,a){return t<5&&console.warn("`createTransitionValue` called with duration < 5ms. Are you sure this was passed in milliseconds?"),e+" "+t+"ms "+a}var T=a("H+nd"),N=Object(o.a)({root:Object.assign({color:d.b.offWhite,textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"4px 16px",fontSize:20,borderTopLeftRadius:"24px 50%",borderBottomLeftRadius:"24px 50%",borderTopRightRadius:"24px 50%",borderBottomRightRadius:"24px 50%",border:"2px solid "+d.b.dark,background:d.b.dark,lineHeight:"1.6"},A("border-color","short","ease-out"),{"&:hover, &:focus, &:active":{outline:"none"}}),normalHoverColor:{"&:hover, &:focus, &:active":{borderColor:d.b.primary}},icon:{width:24,height:24,marginRight:8},iconOnly:{width:44,height:44,padding:10,marginRight:0}});function I(e){var t=e.onClick,a=e.children,o=e.icon,r=e.url,i=e.className,c=N();if(!t&&!r)throw SyntaxError("You must specify a URL or a button onClick handler when using the Button component.");var l="string"==typeof r&&r.startsWith("#");return"string"==typeof r?n.default.createElement("a",{className:Object(g.a)(c.root,!a&&c.circle,c.normalHoverColor,i),href:r,onClick:l?function(e){T.a.ID(r.substr(1)),e.preventDefault(),"function"==typeof t&&t()}:null},o&&n.default.createElement(o,{className:Object(g.a)(c.icon,!a&&c.iconOnly)})," ",a):n.default.createElement("button",{className:Object(g.a)(c.root,!a&&c.circle,c.normalHoverColor,i),onClick:t},o&&n.default.createElement(o,{className:Object(g.a)(c.icon,!a&&c.iconOnly)})," ",a)}I.defaultProps={hoverFocusColor:"normal"};var S=Object(o.a)({root:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(5, 1fr)",gap:2,background:"#000",padding:2,"& > *":{background:"#fff"}},copyButton:{position:"relative",margin:"auto",marginBottom:48,marginTop:-24},copyButtonCopiedText:Object.assign({position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",background:d.b.dark,borderTopLeftRadius:"24px 50%",borderBottomLeftRadius:"24px 50%",borderTopRightRadius:"24px 50%",borderBottomRightRadius:"24px 50%",opacity:0},A("opacity"),{"&[data-shown]":{opacity:1}})});function M(){if("undefined"==typeof window)return j();var e=new URLSearchParams(window.location.search),t=e.get("items");if(!t)return j();try{return function(e){var t=atob(e).split(","),a=[];t.forEach((function(e){try{if(a.length>=25)return;var t=atob(e);if(t.length>256)return;a.push(t)}catch(n){}}));var n=25-a.length;if(n>0){var o=j(n);a=[].concat(Object(O.a)(a),Object(O.a)(o))}return a}(t)}catch(n){e.delete("items");var a=e.toString();return window.location.search=a?"?"+a:"",j()}}var L,H,W=n.default.memo((function(){var e,t,a,o,r,i,c,l=M().map((function(e){return{text:e,checked:!1}})),s=(e=l,t=Object(n.useState)(e),a=t[0],o=t[1],r=Object(n.useRef)(),i=Object(n.useRef)(!0),c=Object(n.useCallback)((function(e,t){r.current=t,o(e)}),[]),Object(n.useEffect)((function(){i.current?i.current=!1:r.current(a)}),[a]),[a,c]),u=s[0],d=s[1],f=Object(n.useReducer)((function(e){return e+1}),0)[1],m=S();return n.default.createElement(n.default.Fragment,null,n.default.createElement(I,{className:m.copyButton,onClick:function(e){var t=[];u.forEach((function(e){return t.push(e.text)})),E()(window.location.origin+window.location.pathname+function(e){var t=[];e.forEach((function(e){return t.push(btoa(e))}));var a=t.join(",");return"?items="+btoa(a)}(t));var a=e.currentTarget.lastChild;a.setAttribute("data-shown",""),setTimeout((function(){return a.removeAttribute("data-shown")}),1500)}},"Copy link to bingo board",n.default.createElement("span",{className:m.copyButtonCopiedText},"Copied!")),n.default.createElement("section",{className:m.root},u.map((function(e,t){return n.default.createElement(x,{description:e.text,isCrossedOut:e.checked,key:e.text+"__"+e.checked,onClick:function(){return function(e){var t=u;t[e].checked=!t[e].checked,d(t,(function(e){console.log(e)})),f()}(t)}})}))))})),P=Object(o.a)({headerContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:16},heading:(L={},L["@media "+d.a.downTo.small]={marginLeft:24},L),bojo:(H={transformOrigin:"center",transform:"scale(0.75)",marginLeft:-24},H["@media "+d.a.downTo.small]={transform:"none",marginLeft:0},H),wider:{maxWidth:1200}});t.default=function(){var e=P();return n.default.createElement(i.a,null,n.default.createElement("div",{className:e.headerContainer},n.default.createElement(u,{alt:"An extraordinarily obscene image of Boris Johnson",title:"An extraordinarily obscene image of Boris Johnson",className:e.bojo}),n.default.createElement(r.b,{noPadding:!0,className:e.heading},"BoJo Briefing Bingo")),n.default.createElement(v.a,null,n.default.createElement(r.a,null,"Do you find Boris Johnson's Coronavirus briefings ridiculously dull? If so, this is the website for you!"),n.default.createElement(r.a,{noPadding:!0},"We'll generate a randomised Bingo board each time you refresh this page. If you hear the text or see the actions in any of the boxes, click or tap them to mark them off. You win (absolutely nothing) if you get 5 in a row!")),n.default.createElement(v.a,{innerClassName:e.wider},n.default.createElement(y,null),n.default.createElement(W,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0e5e2220755948165b5e.js.map