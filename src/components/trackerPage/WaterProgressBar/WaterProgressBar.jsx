import { Progress, Tooltip } from 'antd';
import css from './WaterProgressBar.module.css'

export const WaterProgressBar = () => {
  let windowWidth = window.innerWidth;

  const pBarWidth = windowWidth < 767 ? "100%" : "100%"
  const pBarHeight = windowWidth < 767 ? 6 : 8

  return (
    <div>
      <p className={css.today_text}>Today</p>
    <Tooltip title="PERCENTAGE HERE TOO">
      <Progress percent={10} size={[pBarWidth, pBarHeight]} showInfo={false} strokeColor="var(--lettuce)" />
    </Tooltip>
      <div className={css.percent_wrap}>
      <span className={css.percent}>0%</span>
      <span className={css.percent}>50%</span>
      <span className={css.percent}>100%</span>
      </div>
    </div>
  )
};

