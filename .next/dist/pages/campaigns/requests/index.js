'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\react\\kickstart\\Shmart\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Found ', this.props.requestCount, ' requests.'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdEluZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJSb3dzIiwiX3RoaXMyIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyb3V0ZSIsInByaW1hcnkiLCJmbG9hdGVkIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJyZXF1ZXN0Q291bnQiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInNlbnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiX3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBTkEsSUFBSUEsZUFBZSwwRUFBbkI7OztBQVFBLElBQUlDLGVBQWUsVUFBVUMsVUFBVixFQUFzQjtBQUN2QywwQkFBVUQsWUFBVixFQUF3QkMsVUFBeEI7O0FBRUEsV0FBU0QsWUFBVCxHQUF3QjtBQUN0QixrQ0FBZ0IsSUFBaEIsRUFBc0JBLFlBQXRCOztBQUVBLFdBQU8seUNBQTJCLElBQTNCLEVB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LElBQXBCO0FBQ0EsdUJBQU9QLFNBQVNhLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEIsRUFBRW5DLFNBQVNBLE9BQVgsRUFBb0JOLFVBQVVBLFFBQTlCLEVBQXdDcUIsY0FBY0EsWUFBdEQsRUFBb0VkLGdCQUFnQkEsY0FBcEYsRUFBMUIsQ0FBUDs7QUFFRixtQkFBSyxFQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPcUIsU0FBU2MsSUFBVCxFQUFQO0FBekJKO0FBMkJEO0FBQ0YsU0E5Qk0sRUE4QkpsQixPQTlCSSxFQThCSyxJQTlCTCxDQUFQO0FBK0JELE9BakMwQyxDQUFoQyxDQUFYOztBQW1DQSxlQUFTbUIsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkI7QUFDM0IsZUFBT3RCLEtBQUs3QixLQUFMLENBQVcsSUFBWCxFQUFpQkMsU0FBakIsQ0FBUDtBQUNEOztBQUVELGFBQU9pRCxlQUFQO0FBQ0QsS0F6Q007QUFGSixHQUFELENBak1KOztBQStPQSxTQUFPckQsWUFBUDtBQUNELENBelBrQixrQkFBbkI7O2tCQTJQZUEsWSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX1Byb21pc2UgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UnO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICdEOlxcXFxyZWFjdFxcXFxraWNrc3RhcnRcXFxcU2htYXJ0XFxcXHBhZ2VzXFxcXGNhbXBhaWduc1xcXFxyZXF1ZXN0c1xcXFxpbmRleC5qcz9lbnRyeSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcblxudmFyIFJlcXVlc3RJbmRleCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZXF1ZXN0SW5kZXgsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlcXVlc3RJbmRleCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVxdWVzdEluZGV4KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVxdWVzdEluZGV4Ll9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKFJlcXVlc3RJbmRleCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlcXVlc3RJbmRleCwgW3tcbiAgICBrZXk6ICdyZW5kZXJSb3dzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUm93cygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoZnVuY3Rpb24gKHJlcXVlc3QsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlcXVlc3RSb3csIHtcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIGlkOiBpbmRleCxcbiAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgICAgIGFkZHJlc3M6IF90aGlzMi5wcm9wcy5hZGRyZXNzLFxuICAgICAgICAgIGFwcHJvdmVyc0NvdW50OiBfdGhpczIucHJvcHMuYXBwcm92ZXJzQ291bnQsXG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAzMVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgSGVhZGVyID0gVGFibGUuSGVhZGVyLFxuICAgICAgICAgIFJvdyA9IFRhYmxlLlJvdyxcbiAgICAgICAgICBIZWFkZXJDZWxsID0gVGFibGUuSGVhZGVyQ2VsbCxcbiAgICAgICAgICBCb2R5ID0gVGFibGUuQm9keTtcblxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF5b3V0LFxuICAgICAgICB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA0NVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaDMnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ2XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnUmVxdWVzdHMnXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgTGluayxcbiAgICAgICAgICB7IHJvdXRlOiAnL2NhbXBhaWducy8nICsgdGhpcy5wcm9wcy5hZGRyZXNzICsgJy9yZXF1ZXN0cy9uZXcnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0N1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ4XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgZmxvYXRlZDogJ3JpZ2h0Jywgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAxMCB9LCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAnQWRkIFJlcXVlc3QnXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFRhYmxlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgSGVhZGVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFJvdyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgSGVhZGVyQ2VsbCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1N1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ0lEJ1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNThcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU5XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnQW1vdW50J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdSZWNpcGllbnQnXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgSGVhZGVyQ2VsbCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA2MVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ0FwcHJvdmFsIENvdW50J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdBcHByb3ZlJ1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdGaW5hbGl6ZSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEJvZHksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA2NlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJSb3dzKClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNjhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdGb3VuZCAnLFxuICAgICAgICAgIHRoaXMucHJvcHMucmVxdWVzdENvdW50LFxuICAgICAgICAgICcgcmVxdWVzdHMuJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnZ2V0SW5pdGlhbFByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKHByb3BzKSB7XG4gICAgICAgIHZhciBhZGRyZXNzLCBjYW1wYWlnbiwgcmVxdWVzdENvdW50LCBhcHByb3ZlcnNDb3VudCwgcmVxdWVzdHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYWRkcmVzcyA9IHByb3BzLnF1ZXJ5LmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXF1ZXN0Q291bnQgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVyc0NvdW50KCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudCA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEwO1xuICAgICAgICAgICAgICAgIHJldHVybiBfUHJvbWlzZS5hbGwoQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSkuZmlsbCgpLm1hcChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgcmVxdWVzdHMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHsgYWRkcmVzczogYWRkcmVzcywgcmVxdWVzdHM6IHJlcXVlc3RzLCByZXF1ZXN0Q291bnQ6IHJlcXVlc3RDb3VudCwgYXBwcm92ZXJzQ291bnQ6IGFwcHJvdmVyc0NvdW50IH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldEluaXRpYWxQcm9wcztcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBSZXF1ZXN0SW5kZXg7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdEluZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJSb3dzIiwiX3RoaXMyIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyb3V0ZSIsInByaW1hcnkiLCJmbG9hdGVkIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJyZXF1ZXN0Q291bnQiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJjYW1wYWlnbiIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInNlbnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiX3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBTkEsSUFBSUEsZUFBZSwwRUFBbkI7OztBQVFBLElBQUlDLGVBQWUsVUFBVUMsVUFBVixFQUFzQjtBQUN2QywwQkFBVUQsWUFBVixFQUF3QkMsVUFBeEI7O0FBRUEsV0FBU0QsWUFBVCxHQUF3QjtBQUN0QixrQ0FBZ0IsSUFBaEIsRUFBc0JBLFlBQXRCOztBQUVBLFdBQU8seUNBQTJCLElBQTNCLEVB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