!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),d?y(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function O(){var e=p();if(S(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?g(n,u-(e-c)):n}(e))}function T(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function w(){var e=p(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=h(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(h(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector("form.feedback-form"),S=document.querySelector("input"),O=document.querySelector("textarea");j.addEventListener("submit",(function(e){0===S.value.length&&alert("Все поля должны быть заполнены!");0===O.value.length?alert("Все поля должны быть заполнены!"):(e.currentTarget.reset(),localStorage.removeItem(w))})),j.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(x))}),500));var T,w="feedback-form-state",x={};(T=JSON.parse(localStorage.getItem(w)))&&(S.value=T.email,O.value=T.message)}();
//# sourceMappingURL=03-feedback.ab05e6d8.js.map
