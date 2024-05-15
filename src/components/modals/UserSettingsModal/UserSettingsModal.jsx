// import { useState } from 'react';
import { useState } from 'react';
import Section from '../../../shared/components/Section/Section';
import { sprite } from '../../../shared/icons/index';
import { UserSettingsForm } from '../UserSettingsForm/UserSettingsForm';
import s from './UserSettingsModal.module.css';
import { useTranslation } from 'react-i18next';
export const UserSettingsModal = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const { t } = useTranslation();
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
            <svg className={s.icon} width="24" height="24">
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

{
  /* <>
  <div onClick={toggleModal} className={css.wrapper}>
    <div>
      <Button onClick={toggleSettingsModalOpen} className={css.settingBtn}>
        <svg width="16" height="16">
          <use xlinkHref={`${sprite}#settings`}></use>
        </svg>
        Setting
      </Button>
    </div>
    {isOpen && (
      <div className="modal-overlay" onClick={closeModal}>
        <UserSettingsModal active={isOpen} setActive={setIsOpen} />
      </div>
    )}
    <Button onClick={toggleLogoutModalOpen} className={css.logoutBtn}>
      <svg width="16" height="16" className={css.svg}>
        <use xlinkHref={`${sprite}#log_out`}></use>
      </svg>
      Log out
    </Button>
  </div>
</>; */
}
