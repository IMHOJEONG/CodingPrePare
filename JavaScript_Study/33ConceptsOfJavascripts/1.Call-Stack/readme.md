# Call Stack

- 자바스크립트가 함수 실행을 핸들 하는 방법 중 하나

- 자바스크립트가 실행해야하는 함수를 보면, Stack 위에 올림

  - JS는 함수를 그 스택 위에 올리고, 함수를 다 실행하면 제거

- index.js에서 크롬 개발자 도구를 참고하면 zero가 가장 상단에 위치한 것을 알 수 있음

  - 그 다음 함수로는 one, two, three
  - 아직은 완료되지 않음
  - three는 끝나고 three 함수가 Call Stack에서 사라짐
    - 함수는 return 또는 실행이 완료되면 끝 => 스택에서 제거됨

- 리스트가 차례로 있는 것
  - 중간에 에러가 발생하면 에러 전에 있던 모든 콜스택을 알려줌

- 스택이 붕괴될 때 나는 현상이 있음 
```javascript

function hello() {
    bye();
}

function bye(){
    hello();
}   
hello();

```
- 위의 코드에서, 두개는 서로를 호출 
    - 맥시멈 콜스택 사이즈를 초과했다는 메시지를 보게됨
- 자바스크립트 스택에 올릴 수 있는 제한이 존재




[관련 링크](https://www.youtube.com/watch?v=QkFkFqg-J04&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=10)
