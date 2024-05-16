// CalendarPagination.jsx
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../../../shared/components/Button/Button';
import { sprite } from '../../../shared/icons/index';

import css from './CalendarPagination.module.css';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setDate } from '../../../redux/date/dateSlice';

export const CalendarPagination = ({
  selectedDate,
  setSelectedDate,
  setIsActive,
  isActive,
}) => {
  const dispatch = useDispatch();

  const goToPrevoiusMonth = () => {
    const prevoiusMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );

    setSelectedDate(prevoiusMonth);
    // console.log(prevoiusMonth);
    // dispatch(setDate('01-04-2024'));
  };
  const { t } = useTranslation();

  const goToNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);

    // dispatch(setDate('01-06-2024'));
  };

  const translatedMonth = t(`months.${selectedDate.getMonth()}`);

  return (
    <div className={css.wrapper}>
      <Button onClick={goToPrevoiusMonth} className={css.btn}>
        <BsChevronLeft size="12" className={css.arrow} />
      </Button>
      <span className={css.span}>
        {translatedMonth}, {selectedDate.getFullYear()}
      </span>
      <Button onClick={goToNextMonth} className={css.btn}>
        <BsChevronRight size="12" className={css.arrow} />
      </Button>
      <Button className={css.pieChart} onClick={() => setIsActive(!isActive)}>
        <svg width="20" height="20" className={css.pieIcon}>
          <use xlinkHref={`${sprite}#pie_chart`}></use>
        </svg>
      </Button>
    </div>
  );
};
