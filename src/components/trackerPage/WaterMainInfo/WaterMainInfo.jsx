import { WaterProgressBar } from '../WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import bottle from '../../../shared/images/bottleImage/water_bottle.png';
import bottle2x from '../../../shared/images/bottleImage/water_bottle@2x.png';
import bottle3x from '../../../shared/images/bottleImage/water_bottle@3x.png';

export const WaterMainInfo = () => {
  return (
    <div className={css.bottle_page_wrapper}>
      <picture className={css.bottle_page_img}>
        {/*dekstop*/}
        <source media="(min-width: 1280px)" srcSet={bottle3x} type="image/png" />
        {/*tablet*/}
        <source media="(min-width: 768px)" srcSet={bottle2x}type="image/png" />
        {/*mobile*/}
        <source media="(min-width: 320px)" srcSet={bottle2x} type="image/png" />
        {/*default*/}
        <img className="hero-img" src={bottle} alt="bottle with water" width="259"
             height="314" />
      </picture>

      <p className={css.bottle_page_logo}>AQUATRACK</p>
      <div className={css.bottle_page_slider_wrapper}>
        <WaterProgressBar className={css.bottle_page_progress_bar} />
      </div>
    </div>
  );
};
