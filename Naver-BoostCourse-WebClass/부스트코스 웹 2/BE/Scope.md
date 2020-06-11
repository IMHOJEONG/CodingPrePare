- **Scope** 
  - Servlet, JSP를 개발하다보면 변수를 많이 다루게 됨
  - 어떤 변수는 Web Application에서 공유하고 싶은 변수
  - 어떤 변수는 사용자 별로 유지하고 싶은 변수
  - 아니면 포워딩 되는 동안 유지하고 싶은 변수
    
    - 변수를 어떤 범위 내에서 사용하기 위해선 scope라는 것에 대해 알아야 함
    - 웹 programming -> 어떤 객체들이 이미 약속된 객체들이 존재하게 됨
  - application scope, session scope, request scope, page scope
  - ![2_5_1_scope_](.\2_5_1_scope_.jpg)
    - Application Scope
      
      - 웹 어플리케이션이 시작되고 종료될 때까지 변수가 유지되는 경우 사용
    - Session Scope
      
      - 웹 브라우저 별로 변수가 관리되는 경우 사용
      - 세션 객체가 생성돼서 이 세션 객체가 소멸될 때까지
      - vs Request Scope
        - Request Scope
          - 하나의 요청이 들어와 응답이 날갈 때까지만 유지되는 것
        - Session Scope
          - 세션 객체가 만들어져 소멸이 될 때까지
          - 요청이 하나가 아니라 여러 개의 요청이 들어와도 계속 남아 있는 Scope
          - 상태 유지를 할 때 사용되는 Scope
    - Request Scope 
      
      - http 요청을 WAS가 받아 웹 브라우저에게 응답할 때까지 변수가 유지되는 경우 사용
      - 클라이언트로부터 요청이 들어와 서버가 어떤 일을 수행한 다음 응답을 보낼 때까지 계속 사용할 수 있음
      - forward 시, 서블릿 1 => 서블릿2로 
        - Request 영역은 같았거든?
        - 근데 Page 영역은 서블릿 1 페이지 영역과 서블릿 2가 가진 페이지 영역은 각각 다름
      - 하나의 요청이 들어와 응답을 나갈 때까지
    - Page Scope ( 가장 작은 단위 )
      - 페이지 내에서 지역변수처럼 사용
      - 서블릿 or JSP든, 그 선언된 한 page 내에서만 사용할 수 있는 것
  
- **Page Scope**
  - 특정 Servlet or JSP가 실행되는 동안에만 정보를 유지하고 싶은 경우 
  - pageContext
  - Page Scope
    - PageContext 추상 클래스를 사용함
    - JSP에서 pageContext라는 내장 객체로 사용 가능
      - pageContext.setAttribute, getAttribute로 사용
    - forward가 될 경우 해당 Page Scope에 지정된 변수는 사용할 수 없음
      - 클라이언트 쪽에서 요청을 보냈을 때 하나의 JSP든 서블릿이든 요청을 받았을 것
        - 해당 요청을 받은 page 하나당 pageContext가 하나씩 생기는 것
        - PageContext는 이 페이지가 이용될 때까지만
      - forward - 1번에서 뭔가를 다 수행하고 2번으로 수행을 넘기는 동작을 했던 것
        - 넘어갔을 때 1번 pageContext 자체는 메모리에서 없어지는 것 
        - 2번 pageContext가 다시 생긴다라고 생각하자
      - Request 객체?
        - 요청이 들어왔을 때 하나의 Request 객체가 생겼고
        - 요청이 끝날 때까지 요청이 계속 유지가 되는 것
        - 이러한 부분이 차이점!
      - 이 Page가 실제 실행되는 동안만 사용할 수 있는 것
    - 사용법은 Application scope, Session Scope, request Scope와 같음
      - pageContext, 이 내장 객체에 
        - 이름.setAttribute, getAttribute 이런 부분들을 사용할 수 있음
        - 뭐 이미 Request Scope의 setAttribute, getAttribute를 해봤는데...
    - 마치 지역변수처럼 사용된다는 것이 다른 Scope들과 다름
      - 사실 이 페이지 자체에서 변수 선언해 값 저장해서 쓰는 거나, 우리가 값을 저장해서 사용하는 것이나
      - pageContext를 여기에다가 setAttribute해서 사용하는 것이나 크게 차이점이 없음
      - 나중에, JSP에서 pageScope에다가 해당하는 값을 저장한 후에 EL, JSTL 이용 시 꺼내서 조금 편하게 사용할 수 있다? 정도
    - 지역 변수처럼 해당 jsp나 서블릿이 실행되는 동안에만 정보를 유지하고자 할 때 사용됨
    - 하나의 페이지가 수행될 때까지 값을 저장하고 있는 것
    - JSP에서 사용할 때 내장 객체로 이미 만들어져 있기 때문
      - pageContext.setAttribute, pageContext.getAttribute처럼 사용하면 됨
  
