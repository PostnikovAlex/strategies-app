import SubNav from '../../components/layout/header/subNav/SubNav';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/header/Header';
import MainLayout from '../../components/layout/mainLayout';
import styles from './styles.module.scss';
import { ArrowLeft, DollarSign } from 'react-feather';
type Props = {};

const CreatePage: FC<Props> = props => {
  const [fields, setFields] = useState({});
  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt);
    const newFields = {
      ...fields,
      [evt.target.name]: { desc: evt.target.value }
    };
    setFields(newFields);
  };
  return (
    <>
      <Header
        subNav={
          <SubNav>
            <Link className={styles.link} to=".." relative="path">
              <ArrowLeft width="20" height="20" />
              back
            </Link>
          </SubNav>
        }
      ></Header>
      <MainLayout>
        <div className={styles.content}>
          <h1 className={styles.heading}>Create strategy</h1>
          <p className={styles.text}>Fact: Interes rate on bank cash deposits will never beat inflation</p>
          <form>
            <div className={styles.input}>
              <label>Strategy name</label>
              <input type="text" name="name" onChange={evt => handleInput(evt)} />
            </div>
            <div className={styles.input}>
              <label>Strategy Capital</label>
              <input type="number" name="capital" onChange={evt => handleInput(evt)} />
              <DollarSign width="15" height="15" color="var(--blue)" />
            </div>
            <button type="submit">Create strategy</button>
          </form>
        </div>
      </MainLayout>
    </>
  );
};

export default CreatePage;
