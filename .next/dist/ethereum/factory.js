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
// 0x85C019F7A84439e916D962d22e8915c3815CA5CD

var instance = new _web2.default.eth.Contract(JSON.parse(_RecordFactory2.default.interface), '0x85C019F7A84439e916D962d22e8915c3815CA5CD');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU0E7Ozs7QUFDQTs7Ozs7O0FBVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBS0EsSUFBSUEsV0FBVyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLHdCQUFjQyxTQUF6QixDQUF0QixFQUEyRCw0Q0FBM0QsQ0FBZjs7a0JBRWVMLFEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSB0ZWxscyB0aGUgd2ViMyB0aGF0IGEgZGVwbG95ZWQgY29weVxuLy8gb2YgdGhlICdyZWNvcmRGYWN0b3J5JyBleGlzdHMuXG5cbi8vIFBsZWFzZSBub3RlIHRoYXQgd2UgaGF2ZSBhbHJlYWR5IGRlcGxveWVkIG91ciBjb250cmFjdHNcbi8vIHRocm91Z2ggZGVwbG95LmpzIGZpbGUuXG5cbi8vIHRoZSBkZXBsb3llZCBjb250cmFjdCBleGlzdHMgYXQgYWRkcmVzc1xuLy8gMHg4NUMwMTlGN0E4NDQzOWU5MTZEOTYyZDIyZTg5MTVjMzgxNUNBNUNEXG5cbmltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XG5pbXBvcnQgUmVjb3JkRmFjdG9yeSBmcm9tICcuL2J1aWxkL1JlY29yZEZhY3RvcnkuanNvbic7XG5cbnZhciBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChKU09OLnBhcnNlKFJlY29yZEZhY3RvcnkuaW50ZXJmYWNlKSwgJzB4ODVDMDE5RjdBODQ0MzllOTE2RDk2MmQyMmU4OTE1YzM4MTVDQTVDRCcpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU0E7Ozs7QUFDQTs7Ozs7O0FBVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBS0EsSUFBSUEsV0FBVyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLHdCQUFjQyxTQUF6QixDQUF0QixFQUEyRCw0Q0FBM0QsQ0FBZjs7a0JBRWVMLFEiLCJmaWxlIjoidW5rbm93biJ9