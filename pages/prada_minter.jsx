import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

import {  pradaNFTContract } from './Web3Client';

import Header from './components/Header'
import Minter from './components/Minter'


const DynamicMinter = () => {

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
                    contract={pradaNFTContract}
                    account={account}
                    ifps={"ipfs://bafkreigdeafb7xsb3z6unl3wpepscivp4tgzwzir3ii27kiapckxcdjoem"}
                    description={"The company started in 1913 by Mario Prada and his brother Martino as Fratelli Prada, a leather goods shop in Milan. Initially, the shop sold animal goods, imported English steamer trunks, and handbags. "}
                    title={"Prada Minter"}
                    headline={"Sure fits alot of stuff in there!"}
                    />
                </div>
            </div>
        );
    }


}

export default DynamicMinter;
