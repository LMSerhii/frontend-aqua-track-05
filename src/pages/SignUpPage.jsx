import { Helmet } from 'react-helmet-async';
import SignUpForm from '../components/signUpPage/SignUpForm/SignUpForm';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import MediaQuery from 'react-responsive';
import Section from '../shared/components/Section/Section';
export default function SignUp() {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <Section>
        <SignUpForm />
        <MediaQuery minWidth={1440}>
          <AdvantagesSection />
        </MediaQuery>
      </Section>
    </div>
  );
}
