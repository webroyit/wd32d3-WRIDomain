// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// 'is' to inherit from ERC721 contract
contract ETHDaddy is ERC721 {
  uint256 public maxSupply;
  address public owner;

  // Model a domain
  // Define Domain
  struct Domain {
    string name;
    uint256 cost;
    bool isOwned;
  }

  mapping(uint256 => Domain) public domains;

  modifier onlyOwner() {
    require(msg.sender == owner, "Must be owner");
    _;
  }

  // 'constructor' only run the code once
  constructor(string memory _name, string memory _symbol)
    ERC721(_name, _symbol) 
  { 
    // Code
    owner = msg.sender;
  }

  // List domain
  // Only the owner to list domain
  function list(string memory _name, uint256 _cost) public onlyOwner {
    // Update total domain count
    maxSupply = maxSupply + 1;

    // Save the domain
    domains[maxSupply] = Domain(_name, _cost, false);
  }

  function getDomain(uint256 _id) public view returns (Domain memory) {
    return domains[_id];
  }

}