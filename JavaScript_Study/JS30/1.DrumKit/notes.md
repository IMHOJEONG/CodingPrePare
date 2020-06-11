- data-key
  - 키 값 넣어주려고 만든 것 
- data 속성을 사용해 
  - key에 해당하는 audio를 틀어주려는 목적
  - 누가 키보드를 누르면 그에 맞는 소리를 들려줌
1. focus on listening for a key up event

   - listen on the window 
   - add event listener  - keydown
   - listen for the keydown event when that happens
     - run this function
   - This event - object full of data describing what happened
   - keyCode
   - 지정된 키를 누르지 않으면 null을 반환 -> console에서 확인 가능

   ```javascript
   const audio = document.querySelector('audio[data-key=65]');
   // ES6에선
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"`); 
   // "" 따옴표를 주의하자
   if(!audio) return; // 존재 안 하면 끝
   audio.play(); // 있다면 실행 ㄱㄱ
   
   ```

2. hit it multiple times => but it only plays once every so often;

   - 끝날 때까지 시간 간격이 있음

   ```javascript
   audio.play();
   // 이미 실행 중에 다시 실행되지 않음
   // 시작 부분으로 rewind 해야 함
   audio.currentTime = 0;
   // 그러면 AAAA, SSS, DDD, FFF가 가능 
   ```

3. Add animation 

   ```javascript
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   // 눌렀을 때의 키 설정
   // 키에 해당하는 DOM 객체를 가져옴
   
   ```

4. transition => .playing 

   - must explicitly loop over every singly element and attach an event