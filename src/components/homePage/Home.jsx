import Section from '../../shared/components/Section/Section';
import { UserBarPopover } from '../trackerPage/UserBarPopover/UserBarPopover';
import AdvantagesSection from './AdvantagesSection/AdvantagesSection';
import WelcomeSection from './WelcomeSection/WelcomeSection';

const Home = () => {
  return (
    <Section>
      <WelcomeSection />
      <AdvantagesSection />
      <UserBarPopover />
    </Section>
  );
};

export default Home;
