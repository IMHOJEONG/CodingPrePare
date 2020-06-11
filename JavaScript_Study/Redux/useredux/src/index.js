import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// action 작성
const INCREMENT = "INCREMENT";

// 어떤 변화가 일어나야 할 지 알려주는 객체인 action을 작성
// action을 작성할 땐, 첫 번째 필드는 type으로 필수적인 필드 => action의 형태를 정의해줌
// 다음부턴 개발자가 마은대로 추가 가능(필요 없으면 생략 가능)
function increase(diff) {
  return {
    type: INCREMENT,
    addBy: diff
  };
}

// reducer 작성
// reducer를 만들 때는, 우선 데이터의 초기 상태를 정의하고
// arrow function을 통해 reducer를 만듬

const initialState = {
  value: 0
};

// 주의!
// state를 변경시키지 않음
// Object.assign() 메서드를 통해 state를 복사 한후, 복사된 객체를 수정하여 반환
// 첫 번째 argument는 꼭 비어있는 객체이어야 함
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + action.addBy
      });
    default:
      // ES6의 default parameter
      // 해당 parameter가 undefined일 때는 값을 initialState로 설정하는 것
      return state;
  }
};

// store 생성
const store = createStore(counterReducer);

// 컴포넌트는 렌더링 될 때, store를 props로 전달받음

// store.getState() : 현재 스토어에 있는 데이터를 반환
// store.dispatch(ACTION) : 상태값을 수정할 때 사용되는 메서드
// 인수로는 action이 전달됨 => 사전에 만들어둔 increase 함수가 action 객체를 반환
class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    let centerStyle = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
      cursor: "pointer"
    };

    return (
      <div onClick={this.onClick} style={centerStyle}>
        <h1>{this.props.store.getState().value}</h1>
      </div>
    );
  }
  onClick() {
    this.props.store.dispatch(increase(1));
  }
}

// store를 App컴포넌트의 props로 전달
// store.subscribe(LISTENER) : dispatch 메소드가 실행되면
// 리스너 함수가 실행됨 => 데이터에 변동이 있을 때마다 리렌더링하도록 설정
const render = () => {
  const appElement = document.getElementById("root");
  ReactDOM.render(<App store={store} />, appElement);
};

store.subscribe(render);
render();

// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
