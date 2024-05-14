import clsx from 'clsx';
import Button from '../../../shared/components/Button/Button';
import css from './CalendarItem.module.css';

export const CalendarItem = ({ day, amount }) => {
  const isFull = amount >= 100;

  const buildLinkClass = clsx(
    css.dayBtn,
    isFull ? css.fullColor : css.notfullColor
  );

  return (
    <>
      <Button className={buildLinkClass}>{day}</Button>
    </>
  );
};
