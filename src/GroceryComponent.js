import React, { Component } from "react";
import "./App.css";
const GroceriesComponent = ({ groceries }) => {
    return (
      <div className="App">
        <h1>2.) Groceries</h1><br/>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {groceries.map((g, i) => {
              return (
                <tr key={i}>
                  <td>{g.item}</td>
                  <td>{g.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default GroceriesComponent;
  