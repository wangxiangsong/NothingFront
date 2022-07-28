import { FC, useEffect } from 'react';
import Home from '../pages/home';
import Login from '../pages/login';
import { ConfigProvider } from 'antd';
import '../styles/index.less';
import '../styles/antdChange.less';
import 'windi.css';

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
      {/* {
    <Home>{children}</Home>
    } */}
      <Login></Login>
    </ConfigProvider>
  );
};

export default Layout;
