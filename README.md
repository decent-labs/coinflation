# Coinflation

ERC20 token *FOR THE PEOPLE*! Permissionless money to the n-th degree.

💵 Anyone can 💎 `mint` 💎 any number of tokens 💰

## It's Live!

Available on Ropsten @ `0xee70B92dCC35fcEfB2d51fC1ad08Ae2611439CBa`

View the token details here:
https://ropsten.etherscan.io/token/0xee70B92dCC35fcEfB2d51fC1ad08Ae2611439CBa

Code is verified here: https://ropsten.etherscan.io/address/0xee70B92dCC35fcEfB2d51fC1ad08Ae2611439CBa#code

Slightly better interaction experience available here:
https://oneclickdapp.com/uranium-honey/

## Understanding the codebase

`./contracts/Coinflation.sol` is where it all gets kicked off.

That root contract, which has exactly 0 custom logic in it, inherits from `ERC20`, `ERC20Detailed`, `ERC20Mintable`, and `ERC20Burnable` contracts which are all available in `./contracts/token/ERC20/`.

Pretty simple stuff here.

You can also `burn` tokens that belong to you, or that have been `approved` to you.

🤔 The next version should have permissionless `burn`ing too YOLO

## Develop

Clone it
```
$ git clone git@github.com:decentorgnization/coinflation
```

Customize it (or not) (you only need to set `NAME`, `SYMBOL`, `DECIMALS` for testing)
```
$ cp .env.example .env
```

Climb onto the shoulders of giants
```
$ yarn install
```

Test it
```
$ yarn test
```

## Deploy

To publicly deploy another instance of this contract (BUT WHY WOULD YOU NEED TO?!?!), configure your remote-or-local-node credentials in `.env`, optionally create a new `network` object in `truffle-config.js`, then

```
$ yarn run truffle migrate --network ropsten
```
OR

If you just want to deploy it locally, get yourself a blockchain going with

```
$ ganache-cli
```

and then in a new terminal pane

```
$ yarn run truffle migrate
```

## Acknowledgements

* Thanks to [@ZeppelinOrg](https://twitter.com/zeppelinorg) for 99% of the solidity
* Thanks to [@trufflesuite](https://twitter.com/trufflesuite) for 99% of the developer tooling
* Thanks to [@BenDiFrancesco](https://twitter.com/BenDiFrancesco) and [@ianlapham](https://twitter.com/ianlapham) for 100% of the idea

---

Made with 🖤 in Cleveland