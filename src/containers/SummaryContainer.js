import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import { selectTipAmount, selectTotal } from '../store/selectors';

const mapStateToProps = (state) => {
  const subtotal = selectTotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);
  //   let subtotal = state.items.reduce((sum, cur) => {
  //     console.log({ sum, cur });
  //     sum = sum + cur.quantity * cur.price;
  //     return sum;
  //   }, 0);

  //   console.log(subtotal);

  //   const tipAmount = subtotal * (state.tipPercentage / 100);

  return { subtotal, tipAmount, total };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
