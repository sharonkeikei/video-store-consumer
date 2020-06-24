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
  const [ customer, setCustomer ] = useState("");
  const [ movie, setMovie ] = useState(null);
  // const [errorMessage, setErrorMessage] = useState(null);
  // let customerName = ""

  const selectCustomer = (customer) => {
    const customerName = customer.name
    setCustomer(customerName);
  }
  const selectMovie = (movie) => {
    const movieName = movie.title
    setMovie(movieName);
  }

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
        <p> Selected Customer: {customer}</p>
        <p> Selected Movie: {movie} </p>
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
              onClickCallBack={selectMovie}
            />
          </Route>
          <Route exact path="/customers">
            <Customers
              baseUrl={BASE_URL}
              onClickCallBack={selectCustomer} 
            />
          </Route>
          <Route exact path="/customerdetail">
            <CustomerDetail />
          </Route> 
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
