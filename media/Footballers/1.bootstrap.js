(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../js/helper.js":
/*!***********************!*\
  !*** ../js/helper.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg_football_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pkg/football_game.js */ \"../pkg/football_game.js\");\n\r\n\r\nconst idParagraph = document.getElementById('session_id');\r\nconst buttons = document.getElementById('buttons');\r\nconst startButton = document.getElementById('start_button');\r\nconst joinButton = document.getElementById('join_button');\r\nconst idInput = document.getElementById('id_input');\r\n\r\nconst params = new URLSearchParams(window.location.search);\r\nif (params.has(\"session_id\")) {\r\n    buttons.style.visibility = \"hidden\";\r\n    _pkg_football_game_js__WEBPACK_IMPORTED_MODULE_0__[\"main\"](params.get(\"session_id\"), params.get(\"is_host\") === \"true\");\r\n} else {\r\n    startButton.addEventListener('click', event => {\r\n        buttons.style.visibility = \"hidden\";\r\n        let sessionId = _pkg_football_game_js__WEBPACK_IMPORTED_MODULE_0__[\"get_random_session_id\"]();\r\n        idParagraph.innerText = sessionId;\r\n        _pkg_football_game_js__WEBPACK_IMPORTED_MODULE_0__[\"main\"](sessionId, true);\r\n    });\r\n\r\n    joinButton.addEventListener('click', event => {\r\n        buttons.style.visibility = \"hidden\";\r\n        let sessionId = idInput.value;\r\n        _pkg_football_game_js__WEBPACK_IMPORTED_MODULE_0__[\"main\"](sessionId, false);\r\n    });\r\n}\n\n//# sourceURL=webpack:///../js/helper.js?");

/***/ })

}]);