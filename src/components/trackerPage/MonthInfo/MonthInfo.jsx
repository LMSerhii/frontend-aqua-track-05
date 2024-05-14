// MonthInfo.jsx
import { Calendar } from '../Calendar/Calendar';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import { WaterGraph } from '../WaterGraph/WaterGraph';

import css from './MonthInfo.module.css';
import { useState } from 'react';

export const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className={css.wrapper}>
        <h3 className={css.month}>Month</h3>
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
