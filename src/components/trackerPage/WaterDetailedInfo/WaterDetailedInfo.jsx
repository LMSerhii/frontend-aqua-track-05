import DailyInfo from '../DailyInfo/DailyInfo';
import { MonthInfo } from '../MonthInfo/MonthInfo';
import { UserPanel } from '../UserPanel/UserPanel';
import s from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = ({amountData, setAmountData, isError, isLoading}) => {
  return (
    <div className={s.waterDetailedInfo}>
      <UserPanel />
      <DailyInfo amountData={amountData} setAmountData={setAmountData} isError={isError} isLoading={isLoading} />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
