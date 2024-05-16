import { useState } from 'react';
import { sprite } from '../../../shared/icons/index';
import Button from '../../../shared/components/Button/Button';
import { Modal } from '../../../shared/components/Modal/Modal';
import { WaterModal } from '../../modals/WaterModal/WaterModal';
import s from './AddWaterBtn.module.css';
import { useTranslation } from 'react-i18next';

const AddWaterBtn = ({ setAmountData }) => {
  const [activeAdd, setActiveAdd] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Button classname={s.addWaterBtn} onClick={() => setActiveAdd(true)}>
        <span className={s.plusIconWrap}>
          <svg className={s.plusIcon} width="20" height="20">
            <use xlinkHref={`${sprite}#plus`}></use>
          </svg>
        </span>
        <span>{t('waterModal.addWaterBtn')}</span>
      </Button>

      <Modal active={activeAdd} setActive={setActiveAdd}>
        <WaterModal
          operation="add"
          title={t('waterModal.addWaterTitle')}
          subTitle={t('waterModal.addWaterSubTitle')}
          setActive={setActiveAdd}
          setAmountData={setAmountData}
        />
      </Modal>
    </>
  );
};

export default AddWaterBtn;
