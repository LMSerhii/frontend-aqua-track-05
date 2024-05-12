import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from '../signInPage/SignInForm/SingInForm.module.css';
import * as Yup from 'yup';
import { useId } from 'react';
import Logo from '../../shared/components/Logo/Logo';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const CheckSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too short')
    .max(50, 'Too long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\\$%\\^&\\*])(?=.{8,128})/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    )
    .required('Required password'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required password'),
});
const initialValues = {
  password: '',
  repeatPassword: '',
};

export default function ResetForm() {
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
        actions.resetForm();
        console.log('The password has been successfully changed!');
        toast.success('The password has been successfully changed!');

        setTimeout(() => {
          toast.success('Redirect to login page after 2s');
        }, 1000);

        setTimeout(() => {
          toast.success('Redirect to login page after 1s');
        }, 2000);

        setTimeout(() => {
          toast.success('Redirect to login page...');
        }, 3000);

        setTimeout(() => {
          window.location.href = '/signin';
        }, 3000);
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
          <h2 className={css.h2}>Make a new password</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={CheckSchema}
            onSubmit={handleSubmit}
          >
            <Form className={css.form}>
              <div className={css.field}>
                <label htmlFor={idPassword} className={css.label}>
                  New password
                </label>
                <Field
                  type="text"
                  name="password"
                  id={idPassword}
                  className={css.input}
                  placeholder="Enter your new password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.field}>
                <label htmlFor={idPassword} className={css.label}>
                  Repeat Password
                </label>
                <Field
                  type="text"
                  name="repeatPassword"
                  id={idRepeatPassword}
                  className={css.input}
                  placeholder="Repeat password"
                />
                <ErrorMessage
                  name="repeatPassword"
                  component="span"
                  className={css.error}
                />
              </div>
              <button type="submit" className={css.button}>
                Confirm
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
