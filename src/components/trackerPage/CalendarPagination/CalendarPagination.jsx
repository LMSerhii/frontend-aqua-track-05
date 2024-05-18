import Button from '../../../shared/components/Button/Button';
import { sprite } from '../../../shared/icons/index';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { format, parse } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { selectMonth, setMonth } from '../../../redux/date/dateSlice';

import s from './CalendarPagination.module.css';

export const CalendarPagination = ({ setIsActive, isActive }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const date = useSelector(selectMonth);

  const parsedDate = parse(date, 'MM-yyyy', new Date());

  const goToPrevoiusMonth = () => {
    const prevoiusMonth = new Date(
      parsedDate.getFullYear(),
      parsedDate.getMonth() - 1,
      1
    );
    const month = format(prevoiusMonth, 'MM-yyyy');
    dispatch(setMonth(month));
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      parsedDate.getFullYear(),
      parsedDate.getMonth() + 1,
      1
    );
    const month = format(nextMonth, 'MM-yyyy');
    dispatch(setMonth(month));
  };

  const translatedMonth = t(`months.${parsedDate.getMonth()}`);

  return (
    <div className={s.wrapper}>
      <Button onClick={goToPrevoiusMonth} className={s.btn}>
        <BsChevronLeft size="12" className={s.arrow} />
      </Button>
      <span className={s.span}>
        {translatedMonth}, {parsedDate.getFullYear()}
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
