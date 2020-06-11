- **redirect**
  - 서버가 클라이언트에게 어떤 URL로 이동하라는 요청을 보내는 것
    
  - HttpServletResponse, sendRedirect()
  - 리다이렉트(redirect)

    - http 프로토콜로 정해진 규칙 
      
      - 서버 - 클라이언트로부터 요청을 받은 후, 클라이언트에게 특정 URL로 이동하라고 요청할 수 있음 => redirect
      
      - 서버
        - 클라이언트에게 응답으로 상태코드를 302와 함께 
        - 이동할 URL 정보를 Location 헤더(Header)에 담아 전송!
        
      - 클라이언트
        - 서버로부터 받은 상태 값이 302이면 Location 헤더값으로 재요청을 보내게 됨
        - 브라우저의 주소창은 전송받은 URL로 바뀌게 됨
        
      - 서블릿 or JSP 
        - redirect하기 위해 HttpServletResponse가 가지고 있는 sendRedirect() 메소드를 사용
        - ex) 딱히 응답이 필요없이 이 URL로 다시 redirect 해주라는 요청을 보내자
        - redirect 요청을 보내는 페이지
          -response.sendRedirect("redirect02.jsp"); %>`
        - redirect 되었을 때 보여지는 페이지
          - `<body>redirected 된 페이지야</body>`
        - 나온 결과의 URL에 집중!
          - redirect01.jsp에서 실행했는데?
          - `http://localhost:8080/firstweb/redirect02.jsp`
          - Enter 치는 순간 URL이 02.jsp로 바뀌면서 실제 02.jsp가 실행되서 보이는 것
        
      - 브라우저에서 리다이렉트 확인
        
        - Chrome에서 우측 버튼 => 검사 => Network tab
        - redirect01.jsp => 서버로부터 응답코드 302 받음
        - ![redirect](.\redirect.PNG)
        
        - ![2_4_1_redirect__](.\2_4_1_redirect__.png)
          1. 클라이언트, 브라우저 => redirect01.jsp 요청
             - Tomcat, WAS, 서버에선 redirect01.jsp가 요청을 받음
             - 01.jsp
               - response에 sendRedirect라는 메서드를 수행하면서 
               - redirect02.jsp라는 값을 넣어서 보냄
               - 응답 결과로 다시 브라우저한테 보냄
               - 보낼 때, 302이라는 응답 코드를 보내면서 Location 헤더 값에 redirect02.jsp라는 값을 넣어 보냄
             - 사용자가 링크를 click or URL을 바꿔서 쓰는 등 동작이 없어도
               - 알아서 302라는 코드가 들어왔어서 location 헤더 값에 가져온 redirect02.jsp를 요청해야지! 실행
               - 브라우저가 알아서 자동으로 다시 서버한테 redirect02.jsp를 요청하게 되는 것
          2. redirect02.jsp는 jsp 실행 순서 거치고 출력이 되는 것을 볼 수 있음
        
      - 클라이언트가 요청을 한 번, 두 번 보내게 된다는 거 중요!
        
      - 항상 요청이 들어갈 때 요청 객체와 응답 객체가 생긴다는 것도 중요!
        - redirect01이 들어왔을 때 생긴 요청, 응답 객체와
          - 다시 들어와서 redirect02가 요청이 들어갔을 때 생기는 요청, 응답 객체는 다름!


