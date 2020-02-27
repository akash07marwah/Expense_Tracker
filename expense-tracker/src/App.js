import React from 'react';
import Header from './components/Header'
import './App.css'
import Balance from './components/Balance'
import IncomeExpenses from './components/incomeExpenses'
import TransList from './components/transList'
import AddTrans from './components/AddTrans'
import GlobalProvider from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
    < Header />
    <div className="container">
     <Balance />
      <IncomeExpenses />
      <TransList/>
      <AddTrans/>
     </div>
    </GlobalProvider>
    
  )
}

export default App;
