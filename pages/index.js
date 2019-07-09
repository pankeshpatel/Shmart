import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class RecordsIndex extends Component {

  // The getInitialProps() interacts with the Smart Contract
  // fetch the records in JSON.
  static async getInitialProps() {
    const records = await factory.methods.getDeployedRecords().call();
    return { records: records };
  }

// The renderRecords() function is responsible
// for generating the main content of this page.
// For instance, this page receives the JSON records
// from getInitialProps() and returns the HTML page
// to the render() function.

  renderRecords() {
    const items = this.props.records.map(address => {
      return {
        header: address ,
        description: (
          <Link route={`/records/${address}`}>
            <a>View Records</a>
          </Link>
        ),
         fluid: true
      };
    });

// Card.Group is an "Semantic-UI components"
// to display a group of card.
// Refer -- https://semantic-ui.com/views/card.html
    return <Card.Group items={items} />;
  }
// The render() is responsible for returning complete
// HTML page for user View.
// This HTML page contains
// 1. The layout of the page. These are common components and stays
// into components folder.
// 2. main content of the page.
  render(){
    return (
      <Layout>
        <div>
          <h3>Open records</h3>
          <Link route="/records/new">
           <a>
             <Button
               floated="right"
               content="Create Records"
               icon="add circle"
               primary
             />
           </a>
         </Link>
            {this.renderRecords()}
          </div>
       </Layout>
     );
  }
}

export default RecordsIndex;
