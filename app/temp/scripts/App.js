/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Square = __webpack_require__(1);

var _Square2 = _interopRequireDefault(_Square);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Main app component
// initializes all other components
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.setAppState = function (state) {
      _this.setState(state);
    };

    _this.setAppState = _this.setAppState.bind(_this);

    _this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      prevValue: "",
      gameOver: false,
      winner: "",
      tie: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "wrapper" },
        this.state.gameOver && React.createElement(
          "label",
          null,
          "We have a winner ",
          this.state.winner
        ),
        this.state.tie && React.createElement(
          "label",
          null,
          "It's a tie"
        ),
        !(this.state.gameOver || this.state.tie) && React.createElement(
          "label",
          null,
          "It's your turn ",
          this.state.prevValue === 'O' ? 'O' : 'X'
        ),
        React.createElement(
          "table",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              React.createElement(_Square2.default, { parentState: this.state, squareIndex: "0", setAppState: this.setAppState, value: this.state.squares[0] })
            ),
            React.createElement(
              "td",
              null,
              React.createElement(_Square2.default, { parentState: this.state, squareIndex: "1", setAppState: this.setAppState, value: this.state.squares[1] })
            ),
            React.createElement(
              "td",
              null,
              React.createElement(_Square2.default, { parentState: this.state, squareIndex: "2", setAppState: this.setAppState, value: this.state.squares[2] })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              React.createElement(_Square2.default, { parentState: this.state, squareIndex: "3", setAppState: this.setAppState, value: this.state.squares[3] })
            ),
            React.createElement(
              "td",
              null,
              React.createElement(_Square2.default, { parentState: this.state, squareIndex: "4", setAppState: this.setAppState, value: this.state.squares[4] })
            ),
            React.createElement(
              "td",
              null,
              React.createElement(_Square2.default, { parentState: this.state, squareIndex: "5", setAppState: this.setAppState, value: this.state.squares[5] })
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              React.createElement(_Square2.default, { parentState: this.state, squareIndex: "6", setAppState: this.setAppState, value: this.state.squares[6] })
            ),
            React.createElement(
              "td",
              null,
              React.createElement(_Square2.default, { parentState: this.state, squareIndex: "7", setAppState: this.setAppState, value: this.state.squares[7] })
            ),
            React.createElement(
              "td",
              null,
              React.createElement(_Square2.default, { parentState: this.state, squareIndex: "8", setAppState: this.setAppState, value: this.state.squares[8] })
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

// render App component in main section


ReactDOM.render(React.createElement(App, null), document.getElementById('main'));

exports.default = App;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Square = function (_React$Component) {
    _inherits(Square, _React$Component);

    function Square(props) {
        _classCallCheck(this, Square);

        var _this = _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, props));

        _this.handleClick = function (event) {
            var that = _this;
            if (!_this.props.parentState.gameOver) {
                if (!_this.props.parentState.squares[_this.props.squareIndex]) {
                    if (!_this.props.parentState.prevValue || _this.props.parentState.prevValue === "X") {
                        var squares = _this.props.parentState.squares;
                        squares[_this.props.squareIndex] = "X";
                        _this.props.setAppState({ squares: squares, prevValue: "O" });
                    } else {
                        var _squares = _this.props.parentState.squares;
                        _squares[_this.props.squareIndex] = "O";
                        _this.props.setAppState({ squares: _squares, prevValue: "X" });
                    }
                }

                var winnerArrays = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

                winnerArrays.forEach(function (arr) {
                    var firstValue = that.props.parentState.squares[arr[0]];
                    if (firstValue) {
                        if (firstValue === that.props.parentState.squares[arr[1]] && firstValue == that.props.parentState.squares[arr[2]]) {
                            that.props.setAppState({ gameOver: true, winner: firstValue });
                            return;
                        }
                    }
                });

                var counter = 0;
                that.props.parentState.squares.forEach(function (val) {
                    if (val) {
                        counter++;
                    }
                });

                if (counter === 9 && !_this.props.parentState.gameOver) {
                    that.props.setAppState({ tie: true });
                }
            }
        };

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Square, [{
        key: "render",
        value: function render() {
            return React.createElement("input", { type: "button", onClick: this.handleClick, value: this.props.value });
        }
    }]);

    return Square;
}(React.Component);

exports.default = Square;

/***/ })
/******/ ]);