- **request scope**

  - 웹 브라우저로부터 WAS가 요청을 받은 후, forward 되는 동안 유지하고 싶은 정보가 있을 경우 사용
  - HttpServletRequest, forward, request.setAttribute(), request.getAttribute()
  - Request Scope
    - http 요청을 WAS가 받아서 Web Browser에게 응답할 때까지 변수값을 유지하고자 할 경우 사용
      - forward 
        - 클라이언트가 요청 보냄 => 서블릿이 요청을 받고 
        - 이 서블릿에서 뭔가 일을 수행하다 얻어낸 값이 있었을 때 
          - Request라는 객체에다 해당 값을 맡겨놓고
            - 값을 맡겨놓는 이것을 Request Scope이라 함
            - 이 객체 자체가 HttpServletRequest라는 객체
          - JSP한테 포워드를 시킴 
          - JSP - 맡겨놓은 이 값을 가져다가 사용할 수 있음
      - 모든 요청이 들어올 때 WAS는 request, response라는 객체를 만듬
        - 이것들의 인자를 서블릿이 요청을 할 때 
        - 서비스 메서드의 인자로 넣어줬었던 것
        - 다른 서블릿 or JSP에서 이용할 수 있도록 이 범위를 유지스켜주는 것 => Request 객체
        - 응답이 나가게 되면 해당 만들어졌던 request, response 객체는 없어짐
      -  request, response라는 객체가 있었고, 이 객체가 요청이 들어와서 응답이 나갈 때까지 유지가 되는 객체
        - 서블릿 
          - service or doGet, doPost 메서드 안에 인자로 들어왔었던 해당 객체에 reference로 사용
        - JSP
          - request라는 내장 변수를 직접 사용하면 됨
    - HttpServletRequest 객체를 사용 
    - JSP에선 request 내장 변수를 사용 
    - Servlet에선 HttpServletRequest 객체를 사용
    - 값을 저장할 때는 requset 객체의 setAttribute() 사용
    - 값을 읽어들일 때는 request 객체의 getAttribute() 사용
    - page scope, request scope, session scope, Application scope 
      - 다 똑같이 해당 메서드를 사용하고 있는 것을 확인 가능
    - forward 시 값을 유지하고자 사용함
    - forward하기 전 request 객체의 setAttribute() 메소드로 값을 설정한 후,
      - 서블릿 or JSP에게 결과를 전달해 값을 출력하도록 함
    - forward 되는 동안 값이 유지되는 것 
      - Request scope를 이용했다고 함

