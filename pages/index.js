import React, { useState, useEffect } from 'react';
import { Form, ButtonToolbar, Button, SelectPicker } from 'rsuite';
import Web3 from 'web3';

// import GoodsNFT from "contracts/GoodsNFT.json";
// import PradaNFT from "contracts/PradaNFT.json";
// import Market from "contracts/Market.json";
import Header from './components/Header'

import { goodsNFTContract, pradaNFTContract, marketContract } from './Web3Client';


const Index = () => {

    const [tokenId, setTokenId] = useState("");
    const [listingId, setListingId] = useState("");
    const [tokensOnSale, setTokensOnSale] = useState([]);
    const [nftPrice, setNftPrice] = useState("");
    const [currentNftContract, setCurrentNftContract] = useState("");
    const [account, setAccount] = useState("");
    const [web3, setWeb3] = useState(null);


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
        const loadAccount = async () => {
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        };

        if (web3) {
            loadAccount();
        }
    }, [web3]);
    

    const putNFTForSale = async () => {
        if (marketContract) {
            try {
                console.log(nftPrice, tokenId)
                console.log(currentNftContract)

                if (currentNftContract == "Watch NFT") {
                    await goodsNFTContract.methods.approve(marketContract._address, tokenId).send({ from: account })
                    await marketContract.methods.listToken(goodsNFTContract._address, tokenId, nftPrice).send({ from: account })
                } else {
                    await pradaNFTContract.methods.approve(marketContract._address, tokenId).send({ from: account })
                    await marketContract.methods.listToken(pradaNFTContract._address, tokenId, nftPrice).send({ from: account })
                }
                
                // await pradaNFTContract.methods.approve(marketContract._address, tokenId).send({ from: account })
                // console.log(await marketContract.methods.listToken(goodsNFTContract._address, tokenId, nftPrice).send({ from: account }))
                // console.log(tokensOnSale)
            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    }

    const cancelNftSale = async () => {
        if (marketContract) {
            try {
                // console.log(nftPrice, tokenId)
                // await goodsNFTContract.methods.approve(marketContract._address, tokenId).send({ from: account })
                // // await goodsNFTContract.methods.setApprovalForAll(marketContract._address, true)
                // console.log(goodsNFTContract._address)
                console.log(await marketContract.methods.cancel(listingId).send({ from: account }))
                // tokensOnSale = await marketContract.methods.getTokensOnSale().call();
                console.log(tokensOnSale)
            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    }

    const data = [`Watch NFT`, 'Prada NFT'].map(
        item => ({ label: item, value: item })
      );

    // if (!account) {
    //     return (<></>)
    // }

    {
        return (
            <div>
                    <Header appearance="inverse" />
                    <div style={{paddingLeft: 30, paddingTop: 30}}>
                    <h3>Manage NFTs</h3>
                    <h6 style={{ paddingBottom: 20 }}>Log in as: {account}</h6>
                    <Form style={{ paddingBottom: 100 }}>
                        <Form.Group>
                            <Form.ControlLabel>TokenId</Form.ControlLabel>
                            <Form.Control type="number" onChange={(value) => setTokenId(value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Price</Form.ControlLabel>
                            <Form.Control type="number" onChange={(value) => setNftPrice(value)} />
                            <Form.HelpText tooltip>Price is in wei!</Form.HelpText>
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>NFT Contract Address</Form.ControlLabel>
                            <SelectPicker data={data} style={{ width: 300 }} onChange={(value) => setCurrentNftContract(value)}/>
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={() => putNFTForSale()}>List Token</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>

                    <Form>
                        <Form.Group controlId="name">
                            <Form.ControlLabel>Listing Number</Form.ControlLabel>
                            <Form.Control name="name" type="number" onChange={(value) => setListingId(value)} />
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="default" style={{ color: 'red' }} onClick={() => cancelNftSale()}>Cancel Listing</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>
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

export default Index;

