import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import GoodsNFT from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/GoodsNFT.json";
import PradaNFT from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/PradaNFT.json";

import Market from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/Market.json";

import Header from './components/Header'
import ListedForSale from './components/ListedForSale'


const App = () => {

    const [web3, setWeb3] = useState(null);
    const [goodsNFTContract, setContract] = useState(null);
    const [pradaNFTContract, setPradaNFTContract] = useState(null);
    const [marketContract, setMarketContract] = useState(null);
    const [account, setAccount] = useState("");

    const [tokensOnSale, setTokensOnSale] = useState([]);


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
        const fetchNftsForSale = async () => {
            if (marketContract) {
                const totalSupply = await marketContract.methods.getTokensOnSale().call();
                console.log(totalSupply)

                setTokensOnSale(totalSupply);
            }
        };

        fetchNftsForSale();
    }, [marketContract]);


    {
        return (
            <div>
                <Header appearance="inverse" />
                <div style={{ paddingLeft: 30, paddingTop: 30 }} >

                    <h3>Market</h3>
  
                    <ListedForSale
                        marketContract={marketContract}
                        goodsNFTContract={goodsNFTContract}
                        pradaNFTContract={pradaNFTContract}
                        account={account}
                        tokensOnSale={tokensOnSale} />
                </div>
            </div>
        );
    }


}



export default App;

