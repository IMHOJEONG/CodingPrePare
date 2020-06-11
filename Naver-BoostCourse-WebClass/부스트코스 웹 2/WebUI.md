- **window 객체**(setTimeout)

  - 전역객체(window)에 속한 메서드엔 경고창을 띄워주는 alert & setTimeout이라는 메서드 등이 있음

  - 다른 함수와 조금 다르게 동작하는 setTimeout의 특성!

  - setTimeout과 비동기

    - window 객체

      - 브라우저 개발 시, window라는 객체가 존재
      - window에는 많은 메서드들이 존재함
      - window : 디폴트의 개념이므로 생략 가능

      ```javascript
      window.setTimeout()
      setTimeout() // window - 전역객체라서 생략이 가능
      ```

      - ex) window.alert 
        - 경고창을 띄우는 것 , 별로 좋지 않은 UX
      - ex) window.setTimeout 
        - Ajax, 비동기 

    - setTimeout 활용

      - 인자로 함수를 받음
      - 콜백 함수 - 나중에 실행되는 함수!
      - JS - 함수를 인자로 받을 수 있는 특징이 있음 & 함수를 반환도 할 수 있고!
      - setTimeout의 특성을 잘 이해하고, 지연실행이 필요한 경우에 잘 활용하면 좋음

      ```javascript
      function run() {
          console.log("run start");
          
          setTimeout(function(){
              var msg = 'hello codesquad';
              console.log(msg);
              // 이 메시지는 즉시 실행되지 않음
              console.log("run ...ing");
          }, 1000);
          // 1000ms === 1s를 의미
          console.log("run end");
          
      }
      
      run();
      
      // run start -> run end 후 setTimeout 안의 메시지가 나옴
      
      // --------------
      function run() {
          setTimeout(function(){
              var msg = 'hello codesquad';
              console.log(msg);
              // 이 메시지는 즉시 실행되지 않음
              console.log("run ...ing");
          }, 1000);
          // 1000ms === 1s를 의미
          
      }
      console.log("run start");
      run();
      console.log("run end");
      
      // run start -> run end 후 setTimeout 안의 메시지가 나옴
      ```

      - 왜 이렇게 실행이 되는가?
        - run은 이미 반환이 되었고 나중에 setTimeout안의 메시지가 실행됨
        - 과연 setTimeout안에 설정한 시간이 더 짧은 시간이면 출력 결과가 바뀌는가?
          - 아니! => 나오는 시간만 다를 뿐 출력 순서는 그대로!
        - 비동기 콜백 함수의 특징!
        - 스택에 쌓여있는 코드들인데, 스택이 다 비워지고 나서 비동기는 마지막에 실행이 된다!
        - setTimeout이 실행되고 나서 run은 이미 반환이 됨
          - setTimeout 안의 내용은 이벤트 큐!!라는 데에 보관되어 있다가 나중에 실행된다.

    - setTimeout 실행 순서

      - setTimeout의 실행 - 비동기(asynchronous)로 실행되어 동기적인 다른 실행이 끝나야 실행됨
      - setTimeout 안의 함수(콜백 함수) - run 함수의 실행이 끝나고 나서,
      - 정확히는 stack에 쌓여있는 함수의 실행이 끝나고 나서 실행됨
      - 디버거를 통해서 직접 확인하는 것도 중요!

    ```javascript
    function run() {
        console.log("start");
        setTimeout(function() {
            var msg = "hello codesquad";
            console.log(msg);  //이 메시지는 즉시 실행되지 않습니다.
        }, 1000);
        console.log("end");
    }
    
    run();
    ```

    - setTimeout말고 비동기 예제도 더 존재하고, setInterval이라는 메서드도 있음
    - Ajax, 애니메이션-> 리퀘스트 애니메이션 프레임, 비동기

