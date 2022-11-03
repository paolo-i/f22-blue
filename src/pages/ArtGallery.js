import logo from './logo.svg';
import './App.css';
import React from "react";
import Amplify from "aws-amplify";
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import NavBar from "./NavBar";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
const ArtGallery= () => {
    return (

      <>
      <div>
      <h1 style={{'text-align':'center'}}>My Gallery</h1>        
      <AmplifyS3Album />
    </div>
    </>
        )
    }

  export default ArtGallery