import React from "react";
import { connect } from "react-redux";
// connect를 react-redux에 불러옴

class Counter extends React.Component {
  render() {
    return <h1>VALUE: {this.props.value}</h1>;
  }
}

// mapStateToProps는 arrow function을 사용해 작성
let mapStateToProps = state => {
  return {
    value: state.counter.value
  };
};

// mapStateToProps를 사용해 컴포넌트를 store에 연결 시킴
Counter = connect(mapStateToProps)(Counter);

export default Counter;

// connect API
// - connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// - react-redux의 내장 API, React Component를 Redux Store에 연결해줌
// 이 함수의 리턴값 : 특정 컴포넌트 클래스의 props를 store의 데이터에 연결시켜주는 또 다른 함수를 리턴
// 리턴된 함수에 컴포넌트를 인수로 넣어 실행하면, 기존 컴포넌트를 수정하는 게 아닌 새로운 컴포넌트를 return
// 인수
// mapStateToProps(state, [ownProps])
// (Function)store의 state를 컴포넌트의 props에 매핑시켜줌
// ownProps 인수가 명시될 경우, 이를 통해 함수 내부에서 컴포넌트의 props 값에 접근 가능
// mapDispatchToProps(dispatch, [ownProps])
// (Function or Object) 컴포넌트의 특정 함수형 props를 실행 했을 때, 개발자가 지정한 action을 dispatch하도록 설정함
// ownProps의 용도는 위 인수와 동일

