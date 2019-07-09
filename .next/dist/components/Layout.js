'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\react\\kickstart\\Shmart\\components\\Layout.js';
// this is a file for common components.

// The CSS CDN is put into head
// (<Head> .... </Head>) section

// props.children -- specifies the
// child of specific content of a HTML page.


exports.default = function (props) {
		return _react2.default.createElement(_semanticUiReact.Container, {
				__source: {
						fileName: _jsxFileName,
						lineNumber: 17
				}
		}, _react2.default.createElement(_head2.default, {
				__source: {
						fileName: _jsxFileName,
						lineNumber: 18
				}
		}, _react2.default.createElement('link', { rel: 'stylesheet',
				href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
				__source: {
						fileName: _jsxFileName,
						lineNumber: 19
				}
		})), _react2.default.createElement(_Header2.default, {
				__source: {
						fileName: _jsxFileName,
						lineNumber: 23
				}
		}), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkhlYWQiLCJDb250YWluZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTOzs7OztBQUxUOztBQU9BO0FBQ0E7O0FBRUE7QUFDQSxBQUdBOzs7a0JBQWUsaUJBQVMsQUFDdEI7eUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRjtBQURFO0FBQUEsR0FBQSxrQkFDRixBQUFDOztnQkFBRDtrQkFBQSxBQUNBO0FBREE7QUFBQSw2Q0FDTSxLQUFOLEFBQVUsQUFDTjtVQURKLEFBQ1M7O2dCQURUO2tCQUZFLEFBQ0YsQUFDQSxBQUlBO0FBSkE7dUJBSUEsQUFBQzs7Z0JBQUQ7a0JBTkUsQUFNRixBQUNDO0FBREQ7QUFBQSxZQVBBLEFBQ0UsQUFPSyxBQUdSO0FBWkQiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L3JlYWN0L2tpY2tzdGFydC9TaG1hcnQifQ==