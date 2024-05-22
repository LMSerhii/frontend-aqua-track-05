import { Progress, Tooltip } from 'antd';
import css from './WaterProgressBar.module.css';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../../../shared/helpers/formatDate';
import { useSelector } from 'react-redux';
import { getCurrentDate } from '../../../shared/helpers/dateServices';
import { selectDate } from '../../../redux/date/dateSlice';

export const WaterProgressBar = ({ percentage }) => {
  let windowWidth = window.innerWidth;

  const date = useSelector(selectDate);
  const today = getCurrentDate();

  const { t } = useTranslation();

  const pBarWidth = windowWidth < 767 ? '100%' : '100%';
  const pBarHeight = windowWidth < 767 ? 6 : 8;

  const { formattedDate } = formatDate(date);

  const [day, month] = formattedDate.split(',');

  const monthKey = month.trim().toLowerCase();

  const months = {
    january: t('ChooseDate.january'),
    february: t('ChooseDate.february'),
    march: t('ChooseDate.march'),
    april: t('ChooseDate.april'),
    may: t('ChooseDate.may'),
    june: t('ChooseDate.june'),
    july: t('ChooseDate.july'),
    august: t('ChooseDate.august'),
    september: t('ChooseDate.september'),
    october: t('ChooseDate.october'),
    november: t('ChooseDate.november'),
    december: t('ChooseDate.december'),
  };

  return (
    <div>
      <p className={css.today_text}>
        {date === today
          ? t('WaterProgressBar.today')
          : `${day}, ${months[monthKey]}`}
      </p>
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
