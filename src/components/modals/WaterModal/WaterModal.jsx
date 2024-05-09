import s from './WaterModal.module.css';
import { Modal } from '../../../shared/components/Modal/Modal';
import Button from '../../../shared/components/Button/Button';
import { sprite } from '../../../shared/icons/index';
import { WaterForm } from '../WaterForm/WaterForm';
import { useState } from 'react';

export const WaterModal = ({ active, setActive }) => {
  const [count, setCount] = useState(50);
  const [waterValue, setWaterValue] = useState(count.toString());

  // Функция синхронизации инпута и каунтера
  const handleWaterChange = event => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setWaterValue(value);
      setCount(parseInt(value, 10));
    }
  };

  // Функция добавления
  const onAddCount = () => {
    const newValue = Math.min(
      parseInt(waterValue, 10) + (50 - (parseInt(waterValue, 10) % 50)),
      1000
    );
    setCount(newValue);
    setWaterValue(newValue.toString());
  };

  // Функция вычитания
  const onRemoveCount = () => {
    const newValue = Math.max(
      parseInt(waterValue, 10) - (parseInt(waterValue, 10) % 50 || 50),
      0
    );
    setCount(newValue);
    setWaterValue(newValue.toString());
  };

  const onClose = () => {
    setActive(false);
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

        <WaterForm
          handleWaterChange={handleWaterChange}
          waterValue={waterValue}
        />
      </div>
    </Modal>
  );
};
