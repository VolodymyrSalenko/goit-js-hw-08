var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),a=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return c.Date.now()};function m(e,t,n){var o,i,r,u,f,c,a=0,m=!1,b=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,a=t,u=e.apply(r,n)}function j(e){return a=e,f=setTimeout(T,t),m?g(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||b&&e-a>=r}function T(){var e=d();if(h(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-c);return b?s(n,r-(e-a)):n}(e))}function w(e){return f=void 0,v&&o?g(e):(o=i=void 0,u)}function O(){var e=d(),n=h(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(b)return f=setTimeout(T,t),g(c)}return void 0===f&&(f=setTimeout(T,t)),u}return t=y(t)||0,p(n)&&(m=!!n.leading,r=(b="maxWait"in n)?l(y(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},O.flush=function(){return void 0===f?u:w(d())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==a.call(e)}(e))return NaN;if(p(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=p(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||i.test(e)?r(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b=document.querySelector("name[email]");console.log("email",b);const v=document.querySelector("name[message]");console.log("message",v);const g=document.querySelector("type[submit]");console.log("btnSubmit",g);
//# sourceMappingURL=03-feedback.764fd038.js.map