- **DOM과 querySelector**

  - HTML 내의 구조와 데이터는 변경됨 => JS로 이를 변경시킬 수도 있음 => DOM의 이해가 필요
  - DOM Tree, DOM API, querySelector
    - DOM 
      - 브라우저에선 HTML코드를 DOM(Document Object Model)이라는 객체 형태의 모델로 저장함!
      - 그렇게 저장된 정보를 DOM Tree => HTML element는 Tree 형태로 저장됨
    - 우리가 HTML 코딩을 열심히 하면 => HTML 코드들을 해석 => 어떤 객체의 트리구조 형태로 만들어서 정보들을 기억
    - HTML로 만든 페이지가 변경이 된다는 점!!!
      - 일부분의 HTML이 빠지고 추가 or 변경된다거나 그럴 수 있음 => 어떤 구조체를 가지고 있어야 변경이 쉬움
      - DOM이라는 모델을 도입해서 어떤 트리 구조로 저장을 하고 화면에 표현하고 있음 
      - 쉽게 찾고 삭제하고, 그런 것들을 편하게 해주기 위해 DOM API를 제공 
    - 복잡한 DOM Tree를 탐색하기 위해 JavaScript로 탐색알고리즘을 구현하면 너무 힘듬
      - 브라우저에선 DOM(document object model)이라는 개념을 통해, 다양한 DOM API(함수 묶음정도)를 제공
      - 브라우저는 DOM Tree 찾고 조작하는 걸 쉽게 도와주는 여러 가지 메서드(DOM API)를 제공
      - ex) getElementById()
    - ![dom_tree](.\dom_tree.png)
    - getElementById()
      - ID 정보를 통해서 찾을 수 있음, 테스트 시 chrome 개발자도구 콘솔에서 테스트 가능
      - Element의 속성 중에 id가 이것은 녀석을 찾아주는 것
      - document - 최상위 html을 포함하고 있는 DOM 전체 최상위 루트 객체다라고 얘기할 수 있음
      - document 객체에서 제공되는 DOM API를 쓰는 것
      - ex) document.getElementById("test").id / className 처럼 사용할 수 있어
      - document.getElementById("test").style.display = "none" , 객체에다가 하위에 있는 속성명을 쭉 쓰는 것
      - document.getElementById("test").innerText로도 바꾸어 줄 수 있어
      - 무언가를 찾을 때는 querySelector가 있음 
        - Selector로 어떤 것들을 찾아주는 것
        - document.querySelector("div")
          - html에서 document에서 첫 번째 div를 찾아줌
        - id로는 찾을 수 없음 => 그냥 쓰면 태그로 인식을 함
        - document.querySelector("#test") => `#`이 id라는 뜻 
        - document.querySelector(".test") => `.`이 클래스라는 의미
        - 자손(어디든) - document.querySelector(".test test1") => 연속 작성
        - 자손(바로 아래) -  document.querySelector(".test > test1") => `>`로 표시
          - `css Selector`를 이용해 표시가능 
      - Element.querySelector()
        - DOM을 찾는데 유용! CSS 스타일을 결정할 때 사용하던, Selector 문법을 활용해 DOM에 접근 가능
        - DOM을 찾을 때 querySelector만 써도 충분하고 빠름
        - `querySelectorAll`도 있음
          - 그에 해당하는 모든 Element가 다 나옴
          - 찾아보니 반환값 `NodeList []`
          - for문을 돌려서 값 확인 가능
      - Selector 문법도 굉장히 다양한 게 있음
        - `#, ., > ` 등 존재
        - querySelector와 querySelectorAll 메서드에서 사용할 수 있음
        - css 스타일을 부여했을 때 익혔던 selector 문법과 동일하다고 생각 & 사용할 수 있음

- **Browser Event, Event object, Event handler**

  - 어떤 영역을 마우스 클릭 or 화면을 스크롤 하는 작업에 따라 브라우저는 반응 

  - 브라우저에는 많은 이벤트가 발생

  - Event Listener, Event 객체

    - 브라우저가 Event 기반으로 동작되게 만들어졌기 때문!

    - 이벤트 정보를 브라우저가 알려줌

      - ex) load 이벤트 - html, css 렌더링을 마쳤다 
      - 어 너 뭐 클릭했어라고 브라우저가 알려줄 수 있음
      - 우리가 그 이벤트 정보를 받아서 무언가를 하려면 addEventListener를 사용해야 함

    - Event

      - 브라우저 화면의 크기를 마우스로 조절할 때
      - 스크롤을 할 때, 마우스로 이동or 무언가를 선택할때도 이벤트가 발생
      - 이벤트를 브라우저가 발생시켜주니, 어떤 일을 하라고 할 일을 등록할 수가 있음
      - HTML element 별로 어떤 이벤트가 발생했을 때 특정 행위를 하고 싶다면, 대상 element를 찾고 어떤 일을 등록하면 됨

    - addEventListener

      - 이벤트 등록하는 데 사용함 
      - element 객체 아래에 있는 메서드

      ```javascript
      var el = document.getElementById("outside");
      // 어떤 element를 찾고 
      el.addEventListener("click", function(){
          // do something...
      }, false);
      // 알려주는 정보를 선택적으로 이벤트 등록을 미리 해두고 어떤 일을 할 수 있는 것
      // 만약 이 element에 클릭이 일어나면 이 함수에 있는 내용이 실행되줘
      // 이러한 함수를 이벤트 핸들러 or 이벤트 리스너
      
      ```

      - addEventListener 함수의 두 번째 인자는 함수
        - 나중에 이벤트가 발생할 때 실행되는 함수 
        - 이벤트 핸들러(Event Handler) or 이벤트 리스너(Event Listener)라고 함 == 콜백 함수
        - 콜백함수는 이벤트가 발생할 때 실행됨

      ```html
      <html>
          <header></header>
          <body>
              <div class="outside">
                   outside Element
              </div>
          </body>
          <script src='test.js'></script>
      </html>
      ```

      ```javascript
      // test.js
      var el = document.querySelector(".outside");
      el.addEventListener("click", function(){
          console.log('clicked!');
      });
      ```

      - 이벤트 정보를 매개변수로 받을 수도 있음
        - 이름은 마음대로 가능
        - 출력해보면 객체라는 것을 알 수 있음
        - target - 어떤 게 클릭이 됐다라는 것을 보여주기도 함 
        - target 정보로 여러 가지 확인 가능
          - target.className - class 이름 보여줌
          - target.nodeName - 태그 이름을 보여줌
          - target.innerText - 안에 있는 내용을 보여줌

      ```javascript
      var el = document.querySelector(".outside");
      el.addEventListener('click', function(evt){
          console.log(evt);
          var target = evt.target;
          console.log(target.className, target.nodeName);
          console.log(target.innerText);
          debugger; // 디버거를 걸고 Source tab에 걸림
          // chrome 개발자 도구를 확인해보자!
          // element의 모든 정보들을 사용 가능
      });
      ```

      - 이벤트 객체를 잘 쓰는 게 매우 중요
      - 이벤트리스너가 실행될 때 
        - 어떤 이벤트에 의해서 실행됐는지, 이벤트 객체를 매개변수로 생성
        - 이벤트 리스너 안에는 이벤트 객체를 활용해 추가적인 작업을 할 수 있음
      - 지금은 addEventListener를 쓰는 게 좋음
      - MDN의 Event objects를 참고

