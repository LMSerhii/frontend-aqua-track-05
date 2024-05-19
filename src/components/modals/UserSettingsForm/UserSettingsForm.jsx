import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { sprite } from '../../../shared/icons/index';
import Button from '../../../shared/components/Button/Button';

import { selectUser } from '../../../redux/auth/authSlice';
import { updateUser } from '../../../redux/auth/operations';
import defaultAvatar from '../../../shared/images/homePage/Rectangle-min.png';
import { uploadCloudinary } from '../../../shared/helpers/handleUpload';
import { validationSchema } from '../../../shared/helpers/validationSchema';

import s from './UserSettingsForm.module.css';

export const UserSettingsForm = () => {
  const { t } = useTranslation();

  const userData = useSelector(selectUser);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  // const [userWaterWoman, setUserWaterWoman] = useState(null);
  const [edit, setEdit] = useState(false);

  const [data, setData] = useState({
    avatar: userData.avatar,
    name: userData.name,
    email: userData.email,
    gender: userData.gender,
    weight: userData.weight,
    sportTime: userData.sportTime,
    dailyWater: userData.dailyWater,
  });

  // console.log(data.gender);

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

      const uploadFile = await uploadCloudinary(file);
      // console.log('uploadFile', uploadFile);

      setUploaded(uploadFile);
    } catch (error) {
      console.error('Ошибка загрузки изображения:', error);
    }
  };

  const handleEditWater = e => {
    setData({ ...data, dailyWater: e.target.value });
    setEdit(true);
  };

  const handleSubmitSetting = value => {
    try {
      // const gender = true;
      const currentDailyWater = edit
        ? data.dailyWater
        : value.gender
        ? Math.round((data.weight * 0.03 + data.sportTime * 0.4) * 1000)
        : Math.round((data.weight * 0.04 + data.sportTime * 0.6) * 1000);

      const formData = new FormData();

      const photo = uploaded ? uploaded : defaultAvatar;

      const dataUser = {
        ...data,
        avatar: photo,
        dailyWater: currentDailyWater,
        gender: value.gender,
      };

      formData.append('dataUser', JSON.stringify(dataUser));

      dispatch(updateUser(dataUser));
      // console.log(formData);
    } catch (error) {
      console.error('Error dowload:', error);
    }
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      gender: userData.gender,
    },
  });

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
            onChange={handleUpload}
          />

          {selectedFile ? (
            <img src={selectedFile} className={s.avatar} alt="preview" />
          ) : (
            <img src={data.avatar} className={s.avatar} alt="preview" />
          )}

          <button className={s.uploudBtn} type="button">
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
                value="true"
                {...register('gender', { required: true })}
                defaultChecked={userData.gender === true}
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
                value="false"
                {...register('gender', { required: true })}
                defaultChecked={userData.gender === false}
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
              style={{ borderColor: errors.nameUser ? 'red' : 'initial' }}
            />
            {errors.nameUser && (
              <p className={s.errorYup}>{errors.nameUser.message}</p>
            )}

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
              style={{ borderColor: errors.Email ? 'red' : 'initial' }}
              disabled
            />

            {errors.Email && (
              <p className={s.errorYup}>{errors.Email.message}</p>
            )}
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
            <label htmlFor="Your_weight" className={s.labelNotImportan}>
              {t('UserSettingsForm.infoUser')}
            </label>

            <input
              {...register('Your_weight')}
              type="number"
              id="Your_weight"
              value={data.weight || ''}
              onChange={e => setData({ ...data, weight: e.target.value })}
              placeholder="1"
              style={{ borderColor: errors.Your_weight ? 'red' : 'initial' }}
            />
            {errors.Your_weight && (
              <p className={s.errorYup}>{errors.Your_weight.message}</p>
            )}

            <label htmlFor="Your_sports" className={s.labelNotImportan}>
              {t('UserSettingsForm.TheTimeSportsLabel')}
            </label>

            <input
              {...register('Your_sports')}
              type="number"
              id="Your_sports"
              value={data.sportTime || ''}
              onChange={e => setData({ ...data, sportTime: e.target.value })}
              placeholder="1"
              style={{ borderColor: errors.Your_sports ? 'red' : 'initial' }}
            />
            {errors.sportTime && (
              <p className={s.errorYup}>{errors.sportTime.message}</p>
            )}
          </div>

          <div className={s.requiredWater}>
            <p>{t('UserSettingsForm.requiredWater')}</p>

            <p className={s.formula}>{`${userData.dailyWater / 1000} L`}</p>
          </div>

          <div className={s.waterUser}>
            <label htmlFor="Your_water" className={s.labelImportan}>
              {t('UserSettingsForm.writeDownLabel')}
            </label>
            <input
              {...register('Your_water')}
              type="number"
              id="Your_water"
              value={data.dailyWater}
              // onChange={e => setData({ ...data, dailyWater: e.target.value })}
              onChange={handleEditWater}
              placeholder="1"
              style={{ borderColor: errors.Your_water ? 'red' : 'initial' }}
            />
            {errors.Your_water && (
              <p className={s.errorYup}>{errors.Your_water.message}</p>
            )}
          </div>
        </div>
      </div>

      <Button classname={s.btnSetting} type="submit">
        {t('UserSettingsForm.saveBtn')}
      </Button>
    </form>
  );
};
