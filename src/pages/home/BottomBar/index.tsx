import { FC, useState, useEffect } from 'react';
import _ from 'lodash';
import styles from './index.module.less';
import dayjs from 'dayjs';

const TopBar: FC = () => {
  const [date, setState] = useState<any>();
  const counter = setInterval(() => {
    setState(timeNow());
  }, 1000);

  function timeNow() {
    let vWeek, vWeek_s, year, month, day, hours, minutes, seconds;
    vWeek = [
      '星期天',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ];
    let date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    hours = hours > 9 ? hours : '0' + hours;
    minutes = date.getMinutes();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    seconds = date.getSeconds();
    seconds = seconds > 9 ? seconds : '0' + seconds;
    vWeek_s = date.getDay();
    let time =
      year +
      '年' +
      month +
      '月' +
      day +
      '日' +
      '\t' +
      hours +
      ':' +
      minutes +
      ':' +
      seconds +
      '\t' +
      vWeek[vWeek_s];
    return time;
  }

  useEffect(() => {
    return () => {
      clearInterval(counter);
    };
  });

  return (
    <div className={styles['bottom-content']}>
      {date ? <span>{`反正不是叙利亚时间：${date}`}</span> : null}
    </div>
  );
};

export default TopBar;
