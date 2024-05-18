import { CalendarItem } from '../CalendarItem/CalendarItem';
import { useAuth } from '../../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { useGetAllEntriesByMonthQuery } from '../../../redux/tracker/trackerApi';
import { selectMonth } from '../../../redux/date/dateSlice';

import s from './Calendar.module.css';

export const Calendar = ({ selectedDate }) => {
  const month = useSelector(selectMonth);
  const { user } = useAuth();
  const { data, isLoading, isError } = useGetAllEntriesByMonthQuery(month);
  const DataArray = data?.data || [];

  const byOneDayRecords = DataArray.map(({ date, amounts }) => {
    return { date, amounts };
  });
  console.log(byOneDayRecords);

  const dateAndTotalWater = byOneDayRecords.map(oneDay => {
    const totalWaterByDay = oneDay.amounts.reduce(
      (acc, curr) => acc + curr.amount,
      0
    );
    return { date: oneDay.date, totalWaterByDay };
  });
  console.log(dateAndTotalWater);

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  return (
    <>
      <ul className={s.list}>
        {daysArray.map((day, index) => {
          const dayOfMonth = day < 10 ? `0${day}` : `${day}`;
          const matchedItem = dateAndTotalWater.find(
            item => item.date.substring(0, 2) === dayOfMonth
          );
          const matchedAmount = matchedItem
            ? Math.round((matchedItem.totalWaterByDay * 100) / user.dailyWater)
            : 0;
          {
            console.log(matchedAmount);
          }
          return (
            <li key={day} className={s.item}>
              <CalendarItem day={day} amount={index} />

              <div className={s.percentage}>
                {matchedAmount !== undefined ? `${matchedAmount}%` : '0%'}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
