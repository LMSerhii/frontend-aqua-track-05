// import { Helmet } from 'react-helmet-async';
// import Home from '../components/homePage/Home';

// export default function HomePage() {
//   return (
//     <>
//       <Helmet>
//         <title>Home Page</title>
//       </Helmet>
//       <Home />
//     </>
//   );
// }

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Modal } from '../shared/components/Modal/Modal';
import { UserSettingsModal } from '../components/modals/UserSettingsModal/UserSettingsModal.jsx';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <p>Home page</p>
      <button onClick={() => setIsOpen(true)}>Open modalSetting</button>
      <Modal active={isOpen} setActive={setIsOpen}>
        <UserSettingsModal />
      </Modal>
    </>
  );
}
