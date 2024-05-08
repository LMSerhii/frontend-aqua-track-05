import { Helmet } from 'react-helmet-async';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../components/homePage/WelcomeSection/WelcomeSection';


export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <section>
        <WelcomeSection />
      </section>
    </>
  );
}
