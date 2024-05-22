import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { NavLink, useNavigate } from 'react-router-dom';

import css from './SignUpForm.module.css';
import toast from 'react-hot-toast';

import { useId } from 'react';

import Logo from '../../../shared/components/Logo/Logo';
import { ShareIconPassword } from '../../../shared/components/ShareIconPassword/ShareIconPassword';
import { useTranslation } from 'react-i18next';
import GoogleButton from '../../../shared/components/GoogleButton/GoogleButton';
import { useRegisterMutation } from '../../../redux/authApi/authApi';

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

export default function SignUpForm() {
  const [register] = useRegisterMutation();
  const { t } = useTranslation();

  const CheckSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('singUnForm.emailVelid'))
      .required(t('singUnForm.emailRequired')),
    password: Yup.string()
      .min(6, t('singUnForm.passwordMin'))
      .max(50, t('singUnForm.passwordMax'))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\\$%\\^&\\*])(?=.{8,128})/,
        t('singUnForm.passwordMatches')
      )
      .required(t('singUnForm.passwordRequired')),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('singUnForm.repeatPasswordOneOf'))
      .required(t('singUnForm.repeatPasswordRequired')),
  });

  const navigate = useNavigate();
  const idEmail = useId();
  const idPassword = useId();
  const idRepeatPassword = useId();

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (values, _) => {
    const name = values.email.split('@')[0];

    const user = { name, email: values.email, password: values.password };

    register(user)
      .unwrap()
      .then(() => {
        toast.success(`${t('Errors.sendEmail')} ${user.email} !`, {
          duration: 5000,
        });
        navigate('/signin');
      })
      .catch(error => {
        if (error.data.message === 'Email already in use') {
          toast.error(t('Errors.useEmail'));
          return;
        }
        toast.error(t('Errors.wrong'));
      });
  };

  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.div}>
          <h2 className={css.h2}>{t('singUnForm.signUp')}</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={CheckSchema}
            onSubmit={handleSubmit}
          >
            <Form className={css.form}>
              <div className={css.field}>
                <label htmlFor={idEmail} className={css.label}>
                  {t('singUnForm.email')}
                </label>
                <Field
                  type="text"
                  name="email"
                  id={idEmail}
                  className={css.input}
                  placeholder={t('singUnForm.passwordPlace')}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.field}>
                <label htmlFor={idPassword} className={css.label}>
                  {t('singUnForm.password')}
                </label>
                <Field
                  type="password"
                  name="password"
                  id={idPassword}
                  className={css.input}
                  placeholder={t('singUnForm.passwordPlace')}
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
              <div className={css.field3}>
                <label htmlFor={idPassword} className={css.label}>
                  {t('singUnForm.repeatPassword')}
                </label>
                <Field
                  type="password"
                  name="repeatPassword"
                  id={idRepeatPassword}
                  className={css.input}
                  placeholder={t('singUnForm.passwordRepeatPlace')}
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
                {t('singUnForm.sigmUp')}
              </button>
            </Form>
          </Formik>
        </div>
        <p className={css.text}>
          {t('singUnForm.textAlready')}
          <NavLink to="/signin" className={css.link}>
            {t('singUnForm.signIn')}
          </NavLink>
        </p>
        <GoogleButton />
      </div>
    </div>
  );
}
