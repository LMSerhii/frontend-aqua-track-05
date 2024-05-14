import { Helmet } from 'react-helmet-async';
import SignInForm from '../components/signInPage/SignInForm/SingInForm';
import MediaQuery from 'react-responsive';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import Section from '../shared/components/Section/Section';

import { useState } from 'react';
import Modal from 'antd/es/modal/Modal';
import { WaterModalDelete } from '../components/modals/WaterModalDelete/WaterModalDelete';
import { Button } from 'antd';

export default function SignIn() {
  const [active, setActive] = useState(false);
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

      <Button onClick={() => setActive(true)}>open</Button>

      <Modal active={active} setActive={setActive}>
        <WaterModalDelete id="id" setActive={setActive} />
      </Modal>
    </div>
  );
}
