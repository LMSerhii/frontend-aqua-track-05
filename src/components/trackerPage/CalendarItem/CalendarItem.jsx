// CalendarItem. jsx
import Button from '../../../shared/components/Button/Button';
import css from './CalendarItem.module.css';

export const CalendarItem = ({ index }) => {
  const day = index + 1;
  day.toString();
  return (
    <>
      <Button className={css.dayBtn}>{day}</Button>
    </>
  );
};
