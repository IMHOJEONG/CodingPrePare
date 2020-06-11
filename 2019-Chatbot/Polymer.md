# Polymer

## 로컬 DOM 추가하기  

폴리머 엘리먼트를 만들기 위해 Shadow DOM을 이용하게 됨. 

-Shadow DOM
    html 컴포넌트 형태로, 컴포넌트 요소 안에 자식 요소 엘리먼트를 넣을 경우, 
    자동으로 트리를 구성하여 자체적인 엘리먼트를 구성하여준다. 

=> 스타일과 마크업이 분리된 형태의 돔트리를 재구성해주는 것


## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

