import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class RecordNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {

    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');

    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };


  render() {
    return (
      <Layout>

        <h3>Create Record</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

          {/* Name */}
          <Form.Field>
            <label>Name</label>
            <Input
              placeholder='First Name and Last Name'
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>

          {/* ID */}
          <Form.Field>
            <label>ID</label>
            <Input
              placeholder='Government ID / Verified ID Number'
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>

          {/* Role */}
          <Form.Field>
            <label>Role</label>
            <Input
              placeholder='Role'
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>

          {/* Organization Type */}
          <Form.Field>
            <label>Organization Type</label>
            <Input
              placeholder='Your Organization Type'
               value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>

          {/* Provider */}
          <Form.Field>
            <label>Provider</label>
            <Input
              placeholder='Provider Information'
s              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>


          {/* Wallet balance */}
          <Form.Field>
            <label>Wallet Balance</label>
            <Input
              placeholder='Wallet Balance (in USD)'
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>


          {/* Wallet ID */}
          <Form.Field>
            <label>Wallet ID</label>
            <Input
              placeholder='Wallet ID'
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>

          <Form.TextArea 
              label='SHMART Record' 
              placeholder='Enter SHMART Record Link' 
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
          />

          <Message 
              error header="Oops!" 
              content={this.state.errorMessage} 
           />

          <Button 
              loading={this.state.loading} primary>
            Register Record!
         </Button>

        </Form>
      </Layout>
    );
  }
}

export default RecordNew;
