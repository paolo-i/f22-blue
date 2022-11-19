
import React from "react";
import {Authenticator } from '@aws-amplify/ui-react';
import Amplify from "aws-amplify";
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import Popup from 'reactjs-popup';
import NavBar from "../custom-components/NavBar";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);
const ArtGallery= () => {
    return (

      
      <Authenticator>
      {({user }) => (
      <><NavBar />
      <div>
      <h1 style={{ 'text-align': 'center' }}>{user.username}'s Gallery</h1>
    <Popup trigger={<AmplifyS3Album level="private"/>} 
     position="right center">
      <div>Would You Like to Whitelist this Image?</div>
      <button>Whitelist</button>
    </Popup>
  </div></>
      )}
    </Authenticator>
    
        )
    }

  export default ArtGallery