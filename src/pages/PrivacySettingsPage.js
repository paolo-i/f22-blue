import NavBar from "../custom-components/NavBar";
import Amplify from "aws-amplify";
import {Authenticator} from '@aws-amplify/ui-react';

export default function PrivacySettings(props) {
  return (
    <>
     <Authenticator>
      {({user }) => (
        <NavBar />
      )}
      </Authenticator>
    </>
  );
}