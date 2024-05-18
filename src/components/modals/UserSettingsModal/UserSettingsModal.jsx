import { useTranslation } from 'react-i18next';

import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import { UserSettingsForm } from '../UserSettingsForm/UserSettingsForm';
import { ModalSetting } from '../ModalSetting/ModalSetting';

import s from './UserSettingsModal.module.css';

export const UserSettingsModal = ({ active, setActive }) => {
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
