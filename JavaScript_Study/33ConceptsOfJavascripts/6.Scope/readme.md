- Scope
  - variable이 존재하는가 아닌가?

```javascript
if (true) {
  const hello = "hi!";
  console.log(hello);
}
console.log(hello);
```

- Global Scope

  - 어디에 있든 접근 가능

  ```javascript
  const h = "hello";

  function a() {
    console.log(h);
    const b = "b";
  }

  a();
  console.log(b);
  ```

  - variable은 큰 곳에서 작은 곳으로 접근이 가능함
  - 함수는 버블 같은 것
  - 부모 버블에 접근할 수 있음
  - 부모 버블은 자식 버블에 접근할 수 없음

    - a에서 global scope로 접근할 수 있지만,
    - global scope에서 함수 a로 접근할 수는 없어

- let, const는 block scope

  - {} 블록 안에 있을 것
  - 변수들이 버블을 갖고 있고, 그 안에서 정의를 하고, 외부에서는 정의가 되지 않고 안에서는 정의가 됨

- variable이 존재하는가, 접근할 수 있는가
  - 큰 곳에서 작은 곳으로는 접근이 불가능하고, 작은 곳에서 큰 곳으로는 접근이 가능함

```javascript
function a() {
  const b = "b";
  function c() {
    const d = "d";
    function e() {
      const nn = "nn";
    }
  }
}
// 함수 e는 d,b에 접근할 수 있음
// b는 d, nn에 접근이 불가능
// d는 b에 접근 가능, d는 nn에 접근 불가능 함
```

- 버블 안에 들어가고 나가기 위해, let을 사용하는 것

```javascript
if (true) {
  const hello = "hello";
}

console.log(hello);
// 위 코드는 오류

let hello;
if (true) {
  hello = "hello";
}

console.log(hello);
```
