import { useSelector } from 'react-redux';
import { selectDate } from '../../../redux/date/dateSlice';
import { isToday } from 'date-fns';
import { formatDate } from '../../../shared/helpers/formatDate';
import s from './ChooseDate.module.css';

const ChooseDate = () => {
  const date = useSelector(selectDate);

  const { parsedDate, formattedDate } = formatDate(date);
  const isTodayDate = isToday(parsedDate);

  return <p className={s.date}>{isTodayDate ? 'Today' : formattedDate}</p>;
};

export default ChooseDate;
