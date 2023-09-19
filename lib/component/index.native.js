'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  left: 50%;\n  border-radius: 20px;\n  width: 40px;\n  height: 40px;\n  shadow-radius: 2;\n  shadow-offset: { width: 0, height: 2 };\n  shadow-opacity: 0.14;\n  shadow-color: #000;\n'], ['\n  position: absolute;\n  left: 50%;\n  border-radius: 20px;\n  width: 40px;\n  height: 40px;\n  shadow-radius: 2;\n  shadow-offset: { width: 0, height: 2 };\n  shadow-opacity: 0.14;\n  shadow-color: #000;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _native = require('styled-components/native');

var _native2 = _interopRequireDefault(_native);

var _reactNative = require('react-native');

var _reactNativeSvg = require('react-native-svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RotatingSvg = function (_Component) {
  _inherits(RotatingSvg, _Component);

  function RotatingSvg(props) {
    _classCallCheck(this, RotatingSvg);

    var _this = _possibleConstructorReturn(this, (RotatingSvg.__proto__ || Object.getPrototypeOf(RotatingSvg)).call(this, props));

    _this.state = {
      r: new _reactNative.Animated.Value(0),
      value: 0
    };
    return _this;
  }

  _createClass(RotatingSvg, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.state.r.addListener(function (r) {
        _this2.setState({ value: r.value });
      });
      this._animated = _reactNative.Animated.loop(_reactNative.Animated.timing(this.state.r, {
        easing: _reactNative.Easing.linear,
        toValue: 270,
        duration: 1400
      }));
      this._animated.start();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._animated.stop();
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;

      var _props = this.props,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['style']);

      return _react2.default.createElement(_reactNativeSvg.Svg, _extends({
        style: _extends({}, style || {}, {
          transform: [].concat(_toConsumableArray(style.transform || []), [{ rotate: value + 'deg' }])
        })
      }, props));
    }
  }]);

  return RotatingSvg;
}(_react.Component);

var DashedCircle = function (_Component2) {
  _inherits(DashedCircle, _Component2);

  function DashedCircle(props) {
    _classCallCheck(this, DashedCircle);

    var _this3 = _possibleConstructorReturn(this, (DashedCircle.__proto__ || Object.getPrototypeOf(DashedCircle)).call(this, props));

    _this3.state = {
      rotate: new _reactNative.Animated.Value(0),
      dash: new _reactNative.Animated.Value(62)
    };
    return _this3;
  }

  _createClass(DashedCircle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      this.state.rotate.addListener(function (r) {
        _this4.setState({ r: r.value });
      });
      this.state.dash.addListener(function (d) {
        _this4.setState({ d: d.value });
      });
      this._animated = _reactNative.Animated.loop(_reactNative.Animated.parallel([_reactNative.Animated.sequence([_reactNative.Animated.timing(this.state.rotate, {
        toValue: 135,
        duration: 700
      }), _reactNative.Animated.timing(this.state.rotate, {
        toValue: 450,
        duration: 700
      })]), _reactNative.Animated.sequence([_reactNative.Animated.timing(this.state.dash, {
        toValue: 62 / 4,
        duration: 700
      }), _reactNative.Animated.timing(this.state.dash, {
        toValue: 62,
        duration: 700
      })])]));
      this._animated.start();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._animated.stop();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          r = _state.r,
          d = _state.d;

      var _props2 = this.props,
          strokeDasharray = _props2.strokeDasharray,
          style = _props2.style,
          props = _objectWithoutProperties(_props2, ['strokeDasharray', 'style']);

      return _react2.default.createElement(_reactNativeSvg.Circle, _extends({}, props, {
        strokeDashoffset: d,
        strokeDasharray: [62],
        style: _extends({}, style || {}, {
          transform: [].concat(_toConsumableArray(style.transform || []), [{ rotate: r + 'deg' }])
        })
      }));
    }
  }]);

  return DashedCircle;
}(_react.Component);

var Container = (0, _native2.default)(_reactNative.View)(_templateObject);

exports.default = function (props, state, children) {
  var max = state.max,
      yRefreshing = state.yRefreshing,
      y = state.y,
      phase = state.phase;
  var color = props.color,
      bgColor = props.bgColor;

  var p = Math.atan(y / max);
  var pMax = Math.atan(yRefreshing / max);
  var r = Math.PI * 10 * 2;
  var Svg = phase === 'refreshing' ? RotatingSvg : _reactNativeSvg.Svg;
  var Circle = phase === 'refreshing' ? DashedCircle : _reactNativeSvg.Circle;
  var refreshed = phase === 'refreshed';
  return [children, _react2.default.createElement(
    Container,
    {
      key: 'pull',
      style: {
        top: Math.max(refreshed ? Math.atan(1) : p, 0) * max - 10,
        transform: [{ translateX: -20 }, { translateY: -40 }, { scale: refreshed ? p : 1 }],
        backgroundColor: bgColor
      }
    },
    _react2.default.createElement(
      Svg,
      {
        style: {
          transform: [{ rotate: yRefreshing * 0.05 + 'deg)' },
          // 0 270
          { rotate: yRefreshing * 0.05 + 'deg)' }]
        },
        width: 40,
        height: 40,
        viewBox: '0 0 40 40'
      },
      _react2.default.createElement(Circle, {
        style: { opacity: pMax },
        stroke: color,
        strokeWidth: 2.5,
        strokeDasharray: [r * pMax * 0.6, r * (1 - pMax * 0.6)],
        strokeDashoffset: -r * (1 - pMax * 0.6),
        fill: 'none',
        cx: 20,
        cy: 20,
        r: 8.5
      }),
      phase !== 'refreshing' && _react2.default.createElement(_reactNativeSvg.Path, {
        style: {
          opacity: pMax,
          transform: [{ scale: Math.min(pMax, 1) }]
        },
        fill: color,
        d: 'M23.5,19l5,5l5-5H23.5z'
      })
    )
  )];
};