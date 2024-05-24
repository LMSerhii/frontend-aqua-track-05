import { Helmet } from 'react-helmet-async';
import Section from '../shared/components/Section/Section';
import { WaterMainInfo } from '../components/trackerPage/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../components/trackerPage/WaterDetailedInfo/WaterDetailedInfo';
import TourButton from '../shared/components/ButtonTour/ButtonTour';

const TrackerPage = () => {
  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>
      <Section>
        <TourButton />
        <WaterMainInfo />
        <WaterDetailedInfo />
      </Section>
    </>
  );
};

export default TrackerPage;
