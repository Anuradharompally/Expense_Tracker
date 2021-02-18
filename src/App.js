import './App.css';
import React from "react";
import Header  from "./Components/Header";
import Balance from './Components/Balance';
import IncomExpenses from './Components/IncomExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import {Transaction} from "./Components/Transaction";

function App() {
  return (
    <GlobalProvider>
       <Header />
        <div className="container">
          <Balance />
          <IncomExpenses />
          <TransactionList />
          <AddTransaction />
          
        </div>
    </GlobalProvider>
  );
}

export default App;
