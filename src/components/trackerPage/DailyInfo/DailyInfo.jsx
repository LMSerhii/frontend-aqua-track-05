import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllEntyiesByDayMutation } from '../../../redux/tracker/trackerApi';
import { selectDate } from '../../../redux/date/dateSlice';
import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import Loader from '../../../shared/components/Loader/Loader';
import { PiSmileySad } from 'react-icons/pi';
import s from './DailyInfo.module.css';

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
      <div className={s.wrapper}>
        {isError && (
          <p className={s.waterListError}>
            Oops! Something went wrong. Please, reload the page!
            <PiSmileySad className={s.errorIcon} />
          </p>
        )}

        {!isError && isLoading && <Loader />}
        {!isError && !isLoading && <WaterList array={amountData} />}
      </div>
    </div>
  );
};

export default DailyInfo;
