// CalendarPagination.jsx
import Button from '../../../shared/components/Button/Button';
import { sprite } from '../../../shared/icons/index';
import { useGetAllEntriesByMonthQuery } from '../../../redux/tracker/trackerApi';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import s from './CalendarPagination.module.css';
import { useDispatch } from 'react-redux';
import { setAllRecordsByMonth } from '../../../redux/tracker/trackerSlice';

export const CalendarPagination = ({
  selectedDate,
  setSelectedDate,
  setIsActive,
  isActive,
}) => {
  const { t } = useTranslation();
  const formatDate = date => format(date, 'MM-yyyy');
  const [formattedDate, setFormattedDate] = useState(formatDate(selectedDate));
  const dispatch = useDispatch();

  /**  відправка запиту на бекенд одразу  після рендеру сторінки */
  useEffect(() => {
    setFormattedDate(formatDate(selectedDate));
  }, [selectedDate]);

  const { data, isLoading, isError } =
    useGetAllEntriesByMonthQuery(formattedDate);
  // console.log(data);

  // /** зберігаємо дані у глобальному стані після відповіді бека */
  useEffect(() => {
    if (data && data.data) {
      dispatch(setAllRecordsByMonth(data.data));
    }
  }, [data, dispatch]);

  // const allRecordsByMonth = data.data;

  const goToPrevoiusMonth = () => {
    const prevoiusMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );

    setSelectedDate(prevoiusMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);
  };

  const translatedMonth = t(`months.${selectedDate.getMonth()}`);

  return (
    <div className={s.wrapper}>
      <Button onClick={goToPrevoiusMonth} className={s.btn}>
        <BsChevronLeft size="12" className={s.arrow} />
      </Button>
      <span className={s.span}>
        {translatedMonth}, {selectedDate.getFullYear()}
      </span>
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

/**другий useEffect для запиту на бекенд після зміни місяця */
// useEffect(() => {
//   setFormattedDate(formatDate(selectedDate));
// }, [selectedDate]);

// const [getAllEntriesByMonth, { data, isLoading, isError }] =
//   useGetAllEntriesByMonthQuery();

// useEffect(() => {
//   getAllEntriesByMonth(formatDate(selectedDate));
// }, [getAllEntriesByMonth, selectedDate]);
