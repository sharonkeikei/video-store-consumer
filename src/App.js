import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Search from './components/Search';
import Library from './components/Library';
import Customers from './components/Customers';
import CustomerDetail from './components/CustomerDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
          <li class="nav-item active">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item active">
            <Link to="/search">Search</Link>
          </li>
          <li class="nav-item active">
            <Link to="/library">Library</Link>
          </li>
          <li class="nav-item active">
            <Link to="/customers">Customers</Link>
          </li>
          <li class="nav-item active">
            <Link to="/customerdetail">Customer Detail</Link>
          </li>
        </ul>
        </nav>
        <div className="">
          <nav className="">
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route path="/customers" component={Customers} />
            <Route path="/customerdetail" component={CustomerDetail} />
          </nav>
          </div>
      </div>
      </Router>
    
    );
  }
}

export default App;
