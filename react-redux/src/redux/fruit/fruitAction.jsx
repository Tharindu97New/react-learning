import { BUY_FRUIT } from './fruitActionType';

export function buyFruit(noOfFruit) {
  return {
    type: BUY_FRUIT,
    payload: noOfFruit,
  };
}