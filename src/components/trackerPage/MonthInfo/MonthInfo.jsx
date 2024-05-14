// MonthInfo.jsx
import { Calendar } from '../Calendar/Calendar';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';

import css from './MonthInfo.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { t } = useTranslation();
  return (
    <>
      <div className={css.wrapper}>
        <h3 className={css.month}>{t('MonthInfo.month')}</h3>
        <CalendarPagination
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <Calendar selectedDate={selectedDate} />
    </>
  );
};
