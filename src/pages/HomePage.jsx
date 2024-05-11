import { Helmet } from 'react-helmet-async';
import Home from '../components/homePage/Home';
import { WaterModal } from '../components/modals/WaterModal/WaterModal';
import { useState } from 'react';
import { Modal } from '../shared/components/Modal/Modal';

export default function HomePage() {
  const [activeAdd, setActiveAdd] = useState(false);
  const [activeEdit, setActiveEdit] = useState(false);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
      <button onClick={() => setActiveAdd(true)}>add</button>
      <button onClick={() => setActiveEdit(true)}>edit</button>

      <Modal active={activeAdd} setActive={setActiveAdd}>
        <WaterModal
          operation="add"
          title="Add water"
          subTitle="Choose a value"
          setActive={setActiveAdd}
        />
      </Modal>

      <Modal active={activeEdit} setActive={setActiveEdit}>
        <WaterModal
          operation="edit"
          title="Edit the entered amount of water"
          subTitle="Correct entered data:"
          id="dfsdfdsf"
          setActive={setActiveEdit}
        />
      </Modal>
    </>
  );
}
