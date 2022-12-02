import React from 'react';
import { Card, Flex, Image, Link } from '@aws-amplify/ui-react'
import logo from "../logo.png"

import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function Notification (props) {
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

                    <Image src={logo} />

                    <div>
                        <h2>Your art titled "title" has been found an an <Link color="#8BC7FF">nftmarketplace transaction</Link></h2>
                        <p><Link color="#8BC7FF">Click here</Link> for more information</p>
                    </div>
                </Flex>
            </div>
        </Card>
    </>
    )
}