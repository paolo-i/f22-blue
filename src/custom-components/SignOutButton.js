import React from 'react'
import {Auth} from "aws-amplify";
import { Button, Text } from '@aws-amplify/ui-react';


function SignOutButton() {
    const signOut = (e) => {
        e.preventDefault();
        Auth.signOut().then(()=>{
            window.location.reload(false); 
        });
    }
    return (
        <Button variation="menu" onClick={signOut}>
            <Text color="white">Sign Out</Text>
        </Button>
    )
}

export default SignOutButton;