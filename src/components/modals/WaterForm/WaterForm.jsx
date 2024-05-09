import s from './WaterForm.module.css';
import { Modal } from '../../../shared/components/Modal/Modal';
import Button from '../../../shared/components/Button/Button';
import { useState } from 'react';
import { sprite } from '../../../shared/icons/index';

console.log(sprite);

export const WaterForm = () => {
  const [count, setCount] = useState(50);

  const onAddCount = () => {
    setCount(count + 50);
  };
  const onRemoveCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 50);
    }
  };

  return (
    <Modal className={s.modal} active={true}>
      <svg className={s.icon} width="18" height="18">
        <use xlinkHref={`${sprite}#close`}></use>
      </svg>

      <h3 className={s.title}>Add water</h3>

      <p className={s.choose}>Choose a value:</p>

      <p className={s.amount}>Amount of water:</p>

      <div className={s.counter}>
        <Button classname={s.btnCounter} onClick={onRemoveCount} type="button">
          -
        </Button>
        <p className={s.countValue}>{count} ml</p>
        <Button classname={s.btnCounter} onClick={onAddCount} type="button">
          +
        </Button>
      </div>

      <form className={s.form} action="">
        <label className={s.timeLable} htmlFor="time">
          Recording time:
        </label>
        <br />
        <input className={s.timeInput} type="time" id="time" name="time" />
        <br />
        <label className={s.waterLable} htmlFor="water">
          Enter the value of the water used:
        </label>
        <br />
        <input className={s.waterInput} type="text" name="water" id="water" />

        <Button classname={s.btnSubmit} type="submit">
          Save
        </Button>
      </form>
    </Modal>
  );
};
