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

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\react\\kickstart\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                campaign = (0, _campaign2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:

                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:

                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Contribute!'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udHJpYnV0ZUZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJrZXkiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkZpZWxkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImxhYmVsUG9zaXRpb24iLCJoZWFkZXIiLCJjb250ZW50IiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUxBLElBQUlBLGVBQWUscURBQW5COzs7QUFPQSxJQUFJQyxpQkFBaUIsVUFBVUMsVUFBVixFQUFzQjtBQUN6QywwQkFBVUQsY0FBVixFQUEwQkMsVUFBMUI7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QyxLQUF0QixFQUFoQixDQUFQO0FBQ0QsU0FKd0I7QUFLekI0QyxlQUFPLE9BTGtCO0FBTXpCQyx1QkFBZSxPQU5VO0FBT3pCUCxrQkFBVTtBQUNSQyxvQkFBVTFELFlBREY7QUFFUjJELHNCQUFZO0FBRko7QUFQZSxPQUEzQixDQWxCRixDQVBLLEVBc0NMLGdCQUFNSixhQUFOLDJCQUE2QixFQUFFQyxPQUFPLElBQVQsRUFBZVMsUUFBUSxPQUF2QixFQUFnQ0MsU0FBUyxLQUFLaEQsS0FBTCxDQUFXRSxZQUFwRCxFQUFrRXFDLFVBQVU7QUFDckdDLG9CQUFVMUQsWUFEMkY7QUFFckcyRCxzQkFBWTtBQUZ5RjtBQUE1RSxPQUE3QixDQXRDSyxFQTJDTCxnQkFBTUosYUFBTiwwQkFFRSxFQUFFWSxTQUFTLElBQVgsRUFBaUI5QyxTQUFTLEtBQUtILEtBQUwsQ0FBV0csT0FBckMsRUFBOENvQyxVQUFVO0FBQ3BEQyxvQkFBVTFELFlBRDBDO0FBRXBEMkQsc0JBQVk7QUFGd0M7QUFBeEQsT0FGRixFQU9FLGFBUEYsQ0EzQ0ssQ0FBUDtBQXFERDtBQTFEMkIsR0FBRCxDQUE3Qjs7QUE2REEsU0FBTzFELGNBQVA7QUFDRCxDQXZJb0Isa0JBQXJCOztrQkF5SWVBLGMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3InO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICdEOlxcXFxyZWFjdFxcXFxraWNrc3RhcnRcXFxcY29tcG9uZW50c1xcXFxDb250cmlidXRlRm9ybS5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbnZhciBDb250cmlidXRlRm9ybSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb250cmlidXRlRm9ybSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29udHJpYnV0ZUZvcm0oKSB7XG4gICAgdmFyIF9yZWYsXG4gICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRyaWJ1dGVGb3JtKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBDb250cmlidXRlRm9ybS5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihDb250cmlidXRlRm9ybSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSwgX3RoaXMub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGV2ZW50KSB7XG4gICAgICAgIHZhciBjYW1wYWlnbiwgYWNjb3VudHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjYW1wYWlnbiA9IENhbXBhaWduKF90aGlzLnByb3BzLmFkZHJlc3MpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDM7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvV2VpKF90aGlzLnN0YXRlLnZhbHVlLCAnZXRoZXInKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgOTpcblxuICAgICAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoJy9jYW1wYWlnbnMvJyArIF90aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxMjtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDMpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IF9jb250ZXh0LnQwLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNTpcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHZhbHVlOiAnJyB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCBfdGhpczIsIFtbMywgMTJdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udHJpYnV0ZUZvcm0sIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBGb3JtLFxuICAgICAgICB7IG9uU3VibWl0OiB0aGlzLm9uU3VibWl0LCBlcnJvcjogISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAzNlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBGb3JtLkZpZWxkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM3XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM4XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnQW1vdW50IHRvIENvbnRyaWJ1dGUnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYWJlbDogJ2V0aGVyJyxcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzOVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZSwgeyBlcnJvcjogdHJ1ZSwgaGVhZGVyOiAnT29wcyEnLCBjb250ZW50OiB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA0N1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgbG9hZGluZzogdGhpcy5zdGF0ZS5sb2FkaW5nLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0OFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0NvbnRyaWJ1dGUhJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250cmlidXRlRm9ybTtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJpYnV0ZUZvcm07Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udHJpYnV0ZUZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJrZXkiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkZpZWxkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImxhYmVsUG9zaXRpb24iLCJoZWFkZXIiLCJjb250ZW50IiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUxBLElBQUlBLGVBQWUscURBQW5COzs7QUFPQSxJQUFJQyxpQkFBaUIsVUFBVUMsVUFBVixFQUFzQjtBQUN6QywwQkFBVUQsY0FBVixFQUEwQkMsVUFBMUI7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