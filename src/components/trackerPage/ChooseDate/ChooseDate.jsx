import s from './ChooseDate.module.css';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectDate } from '../../../redux/date/dateSlice';
import { getCurrentDate } from '../../../shared/helpers/dateServices';
import { formatDate } from '../../../shared/helpers/formatDate';

const ChooseDate = () => {
  const date = useSelector(selectDate);
  const today = getCurrentDate();

  const { t } = useTranslation();

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
    <p className={s.date}>
      {date === today ? t('ChooseDate.today') : `${day}, ${months[monthKey]}`}
    </p>
  );
};

export default ChooseDate;
