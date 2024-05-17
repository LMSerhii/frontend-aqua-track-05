import { CalendarItem } from '../CalendarItem/CalendarItem';
import { useAuth } from '../../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { useGetAllEntriesByMonthQuery } from '../../../redux/tracker/trackerApi';
import { setMonth } from '../../../redux/date/dateSlice';

import s from './Calendar.module.css';

export const Calendar = ({ selectedDate }) => {
  const month = useSelector(setMonth);
  const { user } = useAuth();
  // const { data, isLoading, isError } = useGetAllEntriesByMonthQuery(month);
  // console.log(data);

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );
  // тут потрібен ще dailyWater з документа Юзера
  // const ArrayOfWaterInPercent = data.map(item =>
  //   Math.round((item.totalAmount * 100) / user.dailyWater)
  // );

  return (
    <>
      <ul className={s.list}>
        {daysArray.map(day => {
          return (
            <li key={day} className={s.item}>
              <CalendarItem day={day} amount={100} />

              <div className={s.percentage}></div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
