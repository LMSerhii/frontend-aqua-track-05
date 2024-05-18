import css from './AdvantagesSection.module.css';
import Picture from '../../../shared/components/Picture/Picture';
import RectangleImage from '../../../shared/images/homePage/Rectangle-min.png';
import RectangleImage2 from '../../../shared/images/homePage/Rectangle2-min.png';
import RectangleImage3 from '../../../shared/images/homePage/Rectangle3-min.png';
import RectangleImage2x from '../../../shared/images/homePage/Rectangle2x-min.png';
import RectangleImage22x from '../../../shared/images/homePage/Rectangle22x-min.png';
import RectangleImage32x from '../../../shared/images/homePage/Rectangle32x-min.png';

// import male from '../../../shared/images/homePage/Male Memojis-min.png';
// import male2 from '../../../shared/images/homePage/Male2 Memojis-min.png';
// import male3 from '../../../shared/images/homePage/Male3Memojis-min.png';
// import male2x from '../../../shared/images/homePage/Male2x-min.png';
// import male22x from '../../../shared/images/homePage/Male22x-min.png';
// import male32x from '../../../shared/images/homePage/Male32x-min.png';

import male1 from '../../../shared/images/homepage2/male1.png';
import male2x from '../../../shared/images/homepage2/male1@2x.png';
import male2 from '../../../shared/images/homepage2/male2.png';
import male22x from '../../../shared/images/homepage2/male2@2x.png';
import male3 from '../../../shared/images/homepage2/male3.png';
import male32x from '../../../shared/images/homepage2/male3@2x.png';

import { useTranslation } from 'react-i18next';

export default function AdvantagesSection() {
  const { t } = useTranslation();
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
              mob={male1}
              tab={male1}
              desc={male1}
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
          {t('advantagesSection.ourParag')}{' '}
          <span className={css.span}>{t('advantagesSection.happySpan')}</span>{' '}
          {t('advantagesSection.customersParag')}
        </p>
        <ul className={css.list_trk}>
          <li className={css.item_trk}>
            <div className={css.flex}>
              <div className={css.cycle}></div>
              <p className={css.text}>{t('advantagesSection.textHabit')}</p>
            </div>
          </li>
          <li className={css.item_trk}>
            <p className={css.text2}>{t('advantagesSection.textView')}</p>
          </li>
          <li className={css.item_trk}>
            <p className={css.text2}>{t('advantagesSection.textPersonal')}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
