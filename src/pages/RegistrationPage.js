import React from 'react';
//import './signupdesign.css';
import Amplify from 'aws-amplify';
import Home from "./LandingPage"
import awsconfig from '../aws-exports';
import NavBar from "../custom-components/NavBar";
import '@aws-amplify/ui-react/styles.css';
//import SignUpForm from '../components/SignUpForm'
import { Authenticator } from '@aws-amplify/ui-react';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
    
Amplify.configure(awsconfig);
    

const RegistrationPage = () => {
  return (
    <>
    
    <Authenticator>
    {({ signOut, user }) => (
      <div className="App">
        <Home />
        <button onClick={signOut}>Sign out</button>
      </div>
      )}
    </Authenticator>
  </>
  );
};
export default withAuthenticator(RegistrationPage);
  
