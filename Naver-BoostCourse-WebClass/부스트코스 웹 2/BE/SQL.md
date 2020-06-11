- **SQL이란?**

  - DBMS에게 명령을 내릴 때도 특별한 명령이 필요함

  - create database, grant, flush privileges, select

  - SQL - Structured Query Language - 구조화된 쿼리 언어

    - 데이터를 보다 쉽게 검색하고 추가, 삭제, 수정 같은 조작을 할 수 있도록 고안된 컴퓨터 언어
    - 관계형 데이터베이스에서 데이터를 조작하고 쿼리하는 표준 수단

  - SQL

    - DML(Data Manipulation Language) 
      -  데이터를 조작하기 위해 사용함
      - INSERT, UPDATE, DELETE, SELECT 등이 여기에 해당
- DDL(Data Definition Language) 
      - 데이터베이스의 스키마를 정의 or 조작하기 위해 사용
      - CREATE, DROP, ALTER 등이 여기에 해당
    - DCL(Data Control Language)
  
  - 데이터를 제어하는 언어
      - 권한을 관리하고, 데이터의 보안, 무결성 등을 정의
      
    - GRANT, REVOKE 등이 여기에 해당함
    
    - Database 생성하기 
      
      - 콘솔에서 `mysql -u root -p` 명령을 실행함
      
      - MySQL 관리자 계정인 root로 데이터베이스 관리 시스템 에 접속하겠다.
      
      - 관리자 계정으로 MySQL에 접속했다면, 
        - `mysql>  create database DB이름;`
        - SQL - 굉장히 직관적
      
    - Database 사용자 생성과 권한 주기
      - Database를 생성했다면? 
        - 해당 데이터 베이스를 사용하는 계정을 생성   
          - `identified by 암호`로 암호를 지정   
        - 해당 계정이 데이터베이스를 이용할 수 있는 권한을 주어야 함
        - db 이름 뒤 `*`는 모든 권한을 의미
          - 권한을 골라서도 줄 수 있다
        - @'%'는 어떤 클라이언트에서든 접근 가능하다는 의미 
        - @'localhost'는 해당 컴퓨터에서만 접근 가능하다는 의미
        - flush privileges : DBMS에게 적용을 하라는 의미
          - 반드시 이 명령은 실행해 주어야 함
        - `grant all privileges on db이름.* to 계정이름@'%' identified by '암호' `
        - `grant all privileges on db이름.* to 계정이름@'localhost' identified by '암호'`
        - ![sql-2](.\sql-2.PNG)
      
    - 생성한 Database에 접속
      
      - `mysql -h 호스트명 -u DB계정명 -p 데이터베이스 이름`
      
    - MySQL 연결 끊기
      
      - `QUIT, exit`명령어 입력해줘
      
    - MySQL 버전과 현재 날짜 구하기
    
      - `SELECT VERSION(), CURRENT_DATE`
    
        - select - 보여줘, 조회하는 것
        - 실제 Mysql 버전하고 현재 날짜가 어떻게 되는지 알아보고자 하는 쿼리
    
      - 프롬프트에선 SQL을 입력
    
      - SQL 
    
        - semicolon으로 끝남(;), Query라고 읽음
        - 쿼리? DBMS에게 명령을 내릴 때 사용하는 문장
        - SELECT - 어떤 내용을 조회할 때 사용하는 키워드
        - MySQL - 쿼리에 해당하는 결과의 전체 row를 출력 & 전체 row의 수와 쿼리 실행에 걸린 시간을 표시
      
    - 키워드는 대소문자를 구별하지 않음
    
      - 싱클 쿼터(')안에 들어있는 것들은 구별함
      
    - 리터럴 값이라서
      
    - 쿼리를 이용해서 계산식의 결과도 구할 수 있음
      
      - `SELECT SIN(PI()/4), (4+1)*5`
      
    - 여러 문장을 한 줄에 연속으로 붙여서 실행가능함
      
      - 각 문장에 semicolon만 붙여주면 됨
    
    - 하나의 SQL은 여러 줄로 입력이 가능하다
      
      - MySQL은 문장의 끝이 아닌 semicolon으로 구분하기 때문, 여러 줄에 걸쳐 문장 쓰는 것도 가능 
        - enter 여러번 써도 되거든 
        - 여러 줄로 쓸 때 좀 더 가독성이 좋아보일 수도?
      
    - SQL을 입력하는 도중에 취소할 수 있다
      
      - 긴 쿼리를 작성하다가 중간에 취소해야하는 경우
        - 즉시 `\c`를 붙여주면 취소 가능 
      
    - DBMS에 존재하는 데이터베이스 확인하기
      
      - 작업하기 위한 데이터베이스를 선택하기 위해선 어떤 데이터베이스가 존재하는지 알아보아야 함
      - 현재 서버에 존재하는 DB를 찾기 위해 SHOW 를 사용
      - `SHOW databases`
      
    - 사용중인 데이터베이스 전환하기
      
      - Database를 선택하기 위해, `use`명령어 사용
        - `use db이름`
      - 데이터 베이스를 전환하려면 
        - 이미 데이터베이스가 존재해야하며 
        - 현재 접속중인 계정이 해당 데이터베이스를 사용할 수 있는 권한이 있어야 함
        - ![sql-3](.\sql-3.PNG)
    
  - SQL table
    
    - 데이터를 저장하는 공간 테이블(table)
      - 데이터베이스도 엑셀의 표와 유사한 테이블을 가질 수 있음
      - 데이터베이스를 생성해도 테이블은 존재하지 않음
      - 테이블을 사용하려면 테이블을 생성하는 SQL을 사용해야 함
      - 테이블에 값을 저장하려면 저장하기 위한 SQL 사용해야 함
    - ![2_8_1_(table)_](.\2_8_1_(table)_.png)
      - MySQL - 관계형 DB(데이터들이 테이블 형태로 저장이 됨)
      - 테이블 
        - RDBMS의 기본적 저장구조
        - 한 개 이상의 column과 0개 이상의 row로 구성
      - 열(Column)
        - 테이블 상에서의 단일 종류의 데이터를 나타냄
        - 특정 데이터 타입 및 크기를 가지고 있음
      - 형(Row)
        - Column들의 값의 조합, 레코드라고 불림
        - 기본기(PK)에 의해 구분
        - 기본키는 중복을 허용하지 않음, 없어서는 안 됨
      - Field
        - Row와 column의 교차점 
        - 데이터를 포함할 수 있고 없을 때는 NULL 값을 가지고 있음
    - 현재 데이터베이스에 존재하는 목록 확인하기
      - Database를 선택한 후, 목록 출력
      - `show tables`
      - 결과가 Empty set
        - 데이터베이스에 어떤 테이블도 아직 생성되지 않았다는 것을 알려주는 것
    - SQL 연습을 위한 table 생성
      - sql 파일 다운로드??
        - 터미널에서 sql이 있는 폴더로 이동한 후, 
        - `mysql -u connectuser -p connectdb < examples.sql` 수행 후 암호 입력
        - 다시 DB에 재접속
          - `mysql -u connectuser -p connectdb`
          - 만약 에러가 발생한다면, 권한 주었었던 부분에서 해당 connectuser가 우리 %만 부여했었음
            - 간혹 localhost에서 접속할 때 접속이 잘 안 된다면 이 권한도 따로 부여해주는 게 나음
        - ![sql-4](.\sql-4.PNG)
        - 실제 테이블을 생성 및 안에다 데이터를 넣는 구문들의 쿼리 하나하나가 다 실행이 되었다!
          - ![sql-5](.\sql-5.PNG)
        - 이제 테이블의 구조를 알고 싶다?
          -  `desc table이름`
          -  ![sql-6](.\sql-6.PNG)
          -  뭔가 오류가 발생했을 때, 실제 이 테이블의 구조가 이런게 맞나?  => 자주 사용함
    - 테이블 구조를 확인하기 위한 DESCRIBE 명령
      - `desc or describe table이름`의 방식으로 사용함
- **DML(select, insert, update, delete)**
  - DBMS에 값을 저장, 수정, 삭제, 조회하는 방법
  - 데이터 조작어 - 모두 동사로 시작
    - SELECT(검색), INSERT(등록), UPDATE(수정), DELETE(삭제)
    
    - SELECT
      - ![2_8_2_select__](.\2_8_2_select__.png)
      - Distinct : 필수는 아님 
      - 어떤 어떤 칼럼들을 보여주세요, 칼럼명은 하나가 아닌 여러 개가 올 수 잇음 
      - ALIAS - 실제 쿼리 결과를 보여줄 떄 칼럼명 대신 보여줄 별칭 같은 거라고 생각
      - 해당 테이블에서 칼럼에 대한 내용들을 보여줘
      - SELECT를 수행할 떄 칼럼명이 나오는 자리에 
        - 칼럼명 대신 별표를 사용 가능 
          - 모든 칼럼들을 다 보여줌
        - 별표 대신 내가 보고 싶은 칼럼명만 나열해 주면 해당 칼럼만 출력 가능
      - ![sqlselect](.\sqlselect.PNG)
      - 칼럼이 두 개 이상 보이게 하려면 반드시 콤마를 이용
        - SELECT 뒤에 컬럼을 `,`로 구별해서 나열
        - 또한 결과가 보여졌을 때 해당 테이블의 칼럼명이 그대로 보이는 걸?
        - 칼럼명 -> 테이블에서 desc 명령 이용해 확인 가능
        - ![sqlselect2](.\sqlselect2.PNG)
        - 항상 어떤 테이블을 열어보기 or 조회 or 조작
          - 테이블 구조를 확인하는 것은 매우 중요
          - why? 테이블 본인들이 이름을 잘 못 만들어놓고 다른 값을 넣게 한다거나 
            - 이런 일들이 굉장히 비일비재, 많이 일어남
      - 칼럼에 ALIAS를 적용하기 - 바로 뒤에 이름 작성
        - 칼럼의 Heading 변경 목적 
          - ex) `select empo as 사번, name as 이름, job as 직업 from employee;`
          - as 또는 공백만 사용해서 ALIAS 표현 가능
        - ![sqlselect3](.\sqlselect3.PNG)
      - 문제만 보고 쿼리들을 자꾸자꾸 만들어가는 연습 필요
      - 컬럼의 합성(Concatenation)
        - 문자열 결합함수 concat 사용
        - `SELECT concat(empno, '-', deptno) AS '사번-부서번호' FROM employee`
        - 주의! ALIAS에 공백이 있었을 떄에는 반드시 감싸주어야 함
          - FROM이라고 인식을 해버림
          - ![sqlselect4](.\sqlselect4.PNG)
      - 중복되는 행이 출력되는 경우 DISTINCT 키워드로 중복행을 제거
        - employee 테이블에 같은 number를 가지고 있는 경우가 있음
        - `SELECT distinct deptno from employee;`
        - ![sqlselect5](.\sqlselect5.PNG)
      - 정렬
        - ![2 (1)](.\2 (1).png)
        - 정렬 시 기본적으로는 ascending으로 정렬이 됨
          - 뒤쪽 순서대로 보려면 
          - `select empno, name from employee order by name desc;`처럼 하면 됨
        - ![sqlselect6](.\sqlselect6.PNG)
        - 또한, 숫자를 사용해서도 정렬 가능
          - 2 - 두 번째 컬럼을 기준으로 정렬
          - 1 - 첫 번째 컬럼을 기준으로 정렬 
        - ![sqlselect7](.\sqlselect7.PNG)
      - 특정 행 검색 - where 절 
        - 굉장히 중요 & 꼭 필요 -> 조건을 부여할 수 있음
        - ![3 (1)](.\3 (1).png)
          - WHERE salart BETWEEN 1000 AND 2000
            - 1000과 2000 사이인 값들만 꺼내서 보여줘
        - 연산자 자체에 산술비교 연산자, 논리 연산자 
          - 산술 비교 연산자, 논리 연산자
            - ![sqlwhere](.\sqlwhere.PNG)
          - IN 연산자
            - `IN (조건)`
            - 조건들을 여기에 나열할 수 있음
            - ![sqlwhere2](.\sqlwhere2.PNG)
          - AND 연산자
            - ![sqlwhere3](.\sqlwhere3.PNG)
        - LIKE 키워드  - 굉장히 유용
          - 와일드 카드를 사용해 특정 문자를 포함한 값에 대한 조건을 처리
          - `%` : 0에서부터 여러 개의 문자열을 나타냄
          - `_` : 단 하나의 문자를 나타내는 와일드 카드
            - ex) `_A%` : 반드시 두 번째 글자가 A인 거 찾기
          - `%`였을 때는 0도 취급이 되기 때문에 0 or 여러 개이거나 다 가능함
            - A로 시작하는 사람도 찾음
          - `_`는 A라도 상관이 없음
          - 값을 검색해야 할 일은 굉장히 많음
          - ![sqlwhere4](.\sqlwhere4.PNG)
      - SELECT 구문 - 함수의 사용
        - Oracle 데이터베이스
          - 이 테이블에 있는 값을 꺼내는 것이 아니다 해도 반드시 테이블을 존재해야 함
          - FROM 절 다음이 반드시 있어야 함
            - DUAL이라는 임시 테이블을 하나 놓고 
            - 반드시 이제 이쪽에다가 from DUAL 이렇게 붙여주기도 함
        - MySQL은 아예 없이 이런식으로도 조회가 가능
          - from 다음에 테이블이 없을 경우에는 테이블에서 조회하는 것이 아님
        - UCASE, UPPER
          - 똑같이 대문자로 바꿔줘
        - LCASE, LOWER
          - 다 소문자로 바꿔줘
        - ![sqlwhere5](.\sqlwhere5.PNG)
        - subString
          - 문자를 끊어내는 것
          - 자바는 처음 인덱스가 0번 But
            - 이런 데이터베이스들은 1번인 경우가 많음
          - `SELECT SUBSTRING('Happy Day', 3, 2);`
            - 시작 인덱스가 3번 부터 시작해서 두 글자 보여줘라는 의미
            - ![sqlsubstring](.\sqlsubstring.PNG)
        - LPAD, RPAD
          - 출력해야 되는데 공백이 존재하거나 이랬을 때 
          - 해당 부분 오른쪽, 왼쪽에다가 내가 지정한 문자를 채워줘
          - `SELECT LPAD('hi', 5, '?'), LPAD('joe', 7, '*');`
            - 가운데 숫자 - 공간을 얼마만큼 잡을지
            - 이 문자를 출력하는데 다섯 글자 , 일곱 글자로 출력해줘 => 다섯 자리 차지해줘
            - 만약에 다섯 자리가 안  된다면 왼쪽 앞에다 물음표를 넣어줘 
          - ![sqlpad](.\sqlpad.PNG)
        - TRIM, LTRIM, RTRIM
          - 앞뒤에 있는 공백을 없애주는 것
          - ![sqltrim](.\sqltrimm.PNG)
          - 특히 웹이 동작 시 외부에서 값을 받아옴
          - 클라이언트로부터 값을 받아올 때 클라이언트가 잘못된 공백을 넣어서 줬다 등등
            - 공백들 때문에 검색이 안 되는 문제 등
            - 이런 문제들이 자주 발생
            - 이 때 TRIM 함수를 적절히 잘 이용하자!
        - ABS(X) - X의 절대값을 구함
          - ![sqlabs](.\sqlabs.PNG)
        - MOD(n,m)
          - n을 m으로 나눈 나머지 값을 출력
          - ![sqlmod](.\sqlmod.PNG)
        - FLOOR(x)
          - x보다 크지 않은 가장 큰 정수를 반환
          - BIGINT로 자동 변환
        - CEILING(x)
          - x보다 작지 않은 가장 작은 정수를 반환
        - ROUND(x)
          - x에 가장 근접한 정수를 반환
        - POW(x,y), POWER(x,y)
          - x의 y 제곱 승을 반환함
        - GREATEST(x,y, ...) 
          - 가장 큰 값을 반환
        - LEAST(x,y,...)
          - 가장 작은 값을 반환
        - CURDATE(), CURRENT_DATE 
          - 오늘 날짜를 YYYY-MM-DD나 YYYYMMDD 형식으로 반환함
        - CURTIME(), CURRENT_TIME
          - 현재 시각을 HH:MM:SS나 HHMMSS 형식으로 반환
        - NOW(), SYSDATE(), CURRENT_TIMESTAMP
          - 오늘 현시각을 YYYY-MM-DD HH:MM:SS나 YYYYMMDDHHMMSS 형식으로 반환함
        - DATE_FORMAT(date, format) 
          - 입력된 date를 format 형식으로 반환함
        - PERIOD_DIFF(p1, p2) 
          - YYMM이나 YYYYMM으로 표기되는 p1과 p2의 차이 개월을 반환함
      
    - SELECT - 그룹함수
      - CAST 함수 - 형을 바꿀 수 있음
        - 오라클 or 다른 DB에서도 이런 기능들이 존재
        - 오라클에선 TO_CHAR, TO_NUMBER, TO_DATE 이런 함수들을 이용해 실제 데이터 타입을 바꾸어서 사용할 수 있음
        - MYSQL도 버전 4.2부터 추가됨
      - ![4](.\4.PNG)
        - CAST => expression을 type으로 바꾸어 주세요
        - CONVERT는 `,`로 구별 
          - USING으로 구분해서 사용하면 Charset을 바꿀 수 있음
          - `CONVERT (expr USING transcoding_name)`
        - ![sqlcast](.\sqlcast.PNG)
      - 그룹함수
        - 여러 개의 칼럼의 값을 가지고 결과 값을 하나만 만들어내는 것
          - 결과가 하나만 나오고 있음
          - count, average
        - ![2_8_2_select_()](.\2_8_2_select_().png)
        - 단일 함수
          - 칼럼 하나에 결과가 하나 나오는 함수들
          - 하나하나마다 모두 함수가 적용되는 것을 볼 수 있음
        - ![sqlgroup](.\sqlgroup.PNG)
        - 그룹 함수를 `,`를 통해 `~~별` 하고 나오면 group by라는 키워드를 사용해서 구할 수 있음
          - ![sqlgroup2](.\sqlgroup2.PNG)
        - 잠깐! 
          - `SELECT name, avg(salary) from employee`가 맞는가?
          - 오라클 - 자체적으로 그룹 함수를 사용할 때 오류를 발생시킴(반드시 grouping해달라는)
          - MySQL은 그냥 약간 다른 값을 출력해 내는 듯?
            - 뭔가 어떤 조건에 대해 그룹으로, 그룹 별로 뭔가 하고 싶다면?
            - 반드시 group by라는 키워드를 이용해서 어떤 기준으로 grouping을 할 건지 알려주면 이런 결과를 얻어낼 수도 있음
      
    - 데이터 입력 (INSERT 문)
    
      - `INSERT INTO 테이블명(필드1, 필드2, 필드3, 필드4, … ) VALUES ( 필드1의 값, 필드2의 값, 필드3의 값, 필드4의 값, … )`
      - 원하는 필드만 골라 입력하고 싶을 때
      - `INSERT INTO 테이블명 VALUES ( 필드1의 값, 필드2의 값, 필드3의 값, 필드4의 값, … )`
        - 모든 필드 입력해야 할 때
        - 필드 명 생략 가능
          - 반드시 모든 필드의 값을 채워주어야 함
        - 필드 순서 
          - 우리가 테이블을 새성했을 때 구문에서 만들어진 순서
        - 입력할 테이블명, 입력할 필드, 나열된 필드의 순서대로 알맞게 맵핑을 시켜 필드에 실제 입력할 값들을 써주자
        - 주의! 필드의 개수와 필드의 값의 개수는 같아야 함
      - 필드 명을 지정해주는 방식
        - 디폴트 값이 세팅되는 필드는 생략 가능
        - 추후, 필드가 추가/변경/수정 되는 변경에 유연하게 대처 가능
      - 필드명을 생략했을 경우엔 모든 필드 값을 반드시 입력해야 함
      - PRIMARY KEY - 널 값을 입력할 수 없는데, 입력을 null을 하면 오류를 발생시킴
        - ![sqlinsert](.\sqlinsert.PNG)
      - 칼럼명을 나열해서 원하는 칼럼만 입력이 가능
        - But, NOT NULL 조건 or PRIMARYT 등 Null이 들어갈 수 없는 칼럼들은 반드시 나열해 값을 지정해야함
          - 아니면 Null 값이 들어가 조건 자체가 받아들여지지 않음 => 오류 발생
      
    - UPDATE - 데이터 수정
    
      - `UPDATE  테이블명 SET  필드1=필드1의값, 필드2=필드2의값, 필드3=필드3의값, … WHERE  조건식`
      - set이라는 예약어를 이용
      - WHERE 절이 필수는 아님
        - But, 생략하게 되면 전체 데이터가 다 바뀐다는 것! 
      - 조건식을 통해 특정 row만 변경 가능
        - ![sqlupdate](.\sqlupdate.PNG)
      - 주의! 
        - WHERE 절을 잘 부여해주어야 함!
      
    - DELETE  - 데이터 삭제
    
      - `DELETE FROM  테이블명 WHERE  조건식`
      - 조건식을 통해 특정 ROW만 삭제 가능
      - 조건식을 주지 않으면 전체 ROW가 영향을 받음 조심!
      - ![sqldelete](.\sqldelete.PNG)
  - SQL - Join에 대해서 알아보기!!
