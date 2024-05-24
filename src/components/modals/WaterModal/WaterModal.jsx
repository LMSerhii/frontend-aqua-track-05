import s from './WaterModal.module.css';
import Button from '../../../shared/components/Button/Button';
import { WaterForm } from '../WaterForm/WaterForm';
import { useRef, useState } from 'react';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import Counter from '../Counter/Counter';
import { useTranslation } from 'react-i18next';
export const WaterModal = ({
  title,
  subTitle,
  setActive,
  operation,
  entry,
}) => {
  const [count, setCount] = useState(50);
  const [waterValue, setWaterValue] = useState(count.toString());

  const modalRef = useRef();
  const { t } = useTranslation();
  const handleCloseModal = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  const handleWaterChange = event => {
    let value = event.target.value;

    if (value === '' || parseInt(value, 10) === 0) {
      value = '0';
    }

    if (!isNaN(value)) {
      const parsedValue = parseInt(value, 10);
      setWaterValue(parsedValue);
      setCount(parsedValue);
    } else {
      setWaterValue(0);
      setCount(0);
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

  return (
    <div className={s.content} onClick={handleCloseModal}>
      <div ref={modalRef} className={s.modal}>
        <Button className={s.close} onClick={() => setActive(false)}>
          <SharedSVG
            className={s.icon}
            width="28"
            height="28"
            svgId={'close'}
          />
        </Button>

        <h3 className={s.title}>{title}</h3>

        <p className={s.choose}>{subTitle}</p>

        <p className={s.amount}>{t('waterModal.AmountWater')}</p>

        <Counter
          count={count}
          onAddCount={onAddCount}
          onRemoveCount={onRemoveCount}
        />

        <WaterForm
          operation={operation}
          entry={entry}
          handleWaterChange={handleWaterChange}
          waterValue={waterValue}
          setActive={setActive}
          setCount={setCount}
          setWaterValue={setWaterValue}
        />
      </div>
    </div>
  );
};
