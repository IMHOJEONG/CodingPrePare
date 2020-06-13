HTML
====

- 기본 형태 : 태그는 각자의 의미를 가짐 

```html
<!-- 
    이러한 형태로 사용 
    태그, 요소(정확히는 요소가 전체, 태그는 각각을 가리킴)라고도 함
-->
<TAG></TAG> 
<TAG>Content</TAG>

<!-- example -->
<h1>???</h1>
<p></p>
```
- h1 : 제목 1~6 / p : 문장, 문단 
- 태그 : 열리고 닫히는 태그 구조를 가짐, 한 쌍(시작하고 종료되는 구조라고 부르기도 함)
  - 닫히는 태그는 태그 이름 앞에 /가 붙는다는 것

# 속성(Attributes)과 값(Value)

- 태그(요소)의 기능을 확장하기 위해 속성을 사용할 수 있음 

```html
<TAG 속성="값"></TAG> <!-- 이러한 구조 -->

<!-- example -->
<img src="./my_photo.jpg" /> 
<div class="name">홍길동</div>
```
- `<img />` : 이미지를 삽입할 떄 사용하는 태그
  - 태그만 사용하면 어떤 이미지를 삽입하는지 알 수 없기 때문에 src(source)를 사용해 삽입할 이미지의 경로를 지정
  - alt(alternative)라는 속성, 대체 텍스트
    - 이미지 오류 등 이미지가 삽입되지 못했을 때 대체되어 나오는 글자

- div : 의미를 가지지 않는 태그 
  - 어떤 내용이든 묶어낼 수 있음
  - class 속성 : 일단은 별명이라고 생각하자
    - 홍길동이라는 텍스트를 묶었지만, 그 내용이 무엇을 의미하는지 알 수 없기 때문에... name이라는 태그 별명 class를 추가했음 

- `<img />` : 닫히는 태그가 없으면 빈 태그(Empty tag)라고 함
  

# 부모 & 자식 요소 
  - 태그A가 태그 B의 콘텐츠로 사용되면, 태그B는 태그A의 부모 요소, 태그A는 태그B의 자식 요소

 - 상대적인 개념 => 언제나 뒤바뀔 수 있음
```html
<PARENT>
    <CHILD></CHILD>
</PARENT>

<!-- example 
    후손, 자손, 하위 요소
    조상, 상위 요소로도 부를 수 있음 
-->

<section class="fruits">
    <h1>과일 목록</h1>
    <ul>
        <li>사과</li>
    </ul>
</section>

<!-- 다음과 같이 이해가능 -->
<섹션영역 태그별명="값">
    <주제1>
    <순서없는목록>
        <항목>
```

# 빈 태그 (Empty tag)
- HTML에는 닫히는 개념이 없는 태그들이 있음
- self closing tag 
```html
<TAG> <!-- HTML1,2,3,4-->

<!-- XHTML -->
<TAG/> 
<TAG />
```
- '/'가 뒤에 붙거나 붙지 않는 태그로 구분될 수 있어 
  - HTML5에선 두 가지방식에서 가능 
  - XHTML 버전이나 Lint 환경 or 프레임워크 세팅에 따라 /를 사용하는 것이 필수가 될 수 있음 
    - 혼용하지는 말자

# HTML 문서의 범위 
- index.html 같은 HTML 파일 => HTML 문서

```html
<!DOCTYPE html>
<html>
    <head>
        문서의 정보
    </head>
    <body>
        문서의 구조
    </body>
</html>
```
- html의 전체 구조를 html 태그로 표현 
  - 정보를 head 태그로 표현
    - 문서가 가질 수 있는 정보의 내용 작성
  - 구조를 body 태그로 표현
    - 실제로 출력될 이미지, 내용 

```html
<head>
    <meta charset="UTF-8">
    <meta name="author" content="임호정">
    <meta name="description" content="최고">
    <title>
    </title>
    <link>
</head>
```

# DOCTYPE(DTD, 버전 지정)
- DOCTYPE(DTD, Document Type Definition)은 마크업 언어에서 문서 형식을 정의함 
- 웹 브라우저에 우리가 제공할 HTML 문서를 어떤 HTML 버전의 해석 방식으로 구조화하면 되는지를 알려줌
  - HTML은 크게 1,2,3,4,X-,5버전이 있음
  - 현재는 HTML5가 표준 모드

