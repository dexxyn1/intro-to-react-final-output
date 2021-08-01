import { useState } from 'react';
import TransactionAddForm from './TransactionAddForm';
import TransactionAppViewer from './TransactionAppViewer'


const TransactionAppManager = (props) => {
    const [transactions, setTransactions] = useState([
        {transactionNumber : 'transaction_number1',
        description : 'description1',
        amount : 'amount1',
        transactionType : 'transaction_type1',},
        {transactionNumber : 'transaction_number2',
        description : 'description2',
        amount : 'amount2',
        transactionType : 'transaction_type2',},
        {transactionNumber : 'transaction_number3',
        description : 'description3',
        amount : 'amount3',
        transactionType : 'transaction_type3',},
    ])

    const transaction_types = ['INCOME', 'EXPENSE']

    return(
        <div>
            <h2>Add/Edit Transaction</h2>
            <TransactionAddForm transaction_types={transaction_types} addTransaction={props.addTransaction}  updateTransaction={props.updateTransaction} editTransaction={props.editTransaction} editItem={props.editItem}/>
            <TransactionAppViewer transactions={props.transactions} recent_limit={5} editTransaction={props.editTransaction} deleteTransaction={props.deleteTransaction}/>
            {/* {transactionDisplay} */}
        </div>
    )
}

export default TransactionAppManager;