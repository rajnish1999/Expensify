import React from 'react';
import {NavLink} from 'react-router-dom';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;