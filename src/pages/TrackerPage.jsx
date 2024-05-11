import { Helmet } from 'react-helmet-async';
import DailyInfo from '../components/trackerPage/DailyInfo/DailyInfo';

const TrackerPage = () => {
  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>
      <p>tracker</p>
      <DailyInfo />
    </>
  );
};

export default TrackerPage;
