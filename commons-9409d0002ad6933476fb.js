(self.webpackChunkfront_end_starters=self.webpackChunkfront_end_starters||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},2817:function(e,t,r){"use strict";r.d(t,{Z:function(){return Oe}});var n,o,i,a,c=r(1597),u=r(7294),s=r(5697),l=r.n(s),f=r(4839),p=r.n(f),d=r(2993),h=r.n(d),y=r(6494),m=r.n(y),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),A="cssText",C="href",O="http-equiv",S="innerHTML",x="itemprop",E="name",j="property",k="rel",N="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",Z="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",H=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=X(e,T.TITLE),r=X(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,I);return t||n||void 0},$=function(e){return X(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===k&&"canonical"===e[r].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==S&&c!==A&&c!==x||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ee=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:r.g.requestAnimationFrame||ee,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:r.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(T.BODY,n),se(T.HTML,o),ue(f,p);var d={baseTag:le(T.BASE,r),linkTags:le(T.LINK,i),metaTags:le(T.META,a),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,s),styleTags:le(T.STYLE,l)},h={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,h,y)},ce=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),se(T.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(D):r.getAttribute(D)!==a.join(",")&&r.setAttribute(D,a.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===A)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(D,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},fe=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,o=pe(r,n),[u.createElement(T.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=fe(r),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case v:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===S||r===A){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),u.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===S||e===A)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},he=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:de(T.BASE,t,n),bodyAttributes:de(b,r,n),htmlAttributes:de(v,o,n),link:de(T.LINK,i,n),meta:de(T.META,a,n),noscript:de(T.NOSCRIPT,c,n),script:de(T.SCRIPT,u,n),style:de(T.STYLE,s,n),title:de(T.TITLE,{title:f,titleAttributes:p},n)}},ye=p()((function(e){return{baseTag:Q([C,P],e),bodyAttributes:G(b,e),defer:X(e,Z),encode:X(e,M),htmlAttributes:G(v,e),linkTags:J(T.LINK,[k,C],e),metaTags:J(T.META,[E,w,O,j,x],e),noscriptTags:J(T.NOSCRIPT,[S],e),onChangeClientState:$(e),scriptTags:J(T.SCRIPT,[N,S],e),styleTags:J(T.STYLE,[A],e),title:V(e),titleAttributes:G(g,e)}}),(function(e){ie&&ne(ie),e.defer?ie=re((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),he)((function(){return null})),me=(o=ye,a=i=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case T.TITLE:return U({},o,((t={})[n.type]=a,t.titleAttributes=U({},i),t));case T.BODY:return U({},o,{bodyAttributes:U({},i)});case T.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((r={})[n.type]=U({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return u.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(z(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=z(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),u.createElement(o,n)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(u.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var be=r(3176),ve=r(7946);var ge=function(e){var t=e.children,r=e.className;return(0,ve.tZ)("div",{className:"px-6 max-w-5xl mx-auto "+(r||"")},t)},Te=[{to:"/",title:"Projects"},{to:"/tips",title:"Tips"}],we={"/":"/project","/tips":"/tip"};function Ae(e){var t=e.href,r=e.location,n="text-white py-2 px-4 rounded-md hover:bg-slate-900";return e.isCurrent||t in we&&r.pathname.startsWith(we[t])?{className:"text-white py-2 px-4 rounded-md hover:bg-slate-900 bg-slate-900","aria-current":"page"}:{className:n}}var Ce=function(){return(0,ve.tZ)("header",{className:"py-8 sticky top-0 bg-[#000424] z-10"},(0,ve.tZ)(ge,null,(0,ve.tZ)("nav",{className:"flex justify-end items-center"},(0,ve.tZ)("ul",{className:"flex justify-end gap-3 mr-5"},Te.map((function(e){return(0,ve.tZ)("li",{key:e.to},(0,ve.tZ)(c.Link,{getProps:Ae,to:e.to},e.title))}))),(0,ve.tZ)("span",{className:"border-l-2 border-l-slate-700 pl-4 self-end"},(0,ve.tZ)("a",{href:"https://github.com/gultyaev/learning-front-end",target:"_blank",className:"text-white hover:text-gray-300"},(0,ve.tZ)("span",{className:"sr-only"},"GitHub repo"),(0,ve.tZ)("svg",{viewBox:"0 0 16 16",className:"w-7 h-7",fill:"currentColor","aria-hidden":"true"},(0,ve.tZ)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})))))))};var Oe=function(e){var t,r=e.children,n=e.title,o=e.description,i=(0,c.useStaticQuery)("1304617890").site,a=[n,null==i||null===(t=i.siteMetadata)||void 0===t?void 0:t.title].filter(Boolean).join(" | ");return(0,ve.tZ)(u.Fragment,null,(0,ve.tZ)(me,null,(0,ve.tZ)("title",null,a),o&&(0,ve.tZ)("meta",{name:"description",content:o}),(0,ve.tZ)("html",{lang:"en"}),(0,ve.tZ)("body",{className:"min-h-screen bg-[#000424] overflow-y-visible"})),(0,ve.tZ)("div",{className:"flex flex-col min-h-screen"},(0,ve.tZ)(Ce,null),(0,ve.tZ)("main",{className:"text-gray-300 flex-1 pb-10 text-lg"},(0,ve.tZ)(ge,{className:"py-12 md:py-16"},n&&(0,ve.tZ)(be.H1,null,n),r))))}},3176:function(e,t,r){"use strict";r.d(t,{H1:function(){return a},P:function(){return c},Ul:function(){return u},v:function(){return s}});var n=r(7462);var o=r(7946),i=["children"],a=function(e){var t=e.children;return(0,o.tZ)("h1",{className:"text-5xl font-bold uppercase mb-16 tracking-wider text-gray-100"},t)},c=function(e){var t=e.children;return(0,o.tZ)("p",{className:"mb-3 leading-8 last-child:mb-0"},t)},u=function(e){var t=e.children;return(0,o.tZ)("ul",{className:"list-disc mb-3 pl-4"},t)},s={h1:a,h2:function(e){var t=e.children;return(0,o.tZ)("h2",{className:"text-4xl font-semibold mt-10 mb-6 text-gray-100"},t)},h3:function(e){var t=e.children;return(0,o.tZ)("h3",{className:"text-3xl font-semibold mt-10 mb-6 text-gray-100"},t)},p:c,ul:u,a:function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,i);return(0,o.tZ)("a",(0,n.Z)({className:"hover:underline text-amber-500 hover:text-amber-400",target:"_blank"},r),t)},inlineCode:function(e){var t=e.children;return(0,o.tZ)("code",{className:"bg-slate-900 py-1 px-1.5 mx-0.5 rounded-md whitespace-normal break-words"},t)}}}}]);
//# sourceMappingURL=commons-9409d0002ad6933476fb.js.map