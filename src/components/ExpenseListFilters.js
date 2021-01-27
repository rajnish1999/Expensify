import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate  } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused}));
    }

    render(){
        return (

            <div>
                <input 
                    type="text" 
                    value = {this.props.filters.text} 
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }} 
                />

                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if(e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount());
                        }else{
                            this.props.dispatch(sortByDate());
                        }
                    }}
                >
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}  
                    onDatesChange={this.onDatesChange} 
                    focusedInput={this.state.calendarFocused} 
                    onFocusChange={this.onFocusChange} 
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const ConnectedExpenseListFilters = connect((state) => {
    return {
        filters: state.filters
    }
})(ExpenseListFilters)

export default ConnectedExpenseListFilters;