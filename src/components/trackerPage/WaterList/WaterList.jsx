// WaterList.jsx
import WaterItem from '../WaterItem/WaterItem';
import data from '../../../dataWaterList';
import s from './WaterList.module.css';
// import { useGetAllEntriesByDayMutation } from '../../../redux/tracker/trackerApi';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { selectDate } from '../../../redux/tracker/dateSlice';

const WaterList = () => {
  // const date = useSelector(selectDate);
  // console.log('========');
  // console.log(date);
  // console.log('========');

  // const [getAllEntriesByDay, { data: perDay, isLoading, isError }] =
  //   useGetAllEntriesByDayMutation();

  // useEffect(() => {
  //   getAllEntriesByDay(date);
  // }, [date]);

  return (
    <ul className={s.waterListWrap}>
      {data.map(item => (
        <WaterItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default WaterList;
