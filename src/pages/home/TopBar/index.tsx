import { FC, useState } from 'react';
import _ from 'lodash';
import { SkinOutlined } from '@ant-design/icons';
import { history } from 'umi';
import styles from './index.module.less';

const TopBar: FC = (props) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'dark',
  );
  const bodyElement = document.querySelector('body');

  const themeChange = () => {
    const value = theme === 'dark' ? 'light' : 'dark';
    setTheme(value);
    localStorage.setItem('theme', value);
    bodyElement?.setAttribute('class', `theme-${value}`);
  };

  const pushHome = () => {
    history.push('/home');
  };

  return (
    <div className={styles['header-content']}>
      <div className={styles['title']} onClick={pushHome}>
        <span>Nothing</span>
        <i>{'<= 别看了点这'}</i>
      </div>
      <SkinOutlined onClick={_.debounce(themeChange, 200)} />
    </div>
  );
};

export default TopBar;
