(function(t){var e,o={className:"autosizejs",id:"autosizejs",append:"\n",callback:!1,resizeDelay:10,placeholder:!0},i='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',n=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],r=t(i).data("autosize",!0)[0];r.style.lineHeight="99px","99px"===t(r).css("lineHeight")&&n.push("lineHeight"),r.style.lineHeight="",t.fn.autosize=function(i){return this.length?(i=t.extend({},o,i||{}),r.parentNode!==document.body&&t(document.body).append(r),this.each(function(){function o(){var e,o=window.getComputedStyle?window.getComputedStyle(f,null):!1;o?(e=f.getBoundingClientRect().width,(0===e||"number"!=typeof e)&&(e=parseInt(o.width,10)),t.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(t,i){e-=parseInt(o[i],10)})):e=d.width(),r.style.width=Math.max(e,0)+"px"}function a(){var a={};if(e=f,r.className=i.className,r.id=i.id,c=parseInt(d.css("maxHeight"),10),t.each(n,function(t,e){a[e]=d.css(e)}),t(r).css(a).attr("wrap",d.attr("wrap")),o(),window.chrome){var s=f.style.width;f.style.width="0px",f.offsetWidth,f.style.width=s}}function s(){var t,n;e!==f?a():o(),r.value=!f.value&&i.placeholder?(d.attr("placeholder")||"")+i.append:f.value+i.append,r.style.overflowY=f.style.overflowY,n=parseInt(f.style.height,10),r.scrollTop=0,r.scrollTop=9e4,t=r.scrollTop,c&&t>c?(f.style.overflowY="scroll",t=c):(f.style.overflowY="hidden",u>t&&(t=u)),t+=h,n!==t&&(f.style.height=t+"px",m&&i.callback.call(f,f))}function l(){clearTimeout(p),p=setTimeout(function(){var t=d.width();t!==w&&(w=t,s())},parseInt(i.resizeDelay,10))}var c,u,p,f=this,d=t(f),h=0,m=t.isFunction(i.callback),v={height:f.style.height,overflow:f.style.overflow,overflowY:f.style.overflowY,wordWrap:f.style.wordWrap,resize:f.style.resize},w=d.width(),g=d.css("resize");d.data("autosize")||(d.data("autosize",!0),("border-box"===d.css("box-sizing")||"border-box"===d.css("-moz-box-sizing")||"border-box"===d.css("-webkit-box-sizing"))&&(h=d.outerHeight()-d.height()),u=Math.max(parseInt(d.css("minHeight"),10)-h||0,d.height()),d.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word"}),"vertical"===g?d.css("resize","none"):"both"===g&&d.css("resize","horizontal"),"onpropertychange"in f?"oninput"in f?d.on("input.autosize keyup.autosize",s):d.on("propertychange.autosize",function(){"value"===event.propertyName&&s()}):d.on("input.autosize",s),i.resizeDelay!==!1&&t(window).on("resize.autosize",l),d.on("autosize.resize",s),d.on("autosize.resizeIncludeStyle",function(){e=null,s()}),d.on("autosize.destroy",function(){e=null,clearTimeout(p),t(window).off("resize",l),d.off("autosize").off(".autosize").css(v).removeData("autosize")}),s())})):this}})(window.jQuery||window.$);(function(t){if(typeof define!=="undefined"&&define.amd){define(["jquery"],t)}else if(typeof module!=="undefined"&&module.exports){var e=require("jquery");module.exports=t(e)}else{window.scrollMonitor=t(jQuery)}})(function(t){function e(){return window.innerHeight||document.documentElement.clientHeight}function o(){l.viewportTop=c.scrollTop();l.viewportBottom=l.viewportTop+l.viewportHeight;l.documentHeight=u.height();if(l.documentHeight!==x){k=p.length;while(k--){p[k].recalculateLocation()}x=l.documentHeight}}function i(){l.viewportHeight=e();o();r()}function n(){clearTimeout(T);T=setTimeout(i,100)}function r(){I=p.length;while(I--){p[I].update()}I=p.length;while(I--){p[I].triggerCallbacks()}}function a(e,o){function i(t){if(t.length===0){return}x=t.length;while(x--){k=t[x];k.callback.call(n,V);if(k.isOne){t.splice(x,1)}}}var n=this;this.watchItem=e;if(!o){this.offsets=y}else if(o===+o){this.offsets={top:o,bottom:o}}else{this.offsets=t.extend({},y,o)}this.callbacks={};for(var r=0,a=b.length;r<a;r++){n.callbacks[b[r]]=[]}this.locked=false;var s;var c;var u;var p;var x;var k;this.triggerCallbacks=function(){if(this.isInViewport&&!s){i(this.callbacks[d])}if(this.isFullyInViewport&&!c){i(this.callbacks[h])}if(this.isAboveViewport!==u&&this.isBelowViewport!==p){i(this.callbacks[f]);if(!c&&!this.isFullyInViewport){i(this.callbacks[h]);i(this.callbacks[v])}if(!s&&!this.isInViewport){i(this.callbacks[d]);i(this.callbacks[m])}}if(!this.isFullyInViewport&&c){i(this.callbacks[v])}if(!this.isInViewport&&s){i(this.callbacks[m])}if(this.isInViewport!==s){i(this.callbacks[f])}switch(true){case s!==this.isInViewport:case c!==this.isFullyInViewport:case u!==this.isAboveViewport:case p!==this.isBelowViewport:i(this.callbacks[g])}s=this.isInViewport;c=this.isFullyInViewport;u=this.isAboveViewport;p=this.isBelowViewport};this.recalculateLocation=function(){if(this.locked){return}var e=this.top;var o=this.bottom;if(this.watchItem.nodeName){var n=this.watchItem.style.display;if(n==="none"){this.watchItem.style.display=""}var r=t(this.watchItem).offset();this.top=r.top;this.bottom=r.top+this.watchItem.offsetHeight;if(n==="none"){this.watchItem.style.display=n}}else if(this.watchItem===+this.watchItem){if(this.watchItem>0){this.top=this.bottom=this.watchItem}else{this.top=this.bottom=l.documentHeight-this.watchItem}}else{this.top=this.watchItem.top;this.bottom=this.watchItem.bottom}this.top-=this.offsets.top;this.bottom+=this.offsets.bottom;this.height=this.bottom-this.top;if((e!==undefined||o!==undefined)&&(this.top!==e||this.bottom!==o)){i(this.callbacks[w])}};this.recalculateLocation();this.update();s=this.isInViewport;c=this.isFullyInViewport;u=this.isAboveViewport;p=this.isBelowViewport}function s(t){V=t;o();r()}var l={};var c=t(window);var u=t(document);var p=[];var f="visibilityChange";var d="enterViewport";var h="fullyEnterViewport";var m="exitViewport";var v="partiallyExitViewport";var w="locationChange";var g="stateChange";var b=[f,d,h,m,v,w,g];var y={top:0,bottom:0};l.viewportTop;l.viewportBottom;l.documentHeight;l.viewportHeight=e();var x;var V;var k;var T;var I;a.prototype={on:function(t,e,o){switch(true){case t===f&&!this.isInViewport&&this.isAboveViewport:case t===d&&this.isInViewport:case t===h&&this.isFullyInViewport:case t===m&&this.isAboveViewport&&!this.isInViewport:case t===v&&this.isAboveViewport:e();if(o){return}}if(this.callbacks[t]){this.callbacks[t].push({callback:e,isOne:o})}else{throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+b.join(", "))}},off:function(t,e){if(this.callbacks[t]){for(var o=0,i;i=this.callbacks[t][o];o++){if(i.callback===e){this.callbacks[t].splice(o,1);break}}}else{throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+b.join(", "))}},one:function(t,e){this.on(t,e,true)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom;this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<l.viewportTop;this.isBelowViewport=this.bottom>l.viewportBottom;this.isInViewport=this.top<=l.viewportBottom&&this.bottom>=l.viewportTop;this.isFullyInViewport=this.top>=l.viewportTop&&this.bottom<=l.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=p.indexOf(this),e=this;p.splice(t,1);for(var o=0,i=b.length;o<i;o++){e.callbacks[b[o]].length=0}},lock:function(){this.locked=true},unlock:function(){this.locked=false}};var S=function(t){return function(e,o){this.on.call(this,t,e,o)}};for(var C=0,z=b.length;C<z;C++){var _=b[C];a.prototype[_]=S(_)}try{o()}catch(D){t(o)}c.on("scroll",s);c.on("resize",n);l.beget=l.create=function(e,o){if(typeof e==="string"){e=t(e)[0]}if(e instanceof t){e=e[0]}var i=new a(e,o);p.push(i);i.update();return i};l.update=function(){V=null;o();r()};l.recalculateLocations=function(){l.documentHeight=0;l.update()};return l});function countUp(t,e,o,i,n,r){for(var a=0,s=["webkit","moz","ms","o"],l=0;l<s.length&&!window.requestAnimationFrame;++l)window.requestAnimationFrame=window[s[l]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[l]+"CancelAnimationFrame"]||window[s[l]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var e=(new Date).getTime(),o=Math.max(0,16-(e-a)),i=window.setTimeout(function(){t(e+o)},o);return a=e+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),this.options=r||{useEasing:!0,useGrouping:!0,separator:",",decimal:"."},""==this.options.separator&&(this.options.useGrouping=!1),null==this.options.prefix&&(this.options.prefix=""),null==this.options.suffix&&(this.options.suffix="");var c=this;this.d="string"==typeof t?document.getElementById(t):t,this.startVal=Number(e),this.endVal=Number(o),this.countDown=this.startVal>this.endVal?!0:!1,this.startTime=null,this.timestamp=null,this.remaining=null,this.frameVal=this.startVal,this.rAF=null,this.decimals=Math.max(0,i||0),this.dec=Math.pow(10,this.decimals),this.duration=1e3*n||2e3,this.version=function(){return"1.3.1"},this.printValue=function(t){var e=isNaN(t)?"--":c.formatNumber(t);"INPUT"==c.d.tagName?this.d.value=e:this.d.innerHTML=e},this.easeOutExpo=function(t,e,o,i){return 1024*o*(-Math.pow(2,-10*t/i)+1)/1023+e},this.count=function(t){null===c.startTime&&(c.startTime=t),c.timestamp=t;var e=t-c.startTime;if(c.remaining=c.duration-e,c.options.useEasing)if(c.countDown){var o=c.easeOutExpo(e,0,c.startVal-c.endVal,c.duration);c.frameVal=c.startVal-o}else c.frameVal=c.easeOutExpo(e,c.startVal,c.endVal-c.startVal,c.duration);else if(c.countDown){var o=(c.startVal-c.endVal)*(e/c.duration);c.frameVal=c.startVal-o}else c.frameVal=c.startVal+(c.endVal-c.startVal)*(e/c.duration);c.frameVal=c.countDown?c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),e<c.duration?c.rAF=requestAnimationFrame(c.count):null!=c.callback&&c.callback()},this.start=function(t){return c.callback=t,isNaN(c.endVal)||isNaN(c.startVal)?(console.log("countUp error: startVal or endVal is not a number"),c.printValue()):c.rAF=requestAnimationFrame(c.count),!1},this.stop=function(){cancelAnimationFrame(c.rAF)},this.reset=function(){c.startTime=null,c.startVal=e,cancelAnimationFrame(c.rAF),c.printValue(c.startVal)},this.resume=function(){c.stop(),c.startTime=null,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)},this.formatNumber=function(t){t=t.toFixed(c.decimals),t+="";var e,o,i,n;if(e=t.split("."),o=e[0],i=e.length>1?c.options.decimal+e[1]:"",n=/(\d+)(\d{3})/,c.options.useGrouping)for(;n.test(o);)o=o.replace(n,"$1"+c.options.separator+"$2");return c.options.prefix+o+i+c.options.suffix},c.printValue(c.startVal)}(function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(jQuery)})(function(t){"use strict";function e(t){return"string"==typeof t?parseInt(t,10):~~t}var o={wheelSpeed:1,wheelPropagation:!1,swipePropagation:!0,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},i=0,n=function(){var t=i++;return function(e){var o=".perfect-scrollbar-"+t;return e===void 0?o:e+o}},r="WebkitAppearance"in document.documentElement.style;t.fn.perfectScrollbar=function(i,a){return this.each(function(){function s(t,o){var i=t+o,n=z-P;Y=0>i?0:i>n?n:i;var r=e(Y*(D-z)/(z-P));I.scrollTop(r)}function l(t,o){var i=t+o,n=C-L;F=0>i?0:i>n?n:i;var r=e(F*(_-C)/(C-L));I.scrollLeft(r)}function c(t){return T.minScrollbarLength&&(t=Math.max(t,T.minScrollbarLength)),T.maxScrollbarLength&&(t=Math.min(t,T.maxScrollbarLength)),t}function u(){var t={width:A};t.left=j?I.scrollLeft()+C-_:I.scrollLeft(),q?t.bottom=B-I.scrollTop():t.top=R+I.scrollTop(),O.css(t);var e={top:I.scrollTop(),height:H};J?e.right=j?_-I.scrollLeft()-G-Q.outerWidth():G-I.scrollLeft():e.left=j?I.scrollLeft()+2*C-_-Z-Q.outerWidth():Z+I.scrollLeft(),$.css(e),X.css({left:F,width:L-U}),Q.css({top:Y,height:P-tt})}function p(){I.removeClass("ps-active-x"),I.removeClass("ps-active-y"),C=T.includePadding?I.innerWidth():I.width(),z=T.includePadding?I.innerHeight():I.height(),_=I.prop("scrollWidth"),D=I.prop("scrollHeight"),!T.suppressScrollX&&_>C+T.scrollXMarginOffset?(E=!0,A=C-K,L=c(e(A*C/_)),F=e(I.scrollLeft()*(A-L)/(_-C))):(E=!1,L=0,F=0,I.scrollLeft(0)),!T.suppressScrollY&&D>z+T.scrollYMarginOffset?(M=!0,H=z-et,P=c(e(H*z/D)),Y=e(I.scrollTop()*(H-P)/(D-z))):(M=!1,P=0,Y=0,I.scrollTop(0)),F>=A-L&&(F=A-L),Y>=H-P&&(Y=H-P),u(),E&&I.addClass("ps-active-x"),M&&I.addClass("ps-active-y")}function f(){var e,o,i=function(t){l(e,t.pageX-o),p(),t.stopPropagation(),t.preventDefault()},n=function(){O.removeClass("in-scrolling"),t(W).unbind(N("mousemove"),i)};X.bind(N("mousedown"),function(r){o=r.pageX,e=X.position().left,O.addClass("in-scrolling"),t(W).bind(N("mousemove"),i),t(W).one(N("mouseup"),n),r.stopPropagation(),r.preventDefault()}),e=o=null}function d(){var e,o,i=function(t){s(e,t.pageY-o),p(),t.stopPropagation(),t.preventDefault()},n=function(){$.removeClass("in-scrolling"),t(W).unbind(N("mousemove"),i)};Q.bind(N("mousedown"),function(r){o=r.pageY,e=Q.position().top,$.addClass("in-scrolling"),t(W).bind(N("mousemove"),i),t(W).one(N("mouseup"),n),r.stopPropagation(),r.preventDefault()}),e=o=null}function h(t,e){var o=I.scrollTop();if(0===t){if(!M)return!1;if(0===o&&e>0||o>=D-z&&0>e)return!T.wheelPropagation}var i=I.scrollLeft();if(0===e){if(!E)return!1;if(0===i&&0>t||i>=_-C&&t>0)return!T.wheelPropagation}return!0}function m(t,e){var o=I.scrollTop(),i=I.scrollLeft(),n=Math.abs(t),r=Math.abs(e);if(r>n){if(0>e&&o===D-z||e>0&&0===o)return!T.swipePropagation}else if(n>r&&(0>t&&i===_-C||t>0&&0===i))return!T.swipePropagation;return!0}function v(){function t(t){var e=t.originalEvent.deltaX,o=-1*t.originalEvent.deltaY;return(e===void 0||o===void 0)&&(e=-1*t.originalEvent.wheelDeltaX/6,o=t.originalEvent.wheelDeltaY/6),t.originalEvent.deltaMode&&1===t.originalEvent.deltaMode&&(e*=10,o*=10),e!==e&&o!==o&&(e=0,o=t.originalEvent.wheelDelta),[e,o]}function e(e){if(r||!(I.find("select:focus").length>0)){var i=t(e),n=i[0],a=i[1];o=!1,T.useBothWheelAxes?M&&!E?(a?I.scrollTop(I.scrollTop()-a*T.wheelSpeed):I.scrollTop(I.scrollTop()+n*T.wheelSpeed),o=!0):E&&!M&&(n?I.scrollLeft(I.scrollLeft()+n*T.wheelSpeed):I.scrollLeft(I.scrollLeft()-a*T.wheelSpeed),o=!0):(I.scrollTop(I.scrollTop()-a*T.wheelSpeed),I.scrollLeft(I.scrollLeft()+n*T.wheelSpeed)),p(),o=o||h(n,a),o&&(e.stopPropagation(),e.preventDefault())}}var o=!1;window.onwheel!==void 0?I.bind(N("wheel"),e):window.onmousewheel!==void 0&&I.bind(N("mousewheel"),e)}function w(){var e=!1;I.bind(N("mouseenter"),function(){e=!0}),I.bind(N("mouseleave"),function(){e=!1});var o=!1;t(W).bind(N("keydown"),function(i){if((!i.isDefaultPrevented||!i.isDefaultPrevented())&&e){for(var n=document.activeElement?document.activeElement:W.activeElement;n.shadowRoot;)n=n.shadowRoot.activeElement;if(!t(n).is(":input,[contenteditable]")){var r=0,a=0;switch(i.which){case 37:r=-30;break;case 38:a=30;break;case 39:r=30;break;case 40:a=-30;break;case 33:a=90;break;case 32:case 34:a=-90;break;case 35:a=i.ctrlKey?-D:-z;break;case 36:a=i.ctrlKey?I.scrollTop():z;break;default:return}I.scrollTop(I.scrollTop()-a),I.scrollLeft(I.scrollLeft()+r),o=h(r,a),o&&i.preventDefault()}}})}function g(){function t(t){t.stopPropagation()}Q.bind(N("click"),t),$.bind(N("click"),function(t){var o=e(P/2),i=t.pageY-$.offset().top-o,n=z-P,r=i/n;0>r?r=0:r>1&&(r=1),I.scrollTop((D-z)*r)}),X.bind(N("click"),t),O.bind(N("click"),function(t){var o=e(L/2),i=t.pageX-O.offset().left-o,n=C-L,r=i/n;0>r?r=0:r>1&&(r=1),I.scrollLeft((_-C)*r)})}function b(){function e(){var t=window.getSelection?window.getSelection():document.getSlection?document.getSlection():{rangeCount:0};return 0===t.rangeCount?null:t.getRangeAt(0).commonAncestorContainer}function o(){n||(n=setInterval(function(){return S()?(I.scrollTop(I.scrollTop()+r.top),I.scrollLeft(I.scrollLeft()+r.left),p(),void 0):(clearInterval(n),void 0)},50))}function i(){n&&(clearInterval(n),n=null),O.removeClass("in-scrolling"),$.removeClass("in-scrolling")}var n=null,r={top:0,left:0},a=!1;t(W).bind(N("selectionchange"),function(){t.contains(I[0],e())?a=!0:(a=!1,i())}),t(window).bind(N("mouseup"),function(){a&&(a=!1,i())}),t(window).bind(N("mousemove"),function(t){if(a){var e={x:t.pageX,y:t.pageY},n=I.offset(),s={left:n.left,right:n.left+I.outerWidth(),top:n.top,bottom:n.top+I.outerHeight()};e.x<s.left+3?(r.left=-5,O.addClass("in-scrolling")):e.x>s.right-3?(r.left=5,O.addClass("in-scrolling")):r.left=0,e.y<s.top+3?(r.top=5>s.top+3-e.y?-5:-20,$.addClass("in-scrolling")):e.y>s.bottom-3?(r.top=5>e.y-s.bottom+3?5:20,$.addClass("in-scrolling")):r.top=0,0===r.top&&0===r.left?i():o()}})}function y(e,o){function i(t,e){I.scrollTop(I.scrollTop()-e),I.scrollLeft(I.scrollLeft()-t),p()}function n(){w=!0}function r(){w=!1}function a(t){return t.originalEvent.targetTouches?t.originalEvent.targetTouches[0]:t.originalEvent}function s(t){var e=t.originalEvent;return e.targetTouches&&1===e.targetTouches.length?!0:e.pointerType&&"mouse"!==e.pointerType&&e.pointerType!==e.MSPOINTER_TYPE_MOUSE?!0:!1}function l(t){if(s(t)){g=!0;var e=a(t);f.pageX=e.pageX,f.pageY=e.pageY,d=(new Date).getTime(),null!==v&&clearInterval(v),t.stopPropagation()}}function c(t){if(!w&&g&&s(t)){var e=a(t),o={pageX:e.pageX,pageY:e.pageY},n=o.pageX-f.pageX,r=o.pageY-f.pageY;i(n,r),f=o;var l=(new Date).getTime(),c=l-d;c>0&&(h.x=n/c,h.y=r/c,d=l),m(n,r)&&(t.stopPropagation(),t.preventDefault())}}function u(){!w&&g&&(g=!1,clearInterval(v),v=setInterval(function(){return S()?.01>Math.abs(h.x)&&.01>Math.abs(h.y)?(clearInterval(v),void 0):(i(30*h.x,30*h.y),h.x*=.8,h.y*=.8,void 0):(clearInterval(v),void 0)},10))}var f={},d=0,h={},v=null,w=!1,g=!1;e&&(t(window).bind(N("touchstart"),n),t(window).bind(N("touchend"),r),I.bind(N("touchstart"),l),I.bind(N("touchmove"),c),I.bind(N("touchend"),u)),o&&(window.PointerEvent?(t(window).bind(N("pointerdown"),n),t(window).bind(N("pointerup"),r),I.bind(N("pointerdown"),l),I.bind(N("pointermove"),c),I.bind(N("pointerup"),u)):window.MSPointerEvent&&(t(window).bind(N("MSPointerDown"),n),t(window).bind(N("MSPointerUp"),r),I.bind(N("MSPointerDown"),l),I.bind(N("MSPointerMove"),c),I.bind(N("MSPointerUp"),u)))}function x(){I.bind(N("scroll"),function(){p()})}function V(){I.unbind(N()),t(window).unbind(N()),t(W).unbind(N()),I.data("perfect-scrollbar",null),I.data("perfect-scrollbar-update",null),I.data("perfect-scrollbar-destroy",null),X.remove(),Q.remove(),O.remove(),$.remove(),I=O=$=X=Q=E=M=C=z=_=D=L=F=B=q=R=P=Y=G=J=Z=j=N=null}function k(){p(),x(),f(),d(),g(),b(),v(),(ot||it)&&y(ot,it),T.useKeyboard&&w(),I.data("perfect-scrollbar",I),I.data("perfect-scrollbar-update",p),I.data("perfect-scrollbar-destroy",V)}var T=t.extend(!0,{},o),I=t(this),S=function(){return!!I};if("object"==typeof i?t.extend(!0,T,i):a=i,"update"===a)return I.data("perfect-scrollbar-update")&&I.data("perfect-scrollbar-update")(),I;if("destroy"===a)return I.data("perfect-scrollbar-destroy")&&I.data("perfect-scrollbar-destroy")(),I;if(I.data("perfect-scrollbar"))return I.data("perfect-scrollbar");I.addClass("ps-container");var C,z,_,D,E,L,F,A,M,P,Y,H,j="rtl"===I.css("direction"),N=n(),W=this.ownerDocument||document,O=t("<div class='ps-scrollbar-x-rail'>").appendTo(I),X=t("<div class='ps-scrollbar-x'>").appendTo(O),B=e(O.css("bottom")),q=B===B,R=q?null:e(O.css("top")),U=e(O.css("borderLeftWidth"))+e(O.css("borderRightWidth")),K=e(O.css("marginLeft"))+e(O.css("marginRight")),$=t("<div class='ps-scrollbar-y-rail'>").appendTo(I),Q=t("<div class='ps-scrollbar-y'>").appendTo($),G=e($.css("right")),J=G===G,Z=J?null:e($.css("left")),tt=e($.css("borderTopWidth"))+e($.css("borderBottomWidth")),et=e($.css("marginTop"))+e($.css("marginBottom")),ot="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,it=null!==window.navigator.msMaxTouchPoints;return k(),I})}});(function(t){t.fn.hoverIntent=function(e,o,i){var n={interval:100,sensitivity:6,timeout:0};if(typeof e==="object"){n=t.extend(n,e)}else{if(t.isFunction(o)){n=t.extend(n,{over:e,out:o,selector:i})}else{n=t.extend(n,{over:e,out:e,selector:o})}}var r,a,s,l;var c=function(t){r=t.pageX;a=t.pageY};var u=function(e,o){o.hoverIntent_t=clearTimeout(o.hoverIntent_t);if(Math.sqrt((s-r)*(s-r)+(l-a)*(l-a))<n.sensitivity){t(o).off("mousemove.hoverIntent",c);o.hoverIntent_s=true;return n.over.apply(o,[e])}else{s=r;l=a;o.hoverIntent_t=setTimeout(function(){u(e,o)},n.interval)}};var p=function(t,e){e.hoverIntent_t=clearTimeout(e.hoverIntent_t);e.hoverIntent_s=false;return n.out.apply(e,[t])};var f=function(e){var o=t.extend({},e);var i=this;if(i.hoverIntent_t){i.hoverIntent_t=clearTimeout(i.hoverIntent_t)}if(e.type==="mouseenter"){s=o.pageX;l=o.pageY;t(i).on("mousemove.hoverIntent",c);if(!i.hoverIntent_s){i.hoverIntent_t=setTimeout(function(){u(o,i)},n.interval)}}else{t(i).off("mousemove.hoverIntent",c);if(i.hoverIntent_s){i.hoverIntent_t=setTimeout(function(){p(o,i)},n.timeout)}}};return this.on({"mouseenter.hoverIntent":f,"mouseleave.hoverIntent":f},n.selector)}})(jQuery);(function(t){"use strict";var e=function(t,o,i){return 1===arguments.length?e.get(t):e.set(t,o,i)};e._document=document;e._navigator=navigator;e.defaults={path:"/"};e.get=function(t){e._cachedDocumentCookie!==e._document.cookie&&e._renewCache();return e._cache[t]};e.set=function(o,i,n){n=e._getExtendedOptions(n);n.expires=e._getExpiresDate(i===t?-1:n.expires);e._document.cookie=e._generateCookieString(o,i,n);return e};e.expire=function(o,i){return e.set(o,t,i)};e._getExtendedOptions=function(o){return{path:o&&o.path||e.defaults.path,domain:o&&o.domain||e.defaults.domain,expires:o&&o.expires||e.defaults.expires,secure:o&&o.secure!==t?o.secure:e.defaults.secure}};e._isValidDate=function(t){return"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t.getTime())};e._getExpiresDate=function(t,o){o=o||new Date;switch(typeof t){case"number":t=new Date(o.getTime()+1e3*t);break;case"string":t=new Date(t)}if(t&&!e._isValidDate(t))throw Error("`expires` parameter cannot be converted to a valid Date instance");return t};e._generateCookieString=function(t,e,o){t=t.replace(/[^#$&+\^`|]/g,encodeURIComponent);t=t.replace(/\(/g,"%28").replace(/\)/g,"%29");e=(e+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);o=o||{};t=t+"="+e+(o.path?";path="+o.path:"");t+=o.domain?";domain="+o.domain:"";t+=o.expires?";expires="+o.expires.toUTCString():"";return t+=o.secure?";secure":""};e._getCookieObjectFromString=function(o){var i={};o=o?o.split("; "):[];for(var n=0;n<o.length;n++){var r=e._getKeyValuePairFromCookieString(o[n]);i[r.key]===t&&(i[r.key]=r.value)}return i};e._getKeyValuePairFromCookieString=function(t){var e=t.indexOf("="),e=0>e?t.length:e;return{key:decodeURIComponent(t.substr(0,e)),value:decodeURIComponent(t.substr(e+1))}};e._renewCache=function(){e._cache=e._getCookieObjectFromString(e._document.cookie);e._cachedDocumentCookie=e._document.cookie};e._areEnabled=function(){var t="1"===e.set("cookies.js",1).get("cookies.js");e.expire("cookies.js");return t};e.enabled=e._areEnabled();"function"===typeof define&&define.amd?define(function(){return e}):"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=e),exports.Cookies=e):window.Cookies=e})();