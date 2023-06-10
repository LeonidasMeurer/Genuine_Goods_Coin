// import 'rsuite/dist/rsuite.min.css';

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import GoodsNFT from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/GoodsNFT.json";
import Market from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/Market.json";
import Header from './components/Header';
import { useRouter } from 'next/router';
import { ifpsToPicture } from './components/ListedForSale';




const Token = () => {

    const router = useRouter();
    const tokenId = router.query.token;

    const [web3, setWeb3] = useState(null);
    const [marketContract, setMarketContract] = useState(null);
    const [account, setAccount] = useState("");
    const [tokenURI, setTokenURI] = useState("");
    // const [tokenId, setTokenId] = useState("");
    const [contract, setContract] = useState("");
    const [tokensOnSale, setTokensOnSale] = useState([]);
    const [nftPrice, setNftPrice] = useState("");
    const [balance, setBalance] = useState(0);
    const [nftTransferred, setNftTransferred] = useState(false);
    const [nftsForSale, setNftsForSale] = useState([]);

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
        const getImage = async () => {
            if (contract) {
                const uri = await contract.methods.tokenURI(tokenId).call();
                setTokenURI(uri)
            }
        };
        getImage();
    }, [contract]);


    {
        return (
            <div>
                <Header appearance="inverse" />
                <div style={{ paddingLeft: 30, paddingTop: 30 }} >
                    <h3>Token Id: {tokenId}</h3>
                    <h5>Token URI: {tokenURI}</h5>
                    <img src={ifpsToPicture.get(tokenURI)}></img>
                </div>
            </div>
        );
    }


}

export default Token;

