import './ExpenseDate.css';

function ExpenseDate(props) {
  const { date: rawDateValue} = props;

  const date = {
    month: rawDateValue.toLocaleDateString('en-US', { month: 'long' }),
    day: rawDateValue.toLocaleDateString('en-US', { day: '2-digit' }),
    year: rawDateValue.getFullYear()
  };

  return (
    <section className="expense-date">
      <div className="expense-date__month">{date.month}</div>
      <div className="expense-date__year">{date.year}</div>
      <div className="expense-date__day">{date.day}</div>
    </section>
  );
}

export default ExpenseDate;
