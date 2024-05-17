import DailyInfo from '../DailyInfo/DailyInfo';
import { MonthInfo } from '../MonthInfo/MonthInfo';
import { UserPanel } from '../UserPanel/UserPanel';
import s from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = ({
  amountData,
  setAmountData,
  isLoading,
  isError,
}) => {
  return (
    <div className={s.waterDetailedInfo}>
      <UserPanel />
      <DailyInfo
        amountData={amountData}
        setAmountData={setAmountData}
        isLoading={isLoading}
        isError={isError}
      />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
