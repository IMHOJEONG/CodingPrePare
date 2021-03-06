- heropy.blog : 강사님 주소

[강사님 주소](https://heropy.blog/2019/04/24/html-css-starter/)

# 입문자에게 추천하는 HTML, CSS 첫걸음

- 의역, 생략되어 있는 부분이 있음 
- 학습할 때 어렵지 않게 HTML, CSS 입문을 목적으로 함

# HTML, CSS 그리고 Javascript

| HTML | CSS | Javascript |
|----------------|-------|-------|
| 페이지에 제목, 문단, 표, 이미지, 동영상 등을 정의 & 구조와 의미를 부여하는 정적 언어로 웹의 구조를 담당 | 마크업 언어(HTML, XML 등)가 실제 표시되는 방법을 지정하여 콘텐츠 구조를 꾸며주는 정적 언어로 웹의 시각적인 표현을 담당 | 콘텐츠를 바꾸고 움직이는 등 페이지를 동적으로 꾸며주는 역할을 하는 언어, 웹의 동적 처리 담당 |
| 화면을 예쁘게 만들려고 시도하지 X | 예쁘게 만드는 것만 집중할 수 있음 | HTML,CSS를 동원해 구조, 시각적 표현도 할 수 있지만, 성능적으로 잘 하지 못함|
| 온전히 튼튼한 구조(Semantic)를 만드는 것에만 집중 | 적당한 크기와 아름다운 색상 원하는 위치를 지정하는 데 집중 가능 | 동적 처리에만 집중해야 함 |

- 효율적인 작업을 위해 각 분야가 나뉘듯 
  - 웹 페이지 제작 시 구조적, 기술적으로 언어를 최적화시킬 필요가 있음
  
# 웹 표준 

 - 웹에서 사용되는 표준 기술이나 규칙 
 - 브라우저를 만드는 업체에서 표준 기술을 해석하는 차이, 새로운 기술 삽입 등으로 조금은 다르게 구동되는 브라우저가 생기게 됨
 - ActiveX, Flash 같은 기술은 표준이 아님
 - 표준화 제정 단계의 '권고안(REC)'에 해당하는 기술을 표준이라고 생각하면 쉬움
 - [웹 표준 확인 방법](https://wit.nts-corp.com/2013/10/16/280)
 - 권고안에 올리는 게 사실상의 표준 기술
  
# 크로스 브라우징(Cross Browsing)
 - 조금은 다르게 구동되는 여러 브라우저에서 동일한 사용자 경험을 줄 수 있도록 제작하는 기술, 방법
 - MSIE 브라우저는 여러 의미에서 표준화하기 쉽지 않은 브라우저
   - 너무 많이 쓰이고 있어서 무조건 지원해야 함
 - [이런 프로젝트도 존재했었음!](https://campaign.naver.com/goodbye_ie10/)
      
# 웹 접근성 

 - 정상적인 웹 콘텐츠 사용이 가능한 일반 사용자부터 고령자, 장애인 같은 신체적, 환경적 조건에 제한이 있는 사용자를 포함
   - 모든 사용자들이 동등하게 접근할 수 있는 웹 콘텐츠를 제작하는 방법
   - ex) 청각 장애인을 위해 영상에 자막을 넣거나, 마우스를 사용할 수 없는 사람들을 위해 키보드를 통해서도 웹을 이용할 수 있게 하는 등, 이미지에 대체 텍스트 적용 
   - [웹 접근성 1](https://www.wah.or.kr:444/Accessibility/define.asp)
   - [웹 접근성 2](https://www.wah.or.kr:444/Participation/guide.asp)
   - [웹 접근성 3](https://www.wah.or.kr:444/Participation/technique.asp)

# 정보 통신 보조기기
    
- 장애인의 경우 보조기기를 통해 웹 콘텐츠에 접근할 수 있어야 함
- 한 손 사용자용 키보드 
- 큰 키 키보드, n-Abler 조이스틱, SmartNa

# 웹 개발을 위한 에디터

 - Sublime Text 
   - 상대적으로 가볍고 성능 저하가 적은 편
   - 무료
 - Atom
   - Github에서 만든 텍스트 에디터 
   - 확장 기능도 충분 
   - 무료
 - Brackets
   - Adobe에서 만든 Text Editor
   - 오픈소스로 풀려 있음
   - Live Preview 기능이 기본으로 제공됨 
     - 시각적인 결과물을 확인하는데 특화
     - 확장 & 성능 최적화에 대해선 아쉬움
     - 무료
 - VS Code
   - MS에서 제작
   - 가볍게 시작 가능 
   - 무료
 - WebStorm
   - IDE 중 하나
   - 대부분의 프로젝트를 바로 시작할 수 있음
   - 유료, 편한 권장 프로그램

  - 여기서는 VS code로, 회사에서는 WebStorm으로 작업을 진행함
  
# VS Code 설치 

  - OS에 맞추어 설치
  - 인터페이스 
    - Side bar, 검색, 확장, 디버깅
  - Cmd + S : 파일 저장
  - New File -> HTML, CSS 파일 제작 가능 

# VS Code 확장 기능 

  - 확장 기능을 제공 & 다운로드 받아 설치 가능 
  - 해당 기능이 제공되는 것을 확인한 후 설치하는 것 추천
    - 에디터 버전 Up 과정에서 자체적으로 흡수하는 기능도 있을 수 있음 
  - 그래서 유명하고 많이 쓰이는 에디터를 쓰는 게 좋음 
    - 그만큼 좋은 기능이 많으니까

# Korean Langugage pack for VS Code 
   - 설치 후 재부팅 해주면 VS Code 한글화가 적용됨 
   - 폴더 열기 대신 파일 => 최근 항목 열기에서 쉽게 찾을 수 있음 

# VS 기본 

  - ! 작성 후 Enter, tab을 누르면 자동 완성이 가능 => html 구조 자동 완성

# Beautify & Live Server

- Beautify
  - 코드가 지저분해질 수 있는데, 이것을 일일이 고치는 것은 번거로움 
    - 확장 기능으로 Beautify를 사용할 수 있음 
    - 설치하고 바로 사용은 불가 => 설정이 필요
    - 명령에서 단축키를 설정해서 사용하자 
  - Mac과는 달리 파일 => 기본 설정 => 바로 가기키에서 설정
    - Beautify file => 파일 전체를 beautify를 적용 
      - 원하지 않는 결과(의도하지 않은 결과)가 나올 수도 있어 
      - Beautify selection만 사용하자 
      - 설정 부분에서 selection을 ctrl+alt+L로 등록 
- Live Server
  - 코딩을 바로바로 화면에서 체크 가능 
  - 파일 하단에 Go Live 버튼으로 확인 가능
    - 파일에서 우클릭 => Open With Live Server를 통해 열 수 있음
  - HTML, CSS, JAVASCRIPT라는 코드를 바로바로 볼 수 있음 
  - port:~~~을 누르면 종료 가능 
  
# 확장 프로그램 & 단축키 

- 확장 program
  - Terminal, Live Sass Compiler, Turbo Console log
  - Better Comments, Highlight Matching Tag
  - GitLens, REST Client

- 단축키 
  - 아까 설정했던 파일 => 기본설정 => 바로 가기 키에서 참고
  - 맨 앞에 큰따옴표 하나를 입력해서 
    - "ctrl + alt + 로 이 키들을 사용하는 단축키를 검색 가능 
  - ex) Ctrl + F : 검색 => Ctrl + H : 바꾸기 
  - 들여쓰기 : 커서가 가장 앞에 있을 때 tab, 내어쓰기는 shift + tab
    - 전체 줄이 Highlight되어 있어도 적용 가능 
  - 화면 분할 : 탭에서 오른쪽 또는 ctrl + \ 
    - focus는 ctrl + 숫자 
    - 창 종료 : ctrl + w
  - 태그 래핑을 어떻게 하는가??
    - ctrl + shift + p (모든 명령어 검색) => wrap 검색 
      - wrap with abbreviation에 div 입력 
    - 또는 emmet이라는 문법을 이용하자

# 웹에서 사용하는 이미지 
  
  - 비트맵 & 벡터 이미지
    - 이미지 -> 비트맵 / 벡터
      1. 비트맵 
         - 픽셀이 모여 만들어진 정보의 집합
         - 레스터 이미지
         - 픽셀 단위로 화면에 렌더링 함 
           - 렌더링 : 컴퓨터가 화면에 그림을 그려서 우리가 볼 수 있게 함
         - 일반적으로 사용하는 대부분의 이미지가 비트맵 형식
           - jpg, png, gif, webp
         - 그림판, 포토샵과 같은 툴로 편집 가능
       2. 벡터
          - 수학적 정보의 형태들이 만들어내는 결과물
          - 이미지가 가지고 있는 점, 선, 면의 위치(좌표), 색상 등의 정보를 온전히 가지고 있음 & 화면에 렌더링함
          - 더 많은 연산을 해야 하지만, 대신 해상도(픽셀)에 영향을 비트맵 이미지와 달리 해상도로부터 자유롭게 렌더링 가능
            - 확대, 축소를 해도 이미지가 깨지지 않음
          - 수학적 정보만을 가지고 있어
            - 이미지 확대/축소에 다른 용량 변화가 없음 
              - 단점 : 용량 축소 목적으로 작게 만들어도 용량은 그대로 일 수 있음 
     - 비트맵
       - 정교하고 다양한 색상을 자연스럽게 표현
       - 확대 축소 시 계단 현상, 품질 저하
     - 벡터
       - 확대 축소에서 자유로움, 용량 변화가 없음 
       - 정교한 이미지(인물, 풍경 사진 같은)를 표현하기 어려움

# JPG, PNG, GIF, WEBP, SVG

- JPG(JPEG)
  - Joint Photographic coding Experts Group
  - Full-color와 Gray-scale의 압축을 위해 만들어짐 
  - 압축률이 훌륭해 사진 or 예술 분야에서 많이 사용됨
  - 손실 압축
    - 이미지의 용량을 획기적으로 줄여준다는 장점
    - 이미지가 손상된다는 단점
    - 여러 번 저장하는 것을 조심!
      - 용량이 적게 들지만!
  - 표현 색상도(24비트, 1600만 색상) 뛰어나 고해상도 표시장치 에 적합
  - 이미지의 품질과 용량을 쉽게 조절 가능 
  - 가장 널리 쓰이는 이미지 포맷
  - `높은 압축률(적은 용량)`

- PNG
  - Portable Network Graphics 
  - Gif의 대체 포맷으로 개발됨
  - 비손실 압축
  - 8비트(256 색상) / 24비트(약 1600만 색상) 컬러 이미지 처리
  - Alpha Channel 지원(투명도)
  - W3C 권장 포맷
  - `투명도 지원`

- GIF
  - Graphics Intechange Format 
  - 이미지 파일 내, 이미지 및 문자열 같은 정보들을 저장할 수 있음 
  - 비손실 압축 
  - 여러 장의 이미지를 한 개의 파일에 담을 수 있음(움짤, 애니메이션)
  - 8비트 컬러만 지원(다양한 색상을 표현하는 작업에는 적합하지 않음)
  - `동영상 같은 이미지(애니메이션)`

- WEBP 
  - JPG, PNG, GIF를 모두 대체할 수 있는 구글이 개발한 이미지 포맷
  - 완벽한 손실/비손실 압축 지원
  - GIF 같은 애니메이션 지원
  - Alpha Channel 지원(손실, 비손실 모두)
  - `완벽한 포맷! 그러나 지원 브라우저가....`
  - 크로스 플랫폼을 다 해결하기에는 완벽하지는 않음..
  
- SVG ( 벡터 기반 )
  - Scalable Vector Graphics
  - 마크업 언어(HTML/XML) 기반의 벡터 그래픽을 표현하는 포맷
  - 해상도의 영향에서 자유로움
  - CSS로 Styling 가능
  - JavaScript로 Event Handling 가능 
  - 코드 혹은 파일로 사용 가능 
  - `벡터 이미지에 익숙하지 않다면 다루기 조금 까다로울 수 있음`

# 특수 기호
|기호| 영어(발음)|한글|
|---|---|---|
|`|Grave(그레이브)|-|
|~|Tilde(틸드)|물결표시|
|!|Exclamation mark|느낌표|
|@|At(엣) sign|골뱅이|
|#|Number sign, Sharp|샵, 우물 정|
|$|Dollar sign|달러|
|%|Percent sign|퍼센트|
|^|Caret|-|
|&|Ampersand|-|
|*|Asterisk|별표|
|-|Hyphen, Dash|마이너스|
|_|Underscore, Low dash| 밑줄|
|=|Equals sign| 이꼬르|
|"|Qutation mark|큰 따옴표|
|'|Apostrophe|작은 따옴표|
|:|Colon|땡땡이|
|;|Semicolon|털 달린 땡땡이|
|,|Comma|쉼표|
|.|Period, Dot|점, 마침표|
|?|Question mark|물음표|
|/|Slash|-|
|\||Vertical bar|-|
|\\|Backslash|-|
|()|Parenthesis|(소)괄호|
|{}|Brace|중괄호|
|[]|Bracket|대괄호|
|<>|Angle Bracket|꺽쇠괄호|

- [HTML Entity List](https://www.freeformatter.com/html-entities.html)

- css에 At rules도 존재 
  
- 원하지 않는 경로가 입력되는 경우 때문에 entity 기호들을 이용해서 우회접속을 하는 경우가 생김 

# 오픈소스 라이선스

- 다양한 종류의 오픈소스 라이선스가 존재 
  - 개인적 이용은 가능하지만, 상업적 이용에 제한이 있거나 경우에 따라 비용을 지불해야 할 수도 있음 
  - 현실적으로 처음부터 끝까지 모든 코드를 직접 작성할 수 없음
    - 오픈소스에 의존하게 됨 
    - 문제가 되서 해고 or 피해 보상을 해줘야 할 지도 모름...
  - Apache License
    - 아파치 SW 재단에서 자체 SW에 적용하기 위해 만든 라이선스 
    - 개인적/상업적 이용, 배포, 수정, 특허 신청이 가능
  - MIT License
    - MIT에서 SW 학생들을 위해 개발한 라이선스
    - 개인 소스에 이 라이선스를 사용하고 있다는 표시만 지켜주면 되며, 나머지 사용에 대한 제약은 없어 인기가 많음
  - BSD License
    - 버클리 캘리포니아 대학에서 개발한 라이선스
    - 라이선스 표시만 지켜주면 됨
  - Beerware
    - 오픈소스 개발자에게 맥주를 사줘야 하는 라이선스
    - [OpenSource.org](https://opensource.org/licenses)
  - 이 문제는 무시하면 안 되고 큰 피해를 볼 수 있음 
  
  