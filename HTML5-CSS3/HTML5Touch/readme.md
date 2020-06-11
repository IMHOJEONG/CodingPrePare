[참고 도서](http://www.yes24.com/Product/Goods/24525227) - HTML5로 터치 인터페이스 만들기

- 왜 li 태그에 nav-li 클래스를 사용하는가?
  1. 클래스들은 코드가 많아질수록 관리하기 쉬움
     - nav-li를 사용하는 것이 nav ul li와 같은 셀렉터를 사용하는 것보다 더 명확하고 안정감이 있으며 구성하기 쉬움
  2. 사이트가 안드로이드 폰에서도 동작해야 하기 때문에, CSS 셀렉터 성능에 관해서 까다롭게 해야 함!
  - 계층 구조의 셀렉터는 피해야 한다는 의미
  3. 브라우저는 CSS 셀렉터를 처리할 때 오른쪽에서 왼쪽으로 동작함
  - nav ul li의 경우 => 맨 오른쪽에 있는 a와 일치하는 모든 elements를 얻고 다음 li a와 매치되는 것이 있는지 확인
  - 계층적으로 사용된 셀렉터들은 매우 편리해 보일지 모르지만 매우 많은 비용이 소모됨

## HTTP-EQUIV 속성

- http-equiv 메타 엘리먼트들은 브라우저가 마치 같은 HTTP 헤더가 세팅되어 있는 것처럼 행동하게 함
- 일반적으로 서버가 하는 것들을 브라우저에게 명령할 수 있음 => 서버를 제어하지 못하는 환경에서 유용하게 사용 가능
  - 캐시 헤더를 세팅하고 싶지만 서버를 제어할 수 없다면
  ```html
  <meta http-equiv="expires" content="Wed, 05 August 2020 00:00:00 GMT" />
  ```
  - 위의 코드처럼 http-equiv를 사용하면 됨
- 서버 헤더들이 항상 우선하기 때문에, 단지 헤더를 세팅하거나 세팅을 해제할 수 있을 뿐
  - 서버 헤더들을 무시하도록 처리할 수 없음

## HTML5 doctype으로 시작했고, UTF-8 캐릭터 셋으로 명시

- 캐릭터 셋을 명시하는 것은 매우 중요
- 문서의 적절한 화면 표시를 보장 & UTF-7이 가지는 보안상 취약점을 회피할 수 있음
- 서버는 일반적으로 Content-Type 헤더를 전송할 것
  - 만약을 위해서 HTML 내에 그것을 명시함
- 비 표준 X-UA-Compatible 헤더를 세팅하기 위해 http-equiv 속성을 사용
  - 값은 chrome=1 과 IE=edge
    - 크롬 프레임은 지원이 가능하고, IE는 최신의 엔진에서 지원이 가능함

## 메타 속성 viewport

- 현재 Touch 디바이스에서만 사용되고 있으며, 속성에 대해 제대로 이해하자!!!
- 아이폰 이전 모바일 브라우저 => 고정된 웹페이지에 콘텐츠를 맞추려는 다양한 시도를 함
- 아이폰의 사파리는 이런 시도를 더 이상 X
  - viewport라고 불리는 가상 윈도우에 웹페이지를 표기하는 방법을 선택
    - 웹 페이지의 특정 부분을 Zoom in 또는 전체를 볼 수 있도록 Zoom out을 할 수 있는 기능이 제공된 것
- 페이지를 표시하는 control들을 개발자들에게 제공하기 위해 애플은 viewport 메타 엘리먼트를 제공

* 가상 픽셀

  - 픽셀 : 웹 페이지의 레이아웃을 잡는 데 가장 정확하고 단순한 방법
  - 픽셀 - 화면에서 가장 작은 단위
  - 모바일 브라우저에서의 픽셀과 데스크톱의 픽셀은 차이가 존재
    - 차이는 아이폰에서 볼 수 있음
    - viewport 메타 태그가 없는 페이지 상에서 300px 폭을 가지는 엘리먼트는 viewport 상에서의 가상 픽셀로 300px 폭을 가지게 됨
  - viewport의 기본 폭은 980px

  ```html
  <meta name="viewport" content="width=600" />
  ```

  - CSS 안에서 600px로 정의된 엘리먼트는 초기 페이지가 로딩되거나, 줌아웃을 위해 더블탭을 할 때 수평으로 화면을 채우게 될 듯

  - viewport는 가상 윈도우(virtual window), viewport의 경계는 브라우저의 경계가 아니라 윈도우의 경계가 됨
  - 픽셀 값 뿐만 아니라, viewport 폭과 높이는 디바이스 화면의 실제 크기를 의미하는 device-width와 device-height를 처리함

- 속성과 설명은 개인적으로 찾아보자

- 안드로이드 디바이스들이 가지는 device-width는 인터페이스 엘리먼트들의 레이아웃을 잡기 위해 device-width의 이상적인 크기에 대해 디바이스 개발자들이 고민한 결과
  - device-width 값은 디바이스에 따라 많은 차이가 있음
    - 디바이스-폭의 viewport 폭으로 웹 페이아웃을 잡을 때, 전통적인 데스크톱 site에서의 liquid layout과 같이 레이아웃을 어느 정도 늘리고 줄이는 것이 가능하도록 할 필요가 있음

```html
<meta name="viewport" content="width=device-width" />
```

- 위의 코드는 대개의 경우 최선이 될 수 있음
  - 사용자의 디바이스 환경에 완벽하게 맞는 인터페이스를 제공할 수 있고, 폭이 깨질 걱정을 안 해도 됨

* PX와 EM
  - em : 항상 현재 폰트 크기를 나타냄
    - 만일 폰트가 12px라면, 1em은 12px
  - 하나의 픽셀은 화면상에서 하나의 픽셀
    - 브라우저에서 폰트 크기를 변경하는 기능을 사용하는 것이 일반화되면서 2005년부터 em을 사용하는 것이 인기를 끌었다고 함
    - em은 폰트 크기와 관련되기 때문에 사용자가 폰트 사이즈를 선택할 수 있는 레이아웃을 쉽게 구성 가능
  - But, IE 7.0 이후부터는 브라우저가 전체 페이지를 Zooming 할 수 있는 기능을 가지게 됨
    - px는 단순함 때문에 디자이너들 사이에서 인기있는 선택이 됨
    - 픽셀 : 커뮤니케이션을 명확하게 하고, 이해도를 높여줌
  - em, ex는 레이아웃보다 식자에 활용도가 높은 반면, px가 웹페이지의 레이아웃을 잡기에는 가장 편리한 단위

- 반응형 CSS
  - two-column liquid layout
    - 데스크톱의 콘텐츠 영역은 내비게이션 버튼을 포함해 리쿼드와 사이드바로 고정됨
  - 갈매기 이미자가 100% 최대폭을 가지고 있다는 것 & .hero-shot가 폭과 관련이 있다는 점에 주목
    - 반응형 컨테이너 폭에 비례에 자동적으로 크기가 변하는 것을 말함
  - 반응형 이미지 기술 : 사용자의 디바이스가 너무 많은 바이트를 다운로드한다는 단점

## 분기점 생성 (BreakPoint)

- 전체적인 디자인과 레이아웃은 사용자의 디바이스 크기에 맞춰 적용될 수 있도록 하는 관점에서 설계됨 => 우리의 예시의 모바일, 데스크톱 버전
  - 태블릿을 위한 800px, 모바일 폰을 위한 480px
- 미디어 쿼리 : JS를 사용하지 않고 디자인을 가능하게 해줌

* 미디어 쿼리(MEDIA QUERIES)
  - CSS3는 많은 기준을 가지고 stylesheet를 필터링할 수 있는 매우 강력한 구문을 제공
  - 미디어 타입 대신 미디어 쿼리를 명시 가능
  - 미디어 타입과 하나 이상의 표현식으로 구성됨
  - 참 or 거짓을 결정 => 참일 경우 스타일 시트가 적용됨
  - 불리언(Boolean) 연산자를 함께 사용할 수 있음
    - not 연산자 : 부정 쿼리가 뒤에 오는 조건을 부정하는 연산이 됨
    - 대부분 only 연산자를 사용할 것 => only 연산자 - 오래된 브라우저에서는 처리할 수 없고 실질적으로 생략해도 됨
  - 연산자 다음에 미디어 타입이 옴
    - ex) 화면 폭을 기반으로 해 스타일을 변경할 것
      - 미디어 폭의 특성으로 가능함, 필터링을 위한 값을 가지고 있음(유효한 CSS 단위로 명시)

```html
<!-- 소형 화면을 위한 스타일 시트 -->
<link
  rel="stylesheet"
  media="only screen and (max-width: 480px)"
  href="phone-style.css"
/>

<!-- 대형 화면을 위해 스타일 시트 제한  -->
<link rel="stylesheet" media="only screen and (max-width: 2000px)>
```

- 위의 코드에서 픽셀 값은 어떤 브라우저를 선택했느냐에 달려 있음
  - ex) 레티나 디스플레이를 사용하는 아이폰이 수직으로 세워진 경우
    - 실제 화면의 물리적인 픽셀과는 상관없이 미디어 쿼리를 위한 값은 320px이 됨
  - 자세한 설명은 모질라 개발자 Network를 방문해보자
  - [mediaqueri.es](https://mediaqueri.es/)

* 미디어 쿼리의 실질적인 장점

  - 미디어의 외형적인 속성을 사용할 수 있다는 점
  - @media 지시자를 사용해 스타일 시트 내에서 사용이 가능함

  ```css
  @media only screen and (max-width: 800px) {
    /* 오직 이 경우에만 적용되는 CSS */
  }
  ```

  - 구문은 미디어 파라미터와 동일, @media 지시자는 중괄호 {} 사이에 블록을 생성함
  - 괄호 안에 있는 CSS는 참이 리턴될 경우에만 적용됨
    - 그렇지 않으면 브라우저는 블록 안에 있는 CSS를 무시

* width : auto => 모든 텍스트를 맞춤
* 자신의 브라우저의 크기를 조절해야 하는 데스크톱 사용자의 경우 브라우저 폭에 근거해야 함

  - 이런 스타일들을 하나의 물리적인 device-width에만 적용하려면
    - max-device-width / min-device-width를 사용해야 함
  - 스타일들은 일반적으로 미디어 쿼리에 종속적

* 데스크톱 브라우저에서 접속하면 브라우저 크기를 조절하면서 스타일 변화를 확인 가능

# 최초 로딩 속도 향상

- 첫 로딩 속도가 빨라야 한다 => 사이트의 반응성을 높이는 데 기본적, 필수적인 부분
- 최초 로딩 속도 : 첫 바이트 로딩 시간으로 측정
  - 사용자가 페이지를 요청했을 때부터 서버로부터 첫 바이트가 다운되기 시작했을 때까지의 시간
  - 첫 바이트 로딩 시간 => 문제 인지, 측정, 최적화하는 데 있어서 중요
    - 느려지는 이유는 대부분 다른 데 존재
    - 문제는 맨 앞 단에서 해결해야 함
    - PageSpeed, YSlow, 많은 tool과 service가 존재

## 브라우저가 페이지를 로딩하는 방법

1. 도메인 분석
   - 브라우저는 웹 사이트의 IP를 알아야 함
     - 도메인 이름으로 DNS 서버에 요청하면 IP 주소를 DNS 서버가 알려주는 방식
       - DNS 서버의 부하를 줄이고 성능을 향상하기 위해, DNS 검색 목록(lookup)들이 브라우저와 디바이스에 의해 캐싱됨
       - 디바이스와 서버 간의 라우터와 프록시도 캐싱을 함
         - why? DNS 기록을 관리해 효율성을 유지하기 위함
2. 요청 생성
   - 브라우저는 DNS 목록(lookup)으로 부터 IP를 확인한 다음 그 IP를 가지고 서버와 TCP 연결을 생성하고 요청을 전송
   - 요청 : URL, 브라우저 정보, 데이터 타입(인코딩과 언어), 페이지와 관련된 쿠키들이 포함됨
3. 응답(Response) 다운로드
   - 브라우저가 응답을 다운로드하기 시작함
   - 응답 스트림을 처리하기 위해, 브라우저는 HTML 내 추가 리소스를 식별하고 이들을 분석하고, 리소스들을 파싱하기 시작함
4. 페이지 렌더링
   - 브라우저는 최대한 빨리 페이지를 렌더링하기 시작함
   - 만일 CSS or 스크립트 파일이 있으면, 브라우저는 이 파일들이 연결된 후에 콘텐츠가 렌더링될 수 있도록 하기 위해서 파일들이 로딩되고 파싱될 때까지 대기(JS의 경우 실행될 때까지 대기)

- 웹킷
  - 실제 디바이스에서 테스트와 최적화에 대해 신경 쓰기 전에 데스크토베서 크롬이나 사파리만을 이용해 많은 작업을 할 수 있음
  - Safari Web Inspector 등, 성능이 이슈가 될 때는 네트워크에서 실행하면 됨

## 페이지가 느린 이유

- HTTP 요청 횟수, 바이트 수, 대기하는 동안 렌더링 중단, 대기 시간, 낮은 캐시 성능

  ## HTTP 요청 횟수

  - 모든 외부 리소스는 각각 HTTP 요청을 하게 됨, HTTP 요청은 데이터를 다운로드하는 것처럼 단순 X
    - 모든 요청에 있어서 오버헤드가 존재
      - 모든 요청들이 순차적으로 생성된다면 많은 작은 파일들이 존재할 경우 => 하나의 큰 파일보다 속도가 더 느려질 것
  - 브라우저는 여러 개의 파일을 병렬적으로 다운로드 함
    - safari의 경우 호스트네임 하나당 6개의 요청을 병렬적으로 수행할 수 있으며, 호스트네임을 추가(가상 도메인이나 하부 도메인을 세팅)함으로써, 더 많은 파일들을 병렬적으로 수행 가능
      - 각각의 요청들은 여전히 HTTP 오버헤드에 대한 부담을 가짐
  - why?? 병렬처리가 도움이 되지 않는 특이한 상황으로 볼 수 있음 => 2개의 다운로드가 동시에 실행되는 것이 한 번 다운로드하는 것보다 성능이 2배 빠르지 않음
    - 병렬처리는 궁극적으로 오버헤드의 비용을 극복할 수 없는 한계
      - 새로운 요청을 생성하기 위해 비용이 들어가고 각각의 다운로드가 CPU, 메모리 사용 관점에서 비용을 가지고 있기 때문
  - 용량이 큰 이미지 파일의 경우는 상황이 다름
    - 일반적으로 요청 시간이 대량으로 소요되기 때문에, 병렬 처리가 더 효과적
      - 사이트에서 분리된 도메인에서 이미지와 데이터를 서비스하는 이유가 이것
    - ex) Yahoo - 대용량 파일의 성능 향상을 위해 가상 도메인 2개를 이용해 병렬 다운로드가 가능하다는 것을 찾아냄
  - 여전히 병렬 요청은 한계 존재 => 특정 시점에서 브라우저는 다음 다운로드가 시작되기 전에 종료 요청을 기다려야 함
    - 사이트의 모든 서비스가 같은 도메인으로 제공되고 있는 경우, 다수의 도메인에서 제공하는 것보다 첫 번째 로드가 느릴 수 있따는 것을 의미
      - But, 도메인을 추가한다 해도, 각 외부 도메인이 외부 DNS lookup을 요청 하기 때문 => 실질적으로 속도가 느려지는 현상을 초래
        - 적어도 2~5개의 도메인을 사용하는 것이 YSlow에서 말하는 원칙
  - 또 다른 고려 사항은 쿠키!!
    - 만일 도메인이나 요청 경로와 일치하는 쿠키가 있다면, 모든 요청 시에 함께 전송될 것
    - 우리가 만든 도메인에 처음 접속할 때 수 Kbytes의 쿠키를 세팅해 놓을 경우, 그 후 모든 요청 시 요청 헤더에 그 바이트들을 포함해 전송하고 압축을 해제할 것
    - 서버는 요청 바디(Request body)를 읽기 전에 쿠키를 읽어야 함 => 쿠키는 하나의 작은 요청이 될 수 있어.

  ## 바이트 수 (BYTE COUNT)

  - 페이지는 늘 작게 시작, JS 라이브러리, 스타일, 이미지가 추가되면 페이지는 몇 배 더 커질 것
  - 다운로드되는 파일의 크기를 줄이기 위해 할 수 있는 어떤 것이든 시간을 투자할 가치가 있음

  ## 대기하는 동안 렌더링 중단

  - 인지 성능? : 실제로 속도를 향상할 수 있는 방법이 아니라, 사용자에게 더 빠르게 보일 수 있는 방법을 얘기할 것
  - 사용자의 피드백은 민감하게 받아들어야 할 중요한 부분!
    - 브라우저가 로딩되는 동안 빈 페이지가 보인다면 사용자는 연결이 끊어졌거나 페이지가 느리다고 생각할 것
    - 만일 모든 정보가 로드되지 않았더라도 사용자가 우리가 제작한 페이지를 볼 수 있다면 인지 성능은 대단히 좋아짐
  - ex) script 태그는 스크립트가 패치되고 파싱되고 실행되기까지 HTML의 렌더링을 중단시킴
    - 우리가 헤더 안에 4~5라인의 JS를 추가했다면, 사용자에게 무엇이든지 보고 싶으면 이 모든 스크립트가 로딩될 때까지 그냥 기다리라고 강요하는 것과 같음.

  ## 대기 시간

  - 네트워크 연결 : 대역폭(bandwidth-bits)과 대기 시간(latency-milliseconds)으로 측정함
    - 대기 시간 : 요청이 추가되면서 늘어나게 됨
    - 다운로드가 시작될 때까지 기다리는 것 자체가 매우 고통스러운 일이기 때문 => 대기 시간에 대해 사용자들은 늘 짜증을 냄
      - 대기 시간은 많은 요청 때문에 문제가 더 커짐

  ## 낮은 캐시 성능

  - 캐시 최적화???, PageSpeed, YSlow의 여러 규칙들을 올바르게 설정해 브라우저가 데이터를 재패치(re-fetching)하지 않도록 해야 한다는 것을 기억!

