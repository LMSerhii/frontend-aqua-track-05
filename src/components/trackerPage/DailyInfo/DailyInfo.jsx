import { useState } from 'react';
import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import s from './DailyInfo.module.css';

const DailyInfo = () => {
  const [isWaterAdd, setIsWaterAdd] = useState(false);

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
            Start tracking your water intake by clicking the Add water button.
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyInfo;
