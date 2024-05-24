import { useTour } from '@reactour/tour';
// import { useTranslation } from 'react-i18next';
import css from './ButtonTour.module.css';
import { useEffect } from 'react';
import { AiTwotoneBulb } from 'react-icons/ai';

const TourButton = () => {
  // const { t } = useTranslation();
  const { setIsOpen } = useTour();

  useEffect(() => {
    const userId = 'uniqueUserId';
    const tourAlreadyStarted = localStorage.getItem(`tourStarted_${userId}`);

    if (!tourAlreadyStarted) {
      setIsOpen(true);
      localStorage.setItem(`tourStarted_${userId}`, true);
    }
  }, [setIsOpen]);

  const handleOpenTour = () => {
    setIsOpen(true);
  };

  return (
    <button className={css.buttonTour} onClick={handleOpenTour}>
      {/* {t('ButtonTour.openTour')} */}
      <AiTwotoneBulb size={32} />
    </button>
  );
};

export default TourButton;
