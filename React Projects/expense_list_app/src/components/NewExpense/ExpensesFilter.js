import React, { useState } from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select onChange={filterChangeHandler}>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
