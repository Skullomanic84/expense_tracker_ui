import React from 'react';
//component
import Card from '../Card/Card';
//styles
import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <Card>
            <div className='expense-item'>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <span>Date: {props.date.toLocaleDateString('en-US',{year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="expense-item__price">
                    <h3>${props.amount}</h3>
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem
