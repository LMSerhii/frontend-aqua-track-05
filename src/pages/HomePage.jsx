import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';
import { MonthInfo } from '../components/trackerPage/MonthInfo/MonthInfo';
import { useState } from 'react';
import Modal from 'antd/es/modal/Modal';
import { WaterModalDelete } from '../components/modals/WaterModalDelete/WaterModalDelete';

// import { CalendarPagination } from '../components/trackerPage/CalendarPagination/CalendarPagination';
// import { Calendar } from '../components/trackerPage/Calendar/Calendar';

export default function HomePage() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
      <MonthInfo />

      <button onClick={() => setActive(true)}>open</button>

      <Modal active={active} setActive={setActive}>
        <WaterModalDelete id="id" setActive={setActive} />
      </Modal>
    </>
  );
}
