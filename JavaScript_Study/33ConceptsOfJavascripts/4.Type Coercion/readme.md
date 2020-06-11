```javascript
console.log(4 + "hello");
console.log(4 + 4 + "hello");
console.log("" == true);
console.log(1 == true);
console.log(66 + true);
```

- type coercion : conversion
  - 자바스크립트가 값을 강제적으로 변환시킨다
- 66 + true => 67???
  - true를 1로 변환시켜서 67이 됨
  - true는 1, false는 0이 됨 (이 경우에)

```javascript
console.log(55 - true);
```

- 항상 더하기가 모든 것을 숫자로 바꾸지 않음

  - 66 + string이 있으면 string으로 인식
  - loaded operator
  - 10+66+ "false" = 76false
    - 오직 더하기에서만 이렇게 덩어리가 됨
    - 자바스크립트는 왼쪽에서 오른쪽으로 읽기 때문에

- console.log(25 - "1")은 숫자로 변환

- "" == true? : NO => 텅빈 string은 거짓
- 0 == true? No => 거짓,
- NaN, undefined, null도 모두 거짓

- 텅빈 string : 제로 바이트 => 0으로 변환시킴 => 0은 거짓

- === vs ==

  - ===을 쓰면 type coercion이 일어나지 않음
  - ==은 type coercion이 일어남

- "true" == true는 거짓

  - ==이 boolean을 만나면 숫자로 변환함
  - true가 1이 됨 => "true" == 1
  - 앞에 string을 숫자로 변환하려 함
  - "true"는 숫자가 되지 않음 => NaN
  - NaN == 1을 시도한 것

- ==이 boolean을 만나면 모든 게 숫자로 변환됨

- "1" == 1은 왜 참인가?

- ===을 자주 사용하자 => 많은 버그를 피해갈 수 있음

[참고자료](https://www.youtube.com/watch?v=dIIQmSsg0SI)

===

5. typeof

   - 자바스크립트는 항상 type을 체크해야 함
   - boolean, string, number 등
   - typeof ~~~~
     - 내가 사용하는 타입을 알려줌
   - 거의 모든 primitive에서 다 작동함
   - 괄호 있어도 없어도 모두 작동함

   - typeof null은 예외!
     - object??? -비슷한 버그가 존재
   - typeof {}, []
   - Array, object인지 체크하고 싶은데??
     - instanceof를 사용하면 됨
     - typeof와의 유일한 차이
       - primitive(string, boolean, number 등)에서 작동하지 않음
     - console.log([] instanceof Array)

- number, boolean, undefined, function은 typeof
- array, object는 instanceof
