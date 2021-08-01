import React from 'react';
import TransactionAppManager from './TransactionAppManager';

class TransactionApp extends React.Component {
    state = {
        latest_transaction_number : 10000,
        transactions: [

        ],
        limit_recents : 5,
        editItem: null
    }

    addTransaction = (newTransaction) => {
        this.setState({
            latest_transaction_number: this.state.latest_transaction_number + 1
        });
        newTransaction.transactionNumber = this.state.latest_transaction_number

        let transactionsCopy = [...this.state.transactions];
        transactionsCopy.push(newTransaction);

        this.setState({
            transactions: transactionsCopy
        })
    }
    deleteTransaction = (transaction) => {
        let transactionsCopy = [...this.state.transactions];

        transactionsCopy = transactionsCopy.filter(i => i.transactionNumber !== transaction.transactionNumber)

        this.setState({
            transactions: transactionsCopy
        });
    }

    updateTransaction= (transaction) => {
        let transactionsCopy = [...this.state.transactions];

        let index = transactionsCopy.findIndex(i => i.transactionNumber === transaction.transactionNumber);
        transactionsCopy[index] = transaction;

        this.setState({
            transactions: transactionsCopy,
            editItem: null
        });
    }

    editTransaction= (transaction) => {
        this.setState({
            editItem: transaction
        });
    }
    render() {
        return (
            <div>
                <TransactionAppManager editItem={this.state.editItem} transactions={this.state.transactions} addTransaction={this.addTransaction} updateTransaction={this.updateTransaction} deleteTransaction={this.deleteTransaction} editTransaction={this.editTransaction}/>
            </div>
        );
    }
}
export default TransactionApp;