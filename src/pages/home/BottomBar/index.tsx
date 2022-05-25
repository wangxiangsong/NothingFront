import { FC, useState, useEffect } from 'react';
import _ from 'lodash';
import styles from './index.module.less';
import dayjs from 'dayjs';

const TopBar: FC = () => {
  const [date, setState] = useState<number>(new Date().getTime());
  const counter = setInterval(() => {
    setState(date + 1000);
  }, 1000);
  useEffect(() => {
    return () => {
      clearInterval(counter);
    };
  });

  return (
    <div className={styles['bottom-content']}>
      <span>{`反正不是叙利亚时间：${dayjs(date).format(
        'YYYY-MM-DD HH:MM:ss',
      )}`}</span>
    </div>
  );
};

export default TopBar;
