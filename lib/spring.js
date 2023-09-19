'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = require('event-emitter');

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var sleep = function sleep(msec) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, msec);
  });
};
var _loop = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(promise) {
    var proc;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            proc = function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return promise();

                      case 2:
                        _context.t0 = _context.sent;

                        if (!_context.t0) {
                          _context.next = 7;
                          break;
                        }

                        _context.next = 6;
                        return proc();

                      case 6:
                        _context.t0 = _context.sent;

                      case 7:
                        return _context.abrupt('return', _context.t0);

                      case 8:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function proc() {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.next = 3;
            return proc();

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function _loop(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Spring = function () {
  function Spring(tension, friction) {
    _classCallCheck(this, Spring);

    this._emitter = new _eventEmitter2.default();
    this._tension = tension;
    this._friction = friction;
    this._value = 0;
    this._endValue = 0;
    this._loop = false;
    this._paused = false;
  }

  _createClass(Spring, [{
    key: 'pause',
    value: function pause() {
      this._paused = true;
    }
  }, {
    key: 'resume',
    value: function resume() {
      this._paused = false;
    }
  }, {
    key: 'to',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(value) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._endValue = value;
                this.loop();
                _context3.next = 4;
                return this._wait('end');

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function to(_x2) {
        return _ref3.apply(this, arguments);
      }

      return to;
    }()
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (this._value !== value) {
        this._value = value;
        this._onUpdate(this);
      }
    }
  }, {
    key: '_emit',
    value: function _emit(type) {
      this._emitter.emit(type);
    }
  }, {
    key: '_wait',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(type) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return new Promise(function (resolve) {
                  return _this._emitter.once(type, resolve);
                });

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _wait(_x3) {
        return _ref4.apply(this, arguments);
      }

      return _wait;
    }()
  }, {
    key: 'loop',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this._loop) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt('return');

              case 2:

                this._emit('start');
                this._loop = true;

                _context6.next = 6;
                return _loop(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  var dv;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return sleep(1000 / 60);

                        case 2:
                          if (!_this2._paused) {
                            _context5.next = 4;
                            break;
                          }

                          return _context5.abrupt('return', true);

                        case 4:
                          // TODO: dummy -> use tention,friction
                          dv = (_this2._endValue - _this2._value) / 5;

                          _this2.setValue(_this2._value + dv);
                          return _context5.abrupt('return', Math.abs(dv) > 0.2);

                        case 7:
                        case 'end':
                          return _context5.stop();
                      }
                    }
                  }, _callee5, _this2);
                })));

              case 6:
                this.setValue(this._endValue);

                this._loop = false;
                this._emit('end');

              case 9:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function loop() {
        return _ref5.apply(this, arguments);
      }

      return loop;
    }()
  }, {
    key: 'onUpdate',
    set: function set(onUpdate) {
      this._onUpdate = onUpdate;
    }
  }, {
    key: 'endValue',
    set: function set(value) {
      this._endValue = value;
      this.loop();
    }
  }, {
    key: 'currentValue',
    get: function get() {
      return this._value;
    }
  }]);

  return Spring;
}();

exports.default = Spring;