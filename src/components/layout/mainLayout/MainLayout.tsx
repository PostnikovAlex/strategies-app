import { FC, PropsWithChildren } from 'react';

import styles from './mainLayout.module.scss';
type Props = PropsWithChildren<{}>;

const MainLayout: FC<Props> = props => {
  return (
    <div className={styles.layout}>
      <div className={styles.appContentWrapper}>{props.children}</div>
      <div className={styles.image}></div>
    </div>
  );
};

export default MainLayout;
