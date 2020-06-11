# StateOfJs

- 전반적인 JS 생태계가 어떠한지 감을 잡을 수 있다???

  - 가장 많이 사용하는 프론트엔드 프레임워크는?
  - 백엔드, 데이터 레이어??

- JS FLAVORS
- FRONT END FRAMEWORKS
- DATA LAYER
- BACK END FRAMEWORKS
- MOBILE & DESKTOP

- 진한 빨강색 => 많이 사용해보았고 계속 사용할 경우
- 연한 빨강색 => 많이 사용해보았지만 다시 사용안 할 경우
- 진한 초록색 => 이것을 들어보았고, 사용해보고 싶은 경우
- 연한 초록샌 => 들어보았지만, 관심이 없는 경우

- 회색 : 프레임워크를 전혀 들어본적이 없는 경우

===

1. JS Flavors

   - JS로 컴파일되는 프로그래밍 언어들을 뜻함
   - typescript, reason, elm, clojurescript, purescript

     - typescript가 큰 점유율

   - typescript는 Javascript의 superset이라 확장하는 것이라...

2. Front End Frameworks

   - React, Vue, Angular, Preact, Ember, Svelte
   - svelte 컨셉이 흥미로워
     - 컴파일을 하고 나면 JS가 되어서...
     - 유저가 웹에가면 어떤 라이브러리든 다운받지 않고, 모든 게 바닐라 JS인 것
   - 리액트로 웹 사이트를 만들면, 유저들은 리액트 라이브러리를 다운로드 받아야 함
     - svelte에서는 컴파일하는 순간 몽땅 vanillaJs가 됨
     - 라이브러리가 없어도 되니까

3. Data Layer

   - Redux가 1등, Apollo가 따라잡고 있는 중, GraphQL 관심도 엄청남
     - GraphQL, Apollo, Redux...
   - redux가 감안해야 할 것이 많고 잘못된 용도로 사용되고 있어서

4. Back End Frameworks

   - Express, Next.js, Koa
   - nextJs : 리액틀 프레임워크로 봐야한다??
   - koa, meteor 등 존재

5. Mobile & Desktop
   - Electron, React Native가 우세
   - flutter, NativeScript
   - flutter는 매우 훌륭한 툴

[관련 링크](https://www.youtube.com/watch?v=YPMARa8Ex58)

===

- 자바스크립트 활용 5가지

  1. 하이브리드 앱

  - IONIC
  - 아마존에서 많이 활용됨
  - wechat
    - 크로스플랫폼
      - React Native
      - Discord, Tencent, Pinterest, facebook, Instagram

  2. 맥, 윈도우, 리눅스를 위한 데스크톱 소프트웨어

  - JS, Electron을 활용하면 가능함
  - electron : html, css, js를 가져다가 컴파일해서 윈도우, 맥, 리눅스를 위한 SW를 만들어줌
  - slack, skype, gitHub, atom, vsc가 이걸로 만들어짐

  3. JS로 비디오 게임도 쉽게 만들 수 있음

  - Phaser Js, Impact JS
  - node.js, socket.io를 활용해 interactive, 멀티플레이어 2d 게임도 제작 가능
  - https://wanderers.io/

  4. 3D/VR/AR

  - three.js

    - 홍보, 포트폴리오, 이커머스 등 가능
    - arcade fire 그룹이 존재
    - geolocation, canvas, JS, webGL 등등을 활용해서 좀 더 몰입되는 경험을 제공함 (브라우저에서!)
    - Heraclus로 three.js로 만들어진 게임
    - Campo Alle Commete
      - 이커머스 웹 사이트
    - A-Frame, AR.js
      - 카메라와 디바이스의 센서를 활용한 웹 사이트를 제작가능

  - AR로 구현된 쇼핑몰 만들 수 있음

  5. 2D, 3D => tensorflow.js를 이용해서 만들 수 있음

- 다양한 것들을 만들어보자!

[참고 자료](https://www.youtube.com/watch?v=NMHQkAS7XEc)

===
