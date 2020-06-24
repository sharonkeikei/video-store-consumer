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
  const [ flash, setFlash ] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const selectCustomer = (customer) => {
    const selectedCustomer = customer
    setCustomer(selectedCustomer);
  }
  const selectMovie = (movie) => {
    const movieName = movie.title
    setMovie(movieName);
  }

  const makeRental = () => {
    const today = new Date();
    const dueDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    if (customer && movie) {
      axios.post((url+'rentals/'+ movie +'/check-out'),{
        customer_id: customer.id,
        due_date: dueDate
      })
        .then((response) => {
          const flashMsg = movie+ " is successfully checked out by "+ customer.name
          console.log(flashMsg);
          setTimeout(() => {
            setFlash(flashMsg);
          }, 3000);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
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
        <p> Selected Customer: {customer.name}</p>
        <p> Selected Movie: {movie} </p>
        <button 
          className="btn btn-primary" 
          onClick={() => {makeRental(customer, movie)} }
          >
          Make Rental
          </button>
      </div>
      { flash ? <p className="center-error-message alert alert-success">{ flash }</p> : '' }
      { errorMessage ? <p className="center-error-message alert alert-danger">{ errorMessage }</p> : '' }
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
