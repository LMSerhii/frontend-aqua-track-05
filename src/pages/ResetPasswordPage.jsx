import { Helmet } from 'react-helmet-async';
import MediaQuery from 'react-responsive';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import Section from '../shared/components/Section/Section';
import ResetForm from '../components/resetPage/ResetForm';

export default function ResetPasswordPage() {
  return (
    <div>
      <Helmet>
        <title>Reset password</title>
      </Helmet>
      <Section>
        <ResetForm />
        <MediaQuery minWidth={1440}>
          <AdvantagesSection />
        </MediaQuery>
      </Section>
    </div>
  );
}