- **forward**
  
  
  - WAS의 서블릿 or JSP가 요청을 받은 후 그 요청을 처리하다 
    
  
    - 추가적인 처리를 같은 Web Application 안에 포함된 다른 서블릿 or JSP에게 위임하는 경우 
  
      - forward = 이렇게 위임하는 것
      - RequestDispatcher, forward()
    - forward vs redirect 헷갈림!
    
      - redirect
    
        - 클라이언트가 서버한테 요청을 보냄
        - 서버는 어떤 일들을 처리하고 다시 클라이언트한테
        - 새로운 요청할 곳을 알려주며 이걸로 다시 요청
        - redirect의 결과 - 실제 실행한 다음 url 주소가 바뀌었었어
      - forward
    
        - 클라이언트는 요청을 보냄
        - 서버쪽에서 그 요청에 대해 혼자 처리하는 것이 아니라 
        - 다른 누군가한테 처리를 맡기는 것
        - 이 때 client
    
          - 이 서블릿이 혼자서 다 처리해서 응답을 했는지
          - 아니면 다른 누군가한테 부탁해서 처리를 했는지 전혀 알 필요가 없어!
        - forward의 결과 - url이 바뀌지 않음
      - 차이점이 중요!
    
        - 실제 클라이언트가 서버한테 요청을 하게 되면
        - request, response 객체가 반드시 생성됨
        - 클라이언트가 서버한테 요청을 보내면
    
          - WAS는 요청을 담당하고 있는 request 객체
          - 응답을 담당해줄 response 객체를 만듬
        - 이 요청이 들어와서 응답을 할 때까지 
    
          - request, response 라는 객체는 계속 유지가 되고 있는 상태!
        - forward - request, response 객체가 한 번 만들어짐 => 요청이 한 번이니까!
        - redirect - 요청이 여러 번 왔다갔다 한다
    
          - 요청 시가 서로 다른 요청
          - request, response 객체가 여러 번 만들어짐
        - 요청이 하나인지 / 요청이 서로 다른 두 개인지!
        - forward 
    
          - 요청이 들어와서 서버가 내부적으로 옮겨주었을 뿐, 새로운 요청이 들어온 것은 아님
          - 이 client가 한 번 요청했을 때 만들어졌던 요청, 응답 객체가 그대로 유지됨!
    
  - ![2_4_2_forward](.\2_4_2_forward.png)
    
    1. 웹 브라우저에서 Servlet1에게 요청을 보냄
       - 클라이언트가 서버한테 요청을 보냄 => 서버가 받음
       - Servlet1이 클라이언트가 받은 요청을 혼자서 다 처리하지 않고(일정한 부분까지만 혼자 처리)
         - 나머지 부분을 다른 서블릿한테 넘겨줌 => forward
         - 이 서블릿이 마저 처리후 응답을 만들어 클라이언트한테 보내주는 것
    2. Servlet1은 요청을 처리한 후, 그 결과를 HttpServletRequest에 저장
       - Servlet1은 요청을 처리하고 이 요청에서 처리한 결괏값이 존재?
         - 어떻게 하지? Servlet2에선 쓸 수 없는데?
         - Servlet1도 접근이 가능하고 Servlet2도 접근이 가능한 누군가가 필요한 시점
         - 요청이 한 번 들어와서 응답이 나갈 때까지 없어지지 않는다
           - request, response 객체
       - Servlet1에서 처리한 결과를 Servlet2에서 또 사용해야 된다면 request 객체한테 저장을 해야만 함
    3. Servlet1은 결과가 저장된 HttpServletRequest와 응답을 위한 HttpServletResponse를 같은 웹 어플리케이션 안에 있는 Servlet2에게 전송 (forward)
       - WAS 안에 requeset, response 객체가 만들어져는 있지만
       - 이 request, response의 reference 변수를 알지 못한다면 사용할 수 없음
         - forward 할 때 인자로 request, response를 넘겨보냄
    4. Servlet2는 Servlet1으로 부터 받은 HttpServletRequest와 HttpServletResponse를 이용해 요청을 처리한 후 웹 브라우저에게 결과를 전송
    
  - 실습 
    
    
    - front라고 요청이 들어오면 WAS는?
    
    
      - 요청을 추상화한 객체에 HttpServletRequest와
    
      - 응답에 필요한 부분들을 추상화한 객체에 HttpServletResponse를 만들어냄
    
    - 이 서블릿이 실행될 때 (service 메서드를 호출 시)
      ```java
      protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      		// TODO Auto-generated method stub
      	}
      ```
      - 각각의 인자 값에다가 넣어서 보내줌
      
    - 값을 어디다가 맡기지? => request 객체
    
    
      - request 객체의 setAttribute가 존재
      - 여기다가 맡겨 놓는다고 생각하자
      - ex) `request.setAttribute('dice', diceValue)`
    
        - `'dice'` : 첫 번째 인자 - 우리가 정한 값, 나중에 값을 찾을 때 구별할 수 있는 key
        - `diceValue` : 두 번째 인자 - 실제 들어갈 값 
        - String, Object의 구성
    
          - Object - 뭐든 맡기게 하려고
          - 중요! setAttribute의 두 번재 인자는 Object!
    
      ```java
      protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      		// TODO Auto-generated method stub
      		int diceValue = (int)(Math.random() * 6) +1;
      		request.setAttribute("dice", diceValue);
      	}
      ```
    
    
      - forward하는 코드가 필요 
        - request가 가지고 있는 RequestDispatcher라는 객체가 존재
          - 인자로는 `어디로 이동할 거야`라는 것을 알려줘야 함
          - 경로는 반드시 `/`로 시작해야 함
          - 같은 웹 애플리케이션 안에서만 가능
            - 서버가 서버 내에서 움직이는 거라서
            - 다른 Application으로 간다던가 이런 것은 안 됨
          - `Content /` 이하의 값만 쓰면 됨
        ```java
        RequestDispatcher requestDispatcher = request.getRequestDispatcher("/next");
        ```
        - RequestDispatcher 객체를 만들어서 사용
          - forward 라는 메서드를 수행하면 됨
          - 인자는 반드시 request, response를 넘겨줘!
            - 해당 요청과 응답을 사용할 수가 있어
          ```java
          requestDispatcher.forward(request, response);
          ```
        - forward 받는 부분에선 (복습)
          - 나 이걸로 응답할거야 = response.setContentType
          - PrintWriter 객체를 얻어냄
          - 응답 결과로 이렇게 HTML 태그들을 텍스트 형태로 보내주면 됨
          - 주의!
            - `int dice = (Integer)request.getAttribute("dice")`
            - request 객체에 맡긴 부분을 찾아오는 코드
              - 값을 꺼냈을 때 Object가 나와서 Integer로 형 변환을 해주어야!
        ```java
        protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        		// TODO Auto-generated method stub
        		response.setContentType("text/html");
        		PrintWriter out = response.getWriter();
        		out.println("<html>");
        		out.println("<head><title>form</title></head>");
        		out.println("<body>");
        		
        		int dice = (Integer)request.getAttribute("dice");
        		out.println("dice : " + dice);
        		
        		out.println("</body>");
        		out.println("</html>");
        		
        	}
        ```
        
        - url에 따라 넘어가고 그 때 요청할 때 받았던 	
          - 응답을 이용해 응답의 결과물들을 만들어냄
        - redirect vs forward
          - redirect - url 바뀜 / forward - url이 바뀌지 않음
    
      - 서블릿 
        - 프로그램 로직을 개발하기에 편리
        - HTML 태그를 출력하기엔 불편 
      - JSP 
        - 프로그램 로직을 개발하기엔 불편
        - HTML 태그를 출력하기엔 편리 
      - 서블릿 <-> JSP : 서로 장단점이 반대 
  
