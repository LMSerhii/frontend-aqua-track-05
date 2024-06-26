import { WaterProgressBar } from '../WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import bottle1x from '../../../shared/images/bottleImage/water_bottle.png';
import bottle2x from '../../../shared/images/bottleImage/water_bottle@2x.png';
import bottle3x from '../../../shared/images/bottleImage/water_bottle@3x.png';
import Logo from '../../../shared/components/Logo/Logo.jsx';
import Button from '../../../shared/components/Button/Button.jsx';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG.jsx';
import { WaterModal } from '../../modals/WaterModal/WaterModal.jsx';
import { Modal } from '../../../shared/components/Modal/Modal.jsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDailyWater } from '../../../redux/auth/authSlice.js';
import { useGetDailyTrackQuery } from '../../../redux/tracker/trackerApi.js';
import { selectDate } from '../../../redux/date/dateSlice.js';
import { useTranslation } from 'react-i18next';

export const WaterMainInfo = () => {
  const [activeAdd, setActiveAdd] = useState(false);
  const dayOfWeek = useSelector(selectDate);
  const { t } = useTranslation();
  const width = window.innerWidth;
  const { data } = useGetDailyTrackQuery(dayOfWeek);
  const getDailyWater = useSelector(selectDailyWater);

  let drinkedWater = 0;

  data?.forEach(item => (drinkedWater += item.amount));

  const percentage = (drinkedWater / getDailyWater) * 100;

  return (
    <div className={css.bottle_page_wrapper} data-tour="waterMainInfo">
      <picture className={css.bottle_page_img}>
        {/*dekstop*/}
        <source
          media="(min-width: 1280px)"
          srcSet={`${bottle1x}, ${bottle2x} 2x, ${bottle3x} 3x`}
          type="image/png"
        />
        {/*tablet*/}
        <source
          media="(min-width: 768px)"
          srcSet={`${bottle1x}, ${bottle2x} 2x, ${bottle3x} 3x`}
          type="image/png"
        />
        {/*mobile*/}
        <source
          media="(min-width: 320px)"
          srcSet={`${bottle1x}, ${bottle2x} 2x, ${bottle3x} 3x`}
          type="image/png"
        />
        {/*default*/}
        <img
          className="bottle_page_img"
          src={bottle1x}
          alt="bottle with water"
        />
      </picture>

      <div className={css.bottle_page_norm_wrapper} data-tour="normaDaily">
        <span className={css.bottle_page_norm_wrapper_value}>
          {getDailyWater / 1000} {t('WaterMainInfo.liters')}
        </span>
        <span className={css.bottle_page_norm_wrapper_text}>
          {t('WaterMainInfo.normaDaily')}
        </span>
      </div>

      <div className={css.add_water_btn_wrap}>
        <Button
          data-tour="addFastWater"
          classname={css.add_water_btn}
          type="submit"
          onClick={() => setActiveAdd(true)}
        >
          <SharedSVG
            className={css.icon}
            width={width < 768 ? '16' : '21'}
            height={width < 768 ? '16' : '21'}
            svgId={'plus'}
          />
          {t('WaterMainInfo.addWater')}
        </Button>
      </div>

      <div className={css.logo}>
        <Logo />
      </div>

      <div
        data-tour="WaterProgressBar"
        className={css.bottle_page_slider_wrapper}
      >
        <WaterProgressBar
          className={css.bottle_page_progress_bar}
          percentage={percentage.toFixed(1)}
        />
      </div>

      <Modal active={activeAdd} setActive={setActiveAdd}>
        <WaterModal
          operation="add"
          title={t('WaterMainInfo.title')}
          subTitle={t('WaterMainInfo.subTitle')}
          setActive={setActiveAdd}
        />
      </Modal>
    </div>
  );
};
