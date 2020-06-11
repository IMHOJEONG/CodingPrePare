// 각 DOM 엘리먼트에 대한 레퍼런스를 만들어줌
const elNumber = document.getElementById('number');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

// 액션 타임을 정의
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 객체를 만들어주는 액션 생성 함수
const increment = (diff) => ({type:INCREMENT, diff:diff});
const decrement = () => ({ type: DECREMENT});

// 초기값을 설정
const initialState = {
    number: 0
};

// 리듀서 함수, state, action을 파라미터로 받아옴
// 그에 따라 다음 상태를 정의한 다음에 반환해줌

const counter = ( state = initialState, action ) =>{
    console.log(action);
    switch(action.type){
        case INCREMENT: 
            return {
                number: state.number + action.diff
            };
        case DECREMENT:
            return {
                number: state.number - 1
            };
        default: 
            return state;
    }
}

// 스토어를 만들 땐 createStore에 리듀서 함수를 넣어서 호출함
const { createStore } = Redux;
const store = createStore(counter);

// 상태가 변경 될 때마다 호출시킬 listener 함수임
const render = () => {
    elNumber.innerText = store.getState().number;
    console.log("내가 실행됨");
}

// 스토어에 구독하고, 뭔가 변화가 있다면, render 함수를 실행함
store.subscribe(render);

// 초기 렌더링을 위하여 직접 실행시켜줌
render();

// 버튼에 이벤트를 달아줌
// 스토어에 변화를 일으키라고 할 때에는 dispatch 함수에 액션 객체를 넣어서 호출
btnIncrement.addEventListener('click', () =>{
    store.dispatch(increment(25));
});

btnDecrement.addEventListener('click', () =>{
    store.dispatch(decrement());
});
