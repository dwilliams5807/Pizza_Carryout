<<<<<<< HEAD
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import cartReducer from '../cartReducer'; // the value from combineReducers

const persistConfig = {
 key: 'root',
 storage: storage,
//  whitelist: ['addedItems'],
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, cartReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
=======
// import { createStore } from 'redux'
// import { persistStore, persistReducer, persistConfig } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
// import cartReducer from './cartReducer'
 
// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// const persistedReducer = persistReducer(persistConfig, cartReducer)
 
// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }; 
>>>>>>> r1remote/master
