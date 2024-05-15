import { Progress, Tooltip } from 'antd';
import css from './WaterProgressBar.module.css';
import { useTranslation } from 'react-i18next';

export const WaterProgressBar = ({ percentage }) => {
  let windowWidth = window.innerWidth;
  const { t } = useTranslation();
  const pBarWidth = windowWidth < 767 ? '100%' : '100%';
  const pBarHeight = windowWidth < 767 ? 6 : 8;

  return (
    <div>
      <p className={css.today_text}>{t('WaterProgressBar.today')}</p>
      <Tooltip
        title={`${t('WaterProgressBar.it')} ${percentage}% ${t(
          'WaterProgressBar.norma'
        )}`}
      >
        <Progress
          percent={percentage}
          size={[pBarWidth, pBarHeight]}
          showInfo={false}
          strokeColor="var(--lettuce)"
          status={'active'}
        />
      </Tooltip>
      <div className={css.percent_wrap}>
        <span className={css.percent}>0%</span>
        <span className={css.percent}>50%</span>
        <span className={css.percent}>100%</span>
      </div>
    </div>
  );
};