- **Ajax통신의 이해**

  - 브라우저의 새로고침 없이 데이터를 얻어오는 방법
  
  - 사용자가 더 빠르게 변경된 데이터를 화면의 새로고침 없이 확인할 수 있는 방법 => 더 좋은 UX(User Experience)에 해당하는 방법
  
  - XMLHTTPRequest, Ajax
    - Ajax
      - 비동기로 서버로부터 데이터를 가져오는 것
      - 웹에 데이터를 갱신할 때, 브라우저 새로고침 없이 서버로부터 데이터를 받는 것이 좋겠다는 생각!
      - 더 좋은 UX를 제공 가능 
      - ![2-2-4_Ajax_](.\2-2-4_Ajax_.png)
      - 상단의 tab을 누를 때마다 컨텐츠가 달라짐 
      - 누르지도 않은 탭의 컨텐츠까지 초기로딩시점에 모두 불러온다면?
        - 그 때마다 서버에서 새로운 데이터를 만들어서 페이지를 보여주어야 하나?
        - 초기로딩속도에 영향을 줌, 따라서 동적으로 필요한 시점에 컨텐츠를 받아와 표현하면 더욱 좋음
        - Ajax 기술을 활용할 수 있는 대표적인 경우
        - 새로고침 없이 화면의 refresh 없이 전체 웹페이지에서 일부분만 이렇게 받아온 데이터로 갱신 가능
        - 비동기적으로 화면의 다른 거에 영향을 주지 않고 데이터를 서버에서 가져오는 방법
      
    - JSON
    
      - 표준적인 데이터 포맷, JavaScript Object Notation
      - 데이퍼 포맷을 결정하기 위해선 HTTP Header가 그 역할을 함
      - 클라이언트랑 서버랑 주고받을 때 어떤 데이터를 주고받아야 할까? => 어떤 포맷이 있어야 되겠지?
        - 서버에서 만들어준 어떤 문자열 포맷이 있꼬, 클라이언트가 그걸 해석하기 위한 어떤 문자열 포맷이 있어야 함
      - 오브젝트로 해서, 키와 value의 구조로 되어 있음 
      - 실제적으로 JS Object랑 같다고 보자
      - JSON 안에 object를 복합적으로 넣을 수 있어
    
    - Ajax
    
      - XMLHTTPRequest 객체를 사용하는 표준방법
      - XMLHttpRequest 객체를 생성해서, open메서드로 요청을 준비해서 send 메서드로 서버로 보냄
      - 요청 처리가 완료되면(서버에서 응답이 오면) load 이벤트가 발생하고, 콜백함수가 실행됨
      - 콜백함수가 실행될 때, 이미 ajax함수는 반환하고 call Stack에서 사라진 상태
      - setTimeout함수의 콜백함수의 실행과 유사하게 동작하는 `비동기`로직
    
      ```javascript
      function ajax(data) {
          var oReq = new XMLHttpRequest();
          oReq.addEventListener('load', function(){
       		console.log(this.responseText);       
          });
          oReq.open('GET', 'http://~~~~~');
          oReq.send();
      }
      ```
    
      1. ajax를 보내기 위해선 XMLHttpRequest라는 객체를 만들어야 함	
    
         - 그 객체에서 addEventListener, 이벤트를 처리하는 방식이라고 생각하기 때문
    
         - addEventListener 전에 open 메서드가 실행이 됨
    
           - 해당하는 url로 서버 요청을 준비하고 send를 하면 서버로 날아감
           - 날아가고 나서 ajax(data) 함수는 실행 끝
           - open -> send 하고 끝이고 그 후 
    
           ```javascript
           function(){
           	console.log(this.responseText);   
           }
           ```
         
           - load가 실행이 될 때 ajax 함수는 모두 다 반환이 됐고, call Stack에서 내려왔고 이 함수가 나중에 서버에서 오면 실행이 됨
         - MDN - XMLHttpRequeset 참고
      
        - File Protocol
      
            - 우리가 Ajax 통신을 할 때 도메인이 다르거나 그럴 경우엔 => Cross Origin 
            - Http만 지원이 되기 때문에, 이 파일 프로토콜이라 지원이 안 되는 것 -> 간단하게 서버를 띄워놓고 하면 ㄱㅊ
            - Chrome 개발자 도구의 Network의 All, XHR, JS 중 XHR 확인하면 서버에서 요청한 것들을 받아온 걸 알 수 있음
          
        - 어떤 데이터를 url로 보낼 때 get 방식
          
            - url 뒤에 키나 이름을 이렇게 붙일 수 있음
            - Ajax의 인자로, 파라미터로 받은 값을 이어서 붙인다거나, get 방식으로 Ajax를 보내는 것도 가능
          
        - Ajax 비동기 통신
          
            - post 방식으로 데이터를 전송하는 방식
            - CORS ????
          - 로컬 서버 테스트로 띄워놓고 하는 게 나음
            - Python, Node.js
  
