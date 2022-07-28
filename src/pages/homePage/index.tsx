import { FC, useEffect, useReducer, useState } from 'react';
import styles from './index.module.less';
import Modal from './Modal';
import {} from 'antd';

type Person = {
  name: string;
  age: number;
};

const HomePages = () => {
  // const initData = {
  //   show: false
  // };

  // const [state, setState] = useReducer(
  //   (state: Object, payload: Object) => ({...state, ...payload}),
  //   initData
  // );

  // const {
  //   show,
  // } = state;

  const [show, setShow] = useState(false);

  const change = () => {
    setShow(true);
  };

  const cancel = () => {
    setShow(false);
  };

  return (
    <>
      <div className={styles['homePage']}>
        <div
          className={`text-26px leading-30px font-600 items-center mb-28px ${styles['homePage_title']}`}
          onClick={change}
        >
          常用功能
        </div>
        <div className={styles['homePage_content']}>
          {/* <Modal visable={show} cancel={cancel} html={'hehe'} /> */}
        </div>
      </div>
    </>
  );
};

export default HomePages;
