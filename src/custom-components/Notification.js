import React from 'react';
import { Card, Flex, Image, Link } from '@aws-amplify/ui-react'
import logo from "../logo.png"

import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function Notification ({token_id, blockchain, contract_address, img_link, marketplace_name}) {

    return (
    <>
        <Card backgroundColor="#263A58" variation="elevated">
            <div class="body">
                <Flex
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    alignContent="flex-start"
                    gap="10rem"
                    wrap="bottom">

                    <Image src={img_link} />

                    <div>
                        <h2>Your art has been found on a <Link color="#8BC7FF" href={img_link} isExternal="true">transaction on {marketplace_name}</Link></h2>
                        <p>Token ID: {token_id}</p>
                        <p>Blockchain: {blockchain}</p>
                        <p>Contract address: {contract_address}</p>
                    </div>
                </Flex>
            </div>
        </Card>
    </>
    )
}