import { WaterProgressBar } from '../WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import bottle from './water_bottle.png';

export const WaterMainInfo = () => {
  return (
    <div className={css.bottle_page_wrapper}>
      <img className={css.bottle_page_img} src={bottle} alt="water bottle" />
      <p className={css.bottle_page_logo}>AQUATRACK</p>
      <div className={css.bottle_page_slider_wrapper}>
        <WaterProgressBar className={css.bottle_page_progress_bar} />
      </div>
    </div>
  );
};
