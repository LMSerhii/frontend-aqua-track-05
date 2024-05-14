// WaterList.jsx
import WaterItem from '../WaterItem/WaterItem';
import data from '../../../dataWaterList';
import s from './WaterList.module.css';

const WaterList = () => {
  return (
    <ul className={s.waterListWrap}>
      {data.map(item => (
        <WaterItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default WaterList;
