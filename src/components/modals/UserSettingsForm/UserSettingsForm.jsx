import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { sprite } from '../../../shared/icons/index';
import s from './UserSettingsForm.module.css';
import Button from '../../../shared/components/Button/Button';
import { useState, useRef } from 'react';
import Section from '../../../shared/components/Section/Section';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSlice';

export const UserSettingsForm = () => {
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
      event.preventDefault();
      const file = event.target.files[0];
      console.log(file);
      // const imageUrl = URL.createObjectURL(file);
      setSelectedFile(file);
      const formData = new FormData();
      formData.append('file', selectedFile);

      formData.append('upload_preset', 'ylx3q541');
      dispatch(uploadPhoto());

      console.log('URL загруженного изображения:', response.data.secure_url);
      setUploaded(response.data.secure_url);
    } catch (error) {
      console.error('Ошибка загрузки изображения:', error);
    }
  };

  const handleSaveSettings = async () => {
    dispatch();
    try {
      const formData = new FormData();
      // formData.append('avatar', selectedFile);
      // formData.append('upload_preset', 'Upload_Preset');
      const dataUser = {
        avatar: uploaded,
        name: userData.name,
        email: userData.email,
        gender: userData.gender,
        weight: userData.weight,
        timeSport: userData.timeSport,
        waterUser: userData.waterUser,
      };
      formData.append('dataUser', JSON.stringify(dataUser));

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
              Upload a photo
            </button>
          </label>
        </div>

        <label htmlFor="gender" className={s.labelImportanGender}>
          Your gender identity
        </label>
        <div className={s.genderWrap}>
          <div className={s.gender}>
            <input
              type="radio"
              id="woman"
              value={userData.gender}
              checked={userData.gender === 'woman'}
              onChange={e => setData({ ...data, gender: e.target.value })}
            />
            <label
              className={`${s.labelGender} ${s.materialRadio}`}
              htmlFor="woman"
            >
              Woman
            </label>
          </div>
          <div className={s.gender}>
            <input
              type="radio"
              id="man"
              value={userData.gender}
              checked={userData.gender === 'man'}
              onChange={e => setData({ ...data, gender: e.target.value })}
            />
            <label
              className={`${s.labelGender} ${s.materialRadio}`}
              htmlFor="man"
            >
              Man
            </label>
          </div>
        </div>

        <div className={s.WrapNameEmail}>
          <label htmlFor="Your_name" className={s.labelImportan}>
            Your name
          </label>

          <input
            type="text"
            value={userData.name}
            onChange={e => setData({ ...data, name: e.target.value })}
            placeholder="Name"
          />
          <p>{errors.Your_name?.message}</p>
          <label htmlFor="Email" className={s.labelImportan}>
            Email
          </label>

          <input
            type="text"
            value={userData.email}
            onChange={e => setData({ ...data, email: e.target.value })}
            placeholder="Email"
          />
          {/* <p>{errors.Email?.message}</p> */}
        </div>

        <div className={s.dailyNormaWrap}>
          <h3 className={s.labelDailyNorma}>My daily norma</h3>
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

        <div className={s.infoUser}>
          <label htmlFor="Your_weight">Your weight in kilograms:</label>

          <input
            type="number"
            value={userData.weight}
            onChange={e => setData({ ...data, weight: e.target.value })}
            placeholder="0.1"
          />

          <label htmlFor="Your_sports">
            The time of active participation in sports:
          </label>

          <input
            type="number"
            value={userData.timeSport}
            onChange={e => setData({ ...data, timeSport: e.target.value })}
            placeholder="0.1"
          />
        </div>

        <div className={s.requiredWater}>
          <p>The required amount of water in liters per day:</p>
          <p className={s.formula}>{userData.dailyWater}</p>
        </div>

        <div className={s.waterUser}>
          <label htmlFor="Your_water" className={s.labelImportan}>
            Write down how much water you will drink:
          </label>

          <input
            type="number"
            value={userData.dailyWater}
            onChange={e => setData({ ...data, dailyWater: e.target.value })}
            placeholder="0.1"
          />
        </div>

        <Button classname={s.btnSetting} onClick={handleSaveSettings}>
          Save
        </Button>
      </form>
    </Section>
  );
};
