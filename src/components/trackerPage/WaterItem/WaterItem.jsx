import glassImg from '../../../shared/images/trackerPage/glass@1x.png';
import { sprite } from '../../../shared/icons/index';

import s from './WaterItem.module.css';
import { useState } from 'react';
import { Modal } from '../../../shared/components/Modal/Modal';
import { WaterModal } from '../../modals/WaterModal/WaterModal';

const WaterItem = ({ item: { id, amount, time } }) => {
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
          setActive={setActiveEdit}
          id={id}
          waterValue={amount}
          time={time}
          title="Edit the entered amount of water"
          subTitle="Correct entered data:"
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
