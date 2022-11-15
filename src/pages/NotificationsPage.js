import NavBar from "../custom-components/NavBar";
import {Authenticator} from '@aws-amplify/ui-react';
import Amplify from "aws-amplify";

export default function Notifications(props) {
  return (
    <Authenticator>
      {({user }) => (
    <>
        <NavBar />
    </>
      )}
      </Authenticator>
  );
}