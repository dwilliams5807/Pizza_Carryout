import React from 'react';
<<<<<<< HEAD

import Header from './components/Header/Header.js';
import Main from './components/pages/Main/Main.js';
import Navbar from './components/Nav/Navbar.js';
import Bumper from './components/global/Bumper';

=======
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import Header from './components/Header/Header.js';
import Navbar from './components/Nav/Navbar.js';
>>>>>>> r1remote/master
import { Provider } from 'react-redux';
import { PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './components/reducers/store/store.js'


function App() {
    return (
      // <Provider store={store}>
      // <PersistGate loading={null} persistor={persistor}>
<<<<<<< HEAD
         <div>
          <Header />
          <Main />
          <Bumper/>
         </div>
    //  </PersistGate>
=======
      <div>
        <Header />
        <Navbar />
      </div>
    //   </PersistGate>
>>>>>>> r1remote/master
    // </Provider>
    );
  }

export default App;