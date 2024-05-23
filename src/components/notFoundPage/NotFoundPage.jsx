import { Button, Result } from 'antd';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Result
      status="404"
      title={t('NotFound.notFoundTitle')}
      subTitle={t('NotFound.notFoundParagraph')}
      extra={
        <Button type="primary">
          <NavLink to="/">{t('NotFound.notFoundBtn')}</NavLink>
        </Button>
      }
    />
  );
};
