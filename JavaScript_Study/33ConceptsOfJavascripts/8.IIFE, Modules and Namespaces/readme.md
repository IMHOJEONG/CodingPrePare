- 웹팩이나 gulp 같은 모듈 번들러 없이 Import, Export를 브라우저에서 사용 가능하다??

- IIFE(Immediately-Invoked Function Expressions)
  - 자기 자신을 일으키는 함수

```javascript
const secretUsers = ["Nicolars", "Lynn", "Stevey", "Autumn"];

console.log(secretUsers);
```

- 다른 페이지에서 이 코드에 접근할 수 있다?

  - 비밀이 되지 않아
  - 이 변수는 공개되어 있고 private이 아님
  - 이를 원하지 않는다면?

- 사람들에게 Javascript를 주고 싶지만, variable에 영향을 끼치는 것을 원하지 않는다??
  - IIFE에 넣으면 해결됨

```javascript
(function() {
  const secretUsers = ["Nicolars", "Lynn", "Stevey", "Autumn"];

  console.log(secretUsers);
})();
```

- 위의 방식대로 하면 다른 브라우저에서 이 변수에 접근할 수 없음
- IIFE 안에 모든 코드를 넣으면 바꿀 수 없음

```javascript
(() => {
  const secretUsers = ["Nicolars", "Lynn", "Stevey", "Autumn"];

  console.log(secretUsers);
})();
// 같은 방식
```

- 네임스페이스 얘기는 생략, 모듈 이야기는 할 거임

- 모듈을 합치는 것을 번들러 없이 어떻게 할 수 있을까?
  - vanllia javascript로

```javascript
// app.js
let users = ["Nico", "Lynn", "Dal"];

export const addUser = user => (users = [...users, user]);

export const getUsers = () => users;

export const deleteUser = () => (users = users.filter(aUser => aUser !== user));

// app2.js
import {  addUser, getUsers } from './app.js';

console.log(getUsers());
addUser("Autumn");
console.log(getUsers());

// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script type="module" src=""></script>
    <script type="module" src=""></script>
</body>
</html>

```

- 브라우저는 import, export를 이해못해서 웹팩, gulp 같은 것을 사용
- 사용 시, 브라우저에게 모듈이라고 이야기 해주어야 함
  - type="module"을 script 태그에 넣어준다.

  

* 참고

```javascript
const addUser = user => (users = [...users, user]);
```

- 위 방식은 immutable 방식, push를 할 수도 있지만, 이 방법이 더 나음
