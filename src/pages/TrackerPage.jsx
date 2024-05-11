import { Helmet } from 'react-helmet-async';
import DailyInfo from '../components/trackerPage/DailyInfo/DailyInfo';
import Section from '../shared/components/Section/Section';

const TrackerPage = () => {
  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>
      <Section>
        <DailyInfo />
      </Section>
    </>
  );
};

export default TrackerPage;
