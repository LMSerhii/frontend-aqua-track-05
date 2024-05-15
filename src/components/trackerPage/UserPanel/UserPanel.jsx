import { useState } from 'react';
import { useAuth } from '../../../hooks';
import { Modal } from '../../../shared/components/Modal/Modal';
import { UserBar } from '../UserBar/UserBar';
import css from './UserPanel.module.css';
import { UserSettingsModal } from '../../modals/UserSettingsModal/UserSettingsModal';
import { useTranslation } from 'react-i18next';
export const UserPanel = () => {
  const { user } = useAuth();
  const [isActiveSettings, setIsActiveSettings] = useState(false);
  const [isActiveLogout, setIsActiveLogout] = useState(false);
  const { t } = useTranslation();
  return (
    <div className={css.userPanel}>
      <p className={css.text}>
        {t('UserPanel.helloText')}
        <strong>{user ? user.name : 'Anonymous'}!</strong>
      </p>
      <UserBar
        setIsActiveSettings={setIsActiveSettings}
        setIsActiveLogout={setIsActiveLogout}
      />

      <UserSettingsModal
        active={isActiveSettings}
        setActive={setIsActiveSettings}
      />

      <Modal active={isActiveLogout} setActive={setIsActiveLogout}>
        <p>{t('UserPanel.logout')}</p>
      </Modal>
    </div>
  );
};
