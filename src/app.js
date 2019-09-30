import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './store/selectors/expenses';
import { Provider } from 'react-redux';
import { addExpense } from './store/actions/expenses';
import { setTextFilter } from './store/actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill'}));
store.dispatch(addExpense({ description: 'Gas bill'}));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));