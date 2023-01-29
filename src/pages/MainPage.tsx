import MainLayout from '../components/layout/mainLayout';
import React, { FC } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeStrategy } from '../store/strategies/strategiesSlice';
import { Istrategy } from 'store/strategies/types';
import StrategiesList from '../components/list/StrategiesList';
import StrategyListItem from '../components/list/item/StrategyListItem';
import Header from '../components/layout/header/Header';
import SubNav from '../components/layout/header/subNav/SubNav';
import { Link } from 'react-router-dom';
import { fetchStrategies } from '../api/api';
import { useEffect } from 'react';
import { useGetStrategies } from 'hooks/useGetStrategies';
const MainPage: FC = props => {
  const strategies = useGetStrategies();
  const dispatch = useDispatch();
  const handleRemoveStrategy = (id: any) => {
    dispatch(removeStrategy(id));
  };
  return (
    <>
      <Header
        subNav={
          <SubNav>
            <Link to="create" relative="path">
              create a new strategy
            </Link>
          </SubNav>
        }
      />
      <MainLayout>
        <StrategiesList>
          {strategies.map((strategy: any, idx: number) => (
            <StrategyListItem
              key={strategy.id}
              id={strategy.id}
              removeStrategy={handleRemoveStrategy}
              isOdd={idx % 2 === 0}
              capital={strategy.capital}
              name={strategy.name}
            />
          ))}
        </StrategiesList>
      </MainLayout>
    </>
  );
};

export default MainPage;
