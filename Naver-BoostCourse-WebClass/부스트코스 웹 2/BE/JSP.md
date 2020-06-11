- **JSP**

  - Microsoft의 ASP(Active Server Pages)와 같은 Script 형태의 개발 방법이 인기

  - JAVA 진영에서 대항하기 위한 JSP - 스크립트 언어

  - 서블릿 => ASP에 비해 상대적으로 개발방식이 불편

  - JSP - 실제로 서블릿 기술을 사용

    - HTML, CSS, JavaScript, JSP - WebContent 폴더 안에!
    - `<%` : JSP의 약속된 몇 가지 기호들
      - 기호가 무엇이냐에 따라 JSP가 서블릿으로 바뀔 때 이렇게 바꿔야겠구나! 라고 결정하는 것!
      - 서블릿으로 바꿀 때 어떻게 바꿔야 하지라는 개념
    - JSP - JSP 자체가 동작하는 게 아니라 모든 JSP는 서블릿으로 바뀌어서 동작함
    - `<%@` : 지시자 -> `<%@ page` : page 지시자

    ```jsp
    <%@ page language="java" contentType="text/html; charset=UTF-8"
        pageEncoding="UTF-8"%>
    ```

    - language는 Java

    - 응답 결과에 포함할 수 있는 것 = response 객체 

      - PrintWriter 객체로 활용 후 response.setContentType 넣어준 경우랑 비슷

    - JSP로 출력되는 결과를 받는 브라우저한테 UTF-8이라는 문자 셋으로 된 HTML 문서라는 것을 알려줌

    - pageEncoding - JSP 파일 자체가 UTF-8로 되어있어라는 것을 알려주는 것

      - Encoding 부분이 맞지 않으면 한글이 깨져서 보인다거나 나올 수 있음

    - 이러한 지시를 듣는 것은 JSP를 실행하는 WAS라고 생각!

    - 지시문 다음에는 보통 HTML 코드가 나옴

      - 왜? html 안에서 JSP를 사용하는가?
      - html 안에서 프로그램을 실행시켜주고 싶은 것
        - 자바 코드를 넣을 수 있다!
      - `<% %>`: 자바가 들어있음 - Scriptlet
        - 자바코드를 입력할 수 있는 부분이다.

    - 서블릿에서 자바 코드를 막 실행시킨다고 해도

      - response의 out.println에다가 넣어주지 않으면 
      - 실제 응답으로는 들어가지 않았었던 것!

    - 여기에서 얻어낸 값을 반드시 사용자의 브라우저한테 응답 결과로 주고 싶음!

      - `<%= `: 표현식에 넣어주자, 응답 결과에 넣고 싶은 자바 코드 

      ```jsp
      1부터 10까지의 결과 <%= total %>
      ```

    - Scriptlet은 `<% %>`만 없애고 그대로 Java 코드로 바뀔 부분

    - 표현식 부분은 `<%= %>`out.print로 바뀜

    - JSP를 볼 때, 이 JSP가 서블릿으로 바뀔 때 어떻게 바뀔까?

