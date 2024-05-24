import { Calendar } from '../Calendar/Calendar';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import { WaterGraph } from '../WaterGraph/WaterGraph';
import s from './MonthInfo.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const MonthInfo = () => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  return (
    <div data-tour="MonthInfoTour">
      <div className={s.wrapper}>
        <h3 className={s.month}>
          {isActive ? t('MonthInfo.stat') : t('MonthInfo.month')}
        </h3>
        <CalendarPagination isActive={isActive} setIsActive={setIsActive} />
      </div>
      {isActive ? <WaterGraph /> : <Calendar />}
    </div>
  );
};
