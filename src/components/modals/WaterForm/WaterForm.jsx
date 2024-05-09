import s from './WaterForm.module.css';
import { Modal } from '../../../shared/components/Modal/Modal';
import Button from '../../../shared/components/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { sprite } from '../../../shared/icons/index';

console.log(sprite);

export const WaterForm = () => {
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(50);
  const [waterValue, setWaterValue] = useState(count.toString());

  const schema = yup.object().shape({
    water: yup
      .number()
      .required('Water value is required')
      .positive('Water value must be a positive number')
      .integer('Water value must be an integer')
      .max(1000, 'Water value must be less than or equal to 1000'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleWaterChange = event => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setWaterValue(value);
      setCount(parseInt(value, 10));
    }
  };

  const onAddCount = () => {
    const newValue = Math.min(
      parseInt(waterValue, 10) + (50 - (parseInt(waterValue, 10) % 50)),
      1000
    );
    setCount(newValue);
    setWaterValue(newValue.toString());
  };

  const onRemoveCount = () => {
    const newValue = Math.max(
      parseInt(waterValue, 10) - (parseInt(waterValue, 10) % 50 || 50),
      0
    );
    setCount(newValue);
    setWaterValue(newValue.toString());
  };

  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const [time, setTime] = useState(currentTime);

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  const onClose = () => {
    setActive(false);
  };

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Modal className={s.modal} active={active}>
      <div className={s.content}>
        <Button className={s.close} onClick={onClose}>
          <svg className={s.icon} width="28" height="28">
            <use xlinkHref={`${sprite}#close`}></use>
          </svg>
        </Button>

        <h3 className={s.title}>Add water</h3>

        <p className={s.choose}>Choose a value:</p>

        <p className={s.amount}>Amount of water:</p>

        <div className={s.counter}>
          <Button
            className={s.btnCounter}
            onClick={onRemoveCount}
            type="button"
          >
            -
          </Button>
          <p className={s.countValue}>{count} ml</p>
          <Button className={s.btnCounter} onClick={onAddCount} type="button">
            +
          </Button>
        </div>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)} action="">
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
      </div>
    </Modal>
  );
};
