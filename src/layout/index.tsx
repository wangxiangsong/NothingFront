import { FC, useEffect } from 'react';
import Home from '../pages/home/index';
import { ConfigProvider } from 'antd';
import '../styles/index.less';

const Layout: FC = ({ children }) => {
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }

    const themeName = localStorage.getItem('theme') || 'dark';
    document.querySelector('body')?.setAttribute('class', `theme-${themeName}`);
  }, []);

  return (
    <ConfigProvider>
      <Home>{children}</Home>
    </ConfigProvider>
  );
};

export default Layout;
