# 스크롤링과 스와이핑

스크롤링, 스와이핑이 동작하지 않거나 느려지는 경우는 터치 인터페이스에서 거의 발생하지 않음

좀 더 가볍고 빠르게 만들 수 있음

## 스크롤링

- 가장 평범한 제스처 & 가장 신경 쓸 필요 없는 제스처

  - 페이지가 화면보다 작아지면 자연적으로 사라지기 때문

- 네이티브 스크롤링
  - 대부분의 브라우저에서 스크롤링은 무리 없이 동작
  - 사용자들은 어떻게 동작하는지 잘 알고 있으며, 조금이라도 이상하면 금방 눈치챔
  - 스크롤링 동작에 이상이 있다고 느끼면 사용자들은 이내 모든 사이트에 이상이 있을 거라고 의심하기 시작함
  - overflow: auto를 엘리먼트에 적용하면 되지만,
    - 몇 가지 작은 이슈가 존재
- 모든 브라우저를 지원하기 위해 JS 사용을 피해햐 하고 div를 사용해 스크롤링을 구현하는 대신 고정된 위치를 이용해야 함

  - 코드는 참고한다.

```html
<head>
  <meta name="viewport" content="width=device-width, user-scalable=no" />
</head>
<body>
  <div class="view">
    <div class="slide">
      <div class="header">
        <h1 class="title">Acorn Woodpecker</h1>
        <div class="hero">
          <div class="navigation">
            <a
              href="{{prev.path}}"
              title="Previous Bird"
              class="prev-link arrow"
            >
              <span>&#9664;</span>
            </a>
            <a href="{{next.path}}" title="Next Bird" class="next-link arrow">
              <span>&#9654;</span>
            </a>
          </div>
          <img class="hero-img" src="/images/chicken.jpg" />
        </div>
      </div>
      <div class="bd">
        <p>content...</p>
      </div>
    </div>
  </div>
</body>
```

- [HTML 특수문자표](http://ieo.kr/?mode=utils&exec=specialchar)
- 화살표를 표현하기 위해 UTF-8을 사용

  - 페이지의 용량을 줄이는 데 도움이 되고, 화살표가 무엇을 의미하는지 레이블을 추가해 사용자가 화살표를 오해하지 않도록 하면 더 나음

- 레이블을 추가하는 방법은 a 엘리먼트에 WAI-ARIA 레이블을 추가하면 됨
  - ex) aria-label="next photo"는 이 표시가 단순한 삼각형이 아니라 다음 페이지로 갈 수 있는 링크라는 것을 명확하게 알려줌

```css
body * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.header {
  height: 178px;
  position: fixed;
  overflow: hidden;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 5px solid black;
  background: #fff;
}

.hero {
  display: block;
  position: relative;
  height: 85%;
  width: 100%;
  padding-top: 5px;
  text-align: center;
  background: #000;
}

.navigation {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.navigation .arrow {
  color: #fff;
  text-decoration: none;
  position: absolute;
  height: 100%;
  width: 50%;
}

.navigation .arrow span {
  display: block;
  position: absolute;
  top: 40%;
  left: 5px;
}

.navigation .next-link {
  left: 50%;
}

.navigation .next-link span {
  left: auto;
  right: 5px;
}

.hero-img {
  display: inline;
  max-height: 100%;
  max-width: 100%;
}

.title {
  border-top: 4px solid black;
  color: black;
  height: 40px;
  font-size: 24px;
  width: 100%;
  margin: 0;
  text-align: left;
}

.bd {
  width: 100%;
  margin-top: 210px;
  padding: 0px 20px;
}
```

- 설계 상 고정된 footer가 필요하다면 우리는 콘텐츠의 바닥에 충분한 공간을 마련했는지만 확인하면 됨
  - 사용자가 스크롤을 아래로 내리더라도 텍스트의 위치가 움직이지 않음
  - 스크롤바가 화면 세로 방향에 생기는 문제

## overflow:auto

- 경우에 따라 overflow:auto가 유일한 옵션인 경우가 존재

  - ios에선 가속도 개념이 존재
    - 스크롤을 시작한 이후 점점 느려지는 것
      - 스크롤 가능한 엘리먼트들은 이 기능을 기본적으로 제공하지 않음 손가락을 떼는 즉시 멈춤
  - 이 기능을 위해 webkit의 prefix CSS 프로퍼티가 제공됨
  - 스크롤 셀렉터에 -webkit-overflow-scrolling을 추가하면 가속도가 지원됨
    - 안드로이드, 윈도우 8은 이런 기능과 상관없어 -webkit-overflow-scrolling 프로퍼티를 무시

