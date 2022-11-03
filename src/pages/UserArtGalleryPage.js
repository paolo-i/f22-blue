
import React from "react";
import Amplify from "aws-amplify";
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import NavBar from "../custom-components/NavBar";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);
const ArtGallery= () => {
    return (

      <>
      <NavBar/>
      <div>
      <h1 style={{'text-align':'center'}}>My Gallery</h1>        
      <AmplifyS3Album />
      
    </div>
    </>
        )
    }

  export default ArtGallery