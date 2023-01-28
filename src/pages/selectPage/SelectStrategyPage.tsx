import Header from '../../components/layout/header/Header';
import React, { FC } from 'react';
import SubNav from '../../components/layout/header/subNav/SubNav';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layout/mainLayout';
import { useSelector } from 'react-redux';
import StrategiesList from '../../components/list/StrategiesList';
import StrategyListItem from '../../components/list/item/StrategyListItem';
import { Istrategy } from 'store/strategies/types';
import styles from './styles.module.scss';

type Istate = {
  strategies: {
    strategies: Array<Istrategy>;
  };
};
const SelectStrategyPage: FC = props => {
  const strategies = useSelector((state: Istate) => state.strategies.strategies);
  const navigate = useNavigate();
  const handleStrategySelect = (strategy: any) => {
    const toLocalStorage = JSON.stringify({
      name: strategy.name,
      capital: strategy.capital
    });
    localStorage.setItem('fillInForm', toLocalStorage);
    navigate(-1);
  };
  return (
    <>
      <Header
        subNav={
          <SubNav>
            <Link to=".." relative="path">
              Back
            </Link>
          </SubNav>
        }
      />
      <MainLayout>
        <StrategiesList>
          {strategies.map((strategy: any, idx: number) => (
            <div key={strategy.id} onClick={() => handleStrategySelect(strategy)}>
              <StrategyListItem noDelete={true} id={strategy.id} isOdd={idx % 2 === 0} capital={strategy.capital} name={strategy.name} />
            </div>
          ))}
        </StrategiesList>
      </MainLayout>
    </>
  );
};

export default SelectStrategyPage;
