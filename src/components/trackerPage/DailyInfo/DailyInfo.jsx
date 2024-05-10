import ChooseDate from '../ChooseDate/ChooseDate';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import WaterList from '../WaterList/WaterList';
import s from './DailyInfo.module.css';

const DailyInfo = () => {
  return (
    <div className={s.waterListBlock}>
      <div className={s.waterListBlockHead}>
        <ChooseDate />
        <AddWaterBtn />
      </div>
      <WaterList />
    </div>
  );
};

export default DailyInfo;
