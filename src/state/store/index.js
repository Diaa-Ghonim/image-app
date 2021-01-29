import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import { rootSagas } from '../rootSaga';

const configureStore = function () {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhanser = composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, undefined, composeEnhanser);
  sagaMiddleware.run(rootSagas);

  const unsubscribe = store.subscribe(() => {
    console.log(
      'this subscribe call back will print state before excute dispatch',
      store.getState()
    );
  });

  return store;
};
export { configureStore };
