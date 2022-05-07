import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (expenseyear) => {
    setFilteredYear(expenseyear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