* SPDY와 HTTP 파이프라이닝
  - 왜 각각의 요청에 대해 HTTP 오버헤드를 감수해야 하는가???
    - 만일 모든 요청들이 동일한 도메인으로 간다면 단지 커넥션을 맺고 데이터를 연속으로 다운로드하면 안 되는가????
    - SPDY, HTTP/1.1에 정의된 파이프라이닝이 있었지만,
    - [구글, 2016부터 HTTP/2지원](http://www.bloter.net/archives/220155)

## YSlow, PageSpeed를 이용한 속도 향상

- CDN(Content Delivery Network) : 특정 콘텐츠를 서비스하는데 이용되며, 여러 지역에 수많은 서버들이 있어 사용자와 최대한 가까운 거리에 위치
  - 일반적으로 이미지, JS, CSS 파일들을 위해 사용됨
- 광케이블 안에서 빛의 속도는 진공 상태보다 느림 => 1천 KM에 11ms 정도가 걸림 => 서버가 멀리 위치한다면 시간은 늘어날 것
  - 반면 CDN은 사용자와 매우 가깝게 서버를 구성
  - CDN을 사용할 경우, 우리가 CDN에 파일을 업로드하지 않음
    - CDN은 우리 서버로부터 콘텐츠를 패치하고 사용자에게 그 콘텐츠를 패치하기 위해 Cache에 저장함
      - 파일이 전용라인으로 전송되어 파일을 요청하는 첫 번째 사용자는 장점이 적을 수 있고, 여전히 그 사용자는 거리로 인한 대기 시간 감수해야 함
      - But, 이후에 파일을 요청하는 동일한 지역에 있는 다른 사용자들은 캐시된 버전으로 서비스를 받을 수 있음
- Edge Cache의 전체적인 효과는 히트율(hit rate)에 기반, CDN 캐시에 대한 대부분의 요청들이 빈 캐시나, 캐시에 없는 요청일 경우에는 장점이 제한적
  - 이런 경우, 너무 많은 서로 다른 URL을 가지고 있거나 트래픽이 낮고 지역적으로 넓게 퍼져 있어서 에지 캐시의 효과를 볼 수 있는 경우가 드물기 때문에 발생할 수 있는 현상

## PageSpeed

- YSlow와 달리 모바일용 룰셋을 가지고 있음
- rules
  - 캐싱 최적화 - 애플리케이션의 데이터와 로직 유지
  - 왕복 시간 최소화 - 순차적인 요청/응답 사이클의 횟수 감소
  - 요청 오버헤드 최소화 - 업로드 크기 감소
  - 페이로드 크기 최소화 - 응답, 다운로드, 캐시된 페이지의 크기 감소
  - 브라우저 렌더링 최적화 - 브라우저의 페이지 레이아웃 개선
  - 모바일 최적화 - 모바일 네트워크와 모바일 디바이스의 특성에 맞게 사이트 변경
- 일반적인 경우, 모바일 사용자들은 별도의 모바일 웹사이트로 리다이렉트되어 접속함
  - 리다이렉트로 인해 부가적인 접속이 추가되기 때문에 매우 고비용의 방법일 수 밖에 없음
    - 헤더 안에 있는 리다이렉트 전송 메시지는 다른 위치에 있는 다른 리소스를 패치하라는 의미
      - 리다이렉트를 캐시한다면 어느 정도 경감 가능 => expires(만료) 헤더를 포함하면 됨

```html
HTTP/1.1 302 Moved Temporarily ~~~~~ Expires: Sat, 25 Aug ~~~ Cache-Control:
private, max-age:86400
```

- 많은 사용자들이 성능 향상을 위해 캐시 기능이 있는 프록시를 통해 인터넷을 접속하고 있음
  - 리다이렉트가 캐시되었다면 모바일 사용자는 데스크톱 사용자와 동일한 프록시를 통해 리다이렉트된 모바일 사이트로 접속할 수 있을 것

## 일반적인 문제 해결

- 찰스 프록시라는 툴도 존재
- 페이지가 3.5초라는 로딩 시간 => 명백하게 높은 대기 시간도 문제 But, 향상될 수 있는 많은 요인 존재
  - 요청이 너무 많다, JQuery 로딩이 끝나기 전에 이미지 로딩은 시작조차 되지 않음, 이미지가 너무 큼
- 적응형 이미지 : 우리가 필요로 하는 것보다 더 많은 바이트를 다운로드 해야 함

## 요청이 너무 많다

- 미디어 쿼리를 사용하는 모바일에서 하나의 파일과 하나의 요청을 CSS 파일로 묶는 것은 매우 사소한 일
- link 내에서 media 파라미터를 사용하는 대신 CSS 미디어 쿼리를 사용할 수 있음

```html
<link
  rel="stylesheet"
  media="only screen and (max-width: 800px)"
  href="tablet.css"
/>
```

- 위의 코드를 다음과 같이 변경

```css
@meida only screen and (max-width: 800px) {
}
```

- css 파일을 보면, CSS 파일들을 모두 묶었다면??

```css
/* Reset.css content */
/* Birds.css */
@media only screen and (max-width: 800px) {
  /* Tablet.css content */
}

@media only screen and (max-width: 480px) {
  /* Phone.css content */
}
```

- 고려할 것이 있다면, 빈 캐시를 살펴보자
  - 모바일 브라우저 캐시는 매우 제한적!!
  - 인라인 스타일들을 그때그때 처리할 것, 조금이라도 바이트를 절약하기 위해 화이트 스페이스를 제거

## 최상 경로(CRITICAL PATH)

- 스타일들을 인라인으로 처리하는 것은 상황을 크게 개선할 수 없음
- 이미지, JQuery의 경우, 이미지는 JQuery가 종료될 때까지 로딩을 시작하지도 않음
  - JQuery가 로드되고 파싱되기 전까지 스크립트 태그들의 렌더링이 중단되기 때문
  - 스크립트 태그가 렌더링되기 전에 이미지 태그는 다큐먼트 내에 존재하지 않기 때문에 브라우저는 jQuery가 완전히 로드되기 전까지는 패치를 시작할 수 없음
    - 빠른 해결 방법 : 스크립트를 페이지 상단이 아닌 페이지 하단에 넣는 것
      - 사용자에게 빈 페이지를 보여주지 않으면서 스크립트가 패치될 수 있음, 인라인 리소스들이 스크립트와 병렬적으로 패치될 수 있음
- 사용자는 모든 리소스가 로딩되기까지 얼마나 오래 걸리는지에 대한 성능 측정을 하지 않음
  - 그들이 원하는 콘텐츠를 보기 위해 그들이 얼마나 오래 기다려야 하는지를 기준으로 성능을 인식할 뿐

## 이미지가 너무 크다

- 모바일 사이트를 위해 바이트를 줄이려고 할 때, 일반적으로 이미지는 가장 큰 문제가 된다.
  - 최근 폰들은 고화질 화면이라는 것
  - 모바일 사용자들은 일반적으로 네트워크가 느리지만, 고화질의 화면은 데스크톱과 동일하거나 그보다 높은 배율의 이미지를 요구한다.
  - 사용자들은 자신들에게 그들이 필요한 크기의 이미지가 다운로드되기를 원함
    - 브라우저에서 고해상도 이미지를 사용하는 것은 많은 노동력을 필요로 하고 그만큼의 비용이 소모될 수 밖에 없음
      - 우리가 필요로 하는 모든 크기를 만들어낼 수 없다면, 어느 선에서 타협해야 함

* 결정하기 위해서 실제 데이터보다 더 나은 것은 없음
  - 사용자들이 가로로 보는지, 세로로 보는지, 화면 조정을 하는지 등 사용자들의 행위에 대해 수집하는 간단한 리포팅 툴들을 만들 수 있음
  - 대부분의 모바일 사용자들은 요금제에 따라 사용할 수 있는 데이터 양이 제한되어 있다는 것을 명심!
    - retina 화면에서는 큰 이미지가 좋아 보일 수 있음
      - But, 신중해야 함 => 우리가 사용자들에게 큰 이미지에 대한 비용을 지불할 것인지 물어볼 필요가 있음
        - 모바일 디자인이 불필요한 부분을 잘라낸 이미지를 가지고 있는 이유가 이것

- 미디어 쿼리가 디스플레이의 속성에 기반해 스타일들을 오버라이드하는 방법을 제시하며 도움을 주었음
  - img 태그를 백그라운드 이미지가 포함된 div로 변경해야 함
  - 그리고 코드 안에 더 많은 Semantic을 선호한다면, src에 아주 작은 투명한 GIF와 함께 이미지 태그를 사용할 수 있음
    - src에서 화면에 보여지는 실제 이미지를 표현하지 않는다면 시맨틱은 사라짐

```html
<!-- 새로운 hero-shot 마크업 -->
<div class="">
  <a href="http://www.flickr.com/photos/catlantis/5514922015/">
    <div role="img" aria-label="California gull flying" class="hero-img"></div>
    <p class="caption">
      Photo By
      <a href="http://www.flickr/com/photos~~~~ /">test</a>
    </p>
  </a>
</div>
```

- 위의 코드에서 div를 사용해 Semantic이 깨짐

  - Web Accessibility Initiative-Accessible Rich Internet Applications(WAI-ARIA)라는 기술을 가져옴
  - 부가적인 속성(attributes)을 가진 ARIA arguments HTML은 각 요소(element)들에게 시맨틱과 그 외의 정보들을 명확하게 할당하기 위해 설계됨
  - ARIA 라벨을 위해 이미지의 alt 속성을 바꿈으로써 최소한 스크린 리더(단말기)와 다른 보조 기술에서는 의미를 되찾을 수 있음

- 이전 코드에서 연속적인 원소들에 비례해 커지는 이미지를 맞추기 위해 100%으로 max-width를 설정함
  - 이 방법은 div 태그와 함께 동작하지 않음
  - 이미지는 DOM 원래 원래 크기를 가지고 있기 때문에 이것은 이미지와 함께 동작함
  - 만일 이미지의 폭과 높이를 정의하지 않는다면, 원본 이미지의 원래 면적을 사용할 것
    - 스타일을 바꾸지 않고 마크업을 바꾼다면, .hero-shot은 높이가 0으로 될 것
      - 백그라운드 이미지를 설정하는 것! 실제 크기 이상으로 이미지가 커지는 것을 원하지 않기 때문에 max-width을 정의해야 함
      - width를 100%로 설정해야 함
  ```css
  .hero-img {
    max-width: 640px;
    width: 100%;
    background: url(gull-640x360.jpg);
  }
  ```
  - 여전히 height가 명시되어 있지 않은데... width처럼 %로 height를 설정해야 함
    - 일반적으로 CSS 내에서 수학적 로직을 직접 할 수는 없지만, 이 경우는 운이 좋은 편이다.
    - CSS는 특정 %가 지정되었을 때, 그 대상의 width %를 참조해서 세로로 패딩을 하게 됨
    - 다음 처럼 작성 가능
  ```css
  .hero-img {
    max-width: 640px;
    width: 100%;
    height: 0;
    padding-bottom: 56%;
    background-size: 100%;
    background: url(gull-640x360.jpg);
  }
  ```
  - div는 이전과 같은 규모지만, img src가 아닌 CSS background 이미지를 가지고 있음
    - 좋은 트릭이지만, 많은 바이트를 다운로드할 때 발생하는 문제에 대한 실질적 해결책은 아님
    - 어떻게?
      1. 서로 다른 레이아웃을 가지는 다른 크기의 이미지들을 해결해야 함
         - 미디어 쿼리를 사용하여 이미지에 변화를 주려고 함 => 큰 사이지를 사용해도 문제가 없고, 브라우저 창의 크기를 조정하는 데스크 톱 사용자를 위함
           - 네트워크 대역폭이나 메모리가 문제가 되지 않는 경우
         ```css
         @media only screen and (min-width: 800px) {
           .hero-img {
             background: url(gull-640x360.jpg);
           }
         }
         ```
         - 사용자들은 가로모드, 세로모드 2가지 성향을 가지고 있음
    - 폰으로 관점을 돌려보자, 잘린 이미지는 동일한 내부 div로 유지할 수 있음. But 포함된 요소들은 100px 높이로 설정
      - 이미지 src를 변경하자
      ```css
      @media only screen and (max-width: 480px) {
        .hero-img {
          background: url(gull-360x112.jpg);
        }
      }
      ```
    - 대부분의 새로운 폰들은 고해상도 디스플레이를 가짐
      - 2개의 접근 방법이 존재 -> 각각 디바이스에 분리된 각각의 이미지를 로딩하는 것
      - 가장 단순한 방법은 image-set이라는 새로운 css 함수
      - 제안 수준이라 개선이 더 필요
      - image-set과 함께 디바이스 픽셀 밀도에 따라 다른 URL을 정의할 수 있음
      - 모든 CSS 픽셀을 위해 2개의 물리적 픽셀이 존재 => 아이폰 4 or 아이폰 5는 2x
      ```css
      @media only screen and (max-width: 480px) {
        .hero-img {
          background: url(gull-720x225.jpg);
          /* image-set을 지원하지 않는 사용자 에이전트들을 위한 대안 */
          background: -webkit-image-set(
            url(gull-360x112.jpg) 1x,
            url(gull-720x225.jpg) 1.5x,
            url(gull-720x225.jpg) 2x
          );
        }
      }
      ```
      - 접두어에 정의되었지만, 이것은 Webkit- 전용 => 효과적인 접근 방법
      - 미디어 쿼리로 device-pixel-ratio를 명시할 수 있다
        - 단순한 미디어 쿼리 하나로 모든 고해상도 디바이스를 지원할 수 있음
      ```css
      @media only screen and (min-device-pixel-ratio: 1.5) {
        .hero-img {
          background: url(gull-720x225.jpg);
        }
      }
      ```
      - 2020.02.11 현재 MDN 사이트 확인 결과
        - [참고 사이트](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/-webkit-device-pixel-ratio)
        - firefox는 -moz-device-pixel-ratio, opera는 chrome 처럼 -webkit 그대로 작성하면 될 듯
      - 개발자 도구의 Timeline을 주시하는 것은 매우 좋은 습관 & PageSpeed를 통해 자주 사이트를 실행하면 큰 성능 이슈들이 바로 드러나게 됨

# 두 번째 방문 시 속도 향상

컴퓨팅 성능의 상당 부분이 캐시에 달려 있음.

캐싱 : 처음 확보한 데이터를 어딘가에 저장하고 다음번에는 빨리 처리하기 위해 저장된 데이터에 접근하는 것

- 웹 : 사용자가 자주 방문하는 사이트에 대한 속도를 최대한 향상하기 위해 캐싱을 이용, 사용자의 두 번째 방문이 첫 번째 방문했을 때 걸린 시간보다 빨리 처리된다는 것!

모바일에서 장소에 상관없이 캐싱을 효과적으로 사용할 수 있기를 바람.

- 터치 디바이스 : 캐싱을 지원하기 위한 주요 도구로 일반적인 브라우저 캐시, 내부 저장소(localStorage), 애플리케이션 캐시가 존재

- 내부 저장소와 메뉴얼 캐싱을 위한 강력한 툴인 영구 저장소(persistent storage)용의 조금 새로운 API, 애플리케이션 캐시가 더 좋은 성능을 가져올 수 있음

HTTP는 캐싱을 염두에 두고 설계, 캐싱 기능을 가진 프록시도 존재

HTTP 캐시를 제어하기 위한 3가지 : 기간(Freshness), 유효(Validation), 무효(Invalidation)

- 기간(Freshness)

  - TTL(Time to Live)이라고 부르며 단순한 개념
  - 헤더를 이용해 캐싱 에이전트가 얼마나 오래 리소스를 캐시하고 있을지를 설정
    - 만료 헤더(Expires header)를 이용 : 가장 단순한 방법
      - YSlow, PageSpeed : 정적인 콘텐츠에 대해서 먼 미래로 만료 헤더를 세팅하도록 가이드
      - 가능하다면 정적인 리소스(CSS, JS)들은 절대 다시 패치(fetch)되어서는 안 된다는 의미
      ```text
      Expires : Thu, 15 Apr 2025 20:00:00 GMT
      ```
      - 캐시할 공간을 모두 소진할 때까지 브라우저(or 캐싱 프록시)가 이 파일을 저장하고 있으라는 의미

- 유효(Validation)

  - 캐싱 에이전트가 전체 리소스에 대해 요청하지 않고 오래된 캐시 데이터를 여전히 사용해도 괜찮은지 결정할 수 있는 방법을 제공
  - 브라우저는 If-Modified-Since 헤더로 요청을 생성할 수 있음
    - 이 때 서버가 304 Not Modified 응답을 전송하면 브라우저는 서버로부터 리패치를 받지 않고 캐시에 저장되어 있는 파일을 사용할 수 있음
  - 다른 방법으론 ETag가 존재
    - ETag : Hash를 이용해서 만드는 유일한 식별자
      - 짧은 string을 비교하여 날짜 체크 없이 캐시에 저장된 데이터의 유효성을 판단
      - 요청하는 에이전트가 조건부 요청(conditional request)과 ETag를 포함한 If-None-Match를 생성
        - 만일 현재 콘텐츠가 클라이언트의 ETag와 일치한다면 서버는 다시 304 응답을 전송함
  - 캐시의 유효성 판단을 위해 서버로 모든 정보를 요청
    - 파일을 다시 다운로드하는 것보다는 좋은 방법 But, 모든 정보를 요청하는 것은 가능한 피하는 것이 좋음
      - 먼 미래로 만료일이 설정된 파일들 때문
      - 만일 캐시된 아이템들이 만료되었을 경우엔 브라우저가 그것의 유효성을 체크하는 시도 자체를 하지 않음

- 무효(Invalidation)

  - 브라우저는 몇 가지 행동을 한 후에 캐시된 아이템들을 무효 처리함
  - 가장 일반적인 방법 : 동일한 URL에 non-GET 처리를 함

- 일반적인 캐시의 동작 방식
  - 헤더 or 그 외의 다른 것들을 설정하지 않는다면, 브라우저 캐시는 일반적으로 어떻게 동작??
  - 브라우저 : 최대 캐시 크기를 가지고 있음
  - 최대 크기만큼 데이터가 채워지게 되면, 최근에 가장 적게 사용된 캐시로부터 아이템들이 삭제됨
    - 오랫동안 사용되지 않은 캐시된 아이템들은 삭제되고, 가장 자주 사용되는 아이템들이 캐시에 유지
    - 이 알고리즘 - 결과적으로 어떤 아이템들이 삭제될지 결정하는 것은 완벽하게 사용자의 행위에 달렸다는 것 & 어떤 아이템이 삭제될지 예측하는 정확한 방법은 없다는 것을 말함
  - 캐시 헤더를 고려하지 않고 있다면, 일부 브라우저들은 우리가 원하지 않는 아이템들도 캐시를 하게 될 것
    - 정작 원하는 아이템들 중에는 캐시를 하지 않는 아이템이 있을 것이라는 예측이 가능

## 모바일에서의 최적화

- 브라우저 캐시 : 데스크톱에서는 가장 중요한 부분
  - 터치 디바이스에선 그 정도로 중요하지 않음
  - ex) ios5 -> 브라우저 캐시는 100MB로 제한적이고 앱 실행과의 사이에서 영구적이지 않음
    - 만일 폰이 재부팅을 하거나 브라우저를 종료하거나 crash가 발생했을 경우 브라우저가 재시작을 하면 전체 캐시가 모두 삭제되어 비워진다는 것을 의미
  - ex) 안드로이드 2.k의 내장 브라우저(가장 많이 설치된 버전)은 단지 5.67MB의 캐시 제한을 가지고 있고, 개별 도메인이 아닌 전체 캐시의 크기
  - 사이트의 캐시 성능을 최적화하는 데 매우 중요한 요소
    - 브라우저 캐시 크기가 매우 제한적 => 사용자들이 자주 빈 캐시로 사이트를 방문할 것이라는 것을 의미
      - 그대로 방치해서는 안 됨

```html
HTTP/1.1 200 OK Content-Type: image/png Last-Modified: Thu, 29 Mar 2012:
23:53:37 GMT Date: Tue 11 Sep 2012 21:36:44 GMT Expires: Wed, 11 Sep 2013
21:36:44 GMT Cache-Control: public, max-age=31536000
```

- Cache-Control : public은 프록시들이 SSL 리소스들을 캐시할 수 있도록 보장

  - 위의 예시에서 max-age는 1년(1년을 초로 환산한 값), 만료일 또한 1년
  - 실질적으로 특정 서버의 환경 설정을 어떻게 하는지 이해하고 있다면, 헤더들이 더 정확하게 작성될 수 있음
    - 분리된 환경에서 개발자들과 업무를 하고 있다면 이런 것들이 얼마나 중요한지 개발자들에게 친절하게 각인시킬 필요가 있음
  - 실제 콘텐츠가 많은 대형 사이트들은 프록시들이 아무렇게나 캐싱을 하는 것을 방지하기 위해 cache-control: private을 사용
  - ex) 콘텐츠가 그렇게 많이 바뀌지 않고, 서버에서 우리가 1시간 내에 만료하는 캐시 헤더를 설정 가능
    - Nginx를 사용해 우리가 직접 만료를 설정 가능

  ```nginx
  location / {
    expires 1h;
  }
  ```

  - ex) 사이트에 05:16:45 PST에 접속했다고 가정

  ```html
  Last-Modified: Thu, 05 Jul 2012 17:15:35 PST Connect: keep-alive Vary:
  Accept-Encoding Expires: Wed, 14 Nov 2012 06:16:46 PST Cache-Control:
  max-age=3600
  ```

  - 위의 경우는 모바일 사용자들에겐
    - 세션이 브라우징되는 동안 너무 많은 콘텐츠들이 리패칭되는 것을 막아주는 효과 & 콘텐츠가 유효하다는 것을 보증
      - 데스크톱 사용자들에게도 마찬가지

- 웹 가속기?
  - 아마존 실크??
  - 파이프 라이닝, 예측 푸시
  - 예측 푸시 : 브라우저가 리소스를 요청하기 전에 브라우저에게 정적 리소스를 전달하는 것
  - 은폐형 HTTP 프록시 (transparent HTTP Proxy)?
  - 프록시는 브라우저처럼 캐시를 할 것(동일한 규칙을 따름)
    - 정확한 헤더들을 전달해서 킨들의 성능 향상을 가져옴

## 웹 저장소 사용

- 웹 저장소 : 브라우저와 쿠키(cookies)를 위해 영구적인 저장소를 제공

  - 쿠키와는 달리 도메인당 5MB를 가지고 있음
    - iOS에서 웹 저장소는 UTF-16 문자열로 저장됨
      - 각 문자는 2배의 바이트를 사용한다는 것을 의미
      - ios에서는 실질적으로 2.5M을 사용

- Web Storage API(웹 저장소 API)

  - localStorage, sessionStorage라는 2개의 전역변수를 통해 접근이 가능
  - sessionStorage는 영구적으로 저장하지 않음, 세션이 브라우징될 떄 삭제됨
    - tab들 간에 공유되며, 캐싱보다는 애플리케이션 데이터를 임시로 저장하는 데 더 효과적
    - 그 외 다른 부분은 둘 다 동일

- 쿠키와 같이 웹 저장소는 동일한 정책에 의해 접속이 제한됨

  - 웹 페이지는 동일한 도메인으로 설정된 웹 저장소에만 접근할 수 있음
  - 사용자가 브라우저를 리셋하면 모든 데이터가 삭제됨
  - localStorage는 보안이 고려되어 있지 않음, 모든 경우에 사용자는 localStorage에 있는 것들을 읽고 수정 가능

- 웹 저장소 API는 매우 단순

  - 기본적인 메소드들은 localStorage에 존재

  ```javascript
  getItem();
  localStorage.setItem("key", "value");
  ```

  - key와 value는 문자열로 저장됨
  - 문자열이 아닌 값(non-string)으로 key의 value를 설정하는 것은
    - Javascript의 toString 메소드를 사용하면 됨
    - 오브젝트가 [object, object]로 대체될 것

  ```javascript
  let bird = localStorage["birdname"];

  localStorage["birdname"] = "Gull";
  ```

  - 정규 오브젝트로 localStorage를 다룰 수 있고, [] 표현을 사용함
  - 아이템을 삭제하는 것은 아래처럼 호출하는 것으로 간단히 해결 가능
    - 명시한 키가 존재하지 않으면 removeItem은 아무 일도 하지 X
  - 특정 정보를 저장 & 캐싱을 위해서 localStorage는 훌륭한 도구

  ```javascript
  localStorage.removeItem("key");
  ```

  - transparent caching layer : 페이지 로드 시에 랜덤 이미지를 가져오는 데 있어 훌륭하게 성능을 향상시킬 수 있음

## 캐시 계층으로 웹 저장소 사용

- 데이터가 로딩되는 동안 사용자는 무언가가 진행되고 있는 상태를 보기를 원함

  - 그래야 그들은 어딘가 문제가 생기지 않았다는 것을 인지 가능
  - 리스트가 그다지 변경되지 않았는데도 그 리스트로부터 랜덤 이미지를 불러올 때까지 사용자를 매번 기다리게 만들고 있음
  - 정확한 최신 검색 결과를 제공하지 않고 여러 가지를 추가하는 것만 원한다면??
    - 사진들의 최신 리스트를 가지고 있는 것이 중요하지 않다면?
    - 캐싱해야 할 첫 번째 후보

- 무언가 캐싱이 가능하다는 것 : 일반적으로 캐싱을 해서 추출하는 것이 최선이라는 것을 의미
  - 반면 얼마 못 가서 애플리케이션의 메인 로직(main logic)이 캐시와 유효 체크, 태스크와 상관없는 다른 로직을 참조함으로써 어수선하게 될 것
    - 데이터 접근 계층(data access layer)을 제공할 것, 이를 위한 새로운 오브젝트를 만든다면?
      - Flickr API를 직접 호출하는 것보다 더 효과적

```javascript
// 이런식으로 데이터 계층 호출
birdData.fetchPhotos('Larus californicus' function(photos) {
  photoList = photos;
  updatePhoto();
}
```

- 사진을 검색, 리스트에 되돌리는 것 => 새로운 API 안에 Flickr에 한정적인 스터프를 숨겨놓을 수 있음

  - 이론적으로 깔끔한 API를 만듦으로써 나중에 데이터 소스를 바꿀 수도 있음
    - 더 양진의 사진을 제공하기 위해 다른 API를 만들고자 할 경우 데이터 계층을 변경할 수 있음
    - 이러한 경우 핵심은 캐싱!
    - ex) 하루 동안의 API 결과들을 캐시할 것
      - 이를 통해 사용자는 다음 방문 시에 API 응답을 기다리지 않고도 여전히 랜덤 사진을 보게 될 것

- 캐시 계층 생성
  - fetchPhotos 메소드 - 이 검색이 캐시된 것인지, 캐시된 데이터가 여전히 유효한지 여부를 체크
  - 만일 캐시가 이용 가능하고 유효하다면 캐시된 데이터를 리턴할 것
    - 그렇지 않으면 API 요청을 생성, callback을 보낸 후에 캐시에 덧붙임

```javascript
window.birdData = {};

var memoryCache = {};

var CACHE_TTL = 86400000;
var CACHE_PREFIX = "ti";
```

- memoryCache 오브젝트 : localStorage로부터 패치된 것들이 캐시된 것

  - 그 아이템들은 가장 빨리 리턴될 수 있는 동일한 세션에서 재요청이 됨
  - JSON 문자열을 디코딩하는 추가적인 비용을 제외하고, localStorage로부터 데이터를 패치하는 것
    - 단순하게 메모리로부터 데이터를 가져오는 것보다 훨씬 더 느림
    - localStorage는 오로지 문자열만 저장된다는 것을 명심!

