import { useState } from 'react';

import { useAuth } from '../../../hooks/useAuth';
import { UserBarPopover } from '../UserBarPopover/UserBarPopover';

import css from './UserBar.module.css';
import UserPanelAvatar from '../UserPanelAvatar/UserPanelAvatar';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';

export const UserBar = ({ setIsActiveSettings, setIsActiveLogout }) => {
  const { user } = useAuth();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={css.dropdown}>
      <div className={css.button} onClick={() => setIsActive(!isActive)}>
        <span className={css.userName}>{user ? user.name : 'Anonymous'}</span>

        <UserPanelAvatar user={user} />

        {isActive ? (
          <SharedSVG
            className={css.iconChevron}
            width={16}
            height={16}
            svgId="icon-chevron-down"
          />
        ) : (
          <SharedSVG
            className={css.iconChevron}
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
