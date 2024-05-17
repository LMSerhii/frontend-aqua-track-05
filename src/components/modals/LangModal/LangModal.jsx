import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, Space } from 'antd';
import { sprite } from '../../../shared/icons/index';
import s from './LangModal.module.css';

const LangModal = ({ setIsOpen }) => {
  const [selectedLang, setSelectedLang] = useState('en');

  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng);
    setIsOpen(false);
  };

  return (
    <div className={s.langModal_wrap}>
      <h2 className={s.langModal_title}>Choose your language to continue!</h2>
      <button
        type="button"
        className={s.langModal_closeBtn}
        onClick={() => setIsOpen(false)}
      >
        <svg width="18" height="18" className={s.langModal_closeIcon}>
          <use xlinkHref={`${sprite}#close`}></use>
        </svg>
      </button>

      <div className={s.selectWrapper}>
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
        >
          <Select
            value={selectedLang}
            onChange={changeLanguage}
            style={{
              width: '100%',
            }}
            placement="bottomLeft"
            className={s.langModal_input}
          >
            <Select.Option value="en">
              <div className={s.optionContent}>
                <svg width="18" height="18" className={s.iconFlag}>
                  <use xlinkHref={`${sprite}#en-flag`}></use>
                </svg>
                <span className={s.langModal_text}>English</span>
              </div>
            </Select.Option>

            <Select.Option value="ua">
              <div className={s.optionContent}>
                <svg width="18" height="18" className={s.iconFlag}>
                  <use xlinkHref={`${sprite}#ua-flag`}></use>
                </svg>
                <span className={s.langModal_text}>Українська</span>
              </div>
            </Select.Option>
          </Select>
        </Space>
      </div>
    </div>
  );
};

export default LangModal;
