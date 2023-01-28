import React, { FC, ReactNode } from 'react';
import styles from './buttonStyles.module.scss';
type PropsWithChildren = {
  type: 'button' | 'submit' | 'reset' | undefined;
  theme: string;
  children: ReactNode;
};

const Button: FC<PropsWithChildren> = ({ type, theme = 'lazure', children }) => {
  return (
    <button type={type} className={`${styles.button} ${theme ? styles[theme] : ''}`}>
      {children}
    </button>
  );
};

export default Button;
