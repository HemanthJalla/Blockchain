var Web3 = require('web3')

var web3 = new Web3('http://localhost:8545');


// console.log(web3)

// var Accounts = require('web3.eth.accounts')

// Passing in the eth or web3 package is necessary to allow retrieving chainId, gasPrice and nonce automatically
// for accounts.signTransaction().
// var accounts = new Accounts('http://localhost:8545');

web3.eth.getAccounts(function(err,res){
    if(!err) console.log(res)
})