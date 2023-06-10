import React, { useState, useEffect } from 'react';
import { Form, ButtonToolbar, Button } from 'rsuite';
import Web3 from 'web3';
import GoodsNFT from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/GoodsNFT.json";
import Market from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/Market.json";
import Header from './components/Header'
import { ifpsToPicture } from './components/ListedForSale';


const WatchMinter = () => {

    const [web3, setWeb3] = useState(null);
    const [goodsNFTContract, setContract] = useState(null);
    const [marketContract, setMarketContract] = useState(null);
    const [account, setAccount] = useState("");
    const [tokenId, setTokenId] = useState("");
    const [recipient, setRecipient] = useState("");
    const [tokensOnSale, setTokensOnSale] = useState([]);
    const [nftPrice, setNftPrice] = useState("");


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
                // const campaigns = await marketContract.methods.getTokensOnSale().call();
                // console.log(campaigns)
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

    // const handleCreateNFT = async () => {
    //     if (contract && account) {
    //       try {
    //         await contract.methods.mintNFT(account, "ipfs://bafkreibdw6zzjn3rs33hvuyxja6hrrb4vozdftu5pwyikplkblp2uyygz4").send({ from: account });
    //         console.log(account)
    //         alert("NFT created successfully!");
    //       } catch (error) {
    //         console.error(error);
    //         alert("Failed to create NFT");
    //       }
    //     }
    //   };

    const handleCreateNFT = async () => {
        if (marketContract) {
            try {
                console.log("NFT Address:", goodsNFTContract._address)
                const result = await goodsNFTContract.methods.mintNFT(account, "ipfs://bafkreigdeafb7xsb3z6unl3wpepscivp4tgzwzir3ii27kiapckxcdjoem").send({ from: account });
                console.log(result)

            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    };

    
    {
        return (
            <div>
                <Header appearance="inverse" />
                <div style={{ paddingLeft: 30, paddingTop: 30 }} >
                <div>
                <h3>Watch Minter</h3>
                <h6 style={{paddingBottom: 10}}>Logged in as: {account}</h6>
                <img src={ifpsToPicture.get("ipfs://bafkreigdeafb7xsb3z6unl3wpepscivp4tgzwzir3ii27kiapckxcdjoem")}/>
                </div>
                <Button appearance="primary" onClick={() => handleCreateNFT()}>Buy Watch</Button>
                </div>

            </div>
        );
    }


}

export default WatchMinter;

