// This file configure web3 with a provider from metamask.

import Web3 from 'web3';

let web3;

// check that we are in the browser and check that metamask is running
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/4b7f2d5d6a4a4506b323256b8603abf0'
  );
  web3 = new Web3(provider);
}
export default web3;
