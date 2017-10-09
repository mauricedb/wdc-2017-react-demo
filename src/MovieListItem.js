import React, { Component } from "react";

class MovieListItem extends Component {
  render() {
    const { movie } = this.props;

    return <li>{movie.title}</li>;
  }
}

export default MovieListItem;
