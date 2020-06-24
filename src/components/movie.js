import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'movie.css';

const Movie = (props) => {
  
  // TODO: get this onclickcallback function to work to select movie
  const onButtonClick = () => {
    props.movieClickCallback(props.id)
  }
  
  return (
    <div className="container">
    <section className="">
      <div className="">
        <img src={props.image_url} alt={props.title}/>
      </div>
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
  // movieClickCallback: PropTypes.func.isRequired,
  // action: PropTypes.string.isRequired,
}
export default Movie;