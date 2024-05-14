import { useState } from 'react';
import s from './ChooseDate.module.css';

const date = '05.05.2024';
const [day, month, year] = date.split('.');
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formattedDate = `${day}, ${months[parseInt(month) - 1]}, ${year}`;

const ChooseDate = () => {
  const [isToday, setIsToday] = useState(false);

  return <p className={s.date}>{isToday ? 'Today' : formattedDate}</p>;
};

export default ChooseDate;