- **Servlet & jsp 연동**

  - 서블릿, JSP - 상호 보완적인 관게

  - 서블릿과 JSP를 좀 더 잘 사용하기 위해 forward가 사용되는 경우가 많음
    - 서블릿 - 로직 구현 good / HTML 출력 bad
    - JSP - 로직 구현 bad / HTML 출력 good

  - forward, request.setAttribute(), request.getAttribute()
    - ![2_4_3_servlet_jsp](.\2_4_3_servlet_jsp.png)
    
    - Servlet
      - 프로그램 로직이 수행되기에 유리, IDE 등에서 지원을 좀 더 잘 해줌
      - 왜? 
        - 자바이기 때문에, JSP 에선 JAVA 코드 쓰려고 Scriptlet, 선언문 등 여러가지를 이용해서 사용
      
    - JSP
      
      - 결과를 출력하기에 Servlet보다 유리, 필요한 html문을 그냥 입력하면 됨
      
    - 프로그램 로직 수행은 Servlet에서, 결과 출력은 JSP에서 하는 것이 유리함 => Servlet과 JSP의 연동
    
    - Servlet, JSP의 장단점을 해결하기 위해 
      - Servlet에서 프로그램 로직이 수행되고
      - 그 결과를 JSP에게 포워딩하는 방법이 사용됨
      
    - forward할 때 도움을 주는 객체 => request 객체의 requestDispatcher라는 객체
    
      - request.getRequestDispatcher => 객체 얻어내기
        - 주의! 주소가 `WebContent`바로 밑에 있으면 result.jsp 이렇게 요청하면 됨
        - 해당 결과가 내부 디렉토리밑에 있으면 
          - `/jsp/result.jsp`처럼 작성해야 함
    
      ```java
      request.getRequestDispatcher("/result.jsp");
      // requestDispatcher 객체가 얻어짐 
      RequestDispatcher requestDispatcher = request.getRequestDispatcher("jsp/result.jsp");
      ```
    
      -  RequestDispatcher에 forward 해줘라는 요청이 필요
    
        - forward 시 반드시 request, response를 넘겨주어야 함
    
        ```java
        requestDispatcher.forward(request, response);
        ```
    
      - 서블릿에서처럼 실제 코드 이용해서 값을 꺼내와야 함
    
        ```jsp
        <% 
        int v1 = (int) request.getAttribute("v1");
        int v2 = (int) request.getAttribute("v2");
        int result = (int) request.getAttribute("result");
        %>
        <%=v1 %> + <%=v2 %> = <%=result %>
        ```
    
      - 서블릿 
    
        - v1, v2, result => request 객체에 담아 넘김
    
      - JSP 
    
        - 이 request 객체에 담긴 값을 getAttribute로 꺼냄
        - 해당 값을 출력해 이런 결과를 만들어내고 있는 것 확인 가능
    
      - 로직은 서블릿이 수행하게 하고 실제 응답 결과는 JSP에서 만들어내게 해야 함
    
      - forward라 실제 요청은 서블릿이 받았고 출력 결과를 만들어내는 것이 JSP던 뭐든 알 필요 없는 것
    
        - 실제로 URL은 바뀌지 않는다는 것!
        - JSP 파일이 자바로 바뀌는 거지만 서버 쪽보다는 출력을 담당하고 있는 부분
          - 디자인 요소 등이 들어갈 수 있는 부분
          - 자바 코드에 의한 거부감이 들 수 있어
          - 누구든 사용하기 편하게 대체할 수 없을까???
    
      - EL, JSTL이 점차 나오게 됨
    
        - `${v1 } + ${v2 } = ${result}` : EL 표기법
    
          - 간단하게 사용할 수 있음 
    
        - JSP에선 되도록 JAVA 코드를 줄이는 것이 좋음
    
          - EL, JSTL이 제공됨

    - 정리!
    
      - 클라이언트가 웹 브라우저로 로직 서블릿 요청 
      - 실제 WAS가 로직 서블릿을 실행시킴
        - 서블릿이 할 일을 하고 result.jsp로 forward
      - 포워드 받은 result.jsp가 응답 결과들을 만들어내고 해당 응답 결과를 response 객체에다 담아 
        - 웹 브라우저에 응답하고 있는 과정
    
    - 객체 지향에서 객체 - 관련된 것들을 모아 가지고 있는 특징 존재
    
      - 웹 page url도 관련된 URL이 있음
      - ex) 게시판 글쓰기, 읽기, 목록 보기 등은 모두 게시판과 관련된 URL
      - 하나의 서블릿이 여러 개의 요청을 받을 수는 없는가?
    
    - 서블릿 URL mapping에서 와일드카드(`*`)기호를 사용하면!