- 안드로이드 2의 오버플로(overflow)

  - 안드로이드 2.3 이하 버전에서 overflow:auto는 overflow:hidden으로 취급됨
  - JS를 이용해 스크롤 기능을 다시 구현해야 할 것
  - 가능하면 오리지널 스크롤을 재구현하는 것은 피해야 함
    - 완벽한 재구현이 불가능하고 오래된 OS에서 돌고 있는 디바이스를 더욱 느리게 만들 수 있음
    - 엘리먼트를 이동시키는 JS 역시 오리지널 스크롤만큼 잘 동작하지 않을 것
      - 사용자들은 조금이라도 이상하면 금세 알아채곤 함

- 오리지널과 매우 유사하면서 터치 이벤트를 지원하는 스크롤을 만드는 것이 가능

  - 수레바퀴의 발명처럼 어렵게 가는 대신
  - 오버스로, iScroll 4을 사용하면 됨
    - [오버스로](https://github.com/filamentgroup/Overthrow)
    - [iScroll](https://github.com/cubiq/iscroll)
  - 사용법은 알아서 찾아보자

## 레이아웃 틀어짐

- 모바일 기기에서 사용자가 한창 집중해서 작업하는 도중에 갑자기 누군가에게 넘길 일이 생겼을 때

  - 만일 그 모바일 기기가 회전되어버리면 화면의 모든 레이아웃이 틀어지게 됨
  - 또는 그저 화면을 크게 보기 위해 pinch 제스처로 줌인을 했을 뿐인데 갑자기 사용조차 못할 정도로 화면 전체가 망가지는 경우도 존재
    - 모바일 개발에 있어 해결해야 할 도전 과제 중 하나

- 기기 회전

  - 기기를 수평으로 바꾸면 지금까지 만든 인터페이스는 전혀 사용할 수 없음
  - 일반적으로 사용자들이 콘텐츠를 볼 때 수평으로 보는 경우가 대부분
    - 수직으로 보더라도 레이아웃이 틀어지는 것을 바라지 않음
    - 문제 해결을 위한 간단한 방법은 미디어 쿼리(media query)를 사용하는 것
      - 미디어 쿼리를 사용하면 모바일 기기를 어떤 방향으로 바뀌도 레이아웃이 정상적으로 표현됨
        - ex) 모바일 기기를 수평 방향으로 바꾸면 헤더는 사이드바로 위치로 이동하며 메인 콘텐츠는 스크롤 가능하게 변경됨

- 고정된 위치 방식을 적용하여 스타일 시트 맨 아래에 방향 젆놘에 대한 미디어 쿼리를 추가함

```css
@media screen and (orientation: landscape) {
  .header {
    width: 33%;
    height: 110px;
    border-bottom: 2px solid black;
  }
  .header .hero {
    background: transparent;
  }
  .header .title {
    height: 34px;
    font-size: 14px;
  }
  .header .arrow span {
    top: 10px;
  }

  .bd {
    width: auto;
    margin: 0 10px 0 34%;
    padding: 0px;
    font-size: 12px;
  }
}
```

- [미디어 쿼리 설명](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries)

- 레이아웃을 틀어지게 하는 또 다른 일반적인 방법이 존재 => 줌

  - 고정된 위치와 줌인/줌아웃은 서로 어울리지 않음
  - 안드로이드에서 줌인/아웃을 하면 고정된 위치는 전혀 동작하지 않게 됨
    - 줌을 지원한다 해도 결과를 예측할 수 없음
  - 고정된 위치를 효과적으로 사용하려면 viewport 메타 프로퍼티에 user-scalable=no을 추가하면 됨
    - 스크롤과 줌인/줌아웃에 고정된 위치를 사용하지 않고 오버플로에 의존한다면 가능하긴 하지만 원하는대로 동작하지 않을 듯
  - [Viewport 참고 자료](https://developer.mozilla.org/ko/docs/Mozilla/Mobile/Viewport_meta_tag)

- 지금까진 기본적인 줌인/줌아웃은 항상 개별 엘리먼트가 아닌 전체 페이지에 적용되었음
  - 만약 어떤 콘텐츠를 스크롤 가능한 엘리먼트에 추가했고, 그 엘리먼트에 대해 줌인/줌아웃을 시도하면 그 엘리먼트가 아니라 전체 페이지가 줌인/줌아웃이 됨
  - 한 번 줌인/줌아웃을 하게 되면 브라우저가 엘리먼트 줌인/줌아웃과 화면 스크롤을 구분하기 힘듬
    - 스크롤 기능이 제대로 동작하지 않음
  - 개별 엘리먼트를 줌인/줌아웃을 하려면 해당 기능을 직접 구현하는 수밖에 없음

## 새 브라우저에 swiping 기능 추가하기

- 새들에 대한 정보를 JS 배열로 변환하여 저장하는 것이 필요

  - 주어진 코드에서 /bird/birdname, /fragments/birdname 이라는 2개의 endpoint을 가짐
  - fragments : 헤드 콘텐츠를 제외한 모든 HTML을 가짐
    - 스와이핑을 이용해 페이지 간 이동을 하는데
      - 라이트박스와 유사한 개념
  - 페이지를 시작함녀 이전 페이지와 다음 페이지 역시 미리 만들어서 숨김
    - 사용자가 스와이핑을 시작하면 넘기는 방향에 따라 이전 or 다음 페이지를 보여줌
  - 인접한 페이지간 위치가 겹치기 때문에 고정된 위치를 사용하는 것은 불가능
    - 스와이핑을 사용하려면 엘리먼트에 overflow:auto를 사용해야 함

- 데이터 모델 제작

  - Application의 반응 속도를 빠르게 하기 위해 페이지에 모든 새들에 대한 정보를 미리 로딩
  - 주어진 데이터를 해당 Application에 유용하게 만들기 위해 리스트를 관리하는 Object를 생성 & 해당 오브젝트는 모델로서 제공됨
  - 오브젝트는 배열 형태 But 원하는 오브젝트를 빠르게 찾을 수 있도록 lookup table로 구성됨
  - lookup Table : 이름에 의해 오브젝트를 찾을 수 있고 나중에 규모를 확장할 때 유용하게 사용될 것
    - 오직 한 번만 사용되는 싱글 오브젝트 => 모듈 형태로 구현하자
    - 성능에 있어 약간의 비용이 지불되겠지만 대신 API가 주는 여러 장점을 취할 수 있음

```javascript
let birds = function() {
  let currentBird,
    myBirdList,
    currentBird,
    myBirdList = birdList,
    birdMap = {};
};

// init 함수는 배열을 오브젝트로 변환
function init() {
  for (let i = 0, len = myBirdList.length; i < len; i++) {
    birdmap[myBirdList[i].name] = i;
  }

  setBird(thisBird);
}

function getInfo(index) {
  return myBirdList[index];
}

function nextBird() {
  return myBirdList[currentBird + 1];
}

function birdAtOffset(offset) {
  return myBirdList[currentBird + offset];
}

function getThisBird() {
  return myBirdList[currentBird];
}

function prevBird() {
  return myBirdList[currentBird - 1];
}

function setBird(birdname) {
  if (birdname.indexOf("_") !== -1) {
    matches = birdname.match(/(?:\/bird\/)?(.+)/);
    birdname = matches[1].replace("_", "");
  }

  currentBird = birdMap[birdname];
}

return {
  init: init,
  nextBird: nextBird,
  prevBird: prevBird,
  thisBird: getThisBird,
  birdAtOffset: birdAtOffset

    advance: function() {
        if(myBirdList[currentBird + 1]){
            currentBird++;
        }
    },
    setBird:setBird
}
}());
```

- 데이터를 캐시에서 가져오거나 넣기 위해 랩퍼 함수

```javascript
function getBirdData(path, callback) {
  path = path.replace("/bird/", "/fragments/");
  var data = modelCache.get(path);

  if (data) {
    window.setTimeout(function() {
      callback && callback(data);
    }, 0);
    return;
  }

  makeRequest(path, function(xhr) {
    modelCache.set(path, xhr.responseText);
    callback && callback(xhr.responseText);
  });
}
```

- 페이지 이동, 생성, 삭제와 같은 동작 제작
  - 어떤 동작이 끝났을 때 이를 사용자에게 알려주는 부분도 구현
  - 이러한 동작은 자주 발생하기 때문에 원론적으로 접근하는 것이 가장 빠름

```javascript
function $(selector) {
  return document.querySelector(selector);
}

let TRANSITION = "transition",
  TRANSFORM = "transform",
  TRANSITION_END = "transitionend",
  TRANSFORM_CSS = "transform",
  TRANSITION_CSS = "transition";

if (typeof document.body.style.webkitTransform !== undefined) {
  TRANSITION = "webkitTransition";
  TRANSFORM = "webkitTransform";
  TRANSITION_END = "webkitTransitionend";
  TRANSFORM_CSS = "-webkit-transform";
  TRANSITION_CSS = "-webkit-transition";
}

function Slide(id, content, selector) {
  this.id = id;
  this.content = content;

  this._listeners = [];

  this.selector = selector;
  this._build();
}

Slide.prototype.onMoveEnd = function(callback) {
  this._listeners.push(callback);
};
```

- 슬라이드의 변화가 끝났음을 알려주는 것도 매우 중요
  - 간단하게 구현된 옵저버는 그런 경우를 처리

```javascript
Slide.prototype._build = function() {
  let myNode, that, div;

  if (this.selector) {
    this.node = $(this.selector);
  } else {
    div = document.createElement("div");
    div.innerHTML = this.content;
    this.node = div.querySelector(".slide");
    document.querySelector(".view").appendChild(this.node);
  }
};
```

- \_build 함수 : 새 슬라이드를 DOM 안에 추가하는 일을 함
  - 삽입 작업을 빠르게 처리하기 위해 DOM에 직접 추가하는 대신 document fragment(div)에 content를 추가

```javascript
this.node.id = this.id;
myNode = this.node;
that = this;
this._handler = this.node.addEventListener(TRANSITION_END, function(e) {
  if (!that || !that._listeners) {
    return;
  }
  let i;
  myNode.style[TRANSITION] = "";
  moving = false;
  for (i = 0; i < that._listeners.length; i++) {
    if (typeof that._listeners[i] == "function") {
      that._listeners[i]();
    }
  }
});

Slide.prototype.setLeft = function(left) {
  this.node.style[TRANSFORM] = "translate3d(" + left + "px,0,0)";
};

Slide.prototype.moveTo = function(pos) {
  this.node.style[TRANSITION] = TRANSFORM_CSS + " .2d ease_out";
  this.node.style[TRANSFORM] = "translate3d(" + pos + "px,0,0)";
};

Slide.prototype.cleanTransitions = function() {
  this.node.style[TRANSITION] = "";
};

Slide.prototype.hide = function() {
  this.node.style.display = "none";
};

Slide.prototype.show = function() {
  this.node.style.display = "block";
};

Slide.prototype.destroy = function() {
  this._listeners = [];
  if (this.node.parentNode) {
    this.node.parentNode.removeChild(this.node);
  }
};
```

- 이러한 클래스는 페이지를 생성하고 조작하는 작업을 캡슐화 & 그들이 더 이상 필요하지 않을 때 깔끔하게 제거되었는지 확인

  - 캐시를 사용하기 때문에 슬라이드를 생성하는 작업은 매우 빠름
  - 다음 페이지, 이전 페이지, 현재 페이지 이렇게 3개의 페이지를 항상 유지
    - nextSlide, prevSlide, currentSlide라고 부르기로 함
    - 사이트의 메모리를 획기적을 줄일 수 있기 때문에 사이트의 속도를 빠르게 하고 메모리가 부족해서 발생하는 문제를 방지 가능

- 일반적으로 스와이프를 구현할 때 기능에 대한 피드백에 집중
  - prepare 함수에서 이루어지며 사용자들이 현재 슬라이드를 보기만 할 뿐 아무런 작업도 하지 않는 트랜지션 종료 시점에 호출됨

```javascript
let currentSlide,
  nextSlide,
  lastSlide,
  moving = false,
  THRESHOLD = 100,
  nextSlide,
  prevSlide;

function prepare() {}
```

- 다음 새와 이전 새가 있는지 데이터 레이어에 물어봄
  - 있다면 해당 슬라이드에 대한 데이터가 미리 생성되어 알맞은 위치에 있는지 확인함

```javascript
let nextBird = birds.nextBird(),
  prevBird = birds.prevBird();

if (nextBird && (!nextSlid || nextSlide.id !== nextBird)) {
  getBirdData(birds.nextBird().path, function(resp) {
    nextSlide = new Slide(birds.nextBird().name, resp);
    nextSlide.hide();
    nextSlide.setLeft(window.innerWidth);
  });
} else if (!nextBird) {
  nextSlide = false;
}

if (prevBird && (!prevSlide || prevSlide.id != prevBird)) {
  getBirdData(birds.prevBird().path, function(resp) {
    prevSlide = new Slide(birds.prevBird().name, resp);
    prevSlide.hide();
    prevSlide.setLeft(-window.innerWidth);
  });
} else if (!prevBird) {
  prevSlide = false;
}
```

- 위의 함수는 첫 번째 슬라이드에 대한 모든 초기 설정 작업을 위해 가장 먼저 수행됨

  - goTo 함수 : 방향을 말해주는 정수형의 direction 파라미터를 받아서 이전 or 다음 슬라이드로 이동할 수 있도록 하자
    - onMoveEnd라는 콜백 함수를 등록해서 작업을 정리하고 prepare 함수를 호출해 피드백이 아닌 다른 작업을 하기 전까지 효과적으로 기다림

```javascript
function goTo(direction) {
  moving = true;

  if (direction == 1) {
    currentSlide.onMoveEnd(function() {
      currentSlide.destroy();
      prevSlide = currentSlide;
      currentSlide = nextSlide;
      birds.advance();
      prepare();
    });

    currentSlide.moveTo(0 - window.innerWidth);
    nextSlide.moveTo(0);
  } else {
    currentSlide.onMoveEnd(function() {
      currentSlide.destroy();
      currentSlide = prevSlide;
      nextSlide = currentSlide;
      birds.goBack();
      prepare();
    });

    currentSlide.moveTo(window.innerWidth);
    nextSlide.moveTo(window.innerWidth);
    prevSlide.moveTo(0);
  }
}
```

- 인터페이스를 초기화 및 터치 이벤트 리슨

```javascript
currentSlide = new Slide(thisBird, false, ".slide");

prepare();

document.addEventListener("touchstart", handleTouch);
document.addEventListener("touchmove", handleTouch);
document.addEventListener("touchend", handleTouch);

// 캐시 준비
birds.birdAtOffset(-2) && getBirdData(birds.birdAtOffset(-2).path);

birds.birdAtOffset(2) && getBirdData(birds.birdAtOffset(2).path);

birds.birdAtOffset(3) && getBirdData(birds.birdAtOffset(3).path);
```

- 라이트 박스에선 터치 이벤트 핸들러를 document root에 추가했음

  - 스크롤링이 touchMoved의 기본 이벤트라서 터치 이벤트 핸들러를 이전 방식처럼 처리한다면 스크롤이 제대로 동작하지 않을 수 있음
  - 이를 처리하기 위해 preventDefault(3)를 이벤트 핸들러 안에서 호출해 준다

- 리스너는 일반적으로 헤더 엘리먼트에 추가함

  - 문제가 되는 것이 앞으로 계속해서 헤더를 생성하고 지우게 되는데,
  - 리스너 역시 지워지고 다시 붙여지는 일이 반복된다는 의미
    - 코드의 복잡성이 증가되는 요인이 됨

- 헤더에 넣는 방식 대신 터치 이벤트를 체크해서 핸들링하는 방식을 사용하자

  - 만일 터치 이벤트가 발생한 부분이 스크롤 영역이라면 이벤트 처리를 중단

- 스와이프로 페이지 간 이동을 하고 텍스트를 스크롤 할 수 있다면

  - 디바이스를 회전했을 때 한계점이 너무 크다는 것
  - 디바이스를 가로로 회전하면 터치 대상이 작아지기 때문에 한계점을 변경하도록 하자

- 디바이스의 방향 : window.orientation 프로퍼티에 정의됨
  - 이 값이 0이면 세로 방향이고 90 or -90이면 가로 방향
- orientationchange 이벤트를 리슨해 이 값을 체크할 수 있음

```javascript
window.addEventListener("orientationchange", function() {
  if (window.orientation !== 0) {
    THRESHOLD = 25;
  } else {
    THRESHOLD = 100;
  }
});
```

- 모든 안드로이드 디바이스에서 orientationchange 이벤트를 지원하지는 않음

  - 어떤 안드로이드는 기기를 회전하면 resize 이벤트를 발생 & 다른 안드로이드는 이벤트를 늦게 발생하기도 함

- 모든 안드로이드에서 프로퍼티 값은 정상적으로 설정하는 것 같음
  - orientationchange, resize 이벤트를 처리하는 핸들러들을 모두 추가하자
  - 정상적으로 회전 이벤트를 발생하지 못하는 기기를 위해 이 함수를 호출할 필요가 있음
- [pointer 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)

- [touch actions](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action)

- 각각의 터치 이벤트들을 체크함으로써 어떤 포인터 or 터치 이벤트가 발생했는지를 알 수 있음 & 필요한 값을 어떤 방식으로 가져올지 결정할 수 있음

* 대부분의 디바이들은 터치스크린이라는 오직 하나의 입력장치만 가지고 있음
  - 손가락 하나만을 이용해 가능한 간단하게 동작하기를 바람

# Pinching과 다른 복잡한 제스처
