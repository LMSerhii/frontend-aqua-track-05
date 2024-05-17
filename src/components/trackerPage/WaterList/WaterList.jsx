import WaterItem from '../WaterItem/WaterItem';
import { useTranslation } from 'react-i18next';
import s from './WaterList.module.css';

const WaterList = ({ array, setAmountData }) => {
  const { t } = useTranslation();
  return (
    <>
      {array.length ? (
        <ul className={s.waterListWrap}>
          {array.map(item => (
            <WaterItem
              key={item._id}
              item={item}
              setAmountData={setAmountData}
            />
          ))}
        </ul>
      ) : (
        <div className={s.emptyListWaterBlock}>
          <div className={s.emptyListWaterTextWrap}>
            <p className={s.emptyListWaterText}>
              {t('WaterList.statrTrackingText')}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WaterList;
