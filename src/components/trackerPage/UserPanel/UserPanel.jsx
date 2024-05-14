import { useState } from 'react';
import { useAuth } from '../../../hooks';
import { Modal } from '../../../shared/components/Modal/Modal';
import { UserBar } from '../UserBar/UserBar';
import s from './UserPanel.module.css';

export const UserPanel = () => {
  const { user } = useAuth();
  const [isActiveSettings, setIsActiveSettings] = useState(false);
  const [isActiveLogout, setIsActiveLogout] = useState(false);

  const croppName = str => {
    if (str.length > 8) {
      str = str.slice(0, 8) + '...';
    }
    return str;
  };

  return (
    <div className={s.userPanel}>
      <p className={s.text}>
        Hello, <strong>{user ? croppName(user.name) : 'Anonymous'}!</strong>
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
