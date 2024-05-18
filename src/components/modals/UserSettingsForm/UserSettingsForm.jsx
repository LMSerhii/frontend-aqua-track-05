import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { sprite } from '../../../shared/icons/index';
import s from './UserSettingsForm.module.css';
import Button from '../../../shared/components/Button/Button';
import { useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSlice';
import { updateUser } from '../../../redux/auth/operations';
import { useTranslation } from 'react-i18next';
import defaultAvatar from '../../../shared/images/homePage/Rectangle-min.png';

export const UserSettingsForm = () => {
  const { t } = useTranslation();
  const userData = useSelector(selectUser);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const [data, setData] = useState({
    avatar: userData.avatar,
    name: userData.name,
    email: userData.email,
    gender: userData.gender,
    weight: userData.weight,
    sportTime: userData.sportTime,
    dailyWater: userData.dailyWater,
  });

  const dispatch = useDispatch();
  const filePicker = useRef(null);

  const handleUpload = async event => {
    try {
      const file = event.target.files[0];
      const imageURL = URL.createObjectURL(file);
      setSelectedFile(imageURL);

      if (!file) {
        alert('Please select a file!');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      formData.append('upload_preset', 'ylx3q541');

      await fetch('https://api.cloudinary.com/v1_1/dci7ufqsp/image/upload', {
        method: 'post',
        body: formData,
      })
        .then(response => response.json())
        .then(res => {
          setUploaded(res.secure_url);
        });
    } catch (error) {
      console.error('Ошибка загрузки изображения:', error);
    }
  };

  const handleSubmitSetting = () => {
    try {
      const formData = new FormData();

      const photo = uploaded ? uploaded : defaultAvatar;
      console.log('photo', photo);
      console.log('uploaded', uploaded);

      const dataUser = {
        ...data,
        avatar: photo,
      };

      formData.append('dataUser', JSON.stringify(dataUser));
      dispatch(updateUser(dataUser));
      console.log(formData);
    } catch (error) {
      console.error('Error dowload:', error);
    }
  };

  // const handleGenderChange = event => {
  //   setData({ ...userData, gender: event.target.value });
  // };

  const handlePick = () => {
    filePicker.current.click();
  };

  const schema = yup
    .object()
    .shape({
      file: yup
        .mixed()
        .test('fileSize', 'File size is too large', value => {
          return !value || (value && value[0].size <= 1024 * 1024); // Розмір файлу менше або рівно 1МБ, якщо файл вказаний
        })
        .test('fileType', 'Invalid file type', value => {
          return (
            !value ||
            (value && ['image/jpeg', 'image/png'].includes(value[0].type))
          ); // Тільки файли типу jpeg або png, якщо файл вказаний
        }),
      gender: yup.string().required('Please select your gender'),
      nameUser: yup
        .string()
        .min(2, 'Must be at least 2 letters long')
        .required('Name is required'),
      Email: yup
        .string()
        .min(6, 'Must be at least 2 letters long')
        .required('Email is required'),
      Your_weight: yup.number().required().positive().integer(),
      Your_sports: yup.number().required().positive().integer(),
      Your_water: yup.number().required().positive().integer(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(handleSubmitSetting)}>
      <div className={s.avatarWrap}>
        <label htmlFor="avatar" className={s.imgWrap} onClick={handlePick}>
          <input
            {...register('file')}
            className={s.hidden}
            type="file"
            ref={filePicker}
            id="avatar"
            // accept="image/*,.png,.jpg,.gif,.web"
            onChange={handleUpload}
          />

          {selectedFile ? (
            <img src={selectedFile} className={s.avatar} alt="preview" />
          ) : (
            <img src={data.avatar} className={s.avatar} alt="preview" />
          )}

          <button className={s.uploudBtn}>
            <svg className={s.uploud} width="18" height="18">
              <use xlinkHref={`${sprite}#upload`}></use>
            </svg>
            {t('UserSettingsForm.uploadPhotoBtn')}
          </button>
        </label>
      </div>
      <p className={s.errorYup}>{errors.file?.message}</p>

      <div className={s.wrapUserData}>
        <div className={s.wrapCurrentUser}>
          <label className={s.labelImportanGender}>
            {t('UserSettingsForm.yourGenderLabel')}
          </label>

          <p className={s.errorYup}>{errors.gender?.message}</p>

          <div className={s.genderWrap}>
            <div className={s.gender}>
              <input
                type="radio"
                id="woman"
                name="gender"
                value="female"
                {...register('gender')}
              />
              <label
                className={`${s.labelGender} ${s.materialRadio}`}
                htmlFor="woman"
              >
                {t('UserSettingsForm.femaleGenderLabel')}
              </label>
            </div>
            <div className={s.gender}>
              <input
                type="radio"
                id="man"
                name="gender"
                value="male"
                {...register('gender')}
              />
              <label
                className={`${s.labelGender} ${s.materialRadio}`}
                htmlFor="man"
              >
                {t('UserSettingsForm.femaleGenderMale')}
              </label>
            </div>
          </div>

          <div className={s.WrapNameEmail}>
            <label htmlFor="nameUser" className={s.labelImportan}>
              {t('UserSettingsForm.yourNameLabel')}
            </label>

            <input
              {...register('nameUser')}
              type="text"
              id="nameUser"
              value={data.name}
              onChange={e => setData({ ...data, name: e.target.value })}
              placeholder={t('UserSettingsForm.placeYourName')}
            />
            {errors.nameUser && (
              <p className={s.errorYup}>{errors.nameUser.message}</p>
            )}
            {/* <p className={s.errorYup}>{errors.nameUser?.message}</p> */}

            <label htmlFor="Email" className={s.labelImportan}>
              {t('UserSettingsForm.labelEmail')}
            </label>

            <input
              {...register('Email')}
              type="text"
              id="Email"
              value={data.email}
              onChange={e => setData({ ...data, email: e.target.value })}
              placeholder={t('UserSettingsForm.placeEmail')}
            />
            <p className={s.errorYup}>{errors.Email?.message}</p>
            <p>{errors.Email?.message}</p>
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
        </div>

        <div className={s.wrapUserInfo}>
          <div className={s.infoUser}>
            <label htmlFor="Your_weight">
              {t('UserSettingsForm.infoUser')}
            </label>

            <input
              {...register('Your_weight')}
              type="number"
              id="Your_weight"
              value={data.weight || ''}
              onChange={e => setData({ ...data, weight: e.target.value })}
              placeholder="1"
            />
            <p className={s.errorYup}>{errors.Your_weight?.message}</p>

            <label htmlFor="Your_sports">
              {t('UserSettingsForm.TheTimeSportsLabel')}
            </label>

            <input
              {...register('Your_sports')}
              type="number"
              id="Your_sports"
              value={data.sportTime || ''}
              onChange={e => setData({ ...data, sportTime: e.target.value })}
              placeholder="1"
            />
            <p className={s.errorYup}>{errors.Your_sports?.message}</p>
          </div>

          <div className={s.requiredWater}>
            <p>{t('UserSettingsForm.requiredWater')}</p>
            <p className={s.formula}>{userData.dailyWater}</p>
          </div>

          <div className={s.waterUser}>
            <label htmlFor="Your_water" className={s.labelImportan}>
              {t('UserSettingsForm.writeDownLabel')}
            </label>

            <input
              {...register('Your_water')}
              type="number"
              id="Your_water"
              value={data.dailyWater || ''}
              onChange={e => setData({ ...data, dailyWater: e.target.value })}
              placeholder="1"
            />
            <p className={s.errorYup}>{errors.Your_water?.message}</p>
          </div>
        </div>
      </div>

      <Button
        classname={s.btnSetting}
        type="submit"
        // onClick={handleSubmitSetting}
      >
        {t('UserSettingsForm.saveBtn')}
      </Button>
    </form>
  );
};
