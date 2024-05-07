import s from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <form className={s.form}>
      <input type="text" />
      <input type="text" />
      <button>Sign in</button>
    </form>
  );
};

export default LoginForm;
