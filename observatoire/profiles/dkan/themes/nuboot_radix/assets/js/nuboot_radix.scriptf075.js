!function(e){}(jQuery),!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,i=e.documentElement,a=i.firstElementChild||i.firstChild,s=e.createElement("body"),n=e.createElement("div");return n.id="mq-test-1",n.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(n),function(e){return n.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',i.insertBefore(s,a),t=42===n.offsetWidth,i.removeChild(s),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";function t(){E(!0)}var i={};e.respond=i,i.update=function(){};var a=[],s=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(i){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),n=function(e,t){var i=s();i&&(i.open("GET",e,!0),i.onreadystatechange=function(){4!==i.readyState||200!==i.status&&304!==i.status||t(i.responseText)},4!==i.readyState&&i.send(null))},r=function(e){return e.replace(i.regex.minmaxwh,"").match(i.regex.other)};if(i.ajax=n,i.queue=a,i.unsupportedmq=r,i.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},i.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!i.mediaQueriesSupported){var o,l,d,c=e.document,u=c.documentElement,m=[],h=[],p=[],f={},g=30,v=c.getElementsByTagName("head")[0]||u,x=c.getElementsByTagName("base")[0],y=v.getElementsByTagName("link"),w=function(){var e,t=c.createElement("div"),i=c.body,a=u.style.fontSize,s=i&&i.style.fontSize,n=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",i||(i=n=c.createElement("body"),i.style.background="none"),u.style.fontSize="100%",i.style.fontSize="100%",i.appendChild(t),n&&u.insertBefore(i,u.firstChild),e=t.offsetWidth,n?u.removeChild(i):i.removeChild(t),u.style.fontSize=a,s&&(i.style.fontSize=s),e=d=parseFloat(e)},E=function(t){var i="clientWidth",a=u[i],s="CSS1Compat"===c.compatMode&&a||c.body[i]||a,n={},r=y[y.length-1],f=(new Date).getTime();if(t&&o&&g>f-o)return e.clearTimeout(l),void(l=e.setTimeout(E,g));o=f;for(var x in m)if(m.hasOwnProperty(x)){var b=m[x],S=b.minw,k=b.maxw,C=null===S,T=null===k,z="em";S&&(S=parseFloat(S)*(S.indexOf(z)>-1?d||w():1)),k&&(k=parseFloat(k)*(k.indexOf(z)>-1?d||w():1)),b.hasquery&&(C&&T||!(C||s>=S)||!(T||k>=s))||(n[b.media]||(n[b.media]=[]),n[b.media].push(h[b.rules]))}for(var $ in p)p.hasOwnProperty($)&&p[$]&&p[$].parentNode===v&&v.removeChild(p[$]);p.length=0;for(var F in n)if(n.hasOwnProperty(F)){var L=c.createElement("style"),O=n[F].join("\n");L.type="text/css",L.media=F,v.insertBefore(L,r.nextSibling),L.styleSheet?L.styleSheet.cssText=O:L.appendChild(c.createTextNode(O)),p.push(L)}},b=function(e,t,a){var s=e.replace(i.regex.comments,"").replace(i.regex.keyframes,"").match(i.regex.media),n=s&&s.length||0;t=t.substring(0,t.lastIndexOf("/"));var o=function(e){return e.replace(i.regex.urls,"$1"+t+"$2$3")},l=!n&&a;t.length&&(t+="/"),l&&(n=1);for(var d=0;n>d;d++){var c,u,p,f;l?(c=a,h.push(o(e))):(c=s[d].match(i.regex.findStyles)&&RegExp.$1,h.push(RegExp.$2&&o(RegExp.$2))),p=c.split(","),f=p.length;for(var g=0;f>g;g++)u=p[g],r(u)||m.push({media:u.split("(")[0].match(i.regex.only)&&RegExp.$2||"all",rules:h.length-1,hasquery:u.indexOf("(")>-1,minw:u.match(i.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:u.match(i.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}E()},S=function(){if(a.length){var t=a.shift();n(t.href,function(i){b(i,t.href,t.media),f[t.href]=!0,e.setTimeout(function(){S()},0)})}},k=function(){for(var t=0;t<y.length;t++){var i=y[t],s=i.href,n=i.media,r=i.rel&&"stylesheet"===i.rel.toLowerCase();s&&r&&!f[s]&&(i.styleSheet&&i.styleSheet.rawCssText?(b(i.styleSheet.rawCssText,s,n),f[s]=!0):(!/^([a-zA-Z:]*\/\/)/.test(s)&&!x||s.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===s.substring(0,2)&&(s=e.location.protocol+s),a.push({href:s,media:n})))}S()};k(),i.update=k,i.getEmValue=w,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),function(e){e.fn.dkanFormsHide=function(){this.each(function(){e(this).addClass("compact-form-wrapper");var t=e(this).find(".description").addClass("compact-form-description"),i=e(this).find("input");if(t.click(function(){i.focus()}),""==e(i).html())var i=e(this).find("textarea");if(null==e(i).html())var i=e(this).find("input");i.addClass("compact-form-input"),i.blur(function(){""===i.val()&&t.fadeIn("fast")}),i.keyup(function(){""!=i.val()&&t.hide()}),""!=i.val()&&t.css("display","none")})},e.fn.dkanFormsAutoDeluxeHide=function(){this.each(function(){e(this).addClass("compact-form-wrapper");var t=e(this).find(".description").addClass("compact-form-description"),i=e(this).find("#autocomplete-deluxe-input");t.click(function(){i.focus()}),i.focus(function(){t.hide()}),null!=e("#autocomplete-deluxe-item").html()&&t.css("display","none"),""!=e(this).find("input").val()&&t.css("display","none")})},Drupal.behaviors.dkanSite={attach:function(t,i){var a="#views-exposed-form-dataset-page,#block-dkan-sitewide-dkan-sitewide-search-bar,#views-exposed-form-groups-search-entity-view-1,#views-exposed-form-user-profile-search-entity-view-1";e(a,t).dkanFormsHide();var s=".field-name-field-tags";e(s,t).dkanFormsAutoDeluxeHide(),e(".filter-help.form-group p").append(' | <a href="#" class="text-help-toggle">'+Drupal.t("Toggle text format")+"</a>"),e(".filter-guidelines-processed").hide(),e(".text-help-toggle").click(function(t){t.preventDefault(),e(".form-type-select").toggle(),e(".filter-guidelines-processed").toggle()})}},Drupal.behaviors.dkan508Site={attach:function(t,i){e("#edit-operation").attr("aria-label","Operation"),e("input.bef-datepicker").attr("aria-label","Date popup"),e("a.tabledrag-handle").html('<div class="handle">&nbsp;</div><span class="element-hidden">Drag and drop"</span>')}}}(jQuery),window.svgeezy=function(){return{init:function(e,t){this.avoid=e||!1,this.filetype=t||"png",this.svgSupport=this.supportsSvg(),this.svgSupport||(this.images=document.getElementsByTagName("img"),this.imgL=this.images.length,this.fallbacks())},fallbacks:function(){for(;this.imgL--;)if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var e=this.images[this.imgL].getAttribute("src");if(null===e)continue;if("svg"==this.getFileExt(e)){var t=e.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",t)}}},getFileExt:function(e){var t=e.split(".").pop();return t.indexOf("?")!==-1&&(t=t.split("?")[0]),t},hasClass:function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51Ym9vdF9yYWRpeC5zY3JpcHQuanMiLCJyZXNwb25kLm1pbi5qcyIsInNpdGV3aWRlLmpzIiwic3ZnZWV6eS5taW4uanMiXSwibmFtZXMiOlsiJCIsImpRdWVyeSIsImEiLCJtYXRjaE1lZGlhIiwiYiIsImMiLCJkb2N1bWVudEVsZW1lbnQiLCJkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJmaXJzdENoaWxkIiwiZSIsImNyZWF0ZUVsZW1lbnQiLCJmIiwiaWQiLCJzdHlsZSIsImNzc1RleHQiLCJiYWNrZ3JvdW5kIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJpbnNlcnRCZWZvcmUiLCJvZmZzZXRXaWR0aCIsInJlbW92ZUNoaWxkIiwibWF0Y2hlcyIsIm1lZGlhIiwiZG9jdW1lbnQiLCJ0aGlzIiwidiIsInJlc3BvbmQiLCJ1cGRhdGUiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJnIiwicmVwbGFjZSIsInJlZ2V4IiwibWlubWF4d2giLCJtYXRjaCIsIm90aGVyIiwiYWpheCIsInF1ZXVlIiwidW5zdXBwb3J0ZWRtcSIsImtleWZyYW1lcyIsImNvbW1lbnRzIiwidXJscyIsImZpbmRTdHlsZXMiLCJvbmx5IiwibWludyIsIm1heHciLCJtZWRpYVF1ZXJpZXNTdXBwb3J0ZWQiLCJoIiwiaSIsImoiLCJrIiwibCIsIm0iLCJuIiwibyIsInAiLCJxIiwiciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicyIsInQiLCJ1IiwiYm9keSIsImZvbnRTaXplIiwicGFyc2VGbG9hdCIsImNvbXBhdE1vZGUiLCJsZW5ndGgiLCJEYXRlIiwiZ2V0VGltZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJoYXNPd25Qcm9wZXJ0eSIsInciLCJ4IiwieSIsInoiLCJBIiwiQiIsImluZGV4T2YiLCJoYXNxdWVyeSIsInB1c2giLCJydWxlcyIsIkMiLCJwYXJlbnROb2RlIiwiRCIsIkUiLCJGIiwiam9pbiIsInR5cGUiLCJuZXh0U2libGluZyIsInN0eWxlU2hlZXQiLCJjcmVhdGVUZXh0Tm9kZSIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiUmVnRXhwIiwiJDEiLCIkMiIsInNwbGl0Iiwic2hpZnQiLCJocmVmIiwicmVsIiwidG9Mb3dlckNhc2UiLCJyYXdDc3NUZXh0IiwidGVzdCIsImxvY2F0aW9uIiwiaG9zdCIsInByb3RvY29sIiwiZ2V0RW1WYWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImZuIiwiZGthbkZvcm1zSGlkZSIsImVhY2giLCJhZGRDbGFzcyIsImRlc2MiLCJmaW5kIiwiaW5wdXQiLCJjbGljayIsImZvY3VzIiwiaHRtbCIsImJsdXIiLCJ2YWwiLCJmYWRlSW4iLCJrZXl1cCIsImhpZGUiLCJjc3MiLCJka2FuRm9ybXNBdXRvRGVsdXhlSGlkZSIsIkRydXBhbCIsImJlaGF2aW9ycyIsImRrYW5TaXRlIiwiYXR0YWNoIiwiY29udGV4dCIsInNldHRpbmdzIiwiZWxlbWVudHMiLCJhdXRvRGVsdXhlRWxlbWVudHMiLCJhcHBlbmQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImRrYW41MDhTaXRlIiwiYXR0ciIsIndpbmRvdyIsInN2Z2VlenkiLCJpbml0IiwiYXZvaWQiLCJmaWxldHlwZSIsInN2Z1N1cHBvcnQiLCJzdXBwb3J0c1N2ZyIsImltYWdlcyIsImltZ0wiLCJmYWxsYmFja3MiLCJoYXNDbGFzcyIsImdldEF0dHJpYnV0ZSIsImdldEZpbGVFeHQiLCJzZXRBdHRyaWJ1dGUiLCJwb3AiLCJjbGFzc05hbWUiLCJpbXBsZW1lbnRhdGlvbiIsImhhc0ZlYXR1cmUiXSwibWFwcGluZ3MiOiJDQUlBLFNBQUFBLEtBRUFDLFNDREEsU0FBQUMsR0FBQSxZQUFBQSxHQUFBQyxXQUFBRCxFQUFBQyxZQUFBLFNBQUFELEdBQUEsR0FBQUUsR0FBQUMsRUFBQUgsRUFBQUks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S0FBQTZILE1BQUEsQ0FBQSxHQUFBbkYsR0FBQTFDLEtBQUFpSSxPQUFBakksS0FBQWtJLE1BQUFHLGFBQUEsTUFBQSxJQUFBLE9BQUEzRixFQUFBLFFBQUEsSUFBQSxPQUFBMUMsS0FBQXNJLFdBQUE1RixHQUFBLENBQUEsR0FBQVosR0FBQVksRUFBQTdCLFFBQUEsT0FBQSxJQUFBYixLQUFBOEgsU0FBQTlILE1BQUFpSSxPQUFBakksS0FBQWtJLE1BQUFLLGFBQUEsTUFBQXpHLE1BQUF3RyxXQUFBLFNBQUE1RixHQUFBLEdBQUFaLEdBQUFZLEVBQUFxQyxNQUFBLEtBQUF5RCxLQUFBLE9BQUExRyxHQUFBOEIsUUFBQSxZQUFBOUIsRUFBQUEsRUFBQWlELE1BQUEsS0FBQSxJQUFBakQsR0FBQXNHLFNBQUEsU0FBQTFGLEVBQUFaLEdBQUEsT0FBQSxJQUFBWSxFQUFBK0YsVUFBQSxLQUFBN0UsUUFBQSxJQUFBOUIsRUFBQSxTQUFBa0csWUFBQSxXQUFBLE1BQUFqSSxVQUFBMkksZUFBQUMsV0FBQSwyQ0FBQSIsImZpbGUiOiJudWJvb3RfcmFkaXguc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEN1c3RvbSBzY3JpcHRzIGZvciB0aGVtZS5cclxuICovXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIC8vIGNvZGUgaGVyZVxyXG59KShqUXVlcnkpO1xyXG4iLCIvKiEgUmVzcG9uZC5qcyB2MS40LjI6IG1pbi9tYXgtd2lkdGggbWVkaWEgcXVlcnkgcG9seWZpbGxcclxuICogQ29weXJpZ2h0IDIwMTQgU2NvdHQgSmVobFxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcclxuICogaHR0cDovL2oubXAvcmVzcG9uZGpzICovXHJcblxyXG4hZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7YS5tYXRjaE1lZGlhPWEubWF0Y2hNZWRpYXx8ZnVuY3Rpb24oYSl7dmFyIGIsYz1hLmRvY3VtZW50RWxlbWVudCxkPWMuZmlyc3RFbGVtZW50Q2hpbGR8fGMuZmlyc3RDaGlsZCxlPWEuY3JlYXRlRWxlbWVudChcImJvZHlcIiksZj1hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGYuaWQ9XCJtcS10ZXN0LTFcIixmLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTEwMGVtXCIsZS5zdHlsZS5iYWNrZ3JvdW5kPVwibm9uZVwiLGUuYXBwZW5kQ2hpbGQoZiksZnVuY3Rpb24oYSl7cmV0dXJuIGYuaW5uZXJIVE1MPScmc2h5OzxzdHlsZSBtZWRpYT1cIicrYSsnXCI+ICNtcS10ZXN0LTEgeyB3aWR0aDogNDJweDsgfTwvc3R5bGU+JyxjLmluc2VydEJlZm9yZShlLGQpLGI9NDI9PT1mLm9mZnNldFdpZHRoLGMucmVtb3ZlQ2hpbGQoZSkse21hdGNoZXM6YixtZWRpYTphfX19KGEuZG9jdW1lbnQpfSh0aGlzKSxmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKCl7dighMCl9dmFyIGM9e307YS5yZXNwb25kPWMsYy51cGRhdGU9ZnVuY3Rpb24oKXt9O3ZhciBkPVtdLGU9ZnVuY3Rpb24oKXt2YXIgYj0hMTt0cnl7Yj1uZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChjKXtiPW5ldyBhLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYn19KCksZj1mdW5jdGlvbihhLGIpe3ZhciBjPWUoKTtjJiYoYy5vcGVuKFwiR0VUXCIsYSwhMCksYy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0IT09Yy5yZWFkeVN0YXRlfHwyMDAhPT1jLnN0YXR1cyYmMzA0IT09Yy5zdGF0dXN8fGIoYy5yZXNwb25zZVRleHQpfSw0IT09Yy5yZWFkeVN0YXRlJiZjLnNlbmQobnVsbCkpfSxnPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoYy5yZWdleC5taW5tYXh3aCxcIlwiKS5tYXRjaChjLnJlZ2V4Lm90aGVyKX07aWYoYy5hamF4PWYsYy5xdWV1ZT1kLGMudW5zdXBwb3J0ZWRtcT1nLGMucmVnZXg9e21lZGlhOi9AbWVkaWFbXlxce10rXFx7KFteXFx7XFx9XSpcXHtbXlxcfVxce10qXFx9KSsvZ2ksa2V5ZnJhbWVzOi9AKD86XFwtKD86b3xtb3p8d2Via2l0KVxcLSk/a2V5ZnJhbWVzW15cXHtdK1xceyg/OlteXFx7XFx9XSpcXHtbXlxcfVxce10qXFx9KStbXlxcfV0qXFx9L2dpLGNvbW1lbnRzOi9cXC9cXCpbXipdKlxcKisoW14vXVteKl0qXFwqKykqXFwvL2dpLHVybHM6Lyh1cmxcXCgpWydcIl0/KFteXFwvXFwpJ1wiXVteOlxcKSdcIl0rKVsnXCJdPyhcXCkpL2csZmluZFN0eWxlczovQG1lZGlhICooW15cXHtdKylcXHsoW1xcU1xcc10rPykkLyxvbmx5Oi8ob25seVxccyspPyhbYS16QS1aXSspXFxzPy8sbWludzovXFwoXFxzKm1pblxcLXdpZHRoXFxzKjpcXHMqKFxccypbMC05XFwuXSspKHB4fGVtKVxccypcXCkvLG1heHc6L1xcKFxccyptYXhcXC13aWR0aFxccyo6XFxzKihcXHMqWzAtOVxcLl0rKShweHxlbSlcXHMqXFwpLyxtaW5tYXh3aDovXFwoXFxzKm0oaW58YXgpXFwtKGhlaWdodHx3aWR0aClcXHMqOlxccyooXFxzKlswLTlcXC5dKykocHh8ZW0pXFxzKlxcKS9naSxvdGhlcjovXFwoW15cXCldKlxcKS9nfSxjLm1lZGlhUXVlcmllc1N1cHBvcnRlZD1hLm1hdGNoTWVkaWEmJm51bGwhPT1hLm1hdGNoTWVkaWEoXCJvbmx5IGFsbFwiKSYmYS5tYXRjaE1lZGlhKFwib25seSBhbGxcIikubWF0Y2hlcywhYy5tZWRpYVF1ZXJpZXNTdXBwb3J0ZWQpe3ZhciBoLGksaixrPWEuZG9jdW1lbnQsbD1rLmRvY3VtZW50RWxlbWVudCxtPVtdLG49W10sbz1bXSxwPXt9LHE9MzAscj1rLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXXx8bCxzPWsuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJiYXNlXCIpWzBdLHQ9ci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIiksdT1mdW5jdGlvbigpe3ZhciBhLGI9ay5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGM9ay5ib2R5LGQ9bC5zdHlsZS5mb250U2l6ZSxlPWMmJmMuc3R5bGUuZm9udFNpemUsZj0hMTtyZXR1cm4gYi5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOjFlbTt3aWR0aDoxZW1cIixjfHwoYz1mPWsuY3JlYXRlRWxlbWVudChcImJvZHlcIiksYy5zdHlsZS5iYWNrZ3JvdW5kPVwibm9uZVwiKSxsLnN0eWxlLmZvbnRTaXplPVwiMTAwJVwiLGMuc3R5bGUuZm9udFNpemU9XCIxMDAlXCIsYy5hcHBlbmRDaGlsZChiKSxmJiZsLmluc2VydEJlZm9yZShjLGwuZmlyc3RDaGlsZCksYT1iLm9mZnNldFdpZHRoLGY/bC5yZW1vdmVDaGlsZChjKTpjLnJlbW92ZUNoaWxkKGIpLGwuc3R5bGUuZm9udFNpemU9ZCxlJiYoYy5zdHlsZS5mb250U2l6ZT1lKSxhPWo9cGFyc2VGbG9hdChhKX0sdj1mdW5jdGlvbihiKXt2YXIgYz1cImNsaWVudFdpZHRoXCIsZD1sW2NdLGU9XCJDU1MxQ29tcGF0XCI9PT1rLmNvbXBhdE1vZGUmJmR8fGsuYm9keVtjXXx8ZCxmPXt9LGc9dFt0Lmxlbmd0aC0xXSxwPShuZXcgRGF0ZSkuZ2V0VGltZSgpO2lmKGImJmgmJnE+cC1oKXJldHVybiBhLmNsZWFyVGltZW91dChpKSxpPWEuc2V0VGltZW91dCh2LHEpLHZvaWQgMDtoPXA7Zm9yKHZhciBzIGluIG0paWYobS5oYXNPd25Qcm9wZXJ0eShzKSl7dmFyIHc9bVtzXSx4PXcubWludyx5PXcubWF4dyx6PW51bGw9PT14LEE9bnVsbD09PXksQj1cImVtXCI7eCYmKHg9cGFyc2VGbG9hdCh4KSooeC5pbmRleE9mKEIpPi0xP2p8fHUoKToxKSkseSYmKHk9cGFyc2VGbG9hdCh5KSooeS5pbmRleE9mKEIpPi0xP2p8fHUoKToxKSksdy5oYXNxdWVyeSYmKHomJkF8fCEoenx8ZT49eCl8fCEoQXx8eT49ZSkpfHwoZlt3Lm1lZGlhXXx8KGZbdy5tZWRpYV09W10pLGZbdy5tZWRpYV0ucHVzaChuW3cucnVsZXNdKSl9Zm9yKHZhciBDIGluIG8pby5oYXNPd25Qcm9wZXJ0eShDKSYmb1tDXSYmb1tDXS5wYXJlbnROb2RlPT09ciYmci5yZW1vdmVDaGlsZChvW0NdKTtvLmxlbmd0aD0wO2Zvcih2YXIgRCBpbiBmKWlmKGYuaGFzT3duUHJvcGVydHkoRCkpe3ZhciBFPWsuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLEY9ZltEXS5qb2luKFwiXFxuXCIpO0UudHlwZT1cInRleHQvY3NzXCIsRS5tZWRpYT1ELHIuaW5zZXJ0QmVmb3JlKEUsZy5uZXh0U2libGluZyksRS5zdHlsZVNoZWV0P0Uuc3R5bGVTaGVldC5jc3NUZXh0PUY6RS5hcHBlbmRDaGlsZChrLmNyZWF0ZVRleHROb2RlKEYpKSxvLnB1c2goRSl9fSx3PWZ1bmN0aW9uKGEsYixkKXt2YXIgZT1hLnJlcGxhY2UoYy5yZWdleC5jb21tZW50cyxcIlwiKS5yZXBsYWNlKGMucmVnZXgua2V5ZnJhbWVzLFwiXCIpLm1hdGNoKGMucmVnZXgubWVkaWEpLGY9ZSYmZS5sZW5ndGh8fDA7Yj1iLnN1YnN0cmluZygwLGIubGFzdEluZGV4T2YoXCIvXCIpKTt2YXIgaD1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKGMucmVnZXgudXJscyxcIiQxXCIrYitcIiQyJDNcIil9LGk9IWYmJmQ7Yi5sZW5ndGgmJihiKz1cIi9cIiksaSYmKGY9MSk7Zm9yKHZhciBqPTA7Zj5qO2orKyl7dmFyIGssbCxvLHA7aT8oaz1kLG4ucHVzaChoKGEpKSk6KGs9ZVtqXS5tYXRjaChjLnJlZ2V4LmZpbmRTdHlsZXMpJiZSZWdFeHAuJDEsbi5wdXNoKFJlZ0V4cC4kMiYmaChSZWdFeHAuJDIpKSksbz1rLnNwbGl0KFwiLFwiKSxwPW8ubGVuZ3RoO2Zvcih2YXIgcT0wO3A+cTtxKyspbD1vW3FdLGcobCl8fG0ucHVzaCh7bWVkaWE6bC5zcGxpdChcIihcIilbMF0ubWF0Y2goYy5yZWdleC5vbmx5KSYmUmVnRXhwLiQyfHxcImFsbFwiLHJ1bGVzOm4ubGVuZ3RoLTEsaGFzcXVlcnk6bC5pbmRleE9mKFwiKFwiKT4tMSxtaW53OmwubWF0Y2goYy5yZWdleC5taW53KSYmcGFyc2VGbG9hdChSZWdFeHAuJDEpKyhSZWdFeHAuJDJ8fFwiXCIpLG1heHc6bC5tYXRjaChjLnJlZ2V4Lm1heHcpJiZwYXJzZUZsb2F0KFJlZ0V4cC4kMSkrKFJlZ0V4cC4kMnx8XCJcIil9KX12KCl9LHg9ZnVuY3Rpb24oKXtpZihkLmxlbmd0aCl7dmFyIGI9ZC5zaGlmdCgpO2YoYi5ocmVmLGZ1bmN0aW9uKGMpe3coYyxiLmhyZWYsYi5tZWRpYSkscFtiLmhyZWZdPSEwLGEuc2V0VGltZW91dChmdW5jdGlvbigpe3goKX0sMCl9KX19LHk9ZnVuY3Rpb24oKXtmb3IodmFyIGI9MDtiPHQubGVuZ3RoO2IrKyl7dmFyIGM9dFtiXSxlPWMuaHJlZixmPWMubWVkaWEsZz1jLnJlbCYmXCJzdHlsZXNoZWV0XCI9PT1jLnJlbC50b0xvd2VyQ2FzZSgpO2UmJmcmJiFwW2VdJiYoYy5zdHlsZVNoZWV0JiZjLnN0eWxlU2hlZXQucmF3Q3NzVGV4dD8odyhjLnN0eWxlU2hlZXQucmF3Q3NzVGV4dCxlLGYpLHBbZV09ITApOighL14oW2EtekEtWjpdKlxcL1xcLykvLnRlc3QoZSkmJiFzfHxlLnJlcGxhY2UoUmVnRXhwLiQxLFwiXCIpLnNwbGl0KFwiL1wiKVswXT09PWEubG9jYXRpb24uaG9zdCkmJihcIi8vXCI9PT1lLnN1YnN0cmluZygwLDIpJiYoZT1hLmxvY2F0aW9uLnByb3RvY29sK2UpLGQucHVzaCh7aHJlZjplLG1lZGlhOmZ9KSkpfXgoKX07eSgpLGMudXBkYXRlPXksYy5nZXRFbVZhbHVlPXUsYS5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGIsITEpOmEuYXR0YWNoRXZlbnQmJmEuYXR0YWNoRXZlbnQoXCJvbnJlc2l6ZVwiLGIpfX0odGhpcyk7XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBKUyBmb3IgREtBTiBzaXRlLlxyXG4gKi9cclxuKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIGFuZCBoaWRlcyBhIGRlc2NyaXB0aW9uIGZvciBEcnVwYWwgZm9ybSBlbGVtZW50cy5cclxuICAgKi9cclxuICAkLmZuLmRrYW5Gb3Jtc0hpZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdjb21wYWN0LWZvcm0td3JhcHBlcicpO1xyXG4gICAgICB2YXIgZGVzYyA9ICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uJykuYWRkQ2xhc3MoJ2NvbXBhY3QtZm9ybS1kZXNjcmlwdGlvbicpO1xyXG4gICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICAgIGRlc2MuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoJChpbnB1dCkuaHRtbCgpID09ICcnKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5maW5kKCd0ZXh0YXJlYScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgkKGlucHV0KS5odG1sKCkgPT0gbnVsbCkge1xyXG4gICAgICAgIHZhciBpbnB1dCA9ICQodGhpcykuZmluZCgnaW5wdXQnKTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dC5hZGRDbGFzcygnY29tcGFjdC1mb3JtLWlucHV0JylcclxuICAgICAgaW5wdXQuYmx1cihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpID09PSAnJykge1xyXG4gICAgICAgICAgZGVzYy5mYWRlSW4oJ2Zhc3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpbnB1dC5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICBkZXNjLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoaW5wdXQudmFsKCkgIT0gJycpIHtcclxuICAgICAgICBkZXNjLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvd3MgYW5kIGhpZGVzIGEgZGVzY3JpcHRpb24gZm9yIEF1dG9jb21wbGV0ZSBEZWx1eGUgZm9ybSBlbGVtZW50cy5cclxuICAgKi9cclxuICAkLmZuLmRrYW5Gb3Jtc0F1dG9EZWx1eGVIaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY29tcGFjdC1mb3JtLXdyYXBwZXInKTtcclxuICAgICAgdmFyIGRlc2MgPSAkKHRoaXMpLmZpbmQoJy5kZXNjcmlwdGlvbicpLmFkZENsYXNzKCdjb21wYWN0LWZvcm0tZGVzY3JpcHRpb24nKTtcclxuICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5maW5kKCcjYXV0b2NvbXBsZXRlLWRlbHV4ZS1pbnB1dCcpO1xyXG4gICAgICBkZXNjLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICB9KTtcclxuICAgICAgaW5wdXQuZm9jdXMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlc2MuaGlkZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCQoJyNhdXRvY29tcGxldGUtZGVsdXhlLWl0ZW0nKS5odG1sKCkgIT0gbnVsbCkge1xyXG4gICAgICAgIGRlc2MuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJCh0aGlzKS5maW5kKCdpbnB1dCcpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgZGVzYy5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIERydXBhbC5iZWhhdmlvcnMuZGthblNpdGUgPSB7XHJcbiAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xyXG4gICAgICAvLyBBdXRvaGlkZSBzZWxlY3RlZCBlbGVtZW50cy5cclxuICAgICAgdmFyIGVsZW1lbnRzID0gXCIjdmlld3MtZXhwb3NlZC1mb3JtLWRhdGFzZXQtcGFnZSwjYmxvY2stZGthbi1zaXRld2lkZS1ka2FuLXNpdGV3aWRlLXNlYXJjaC1iYXIsI3ZpZXdzLWV4cG9zZWQtZm9ybS1ncm91cHMtc2VhcmNoLWVudGl0eS12aWV3LTEsI3ZpZXdzLWV4cG9zZWQtZm9ybS11c2VyLXByb2ZpbGUtc2VhcmNoLWVudGl0eS12aWV3LTFcIjtcclxuICAgICAgJChlbGVtZW50cywgY29udGV4dCkuZGthbkZvcm1zSGlkZSgpO1xyXG4gICAgICB2YXIgYXV0b0RlbHV4ZUVsZW1lbnRzID0gXCIuZmllbGQtbmFtZS1maWVsZC10YWdzXCI7XHJcbiAgICAgICQoYXV0b0RlbHV4ZUVsZW1lbnRzLCBjb250ZXh0KS5ka2FuRm9ybXNBdXRvRGVsdXhlSGlkZSgpO1xyXG5cclxuICAgICAgLy8gVG9nZ2xlIGJ1dHRvbiBmb3IgdGV4dC1mb3JtYXQuXHJcbiAgICAgICQoJy5maWx0ZXItaGVscC5mb3JtLWdyb3VwIHAnKS5hcHBlbmQoJyB8ICcgKyAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtaGVscC10b2dnbGVcIj4nICsgRHJ1cGFsLnQoJ1RvZ2dsZSB0ZXh0IGZvcm1hdCcpICsgJzwvYT4nKTtcclxuICAgICAgLy8kKCcuZm9ybS10eXBlLXNlbGVjdCcpLmhpZGUoKTtcclxuICAgICAgJCgnLmZpbHRlci1ndWlkZWxpbmVzLXByb2Nlc3NlZCcpLmhpZGUoKTtcclxuICAgICAgJCgnLnRleHQtaGVscC10b2dnbGUnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5mb3JtLXR5cGUtc2VsZWN0JykudG9nZ2xlKCk7XHJcbiAgICAgICAgJCgnLmZpbHRlci1ndWlkZWxpbmVzLXByb2Nlc3NlZCcpLnRvZ2dsZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIERydXBhbC5iZWhhdmlvcnMuZGthbjUwOFNpdGUgPSB7XHJcbiAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xyXG4gICAgICAkKCcjZWRpdC1vcGVyYXRpb24nKS5hdHRyKCdhcmlhLWxhYmVsJywgJ09wZXJhdGlvbicpO1xyXG4gICAgICAkKCdpbnB1dC5iZWYtZGF0ZXBpY2tlcicpLmF0dHIoJ2FyaWEtbGFiZWwnLCAnRGF0ZSBwb3B1cCcpO1xyXG4gICAgICAkKCdhLnRhYmxlZHJhZy1oYW5kbGUnKS5odG1sKCc8ZGl2IGNsYXNzPVwiaGFuZGxlXCI+Jm5ic3A7PC9kaXY+PHNwYW4gY2xhc3M9XCJlbGVtZW50LWhpZGRlblwiPkRyYWcgYW5kIGRyb3BcIjwvc3Bhbj4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KShqUXVlcnkpO1xyXG4iLCIvKlxyXG4gKiBTVkdlZXp5LmpzIDEuMFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxMiwgQmVuIEhvd2RsZSBodHRwOi8vdHdvc3RlcG1lZGlhLmNvLnVrXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBXVEZQTCBsaWNlbnNlXHJcbiAqIGh0dHA6Ly9zYW0uem95Lm9yZy93dGZwbC9cclxuICpcclxuICogRGF0ZTogU3VuIEF1ZyAyNiAyMDozOCAyMDEyIEdNVFxyXG4gKi9cclxuLypcclxuXHQvL2NhbGwgbGlrZSBzbywgcGFzcyBpbiBhIGNsYXNzIG5hbWUgdGhhdCB5b3UgZG9uJ3Qgd2FudCBpdCB0byBjaGVjayBhbmQgYSBmaWxldHlwZSB0byByZXBsYWNlIC5zdmcgd2l0aFxyXG5cdHN2Z2VlenkuaW5pdCgnbm9jaGVjaycsICdwbmcnKTtcclxuKi9cclxud2luZG93LnN2Z2Vlenk9ZnVuY3Rpb24oKXtyZXR1cm57aW5pdDpmdW5jdGlvbih0LGkpe3RoaXMuYXZvaWQ9dHx8ZmFsc2U7dGhpcy5maWxldHlwZT1pfHxcInBuZ1wiO3RoaXMuc3ZnU3VwcG9ydD10aGlzLnN1cHBvcnRzU3ZnKCk7aWYoIXRoaXMuc3ZnU3VwcG9ydCl7dGhpcy5pbWFnZXM9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIik7dGhpcy5pbWdMPXRoaXMuaW1hZ2VzLmxlbmd0aDt0aGlzLmZhbGxiYWNrcygpfX0sZmFsbGJhY2tzOmZ1bmN0aW9uKCl7d2hpbGUodGhpcy5pbWdMLS0pe2lmKCF0aGlzLmhhc0NsYXNzKHRoaXMuaW1hZ2VzW3RoaXMuaW1nTF0sdGhpcy5hdm9pZCl8fCF0aGlzLmF2b2lkKXt2YXIgdD10aGlzLmltYWdlc1t0aGlzLmltZ0xdLmdldEF0dHJpYnV0ZShcInNyY1wiKTtpZih0PT09bnVsbCl7Y29udGludWV9aWYodGhpcy5nZXRGaWxlRXh0KHQpPT1cInN2Z1wiKXt2YXIgaT10LnJlcGxhY2UoXCIuc3ZnXCIsXCIuXCIrdGhpcy5maWxldHlwZSk7dGhpcy5pbWFnZXNbdGhpcy5pbWdMXS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixpKX19fX0sZ2V0RmlsZUV4dDpmdW5jdGlvbih0KXt2YXIgaT10LnNwbGl0KFwiLlwiKS5wb3AoKTtpZihpLmluZGV4T2YoXCI/XCIpIT09LTEpe2k9aS5zcGxpdChcIj9cIilbMF19cmV0dXJuIGl9LGhhc0NsYXNzOmZ1bmN0aW9uKHQsaSl7cmV0dXJuKFwiIFwiK3QuY2xhc3NOYW1lK1wiIFwiKS5pbmRleE9mKFwiIFwiK2krXCIgXCIpPi0xfSxzdXBwb3J0c1N2ZzpmdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKFwiaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNJbWFnZVwiLFwiMS4xXCIpfX19KCk7Il19