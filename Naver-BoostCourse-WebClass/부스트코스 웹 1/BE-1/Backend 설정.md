- JDK 다운받기 및 설치하기
  - JAVA 언어를 이용하여 개발하기 위해선 JDK(JAVA SE Development Kit)이 컴퓨터에 설치되고 환경설정이 알맞게 되어 있어야 함
  - JDK를 운영체제 별로 설치 ㄱㄱ
  - JDK, JRE
  - JAVA 언어를 사용하는 개발자가 아니라 JAVA 언어로 만들어진 프로그램을 실행하는 사용자 ==> JRE만 있어도...
  - JAVA 언어로 작성된 Source를 컴파일하고 관리할 필요가 있음
    - JDK!
    - JDK안에는 JRE도 포함됨, 컴파일한 결과를 실행하기 위해선 JRE가 필요하기 때문
- 환경 설정하기 
  - JDK를 설치한 이후엔 JDK를 콘솔 환경에서 잘 실행될 수 있도록 시스템 환경 설정을 해야 함
  - 시스템 환경 설정도 OS에 따라 다름
  - But, 설정해야 할 환경변수의 이름은 같음
    - JAVA_HOME : JAVA가 설치된 경로를 지정
    - CLASSPATH : JAVA 클래스가 있는 경로들을 지정
    - PATH : JAVA 실행파일이 있는 경로를 추가 
  - JAVA_HOME, CLASSPATH - 시스템 환경변수에 새롭게 추가될 환경 변수 
  - PATH - 기존에 존재하는 환경 변수
- 이클립스 다운받기 및 설치하고 인코딩 설정하기 
- HelloWorld 컴파일하고 실행하기
  - 이클립스에서 프로그램 제작 
    - 프로젝트를 하나 생성해야 함
    - 하나의 프로젝트는 하나의 클래스 파일로 구성되어 있을 수도 있음, 여러 개의 파일들로 구성되어 있을 수도 있음
    - File - New - Project 
    - 프로젝트의 이름은 첫 글자를 대문자로 시작해서 사용하는 것이 좋음!
    - 기본적으로 이클립스를 실행할 때 사용한 JRE 버전이 1.8이 사용되고 있는 것을 알 수 있음
    - Java perspective로 변경하겠느냐라는 메시지가 보임
    - Perspective - 작업 공간, JAVA EE - 웹 어플리케이션을 만들 때 굉장히 편리한 환경을 제공해 줄 것
    - Java perspective - 자바 애플리케이션을 만들 때 편리한 환경 
    - 콘솔에서도 dir, cd, tree /f를 사용해서 확인 가능 
      - 볼 수 없던 파일들을 볼 수 있어
    - 이클립스 - .으로 시작하는 파일들에는 굉장히 중요한 설정들이 들어있음
      - 해당 파일을 직접 수정 or 삭제하면 제대로 동작하지 않음
      - src 폴더 - 작성된 소스가 저장될 때 자동으로 컴파일돼서 bin이라는 디렉토리로 클래스 파일이 저장됨
      - 기본적으로 JAVA class의 첫 글자는 대문자로 시작하는 것이 약속임!
      - 약속은 서로 지켜주어야 함, 프로젝트는 소문자로 ㅠㅠ
    - bin이라는 디렉토리에도 first라는 디렉토리, Hello.class 파일이 만들어져 있는 것을 알 수 있음
    - 자바 문법에 맞지 않게 소스 파일을 작성했거나 컴파일이 제대로 되지 않았다면 여기에 생성이 되지 않을 것
    - Run -> Run As -> Java Application이라는 메뉴를 실행하면 됨
- Tomcat 다운받기 및 설치하기
  - 웹 어플리케이션을 실행하기 위해서도 필요한 것이 있음 
  - WAS => Apache Tomcat은 WAS 중 하나 
  - 웹 어플리케이션을 실행하기 위해서 필요함 -> 설치 ㄱㄱㄱ
  - 포트 번호를 전부 바꿈 => 이미 사용 중이래 ㅠㅠㅠ
    - 8995, 8080, 8989로 포트 번호를 변경
    - 이거 주의!
