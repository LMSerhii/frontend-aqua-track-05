import css from './AdvantagesSection.module.css';
import Picture from '../../../shared/components/Picture/Picture';
import RectangleImage from '../../../shared/images/homePage/Rectangle.png';
import RectangleImage2 from '../../../shared/images/homePage/Rectangle2.png';
import RectangleImage3 from '../../../shared/images/homePage/Rectangle3.png';

export default function AdvantagesSection() {
  return (
    <div className={css.section}>
      <Picture
        mob={RectangleImage}
        tab={RectangleImage2}
        desc={RectangleImage3}
        mob2x={RectangleImage}
        tab2x={RectangleImage2}
        desc2x={RectangleImage3}
        className={css.section}
      />
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
          Our <span className={css.span}>happy</span> customers
        </p>
        <ul className={css.list_trk}>
          <li className={css.item_trk}>
            <div className={css.flex}>
              <div className={css.cycle}></div>
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
