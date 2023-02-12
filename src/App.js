import logo from './logo.svg';
import './App.css';
import React from 'react';
import Register from './Registration';
import Header from './Header';
import CustomerDashboard from './CustomerDashboard';
class App extends React.Component{
  render(){
    return(
    <div>
      <Header/>
      <CustomerDashboard/>
    </div>
    )
  } 
}

export default App;
