import NavBar from "../custom-components/NavBar";
import Notification from "../custom-components/Notification";
import { Authenticator, ScrollView } from "@aws-amplify/ui-react";

import awsconfig from "./../aws-exports";
import { Amplify } from "aws-amplify";
import { useState } from "react";
export const API_BASE_URL =
  "https://iylmn8w1ye.execute-api.us-east-1.amazonaws.com/staging";

Amplify.configure(awsconfig);

export default function Notifications(props) {
  const [notifications, setNotifications] = useState([]);

  fetch(`${API_BASE_URL}`)
    .then((response) =>
      //handle response
      response.json()
    )
    .then((data) => {
      //handle data
      setNotifications(data.body);
      console.log(data);
    })
    .catch((error) => {
      //handle error
      console.log("Error loading notifications");
    });

  return (
    <Authenticator>
      {({ user }) => (
        <>
          <NavBar />
          <ScrollView>
            <div class="body">
              {notifications.map((notification) => {
                return (
                  <div class="body">
                    <Notification
                      token_id={notification.id}
                      blockchain={notification.blockchain}
                      file={notification.file}
                      contract_address={notification.contract_address}
                      img_link={notification.image_url}
                      marketplace_name={notification.marketplace}
                      original_img={notification.file}
                      user={notification.user}
                    />
                  </div>
                );
              })}
            </div>
          </ScrollView>
        </>
      )}
    </Authenticator>
  );
}
