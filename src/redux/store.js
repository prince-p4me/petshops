import { createStore, combineReducers } from 'redux';
import { getCatsList, getCat } from './reducer';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// creating reducers
const rootReducer = combineReducers({
  getCatsList, getCat
});

//creating, applying sagas


//creating store persist
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["getCatsList"],
  blacklist: [],
  throttle: 1000,
  debounce: 1000,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//creating store
let store = createStore(persistedReducer);

//creating persistor
let persistor = persistStore(store);

export { store, persistor };
