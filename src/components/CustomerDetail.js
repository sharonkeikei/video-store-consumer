import './CustomerDetail.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const CustomerDetail = ({baseUrl , customer}) => {
  const [checkoutList, setCheckOutList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(baseUrl+'customers/'+ customer.id)
      .then((response) => {
        const customerCheckoutList = response.data;
        console.log(customerCheckoutList);
        setCheckOutList(customerCheckoutList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  },[]);
  // TODO: make the return Movie dynamically
  const returnMovie = (movie) => {
    axios.post((baseUrl+'rentals/'+ movie +'/return'),{
      customer_id: customer.id,
    })
  } 

  const customerCheckoutListComponent = checkoutList.map((rental, i) => {
    if (checkoutList.length > 0 ){
      return (
        <tr key={ i }>
          <td>{ rental.title }</td>
          <td>{ rental.checkout_date }</td>
          <td>{ rental.due_date }</td>
          <td>{ rental.status ? "RETURNED" : "CHECKED-OUT" }</td>
          <td>{ rental.status ? 
                "" : <button 
                  className="btn btn-primary" 
                  onClick={() => {returnMovie(rental.title)} }
                >
                Return
                </button> }</td>
        </tr>
      )
    } else {
      return (
        // TODO: make a message to show customer doesnt have rentals
        "No check out from this customer yet!"
      )
    }
  });
  
  return (
    <div className="container">
      <h3>Customer Record</h3>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Check Out Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Return?</th>
            </tr>
          </thead> 
          <tbody>{customerCheckoutListComponent}</tbody>
        </table>
        </div>
    </div>
  )
}

export default CustomerDetail;