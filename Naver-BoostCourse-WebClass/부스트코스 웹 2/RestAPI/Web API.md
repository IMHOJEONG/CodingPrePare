- Web API

  - **Web API 디자인 가이드**

    - URI는 정보의 자원을 표현해야 합니다.
    - 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현합니다.

  - **자원에 대한 행위는 HTTP Method로 표현**

    - POST 
      - POST를 통해 해당 URI를 요청하면 리소스를 생성
    - GET 
      - GET을 통해 해당 리소스를 조회함
      - 리소스를 조회하고 해당 document에 대한 자세한 정보를 가져옴
    - PUT 
      - PUT을 통해 해당 리소스를 수정함
    - DELETE
      - DELETE를 통해 리소스를 삭제함

  - **URI는 정보의 자원을 표현해야 한다.**

    - GET /members
      : 위의 표현은 맴버의 모든 정보를 달라는 요청입니다.
    - GET /members/delete/1
      : GET은 정보를 요청할 때 사용합니다. 위와 같이 동사로 삭제를 표현하면 안 됩니다.
    - DELETE /members/1
      : HTTP Method 중의 하나인 DELETE를 이용하여 삭제를 표현해야 합니다.

  - **자원에 대한 행위는 HTTP Method로 표현**

    - GET /members/1                   (o)
    - GET /members/get/1             (x)
      - 의미가 불분명
    - GET /members/add                 (x)
      - 의미가 불분명
      - 추가는 POST!
    - POST /members                       (o)
    - GET /members/update/1        (x)
    - PUT /members/1                     (o)
    - GET /members/del/1               (x)
    - DELETE /members/1               (o)

  - **슬래시 구분자(/)는 계층을 나타낼 때 사용**

    ```plain text
http://domain/houses/apartments
http://domain/departments/1/employees
    ```

    - URI 마지막 문자로 슬래시 구분자(/)를 포함하지 않습니다.
    - 하이픈(-)은 URI가독성을 높일 때 사용합니다.
    - 언더바(_)는 사용하지 않습니다.
    - URI경로는 소문자만 사용합니다.
    - RFC 3986(URI 문법 형식)은 URI스키마와 호스트를 제외하고는 대소문자를 구별합니다.
    - 파일 확장자는 URI에 포함하지 않습니다.
    
  - Accept Header를 사용합니다.
  
  - **상태 코드 (성공)**
  
    - ![dom_tree](.\dom_tree.png)
  
  - **상태 코드 (클라이언트로 인한 오류)**
  
    - ![2_11_1_2](.\2_11_1_2.png)
    
  - **상태 코드 (서버로 인한 오류)**
  
    - ![2_11_1_3](.\2_11_1_3.png)
        

