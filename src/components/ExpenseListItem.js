import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => {
    console.log(props);
    return  (
        <div>
            <h3>{props.expense.description}</h3>
            <p>amount:{props.expense.amount}</p>
            <p>createdAT: {props.expense.createdAt}</p>
            <button id={props.expense.id} onClick={(e) => {
                props.dispatch(removeExpense({id: props.expense.id}));
            }}>Remove</button>
        </div>
    )
}
const ConnectedExpenseListItem = connect()(ExpenseListItem)
export default ConnectedExpenseListItem