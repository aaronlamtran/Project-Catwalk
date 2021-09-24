"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfec"] = self["webpackChunkfec"] || []).push([["client_src_components_QA_Unit_jsx"],{

/***/ "./client/src/components/QA/Unit.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/QA/Unit.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Question = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-248d90\"), __webpack_require__.e(\"client_src_components_QA_Question_jsx-node_modules_moment_locale_sync_recursive_\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Question */ \"./client/src/components/QA/Question.jsx\"));\n});\nvar QuestionModal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"client_src_components_Shared_QuestionModal_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../Shared/QuestionModal */ \"./client/src/components/Shared/QuestionModal.jsx\"));\n});\nvar Form = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"client_src_components_QA_Form_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./Form */ \"./client/src/components/QA/Form.jsx\"));\n});\n\nvar Unit = /*#__PURE__*/function (_React$Component) {\n  _inherits(Unit, _React$Component);\n\n  var _super = _createSuper(Unit);\n\n  function Unit(props) {\n    var _this;\n\n    _classCallCheck(this, Unit);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      count: 4,\n      // on page load, display four questions\n      display: 'loadMore',\n      // display default loadMore button\n      questionsList: [],\n      currentList: []\n    };\n    _this.getQuestions = _this.getQuestions.bind(_assertThisInitialized(_this));\n    _this.handleDisplayMoreQ = _this.handleDisplayMoreQ.bind(_assertThisInitialized(_this));\n    _this.handleCollapse = _this.handleCollapse.bind(_assertThisInitialized(_this));\n    _this.handleDisplayUnitOnSearch = _this.handleDisplayUnitOnSearch.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Unit, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getQuestions();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      var currentProduct = this.props.currentProduct;\n\n      if (prevProps.currentProduct !== currentProduct) {\n        this.getQuestions();\n      }\n    }\n  }, {\n    key: \"handleDisplayUnitOnSearch\",\n    value: function handleDisplayUnitOnSearch(e, result) {\n      var questionsList = this.state.questionsList;\n\n      if (e.length >= 3) {\n        this.setState({\n          display: 'none',\n          currentList: result\n        });\n      } else {\n        this.setState({\n          display: 'loadMore',\n          currentList: questionsList\n        });\n      }\n    }\n  }, {\n    key: \"handleDisplayMoreQ\",\n    value: function handleDisplayMoreQ(e) {\n      e.preventDefault();\n      var _this$state = this.state,\n          count = _this$state.count,\n          currentList = _this$state.currentList;\n      this.setState({\n        count: count + 2\n      });\n\n      if (count + 1 >= currentList.length) {\n        this.setState({\n          display: 'collapse'\n        });\n      } // handle edge case of no question length: display only add quesiton button\n\n    }\n  }, {\n    key: \"handleCollapse\",\n    value: function handleCollapse() {\n      this.setState({\n        count: 4,\n        display: 'loadMore'\n      });\n    }\n  }, {\n    key: \"getQuestions\",\n    value: function getQuestions() {\n      var _this2 = this;\n\n      var currentProduct = this.props.currentProduct;\n      axios__WEBPACK_IMPORTED_MODULE_1___default()(\"/qa/questions/\".concat(currentProduct), {\n        params: {\n          count: 25\n        }\n      }).then(function (results) {\n        return _this2.setState({\n          isQuestionsLoaded: true,\n          questionsList: results.data.results,\n          currentList: results.data.results\n        });\n      })[\"catch\"](function () {\n        return _this2.setState({\n          isQuestionsLoaded: false\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state2 = this.state,\n          isQuestionsLoaded = _this$state2.isQuestionsLoaded,\n          questionsList = _this$state2.questionsList,\n          count = _this$state2.count,\n          display = _this$state2.display,\n          currentList = _this$state2.currentList;\n      var list;\n      var currentProduct = this.props.currentProduct;\n\n      if (isQuestionsLoaded) {\n        list = currentList.map(function (q) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n            fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Loading...\")\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Question, {\n            className: \"question-component\",\n            key: q.question_id,\n            question_id: q.question_id,\n            question_body: q.question_body,\n            question_date: q.question_date,\n            asker_name: q.asker_name,\n            question_helpfulness: q.question_helpfulness,\n            answers: q.answers,\n            getQuestions: _this3.getQuestions\n          }));\n        }).slice(0, count);\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"QA-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Loading...\")\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, {\n        questionsList: questionsList,\n        handleDisplayUnitOnSearch: this.handleDisplayUnitOnSearch\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"QA-list\"\n      }, list), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"QA-btn-list\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Loading...\")\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuestionModal, {\n        currentProduct: currentProduct,\n        getQuestions: this.getQuestions\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, function () {\n        if (display === 'loadMore') {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n            id: \"load-questions-btn\",\n            className: \"button-modal\",\n            type: \"submit\",\n            onClick: function onClick(e) {\n              return _this3.handleDisplayMoreQ(e);\n            }\n          }, \"LOAD MORE QUESTIONS\");\n        }\n\n        if (display === 'collapse') {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n            id: \"collapse-questions-btn\",\n            className: \"collapse-question\",\n            type: \"submit\",\n            onClick: _this3.handleCollapse\n          }, \"COLLAPSE\");\n        }\n\n        if (display === 'none') {\n          return '';\n        }\n      }())));\n    }\n  }]);\n\n  return Unit;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nUnit.propTypes = {\n  currentProduct: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)\n};\nUnit.defaultProps = {\n  currentProduct: ''\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unit);\n\n//# sourceURL=webpack://fec/./client/src/components/QA/Unit.jsx?");

/***/ })

}]);