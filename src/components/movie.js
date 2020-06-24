import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';

const Movie = (props) => {
  
  
  return (
    <div className="container card-list">
    <section className="card">
      <div className="card--image">
        <img src={props.image_url} alt={props.title}/>
      </div>
      <p className="card--title">{props.title}</p>
      <p>{props.overview}</p>
      <p>Release date: {props.release_date}</p>
      <button 
          className="btn btn-primary" 
          onClick={() => {props.onClickCallBack(props)} }
          >
          Select Movie
      </button>
    </section>
  </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number.isRequired,
  // movieClickCallback: PropTypes.func.isRequired,
  // action: PropTypes.string.isRequired,
}
export default Movie;