import React, {useState, useRef} from 'react'
import NavBar from '../custom-components/NavBar'
import {Authenticator, Link } from '@aws-amplify/ui-react';
import Amplify from "aws-amplify";
import { ScrollView, Text, View, Button, Flex } from '@aws-amplify/ui-react'
import "./ESignaturePage.css"
import SignatureCanvas from 'react-signature-canvas'
import { useLocation } from 'react-router-dom';
import UserWriteDMCADynamoDB from '../custom-components/UseWriteDMCADynamodb'

export default function ESignaturePage() {
    let sigPad = useRef();
    const [canSubmit, setCanSubmit] = useState();
    const { state } = useLocation();

    const {createDMCA, status} = UserWriteDMCADynamoDB()
    const [username, setUsername] = useState('')
    const [fileName, setfileName] = useState('')
    const [contract_address,setcontract_address]=useState(state.contract_address)
    const [marketplace_name, setWhitelist] = useState(state.marketplace_name)
    const [tokenID, setTokenID] = useState('')
    

    const handleSubmit = (event) => {
        event.preventDefault();
        createDMCA({username,fileName})
    };

    const setSubmitButtonStatus = () => {
        setCanSubmit(true);
    }

    const clearSignature = () => {
        sigPad.current.clear();
        setCanSubmit(false);
    }

  return (
        <Authenticator>
            {({user }) => (
            <>
            <NavBar />
            <div class="body">
                <ScrollView backgroundColor="#f5f5f5" height="400px" maxWidth="100%">
                    <div class="confirmation-text">
                        <Text fontSize={18}>
                            To {state.marketplace_name},<br></br>
                            Art Guardian is acting on behalf of the copyright owner of the art found on an <Link href={state.img_link} isExternal={true}>NFT on your marketplace</Link><br></br>
                            Token ID: {state.token_id}<br></br>
                            Contract Address: {state.contract_address}<br></br>
                            Detected NFT Link: <Link href={state.img_link} isExternal={true}>{state.img_link}</Link>
                            <br /><br />

                            This letter is official notification under the provisions of Section 512(c) of the Digital Millennium Copyright Act (“DMCA”) for removal of the above-referenced copyright infringement(s). Art Guardian hereby requests that you immediately issue a cancellation message as specified in RFC 1036 for the specified postings and prevent the infringer, who is identified by its Web address, from posting the infringing art to your servers in the future. The law requires you to “expeditiously remove or disable access to” the infringing works of art upon receiving this notice. As a service provider, noncompliance may result in a loss of immunity for liability under the DMCA as cited above.
                        </Text>
                        <br />
                        <Text fontSize={18}>
                            I have a good faith belief that use of the material in the manner complained of herein is not authorized by the copyright holder, or the law. The information provided is true and accurate to the best of my knowledge. I swear under penalty of perjury that I am the copyright owner or have the authority to act on behalf of the copyright owner.
                        </Text>
                        <br />
                        <Text fontSize={18}>
                            Sincerely, <br />
                            Art Guardian Team<br />
                            ArtGuardian2022@gmail.com <br />
                            4600 Hampton Blvd, Norfolk, VA 23529 <br />
                        </Text>
                    </div>
                </ScrollView>

                <View padding="3rem 0rem">

                    <Text color="white">*Required</Text>
                    <Flex justifyContent="space-between">
                        <SignatureCanvas ref={sigPad} backgroundColor='#f5f5f5' 
                        canvasProps={{ className: 'sig-canvas' }} 
                        onBegin={setSubmitButtonStatus} />
                        <Button variation="primary"
                            className='clear-signature-button'
                            onClick={clearSignature}
                            size="large">Clear</Button>
                        <Button variation="primary"
                            width="150px"
                            type="submit"
                            className='submit-button'
                            isDisabled={!canSubmit}
                            size="large">Submit</Button>
                    </Flex>
                    
                </View>
            </div>
            </>
            )
        }
    </Authenticator>
  )
}