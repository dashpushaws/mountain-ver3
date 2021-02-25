import React from 'react';


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux/reducer'
import rootSaga from './redux/saga'

import Main from './components/MainContainer'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga) 

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
