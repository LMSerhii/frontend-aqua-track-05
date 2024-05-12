import { useGetAllEntyiesByMonthQuery } from '../../../redux/tracker/trackerApi';
import { CalendarItem } from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';
import { useAuth } from '../../../hooks/useAuth';
import Loader from '../../../shared/components/Loader/Loader';

export const Calendar = ({ selectedDate }) => {
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );
  //   console.log(daysArray);

  //   const { data, isLoading, isError } = useGetAllEntyiesByMonthQuery;
  // якщо data це масив - отакий список випитої totalAmount протягом місяця?
  const data = [
    { totalAmount: 1200 },
    { totalAmount: 1500 },
    { totalAmount: 1200 },
    { totalAmount: 1000 },
  ];
  // тут потрібен ще dailyWater з документа Юзера
  //   const { user } = useAuth();
  //   console.log(user);
  //   console.log(user.dailyNorma);
  //   const ArrayOfWaterInPercent = data.map(item =>
  //     Math.round((item.totalAmount * 100) / user.dailyNorma)
  //     );
  const ArrayOfWaterInPercent = data.map(item =>
    Math.round((item.totalAmount * 100) / 1500)
  );

  console.log(ArrayOfWaterInPercent);

  return (
    <>
      {/* {isLoading && <Loader />}
      {isError && (<span>Ooops, smth went wrong</span>)} */}
      <ul className={css.list}>
        {daysArray.map((day, index) => (
          <li key={day} className={css.item}>
            <CalendarItem day={day} />
            <div className={css.percentage}>
              {ArrayOfWaterInPercent[index] !== undefined
                ? `${ArrayOfWaterInPercent[index]}%`
                : '0%'}
            </div>

            {/* {console.log(day)} */}
          </li>
        ))}
      </ul>
    </>
  );
};
