import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Map, List } from 'immutable';

// 1. 객체 -> Map
const obj = Map({
    foo:1,
    inner: Map({
        bar: 10   
    })
});

console.log(obj.toJS());

// 2. 배열은 List 
const arr = List([
    Map({ foo: 1 }),
    Map({ bar: 2 }),
]) ;


// 3. 설정할 땐 set
let nextObj = obj.set('foo', 5);
console.log(nextObj.toJS());
console.log(nextObj !== obj);

//4. 값 읽을 땐 get
console.log(obj.get('foo'));
console.log(arr.get(0)); // List에는 index를 설정해 읽음

// 5. 읽은 다음에 설정할 때는 update
// 두 번째 파라미터로는 updater 함수가 들어감
nextObj = nextObj.update('foo', value => value + 1);
console.log(nextObj.toJS());

// 6. 내부에 있는 걸 ~ 할 땐 In을 붙인다.
nextObj = obj.setIn(['inner', 'bar'], 20);
console.log(nextObj.getIn(['inner', 'bar']));

let nextArr = arr.setIn([0, 'foo'], 10);
console.log(nextArr.getIn([0, 'foo']));

// List 내장함수는 배열이랑 비슷함
nextArr = arr.push(Map({ qaz: 3}));
console.log(nextArr.toJS());
nextArr = arr.filter(item => item.get('foo') === 1);
console.log(nextArr.toJS());

// delete로 key를 지울 수 있음
nextObj = nextObj.delete('foo');
console.log(nextObj.toJS());

nextArr = nextArr.delete(0);
console.log(nextArr.toJS());

render(<App />, document.getElementById('root'));