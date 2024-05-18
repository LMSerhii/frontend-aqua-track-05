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

  const [day, month, year] = date.split('-');

  const months = [
    t('ChooseDate.january'),
    t('ChooseDate.february'),
    t('ChooseDate.march'),
    t('ChooseDate.april'),
    t('ChooseDate.may'),
    t('ChooseDate.june'),
    t('ChooseDate.july'),
    t('ChooseDate.august'),
    t('ChooseDate.september'),
    t('ChooseDate.october'),
    t('ChooseDate.november'),
    t('ChooseDate.december'),
  ];

  return (
    <p className={s.date}>
      {date === today ? t('ChooseDate.today') : formattedDate}
    </p>
  );
};

export default ChooseDate;
