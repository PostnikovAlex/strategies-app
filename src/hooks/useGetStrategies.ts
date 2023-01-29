import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Istrategy } from 'store/strategies/types';
import { fetchStrategies } from '../api/api';
type Istate = {
  strategies: {
    strategies: Array<Istrategy>;
  };
};

export const useGetStrategies = () => {
  const [strategies, setStrategies] = useState<Array<Istrategy>>([]);
  const reduxStrategies = useSelector((state: Istate) => state.strategies.strategies);
  useEffect(() => {
    const getStrategies = async () => {
      const fetchedStrategies = await fetchStrategies();
      if (fetchedStrategies.length) {
        setStrategies(fetchedStrategies);
      } else {
        setStrategies(reduxStrategies);
      }
    };
    getStrategies();
  });
  return strategies;
};
