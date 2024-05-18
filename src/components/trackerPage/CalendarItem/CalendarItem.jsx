import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectMonth, setDate } from '../../../redux/date/dateSlice';
import Button from '../../../shared/components/Button/Button';

import s from './CalendarItem.module.css';

export const CalendarItem = ({ day, amount }) => {
  const dispatch = useDispatch();
  const isFull = amount >= 100;

  const buildLinkClass = clsx(s.dayBtn, isFull ? s.fullColor : s.notfullColor);

  const month = useSelector(selectMonth);
  const date = day < 10 ? `0${day}-${month}` : `${day}-${month}`;

  return (
    <>
      <Button
        onClick={() => dispatch(setDate(date))}
        className={buildLinkClass}
      >
        {day}
      </Button>
    </>
  );
};
