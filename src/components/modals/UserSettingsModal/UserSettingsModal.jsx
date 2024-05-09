// import { useState } from 'react';
import { sprite } from '../../../shared/icons/index';
import { UserSettingsForm } from '../UserSettingsForm/UserSettingsForm';
import s from './UserSettingsModal.module.css';

export const UserSettingsModal = () => {
  return (
    <>
      <div>
        <button className={s.btnClose}>
          <svg width="24" height="24">
            <use xlinkHref={`${sprite}#close`}></use>
          </svg>
        </button>
      </div>
      <h2>Setting</h2>
      <UserSettingsForm />
    </>
  );
};

// import { useState } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { Modal } from '../shared/components/Modal/Modal';
// import { UserSettingsModal } from '../components/modals/UserSettingsModal/UserSettingsModal.jsx';

// export default function HomePage() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       <Helmet>
//         <title>Home Page</title>
//       </Helmet>
//       <p>Home page</p>
//       <button onClick={() => setIsOpen(true)}>Open modalSetting</button>
//       <Modal active={isOpen} setActive={setIsOpen}>
//         <UserSettingsModal />
//       </Modal>
//     </>
//   );
// }
