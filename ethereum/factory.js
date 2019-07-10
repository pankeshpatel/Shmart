// This file tells the web3 that a deployed copy
// of the 'recordFactory' exists.

// Please note that we have already deployed our contracts
// through deploy.js file.

// the deployed contract exists at address
// 0x85C019F7A84439e916D962d22e8915c3815CA5CD

import web3 from './web3';
import RecordFactory from './build/RecordFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(RecordFactory.interface),
  '0x85C019F7A84439e916D962d22e8915c3815CA5CD'
);

export default instance;
