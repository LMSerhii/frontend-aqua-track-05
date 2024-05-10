import glassImg from '../../../shared/images/trackerPage/glass@1x.png';
import { sprite } from '../../../shared/icons/index';

import s from './WaterItem.module.css';

const WaterItem = ({ setActiveEdit }) => {
  return (
    <li className={s.card}>
      <img
        src={glassImg}
        alt="Glass of water"
        width="38"
        height="38"
        className={s.cardImg}
      />

      <div className={s.cardInfo}>
        <span className={s.amountWater}>250 ml</span>
        <span className={s.time}>7:00 AM</span>
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
  );
};

export default WaterItem;
