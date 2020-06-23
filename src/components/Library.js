import './Library.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';


const Library = ({baseUrl}) => {
  
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
        key={movie["id"]}
        title={movie["title"]}
        overview={movie["overview"]}
        image={movie["image_url"]}
        release_date={movie["release_date"]}
        // movieClickCallback={movieClickCallback}
      />
    )
  });

  return (
    <div className="">
      {libraryComponent}
    </div>
  )
}

Library.propTypes = {
  library: PropTypes.array.isRequired,
  movieClickCallback: PropTypes.func.isRequired
}

export default Library;