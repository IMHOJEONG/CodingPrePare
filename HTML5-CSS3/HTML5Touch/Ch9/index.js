// let isOn = false;
// let $ = function(selector) {
//   return document.querySelector(selector);
// };

// function turnOn() {
//   $("#status").innerHTML = "OFF";
//   isOn = false;
// }

// let theSwitch = $(".switch");

// theSwitch.addEventListener("click", function(e) {
//   if (isOn) {
//     theSwitch.style.left = "0px";
//     turnOff();
//   } else {
//     theSwitch.style.left = "119px";
//     turnOn();
//   }
// });

// let TRANSITION_END = "webkitTransitionEnd",
//   TRANSITION_CSS = "-webkit-transition",
//   TRANSFORM_CSS = "-webkit-transform",
//   TRANSFORM = "webkitTransform",
//   TRANSITION = "webkitTransition";

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
      break;
    case "touchcancel":
      if (lastX > 60) {
        endPoint = 119;
      } else {
        endPoint = 0;
      }

      theSwitch.style[TRANSITION] = TRANSFORM_CSS + " .1s ease-out";
      theSwitch.style[TRANSFORM] = "translate3d(" + endPoint + "px,0,0)";
      break;
    case "touchend":
      if (lastX > 60) {
        endPoint = 119;
      } else {
        endPoint = 0;
      }

      theSwitch.style[TRANSITION] = TRANSFORM_CSS + " .1s ease-out";
      theSwitch.style[TRANSFORM] = "translate3d(" + endPoint + "px,0,0)";
      break;
  }
}

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

function $(selector) {
  return document.querySelector(selector);
}

var TRANSITION = "transition",
  TRANSFORM = "transform",
  TRANSFORM_END = "transitionend",
  TRANSFORM_CSS = "transform",
  TRANSITION_CSS = "transition";

if (typeof document.body.style.webkitTransform !== undefined) {
  TRANSITION = "webkitTransition";
  TRANSFORM = "webkitTransform";
  TRANSITION_END = "webkitTransitionEnd";
  TRANSFORM_CSS = "-webkit-transform";
  TRANSITION_CSS = "-webkit-transition";
}

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

function slideTemplate(slide) {
  var div = document.createElement("div");
  div.className = "slide";
  div.innerHTML =
    '<div style="background-image:url(' +
    slide.url +
    ')">' +
    '<div class="caption"><a class="flickr-link" href="' +
    slide.link +
    '">By ' +
    slide.owner +
    " on Flickr</a></div" +
    "</div>";
  return div;
}

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
  buildSlide(slideNum + 1);
  buildSlide(slideNum - 1);

  //animate the slides entering and leavign
  if (thisSlide.node) {
    addTransitions(thisSlide.node);
    setPosition(thisSlide.node, 0);
  }

  if (slideData[slideNum - 1] && slideData[slideNum - 1].node) {
    addTransitions(slideData[slideNum - 1].node);
    setPosition(slideData[slideNum - 1].node, 0 - boundingBox[0]);
  }

  if (slideData[slideNum + 1] && slideData[slideNum + 1].node) {
    addTransitions(slideData[slideNum + 1].node);
    setPosition(slideData[slideNum + 1].node, boundingBox[0]);
  }

  currentSlide = slideNum;
}