- **JSP 라이프 싸이클**

  - WAS - 웹 브라우저로부터 JSP에 대한 요청을 받게 되면, 

    - JSP 코드를 서블릿 소스코드로 변환 후 컴파일 하여 실행되게 됨
    - 서블릿으로 컴파일되어 실행될 때, 상황에 따라 어떤 메소드들이 실행되는가? => JSP 작성 방법
    - JSP 라이프 싸이클, JSP -> init, destroy 

  - sum10.jsp 최초 실행 -> 특별한 형태의 서블릿으로 소스가 변환

  - Tomcat을 사용하게 되었을 때, 이 Tomcat이 JSP를 서블릿으로 바꾸게 됨

  - `.metadata\.plugins\org.eclipse.wst.server.core\tmp0\wtpwebapps`

    - 우리가 했던 실습들이 들어있는 것 확인가능

  - `D:\2019EclipseWorkSpace\.metadata\.plugins\org.eclipse.wst.server.core\tmp0\work`

    - JSP -> 서블릿으로 바뀐 코드가 들어 있음
    - 이런 부분들 - WAS의 약속
    - `work\Catalina\localhost`에 우리가 작성했었던 Web Application들이 하나씩 들어있는 걸 확인 가능
      - `\work\Catalina\localhost\firstweb\org\apache\jsp` - 예시
      - JSP가 sum10_jsp.java 로 바뀌어 볼 수 있는 것 확인 가능
      - 우리가 만든 코드 -> 기본적으로 Service라는 메서드 안에 그대로 만들어 짐

  - JSP -> 서블릿으로 만들 때 (자바 코드로 만들 때)

    - 알아서 만들어 놓는 객체들도 존재 = 내장 객체

    ```java
    out.write("\r\n");
    out.write("<!DOCTYPE html>\r\n");
    out.write("<html>\r\n");
    out.write("<head>\r\n");
    out.write("<meta charset=\"UTF-8\">\r\n");
    out.write("<title>Insert title here</title>\r\n");
    out.write("</head>\r\n");
    out.write("<body>\r\n");
    out.write("\r\n");
    
    	int total = 0;
    	for(int i = 1;i <= 10;i++)
    	{
    		total = total + i;
    	}
    
    out.print( total );
    ```

    - JSP 안에 있던 HTML 코드 -> out.write로 표현됨
      - Scriptlet -`<%`만 빼고 그대로 바뀌는 거 확인 가능 
      - 표현식 -> out.print로 바뀌어 있음

  - JSP로 작성된 코드 => 특수한 형태의 서블릿 소스로 생성이 됨!

  - sum10.jsp가 실행되면?

    - Eclipse Workspace 아래 .metadata 폴더에 sum10_jsp.java 파일이 생성됨!
    - 해당 파일의 _jspService() 메소드 안을 살펴 보면 jsp 파일의 내용이 변환되어 들어가 있는 것을 확인 가능
    - sum10_jsp.java - 서블릿 소스로 자동으로 컴파일 되면서 실행되서 그 결과가 브라우저에 보여짐

  - JSP의 실행 순서 

    1. 브라우저가 웹 서버에 JSP에 대한 요청 정보를 전달
       - JSP로 요청이 들어왔을 때는 서버는?
         - JSP에 해당하는 서블릿이 존재하는가?
         - 존재한다면 바로 이 서블릿 엔진이 
           - 요청을 받아서 서블릿 라이프 사이클대로 실행을 하게 될 거고
         - 존재하지 않는다면 JSP 엔진이 그것을 받아
           - 알맞는 서블릿으로 만들고 컴파일하고 이 서블릿 객체를 생성하는 일들을 수행을 하겠다
    2. 브라우저가 요청한 JSP가 최초로 요청했을 경우만
       1. JSP로 작성된 코드가 서블릿으로 코드로 변환함(Java 파일 생성) 
       2. 서블릿 코드를 컴파일해서 실행가능한 bytecode로 변환함 (class 파일 생성)
       3. 서블릿 클래스를 로딩하고 인스턴스를 생성함! => JSP 엔진이
    3. 서블릿이 실행되어 요청을 처리하고 응답 정보를 생성함

  - out.println / System.out.println의 차이

    - 목적지가 다른 거 
    - response한테 받아온 out => 응답 결과의 out
    - System.out=> 콘솔을 의미

  - Servlet의 Init, Destroy 메서드 - 서블릿의 lifeCycle

    - 처음 요청했을 때 init, Service가 실행이 되었고
    - 두 번째 요청했을 때는 Service만
    - 수정 or 다시 WAS가 종료가 되었거나 한 다음에 다시 시작하면
      - Destroy가 한 번 호출이 되고 다시 init, Service 이렇게 호출됐었던 것
    - JSP도 마찬가지!

  - Scriptlet, 표현식을 썻든 Service라는 메서드에 계속 해당 부분의 코드가 추가가 되는 것! 

    - Serivce라는 메서드 안에만 들어와 변경이 되고 있어!

    - 응답에 포함되는 건 Service 밖에 없어 => 매번 호출되는 게!

    - 그럼 JSP에선 Service 밖에 못쓰나? ㄴㄴㄴ

    - `<%!`라고 쓰는 선언식이 존재

      - 이 클래스에 메서드를 선언 or 필드 선언 시 넣어주면
      - Service라는 메서드 내에 만들어지는 것이 아닌
      - 이 메서드 바깥쪽에 해당 코드들이 만들어지게 할 수 있음

      ```jsp
      hello~
      <%
      	System.out.println("jspService()");
      %>
      
      <%!
      	public void jspInit(){
      		System.out.println("jspInit()");
      	}
      
      	public void jspDestroy(){
      		System.out.println("jspDestroy()");
      	}
      %>
      ```

    - JSP - Init or Destroy에서 이 JSP를 실행시키기 전 뭔가 초기화할 게 있어?

      - 해당 메소드를 추가해서 넣어둘 수 있음 
      - Service 메서드 내부가 아닌 바깥쪽에 포함되어 있다는 것을 확인 가능

      ```java
      public final class lifecycle_jsp extends org.apache.jasper.runtime.HttpJspBase
          implements org.apache.jasper.runtime.JspSourceDependent,
                       org.apache.jasper.runtime.JspSourceImports {
      
      
      	public void jspInit(){
      		System.out.println("jspInit()!!!");
      	}
      
      	public void jspDestroy(){
      		System.out.println("jspDestroy()");
      	}
      ```

