import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import "./Expenses.css";
import Card from "./Card";

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
        <ExpensesFilter onFilterChange={filterChangeHandler} />
        {newFilterExpense.length === 0 && <p>No Expenses Found</p>}
        {newFilterExpense.length > 0 &&
          newFilterExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
