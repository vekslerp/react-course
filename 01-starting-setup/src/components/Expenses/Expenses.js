import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  // MY SOLUTION
  // const [filteredExpenses, setFilteredExpenses] = useState([]);
  // const expensesArr = [];

  // useEffect(() => {
  //   props.expenses.filter((item) => {
  //     // console.log("filteredYear", parseInt(filteredYear));
  //     // console.log("item.date.getFullYear()", item.date.getFullYear());

  //     if (item.date.getFullYear() === parseInt(filteredYear)) {
  //       expensesArr.push(item);
  //     } else setFilteredExpenses([]);

  //     setFilteredExpenses(expensesArr);
  //   });
  // }, [filteredYear, props.expenses]);

  // INSTRUCTOR SOLUTION !!!
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // props.expenses.filter
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
