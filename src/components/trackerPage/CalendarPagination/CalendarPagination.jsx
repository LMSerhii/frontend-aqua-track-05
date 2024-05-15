// CalendarPagination.jsx
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../../../shared/components/Button/Button';
import { sprite } from '../../../shared/icons/index';

import s from './CalendarPagination.module.css';

export const CalendarPagination = ({
  selectedDate,
  setSelectedDate,
  setIsActive,
  isActive,
}) => {
  const goToPrevoiusMonth = () => {
    const prevoiusMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );
    setSelectedDate(prevoiusMonth);
    // updateNumberOfDays(prevoiusMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);
    // updateNumberOfDays(nextMonth);
  };
  // це якщо б <Calendar /> рендерився тут***
  //   const updateNumberOfDays = date => {
  //     const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  //     const daysInMonth = lastDayOfMonth.getDate();
  //     setNumberOfDaysInMonth(daysInMonth);
  //   };
  // *************
  const formattedDate = selectedDate.toLocaleString('en-GB', {
    month: 'long',
    year: 'numeric',
  });
  //     .replace(/(\w+) (\d+)/, '$1, $2');
  //   console.log(formattedDate);
  //   useEffect(() => {
  // formattedDate.toLocaleDateString()
  // console.log(formattedDate);
  //     dispatch(setFilterDate(formattedDate));
  //   }, [selectedDate, dispatch]);
  // *************

  // ********* варіант з двома useEffect() ******
  // useEffect(() => {
  //   const monthYear = selectedDate.toLocaleString('en-GB', {
  //     month: 'long',
  //     year: 'numeric',
  //   });
  //   setFormattedDate(monthYear);
  //   const dateString = selectedDate
  //     .toLocaleString('en-GB', {
  //       day: '2-digit',
  //       month: '2-digit',
  //       year: 'numeric',
  //     })
  //     .split('/')
  //     .join('-');
  //   setFormattedDateString(dateString);
  // }, [selectedDate]);

  // useEffect(() => {
  //   dispatch(setDate(formattedDateString));
  // }, [formattedDateString, dispatch]);
  // *********
  // console.log(formattedDateString);

  return (
    <div className={s.wrapper}>
      <Button onClick={goToPrevoiusMonth} className={s.btn}>
        <BsChevronLeft size="12" className={s.arrow} />
      </Button>
      <span className={s.span}>{formattedDate}</span>
      <Button onClick={goToNextMonth} className={s.btn}>
        <BsChevronRight size="12" className={s.arrow} />
      </Button>
      <Button className={s.pieChart} onClick={() => setIsActive(!isActive)}>
        <svg width="20" height="20" className={s.pieIcon}>
          <use xlinkHref={`${sprite}#pie_chart`}></use>
        </svg>
      </Button>
    </div>
  );
};
