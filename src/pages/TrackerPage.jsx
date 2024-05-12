import { Helmet } from 'react-helmet-async';
import Section from '../shared/components/Section/Section';
import { WaterMainInfo } from '../components/trackerPage/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../components/trackerPage/WaterDetailedInfo/WaterDetailedInfo';

const TrackerPage = () => {
  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>
      <Section>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </Section>
    </>
  );
};

export default TrackerPage;
