- **Maven**

  - 프로젝트에 참여하는 사용자가 많아질수록 라이브러리의 관리는 어려워짐

  - 프로젝트가 복잡해질수록 소스를 컴파일 & 배포하는 것도 점점 어려워짐

    - Maven, CoC, pom.xml

    - Maven이란?

      - 애플리케이션을 개발하기 위해 반복적으로 진행해왔던 작업들을 지원하기 위하여 등장한 도구
      - Maven을 사용하면 
        - 빌드(Build), 패키징, 문서화, 
        - 테스트와 테스트 리포팅, git, 의존성 관리, SVN 등과 같은 형상관리서버와 
        - 연동(SCMs), 배포 등의 작업을 손쉽게 할 수 있음
      - Maven을 이해하려면 CoC(Convention over Configuration)라는 단어를 먼저 이해해야 함
      - CoC - 일종의 관습을 말함
        - ex) 프로그램의 소스파일은 어떤 위치에 있어야 하고, 
        - 소스가 컴파일된 파일들은 어떤 위치에 있어야 하고 등을 미리 정해놨다는 것
          - 관습에 이미 익숙한 사용자는 쉽게 Maven을 사용할 수 있음
          - 관습에 익숙하지 않은 사용자는 이러한 제약사항에 대해 심한 거부감을 느낄 수 있음
      - 어쩌면 이러한 관습 & CoC에 대해 알아나가는 것

    - Maven을 사용할 경우 얻게 되는 이점

      - 의존성 라이브러리 관리
      - 관련된 라이브러리가 많아질수록 이러한 방식은 상당히 불편해짐
      - 설정 파일에 몇 줄 적어줌으로써 직접 다운로드 or 라이브러리를 사용할 수 있음
      - 프로젝트에 참여하는 개발자가 많아지게 되면
        - 프로젝트를 빌드하는 방법에 대해 가이드하는 것도 쉬운 일이 아님
        - Maven을 사용하게 되면 Maven에 설정한 대로 모든 개발자가 일관된 방식으로 빌드를 수행할 수 있음
      - 또한 다양한 플러그인을 제공해줘서, 굉장히 많은 일들을 자동화시킬 수 있음

    - Maven 기본 

      ```xml
      <project xmlns="http://maven.apache.org/POM/4.0.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
          <modelVersion>4.0.0</modelVersion>
          <groupId>kr.or.connect</groupId>
          <artifactId>examples</artifactId>
          <packaging>jar</packaging>
          <version>1.0-SNAPSHOT</version>
          <name>mysample</name>
          <url>http://maven.apache.org</url>
          <dependencies>
              <dependency>
                  <groupId>junit</groupId>
                  <artifactId>junit</artifactId>
                  <version>3.8.1</version>
                  <scope>test</scope>
              </dependency>
          </dependencies>
      </project>
      ```

      - Archetype을 이용해 Maven 기반 프로젝트를 생성할 경우 생성된 프로젝트 하위에 pom.xml 파일이 생성
      - `project` : pom.xml 파일의 최상위 루트 엘리먼트(Root Element)
      - `modelVersion` : POM model의 버전
      - `groupId` : 프로젝트를 생성하는 조직의 고유 아이디를 결정, 일반적으로 도메인 이름을 거꾸로 적음
      - `artifactId` : 해당 프로젝트에 의해 생성되는 artifact의 고유 아이디를 결정, Maven을 이용하여 pom.xml을 빌드할 경우 다음과 같은 규칙으로 artifact가 생성됨
        - `artifactid-version.packaging` 위 예의 경우 빌드할 경우 examples-1.0-SNAPSHOT.jar 파일 생성
      - `packaging` : 해당 프로젝트를 어떤 형태로 packaging 할 것인지 결정
        - jar, war, ear 등이 해당 
      - `version` : 프로젝트의 현재 버전, 추후 프로젝트가 개발 중일 때는 SNAPSHOT을 접미사로 사용함
        - Maven의 버전 관리 기능은 라이브러리 관리를 편하게 함
      - `name` : 프로젝트의 이름
      - `url` : 프로젝트 사이트가 있다면 사이트 URL을 등록하는 것이 가능함
      - Maven을 이용할 경우 큰 이점 중 하나는 Dependency Management 기능
      - pom.xml 파일에서 `<dependencies />` 엘리먼트가 Dependency Management 기능의 핵심이라고 할 수 있음
      - 해당 엘리먼트 안에 필요한 라이브러리를 지정하게 됨

