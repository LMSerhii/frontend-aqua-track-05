import { useState } from 'react';
import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import s from './DailyInfo.module.css';
import { useTranslation } from 'react-i18next';
const DailyInfo = () => {
  const [isWaterAdd, setIsWaterAdd] = useState(false);
  const { t } = useTranslation();
  return (
    <div className={s.waterListBlock}>
      <div className={s.waterListBlockHead}>
        <ChooseDate />
        <AddWaterBtn />
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
