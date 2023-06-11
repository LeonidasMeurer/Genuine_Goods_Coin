import { Table, Button } from 'rsuite';
import React, { useState, useEffect } from 'react';

import { fetchNftsForSale, buyNft } from '../Web3Client';

const { Column, HeaderCell, Cell } = Table;

const ListedForSale = () => {

    const [nftsForSale, setNftsForSale] = useState(undefined);

    const fetch = async () => {
        setNftsForSale(await fetchNftsForSale());
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
            <Button onClick={fetch}>Load NFTs for Sale!</Button>

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