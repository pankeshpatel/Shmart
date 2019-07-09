// This is a file for contract testing.
// The testing is done on local blockchain network (i.e., ganache).

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// We will do testing on Local blockchain network -- Ganache.
const web3 = new Web3(ganache.provider());

// The following imports compiled contracts
const compiledRecordFactory = require('../ethereum/build/RecordFactory.json');
const compiledRegisteration = require('../ethereum/build/registeration.json');


// Declare Variable here.
let accounts; // to fetch the account information
let factory; // to deploy a contract with necessary info. (e.g., interface defination, byte code, account and gas)
let recordAddress; // this is to stored returned addresses.
let registeration;
//
beforeEach(async () => {
  // Get accounts from local blockchain network.
  accounts = await web3.eth.getAccounts();

  // Deploy the compiled Contract on Ganache -- local network.
  // Deploying a compiled contract contains the following
  // 1. Providing interface defination information
  // 2. Providing bytecode of a contract
  // 3. Sending a transaction by providing account and gas information.
  factory = await new web3.eth.Contract(JSON.parse(compiledRecordFactory.interface))
  .deploy({ data: compiledRecordFactory.bytecode })
  .send({ from: accounts[1], gas: '3000000' });

  // Now access the interfaces of the depoyed contracts.
  // The first interface, we have been accessing is -- createRecord
  await factory.methods.createRecord("Pankesh",  "1", "A", "B", "C", 0,
              "0x14723a09acff6d2a60dcdf7aa4aff308fddc160c", "A,B,C").send({
                from: accounts[1],
                gas: '3000000'
  });

  // Access another method of the deployed contract.
  // The method is -- getDeployedRecords()
  [recordAddress] = await factory.methods.getDeployedRecords().call();

  // Deployed the compiled contract at Address.
  // In this case, we already have address of the contract.
  registeration = await new web3.eth.Contract(
    JSON.parse(compiledRegisteration.interface),
    recordAddress
  );

});

describe('Registeration', () => {
  // This is a test to check whether contract is deployed or not.
  it('deploys a factory and a registeration', () => {
    assert.ok(factory.options.address);
    assert.ok(registeration.options.address);
  });

  it('marks caller as the manager', async () => {
    const manager = await registeration.methods.manager().call();
    assert.equal(accounts[1], manager);
  });

});
