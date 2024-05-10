import { Helmet } from 'react-helmet-async';
import SignInForm from '../components/signInPage/SignInForm/SingInForm';
import MediaQuery from 'react-responsive';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import Section from '../shared/components/Section/Section';

export default function SignIn() {
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
