import React, { useState, useEffect } from 'react';
import { Button, Panel, FlexboxGrid, Progress } from 'rsuite';
import { ifpsToPicture } from './ListedForSale';


const Minter = ({contract, account, ifps, description}) => {


    const [totalSupply, setTotalSupply] = useState(null);
    const [maxSupply, setMaxSupply] = useState(null);
    const [nftPrice, setNftPrice] = useState(null);

    useEffect(() => {
        const setData = async () => {
          if(contract) {
          setNftPrice(Number(await contract.methods.getPrice().call()));
          setTotalSupply(Number(await contract.methods.getTotalSupply().call()));
          setMaxSupply(Number(await contract.methods.getMaxSupply().call()));
        };
      }

        setData();
    }, [contract]);

    
  
    const handleCreateNFT = async () => {
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

