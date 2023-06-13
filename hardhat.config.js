require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const NODE_HTTP_URL = process.env.NODE_HTTP_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      forking: {
        url: NODE_HTTP_URL
      },
    },
  },
};