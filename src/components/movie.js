import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './movie.css';

const Movie = (props) => {
  
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
          onClick={() => {props.onClickCallBack(props)} }
          >
          Select Movie
      </button>
    </section>
  );
};

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  image_url: PropTypes.string.isRequired,
  external_id: PropTypes.number.isRequired,
  onClickCallBack: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
}
export default Movie;