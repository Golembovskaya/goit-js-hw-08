function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function g(t,e,n){var o,i,r,f,a,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,r=i;return o=i=void 0,c=e,f=t.apply(r,n)}function h(t){return c=t,a=setTimeout(w,e),l?b(t):f}function j(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=r}function w(){var t=v();if(j(t))return O(t);a=setTimeout(w,function(t){var n=e-(t-u);return s?p(n,r-(t-c)):n}(t))}function O(t){return a=void 0,g&&o?b(t):(o=i=void 0,f)}function E(){var t=v(),n=j(t);if(o=arguments,i=this,u=t,n){if(void 0===a)return h(u);if(s)return a=setTimeout(w,e),b(u)}return void 0===a&&(a=setTimeout(w,e)),f}return e=y(e)||0,m(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,e):r,g="trailing"in n?!!n.trailing:g),E.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=i=a=void 0},E.flush=function(){return void 0===a?f:O(v())},E}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(t,e,{leading:o,maxWait:e,trailing:i})};const b=document.querySelector(".feedback-form");!function(){const t=localStorage.getItem("localStorageKey");t&&(t=JSON.parse(t),console.log(t),Object.entries(t).forEach((([t,e])=>{b.elements[t].value=e})))}(),b.addEventListener("input",t(e)((function(){const t=new FormData(b),e={};t.forEach(((t,n)=>e[n]=t)),localStorage.setItem=JSON.stringify(e)}),500)),b.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem("feedback-form-state");const e={};new FormData(b).forEach(((t,n)=>e[n]=t)),console.log(e),b.reset()}));
//# sourceMappingURL=03-feedback.1c53d6b3.js.map
