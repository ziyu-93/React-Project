import React, { Component } from "react";
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
//React component
class Counter extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
  }
  // static defaultProps = {
  //   value: 0,
  //   onIncreaseClick: ''
  // }
  render() {
    const {value, onIncreaseClick} = this.props;
    return (
      <div>
    <span>{value}</span>
    <button onClick={onIncreaseClick}>Increase</button>
  </div>
    )
  }
}
// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increasseAction)
  }
}
//Action
const increasseAction = {
  type: 'increase'
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

//Reducer
function counter(state = {
    count: 0
  }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return {
        count: count + 1
      }
    default:
      return state
  }
}
//Store
const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
