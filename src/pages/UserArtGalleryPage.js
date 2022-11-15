
import React from "react";
import {Authenticator } from '@aws-amplify/ui-react';
import Amplify from "aws-amplify";
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import NavBar from "../custom-components/NavBar";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);
const ArtGallery= () => {
    return (

      
      <Authenticator>
      {({user }) => (
      <><NavBar /><div>
              <h1 style={{ 'text-align': 'center' }}>{user.username}'s Gallery</h1>
              <AmplifyS3Album />

            </div></>
      )}
    </Authenticator>
    
        )
    }

  export default ArtGallery