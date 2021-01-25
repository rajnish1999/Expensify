import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => <ExpenseListItem expense = {expense} key = {expense.id}/>)}
    </div>
);

const mapStateToProps = (state) => {
    // console.log(state);
    console.log(selectExpenses(state.expenses, state.filters));
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

const ConnectedExpenseList =  connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList;