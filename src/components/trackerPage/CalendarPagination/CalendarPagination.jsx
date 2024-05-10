// CalendarPagination.jsx
import { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../../../shared/components/Button/Button';

import css from './CalendarPagination.module.css';
import { Calendar } from '../Calendar/Calendar';

export const CalendarPagination = () => {
  const currentDate = new Date();

  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [numberOfDaysInMonth, setNumberOfDaysInMonth] = useState(null);

  const goToPrevoiusMonth = () => {
    const prevoiusMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );
    setSelectedDate(prevoiusMonth);
    updateNumberOfDays(prevoiusMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);
    updateNumberOfDays(nextMonth);
  };

  const updateNumberOfDays = date => {
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    setNumberOfDaysInMonth(daysInMonth);
  };

  useEffect(() => {
    updateNumberOfDays(selectedDate);
  }, [selectedDate]);

  const formattedDate = selectedDate
    .toLocaleString('en-GB', {
      month: 'long',
      year: 'numeric',
    })
    .replace(/(\w+) (\d+)/, '$1, $2');

  return (
    <div className={css.wrapper}>
      <Button onClick={goToPrevoiusMonth} className={css.btn}>
        <BsChevronLeft size="18" />
      </Button>
      <span className={css.span}>{formattedDate}</span>
      <Button onClick={goToNextMonth} className={css.btn}>
        <BsChevronRight size="18" />
      </Button>
      <Calendar numberOfDaysInMonth={numberOfDaysInMonth} />
    </div>
  );
};
