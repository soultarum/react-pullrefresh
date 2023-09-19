"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RotatingSvgStyle = {
  transformOrigin: "center",
  animation: "rotating 1.4s linear infinite"
};

var DashedcircleStyle = {
  strokeDasharray: "62px",
  transformOrigin: "center",
  animation: "dashed 1.4s ease-in-out infinite"
};

exports.default = function (props, state) {
  var max = state.max,
      yRefreshing = state.yRefreshing,
      y = state.y,
      phase = state.phase;
  var zIndex = props.zIndex,
      color = props.color,
      bgColor = props.bgColor;

  var p = Math.atan(y / max);
  var pMax = Math.atan(yRefreshing / max);
  var r = Math.PI * 10 * 2;
  var SvgStyle = phase !== 'refreshing' ? RotatingSvgStyle : {};
  var CircleStyle = phase === 'refreshing' ? DashedcircleStyle : {};
  var refreshed = phase === 'refreshed';
  return _react2.default.createElement(
    "div",
    {
      key: "pull",
      zIndex: zIndex,
      className: "cTgxiN",
      style: {
        top: Math.max(refreshed ? Math.atan(1) : p, 0) * max - 10,
        transform: "translate(-50%, -100%) scale(" + (refreshed ? p : 1) + "," + (refreshed ? p : 1) + ")",
        backgroundColor: bgColor,
        position: "absolute",
        zIndex: zIndex,
        left: "50%",
        borderRadius: "20px",
        width: "40px",
        height: "40px",
        boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)"
      }
    },
    _react2.default.createElement(
      "style",
      null,
      "\n        @keyframes dashed {\n          0% {\n            stroke-dashoffset: 62px;\n          }\n          50% {\n            stroke-dashoffset: calc(62px/4);\n            transform: rotate(135deg);\n          }\n          100% {\n            stroke-dashoffset: 62px;\n            transform: rotate(450deg);\n          }\n        }\n\n        @keyframes rotating {\n          0% {\n            transform: rotate(0deg);\n          }\n          100% {\n            transform: rotate(270deg);\n          }\n        }\n      \n      \n      "
    ),
    _react2.default.createElement(
      "svg",
      {
        style: _extends({
          transform: "rotate(" + yRefreshing + "deg)"
        }, SvgStyle),
        width: 40,
        height: 40,
        viewBox: "0 0 40 40"
      },
      _react2.default.createElement("circle", {
        style: _extends({ opacity: pMax }, CircleStyle),
        stroke: color,
        strokeWidth: 2.5,
        strokeDasharray: [r * pMax * 0.6, r * (1 - pMax * 0.6)],
        strokeDashoffset: -r * (1 - pMax * 0.6),
        fill: "none",
        cx: 20,
        cy: 20,
        r: 8.5
      }),
      phase !== 'refreshing' && _react2.default.createElement("path", {
        style: {
          opacity: pMax,
          transformOrigin: '50% 0%',
          transform: "scale(" + Math.min(pMax, 1) + ", " + Math.min(pMax, 1) + ")"
        },
        fill: color,
        d: "M23.5,19l5,5l5-5H23.5z"
      })
    )
  );
};