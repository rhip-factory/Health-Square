import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers';
import rootSaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware, /*logger*/]; // TODO: Uncomment

// Create Store
export default onCompletion => {
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducers, {}, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};
