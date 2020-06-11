import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";
// increment, decrement action을 불러옴

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.props.onDecrement}>
          -
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

// mapStateToProps가 필요없음 => undefined를 전달하여 생략해줌
Buttons = connect(
  undefined,
  mapDispatchToProps
)(Buttons);

export default Buttons;
