
import React from "react";
import {Authenticator } from '@aws-amplify/ui-react';
import {Container, Button, Form} from 'react-bootstrap';
import Amplify from "aws-amplify";
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import Popup from 'reactjs-popup';
import NavBar from "../custom-components/NavBar";
import {API} from "aws-amplify"
import awsExports from "../aws-exports";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);
async function Submit() {
  const data = {
    body: {
      fileName: formState.fileName,
      nftAddress: formState.nftAddress,
      tokenID: formState.tokenID,
      Whitelist: formState.false
    }
  };
console.log(data);
const apiData = await API.post('nftapi', '/item', data);
console.log({ apiData });
alert('Art Information updated/submitted');
}

const formState = { fileName: '', nftAddress: '', tokenID: '', Whitelist: false };

function updateFormState(key, value) {
formState[key] = value;

}
const ArtGallery= () => {
    return (
      <Authenticator>
      {({user }) => (
      <><NavBar />
      <div>
      <h1 style={{ 'text-align': 'center' }}>{user.username}'s Gallery</h1>
    <Popup trigger={<AmplifyS3Album level="private"/>} 
     position="right center">
      <div>
      <Container>
    <div>
      <h3>Artwork Information</h3>
      <br/>
        <Form>
          <Form.Group>
            <Form.Label>FileName</Form.Label>
            <Form.Control placeholder="File Name" onChange={e => updateFormState('fileName', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label> Have you minted an NFT using this work of art?</Form.Label>
            <Form.Select  onChange={e => updateFormState('Whitelist', e.target.value)}>
            <option value="true">Yes</option>
            <option value="false">No</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>NFT Address (Leave as is if not whitelisting)</Form.Label>
            <Form.Control placeholder="N/A" onChange={e => updateFormState('nftAddress', e.target.value)} />
          </Form.Group>
         

          <Form.Group>
            <Form.Label>TokenID (Leave as is if not whitelisting)</Form.Label>
            <Form.Control placeholder="N/A" onChange={e => updateFormState('tokenID', e.target.value)} />
          </Form.Group>
          <Button onClick={Submit}>Submit</Button>
        </Form>
      </div>
    </Container>
      </div>
      
    </Popup>
  </div></>
      )}
    </Authenticator>
    
        )
    }

  export default ArtGallery