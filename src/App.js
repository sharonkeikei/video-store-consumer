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
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get(this.props.url+'movies')
      .then(res => {
        const movies = res.data;
        console.log(movies);
        this.setState({ movies });
      })
  }

  render() {
    return (
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
          <li className="nav-item active">
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route path="/customers" component={Customers} />
            <Route path="/customerdetail" component={CustomerDetail} />
          </Switch>
          </nav>
          </div>
      </div>
      </Router>
    
    );
  }
}
    App.propTypes = {
      url: PropTypes.string.isRequired,
    }

export default App;
