import { CalendarItem } from '../CalendarItem/CalendarItem';
import { useAuth } from '../../../hooks/useAuth';
import css from './Calendar.module.css';

import monthData from './waterAmountPerMonth';

console.log(monthData.data);

const byOneDayRecords = monthData.data.map(({ date, amounts }) => {
  const dateOfRecord = date;
  const allAmountsPerDay = amounts;
  return { date: dateOfRecord, amounts: allAmountsPerDay };
});
console.log('всі записи поденно', byOneDayRecords);

/*перебираємо поденно(має приходити 28 або 29, або 30, або
   31 день з записами), щоб дістатися рахувати випиту воду за день  */
const dateAndTotalWater = byOneDayRecords.map(oneDay => {
  const date = oneDay.date;
  const totalWaterByDay = oneDay.amounts.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  console.log('Дата:', date);
  console.log('випита зе день вода:', totalWaterByDay);
  return { date: date, totalWaterByDay: totalWaterByDay };
});

console.log(dateAndTotalWater);

export const Calendar = ({ selectedDate }) => {
  const { user } = useAuth();

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();
  console.log(daysInMonth);

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
  //   const ArrayOfWaterInPercent = data.map(item =>
  //     Math.round((item.totalAmount * 100) / user.dailyWater)
  //     );
  const inPercentArray = dateAndTotalWater.map(item =>
    Math.round((item.totalWaterByDay * 100) / 2000)
  );
  console.log(inPercentArray);

  // const ArrayOfWaterInPercent = data.map(item =>
  //   Math.round((item.totalAmount * 100) / 1500)
  // );

  // return (
  //   <>
  {
    /* {isLoading && <Loader />}
      {isError && (<span>Ooops, smth went wrong</span>)} */
  }
  {
    /* <ul className={css.list}>
        {daysArray.map((day, index) => (
          <li key={day} className={css.item}>
            <CalendarItem day={day} amount={ArrayOfWaterInPercent[index]} />
            <div className={css.percentage}>
              {ArrayOfWaterInPercent[index] !== undefined
                ? `${ArrayOfWaterInPercent[index]}%`
                : '0%'}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}; */
  }
  //  варіант розмітки для роботи з даними з бекенда ****//
  return (
    <>
      {/* {isLoading && <Loader />}
      {isError && (<span>Ooops, smth went wrong</span>)} */}
      <ul className={css.list}>
        {daysArray.map(day => {
          const dayOfMonth = day < 10 ? `0${day}` : `${day}`;
          const matchedItem = dateAndTotalWater.find(
            item => item.date.substring(0, 2) === dayOfMonth
          );
          const matchedAmount = matchedItem
            ? Math.round((matchedItem.totalWaterByDay * 100) / 2000)
            : 0;
          return (
            <li key={day} className={css.item}>
              <CalendarItem day={day} amount={matchedAmount} />
              {console.log(matchedAmount)}
              <div className={css.percentage}>
                {matchedAmount !== undefined ? `${matchedAmount}%` : '0%'}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
