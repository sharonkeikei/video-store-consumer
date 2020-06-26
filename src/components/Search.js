import './Search.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

const Search = ({baseUrl}) => {
  //state - input query, movies
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const setErrorMessage = () => {

  }

  const setMessage = () => {

  }

  const handleChange = (event) => {

    event.preventDefault();

    if (query) {
      setQuery(event.target.value);
      axios.get(baseUrl+'movies?query=<'+query+'>')
        .then((response) => {
          const apiMoviesList = response.data;
          console.log(apiMoviesList);
          setMovies(apiMoviesList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  }

  const createMovie = (movieInfo) => {

  }

  const SearchComponent = movies.map((movie, i) => {
    return (
      <Movie
        key={movie.external_id}
        {...movie}
        // TODO: add onClickCallBack for selecting the movie
        // movieClickCallback={movieClickCallback}
        // action={"Select Movie"} 
      />
    )
  });

  return (
    <div className="container">
      <h3>Search A Movie</h3>
      <form className="form-inline" onSubmit={handleChange}>
        <input  className="form-control mr-sm-2" type="search" 
                placeholder="Search for a movie.." aria-label="Search" 
                value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      {SearchComponent}
    </div>
    
  )
}

export default Search;