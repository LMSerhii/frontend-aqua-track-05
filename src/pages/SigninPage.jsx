import { Helmet } from 'react-helmet-async';
import LoginForm from '../components/SigninPage/LoginForm/LoginForm';

export default function SignIn() {
  return (
    <div>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
