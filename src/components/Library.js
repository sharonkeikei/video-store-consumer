// import React from 'react';
import './Library.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Library = ({url}) => {
  const [ movieList, setMovieList ] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(url+'movies')
      .then((response) => {
        const apiMovieList = response.data;
        console.log(apiMovieList);
        setMovieList(apiMovieList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  },[]);
  
  return (
    <div className="">
      <h2>Library</h2>
    </div>
  )
}

export default Library;