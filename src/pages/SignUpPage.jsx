import { Helmet } from 'react-helmet-async';
import SignUpForm from '../components/signUpPage/SignUpForm/SignUpForm';
import AdvantagesSection from '../components/homePage/AdvantagesSection/AdvantagesSection';
import css from '../shared/components/Section/Section.module.css';
import MediaQuery from 'react-responsive';
export default function SignUp() {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <section className={css.section}>
        <SignUpForm />
        <MediaQuery minWidth={1440}>
          <AdvantagesSection />
        </MediaQuery>

       
      </section>
    </div>
  );
}
