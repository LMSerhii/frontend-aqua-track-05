// MonthInfo.jsx
import { Calendar } from '../Calendar/Calendar';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import { useState } from 'react';
import s from './MonthInfo.module.css';

export const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <div className={s.wrapper}>
        <h3 className={s.month}>Month</h3>
        <CalendarPagination
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <Calendar selectedDate={selectedDate} />
    </div>
  );
};
