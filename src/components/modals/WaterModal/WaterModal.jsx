import s from './WaterModal.module.css';
import Button from '../../../shared/components/Button/Button';
import { WaterForm } from '../WaterForm/WaterForm';
import { useState } from 'react';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import Counter from '../Counter/Counter';

export const WaterModal = ({ title, subTitle, setActive }) => {
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
    <div className={s.content}>
      <Button className={s.close} onClick={onClose}>
        <SharedSVG className={s.icon} width="28" height="28" svgId={'close'} />
      </Button>

      <h3 className={s.title}>{title}</h3>

      <p className={s.choose}>{subTitle}</p>

      <p className={s.amount}>Amount of water:</p>

      <Counter
        count={count}
        onAddCount={onAddCount}
        onRemoveCount={onRemoveCount}
      />

      <WaterForm
        handleWaterChange={handleWaterChange}
        waterValue={waterValue}
      />
    </div>
  );
};
