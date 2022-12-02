import NavBar from "../custom-components/NavBar";
import Notification from "../custom-components/Notification";
import {Authenticator} from '@aws-amplify/ui-react';

import awsconfig from './../aws-exports';
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { listNotifications } from '../graphql/queries';

Amplify.configure(awsconfig);

export default function Notifications(props) {
  /*
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, [])

  const fetchNotifications = async () => {
    try {
      const notificationInfo = await API.graphql(graphqlOperation(listNotifications));
      const notificationsList = notificationInfo.data.listNotifications;
      console.log('notifications', notificationsList);
      setNotifications(notificationsList);
    }
    catch (error) {
      console.log('error on fetching notifications', {notifications}, error);
    }
  }
  */

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