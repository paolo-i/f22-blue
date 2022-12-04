import NavBar from "../custom-components/NavBar";
import Notification from "../custom-components/Notification";
import {Authenticator} from '@aws-amplify/ui-react';

import awsconfig from './../aws-exports';
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { listNotifications } from '../graphql/queries';

Amplify.configure(awsconfig);

export default function Notifications(props) {
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

  return (
    <Authenticator>
      {({user }) => (
        <>
            <NavBar />
              <div class="body">
                { notifications.map(notification =>{
                  return (
                      <Notification 
                        token_id={notification.id}
                        blockchain={notification.blockchain}
                        file={notification.file}
                        contract_address={notification.contract_address}
                        img_link={notification.image_url}
                        marketplace_name={notification.marketplace}
                        user={notification.user}
                        />
                  )
                })}

                <div class="body">
                      <Notification 
                        token_id="7100"
                        blockchain="ethereum"
                        file="cryptopunk7597.jpg"
                        contract_address="0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"
                        img_link="https://lh3.googleusercontent.com/SByujrVo6pJzt9dOsdX-OpyMyEX1sjPa_rcdHi-uQ0nBnbVgEve2iKeS-iFvffAPnlt_PtKDeiCdR6yG-quuVO0H2GzvuMnDKso-"
                        marketplace_name="OpenSea"
                        user="5af95c2c-828e-42ff-a8a3-48ab2b5c805e"
                        />
                    </div>
                
              </div>
        </>
      )}
      </Authenticator>
  );
}