import NavBar from "../custom-components/NavBar";
import Notification from "../custom-components/Notification";
import {Authenticator} from '@aws-amplify/ui-react';
import Amplify from "aws-amplify";

export default function Notifications(props) {
  return (
    <Authenticator>
      {({user }) => (
        <>
            <NavBar />
              <div class="body">
                <div class="body">
                  <Notification />
                </div>
                <div class="body">
                  <Notification />
                </div>
                <div class="body">
                  <Notification />
                </div>
              </div>
        </>
      )}
      </Authenticator>
  );
}