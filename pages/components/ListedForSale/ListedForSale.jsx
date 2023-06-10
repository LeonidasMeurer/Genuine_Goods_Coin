import { Table, Button } from 'rsuite';
import Market from "/home/leonidas/Documents/Genuine_Goods_Coin/ethereum/build/contracts/Market.json";
import React, { useState, useEffect } from 'react';



const { Column, HeaderCell, Cell } = Table;
const data = "";

const ListedForSale = ({ marketContract, goodsNFTContract, account }) => {

    let tokensOnSale = [];

    const handleCreateNFT = async () => {
        if (marketContract) {
            try {
                tokensOnSale = await marketContract.methods.getTokensOnSale().call();
                console.log(tokensOnSale)
            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    };

    const getNFT = async () => {
        if (marketContract) {
            try {
                console.log(account)

                // const test = await goodsNFTContract.methods.getNFT(1).call();
                const test2 = await marketContract.methods.listToken("0xabbda84259f33B286344AF1Aa95e284b5a58c728", 1, 1, {from: account}).call();
                // console.log(test.tokenURI, test.tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/"))
                console.log(test2)
            } catch (error) {
                console.error(error);
                alert("Failed to load!");
            }
        }
    };

    const data = async () => {
        tokensOnSale.forEach(element => {
            console.log(element.tokenId)
        });
    }

    return (
        <div>
            <Button onClick={handleCreateNFT}>Load Tokens on Sale!</Button>
            <Button onClick={getNFT}>Get Token!</Button>

            <Table
                height={400}
                data={data}
                onRowClick={rowData => {
                    console.log(rowData);
                }}
            >
                <Column width={60} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={150}>
                    <HeaderCell>First Name</HeaderCell>
                    <Cell dataKey="firstName" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Last Name</HeaderCell>
                    <Cell dataKey="lastName" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Gender</HeaderCell>
                    <Cell dataKey="gender" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Age</HeaderCell>
                    <Cell dataKey="age" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Postcode</HeaderCell>
                    <Cell dataKey="postcode" />
                </Column>

                <Column width={300}>
                    <HeaderCell>Email</HeaderCell>
                    <Cell dataKey="email" />
                </Column>
                <Column width={80} fixed="right">
                    <HeaderCell>...</HeaderCell>

                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
                                Edit
                            </Button>
                        )}
                    </Cell>
                </Column>
            </Table>
        </div>
    );
};

export default ListedForSale;