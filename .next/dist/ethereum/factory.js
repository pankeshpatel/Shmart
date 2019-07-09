'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _RecordFactory = require('./build/RecordFactory.json');

var _RecordFactory2 = _interopRequireDefault(_RecordFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file tells the web3 that a deployed copy
// of the 'recordFactory' exists.

// Please note that we have already deployed our contracts
// through deploy.js file.

// the deployed contract exists at address
// 0x38CbC2161a59EB25c08AD35B66eADB2A4718F3C5

var instance = new _web2.default.eth.Contract(JSON.parse(_RecordFactory2.default.interface), '0x38CbC2161a59EB25c08AD35B66eADB2A4718F3C5');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJSZWNvcmRGYWN0b3J5IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU0EsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBbUI7Ozs7OztBQVYxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFLQSxJQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzVCLEtBQUEsQUFBSyxNQUFNLHdCQURJLEFBQ2YsQUFBeUIsWUFEM0IsQUFBaUIsQUFFZixBQUdGOztrQkFBQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiRDovcmVhY3Qva2lja3N0YXJ0L1NobWFydCJ9