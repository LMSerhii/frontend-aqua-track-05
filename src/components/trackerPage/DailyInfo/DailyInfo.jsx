import { useSelector } from 'react-redux';
import { useGetDailyTrackQuery } from '../../../redux/tracker/trackerApi';
import { selectDate } from '../../../redux/date/dateSlice';
import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import Loader from '../../../shared/components/Loader/Loader';
import { PiSmileySad } from 'react-icons/pi';
import s from './DailyInfo.module.css';

const DailyInfo = () => {
  const date = useSelector(selectDate);
  const { data, isError, isLoading } = useGetDailyTrackQuery(date);

  return (
    <div className={s.waterListBlock}>
      <div className={s.waterListBlockHead}>
        <ChooseDate />
        <AddWaterBtn />
      </div>
      <div className={s.wrapper}>
        {isError && (
          <p className={s.waterListError}>
            Oops! Something went wrong. Please, reload the page!
            <PiSmileySad className={s.errorIcon} />
          </p>
        )}

        {!isError && isLoading && <Loader />}
        {!isError && !isLoading && <WaterList array={data} />}
      </div>
    </div>
  );
};

export default DailyInfo;
