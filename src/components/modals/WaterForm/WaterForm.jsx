import s from './WaterForm.module.css';
import Button from '../../../shared/components/Button/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { currentTime } from '../../../shared/helpers/dateServices';
import {
  useCreateEntryMutation,
  useUpdateEntryMutation,
} from '../../../redux/tracker/trackerApi';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectDate } from '../../../redux/date/dateSlice';

export const WaterForm = ({
  handleWaterChange,
  waterValue,
  operation,
  setActive,
  entry,
  setCount,
  setWaterValue,
}) => {
  const date = useSelector(selectDate);
  const [time, setTime] = useState(currentTime);
  const { t } = useTranslation();

  useEffect(() => {
    if (operation === 'edit') {
      setCount(entry.amount);
      setWaterValue(entry.amount.toString());
    }
  }, [operation, entry, setCount, setWaterValue]);

  const schema = yup.object().shape({
    water: yup
      .number()
      .required(t('waterModal.WaterForm.waterRequired'))
      .positive(t('waterModal.WaterForm.waterPositive'))
      .integer(t('waterModal.WaterForm.waterInteger')),
  });

  const [createEntry] = useCreateEntryMutation();
  const [updateEntry] = useUpdateEntryMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    try {
      if (operation === 'add') {
        const data1 = {
          date: date,
          amount: parseInt(waterValue),
          time: currentTime,
        };

        createEntry(data1);

        setActive(false);
        setCount(50);
        setWaterValue('50');
      } else {
        const data2 = {
          date: date,
          id: entry.id,
          amount: parseInt(waterValue),
          time: currentTime,
        };

        updateEntry(data2);

        setActive(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)} action="">
        <label className={s.timeLable} htmlFor="time">
          {t('waterModal.timeRecording')}
        </label>
        <br />
        <input
          className={s.timeInput}
          value={time}
          onChange={e => setTime(e.target.value)}
          type="time"
          id="time"
          name="time"
        />
        <br />

        <label className={s.waterLable} htmlFor="water">
          {t('waterModal.waterValue')}
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
        <br />
        <Button className={s.btnSubmit} type="submit">
          {t('waterModal.btnSubmit')}
        </Button>
      </form>
    </>
  );
};
