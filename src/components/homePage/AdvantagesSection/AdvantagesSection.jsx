import css from './AdvantagesSection.module.css';
import Picture from '../../../shared/components/Picture/Picture';
import { useTranslation } from 'react-i18next';
import Loader from '../../../shared/components/Loader/Loader';
import { Badge } from 'antd';
import {
  desktop,
  desktop2x,
  male1,
  male1_2x,
  male2,
  male2_2x,
  male3,
  male3_2x,
  mobile,
  mobile2x,
  tablet,
  tablet2x,
} from '../../../shared/images/homepage2';
import { useGetAllUsersQuery } from '../../../redux/authApi/authApi';

export default function AdvantagesSection() {
  const { t } = useTranslation();
  const { data } = useGetAllUsersQuery();

  return (
    <div className={css.section}>
      <Picture
        mob={mobile}
        tab={tablet}
        desc={desktop}
        mob2x={mobile2x}
        tab2x={tablet2x}
        desc2x={desktop2x}
        className={css.section}
        alt={'Girl drinking water'}
      />

      <div className={css.div}>
        <div className={css.divsecond}>
          <Badge
            count={data ? data.allUsers : <Loader width={20} height={20} />}
            overflowCount={20}
            className={css.badge}
            style={{
              backgroundColor: 'var(--lettuce)',
              color: 'var(--dark-blue)',
              fontSize: '10px',
            }}
          >
            <div className={css.badgeContent}></div>
          </Badge>

          <ul className={css.photo_list}>
            <li className={css.list_items}>
              <Picture
                mob={male1}
                tab={male1}
                desc={male1}
                mob2x={male1_2x}
                tab2x={male1_2x}
                desc2x={male1_2x}
                alt={'Costumer`s photo'}
                width="47px"
                height="47px"
              />
            </li>
            <li className={css.list_items}>
              <Picture
                mob={male2}
                tab={male2}
                desc={male2}
                mob2x={male2_2x}
                tab2x={male2_2x}
                desc2x={male2_2x}
                alt={'Costumer`s photo'}
                width="47px"
                height="47px"
              />
            </li>
            <li className={css.list_items}>
              <Picture
                mob={male3}
                tab={male3}
                desc={male3}
                mob2x={male3_2x}
                tab2x={male3_2x}
                desc2x={male3_2x}
                alt={'Costumer`s photo'}
                width="47px"
                height="47px"
              />
            </li>
          </ul>
          <p className={css.parag}>
            <span className={css.paragSpan}>
              {t('advantagesSection.ourParag')}
            </span>
            <span className={css.span}>{t('advantagesSection.happySpan')}</span>
            <span className={css.paragSpanLast}>
              {t('advantagesSection.customersParag')}
            </span>
          </p>
        </div>
      </div>
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
  );
}
