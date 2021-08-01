import TransactionTableRow from './TransactionTableRow'

const TransactionTable = (props) => {
    const tableDisplay = props.transactions.map(transaction => (
        <TransactionTableRow transaction={transaction}  editTransaction={props.editTransaction} deleteTransaction={props.deleteTransaction}/>
    ));

    return (
        <table>
            {tableDisplay}
        </table>
    )
}

export default TransactionTable