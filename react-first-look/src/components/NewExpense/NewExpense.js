import './NewExpense.css';
import {ExpenseForm} from "./ExpenseForm";
import {useState} from "react";

const NewExpense = ({ onAddExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const saveExpenseHandler = (payload) => {
    const expenseData = {
      ...payload,
      id: Math.random().toString()
    };

    setShowExpenseForm(false);
    onAddExpense(expenseData);
  };
  const cancelActionHandler = () => setShowExpenseForm(false);

  if (!showExpenseForm) {
    return (
      <div className="new-expense">
        <button onClick={() => setShowExpenseForm(true)}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      {showExpenseForm && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={cancelActionHandler} />}
    </div>
  );
}

export default NewExpense;
