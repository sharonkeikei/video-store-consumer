import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'Movie.css';

const Movie = (props) => {
  
  const onButtonClick = () => {
    props.movieCallback(props.id)
  }
  
  return (
    <div className="card">
    <section className="card_content">
      <img src={props.image_url} alt={props.title}></img>
      <p className="card-text">{props.title}</p>
      <p className="card-text">{props.overview}</p>
      <p className="card-text">{props.release_date}</p>
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
  movieCallback: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
}
export default Movie;