"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfec"] = self["webpackChunkfec"] || []).push([["client_src_components_QA_AnswerModal_jsx"],{

/***/ "./client/src/components/QA/AnswerModal.jsx":
/*!**************************************************!*\
  !*** ./client/src/components/QA/AnswerModal.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar AnswerModal = function AnswerModal(props) {\n  var question_id = props.question_id,\n      getQuestions = props.getQuestions;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      modal = _useState2[0],\n      setModal = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      errors = _useState4[0],\n      setErrors = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState6 = _slicedToArray(_useState5, 2),\n      text = _useState6[0],\n      setText = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState8 = _slicedToArray(_useState7, 2),\n      email = _useState8[0],\n      setEmail = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState10 = _slicedToArray(_useState9, 2),\n      nickname = _useState10[0],\n      setNickname = _useState10[1];\n\n  var toggleModal = function toggleModal() {\n    setModal(!modal);\n  }; // regex fn to test for basic email structure \"_____@__.__\"\n\n\n  var isEmailValid = function isEmailValid(emailEntry) {\n    return /\\S+@\\S+\\.\\S+/.test(emailEntry);\n  };\n\n  var handleValidationAndSubmit = function handleValidationAndSubmit(e) {\n    e.preventDefault();\n    var missingFields = {};\n    var isFieldsFilled = true;\n\n    if (text.length === 0) {\n      isFieldsFilled = false;\n      missingFields.answer = 'We need your Answer 😎 ';\n    }\n\n    if (email.length === 0) {\n      isFieldsFilled = false;\n      missingFields.email = 'Missing email 📧 ';\n    }\n\n    if (!isEmailValid(email)) {\n      isFieldsFilled = false;\n      missingFields.email = 'Enter a valid email! 📧 ';\n    }\n\n    if (nickname.length === 0) {\n      isFieldsFilled = false;\n      missingFields.nickname = 'Missing nickname 📇 ';\n    } // if (photos.length === 0) { // TODO : require photo validation to be able to submit\n    //   isFieldsFilled = false;\n    //   missingFields.photos = 'Missing photos! ';\n    // }\n\n\n    setErrors(missingFields);\n    var obj = {\n      body: text,\n      email: email,\n      name: nickname,\n      question_id: question_id\n    };\n\n    if (isFieldsFilled) {\n      axios__WEBPACK_IMPORTED_MODULE_1___default().post('qa/answers', obj).then(toggleModal()).then(function () {\n        setText('');\n        setEmail('');\n        setNickname('');\n      }).then(function () {\n        return getQuestions();\n      }); // .catch(() => );\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    role: \"button\",\n    className: \"submit-answer-btn\",\n    onClick: toggleModal,\n    onKeyPress: toggleModal,\n    type: \"submit\",\n    tabIndex: -1\n  }, \"Submit An Answer\"), modal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"overlay\",\n    role: \"button\",\n    tabIndex: \"0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"modal-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Your Answer:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"What is your Answer? (required)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"submit-answer-error\"\n  }, errors.answer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n    id: \"answer-text\",\n    name: \"submitAnswer\",\n    maxLength: \"1000\",\n    value: text,\n    onChange: function onChange(e) {\n      return setText(e.target.value);\n    },\n    placeholder: \"Enter yo answer here\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \" What is your nickname? (required) \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"submit-answer-error\"\n  }, errors.nickname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n    name: \"submitAnswer\",\n    maxLength: \"60\",\n    value: nickname,\n    onChange: function onChange(e) {\n      return setNickname(e.target.value);\n    },\n    placeholder: \"Example: jack543!\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"form-note\"\n  }, \"For privacy reasons, do not use your full name or email address\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"What is your email? (required)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"submit-answer-error\"\n  }, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n    name: \"submitAnswer\",\n    maxLength: \"60\",\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    placeholder: \"Enter your email here\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"form-note\"\n  }, \"For authentication reasons, you will not be emailed\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \" Upload your photos:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"file\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"file\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"file\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"file\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"file\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    id: \"answer-form-submit-btn\",\n    type: \"submit\",\n    onClick: handleValidationAndSubmit\n  }, \"Submit\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    role: \"presentation\",\n    id: \"answer-form-close-btn\",\n    onClick: toggleModal\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"./static/close.svg\",\n    height: \"20px\",\n    alt: \"right-arrow\"\n  }))))));\n};\n\nAnswerModal.propTypes = {\n  question_id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),\n  getQuestions: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)\n};\nAnswerModal.defaultProps = {\n  question_id: 0,\n  getQuestions: ''\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerModal);\n\n//# sourceURL=webpack://fec/./client/src/components/QA/AnswerModal.jsx?");

/***/ })

}]);