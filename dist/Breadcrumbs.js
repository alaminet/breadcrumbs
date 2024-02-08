"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _IoChevronForward = _interopRequireDefault(require("./IoChevronForward"));
require("./breadcrumbs.css");
var _FaHome = _interopRequireDefault(require("./FaHome"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Breadcrumbs = function Breadcrumbs(_ref) {
  var className = _ref.className,
    separatorIcon = _ref.separatorIcon,
    homeIcon = _ref.homeIcon,
    classNameText = _ref.classNameText;
  var bread = window.location.pathname.split("/");
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Product"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-1 ".concat(className)
  }, homeIcon && homeIcon || /*#__PURE__*/_react["default"].createElement(_FaHome["default"], null), bread.slice(1).length > 1 && bread.slice(1).map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "flex items-center gap-1"
    }, separatorIcon && separatorIcon || /*#__PURE__*/_react["default"].createElement(_IoChevronForward["default"], null), /*#__PURE__*/_react["default"].createElement("p", {
      className: classNameText
    }, item));
  })));
};
var _default = exports["default"] = Breadcrumbs;