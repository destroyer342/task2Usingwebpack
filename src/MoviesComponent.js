import React from "react";
import "./App.css";
class MoviesComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>3 Movies</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Year</th>
          </tr>
          {this.props.movies.map((movie, i) => {
            return (
              <tr key={i}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default MoviesComponent;
