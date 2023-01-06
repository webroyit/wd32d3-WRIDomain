// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// 'is' to inherit from ERC721 contract
contract ETHDaddy is ERC721 {
  uint256 public maxSupply;       // NFTs that can be created
  uint256 public totalSupply;     // NFTs that have been created
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

  // 'payable' for sending Ether
  function mint(uint256 _id) public payable {
    require(_id != 0);                        // Cannot be zero
    require(_id <= maxSupply);                // Less than or equal to max supply
    require(domains[_id].isOwned == false);   // Domain name should not be owned
    require(msg.value >= domains[_id].cost);  // Correct amount

    domains[_id].isOwned = true;
    totalSupply++;
    _safeMint(msg.sender, _id);
  }

  function getDomain(uint256 _id) public view returns (Domain memory) {
    return domains[_id];
  }

  function getBalance() public view returns (uint256) {
    // 'this' is the address of the contract
    // 'address()' to cast it to an address type
    return address(this).balance;
  }

}