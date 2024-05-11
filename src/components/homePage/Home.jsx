import Section from '../../shared/components/Section/Section';
// import { UserSettingsModal } from '../modals/UserSettingsModal/UserSettingsModal';
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

// const Home = () => {
//   return (
//     <>
//       <Section>
//         <WelcomeSection />
//         <AdvantagesSection />
//       </Section>
//       <br />
//       <UserSettingsModal />
//     </>
//   );
// };

export default Home;
