import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './SingInForm.module.css';
import * as Yup from 'yup';
import { useId } from 'react';
import Logo from '../../../shared/components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/operations';

const CheckSchema = Yup.object().shape({
  email: Yup.string().email('Pls valid email').required('Required email'),
  password: Yup.string().min(6, 'Too short').max(50, 'Too long'),
});
const initialValues = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const idEmail = useId();
  const idPassword = useId();
  const dispatch = useDispatch(); 

  const handleSubmit = (values, actions) => {
    const user = { 
      email: values.email, 
      password: values.password 
    }
    dispatch(logIn(user)).unwrap().then(() => { 
      actions.resetForm(); 
     console.log('User is logged in');
    }).catch((error) => { 
      console.log(error);
    }); 
  } 

  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.div}>
          <h2 className={css.h2}>Sign in</h2>
          <Formik initialValues={initialValues} validationSchema={CheckSchema} onSubmit={handleSubmit}>
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
              <div className={css.field3}>
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
              <button type="submit" className={css.button}>
                Sign in
              </button>
            </Form>
          </Formik>
        </div>
        <p className={css.text}>
          Don’t have an account?
          <NavLink to="/signup" className={css.link}>
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
