import React, { useState } from "react";
import "./LandingPage.css";
import {Authenticator, Link } from '@aws-amplify/ui-react';
import awsconfig from "../aws-exports";
import NavBar from "../custom-components/NavBar";
import { View } from "@aws-amplify/ui-react";

export const API_BASE_URL =
  "https://iylmn8w1ye.execute-api.us-east-1.amazonaws.com/staging";

export default function Home( props){
  const [numNotifications, setNumNotifications] = useState();

  fetch(`${API_BASE_URL}`)
    .then((response) =>
      //handle response
      response.json()
    )
    .then((data) => {
      //handle data
      setNumNotifications(data.body.length);
      console.log(data);
    })
    .catch((error) => {
      //handle error
      console.log("Error loading notifications");
    });

  return (
    <>
   
     <Authenticator>
          {({ signOut, user }) => (
    
        <><NavBar />
        
        <View padding="1rem 2rem">
            <h1>Welcome back, {user.username}</h1>
            <h2>You have <Link href="/notifications" color="#8BC7FF">new notifications</Link></h2>
          </View><View backgroundColor="#263A58" padding="1rem 2rem">
              <h1>Art Protection Guidelines</h1>
              <p>Protecting art begins with you.</p>
              <p>With art theft on the rise, especially in regards to NFT's
                 it is important that we all work together to protect our art.
                 If each individual followed these simple steps we can nip this
                 problem in the bud</p>
              <ul>
                <li>Step 1: Keep the resolution low!
                      We understand the want to upload the best
                      image possible, but higher resolution images
                      are more tempting to steal. We recommend an
                      image be no more than 96 dots per inch.
                </li>
                <li>Step 2: Keep it Small!
                      By uploading a smaller version of your art
                      it will be less tempting to steal and sell.
                      How can they sell an NFT if it is too small, 
                      especially if they try to enlarge it and it
                      turns out grainy.
                </li>
                <li>Step 3: Watermark!
                      Add a layer to the artwork that contains your
                      username and your socials to help prevent people
                      from trying to pass it off as their own. Also if it
                      does get stolen, you may be notified or people may be
                      redirected to you.
                </li>
                <li>Final Step: Upload to Art Guardian!
                      Art Guardian cannot prevent the theft from occurring,
                      but we can help stop its proliferation and take down
                      stolen are. That cannot be done without you uploading
                      to Art Guardian. Make sure to upload unmodified,
                      original resolution

                </li>
                <h2>Having Trouble? Click <a href={require("../custom-components/Art_Guardian_User_Manual.pdf")} download="Art_Guardian_User_Manual.pdf">Here</a> to Find Our Manual!</h2>
              </ul>
            </View>
            </>
          )}
           </Authenticator>
    </>
  );
}

