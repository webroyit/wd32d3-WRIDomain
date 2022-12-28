// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// 'is' to inherit from ERC721 contract
contract ETHDaddy is ERC721 {
  address public owner;

  // 'constructor' only run the code once
  constructor(string memory _name, string memory _symbol)
    ERC721(_name, _symbol) 
  { 
    // Code
    owner = msg.sender;
  }

}
