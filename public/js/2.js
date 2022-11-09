(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/js/template/modules/common/extendedChoices.js":
/*!***********************************************************!*\
  !*** ./src/js/template/modules/common/extendedChoices.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ExtendedChoices; });\n/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ \"./node_modules/choices.js/public/assets/scripts/choices.js\");\n/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar ExtendedChoices = /*#__PURE__*/function (_Choices) {\n  _inherits(ExtendedChoices, _Choices);\n  var _super = _createSuper(ExtendedChoices);\n  function ExtendedChoices(input, options) {\n    var _this;\n    _classCallCheck(this, ExtendedChoices);\n    if (typeof input === 'string') {\n      throw new Error(\"Первым входным параметром должен передаваться input\");\n    }\n    var selectOptions = Array.from(input.querySelectorAll('option'));\n    _this = _super.call(this, input, options);\n    _this.extendInit = false;\n    _this.selectOptions = selectOptions;\n    _this.setDataAttributes();\n    input.addEventListener('change', function () {\n      return _this.setDataAttributes();\n    });\n    input.choice = _assertThisInitialized(_this);\n    _this.extendInit = true;\n    return _this;\n  }\n  _createClass(ExtendedChoices, [{\n    key: \"setDataAttributes\",\n    value: function setDataAttributes() {\n      var _this2 = this;\n      this._store.activeItems.forEach(function (activeItem) {\n        var option = _this2.selectOptions.find(function (option) {\n          return option.value == activeItem.value;\n        });\n        var element = _this2.containerInner.element.querySelector(\".choices__item[data-id=\\\"\".concat(activeItem.id, \"\\\"]\"));\n        if (option.dataset) {\n          for (var item in option.dataset) {\n            element.dataset[item] = option.dataset[item];\n          }\n          activeItem.dataset = _objectSpread({}, option.dataset);\n        }\n      });\n      if (this.extendInit && this.input.type == \"select-one\" && this._store.activeItems[0].dataset.href) {\n        window.open(this._store.activeItems[0].dataset.href, '_blank');\n      }\n    }\n  }]);\n  return ExtendedChoices;\n}(choices_js__WEBPACK_IMPORTED_MODULE_0___default.a);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGVtcGxhdGUvbW9kdWxlcy9jb21tb24vZXh0ZW5kZWRDaG9pY2VzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RlbXBsYXRlL21vZHVsZXMvY29tbW9uL2V4dGVuZGVkQ2hvaWNlcy5qcz8zNWVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaG9pY2VzIGZyb20gJ2Nob2ljZXMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0ZW5kZWRDaG9pY2VzIGV4dGVuZHMgQ2hvaWNlcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCwgb3B0aW9ucykge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQn9C10YDQstGL0Lwg0LLRhdC+0LTQvdGL0Lwg0L/QsNGA0LDQvNC10YLRgNC+0Lwg0LTQvtC70LbQtdC9INC/0LXRgNC10LTQsNCy0LDRgtGM0YHRjyBpbnB1dFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZWN0T3B0aW9ucyA9IEFycmF5LmZyb20oaW5wdXQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJykpO1xyXG4gICAgICAgIHN1cGVyKGlucHV0LCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmV4dGVuZEluaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbnMgPSBzZWxlY3RPcHRpb25zO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YUF0dHJpYnV0ZXMoKTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNldERhdGFBdHRyaWJ1dGVzKCkpXHJcbiAgICAgICAgaW5wdXQuY2hvaWNlID0gdGhpcztcclxuICAgICAgICB0aGlzLmV4dGVuZEluaXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGFBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zLmZvckVhY2goYWN0aXZlSXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLnNlbGVjdE9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09IGFjdGl2ZUl0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuY2hvaWNlc19faXRlbVtkYXRhLWlkPVwiJHthY3RpdmVJdGVtLmlkfVwiXWApO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLmRhdGFzZXQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gaW4gb3B0aW9uLmRhdGFzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXRbaXRlbV0gPSBvcHRpb24uZGF0YXNldFtpdGVtXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW0uZGF0YXNldCA9IHsuLi5vcHRpb24uZGF0YXNldH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKHRoaXMuZXh0ZW5kSW5pdCAmJiB0aGlzLmlucHV0LnR5cGUgPT0gXCJzZWxlY3Qtb25lXCIgJiYgdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXNbMF0uZGF0YXNldC5ocmVmKXtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5fc3RvcmUuYWN0aXZlSXRlbXNbMF0uZGF0YXNldC5ocmVmLCdfYmxhbmsnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/template/modules/common/extendedChoices.js\n");

/***/ })

}]);
//# sourceMappingURL=2.js.map