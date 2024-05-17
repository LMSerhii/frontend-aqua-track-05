import { useState } from 'react';
import { UserSettingsForm } from '../UserSettingsForm/UserSettingsForm';
import s from './UserSettingsModal.module.css';
import { useTranslation } from 'react-i18next';
import { ModalSetting } from '../ModalSetting/ModalSetting';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';

export const UserSettingsModal = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  return (
    <ModalSetting active={active} setActive={setActive}>
      <button onClick={() => setActive(false)} className={s.btnClose}>
        <SharedSVG svgId="close" width={24} height={24} className={s.icon} />
      </button>
      <h2 className={s.settingCaption}>{t('UserSettingsModal.setting')}</h2>
      <UserSettingsForm />
    </ModalSetting>
  );
};

// export const UserSettingsModal = ({ active, setActive }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };
//   const { t } = useTranslation();
//   return (
//     <Section onClick={toggleModal} className={s.settingSection}>
//       <div
//         className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
//         onClick={() => setActive(false)}
//       >
//         <div
//           className={
//             active ? `${s.modalContent} ${s.active}` : `${s.modalContent}`
//           }
//           onClick={e => e.stopPropagation()}
//           // onClick={handleModalClick}
//         >
//           <button onClick={() => setActive(false)} className={s.btnClose}>
//             <svg className={s.icon} width="24" height="24">
//               <use xlinkHref={`${sprite}#close`}></use>
//             </svg>
//           </button>
//           <h2 className={s.settingCaption}>{t('UserSettingsModal.setting')}</h2>
//           <UserSettingsForm />
//         </div>
//       </div>
//     </Section>
//   );
// };
