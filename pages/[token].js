import React, { useState, useEffect, lazy } from 'react';
import Web3 from 'web3';
import { useRouter } from 'next/router';

import { goodsNFTContract, pradaNFTContract, marketContract, ifpsToPicture } from './Web3Client';


import Header from './components/Header';
import { Button } from 'rsuite';




const Token = () => {

    const router = useRouter();
    const tokenId = router.query.token;

    const [web3, setWeb3] = useState(null);
    const [tokenURI, setTokenURI] = useState("");

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                setWeb3(window.web3);
            }
        };

        loadWeb3();
    }, []);

    const getImage = async () => {
            const token = await marketContract.methods.getListing(tokenId).call();

            if (token.token == goodsNFTContract._address) {
                console.log(true)
                setTokenURI(await goodsNFTContract.methods.tokenURI(Number(token.tokenId)).call());
            } else {
                console.log(false)
                setTokenURI(await pradaNFTContract.methods.tokenURI(Number(token.tokenId)).call());
            }
    }

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

