## SSAFY_FinalProject

- SSAFY 프로젝트이지만, 제가 했던 부분만 올려두었습니다. 

- apiserver : 외부 open api 요청만을 전담으로 처리하는 서버 

- authserver : 인증 서버

- frontend : 과제 프론트엔드 화면 

### 구동 방법

- apiserver와 authserver의 root 위치에서, 각각 node server.js를 통해 api서버와 auth서버를 구동시켜준다.
- 각각 폴더에서 필수 모듈은 꼭 설치해주세요!
```shell
    npm i 
    node server.js
```

- 다음으로 frontend를 구동시켜줍니다. 
```shell
    npm i
    npm run start 
```
