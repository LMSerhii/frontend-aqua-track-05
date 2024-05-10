import s from './WaterForm.module.css';
import Button from '../../../shared/components/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import {
  currentTime,
  getCurrentDate,
} from '../../../shared/helpers/dateServices';

const schema = yup.object().shape({
  water: yup
    .number()
    .required('Water value is required')
    .positive('Water value must be a positive number')
    .integer('Water value must be an integer'),
});

export const WaterForm = ({ handleWaterChange, waterValue }) => {
  const [time, setTime] = useState(currentTime);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  // Вывод объекта с данными о кол-ве воды
  const onSubmit = () => {
    if (title === 'fdfd') {
      const data = {
        id: id,
        date: getCurrentDate(),
        amount: parseInt(waterValue),
        time: currentTime,
      };

      console.log(data);
    }
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
