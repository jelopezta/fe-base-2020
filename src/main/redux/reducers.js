import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from '../components/App/appReducer';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    app: appReducer
  });
}