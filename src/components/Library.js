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
        console.log(apiMovieList);
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
        // TODO: add onClickCallBack for selecting the movie
        // movieClickCallback={movieClickCallback}
        // action={"Select Movie"} 
      />
    )
  });

  return (
    <div className="container">
      <h3 className='title'>Browse all the movies</h3>
      <div>
        {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
      </div>
      {libraryComponent}
    </div>
  )
}

Library.propTypes = {
  library: PropTypes.array.isRequired,
  movieClickCallback: PropTypes.func.isRequired
}

export default Library;