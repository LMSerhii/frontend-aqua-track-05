import { Helmet } from 'react-helmet-async';
import { NotFoundPage } from '../components/notFoundPage/NotFoundPage.jsx';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <NotFoundPage />
    </>
  );
}

