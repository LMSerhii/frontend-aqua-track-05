import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useGetDailyTrackQuery } from '../../../redux/tracker/trackerApi';
import { selectDate } from '../../../redux/date/dateSlice';
import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import Loader from '../../../shared/components/Loader/Loader';
import { PiSmileySad } from 'react-icons/pi';
import s from './DailyInfo.module.css';
import { selectIsDailyRefreshing } from '../../../redux/auth/authSlice';

const DailyInfo = () => {
  const date = useSelector(selectDate);
  const { data, isError, isLoading } = useGetDailyTrackQuery(date);
  const { t } = useTranslation();

  const isRefresh = useSelector(selectIsDailyRefreshing);

  return (
    <div className={s.waterListBlock}>
      <div className={s.waterListBlockHead}>
        <ChooseDate />
        <AddWaterBtn />
      </div>
      <div className={s.wrapper} data-tour="dailyTrack">
        {isRefresh ? (
          <Loader />
        ) : (
          <>
            {isError && (
              <p className={s.waterListError}>
                {t('DailyInfo.errorMessage')}
                <PiSmileySad className={s.errorIcon} />
              </p>
            )}
            {isLoading && <Loader />}
            {!isError && !isLoading && <WaterList array={data} />}
          </>
        )}
      </div>
    </div>
  );
};

export default DailyInfo;
