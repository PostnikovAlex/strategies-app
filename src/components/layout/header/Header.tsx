import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { AlignLeft } from 'react-feather';
type Props = PropsWithChildren<{
  subNav?: React.ReactElement;
}>;

const Header = (props: Props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <div className={styles.burger}>
            <AlignLeft color="var(--blue)" size={25} />
          </div>
        </div>
        <div className={styles.header__logo}>
          <img
            src="https://wp-shuts-wordpress.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/04/12023938/shuts_logo-green.svg"
            alt="logo"
          />
        </div>
        <div className={styles.right}></div>
      </header>
      <div className={styles.subHeader}>{props.subNav}</div>
    </>
  );
};

export default Header;
