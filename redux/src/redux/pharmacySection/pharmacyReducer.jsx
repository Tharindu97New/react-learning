import { BUY_PHARMACY_ITEM } from './pharmacyAction';

const initialState = {
  noOfPharmacyItem: 10
}

function pharmacyReducer(state = initialState, action) {
  switch(action.type) {
    case BUY_PHARMACY_ITEM:
      return {
        ...state,
        noOfPharmacyItem: state.noOfPharmacyItem - 1
      }
  

    default:
      return state;
  }
}

export default pharmacyReducer;