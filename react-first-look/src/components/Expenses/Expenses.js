import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import {useState} from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [ filterByYearValue, setFilterByYearValue ] = useState(0);
  const filterByYearHandler = (year) => setFilterByYearValue(year);
  const filteredExpenses = filterByYearValue ?
    expenses.filter(expense => new Date(expense.date).getFullYear() === filterByYearValue) :
    expenses;

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterByYear={filterByYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
