import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './Main';

/**
 * Component is exported for conditional usage in Root.js
 */
class Root extends Component {
  render() {
    const { store, persistor } = this.props;
    return (
      /**
       * Provider is a component provided to us by the 'react-redux' bindings that
       * wraps our app - thus making the Redux store/state available to our 'connect()'
       * calls in component hierarchy below.
       */
      <Provider store={store}>
        <Main persistor={persistor} />
      </Provider>
    );
  }
};

export default Root;