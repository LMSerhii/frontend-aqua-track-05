import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from '../signInPage/SignInForm/SingInForm.module.css';
import * as Yup from 'yup';
import { useId } from 'react';
import Logo from '../../shared/components/Logo/Logo';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const initialValues = {
  password: '',
  repeatPassword: '',
};

export default function ResetForm({ onVerification }) {
  const { t } = useTranslation();
  const CheckSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, t('ResetForm.minTooShort'))
      .max(50, t('ResetForm.maxTooLong'))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\\$%\\^&\\*])(?=.{8,128})/,

        t('ResetForm.matchesPassword')
      )
      .required(t('ResetForm.requiredPassword')),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('ResetForm.oneOfPassword'))
      .required(t('ResetForm.requiredPasswordrepeat')),
  });

  const idPassword = useId();
  const idRepeatPassword = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const user = {
      password: values.password,
    };

    const pathSegments = window.location.pathname.split('/');
    const otp = pathSegments[pathSegments.length - 1];

    dispatch(resetPassword({ password: user.password, otp }))
      .unwrap()
      .then(() => {
        onVerification();
        actions.resetForm();
        console.log('The password has been successfully changed!');
        toast.success('The password has been successfully changed!');

        setTimeout(() => {
          window.location.href = '/signin';
        }, 8000);
      })
      .catch(error => {
        toast.error('Something is wrong, please try again...');
        console.log(error);
      });
  };

  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.div}>
          <h2 className={css.h2}>{t('ResetForm.makeTexth2')}</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={CheckSchema}
            onSubmit={handleSubmit}
          >
            <Form className={css.form}>
              <div className={css.field}>
                <label htmlFor={idPassword} className={css.label}>
                  {t('ResetForm.newPasswordLabel')}
                </label>
                <Field
                  type="text"
                  name="password"
                  id={idPassword}
                  className={css.input}
                  placeholder={t('ResetForm.enterPlace')}
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.field}>
                <label htmlFor={idPassword} className={css.label}>
                  {t('ResetForm.repeatPassword')}
                </label>
                <Field
                  type="text"
                  name="repeatPassword"
                  id={idRepeatPassword}
                  className={css.input}
                  placeholder={t('ResetForm.repeatPassword')}
                />
                <ErrorMessage
                  name="repeatPassword"
                  component="span"
                  className={css.error}
                />
              </div>
              <button type="submit" className={css.button}>
                {t('ResetForm.confirmBtn')}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