- CACHE_PREFIX, CACHE_TTL
  - 필요한 것은 캐시에 값을 쓰는 메소드
  - API를 통해 응답을 캐시할 것인데, 각각 다른 오브젝트 안에 캐시된 값을 감싸고 타임스탬프를 저장해서 만료일을 관리할 것

```javascript
function setCache(mykey, data) {
  var stamp, obj;
  stamp = Date.now();

  obj = {
    date: stamp,
    data: data
  };

  localStorage.setItem(CACHE_PREFIX + mykey, JSON.stringify(obj));
  memoryCache[mykey] = obj;
}
```

- 충돌을 피하기 위해 각각의 키들에 CACHE_PREFIX
  - 다른 개발자가 localStorage를 사용할 가능성이 있기 때문에 안전을 위해 모든 키에 Prefix를 사용
- date 값은 초 단위로 타임스탬프를 포함하고 있음
  - 나중에 캐시가 만료되었는지 여부를 체크하는 데 사용
  - 동일한 세션이 유지되는 동안 다시 패치가 진행될 때보다 빠른 접속을 위해 메모리 캐시에 값을 추가할 것
    - localStorage에 setItem을 이용
      - []보다 더 명확, 개발자에게 무슨 일이 일어났는지 알려줄 수 있음

```javascript
function getCached(mykey) {
  var key, obj;

  // localStorage 내에서 충돌을 방지하기 위해
  // key 들에 prefix를 사용하는 것이 좋은 습관
  key = CACHE_PREFIX + mykey;

  if (memoryCache[key]) {
    if (memoryCache[key].date - date.now() > CACHE_TTL) {
      return false;
    }
    return memoryCache[key].data;
  }

  obj = localStorage.getItem(key);

  if (obj) {
    obj = JSON.parse(obj);

    if (Date.now() - obj.date > CACHE_TTL) {
      // 캐시가 만료
      localStorage.removeItem(key);
      delete memoryCache[key];
      return false;
    }
    memoryCache[ley] = obj;
    return obj.data;
  }
}
```

- 계층들안의 캐시를 체크, 메모리 캐시가 가장 빠르기 때문에, 메모리 캐시 체크를 먼저 시작함

  - 그 다음 localStorage를 진행
  - 만일 localStorage 안에서 값을 찾으면, 데이터를 리턴하기 전에 memoryCache안에 그 값을 넣을 것
  - 만일 캐시된 값이 없거나 값들 중 하나가 만료되었다면 함수는 false를 리턴

- 해야할 것은 캐시된 값을 패치(fetch)하는 것, 그 값이 false라면 API 메소드를 실행하고 응답을 캐시함

  - true라면 캐시된 값을 가진 callback 함수가 호출

  ```javascript
  function fetchPhotos(query, callback) {
    var flickr, cached;

    cached = getCached(query);

    if(cached) {
      callback(cached.photos.photo);
    }
    else {
      flickr = new Flickr(API_KEY);
      flickr.makeRequest(
        'flickr.photos.search',
        {
          text:query,
          extra: 'url_z,owner_name',
          license: 5,
          per_page: 50,
        }

        function(data) {
            callback(data.photos.photo);

            // callback 후에 캐시를 설정
            // 이것은 임의의 UI 업데이트가 이루어진 후에 설정함
            setCache(query, data)
        }
      )
    }
  }
  ```

## LocalStorage 관리

- 브라우저 캐시와는 달리 localStorage는 하나하나 수동으로 컨트롤이 가능

  - 무엇을 저장할지, 언어 저장한 정보를 빼올지, 언제 만료를 할지에 대해 직접 결정 가능
  - 일부 웹사이트들 JS, CSS를 캐시하기 위해 localStorage를 사용하고 있음

- 일반적인 JS Object로서 localStorage를 취급할 수 있음

  - JSON.stringify(localStorage)는 localStorage의 JSON 표현을 리턴함
  - UTF-8 multi-byte 문자셋을 포함해서 얼마나 많은 바이트들이 사용되는지 확인하기 위해 오래된 트릭 적용 가능
  - multi-byte 문자 : unescape(encodeURIcomponent('string')).length는 문자열 크기를 알려줌
    - 5MB : 1024 _ 1024 _ 5
    - 1024 _ 1024 _ 5 - unescape(encodeURIComponent(JSON.stringify(localStorage))).length로 가용공간을 찾을 수 있음

- 가용 공간을 초과했다면, 웹킷 브라우저, 오페라, 윈도우 8등은 예외가 생김

## 애플리케이션 캐시

- 전통적인 브라우저 캐시 : 모바일에서는 신뢰하기 어려움

  - HTML 5 애플리케이션 캐시는 모바일에서 신뢰성이 매우 높음

- localStorage와 같은 형태에선 네트워크가 단절되더라도 웹 애플리케이션이 어떻게 끊어지지 않고 기능을 유지하는지 쉽게 확인할 수 있음

  - 애플리케이션 캐시는 이런 use case를 위해 디자인 됨

- 우리의 앱이 앞 단에서 필요로 하는 모든 리소스들의 리스트를 제공함으로써, 브라우저가 리소스를 다운로드하고 캐시할 수 있도록 하는데 있음
  - 이 리스트를 매니페스트(manifest)라고 부름
  - manifest는 html 태그에서 파라미터로 구분됨

```html
<!DOCTYPE html>
<html mainfest="birds.appcache">
  <head></head>
</html>
```

- 이 파일은 mime-type text/cache-manifest로 제공됨

  - 그렇게 하지 않는 경우, 파일이 처리되지 않음
  - 만일 서버에서 custom mime type을 설정할 수 없다면 애플리케이션 캐시를 사용할 수 없음
    - manifest는 다음 4가지 항목을 포함
      - 마스터(MASTER)
      - 캐시(CACHE)
      - 네트워크(NETWORK)
      - 대응 방안(FALLBACK)

- 마스터(MASTER)

  - HTML 안에서 manifest와 관련된 파일들의 목록
  - manifest를 포함하면 이 파일들은 리스트에 무조건 추가됨
  - 나머지 항목들은 manifest 파일 안에 포함됨

- 캐시(CACHE)

  - 무엇을 캐시할 것인가를 정의한 항목들
  - 이 리스트 안에 있는 것은 무엇이든 방문자가 페이지에 처음 방문할 때 다운로드 될 것
  - 그 항목들은 영구적으로 캐시되거나, manifest(question 안에 리소스는 제외)가 변경될 때까지 캐시될 것

- 네트워크(Network)

  - 애플리케이션 캐시는 오프라인 사용을 위해 설계된 것
    - 실질적으로 네트워크 접속이 허용되어야 함
      - 이건, 네트워크 리소스가 NETWORK 항목에 없다면 사용자가 온라인 상태라고 하더라도 차단되어야 한다는 것을 의미
      - ex) 사이트가 iframe안에 Facebook의 like 위젯을 포함하고 있다면?
        - http://www.facebook.com이 NETWORK 항목 리스트에 없다면, iframe은 로드되지 않을 것
      - 모든 네트워크 요청들을 허용하고자 한다면, \* 와일드카드 문자를 사용할 수 있다.

- 대응 방안(FALLBACK)

  - 사용자가 온라인 상태가 아닐 경우에 대한 대응 방안을 명시할 수 있도록 해줌
  - 이 항목들은 URL들이 쌍으로 존재
  - 첫 번째 : 요청된 리소스, 두 번재가 그 대응 방안
  - 연관된 경로들을 사용해야만 하고, 여기에 리스트된 모든 것들은 동일한 도메인 상에 존재해야 함
    - ex) 분리된 도메인 상에 있는 CDN으로부터 이미지를 제공하려고 한다면 대응 방안을 정의할 수 없게 됨

- 캐시 manifest 생성

```manifest
CACHE MANIFEST

# Timestamp:
# 2013-03-15r1

CACHE:
jquery-1.8.0.min.js
gull-360*112.jpg
gull-640*360.jpg
gull-720*225.jpg

FALLBACK:

NETWORK:
*

```

- 위의 manifest에서 모두 다른 이미지에 대한 항목이라는 것에 주목해야 함
  - 이게 명확하기 때문에 브라우저는 페이지에 처음 방문했을 때 다운로드와 캐시를 진행할 수 있고, 절대로 다시 패치되지 않음

* 애플리케이션 캐시의 위험성

  - 매우 강력한 옵션, 여기에 있는 파일들은 manifest 파일이 변경되거나, 사용자가 캐시를 삭제하거나, 캐시가 JS를 통해 업데이트 되기 전까지는 절대 만료되지 않음

    - manifest 안에 타임스탬프를 포함하는 이유가 이것
    - 우리가 전체적으로 캐시된 버전들을 무효화하고 싶을 경우에 손쉽게 파일을 강제로 변경할 수 있음

  - 애플리케이션 캐시는 브라우저 캐시와 완벽하게 분리되어 있음

    - ex) 재확인하지 않고도 애플리케이션 캐시를 만들 수 있음
    - 만일 manifest 파일에서 만료 헤더를 먼 미래로 설정할 경우 브라우저는 파일을 영원히 캐시할 것
    - 애플리케이션 캐시가 변경되었는지 여부를 체크할 때, 브라우저 캐시 안에 버전을 가져오고, 그것이 변경되었는지를 확인한다.
      - 캐시된 파일을 영원히(or 사용자가 캐시를 삭제하기 전까지) 저장한다.

  - 한 번 페이지가 캐시되면 네트워크 연결 없이도 사이트에 방문 가능

    - ios의 경우 사용자가 홈 스크린에 페이지를 북마크해 두었을 경우 오프라인 동작을 지원
    - ios의 사파리에서는 애플리케이션 캐시의 콘텐츠가 없어졌을 수도 있는데,
      - 이것은 브라우저가 브라우저 캐시를 위해 공간 확보가 필요해서 삭제된 경우이고 캐시는 여전이 운영될 것

  - 한 번 만료되면, 사용자가 다음에 방문하기 전까지는 업데이트되지 않는다는 것
    - 사용자가 오래된 캐시를 가지고 사이트에 방문한다면, 그 버전이 업데이트되었더라도 여전히 캐시된 버전을 보게 될 것
    - ex) 사용자가 새들에 대한 가장 최신의 정보를 가져가기 위해
      - 오래된 캐시를 프로그램으로 확인하는 방법으로 애플리케이션 캐시 JS API의 장점을 활용해야 함

* 자바스크립트를 이용한 오래된 캐시 확인법

  - 캐시 관련 API는 windows.applicationCache 오브젝트에서 구현되어 있음
  - 가장 중요한 속성은 status
  - 이제 Application cache는 없어지고, service worker를 사용함
    - [애플리케이션 사라짐](https://developer.mozilla.org/en-US/docs/Web/API/Window/applicationCache)

* 뒷 내용은 생략 : 차라리 서비스 워커에 대해 공부하자
  - 캐싱은 성능을 최적화할 수 있는 가장 강력한 도구 중 하나
  - 더 복잡한 최적화 작업을 진행하기 전에 할 수 있는 기본 사항 중 하나

# PJAX를 이용한 터치 효과 향상

페이지 로드가 웹에서 가장 느린 성능을 보이는 부분

속도가 느린 네트워크에서 동작하는 터치 디바이스에선

아무리 최적화된 페이지라도 여전히 느린 성능을 보임

페이지 로드가 단 한 번뿐이라면 그렇게 나쁜 것은 아님

But 대부분의 웹사이트들은 하나 이상의 페이지들을 가지고 있음

페이지 간에 웹 서핑을 할 때 사용자 관점에서는 가장 큰 고통 => 페이지 로드 시간을 더 향상해야 함

- 페이지가 모두 로드되는 것을 피할 수 있는 방법은??

## 페이지 로드 비용

- 추가 요청으로 인한 비용을 제한하기 위해 페이지에 3개의 스크립트를 인라인으로 추가
- Closure Compiler를 이용해 JS 코드를 줄였음(바이트 수를 줄이기 위해)
- 모든 헤더를 최적화했음

- 랜덤 사진이라면 우리가 최적화할 수 있는 것이 없음

  - 첫 로드를 최적화하면 줄일 수 있을 듯?

- PJAX를 이용해 페이지가 모두 함꼐 로드되는 것을 없애는 것
- PJAX : pushState + AJAX

  - AJAX : 콘텐츠를 업데이트하기 위한 것
  - pushState : URL을 업데이트하기 위한 것

- AJAX만 사용되는 것은 어떤가?
  - 페이지가 로드되는 중간에 실제로 변화되는 부분은 적다면
  - HTML이 바뀐 부분만을 리턴하는 간단한 AJAX 요청을 만들 것 => DOM 안에 그것을 삽입
    - 좋은 방법이지만, 사이트의 사용성 측면에서 보면 적합하지 않은 방법일 수 있음

```html
<ul class="bird-list">
  <li class="nav-li">
    <a class="nav-link" href="california_condor.html">California Condor</a>
  </li>
  <li class="nav-li">
    <a class="nav-link" href="california_quill.html">California Quill</a>
  </li>
  <li class="nav-li">
    <a class="nav-link" href="california_gull.html">California gull</a>
  </li>
</ul>
```

- 위의 코드 : 각자 HTML 파일을 가지고 있음

  - 이 파일들의 URL들은 실제로 인터페이스의 가장 중요한 부분
  - 사용자는 이미 알고 있는 링크로 사이트를 돌아다닐 수 있고, 패턴은 단순함
    - 다음부터는 사용자가 특정 새를 찾고 싶을 때, 단지 damain/California_gull.html을 입력하기만 하면 적절한 페이지를 얻을 수 있음

- 터치 디바이스에서는 다른 중요한 요소가 존재

  - 터치 운영체제는 모두 공유 기능을 따라서 사용자가 멋진 새 사진을 보고, 공유 버튼을 선택하면 그가 보고 있는 새를 트위터에 링크 가능

- 사용자의 팔로워들이 링크를 보고 클릭하면 작은 섬네일 안에서 콘텐츠를 볼 수 있음

  - 멋진 일이지만, 개발자가 페이지 콘텐츠 업데이를 위해 Javascript와 AJAX를 사용해서 얼마나 많은 이익을 얻을 수 있을까에 대해 고민하기 시작했을 때,
    - 웹의 가장 기본적인 사용자 인터페이스 규약 중 일부인 터치까지는 고려하지 않았음
      - URL에 비하면 일반적이지 않음

- 대부분의 웹 사용자들은 URL이 어떤 것인지 알고 있음
  - 인터넷에서 특정한 '무엇'을 가리키고 있다는 것도 이해하고 있음
  - ex) 트위터를 통해 링크를 클릭할 때 그들의 친구가 보았던 것과 동일한 콘텐츠를 보고 있다고 생각할 것
    - 여기서 공유된 링크가 변경되거나 잘못된 링크가 공유된 것은 아주 큰 실수가 됨
    - 새를 변경하기 위해 JS를 사용해서 페이지를 변경했을 경우, 사용자가 그 링크들 중 하나를 클릭했을 때 모든 URL이 깨지는 상황을 만들게 됨

* 위와 같은 이유로, HTML 5 브라우저 히스토리 API를 사용해야 함
  - 멋지기 때문에 사용하는 것이 아니라, 링크를 보존하기가 매우 민감하기 때문에

## 브라우저 히스토리 API

오랫동안 windows namespace안에 history 오브젝트가 있었음

- 브라우저 히스토리 : 사용자의 세션 히스토리가 저장된 큰 스택으로서 되돌아가기 버튼이 사용됨

  - 사용자가 방문했던 URL들이 기록된 카드들의 스택으로 생각하면 됨

- 사용자가 사이트를 돌아다니면서 그 히스토리를 남기기 위해 카드 또는 상태를 추가

  - 되돌아가기 버튼 => 바로 이전 카드로, 앞으로가기 버튼 => 바로 앞의 카드로 이동

- 사용자가 URL을 복사하거나 공유 버튼을 클릭했을 때, 앞뒤 카드로 이동하는 것이 아닌, 사용자가 현재 있는 카드의 스냅샷을 찍음

- URL은 하나의 리소스로 가는 경로를 나타내는 스택 내에 있는 상태와 관련이 있음

  - 브라우저 히스토리 API는 이 스택을 다룰 수 있는 2개의 새로운 메소드를 제공함
  - pushState, replaceState
  - pushState : 스택 앞에 새로운 카드를 추가하거나 삭제할 수 있음
    - 사용자가 링크를 클릭했을 때 발생하는 상황과 매우 유사
    - 사용자가 새로운 상태 항목을 얻고 히스토리 스택 중간에 위치하고 있다면, 앞쪽 멀리 있는 일부 카드는 잃어버릴 수 있음
  - replaceState : 스택 남은 공간에 영향을 주지 않고 현재 카드를 교체할 수 있음

- pushState만을 사용하는 경우, 사용자가 공유한 링크 or 북마크가 페이지의 상태를 정확하게 반영한 것이라고 확신할 수 있지만, 뒤로가기 or 앞으로가기 버튼을 핸들링 할 수는 없음

  - pushState를 사용할 때, pushState로 상태가 추가되지 않을 정도로 충분히 진행되기 전까지는 뒤로가기 버튼은 페이지 로드를 진행하지 않음
    - 이것을 해결하기 위해 브라우저 히스토리 API는 popstate라고 부르는 이벤트를 제공
    - popstate: 사용자가 뒤로가기 or 앞으로가기 버튼을 클릭해서 상태 스택의 위치가 바뀌었을 때 알려주는 이벤트

- pushState를 이용한 히스토리 변경

  - Ch5/index.html
    - 앞으로가기를 클릭 or tab할 때, increments 안의 number가 증가하고, URL은 number의 값은 number를 쿼리 파라미터로 가지고 업데이트 됨

  ```javascript
  let num = document.getElementById("number");

  link.addEventListener("click", function(e) {
    e.preventDefault();
    // type이 올바른지 확인하는 가장 좋은 방법
    let myNum = parseInt(num.innerHTML, 10);
    num.innerHTML = ++myNum;
  });
  ```

  - 위의 코드를 보면, 링크를 클릭했을 때, 그 number가 증가함
    - 업데이트할 URL이 필요하고 돌아가기 버튼을 클릭했을 때 그 number가 감소하는 것이 필요하다

  ```javascript
  {
    // ...
    history.pushState({ count: myNum }, null, "?num=" + myNum);
    document.title = "Number " + myNum;
    // ...
  }
  ```

  - pushState 메소드 : 3개의 파라미터를 가짐
    - '상태(state)'를 나타내는 오브젝트
    - 타이틀(title)
      - title 파라미터는 윈도우 title이 아니라 별도로 업데이트 됨
      - 지금은 title 파라미터를 가지고 무언가를 하는 메이저 모바일 브라우저는 없음
        - But, 앞으로도 title 파라미터가 쓰이지 않을 것이라고는 장담할 수 없음
          - 안전을 위해 null로 넘길 것
    - URL

- popstate 이벤트 핸들링
  - 브라우저에서 이 코드를 실행하면?
  - number가 증가하면서 URL, title이 업데이트 되는 것을 볼 수 있음
  - But, 되돌아가기 버튼은 아무런 효과가 없음
    - 되돌아가기 버튼을 핸들링하기 위해 popstate 이벤트에 대한 리스너(listener)를 추가해보자
  ```javascript
  addEventListener("popstate", function(e) {
    if (e.state && e.state.count) {
      num.innerHTML = e.state.count;
      document.title = "Number " + e.state.count;
    } else {
      setNumFromUrl();
    }
  });
  ```
  - 항상 현재 number를 보여주고, number가 없으면 1로 보여지게 됨
    - 페이지를 로드하고 number를 증가시키고, 앞으로가기, 뒤로가기로 사이트를 돌아다닐 수 있게 됨
    - 친구와 URL을 공유하기 위해 트윗을 할 때, 그들도 동일한 URL을 볼 수 있게 됨
  - 함수는 좋다고 생각하지 않음, 필요한 함수라고 생각
    - 사용자가 이해하고 있는 것을 실제로 반영한 URL을 보장해야만 함
      - 사용자의 기대를 저버려서는 안 됨
  ```javascript
  function setNumFromUrl() {
    if (location.search) {
      let match = location.search.match(/num=([0-9]+)/);
      if (match) {
        document.getElementById("number").innerHTML = match[1];
        document.title = "Number " + match[1];
      }
    } else {
      document.getElementById("number").innerHTML = 1;
      document.title = "Number 1";
    }
  }
  ```
  - document에서 현재 Number를 표시하게 됨
    - Number가 지정되어 있지 않을 경우 number가 1로 표시될 것
    - 이제 페이지를 로드하고 number를 증가시키고 앞으로가기와 뒤로가기가 가능하게 됨
    - URL을 친구들에게 트위터로 공유할 때, 친구들은 같은 number의 페이지를 볼 수 있게 됨

* pushState 지원 브라우저와 대응 방안(FALLBACK)

  - pushState : 대부분의 모바일 브라우저들에서는 훌륭한 기능을 수행

    - 모든 브라우저에서 그런 것을 아님
    - [현재 브라우저 지원 상황](https://developer.mozilla.org/ko/docs/Web/API/History/pushState)
    - pushState를 지원하는지 확인하기는 쉬움
      - 지원하지 않을 경우에는 Window.history가 pushState 메소드를 가지고 있지 않을 것
      - 어떻게 대응방안을?
        - 여전히 URL을 업데이트해야 하고, 여전히 사용자가 링크를 공유할 수 있도록 해야 함

  - 추천 방식은 location.hash를 업데이트 하는 것

    - URL에서 # 뒤에 붙는 값
    - 이 값을 변경해서 히스토리 항목을 만들고, 지속적으로 URL을 체크함으로써 popstate 이벤트를 시뮬레이트할 수 있음

  - pushstate를 감지하는 기능을 추가해보자

    - pushState를 사용할 수 없다면, 그 대신 location.hash를 사용할 것
    - pushState를 지원하지 않는 브라우저 사용자를 위한 URL은 아래 두 가지 URL 중에 위에 있는 URL 처럼 보여지게 됨

    ```javascript
    // pushState를 지원하지 않는 브라우저 사용자를 위한 URL
    history.html#4

    // 지원하는 브라우저 사용자
    history.html?num=4
    ```

    ```javascript
    let useHash = false;
    let hashExp = /#([0-9]+)/;
    if (!history.pushState) {
      useHash = true;
    }
    useHash = true;
    ```

    - handleStateChange 함수 안에 HTML을 업데이트하는 모든 코드를 통합해보자
      - 링크에 사용되는 href도 업데이트 해서 링크 복사, 붙여쓰기가 완벽하게 동작하게 하자

    ```javascript
    function handleStateChange(count) {
      num.innerHTML = count;
      document.title = "Number " + count;
      link.href = "?num=" + (parseInt(count, 10) + 1);
    }
    ```

    - 쿼리스트링과 해시 URL을 모두 지원하기 위해서 SetNumFromUrl 함수를 업데이트 할 것

* URL 업그레이드와 다운그레이드

  - 공유된 deep 링크로 사이트에 접근하는 사용자는 낯선 경험을 하게 됨
    - ex) 안드로이드 3 사용자가 history.html?num=2를 로드하고 다음에 앞으로가기 탭을 했다면,
      - URL은 history.html?num=2#3이 되는 납득되지 않는 상황이 발생
  - 일관성 있는 경험을 원한다. 브라우저가 pushState를 지원하지 않더라도 사용자가 history.html?num=2를 로드할 경우 우리는 콘텐츠를 일관성 있게 유지하기 위해서 대체 버전으로 페이지를 리로드해야 함
    - 사용자를 위해서 훌륭한 경험이라고 할 수 없지만, pushState가 없으면 이런 방법을 쓰던가, 아니면 잘못된 URL로 로드되는 것을 받아들이든가 양자택일을 해야 함

