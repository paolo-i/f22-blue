import NavBar from "../custom-components/NavBar";
import {Authenticator} from '@aws-amplify/ui-react';
import Amplify from "aws-amplify";

export default function Settings(props) {
  return (
    <Authenticator>
      {({user }) => (
    <>
        <NavBar />
        <div>
              <h1 style={{ 'text-align': 'center' }}>{user.username}'s Settings</h1>
              

            </div>
    </>
      )}
      </Authenticator>
  );
}