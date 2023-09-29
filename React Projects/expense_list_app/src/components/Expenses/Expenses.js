import React from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import "./Expenses.css";
import Card from "./Card";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterChange, setFilterChange] = React.useState("2020");
  const newFilterExpense = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filterChange;
  });

  function filterChangeHandler(filterValue) {
    setFilterChange(filterValue);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterChange}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={newFilterExpense} />
        <ExpensesList expenses={newFilterExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
