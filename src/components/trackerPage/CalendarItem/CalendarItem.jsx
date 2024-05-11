// CalendarItem. jsx
import Button from '../../../shared/components/Button/Button';
import css from './CalendarItem.module.css';

export const CalendarItem = ({ day }) => {
  return (
    <>
      <Button className={css.dayBtn}>{day}</Button>
    </>
  );
};
