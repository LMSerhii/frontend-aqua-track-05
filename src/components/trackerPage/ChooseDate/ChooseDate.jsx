import { useSelector } from 'react-redux';
import { selectDate } from '../../../redux/date/dateSlice';
import { isToday } from 'date-fns';
import { formatDate } from '../../../shared/helpers/formatDate';
import s from './ChooseDate.module.css';
import { useTranslation } from 'react-i18next';

const ChooseDate = () => {

  const { t } = useTranslation();
  const date = '05.05.2024';
  const [day, month, year] = date.split('.');
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

  const formattedDate = `${day}, ${months[parseInt(month) - 1]}, ${year}`;

  const [isToday, setIsToday] = useState(false);

  return (
    <p className={s.date}>{isToday ? t('ChooseDate.today') : formattedDate}</p>
  );

  const date = useSelector(selectDate);

  const { parsedDate, formattedDate } = formatDate(date);
  const isTodayDate = isToday(parsedDate);

  return <p className={s.date}>{isTodayDate ? 'Today' : formattedDate}</p>;

};

export default ChooseDate;
