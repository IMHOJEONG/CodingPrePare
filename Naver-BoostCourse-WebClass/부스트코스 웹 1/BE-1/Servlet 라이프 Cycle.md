- Servlet 라이프 Cycle

  - 라이프 사이클(Life Cycle)

    - 어떤 객체의 생성부터 소멸까지의 과정
    - init, service, destroy

  - 서블릿의 생명주기 이해하기

    - 서블릿이 언제 생성이 되고 언제 어떤 메서드들이 어떻게 호출이 되는지?

  - LifecycleServlet 작성

    - 서블릿 생명주기를 확인할 수 있는 LifecycleServlet 작성

    - HttpServlet의 3가지 메소드를 오버라이딩

      - init(), service(request, response), destroy()

    - 생성 시 언제 생성되고, 언제 소멸되는지 이러한 부분들을 알아보기 위해 메서드를 몇 개 Override 해줌

      - init(), service(request, response), destroy()

    - 생성자, init(), destroy(), service() 4개의 메서드가 보임

      - 몇 가지 코드를 수정해보자

      - System.out.println 

        - System.out - 콘솔을 의미 , 응답 결과로 보내줘는 아니라는 거!
        - response 객체로부터 얻어온 PrintWriter 객체 out 하고는 목적지가 다르다는 거 기억!

      - Run as로 서버를 실행해보면? ... 

        1. 해당 URL로 클라이언트가 서버한테 요청했겠지

        2. 그럼 서버는 이 URL을 받아 Lifecycle이라는 URL 매핑은 LifecycleServlet이라는 정보를 알아냈을 것
        3.  이 해당 클래스가 메모리에 존재할까라는 것을 체크
           - 메모리가 존재하지 않는다면 이 객체를 생성해야겠지 => 그래서 메모리에 올려주는 일을 해야 함
        4. 최초로 지금 Lifecycle Servlet을 호출했었을 것
           - 서버는 이게 메모리에 없어라는 판단을 했을 것 => Lifecycle Servlet을 생성하겠지
           - ==> 생성자에 넣어준 메시지가 출력되는 것 확인 가능 
           - 이 때 생성이 됨.
        5. 그 다음 init() 이라는 메서드를 호출
        6. service() 메서드 호출
           - destroy 메서드는 아직 호출되지 않고 있는 것을 확인할 수 있음
        7. 브라우저에서 새로 고침 해보면???
           - 이것은 새로운 요청
           - 새로고침하니, 처음처럼 LifecycleServlet 생성, init 호출이라는 메서드들은 호출되지 않음
           - service() 메서드만 호출되고 있는 것을 확인할 수 있음
           -  why?
             - 똑같은 주소로 이렇게 호출해보면 다른 브라우저를 이용한다 해도 
             - service() 만 계속 호출이 되고 있는 것을 볼 수 있음
             - 서블릿 - 서버에 서블릿 객체를 여러 개 만들지 않음
             - 요청이 여러 번 들어오면 매번 생성하고 이런 일들을 반복하지 X
               - 실제 이 요청된 객체가 메모리에 있어, 없어 이 부분을 체크해 
               - 있다면 service라는 메서드만 호출함
        8. destroy 메서드는?
           - 서블릿을 조금 수정해서 저장하면
           - 서블릿이 수정됐기 때문에 지금 메모리에 올라가 있는 서블릿 객체는 더 이상 사용될 수 없음
           - destroy()라는 메서드가 호출되고 있는 것을 확인 가능
             - 다시 브라우저를 통해 새로 고침 해보니 메모리에 이제 존재하지 않음
               - ===> 다시 처음부터 객체를 생성하고 init()을 호출하고, service()를 호출하는 이런 부분들을 수행하는 것을 확인가능 

  - 서블릿 라이프사이클

    - ![1_5_3_ServletLifcycle](.\1_5_3_ServletLifcycle.png)

    - 서블릿이 처음 호출되면 init() 이라는 메서드가 호출이 됨

    - service() 라는 메서드가 호출이 됨

    - destroy() 라는 메서드는 항상 호출되는 것이 아님

      - 웹 애플리케이션이 갱신되거나 WAS가 종료될 때 호출이 됨 

    - WAS - 서블릿 요청을 받으면 해당 서블릿이 메모리에 있는지 없는지 확인

    - if (메모리에 없음) {

      ​	해당 서블릿 클래스를 메모리에 올림

      ​     init() 메소드를 실행

      }

      ​	service() 메소드를 실행

    - 메모리에 올리는 작업 = 객체가 생성되는 작업

    - 두 번째 요청이 들어왔을 때 

      - 이 생성자라던가 init()이라는 메서드는 호출이 되지 않고 service()라는 메서드만 계속 실행이 되고 있었던 것

    - 요청이 들어왔을 때 응답해야 되는 모든 내용은 service()라는 메서드에 구현해야겠구나!

    - WAS가 종료되거나 웹 애플리케이션이 새롭게 갱신될 경우에만 destroy()라는 메서드가 실행이 되는구나

    - ex) HelloServlet - service 메서드는 본 적이 없음

      - doGet() 메서드만 호출 -> 잘 실행이됨
      - WAS - init()이라는 메서드를 호출하고 다음은 service()라는 메서드를 호출하는 예만 수행하는데
      - doGet()이라는 메서드는 어떻게 실행된거지???

    - service() 메서드가 특이하게 동작이 됨

      - HttpServlet의 이 service()라는 메서드가 이미 구현이 되어 있는 상태 => 상속
      - 내가 만든 클래스가 service()라는 메서드를 갖고 있지 않다면 누구의 service가 실행???
        - 나의 부모 클래스의 service() 라는 메서드가 실행됨
        - 서블릿의 부모인 HttpServlet의 service() 메서드가 실행이 됐겠지
        - HttpServlet의 service 메서드가 실행됨
      - HelloServlet을 만들었을 때는 doGet() 이라는 메서드만 오버라이드 했고 service()라는 메서드는 오버라이드 하지 않음
      - WAS는 매번 service만 호출 

    - HttpServlet의 service 메서드는 어떻게 되어있는가?

      - service(request, response)

        - HttpServlet의 service 메소드 - 템플릿 메소드 패턴으로 구현
