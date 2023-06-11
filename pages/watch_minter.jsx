import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Button } from 'rsuite'

import { loadGoodsNFTContract, createWatchNFT, getWatchPrice, getWatchTotalSupply, getWatchMaxSupply } from './Web3Client';

import Header from './components/Header'
import Minter from './components/Minter'


const ClockMinter = () => {


    const [totalSupply, setTotalSupply] = useState(null);
    const [maxSupply, setMaxSupply] = useState(null);
    const [price, setPrice] = useState(null);

    useEffect(() => {
        const setData = async () => {
            setPrice(await getWatchPrice());
            setTotalSupply(await getWatchTotalSupply());
            setMaxSupply(await getWatchMaxSupply());
        }
        setData();
    }, []);

    const createNFT = async () => {
        await createWatchNFT()
        setPrice(await getWatchPrice());
        setTotalSupply(await getWatchTotalSupply());
        setMaxSupply(await getWatchMaxSupply());
    }

    {
        return (
            <div>
                <Header appearance="inverse" />
                <div style={{ paddingLeft: 30, paddingTop: 30 }} >
                    <Minter
                        ifps={"ipfs://bafkreibv7ugie5cj7xpl3hk6c3rrmk3kgtgkex4czyccrywsy6bhmzcire"}
                        description={"A clock, or a timepiece, is a device used to measure and indicate time. The clock is one of the oldest human inventions, meeting the need to measure intervals of time shorter than the natural units such as the day, the lunar month, and the year. Devices operating on several physical processes have been used over the millennia."}
                        title={"Watch Minter"}
                        headline={"Nice Watch!"}
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

export default ClockMinter;
