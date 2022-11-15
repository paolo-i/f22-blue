import NavBar from "../custom-components/NavBar";
import Amplify from "aws-amplify";
import {Authenticator} from '@aws-amplify/ui-react';

export default function Confirmation(props) {
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