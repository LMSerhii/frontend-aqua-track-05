import Button from '../../../shared/components/Button/Button';
import s from './CalendarItem.module.css';

export const CalendarItem = ({ day }) => {
  return (
    <>
      <Button className={s.dayBtn}>{day}</Button>
    </>
  );
};
