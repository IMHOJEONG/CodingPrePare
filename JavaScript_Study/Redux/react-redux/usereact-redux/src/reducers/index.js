import { INCREMENT, DECREMENT, SET_DIFF } from "../actions";
import { combineReducers } from "redux";
// combineReducers -> 여러 개의 reducers를 한개로 합칠 때 사용되는 redux 내장 메소드

const counterInitialState = {
  value: 0,
  diff: 1
};

const counter = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff
      });
    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.diff
      });
    default:
      return state;
  }
};

const extra =
  (state = { value: "this_is_extra_reducer" },
  action )=> {
    switch (action.type) {
      default:
        return state;
    }
  }

// 사용 예시
const counterApp = combineReducers({
  counter,
  extra
});
// 이것과 동일
// const counterApp = (state = {}, action) => {
// return {
//          counter: counter(state.counter, action),
//          extra: extra(state.extra, action)
//        }
// }

// 위의 reducer 사용해서 store를 만들면, store의 state 구조
// {
//     counter: { value: 0, diff: 1 }
//     extra: { value: 'this_is_extra_reducer' }
// }

// reducer를 여러 개로 분리해서 작성할 땐
// 서로 직접적인 관계가 없어야 함
// ex) INCREMENT와 DECREMENT 부분에서 diff 값을 사용해야 함
// setDiff를 다른 reducer에 작성하지 않음

// combineReducers를 사용 시, 각 reducer에 다른 key를 주고 싶다면?
// const counterApp = combineReducers({
//     a: counter,
//     b: extra
// });

export default counterApp;
