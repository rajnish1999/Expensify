import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value = {props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }} />
    </div>
)

const ConnectedExpenseListFilters = connect((state) => {
    return {
        filters: state.filters
    }
})(ExpenseListFilters)

export default ConnectedExpenseListFilters;