!function(e,t,n){function r(e,t){return typeof e===t}function o(e){var t=b.className,n=y._config.classPrefix||"";if(w&&(t=t.baseVal),y._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}y._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?b.className.baseVal=t:b.className=t)}function i(e,t){if("object"==typeof e)for(var n in e)_(e,n)&&i(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),s=y[r[0]];if(2==r.length&&(s=s[r[1]]),void 0!==s)return y;t="function"==typeof t?t():t,1==r.length?y[r[0]]=t:(!y[r[0]]||y[r[0]]instanceof Boolean||(y[r[0]]=new Boolean(y[r[0]])),y[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),y._trigger(e,t)}return y}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,n,r,o){var i,a,l,u,f="modernizr",d=s("div"),c=function(){var e=t.body;return e||((e=s(w?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(l=s("div")).id=o?o[r]:f+(r+1),d.appendChild(l);return(i=s("style")).type="text/css",i.id="s"+f,(c.fake?c:d).appendChild(i),c.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(c)),a=n(d,e),c.fake?(c.parentNode.removeChild(c),b.style.overflow=u,b.offsetHeight):d.parentNode.removeChild(d),!!a}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function d(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+u(t[o])+":"+r+")");return a("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return n}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,o,i){function a(){f&&(delete O.style,delete O.modElem)}if(i=!r(i,"undefined")&&i,!r(o,"undefined")){var u=d(e,o);if(!r(u,"undefined"))return u}for(var f,p,A,m,h,v=["modernizr","tspan","samp"];!O.style&&v.length;)f=!0,O.modElem=s(v.shift()),O.style=O.modElem.style;for(A=e.length,p=0;A>p;p++)if(m=e[p],h=O.style[m],l(m,"-")&&(m=c(m)),O.style[m]!==n){if(i||r(o,"undefined"))return a(),"pfx"!=t||m;try{O.style[m]=o}catch(e){}if(O.style[m]!=h)return a(),"pfx"!=t||m}return a(),!1}function A(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+B.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?p(a,t,o,i):function(e,t,n){var o;for(var i in e)if(e[i]in t)return!1===n?e[i]:r(o=t[e[i]],"function")?A(o,n||t):o;return!1}(a=(e+" "+x.join(s+" ")+s).split(" "),t,n)}function h(e,t,r){return m(e,n,n,t,r)}var v=[],g={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){v.push({name:e,fn:t,options:n})},addAsyncTest:function(e){v.push({name:null,fn:e})}},y=function(){};y.prototype=g,y=new y;var C=[],b=t.documentElement,w="svg"===b.nodeName.toLowerCase(),S="Moz O ms Webkit",x=g._config.usePrefixes?S.toLowerCase().split(" "):[];g._domPrefixes=x;var _,T=g._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];g._prefixes=T,function(){var e={}.hasOwnProperty;_=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),g._l={},g.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),y.hasOwnProperty(e)&&setTimeout(function(){y._trigger(e,y[e])},0)},g._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},y._q.push(function(){g.addTest=i});var P=function(){var e=!("onblur"in t.documentElement);return function(t,r){var o;return!!t&&(r&&"string"!=typeof r||(r=s(r||"div")),!(o=(t="on"+t)in r)&&e&&(r.setAttribute||(r=s("div")),r.setAttribute(t,""),o="function"==typeof r[t],r[t]!==n&&(r[t]=n),r.removeAttribute(t)),o)}}();g.hasEvent=P;var E=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return a("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();g.mq=E;g.prefixedCSSValue=function(e,t){var n=!1,r=s("div").style;if(e in r){var o=x.length;for(r[e]=t,n=r[e];o--&&!n;)r[e]="-"+x[o]+"-"+t,n=r[e]}return""===n&&(n=!1),n};var B=g._config.usePrefixes?S.split(" "):[];g._cssomPrefixes=B;var k={elem:s("modernizr")};y._q.push(function(){delete k.elem});var O={style:k.elem.style};y._q.unshift(function(){delete O.style}),g.testAllProps=m,g.testAllProps=h,g.testProp=function(e,t,r){return p([e],n,t,r)},g.testStyles=a,y.addTest("customelements","customElements"in e),y.addTest("history",function(){var t=navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol)&&(e.history&&"pushState"in e.history)}),y.addTest("pointerevents",function(){var e=!1,t=x.length;for(e=y.hasEvent("pointerdown");t--&&!e;)P(x[t]+"pointerdown")&&(e=!0);return e}),y.addTest("postmessage","postMessage"in e),y.addTest("webgl",function(){var t=s("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e});var z=!1;try{z="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(e){}y.addTest("websockets",z),y.addTest("cssanimations",h("animationName","a",!0)),function(){y.addTest("csscolumns",function(){var e=!1,t=h("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(e){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=h("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||h(n[r])),y.addTest("csscolumns."+e,t)}(),y.addTest("flexbox",h("flexBasis","1px",!0)),y.addTest("picture","HTMLPictureElement"in e),y.addAsyncTest(function(){var e,t,n=s("img"),r="sizes"in n;!r&&"srcset"in n?("data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){i("sizes",2==n.width)},n.onload=t,n.onerror=t,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w",n.src=e):i("sizes",r)}),y.addTest("srcset","srcset"in s("img")),y.addTest("webworkers","Worker"in e),function(){var e,t,n,o,i,s;for(var a in v)if(v.hasOwnProperty(a)){if(e=[],(t=v[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(s=e[i].split(".")).length?y[s[0]]=o:(!y[s[0]]||y[s[0]]instanceof Boolean||(y[s[0]]=new Boolean(y[s[0]])),y[s[0]][s[1]]=o),C.push((o?"":"no-")+s.join("-"))}}(),o(C),delete g.addTest,delete g.addAsyncTest;for(var L=0;L<y._q.length;L++)y._q[L]();e.Modernizr=y}(window,document);