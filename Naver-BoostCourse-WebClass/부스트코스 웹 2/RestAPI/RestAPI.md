- Rest API

  - 클라이언트의 종류가 웹 브라우저, 안드로이드 앱, iOS 앱 등 다양해지면서 

    - 이러한 클라이언트들에게 정보를 제공하는 방식을 하나로 일원화
- 대표적인 방식이 HTTP프로토콜로 API를 제공하는 것
    - HTTP프로토콜로 제공하는 API를 REST API

  - API는  Application Programming Interface
  
    - ex) 자바 언어가 제공하는 클래스와 인터페이스에 대한 설명이 API문서
      - 자바 프로그래밍을 위해서는 자바 언어가 제공하는 것들이 어떤 것이 있는지를 알아야 
      - 해당 메소드가 어떻게 내부적으로 구현되어 있는지는 문서를 봐도 알 수 없음
      - 하지만, 해당 라이브러리를 사용할 때 구현코드를 알지 못해도 인터페이스만 알면 사용할 수 있음
    - 프로그래밍을 할 때 필요한 인터페이스를 API
  
  - Rest API
  
    - REpresentational State Transfer,  REST형식의 API
    - 핵심 컨텐츠 및 기능을 외부 사이트에서 활용할 수 있도록 제공되는 인터페이스
    - ex) 네이버에서 블로그에 글을 저장하거나, 글 목록을 읽어갈 수 있도록 외부에 기능을 제공하거나 우체국에서 우편번호를 조회할 수 있는 기능을 제공하거나, 구글에서 구글 지도를 사용할 수 있도록 제공하는 것
    - 웹 브라우저 뿐만 아니라 앱 등 다양한 클라이언트가 등장하면서 그러한 클라이언트들에게 대응하기 위해 REST API가 널리 사용되기 시작
    - 서비스 업체들이 다양한 REST API를 제공함으로써, 클라이언트는 이러한 REST API들을 조합한 어플리케이션을 만들 수 있게 됨 => Mashup(매시업)
  
  - REST가 아니다???
  
    - REST는 다음과 같은 스타일을 반드시 지켜야 한다고 말합니다.
  
      - client-server
      - stateless
      - cache
      - uniform interface
      - layered system
      - code-on-demand (optional)
  - 스타일이란 제약조건의 집합
    
    - 위에서 언급한 내용을 잘 지켜야만 REST라고 말할 수 있다는 의미
    - HTTP프로토콜을 사용한다면 client-server, stateless, cache, lared system, code-on-demand 등에 대해서는 모두 쉽게 구현 가능
  
      - 문제는 uniform interface
    - uniform interface의 스타일
        - 리소스가 URI로 식별되야 합니다.
        - 리소스를 생성,수정,추가하고자 할 때 HTTP메시지에 표현을 해서 전송해야 합니다.
        - 메시지는 스스로 설명할 수 있어야 합니다. (Self-descriptive message)
        - 애플리케이션의 상태는 Hyperlink를 이용해 전이되야 합니다.(HATEOAS)
      - 첫 번째와 두 번째 항목은 지키기 어렵지 않은데, 메시지가 스스로 설명할 수 있어야 하는 부분과 HATEOAS를 지원하는 것은 웹과는 다르게 API로는 쉽지 않음
    - 응답 결과에 보통 JSON 메시지(다음 시간에 간단히 다루게 됩니다.)를 사용하게 되는데, 
    
    - 이 JSON메시지가 어디에 전달되는지 그리고 JSON메시지를 구성하는 것이 어떤 의미를 표현해야만 메시지 스스로 설명할 수 있다고 말할 수 있는데, 그게 쉽지 않습니다.
    - HATEOAS
  
      - 우리가 웹 게시판을 사용할 때, 리스트 보기를 보면, 상세보기나 글쓰기로 이동할 수 있는 링크가 있습니다.
  - 상세보기에서는 글 수정이나 글 삭제로 갈 수 있는 링크가 있습니다.
      - 이렇게 웹 페이지를 보면, 웹 페이지 자체에 관련된 링크가 있는것을 알 수 있는데 이를 HATEOAS
  - 이런 HATEOAS를 API에서 제공하는 것은 쉽지 않습니다.
    - **REST API는 쉽지 않다. 그래서, 보통은 Web API(혹은 HTTP API)를 사용한다.**
    - REST의 uniform interface를 지원하는 것은 쉽지 않기 때문에, 많은 서비스가 REST에서 바라는 것을 모두 지원하지 않고 API를 만들게 됩니다.
        - REST의 모든 것을 제공하지 않으면서 REST API라고 말하는 경우도 있습니다.
      - REST의 모든 것을 제공하지 않고 Web API 혹은 HTTP API라고 부르는 경우가 있습니다.
    - 참고 자료
    - https://youtu.be/RP_f5dMoHFc
      - https://dzone.com/articles/five-clues-your-api-isnt
      - [https://beyondj2ee.wordpress.com/2013/03/21/%EB%8B%B9%EC%8B%A0%EC%9D%98-api%EA%B0%80-restful-%ED%95%98%EC%A7%80-%EC%95%8A%EC%9D%80-5%EA%B0%80%EC%A7%80-%EC%A6%9D%EA%B1%B0/](https://beyondj2ee.wordpress.com/2013/03/21/당신의-api가-restful-하지-않은-5가지-증거/)
      - https://meetup.toast.com/posts/92