pragma solidity ^0.5.2;

import "./token/ERC20/ERC20.sol";
import "./token/ERC20/ERC20Detailed.sol";
import "./token/ERC20/ERC20Mintable.sol";
import "./token/ERC20/ERC20Burnable.sol";

contract Coinflation is ERC20, ERC20Detailed, ERC20Mintable, ERC20Burnable {
    constructor (string memory name, string memory symbol, uint8 decimals)
        public
        ERC20Detailed(name, symbol, decimals)
    { }
}