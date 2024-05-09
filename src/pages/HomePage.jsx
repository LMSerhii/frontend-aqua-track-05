import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';
import { UserBar } from '../components/trackerPage/UserBar/UserBar';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
      <UserBar />
    </>
  );
}
