// import { useState } from 'react';
import { useState } from 'react';
import Section from '../../../shared/components/Section/Section';
import { sprite } from '../../../shared/icons/index';
import { UserSettingsForm } from '../UserSettingsForm/UserSettingsForm';
import s from './UserSettingsModal.module.css';
import { useTranslation } from 'react-i18next';

export const UserSettingsModal = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Section onClick={toggleModal} className={s.settingSection}>
      <div
        className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
        onClick={() => setActive(false)}
      >
        <div
          className={
            active ? `${s.modalContent} ${s.active}` : `${s.modalContent}`
          }
          onClick={e => e.stopPropagation()}
          // onClick={handleModalClick}
        >
          <button onClick={() => setActive(false)} className={s.btnClose}>
            <svg width="24" height="24">
              <use xlinkHref={`${sprite}#close`}></use>
            </svg>
          </button>
          <h2 className={s.settingCaption}>{t('UserSettingsModal.setting')}</h2>
          <UserSettingsForm />
        </div>
      </div>
    </Section>
  );
};

// import s from './Modal.module.css';

// export const Modal = ({ active, setActive, children }) => {
//   return (
//     <div
//       className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
//       onClick={() => setActive(false)}
//     >
//       <div
//         className={
//           active ? `${s.modalContent} ${s.active}` : `${s.modalContent}`
//         }
//         onClick={e => e.stopPropagation()}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

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
