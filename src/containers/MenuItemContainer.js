import { connect } from 'react-redux';
import { MenuItem } from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { selectItemTotal } from '../store/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    total: selectItemTotal(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};

// const mapDispatchToProps = {
//   remove: (uuid) => removeItem(uuid),
//   updateQuantity: (uuid, quantity) => updateQuantity(uuid, quantity)
// };

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
