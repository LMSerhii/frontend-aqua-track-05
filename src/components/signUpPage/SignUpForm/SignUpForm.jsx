import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './SignUpForm.module.css';
import * as Yup from 'yup';
import { useId } from 'react';
import Logo from '../../../shared/components/Logo/Logo';
import { NavLink } from 'react-router-dom';

const CheckSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required('Required email'),
  password: Yup.string().min(6, 'Too short').max(50, 'Too long'),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match'
  ),
});
const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

export default function SignUpForm() {
  const idEmail = useId();
  const idPassword = useId();
  const idRepeatPassword = useId();
  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.div}>
          <h2 className={css.h2}>Sign Up</h2>
          <Formik initialValues={initialValues} validationSchema={CheckSchema}>
            <Form className={css.form}>
              <div className={css.field}>
                <label htmlFor={idEmail} className={css.label}>
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id={idEmail}
                  className={css.input}
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.field}>
                <label htmlFor={idPassword} className={css.label}>
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id={idPassword}
                  className={css.input}
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.field3}>
                <label htmlFor={idPassword} className={css.label}>
                  Repeat Password
                </label>
                <Field
                  type="repeatPassword"
                  name="repeatPassword"
                  id={idRepeatPassword}
                  className={css.input}
                  placeholder="Repeat password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.error}
                />
              </div>
              <button type="submit" className={css.button}>
                Sign up
              </button>
            </Form>
          </Formik>
        </div>
        <p className={css.text}>
          Already have account?
          <NavLink to="/signin" className={css.link}>
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
}
