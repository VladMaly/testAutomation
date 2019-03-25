import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import localForage from "localforage"; // localForage > localStorage
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

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

const configureStore = () => {
  const reducer = combineReducers({
    ...reducers
  })

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(thunk)
    )
  )

  let persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;