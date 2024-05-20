import { useState } from 'react';
import { useAuth } from '../../../hooks';
import { UserBar } from '../UserBar/UserBar';
import css from './UserPanel.module.css';
import { UserSettingsModal } from '../../modals/UserSettingsModal/UserSettingsModal';
import { useTranslation } from 'react-i18next';
import { LogOutModal } from '../../modals/LogOutModal/LogOutModal';
import { DeleteUser } from '../../modals/DeleteUser/DeleteUser';

export const UserPanel = () => {
  const { user } = useAuth();
  const [isActiveSettings, setIsActiveSettings] = useState(false);
  const [isActiveLogout, setIsActiveLogout] = useState(false);
  const [isActiveDelete, setIsActiveDelete] = useState(false);
  const { t } = useTranslation();

  const croppName = str => {
    if (str.length > 8) {
      str = str.slice(0, 8) + '...';
    }
    return str;
  };

  return (
    <>
      <div className={css.userPanel}>
        <p className={css.text}>
          {t('UserPanel.helloText')}
          <strong>{user ? croppName(user.name) : 'Anonymous'}!</strong>
        </p>
        <UserBar
          setIsActiveSettings={setIsActiveSettings}
          setIsActiveLogout={setIsActiveLogout}
          setIsActiveDelete={setIsActiveDelete}
        />
      </div>
      <UserSettingsModal
        active={isActiveSettings}
        setActive={setIsActiveSettings}
      />

      <LogOutModal active={isActiveLogout} setActive={setIsActiveLogout} />
      <DeleteUser active={isActiveDelete} setActive={setIsActiveDelete} />
    </>
  );
};
