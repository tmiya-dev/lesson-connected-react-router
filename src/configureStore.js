import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedStore) {
  const store = createStore(
    createRootReducer(history),
    preloadedStore,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        // ... other middlewares ...
      ),
    ),
  );
  return store;
}
