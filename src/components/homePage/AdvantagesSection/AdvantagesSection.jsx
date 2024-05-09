import { NavLink } from 'react-router-dom';
import css from './AdvantagesSection.module.css';
export default function AdvantagesSection() {
  return (
    <div className={css.section}>
      
        <div className={css.div}>
          <ul className={css.photo_list}>
            <li className={css.list_items}>
              <img
                src="/src/shared/images/homePage/Male Memojis.png"
                alt="male"
                width="47px"
                height="47px"
              />
            </li>
            <li className={css.list_items}>
              <img
                src="/src/shared/images/homePage/Male2 Memojis.png"
                alt="male"
                width="47px"
                height="47px"
              />
            </li>
            <li className={css.list_items}>
              <img
                src="/src/shared/images/homePage/Male3Memojis.png"
                alt="male"
                width="47px"
                height="47px"
              />
            </li>
          </ul>
          <p className={css.parag}>
            Our <span className={css.span}>happy</span> custumers
          </p>

          <ul className={css.list_trk}>
            <li className={css.item_trk}>
              <div className={css.flex}>
                <div className={css.cycle}> </div>
                <p className={css.text}>Habit drive</p>
              </div>
            </li>
            <li className={css.item_trk}>
              <p className={css.text2}>View statistics</p>
            </li>
            <li className={css.item_trk}>
              <p className={css.text2}>Personal rate setting</p>
            </li>
          </ul>
        </div>
    </div>
  );
}
