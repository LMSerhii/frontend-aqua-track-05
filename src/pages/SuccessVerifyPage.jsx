import { Helmet } from 'react-helmet-async';
import MediaQuery from 'react-responsive';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import Section from '../shared/components/Section/Section';
import SuccessVerify from '../components/successVerify/SuccessVerify';

export default function SuccessVerifyPage() {
  return (
    <div>
      <Helmet>
        <title>Verification successful</title>
      </Helmet>
      <Section>
        <SuccessVerify>Verification successful!</SuccessVerify>
        <MediaQuery minWidth={1440}>
          <AdvantagesSection />
        </MediaQuery>
      </Section>
    </div>
  );
}
