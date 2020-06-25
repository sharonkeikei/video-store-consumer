import './Customers.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer';

const Customers = ({baseUrl, onClickCallBack}) => {
  const [ customersList, setCustomersList ] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(baseUrl+'customers')
      .then((response) => {
        const apiCustomersList = response.data;
        console.log(apiCustomersList);
        setCustomersList(apiCustomersList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  },[]);

  const customerComponent = customersList.map((customer, i) => {
    return (
      <Customer
        key={customer.external_id}
        {...customer}
        onClickCallBack={onClickCallBack} 
        action={"Select Customer"}
      />
    )
  });

  return (
    <div className=''>
      <h3 className='title'>List of Customers</h3>
      <div className='customers-list'>
        {customerComponent}
      </div>
    </div>
  )
}

export default Customers;