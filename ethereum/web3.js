import Web3 from 'web3';
import window from 'global'

let web3;
const network = "http://127.0.0.1:8545";


if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(network);
  web3 = new Web3(provider);
}

export default web3;