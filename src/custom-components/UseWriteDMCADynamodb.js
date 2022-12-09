import { useState } from 'react';

export const API_BASE_URL = 'https://ed1sco1n0i.execute-api.us-east-1.amazonaws.com/prod';


function UseWriteDMCADynamoDB() {
    const [status, setStatus] = useState({ error: '', success: false })

    const createDMCA = (dmca) => {

        const payload = JSON.stringify({
            id : dmca.requestId,
            fileName : dmca.fileName,
            artTitle : dmca.artTitle,
            date_created : dmca.date_created,
            image_link : dmca.image_link,
            market_place : dmca.market_place,
            username : dmca.username,
            tokenID  : dmca.tokenID,
            contract_address : dmca.contract_address,
            dmca_status : dmca.dmca_status
        });

        fetch(`${API_BASE_URL}/dmca`, {method: 'POST', body: payload})
            .then(response => response.json())
            .then(data => {
                if (!data || !data.length) {
                    throw new Error('An error occured while saving your item in DB, error: ' + data)
                }

                setStatus({ ...status, success: true, error: ''})
            })
            .catch(error => setStatus({...status, success: false, error}))
    }

    return {createDMCA, status}
}

export default UseWriteDMCADynamoDB