* 반면 사용자가 Hash URL로 사이트에 접근할 경우에는 대응 URL로 하는 것이 아니라 non-hash URL로 업그레이드할 수 있음
  - pushState를 사용할 수 있지만, 그럴 경우에는 히스토리 항목을 생성해야 함
    - 이 경우에는 히스토리 항목을 추가히자 않고 상태(state)를 변경해야 하기 때문에 replaceState가 적절한 방법이라고 볼 수 있음

```javascript
function setNumfromUrl() {
  if (location.search) {
    let match = location.search.match(/nunm=([0-9]+)/);
    if (match) {
      if (useHash) {
        location = "history.html#" + match[1];
      } else {
        document.getElementById("number").innerHTML = match[1];
        document.title = "Number " + match[1];
      }
    }
  } else if (location.hash) {
    let match = location.hash.match(hashExp);
    document.getElementById("number").innerHTML = match[1];
    document.title = "Number " + location.hash;

    if (!useHash) {
      history.replaceState(
        { count: match[1] },
        null,
        "history.html?num=" + match[1]
      );
    }
  } else {
    document.getElementById("number").innerHTML = 1;
    document.title = "Number 1";
  }
}
```

- hash 함수
  - 유효하지 않은 값들이 추가되었는지를 체크해 유효성에 문제가 없다는 것을 검증하기 위해 사용하는 함수
    - pushState를 지원하지 않는 사용자 에이전트들을 위해서 사용자가 되돌아가기 버튼을 클릭한 경우 변경할 URL을 지속적으로 체크할 필요가 있음
    - 이 오버헤드를 감소시키기 위해 필요할 때만 URL 체크를 수행해야 함

```javascript
function handleStateChange(count) {
  num.innerHTML = count;
  document.title = "Number " + count;
}

if (!useHash) {
  addEventListener("popstate", function(e) {
    if (e.state && e.state.count) {
      num.innerHTML = e.state.count;
      document.title = "Number " + e.state.count;
    } else {
      setNumFromUrl();
    }
  });
} else {
  setNumFromUrl();

  let oldHash = location.hash;

  window.setInterval(function() {
    let match;
    if (window.hash !== oldHash) {
      match = location.hash.match(hashExp);
      oldHash = location.hash;
      if (match) {
        handleStateChange(match[1]);
      }
    }
  }, 100);
}
```

- pushState를 이용해서 동작하고, 이용하지 않고도 동작함

  - 서버에서 약간의 노력만으로 JS를 사용하지 않고 동작할 수 있다는 확신 & 리프레시 없이도 빠른 경험을 만들 수 있다는 확신을 줄 수 있음

* Hash-Bang

  - 웹 서핑을 하다 보면, mysite.com/#!news/world/123 이런 URL들은 보통 hash-bang url이라고 알려져 있음(Hash와 bang은 각각 Unix에서 말하는 #와 !이다.)
  - 이 URL들은 우리가 간단하게 구분구분 했던 것을 수행
    - 히스토리 API를 지원하지 않는 브라우저에서 싱글 페이지 앱이 동작할 수 있게 함
  - 구글이 제안했고 AJAX를 통해 로딩되는 인덱스 콘텐츠를 위해 구글봇이 허용하고 있음

  - 브라우저 히스토리 API는 진부한 hash-bang URL을 만든다.
  - 히스토리를 보존하기 위해 이렇게 하는 것보다 페이지를 나타내는 실제 URL을 제공하는 것이 좋음
    - hash-bang URL을 절대 사용해서는 안 된다.
  - 검색엔진을 지원하기 위해 이런 방법을 사용하는 것보다는 제대로 된 URL로 사이트가 동작하는 것이 더 나은 방법

## PJAX 추가

- pushState : 우리 사이트가 PJAX를 지원하면서도 드라마틱하게 성능이 향상될 수 있는 놀라운 도구
- 하나의 페이지와 URL을 업데이트할 수 있고, 드라마틱하게 사이트 속도를 향상할 수 있음

- HTML FRAGMENT 사용

  - 사용자가 다른 새를 탭했을 때, 페이지에서 대략 10% 정도가 실제로 변경됨
  - 일부분만 변화를 주었기 때문에 사용자가 다른 새의 콘텐츠를 탭하면 URL이 업데이트되지만, 페이지가 실제로 리로드되지 않음
  - 이 사이트는 JS 없이는 동작하지 않지만, 이 로직을 서버에서 구현해 JS가 동작하지 않아도 사용자가 동일한 페이지를 볼 수 있게 할 것

  - 서로 다른 새들에 대한 HTML fragment들을 만들어서 다운로드 시간을 줄일 것

    - 사용자가 새를 탭하면 전체 페이지를 다운로드 하는 것이 아니라 필요한 fragment를 다운로드 하게 됨

  - ~~\_frag.html

    - 작지만 보여줄 HTML을 포함하고 있음
    - 모든 페이지가 필요로 하는 동일한 코드를 포함하는 wrapper 파일을 만들 것
      - JS와 CSS를 포함할 뿐 아니라, 앞 장에서 작업했던 section class="content" 바깥쪽의 나머지 HTML 부분이 포함되어 있음
    - 페이지가 한 세션 당 한 번만 로드되기 때문에, JS와 CSS 파일들을 캐시하는 것은 유용성이 떨어짐

  - 처음 로드될 때를 위해 이 부분을 최적화해야 함
    - 페이지에 모든 JS와 인라인 CSS를 넣어서 작게 만든다는 말
    - 모든 JS, CSS, HTML을 2.8KB로 압축해서 다운로드할 수 있음
  - 최적화 : 이 페이지가 로딩되는데, 이미지를 포함하지 않은 상태로 3G에서 1.2초가 소요됨
    - 이미지를 포함하면 2.3초가 소요됨(캐시된 Flickr 데이터를 이용)
    - 일반 페이지 로드로서 우리가 할 수 있는 최선의 성능

- 라우터 성능
  - 단일 페이지 앱을 만드는 방법은 여러가지가 존재
    - 라우터를 이용하는 게 깔끔
    - 라우터 : 서버 프레임워크 안의 라우터와 유사한 역할을 함
      - URL들을 가지고 그 URL들을 처리하기 위해 적절한 코드를 호출
  - URL들은 페이지의 anchor에서 가로챈 클릭 or pushState로부터 라우터에게 전달될 수 있음

```javascript
let routes = [];

function addRoute(route, callback, scope) {
  let routeObj = {
    route: route,
    callback: callback,
    scope: scope
  };

  routes.push(routeObj);
}

function handleRoute(path, noHistory) {
  let len = routes.length,
    scope;

  for (let i = 0; i < len; i++) {
    if (path.match(routes[i].route)) {
      if (routes[i].scope) {
        scope = routes[i].scope;
      } else {
        scope = window;
      }

      if (!noHistory) {
        history.pushState({}, null, path);
      }

      routes[i].callback.apply(scope, [path]);
      return true;
    }
  }
  return false;
}
```

- addRoute 메소드 안에서 scope 오브젝트를 전달

  - callback을 호출하면 이 오브젝트는 그 함수 안에서 this가 됨
  - 편리함을 제공하기 위해 callback으로 scope를 전달할 수 있게 함
  - addRoute에서 scope는 옵션, 이것이 설정되어 있지 않으면 다른 scope와 충돌이 나지 않도록 windows scope 안에서 callback을 호출할 것
    - 히스토리를 얻기 위해서 해야할 것은 listener만 추가하면 된다는 장점

  ```javascript
  window.addEventListener("popstate", function(e) {
    handleRoute(window.location.href, true);
  });

  window.router = {
    handleRoute: handleRoute,
    addRoute: addRoute
  };
  ```

- 페이지의 모든 코드가 라우터를 통해 실행된다고 가정하고 이제 히스토리가 자동으로 관리됨

  - 실제 요청을 처리하는 매우 단순한 AJAX 모듈의 코드가 웹 사이트에서 이용이 가능 But, 그 외의 많은 프레임워크 중 하나를 사용할 수도 있음
  - 위의 코드는 매우 제한적
  - 정의된 라우트를 알 수 있고, 그 라우트를 실행한다면 페이지의 모든 클릭을 가로챌 수 있다는 것

- 이벤트 가로채기
  - 올바르게 라우트가 되기 위해서 페이지의 모든 클릭을 가로챌 필요가 있음
  - 이를 위해 document element에 이벤트 listener를 추가할 것
  - 클릭 이벤트들이 DOM 트리에서 발생하기 때문에, document element에 클릭 listener를 추가해야 모든 클릭을 가로챌 수 있음

```javascript
document.addEventListener(
  "click",
  function(e) {
    if (e.target.href) {
      if (router.handleRoute(e.target.href)) {
        e.preventDefault();
      }
    }
  },
  true
);
```

```javascript
// 라우트 구현
let latinNameMap = {};
let links = document.querySelectorAll(".nav-link");
let href;

let pageCache = {};
for (let i = 0, len = links.length; i < len; i++) {
  href = normalizeLink(links[i].href);
  latinNameMap[href] = links[i].getAttribute("data-latin");
}

function normalizeLink(path) {
  return path.match(/([a-z_]+\.html)/)[1];
}

function handlePage(path) {
  let href = normalizeLink(path);
  birdData.changePhoto(latinNameMap[href]);

  if (pageCache[href]) {
    document.querySelector(".content").innerHTML = pageCache[href];
  } else {
    ajax.makeRequest(
      href.replace(".html", "_frag.html"),
      function(xhr) {
        document.querySelector(".content").innerHTML = xhr.responseText;
        pageCache[href] = xhr.responseText;
      },
      this
    );
  }
}

router.addRoute(/[a-z_]+\.html/, handlePage);
```

- 모든 링크들과 popstate 이벤트는 동일한 코드를 통해 진행됨
  - handlePage 함수는 2가지 모두를 지원하기 때문에 페이지는 동일한 방법으로 동작
    - 우리가 되돌아가기 버튼 동작을 구현할 수 있는 방법
  - 매우 가벼운 캐시 계층을 추가함
    - AJAX 요청 후에 Object 안에 그 응답을 저장
  - 사용자가 클릭 or 되돌아가기 버튼을 통해서 그 경로로 되돌아갈 때 다른 요청을 생성하지 않아도 됨
- 완전히 최적화되어도 이 페이지를 1초 내에 로드하지 못함

  - PJAX를 적용해서 첫 페이지를 로드할 때도 동일한 시간이 소요됨
  - PJAX를 사용하거나 다른 단일 페이지로 접근하는 방법이 성능 향상 기술로서 앞으로 더 인기가 있을 것

- 추가적인 속도 향상

  - 랜덤 코드아 같은 작은 문제가 있다면...
    - 사용자가 되돌아가기 버튼을 눌렀을 때 속도가 느려지거나 기묘하게 새들이 바뀌는 현상 발생 가능
      - DOM 안에 div 컨테이너의 전체 콘텐츠를 저장하 것 & 디스플레이를 감추고 새로운 콘텐츠로 교체할 것
  - AJAX 요청을 위해서 HTML을 전달
    - 과도한 p 태그의 쌍이 있지는 않지만, 더 복잡한 HTML fragment가 결국 매우 많은 바이트를 차지하게 됨
  - 만일 페이지가 템플릿을 공유할 경우, 템플릿은 많은 중복된 바이트를 공유한다.

    - 이게 필요한 것

  - 현대의 JS 엔진들은 점점 속도가 빨라지고 있어서, 클라이언트에서 템플릿을 만드는 것은 실제로 많은 서버 프레임워크에서 존재하는 것보다 더 빠른 성능을 보임

  - 템플릿 엔진들은 시간이 흐르면서 복잡해지고 있음

    - Smarty, JSP 등 성숙된 템플릿 시스템들은 소유권이 있는 언어들
    - 가장 단순한 템플릿 시스템은 우리가 채우고 싶은 데이터를 텍스트로 만들어서 라벨링을 하듯이 단순함
    - 댜앙한 목적을 달성하기 위해 템플릿 엔진은 검색과 대체 기능을 가짐

  - 스크립트 블록 내부 페이지에 템플릿을 포함해보자
    - 만일 브라우저가 알 수 없는 그 무언가를 위해 script 태그 타입 속성을 설정한다면, 그것을 파싱하는 시도를 하지 않을 것
    - 여전히 JS로부터 콘텐츠에 접근할 수 있음
    - 단순한 검색과 대체를 위해 일부 템플릿 엔진에서 사용하는 토큰 포맷을 채용할 수 있음
      - 키워드가 2중 중괄호로 쌓여 있음
      - 이중 중괄호를 사용함으로써 템플릿 안의 CSS나 JS가 문제 없게 함

  ```javascript
  <script type="x/template" id="tmpl">
  <div class="container main">
    <h2 id="birdname">{{birdname}}</h2>
    <div class="hero shot">
      <a id="imglink" href="{{imagelink}}">
      <span role="img" aria-label="A bird" class="hero-img"></span></a>
      <p class="caption">
      Photo By
      <a id="attribution" href="{{authorurl}}">
        {{author}}
      </a>
      </p>
    </div>
    <section class="content">
      {{content}}
    </section>
  </div>
  ```

  - 템플릿 파서 : 템플릿과 오브젝트를 취함
    - 긱 템플릿 안에서 찾은 각 토큰들은 오브젝트 안에서 같은 이름의 멤버들이 보일 것
    - 하나의 값을 찾으면, 멤버의 값을 가진 토큰으로 대체됨
      - 그렇지 않으면, 디버깅 목적으로 원래 토큰으로 대체됨
      - Javascript 안에서 잘 이용되지 않는 기능을 이용함
        - String.prototype.replace : 두 번째 인자로 callback을 취할 수 있음
        - 토큰을 빼낼 수 있는 정규 표현을 사용하자
  - 그 다음 매치되는 데이터 오브젝트를 검색하기 위한 간단한 callback 함수로 이용할 것
    - 토큰을 찾는 정규 표현은 토큰을 찾기 위해 non-capturing 그룹을 사용하며 문자로 시작하는 키워드만을 허용

  ```javascript
  let regexp = /(?:\{\{)([a-zA-Z][^\s\}]+)(?:\}\})/g;

  function render(template, data) {
    return templace.replace(regexp, function(fullMatch, capture) {
      if (data[capture]) {
        return data[capture];
      } else {
        return fullMatch;
      }
    });
  }

  window.renderTemplate = render;
  ```

  - 위의 코드를 보면, JSON을 제공하는 server-side API를 이용할 것
    - 라우트 핸들러를 변경해서 DOM을 업데이트하는 대신 새로운 JSON API로부터 데이터를 패치하고, 템플릿을 만들고 DOM 안에 그것을 삽입할 것

```json
// API 응답
{
  "birdname": "California Quail",
  "image_link": "~~~",
  "img_url": "~~~",
  "author_url": "~~~",
  "author": "~~~",
  "content": "~~~"
}
```

- 최적화를 추가 => 각 페이지에 새로운 element를 생성하고 다른 것들을 숨길 수 있음
- 사용자가 되돌아가기 버튼을 클릭 or 이미 본 페이지 링크를 클릭했을 때 페이지 로드 속도를 가능한 빠르게 할 수 있음

```javascript
let pages = {};
let idInc = 0;
let tmpl = document.getElementById('tmpl').innerHTML;

function hidePages() {
  let page;

  for(page in pages) {
    pages[page].style.display = 'none';
  }
}

function handlePage(path) {
  let href = normalizeLink(path)l
  let thispage;

  if(!pages[href]){
    hidePages()
    ajax.makeRequest(href.replace('.html','.json'), function(xhr){
      let data = JSON.parse(xhr.responseText);

      let contentHolder = document.createElement('div');

      contentHolder.id = 'birds-' + idInce++;

      contentHolder.innerHTML = renderTemplate(tmpl, data);

      document.querySelector('main').appendChild(contentHolder);

      pages[href] = contentHolder;
    }, this);
  }
  else {
    hidePages();
    pages[href].style.display = 'block';
  }
}
```

- 가지치기 (PRUNING)

  - 숨겨진 DOM 노드를 만드는 것은 속도를 향상할 수 있는 좋은 방법
    - But, 시간이 지날수록 실제로는 속도 저하를 가져올 수 있음
  - 각각의 페이지들은 일부 텍스트와 이미지를 가지고 있음
    - 이 모든 것이 DOM 안에 있기 때문에 메모리를 모두 써버리는 상황이 발생
  - 모든 것들은 대부분 터치 디바이스에서 지원

    - 메모리는 브라우저 캐시 뒤에 잇는 가장 큰 존재일 것

  - 모든 DOM 노드는 메모리가 필요함, 모든 이미지는 많은 메모리가 필요함
    - 우리가 노드를 만들면 실제로 브라우저는 속도가 느려지다가 나중에는 크래시가 발생할 수도 있음
  - 건실한 시스템 : 앞으로 덜 사용하게 될 노드들을 가지치기 함
    - 페이지의 실제 데이터는 매우 작음 (만들어진 템플릿 x)
      - 무기한으로 가지고 있을 수 있음
      - 노드가 삭제될 때 우리가 해야할 일은 노드를 재빌드하는 것
        - 이 때 데이터를 패치하지는 않음
    - 노드의 최대 개수를 설정하는 것
      - 개수를 초과하면 가장 오래 숨겨져 있던 노드를 삭제 (최소 사용 빈도를 삭제)
      - 노드가 매우 단순하지 않다면 10개 정도의 숨겨진 노드만 유지하는 것도 좋음

## 단일 페이지 프레임워크

- 직접 만드는 것은 데이터 모델이 복잡하고 불안정할 수 있고 쉽지 않음
- 사이트 요구 사항이 MVC 패턴에 의존하는 서버 코드 개발 작업의 복잡도가 특정 레벨에 도달하면, 개발자들은 흔히 프레임워크와 템플릿 엔진에 의존
- 어느 것이 다른 언어들을 지원하는지 주의 깊게 살펴보아야 함

  - 클라이언트와 서버 간에 템플릿을 공유할 때 매우 유용함

- 대부분의 웹사이트에서, 사용자에게 가장 큰 고통은 다음 페이지가 로드되기까지 기다리는 시간
  - AJAX와 함께 브라우저 히스토리 API를 사용하여 그 로드를 완전히 제어하는 것이 가능
  - 페이지 로드를 제어하기 때문에 사용자가 빠르다고 느낄 수 있는 인터페이스를 유지하기 위해,
    - 사용자에게 모든 것이 로딩되고 있다는 메시지를 전달할 수 있음

# 탭 vs 클릭 : 기본적인 이벤트 다루기

마우스 기반 인터페이스의 근본적인 대화 수단이 클릭이라면 터치 인터페이스의 근본적인 대화 수단은 탭(tap)

거의 비슷한 거 같지만 실제로 탭과 클릭은 많은 차이점이 존재

## 무엇이 탭을 다르게 만드는가?

- 데스크톱 : 링크를 따라가려면 먼저 커서를 해당 링크로 가져가서 클릭을 함

  - 터치의 경우는 링크를 따라가는 것을 단순한 탭 동작으로 함
  - 커서를 옮기는 것도 hover 이벤트도 없음
  - 클릭 이벤트가 mousedown, mouseup 이벤트의 조합
    - 탭은 사용자가 화면을 터치하는 것으로 정의되는 단일 이벤트
  - 탭은 물리적인 버튼 장치를 누르는 것이 아닌 터치 디바이스를 손가락으로 누르면 됨

- 터치 인터페이스는 실질적인 물리적 반응은 없지만 좋은 터치인터페이스는 사용자에게 즉각적인 피드백을 제공

  - 피드백을 즉시 받지 못하면 매우 느리다고 여길지도 모름
  - 터치가 느리다는 느낌은 터치 후 반응을 받기까지 걸리는 시간에 따라 결정되기 때문

- 터치 디바이스에는 버튼이 없기 때문에 탭을 중복해서 사용

  - 오른쪽 클릭 대신 탭과 홀드(hold)를 사용하며 줌을 위해 대부분 디바이스에 더블탭이 구현되어 있음
  - 두 번 탭하면 zoom-in이 됨(link나 onclick 이벤트를 가진 엘리먼트 위에서 해도 줌인 기능이 발동)
  - 브라우저는 이러한 중복동작 때문에 onclick 핸들러를 종료하기 전 해당 이벤트가 더블탭인지를 확인하기 위해 약 300ms를 기다림

- 터치 이벤트에서 최상의 성능을 위해서는 클릭 이벤트 대신 터치 이벤트를 사용해야 함

## 터치 이벤트

터치 디바이스가 마우스를 가지고 있지 않아도 브라우저는 여전히 마우스 이벤트를 발생시킴

- onclick, mouseover, mousedown, mouseup 모두 여전히 발생
- 터치가 가능한 브라우저에서 그들은 실제 이벤트가 아니라 합성한 이벤트
  - 브라우저는 터치 동작에 기반한 이벤트를 발생하며 마우스 이벤트와 비슷
- 클릭은 사용자가 손가락을 떼는 것과 상관없이 엘리먼트를 탭하기만 하면 발생
  - onclick 이벤트는 탭한 후 300ms가 지나면 발생됨
  - onmouseup과 onmousedown 역시 onclick과 같은 시간이 지나면 발생
- 브라우저에서 이러한 이벤트들을 발생시키기 때문에 터치 이벤트를 고려하지 않은 웹사이트에서도 터치를 사용할 수 있음

  - 좋은 터치 인터페이스를 만들고 싶으면 합성한 이벤트를 피하고 터치 이벤트를 직접 이용하는 게 좋음

- 모바일 브라우저에는 4가지 이벤트 타입이 존재

  - 터치가 시작될 때
    - 사용자의 손가락이 화면에 닿는 순간
  - 터치포인트(touchpoint)가 움직일 때
    - 사용자가 손가락을 화면에서 떼지 않고 움직임
  - 터치가 끝날 때
    - 사용자가 손가락을 화면에서 떼는 순간
  - 터치가 취소될 때
    - 알림, 인터럽트(interrupt)와 같은 행위들)

