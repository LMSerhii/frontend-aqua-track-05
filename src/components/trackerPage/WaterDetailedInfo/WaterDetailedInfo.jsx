import DailyInfo from '../DailyInfo/DailyInfo';
import { MonthInfo } from '../MonthInfo/MonthInfo';
import { UserPanel } from '../UserPanel/UserPanel';
import s from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = () => {
  return (
    <div className={s.waterDetailedInfo}>
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
