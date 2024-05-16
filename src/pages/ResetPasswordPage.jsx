import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MediaQuery from 'react-responsive';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import Section from '../shared/components/Section/Section';
import ResetForm from '../components/resetPage/ResetForm';
import SuccessVerify from '../components/successVerify/SuccessVerify';

export default function ResetPasswordPage() {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerified(true);
  };

  return (
    <div>
      <Helmet>
        <title>Reset password</title>
      </Helmet>
      <Section>
        {!isVerified && <ResetForm onVerification={handleVerification} />}
        {isVerified && (
          <SuccessVerify>Password successfully update!</SuccessVerify>
        )}
        <MediaQuery minWidth={1440}>
          <AdvantagesSection />
        </MediaQuery>
      </Section>
    </div>
  );
}
