// MonthInfo.jsx
import { Calendar } from '../Calendar/Calendar';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import { WaterGraph } from '../WaterGraph/WaterGraph';

import { useState } from 'react';
import s from './MonthInfo.module.css';

export const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h3 className={s.month}>Month</h3>
        <CalendarPagination
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      {isActive ? <WaterGraph /> : <Calendar selectedDate={selectedDate} />}
    </div>
  );
};
