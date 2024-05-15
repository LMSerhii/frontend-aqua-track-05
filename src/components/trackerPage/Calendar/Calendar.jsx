import { useAuth } from '../../../hooks';
import { CalendarItem } from '../CalendarItem/CalendarItem';
import s from './Calendar.module.css';

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
    { totalAmount: 2500 },
  ];
  // тут потрібен ще dailyWater з документа Юзера
  const { user } = useAuth();
  // console.log(user);
  // console.log(user.dailyWater);
  const dailyWater = user.dailyWater * 1000;
  // console.log(dailyWater);
  // якщо реалізовано автоматичний запис"0" в totalAmount по
  // закінченню дня, якщо юзер не записав свою випиту воду:
  //   const ArrayOfWaterInPercent = data.map(item =>
  //     Math.round((item.totalAmount * 100) / dailyWater)
  //     );
  const ArrayOfWaterInPercent = data.map(item =>
    Math.round((item.totalAmount * 100) / 1500)
  );
  // console.log(ArrayOfWaterInPercent);

  return (
    <>
      {/* {isLoading && <Loader />}
      {isError && (<span>Ooops, smth went wrong</span>)} */}
      <ul className={s.list}>
        {daysArray.map((day, index) => (
          <li key={day} className={s.item}>
            <CalendarItem day={day} amount={ArrayOfWaterInPercent[index]} />
            <div className={s.percentage}>
              {ArrayOfWaterInPercent[index] !== undefined
                ? `${ArrayOfWaterInPercent[index]}%`
                : '0%'}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