- 클라이언트 요청이 GET일 경우 
        
  - 자신이 가지고 있는 doGet(request, response)이라는 메서드를 호출
        - 클라이언트 요청이 POST일 경우
  - doPost(request, response)를 호출
        
      - service() 라는 메서드가 이렇게 동작하고 있었음
      
        - HelloServlet에서 service 메서드를 오버라이드 하지 않고 doGet() 메서드만 오버라이드했지만,
        - 알아서 doGet()이라는 메서드가 호출되면서 그 안에 구현해두었던 HelloServlet 이런 것을 
        - 응답 결과로 보내주는 것
      
      - if doPost() 메소드를 오버라이드 했다면?
      
        - POST 방식으로 요청이 들어오게 되면 그 부분이 실행되게 할 것
      
      - method Override => Source => Override/implement Methods에서 하자
      
      - 초기엔 메서드 요청이 GET이나 POST 이런 방식만 존재했었다면 
      
        - 현재는 요청 자체가 DELETE, PUT 등 여러가지 방법으로 들어올 수 있음
      
      - form -> method / form -> action
      
        - submit 이라는 버튼이 눌렸을 때 이 주소로 요청해 주고 
        - 이때 요청이 들어갈 때 메서드는 post라는 값으로 넣어주세요 라는 의미로 생각 ㄱ
      
      - 요청 시 LifecycleServlet이 요청이 들어왔었음
      
        - URL에서 직접 요청했을 때에는 메서드 값이 GET이라는 값으로 넘어감
      
        - URL에서 직접 넘어갔을 때 
      
          - GET이라는 요청이 들어왔었을 것 
          - HttpServlet이 가진 service 메서드는 doGet이라는 메서드를 호출했을 것 => doGet()이 실행됨
          - doGet()에 있는 내용이 응답 결과로 넘어갔기 때문
      
        - OK 버튼 누르면 doPost() 메서드가 실행됨
      
          - form method='post'라..
        
      - doPost() 
        
          - ContentType을 지정, 응답 결과를 넣어줄 통로를 하나 열었음
          - request 객체로부터 Parameter가 name으로 지정된 것의 값을 꺼내 String 변수에 저장
          - request 
            - 요청정보를 추상화해서 갖고 있는 객체
            - input name 값에 따라 getParameter 시 나와있는 값이 달라짐
          - form에서 요청할 때 값을 뭐라고 넣느냐에 따라 페이지가 달라짐
          - 계속 실행되는 부분은 이 똑같은 코드가 실행이 되지만, 프로그램이 동작하면서 응답 결과 만듬
            - 동적인 페이지라고 함
          
      - 정리
        
        - 해당 서블릿에 URL 주소 직접 입력 or 링크를 클릭하는 것
          - GET 방식으로 서버에게 요청을 보내게 되는 것
          - service 메소드 호출 => 자신의 doGet 메소드 호출
        - 요청 시 post 방식이면 -> 메소드가 post 값이라는 것 전달
            - 실제 service 메소드는 doPost 호출해 안의 내용을 출력한다.
        - 같은 URL 매핑 주소지만 GET, POST 방식이냐에 따라 다른 메서드가 호출되고 있는 것을 확인 가능
        
          