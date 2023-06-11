import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Button } from 'rsuite'

import { createPradaNFT, getPradaMaxSupply, getPradaPrice, getPradaTotalSupply, loadPradaNFTContract } from './Web3Client';

import Header from './components/Header'
import Minter from './components/Minter'


const DynamicMinter = () => {


    const [totalSupply, setTotalSupply] = useState(null);
    const [maxSupply, setMaxSupply] = useState(null);
    const [price, setPrice] = useState(null);

    useEffect(() => {
        const setData = async () => {
            setPrice(await getPradaPrice());
            setTotalSupply(await getPradaTotalSupply());
            setMaxSupply(await getPradaMaxSupply());
        }
        setData();
    }, []);

    const createNFT = async () => {
        await createPradaNFT()
        setPrice(await getPradaPrice());
        setTotalSupply(await getPradaTotalSupply());
        setMaxSupply(await getPradaMaxSupply());
    }

    {
        return (
            <div>
                <Header appearance="inverse" />
                <div style={{ paddingLeft: 30, paddingTop: 30 }} >
                    <Minter
                        ifps={"ipfs://bafkreigdeafb7xsb3z6unl3wpepscivp4tgzwzir3ii27kiapckxcdjoem"}
                        description={"The company started in 1913 by Mario Prada and his brother Martino as Fratelli Prada, a leather goods shop in Milan. Initially, the shop sold animal goods, imported English steamer trunks, and handbags. "}
                        title={"Prada Minter"}
                        headline={"Sure fits alot of stuff in there!"}
                        price={price}
                        maxSupply={maxSupply}
                        totalSupply={totalSupply}
                    />
                    <Button appearance="primary" onClick={() => createNFT()} style={{ marginTop: 10 }}>Buy</Button>
                </div>
            </div>
        );
    }
}

export default DynamicMinter;

