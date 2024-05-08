// import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { UserSettingsModal } from '../components/modals/UserSettingsModal/UserSettingsModal.jsx';

export default function HomePage() {
  // const [isOpen, setIsOpen] = useState('false');

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <p>Home page</p>
      {/* <button type="button" onClick={isOpen}>
        Open modalSetting
      </button> */}
      <UserSettingsModal />
    </>
  );
}
