import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Customers = (props) => {
  // TODO: get this onclickcallback function to work to select movie
  const onButtonClick = () => {
    props.customerClickCallback(props.id)
  }

  return (
    <div className="container">
    <section className="">
      <div className="">
        <img src="http://lorempixel.com/640/380/cats/random" alt="customer_pic"/>
      </div>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.city}, {props.state}, {props.postal_code}</p>
      <p>{props.phone}</p>
      <p>Memeber since: {Date(props.registered_at)}</p>
      <p> Account Credit: ${props.account_credit}</p>
      <p>Movies Checked Out: {props.movies_checked_out_count}</p>
    </section>
  </div>
  )
}

export default Customers;