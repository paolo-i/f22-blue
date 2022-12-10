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
            backgroundColor="#b30000"
            color="white"
            marginLeft={"1vw"}
            variation="menu"
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
            gap="6rem"
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
                <Text color="white" padding="0 0 1rem 0" fontSize="18pt" fontWeight={700}>
                  Your artwork:
                </Text>
                <Image src={original_img} width="1700px" height="auto" />
              </div>
              <div>
                <Text color="white" padding="0 0 1rem 0" fontSize="18pt" fontWeight={700}>
                  Detected NFT:
                </Text>
                <Image src={img_link} width="1700px" height="auto" />
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
              <Text color="white" fontSize="16pt">Token ID: {token_id}</Text>
              <Text color="white" fontSize="16pt">Blockchain: {blockchain}</Text>
              <Text color="white"  fontSize="16pt" paddingBottom="1rem">Contract address: {contract_address}</Text>
              <Button
                onClick={() => setShowConfirmed(true)}
                backgroundColor="#3c9955"
                color="white"
                variation="menu"
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
