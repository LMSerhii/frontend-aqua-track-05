import { useState } from 'react';
import Button from '../../../shared/components/Button/Button';
import { sprite } from '../../../shared/icons/index';

import css from './UserBarPopover.module.css';

export const UserBarPopover = () => {
  const [isUserSettingsModalOpen, setIsUserSettingsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  console.log(isUserSettingsModalOpen, isLogOutModalOpen);

  const toggleSettingsModalOpen = () => {
    setIsUserSettingsModalOpen(prev => !prev);
  };
  const toggleLogoutModalOpen = () => {
    setIsLogOutModalOpen(prev => !prev);
  };

  return (
    <>
      <div className={css.wrapper}>
        <Button onClick={toggleSettingsModalOpen} className={css.settingBtn}>
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#settings`}></use>
          </svg>
          Setting
        </Button>
        <Button onClick={toggleLogoutModalOpen} className={css.logoutBtn}>
          <svg width="16" height="16" className={css.svg}>
            <use xlinkHref={`${sprite}#log_out`}></use>
          </svg>
          Log out
        </Button>
      </div>
    </>
  );
};
