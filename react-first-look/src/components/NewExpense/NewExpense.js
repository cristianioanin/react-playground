import './NewExpense.css';
import {ExpenseForm} from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseHandler = (payload) => {
    const expenseData = {
      ...payload,
      id: Math.random().toString()
    };

    onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  )
}

export default NewExpense;
