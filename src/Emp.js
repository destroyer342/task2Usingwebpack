import React, { Component } from "react";
import data from "./data";
import "./App.css";

const Emp = () => {
  const { employeesData } = data;

  return (
    <div className="App">
        <h1>1.) Employee Data</h1><br/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Image</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((emp, i) => {
            return (
              <tr key={i}>
                <td
                  onMouseEnter={() => {
                    alert(
                      ` Name: ${emp.firstName} ${emp.lastName}
 Age: ${emp.age}
 Date Of Birth: ${emp.dob}                     
 Salary: ${emp.salary}                     
 Designation: ${emp.contactNumber}                     
 Department: ${emp.deparment}`
                    );
                  }}
                >
                  {emp.firstName} {emp.lastName}
                </td>
                <td>{emp.age}</td>
                <td>{emp.dob}</td>
                <td>{emp.salary}</td>
                <td>{emp.designation}</td>
                <td>
                  <img src={emp.imageUrl} width="50" height="50" alt="na" />{" "}
                </td>
                <td>{emp.deparment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Emp;
