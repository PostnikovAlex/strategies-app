import React, { FC } from 'react';
import style from './styles.module.scss';
import { Delete } from 'react-feather';
type Props = {};

const StrategyListItem: FC<any> = ({ name, capital, isOdd, removeStrategy, id }) => {
  return (
    <li className={`${style.listItem} ${isOdd ? style.listItem__isOdd : ''}`}>
      <div>
        {name} {capital}
      </div>
      <Delete
        onClick={() => {
          removeStrategy(id);
        }}
      />
    </li>
  );
};

export default StrategyListItem;
