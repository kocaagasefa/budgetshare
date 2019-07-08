import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
}


const configureStore = () => {
  const middleware = [thunk];
  return createStore(rootReducer ,composeEnhancers (applyMiddleware(...middleware)));
};

export default configureStore;