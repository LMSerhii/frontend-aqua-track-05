import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import { useAuth } from '../../../hooks/useAuth';
import Button from '../../../shared/components/Button/Button';
import { UserBarPopover } from '../UserBarPopover/UserBarPopover';
import girl from '../../../shared/images/homePage/Rectangle22x-min.png';

import css from './UserBar.module.css';

export const UserBar = () => {
  const { user } = useAuth();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className={css.useMenu}>
      <Button className={css.button} onClick={togglePopover}>
        <span className={css.userName}>{user ? user.name : 'Anonymous'}</span>

        <div className={css.thumb}>
          <img
            src={user ? user.avatar : girl}
            alt="User avatar"
            className={css.img}
          />
        </div>

        {isPopoverOpen ? (
          <BiChevronUp size="16px" color="white" />
        ) : (
          <BiChevronDown size="16px" color="white" />
        )}
      </Button>

      {isPopoverOpen && <UserBarPopover />}
    </div>
  );
};
