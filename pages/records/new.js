import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class RecordNew extends Component {

  // This is the initial value. 
  // This is useful. Because onChangeHandler, we will 
  // call an event that capture the value, entered by the user.
  state = {
    name: '',
    id: '',
    role: '',
    org_type: '',
    provider: '',
    wallet_balance:'',
    wallet_ID: '',
    shmart_record: '',
    errorMessage: '',
    loading: false
  };

  // This function will submit the user registeration
  // information to Blockchain network. 

  onSubmit = async event => {

    event.preventDefault();

    this.setState({ 
      loading: true, 
      errorMessage: '' 
    });

    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createRecord(this.state.name, this.state.id, this.state.role,
                    this.state.org_type, this.state.provider, this.state.wallet_balance,
                    this.state.wallet_ID, this.state.shmart_record)
        .send({
          from: accounts[0]
        });

      // This will redirect user to the home page, once the new 
      // instance of contract is published.
      Router.pushRoute('/');

    } catch (err) {

      this.setState({ 
        errorMessage: err.message 
      });

    }
      this.setState({ loading: false });
  };


  render() {
    return (
      <Layout>

        <h3>Create Record</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        {/* <Form onSubmit={this.onSubmit} > */}

          {/* Name - String  */}
          <Form.Field>
            <label>Name</label>
            <Input
              placeholder='First Name and Last Name'
              value={this.state.name}
              onChange={
                  event => this.setState({ 
                      name: event.target.value 
                    })
                }
            />
          </Form.Field>

          {/* ID - String */}
          <Form.Field>
            <label>ID</label>
            <Input
              placeholder='Government ID / Verified ID Number'
              value={this.state.id}
              onChange={
                  event => this.setState({ 
                      id: event.target.value 
                    })
                }
            />
          </Form.Field>

          {/* Role - String */}
          <Form.Field>
            <label>Role</label>
            <Input
              placeholder='Role'
              value={this.state.role}
              onChange={
                  event => this.setState({ 
                      role: event.target.value 
                    })
                }
            />
          </Form.Field>

          {/* Organization Type - String */}
          <Form.Field>
            <label>Organization Type</label>
            <Input
              placeholder='Your Organization Type'
              value={this.state.org_type}
              onChange={
                  event => this.setState({ 
                    org_type: event.target.value 
                    })
                }
            />
          </Form.Field>

          {/* Provider -- String */}
          <Form.Field>
            <label>Provider</label>
            <Input
              placeholder='Provider Information'
              value={this.state.provider}
              onChange={
                  event => this.setState({ 
                    provider: event.target.value 
                    })
                }
            />
          </Form.Field>


          {/* Wallet balance -- String */}
          <Form.Field>
            <label>Wallet Balance</label>
            <Input
              placeholder='Wallet Balance (in USD)'
              value={this.state.wallet_balance}
              onChange={
                  event => this.setState({ 
                    wallet_balance: event.target.value 
                    })
                }
            />
          </Form.Field>


          {/* Wallet ID  -- String */}
          <Form.Field>
            <label>Wallet ID</label>
            <Input
              placeholder='Wallet ID'
              value={this.state.wallet_ID}
              onChange={
                  event => this.setState({ 
                    wallet_ID: event.target.value 
                    })
                }
            />
          </Form.Field>

            {/* SMART Record  -- String */}
          <Form.TextArea 
              label='SHMART Record' 
              placeholder='Enter SHMART Record Link' 
              value={this.state.shmart_record}
              onChange={
                  event => this.setState({ 
                    shmart_record: event.target.value 
                    })
                }
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
