import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6963a1362279B30316D83fA3B6773a72D0c26D3c'
);

export default instance;
