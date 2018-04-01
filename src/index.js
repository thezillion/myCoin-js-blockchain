import { Blockchain, Transaction } from './chain';
import './index.scss';

let myCoin = new Blockchain();

function addTransaction(fromAddress, toAddress, amount) {
	myCoin.createTransaction(new Transaction(fromAddress, toAddress, amount));
}

setInterval(function() {
	myCoin.minePendingTransactions();
	document.getElementById('root').innerHTML = (JSON.stringify(myCoin));
}, 5000);


document.getElementById('addTransBtn').addEventListener('click', function() {
	addTransaction(document.getElementById('from_addr').value, document.getElementById('to_addr').value, document.getElementById('amount').value);
});


addTransaction('test-address-1', 'test-address-2', 100);
addTransaction('test-address-2', 'test-address-1', 50);