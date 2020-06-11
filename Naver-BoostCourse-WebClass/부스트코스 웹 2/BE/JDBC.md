- **JDBC**

  - JAVA 언어를 이용해서 DBMS로 부터 정보를 조회하는 방법

  - JDBC, DriverManager, Connection, Statement, ResultSet

    - JDBC(Java Database Connectivity)의 정의
      - 자바를 이용한 DB 접속, SQL 문장의 실행
      - 실행 결과로 얻어진 데이터의 핸들링을 제공하는 방법과
      - 절차에 관한 규약 
    - 자바 프로그램내에서 SQL 문을 실행하기 위한 자바 API
    - SQL과 프로그래밍 언어의 통합 접근 중 한 형태
    - JAVA는 표준 인터페이스인 JDBC API를 제공
      - 인터페이스가 이미 정의가 되어있음 
      - 어떤 DB 벤더든, 다 똑같은 방법으로 사용하면 됨
    - 데이터베이스 벤더, 또는 기타 써드파티에서는 JDBC 인터페이스를 구현한 드라이버(driver)를 제공함

  - 왜 JDBC인가?

    - 웹을 동작시키거나 이랬을 때는 매번 수행할 때마다 그렇게 할 수는 없음 
      - 프로그램이 그것을 대신할 수 있게 만들어주어야 함
      - 이 때 사용하는 것이 JDBC

  - JDBC 환경 구성 

    - JDK 설치 

    - JDBC 드라이버 설치 

      - 아까 DB 벤더가 실제 자바에서 정의하고 있는 Interface를 구현해 드라이버를 제공한다라고 했음

        - 그것이 이 library

      - 웹에서 사용할 때는 앞선 강의에서 JSTL 사용할 때

        - lib라는 디렉토리에다 라이브러리 추가해주었던 거 기억함?
        - 그런 것처럼 DB 벤더에서 제공하는 라이브러리를 추가해주면 됨
        - 그런데 이런 것을 조금 더 간단하게 할 수 있는 게 Maven 

      - Maven에 다음 처럼 의존성 추가 

        - MySQL사이트에서 다운로드 한다.

        ```xml
        <dependency>   
          <groupId>mysql</groupId>   
               <artifactId>mysql-connector-java</artifactId>
               <version>5.1.45</version>
         </dependency>
        ```

      - JDBC를 사용한다는 것

        - DB를 사용하겠다는 것
          - 항상 제일 먼저 DB와 연결을 해야 함
          - DB에 접속하기 위해선 절차가 필요함
          - DB가 무엇이냐에 따라 자바에서 제공해주는 Interface를 구현하고 있다
            - 클라이언트가 사용하는 이런 Connection 객체라고 이야기는 하지만
              - Connection은 인터페이스
              - 이때 진짜로 이 객체는 각각의 벤더가 구현하고 있는 객체여야 함
              - 그러려면 벤더가 제공해주는 라이브러리를 사용할 수 있어야 됨
              - 이것을 사용할 수 있게끔 해주는 것이 로딩
            - DB 이런것들은 약속이 정해져있는 코드를 그냥 그대로 사용하면 OK
              - 각각의 DB 벤더가 이렇게 하면 우리 드라이버 로드를 할 수 있음
              - 이렇게 이미 정해놓음
        - JDBC를 이용한 프로그래밍 방법
          1. import java.sql.*;
          2. 드라이버를 로드
          3. Connection 객체를 생성
             - DB에 접속하는 부분
             - Connection 객체
               - DB가 접속됐을 때 얻어내줄 수 있는 객체
          4. Statement 객체를 생성 및 질의 수행
             - Statement 객체 
               - select ... 이렇게 만드는 것
               - 쿼리문을 생성
               - 쿼리문을 생성하고 실행하는 것을 도와주는 객체
               - Statement도 인터페이스
               - 실제로 DB 벤더가 뭐냐에 따라서 
                 - 이 Statement 객체를 구현한 객체가 리턴이 됨
             - 실행하는 코드 중요
               - 쿼리문을 만들고 세미콜론, Enter까지 하는 것
          5. SQL문에 결과물이 있다면 ResultSet 객체를 생성함
             - Insert, Update, Delete 할 때랑 Select 할 때는 
               - 결과가 좀 약간 다르게 나왔었던 것!
               - Select -> 조회라 결과가 있고
               - 나머지는 잘 되었다라는 결과를 줌
               - 쿼리문이 무엇인가에 따라 다르게 실행됨
          6. 모든 객체를 닫는다.
             - 항상 연결하고 난 뒤에는 접속을 끊어주어야 함
             - DB에 접속할 수 있는 숫자는 정해져 있음
             - 연결 상태를 유지하고 있다면 
               - 더 이상 접속할 수 없을 때 클라이언트가 요청을 하게 되면 수행이 안 됨!

  - JDBC 클래스의 생성 단계

    - ![2_11_1_JDBC_](.\2_11_1_JDBC_.png)
    - 드라이버 로딩 시 DriverManager라는 객체를 이용 
      - 메서드를 이용해서 드라이버를 로딩
    - 모두 사용했으면 닫아주어야 함
      - 열었던 반대 순서로 닫아주어야 함
      - ResultSet 객체 close => Statement 객체 Close => Connection 객체 close 작업을 해주어야 함

  - JDBC - 단계별 설명 

    1. import 

       - 자바 코드에서 같은 패키지에 있는 클래스를 사용하려면 import 해야 함
       - java.sql 패키지 안에 DriverManager, Connection, Statement 등 인터페이스가 들어있음
       - `import java.sql.*;`

    2. 드라이버 로드 

       - 각각 DB 벤더에서 제공하는 객체
         - 패키지명.클래스명
       - 이 객체를 Class라는 클래스가 갖고 있는 forName이라는 메서드를 이용
         - 이 객체가 메모리에 올라감
         - 이 안에 들어있는 값이 어떤 데이터베이스 벤더를 이용하느냐에 따라
           - 안에 들어있는 값은 달라짐
       - `Class.forName("com.mysql.jdbc.Driver");`

    3. Connection 얻기

       - Connection 객체를 얻어낼 때 사용하는 객체가 DriverManager라는 객체

       - DriverManager가 갖고 있는 getConnection을 이용하면 OK

       - ```java
         String dburl  = "jdbc:mysql://localhost/dbName";
         
         Connection con =  DriverManager.getConnection ( dburl, ID, PWD );
         ```

       - 어떤 URL에 접속할 거냐 질의가 있는 IP 주소나 이런 부분

       - dburl - 데이터 베이스가 있는 URL, DB의 user, password를 넣어주면 연결 가능

         - dburl을 정하는 이런 방식도 어떤 데이터베이스를 사용하고 있느냐에 따라 조금씩 다름
         - 다르면 각각 DB 벤더에서 다 알려줌

    4. ```java
       // Connection 객체 얻어오는 부분 까지
       public static Connection getConnection() throws Exception{
           String url = "jdbc:oracle:thin:@117.16.46.111:1521:xe";
       	String user = "smu";
       	String password = "smu";
       	Connection conn = null;
       Class.forName("oracle.jdbc.driver.OracleDriver");
       	conn = DriverManager.getConnection(url, user, password);
       	return conn;
            
       }
       ```

       - Oracle을 이용했을 땐 URL의 정의가 다름 
       - MYSQL이 제공하는 클래스 이름과 오라클 벤더가 제공하는 클래스 이름은 다름
       - 다양한 DB와 접속을 할 때에도 조금 다를 뿐 코드 형식은 같음

    5. Statement 생성

       - 실제 쿼리를 사용

       - `Statement stmt = con.createStatement();`

         - 쿼리를 사용하기 위해선 반드시 Statement라는 객체를 얻어내야 함
         - connection을 이용해서 Statement를 얻어냄

       - Statement 객체를 생성 후, Statement 객체에 쿼리문을 작성 

         - `ResultSet rs = stmt.executeQuery("select no from user");`

         - `executeQuery`: 실행해주세요라는 메서드

           - 실행할 쿼리가 Select, Insert, Update, Delete냐에 따라 메서드가 조금 달라짐

           ```java
           ResultSet rs = stmt.executeQuery("select no from user" );
           
           참고
           stmt.execute(“query”);             //any SQL
           stmt.executeQuery(“query”);     //SELECT
           stmt.executeUpdate(“query”);   //INSERT, UPDATE, DELETE
           ```

    6. ResultSet으로 결과 받기

       - 현재 ResultSet은 데이터 베이스 쪽에 있음

         - 데이터베이스 ResultSet에 레퍼런스를 얻어온 것

           - `ResultSet rs = stmt.executeQuery("select no from user" ); `

         - 클라이언트가 우리 프로그램이라 가정

           - 실행해줘요 요청 시 결과 셋은 데이터베이스가 가지고 있음
           - 이 결과 셋을 가리킬 수 있는 레퍼런스 변수만 왔음
           - why?
             - 실제 Select 쿼리를 수행 후 실행 결과가 만 건이라면?
             - 서버에 만 건의 데이터를 갖고 들어오면 문제가 발생 가능
           - 한꺼번에 가져오는 게 아닌 
             - 얻어왔으면 ResultSet으로부터 시작해가지고 하나씩 꺼내옴
             - 결과 set이 여러 개의 레코드가 존재했다면
               - next라는 메서드를 수행하면 첫 번째 레코드를 가르쳐줘
             - ResultSet이 위치가 달라져서
               - 첫 번째 가리키고 있는 것에서 getInt 하나 꺼내옴
               - 다시 while문 수행하면 다음 결과가 있는지 없는지 확인 후 수행
               - 없으면 false를 반환 => rs.next()
               - 더 이상 수행하지 않고 반복문 종료

         - ```java
           ResultSet rs =  stmt.executeQuery( "select no from user" );
           while ( rs.next() )
                 System.out.println( rs.getInt( "no") );
           ```

    7. Close

       - ```java
         rs.close();
         
         stmt.close();
         
         con.close();
         ```

       - 가장 마지막에 열린 ResultSet을 가장 먼저 닫아주기

       - 이제 순차적으로 닫아주면 됨

  - 예제

    - ```java
      public List<GuestBookVO> getGuestBookList(){
      		List<GuestBookVO> list = new ArrayList<>();
      		GuestBookVO vo = null;
      		Connection conn = null;
      		PreparedStatement ps = null;
      		ResultSet rs = null;
      		try{
                  // 접속하는 것은 따로 빼놓음
      			conn = DBUtil.getConnection();
      			String sql = "select * from guestbook";
      			ps = conn.prepareStatement(sql);
      			rs = ps.executeQuery();
      			while(rs.next()){
      				vo = new GuestBookVO();
      				vo.setNo(rs.getInt(1));
      				vo.setId(rs.getString(2));
      				vo.setTitle(rs.getString(3));
      				vo.setConetnt(rs.getString(4));
      				vo.setRegDate(rs.getString(5));
      				list.add(vo);
      			}
      		}catch(Exception e){
      			e.printStackTrace();
      		}finally {
      			DBUtil.close(conn, ps, rs);
                  // close 코드도 길어서 빼놓음
      		}		
      		return list;		
      	}
      ```

    - ```java
      public int addGuestBook(GuestBookVO vo){
      		int result = 0;
      		Connection conn = null;
      		PreparedStatement ps = null;
      		try{
      			conn = DBUtil.getConnection();
      			String sql = "insert into guestbook values("
      					+ "guestbook_seq.nextval,?,?,?,sysdate)";
      			ps = conn.prepareStatement(sql);
      			ps.setString(1, vo.getId());
      			ps.setString(2, vo.getTitle());
      			ps.setString(3, vo.getConetnt());
      			result = ps.executeUpdate();
      		}catch(Exception e){
      			e.printStackTrace();
      		}finally {
      			DBUtil.close(conn, ps);
      		}
      		
      		return result;
      	}
      ```

    - ```java
      public static void close(Connection conn, PreparedStatement ps){
      		if (ps != null) {
      			try {
      				ps.close();
      			} catch (SQLException e) {e.printStackTrace(); }
      		}
      		if (conn != null) {
      			try {
      				conn.close();
      			} catch (SQLException e) {e.printStackTrace();}
      		}
      	}
      ```

    - 프레임워크

      - 반복적으로 해야 되는 작업을 꼭 필요한 정보만 알려주어 알아서 실행시키게 함
      
    - java.sql 패키지를 보면 대부분이 interface로 되어 있음
    
      - 이를 실제로 구현하는 것은 DBMS를 만든 회사
  
