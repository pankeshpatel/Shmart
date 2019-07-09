'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\react\\kickstart\\Shmart\\pages\\records\\new.js?entry';


var RecordNew = function (_Component) {
  (0, _inherits3.default)(RecordNew, _Component);

  function RecordNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RecordNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecordNew.__proto__ || (0, _getPrototypeOf2.default)(RecordNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: '',
      id: '',
      role: '',
      org_type: '',
      provider: '',
      wallet_balance: '',
      wallet_ID: '',
      shmart_record: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                event.preventDefault();

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createRecord(_this.state.name, _this.state.id, _this.state.role, _this.state.org_type, _this.state.provider, _this.state.wallet_balance, _this.state.wallet_ID, _this.state.shmart_record).send({
                  from: accounts[0]
                });

              case 8:

                _routes.Router.pushRoute('/');

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // This is the initial value. 
  // This is useful. Because onChangeHandler, we will 
  // call an event that capture the value, entered by the user.


  // This function will submit the user registeration
  // information to Blockchain network. 

  (0, _createClass3.default)(RecordNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Create Record'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Name'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'First Name and Last Name',
        value: this.state.name,
        onChange: function onChange(event) {
          return _this3.setState({
            name: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'ID'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Government ID / Verified ID Number',
        value: this.state.id,
        onChange: function onChange(event) {
          return _this3.setState({
            id: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'Role'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Role',
        value: this.state.role,
        onChange: function onChange(event) {
          return _this3.setState({
            role: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, 'Organization Type'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Your Organization Type',
        value: this.state.org_type,
        onChange: function onChange(event) {
          return _this3.setState({
            org_type: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, 'Provider'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Provider Information',
        value: this.state.provider,
        onChange: function onChange(event) {
          return _this3.setState({
            provider: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, 'Wallet Balance'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Wallet Balance (in USD)',
        value: this.state.wallet_balance,
        onChange: function onChange(event) {
          return _this3.setState({
            wallet_balance: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, 'Wallet ID'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Wallet ID',
        value: this.state.wallet_ID,
        onChange: function onChange(event) {
          return _this3.setState({
            wallet_ID: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      })), _react2.default.createElement(_semanticUiReact.Form.TextArea, {
        label: 'SHMART Record',
        placeholder: 'Enter SHMART Record Link',
        value: this.state.shmart_record,
        onChange: function onChange(event) {
          return _this3.setState({
            shmart_record: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true, header: 'Oops!',
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, 'Register Record!')));
    }
  }]);

  return RecordNew;
}(_react.Component);

exports.default = RecordNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxyZWNvcmRzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiZmFjdG9yeSIsIndlYjMiLCJSb3V0ZXIiLCJSZWNvcmROZXciLCJzdGF0ZSIsIm5hbWUiLCJpZCIsInJvbGUiLCJvcmdfdHlwZSIsInByb3ZpZGVyIiwid2FsbGV0X2JhbGFuY2UiLCJ3YWxsZXRfSUQiLCJzaG1hcnRfcmVjb3JkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZWNvcmQiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O2tOLEFBS0o7WUFBUSxBQUNBLEFBQ047VUFGTSxBQUVGLEFBQ0o7WUFITSxBQUdBLEFBQ047Z0JBSk0sQUFJSSxBQUNWO2dCQUxNLEFBS0ksQUFDVjtzQkFOTSxBQU1TLEFBQ2Y7aUJBUE0sQUFPSyxBQUNYO3FCQVJNLEFBUVMsQUFDZjtvQkFUTSxBQVNRLEFBQ2Q7ZUFWTSxBQVVHLEE7QUFWSCxBQUNOLGEsQUFlRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFFVDs7c0JBQUEsQUFBTSxBQUVOOztzQkFBQSxBQUFLOzJCQUFTLEFBQ0gsQUFD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Szt1QkFDRCxNQUFBLEFBQU0sT0FEbkIsQUFBUyxBQUFjLEFBQ0c7QUFESCxBQUNyQixXQURPO0FBSmY7O29CQUFBO3NCQTVGSixBQTBGRSxBQUVFLEFBWUY7QUFaRTtBQUNFLHlDQVdKLEFBQUMsc0JBQUQsQUFBTTtlQUFOLEFBQ1UsQUFDTjtxQkFGSixBQUVnQixBQUNaO2VBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCO2tCQUNJLHlCQUFBO3dCQUFTLEFBQUs7MkJBQ0csTUFBQSxBQUFNLE9BRHZCLEFBQVMsQUFBYyxBQUNPO0FBRFAsQUFDckIsV0FETztBQUxqQjs7b0JBQUE7c0JBeEdGLEFBd0dFLEFBV0E7QUFYQTtBQUNJLDBCQVVKLEFBQUM7ZUFBRCxNQUNVLFFBRFYsQUFDaUIsQUFDYjtpQkFBUyxLQUFBLEFBQUssTUFGbEIsQUFFd0I7O29CQUZ4QjtzQkFuSEYsQUFtSEUsQUFLQTtBQUxBO0FBQ0ksMEJBSUosQUFBQztpQkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsU0FBUyxTQURqQztvQkFBQTtzQkFBQTtBQUFBO0FBQ0ksU0E3SFYsQUFDRSxBQUdFLEFBd0hFLEFBT1A7Ozs7O0FBMUxxQixBLEFBNkx4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovcmVhY3Qva2lja3N0YXJ0L1NobWFydCJ9