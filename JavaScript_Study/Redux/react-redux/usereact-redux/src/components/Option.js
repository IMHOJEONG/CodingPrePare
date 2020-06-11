import React from "react";
import { connect } from "react-redux";
import { setDiff } from "../actions";
// setDiff를 불러옴

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diff: "1"
    };

    this.onChangeDiff = this.onChangeDiff.bind(this);
  }

  render() {
    //   컴포넌트 내부의 input 값의 경우 자체 state를 사용하도록 하자
    return (
      <div>
        <input
          type="text"
          value={this.state.diff}
          onChange={this.onChangeDiff}
        ></input>
      </div>
    );
  }

  // input값을 수정할 때 실행 됨
  // 숫자만 적을 수 있도록 코드를 작성
  // 값이 수정될 때마다 mapDispatchToProps에서 매핑된 onUpdateDiff를 통해 새로운 값을 Dispatch
  onChangeDiff(e) {
    if (isNaN(e.target.value)) return;

    this.setState({ diff: e.target.value });

    if (e.target.value === "") {
      this.setState({ diff: "0" });
    }
    this.props.onUpdateDiff(parseInt(e.target.value));
  }
}

let mapDispatchToProps = dispatch => {
  return {
    onUpdateDiff: value => dispatch(setDiff(value))
  };
};

Option = connect(
  undefined,
  mapDispatchToProps
)(Option);

export default Option;