- **Maven을 이용한 웹 어플리케이션 실습**

  - pom.xml, project facet, project properties menu
  
  - File - New - Project 
  
  - 프로젝트 위자드 -> Maven -> Maven project
  
    - ![maven01](.\maven01.png)
    - Archetype 선택 부분
      - ![maven03](.\maven03.png)
    - Archetype - 일종의 프로젝트 템플릿(Template)
      - 어떤 아키타입을 선택했느냐에 따라 자동으로 여러 가지 파일들을 생성 or 라이브러리를 셋팅 등의 일을 해줌  
  
  - GroupId - 보통 프로젝트를 진행하는 회사 or 팀의 도메인 이름을 거꾸로 적음
  
  - ArtifactId - 해당 프로젝트의 이름
  
  - 버전 - 보통 기본값(0.0.1-SNAPSHOT)으로 설정
  
  - package 이름 - group id와 Artifact Id가 조합된 이름이 됨
  
  - Group Id를 kr.or.connect이고 Artifact Id가 mavenweb으로 설정했기 때문
  
    - package 이름은 kr.or.connect.mavenweb이 됨
    - ![maven04](.\maven04.png)
  
  - 프로젝트가 생성된 프로젝트의 Directory 구조
  
    - ![maven05](.\maven05.png)
  
    - Maven으로 생성된 프로젝트의 경우
  
      - 자바 소스는 src/main/java 폴더에 생성됨
      - 웹 어플리케이션과 관련된 html, css 등
        - src/main/webapp 폴더에서 작성해야 함
        - 생성된 프로젝트를 보면 src/main/java가 없어 
          - 필요한 폴더는 별도로 만들어줄 필요가 있음
      - ![_](.\_.png)
      - 필요한 폴더 만들기
        - ![maven07](.\maven07.png)
        - 프로젝트를 선택 후 우측 버튼으로 properties 
          - Java Compiler 메뉴
          - Maven으로 프로젝트를 생성하면 기본적으로 JDK 1.5를 사용하게 됨
          - JDK8을 사용하도록 하려면 Maven 설정 파일인 pom.xml 파일을 수정해야 함
  
      ```xml
      <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <groupId>kr.or.connect</groupId>
        <artifactId>mavenweb</artifactId>
        <packaging>war</packaging>
        <version>0.0.1-SNAPSHOT</version>
        <name>mavenweb Maven Webapp</name>
        <url>http://maven.apache.org</url>
        
        <dependencies>
          <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
          </dependency>
        </dependencies>
        <build>
          <finalName>mavenweb</finalName>
        </build>
      </project>
      ```
  
      - pom.xml을 열어서 확인해보면
        - 자동으로 junit 3.8.1 라이브러리를 추가함
        - junit - 테스트를 위한 라이브러리
  
      ```xml
      <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <groupId>kr.or.connect</groupId>
        <artifactId>mavenweb</artifactId>
        <packaging>war</packaging>
        <version>0.0.1-SNAPSHOT</version>
        <name>mavenweb Maven Webapp</name>
        <url>http://maven.apache.org</url>
      
        <dependencies>
          <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
          </dependency>
        </dependencies>
        <build>
          <finalName>mavenweb</finalName>
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
        </build>
      </project>
      ```
  
      - plugin을 추가 => 코드 입력 후 저장
  
      - 수정 후 다시 프로젝트 property의 자바 컴파일러 항목을 보면 여전히 1.5
  
      - ![maven09](.\maven09.png)
  
        - 여기서 Enable Project Specific Settings 체크
          - Apply and close 버튼을 클릭
          - 프로퍼티의 자바 컴파일러 버전이 바뀜
          - JDK 1.8로!
          - Maven의 설정을 바꾸면, 이클립스 프로젝트 설정이 연동되게 한 것!
  
      - webapp 폴더 아래의 index.jsp를 열어보면?
  
        - HttpServlet을 찾을 수 없다는 오류 메시지가 보임
  
        - 앞에서 Dynamic Web Application 만들 때
  
          - WAS Runtime 설정을 하면서 Tomcat을 지정
  
        - WAS Runtime이 지정되면 Tomcat에 있는 라이브러리를 이클립스에서 사용할 수 있게 됨
  
          - Tomcat 안에 있는 서블릿 라이브러리가 사용되면서 문제가 없게 됨
          - 실행시에도 WAS 위에서 실행되기 때문 WAS의 서블릿 라이브러리를 사용하게 됨
  
        - Maven 프로젝트로 생성했을 경우
  
          - WAS 런타임이 지정을 안 했기 때문에 
          - 서블릿을 라이브러리를 찾을 수 없음
  
        - dependencies 엘리먼트 아래에 추가!
  
          ```xml
          <dependency>
                  <groupId>javax.servlet</groupId>
                  <artifactId>javax.servlet-api</artifactId>
                  <version>3.1.0</version>
                  <scope>provided</scope>
              </dependency>
          ```
  
          - scope에 provided라는 항목이 존재 
            - servlet라이브러리를 컴파일 시에만 사용
            - 배포 시에는 사용되지 않는다는 것을 의미
            
          - Scope에는 4가지가 존재
            
            - `compile` : 컴파일 할 때 필요, 테스트 및 런타임에도 클래스 패스에 포함됨
              - scope를 설정하지 않는 경우
            - `runtime` : 런타임에 필요, JDBC 드라이버 등이 예
              - 컴파일 시에는 필요하지 않지만, 실행 시에 필요한 경우
            - `provided` : 컴파일 시에 필요하지만, 실제 런타임 때에는 컨테이너 같은 것에서 제공되는 모듈
              - servlet, jsp api 등이 이에 해당
              - 배포 시 제외됩니다.
            - `test` : 테스트 코드를 컴파일 할 때 필요
              - 테스트 시 클래스 패스에 포함되며
              - 배포 시 제외됨
            
          - 프로젝트 실행 
          
            - 프로젝트 선택 후 우측버튼 클릭 
              - Run on Server 선택
            - 해당 Web Application을 실행할 Runtime을 지정 
              - 항상 해당 런타임을 사용하겠다는 체크도 해주자
              - 브라우저 => index.html 확인
          
          - pom.xml 파일에 JSTL 라이브러리 추가
          
            ```xml
            <dependency>
                    <groupId>javax.servlet</groupId>
                    <artifactId>jstl</artifactId>
                    <version>1.2</version>
                </dependency>
            ```
          
            - why?
            - JSTL은 Tomcat이 기본으로 제공하지 않기 때문에
              - 컴파일할 때도, 배포할 때도 사용되어야 함
              - scope에 이번엔 provided가 없음
          
          - 새로운 JSTL 파일을 넣어봐도 실행하면 결과가 나오지 않음
          
            - Project Properties 선택 후, 
              - Project facets 항목을 보면
              - 다이나믹 웹 모듈의 버전이 2.3 
            - Dynamic Web Module의 버전이 2.4부터 
              - EL이 기본으로 사용할 수 있도록 설정됨
          
          - 어떻게 바꾸는가?
          
            - WEB-INF의 web.xml 파일을 
          
            ```xml
            <!DOCTYPE web-app PUBLIC
             "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
             "http://java.sun.com/dtd/web-app_2_3.dtd" >
            
            <web-app>
              <display-name>Archetype Created Web Application</display-name>
            </web-app>
            ```
          
            - 여기서 이렇게 수정!
          
            ```xml
            <?xml version="1.0" encoding="UTF-8"?>
            <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                     xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd" version="3.1">
              <display-name>Archetype Created Web Application</display-name>
            </web-app>
            ```
          
          - 그 후, 프로젝트 아래의 `.settings/org.eclipse.wst.common.project.facet.core.xml ` 파일을 열어
          
            - Eclipse navigator를 참조해서 열자
            - Window에 Navigator 설정 있어!
          
            ```xml
            <?xml version="1.0" encoding="UTF-8"?>
            <faceted-project>
              <fixed facet="wst.jsdt.web"/>
              <installed facet="jst.web" version="2.3"/>
              <installed facet="wst.jsdt.web" version="1.0"/>
              <installed facet="java" version="1.8"/>
            </faceted-project>
            ```
          
            - 아래처럼 수정!
          
            ```xml
            <?xml version="1.0" encoding="UTF-8"?>
            <faceted-project>
              <fixed facet="wst.jsdt.web"/>
              <installed facet="jst.web" version="3.1"/>
              <installed facet="wst.jsdt.web" version="1.0"/>
              <installed facet="java" version="1.8"/>
            </faceted-project>
            ```
        
      - 이제 Project Properties의 Project facets 항목에 Dynamic Web Module이 3.1로 바뀐 것을 볼 수 있음
      
        - 실행을 하지만, 오류가 나면서 실행이 안 되는 경우 존재
        - 이클립스의 버그
          - 수정되기 전의 데이터와 수정된 데이터가 섞여서 실행되기 때문에 
          - Web Application을 깔끔히 초기화하고 실행하는 것이 좋을 수 있음
        - 과정 
          1. `기존 Tomcat을 종료`
          2. `바뀌지 않았다면 프로젝트를 선택하고, 우측 버튼을 눌러서 Maven 메뉴 아래의 update project를 선택`
          3. `Servers view에서 기존 Tomcat Runtime을 삭제`
          4. `Project 메뉴의 Clean 선택`
          5. `프로젝트 익스플로러에서 Server 삭제`
      
      - 이 이후, Run on Server
      
      - Dynamic Web Module을 2.3에서 3.1로 바꾸는 것
      
        - 프로젝트가 한 번 만들어지면, 그 이후부터는 그 프로젝트가 더 이상 사용되지 않을 때까지 
        - 계속 사용되기 때무에 자주 개발자가 해야할 일은 아님
        - 그 이후부턴 pom.xml에 원하는 기능을 추가하면서 개발을 진행하면 됨

