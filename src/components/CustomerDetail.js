import './CustomerDetail.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

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

  const customerCheckoutListComponent = checkoutList.map((rental, i) => {
    return (
      <tr key={ i }>
        <td>{ rental.title }</td>
        <td>{ rental.checkout_date }</td>
        <td>{ rental.due_date }</td>
        <td>{ rental.returned ? "RETURNED" : "CHECKED-OUT" }</td>
      </tr>
    )
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
              <th></th>
            </tr>
          </thead> 
          <tbody>{customerCheckoutListComponent}</tbody>
        </table>
        </div>
      
  
      
    </div>
  )
}

export default CustomerDetail;