import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './SingInForm.module.css';
import * as Yup from 'yup';
import { useId, useState } from 'react';
import Logo from '../../../shared/components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { ShareIconPassword } from '../../../shared/components/ShareIconPassword/ShareIconPassword';
import GoogleButton from '../../../shared/components/GoogleButton/GoogleButton';
import { useTranslation } from 'react-i18next';
import {
  useLoginMutation,
  useResendEmailMutation,
} from '../../../redux/authApi/authApi';
import { setCredentials, setUserData } from '../../../redux/auth/authSlice';

const initialValues = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [resendEmail] = useResendEmailMutation();

  const { t } = useTranslation();

  const idEmail = useId();
  const idPassword = useId();

  const [verify, setVerify] = useState(false);

  const [email, setEmail] = useState('');

  const CheckSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('singInForm.emailVelid'))
      .required(t('singInForm.emailRequired')),
    password: Yup.string()
      .min(6, t('singInForm.passwordMin'))
      .max(50, t('singInForm.passwordMax'))
      .required(t('singInForm.passwordRequired')),
  });

  const handleSubmit = (values, actions) => {
    login({
      email: values.email,
      password: values.password,
    })
      .unwrap()
      .then(data => {
        dispatch(
          setCredentials({
            accessToken: data.token,
            refreshToken: data.refreshToken,
          })
        );
        dispatch(setUserData({ user: data.user }));

        toast.success(t('Errors.login'));

        setEmail('');
        setVerify(false);
        actions.resetForm();
      })
      .catch(err => {
        if (err.data.message === 'Account is not verified') {
          toast.error(t('Errors.notVerified'));

          setEmail(values.email);

          setVerify(true);
          return;
        }

        toast.error(err.data.message);
      });
  };

  const handleResendEmail = async () => {
    await resendEmail({ email })
      .unwrap()
      .then(() => {
        toast.success(t('Errors.sentEmail'));
        setEmail('');
        setVerify(false);
      })
      .catch(err => {
        toast.error(err.data.message);
      });
  };

  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.div}>
          <h2 className={css.h2}>{t('singInForm.signIn')}</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={CheckSchema}
            onSubmit={handleSubmit}
          >
            <Form className={css.form}>
              <div className={css.field}>
                <label htmlFor={idEmail} className={css.label}>
                  {t('singInForm.email')}
                </label>
                <Field
                  type="text"
                  name="email"
                  id={idEmail}
                  className={css.input}
                  placeholder={t('singInForm.emailPlaceholder')}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
                {verify && (
                  <button
                    type="button"
                    onClick={handleResendEmail}
                    className={css.btn}
                  >
                    {t('singInForm.resendEmailBtn')}
                  </button>
                )}
              </div>
              <div className={css.field3}>
                <label htmlFor={idPassword} className={css.label}>
                  {t('singInForm.password')}
                </label>
                <Field
                  type="password"
                  name="password"
                  id={idPassword}
                  className={css.input}
                  placeholder={t('singInForm.enterPassword')}
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
              <button type="submit" className={css.button}>
                {t('singInForm.sigIn')}
              </button>
            </Form>
          </Formik>
        </div>
        <p className={css.text}>
          {t('singInForm.textDont')}
          <NavLink to="/signup" className={css.link}>
            {t('singInForm.sigUn')}
          </NavLink>
        </p>
        <NavLink to="/forgot-password-form" className={css.forgotLink}>
          {t('singInForm.forgotPassword')}
        </NavLink>
        <GoogleButton />
      </div>
    </div>
  );
}
