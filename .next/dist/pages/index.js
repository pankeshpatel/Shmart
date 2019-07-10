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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\react\\kickstart\\Shmart\\pages\\index.js?entry';


var RecordsIndex = function (_Component) {
  (0, _inherits3.default)(RecordsIndex, _Component);

  function RecordsIndex() {
    (0, _classCallCheck3.default)(this, RecordsIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RecordsIndex.__proto__ || (0, _getPrototypeOf2.default)(RecordsIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RecordsIndex, [{
    key: 'renderRecords',

    // The renderRecords() function is responsible
    // for generating the main content of this page.
    // For instance, this page receives the JSON records
    // from getInitialProps() and returns the HTML page
    // to the render() function.

    value: function renderRecords() {
      var items = this.props.records.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/records/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }, 'View Records')),
          fluid: true
        };
      });

      // Card.Group is an "Semantic-UI components"
      // to display a group of card.
      // Refer -- https://semantic-ui.com/views/card.html
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      });
    }
    // The render() is responsible for returning complete
    // HTML page for user View.
    // This HTML page contains
    // 1. The layout of the page. These are common components and stays
    // into components folder.
    // 2. main content of the page.

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Open records'), _react2.default.createElement(_routes.Link, { route: '/records/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Records',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }))), this.renderRecords()));
    }
  }], [{
    key: 'getInitialProps',

    // The getInitialProps() interacts with the Smart Contract
    // fetch the records in JSON.
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var records;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedRecords().call();

              case 2:
                records = _context.sent;
                return _context.abrupt('return', { records: records });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RecordsIndex;
}(_react.Component);

exports.default = RecordsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVjb3Jkc0luZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJSZWNvcmRzIiwiaXRlbXMiLCJwcm9wcyIsInJlY29yZHMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVFbGVtZW50Iiwicm91dGUiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImZsdWlkIiwiR3JvdXAiLCJyZW5kZXIiLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5IiwiX3JlZiIsIm1hcmsiLCJfY2FsbGVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFJlY29yZHMiLCJjYWxsIiwic2VudCIsImFicnVwdCIsInN0b3AiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFMQSxJQUFJQSxlQUFlLHFEQUFuQjs7O0FBT0EsSUFBSUMsZUFBZSxVQUFVQyxVQUFWLEVBQXNCO0FBQ3ZDLDBCQUFVRCxZQUFWLEVBQXdCQyxVQUF4Qjs7QUFFQSxXQUFTRCxZQUFULEdBQXdCO0FBQ3RCLGtDQUFnQixJQUFoQixFQUFzQkEsWUFBdEI7O0FBRUEsV0FBTyx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0EsYUFBYUUsU0FBYixJQUEwQiw4QkFBdUJGLFlBQXZCLENBQTNCLEVBQWlFRyxLQUFqRSxDQUF1RSxJQUF2RSxFQUE2RUMsU0FBN0UsQ0FBakMsQ0FBUDtBQUNEOztBQUVELDZCQUFhSixZQUFiLEVBQTJCLENBQUM7QUFDMUJL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VXNCLFNBQVNNLElBQW5CO0FBQ0EsdUJBQU9OLFNBQVNPLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEIsRUFBRTdCLFNBQVNBLE9BQVgsRUFBMUIsQ0FBUDs7QUFFRixtQkFBSyxDQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPc0IsU0FBU1EsSUFBVCxFQUFQO0FBWEo7QUFhRDtBQUNGLFNBaEJNLEVBZ0JKWCxPQWhCSSxFQWdCSyxJQWhCTCxDQUFQO0FBaUJELE9BbkIwQyxDQUFoQyxDQUFYOztBQXFCQSxlQUFTWSxlQUFULEdBQTJCO0FBQ3pCLGVBQU9kLEtBQUt4QixLQUFMLENBQVcsSUFBWCxFQUFpQkMsU0FBakIsQ0FBUDtBQUNEOztBQUVELGFBQU9xQyxlQUFQO0FBQ0QsS0EzQk07QUFOSixHQUFELENBaEhKOztBQW9KQSxTQUFPekMsWUFBUDtBQUNELENBOUprQixrQkFBbkI7O2tCQWdLZUEsWSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJ0Q6XFxcXHJlYWN0XFxcXGtpY2tzdGFydFxcXFxTaG1hcnRcXFxccGFnZXNcXFxcaW5kZXguanM/ZW50cnknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcblxudmFyIFJlY29yZHNJbmRleCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZWNvcmRzSW5kZXgsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlY29yZHNJbmRleCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVjb3Jkc0luZGV4KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVjb3Jkc0luZGV4Ll9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKFJlY29yZHNJbmRleCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlY29yZHNJbmRleCwgW3tcbiAgICBrZXk6ICdyZW5kZXJSZWNvcmRzJyxcblxuXG4gICAgLy8gVGhlIHJlbmRlclJlY29yZHMoKSBmdW5jdGlvbiBpcyByZXNwb25zaWJsZVxuICAgIC8vIGZvciBnZW5lcmF0aW5nIHRoZSBtYWluIGNvbnRlbnQgb2YgdGhpcyBwYWdlLlxuICAgIC8vIEZvciBpbnN0YW5jZSwgdGhpcyBwYWdlIHJlY2VpdmVzIHRoZSBKU09OIHJlY29yZHNcbiAgICAvLyBmcm9tIGdldEluaXRpYWxQcm9wcygpIGFuZCByZXR1cm5zIHRoZSBIVE1MIHBhZ2VcbiAgICAvLyB0byB0aGUgcmVuZGVyKCkgZnVuY3Rpb24uXG5cbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVjb3JkcygpIHtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMucHJvcHMucmVjb3Jkcy5tYXAoZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgeyByb3V0ZTogJy9yZWNvcmRzLycgKyBhZGRyZXNzLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdWaWV3IFJlY29yZHMnXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBmbHVpZDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENhcmQuR3JvdXAgaXMgYW4gXCJTZW1hbnRpYy1VSSBjb21wb25lbnRzXCJcbiAgICAgIC8vIHRvIGRpc3BsYXkgYSBncm91cCBvZiBjYXJkLlxuICAgICAgLy8gUmVmZXIgLS0gaHR0cHM6Ly9zZW1hbnRpYy11aS5jb20vdmlld3MvY2FyZC5odG1sXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkdyb3VwLCB7IGl0ZW1zOiBpdGVtcywgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDM4XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBUaGUgcmVuZGVyKCkgaXMgcmVzcG9uc2libGUgZm9yIHJldHVybmluZyBjb21wbGV0ZVxuICAgIC8vIEhUTUwgcGFnZSBmb3IgdXNlciBWaWV3LlxuICAgIC8vIFRoaXMgSFRNTCBwYWdlIGNvbnRhaW5zXG4gICAgLy8gMS4gVGhlIGxheW91dCBvZiB0aGUgcGFnZS4gVGhlc2UgYXJlIGNvbW1vbiBjb21wb25lbnRzIGFuZCBzdGF5c1xuICAgIC8vIGludG8gY29tcG9uZW50cyBmb2xkZXIuXG4gICAgLy8gMi4gbWFpbiBjb250ZW50IG9mIHRoZSBwYWdlLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF5b3V0LFxuICAgICAgICB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA0OFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0OVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ09wZW4gcmVjb3JkcydcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgeyByb3V0ZTogJy9yZWNvcmRzL25ldycsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICAgICAgICAgICAgICBmbG9hdGVkOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdDcmVhdGUgUmVjb3JkcycsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2FkZCBjaXJjbGUnLFxuICAgICAgICAgICAgICAgIHByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1M1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIHRoaXMucmVuZGVyUmVjb3JkcygpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdnZXRJbml0aWFsUHJvcHMnLFxuXG5cbiAgICAvLyBUaGUgZ2V0SW5pdGlhbFByb3BzKCkgaW50ZXJhY3RzIHdpdGggdGhlIFNtYXJ0IENvbnRyYWN0XG4gICAgLy8gZmV0Y2ggdGhlIHJlY29yZHMgaW4gSlNPTi5cbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICB2YXIgcmVjb3JkcztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkUmVjb3JkcygpLmNhbGwoKTtcblxuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVjb3JkcyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgeyByZWNvcmRzOiByZWNvcmRzIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldEluaXRpYWxQcm9wcztcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBSZWNvcmRzSW5kZXg7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZHNJbmRleDsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVjb3Jkc0luZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJSZWNvcmRzIiwiaXRlbXMiLCJwcm9wcyIsInJlY29yZHMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVFbGVtZW50Iiwicm91dGUiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImZsdWlkIiwiR3JvdXAiLCJyZW5kZXIiLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5IiwiX3JlZiIsIm1hcmsiLCJfY2FsbGVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFJlY29yZHMiLCJjYWxsIiwic2VudCIsImFicnVwdCIsInN0b3AiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFMQSxJQUFJQSxlQUFlLHFEQUFuQjs7O0FBT0EsSUFBSUMsZUFBZSxVQUFVQyxVQUFWLEVBQXNCO0FBQ3ZDLDBCQUFVRCxZQUFWLEVBQXdCQyxVQUF4Qjs7QUFFQSxXQUFTRCxZQUFULEdBQXdCO0FBQ3RCLGtDQUFnQixJQUFoQixFQUFzQkEsWUFBdEI7O0FBRUEsV0FBTyx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0EsYUFBYUUsU0FBYixJQUEwQiw4QkFBdUJGLFlBQXZCLENBQTNCLEVBQWlFRyxLQUFqRSxDQUF1RSxJQUF2RSxFQUE2RUMsU0FBN0UsQ0FBakMsQ0FBUDtBQUNEOztBQUVELDZCQUFhSixZQUFiLEVBQTJCLENBQUM7QUFDMUJL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