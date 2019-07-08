// This would deploy your contract on Rinkby Network.
// please note that it is recommanded that
// First, test your contract on the local network -- ganache
// Then,  deploy it on Test Network.

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledRecordFactory = require('./build/RecordFactory.json');


const provider = new HDWalletProvider(
	'shuffle pitch wink spend achieve horror position cube flame wide dinosaur jelly',
	'https://rinkeby.infura.io/v3/4b7f2d5d6a4a4506b323256b8603abf0'
);

const web3 = new Web3(provider);
let accounts;

const deploy = async () => {

	// Get accounts from your Rinkby network.
	accounts = await web3.eth.getAccounts();


	console.log('Attempting to deploy from account', accounts[0]);

	// Deploy your contract on Rinkby Network.
	const result = await new web3.eth.Contract(JSON.parse(compiledRecordFactory.interface))
		.deploy({ data: '0x' + compiledRecordFactory.bytecode})
		.send({gas: '3000000', from: accounts[0]});

	console.log('Contract is deployed to' , result.options.address);
};

deploy();
