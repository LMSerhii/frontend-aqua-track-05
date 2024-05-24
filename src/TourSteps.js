import { useTranslation } from 'react-i18next';

const TourSteps = () => {
  const { t } = useTranslation();

  const steps = [
    {
      selector: '[data-tour="waterMainInfo"]',
      content: t('ButtonTour.waterInfo'),
    },
    {
      selector: '[data-tour="normaDaily"]',
      content: t('ButtonTour.normaDaily'),
    },
    {
      selector: '[data-tour="WaterProgressBar"]',
      content: t('ButtonTour.waterProgressBar'),
    },

    {
      selector: '[data-tour="addFastWater"]',
      content: t('ButtonTour.addFastWater'),
    },

    {
      selector: '[data-tour="UserBar"]',
      content: t('UserBar.userBarBtn'),
    },

    {
      selector: '[data-tour="AddWaterBtn"]',
      content: t('AddWaterBtn.addWaterBtnTour'),
    },

    {
      selector: '[data-tour="dailyTrack"]',
      content: t('AddWaterBtn.addWaterBtnTour'),
    },

    {
      selector: '[data-tour="MonthInfoTour"]',
      content: t('MonthInfoTour.monthInfoTourInfo'),
    },
  ];

  return steps;
};

export default TourSteps;
