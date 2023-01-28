import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';
type Props = PropsWithChildren<{
  subNav?: React.ReactElement;
}>;

const SubNav = (props: Props) => {
  return <div className={styles.subNav}>{props.children}</div>;
};

export default SubNav;