- HelloWorld 서블릿 컴파일 및 실행하기
  - 자바 웹 어플리케이션, HttpServlet, Dynamic Web Project 
  
  - 자바 웹 애플리케이션 생성시 프로젝트 생성 필요
  
    - 프로젝트 생성 시 Perspective가 Java perspective로 선택이 되어 있었느냐, JAVA EE Perspective로 선택이 되어 있었느냐에 따라 메뉴의 구성이 변화
    - Java EE - 웹 애플리케이션을 만들 때, 조금 더 편한 환경을 제공 
      - File 내부 프로젝트 선택 구성이 달라짐 
    - Java - 자바 애플리케이션 만들 때 더 편한 환경 제공
    - 웹 애플리케이션 - 혼자 실행될 수 없고 반드시 WAS 안에 있어야지 실행이 됨 
    - Target runtime 지정하자 - Apache Tomcat 8.5
    - Tomcat installation도 지정
    - 디렉터리 구조 
      - 콘솔 창에서 보이지 않는 디렉토리도 살펴보자
      - ![qwerqerqer](https://user-images.githubusercontent.com/11308147/61573308-32ebeb00-aae7-11e9-9da3-c1525f8fa8e5.PNG)
    - 웹 애플리케이션을 구성하기 위해서는 이러한 파일, 디렉토리들이 필요하다!
  
  - 프로젝트에 서블릿 등록!
  
    - 서블릿 - URL 요청을 처리하는 프로그램
  
    - New -> Servlet -> Java package 
  
      - URL mappings가 매우 중요 
  
      - HelloServlet 클래스가 WAS에 배포될 때 사용할 이름을 지정하는 것 
  
      - 클래스 이름과 같은 HelloServlet이라고 입력이 되어있는 것을 알 수 있음 
  
      - 기본으로 이클립스가 이렇게 해줌 
  
      - 이클립스 
  
        - runtime으로 설정된 WAS에 규칙이 있는 URL로 서블릿을 실행하도록 설정을 함
          - http://localhost:8080/{프로젝트이름}/{URL Mapping 값
          - http://localhost:8080/firstweb/HelloServlet
          - 프로토콜, IP, 서버 도메인, 포트, 프로젝트, URL Mapping 값
        
        - HTTP Request - 첫 번째 줄에 메서드가 존재(GET, POST, PUT, DELETE 등이 있음)
      
        - 웹 브라우저가 GET 메서드 방식으로 요청을 보낼 때 서블릿에 doGet() 메서드가 호출이 됨
      
            - Get 메서드  - 웹 브라우저가 서버에게 문서를 요청할 때 사용하는 방식 
      
            - 실제 뭔가 응답이 들어왔을 때, 일을 처리해주는 메서드 => doGet()
      
            - response.setContentType()  
      
                - 응답 결과를 보내줄 이 객체에다가 ContentType이라는 것을 정해줌 
      
            - response 객체 - 응답할 내용들을 몽땅 모아서 추상화해놓은 객체 
      
            - 이 응답 결과가 뭐라는 것을 브라우저한테 알려줘야지 
      
                - 브라우저가 이 ContentType을 보고 지금 들어온 게 뭐구나라고 해석을 잘 해줄 수가 있음 
                - ex) 난 응답 결과를 text로 보낼 텐데 이 text는 html이야
                    - response.setContentType("text/html");
      
          - charset이라는 부분을 추가해주면 좋음!
      
            - charset이 조금씩 다르면 한글이 제대로 보이지 않는 경우가 생김 
            - 응답 결과를 보내는데 나의 charset은 UTF-8이야 라고 알려주는 거라고 생각하자 
            - response.setContentType("text/html;charset=UTF-8");
      
          - 응답 결과는 이런 내용으로 갈 거야라고 알려줬다면
      
            - 실제 이런 텍스트를 써주어야 함
            - 이 쓸 수 있는 통로를 우리가 얻어와야 함
      
          - 자바 기본의 io => io의 객체 중 PrintWriter라는 객체가 존재함
      
            - 어디다가 무엇을 써야 될 때 가장 많은 메서드들을 가지고 있기 때문 => 편하게 사용 가능 
            - response가 가지고 있는 getWriter라는 메서드 호출 시 PrintWriter 객체를 return 해줌 
            - 이 통로에 응답 결과를 우리가 보내준 내용들을 써주면 됨
      
            ```java
            PrintWriter out = response.getWriter();
            out.print("<h1>Hello Servlet</h1>");
            ```
      
            - h1 태그를 앞 뒤에 넣어 조금 더 크게 가능 
      
          - 작성한 서블릿 실행 -> src 폴더 안에 보면 서블릿이 하나 만들어져 있음 => Run as => Run on Server
      
          - 실행하면 이클립스가 내부적으로 톰캣을 이용하고 있음 => console 창에서 톰캣을 실행하고 있다는 것을 확인 가능 
      
          - 매번 실행할 때마다 밖에 있는 다른 브라우저를 이용해서 보고 싶다면??
      
            - 해당 설정도 바꾸어줄 수 있음
            - 메뉴 Window -> Web Browser에서 변경
      
            
      
          
  