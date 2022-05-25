import { FC, useState } from 'react';
import _ from 'lodash';
import TopBar from '@/pages/home/TopBar';
import BottomBar from '@/pages/home/BottomBar';
import styles from './index.module.less';

const Home: FC = ({ children }) => {
  return (
    <div className={styles['home-content']}>
      <TopBar />
      <div className={styles['main-content']}>{children}</div>
      <BottomBar />
    </div>
  );
};

export default Home;
