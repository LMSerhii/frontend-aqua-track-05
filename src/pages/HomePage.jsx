import { Helmet } from 'react-helmet-async';
// import { UserBar } from '../components/trackerPage/UserBar/UserBar';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <p>Home page</p>
      {/* <UserBar /> */}
    </>
  );
}
