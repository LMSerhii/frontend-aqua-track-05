import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './SignUpForm.module.css';
import * as Yup from 'yup';
import { useId, useState } from 'react';
import Logo from '../../../shared/components/Logo/Logo';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import toast from 'react-hot-toast';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import { sprite } from '../../../shared/icons/index.js';
const CheckSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Required email'),
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
  email: '',
  password: '',
  repeatPassword: '',
};
export default function SignUpForm() {
  const navigate = useNavigate();
  const idEmail = useId();
  const idPassword = useId();
  const idRepeatPassword = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, _) => {
    const name = values.email.split('@')[0];
    const user = { name, email: values.email, password: values.password };
    dispatch(register(user))
      .unwrap()
      .then(() => {
        toast.success('You have successfully registered!');
        navigate('/signin');
      })
      .catch(error => {
        if (error === 'Email already in use') {
          toast.error(error);
          return;
        }
        toast.error('Something went wrong. Please try again later.');
      });
  };
  
  const onClickIcon = (name, iconId) => {
    if (document.getElementById(name).type === 'password') {
      document.getElementById(name).type = 'text';
      document
        .getElementById(iconId)
        .querySelector('use')
        .setAttribute('xlink:href', `${sprite}#eye-password-open`);
    } else {
      document.getElementById(name).type = 'password';
      document
        .getElementById(iconId)
        .querySelector('use')
        .setAttribute('xlink:href', `${sprite}#eye-password-close`);
    }
  };

  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.div}>
          <h2 className={css.h2}>Sign Up</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={CheckSchema}
            onSubmit={handleSubmit}
          >
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
                <button className={css.divIcon} type="button">
                  <SharedSVG
                    id="firstIconPassword"
                    svgId="eye-password-close"
                    width={30}
                    height={30}
                    onClick={() => onClickIcon(idPassword, 'firstIconPassword')}
                  />
                </button>
              </div>
              <div className={css.field3}>
                <label htmlFor={idPassword} className={css.label}>
                  Repeat Password
                </label>
                <Field
                  type="password"
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
                <button className={css.divIcon} type="button">
                  <SharedSVG
                    id="SecondIconPassword"
                    svgId="eye-password-close"
                    width={30}
                    height={30}
                    onClick={() =>
                      onClickIcon(idRepeatPassword, 'SecondIconPassword')
                    }
                  />
                </button>
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
