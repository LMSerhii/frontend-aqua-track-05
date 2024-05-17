import { Helmet } from 'react-helmet-async';
import Section from '../shared/components/Section/Section';
import { WaterMainInfo } from '../components/trackerPage/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../components/trackerPage/WaterDetailedInfo/WaterDetailedInfo';
import { useSelector } from 'react-redux';
import { selectDate } from '../redux/date/dateSlice.js';
import { useEffect, useState } from 'react';
import { useGetAllEntyiesByDayMutation } from '../redux/tracker/trackerApi.js';

const TrackerPage = () => {

  const date = useSelector(selectDate);
  const [amountData, setAmountData] = useState([]);

  const [getAllEntyiesByDay, { data, isLoading, isError }] =
    useGetAllEntyiesByDayMutation();

  useEffect(() => {
    getAllEntyiesByDay(date);
  }, [getAllEntyiesByDay, date]);

  useEffect(() => {
    if (data) setAmountData(data.data);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>
      <Section>
        <WaterMainInfo amountData={amountData} setAmountData={setAmountData}/>
        <WaterDetailedInfo amountData={amountData} setAmountData={setAmountData} isLoading={isLoading} isError={isError}/>
      </Section>
    </>
  );
};

export default TrackerPage;
