import { Helmet } from 'react-helmet-async';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../components/homePage/WelcomeSection/WelcomeSection';
import Section from '../shared/components/Section/Section';
import css from '../shared/components/Section/Section.module.css';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <section className={css.section}>
        <WelcomeSection />
        <AdvantagesSection />
      </section>
    </>
  );
}
