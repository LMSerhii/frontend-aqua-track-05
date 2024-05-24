import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { sprite } from '../../../shared/icons/index';
import Button from '../../../shared/components/Button/Button';
import toast from 'react-hot-toast';

import { logOut, selectUser, setUserData } from '../../../redux/auth/authSlice';
import defaultAvatar from '../../../shared/images/homePage/Rectangle-min.png';
import { uploadCloudinary } from '../../../shared/helpers/handleUpload';
import { validationSchema } from '../../../shared/helpers/validationSchema';

import s from './UserSettingsForm.module.css';
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from '../../../redux/authApi/authApi';

export const UserSettingsForm = ({ setActive }) => {
  const [updateUser] = useUpdateUserMutation();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const userData = useSelector(selectUser);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);

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

  const filePicker = useRef(null);
  const modalContentRef = useRef(null);

  const handleUpload = async event => {
    try {
      const file = event.target.files[0];
      if (!file) return;
      const imageURL = URL.createObjectURL(file);
      setSelectedFile(imageURL);

      if (!file) {
        toast.error(t('Errors.file'));
        return;
      }

      const uploadFile = await uploadCloudinary(file);

      setUploaded(uploadFile);
    } catch (error) {
      toast.error(t('Errors.wrong'));
    }
  };

  const handleEditWater = e => {
    setData({ ...data, dailyWater: e.target.value });
    setEdit(true);
  };

  const handleSubmitSetting = async value => {
    try {
      const currentDailyWater = edit
        ? data.dailyWater
        : value.gender
        ? Math.round((data.weight * 0.03 + data.sportTime * 0.4) * 1000)
        : Math.round((data.weight * 0.04 + data.sportTime * 0.6) * 1000);

      const formData = new FormData();

      const photo = uploaded
        ? uploaded
        : userData !== ''
        ? userData.avatar
        : defaultAvatar;

      const dataUser = {
        ...data,
        avatar: photo,
        dailyWater: currentDailyWater,
        gender: value.gender,
      };

      formData.append('dataUser', JSON.stringify(dataUser));

      updateUser(dataUser)
        .unwrap()
        .then(data => {
          dispatch(setUserData({ user: data }));

          toast.success(t('Errors.update'));
          setActive(false);
        })
        .catch(() => {
          toast.error(t('Errors.wrong'));
          setActive(false);
        });
    } catch (error) {
      toast.error(error);
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

  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = () => {
    deleteUser()
      .unwrap()
      .then(() => {
        toast.success(t('Errors.delete'));
        dispatch(logOut());
        setActive(false);
      })
      .catch(() => {
        toast.error(t.$TFunctionBrand('Errors.wrong'));
        setActive(false);
      });
  };

  const handlePreDelete = () => {
    setShow(!show);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitSetting)}>
      <div ref={modalContentRef}>
        <div className={s.avatarWrap}>
          <label htmlFor="avatar">
            <input
              {...register('file')}
              className={s.hidden}
              type="file"
              ref={filePicker}
              id="avatar"
              onChange={handleUpload}
            />

            {selectedFile ? (
              <div className={s.imgWrap}>
                <img src={selectedFile} className={s.avatar} alt="preview" />
              </div>
            ) : (
              <div className={s.imgWrap}>
                <img src={data.avatar} className={s.avatar} alt="preview" />
              </div>
            )}

            <button className={s.uploudBtn} type="button" onClick={handlePick}>
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
                min={0}
                id="Your_weight"
                value={data.weight || ''}
                onChange={e => setData({ ...data, weight: e.target.value })}
                placeholder="kg"
                style={{ borderColor: errors.Your_weight ? 'red' : 'initial' }}
              />
              {errors.Your_weight && (
                <p className={s.errorYup}>
                  Number must be positive and integer
                </p>
              )}

              <label htmlFor="Your_sports" className={s.labelNotImportan}>
                {t('UserSettingsForm.TheTimeSportsLabel')}
              </label>

              <input
                {...register('Your_sports')}
                type="number"
                min={0}
                id="Your_sports"
                value={data.sportTime || ''}
                onChange={e => setData({ ...data, sportTime: e.target.value })}
                placeholder="h"
                style={{ borderColor: errors.Your_sports ? 'red' : 'initial' }}
              />
              {errors.Your_sports && (
                <p className={s.errorYup}>
                  Number must be positive and integer
                </p>
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
                min={0}
                id="Your_water"
                value={data.dailyWater}
                onChange={handleEditWater}
                placeholder="ml"
                style={{ borderColor: errors.Your_water ? 'red' : 'initial' }}
              />
              {errors.Your_water && (
                <p className={s.errorYup}>Number must be positivet</p>
              )}
            </div>
          </div>
        </div>
        <div className={s.wrapperBtn}>
          {!show && (
            <Button classname={s.btnSetting} type="submit">
              {t('UserSettingsForm.saveBtn')}
            </Button>
          )}
          <Button
            type="button"
            onClick={handlePreDelete}
            className={s.deleteBtn}
          >
            {t('UserBarPopover.deleteBtn')}
          </Button>
          {show && (
            <div className={s.boxText}>
              <p>{t('DeletePanel.deleteText')}</p>
              <button
                type="button"
                onClick={handleDelete}
                className={s.deleteBtnR}
              >
                {t('DeletePanel.deleteBtn')}
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
