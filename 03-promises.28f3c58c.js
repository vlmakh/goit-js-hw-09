!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc"),u=document.querySelector(".form"),a={inputDelay:u.querySelector('[name="delay"]'),inputStep:u.querySelector('[name="step"]'),inputAmount:u.querySelector('[name="amount"]')};function l(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(a.inputDelay.value),o=Number(a.inputStep.value),i=1;i<=a.inputAmount.value;i+=1){if(!(i<=a.inputAmount.value))return;l(i,t).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),t+=o}}))}();
//# sourceMappingURL=03-promises.28f3c58c.js.map
