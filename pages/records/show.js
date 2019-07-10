import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';
import Registeration from '../../ethereum/registeration';
//import ContributeForm from '../../components/ContributeForm';


class RecordShow extends Component {
  static async getInitialProps(props) {
    const record = Registeration(props.query.address);
    const summary = await record.methods.getSummary().call();
    
    return {
      address: props.query.address,
      name:summary[0], 
      id: summary[1], 
      role: summary[2], 
      orgType: summary[3], 
      provider: summary[4], 
      walletBalance: summary[5], 
      walletID: summary[6], 
      smartRecord: summary[7]       
    };
  }

  renderRecords() {

    const {
      address,
      name, 
      id, 
      role, 
      orgType, 
      provider, 
      walletBalance, 
      walletID, 
      smartRecord   
    } = this.props;

    const items = [
      {
        header: address,
        meta: 'Address of Record in Blockchain',
        description:
          'This is an address of Record in Blockchain',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: name,
        meta: 'Name of a person',
        description:
          'This is a name of register, who record his/her information into portal',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: id,
        meta: 'id of a person',
        description:
          'This is an id of a person',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: role,
        meta: 'role of a person',
        description:
          'This is an role of a person',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: orgType,
        meta: 'Organization Type',
        description:
          'It provides information about Organization Type',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: provider,
        meta: 'provider',
        description:
          'It provides information about provider',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: orgType,
        meta: 'Organization Type',
        description:
          'It provides information about Organization Type',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: walletBalance,
        meta: 'Wallet Balance',
        description:
          'It is wallet balance.',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: smartRecord,
        meta: 'SHMART record',
        description:
          'IoT Device data',
        style: { overflowWrap: 'break-word' }
      }     
    ];

    return <Card.Group items={items} />;
  }

    // render (){
    //   return (
    //     <h3>Record Show</h3>
    //   );
    // }

  render() {
     return (
       <Layout>
         <h3>Record Show</h3>
         <Grid>
           <Grid.Row>
             <Grid.Column width={10}>{this.renderRecords()}</Grid.Column>
             <Grid.Column width={6}>
               {/* <ContributeForm address={this.props.address} /> */}
             </Grid.Column>
           </Grid.Row>

           {/* <Grid.Row>
             <Grid.Column>
               <Link route={`/campaigns/${this.props.address}/requests`}>
                 <a>
                   <Button primary>View Requests</Button>
                 </a>
               </Link>
             </Grid.Column>
           </Grid.Row> */}
         </Grid>
       </Layout>
     );
   }


}


export default RecordShow;
