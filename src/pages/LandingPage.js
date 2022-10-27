import React from "react";
import "./LandingPage.css";
import NavBar from "../custom-components/NavBar";
import { View } from "@aws-amplify/ui-react";

export default function Home(props) {
  return (
    <>
        <NavBar />
        <View padding="1rem 2rem">
          <h1>Welcome back, John Doe</h1>
          <h2>You have no new notifications</h2>
        </View>

        <View backgroundColor="#263A58" padding="1rem 2rem">
          <h1>Art Protection Guidelines</h1>
          <p>Protecting art begins with you. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.</p>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </View>
    </>
  );
}
