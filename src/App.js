import React, {  Component } from 'react';
import Header from './common/header';
import {GlobalStyle} from './style.js';
import {GlobalIconStyle} from './statics/iconfont/iconfont.js';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle/>
          <GlobalIconStyle/>
          <Header/>
        </div>
      </Provider>

    );
  }
}

export default App;