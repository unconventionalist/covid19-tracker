(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"7oih":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("TJpk"),i=n.n(a),u=(n("ZEfK"),n("afVd"),n("+ZDr")),c=n.n(u);n("lw3w"),n("emEt").default.enqueue,o.a.createContext({});var l=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(c.a,{to:"/"},o.a.createElement("h3",null,"COVID-19 Tracker"))))},s=n("iSXs"),f=n.n(s);t.a=function(e){var t=e.children,n=e.pageName,r="";return n&&(r=r+" page-"+n),o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{bodyAttributes:{class:r}},o.a.createElement("link",{rel:"icon",href:f.a}),o.a.createElement("link",{rel:"stylesheet",href:"leaflet-src.js.map"}),o.a.createElement("title",null,"Covid-19 Tracker")),o.a.createElement("div",{className:"wrapper"},o.a.createElement(l,null),o.a.createElement("main",null,t)))}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),a=r(o),i=r(n("Gytx"));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function f(){l=e(s.map((function(e){return e.props}))),T.canUseDOM?t(l):n&&(l=n(l))}var T=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var u=o.prototype;return u.shouldComponentUpdate=function(e){return!i(e,this.props)},u.componentWillMount=function(){s.push(this),f()},u.componentDidUpdate=function(){f()},u.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},u.render=function(){return a.createElement(r,this.props)},o}(o.Component);return u(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(T,"canUseDOM",c),T}}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var s=e[l],f=t[l];if(!1===(o=n?n.call(r,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,i=n("kJMx").f,u=n("quPj"),c=n("C/va"),l=r.RegExp,s=l,f=l.prototype,T=/a/g,E=/a/g,A=new l(T)!==T;if(n("nh4g")&&(!A||n("eeVq")((function(){return E[n("K0xU")("match")]=!1,l(T)!=T||l(E)==E||"/a/i"!=l(T,"i")})))){l=function(e,t){var n=this instanceof l,r=u(e),a=void 0===t;return!n&&r&&e.constructor===l&&a?e:o(A?new s(r&&!a?e.source:e,t):s((r=e instanceof l)?e.source:e,r&&a?c.call(e):t),n?this:f,l)};for(var p=function(e){e in l||a(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},d=i(s),S=0;d.length>S;)p(d[S++]);f.constructor=l,l.prototype=f,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=f(n("q1tI")),i=f(n("17x9")),u=f(n("8+s/")),c=f(n("bmMU")),l=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p,d,S,h=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),y=(p=h,S=d=function(e){function t(){return E(this,t),A(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,a=e.newProps,i=e.newChildProps,u=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},a,((t={})[o.type]=u,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=T(o,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(p,o)},o(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(a.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=p.peek,d.rewind=function(){var e=p.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},S);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},VUD3:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);t.a=function(e){var t=e.children,n=e.className,r=e.type,a="container";return"string"==typeof r&&(a=a+" container-"+r),"string"==typeof n&&(a=a+" "+n),o.a.createElement("div",{className:a},t)}},ZEfK:function(e,t,n){},afVd:function(e,t,n){},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,l,s=r(t),f=r(n);if(s&&f){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(s!=f)return!1;var T=t instanceof Date,E=n instanceof Date;if(T!=E)return!1;if(T&&E)return t.getTime()==n.getTime();var A=t instanceof RegExp,p=n instanceof RegExp;if(A!=p)return!1;if(A&&p)return t.toString()==n.toString();var d=o(t);if((c=d.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!a.call(n,d[u]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(l=d[u])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=a.call(this);return e==e?o.call(this):"Invalid Date"}))},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},iSXs:function(e,t){e.exports="data:image/png;base64,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"},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),o=n.n(r),a=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(a.a,Object.assign({location:t,pageResources:n},n.json)):null}},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n("q1tI")),i=c(n("MgzW")),u=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=d(e,u.TAG_NAMES.TITLE),n=d(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return d(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},A=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},p=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&R("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),c=0;c<a.length;c++){var l=a[c],s=(0,i.default)({},o[l],r[l]);o[l]=s}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},S=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){S(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||S:e.requestAnimationFrame||S,m="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,R=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,T=e.title,E=e.titleAttributes;b(u.TAG_NAMES.BODY,r),b(u.TAG_NAMES.HTML,o),O(T,E);var A={baseTag:M(u.TAG_NAMES.BASE,n),linkTags:M(u.TAG_NAMES.LINK,a),metaTags:M(u.TAG_NAMES.META,i),noscriptTags:M(u.TAG_NAMES.NOSCRIPT,c),scriptTags:M(u.TAG_NAMES.SCRIPT,s),styleTags:M(u.TAG_NAMES.STYLE,f)},p={},d={};Object.keys(A).forEach((function(e){var t=A[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(d[e]=A[e].oldTags)})),t&&t(),l(e,p,d)},P=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=P(e)),b(u.TAG_NAMES.TITLE,t)},b=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var f=a.indexOf(l);-1!==f&&a.splice(f,1)}for(var T=a.length-1;T>=0;T--)n.removeAttribute(a[T]);o.length===a.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},M=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},_=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=I(n,r),[a.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=w(n),a=P(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&m(v),e.defer?v=y((function(){g(e,(function(){v=null}))})):(g(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,f=e.title,T=void 0===f?"":f,E=e.titleAttributes;return{base:_(u.TAG_NAMES.BASE,t,r),bodyAttributes:_(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:_(u.ATTRIBUTE_NAMES.HTML,o,r),link:_(u.TAG_NAMES.LINK,a,r),meta:_(u.TAG_NAMES.META,i,r),noscript:_(u.TAG_NAMES.NOSCRIPT,c,r),script:_(u.TAG_NAMES.SCRIPT,l,r),style:_(u.TAG_NAMES.STYLE,s,r),title:_(u.TAG_NAMES.TITLE,{title:T,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:A([u.TAG_PROPERTIES.HREF],e),bodyAttributes:E(u.ATTRIBUTE_NAMES.BODY,e),defer:d(e,u.HELMET_PROPS.DEFER),encode:d(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(u.ATTRIBUTE_NAMES.HTML,e),linkTags:p(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:p(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:p(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:E(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=R}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-6871a360b72e165fbe14.js.map