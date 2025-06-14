/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var createSlideElementFromObject = function createSlideElementFromObject(nbElementPerPage) {
  var elementSize = Math.ceil(100 / nbElementPerPage);
  console.log(nbElementPerPage, elementSize);
  return function (element) {
    var slide = document.createElement("div");
    slide.className = "element-wrap w-full sm:w-1/2 md:w-1/3 lg:w-1/4";
    // slide.href = element.link
    var slide_element = document.createElement("div");
    slide_element.className = "element relative";
    var image = document.createElement("img");
    image.src = element.img;
    image.className = "object-cover rounded-lg h-full w-full absolute";
    var fade = document.createElement("div");
    fade.className = "rounded-lg background-fade";
    var title = document.createElement("div");
    title.className = "title absolute flex items-end justify-center w-full h-full pb-2 text-white text-xl";
    var title_text = document.createTextNode(element.title);
    title.appendChild(title_text);
    var ip = document.createElement("div");
    ip.className = "ip";
    var ip_text = document.createTextNode(element.ip);
    ip.appendChild(ip_text);
    slide.appendChild(slide_element);
    slide_element.appendChild(image);
    slide_element.appendChild(fade);
    slide_element.appendChild(title);
    slide_element.appendChild(ip);
    return slide;
  };
};
var openModal = function openModal(src) {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".modal-content").src = src;
};
var openModalForm = function openModalForm(src) {
  document.querySelector(".modal").classList.remove("hidden");
};
window.onload = function () {
  var slider = document.querySelector(".slider");
  var imageFlex = document.querySelector(".image-flex");
  var customForm = document.querySelector("#custom-form");
  var notif = document.querySelector("#notif");
  var contactButton = document.querySelector(".contact-button");
  var cards = document.querySelectorAll(".card");
  if (slider) {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var nbElementPerPage = vw >= 1024 ? 4 : vw >= 768 ? 3 : vw >= 640 ? 2 : 1;

    // const slideElement = slideObject.map(
    //   createSlideElementFromObject(nbElementPerPage)
    // );
    // slideElement.forEach((element) => slider.appendChild(element));
    // slider.style.transition = `left ${0.15 * nbElementPerPage}s`;

    var elementCount = document.querySelectorAll(".slider .element").length;
    var currentPage = 0;
    var currentPurcent = 0;
    var maxPage = Math.ceil(elementCount / nbElementPerPage) - 1;
    var purcentageLastPage = nbElementPerPage > 1 ? elementCount % nbElementPerPage * (100 / nbElementPerPage) : 100;
    var arrowLeft = document.querySelector(".a-left");
    var arrowRight = document.querySelector(".a-right");
    if (elementCount <= nbElementPerPage) {
      arrowLeft.classList.add("hidden");
      arrowRight.classList.add("hidden");
    }
    window.addEventListener("resize", function () {
      slider.style.left = 0;
      vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      nbElementPerPage = vw >= 1024 ? 4 : vw >= 768 ? 3 : vw >= 640 ? 2 : 1;
      currentPage = 0;
      currentPurcent = 0;
      maxPage = Math.ceil(elementCount / nbElementPerPage) - 1;
      purcentageLastPage = nbElementPerPage > 1 ? elementCount % nbElementPerPage * (100 / nbElementPerPage) : 100;
    }, true);
    arrowLeft.addEventListener("click", function () {
      if (currentPage == maxPage) {
        currentPage--;
        currentPurcent -= purcentageLastPage;
        slider.style.left = "-".concat(currentPurcent, "%");
      } else if (currentPage - 1 >= 0) {
        currentPage--;
        currentPurcent -= 100;
        slider.style.left = "-".concat(currentPurcent, "%");
      }
    });
    arrowRight.addEventListener("click", function () {
      if (currentPage == maxPage - 1) {
        currentPage++;
        currentPurcent += purcentageLastPage;
        slider.style.left = "-".concat(currentPurcent, "%");
      } else if (currentPage != maxPage) {
        currentPage++;
        currentPurcent += 100;
        slider.style.left = "-".concat(currentPurcent, "%");
      }
    });
  }
  if (imageFlex) {
    var images = document.querySelectorAll(".image-flex img");
    images.forEach(function (img) {
      img.addEventListener("click", function () {
        openModal(this.src);
      });
    });
    var modal = document.querySelector(".modal");
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });

    // Close modal functionality
    var span = document.querySelector(".close");
    span.addEventListener("click", function () {
      modal.classList.add("hidden");
    });
  }
  if (customForm && notif) {
    document.querySelector("#custom-form").addEventListener("submit", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        var formData, response, modal;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              formData = new FormData(event.target);
              _context.next = 4;
              return fetch("/wp-admin/admin-ajax.php", {
                method: "POST",
                body: formData
              });
            case 4:
              response = _context.sent;
              if (response.ok) {
                _context.next = 8;
                break;
              }
              alert("Error submitting the form.");
              return _context.abrupt("return");
            case 8:
              modal = document.querySelector(".modal");
              _context.next = 11;
              return response.json();
            case 11:
              modal.classList.add("hidden");
              notif.classList.remove("hidden");
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    document.querySelector("#notif-svg").addEventListener("click", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              notif.classList.add("hidden");
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  if (contactButton) {
    var _images = document.querySelectorAll(".contact-button");
    _images.forEach(function (img) {
      img.addEventListener("click", function () {
        openModalForm(this.src);
      });
    });
    var _modal = document.querySelector(".modal");
    _modal.addEventListener("click", function (event) {
      if (event.target === _modal) {
        _modal.classList.add("hidden");
      }
    });

    // Close modal functionality
    var _span = document.querySelector(".close");
    _span.addEventListener("click", function () {
      _modal.classList.add("hidden");
    });
  }
  if (cards) {
    cards.forEach(function (focusCard) {
      focusCard.addEventListener("mouseover", function (event) {
        console.log(window.innerWidth);
        if (window.innerWidth > 640) {
          cards.forEach(function (card) {
            card.classList.remove("sm:w-2/5");
            card.classList.add("sm:w-1/5");
            var desc = card.querySelector(".desc");
            !desc.classList.contains("sm:hidden") && desc.classList.add("sm:hidden");
          });
          focusCard.classList.remove("sm:w-1/5");
          focusCard.classList.add("sm:w-2/5");
          var desc = focusCard.querySelector(".desc");
          desc.classList.contains("sm:hidden") && desc.classList.remove("sm:hidden");
        } else {}
      });
    });
  }
};

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/scss/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Benjamin\Desktop\projets\sephoub\wp-content\themes\sephoub\assets\js\app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Benjamin\Desktop\projets\sephoub\wp-content\themes\sephoub\assets\scss\app.scss */"./assets/scss/app.scss");


/***/ })

/******/ });