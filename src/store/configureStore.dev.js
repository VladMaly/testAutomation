import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
// import createLogger from 'redux-logger';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import DevTools from '../_enter/DevTools';

import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import localForage from "localforage"; // localForage > localStorage
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// const localForageConfigured = localforage.config({
//   name        : 'React Redux Website',
//   version     : 1.0,
//   size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
//   description : 'Redux Storage For Info'
// });

localForage.config({
  name: 'reactStarterKit',
  storeName: autoMergeLevel2.name
});

const persistConfig = {
  // key: 'root',
  key: autoMergeLevel2,
  storage: localForage,
  // whitelist: []
}
/**
 * Entirely optional, this tiny library adds some functionality to
 * your DevTools, by logging actions/state to your console. Used in
 * conjunction with your standard DevTools monitor gives you great
 * flexibility!
 */
// const logger = createLogger();

const configureStore = () => {

  const reducer = combineReducers({
    ...reducers
  })

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(thunk),
      DevTools.instrument(),
    )
  )

  let persistor = persistStore(store);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return { store, persistor };
};

export default configureStore;