- **DDL(Create, drop)**
  - create, alter, drop
    - 데이터 정의어(Data definition language, DDL)
      - 스키마 객체를 생성 or 변경 or 제거 등의 일을 수행하는 것 
    - 실제 사용되는 명령들은 테이블 뿐만 아닌 데이터베이스에서 제공하고 있는 View or Synonym index 등 다양한 객체들이 존재 => 우린 테이블을 일단 기준으로 볼 듯
  - 데이터 타입
  
    - 해당 필드의 정보를 주기 위해서 필요한 데이터 타입
  - ![2_8_3_MySQL__-1](.\2_8_3_MySQL__-1.png)
  - 알맞은 데이터 타입 선택해 객체를 생성할 때 사용하면 좋음
  - 테이블 생성
  
    - `create table 테이블명( 필드명1 타입 [NULL | NOT NULL][DEFAULT ][AUTO_INCREMENT], 필드명2 타입 [NULL | NOT NULL][DEFAULT ][AUTO_INCREMENT], 필드명3 타입 [NULL | NOT NULL][DEFAULT ][AUTO_INCREMENT],    ...........   PRIMARY KEY(필드명) );`
    - 테이블 뿐 아니라 다른 객체들도 다 똑같음(대상 객체만 바뀌면)
      - 테이블은 칼럼, 필드가 필요 => 정의!
      - 필드에 제약조건 같은 것을 부여할 수 있음
      - Null or NOT null, default 값, 자동으로 값 증가도 가능
      - PRIMARY KEY도 지정 가능
        - 칼럼을 정의할 때 같이 지정 가능
        - 맨 마지막 라인에다가 이 필드를 가지고 지정할 것도 가능
      - ![sqlcreate](.\sqlcreate.PNG)
  - 테이블 수정 (컬럼 추가 / 삭제)
    - `alter table 테이블명 add 필드명 타입 [NULL | NOT NULL][DEFAULT][AUTO_INCREMENT];`
      - 칼럼 추가 명령어 -> 추가는 add 명령
      - 반드시 필드가 추가되어야 함
        - 생성할 때처럼 필드의 이름, 타입, 제약조건 등 부여해서 추가하면 OK
    - `alter table 테이블명 drop 필드명;`
      - 삭제할 때는 drop이라는 명령 
        - 필드 이름만 주면 알아서 삭제함
    - ![sqlalter](.\sqlalter.PNG)
  - 테이블 수정 ( 컬럼 수정 )
    - `alter table 테이블명 change 필드명 새필드명 타입 [NULL | NOT NULL][DEFAULT][AUTO_INCREMENT];`
      - change 키워드를 사용하고 칼럼을 새롭게 재정의
  - 테이블 이름 변경
    - `alter table 테이블명 rename 변경이름`
  - 테이블 삭제하기 
    - `drop table 테이블이름;`
    - 제약 조건이 있을 경우엔 drop table 명령으로도 테이블이 삭제 되지 않을 수 있어
      - 테이블을 생성한 반대 순서로 삭제를 해야함
      - foreign key 관계가 있을 때!
        - foreign key 제약조건으로 지금 department 테이블이랑 연관 관계를 갖고 있다!
        - ![sqldrop](.\sqldrop.PNG)
  - 테이블 뿐 아니라 다른 객체들에게도 똑같이 이용이 되더라!!!
    - 현재 강의는 깊게 들어가지는 않음!!