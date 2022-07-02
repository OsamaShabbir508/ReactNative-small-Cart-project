
import { combineReducers,createStore } from 'redux';
import {ADD_TO_CART, REMOVE_FROM_CART} from './action';

const INITIAL_STATE = {
  cartCount: 0,
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {cartCount: state.cartCount + 1};
    case REMOVE_FROM_CART:
      if (state.cartCount < 1) {
        return {...state};
      }
      return {cartCount: state.cartCount - 1};

    default:
        return state

  }
}
const CombineRedcuer=combineReducers({
    cart:reducer
});
const store=createStore(CombineRedcuer);
export default store;
