import { TourProvider } from '@reactour/tour';
import TourSteps from '../TourSteps.js';

const TourWrapper = ({ children }) => {
  const steps = TourSteps();

  return (
    <TourProvider
      steps={steps}
      styles={{
        popover: base => ({
          ...base,
          '--reactour-accent': '#9be1a0',
          borderRadius: 20,
          padding: 30,
        }),
        maskArea: base => ({ ...base, rx: 30 }),
        controls: base => ({ ...base, marginTop: 50 }),
        close: base => ({
          ...base,
          right: 15,
          left: 'auto',
          top: 15,
        }),
      }}
      padding={{
        mask: 25,
        popover: [5, 10],
        // wrapper: 20,
      }}
      disableInteraction
    >
      {children}
    </TourProvider>
  );
};

export default TourWrapper;
