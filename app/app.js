import React from 'react'

const contract = require('truffle-contract');
const artifacts = require('../build/contracts/Simple.json');

const setup = () => {
  const Simple = contract(artifacts);
  Simple.setProvider(window.web3.currentProvider);
  Simple.deployed().then(simple => {
    const acts = web3.eth.accounts;
    const balances = () => 
      acts.forEach(act => {
        console.log(act, simple.kwhBalances[act]);
      })

    balances();
    simple.generateForAccount(100, acts[0]).then(txn => {
      console.log('txn', txn);
      balances();
    })
  })
}

const App = () => {
  setup();
  return (<div>check the console</div>);
}

export default App
