import * as yup from 'yup';

export const validationSchema = yup
  .object({
    file: yup
      .mixed()
      .test('fileSize', 'File size is too large', value => {
        return !value || (value && value[0].size <= 1024 * 1024); // Розмір файлу менше або рівно 1МБ, якщо файл вказаний
      })
      .test('fileType', 'Invalid file type', value => {
        return (
          !value ||
          (value && ['image/jpeg', 'image/png'].includes(value[0].type))
        ); // Тільки файли типу jpeg або png, якщо файл вказаний
      }),
    gender: yup.boolean(),
    nameUser: yup
      .string()
      .min(2, 'Must be at least 2 letters long')
      .required('Name is required'),
    Email: yup
      .string()
      .min(6, 'Must be at least 2 letters long')
      .required('Email is required'),
    Your_weight: yup.string(),
    Your_sports: yup.string(),
    Your_water: yup.string(),
  })
  .required();
