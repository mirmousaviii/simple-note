import {applyMiddleware, compose, createStore} from 'redux';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import rootReducer from './reducers';

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  return createStore(
      rootReducer(history),
      preloadedState,
      composeEnhancers(
          applyMiddleware(
              routerMiddleware(history),
              thunk,
          ),
      ),
  );
}