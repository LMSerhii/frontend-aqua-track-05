import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from '../signInPage/SignInForm/SingInForm.module.css';
import * as Yup from 'yup';
import { useId } from 'react';
import Logo from '../../shared/components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const CheckSchema = Yup.object().shape({
  email: Yup.string().email('Pls valid email').required('Required email'),
});
const initialValues = {
  email: '',
};

export default function ForgotForm() {
  const idEmail = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const user = {
      email: values.email,
    };
    dispatch(forgotPassword(user.email))
      .unwrap()
      .then(() => {
        actions.resetForm();
        console.log('Recover link had been sent');
        toast.success('Recover link had been sent to your email!');
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
          <h2 className={css.h2}>Recover your password</h2>
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
              <button type="submit" className={css.button}>
                Send link
              </button>
            </Form>
          </Formik>
        </div>
        <p className={css.text}>
          Remember your password?
          <NavLink to="/signin" className={css.link}>
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
}
