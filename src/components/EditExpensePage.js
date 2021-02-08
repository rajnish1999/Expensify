import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';
 
const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmitFunc={(expense) => {
                    props.dispatch(editExpense(props.match.params.id, expense));
                    props.history.push('/');
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

const ConnectedEditExpensePage = connect(mapStateToProps)(EditExpensePage);

export default ConnectedEditExpensePage;