```html
<!-- HTML 5 -->
<!DOCTYPE html>
```
# HTML 문서의 정보

- head 태그 안에서 사용하는 태그들은 HTML 문서의 정보를 가지고 있음 

1. Title 태그 - 웹 페이지의 제목
    - HTML 문서의 제목을 정의 / 웹 브라우저의 각 사이트 탭에서 이름으로 표시됨
    ```html
    <head>
        <title>~~~</title>
    </head>
    ```
2. META 태그 - 웹 페이지의 정보
    - HTML 문서에 관한 정보(표시방식, 제작자, 내용, 키워드 등)를 검색엔진 or 브라우저에 제공함
    - 빈 태그
    ```html
    <head>
        <meta charset="UTF-8"> <!-- 문자 인코딩 방식을 명확히 설정해 두어야 함-->
        <meta name="author" content="임호정">
        <meta name="description" content="우리 사이트가 최고!">
        <!-- name : 정보의 종류, content : 정보값-->
    </head>
    ```
    - meta가 사용할 수 있는 속성이 정해져 있음
  
    |속성|의미|값|
    |---|---|---|
    |charset|문자인코딩방식|UTF-8, EUC-KR 등|
    |name|검색엔진 등에 제공하기 위한 정보와 종류(메타 데이터)|author, description, keywords, viewport 등|
    |content|name이나 http-equiv 속성의 값을 제공||
    - 상황에 맞게 찾아서 쓰면 됨

3. Link - CSS 불러오기
   - 외부 문서를 연결할 때 사용
   - 대부분 CSS, 사이트의 icon(파비콘)
   - 빈 태그
   ```html
    <head>
        <link rel="stylesheet" href="./main.css">
    </head>
   ```
   |속성|의미|값|
   |----|----|----|
   |rel|(필수)현재 문서와 외부 문서와의 관계를 지정|stylesheet, icon 등|
   |href|외부 문서의 위치를 지정|경로|

   - href는 필수가 아님
 - 

4. Style 태그 - css 작성하기
    - HTML 문서 내부에 CSS를 작성할 때 사용
    ```html
        <style>
            img {
                width: 100px;
                height: 200px;
            }
            p {
                font-size: 20px;
                font-weight: bold;
            }
        </style>
    ```

5. script 태그 - JS 불러오거나 작성하기
    - css는 link 태그로 불러오거나 style 태그 안에 작성할 수 있음
    - js는 script 태그로 두 방법 모두 가능
    ```html
    <!-- 첫 번째 방법 -->
    <script src="./js/main.js"></script>

    <!-- 두 번째 방법 -->
    <script>
        function windowOnClickHandler(event){
            console.log(event);
        }
    </script>
    ```

# HTML 문서의 구조
- body 태그 안에서 사용하는 태그들은 HTML 문서의 구조를 나타냄

1. DiV(막 쓰는 태그)
   - 문서의 부분이나 섹션을 정의
   - 명확한 의미를 가지지 않아 단순히 특정 범위를 묶는 용도로 사용함

2. IMG - 이미지 넎는 태그
   - img 태그는 HTML에 이미지를 삽입할 때 사용함
   - 웹 페이지의 이미지 삽입    
     1. HTML에서 삽입 => img
     2. css에서 삽입 => background
   ```html
   <body>
       <img src="./test.png" alt="메롱">
   <body>    
   ```

   |속성|의미|값|
   |-|-|-|
   |src|(필수)이미지의 URL|URL|
   |alt|(필수)이미지의 대체 텍스트(alternative)를 지정||
   - 필수 속성이 없으면 웹 표준에 어긋남
     - 필수 속성을 반드시 써주어야 함

# 웹 표준 검사하기 

 - W3C validator에 접속해 HTML 문서를 업로드하고 테스트가 가능 
 - 기본적인 표준 여부를 판단할 수 있음 
 - HTML 문서를 작성하면서 지켜야하는 이러한 규칙들이 많이 있음 

# HTML 예제 
 - 예제 일부분을 간단히 코딩해 볼 것
 - 헤더부분부터 시작
 - 

