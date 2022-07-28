import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './style.less';

interface ModalProps {
  html?: string;
  button?: React.ReactNode;
  callback?: () => void;
  visable: boolean;
  cancel: () => void;
}

const Modal: React.FC<ModalProps> = ({
  html,
  button,
  callback,
  visable,
  cancel,
}) => {
  const refContainer = useRef<HTMLDivElement>();

  useEffect(() => {
    // 卸载组件
    if (refContainer.current) {
      ReactDOM.unmountComponentAtNode(refContainer.current);
    }
  }, []);

  useEffect(() => {
    if (visable) {
      const modal = document.createElement('div');
      refContainer.current = modal;
      modal.setAttribute('class', styles.modal);
      document.body.appendChild(modal);
      ReactDOM.render(
        <div className={styles.modal_box}>
          <div className={styles.cancel} onClick={() => cancel()}>
            X
          </div>
          <div className={styles.content}>
            {html ? (
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
            ) : null}
          </div>
          <div>{button}</div>
        </div>,
        modal,
      );
    } else {
      if (refContainer.current) {
        ReactDOM.unmountComponentAtNode(refContainer.current);
        document.body.removeChild(refContainer.current);
      }
    }
  }, [visable]);

  return null;
};

export default Modal;