- **JDBC 실습**

  - JDBC를 이용해 입력 / 수정 / 삭제 / 조회 Programming

  - JDBC, PreparedStatement, ResultSet, Connection

    - JDBC - 각 벤더에서 제공해주는 드라이버 있었음

    - pom.xml 수행 후 Maven - update Project를 수행해주어야 했음

    - JDBC Programming

      - DB에 들어있는 데이터를 꺼내 or 데이터를 DB에 넣어주거나 수정하거나 삭제하거나 이런 일들을 수행
      - 데이터베이스에 데이터를 넣어줄 때 or 꺼내올 때 이 데이터들을 가져올 수 있는 (정보들을 저장할 수 있는) 객체가 필요!
      - 우리는 Role이라는 table로 실습 진행

    - 객체를 만들면서 각자 관련 있는 것들끼리 모아두려면 

      - 패키지를 만들어서 작업을 하려고 함

    - 자바에서 필드명은 항상 소문자로 시작

      - 단어가 두 개 이상 연결될 때는 두 번째 단어의 첫 글자를 대문자로 사용!
      - 데이터를 꺼내고 놓고 부분들이 수행!
        - getter, setter 메서드가 필요  
        - Source 항목에 존재 => toString도 오버라이드 가능, 인자를 가진 생성자도 가능

    - DAO, DTO??? 

    - 어딘가에 뭔가 연결을 해서 정보를 가져오고 이런 부분들

      - 예외 상황들이 굉장히 많음

      - try-catch를 사용해서 일단 해결

        - finally - 먼저 닫아주는 일을 수행하는 코드 작성!
          - 반드시 수행되는 구절 (어떤 일이 있어도)
        - close 자체도 예외를  처리해야 하는 메서드!
          - try-catch가 필요함

      - 하나 더 생각!

        - 접속을 맺다가 예외가 발생 가능
        - 명령을 얻어내다가 예외를 발생시킬 수도?
        - 언제 예외가 발생할 지 모름
        - 먼저 예외가 발생할 상황들에 대해 피해주게 하자!!!

        ```java
        Role role = null;
        		Connection conn = null;
        		PreparedStatement ps = null;
        		ResultSet rs = null;
        		
        		try {
        			
        		} catch(Exception e) {
        			e.printStackTrace();
        		}
        		finally {
                    // 이부분!
        			if(rs != null) {
        				try {
        					rs.close();
        				}catch(SQLException e) {
        					e.printStackTrace();
        				}
        			}
        ```

      - 항상 코드를 만들 때 조금이라도 더 안전하게 

        - 어떻게 하면 이 부분 자체가 오류를 발생시키지 않을까? 생각하면서 코딩하는 게 Good

      - PreparedStatement 

        - 인자 값이 무엇이 들어왔느냐에 따라 값은 매번 바뀜
          -  물음표를 대신해서 사용해주는 것이 특징!!!
        - `String sql = "SELECT role_id, description FROM role WHERE role_id = ?"`
        - 쿼리 자체가 계속 변경되지 않고 물음표가 바인딩되는 부분만 바꿈 => 쿼리가 수행될 때 효율 Good
        - 반드시, 물음표에 대한 부분의 값을 바꾸어주어야 함!
          - prepareStatement의 setInt와 같은 메서드를 이용
          - ex) ps.setInt(parameterIndex, x);
          - parameterIndex - 물음표의 순서
          - x - 물음표 대신에 이 값을 넣어줘!
          - ex) ps.setInt(1, roleId) => 첫 번째 물음표에 roleId라는 변수의 값을 넣어줘

      - 그 후, 실행해주세요!

        - `executeQuery() `메서드 
        - rs  = ps.executeQuery() 
          - ResultSet 객체가 결과값을 알고 있음
          - 꺼내오자 이제, 값이 없을 수도 있어

      - 조건문을 이용해서 rs.next 메서드를 통해 값이 있는지 확인

        - next 메서드 - boolean 타입
        - 결과값이 있다면 첫 번째 레코드로 커서를 이동시키고 true를 리턴해줌
          - 다시 next 수행되면 다음 레코드로 커서 이동 후 true 리턴
        - 없다면 false리턴
        
      - 값을 꺼내는 것은?
      
        - ResultSet 객체의 get 메서드 이용
        - 이 때는 java 코드 안에서 SELECT 수행 시 나열한 순서가 더 중요
        - `String sql = "SELECT role_id, description FROM role WHERE role_id = ?";`
          - 위의 코드처럼 작성 시 role_id, description 이 순서대로 작성되어 이게 더 중요
          - rs.getString(1), rs.getInt("role_id") 처럼 값을 꺼내올 수 있음
      
    - ![jdbc2](.\jdbc2.PNG)