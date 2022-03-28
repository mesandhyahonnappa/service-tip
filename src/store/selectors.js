import { createSelector } from 'reselect';
// reselect helps in memoization

export const selectItem = (state, props) => {
  return state.items.find((item) => item.uuid === props.uuid);
};

export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.quantity * item.price
);

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubTotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.quantity * item.price, 0)
);

export const selectTipAmount = createSelector(
  [selectSubTotal, selectTipPercentage],
  (subTotal, tipPercentage) => subTotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
  [selectSubTotal, selectTipAmount],
  (subTotal, tipAmount) => subTotal + tipAmount
);
