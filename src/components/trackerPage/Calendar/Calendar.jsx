// Calendar.jsx

import { CalendarItem } from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';

export const Calendar = ({ numberOfDaysInMonth }) => {
  return (
    <>
      <ul className={css.list}>
        {Array.from({ length: numberOfDaysInMonth }, (_, index) => (
          <li key={index} className={css.item}>
            <CalendarItem index={index} />
          </li>
        ))}
      </ul>
    </>
  );
};