- [MDN touch](https://developer.mozilla.org/ko/docs/Web/API/Touch_events)

- [Touch Object](https://developer.mozilla.org/en-US/docs/Web/API/Touch)

- IE는 안되고 EDGE는 되는 이상한 곳...

```javascript
// 포인터 타입 구별하기
function handleEvent(event) {
  switch (event.pointerType) {
    case event.MSPOINTER_TYPE_TOUCH:
      break;

    case event.MSPOINTER_TYPE_PEN:
      break;

    case event.MSPOINTER_TYPE_MOUSE:
      break;
  }
}
element.addEventListener("MSPointerDown", handleEvent, false);
```

## 탭 조작하기

```javascript
function togglePicture() {
  let h = document.querySelector(".picture");
  if (h.style.display == "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

node.addEventListener("touchstart", function(e) {
  e.preventDefault();
  togglePictire();
});
```

- touchstart 이벤트를 사용하는 것이 클릭 이벤트를 사용하는 것보다 성능이 좋음

  - 문제점 : 이벤트 리스너에 있는 preventDefault가 버튼의 액티브 상태 전환을 방지함
  - 버튼의 액티브 상태 전환은 사용자가 버튼의 사용 가능 여부를 판단하게 하는 중요한 부분 => 꼭 처리해 주어야 함
    - 터치 시작 시점과 터치 종료 시점에서 액티브 클래스를 서로 스왑하면 됨

  ```javascript
  node.addEventListener("touchstart", function(e) {
    e.preventDefault();
    e.target.className = "active button";
    togglePicture();
  });

  node.addEventListener("touchend", function(e) {
    e.preventDefault();
    e.target.className = "button";
  });
  ```

- 합성(synthetic) 탭 이벤트 만들기
  - 오직 터치 이벤트를 지원하는 브라우저에서만 동작하는 문제점
    - IE10.0을 제외한 모든 모바일 브라우저에서 동작한다는 의미이기도 함
    - 데스크톱 브라우저에서는 동작하지 않을 거라는 의미
    - 방법 1) Jquery or YUI처럼 커스텀 이벤트 기반 구조를 만드는 것
    - 방법 2) DOM 레벨 3를 이용해 커스텀 이벤트를 실제로 생성하는 것
  - DOM 커스텀 이벤트는 일반 DOM 이벤트와 정확히 같은 방식으로 동작
    - 이벤트 역시 addEventListener를 통해 등록 가능
    - 차이점 : 일반적인 이벤트 행동과 마찬가지로 이벤트를 시작할 때를 정의해줘야 함

```javascript
node.addEventListener("tap", function(e) {
  togglePicture();
});

node.addEventListener("touchstart", function(e) {
  let tap = document.createEvent("CustomEvent");
  tap.initCustomEvent("tap", true, true, null);
  node.dispatchEvent(tap);
});
```

- initCustomEvent
  - 이벤트 이름, 이벤트 버블(bubble) 여부, 이벤트 취소 여부, 이벤트를 초기화할 때 지나가는 데이터
  - 현재 클릭들은 여전히 동작하지 않음
  - 먼저 탭 처리를 위해 탭 리스너를 추가하는 함수를 제작
    - 터치 이벤트가 발생하면 탭 이벤트인지를 확인하고 처리함
    - 기본적인 마우스 이벤트 처리를 위한 fallback도 덧붙임

```javascript
function addTapListener(node, callback) {
  let startEvent = "mousedown",
    endEvent = "mouseup";

  if (typeof window.ontouchstart != "undefined") {
    startEvent = "touchstart";
    endEvent = "touchend";
  }

  node.addEventListener(startEvent, function(e) {
    let tap = document.createEvent("CustomEvent");
    tap.initCustomEvent("tap", true, true, null);
    node.dispatchEvent(tap);
  });

  node.addEventListener(endEvent, function(e) {
    let tapend = document.createEvent("CustomEvent");
    tapend.initCustomEvent("tapend", true, true, null);
    node.dispatchEvent(tapend);
  });

  node.addEventListener("tap", callback);
}
```

- tapend 이벤트는 자동적으로 발생
- window 오브젝트의 ontouchstart 존재를 체크하면 tapend 이벤트를 간단히 체크할 수 있음

```javascript
// 토글 코드
addTapListener(document.getElementById("toggle"), function(e) {
  e.preventDefault();
  e.target.className = "active button";
  togglePicture();
});
node.addEventListener("tapend", function(e) {
  e.preventDefault();
  e.target.className = "button";
});
```

- 노드 퍼사드(FACADE)

  - YUI, JQUERY 같은 라이브러리 => 이벤트 핸들링을 간단하게 만드는 퍼사드 패턴
  - 약간 지저분해 보이는 함수보다는 on 함수를 가지는 연결된 퍼사드를 만들 수 있음
  - on 함수를 이용하면 어떠한 DOM or 우리가 정의한 합성 이벤트들에 대해서도 listen할 수 있음

  ```javascript
  $(".button")
    .on("tap", function(e) {
      e.preventDefault();
      togglePicture();
      e.target.className = "active button";
    })
    .on("tapend", function(e) {
      e.target.className = "button";
    });
  ```

  - \$ : 객체를 리턴하는 함수이며, 그 객체는 on 함수 하나만을 보유하고 있음
    - on 함수는 연결을 지원하기 위해 같은 객체를 리턴

  ```javascript
  (function() {
    let TOUCHSTART, TOUCHEND;

    if (typeof window.ontouchstart != "undefined") {
      TOUCHSTART = "touchstart";
      TOUCHEND = "touchend";
    } else if (typeof window.onmspointerdown != "undefined") {
      TOUCHSTART = "MSPointerDown";
      TOUCHEND = "MSPointerUp";
    } else {
      TOUCHSTART = "mousedown";
      TOUCHEND = "mouseup";
    }
  });
  ```

  - 위의 코드는 스크립트가 처음 파싱되고 수행될 때 오직 한 번 수행됨
    - 스크립트가 로딩된 이후 브라우저가 변하는 경우가 없기 때문에..

  ```javascript
  function NodeFacade(node) {
    this._node = node;
  }

  NodeFacade.prototype.getDomNode = function() {
    return this._node;
  };
  ```

  - 퍼사드가 충분치 않을 경우를 대비해서 언더라인 DOM(\_node)에 대한 getter가 존재

  ```javascript
  NodeFacade.prototype.on = function(evt, callback) {
    if (evt === "tap") {
      this._node.addEventListener(TOUCHSTART, callback);
    } else if (evt === "tapend") {
      this._node.addEventListener(TOUCHEND, callback);
    } else {
      this._node.addEventListener(evt, callback);
    }

    return this;
  };

  NodeFacade.prototype.off = function(evt, callback) {
    if (evt === "tap") {
      this._node.removeEventListener(TOUCHSTART, callback);
    } else if (evt === "tapend") {
      this._node.removeEventListener(TOUCHEND, callback);
    } else {
      this._node.removeEventListener(evt, callback);
    }

    return this;
  };
  ```

- tap과 tapend가 실제 이벤트가 아니기 때문에 우리가 정의한 TOUCHSTART와 TOUCHEND 상수에 대신 바인딩함

  - 그 외의 다른 DOM 이벤트는 모두 처리하지 않음
  - \$ 함수는 셀렉터가 가리키는 노드를 찾아 새로운 노드 퍼사드를 리턴함

  ```javascript
  window.$ = function(selector) {

    let node = document.querySelector(selector);

    if(node) {
      return new NodeFacade(node);
    }
    else {
      return null;
    }

  }

  }

  })();
  ```

- 터치 이벤트를 사용할 때 브라우저 or 디바이스의 'Zoom을 위한 더블탭'과 같은 네이티브 이벤트를 미리 생각하고 있어야 함
  - 터치 이벤트의 prevent default는 이러한 네이티브 이벤트를 오버라이드 한다는 것을 명심!
    - 항상 만든 코드가 예상대로 움직이는지 테스트하는 습관!

# CSS 트랜지션, 애니메이션, 그리고 트랜스폼

애니메이션 효과를 이용한 UI는 제대로 쓰기만 한다면 사용자와의 상호작용에 많은 이점을 줄 수 있음

이미지를 좌우 or 그냥 슬라이드되어 없어지게 하는 것보다 이미지가 단지 보이지 않을 뿐 언제든지 다시 부를 수 있다고 알려주는 게 좋음

성능 문제 - 만약 어떤 Application이 jitter, jank or hiccups이라 불리는 애니메이션들을 보유하고 있다면 해당 애니메이션이 동작하지 않고 있을 때도 애플리케이션으로 느리게 느껴질 수 있음

터치 디바이스에서 애니메이션은 사용자 실행에 대한 피드백을 주는 중요한 역할을 담당하지만, 애니메이션이 느리게 동작한다면 사용자 역시 자신이 실행하고 있는 것이 느리다는 느낌을 받을 것

## 애니메이션 엘리먼트

- 전통적으로 특정 엘리먼트에 애니메이션을 줄 때, setTimeout을 사용했었음
- setTimeout을 포함한 함수를 반복적으로 호출해 시간의 흐름에 따라 값을 변경함

```javascript
function fadeIn() {
  let h = document.querySelector(".picture");
  let opacity = parseFloat(h.style.opacity);
  if (opacity < 1) {
    opacity = opacity + 0.1;
    h.style.opacity = opacity;
    window.setTimeout(fadeIn, 33);
  }
}
```

- 위의 방식은 매끄럽지 않은 애니메이션을 보여줄 수 있음

  - 모든 JS가 단일 스레드에서 동작하므로 한 번에 하나씩만 실행하기 때문에..
  - 이벤트 타이머는 비동기 작업이라 발생 즉시 수행하는 것이 아닌 일단 큐에 쌓이게 되고 스레드가 한가할 때 비로소 수행하게 됨
    - ex) 위 코드에서 만약 브라우저가 할 일이 많으면 다음 프레임을 그리지 않고, 브라우저가 한가할 때까지 기다리며, 이때 애니메이션이 잠시 멈춘 것처럼 보임
    - 추가적으로 타이머 안의 코드가 수행 중일 때 그 어떤 다른 일도 일어나지 않는데, 이는 이벤트 핸들러 역시 큐에 들어 있다는 의미

- 느린 모바일 디바이스에선 기기 자체의 성능으로 인해 타이머 내부 코드의 수행이 느릴 수 있음

  - 이 때문에 인터페이스의 반응 속도가 느려질 수 있음
  - 해결책으로 타임아웃 간격을 지연하는 방법이 있지만,
    - 역시 원활하지 않은 애니메이션을 보여주기는 마찬가지

- SetTimeout 이용한 애니메이션을 피하고 CSS 트랜지션을 사용하길 권함

  - CSS 트랜지션을 사용하면 애니메이션을 더 효율적으로 사용 가능

- 트랜지션

  - CSS 트랜지션 : CSS에서 간단하게 애니메이션을 만들 수 있는 방법으로 다중 스레드에서 자바스크립트를 수행할 수 있는 강점이 존재
  - 어떤 모바일 디바이스의 CPU가 다중 코어라면 JS를 통해 매끄러운 애니메이션을 구현할 수 있음
    - 물론 애니메이션 효과가 CPU에 부담을 주지만 그것으로 인해 스크립트가 이벤트를 처리하는 데 지장을 주지는 않음
  - CSS 애니메이션과 트랜지션 : 다이내믹한 애니메이션을 처리할 수 있는 동시에 이벤트 핸들러도 빠르게 처리할 수 있도록 하여 2가지 모두 만족
  - 애니메이션 CSS 프로퍼티들은 트랜지션과 함께 동작함

  - 애니메이션 CSS 값에 변화를 줌으로써 애니메이션을 시작하고 CSS 트랜직션 프로퍼티를 통해 트랜지션을 적용

  ```css
  transition: [property] [duration] [timing-function] [delay];
  ```

  - 프로퍼티는 리스트 형태로 사용이 가능 & 모든 값들은 옵션 처리됨
    - 몇몇 프로퍼티가 없어도 동작에는 문제가 없음
    ```css
    this:transition: color 1s ease-out
    ```
    - color의 종료를 1초간 지연시킴
    - 트랜지션이 표준화되었음에도 불구하고 웹킷은 여전히 prefix를 요구
      - IE10.0, 오페라, 파이어폭스 모바일은 prefix를 더 이상 사용하지 않음

* all 키워드

  - 애니메이션 프로퍼티에 사용될 수 있지만, 의도되지 않은 애니메이션을 생성할 수 있음 & 성능에 영향을 줄 수 있기 때문에 권장 X
  - 단순히 나타나거나 사라지는 대신 페이드인 or 페이드아웃 효과를 주면 더 세련된 느낌을 줄 수 있음

  ```html
  <div id="touchme">
    <button class="button" id="toggle">Toggle Picture</button>
    <div class="picture hidden">
      <p>Goldfinch by ibm4381 on Flickr</p>
      <a href="~~~">
        <img src="img.jpg" />
      </a>
    </div>
  </div>
  ```

  - css를 이용한 transition

  ```css
  .picture {
    -webkit-transition: opacity 0.2s ease-out;
    transition: opacity 0.2s ease-out;
    opacity: 1;
  }

  .picture.hidden {
    opacity: 0;
  }
  ```

  - 프로퍼티 값 변경 대신 스타일을 변환하는 스크립트

  ```javascript
  let hidden = true;
  let h = document.querySelector(".picture");

  function togglePicture() {
    if (hidden) {
      h.className = "picture";
      hidden = false;
    } else {
      h.className = "picture hidden";
      hidden = true;
    }
  }

  $(".button")
    .on("tap", function(e) {
      e.preventDefault();
      togglePicture();
      e.target.className = "active button";
    })
    .on("tapend", function(e) {
      e.target.className = "button";
    });
  ```

  - 사용자가 토큰 버튼을 탭하면 이미지가 매끄럽게 페이드인, 페이드아웃이 됨

