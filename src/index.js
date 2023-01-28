import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
// routing
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//store
import store from './store/store';
import { Provider } from 'react-redux';

// pages
import MainPage from './pages/MainPage';
import CreatePage from './pages/CreatePage/CreatePage';
import SelectStrategyPage from './pages/SelectStrategyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: 'create',
    element: <CreatePage />
  },
  {
    path: 'select',
    element: <SelectStrategyPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
