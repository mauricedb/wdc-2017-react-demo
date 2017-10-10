import React, { Component } from "react";

import MovieListItem from "./MovieListItem";
import movies from "./movies.json";

class MovieList extends Component {
  state = {
    movies: [] 
   };

  componentDidMount() {
    setTimeout(() => this.setState({ movies }), 2500);
  }


  render() {
    const movies = this.state.movies;

    return (
      <ul>
        {movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
      </ul>
    );
  }
}

export default MovieList;
