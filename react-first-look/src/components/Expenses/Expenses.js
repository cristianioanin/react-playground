import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const { expenses, onFilterByYear } = props;

  const filterByYearHandler = (year) => onFilterByYear(year);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterByYear={filterByYearHandler} />
      </Card>
      <Card className="expenses">
        {expenses.map(expense => (
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
