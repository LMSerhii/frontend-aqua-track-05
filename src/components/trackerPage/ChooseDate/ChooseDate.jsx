import { useState } from 'react';
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
};

export default ChooseDate;
