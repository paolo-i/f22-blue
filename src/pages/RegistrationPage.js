import React from 'react';
//import './signupdesign.css';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';
//import SignUpForm from '../components/SignUpForm'
import { Authenticator } from '@aws-amplify/ui-react';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
    
Amplify.configure(awsconfig);
    

const RegistrationPage = () => {
  return (
   
    <Authenticator>
    {({ signOut, user }) => (
      <div className="App">
        <p>
          Hey {user.username}, welcome to my channel, with auth!
        </p>
        <button onClick={signOut}>Sign out</button>
      </div>
      )}
    </Authenticator>
  
  );
};
export default withAuthenticator(RegistrationPage);
  