- **JSP 문법**

  - JSP - HTML 태그 & 자바코드를 섞어서 개발 가능 

  - 선언문(Declaration), 스크립트릿(Scriptlet), 표현식(Expression), 주석(Comment) 

    - 스크립트 요소의 이해 

      - JSP 페이지 - 선언문, 스크립트릿, 표현식 제공
      - `선언문 (Declaration) - <%! %>`
        - 전역변수 선언 및 메소드 선언에 사용
      - `스크립트릿(Scriptlet) - <% %>`
        - 프로그래밍 코드 기술에 사용
      - `표현식(Expression) - <%= %>` 
        - 화면에 출력할 내용 기술에 사용
        - 응답 결과에 포함할 부분을 넣을 떄 사용하는 부분

    - 선언문(Declaration)

      - `<%! %>`
      - JSP 페이지 내에서 필요한 멤버변수 or 메소드가 필요할 때 선언해 사용하는 요소
      - 문법 : `<%! 문장 %>`
      - 내부적으로 서비스 메서드가 아닌 클래스 Body 쪽에 해당 코드가 바뀌는 것
      - 실제 JSP 파일 내 코드가 문서 어디에 있는지는 중요하지 X
        - Java로 바뀔 때 <% 이런거로 결정되는 거라서

      ```jsp
      id : <%=getId() %>
      	<%!
      		String id = "u001"; // 멤버변수
      	    public String getId() // 메소드
      	    {
      	    	return id;
      	    }
      	%>
      ```

      - <%! => import되는 것을 볼 수 있어 
        - 자바 코드로 바뀔 때 위치가 바뀜
      - 실제 사용하는 부분은 Service 메서드에 만들어짐

    - 스크립트릿(Scriptlet)

      - `<% %>`

      - 가장 일반적으로 많이 쓰이는 스크립트 요소

      - 주로 프로그래밍의 로직을 기술할 때 사용

      - 스크립트릿에서 선언된 변수 = 지역변수

      - 문법 : `<% 문장 %>`

      - 여기서 선언된 변수는 다 Service라는 메소드 안에 선언되는 변수!

      - 출력하는 구문에 HTML 태그나 이런 것들 쓰고 싶다면?

        - 스크립트릿 안에 있는 것이 응답 결과에 포함되지는 않는데?
        - 스크립트릿을 쪼개서 사용할 수 있어!
          - 사이에 작성된 코드 구문들이 반복적으로 나타날 수 있어

        ```jsp
        <%
        	for(int i=0; i <= 5; i++){
        %>
        <H<%=i %>>아름다운 한글</H<%=i %>>
        <%
        	}
        %>
        ```

        - 이 결과를 확인할 수 있음

      ```java
      for(int i=0; i <= 5; i++){
      out.write("\r\n");
      out.write("<H");
      out.print(i );
      out.write(">아름다운 한글</H");
      out.print(i );
      out.write('>');
      out.write('\r');
      out.write('\n');
      }
      ```

    - JSP! - 저 JSP가 서블릿으로 바뀔 때 어떻게 바뀔까???

      - 매우 중요한 부분!

    - 표현식(Expression)

      - `<%= %>`
      - JSP 페이지에서 웹 브라우저에 출력할 부분을 표현
        - 화면에 출력하기 위한 것
      - 스크립트릿내에서 출력할 부분은 
        - 내장객체인 out 객체의 print() or println 메소드를 사용해서 출력
      - `<%=문장%>`

    - 주석(Comment)

      - JSP페이지에서 사용할 수 있는 주석
        - HTML주석, 자바주석, JSP 주석
        - 언제 주석으로써의 역할을 할까?
          - JSP 주석
            - 주석 자체가 JSP의 주석이기 때문에 서블릿으로 안 바뀜
          - 자바 주석
            - 자바로 다 바뀜
            - 바뀌지만 실제 자바 코드가 실행될 때 주석이기 때문에 실행이 안 됨
          - HTML 주석
            - 자바로도 바뀌고 자바에서 실행도 됨, 응답 결과에도 포함도 됨
            - 실제 이 응답 결과가 넘어왔을 때, 
              - 브라우저가 HTML을 보여줄 때 주석임을 인지하기 때문에
                - 그 때는 화면에 안 보여줌
      - HTML 주석
        - `<!--로 시작 해서 -->로 끝나는 형태`
        - HTML 주석을 사용한 페이지를 웹에서 서비스할 때 
          - 화면에 주석이 내용이 표시되지는 않으나 
          - 소스보기 => HTML 주석 내용 화면에 표시
        - 다 바뀌고 응답까지도 들어가는!
      - JSP 주석
        - JSP 페이지에서만 사용됨 
        - `<%-- 로 시작해서 --%>`로 끝나는 형태
        - 해당 페이지를, 웹 브라우저를 통해 출력 결과로서 표시 or 웹 브라우저 상에서 소스 보기를 해도 표시되지 않음
        - JSP 주석 내 실행코드를 넣어도 그 코드는 실행되지 않음
      - 자바 주석
        - `//, /**/`을 사용해서 작성
        - `//`- 한 줄 짜리 주석을 작성할 때 사용
        - `/**/` - 여러 줄의 주석을 작성할 때 사용
        - JSP -> 자바로는 바뀌지만 자바를 실행시킬 때 주석이라 실행이 안 되는 점!
        - 스크립트릿 or 선언문에 사용되는 주석
          - 자바와 주석 처리 방법이 같음

      ```jsp
      <%-- jsp 주석입니다!!! 
      	여러 줄로 사용 가능합니다!
      --%>
      <!-- html 주석입니다.  -->
      <%
      	// 자바 주석입니다.
      	for(int i=0; i <= 5; i++){
      %>
      ```

    - 각각의 주석이 언제 주석으로써의 역할을 하는지 생각!

      - 주석이 주석일 때의 위치가 다를 수 있음

