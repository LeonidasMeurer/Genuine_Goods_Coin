import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import GoodsNFT from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/GoodsNFT.json";
import PradaNFT from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/PradaNFT.json";

import Market from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/Market.json";
import Header from './components/Header';
import { useRouter } from 'next/router';
import { ifpsToPicture } from './components/ListedForSale';




const Token = () => {

    const router = useRouter();
    const tokenId = router.query.token;

    const [web3, setWeb3] = useState(null);
    const [marketContract, setMarketContract] = useState(null);
    const [tokenURI, setTokenURI] = useState("");
    const [goodsNFTContract, setContract] = useState("");
    const [pradaNFTContract, setPradaNFTContract] = useState("");



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

    useEffect(() => {
        const loadContract = async () => {
            try {
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = GoodsNFT.networks[networkId];
                const instance = new web3.eth.Contract(
                    GoodsNFT.abi,
                    deployedNetwork && deployedNetwork.address
                );
                setContract(instance);
            } catch (error) {
                console.error(error);
            }
        };

        if (web3) {
            loadContract();
        }
    }, [web3]);

    useEffect(() => {
        const loadContract = async () => {
            try {
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = PradaNFT.networks[networkId];
                const instance = new web3.eth.Contract(
                    PradaNFT.abi,
                    deployedNetwork && deployedNetwork.address
                );
                setPradaNFTContract(instance);
            } catch (error) {
                console.error(error);
            }
        };

        if (web3) {
            loadContract();
        }
    }, [web3]);

    useEffect(() => {
        const loadContract = async () => {
            try {
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = Market.networks[networkId];
                const instance = new web3.eth.Contract(
                    Market.abi,
                    deployedNetwork && deployedNetwork.address
                );
                setMarketContract(instance);
            } catch (error) {
                console.error(error);
            }
        };

        if (web3) {
            loadContract();
        }
    }, [web3]);

    useEffect(() => {
        const loadAccount = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        };

        if (web3) {
            loadAccount();
        }
    }, [web3]);
    

    useEffect(() => {
        if(marketContract && goodsNFTContract && pradaNFTContract) {
        const getImage = async () => {
            const token = await marketContract.methods.getListing(tokenId).call();

            console.log(token.token);
            console.log(goodsNFTContract._address)
            if (token.token == goodsNFTContract._address) {
                console.log(true)
                setTokenURI(await goodsNFTContract.methods.tokenURI(Number(token.tokenId)).call());
            } else {
                console.log(false)
                setTokenURI(await pradaNFTContract.methods.tokenURI(Number(token.tokenId)).call());

            }

        }
        getImage()
}
    }, [marketContract, goodsNFTContract, pradaNFTContract])

    if(!marketContract || !goodsNFTContract || !pradaNFTContract) {
        return (
            <h2>loading...</h2>
        )
    }


    {
        return (
            <div>
                <Header appearance="inverse" />
                <div style={{ paddingLeft: 30, paddingTop: 30 }} >
                    <h3>Token Id: {tokenId}</h3>
                    <h5>Token URI: {tokenURI}</h5>
                    <img src={ifpsToPicture.get(tokenURI)} width={250} height={250}></img>
                </div>
            </div>
        );
    }


}

export default Token;

