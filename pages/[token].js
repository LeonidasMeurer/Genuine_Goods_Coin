import React, { useState, useEffect, lazy } from 'react';
import Web3 from 'web3';
import { useRouter } from 'next/router';

import { goodsNFTContract, pradaNFTContract, marketContract, ifpsToPicture, getTokenData } from './Web3Client';


import Header from './components/Header';
import { Button } from 'rsuite';

const Token = () => {

    const router = useRouter();

    const [tokenURI, setTokenURI] = useState("");
    const [tokenId, setTokenId] = useState("")

    useEffect(() => {
        const setData = async () => {
            setTokenId(router.query.token)
            setTokenURI(await getTokenData(router.query.token));
        }
        setData();
    }, [router]);

    // const getImage = async () => {
    //         const token = await marketContract.methods.getListing(tokenId).call();

    //         if (token.token == goodsNFTContract._address) {
    //             console.log(true)
    //             setTokenURI(await goodsNFTContract.methods.tokenURI(Number(token.tokenId)).call());
    //         } else {
    //             console.log(false)
    //             setTokenURI(await pradaNFTContract.methods.tokenURI(Number(token.tokenId)).call());
    //         }
    // }

    {
        return (
            <div>
                <Header appearance="inverse" />
                <div style={{ paddingLeft: 30, paddingTop: 30, paddingBottom: 30 }} >
                    <div style={{ paddingBottom: 30 }}>
                        <h3>Token Id: {tokenId}</h3>
                        <h5>Token URI: {tokenURI}</h5>
                        <img src={ifpsToPicture.get(tokenURI)} width={250} height={250}></img>
                    </div>
                    <Button onClick={() => getImage()}>Refresh!</Button>
                </div>
            </div>
        );
    }
}

export default Token;

