- Servlet 작성 방법 

  - 현재 프로젝트에서 웹을 개발할 때 서블릿을 직접 써서 개발하진 않음 

  - 더 편하게 사용할 수 있게 도와주는 다양한 프레임워크를 사용해서 개발하는 경우가 더 많음 

  - But, 그 프레임워크들도 서블릿이 없이는 동작할 수가 없음 

    - 서블릿의 기본적인 작성법 or 서블릿의 라이프 사이클을 이해 => 웹의 동작을 이해하는데 많은 도움이 됨

  - Servlet 버전에 따라 2가지로 나뉨

    1. Servlet 3.0 spec 이상에서 사용하는 방법

       - web.xml 파일을 사용하지 않음 
       - 자바 어노테이션(annotation)을 사용
       - 앞에서 실습했던 firstweb에서 사용

    2. Servlet 3.0 spec 미만에서 사용하는 방법 

       - Servlet을 등록할 때 web.xml 파일에 등록 

       ```xml
       <servlet>
       	<description></description>
           <display-name></display-name>    
       </servlet>
       ```

       - 조금 더 많은 코드들을 사용해야 되는 부분

  - 3.0 이상 - 조금 더 발전된 형태!

    ```java
    @WebServlet("/ten")
    public class TenServlet extends HttpServlet{
        
    }
    ```

    - 굉장히 간결 

