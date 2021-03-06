import './Search.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './movie';
import SearchResult from './SearchResult';


const Search = ({baseUrl, onClickCallBack, addToLibrary}) => {
  //state - input query, movies
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [libraryMovieList, setLibraryMovieList] = useState([]);
  const [ flash, setFlash ] = useState("");


  useEffect(() => {
    updateMovie();
  },[]);

  
  const handleChange = (event) => {
    event.preventDefault();
    // setQuery(event.target.value);
    updateMovie();
  }

  const updateMovie = () => {
    if (query !== undefined && query !== null && query !== "") {
      let libraryList = [];
      let movieList = [];

      axios.get('/movies')
        .then((response) => {
          const movieList = response.data.filter(movie => {
            const searchQuery = query !== undefined && query !== null ? query.toLowerCase() : ""
            return movie.title.toLowerCase().includes(query.toLowerCase())
          });
          axios.get(baseUrl+'movies?query=<'+ query+'>')
          .then((response) => {
            const apiMoviesList = response.data;
            setMovies(apiMoviesList);
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
          setLibraryMovieList(movieList);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
        // setQuery("")
    } else {
      setLibraryMovieList([])
      setMovies([]);
    }
  }

  const libraryResultComponent = libraryMovieList.map((movie, i) => {
    return (
      <Movie
        key={movie.external_id}
        {...movie}
        onClickCallBack={onClickCallBack} 
        action={"Select Movie"}
      />
    )
  });


  const SearchComponent = movies.map((movie, i) => {
    return (
      <SearchResult
        key={movie.external_id}
        {...movie}
        addToLibrary={addToLibrary}
        action={"Add Movie"}
        updateMovie={updateMovie}
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