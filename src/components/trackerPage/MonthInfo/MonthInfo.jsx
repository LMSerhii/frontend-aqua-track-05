// MonthInfo.jsx
import { Calendar } from '../Calendar/Calendar';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';

import css from './MonthInfo.module.css';
import { useState } from 'react';

export const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <div className={css.wrapper}>
        <h3 className={css.month}>Month</h3>
        <CalendarPagination
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <Calendar selectedDate={selectedDate} />
    </>
  );
};
