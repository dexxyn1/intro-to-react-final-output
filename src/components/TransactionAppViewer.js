import TransactionTable from './TransactionTable'

const TransactionAppViewer = (props) => {
    const recentTransactions = [];
    const expenseTransactions = [];
    const incomeTransactions = [];

    props.transactions.forEach((transaction,index) => {
        if (index <= props.recent_limit) {
            recentTransactions.push(transaction)
        }
        if (transaction.transactionType.toLowerCase() === 'expense') {
            expenseTransactions.push(transaction)
        } else if (transaction.transactionType.toLowerCase() === 'income') {
            incomeTransactions.push(transaction)
        }
    });



    return (
        <div>
            <h2>Transaction List</h2>
            <h4>Recents:</h4>
            <TransactionTable transactions={recentTransactions}  editTransaction={props.editTransaction} deleteTransaction={props.deleteTransaction}/>
            <h4>Expenses:</h4>
            <TransactionTable transactions={expenseTransactions}  editTransaction={props.editTransaction} deleteTransaction={props.deleteTransaction}/>
            <h4>Income:</h4>
            <TransactionTable transactions={incomeTransactions}  editTransaction={props.editTransaction} deleteTransaction={props.deleteTransaction}/>
        </div>
    )
}

export default TransactionAppViewer