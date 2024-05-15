import { useEffect, useState } from 'react';
import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import s from './DailyInfo.module.css';
import { useGetAllEntyiesByDayMutation } from '../../../redux/tracker/trackerApi';
import { useSelector } from 'react-redux';
import { selectDate } from '../../../redux/date/dateSlice';

const DailyInfo = () => {
  const date = useSelector(selectDate);
  const [amountData, setAmountData] = useState([]);

  const [getAllEntyiesByDay, { data, isLoading, isError }] =
    useGetAllEntyiesByDayMutation();

  useEffect(() => {
    getAllEntyiesByDay(date);
  }, [getAllEntyiesByDay, date]);

  useEffect(() => {
    if (data) setAmountData(data.data);
  }, [data]);

  return (
    <div className={s.waterListBlock}>
      <div className={s.waterListBlockHead}>
        <ChooseDate />
        <AddWaterBtn setAmountData={setAmountData} />
      </div>
      {isError && <p>Error</p>}
      {!isError && isLoading && <p>Loading ...</p>}
      {!isError && !isLoading && <WaterList array={amountData} />}
    </div>
  );
};

export default DailyInfo;
