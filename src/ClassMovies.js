import React from "react";
import MoviesComponent from "./MoviesComponent";

class ClassMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        // ...
        {
          "title": "Avengers: Age of Ultron",
          "year": 2015,
          "cast": [
            "Robert Downey, Jr.",
            "Chris Evans",
            "Chris Hemsworth",
            "Mark Ruffalo"
          ],
          "genres": [
            "Action"
          ]
        },
        // ...
        {
          "title": "The Avengers",
          "year": 2012,
          "cast": [
            "Robert Downey, Jr.",
            "Chris Evans",
            "Mark Ruffalo",
            "Chris Hemsworth",
            "Scarlett Johansson",
            "Jeremy Renner",
            "Tom Hiddleston",
            "Clark Gregg",
            "Cobie Smulders",
            "Stellan Skarsgård",
            "Samuel L. Jackson"
          ],
          "genres": [
            "Superhero"
          ]
        },
        // ...
      ]
    };
  }

  render() {
    return <MoviesComponent movies={this.state.movies} />;
  }
}

export default ClassMovies;
