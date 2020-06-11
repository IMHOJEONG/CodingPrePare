- setTimeout : JS 개념에서 온 것이 아님

  - 브라우저 & nodejs 개념에서 온 것
  - 시간이 좀 흐른 후에 함수를 실행하는 것
  - 정확히는 시간이 지난 후에 기능을 message queue에 붙여줌

  - 함수를 자동으로 부르는 것이 아닌, 함수를 message queue에 넣고 stack이 비게되면, JS가 실행함

  - 바로 이뤄질수도 있고, JS가 바쁘면 천천히 할 수도 있음
    - time specific하다고 볼 수 없음
  - 첫 번째 인자는 함수, 두 번째 인자는 최소 대기 시간
  - 두 번째 인자는 ms(밀리초)

```javascript
setTimeout(() => console.log("hi"), 1000);
// 1초 후에 hi 출력

setTimeout(console.log, 1000, "HI");
// 이 방법도 가능
```

- 우리가 직접 함수를 부르진 않고, 함수를 setTimeout에게 주고, 그 다음 setTimeout이 함수를 부름

```javascript
setTimeout(console.log("hi"), 1000, "HI");
```

- 위처럼 작성하면 바로 부를 테니까 원하지 않는 결과 출력

- 취소하고 싶을 때가 있는데...
  - setTimeout을 variable 안에 넣는다.

```javascript
const helloT = setTimeout(console.log, 10000, "Hello");

console.log(helloT);
// ID의 콘솔로그가 틈
// 타임아웃의 ID

clearTimeout(helloT);
```

- 10초 후에 hello을 해야하지만, 지금은 ID가 있음

  - 꽤나 유용함
  - clearTimeout으로 해제 가능

- Timeout이 생성될때마다 ID가 리턴됨

  - 이걸 저장하고 함수 clearTimeout을 실행시킬 것
  - 얻은 ID로 timeout을 정리

- 존재하지 않는 timeout을 정리하려고 하면??

  - 작동안하고, JS가 존재하지 않는다고 알려주진 않음
  - clear했지만, 에러가 생기지 않음

- 복습

  - 숫자 : 최소대기시간
  - 이 함수를 큐에 올리기 까지, 준비가 되면 자바스크립트가 부름
  - 확실한 시간은 아님, 지연이 될 수 있음

- setInterval
  - 매시간마다 함수를 실행시킴

```javascript
const helloT = setInterval(console.log, 5000, "Hello");
```

- 타임아웃과 동일한 구조를 가짐
- 그러나, interval이 1초보다 적다면,

  - 크롬의 경우는 interval이 1초보다 짧다면, 크롬이 1초로 맞춰버림
  - interval이 0.5초 였다면, user가 크롬 탭을 바꾸거나, 나가면 크롬이 1초로 바꾸어버릴 것
    - 우리가 설정한 값을 무시함

- interval도 취소 가능

  - clearInterval(ID로)..

- setTimeout : 몇 초 기다린 후 함수를 실행하는 것

- setInterval : 매 정해진 초마다 함수를 실행해줌

- 함수를 실행하지 말고, 함수의 이름을 넣도록 하자

  - 그러면 setTimeout, interval이 대신 실행해주고
  - timeout, interval 취소는 clear~~를 사용해서 취소

- interval의 경우, 1초보다 짧으면 크롬이 강제로 1초로 만들 수 있으니까 참고

  - 브라우저가 강제로 조정

- requestAnimationFrame

  - 스크린에서 뭔가 움직이게 하려면 setInterval을 과거에 활용했지만,
  - CPU, 그래픽카드가 느리면 interval이 느려질 수 있고, interval에도 의지하기가..(time specific이 아니라)

  - 다시 브라우저를 칠하기 전에, 함수를 실행함

    - 칠한다 => 이미지 렌더링
    - 브라우저가 업데이트 할 때마다 animation frame을 요청함

      - 그래서 애니메이션을 수정할 수 있음

    - 애니메이션 작업을 많이 하지 않는 이상 자주 쓸일이 ㄷㄷ

```javascript
requestAnimationFrame(() => console.log("Hi"));
```

- 위의 코드에서 callback은 브라우저 repaint 전에 호출됨
- 하나의 콜백이면 되고, 시간 필요 없음

```javascript
const sayHi = () => {
  console.log("hi");
  requestAnimationFrame(sayHi);
};
requestAnimationFrame(sayHi);
```

- sayHi를 아주 빠르게 실행할 것이다.
- requestAnimationFrame은 CPU, 그래픽카드에 최적화되어 있음

  - 다른 탭으로 이동하면, 크롬은 그걸 실행시키지 않음
    - 해당 스크린을 paint하는게 아니라서!

- 무언가를 최대한 빠르게 실행시키고 싶다면, requestAnimationFrame도 고려해보자
