import { BUY_FRUIT } from './fruitActionType';

const initateState = {
  noOfFruit: 10,
}

export default function fruitReducer(state = initateState, action) {
  switch(action.type) {
    case BUY_FRUIT:
      return {
        ...state,
        noOfFruit: state.noOfFruit - action.payload,
      };

    default:
      return state;
  }
}