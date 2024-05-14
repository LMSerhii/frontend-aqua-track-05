import { useState } from 'react';
import { sprite } from '../../../shared/icons/index';
import { Modal } from '../../../shared/components/Modal/Modal';
import { WaterModal } from '../../modals/WaterModal/WaterModal';
import s from './WaterItem.module.css';

const WaterItem = ({ item: { _id, amount, time } }) => {
  const [activeEdit, setActiveEdit] = useState(false);
  // const [activeDelete, setActiveDelete] = useState(false);

  return (
    <>
      <li className={s.card}>
        <svg className={s.glassIcon} width="38" height="38">
          <use xlinkHref={`${sprite}#glass`}></use>
        </svg>
        <div className={s.cardInfo}>
          <span className={s.amountWater}>{amount} ml</span>
          <span className={s.time}>{time}</span>
        </div>

        <div className={s.cardBtnsBlock}>
          <button className={s.iconBtnWrap} onClick={() => setActiveEdit(true)}>
            <svg className={s.cardIcon} width="14" height="14">
              <use xlinkHref={`${sprite}#edit-2`}></use>
            </svg>
          </button>
          <button className={s.iconBtnWrap}>
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
          id={_id}
          setActive={setActiveEdit}
        />
      </Modal>

      {/* <Modal active={activeDelete} setActive={setActiveDelete}>
        <WaterModal
          setActive={setActiveDelete}
          id={id}
        />
      </Modal> */}
    </>
  );
};

export default WaterItem;
