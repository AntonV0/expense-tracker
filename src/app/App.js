import Transactions from '../features/transactions/Transactions';
import Budgets from '../features/budgets/Budgets';
import React from 'react';
import '../index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
        <Budgets />
        <Transactions />
      </header>
    </div>
  );
}

export default App;
