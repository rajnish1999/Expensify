import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const editExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmitFunc={(expense) => {
                    props.dispatch(startEditExpense(props.match.params.id, expense));
                    props.history.push('/dashboard');
                    // props.history.go(0);
                }}
            />
            <button id={props.expense.id} onClick={(e) => {
                props.dispatch(startRemoveExpense({id: props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const ConnectedEditExpensePage = connect(mapStateToProps)(editExpensePage);

export default ConnectedEditExpensePage;