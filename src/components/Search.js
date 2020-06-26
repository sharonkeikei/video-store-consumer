import './Search.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import SearchResult from './SearchResult';

const Search = ({baseUrl, onClickCallBack, addToLibrary}) => {
  //state - input query, movies
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [libraryMovieList, setLibraryMovieList] = useState([]);
  const [flash, setFlash] = useState("");

  useEffect(() => {
    updateMovie();
  },[]);

  const handleChange = (event) => {

    event.preventDefault();

    if (query && query !== "") {

      setQuery(event.target.value);

      axios.get(baseUrl+'movies?query=<'+query+'>')
        .then((response) => {
          const apiMoviesList = response.data;
          setMovies(apiMoviesList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  }

  const createMovie = (movieInfo) => {
    axios.post(baseUrl, movieInfo)
    .then((response) => {
      setMessage();
    })
    .catch((error) => {
      setErrorMessage();
    })
  }

  const libraryResultComponent = apiMoviesList.map((movie, i) => {
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
    <div className="container">
      <h3>Search For a Movie</h3>
      <form className="form-inline" onSubmit={handleChange}>
        <input  className="form-control mr-sm-2" type="search" 
                placeholder="Search for a movie.." aria-label="Search" 
                value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      { flash ? <p className="center-error-message alert alert-success">{ flash }</p> : '' }
      { errorMessage ? <p className="center-error-message alert alert-danger">{ errorMessage }</p> : '' }
      {libraryMovieList.length >= 1 ? 
        <div>
        <h3>Library Result</h3>
        <div className="movie_list">
          {libraryResultComponent}
        </div> 
        </div>: ""
      }
      {movies.length >= 1 ? 
        <div>
          <h3>External Result</h3>
          <h6>Add a movie that you love!</h6>
          <div className="movie_list">
            {SearchComponent}
          </div>
        </div> : ""
      }
      </div> 
  )
}

export default Search;