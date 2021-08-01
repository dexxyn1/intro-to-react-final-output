const TransactionTableRow = (props) => {
    const btnClickHandler = (e) => {
        console.log(e)
        if (e.target.defaultValue ==='edit') {
            editItem();
        } else {
            deleteItem();
        }
    }
    const deleteItem = (e) => {
        props.deleteTransaction(props.transaction)
    }
    const editItem = (e) => {
        props.editTransaction(props.transaction)
    }

    
    return (
        <tr>
            <td>{props.transaction.transactionNumber}</td>
            <td>{props.transaction.description}</td>
            <td>{props.transaction.amount}</td>
            <td>{props.transaction.transactionType}</td>
            <td><input type='button' value='edit' name='edit' onClick={btnClickHandler}></input></td>
            <td><input type='button' value='delete' name='delete' onClick={btnClickHandler}></input></td>
        </tr>
    )
}

export default TransactionTableRow