-   **Javascript Debugging**
   
   -  JS - 실행단계(런타임)에서 버그가 발견됨
      - 어디가 문제인지 바로 확인하는 게 좋음
      - 결국 JS도 디버깅의 연속
        - 디버깅 - 버그를 잡는 것, 빨리빨리 문제 해결하자
      - 브라우저에서 디버깅을 많이 함      
      - todomvc.com -> vanilla JS에서 테스트 진행 가능
        - Vanilla JS - 프레임워크 없이 실행될 수 있는 것
      - BreakPoint를 소스 코드의 수정 없이 달 수 있음
        - 실행이 되다가 Paused in debugger라고 나옴
        - 중단이 되면 console에서 확인 가능
          - this? viewCmd?아니면 call Stack에서 볼 수 있어
        - Call Stack 
          - 현재 스택에 쌓여있는 상태에서 call을 한 경로들을 추적하며 어디서부터 잘못되었는가? 어떤 parameter가 문제인가 등 확인 가능
        - script execution 재실행으로 이 라인까지 올 수 있어
        - Step into - 함수 안으로 들어가고 싶다
        - Scope - local variable - 함수 내 로컬 변수들이 나옴
          - this도 알 수 있고
        - Step out - 그 함수에서 나오고 싶다
        - Watch - 어떤 값을 만들어두면 breakpoint가 실행될 때마다 그 값의 결과가 계속 나옴
          - `+`해서 룰을 만들 수 있다.
        - Call Stack, Scope, Local, Global 등 이 있음
        - console.log, alert 이제 쓰지 말자 
          - 개발자도구 - breakpoint 걸고 바로 ㄱㄱ
          - `F8` 단축키들을 최대한 활용하자
   
- **디버깅 컨트롤**

  - Pause, Continue : 
    - 첫 번째 버튼은 평소에는 Pause 버튼 상태인데 브렉포인트가 잡힌 상태에선 Continue 버튼이 됩니다. 
    - 다른 브레이크포인트가 잡힐 때까지 코드를 진행합니다.
  - Step over next function call : 
    - 스텝 오버는 코드 라인을 한 스탭 진행하는데 현재 실행 라인에 함수 실행 코드가 있다면 함수는 실행하는데 
    - 이때 함수 안의 코드로는 진입하지 않습니다. 
    - 즉 라인의 함수를 실행만 하게 됩니다.
  - Step into next function call : 
    - 스텝 인투는 스텝 오버와 다르게 현재 실행 라인의 코드에 함수가 있다면 
    - 함수 안의 첫 번째 코드로 진입해 들어가 다시 하나씩 라인별로 코드를 실행할 수 있습니다.
  - Step out of current function : 
    - 스텝 인투로 들어온 함수를 끝까지 실행하고 밖으로 빠져나와 해당 함수를 실행한 함수로 돌아갑니다.
  - Active/Deactive breakpoint : 
    - 브레이크포인트를 끄거나 켤 수 있습니다.
  - Pause on exception : 
    - 자바스크립트 예외가 발생하면 해당 위치에 브레이크포인트를 잡아줍니다.


