import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import rootReducers from './reducers';

export default (initialState) => {
  const promise = createPromise({
    types: { fulfilled: 'SUCCESS', reject: 'FAIL', pending: 'LOADING' },
  });
  const middlewares = [thunk, promise];

  let checkEnableReduxTools = (f) => f;

  // eslint-disable-next-line no-underscore-dangle
  if (process.env.BROWSER && window.__REDUX_DEVTOOLS_EXTENSION__) {
    // eslint-disable-next-line no-underscore-dangle
    checkEnableReduxTools = window.__REDUX_DEVTOOLS_EXTENSION__();
  }

  const store = createStore(
    combineReducers(rootReducers),
    initialState,
    compose(
      applyMiddleware(...middlewares),
      checkEnableReduxTools,
    ),
  );

  // hot reloading for reducers
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require, import/newline-after-import
      const nextReducer = combineReducers(require('./reducers').default);
      store.replaceReducer(nextReducer);
    });
  }

  store.registerReducer = (reducer) => {
    const newReducers = combineReducers({ ...rootReducers, ...reducer });
    store.replaceReducer(newReducers);
  };

  return store;
};
