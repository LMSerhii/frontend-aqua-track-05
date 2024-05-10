import { sprite } from '../../../shared/icons/index';
import Button from '../../../shared/components/Button/Button';
import s from './AddWaterBtn.module.css';

const AddWaterBtn = () => {
  return (
    <Button classname={s.addWaterBtn}>
      <span className={s.plusIconWrap}>
        <svg className={s.plusIcon} width="20" height="20">
          <use xlinkHref={`${sprite}#plus`}></use>
        </svg>
      </span>
      <span>Add water</span>
    </Button>
  );
};

export default AddWaterBtn;
