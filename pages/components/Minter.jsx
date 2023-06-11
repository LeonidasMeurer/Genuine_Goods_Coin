import React, { useState, useEffect } from 'react';
import { Button, Panel, FlexboxGrid, Progress } from 'rsuite';
import { ifpsToPicture, loadAccount } from '../Web3Client.js';


const Minter = ({ price, maxSupply, totalSupply, description, headline, ifps, title }) => {


/*     const [totalSupply, setTotalSupply] = useState(null);
    const [maxSupply, setMaxSupply] = useState(null);
    const [nftPrice, setNftPrice] = useState(null); */
    const [account, setAccount] = useState(null);


    useEffect(() => {
        const setData = async () => {
                /* setNftPrice(Number(await contract.methods.getPrice().call()));
                setTotalSupply(Number(await contract.methods.getTotalSupply().call()));
                setMaxSupply(Number(await contract.methods.getMaxSupply().call())); */
                setAccount(await loadAccount())
        }
        setData();
    }, []);

    /* const handleCreateNFT = async () => {
        console.log(contract)
        if (contract) {
            try {
                console.log("NFT Address:", contract._address)
                

                const price = Number(await contract.methods.getPrice().call());

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
 */
    {
        return (
            <div>
                <div>
                    <h3>{title}</h3>
                    <h6 style={{ paddingBottom: 10 }}>Logged in as: {account}</h6>
                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={5}>
                            <img src={ifpsToPicture.get(ifps)}
                                width={350} height={250} />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={18}>
                            <Panel header={headline} bordered >
                                <h6 style={{ paddingBottom: 10 }}>Price: {price} wei</h6>
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
            </div>
        );
    }
}

export default Minter;

