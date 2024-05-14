import { useState } from 'react';
import s from './Dropdown.module.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.dropdown}>
      <div className={s.dropdownBtn} onClick={() => setIsActive(!isActive)}>
        <span>Serhii Leonov</span>
        <span>Avatar</span>
        <RiArrowDropDownLine />
      </div>
      {isActive && (
        <div className={s.dropdownContent}>
          <div className={s.dropdownItem} onClick={() => setIsActive(false)}>
            Settings
          </div>
          <div className={s.dropdownItem} onClick={() => setIsActive(false)}>
            Log out
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
