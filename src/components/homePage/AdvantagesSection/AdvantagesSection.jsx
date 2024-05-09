import css from './AdvantagesSection.module.css';
import Picture from '../../../shared/components/Picture/Picture';
import RectangleImage from '../../../shared/images/homePage/Rectangle-min.png';
import RectangleImage2 from '../../../shared/images/homePage/Rectangle2-min.png';
import RectangleImage3 from '../../../shared/images/homePage/Rectangle3-min.png';
import RectangleImage2x from '../../../shared/images/homePage/Rectangle2x-min.png';
import RectangleImage22x from '../../../shared/images/homePage/Rectangle22x-min.png';
import RectangleImage32x from '../../../shared/images/homePage/Rectangle32x-min.png';

import male from '../../../shared/images/homePage/Male Memojis-min.png';
import male2 from '../../../shared/images/homePage/Male2 Memojis-min.png';
import male3 from '../../../shared/images/homePage/Male3Memojis-min.png';
import male2x from '../../../shared/images/homePage/Male2x-min.png';
import male22x from '../../../shared/images/homePage/Male22x-min.png';
import male32x from '../../../shared/images/homePage/Male32x-min.png';

export default function AdvantagesSection() {
  return (
    <div className={css.section}>
      <Picture
        mob={RectangleImage}
        tab={RectangleImage2}
        desc={RectangleImage3}
        mob2x={RectangleImage2x}
        tab2x={RectangleImage22x}
        desc2x={RectangleImage32x}
        className={css.section}
      />
      <div className={css.div}>
        <ul className={css.photo_list}>
          <li className={css.list_items}>
            <Picture
              mob={male}
              tab={male}
              desc={male}
              mob2x={male2x}
              tab2x={male2x}
              desc2x={male2x}
              width="47px"
              height="47px"
            />
          </li>
          <li className={css.list_items}>
            <Picture
              mob={male2}
              tab={male2}
              desc={male2}
              mob2x={male22x}
              tab2x={male22x}
              desc2x={male22x}
              width="47px"
              height="47px"
            />
          </li>
          <li className={css.list_items}>
            <Picture
              mob={male3}
              tab={male3}
              desc={male3}
              mob2x={male32x}
              tab2x={male32x}
              desc2x={male32x}
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
