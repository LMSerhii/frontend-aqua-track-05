import WaterItem from '../WaterItem/WaterItem';
import s from './WaterList.module.css';

const WaterList = () => {
  return (
    <ul className={s.waterListWrap}>
      <WaterItem />
      <WaterItem />
      <WaterItem />
      <WaterItem />
      <WaterItem />
      <WaterItem />
      <WaterItem />
      <WaterItem />
      <WaterItem />
    </ul>
  );
};

export default WaterList;
