import s from './WaterForm.module.css';
import Button from '../../../shared/components/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

export const WaterForm = ({ handleWaterChange, waterValue }) => {
  const schema = yup.object().shape({
    water: yup
      .number()
      .required('Water value is required')
      .positive('Water value must be a positive number')
      .integer('Water value must be an integer'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Текущее время пользователя
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const [time, setTime] = useState(currentTime);

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  // Вывод объекта с данными о кол-ве воды
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)} action="">
        {/* поле ввода времени */}
        <label className={s.timeLable} htmlFor="time">
          Recording time:
        </label>
        <br />
        <input
          className={s.timeInput}
          value={time}
          onChange={handleTimeChange}
          type="time"
          id="time"
          name="time"
        />
        <br />

        {/* поле ввода для воды */}
        <label className={s.waterLable} htmlFor="water">
          Enter the value of the water used:
        </label>
        <br />
        {errors.water && <p className={s.error}>{errors.water.message}</p>}
        <input
          className={s.waterInput}
          {...register('water')}
          type="text"
          name="water"
          id="water"
          onChange={handleWaterChange}
          value={waterValue}
        />

        <Button className={s.btnSubmit} type="submit">
          Save
        </Button>
      </form>
    </>
  );
};
