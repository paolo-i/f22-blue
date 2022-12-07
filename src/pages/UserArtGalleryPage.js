import React from "react";
import {Authenticator } from '@aws-amplify/ui-react';
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import Popup from 'reactjs-popup';
import NavBar from "../custom-components/NavBar";
import { useState } from 'react'
import UseWriteArtDynamoDB from '../custom-components/UseWriteArtDynamoDB';

function ArtGallery() {

  const {createArt, status} = UseWriteArtDynamoDB()
  const [username, setUsername] = useState('')
  const [fileName, setfileName] = useState('')
  const [whitelist, setWhitelist] = useState(true)
  const [tokenId, setTokenId] = useState('')
  
  const handleSubmit = (event) => {
      event.preventDefault();
      createArt({ username, fileName, whitelist, tokenId })
    };
      return (
        <Authenticator>
          {({user }) => (
            
            <><NavBar/>
           
            <div>
              
              <h1 style = {{ 'text-align': 'center' }} > {user.username}'s Gallery</h1>
              <Popup trigger = {<AmplifyS3Album level="protected"/>}
              position = "right center">
              

            <div className="container my-5">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="mt-4">Add a new Art entry:</h1>
                    <hr/>
                    {status.success ? <div className="alert alert-success" role="alert">Your item has been saved!</div> : ''}
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder={user.username}
                                   value={username}
                                   onChange={event => setUsername(event.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type a fileName..."
                                   value={fileName}
                                   onChange={event => setfileName(event.target.value)}
                            />
                        </div>
                        <br/>
                        
                        <div className="input-group">
                        <label>Whitelist: </label>
                                  <select value={whitelist} onChange={event=> setWhitelist(event.target.value)}>
                                  <option value="true">Yes I would like to whitelist</option>
                                  <option value="false">No I would not like to whitelist</option>
                                  
                                </select>
                          
                  
                        </div>
                        <br/>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type a TokenId..."
                                   value={tokenId}
                                   onChange={event => setTokenId(event.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="text-center">
                            <button className="btn btn-secondary" type="submit">Create an Art Entry</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Popup>
            </div></>
        
          )}
          
        </Authenticator>
      );
}
export default ArtGallery;