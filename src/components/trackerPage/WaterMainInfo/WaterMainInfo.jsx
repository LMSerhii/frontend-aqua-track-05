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
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDailyWater } from '../../../redux/auth/authSlice.js';
import { useGetAllEntyiesByDayMutation } from '../../../redux/tracker/trackerApi.js';
import { selectDate } from '../../../redux/date/dateSlice.js';

export const WaterMainInfo = () => {
  const [activeAdd, setActiveAdd] = useState(false);
  const dayOfWeek = useSelector(selectDate);
  const getDailyWater = useSelector(selectDailyWater);
  const [amountData, setAmountData] = useState([]);

  const [getAllEntyiesByDay, { data, isLoading }] =
    useGetAllEntyiesByDayMutation(dayOfWeek);

  useEffect(() => {
    getAllEntyiesByDay(dayOfWeek);
  }, [getAllEntyiesByDay, dayOfWeek, getDailyWater]);

  useEffect(() => {
    if (data) setAmountData(data.data);
  }, [data,getDailyWater]);

  const water = amountData

  let drinkedWater = 0;

  water?.forEach(item => drinkedWater += item.amount)

  const width = window.innerWidth;


  const dailyWater = getDailyWater === null ? 1.5 : `${getDailyWater / 1000}`

  const dailyWaterMl = parseFloat(dailyWater) * 1000;

  const percentage = (drinkedWater / dailyWaterMl ) * 100;


  return (<div className={css.bottle_page_wrapper}>
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

      <div className={css.bottle_page_norm_wrapper}>
        <span className={css.bottle_page_norm_wrapper_value}>{isNaN(dailyWater) ? 0 : Number(dailyWater).toFixed(2)} L</span>
        <span className={css.bottle_page_norm_wrapper_text}>
          My Daily Norma
        </span>
      </div>

      <div className={css.add_water_btn_wrap}>
        <Button classname={css.add_water_btn} type="submit" onClick={() => setActiveAdd(true)}>
          <SharedSVG className={css.icon}
                     width={width < 768 ? "14" : "21"}
                     height={width < 768 ? "14" : "21"}
                     svgId={'plus'} /> Add Water
        </Button>
      </div>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.bottle_page_slider_wrapper}>
        <WaterProgressBar className={css.bottle_page_progress_bar} percentage={isNaN(dailyWater) ? 0 : percentage.toFixed(1)} />
      </div>

      <Modal active={activeAdd} setActive={setActiveAdd}>
        <WaterModal
          operation="add"
          title="Add water"
          subTitle="Choose a value"
          setActive={setActiveAdd}
        />
      </Modal>
    </div>

  );
};
