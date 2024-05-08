// import { useState } from 'react';
import { sprite } from '../../../shared/icons/index';
import { UserSettingsForm } from '../UserSettingsForm/UserSettingsForm';
import s from './UserSettingsModal.module.scss';

export const UserSettingsModal = () => {
  return (
    <>
      <div>
        <button>
          <svg
            width="24"
            height="24"
            style={{ marginRight: '16px', marginLeft: '20px' }}
          >
            <use xlinkHref={`${sprite}#close`}></use>
          </svg>
        </button>
      </div>
      <h2>Setting</h2>
      <UserSettingsForm />
    </>
  );
};
