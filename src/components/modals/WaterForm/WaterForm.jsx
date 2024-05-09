import s from './WaterForm.module.css';
import { Modal } from '../../../shared/components/Modal/Modal';
import Button from '../../../shared/components/Button/Button';
import { useState } from 'react';
import { sprite } from '../../../shared/icons/index';

console.log(sprite);

export const WaterForm = () => {
  const [count, setCount] = useState(50);
  const [waterValue, setWaterValue] = useState('');

  const handleWaterChange = event => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setWaterValue(value);
      setCount(parseInt(value, 10));
    }
  };

  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const [time, setTime] = useState(currentTime);

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  // const onAddCount = () => {
  //   setCount(count + 50);
  // };
  // const onRemoveCount = () => {
  //   if (count === 0) {
  //     setCount(0);
  //   } else {
  //     setCount(count - 50);
  //   }
  // };
  const onAddCount = () => {
    const newCount = count + 50;
    setCount(newCount);
    setWaterValue(newCount.toString());
  };

  const onRemoveCount = () => {
    if (count >= 50) {
      const newCount = count - 50;
      setCount(newCount);
      setWaterValue(newCount.toString());
    }
  };

  return (
    <Modal className={s.modal} active={true}>
      <div className={s.content}>
        <svg className={s.icon} width="28" height="28">
          <use xlinkHref={`${sprite}#close`}></use>
        </svg>

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

        <form className={s.form} action="">
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
          <input
            className={s.waterInput}
            value={waterValue}
            onChange={handleWaterChange}
            type="text"
            name="water"
            id="water"
          />

          <Button classname={s.btnSubmit} type="submit">
            Save
          </Button>
        </form>
      </div>
    </Modal>
  );
};
