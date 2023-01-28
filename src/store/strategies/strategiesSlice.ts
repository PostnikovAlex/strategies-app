import { createSlice } from '@reduxjs/toolkit';
import { generateid } from 'utils/generators';
import { Istrategy } from './types';

const initialState: Array<Istrategy> = [
  {
    id: generateid(),
    name: 'strategy1',
    capital: 1000,
    range: {
      start: '',
      end: ''
    }
  },
  {
    id: generateid(),
    name: 'strategy2',
    capital: 2000,
    range: {
      start: '',
      end: ''
    }
  },
  {
    id: generateid(),
    name: 'strategy3',
    capital: 2500,
    range: {
      start: '',
      end: ''
    }
  },
  {
    id: generateid(),
    name: 'strategy4',
    capital: 5500,
    range: {
      start: '',
      end: ''
    }
  }
];

export const counterSlice = createSlice({
  name: 'strategies',
  initialState: {
    strategies: initialState
  },
  reducers: {
    addStrategy: (state, action) => {
      console.log(action.payload);
      state.strategies.push({
        id: generateid(),
        name: action.payload.name,
        capital: action.payload.capital,
        range: {
          start: action.payload.start,
          end: action.payload.end
        }
      });
    },
    removeStrategy: (state, action) => {
      const itemId = action.payload;
      state.strategies = state.strategies.filter(strategy => strategy.id !== itemId);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addStrategy, removeStrategy } = counterSlice.actions;

export default counterSlice.reducer;
