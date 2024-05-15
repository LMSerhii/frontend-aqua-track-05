// CalendarPagination.jsx
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from '../../../shared/components/Button/Button';
import { sprite } from '../../../shared/icons/index';

import css from './CalendarPagination.module.css';
import { useTranslation } from 'react-i18next';

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
  };
  const { t } = useTranslation();
  const goToNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);
  };

  const translatedMonth = t(`months.${selectedDate.getMonth()}`);

  // const formattedDate = selectedDate
  //   .toLocaleString('en-GB', {
  //     month: 'long',
  //     year: 'numeric',
  //   })
  //   .replace(/(\w+) (\d+)/, '$1, $2');
  // console.log(formattedDate);

  return (
    <div className={css.wrapper}>
      <Button onClick={goToPrevoiusMonth} className={css.btn}>
        <BsChevronLeft size="12" className={css.arrow} />
      </Button>
      <span className={css.span}>{translatedMonth}</span>
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

// *******
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
