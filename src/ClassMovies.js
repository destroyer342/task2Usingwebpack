import React from "react";
import MoviesComponent from "./MoviesComponent";

class ClassMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: "the Lord of the Rings", year: "2003" },
        { title: "Spiderman", year: "2021" },
        { title: "Ghostbuster", year: "1984" },
        { title: "Avengers: Infinity War", year: "2018" },
        { title: "The Shining", year: "1980" }
      ]
    };
  }

  render() {
    return <MoviesComponent movies={this.state.movies} />;
  }
}

export default ClassMovies;
