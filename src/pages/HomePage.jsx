import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
    </>
  );
}
