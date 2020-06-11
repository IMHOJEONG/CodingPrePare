```javascript
let a = 50;
let b = a;

a = 10;

console.log(b);
```

- value : 복사 - 붙여넣기

```javascript
const sexy = ["kimchi", "potato"];
const pretty = sexy;

sexy.push("hELLO");

console.log(pretty);
```

- reference : 직접 변경하지 않아도 업데이트가 되었음

- sexy의 value가 배열이 아닌, sexy는 해당 배열을 참조하고 있는 것!

- 배열은 둥둥 떠있고, sexy는 해당 배열을 가리키고 있는 것

- a=50하고는 다름 => 해당 값이라고 말하는 것
- 이 경우 sexy는 해당 배열을 참조
  - 해당 배열은 어느 메모리 어딘가에 있겠지
  - sexy, pretty가 동일한 배열을 참조하고 있다는 의미
  - 배열을 업데이트하면 마찬가지로 업데이트가 됨 => 동일한 배열을 참조하고 있으니까

```javascript
console.log([10] === [10]);
// 각각 메모리에 위치한 각기 다른 오브젝트!

const x = {
  a: "hello"
};

const b = x;

b.a = "alalal";

console.log(x);

// x를 B를 통해 업데이트 할 수 있음

console.log();
```

- value는 string, number, boolean, NaN, undefined, null

- reference는 array, object, function에서 사용될 수 있음

[참고 자료](https://www.youtube.com/watch?v=hYHv5m1NMFE&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=8)
