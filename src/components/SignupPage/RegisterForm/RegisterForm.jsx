import s from './RegisterForm.module.css';

const RegisterForm = () => {
  return (
    <form className={s.form}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>Sign up</button>
    </form>
  );
};

export default RegisterForm;
