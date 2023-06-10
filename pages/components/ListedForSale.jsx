import { Table, Button } from 'rsuite';
import React, { useState, useEffect } from 'react';

export const ifpsToPicture = new Map();
    ifpsToPicture.set(
        "ipfs://bafkreibv7ugie5cj7xpl3hk6c3rrmk3kgtgkex4czyccrywsy6bhmzcire",
        "https://bafybeibh7bttqvwxuadnatdgqwb57j3am6dmpn6bsomx2sypagdnl5os3i.ipfs.nftstorage.link/"
    )
    ifpsToPicture.set(
        "ipfs://bafkreigdeafb7xsb3z6unl3wpepscivp4tgzwzir3ii27kiapckxcdjoem",
        "https://bafybeiaef4ijjz4xq6k6w6gzguygubj4ktq3vlqjbpbudtgb35wck32yla.ipfs.nftstorage.link/"
    )

const { Column, HeaderCell, Cell } = Table;

const ListedForSale = ({ marketContract, goodsNFTContract, pradaNFTContract, account, tokensOnSale }) => {

    // let tokensOnSale = [];
    console.log(tokensOnSale)

    const [nftsForSale, setNftsForSale] = useState([]);
    
    const buyNft = async (listId, price) => {
        if (marketContract) {
            try {
                console.log(listId)
                console.log(await marketContract.methods.buyToken(listId).send({ from: account, value: price }))
            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    }


    const fetchNftsForSale = async () => {
        if (marketContract) {
            const tokenList = [];
            let tokenURI = "";
            try {
                for (let i = 0; i < tokensOnSale.length; i++) {
                    const token = await marketContract.methods.getListing(i + 1).call();

                    console.log(token.token);
                    console.log(goodsNFTContract._address)
                    if(token.token == goodsNFTContract._address) {
                        console.log(true)
                        tokenURI = await goodsNFTContract.methods.tokenURI(Number(tokensOnSale[i].tokenId)).call();
                    } else {
                        console.log(false)
                        tokenURI = await pradaNFTContract.methods.tokenURI(Number(tokensOnSale[i].tokenId)).call();
                    }


                    // const tokenURI = await goodsNFTContract.methods.tokenURI(Number(tokensOnSale[i].tokenId)).call();

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
                
            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    };


    if(!marketContract || !goodsNFTContract || !pradaNFTContract) {
        return <h1>loading...</h1>
    }

    const ImageCell = ({ rowData, dataKey, ...props }) => (
        <Cell {...props}>
            <div
                style={{
                    background: '#f5f5f5',
                    borderRadius: 6,
                    marginTop: 2,
                    overflow: 'hidden',
                    display: 'inline-block'
                }}
            >
                <img src={rowData.picture} width="40" height="35"/>
            </div>
        </Cell>
    );


    return (
        <div>
            <Button onClick={fetchNftsForSale}>Load NFTs for Sale!</Button>

            <Table
                height={400}
                data={nftsForSale}
                rowHeight={60}
            >
                <Column width={150} align="center" fixed>
                    <HeaderCell>Reference Number</HeaderCell>
                    <Cell dataKey="number" />
                </Column>

                <Column width={60} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="tokenId" />
                </Column>

                <Column width={400}>
                    <HeaderCell>Seller</HeaderCell>
                    <Cell dataKey="seller" />
                </Column>

                <Column width={400}>
                    <HeaderCell>Token</HeaderCell>
                    <Cell dataKey="token" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Picture</HeaderCell>
                    <ImageCell dataKey="picture" height={40} width={25}/>
                </Column>

                <Column width={80}>
                    <HeaderCell>Price</HeaderCell>
                    <Cell dataKey="price" />
                </Column>

                <Column width={80}>
                    <HeaderCell></HeaderCell>
                    <Cell>wei</Cell>
                </Column>

                <Column width={150}>
                    <HeaderCell>Status</HeaderCell>
                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <div style={{paddingTop: 10}}>
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
                <Column width={150}>
                    <HeaderCell></HeaderCell>

                    <Cell style={{ padding: '6px' }}>

                        {rowData => (
                            <Button href={`/${rowData.number}`}>
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
                                    <Button style={{background: "green", color: "white"}} onClick={() => buyNft(rowData.number, rowData.price)}>
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