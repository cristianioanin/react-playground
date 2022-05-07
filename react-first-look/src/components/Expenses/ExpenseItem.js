import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const { date, amount, title } = props;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <header className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </header>
      </Card>
    </li>
  );
}

export default ExpenseItem;
