import WaterItem from '../WaterItem/WaterItem';
import s from './WaterList.module.css';
import { useTranslation } from 'react-i18next';
const WaterList = ({ array }) => {
  const { t } = useTranslation();
  return (
    <>
      {array.length ? (
        <ul className={s.waterListWrap}>
          {array.map(item => (
            <WaterItem key={item._id} item={item} />
          ))}
        </ul>
      ) : (
        <div className={s.emptyListWaterTextWrap}>
          <p className={s.emptyListWaterText}>
            {t('WaterList.statrTrackingText')}
          </p>
        </div>
      )}
    </>
  );
};

export default WaterList;
