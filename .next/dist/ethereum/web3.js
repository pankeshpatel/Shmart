'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

// our server will send JavaScript code to the browser to execute.
// If this code finds that metamask plugin is installed, then it will
// use windows variable. Otherwise, it will make an HTTP request to Rinkby.

// check that we are in the browser and check that metamask is running
// This file configure web3 with a provider from metamask.

// The overall motivation of this file is that
// the users (who have been accessing our website)
// do not need to install metamask browser plugin
// in order to access our website.

// Since our server is accessing the metamask
// plugin, the users do not need to install the plugin


if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/4b7f2d5d6a4a4506b323256b8603abf0');
  web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVlBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBYUEsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFDdkU7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFIRCxPQUdPLEFBQ0w7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUNmLEFBRUY7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjtBQUNEO2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZWFjdC9raWNrc3RhcnQvU2htYXJ0In0=