import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
    console.log(props);
    return  (
        <div>
            <Link to={`/edit/${props.expense.id}`}>
                <h3>{props.expense.description}</h3>
            </Link>
            <p>amount:{props.expense.amount}</p>
            <p>createdAT: {props.expense.createdAt}</p>
            
        </div>
    )
}

export default ExpenseListItem