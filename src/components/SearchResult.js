import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchResult.css';
import axios from 'axios';

const SearchResult = (props) => {
  
  const [ flash, setFlash ] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const addToLibrary = (movie) => {
    axios.post(('/movies'),{ 
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      image_url: movie.image_url,
      external_id: movie.external_id
    })
      .then((response) => {
        const flashMsg = movie.title + " is successfully added to the library! "
        setFlash(flashMsg);
        setTimeout(() => {
          setFlash(null)
        }, 2000);
        props.updateMovie();
      })
      .catch((error) => {
        setErrorMessage("Can't add the same movie twice!!");
        setTimeout(() => {
          setErrorMessage(null)
        }, 2000);
      });
  }

  return (
    <section className="card movie-card">
      <div className="card--image">
        <img src={props.image_url} alt={props.title}/>
      </div>
      <div className="card-description">
        <p className="card--title">{props.title}</p>
        <p className="card--overview">{props.overview}</p>
        <p>Release date: {props.release_date}</p>
      </div>
      <button 
          className="btn btn-primary" 
          onClick={() => {addToLibrary(props)} }
          >
          Add To Library
      </button>
    </section>
  );
};

SearchResult.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number.isRequired,
  addToLibrary: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
}
export default SearchResult;