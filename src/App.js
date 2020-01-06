import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import UserList from './UserList';
import Users from './Users';
import UserDetails from './UserDetails';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/user/:id" render={props => <UserDetails {...props} />} />
        </Switch>
       
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
