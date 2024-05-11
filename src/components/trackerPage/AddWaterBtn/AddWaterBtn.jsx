import { useState } from 'react';
import { sprite } from '../../../shared/icons/index';
import Button from '../../../shared/components/Button/Button';
import { Modal } from '../../../shared/components/Modal/Modal';
import { WaterModal } from '../../modals/WaterModal/WaterModal';
import s from './AddWaterBtn.module.css';

const AddWaterBtn = () => {
  const [activeAdd, setActiveAdd] = useState(false);

  return (
    <>
      <Button classname={s.addWaterBtn} onClick={() => setActiveAdd(true)}>
        <span className={s.plusIconWrap}>
          <svg className={s.plusIcon} width="20" height="20">
            <use xlinkHref={`${sprite}#plus`}></use>
          </svg>
        </span>
        <span>Add water</span>
      </Button>

      <Modal active={activeAdd} setActive={setActiveAdd}>
        <WaterModal
          operation="add"
          title="Add water"
          subTitle="Choose a value"
          setActive={setActiveAdd}
        />
      </Modal>
    </>
  );
};

export default AddWaterBtn;
