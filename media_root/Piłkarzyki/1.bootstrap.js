(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../js/helper.js":
/*!***********************!*\
  !*** ../js/helper.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg_football_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pkg/football_game.js */ \"../pkg/football_game.js\");\n\n\n\nconst idParagraph = document.getElementById('session_id');\nconst buttons = document.getElementById('buttons');\nconst startButton = document.getElementById('start_button');\nconst joinButton = document.getElementById('join_button');\nconst idInput = document.getElementById('id_input');\n\nstartButton.addEventListener('click', event => {\n    buttons.style.visibility = \"hidden\";\n    let sessionId = _pkg_football_game_js__WEBPACK_IMPORTED_MODULE_0__[\"get_random_session_id\"]();\n    idParagraph.innerText = sessionId;\n    _pkg_football_game_js__WEBPACK_IMPORTED_MODULE_0__[\"main\"](sessionId, true);\n});\n\njoinButton.addEventListener('click', event => {\n    buttons.style.visibility = \"hidden\";\n    let id = idInput.value;\n    _pkg_football_game_js__WEBPACK_IMPORTED_MODULE_0__[\"main\"](id, false);\n});\n\n//# sourceURL=webpack:///../js/helper.js?");

/***/ })

}]);