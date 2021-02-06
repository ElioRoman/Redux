import React, { Component } from 'react';
import Header from './Header';
import { userData, Context } from './context';

class App extends Component {
  state = {
    userData: { name: userData.name, avatar_url: userData.avatar_url },
  };

  render() {
    return (
      <div className="page">
        <Context.Provider value={this.state.userData}>
          <Header />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
