import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';
import WaterList from '../components/trackerPage/WaterList/WaterList';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
      <WaterList />
    </>
  );
}
