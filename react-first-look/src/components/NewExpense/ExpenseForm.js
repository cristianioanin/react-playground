import './ExpenseForm.css'
import {useState} from "react";

const EventTarget = {
  INPUT_TITLE: 'title',
  INPUT_AMOUNT: 'amount',
  INPUT_DATE: 'date'
};

const EMPTY_STRING = '';

export const ExpenseForm = ({ onSaveExpense }) => {
  const [title, setTitle] = useState(EMPTY_STRING);
  const [amount, setAmount] = useState(EMPTY_STRING);
  const [date, setDate] = useState(EMPTY_STRING);

  const handlers = new Map([
    [EventTarget.INPUT_TITLE, (e) => setTitle(e.target.value)],
    [EventTarget.INPUT_AMOUNT, (e) => setAmount(e.target.value)],
    [EventTarget.INPUT_DATE, (e) => setDate(e.target.value)],
  ]);

  const reset = () => {
    setTitle(EMPTY_STRING);
    setAmount(EMPTY_STRING);
    setDate(EMPTY_STRING);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const payload = {
      title,
      amount,
      date: new Date(date)
    };

    onSaveExpense(payload);
    reset();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={handlers.get(EventTarget.INPUT_TITLE)}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" value={amount} min="0.01" step="0.01" onChange={handlers.get(EventTarget.INPUT_AMOUNT)}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" value={date} min="2021-01-01" step="2023-12-31" onChange={handlers.get(EventTarget.INPUT_DATE)}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
