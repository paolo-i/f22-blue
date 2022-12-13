import React, { useState, useRef } from "react";
import NavBar from "../custom-components/NavBar";
import { Authenticator, Link } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import { ScrollView, Text, View, Button, Flex, Heading } from "@aws-amplify/ui-react";
import "./ESignaturePage.css";
import SignatureCanvas from "react-signature-canvas";
import { useLocation, useNavigate } from "react-router-dom";

export const POST_DMCA_URL =
  "https://ed1sco1n0i.execute-api.us-east-1.amazonaws.com/prod";

export const API_BASE_URL =
  "https://rc7eva16e5.execute-api.us-east-1.amazonaws.com/default/sendPyMail";

export default function ESignaturePage(props) {
  let sigPad = useRef();
  const [canSubmit, setCanSubmit] = useState();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState();

  const setSubmitButtonStatus = () => {
    setCanSubmit(true);
  };

  const clearSignature = () => {
    sigPad.current.clear();
    setCanSubmit(false);
  };

  const sendEmail = (username) => {
    const emailText = `<div>To ${state.marketplace_name},<br></br> Art Guardian is 
    acting on behalf of the copyright owner of the art found on 
    an <a href=${state.img_link}>NFT on your marketplace</a><br></br>
    Token ID: ${state.token_id}<br></br>
    Contract Address: ${state.contract_address}<br></br>
    Detected NFT Link: <a href=${state.img_link}>${state.img_link}</a><br></br>
    <br></br>
    <br></br>
    This letter is official notification under the provisions of
    Section 512(c) of the Digital Millennium Copyright Act
    (“DMCA”) for removal of the above-referenced copyright
    infringement(s). Art Guardian hereby requests that you
    immediately issue a cancellation message as specified in RFC
    1036 for the specified postings and prevent the infringer, who
    is identified by its Web address, from posting the infringing
    art to your servers in the future. The law requires you to
    “expeditiously remove or disable access to” the infringing
    works of art upon receiving this notice. As a service
    provider, noncompliance may result in a loss of immunity for
    liability under the DMCA as cited above.
    <br></br>
    <br></br>
    We have a good faith belief that use of the art in the manner
    complained of is not authorized by the copyright owner, its
    agent, or the law. The information in this notification is
    accurate, and under penalty of perjury, I am authorized to act
    on behalf of the owner of an exclusive right that is allegedly
    infringed.
    <br></br>
    <br></br>
    Sincerely,<br></br>
    Art Guardian<br></br>
    ArtGuardian2022@gmail.com<br></br>
    4600 Hampton Blvd, Norfolk, VA 23529 <br />
    </div>`;

    const emailSubject = `DMCA Notice for ${state.marketplace_name}`;

    const payload = JSON.stringify({
      subject: emailSubject,
      body: emailText,
    });

    fetch(`${API_BASE_URL}`, { method: "POST", body: payload })
      .then((response) => response.json())
      .then((data) => {
        console.log("Email sent");
        if (!data || !data.length) {
          throw new Error(
            "An error occurred while sending your email, error: " + data
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function createWritePayload(username) {
    sendEmail(username);

    const date = new Date();

    setCurrentDate(
      `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    );

    const payload = JSON.stringify({
      tokenID: state.token_id,
      image_link: state.img_link,
      username: username,
      market_place: state.marketplace_name,
      contract_address: state.contract_address,
      dmca_status: "false",
      date_created: currentDate.toString(),
    });

    writeDMCA(payload);
  }

  function writeDMCA(payload) {
    fetch(`${POST_DMCA_URL}/dmca`, {
      method: "POST",
      body: payload,
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) =>
        //handle response
        response.json()
      )
      .then((data) => {
        //handle data
        clearSignature();
        navigate("/cataloging");
        console.log(data);
      })
      .catch((error) => {
        //handle error
        console.log("Failure posting DMCA information");
      });
  }

  return (
    <Authenticator>
      {({ user }) => (
        <>
          <NavBar />
          <div class="body">
            <Heading
              level="3"
              color="white"
              padding="0 0 2rem 0"
              fontWeight={700}>
              Read and confirm that ALL information is correct
            </Heading>
            <ScrollView
              backgroundColor="#f5f5f5"
              height="400px"
              maxWidth="100%"
            >
              <div class="confirmation-text">
                <Text fontSize={18}>
                  To {state.marketplace_name},<br></br>
                  Art Guardian is acting on behalf of the copyright owner of the
                  art found on an{" "}
                  <Link href={state.img_link} isExternal={true}>
                    NFT on your marketplace
                  </Link>
                  <br></br>
                  Token ID: {state.token_id}
                  <br></br>
                  Contract Address: {state.contract_address}
                  <br></br>
                  Detected NFT Link:{" "}
                  <Link href={state.img_link} isExternal={true}>
                    {state.img_link}
                  </Link>
                  <br />
                  <br />
                  This letter is official notification under the provisions of
                  Section 512(c) of the Digital Millennium Copyright Act
                  (“DMCA”) for removal of the above-referenced copyright
                  infringement(s). Art Guardian hereby requests that you
                  immediately issue a cancellation message as specified in RFC
                  1036 for the specified postings and prevent the infringer, who
                  is identified by its Web address, from posting the infringing
                  art to your servers in the future. The law requires you to
                  “expeditiously remove or disable access to” the infringing
                  works of art upon receiving this notice. As a service
                  provider, noncompliance may result in a loss of immunity for
                  liability under the DMCA as cited above.
                </Text>
                <br />
                <Text fontSize={18}>
                  I have a good faith belief that use of the material in the
                  manner complained of herein is not authorized by the copyright
                  holder, or the law. The information provided is true and
                  accurate to the best of my knowledge. I swear under penalty of
                  perjury that I am the copyright owner or have the authority to
                  act on behalf of the copyright owner.
                </Text>
                <br />
                <Text fontSize={18}>
                  Sincerely, <br />
                  Art Guardian Team
                  <br />
                  ArtGuardian2022@gmail.com <br />
                  4600 Hampton Blvd, Norfolk, VA 23529 <br />
                </Text>
              </div>
            </ScrollView>

            <View padding="3rem 0rem">
              <Text color="white">*Required</Text>
              <Flex justifyContent="space-between">
                <SignatureCanvas
                  ref={sigPad}
                  backgroundColor="#f5f5f5"
                  canvasProps={{ className: "sig-canvas" }}
                  onBegin={setSubmitButtonStatus}
                />
                <Button
                  variation="primary"
                  className="clear-signature-button"
                  onClick={clearSignature}
                  size="large"
                >
                  Clear
                </Button>
                <Button
                  variation="primary"
                  width="150px"
                  className="submit-button"
                  isDisabled={!canSubmit}
                  size="large"
                  onClick={() => {
                    createWritePayload(user.username)
                  }}
                >
                  Submit
                </Button>
              </Flex>
            </View>
          </div>
        </>
      )}
    </Authenticator>
  );
}
