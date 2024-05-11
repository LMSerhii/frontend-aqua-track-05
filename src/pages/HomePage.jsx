import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';
import DailyInfo from '../components/trackerPage/DailyInfo/DailyInfo';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
      <DailyInfo />
    </>
  );
}
