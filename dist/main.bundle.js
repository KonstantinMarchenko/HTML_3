!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);let o=0,r=0,i=!1,a=[],c=[],s=0,u=!0,l=0;for(let t=0;t<3;t++){for(let e=0;e<3;e++){$('<button class="buttons__button-main" id="btn'+(3*t+e)+'">.</button>').appendTo("#buttons")}$("<div></div>").appendTo("#buttons")}$(".buttons__button-main").click((function(){u?($(this).text("X"),s=parseInt(this.id.substr(3,3)),a[s]=1,f(),u=!1):($(this).text("O"),s=parseInt(this.id.substr(3,3)),a[s]=0,f(),u=!0),$(this).prop("disabled",!0),function(){for(let t=0;t<8;t++){r=0;for(let e=1;e<3;e++)c[t][0]===c[t][e]&&2!==c[t][0]&&(r+=1);2===r&&(1===c[t][0]?console.log("Player with X won!"):0===c[t][0]&&console.log("Player with O won!"),i=!0,$(".buttons__button-main").prop("disabled",!0).css("color","grey"))}l+=1,9!==l||i||($(".buttons__button-main").prop("disabled",!0).css("color","grey"),console.log("Its a draw!"))}()})),$("#reset").click((function(){l=0,u=!0,i=!1;for(let t=0;t<9;t++)a[t]=2;f(),$(".buttons__button-main").prop("disabled",!1).css("color","black").text(".")}));for(let t=0;t<9;t++)c[t]||(c[t]=[]);for(let t=0;t<9;t++)a[t]=2;function f(){o=0;for(let t=0;t<3;t++){for(let e=0;e<3;e++)c[t][e]=a[3*t+e],c[t+3][e]=a[3*e+o];o++}for(let t=0;t<3;t++)c[6][t]=a[4*t],c[7][t]=a[2*(t+1)]}f()},function(t,e,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});t.exports=a},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function c(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var f=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:h(d,e),references:1}),o.push(l)}return o}function u(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var b=null,v=0;function h(t,e){var n,o,r;if(e.singleton){var i=v++;n=b||(b=u(e)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=u(e),o=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=s(t,e),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,'.buttons {\n  text-align: center;\n}\n.buttons__button-main {\n  width: 200px;\n  height: 200px;\n  font-size: 150px;\n  position: relative;\n  color: black;\n  padding: 0px;\n}\n.buttons__button-reset {\n  margin: 25px;\n  width: 100px;\n  height: 35px;\n  font-size: 25px;\n  font-family: "Times New Roman";\n  position: relative;\n  color: black;\n  padding: 0px;\n}\n',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}}]);