import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { UserBarPopover } from '../UserBarPopover/UserBarPopover';
import UserPanelAvatar from '../UserPanelAvatar/UserPanelAvatar';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';

import css from './UserBar.module.css';

export const UserBar = ({
  setIsActiveSettings,
  setIsActiveLogout,
  setIsActiveDelete,
}) => {
  const { user } = useAuth();
  const [isActive, setIsActive] = useState(false);

  const croppName = str => {
    if (str.length > 8) {
      str = str.slice(0, 8) + '...';
    }
    return str;
  };

  return (
    <div className={css.dropdown}>
      <div className={css.button} onClick={() => setIsActive(!isActive)}>
        <span className={css.userName}>
          {user ? croppName(user.name) : 'Anonymous'}
        </span>

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
          setIsActiveDelete={setIsActiveDelete}
        />
      )}
    </div>
  );
};
