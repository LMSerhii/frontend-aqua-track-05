import { useState } from 'react';
import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import s from './DailyInfo.module.css';
import { useTranslation } from 'react-i18next';
const DailyInfo = () => {

  const [isWaterAdd, setIsWaterAdd] = useState(false);
  const { t } = useTranslation();

  const date = useSelector(selectDate);
  const [amountData, setAmountData] = useState([]);

  const handleSetAmountData = data => {
    setAmountData(data);
  };

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
        <AddWaterBtn handleSetAmountData={handleSetAmountData} />
      </div>
      {isWaterAdd ? (
        <WaterList />
      ) : (
        <div className={s.emptyListWaterTextWrap}>
          <p className={s.emptyListWaterText}>
            {t('DailyInfo.startTrackingText')}
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyInfo;
