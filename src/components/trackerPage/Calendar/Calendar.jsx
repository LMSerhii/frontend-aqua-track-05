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
  console.log(data);
  console.log(data.data);
  const DataArray = data.data;
  console.log(DataArray);

  const byOneDayRecords = DataArray.map(({ date, amounts }) => {
    const dateOfRecord = date;
    const allAmountsPerDay = amounts;
    return { date: dateOfRecord, amounts: allAmountsPerDay };
  });
  console.log('всі записи поденно', byOneDayRecords);

  const dateAndTotalWater = byOneDayRecords.map(oneDay => {
    const date = oneDay.date;
    const totalWaterByDay = oneDay.amounts.reduce(
      (acc, curr) => acc + curr.amount,
      0
    );
    return { date: date, totalWaterByDay: totalWaterByDay };
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
  // console.log(user.dailyWater);
  // тут потрібен ще dailyWater з документа Юзера
  // const inPercentArray = dateAndTotalWater.map(item =>
  //   Math.round((item.totalWaterByDay * 100) / 2000)
  // );
  // console.log(inPercentArray);

  return (
    <>
      <ul className={s.list}>
        {daysArray.map((day, index) => {
          const dayOfMonth = day < 10 ? `0${day}` : `${day}`;
          const matchedItem = dateAndTotalWater.find(
            item => item.date.substring(0, 2) === dayOfMonth
          );
          const matchedAmount = matchedItem
            ? Math.round((matchedItem.totalWaterByDay * 100) / 2000)
            : 0;

          return (
            <li key={day} className={s.item}>
              <CalendarItem day={day} amount={index} />
              {console.log(matchedAmount)}

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
