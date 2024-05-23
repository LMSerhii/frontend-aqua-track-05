import { TourProvider } from '@reactour/tour';
import TourSteps from '../TourSteps.js';
import App from '../App.jsx';

const TourWrapper = () => {
  const steps = TourSteps();
  return (
    <TourProvider steps={steps}>
      <App />
    </TourProvider>
  );
};

export default TourWrapper;
