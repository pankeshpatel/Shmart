// This file tells the web3 that a deployed copy
// of the 'recordFactory' exists.

// Please note that we have already deployed our contracts
// through deploy.js file.

// the deployed contract exists at address
// 0xC2124e6807A97A80076922834d8c079D11bD7331

import web3 from './web3';
import RecordFactory from './build/RecordFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(RecordFactory.interface),
  '0xC2124e6807A97A80076922834d8c079D11bD7331'
);

export default instance;
