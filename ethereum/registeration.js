import web3 from './web3';
import Registeration from './build/Registeration.json';

export default address => {
  return new web3.eth.Contract(
    JSON.parse(Registeration.interface), 
    address
    );
};
