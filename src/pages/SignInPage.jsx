import { Helmet } from 'react-helmet-async';
import SignInForm from '../components/signInPage/SignInForm/SingInForm';
import MediaQuery from 'react-responsive';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import Section from '../shared/components/Section/Section';
// import { useLocation } from 'react-router-dom';

export default function SignIn() {
  // const location = useLocation();

  // const searchParams = new URLSearchParams(location.search);

  // const tokenExists = searchParams.has('token'); // true
  // const refreshTokenExists = searchParams.has('refreshToken'); // true

  // const token = tokenExists ? searchParams.get('token') : null;
  // const refreshToken = refreshTokenExists
  //   ? searchParams.get('refreshToken')
  //   : null;

  // console.log(token);
  // console.log(refreshToken);

  return (
    <div>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <Section>
        <SignInForm />
        <MediaQuery minWidth={1440}>
          <AdvantagesSection />
        </MediaQuery>
      </Section>
    </div>
  );
}
