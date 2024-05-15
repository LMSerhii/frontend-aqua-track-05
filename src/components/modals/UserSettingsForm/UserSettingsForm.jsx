import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { sprite } from '../../../shared/icons/index';
import s from './UserSettingsForm.module.css';
import Button from '../../../shared/components/Button/Button';
import { useState, useRef } from 'react';
import Section from '../../../shared/components/Section/Section';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSlice';
import { updateUser } from '../../../redux/auth/operations';
import { useTranslation } from 'react-i18next';

export const UserSettingsForm = () => {
  const { t } = useTranslation();
  const userData = useSelector(selectUser);
  console.log(userData);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const [data, setData] = useState({
    avatar: userData.avatar,
    name: userData.name,
    email: userData.email,
    gender: userData.gender,
    weight: userData.weight,
    timeSport: userData.timeSport,
    dailyWater: userData.dailyWater,
  });

  const dispatch = useDispatch();
  const filePicker = useRef(null);

  const handleUpload = async event => {
    try {
      const getToken = JSON.parse(localStorage.getItem('persist:auth'));
      const token = getToken.token;
      console.log(token);
      const file = event.target.files[0];
      console.log(file);
      const imageURL = URL.createObjectURL(file);
      console.log('imageURL', imageURL);
      setSelectedFile(imageURL);
      setUploaded(file);

      //     const formData = new FormData();
      //     formData.append('file', file);

      //     formData.append('upload_preset', 'ml_default');

      //     const response = await axios.post(
      //       'https://api.cloudinary.com/v1_1/dci7ufqsp/image/upload',
      //       formData,
      //       {
      //         headers: {
      //           Authorization: `Bearer ${token}`, // Пересилаємо заголовок Authorization
      //           'Content-Type': 'multipart/form-data', // Встановлюємо правильний Content-Type
      //         },
      //       }
      //     );
      //     setUploaded(response.data.secure_url);

      //     console.log('URL загруженного изображения:', response.secure_url);
    } catch (error) {
      console.error('Ошибка загрузки изображения:', error);
    }
  };

  const handleSubmitSetting = () => {
    try {
      const formData = new FormData();
      // formData.append('data', JSON.stringify(data));
      const dataUser = {
        avatar: selectedFile,
        name: userData.name,
        email: userData.email,
        gender: userData.gender,
        weight: userData.weight,
        timeSport: userData.timeSport,
        waterUser: userData.waterUser,
      };

      formData.append('dataUser', JSON.stringify(dataUser));
      dispatch(updateUser(dataUser));
      console.log(formData);
    } catch (error) {
      console.error('Error dowload:', error);
    }
  };

  const handleGenderChange = event => {
    setData({ ...userData, gender: event.target.value });
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
    // register,
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
              onChange={handleUpload}
            />
            {uploaded ? (
              <img src={selectedFile} className={s.avatar} alt="preview" />
            ) : (
              <img src={userData.avatar} className={s.avatar} alt="preview" />
            )}

            <button
              // type="submit"
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

        <label className={s.labelImportanGender}>
          {' '}
          {t('UserSettingsForm.yourGenderLabel')}
        </label>
        <div className={s.genderWrap}>
          <div className={s.gender}>
            <input
              type="radio"
              id="woman"
              name="gender"
              value="woman"
              onChange={handleGenderChange}
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
              value="man"
              onChange={handleGenderChange}
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
          <label htmlFor="Your_name" className={s.labelImportan}>
            {t('UserSettingsForm.yourNameLabel')}
          </label>

          <input
            type="text"
            id="Your_name"
            value={userData.name}
            onChange={e => setData({ ...data, name: e.target.value })}
            placeholder={t('UserSettingsForm.placeYourName')}
          />
          <p>{errors.Your_name?.message}</p>
          <label htmlFor="Email" className={s.labelImportan}>
            {t('UserSettingsForm.labelEmail')}
          </label>

          <input
            type="text"
            id="Email"
            value={userData.email}
            onChange={e => setData({ ...data, email: e.target.value })}
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
            id="Your_weight"
            value={userData.weight || ''}
            onChange={e => setData({ ...data, weight: e.target.value })}
            placeholder="0.1"
          />

          <label htmlFor="Your_sports">
            {t('UserSettingsForm.TheTimeSportsLabel')}
          </label>

          <input
            type="number"
            id="Your_sports"
            value={userData.timeSport || ''}
            onChange={e => setData({ ...data, timeSport: e.target.value })}
            placeholder="0.1"
          />
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
            type="number"
            id="Your_water"
            value={userData.dailyWater || ''}
            onChange={e => setData({ ...data, dailyWater: e.target.value })}
            placeholder="0.1"
          />
        </div>

        <Button
          classname={s.btnSetting}
          type="button"
          onClick={handleSubmitSetting}
        >
          {t('UserSettingsForm.saveBtn')}
        </Button>
      </form>
    </Section>
  );
};
