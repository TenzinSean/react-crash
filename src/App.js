import React from 'react';
import Fuck from './Fuck';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.lt/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {this.state.isLoading ? "Loading...." : movies.map(movie => {
          console.log(movie);
          return <Movie 
                      key={movie.id}
                      title={movie.title} 
                      id={movie.id} 
                      summary={movie.summary} 
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                    />
        })}
      </div>
    )
  }
}

export default App;