- **session scope**

  - 접속한 웹 브라우저 별로 정보를 관리하고 싶을 때 사용

  - HttpSession, session.setAttribute(), session.getAttribute()

  - session scope
    - 웹 브라우저 별로 변수를 관리하고자 할 경우 사용
      - 클라이언트 - 각각 하나의 웹 브라우저(굉장히 많을 수 있어)
      
      - 서버 -> 클라이언트마다 하나의 객체를 만들어서 관리하는 것 => 세션
      
      - 세션 
        - 상태 정보를 유지하기 위해서 사용
        - 하나의 클라이언트마다 각각 관리해주는 객체
      - 실제로 클라이언트마다 상태 정보는 각각 다르겠지
      
    - 웹 브라우저 탭 간에는 세션 정보가 공유됨 
      - 각각의 탭에서는 같은 세션정보를 사용할 수 있어
      - 로그인을 다른 탭에서 하고 다시 로그인하지 않아도 되는 경우의 예
      
    - HttpSession 인터페이스를 구현한 객체를 사용
      
      - JSP 부분을 보면 `javax.servlet.http.HttpSession session = null`로 되어 있어
      
    - JSP에선 session 내장 변수를 사용함
      
    - 서블릿에선 HttpServletRequest의 getSession() 메소드
      
      - Session 객체를 얻음
      - 실제 요청이 들어갔을 때 클라이언트에 대한 정보를 알아야 함
        - 그래야 이 세션이 어떤 클라이언트 것인줄 알아낼 수 있기 때문에 
        - 이 request가 세션을 얻어낼 수 있는 이런 메서드를 가지고 있음
      
    - 값을 저장할 떄 - session 객체의 setAttribute 메서드
      
    - 값을 읽어들일 때 - session 객체의 getAttribte 메서드
      
      - Scope의 모든 부분들
        - Page Scope, Reqest Scope, Session Scope, Application Scope 
          - 다 똑같이 값을 저장할 때는 setAttribute()
          - 값을 읽어들일 때는 getAttribute() 이용
      
    - 장바구니처럼 사용자별로 유지가 되어야할 정보가 있을 때 사용
      
    - 하나의 요청이 들어왔을 때 생기는 것은 Request Scope
      
      - 브라우저 별로 생김 
        - 어떤 요청이 들어왔을 때 응답이 같고 
        - 끝났을 때 requeset, response 객체는 없어지지만
        - 세션 객체는 없어지지 않음
      - 세션 객체 
        - 프로그래밍 할 때 적당한 시간을 지정 or
        - 브라우저가 닫히게 된다 등 이런 특성에 따라 없어짐
        - request 보다 오랫동안 정보를 유지
        - 클라이언트가 어떤 계속 한 페이지만 요청 X
          - 다음에 또 요청하고 또 요청하고 이랬을 때 사용할 수 있는 이런 부분이다!
      - 어떤 클라이언트가 요청, 응답, 일들을 계속하는 동안 정보를 계속 유지를 해주는 scope => session scope
      - Session scope
        - 클라이언트마다 하나씩 공간을 가지고 있어 
        - 각 클라이언트마다 유지를 해야 하는 정보들을 
        - 이것을 이용해 정보를 유지시켜주면 됨

