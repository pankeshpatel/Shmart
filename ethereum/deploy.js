const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');


const provider = new HDWalletProvider(
	'shuffle pitch wink spend achieve horror position cube flame wide dinosaur jelly',
	'https://rinkeby.infura.io/v3/4b7f2d5d6a4a4506b323256b8603abf0'
);

const web3 = new Web3(provider);
let accounts;

const deploy = async () => {
	accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: '0x' + compiledFactory.bytecode})
		.send({gas: '1000000', from: accounts[0]});

	console.log('Contract is deployed to' , result.options.address);
};

deploy();
