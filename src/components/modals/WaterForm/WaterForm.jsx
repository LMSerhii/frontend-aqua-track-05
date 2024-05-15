import s from './WaterForm.module.css';
import Button from '../../../shared/components/Button/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { currentTime } from '../../../shared/helpers/dateServices';
import {
  useCreateEntryMutation,
  useUpdateEntryMutation,
  // useUpdateEntryMutation,
} from '../../../redux/tracker/trackerApi';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectDate } from '../../../redux/date/dateSlice';

export const WaterForm = ({
  handleWaterChange,
  waterValue,
  operation,
  setActive,
  id,
  handleSetAmountData,
}) => {
  const date = useSelector(selectDate);
  const [time, setTime] = useState(currentTime);
  const { t } = useTranslation();

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

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  // Вывод объекта с данными о кол-ве воды
  const onSubmit = async () => {
    try {
      if (operation === 'add') {
        const data1 = {
          date: date,
          amount: parseInt(waterValue),
          time: currentTime,
        };
        const response = await createEntry(data1);

        const amountsList = response.data.data.amounts;

        handleSetAmountData(amountsList);

        setActive(false);
      } else {
        const data2 = {
          id: id,
          date: date,
          amount: parseInt(waterValue),
          time: currentTime,
        };

        console.log(data2);
        setActive(false);
      }
    } catch (error) {
      console.error('Error:', error);
      // Обработка ошибки (если нужно)
    }
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)} action="">
        {/* поле ввода времени */}
        <label className={s.timeLable} htmlFor="time">
          {t('waterModal.timeRecording')}
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
