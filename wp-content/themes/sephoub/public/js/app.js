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
window.onload = function () {
  var slider = document.querySelector(".slider");
  var imageFlex = document.querySelector(".image-flex");
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

__webpack_require__(/*! C:\Users\Waren\Repos\sephoub\wp-content\themes\sephoub\assets\js\app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Waren\Repos\sephoub\wp-content\themes\sephoub\assets\scss\app.scss */"./assets/scss/app.scss");


/***/ })

/******/ });