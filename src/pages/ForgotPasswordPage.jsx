import { Helmet } from 'react-helmet-async';
import MediaQuery from 'react-responsive';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import Section from '../shared/components/Section/Section';
import ForgotForm from '../components/forgotPage/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div>
      <Helmet>
        <title>Forgot password</title>
      </Helmet>
      <Section>
        <ForgotForm />
        <MediaQuery minWidth={1440}>
          <AdvantagesSection />
        </MediaQuery>
      </Section>
    </div>
  );
}
