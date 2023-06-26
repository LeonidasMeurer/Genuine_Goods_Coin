This repo contains a Web3 app.

After pulling this repo, to make it work on your local PC, do the following:

Install the dependencies:
Go to the GENUINE_GOODS_COIN folder:
```
cd GENUINE_GOODS_FOLDER
npm install
```

Repeat the same in the Ethereum folder:
```
cd ethereum
npm install
```

After all the dependencies have been installed, you can start the node.js server, provided you have node installed.
If not, see: https://nodejs.org/en/download

To start the node server, go back to the GENUINE_GOODS_COIN folder:
And run the start command:
```
cd ..
npm start
```

Now you have to run the blockchain network, we are using ganache and truffle to do so:
You need both installed on your PC:
https://trufflesuite.com/truffle/
https://trufflesuite.com/ganache/ -- for Ganache the console version will do just fine!

After having installed both of these, go to your ethereum folder:
And start the ganache Network:
```
cd ethereum
ganache
```
Afterward connect to the network with truffle CLI:
```
truffle console
```

The truffle development CLI should open and connect itself to the ganache network.
Within the truffle development console run:
```
truffle(development)> migrate
```

This will compile and deploy the smart contracts to the ganache Network.

After having done that, you can open the website on 'localhost:3000':

To connect the test accounts ganache has generated for you, copy their private keys and import them into Metamask.
You can find them listed in the console you ran ganache in.

To install Metamask, see: https://metamask.io

After having the account connected to Metamask as well as Metamask being connected to the website, you are good to go.

Have fun!