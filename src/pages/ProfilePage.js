import React, { Component } from 'react';
import { Grid, Header, Form, Button, Message, Input, Segment, Select } from 'semantic-ui-react';
import NavBar from '../custom-components/NavBar'
import { Auth } from 'aws-amplify'; 
import {Authenticator} from 'aws-amplify';
import Amplify from 'aws-amplify';

import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class profile extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            authState: this.props.authState,
            email:'',
            first_name:'',
            last_name:'',
            birthdate:'',
            gender:'',
            phone_number:'',
            address:'',
        }
    }
    
    componentDidMount() {
      this.findUser();
    }

    findUser(){
      Auth.currentAuthenticatedUser({bypassCache: true})
      .then(user => {
        this.setState({
            authData: user,
            authState: 'signedIn',
            
            
            email:user.attributes.email ? user.attributes.email : '',
            first_name: user.attributes.given_name ? user.attributes.given_name : '',
            last_name: user.attributes.family_name ? user.attributes.family_name : '',
            birthdate: user.attributes.birthdate ? user.attributes.birthdate : '',
            gender: user.attributes.gender ? user.attributes.gender : '',
            phone_number: user.attributes.phone_number ? user.attributes.phone_number : '',
            address: user.attributes.address ? user.attributes.address : '',
           
            
            stateFromStorage: true
        });

          console.log(this.state.authData.nickname);
      }).catch(e => {
        this.setState({authState: 'signIn'});
      });
    }    
    
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }
    
    handleSubmit = () => {
        Auth.updateUserAttributes(this.state.authData,{
            
            'email':this.state.email,
            'first_name':this.state.given_name,
            'last_name':this.state.family_name,
            'birthdate':this.state.birthdate,
            'gender':this.state.gender,
            'phone_number':this.state.phone_number,
            'address':this.state.address,
            
        }).catch(e => { 
            console.log('Error updating user: '); 
            console.log(e); 
        });
    }

    render(){
        
        let loading = true;
        if(this.state.authData) { loading = false; } 
        
        const {username,email,first_name,last_name,birthdate,gender,phone_number,address} = this.state;
        
        return(
            <Authenticator>
            {({user }) => (
            <><NavBar /><Segment color="blue">
                <Grid padded>
                    <Grid.Column>
                        <Header as="h1">Account Information</Header>
                        <p>Please update your details.</p>

                        <Form onSubmit={this.handleSubmit} loading={loading}>

                            <Form.Group>
                            <Form.Input label='email' value={email} width={10} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input name='first_name' value={first_name} label='First name' placeholder='First Name' width={6} onChange={this.handleChange} error={false} />
                                
                                <Form.Input name='last_name' value={last_name} label='Last Name' placeholder='Last Name' width={6} onChange={this.handleChange} error={false} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input name='birthdate' value={birthdate} label='Birthday' placeholder='02/02/2002' width={4} onChange={this.handleChange} error={false} />
                                <Form.Select name='gender' value={gender} label='Gender' placeholder='Gender' options={options} width={6} onChange={this.handleChange} error={false} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input name='phone_number' value={phone_number} label='Mobile number' placeholder='+61 0400 000 000' width={6} onChange={this.handleChange} error={false} />
                               
                            </Form.Group>

                            <Form.Group>
                                <Form.Input name='address' value={address} label='Address' placeholder='2/77 New Street, Newport 3015 Melbourne, Victoria, Australia ' width={16} onChange={this.handleChange} error={false} />
                            </Form.Group>

                            <Message
                                success
                                header='Account Details Updated'
                                content="Your details have been updated." />

                            <Message
                                error
                                header='Somthing Went Wrong'
                                content='One of the fields has error. Please look over the forms to see where the error is. ' />

                            <Button type='submit'>Submit</Button>
                        </Form>

                    </Grid.Column>
                </Grid>
            </Segment></>
            )}
            </Authenticator>

        );
    }
    
}

export default profile;