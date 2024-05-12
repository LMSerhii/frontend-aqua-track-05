import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import { useAuth } from '../../../hooks/useAuth';
import Button from '../../../shared/components/Button/Button';
import { UserBarPopover } from '../UserBarPopover/UserBarPopover';

import css from './UserBar.module.css';

export const UserBar = () => {
  const { user } = useAuth();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(prev => !prev);
  };

  return (
    <>
      <Button className={css.button} onClick={togglePopover}>
        <div className={css.userName}>{user.name}</div>
        <img src={user.avatar} alt="User avatar" className={css.img} />
        {isPopoverOpen ? (
          <BiChevronUp size="16px" color="white" />
        ) : (
          <BiChevronDown size="16px" color="white" />
        )}
      </Button>
      {isPopoverOpen && <UserBarPopover />}
    </>
  );
};
