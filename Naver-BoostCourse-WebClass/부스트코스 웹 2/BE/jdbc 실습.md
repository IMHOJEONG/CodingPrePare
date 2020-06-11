- JDBC 실습

  - 드라이버 추가 pom.xml에 하고 무조건 Maven => Update Project를 수행해야 함

  - 데이터들을 가져올 수 있는 객체가 필요 

  - 클래스 파일 생성 시 파일을 분리해야 => dto 등

  - 카멜 표기법을 지켜주자

    - Role 객체
      - 안에 들어있는 값들이 중요한 객체
    - Role 객체 구현 후 role이라는 테이블에 있는 정보를 입력 or 수정 or 삭제 or 조회하는 기능을 갖는 클래스를 하나 구현해보자!

    1. 연결을 맻는 객체
    2. 명령 선언 객체 
    3. 결과값을 담아낼 객체를 선언해서 사용

    - 접속했던 것들을 반드시 닫아야 함

    - close 메서드도 예외를 처리해야 하는 메서드

    - 접속을 맺다가 예외가 발생할 수도 있고, 명령을 얻어내다가 예외를 발생시킬 수도 있음

    - 먼저 예외가 발생할 상황들에 대해 피해주게 하는 게 좋음

    - 항상 코드를 만들 때 조금이라도 더 안전하게 

      - 어떻게 하면 이 부분 자체가 오류를 발생시키지 않을까? 생각하면서 코딩!

    - 실제 우리는 MySQL을 사용하기 때문에 이 클래스가 메모리에 올라오는 작업을 하게 해주어야 함

      ```java
      Class.forName('com.mysql.jdbc.Driver');
      ```

    - Connection 객체는 DriverManager라는 클래스의 getConnection 메서드 이용

      - db 정보는 공통적으로 쓰니까 static 변수로 설정

    - prepareStatement는 ?를 변수 대신 사용해줌!

      - 쿼리 자체가 계속 변경 X, 물음표가 바인딩되는 부분만 바뀜 => 효율성이 계속 좋아짐
      - 물음표는 prepareStatement가 가지는 set이라는 메서드를 이용

      ```java
      ps.setInt(1, roleId); // 첫 번째 ?에 roleId 넣어줘
      ```

    ```java
    rs = ps.executeQuery();
    // ResultSet 객체가 결과값을 알고 있을 것
    if(rs.next()) // 결과값이 있다면 첫번째로 이동하고 true를 리턴 , 없다면 false를 리턴 
    {
     	rs.getString(1);  // sql 명령어에서 나열한 값을 가져옴
        rs.getInt("role_id"); // 이름으로 가져오기
        // 그 후 role 객체에 보내면 끝
    }
    ```

    ![](.\role\roleResult.PNG)

- JDBC 실습 2

  - 입력 , 여러 Select 부분 
    - 어떻게 코드가 달라지는가에 집중!
    - Select는 executeQuery 메소드를 사용
    - Insert, Update, Delete는 executeUpdate 메서드를 사용
    - ![](.\role\insertroleResult.PNG)

- JDBC 실습 3

  - try-with-resources 구문
    - finally에서 close 하는 구문이 없어!!
    - 이전 문법보다는 매우 간단 

  ```java
  try(Connection conn = DriverManager.getConnection(dbUrl, dbUser, dbPasswd);
  			PreparedStatement ps = conn.prepareStatement(sql)){
  			
  			try(ResultSet rs = ps.executeQuery()) {
  				while(rs.next()) {
  					String description = rs.getString(1);
  					int id = rs.getInt("role_id");
  					Role role = new Role(id,description);
  					list.add(role);
  				}
  			}
  			catch(Exception e) {
  				e.printStackTrace();
  			}
  			
  		}
  		catch(Exception ex) {
  			ex.printStackTrace();
  		}
  ```

  - 여기에 들어있는 객체들 

    - close 하는 일을 수행

    ```java
    try(Connection conn = DriverManager.getConnection(dbUrl, dbUser, dbPasswd);
    			PreparedStatement ps = conn.prepareStatement(sql))
    ```

  - https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html

  - https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html

