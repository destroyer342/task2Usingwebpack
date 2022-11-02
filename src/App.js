import React from 'react'
import Emp from './Emp'
import Groceries from "./Groceries";
import ClassMovies from "./ClassMovies";
const App = () => {
  return (
    <div>
      <Emp/>
      <hr />
      <Groceries />
      <hr />
      {/* 3 class based prop */}
      <ClassMovies />
    </div>
  )
}
export default App;