- blocking & non-blocking

- 파이썬은 blocking 언어, 자바스크립트는 non-blocking 언어

- 웹사이트 input이 있고, 유저가 이를 사용할 때,

  - blocking 언어 였다면 사용자는 input에 typing을 할 수 없음
    - JS는 API fetch를 핸들링하느라 바빠서 그럼
  - 웹 사이트에서 아무것도 못했을 것

- alert : blocking function
  - 아무것도 할 수가 없음

```javascript
alert("Hello");
console.log("hi");
```

- 블록이 되고 console.log가 실행되지 않음

  - alert가 blocking 함수라서
  - JS가 이랬다며, fetch, request가 block되었을 것

- Events, callbacks을 사용하면 되니까

  - 버튼을 만들고 event listener click하면 => JS는 클릭이 실행되기를 기다려 줄 것

- parallel로 넣은 것은 그럼 어디로 갈 것인가?

```javascript
setTimeout(() => console.log("lalalal"), 5000);
```

- 이벤트루프로 갈 것

```javascript
setTimeout(() => console.log("hi"), 0);
console.log("bye");
```

- 왜 bye가 먼저 나오고 hi가 나오는가 이해해야 해

- 콜스택

  - JS가 이행해야하는 것들을 추적함

- Web API
- JS가 기본적으로 가지고 있지 않는 많은 함수가 있음
- localStorage가 하나의 예
- 브라우저가 관리해야 함

- queue
  - message Queue
  - web api에서 온 메시지
  - 스택에 아무것도 없을 경우에만 JS는 message queue에 있는 것을 가져감

```javascript
setTimeout(() => console.log("hi"));
console.log("bye");
```

- 위의 코드의 경우에,

  - 코드가 처음에 스택에 전부 들어가고
  - JS는 스택에 들어온 setTimeout 부분을 Web Api로 가져감
  - 그리고 bye를 실행 => 스택이 끝남
  - web Api에서 timeout의 두 번째 인자를 살펴봄
    - 이 함수를 실행하기까지 얼마나 기다려야 하는가?의 의미
    - 정확히는 실행하기까지 최소로 기다려야하는 시간을 의미
    - web api는 0초를 기다리고 그 함수는 message queue로 가는 것
  - 만약 스택에 아무것도 없다면 JS는 큐를 보고 스택으로 가는 것
  - 그 후 실행 후 반환

- fetch는 어떻게 되는 건가??

  - 똑같음 => 웹 사이트를 부르고 돌아왔을 때 큐로 감
  - JS가 준비가 되었을 때 큐에서 불러다가 함수를 다시 실행함

- 콜백, 이벤트가 있는지 이해할 수 가 있음
  - non blocking 언어
    - timeout 넣을 곳이 필요하기 때문

[참고 자료](https://www.youtube.com/watch?v=ZlCYIMVMMX8)
