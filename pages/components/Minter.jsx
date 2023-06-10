import React from 'react';
import { Button } from 'rsuite';


function Minter ({contract, account, tokenURI}) {

    const handleCreateNFT = async () => {
        if (contract && account) {
          try {
            const newTokenID = await contract.methods.mintNFT(account, tokenURI).send({ from: account });
            console.log(account, newTokenID)
            alert("NFT created successfully!");
          } catch (error) {
            console.error(error);
            alert("Failed to create NFT");
          }
        }
      };

    {
        return (
                <Button onClick={handleCreateNFT}>Mint</Button>
        );
    }
}

export default Minter;