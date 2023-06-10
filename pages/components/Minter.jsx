import React, { useState, useEffect } from 'react';
import { Form, ButtonToolbar, Button, Panel, FlexboxGrid, Progress } from 'rsuite';
import Header from './Header'
import { ifpsToPicture } from './ListedForSale';


const Minter = ({contract, account, ifps, description}) => {

    // const [web3, setWeb3] = useState(null);
    // const [marketContract, setMarketContract] = useState(null);
    // const [account, setAccount] = useState("");
    const [totalSupply, setTotalSupply] = useState(null);
    const [maxSupply, setMaxSupply] = useState(null);
    const [nftPrice, setNftPrice] = useState(null);

    // useEffect(() => {
    //     const loadWeb3 = async () => {
    //         if (window.ethereum) {
    //             window.web3 = new Web3(window.ethereum);
    //             await window.ethereum.enable();
    //             setWeb3(window.web3);
    //         }
    //     };

    //     loadWeb3();
    // }, []);

    // useEffect(() => {
    //     const loadContract = async () => {
    //         try {
    //             const networkId = await web3.eth.net.getId();
    //             const deployedNetwork = contract.networks[networkId];
    //             const instance = new web3.eth.Contract(
    //               contract.abi,
    //                 deployedNetwork && deployedNetwork.address
    //             );
    //             setContract(instance);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     if (web3) {
    //         loadContract();
    //     }
    // }, [web3]);

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

    // useEffect(() => {
    //     const loadAccount = async () => {
    //         const accounts = await web3.eth.getAccounts();
    //         setAccount(accounts[0]);
    //     };

    //     if (web3) {
    //         loadAccount();
    //     }
    // }, [web3]);

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
        if (contract) {
            try {
                console.log("NFT Address:", contract._address)
                

                const price = Number(await contract.methods.getPrice().call())
                // const contractData = await goodsNFTContract.methods.getContractData().call();
                // console.log(Number(contractData.methods.mintPrice));


                console.log(contract.methods.totalSupply());

                await contract.methods.mintNFT(
                    account,
                    ifps)
                    .send({ from: account, value: price });

                    setNftPrice(await contract.methods.getPrice().call());
                    setTotalSupply(Number(await contract.methods.getTotalSupply().call()));
                    setMaxSupply(Number(await contract.methods.getMaxSupply().call()));


            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    };


    {
        return (
            <div>
                    <div style={{ flex: true }}>
                        <h3>Prada Minter</h3>
                        <h6 style={{ paddingBottom: 10 }}>Logged in as: {account}</h6>
                        <FlexboxGrid>
                            <FlexboxGrid.Item colspan={5}>
                                <img src={ifpsToPicture.get(ifps)}
                                    width={350} height={250} />
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={18}>
                                <Panel header="Sure fits alot of stuff in there!" bordered >
                                <h6 style={{ paddingBottom: 10 }}>Price: {nftPrice}</h6>
                                <h6 style={{ paddingBottom: 10 }}>Total Supply: {maxSupply}</h6>
                                <h6 style={{ paddingBottom: 10 }}>Amount Sold: {totalSupply}</h6>
                                <Progress.Line percent={totalSupply / maxSupply * 100} showInfo={false} />
                                <h8 style={{ paddingTop: 30 }}>{description}</h8>
    
                                </Panel>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                        <div style={{ flexDirection: 'row' }}>

                            <div>

                            </div>
                        </div>

                    </div>
                    <Button appearance="primary" onClick={() => handleCreateNFT()} style={{ marginTop: 10 }}>Buy</Button>
                </div>
        );
    }


}

export default Minter;

