import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';
type Props = PropsWithChildren<{}>;

const StrategiesList = (props: Props) => {
  return <ul className={styles.list}>{props.children}</ul>;
};

export default StrategiesList;
