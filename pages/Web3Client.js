import GoodsNFTBuild from 'contracts/GoodsNFT.json';
import PradaNFTBuild from 'contracts/PradaNFT.json';
import MarketBuild from 'contracts/Market.json';
import Web3 from 'web3';

let web3Instance;
let account;
export let goodsNFTContract;
export let pradaNFTContract;
export let marketContract;

export const ifpsToPicture = new Map();
ifpsToPicture.set(
    "ipfs://bafkreibv7ugie5cj7xpl3hk6c3rrmk3kgtgkex4czyccrywsy6bhmzcire",
    "https://bafybeibh7bttqvwxuadnatdgqwb57j3am6dmpn6bsomx2sypagdnl5os3i.ipfs.nftstorage.link/"
)
ifpsToPicture.set(
    "ipfs://bafkreigdeafb7xsb3z6unl3wpepscivp4tgzwzir3ii27kiapckxcdjoem",
    "https://bafybeiaef4ijjz4xq6k6w6gzguygubj4ktq3vlqjbpbudtgb35wck32yla.ipfs.nftstorage.link/"
)


const init = async () => {
    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            web3Instance = window.web3;
        }
    };
    await loadWeb3();

    const loadAccount = async () => {
        const accounts = await web3Instance.eth.getAccounts();
        account = accounts[0];
    };
    await loadAccount();

    const loadGoodsNFTContract = async () => {
        try {
            const networkId = await web3Instance.eth.net.getId();
            const deployedNetwork = GoodsNFTBuild.networks[networkId];
            goodsNFTContract = new web3Instance.eth.Contract(
                GoodsNFTBuild.abi,
                deployedNetwork && deployedNetwork.address
            );
        } catch (error) {
            console.error(error);
        }
    };
    await loadGoodsNFTContract();

    const loadPradaNFTContract = async () => {
        try {
            const networkId = await web3Instance.eth.net.getId();
            const deployedNetwork = PradaNFTBuild.networks[networkId];
            pradaNFTContract = new web3Instance.eth.Contract(
                PradaNFTBuild.abi,
                deployedNetwork && deployedNetwork.address
            );
        } catch (error) {
            console.error(error);
        }
    };
    await loadPradaNFTContract();


    const loadMarketContract = async () => {
        try {
            const networkId = await web3Instance.eth.net.getId();
            const deployedNetwork = MarketBuild.networks[networkId];
            marketContract = new web3Instance.eth.Contract(
                MarketBuild.abi,
                deployedNetwork && deployedNetwork.address
            );
        } catch (error) {
            console.error(error);
        }
    };
    await loadMarketContract();
}

init();

export const loadAccount = async () => {
    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            web3Instance = window.web3;
        }
    };
    await loadWeb3();

    const accounts = await web3Instance.eth.getAccounts();
    account = accounts[0];
    return account;
};

export const fetchNftsForSale = async () => {
    await init();
    const tokenList = [];
    const load = async () => {
        let tokenURI = "";
        const tokensOnSale = await marketContract.methods.getTokensOnSale().call();
        try {
            for (let i = 0; i < tokensOnSale.length; i++) {
                const token = await marketContract.methods.getListing(i + 1).call();

                if (token.token == goodsNFTContract._address) {
                    tokenURI = await goodsNFTContract.methods.tokenURI(Number(tokensOnSale[i].tokenId)).call();
                } else {
                    tokenURI = await pradaNFTContract.methods.tokenURI(Number(tokensOnSale[i].tokenId)).call();
                }

                tokenList.push({
                    "tokenId": Number(token.tokenId),
                    "seller": token.seller,
                    "token": token.token,
                    "price": Number(token.price),
                    "picture": ifpsToPicture.get(tokenURI),
                    "buy": "Buy Now!",
                    "number": i + 1,
                    "status": Number(token.status),
                })
            }

        } catch (error) {
            console.error(error);
            alert("Failed to load!");
        }
    }
    await load();
    return tokenList;
};

