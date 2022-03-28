import {
  ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED,
  ITEM_REMOVED
} from './actions';

import produce from 'immer';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 24, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const newItem = { uuid: id++, ...action.payload, quantity: 1 };
    state.push(newItem);
  }
  if (action.type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === ITEM_PRICE_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = parseInt(action.payload.price, 10) || 0;
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = parseInt(action.payload.quantity, 10) || 0;
  }
}, initialItems);

// export const reducer = (state = initialItems, action) => {
//   if (action.type === ITEM_ADDED) {
//     const newItem = { uuid: id++, ...action.payload, quantity: 1 };
//     return [...state, newItem];
//   }
//   if (action.type === ITEM_REMOVED) {
//     debugger;
//     console.log(`Item to removed, ${action.payload.uuid}`);
//     return state.filter((item) => item.uuid !== action.payload.uuid);
//   }

//   if (action.type === ITEM_PRICE_UPDATED) {
//     return state.map((item) => {
//       if (item.uuid === action.payload.uuid) {
//         return { ...item, price: parseInt(action.payload.price, 10) || 0 };
//       }
//       return item;
//     });
//   }

//   if (action.type === ITEM_QUANTITY_UPDATED) {
//     return state.map((item) => {
//       if (item.uuid === action.payload.uuid) {
//         return {
//           ...item,
//           quantity: parseInt(action.payload.quantity, 10) || 0
//         };
//       }
//       return item;
//     });
//   }
//   return state;
// };

export default reducer;
