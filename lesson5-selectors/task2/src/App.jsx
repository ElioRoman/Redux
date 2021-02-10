import React from 'react';
import { Provider } from 'react-redux';
import TransferList from './options/TransferList';
import store from './store';

const App = () => {
  return (
    <ul className="users">
      <Provider store={store}>
        <TransferList />
      </Provider>
    </ul>
  );
};

export default App;
