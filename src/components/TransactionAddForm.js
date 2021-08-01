import { useState, useEffect } from 'react';

const TransactionAddForm = (props) => {
    const [transactionNumber, setTransactionNumber] = useState('');
    const [description, setDecription] = useState('');
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState('INCOME');

    useEffect(() => {
        if (props.editItem) {
            setTransactionNumber(props.editItem.transactionNumber);
            setDecription(props.editItem.description);
            setAmount(props.editItem.amount);
            setTransactionType(props.editItem.transactionType);
        } else {
            setTransactionNumber('');
            setDecription('');
            setAmount(0);
            setTransactionType('INCOME');
        }
    }, [props.editItem]);

    const transactionTypesDisplay = props.transaction_types.map(transaction_type => (
        <option value={transaction_type}>{transaction_type}</option>
    ));

    const btnClickHandler = () => {
        if (props.editItem) {
            update();
        } else {
            addNewTransaction();
        }
    }

    const addNewTransaction = (e) => {
        let newTransaction = {
            description: description,
            amount: amount,
            transactionType: transactionType
        }

        props.addTransaction(newTransaction);
    }

    const update = () => {
        let updatedItem = {
            transactionNumber: transactionNumber,
            description: description,
            amount: amount,
            transactionType: transactionType
        }

        props.updateTransaction(updatedItem);
    }

        return (
            <div>
                {/* <label>Transaction Number: </label><input 
                    type = 'text' 
                    name = 'transactionNumber'
                    value = {transactionNumber} 
                    onChange={(e) => setTransactionNumber(e.target.value)}
                    readOnly = 'true'
                /> <br /> */}
                <label>Description: </label><input 
                    type = 'text'
                    name = 'description'
                    value = {description} 
                    onChange={(e) => setDecription(e.target.value)}
                /> <br />
                <label>Amount: </label><input 
                    type = 'number' 
                    name = 'amount'
                    value = {amount} 
                    onChange={(e) => setAmount(e.target.value)}
                /> <br />
                <label>Transaction Type: </label>
                <select 
                    type = 'text' 
                    name = 'transactionType'
                    value = {transactionType} 
                    onChange={(e) => setTransactionType(e.target.value)}>
                    {transactionTypesDisplay}
                </select> <br />
                <button onClick={btnClickHandler}>{props.editItem ? 'Edit Transaction' : 'Record Transaction'}</button>
            </div>
        )
}

export default TransactionAddForm;