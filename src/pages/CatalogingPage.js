import NavBar from "../custom-components/NavBar";
import Amplify from "aws-amplify";
import {Authenticator, Grid, Card, Image, Link, Heading, Text, Flex} from '@aws-amplify/ui-react';
import { useState, useEffect } from "react";

export const GET_DMCA_URL = 
  "https://ed1sco1n0i.execute-api.us-east-1.amazonaws.com/prod";

export default function Catalog(props) {
    const [DMCACatalog, setDMCACatalog] = useState([]);

    useEffect(() => {
      getDMCACatalog();
      console.log('DMCA Catalog loaded');
    }, []);

    const getDMCACatalog = () => {
      fetch(`${GET_DMCA_URL}/dmca`, {method: 'GET'})
      .then((response) =>
      //handle response
      response.json()
      )
      .then((data) => {
      //handle data
      setDMCACatalog(data.body);
      console.log(data);
      })
      .catch((error) => {
      //handle error
      console.log("Failure posting DMCA information");
      });
    }


    return (
      <Authenticator>
      {({user }) => (
        <>
          <NavBar />
          <div class="body">
            <div class="body">
              <Heading 
                level="1"
                color="white"
                fontWeight={700}
                alignSelf="center">
                Cataloging
              </Heading>
            </div>
          </div>
          <div class="body">
              {DMCACatalog.map((dmcaInfo) => {
                if(dmcaInfo.username === user.username) {
                  return (
                    <div class="body">
                      <Card 
                        backgroundColor="#263A58" 
                        variation="elevated"
                        padding="2rem">
                          <div class="body">
                            <Flex
                              direction="row"
                              justifyContent="space-between"
                              alignItems="start"
                              alignContent="flex-start"
                              gap="1rem"
                              wrap="bottom">
                              <Image src={dmcaInfo.image_link} height="25%" width="25%" />
                              <div>
                                {/*<Text color="white" fontSize="18pt" fontWeight={450} padding="1rem 0 0 0">User Art Title: {dmcaInfo.artTitle}</Text>*/}
                                <Text color="white" fontSize="18pt" fontWeight={450} >Token ID: {dmcaInfo.tokenID}</Text>
                                <Text color="white" fontSize="18pt" fontWeight={450} >Contract Address: {dmcaInfo.contract_address}</Text>
                                <Text color="white" fontSize="18pt" fontWeight={450} >DMCA Status: {dmcaInfo.dmca_status ? "Not taken down" : "Successfully taken down"}</Text>
                                <Text color="white" fontSize="18pt" fontWeight={450} >Marketplace: {" "}
                                  <Link color="#8BC7FF" href={dmcaInfo.image_link} isExternal="true">
                                    {dmcaInfo.market_place}
                                  </Link>
                                </Text>
                                <Text color="white" fontSize="18pt" fontWeight={450} ><br></br>Request submitted on {dmcaInfo.date_created}</Text>
                              </div>
                            </Flex>
                          </div>
                      </Card>
                    </div>
                  )
                }
              })}
          </div>
        </>
      )}
      </Authenticator>
    );
}