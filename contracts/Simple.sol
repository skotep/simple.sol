pragma solidity ^0.4.13;

contract Simple {

    mapping(address => uint) public kwhBalances;

    function Simple() {
    }

    function sendToAccount(uint kwhVolume, address account)
    {
      require(account != 0);
      require(kwhVolume > 0);

      kwhBalances[account] += kwhVolume;
      kwhBalances[msg.sender] -= kwhVolume;
    }

    function generateForAccount(uint volume, address account)
    {
      require(account != 0);
      require(volume > 0);
      kwhBalances[account] += volume;
    }

    function consumeForAccount(uint volume, address account)
    {
      require(account != 0);
      require(volume > 0);
      kwhBalances[account] -= volume;
    }
}
