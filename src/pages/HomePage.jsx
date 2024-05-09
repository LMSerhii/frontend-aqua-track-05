import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';
import { WaterForm } from '../components/modals/WaterForm/WaterForm';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
      <WaterForm />
    </>
  );
}
