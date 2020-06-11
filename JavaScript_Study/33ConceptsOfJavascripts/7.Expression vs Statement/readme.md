- Expression

  - value가 되는 것을 리턴
  - 5 + 1

  ```javascript
  function add(a, b) {
    return a + b;
  }
  const how = add(5, 6);
  //  add(5, 6)는 expression
  // value를 리턴하니까
  ```

  - return이 없어도 undefined를 얻게 됨
  - expression은 value를 리턴한다.
  - 함수가 리턴하는 것은 무엇인가에 집중하면 복잡한 함수도 쉽게 볼 수 있음

  - 자바스크립트는 expression을 value로 대체하고 계속 프로그램을 진행함

- Statement

  - 명령 or 지시

  ```javascript
  if (true) {
  }
  // 아무것도 리턴하지 않음
  ```

  - statement는 variable로 저장할 수 없음

- variable로 저장할 수 있는 것은 expression

  - statement는 그렇게 못함
  - = 기호는 statement를 다룰 수 없음

  ```javascript
  const test = if(true){...}
  // 이런 것은 불가
  ```

- Expression은 value를 리턴
- Statement는 명령 => if, else, if .. 등

- function expression

```javascript
const awesome = add(1, 5);
// 함수가 존재하지 않던 시점인데?

// declaration
function add(a, b) {
  return a + b;
}

console.log(awesome);
```

- function declaration과 function expression의 차이
  - 자바스크립트가 코드를 보면, 모든 declaration을 상단으로 가져옴
    - hoisting이라는 프로세스

```javascript
const awesome = add(1, 5);
// Not defined

// 여기까지는 add는 존재하지 않음
const add = (a, b) => a + b;
// 이건 이제 expression

console.log(awesome);
```

[참고자료](https://www.youtube.com/watch?v=tclQMRg5v7Y)
