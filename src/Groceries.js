import GroceriesComponent from "./GroceryComponent";
import React, { Component } from "react";

const Groceries = () => {
  let groceries = [
    { item: "Meat", price: "$10.00" },
    { item: "Rice", price: "$60.50" },
    { item: "Softdrinks", price: "$45.00" }
  ];
  return <GroceriesComponent groceries={groceries} />;
};

export default Groceries;
