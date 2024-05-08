import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { sprite } from '../../../shared/icons/index';
import s from './UserSettingsForm.module.scss';

export const UserSettingsForm = () => {
  const schema = yup
    .object({
      Your_name: yup.string().required(),
      Email: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = data => console.log(data);

  return (
    <>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <svg className={s.uploud} width="18" height="18">
          <use xlinkHref={`${sprite}#upload`}></use>
        </svg>
        <p>Upload a photo</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="gender">Your gender identity</label>
        <br />
        <input
          type="checkbox"
          id="female"
          value="female"
          {...register('gender')}
        />

        <label htmlFor="female">Female</label>
        <input type="checkbox" id="male" value="male" {...register('gender')} />
        <label htmlFor="male">Male</label>
        <br />
        <label htmlFor="Your_name">Your name</label>
        <br />
        <input {...register('Your name')} />
        <p>{errors.Your_name?.message}</p>
        <label htmlFor="Email">Email</label>
        <br />
        <input {...register('Email')} />
        <p>{errors.Email?.message}</p>
      </form>
    </>
  );
};
