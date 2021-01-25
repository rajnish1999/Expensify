import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = (props) => {
    
    return  (
        <div>
            <h3>{props.expense.description}</h3>
            <p>amount:{props.expense.amount}</p>
            <p>createdAT: {props.expense.createdAT}</p>
        </div>
    )
}

export default ExpenseListItem