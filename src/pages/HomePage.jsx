import { Helmet } from 'react-helmet-async';
import { WaterMainInfo } from '../components/trackerPage/WaterMainInfo/WaterMainInfo.jsx';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <p>Home page</p>
      <WaterMainInfo />
    </>
  );
}
