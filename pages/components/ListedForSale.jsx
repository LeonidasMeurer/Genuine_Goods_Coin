import { Table, Button } from 'rsuite';
import Market from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/Market.json";
import React, { useState, useEffect } from 'react';
// import { Link } from '/home/leonidas/Documents/Genuine_Goods_Coin/routes.js';

export const ifpsToPicture = new Map();
    ifpsToPicture.set(
        "ipfs://bafkreibdw6zzjn3rs33hvuyxja6hrrb4vozdftu5pwyikplkblp2uyygz4",
        "https://bafkreiflyn5a5v4mkd4r5ll7bky32vjkafujks3ccwx5ppr5tdjthfx2qe.ipfs.nftstorage.link/"
    )
    ifpsToPicture.set(
        "ipfs://bafkreigdeafb7xsb3z6unl3wpepscivp4tgzwzir3ii27kiapckxcdjoem",
        "https://bafybeiaef4ijjz4xq6k6w6gzguygubj4ktq3vlqjbpbudtgb35wck32yla.ipfs.nftstorage.link/"
    )

const { Column, HeaderCell, Cell } = Table;
const data = "";

const ListedForSale = ({ marketContract, goodsNFTContract, account, tokensOnSale }) => {

    // let tokensOnSale = [];
    console.log(tokensOnSale)

    const [nftsForSale, setNftsForSale] = useState([]);
    

    const handleCreateNFT = async () => {
        if (marketContract) {
            try {
                console.log(goodsNFTContract._address)
                tokensOnSale = await marketContract.methods.getTokensOnSale().call();
                console.log(tokensOnSale)
                console.log(tokensOnSale.length)

            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    };

    const buyNft = async (listId, price) => {
        if (marketContract) {
            try {
                // await goodsNFTContract.methods.approve(marketContract._address, 2).send({ from: account })
                // // await goodsNFTContract.methods.setApprovalForAll(marketContract._address, true)
                // console.log(goodsNFTContract._address)
                console.log(listId)
                console.log(await marketContract.methods.buyToken(listId).send({ from: account, value: price }))
                // tokensOnSale = await marketContract.methods.getTokensOnSale().call();
                // console.log(tokensOnSale)
            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    }

    // const getNFT = async () => {
    //     if (marketContract) {
    //         try {
    //             console.log(account)

    //             // const test = await goodsNFTContract.methods.getNFT(1).call();
    //             const test2 = await marketContract.methods.listToken("0xabbda84259f33B286344AF1Aa95e284b5a58c728", 1, 1, {from: account}).call();
    //             // console.log(test.tokenURI, test.tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/"))
    //             console.log(test2)
    //         } catch (error) {
    //             console.error(error);
    //             alert("Failed to load!");
    //         }
    //     }
    // };

    // const data = async () => {
    //     tokensOnSale.forEach(element => {
    //         console.log(element.tokenId)
    //     });
    // }


    const fetchNftsForSale = async () => {
        if (marketContract) {
            const tokenList = [];
            try {
                for (let i = 0; i < tokensOnSale.length; i++) {
                    // const token = tokensOnSale[i]
                    console.log(Number(tokensOnSale[i].tokenId));
                    const tokenURI = await goodsNFTContract.methods.tokenURI(Number(tokensOnSale[i].tokenId)).call();
                    const token = await marketContract.methods.getListing(i + 1).call();

                    console.log(tokenURI)

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
                setNftsForSale(tokenList);
                console.log(nftsForSale);
                console.log(tokenList);

                console.log(tokensOnSale.length)

            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    };



    if (!marketContract) {
        return <h1>loading...</h1>
    }

    //   const data = [{
    //     "id": 1,
    //     "firstName": "Leo"
    //   }]

    const ImageCell = ({ rowData, dataKey, ...props }) => (
        <Cell {...props}>
            <div
                style={{
                    width: 40,
                    height: 40,
                    background: '#f5f5f5',
                    borderRadius: 6,
                    marginTop: 2,
                    overflow: 'hidden',
                    display: 'inline-block'
                }}
            >
                <img src={rowData.picture} width="40" />
            </div>
        </Cell>
    );


    return (
        <div>
            {/* <Button onClick={handleCreateNFT}>Load Tokens on Sale!</Button>
            <Button onClick={putNFTForSale}>Get Token!</Button> */}
            <Button onClick={fetchNftsForSale}>Load NFTs for Sale!</Button>


            <Table
                height={400}
                data={nftsForSale}
                onRowClick={rowData => {
                    console.log(rowData);
                }}
            >
                <Column width={60} align="center" fixed>
                    <HeaderCell>Reference Number</HeaderCell>
                    <Cell dataKey="number" />
                </Column>

                <Column width={60} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="tokenId" />
                </Column>

                <Column width={400}>
                    <HeaderCell>First Name</HeaderCell>
                    <Cell dataKey="seller" />
                </Column>

                <Column width={400}>
                    <HeaderCell>Last Name</HeaderCell>
                    <Cell dataKey="token" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Pcture</HeaderCell>
                    <ImageCell dataKey="picture" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Price</HeaderCell>
                    <Cell dataKey="price" />
                </Column>

                {/* <Column width={150}>
                    <HeaderCell>Postcode</HeaderCell>
                    <Cell dataKey="buy" />
                </Column> */}

                {/* <Column width={300}>
                    <HeaderCell>Email</HeaderCell>
                    <Cell dataKey="email" />
                </Column> */}
                <Column width={150}>
                    <HeaderCell>Status</HeaderCell>
                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <div>
                                {rowData.status == 0 ?
                                    <div style={{ color: "green" }}>OnSale!</div>
                                    :
                                    rowData.status == 1 ?
                                        <div style={{ color: "orange" }}>Sold!</div> :
                                        <div style={{ color: "red" }}>No Longer for sale!</div>
                                }
                            </div>
                        )}
                    </Cell>
                </Column>
                <Column width={100}>
                    <HeaderCell></HeaderCell>

                    <Cell style={{ padding: '6px' }}>

                        {rowData => (
                            <Button href={`/${rowData.tokenId}`}>
                                Show NFT!
                            </Button>
                        )}

                    </Cell>
                </Column>
                <Column width={150}>
                    <HeaderCell></HeaderCell>
                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <div>
                                {rowData.status == 0 ?
                                    <Button onClick={() => buyNft(rowData.number, rowData.price)}>
                                        Buy NFT!
                                    </Button>
                                    : <div/>

                                }
                            </div>
                        )}
                    </Cell>
                </Column>
            </Table>
        </div>
    );
};

export default ListedForSale;