import { Helmet } from 'react-helmet-async';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';


export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <section>
        <AdvantagesSection />
      </section>
    </>
  );
}
