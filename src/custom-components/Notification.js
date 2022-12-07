import React, { useState } from "react";
import {
  Card,
  Flex,
  Image,
  Link,
  Text,
  Heading,
  Button,
} from "@aws-amplify/ui-react";
import Confirmation from "./Confirmation";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function Notification({
  token_id,
  blockchain,
  contract_address,
  img_link,
  original_img,
  marketplace_name,
}) {
  const [showConfirmed, setShowConfirmed] = useState(false);

  const renderConfirmationComponent = () => {
    if (showConfirmed) {
      return (
        <>
          <Confirmation
            token_id={token_id}
            contract_address={contract_address}
            img_link={img_link}
            marketplace_name={marketplace_name}
          />
          <Button
            onClick={() => setShowConfirmed(!showConfirmed)}
            backgroundColor="red"
            marginLeft={"1vw"}
            border={"solid 3px black"}
          >
            Cancel
          </Button>
        </>
      );
    }
  };

  return (
    <>
      <Card backgroundColor="#263A58" variation="elevated">
        <div class="body">
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            alignContent="flex-start"
            gap="3rem"
            wrap="bottom"
          >
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              alignContent="flex-start"
              gap="1rem"
              wrap="bottom"
            >
              <div>
                <Text color="white" padding="0 0 1rem 0" fontWeight={700}>
                  Your artwork:
                </Text>
                <Image src={original_img} height="75%" width="75%" />
              </div>
              <div>
                <Text color="white" padding="0 0 1rem 0" fontWeight={700}>
                  Detected NFT:
                </Text>
                <Image src={img_link} height="75%" width="75%" />
              </div>
            </Flex>

            <div>
              <Heading
                level="3"
                color="white"
                padding="0 0 1rem 0"
                fontWeight={700}
              >
                Your art has been found on a{" "}
                <Link color="#8BC7FF" href={img_link} isExternal="true">
                  transaction on {marketplace_name}
                </Link>
              </Heading>
              <Text color="white">Token ID: {token_id}</Text>
              <Text color="white">Blockchain: {blockchain}</Text>
              <Text color="white">Contract address: {contract_address}</Text>
              <Button
                onClick={() => setShowConfirmed(true)}
                backgroundColor="yellow"
                border={"solid 3px black"}
              >
                Click Here To Confirm
              </Button>
              {renderConfirmationComponent()}
            </div>
          </Flex>
        </div>
      </Card>
    </>
  );
}
