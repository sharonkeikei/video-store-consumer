import './CustomerDetail.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const CustomerDetail = ({baseUrl , customer}) => {
  const [checkoutList, setCheckOutList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getCustomer()
    returnMovie()
  },[]);


  const getCustomer = () => {
    axios.get(baseUrl+'customers/'+ customer.id)
      .then((response) => {
        const customerCheckoutList = response.data;
        setCheckOutList(customerCheckoutList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  const returnMovie = (movie) => {
    axios.post((baseUrl+'rentals/'+ movie +'/return'),{
      customer_id: customer.id,  
    })
    .then(() => {
      getCustomer(); 
    })
    .catch((error) => {
      setErrorMessage(error.message);
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
        <tr>"No check out from this customer yet!"</tr>
      )
    }
  });
  
  return (
    <div className="container">
      <h3>Customer Record</h3>
      <h5>{customer.name}</h5>
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