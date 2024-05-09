import { sprite } from '../../../shared/icons/index';
import Button from '../../../shared/components/Button/Button';
import ChooseDate from '../ChooseDate/ChooseDate';
import WaterItem from '../WaterItem/WaterItem';
import s from './WaterList.module.css';

const WaterList = () => {
  return (
    <section className={s.waterListSection}>
      <div className={s.waterListSectionHead}>
        <ChooseDate />
        <Button classname={s.addWaterBtn}>
          <span className={s.plusIconWrap}>
            <svg className={s.plusIcon} width="20" height="20">
              <use xlinkHref={`${sprite}#plus`}></use>
            </svg>
          </span>
          <span>Add water</span>
        </Button>
      </div>

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
    </section>
  );
};

export default WaterList;
