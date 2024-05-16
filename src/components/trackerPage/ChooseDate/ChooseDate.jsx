import { useEffect, useState } from 'react';
import s from './ChooseDate.module.css';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectDate } from '../../../redux/date/dateSlice';
import { getCurrentDate } from '../../../shared/helpers/dateServices';
import { formatDate } from '../../../shared/helpers/formatDate';

const ChooseDate = () => {
  const date = useSelector(selectDate);
  // const date = '05-05-2024';
  const [isToday, setIsToday] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const today = getCurrentDate();

    if (date === today) setIsToday(true);
  }, [date]);

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
    <p className={s.date}>{isToday ? t('ChooseDate.today') : formattedDate}</p>
  );
};

export default ChooseDate;