- JS를 이용한 트랜지션

  - 트랜지션 : 간단하게 부드러운 애니메이션을 추가할 수 있음
  - CSS 함수와 더불어 트랜지션은 종료할 때 transitionend 이벤트를 발생함
    - 이를 이용해 좀 더 복잡한 애니메이션을 만들 수 있음
      - ex) 화면에서 공의 튀어 오름을 표현 가능
        - 아래 방향으로 가속되다가 완전히 멈춘 다음 위 방향으로 감속하면서 원래 위치로 돌아옴
          - 먼저 내려가는 동작에 대한 트랜지션을 정하고 값을 변화시키면서 트랜지션을 시작함
          - 내려가는 동작에 대한 트랜지션이 끝나면 올라가는 동작에 대한 트랜지션을 적용해 공이 원래 위치로 가도록 함

  ```html
  <div id="ball"></div>
  <div id="floor"></div>
  ```

  ```css
  body {
    margin: 0;
    padding: 0;
  }

  #ball {
    background: red;
    height: 100px;
    width: 100px;
    position: absolute;
    top: 10px;
    left: 20px;
    border-radius: 50px;
  }

  #floor {
    position: absolute;
    bottom: 10px;
    left: 0px;
    width: 350px;
    height: 350px;
    height: 1px;
    border-top: 5px solid brown;
  }
  ```

  - 작업을 시작하기 전에 다양한 브라우저에서 동작할 수 있도록 트랜지션과 transitionend 이벤트의 prefix에 대한 처리가 필요함

  ```javascript
  (function() {

    let down = false, trans = 'transition', eventName = 'transitionend';

    if(typeof document.body.style.webkitTransition === 'string') {
      trans = 'webkitTransition;
      eventName = 'webkitTransitionEnd';
    }
    else if(typeof document.body.style.MozTransition === 'string') {
      trans = 'MozTransition';
    }
  })
  ```

  - 트랜지션을 이용해 공의 튀어 오름 효과를 얻기 위해선 타이밍 함수를 이용해야 함
    - ease-in과 ease-out은 간단하지만 이것만으로는 부족 & easing 함수들의 수정이 필요
      - 이징 키워드 (ease-in, ease-out, ease-in-out)와 cubic-bezier
      - cubic-bezier는 4개의 포인트를 가지고 커브를 정의하는 함수
        - 문법이 약간 애매해 보이지만 실제로 매우 간단히 사용할 수 있음
  - 4개의 포인트는 컨트롤 포인트(control point: P1, P2)와 또 다른 2개의 포인트(0.0, 1.1)들을 말함
    - 일러스트레이터 프로그램의 포인트와 같은 의미로 그래프에서 커브를 조종하기 위해 사용됨
    - 튀어 오르는 공의 애니메이션을 구현하기 위해서는 내려가는 공과 올라오는 공의 커브를 정해주어야 함
      - bezier 커브 값을 구하는 데 도움을 주는 여러 툴들이 존재
        - CSS cubic bezier tool 검색 ㄱㄱ
      - [CSS 참고 자료](https://apes0113.postype.com/post/2620)

- 커브 값을 알면..

```javascript
let ball = document.getElementById("ball"),
  floor = document.getElementById("floor");

function bounce() {
  if (down) {
    ball.style[trans] = "top 1s cubic-bezier(0, .27, .32, 1)";
    ball.style.top = "10px";
    down = false;
  } else {
    ball.style[trans] = "top 1s cubic-bezier(1,0, 0.96, 0.91)";
    ball.style.top = floor.offsetTop - 100 + "px";
    down = true;
  }
}

ball.addEventListener(eventName, bounce);
bounce();
```

- CSS 애니메이션

  - 상태 간 이동에 가장 유용한 방법, 트랜지션을 할 때 다른 관점에서 좀 더 강력한 무언가가 필요하면 CSS 애니메이션이 답이 될 수 있음
  - CSS 애니메이션 : 단순히 2개의 상태만을 처리하는 대신 다수의 키프레임을 정의할 수 있으며, 각각의 키프레임 사이에 트랜지션을 적용해 매끄러운 애니메이션을 구성할 수 있음
  - 웹킷이 벤더 prefix를 필요로 하기 때문에 CSS 애니메이션 역시 번거로운 반복 작업이 필요함

    - prefix 대상은 각 애니메이션, 키프레임, 프로퍼티 등

  - 키프레임 만들기

    - @keyframes 법칙을 가지고 만들 수 있음, @keyframes 내부에는 시간 리스트가 존재하는데, 각각의 CSS 블럭이 애니메이션의 키프레임이다.
    - 시간은 퍼센트로 표현하는데, 애니메이션의 시작은 0퍼센트, 종료는 100퍼센트, 튀어오르는 공을 만들기 위한 기본적인 프레임은

    ```css
    @keyframs bounce {
      0% {
        top: 20px;
      }

      50% {
        top: 300px;
      }

      100% {
        top: 20px;
      }
    }
    ```

    - 튀어 오르는 공의 애니메이션은 공이 탑 위치에 있는 것으로부터 시작함
      - 바닥까지 내려온 뒤 다시 원래의 탑 위치로 돌아오는 것으로 끝맺음
      - 한 번 키프레임이 적용되면 어떠한 셀렉터에도 적용될 수 있음

  ```css
  #ball {
    animation: bounce 2s infinite;
  }
  ```

  - 키프레임을 셀렉터에 적용하는 것은 키프레임 이름, 기간, 반복 횟수 손으로 함
    - 무한 반복 : infinite 키워드를 사용할 것
      - 위와 같은 애니메이션 프로퍼티 설정은 정식 설정의 축약형
      - 같은 애니메이션을 보조 프로퍼티로 정의할 수 있음
    - 보조 프로퍼티를 이용하면 직관적이지만 대신 더 많은 바이트를 필요로 함

  ```css
  #ball {
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  ```

  - 하지만, 점프를 좀 더 리얼하게 만들어주는 타이밍 함수가 필요함
    - 트랜지션에서와 같이 타이밍 함수 역시 CSS 애니메이션에 적용할 수 있음
    - 셀렉터에 키프레임을 정의할 때 타이밍 함수를 같이 정의해 주거나 각각의 키프레임에 타이밍 함수를 적용해 주면 됨
    - 만일 셀렉터에 타이밍 함수가 존재하고 키프레임에도 타이밍 함수가 적용되어 있으면 키프레임의 타이밍 함수가 셀렉터의 타이밍 함수를 오버라이드 함
      - 이 CSS 역시 모든 브라우저에서 지원하지 않기 때문에 prefix 문제가 발생함
      - 키프레임의 타이밍 함수 설정에 각 브라우저의 prefix가 필요하며 애니메이션 프로퍼티 역시 prefix가 요구됨 (콤마는 허용되지 x)
      - prefix가 적용된 타이밍 함수가 적용된 CSS 애니메이션은...
        - 코드 참고
  - 만약 애니메이션을 좀 더 컨트롤하고 싶으면 애니메이션 이벤트에 대한 이벤트 리스너를 추가해야 함
    - animationstart, animationend, animationiteration...
      - 표준화되어 있지 않아 다른 모바일 문서에서 찾아보자
  - [애니메이션 문서](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

* JS 애니메이션 다시보기

  - CSS 애니메이션, CSS 트랜지션이 JS 애니메이션 보다 훌륭하지만 CSS 애니메이션을 사용할 수 없는 경우에는 JS를 사용해야 함
    - 굳이 setTimeout를 쓰지 말고...
  - 애니메이션의 목적
    - 어떤 동작을 불규칙한 지연 없이 가능한 부드럽게 보여주는 데 있음
      - 일반적으로, 부드러운 영상의 애니메이션 : 높은 프레임률을 가진 애니메이션을 말함
        - 프레임률 : 어떤 엘리먼트를 화면에 반복해서 그려주는 행위가 1초에 몇 번 일어나는지를 나타내는 측정 방법
          - 영화 : 24FPS, 비디오 게임 : 60FPS를 목표로 함
        - 더불어 정확하게 그려주는 것 또한 애니메이션의 필요조건
          - 애니메이션 동작 중에 갑자기 멈추거나 어떤 프레임이 생략되는 일이 발생하면 부드러운 애니메이션이라 말할 수 없음
          - CSS 애니메이션은 구현된 코드를 수행함에 있어 부드러운 애니메이션을 보여주는 데 최적화되어 있음
            - 애니메이션이 부드럽지 않게 표현될 바에는 차라리 프레임률을 자동으로 낮추어버림
  - 모션에 최적화되기보다 수행 간격에 최적화되어 있다는 것
    - setTimeout이 부드러운 애니메이션에 적합하지 않은 또 다른 이유
      - 만약 30FPS의 애니메이션을 구현하기 위해 33ms의 타임아웃을 가진 코드를 추가했는데, 스크립트가 바빠서 그 타임아웃이 실행 큐에 있거나 setInterval인 경우에
        - setTimeout 코드는 항상 정해진 시간에 수행하려 하기 때문에 애니메이션 코드의 수행이 취소됨

* `REQUESTANIMATIONFRAME`

  - 현재 브라우저는 자바스크립트 애니메이션을 위해 더 강력하고 새로운 툴을 제공
  - requestAnimationFrame
    - setTimeout보다 더 DOM 함수에 적합
    - setTimeout에서 시간과 콜백 함수를 필요로 했던 것과 다르게 오직 콜백 함수만 필요로 함
    - setTimeout에서는 등록한 시간이 지나면 콜백이 호출되었는데, requestAnimationFrame은 브라우저가 화면에 그리기 바로 직전에 호출됨
      - 이러한 점들로 인해 브라우저는 프레임률 조절을 포함해 애니메이션 최적화를 스스로 수행할 수 있고 성능을 향상 시킴
  - UI 업데이트와의 결합을 통해 CPU 사용률을 setTimeout보다 현저히 낮출 수 있음
  - 단점도 존재
    - requestAnimationFrame이 prefix를 사용한다는 점, 안드로이드 브라우저에선 전혀 사용할 수 없다는 것
    - 모든 브라우저에 적용(browser normalization)하기 위해 코드를 추가할 필요가 있음
    - prefix 작업과 더불어 setTimeout에 대한 대체도 등록함
      - setTimeout의 성능 문제를 피하기 위해 프레임률을 15FPS로 제한
    - 최선의 방법은 아니어도 큐에 등록되는 것과 다른 성능 문제의 야기를 어느 정도 줄여줄 수 있음

  ```javascript
  let requestFrame = (function() {
    let thisFunc,
      prefixList = ["webkit", "moz", "ms"];

    for (var i = 0; i < prefixList.length; i++) {
      thisFunc = prefixList[i] + "RequestAnimationFrame";

      if (window[thisFunc]) {
        return function(callback) {
          window[thisFunc](callback);
        };
      }
    }

    return function(callback) {
      window.setTimeout(callback, 67);
    };
  })();
  ```

  - 기본 애니메이션 : 공을 500픽셀까지 떨어뜨리고, 매 프레임마다 10픽셀만큼 이동한다.

    ```javascript
    (function() {
      let destination = 500;
      let start = 0;

      let ball = document.getElementById("ball");

      function move(element) {
        start = start + 10;
        element.style.top = start + "px";

        if (start < destination) {
          requestFrame(function() {
            move(element);
          });
        }
      }

      move(ball);
    })();
    ```

    - 프레임률이 브라우저에 의해 변동적으로 제어되기 때문에 이 애니메이션은 하드웨어 기기에 따라 느릴 수도 or 빠를 수도 있음
      - 일정한 속도로 움직이게 하려면 애니메이션 전체 시간을 바탕으로 프레임 간의 경과 시간을 계산해 각각의 엘리먼트가 얼마만큼의 픽셀을 이동해야 하는지 알아내야 함

    ```javascript
    function animate(element, from, tpo, duration, callback) {
      let pixelsPerMS = Math.abs(from - to) / duration;

      let pos = from;

      let time = Date.now();

      let func = function() {
        let lastTime, elapsed, pixelsToMovel;

        lastTime = time;
        time = Date.now();
        elapsed = time - lastTime;
        pixelsToMove = Math.ceil(elapsed * pixelsPerMS);

        pos = pos + pixelsToMove;

        element.style.top = pos + "px";
        if (pos < to) {
          requestFrame(func);
        } else {
          callback();
        }
      };
      func();
    }
    // 콜백함수를 등록해 애니메이션이 끝나면 알려주도록 함
    animate(ball, 0, 100, 5000, function() {
      console.log("done!");
    });
    ```

- 더욱 부드러운 애니메이션 만들기

  - 이런 방법들은 애니메이션을 진정 부드럽게 만들기에는 충분하지 않음
  - 모바일 사용자들은 자신의 앱에서 애니메이션이 우리가 지금까지 했던 것보다 좀 더 부드럽게 동작되기를 기대하고 있음

  - 애니메이션 성능 문제 디버깅
    - 느린 애니메이션을 인지하기는 쉽지만 정작 그 원인을 찾아내기는 매우 어려움
      - 몇몇 브라우저들은 디버깅 툴을 제공하는데 크롬은 크롬 개발자 도구라는 매우 강력한 디버깅 툴을 가짐
        - Frame Timeline이 없어짐 => 다른 것을 조사해 보자
    - 만일 어떤 부분이 조금 느리면 애니메이션의 성능은 수배로 느려짐
      - 어떤 DOM에 30ms 동안 단 한 번 변화를 준다면 대부분의 사용자들은 그 변화를 알아챌 수 없음
      - 하지만 그 변화를 애니메이션화하기로 결정했다면 효과적인 프레임률은 대략 30FPS가 됨
        - 스크롤과 같은 네이티브 애니메이션에도 같은 룰이 적용됨
          - 만약 페이지가 너무 느려서 16.667ms에 그려질 수 없다면 스크롤의 프레임률은 느려질 것이고 페이지가 느리다는 느낌을 가지게 됨
      - 부드러운 애니메이션은 높은 프레임률을 유지하는 것
        - 높은 프레임률을 얻기 위해선 각 프레임의 DOM 변화시간을 최소화해야 함
        - repaint : 브라우저가 이미지의 변화를 특정 영역에 실제로 렌더링하는 것
          - 영역의 크기가 클수록 더 많은 일을 하기 때문에 애니메이션이 실행되는 영역이 클수록 속도는 느려지게 됨
          - 작업의 복잡도 역시 속도에 영향을 줌
            - if 브라우저가 작은 검은 사각형을 그리는 작업을 한다면 이는 매우 간단한 일이겠지만, 그림자를 가진 커다란 공을 그린다며 이것은 꽤 어려운 작업
              - 합성 때문이다!!

- 합성(COMPOSITING)

  - 브라우저가 어떤 이미지 위에 또 다른 이미지를 그릴 때 발생
  - 컴퓨터 화면은 픽셀로 채워진 평평한 레이어로 구성
    - 브라우저가 이미지를 렌더링하는 것은 결국 OS의 그래픽 장치가 각각의 픽셀에 어떤 색을 쓸지를 계산하는 과정
  - 애니메이션의 공과 같이 안티-앨리어스(anti-alias) 타원을 그리는 것은 가장자리의 픽셀이 부분적으로 투명이기 때문에 계산이 어려움
    - 시스템이 무엇을 하고 있건 간에 렌더링 작업은 부드러운 가장자리를 만들기 위해 가장자리 픽셀의 색깔을 계산해야 함
      - 그림자, 부분 투명화 효과가 추가된다면 계산을 해야할 픽셀이 많아지기 때문에 더 어려워짐
    - 그림자 위로 투명한 어떤 것이 중첩된다면 문제는 복합적으로 됨
  - 엘리먼트 수가 증가함에 따라 그려야 할 픽셀 수는 기하급수적으로 증가하게 되고 역시나 계산은 더욱더 어려워지게 됨

  - 합성은 비용이 많이 듬
    - 엘리먼트를 애니메이션화할 때 브라우저가 해야 할 일을 덜 합성할 수록 그 애니메이션은 더 빠르게 수행됨
      - 드로잉 작업이 어려울 수록 크롬의 폭포수 그래프에 페인트 작업이 계속 길어지는 것을 볼 수 있음
      - 만일 애니메이션이 순전히 CSS로만 되어 있고 느리게 동작한다면 보통 합성이 주원인

## CSS 트랜스폼

- 모든 애니메이션을 최적화한 이후에도 여전히 충분히 빠르지 않다고 느낀다면 새로운 무기가 필요할 때
  - 바로 CSS 트랜스 폼, CSS 트랜스 폼
    - DOM 계산을 끝낸 이후 엘리멘트를 그리는 방식에 변화를 줌
      - CSS 트랜스폼은 트랜스폼 함수와 트랜스 폼 CSS 프로퍼티를 적용할 수 있음
  - 어떤 엘리먼트를 DOM의 상대적인 위치로 이동하고 translate 트랜스폼 함수를 이용할 수 있음
    - translate는 2개의 parameter를 가짐
      - 원래의 위치로부터 이동할지를 나타낸다.
        - 기본적으로 원래의 위치는 엘리먼트의 중앙

```css
#ball {
  top: 10px;
  left: 10px;
}

#ball:active {
  top: 50px;
  left: 0px;
  /* 트랜스 폼을 이용해서 같은 효과 가능 */
  -webkit-transform: translate(0, 40px);
  transform: translate(0, 40px);
}
```

- 트랜스 폼을 이용해 튀어 오르는 공 애니메이션을 재 구성할 수 있음

```css
@keyframes bounce {
  0% {
    transform: translate(0, 20px);
    animation-timing-function: cubic-bezier(1, 0, 0.96, 0.91);
  }

  50% {
    transform: translate(0, 300px);
    animation-timing-function: cubic-bezier(0, 0.27, 0.32, 1);
  }

  100% {
    transform: translate(0, 20px);
    animation-timing-function: cubic-bezier(0, 0.27, 0.32, 1);
  }
}
```

- 트랜스 폼을 이용하면 브라우저가 하는 일이 적어지는 것을 확실히 볼 수 있음

- 하드웨어 가속
  - 애플의 빌트인 그래픽 가속기 : 비싼 비용을 지불하는 그래픽 효과를 가진 애니메이션이 매우 부드럽게 동작하는 것
  - GPU : 애니메이션과 합성을 위해 고안됨, GPU를 가진 디바이스의 브라우저들은 성능을 향상시키고 싶을 때 가능하면 GPU를 사용하려 함
  - 기본적인 트랜스폼은 GPU를 사용하지 않아도 되지만, 3D 트랜스 폼은 항상 GPU를 사용해 렌더링 해야 함
  - 현재까지 가장 빠른 애니메이션 방법
    - 하드웨어 가속을 이용한 트랜스폼
  - 사용했던 2D 트랜스폼을 3D로 변환하는 방법은 translate를 translate3d로 바꾸고 z값을 추가하면 됨
    - Z값이 0이고 3차원에서 실질적인 변환이 없을지라도 이 트랜스폼 동작은 하드웨어 그래픽 가속기에서 이루어짐

```css
@keyframe bounce {
  0% {
    transform: translate3d(0, 20px, 0);
    animation-timing-function: cubic-bezier(1, 0, 0.96, 0.91);
  }

  50% {
    transform: translate3d(0, 300px, 0);
    animation-timing-function: cubic-bezier(0, 0.27, 0.32, 1);
  }

  100% {
    transform: translate3d(0, 20px, 0);
    animation-timing-function: cubic-bezier(0, 0.27, 0.32, 1);
  }
}
```

- 하드웨어 가속의 한계
  - 브라우저가 어떤 엘리먼트에 하드웨어 가속을 사용하려 할 때 네이티브 DOM 엘리먼트를 GPU에 그냥 넘겨줄 수 없음
  - 대신 엘리먼트를 이미지로 렌더링하여 GPU에 넘겨줌
  - GPU : 텍스처 맵(texture map) 형태의 이미지를 엘리먼트를 표현하고 있는 폴리곤으로 사용함
    - GPU는 그 폴리곤을 빠르게 이동시킬 수 있음
  - 만약 그 비트맵이 투명 정보(알파 채널)를 가지고 있다면 엘리먼트는 부분적으로 투명할 수 있음
    - GPU는 그 엘리먼트의 크기 증가, 크기 감소, 회전, 트랜스폼 적용 등을 할 수 있게 됨
    - GPU는 콘텐츠에 대한 렌더링을 다시 할 수 없음
  - 일단 한번 엘리먼트가 GPU로 전송되면 그것은 콘텐츠의 이미지일 뿐 실제 콘텐츠가 아니기 때문이다.

```html
<head>
  <meta name="viewport" content="widt=device-width" />
  <style type="text/css">
    h1 {
      width: 100px;
      border: 1px solid black;
      margin: 50px 0px 100px 100px;
      text-align: center;
      font-size: 32px;
      -webkit-transform: scale(3);
      transform: scale(3);
    }

    .blurry {
      -webkit-transform: scale3d(3, 3, 0);
      transform: scale3d(3, 3, 0);
    }
  </style>
</head>
<body>
  <h1>Hello</h1>
  <h1 class="blurry"></h1>
</body>
```

- 완전히 렌더링되었을 때, 위에 위치한 2D 트랜스폼이 적용된 엘리먼트는 선명하게 보이는 반면,
  - 아래에 있는 3D 트랜스폼이 적용된 엘리먼트는 흐릿
- 3D 트랜스폼이 흐릿한 텍스트를 만드는 반면 2D 트랜스폼 결과는 렌더링된 이미지가 아니기 때문에, 브라우저는 그 텍스트를 다시 렌더링할 수 있음
  - GPU는 이미지 말고는 아무것도 없기 때문에, 크기를 키워도 결과적으로는 흐릿한 이미지만 나옴
    - 이러한 제약에 따른 문제점을 해결하기 위해 애니메이션이 종료되면 선명하게 해주는 트랜스폼을 다시 한 번 수행해야 함
    - 대상이 진짜 3D가 아니라면 3D 트랜스폼을 2D 트랜스폼으로 변경하는 것으로 문제를 해결할 수 있는데,...
      - transitionend or animationend 이벤트가 발생하면 스타일을 변경하는 것으로 가능함
  - 탭을 하면 엘리먼트가 확대되고 흐릿해지지만 잠시 후 다시 선명해지는 것을 볼 수 있음

```html
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width" />
  <title>Touch</title>
  <style type="text/css">
    #zoomer {
      font-size: 24px;
      position: absolute;
      top: 50px;
      left: 100px;
      background: green;
      -webkit-transition: -webkit-transform 0.2s ease-in-out;
      transition: transform 0.2s ease-in-out;
    }
  </style>
</head>

<body>
  <h1 id="zoomer">Drink me!</h1>
</body>
<script type="text/javascript" charset="utf-8">
  (function() {
    let TRANSFORM_PROPERTY =
      typeof document.body.style.webkitTransform === "string"
        ? "webkitTransform"
        : "transform";

    let TRANSFORM_END =
      typeof document.body.style.webkitTransform === "string"
        ? "webkitTransformEnd"
        : "transformend";

    function embiggen(element) {
      element.addEventListener(TRANSFORM_END, function(e) {
        element.style[TRANSFORM_PROPERTY] = "scale(2)";
      });
      element.style[TRANSFORM_PROPERTY] = "scale3d(2,2,0)";
    }

    let z = document.getElementById("zoomer");

    z.addEventListener("click", function(e) {
      embiggen(z);
    });
  })();
</script>
```

- 다양한 모바일 브라우저에 적용하기 위해 웹킷 prefix를 체크해야 함
  - 다시 선명하게 만드는 트랜스폼은 그래픽 메모리를 해제하는 것
    - 이론적으로 디바이스는 공유 메모리를 사용하는데, GPU 역시 공유 메모리를 사용
    - GPU는 디바이스가 사용하는 만큼의 메모리를 사용함
      - ex) 디바이스에서 구동되는 게임을 개발하는 것
    - 브라우저에서 게임을 구현하는 것은 더욱 복잡함
      - 브라우저는 디바이스 메모리가 충분한지를 확인하기 위해 많은 일들을 함
      - 필요하다면 플래시 저장 공간과 메모리를 변환하기도 함
- 3D 트랜스폼을 한 엘리먼트는 GPU가 관리하는 메모리에 엘리먼트 이미지를 저장할 최소한의 공간을 확보하고 있음
  - 비록 GPU를 사용하는 SW가 메모리를 효율적으로 관리하려 하지만 결국 메모리는 가득 차게 됨
    - GPU는 메모리와 플래시 공간을 변환하지 않음
- GPU의 메모리가 소진되면 브라우저는 이상하게 동작하거나 죽게 된다.

  - 속도를 올리기 위해 페이지의 모든 엘리먼트에 translate3d를 적용하지 않는 이유
  - 이상적인 것 : 꼭 필요할 때만 3d 트랜스폼을 사용하고 다 사용한 후에는 메모리를 해제하는 것
    - 만일 트랜스폼을 여러 번 적용한다면 엘리먼트의 상태를 DOM 외부에 저장해서 엘리먼트 상태를 알기 위해 매번 DOM을 읽는 것을 피할 수 있을 것

- 매트릭스 사용하기

  - 다른 트랜스폼과 약간 다른 형태의 트랜스폼 함수가 존재
    - 이 함수들은 일련의 숫자들로 구성 & 모든 CSS 트랜스폼 함수들이 하는 일을 본질적인 접근을 통해 수학적으로 할 수 있음
      - JS에서 고급스러운 동작 & 엘리먼트의 상태를 유지하는 작업도 DOM을 살펴보는 것에 의존하지 않으면서 매우 간단하게 만들어줌
    - 또 다른 좋은 점 : 트랜스폼의 getComputedStyle() 값은 DOM의 정보를 항상 트랜스폼 매트릭스 형태의 수식으로 보여줌

- 트랜스포메이션(TRANSFORMATION) 매트릭스 이해하기
  - 매트릭스 : 그리드(grid) 형태의 숫자
    - 2D 트랜스폼은 항상 3X3 매트릭스, 2D 트랜스폼에서 처음 4개의 값은 매트릭스 자체를 명시하고 마지막 2개의 값이 변화하는 것을 의미

```css
125346001transform: matrix(1, 2, 3, 4, 5, 6);
```

- 매트릭스의 가장 마지막 줄은 0,0,1이기 때문에 이들을 굳이 기록할 필요가 없음
  - 따라서 2D 트랜스폼 문법에는 오직 6개의 값만 존재
  - 매트릭스를 적용하기 위해선 상단 위 2줄의 가장 오른쪽에 있는 엘리먼트 값들을 곱해야 함
    - 트랜슬레이션(translation) 적용을 위해 전체 매트릭스를 모두 이해할 필요는 없고 오직 2가지만 이해하면 된다는 의미
  - 어떤 매트릭스를 사용할지와 트랜슬레이션에 영향을 주는 것은 오직 2개의 값 뿐이라는 것
    - 3D 트랜스폼에서는 3개

```css
100010001-webkit-transform: matrix(1, 0, 0, 1, 0, 0);
transform: matrix(1, 0, 0, 1, 0, 0);
```

- 어떤 객체를 변동하려면 하이라이트 된 마지막 2개의 값을 바꾸어주면 됨

  - 단위는 픽셀로 가정되기 때문에 기록할 필요 없음
  - 따라서 엘리먼트를 10픽셀, 오른쪽으로 20픽셀 아래로 이동시키려면 매트릭스에 다음처럼 표시

  ```css
  -webkit-transform: matrix(1, 0, 0, 1, 10, 20);
  transform: matrix(1, 0, 0, 1, 10, 20);
  ```

- 이동 다음으로 많이 사용되는 트랜스폼은 엘리먼트의 크기를 조절하는 것

  - 4개 값들 중 1들은 엘리먼트 크기를 조정하는 데 사용됨
    - 첫 번째 값은 수평적 크기 조정을, 두 번째 값은 수직적 크기 조정을 함
    - 따라서 어떤 엘리먼트에 10픽셀 오른쪽, 20픽셀 아래, 2배 확대 된 트랜스폼을 적용하려면
    ```css
    -webkit-transform: matrix(2, 0, 0, 2, 10, 20);
    transform: matrix(2, 0, 0, 2, 10, 20);
    ```

- 3D 트랜스폼은 보기에 복잡해 보이지만, 2D와 크게 다르지 않음

```css
1 0 0 0
0 1 0 0
0 0 1 0
0 0 0 1
```

- 숫자가 더 많아졌지만 X 값과 Y 값은 이전과 동일하고 새로 Z값이 추가됨
  - 위 트랜스폼을 3D로 변경하면

```css
-webkit-transform: matrix3d(2,0,0,0,
                            0,2,0,0,
                            0,0,1,0,
                            10,20,0,1)

transform: matrix3d(2,0,0,0,
                            0,2,0,0,
                            0,0,1,0,
                            10,20,0,1)
```

- 3D 트랜스폼이지만 2차원밖에 사용하지 않기 대문에 Z 값들은 바뀌지 않음
  - 3D 효과를 이용하면 매우 재미있는 일들을 할 수 있음
- 모든 트랜스폼들은 엘리먼트 스냅샷을 제공하는데 이런 스냅샷들을 간단히 리스트로 취합한 뒤 일괄 수행하면 동시에 여러 개의 트랜스 폼을 적용할 수 있음
  - 트랜스폼들을 수학적으로 변환하여 하나의 매트릭스에 구현하면 비교적 명확하고 어렵지 않게 구현할 수 있음

* 애니메이션은 단순히 눈으로 보기에만 좋은 것이 아닌 모던한 인터페이스를 디자인 하는데 중요한 부분을 담당하고 있음
  - 애니메이션의 속도를 높이기 위해선 JS를 피해야 하지만 실제로는 많은 웹사이트에서 JS를 사용하고 있는 것이 현실

# 자바스크립트 성능 최대화하기

신중하게 클라이언트 코드를 만들더라도 조금만 지나면 그 코드가 심하게 느려지는 것을 종종 발견하곤 함

## 성능 테스트와 디버깅

- 카고 컬트(cargo cults)

  - JS의 성능에 대한 많은 조언이 이와 같은 방식으로 적용됨
  - 개발자들은 그들이 무엇을 왜 하는지에 대한 이해도 없이 심지어는 도움이 되는지 여부조차 모른채 그들이 들었던 조언을 그대로 코드에 사용하고 있음
  - 브라우저 엔진은 계속 변하고, 디바이스의 진화는 진행 중
    - 모든 성능 향상 팁들을 항상 여과 없이 받아들이는 것은 좋은 생각이 아님
  - 내가 세운 가정에 대한 실험과 그 가정에 대한 테스트 그리고 그 검증 결과를 신뢰하는 것이 자바스크립트 성능을 향상할 수 있는 가장 좋은 마인드

- 과학적인 방법

  - 해결해야 할 문제를 정함
  - 해결 방법에 대한 가설을 세움
  - 가설을 테스트한다
  - 결과를 검토한다
  - 결론을 도출한다

    - 위와 같은 간단한 테스트들로 대부분의 성능 문제를 해결할 수 있음

  - console.time()을 이용한 간단한 테스트
    - JS 테스트 : 보통 스크립트 수행에 걸리는 시간을 파악하는 것
    - 안드로이드 용 크롬 & ios의 사파리
      - console.time(label) 함수를 호출하고 끝날 때 console.timeEnd(label) 호출하면 구할 수 있음
    - 해당 레이블(label)에 대해 두 함수 사이의 경과된 시간을 알려줌
      - 대부분의 경우에 잘 동작하면서도 비교적 간단한 테스트 방법이라 할 수 있음
  - JsPerf도 있지만 생략

## 쓰기 전용 DOM

- 웹페이지에서 자바스크립트를 사용하는 주된 이유는 DOM에 어떤 동작을 적용하기 위해서!

  - 엘리먼트에 애니메이션 효과를 준다든지, 엘리먼트의 값을 변경하는 것 등이 그런 예
  - 불행히도 DOM은 자바스크립트에 비해 상당히 느리기 때문에!!
    - DOM에 어떤 동작을 적용하는 것은 많은 비용을 지불해야 함
      - 읽기조차 그리 빠르지 않음

- DOM에서 ID에 의해 엘리먼트를 찾아 스타일이 적용되지 않은 값을 읽는 것은 비교적 빠른 편

  - 객체에서 값을 읽는 것보다는 느림
  - offsetHeight와 같이 더 많은 비용을 지불하는 값을 가져오면 더욱 느려짐

- DOM 캐시

  - DOM으로부터 데이터를 읽는 것은 확실히 피할 수 없지만 데이터 캐시를 영리하게 사용하면 그 횟수를 획기적으로 줄일 수 있음
  - 만일 어떤 DOM에 다시 접근할 것 같으면 적어도 DOM의 레퍼런스 정도는 JS 변수에 저장해 놓는 것이 좋음
    - 혹시 접근한 일이 많지 않더라도 필요한 값을 자바스크립트에 저장해 놓으면
      - 해당 값이 업데이트될 때 DOM과 변수 모두를 한꺼번에 업데이트할 수 있어 이후 DOM에 다시 접근할 필요가 없어진다.
  - 캐시의 사용은 일반적인 구현보다 조금 복잡해지지만 성능을 올리기 위한 특별한 방법을 생각하려 애쓰는 것보다
    - 불필요한 DOM의 접근을 찾아서 줄여주는 것이 훨씬 쉽고 효율적이다.
  - 만약 DOM으로부터 같은 값을 두 번 이상 사용하는 동작을 발견하면 가장 첫 동작을 캐시에 저장해서 사용하는 것이 좋음
    - 미리 알고 있는 값을 저장해서 사용하는 것 역시 DOM의 중복 접근을 막을 수 있음
  - ex) 엘리먼트의 가로 길이를 확장하는 JS 애니메이션에서 가로 길이를 확장할 때마다 엘리먼트의 크기를 체크하는 것을 원하지 않을 것
    - 따라서 DOM 노드의 포인터를 캐시에 저장해 놓으면 매번 DOM 노드에 접근할 필요가 없음

  ```javascript
  let el = document.getElementById("grow");

  let w = el.offsetWidth;

  // 초깃값의 지속적인 사용, DOM으로부터 값을 가져오지 않음
  function render() {
    w = w + 5;
    el.style.width = w + "px";
  }

  function loop() {
    if (w < 800) {
      webkitRequestAnimationFrame(loop);
      render();
    }
  }

  loop();
  ```

