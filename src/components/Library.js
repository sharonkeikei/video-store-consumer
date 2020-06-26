import './Library.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';


const Library = ({baseUrl, onClickCallBack}) => {
  
  const [ movieList, setMovieList ] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(baseUrl+'movies')
      .then((response) => {
        const apiMovieList = response.data;
        setMovieList(apiMovieList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  },[]);

  const libraryComponent = movieList.map((movie, i) => {
    return (
      <Movie
        key={movie.external_id}
        {...movie}
        onClickCallBack={onClickCallBack} 
        action={"Select Movie"}
      />
    )
  });

  return (
    <div>
      <h3 className='title'>Browse all the movies</h3>
      <div className="movies-container card-list">
        <div>
          {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
        </div>
        {libraryComponent}
      </div>
    </div>
  )
}

Library.propTypes = {
  onClickCallBack: PropTypes.func.isRequired
}

export default Library;