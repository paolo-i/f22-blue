import React from 'react';
import { Card, Flex, Image, Link, Text, Heading } from '@aws-amplify/ui-react'

import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function Notification ({token_id, blockchain, contract_address, img_link, original_img, marketplace_name}) {

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
                    wrap="bottom">

                    <Flex
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        alignContent="flex-start"
                        gap="1rem"
                        wrap="bottom">
                        <div>
                            <Text color="white" padding="0 0 1rem 0" fontWeight={700}>Your artwork:</Text>
                            <Image src={img_link} height="75%" width="75%"/>
                        </div>
                        <div>
                            <Text color="white" padding="0 0 1rem 0" fontWeight={700}>Detected NFT:</Text>
                            <Image src={img_link} height="75%" width="75%"/>
                        </div>
                    </Flex>

                    <div>
                        <Heading level="3" color="white" padding="0 0 1rem 0" fontWeight={700}>Your art has been found on a <Link color="#8BC7FF" href={img_link} isExternal="true">transaction on {marketplace_name}</Link></Heading>
                        <Text color="white">Token ID: {token_id}</Text>
                        <Text color="white">Blockchain: {blockchain}</Text>
                        <Text color="white">Contract address: {contract_address}</Text>
                    </div>
                </Flex>
            </div>
        </Card>
    </>
    )
}