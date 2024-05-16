import Button from '../../../shared/components/Button/Button';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import s from './Counter.module.css';
import { useTranslation } from 'react-i18next';

const Counter = ({ count, onAddCount, onRemoveCount }) => {
  const { t } = useTranslation();
  return (
    <div className={s.counter}>
      <Button className={s.btnCounter} onClick={onRemoveCount} type="button">
        <SharedSVG className={s.icon} width={40} height={40} svgId="minus" />
      </Button>
      <p className={s.countValue}>
        {count} {t('waterModal.ml')}
      </p>
      <Button className={s.btnCounter} onClick={onAddCount} type="button">
        <SharedSVG className={s.icon} width={40} height={40} svgId="plus-2" />
      </Button>
    </div>
  );
};

export default Counter;
