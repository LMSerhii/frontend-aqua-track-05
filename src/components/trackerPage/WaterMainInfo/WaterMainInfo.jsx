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
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDailyWater, selectIsRefreshing } from '../../../redux/auth/authSlice.js';

export const WaterMainInfo = ({ amountData, setAmountData, isLoading, isError }) => {

  const [activeAdd, setActiveAdd] = useState(false);
  const getDailyWater = useSelector(selectDailyWater);

  const { t } = useTranslation();

  const width = window.innerWidth;


  const getConsumedWater = isLoading && isNaN(amountData) || amountData

  let consumedWater = 0;
  getConsumedWater?.forEach(item => consumedWater += item.amount)

  console.log(consumedWater);



  const dailyWaterValue = getDailyWater ? getDailyWater / 1000 : 1.5;
  const percentage = (consumedWater / getDailyWater ) * 100;

  const displayedDailyWater = isLoading || isNaN(dailyWaterValue) ? 0 : dailyWaterValue.toFixed(2);
  const displayedPercentage = isLoading || isNaN(percentage) ? 0 : percentage.toFixed(1);



  return (
    <div className={css.bottle_page_wrapper}>
      <picture className={css.bottle_page_img}>
        {/* dekstop */}
        <source
          media="(min-width: 1280px)"
          srcSet={`${bottle1x}, ${bottle2x} 2x, ${bottle3x} 3x`}
          type="image/png"
        />
        {/* tablet */}
        <source
          media="(min-width: 768px)"
          srcSet={`${bottle1x}, ${bottle2x} 2x, ${bottle3x} 3x`}
          type="image/png"
        />
        {/* mobile */}
        <source
          media="(min-width: 320px)"
          srcSet={`${bottle1x}, ${bottle2x} 2x, ${bottle3x} 3x`}
          type="image/png"
        />
        {/* default */}
        <img className="bottle_page_img" src={bottle1x} alt="bottle with water" />
      </picture>

      <div className={css.bottle_page_norm_wrapper}>
        <span className={css.bottle_page_norm_wrapper_value}>
          {displayedDailyWater} {t('WaterMainInfo.liters')}
        </span>
        <span className={css.bottle_page_norm_wrapper_text}>
          {t('WaterMainInfo.normaDaily')}
        </span>
      </div>

      <div className={css.add_water_btn_wrap}>
        <Button
          classname={css.add_water_btn}
          type="submit"
          onClick={() => setActiveAdd(true)}
        >
          <SharedSVG
            className={css.icon}
            width={width < 768 ? '14' : '21'}
            height={width < 768 ? '14' : '21'}
            svgId={'plus'}
          />{' '}
          {t('WaterMainInfo.addWater')}
        </Button>
      </div>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.bottle_page_slider_wrapper}>
        <WaterProgressBar
          className={css.bottle_page_progress_bar}
          percentage={displayedPercentage}
        />
      </div>

      <Modal active={activeAdd} setActive={setActiveAdd}>
        <WaterModal
          operation="add"
          title={t('WaterMainInfo.title')}
          subTitle={t('WaterMainInfo.subTitle')}
          setActive={setActiveAdd}
          setAmountData={setAmountData}
        />
      </Modal>
    </div>
  );
};