- 실습 

  - Servlet 3.1 spec -> TenServlet (1부터 10까지 출력)

  - `http://localhost:8080/exam31/ten`으로 동작하도록 설정

  - 프로젝트 생성 시 Dynamic Web module version이라는 부분이 중요

  - Next 후 Source folder 확인해보면 src가 있고 , output 폴더가 build 밑 classes라는 디렉토리로 지정이 되어 있음 

  - cmd => tree /f라는 명령어로 디렉터리 구조를 살펴보았을 때 build라는 디렉토리에 classes라는 디렉토리가 만들어져 있었음

  - 이클립스 - 해당 디렉토리가 보이지는 않음 

  - 서블릿이 컴파일되면 이 컴파일된 클래스 파일은 이 디렉토리 안에 들어옴 

  - Next 하면, Context root 가 exam31이 되어 있어 

    - URL 요청 시 exam이라는 URL이 들어가게 됨

    - Generate web.xml deployment descriptor

      - web.xml 파일을 자동으로 만들까요라는 부분
      - 2점대 버전과 3점대 버전의 가장 큰 차이점
        - 서블릿은 web.xml 파일에다가 직접 등록을 하느냐 
        - 어노테이션 방법을 이용해서 하느냐의 차이

    - 3점 대는 어노테이션 방법을 이용 

      - web.xml이 필수는 아님
      - But, 스프링이라던가 사용하게 되면 서블릿을 3점 대로 만들었다 하더라도 
      - 다른 설정 부분을 web.xml에 추가해야 할 필요가 있기 때문에 
      - 그 때는 반드시 web.xml을 생성하게 체크를 해주어야 진행하는데 큰 무리는 없음

    - Create Servlet - URL mappings 

      - 실제 요청되는 URL 상에 가장 마지막 
      - 실제 TenServlet이라는 서블릿 파일을 요청 시 나는 이 이름으로 요청할게라는 걸 지정한 부분 
      - Edit 해서 ten으로 수정도 가능 

    - doGet 메서드 안에다 코드 작성 

    - 서블릿 - 동적으로 응답 결과를 만들어내는 것

      - 동적으로 만들어낸다는 것
        - 이미 응답할 페이지를 만들어서 가지고 있는 X
        - 요청이 들어왔을 때 이 프로그램이 실행되면서.
        - ex) ten이라고 요청을 하면 이 서블릿이 실행이 되면서 응답할 코드를 만들어 내고 
          - 그때 그 코드로 응답을 하게 하는 것 
          - 코드 내에서 내가 응답하고 싶은 내용이 나오게 만들어주면 됨

    - HTTP 프로토콜 

      - 요청, 응답 -> 클라이언트가 요청하면 서버는 응답해요 

      - 클라이언트가 요청할 때 서버 

        - 요청을 받아내는 객체와 응답을 하기 위한 객체 두 개를 자동으로 만들어 냄 
        - 요청에 대한 정보들 - 모두 HttpServletRequest 객체 안에 추상화시켜 가지고 있음 
        - 응답에 대한 부분들 - HttpServletResponse 객체 안에 가지고 있음 
          - ex) 응답으로 뭔가 돌려줘야겠다 했을 때엔 HttpServletResponse에다가 내용들을 넣어주어야 함
          - => response라는 객체에다가 응답을 할 거라고 알려주자

      - 클라이언트 - 브라우저 

        - 브라우저가 응답을 받았을 때 누군지 알아야 함

        - 이미지, 동영상, 무엇인지 알아내야 함 -> 알려줘야 함

        - 그게 setContentType(응답 결과에다가 이런 타입으로 보내줄게요)

          - 브라우저가 응답을 받았을 때 이게 뭔지 안다.
          - 이거에 맞게 해석해서 알맞게 보여줘야지 알 수 있음 

          ```java
          response.setContentType("text/html;charset=utf-8");
          // text로 보낼 거고 이 text는 html이에요라는 부분을 작성해준 것 
          ```

          - charset도 추가해 주면 좋음
            - charset이 클라이언트와 서버에서 보내주는 정보와 서로 맞지 않으면 안 됨
          - 그 후 보낼 내용을 넣어주자
            - 보낼 내용을 넣어줄 통로를 하나 얻어내야 함
            - response.getWriter 메서드가 존재함
            - response.getWriter 수행하면 PrintWriter라는 객체가 return 됨 
          - PrintWriter를 return 받을 수 있어 이 response가 가진 getWriter()를 수행해 PrintWriter 객체를 하나 얻어옴
          - 출력하는 메서드는 print 메서드를 사용
          - 서블릿은 자바랑 같음
          - 줄바꿈은 뭐.. br 이라는 태그 넣어주자
          - PrintWriter 객체는 다 사용하면 close하자

        - `@WebServlet("/ten")` : 이걸 확인할 수 있어 

          - 이 부분을 `@WebServlet("/ttt")`로 바꾸어 실행하면 URL 부분을 바꿀 수 있어 
          - 이 URL mapping이 뭐냐에 따라 요청하는 주소값이 달라짐
          - ten 요청하면 => 404 Error 나옴 

    - Servlet 3.0 spec 미만에서 사용하는 방법 

      - Servlet 2.5 spec 

      - `http://localhost:8080/exam25/ten`으로 동작하도록 설정 

      - Dynamic Web module version => 2.5

      - 여기선 Generate web.xml이 기본적으로 체크되어 있음

      - WEB-INF 폴더 내 web.xml 파일 존재 

        - Design, Source 탭이 존재

        - ```xml
          <?xml version="1.0" encoding="UTF-8"?>
          <web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" id="WebApp_ID" version="2.5">
            <display-name>exam25</display-name>
            <welcome-file-list>
              <welcome-file>index.html</welcome-file>
              <welcome-file>index.htm</welcome-file>
              <welcome-file>index.jsp</welcome-file>
              <welcome-file>default.html</welcome-file>
              <welcome-file>default.htm</welcome-file>
              <welcome-file>default.jsp</welcome-file>
            </welcome-file-list>
          </web-app>
          ```

        - 기본적으로 이런 내용으로 생성됨

          - 어노테이션이 보이지 않음

        ```java
        public class TenServlet extends HttpServlet{~~~~}
        ```

        - web.xml을 다시 열어보면

        ```xml
         <servlet>
            <description></description>
            <display-name>TenServlet</display-name>
            <servlet-name>TenServlet</servlet-name>
            <servlet-class>exam.TenServlet</servlet-class>
          </servlet>
          <servlet-mapping>
            <servlet-name>TenServlet</servlet-name>
            <url-pattern>/ten</url-pattern>
          </servlet-mapping>
        ```

        - 이러한 부분이 추가된 것을 알 수 있음
        - 서블릿 
          - 요청이 들어왔을 때 반드시 서블릿 이름으로 요청하지는 않기 때문
          - web.xml은 클라이언트가 요청할 때 이런 URL로 요청을 하게 되면 
          - servlet-name이 같은 서블릿을 찾아서 실제 class인 exam이라는 패키지 안에 있는 TenServlet을 실행시켜준다는 의미를 가짐
        - 정리
          - URL이 /ten 이라고 요청이 들어오면 이 URL mapping에서 찾아내고
            - 여기서 찾지 못하면 404라는 페이지가 보임( 나 그런 URL 모름 )
          - 만약 존재한다면, 확인하는 내용은
            - servlet-name이라는 엘리먼트
            - servlet-name이라는 이 이름을 가지고 실제 servlet이라는 태그 안에서 
            - 똑같은 이름의 servlet-name이 있는지를 확인하는 것 
            - 이 서블릿을 찾아 실제로 내가 실행시킬 서블릿이 누구지라는 정보를 찾아내는 것 
            - url-pattern에서 바꾸어주면 URL도 다른 것으로 요청을 바꿀 수 있음 
            - web.xml 파일이 바뀌면 서버는 반드시 restart돼야 된다는 것 
            - 실제 web.xml에 servlet-mapping 그 어디에도 ten이라는 값이 없어서 404 Error가 남
          - 3.0 이상 버전에선 이런 일들을 어노테이션이 대신해주는 것
          - 그 이전 버전에선 반드시 서블릿이 하나 만들어지면 web.xml에 해당 서블릿을 반드시 등록해야지 찾아서 실행시킬 수 있었다는 것!
        - 서블릿 - 버전이 어떻게 되느냐에 따라 서블릿을 생성하는 방법은 같지만 이 서블릿을 등록하는 방법이 조금은 다르다는 것