import { ethers } from 'hardhat';
require('dotenv').config({
  path: '.env',
});

import { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } from './../constant';

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;

  const metadataURL = METADATA_URL;

  const cryptoDevContracts = await ethers.getContractFactory('CryptoDevs');

  const deployedCryptoDevsContract = await cryptoDevContracts.deploy(
    metadataURL,
    whitelistContract
  );

  console.log(
    'Crypto Devs Contract Address: ',
    deployedCryptoDevsContract.address
  ); 
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
