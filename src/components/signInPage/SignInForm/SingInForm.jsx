import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './SingInForm.module.css';
import * as Yup from 'yup';
import { useId, useState } from 'react';
import Logo from '../../../shared/components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn, resendEmail } from '../../../redux/auth/operations';
import toast from 'react-hot-toast';

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
  const [verify, setVerify] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (values, actions) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(logIn(user))
      .unwrap()
      .then(() => {
        toast.success('You have successfully logged in!');
        setEmail('');
        setVerify(false);
        actions.resetForm();
      })
      .catch(error => {
        if (error === 'Account is not verified'){ 
          toast.error(error);
          setEmail(values.email);
          setVerify(true);
          return;
        }
        toast.error(error);
      });
  };

  const handleResendEmail =() =>{ 
    dispatch(resendEmail({email}))
    .unwrap()
    .then(() => {
      toast.success('Email sent successfully');
      setEmail('');
      setVerify(false);
    })
    .catch(error => {
      toast.error(error);
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
                {
                  verify && <button type="button" onClick={handleResendEmail} className={css.btn}>Resend email</button>
                }
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
