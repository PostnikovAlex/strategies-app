import React, { FC } from 'react';
import style from './styles.module.scss';
import { Delete } from 'react-feather';
type Props = {
  name: string;
  capital: number;
  isOdd: boolean;
  removeStrategy?: any;
  id: string;
  noDelete?: boolean;
};

const StrategyListItem: FC<Props> = ({ name, capital, isOdd, removeStrategy, id, noDelete = false }) => {
  return (
    <li className={`${style.listItem} ${isOdd ? style.listItem__isOdd : ''}`}>
      <div>
        <span>{name} </span> capital: {capital}
      </div>
      {!noDelete && (
        <Delete
          onClick={() => {
            removeStrategy(id);
          }}
        />
      )}
    </li>
  );
};

export default StrategyListItem;
