import { CalendarItem } from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';

export const Calendar = ({ selectedDate }) => {
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );
  console.log(daysArray);

  return (
    <>
      <ul className={css.list}>
        {daysArray.map(day => (
          <li key={day} className={css.item}>
            <CalendarItem day={day} />
            {console.log(day)}
          </li>
        ))}
      </ul>
    </>
  );
};
