CSS
===

- 선택자, 속성, 값이 있으며 무엇을 의미하는지 이해하는 것으로 기본 문법은 충분

```css
div {
    /* 글자 크기를 20px */
    font-size: 20px;
    /* 글자 색상을 red로 한다 */
    color: red;
}

선택자 {
    속성: 값;
    속성: 값;
}
```

# 선택자의 역할
- Selector라고도 하며, HTML에 CSS를 적용하기 위해 HTML의 특정한 요소를 선택하는 sign
```html
<div>
    <h1>제목..</h1>
    <p>본문..</p>
</div>
```
```css
h1 {
    color: red;
}
p {
    color: blue;
}
```

# 속성(properties)과 값(Value)
- 속성과 값은 글자색은 무엇, 너비는 얼마, 여백은 얼마 같은 스타일을 지정할 때 사용
- css에서의 속성은 properties / Html에서의 속성은 attributes라고 부름 
```css
div {
    color: red;/* 글자색은 빨강 */
    font-size: 20px;/* 글자 크기는 20px */
    width: 300px;/* 가로 너비는 300px */
    margin: 20px;/* 바깥 여백은 20px */
    padding: 10px 20px;/* 알쪽 여백은 위아래 10px, 좌우 20px */
    position: absolute;/* 위치는 부모 요소 기준 */
}
```
- 선택자 종류, 속성, 값에 대해 어떤 값들이 올 수 있는지 학습함

# 태그에 직접 작성하기 - 인라인 선언 방식 
- HTML 태그에 직접 작성 => 선택자가 필요하지 않음
- 선택자 : css 값을 어디에다가 적용할 지를 알려줌 
```html
<div style="color:red;">태그에 직접 작성1</div>
```
- 직접 태그를 찾아서 속성으로 값을 넣어주어야 함 
  - 되도록이면 피해주자
  - 안 쓰이는 것은 아님, JS가 HTML에 CSS를 강제로 삽입할 때 사용하긴 함 
  - 손으로 직접 작성하는 것은 최대한 피해주어야 하는 것일뿐 


# HTML에 포함하기(내장) - embeded
- css만 따로 작성하기 때문에 선택자가 필요함 
- CSS 코드가 HTML의 style 태그 안에 포함되어 있음 
```html
<head>
    <style>
    div{
        color: red;
    }
    </style>
</head>
<body>
    <div>HTML에 포함1...</div>
</body>
```
- 여기서 style 태그의 내용을 css 정보라고 보면 됨
- css 범위를 설정했고 글자 색깔을 지정해주었다. 
- 글자색은 빨간색으로 적용함 

# HTML 외부에서 불러오기 - link 태그
- css 코드를 완전히 분리할 수 있음
- 불러와서 사용할 수 있음
- 경로: 상대 경로 / 절대 경로  
```html
<head>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <div>HTML 외부에서 불러오기1</div>
</body>
```
```css
/* main.css */
div {
    color: red;
}
```
# 선택자
- HTML의 특정한 요소를 선택하는 sign

1. 태그로 찾기
   - 선택자를 입력하는 부분에 적용하려는(찾으려는) 태그의 이름을 입력
   - 해당하는 태그를 찾음
   ```css
   /* <h1>은 글자색이 빨강 */
    h1 {
        color: red;
    }
    /* <p>는 글자색이 파랑 */
    p {
        color: blue;
    }
   ```
   - 많은 태그들 중에 일부분에, 원하는 핵심만 찾아내기에는 무리가 있음 
   - 태그의 이름으로 가능하지만, 정확하지는 않아 

2. 클래스로 찾기
    - 좀 더 명확하게 원하는 요소를 찾기 위해서 '클래스 선택자'라는 것이 존재
    ```css
        /*class="title"은 글자색이 빨강 */
        .title {
            color: red;
        }

        /*class="main-text"는 글자색이 파랑 */
        .main-text {
            color: blue;
        }
    ```
    ```html
    <h1 class="title">제목1</h1> 
    <!-- red -->
    <p class="main-text">본문1</p>
    <!-- blue -->
    ```

# 속성
- 크기, 여백, 색상 같은 눈에 보이는 스타일을 지정할 수 있음
- 속성을 많이 아는 게 매우 중요 
- 속성이 의미하는 바, 시각적으로 어떻게 출력되는지 알고 있어야 함
   
1. 크기
   - width : 가로 너비 
   - 요소의 가로 너비를 지정 
   - 단위 : px(pixels)을 사용
    ```css
    div{
        width: 300px;
        /* 요소가로너비: 너비값; */
    }
    ```
    - width, height 값을 넣어서 사각형의 크기를 지정할 수 있다 

   - height : 세로 너비 
    ```css
    div {
        height: 300px;
    }
    ```
    - width, height 만 지정한다고 화면에 보이는 것이 아님 
      - 지정했다면 개발자 도구를 활용해서 확인 가능 
      - 왜? 요소에는 기본적으로 색상이 존재하지 않기 때문에 
        - 그래서 크기는 정해졌지만, 눈에 보이지 않을 뿐

    - font-size : 글자 크기
      - 요소 내용의 글자 크기를 지정
      - 기본 글자 크기는 16px
      ```css
        div {
            font-size: 16px;
            /* 글자크기: 크기값 */
        }
      ```
      - 기본값이라는 것이 존재하기 때문에, 지정한 적은 없지만, 16px로 있어서 기본값이 사용되어 출력됨 

2. 여백 
    - margin : 요소의 바깥 여백
        - 요소의 바깥 여백을 지정 
        - 바깥 여백 - 요소와 요소 사이의 여백(거리, 공간)을 생성할 때 사용함
    ```css
    div {
        margin: 20px;
        /* 요소 바깥 여백: 여백값 */
    }
    ```
    - margin은 요소의 위, 아래, 좌, 우 모두 20px의 여백을 지정하겠다는 의미 
      - 모두 동일하다면 이렇게 사용하자
    - 한 방향 씩 지정 가능
    ```css
    div {
        margin-top: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        margin-left: 20px;
    }
    ```
    - 개별적인 속성이라고 부름 
      - 이러한 개별 속성들을 아우르는 단축 속성이 존재 => margin
    - 단축 속성이 있는 태그들은 개별속성이 반드시 존재함

    - padding : 요소의 내부 여백
      - 요소의 내부 여백을 지정
      - 내부 여백은 자식 요소를 감싸는 여백을 의미
    ```css
    div {
        padding : 20px;
        /*요소 내부 여백: 여백값; */
    }
    ```
    - 한 방향씩 지정 가능 
    ```css
    div {
        padding-top: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
    }
    ```
    - 클래스를 여러 개 추가해서 다양한 CSS를 넣을 수 있음
    - padding을 추가하면 내부 width, height가 늘어난다
      - 내부 여백을 주었으니 당연하게 늘어남

3. 색상 
   - color : 글자 색상
       - 요소 내용의 글자 색상을 지정
       - font-color, text-color는 없음 

    - background : 요소 색상
      - 요소의 배경 색상을 지정
        - color: 글자의 색만 지정, 요소의 배경색을 바꾸려면 background-color가 필요함
    ```css
    div {
        background-color: red;
        /* 요소 배경 : 빨강 */
    }
    ```
    - background : 색상 -> 단축 속성 


