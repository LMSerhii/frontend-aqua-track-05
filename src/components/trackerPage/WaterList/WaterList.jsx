import Button from '../../../shared/components/Button/Button';
import { sprite } from '../../../shared/icons/index';
import ChooseDate from '../ChooseDate/ChooseDate';
import s from './WaterList.module.css';

const WaterList = () => {
  return (
    <>
      <div className={s.wrap}>
        <ChooseDate />
        <Button classname={s.addWaterBtn}>
          <span className={s.wrapPlusIcon}>
            <svg className={s.plusIcon} width="20" height="20">
              <use xlinkHref={`${sprite}#plus`}></use>
            </svg>
          </span>
          <span>Add water</span>
        </Button>
      </div>
    </>
  );
};

export default WaterList;
