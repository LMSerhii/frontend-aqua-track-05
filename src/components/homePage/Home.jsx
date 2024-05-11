import Section from '../../shared/components/Section/Section';
import AdvantagesSection from './AdvantagesSection/AdvantagesSection';
import WelcomeSection from './WelcomeSection/WelcomeSection';

const Home = () => {
  return (
    <Section>
      <WelcomeSection />
      <AdvantagesSection />
    </Section>
  );
};

export default Home;
