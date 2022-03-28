import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import NewItemForm from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       onSubmit: (name, price) => addNewItem(name, price)
//     },
//     dispatch
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (name, price) => dispatch(addNewItem(name, price))
//   };
// };

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
