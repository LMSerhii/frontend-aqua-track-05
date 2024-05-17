import { useState } from 'react';
import { sprite } from '../../../shared/icons/index';
import { Modal } from '../../../shared/components/Modal/Modal';
import { WaterModal } from '../../modals/WaterModal/WaterModal';
import s from './WaterItem.module.css';
import { useTranslation } from 'react-i18next';
import { DeleteWaterModal } from '../../modals/DeleteWaterModal/DeleteWaterModal';
import { useSelector } from 'react-redux';
import { selectDate } from '../../../redux/date/dateSlice';

const WaterItem = ({ item: { _id: id, amount, time }, setAmountData }) => {
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeDelete, setActiveDelete] = useState(false);
  const { t } = useTranslation();

  const date = useSelector(selectDate);

  const formattedAmount =
    amount >= 1000
      ? `${(amount / 1000).toFixed(1).replace('.0', '')}${t(
          'WaterItem.woterL'
        )}`
      : `${amount}${t('WaterItem.woterMl')}`;

  return (
    <>
      <li className={s.card}>
        <svg className={s.glassIcon} width="38" height="38">
          <use xlinkHref={`${sprite}#glass`}></use>
        </svg>
        <div className={s.cardInfo}>
          <span className={s.amountWater}>{formattedAmount}</span>
          <span className={s.time}>{time}</span>
        </div>

        <div className={s.cardBtnsBlock}>
          <button className={s.iconBtnWrap} onClick={() => setActiveEdit(true)}>
            <svg className={s.cardIcon} width="14" height="14">
              <use xlinkHref={`${sprite}#edit-2`}></use>
            </svg>
          </button>
          <button
            className={s.iconBtnWrap}
            onClick={() => setActiveDelete(true)}
          >
            <svg className={s.cardIcon} width="14" height="14">
              <use xlinkHref={`${sprite}#trash2`}></use>
            </svg>
          </button>
        </div>
      </li>

      <Modal active={activeEdit} setActive={setActiveEdit}>
        <WaterModal
          operation="edit"
          title="Edit the entered amount of water"
          subTitle="Correct entered data:"
          entry={{ id, amount }}
          setActive={setActiveEdit}
          setAmountData={setAmountData}
        />
      </Modal>

      <Modal active={activeDelete} setActive={setActiveDelete}>
        <DeleteWaterModal
          setActive={setActiveDelete}
          entry={{ id, amount, date }}
          setAmountData={setAmountData}
        />
      </Modal>
    </>
  );
};

export default WaterItem;
