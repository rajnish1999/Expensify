import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        add expense page
        <ExpenseForm 
            onSubmitFunc = {(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/')
            }}
        />
    </div>
)

const ConnectedAddExpensePage =connect()(AddExpensePage);

export default ConnectedAddExpensePage;