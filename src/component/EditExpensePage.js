import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../store/actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => (
  <div>
    <ExpenseForm 
      expense={props.expense}
      onSubmit={(expense) => {
        // Dispatch the action to edit the id
        props.dispatch(editExpense(props.expense.id, expense));

        // Redirect the dashboard
        props.history.push('/');
      }}
    />
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);