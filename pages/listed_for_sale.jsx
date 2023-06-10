// import 'rsuite/dist/rsuite.min.css';

import React, { Component, useState, useEffect } from 'react';
// import { Link } from '../../routes';
import Web3 from 'web3';
import GoodsNFT from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/GoodsNFT.json";
import PradaNFT from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/PradaNFT.json";

import Market from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/Market.json";
// import instance from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/factory/factoryGoodsNFT.js"
import Minter from './components/Minter'
import Header from './components/Header'
import ListedForSale from './components/ListedForSale'
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <h2>Hello</h2>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const GoodsNFT = instance;

const App = () => {

    const [web3, setWeb3] = useState(null);
    const [goodsNFTContract, setContract] = useState(null);
    const [pradaNFTContract, setPradaNFTContract] = useState(null);
    const [marketContract, setMarketContract] = useState(null);
    const [account, setAccount] = useState("");
    const [tokenId, setTokenId] = useState("");
    const [recipient, setRecipient] = useState("");
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

    // useEffect(() => {
    //     const listedTokens = async () => {
    //         if (marketContract) {
    //             try {
    //                 const campaigns = await marketContract.methods.getTokensOnSale().call();
    //                 console.log(campaigns)
    //                 setNftListed(campaigns);
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         }
    //     };

    //     if (web3) {
    //         listedTokens();
    //     }

    // }, [web3, marketContract]);

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

    {
        return (
            <div>
                <Header appearance="inverse" />
                <div style={{ paddingLeft: 30, paddingTop: 30 }} >

                    <h3>Market</h3>
                    {/* <Link route={`/test`}>
                    Test
                </Link> */}
                    {/* <button onClick={console.log(marketContract)}>Mint</button> */}
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

// App.getLayout = function getLayout(page) {
//     return (
//         <div>
//             <Header />
//             <div>{page}</div>
//         </div>

//     )
// }

export default App;

