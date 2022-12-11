import NavBar from "../custom-components/NavBar";
import Amplify, { sectionHeader } from "aws-amplify";
import {
  Authenticator,
  CheckboxField,
  Flex,
  Image,
  Text,
  Divider,
  Button,
} from "@aws-amplify/ui-react";
import { useState } from "react";

export default function Confirmation(props) {
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);


  return (
    <>
      <Authenticator>
        {({ user }) => (
          <>
            <NavBar />
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              alignContent="flex-start"
              padding="1vh"
              backgroundColor="#198DD2"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/cd/VanGogh-starry_night.jpg"
                height="25vh"
                width="25vw"
              ></Image>
              <Text color="white" fontSize="1.5em">
                NFT Link: temporary link{" "}
              </Text>
              <Text color="white" fontSize="1.5em">
                Blockchain: Ethereum
              </Text>
              <Text color="white" fontSize="1.5em">
                Token: 0x12345
              </Text>
              <Text color="white" fontSize="1.5em">
                User: Jane Smith
              </Text>
            </Flex>
            <Divider orientation="horizontal" size="large" />
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              alignContent="flex-start"
              margin="1vh"
            >
              <Text color="white" fontSize={"2em"}>
                IMPORTANT, PLEASE READ. By continuing further, you confirm that:
              </Text>
              <Flex>
                <CheckboxField
                  size="large"
                  checked={firstChecked}
                  onChange={(e) => setFirstChecked(e.target.checked)}
                />
                <Text fontSize="2em" color="white">
                  You ARE the ORIGINAL artist of this piece of artwork
                </Text>
              </Flex>
              <Flex>
                <CheckboxField
                  size="large"
                  checked={secondChecked}
                  onChange={(e) => setSecondChecked(e.target.checked)}
                />
                <Text fontSize="2em" color="white">
                  You ARE looking to request a takedown of this NFT
                </Text>
              </Flex>
              <Button
                isDisabled={!firstChecked || !secondChecked}
                variations="primary"
                size="large"
                color="black"
                width="15vw"
                backgroundColor={
                  firstChecked && secondChecked ? "#F9BB03" : "#575a5e"
                }
                borderRadius="50px"
                border="black"
              >
                Continue
              </Button>
            </Flex>
          </>
        )}
      </Authenticator>
    </>
  );
}
