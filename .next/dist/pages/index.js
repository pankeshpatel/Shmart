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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIlJlY29yZHNJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJyZWNvcmRzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJSZWNvcmRzIiwibWV0aG9kcyIsImdldERlcGxveWVkUmVjb3JkcyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7OztTQVNOOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7b0NBRWtCLEFBQ2Q7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsSUFBSSxtQkFBVyxBQUM5Qzs7a0JBQU8sQUFDRyxBQUNSO3VDQUNFLEFBQUMsOEJBQUsscUJBQU4sQUFBeUI7d0JBQXpCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUpDLEFBR0gsQUFDRSxBQUdIO2lCQVBILEFBQU8sQUFPRyxBQUVYO0FBVFEsQUFDTDtBQUZKLEFBQWMsQUFZbEIsT0Faa0I7O0FBYWxCO0FBQ0E7QUFDSTsyQ0FBTyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBO0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs2QkFDVSxBQUNOOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGlDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0M7QUFERDt5QkFDQyxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPLEFBQ0w7aUJBSkY7O29CQUFBO3NCQUpMLEFBRUUsQUFDQyxBQUNFLEFBUUE7QUFSQTtBQUNFLGlCQVBYLEFBQ0UsQUFDRSxBQVlLLEFBQUssQUFJZjs7O1NBeEREOztBQUNBOzs7Ozs7Ozs7O3VCQUV3QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IscUJBQWhCLEFBQXFDLEE7O21CQUFyRDtBO2lEQUNDLEVBQUUsU0FBRixBQUFXLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOSyxBLEFBNkQzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9yZWFjdC9raWNrc3RhcnQvU2htYXJ0In0=