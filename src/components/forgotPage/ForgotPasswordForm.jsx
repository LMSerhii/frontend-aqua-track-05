import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from '../signInPage/SignInForm/SingInForm.module.css';
import * as Yup from 'yup';
import { useId } from 'react';
import Logo from '../../shared/components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useForgotPasswordMutation } from '../../redux/authApi/authApi';

const initialValues = {
  email: '',
};

export default function ForgotForm() {
  const [forgotPassword] = useForgotPasswordMutation();
  const idEmail = useId();

  const { t } = useTranslation();

  const CheckSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('ForgotPasswordForm.emailVelid'))
      .required(t('ForgotPasswordForm.emailRequired')),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await forgotPassword({ email: values.email })
        .unwrap()
        .then(() => {
          actions.resetForm();

          toast.success('Recover link had been sent to your email!');
        })
        .catch(error => {
          toast.error('Something is wrong, please try again...');
          console.log(error);
        });
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.div}>
          <h2 className={css.h2}>
            {t('ForgotPasswordForm.recoverYourPassword')}
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={CheckSchema}
            onSubmit={handleSubmit}
          >
            <Form className={css.form}>
              <div className={css.field}>
                <label htmlFor={idEmail} className={css.label}>
                  {t('ForgotPasswordForm.email')}
                </label>
                <Field
                  type="text"
                  name="email"
                  id={idEmail}
                  className={css.input}
                  placeholder={t('ForgotPasswordForm.enterPlace')}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>
              <button type="submit" className={css.button}>
                {t('ForgotPasswordForm.sendLinkBtn')}
              </button>
            </Form>
          </Formik>
        </div>
        <p className={css.text}>
          {t('ForgotPasswordForm.rememberPasswordText')}

          <NavLink to="/signin" className={css.link}>
            {t('ForgotPasswordForm.signIn')}
          </NavLink>
        </p>
      </div>
    </div>
  );
}
