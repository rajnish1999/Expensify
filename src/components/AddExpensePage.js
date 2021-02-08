import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add expense page</h1>
        <ExpenseForm 
            onSubmitFunc = {(expense) => {
                props.dispatch(startAddExpense(expense));
                props.history.push('/')
            }}
        />
    </div>
)

const ConnectedAddExpensePage =connect()(AddExpensePage);

export default ConnectedAddExpensePage;