// WaterList.jsx
import WaterItem from '../WaterItem/WaterItem';
import s from './WaterList.module.css';

const WaterList = ({ array }) => {
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
            Start tracking your water intake by clicking the Add water button.
          </p>
        </div>
      )}
    </>
  );
};

export default WaterList;
