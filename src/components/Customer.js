import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Customer.css';

const Customer = (props) => {
  // console.log(props)

const url = "http://lorempixel.com/640/380/cats/random"
  return (
 
      <section className="card">
        <div className="">
          <img src={url+props.id} alt="customer_pic" className="customer-pic"/>
        </div>
        <div className="customer-info-text">
          <h5><strong>{props.name}</strong></h5>
          <p>{props.address}</p>
          <p>{props.city}, {props.state}, {props.postal_code}</p>
          <p>{props.phone}</p>
          <p>Member since: </p>
          <p> {new Date(props.registered_at).toDateString()}</p>
          <p>Account Credit: ${props.account_credit}</p>
          <p><strong>Movies Checked Out: {props.movies_checked_out_count}</strong></p>
          <button 
          className="btn btn-primary" 
          onClick={() => {props.onClickCallBack(props)} }
          >
          Select Customer
          </button>
        </div>
      </section>

  )
}

export default Customer;