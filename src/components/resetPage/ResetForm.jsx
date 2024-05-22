import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from '../signUpPage/SignUpForm/SignUpForm.module.css';
import * as Yup from 'yup';
import { useId } from 'react';
import Logo from '../../shared/components/Logo/Logo';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ShareIconPassword } from '../../shared/components/ShareIconPassword/ShareIconPassword';
import { useResetPasswordMutation } from '../../redux/authApi/authApi';
import { useLocation, useNavigate } from 'react-router-dom';

const initialValues = {
  password: '',
  repeatPassword: '',
};

export default function ResetForm({ onVerification }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [resetPassword] = useResetPasswordMutation();
  const idPassword = useId();
  const idRepeatPassword = useId();

  const { t } = useTranslation();

  const otp = location.pathname.split('/').pop();

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

  const handleSubmit = (values, actions) => {
    console.log('otp', otp);
    resetPassword({ password: values.password, otp })
      .unwrap()
      .then(() => {
        onVerification();
        actions.resetForm();

        toast.success('The password has been successfully changed!');

        setTimeout(() => {
          navigate('/signin');
        }, 5000);
      })
      .catch(() => {
        toast.error('Something is wrong, please try again...');
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
                  type="password"
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
                <ShareIconPassword
                  name={idPassword}
                  iconId="FirstIconPassword"
                  css={css}
                />
              </div>
              <div className={css.field}>
                <label htmlFor={idPassword} className={css.label}>
                  {t('ResetForm.repeatPassword')}
                </label>
                <Field
                  type="password"
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
                <ShareIconPassword
                  name={idRepeatPassword}
                  iconId="SecondIconPassword"
                  css={css}
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
