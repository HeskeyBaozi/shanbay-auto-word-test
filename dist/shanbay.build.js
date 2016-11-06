/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	if (typeof $ === 'undefined' && typeof jQuery === 'undefined') {
	    throw Error('jQuery not founded');
	}
	
	const options = {
	    delay: 200 // click delay
	};
	
	function triggerGenerator(targetSelector) {
	    return () => new Promise((resolve, reject) => {
	        setTimeout(() => {
	            let target = $(targetSelector);
	            if (target.length > 0) {
	                target.trigger('click');
	            }
	            resolve();
	        }, options.delay);
	    });
	}
	
	const clickKnown = triggerGenerator('.known');
	const clickContinue = triggerGenerator('.continue');
	const progress = document.querySelector('.progress-success');
	
	_asyncToGenerator(function* () {
	    try {
	        while (parseInt(progress.style.width) !== 100) {
	            yield clickKnown();
	            yield clickContinue();
	        }
	        yield clickContinue();
	    } catch (error) {
	        console.log(`[ERROR] ${ error }`);
	    }
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=shanbay.build.js.map