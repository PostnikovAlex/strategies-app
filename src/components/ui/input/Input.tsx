import React, { ChangeEvent, FC } from 'react';
import { JsxElement } from 'typescript';
import styles from './styles.module.scss';
type TProps = {
  label?: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  required?: boolean;
  icon?: React.ReactNode;
  setRef?: any;
  value: string;
};

const Input: FC<TProps> = ({ value, label, onChange, type = 'text', required, icon = null, setRef, name }) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <div className={`${styles.input__wrapper} ${icon ? styles.withIcon : ''}`}>
        <input value={value} ref={setRef} name={name} required={required} type={type} onChange={evt => onChange(evt)} />
        {icon}
      </div>
    </div>
  );
};

export default Input;
