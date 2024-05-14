import { useState } from 'react';

import { useAuth } from '../../../hooks/useAuth';
import { UserBarPopover } from '../UserBarPopover/UserBarPopover';

import s from './UserBar.module.css';
import UserPanelAvatar from '../UserPanelAvatar/UserPanelAvatar';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';

export const UserBar = ({ setIsActiveSettings, setIsActiveLogout }) => {
  const { user } = useAuth();
  const [isActive, setIsActive] = useState(false);

  const croppName = str => {
    if (str.length > 8) {
      str = str.slice(0, 8) + '...';
    }
    return str;
  };

  return (
    <div className={s.dropdown}>
      <div className={s.button} onClick={() => setIsActive(!isActive)}>
        <span className={s.userName}>
          {user ? croppName(user.name) : 'Anonymous'}
        </span>

        <UserPanelAvatar user={user} />

        {isActive ? (
          <SharedSVG
            className={s.iconChevron}
            width={16}
            height={16}
            svgId="icon-chevron-down"
          />
        ) : (
          <SharedSVG
            className={s.iconChevron}
            width={16}
            height={16}
            svgId="icon-chevron-up"
          />
        )}
      </div>

      {isActive && (
        <UserBarPopover
          isActive={isActive}
          setIsActive={setIsActive}
          setIsActiveSettings={setIsActiveSettings}
          setIsActiveLogout={setIsActiveLogout}
        />
      )}
    </div>
  );
};
