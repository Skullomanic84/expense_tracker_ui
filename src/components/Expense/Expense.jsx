import React from 'react';

//Components
import ExpenseItem from '../ExpenseItem/ExpenseItem';

function Expense(props) {
    return (
        <div>
            <ExpenseItem 
            title={props.item[0].title}
            date={props.item[0].date}
            amount={props.item[0].amount}/>
        </div>
    )
}

export default Expense
