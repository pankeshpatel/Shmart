// This file tells the web3 that a deployed copy
// of the 'recordFactory' exists.

// Please note that we have already deployed our contracts
// through deploy.js file.

// the deployed contract exists at address
// 0x38CbC2161a59EB25c08AD35B66eADB2A4718F3C5

import web3 from './web3';
import RecordFactory from './build/RecordFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(RecordFactory.interface),
  '0x38CbC2161a59EB25c08AD35B66eADB2A4718F3C5'
);

export default instance;
