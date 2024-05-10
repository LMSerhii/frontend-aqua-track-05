import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { sprite } from '../../../shared/icons/index';
import s from './UserSettingsForm.module.css';
import Button from '../../../shared/components/Button/Button';
import { useState, useRef } from 'react';

export const UserSettingsForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [timeSport, setTimeSport] = useState(0);
  const [waterUser, setWaterUser] = useState(0);
  const filePicker = useRef(null);

  const handleChange = event => {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
    const imageUrl = URL.createObjectURL(file);
    setSelectedFile(file);
    setUploaded(imageUrl);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    formData.append('avatar', selectedFile);

    const userData = {
      name: name,
      email: email,
      gender: gender,
      weight: weight,
      timeSport: timeSport,
      waterUser: waterUser,
    };

    formData.append('userData', JSON.stringify(userData));

    const res = await fetch('/upload-avatar', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    setUploaded(data);
  };

  const handlePick = () => {
    filePicker.current.click();
  };

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
        <div className={s.avatarWrap}>
          <label htmlFor="avatar" className={s.imgWrap} onClick={handlePick}>
            <input
              className={s.hidden}
              type="file"
              ref={filePicker}
              id="avatar"
              accept="image/*,.png,.jpg,.gif,.web"
              onChange={handleChange}
            />
            {uploaded && (
              <img src={uploaded} className={s.avatar} alt="preview" />
            )}

            <button
              type="submit"
              className={s.uploudBtn}
              onClick={handleUpload}
            >
              <svg className={s.uploud} width="18" height="18">
                <use xlinkHref={`${sprite}#upload`}></use>
              </svg>
              Upload a photo
            </button>
          </label>
        </div>

        <label htmlFor="gender" className={s.labelImportanGender}>
          Your gender identity
        </label>
        <div className={s.gender}>
          <input
            type="radio"
            id="female"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
            // {...register('gender')}
          />
          <label className={s.labelGender} htmlFor="female">
            Female
          </label>
          <input
            type="radio"
            id="male"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
            // {...register('gender')}
          />
          <label className={s.labelGender} htmlFor="male">
            Male
          </label>
        </div>

        <div className={s.WrapNameEmail}>
          <label htmlFor="Your_name" className={s.labelImportan}>
            Your name
          </label>

          <input
            type="text"
            {...register('Your name')}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
          />
          {/* <p>{errors.Your_name?.message}</p> */}
          <label htmlFor="Email" className={s.labelImportan}>
            Email
          </label>

          <input
            type="text"
            {...register('Email')}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          {/* <p>{errors.Email?.message}</p> */}
        </div>

        <div className={s.dailyNormaWrap}>
          <h3 className={s.labelImportan}>My daily norma</h3>
          <p>For woman:</p>
          <p className={s.formula}> V=(M*0,03) + (T*0,4)</p>
          <p>For man:</p>
          <p className={s.formula}>V=(M*0,04) + (T*0,6)</p>

          <div className={s.Wrapdesc}>
            <p className={s.description}>
              <span className={s.star}>*</span> V is the volume of the water
              norm in liters per day, M is your body weight, T is the time of
              active sports, or another type of activity commensurate in terms
              of loads (in the absence of these, you must set 0)
            </p>
          </div>

          <div className={s.attention}>
            <svg className={s.uploud} width="18" height="18">
              <use xlinkHref={`${sprite}#attention`}></use>
            </svg>
            <p>Active time in hours</p>
          </div>
        </div>
        <label htmlFor="Your_weight">Your weight in kilograms:</label>
        <br />
        <input
          type="number"
          {...register('Your_weight')}
          onChange={e => setWeight(e.target.value)}
          placeholder="0.1"
        />
        <br />
        <label htmlFor="Your_sports">
          The time of active participation in sports:
        </label>
        <br />
        <input
          type="number"
          {...register('Your_sports')}
          onChange={e => setTimeSport(e.target.value)}
          placeholder="0.1"
        />
        <br />
        <p>The required amount of water in liters per day:</p>
        <p>{'1.8 L'}</p>
        <label htmlFor="Your_water">
          Write down how much water you will drink:
        </label>
        <br />
        <input
          type="number"
          {...register('Your_water')}
          onChange={e => setWaterUser(e.target.value)}
          placeholder="0.1"
        />
        <br />
        <Button>Save</Button>
      </form>
    </>
  );
};
