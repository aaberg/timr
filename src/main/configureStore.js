import {createStore} from 'redux';
import combinedReducers from './reducers';

const configureStore = () => {
  const store = createStore(combinedReducers);

  return store;
};

export default configureStore;