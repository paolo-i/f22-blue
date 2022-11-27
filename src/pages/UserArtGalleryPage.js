
import React, {Component} from "react";
import {Authenticator } from '@aws-amplify/ui-react';
import Amplify from "aws-amplify";
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import Popup from 'reactjs-popup';
import {Form} from 'semantic-ui-react';
import axios from 'axios';
import NavBar from "../custom-components/NavBar";
import {API} from "aws-amplify"
import awsExports from "../aws-exports";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default class ArtGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      filename: '',
      tokenID: '',
      Whitelist:true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { username, filename, tokenID, Whitelist } = this.state;
    await axios.post(
      'https://4937s3ol69.execute-api.us-east-1.amazonaws.com/staging',
      { key1: `${username}, ${filename},${Whitelist},${tokenID}` }
    );
  }
  render() {
    return (
      <Authenticator>
      {({user }) => (
      <><NavBar />
      <div>
      <h1 style={{ 'text-align': 'center' }}>{user.username}'s Gallery</h1>
    <Popup trigger={<AmplifyS3Album level="private"/>} 
     position="right center">
      <div>
        <h3>Artwork Information</h3>
        <form onSubmit={this.handleSubmit}>
          <label>username:</label>
          
          <input
            type="text"
            placeholder={user.username}
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          

          <label>File Name:</label>
          
          <input
            type="text"
            name="filename"
            onChange={this.handleChange}
            value={this.state.filename}
          />
          

          <label> TokenID (Leave as is if not whitelisting):</label>
          
          <input
            type="text"
            placeholder="N/A"
            name="tokenID"
            onChange={this.handleChange}
            value={this.state.tokenid}
          />
          

          <button type="submit">Send</button>
        </form>
      
      </div>
    </Popup>
  </div></>
      )}
    </Authenticator>
    
        );
    }
}
