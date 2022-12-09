import { useState } from 'react';

export const API_BASE_URL = 'https://gcd299xsj2.execute-api.us-east-1.amazonaws.com/prod';

function UseWriteArtDynamoDB() {
    const [status, setStatus] = useState({ error: '', success: false })

    const createArt = (art) => {

        const payload = JSON.stringify({
            username: art.username,
            fileName: art.fileName,
            whitelist: art.whitelist,
            tokenId: art.tokenId
        });

        fetch(`${API_BASE_URL}/art`, {method: 'POST', body: payload})
            .then(response => response.json())
            .then(data => {
                if (!data || !data.length) {
                    throw new Error('An error occurred while saving your item in DB, error: ' + data)
                }

                setStatus({ ...status, success: true, error: ''})
            })
            .catch(error => setStatus({...status, success: false, error}))
    }

    return {createArt, status}
}

export default UseWriteArtDynamoDB