import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

import {  goodsNFTContract } from './Web3Client';

import Header from './components/Header'
import Minter from './components/Minter'


const ClockMinter = () => {

    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState("");

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

    {
        return (
            <div>
                <Header appearance="inverse" />
                <div style={{ paddingLeft: 30, paddingTop: 30 }} >
                    <Minter
                    contract={goodsNFTContract}
                    account={account}
                    ifps={"ipfs://bafkreibv7ugie5cj7xpl3hk6c3rrmk3kgtgkex4czyccrywsy6bhmzcire"}
                    description={"A clock, or a timepiece, is a device used to measure and indicate time. The clock is one of the oldest human inventions, meeting the need to measure intervals of time shorter than the natural units such as the day, the lunar month, and the year. Devices operating on several physical processes have been used over the millennia."}
                    title={"Watch Minter"}
                    headline={"Nice Watch!"}
                    />
                </div>

            </div>
        );
    }


}

export default ClockMinter;