export const buyNft = async (listId, price) => {
    try {
        await marketContract.methods.buyToken(listId).send({ from: account, value: price });
    } catch (error) {
        console.error(error);
        alert("Failed to load!");
    }
}

export const loadPradaNFTContract = async () => {
    const load = async () => {
        try {
            const networkId = await web3Instance.eth.net.getId();
            const deployedNetwork = PradaNFTBuild.networks[networkId];
            pradaNFTContract = new web3Instance.eth.Contract(
                PradaNFTBuild.abi,
                deployedNetwork && deployedNetwork.address
            );
        } catch (error) {
            console.error(error);
        }
    }
    await load();
    return pradaNFTContract;
};

export const loadGoodsNFTContract = async () => {
    const load = async () => {
        try {
            const networkId = await web3Instance.eth.net.getId();
            const deployedNetwork = GoodsNFTBuild.networks[networkId];
            goodsNFTContract = new web3Instance.eth.Contract(
                MarketBuild.abi,
                deployedNetwork && deployedNetwork.address
            );
        } catch (error) {
            console.error(error);
        }
    }
    await load();
    return goodsNFTContract;
};

export const createWatchNFT = async () => {
    console.log(goodsNFTContract)
    if (goodsNFTContract) {
        try {
            console.log("NFT Address:", goodsNFTContract._address)


            const price = Number(await goodsNFTContract.methods.getPrice().call());

            console.log(goodsNFTContract.methods.totalSupply());

            await goodsNFTContract.methods.mintNFT(
                account,
                "ipfs://bafkreibv7ugie5cj7xpl3hk6c3rrmk3kgtgkex4czyccrywsy6bhmzcire")
                .send({ from: account, value: price });

            await goodsNFTContract.methods.getPrice().call();
            await goodsNFTContract.methods.getTotalSupply().call();
            await goodsNFTContract.methods.getMaxSupply().call();


        } catch (error) {
            console.error(error);
            alert("Failed to load!");
        }
    }
};

export const getWatchPrice = async () => {
    await init();
    return Number(await goodsNFTContract.methods.getPrice().call());
};
export const getWatchTotalSupply = async () => {
    await init();
    return Number(await goodsNFTContract.methods.getTotalSupply().call());
};
export const getWatchMaxSupply = async () => {
    await init();
    return Number(await goodsNFTContract.methods.getMaxSupply().call());
};

export const createPradaNFT = async () => {
    init();
    if (pradaNFTContract) {
        try {
            console.log("NFT Address:", pradaNFTContract._address)


            const price = Number(await pradaNFTContract.methods.getPrice().call());

            console.log(pradaNFTContract.methods.totalSupply());

            await pradaNFTContract.methods.mintNFT(
                account,
                "ipfs://bafkreigdeafb7xsb3z6unl3wpepscivp4tgzwzir3ii27kiapckxcdjoem")
                .send({ from: account, value: price });

            await pradaNFTContract.methods.getPrice().call();
            await pradaNFTContract.methods.getTotalSupply().call();
            await pradaNFTContract.methods.getMaxSupply().call();


        } catch (error) {
            console.error(error);
            alert("Failed to load!");
        }
    }
};

export const getPradaPrice = async () => {
    await init();
    return Number(await pradaNFTContract.methods.getPrice().call());
};
export const getPradaTotalSupply = async () => {
    await init();
    return Number(await pradaNFTContract.methods.getTotalSupply().call());
};
export const getPradaMaxSupply = async () => {
    await init();
    return Number(await pradaNFTContract.methods.getMaxSupply().call());
};

export const getTokenData = async (tokenId) => {
    await init();
    let token;
    let tokenURI;
    if (tokenId) {
        const load = async () => {
            token = await marketContract.methods.getListing(tokenId).call();

            if (token.token == goodsNFTContract._address) {
                tokenURI = await goodsNFTContract.methods.tokenURI(Number(token.tokenId)).call();
            } else {
                tokenURI = await pradaNFTContract.methods.tokenURI(Number(token.tokenId)).call();
            }
        }
    await load();
    }
    return tokenURI;
}




