# Status KO

This project doesn't works :( 

Error:
```
 Should take a flash loan and be able to return it:
     Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="Transaction reverted: function returned an unexpected amount of data", method="estimateGas", transaction={"from":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","dat
```

# learnweb3io_Flash-Loans_Aave-A
In this project you can find how how to take a Flash Loan from Aave. 

Is part of [Learnweb3.io](https://learnweb3.io/courses) Senior Developer Track (course: 💵 Borrow millions for free from Aave using Flash Loans)

[repo github] (https://github.com/LearnWeb3DAO/Flash-Loans)

# Learning

We are going to use two very intersting features of Hardhat:

-   **Mainnet Forking** which can simulate having the same state as mainnet, but it will work as a local development network. That way you can interact with deployed protocols and test complex interactions locally [more info](https://hardhat.org/hardhat-network/guides/mainnet-forking.html).

Only you need to include in hardhat.config.js:
```
 networks: {
    hardhat: {
      forking: {
        url: RPC_URL_PROVIDER,
      },
    },

```

-   **Impersonation**  that lets us send transactions on behalf of any address, even without their private key (you should use it with "Mainnet Forking" feature, not run in the real worl 😄)

## How do Flash Loans work?

PENDING