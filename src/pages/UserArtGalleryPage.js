import React from "react";
import {Authenticator } from '@aws-amplify/ui-react';
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";

import NavBar from "../custom-components/NavBar";


function ArtGallery() {

    
      return (
        <Authenticator>
          {({user }) => (
            <><NavBar/>
            
              <h1 style = {{ 'text-align': 'center' }} > {user.username}'s Gallery</h1>
              <AmplifyS3Album level="public" path={user.username.concat("/")}/></>

            
        
          )}
          
        </Authenticator>
      );
    }
export default ArtGallery;