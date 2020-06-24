import React, { useState, useEffect } from 'react';
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

const App = ({url}) => {

  const BASE_URL = url

  return (
    <Router>
    <div>
      <nav className="topnav">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/library">Library</Link>
          <Link to="/customers">Customers</Link>     
          <Link to="/customerdetail">Customer Detail</Link>
      </nav>
      <div className='container'>
        <p> Selected Customer: </p>
        <p> Selected Movie: </p>
      </div>
      <div className="">
        <nav className="">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search">  
            <Search  
              baseUrl={BASE_URL}
            />
          </Route>        
          <Route exact path="/library">
            <Library
              baseUrl={BASE_URL}
              // movieList={movieList}
            />
          </Route>
          <Route exact path="/customers">
            <Customers
              baseUrl={BASE_URL}
            />
          </Route>
          <Route path="/customerdetail" component={CustomerDetail} />
        </Switch>
        </nav>
        </div>
      </div>
    </Router>
  );
}

    App.propTypes = {
      url: PropTypes.string.isRequired,
    }

export default App;
