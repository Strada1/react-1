import './CostDate.css';

export function CostDate(props) {
  const month = props.date.toLocaleString('ru-Ru', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('ru-Ru', { day: '2-digit' });

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
}
