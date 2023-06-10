import React, { useState, useEffect } from 'react';
import { Form, ButtonToolbar, Button, Panel, FlexboxGrid, Progress } from 'rsuite';
import Web3, { eth } from 'web3';
import GoodsNFT from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/GoodsNFT.json";
import Market from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/Market.json";
import Header from './components/Header'
import { ifpsToPicture } from './components/ListedForSale';


const WatchMinter = () => {

    const [web3, setWeb3] = useState(null);
    const [goodsNFTContract, setContract] = useState(null);
    // const [marketContract, setMarketContract] = useState(null);
    const [account, setAccount] = useState("");
    const [totalSupply, setTotalSupply] = useState(null);
    const [maxSupply, setMaxSupply] = useState(null);
    const [nftPrice, setNftPrice] = useState(null);

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

    // useEffect(() => {
    //     const loadContract = async () => {
    //         try {
    //             const networkId = await web3.eth.net.getId();
    //             const deployedNetwork = Market.networks[networkId];
    //             const instance = new web3.eth.Contract(
    //                 Market.abi,
    //                 deployedNetwork && deployedNetwork.address
    //             );
    //             // const campaigns = await marketContract.methods.getTokensOnSale().call();
    //             // console.log(campaigns)
    //             setMarketContract(instance);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     if (web3) {
    //         loadContract();
    //     }
    // }, [web3]);

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
        if (goodsNFTContract) {
            try {
                console.log("NFT Address:", goodsNFTContract._address)
                

                const price = Number(await goodsNFTContract.methods.getPrice().call())
                // const contractData = await goodsNFTContract.methods.getContractData().call();
                // console.log(Number(contractData.methods.mintPrice));


                console.log(goodsNFTContract.methods.totalSupply());

                await goodsNFTContract.methods.mintNFT(
                    account,
                    "ipfs://bafkreibv7ugie5cj7xpl3hk6c3rrmk3kgtgkex4czyccrywsy6bhmzcire")
                    .send({ from: account, value: price });

                    setNftPrice(await goodsNFTContract.methods.getPrice().call());
                    setTotalSupply(Number(await goodsNFTContract.methods.getTotalSupply().call()));
                    setMaxSupply(Number(await goodsNFTContract.methods.getMaxSupply().call()));


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
                    <div style={{ flex: true }}>
                        <h3>Watch Minter</h3>
                        <h6 style={{ paddingBottom: 10 }}>Logged in as: {account}</h6>
                        <FlexboxGrid>
                            <FlexboxGrid.Item colspan={5}>
                                <img src={ifpsToPicture.get("ipfs://bafkreibv7ugie5cj7xpl3hk6c3rrmk3kgtgkex4czyccrywsy6bhmzcire")}
                                    width={350} height={250} />
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={18}>
                                <Panel header="Nice Watch!" bordered >
                                <h6 style={{ paddingBottom: 10 }}>Price: {nftPrice}</h6>
                                <h6 style={{ paddingBottom: 10 }}>Total Supply: {maxSupply}</h6>
                                <h6 style={{ paddingBottom: 10 }}>Amount Sold: {totalSupply}</h6>
                                <Progress.Line percent={totalSupply / maxSupply * 100} showInfo={false} />
                                <h8 style={{ paddingTop: 30 }}>A clock, or a timepiece, is a device used to measure and indicate time. The clock is one of the oldest human inventions, meeting the need to measure intervals of time shorter than the natural units such as the day, the lunar month, and the year. Devices operating on several physical processes have been used over the millennia. </h8>
    
                                </Panel>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                        <div style={{ flexDirection: 'row' }}>

                            <div>

                            </div>
                        </div>

                    </div>
                    <Button appearance="primary" onClick={() => handleCreateNFT()} style={{ marginTop: 10 }}>Buy Watch</Button>
                </div>

            </div>
        );
    }


}

export default WatchMinter;

