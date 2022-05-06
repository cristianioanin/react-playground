import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

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
      </Card>
      <Card className="expenses">
        {filteredExpenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