- DOM은 왜 느릴까???
  - DOM이 노드를 찾는 동작보다 메모리에서 값을 가져오는 동작이 빠른 것은 당연
  - 몇몇 DOM 동작은 스타일 계산을 다시 해야 하기 떄문에 더욱 느릴 수 밖에 없음
  - 모든 offset\* 값들은 이러한 문제를 가지고 있는데 이보다 더 큰 문제는 DOM 동작이 blocking 모드로 작동되는 것
    - DOM 동작이 블러킹 모드에 들어가면 사용자 인터페이스를 포함해 그 어떤 기능도 수행되지 않음
      - 스크롤은 예외

## 사용자 피드백 우선순위 정하기

- 사용자가 성능을 인지하는 실질적인 부분은 바로 피드백

  - JS의 성능 문제를 해결하려면 사용자 피드백을 우선 대상으로 삼아야 함
  - 사용자 피드백을 제외한 모든 것은 기다려 줄 있음

- 순서에 의한 지연
  - 브라우저에서 JS는 단일 스레드에서 동작하는 데 이는 JS 엔진이 한 번에 한 가지 일만 할 수 있다는 것을 의미
  - DOM에 관련된 동작 역시 같은 스레드에서 처리됨
    - 이런 스레드 => UI 스레드라 부름
  - 한 스레드에서 여러 가지 작업을 동시에 할 수 있는 것
    - 모든 작업을 하나의 큐에 넣은 다음 스레드가 한가할 때 처리하기 때문에 가능한 것
  - 만약 어떤 DOM 작업이 느리게 진행되고 있으면 새로 발생한 이벤트는 큐에 들어가고 앞선 작업이 끝나야만 수행됨
    - 만일 어떤 DOM 리딩에 의해 지체되는 중에 처리될 수 없다는 것을 알 수 있음
    - 템플릿 컴파일 or AJAX 응답 처리와 같은 느린 JS 작업에도 동일하게 적용됨
      - 만약 브라우저가 바빠서 사용자 인터페이스가 동작하지 않으면 이는 효과적인 사용자 인터페이스가 X
        - 사용자 피드백을 위해 우선순위를 다시 정하는 이유
- 중요하지 않은 작업 순위 조정

  - 만약 브라우저가 바쁜 상태일 때 사용자 피드백을 주는 것 & AJAX 응답과 같이 시간이 걸리는 작업이 동시에 존재하면 중요하지 않은 작업을 뒤로 미룰 수 있음
    - 작업의 수행 순서를 조정해야 함
    - 플래그가 설정되어 있는 작업은 나중에 수행하는 방식으로 구현 가능

  ```javascript
  let uibusy = false;
  function handleResponse(response) {
    if(uibusy) {
      window.setTimeout(function(){
        handleResponse(response)
      }), 100);
    }
    else {

    }
  }
  ```

  - respone 핸들러는 작업 가능한 시간까지 대기한다.

## 무한 스크롤(infinite scroll)

- 무한 스크롤 : 서버에서 가져온 콘텐츠를 페이지 마지막에 계속해서 덧붙이는 UI 패턴

  - 매우 효율적인 방법 & 널리 사용됨

- 인터페이스를 위한 템플릿과 CSS

- 무한 스크롤 스크립트

  - 무한스크롤 효과를 내기 위해선 사용자가 특정 길이 이상 스크롤을 할 수 없도록 임계치를 정의해야 함
  - 임계치에 다다르면 스크롤이 멈추면 서버로부터 콘텐츠를 가져와 페이지에 덧붙이는 작업이 이루어짐
  - document의 탑과 viewport의 탑 사이의 거리를 window.pageYOffset이라 함
    - 만약 이 값이 바디의 offsetHeight + viewport height 값보다 크면 페이지의 끝에 다다른 것
    - 조심해야 할 부분 : 새로운 콘텐츠를 로딩할 때 발생하는 지연
      - 이러한 지연 : 임계치를 viewport 높이보다 더 크게 잡아주면 피할 수 있음
      - 사용자가 콘텐츠의 바닥에 도착해서 새로운 콘텐츠를 불러오려 할 때 이미 로딩되어 있는 콘텐츠를 가져옴

  ```javascript
  function handleScroll(e) {
    if (window.scrollY + 1000 > document.body.offsetHeight) {
      fetchBirds();
    }
    handleDefer();
  }
  window.addEventListener("scroll", handleScroll);

  function fetchBirds() {
    if (fetching) {
      return;
    } else {
      fetching = true;
    }

    window.birdData.fetchPhotos("seagull", page++, function(data) {
      console.time("render");
      let len = data.length;
      for (let i = 0; i < len; i++) {
        document.getElementById("wrapper").innerHTML += template(data[i]);
      }
      fetching = false;
      handleDefer();
      console.time("render");
    });
  }
  ```

- console.time을 이용해 렌더링 시간을 측정
  - 이후에 성능을 향상하려 할 때 많은 도움을 줄 수 있음
- DOM에 삽입하는 과정이 많은 수의 이미지에 적용될 경우에는 문제가 될 수 있음
  - 이미지들을 가능한 빨리 삽입하려 하기 때문
  - 많은 수의 이미지를 동시에 다운로드하면 브라우저의 다운로드 슬롯(slot)이 가득 차기 때문에 이미지가 나타나는 시간이 지연됨
    - 게다가 이미지 로딩이 느려져서 이미지가 부분적으로 화면에 나타남

```html
<img class="img" data-src="{{url_n}}" src="/empty.gif"></a>
```

- 이 템플릿의 img 태그는 src 프로퍼티에 실제 이미지를 가지고 있지 않고, handleDefer() 함수에서 이미지를 화면에 보여줄 때
  - 해당 이미지에 대한 실제 src를 로드함
  - 백그라운드에서 이미지를 다운로드하는 횟수를 줄여주기 때문에 실제 페이지에서 더 빠르게 동작할 수 있음
    - 사용자의 돈 & 배터리를 절약 가능

```javascript
function isVisible(node) {
  let scrollTop = window.scrollY,
    offTop = node.offsetTop,
    offsetHeight = node.offsetHeight,
    innerHeight = window.innerHeight,
    topViewPort = scrollTop,
    bottomViewPort = scrollTop + innerHeight;

  return offTop + offsetHeight > topViewPort && offTop < bottomViewPort;
}

function handleDefer() {
  let list = document.querySelectorAll(".slide");
  for (let i = 0, len = list.length; i < len; i++) {
    thisImg = list[i].querySelector(".img");
    if (thisImg.src) {
      continue;
    }

    if (isVisible(list[i])) {
      let src = thisImg.getAttribute("data-src");
      if (src) {
        thisImg.src = src;
        thisImg.removeAttribute("data-src");
      }
    }
  }
}
```

- 스크롤을 멈출 때 이미지가 모두 pop되는 것처럼 보임
  - 안드로이드에선 스크롤에 대한 프레임률이 좋지 않음
    - 여러 가지 성능 문제(스크롤 핸들러 등)
  - 안드로이드의 스크롤 이벤트는 사용자가 스크롤할 때마다 반복적으로 발생함
  - 사파리는 스크롤 이벤트가 사용자가 스크롤할 때, 정확히는 스크롤 애니메이션이 끝날 때 딱 한 번 발생
  - 아이폰에서는 스크롤하는 동안 인터페이스의 변화를 주는 어떤 코드도 동작하지 않음
    - 해결책 : 스크롤 핸들러에 타이머를 연결하는 것

```javascript
let lastScrollY = window.pageYOffset,
  scrollY = window.pageYOffset,
  innerHeight,
  topViewPort,
  bottomViewPort;

function handleScroll(e, force) {
  if (!force && lastScrollY == window.scrollY) {
    window.setTimeout(handleScroll, 100);
    return;
  } else {
    lastScrollY = window.scrollY;
  }

  scrollY = window.scrollY;
  innerHeight = window.innerHeight;
  topViewPort = scrollY - 1000;
  bottomViewPort = scrollY + innerHeight + 1000;
  if (window.scrollY + innerHeight + 2000 > document.body.offsetHeight) {
    fetchBirds();
  }

  handleDefer();
  window.setTimeout(handleScroll, 500);
}

window.setTimeout(handleScroll, 500);

fetchBirds();
```

- 윈도우(window) 값을 캐시에 저장해 다른 함수들(check visibility와 같은)이 활용할 수 있도록 함
- 양쪽 모두 스크롤 변화를 매 100ms마다 체크

  - 아이폰과 스크롤 이벤트를 발생하는 다른 기기에서 스크롤에 대한 성능 향상 효과를 얻을 수 있음
  - 성능 향상을 위한 많은 방법들이 있지만, 이미지에 로딩에 대한 고의적인 지연

- 이미지를 불러오는 과정 : 일반적으로 src 값을 세팅하는 것

  - 이미지가 화면에 보일 때가 되면 브라우저는 이미지 데이터를 가져오고 화면에 보여주기 시작
    - 부작용 존재 : 이미지가 전체가 한 번에 로딩되지 않고 부분적으로 로딩되면 사용자가 느리다는 느낌을 가질 수 있음
  - 부분 로딩 대신 이미지가 모두 로딩될 때까지 기다렸다가 한 번에 보여주는 방법
    - 부분 로딩보다 실제로는 느리지만 사용자에게는 빠르다는 느낌을 줌
  - 일반적인 로딩 대신 프리로드를 하도록 handleDefer 함수를 수정하고, 로딩이 완료되면 클래스를 변경함

- 이미지가 로딩될 때 애니메이션 효과가 적용됨
  - 애니메이션 효과로 인해 페이지가 느리다는 느낌이 줄어들 것이며 사용자가 빠르다고 인지할 만한 성능을 가질 수 있음
  - write-only DOM 전략을 적용해 슬라이드에 대한 정보를 DOM 대신 슬라이드캐시(SlideCache)에서 가져오는 것
  - DOM이 수정되는 경우는 새로운 콘텐츠가 덧붙여질 때이기 때문에 데이터는 updateSlideCache 함수가 필요로 할 때까지 캐시에 저장되어 사용될 수 있음

```javascript
let slideCache;

function updateSlideCache(node) {
  let list = node.querySelectorAll('.slide'),
  len = list.length, obj;

  slideCache = [];

  for(let i = 0; i < len ; i++){
    obj ={
      node: list[i],
      id:list[i].getAttribute('data-id');
      img:list[i].querySelector('.img');
    }

    obj.src = obj.img.getAttribute('data-src');
    slideCache.push(obj);
  }
}
```

- node : 새로 추가된 슬라이드, handleDefer 함수는 데이터를 DOM에서 직접 가져오지 않고 오직 이 캐시에서만 가져옴
  - 또 다른 성능 개선 부분은 isVisible 함수
    - 이 코드에서 handleDefer 함수의 수행 시간 중 절반은 isVisible() 함수에서 소비됨
  - 많은 DOM에서 많은 정보를 가져온 후 그것들을 계산
- DOM 안의 슬라이드가 변화할 가능성은 거의 없기 때문에 이 함수 역시 높은 확률로 캐시 사용이 가능함

```javascript
let slideMap = {};

function isVisible(id) {
  let offTop, offsetHeight, data;

  if (slideMap[id]) {
    offTop = slideMap[id].offTop;
    offsetHeight = slideMap[id].offsetHeight;
  } else {
    node = document.getElementById("s-" + id);
    offsetHeight = parseInt(node.offsetHeight);
    offTop = parseInt(node.offsetTop);
    data = {
      node: node,
      offTop: offTop,
      offsetHeight: offsetHeight
    };

    slideMap[id] = data;
  }

  if (offTop + offsetHeight > topViewPort && offTop < bottomViewPort) {
    return true;
  } else {
    return false;
  }
}
```

- 렌더링 자체는 느리지 않고, DOM에 삽입하는 작업이 느릴 뿐
  - 노드에 스트링을 추가한 다음 DOM에 덧붙이는 것이 2배 더 빠름

```javascript
function fetchcBird() {
  if (fetching) {
    return;
  } else {
    fetching = true;
  }

  window.birdData.fetchPhotos("seqgull", page++, function(data) {
    console.time("render");
    let len = data.length,
      str = "",
      frag;

    for (let i = 0; i < len; i++) {
      str += template(data[i]);
    }
    frag = document.createElement("div");
    frag.innerHTML = str;
    document.getElementById("wrapper").appendChild(frag);
    updateSlideCache(frag);
    fetching = false;
    handleScroll(null, true);
    console.timeEnd("render");
  });
}
```

- 성능 최적화는 과학적으로 접근해야 함
  - 가정을 세우고 그에 대한 테스트를 한 뒤 실제 데이터에 근거해서 결론을 내려야 함
  - But, 사용자가 인지했을 때 더 빠르다고 생각되면 실제로는 비효율적이라도 그것을 선택해야 함
    - 가장 중요한 것은 개발자의 생각이 아닌 사용자의 피드백이기 때문...

# 기본적인 제스처

모바일 기기들이 데스크톱 컴퓨터를 대체할 수 있는 이유 중 하나가 터치 인터페이스의 활용

이것을 더욱 강력하게 만들어주는 것이 제스처

제스처 : 일반적으로 손가락을 이용해 동작, 제스처를 통해 어떠한 변화를 주기 위해 미리 정해진 일련의 연속된 동작을 손가락으로 실행하는데...

이에 대한 결과로 사진이 넘겨지거나, 페이지 스크롤, 줌인 등의 동작이 발생

미리 정해진 동작 이외의 제스처를 시도하면 기기는 어떤 반응도 하지 않음, 이렇게 미리 정해진 제스처들은 어떤 의미에서 키보드의 단축키와 비슷

사용자들은 스와이프 같은 것은 아주 기본적인 제스처이기 때문에 당연히 동작할 거라고 생각할 뿐만 아니라 아주 부드럽게 움직이기를 바람

좋은 터치 인터페이스들은 많은 곳에서 필요로 함

## 왜 제스처인가?

- 제스처는 탭처럼 그리 간단하지 않음, 제스처를 구현하기 위해 일정 시간 동안 일어나는 변화를 분석할 필요가 있음
- 브라우저 자체에서 몇몇 제스처들이 지원되긴 하지만 기능이 매우 제한적

- 이렇게 힘든 제스처를 왜 사용하는가? 데스크톱에서 사용하기에 클릭만으로 충분하지 않은가?

  - 바로 많은 사용자들이 제스처가 당연히 동작할 거라고 생각하기 때문
  - 만일 어떤 사용자가 터치 인터페이스를 마주하게 된다면 당연히 스와이프(줌인, 줌아웃)를 시도할 것

- 터치 인터페이스 관습

  - 가장 일반적인 관습 : 스와이프
    - 순차적으로 동작하는 슬라이드 쇼 같은 데에서 왼쪽으로 오른쪽으로 스와이프를 시도
  - 제스처를 사용하면 좋은 이유가 사용자 기대 외에..
    - 바로 사용하기 쉽다는 것
    - ex) 달리는 지하철에서 작은 모바일 기기의 화살표를 손가락으로 터치하기는 매우 어려운데 스와이프를 하기는 너무 쉽음
      - 스와이프 동작의 인지범위가 매우 크기 때문

- 추가 가능으로서의 제스처

  - 제스처가 훌륭하다는 것은 맞지만, 항상 모든 이에게 유용하지 않음
  - 어떤 사람들은 제스처를 좋아하지 않거나 심지어 그것을 사용할 수조차 없음
    - 모바일 스크린 리더를 사용하는 사람들 = 제스처를 사용할 수 없기 때문에...
      - 스와이프 역시 의미가 없음
  - 제스처를 사용할 수 없는 사람들을 생각한다면 기본적인 인터페이스를 모두 구현한 다음 추가 기능으로 제스처를 덧붙이는 것이 가장 합리적인 방법
    - 이러한 접근 방식 : 점진적인 강화(progressive enhancement)

- 단계를 적용한 구현

  - 레이어 별로 기능을 구현한 다음 브라우저에서 레이어에 맞는 기능을 사용하는 것
  - 물론 기본 레이어에는 모든 브라우저에서 동작하는 기능이 있기 때문에 사용자가 기능 자체를 사용하지 못하는 일은 발생하지 않음
  - 터치 인터페이스에서 제스처는 최상위 레이어에 위치하고 있음
    - 제스처가 최상위 레이어에 있어야만 의존성 문제를 조금이나마 줄일 수 있음

- 점진적으로 강화되는 터치 컨트롤러 만들기

  - ex) 현관 등이 켜졌는지 꺼졌는지의 상태를 보여주어야 함

  ```html
  <h1>A Simple Switch</h1>
  <h2>
    Power: <span id="status">OFF</span>
    <h2>
      <form action="/power">
        <label for="power">Power:</label>

        <div class="switchwrap">
          <div class="switch"></div>
          <input type="checkbox" id="power" />
        </div>
        <p><input type="submit" value="Submit" /></p>
      </form>
    </h2>
  </h2>
  ```

  - /power submit을 처리할 수 있는 서버 코드가 있다고 가정하면.
    - CSS에서는 마크업 안의 div 태그를 아름다운 작은 스위치로 바꿔주고 삽입 버튼은 숨겨서 화면에 보이지 않도록 하자

  ```css
  body {
    font-family: sans-serif;
    background: #ccc;
  }

  .switchwrap {
    background: linear-gradient(to bottom, #cccccc 0%, #eeeeee 100%);
  }

  .switchwrap .switch {
    background: linear-gradient(
      to bottom,
      #b8e1fc 0%,
      #a9d2f3 10%,
      #90bae4 25%,
      #90bcea 37%,
      #90bff0 50%,
      #6ba8e5 51%,
      #a2daf5 83%,
      #bdf3fd 100%
    );
  }

  form {
    text-align: center;
    width: 150px;
    position: relative;
    margin: auto;
    font-size: 18px;
  }

  input {
    font-size: 18px;
  }

  .js .switchwrap {
    position: relative;
    width: 150px;
    height: 30px;
    margin: auto;
    box-shadow: inset 1px 1px 3px #000, inset -1px -1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    overflow: hidden;
  }

  .js .switchwrap .switch {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
    width: 28px;
    height: 28px;
    border: 1px solid #333;
    border-radius: 25px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), inset 1px 1px 1px rgba(255, 255, 255, 0.6);
  }

  .js .switchwrap #power {
    position: absolute;
    top: 0;
    left: -100px;
  }
  ```

- 자바스크립트를 지원하지 않는 브라우저에선 동작하지 않음

  - 페이지 상단에 다음과 같이 클래스를 추가하는 짧은 코드를 삽입하면 이런 스타일들을 활성화할 수 있음

  ```html
  <script type="text/javascript">
    document.body.className = "js";
  </script>
  ```

  ```javascript
  // 기본적인 toggle
  let isOn = false;
  let $ = function(selector) {
    return document.querySelector(selector);
  };

  function turnOn() {
    $("#status").innerHTML = "OFF";
    isOn = false;
  }

  let theSwitch = $(".switch");

  theSwitch.addEventListener("click", function(e) {
    if (isOn) {
      theSwitch.style.left = "0px";
      turnOff();
    } else {
      theSwitch.style.left = "119px";
      turnOn();
    }
  });
  ```

- 인터페이스가 동작됨, 클릭으로는 가능하지만, 터치 디바이스라는 점을 감안하면 뭔가 부자연스러움

  - 클릭 대신 터치 인터페이스에 어울리는 무언가로 대체해 주어야 함
  - 데스크톱이라면 문제없겠지만 터치 디바이스에서 클릭은 자연스럽지 않기 때문에 swipe를 사용해보자

- 터치 이벤트 리슨하기

  - 터치 이벤트를 사용하기 위해서는 4개의 중요 이벤트들을 리슨해야 함
    - touchstart, touchmove, touchcancel, touchend.
    - 스와이프를 사용하기 위해 먼저 touchstart가 발생한 이후 손가락을 얼마나 이동했는지를 알아보고 전등을 켤 만큼 충분히 이동했는지를 판별
      - 충분히 이동했다면 전등을 켜짐으로 변경하자
  - 4개의 이벤트를 추가하는 가장 간단한 방법은 switch와 if문을 사용해 4개의 모든 이벤트를 하나의 함수에서 처리하는 것

  ```javascript
  let TRANSITION_END = "webkitTransitionEnd",
    TRANSITION_CSS = "-webkit-transition",
    TRANSFORM_CSS = "-webkit-transform",
    TRANSFORM = "webkitTransform",
    TRANSITION = "webkitTransition";

  if (document.body.style.transform) {
    (TRANSITION_END = "transitionend"),
      (TRANSITION_CSS = "transition"),
      (TRANSFORM_CSS = "transform"),
      (TRANSFORM = "transform"),
      (TRANSITION = "transition");
  }

  let l = $("form").offsetLeft;

  let startLeft;

  function handleTouch(e) {
    switch (e.type) {
      case "touchstart":
        break;
      case "touchmove":
        break;
      case "touchcancel":
        break;
      case "touchend":
        break;
    }
  }
  ```

  - 손가락 위치를 계산하려면 먼저 시작점을 알고 있어야 함
    - 이 경우엔 form의 맨 왼쪽임을 간단히 알 수 있음, offsetLeft 프로퍼티를 이용해 값을 구한다.
      - 그 후 제스처의 궤적을 계속 추적해 나가자
      - 이 코드는 API를 정규화하는데 도움을 줌
  - 하나의 함수에서 모든 이벤트를 처리하는 또 다른 이유는
    - 이벤트를 처리하는 부분이 서로 연관되어 있기 때문
    - 비록 4개의 이벤트로 나누어져 있지만 실제로는 제스처의 시작, 중간, 끝으로 구분되는 하나의 동작이라 할 수 있음
      - touchstart가 발생하면 제스처의 시작값을 저장
        - 나중에 발생하는 이벤트에 대한 액션을 처리할 때 사용됨
      - touchmove 이벤트 때에는 사용자에게 피드백을 주기 위해 화면에 변경 사항을 반영해 주고 제스처가 얼마나 진행되었는지를 체크
      - touchend에는 제스처 과정을 정리하고 스냅백(snap-back) 애니메이션의 수행 여부를 판별함

