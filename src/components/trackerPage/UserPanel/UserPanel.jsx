import { useState } from 'react';
import { useAuth } from '../../../hooks';
import { Modal } from '../../../shared/components/Modal/Modal';
import { UserBar } from '../UserBar/UserBar';
import css from './UserPanel.module.css';

export const UserPanel = () => {
  const { user } = useAuth();
  const [isActiveSettings, setIsActiveSettings] = useState(false);
  const [isActiveLogout, setIsActiveLogout] = useState(false);

  return (
    <div className={css.userPanel}>
      <p className={css.text}>
        Hello, <strong>{user ? user.name : 'Anonymous'}!</strong>
      </p>
      <UserBar
        setIsActiveSettings={setIsActiveSettings}
        setIsActiveLogout={setIsActiveLogout}
      />

      {/* setting  */}
      <Modal active={isActiveSettings} setActive={setIsActiveSettings}>
        <p>Setting</p>
      </Modal>
      {/* setting  */}

      <Modal active={isActiveLogout} setActive={setIsActiveLogout}>
        <p>LOGOUT</p>
      </Modal>
    </div>
  );
};
