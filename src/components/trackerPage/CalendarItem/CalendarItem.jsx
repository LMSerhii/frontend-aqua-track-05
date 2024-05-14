import clsx from 'clsx';
import Button from '../../../shared/components/Button/Button';
import s from './CalendarItem.module.css';

export const CalendarItem = ({ day, amount }) => {
  const isFull = amount >= 100;

  const buildLinkClass = clsx(s.dayBtn, isFull ? s.fullColor : s.notfullColor);

  return (
    <>
      <Button className={buildLinkClass}>{day}</Button>
    </>
  );
};
