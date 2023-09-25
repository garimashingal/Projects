import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  const [filterChange, setFilterChange] = React.useState("");

  function filterChangeHandler(filterValue) {
    setFilterChange(filterValue);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChange={filterChangeHandler} />
        <p>{filterChange}</p>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