- 사용자에게 피드백 주기

  - 사용자에게 실제 스위치와 같은 느낌을 주기 원함
  - 실제 느낌을 주려면 손가락에 의해 스위치가 작동하는 것이 가장 좋은 방법
    - 스위치 자체가 손가락의 작은 움직임에도 민감하게 반응해야 함
      - 사용자들은 사용하기 전에 미리 작은 테스트를 통해 터치 인터페이스의 사용이 가능한지 확인하려 하기 때문
      - touchmove 이벤트에서 손가락의 움직임에 따라 스위치가 변화되도록 할 것
        - 이러한 변화를 매우 빈번하게 발생시켜 손가락 밑에 항상 스위치가 있게 만든다.

  ```javascript
  goTo = e.touches[0].pageX - l;

  if (goTo < 119 && goTo > 0) {
    lastX = e.touches[0].pageX - l;

    theSwitch.style[TRANSFORM] =
      "translate3d(" + (e.touches[0].pageX - l) + "px" + ",0,0)";
  }

  if (goTo > 60 && !isOn) {
    console.log("turn on");
    turnOn();
  } else if (goTo < 60 && isOn) {
    console.log("turn off");
    turnOff();
  }
  break;
  ```

  - move 이벤트가 발생할 때마다 스위치 위치를 변경하기 때문에 터치한 지점을 바탕으로 스위치의 위치를 매번 재계산함
    - 스위치 위치가 지정 범위 안에 있는지를 확인
      - 그렇지 않으면 스위치가 엉뚱한 곳에 있을 것이기 때문이다.
    - 계산한 위치가 정상적이라면 3D 트랜스폼을 이용해 스위치를 변경함
      - 변경된 부분이 한계치를 넘었는지 확인해서 만약 넘었다면 스위치를 토글함

- 스냅핑 백(SNAPPING BACK)

  - 스냅핑 백은 제스처를 일단 시작했지만, 한계치를 넘을 만큼 움직이지는 않아서 의도했던 동작을 실행하지 않음을 말함
  - 이럴 경우 순식가에 원래 형태로 돌아오는 게 아니라 되돌아가는 애니메이션을 실행
  - 이 동작을 부드럽게 만들기 위해 ease-out 함수를 트랜지션에 적용
    - 지속 시간이 상수이기 때문에 고무줄처럼 빠르게 원래 있던 곳으로 돌아감

  ```javascript
  case 'touchcancel':

  case 'touchend':
      if(lastX > 60) {
        endPoint = 119;
      }
      else {
        endPoint = 0;
      }

      theSwitch.style[TRANSITION] = TRANSFORM_CSS + ' .1s ease-out';
      theSwitch.style[TRANSFORM] = 'translate3d(' + endPoint + 'px,0,0)';
      break;

  ```

  - touchcancel 이벤트는 제스처가 무언가로부터 인터럽트를 당했을 때 발생
    - 이런 경우 제스처가 끝난 것으로 간주하기 때문에 touchcancel은 touchend에서 처리함

## 터치 라이트박스 만들기

- 라이트 박스 : 큰 이미지를 보여주기 위해 modal dialog box를 생성함
  - 그리고 보통 좌우에는 슬라이드를 넘기기 위해 previous, next와 같은 버튼이 있음
- 모바일용 라이트박스는 제스처를 지원(아이폰에 있는 포토 브라우저와 비슷한)
- 모바일 기기에서 라이트박스가 꽤 흔해졌기 때문에 사용자들은 라이트박스가 좀 더 빠르게 동작하기를 원함

  - But, 라이트박스가 손가락으로 움직인다는 점
  - 제스처를 멈추었을 때 슬라이드는 다음 위치로 가 있든지 아니면 원래 위치로 되돌아와야 함

- 네이티브 제스처 불가능하게 만들기

  - 라이트박스 : 사용자들이 사진을 가능한 최대로 보기 원하기 때문에 화면 전체를 차지함
    - 이러한 종류의 인터페이스를 생성할 때는 정확한 위치를 정하는 것이 원활한 작업을 위한 중요한 요소
      - 사용자가 핀치(pinch) 좀과 같은 원래 있는 제스처를 실행해서 인터페이스의 크기를 변경해 버리면 라이트박스 인터페이스가 이상하게 깨지기 때문
        - 이를 방지하기 위해 viewport 메타 프로퍼티에 몇 가지 값을 추가한다.
        ```html
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        ```
  - 핀치 제스처를 제공하는 올바른 방법 : JS를 통해 해당 제스처를 재정의해 주는 것

- 섬네일 HTML 만들기

  - 정렬되지 않은 섬네일 리스트를 포함한 div
  - 슬라이드를 보여줄 수 있는 충분한 정보들이 라이트박스에 있는지 확인하기 위해 데이터(data) 프로퍼티를 사용할 것
  - 섬네일이 확대되었을 때를 위해 data-full-width 값과 data-full-height 값을 포함함
    - 이러한 값들은 이미지를 fetch할 때 가져와야 하지만 여기서는 좀 더 빠르게 동작시키기 위해 서버의 round-trip을 기다리지 않고 미리 정해진 값으로 슬라이드를 만듬

  ```html
  <ul>
    <li>
      <!-- each thumbnail looks like this -->
      <a
        class="slidelink"
        href="http://www.flickr.com/photos/steveberardi/7819216372"
      >
        <img
          data-flickr-url="http://www.flickr.com/photos/steveberardi/7819216372"
          alt="Black-Chinned Hummingbird"
          data-full-height="495"
          data-full-width="640"
          src="http://farm9.staticflickr.com/8287/7819216372_f189440d20_q.jpg"
          `height="75"
          width="75"
        />
      </a>
    </li>
    <!-- additional thumbnails follow the same format -->
  </ul>
  ```

- 섬네일 스타일링

```css
html {
  background: #f1eee4;
  font-family: georgia;
  color: #7d7f94;
}

h1 {
  color: #ba4a00;
}

.welcome {
  text-align: center;
  text-shadow: 1px 1px 1px #fff;
}

.welcome h1 {
  font-size: 20px;
  font-weight: bold;
}

.welcome {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 5px;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.carousel {
  margin: 5px;
}

.carousel ul li {
  height: 70px;
  width: 70px;
  margin: 5px;
  overflow: hidden;
  display: block;
  float: left;
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 1);
}

.slidelink {
  display: inline-block;
  height: 75px;
  width: 75px;
  border: 2px solid red;
}

.slidewrap {
  position: absolute;
  width: 100%;
  overflow: hidden;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: #444;
  display: none;
}

.slide {
  width: 100%;
  height: 200px;

  position: absolute;
  text-align: center;
  top: 40px;
  left: 0px;
}

.slide div {
  display: inline-block;
  height: 100px;
  width: 100px;
  background-size: 100%;
  background-repeat: no-repeat;
}

.slide .caption {
  display: block;
  position: absolute;
  text-align: left;
  top: 0px;
  left: 0px;
  width: 150px;
  height: 25px;
  background: rgba(0, 0, 0, 0.5);
}

.slide .caption a {
  color: #fff;
  text-decoration: none;
  font-family: sans-serif;
}

.controls {
  font-family: arial;
  font-size: 28px;
}

.controls a {
  color: #fff;
  text-decoration: none;
}
```

## 기본적인 라이트박스 만들기

- 라이트박스에 대한 데이터 수집 및 초기화, 라이트박스 숨기기 및 다시 보여주기, 그 외 부가적인 라이트박스 HTML 코드 만들기(이전, 다음, 회색 백그라운드), 슬라이드, 터치 이벤트 핸들링

  - 이러한 기능들이 애플리케이션이 아니라 위젯에서 동작하기 때문에 우리는 별도의 데이터 레이어를 구성할 필요가 없음

- 브라우저 정규화

  - 작업을 시작하기 전에 앞으로 구현할 기능들이 모든 브라우저에서 동작하도록 몇몇 기능을 추가

  ```javascript
  function $(selector) {
    return document.querySelector(selector);
  }

  var TRANSITION = 'transition', TRANSFORM = 'transform', TRANSFORM_END = 'transitionend', TRANSFORM_CSS = 'transform', TRANSITION_CSS = 'transition';

  if(typeof document.body.style.webkitTransform !== undefined) {
    TRANSITION = 'webkitTransition';
    TRANSFORM = 'webkitTransform';
    TRANSITION_END = 'webkitTransitionEnd;
    TRANSFORM_CSS = '-webkit-transform';
    TRANSITION_CSS = '-webkit-transition';
  }
  ```

  - 유용한 함수들

    - -webkit-transform과 translate3d를 계속 입력하는 대신 이를 대체할 수 있는 몇 가지 유용한 함수를 만들어보자

    ```javascript
    function setPosition(node, left) {
      node.style[TRANSFORM] = "translate3d(" + left + "px, 0, 0)";
    }

    function addTransitions(node) {
      node.style[TRANSITION] = TRANSFORM_CSS + " .25s ease-in-out";
      node.addEventListener(TRANSITION_END, function(e) {
        window.setTimeout(function() {
          e.target.style[TRANSITION] = "none";
        }, 0);
      });
    }

    function cleanTransitions(node) {
      node.style[TRANSITION] = "none";
    }
    ```

  - 라이트박스 위젯은 사용자의 직접적인 요청과 상관없이 페이지가 처음 로딩되면 초기화됨
    - 초기화 자체는 매우 가벼운 동작이기 때문에 사용자가 섬네일 보는 데 별다른 영향을 끼치지 않으며 오히려 라이트박스를 빠르게 시작할 수 있기 때문
      - 반응이 더 빠르다는 느낌을 줄 수 있음
  - 초기화
    - 위젯이기 때문에 생성자 형태로 구현

  ```javascript
  function Lightbox(selector) {
    let containerNode = $(selector),
      wrapper,
      chromeBuilt,
      currentSlide = 0,
      slideData = [];

    (boundingBox = [0, 0]), (slideMap = {});

    init();

    return {
      show: show,
      hide: hide
    };
  }
  ```

  - 이 생성자 : 객체를 리턴, 이러한 방식으로 개인적으로 사용하는 내부 함수를 숨길 수 있음
    - 간단한 인터페이스만 노출시키면서 사용자들이 이 위젯을 사용할 수 있음
    - 생성자 안에서의 init 함수 호출 => 보다 명료한 의미를 가질 수 있음
      - 같은 의미를 가진 부분들을 하나의 함수에 모아놓으면 리팩토링에 도움이 됨
  - init 함수는 모든 li 노드를 찾음, 섬네일을 찾아서 slideData 배열에 정보를 저장함
    - 이 배열은 슬라이드 쇼 기능에 필요한 모든 정보를 담고 있음
    - 배열을 사용하면 라이트박스를 실행할 때 맞는 슬라이드를 찾기 위해 배열 전체를 검색하기 때문에 약간의 지연이 발생 가능
      - 보다 빠르게 동작하기 위해 slideMap을 사용함
      - 슬라이드 맵을 사용하면 배열 전체를 검색하지 않고도 원하는 슬라이드 객체를 불러올 수 있음

  ```javascript
  // 라이트 박스 초기화
  function init() {
    let slides = containerNode.querySelectorAll("li");
    let thisSlide, thisImg;

    for (let i = 0; i < slides.length; i++) {
      (thisSlide = {}), (thisImg = slides[i].querySelector("img"));

      thisSlide.url = thisImg.getAttribute("src").replace(/_s\_q/, "_z");

      thisSlide.height = thisImg.getAttribute("data-full-height");
      thisSlide.width = thisImg.getAttribute("data-full-width");
      thisSlide.link = slides[i].querySelector("a").href;

      slideMap[thisSlide.link] = slideData.push(thisSlide) - 1;
      thisSlide.id = slideMap[thisSlide.link];
    }
  }

  // 라이트 박스 보여주기
  function show(startSlide) {
    if (!chromeBuilt) {
      buildChrome();
      attachEvents();
    }

    wrapper.style.display = "block";
    boundingBox = [window.innerWidth, window.innerHeight];
    goTo(slideMap[startSlide]);
    attachTouchEvents();
  }
  ```

* 크롬 콘텐츠 만들기

  - buildChrome 함수는 라이트박스를 위한 HTML wrapper를 만듬
  - chromeBuilt를 true로 설정해 사용자가 라이트박스를 숨기거나 보여줄 때 라이트박스 크롬을 매번 만들지 않음

  ```javascript
  let wrapperTemplate = function() {
    let div = document.createElement("div");
    div.innerHTML =
      '<div class="controls">' +
      '<a class="prev" href="#">prev</a> | ' +
      '<a class="next" href="#">next</a></div>' +
      "</div>";
    div.className = "slidewrap";
    return div;
  };

  function buildChrome() {
    wrapper = wrapperTemplate();
    document.body.appendChild(wrapper);
    boundingBox[0] = wrapper.getAttribute("offsetWidth");
    chromeBuilt = true;
  }
  ```

  - 크롬 만들기의 마지막 과정은 이전과 다음 링크에 이벤트 핸들러를 연결

  ```javascript
  function handleClicks(e) {
    let target = e.target();

    if (target.className == "next") {
      e.preventDefault();
      goTo(currentSlide + 1);
    } else if (target.className == "prev") {
      e.preventDefault();
      goTo(currentSlide - 1);
    } else if (target.className != "flickr-link") {
      e.preventDefault();
      hide();
    }
  }

  function attachEvents() {
    wrapper.addEventListener("click", handleClicks);
  }
  ```

  - goto문 어지간하면 사용하지 말자

* 슬라이드 만들기

  - 라이트박스를 시작하면 클릭했던 슬라이드는 viewport에 있고, 이전 슬라이드는 왼쪽에, 다음 슬라이드는 오른쪽에 있음
  - wrapper에서 사용했던 템플릿 방식을 다시 적용해서 슬라이드 템플릿을 제작

  ```javascript
  function slideTemplate(slide){
  ;
  ;
  +
  +
  ;
  ;
  }
  ```

  - 이미지 렌더링 작업에 GPU를 이용하기 위해 img 대신 div를 사용하기로 함
    - 성능을 향상할 수 있을 뿐 아니라 메모리 사용량도 줄일 수 있음
  - buildSlide 함수는 약간 더 복잡
    - 슬라이드 데이터를 슬라이드 템플릿에 넣는 것 외에 슬라이드가 viewport에 맞는지도 확인해야 함
    - 이미지가 사용 가능한 공간보다 얼마나 큰지 알기 위해 scaleFactor를 사용
      - 만약 슬라이드에 맞지 않다면 알맞은 크기로 조정된 다음 DOM에 덧붙여짐

  ```javascript
  function buildSlide(slideNum) {
    let thisSlide,
      s,
      img,
      scaleFactor = 1,
      w,
      h;

    if (!slideData[slideNum] || slideData[slideNum].node) {
      return false;
    }

    thisSlide = slideData[slideNum];
    s = slideTemplate(thisSlide);

    img = s.querySelector("div");

    if (thisSlide.width > boundingBox[0] || thisSlide.height > boundingBox[1]) {
      if (thisSlide.width > thisSlide.height) {
        scaleFactor = boundingBox[0] / thisSlide.width;
      } else {
        scaleFactor = boundingBox[1] / thisSlide.height;
      }
      w = Math.round(thisSlide.width * scaleFactor);
      h = Math.round(thisSlide.height * scaleFactor);
      img.style.height = h + "px";
      img.style.width = w + "px";
    } else {
      img.style.height = thisSlide.height + "px";
      img.style.width = thisSlide.width + "px";
    }

    thisSlide.node = s;
    wrapper.appendChild(s);
    setPosition(s, boundingBox[0]);
    return s;
  }
  ```

- 슬라이드 움직이기

  - goTo : 요청 슬라이드와 인접 슬라이드를 특정 위치로 이동시키는 일을 함
    - 요청 슬라이드가 이전 or 다음 슬라이드가 아니라면 애니메이션을 시작하기 전의 처음 슬라이드 위치로 이동함

  ```javascript
  function goTo(slideNum) {
    let thisSlide;

    if (!slideData[slideNum]) {
      goTo(currentSlide);
    }

    if (
      Math.abs(currentSlide - slideNum) !== 1 &&
      slideData[currentSlide] &&
      slideData[currentSlide].node
    ) {
      setPosition(
        slideData[currentSlide].node,
        slideNum < currentSlide ? boundingBox[0] : 0 - boundingBox
      );
    }

    thisSlide = slideData[slideNum];

    buildSlide(slideNum);
    n;
    {
    }

    {
    }

    {
    }
  }
  ```

- 처음 or 마지막 슬라이드에 다다르면 gray out 효과 등으로 사용자에게 알려주는 게 좋음

- 제스처 추가하기

  - 대부분의 터치 디바이스는 기본적으로 포토 뷰어를 내장
  - 다양한 앱들은 UI 관습 같은 것을 만들었음
    - 사진을 왼쪽으로 스와이프하면 다음 슬라이드가 나오는 것
      - 이 동작은 매우 단순해서 제스처를 실행하면 다음 사진을 보여줄 뿐 사용자에게 어떠한 피드백을 주지 않음
    - 어떠한 방식으로든 사용자에게 피드백을 주는 것이 좋음
      - 사용자가 스와이프를 할 때 손가락이 움직인 만큼 이전 or 다음 슬라이드를 부분적으로 보여줌
      - 그리고 사진이 움직일 때 해당 인터페이스를 조작하고 있다는 것을 보여주기 위해 환영을 보여줌

- 리스닝 터치 이벤트

  - 터치 이벤트를 지원하는 많은 라이브러리가 있지만, 일반적으로 사용 권장하지 않는다고 함
  - 터치 이벤트를 핸들링할 때 엘리먼트 역시 제스처에 의해 업데이트 되기 때문에 그 어떤 부분에 어떤 방식으로든 지연이 발생할 수 있음
    - 이러한 지연은 사용자에게 애플리케이션이 느리다는 느낌을 가지게 함
    - 간접적인 레이어를 추가하는 것은 무조건 성능에 영향을 미칠 수 밖에 없음
    - 라이브러리 사용을 추천하지 않는 것은 이러한 이유 때문
  - 인터페이스가 전체 화면을 모두 차지하고 있기 때문에 단순히 슬라이드의 터치 이벤트만 리슨하지 않음
    - 실제로 사용자가 터치 타깃을 힘들게 찾아서는 안 되기 때문에 DOM의 root 노드의 터치 이벤트를 리슨하기로 함
      - 스크린 어디에서나 스와이프가 동작함

  ```javascript
  // 모든 터치 이벤트를 하나의 함수에서 핸들링하기로 하자
  function attachTouchEvents() {
    let bd = document.querySelector("html");
    bd.addEventListener("touchmove", handleTouchEvents);
    bd.addEventListener("touchstart", handleTouchEvents);
    bd.addEventListener("touchend", handleTouchEvents);
  }
  ```

- 터치 이벤트 핸들링

  - 제스처 동작 중 상태를 저장하기 위해 변수 3개를 사용하자
    - 제스처의 시작 포인트와 마지막 포인트가 있음(startPos, endPos)
  - touchstart 이벤트는 터치를 시작하면 발생함, 제스처가 시작되는 지점으로 기록됨, 본격적인 처리를 하기 전에 기존에 남아 있는 트랜지션이 있는지 확인해서 제거해 주어야 함
    - 새로운 트랜지션 스타일을 노드에 적용, 트랜지션이 적용되면 노드가 순식간에 바뀌지 않게 됨
      - 사용자 피드백 효과가 추가됨

  ```javascript
  {
    {
    }

    {
    }

    {
    }
  }
  ```

  - touchmove에서 터치가 clientX를 따라 어느 정도 이동했는지를 체크
    - 그에 따라 현재 슬라이드도 그만큼 이동시킴, 만약 슬라이드가 왼쪽으로 가면 다음 슬라이드를 보여주고 오른쪽으로 가면 이전 슬라이드를 보여줌
      - 이 방식에서 실제로 움직이는 슬라이드는 2개뿐이지만 마치 모든 슬라이드의 열이 움직이는 것 같은 환영을 추가적으로 보여줄 수 있음
    - 맵을 이용해 슬라이드 정보를 저장하면, DOM 읽기가 필요 없게 되며 오직 쓰기만 필요함

  ```javascript
  else if(e.type == 'touchmove'){
  ;

  t
  {
  ;
  {
  ;
  }

  s
  n
  {
  ;
  {
  {

  ;
  {
  ```

}

}

n
;

}

````
- 터치를 끝내면 코드는 다음 과정을 진행할 지 아니면 아무것도 하지 않을지를 결정한다.
  - 아무것도 하지 않기로 하면 슬라이드는 원래 있던 곳으로 되돌아가게 됨
    - 이 때 사용자에게 슬라이드에 변화가 없다는 피드백을 줌
  - 마지막 슬라이드를 쓸어넘기기 하면 슬라이드가 제스처 방향으로 움직이지만 다음 슬라이드가 없어 다시 원래 있던 곳으로 되돌아옴
    - 사용자에게 인터페이스가 멈추지 않았으며 마지막 슬라이드이기 때문에 다음 슬라이드를 보여줄 수 없다는 것을 명백하게 알려줌
      - goTo에서 이 기능이 포함
        - slideNum 값을 goTo 함수에게 전달하면 간단하게 재귀 처리한 뒤 동일 슬라이드에게 넘겨줌
```javascript
else if(e.type == 'touchend'){

d
{
;
{
;
{

n
;
;

{
;
;
}

{
;
;
}

}
````

- 라이트박스가 제스처 사용의 간단한 예제,,,
  - 항상 모든 일을 사용자에게 알려주어야 한다는 사실은 어느 제스처에나 동일
  - 사용자에게 인터페이스가 하는 일을 트랜지션 or 애니메이션을 통해 지속적인 피드백으로 제공해야 함

* 모바일 웹 인터페이스를 개발하다보면 swipe를 많이 사용함
  - 스와이프 : 좋은 터치 인터페이스를 만드는 데 필수적 제스처
  - 사용자에게 많은 피드백을 제공하려 할수록 좋은 인터페이스를 만들 수 있음
