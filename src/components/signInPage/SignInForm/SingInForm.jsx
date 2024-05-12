import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './SingInForm.module.css';
import * as Yup from 'yup';
import { useId } from 'react';
import Logo from '../../../shared/components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/operations';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const initialValues = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const idEmail = useId();
  const idPassword = useId();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const CheckSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('singInForm.emailVelid'))
      .required(t('singInForm.emailRequired')),
    password: Yup.string()
      .min(6, t('singInForm.passwordMin'))
      .max(50, t('singInForm.passwordMax')),
  });

  const handleSubmit = (values, actions) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(logIn(user))
      .unwrap()
      .then(() => {
        actions.resetForm();
        console.log('User is logged in');
      })
      .catch(error => {
        toast.error('User not fined or not verify');
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
      </div>
    </div>
  );
}
