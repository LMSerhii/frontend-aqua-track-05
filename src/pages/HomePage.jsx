import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';
<<<<<<< HEAD
import { MonthInfo } from '../components/trackerPage/MonthInfo/MonthInfo';

// import { CalendarPagination } from '../components/trackerPage/CalendarPagination/CalendarPagination';
// import { Calendar } from '../components/trackerPage/Calendar/Calendar';
=======
>>>>>>> main

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
