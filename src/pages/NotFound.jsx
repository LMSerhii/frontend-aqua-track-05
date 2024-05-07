import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <p>NotFound</p>
    </>
  );
}
