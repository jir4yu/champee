!function(t,e,i){function s(t,e){return typeof t===e}function n(t){var e=x.className,i=b._config.classPrefix||"";if(w&&(e=e.baseVal),b._config.enableJSClass){var s=new RegExp("(^|\\s)"+i+"no-js(\\s|$)");e=e.replace(s,"$1"+i+"js$2")}b._config.enableClasses&&(e+=" "+i+t.join(" "+i),w?x.className.baseVal=e:x.className=e)}function o(t,e){if("object"==typeof t)for(var i in t)S(t,i)&&o(i,t[i]);else{var s=(t=t.toLowerCase()).split("."),r=b[s[0]];if(2==s.length&&(r=r[s[1]]),void 0!==r)return b;e="function"==typeof e?e():e,1==s.length?b[s[0]]=e:(!b[s[0]]||b[s[0]]instanceof Boolean||(b[s[0]]=new Boolean(b[s[0]])),b[s[0]][s[1]]=e),n([(e&&0!=e?"":"no-")+s.join("-")]),b._trigger(t,e)}return b}function r(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):w?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function a(t,i,s,n){var o,a,l,c,h="modernizr",p=r("div"),d=function(){var t=e.body;return t||((t=r(w?"svg":"body")).fake=!0),t}();if(parseInt(s,10))for(;s--;)(l=r("div")).id=n?n[s]:h+(s+1),p.appendChild(l);return(o=r("style")).type="text/css",o.id="s"+h,(d.fake?d:p).appendChild(o),d.appendChild(p),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(e.createTextNode(t)),p.id=h,d.fake&&(d.style.background="",d.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),a=i(p,t),d.fake?(d.parentNode.removeChild(d),x.style.overflow=c,x.offsetHeight):p.parentNode.removeChild(p),!!a}function l(t,e){return!!~(""+t).indexOf(e)}function c(t){return t.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(e,i,s){var n;if("getComputedStyle"in t){n=getComputedStyle.call(t,e,i);var o=t.console;if(null!==n)s&&(n=n.getPropertyValue(s));else if(o){o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else n=!i&&e.currentStyle&&e.currentStyle[s];return n}function p(e,s){var n=e.length;if("CSS"in t&&"supports"in t.CSS){for(;n--;)if(t.CSS.supports(c(e[n]),s))return!0;return!1}if("CSSSupportsRule"in t){for(var o=[];n--;)o.push("("+c(e[n])+":"+s+")");return a("@supports ("+(o=o.join(" or "))+") { #modernizr { position: absolute; } }",function(t){return"absolute"==h(t,null,"position")})}return i}function d(t){return t.replace(/([a-z])-([a-z])/g,function(t,e,i){return e+i.toUpperCase()}).replace(/^-/,"")}function u(t,e,n,o){function a(){h&&(delete j.style,delete j.modElem)}if(o=!s(o,"undefined")&&o,!s(n,"undefined")){var c=p(t,n);if(!s(c,"undefined"))return c}for(var h,u,f,m,g,y=["modernizr","tspan","samp"];!j.style&&y.length;)h=!0,j.modElem=r(y.shift()),j.style=j.modElem.style;for(f=t.length,u=0;f>u;u++)if(m=t[u],g=j.style[m],l(m,"-")&&(m=d(m)),j.style[m]!==i){if(o||s(n,"undefined"))return a(),"pfx"!=e||m;try{j.style[m]=n}catch(t){}if(j.style[m]!=g)return a(),"pfx"!=e||m}return a(),!1}function f(t,e){return function(){return t.apply(e,arguments)}}function m(t,e,i,n,o){var r=t.charAt(0).toUpperCase()+t.slice(1),a=(t+" "+O.join(r+" ")+r).split(" ");return s(e,"string")||s(e,"undefined")?u(a,e,n,o):function(t,e,i){var n;for(var o in t)if(t[o]in e)return!1===i?t[o]:s(n=e[t[o]],"function")?f(n,i||e):n;return!1}(a=(t+" "+k.join(r+" ")+r).split(" "),e,i)}function g(t,e,s){return m(t,i,i,e,s)}var y=[],A={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var i=this;setTimeout(function(){e(i[t])},0)},addTest:function(t,e,i){y.push({name:t,fn:e,options:i})},addAsyncTest:function(t){y.push({name:null,fn:t})}},b=function(){};b.prototype=A,b=new b;var v=[],x=e.documentElement,w="svg"===x.nodeName.toLowerCase(),C="Moz O ms Webkit",k=A._config.usePrefixes?C.toLowerCase().split(" "):[];A._domPrefixes=k;var S,T=A._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];A._prefixes=T,function(){var t={}.hasOwnProperty;S=s(t,"undefined")||s(t.call,"undefined")?function(t,e){return e in t&&s(t.constructor.prototype[e],"undefined")}:function(e,i){return t.call(e,i)}}(),A._l={},A.on=function(t,e){this._l[t]||(this._l[t]=[]),this._l[t].push(e),b.hasOwnProperty(t)&&setTimeout(function(){b._trigger(t,b[t])},0)},A._trigger=function(t,e){if(this._l[t]){var i=this._l[t];setTimeout(function(){var t;for(t=0;t<i.length;t++)(0,i[t])(e)},0),delete this._l[t]}},b._q.push(function(){A.addTest=o});var I=function(){var t=!("onblur"in e.documentElement);return function(e,s){var n;return!!e&&(s&&"string"!=typeof s||(s=r(s||"div")),!(n=(e="on"+e)in s)&&t&&(s.setAttribute||(s=r("div")),s.setAttribute(e,""),n="function"==typeof s[e],s[e]!==i&&(s[e]=i),s.removeAttribute(e)),n)}}();A.hasEvent=I;var z=function(){var e=t.matchMedia||t.msMatchMedia;return e?function(t){var i=e(t);return i&&i.matches||!1}:function(e){var i=!1;return a("@media "+e+" { #modernizr { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?t.getComputedStyle(e,null):e.currentStyle).position}),i}}();A.mq=z;A.prefixedCSSValue=function(t,e){var i=!1,s=r("div").style;if(t in s){var n=k.length;for(s[t]=e,i=s[t];n--&&!i;)s[t]="-"+k[n]+"-"+e,i=s[t]}return""===i&&(i=!1),i};var O=A._config.usePrefixes?C.split(" "):[];A._cssomPrefixes=O;var P={elem:r("modernizr")};b._q.push(function(){delete P.elem});var j={style:P.elem.style};b._q.unshift(function(){delete j.style}),A.testAllProps=m,A.testAllProps=g,A.testProp=function(t,e,s){return u([t],i,e,s)},A.testStyles=a,b.addTest("customelements","customElements"in t),b.addTest("history",function(){var e=navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol)&&(t.history&&"pushState"in t.history)}),b.addTest("pointerevents",function(){var t=!1,e=k.length;for(t=b.hasEvent("pointerdown");e--&&!t;)I(k[e]+"pointerdown")&&(t=!0);return t}),b.addTest("postmessage","postMessage"in t),b.addTest("webgl",function(){var e=r("canvas"),i="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return i in e?e[i]("webgl")||e[i]("experimental-webgl"):"WebGLRenderingContext"in t});var N=!1;try{N="WebSocket"in t&&2===t.WebSocket.CLOSING}catch(t){}b.addTest("websockets",N),b.addTest("cssanimations",g("animationName","a",!0)),function(){b.addTest("csscolumns",function(){var t=!1,e=g("columnCount");try{(t=!!e)&&(t=new Boolean(t))}catch(t){}return t});for(var t,e,i=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],s=0;s<i.length;s++)t=i[s].toLowerCase(),e=g("column"+i[s]),("breakbefore"===t||"breakafter"===t||"breakinside"==t)&&(e=e||g(i[s])),b.addTest("csscolumns."+t,e)}(),b.addTest("flexbox",g("flexBasis","1px",!0)),b.addTest("picture","HTMLPictureElement"in t),b.addAsyncTest(function(){var t,e,i=r("img"),s="sizes"in i;!s&&"srcset"in i?("data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",t="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",e=function(){o("sizes",2==i.width)},i.onload=e,i.onerror=e,i.setAttribute("sizes","9px"),i.srcset=t+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w",i.src=t):o("sizes",s)}),b.addTest("srcset","srcset"in r("img")),b.addTest("webworkers","Worker"in t),function(){var t,e,i,n,o,r;for(var a in y)if(y.hasOwnProperty(a)){if(t=[],(e=y[a]).name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(i=0;i<e.options.aliases.length;i++)t.push(e.options.aliases[i].toLowerCase());for(n=s(e.fn,"function")?e.fn():e.fn,o=0;o<t.length;o++)1===(r=t[o].split(".")).length?b[r[0]]=n:(!b[r[0]]||b[r[0]]instanceof Boolean||(b[r[0]]=new Boolean(b[r[0]])),b[r[0]][r[1]]=n),v.push((n?"":"no-")+r.join("-"))}}(),n(v),delete A.addTest,delete A.addAsyncTest;for(var _=0;_<b._q.length;_++)b._q[_]();t.Modernizr=b}(window,document),
/**
 * [jQuery-stickit]{@link https://github.com/emn178/jquery-stickit}
 *
 * @version 0.2.6
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2016
 * @license MIT
 */
function(t,e,i){function s(e,i){this.element=t(e),t.isArray(i)||(i=[i||{}]),i.length||i.push({}),this.optionList=i;var s=this.element.css("transform")||"";this.defaultZIndex=this.element.css("z-index")||100,"auto"==this.defaultZIndex?this.defaultZIndex=100:"0"==this.defaultZIndex&&"none"!=s&&(this.defaultZIndex=100),this.updateOptions(),this.lastY=this.offsetY=0,this.stick=c.None,this.spacer=t("<div />"),this.spacer[0].id=e.id,this.spacer[0].className=e.className,this.spacer[0].style.cssText=e.style.cssText,this.spacer.addClass("jquery-stickit-spacer"),this.spacer[0].style.cssText+=";visibility: hidden !important;display: none !important",this.spacer.insertAfter(this.element),"static"==this.element.parent().css("position")&&this.element.parent().css("position","relative"),"auto"==this.element.css("will-change")&&this.element.css("will-change","transform"),"none"==s?this.element.css("transform","translateZ(0)"):-1==s.indexOf("matrix3d")&&this.element.css("transform",this.element.css("transform")+" translateZ(0)"),this.bound(),this.precalculate(),this.store()}function n(){p=e.innerHeight||i.documentElement.clientHeight,d=e.innerWidth||i.documentElement.clientWidth,t(":jquery-stickit").each(function(){t(this).data("jquery-stickit").resize()})}var o=-1!=navigator.userAgent.indexOf("MSIE 7.0"),r=o?-2:0,a=void 0!==e.MutationObserver,l=e.StickScope={Parent:0,Document:1},c={None:0,Fixed:1,Absolute:2},h=!1;t.expr[":"]["jquery-stickit"]=function(e){return!!t(e).data("jquery-stickit")},s.prototype.trigger=function(t){var e="on"+t.charAt(0).toUpperCase()+t.slice(1);this.options[e]&&this.options[e].call(this.element),this.element.trigger("stickit:"+t)},s.prototype.isActive=function(t){return(void 0===t.screenMinWidth||d>=t.screenMinWidth)&&(void 0===t.screenMaxWidth||d<=t.screenMaxWidth)},s.prototype.updateCss=function(t){this.element.hasClass(this.options.className)&&t.className!=this.options.className&&this.element.removeClass(this.options.className).addClass(t.className);var e={};this.stick==c.Absolute?this.options.extraHeight!=t.extraHeight&&(e.bottom=-this.options.extraHeight+"px"):this.options.top!=t.top&&(e.top=t.top+this.offsetY+"px"),this.options.zIndex!=t.zIndex&&(e.zIndex=this.getZIndex(t)),this.element.css(e)},s.prototype.updateOptions=function(){var t=this.getActiveOptionsKey();if(this.activeKey!=t){this.activeKey=t;var e=this.getActiveOptions();this.options&&(t?this.stick!=c.None&&(e.scope==this.options.scope?this.updateCss(e):(this.reset(),setTimeout(this.locate.bind(this)))):this.reset()),this.options=e,this.zIndex=this.getZIndex(e)}},s.prototype.getZIndex=function(t){return void 0===t.zIndex?this.defaultZIndex:t.zIndex},s.prototype.getActiveOptionsKey=function(){for(var t=[],e=0;e<this.optionList.length;++e)this.isActive(this.optionList[e])&&t.push(e);return t.join("_")},s.prototype.getActiveOptions=function(){for(var e={},i=0;i<this.optionList.length;++i){var s=this.optionList[i];this.isActive(s)&&t.extend(e,s)}return e.scope=e.scope||l.Parent,e.className=e.className||"stick",e.top=e.top||0,e.extraHeight=e.extraHeight||0,void 0===e.overflowScrolling&&(e.overflowScrolling=!0),e},s.prototype.store=function(){var t=this.element[0];this.origStyle={width:t.style.width,position:t.style.position,left:t.style.left,top:t.style.top,bottom:t.style.bottom,zIndex:t.style.zIndex}},s.prototype.restore=function(){this.element.css(this.origStyle)},s.prototype.bound=function(){var t=this.element;if(o||"border-box"!=t.css("box-sizing"))this.extraWidth=0;else{var e=parseInt(t.css("border-left-width"))||0,i=parseInt(t.css("border-right-width"))||0,s=parseInt(t.css("padding-left"))||0,n=parseInt(t.css("padding-right"))||0;this.extraWidth=e+i+s+n}this.margin={top:parseInt(t.css("margin-top"))||0,bottom:parseInt(t.css("margin-bottom"))||0,left:parseInt(t.css("margin-left"))||0,right:parseInt(t.css("margin-right"))||0},this.parent={border:{bottom:parseInt(t.parent().css("border-bottom-width"))||0}}},s.prototype.precalculate=function(){this.baseTop=this.margin.top+this.options.top,this.basePadding=this.baseTop+this.margin.bottom,this.baseParentOffset=this.options.extraHeight-this.parent.border.bottom,this.offsetHeight=Math.max(this.element.height()-p,0)},s.prototype.reset=function(){this.stick==c.Absolute?(this.trigger("unend"),this.trigger("unstick")):this.stick==c.Fixed&&this.trigger("unstick"),this.stick=c.None,this.spacer.css("width",""),this.spacer[0].style.cssText+=";display: none !important",this.restore(),this.element.removeClass(this.options.className)},s.prototype.setAbsolute=function(t){this.stick==c.None&&(this.element.addClass(this.options.className),this.trigger("stick")),this.trigger("end"),this.stick=c.Absolute,this.element.css({width:this.element.width()+this.extraWidth+"px",position:"absolute",top:this.origStyle.top,left:t+"px",bottom:-this.options.extraHeight+"px","z-index":this.zIndex})},s.prototype.setFixed=function(t,e,i){this.stick==c.None?(this.element.addClass(this.options.className),this.trigger("stick")):this.trigger("unend"),this.stick=c.Fixed,this.lastY=e,this.offsetY=i,this.element.css({width:this.element.width()+this.extraWidth+"px",position:"fixed",top:this.options.top+i+"px",left:t+"px",bottom:this.origStyle.bottom,"z-index":this.zIndex})},s.prototype.updateScroll=function(t){0!=this.offsetHeight&&this.options.overflowScrolling&&(this.offsetY=Math.max(this.offsetY+t-this.lastY,-(this.options.top+this.offsetHeight)),this.offsetY=Math.min(this.offsetY,0),this.lastY=t,this.element.css("top",this.options.top+this.offsetY+"px"))},s.prototype.locate=function(){if(this.activeKey){var t,e,i,s=this.element,n=this.spacer;switch(this.stick){case c.Fixed:0<=(e=(t=n[0].getBoundingClientRect()).top-this.baseTop)?this.reset():this.options.scope==l.Parent?(t=s.parent()[0].getBoundingClientRect()).bottom+this.baseParentOffset+this.offsetHeight<=s.outerHeight(!1)+this.basePadding?this.setAbsolute(this.spacer.position().left):this.updateScroll(t.bottom):this.updateScroll(t.bottom);break;case c.Absolute:e=(t=n[0].getBoundingClientRect()).top-this.baseTop,i=t.left-this.margin.left,0<=e?this.reset():(t=s.parent()[0].getBoundingClientRect()).bottom+this.baseParentOffset+this.offsetHeight>s.outerHeight(!1)+this.basePadding&&this.setFixed(i+r,t.bottom,-this.offsetHeight);break;default:0<=(e=(t=s[0].getBoundingClientRect()).top-this.baseTop)||(e=s.parent()[0].getBoundingClientRect(),n.height(s.height()),n.show(),i=t.left-this.margin.left,this.options.scope==l.Document?this.setFixed(i,t.bottom,0):e.bottom+this.baseParentOffset<=s.outerHeight(!1)+this.basePadding?this.setAbsolute(this.element.position().left):this.setFixed(i+r,t.bottom,0),n.width()||n.width(s.width()))}}},s.prototype.resize=function(){if(this.updateOptions(),this.bound(),this.precalculate(),this.stick!=c.None){var t=this.element,e=this.spacer;t.width(e.width()),e.height(t.height()),this.stick==c.Fixed&&(e=this.spacer[0].getBoundingClientRect().left-this.margin.left,t.css("left",e+"px"))}this.locate()},s.prototype.destroy=function(){this.reset(),this.spacer.remove(),this.element.removeData("jquery-stickit")};var p,d,u=function(){t(":jquery-stickit").each(function(){t(this).data("jquery-stickit").locate()})},f=["destroy"];t.fn.stickit=function(o,r){return"string"==typeof o?-1!=t.inArray(o,f)&&this.each(function(){var e=t(this).data("jquery-stickit");e&&e[o].apply(e,r)}):(h||(h=!0,n(),t(i).ready(function(){t(e).bind("resize",n).bind("scroll",u),t(i.body).on("animationend webkitAnimationEnd oAnimationEnd transitionend webkitTransitionEnd oTransitionEnd",u)}),a&&new MutationObserver(function(t){var e,i=0;return function(){var s=this,n=arguments,o=function(){i=new Date,t.apply(s,n)};e&&(clearTimeout(e),e=null);var r=new Date-i;10<r?o():e=setTimeout(o,10-r)}}(u)).observe(i,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),r=t.isArray(o)?o:Array.prototype.slice.call(arguments,0),this.each(function(){var e=new s(this,r);t(this).data("jquery-stickit",e),e.locate()})),this}}(jQuery,window,document),jQuery(document).ready(function(){jQuery(".sidebar-wrapper").stickit({top:40,screenMinWidth:992}),jQuery(".entry-content iframe, .entry-content embed").length>0&&jQuery(".entry-content iframe, .entry-content embed").each(function(t,e){jQuery(e).wrap('<div class="embed-responsive embed-responsive-16by9"></div>')}),jQuery(".entry-content table").length>0&&jQuery(".entry-content table").each(function(t,e){jQuery(e).addClass("table table-striped")})});