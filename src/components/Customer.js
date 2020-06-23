import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Customers = (props) => {
  // TODO: get this onclickcallback function to work to select movie
  const onButtonClick = () => {
    props.customerClickCallback(props.id)
  }

  return (
    <div className="card">
    <section className="card_content">
      <div className="card">
        <img src="https://placedog.net/640/480?random" alt="customer_pic"/>
      </div>
      <p className="card-text">{props.name}</p>
      <p className="card-text">{props.address}</p>
      <p className="card-text">{props.city}, {props.state}, {props.postal_code}</p>
      <p className="card-text">{props.phone}</p>
      <p className="card-text">$ {props.account_credit}</p>
      <p className="card-text">Movies Checked Out: {props.movies_checked_out_count}</p>
    </section>
  </div>
  )
}

export default Customers;