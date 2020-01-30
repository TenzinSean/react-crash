import React from 'react';
import PropTypes from  'prop-types';

function Movie(props) {
    return (
      <div>
          <img src={props.poster} alt={props.title} title={props.title}/>
          <div className="movie__data">
              <h3 className="movie__title">{props.title}</h3>
              <h5 className="movie__year">{props.year}</h5>
              <p className="movie__summary">{props.summary}</p>
          </div>
      </div>  
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;