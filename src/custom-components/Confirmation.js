import { Text, Flex, CheckboxField, Button } from "@aws-amplify/ui-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Confirmation({
  token_id,
  contract_address,
  img_link,
  marketplace_name
}) {
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const navigate = useNavigate();

  function toEsignature() {
    navigate('/esign', {
      state:{
        token_id: token_id,
        contract_address: contract_address,
        img_link: img_link,
        marketplace_name: marketplace_name
        }});
  }

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="flex-start"
      position="absolute"
      left="25%"
      width="50%"
      padding="1vh"
      borderRadius={"25px"}
      backgroundColor={"#29aaf0"}
      border="solid 6px black"
    >
      <Text color="black" fontSize={"2em"}>
        IMPORTANT, PLEASE READ. By continuing further, you confirm that:
      </Text>
      <Flex>
        <CheckboxField
          size="large"
          checked={firstChecked}
          onChange={(e) => setFirstChecked(e.target.checked)}
        />
        <Text fontSize="2em" color="black">
          You ARE the ORIGINAL artist of thie piece of artwork
        </Text>
      </Flex>
      <Flex>
        <CheckboxField
          size="large"
          checked={secondChecked}
          onChange={(e) => setSecondChecked(e.target.checked)}
        />
        <Text fontSize="2em" color="black">
          You ARE looking to request a takedown of this NFT
        </Text>
      </Flex>
      <Button
        isDisabled={!firstChecked || !secondChecked}
        variations="primary"
        size="large"
        color="black"
        width="15vw"
        backgroundColor={firstChecked && secondChecked ? "yellow" : "#575a5e"}
        borderRadius="50px"
        border="black"
        onClick={(e) => {
          setFirstChecked(e.target.checked)
          setSecondChecked(e.target.checked)
          toEsignature()
        }}
      >
        Continue
      </Button>
    </Flex>
  );
}
