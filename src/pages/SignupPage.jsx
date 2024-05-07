import { Helmet } from 'react-helmet-async';
import RegisterForm from '../components/SignupPage/RegisterForm/RegisterForm';

export default function SignUp() {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
