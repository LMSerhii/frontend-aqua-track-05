import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { sprite } from '../../../shared/icons/index';
import s from './UserSettingsForm.module.css';
import Button from '../../../shared/components/Button/Button';
import { useState, useRef, useEffect } from 'react';
import Section from '../../../shared/components/Section/Section';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  //  useEffect(() => {
  //     // Имитация асинхронного запроса
  //     const fetchData = async () => {
  //       try {
  //         // Загрузка данных
  //         const response = await fetch('https://api.example.com/data');
  //         const result = await response.json();
  //         // Установка загруженных данных в состояние
  //         setData(result);
  //       } catch (error) {
  //         console.error('Failed to fetch data:', error);
  //       }
  //     });

  const handleUpload = async event => {
    try {
      event.preventDefault();
      const file = event.target.files[0];
      console.log(file);
      // const imageUrl = URL.createObjectURL(file);
      setSelectedFile(file);
      const formData = new FormData();
      formData.append('file', selectedFile);
      // formData.append('upload_preset', 'Upload_Preset');
      formData.append('upload_preset', 'ylx3q541');

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dci7ufqsp/image/upload',
        formData
      );

      console.log('URL загруженного изображения:', response.data.secure_url);
      setUploaded(response.data.secure_url);
    } catch (error) {
      console.error('Ошибка загрузки изображения:', error);
    }
  };

  const handleSaveSettings = async () => {
    try {
      const formData = new FormData();
      // formData.append('avatar', selectedFile);
      // formData.append('upload_preset', 'Upload_Preset');
      const userData = {
        avatar: uploaded,
        name: name,
        email: email,
        gender: gender,
        weight: weight,
        timeSport: timeSport,
        waterUser: waterUser,
      };
      formData.append('userData', JSON.stringify(userData));

      const res = await axios.post('/upload', {
        body: formData,
      });
      console.log('URL upload photo:', res.data);
      // const data = await res.json();
      // setUploaded(data);
    } catch (error) {
      console.error('Error dowload:', error);
    }
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
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.avatarWrap}>
          <label htmlFor="avatar" className={s.imgWrap} onClick={handlePick}>
            <input
              className={s.hidden}
              type="file"
              ref={filePicker}
              id="avatar"
              accept="image/*,.png,.jpg,.gif,.web"
              // onChange={handleChange}
              onChange={handleUpload}
            />
            {uploaded && (
              <img src={uploaded} className={s.avatar} alt="preview" />
            )}

            <button
              type="submit"
              className={s.uploudBtn}
              // onClick={handleUpload}
            >
              <svg className={s.uploud} width="18" height="18">
                <use xlinkHref={`${sprite}#upload`}></use>
              </svg>
              {t('UserSettingsForm.uploadPhotoBtn')}
            </button>
          </label>
        </div>

        <label htmlFor="gender" className={s.labelImportanGender}>
          {t('UserSettingsForm.yourGenderLabel')}
        </label>
        <div className={s.genderWrap}>
          <div className={s.gender}>
            <input
              type="radio"
              id="female"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
              // {...register('gender')}
            />
            <label
              className={`${s.labelGender} ${s.materialRadio}`}
              htmlFor="female"
            >
              {t('UserSettingsForm.femaleGenderLabel')}
            </label>
          </div>
          <div className={s.gender}>
            <input
              type="radio"
              id="male"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
              // {...register('gender')}
            />
            <label
              className={`${s.labelGender} ${s.materialRadio}`}
              htmlFor="male"
            >
              {t('UserSettingsForm.femaleGenderMale')}
            </label>
          </div>
        </div>

        <div className={s.WrapNameEmail}>
          <label htmlFor="Your_name" className={s.labelImportan}>
            {t('UserSettingsForm.yourNameLabel')}
          </label>

          <input
            type="text"
            {...register('Your name')}
            onChange={e => setName(e.target.value)}
            placeholder={t('UserSettingsForm.placeYourName')}
          />
          {/* <p>{errors.Your_name?.message}</p> */}
          <label htmlFor="Email" className={s.labelImportan}>
            {t('UserSettingsForm.labelEmail')}
          </label>

          <input
            type="text"
            {...register('Email')}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('UserSettingsForm.placeEmail')}
          />
          {/* <p>{errors.Email?.message}</p> */}
        </div>

        <div className={s.dailyNormaWrap}>
          <h3 className={s.labelDailyNorma}>
            {t('UserSettingsForm.dailyNormah3')}
          </h3>
          <p>{t('UserSettingsForm.forWomanP')}</p>
          <p className={s.formula}> V=(M*0,03) + (T*0,4)</p>
          <p>{t('UserSettingsForm.forManP')}</p>
          <p className={s.formula}>V=(M*0,04) + (T*0,6)</p>

          <div className={s.Wrapdesc}>
            <p className={s.description}>
              <span className={s.star}>*</span>
              {t('UserSettingsForm.starText')}
            </p>
          </div>

          <div className={s.attention}>
            <svg className={s.uploud} width="18" height="18">
              <use xlinkHref={`${sprite}#attention`}></use>
            </svg>
            <p>{t('UserSettingsForm.activeText')}</p>
          </div>
        </div>

        <div className={s.infoUser}>
          <label htmlFor="Your_weight">{t('UserSettingsForm.infoUser')}</label>

          <input
            type="number"
            {...register('Your_weight')}
            onChange={e => setWeight(e.target.value)}
            placeholder="0.1"
          />

          <label htmlFor="Your_sports">
            {t('UserSettingsForm.TheTimeSportsLabel')}
          </label>

          <input
            type="number"
            {...register('Your_sports')}
            onChange={e => setTimeSport(e.target.value)}
            placeholder="0.1"
          />
        </div>

        <div className={s.requiredWater}>
          <p>{t('UserSettingsForm.requiredWater')}</p>
          <p className={s.formula}>{'1.8 L'}</p>
        </div>

        <div className={s.waterUser}>
          <label htmlFor="Your_water" className={s.labelImportan}>
            {t('UserSettingsForm.writeDownLabel')}
          </label>

          <input
            type="number"
            {...register('Your_water')}
            onChange={e => setWaterUser(e.target.value)}
            placeholder="0.1"
          />
        </div>

        <Button classname={s.btnSetting} onClick={handleSaveSettings}>
          {t('UserSettingsForm.saveBtn')}
        </Button>
      </form>
    </Section>
  );
};
