import { Calendar } from '../Calendar/Calendar';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import sprite from '../../../shared/icons/index';

import css from './MonthInfo.module.css';

export const MonthInfo = () => {
  return (
    <div className={css.wrapper}>
      <h3>Month</h3>
      <CalendarPagination />
      <svg width="20" height="20">
        <use xlinkHref={`${sprite}#pie_chart`}></use>
      </svg>
      <Calendar />
    </div>
  );
};