- **JSP 내장 객체**

  - JSP - 개발자가 선언하지 않아도
    
    - 사용할 수 있는 미리 선언된 변수가 존재 => 내장 객체
    
  - request, response, out, application, page, session
    - JSP를 실행하면 서블릿 소스가 생성 & 실행됨
    - JSP에 입력한 대부분의 코드
      - 생성되는 서블릿 소스의 _jspService() 메소드 안에 삽입되는 코드로 생성됨
    - _jspService()에 삽입된 코드의 윗 부분에 미리 선언된 객체들이 있음 
      - 해당 객체들은 Jsp에서도 사용 가능함
    - response, request, application, session, out과 같은 변수를 내장객체라고 함
    - ![2_3_4_jsp_](.\2_3_4_jsp_.png)
    
  - 내장 객체를 어떻게 사용했지가 매우 중요한 부분!
  
    - 자바 - 항상 모든 변수가 선언이 되어 있어야지만 사용 가능
    - 파일 내 request 객체를 선언한 적은 없음 
  
    ```jsp
    <body>
    <%
    	StringBuffer url = request.getRequestURL();
    %>
    </body>
    ```
  
    - request, out과 같은 내장 객체들이 이미 JSP가 서블릿으로 바뀔 때 만들어서 가지고 있음!
      - 따로 선언 or 생성하지 않아도 충분히 가져다 사용
    - Scope 관련된 객체들도 존재
    - JSP - 서블릿으로 바뀌어서 실행됨! => 이게 매우 중요 & 항상 기억 