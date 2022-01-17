import React, { useState } from 'react';

//styles
import './ExpenseForm.css';

function ExpenseForm() {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    //handles title change
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    //handles amount change
    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    };

    //handles the date pick
    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    };


    return (
        <form>
           <div className="new-expenses__container">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" 
                    onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" 
                    min="0.01" 
                    step="0.01" 
                    onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" 
                     min="2019-01-01" 
                     max="2022-12-31" 
                     onChange={dateChangeHandler}/>
                </div>
           </div> 
           <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
           </div>
        </form>
    )
}

export default ExpenseForm
