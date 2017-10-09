import React, { Component } from "react";

import MovieListItem from "./MovieListItem";
import movies from "./movies.json";

class MovieList extends Component {
  render() {
    return <ul>{movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}</ul>;
  }
}

export default MovieList;