- **Application scope**
  
  - 하나의 웹 어플리케이션에서 공유하고 싶은 변수가 있을 때 
  
  - ServletContext, setAttribute, getAttribute
  
    - 서버에는 웹 Application이 여러 개가 있을 수 있음
  
  - application scope
  
    - 하나의 웹 애플리케이션 내에 객체 하나라고 생각하자
      - 이 애플리케이션 내에선 이 객체에 값을 저장해놓고 사용할 수 있는 영역이라 생각
      - 이 영역 - 애플리케이션 당 딱 하나만 만들어지는 것
        - 클라이언트가 여럿이 있을 수 있음
        - 어떤 클라이언트가 이 웹 Application에 접근해도
          - 이 Application에 접근한 지금, 이 Application Scope에 해당하는 부분은 
          - 하나만 가지고 사용
    - 웹 어플리케이션이 시작되고 종료될 때까지 변수를 사용할 수 있음
      - 여기에 원하는 값들을 저장해놓고 사용하는 거다!
    - ServletContext 인터페이스를 구현한 객체를 사용함
    - jsp - application 내장 객체를 이용
      - ServletContext로부터 얻어낸 이 객체를 application으로 약속함
    - 서블릿 
      - getServletContext() 메소드를 이용해 application 객체를 이용함
    - 웹 어플리케이션 하나당 하나의 application 객체가 사용됨
    - 값을 저장할 때 - application 객체의 setAttribute 메소드
    - 값을 읽어 들일 때 - applicaiton 객체의 getAttribute 메소드 사용
      - 메소드를 사용하는 방법은 Request, Session, Application, Scope이든 다 같음
    - 모든 클라이언트가 공통으로 사용해야 할 값들이 있을 때 사용
      - 이 영역에 값을 맡겨놓음 
      - 이 웹 Application 내에 있는 어떤 서블릿, jsp, 누가 되었든 맡겨놓은 값이 존재한다면
        - 다 똑같은 영역에 가서 참고할 거기 때문 => 같은 애가 공유가 되겠지?
  
  - 주의! 
  
    - 모든 클라이언트가 공통으로 사용돼야 할 값들이 있을 때 사용해야 된다는 것
  
  - 하나의 웹 어플리케이션은 가져야 되는 구조, 들어있는 위치에 꼭 있어야 되는 파일들이 있음
  
    - 클래스 이름을 사용할 때, 단어가 두 개 이상이면 
  
      - 두 번째 단어의 첫 글자도 대문자로 해주는 것이 관례
        -  가독성 때문에!
        - URL로 값 요청 - doGet 메서드가 호출됨
  
      ```java
      response.setContentType("text/html; charset=UTF-8"); // 응답을 만들어내고 싶음
      response.getWriter(); // 응답을 내보낼 통로를 getWriter 메소드를 이용해 얻어냄
      ```
  
      - `PrintWriter out = response.getWriter()`
  
        - 얻어낸 통로를 out이라는 reference 변수가 가리킴
  
      - Application Scope를 얻어내 여기에 값을 주고 싶음
  
        - ServletContext라는 객체를 이용 가능
          - ServletContext 객체 
            - 실제 웹 애플리케이션 영역
          - getServletContext라는 메서드가 존재
          - 전체 웹 Application ServletContext 객체를 얻어낼 수 있음 
  
        ```java
        ServletContext application = getServletContext();
        application.setAttribute("value", value);
        ```
  
      - Scope이 무엇이건 값을 맡길 때 setAttribute
  
        - 값을 얻어낼 때 getAttribute 이용 -> 중요!
        - 나중에 getAttribute로 찾을 때 반드시 setAttribute에 넣었던 이름으로 찾아야!
  
      - 값을 꺼내서 값을 다시 주기로 함
  
        ```java
        ServletContext application = getServletContext();
        ```
  
        - 항상 맡길 때 Object로 들어가기 때문에 형 변환 해주는 작업이 필요
  
        ```java
        int value = (int) application.getAttribute("value");
        value++;
        application.setAttribute("value");
        ```
  
      - 만약 ApplicationScope Servlet의 순서가 반대면
  
        - 실행이 안 됐는데 Application 영역한테 가서 꺼내줘하는 경우인데?
        - 값이 없어 => null 값을 출력할 것
        - Exception 처리해주면 좋지 않을까?
  
        ```java
        try {
        			int value = (int) application.getAttribute("value");
        			value++;
        			application.setAttribute("value", value);
        			
        			out.println("<h1>value : " + value + "</h1>");
        		}
        		catch(NullPointerException e) {
        			out.println("value의 값이 설정되지 않았습니다.");
        		}
        ```
  
      - JSP로 결과를 보여주면 됨
  
        - JSP - 내장 객체를 이미 가지고 있기 때문	 
          - ServletContext를 얻어낼 필요 X
          - value가 없었을 때 오류 발생 가능 존재
            - try-catch 문을 사용하자 
              - NullPoiunterException
  
      ```java
      <%
      	try{
      		int value = (int) application.getAttribute("value");
      		value = value +2;
      		application.setAttribute("value", value);
      %>
      	<h1><%=value %></h1>
      <%
      	}catch(NullPointerException e){
      %>
      	<h1>설정된 값이 없음</h1>
      <%	
      	}
      %>
      ```
  
    - 다른 클라이언트가 요청을 해도 그 값을 같이 씀
  
      - 새 탭을 여는 것 = 브라우저가 바뀜 
        - 클라이언트가 달라짐
      - 이 웹 애플리케이션이 다시 시작할 때까지 유지