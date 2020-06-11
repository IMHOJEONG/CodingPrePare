- Web API 실습 

  - project 생성 후 archetype을 webapp으로 설정

  ```xml
  <plugins>
  			<plugin>
  				<groupId>org.apache.maven.plugins</groupId>
  				<artifactId>maven-compiler-plugin</artifactId>
  				<version>3.6.1</version>
  				<configuration>
  					<source>1.8</source>
  					<target>1.8</target>
  				</configuration>
  			</plugin>
  		</plugins>
  ```

  - 새로 생성한 pom.xml에 위 코드를 추가
  - web api를 위해 여러 라이브러리 추가
    - 밑 코드는 JSON 데이터를 이용해서 사용할 것이기 때문

  ```xml
  <dependency>
  			<groupId>com.fasterxml.jackson.core</groupId>
  			<artifactId>jackson-databind</artifactId>
  			<version>2.9.4</version>
  		</dependency>
  ```
    - 서블릿, JSTL 사용목적으로 라이브러리 추가	
  ```xml
  <dependency>
  			<groupId>javax.servlet</groupId>
  			<artifactId>javax.servlet-api</artifactId>
  			<version>3.1.0</version>
  			<scope>provided</scope>
  		</dependency>
  
  		<dependency>
  			<groupId>javax.servlet</groupId>
  			<artifactId>jstl</artifactId>
  			<version>1.2</version>
  		</dependency>
  ```

  - 저장 후 항상 Maven -> update project를 해주자
  
    - 그래야 반영됨
  
  - window -> navigator를 열어주셈
  
    - .settings 폴더 안 org.eclipse....core.xml 파일을 열어줌
  
    -  <installed facet="jst.web" version="2.3"/>
  
      - 이 부분을 3.1로 수정 필요
  
      - 그 후 eclipse 재시작 => Project Facets 부분을 보면
  
        - Dynamic Web module이 3.1로 바뀌었는지 확인
  
      - src -> main -> webapp -> WEB-INF의 web.xml 파일 확인
  
        - 우린 annotation을 이용해 서블릿을 설정
          - web.xml 파일을 삭제하자
  
      - pom.xml에서 properties의 failOnMissingWebXml
  
        ```xml
        <properties>
          	<failOnMissingWebXml>false</failOnMissingWebXml>
          </properties>
        ```
  
        - 이래야 오류가 발생하지 않음
          - 기본적으로 web.xml 자체를 찾으려고 하기 때문에 설정 자체에 찾지 말라고 설정을 해줌
  
    - src -> main 안에 java 폴더를 만듬
  
      - java 패키지와 class 파일들이 저장될 폴더
  
    - 그 후, kr.or.connect.webapiexam.api 패키지를 만듬
  
      - 지난 과제의 dto, dao 파일들을 같은 장소에 복사 붙여넣기 함
      - 이클립스에서 파일을 카피할 때는 반드시 이클립스 위에서 해야 함
        - 파일 탐색기에서 하면 이클립스가 인식을 잘 하지 못함
      
    - 모든 롤 정보 읽어오기. GET /roles
    
    - 특정한 롤정보 읽어오기. GET /roles/{roleId}
    
    - 롤정보 등록하기. POST /roles
    
    - 롤정보 삭제하기. DELETE /roles/{roleId}
    
    - 롤정보 수정하기. PUT /roles/{roleId}
    
      - 이것들을 하나의 서블릿으로 처리 불가
      - doGet 등 http 메서드로 구현을 해야함
    
    ```java
    response.setCharacterEncoding("utf-8");
    		response.setContentType("application/json");
    // 실행 중 파일 다운로드가 나오면 
    	// 버전에 따라서 인식을 못함 => IE 8, 9에서!
    // json 파일로 응답을 받기 위함
    ```
    
    - RoleDao dao = new RoleDao();로 객체 생성
    
    - List<Role> llist = dao.getRoles()로 얻어오고
    
    - ObjectMapper objectMapper = new ObjectMapper();
    
      - pom.xml에 추가한 json 라이브러리가 제공하는 객체
      - json 문자열로 바꾸거나 json 문자열을 객체로 바꾸는 역할을 수행해주는 객체
      - writeValueAsString 이라는 메서드를 이용하면
        - 파라미터로 list를 넣어주면 해당 list가 JSON 문자로 바뀌어 리턴을 해줌
        - JSON Formatter로 chrome에서 이쁘게 확인 가능
    
    - JSON - Javascript Object Notation의 약어
    
      - 아주 가벼운 형태의 메시지 교환 형식 
    
    - 수행 시 Maven이 어떤 라이브러리를 제대로 인식하지 못해
    
      - Maven Dependency에 다 있어도 인식 제대로 못하는 경우 존재 => Eclipse 자체 문제도 있음
      - 파일 탐색기를 열어 확인해보면
        - C -> User -> .m2 디렉토리 
          - repository가 있음
          - 사용하는 라이브러리들이 여기다 있어
          - 여기선 다 있지만 제대로 import 안 되는 문제
        - 어떻게?
          - eclipse를 닫고 .m2를 삭제 해준 후 실행을 시켜준다!!!
          - Maven -> Update!!
          - 라이브러리를 잘 읽어오더라 
    
      ----------
    
    - path => /roles/* 어떤 문자던지 올 수 있다는 의미
    
    - String pathInfo = request.getPathInfo(); // /roles/{roleId}
    
      - 이것으로 path 정보를 가져옴
      
    - JDBC, Servlet을 직접 이용하는 것은 드문 경우
    
      - 이런 식으로 만들어지는 구나라고 경험해보면서 만들어 봄
      - 다음 Part에서 Spring FrameWork로 API를 작성!
      - 