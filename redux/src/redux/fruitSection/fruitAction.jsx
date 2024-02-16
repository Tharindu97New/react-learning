export const BUY_FRUIT = "BUY_FRUIT";
export const ADD_FRUIT = "ADD_FRUIT";

export function buyFruit() {
  return {
    type: BUY_FRUIT,
    payload: "Extra data"
  };
}

export function addFruit() {
  return {
    type: ADD_FRUIT,
    payload: "Extra data"
  };
}
