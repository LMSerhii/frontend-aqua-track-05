import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { sprite } from '../../../shared/icons/index';
import s from './UserSettingsForm.module.css';
import Button from '../../../shared/components/Button/Button';

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="avatar">
          <svg className={s.uploud} width="18" height="18">
            <use xlinkHref={`${sprite}#upload`}></use>
          </svg>
          Upload a photo
        </label>
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={e => {
            // Отримуємо файли, які обрано
            const file = e.target.files[0];
            // Якщо файл обрано, використовуємо URL.createObjectURL()
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              // Тут ви можете використати imageUrl для відображення аватарки
              console.log('Temporary URL for the selected image:', imageUrl);
            }
          }}
          {...register('avatar')}
        />
        <br />
        <label htmlFor="gender">Your gender identity</label>
        <br />
        <input
          type="radio"
          id="female"
          value="female"
          {...register('gender')}
        />
        <label htmlFor="female">Female</label>
        <input type="radio" id="male" value="male" {...register('gender')} />
        <label htmlFor="male">Male</label>
        <br />
        <label htmlFor="Your_name">Your name</label>
        <br />
        <input type="text" {...register('Your name')} />
        <p>{errors.Your_name?.message}</p>
        <label htmlFor="Email">Email</label>
        <br />
        <input type="text" {...register('Email')} />
        <p>{errors.Email?.message}</p>
        <div>
          <h3>My daily norma</h3>
          <p>For woman:</p>
          <p>V=(M*0,03) + (T*0,4)</p>
          <p>For man:</p>
          <p>V=(M*0,04) + (T*0,6)</p>
          <p>
            * V is the volume of the water norm in liters per day, M is your
            body weight, T is the time of active sports, or another type of
            activity commensurate in terms of loads (in the absence of these,
            you must set 0)
          </p>
          <div>
            <svg className={s.uploud} width="18" height="18">
              <use xlinkHref={`${sprite}#upload`}></use>
            </svg>
            <p>Active time in hours</p>
          </div>
        </div>
        <label htmlFor="Your_weight">Your weight in kilograms:</label>
        <br />
        <input type="number" {...register('Your_weight')} />
        <br />
        <label htmlFor="Your_sports">
          The time of active participation in sports:
        </label>
        <br />
        <input type="number" {...register('Your_sports')} />
        <br />
        <p>The required amount of water in liters per day:</p>
        <p>1.8 L</p>
        <label htmlFor="Your_water">
          Write down how much water you will drink:
        </label>
        <br />
        <input type="number" {...register('Your_water')} />
        <br />
        <Button>Save</Button>
      </form>
    </>
  );
};
