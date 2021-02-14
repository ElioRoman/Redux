import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserInfo from './user/Userinfo';
import SearchField from './user/SearchField';

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <UserInfo />
        <SearchField />
      </div>
    </Provider>
  );
};

export default App;
