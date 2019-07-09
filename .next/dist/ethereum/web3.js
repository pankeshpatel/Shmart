'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

// check that we are in the browser and check that metamask is running
// This file configure web3 with a provider from metamask.

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/4b7f2d5d6a4a4506b323256b8603abf0');
  web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSjs7QUFFQTtBQU5BOztBQU9BLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RCxhQUFhLEFBQ3ZFO0FBQ0E7U0FBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUF2QixBQUFPLEFBQXFCLEFBQzdCO0FBSEQsT0FHTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDZixBQUVGO1NBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDakI7QUFDRDtrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRDovcmVhY3Qva2lja3N0YXJ0L1NobWFydCJ9