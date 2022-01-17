import React from 'react';
//style
import './NewExpense.css';
//components
import ExpenseForm from './ExpenseForm';

function NewExpense() {
    return (
        <div className='new-expense'>
            <ExpenseForm />
        </div>
    )
}

export default NewExpense
